!function(){function t(e,i,n){return(t="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,i){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=o(t)););return t}(t,e);if(n){var r=Object.getOwnPropertyDescriptor(n,e);return r.get?r.get.call(i):r.value}})(e,i,n||e)}function e(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function n(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var i,n=o(t);if(e){var s=o(this).constructor;i=Reflect.construct(n,arguments,s)}else i=n.apply(this,arguments);return r(this,i)}}function r(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return a(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function u(t,e,i){return e&&c(t.prototype,e),i&&c(t,i),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{gL5z:function(i,r,a){"use strict";a.r(r),a.d(r,"MatGridPageModule",function(){return U});var c,h=a("ofXK"),f=a("3Pt+"),g=a("tyNb"),d=a("TEn/"),p=a("fXoL"),y=a("FKr1"),m=a("8LU1"),_=a("cH1L"),w=["*"],b=".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n",v=function(){function t(){l(this,t),this.columnIndex=0,this.rowIndex=0}return u(t,[{key:"rowCount",get:function(){return this.rowIndex+1}},{key:"rowspan",get:function(){var t=Math.max.apply(Math,s(this.tracker));return t>1?this.rowCount+t-1:this.rowCount}},{key:"update",value:function(t,e){var i=this;this.columnIndex=0,this.rowIndex=0,this.tracker=new Array(t),this.tracker.fill(0,0,this.tracker.length),this.positions=e.map(function(t){return i._trackTile(t)})}},{key:"_trackTile",value:function(t){var e=this._findMatchingGap(t.colspan);return this._markTilePosition(e,t),this.columnIndex=e+t.colspan,new k(this.rowIndex,e)}},{key:"_findMatchingGap",value:function(t){var e=-1,i=-1;do{this.columnIndex+t>this.tracker.length?(this._nextRow(),e=this.tracker.indexOf(0,this.columnIndex),i=this._findGapEndIndex(e)):-1!=(e=this.tracker.indexOf(0,this.columnIndex))?(i=this._findGapEndIndex(e),this.columnIndex=e+1):(this._nextRow(),e=this.tracker.indexOf(0,this.columnIndex),i=this._findGapEndIndex(e))}while(i-e<t||0==i);return Math.max(e,0)}},{key:"_nextRow",value:function(){this.columnIndex=0,this.rowIndex++;for(var t=0;t<this.tracker.length;t++)this.tracker[t]=Math.max(0,this.tracker[t]-1)}},{key:"_findGapEndIndex",value:function(t){for(var e=t+1;e<this.tracker.length;e++)if(0!=this.tracker[e])return e;return this.tracker.length}},{key:"_markTilePosition",value:function(t,e){for(var i=0;i<e.colspan;i++)this.tracker[t+i]=e.rowspan}}]),t}(),k=function t(e,i){l(this,t),this.row=e,this.col=i},S=new p.t("MAT_GRID_LIST"),x=((c=function(){function t(e,i){l(this,t),this._element=e,this._gridList=i,this._rowspan=1,this._colspan=1}return u(t,[{key:"rowspan",get:function(){return this._rowspan},set:function(t){this._rowspan=Math.round(Object(m.f)(t))}},{key:"colspan",get:function(){return this._colspan},set:function(t){this._colspan=Math.round(Object(m.f)(t))}},{key:"_setStyle",value:function(t,e){this._element.nativeElement.style[t]=e}}]),t}()).\u0275fac=function(t){return new(t||c)(p.Pb(p.m),p.Pb(S,8))},c.\u0275cmp=p.Jb({type:c,selectors:[["mat-grid-tile"]],hostAttrs:[1,"mat-grid-tile"],hostVars:2,hostBindings:function(t,e){2&t&&p.Eb("rowspan",e.rowspan)("colspan",e.colspan)},inputs:{rowspan:"rowspan",colspan:"colspan"},exportAs:["matGridTile"],ngContentSelectors:w,decls:2,vars:0,consts:[[1,"mat-figure"]],template:function(t,e){1&t&&(p.mc(),p.Vb(0,"figure",0),p.lc(1),p.Ub())},styles:[b],encapsulation:2,changeDetection:0}),c),T=/^-?\d+((\.\d+)?[A-Za-z%$]?)+$/,O=function(){function t(){l(this,t),this._rows=0,this._rowspan=0}return u(t,[{key:"init",value:function(t,e,i,n){this._gutterSize=C(t),this._rows=e.rowCount,this._rowspan=e.rowspan,this._cols=i,this._direction=n}},{key:"getBaseTileSize",value:function(t,e){return"(".concat(t,"% - (").concat(this._gutterSize," * ").concat(e,"))")}},{key:"getTilePosition",value:function(t,e){return 0===e?"0":I("(".concat(t," + ").concat(this._gutterSize,") * ").concat(e))}},{key:"getTileSize",value:function(t,e){return"(".concat(t," * ").concat(e,") + (").concat(e-1," * ").concat(this._gutterSize,")")}},{key:"setStyle",value:function(t,e,i){var n=100/this._cols,r=(this._cols-1)/this._cols;this.setColStyles(t,i,n,r),this.setRowStyles(t,e,n,r)}},{key:"setColStyles",value:function(t,e,i,n){var r=this.getBaseTileSize(i,n);t._setStyle("rtl"===this._direction?"right":"left",this.getTilePosition(r,e)),t._setStyle("width",I(this.getTileSize(r,t.colspan)))}},{key:"getGutterSpan",value:function(){return"".concat(this._gutterSize," * (").concat(this._rowspan," - 1)")}},{key:"getTileSpan",value:function(t){return"".concat(this._rowspan," * ").concat(this.getTileSize(t,1))}},{key:"getComputedHeight",value:function(){return null}}]),t}(),R=function(i){e(s,i);var r=n(s);function s(t){var e;return l(this,s),(e=r.call(this)).fixedRowHeight=t,e}return u(s,[{key:"init",value:function(e,i,n,r){t(o(s.prototype),"init",this).call(this,e,i,n,r),this.fixedRowHeight=C(this.fixedRowHeight),T.test(this.fixedRowHeight)}},{key:"setRowStyles",value:function(t,e){t._setStyle("top",this.getTilePosition(this.fixedRowHeight,e)),t._setStyle("height",I(this.getTileSize(this.fixedRowHeight,t.rowspan)))}},{key:"getComputedHeight",value:function(){return["height",I("".concat(this.getTileSpan(this.fixedRowHeight)," + ").concat(this.getGutterSpan()))]}},{key:"reset",value:function(t){t._setListStyle(["height",null]),t._tiles&&t._tiles.forEach(function(t){t._setStyle("top",null),t._setStyle("height",null)})}}]),s}(O),H=function(t){e(r,t);var i=n(r);function r(t){var e;return l(this,r),(e=i.call(this))._parseRatio(t),e}return u(r,[{key:"setRowStyles",value:function(t,e,i,n){this.baseTileHeight=this.getBaseTileSize(i/this.rowHeightRatio,n),t._setStyle("marginTop",this.getTilePosition(this.baseTileHeight,e)),t._setStyle("paddingTop",I(this.getTileSize(this.baseTileHeight,t.rowspan)))}},{key:"getComputedHeight",value:function(){return["paddingBottom",I("".concat(this.getTileSpan(this.baseTileHeight)," + ").concat(this.getGutterSpan()))]}},{key:"reset",value:function(t){t._setListStyle(["paddingBottom",null]),t._tiles.forEach(function(t){t._setStyle("marginTop",null),t._setStyle("paddingTop",null)})}},{key:"_parseRatio",value:function(t){var e=t.split(":");this.rowHeightRatio=parseFloat(e[0])/parseFloat(e[1])}}]),r}(O),z=function(t){e(r,t);var i=n(r);function r(){return l(this,r),i.apply(this,arguments)}return u(r,[{key:"setRowStyles",value:function(t,e){var i=this.getBaseTileSize(100/this._rowspan,(this._rows-1)/this._rows);t._setStyle("top",this.getTilePosition(i,e)),t._setStyle("height",I(this.getTileSize(i,t.rowspan)))}},{key:"reset",value:function(t){t._tiles&&t._tiles.forEach(function(t){t._setStyle("top",null),t._setStyle("height",null)})}}]),r}(O);function I(t){return"calc(".concat(t,")")}function C(t){return t.match(/([A-Za-z%]+)$/)?t:"".concat(t,"px")}var j,P,E=((P=function(){function t(e,i){l(this,t),this._element=e,this._dir=i,this._gutter="1px"}return u(t,[{key:"cols",get:function(){return this._cols},set:function(t){this._cols=Math.max(1,Math.round(Object(m.f)(t)))}},{key:"gutterSize",get:function(){return this._gutter},set:function(t){this._gutter="".concat(null==t?"":t)}},{key:"rowHeight",get:function(){return this._rowHeight},set:function(t){var e="".concat(null==t?"":t);e!==this._rowHeight&&(this._rowHeight=e,this._setTileStyler(this._rowHeight))}},{key:"ngOnInit",value:function(){this._checkCols(),this._checkRowHeight()}},{key:"ngAfterContentChecked",value:function(){this._layoutTiles()}},{key:"_checkCols",value:function(){}},{key:"_checkRowHeight",value:function(){this._rowHeight||this._setTileStyler("1:1")}},{key:"_setTileStyler",value:function(t){this._tileStyler&&this._tileStyler.reset(this),this._tileStyler="fit"===t?new z:t&&t.indexOf(":")>-1?new H(t):new R(t)}},{key:"_layoutTiles",value:function(){var t=this;this._tileCoordinator||(this._tileCoordinator=new v);var e=this._tileCoordinator,i=this._tiles.filter(function(e){return!e._gridList||e._gridList===t}),n=this._dir?this._dir.value:"ltr";this._tileCoordinator.update(this.cols,i),this._tileStyler.init(this.gutterSize,e,this.cols,n),i.forEach(function(i,n){var r=e.positions[n];t._tileStyler.setStyle(i,r.row,r.col)}),this._setListStyle(this._tileStyler.getComputedHeight())}},{key:"_setListStyle",value:function(t){t&&(this._element.nativeElement.style[t[0]]=t[1])}}]),t}()).\u0275fac=function(t){return new(t||P)(p.Pb(p.m),p.Pb(_.b,8))},P.\u0275cmp=p.Jb({type:P,selectors:[["mat-grid-list"]],contentQueries:function(t,e,i){var n;1&t&&p.Ib(i,x,1),2&t&&p.xc(n=p.ec())&&(e._tiles=n)},hostAttrs:[1,"mat-grid-list"],hostVars:1,hostBindings:function(t,e){2&t&&p.Eb("cols",e.cols)},inputs:{cols:"cols",gutterSize:"gutterSize",rowHeight:"rowHeight"},exportAs:["matGridList"],features:[p.Cb([{provide:S,useExisting:P}])],ngContentSelectors:w,decls:2,vars:0,template:function(t,e){1&t&&(p.mc(),p.Vb(0,"div"),p.lc(1),p.Ub())},styles:[b],encapsulation:2,changeDetection:0}),P),A=((j=function t(){l(this,t)}).\u0275fac=function(t){return new(t||j)},j.\u0275mod=p.Nb({type:j}),j.\u0275inj=p.Mb({imports:[[y.j,y.h],y.j,y.h]}),j);function M(t,e){if(1&t&&(p.Vb(0,"mat-grid-tile",4),p.Lc(1),p.Ub()),2&t){var i=e.$implicit;p.Gc("background",i.color),p.nc("colspan",i.cols)("rowspan",i.rows),p.Db(1),p.Nc(" ",i.text," ")}}var G,L,B=[{path:"",component:(G=function(){function t(){l(this,t),this.tiles=[{text:"One",cols:3,rows:1,color:"lightblue"},{text:"Two",cols:1,rows:2,color:"lightgreen"},{text:"Three",cols:1,rows:1,color:"lightpink"},{text:"Four",cols:2,rows:1,color:"#DDBDF1"}]}return u(t,[{key:"ngOnInit",value:function(){}}]),t}(),G.\u0275fac=function(t){return new(t||G)},G.\u0275cmp=p.Jb({type:G,selectors:[["app-mat-grid"]],decls:9,vars:1,consts:[["slot","start"],[1,"ion-padding"],["cols","4","rowHeight","100px"],[3,"colspan","rowspan","background",4,"ngFor","ngForOf"],[3,"colspan","rowspan"]],template:function(t,e){1&t&&(p.Vb(0,"ion-header"),p.Vb(1,"ion-toolbar"),p.Vb(2,"ion-buttons",0),p.Qb(3,"ion-back-button"),p.Ub(),p.Vb(4,"ion-title"),p.Lc(5,"Grid"),p.Ub(),p.Ub(),p.Ub(),p.Vb(6,"ion-content",1),p.Vb(7,"mat-grid-list",2),p.Jc(8,M,2,5,"mat-grid-tile",3),p.Ub(),p.Ub()),2&t&&(p.Db(8),p.nc("ngForOf",e.tiles))},directives:[d.z,d.mb,d.l,d.h,d.i,d.kb,d.u,E,h.n,x],styles:[""]}),G)}],U=((L=function t(){l(this,t)}).\u0275fac=function(t){return new(t||L)},L.\u0275mod=p.Nb({type:L}),L.\u0275inj=p.Mb({imports:[[h.c,f.h,d.nb,g.j.forChild(B),A]]}),L)}}])}();