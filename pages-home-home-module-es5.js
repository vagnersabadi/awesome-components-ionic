(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html": 
        /*!*********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
          \*********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Home\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card class=\"welcome-card\">\r\n    <img src=\"/assets/shapes.svg\" alt=\"\" />\r\n    <ion-card-header>\r\n      <ion-card-subtitle>Get Started</ion-card-subtitle>\r\n      <ion-card-title>Welcome to my library collection for ionic 4 </ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <p>This project aims to unite different component libraries for ionic. All libraries have links to their\r\n        respective repositories/websites.</p>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-list lines=\"none\">\r\n    <ion-list-header>\r\n      <ion-label>Available libraries </ion-label>\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-icon slot=\"start\" color=\"medium\" name=\"book\"></ion-icon>\r\n      <ion-label>Fivethree</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-icon slot=\"start\" color=\"medium\" name=\"book\"></ion-icon>\r\n      <ion-label>Yannbf Components</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n        <ion-icon slot=\"start\" color=\"medium\" name=\"book\"></ion-icon>\r\n        <ion-label>Angular Material.</ion-label>\r\n      </ion-item>\r\n  </ion-list>\r\n</ion-content>");
            /***/ 
        }),
        /***/ "./src/app/pages/home/home.module.ts": 
        /*!*******************************************!*\
          !*** ./src/app/pages/home/home.module.ts ***!
          \*******************************************/
        /*! exports provided: HomePageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function () { return HomePageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
            var HomePageModule = /** @class */ (function () {
                function HomePageModule() {
                }
                return HomePageModule;
            }());
            HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                            {
                                path: '',
                                component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                            }
                        ])
                    ],
                    declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
                })
            ], HomePageModule);
            /***/ 
        }),
        /***/ "./src/app/pages/home/home.page.scss": 
        /*!*******************************************!*\
          !*** ./src/app/pages/home/home.page.scss ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9DOlxcVXNlcnNcXHNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZXRvc1xcX2lvbmljXFxpb25pYzQtY29tcG9uZW50cy9zcmNcXGFwcFxccGFnZXNcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW1nIHtcclxuICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuIiwiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/pages/home/home.page.ts": 
        /*!*****************************************!*\
          !*** ./src/app/pages/home/home.page.ts ***!
          \*****************************************/
        /*! exports provided: HomePage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function () { return HomePage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HomePage = /** @class */ (function () {
                function HomePage() {
                }
                return HomePage;
            }());
            HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], HomePage);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map
//# sourceMappingURL=pages-home-home-module-es5.js.map
//# sourceMappingURL=pages-home-home-module-es5.js.map