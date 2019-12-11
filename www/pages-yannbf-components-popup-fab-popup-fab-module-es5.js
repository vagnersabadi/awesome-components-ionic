(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-popup-fab-popup-fab-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/yannbf/components/popup-fab/popup-fab-modal/popup-fab-modal.page.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/yannbf/components/popup-fab/popup-fab-modal/popup-fab-modal.page.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"dismiss()\" fill=\"clear\">\r\n        <ion-icon name=\"close\" slot=\"icon-only\" color=\"primary\" ></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Popup fab modal</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  \r\n  \r\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\r\n      <ion-slide>\r\n        <div class=\"slide slide-1\">\r\n          <div>\r\n            <h1 class=\"slideTitle\">Slide 1</h1>\r\n          </div>\r\n        </div>\r\n      </ion-slide>\r\n      <ion-slide>\r\n        <div class=\"slide slide-2\">\r\n          <div>\r\n            <h1 class=\"slideTitle\">Slide 2</h1>\r\n          </div>\r\n        </div>\r\n      </ion-slide>\r\n  \r\n      <ion-slide>\r\n        <div class=\"slide slide-3\">\r\n          <div>\r\n            <h1 class=\"slideTitle\">Slide 3</h1>\r\n          </div>\r\n        </div>\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/yannbf/components/popup-fab/popup-fab.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/yannbf/components/popup-fab/popup-fab.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Popup fab</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card class=\"ion-padding\">\r\n    <img src=\"assets/yannbf/img/lists/wishlist-4.jpg\">\r\n    <ion-label>\r\n      <h2>\r\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\r\n        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n        consequat.\r\n      </h2>\r\n      <h4>Let's take a look</h4>\r\n    </ion-label>\r\n\r\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" [ngClass]=\"{ 'expand' : expanded, 'contract': contracted }\" >\r\n        <ion-fab-button (click)=\"expand()\" size=\"small\">\r\n            <ion-icon [hidden]=\"!showIcon\" name=\"ios-arrow-forward\"></ion-icon>\r\n        </ion-fab-button>\r\n      </ion-fab>\r\n  </ion-card>\r\n  \r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/yannbf/components/popup-fab/popup-fab-modal/popup-fab-modal.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/popup-fab/popup-fab-modal/popup-fab-modal.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: PopupFabModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupFabModalPageModule", function() { return PopupFabModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _popup_fab_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popup-fab-modal.page */ "./src/app/pages/yannbf/components/popup-fab/popup-fab-modal/popup-fab-modal.page.ts");






var PopupFabModalPageModule = /** @class */ (function () {
    function PopupFabModalPageModule() {
    }
    PopupFabModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            ],
            declarations: [_popup_fab_modal_page__WEBPACK_IMPORTED_MODULE_5__["PopupFabModalPage"]],
            entryComponents: [_popup_fab_modal_page__WEBPACK_IMPORTED_MODULE_5__["PopupFabModalPage"]]
        })
    ], PopupFabModalPageModule);
    return PopupFabModalPageModule;
}());



/***/ }),

