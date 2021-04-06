!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var i=0;i<e.length;i++){var t=e[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{xhj8:function(i,t,o){"use strict";o.r(t),o.d(t,"EditableLabelPageModule",function(){return p});var b,r,a,l=o("ofXK"),c=o("3Pt+"),u=o("TEn/"),d=o("tyNb"),f=o("fXoL"),m=o("Kxyh"),s=[{path:"",component:(b=function(){function i(e){n(this,i),this.formBuilder=e,this.setupForm()}var t,o,b;return t=i,(o=[{key:"ngOnInit",value:function(){}},{key:"setupForm",value:function(){this.form=this.formBuilder.group({title:["",[c.q.required]],name:["",[c.q.required]],email:["",[c.q.email,c.q.required]],password:["",[c.q.minLength(6),c.q.required]]})}},{key:"onSubmit",value:function(){}}])&&e(t.prototype,o),b&&e(t,b),i}(),b.\u0275fac=function(n){return new(n||b)(f.Pb(c.c))},b.\u0275cmp=f.Jb({type:b,selectors:[["app-editable-label"]],decls:34,vars:11,consts:[["slot","start"],["defaultHref","/fivethree"],["slot","start",3,"ngModel","ngModelChange"],["value","Not in a form",3,"editing"],["value","Text with NgModel",3,"ngModel","editing","ngModelChange"],[3,"formGroup","ngSubmit"],["value","Title","type","title","formControlName","title",3,"editing"],["value","Your Name","formControlName","name",3,"editing"],["block","","color","primary","type","submit"]],template:function(n,e){1&n&&(f.Vb(0,"ion-header"),f.Vb(1,"ion-toolbar"),f.Vb(2,"ion-buttons",0),f.Qb(3,"ion-back-button",1),f.Ub(),f.Vb(4,"ion-title"),f.Lc(5,"Editable Label"),f.Ub(),f.Ub(),f.Ub(),f.Vb(6,"ion-content"),f.Vb(7,"ion-item"),f.Vb(8,"ion-label"),f.Lc(9,"Editing"),f.Ub(),f.Vb(10,"ion-checkbox",2),f.dc("ngModelChange",function(n){return e.editing=n}),f.Ub(),f.Ub(),f.Vb(11,"ion-card"),f.Vb(12,"ion-card-content"),f.Qb(13,"fiv-editable-label",3),f.Ub(),f.Ub(),f.Vb(14,"ion-card"),f.Vb(15,"ion-card-content"),f.Vb(16,"ion-item"),f.Vb(17,"fiv-editable-label",4),f.dc("ngModelChange",function(n){return e.model=n}),f.Ub(),f.Ub(),f.Vb(18,"ion-item"),f.Vb(19,"ion-label"),f.Lc(20),f.Ub(),f.Ub(),f.Ub(),f.Ub(),f.Vb(21,"form",5),f.dc("ngSubmit",function(){return e.onSubmit()}),f.Vb(22,"ion-card"),f.Vb(23,"ion-toolbar"),f.Qb(24,"fiv-editable-label",6),f.Ub(),f.Vb(25,"ion-card-content"),f.Vb(26,"ion-item"),f.Qb(27,"fiv-editable-label",7),f.Ub(),f.Ub(),f.Ub(),f.Vb(28,"ion-button",8),f.Lc(29," Login "),f.Ub(),f.Ub(),f.Vb(30,"ion-card"),f.Vb(31,"ion-card-content"),f.Lc(32),f.ic(33,"json"),f.Ub(),f.Ub(),f.Ub()),2&n&&(f.Db(10),f.nc("ngModel",e.editing),f.Db(3),f.nc("editing",e.editing),f.Db(4),f.nc("ngModel",e.model)("editing",e.editing),f.Db(3),f.Mc(e.model),f.Db(1),f.nc("formGroup",e.form),f.Db(3),f.nc("editing",e.editing),f.Db(3),f.nc("editing",e.editing),f.Db(5),f.Nc(" ",f.jc(33,9,e.form.value)," "))},directives:[u.z,u.mb,u.l,u.h,u.i,u.kb,u.u,u.D,u.J,u.r,u.c,c.l,c.o,u.m,u.n,m.n,c.r,c.m,c.g,c.f,u.k],pipes:[l.h],styles:[""]}),b)}],g=((a=function e(){n(this,e)}).\u0275fac=function(n){return new(n||a)},a.\u0275mod=f.Nb({type:a}),a.\u0275inj=f.Mb({imports:[[d.j.forChild(s)],d.j]}),a),p=((r=function e(){n(this,e)}).\u0275fac=function(n){return new(n||r)},r.\u0275mod=f.Nb({type:r}),r.\u0275inj=f.Mb({imports:[[l.c,c.h,u.nb,g,m.o,c.p]]}),r)}}])}();