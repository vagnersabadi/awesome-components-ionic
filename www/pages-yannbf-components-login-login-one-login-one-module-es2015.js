(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-login-login-one-login-one-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/yannbf/components/login/login-one/login-one.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/yannbf/components/login/login-one/login-one.page.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"ion-padding\" [fullscreen]=\"true\">\r\n  <div class=\"ion-padding\">\r\n    <ion-row>\r\n      <ion-col>\r\n        <img class=\"logo\" src=\"assets/yannbf/img/logo/logo-mailchimp.png\" />\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-list inset class=\"no-border\">\r\n          <ion-item>\r\n            <ion-label position=\"fixed\">Username</ion-label>\r\n            <ion-input type=\"text\"></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label position=\"fixed\">Password</ion-label>\r\n            <ion-input type=\"password\"></ion-input>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button class=\"login-button\" (click)=\"login()\">Login</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <div (click)=\"goToSignup()\">\r\n          <span>Or create a new account.</span>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>"

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
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: transparent !important;\n}\n\nion-content {\n  --background: none;\n  background-image: url(\"/assets/yannbf/img/background/background-5.jpg\");\n  background-position: center top;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\nion-content .logo {\n  width: 50%;\n  height: auto;\n  max-width: 12em;\n  margin: 0 auto;\n  padding-bottom: 50px;\n}\n\nion-content .no-border {\n  border-bottom: 0 !important;\n  box-shadow: none !important;\n}\n\nion-content ion-row {\n  -webkit-box-align: center;\n          align-items: center;\n  text-align: center;\n}\n\n@media only screen and (min-width: 768px) {\n  ion-content ion-col.col {\n    margin: 0 auto;\n    max-width: 40%;\n  }\n}\n\nion-content span {\n  color: white;\n}\n\nion-content ion-item {\n  padding-left: 10px !important;\n  margin-bottom: 0px;\n  background-color: #f6f6f6;\n  opacity: 0.7;\n  font-size: 0.9em;\n  --background: transparent !important;\n}\n\nion-content ion-list {\n  background-color: transparent !important;\n  margin: 0;\n}\n\nion-content .login-button {\n  width: 100%;\n  font-size: 0.9em;\n  --background: #39acdc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbG9naW4vbG9naW4tb25lL0M6XFxVc2Vyc1xcc2FiYWRpXFxEb2N1bWVudHNcXFByb2pldG9zXFxfaW9uaWNcXGlvbmljNC1jb21wb25lbnRzL3NyY1xcYXBwXFxwYWdlc1xceWFubmJmXFxjb21wb25lbnRzXFxsb2dpblxcbG9naW4tb25lXFxsb2dpbi1vbmUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy9sb2dpbi9sb2dpbi1vbmUvbG9naW4tb25lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLHVFQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURDRTtFQUNFLDJCQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURDRTtFQUNFLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENFO0VBQ0U7SUFDRSxjQUFBO0lBQ0EsY0FBQTtFQ0NKO0FBQ0Y7O0FEQ0U7RUFDRSxZQUFBO0FDQ0o7O0FERUU7RUFDRSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtBQ0FKOztBREVFO0VBQ0Usd0NBQUE7RUFDQSxTQUFBO0FDQUo7O0FERUU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbG9naW4vbG9naW4tb25lL2xvZ2luLW9uZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMveWFubmJmL2ltZy9iYWNrZ3JvdW5kL2JhY2tncm91bmQtNS5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblxyXG4gIC5sb2dvIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDEyZW07XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gIH1cclxuICAubm8tYm9yZGVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgaW9uLXJvdyB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBpb24tY29sLmNvbCB7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICBtYXgtd2lkdGg6IDQwJTtcclxuICAgIH1cclxuICB9XHJcbiAgc3BhbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICBpb24taXRlbSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBpb24tbGlzdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICAubG9naW4tYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIC0tYmFja2dyb3VuZDogIzM5YWNkYztcclxuICB9XHJcbn1cclxuIiwiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3lhbm5iZi9pbWcvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLTUuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuaW9uLWNvbnRlbnQgLmxvZ28ge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1heC13aWR0aDogMTJlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuaW9uLWNvbnRlbnQgLm5vLWJvcmRlciB7XG4gIGJvcmRlci1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgaW9uLXJvdyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgaW9uLWNvbnRlbnQgaW9uLWNvbC5jb2wge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1heC13aWR0aDogNDAlO1xuICB9XG59XG5pb24tY29udGVudCBzcGFuIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuaW9uLWNvbnRlbnQgaW9uLWl0ZW0ge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICBvcGFjaXR5OiAwLjc7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwO1xufVxuaW9uLWNvbnRlbnQgLmxvZ2luLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDAuOWVtO1xuICAtLWJhY2tncm91bmQ6ICMzOWFjZGM7XG59Il19 */"

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
        template: __webpack_require__(/*! raw-loader!./login-one.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/yannbf/components/login/login-one/login-one.page.html"),
        styles: [__webpack_require__(/*! ./login-one.page.scss */ "./src/app/pages/yannbf/components/login/login-one/login-one.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], LoginOnePage);



/***/ })

}]);
//# sourceMappingURL=pages-yannbf-components-login-login-one-login-one-module-es2015.js.map