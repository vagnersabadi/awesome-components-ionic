(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-popup-modal-popup-modal-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/yannbf/components/popup-modal/popup-modal.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/yannbf/components/popup-modal/popup-modal.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Popup Modal</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"ion-padding\">\r\n    <ion-button expand=\"block\" (click)=\"openHintModal()\">Hint Modal</ion-button>\r\n    <ion-button expand=\"block\" color=\"danger\" (click)=\"openSignupModal()\">Signup with slider</ion-button>\r\n    <ion-button expand=\"block\" color=\"secondary\" (click)=\"openWalkthroughModal()\">Walkthrough modal</ion-button>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/yannbf/components/popup-modal/walkthrough-modal/walkthrough-modal.page.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/yannbf/components/popup-modal/walkthrough-modal/walkthrough-modal.page.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"round\">\r\n    <ion-slides pager=\"true\" class=\"round-top\">\r\n      <ion-slide *ngFor=\"let slide of slides\" class=\"ion-text-center slider-item\" [ngStyle]=\"{'background-image': 'url(' + slide.imageUrl +')'}\">\r\n        <div class=\"slide-text\">\r\n          <h2>{{slide.title}}</h2>\r\n          <p>{{slide.songs}} songs</p>\r\n        </div>\r\n      </ion-slide>\r\n    </ion-slides>\r\n    <ion-button expand=\"full\" class=\"footer-button\" (click)=\"dismiss()\">Let's get started!</ion-button>\r\n  </ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/yannbf/components/popup-modal/popup-modal.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/popup-modal/popup-modal.module.ts ***!
  \***************************************************************************/
/*! exports provided: PopupModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupModalPageModule", function() { return PopupModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _popup_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popup-modal.page */ "./src/app/pages/yannbf/components/popup-modal/popup-modal.page.ts");
/* harmony import */ var _walkthrough_modal_walkthrough_modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./walkthrough-modal/walkthrough-modal.module */ "./src/app/pages/yannbf/components/popup-modal/walkthrough-modal/walkthrough-modal.module.ts");








const routes = [
    {
        path: '',
        component: _popup_modal_page__WEBPACK_IMPORTED_MODULE_6__["PopupModalPage"]
    }
];
let PopupModalPageModule = class PopupModalPageModule {
};
PopupModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _walkthrough_modal_walkthrough_modal_module__WEBPACK_IMPORTED_MODULE_7__["WalkthroughModalPageModule"],
        ],
        declarations: [_popup_modal_page__WEBPACK_IMPORTED_MODULE_6__["PopupModalPage"]]
    })
], PopupModalPageModule);



/***/ }),

