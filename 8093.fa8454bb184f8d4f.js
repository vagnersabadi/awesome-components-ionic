"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8093],{8093:(P,a,r)=>{r.r(a),r.d(a,{CryptoListPageModule:()=>C});var g=r(9808),p=r(3075),o=r(7674),s=r(7154),n=r(5e3);function d(t,c){if(1&t&&(n.TgZ(0,"ion-row",12)(1,"ion-col",13),n._UZ(2,"img",14),n.qZA(),n.TgZ(3,"ion-col",15)(4,"p",16),n._uU(5),n.qZA(),n.TgZ(6,"p",17),n._uU(7),n.qZA()(),n.TgZ(8,"ion-col",15)(9,"p",18),n._uU(10),n.qZA(),n._UZ(11,"p",19),n.qZA(),n.TgZ(12,"ion-col",20)(13,"span",21),n._UZ(14,"ion-icon",22),n.qZA()()()),2&t){const e=c.$implicit,i=n.oxw();n.xp6(2),n.s9C("src","assets/yannbf/img/currencies/"+e.symbol+".png",n.LSH),n.xp6(3),n.hij("Rank ",e.rank,""),n.xp6(2),n.Oqu(e.name),n.xp6(3),n.hij("",i.precision(e.price_usd,1)," $"),n.xp6(1),n.Q6J("innerHtml",i.evolution(e.percent_change_1h),n.oJD)}}const u=[{path:"",component:(()=>{class t{constructor(){this.data=[{id:"bitcoin",name:"Bitcoin",symbol:"btc",rank:"1",price_usd:"13208.8",percent_change_1h:"1.54"},{id:"ethereum",name:"Ethereum",symbol:"eth",rank:"2",price_usd:"658.926",percent_change_1h:"2.42"},{id:"bitcoin-cash",name:"Bitcoin Cash",symbol:"bch",rank:"3",price_usd:"2758.51",percent_change_1h:"2.65"},{id:"ripple",name:"Ripple",symbol:"xrp",rank:"4",price_usd:"1.01963",percent_change_1h:"0.98"},{id:"litecoin",name:"Litecoin",symbol:"ltc",rank:"5",price_usd:"263.913",percent_change_1h:"2.21"}]}ngOnInit(){}precision(e,i){return parseFloat(e).toFixed(i)}evolution(e){return e>0?"<span>"+parseFloat(e).toFixed(2)+'&nbsp;<i class="fa fa-caret-up"></i></span>':'<span class="red">'+parseFloat(e).toFixed(2)+'&nbsp;<i class="fa fa-caret-down"></i></span>'}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-crypto-list"]],decls:18,vars:1,consts:[["slot","start"],["defaultHref","/"],[1,"page-background"],[1,"welcome-header"],[1,"content"],[1,"title"],[1,"subtitle"],["color","dark",1,"refresh"],["name","md-refresh"],[1,"body","ion-padding"],[1,"currencies"],["class","currency",4,"ngFor","ngForOf"],[1,"currency"],[1,"image"],["alt","",3,"src"],["size","4",1,"text"],[1,"rank"],[1,"name"],[1,"usd"],[1,"evolution",3,"innerHtml"],["size","1"],[1,"indicator"],["icon","md-arrow-dropright"]],template:function(e,i){1&e&&(n.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),n._UZ(3,"ion-back-button",1),n.qZA(),n.TgZ(4,"ion-title"),n._uU(5,"Crypto List"),n.qZA()()(),n.TgZ(6,"ion-content",2)(7,"div",3)(8,"div",4)(9,"div",5),n._uU(10,"Crypto Currencies"),n.qZA(),n.TgZ(11,"div",6),n._uU(12,"Find The latest info about Crypto currencies"),n.qZA()(),n.TgZ(13,"ion-fab-button",7),n._UZ(14,"ion-icon",8),n.qZA()(),n.TgZ(15,"div",9)(16,"div",10),n.YNc(17,d,15,5,"ion-row",11),n.qZA()()()),2&e&&(n.xp6(17),n.Q6J("ngForOf",i.data))},directives:[o.Gu,o.sr,o.Sm,o.oU,o.cs,o.wd,o.W2,o.W4,o.gu,g.sg,o.Nd,o.wI],styles:[".page-background[_ngcontent-%COMP%]{--background: rgb(89, 138, 223)}p[_ngcontent-%COMP%]{margin:0}.welcome-header[_ngcontent-%COMP%]{position:relative;background:linear-gradient(135deg,#8b7fe0,#f75f9d);width:100%;padding:30px 0;margin-bottom:20px}.welcome-header[_ngcontent-%COMP%]   .refresh[_ngcontent-%COMP%]{position:absolute;right:10px}.welcome-header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{text-align:center;padding:20px;color:#fff}.welcome-header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100px;margin-bottom:10px}.welcome-header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:20px;font-weight:700;text-transform:uppercase;margin-bottom:10px}.welcome-header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-size:15px;font-weight:400;text-align:center}.body[_ngcontent-%COMP%]   .currencies[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%]{background:linear-gradient(45deg,#5e6d8c,#384662);padding:10px;border-radius:10px;margin:10px auto}.body[_ngcontent-%COMP%]   .currencies[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{text-align:left}.body[_ngcontent-%COMP%]   .currencies[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50px;margin:0;display:block}.body[_ngcontent-%COMP%]   .currencies[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{color:#bcc6d4;font-size:15px;font-weight:700}.body[_ngcontent-%COMP%]   .currencies[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .rank[_ngcontent-%COMP%]{color:#8b9bbd;font-size:15px;font-weight:500}.body[_ngcontent-%COMP%]   .currencies[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .usd[_ngcontent-%COMP%]{color:#bcc6d4;font-size:15px;font-weight:700}.body[_ngcontent-%COMP%]   .currencies[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .evolution[_ngcontent-%COMP%]{color:#00cb78;font-size:16px;font-weight:500}.body[_ngcontent-%COMP%]   .currencies[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .evolution[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%]{color:#f44447}.body[_ngcontent-%COMP%]   .currencies[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%]{position:absolute;top:50%;margin-top:-7px;right:0;color:#ececec4d}"]}),t})()}];let l=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[s.Bz.forChild(u)],s.Bz]}),t})(),C=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[g.ez,p.u5,o.Pc,l]]}),t})()}}]);