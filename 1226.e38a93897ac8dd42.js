"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1226],{1226:(T,u,o)=>{o.r(u),o.d(u,{SlideWithArrowsPageModule:()=>x});var g=o(9808),f=o(3075),h=o(7154),r=o(7674),e=o(5e3);const w=["slider"],m=function(t){return{background:t}};function v(t,l){if(1&t&&(e.TgZ(0,"ion-slide",7)(1,"h2"),e._uU(2),e.qZA()()),2&t){const i=l.$implicit;e.Q6J("ngStyle",e.VKq(2,m,"url("+i.imageUrl+")")),e.xp6(2),e.Oqu(i.title)}}function S(t,l){if(1&t){const i=e.EpF();e.TgZ(0,"div",8),e.NdJ("click",function(){return e.CHM(i),e.oxw().previousSlide()}),e.qZA()}}function P(t,l){if(1&t){const i=e.EpF();e.TgZ(0,"div",9),e.NdJ("click",function(){return e.CHM(i),e.oxw().nextSlide()}),e.qZA()}}const A=[{path:"",component:(()=>{class t{constructor(){this.slides=[{title:"Dream's Adventure",imageUrl:"assets/yannbf/img/lists/wishlist-1.jpg",songs:2,private:!1},{title:"For the Weekend",imageUrl:"assets/yannbf/img/lists/wishlist-2.jpg",songs:4,private:!1},{title:"Family Time",imageUrl:"assets/yannbf/img/lists/wishlist-3.jpg",songs:5,private:!0},{title:"My Trip",imageUrl:"assets/yannbf/img/lists/wishlist-4.jpg",songs:12,private:!0}],this.slideOpts={loop:!0,autoplay:{delay:2e3},on:{beforeInit(){const i=this;i.classNames.push(`${i.params.containerModifierClass}fade`);const s={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};i.params=Object.assign(i.params,s),i.params=Object.assign(i.originalParams,s)},setTranslate(){const i=this,{slides:s}=i;for(let n=0;n<s.length;n+=1){const d=i.slides.eq(n);let a=-d[0].swiperSlideOffset;i.params.virtualTranslate||(a-=i.translate);let c=0;i.isHorizontal()||(c=a,a=0);const y=i.params.fadeEffect.crossFade?Math.max(1-Math.abs(d[0].progress),0):1+Math.min(Math.max(d[0].progress,-1),0);d.css({opacity:y}).transform(`translate3d(${a}px, ${c}px, 0px)`)}},setTransition(i){const s=this,{slides:n,$wrapperEl:d}=s;if(n.transition(i),s.params.virtualTranslate&&0!==i){let p=!1;n.transitionEnd(()=>{if(p||!s||s.destroyed)return;p=!0,s.animating=!1;const a=["webkitTransitionEnd","transitionend"];for(let c=0;c<a.length;c+=1)d.trigger(a[c])})}}}},this.currentIndex=0}ngOnInit(){}nextSlide(){this.slider.slideNext()}previousSlide(){this.slider.slidePrev()}onSlideChanged(){this.slider.getActiveIndex().then(i=>this.currentIndex=i)}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-slide-with-arrows"]],viewQuery:function(i,s){if(1&i&&e.Gf(w,7),2&i){let n;e.iGM(n=e.CRH())&&(s.slider=n.first)}},decls:12,vars:4,consts:[["slot","start"],["defaultHref","/"],[3,"options","ionSlideWillChange"],["slider",""],["class","swiper-no-swiping",3,"ngStyle",4,"ngFor","ngForOf"],["class","swiper-button-prev swiper-button-white",3,"click",4,"ngIf"],["class","swiper-button-next swiper-button-white",3,"click",4,"ngIf"],[1,"swiper-no-swiping",3,"ngStyle"],[1,"swiper-button-prev","swiper-button-white",3,"click"],[1,"swiper-button-next","swiper-button-white",3,"click"]],template:function(i,s){1&i&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),e._UZ(3,"ion-back-button",1),e.qZA(),e.TgZ(4,"ion-title"),e._uU(5,"Slide With Arrows"),e.qZA()()(),e.TgZ(6,"ion-content")(7,"ion-slides",2,3),e.NdJ("ionSlideWillChange",function(){return s.onSlideChanged()}),e.YNc(9,v,3,4,"ion-slide",4),e.YNc(10,S,1,0,"div",5),e.YNc(11,P,1,0,"div",6),e.qZA()()),2&i&&(e.xp6(7),e.Q6J("options",s.slideOpts),e.xp6(2),e.Q6J("ngForOf",s.slides),e.xp6(1),e.Q6J("ngIf",s.currentIndex>0),e.xp6(1),e.Q6J("ngIf",s.currentIndex<s.slides.length-1))},directives:[r.Gu,r.sr,r.Sm,r.oU,r.cs,r.wd,r.W2,r.Hr,g.sg,r.A$,g.PC,g.O5],styles:["h2[_ngcontent-%COMP%]{color:#fff}ion-slides[_ngcontent-%COMP%]{display:block;width:100%;height:100%}ion-slides[_ngcontent-%COMP%]   .slide-zoom[_ngcontent-%COMP%]{text-align:center;display:block;width:100%}"]}),t})()}];let x=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[g.ez,f.u5,r.Pc,h.Bz.forChild(A)]]}),t})()}}]);