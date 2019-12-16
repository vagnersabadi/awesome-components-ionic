(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-login-login-background-slider-login-background-slider-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/login/login-background-slider/login-background-slider.page.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/login/login-background-slider/login-background-slider.page.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\r\n  <ion-toolbar translucent>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-slides pager=\"false\" [options]=\"slideOpts\" >\r\n    <ion-slide class=\"slide-background swiper-no-swiping\" *ngFor=\"let background of backgrounds\"\r\n      [ngStyle]=\"{'background-image': 'url(' + background +')'}\">\r\n    </ion-slide>\r\n  </ion-slides>\r\n  <div class=\"login-container\">\r\n    <img class=\"logo\" src=\"assets/yannbf/img/logo/logo-canon.png\" />\r\n    <form (submit)=\"doLogin()\">\r\n      <strong>Login:</strong>\r\n      <ion-item>\r\n        <ion-input type=\"email\" placeholder=\"Email\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-input type=\"password\" placeholder=\"Password\"></ion-input>\r\n      </ion-item>\r\n      <ion-button class=\"ion-margin\" color=\"danger\">LOGIN</ion-button>\r\n      <p (click)=\"openResetPassword()\"><strong>Forgot your password?</strong></p>\r\n    </form>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/yannbf/components/login/login-background-slider/login-background-slider.module.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/login/login-background-slider/login-background-slider.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: LoginBackgroundSliderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginBackgroundSliderPageModule", function() { return LoginBackgroundSliderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_background_slider_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-background-slider.page */ "./src/app/pages/yannbf/components/login/login-background-slider/login-background-slider.page.ts");







const routes = [
    {
        path: '',
        component: _login_background_slider_page__WEBPACK_IMPORTED_MODULE_6__["LoginBackgroundSliderPage"]
    }
];
let LoginBackgroundSliderPageModule = class LoginBackgroundSliderPageModule {
};
LoginBackgroundSliderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_login_background_slider_page__WEBPACK_IMPORTED_MODULE_6__["LoginBackgroundSliderPage"]]
    })
], LoginBackgroundSliderPageModule);



/***/ }),

/***/ "./src/app/pages/yannbf/components/login/login-background-slider/login-background-slider.page.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/login/login-background-slider/login-background-slider.page.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".scroll-content {\n  margin-top: 0 !important;\n}\n\n.logo {\n  width: 70%;\n  height: auto;\n  padding-top: 9vh;\n  margin-bottom: 15vh;\n}\n\nspan {\n  color: white;\n}\n\n.slide-background {\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  border-color: transparent;\n}\n\nion-slides {\n  height: 100vh;\n}\n\nion-item {\n  color: white !important;\n  padding-left: 10px !important;\n  margin-bottom: 10px;\n  --background: transparent !important;\n  font-size: 0.9em;\n}\n\n::-webkit-input-placeholder {\n  color: white !important;\n}\n\n.login-container {\n  color: white;\n  position: absolute;\n  top: 0;\n  padding: 10vw;\n  text-align: center;\n  width: 100%;\n  margin: 0 auto;\n  z-index: 2;\n}\n\nion-button {\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbG9naW4vbG9naW4tYmFja2dyb3VuZC1zbGlkZXIvQzpcXFVzZXJzXFxzYWJhZGlcXERvY3VtZW50c1xcUHJvamV0b3NcXF9pb25pY1xcaW9uaWM0LWNvbXBvbmVudHMvc3JjXFxhcHBcXHBhZ2VzXFx5YW5uYmZcXGNvbXBvbmVudHNcXGxvZ2luXFxsb2dpbi1iYWNrZ3JvdW5kLXNsaWRlclxcbG9naW4tYmFja2dyb3VuZC1zbGlkZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy9sb2dpbi9sb2dpbi1iYWNrZ3JvdW5kLXNsaWRlci9sb2dpbi1iYWNrZ3JvdW5kLXNsaWRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBQTtBQ0NGOztBRENBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDRUY7O0FEQUE7RUFDRSxZQUFBO0FDR0Y7O0FEREE7RUFDRSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtBQ0lGOztBRERBO0VBQ0UsYUFBQTtBQ0lGOztBREZBO0VBQ0UsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQ0tGOztBREhBO0VBQ0UsdUJBQUE7QUNNRjs7QURKQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUNPRjs7QURMQTtFQUNFLFlBQUE7QUNRRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL2xvZ2luL2xvZ2luLWJhY2tncm91bmQtc2xpZGVyL2xvZ2luLWJhY2tncm91bmQtc2xpZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGwtY29udGVudCB7XHJcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5sb2dvIHtcclxuICB3aWR0aDogNzAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBwYWRkaW5nLXRvcDogOXZoO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1dmg7XHJcbn1cclxuc3BhbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5zbGlkZS1iYWNrZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbmlvbi1zbGlkZXMge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuaW9uLWl0ZW0ge1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMC45ZW07XHJcbn1cclxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4ubG9naW4tY29udGFpbmVyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBwYWRkaW5nOiAxMHZ3O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB6LWluZGV4OiAyO1xyXG59XHJcbmlvbi1idXR0b24ge1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG4iLCIuc2Nyb2xsLWNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5sb2dvIHtcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLXRvcDogOXZoO1xuICBtYXJnaW4tYm90dG9tOiAxNXZoO1xufVxuXG5zcGFuIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc2xpZGUtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbmlvbi1pdGVtIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59XG5cbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4ubG9naW4tY29udGFpbmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcGFkZGluZzogMTB2dztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHotaW5kZXg6IDI7XG59XG5cbmlvbi1idXR0b24ge1xuICBvcGFjaXR5OiAwLjg7XG59Il19 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let LoginBackgroundSliderPage = class LoginBackgroundSliderPage {
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
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
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
};
LoginBackgroundSliderPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
LoginBackgroundSliderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-background-slider',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login-background-slider.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/login/login-background-slider/login-background-slider.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login-background-slider.page.scss */ "./src/app/pages/yannbf/components/login/login-background-slider/login-background-slider.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], LoginBackgroundSliderPage);



/***/ })

}]);
//# sourceMappingURL=pages-yannbf-components-login-login-background-slider-login-background-slider-module-es2015.js.map