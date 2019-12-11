(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-fivethree-components-dialog-dialog-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/fivethree/components/dialog/dialog.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/fivethree/components/dialog/dialog.page.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Dialog</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-label>Backdrop</ion-label>\r\n      <ion-toggle slot=\"end\" [(ngModel)]=\"backdrop\"></ion-toggle>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Pull Enabled</ion-label>\r\n      <ion-toggle slot=\"end\" [(ngModel)]=\"pull\"></ion-toggle>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Vertical Alignment</ion-label>\r\n      <ion-select slot=\"end\" [(ngModel)]=\"verticalAlign\">\r\n        <ion-select-option value=\"top\">top</ion-select-option>\r\n        <ion-select-option value=\"center\">center</ion-select-option>\r\n        <ion-select-option value=\"bottom\">bottom</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Horizontal Alignment</ion-label>\r\n      <ion-select slot=\"end\" [(ngModel)]=\"horizontalAlign\">\r\n        <ion-select-option value=\"left\">left</ion-select-option>\r\n        <ion-select-option value=\"middle\">middle</ion-select-option>\r\n        <ion-select-option value=\"right\">right</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Shape</ion-label>\r\n      <ion-select slot=\"end\" [(ngModel)]=\"shape\">\r\n        <ion-select-option value=\"card\">card</ion-select-option>\r\n        <ion-select-option value=\"fill\">fill</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>Duration</ion-label>\r\n      <ion-input [(ngModel)]=\"duration\" type=\"number\"></ion-input>\r\n    </ion-item>\r\n    <div class=\"ion-text-center\">\r\n\r\n      <ion-button (click)=\"dialog.open()\">\r\n        Show Dialog\r\n      </ion-button>\r\n    </div>\r\n\r\n  </ion-list>\r\n\r\n\r\n\r\n</ion-content>\r\n<fiv-dialog (fivClose)=\"close()\" [pullEnabled]=\"pull\" (fivDurationOver)=\"dialog.close()\" [inDuration]=\"inDuration\"\r\n  [outDuration]=\"outDuration\" #dialog [duration]=\"duration\" [shape]=\"shape\" [horizontalAlign]=\"horizontalAlign\"\r\n  [verticalAlign]=\"verticalAlign\" [backdrop]=\"backdrop\">\r\n\r\n  <ion-card-header>\r\n    <ion-card-subtitle>Awesome Subtitle</ion-card-subtitle>\r\n    <ion-card-title>{{'Awesome Title' | uppercase }}</ion-card-title>\r\n  </ion-card-header>\r\n  <ion-card-content>\r\n    <p>The content for this dialog</p>\r\n  </ion-card-content>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"dialog.close()\">\r\n        Cancel\r\n      </ion-button>\r\n      <ion-button color=\"primary\">\r\n        Do Action\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</fiv-dialog>"

/***/ }),

/***/ "./src/app/pages/fivethree/components/dialog/dialog.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/fivethree/components/dialog/dialog.module.ts ***!
  \********************************************************************/
/*! exports provided: DialogPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogPageModule", function() { return DialogPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dialog_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialog.page */ "./src/app/pages/fivethree/components/dialog/dialog.page.ts");
/* harmony import */ var _fivethree_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fivethree/core */ "./node_modules/@fivethree/core/fesm5/fivethree-core.js");








var routes = [
    {
        path: '',
        component: _dialog_page__WEBPACK_IMPORTED_MODULE_6__["DialogPage"]
    }
];
var DialogPageModule = /** @class */ (function () {
    function DialogPageModule() {
    }
    DialogPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _fivethree_core__WEBPACK_IMPORTED_MODULE_7__["FivDialogModule"]
            ],
            declarations: [_dialog_page__WEBPACK_IMPORTED_MODULE_6__["DialogPage"]]
        })
    ], DialogPageModule);
    return DialogPageModule;
}());



/***/ }),

/***/ "./src/app/pages/fivethree/components/dialog/dialog.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/fivethree/components/dialog/dialog.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpdmV0aHJlZS9jb21wb25lbnRzL2RpYWxvZy9kaWFsb2cucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/fivethree/components/dialog/dialog.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/fivethree/components/dialog/dialog.page.ts ***!
  \******************************************************************/
/*! exports provided: DialogPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogPage", function() { return DialogPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fivethree_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fivethree/core */ "./node_modules/@fivethree/core/fesm5/fivethree-core.js");



var DialogPage = /** @class */ (function () {
    function DialogPage() {
        this.backdrop = true;
        this.pull = true;
        this.verticalAlign = 'top';
        this.horizontalAlign = 'left';
        this.shape = 'card';
        this.duration = 3600;
        this.inDuration = '220';
        this.outDuration = '180';
    }
    DialogPage.prototype.ngOnInit = function () { };
    DialogPage.prototype.close = function () { };
    DialogPage.prototype.over = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dialog', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _fivethree_core__WEBPACK_IMPORTED_MODULE_2__["FivDialog"])
    ], DialogPage.prototype, "dialog", void 0);
    DialogPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__(/*! raw-loader!./dialog.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/fivethree/components/dialog/dialog.page.html"),
            styles: [__webpack_require__(/*! ./dialog.page.scss */ "./src/app/pages/fivethree/components/dialog/dialog.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DialogPage);
    return DialogPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-fivethree-components-dialog-dialog-module-es5.js.map