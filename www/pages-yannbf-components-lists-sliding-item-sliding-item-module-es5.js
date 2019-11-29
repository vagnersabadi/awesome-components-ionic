(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-lists-sliding-item-sliding-item-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/yannbf/components/lists/sliding-item/sliding-item.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/yannbf/components/lists/sliding-item/sliding-item.page.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Sliding Item</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-item-sliding *ngFor=\"let item of items\">\r\n      <ion-item>\r\n        <ion-thumbnail slot=\"start\">\r\n          <img [src]=\"item.imageUrl\">\r\n        </ion-thumbnail>\r\n        <ion-label>\r\n          <h2>{{item.title}}</h2>\r\n          <p>{{item.place}} • {{item.date}}</p>\r\n        </ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item-options side=\"end\">\r\n        <ion-item-option color=\"secondary\" (click)=\"viewComments(item)\">\r\n          <ion-icon slot=\"top\" name=\"chatbubbles\"></ion-icon>\r\n          Comments\r\n        </ion-item-option>\r\n        <ion-item-option color=\"primary\" (click)=\"viewPlayers(item)\">\r\n          <ion-icon slot=\"top\" name=\"contacts\"></ion-icon>\r\n          Players\r\n        </ion-item-option>\r\n        <ion-item-option color=\"danger\" (click)=\"delete(item)\">\r\n          <ion-icon slot=\"top\" name=\"trash\"></ion-icon>\r\n          Delete\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n\r\n    </ion-item-sliding>\r\n  </ion-list>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/yannbf/components/lists/sliding-item/sliding-item.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/lists/sliding-item/sliding-item.module.ts ***!
  \***********************************************************************************/
/*! exports provided: SlidingItemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidingItemPageModule", function() { return SlidingItemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sliding_item_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sliding-item.page */ "./src/app/pages/yannbf/components/lists/sliding-item/sliding-item.page.ts");







var routes = [
    {
        path: '',
        component: _sliding_item_page__WEBPACK_IMPORTED_MODULE_6__["SlidingItemPage"]
    }
];
var SlidingItemPageModule = /** @class */ (function () {
    function SlidingItemPageModule() {
    }
    SlidingItemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_sliding_item_page__WEBPACK_IMPORTED_MODULE_6__["SlidingItemPage"]]
        })
    ], SlidingItemPageModule);
    return SlidingItemPageModule;
}());



/***/ }),

/***/ "./src/app/pages/yannbf/components/lists/sliding-item/sliding-item.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/lists/sliding-item/sliding-item.page.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL2xpc3RzL3NsaWRpbmctaXRlbS9zbGlkaW5nLWl0ZW0ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/yannbf/components/lists/sliding-item/sliding-item.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/lists/sliding-item/sliding-item.page.ts ***!
  \*********************************************************************************/
/*! exports provided: SlidingItemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidingItemPage", function() { return SlidingItemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SlidingItemPage = /** @class */ (function () {
    function SlidingItemPage() {
        this.items = [
            {
                imageUrl: 'assets/yannbf/img/lists/stadium.jpg',
                title: 'First Cup',
                place: 'Madison Square',
                date: '05/06/2016'
            },
            {
                imageUrl: 'assets/yannbf/img/lists/stadium-3.png',
                title: 'Season',
                place: 'Hooli',
                date: '15/03/2016'
            },
            {
                imageUrl: 'assets/yannbf/img/lists/stadium-2.jpg',
                title: '2nd Season',
                place: 'Castelão',
                date: '05/12/2015'
            },
        ];
    }
    SlidingItemPage.prototype.ngOnInit = function () {
    };
    SlidingItemPage.prototype.delete = function (item) {
        alert('Deleted ' + item.title);
    };
    SlidingItemPage.prototype.viewComments = function (item) {
        alert('Viewing comments of ' + item.title);
    };
    SlidingItemPage.prototype.viewPlayers = function (item) {
        alert('Viewing players of ' + item.title);
    };
    SlidingItemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sliding-item',
            template: __webpack_require__(/*! raw-loader!./sliding-item.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/yannbf/components/lists/sliding-item/sliding-item.page.html"),
            styles: [__webpack_require__(/*! ./sliding-item.page.scss */ "./src/app/pages/yannbf/components/lists/sliding-item/sliding-item.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SlidingItemPage);
    return SlidingItemPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-yannbf-components-lists-sliding-item-sliding-item-module-es5.js.map