(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-angular-material-components-mat-card-mat-card-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/angular-material/components/mat-card/mat-card.page.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/angular-material/components/mat-card/mat-card.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Card</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <mat-card class=\"example-card\">\r\n    <mat-card-header>\r\n      <div mat-card-avatar class=\"example-header-image\"></div>\r\n      <mat-card-title>Shiba Inu</mat-card-title>\r\n      <mat-card-subtitle>Dog Breed</mat-card-subtitle>\r\n    </mat-card-header>\r\n    <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\r\n    <mat-card-content>\r\n      <p>\r\n        The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\r\n        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\r\n        bred for hunting.\r\n      </p>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n      <!-- <button mat-button>LIKE</button>\r\n          <button mat-button>SHARE</button> -->\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/angular-material/components/mat-card/mat-card.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/angular-material/components/mat-card/mat-card.module.ts ***!
  \*******************************************************************************/
/*! exports provided: MatCardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardPageModule", function() { return MatCardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mat_card_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mat-card.page */ "./src/app/pages/angular-material/components/mat-card/mat-card.page.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");








const routes = [
    {
        path: '',
        component: _mat_card_page__WEBPACK_IMPORTED_MODULE_6__["MatCardPage"]
    }
];
let MatCardPageModule = class MatCardPageModule {
};
MatCardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"]
        ],
        declarations: [_mat_card_page__WEBPACK_IMPORTED_MODULE_6__["MatCardPage"]]
    })
], MatCardPageModule);



/***/ }),

/***/ "./src/app/pages/angular-material/components/mat-card/mat-card.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/angular-material/components/mat-card/mat-card.page.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-card {\n  max-width: 400px;\n  margin: 16px;\n  text-align: center;\n}\n\n.example-header-image {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYW5ndWxhci1tYXRlcmlhbC9jb21wb25lbnRzL21hdC1jYXJkL0M6XFxVc2Vyc1xcc2FiYWRpXFxEb2N1bWVudHNcXFByb2pldG9zXFxfaW9uaWNcXGlvbmljNC1jb21wb25lbnRzL3NyY1xcYXBwXFxwYWdlc1xcYW5ndWxhci1tYXRlcmlhbFxcY29tcG9uZW50c1xcbWF0LWNhcmRcXG1hdC1jYXJkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYW5ndWxhci1tYXRlcmlhbC9jb21wb25lbnRzL21hdC1jYXJkL21hdC1jYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUU7RUFDRSxtRkFBQTtFQUNBLHNCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hbmd1bGFyLW1hdGVyaWFsL2NvbXBvbmVudHMvbWF0LWNhcmQvbWF0LWNhcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZCB7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgbWFyZ2luOiAxNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH0iLCIuZXhhbXBsZS1jYXJkIHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/angular-material/components/mat-card/mat-card.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/angular-material/components/mat-card/mat-card.page.ts ***!
  \*****************************************************************************/
/*! exports provided: MatCardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardPage", function() { return MatCardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MatCardPage = class MatCardPage {
    constructor() { }
    ngOnInit() {
    }
};
MatCardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mat-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mat-card.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/angular-material/components/mat-card/mat-card.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mat-card.page.scss */ "./src/app/pages/angular-material/components/mat-card/mat-card.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MatCardPage);



/***/ })

}]);
//# sourceMappingURL=pages-angular-material-components-mat-card-mat-card-module-es2015.js.map