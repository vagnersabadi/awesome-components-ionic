(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-login-login-background-video-login-background-video-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/login/login-background-video/login-background-video.page.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/login/login-background-video/login-background-video.page.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\"  class=\"ion-padding ion-text-center\">\r\n  <img class=\"logo\" src=\"assets/yannbf/img/logo/logo-canon.png\" />\r\n  <div class=\"buttons\">\r\n    <ion-button class=\"login-button facebook\" (click)=\"goToLogin()\">Continue with Facebook</ion-button>\r\n    <ion-button class=\"login-button google\" (click)=\"goToLogin()\">Login</ion-button>\r\n    <ion-button class=\"login-button\" color=\"dark\" (click)=\"goToSignup()\">Create account</ion-button>\r\n  </div>\r\n  <video #player playsinline autoplay muted loop poster=\"assets/yannbf/video/video-cover.jpg\" id=\"bgvid\">\r\n    <source src=\"assets/yannbf/video/background-480.mp4\" type=\"video/mp4\"> Your browser does not support the video tag.\r\n  </video>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/yannbf/components/login/login-background-video/login-background-video.module.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/login/login-background-video/login-background-video.module.ts ***!
  \*******************************************************************************************************/
/*! exports provided: LoginBackgroundVideoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginBackgroundVideoPageModule", function() { return LoginBackgroundVideoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_background_video_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-background-video.page */ "./src/app/pages/yannbf/components/login/login-background-video/login-background-video.page.ts");







const routes = [
    {
        path: '',
        component: _login_background_video_page__WEBPACK_IMPORTED_MODULE_6__["LoginBackgroundVideoPage"]
    }
];
let LoginBackgroundVideoPageModule = class LoginBackgroundVideoPageModule {
};
LoginBackgroundVideoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_login_background_video_page__WEBPACK_IMPORTED_MODULE_6__["LoginBackgroundVideoPage"]]
    })
], LoginBackgroundVideoPageModule);



/***/ }),

