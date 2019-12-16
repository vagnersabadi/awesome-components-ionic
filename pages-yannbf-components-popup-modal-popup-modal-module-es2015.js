(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-popup-modal-popup-modal-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/popup-modal/hint-modal/hint-modal.page.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/popup-modal/hint-modal/hint-modal.page.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"dismiss()\" fill=\"clear\">\r\n        <ion-icon name=\"bulb\" slot=\"icon-only\" color=\"primary\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Tip for you</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-label class=\"ion-text-wrap\"> \r\n    \r\n  <h1>Modal</h1>\r\n  <h3>This modal is pretty nice.</h3>\r\n  <p>EXAMPLES</p>\r\n  <ul>\r\n    <li> First thing to do\r\n    </li>\r\n    <li> Second thing to do\r\n    </li>\r\n    <li> Third thing to do\r\n    </li>\r\n  </ul>\r\n  <p>Selfies normcore four dollar toast four loko listicle artisan. Hoodie Marfa authentic, wayfarers church-key tofu\r\n    Banksy\r\n    pop-up Kickstarter Brooklyn heirloom swag synth. Echo Park cray synth mixtape. Tofu gastropub squid readymade, trust\r\n    fund Wes Anderson DIY PBR 8-bit try-hard +1 Shoreditch lo-fi tote bag.</p>\r\n  <p><img src=\"http://unsplash.it/600/300\" alt=\"\" /></p>\r\n  <p>Mumblecore cred selfies fingerstache. Tousled skateboard plaid lo-fi shabby chic salvia, swag Odd Future Etsy art\r\n    party\r\n    Austin cronut. Crucifix whatever Pinterest food truck, pickled viral cray 90's DIY chambray keffiyeh biodiesel Vice\r\n    blog.\r\n    Cred meh yr tofu.</p>\r\n  <p>Mumblecore cred selfies fingerstache. Tousled skateboard plaid lo-fi shabby chic salvia, swag Odd Future Etsy art\r\n    party\r\n    Austin cronut. Crucifix whatever Pinterest food truck, pickled viral cray 90's DIY chambray keffiyeh biodiesel Vice\r\n    blog.\r\n    Cred meh yr tofu.</p>\r\n  </ion-label>\r\n\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-button expand=\"full\" color=\"danger\" (click)=\"dismiss()\">Okay\r\n  </ion-button>\r\n</ion-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/popup-modal/popup-modal.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/popup-modal/popup-modal.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Popup Modal</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"ion-padding\">\r\n    <ion-button expand=\"block\" color=\"primary\"   (click)=\"openHintModal()\">       Hint Modal        </ion-button>\r\n    <ion-button expand=\"block\" color=\"danger\"    (click)=\"openSignupModal()\">     Signup with slider</ion-button>\r\n    <ion-button expand=\"block\" color=\"secondary\" (click)=\"openWalkthroughModal()\">Walkthrough modal </ion-button>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/popup-modal/signup-modal/signup-modal.page.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/popup-modal/signup-modal/signup-modal.page.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-slides [pager]=\"true\"  [options]=\"slideOpts\" class=\"round\">\r\n    <ion-slide *ngFor=\"let slide of slides\" class=\"ion-text-center slider-item\" [ngStyle]=\"{'background-image': 'url(' + slide.imageUrl +')'}\">\r\n    </ion-slide>\r\n  </ion-slides>\r\n  <ion-row class=\"ion-text-center\" style=\"margin-left:10px\">\r\n    <p>Sign up now to get the most out of this app!</p>\r\n  </ion-row>\r\n  <ion-row class=\"ion-text-center\">\r\n    <ion-col>\r\n      <ion-button expand=\"full\" (click)=\"signup()\">\r\n            Sign Up\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"ion-text-center\">\r\n    <ion-col size=\"6\">\r\n      <ion-button expand=\"full\" color=\"secondary\" (click)=\"login()\">\r\n            Log in\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col size=\"6\">\r\n      <ion-button expand=\"full\" color=\"danger\" (click)=\"dismiss()\">\r\n            Sign up Later\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/popup-modal/walkthrough-modal/walkthrough-modal.page.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/popup-modal/walkthrough-modal/walkthrough-modal.page.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-slides [pager]=\"true\" [options]=\"slideOpts\" class=\"round\">\r\n    <ion-slide *ngFor=\"let slide of slides\" class=\"ion-text-center slider-item\"\r\n      [ngStyle]=\"{'background-image': 'url(' + slide.imageUrl +')'}\">\r\n      <div class=\"slide-text\">\r\n        <h2>{{slide.title}}</h2>\r\n        <p>{{slide.songs}} songs</p>\r\n      </div>\r\n    </ion-slide>\r\n  </ion-slides>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-button size=\"large\" expand=\"full\" class=\"ion-no-margin footer-button\" (click)=\"dismiss()\">\r\n    <span>\r\n        Let's get started!\r\n    </span>\r\n  </ion-button>\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/yannbf/components/popup-modal/hint-modal/hint-modal.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/popup-modal/hint-modal/hint-modal.module.ts ***!
  \*************************************************************************************/
/*! exports provided: HintModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HintModalPageModule", function() { return HintModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _hint_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hint-modal.page */ "./src/app/pages/yannbf/components/popup-modal/hint-modal/hint-modal.page.ts");






