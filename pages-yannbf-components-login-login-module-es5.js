(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-login-login-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/login/login.page.html": 
        /*!*****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/login/login.page.html ***!
          \*****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Logins Components</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let item of items\" [routerLink]=\"item.page\" routerDirection=\"forward\">\r\n      {{ item.title }}\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>");
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/login/login.module.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/pages/yannbf/components/login/login.module.ts ***!
          \***************************************************************/
        /*! exports provided: LoginPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () { return LoginPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/yannbf/components/login/login.page.ts");
            var routes = [
                {
                    path: '',
                    component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
                }
            ];
            var LoginPageModule = /** @class */ (function () {
                function LoginPageModule() {
                }
                return LoginPageModule;
            }());
            LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
                    ],
                    declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
                })
            ], LoginPageModule);
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/login/login.page.scss": 
        /*!***************************************************************!*\
          !*** ./src/app/pages/yannbf/components/login/login.page.scss ***!
          \***************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/login/login.page.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/pages/yannbf/components/login/login.page.ts ***!
          \*************************************************************/
        /*! exports provided: LoginPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function () { return LoginPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var LoginPage = /** @class */ (function () {
                function LoginPage() {
                    this.items = [
                        {
                            title: 'Type one',
                            page: '/login-one'
                        },
                        {
                            title: 'Instagram style',
                            page: '/login-instagram'
                        },
                        {
                            title: 'Login with slider text',
                            page: '/login-slider'
                        },
                        {
                            title: 'Login with video background',
                            page: '/login-background-video'
                        },
                        {
                            title: 'Login with slider background',
                            page: '/login-background-slider'
                        },
                    ];
                }
                LoginPage.prototype.ngOnInit = function () {
                };
                return LoginPage;
            }());
            LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/login/login.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/yannbf/components/login/login.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], LoginPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-yannbf-components-login-login-module-es2015.js.map
//# sourceMappingURL=pages-yannbf-components-login-login-module-es5.js.map
//# sourceMappingURL=pages-yannbf-components-login-login-module-es5.js.map