(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{Rxp6:function(e,t,o){"use strict";o.r(t),o.d(t,"UberPageModule",function(){return C});var n=o("ofXK"),i=o("3Pt+"),r=o("TEn/"),a=o("tyNb"),l=o("mrSG"),s=o("Bfh1"),c=o("fXoL");function b(e,t){1&e&&(c.Vb(0,"ion-title"),c.Lc(1," Offline "),c.Ub())}function d(e,t){1&e&&(c.Vb(0,"ion-title"),c.Lc(1," Online "),c.Ub())}function p(e,t){1&e&&(c.Vb(0,"div"),c.Vb(1,"ion-item",5),c.Vb(2,"ion-avatar",6),c.Qb(3,"img",7),c.Ub(),c.Vb(4,"ion-label",8),c.Lc(5,"You are Offline"),c.Ub(),c.Ub(),c.Ub())}function g(e,t){1&e&&c.Qb(0,"div")}function u(e,t){1&e&&(c.Vb(0,"ion-footer"),c.Vb(1,"div",9),c.Vb(2,"ion-fab",10),c.Vb(3,"ion-fab-button"),c.Qb(4,"ion-icon",11),c.Ub(),c.Ub(),c.Vb(5,"ion-card",12),c.Vb(6,"ion-item"),c.Vb(7,"ion-avatar",0),c.Qb(8,"img",13),c.Ub(),c.Vb(9,"ion-label",14),c.Vb(10,"b"),c.Lc(11,"John Doe"),c.Ub(),c.Ub(),c.Vb(12,"span",15),c.Vb(13,"b"),c.Lc(14,"$325.00"),c.Ub(),c.Ub(),c.Ub(),c.Vb(15,"ion-card-content",16),c.Vb(16,"div",17),c.Vb(17,"div",18),c.Qb(18,"ion-icon",19),c.Vb(19,"ion-label",20),c.Lc(20,"10.2"),c.Ub(),c.Vb(21,"p",21),c.Lc(22,"Hours Online"),c.Ub(),c.Ub(),c.Vb(23,"div",18),c.Qb(24,"ion-icon",22),c.Vb(25,"ion-label",23),c.Lc(26,"30 KM"),c.Ub(),c.Vb(27,"p",21),c.Lc(28,"Total Distance"),c.Ub(),c.Ub(),c.Vb(29,"div",18),c.Qb(30,"ion-icon",19),c.Vb(31,"ion-label",20),c.Lc(32,"20"),c.Ub(),c.Vb(33,"p",21),c.Lc(34,"Total Jobs"),c.Ub(),c.Ub(),c.Ub(),c.Ub(),c.Ub(),c.Ub(),c.Ub())}function f(e,t){1&e&&(c.Vb(0,"ion-footer"),c.Vb(1,"div",24),c.Vb(2,"ion-fab",25),c.Vb(3,"ion-fab-button"),c.Qb(4,"ion-icon",11),c.Ub(),c.Ub(),c.Vb(5,"ion-card",26),c.Vb(6,"ion-card-header",27),c.Vb(7,"ion-thumbnail"),c.Qb(8,"img",28),c.Ub(),c.Vb(9,"div",29),c.Vb(10,"div"),c.Vb(11,"ion-label"),c.Lc(12,"Esther Berry"),c.Ub(),c.Ub(),c.Vb(13,"div",30),c.Vb(14,"ion-button",31),c.Lc(15," Apple pay"),c.Ub(),c.Vb(16,"ion-button",31),c.Lc(17," Discount"),c.Ub(),c.Ub(),c.Ub(),c.Vb(18,"div",32),c.Vb(19,"div"),c.Vb(20,"ion-label",8),c.Lc(21," $25.00"),c.Ub(),c.Ub(),c.Vb(22,"div"),c.Vb(23,"ion-label",33),c.Lc(24,"2.2 KM"),c.Ub(),c.Ub(),c.Ub(),c.Ub(),c.Vb(25,"ion-card-content",34),c.Vb(26,"div",35),c.Vb(27,"div",36),c.Lc(28,"Pick Up"),c.Ub(),c.Vb(29,"ion-label",37),c.Lc(30,"7958 Swift Village"),c.Ub(),c.Ub(),c.Vb(31,"div",35),c.Vb(32,"div",36),c.Lc(33,"Drop Off"),c.Ub(),c.Vb(34,"ion-label",37),c.Lc(35,"105 William, US"),c.Ub(),c.Ub(),c.Vb(36,"div"),c.Vb(37,"div",38),c.Vb(38,"ion-button",39),c.Lc(39,"Ignore"),c.Ub(),c.Vb(40,"ion-button",40),c.Lc(41,"Accept"),c.Ub(),c.Ub(),c.Vb(42,"div",41),c.Vb(43,"ion-label",42),c.Lc(44,"View All Requests"),c.Ub(),c.Ub(),c.Ub(),c.Ub(),c.Ub(),c.Ub(),c.Ub())}const m=[{path:"",component:(()=>{class e{constructor(e,t,o,n){this.geolocation=e,this.menuCtrl=t,this.alertController=o,this.activeRouter=n,this.markerUrl="../../../assets/clones/map/markerPin.png",this.zoom=12,this.lat=26.8549,this.lng=75.8243,this.driveStatus=!1,this.userCard=!1,this.renderOpts={suppressMarkers:!0},this.directionOptions={origin:{icon:"../../../assets/clones/map/Google-Car.png"},destination:{icon:"../../../assets/clones/map/distinationsMaker.png",opacity:.8}},this.style=[{elementType:"geometry",stylers:[{color:"#f5f5f5"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f5f5"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#bdbdbd"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#ffffff"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#dadada"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#c9c9c9"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]}],this.driveStatus=!1,this.userCard=!1,this.menuCtrl.enable(!0)}ngOnInit(){this.getDirection(),console.log("ngonit")}ionViewDidEnter(){console.log("ionViewDidEnter"),this.activeRouter.params.subscribe(e=>{console.log(e),e&&(this.userCard=!!e.userCard&&e.userCard)})}driverStatusChange(e,t){this.driveStatus?(console.log("true"),setTimeout(()=>{this.presentAlertConfirm()},2e3)):this.userCard=!1}presentAlertConfirm(){return Object(l.a)(this,void 0,void 0,function*(){const e=yield this.alertController.create({header:"Confirm Request!",message:"You have a new Pickup request",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:e=>{}},{text:"Okay",handler:()=>{this.userCard=!0}}]});yield e.present()})}getDirection(){console.log("directions"),this.origin={lat:26.857114,lng:75.8127086},this.destination={lat:27.357114,lng:76.3127086},console.log("origin",this.origin,this.destination)}requestAccept(){}requestIgnore(){return Object(l.a)(this,void 0,void 0,function*(){})}getcurrentLocations(){this.geolocation.getCurrentPosition().then(e=>{console.log("resp",e),this.lat=e.coords.latitude,this.lng=e.coords.longitude}).catch(e=>{console.log("Error getting location",e)}),this.geolocation.watchPosition().subscribe(e=>{console.log("data",e)})}}return e.\u0275fac=function(t){return new(t||e)(c.Pb(s.a),c.Pb(r.qb),c.Pb(r.b),c.Pb(a.a))},e.\u0275cmp=c.Jb({type:e,selectors:[["app-uber"]],decls:12,vars:7,consts:[["slot","start"],["defaultHref","/clones-ui"],[4,"ngIf"],["slot","end","color","secondary",3,"ngModel","ngModelChange"],["slot","fixed"],["color","secondary","lines","none"],["slot","start",1,"nightModeIcon"],["src","../../../assets/clones/map/nightMode.png"],[1,"textBold"],[1,"driverCardBottom"],["vertical","bottom","horizontal","end","slot","fixed","color","dark",1,"driverlocationIcon"],["name","locate",1,"locationIcon"],["no-padding","","no-margin","","slot","fixed",1,"driverCard","fixed"],["src","../../../assets/clones/map/driver.jpeg"],["text-capitalize",""],["fill","outline","slot","end"],["color","primary","no-margin",""],[1,"cardContent"],[1,"driverDetails"],["name","time",1,"driverStatusIcons"],[1,"textColor","textBold","detailsLabel"],["text-uppercase","",1,"detailText"],["name","speedometer",1,"driverStatusIcons"],["text-uppercase","",1,"textColor","textBold","detailsLabel"],[1,"relative"],["vertical","bottom","horizontal","end","slot","fixed","color","dark","padding-bottom","",1,"userlocationIcon"],["slot","fixed",1,"userCard"],["color","light",1,"userCardHeader","dFlex"],["src","../../../assets/clones/map/user.jpeg",1,"userIcon"],["padding-horizontal",""],["align-items-center","",1,"dFlex"],["size","small","color","primary","shape","round","text-capitalize","",1,"card-Chip","textBold","boxShadow"],["float-right","","padding-start",""],[1,"textBold","lightTextColor"],["color","light","no-margin","",1,"userCard-conetnt"],[1,"borderBottom","paddingVertical"],["text-uppercase","",1,"detailText","fontSmall"],[1,"detailsLabel","textColor","textBold"],["padding-start","",1,"userCardFooter"],["color","light","size","small",1,"textBold","boxShadow"],["color","firebase","size","small",1,"textBold","boxShadow"],["no-padding","",1,"requestAll"],["color","dark",1,"textBold","boxShadow"]],template:function(e,t){1&e&&(c.Vb(0,"ion-header"),c.Vb(1,"ion-toolbar"),c.Vb(2,"ion-buttons",0),c.Qb(3,"ion-back-button",1),c.Ub(),c.Jc(4,b,2,0,"ion-title",2),c.Jc(5,d,2,0,"ion-title",2),c.Vb(6,"ion-toggle",3),c.dc("ngModelChange",function(e){return t.driveStatus=e}),c.Ub(),c.Ub(),c.Ub(),c.Vb(7,"ion-content",4),c.Jc(8,p,6,0,"div",2),c.Jc(9,g,1,0,"div",2),c.Ub(),c.Jc(10,u,35,0,"ion-footer",2),c.Jc(11,f,45,0,"ion-footer",2)),2&e&&(c.Db(4),c.nc("ngIf",!t.driveStatus),c.Db(1),c.nc("ngIf",t.driveStatus),c.Db(1),c.nc("ngModel",t.driveStatus),c.Db(2),c.nc("ngIf",!t.driveStatus),c.Db(1),c.nc("ngIf",t.driveStatus),c.Db(1),c.nc("ngIf",!t.driveStatus),c.Db(1),c.nc("ngIf",t.driveStatus&&t.userCard))},directives:[r.z,r.mb,r.l,r.h,r.i,n.o,r.lb,r.c,i.l,i.o,r.u,r.kb,r.D,r.g,r.J,r.x,r.v,r.w,r.A,r.m,r.n,r.o,r.jb,r.k],styles:[".welcome-card[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{max-height:35vh;overflow:hidden}.fixed[_ngcontent-%COMP%]{position:fixed}.textBold[_ngcontent-%COMP%]{font-weight:700}.dFlex[_ngcontent-%COMP%]{display:flex}.borderBottom[_ngcontent-%COMP%]{border-bottom:1px solid #e8e4e4}.textColor[_ngcontent-%COMP%]{color:#000}agm-map[_ngcontent-%COMP%]{height:calc(100vh - 64px)}agm-map[_ngcontent-%COMP%]   .gm-svpc[_ngcontent-%COMP%]{display:none}.gmnoprint[_ngcontent-%COMP%]{display:none!important}.nightModeIcon[_ngcontent-%COMP%]{border:3px dotted #000;padding:3px}.driverlocationIcon[_ngcontent-%COMP%]{bottom:190px}.driverlocationIcon[_ngcontent-%COMP%]   .locationIcon[_ngcontent-%COMP%]{font-size:26px}.driverlocationIcon[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%]{--background:#fff;--color:#000;height:40px;width:40px}.driverCard[_ngcontent-%COMP%]{position:absolute;width:100%;bottom:-7px;background:#fff;border-radius:11px;padding-bottom:5%}.cardContent[_ngcontent-%COMP%]{background:#ffd524;display:flex;justify-content:space-around;border-radius:6px;padding:3%}.cardContent[_ngcontent-%COMP%]   .driverDetails[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}.cardContent[_ngcontent-%COMP%]   .driverStatusIcons[_ngcontent-%COMP%]{font-size:26px;color:#c3a527}.cardContent[_ngcontent-%COMP%]   .detailText[_ngcontent-%COMP%]{color:#c3a527;font-size:10px}.cardContent[_ngcontent-%COMP%]   .detailsLabel[_ngcontent-%COMP%]{font-size:18px}.userlocationIcon[_ngcontent-%COMP%]{bottom:300px}.userlocationIcon[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%]{--background:#fff;--color:#000;height:40px;width:40px}.userCard[_ngcontent-%COMP%]{position:absolute;width:94%;bottom:0;background:#fff;border-radius:11px;padding-bottom:5%;margin:10px;-webkit-animation:mymove 2s;animation:mymove 2s}.userCard[_ngcontent-%COMP%]   .userCardHeader[_ngcontent-%COMP%]{box-shadow:2px 2px 2px #e8e4e4}.userCard[_ngcontent-%COMP%]   .userDetails[_ngcontent-%COMP%]{background:#ffd524;border-radius:90px;display:flex;height:21px;padding:3px 14px 0 12px}.userCard[_ngcontent-%COMP%]   .userIcon[_ngcontent-%COMP%]{margin:2% 2% 2% 9%;border:1px solid #b9b1b1}.userCard[_ngcontent-%COMP%]   .userCardFooter[_ngcontent-%COMP%]{float:right}.userCard[_ngcontent-%COMP%]   .paddingVertical[_ngcontent-%COMP%]{padding:10px 0}.sc-ion-modal-md-h[_ngcontent-%COMP%]{margin-top:13%}.card-Chip[_ngcontent-%COMP%]{font-size:11px;--border-radius:18px;height:1.8em}.requestAll[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:center}.userCard-conetnt[_ngcontent-%COMP%]{padding-bottom:0;padding-top:10px}@-webkit-keyframes mymove{0%{bottom:-200px}to{bottom:20px}}@keyframes mymove{0%{bottom:-200px}to{bottom:20px}}"]}),e})()}];let h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.Nb({type:e}),e.\u0275inj=c.Mb({imports:[[a.j.forChild(m)],a.j]}),e})(),C=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.Nb({type:e}),e.\u0275inj=c.Mb({imports:[[n.c,i.h,r.nb,h]]}),e})()}}]);