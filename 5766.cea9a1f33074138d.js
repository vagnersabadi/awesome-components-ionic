"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5766],{5766:(C,c,s)=>{s.r(c),s.d(c,{DrawerPageModule:()=>v});var o=s(7674),l=s(9808),u=s(655),e=s(5e3);const g=["*"];let h=(()=>{class t{constructor(n,i,d){this.gestureCtrl=n,this.element=i,this.renderer=d,this.state="bottom",this.title="Hello World",this.handleHeight=138}ngOnInit(){}ngAfterViewInit(){return(0,u.mG)(this,void 0,void 0,function*(){const n=window.innerHeight,i=n-this.handleHeight;this.renderer.setStyle(this.element.nativeElement,"top",n-this.handleHeight+"px");const d={el:document.querySelector("#header"),direction:"y",gestureName:"slide-drawer-swipe",onStart:a=>{this.renderer.setStyle(this.element.nativeElement,"transition","none")},onMove:a=>{a.deltaY<0&&"bottom"===this.state?this.renderer.setStyle(this.element.nativeElement,"transform",`translateY(${a.deltaY}px)`):"top"===this.state&&this.renderer.setStyle(this.element.nativeElement,"transform",`translateY(calc(${a.deltaY}px - ${i}px))`)},onEnd:a=>{this.renderer.setStyle(this.element.nativeElement,"transition","0.3s ease-out"),a.deltaY<-n/20&&"bottom"===this.state||a.deltaY<n/20&&"top"===this.state?(this.renderer.setStyle(this.element.nativeElement,"transform",`translateY(-${i}px)`),this.state="top"):(this.renderer.setStyle(this.element.nativeElement,"transform","translateY(0px)"),this.state="bottom")}};(yield this.gestureCtrl.create(d)).enable()})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(o.TH),e.Y36(e.SBq),e.Y36(e.Qsj))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-slide-drawer"]],inputs:{title:"title",handleHeight:"handleHeight"},ngContentSelectors:g,decls:7,vars:1,consts:[["mode","ios","id","header"],["mode","md"],["src","assets/icon/arrow.svg"]],template:function(n,i){1&n&&(e.F$t(),e.TgZ(0,"ion-header",0)(1,"ion-toolbar",1),e._UZ(2,"ion-icon",2),e.TgZ(3,"ion-title"),e._uU(4),e.qZA()()(),e.TgZ(5,"ion-content"),e.Hsn(6),e.qZA()),2&n&&(e.xp6(4),e.Oqu(i.title))},directives:[o.Gu,o.sr,o.gu,o.wd,o.W2],styles:["[_nghost-%COMP%]{width:100%;height:100%;position:absolute;top:calc(100vh - 144px);z-index:9999}[_nghost-%COMP%]   ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{height:88px;border-top-right-radius:8px;border-top-left-radius:8px}[_nghost-%COMP%]   ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:60px;height:20px;display:flex;margin:0 auto}"]}),t})(),p=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[o.Pc,l.ez]]}),t})();var f=s(3075),m=s(7154);function w(t,r){1&t&&(e.TgZ(0,"ion-item"),e._UZ(1,"ion-icon",4),e.TgZ(2,"ion-label"),e._uU(3,"Item"),e.qZA()())}const y=function(){return[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},P=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-drawer"]],decls:13,vars:2,consts:[["slot","start"],["defaultHref","/gestures"],["lines","none"],[4,"ngFor","ngForOf"],["slot","start","color","medium","name","book"]],template:function(n,i){1&n&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),e._UZ(3,"ion-back-button",1),e.qZA(),e.TgZ(4,"ion-title"),e._uU(5,"Slide Drawer"),e.qZA()()(),e._UZ(6,"ion-content"),e.TgZ(7,"app-slide-drawer")(8,"ion-list",2)(9,"ion-list-header")(10,"ion-label"),e._uU(11,"Resources"),e.qZA()(),e.YNc(12,w,4,0,"ion-item",3),e.qZA()()),2&n&&(e.xp6(12),e.Q6J("ngForOf",e.DdM(1,y)))},directives:[o.Gu,o.sr,o.Sm,o.oU,o.cs,o.wd,o.W2,h,o.q_,o.yh,o.Q$,l.sg,o.Ie,o.gu],styles:[""]}),t})()}];let S=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[m.Bz.forChild(P)],m.Bz]}),t})(),v=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[l.ez,f.u5,o.Pc,S,p]]}),t})()}}]);