/***/ "./src/app/pages/yannbf/components/popup-fab/popup-fab-modal/popup-fab-modal.page.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/popup-fab/popup-fab-modal/popup-fab-modal.page.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-slide {\n  -webkit-animation: fade-in 0.8s ease-in-out;\n          animation: fade-in 0.8s ease-in-out;\n}\n\n@-webkit-keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\nion-content {\n  --background: #00ccb2;\n}\n\nion-icon,\ndiv {\n  color: white;\n  font-weight: bold;\n}\n\nion-slides {\n  height: 100%;\n}\n\nion-slides .slide {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 20px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\nion-slides .slide img {\n  max-width: 150px;\n}\n\nion-slides .slide.slide-1 {\n  background: dodgerblue;\n  color: white;\n}\n\nion-slides .slide.slide-2 {\n  background: #f28131;\n  color: white;\n}\n\nion-slides .slide.slide-3 {\n  background: #9f5afd;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvcG9wdXAtZmFiL3BvcHVwLWZhYi1tb2RhbC9DOlxcVXNlcnNcXHNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZXRvc1xcX2lvbmljXFxpb25pYzQtY29tcG9uZW50cy9zcmNcXGFwcFxccGFnZXNcXHlhbm5iZlxcY29tcG9uZW50c1xccG9wdXAtZmFiXFxwb3B1cC1mYWItbW9kYWxcXHBvcHVwLWZhYi1tb2RhbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL3BvcHVwLWZhYi9wb3B1cC1mYWItbW9kYWwvcG9wdXAtZmFiLW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJDQUFBO1VBQUEsbUNBQUE7QUNDRjs7QURFQTtFQUNFO0lBQ0UsVUFBQTtFQ0NGO0VEQ0E7SUFDRSxVQUFBO0VDQ0Y7QUFDRjs7QURQQTtFQUNFO0lBQ0UsVUFBQTtFQ0NGO0VEQ0E7SUFDRSxVQUFBO0VDQ0Y7QUFDRjs7QURFQTtFQUNFLHFCQUFBO0FDQUY7O0FER0E7O0VBRUUsWUFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FERUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0FKOztBRENJO0VBQ0UsZ0JBQUE7QUNDTjs7QURDSTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtBQ0NOOztBRENJO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDQ047O0FEQ0k7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUNDTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL3BvcHVwLWZhYi9wb3B1cC1mYWItbW9kYWwvcG9wdXAtZmFiLW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zbGlkZSB7XHJcbiAgYW5pbWF0aW9uOiBmYWRlLWluIDAuOHMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZS1pbiB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogIzAwY2NiMjtcclxufVxyXG5cclxuaW9uLWljb24sXHJcbmRpdiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5pb24tc2xpZGVzIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIC5zbGlkZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGltZyB7XHJcbiAgICAgIG1heC13aWR0aDogMTUwcHg7XHJcbiAgICB9XHJcbiAgICAmLnNsaWRlLTEge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBkb2RnZXJibHVlO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAmLnNsaWRlLTIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZjI4MTMxO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAmLnNsaWRlLTMge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjOWY1YWZkO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImlvbi1zbGlkZSB7XG4gIGFuaW1hdGlvbjogZmFkZS1pbiAwLjhzIGVhc2UtaW4tb3V0O1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGUtaW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogIzAwY2NiMjtcbn1cblxuaW9uLWljb24sXG5kaXYge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuaW9uLXNsaWRlcyAuc2xpZGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbmlvbi1zbGlkZXMgLnNsaWRlIGltZyB7XG4gIG1heC13aWR0aDogMTUwcHg7XG59XG5pb24tc2xpZGVzIC5zbGlkZS5zbGlkZS0xIHtcbiAgYmFja2dyb3VuZDogZG9kZ2VyYmx1ZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuaW9uLXNsaWRlcyAuc2xpZGUuc2xpZGUtMiB7XG4gIGJhY2tncm91bmQ6ICNmMjgxMzE7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmlvbi1zbGlkZXMgLnNsaWRlLnNsaWRlLTMge1xuICBiYWNrZ3JvdW5kOiAjOWY1YWZkO1xuICBjb2xvcjogd2hpdGU7XG59Il19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var PopupFabModalPage = /** @class */ (function () {
    function PopupFabModalPage(modaCtrl) {
        this.modaCtrl = modaCtrl;
        this.slideOpts = {
            effect: 'flip',
        };
    }
    PopupFabModalPage.prototype.ngOnInit = function () {
    };
    PopupFabModalPage.prototype.dismiss = function () {
        this.modaCtrl.dismiss();
    };
    PopupFabModalPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"] }
    ]; };
    PopupFabModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-popup-fab-modal',
            template: __webpack_require__(/*! raw-loader!./popup-fab-modal.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/yannbf/components/popup-fab/popup-fab-modal/popup-fab-modal.page.html"),
            styles: [__webpack_require__(/*! ./popup-fab-modal.page.scss */ "./src/app/pages/yannbf/components/popup-fab/popup-fab-modal/popup-fab-modal.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]])
    ], PopupFabModalPage);
    return PopupFabModalPage;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _popup_fab_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popup-fab.page */ "./src/app/pages/yannbf/components/popup-fab/popup-fab.page.ts");
/* harmony import */ var _popup_fab_modal_popup_fab_modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./popup-fab-modal/popup-fab-modal.module */ "./src/app/pages/yannbf/components/popup-fab/popup-fab-modal/popup-fab-modal.module.ts");








