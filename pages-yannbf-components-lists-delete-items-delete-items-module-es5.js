(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-lists-delete-items-delete-items-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/lists/delete-items/delete-items.page.html": 
        /*!*************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/lists/delete-items/delete-items.page.html ***!
          \*************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Delete Items</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-list-header>\r\n      Swipe left to delete\r\n\r\n      <ion-item lines=\"none\">\r\n        <ion-button color=\"primary\" slot=\"end\" fill=\"clear\" (click)=\"addItem()\">\r\n          <ion-icon name=\"add-circle\" slot=\"icon-only\"></ion-icon>\r\n        </ion-button>\r\n      </ion-item>\r\n    </ion-list-header>\r\n\r\n    <ion-item-sliding *ngFor=\"let item of items; let i = index; \">\r\n      <ion-item>\r\n        <ion-label>\r\n          {{item.title}}\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item-options (ionSwipe)=\"deleteItem(items, i)\">\r\n        <ion-item-option color=\"danger\" (click)=\"deleteItem(items, i)\">\r\n          <ion-icon name=\"trash\"></ion-icon>\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n\r\n    <ion-list-header>\r\n      Tap or swipe to delete\r\n\r\n      <ion-item lines=\"none\">\r\n        <ion-button color=\"primary\" slot=\"end\" fill=\"clear\" (click)=\"addThing()\">\r\n          <ion-icon name=\"add-circle\" slot=\"icon-only\"></ion-icon>\r\n        </ion-button>\r\n      </ion-item>\r\n\r\n    </ion-list-header>\r\n\r\n    <ion-item-sliding #slidingItem *ngFor=\"let thing of things; let i = index; \">\r\n      <ion-item lines=\"none\" #item>\r\n        <ion-button color=\"danger\" slot=\"start\" fill=\"clear\" (click)=\"openOption(slidingItem, item, $event)\">\r\n          <ion-icon name=\"remove-circle\" slot=\"icon-only\"></ion-icon>\r\n        </ion-button>\r\n        <ion-label>\r\n          {{thing.title}}\r\n        </ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item-options slot=\"start\" (ionSwipe)=\"deleteItem(things, i)\">\r\n        <ion-item-option color=\"danger\" expandable (click)=\"deleteItem(things, i)\">\r\n          <ion-icon name=\"trash\"></ion-icon>\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n\r\n  </ion-list>\r\n\r\n</ion-content>");
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/lists/delete-items/delete-items.module.ts": 
        /*!***********************************************************************************!*\
          !*** ./src/app/pages/yannbf/components/lists/delete-items/delete-items.module.ts ***!
          \***********************************************************************************/
        /*! exports provided: DeleteItemsPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteItemsPageModule", function () { return DeleteItemsPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _delete_items_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./delete-items.page */ "./src/app/pages/yannbf/components/lists/delete-items/delete-items.page.ts");
            var routes = [
                {
                    path: '',
                    component: _delete_items_page__WEBPACK_IMPORTED_MODULE_6__["DeleteItemsPage"]
                }
            ];
            var DeleteItemsPageModule = /** @class */ (function () {
                function DeleteItemsPageModule() {
                }
                return DeleteItemsPageModule;
            }());
            DeleteItemsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
                    ],
                    declarations: [_delete_items_page__WEBPACK_IMPORTED_MODULE_6__["DeleteItemsPage"]]
                })
            ], DeleteItemsPageModule);
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/lists/delete-items/delete-items.page.scss": 
        /*!***********************************************************************************!*\
          !*** ./src/app/pages/yannbf/components/lists/delete-items/delete-items.page.scss ***!
          \***********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL2xpc3RzL2RlbGV0ZS1pdGVtcy9kZWxldGUtaXRlbXMucGFnZS5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/lists/delete-items/delete-items.page.ts": 
        /*!*********************************************************************************!*\
          !*** ./src/app/pages/yannbf/components/lists/delete-items/delete-items.page.ts ***!
          \*********************************************************************************/
        /*! exports provided: DeleteItemsPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteItemsPage", function () { return DeleteItemsPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var DeleteItemsPage = /** @class */ (function () {
                function DeleteItemsPage() {
                    this.activeItemSliding = null;
                    this.items = [
                        { title: 'Item 1' },
                        { title: 'Item 2' },
                        { title: 'Item 3' },
                    ];
                    this.things = [
                        { title: 'Thing 1' },
                        { title: 'Thing 2' },
                        { title: 'Thing 3' },
                    ];
                }
                DeleteItemsPage.prototype.ngOnInit = function () {
                };
                DeleteItemsPage.prototype.addThing = function () {
                    console.log('add thing');
                    this.things.push({ title: 'Thing ' + (this.things.length + 1) });
                };
                DeleteItemsPage.prototype.addItem = function () {
                    console.log('add item');
                    this.items.push({ title: 'Item ' + (this.items.length + 1) });
                };
                DeleteItemsPage.prototype.deleteItem = function (list, index) {
                    list.splice(index, 1);
                };
                DeleteItemsPage.prototype.openOption = function (itemSlide, item, event) {
                    console.log('opening item slide..');
                    event.stopPropagation(); // here if you want item to be tappable
                    if (this.activeItemSliding) { // use this so that only one active sliding item allowed
                        this.closeOption();
                    }
                    this.activeItemSliding = itemSlide;
                    itemSlide.open('end');
                };
                DeleteItemsPage.prototype.closeOption = function () {
                    console.log('closing item slide..');
                    if (this.activeItemSliding) {
                        this.activeItemSliding.close();
                        this.activeItemSliding = null;
                    }
                };
                return DeleteItemsPage;
            }());
            DeleteItemsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-delete-items',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./delete-items.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/lists/delete-items/delete-items.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./delete-items.page.scss */ "./src/app/pages/yannbf/components/lists/delete-items/delete-items.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], DeleteItemsPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-yannbf-components-lists-delete-items-delete-items-module-es2015.js.map
//# sourceMappingURL=pages-yannbf-components-lists-delete-items-delete-items-module-es5.js.map
//# sourceMappingURL=pages-yannbf-components-lists-delete-items-delete-items-module-es5.js.map