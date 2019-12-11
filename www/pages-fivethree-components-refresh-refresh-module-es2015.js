(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-fivethree-components-refresh-refresh-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/fivethree/components/refresh/refresh.page.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/fivethree/components/refresh/refresh.page.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Refresh</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<fiv-loading-content #content [spinColor]=\"'primary'\" [hintText]=\"'Update'\">\r\n  <div class=\"btns-content\">\r\n\r\n\r\n    <ion-button (click)=\"content.showHint()\">\r\n      Show hint\r\n    </ion-button>\r\n    <ion-button (click)=\"content.refresh()\">\r\n      Refresh\r\n    </ion-button>\r\n    <ion-button (click)=\"content.completeRefresh()\">\r\n      complete\r\n    </ion-button>\r\n\r\n  </div>\r\n\r\n</fiv-loading-content>"

/***/ }),

/***/ "./src/app/pages/fivethree/components/refresh/refresh.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/fivethree/components/refresh/refresh.module.ts ***!
  \**********************************************************************/
/*! exports provided: RefreshPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefreshPageModule", function() { return RefreshPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _refresh_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./refresh.page */ "./src/app/pages/fivethree/components/refresh/refresh.page.ts");
/* harmony import */ var _fivethree_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fivethree/core */ "./node_modules/@fivethree/core/fesm2015/fivethree-core.js");








const routes = [
    {
        path: '',
        component: _refresh_page__WEBPACK_IMPORTED_MODULE_6__["RefreshPage"]
    }
];
let RefreshPageModule = class RefreshPageModule {
};
RefreshPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _fivethree_core__WEBPACK_IMPORTED_MODULE_7__["FivLoadingContentModule"]
        ],
        declarations: [_refresh_page__WEBPACK_IMPORTED_MODULE_6__["RefreshPage"]]
    })
], RefreshPageModule);



/***/ }),

/***/ "./src/app/pages/fivethree/components/refresh/refresh.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/fivethree/components/refresh/refresh.page.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btns-content {\n  margin-top: 56px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZml2ZXRocmVlL2NvbXBvbmVudHMvcmVmcmVzaC9DOlxcVXNlcnNcXHNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZXRvc1xcX2lvbmljXFxpb25pYzQtY29tcG9uZW50cy9zcmNcXGFwcFxccGFnZXNcXGZpdmV0aHJlZVxcY29tcG9uZW50c1xccmVmcmVzaFxccmVmcmVzaC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2ZpdmV0aHJlZS9jb21wb25lbnRzL3JlZnJlc2gvcmVmcmVzaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9maXZldGhyZWUvY29tcG9uZW50cy9yZWZyZXNoL3JlZnJlc2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bnMtY29udGVudCB7XHJcbiAgbWFyZ2luLXRvcDogNTZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIiwiLmJ0bnMtY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDU2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/fivethree/components/refresh/refresh.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/fivethree/components/refresh/refresh.page.ts ***!
  \********************************************************************/
/*! exports provided: RefreshPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefreshPage", function() { return RefreshPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RefreshPage = class RefreshPage {
    constructor() { }
    ngOnInit() {
    }
};
RefreshPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-refresh',
        template: __webpack_require__(/*! raw-loader!./refresh.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/fivethree/components/refresh/refresh.page.html"),
        styles: [__webpack_require__(/*! ./refresh.page.scss */ "./src/app/pages/fivethree/components/refresh/refresh.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], RefreshPage);



/***/ })

}]);
//# sourceMappingURL=pages-fivethree-components-refresh-refresh-module-es2015.js.map