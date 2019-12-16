(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-slides-slide-walkthrough-slide-walkthrough-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/slides/slide-walkthrough/slide-walkthrough.page.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/slides/slide-walkthrough/slide-walkthrough.page.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Slide Walkthrough</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen=\"true\" class=\"no-padding-top\">\r\n  <ion-slides #slider pager=\"true\" [options]=\"slideOpts1\" (ionSlideWillChange)=\"onSlideChanged()\">\r\n    <ion-slide *ngFor=\"let slide of slides\" class=\"slide-background\"\r\n      [ngStyle]=\"{'background-image': 'url(' + slide.imageUrl +')'}\">\r\n      <div class=\"text-wrapper\">\r\n        <div class=\"slide-text\">\r\n          <h2 class=\"slide-title\" [innerHTML]=\"slide.title\"></h2><br>\r\n          <p [innerHTML]=\"slide.description\"></p>\r\n        </div>\r\n      </div>\r\n    </ion-slide>\r\n  </ion-slides>\r\n  <div class=\"floating-buttons pop-in\" *ngIf=\"slideIndex >= slides.length - 1\">\r\n    <ion-button fill=\"clear\" size=\"large\" expand=\"full\" (click)=\"goToApp()\">Let's go!</ion-button>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/yannbf/components/slides/slide-walkthrough/slide-walkthrough.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/slides/slide-walkthrough/slide-walkthrough.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: SlideWalkthroughPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideWalkthroughPageModule", function() { return SlideWalkthroughPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _slide_walkthrough_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slide-walkthrough.page */ "./src/app/pages/yannbf/components/slides/slide-walkthrough/slide-walkthrough.page.ts");







const routes = [
    {
        path: '',
        component: _slide_walkthrough_page__WEBPACK_IMPORTED_MODULE_6__["SlideWalkthroughPage"]
    }
];
let SlideWalkthroughPageModule = class SlideWalkthroughPageModule {
};
SlideWalkthroughPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_slide_walkthrough_page__WEBPACK_IMPORTED_MODULE_6__["SlideWalkthroughPage"]]
    })
], SlideWalkthroughPageModule);



/***/ }),

