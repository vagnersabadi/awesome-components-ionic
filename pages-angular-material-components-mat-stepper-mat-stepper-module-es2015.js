(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-angular-material-components-mat-stepper-mat-stepper-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/angular-material/components/mat-stepper/mat-stepper.page.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/angular-material/components/mat-stepper/mat-stepper.page.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Stepper</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <mat-vertical-stepper linear=\"false\" #stepper>\r\n\r\n    <mat-step [stepControl]=\"userForm\">\r\n      <form [formGroup]=\"userForm\">\r\n        <ng-template matStepLabel>Personal Data</ng-template>\r\n\r\n      </form>\r\n    </mat-step>\r\n\r\n    <mat-step [stepControl]=\"userForm\" label=\"Shipping Info\">\r\n      <form [formGroup]=\"userForm\">\r\n\r\n        <div>\r\n          <button mat-button matStepperPrevious>Back</button>\r\n          <button mat-button matStepperNext>Next</button>\r\n        </div>\r\n      </form>\r\n    </mat-step>\r\n\r\n    <mat-step label=\"Confirm Order\">\r\n      By clicking finish you accept our Terms & Conditions.\r\n      <div>\r\n        <button mat-button matStepperPrevious>Back</button>\r\n        <button mat-button (click)=\"stepper.reset()\">Reset</button>\r\n      </div>\r\n    </mat-step>\r\n\r\n  </mat-vertical-stepper>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/angular-material/components/mat-stepper/mat-stepper.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/angular-material/components/mat-stepper/mat-stepper.module.ts ***!
  \*************************************************************************************/
/*! exports provided: MatStepperPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepperPageModule", function() { return MatStepperPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mat_stepper_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mat-stepper.page */ "./src/app/pages/angular-material/components/mat-stepper/mat-stepper.page.ts");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");








const routes = [
    {
        path: '',
        component: _mat_stepper_page__WEBPACK_IMPORTED_MODULE_6__["MatStepperPage"]
    }
];
let MatStepperPageModule = class MatStepperPageModule {
};
MatStepperPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"]
        ],
        declarations: [_mat_stepper_page__WEBPACK_IMPORTED_MODULE_6__["MatStepperPage"]]
    })
], MatStepperPageModule);



/***/ }),

/***/ "./src/app/pages/angular-material/components/mat-stepper/mat-stepper.page.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/angular-material/components/mat-stepper/mat-stepper.page.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FuZ3VsYXItbWF0ZXJpYWwvY29tcG9uZW50cy9tYXQtc3RlcHBlci9tYXQtc3RlcHBlci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/angular-material/components/mat-stepper/mat-stepper.page.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/angular-material/components/mat-stepper/mat-stepper.page.ts ***!
  \***********************************************************************************/
/*! exports provided: MatStepperPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepperPage", function() { return MatStepperPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let MatStepperPage = class MatStepperPage {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.userForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
};
MatStepperPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
MatStepperPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mat-stepper',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mat-stepper.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/angular-material/components/mat-stepper/mat-stepper.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mat-stepper.page.scss */ "./src/app/pages/angular-material/components/mat-stepper/mat-stepper.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], MatStepperPage);



/***/ })

}]);
//# sourceMappingURL=pages-angular-material-components-mat-stepper-mat-stepper-module-es2015.js.map