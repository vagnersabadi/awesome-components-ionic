(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+axM":function(t,n,e){"use strict";e.d(n,"a",function(){return c});var i=e("fXoL");const o=[[["",8,"fc-front"]],[["",8,"fc-back"]]],r=[".fc-front",".fc-back"];let c=(()=>{class t{constructor(){this.flipped=!1}flip(){this.flipped=!this.flipped}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=i.Jb({type:t,selectors:[["app-flash-card-component"]],ngContentSelectors:r,decls:8,vars:2,consts:[[1,"fc-container",3,"click"],["fcContainer",""],[1,"front"],["front",""],[1,"back"],["back",""]],template:function(t,n){1&t&&(i.mc(o),i.Vb(0,"div",0,1),i.dc("click",function(){return n.flip()}),i.Vb(2,"div",2,3),i.lc(4),i.Ub(),i.Vb(5,"div",4,5),i.lc(7,1),i.Ub(),i.Ub()),2&t&&i.Hb("fc-back",n.flipped)},styles:[".fc-container[_ngcontent-%COMP%]{transition:.6s;transform-style:preserve-3d;position:relative}.fc-container.fc-back[_ngcontent-%COMP%]{transform:rotateY(180deg)}.fc-container[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%]{position:inherit;z-index:2;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform:rotateY(0deg)}.fc-container[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%], .fc-container[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%]{top:0;left:0;width:100%;padding:20px;background:#f2f2f2}.fc-container[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]{position:absolute;transform:rotateY(180deg)}.fc-back[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%], .fc-back[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%]{z-index:2}"]}),t})()},"+gjY":function(t,n,e){"use strict";e.d(n,"a",function(){return g});var i=e("fXoL"),o=e("ofXK"),r=e("TEn/");function c(t,n){if(1&t&&(i.Vb(0,"ion-button",3),i.Lc(1),i.Ub()),2&t){const t=i.hc(2);i.Db(1),i.Nc(" ",t.timer.displayTime," ")}}function s(t,n){1&t&&(i.Vb(0,"ion-button",4),i.Lc(1,"Timer set up incorrectly"),i.Ub())}function a(t,n){if(1&t){const t=i.Wb();i.Vb(0,"ion-button",7),i.dc("click",function(){return i.Bc(t),i.hc(3).initTimer()}),i.Qb(1,"ion-icon",8),i.Lc(2," Restart "),i.Ub()}}function l(t,n){if(1&t){const t=i.Wb();i.Vb(0,"ion-button",9),i.dc("click",function(){return i.Bc(t),i.hc(3).pauseTimer()}),i.Qb(1,"ion-icon",10),i.Lc(2," Pause "),i.Ub()}}function d(t,n){if(1&t){const t=i.Wb();i.Vb(0,"ion-button",9),i.dc("click",function(){return i.Bc(t),i.hc(3).resumeTimer()}),i.Qb(1,"ion-icon",11),i.Lc(2," Resume "),i.Ub()}}function m(t,n){if(1&t){const t=i.Wb();i.Vb(0,"ion-button",9),i.dc("click",function(){return i.Bc(t),i.hc(3).startTimer()}),i.Qb(1,"ion-icon",11),i.Lc(2," Start "),i.Ub()}}function b(t,n){if(1&t&&(i.Vb(0,"ion-item"),i.Jc(1,a,3,0,"ion-button",5),i.Jc(2,l,3,0,"ion-button",6),i.Jc(3,d,3,0,"ion-button",6),i.Jc(4,m,3,0,"ion-button",6),i.Ub()),2&t){const t=i.hc(2);i.Db(1),i.nc("ngIf",!t.timer.runTimer&&(t.timer.hasStarted||t.timer.hasFinished)||t.timer.hasFinished),i.Db(1),i.nc("ngIf",t.timer.runTimer&&t.timer.hasStarted&&!t.timer.hasFinished),i.Db(1),i.nc("ngIf",!t.timer.runTimer&&t.timer.hasStarted&&!t.timer.hasFinished),i.Db(1),i.nc("ngIf",!t.timer.hasStarted)}}function f(t,n){if(1&t&&(i.Vb(0,"ion-card"),i.Vb(1,"ion-card-header"),i.Jc(2,c,2,1,"ion-button",1),i.Jc(3,s,2,0,"ion-button",2),i.Ub(),i.Jc(4,b,5,4,"ion-item",0),i.Ub()),2&t){const t=i.hc();i.Db(2),i.nc("ngIf",t.timeInSeconds&&t.timeInSeconds>0),i.Db(1),i.nc("ngIf",!t.timeInSeconds||0==t.timeInSeconds),i.Db(1),i.nc("ngIf",t.timeInSeconds&&t.timeInSeconds>0)}}let g=(()=>{class t{ngOnInit(){this.initTimer()}hasFinished(){return this.timer.hasFinished}initTimer(){this.timeInSeconds||(this.timeInSeconds=0),this.timer={seconds:this.timeInSeconds,runTimer:!1,hasStarted:!1,hasFinished:!1,secondsRemaining:this.timeInSeconds},this.timer.displayTime=this.getSecondsAsDigitalClock(this.timer.secondsRemaining)}startTimer(){this.timer.hasStarted=!0,this.timer.runTimer=!0,this.timerTick()}pauseTimer(){this.timer.runTimer=!1}resumeTimer(){this.startTimer()}timerTick(){setTimeout(()=>{this.timer.runTimer&&(this.timer.secondsRemaining--,this.timer.displayTime=this.getSecondsAsDigitalClock(this.timer.secondsRemaining),this.timer.secondsRemaining>0?this.timerTick():this.timer.hasFinished=!0)},1e3)}getSecondsAsDigitalClock(t){const n=parseInt(t.toString(),10),e=Math.floor(n/3600),i=Math.floor((n-3600*e)/60),o=n-3600*e-60*i;let r="",c="",s="";return r=e<10?"0"+e:e.toString(),c=i<10?"0"+i:i.toString(),s=o<10?"0"+o:o.toString(),r+":"+c+":"+s}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=i.Jb({type:t,selectors:[["app-timer"]],inputs:{timeInSeconds:"timeInSeconds"},decls:1,vars:1,consts:[[4,"ngIf"],["size","large","expand","block","fill","clear","class","timer-button x-large",4,"ngIf"],["size","large","expand","block","fill","clear","class","timer-button",4,"ngIf"],["size","large","expand","block","fill","clear",1,"timer-button","x-large"],["size","large","expand","block","fill","clear",1,"timer-button"],["fill","clear","class","large","color","danger","slot","start",3,"click",4,"ngIf"],["fill","clear","class","large","slot","end",3,"click",4,"ngIf"],["fill","clear","color","danger","slot","start",1,"large",3,"click"],["name","refresh"],["fill","clear","slot","end",1,"large",3,"click"],["name","pause"],["name","play"]],template:function(t,n){1&t&&i.Jc(0,f,5,3,"ion-card",0),2&t&&i.nc("ngIf",n.timer)},directives:[o.o,r.m,r.o,r.k,r.D,r.A],styles:[""]}),t})()},NRl2:function(t,n,e){"use strict";e.d(n,"a",function(){return a});var i=e("fXoL"),o=e("jhN1"),r=e("TEn/");const c=["accordionContent"],s=["*"];let a=(()=>{class t{constructor(t,n){this.renderer=t,this.sanitizer=n,this.headerColor="#F53D3D",this.textColor="#FFF",this.contentColor="#F9F9F9",this.hasMargin=!0}ngOnInit(){this.expanded||this.renderer.setStyle(this.elementView.nativeElement,"height","0px")}toggleAccordion(){this.expanded=!this.expanded;const t=this.expanded?"100%":"0px";console.log(t),this.renderer.setStyle(this.elementView.nativeElement,"height",t)}getDynamicColor(t){return this.sanitizer.bypassSecurityTrustStyle("--myvar:"+t)}}return t.\u0275fac=function(n){return new(n||t)(i.Pb(i.H),i.Pb(o.b))},t.\u0275cmp=i.Jb({type:t,selectors:[["app-component-accordion-list"]],viewQuery:function(t,n){if(1&t&&i.Pc(c,3),2&t){let t;i.xc(t=i.ec())&&(n.elementView=t.first)}},inputs:{headerColor:"headerColor",textColor:"textColor",contentColor:"contentColor",title:"title",hasMargin:"hasMargin",expanded:"expanded"},ngContentSelectors:s,decls:9,vars:9,consts:[[1,"accordion-list"],["lines","none",1,"accordion-header",3,"click"],["slot","start","name","ios-arrow-forward"],[1,"expand"],[1,"accordion-content"],["accordionContent",""]],template:function(t,n){1&t&&(i.mc(),i.Vb(0,"ion-list",0),i.Vb(1,"ion-item",1),i.dc("click",function(){return n.toggleAccordion()}),i.Qb(2,"ion-icon",2),i.Vb(3,"ion-label"),i.Lc(4),i.Ub(),i.Ub(),i.Vb(5,"div",3),i.Vb(6,"section",4,5),i.lc(8),i.Ub(),i.Ub(),i.Ub()),2&t&&(i.Db(1),i.Fc(n.getDynamicColor(n.headerColor)),i.Hb("active",n.expanded),i.Db(3),i.Nc(" ",n.title," "),i.Db(2),i.Gc("background",n.contentColor),i.Hb("active",n.expanded))},directives:[r.K,r.D,r.A,r.J],styles:[".accordion-header[_ngcontent-%COMP%]{color:#fff;--background:var(--myvar)}.accordion-header[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%]{margin-left:0!important}.accordion-header[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#fff;transition:all .25s ease-in;transform:rotate(0)}.active[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{transform:rotate(90deg)}.accordion-content[_ngcontent-%COMP%]{transition:.3s ease-in-out}.accordion-content.active[_ngcontent-%COMP%]{padding:.75rem}.label[_ngcontent-%COMP%]{margin:0}.expand[_ngcontent-%COMP%]{margin:-4px}"]}),t})()},OYR6:function(t,n,e){"use strict";e.d(n,"a",function(){return c}),e("+axM");var i=e("TEn/"),o=(e("NRl2"),e("SZA9"),e("+gjY"),e("ofXK")),r=(e("c1lj"),e("fXoL"));let c=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=r.Nb({type:t}),t.\u0275inj=r.Mb({imports:[[i.nb,o.c]]}),t})()},SZA9:function(t,n,e){"use strict";e.d(n,"a",function(){return g});var i=e("fXoL"),o=e("jhN1"),r=e("ofXK"),c=e("TEn/");function s(t,n){1&t&&(i.Vb(0,"ion-button",11),i.Lc(1,"Timer set up incorrectly"),i.Ub())}function a(t,n){if(1&t){const t=i.Wb();i.Vb(0,"ion-button",14),i.dc("click",function(){return i.Bc(t),i.hc(3).initTimer()}),i.Qb(1,"ion-icon",15),i.Lc(2," Restart "),i.Ub()}}function l(t,n){if(1&t){const t=i.Wb();i.Vb(0,"ion-button",16),i.dc("click",function(){return i.Bc(t),i.hc(3).pauseTimer()}),i.Qb(1,"ion-icon",17),i.Lc(2," Pause "),i.Ub()}}function d(t,n){if(1&t){const t=i.Wb();i.Vb(0,"ion-button",16),i.dc("click",function(){return i.Bc(t),i.hc(3).resumeTimer()}),i.Qb(1,"ion-icon",18),i.Lc(2," Resume "),i.Ub()}}function m(t,n){if(1&t){const t=i.Wb();i.Vb(0,"ion-button",16),i.dc("click",function(){return i.Bc(t),i.hc(3).startTimer()}),i.Qb(1,"ion-icon",18),i.Lc(2," Start "),i.Ub()}}function b(t,n){if(1&t&&(i.Vb(0,"ion-item"),i.Jc(1,a,3,0,"ion-button",12),i.Jc(2,l,3,0,"ion-button",13),i.Jc(3,d,3,0,"ion-button",13),i.Jc(4,m,3,0,"ion-button",13),i.Ub()),2&t){const t=i.hc(2);i.Db(1),i.nc("ngIf",!t.timer.runTimer&&(t.timer.hasStarted||t.timer.hasFinished)||t.timer.hasFinished),i.Db(1),i.nc("ngIf",t.timer.runTimer&&t.timer.hasStarted&&!t.timer.hasFinished),i.Db(1),i.nc("ngIf",!t.timer.runTimer&&t.timer.hasStarted&&!t.timer.hasFinished),i.Db(1),i.nc("ngIf",!t.timer.hasStarted)}}function f(t,n){if(1&t&&(i.Vb(0,"ion-card"),i.Vb(1,"ion-card-header"),i.Vb(2,"div",1),i.Vb(3,"div",2),i.Vb(4,"div",3),i.Qb(5,"div",4),i.Ub(),i.Vb(6,"div",5),i.Qb(7,"div",4),i.Qb(8,"div",6),i.Ub(),i.Qb(9,"div",7),i.Ub(),i.Vb(10,"div",8),i.Vb(11,"div",9),i.Lc(12),i.Ub(),i.Ub(),i.Ub(),i.Jc(13,s,2,0,"ion-button",10),i.Ub(),i.Jc(14,b,5,4,"ion-item",0),i.Ub()),2&t){const t=i.hc();i.Db(4),i.Gc("transform",t.transform),i.Db(1),i.Gc("transform",t.transform),i.Db(2),i.Gc("transform",t.transform),i.Db(1),i.Gc("transform",t.fixTransform),i.Db(4),i.Mc(t.timer.displayTime),i.Db(1),i.nc("ngIf",!t.timeInSeconds||0==t.timeInSeconds),i.Db(1),i.nc("ngIf",t.timeInSeconds&&t.timeInSeconds>0)}}let g=(()=>{class t{constructor(t){this.sanitizer=t}ngOnInit(){this.initTimer()}hasFinished(){return this.timer.hasFinished}initProgressBar(){this.percent=100,this.increment=1.8;const t="rotate("+this.increment*this.percent+"deg)";this.transform=this.sanitizer.bypassSecurityTrustStyle(t),this.fixTransform=this.sanitizer.bypassSecurityTrustStyle(t)}initTimer(){this.initProgressBar(),this.timeInSeconds||(this.timeInSeconds=0),this.timer={seconds:this.timeInSeconds,runTimer:!1,hasStarted:!1,hasFinished:!1,secondsRemaining:this.timeInSeconds},this.timer.displayTime=this.getSecondsAsDigitalClock(this.timer.secondsRemaining)}startTimer(){this.timer.hasStarted=!0,this.timer.runTimer=!0,this.timerTick()}pauseTimer(){this.timer.runTimer=!1}resumeTimer(){this.startTimer()}timerTick(){setTimeout(()=>{if(!this.timer.runTimer)return;this.timer.secondsRemaining--,this.timer.displayTime=this.getSecondsAsDigitalClock(this.timer.secondsRemaining),this.percent=this.timer.secondsRemaining/this.timer.seconds*100,this.increment=1.8;const t="rotate("+this.increment*this.percent+"deg)";this.transform=this.sanitizer.bypassSecurityTrustStyle(t),this.fixTransform=this.sanitizer.bypassSecurityTrustStyle(t),this.timer.secondsRemaining>0?this.timerTick():this.timer.hasFinished=!0},1e3)}getSecondsAsDigitalClock(t){const n=parseInt(t.toString(),10),e=Math.floor(n/3600),i=Math.floor((n-3600*e)/60),o=n-3600*e-60*i;let r="",c="",s="";return e>0&&(r=e<10?"0"+e+":":e.toString()+":"),c=i<10?"0"+i:i.toString(),s=o<10?"0"+o:o.toString(),r+c+":"+s}}return t.\u0275fac=function(n){return new(n||t)(i.Pb(o.b))},t.\u0275cmp=i.Jb({type:t,selectors:[["app-timer-progress"]],inputs:{timeInSeconds:"timeInSeconds"},decls:1,vars:1,consts:[[4,"ngIf"],["data-progress","0",1,"radial-progress"],[1,"circle"],[1,"mask","full"],[1,"fill"],[1,"mask","half"],[1,"fill","fix"],[1,"shadow"],[1,"inset"],[1,"percentage"],["fill","clear","expand","block","class","timer-button",4,"ngIf"],["fill","clear","expand","block",1,"timer-button"],["fill","clear","class","large","color","danger","item-start","",3,"click",4,"ngIf"],["fill","clear","class","large","slot","end",3,"click",4,"ngIf"],["fill","clear","color","danger","item-start","",1,"large",3,"click"],["name","refresh"],["fill","clear","slot","end",1,"large",3,"click"],["name","pause"],["name","play"]],template:function(t,n){1&t&&i.Jc(0,f,15,11,"ion-card",0),2&t&&i.nc("ngIf",n.timer)},directives:[r.o,c.m,c.o,c.k,c.D,c.A],styles:[".radial-progress[_ngcontent-%COMP%]{margin:50px;width:150px;height:150px;background-color:#d6dadc;border-radius:50%}.radial-progress[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .fill[_ngcontent-%COMP%], .radial-progress[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .mask[_ngcontent-%COMP%], .radial-progress[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .shadow[_ngcontent-%COMP%]{width:150px;height:150px;position:absolute;border-radius:50%}.radial-progress[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .shadow[_ngcontent-%COMP%]{box-shadow:inset 6px 6px 10px rgba(0,0,0,.2)}.radial-progress[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .fill[_ngcontent-%COMP%], .radial-progress[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .mask[_ngcontent-%COMP%]{-webkit-backface-visibility:hidden;transition:transform 1s;border-radius:50%}.radial-progress[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .mask[_ngcontent-%COMP%]{clip:rect(0,150px,150px,75px)}.radial-progress[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .mask[_ngcontent-%COMP%]   .fill[_ngcontent-%COMP%]{clip:rect(0,75px,150px,0);background-color:tomato}.radial-progress[_ngcontent-%COMP%]   .inset[_ngcontent-%COMP%]{width:120px;height:120px;position:absolute;margin-left:15px;margin-top:15px;background-color:#fbfbfb;border-radius:50%;box-shadow:6px 6px 10px rgba(0,0,0,.2)}.radial-progress[_ngcontent-%COMP%]   .inset[_ngcontent-%COMP%]   .percentage[_ngcontent-%COMP%]{width:100%;position:absolute;top:49px;line-height:1;text-align:center;font-family:Lato,Helvetica Neue,Helvetica,Arial,sans-serif;color:tomato;font-weight:800;font-size:22px}"]}),t})()},c1lj:function(t,n,e){"use strict";e.d(n,"a",function(){return r}),e.d(n,"b",function(){return c});var i=e("fXoL");const o=["*"];let r=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=i.Jb({type:t,selectors:[["timeline"]],ngContentSelectors:o,decls:3,vars:0,consts:[[1,"timeline"]],template:function(t,n){1&t&&(i.mc(),i.Vb(0,"div",0),i.lc(1),i.Qb(2,"timeline-item"),i.Ub())},directives:function(){return[c]},styles:['[_nghost-%COMP%]     .timeline{margin:16px 0 0;padding:0;position:relative}[_nghost-%COMP%]     .timeline .card-item ion-card-content{-webkit-box-orient:vertical;display:-webkit-box;-webkit-line-clamp:3;overflow:hidden}[_nghost-%COMP%]     .timeline:before{content:"";position:absolute;top:0;bottom:0;width:5px;background:#32a7b5;border-left:2px dotted #999;left:8%;margin-left:-10px}[_nghost-%COMP%]     .timeline timeline-item{position:relative;display:block}[_nghost-%COMP%]     .timeline timeline-item .icon-timeline{width:15px;height:15px;font-size:1.4em;position:absolute;color:#fff;background:#32a7b5;border-radius:50%;padding:4px;text-align:center;left:8%;top:0;margin:10px 0 0 -18px}[_nghost-%COMP%]     .timeline timeline-item .icon-timeline:after{left:46px;content:" ";height:0;width:0;position:absolute;pointer-events:none;border:10px solid transparent;border-left-color:#afdcf8;top:10px}[_nghost-%COMP%]     .timeline timeline-item:last-child{width:100%}[_nghost-%COMP%]     .timeline timeline-item:last-child ion-icon{box-shadow:none}[_nghost-%COMP%]     .timeline timeline-item:last-child ion-icon:after{border-width:0}[_nghost-%COMP%]     .timeline .no-card{border:0;border-radius:0;box-shadow:none}[_nghost-%COMP%]     .timeline .no-card ion-card-content, [_nghost-%COMP%]     .timeline .no-card ion-card-header{padding:5px 5px 5px 0}']}),t})(),c=(()=>{class t{constructor(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=i.Jb({type:t,selectors:[["timeline-item"]],ngContentSelectors:o,decls:1,vars:0,template:function(t,n){1&t&&(i.mc(),i.lc(0))},encapsulation:2}),t})()}}]);