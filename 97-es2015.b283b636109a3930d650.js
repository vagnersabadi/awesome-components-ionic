(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{hBlO:function(n,o,t){"use strict";t.r(o),t.d(o,"PopupMenuPageModule",function(){return C});var e=t("ofXK"),i=t("3Pt+"),c=t("tyNb"),p=t("TEn/"),l=t("mrSG"),a=t("fXoL");const u=function(n){return{out:n}},r=function(n){return{in:n}};let s=(()=>{class n{constructor(n){this.modalCtrl=n,this.openMenu=!1}ngOnInit(){}dismiss(){this.modalCtrl.dismiss()}togglePopupMenu(){return this.openMenu=!this.openMenu}goToAccount(){alert("Account clicked."),this.togglePopupMenu()}goToHome(){alert("Home clicked."),this.togglePopupMenu()}goToCups(){alert("Cups clicked."),this.togglePopupMenu()}goToLeaderboard(){alert("Leaderboard clicked."),this.togglePopupMenu()}goToHelp(){alert("Help clicked."),this.togglePopupMenu()}goToShop(){alert("Shop clicked."),this.togglePopupMenu()}}return n.\u0275fac=function(o){return new(o||n)(a.Pb(p.rb))},n.\u0275cmp=a.Jb({type:n,selectors:[["app-popup-menu-one"]],decls:46,vars:9,consts:[["slot","start"],["fill","clear",3,"click"],["name","arrow-back","slot","icon-only"],[1,"ion-padding"],[1,"popup-menu"],[1,"popup-menu-toggle",3,"ngClass","click"],["name","home"],[1,"popup-menu-overlay",3,"ngClass","click"],[1,"popup-menu-panel",3,"ngClass"],[1,"ion-no-padding"],["align-items-center",""],["size","4",1,"ion-no-padding"],[3,"click"],["name","trophy"],["name","podium"],["name","help"],["name","person"],["name","cart"]],template:function(n,o){1&n&&(a.Vb(0,"ion-header"),a.Vb(1,"ion-toolbar"),a.Vb(2,"ion-buttons",0),a.Vb(3,"ion-button",1),a.dc("click",function(){return o.modalCtrl.dismiss()}),a.Qb(4,"ion-icon",2),a.Ub(),a.Ub(),a.Vb(5,"ion-title"),a.Lc(6,"Popup Menu One"),a.Ub(),a.Ub(),a.Ub(),a.Vb(7,"ion-content",3),a.Vb(8,"div",4),a.Vb(9,"div",5),a.dc("click",function(){return o.togglePopupMenu()}),a.Qb(10,"ion-icon",6),a.Ub(),a.Vb(11,"div",7),a.dc("click",function(){return o.togglePopupMenu()}),a.Ub(),a.Vb(12,"div",8),a.Vb(13,"ion-grid",9),a.Vb(14,"ion-row",10),a.Vb(15,"ion-col",11),a.Vb(16,"ion-tab-button",12),a.dc("click",function(){return o.goToHome()}),a.Qb(17,"ion-icon",6),a.Vb(18,"ion-label"),a.Lc(19,"HOME"),a.Ub(),a.Ub(),a.Ub(),a.Vb(20,"ion-col",11),a.Vb(21,"ion-tab-button",12),a.dc("click",function(){return o.goToCups()}),a.Qb(22,"ion-icon",13),a.Vb(23,"ion-label"),a.Lc(24,"CUPS"),a.Ub(),a.Ub(),a.Ub(),a.Vb(25,"ion-col",11),a.Vb(26,"ion-tab-button",12),a.dc("click",function(){return o.goToLeaderboard()}),a.Qb(27,"ion-icon",14),a.Vb(28,"ion-label"),a.Lc(29,"LEADERBOARD"),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Vb(30,"ion-row",10),a.Vb(31,"ion-col",11),a.Vb(32,"ion-tab-button",12),a.dc("click",function(){return o.goToHelp()}),a.Qb(33,"ion-icon",15),a.Vb(34,"ion-label"),a.Lc(35,"HELP"),a.Ub(),a.Ub(),a.Ub(),a.Vb(36,"ion-col",11),a.Vb(37,"ion-tab-button",12),a.dc("click",function(){return o.goToAccount()}),a.Qb(38,"ion-icon",16),a.Vb(39,"ion-label"),a.Lc(40,"ACCOUNT"),a.Ub(),a.Ub(),a.Ub(),a.Vb(41,"ion-col",11),a.Vb(42,"ion-tab-button",12),a.dc("click",function(){return o.goToShop()}),a.Qb(43,"ion-icon",17),a.Vb(44,"ion-label"),a.Lc(45,"SHOP"),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub()),2&n&&(a.Db(9),a.nc("ngClass",a.sc(3,u,o.openMenu)),a.Db(2),a.nc("ngClass",a.sc(5,r,o.openMenu)),a.Db(1),a.nc("ngClass",a.sc(7,r,o.openMenu)))},directives:[p.z,p.mb,p.l,p.k,p.A,p.kb,p.u,e.m,p.y,p.V,p.t,p.fb,p.J],styles:[".popup-menu[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#fff;font-size:2.5em}.popup-menu[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:#fff;font-size:.7em}.popup-menu-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;bottom:0;z-index:6;opacity:0;visibility:hidden;transition:all .15s ease-in-out;background-image:linear-gradient(rgba(68,68,68,.5),rgba(68,68,68,.25))}.popup-menu-overlay.in[_ngcontent-%COMP%]{opacity:1;visibility:visible}.popup-menu-toggle[_ngcontent-%COMP%]{position:fixed;bottom:20px;left:50%;margin-left:-20px;background-color:#886aea;border:1px solid #5227e1;z-index:7}.popup-menu-toggle[_ngcontent-%COMP%], .popup-menu-toggle[_ngcontent-%COMP%]:before{width:40px;height:40px;transition:all .35s ease-in-out}.popup-menu-toggle[_ngcontent-%COMP%]:before{position:absolute;font-family:Ionicons;top:0;left:0;line-height:40px;text-align:center;font-size:28px;color:#fff;opacity:1;transform-origin:100% 100%;transform:scale(1)}.popup-menu-toggle.out[_ngcontent-%COMP%]{opacity:0;visibility:hidden}.popup-menu-toggle.out[_ngcontent-%COMP%], .popup-menu-toggle.out[_ngcontent-%COMP%]:before{transform:scale(0);transition:all .15s ease-in-out}.popup-menu-panel[_ngcontent-%COMP%]{position:fixed;width:300px;height:110px;bottom:20px;left:50%;margin-left:-150px;background-color:#886aea;z-index:8;transition:all .35s ease-in-out;transition-delay:.15s;transform-origin:50% 100%;transform:scale(0);display:-moz-flex;display:flex;flex-wrap:wrap}.popup-menu-panel.in[_ngcontent-%COMP%]{transform:scale(1);transition-delay:0s}"]}),n})();const b=function(n){return{out:n}},g=function(n){return{in:n}};let d=(()=>{class n{constructor(n){this.modalCtrl=n,this.openMenu=!1}ngOnInit(){}togglePopupMenu(){return this.openMenu=!this.openMenu}goToAccount(){alert("Account clicked."),this.togglePopupMenu()}goToHome(){alert("Home clicked."),this.togglePopupMenu()}goToCups(){alert("Cups clicked."),this.togglePopupMenu()}goToLeaderboard(){alert("Leaderboard clicked."),this.togglePopupMenu()}goToHelp(){alert("Help clicked."),this.togglePopupMenu()}goToShop(){alert("Shop clicked."),this.togglePopupMenu()}}return n.\u0275fac=function(o){return new(o||n)(a.Pb(p.rb))},n.\u0275cmp=a.Jb({type:n,selectors:[["app-popup-menu-two"]],decls:45,vars:9,consts:[["slot","start"],["fill","clear",3,"click"],["name","arrow-back","slot","icon-only"],[1,"ion-padding"],[1,"popup-menu"],[1,"popup-menu-toggle",3,"ngClass","click"],["name","apps"],[1,"popup-menu-overlay",3,"ngClass","click"],[1,"popup-menu-panel",3,"ngClass"],[1,"popup-menu-item",3,"click"],["name","home"],["name","trophy"],["name","podium"],["name","help"],["name","person"],["name","cart"]],template:function(n,o){1&n&&(a.Vb(0,"ion-header"),a.Vb(1,"ion-toolbar"),a.Vb(2,"ion-buttons",0),a.Vb(3,"ion-button",1),a.dc("click",function(){return o.modalCtrl.dismiss()}),a.Qb(4,"ion-icon",2),a.Ub(),a.Ub(),a.Vb(5,"ion-title"),a.Lc(6,"Popup Menu Two"),a.Ub(),a.Ub(),a.Ub(),a.Vb(7,"ion-content",3),a.Vb(8,"div",4),a.Vb(9,"div",5),a.dc("click",function(){return o.togglePopupMenu()}),a.Qb(10,"ion-icon",6),a.Ub(),a.Vb(11,"div",7),a.dc("click",function(){return o.togglePopupMenu()}),a.Ub(),a.Vb(12,"div",8),a.Vb(13,"div",9),a.dc("click",function(){return o.goToHome()}),a.Qb(14,"ion-icon",10),a.Vb(15,"ion-badge"),a.Lc(16,"25"),a.Ub(),a.Vb(17,"span"),a.Lc(18,"HOME"),a.Ub(),a.Ub(),a.Vb(19,"div",9),a.dc("click",function(){return o.goToCups()}),a.Qb(20,"ion-icon",11),a.Vb(21,"span"),a.Lc(22,"CUPS"),a.Ub(),a.Ub(),a.Vb(23,"div",9),a.dc("click",function(){return o.goToLeaderboard()}),a.Qb(24,"ion-icon",12),a.Vb(25,"ion-badge"),a.Lc(26,"10"),a.Ub(),a.Vb(27,"span"),a.Lc(28,"LEADERBOARD"),a.Ub(),a.Ub(),a.Vb(29,"div",9),a.dc("click",function(){return o.goToHelp()}),a.Qb(30,"ion-icon",13),a.Vb(31,"span"),a.Lc(32,"HELP"),a.Ub(),a.Ub(),a.Vb(33,"div",9),a.dc("click",function(){return o.goToAccount()}),a.Qb(34,"ion-icon",14),a.Vb(35,"ion-badge"),a.Lc(36,"5"),a.Ub(),a.Vb(37,"span"),a.Lc(38,"ACCOUNT"),a.Ub(),a.Ub(),a.Vb(39,"div",9),a.dc("click",function(){return o.goToShop()}),a.Qb(40,"ion-icon",15),a.Vb(41,"ion-badge"),a.Lc(42,"25"),a.Ub(),a.Vb(43,"span"),a.Lc(44,"SHOP"),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub()),2&n&&(a.Db(9),a.nc("ngClass",a.sc(3,b,o.openMenu)),a.Db(2),a.nc("ngClass",a.sc(5,g,o.openMenu)),a.Db(1),a.nc("ngClass",a.sc(7,g,o.openMenu)))},directives:[p.z,p.mb,p.l,p.k,p.A,p.kb,p.u,e.m,p.j],styles:["ion-badge[_ngcontent-%COMP%]{right:calc(50% - 30px)!important;top:-5px;position:absolute;right:4%;padding:1px 6px;height:auto;font-size:12px;line-height:16px}.popup-menu-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;bottom:0;z-index:100;opacity:0;visibility:hidden;transition:all .15s ease-in-out;background-image:linear-gradient(rgba(68,68,68,.5),rgba(68,68,68,.25))}.popup-menu-overlay.in[_ngcontent-%COMP%]{opacity:1;visibility:visible}.popup-menu-toggle[_ngcontent-%COMP%]{position:fixed;width:40px;height:40px;bottom:10px;left:50%;margin-left:-20px;background-color:#0f9d58;border-radius:50%;z-index:101;transition:all .25s ease-in-out}.popup-menu-toggle[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{text-align:center;color:#fff;font-size:2.5em}.popup-menu-toggle[_ngcontent-%COMP%]:before{position:absolute;font-family:Ionicons;width:40px;height:40px;top:0;left:0;line-height:40px;text-align:center;font-size:28px;color:#fff;opacity:1;transition:all .25s ease-in-out;transform-origin:100% 100%;transform:scale(1)}.popup-menu-toggle.out[_ngcontent-%COMP%]{opacity:0;visibility:hidden}.popup-menu-toggle.out[_ngcontent-%COMP%], .popup-menu-toggle.out[_ngcontent-%COMP%]:before{transform:scale(0);transition:all .15s ease-in-out}.popup-menu-panel[_ngcontent-%COMP%]{position:fixed;width:300px;height:180px;border-radius:5%;bottom:20px;left:50%;margin-left:-150px;padding:0 5px;background-color:#0f9d58;z-index:102;transition:all .25s ease-in-out;transition-delay:.15s;transform-origin:50% 100%;transform:scale(0);display:-moz-flex;display:flex;flex-wrap:wrap}.popup-menu-panel[_ngcontent-%COMP%]   .popup-menu-item[_ngcontent-%COMP%]{margin:auto;-moz-flex:1 0 30%;flex:1 0 30%;display:-moz-flex;display:flex;-moz-flex-direction:column;flex-direction:column;transform:scale(0);opacity:0;transition:all .25s ease-in-out}.popup-menu-panel[_ngcontent-%COMP%]   .popup-menu-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{text-align:center;color:#fff;font-size:2.5em;margin-left:29px}.popup-menu-panel[_ngcontent-%COMP%]   .popup-menu-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin:auto 0 5px;padding:0;font-size:30px;line-height:30px;text-align:center;color:#fff}.popup-menu-panel[_ngcontent-%COMP%]   .popup-menu-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:0;margin:0 0 auto;color:#fff;text-align:center;font-size:11px;text-transform:uppercase;font-weight:700;line-height:11px}.popup-menu-panel[_ngcontent-%COMP%]   .popup-menu-item[_ngcontent-%COMP%]:active   i[_ngcontent-%COMP%], .popup-menu-panel[_ngcontent-%COMP%]   .popup-menu-item[_ngcontent-%COMP%]:active   span[_ngcontent-%COMP%]{color:#dd4135;transition:all .15s}.popup-menu-panel.in[_ngcontent-%COMP%]{transform:scale(1);transition-delay:0s}.popup-menu-panel.in[_ngcontent-%COMP%]   .popup-menu-item[_ngcontent-%COMP%]{transform:scale(1);opacity:1;transition-delay:.15s}"]}),n})();function m(n,o){if(1&n){const n=a.Wb();a.Vb(0,"ion-item",3),a.dc("click",function(t){a.Bc(n);const e=o.$implicit;return a.hc().itemTapped(t,e)}),a.Lc(1),a.Ub()}if(2&n){const n=o.$implicit;a.Db(1),a.Nc(" ",n.title," ")}}let f=(()=>{class n{constructor(n){this.modalCtrl=n,this.items=[{title:"Type One",page:s},{title:"Type Two",page:d}]}ngOnInit(){}itemTapped(n,o){return Object(l.a)(this,void 0,void 0,function*(){const n=yield this.modalCtrl.create({component:o.page});yield n.present()})}}return n.\u0275fac=function(o){return new(o||n)(a.Pb(p.rb))},n.\u0275cmp=a.Jb({type:n,selectors:[["app-popup-menu"]],decls:9,vars:1,consts:[["slot","start"],["defaultHref","/"],[3,"click",4,"ngFor","ngForOf"],[3,"click"]],template:function(n,o){1&n&&(a.Vb(0,"ion-header"),a.Vb(1,"ion-toolbar"),a.Vb(2,"ion-buttons",0),a.Qb(3,"ion-back-button",1),a.Ub(),a.Vb(4,"ion-title"),a.Lc(5,"Popup Menu"),a.Ub(),a.Ub(),a.Ub(),a.Vb(6,"ion-content"),a.Vb(7,"ion-list"),a.Jc(8,m,2,1,"ion-item",2),a.Ub(),a.Ub()),2&n&&(a.Db(8),a.nc("ngForOf",o.items))},directives:[p.z,p.mb,p.l,p.h,p.i,p.kb,p.u,p.K,e.n,p.D],styles:[""]}),n})(),M=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=a.Nb({type:n}),n.\u0275inj=a.Mb({imports:[[e.c,i.h,p.nb]]}),n})(),h=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=a.Nb({type:n}),n.\u0275inj=a.Mb({imports:[[e.c,i.h,p.nb]]}),n})();const P=[{path:"",component:f}];let C=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=a.Nb({type:n}),n.\u0275inj=a.Mb({imports:[[e.c,i.h,p.nb,c.j.forChild(P),h,M]]}),n})()}}]);