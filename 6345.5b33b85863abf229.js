"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6345],{6345:(b,g,a)=>{a.r(g),a.d(g,{SlideWalkthroughPageModule:()=>k});var s=a(9808),d=a(3075),c=a(7154),o=a(8779),t=a(5e3);const p=["slider"],u=function(n){return{"background-image":n}};function h(n,i){if(1&n&&(t.TgZ(0,"ion-slide",7)(1,"div",8)(2,"div",9),t._UZ(3,"h2",10)(4,"br")(5,"p",11),t.qZA()()()),2&n){const e=i.$implicit;t.Q6J("ngStyle",t.VKq(3,u,"url("+e.imageUrl+")")),t.xp6(3),t.Q6J("innerHTML",e.title,t.oJD),t.xp6(2),t.Q6J("innerHTML",e.description,t.oJD)}}function f(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",12)(1,"ion-button",13),t.NdJ("click",function(){return t.CHM(e),t.oxw().goToApp()}),t._uU(2,"Let's go!"),t.qZA()()}}const m=[{path:"",component:(()=>{class n{constructor(){this.slideIndex=0,this.slides=[{title:"Dream's Adventure",imageUrl:"assets/yannbf/img/lists/wishlist-1.jpg",description:"Take a look at our amazing options"},{title:"For the Weekend",imageUrl:"assets/yannbf/img/lists/wishlist-2.jpg",description:"Take a look at our amazing options"},{title:"Family Time",imageUrl:"assets/yannbf/img/lists/wishlist-3.jpg",description:"Take a look at our amazing options"},{title:"My Trip",imageUrl:"assets/yannbf/img/lists/wishlist-4.jpg",description:"Take a look at our amazing options"}],this.slideOpts1={autoplay:{delay:3e3}}}ngOnInit(){}onSlideChanged(){this.slider.getActiveIndex().then(e=>{console.log("Slide changed! Current index is",e),this.slideIndex=e})}goToApp(){console.log("Go to App clicked")}skip(){console.log("Skip clicked")}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-slide-walkthrough"]],viewQuery:function(e,l){if(1&e&&t.Gf(p,7),2&e){let r;t.iGM(r=t.CRH())&&(l.slider=r.first)}},decls:11,vars:3,consts:[["slot","start"],["defaultHref","/"],["fullscreen","true",1,"no-padding-top"],["pager","true",3,"options","ionSlideWillChange"],["slider",""],["class","slide-background",3,"ngStyle",4,"ngFor","ngForOf"],["class","floating-buttons pop-in",4,"ngIf"],[1,"slide-background",3,"ngStyle"],[1,"text-wrapper"],[1,"slide-text"],[1,"slide-title",3,"innerHTML"],[3,"innerHTML"],[1,"floating-buttons","pop-in"],["fill","clear","size","large","expand","full",3,"click"]],template:function(e,l){1&e&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),t._UZ(3,"ion-back-button",1),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5,"Slide Walkthrough"),t.qZA()()(),t.TgZ(6,"ion-content",2)(7,"ion-slides",3,4),t.NdJ("ionSlideWillChange",function(){return l.onSlideChanged()}),t.YNc(9,h,6,5,"ion-slide",5),t.qZA(),t.YNc(10,f,3,0,"div",6),t.qZA()),2&e&&(t.xp6(7),t.Q6J("options",l.slideOpts1),t.xp6(2),t.Q6J("ngForOf",l.slides),t.xp6(1),t.Q6J("ngIf",l.slideIndex>=l.slides.length-1))},directives:[o.Gu,o.sr,o.Sm,o.oU,o.cs,o.wd,o.W2,o.Hr,s.sg,o.A$,s.PC,s.O5,o.YG],styles:["ion-item[_ngcontent-%COMP%]{--background: transparent}.swiper-pagination-bullet[_ngcontent-%COMP%]{background-color:#fff}.no-padding-top[_ngcontent-%COMP%]   .scroll-content[_ngcontent-%COMP%]{padding-top:0!important}.skip-button[_ngcontent-%COMP%]{text-transform:none;padding:15px;font-weight:700}.floating-buttons[_ngcontent-%COMP%]{z-index:1;width:100%;bottom:0;position:absolute;margin-bottom:50px;transition:all .4s linear}.floating-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--color: white;min-height:7vh;text-transform:none;font-size:1.4em;font-weight:700;--background: rgba(49, 161, 216, .67)}.slide-background[_ngcontent-%COMP%]{background-size:cover!important;background-position:center;background-repeat:no-repeat;border-color:transparent}.toolbar-background[_ngcontent-%COMP%]{border-color:transparent}.slide-zoom[_ngcontent-%COMP%]{background:linear-gradient(transparent,rgba(0,0,0,.4))!important;height:100%}.text-wrapper[_ngcontent-%COMP%]{width:100vw;height:100vh}.slide-text[_ngcontent-%COMP%]{position:relative;text-align:center;top:50%;transform:translateY(-50%)}.slide-title[_ngcontent-%COMP%]{color:#fff;font-weight:700}.slide-image[_ngcontent-%COMP%]{max-height:100%;max-width:100%;margin:18px 0}b[_ngcontent-%COMP%]{font-weight:500}p[_ngcontent-%COMP%]{padding:0 40px;font-size:1em;line-height:1.5;color:#fff}p[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{color:#000}.pop-in[_ngcontent-%COMP%]{animation:pop-in .65s!important}"]}),n})()}];let k=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[s.ez,d.u5,o.Pc,c.Bz.forChild(m)]]}),n})()}}]);