/***/ "./src/app/pages/yannbf/components/slides/slide-walkthrough/slide-walkthrough.page.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/slides/slide-walkthrough/slide-walkthrough.page.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --background: transparent;\n}\n\n.swiper-pagination-bullet {\n  background-color: #fff;\n}\n\n.no-padding-top .scroll-content {\n  padding-top: 0 !important;\n}\n\n.skip-button {\n  text-transform: none;\n  padding: 15px 15px;\n  font-weight: bold;\n}\n\n.floating-buttons {\n  z-index: 1;\n  width: 100%;\n  bottom: 0;\n  position: absolute;\n  margin-bottom: 50px;\n  transition: all 0.4s linear;\n}\n\n.floating-buttons ion-button {\n  --color: white;\n  min-height: 7vh;\n  text-transform: none;\n  font-size: 1.4em;\n  font-weight: bold;\n  --background: rgba(49, 161, 216, 0.67);\n}\n\n.slide-background {\n  background-size: cover !important;\n  background-position: center;\n  background-repeat: no-repeat;\n  border-color: transparent;\n}\n\n.toolbar-background {\n  border-color: transparent;\n}\n\n.slide-zoom {\n  background: linear-gradient(transparent, rgba(0, 0, 0, 0.4)) !important;\n  height: 100%;\n}\n\n.text-wrapper {\n  width: 100vw;\n  height: 100vh;\n}\n\n.slide-text {\n  position: relative;\n  text-align: center;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.slide-title {\n  color: white;\n  font-weight: bold;\n}\n\n.slide-image {\n  max-height: 100%;\n  max-width: 100%;\n  margin: 18px 0;\n}\n\nb {\n  font-weight: 500;\n}\n\np {\n  padding: 0 40px;\n  font-size: 1em;\n  line-height: 1.5;\n  color: #fff;\n}\n\np b {\n  color: #000000;\n}\n\n.pop-in {\n  -webkit-animation: pop-in 0.65s;\n  animation: pop-in 0.65s !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvc2xpZGVzL3NsaWRlLXdhbGt0aHJvdWdoL0M6XFxVc2Vyc1xcc2FiYWRpXFxEb2N1bWVudHNcXFByb2pldG9zXFxfaW9uaWNcXGlvbmljNC1jb21wb25lbnRzL3NyY1xcYXBwXFxwYWdlc1xceWFubmJmXFxjb21wb25lbnRzXFxzbGlkZXNcXHNsaWRlLXdhbGt0aHJvdWdoXFxzbGlkZS13YWxrdGhyb3VnaC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL3NsaWRlcy9zbGlkZS13YWxrdGhyb3VnaC9zbGlkZS13YWxrdGhyb3VnaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGOztBRENBO0VBQ0Usc0JBQUE7QUNFRjs7QURBQTtFQUNFLHlCQUFBO0FDR0Y7O0FEREE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNJRjs7QURGQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQ0tGOztBREZBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQ0FBQTtBQ0tGOztBREhBO0VBQ0UsaUNBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7QUNNRjs7QURKQTtFQUNFLHlCQUFBO0FDT0Y7O0FETEE7RUFDRSx1RUFBQTtFQUNBLFlBQUE7QUNRRjs7QUROQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDU0Y7O0FEUEE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FDVUY7O0FEUkE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUNXRjs7QURUQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNZRjs7QURQQTtFQUNFLGdCQUFBO0FDVUY7O0FEUkE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ1dGOztBRFZFO0VBQ0UsY0FBQTtBQ1lKOztBRFJBO0VBQ0UsK0JBQUE7RUFDQSxrQ0FBQTtBQ1dGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvc2xpZGVzL3NsaWRlLXdhbGt0aHJvdWdoL3NsaWRlLXdhbGt0aHJvdWdoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuLm5vLXBhZGRpbmctdG9wIC5zY3JvbGwtY29udGVudCB7XHJcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcclxufVxyXG4uc2tpcC1idXR0b24ge1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIHBhZGRpbmc6IDE1cHggMTVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uZmxvYXRpbmctYnV0dG9ucyB7XHJcbiAgei1pbmRleDogMTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3R0b206IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgbGluZWFyO1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICRiYXNlLWNvbG9yLXRyYW5zcGFyZW50O1xyXG59XHJcbi5mbG9hdGluZy1idXR0b25zIGlvbi1idXR0b24ge1xyXG4gIC0tY29sb3I6IHdoaXRlO1xyXG4gIG1pbi1oZWlnaHQ6IDd2aDtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICBmb250LXNpemU6IDEuNGVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIC0tYmFja2dyb3VuZDogcmdiYSg0OSwgMTYxLCAyMTYsIDAuNjcpO1xyXG59XHJcbi5zbGlkZS1iYWNrZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4udG9vbGJhci1iYWNrZ3JvdW5kIHtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5zbGlkZS16b29tIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQsIHJnYmEoMCwgMCwgMCwgMC40KSkgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLnRleHQtd3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuLnNsaWRlLXRleHQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcbi5zbGlkZS10aXRsZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5zbGlkZS1pbWFnZSB7XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAxOHB4IDA7XHJcbn1cclxuLmxhc3Qtc2xpZGUge1xyXG4gIC8vICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaW1nL3dlbGNvbWUtNC5qcGdcIik7XHJcbn1cclxuYiB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5wIHtcclxuICBwYWRkaW5nOiAwIDQwcHg7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiIHtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gIH1cclxufVxyXG5cclxuLnBvcC1pbiB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHBvcC1pbiAwLjY1cztcclxuICBhbmltYXRpb246IHBvcC1pbiAwLjY1cyAhaW1wb3J0YW50O1xyXG59XHJcbiIsImlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5uby1wYWRkaW5nLXRvcCAuc2Nyb2xsLWNvbnRlbnQge1xuICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xufVxuXG4uc2tpcC1idXR0b24ge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgcGFkZGluZzogMTVweCAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmZsb2F0aW5nLWJ1dHRvbnMge1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGxpbmVhcjtcbn1cblxuLmZsb2F0aW5nLWJ1dHRvbnMgaW9uLWJ1dHRvbiB7XG4gIC0tY29sb3I6IHdoaXRlO1xuICBtaW4taGVpZ2h0OiA3dmg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LXNpemU6IDEuNGVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDQ5LCAxNjEsIDIxNiwgMC42Nyk7XG59XG5cbi5zbGlkZS1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi50b29sYmFyLWJhY2tncm91bmQge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uc2xpZGUtem9vbSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCwgcmdiYSgwLCAwLCAwLCAwLjQpKSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50ZXh0LXdyYXBwZXIge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5zbGlkZS10ZXh0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi5zbGlkZS10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zbGlkZS1pbWFnZSB7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAxOHB4IDA7XG59XG5cbmIge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5wIHtcbiAgcGFkZGluZzogMCA0MHB4O1xuICBmb250LXNpemU6IDFlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICNmZmY7XG59XG5wIGIge1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLnBvcC1pbiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBwb3AtaW4gMC42NXM7XG4gIGFuaW1hdGlvbjogcG9wLWluIDAuNjVzICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/yannbf/components/slides/slide-walkthrough/slide-walkthrough.page.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/slides/slide-walkthrough/slide-walkthrough.page.ts ***!
  \********************************************************************************************/
/*! exports provided: SlideWalkthroughPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideWalkthroughPage", function() { return SlideWalkthroughPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let SlideWalkthroughPage = class SlideWalkthroughPage {
    constructor() {
        this.slideIndex = 0;
        this.slides = [
            {
                title: 'Dream\'s Adventure',
                imageUrl: 'assets/yannbf/img/lists/wishlist-1.jpg',
                description: 'Take a look at our amazing options',
            },
            {
                title: 'For the Weekend',
                imageUrl: 'assets/yannbf/img/lists/wishlist-2.jpg',
                description: 'Take a look at our amazing options',
            },
            {
                title: 'Family Time',
                imageUrl: 'assets/yannbf/img/lists/wishlist-3.jpg',
                description: 'Take a look at our amazing options',
            },
            {
                title: 'My Trip',
                imageUrl: 'assets/yannbf/img/lists/wishlist-4.jpg',
                description: 'Take a look at our amazing options',
            }
        ];
        this.slideOpts1 = {
            autoplay: {
                delay: 3000,
            },
        };
    }
    ngOnInit() {
    }
    onSlideChanged() {
        this.slider.getActiveIndex().then((index) => {
            console.log('Slide changed! Current index is', index);
            this.slideIndex = index;
        });
    }
    goToApp() {
        console.log('Go to App clicked');
    }
    skip() {
        console.log('Skip clicked');
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slider', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
], SlideWalkthroughPage.prototype, "slider", void 0);
SlideWalkthroughPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-slide-walkthrough',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./slide-walkthrough.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/slides/slide-walkthrough/slide-walkthrough.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./slide-walkthrough.page.scss */ "./src/app/pages/yannbf/components/slides/slide-walkthrough/slide-walkthrough.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SlideWalkthroughPage);



/***/ })

}]);
//# sourceMappingURL=pages-yannbf-components-slides-slide-walkthrough-slide-walkthrough-module-es2015.js.map