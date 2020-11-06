(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-login-login-background-slider-login-background-slider-module"],{

/***/ "./src/app/pages/yannbf/components/login/login-background-slider/login-background-slider.module.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/login/login-background-slider/login-background-slider.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: LoginBackgroundSliderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginBackgroundSliderPageModule", function() { return LoginBackgroundSliderPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_background_slider_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-background-slider.page */ "./src/app/pages/yannbf/components/login/login-background-slider/login-background-slider.page.ts");








const routes = [
    {
        path: '',
        component: _login_background_slider_page__WEBPACK_IMPORTED_MODULE_5__["LoginBackgroundSliderPage"]
    }
];
class LoginBackgroundSliderPageModule {
}
LoginBackgroundSliderPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoginBackgroundSliderPageModule });
LoginBackgroundSliderPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoginBackgroundSliderPageModule_Factory(t) { return new (t || LoginBackgroundSliderPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginBackgroundSliderPageModule, { declarations: [_login_background_slider_page__WEBPACK_IMPORTED_MODULE_5__["LoginBackgroundSliderPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginBackgroundSliderPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
                ],
                declarations: [_login_background_slider_page__WEBPACK_IMPORTED_MODULE_5__["LoginBackgroundSliderPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/yannbf/components/login/login-background-slider/login-background-slider.page.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/login/login-background-slider/login-background-slider.page.ts ***!
  \*******************************************************************************************************/
/*! exports provided: LoginBackgroundSliderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginBackgroundSliderPage", function() { return LoginBackgroundSliderPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






const _c0 = function (a0) { return { "background-image": a0 }; };
function LoginBackgroundSliderPage_ion_slide_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-slide", 13);
} if (rf & 2) {
    const background_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, "url(" + background_r1 + ")"));
} }
class LoginBackgroundSliderPage {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.backgrounds = [
            'assets/yannbf/img/background/background-1.jpg',
            'assets/yannbf/img/background/background-2.jpg',
            'assets/yannbf/img/background/background-3.jpg',
            'assets/yannbf/img/background/background-4.jpg'
        ];
        this.slideOpts = {
            loop: true,
            speed: 1500,
            autoplay: {
                delay: 2000,
            },
            effect: 'fade'
        };
        this.loginForm = formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])]
        });
    }
    ngOnInit() {
    }
    ionViewDidLoad() {
        console.log('Hello LoginBackgroundSlider Page');
    }
    openResetPassword() {
        console.log('Reset password clicked');
    }
    doLogin() {
        if (!this.loginForm.valid) {
            console.log('Invalid or empty data');
        }
        else {
            const userEmail = this.loginForm.value.email;
            const userPassword = this.loginForm.value.password;
            console.log('user data', userEmail, userPassword);
        }
    }
}
LoginBackgroundSliderPage.ɵfac = function LoginBackgroundSliderPage_Factory(t) { return new (t || LoginBackgroundSliderPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
LoginBackgroundSliderPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginBackgroundSliderPage, selectors: [["app-login-background-slider"]], decls: 23, vars: 2, consts: [["no-border", ""], ["slot", "start"], ["defaultHref", "/"], ["fullscreen", ""], ["pager", "false", 3, "options"], ["class", "slide-background swiper-no-swiping", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "login-container"], ["src", "assets/yannbf/img/logo/logo-canon.png", 1, "logo"], [3, "submit"], ["type", "email", "placeholder", "Email"], ["type", "password", "placeholder", "Password"], ["color", "danger", 1, "ion-margin"], [3, "click"], [1, "slide-background", "swiper-no-swiping", 3, "ngStyle"]], template: function LoginBackgroundSliderPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Login Background Slider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-slides", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LoginBackgroundSliderPage_ion_slide_8_Template, 1, 3, "ion-slide", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginBackgroundSliderPage_Template_form_submit_11_listener() { return ctx.doLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Login:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "ion-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "ion-input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ion-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "LOGIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginBackgroundSliderPage_Template_p_click_20_listener() { return ctx.openResetPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Forgot your password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.slideOpts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.backgrounds);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["TextValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlide"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]], styles: ["ion-toolbar[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n\n.scroll-content[_ngcontent-%COMP%] {\n  margin-top: 0 !important;\n}\n\n.logo[_ngcontent-%COMP%] {\n  width: 70%;\n  height: auto;\n  padding-top: 9vh;\n  margin-bottom: 15vh;\n}\n\nspan[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.slide-background[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  border-color: transparent;\n}\n\nion-slides[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n\nion-item[_ngcontent-%COMP%] {\n  color: white !important;\n  padding-left: 10px !important;\n  margin-bottom: 10px;\n  --background: transparent !important;\n  font-size: 0.9em;\n}\n\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: white !important;\n}\n\n.login-container[_ngcontent-%COMP%] {\n  color: white;\n  position: absolute;\n  top: 0;\n  padding: 10vw;\n  text-align: center;\n  width: 100%;\n  margin: 0 auto;\n  z-index: 2;\n}\n\nion-button[_ngcontent-%COMP%] {\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbG9naW4vbG9naW4tYmFja2dyb3VuZC1zbGlkZXIvQzpcXFVzZXJzXFxWYWduZXIgU2FiYWRpXFxEb2N1bWVudHNcXFByb2plY3RzXFxfTXlcXGF3ZXNvbWUtY29tcG9uZW50cy1pb25pYy9zcmNcXGFwcFxccGFnZXNcXHlhbm5iZlxcY29tcG9uZW50c1xcbG9naW5cXGxvZ2luLWJhY2tncm91bmQtc2xpZGVyXFxsb2dpbi1iYWNrZ3JvdW5kLXNsaWRlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL2xvZ2luL2xvZ2luLWJhY2tncm91bmQtc2xpZGVyL2xvZ2luLWJhY2tncm91bmQtc2xpZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSx3QkFBQTtBQ0NGOztBRENBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDRUY7O0FEQUE7RUFDRSxZQUFBO0FDR0Y7O0FEREE7RUFDRSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtBQ0lGOztBRERBO0VBQ0UsYUFBQTtBQ0lGOztBREZBO0VBQ0UsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQ0tGOztBREhBO0VBQ0UsdUJBQUE7QUNNRjs7QURKQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUNPRjs7QURMQTtFQUNFLFlBQUE7QUNRRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL2xvZ2luL2xvZ2luLWJhY2tncm91bmQtc2xpZGVyL2xvZ2luLWJhY2tncm91bmQtc2xpZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFye1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5zY3JvbGwtY29udGVudCB7XHJcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5sb2dvIHtcclxuICB3aWR0aDogNzAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBwYWRkaW5nLXRvcDogOXZoO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1dmg7XHJcbn1cclxuc3BhbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5zbGlkZS1iYWNrZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbmlvbi1zbGlkZXMge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuaW9uLWl0ZW0ge1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMC45ZW07XHJcbn1cclxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4ubG9naW4tY29udGFpbmVyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBwYWRkaW5nOiAxMHZ3O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB6LWluZGV4OiAyO1xyXG59XHJcbmlvbi1idXR0b24ge1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG4iLCJpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5zY3JvbGwtY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbn1cblxuLmxvZ28ge1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmctdG9wOiA5dmg7XG4gIG1hcmdpbi1ib3R0b206IDE1dmg7XG59XG5cbnNwYW4ge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zbGlkZS1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5pb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuaW9uLWl0ZW0ge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAwLjllbTtcbn1cblxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5sb2dpbi1jb250YWluZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBwYWRkaW5nOiAxMHZ3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgei1pbmRleDogMjtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIG9wYWNpdHk6IDAuODtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginBackgroundSliderPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-background-slider',
                templateUrl: './login-background-slider.page.html',
                styleUrls: ['./login-background-slider.page.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-yannbf-components-login-login-background-slider-login-background-slider-module-es2015.js.map