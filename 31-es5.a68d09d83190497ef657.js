!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{Rxp6:function(n,o,i){"use strict";i.r(o),i.d(o,"UberPageModule",function(){return U});var r=i("ofXK"),a=i("3Pt+"),l=i("TEn/"),c=i("tyNb"),s=i("mrSG"),b=i("Bfh1"),d=i("fXoL");function u(e,t){1&e&&(d.Vb(0,"ion-title"),d.Lc(1," Offline "),d.Ub())}function p(e,t){1&e&&(d.Vb(0,"ion-title"),d.Lc(1," Online "),d.Ub())}function g(e,t){1&e&&(d.Vb(0,"div"),d.Vb(1,"ion-item",5),d.Vb(2,"ion-avatar",6),d.Qb(3,"img",7),d.Ub(),d.Vb(4,"ion-label",8),d.Lc(5,"You are Offline"),d.Ub(),d.Ub(),d.Ub())}function f(e,t){1&e&&d.Qb(0,"div")}function m(e,t){1&e&&(d.Vb(0,"ion-footer"),d.Vb(1,"div",9),d.Vb(2,"ion-fab",10),d.Vb(3,"ion-fab-button"),d.Qb(4,"ion-icon",11),d.Ub(),d.Ub(),d.Vb(5,"ion-card",12),d.Vb(6,"ion-item"),d.Vb(7,"ion-avatar",0),d.Qb(8,"img",13),d.Ub(),d.Vb(9,"ion-label",14),d.Vb(10,"b"),d.Lc(11,"John Doe"),d.Ub(),d.Ub(),d.Vb(12,"span",15),d.Vb(13,"b"),d.Lc(14,"$325.00"),d.Ub(),d.Ub(),d.Ub(),d.Vb(15,"ion-card-content",16),d.Vb(16,"div",17),d.Vb(17,"div",18),d.Qb(18,"ion-icon",19),d.Vb(19,"ion-label",20),d.Lc(20,"10.2"),d.Ub(),d.Vb(21,"p",21),d.Lc(22,"Hours Online"),d.Ub(),d.Ub(),d.Vb(23,"div",18),d.Qb(24,"ion-icon",22),d.Vb(25,"ion-label",23),d.Lc(26,"30 KM"),d.Ub(),d.Vb(27,"p",21),d.Lc(28,"Total Distance"),d.Ub(),d.Ub(),d.Vb(29,"div",18),d.Qb(30,"ion-icon",19),d.Vb(31,"ion-label",20),d.Lc(32,"20"),d.Ub(),d.Vb(33,"p",21),d.Lc(34,"Total Jobs"),d.Ub(),d.Ub(),d.Ub(),d.Ub(),d.Ub(),d.Ub(),d.Ub())}function h(e,t){1&e&&(d.Vb(0,"ion-footer"),d.Vb(1,"div",24),d.Vb(2,"ion-fab",25),d.Vb(3,"ion-fab-button"),d.Qb(4,"ion-icon",11),d.Ub(),d.Ub(),d.Vb(5,"ion-card",26),d.Vb(6,"ion-card-header",27),d.Vb(7,"ion-thumbnail"),d.Qb(8,"img",28),d.Ub(),d.Vb(9,"div",29),d.Vb(10,"div"),d.Vb(11,"ion-label"),d.Lc(12,"Esther Berry"),d.Ub(),d.Ub(),d.Vb(13,"div",30),d.Vb(14,"ion-button",31),d.Lc(15," Apple pay"),d.Ub(),d.Vb(16,"ion-button",31),d.Lc(17," Discount"),d.Ub(),d.Ub(),d.Ub(),d.Vb(18,"div",32),d.Vb(19,"div"),d.Vb(20,"ion-label",8),d.Lc(21," $25.00"),d.Ub(),d.Ub(),d.Vb(22,"div"),d.Vb(23,"ion-label",33),d.Lc(24,"2.2 KM"),d.Ub(),d.Ub(),d.Ub(),d.Ub(),d.Vb(25,"ion-card-content",34),d.Vb(26,"div",35),d.Vb(27,"div",36),d.Lc(28,"Pick Up"),d.Ub(),d.Vb(29,"ion-label",37),d.Lc(30,"7958 Swift Village"),d.Ub(),d.Ub(),d.Vb(31,"div",35),d.Vb(32,"div",36),d.Lc(33,"Drop Off"),d.Ub(),d.Vb(34,"ion-label",37),d.Lc(35,"105 William, US"),d.Ub(),d.Ub(),d.Vb(36,"div"),d.Vb(37,"div",38),d.Vb(38,"ion-button",39),d.Lc(39,"Ignore"),d.Ub(),d.Vb(40,"ion-button",40),d.Lc(41,"Accept"),d.Ub(),d.Ub(),d.Vb(42,"div",41),d.Vb(43,"ion-label",42),d.Lc(44,"View All Requests"),d.Ub(),d.Ub(),d.Ub(),d.Ub(),d.Ub(),d.Ub(),d.Ub())}var y,x,C,v=[{path:"",component:(y=function(){function n(t,o,i,r){e(this,n),this.geolocation=t,this.menuCtrl=o,this.alertController=i,this.activeRouter=r,this.markerUrl="../../../assets/clones/map/markerPin.png",this.zoom=12,this.lat=26.8549,this.lng=75.8243,this.driveStatus=!1,this.userCard=!1,this.renderOpts={suppressMarkers:!0},this.directionOptions={origin:{icon:"../../../assets/clones/map/Google-Car.png"},destination:{icon:"../../../assets/clones/map/distinationsMaker.png",opacity:.8}},this.style=[{elementType:"geometry",stylers:[{color:"#f5f5f5"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f5f5"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#bdbdbd"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#ffffff"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#dadada"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#c9c9c9"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]}],this.driveStatus=!1,this.userCard=!1,this.menuCtrl.enable(!0)}var o,i,r;return o=n,(i=[{key:"ngOnInit",value:function(){this.getDirection(),console.log("ngonit")}},{key:"ionViewDidEnter",value:function(){var e=this;console.log("ionViewDidEnter"),this.activeRouter.params.subscribe(function(t){console.log(t),t&&(e.userCard=!!t.userCard&&t.userCard)})}},{key:"driverStatusChange",value:function(e,t){var n=this;this.driveStatus?(console.log("true"),setTimeout(function(){n.presentAlertConfirm()},2e3)):this.userCard=!1}},{key:"presentAlertConfirm",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t,n=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alertController.create({header:"Confirm Request!",message:"You have a new Pickup request",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:function(e){}},{text:"Okay",handler:function(){n.userCard=!0}}]});case 2:return t=e.sent,e.next=5,t.present();case 5:case"end":return e.stop()}},e,this)}))}},{key:"getDirection",value:function(){console.log("directions"),this.origin={lat:26.857114,lng:75.8127086},this.destination={lat:27.357114,lng:76.3127086},console.log("origin",this.origin,this.destination)}},{key:"requestAccept",value:function(){}},{key:"requestIgnore",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}))}},{key:"getcurrentLocations",value:function(){var e=this;this.geolocation.getCurrentPosition().then(function(t){console.log("resp",t),e.lat=t.coords.latitude,e.lng=t.coords.longitude}).catch(function(e){console.log("Error getting location",e)}),this.geolocation.watchPosition().subscribe(function(e){console.log("data",e)})}}])&&t(o.prototype,i),r&&t(o,r),n}(),y.\u0275fac=function(e){return new(e||y)(d.Pb(b.a),d.Pb(l.qb),d.Pb(l.b),d.Pb(c.a))},y.\u0275cmp=d.Jb({type:y,selectors:[["app-uber"]],decls:12,vars:7,consts:[["slot","start"],["defaultHref","/clones-ui"],[4,"ngIf"],["slot","end","color","secondary",3,"ngModel","ngModelChange"],["slot","fixed"],["color","secondary","lines","none"],["slot","start",1,"nightModeIcon"],["src","../../../assets/clones/map/nightMode.png"],[1,"textBold"],[1,"driverCardBottom"],["vertical","bottom","horizontal","end","slot","fixed","color","dark",1,"driverlocationIcon"],["name","locate",1,"locationIcon"],["no-padding","","no-margin","","slot","fixed",1,"driverCard","fixed"],["src","../../../assets/clones/map/driver.jpeg"],["text-capitalize",""],["fill","outline","slot","end"],["color","primary","no-margin",""],[1,"cardContent"],[1,"driverDetails"],["name","time",1,"driverStatusIcons"],[1,"textColor","textBold","detailsLabel"],["text-uppercase","",1,"detailText"],["name","speedometer",1,"driverStatusIcons"],["text-uppercase","",1,"textColor","textBold","detailsLabel"],[1,"relative"],["vertical","bottom","horizontal","end","slot","fixed","color","dark","padding-bottom","",1,"userlocationIcon"],["slot","fixed",1,"userCard"],["color","light",1,"userCardHeader","dFlex"],["src","../../../assets/clones/map/user.jpeg",1,"userIcon"],["padding-horizontal",""],["align-items-center","",1,"dFlex"],["size","small","color","primary","shape","round","text-capitalize","",1,"card-Chip","textBold","boxShadow"],["float-right","","padding-start",""],[1,"textBold","lightTextColor"],["color","light","no-margin","",1,"userCard-conetnt"],[1,"borderBottom","paddingVertical"],["text-uppercase","",1,"detailText","fontSmall"],[1,"detailsLabel","textColor","textBold"],["padding-start","",1,"userCardFooter"],["color","light","size","small",1,"textBold","boxShadow"],["color","firebase","size","small",1,"textBold","boxShadow"],["no-padding","",1,"requestAll"],["color","dark",1,"textBold","boxShadow"]],template:function(e,t){1&e&&(d.Vb(0,"ion-header"),d.Vb(1,"ion-toolbar"),d.Vb(2,"ion-buttons",0),d.Qb(3,"ion-back-button",1),d.Ub(),d.Jc(4,u,2,0,"ion-title",2),d.Jc(5,p,2,0,"ion-title",2),d.Vb(6,"ion-toggle",3),d.dc("ngModelChange",function(e){return t.driveStatus=e}),d.Ub(),d.Ub(),d.Ub(),d.Vb(7,"ion-content",4),d.Jc(8,g,6,0,"div",2),d.Jc(9,f,1,0,"div",2),d.Ub(),d.Jc(10,m,35,0,"ion-footer",2),d.Jc(11,h,45,0,"ion-footer",2)),2&e&&(d.Db(4),d.nc("ngIf",!t.driveStatus),d.Db(1),d.nc("ngIf",t.driveStatus),d.Db(1),d.nc("ngModel",t.driveStatus),d.Db(2),d.nc("ngIf",!t.driveStatus),d.Db(1),d.nc("ngIf",t.driveStatus),d.Db(1),d.nc("ngIf",!t.driveStatus),d.Db(1),d.nc("ngIf",t.driveStatus&&t.userCard))},directives:[l.z,l.mb,l.l,l.h,l.i,r.o,l.lb,l.c,a.l,a.o,l.u,l.kb,l.D,l.g,l.J,l.x,l.v,l.w,l.A,l.m,l.n,l.o,l.jb,l.k],styles:[".welcome-card[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{max-height:35vh;overflow:hidden}.fixed[_ngcontent-%COMP%]{position:fixed}.textBold[_ngcontent-%COMP%]{font-weight:700}.dFlex[_ngcontent-%COMP%]{display:flex}.borderBottom[_ngcontent-%COMP%]{border-bottom:1px solid #e8e4e4}.textColor[_ngcontent-%COMP%]{color:#000}agm-map[_ngcontent-%COMP%]{height:calc(100vh - 64px)}agm-map[_ngcontent-%COMP%]   .gm-svpc[_ngcontent-%COMP%]{display:none}.gmnoprint[_ngcontent-%COMP%]{display:none!important}.nightModeIcon[_ngcontent-%COMP%]{border:3px dotted #000;padding:3px}.driverlocationIcon[_ngcontent-%COMP%]{bottom:190px}.driverlocationIcon[_ngcontent-%COMP%]   .locationIcon[_ngcontent-%COMP%]{font-size:26px}.driverlocationIcon[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%]{--background:#fff;--color:#000;height:40px;width:40px}.driverCard[_ngcontent-%COMP%]{position:absolute;width:100%;bottom:-7px;background:#fff;border-radius:11px;padding-bottom:5%}.cardContent[_ngcontent-%COMP%]{background:#ffd524;display:flex;justify-content:space-around;border-radius:6px;padding:3%}.cardContent[_ngcontent-%COMP%]   .driverDetails[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}.cardContent[_ngcontent-%COMP%]   .driverStatusIcons[_ngcontent-%COMP%]{font-size:26px;color:#c3a527}.cardContent[_ngcontent-%COMP%]   .detailText[_ngcontent-%COMP%]{color:#c3a527;font-size:10px}.cardContent[_ngcontent-%COMP%]   .detailsLabel[_ngcontent-%COMP%]{font-size:18px}.userlocationIcon[_ngcontent-%COMP%]{bottom:300px}.userlocationIcon[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%]{--background:#fff;--color:#000;height:40px;width:40px}.userCard[_ngcontent-%COMP%]{position:absolute;width:94%;bottom:0;background:#fff;border-radius:11px;padding-bottom:5%;margin:10px;-webkit-animation:mymove 2s;animation:mymove 2s}.userCard[_ngcontent-%COMP%]   .userCardHeader[_ngcontent-%COMP%]{box-shadow:2px 2px 2px #e8e4e4}.userCard[_ngcontent-%COMP%]   .userDetails[_ngcontent-%COMP%]{background:#ffd524;border-radius:90px;display:flex;height:21px;padding:3px 14px 0 12px}.userCard[_ngcontent-%COMP%]   .userIcon[_ngcontent-%COMP%]{margin:2% 2% 2% 9%;border:1px solid #b9b1b1}.userCard[_ngcontent-%COMP%]   .userCardFooter[_ngcontent-%COMP%]{float:right}.userCard[_ngcontent-%COMP%]   .paddingVertical[_ngcontent-%COMP%]{padding:10px 0}.sc-ion-modal-md-h[_ngcontent-%COMP%]{margin-top:13%}.card-Chip[_ngcontent-%COMP%]{font-size:11px;--border-radius:18px;height:1.8em}.requestAll[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:center}.userCard-conetnt[_ngcontent-%COMP%]{padding-bottom:0;padding-top:10px}@-webkit-keyframes mymove{0%{bottom:-200px}to{bottom:20px}}@keyframes mymove{0%{bottom:-200px}to{bottom:20px}}"]}),y)}],V=((C=function t(){e(this,t)}).\u0275fac=function(e){return new(e||C)},C.\u0275mod=d.Nb({type:C}),C.\u0275inj=d.Mb({imports:[[c.j.forChild(v)],c.j]}),C),U=((x=function t(){e(this,t)}).\u0275fac=function(e){return new(e||x)},x.\u0275mod=d.Nb({type:x}),x.\u0275inj=d.Mb({imports:[[r.c,a.h,l.nb,V]]}),x)}}])}();