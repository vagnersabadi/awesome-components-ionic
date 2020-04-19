(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-popup-modal-popup-modal-module"],{

/***/ "./src/app/pages/yannbf/components/popup-modal/hint-modal/hint-modal.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/popup-modal/hint-modal/hint-modal.module.ts ***!
  \*************************************************************************************/
/*! exports provided: HintModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HintModalPageModule", function() { return HintModalPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _hint_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hint-modal.page */ "./src/app/pages/yannbf/components/popup-modal/hint-modal/hint-modal.page.ts");






class HintModalPageModule {
}
HintModalPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HintModalPageModule });
HintModalPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HintModalPageModule_Factory(t) { return new (t || HintModalPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HintModalPageModule, { declarations: [_hint_modal_page__WEBPACK_IMPORTED_MODULE_4__["HintModalPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HintModalPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                ],
                declarations: [_hint_modal_page__WEBPACK_IMPORTED_MODULE_4__["HintModalPage"]],
                entryComponents: [_hint_modal_page__WEBPACK_IMPORTED_MODULE_4__["HintModalPage"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




class HintModalPage {
    constructor(modaCtrl) {
        this.modaCtrl = modaCtrl;
    }
    ngOnInit() {
    }
    dismiss() {
        this.modaCtrl.dismiss();
    }
}
HintModalPage.ɵfac = function HintModalPage_Factory(t) { return new (t || HintModalPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"])); };
HintModalPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HintModalPage, selectors: [["app-hint-modal"]], decls: 33, vars: 0, consts: [["slot", "end"], ["fill", "clear", 3, "click"], ["name", "bulb", "slot", "icon-only", "color", "primary"], [1, "ion-padding"], [1, "ion-text-wrap"], ["src", "http://unsplash.it/600/300", "alt", ""], ["expand", "full", "color", "danger", 3, "click"]], template: function HintModalPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HintModalPage_Template_ion_button_click_3_listener() { return ctx.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ion-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Tip for you");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "This modal is pretty nice.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "EXAMPLES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " First thing to do ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Second thing to do ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Third thing to do ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Selfies normcore four dollar toast four loko listicle artisan. Hoodie Marfa authentic, wayfarers church-key tofu Banksy pop-up Kickstarter Brooklyn heirloom swag synth. Echo Park cray synth mixtape. Tofu gastropub squid readymade, trust fund Wes Anderson DIY PBR 8-bit try-hard +1 Shoreditch lo-fi tote bag.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Mumblecore cred selfies fingerstache. Tousled skateboard plaid lo-fi shabby chic salvia, swag Odd Future Etsy art party Austin cronut. Crucifix whatever Pinterest food truck, pickled viral cray 90's DIY chambray keffiyeh biodiesel Vice blog. Cred meh yr tofu.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Mumblecore cred selfies fingerstache. Tousled skateboard plaid lo-fi shabby chic salvia, swag Odd Future Etsy art party Austin cronut. Crucifix whatever Pinterest food truck, pickled viral cray 90's DIY chambray keffiyeh biodiesel Vice blog. Cred meh yr tofu.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ion-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ion-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HintModalPage_Template_ion_button_click_31_listener() { return ctx.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Okay ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonFooter"]], styles: ["ion-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvcG9wdXAtbW9kYWwvaGludC1tb2RhbC9DOlxcVXNlcnNcXHNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZXRvc1xcX2lvbmljXFxpb25pYzQtY29tcG9uZW50cy9zcmNcXGFwcFxccGFnZXNcXHlhbm5iZlxcY29tcG9uZW50c1xccG9wdXAtbW9kYWxcXGhpbnQtbW9kYWxcXGhpbnQtbW9kYWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy9wb3B1cC1tb2RhbC9oaW50LW1vZGFsL2hpbnQtbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL3BvcHVwLW1vZGFsL2hpbnQtbW9kYWwvaGludC1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZm9vdGVyIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICB9IiwiaW9uLWZvb3RlciBidXR0b24ge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HintModalPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hint-modal',
                templateUrl: './hint-modal.page.html',
                styleUrls: ['./hint-modal.page.scss'],
            }]
    }], function () { return [{ type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"] }]; }, null); })();


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
/* harmony import */ var _hint_modal_hint_modal_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hint-modal/hint-modal.module */ "./src/app/pages/yannbf/components/popup-modal/hint-modal/hint-modal.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _popup_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popup-modal.page */ "./src/app/pages/yannbf/components/popup-modal/popup-modal.page.ts");
/* harmony import */ var _walkthrough_modal_walkthrough_modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./walkthrough-modal/walkthrough-modal.module */ "./src/app/pages/yannbf/components/popup-modal/walkthrough-modal/walkthrough-modal.module.ts");
/* harmony import */ var _signup_modal_signup_modal_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signup-modal/signup-modal.module */ "./src/app/pages/yannbf/components/popup-modal/signup-modal/signup-modal.module.ts");











const routes = [
    {
        path: '',
        component: _popup_modal_page__WEBPACK_IMPORTED_MODULE_6__["PopupModalPage"]
    }
];
class PopupModalPageModule {
}
PopupModalPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PopupModalPageModule });
PopupModalPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function PopupModalPageModule_Factory(t) { return new (t || PopupModalPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _walkthrough_modal_walkthrough_modal_module__WEBPACK_IMPORTED_MODULE_7__["WalkthroughModalPageModule"],
            _signup_modal_signup_modal_module__WEBPACK_IMPORTED_MODULE_8__["SignupModalPageModule"],
            _hint_modal_hint_modal_module__WEBPACK_IMPORTED_MODULE_0__["HintModalPageModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PopupModalPageModule, { declarations: [_popup_modal_page__WEBPACK_IMPORTED_MODULE_6__["PopupModalPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _walkthrough_modal_walkthrough_modal_module__WEBPACK_IMPORTED_MODULE_7__["WalkthroughModalPageModule"],
        _signup_modal_signup_modal_module__WEBPACK_IMPORTED_MODULE_8__["SignupModalPageModule"],
        _hint_modal_hint_modal_module__WEBPACK_IMPORTED_MODULE_0__["HintModalPageModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PopupModalPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                    _walkthrough_modal_walkthrough_modal_module__WEBPACK_IMPORTED_MODULE_7__["WalkthroughModalPageModule"],
                    _signup_modal_signup_modal_module__WEBPACK_IMPORTED_MODULE_8__["SignupModalPageModule"],
                    _hint_modal_hint_modal_module__WEBPACK_IMPORTED_MODULE_0__["HintModalPageModule"]
                ],
                declarations: [_popup_modal_page__WEBPACK_IMPORTED_MODULE_6__["PopupModalPage"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _walkthrough_modal_walkthrough_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./walkthrough-modal/walkthrough-modal.page */ "./src/app/pages/yannbf/components/popup-modal/walkthrough-modal/walkthrough-modal.page.ts");
/* harmony import */ var _signup_modal_signup_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup-modal/signup-modal.page */ "./src/app/pages/yannbf/components/popup-modal/signup-modal/signup-modal.page.ts");
/* harmony import */ var _hint_modal_hint_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hint-modal/hint-modal.page */ "./src/app/pages/yannbf/components/popup-modal/hint-modal/hint-modal.page.ts");








class PopupModalPage {
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: pageName,
                cssClass: css // Global.scss
            });
            yield modal.present();
        });
    }
}
PopupModalPage.ɵfac = function PopupModalPage_Factory(t) { return new (t || PopupModalPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"])); };
PopupModalPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PopupModalPage, selectors: [["app-popup-modal"]], decls: 14, vars: 0, consts: [["slot", "start"], ["defaultHref", "/"], [1, "ion-padding"], ["expand", "block", "color", "primary", 3, "click"], ["expand", "block", "color", "danger", 3, "click"], ["expand", "block", "color", "secondary", 3, "click"]], template: function PopupModalPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Popup Modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PopupModalPage_Template_ion_button_click_8_listener() { return ctx.openHintModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Hint Modal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PopupModalPage_Template_ion_button_click_10_listener() { return ctx.openSignupModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Signup with slider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PopupModalPage_Template_ion_button_click_12_listener() { return ctx.openWalkthroughModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Walkthrough modal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"]], styles: ["ion-modal[_ngcontent-%COMP%], .show-page[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.5) !important;\n  padding: 50px !important;\n}\n\n.toolbar-background[_ngcontent-%COMP%] {\n  color: red !important;\n}\n\nion-modal.modal-wrapper[_ngcontent-%COMP%] {\n  transform: translateY(30%) !important;\n}\n\nion-page.modal[_ngcontent-%COMP%] {\n  padding: 30px;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.modal-backdrop-bg[_ngcontent-%COMP%] {\n  background-color: #000;\n  opacity: 0;\n}\n\n.active[_ngcontent-%COMP%]   .modal-backdrop-bg[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvcG9wdXAtbW9kYWwvQzpcXFVzZXJzXFxzYWJhZGlcXERvY3VtZW50c1xcUHJvamV0b3NcXF9pb25pY1xcaW9uaWM0LWNvbXBvbmVudHMvc3JjXFxhcHBcXHBhZ2VzXFx5YW5uYmZcXGNvbXBvbmVudHNcXHBvcHVwLW1vZGFsXFxwb3B1cC1tb2RhbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL3BvcHVwLW1vZGFsL3BvcHVwLW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBRTs7RUFHRSwrQ0FBQTtFQUNBLHdCQUFBO0FDQUo7O0FERUU7RUFDRSxxQkFBQTtBQ0NKOztBRENFO0VBQ0UscUNBQUE7QUNFSjs7QURBRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQ0dKOztBRERFO0VBQ0Usc0JBQUE7RUFDQSxVQUFBO0FDSUo7O0FERkU7RUFDRSxZQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy9wb3B1cC1tb2RhbC9wb3B1cC1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIGlvbi1tb2RhbCxcclxuICAuc2hvdy1wYWdlIHtcclxuICAgIC8vIHRyYW5zcGFyZW50IGJsYWNrIGJhY2tncm91bmQgb3ZlcmxheVxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNSkgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDUwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnRvb2xiYXItYmFja2dyb3VuZCB7XHJcbiAgICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGlvbi1tb2RhbC5tb2RhbC13cmFwcGVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMCUpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGlvbi1wYWdlLm1vZGFsIHtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgfVxyXG4gIC5tb2RhbC1iYWNrZHJvcC1iZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgLmFjdGl2ZSAubW9kYWwtYmFja2Ryb3AtYmcge1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gIH1cclxuXHJcblxyXG5cclxuIiwiaW9uLW1vZGFsLFxuLnNob3ctcGFnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA1MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi50b29sYmFyLWJhY2tncm91bmQge1xuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1tb2RhbC5tb2RhbC13cmFwcGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwJSkgIWltcG9ydGFudDtcbn1cblxuaW9uLXBhZ2UubW9kYWwge1xuICBwYWRkaW5nOiAzMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5tb2RhbC1iYWNrZHJvcC1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5hY3RpdmUgLm1vZGFsLWJhY2tkcm9wLWJnIHtcbiAgb3BhY2l0eTogMC41O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PopupModalPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-popup-modal',
                templateUrl: './popup-modal.page.html',
                styleUrls: ['./popup-modal.page.scss'],
            }]
    }], function () { return [{ type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _signup_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup-modal.page */ "./src/app/pages/yannbf/components/popup-modal/signup-modal/signup-modal.page.ts");






class SignupModalPageModule {
}
SignupModalPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SignupModalPageModule });
SignupModalPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SignupModalPageModule_Factory(t) { return new (t || SignupModalPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SignupModalPageModule, { declarations: [_signup_modal_page__WEBPACK_IMPORTED_MODULE_4__["SignupModalPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupModalPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                ],
                declarations: [_signup_modal_page__WEBPACK_IMPORTED_MODULE_4__["SignupModalPage"]],
                entryComponents: [_signup_modal_page__WEBPACK_IMPORTED_MODULE_4__["SignupModalPage"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = function (a0) { return { "background-image": a0 }; };
function SignupModalPage_ion_slide_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-slide", 8);
} if (rf & 2) {
    const slide_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, "url(" + slide_r68.imageUrl + ")"));
} }
class SignupModalPage {
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
}
SignupModalPage.ɵfac = function SignupModalPage_Factory(t) { return new (t || SignupModalPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"])); };
SignupModalPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupModalPage, selectors: [["app-signup-modal"]], decls: 17, vars: 3, consts: [[1, "round", 3, "pager", "options"], ["class", "ion-text-center slider-item", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "ion-text-center", 2, "margin-left", "10px"], [1, "ion-text-center"], ["expand", "full", 3, "click"], ["size", "6"], ["expand", "full", "color", "secondary", 3, "click"], ["expand", "full", "color", "danger", 3, "click"], [1, "ion-text-center", "slider-item", 3, "ngStyle"]], template: function SignupModalPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-slides", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupModalPage_ion_slide_2_Template, 1, 3, "ion-slide", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-row", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sign up now to get the most out of this app!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-row", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupModalPage_Template_ion_button_click_8_listener() { return ctx.signup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Sign Up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-row", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-col", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupModalPage_Template_ion_button_click_12_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Log in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-col", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupModalPage_Template_ion_button_click_15_listener() { return ctx.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Sign up Later ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pager", true)("options", ctx.slideOpts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSlides"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSlide"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: [".scroll-content[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.round[_ngcontent-%COMP%] {\n  border-radius: 3%;\n}\n\n.swiper-pagination-bullet[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.swiper-pagination-bullet-active[_ngcontent-%COMP%] {\n  background-color: #e43;\n  transition: all 500ms cubic-bezier(0.25, 0.25, 0.75, 0.75);\n}\n\n.background-image[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  border-color: transparent;\n}\n\nion-list[_ngcontent-%COMP%] {\n  margin: 0 !important;\n}\n\nion-slides[_ngcontent-%COMP%], .swiper-container[_ngcontent-%COMP%] {\n  height: 30vh;\n}\n\n.slider-item[_ngcontent-%COMP%] {\n  height: 30vh;\n  width: 100%;\n  background-size: cover;\n}\n\n.slide-zoom[_ngcontent-%COMP%] {\n  height: 100%;\n  background: linear-gradient(transparent, rgba(0, 0, 0, 0.22)) !important;\n}\n\n.scroll-content[_ngcontent-%COMP%] {\n  border-radius: 3%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvcG9wdXAtbW9kYWwvc2lnbnVwLW1vZGFsL0M6XFxVc2Vyc1xcc2FiYWRpXFxEb2N1bWVudHNcXFByb2pldG9zXFxfaW9uaWNcXGlvbmljNC1jb21wb25lbnRzL3NyY1xcYXBwXFxwYWdlc1xceWFubmJmXFxjb21wb25lbnRzXFxwb3B1cC1tb2RhbFxcc2lnbnVwLW1vZGFsXFxzaWdudXAtbW9kYWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy9wb3B1cC1tb2RhbC9zaWdudXAtbW9kYWwvc2lnbnVwLW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxpQkFBQTtBQ0VGOztBREFBO0VBQ0UsdUJBQUE7QUNHRjs7QUREQTtFQUNFLHNCQUFBO0VBQ0EsMERBQUE7QUNJRjs7QUREQTtFQUNFLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0FDSUY7O0FEREE7RUFDRSxvQkFBQTtBQ0lGOztBREZBOztFQUVFLFlBQUE7QUNLRjs7QURIQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUNNRjs7QURKQTtFQUNFLFlBQUE7RUFDQSx3RUFBQTtBQ09GOztBRExBO0VBQ0UsaUJBQUE7QUNRRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL3BvcHVwLW1vZGFsL3NpZ251cC1tb2RhbC9zaWdudXAtbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcm9sbC1jb250ZW50IHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5yb3VuZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMyU7XHJcbn1cclxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNDM7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGN1YmljLWJlemllcigwLjI1LCAwLjI1LCAwLjc1LCAwLjc1KTtcclxufVxyXG5cclxuLmJhY2tncm91bmQtaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1zbGlkZXMsXHJcbi5zd2lwZXItY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDMwdmg7XHJcbn1cclxuLnNsaWRlci1pdGVtIHtcclxuICBoZWlnaHQ6IDMwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4uc2xpZGUtem9vbSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCwgcmdiYSgwLCAwLCAwLCAwLjIyKSkgIWltcG9ydGFudDtcclxufVxyXG4uc2Nyb2xsLWNvbnRlbnQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDMlO1xyXG59XHJcbiIsIi5zY3JvbGwtY29udGVudCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5yb3VuZCB7XG4gIGJvcmRlci1yYWRpdXM6IDMlO1xufVxuXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0MztcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGN1YmljLWJlemllcigwLjI1LCAwLjI1LCAwLjc1LCAwLjc1KTtcbn1cblxuLmJhY2tncm91bmQtaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1saXN0IHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zbGlkZXMsXG4uc3dpcGVyLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMzB2aDtcbn1cblxuLnNsaWRlci1pdGVtIHtcbiAgaGVpZ2h0OiAzMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnNsaWRlLXpvb20ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCwgcmdiYSgwLCAwLCAwLCAwLjIyKSkgIWltcG9ydGFudDtcbn1cblxuLnNjcm9sbC1jb250ZW50IHtcbiAgYm9yZGVyLXJhZGl1czogMyU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupModalPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup-modal',
                templateUrl: './signup-modal.page.html',
                styleUrls: ['./signup-modal.page.scss'],
            }]
    }], function () { return [{ type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _walkthrough_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./walkthrough-modal.page */ "./src/app/pages/yannbf/components/popup-modal/walkthrough-modal/walkthrough-modal.page.ts");






class WalkthroughModalPageModule {
}
WalkthroughModalPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WalkthroughModalPageModule });
WalkthroughModalPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WalkthroughModalPageModule_Factory(t) { return new (t || WalkthroughModalPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WalkthroughModalPageModule, { declarations: [_walkthrough_modal_page__WEBPACK_IMPORTED_MODULE_4__["WalkthroughModalPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WalkthroughModalPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                ],
                declarations: [_walkthrough_modal_page__WEBPACK_IMPORTED_MODULE_4__["WalkthroughModalPage"]],
                entryComponents: [_walkthrough_modal_page__WEBPACK_IMPORTED_MODULE_4__["WalkthroughModalPage"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = function (a0) { return { "background-image": a0 }; };
function WalkthroughModalPage_ion_slide_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-slide", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, "url(" + slide_r66.imageUrl + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r66.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", slide_r66.songs, " songs");
} }
class WalkthroughModalPage {
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
}
WalkthroughModalPage.ɵfac = function WalkthroughModalPage_Factory(t) { return new (t || WalkthroughModalPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"])); };
WalkthroughModalPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WalkthroughModalPage, selectors: [["app-walkthrough-modal"]], decls: 7, vars: 3, consts: [[1, "round", 3, "pager", "options"], ["class", "ion-text-center slider-item", 3, "ngStyle", 4, "ngFor", "ngForOf"], ["size", "large", "expand", "full", 1, "ion-no-margin", "footer-button", 3, "click"], [1, "ion-text-center", "slider-item", 3, "ngStyle"], [1, "slide-text"]], template: function WalkthroughModalPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-slides", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WalkthroughModalPage_ion_slide_2_Template, 6, 5, "ion-slide", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalkthroughModalPage_Template_ion_button_click_4_listener() { return ctx.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Let's get started! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pager", true)("options", ctx.slideOpts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSlides"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSlide"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: [".slide-text[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  top: 50%;\n  transform: translateY(-50%);\n  color: white;\n}\n\n.round[_ngcontent-%COMP%] {\n  border-radius: 3%;\n}\n\n.background-image[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  border-color: transparent;\n}\n\n.slider-item[_ngcontent-%COMP%] {\n  height: 30vh;\n  width: 100%;\n  background-size: cover;\n}\n\n.footer-button[_ngcontent-%COMP%] {\n  --background: #578be4 !important;\n}\n\n.footer-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvcG9wdXAtbW9kYWwvd2Fsa3Rocm91Z2gtbW9kYWwvQzpcXFVzZXJzXFxzYWJhZGlcXERvY3VtZW50c1xcUHJvamV0b3NcXF9pb25pY1xcaW9uaWM0LWNvbXBvbmVudHMvc3JjXFxhcHBcXHBhZ2VzXFx5YW5uYmZcXGNvbXBvbmVudHNcXHBvcHVwLW1vZGFsXFx3YWxrdGhyb3VnaC1tb2RhbFxcd2Fsa3Rocm91Z2gtbW9kYWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy9wb3B1cC1tb2RhbC93YWxrdGhyb3VnaC1tb2RhbC93YWxrdGhyb3VnaC1tb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtBQ0NGOztBREFFO0VBQ0UsZUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvcG9wdXAtbW9kYWwvd2Fsa3Rocm91Z2gtbW9kYWwvd2Fsa3Rocm91Z2gtbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNsaWRlLXRleHQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnJvdW5kIHtcclxuICBib3JkZXItcmFkaXVzOiAzJTtcclxufVxyXG5cclxuLmJhY2tncm91bmQtaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnNsaWRlci1pdGVtIHtcclxuICBoZWlnaHQ6IDMwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmZvb3Rlci1idXR0b24ge1xyXG4gIC0tYmFja2dyb3VuZDogIzU3OGJlNCAhaW1wb3J0YW50O1xyXG4gIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxufVxyXG4iLCIuc2xpZGUtdGV4dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5yb3VuZCB7XG4gIGJvcmRlci1yYWRpdXM6IDMlO1xufVxuXG4uYmFja2dyb3VuZC1pbWFnZSB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnNsaWRlci1pdGVtIHtcbiAgaGVpZ2h0OiAzMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmZvb3Rlci1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICM1NzhiZTQgIWltcG9ydGFudDtcbn1cbi5mb290ZXItYnV0dG9uIHNwYW4ge1xuICBmb250LXNpemU6IDEycHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WalkthroughModalPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-walkthrough-modal',
                templateUrl: './walkthrough-modal.page.html',
                styleUrls: ['./walkthrough-modal.page.scss'],
            }]
    }], function () { return [{ type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-yannbf-components-popup-modal-popup-modal-module-es2015.js.map