/***/ "./src/app/pages/yannbf/components/popup-modal/popup-modal.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/popup-modal/popup-modal.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-modal,\n.show-page {\n  background-color: rgba(0, 0, 0, 0.5) !important;\n  padding: 50px !important;\n}\n\n.toolbar-background {\n  color: red !important;\n}\n\nion-modal.modal-wrapper {\n  -webkit-transform: translateY(30%) !important;\n          transform: translateY(30%) !important;\n}\n\nion-page.modal {\n  padding: 30px;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.modal-backdrop-bg {\n  background-color: #000;\n  opacity: 0;\n}\n\n.active .modal-backdrop-bg {\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvcG9wdXAtbW9kYWwvQzpcXFVzZXJzXFxzYWJhZGlcXERvY3VtZW50c1xcUHJvamV0b3NcXF9pb25pY1xcaW9uaWM0LWNvbXBvbmVudHMvc3JjXFxhcHBcXHBhZ2VzXFx5YW5uYmZcXGNvbXBvbmVudHNcXHBvcHVwLW1vZGFsXFxwb3B1cC1tb2RhbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL3BvcHVwLW1vZGFsL3BvcHVwLW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBRTs7RUFHRSwrQ0FBQTtFQUNBLHdCQUFBO0FDQUo7O0FERUU7RUFDRSxxQkFBQTtBQ0NKOztBRENFO0VBQ0UsNkNBQUE7VUFBQSxxQ0FBQTtBQ0VKOztBREFFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FDR0o7O0FEREU7RUFDRSxzQkFBQTtFQUNBLFVBQUE7QUNJSjs7QURGRTtFQUNFLFlBQUE7QUNLSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL3BvcHVwLW1vZGFsL3BvcHVwLW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgaW9uLW1vZGFsLFxyXG4gIC5zaG93LXBhZ2Uge1xyXG4gICAgLy8gdHJhbnNwYXJlbnQgYmxhY2sgYmFja2dyb3VuZCBvdmVybGF5XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogNTBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAudG9vbGJhci1iYWNrZ3JvdW5kIHtcclxuICAgIGNvbG9yOiByZWQgIWltcG9ydGFudDtcclxuICB9XHJcbiAgaW9uLW1vZGFsLm1vZGFsLXdyYXBwZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwJSkgIWltcG9ydGFudDtcclxuICB9XHJcbiAgaW9uLXBhZ2UubW9kYWwge1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICB9XHJcbiAgLm1vZGFsLWJhY2tkcm9wLWJnIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAuYWN0aXZlIC5tb2RhbC1iYWNrZHJvcC1iZyB7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4iLCJpb24tbW9kYWwsXG4uc2hvdy1wYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDUwcHggIWltcG9ydGFudDtcbn1cblxuLnRvb2xiYXItYmFja2dyb3VuZCB7XG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcbn1cblxuaW9uLW1vZGFsLm1vZGFsLXdyYXBwZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzAlKSAhaW1wb3J0YW50O1xufVxuXG5pb24tcGFnZS5tb2RhbCB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLm1vZGFsLWJhY2tkcm9wLWJnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmFjdGl2ZSAubW9kYWwtYmFja2Ryb3AtYmcge1xuICBvcGFjaXR5OiAwLjU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/yannbf/components/popup-modal/popup-modal.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/popup-modal/popup-modal.page.ts ***!
  \*************************************************************************/
/*! exports provided: PopupModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupModalPage", function() { return PopupModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _walkthrough_modal_walkthrough_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./walkthrough-modal/walkthrough-modal.page */ "./src/app/pages/yannbf/components/popup-modal/walkthrough-modal/walkthrough-modal.page.ts");



// import { HintModalPage } from './hint-modal/hint-modal.page';

// import { SignupModalPage } from './signup-modal/signup-modal.page';
let PopupModalPage = class PopupModalPage {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() {
    }
    openHintModal() {
        // this.openModal(HintModalPage);
    }
    openWalkthroughModal() {
        this.openModal(_walkthrough_modal_walkthrough_modal_page__WEBPACK_IMPORTED_MODULE_3__["WalkthroughModalPage"]);
    }
    openSignupModal() {
        // this.openModal(SignupModalPage);
    }
    openModal(pageName) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // this.modalCtrl.create(pageName, null, { cssClass: 'inset-modal' })
            // .present();
            const modal = yield this.modalCtrl.create({
                component: pageName,
                cssClass: 'inset-modal'
            });
            yield modal.present();
        });
    }
};
PopupModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
PopupModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popup-modal',
        template: __webpack_require__(/*! raw-loader!./popup-modal.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/yannbf/components/popup-modal/popup-modal.page.html"),
        styles: [__webpack_require__(/*! ./popup-modal.page.scss */ "./src/app/pages/yannbf/components/popup-modal/popup-modal.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], PopupModalPage);



/***/ }),

/***/ "./src/app/pages/yannbf/components/popup-modal/walkthrough-modal/walkthrough-modal.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/popup-modal/walkthrough-modal/walkthrough-modal.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: WalkthroughModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkthroughModalPageModule", function() { return WalkthroughModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _walkthrough_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./walkthrough-modal.page */ "./src/app/pages/yannbf/components/popup-modal/walkthrough-modal/walkthrough-modal.page.ts");






