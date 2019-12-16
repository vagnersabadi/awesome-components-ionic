(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-fivethree-fivethree-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fivethree/fivethree.page.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fivethree/fivethree.page.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Fivethree\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-subtitle><a href=\"https://fivethree.io/\">https://fivethree.io/</a></ion-card-subtitle>\r\n      <ion-card-title> Fivethree </ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-label class=\"ion-text-wrap\">\r\n        Component library for ionic 4, inspired by Material Design\r\n      </ion-label>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-list>\r\n    <ion-item [routerLink]=\"['/app-bar']\" detail>\r\n      <ion-label>\r\n        App Bar\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item [routerLink]=\"['/bottom-sheet']\" detail>\r\n      <ion-label>\r\n        Bottom Sheet\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item [routerLink]=\"['/buttons']\" detail>\r\n      <ion-label>\r\n        Buttons\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item [routerLink]=\"['/dialog']\" detail>\r\n      <ion-label>\r\n        Dialog\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item [routerLink]=\"['/editable-label']\" detail>\r\n      <ion-label>\r\n        Editable Label\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item [routerLink]=\"['/expandable']\" detail>\r\n      <ion-label>\r\n        Expandable\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item [routerLink]=\"['/fab']\" detail>\r\n      <ion-label>\r\n        Fab\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item [routerLink]=\"['/feature-discovery']\" detail>\r\n      <ion-label>\r\n        Feature Discovery\r\n      </ion-label>\r\n      <ion-badge slot=\"end\" color=\"danger\"> BUG </ion-badge>\r\n    </ion-item>\r\n    <ion-item [routerLink]=\"['/gallery']\" detail>\r\n      <ion-label>\r\n        Gallery\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item [routerLink]=\"['/icon']\" detail>\r\n      <ion-label>\r\n        Icon\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item [routerLink]=\"['/loading']\" detail>\r\n      <ion-label>\r\n        Loading\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item [routerLink]=\"['/password']\" detail>\r\n      <ion-label>\r\n        Password\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item [routerLink]=\"['/refresh']\" detail>\r\n      <ion-label>\r\n        Refresh\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item [routerLink]=\"['/searchbar']\" detail>\r\n      <ion-label>\r\n        Searchbar\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item [routerLink]=\"['/stepper']\" detail>\r\n      <ion-label>\r\n        Stepper\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item [routerLink]=\"['/viewport']\" detail>\r\n      <ion-label>\r\n        Viewport\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n\r\n  </ion-list>\r\n</ion-content>");
            /***/ 
        }),
        /***/ "./src/app/pages/fivethree/fivethree.module.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/pages/fivethree/fivethree.module.ts ***!
          \*****************************************************/
        /*! exports provided: FivethreePageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivethreePageModule", function () { return FivethreePageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _fivethree_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fivethree.page */ "./src/app/pages/fivethree/fivethree.page.ts");
            /* harmony import */ var _fivethree_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fivethree/core */ "./node_modules/@fivethree/core/fesm2015/fivethree-core.js");
            var routes = [
                {
                    path: '',
                    component: _fivethree_page__WEBPACK_IMPORTED_MODULE_6__["FivethreePage"]
                }
            ];
            var FivethreePageModule = /** @class */ (function () {
                function FivethreePageModule() {
                }
                return FivethreePageModule;
            }());
            FivethreePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                        _fivethree_core__WEBPACK_IMPORTED_MODULE_7__["FivethreeCoreModule"]
                    ],
                    declarations: [_fivethree_page__WEBPACK_IMPORTED_MODULE_6__["FivethreePage"]]
                })
            ], FivethreePageModule);
            /***/ 
        }),
        /***/ "./src/app/pages/fivethree/fivethree.page.scss": 
        /*!*****************************************************!*\
          !*** ./src/app/pages/fivethree/fivethree.page.scss ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpdmV0aHJlZS9maXZldGhyZWUucGFnZS5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/fivethree/fivethree.page.ts": 
        /*!***************************************************!*\
          !*** ./src/app/pages/fivethree/fivethree.page.ts ***!
          \***************************************************/
        /*! exports provided: FivethreePage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivethreePage", function () { return FivethreePage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FivethreePage = /** @class */ (function () {
                function FivethreePage() {
                }
                FivethreePage.prototype.ngOnInit = function () {
                };
                return FivethreePage;
            }());
            FivethreePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-fivethree',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fivethree.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fivethree/fivethree.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./fivethree.page.scss */ "./src/app/pages/fivethree/fivethree.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], FivethreePage);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-fivethree-fivethree-module-es2015.js.map
//# sourceMappingURL=pages-fivethree-fivethree-module-es5.js.map
//# sourceMappingURL=pages-fivethree-fivethree-module-es5.js.map