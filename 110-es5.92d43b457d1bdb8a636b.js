!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{frUI:function(e,i,o){"use strict";o.r(i),o.d(i,"SlideWalkthroughPageModule",function(){return m});var a=o("ofXK"),r=o("3Pt+"),l=o("tyNb"),s=o("TEn/"),c=o("fXoL"),g=["slider"],d=function(n){return{"background-image":n}};function p(n,t){if(1&n&&(c.Vb(0,"ion-slide",7),c.Vb(1,"div",8),c.Vb(2,"div",9),c.Qb(3,"h2",10),c.Qb(4,"br"),c.Qb(5,"p",11),c.Ub(),c.Ub(),c.Ub()),2&n){var e=t.$implicit;c.nc("ngStyle",c.sc(3,d,"url("+e.imageUrl+")")),c.Db(3),c.nc("innerHTML",e.title,c.Cc),c.Db(2),c.nc("innerHTML",e.description,c.Cc)}}function b(n,t){if(1&n){var e=c.Wb();c.Vb(0,"div",12),c.Vb(1,"ion-button",13),c.dc("click",function(){return c.Bc(e),c.hc().goToApp()}),c.Lc(2,"Let's go!"),c.Ub(),c.Ub()}}var u,f,h=[{path:"",component:(u=function(){function e(){n(this,e),this.slideIndex=0,this.slides=[{title:"Dream's Adventure",imageUrl:"assets/yannbf/img/lists/wishlist-1.jpg",description:"Take a look at our amazing options"},{title:"For the Weekend",imageUrl:"assets/yannbf/img/lists/wishlist-2.jpg",description:"Take a look at our amazing options"},{title:"Family Time",imageUrl:"assets/yannbf/img/lists/wishlist-3.jpg",description:"Take a look at our amazing options"},{title:"My Trip",imageUrl:"assets/yannbf/img/lists/wishlist-4.jpg",description:"Take a look at our amazing options"}],this.slideOpts1={autoplay:{delay:3e3}}}var i,o,a;return i=e,(o=[{key:"ngOnInit",value:function(){}},{key:"onSlideChanged",value:function(){var n=this;this.slider.getActiveIndex().then(function(t){console.log("Slide changed! Current index is",t),n.slideIndex=t})}},{key:"goToApp",value:function(){console.log("Go to App clicked")}},{key:"skip",value:function(){console.log("Skip clicked")}}])&&t(i.prototype,o),a&&t(i,a),e}(),u.\u0275fac=function(n){return new(n||u)},u.\u0275cmp=c.Jb({type:u,selectors:[["app-slide-walkthrough"]],viewQuery:function(n,t){var e;1&n&&c.Pc(g,3),2&n&&c.xc(e=c.ec())&&(t.slider=e.first)},decls:11,vars:3,consts:[["slot","start"],["defaultHref","/"],["fullscreen","true",1,"no-padding-top"],["pager","true",3,"options","ionSlideWillChange"],["slider",""],["class","slide-background",3,"ngStyle",4,"ngFor","ngForOf"],["class","floating-buttons pop-in",4,"ngIf"],[1,"slide-background",3,"ngStyle"],[1,"text-wrapper"],[1,"slide-text"],[1,"slide-title",3,"innerHTML"],[3,"innerHTML"],[1,"floating-buttons","pop-in"],["fill","clear","size","large","expand","full",3,"click"]],template:function(n,t){1&n&&(c.Vb(0,"ion-header"),c.Vb(1,"ion-toolbar"),c.Vb(2,"ion-buttons",0),c.Qb(3,"ion-back-button",1),c.Ub(),c.Vb(4,"ion-title"),c.Lc(5,"Slide Walkthrough"),c.Ub(),c.Ub(),c.Ub(),c.Vb(6,"ion-content",2),c.Vb(7,"ion-slides",3,4),c.dc("ionSlideWillChange",function(){return t.onSlideChanged()}),c.Jc(9,p,6,5,"ion-slide",5),c.Ub(),c.Jc(10,b,3,0,"div",6),c.Ub()),2&n&&(c.Db(7),c.nc("options",t.slideOpts1),c.Db(2),c.nc("ngForOf",t.slides),c.Db(1),c.nc("ngIf",t.slideIndex>=t.slides.length-1))},directives:[s.z,s.mb,s.l,s.h,s.i,s.kb,s.u,s.cb,a.n,a.o,s.bb,a.p,s.k],styles:["ion-item[_ngcontent-%COMP%]{--background:transparent}.swiper-pagination-bullet[_ngcontent-%COMP%]{background-color:#fff}.no-padding-top[_ngcontent-%COMP%]   .scroll-content[_ngcontent-%COMP%]{padding-top:0!important}.skip-button[_ngcontent-%COMP%]{text-transform:none;padding:15px;font-weight:700}.floating-buttons[_ngcontent-%COMP%]{z-index:1;width:100%;bottom:0;position:absolute;margin-bottom:50px;transition:all .4s linear}.floating-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--color:#fff;min-height:7vh;text-transform:none;font-size:1.4em;font-weight:700;--background:rgba(49,161,216,0.67)}.slide-background[_ngcontent-%COMP%]{background-size:cover!important;background-position:50%;background-repeat:no-repeat}.slide-background[_ngcontent-%COMP%], .toolbar-background[_ngcontent-%COMP%]{border-color:transparent}.slide-zoom[_ngcontent-%COMP%]{background:linear-gradient(transparent,rgba(0,0,0,.4))!important;height:100%}.text-wrapper[_ngcontent-%COMP%]{width:100vw;height:100vh}.slide-text[_ngcontent-%COMP%]{position:relative;text-align:center;top:50%;transform:translateY(-50%)}.slide-title[_ngcontent-%COMP%]{color:#fff;font-weight:700}.slide-image[_ngcontent-%COMP%]{max-height:100%;max-width:100%;margin:18px 0}b[_ngcontent-%COMP%]{font-weight:500}p[_ngcontent-%COMP%]{padding:0 40px;font-size:1em;line-height:1.5;color:#fff}p[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{color:#000}.pop-in[_ngcontent-%COMP%]{-webkit-animation:pop-in .65s;animation:pop-in .65s!important}"]}),u)}],m=((f=function t(){n(this,t)}).\u0275fac=function(n){return new(n||f)},f.\u0275mod=c.Nb({type:f}),f.\u0275inj=c.Mb({imports:[[a.c,r.h,s.nb,l.j.forChild(h)]]}),f)}}])}();