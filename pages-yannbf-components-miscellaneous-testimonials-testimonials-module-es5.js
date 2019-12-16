(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-miscellaneous-testimonials-testimonials-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/miscellaneous/testimonials/testimonials.page.html": 
        /*!*********************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/miscellaneous/testimonials/testimonials.page.html ***!
          \*********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title> Testimonials </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div *ngFor=\"let testimonial of testimonials\">\r\n        <figure class=\"snip1574\">\r\n          <img [src]=\"testimonial.imageUrl\" alt=\"profile-sample2\" />\r\n          <figcaption>\r\n            <blockquote>\r\n              <p>{{testimonial.quote}}</p>\r\n            </blockquote>\r\n            <h3>{{testimonial.name}}</h3>\r\n            <h5>{{testimonial.position}}</h5>\r\n          </figcaption>\r\n        </figure>\r\n      </div>\r\n</ion-content>");
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/miscellaneous/testimonials/testimonials.module.ts": 
        /*!*******************************************************************************************!*\
          !*** ./src/app/pages/yannbf/components/miscellaneous/testimonials/testimonials.module.ts ***!
          \*******************************************************************************************/
        /*! exports provided: TestimonialsPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialsPageModule", function () { return TestimonialsPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _testimonials_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./testimonials.page */ "./src/app/pages/yannbf/components/miscellaneous/testimonials/testimonials.page.ts");
            var routes = [
                {
                    path: '',
                    component: _testimonials_page__WEBPACK_IMPORTED_MODULE_6__["TestimonialsPage"]
                }
            ];
            var TestimonialsPageModule = /** @class */ (function () {
                function TestimonialsPageModule() {
                }
                return TestimonialsPageModule;
            }());
            TestimonialsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
                    ],
                    declarations: [_testimonials_page__WEBPACK_IMPORTED_MODULE_6__["TestimonialsPage"]]
                })
            ], TestimonialsPageModule);
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/miscellaneous/testimonials/testimonials.page.scss": 
        /*!*******************************************************************************************!*\
          !*** ./src/app/pages/yannbf/components/miscellaneous/testimonials/testimonials.page.scss ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n@import url(https://fonts.googleapis.com/css?family=Lato);\n@import url(https://fonts.googleapis.com/css?family=Oswald);\n@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css);\n@charset \"UTF-8\";\n.snip1574 {\n  font-family: \"Lato\", Arial, sans-serif;\n  position: relative;\n  display: inline-block;\n  overflow: hidden;\n  margin: 8px;\n  min-width: 250px;\n  max-width: 310px;\n  width: 100%;\n  background-color: #000000;\n  color: #ffffff;\n  text-align: center;\n  font-size: 16px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);\n}\n.snip1574 * {\n  box-sizing: border-box;\n}\n.snip1574 img {\n  max-width: 100%;\n  vertical-align: top;\n  opacity: 0.7;\n}\n.snip1574 figcaption {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 80px 10% 15%;\n}\n.snip1574 figcaption:before {\n  font-family: \"FontAwesome\";\n  content: \"“\";\n  position: absolute;\n  font-size: 170px;\n  opacity: 0.35;\n  font-style: normal;\n  transform: translateX(-50%);\n  top: 0px;\n  left: 50%;\n}\n.snip1574 blockquote {\n  padding: 0;\n  margin: 0;\n  font-style: italic;\n  font-size: 1.2em;\n}\n.snip1574 h3 {\n  font-family: \"Oswald\";\n  text-transform: uppercase;\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 24px;\n  margin: 3px 0;\n}\n.snip1574 h5 {\n  font-weight: 400;\n  margin: 0;\n  text-transform: uppercase;\n  color: #bbb;\n  letter-spacing: 1px;\n}\n/* Demo purposes only */\nion-content {\n  background-color: #212121 !important;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbWlzY2VsbGFuZW91cy90ZXN0aW1vbmlhbHMvQzpcXFVzZXJzXFxzYWJhZGlcXERvY3VtZW50c1xcUHJvamV0b3NcXF9pb25pY1xcaW9uaWM0LWNvbXBvbmVudHMvc3JjXFxhcHBcXHBhZ2VzXFx5YW5uYmZcXGNvbXBvbmVudHNcXG1pc2NlbGxhbmVvdXNcXHRlc3RpbW9uaWFsc1xcdGVzdGltb25pYWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbWlzY2VsbGFuZW91cy90ZXN0aW1vbmlhbHMvdGVzdGltb25pYWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQVEseURBQUE7QUFDQSwyREFBQTtBQUNBLHdGQUFBO0FDRlIsZ0JBQWdCO0FER2hCO0VBQ0Usc0NBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx1Q0FBQTtBQ0VGO0FEQ0E7RUFFRSxzQkFBQTtBQ0VGO0FEQ0E7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDRUY7QURDQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLHFCQUFBO0FDRUY7QURDQTtFQUNFLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFFQSwyQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDRUY7QURDQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0VGO0FEQ0E7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDRUY7QURDQTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDRUY7QURDQSx1QkFBQTtBQUVBO0VBQ0Usb0NBQUE7RUFDQSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbWlzY2VsbGFuZW91cy90ZXN0aW1vbmlhbHMvdGVzdGltb25pYWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvKTtcclxuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9zd2FsZCk7XHJcbkBpbXBvcnQgdXJsKGh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNC4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzcyk7XHJcbi5zbmlwMTU3NCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbWFyZ2luOiA4cHg7XHJcbiAgbWluLXdpZHRoOiAyNTBweDtcclxuICBtYXgtd2lkdGg6IDMxMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbn1cclxuXHJcbi5zbmlwMTU3NCAqIHtcclxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLnNuaXAxNTc0IGltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgb3BhY2l0eTogMC43O1xyXG59XHJcblxyXG4uc25pcDE1NzQgZmlnY2FwdGlvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBwYWRkaW5nOiA4MHB4IDEwJSAxNSU7XHJcbn1cclxuXHJcbi5zbmlwMTU3NCBmaWdjYXB0aW9uOmJlZm9yZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiRm9udEF3ZXNvbWVcIjtcclxuICBjb250ZW50OiBcIlxcMjAxQ1wiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBmb250LXNpemU6IDE3MHB4O1xyXG4gIG9wYWNpdHk6IDAuMzU7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICB0b3A6IDBweDtcclxuICBsZWZ0OiA1MCU7XHJcbn1cclxuXHJcbi5zbmlwMTU3NCBibG9ja3F1b3RlIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxufVxyXG5cclxuLnNuaXAxNTc0IGgzIHtcclxuICBmb250LWZhbWlseTogXCJPc3dhbGRcIjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIG1hcmdpbjogM3B4IDA7XHJcbn1cclxuXHJcbi5zbmlwMTU3NCBoNSB7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtYXJnaW46IDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjogI2JiYjtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG4vKiBEZW1vIHB1cnBvc2VzIG9ubHkgKi9cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiIsIkBjaGFyc2V0IFwiVVRGLThcIjtcbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvKTtcbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Pc3dhbGQpO1xuQGltcG9ydCB1cmwoaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC40LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzKTtcbi5zbmlwMTU3NCB7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDhweDtcbiAgbWluLXdpZHRoOiAyNTBweDtcbiAgbWF4LXdpZHRoOiAzMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufVxuXG4uc25pcDE1NzQgKiB7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLnNuaXAxNTc0IGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4uc25pcDE1NzQgZmlnY2FwdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBwYWRkaW5nOiA4MHB4IDEwJSAxNSU7XG59XG5cbi5zbmlwMTU3NCBmaWdjYXB0aW9uOmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnRBd2Vzb21lXCI7XG4gIGNvbnRlbnQ6IFwi4oCcXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiAxNzBweDtcbiAgb3BhY2l0eTogMC4zNTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB0b3A6IDBweDtcbiAgbGVmdDogNTAlO1xufVxuXG4uc25pcDE1NzQgYmxvY2txdW90ZSB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuXG4uc25pcDE1NzQgaDMge1xuICBmb250LWZhbWlseTogXCJPc3dhbGRcIjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luOiAzcHggMDtcbn1cblxuLnNuaXAxNTc0IGg1IHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogI2JiYjtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLyogRGVtbyBwdXJwb3NlcyBvbmx5ICovXG5pb24tY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjEgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/miscellaneous/testimonials/testimonials.page.ts": 
        /*!*****************************************************************************************!*\
          !*** ./src/app/pages/yannbf/components/miscellaneous/testimonials/testimonials.page.ts ***!
          \*****************************************************************************************/
        /*! exports provided: TestimonialsPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialsPage", function () { return TestimonialsPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var TestimonialsPage = /** @class */ (function () {
                function TestimonialsPage() {
                    this.testimonials = [
                        {
                            imageUrl: 'assets/yannbf/img/misc/testimonial-1.jpg',
                            quote: 'Which is worse, that everyone has his price, or that the price is always so low.',
                            name: 'Sue Shei',
                            position: 'Founder'
                        },
                        {
                            imageUrl: 'assets/yannbf/img/misc/testimonial-2.jpg',
                            quote: 'I\'m killing time while I wait for life to shower me with meaning and happiness.',
                            name: 'Will Barrow',
                            position: 'Web Designer'
                        },
                        {
                            imageUrl: 'assets/yannbf/img/misc/testimonial-3.jpg',
                            quote: 'The only skills I have the patience to learn are those that have no real application in life.',
                            name: 'Indigo Violet',
                            position: 'Public Relations'
                        },
                        {
                            imageUrl: 'assets/yannbf/img/misc/testimonial-1.jpg',
                            quote: 'Which is worse, that everyone has his price, or that the price is always so low.',
                            name: 'Sue Shei',
                            position: 'Founder'
                        },
                        {
                            imageUrl: 'assets/yannbf/img/misc/testimonial-2.jpg',
                            quote: 'I\'m killing time while I wait for life to shower me with meaning and happiness.',
                            name: 'Will Barrow',
                            position: 'Web Designer'
                        },
                        {
                            imageUrl: 'assets/yannbf/img/misc/testimonial-3.jpg',
                            quote: 'The only skills I have the patience to learn are those that have no real application in life.',
                            name: 'Indigo Violet',
                            position: 'Public Relations'
                        },
                    ];
                }
                TestimonialsPage.prototype.ngOnInit = function () {
                };
                return TestimonialsPage;
            }());
            TestimonialsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-testimonials',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./testimonials.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/miscellaneous/testimonials/testimonials.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./testimonials.page.scss */ "./src/app/pages/yannbf/components/miscellaneous/testimonials/testimonials.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], TestimonialsPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-yannbf-components-miscellaneous-testimonials-testimonials-module-es2015.js.map
//# sourceMappingURL=pages-yannbf-components-miscellaneous-testimonials-testimonials-module-es5.js.map
//# sourceMappingURL=pages-yannbf-components-miscellaneous-testimonials-testimonials-module-es5.js.map