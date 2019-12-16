(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-angular-material-angular-material-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/angular-material/angular-material.page.html": 
        /*!*********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/angular-material/angular-material.page.html ***!
          \*********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Angular Material\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-subtitle><a href=\"https://material.angular.io/\">https://material.angular.io/</a></ion-card-subtitle>\r\n      <ion-card-title> Angular Material </ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-label class=\"ion-text-wrap\">\r\n        Material Design components for Angular\r\n      </ion-label>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-list>\r\n    <ion-item [routerLink]=\"['/mat-card']\" detail>\r\n      <ion-label>\r\n        Card\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item [routerLink]=\"['/mat-grid']\" detail>\r\n      <ion-label>\r\n        Grid\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item [routerLink]=\"['/mat-input']\" detail>\r\n      <ion-label>\r\n        Inputs\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item [routerLink]=\"['/mat-drag-drop']\" detail>\r\n      <ion-label>\r\n        Drag Drop\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item [routerLink]=\"['/expansion']\" detail>\r\n      <ion-label>\r\n        Expansion\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item [routerLink]=\"['/mat-stepper']\" detail>\r\n      <ion-label>\r\n        Stepper\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n\r\n    <ion-item [routerLink]=\"['/mat-sort-header']\" detail>\r\n      <ion-label>\r\n        Sort Header\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item [routerLink]=\"['/mat-table']\" detail>\r\n      <ion-label>\r\n        Table\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n\r\n\r\n\r\n\r\n  </ion-list>\r\n</ion-content>");
            /***/ 
        }),
        /***/ "./src/app/pages/angular-material/angular-material.module.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/pages/angular-material/angular-material.module.ts ***!
          \*******************************************************************/
        /*! exports provided: AngularMaterialPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialPageModule", function () { return AngularMaterialPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _angular_material_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./angular-material.page */ "./src/app/pages/angular-material/angular-material.page.ts");
            var routes = [
                {
                    path: '',
                    component: _angular_material_page__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialPage"]
                }
            ];
            var AngularMaterialPageModule = /** @class */ (function () {
                function AngularMaterialPageModule() {
                }
                return AngularMaterialPageModule;
            }());
            AngularMaterialPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                    ],
                    declarations: [_angular_material_page__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialPage"]]
                })
            ], AngularMaterialPageModule);
            /***/ 
        }),
        /***/ "./src/app/pages/angular-material/angular-material.page.scss": 
        /*!*******************************************************************!*\
          !*** ./src/app/pages/angular-material/angular-material.page.scss ***!
          \*******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FuZ3VsYXItbWF0ZXJpYWwvYW5ndWxhci1tYXRlcmlhbC5wYWdlLnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/pages/angular-material/angular-material.page.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/pages/angular-material/angular-material.page.ts ***!
          \*****************************************************************/
        /*! exports provided: AngularMaterialPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialPage", function () { return AngularMaterialPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AngularMaterialPage = /** @class */ (function () {
                function AngularMaterialPage() {
                }
                AngularMaterialPage.prototype.ngOnInit = function () {
                };
                return AngularMaterialPage;
            }());
            AngularMaterialPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-angular-material',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./angular-material.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/angular-material/angular-material.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./angular-material.page.scss */ "./src/app/pages/angular-material/angular-material.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], AngularMaterialPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-angular-material-angular-material-module-es2015.js.map
//# sourceMappingURL=pages-angular-material-angular-material-module-es5.js.map
//# sourceMappingURL=pages-angular-material-angular-material-module-es5.js.map