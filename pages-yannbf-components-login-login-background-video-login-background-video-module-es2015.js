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
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"]], styles: ["ion-toolbar[_ngcontent-%COMP%] {\n  --background: transparent !important;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: none;\n  background-position: center top;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\nvideo#bgvid[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  min-width: 100%;\n  min-height: 100%;\n  width: auto;\n  height: auto;\n  z-index: -100;\n  transform: translateX(-50%) translateY(-50%);\n  background-size: cover;\n}\n\n.logo[_ngcontent-%COMP%] {\n  width: 70%;\n  height: auto;\n  margin: 0 auto;\n  padding-top: 50px;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n  bottom: 0;\n  padding-bottom: 10px;\n  width: 90%;\n  transition: all 1s ease;\n}\n\n.buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --color: white;\n}\n\n.buttons[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 3rem;\n  font-size: 1.2em;\n  font-weight: bold;\n  text-transform: none !important;\n}\n\n.buttons[_ngcontent-%COMP%]   .facebook[_ngcontent-%COMP%] {\n  --background: rgba(59, 89, 152, 0.7) !important;\n}\n\n.buttons[_ngcontent-%COMP%]   .facebook.activated[_ngcontent-%COMP%] {\n  --background: rgba(59, 89, 152, 1) !important;\n}\n\n.buttons[_ngcontent-%COMP%]   .google[_ngcontent-%COMP%] {\n  --background: rgba(219, 68, 55, 0.7) !important;\n}\n\n.buttons[_ngcontent-%COMP%]   .google.activated[_ngcontent-%COMP%] {\n  --background: rgba(219, 68, 55, 1) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbG9naW4vbG9naW4tYmFja2dyb3VuZC12aWRlby9DOlxcVXNlcnNcXFZhZ25lciBTYWJhZGlcXERvY3VtZW50c1xcUHJvamVjdHNcXF9NeVxcYXdlc29tZS1jb21wb25lbnRzLWlvbmljL3NyY1xcYXBwXFxwYWdlc1xceWFubmJmXFxjb21wb25lbnRzXFxsb2dpblxcbG9naW4tYmFja2dyb3VuZC12aWRlb1xcbG9naW4tYmFja2dyb3VuZC12aWRlby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL2xvZ2luL2xvZ2luLWJhY2tncm91bmQtdmlkZW8vbG9naW4tYmFja2dyb3VuZC12aWRlby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUNFRjs7QURDQTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDRDQUFBO0VBQ0Esc0JBQUE7QUNFRjs7QURBQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDR0Y7O0FEQUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FDR0Y7O0FEREU7RUFDRSxjQUFBO0FDR0o7O0FEQUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtBQ0VKOztBREFFO0VBQ0UsK0NBQUE7QUNFSjs7QURESTtFQUNFLDZDQUFBO0FDR047O0FEQUU7RUFDRSwrQ0FBQTtBQ0VKOztBRERJO0VBQ0UsNkNBQUE7QUNHTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL2xvZ2luL2xvZ2luLWJhY2tncm91bmQtdmlkZW8vbG9naW4tYmFja2dyb3VuZC12aWRlby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbnZpZGVvI2JndmlkIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIG1pbi13aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDogYXV0bztcclxuICB6LWluZGV4OiAtMTAwO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLmxvZ28ge1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG59XHJcblxyXG4uYnV0dG9ucyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgd2lkdGg6IDkwJTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcclxuXHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5sb2dpbi1idXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuZmFjZWJvb2sge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDU5LCA4OSwgMTUyLCAwLjcpICFpbXBvcnRhbnQ7XHJcbiAgICAmLmFjdGl2YXRlZCB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogcmdiYSg1OSwgODksIDE1MiwgMSkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiAgLmdvb2dsZSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjE5LCA2OCwgNTUsIDAuNykgIWltcG9ydGFudDtcclxuICAgICYuYWN0aXZhdGVkIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDIxOSwgNjgsIDU1LCAxKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbnZpZGVvI2JndmlkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIHotaW5kZXg6IC0xMDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ubG9nbyB7XG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuXG4uYnV0dG9ucyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB3aWR0aDogOTAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcbn1cbi5idXR0b25zIGlvbi1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cbi5idXR0b25zIC5sb2dpbi1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzcmVtO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbn1cbi5idXR0b25zIC5mYWNlYm9vayB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSg1OSwgODksIDE1MiwgMC43KSAhaW1wb3J0YW50O1xufVxuLmJ1dHRvbnMgLmZhY2Vib29rLmFjdGl2YXRlZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSg1OSwgODksIDE1MiwgMSkgIWltcG9ydGFudDtcbn1cbi5idXR0b25zIC5nb29nbGUge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMjE5LCA2OCwgNTUsIDAuNykgIWltcG9ydGFudDtcbn1cbi5idXR0b25zIC5nb29nbGUuYWN0aXZhdGVkIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDIxOSwgNjgsIDU1LCAxKSAhaW1wb3J0YW50O1xufSJdfQ== */"] });
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