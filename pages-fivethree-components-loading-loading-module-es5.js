(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-fivethree-components-loading-loading-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fivethree/components/loading/loading.page.html": 
        /*!************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fivethree/components/loading/loading.page.html ***!
          \************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Loading</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"ion-text-center\">\r\n    <ion-button [disabled]=\"bar.loading\" (click)=\"bar.fillIn(2000)\">\r\n      fill\r\n    </ion-button>\r\n\r\n    <ion-button [disabled]=\"bar.loading\" (click)=\"bar.shrinkIn(2000)\">\r\n      shrink\r\n    </ion-button>\r\n    <ion-button [disabled]=\"bar.loading\" (click)=\"bar.load()\">\r\n      load\r\n    </ion-button>\r\n    <ion-button [disabled]=\"!bar.loading\" (click)=\"bar.unload()\">\r\n      unload\r\n    </ion-button>\r\n    <ion-button [disabled]=\"!bar.loading\" (click)=\"bar.complete()\">\r\n      complete\r\n    </ion-button>\r\n  </div>\r\n\r\n\r\n  <div class=\"wrapper\">\r\n    <div [fivCenter] class=\"progress-bar\">\r\n      <fiv-loading-progress-bar #bar></fiv-loading-progress-bar>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"wrapper\">\r\n    <div [fivCenter]>\r\n      <fiv-loading-spinner></fiv-loading-spinner>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</ion-content>");
            /***/ 
        }),
        /***/ "./src/app/pages/fivethree/components/loading/loading.module.ts": 
        /*!**********************************************************************!*\
          !*** ./src/app/pages/fivethree/components/loading/loading.module.ts ***!
          \**********************************************************************/
        /*! exports provided: LoadingPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingPageModule", function () { return LoadingPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _loading_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loading.page */ "./src/app/pages/fivethree/components/loading/loading.page.ts");
            /* harmony import */ var _fivethree_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fivethree/core */ "./node_modules/@fivethree/core/fesm2015/fivethree-core.js");
            var routes = [
                {
                    path: '',
                    component: _loading_page__WEBPACK_IMPORTED_MODULE_6__["LoadingPage"]
                }
            ];
            var LoadingPageModule = /** @class */ (function () {
                function LoadingPageModule() {
                }
                return LoadingPageModule;
            }());
            LoadingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                        _fivethree_core__WEBPACK_IMPORTED_MODULE_7__["FivLoadingProgressBarModule"],
                        _fivethree_core__WEBPACK_IMPORTED_MODULE_7__["FivLoadingSpinnerModule"],
                        _fivethree_core__WEBPACK_IMPORTED_MODULE_7__["FivCenterModule"]
                    ],
                    declarations: [_loading_page__WEBPACK_IMPORTED_MODULE_6__["LoadingPage"]]
                })
            ], LoadingPageModule);
            /***/ 
        }),
        /***/ "./src/app/pages/fivethree/components/loading/loading.page.scss": 
        /*!**********************************************************************!*\
          !*** ./src/app/pages/fivethree/components/loading/loading.page.scss ***!
          \**********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  top: 16px;\n}\n\nion-list {\n  padding-bottom: 8px;\n}\n\n.progress-bar {\n  width: 80%;\n  height: 5px;\n  background: var(--ion-color-light);\n}\n\n:host {\n  --fiv-color-fab: var(--ion-color-light);\n}\n\nfiv-loading-progress-bar {\n  --background-progress-bar: purple;\n  --color-spin-0: red;\n  --color-spin-50: green;\n  --color-spin-100: yellow;\n}\n\nion-item-divider {\n  border-bottom: 0;\n}\n\nion-item {\n  --border-style: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZml2ZXRocmVlL2NvbXBvbmVudHMvbG9hZGluZy9DOlxcVXNlcnNcXHNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZXRvc1xcX2lvbmljXFxpb25pYzQtY29tcG9uZW50cy9zcmNcXGFwcFxccGFnZXNcXGZpdmV0aHJlZVxcY29tcG9uZW50c1xcbG9hZGluZ1xcbG9hZGluZy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2ZpdmV0aHJlZS9jb21wb25lbnRzL2xvYWRpbmcvbG9hZGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0FDQ0o7O0FERUU7RUFDRSxtQkFBQTtBQ0NKOztBREVFO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtBQ0NKOztBREVFO0VBQ0UsdUNBQUE7QUNDSjs7QURFRTtFQUNFLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0FDQ0o7O0FERUU7RUFDRSxnQkFBQTtBQ0NKOztBRENFO0VBQ0Usb0JBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpdmV0aHJlZS9jb21wb25lbnRzL2xvYWRpbmcvbG9hZGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XHJcbiAgICB0b3A6IDE2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1saXN0IHtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9ncmVzcy1iYXIge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICB9XHJcbiAgXHJcbiAgOmhvc3Qge1xyXG4gICAgLS1maXYtY29sb3ItZmFiOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gIH1cclxuICBcclxuICBmaXYtbG9hZGluZy1wcm9ncmVzcy1iYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kLXByb2dyZXNzLWJhcjogcHVycGxlO1xyXG4gICAgLS1jb2xvci1zcGluLTA6IHJlZDtcclxuICAgIC0tY29sb3Itc3Bpbi01MDogZ3JlZW47XHJcbiAgICAtLWNvbG9yLXNwaW4tMTAwOiB5ZWxsb3c7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1pdGVtLWRpdmlkZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICB9XHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgLS1ib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgfVxyXG4gICIsImlvbi1jYXJkIHtcbiAgdG9wOiAxNnB4O1xufVxuXG5pb24tbGlzdCB7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG5cbi5wcm9ncmVzcy1iYXIge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuOmhvc3Qge1xuICAtLWZpdi1jb2xvci1mYWI6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbmZpdi1sb2FkaW5nLXByb2dyZXNzLWJhciB7XG4gIC0tYmFja2dyb3VuZC1wcm9ncmVzcy1iYXI6IHB1cnBsZTtcbiAgLS1jb2xvci1zcGluLTA6IHJlZDtcbiAgLS1jb2xvci1zcGluLTUwOiBncmVlbjtcbiAgLS1jb2xvci1zcGluLTEwMDogeWVsbG93O1xufVxuXG5pb24taXRlbS1kaXZpZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1zdHlsZTogbm9uZTtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/fivethree/components/loading/loading.page.ts": 
        /*!********************************************************************!*\
          !*** ./src/app/pages/fivethree/components/loading/loading.page.ts ***!
          \********************************************************************/
        /*! exports provided: LoadingPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingPage", function () { return LoadingPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var LoadingPage = /** @class */ (function () {
                function LoadingPage() {
                    this.mode = 'determinate';
                    this.value = 0;
                }
                LoadingPage.prototype.ngOnInit = function () { };
                LoadingPage.prototype.fabComplete = function () { };
                LoadingPage.prototype.buttonComplete = function () { };
                LoadingPage.prototype.showHint = function (refresher) {
                    refresher.showHint();
                };
                LoadingPage.prototype.onRefresh = function (refresher) {
                    setTimeout(function () {
                        refresher.completeRefresh();
                    }, 2000);
                };
                LoadingPage.prototype.complete = function () { };
                return LoadingPage;
            }());
            LoadingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-loading',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loading.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fivethree/components/loading/loading.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loading.page.scss */ "./src/app/pages/fivethree/components/loading/loading.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], LoadingPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-fivethree-components-loading-loading-module-es2015.js.map
//# sourceMappingURL=pages-fivethree-components-loading-loading-module-es5.js.map
//# sourceMappingURL=pages-fivethree-components-loading-loading-module-es5.js.map