let HintModalPageModule = class HintModalPageModule {
};
HintModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        ],
        declarations: [_hint_modal_page__WEBPACK_IMPORTED_MODULE_5__["HintModalPage"]],
        entryComponents: [_hint_modal_page__WEBPACK_IMPORTED_MODULE_5__["HintModalPage"]]
    })
], HintModalPageModule);



/***/ }),

/***/ "./src/app/pages/yannbf/components/popup-modal/hint-modal/hint-modal.page.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/popup-modal/hint-modal/hint-modal.page.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-footer button {\n  margin: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvcG9wdXAtbW9kYWwvaGludC1tb2RhbC9DOlxcVXNlcnNcXHNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZXRvc1xcX2lvbmljXFxpb25pYzQtY29tcG9uZW50cy9zcmNcXGFwcFxccGFnZXNcXHlhbm5iZlxcY29tcG9uZW50c1xccG9wdXAtbW9kYWxcXGhpbnQtbW9kYWxcXGhpbnQtbW9kYWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy9wb3B1cC1tb2RhbC9oaW50LW1vZGFsL2hpbnQtbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL3BvcHVwLW1vZGFsL2hpbnQtbW9kYWwvaGludC1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZm9vdGVyIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICB9IiwiaW9uLWZvb3RlciBidXR0b24ge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/yannbf/components/popup-modal/hint-modal/hint-modal.page.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/popup-modal/hint-modal/hint-modal.page.ts ***!
  \***********************************************************************************/
/*! exports provided: HintModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HintModalPage", function() { return HintModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let HintModalPage = class HintModalPage {
    constructor(modaCtrl) {
        this.modaCtrl = modaCtrl;
    }
    ngOnInit() {
    }
    dismiss() {
        this.modaCtrl.dismiss();
    }
};
HintModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
HintModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hint-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./hint-modal.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/popup-modal/hint-modal/hint-modal.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./hint-modal.page.scss */ "./src/app/pages/yannbf/components/popup-modal/hint-modal/hint-modal.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], HintModalPage);



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
/* harmony import */ var _hint_modal_hint_modal_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hint-modal/hint-modal.module */ "./src/app/pages/yannbf/components/popup-modal/hint-modal/hint-modal.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _popup_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./popup-modal.page */ "./src/app/pages/yannbf/components/popup-modal/popup-modal.page.ts");
/* harmony import */ var _walkthrough_modal_walkthrough_modal_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./walkthrough-modal/walkthrough-modal.module */ "./src/app/pages/yannbf/components/popup-modal/walkthrough-modal/walkthrough-modal.module.ts");
/* harmony import */ var _signup_modal_signup_modal_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signup-modal/signup-modal.module */ "./src/app/pages/yannbf/components/popup-modal/signup-modal/signup-modal.module.ts");










const routes = [
    {
        path: '',
        component: _popup_modal_page__WEBPACK_IMPORTED_MODULE_7__["PopupModalPage"]
    }
];
let PopupModalPageModule = class PopupModalPageModule {
};
PopupModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
            _walkthrough_modal_walkthrough_modal_module__WEBPACK_IMPORTED_MODULE_8__["WalkthroughModalPageModule"],
            _signup_modal_signup_modal_module__WEBPACK_IMPORTED_MODULE_9__["SignupModalPageModule"],
            _hint_modal_hint_modal_module__WEBPACK_IMPORTED_MODULE_1__["HintModalPageModule"]
        ],
        declarations: [_popup_modal_page__WEBPACK_IMPORTED_MODULE_7__["PopupModalPage"]]
    })
], PopupModalPageModule);



/***/ }),

