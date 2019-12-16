(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-login-login-one-login-one-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/login/login-one/login-one.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/login/login-one/login-one.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"ion-padding\" [fullscreen]=\"true\">\r\n  <div class=\"ion-padding\">\r\n    <ion-row>\r\n      <ion-col>\r\n        <img class=\"logo\" src=\"assets/yannbf/img/logo/logo-mailchimp.png\" />\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-list inset class=\"no-border\">\r\n          <ion-item>\r\n            <ion-label position=\"fixed\">Username</ion-label>\r\n            <ion-input type=\"text\"></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label position=\"fixed\">Password</ion-label>\r\n            <ion-input type=\"password\"></ion-input>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button class=\"login-button\" (click)=\"login()\">Login</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <div (click)=\"goToSignup()\">\r\n          <span>Or create a new account.</span>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/yannbf/components/login/login-one/login-one.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/login/login-one/login-one.module.ts ***!
  \*****************************************************************************/
/*! exports provided: LoginOnePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginOnePageModule", function() { return LoginOnePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_one_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-one.page */ "./src/app/pages/yannbf/components/login/login-one/login-one.page.ts");







const routes = [
    {
        path: '',
        component: _login_one_page__WEBPACK_IMPORTED_MODULE_6__["LoginOnePage"]
    }
];
let LoginOnePageModule = class LoginOnePageModule {
};
LoginOnePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_login_one_page__WEBPACK_IMPORTED_MODULE_6__["LoginOnePage"]]
    })
], LoginOnePageModule);



/***/ }),

/***/ "./src/app/pages/yannbf/components/login/login-one/login-one.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/login/login-one/login-one.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: transparent !important;\n}\n\nion-content {\n  --background: none;\n  background-image: url(\"/assets/yannbf/img/background/background-5.jpg\");\n  background-position: center top;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\nion-content .logo {\n  width: 50%;\n  height: auto;\n  max-width: 12em;\n  margin: 0 auto;\n  padding-bottom: 50px;\n}\n\nion-content .no-border {\n  border-bottom: 0 !important;\n  box-shadow: none !important;\n}\n\nion-content ion-row {\n  align-items: center;\n  text-align: center;\n}\n\n@media only screen and (min-width: 768px) {\n  ion-content ion-col.col {\n    margin: 0 auto;\n    max-width: 40%;\n  }\n}\n\nion-content span {\n  color: white;\n}\n\nion-content ion-item {\n  padding-left: 10px !important;\n  margin-bottom: 0px;\n  background-color: #f6f6f6;\n  opacity: 0.7;\n  font-size: 0.9em;\n  --background: transparent !important;\n}\n\nion-content ion-list {\n  background-color: transparent !important;\n  margin: 0;\n}\n\nion-content .login-button {\n  width: 100%;\n  font-size: 0.9em;\n  --background: #39acdc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbG9naW4vbG9naW4tb25lL0M6XFxVc2Vyc1xcc2FiYWRpXFxEb2N1bWVudHNcXFByb2pldG9zXFxfaW9uaWNcXGlvbmljNC1jb21wb25lbnRzL3NyY1xcYXBwXFxwYWdlc1xceWFubmJmXFxjb21wb25lbnRzXFxsb2dpblxcbG9naW4tb25lXFxsb2dpbi1vbmUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy9sb2dpbi9sb2dpbi1vbmUvbG9naW4tb25lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLHVFQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURDRTtFQUNFLDJCQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURDRTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDRTtFQUNFO0lBQ0UsY0FBQTtJQUNBLGNBQUE7RUNDSjtBQUNGOztBRENFO0VBQ0UsWUFBQTtBQ0NKOztBREVFO0VBQ0UsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7QUNBSjs7QURFRTtFQUNFLHdDQUFBO0VBQ0EsU0FBQTtBQ0FKOztBREVFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL2xvZ2luL2xvZ2luLW9uZS9sb2dpbi1vbmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3lhbm5iZi9pbWcvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLTUuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cclxuICAubG9nbyB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAxMmVtO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICB9XHJcbiAgLm5vLWJvcmRlciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGlvbi1yb3cge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgaW9uLWNvbC5jb2wge1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgbWF4LXdpZHRoOiA0MCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNwYW4ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICB9XHJcbiAgaW9uLWxpc3Qge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgLmxvZ2luLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICAtLWJhY2tncm91bmQ6ICMzOWFjZGM7XHJcbiAgfVxyXG59XHJcbiIsImlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy95YW5uYmYvaW1nL2JhY2tncm91bmQvYmFja2dyb3VuZC01LmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbmlvbi1jb250ZW50IC5sb2dvIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtd2lkdGg6IDEyZW07XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cbmlvbi1jb250ZW50IC5uby1ib3JkZXIge1xuICBib3JkZXItYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IGlvbi1yb3cge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIGlvbi1jb250ZW50IGlvbi1jb2wuY29sIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXgtd2lkdGg6IDQwJTtcbiAgfVxufVxuaW9uLWNvbnRlbnQgc3BhbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmlvbi1jb250ZW50IGlvbi1pdGVtIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgb3BhY2l0eTogMC43O1xuICBmb250LXNpemU6IDAuOWVtO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCBpb24tbGlzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMDtcbn1cbmlvbi1jb250ZW50IC5sb2dpbi1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgLS1iYWNrZ3JvdW5kOiAjMzlhY2RjO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/yannbf/components/login/login-one/login-one.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/login/login-one/login-one.page.ts ***!
  \***************************************************************************/
/*! exports provided: LoginOnePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginOnePage", function() { return LoginOnePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let LoginOnePage = class LoginOnePage {
    constructor(loadingCtrl, alertCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.backgroundImage = 'assets/yannbf/img/background/background-5.jpg';
    }
    ngOnInit() { }
    login() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                duration: 500,
                message: 'Please wait...',
            });
            yield loading.present();
            yield loading.onDidDismiss()
                .then(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                const alert = yield this.alertCtrl.create({
                    header: 'Logged in!',
                    subHeader: 'Thanks for logging in.',
                    buttons: ['Dismiss']
                });
                yield alert.present();
            }));
        });
    }
    goToSignup() { }
    goToResetPassword() { }
};
LoginOnePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
LoginOnePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-one',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login-one.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/login/login-one/login-one.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login-one.page.scss */ "./src/app/pages/yannbf/components/login/login-one/login-one.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], LoginOnePage);



/***/ })

}]);
//# sourceMappingURL=pages-yannbf-components-login-login-one-login-one-module-es2015.js.map