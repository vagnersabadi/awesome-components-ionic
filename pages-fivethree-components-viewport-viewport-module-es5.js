(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-fivethree-components-viewport-viewport-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fivethree/components/viewport/viewport.page.html": 
        /*!**************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fivethree/components/viewport/viewport.page.html ***!
          \**************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Viewport</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <p *ngIf=\"!visible\" class=\"ion-text-center\">\r\n    scroll to reveal the button\r\n  </p>\r\n  <div class=\"container\">\r\n\r\n    <ion-button [fivCenter] fivViewport (fivAppear)=\"appear($event)\" (fivDisappear)=\"disappear($event)\">\r\n      Click me\r\n    </ion-button>\r\n\r\n  </div>\r\n</ion-content>");
            /***/ 
        }),
        /***/ "./src/app/pages/fivethree/components/viewport/viewport.module.ts": 
        /*!************************************************************************!*\
          !*** ./src/app/pages/fivethree/components/viewport/viewport.module.ts ***!
          \************************************************************************/
        /*! exports provided: ViewportPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewportPageModule", function () { return ViewportPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _viewport_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./viewport.page */ "./src/app/pages/fivethree/components/viewport/viewport.page.ts");
            /* harmony import */ var _fivethree_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fivethree/core */ "./node_modules/@fivethree/core/fesm2015/fivethree-core.js");
            var routes = [
                {
                    path: '',
                    component: _viewport_page__WEBPACK_IMPORTED_MODULE_6__["ViewportPage"]
                }
            ];
            var ViewportPageModule = /** @class */ (function () {
                function ViewportPageModule() {
                }
                return ViewportPageModule;
            }());
            ViewportPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                        _fivethree_core__WEBPACK_IMPORTED_MODULE_7__["FivViewportModule"],
                        _fivethree_core__WEBPACK_IMPORTED_MODULE_7__["FivCenterModule"]
                    ],
                    declarations: [_viewport_page__WEBPACK_IMPORTED_MODULE_6__["ViewportPage"]]
                })
            ], ViewportPageModule);
            /***/ 
        }),
        /***/ "./src/app/pages/fivethree/components/viewport/viewport.page.scss": 
        /*!************************************************************************!*\
          !*** ./src/app/pages/fivethree/components/viewport/viewport.page.scss ***!
          \************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container {\n  min-height: 300vh;\n  position: relative;\n}\n.container ion-button {\n  bottom: 50px;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZml2ZXRocmVlL2NvbXBvbmVudHMvdmlld3BvcnQvQzpcXFVzZXJzXFxzYWJhZGlcXERvY3VtZW50c1xcUHJvamV0b3NcXF9pb25pY1xcaW9uaWM0LWNvbXBvbmVudHMvc3JjXFxhcHBcXHBhZ2VzXFxmaXZldGhyZWVcXGNvbXBvbmVudHNcXHZpZXdwb3J0XFx2aWV3cG9ydC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2ZpdmV0aHJlZS9jb21wb25lbnRzL3ZpZXdwb3J0L3ZpZXdwb3J0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSjtBRENJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FDQ04iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9maXZldGhyZWUvY29tcG9uZW50cy92aWV3cG9ydC92aWV3cG9ydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDMwMHZoO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIFxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgIGJvdHRvbTogNTBweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG4gIH0iLCIuY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMzAwdmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jb250YWluZXIgaW9uLWJ1dHRvbiB7XG4gIGJvdHRvbTogNTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/pages/fivethree/components/viewport/viewport.page.ts": 
        /*!**********************************************************************!*\
          !*** ./src/app/pages/fivethree/components/viewport/viewport.page.ts ***!
          \**********************************************************************/
        /*! exports provided: ViewportPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewportPage", function () { return ViewportPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ViewportPage = /** @class */ (function () {
                function ViewportPage() {
                    this.visible = false;
                }
                ViewportPage.prototype.ngOnInit = function () { };
                ViewportPage.prototype.appear = function (event) {
                    this.visible = true;
                };
                ViewportPage.prototype.disappear = function (event) {
                    this.visible = false;
                };
                return ViewportPage;
            }());
            ViewportPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-viewport',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./viewport.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fivethree/components/viewport/viewport.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./viewport.page.scss */ "./src/app/pages/fivethree/components/viewport/viewport.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], ViewportPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-fivethree-components-viewport-viewport-module-es2015.js.map
//# sourceMappingURL=pages-fivethree-components-viewport-viewport-module-es5.js.map
//# sourceMappingURL=pages-fivethree-components-viewport-viewport-module-es5.js.map