/***/ "./src/app/pages/yannbf/components/popup-modal/popup-modal.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/popup-modal/popup-modal.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-modal,\n.show-page {\n  background-color: rgba(0, 0, 0, 0.5) !important;\n  padding: 50px !important;\n}\n\n.toolbar-background {\n  color: red !important;\n}\n\nion-modal.modal-wrapper {\n  transform: translateY(30%) !important;\n}\n\nion-page.modal {\n  padding: 30px;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.modal-backdrop-bg {\n  background-color: #000;\n  opacity: 0;\n}\n\n.active .modal-backdrop-bg {\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvcG9wdXAtbW9kYWwvQzpcXFVzZXJzXFxzYWJhZGlcXERvY3VtZW50c1xcUHJvamV0b3NcXF9pb25pY1xcaW9uaWM0LWNvbXBvbmVudHMvc3JjXFxhcHBcXHBhZ2VzXFx5YW5uYmZcXGNvbXBvbmVudHNcXHBvcHVwLW1vZGFsXFxwb3B1cC1tb2RhbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL3BvcHVwLW1vZGFsL3BvcHVwLW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBRTs7RUFHRSwrQ0FBQTtFQUNBLHdCQUFBO0FDQUo7O0FERUU7RUFDRSxxQkFBQTtBQ0NKOztBRENFO0VBQ0UscUNBQUE7QUNFSjs7QURBRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQ0dKOztBRERFO0VBQ0Usc0JBQUE7RUFDQSxVQUFBO0FDSUo7O0FERkU7RUFDRSxZQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy9wb3B1cC1tb2RhbC9wb3B1cC1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIGlvbi1tb2RhbCxcclxuICAuc2hvdy1wYWdlIHtcclxuICAgIC8vIHRyYW5zcGFyZW50IGJsYWNrIGJhY2tncm91bmQgb3ZlcmxheVxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNSkgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDUwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnRvb2xiYXItYmFja2dyb3VuZCB7XHJcbiAgICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGlvbi1tb2RhbC5tb2RhbC13cmFwcGVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMCUpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGlvbi1wYWdlLm1vZGFsIHtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgfVxyXG4gIC5tb2RhbC1iYWNrZHJvcC1iZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgLmFjdGl2ZSAubW9kYWwtYmFja2Ryb3AtYmcge1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gIH1cclxuXHJcblxyXG5cclxuIiwiaW9uLW1vZGFsLFxuLnNob3ctcGFnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA1MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi50b29sYmFyLWJhY2tncm91bmQge1xuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1tb2RhbC5tb2RhbC13cmFwcGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwJSkgIWltcG9ydGFudDtcbn1cblxuaW9uLXBhZ2UubW9kYWwge1xuICBwYWRkaW5nOiAzMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5tb2RhbC1iYWNrZHJvcC1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5hY3RpdmUgLm1vZGFsLWJhY2tkcm9wLWJnIHtcbiAgb3BhY2l0eTogMC41O1xufSJdfQ== */");

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
/* harmony import */ var _signup_modal_signup_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup-modal/signup-modal.page */ "./src/app/pages/yannbf/components/popup-modal/signup-modal/signup-modal.page.ts");
/* harmony import */ var _hint_modal_hint_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hint-modal/hint-modal.page */ "./src/app/pages/yannbf/components/popup-modal/hint-modal/hint-modal.page.ts");






let PopupModalPage = class PopupModalPage {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() {
    }
    openHintModal() {
        this.openModal(_hint_modal_hint_modal_page__WEBPACK_IMPORTED_MODULE_5__["HintModalPage"], ['inset-modal']);
    }
    openWalkthroughModal() {
        this.openModal(_walkthrough_modal_walkthrough_modal_page__WEBPACK_IMPORTED_MODULE_3__["WalkthroughModalPage"], ['inset-modal', 'radius-modal']);
    }
    openSignupModal() {
        this.openModal(_signup_modal_signup_modal_page__WEBPACK_IMPORTED_MODULE_4__["SignupModalPage"], ['inset-modal']);
    }
    openModal(pageName, css) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: pageName,
                cssClass: css // Global.scss
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./popup-modal.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/popup-modal/popup-modal.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./popup-modal.page.scss */ "./src/app/pages/yannbf/components/popup-modal/popup-modal.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], PopupModalPage);



/***/ }),

