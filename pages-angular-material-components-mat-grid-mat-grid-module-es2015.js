(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-angular-material-components-mat-grid-mat-grid-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/angular-material/components/mat-grid/mat-grid.page.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/angular-material/components/mat-grid/mat-grid.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Grid</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <mat-grid-list cols=\"4\" rowHeight=\"100px\">\r\n    <mat-grid-tile *ngFor=\"let tile of tiles\" [colspan]=\"tile.cols\" [rowspan]=\"tile.rows\"\r\n      [style.background]=\"tile.color\">\r\n      {{tile.text}}\r\n    </mat-grid-tile>\r\n  </mat-grid-list>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/angular-material/components/mat-grid/mat-grid.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/angular-material/components/mat-grid/mat-grid.module.ts ***!
  \*******************************************************************************/
/*! exports provided: MatGridPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatGridPageModule", function() { return MatGridPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mat_grid_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mat-grid.page */ "./src/app/pages/angular-material/components/mat-grid/mat-grid.page.ts");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");








const routes = [
    {
        path: '',
        component: _mat_grid_page__WEBPACK_IMPORTED_MODULE_6__["MatGridPage"]
    }
];
let MatGridPageModule = class MatGridPageModule {
};
MatGridPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"]
        ],
        declarations: [_mat_grid_page__WEBPACK_IMPORTED_MODULE_6__["MatGridPage"]]
    })
], MatGridPageModule);



/***/ }),

/***/ "./src/app/pages/angular-material/components/mat-grid/mat-grid.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/angular-material/components/mat-grid/mat-grid.page.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FuZ3VsYXItbWF0ZXJpYWwvY29tcG9uZW50cy9tYXQtZ3JpZC9tYXQtZ3JpZC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/angular-material/components/mat-grid/mat-grid.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/angular-material/components/mat-grid/mat-grid.page.ts ***!
  \*****************************************************************************/
/*! exports provided: MatGridPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatGridPage", function() { return MatGridPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MatGridPage = class MatGridPage {
    constructor() {
        this.tiles = [
            { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
            { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
        ];
    }
    ngOnInit() {
    }
};
MatGridPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mat-grid',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mat-grid.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/angular-material/components/mat-grid/mat-grid.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mat-grid.page.scss */ "./src/app/pages/angular-material/components/mat-grid/mat-grid.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MatGridPage);



/***/ })

}]);
//# sourceMappingURL=pages-angular-material-components-mat-grid-mat-grid-module-es2015.js.map