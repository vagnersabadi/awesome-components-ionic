!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{"+9aX":function(t,o,i){"use strict";i.r(o),i.d(o,"SlidePaginationPageModule",function(){return x});var r=i("ofXK"),c=i("3Pt+"),a=i("TEn/"),s=i("tyNb"),b=i("mrSG"),l=i("fXoL"),d=["slider"],g=["segment"],u=["segmentFooter"];function f(n,e){1&n&&l.Qb(0,"ion-segment-button",11),2&n&&l.nc("value",e.index)}function h(n,e){1&n&&(l.Vb(0,"ion-card"),l.Qb(1,"img",19),l.Vb(2,"ion-card-header"),l.Vb(3,"ion-card-subtitle"),l.Lc(4,"Destination"),l.Ub(),l.Vb(5,"ion-card-title"),l.Lc(6,"Madison, WI"),l.Ub(),l.Ub(),l.Vb(7,"ion-card-content"),l.Lc(8," Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836. "),l.Ub(),l.Ub())}var m=function(){return[0,1,2,3,4,5,6,7,8,9]};function p(n,e){if(1&n){var t=l.Wb();l.Vb(0,"ion-slide"),l.Vb(1,"div",12),l.Vb(2,"ion-item",13),l.Vb(3,"ion-button",14),l.dc("click",function(){return l.Bc(t),l.hc().prevStage()}),l.Qb(4,"ion-icon",15),l.Ub(),l.Vb(5,"ion-label"),l.Vb(6,"ion-text",16),l.Vb(7,"p"),l.Vb(8,"b"),l.Lc(9," SQL - No-Show"),l.Ub(),l.Ub(),l.Vb(10,"p"),l.Lc(11," 6 R$ 0,00 \u2022 R$ 0,00 "),l.Ub(),l.Ub(),l.Ub(),l.Vb(12,"ion-button",17),l.dc("click",function(){return l.Bc(t),l.hc().nextStage()}),l.Qb(13,"ion-icon",18),l.Ub(),l.Ub(),l.Vb(14,"ion-list"),l.Jc(15,h,9,0,"ion-card",7),l.Ub(),l.Ub(),l.Ub()}2&n&&(l.Db(15),l.nc("ngForOf",l.rc(1,m)))}function v(n,e){1&n&&l.Qb(0,"ion-segment-button",11),2&n&&l.nc("value",e.index)}var w,k,y,U=[{path:"",component:(w=function(){function t(){n(this,t),this.sliderConfig={initialSlide:0,loop:!1,freemode:{freeModeMomentum:!1}}}var o,i,r;return o=t,(i=[{key:"ngOnInit",value:function(){}},{key:"prevStage",value:function(){this.slider.slidePrev(),this.activeSlide()}},{key:"nextStage",value:function(){this.slider.slideNext(),this.activeSlide()}},{key:"activeSlide",value:function(){return Object(b.a)(this,void 0,void 0,regeneratorRuntime.mark(function n(){var e;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.slider.getActiveIndex();case 2:e=n.sent,this.segment.value=e.toString(),this.segmentFooter.value=e.toString();case 4:case"end":return n.stop()}},n,this)}))}},{key:"stageSegmentChanged",value:function(n){this.slider.slideTo(n.detail.value)}}])&&e(o.prototype,i),r&&e(o,r),t}(),w.\u0275fac=function(n){return new(n||w)},w.\u0275cmp=l.Jb({type:w,selectors:[["app-slide-pagination"]],viewQuery:function(n,e){var t;1&n&&(l.Pc(d,3),l.Pc(g,3),l.Pc(u,3)),2&n&&(l.xc(t=l.ec())&&(e.slider=t.first),l.xc(t=l.ec())&&(e.segment=t.first),l.xc(t=l.ec())&&(e.segmentFooter=t.first))},decls:18,vars:7,consts:[["slot","start"],["defaultHref","/"],["scrollable","","value","0",3,"ionChange"],["segment",""],[3,"value",4,"ngFor","ngForOf"],["pager","true",3,"options","ionSlideTransitionEnd"],["slider",""],[4,"ngFor","ngForOf"],[1,"ion-no-border"],[1,"segment-arrow"],["segmentFooter",""],[3,"value"],[1,"content-stage"],["lines","none",1,"trasnparent","title-stage"],["slot","icon-only","fill","clear","slot","start",3,"click"],["name","chevron-back","color","grey-seven"],["color","grey-seven"],["slot","icon-only","fill","clear","slot","end",3,"click"],["name","chevron-forward","color","grey-seven"],["src","assets/yannbf/img/lists/wishlist-1.jpg"]],template:function(n,e){1&n&&(l.Vb(0,"ion-header"),l.Vb(1,"ion-toolbar"),l.Vb(2,"ion-buttons",0),l.Qb(3,"ion-back-button",1),l.Ub(),l.Vb(4,"ion-title"),l.Lc(5,"Slide Pagination"),l.Ub(),l.Ub(),l.Vb(6,"ion-segment",2,3),l.dc("ionChange",function(n){return e.stageSegmentChanged(n)}),l.Jc(8,f,1,1,"ion-segment-button",4),l.Ub(),l.Ub(),l.Vb(9,"ion-content"),l.Vb(10,"ion-slides",5,6),l.dc("ionSlideTransitionEnd",function(){return e.activeSlide()}),l.Jc(12,p,16,2,"ion-slide",7),l.Ub(),l.Ub(),l.Vb(13,"ion-footer",8),l.Vb(14,"div",9),l.Vb(15,"ion-segment",2,10),l.dc("ionChange",function(n){return e.stageSegmentChanged(n)}),l.Jc(17,v,1,1,"ion-segment-button",4),l.Ub(),l.Ub(),l.Ub()),2&n&&(l.Db(8),l.nc("ngForOf",l.rc(4,m)),l.Db(2),l.nc("options",e.sliderConfig),l.Db(2),l.nc("ngForOf",l.rc(5,m)),l.Db(5),l.nc("ngForOf",l.rc(6,m)))},directives:[a.z,a.mb,a.l,a.h,a.i,a.kb,a.X,a.xb,r.n,a.u,a.cb,a.x,a.Y,a.bb,a.D,a.k,a.A,a.J,a.hb,a.K,a.m,a.o,a.p,a.q,a.n],styles:['ion-slide[_ngcontent-%COMP%], ion-slides[_ngcontent-%COMP%]{height:100%;overflow-y:scroll}ion-segment[_ngcontent-%COMP%]{--background:var(--ion-color-secondary)}ion-segment[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}ion-segment-button[_ngcontent-%COMP%]{--background-checked:var(--ion-color-tertiary);border-right:1px solid #fff;min-height:0;height:20px;min-width:0;--padding-end:40px}.segment-arrow[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%]{--background:var(--ion-color-light)}.segment-arrow[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]{--background-checked:var(--ion-color-medium);display:table-cell;padding:0;position:relative;vertical-align:middle;min-height:0;height:20px;min-width:0}.segment-arrow[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]:before{width:10px;height:10px;position:absolute;right:-8px;top:2px;border-top:6px solid #fff;border-right:6px solid #fff;transform:scaleX(.3) rotate(45deg);content:" ";background:transparent;z-index:1}']}),w)}],V=((y=function e(){n(this,e)}).\u0275fac=function(n){return new(n||y)},y.\u0275mod=l.Nb({type:y}),y.\u0275inj=l.Mb({imports:[[s.j.forChild(U)],s.j]}),y),x=((k=function e(){n(this,e)}).\u0275fac=function(n){return new(n||k)},k.\u0275mod=l.Nb({type:k}),k.\u0275inj=l.Mb({imports:[[r.c,c.h,a.nb,V]]}),k)}}])}();