/***/ "./src/app/pages/yannbf/components/popup-modal/signup-modal/signup-modal.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/popup-modal/signup-modal/signup-modal.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: SignupModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupModalPageModule", function() { return SignupModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signup_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup-modal.page */ "./src/app/pages/yannbf/components/popup-modal/signup-modal/signup-modal.page.ts");






let SignupModalPageModule = class SignupModalPageModule {
};
SignupModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        ],
        declarations: [_signup_modal_page__WEBPACK_IMPORTED_MODULE_5__["SignupModalPage"]],
        entryComponents: [_signup_modal_page__WEBPACK_IMPORTED_MODULE_5__["SignupModalPage"]]
    })
], SignupModalPageModule);



/***/ }),

/***/ "./src/app/pages/yannbf/components/popup-modal/signup-modal/signup-modal.page.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/popup-modal/signup-modal/signup-modal.page.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".scroll-content {\n  overflow: hidden;\n}\n\n.round {\n  border-radius: 3%;\n}\n\n.swiper-pagination-bullet {\n  background-color: white;\n}\n\n.swiper-pagination-bullet-active {\n  background-color: #e43;\n  transition: all 500ms cubic-bezier(0.25, 0.25, 0.75, 0.75);\n}\n\n.background-image {\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  border-color: transparent;\n}\n\nion-list {\n  margin: 0 !important;\n}\n\nion-slides,\n.swiper-container {\n  height: 30vh;\n}\n\n.slider-item {\n  height: 30vh;\n  width: 100%;\n  background-size: cover;\n}\n\n.slide-zoom {\n  height: 100%;\n  background: linear-gradient(transparent, rgba(0, 0, 0, 0.22)) !important;\n}\n\n.scroll-content {\n  border-radius: 3%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvcG9wdXAtbW9kYWwvc2lnbnVwLW1vZGFsL0M6XFxVc2Vyc1xcc2FiYWRpXFxEb2N1bWVudHNcXFByb2pldG9zXFxfaW9uaWNcXGlvbmljNC1jb21wb25lbnRzL3NyY1xcYXBwXFxwYWdlc1xceWFubmJmXFxjb21wb25lbnRzXFxwb3B1cC1tb2RhbFxcc2lnbnVwLW1vZGFsXFxzaWdudXAtbW9kYWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy9wb3B1cC1tb2RhbC9zaWdudXAtbW9kYWwvc2lnbnVwLW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxpQkFBQTtBQ0VGOztBREFBO0VBQ0UsdUJBQUE7QUNHRjs7QUREQTtFQUNFLHNCQUFBO0VBQ0EsMERBQUE7QUNJRjs7QUREQTtFQUNFLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0FDSUY7O0FEREE7RUFDRSxvQkFBQTtBQ0lGOztBREZBOztFQUVFLFlBQUE7QUNLRjs7QURIQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUNNRjs7QURKQTtFQUNFLFlBQUE7RUFDQSx3RUFBQTtBQ09GOztBRExBO0VBQ0UsaUJBQUE7QUNRRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL3BvcHVwLW1vZGFsL3NpZ251cC1tb2RhbC9zaWdudXAtbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcm9sbC1jb250ZW50IHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5yb3VuZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMyU7XHJcbn1cclxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNDM7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGN1YmljLWJlemllcigwLjI1LCAwLjI1LCAwLjc1LCAwLjc1KTtcclxufVxyXG5cclxuLmJhY2tncm91bmQtaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1zbGlkZXMsXHJcbi5zd2lwZXItY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDMwdmg7XHJcbn1cclxuLnNsaWRlci1pdGVtIHtcclxuICBoZWlnaHQ6IDMwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4uc2xpZGUtem9vbSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCwgcmdiYSgwLCAwLCAwLCAwLjIyKSkgIWltcG9ydGFudDtcclxufVxyXG4uc2Nyb2xsLWNvbnRlbnQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDMlO1xyXG59XHJcbiIsIi5zY3JvbGwtY29udGVudCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5yb3VuZCB7XG4gIGJvcmRlci1yYWRpdXM6IDMlO1xufVxuXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0MztcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGN1YmljLWJlemllcigwLjI1LCAwLjI1LCAwLjc1LCAwLjc1KTtcbn1cblxuLmJhY2tncm91bmQtaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1saXN0IHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zbGlkZXMsXG4uc3dpcGVyLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMzB2aDtcbn1cblxuLnNsaWRlci1pdGVtIHtcbiAgaGVpZ2h0OiAzMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnNsaWRlLXpvb20ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCwgcmdiYSgwLCAwLCAwLCAwLjIyKSkgIWltcG9ydGFudDtcbn1cblxuLnNjcm9sbC1jb250ZW50IHtcbiAgYm9yZGVyLXJhZGl1czogMyU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/yannbf/components/popup-modal/signup-modal/signup-modal.page.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/popup-modal/signup-modal/signup-modal.page.ts ***!
  \***************************************************************************************/
/*! exports provided: SignupModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupModalPage", function() { return SignupModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let SignupModalPage = class SignupModalPage {
    constructor(modaCtrl) {
        this.modaCtrl = modaCtrl;
        this.slides = [
            {
                id: 1,
                imageUrl: 'assets/yannbf/img/slides/square.png',
            },
            {
                id: 2,
                imageUrl: 'assets/yannbf/img/slides/square-2.jpg',
            },
            {
                id: 3,
                imageUrl: 'assets/yannbf/img/slides/square-3.jpg',
            },
        ];
        this.slideOpts = {
            loop: true,
            speed: 1500,
            autoplay: {
                delay: 2000,
            },
            effect: 'fade'
        };
    }
    ngOnInit() {
    }
    signup() {
        this.modaCtrl.dismiss();
    }
    login() {
        this.modaCtrl.dismiss();
    }
    dismiss() {
        this.modaCtrl.dismiss();
    }
};
SignupModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
SignupModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup-modal.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/popup-modal/signup-modal/signup-modal.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup-modal.page.scss */ "./src/app/pages/yannbf/components/popup-modal/signup-modal/signup-modal.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], SignupModalPage);



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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".slide-text {\n  position: relative;\n  text-align: center;\n  top: 50%;\n  transform: translateY(-50%);\n  color: white;\n}\n\n.round {\n  border-radius: 3%;\n}\n\n.background-image {\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  border-color: transparent;\n}\n\n.slider-item {\n  height: 30vh;\n  width: 100%;\n  background-size: cover;\n}\n\n.footer-button {\n  --background: #578be4 !important;\n}\n\n.footer-button span {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvcG9wdXAtbW9kYWwvd2Fsa3Rocm91Z2gtbW9kYWwvQzpcXFVzZXJzXFxzYWJhZGlcXERvY3VtZW50c1xcUHJvamV0b3NcXF9pb25pY1xcaW9uaWM0LWNvbXBvbmVudHMvc3JjXFxhcHBcXHBhZ2VzXFx5YW5uYmZcXGNvbXBvbmVudHNcXHBvcHVwLW1vZGFsXFx3YWxrdGhyb3VnaC1tb2RhbFxcd2Fsa3Rocm91Z2gtbW9kYWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy9wb3B1cC1tb2RhbC93YWxrdGhyb3VnaC1tb2RhbC93YWxrdGhyb3VnaC1tb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtBQ0NGOztBREFFO0VBQ0UsZUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvcG9wdXAtbW9kYWwvd2Fsa3Rocm91Z2gtbW9kYWwvd2Fsa3Rocm91Z2gtbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNsaWRlLXRleHQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnJvdW5kIHtcclxuICBib3JkZXItcmFkaXVzOiAzJTtcclxufVxyXG5cclxuLmJhY2tncm91bmQtaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnNsaWRlci1pdGVtIHtcclxuICBoZWlnaHQ6IDMwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmZvb3Rlci1idXR0b24ge1xyXG4gIC0tYmFja2dyb3VuZDogIzU3OGJlNCAhaW1wb3J0YW50O1xyXG4gIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxufVxyXG4iLCIuc2xpZGUtdGV4dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5yb3VuZCB7XG4gIGJvcmRlci1yYWRpdXM6IDMlO1xufVxuXG4uYmFja2dyb3VuZC1pbWFnZSB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnNsaWRlci1pdGVtIHtcbiAgaGVpZ2h0OiAzMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmZvb3Rlci1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICM1NzhiZTQgIWltcG9ydGFudDtcbn1cbi5mb290ZXItYnV0dG9uIHNwYW4ge1xuICBmb250LXNpemU6IDEycHg7XG59Il19 */");

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
        this.slideOpts = {
            loop: true,
        };
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./walkthrough-modal.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/popup-modal/walkthrough-modal/walkthrough-modal.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./walkthrough-modal.page.scss */ "./src/app/pages/yannbf/components/popup-modal/walkthrough-modal/walkthrough-modal.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], WalkthroughModalPage);



/***/ })

}]);
//# sourceMappingURL=pages-yannbf-components-popup-modal-popup-modal-module-es2015.js.map