(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"/a8n":function(e,n,t){"use strict";t.r(n),t.d(n,"SearchbarPageModule",function(){return f});var c=t("ofXK"),a=t("3Pt+"),r=t("TEn/"),s=t("tyNb"),o=t("Kxyh"),i=t("fXoL");const h=["search"];function l(e,n){if(1&e&&(i.Vb(0,"p"),i.Lc(1),i.Ub()),2&e){const e=i.hc();i.Db(1),i.Nc("searching for ",e.searchInput,"")}}const b=[{path:"",component:(()=>{class e{constructor(){this.small=!1,this.states=o.a,this.state=o.a.Bottom}ngOnInit(){}onSearchInputChanged(e){this.searchInput=e.detail.value}closeSearch(){this.searchInput=""}bottomSheetClose(e){e.closeSearchbar()}checkChanged(e){this.small=e.detail.checked}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=i.Jb({type:e,selectors:[["app-searchbar"]],viewQuery:function(e,n){if(1&e&&i.Pc(h,1),2&e){let e;i.xc(e=i.ec())&&(n.search=e.first)}},decls:12,vars:5,consts:[["title","Searchbar","placeholder","Search ....",3,"smallWidth","small","fivInputChange","fivClose"],["search",""],["start","","defaultHref","/fivethree"],[4,"ngIf"],["slot","start",3,"checked","ionChange"]],template:function(e,n){1&e&&(i.Vb(0,"fiv-searchbar",0,1),i.dc("fivInputChange",function(e){return n.onSearchInputChanged(e)})("fivClose",function(){return n.closeSearch()}),i.Qb(2,"ion-back-button",2),i.Ub(),i.Vb(3,"ion-content"),i.Jc(4,l,2,1,"p",3),i.Vb(5,"ion-item"),i.Vb(6,"ion-label"),i.Lc(7,"Small Searchbar"),i.Ub(),i.Vb(8,"ion-checkbox",4),i.dc("ionChange",function(e){return n.checkChanged(e)}),i.Ub(),i.Ub(),i.Vb(9,"ion-item"),i.Vb(10,"ion-label"),i.Lc(11),i.Ub(),i.Ub(),i.Ub()),2&e&&(i.nc("smallWidth",120)("small",n.small),i.Db(4),i.nc("ngIf",n.searchInput),i.Db(4),i.nc("checked",n.small),i.Db(3),i.Nc("Query: ",n.searchInput,""))},directives:[o.K,r.h,r.i,r.u,c.o,r.D,r.J,r.r,r.c],styles:[""]}),e})()}];let u=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=i.Nb({type:e}),e.\u0275inj=i.Mb({imports:[[s.j.forChild(b)],s.j]}),e})(),f=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=i.Nb({type:e}),e.\u0275inj=i.Mb({imports:[[c.c,a.h,r.nb,u,o.L]]}),e})()}}]);