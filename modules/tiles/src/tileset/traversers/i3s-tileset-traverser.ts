import {load} from '@loaders.gl/core';
import TilesetTraverser from './tileset-traverser';

import {getLodStatus} from '../helpers/i3s-lod';
import TileHeader from '../tile-3d';
import I3STileManager from './i3s-tile-manager';
import {TILE_REFINEMENT} from "@loaders.gl/tiles";
import {TILE3D_OPTIMIZATION_HINT} from "../../constants";

export default class I3STilesetTraverser extends TilesetTraverser {
  private _tileManager: I3STileManager;

  constructor(options) {
    super(options);
    this._tileManager = new I3STileManager();
  }
  //
  compareDistanceToCamera(a, b) {
    // Sort by farthest child first since this is going on a stack
    return b._distanceToCamera === 0 && a._distanceToCamera === 0
        ? b._centerZDepth - a._centerZDepth
        : b._distanceToCamera - a._distanceToCamera;
  }
  updateTileVisibility(tile, frameState) {
    super.updateTileVisibility(tile, frameState);

    //  Optimization - if none of the tile's children are visible then this tile isn't visible
    if (!tile.isVisibleAndInRequestVolume) {
      return;
    }

    const hasChildren = tile.children.length > 0;
    if (tile.hasTilesetContent && hasChildren) {
      // Use the root tile's visibility instead of this tile's visibility.
      // The root tile may be culled by the children bounds optimization in which
      // case this tile should also be culled.
      const firstChild = tile.children[0];
      this.updateTileVisibility(firstChild, frameState);
      tile._visible = firstChild._visible;
      return;
    }

    if (this.meetsScreenSpaceErrorEarly(tile, frameState)) {
      tile._visible = false;
      return;
    }

    const replace = tile.refine === TILE_REFINEMENT.REPLACE;
    const useOptimization =
        tile._optimChildrenWithinParent === TILE3D_OPTIMIZATION_HINT.USE_OPTIMIZATION;
    if (replace && useOptimization && hasChildren) {
      if (!this.anyChildrenVisible(tile, frameState)) {
        tile._visible = false;
        return;
      }
    }
  }

  meetsScreenSpaceErrorEarly(tile, frameState) {
    const {parent} = tile;
    if (!parent || parent.hasTilesetContent || parent.refine !== TILE_REFINEMENT.ADD) {
      return false;
    }

    // Use parent's geometric error with child's box to see if the tile already meet the SSE
    return !this.shouldRefine(tile, frameState);
  }
  //

  shouldRefine(tile, frameState) {
    tile._lodJudge = getLodStatus(tile, frameState);
    return tile._lodJudge === 'DIG';
  }

  updateChildTiles(tile, frameState): boolean {
    const children = tile.header.children || [];
    // children which are already fetched and constructed as Tile3D instances
    const childTiles = tile.children;
    const tileset = tile.tileset;

    for (const child of children) {
      const extendedId = `${child.id}-${frameState.viewport.id}`;
      // if child tile is not fetched
      const childTile = childTiles && childTiles.find((t) => t.id === extendedId);
      if (!childTile) {
        let request = () => this._loadTile(child.id, tileset);
        const cachedRequest = this._tileManager.find(extendedId);
        if (!cachedRequest) {
          // eslint-disable-next-line max-depth
          if (tileset.tileset.nodePages) {
            request = () => tileset.tileset.nodePagesTile.formTileFromNodePages(child.id);
          }
          this._tileManager.add(
            request,
            extendedId,
            (header) => this._onTileLoad(header, tile, extendedId),
            frameState
          );
        } else {
          // update frameNumber since it is still needed in current frame
          this._tileManager.update(extendedId, frameState);
        }
      } else if (childTile) {
        // if child tile is fetched and available
        this.updateTile(childTile, frameState);
      }
    }
    return false;
  }

  async _loadTile(nodeId, tileset) {
    const {loader} = tileset;
    const nodeUrl = tileset.getTileUrl(`${tileset.url}/nodes/${nodeId}`);
    // load metadata
    const options = {
      ...tileset.loadOptions,
      i3s: {
        ...tileset.loadOptions.i3s,
        isTileHeader: true,
        loadContent: false
      }
    };

    return await load(nodeUrl, loader, options);
  }

  /**
   * The callback to init TileHeader instance after loading the tile JSON
   * @param {Object} header - the tile JSON from a dataset
   * @param {TileHeader} tile - the parent TileHeader instance
   * @param {string} extendedId - optional ID to separate copies of a tile for different viewports.
   *                              const extendedId = `${tile.id}-${frameState.viewport.id}`;
   * @return {void}
   */
  _onTileLoad(header, tile, extendedId) {
    // after child tile is fetched
    const childTile = new TileHeader(tile.tileset, header, tile, extendedId);
    tile.children.push(childTile);
    const frameState = this._tileManager.find(childTile.id).frameState;
    this.updateTile(childTile, frameState);

    // after tile fetched, resume traversal if still in current update/traversal frame
    if (this._frameNumber === frameState.frameNumber) {
      this.executeTraversal(childTile, frameState);
    }
  }
}
