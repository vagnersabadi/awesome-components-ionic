(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-angular-material-components-mat-table-mat-table-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/angular-material/components/mat-table/mat-table.page.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/angular-material/components/mat-table/mat-table.page.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Table and Paginator </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\" matSort>\r\n\r\n    <ng-container matColumnDef=\"first_name\">\r\n      <th mat-header-cell *matHeaderCellDef> First Name </th>\r\n      <td mat-cell *matCellDef=\"let user\"> {{user.first_name}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"last_name\">\r\n      <th mat-header-cell *matHeaderCellDef> Last Name </th>\r\n      <td mat-cell *matCellDef=\"let user\"> {{user.last_name}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"twitter\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Twitter </th>\r\n      <td mat-cell *matCellDef=\"let user\"> {{user.twitter}} </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\r\n  </table>\r\n  <div class=\"ion-margin-top\">\r\n    <mat-paginator [pageSizeOptions]=\"[1, 2, 5]\" showFirstLastButtons></mat-paginator>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/angular-material/components/mat-table/mat-table.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/angular-material/components/mat-table/mat-table.module.ts ***!
  \*********************************************************************************/
/*! exports provided: MatTablePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTablePageModule", function() { return MatTablePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mat_table_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mat-table.page */ "./src/app/pages/angular-material/components/mat-table/mat-table.page.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");









const routes = [
    {
        path: '',
        component: _mat_table_page__WEBPACK_IMPORTED_MODULE_6__["MatTablePage"]
    }
];
let MatTablePageModule = class MatTablePageModule {
};
MatTablePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"]
        ],
        declarations: [_mat_table_page__WEBPACK_IMPORTED_MODULE_6__["MatTablePage"]]
    })
], MatTablePageModule);



/***/ }),

/***/ "./src/app/pages/angular-material/components/mat-table/mat-table.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/angular-material/components/mat-table/mat-table.page.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYW5ndWxhci1tYXRlcmlhbC9jb21wb25lbnRzL21hdC10YWJsZS9DOlxcVXNlcnNcXHNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZXRvc1xcX2lvbmljXFxpb25pYzQtY29tcG9uZW50cy9zcmNcXGFwcFxccGFnZXNcXGFuZ3VsYXItbWF0ZXJpYWxcXGNvbXBvbmVudHNcXG1hdC10YWJsZVxcbWF0LXRhYmxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYW5ndWxhci1tYXRlcmlhbC9jb21wb25lbnRzL21hdC10YWJsZS9tYXQtdGFibGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYW5ndWxhci1tYXRlcmlhbC9jb21wb25lbnRzL21hdC10YWJsZS9tYXQtdGFibGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfSIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/angular-material/components/mat-table/mat-table.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/angular-material/components/mat-table/mat-table.page.ts ***!
  \*******************************************************************************/
/*! exports provided: MatTablePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTablePage", function() { return MatTablePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let MatTablePage = class MatTablePage {
    constructor() {
        this.displayedColumns = ['first_name', 'last_name', 'twitter'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]([
            {
                first_name: 'Max',
                last_name: 'Lynch',
                twitter: 'maxlynch'
            },
            {
                first_name: 'Matt',
                last_name: 'Netkow',
                twitter: 'dotNetkow'
            },
            {
                first_name: 'Ben',
                last_name: 'Sperry',
                twitter: 'benjsperry'
            }
        ]);
    }
    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
], MatTablePage.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
], MatTablePage.prototype, "sort", void 0);
MatTablePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mat-table',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mat-table.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/angular-material/components/mat-table/mat-table.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mat-table.page.scss */ "./src/app/pages/angular-material/components/mat-table/mat-table.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MatTablePage);



/***/ })

}]);
//# sourceMappingURL=pages-angular-material-components-mat-table-mat-table-module-es2015.js.map