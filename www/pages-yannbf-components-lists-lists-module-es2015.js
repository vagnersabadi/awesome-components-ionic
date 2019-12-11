(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-lists-lists-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/yannbf/components/lists/lists.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/yannbf/components/lists/lists.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Lists</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let item of items\" [routerLink]=\"item.page\" routerDirection=\"forward\">\r\n      {{ item.title }}\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/yannbf/components/lists/lists.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/yannbf/components/lists/lists.module.ts ***!
  \***************************************************************/
/*! exports provided: ListsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsPageModule", function() { return ListsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _lists_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lists.page */ "./src/app/pages/yannbf/components/lists/lists.page.ts");







const routes = [
    {
        path: '',
        component: _lists_page__WEBPACK_IMPORTED_MODULE_6__["ListsPage"]
    }
];
let ListsPageModule = class ListsPageModule {
};
ListsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_lists_page__WEBPACK_IMPORTED_MODULE_6__["ListsPage"]]
    })
], ListsPageModule);



/***/ }),

/***/ "./src/app/pages/yannbf/components/lists/lists.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/yannbf/components/lists/lists.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL2xpc3RzL2xpc3RzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/yannbf/components/lists/lists.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/yannbf/components/lists/lists.page.ts ***!
  \*************************************************************/
/*! exports provided: ListsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsPage", function() { return ListsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ListsPage = class ListsPage {
    constructor() {
        this.items = [
            {
                title: 'Settings List',
                page: '/settings'
            },
            {
                title: 'Sliding Item',
                page: '/sliding-item'
            },
            {
                title: 'Delete Items',
                page: '/delete-items'
            }
        ];
    }
    ngOnInit() {
    }
};
ListsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lists',
        template: __webpack_require__(/*! raw-loader!./lists.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/yannbf/components/lists/lists.page.html"),
        styles: [__webpack_require__(/*! ./lists.page.scss */ "./src/app/pages/yannbf/components/lists/lists.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ListsPage);



/***/ })

}]);
//# sourceMappingURL=pages-yannbf-components-lists-lists-module-es2015.js.map