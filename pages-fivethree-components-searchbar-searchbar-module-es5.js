(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-fivethree-components-searchbar-searchbar-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fivethree/components/searchbar/searchbar.page.html": 
        /*!****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fivethree/components/searchbar/searchbar.page.html ***!
          \****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Searchbar</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content >\r\n\r\n  <fiv-searchbar [smallWidth]=\"120\" #search title=\"Searchbar\" placeholder=\"Search ....\"\r\n    (fivInputChange)=\"onSearchInputChanged($event)\" (fivClose)=\"closeSearch();\" [small]=\"small\">\r\n    <!-- <ion-menu-button start menu=\"menuId\"></ion-menu-button> -->\r\n    <ion-back-button start defaultHref=\"home\"></ion-back-button>\r\n  </fiv-searchbar>\r\n\r\n  <ion-item>\r\n    <ion-label>Small Searchbar</ion-label>\r\n    <ion-checkbox (ionChange)=\"checkChanged($event)\" [checked]=\"small\" slot=\"start\"></ion-checkbox>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>Query: {{searchInput}}</ion-label>\r\n  </ion-item>\r\n\r\n\r\n</ion-content>");
            /***/ 
        }),
        /***/ "./src/app/pages/fivethree/components/searchbar/searchbar.module.ts": 
        /*!**************************************************************************!*\
          !*** ./src/app/pages/fivethree/components/searchbar/searchbar.module.ts ***!
          \**************************************************************************/
        /*! exports provided: SearchbarPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchbarPageModule", function () { return SearchbarPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _searchbar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./searchbar.page */ "./src/app/pages/fivethree/components/searchbar/searchbar.page.ts");
            /* harmony import */ var _fivethree_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fivethree/core */ "./node_modules/@fivethree/core/fesm2015/fivethree-core.js");
            var routes = [
                {
                    path: '',
                    component: _searchbar_page__WEBPACK_IMPORTED_MODULE_6__["SearchbarPage"]
                }
            ];
            var SearchbarPageModule = /** @class */ (function () {
                function SearchbarPageModule() {
                }
                return SearchbarPageModule;
            }());
            SearchbarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                        _fivethree_core__WEBPACK_IMPORTED_MODULE_7__["FivSearchbarModule"]
                    ],
                    declarations: [_searchbar_page__WEBPACK_IMPORTED_MODULE_6__["SearchbarPage"]]
                })
            ], SearchbarPageModule);
            /***/ 
        }),
        /***/ "./src/app/pages/fivethree/components/searchbar/searchbar.page.scss": 
        /*!**************************************************************************!*\
          !*** ./src/app/pages/fivethree/components/searchbar/searchbar.page.scss ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpdmV0aHJlZS9jb21wb25lbnRzL3NlYXJjaGJhci9zZWFyY2hiYXIucGFnZS5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/fivethree/components/searchbar/searchbar.page.ts": 
        /*!************************************************************************!*\
          !*** ./src/app/pages/fivethree/components/searchbar/searchbar.page.ts ***!
          \************************************************************************/
        /*! exports provided: SearchbarPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchbarPage", function () { return SearchbarPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _fivethree_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fivethree/core */ "./node_modules/@fivethree/core/fesm2015/fivethree-core.js");
            var SearchbarPage = /** @class */ (function () {
                function SearchbarPage() {
                    this.small = false;
                    this.states = _fivethree_core__WEBPACK_IMPORTED_MODULE_2__["DrawerState"];
                    this.state = _fivethree_core__WEBPACK_IMPORTED_MODULE_2__["DrawerState"].Bottom;
                }
                SearchbarPage.prototype.ngOnInit = function () { };
                SearchbarPage.prototype.onSearchInputChanged = function (event) {
                    this.searchInput = event.detail.value;
                };
                SearchbarPage.prototype.closeSearch = function () {
                    this.searchInput = '';
                };
                SearchbarPage.prototype.bottomSheetClose = function (search) {
                    search.closeSearchbar();
                };
                SearchbarPage.prototype.checkChanged = function (event) {
                    this.small = event.detail.checked;
                };
                return SearchbarPage;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('search', { static: true }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _fivethree_core__WEBPACK_IMPORTED_MODULE_2__["FivSearchbar"])
            ], SearchbarPage.prototype, "search", void 0);
            SearchbarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-searchbar',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./searchbar.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fivethree/components/searchbar/searchbar.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./searchbar.page.scss */ "./src/app/pages/fivethree/components/searchbar/searchbar.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], SearchbarPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-fivethree-components-searchbar-searchbar-module-es2015.js.map
//# sourceMappingURL=pages-fivethree-components-searchbar-searchbar-module-es5.js.map
//# sourceMappingURL=pages-fivethree-components-searchbar-searchbar-module-es5.js.map