(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-slides-slide-rtl-slide-rtl-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/slides/slide-rtl/slide-rtl.page.html": 
        /*!********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/slides/slide-rtl/slide-rtl.page.html ***!
          \********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Right to Left Slides</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-slides #slider pager [options]=\"slideOpts\" (ionSlideDidChange)=\"onSlideChanged()\" dir=\"rtl\">\r\n    <ion-slide *ngFor=\"let slide of slides\" [ngStyle]=\"{'background' : 'url(' + slide.imageUrl + ')'}\">\r\n      <h2>{{slide.title}}</h2>\r\n    </ion-slide>\r\n  </ion-slides>\r\n</ion-content>");
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/slides/slide-rtl/slide-rtl.module.ts": 
        /*!******************************************************************************!*\
          !*** ./src/app/pages/yannbf/components/slides/slide-rtl/slide-rtl.module.ts ***!
          \******************************************************************************/
        /*! exports provided: SlideRtlPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideRtlPageModule", function () { return SlideRtlPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _slide_rtl_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slide-rtl.page */ "./src/app/pages/yannbf/components/slides/slide-rtl/slide-rtl.page.ts");
            var routes = [
                {
                    path: '',
                    component: _slide_rtl_page__WEBPACK_IMPORTED_MODULE_6__["SlideRtlPage"]
                }
            ];
            var SlideRtlPageModule = /** @class */ (function () {
                function SlideRtlPageModule() {
                }
                return SlideRtlPageModule;
            }());
            SlideRtlPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
                    ],
                    declarations: [_slide_rtl_page__WEBPACK_IMPORTED_MODULE_6__["SlideRtlPage"]]
                })
            ], SlideRtlPageModule);
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/slides/slide-rtl/slide-rtl.page.scss": 
        /*!******************************************************************************!*\
          !*** ./src/app/pages/yannbf/components/slides/slide-rtl/slide-rtl.page.scss ***!
          \******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("h2 {\n  color: white;\n}\n\nion-slides,\n.swiper-container {\n  height: 100%;\n  width: auto;\n}\n\n.swiper-slide {\n  background-size: cover !important;\n  background-position: center !important;\n}\n\n.swiper-pagination-bullet {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvc2xpZGVzL3NsaWRlLXJ0bC9DOlxcVXNlcnNcXHNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZXRvc1xcX2lvbmljXFxpb25pYzQtY29tcG9uZW50cy9zcmNcXGFwcFxccGFnZXNcXHlhbm5iZlxcY29tcG9uZW50c1xcc2xpZGVzXFxzbGlkZS1ydGxcXHNsaWRlLXJ0bC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL3NsaWRlcy9zbGlkZS1ydGwvc2xpZGUtcnRsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjs7QURDRTs7RUFFRSxZQUFBO0VBQ0EsV0FBQTtBQ0VKOztBREFFO0VBQ0UsaUNBQUE7RUFDQSxzQ0FBQTtBQ0dKOztBRERFO0VBQ0UsdUJBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL3NsaWRlcy9zbGlkZS1ydGwvc2xpZGUtcnRsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgaW9uLXNsaWRlcyxcclxuICAuc3dpcGVyLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICB9XHJcbiAgLnN3aXBlci1zbGlkZSB7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB9IiwiaDIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1zbGlkZXMsXG4uc3dpcGVyLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/slides/slide-rtl/slide-rtl.page.ts": 
        /*!****************************************************************************!*\
          !*** ./src/app/pages/yannbf/components/slides/slide-rtl/slide-rtl.page.ts ***!
          \****************************************************************************/
        /*! exports provided: SlideRtlPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideRtlPage", function () { return SlideRtlPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            var SlideRtlPage = /** @class */ (function () {
                function SlideRtlPage() {
                    this.slides = [
                        {
                            title: 'Dream\'s Adventure',
                            imageUrl: 'assets/yannbf/img/lists/wishlist-1.jpg',
                            songs: 2,
                            private: false
                        },
                        {
                            title: 'For the Weekend',
                            imageUrl: 'assets/yannbf/img/lists/wishlist-2.jpg',
                            songs: 4,
                            private: false
                        },
                        {
                            title: 'Family Time',
                            imageUrl: 'assets/yannbf/img/lists/wishlist-3.jpg',
                            songs: 5,
                            private: true
                        },
                        {
                            title: 'My Trip',
                            imageUrl: 'assets/yannbf/img/lists/wishlist-4.jpg',
                            songs: 12,
                            private: true
                        }
                    ];
                    this.slideOpts = {
                        loop: true,
                        autoplay: {
                            delay: 2000,
                        },
                    };
                }
                SlideRtlPage.prototype.ngOnInit = function () {
                };
                SlideRtlPage.prototype.onSlideChanged = function () {
                    var currentIndex = this.slider.getActiveIndex();
                    console.log('Slide changed! Current index is', currentIndex);
                };
                return SlideRtlPage;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slider', { static: true }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
            ], SlideRtlPage.prototype, "slider", void 0);
            SlideRtlPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-slide-rtl',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./slide-rtl.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/slides/slide-rtl/slide-rtl.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./slide-rtl.page.scss */ "./src/app/pages/yannbf/components/slides/slide-rtl/slide-rtl.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], SlideRtlPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-yannbf-components-slides-slide-rtl-slide-rtl-module-es2015.js.map
//# sourceMappingURL=pages-yannbf-components-slides-slide-rtl-slide-rtl-module-es5.js.map
//# sourceMappingURL=pages-yannbf-components-slides-slide-rtl-slide-rtl-module-es5.js.map