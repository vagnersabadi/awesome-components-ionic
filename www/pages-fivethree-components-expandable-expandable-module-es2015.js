(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-fivethree-components-expandable-expandable-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/fivethree/components/expandable/expandable.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/fivethree/components/expandable/expandable.page.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Expandable</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-item-divider>\r\n    <ion-label>Basic Example</ion-label>\r\n  </ion-item-divider>\r\n  <div class=\"ion-text-center\">\r\n    <ion-button [disabled]=\"ex.isOpen\" (click)=\"ex.open()\">\r\n      Open\r\n    </ion-button>\r\n    <ion-button [disabled]=\"!ex.isOpen\" (click)=\"ex.close()\">\r\n      Close\r\n    </ion-button>\r\n  </div>\r\n\r\n  <fiv-expandable #ex>\r\n    <fiv-ripple [hover]=\"true\" header (fivClick)=\"ex.toggle()\">\r\n      <ion-item [lines]=\"'inset'\">\r\n        <ion-label>Expandable Header</ion-label>\r\n        <fiv-expandable-indicator></fiv-expandable-indicator>\r\n      </ion-item>\r\n    </fiv-ripple>\r\n    <div content>\r\n      <span class=\"content\" [fivCenter]>Expandable Content (height depends on contents size)</span>\r\n    </div>\r\n  </fiv-expandable>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/fivethree/components/expandable/expandable.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/fivethree/components/expandable/expandable.module.ts ***!
  \****************************************************************************/
/*! exports provided: ExpandablePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandablePageModule", function() { return ExpandablePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _expandable_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./expandable.page */ "./src/app/pages/fivethree/components/expandable/expandable.page.ts");
/* harmony import */ var _fivethree_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fivethree/core */ "./node_modules/@fivethree/core/fesm2015/fivethree-core.js");








const routes = [
    {
        path: '',
        component: _expandable_page__WEBPACK_IMPORTED_MODULE_6__["ExpandablePage"]
    }
];
let ExpandablePageModule = class ExpandablePageModule {
};
ExpandablePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _fivethree_core__WEBPACK_IMPORTED_MODULE_7__["FivExpandableModule"],
            _fivethree_core__WEBPACK_IMPORTED_MODULE_7__["FivRippleModule"],
            _fivethree_core__WEBPACK_IMPORTED_MODULE_7__["FivCenterModule"]
        ],
        declarations: [_expandable_page__WEBPACK_IMPORTED_MODULE_6__["ExpandablePage"]]
    })
], ExpandablePageModule);



/***/ }),

/***/ "./src/app/pages/fivethree/components/expandable/expandable.page.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/fivethree/components/expandable/expandable.page.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div[content] {\n  min-height: 200px;\n  background: var(--ion-color-light);\n  position: relative;\n}\n\nion-item {\n  border: 1px solid var(--ion-color-light);\n  --inner-border-width: 0px;\n}\n\nfiv-ripple {\n  margin-top: 16px;\n}\n\n.content {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZml2ZXRocmVlL2NvbXBvbmVudHMvZXhwYW5kYWJsZS9DOlxcVXNlcnNcXHNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZXRvc1xcX2lvbmljXFxpb25pYzQtY29tcG9uZW50cy9zcmNcXGFwcFxccGFnZXNcXGZpdmV0aHJlZVxcY29tcG9uZW50c1xcZXhwYW5kYWJsZVxcZXhwYW5kYWJsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2ZpdmV0aHJlZS9jb21wb25lbnRzL2V4cGFuZGFibGUvZXhwYW5kYWJsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFRTtFQUNFLHdDQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFRTtFQUNFLGdCQUFBO0FDQ0o7O0FERUU7RUFDRSwrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZml2ZXRocmVlL2NvbXBvbmVudHMvZXhwYW5kYWJsZS9leHBhbmRhYmxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdltjb250ZW50XSB7XHJcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1pdGVtIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMHB4O1xyXG4gIH1cclxuICBcclxuICBmaXYtcmlwcGxlIHtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250ZW50IHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgfVxyXG4gICIsImRpdltjb250ZW50XSB7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlvbi1pdGVtIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweDtcbn1cblxuZml2LXJpcHBsZSB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5jb250ZW50IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/fivethree/components/expandable/expandable.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/fivethree/components/expandable/expandable.page.ts ***!
  \**************************************************************************/
/*! exports provided: ExpandablePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandablePage", function() { return ExpandablePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ExpandablePage = class ExpandablePage {
    constructor() { }
    ngOnInit() {
    }
};
ExpandablePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-expandable',
        template: __webpack_require__(/*! raw-loader!./expandable.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/fivethree/components/expandable/expandable.page.html"),
        styles: [__webpack_require__(/*! ./expandable.page.scss */ "./src/app/pages/fivethree/components/expandable/expandable.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ExpandablePage);



/***/ })

}]);
//# sourceMappingURL=pages-fivethree-components-expandable-expandable-module-es2015.js.map