(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{"z+fX":function(t,e,n){"use strict";n.r(e),n.d(e,"ChatPageModule",function(){return h});var i=n("ofXK"),o=n("3Pt+"),s=n("TEn/"),a=n("fXoL");let r=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.Nb({type:t}),t.\u0275inj=a.Mb({imports:[[i.c,o.h,s.nb,o.p]]}),t})();var c=n("tyNb"),b=n("mrSG");function l(t,e){if(1&t&&(a.Vb(0,"div"),a.Qb(1,"img",11),a.Vb(2,"div",12),a.Qb(3,"div",13),a.Vb(4,"div",14),a.Vb(5,"span",15),a.Lc(6),a.Ub(),a.Lc(7,", "),a.Vb(8,"span"),a.Lc(9),a.ic(10,"lowercase"),a.ic(11,"date"),a.Ub(),a.Ub(),a.Ub(),a.Ub()),2&t){const t=a.hc().$implicit,e=a.hc();a.Db(1),a.nc("src",e.toUser.pic,a.Dc),a.Db(2),a.nc("innerHTML",t.text,a.Cc),a.Db(3),a.Mc(e.toUser.username),a.Db(3),a.Mc(a.jc(10,4,a.kc(11,6,t.date,"ago")))}}function p(t,e){if(1&t&&(a.Vb(0,"div"),a.Qb(1,"img",16),a.Vb(2,"div",17),a.Qb(3,"div",13),a.Vb(4,"div",14),a.Vb(5,"span",15),a.Lc(6),a.Ub(),a.Lc(7,", "),a.Vb(8,"span"),a.Lc(9),a.ic(10,"lowercase"),a.ic(11,"date"),a.Ub(),a.Ub(),a.Ub(),a.Ub()),2&t){const t=a.hc().$implicit,e=a.hc();a.Db(1),a.nc("src",e.user.pic,a.Dc),a.Db(2),a.nc("innerHTML",t.text,a.Cc),a.Db(3),a.Mc(e.user.username),a.Db(3),a.Mc(a.jc(10,4,a.kc(11,6,t.date,"ago")))}}function m(t,e){if(1&t&&(a.Vb(0,"div",8),a.Jc(1,l,12,9,"div",9),a.Jc(2,p,12,9,"div",9),a.Qb(3,"div",10),a.Ub()),2&t){const t=e.$implicit,n=a.hc();a.Db(1),a.nc("ngIf",n.user._id!==t.userId),a.Db(1),a.nc("ngIf",n.user._id===t.userId)}}let d=(()=>{class t{constructor(t,e){this.formBuilder=t,this.modalCtrl=e,this.toUser={_id:"534b8e5aaa5e7afc1b23e69b",pic:"assets/yannbf/img/avatar/ian-avatar.png",username:"Venkman"},this.user={_id:"534b8fb2aa5e7afc1b23e69c",pic:"assets/yannbf/img/avatar/marty-avatar.png",username:"Marty"},this.doneLoading=!1,this.messages=[{_id:1,date:new Date,userId:this.user._id,username:this.user.username,pic:this.user.pic,text:"OH CRAP!!"},{_id:2,date:new Date,userId:this.toUser._id,username:this.toUser.username,pic:this.toUser.pic,text:"what??"},{_id:3,date:new Date,userId:this.toUser._id,username:this.toUser.username,pic:this.toUser.pic,text:"Pretty long message with lots of content"},{_id:4,date:new Date,userId:this.user._id,username:this.user.username,pic:this.user.pic,text:"Pretty long message with even way more of lots and lots of content"},{_id:5,date:new Date,userId:this.user._id,username:this.user.username,pic:this.user.pic,text:"what??"},{_id:6,date:new Date,userId:this.toUser._id,username:this.toUser.username,pic:this.toUser.pic,text:"yes!"}],this.messageForm=t.group({message:new o.d("")}),this.chatBox=""}ngOnInit(){}send(t){if(t&&""!==t){const e={toId:this.toUser._id,_id:6,date:new Date,userId:this.user._id,username:this.toUser.username,pic:this.toUser.pic,text:t};this.messages.push(e),this.scrollToBottom(),setTimeout(()=>{const t={toId:this.toUser._id,_id:6,date:new Date,userId:this.toUser._id,username:this.toUser.username,pic:this.toUser.pic,text:"Just a quick reply"};this.messages.push(t),this.scrollToBottom()},1e3)}this.chatBox=""}scrollToBottom(){setTimeout(()=>{this.content.scrollToBottom()},100)}close(){this.modalCtrl.dismiss()}}return t.\u0275fac=function(e){return new(e||t)(a.Pb(o.c),a.Pb(s.rb))},t.\u0275cmp=a.Jb({type:t,selectors:[["app-messages"]],viewQuery:function(t,e){if(1&t&&a.Pc(s.u,3),2&t){let t;a.xc(t=a.ec())&&(e.content=t.first)}},decls:15,vars:4,consts:[["slot","start"],["slot","icon-only","fill","clear",3,"click"],["name","arrow-back"],["class","message-wrapper",4,"ngFor","ngForOf"],["novalidate","",3,"formGroup","submit"],["formControlName","message",3,"ngModel","placeholder","ngModelChange"],["fill","clear","slot","end",3,"click"],["name","send",1,"footer-btn"],[1,"message-wrapper"],[4,"ngIf"],[1,"cf"],["onerror","onProfilePicError(this)",1,"profile-pic","left",3,"src"],[1,"chat-bubble","left","slide-left"],["autolinker","",1,"message",3,"innerHTML"],[1,"message-detail"],[1,"bold"],["onerror","onProfilePicError(this)",1,"profile-pic","right",3,"src"],[1,"chat-bubble","right","slide-right"]],template:function(t,e){1&t&&(a.Vb(0,"ion-header"),a.Vb(1,"ion-toolbar"),a.Vb(2,"ion-buttons",0),a.Vb(3,"ion-button",1),a.dc("click",function(){return e.close()}),a.Qb(4,"ion-icon",2),a.Ub(),a.Ub(),a.Vb(5,"ion-title"),a.Lc(6,"Chat"),a.Ub(),a.Ub(),a.Ub(),a.Vb(7,"ion-content"),a.Jc(8,m,4,2,"div",3),a.Ub(),a.Vb(9,"ion-footer"),a.Vb(10,"form",4),a.dc("submit",function(){return e.send(e.chatBox)}),a.Vb(11,"ion-item"),a.Vb(12,"ion-input",5),a.dc("ngModelChange",function(t){return e.chatBox=t}),a.Ub(),a.Vb(13,"ion-button",6),a.dc("click",function(){return e.send(e.chatBox)}),a.Qb(14,"ion-icon",7),a.Ub(),a.Ub(),a.Ub(),a.Ub()),2&t&&(a.Db(8),a.nc("ngForOf",e.messages),a.Db(2),a.nc("formGroup",e.messageForm),a.Db(2),a.pc("placeholder","Send ",e.toUser.username," a message..."),a.nc("ngModel",e.chatBox))},directives:[s.z,s.mb,s.l,s.k,s.A,s.kb,s.u,i.n,s.x,o.r,o.m,o.g,s.D,s.C,s.yb,o.l,o.f,i.o],pipes:[i.l,i.f],styles:['@charset "UTF-8";.bar-footer[_ngcontent-%COMP%]{overflow:visible!important}.bar-footer[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{resize:none;height:25px}button.ion-android-send[_ngcontent-%COMP%]{padding-top:2px}.footer-btn[_ngcontent-%COMP%]{font-size:x-large}img.profile-pic[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:50%;position:absolute;bottom:10px}img.profile-pic.left[_ngcontent-%COMP%]{left:10px}img.profile-pic.right[_ngcontent-%COMP%]{right:10px}.ion-email[_ngcontent-%COMP%]{float:right;font-size:32px;vertical-align:middle}.message[_ngcontent-%COMP%]{font-size:14px}.message-detail[_ngcontent-%COMP%]{white-space:nowrap;font-size:14px}.bar.item-input-inset[_ngcontent-%COMP%]   .item-input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%!important}.message-wrapper[_ngcontent-%COMP%]{position:relative}.message-wrapper[_ngcontent-%COMP%]:last-child{margin-bottom:10px}.chat-bubble[_ngcontent-%COMP%]{border-radius:5px;display:inline-block;padding:10px 18px;position:relative;margin:10px;max-width:80%}.chat-bubble[_ngcontent-%COMP%]:before{content:"\xa0";display:block;height:16px;width:9px;position:absolute;bottom:-7.5px}.chat-bubble.left[_ngcontent-%COMP%]{background-color:#e6e5eb;float:left;margin-left:55px}.chat-bubble.left[_ngcontent-%COMP%]:before{background-color:#e6e5eb;left:10px;-webkit-transform:rotate(70deg) skew(5deg)}.chat-bubble.right[_ngcontent-%COMP%]{background-color:#158ffe;color:#fff;float:right;margin-right:55px}.chat-bubble.right[_ngcontent-%COMP%]:before{background-color:#158ffe;right:10px;-webkit-transform:rotate(118deg) skew(-5deg)}.chat-bubble.right[_ngcontent-%COMP%]   a.autolinker[_ngcontent-%COMP%]{color:#fff;font-weight:700}.user-messages-top-icon[_ngcontent-%COMP%]{font-size:28px;right:5px}.msg-header-username[_ngcontent-%COMP%], .user-messages-top-icon[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;position:relative;top:-3px}.item-input[_ngcontent-%COMP%], .item-input-wrapper[_ngcontent-%COMP%], input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{background-color:#f4f4f4!important}.bold[_ngcontent-%COMP%]{font-weight:700}.cf[_ngcontent-%COMP%]{clear:both!important}a.autolinker[_ngcontent-%COMP%]{color:#3b88c3;text-decoration:none}.loader-center[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-content:stretch;align-items:center}.loader[_ngcontent-%COMP%]   .ion-loading-c[_ngcontent-%COMP%]{font-size:64px}']}),t})();function g(t,e){if(1&t){const t=a.Wb();a.Vb(0,"ion-item",6),a.dc("click",function(){a.Bc(t);const n=e.$implicit;return a.hc().viewMessages(n)}),a.Vb(1,"ion-avatar",0),a.Qb(2,"img",7),a.Ub(),a.Vb(3,"ion-label"),a.Vb(4,"h2"),a.Lc(5),a.Ub(),a.Vb(6,"p"),a.Lc(7),a.Ub(),a.Ub(),a.Vb(8,"ion-note",5),a.Lc(9),a.ic(10,"lowercase"),a.ic(11,"date"),a.Ub(),a.Ub()}if(2&t){const t=e.$implicit;a.Db(2),a.nc("src",t.imageUrl,a.Dc),a.Db(3),a.Mc(t.title),a.Db(2),a.Mc(t.lastMessage),a.Db(2),a.Mc(a.jc(10,4,a.kc(11,6,t.timestamp,"hh:mm a")))}}const u=[{path:"",component:(()=>{class t{constructor(t){this.modalCtrl=t,this.chats=[{imageUrl:"assets/yannbf/img/avatar/marty-avatar.png",title:"McFly",lastMessage:"Hey, what happened yesterday?",timestamp:new Date},{imageUrl:"assets/yannbf/img/avatar/ian-avatar.png",title:"Venkman",lastMessage:"Sup, dude",timestamp:new Date},{imageUrl:"assets/yannbf/img/avatar/sarah-avatar.jpg",title:"Sarah Mcconnor",lastMessage:"You still ow me that pizza.",timestamp:new Date}]}ngOnInit(){}viewMessages(t){return Object(b.a)(this,void 0,void 0,function*(){const e=yield this.modalCtrl.create({component:d,componentProps:{chatId:t.id}});yield e.present()})}}return t.\u0275fac=function(e){return new(e||t)(a.Pb(s.rb))},t.\u0275cmp=a.Jb({type:t,selectors:[["app-chat"]],decls:60,vars:1,consts:[["slot","start"],["defaultHref","/"],[1,"chats"],[3,"click",4,"ngFor","ngForOf"],["src","assets/yannbf/img/avatar/marty-avatar.png"],["slot","end"],[3,"click"],[3,"src"]],template:function(t,e){1&t&&(a.Vb(0,"ion-header"),a.Vb(1,"ion-toolbar"),a.Vb(2,"ion-buttons",0),a.Qb(3,"ion-back-button",1),a.Ub(),a.Vb(4,"ion-title"),a.Lc(5,"Messages"),a.Ub(),a.Ub(),a.Ub(),a.Vb(6,"ion-content",2),a.Vb(7,"ion-list"),a.Vb(8,"ion-list-header"),a.Vb(9,"ion-label"),a.Lc(10,"Today"),a.Ub(),a.Ub(),a.Jc(11,g,12,9,"ion-item",3),a.Ub(),a.Vb(12,"ion-list"),a.Vb(13,"ion-list-header"),a.Vb(14,"ion-label"),a.Lc(15,"Yesterday"),a.Ub(),a.Ub(),a.Vb(16,"ion-item"),a.Vb(17,"ion-avatar",0),a.Qb(18,"img",4),a.Ub(),a.Vb(19,"ion-label"),a.Vb(20,"h2"),a.Lc(21,"McFly"),a.Ub(),a.Vb(22,"p"),a.Lc(23,"Lorem ipsum dolor sit amet.."),a.Ub(),a.Ub(),a.Vb(24,"ion-note",5),a.Lc(25,"11:11 pm"),a.Ub(),a.Ub(),a.Vb(26,"ion-item"),a.Vb(27,"ion-avatar",0),a.Qb(28,"img",4),a.Ub(),a.Vb(29,"ion-label"),a.Vb(30,"h2"),a.Lc(31,"McFly"),a.Ub(),a.Vb(32,"p"),a.Lc(33,"Lorem ipsum dolor sit amet.."),a.Ub(),a.Ub(),a.Vb(34,"ion-note",5),a.Lc(35,"11:11 pm"),a.Ub(),a.Ub(),a.Vb(36,"ion-item"),a.Vb(37,"ion-avatar",0),a.Qb(38,"img",4),a.Ub(),a.Vb(39,"ion-label"),a.Vb(40,"h2"),a.Lc(41,"McFly"),a.Ub(),a.Vb(42,"p"),a.Lc(43,"Lorem ipsum dolor sit amet.."),a.Ub(),a.Ub(),a.Vb(44,"ion-note",5),a.Lc(45,"11:11 pm"),a.Ub(),a.Ub(),a.Ub(),a.Vb(46,"ion-list"),a.Vb(47,"ion-list-header"),a.Vb(48,"ion-label"),a.Lc(49,"Last Week"),a.Ub(),a.Ub(),a.Vb(50,"ion-item"),a.Vb(51,"ion-avatar",0),a.Qb(52,"img",4),a.Ub(),a.Vb(53,"ion-label"),a.Vb(54,"h2"),a.Lc(55,"McFly"),a.Ub(),a.Vb(56,"p"),a.Lc(57,"Lorem ipsum dolor sit amet.."),a.Ub(),a.Ub(),a.Vb(58,"ion-note",5),a.Lc(59,"11:11 pm"),a.Ub(),a.Ub(),a.Ub(),a.Ub()),2&t&&(a.Db(11),a.nc("ngForOf",e.chats))},directives:[s.z,s.mb,s.l,s.h,s.i,s.kb,s.u,s.K,s.L,s.J,i.n,s.D,s.g,s.P],pipes:[i.l,i.f],styles:["ion-note[_ngcontent-%COMP%]{font-size:12px;align-self:flex-start;margin-top:14px}"]}),t})()}];let h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.Nb({type:t}),t.\u0275inj=a.Mb({imports:[[i.c,o.h,s.nb,c.j.forChild(u),r]]}),t})()}}]);