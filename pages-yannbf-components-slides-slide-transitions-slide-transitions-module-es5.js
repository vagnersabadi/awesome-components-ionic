(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-slides-slide-transitions-slide-transitions-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/slides/slide-transitions/slide-transitions.page.html": 
        /*!************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/slides/slide-transitions/slide-transitions.page.html ***!
          \************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Slide Transitions</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-text-center\">\r\n  <h3>Slide (default)</h3>\r\n  <ion-slides [options]=\"slideOpts1\">\r\n    <ion-slide *ngFor=\"let slide of slides\" [ngStyle]=\"{'background' : 'url(' + slide.imageUrl + ')'}\">\r\n      <h2>{{slide.title}}</h2>\r\n    </ion-slide>\r\n  </ion-slides>\r\n\r\n  <h3>Cube</h3>\r\n  <ion-slides [options]=\"slideOpts2\">\r\n    <ion-slide *ngFor=\"let slide of slides\" [ngStyle]=\"{'background' : 'url(' + slide.imageUrl + ')'}\">\r\n      <h2>{{slide.title}}</h2>\r\n    </ion-slide>\r\n  </ion-slides>\r\n\r\n  <h3>Coverflow</h3>\r\n  <ion-slides [options]=\"slideOpts3\">\r\n    <ion-slide *ngFor=\"let slide of slides\" [ngStyle]=\"{'background' : 'url(' + slide.imageUrl + ')'}\">\r\n      <h2>{{slide.title}}</h2>\r\n    </ion-slide>\r\n  </ion-slides>\r\n\r\n  <h3>Fade</h3>\r\n  <ion-slides [options]=\"slideOpts4\">\r\n    <ion-slide *ngFor=\"let slide of slides\" [ngStyle]=\"{'background' : 'url(' + slide.imageUrl + ')'}\">\r\n      <h2>{{slide.title}}</h2>\r\n    </ion-slide>\r\n  </ion-slides>\r\n\r\n  <h3>Flip</h3>\r\n  <ion-slides [options]=\"slideOpts5\">\r\n    <ion-slide *ngFor=\"let slide of slides\" [ngStyle]=\"{'background' : 'url(' + slide.imageUrl + ')'}\">\r\n      <h2>{{slide.title}}</h2>\r\n    </ion-slide>\r\n  </ion-slides>\r\n</ion-content>");
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/slides/slide-transitions/slide-transitions.module.ts": 
        /*!**********************************************************************************************!*\
          !*** ./src/app/pages/yannbf/components/slides/slide-transitions/slide-transitions.module.ts ***!
          \**********************************************************************************************/
        /*! exports provided: SlideTransitionsPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideTransitionsPageModule", function () { return SlideTransitionsPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _slide_transitions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slide-transitions.page */ "./src/app/pages/yannbf/components/slides/slide-transitions/slide-transitions.page.ts");
            var routes = [
                {
                    path: '',
                    component: _slide_transitions_page__WEBPACK_IMPORTED_MODULE_6__["SlideTransitionsPage"]
                }
            ];
            var SlideTransitionsPageModule = /** @class */ (function () {
                function SlideTransitionsPageModule() {
                }
                return SlideTransitionsPageModule;
            }());
            SlideTransitionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
                    ],
                    declarations: [_slide_transitions_page__WEBPACK_IMPORTED_MODULE_6__["SlideTransitionsPage"]]
                })
            ], SlideTransitionsPageModule);
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/slides/slide-transitions/slide-transitions.page.scss": 
        /*!**********************************************************************************************!*\
          !*** ./src/app/pages/yannbf/components/slides/slide-transitions/slide-transitions.page.scss ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("h2 {\n  color: white;\n}\n\nion-slides,\n.swiper-container {\n  height: 70vh;\n  width: auto;\n}\n\n.swiper-slide {\n  background-size: cover !important;\n  background-position: center !important;\n}\n\n.swiper-pagination-bullet {\n  background-color: white;\n}\n\n.custom-pagination.swiper-pagination-bullet {\n  width: 20px;\n  height: 20px;\n  text-align: center;\n  line-height: 20px;\n  font-size: 12px;\n  color: #000;\n  opacity: 1;\n  background: rgba(0, 0, 0, 0.2);\n}\n\n.custom-pagination.swiper-pagination-bullet-active {\n  color: #fff;\n  background: #f52c2c;\n  transition: transform 0.3s;\n  transform: scale(1.5);\n}\n\n.custom-pagination-2.swiper-pagination-bullet {\n  width: 20px;\n  height: 20px;\n  text-align: center;\n  font-size: 12px;\n  opacity: 1;\n  line-height: 18px;\n  color: #fff;\n  background: rgba(0, 0, 0, 0.2);\n  border: 1px solid white;\n}\n\n.custom-pagination-2.swiper-pagination-bullet-active {\n  color: #fff;\n  border-color: #a0f;\n  background: transparent;\n}\n\n.custom-pagination-3.swiper-pagination-bullet {\n  width: 20px;\n  height: 20px;\n  opacity: 1;\n  border-radius: 0;\n  background-size: cover;\n  background-position: center;\n}\n\n.custom-pagination-3.swiper-pagination-bullet-active {\n  width: 25px;\n  height: 25px;\n  transition: transform 0.3s;\n  transform: scale(1.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvc2xpZGVzL3NsaWRlLXRyYW5zaXRpb25zL0M6XFxVc2Vyc1xcc2FiYWRpXFxEb2N1bWVudHNcXFByb2pldG9zXFxfaW9uaWNcXGlvbmljNC1jb21wb25lbnRzL3NyY1xcYXBwXFxwYWdlc1xceWFubmJmXFxjb21wb25lbnRzXFxzbGlkZXNcXHNsaWRlLXRyYW5zaXRpb25zXFxzbGlkZS10cmFuc2l0aW9ucy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL3NsaWRlcy9zbGlkZS10cmFuc2l0aW9ucy9zbGlkZS10cmFuc2l0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FEQ0U7O0VBRUUsWUFBQTtFQUNBLFdBQUE7QUNFSjs7QURBRTtFQUNFLGlDQUFBO0VBQ0Esc0NBQUE7QUNHSjs7QURERTtFQUNFLHVCQUFBO0FDSUo7O0FEREU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSw4QkFBQTtBQ0lKOztBREZFO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtBQ0tKOztBREZFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtBQ0tKOztBREhFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUNNSjs7QURIRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQ01KOztBREpFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0FDT0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy9zbGlkZXMvc2xpZGUtdHJhbnNpdGlvbnMvc2xpZGUtdHJhbnNpdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBpb24tc2xpZGVzLFxyXG4gIC5zd2lwZXItY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogNzB2aDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gIH1cclxuICAuc3dpcGVyLXNsaWRlIHtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAvLyBDdXN0b20gUGFnaW5hdGlvbiBTdHlsZSAxXHJcbiAgLmN1c3RvbS1wYWdpbmF0aW9uLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIH1cclxuICAuY3VzdG9tLXBhZ2luYXRpb24uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6ICNmNTJjMmM7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcclxuICB9XHJcbiAgLy8gQ3VzdG9tIFBhZ2luYXRpb24gU3R5bGUgMlxyXG4gIC5jdXN0b20tcGFnaW5hdGlvbi0yLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgfVxyXG4gIC5jdXN0b20tcGFnaW5hdGlvbi0yLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItY29sb3I6ICNhMGY7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgLy8gQ3VzdG9tIFBhZ2luYXRpb24gd2l0aCBJY29uc1xyXG4gIC5jdXN0b20tcGFnaW5hdGlvbi0zLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICB9XHJcbiAgLmN1c3RvbS1wYWdpbmF0aW9uLTMuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG4gIH1cclxuICAvLyBJY29ucyBkZXZlbG9wZWQgYnkgUGFvbWVkaWE6IGh0dHBzOi8vd3d3Lmljb25maW5kZXIuY29tL2ljb25zZXRzL3NtYWxsLW4tZmxhdFxyXG4vLyAgIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQuYnVsbGV0LWljb24tMSB7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vYXNzZXRzL2ljb24vY2FtZXJhLnN2Zykgbm8tcmVwZWF0O1xyXG4vLyAgIH1cclxuLy8gICAuYnVsbGV0LWljb24tMiB7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vYXNzZXRzL2ljb24vbWFwLnN2Zykgbm8tcmVwZWF0O1xyXG4vLyAgIH1cclxuLy8gICAuYnVsbGV0LWljb24tMyB7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vYXNzZXRzL2ljb24vd29ybGQuc3ZnKSBuby1yZXBlYXQ7XHJcbi8vICAgfVxyXG4vLyAgIC5idWxsZXQtaWNvbi00IHtcclxuLy8gICAgIGJhY2tncm91bmQ6IHVybCguLi9hc3NldHMvaWNvbi9oZWFydC5zdmcpIG5vLXJlcGVhdDtcclxuLy8gICB9IiwiaDIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1zbGlkZXMsXG4uc3dpcGVyLWNvbnRhaW5lciB7XG4gIGhlaWdodDogNzB2aDtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5jdXN0b20tcGFnaW5hdGlvbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMDAwO1xuICBvcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5jdXN0b20tcGFnaW5hdGlvbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICNmNTJjMmM7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG59XG5cbi5jdXN0b20tcGFnaW5hdGlvbi0yLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBvcGFjaXR5OiAxO1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG59XG5cbi5jdXN0b20tcGFnaW5hdGlvbi0yLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjYTBmO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmN1c3RvbS1wYWdpbmF0aW9uLTMuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgb3BhY2l0eTogMTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4uY3VzdG9tLXBhZ2luYXRpb24tMy5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/slides/slide-transitions/slide-transitions.page.ts": 
        /*!********************************************************************************************!*\
          !*** ./src/app/pages/yannbf/components/slides/slide-transitions/slide-transitions.page.ts ***!
          \********************************************************************************************/
        /*! exports provided: SlideTransitionsPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideTransitionsPage", function () { return SlideTransitionsPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            var SlideTransitionsPage = /** @class */ (function () {
                function SlideTransitionsPage() {
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
                    this.slideOpts1 = {
                        loop: true,
                        autoplay: {
                            delay: 2000,
                        },
                    };
                    this.slideOpts2 = {
                        loop: true,
                        autoplay: {
                            delay: 2000,
                        },
                        grabCursor: true,
                        cubeEffect: {
                            shadow: true,
                            slideShadows: true,
                            shadowOffset: 20,
                            shadowScale: 0.94,
                        },
                        on: {
                            beforeInit: function () {
                                var swiper = this;
                                swiper.classNames.push(swiper.params.containerModifierClass + "cube");
                                swiper.classNames.push(swiper.params.containerModifierClass + "3d");
                                var overwriteParams = {
                                    slidesPerView: 1,
                                    slidesPerColumn: 1,
                                    slidesPerGroup: 1,
                                    watchSlidesProgress: true,
                                    resistanceRatio: 0,
                                    spaceBetween: 0,
                                    centeredSlides: false,
                                    virtualTranslate: true,
                                };
                                this.params = Object.assign(this.params, overwriteParams);
                                this.originalParams = Object.assign(this.originalParams, overwriteParams);
                            },
                            setTranslate: function () {
                                var swiper = this;
                                var $el = swiper.$el, $wrapperEl = swiper.$wrapperEl, slides = swiper.slides, swiperWidth = swiper.width, swiperHeight = swiper.height, rtl = swiper.rtlTranslate, swiperSize = swiper.size;
                                var params = swiper.params.cubeEffect;
                                var isHorizontal = swiper.isHorizontal();
                                var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                                var wrapperRotate = 0;
                                var $cubeShadowEl;
                                if (params.shadow) {
                                    if (isHorizontal) {
                                        $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
                                        if ($cubeShadowEl.length === 0) {
                                            $cubeShadowEl = swiper.$('<div class="swiper-cube-shadow"></div>');
                                            $wrapperEl.append($cubeShadowEl);
                                        }
                                        $cubeShadowEl.css({ height: swiperWidth + "px" });
                                    }
                                    else {
                                        $cubeShadowEl = $el.find('.swiper-cube-shadow');
                                        if ($cubeShadowEl.length === 0) {
                                            $cubeShadowEl = swiper.$('<div class="swiper-cube-shadow"></div>');
                                            $el.append($cubeShadowEl);
                                        }
                                    }
                                }
                                for (var i = 0; i < slides.length; i += 1) {
                                    var $slideEl = slides.eq(i);
                                    var slideIndex = i;
                                    if (isVirtual) {
                                        slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
                                    }
                                    var slideAngle = slideIndex * 90;
                                    var round = Math.floor(slideAngle / 360);
                                    if (rtl) {
                                        slideAngle = -slideAngle;
                                        round = Math.floor(-slideAngle / 360);
                                    }
                                    var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
                                    var tx = 0;
                                    var ty = 0;
                                    var tz = 0;
                                    if (slideIndex % 4 === 0) {
                                        tx = -round * 4 * swiperSize;
                                        tz = 0;
                                    }
                                    else if ((slideIndex - 1) % 4 === 0) {
                                        tx = 0;
                                        tz = -round * 4 * swiperSize;
                                    }
                                    else if ((slideIndex - 2) % 4 === 0) {
                                        tx = swiperSize + (round * 4 * swiperSize);
                                        tz = swiperSize;
                                    }
                                    else if ((slideIndex - 3) % 4 === 0) {
                                        tx = -swiperSize;
                                        tz = (3 * swiperSize) + (swiperSize * 4 * round);
                                    }
                                    if (rtl) {
                                        tx = -tx;
                                    }
                                    if (!isHorizontal) {
                                        ty = tx;
                                        tx = 0;
                                    }
                                    var transform$$1 = "rotateX(" + (isHorizontal ? 0 : -slideAngle) + "deg) rotateY(" + (isHorizontal ? slideAngle : 0) + "deg) translate3d(" + tx + "px, " + ty + "px, " + tz + "px)";
                                    if (progress <= 1 && progress > -1) {
                                        wrapperRotate = (slideIndex * 90) + (progress * 90);
                                        if (rtl)
                                            wrapperRotate = (-slideIndex * 90) - (progress * 90);
                                    }
                                    $slideEl.transform(transform$$1);
                                    if (params.slideShadows) {
                                        // Set shadows
                                        var shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                                        var shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                                        if (shadowBefore.length === 0) {
                                            shadowBefore = swiper.$("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>");
                                            $slideEl.append(shadowBefore);
                                        }
                                        if (shadowAfter.length === 0) {
                                            shadowAfter = swiper.$("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>");
                                            $slideEl.append(shadowAfter);
                                        }
                                        if (shadowBefore.length)
                                            shadowBefore[0].style.opacity = Math.max(-progress, 0);
                                        if (shadowAfter.length)
                                            shadowAfter[0].style.opacity = Math.max(progress, 0);
                                    }
                                }
                                $wrapperEl.css({
                                    '-webkit-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
                                    '-moz-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
                                    '-ms-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
                                    'transform-origin': "50% 50% -" + swiperSize / 2 + "px",
                                });
                                if (params.shadow) {
                                    if (isHorizontal) {
                                        $cubeShadowEl.transform("translate3d(0px, " + ((swiperWidth / 2) + params.shadowOffset) + "px, " + -swiperWidth / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + params.shadowScale + ")");
                                    }
                                    else {
                                        var shadowAngle = Math.abs(wrapperRotate) - (Math.floor(Math.abs(wrapperRotate) / 90) * 90);
                                        var multiplier = 1.5 - ((Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2)
                                            + (Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2));
                                        var scale1 = params.shadowScale;
                                        var scale2 = params.shadowScale / multiplier;
                                        var offset$$1 = params.shadowOffset;
                                        $cubeShadowEl.transform("scale3d(" + scale1 + ", 1, " + scale2 + ") translate3d(0px, " + ((swiperHeight / 2) + offset$$1) + "px, " + -swiperHeight / 2 / scale2 + "px) rotateX(-90deg)");
                                    }
                                }
                                var zFactor = (swiper.browser.isSafari || swiper.browser.isUiWebView) ? (-swiperSize / 2) : 0;
                                $wrapperEl
                                    .transform("translate3d(0px,0," + zFactor + "px) rotateX(" + (swiper.isHorizontal() ? 0 : wrapperRotate) + "deg) rotateY(" + (swiper.isHorizontal() ? -wrapperRotate : 0) + "deg)");
                            },
                            setTransition: function (duration) {
                                var swiper = this;
                                var $el = swiper.$el, slides = swiper.slides;
                                slides
                                    .transition(duration)
                                    .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
                                    .transition(duration);
                                if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
                                    $el.find('.swiper-cube-shadow').transition(duration);
                                }
                            },
                        }
                    };
                    this.slideOpts3 = {
                        loop: true,
                        autoplay: {
                            delay: 2000,
                        },
                        slidesPerView: 3,
                        coverflowEffect: {
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        },
                        on: {
                            beforeInit: function () {
                                var swiper = this;
                                swiper.classNames.push(swiper.params.containerModifierClass + "coverflow");
                                swiper.classNames.push(swiper.params.containerModifierClass + "3d");
                                swiper.params.watchSlidesProgress = true;
                                swiper.originalParams.watchSlidesProgress = true;
                            },
                            setTranslate: function () {
                                var swiper = this;
                                var swiperWidth = swiper.width, swiperHeight = swiper.height, slides = swiper.slides, $wrapperEl = swiper.$wrapperEl, slidesSizesGrid = swiper.slidesSizesGrid, $ = swiper.$;
                                var params = swiper.params.coverflowEffect;
                                var isHorizontal = swiper.isHorizontal();
                                var transform$$1 = swiper.translate;
                                var center = isHorizontal ? -transform$$1 + (swiperWidth / 2) : -transform$$1 + (swiperHeight / 2);
                                var rotate = isHorizontal ? params.rotate : -params.rotate;
                                var translate = params.depth;
                                // Each slide offset from center
                                for (var i = 0, length = slides.length; i < length; i += 1) {
                                    var $slideEl = slides.eq(i);
                                    var slideSize = slidesSizesGrid[i];
                                    var slideOffset = $slideEl[0].swiperSlideOffset;
                                    var offsetMultiplier = ((center - slideOffset - (slideSize / 2)) / slideSize) * params.modifier;
                                    var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
                                    var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
                                    // var rotateZ = 0
                                    var translateZ = -translate * Math.abs(offsetMultiplier);
                                    var translateY = isHorizontal ? 0 : params.stretch * (offsetMultiplier);
                                    var translateX = isHorizontal ? params.stretch * (offsetMultiplier) : 0;
                                    // Fix for ultra small values
                                    if (Math.abs(translateX) < 0.001)
                                        translateX = 0;
                                    if (Math.abs(translateY) < 0.001)
                                        translateY = 0;
                                    if (Math.abs(translateZ) < 0.001)
                                        translateZ = 0;
                                    if (Math.abs(rotateY) < 0.001)
                                        rotateY = 0;
                                    if (Math.abs(rotateX) < 0.001)
                                        rotateX = 0;
                                    var slideTransform = "translate3d(" + translateX + "px," + translateY + "px," + translateZ + "px)  rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";
                                    $slideEl.transform(slideTransform);
                                    $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
                                    if (params.slideShadows) {
                                        // Set shadows
                                        var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                                        var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                                        if ($shadowBeforeEl.length === 0) {
                                            $shadowBeforeEl = swiper.$("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>");
                                            $slideEl.append($shadowBeforeEl);
                                        }
                                        if ($shadowAfterEl.length === 0) {
                                            $shadowAfterEl = swiper.$("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>");
                                            $slideEl.append($shadowAfterEl);
                                        }
                                        if ($shadowBeforeEl.length)
                                            $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                                        if ($shadowAfterEl.length)
                                            $shadowAfterEl[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0;
                                    }
                                }
                                // Set correct perspective for IE10
                                if (swiper.support.pointerEvents || swiper.support.prefixedPointerEvents) {
                                    var ws = $wrapperEl[0].style;
                                    ws.perspectiveOrigin = center + "px 50%";
                                }
                            },
                            setTransition: function (duration) {
                                var swiper = this;
                                swiper.slides
                                    .transition(duration)
                                    .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
                                    .transition(duration);
                            }
                        }
                    };
                    this.slideOpts4 = {
                        loop: true,
                        autoplay: {
                            delay: 2000,
                        },
                        on: {
                            beforeInit: function () {
                                var swiper = this;
                                swiper.classNames.push(swiper.params.containerModifierClass + "fade");
                                var overwriteParams = {
                                    slidesPerView: 1,
                                    slidesPerColumn: 1,
                                    slidesPerGroup: 1,
                                    watchSlidesProgress: true,
                                    spaceBetween: 0,
                                    virtualTranslate: true,
                                };
                                swiper.params = Object.assign(swiper.params, overwriteParams);
                                swiper.params = Object.assign(swiper.originalParams, overwriteParams);
                            },
                            setTranslate: function () {
                                var swiper = this;
                                var slides = swiper.slides;
                                for (var i = 0; i < slides.length; i += 1) {
                                    var $slideEl = swiper.slides.eq(i);
                                    var offset$$1 = $slideEl[0].swiperSlideOffset;
                                    var tx = -offset$$1;
                                    if (!swiper.params.virtualTranslate)
                                        tx -= swiper.translate;
                                    var ty = 0;
                                    if (!swiper.isHorizontal()) {
                                        ty = tx;
                                        tx = 0;
                                    }
                                    var slideOpacity = swiper.params.fadeEffect.crossFade
                                        ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
                                        : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
                                    $slideEl
                                        .css({
                                        opacity: slideOpacity,
                                    })
                                        .transform("translate3d(" + tx + "px, " + ty + "px, 0px)");
                                }
                            },
                            setTransition: function (duration) {
                                var swiper = this;
                                var slides = swiper.slides, $wrapperEl = swiper.$wrapperEl;
                                slides.transition(duration);
                                if (swiper.params.virtualTranslate && duration !== 0) {
                                    var eventTriggered_1 = false;
                                    slides.transitionEnd(function () {
                                        if (eventTriggered_1)
                                            return;
                                        if (!swiper || swiper.destroyed)
                                            return;
                                        eventTriggered_1 = true;
                                        swiper.animating = false;
                                        var triggerEvents = ['webkitTransitionEnd', 'transitionend'];
                                        for (var i = 0; i < triggerEvents.length; i += 1) {
                                            $wrapperEl.trigger(triggerEvents[i]);
                                        }
                                    });
                                }
                            },
                        }
                    };
                    this.slideOpts5 = {
                        loop: true,
                        autoplay: {
                            delay: 2000,
                        },
                        on: {
                            beforeInit: function () {
                                var swiper = this;
                                swiper.classNames.push(swiper.params.containerModifierClass + "flip");
                                swiper.classNames.push(swiper.params.containerModifierClass + "3d");
                                var overwriteParams = {
                                    slidesPerView: 1,
                                    slidesPerColumn: 1,
                                    slidesPerGroup: 1,
                                    watchSlidesProgress: true,
                                    spaceBetween: 0,
                                    virtualTranslate: true,
                                };
                                swiper.params = Object.assign(swiper.params, overwriteParams);
                                swiper.originalParams = Object.assign(swiper.originalParams, overwriteParams);
                            },
                            setTranslate: function () {
                                var swiper = this;
                                var $ = swiper.$, slides = swiper.slides, rtl = swiper.rtlTranslate;
                                for (var i = 0; i < slides.length; i += 1) {
                                    var $slideEl = slides.eq(i);
                                    var progress = $slideEl[0].progress;
                                    if (swiper.params.flipEffect.limitRotation) {
                                        progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
                                    }
                                    var offset$$1 = $slideEl[0].swiperSlideOffset;
                                    var rotate = -180 * progress;
                                    var rotateY = rotate;
                                    var rotateX = 0;
                                    var tx = -offset$$1;
                                    var ty = 0;
                                    if (!swiper.isHorizontal()) {
                                        ty = tx;
                                        tx = 0;
                                        rotateX = -rotateY;
                                        rotateY = 0;
                                    }
                                    else if (rtl) {
                                        rotateY = -rotateY;
                                    }
                                    $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
                                    if (swiper.params.flipEffect.slideShadows) {
                                        // Set shadows
                                        var shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                                        var shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                                        if (shadowBefore.length === 0) {
                                            shadowBefore = swiper.$("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'left' : 'top') + "\"></div>");
                                            $slideEl.append(shadowBefore);
                                        }
                                        if (shadowAfter.length === 0) {
                                            shadowAfter = swiper.$("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'right' : 'bottom') + "\"></div>");
                                            $slideEl.append(shadowAfter);
                                        }
                                        if (shadowBefore.length)
                                            shadowBefore[0].style.opacity = Math.max(-progress, 0);
                                        if (shadowAfter.length)
                                            shadowAfter[0].style.opacity = Math.max(progress, 0);
                                    }
                                    $slideEl
                                        .transform("translate3d(" + tx + "px, " + ty + "px, 0px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)");
                                }
                            },
                            setTransition: function (duration) {
                                var swiper = this;
                                var slides = swiper.slides, activeIndex = swiper.activeIndex, $wrapperEl = swiper.$wrapperEl;
                                slides
                                    .transition(duration)
                                    .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
                                    .transition(duration);
                                if (swiper.params.virtualTranslate && duration !== 0) {
                                    var eventTriggered_2 = false;
                                    // eslint-disable-next-line
                                    slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
                                        if (eventTriggered_2)
                                            return;
                                        if (!swiper || swiper.destroyed)
                                            return;
                                        eventTriggered_2 = true;
                                        swiper.animating = false;
                                        var triggerEvents = ['webkitTransitionEnd', 'transitionend'];
                                        for (var i = 0; i < triggerEvents.length; i += 1) {
                                            $wrapperEl.trigger(triggerEvents[i]);
                                        }
                                    });
                                }
                            }
                        }
                    };
                }
                SlideTransitionsPage.prototype.ngOnInit = function () {
                };
                return SlideTransitionsPage;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slider', { static: true }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
            ], SlideTransitionsPage.prototype, "slider", void 0);
            SlideTransitionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-slide-transitions',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./slide-transitions.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/slides/slide-transitions/slide-transitions.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./slide-transitions.page.scss */ "./src/app/pages/yannbf/components/slides/slide-transitions/slide-transitions.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], SlideTransitionsPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-yannbf-components-slides-slide-transitions-slide-transitions-module-es2015.js.map
//# sourceMappingURL=pages-yannbf-components-slides-slide-transitions-slide-transitions-module-es5.js.map
//# sourceMappingURL=pages-yannbf-components-slides-slide-transitions-slide-transitions-module-es5.js.map