/***/ "./src/app/pages/yannbf/components/login/login-background-video/login-background-video.page.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/login/login-background-video/login-background-video.page.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: transparent !important;\n}\n\nion-content {\n  --background: none;\n  background-position: center top;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\nvideo#bgvid {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  min-width: 100%;\n  min-height: 100%;\n  width: auto;\n  height: auto;\n  z-index: -100;\n  transform: translateX(-50%) translateY(-50%);\n  background-size: cover;\n}\n\n.logo {\n  width: 70%;\n  height: auto;\n  margin: 0 auto;\n  padding-top: 50px;\n}\n\n.buttons {\n  text-align: center;\n  position: absolute;\n  bottom: 0;\n  padding-bottom: 10px;\n  width: 90%;\n  transition: all 1s ease;\n}\n\n.buttons ion-button {\n  --color: white;\n}\n\n.buttons .login-button {\n  width: 100%;\n  height: 3rem;\n  font-size: 1.2em;\n  font-weight: bold;\n  text-transform: none !important;\n}\n\n.buttons .facebook {\n  --background: rgba(59, 89, 152, 0.7) !important;\n}\n\n.buttons .facebook.activated {\n  --background: rgba(59, 89, 152, 1) !important;\n}\n\n.buttons .google {\n  --background: rgba(219, 68, 55, 0.7) !important;\n}\n\n.buttons .google.activated {\n  --background: rgba(219, 68, 55, 1) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbG9naW4vbG9naW4tYmFja2dyb3VuZC12aWRlby9DOlxcVXNlcnNcXHNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZXRvc1xcX2lvbmljXFxpb25pYzQtY29tcG9uZW50cy9zcmNcXGFwcFxccGFnZXNcXHlhbm5iZlxcY29tcG9uZW50c1xcbG9naW5cXGxvZ2luLWJhY2tncm91bmQtdmlkZW9cXGxvZ2luLWJhY2tncm91bmQtdmlkZW8ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy9sb2dpbi9sb2dpbi1iYWNrZ3JvdW5kLXZpZGVvL2xvZ2luLWJhY2tncm91bmQtdmlkZW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQUE7QUNDRjs7QURDQTtFQUNFLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDRUY7O0FEQ0E7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw0Q0FBQTtFQUNBLHNCQUFBO0FDRUY7O0FEQUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0dGOztBREFBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQ0dGOztBRERFO0VBQ0UsY0FBQTtBQ0dKOztBREFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUNFSjs7QURBRTtFQUNFLCtDQUFBO0FDRUo7O0FEREk7RUFDRSw2Q0FBQTtBQ0dOOztBREFFO0VBQ0UsK0NBQUE7QUNFSjs7QURESTtFQUNFLDZDQUFBO0FDR04iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy9sb2dpbi9sb2dpbi1iYWNrZ3JvdW5kLXZpZGVvL2xvZ2luLWJhY2tncm91bmQtdmlkZW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG52aWRlbyNiZ3ZpZCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgei1pbmRleDogLTEwMDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5sb2dvIHtcclxuICB3aWR0aDogNzAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nLXRvcDogNTBweDtcclxufVxyXG5cclxuLmJ1dHRvbnMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XHJcblxyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgLS1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAubG9naW4tYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmZhY2Vib29rIHtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiYSg1OSwgODksIDE1MiwgMC43KSAhaW1wb3J0YW50O1xyXG4gICAgJi5hY3RpdmF0ZWQge1xyXG4gICAgICAtLWJhY2tncm91bmQ6IHJnYmEoNTksIDg5LCAxNTIsIDEpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5nb29nbGUge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDIxOSwgNjgsIDU1LCAwLjcpICFpbXBvcnRhbnQ7XHJcbiAgICAmLmFjdGl2YXRlZCB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogcmdiYSgyMTksIDY4LCA1NSwgMSkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG52aWRlbyNiZ3ZpZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICB6LWluZGV4OiAtMTAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmxvZ28ge1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn1cblxuLmJ1dHRvbnMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgd2lkdGg6IDkwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XG59XG4uYnV0dG9ucyBpb24tYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG4uYnV0dG9ucyAubG9naW4tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogM3JlbTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG59XG4uYnV0dG9ucyAuZmFjZWJvb2sge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoNTksIDg5LCAxNTIsIDAuNykgIWltcG9ydGFudDtcbn1cbi5idXR0b25zIC5mYWNlYm9vay5hY3RpdmF0ZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoNTksIDg5LCAxNTIsIDEpICFpbXBvcnRhbnQ7XG59XG4uYnV0dG9ucyAuZ29vZ2xlIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDIxOSwgNjgsIDU1LCAwLjcpICFpbXBvcnRhbnQ7XG59XG4uYnV0dG9ucyAuZ29vZ2xlLmFjdGl2YXRlZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyMTksIDY4LCA1NSwgMSkgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/yannbf/components/login/login-background-video/login-background-video.page.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/login/login-background-video/login-background-video.page.ts ***!
  \*****************************************************************************************************/
/*! exports provided: LoginBackgroundVideoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginBackgroundVideoPage", function() { return LoginBackgroundVideoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoginBackgroundVideoPage = class LoginBackgroundVideoPage {
    constructor() { }
    ngOnInit() {
    }
    // It's interesting to remove the src and put it back
    // when entering and leaving the page so there are no memory leaks.
    ionViewWillLeave() {
        // the .nativeElement property of the ViewChild is the reference to the tag <video>
        this.player.nativeElement.src = '';
        this.player.nativeElement.load();
    }
    ionViewWillEnter() {
        this.player.nativeElement.src = 'assets/yannbf/video/background-480.mp4';
        this.player.nativeElement.load();
    }
    ionViewDidLoad() {
        console.log('Hello LoginBackgroundVideo Page');
    }
    goToSignup() {
        console.log('Signup clicked');
    }
    goToLogin() {
        console.log('Login clicked');
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('player', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], LoginBackgroundVideoPage.prototype, "player", void 0);
LoginBackgroundVideoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-background-video',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login-background-video.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/login/login-background-video/login-background-video.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login-background-video.page.scss */ "./src/app/pages/yannbf/components/login/login-background-video/login-background-video.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LoginBackgroundVideoPage);



/***/ })

}]);
//# sourceMappingURL=pages-yannbf-components-login-login-background-video-login-background-video-module-es2015.js.map