!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var o=0;o<n.length;o++){var t=n[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"c/l9":function(o,t,i){"use strict";i.r(t),i.d(t,"FabPageModule",function(){return v});var l=i("ofXK"),c=i("3Pt+"),b=i("TEn/"),r=i("tyNb"),a=i("fXoL"),d=i("Kxyh");function s(e,n){1&e&&(a.Vb(0,"ion-label",20),a.Lc(1,"Primary Action"),a.Ub())}function u(e,n){1&e&&(a.Vb(0,"ion-footer"),a.Qb(1,"ion-toolbar",21),a.Ub())}var g,f,h,p=[{path:"",component:(g=function(){function o(){e(this,o),this.pulse=!1,this.icon="color-wand",this.vertical="bottom",this.horizontal="end",this.extended=!0,this.visible=!0,this.scroll=!0,this.mode="normal"}var t,i,l;return t=o,(i=[{key:"ngOnInit",value:function(){}}])&&n(t.prototype,i),l&&n(t,l),o}(),g.\u0275fac=function(e){return new(e||g)},g.\u0275cmp=a.Jb({type:g,selectors:[["app-fab"]],decls:58,vars:21,consts:[["slot","start"],["defaultHref","/fivethree"],["placeholder","Vertical Align",3,"ngModel","ngModelChange"],["value","top"],["value","middle"],["value","bottom"],["placeholder","Horizontal Align",3,"ngModel","ngModelChange"],["value","start"],["value","center"],["value","end"],["placeholder","Mode",3,"ngModel","ngModelChange"],["value","edge"],["value","normal"],["slot","end",3,"checked","ngModel","ngModelChange"],[1,"scroll"],["slot","fixed","checkmark","true","spinColor","light",3,"mode","visible","scroll","pulse","horizontal","vertical","color","fivComplete","click"],["fab",""],["color","light","slot","icon-only",3,"name"],["color","light",4,"ngIf"],[4,"ngIf"],["color","light"],["color","dark"]],template:function(e,n){if(1&e){var o=a.Wb();a.Vb(0,"ion-header"),a.Vb(1,"ion-toolbar"),a.Vb(2,"ion-buttons",0),a.Qb(3,"ion-back-button",1),a.Ub(),a.Vb(4,"ion-title"),a.Lc(5,"Fab"),a.Ub(),a.Ub(),a.Ub(),a.Vb(6,"ion-content"),a.Vb(7,"ion-item-group"),a.Vb(8,"ion-item"),a.Vb(9,"ion-label"),a.Lc(10,"Vertical"),a.Ub(),a.Vb(11,"ion-select",2),a.dc("ngModelChange",function(e){return n.vertical=e}),a.Vb(12,"ion-select-option",3),a.Lc(13,"top"),a.Ub(),a.Vb(14,"ion-select-option",4),a.Lc(15,"middle"),a.Ub(),a.Vb(16,"ion-select-option",5),a.Lc(17,"bottom"),a.Ub(),a.Ub(),a.Ub(),a.Vb(18,"ion-item"),a.Vb(19,"ion-label"),a.Lc(20,"Horizontal"),a.Ub(),a.Vb(21,"ion-select",6),a.dc("ngModelChange",function(e){return n.horizontal=e}),a.Vb(22,"ion-select-option",7),a.Lc(23,"start"),a.Ub(),a.Vb(24,"ion-select-option",8),a.Lc(25,"center"),a.Ub(),a.Vb(26,"ion-select-option",9),a.Lc(27,"end"),a.Ub(),a.Ub(),a.Ub(),a.Vb(28,"ion-item"),a.Vb(29,"ion-label"),a.Lc(30,"Mode"),a.Ub(),a.Vb(31,"ion-select",10),a.dc("ngModelChange",function(e){return n.mode=e}),a.Vb(32,"ion-select-option",11),a.Lc(33,"edge"),a.Ub(),a.Vb(34,"ion-select-option",12),a.Lc(35,"normal"),a.Ub(),a.Ub(),a.Ub(),a.Vb(36,"ion-item"),a.Vb(37,"ion-label"),a.Lc(38,"Scroll"),a.Ub(),a.Vb(39,"ion-toggle",13),a.dc("ngModelChange",function(e){return n.scroll=e}),a.Ub(),a.Ub(),a.Vb(40,"ion-item"),a.Vb(41,"ion-label"),a.Lc(42,"Pulse"),a.Ub(),a.Vb(43,"ion-toggle",13),a.dc("ngModelChange",function(e){return n.pulse=e}),a.Ub(),a.Ub(),a.Vb(44,"ion-item"),a.Vb(45,"ion-label"),a.Lc(46,"Extended"),a.Ub(),a.Vb(47,"ion-toggle",13),a.dc("ngModelChange",function(e){return n.extended=e}),a.Ub(),a.Ub(),a.Vb(48,"ion-item"),a.Vb(49,"ion-label"),a.Lc(50,"Visible"),a.Ub(),a.Vb(51,"ion-toggle",13),a.dc("ngModelChange",function(e){return n.visible=e}),a.Ub(),a.Ub(),a.Qb(52,"div",14),a.Ub(),a.Vb(53,"fiv-fab",15,16),a.dc("fivComplete",function(){return n.icon="checkmark"})("click",function(){a.Bc(o);var e=a.yc(54);return e.loading?e.complete():"checkmark"===n.icon?n.icon="color-wand":e.load()}),a.Qb(55,"fiv-icon",17),a.Jc(56,s,2,0,"ion-label",18),a.Ub(),a.Ub(),a.Jc(57,u,2,0,"ion-footer",19)}2&e&&(a.Db(11),a.nc("ngModel",n.vertical),a.Db(10),a.nc("ngModel",n.horizontal),a.Db(10),a.nc("ngModel",n.mode),a.Db(8),a.nc("checked",n.scroll)("ngModel",n.scroll),a.Db(4),a.nc("checked",n.pulse)("ngModel",n.pulse),a.Db(4),a.nc("checked",n.extended)("ngModel",n.extended),a.Db(4),a.nc("checked",n.visible)("ngModel",n.visible),a.Db(2),a.nc("mode",n.mode)("visible",n.visible)("scroll",n.scroll)("pulse",n.pulse)("horizontal",n.horizontal)("vertical",n.vertical)("color","primary"),a.Db(2),a.nc("name",n.icon),a.Db(1),a.nc("ngIf",n.extended),a.Db(1),a.nc("ngIf","edge"===n.mode&&"bottom"===n.vertical))},directives:[b.z,b.mb,b.l,b.h,b.i,b.kb,b.u,b.F,b.D,b.J,b.Z,b.xb,c.l,c.o,b.ab,b.lb,b.c,d.s,d.B,l.o,b.x],styles:[".scroll[_ngcontent-%COMP%]{height:100vh}ion-item[_ngcontent-%COMP%]{--background:var(--ion-item-background)}fiv-fab[_ngcontent-%COMP%]{--background-fab-progress-bar:red;--background-fab-progress:#ff0}"]}),g)}],m=((h=function n(){e(this,n)}).\u0275fac=function(e){return new(e||h)},h.\u0275mod=a.Nb({type:h}),h.\u0275inj=a.Mb({imports:[[r.j.forChild(p)],r.j]}),h),v=((f=function n(){e(this,n)}).\u0275fac=function(e){return new(e||f)},f.\u0275mod=a.Nb({type:f}),f.\u0275inj=a.Mb({imports:[[l.c,c.h,b.nb,m,d.t,d.C]]}),f)}}])}();