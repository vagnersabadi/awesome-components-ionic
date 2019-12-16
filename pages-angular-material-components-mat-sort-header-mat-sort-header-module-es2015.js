(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-angular-material-components-mat-sort-header-mat-sort-header-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/angular-material/components/mat-sort-header/mat-sort-header.page.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/angular-material/components/mat-sort-header/mat-sort-header.page.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Sort Header</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <table matSort (matSortChange)=\"sortData($event)\">\r\n    <tr>\r\n      <th mat-sort-header=\"name\">Dessert (100g)</th>\r\n      <th mat-sort-header=\"calories\">Calories</th>\r\n      <th mat-sort-header=\"fat\">Fat (g)</th>\r\n      <th mat-sort-header=\"carbs\">Carbs (g)</th>\r\n      <th mat-sort-header=\"protein\">Protein (g)</th>\r\n    </tr>\r\n\r\n    <tr *ngFor=\"let dessert of sortedData\">\r\n      <td>{{dessert.name}}</td>\r\n      <td>{{dessert.calories}}</td>\r\n      <td>{{dessert.fat}}</td>\r\n      <td>{{dessert.carbs}}</td>\r\n      <td>{{dessert.protein}}</td>\r\n    </tr>\r\n  </table>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/angular-material/components/mat-sort-header/mat-sort-header.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/angular-material/components/mat-sort-header/mat-sort-header.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: MatSortHeaderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSortHeaderPageModule", function() { return MatSortHeaderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mat_sort_header_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mat-sort-header.page */ "./src/app/pages/angular-material/components/mat-sort-header/mat-sort-header.page.ts");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");








const routes = [
    {
        path: '',
        component: _mat_sort_header_page__WEBPACK_IMPORTED_MODULE_6__["MatSortHeaderPage"]
    }
];
let MatSortHeaderPageModule = class MatSortHeaderPageModule {
};
MatSortHeaderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSortModule"]
        ],
        declarations: [_mat_sort_header_page__WEBPACK_IMPORTED_MODULE_6__["MatSortHeaderPage"]]
    })
], MatSortHeaderPageModule);



/***/ }),

/***/ "./src/app/pages/angular-material/components/mat-sort-header/mat-sort-header.page.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/angular-material/components/mat-sort-header/mat-sort-header.page.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  align-items: center;\n  font-size: 12px;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYW5ndWxhci1tYXRlcmlhbC9jb21wb25lbnRzL21hdC1zb3J0LWhlYWRlci9DOlxcVXNlcnNcXHNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZXRvc1xcX2lvbmljXFxpb25pYzQtY29tcG9uZW50cy9zcmNcXGFwcFxccGFnZXNcXGFuZ3VsYXItbWF0ZXJpYWxcXGNvbXBvbmVudHNcXG1hdC1zb3J0LWhlYWRlclxcbWF0LXNvcnQtaGVhZGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYW5ndWxhci1tYXRlcmlhbC9jb21wb25lbnRzL21hdC1zb3J0LWhlYWRlci9tYXQtc29ydC1oZWFkZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FuZ3VsYXItbWF0ZXJpYWwvY29tcG9uZW50cy9tYXQtc29ydC1oZWFkZXIvbWF0LXNvcnQtaGVhZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG4iLCJ0YWJsZSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/angular-material/components/mat-sort-header/mat-sort-header.page.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/angular-material/components/mat-sort-header/mat-sort-header.page.ts ***!
  \*******************************************************************************************/
/*! exports provided: MatSortHeaderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSortHeaderPage", function() { return MatSortHeaderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MatSortHeaderPage = class MatSortHeaderPage {
    constructor() {
        this.desserts = [
            { name: 'Frozen yogurt', calories: 159, fat: 6, carbs: 24, protein: 4 },
            { name: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4 },
            { name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6 },
            { name: 'Cupcake', calories: 305, fat: 4, carbs: 67, protein: 4 },
            { name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 4 },
        ];
        this.sortedData = this.desserts.slice();
    }
    ngOnInit() {
    }
    sortData(sort) {
        const data = this.desserts.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
            return;
        }
        this.sortedData = data.sort((a, b) => {
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'name': return compare(a.name, b.name, isAsc);
                case 'calories': return compare(a.calories, b.calories, isAsc);
                case 'fat': return compare(a.fat, b.fat, isAsc);
                case 'carbs': return compare(a.carbs, b.carbs, isAsc);
                case 'protein': return compare(a.protein, b.protein, isAsc);
                default: return 0;
            }
        });
    }
};
MatSortHeaderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mat-sort-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mat-sort-header.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/angular-material/components/mat-sort-header/mat-sort-header.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mat-sort-header.page.scss */ "./src/app/pages/angular-material/components/mat-sort-header/mat-sort-header.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MatSortHeaderPage);

function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ })

}]);
//# sourceMappingURL=pages-angular-material-components-mat-sort-header-mat-sort-header-module-es2015.js.map