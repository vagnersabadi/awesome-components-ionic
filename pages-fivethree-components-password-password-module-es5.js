(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-fivethree-components-password-password-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fivethree/components/password/password.page.html": 
        /*!**************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fivethree/components/password/password.page.html ***!
          \**************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Password</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Email</ion-label>\r\n      <ion-input formControlName=\"email\" type=\"text\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item *ngIf=\"email.invalid && email.touched\" lines=\"none\">\r\n      <ion-text color=\"danger\" class=\"form-error\">\r\n        Please enter a valid email.\r\n      </ion-text>\r\n    </ion-item>\r\n\r\n    <fiv-password-input placeholder=\"Password\" formControlName=\"password\"></fiv-password-input>\r\n\r\n    <ion-item *ngIf=\"password.invalid && password.touched\" lines=\"none\">\r\n      <ion-text color=\"danger\" class=\"form-error\">\r\n        Please enter a valid password with atleast 4 characters.\r\n      </ion-text>\r\n    </ion-item>\r\n    <div class=\"ion-text-center\">\r\n      <ion-button block shape=\"round\" color=\"primary\" type=\"submit\" [disabled]=\"loginForm.invalid\">\r\n        Login\r\n      </ion-button>\r\n    </div>\r\n  </form>\r\n\r\n</ion-content>");
            /***/ 
        }),
        /***/ "./src/app/pages/fivethree/components/password/password.module.ts": 
        /*!************************************************************************!*\
          !*** ./src/app/pages/fivethree/components/password/password.module.ts ***!
          \************************************************************************/
        /*! exports provided: PasswordPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordPageModule", function () { return PasswordPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./password.page */ "./src/app/pages/fivethree/components/password/password.page.ts");
            /* harmony import */ var _fivethree_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fivethree/core */ "./node_modules/@fivethree/core/fesm2015/fivethree-core.js");
            var routes = [
                {
                    path: '',
                    component: _password_page__WEBPACK_IMPORTED_MODULE_6__["PasswordPage"]
                }
            ];
            var PasswordPageModule = /** @class */ (function () {
                function PasswordPageModule() {
                }
                return PasswordPageModule;
            }());
            PasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                        _fivethree_core__WEBPACK_IMPORTED_MODULE_7__["FivPasswordInputModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    ],
                    declarations: [_password_page__WEBPACK_IMPORTED_MODULE_6__["PasswordPage"]]
                })
            ], PasswordPageModule);
            /***/ 
        }),
        /***/ "./src/app/pages/fivethree/components/password/password.page.scss": 
        /*!************************************************************************!*\
          !*** ./src/app/pages/fivethree/components/password/password.page.scss ***!
          \************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpdmV0aHJlZS9jb21wb25lbnRzL3Bhc3N3b3JkL3Bhc3N3b3JkLnBhZ2Uuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/pages/fivethree/components/password/password.page.ts": 
        /*!**********************************************************************!*\
          !*** ./src/app/pages/fivethree/components/password/password.page.ts ***!
          \**********************************************************************/
        /*! exports provided: PasswordPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordPage", function () { return PasswordPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var PasswordPage = /** @class */ (function () {
                function PasswordPage(formBuilder) {
                    this.formBuilder = formBuilder;
                    this.show = true;
                }
                PasswordPage.prototype.ngOnInit = function () {
                    this.setupForm();
                };
                PasswordPage.prototype.setupForm = function () {
                    this.loginForm = this.formBuilder.group({
                        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                        password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
                    });
                };
                Object.defineProperty(PasswordPage.prototype, "email", {
                    get: function () {
                        return this.loginForm.get('email');
                    },
                    enumerable: true,
                    configurable: true
                });
                PasswordPage.prototype.onSubmit = function () { };
                Object.defineProperty(PasswordPage.prototype, "password", {
                    get: function () {
                        return this.loginForm.get('password');
                    },
                    enumerable: true,
                    configurable: true
                });
                return PasswordPage;
            }());
            PasswordPage.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
            ]; };
            PasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-password',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./password.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fivethree/components/password/password.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./password.page.scss */ "./src/app/pages/fivethree/components/password/password.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
            ], PasswordPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-fivethree-components-password-password-module-es2015.js.map
//# sourceMappingURL=pages-fivethree-components-password-password-module-es5.js.map
//# sourceMappingURL=pages-fivethree-components-password-password-module-es5.js.map