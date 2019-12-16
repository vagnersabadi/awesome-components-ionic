(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-angular-material-components-expansion-expansion-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/angular-material/components/expansion/expansion.page.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/angular-material/components/expansion/expansion.page.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Expansion Panel</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <mat-accordion>\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          Personal data\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          Type your name and age\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      Panel Content\r\n    </mat-expansion-panel>\r\n    <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          Self aware panel\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          Currently I am {{ panelOpenState ? 'open' : 'closed'}}\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      <p>I'm visible because I am open</p>\r\n    </mat-expansion-panel>\r\n  </mat-accordion>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/angular-material/components/expansion/expansion.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/angular-material/components/expansion/expansion.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ExpansionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpansionPageModule", function() { return ExpansionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _expansion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./expansion.page */ "./src/app/pages/angular-material/components/expansion/expansion.page.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");








const routes = [
    {
        path: '',
        component: _expansion_page__WEBPACK_IMPORTED_MODULE_6__["ExpansionPage"]
    }
];
let ExpansionPageModule = class ExpansionPageModule {
};
ExpansionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
        ],
        declarations: [_expansion_page__WEBPACK_IMPORTED_MODULE_6__["ExpansionPage"]]
    })
], ExpansionPageModule);



/***/ }),

/***/ "./src/app/pages/angular-material/components/expansion/expansion.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/angular-material/components/expansion/expansion.page.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FuZ3VsYXItbWF0ZXJpYWwvY29tcG9uZW50cy9leHBhbnNpb24vZXhwYW5zaW9uLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/angular-material/components/expansion/expansion.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/angular-material/components/expansion/expansion.page.ts ***!
  \*******************************************************************************/
/*! exports provided: ExpansionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpansionPage", function() { return ExpansionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ExpansionPage = class ExpansionPage {
    constructor() { }
    ngOnInit() {
    }
};
ExpansionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-expansion',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./expansion.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/angular-material/components/expansion/expansion.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./expansion.page.scss */ "./src/app/pages/angular-material/components/expansion/expansion.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ExpansionPage);



/***/ })

}]);
//# sourceMappingURL=pages-angular-material-components-expansion-expansion-module-es2015.js.map