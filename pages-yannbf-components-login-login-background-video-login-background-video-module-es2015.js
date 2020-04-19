(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-login-login-background-video-login-background-video-module"],{

/***/ "./src/app/pages/yannbf/components/login/login-background-video/login-background-video.module.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/login/login-background-video/login-background-video.module.ts ***!
  \*******************************************************************************************************/
/*! exports provided: LoginBackgroundVideoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginBackgroundVideoPageModule", function() { return LoginBackgroundVideoPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_background_video_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-background-video.page */ "./src/app/pages/yannbf/components/login/login-background-video/login-background-video.page.ts");








const routes = [
    {
        path: '',
        component: _login_background_video_page__WEBPACK_IMPORTED_MODULE_5__["LoginBackgroundVideoPage"]
    }
];
class LoginBackgroundVideoPageModule {
}
LoginBackgroundVideoPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoginBackgroundVideoPageModule });
LoginBackgroundVideoPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoginBackgroundVideoPageModule_Factory(t) { return new (t || LoginBackgroundVideoPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginBackgroundVideoPageModule, { declarations: [_login_background_video_page__WEBPACK_IMPORTED_MODULE_5__["LoginBackgroundVideoPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginBackgroundVideoPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
                ],
                declarations: [_login_background_video_page__WEBPACK_IMPORTED_MODULE_5__["LoginBackgroundVideoPage"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



const _c0 = ["player"];
class LoginBackgroundVideoPage {
    constructor() {
    }
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
}
LoginBackgroundVideoPage.ɵfac = function LoginBackgroundVideoPage_Factory(t) { return new (t || LoginBackgroundVideoPage)(); };
LoginBackgroundVideoPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginBackgroundVideoPage, selectors: [["app-login-background-video"]], viewQuery: function LoginBackgroundVideoPage_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.player = _t.first);
    } }, decls: 17, vars: 1, consts: [["slot", "start"], ["defaultHref", "/"], [1, "ion-padding", "ion-text-center", 3, "fullscreen"], ["src", "assets/yannbf/img/logo/logo-canon.png", 1, "logo"], [1, "buttons"], [1, "login-button", "facebook", 3, "click"], [1, "login-button", "google", 3, "click"], ["color", "dark", 1, "login-button", 3, "click"], ["playsinline", "", "autoplay", "", "muted", "", "loop", "", "poster", "assets/yannbf/video/video-cover.jpg", "id", "bgvid"], ["player", ""], ["src", "assets/yannbf/video/background-480.mp4", "type", "video/mp4"]], template: function LoginBackgroundVideoPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginBackgroundVideoPage_Template_ion_button_click_7_listener() { return ctx.goToLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Continue with Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginBackgroundVideoPage_Template_ion_button_click_9_listener() { return ctx.goToLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginBackgroundVideoPage_Template_ion_button_click_11_listener() { return ctx.goToSignup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Create account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "video", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "source", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Your browser does not support the video tag. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullscreen", true);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"]], styles: ["ion-toolbar[_ngcontent-%COMP%] {\n  --background: transparent !important;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: none;\n  background-position: center top;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\nvideo#bgvid[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  min-width: 100%;\n  min-height: 100%;\n  width: auto;\n  height: auto;\n  z-index: -100;\n  transform: translateX(-50%) translateY(-50%);\n  background-size: cover;\n}\n\n.logo[_ngcontent-%COMP%] {\n  width: 70%;\n  height: auto;\n  margin: 0 auto;\n  padding-top: 50px;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n  bottom: 0;\n  padding-bottom: 10px;\n  width: 90%;\n  transition: all 1s ease;\n}\n\n.buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --color: white;\n}\n\n.buttons[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 3rem;\n  font-size: 1.2em;\n  font-weight: bold;\n  text-transform: none !important;\n}\n\n.buttons[_ngcontent-%COMP%]   .facebook[_ngcontent-%COMP%] {\n  --background: rgba(59, 89, 152, 0.7) !important;\n}\n\n.buttons[_ngcontent-%COMP%]   .facebook.activated[_ngcontent-%COMP%] {\n  --background: rgba(59, 89, 152, 1) !important;\n}\n\n.buttons[_ngcontent-%COMP%]   .google[_ngcontent-%COMP%] {\n  --background: rgba(219, 68, 55, 0.7) !important;\n}\n\n.buttons[_ngcontent-%COMP%]   .google.activated[_ngcontent-%COMP%] {\n  --background: rgba(219, 68, 55, 1) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbG9naW4vbG9naW4tYmFja2dyb3VuZC12aWRlby9DOlxcVXNlcnNcXHNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZXRvc1xcX2lvbmljXFxpb25pYzQtY29tcG9uZW50cy9zcmNcXGFwcFxccGFnZXNcXHlhbm5iZlxcY29tcG9uZW50c1xcbG9naW5cXGxvZ2luLWJhY2tncm91bmQtdmlkZW9cXGxvZ2luLWJhY2tncm91bmQtdmlkZW8ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy9sb2dpbi9sb2dpbi1iYWNrZ3JvdW5kLXZpZGVvL2xvZ2luLWJhY2tncm91bmQtdmlkZW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQUE7QUNDRjs7QURDQTtFQUNFLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDRUY7O0FEQ0E7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw0Q0FBQTtFQUNBLHNCQUFBO0FDRUY7O0FEQUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0dGOztBREFBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQ0dGOztBRERFO0VBQ0UsY0FBQTtBQ0dKOztBREFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUNFSjs7QURBRTtFQUNFLCtDQUFBO0FDRUo7O0FEREk7RUFDRSw2Q0FBQTtBQ0dOOztBREFFO0VBQ0UsK0NBQUE7QUNFSjs7QURESTtFQUNFLDZDQUFBO0FDR04iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy9sb2dpbi9sb2dpbi1iYWNrZ3JvdW5kLXZpZGVvL2xvZ2luLWJhY2tncm91bmQtdmlkZW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG52aWRlbyNiZ3ZpZCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgei1pbmRleDogLTEwMDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5sb2dvIHtcclxuICB3aWR0aDogNzAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nLXRvcDogNTBweDtcclxufVxyXG5cclxuLmJ1dHRvbnMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XHJcblxyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgLS1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAubG9naW4tYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmZhY2Vib29rIHtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiYSg1OSwgODksIDE1MiwgMC43KSAhaW1wb3J0YW50O1xyXG4gICAgJi5hY3RpdmF0ZWQge1xyXG4gICAgICAtLWJhY2tncm91bmQ6IHJnYmEoNTksIDg5LCAxNTIsIDEpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5nb29nbGUge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDIxOSwgNjgsIDU1LCAwLjcpICFpbXBvcnRhbnQ7XHJcbiAgICAmLmFjdGl2YXRlZCB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogcmdiYSgyMTksIDY4LCA1NSwgMSkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG52aWRlbyNiZ3ZpZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICB6LWluZGV4OiAtMTAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmxvZ28ge1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn1cblxuLmJ1dHRvbnMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgd2lkdGg6IDkwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XG59XG4uYnV0dG9ucyBpb24tYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG4uYnV0dG9ucyAubG9naW4tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogM3JlbTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG59XG4uYnV0dG9ucyAuZmFjZWJvb2sge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoNTksIDg5LCAxNTIsIDAuNykgIWltcG9ydGFudDtcbn1cbi5idXR0b25zIC5mYWNlYm9vay5hY3RpdmF0ZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoNTksIDg5LCAxNTIsIDEpICFpbXBvcnRhbnQ7XG59XG4uYnV0dG9ucyAuZ29vZ2xlIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDIxOSwgNjgsIDU1LCAwLjcpICFpbXBvcnRhbnQ7XG59XG4uYnV0dG9ucyAuZ29vZ2xlLmFjdGl2YXRlZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyMTksIDY4LCA1NSwgMSkgIWltcG9ydGFudDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginBackgroundVideoPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-background-video',
                templateUrl: './login-background-video.page.html',
                styleUrls: ['./login-background-video.page.scss'],
            }]
    }], function () { return []; }, { player: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['player', { static: true }]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-yannbf-components-login-login-background-video-login-background-video-module-es2015.js.map