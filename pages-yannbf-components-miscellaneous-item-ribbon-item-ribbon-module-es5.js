(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-miscellaneous-item-ribbon-item-ribbon-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/miscellaneous/item-ribbon/item-ribbon.page.html": 
        /*!*******************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/miscellaneous/item-ribbon/item-ribbon.page.html ***!
          \*******************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Item Ribbon</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <ion-list>\r\n\r\n\r\n    <ion-item *ngFor=\"let item of thumbnails\">\r\n\r\n      <ion-thumbnail slot=\"start\" class=\"item-ribbon\">\r\n        <span class=\"ribbon {{ item.class }}\">\r\n          <span>{{ item.ribbonText }}</span>\r\n        </span>\r\n        <img [src]=\"item.image\">\r\n      </ion-thumbnail>\r\n      <ion-label>{{ item.title }}</ion-label>\r\n    </ion-item>\r\n\r\n\r\n    <ion-item class=\"item-ribbon\">\r\n      <span class=\"ribbon cruzeiro\">\r\n        <span>Ionic</span>\r\n      </span>\r\n      <ion-thumbnail slot=\"start\">\r\n        <img src=\"assets/yannbf/img/ribbon/ionic.png\">\r\n      </ion-thumbnail>\r\n      <ion-label>Awesome framework</ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item class=\"item-ribbon\">\r\n      <span class=\"ribbon javascript\">\r\n        <span>JS</span>\r\n      </span>\r\n      <ion-thumbnail slot=\"start\">\r\n        <img src=\"assets/yannbf/img/ribbon/js.png\">\r\n      </ion-thumbnail>\r\n      <ion-label>Awesome language</ion-label>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n</ion-content>");
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/miscellaneous/item-ribbon/item-ribbon.module.ts": 
        /*!*****************************************************************************************!*\
          !*** ./src/app/pages/yannbf/components/miscellaneous/item-ribbon/item-ribbon.module.ts ***!
          \*****************************************************************************************/
        /*! exports provided: ItemRibbonPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemRibbonPageModule", function () { return ItemRibbonPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _item_ribbon_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item-ribbon.page */ "./src/app/pages/yannbf/components/miscellaneous/item-ribbon/item-ribbon.page.ts");
            var routes = [
                {
                    path: '',
                    component: _item_ribbon_page__WEBPACK_IMPORTED_MODULE_6__["ItemRibbonPage"]
                }
            ];
            var ItemRibbonPageModule = /** @class */ (function () {
                function ItemRibbonPageModule() {
                }
                return ItemRibbonPageModule;
            }());
            ItemRibbonPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
                    ],
                    declarations: [_item_ribbon_page__WEBPACK_IMPORTED_MODULE_6__["ItemRibbonPage"]]
                })
            ], ItemRibbonPageModule);
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/miscellaneous/item-ribbon/item-ribbon.page.scss": 
        /*!*****************************************************************************************!*\
          !*** ./src/app/pages/yannbf/components/miscellaneous/item-ribbon/item-ribbon.page.scss ***!
          \*****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("ion-thumbnail {\n  width: 80px;\n  height: 80px;\n}\n\n.item-ribbon {\n  background-color: #fff;\n  position: relative;\n  -webkit-filter: none;\n          filter: none;\n  opacity: 1;\n}\n\n.item-ribbon .ribbon {\n  position: absolute;\n  right: -5px;\n  top: -5px;\n  z-index: 2;\n  overflow: hidden;\n  width: 75px;\n  height: 75px;\n  text-align: right;\n}\n\n.item-ribbon .ribbon span {\n  font-size: 1rem;\n  font-weight: bold;\n  color: #fff;\n  text-transform: uppercase;\n  text-align: center;\n  line-height: 20px;\n  transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n  width: 100px;\n  display: block;\n  background: #f53d3d;\n  position: absolute;\n  top: 19px;\n  right: -21px;\n}\n\n.item-ribbon .ribbon span::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 100%;\n  z-index: -1;\n  border-left: 3px solid #f53d3d;\n  border-right: 3px solid transparent;\n  border-bottom: 3px solid transparent;\n  border-top: 3px solid #f53d3d;\n}\n\n.item-ribbon .ribbon span::after {\n  content: \"\";\n  position: absolute;\n  right: 0;\n  top: 100%;\n  z-index: -1;\n  border-left: 3px solid transparent;\n  border-right: 3px solid #f53d3d;\n  border-bottom: 3px solid transparent;\n  border-top: 3px solid #f53d3d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbWlzY2VsbGFuZW91cy9pdGVtLXJpYmJvbi9DOlxcVXNlcnNcXHNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZXRvc1xcX2lvbmljXFxpb25pYzQtY29tcG9uZW50cy9zcmNcXGFwcFxccGFnZXNcXHlhbm5iZlxcY29tcG9uZW50c1xcbWlzY2VsbGFuZW91c1xcaXRlbS1yaWJib25cXGl0ZW0tcmliYm9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbWlzY2VsbGFuZW91cy9pdGVtLXJpYmJvbi9pdGVtLXJpYmJvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0RGOztBRHVCQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtVQUFBLFlBQUE7RUFDQSxVQUFBO0FDcEJGOztBRHFCRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDbkJKOztBRG9CSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxtQkE5Qkk7RUErQkosa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ2xCTjs7QURtQk07RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSw2QkFBQTtBQ2pCUjs7QURtQk07RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLCtCQUFBO0VBQ0Esb0NBQUE7RUFDQSw2QkFBQTtBQ2pCUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL21pc2NlbGxhbmVvdXMvaXRlbS1yaWJib24vaXRlbS1yaWJib24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3JlYXRlcyBhIHJpYmJvbiBlZmZlY3Qgd2l0aCB0aGUgZ2l2ZW4gb3B0aW9uczpcclxuXHJcbmlvbi10aHVtYm5haWwge1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGhlaWdodDogODBweDtcclxufVxyXG5AbWl4aW4gcmliYm9uaXplKCRyaWJib24tY29sb3IsICR0ZXh0LWNvbG9yOiB3aGl0ZSwgJGJvcmRlci13aWR0aDogM3B4KSB7XHJcbiAgc3BhbiB7XHJcbiAgICBjb2xvcjogJHRleHQtY29sb3I7XHJcbiAgICBiYWNrZ3JvdW5kOiAkcmliYm9uLWNvbG9yO1xyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgYm9yZGVyLWxlZnQ6ICRib3JkZXItd2lkdGggc29saWQgJHJpYmJvbi1jb2xvcjtcclxuICAgICAgYm9yZGVyLXRvcDogJGJvcmRlci13aWR0aCBzb2xpZCAkcmliYm9uLWNvbG9yO1xyXG4gICAgfVxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBib3JkZXItcmlnaHQ6ICRib3JkZXItd2lkdGggc29saWQgJHJpYmJvbi1jb2xvcjtcclxuICAgICAgYm9yZGVyLXRvcDogJGJvcmRlci13aWR0aCBzb2xpZCAkcmliYm9uLWNvbG9yO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuJGRlZmF1bHQ6ICNmNTNkM2Q7XHJcbiRjcnV6ZWlybzogIzM4N2VmNTtcclxuJGF0bGV0aWNvOiBkYXJrZW4oI2Y0ZjRmNCwgNDUlKTtcclxuJGphdmFzY3JpcHQ6ICNmN2UwMjM7XHJcblxyXG4uaXRlbS1yaWJib24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZpbHRlcjogbm9uZTtcclxuICBvcGFjaXR5OiAxO1xyXG4gIC5yaWJib24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IC01cHg7XHJcbiAgICB0b3A6IC01cHg7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBzcGFuIHtcclxuICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGJhY2tncm91bmQ6ICRkZWZhdWx0O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMTlweDtcclxuICAgICAgcmlnaHQ6IC0yMXB4O1xyXG4gICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgdG9wOiAxMDAlO1xyXG4gICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgJGRlZmF1bHQ7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAkZGVmYXVsdDtcclxuICAgICAgfVxyXG4gICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgdG9wOiAxMDAlO1xyXG4gICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGRlZmF1bHQ7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAkZGVmYXVsdDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpb24tdGh1bWJuYWlsIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbn1cblxuLml0ZW0tcmliYm9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmaWx0ZXI6IG5vbmU7XG4gIG9wYWNpdHk6IDE7XG59XG4uaXRlbS1yaWJib24gLnJpYmJvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC01cHg7XG4gIHRvcDogLTVweDtcbiAgei1pbmRleDogMjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDc1cHg7XG4gIGhlaWdodDogNzVweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uaXRlbS1yaWJib24gLnJpYmJvbiBzcGFuIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIHdpZHRoOiAxMDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6ICNmNTNkM2Q7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxOXB4O1xuICByaWdodDogLTIxcHg7XG59XG4uaXRlbS1yaWJib24gLnJpYmJvbiBzcGFuOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMTAwJTtcbiAgei1pbmRleDogLTE7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2Y1M2QzZDtcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNmNTNkM2Q7XG59XG4uaXRlbS1yaWJib24gLnJpYmJvbiBzcGFuOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMTAwJTtcbiAgei1pbmRleDogLTE7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICNmNTNkM2Q7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNmNTNkM2Q7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/miscellaneous/item-ribbon/item-ribbon.page.ts": 
        /*!***************************************************************************************!*\
          !*** ./src/app/pages/yannbf/components/miscellaneous/item-ribbon/item-ribbon.page.ts ***!
          \***************************************************************************************/
        /*! exports provided: ItemRibbonPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemRibbonPage", function () { return ItemRibbonPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ItemRibbonPage = /** @class */ (function () {
                function ItemRibbonPage() {
                    this.thumbnails = [
                        { title: 'Awesome Shoes - $9', image: 'assets/yannbf/img/ribbon/shoes.jpg', ribbonText: 'sale', class: 'sale' },
                        { title: 'Awesome Team', image: 'assets/yannbf/img/ribbon/cruzeiro.jpg', ribbonText: 'awesome', class: 'cruzeiro' },
                        { title: 'Bad team', image: 'assets/yannbf/img/ribbon/atletico.jpg', ribbonText: 'bad', class: 'atletico' }
                    ];
                }
                ItemRibbonPage.prototype.ngOnInit = function () {
                };
                return ItemRibbonPage;
            }());
            ItemRibbonPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-item-ribbon',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./item-ribbon.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/miscellaneous/item-ribbon/item-ribbon.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./item-ribbon.page.scss */ "./src/app/pages/yannbf/components/miscellaneous/item-ribbon/item-ribbon.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], ItemRibbonPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-yannbf-components-miscellaneous-item-ribbon-item-ribbon-module-es2015.js.map
//# sourceMappingURL=pages-yannbf-components-miscellaneous-item-ribbon-item-ribbon-module-es5.js.map
//# sourceMappingURL=pages-yannbf-components-miscellaneous-item-ribbon-item-ribbon-module-es5.js.map