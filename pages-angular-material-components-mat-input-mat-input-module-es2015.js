(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-angular-material-components-mat-input-mat-input-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/angular-material/components/mat-input/mat-input.page.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/angular-material/components/mat-input/mat-input.page.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Inputs</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <h3>Autocomplete</h3>\r\n  <form class=\"example-form\">\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"myControl\"\r\n        [matAutocomplete]=\"auto\">\r\n      <mat-autocomplete #auto=\"matAutocomplete\">\r\n        <mat-option *ngFor=\"let option of options\" [value]=\"option\">\r\n          {{option}}\r\n        </mat-option>\r\n      </mat-autocomplete>\r\n    </mat-form-field>\r\n  </form>\r\n\r\n  <h3>Datepicker</h3>\r\n  <!-- <mat-form-field>\r\n      <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\r\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n      <mat-datepicker #picker></mat-datepicker>\r\n    </mat-form-field> -->\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\r\n    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n    <mat-datepicker touchUi #picker></mat-datepicker>\r\n  </mat-form-field>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/angular-material/components/mat-input/mat-input.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/angular-material/components/mat-input/mat-input.module.ts ***!
  \*********************************************************************************/
/*! exports provided: MatInputPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatInputPageModule", function() { return MatInputPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mat_input_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mat-input.page */ "./src/app/pages/angular-material/components/mat-input/mat-input.page.ts");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");












const routes = [
    {
        path: '',
        component: _mat_input_page__WEBPACK_IMPORTED_MODULE_6__["MatInputPage"]
    }
];
let MatInputPageModule = class MatInputPageModule {
};
MatInputPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"] // Date Picker
        ],
        declarations: [_mat_input_page__WEBPACK_IMPORTED_MODULE_6__["MatInputPage"]]
    })
], MatInputPageModule);



/***/ }),

/***/ "./src/app/pages/angular-material/components/mat-input/mat-input.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/angular-material/components/mat-input/mat-input.page.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYW5ndWxhci1tYXRlcmlhbC9jb21wb25lbnRzL21hdC1pbnB1dC9DOlxcVXNlcnNcXHNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZXRvc1xcX2lvbmljXFxpb25pYzQtY29tcG9uZW50cy9zcmNcXGFwcFxccGFnZXNcXGFuZ3VsYXItbWF0ZXJpYWxcXGNvbXBvbmVudHNcXG1hdC1pbnB1dFxcbWF0LWlucHV0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYW5ndWxhci1tYXRlcmlhbC9jb21wb25lbnRzL21hdC1pbnB1dC9tYXQtaW5wdXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FuZ3VsYXItbWF0ZXJpYWwvY29tcG9uZW50cy9tYXQtaW5wdXQvbWF0LWlucHV0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZvcm0ge1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9IiwiLmV4YW1wbGUtZm9ybSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/angular-material/components/mat-input/mat-input.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/angular-material/components/mat-input/mat-input.page.ts ***!
  \*******************************************************************************/
/*! exports provided: MatInputPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatInputPage", function() { return MatInputPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let MatInputPage = class MatInputPage {
    constructor() {
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.options = ['One', 'Two', 'Three'];
    }
    ngOnInit() {
    }
};
MatInputPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mat-input',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mat-input.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/angular-material/components/mat-input/mat-input.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mat-input.page.scss */ "./src/app/pages/angular-material/components/mat-input/mat-input.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MatInputPage);



/***/ })

}]);
//# sourceMappingURL=pages-angular-material-components-mat-input-mat-input-module-es2015.js.map