var routes = [
    {
        path: '',
        component: _popup_fab_page__WEBPACK_IMPORTED_MODULE_6__["PopupFabPage"]
    }
];
var PopupFabPageModule = /** @class */ (function () {
    function PopupFabPageModule() {
    }
    PopupFabPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _popup_fab_modal_popup_fab_modal_module__WEBPACK_IMPORTED_MODULE_7__["PopupFabModalPageModule"]
            ],
            declarations: [_popup_fab_page__WEBPACK_IMPORTED_MODULE_6__["PopupFabPage"]]
        })
    ], PopupFabPageModule);
    return PopupFabPageModule;
}());



/***/ }),

/***/ "./src/app/pages/yannbf/components/popup-fab/popup-fab.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/yannbf/components/popup-fab/popup-fab.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-fab-button {\n  --background: #00ccb2;\n}\n\n.expand {\n  -webkit-animation: expand 0.5s cubic-bezier(0.66, 0.35, 0.96, 0.38) forwards;\n          animation: expand 0.5s cubic-bezier(0.66, 0.35, 0.96, 0.38) forwards;\n}\n\n.contract {\n  -webkit-animation: contract 0.4s cubic-bezier(0.75, 0.8, 0.25, 0) forwards;\n          animation: contract 0.4s cubic-bezier(0.75, 0.8, 0.25, 0) forwards;\n}\n\nion-content {\n  --background: #82e850;\n}\n\n@-webkit-keyframes contract {\n  0% {\n    -webkit-transform: scale(100);\n            transform: scale(100);\n    border-radius: 100%;\n    margin: 0;\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n\n@keyframes contract {\n  0% {\n    -webkit-transform: scale(100);\n            transform: scale(100);\n    border-radius: 100%;\n    margin: 0;\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n\n@-webkit-keyframes expand {\n  50% {\n    -webkit-transform: scale(100);\n            transform: scale(100);\n  }\n  100% {\n    -webkit-transform: scale(100);\n            transform: scale(100);\n    border-radius: 100%;\n    margin: 0;\n  }\n}\n\n@keyframes expand {\n  50% {\n    -webkit-transform: scale(100);\n            transform: scale(100);\n  }\n  100% {\n    -webkit-transform: scale(100);\n            transform: scale(100);\n    border-radius: 100%;\n    margin: 0;\n  }\n}\n\nion-card {\n  position: relative;\n  height: 80vh;\n  background: white;\n}\n\nion-card h4 {\n  left: 5%;\n  bottom: 3%;\n  position: absolute;\n}\n\nion-icon {\n  -webkit-transition: display 1s ease-in;\n  transition: display 1s ease-in;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvcG9wdXAtZmFiL0M6XFxVc2Vyc1xcc2FiYWRpXFxEb2N1bWVudHNcXFByb2pldG9zXFxfaW9uaWNcXGlvbmljNC1jb21wb25lbnRzL3NyY1xcYXBwXFxwYWdlc1xceWFubmJmXFxjb21wb25lbnRzXFxwb3B1cC1mYWJcXHBvcHVwLWZhYi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL3BvcHVwLWZhYi9wb3B1cC1mYWIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLDRFQUFBO1VBQUEsb0VBQUE7QUNDRjs7QURFQTtFQUNFLDBFQUFBO1VBQUEsa0VBQUE7QUNDRjs7QURFQTtFQUNBLHFCQUFBO0FDQ0E7O0FERUE7RUFDRTtJQUNFLDZCQUFBO1lBQUEscUJBQUE7SUFDQSxtQkFBQTtJQUNBLFNBQUE7RUNDRjtFRENBO0lBQ0UsMkJBQUE7WUFBQSxtQkFBQTtFQ0NGO0FBQ0Y7O0FEVEE7RUFDRTtJQUNFLDZCQUFBO1lBQUEscUJBQUE7SUFDQSxtQkFBQTtJQUNBLFNBQUE7RUNDRjtFRENBO0lBQ0UsMkJBQUE7WUFBQSxtQkFBQTtFQ0NGO0FBQ0Y7O0FERUE7RUFDRTtJQUNFLDZCQUFBO1lBQUEscUJBQUE7RUNBRjtFREVBO0lBQ0UsNkJBQUE7WUFBQSxxQkFBQTtJQUNBLG1CQUFBO0lBQ0EsU0FBQTtFQ0FGO0FBQ0Y7O0FEUkE7RUFDRTtJQUNFLDZCQUFBO1lBQUEscUJBQUE7RUNBRjtFREVBO0lBQ0UsNkJBQUE7WUFBQSxxQkFBQTtJQUNBLG1CQUFBO0lBQ0EsU0FBQTtFQ0FGO0FBQ0Y7O0FER0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0RGOztBREdFO0VBQ0UsUUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0RKOztBREtBO0VBQ0Usc0NBQUE7RUFBQSw4QkFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvcG9wdXAtZmFiL3BvcHVwLWZhYi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZmFiLWJ1dHRvbiB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMDBjY2IyO1xyXG59XHJcblxyXG4uZXhwYW5kIHtcclxuICBhbmltYXRpb246IGV4cGFuZCAwLjVzIGN1YmljLWJlemllcigwLjY2LCAwLjM1LCAwLjk2LCAwLjM4KSBmb3J3YXJkcztcclxufVxyXG5cclxuLmNvbnRyYWN0IHtcclxuICBhbmltYXRpb246IGNvbnRyYWN0IDAuNHMgY3ViaWMtYmV6aWVyKDAuNzUsIDAuOCwgMC4yNSwgMCkgZm9yd2FyZHM7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuLS1iYWNrZ3JvdW5kOiAjODJlODUwO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGNvbnRyYWN0IHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEwMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGV4cGFuZCB7XHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMTAwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEwMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDgwdmg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcblxyXG4gIGg0IHtcclxuICAgIGxlZnQ6IDUlO1xyXG4gICAgYm90dG9tOiAzJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICB0cmFuc2l0aW9uOiBkaXNwbGF5IDFzIGVhc2UtaW47XHJcbn1cclxuIiwiaW9uLWZhYi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICMwMGNjYjI7XG59XG5cbi5leHBhbmQge1xuICBhbmltYXRpb246IGV4cGFuZCAwLjVzIGN1YmljLWJlemllcigwLjY2LCAwLjM1LCAwLjk2LCAwLjM4KSBmb3J3YXJkcztcbn1cblxuLmNvbnRyYWN0IHtcbiAgYW5pbWF0aW9uOiBjb250cmFjdCAwLjRzIGN1YmljLWJlemllcigwLjc1LCAwLjgsIDAuMjUsIDApIGZvcndhcmRzO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogIzgyZTg1MDtcbn1cblxuQGtleWZyYW1lcyBjb250cmFjdCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEwMCk7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuQGtleWZyYW1lcyBleHBhbmQge1xuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMTAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEwMCk7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cbmlvbi1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDgwdmg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuaW9uLWNhcmQgaDQge1xuICBsZWZ0OiA1JTtcbiAgYm90dG9tOiAzJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG5pb24taWNvbiB7XG4gIHRyYW5zaXRpb246IGRpc3BsYXkgMXMgZWFzZS1pbjtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _popup_fab_modal_popup_fab_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup-fab-modal/popup-fab-modal.page */ "./src/app/pages/yannbf/components/popup-fab/popup-fab-modal/popup-fab-modal.page.ts");




