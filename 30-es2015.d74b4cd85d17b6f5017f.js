(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{yrxR:function(e,t,n){"use strict";n.r(t),n.d(t,"TinderPageModule",function(){return d});var s=n("ofXK"),r=n("3Pt+"),o=n("TEn/"),a=n("tyNb"),i=n("fXoL");function c(e,t){if(1&e&&(i.Vb(0,"ion-card"),i.Qb(1,"img",4),i.Vb(2,"ion-card-header"),i.Vb(3,"ion-card-title"),i.Lc(4),i.Ub(),i.Vb(5,"ion-card-subtitle"),i.Lc(6),i.Ub(),i.Ub(),i.Qb(7,"ion-card-content"),i.Ub()),2&e){const e=t.$implicit;i.Gc("position","absolute"),i.Db(1),i.Gc("width","100%"),i.nc("src",e.img,i.Dc),i.Db(3),i.Nc(" ",e.name,""),i.Db(2),i.Nc(" Power: ",e.power,"")}}const l=[{path:"",component:(()=>{class e{constructor(e,t,n){this.gestureCtrl=e,this.zone=t,this.plt=n,this.peoaple=[{name:"Marsy",img:"assets/clones/chat/avatars/1.png",power:0},{name:"Anys",img:"assets/clones/chat/avatars/2.png",power:0},{name:"Max",img:"assets/clones/chat/avatars/4.png",power:0},{name:"Geneva",img:"assets/clones/chat/avatars/5.png",power:0}],this.longPressActive=!1}ngAfterViewInit(){const e=this.cards.toArray();this.userTinderSwipe(e)}useLongPress(e){for(let t=0;t<e.length;t++)this.gestureCtrl.create({el:e[t].nativeElement,gestureName:"long-press",onStart:e=>{this.longPressActive=!0,this.increasePower(t)},onEnd:e=>{this.longPressActive=!1}}).enable(!0)}increasePower(e){console.log("IncreasePower"),setTimeout(()=>{this.longPressActive&&this.zone.run(()=>{this.peoaple[e].power++,this.increasePower(e)})},200)}userTinderSwipe(e){for(let t=0;t<e.length;t++){const n=e[t];this.gestureCtrl.create({el:n.nativeElement,gestureName:"swipe",onStart:e=>{},onMove:e=>{n.nativeElement.style.transform=`translateX(${e.deltaX}px) rotate(${e.deltaX/10}deg)`,this.setCardColor(e.deltaX,n.nativeElement)},onEnd:e=>{n.nativeElement.style.transition=".5s ease-out",n.nativeElement.style.transform=e.deltaX>150?`translateX(${2*+this.plt.width()}px) rotate(${e.deltaX/2}deg)`:e.deltaX<-150?`translateX(-${2*+this.plt.width()}px) rotate(${e.deltaX/2}deg)`:""}}).enable(!0)}}setCardColor(e,t){let n="";const s=Math.abs(e),r=Math.trunc(Math.min(256-s,256)),o=this.decimalToHex(r,2);n=e<0?"#FF"+o+o:"#"+o+"FF"+o,t.style.background=n}decimalToHex(e,t){let n=Number(e).toString(16);for(t=null==t?t=2:t;n.length<t;)n="0"+n;return n}}return e.\u0275fac=function(t){return new(t||e)(i.Pb(o.e),i.Pb(i.C),i.Pb(o.ub))},e.\u0275cmp=i.Jb({type:e,selectors:[["app-tinder"]],viewQuery:function(e,t){if(1&e&&i.Pc(o.m,1,i.m),2&e){let e;i.xc(e=i.ec())&&(t.cards=e)}},decls:8,vars:1,consts:[["slot","start"],["defaultHref","/clones-ui"],[1,"ion-padding"],[3,"position",4,"ngFor","ngForOf"],[3,"src"]],template:function(e,t){1&e&&(i.Vb(0,"ion-header"),i.Vb(1,"ion-toolbar"),i.Vb(2,"ion-buttons",0),i.Qb(3,"ion-back-button",1),i.Ub(),i.Vb(4,"ion-title"),i.Lc(5," Tinder cards Gestures "),i.Ub(),i.Ub(),i.Ub(),i.Vb(6,"ion-content",2),i.Jc(7,c,8,7,"ion-card",3),i.Ub()),2&e&&(i.Db(7),i.nc("ngForOf",t.peoaple))},directives:[o.z,o.mb,o.l,o.h,o.i,o.kb,o.u,s.n,o.m,o.o,o.q,o.p,o.n],styles:[""]}),e})()}];let b=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.Nb({type:e}),e.\u0275inj=i.Mb({imports:[[a.j.forChild(l)],a.j]}),e})(),d=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.Nb({type:e}),e.\u0275inj=i.Mb({imports:[[s.c,r.h,o.nb,b]]}),e})()}}]);