(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-slides-slides-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/slides/slides.page.html": 
        /*!*******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/slides/slides.page.html ***!
          \*******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Slides</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-list>\r\n    <!-- <ion-item *ngFor=\"let item of items\" (click)=\"itemTapped($event, item)\"> -->\r\n    <ion-item *ngFor=\"let item of items\"  [routerLink]=\"[item.page]\">\r\n      {{item.title}}\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n");
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/slides/slides.module.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/pages/yannbf/components/slides/slides.module.ts ***!
          \*****************************************************************/
        /*! exports provided: SlidesPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesPageModule", function () { return SlidesPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _slides_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slides.page */ "./src/app/pages/yannbf/components/slides/slides.page.ts");
            var routes = [
                {
                    path: '',
                    component: _slides_page__WEBPACK_IMPORTED_MODULE_6__["SlidesPage"]
                }
            ];
            var SlidesPageModule = /** @class */ (function () {
                function SlidesPageModule() {
                }
                return SlidesPageModule;
            }());
            SlidesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
                    ],
                    declarations: [_slides_page__WEBPACK_IMPORTED_MODULE_6__["SlidesPage"]]
                })
            ], SlidesPageModule);
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/slides/slides.page.scss": 
        /*!*****************************************************************!*\
          !*** ./src/app/pages/yannbf/components/slides/slides.page.scss ***!
          \*****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL3NsaWRlcy9zbGlkZXMucGFnZS5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/slides/slides.page.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/pages/yannbf/components/slides/slides.page.ts ***!
          \***************************************************************/
        /*! exports provided: SlidesPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesPage", function () { return SlidesPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            var SlidesPage = /** @class */ (function () {
                function SlidesPage(navCtrl) {
                    this.navCtrl = navCtrl;
                    this.items = [
                        {
                            title: 'Carousel',
                            page: '/slide-carousel'
                        },
                        {
                            title: 'Color changing sliders',
                            page: '/slide-color-changing'
                        },
                        {
                            title: 'Custom pagination',
                            page: '/slide-custom-pagination'
                        },
                        {
                            title: 'Free mode slide (no fixed positions)',
                            page: '/slide-free-mode'
                        },
                        {
                            title: 'List of Sliders',
                            page: '/slide-list'
                        },
                        {
                            title: 'Nested slides',
                            page: '/slide-nested'
                        },
                        {
                            title: 'Slide transitions',
                            page: '/slide-transitions'
                        },
                        {
                            title: 'Slide right to left',
                            page: '/slide-rtl'
                        },
                        {
                            title: 'Slide with pagination arrows',
                            page: '/slide-with-arrows'
                        },
                        {
                            title: 'Slide Walkthrough',
                            page: '/slide-walkthrough'
                        },
                        {
                            title: 'Photo Gallery (not working)',
                            page: '/slide-photo-gallery'
                        },
                    ];
                }
                SlidesPage.prototype.ngOnInit = function () {
                };
                SlidesPage.prototype.itemTapped = function (event, item) {
                    this.navCtrl.navigateForward(item.page);
                };
                return SlidesPage;
            }());
            SlidesPage.ctorParameters = function () { return [
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
            ]; };
            SlidesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-slides',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./slides.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/slides/slides.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./slides.page.scss */ "./src/app/pages/yannbf/components/slides/slides.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
            ], SlidesPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-yannbf-components-slides-slides-module-es2015.js.map
//# sourceMappingURL=pages-yannbf-components-slides-slides-module-es5.js.map
//# sourceMappingURL=pages-yannbf-components-slides-slides-module-es5.js.map