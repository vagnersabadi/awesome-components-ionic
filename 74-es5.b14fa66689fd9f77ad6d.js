!function(){function i(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}function t(i,t){for(var n=0;n<t.length;n++){var e=t[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(i,e.key,e)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{YXky:function(n,e,o){"use strict";o.r(e),o.d(e,"SlidingItemPageModule",function(){return p});var c=o("ofXK"),a=o("3Pt+"),l=o("tyNb"),r=o("TEn/"),s=o("fXoL");function b(i,t){if(1&i){var n=s.Wb();s.Vb(0,"ion-item-sliding"),s.Vb(1,"ion-item"),s.Vb(2,"ion-thumbnail",0),s.Qb(3,"img",3),s.Ub(),s.Vb(4,"ion-label"),s.Vb(5,"h2"),s.Lc(6),s.Ub(),s.Vb(7,"p"),s.Lc(8),s.Ub(),s.Ub(),s.Ub(),s.Vb(9,"ion-item-options",4),s.Vb(10,"ion-item-option",5),s.dc("click",function(){s.Bc(n);var i=t.$implicit;return s.hc().viewComments(i)}),s.Qb(11,"ion-icon",6),s.Lc(12," Comments "),s.Ub(),s.Vb(13,"ion-item-option",7),s.dc("click",function(){s.Bc(n);var i=t.$implicit;return s.hc().viewPlayers(i)}),s.Qb(14,"ion-icon",8),s.Lc(15," Players "),s.Ub(),s.Vb(16,"ion-item-option",9),s.dc("click",function(){s.Bc(n);var i=t.$implicit;return s.hc().delete(i)}),s.Qb(17,"ion-icon",10),s.Lc(18," Delete "),s.Ub(),s.Ub(),s.Ub()}if(2&i){var e=t.$implicit;s.Db(3),s.nc("src",e.imageUrl,s.Dc),s.Db(3),s.Mc(e.title),s.Db(2),s.Oc("",e.place," \u2022 ",e.date,"")}}var u,m,f=[{path:"",component:(u=function(){function n(){i(this,n),this.items=[{imageUrl:"assets/yannbf/img/lists/stadium.jpg",title:"First Cup",place:"Madison Square",date:"05/06/2016"},{imageUrl:"assets/yannbf/img/lists/stadium-3.png",title:"Season",place:"Hooli",date:"15/03/2016"},{imageUrl:"assets/yannbf/img/lists/stadium-2.jpg",title:"2nd Season",place:"Castel\xe3o",date:"05/12/2015"}]}var e,o,c;return e=n,(o=[{key:"ngOnInit",value:function(){}},{key:"delete",value:function(i){alert("Deleted "+i.title)}},{key:"viewComments",value:function(i){alert("Viewing comments of "+i.title)}},{key:"viewPlayers",value:function(i){alert("Viewing players of "+i.title)}}])&&t(e.prototype,o),c&&t(e,c),n}(),u.\u0275fac=function(i){return new(i||u)},u.\u0275cmp=s.Jb({type:u,selectors:[["app-sliding-item"]],decls:9,vars:1,consts:[["slot","start"],["defaultHref","/"],[4,"ngFor","ngForOf"],[3,"src"],["side","end"],["color","secondary",3,"click"],["slot","top","name","chatbubbles"],["color","primary",3,"click"],["slot","top","name","contacts"],["color","danger",3,"click"],["slot","top","name","trash"]],template:function(i,t){1&i&&(s.Vb(0,"ion-header"),s.Vb(1,"ion-toolbar"),s.Vb(2,"ion-buttons",0),s.Qb(3,"ion-back-button",1),s.Ub(),s.Vb(4,"ion-title"),s.Lc(5,"Sliding Item"),s.Ub(),s.Ub(),s.Ub(),s.Vb(6,"ion-content"),s.Vb(7,"ion-list"),s.Jc(8,b,19,4,"ion-item-sliding",2),s.Ub(),s.Ub()),2&i&&(s.Db(8),s.nc("ngForOf",t.items))},directives:[r.z,r.mb,r.l,r.h,r.i,r.kb,r.u,r.K,c.n,r.I,r.D,r.jb,r.J,r.H,r.G,r.A],styles:[""]}),u)}],p=((m=function t(){i(this,t)}).\u0275fac=function(i){return new(i||m)},m.\u0275mod=s.Nb({type:m}),m.\u0275inj=s.Mb({imports:[[c.c,a.h,r.nb,l.j.forChild(f)]]}),m)}}])}();