var PopupFabPage = /** @class */ (function () {
    function PopupFabPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.showIcon = true;
        this.preload = true;
    }
    PopupFabPage.prototype.ngOnInit = function () {
    };
    PopupFabPage.prototype.expand = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
                setTimeout(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var modal, data;
                    var _this = this;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.modalCtrl.create({
                                    component: _popup_fab_modal_popup_fab_modal_page__WEBPACK_IMPORTED_MODULE_3__["PopupFabModalPage"]
                                })];
                            case 1:
                                modal = _a.sent();
                                return [4 /*yield*/, modal.present()];
                            case 2:
                                _a.sent();
                                return [4 /*yield*/, modal.onWillDismiss()];
                            case 3:
                                data = (_a.sent()).data;
                                this.expanded = false;
                                this.contracted = !this.expanded;
                                setTimeout(function () { return _this.showIcon = true; }, 330);
                                return [2 /*return*/];
                        }
                    });
                }); }, 200);
                return [2 /*return*/];
            });
        });
    };
    PopupFabPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    PopupFabPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-popup-fab',
            template: __webpack_require__(/*! raw-loader!./popup-fab.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/yannbf/components/popup-fab/popup-fab.page.html"),
            styles: [__webpack_require__(/*! ./popup-fab.page.scss */ "./src/app/pages/yannbf/components/popup-fab/popup-fab.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], PopupFabPage);
    return PopupFabPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-yannbf-components-popup-fab-popup-fab-module-es5.js.map