!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{yrxR:function(t,o,a){"use strict";a.r(o),a.d(o,"TinderPageModule",function(){return v});var r=a("ofXK"),i=a("3Pt+"),c=a("TEn/"),s=a("tyNb"),l=a("fXoL");function u(e,n){if(1&e&&(l.Vb(0,"ion-card"),l.Qb(1,"img",4),l.Vb(2,"ion-card-header"),l.Vb(3,"ion-card-title"),l.Lc(4),l.Ub(),l.Vb(5,"ion-card-subtitle"),l.Lc(6),l.Ub(),l.Ub(),l.Qb(7,"ion-card-content"),l.Ub()),2&e){var t=n.$implicit;l.Gc("position","absolute"),l.Db(1),l.Gc("width","100%"),l.nc("src",t.img,l.Dc),l.Db(3),l.Nc(" ",t.name,""),l.Db(2),l.Nc(" Power: ",t.power,"")}}var b,f,p,d=[{path:"",component:(b=function(){function t(n,o,a){e(this,t),this.gestureCtrl=n,this.zone=o,this.plt=a,this.peoaple=[{name:"Marsy",img:"assets/clones/chat/avatars/1.png",power:0},{name:"Anys",img:"assets/clones/chat/avatars/2.png",power:0},{name:"Max",img:"assets/clones/chat/avatars/4.png",power:0},{name:"Geneva",img:"assets/clones/chat/avatars/5.png",power:0}],this.longPressActive=!1}var o,a,r;return o=t,(a=[{key:"ngAfterViewInit",value:function(){var e=this.cards.toArray();this.userTinderSwipe(e)}},{key:"useLongPress",value:function(e){for(var n=this,t=function(t){n.gestureCtrl.create({el:e[t].nativeElement,gestureName:"long-press",onStart:function(e){n.longPressActive=!0,n.increasePower(t)},onEnd:function(e){n.longPressActive=!1}}).enable(!0)},o=0;o<e.length;o++)t(o)}},{key:"increasePower",value:function(e){var n=this;console.log("IncreasePower"),setTimeout(function(){n.longPressActive&&n.zone.run(function(){n.peoaple[e].power++,n.increasePower(e)})},200)}},{key:"userTinderSwipe",value:function(e){for(var n=this,t=function(t){var o=e[t];n.gestureCtrl.create({el:o.nativeElement,gestureName:"swipe",onStart:function(e){},onMove:function(e){o.nativeElement.style.transform="translateX(".concat(e.deltaX,"px) rotate(").concat(e.deltaX/10,"deg)"),n.setCardColor(e.deltaX,o.nativeElement)},onEnd:function(e){o.nativeElement.style.transition=".5s ease-out",o.nativeElement.style.transform=e.deltaX>150?"translateX(".concat(2*+n.plt.width(),"px) rotate(").concat(e.deltaX/2,"deg)"):e.deltaX<-150?"translateX(-".concat(2*+n.plt.width(),"px) rotate(").concat(e.deltaX/2,"deg)"):""}}).enable(!0)},o=0;o<e.length;o++)t(o)}},{key:"setCardColor",value:function(e,n){var t,o=Math.abs(e),a=Math.trunc(Math.min(256-o,256)),r=this.decimalToHex(a,2);t=e<0?"#FF"+r+r:"#"+r+"FF"+r,n.style.background=t}},{key:"decimalToHex",value:function(e,n){var t=Number(e).toString(16);for(n=null==n?n=2:n;t.length<n;)t="0"+t;return t}}])&&n(o.prototype,a),r&&n(o,r),t}(),b.\u0275fac=function(e){return new(e||b)(l.Pb(c.e),l.Pb(l.C),l.Pb(c.ub))},b.\u0275cmp=l.Jb({type:b,selectors:[["app-tinder"]],viewQuery:function(e,n){var t;1&e&&l.Pc(c.m,1,l.m),2&e&&l.xc(t=l.ec())&&(n.cards=t)},decls:8,vars:1,consts:[["slot","start"],["defaultHref","/clones-ui"],[1,"ion-padding"],[3,"position",4,"ngFor","ngForOf"],[3,"src"]],template:function(e,n){1&e&&(l.Vb(0,"ion-header"),l.Vb(1,"ion-toolbar"),l.Vb(2,"ion-buttons",0),l.Qb(3,"ion-back-button",1),l.Ub(),l.Vb(4,"ion-title"),l.Lc(5," Tinder cards Gestures "),l.Ub(),l.Ub(),l.Ub(),l.Vb(6,"ion-content",2),l.Jc(7,u,8,7,"ion-card",3),l.Ub()),2&e&&(l.Db(7),l.nc("ngForOf",n.peoaple))},directives:[c.z,c.mb,c.l,c.h,c.i,c.kb,c.u,r.n,c.m,c.o,c.q,c.p,c.n],styles:[""]}),b)}],m=((p=function n(){e(this,n)}).\u0275fac=function(e){return new(e||p)},p.\u0275mod=l.Nb({type:p}),p.\u0275inj=l.Mb({imports:[[s.j.forChild(d)],s.j]}),p),v=((f=function n(){e(this,n)}).\u0275fac=function(e){return new(e||f)},f.\u0275mod=l.Nb({type:f}),f.\u0275inj=l.Mb({imports:[[r.c,i.h,c.nb,m]]}),f)}}])}();