let WalkthroughModalPageModule = class WalkthroughModalPageModule {
};
WalkthroughModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        ],
        declarations: [_walkthrough_modal_page__WEBPACK_IMPORTED_MODULE_5__["WalkthroughModalPage"]],
        entryComponents: [_walkthrough_modal_page__WEBPACK_IMPORTED_MODULE_5__["WalkthroughModalPage"]]
    })
], WalkthroughModalPageModule);



/***/ }),

/***/ "./src/app/pages/yannbf/components/popup-modal/walkthrough-modal/walkthrough-modal.page.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/popup-modal/walkthrough-modal/walkthrough-modal.page.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".round {\n  border-radius: 8%;\n}\n\n.scroll-content {\n  overflow: hidden;\n}\n\n.swiper-pagination-bullet {\n  background-color: white;\n}\n\n.swiper-pagination-bullet-active {\n  background-color: #fa3;\n  -webkit-transition: all 500ms cubic-bezier(0.25, 0.25, 0.75, 0.75);\n  transition: all 500ms cubic-bezier(0.25, 0.25, 0.75, 0.75);\n}\n\nion-list {\n  margin: 0 !important;\n}\n\nion-slides,\n.swiper-container {\n  height: 90%;\n  border-radius: 8% 8% 0 0;\n}\n\n.slider-item {\n  height: auto;\n  width: 100%;\n  background-size: cover;\n}\n\n.slide-zoom {\n  height: 100%;\n  background: -webkit-gradient(linear, left top, left bottom, from(transparent), to(rgba(0, 0, 0, 0.22))) !important;\n  background: linear-gradient(transparent, rgba(0, 0, 0, 0.22)) !important;\n}\n\n.text-wrapper {\n  width: 100vw;\n  height: 100vh;\n}\n\n.slide-text {\n  position: relative;\n  text-align: center;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n\n.text-center {\n  text-align: center;\n  color: white;\n}\n\nion-content {\n  border-radius: 3%;\n}\n\nbutton.footer-button {\n  height: 15%;\n  background-color: #578be4;\n  bottom: 0px;\n  position: absolute;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvcG9wdXAtbW9kYWwvd2Fsa3Rocm91Z2gtbW9kYWwvQzpcXFVzZXJzXFxzYWJhZGlcXERvY3VtZW50c1xcUHJvamV0b3NcXF9pb25pY1xcaW9uaWM0LWNvbXBvbmVudHMvc3JjXFxhcHBcXHBhZ2VzXFx5YW5uYmZcXGNvbXBvbmVudHNcXHBvcHVwLW1vZGFsXFx3YWxrdGhyb3VnaC1tb2RhbFxcd2Fsa3Rocm91Z2gtbW9kYWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy9wb3B1cC1tb2RhbC93YWxrdGhyb3VnaC1tb2RhbC93YWxrdGhyb3VnaC1tb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQ0NGOztBRENBO0VBQ0UsZ0JBQUE7QUNFRjs7QURBQTtFQUNFLHVCQUFBO0FDR0Y7O0FEREE7RUFDRSxzQkFBQTtFQUNBLGtFQUFBO0VBQUEsMERBQUE7QUNJRjs7QURGQTtFQUNFLG9CQUFBO0FDS0Y7O0FESEE7O0VBRUUsV0FBQTtFQUNBLHdCQUFBO0FDTUY7O0FESkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FDT0Y7O0FETEE7RUFDRSxZQUFBO0VBQ0Esa0hBQUE7RUFBQSx3RUFBQTtBQ1FGOztBRE5BO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNTRjs7QURQQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBQ1VGOztBRFJBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FDV0Y7O0FEVEE7RUFDRSxpQkFBQTtBQ1lGOztBRFZBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ2FGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvcG9wdXAtbW9kYWwvd2Fsa3Rocm91Z2gtbW9kYWwvd2Fsa3Rocm91Z2gtbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdW5kIHtcclxuICBib3JkZXItcmFkaXVzOiA4JTtcclxufVxyXG4uc2Nyb2xsLWNvbnRlbnQge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYTM7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGN1YmljLWJlemllcigwLjI1LCAwLjI1LCAwLjc1LCAwLjc1KTtcclxufVxyXG5pb24tbGlzdCB7XHJcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLXNsaWRlcyxcclxuLnN3aXBlci1jb250YWluZXIge1xyXG4gIGhlaWdodDogOTAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDglIDglIDAgMDtcclxufVxyXG4uc2xpZGVyLWl0ZW0ge1xyXG4gIGhlaWdodDogYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5zbGlkZS16b29tIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LCByZ2JhKDAsIDAsIDAsIDAuMjIpKSAhaW1wb3J0YW50O1xyXG59XHJcbi50ZXh0LXdyYXBwZXIge1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcbi5zbGlkZS10ZXh0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG4udGV4dC1jZW50ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuaW9uLWNvbnRlbnQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDMlO1xyXG59XHJcbmJ1dHRvbi5mb290ZXItYnV0dG9uIHtcclxuICBoZWlnaHQ6IDE1JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTc4YmU0O1xyXG4gIGJvdHRvbTogMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuIiwiLnJvdW5kIHtcbiAgYm9yZGVyLXJhZGl1czogOCU7XG59XG5cbi5zY3JvbGwtY29udGVudCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmEzO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuMjUsIDAuNzUsIDAuNzUpO1xufVxuXG5pb24tbGlzdCB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuXG5pb24tc2xpZGVzLFxuLnN3aXBlci1jb250YWluZXIge1xuICBoZWlnaHQ6IDkwJTtcbiAgYm9yZGVyLXJhZGl1czogOCUgOCUgMCAwO1xufVxuXG4uc2xpZGVyLWl0ZW0ge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uc2xpZGUtem9vbSB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LCByZ2JhKDAsIDAsIDAsIDAuMjIpKSAhaW1wb3J0YW50O1xufVxuXG4udGV4dC13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uc2xpZGUtdGV4dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4udGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBib3JkZXItcmFkaXVzOiAzJTtcbn1cblxuYnV0dG9uLmZvb3Rlci1idXR0b24ge1xuICBoZWlnaHQ6IDE1JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU3OGJlNDtcbiAgYm90dG9tOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/yannbf/components/popup-modal/walkthrough-modal/walkthrough-modal.page.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/popup-modal/walkthrough-modal/walkthrough-modal.page.ts ***!
  \*************************************************************************************************/
/*! exports provided: WalkthroughModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkthroughModalPage", function() { return WalkthroughModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let WalkthroughModalPage = class WalkthroughModalPage {
    constructor(modaCtrl) {
        this.modaCtrl = modaCtrl;
        this.slides = [
            {
                title: 'Dream\'s Adventure',
                imageUrl: 'assets/yannbf/img/slides/square.png',
                songs: 2,
            },
            {
                title: 'Really nice game',
                imageUrl: 'assets/yannbf/img/slides/square-2.jpg',
                songs: 4,
            },
            {
                title: 'For the Weekend',
                imageUrl: 'assets/yannbf/img/slides/square-3.jpg',
                songs: 4,
            },
        ];
    }
    ngOnInit() {
    }
    dismiss() {
        this.modaCtrl.dismiss();
    }
};
WalkthroughModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
WalkthroughModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-walkthrough-modal',
        template: __webpack_require__(/*! raw-loader!./walkthrough-modal.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/yannbf/components/popup-modal/walkthrough-modal/walkthrough-modal.page.html"),
        styles: [__webpack_require__(/*! ./walkthrough-modal.page.scss */ "./src/app/pages/yannbf/components/popup-modal/walkthrough-modal/walkthrough-modal.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], WalkthroughModalPage);



/***/ })

}]);
//# sourceMappingURL=pages-yannbf-components-popup-modal-popup-modal-module-es2015.js.map