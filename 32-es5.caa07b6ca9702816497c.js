!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function e(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{R9wR:function(n,i,o){"use strict";o.r(i),o.d(i,"WhatsappPageModule",function(){return X});var a=o("ofXK"),c=o("3Pt+"),r=o("TEn/"),s=o("tyNb"),l=o("mrSG"),g=o("fXoL"),d=["IonContent"],m=function(t){return{clubbed:t}},b=function(t,n,e){return{sharper:t,"sharper-top":n,"sharper-bottom":e}};function p(t,n){if(1&t&&(g.Vb(0,"ion-row"),g.Vb(1,"ion-col",14),g.Vb(2,"div",15),g.Vb(3,"ion-label",16),g.Vb(4,"div",17),g.Vb(5,"p",18),g.Lc(6),g.Ub(),g.Vb(7,"div",19),g.Qb(8,"div",20),g.Ub(),g.Ub(),g.Ub(),g.Ub(),g.Ub(),g.Ub()),2&t){var e=g.hc(),i=e.index,o=e.$implicit,a=g.hc();g.Db(1),g.nc("ngClass",g.sc(3,m,a.msgList[i+1]&&a.msgList[i+1].userId!=o.userId||!a.msgList[i+1])),g.Db(3),g.nc("ngClass",g.uc(5,b,a.msgList[i+1]&&a.msgList[i+1].userId==o.userId&&a.msgList[i-1]&&a.msgList[i-1].userId==o.userId,a.msgList[i-1]&&a.msgList[i-1].userId==o.userId,a.msgList[i+1]&&a.msgList[i+1].userId==o.userId)),g.Db(2),g.Nc("",o.message," ")}}function h(t,n){if(1&t&&(g.Vb(0,"p",18),g.Lc(1),g.Ub()),2&t){var e=g.hc(2).$implicit;g.Db(1),g.Mc(e.message)}}function u(t,n){if(1&t&&(g.Vb(0,"div",30),g.Qb(1,"ion-img",31),g.Ub()),2&t){var e=g.hc(2).$implicit;g.Db(1),g.nc("src",e.image)}}function f(t,n){if(1&t&&(g.Vb(0,"div",32),g.Vb(1,"video",33),g.Qb(2,"source",34),g.Ub(),g.Ub()),2&t){var e=g.hc(2).$implicit;g.Db(2),g.nc("src",e.video,g.Dc)}}function v(t,n){1&t&&g.Qb(0,"div",35)}function x(t,n){1&t&&(g.Vb(0,"div",36),g.Qb(1,"div",37),g.Ub())}function C(t,n){1&t&&g.Qb(0,"div",38)}function _(t,n){1&t&&(g.Vb(0,"div",39),g.Qb(1,"div",40),g.Ub())}var M=function(t,n,e,i){return{sharper:t,"sharper-top":n,"sharper-bottom":e,"transparent-bg":i}};function O(t,n){if(1&t&&(g.Vb(0,"ion-row"),g.Vb(1,"ion-col",21),g.Vb(2,"div",22),g.Vb(3,"ion-label",16),g.Vb(4,"div",17),g.Jc(5,h,2,1,"p",23),g.Jc(6,u,2,1,"div",24),g.Jc(7,f,3,1,"div",25),g.Jc(8,v,1,0,"div",26),g.Jc(9,x,2,0,"div",27),g.Jc(10,C,1,0,"div",28),g.Jc(11,_,2,0,"div",29),g.Ub(),g.Ub(),g.Ub(),g.Ub(),g.Ub()),2&t){var e=g.hc(),i=e.index,o=e.$implicit,a=g.hc();g.Db(1),g.nc("ngClass",g.sc(9,m,a.msgList[i+1]&&a.msgList[i+1].userId!=o.userId||!a.msgList[i+1])),g.Db(3),g.nc("ngClass",g.vc(11,M,a.msgList[i+1]&&a.msgList[i+1].userId==o.userId&&a.msgList[i-1]&&a.msgList[i-1].userId==o.userId,a.msgList[i-1]&&a.msgList[i-1].userId==o.userId,a.msgList[i+1]&&a.msgList[i+1].userId==o.userId,o.image||o.map||o.video)),g.Db(1),g.nc("ngIf",!o.image&&!o.video&&!o.map),g.Db(1),g.nc("ngIf",o.image),g.Db(1),g.nc("ngIf",o.video),g.Db(1),g.nc("ngIf",o.map),g.Db(1),g.nc("ngIf",!(o.image||o.map||o.video)),g.Db(1),g.nc("ngIf",o.image||o.map||o.video),g.Db(1),g.nc("ngIf",o.image||o.map||o.video)}}function P(t,n){if(1&t&&(g.Vb(0,"ion-row"),g.Vb(1,"ion-col"),g.Vb(2,"ion-text",41),g.Lc(3),g.Ub(),g.Ub(),g.Ub()),2&t){var e=g.hc().$implicit;g.Db(3),g.Mc(e.time)}}function w(t,n){if(1&t&&(g.Vb(0,"div"),g.Jc(1,p,9,9,"ion-row",8),g.Jc(2,O,12,16,"ion-row",8),g.Jc(3,P,4,1,"ion-row",8),g.Ub()),2&t){var e=n.$implicit,i=n.index,o=g.hc();g.Db(1),g.nc("ngIf",e.userId==o.User),g.Db(1),g.nc("ngIf",e.userId==o.toUser),g.Db(1),g.nc("ngIf",o.msgList[i+1]&&o.msgList[i+1].userId!=e.userId||!o.msgList[i+1])}}function y(t,n){1&t&&(g.Vb(0,"ion-row"),g.Vb(1,"ion-col",42),g.Vb(2,"div",15),g.Vb(3,"ion-label",16),g.Vb(4,"div",43),g.Vb(5,"p",44),g.Qb(6,"ion-spinner",45),g.Ub(),g.Vb(7,"div",19),g.Qb(8,"div",20),g.Ub(),g.Ub(),g.Ub(),g.Ub(),g.Ub(),g.Ub())}function U(t,n){if(1&t&&g.Qb(0,"ion-icon",52),2&t){var e=g.hc().$implicit;g.oc("name",e.icon)}}function D(t,n){if(1&t&&(g.Vb(0,"ion-thumbnail"),g.Qb(1,"ion-img",53),g.Ub()),2&t){var e=g.hc().$implicit;g.Db(1),g.nc("src",e.image)}}function L(t,n){if(1&t){var e=g.Wb();g.Vb(0,"ion-col",49),g.Vb(1,"ion-label",50),g.dc("click",function(){g.Bc(e);var t=n.$implicit;return g.hc(2).typeSelected(t)}),g.Jc(2,U,1,1,"ion-icon",51),g.Jc(3,D,2,1,"ion-thumbnail",8),g.Vb(4,"p"),g.Lc(5),g.Ub(),g.Ub(),g.Ub()}if(2&t){var i=n.$implicit;g.Db(2),g.nc("ngIf",i.icon),g.Db(1),g.nc("ngIf",i.image),g.Db(2),g.Mc(i.label)}}function V(t,n){if(1&t&&(g.Vb(0,"ion-list",46),g.Vb(1,"ion-row",47),g.Jc(2,L,6,3,"ion-col",48),g.Ub(),g.Ub()),2&t){var e=g.hc();g.Db(2),g.nc("ngForOf",e.footerJson)}}var I,k=((I=function(){function n(e,i){var o=this;t(this,n),this.activRoute=e,this.modal=i,this.user_input="",this.User="Me",this.toUser="HealthBot",this.show=!1,this.show=!1,this.activRoute.params.subscribe(function(t){o.paramData=t,o.userName=t.name}),this.msgList=[{userId:"HealthBot",userName:"HealthBot",userAvatar:"../../../../assets/clones/chat/chat/chat3.jpg",time:"12:00",message:"Hello, have you seen this great chat UI",id:0},{userId:"Me",userName:"Me",userAvatar:this.paramData.image?this.paramData.image:"../../../../assets/clones/chat/chat/chat5.jpg",time:"12:03",message:"Yeah, I see this. This looks great. ",id:1},{userId:"HealthBot",userName:"HealthBot",userAvatar:"../../../../assets/clones/chat/chat/chat3.jpg",time:"12:05",message:"... and this is absolutely free, anyone can use",id:3},{userId:"Me",userName:"Me",userAvatar:"../../../../assets/clones/chat/chat/chat5.jpg",time:"12:06",message:"wow ! that's great. Love to see more of such chat themes",id:4},{userId:"HealthBot",userName:"HealthBot",userAvatar:"../../../../assets/clones/chat/chat/chat3.jpg",message:"Oh there are several other designs. Check all their designs on their website enappd.com",id:5}],this.footerJson=[{icon:"images",label:"Image"},{icon:"call",label:"Phone"},{icon:"mail-unread",label:"Red"},{label:"Document",icon:"radio-button-on"},{icon:"pin",label:"Position"},{icon:"videocam",label:"Video"}]}return e(n,[{key:"ngOnInit",value:function(){}},{key:"typeSelected",value:function(t){var n=this;console.log(t),""===this.user_input&&"images"===t.icon?(this.msgList.push({userId:this.toUser,userName:this.toUser,time:"12:01",image:"../../../../assets/clones/chat/chat/chat3.jpg",id:this.msgList.length+1}),this.user_input="",this.show=!1,this.scrollDown(),setTimeout(function(){n.senderSends()},500)):""===this.user_input&&"videocam"===t.icon?(this.msgList.push({userId:this.toUser,userName:this.toUser,time:"12:01",video:"../../../../assets/clones/chat/chat/video.mp4",id:this.msgList.length+1}),this.user_input="",this.show=!1,this.scrollDown(),setTimeout(function(){n.senderSends()},500)):""===this.user_input&&"pin"===t.icon&&(this.msgList.push({userId:this.toUser,userName:this.toUser,time:"12:01",map:{lat:52.678418,lng:7.809007},id:this.msgList.length+1}),this.user_input="",this.show=!1,this.scrollDown(),setTimeout(function(){n.senderSends()},500))}},{key:"toggleList",value:function(){this.show=!this.show,console.log(this.show),this.scrollDown()}},{key:"sendMsg",value:function(){var t=this;""!==this.user_input&&(this.msgList.push({userId:this.toUser,userName:this.toUser,userAvatar:this.paramData.image?this.paramData.image:"../../../../assets/clones/chat/chat/chat3.jpg",time:"12:01",message:this.user_input,id:this.msgList.length+1}),this.user_input="",this.scrollDown(),setTimeout(function(){t.senderSends()},500),this.show=!1)}},{key:"senderSends",value:function(){var t=this;this.loader=!0,setTimeout(function(){t.msgList.push({userId:t.User,userName:t.User,userAvatar:"../../../../assets/clones/chat/chat/chat5.jpg",message:"Sorry, didn't get what you said. Can you repeat that please"}),t.loader=!1,t.scrollDown()},2e3),this.scrollDown()}},{key:"scrollDown",value:function(){var t=this;setTimeout(function(){t.content.scrollToBottom(50)},200)}},{key:"userTyping",value:function(t){this.show=!1,console.log(t),this.start_typing=t.target.value,this.scrollDown()}},{key:"focusFunction",value:function(t){this.show=!1,console.log(t)}},{key:"something",value:function(t){t.preventDefault(),console.log(t)}}]),n}()).\u0275fac=function(t){return new(t||I)(g.Pb(s.a),g.Pb(r.rb))},I.\u0275cmp=g.Jb({type:I,selectors:[["app-classic"]],viewQuery:function(t,n){var e;1&t&&g.Pc(d,3),2&t&&g.xc(e=g.ec())&&(n.content=e.first)},decls:19,vars:4,consts:[["translucent",""],[1,"padding_toolbar"],["slot","start"],["slot","icon-only","fill","clear",3,"click"],["name","arrow-back"],["color","medium","text-center",""],["IonContent",""],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"footer_item"],["slot","end","name","send","expand","icon-only",1,"footerIconSend",3,"click","mousedown"],["type","text","placeholder","Write a message...",1,"input-box",3,"ngModel","ngModelChange","keypress","ionFocus"],["slot","end","name","add","expand","icon-only",1,"footerIcon",3,"click"],["class","footer-options",4,"ngIf"],["no-padding","",1,"right",3,"ngClass"],[1,"imageAvatarRight"],["color","light"],[1,"chatDiv",3,"ngClass"],["text-wrap","","padding",""],[1,"corner-parent-right"],[1,"corner-child-right"],["no-padding","",1,"left",3,"ngClass"],[1,"imageAvatarLeft"],["text-wrap","","padding","",4,"ngIf"],["class","imageFrom_footer",4,"ngIf"],["class","imageFrom_footer video",4,"ngIf"],["class","imageFrom_footerMap",4,"ngIf"],["class","corner-parent-left",4,"ngIf"],["class","corner-parent-left-image",4,"ngIf"],["class","corner-child-left-image",4,"ngIf"],[1,"imageFrom_footer"],[1,"imageFrom_footer",3,"src"],[1,"imageFrom_footer","video"],["controls","",1,"videoFrom_footer"],["type","video/mp4",3,"src"],[1,"imageFrom_footerMap"],[1,"corner-parent-left"],[1,"corner-child-left"],[1,"corner-parent-left-image"],[1,"corner-child-left-image"],[1,"child"],[1,"chat-time"],["no-padding","",1,"loading-col"],[1,"chatDivLoader"],["text-wrap","","padding","",1,"loader-text"],["name","dots","color","dark"],[1,"footer-options"],[1,"footer_row"],["size","4","class","footer_col",4,"ngFor","ngForOf"],["size","4",1,"footer_col"],[1,"footer_label",3,"click"],["expand","icon-only","class","footerIcon",3,"name",4,"ngIf"],["expand","icon-only",1,"footerIcon",3,"name"],[3,"src"]],template:function(t,n){1&t&&(g.Vb(0,"ion-header",0),g.Vb(1,"ion-toolbar",1),g.Vb(2,"ion-buttons",2),g.Vb(3,"ion-button",3),g.dc("click",function(){return n.modal.dismiss()}),g.Qb(4,"ion-icon",4),g.Ub(),g.Ub(),g.Vb(5,"ion-title",5),g.Lc(6,"Classic"),g.Ub(),g.Ub(),g.Ub(),g.Vb(7,"ion-content",null,6),g.Vb(9,"ion-list"),g.Jc(10,w,4,3,"div",7),g.Jc(11,y,9,0,"ion-row",8),g.Ub(),g.Ub(),g.Vb(12,"ion-footer"),g.Vb(13,"ion-toolbar"),g.Vb(14,"ion-item",9),g.Vb(15,"ion-icon",10),g.dc("click",function(){return n.sendMsg()})("mousedown",function(t){return n.something(t)}),g.Ub(),g.Vb(16,"ion-input",11),g.dc("ngModelChange",function(t){return n.user_input=t})("keypress",function(t){return n.userTyping(t)})("ionFocus",function(t){return n.focusFunction(t)}),g.Ub(),g.Vb(17,"ion-icon",12),g.dc("click",function(){return n.toggleList()}),g.Ub(),g.Ub(),g.Jc(18,V,3,1,"ion-list",13),g.Ub(),g.Ub()),2&t&&(g.Db(10),g.nc("ngForOf",n.msgList),g.Db(1),g.nc("ngIf",n.loader),g.Db(5),g.nc("ngModel",n.user_input),g.Db(2),g.nc("ngIf",n.show))},directives:[r.z,r.mb,r.l,r.k,r.A,r.kb,r.u,r.K,a.n,a.o,r.x,r.D,r.C,r.yb,c.l,c.o,r.V,r.t,a.m,r.J,r.B,r.hb,r.db,r.jb],styles:["ion-title[_ngcontent-%COMP%]{font-size:26px}ion-content[_ngcontent-%COMP%]{--background:#e8e8f8}ion-header[_ngcontent-%COMP%]{--background:#5b2573}ion-item[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%]{--background:transparent}ion-list[_ngcontent-%COMP%]{background:transparent;margin-bottom:0;padding:20px 10px 0}.imageAvatarRight[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:flex-end}.imageAvatarRight[_ngcontent-%COMP%]   .imageAvatarBottom[_ngcontent-%COMP%]{max-width:214px;align-items:flex-end;display:flex;border-radius:50%;position:relative;top:6px;z-index:11}.imageAvatarRight[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{width:50px;height:50px;display:flex;justify-content:center;align-items:center}.imageAvatarRight[_ngcontent-%COMP%]   .imageAvatarBottomIcon[_ngcontent-%COMP%]{width:12px;height:12px;border-radius:50px;background:var(--ion-color-tertiary-tint);position:absolute;top:17%;display:flex;justify-content:center;align-items:center;right:10.1%;color:#fff}.imageAvatarRight[_ngcontent-%COMP%]   .chatDiv[_ngcontent-%COMP%]{text-align:justify;position:relative;background:#fff;border-radius:6px;border-bottom-left-radius:0;max-width:72vw;color:#444}.imageAvatarRight[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:35px;height:35px}.imageAvatarRight[_ngcontent-%COMP%]   .sharper.chatDiv[_ngcontent-%COMP%]{border-radius:0}.imageAvatarRight[_ngcontent-%COMP%]   .sharper-bottom.chatDiv[_ngcontent-%COMP%]{border-bottom-left-radius:0;border-bottom-right-radius:0}.imageAvatarRight[_ngcontent-%COMP%]   .sharper-top.chatDiv[_ngcontent-%COMP%]{border-top-left-radius:0;border-top-right-radius:0}.imageAvatarLeft[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:flex-end}.imageAvatarLeft[_ngcontent-%COMP%]   .imageAvatarBottom[_ngcontent-%COMP%]{max-width:214px;align-items:flex-end;display:flex;border-radius:50%;position:relative;top:6px;z-index:11}.imageAvatarLeft[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{width:50px;height:50px;display:flex;justify-content:center;align-items:center}.imageAvatarLeft[_ngcontent-%COMP%]   .imageAvatarBottomIcon[_ngcontent-%COMP%]{width:12px;height:12px;border-radius:50px;background:var(--ion-color-tertiary-tint);position:absolute;top:17%;display:flex;justify-content:center;align-items:center;right:10.1%;color:#fff}.imageAvatarLeft[_ngcontent-%COMP%]   .chatDiv[_ngcontent-%COMP%]{text-align:left;position:relative;background:#b9a3e8;border-radius:6px;border-bottom-right-radius:0;max-width:72vw;color:#fff;font-weight:500;padding:8px}.imageAvatarLeft[_ngcontent-%COMP%]   .chatDiv.transparent-bg[_ngcontent-%COMP%]{background:transparent}.imageAvatarLeft[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:35px;height:35px}.imageAvatarLeft[_ngcontent-%COMP%]   ion-img.imageFrom_footer[_ngcontent-%COMP%]{width:calc(100% + 0px);height:auto;-o-object-fit:cover;object-fit:cover}.imageAvatarLeft[_ngcontent-%COMP%]   .imageFrom_footer[_ngcontent-%COMP%]{width:calc(72vw + 20px)}.imageAvatarLeft[_ngcontent-%COMP%]   .imageFrom_footer.video[_ngcontent-%COMP%]{background:#000}.imageAvatarLeft[_ngcontent-%COMP%]   .imageFrom_footerMap[_ngcontent-%COMP%]{width:calc(72vw + 20px)}.imageAvatarLeft[_ngcontent-%COMP%]   .videoFrom_footer[_ngcontent-%COMP%]{width:calc(72vw + 20px);-o-object-fit:fill;object-fit:fill;height:auto;border-radius:5px;display:block}.imageAvatarLeft[_ngcontent-%COMP%]   .sharper.chatDiv[_ngcontent-%COMP%]{border-radius:0}.imageAvatarLeft[_ngcontent-%COMP%]   .sharper-bottom.chatDiv[_ngcontent-%COMP%]{border-bottom-left-radius:0;border-bottom-right-radius:0}.imageAvatarLeft[_ngcontent-%COMP%]   .sharper-top.chatDiv[_ngcontent-%COMP%]{border-top-left-radius:0;border-top-right-radius:0}ion-buttons[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:25px}ion-title[_ngcontent-%COMP%]{font-size:22px}ion-fab-button[_ngcontent-%COMP%]{width:47px!important;height:47px!important}ion-fab[_ngcontent-%COMP%]{bottom:-22px!important}.footerIcon[_ngcontent-%COMP%]{color:#b39ddb;font-size:2.5em}.footerIconSend[_ngcontent-%COMP%]{color:rgba(161,169,187,.92)}ion-input[_ngcontent-%COMP%]{--placeholder-color:var(--ion-color-medium-tint)}.chatDivLoader[_ngcontent-%COMP%]{position:relative;background:#fff;border-radius:6px;min-width:80px;max-width:80px;align-items:center;color:#fff;padding:2px;display:flex;justify-content:center;border-bottom-left-radius:0;margin-bottom:15px}.chatDivLoader[_ngcontent-%COMP%]   .corner-parent-right[_ngcontent-%COMP%]{height:16px;width:16px;background:transparent;position:absolute;left:-16px;bottom:0;overflow:hidden;border-radius:0}.chatDivLoader[_ngcontent-%COMP%]   .corner-parent-right[_ngcontent-%COMP%]   .corner-child-right[_ngcontent-%COMP%]{width:0;height:0;border-top:14px solid transparent;border-right:19px solid #fff;border-bottom:2px solid #fff}ion-text[_ngcontent-%COMP%]{font-size:12px;color:var(--ion-color-medium)}ion-col[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.imageAvatarBottomLoader[_ngcontent-%COMP%]{max-width:214px;align-items:flex-end;display:flex;border-radius:50%;position:relative;top:8px;z-index:11}.hidden[_ngcontent-%COMP%]{visibility:hidden}.loading-col[_ngcontent-%COMP%], .right[_ngcontent-%COMP%]{justify-content:flex-start;padding-left:20px}.left[_ngcontent-%COMP%]{justify-content:flex-end;padding-right:20px}.clubbed[_ngcontent-%COMP%]   .imageAvatarRight[_ngcontent-%COMP%]   .chatDiv[_ngcontent-%COMP%]{padding:8px}.clubbed[_ngcontent-%COMP%]   .imageAvatarRight[_ngcontent-%COMP%]   .chatDiv[_ngcontent-%COMP%]   .corner-parent-right[_ngcontent-%COMP%]{height:16px;width:16px;background:transparent;position:absolute;left:-16px;bottom:0;overflow:hidden;border-radius:0}.clubbed[_ngcontent-%COMP%]   .imageAvatarRight[_ngcontent-%COMP%]   .chatDiv[_ngcontent-%COMP%]   .corner-parent-right[_ngcontent-%COMP%]   .corner-child-right[_ngcontent-%COMP%]{width:0;height:0;border-top:14px solid transparent;border-right:19px solid #fff;border-bottom:2px solid #fff}.clubbed[_ngcontent-%COMP%]   .imageAvatarLeft[_ngcontent-%COMP%]   .chatDiv[_ngcontent-%COMP%]   .corner-parent-left[_ngcontent-%COMP%]{height:16px;width:16px;background:transparent;position:absolute;right:-16px;bottom:0;overflow:hidden;border-radius:0}.clubbed[_ngcontent-%COMP%]   .imageAvatarLeft[_ngcontent-%COMP%]   .chatDiv[_ngcontent-%COMP%]   .corner-parent-left[_ngcontent-%COMP%]   .corner-child-left[_ngcontent-%COMP%]{width:0;height:0;border-color:transparent transparent #b9a3e8 #b9a3e8;border-style:solid;border-width:14px 10px 2px 17px}.input-box[_ngcontent-%COMP%]{color:var(--ion-color-dark-shade)}ion-item.footer_item[_ngcontent-%COMP%]{--inner-border-width:0px 0px 0px 0px;--highlight-color-valid:var(--ion-color-tertiary-contrast)!important}.footer-options[_ngcontent-%COMP%]{background:#e8e8f8}.footer_row[_ngcontent-%COMP%]{padding:16px 0 0;background:transparent}.footer_row[_ngcontent-%COMP%]   .footer_label[_ngcontent-%COMP%]{padding-bottom:15px;display:flex;justify-content:center;align-items:center;flex-direction:column;padding-top:10px}agm-map[_ngcontent-%COMP%]{height:calc(72vw + 20px);width:calc(72vw + 20px)}.chat-time[_ngcontent-%COMP%]{padding:10px;font-weight:700;font-size:11px;color:#888}.corner-parent-left-image[_ngcontent-%COMP%]{position:absolute;right:-20px;width:20px;height:calc(100% - 20px);top:0;background:#e8e8f8}.corner-child-left-image[_ngcontent-%COMP%]{position:absolute;top:calc(100% - 20px);width:20px;height:20px;right:-20px}.corner-child-left-image[_ngcontent-%COMP%]   .child[_ngcontent-%COMP%]{border-right:21px solid #e8e8f8;border-bottom:15px solid transparent}.transparent-bg[_ngcontent-%COMP%]{background:transparent}.loader-text[_ngcontent-%COMP%]{padding:0 20px 0 10px!important}"]}),I);function j(t,n){1&t&&(g.Vb(0,"ion-title",15),g.Lc(1," Classic"),g.Ub())}function A(t,n){1&t&&g.Qb(0,"ion-searchbar",16)}function J(t,n){if(1&t&&(g.Vb(0,"ion-text",31),g.Lc(1),g.Ub()),2&t){var e=g.hc().$implicit;g.Db(1),g.Mc(e.time)}}function F(t,n){if(1&t&&(g.Vb(0,"ion-text",32),g.Lc(1),g.Ub()),2&t){var e=g.hc().$implicit;g.Db(1),g.Mc(e.past)}}function N(t,n){if(1&t&&(g.Vb(0,"ion-avatar",33),g.Lc(1),g.Ub()),2&t){var e=g.hc().$implicit;g.Db(1),g.Mc(e.count)}}function z(t,n){if(1&t){var e=g.Wb();g.Vb(0,"ion-item",19),g.dc("click",function(){g.Bc(e);var t=n.$implicit;return g.hc(2).goforChat(t)}),g.Vb(1,"ion-avatar",20),g.Qb(2,"ion-img",21),g.Ub(),g.Vb(3,"ion-label"),g.Vb(4,"div",22),g.Vb(5,"div",23),g.Vb(6,"h2",24),g.Lc(7),g.Ub(),g.Ub(),g.Ub(),g.Vb(8,"p",25),g.Lc(9),g.Ub(),g.Ub(),g.Vb(10,"div",26),g.Vb(11,"div",27),g.Jc(12,J,2,1,"ion-text",28),g.Jc(13,F,2,1,"ion-text",29),g.Ub(),g.Jc(14,N,2,1,"ion-avatar",30),g.Ub(),g.Ub()}if(2&t){var i=n.$implicit;g.Db(2),g.nc("src",i.image),g.Db(5),g.Nc("",i.name," "),g.Db(2),g.Mc(i.description),g.Db(3),g.nc("ngIf",i.time),g.Db(1),g.nc("ngIf",i.past),g.Db(1),g.nc("ngIf",i.count)}}function T(t,n){if(1&t&&(g.Vb(0,"ion-list",17),g.Jc(1,z,15,6,"ion-item",18),g.Ub()),2&t){var e=g.hc();g.Db(1),g.nc("ngForOf",e.chatData)}}function R(t,n){if(1&t&&(g.Vb(0,"ion-icon",36),g.Lc(1),g.Ub()),2&t){var e=g.hc().$implicit;g.oc("name",e.video),g.Db(1),g.Nc("",e.count," ")}}function q(t,n){if(1&t&&(g.Vb(0,"ion-icon",36),g.Lc(1),g.Ub()),2&t){var e=g.hc().$implicit;g.oc("name",e.phone),g.Db(1),g.Nc("",e.count," ")}}function S(t,n){if(1&t&&(g.Vb(0,"ion-item"),g.Vb(1,"ion-avatar",20),g.Qb(2,"ion-img",21),g.Ub(),g.Vb(3,"ion-label"),g.Vb(4,"div",22),g.Vb(5,"div",23),g.Vb(6,"h2",24),g.Lc(7),g.Ub(),g.Ub(),g.Ub(),g.Vb(8,"p",25),g.Lc(9),g.Ub(),g.Ub(),g.Vb(10,"div",26),g.Vb(11,"div",27),g.Jc(12,R,2,2,"ion-icon",35),g.Jc(13,q,2,2,"ion-icon",35),g.Ub(),g.Ub(),g.Ub()),2&t){var e=n.$implicit;g.Db(2),g.nc("src",e.image),g.Db(5),g.Nc("",e.name," "),g.Db(2),g.Mc(e.call),g.Db(3),g.nc("ngIf",e.video),g.Db(1),g.nc("ngIf",e.phone)}}function Q(t,n){if(1&t&&(g.Vb(0,"ion-list",17),g.Jc(1,S,14,5,"ion-item",34),g.Ub()),2&t){var e=g.hc();g.Db(1),g.nc("ngForOf",e.chatData)}}var $,B,E,H,W=[{path:"",component:($=function(){function n(e){t(this,n),this.modalCtrl=e,this.segmentTab="Chats",this.title=!0,this.chatData=[{name:"Jovenica Alba",image:"../../../../assets/clones/chat/chat/chat1.jpg",description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!",count:"2",time:"12:17",call:"(3) January 09/27/2019",video:"videocam"},{name:"Oliver",image:" ../../../../assets/clones/chat/chat/chat2.jpg",description:"Rahim: thanks!",time:"12:17",call:"(3) January 09/26/2019",video:"videocam"},{name:"George",image:" ../../../../assets/clones/chat/chat/chat3.jpg",description:"Kajor P: share your contact please!",count:"2",time:"Yesterday",call:"(1) January 09/26/2018",video:"videocam"},{name:"Harry",image:" ../../../../assets/clones/chat/chat/chat3.jpg",description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!",time:"Sunday",call:"(5) February 08/20/2018",video:"videocam"},{name:"Jack",image:" ../../../../assets/clones/chat/chat/chat5.jpg",description:"Yes! that's right call him right now.",past:"09/27/2015",call:"(4) February 28/20/2018",phone:"call"},{name:"Jacob",image:" ../../../../assets/clones/chat/chat/chat6.jpg",description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!",count:"1",past:"09/27/2015",call:"(4) February 28/20/2015",phone:"call"},{name:"Noah",image:" ../../../../assets/clones/chat/chat/chat7.jpg",description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!",past:"09/27/2015",call:"(3) February 28/20/2016",phone:"call"},{name:"Charlie",image:" ../../../../assets/clones/chat/chat/chat8.jpg",description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!",count:"6",past:"09/27/2015",call:"(3) December 28/20/2017",phone:"call"},{name:"Logan",image:" ../../../../assets/clones/chat/chat/chat1.jpg",description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!",past:"09/27/2015",call:"09/27/2015",phone:"call"},{name:"Harrison",image:" ../../../../assets/clones/chat/chat/chat2.jpg",description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!",past:"09/27/2015",call:"09/27/2015",video:"videocam"},{name:"Sebastian",image:" ../../../../assets/clones/chat/chat/chat3.jpg",description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!",past:"09/17/2016",call:"(3) December 28/20/2017",video:"videocam"},{name:"Zachary",image:" ../../../../assets/clones/chat/chat/chat3.jpg",description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!",past:"09/07/2017",call:"09/27/2015",video:"videocam"},{name:"Elijah",image:" ../../../../assets/clones/chat/chat/chat5.jpg",description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!",past:"09/09/2018",call:"09/27/2015",phone:"call"}]}return e(n,[{key:"ngOnInit",value:function(){}},{key:"segmentChanged",value:function(t){this.segmentTab=t.detail.value,console.log(this.segmentTab)}},{key:"goforChat",value:function(t){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.title=!0,t.next=3,this.modalCtrl.create({component:k});case 3:return n=t.sent,t.next=6,n.present();case 6:case"end":return t.stop()}},t,this)}))}},{key:"toggleSearchTitl",value:function(){this.title=!this.title}}]),n}(),$.\u0275fac=function(t){return new(t||$)(g.Pb(r.rb))},$.\u0275cmp=g.Jb({type:$,selectors:[["app-whatsapp"]],decls:28,vars:4,consts:[["slot","start"],["defaultHref","/clones-ui"],["name","search","expand","icon-only","color","light","mode","ios","slot","end",3,"click"],["src","assets/clones/chat/chat/chat.png","slot","end",1,"header_image"],["name","ellipsis-vertical","expand","icon-only","color","light","mode","md","slot","end"],["mode","md","color","light","text-start","",4,"ngIf"],["mode","ios","placeholder","Search your friend",4,"ngIf"],["mode","md",3,"ionChange"],["mode","md","value","Calls"],[1,"contentCenter"],["slot","end",1,"segment_Text"],["mode","md","value","Chats","checked",""],[1,"segmentCount"],["mode","md","value","group"],["no-padding","",4,"ngIf"],["mode","md","color","light","text-start",""],["mode","ios","placeholder","Search your friend"],["no-padding",""],[3,"click",4,"ngFor","ngForOf"],[3,"click"],["slot","start",1,"chatImage"],[3,"src"],[1,"withcount"],[1,"nameAvatar"],["color","light"],[1,"widthHalf"],["slot","end",1,"timeSlot"],[1,"timeEnd"],["slot","end","color","success","text-uppercase","",4,"ngIf"],["slot","end","color","medium",4,"ngIf"],["class","chatCount",4,"ngIf"],["slot","end","color","success","text-uppercase",""],["slot","end","color","medium"],[1,"chatCount"],[4,"ngFor","ngForOf"],["class","videocam","expand","icon-only","mode","ios",3,"name",4,"ngIf"],["expand","icon-only","mode","ios",1,"videocam",3,"name"]],template:function(t,n){1&t&&(g.Vb(0,"ion-header"),g.Vb(1,"ion-toolbar"),g.Vb(2,"ion-buttons",0),g.Qb(3,"ion-back-button",1),g.Ub(),g.Vb(4,"ion-icon",2),g.dc("click",function(){return n.toggleSearchTitl()}),g.Ub(),g.Qb(5,"ion-img",3),g.Qb(6,"ion-icon",4),g.Jc(7,j,2,0,"ion-title",5),g.Jc(8,A,1,0,"ion-searchbar",6),g.Ub(),g.Vb(9,"ion-toolbar"),g.Vb(10,"ion-segment",7),g.dc("ionChange",function(t){return n.segmentChanged(t)}),g.Vb(11,"ion-segment-button",8),g.Vb(12,"div",9),g.Vb(13,"ion-text",10),g.Lc(14,"Calls"),g.Ub(),g.Ub(),g.Ub(),g.Vb(15,"ion-segment-button",11),g.Vb(16,"div",9),g.Vb(17,"ion-text",10),g.Lc(18,"Chats"),g.Vb(19,"ion-avatar",12),g.Lc(20,"17"),g.Ub(),g.Ub(),g.Ub(),g.Ub(),g.Vb(21,"ion-segment-button",13),g.Vb(22,"div",9),g.Vb(23,"ion-text",10),g.Lc(24,"Contacts"),g.Ub(),g.Ub(),g.Ub(),g.Ub(),g.Ub(),g.Ub(),g.Vb(25,"ion-content"),g.Jc(26,T,2,1,"ion-list",14),g.Jc(27,Q,2,1,"ion-list",14),g.Ub()),2&t&&(g.Db(7),g.nc("ngIf",n.title),g.Db(1),g.nc("ngIf",!n.title),g.Db(18),g.nc("ngIf","Chats"==n.segmentTab),g.Db(1),g.nc("ngIf","Calls"==n.segmentTab))},directives:[r.z,r.mb,r.l,r.h,r.i,r.A,r.B,a.o,r.X,r.xb,r.Y,r.hb,r.g,r.u,r.kb,r.W,r.yb,r.K,a.n,r.D,r.J],styles:['.chatImage[_ngcontent-%COMP%]{width:50px;height:50px}.plusClass[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:25px;height:25px;background:#fff;border-radius:50%;right:15px;position:relative;transition:box-shadow .28s cubic-bezier(.4,0,.2,1),background-color 15ms linear,color 15ms linear;box-shadow:0 .5px 0 5px rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}ion-header[_ngcontent-%COMP%]:after{box-shadow:0 0 20px rgba(0,0,0,.5);background-image:none;left:0;bottom:0;background-position:left 0 top 0;position:absolute;width:100%;height:8px;content:""}ion-header[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%]{--background:#006257}.contentCenter[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}ion-segment-button[_ngcontent-%COMP%]{--color:#58938e!important;--color-checked:var(--ion-color-tertiary-contrast);border-bottom:0 solid hsla(0,0%,100%,.3)}.padding_right[_ngcontent-%COMP%]{padding-right:8px}.header_image[_ngcontent-%COMP%], ion-icon[_ngcontent-%COMP%]{width:1.5em;height:1.5em}.header_image[_ngcontent-%COMP%]{margin:0 18px}.tab-icon[_ngcontent-%COMP%]{font-size:20px}.withcount[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center}.chatCount[_ngcontent-%COMP%]{background:var(--ion-color-success);color:var(--background)}.chatCount[_ngcontent-%COMP%], .videocam[_ngcontent-%COMP%]{width:17px!important;height:17px!important;justify-content:center;align-items:center;display:flex;font-size:10px;font-weight:700;margin-left:8px}.videocam[_ngcontent-%COMP%]{color:#006257}.segmentCount[_ngcontent-%COMP%]{background:var(--ion-color-tertiary-contrast);width:17px!important;height:17px!important;justify-content:center;align-items:center;display:flex;font-size:10px;font-weight:700;color:#006257;margin-left:8px;padding:3px;box-sizing:content-box}h2[_ngcontent-%COMP%]{font-size:.84em;font-weight:700;color:rgba(56,58,62,.8901960784313725)}.timeEnd[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;padding-bottom:8px}.widthHalf[_ngcontent-%COMP%]{color:rgba(34,36,40,.6901960784313725);font-size:12px;font-weight:700}.nameAvatar[_ngcontent-%COMP%]{display:flex;align-items:center;width:50%}.nameAvatar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:.94em;font-weight:700}ion-text[_ngcontent-%COMP%]{font-size:10px}ion-text[_ngcontent-%COMP%], ion-text.segment_Text[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}ion-text.segment_Text[_ngcontent-%COMP%]{font-size:14px}.sc-ion-label-ios-h[_ngcontent-%COMP%]{height:44px;justify-content:center}.sc-ion-label-ios-h[_ngcontent-%COMP%], .timeSlot[_ngcontent-%COMP%]{display:flex;flex-direction:column}.timeSlot[_ngcontent-%COMP%]{align-items:flex-end}ion-searchbar[_ngcontent-%COMP%]{--placeholder-color:#fff;--color:#fff;height:35px!important}.list-ios[_ngcontent-%COMP%]{margin-bottom:0!important}.sc-ion-label-ios-s[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{margin-top:5px}.title-ios[_ngcontent-%COMP%]{height:40px!important;padding-top:12px;padding-left:50px;padding-bottom:10px}']}),$)}],K=((H=function n(){t(this,n)}).\u0275fac=function(t){return new(t||H)},H.\u0275mod=g.Nb({type:H}),H.\u0275inj=g.Mb({imports:[[s.j.forChild(W)],s.j]}),H),Y=((E=function n(){t(this,n)}).\u0275fac=function(t){return new(t||E)},E.\u0275mod=g.Nb({type:E}),E.\u0275inj=g.Mb({imports:[[a.c,c.h,r.nb]]}),E),X=((B=function n(){t(this,n)}).\u0275fac=function(t){return new(t||B)},B.\u0275mod=g.Nb({type:B}),B.\u0275inj=g.Mb({imports:[[a.c,c.h,r.nb,K,Y]]}),B)}}])}();