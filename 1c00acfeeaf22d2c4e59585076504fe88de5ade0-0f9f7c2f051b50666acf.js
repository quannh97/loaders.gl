(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"6okn":function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b})),r.d(t,"c",(function(){return m}));var n=r("o0o1"),a=r.n(n),o=(r("wcNg"),r("HaE+")),i=r("KQm4"),s=r("rOwd"),u=r("Ns70"),c=r("xszv"),l=r("FJ6+"),f=r("H3Yp"),d=r("Ow3C");function p(e,t,r){return e.url=r.url,e.featureData&&(e.featureUrl=e.url+"/"+e.featureData[0].href),e.geometryData&&(e.contentUrl=e.url+"/"+e.geometryData[0].href),e.textureData&&(e.textureUrl=e.url+"/"+e.textureData[0].href),e.attributeData&&(e.attributeUrls=Object(d.a)(e)),b(e)}function b(e){var t,r=e.obb?[].concat(Object(i.a)(u.a.WGS84.cartographicToCartesian(e.obb.center)),Object(i.a)(e.obb.halfSize),Object(i.a)(e.obb.quaternion)):void 0;if(e.mbs)t=[].concat(Object(i.a)(u.a.WGS84.cartographicToCartesian(e.mbs.slice(0,3))),[e.mbs[3]]);else if(r){var n=(new s.c).fromCenterHalfSizeQuaternion(r.slice(0,3),e.obb.halfSize,e.obb.quaternion).getBoundingSphere();t=[].concat(Object(i.a)(n.center),[n.radius]),e.mbs=[].concat(Object(i.a)(e.obb.center),[n.radius])}return e.boundingVolume={sphere:t,box:r},e.lodMetricType=e.lodSelection[0].metricType,e.lodMetricValue=e.lodSelection[0].maxError,e.transformMatrix=e.transform,e.type=l.f.MESH,e.refine=l.e.REPLACE,e}function m(e,t,r){return h.apply(this,arguments)}function h(){return(h=Object(o.a)(a.a.mark((function e(t,r,n){var o,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.url=n.url,!t.nodePages){e.next=8;break}return t.nodePagesTile=new f.a(t,r),e.next=5,t.nodePagesTile.formTileFromNodePages(0);case 5:t.root=e.sent,e.next=12;break;case 8:return i=Object(d.c)(t.url+"/nodes/root",null===(o=r.i3s)||void 0===o?void 0:o.token),e.next=11,Object(c.a)(i,t.loader,{i3s:{loadContent:!1,isTileHeader:!0,isTileset:!1}});case 11:t.root=e.sent;case 12:t.basePath=t.url,t.type=l.c.I3S,t.lodMetricType=t.root.lodMetricType,t.lodMetricValue=t.root.lodMetricValue;case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},AQfu:function(e,t,r){"use strict";r.d(t,"a",(function(){return $}));var n=r("o0o1"),a=r.n(n),o=(r("wcNg"),r("KQm4")),i=r("HaE+"),s=r("xszv"),u=r("pH77"),c=r("rePB"),l=r("zXfU"),f=r("Nw31"),d=r("Ns70"),p=r("j7CB"),b=r("F2Cy"),m=r("AvBZ"),h=r("Ow3C"),v=r("B6CW");function g(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=e[Symbol.iterator]()).next.bind(r)}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){Object(c.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w=new l.a([0,0,0]),T={jpeg:p.a,png:p.a,"ktx-etc2":m.a,dds:m.a};function j(e,t,r,n,a){return S.apply(this,arguments)}function S(){return(S=Object(i.a)(a.a.mark((function e(t,r,n,o,i){var u,c,l,f,d,b,v;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.content=r.content||{},r.content.featureIds=r.content.featureIds||null,r.content.featureData=_(r,n),r.content.attributes={},!r.textureUrl){e.next=25;break}return c=Object(h.c)(r.textureUrl,null==o||null===(u=o.i3s)||void 0===u?void 0:u.token),l=T[r.textureFormat]||p.a,e.next=9,fetch(c);case 9:return f=e.sent,e.next=12,f.arrayBuffer();case 12:if(d=e.sent,l!==p.a){e.next=20;break}return b={image:{type:"data"}},e.next=17,i.parse(d,b);case 17:r.content.texture=e.sent,e.next=25;break;case 20:if(l!==m.a){e.next=25;break}return e.next=23,Object(s.a)(d,m.a);case 23:v=e.sent,r.content.texture={compressed:!0,mipmaps:!1,width:v[0].width,height:v[0].height,data:v};case 25:return r.content.material=U(r.materialDefinition,r.content.texture),r.content.material&&(r.content.texture=null),e.next=29,I(t,r,i);case 29:return e.abrupt("return",e.sent);case 30:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e,t,r){return k.apply(this,arguments)}function k(){return(k=Object(i.a)(a.a.mark((function e(t,r,n){var o,i,s,c,l,d,p,m,h,v,g,y,x,O,w,T,j,S,I,k,_,F,U,E,G,H,z,V,W,J,$,Q;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===r&&(r={}),r.content){e.next=3;break}return e.abrupt("return",r);case 3:if(o=r.content,c=0,l=0,!r.isDracoGeometry){e.next=19;break}return e.next=9,Object(u.a)(t,b.a,{draco:{attributeNameEntry:"i3s-attribute-type"}});case 9:d=e.sent,s=d.header.vertexCount,p=d.indices.value,m=d.attributes,h=m.POSITION,v=m.NORMAL,g=m.COLOR_0,y=m.TEXCOORD_0,x=m["feature-index"],O=m["uv-region"],C(i={position:h,normal:v,color:g,uv0:y,uvRegion:O,id:x,indices:p},d),(w=L(x))&&B(i,w),e.next=28;break;case 19:T=o.featureData,j=T.vertexAttributes,S=T.attributesOrder,I=T.featureAttributes,k=T.featureAttributeOrder,_=D(o,t),c=_.byteOffset,s=_.vertexCount,l=_.featureCount,F=A(t,c,j,s,S),U=F.attributes,E=F.byteOffset,G=A(t,E,I,l,k),N(H=G.attributes),i=M(U,H);case 28:for(Q in z=R(i.position,r),V=z.enuMatrix,W=z.cartographicOrigin,J=z.cartesianOrigin,$=(new f.a).multiplyRight(V),o.attributes={positions:i.position,normals:i.normal,colors:P(i.color),texCoords:i.uv0,uvRegions:P(i.uvRegion)},o.indices=i.indices||null,i.id&&i.id.value&&(r.content.featureIds=i.id.value),o.attributes)o.attributes[Q]||delete o.attributes[Q];return o.vertexCount=s,o.cartographicCenter=W,o.cartesianOrigin=J,o.modelMatrix=$.invert(),o.byteLength=t.byteLength,e.abrupt("return",r);case 40:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e,t){for(var r in t.loaderData.attributes){var n=t.loaderData.attributes[r];switch(n.name){case"POSITION":e.position.metadata=n.metadata;break;case"feature-index":e.id.metadata=n.metadata}}}function M(e,t){return O(O({},e),t)}function P(e){return e?(e.normalized=!0,e):e}function _(e,t){var r=t.store.defaultGeometrySchema,n=r;for(var a in v.c)for(var o in v.e){var i=r[a][o];if(i){var s=i.byteOffset,u=void 0===s?0:s,c=i.count,l=void 0===c?0:c,f=i.valueType,d=i.valuesPerElement;n[a][o]={valueType:f,valuesPerElement:d,byteOffset:u,count:l}}}return n.attributesOrder=r.ordering,n}function D(e,t){var r=0,n=0,a=0,o=e.featureData[v.d.header];for(var i in o){var s=o[i],u=s.property,c=s.type,l=v.i[c];u===v.d.vertexCount&&(n=new l(t,0,4)[0],r+=v.g[c]),u===v.d.featureCount&&(a=new l(t,4,4)[0],r+=v.g[c])}return{vertexCount:n,featureCount:a,byteOffset:r}}function A(e,t,r,n,a){for(var o,i={},s=g(a);!(o=s()).done;){var u=o.value;if(r[u]){var c=r[u],l=c.valueType,f=c.valuesPerElement,d=n;if(t+d*f>e.byteLength)break;var p=e.slice(t),b=[];if("UInt64"===l)b=F(p,d*f,v.g[l]);else b=new(0,v.i[l])(p,0,d*f);switch(i[u]={value:b,type:v.b[l],size:f},u){case"color":i.color.normalized=!0}t+=d*f*v.g[l]}}return{attributes:i,byteOffset:t}}function F(e,t,r){for(var n=[],a=new DataView(e),o=0,i=0;i<t;i++){var s=a.getUint32(o,!0),u=a.getUint32(o+4,!0),c=s+Math.pow(2,32)*u;n.push(c),o+=r}return n}function R(e,t){var r=t.mbs,n=e.value,a=e.metadata,o=new f.a,i=new l.a(r[0],r[1],r[2]),s=new l.a;return d.a.WGS84.cartographicToCartesian(i,s),d.a.WGS84.eastNorthUpToFixedFrame(s,o),e.value=function(e,t,r){void 0===t&&(t={});for(var n=new Float64Array(e.length),a=t["i3s-scale_x"]&&t["i3s-scale_x"].double||1,o=t["i3s-scale_y"]&&t["i3s-scale_y"].double||1,i=0;i<n.length;i+=3)n[i]=e[i]*a+r.x,n[i+1]=e[i+1]*o+r.y,n[i+2]=e[i+2]+r.z;for(var s=0;s<n.length;s+=3)d.a.WGS84.cartographicToCartesian(n.subarray(s,s+3),w),n[s]=w.x,n[s+1]=w.y,n[s+2]=w.z;return n}(n,a,i),{enuMatrix:o,fixedFrameToENUMatrix:o.invert(),cartographicOrigin:i,cartesianOrigin:s}}function U(e,t){var r;return e?r=O(O({},e),{},{pbrMetallicRoughness:e.pbrMetallicRoughness?O({},e.pbrMetallicRoughness):{baseColorFactor:[255,255,255,255]}}):(r={pbrMetallicRoughness:{}},t?r.pbrMetallicRoughness.baseColorTexture={texCoord:0}:r.pbrMetallicRoughness.baseColorFactor=[255,255,255,255]),r.alphaCutoff=r.alphaCutoff||.25,r.alphaMode&&(r.alphaMode=r.alphaMode.toUpperCase()),r.emissiveFactor&&(r.emissiveFactor=E(r.emissiveFactor)),r.pbrMetallicRoughness&&r.pbrMetallicRoughness.baseColorFactor&&(r.pbrMetallicRoughness.baseColorFactor=E(r.pbrMetallicRoughness.baseColorFactor)),function(e,t){var r={source:{image:t}};e.pbrMetallicRoughness&&e.pbrMetallicRoughness.baseColorTexture?e.pbrMetallicRoughness.baseColorTexture=O(O({},e.pbrMetallicRoughness.baseColorTexture),{},{texture:r}):e.emissiveTexture?e.emissiveTexture=O(O({},e.emissiveTexture),{},{texture:r}):e.pbrMetallicRoughness&&e.pbrMetallicRoughness.metallicRoughnessTexture?e.pbrMetallicRoughness.metallicRoughnessTexture=O(O({},e.pbrMetallicRoughness.metallicRoughnessTexture),{},{texture:r}):e.normalTexture?e.normalTexture=O(O({},e.normalTexture),{},{texture:r}):e.occlusionTexture&&(e.occlusionTexture=O(O({},e.occlusionTexture),{},{texture:r}))}(r,t),r}function E(e){for(var t=Object(o.a)(e),r=0;r<e.length;r++)t[r]=e[r]/255;return t}function N(e){var t=e.id,r=e.faceRange;if(t&&r){for(var n=t.value,a=r.value,o=a[a.length-1]+1,i=new Uint32Array(3*o),s=0,u=0,c=1;c<a.length;c+=2){var l=Number(n[s]),f=u+3*(a[c]-a[c-1]+1);i.fill(l,u,f),s++,u=f}e.id.value=i}}function B(e,t){for(var r=e.id.value,n=new Float32Array(r.length),a=0;a<r.length;a++)n[a]=t[r[a]];e.id.value=n}function L(e){return e&&e.metadata&&e.metadata["i3s-feature-ids"]&&e.metadata["i3s-feature-ids"].intArray}var G={name:"I3S Content (Indexed Scene Layers)",id:"i3s-content",module:"i3s",worker:!0,version:"undefined"!=typeof __VERSION__?__VERSION__:"latest",mimeTypes:["application/octet-stream"],parse:function(e,t,r){return H.apply(this,arguments)},extensions:["bin"],options:{"i3s-content":{}}};function H(){return(H=Object(i.a)(a.a.mark((function e(t,r,n){var o,i,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=(null==r?void 0:r.i3s)||{},i=o.tile,s=o.tileset,e.next=3,j(t,i,s,r,n);case 3:return e.abrupt("return",i.content);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var z=r("6okn"),V="undefined"!=typeof __VERSION__?__VERSION__:"latest",W=/layers\/[0-9]+$/,J=/nodes\/([0-9-]+|root)$/,$={name:"I3S (Indexed Scene Layers)",id:"i3s",module:"i3s",version:V,mimeTypes:["application/octet-stream"],parse:function(e,t,r){return Q.apply(this,arguments)},extensions:["bin"],options:{i3s:{loadContent:!0,token:null,isTileset:"auto",isTileHeader:"auto",tile:null,tileset:null,useDracoGeometry:!0,useCompressedTextures:!0}}};function Q(){return(Q=Object(i.a)(a.a.mark((function e(t,r,n){var o,i,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=n.url,r.i3s=r.i3s||{},"504b0304"!==te(t)){e.next=5;break}throw new Error("Files with .slpk extention currently are not supported by I3SLoader");case 5:if(i="auto"===r.i3s.isTileset?W.test(o):r.i3s.isTileset,u="auto"===r.isTileHeader?J.test(o):r.i3s.isTileHeader,!i){e.next=13;break}return e.next=10,K(t,r,n);case 10:t=e.sent,e.next=26;break;case 13:if(!u){e.next=23;break}return e.next=16,Z(t,r,n);case 16:if(t=e.sent,!r.i3s.loadContent){e.next=21;break}return r.i3s.tile=t,e.next=21,Object(s.a)(t.contentUrl,$,r);case 21:e.next=26;break;case 23:return e.next=25,Y(t,r);case 25:t=e.sent;case 26:return e.abrupt("return",t);case 27:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(e,t){return q.apply(this,arguments)}function q(){return(q=Object(i.a)(a.a.mark((function e(t,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.a)(t,G,r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function K(e,t,r){return X.apply(this,arguments)}function X(){return(X=Object(i.a)(a.a.mark((function e(t,r,n){var o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=JSON.parse((new TextDecoder).decode(t))).loader=$,e.next=4,Object(z.c)(o,r,n);case 4:return e.abrupt("return",o);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e,t,r){return ee.apply(this,arguments)}function ee(){return(ee=Object(i.a)(a.a.mark((function e(t,r,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse((new TextDecoder).decode(t)),e.abrupt("return",Object(z.a)(t,r,n));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function te(e){return e instanceof ArrayBuffer?Object(o.a)(new Uint8Array(e,0,4)).map((function(e){return e.toString(16).padStart(2,"0")})).join(""):null}},B6CW:function(e,t,r){"use strict";r.d(t,"i",(function(){return s})),r.d(t,"b",(function(){return u})),r.d(t,"e",(function(){return c})),r.d(t,"c",(function(){return l})),r.d(t,"d",(function(){return f})),r.d(t,"g",(function(){return d})),r.d(t,"h",(function(){return p})),r.d(t,"f",(function(){return b})),r.d(t,"a",(function(){return m}));var n=5121,a=5125,o=5126,i=5130,s={UInt8:Uint8Array,UInt16:Uint16Array,UInt32:Uint32Array,Float32:Float32Array,UInt64:Float64Array},u={UInt8:n,UInt16:a,Float32:o,UInt32:a,UInt64:i},c={position:"position",normal:"normal",uv0:"uv0",color:"color",region:"region"},l={vertexAttributes:"vertexAttributes",featureAttributeOrder:"featureAttributeOrder",featureAttributes:"featureAttributes"},f={header:"header",vertexCount:"vertexCount",featureCount:"featureCount"},d={UInt8:1,UInt16:2,UInt32:4,Float32:4,UInt64:8},p="String",b="Oid32",m="Float64"},H3Yp:function(e,t,r){"use strict";r.d(t,"a",(function(){return g}));var n=r("o0o1"),a=r.n(n),o=(r("wcNg"),r("HaE+")),i=r("rePB"),s=r("xszv"),u=r("vHGi");function c(e){return l.apply(this,arguments)}function l(){return(l=Object(o.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",JSON.parse((new TextDecoder).decode(t)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f={name:"I3S Node Page",id:"i3s-node-page",module:"i3s",version:"undefined"!=typeof __VERSION__?__VERSION__:"latest",mimeTypes:["application/json"],parse:function(e){return d.apply(this,arguments)},extensions:["json"],options:{}};function d(){return(d=Object(o.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c(t),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var p=r("6okn"),b=r("Ow3C");function m(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=e[Symbol.iterator]()).next.bind(r)}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var g=function(){function e(e,t){this.tileset=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e),this.nodesPerPage=e.nodePages.nodesPerPage,this.lodSelectionMetricType=e.nodePages.lodSelectionMetricType,this.options=t,this.nodePages=[],this.textureDefinitionsSelectedFormats=[],this._initSelectedFormatsForTextureDefinitions(e)}var t=e.prototype;return t.getNodeById=function(){var e=Object(o.a)(a.a.mark((function e(t){var r,n,o,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=Math.floor(t/this.nodesPerPage),this.nodePages[r]){e.next=7;break}return o=Object(b.c)(this.tileset.url+"/nodepages/"+r,null===(n=this.options.i3s)||void 0===n?void 0:n.token),this.nodePages[r]=Object(s.a)(o,f,this.options),e.next=6,this.nodePages[r];case 6:this.nodePages[r]=e.sent;case 7:if(!(this.nodePages[r]instanceof Promise)){e.next=11;break}return e.next=10,this.nodePages[r];case 10:this.nodePages[r]=e.sent;case 11:return i=t%this.nodesPerPage,e.abrupt("return",this.nodePages[r].nodes[i]);case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),t.formTileFromNodePages=function(){var e=Object(o.a)(a.a.mark((function e(t){var r,n,o,i,s,u,c,l,f,d,h,v,g,y,x,O,w,T,j;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getNodeById(t);case 2:r=e.sent,n=[],o=m(r.children||[]);case 5:if((i=o()).done){e.next=13;break}return s=i.value,e.next=9,this.getNodeById(s);case 9:u=e.sent,n.push({id:s,obb:u.obb});case 11:e.next=5;break;case 13:return c=null,l=null,f=null,d="jpeg",h=[],v=!1,r&&r.mesh&&(g=r.mesh.geometry&&this._getContentUrl(r.mesh.geometry)||{url:null,isDracoGeometry:null},y=g.url,x=g.isDracoGeometry,c=y,v=x,O=this._getInformationFromMaterial(r.mesh.material),w=O[0],T=O[1],f=T,d=w.format||d,w.name&&(l=this.tileset.url+"/nodes/"+r.mesh.material.resource+"/textures/"+w.name),this.tileset.attributeStorageInfo&&(h=Object(b.b)(this.tileset,r.mesh.attribute.resource))),j=this._getLodSelection(r),e.abrupt("return",Object(p.b)({id:t,lodSelection:j,obb:r.obb,contentUrl:c,textureUrl:l,attributeUrls:h,materialDefinition:f,textureFormat:d,children:n,isDracoGeometry:v}));case 22:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),t._getContentUrl=function(e){var t={},r=this.tileset.geometryDefinitions[e.definition],n=-1;if(this.options.i3s&&this.options.i3s.useDracoGeometry&&(n=r.geometryBuffers.findIndex((function(e){return e.compressedAttributes&&"draco"===e.compressedAttributes.encoding}))),-1===n&&(n=r.geometryBuffers.findIndex((function(e){return!e.compressedAttributes}))),-1!==n){var a=Boolean(r.geometryBuffers[n].compressedAttributes);t={url:this.tileset.url+"/nodes/"+e.resource+"/geometries/"+n,isDracoGeometry:a}}return t},t._getLodSelection=function(e){var t=[];return"maxScreenThresholdSQ"===this.lodSelectionMetricType&&t.push({metricType:"maxScreenThreshold",maxError:Math.sqrt(e.lodThreshold/(.25*Math.PI))}),t.push({metricType:this.lodSelectionMetricType,maxError:e.lodThreshold}),t},t._getInformationFromMaterial=function(e){var t={name:null,format:null};if(e){var r=this.tileset.materialDefinitions[e.definition],n=r&&r.pbrMetallicRoughness&&r.pbrMetallicRoughness.baseColorTexture&&r.pbrMetallicRoughness.baseColorTexture.textureSetDefinitionId;return n||0===n?[this.textureDefinitionsSelectedFormats[n]||t,r]:[t,r]}return[t,null]},t._initSelectedFormatsForTextureDefinitions=function(e){this.textureDefinitionsSelectedFormats=[];for(var t,r=this._getSupportedTextureFormats(),n=m(e.textureSetDefinitions||[]);!(t=n()).done;){for(var a,o=t.value,i=o&&o.formats||[],s=null,u=function(){var e=a.value,t=i.find((function(t){return t.format===e}));if(t)return s=t,"break"},c=m(r);!(a=c()).done;){if("break"===u())break}this.textureDefinitionsSelectedFormats.push(s)}},t._getSupportedTextureFormats=function(){var e=[];if(!this.options.i3s||this.options.i3s.useCompressedTextures){var t=Object(u.a)();t.has("etc2")&&e.push("ktx-etc2"),t.has("dxt")&&e.push("dds")}return e.push("jpg"),e.push("png"),e},e}()},Ow3C:function(e,t,r){"use strict";function n(e,t){return void 0===t&&(t=null),t?e+"?token="+t:e}function a(e){for(var t=e.url,r=e.attributeData,n=[],a=0;a<r.length;a++){var o=r[a].href.replace("./","");n.push(t+"/"+o)}return n}function o(e,t){for(var r=[],n=e.attributeStorageInfo,a=e.url,o=0;o<n.length;o++){var i=n[o].key;r.push(a+"/nodes/"+t+"/attributes/"+i+"/0")}return r}r.d(t,"c",(function(){return n})),r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return o}))},URgk:function(e,t,r){(function(e){var n=void 0!==e&&e||"undefined"!=typeof self&&self||window,a=Function.prototype.apply;function o(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new o(a.call(setTimeout,n,arguments),clearTimeout)},t.setInterval=function(){return new o(a.call(setInterval,n,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(n,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},r("YBdB"),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,r("yLpj"))},YBdB:function(e,t,r){(function(e,t){!function(e,r){"use strict";if(!e.setImmediate){var n,a,o,i,s,u=1,c={},l=!1,f=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?n=function(e){t.nextTick((function(){b(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,r=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=r,t}}()?e.MessageChannel?((o=new MessageChannel).port1.onmessage=function(e){b(e.data)},n=function(e){o.port2.postMessage(e)}):f&&"onreadystatechange"in f.createElement("script")?(a=f.documentElement,n=function(e){var t=f.createElement("script");t.onreadystatechange=function(){b(e),t.onreadystatechange=null,a.removeChild(t),t=null},a.appendChild(t)}):n=function(e){setTimeout(b,0,e)}:(i="setImmediate$"+Math.random()+"$",s=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(i)&&b(+t.data.slice(i.length))},e.addEventListener?e.addEventListener("message",s,!1):e.attachEvent("onmessage",s),n=function(t){e.postMessage(i+t,"*")}),d.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),r=0;r<t.length;r++)t[r]=arguments[r+1];var a={callback:e,args:t};return c[u]=a,n(u),u++},d.clearImmediate=p}function p(e){delete c[e]}function b(e){if(l)setTimeout(b,0,e);else{var t=c[e];if(t){l=!0;try{!function(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(void 0,r)}}(t)}finally{p(e),l=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,r("yLpj"),r("8oxB"))}}]);