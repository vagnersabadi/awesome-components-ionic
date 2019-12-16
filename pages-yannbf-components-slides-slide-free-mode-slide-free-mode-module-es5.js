(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-slides-slide-free-mode-slide-free-mode-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/slides/slide-free-mode/slide-free-mode.page.html": 
        /*!********************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/slides/slide-free-mode/slide-free-mode.page.html ***!
          \********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Free Mode Slides</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-slides [options]=\"slideOpts\">\r\n    <ion-slide *ngFor=\"let slide of slides\" [ngStyle]=\"{'background' : 'url(' + slide.imageUrl + ')'}\">\r\n      <h2>{{slide.title}}</h2>\r\n    </ion-slide>\r\n  </ion-slides>\r\n</ion-content>");
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/slides/slide-free-mode/slide-free-mode.module.ts": 
        /*!******************************************************************************************!*\
          !*** ./src/app/pages/yannbf/components/slides/slide-free-mode/slide-free-mode.module.ts ***!
          \******************************************************************************************/
        /*! exports provided: SlideFreeModePageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideFreeModePageModule", function () { return SlideFreeModePageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _slide_free_mode_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slide-free-mode.page */ "./src/app/pages/yannbf/components/slides/slide-free-mode/slide-free-mode.page.ts");
            var routes = [
                {
                    path: '',
                    component: _slide_free_mode_page__WEBPACK_IMPORTED_MODULE_6__["SlideFreeModePage"]
                }
            ];
            var SlideFreeModePageModule = /** @class */ (function () {
                function SlideFreeModePageModule() {
                }
                return SlideFreeModePageModule;
            }());
            SlideFreeModePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
                    ],
                    declarations: [_slide_free_mode_page__WEBPACK_IMPORTED_MODULE_6__["SlideFreeModePage"]]
                })
            ], SlideFreeModePageModule);
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/slides/slide-free-mode/slide-free-mode.page.scss": 
        /*!******************************************************************************************!*\
          !*** ./src/app/pages/yannbf/components/slides/slide-free-mode/slide-free-mode.page.scss ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("h2 {\n  color: white;\n}\n\nion-slides {\n  width: 100%;\n  height: 300px;\n  margin: 20px auto;\n}\n\n.swiper-slide {\n  background-size: cover !important;\n  background-position: center !important;\n}\n\nion-slides {\n  --bullet-background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvc2xpZGVzL3NsaWRlLWZyZWUtbW9kZS9DOlxcVXNlcnNcXHNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZXRvc1xcX2lvbmljXFxpb25pYzQtY29tcG9uZW50cy9zcmNcXGFwcFxccGFnZXNcXHlhbm5iZlxcY29tcG9uZW50c1xcc2xpZGVzXFxzbGlkZS1mcmVlLW1vZGVcXHNsaWRlLWZyZWUtbW9kZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL3NsaWRlcy9zbGlkZS1mcmVlLW1vZGUvc2xpZGUtZnJlZS1tb2RlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjs7QURDQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNFRjs7QURBQTtFQUNFLGlDQUFBO0VBQ0Esc0NBQUE7QUNHRjs7QURBQTtFQUNFLDBCQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy9zbGlkZXMvc2xpZGUtZnJlZS1tb2RlL3NsaWRlLWZyZWUtbW9kZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbmlvbi1zbGlkZXMge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbn1cclxuLnN3aXBlci1zbGlkZSB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tc2xpZGVzIHtcclxuICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG4iLCJoMiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXNsaWRlcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwMHB4O1xuICBtYXJnaW46IDIwcHggYXV0bztcbn1cblxuLnN3aXBlci1zbGlkZSB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zbGlkZXMge1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/slides/slide-free-mode/slide-free-mode.page.ts": 
        /*!****************************************************************************************!*\
          !*** ./src/app/pages/yannbf/components/slides/slide-free-mode/slide-free-mode.page.ts ***!
          \****************************************************************************************/
        /*! exports provided: SlideFreeModePage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideFreeModePage", function () { return SlideFreeModePage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var SlideFreeModePage = /** @class */ (function () {
                function SlideFreeModePage() {
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
                        effect: 'fade',
                        freeMode: true,
                        loop: true,
                        speed: 1500,
                        slidesPerView: 2,
                        spaceBetween: 10,
                    };
                    for (var i = 0; i < 20; i++) {
                        this.slides.push(this.slides[i % 4]);
                    }
                }
                SlideFreeModePage.prototype.ngOnInit = function () {
                };
                return SlideFreeModePage;
            }());
            SlideFreeModePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-slide-free-mode',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./slide-free-mode.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/slides/slide-free-mode/slide-free-mode.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./slide-free-mode.page.scss */ "./src/app/pages/yannbf/components/slides/slide-free-mode/slide-free-mode.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], SlideFreeModePage);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-yannbf-components-slides-slide-free-mode-slide-free-mode-module-es2015.js.map
//# sourceMappingURL=pages-yannbf-components-slides-slide-free-mode-slide-free-mode-module-es5.js.map
//# sourceMappingURL=pages-yannbf-components-slides-slide-free-mode-slide-free-mode-module-es5.js.map