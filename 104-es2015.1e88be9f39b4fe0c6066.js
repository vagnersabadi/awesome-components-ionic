(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{tlxJ:function(s,t,i){"use strict";i.r(t),i.d(t,"SlideListPageModule",function(){return b});var e=i("ofXK"),n=i("3Pt+"),a=i("tyNb"),r=i("TEn/"),l=i("fXoL");const o=function(s){return{"background-image":s}};function g(s,t){if(1&s&&(l.Vb(0,"ion-slide",6),l.Vb(1,"div",7),l.Vb(2,"h2"),l.Lc(3),l.Ub(),l.Vb(4,"p"),l.Lc(5),l.Ub(),l.Ub(),l.Ub()),2&s){const s=t.$implicit;l.nc("ngStyle",l.sc(3,o,"url("+s.imageUrl+")")),l.Db(3),l.Mc(s.title),l.Db(2),l.Nc("",s.songs," songs")}}function p(s,t){if(1&s&&(l.Vb(0,"ion-list",3),l.Vb(1,"ion-slides",4),l.Jc(2,g,6,5,"ion-slide",5),l.Ub(),l.Ub()),2&s){const s=t.$implicit,i=l.hc();l.Db(1),l.nc("pager",!0)("options",i.slideOptsProgressbar),l.Db(1),l.nc("ngForOf",s.slides)}}const c=[{path:"",component:(()=>{class s{constructor(){this.items=[{name:"one",slides:[{title:"Dream's Adventure",imageUrl:"assets/yannbf/img/lists/wishlist-1.jpg",songs:2,private:!1},{title:"For the Weekend",imageUrl:"assets/yannbf/img/lists/wishlist-2.jpg",songs:4,private:!1},{title:"Family Time",imageUrl:"assets/yannbf/img/lists/wishlist-3.jpg",songs:5,private:!0},{title:"My Trip",imageUrl:"assets/yannbf/img/lists/wishlist-4.jpg",songs:12,private:!0}]},{name:"one",slides:[{title:"My Trip",imageUrl:"assets/yannbf/img/lists/wishlist-4.jpg",songs:12,private:!0},{title:"Dream's Adventure",imageUrl:"assets/yannbf/img/lists/wishlist-1.jpg",songs:2,private:!1},{title:"Family Time",imageUrl:"assets/yannbf/img/lists/wishlist-3.jpg",songs:5,private:!0}]},{name:"one",slides:[{title:"For the Weekend",imageUrl:"assets/yannbf/img/lists/wishlist-2.jpg",songs:4,private:!1},{title:"Dream's Adventure",imageUrl:"assets/yannbf/img/lists/wishlist-1.jpg",songs:2,private:!1},{title:"Dream's Adventure",imageUrl:"assets/yannbf/img/lists/wishlist-1.jpg",songs:2,private:!1},{title:"Family Time",imageUrl:"assets/yannbf/img/lists/wishlist-3.jpg",songs:5,private:!0},{title:"For the Weekend",imageUrl:"assets/yannbf/img/lists/wishlist-2.jpg",songs:4,private:!1},{title:"Family Time",imageUrl:"assets/yannbf/img/lists/wishlist-3.jpg",songs:5,private:!0}]}],this.slideOptsProgressbar={pagination:{el:".swiper-pagination",type:"custom",renderCustom:(s,t,i)=>this.customProgressBar(t,i)}}}ngOnInit(){}customProgressBar(s,t){let i="<div class='swiper-pagination-progressbar' style='height: 4px; top: 6px; width: 100%;'>";return i+="<span class='swiper-pagination-progressbar-fill' style='transform: translate3d(0px, 0px, 0px) scaleX("+s/t+") scaleY(1); transition-duration: 300ms;'></span>",i+="</span></div>",i}}return s.\u0275fac=function(t){return new(t||s)},s.\u0275cmp=l.Jb({type:s,selectors:[["app-slide-list"]],decls:8,vars:1,consts:[["slot","start"],["defaultHref","/"],["class","ion-no-margin",4,"ngFor","ngForOf"],[1,"ion-no-margin"],[3,"pager","options"],["class","text-center slider-item",3,"ngStyle",4,"ngFor","ngForOf"],[1,"text-center","slider-item",3,"ngStyle"],[1,"slide-text"]],template:function(s,t){1&s&&(l.Vb(0,"ion-header"),l.Vb(1,"ion-toolbar"),l.Vb(2,"ion-buttons",0),l.Qb(3,"ion-back-button",1),l.Ub(),l.Vb(4,"ion-title"),l.Lc(5,"Slide List"),l.Ub(),l.Ub(),l.Ub(),l.Vb(6,"ion-content"),l.Jc(7,p,3,3,"ion-list",2),l.Ub()),2&s&&(l.Db(7),l.nc("ngForOf",t.items))},directives:[r.z,r.mb,r.l,r.h,r.i,r.kb,r.u,e.n,r.K,r.cb,r.bb,e.p],styles:["ion-slides[_ngcontent-%COMP%]{--bullet-background:#fff;--bullet-background-active:#fa3}.slider-item[_ngcontent-%COMP%]{height:35vh;width:100%;background-size:cover}.slide-zoom[_ngcontent-%COMP%]{height:100%;background:linear-gradient(transparent,rgba(0,0,0,.22))!important}.slide-text[_ngcontent-%COMP%]{position:relative;text-align:center;transform:translateY(-50%)}.text-center[_ngcontent-%COMP%]{text-align:center;color:#fff}"]}),s})()}];let b=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=l.Nb({type:s}),s.\u0275inj=l.Mb({imports:[[e.c,n.h,r.nb,a.j.forChild(c)]]}),s})()}}]);