(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-popup-fab-popup-fab-module"],{

/***/ "./src/app/pages/yannbf/components/popup-fab/popup-fab-modal/popup-fab-modal.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/popup-fab/popup-fab-modal/popup-fab-modal.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: PopupFabModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupFabModalPageModule", function() { return PopupFabModalPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _popup_fab_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popup-fab-modal.page */ "./src/app/pages/yannbf/components/popup-fab/popup-fab-modal/popup-fab-modal.page.ts");






class PopupFabModalPageModule {
}
PopupFabModalPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PopupFabModalPageModule });
PopupFabModalPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PopupFabModalPageModule_Factory(t) { return new (t || PopupFabModalPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PopupFabModalPageModule, { declarations: [_popup_fab_modal_page__WEBPACK_IMPORTED_MODULE_4__["PopupFabModalPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupFabModalPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                ],
                declarations: [_popup_fab_modal_page__WEBPACK_IMPORTED_MODULE_4__["PopupFabModalPage"]],
                entryComponents: [_popup_fab_modal_page__WEBPACK_IMPORTED_MODULE_4__["PopupFabModalPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/yannbf/components/popup-fab/popup-fab-modal/popup-fab-modal.page.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/popup-fab/popup-fab-modal/popup-fab-modal.page.ts ***!
  \*******************************************************************************************/
/*! exports provided: PopupFabModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupFabModalPage", function() { return PopupFabModalPage; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");




class PopupFabModalPage {
    constructor(modaCtrl) {
        this.modaCtrl = modaCtrl;
        this.slideOpts = {
            effect: 'flip',
        };
    }
    ngOnInit() {
    }
    dismiss() {
        this.modaCtrl.dismiss();
    }
}
PopupFabModalPage.ɵfac = function PopupFabModalPage_Factory(t) { return new (t || PopupFabModalPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["ModalController"])); };
PopupFabModalPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PopupFabModalPage, selectors: [["app-popup-fab-modal"]], decls: 24, vars: 2, consts: [["slot", "end"], ["fill", "clear", 3, "click"], ["name", "close", "slot", "icon-only", "color", "primary"], [3, "fullscreen"], ["pager", "true", 3, "options"], [1, "slide", "slide-1"], [1, "slideTitle"], [1, "slide", "slide-2"], [1, "slide", "slide-3"]], template: function PopupFabModalPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PopupFabModalPage_Template_ion_button_click_3_listener() { return ctx.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Popup fab modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-slides", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Slide 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Slide 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Slide 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fullscreen", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.slideOpts);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonSlides"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonSlide"]], styles: ["ion-slide[_ngcontent-%COMP%] {\n  -webkit-animation: fade-in 0.8s ease-in-out;\n          animation: fade-in 0.8s ease-in-out;\n}\n\n@-webkit-keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: #00ccb2;\n}\n\nion-icon[_ngcontent-%COMP%], div[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n}\n\nion-slides[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nion-slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 20px;\n  flex-direction: column;\n}\n\nion-slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 150px;\n}\n\nion-slides[_ngcontent-%COMP%]   .slide.slide-1[_ngcontent-%COMP%] {\n  background: dodgerblue;\n  color: white;\n}\n\nion-slides[_ngcontent-%COMP%]   .slide.slide-2[_ngcontent-%COMP%] {\n  background: #f28131;\n  color: white;\n}\n\nion-slides[_ngcontent-%COMP%]   .slide.slide-3[_ngcontent-%COMP%] {\n  background: #9f5afd;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvcG9wdXAtZmFiL3BvcHVwLWZhYi1tb2RhbC9DOlxcVXNlcnNcXFZhZ25lciBTYWJhZGlcXERvY3VtZW50c1xcUHJvamVjdHNcXF9NeVxcYXdlc29tZS1jb21wb25lbnRzLWlvbmljL3NyY1xcYXBwXFxwYWdlc1xceWFubmJmXFxjb21wb25lbnRzXFxwb3B1cC1mYWJcXHBvcHVwLWZhYi1tb2RhbFxccG9wdXAtZmFiLW1vZGFsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvcG9wdXAtZmFiL3BvcHVwLWZhYi1tb2RhbC9wb3B1cC1mYWItbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkNBQUE7VUFBQSxtQ0FBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxVQUFBO0VDQ0Y7RURDQTtJQUNFLFVBQUE7RUNDRjtBQUNGOztBRFBBO0VBQ0U7SUFDRSxVQUFBO0VDQ0Y7RURDQTtJQUNFLFVBQUE7RUNDRjtBQUNGOztBREVBO0VBQ0UscUJBQUE7QUNBRjs7QURHQTs7RUFFRSxZQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7QUNBRjs7QURFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNBSjs7QURDSTtFQUNFLGdCQUFBO0FDQ047O0FEQ0k7RUFDRSxzQkFBQTtFQUNBLFlBQUE7QUNDTjs7QURDSTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQ0NOOztBRENJO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDQ04iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy9wb3B1cC1mYWIvcG9wdXAtZmFiLW1vZGFsL3BvcHVwLWZhYi1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2xpZGUge1xyXG4gIGFuaW1hdGlvbjogZmFkZS1pbiAwLjhzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGUtaW4ge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6ICMwMGNjYjI7XHJcbn1cclxuXHJcbmlvbi1pY29uLFxyXG5kaXYge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaW9uLXNsaWRlcyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAuc2xpZGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBpbWcge1xyXG4gICAgICBtYXgtd2lkdGg6IDE1MHB4O1xyXG4gICAgfVxyXG4gICAgJi5zbGlkZS0xIHtcclxuICAgICAgYmFja2dyb3VuZDogZG9kZ2VyYmx1ZTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgJi5zbGlkZS0yIHtcclxuICAgICAgYmFja2dyb3VuZDogI2YyODEzMTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgJi5zbGlkZS0zIHtcclxuICAgICAgYmFja2dyb3VuZDogIzlmNWFmZDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpb24tc2xpZGUge1xuICBhbmltYXRpb246IGZhZGUtaW4gMC44cyBlYXNlLWluLW91dDtcbn1cblxuQGtleWZyYW1lcyBmYWRlLWluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICMwMGNjYjI7XG59XG5cbmlvbi1pY29uLFxuZGl2IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogMTAwJTtcbn1cbmlvbi1zbGlkZXMgLnNsaWRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5pb24tc2xpZGVzIC5zbGlkZSBpbWcge1xuICBtYXgtd2lkdGg6IDE1MHB4O1xufVxuaW9uLXNsaWRlcyAuc2xpZGUuc2xpZGUtMSB7XG4gIGJhY2tncm91bmQ6IGRvZGdlcmJsdWU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmlvbi1zbGlkZXMgLnNsaWRlLnNsaWRlLTIge1xuICBiYWNrZ3JvdW5kOiAjZjI4MTMxO1xuICBjb2xvcjogd2hpdGU7XG59XG5pb24tc2xpZGVzIC5zbGlkZS5zbGlkZS0zIHtcbiAgYmFja2dyb3VuZDogIzlmNWFmZDtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PopupFabModalPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-popup-fab-modal',
                templateUrl: './popup-fab-modal.page.html',
                styleUrls: ['./popup-fab-modal.page.scss'],
            }]
    }], function () { return [{ type: _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["ModalController"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/yannbf/components/popup-fab/popup-fab.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/yannbf/components/popup-fab/popup-fab.module.ts ***!
  \***********************************************************************/
/*! exports provided: PopupFabPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupFabPageModule", function() { return PopupFabPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _popup_fab_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popup-fab.page */ "./src/app/pages/yannbf/components/popup-fab/popup-fab.page.ts");
/* harmony import */ var _popup_fab_modal_popup_fab_modal_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popup-fab-modal/popup-fab-modal.module */ "./src/app/pages/yannbf/components/popup-fab/popup-fab-modal/popup-fab-modal.module.ts");









const routes = [
    {
        path: '',
        component: _popup_fab_page__WEBPACK_IMPORTED_MODULE_5__["PopupFabPage"]
    }
];
class PopupFabPageModule {
}
PopupFabPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PopupFabPageModule });
PopupFabPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PopupFabPageModule_Factory(t) { return new (t || PopupFabPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _popup_fab_modal_popup_fab_modal_module__WEBPACK_IMPORTED_MODULE_6__["PopupFabModalPageModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PopupFabPageModule, { declarations: [_popup_fab_page__WEBPACK_IMPORTED_MODULE_5__["PopupFabPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _popup_fab_modal_popup_fab_modal_module__WEBPACK_IMPORTED_MODULE_6__["PopupFabModalPageModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupFabPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                    _popup_fab_modal_popup_fab_modal_module__WEBPACK_IMPORTED_MODULE_6__["PopupFabModalPageModule"]
                ],
                declarations: [_popup_fab_page__WEBPACK_IMPORTED_MODULE_5__["PopupFabPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/yannbf/components/popup-fab/popup-fab.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/yannbf/components/popup-fab/popup-fab.page.ts ***!
  \*********************************************************************/
/*! exports provided: PopupFabPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupFabPage", function() { return PopupFabPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _popup_fab_modal_popup_fab_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup-fab-modal/popup-fab-modal.page */ "./src/app/pages/yannbf/components/popup-fab/popup-fab-modal/popup-fab-modal.page.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







const _c0 = function (a0, a1) { return { "expand": a0, "contract": a1 }; };
class PopupFabPage {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.showIcon = true;
        this.preload = true;
    }
    ngOnInit() {
    }
    expand() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.expanded = true;
            this.contracted = !this.expanded;
            this.showIcon = false;
            // setTimeout(() => {
            //   const modal = this.modalCtrl.create('PopupFabModalPage');
            //   modal.onDidDismiss(data => {
            //     this.expanded = false;
            //     this.contracted = !this.expanded;
            //     setTimeout(() => this.showIcon = true, 330);
            //   });
            //   modal.present();
            // }, 200);
            setTimeout(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const modal = yield this.modalCtrl.create({
                    component: _popup_fab_modal_popup_fab_modal_page__WEBPACK_IMPORTED_MODULE_3__["PopupFabModalPage"]
                });
                yield modal.present();
                const { data } = yield modal.onWillDismiss();
                this.expanded = false;
                this.contracted = !this.expanded;
                setTimeout(() => this.showIcon = true, 330);
            }), 200);
        });
    }
}
PopupFabPage.ɵfac = function PopupFabPage_Factory(t) { return new (t || PopupFabPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"])); };
PopupFabPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PopupFabPage, selectors: [["app-popup-fab"]], decls: 17, vars: 5, consts: [["slot", "start"], ["defaultHref", "/"], [1, "ion-padding"], ["src", "assets/yannbf/img/lists/wishlist-4.jpg"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed", 3, "ngClass"], ["size", "small", 3, "click"], ["name", "ios-arrow-forward", 3, "hidden"]], template: function PopupFabPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Popup fab");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Let's take a look");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-fab", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-fab-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PopupFabPage_Template_ion_fab_button_click_15_listener() { return ctx.expand(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "ion-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c0, ctx.expanded, ctx.contracted));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.showIcon);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFab"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"]], styles: ["ion-fab-button[_ngcontent-%COMP%] {\n  --background: #00ccb2;\n}\n\n.expand[_ngcontent-%COMP%] {\n  -webkit-animation: expand 0.5s cubic-bezier(0.66, 0.35, 0.96, 0.38) forwards;\n          animation: expand 0.5s cubic-bezier(0.66, 0.35, 0.96, 0.38) forwards;\n}\n\n.contract[_ngcontent-%COMP%] {\n  -webkit-animation: contract 0.4s cubic-bezier(0.75, 0.8, 0.25, 0) forwards;\n          animation: contract 0.4s cubic-bezier(0.75, 0.8, 0.25, 0) forwards;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: #82e850;\n}\n\n@-webkit-keyframes contract {\n  0% {\n    transform: scale(100);\n    border-radius: 100%;\n    margin: 0;\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes contract {\n  0% {\n    transform: scale(100);\n    border-radius: 100%;\n    margin: 0;\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@-webkit-keyframes expand {\n  50% {\n    transform: scale(100);\n  }\n  100% {\n    transform: scale(100);\n    border-radius: 100%;\n    margin: 0;\n  }\n}\n\n@keyframes expand {\n  50% {\n    transform: scale(100);\n  }\n  100% {\n    transform: scale(100);\n    border-radius: 100%;\n    margin: 0;\n  }\n}\n\nion-card[_ngcontent-%COMP%] {\n  position: relative;\n  height: 80vh;\n  background: white;\n}\n\nion-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  left: 5%;\n  bottom: 3%;\n  position: absolute;\n}\n\nion-icon[_ngcontent-%COMP%] {\n  transition: display 1s ease-in;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvcG9wdXAtZmFiL0M6XFxVc2Vyc1xcVmFnbmVyIFNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZWN0c1xcX015XFxhd2Vzb21lLWNvbXBvbmVudHMtaW9uaWMvc3JjXFxhcHBcXHBhZ2VzXFx5YW5uYmZcXGNvbXBvbmVudHNcXHBvcHVwLWZhYlxccG9wdXAtZmFiLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvcG9wdXAtZmFiL3BvcHVwLWZhYi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsNEVBQUE7VUFBQSxvRUFBQTtBQ0NGOztBREVBO0VBQ0UsMEVBQUE7VUFBQSxrRUFBQTtBQ0NGOztBREVBO0VBQ0EscUJBQUE7QUNDQTs7QURFQTtFQUNFO0lBQ0UscUJBQUE7SUFDQSxtQkFBQTtJQUNBLFNBQUE7RUNDRjtFRENBO0lBQ0UsbUJBQUE7RUNDRjtBQUNGOztBRFRBO0VBQ0U7SUFDRSxxQkFBQTtJQUNBLG1CQUFBO0lBQ0EsU0FBQTtFQ0NGO0VEQ0E7SUFDRSxtQkFBQTtFQ0NGO0FBQ0Y7O0FERUE7RUFDRTtJQUNFLHFCQUFBO0VDQUY7RURFQTtJQUNFLHFCQUFBO0lBQ0EsbUJBQUE7SUFDQSxTQUFBO0VDQUY7QUFDRjs7QURSQTtFQUNFO0lBQ0UscUJBQUE7RUNBRjtFREVBO0lBQ0UscUJBQUE7SUFDQSxtQkFBQTtJQUNBLFNBQUE7RUNBRjtBQUNGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNERjs7QURHRTtFQUNFLFFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNESjs7QURLQTtFQUNFLDhCQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy9wb3B1cC1mYWIvcG9wdXAtZmFiLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1mYWItYnV0dG9uIHtcclxuICAtLWJhY2tncm91bmQ6ICMwMGNjYjI7XHJcbn1cclxuXHJcbi5leHBhbmQge1xyXG4gIGFuaW1hdGlvbjogZXhwYW5kIDAuNXMgY3ViaWMtYmV6aWVyKDAuNjYsIDAuMzUsIDAuOTYsIDAuMzgpIGZvcndhcmRzO1xyXG59XHJcblxyXG4uY29udHJhY3Qge1xyXG4gIGFuaW1hdGlvbjogY29udHJhY3QgMC40cyBjdWJpYy1iZXppZXIoMC43NSwgMC44LCAwLjI1LCAwKSBmb3J3YXJkcztcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4tLWJhY2tncm91bmQ6ICM4MmU4NTA7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgY29udHJhY3Qge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMTAwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZXhwYW5kIHtcclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxMDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMTAwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogODB2aDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuXHJcbiAgaDQge1xyXG4gICAgbGVmdDogNSU7XHJcbiAgICBib3R0b206IDMlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWljb24ge1xyXG4gIHRyYW5zaXRpb246IGRpc3BsYXkgMXMgZWFzZS1pbjtcclxufVxyXG4iLCJpb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzAwY2NiMjtcbn1cblxuLmV4cGFuZCB7XG4gIGFuaW1hdGlvbjogZXhwYW5kIDAuNXMgY3ViaWMtYmV6aWVyKDAuNjYsIDAuMzUsIDAuOTYsIDAuMzgpIGZvcndhcmRzO1xufVxuXG4uY29udHJhY3Qge1xuICBhbmltYXRpb246IGNvbnRyYWN0IDAuNHMgY3ViaWMtYmV6aWVyKDAuNzUsIDAuOCwgMC4yNSwgMCkgZm9yd2FyZHM7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjODJlODUwO1xufVxuXG5Aa2V5ZnJhbWVzIGNvbnRyYWN0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMTAwKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGV4cGFuZCB7XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxMDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMTAwKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuaW9uLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogODB2aDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5pb24tY2FyZCBoNCB7XG4gIGxlZnQ6IDUlO1xuICBib3R0b206IDMlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbmlvbi1pY29uIHtcbiAgdHJhbnNpdGlvbjogZGlzcGxheSAxcyBlYXNlLWluO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PopupFabPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-popup-fab',
                templateUrl: './popup-fab.page.html',
                styleUrls: ['./popup-fab.page.scss'],
            }]
    }], function () { return [{ type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-yannbf-components-popup-fab-popup-fab-module-es2015.js.map