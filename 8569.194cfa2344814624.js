"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8569],{8569:(v,u,l)=>{l.r(u),l.d(u,{TinderPageModule:()=>P});var g=l(9808),p=l(3075),o=l(8779),m=l(7154),e=l(5e3);function h(r,i){if(1&r&&(e.TgZ(0,"ion-card"),e._UZ(1,"img",4),e.TgZ(2,"ion-card-header")(3,"ion-card-title"),e._uU(4),e.qZA(),e.TgZ(5,"ion-card-subtitle"),e._uU(6),e.qZA()(),e._UZ(7,"ion-card-content"),e.qZA()),2&r){const t=i.$implicit;e.Udp("position","absolute"),e.xp6(1),e.Udp("width","100%"),e.Q6J("src",t.img,e.LSH),e.xp6(3),e.hij(" ",t.name,""),e.xp6(2),e.hij(" Power: ",t.power,"")}}const f=[{path:"",component:(()=>{class r{constructor(t,n,s){this.gestureCtrl=t,this.zone=n,this.plt=s,this.peoaple=[{name:"Marsy",img:"assets/clones/chat/avatars/1.png",power:0},{name:"Anys",img:"assets/clones/chat/avatars/2.png",power:0},{name:"Max",img:"assets/clones/chat/avatars/4.png",power:0},{name:"Geneva",img:"assets/clones/chat/avatars/5.png",power:0}],this.longPressActive=!1}ngAfterViewInit(){const t=this.cards.toArray();this.userTinderSwipe(t)}useLongPress(t){for(let n=0;n<t.length;n++)this.gestureCtrl.create({el:t[n].nativeElement,gestureName:"long-press",onStart:a=>{this.longPressActive=!0,this.increasePower(n)},onEnd:a=>{this.longPressActive=!1}}).enable(!0)}increasePower(t){console.log("IncreasePower"),setTimeout(()=>{this.longPressActive&&this.zone.run(()=>{this.peoaple[t].power++,this.increasePower(t)})},200)}userTinderSwipe(t){for(let n=0;n<t.length;n++){const s=t[n];this.gestureCtrl.create({el:s.nativeElement,gestureName:"swipe",onStart:a=>{},onMove:a=>{s.nativeElement.style.transform=`translateX(${a.deltaX}px) rotate(${a.deltaX/10}deg)`,this.setCardColor(a.deltaX,s.nativeElement)},onEnd:a=>{s.nativeElement.style.transition=".5s ease-out",s.nativeElement.style.transform=a.deltaX>150?`translateX(${2*+this.plt.width()}px) rotate(${a.deltaX/2}deg)`:a.deltaX<-150?`translateX(-${2*+this.plt.width()}px) rotate(${a.deltaX/2}deg)`:""}}).enable(!0)}}setCardColor(t,n){let s="";const d=Math.abs(t),a=Math.trunc(Math.min(256-d,256)),c=this.decimalToHex(a,2);s=t<0?"#FF"+c+c:"#"+c+"FF"+c,n.style.background=s}decimalToHex(t,n){let s=Number(t).toString(16);for(n=null==n?n=2:n;s.length<n;)s="0"+s;return s}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(o.TH),e.Y36(e.R0b),e.Y36(o.t4))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-tinder"]],viewQuery:function(t,n){if(1&t&&e.Gf(o.PM,5,e.SBq),2&t){let s;e.iGM(s=e.CRH())&&(n.cards=s)}},decls:8,vars:1,consts:[["slot","start"],["defaultHref","/clones-ui"],[1,"ion-padding"],[3,"position",4,"ngFor","ngForOf"],[3,"src"]],template:function(t,n){1&t&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),e._UZ(3,"ion-back-button",1),e.qZA(),e.TgZ(4,"ion-title"),e._uU(5," Tinder cards Gestures "),e.qZA()()(),e.TgZ(6,"ion-content",2),e.YNc(7,h,8,7,"ion-card",3),e.qZA()),2&t&&(e.xp6(7),e.Q6J("ngForOf",n.peoaple))},directives:[o.Gu,o.sr,o.Sm,o.oU,o.cs,o.wd,o.W2,g.sg,o.PM,o.Zi,o.Dq,o.tO,o.FN],styles:[""]}),r})()}];let T=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[m.Bz.forChild(f)],m.Bz]}),r})(),P=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[g.ez,p.u5,o.Pc,T]]}),r})()}}]);