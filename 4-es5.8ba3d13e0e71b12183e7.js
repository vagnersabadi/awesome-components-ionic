!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function e(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+axM":function(t,i,r){"use strict";r.d(i,"a",function(){return s});var o=r("fXoL"),c=[[["",8,"fc-front"]],[["",8,"fc-back"]]],a=[".fc-front",".fc-back"],s=function(){var t=function(){function t(){n(this,t),this.flipped=!1}return e(t,[{key:"flip",value:function(){this.flipped=!this.flipped}},{key:"ngOnInit",value:function(){}}]),t}();return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Jb({type:t,selectors:[["app-flash-card-component"]],ngContentSelectors:a,decls:8,vars:2,consts:[[1,"fc-container",3,"click"],["fcContainer",""],[1,"front"],["front",""],[1,"back"],["back",""]],template:function(n,t){1&n&&(o.mc(c),o.Vb(0,"div",0,1),o.dc("click",function(){return t.flip()}),o.Vb(2,"div",2,3),o.lc(4),o.Ub(),o.Vb(5,"div",4,5),o.lc(7,1),o.Ub(),o.Ub()),2&n&&o.Hb("fc-back",t.flipped)},styles:[".fc-container[_ngcontent-%COMP%]{transition:.6s;transform-style:preserve-3d;position:relative}.fc-container.fc-back[_ngcontent-%COMP%]{transform:rotateY(180deg)}.fc-container[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%]{position:inherit;z-index:2;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform:rotateY(0deg)}.fc-container[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%], .fc-container[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%]{top:0;left:0;width:100%;padding:20px;background:#f2f2f2}.fc-container[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]{position:absolute;transform:rotateY(180deg)}.fc-back[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%], .fc-back[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%]{z-index:2}"]}),t}()},"+gjY":function(t,i,r){"use strict";r.d(i,"a",function(){return h});var o=r("fXoL"),c=r("ofXK"),a=r("TEn/");function s(n,t){if(1&n&&(o.Vb(0,"ion-button",3),o.Lc(1),o.Ub()),2&n){var e=o.hc(2);o.Db(1),o.Nc(" ",e.timer.displayTime," ")}}function l(n,t){1&n&&(o.Vb(0,"ion-button",4),o.Lc(1,"Timer set up incorrectly"),o.Ub())}function d(n,t){if(1&n){var e=o.Wb();o.Vb(0,"ion-button",7),o.dc("click",function(){return o.Bc(e),o.hc(3).initTimer()}),o.Qb(1,"ion-icon",8),o.Lc(2," Restart "),o.Ub()}}function f(n,t){if(1&n){var e=o.Wb();o.Vb(0,"ion-button",9),o.dc("click",function(){return o.Bc(e),o.hc(3).pauseTimer()}),o.Qb(1,"ion-icon",10),o.Lc(2," Pause "),o.Ub()}}function m(n,t){if(1&n){var e=o.Wb();o.Vb(0,"ion-button",9),o.dc("click",function(){return o.Bc(e),o.hc(3).resumeTimer()}),o.Qb(1,"ion-icon",11),o.Lc(2," Resume "),o.Ub()}}function u(n,t){if(1&n){var e=o.Wb();o.Vb(0,"ion-button",9),o.dc("click",function(){return o.Bc(e),o.hc(3).startTimer()}),o.Qb(1,"ion-icon",11),o.Lc(2," Start "),o.Ub()}}function b(n,t){if(1&n&&(o.Vb(0,"ion-item"),o.Jc(1,d,3,0,"ion-button",5),o.Jc(2,f,3,0,"ion-button",6),o.Jc(3,m,3,0,"ion-button",6),o.Jc(4,u,3,0,"ion-button",6),o.Ub()),2&n){var e=o.hc(2);o.Db(1),o.nc("ngIf",!e.timer.runTimer&&(e.timer.hasStarted||e.timer.hasFinished)||e.timer.hasFinished),o.Db(1),o.nc("ngIf",e.timer.runTimer&&e.timer.hasStarted&&!e.timer.hasFinished),o.Db(1),o.nc("ngIf",!e.timer.runTimer&&e.timer.hasStarted&&!e.timer.hasFinished),o.Db(1),o.nc("ngIf",!e.timer.hasStarted)}}function g(n,t){if(1&n&&(o.Vb(0,"ion-card"),o.Vb(1,"ion-card-header"),o.Jc(2,s,2,1,"ion-button",1),o.Jc(3,l,2,0,"ion-button",2),o.Ub(),o.Jc(4,b,5,4,"ion-item",0),o.Ub()),2&n){var e=o.hc();o.Db(2),o.nc("ngIf",e.timeInSeconds&&e.timeInSeconds>0),o.Db(1),o.nc("ngIf",!e.timeInSeconds||0==e.timeInSeconds),o.Db(1),o.nc("ngIf",e.timeInSeconds&&e.timeInSeconds>0)}}var h=function(){var t=function(){function t(){n(this,t)}return e(t,[{key:"ngOnInit",value:function(){this.initTimer()}},{key:"hasFinished",value:function(){return this.timer.hasFinished}},{key:"initTimer",value:function(){this.timeInSeconds||(this.timeInSeconds=0),this.timer={seconds:this.timeInSeconds,runTimer:!1,hasStarted:!1,hasFinished:!1,secondsRemaining:this.timeInSeconds},this.timer.displayTime=this.getSecondsAsDigitalClock(this.timer.secondsRemaining)}},{key:"startTimer",value:function(){this.timer.hasStarted=!0,this.timer.runTimer=!0,this.timerTick()}},{key:"pauseTimer",value:function(){this.timer.runTimer=!1}},{key:"resumeTimer",value:function(){this.startTimer()}},{key:"timerTick",value:function(){var n=this;setTimeout(function(){n.timer.runTimer&&(n.timer.secondsRemaining--,n.timer.displayTime=n.getSecondsAsDigitalClock(n.timer.secondsRemaining),n.timer.secondsRemaining>0?n.timerTick():n.timer.hasFinished=!0)},1e3)}},{key:"getSecondsAsDigitalClock",value:function(n){var t=parseInt(n.toString(),10),e=Math.floor(t/3600),i=Math.floor((t-3600*e)/60),r=t-3600*e-60*i;return(e<10?"0"+e:e.toString())+":"+(i<10?"0"+i:i.toString())+":"+(r<10?"0"+r:r.toString())}}]),t}();return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Jb({type:t,selectors:[["app-timer"]],inputs:{timeInSeconds:"timeInSeconds"},decls:1,vars:1,consts:[[4,"ngIf"],["size","large","expand","block","fill","clear","class","timer-button x-large",4,"ngIf"],["size","large","expand","block","fill","clear","class","timer-button",4,"ngIf"],["size","large","expand","block","fill","clear",1,"timer-button","x-large"],["size","large","expand","block","fill","clear",1,"timer-button"],["fill","clear","class","large","color","danger","slot","start",3,"click",4,"ngIf"],["fill","clear","class","large","slot","end",3,"click",4,"ngIf"],["fill","clear","color","danger","slot","start",1,"large",3,"click"],["name","refresh"],["fill","clear","slot","end",1,"large",3,"click"],["name","pause"],["name","play"]],template:function(n,t){1&n&&o.Jc(0,g,5,3,"ion-card",0),2&n&&o.nc("ngIf",t.timer)},directives:[c.o,a.m,a.o,a.k,a.D,a.A],styles:[""]}),t}()},NRl2:function(t,i,r){"use strict";r.d(i,"a",function(){return d});var o=r("fXoL"),c=r("jhN1"),a=r("TEn/"),s=["accordionContent"],l=["*"],d=function(){var t=function(){function t(e,i){n(this,t),this.renderer=e,this.sanitizer=i,this.headerColor="#F53D3D",this.textColor="#FFF",this.contentColor="#F9F9F9",this.hasMargin=!0}return e(t,[{key:"ngOnInit",value:function(){this.expanded||this.renderer.setStyle(this.elementView.nativeElement,"height","0px")}},{key:"toggleAccordion",value:function(){this.expanded=!this.expanded;var n=this.expanded?"100%":"0px";console.log(n),this.renderer.setStyle(this.elementView.nativeElement,"height",n)}},{key:"getDynamicColor",value:function(n){return this.sanitizer.bypassSecurityTrustStyle("--myvar:"+n)}}]),t}();return t.\u0275fac=function(n){return new(n||t)(o.Pb(o.H),o.Pb(c.b))},t.\u0275cmp=o.Jb({type:t,selectors:[["app-component-accordion-list"]],viewQuery:function(n,t){var e;(1&n&&o.Pc(s,3),2&n)&&(o.xc(e=o.ec())&&(t.elementView=e.first))},inputs:{headerColor:"headerColor",textColor:"textColor",contentColor:"contentColor",title:"title",hasMargin:"hasMargin",expanded:"expanded"},ngContentSelectors:l,decls:9,vars:9,consts:[[1,"accordion-list"],["lines","none",1,"accordion-header",3,"click"],["slot","start","name","ios-arrow-forward"],[1,"expand"],[1,"accordion-content"],["accordionContent",""]],template:function(n,t){1&n&&(o.mc(),o.Vb(0,"ion-list",0),o.Vb(1,"ion-item",1),o.dc("click",function(){return t.toggleAccordion()}),o.Qb(2,"ion-icon",2),o.Vb(3,"ion-label"),o.Lc(4),o.Ub(),o.Ub(),o.Vb(5,"div",3),o.Vb(6,"section",4,5),o.lc(8),o.Ub(),o.Ub(),o.Ub()),2&n&&(o.Db(1),o.Fc(t.getDynamicColor(t.headerColor)),o.Hb("active",t.expanded),o.Db(3),o.Nc(" ",t.title," "),o.Db(2),o.Gc("background",t.contentColor),o.Hb("active",t.expanded))},directives:[a.K,a.D,a.A,a.J],styles:[".accordion-header[_ngcontent-%COMP%]{color:#fff;--background:var(--myvar)}.accordion-header[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%]{margin-left:0!important}.accordion-header[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#fff;transition:all .25s ease-in;transform:rotate(0)}.active[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{transform:rotate(90deg)}.accordion-content[_ngcontent-%COMP%]{transition:.3s ease-in-out}.accordion-content.active[_ngcontent-%COMP%]{padding:.75rem}.label[_ngcontent-%COMP%]{margin:0}.expand[_ngcontent-%COMP%]{margin:-4px}"]}),t}()},OYR6:function(t,e,i){"use strict";i.d(e,"a",function(){return a}),i("+axM");var r=i("TEn/"),o=(i("NRl2"),i("SZA9"),i("+gjY"),i("ofXK")),c=(i("c1lj"),i("fXoL")),a=function(){var t=function t(){n(this,t)};return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=c.Nb({type:t}),t.\u0275inj=c.Mb({imports:[[r.nb,o.c]]}),t}()},SZA9:function(t,i,r){"use strict";r.d(i,"a",function(){return h});var o=r("fXoL"),c=r("jhN1"),a=r("ofXK"),s=r("TEn/");function l(n,t){1&n&&(o.Vb(0,"ion-button",11),o.Lc(1,"Timer set up incorrectly"),o.Ub())}function d(n,t){if(1&n){var e=o.Wb();o.Vb(0,"ion-button",14),o.dc("click",function(){return o.Bc(e),o.hc(3).initTimer()}),o.Qb(1,"ion-icon",15),o.Lc(2," Restart "),o.Ub()}}function f(n,t){if(1&n){var e=o.Wb();o.Vb(0,"ion-button",16),o.dc("click",function(){return o.Bc(e),o.hc(3).pauseTimer()}),o.Qb(1,"ion-icon",17),o.Lc(2," Pause "),o.Ub()}}function m(n,t){if(1&n){var e=o.Wb();o.Vb(0,"ion-button",16),o.dc("click",function(){return o.Bc(e),o.hc(3).resumeTimer()}),o.Qb(1,"ion-icon",18),o.Lc(2," Resume "),o.Ub()}}function u(n,t){if(1&n){var e=o.Wb();o.Vb(0,"ion-button",16),o.dc("click",function(){return o.Bc(e),o.hc(3).startTimer()}),o.Qb(1,"ion-icon",18),o.Lc(2," Start "),o.Ub()}}function b(n,t){if(1&n&&(o.Vb(0,"ion-item"),o.Jc(1,d,3,0,"ion-button",12),o.Jc(2,f,3,0,"ion-button",13),o.Jc(3,m,3,0,"ion-button",13),o.Jc(4,u,3,0,"ion-button",13),o.Ub()),2&n){var e=o.hc(2);o.Db(1),o.nc("ngIf",!e.timer.runTimer&&(e.timer.hasStarted||e.timer.hasFinished)||e.timer.hasFinished),o.Db(1),o.nc("ngIf",e.timer.runTimer&&e.timer.hasStarted&&!e.timer.hasFinished),o.Db(1),o.nc("ngIf",!e.timer.runTimer&&e.timer.hasStarted&&!e.timer.hasFinished),o.Db(1),o.nc("ngIf",!e.timer.hasStarted)}}function g(n,t){if(1&n&&(o.Vb(0,"ion-card"),o.Vb(1,"ion-card-header"),o.Vb(2,"div",1),o.Vb(3,"div",2),o.Vb(4,"div",3),o.Qb(5,"div",4),o.Ub(),o.Vb(6,"div",5),o.Qb(7,"div",4),o.Qb(8,"div",6),o.Ub(),o.Qb(9,"div",7),o.Ub(),o.Vb(10,"div",8),o.Vb(11,"div",9),o.Lc(12),o.Ub(),o.Ub(),o.Ub(),o.Jc(13,l,2,0,"ion-button",10),o.Ub(),o.Jc(14,b,5,4,"ion-item",0),o.Ub()),2&n){var e=o.hc();o.Db(4),o.Gc("transform",e.transform),o.Db(1),o.Gc("transform",e.transform),o.Db(2),o.Gc("transform",e.transform),o.Db(1),o.Gc("transform",e.fixTransform),o.Db(4),o.Mc(e.timer.displayTime),o.Db(1),o.nc("ngIf",!e.timeInSeconds||0==e.timeInSeconds),o.Db(1),o.nc("ngIf",e.timeInSeconds&&e.timeInSeconds>0)}}var h=function(){var t=function(){function t(e){n(this,t),this.sanitizer=e}return e(t,[{key:"ngOnInit",value:function(){this.initTimer()}},{key:"hasFinished",value:function(){return this.timer.hasFinished}},{key:"initProgressBar",value:function(){this.percent=100,this.increment=1.8;var n="rotate("+this.increment*this.percent+"deg)";this.transform=this.sanitizer.bypassSecurityTrustStyle(n),this.fixTransform=this.sanitizer.bypassSecurityTrustStyle(n)}},{key:"initTimer",value:function(){this.initProgressBar(),this.timeInSeconds||(this.timeInSeconds=0),this.timer={seconds:this.timeInSeconds,runTimer:!1,hasStarted:!1,hasFinished:!1,secondsRemaining:this.timeInSeconds},this.timer.displayTime=this.getSecondsAsDigitalClock(this.timer.secondsRemaining)}},{key:"startTimer",value:function(){this.timer.hasStarted=!0,this.timer.runTimer=!0,this.timerTick()}},{key:"pauseTimer",value:function(){this.timer.runTimer=!1}},{key:"resumeTimer",value:function(){this.startTimer()}},{key:"timerTick",value:function(){var n=this;setTimeout(function(){if(n.timer.runTimer){n.timer.secondsRemaining--,n.timer.displayTime=n.getSecondsAsDigitalClock(n.timer.secondsRemaining),n.percent=n.timer.secondsRemaining/n.timer.seconds*100,n.increment=1.8;var t="rotate("+n.increment*n.percent+"deg)";n.transform=n.sanitizer.bypassSecurityTrustStyle(t),n.fixTransform=n.sanitizer.bypassSecurityTrustStyle(t),n.timer.secondsRemaining>0?n.timerTick():n.timer.hasFinished=!0}},1e3)}},{key:"getSecondsAsDigitalClock",value:function(n){var t=parseInt(n.toString(),10),e=Math.floor(t/3600),i=Math.floor((t-3600*e)/60),r=t-3600*e-60*i,o="";return e>0&&(o=e<10?"0"+e+":":e.toString()+":"),o+(i<10?"0"+i:i.toString())+":"+(r<10?"0"+r:r.toString())}}]),t}();return t.\u0275fac=function(n){return new(n||t)(o.Pb(c.b))},t.\u0275cmp=o.Jb({type:t,selectors:[["app-timer-progress"]],inputs:{timeInSeconds:"timeInSeconds"},decls:1,vars:1,consts:[[4,"ngIf"],["data-progress","0",1,"radial-progress"],[1,"circle"],[1,"mask","full"],[1,"fill"],[1,"mask","half"],[1,"fill","fix"],[1,"shadow"],[1,"inset"],[1,"percentage"],["fill","clear","expand","block","class","timer-button",4,"ngIf"],["fill","clear","expand","block",1,"timer-button"],["fill","clear","class","large","color","danger","item-start","",3,"click",4,"ngIf"],["fill","clear","class","large","slot","end",3,"click",4,"ngIf"],["fill","clear","color","danger","item-start","",1,"large",3,"click"],["name","refresh"],["fill","clear","slot","end",1,"large",3,"click"],["name","pause"],["name","play"]],template:function(n,t){1&n&&o.Jc(0,g,15,11,"ion-card",0),2&n&&o.nc("ngIf",t.timer)},directives:[a.o,s.m,s.o,s.k,s.D,s.A],styles:[".radial-progress[_ngcontent-%COMP%]{margin:50px;width:150px;height:150px;background-color:#d6dadc;border-radius:50%}.radial-progress[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .fill[_ngcontent-%COMP%], .radial-progress[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .mask[_ngcontent-%COMP%], .radial-progress[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .shadow[_ngcontent-%COMP%]{width:150px;height:150px;position:absolute;border-radius:50%}.radial-progress[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .shadow[_ngcontent-%COMP%]{box-shadow:inset 6px 6px 10px rgba(0,0,0,.2)}.radial-progress[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .fill[_ngcontent-%COMP%], .radial-progress[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .mask[_ngcontent-%COMP%]{-webkit-backface-visibility:hidden;transition:transform 1s;border-radius:50%}.radial-progress[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .mask[_ngcontent-%COMP%]{clip:rect(0,150px,150px,75px)}.radial-progress[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .mask[_ngcontent-%COMP%]   .fill[_ngcontent-%COMP%]{clip:rect(0,75px,150px,0);background-color:tomato}.radial-progress[_ngcontent-%COMP%]   .inset[_ngcontent-%COMP%]{width:120px;height:120px;position:absolute;margin-left:15px;margin-top:15px;background-color:#fbfbfb;border-radius:50%;box-shadow:6px 6px 10px rgba(0,0,0,.2)}.radial-progress[_ngcontent-%COMP%]   .inset[_ngcontent-%COMP%]   .percentage[_ngcontent-%COMP%]{width:100%;position:absolute;top:49px;line-height:1;text-align:center;font-family:Lato,Helvetica Neue,Helvetica,Arial,sans-serif;color:tomato;font-weight:800;font-size:22px}"]}),t}()},c1lj:function(t,i,r){"use strict";r.d(i,"a",function(){return a}),r.d(i,"b",function(){return s});var o=r("fXoL"),c=["*"],a=function(){var t=function(){function t(){n(this,t)}return e(t,[{key:"ngOnInit",value:function(){}}]),t}();return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Jb({type:t,selectors:[["timeline"]],ngContentSelectors:c,decls:3,vars:0,consts:[[1,"timeline"]],template:function(n,t){1&n&&(o.mc(),o.Vb(0,"div",0),o.lc(1),o.Qb(2,"timeline-item"),o.Ub())},directives:function(){return[s]},styles:['[_nghost-%COMP%]     .timeline{margin:16px 0 0;padding:0;position:relative}[_nghost-%COMP%]     .timeline .card-item ion-card-content{-webkit-box-orient:vertical;display:-webkit-box;-webkit-line-clamp:3;overflow:hidden}[_nghost-%COMP%]     .timeline:before{content:"";position:absolute;top:0;bottom:0;width:5px;background:#32a7b5;border-left:2px dotted #999;left:8%;margin-left:-10px}[_nghost-%COMP%]     .timeline timeline-item{position:relative;display:block}[_nghost-%COMP%]     .timeline timeline-item .icon-timeline{width:15px;height:15px;font-size:1.4em;position:absolute;color:#fff;background:#32a7b5;border-radius:50%;padding:4px;text-align:center;left:8%;top:0;margin:10px 0 0 -18px}[_nghost-%COMP%]     .timeline timeline-item .icon-timeline:after{left:46px;content:" ";height:0;width:0;position:absolute;pointer-events:none;border:10px solid transparent;border-left-color:#afdcf8;top:10px}[_nghost-%COMP%]     .timeline timeline-item:last-child{width:100%}[_nghost-%COMP%]     .timeline timeline-item:last-child ion-icon{box-shadow:none}[_nghost-%COMP%]     .timeline timeline-item:last-child ion-icon:after{border-width:0}[_nghost-%COMP%]     .timeline .no-card{border:0;border-radius:0;box-shadow:none}[_nghost-%COMP%]     .timeline .no-card ion-card-content, [_nghost-%COMP%]     .timeline .no-card ion-card-header{padding:5px 5px 5px 0}']}),t}(),s=function(){var t=function t(){n(this,t)};return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Jb({type:t,selectors:[["timeline-item"]],ngContentSelectors:c,decls:1,vars:0,template:function(n,t){1&n&&(o.mc(),o.lc(0))},encapsulation:2}),t}()}}])}();