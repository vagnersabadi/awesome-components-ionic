(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-miscellaneous-pinterest-masonry-cards-pinterest-masonry-cards-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/miscellaneous/pinterest-masonry-cards/pinterest-masonry-cards.page.html": 
        /*!*******************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/miscellaneous/pinterest-masonry-cards/pinterest-masonry-cards.page.html ***!
          \*******************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Masonry Cards</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"pins\">\r\n\r\n    <ion-card class=\"pin\" *ngFor=\"let post of posts\">\r\n      <img [src]=\"post.image\" />\r\n\r\n      <ion-card-header>\r\n        <ion-card-subtitle>\r\n          <div *ngIf=\"post.description\" class=\"post-description\">\r\n            <small>{{ post.description }}</small>\r\n          </div>\r\n        </ion-card-subtitle>\r\n      </ion-card-header>\r\n      <ion-card-content class=\"ion-no-padding\">\r\n        <ion-item lines=\"none\">\r\n          <ion-avatar slot=\"start\">\r\n            <img src=\"assets/yannbf/img/avatar/marty-avatar.png\">\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <h3>McFly</h3>\r\n            <p>Category</p>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n\r\n</ion-content>");
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/miscellaneous/pinterest-masonry-cards/pinterest-masonry-cards.module.ts": 
        /*!*****************************************************************************************************************!*\
          !*** ./src/app/pages/yannbf/components/miscellaneous/pinterest-masonry-cards/pinterest-masonry-cards.module.ts ***!
          \*****************************************************************************************************************/
        /*! exports provided: PinterestMasonryCardsPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinterestMasonryCardsPageModule", function () { return PinterestMasonryCardsPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _pinterest_masonry_cards_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pinterest-masonry-cards.page */ "./src/app/pages/yannbf/components/miscellaneous/pinterest-masonry-cards/pinterest-masonry-cards.page.ts");
            var routes = [
                {
                    path: '',
                    component: _pinterest_masonry_cards_page__WEBPACK_IMPORTED_MODULE_6__["PinterestMasonryCardsPage"]
                }
            ];
            var PinterestMasonryCardsPageModule = /** @class */ (function () {
                function PinterestMasonryCardsPageModule() {
                }
                return PinterestMasonryCardsPageModule;
            }());
            PinterestMasonryCardsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
                    ],
                    declarations: [_pinterest_masonry_cards_page__WEBPACK_IMPORTED_MODULE_6__["PinterestMasonryCardsPage"]]
                })
            ], PinterestMasonryCardsPageModule);
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/miscellaneous/pinterest-masonry-cards/pinterest-masonry-cards.page.scss": 
        /*!*****************************************************************************************************************!*\
          !*** ./src/app/pages/yannbf/components/miscellaneous/pinterest-masonry-cards/pinterest-masonry-cards.page.scss ***!
          \*****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".pins {\n  -moz-column-count: 2;\n       column-count: 2;\n}\n\n.pin {\n  display: inline-block;\n}\n\n.card {\n  margin-top: 10px;\n}\n\n.item ion-avatar img {\n  width: 9vw;\n  height: 9vw;\n}\n\n.post-description {\n  padding: 8px;\n  border-bottom: 1px solid #eee;\n}\n\n@media (min-width: 480px) {\n  .pins {\n    -moz-column-count: 3;\n         column-count: 3;\n  }\n\n  .item ion-avatar img {\n    width: 7vw !important;\n    height: 7vw !important;\n  }\n}\n\n@media (min-width: 640px) {\n  .pins {\n    -moz-column-count: 4;\n         column-count: 4;\n  }\n\n  .item ion-avatar img {\n    width: 5vw !important;\n    height: 5vw !important;\n    margin: 6px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbWlzY2VsbGFuZW91cy9waW50ZXJlc3QtbWFzb25yeS1jYXJkcy9DOlxcVXNlcnNcXHNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZXRvc1xcX2lvbmljXFxpb25pYzQtY29tcG9uZW50cy9zcmNcXGFwcFxccGFnZXNcXHlhbm5iZlxcY29tcG9uZW50c1xcbWlzY2VsbGFuZW91c1xccGludGVyZXN0LW1hc29ucnktY2FyZHNcXHBpbnRlcmVzdC1tYXNvbnJ5LWNhcmRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbWlzY2VsbGFuZW91cy9waW50ZXJlc3QtbWFzb25yeS1jYXJkcy9waW50ZXJlc3QtbWFzb25yeS1jYXJkcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtPQUFBLGVBQUE7QUNDSjs7QURHQTtFQUNJLHFCQUFBO0FDQUo7O0FER0E7RUFDSSxnQkFBQTtBQ0FKOztBRE9BO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUNKSjs7QURPQTtFQUNJLFlBQUE7RUFDQSw2QkFBQTtBQ0pKOztBRFFBO0VBQ0k7SUFDSSxvQkFBQTtTQUFBLGVBQUE7RUNMTjs7RURPRTtJQUNJLHFCQUFBO0lBQ0Esc0JBQUE7RUNKTjtBQUNGOztBRE9BO0VBQ0k7SUFDSSxvQkFBQTtTQUFBLGVBQUE7RUNMTjs7RURPRTtJQUNJLHFCQUFBO0lBQ0Esc0JBQUE7SUFDQSxXQUFBO0VDSk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL21pc2NlbGxhbmVvdXMvcGludGVyZXN0LW1hc29ucnktY2FyZHMvcGludGVyZXN0LW1hc29ucnktY2FyZHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBpbnMge1xyXG4gICAgY29sdW1uLWNvdW50OiAyO1xyXG59XHJcblxyXG5cclxuLnBpbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi8vIGlvbi1hdmF0YXIge1xyXG4vLyAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi5pdGVtIGlvbi1hdmF0YXIgaW1nIHtcclxuICAgIHdpZHRoOiA5dncgO1xyXG4gICAgaGVpZ2h0OiA5dnc7XHJcbn1cclxuXHJcbi5wb3N0LWRlc2NyaXB0aW9uIHtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xyXG59XHJcblxyXG4vLyBNZWRpYSBxdWVyaWVzXHJcbkBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xyXG4gICAgLnBpbnMge1xyXG4gICAgICAgIGNvbHVtbi1jb3VudDogMztcclxuICAgIH1cclxuICAgIC5pdGVtIGlvbi1hdmF0YXIgaW1nIHtcclxuICAgICAgICB3aWR0aDogIDd2dyAhaW1wb3J0YW50O1xyXG4gICAgICAgIGhlaWdodDogN3Z3ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xyXG4gICAgLnBpbnMge1xyXG4gICAgICAgIGNvbHVtbi1jb3VudDogNDtcclxuICAgIH1cclxuICAgIC5pdGVtIGlvbi1hdmF0YXIgaW1nIHtcclxuICAgICAgICB3aWR0aDogIDV2dyAhaW1wb3J0YW50O1xyXG4gICAgICAgIGhlaWdodDogNXZ3ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luOiA2cHg7XHJcbiAgICB9XHJcbn0iLCIucGlucyB7XG4gIGNvbHVtbi1jb3VudDogMjtcbn1cblxuLnBpbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmNhcmQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uaXRlbSBpb24tYXZhdGFyIGltZyB7XG4gIHdpZHRoOiA5dnc7XG4gIGhlaWdodDogOXZ3O1xufVxuXG4ucG9zdC1kZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xuICAucGlucyB7XG4gICAgY29sdW1uLWNvdW50OiAzO1xuICB9XG5cbiAgLml0ZW0gaW9uLWF2YXRhciBpbWcge1xuICAgIHdpZHRoOiA3dncgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDd2dyAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcbiAgLnBpbnMge1xuICAgIGNvbHVtbi1jb3VudDogNDtcbiAgfVxuXG4gIC5pdGVtIGlvbi1hdmF0YXIgaW1nIHtcbiAgICB3aWR0aDogNXZ3ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA1dncgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDZweDtcbiAgfVxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/miscellaneous/pinterest-masonry-cards/pinterest-masonry-cards.page.ts": 
        /*!***************************************************************************************************************!*\
          !*** ./src/app/pages/yannbf/components/miscellaneous/pinterest-masonry-cards/pinterest-masonry-cards.page.ts ***!
          \***************************************************************************************************************/
        /*! exports provided: PinterestMasonryCardsPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinterestMasonryCardsPage", function () { return PinterestMasonryCardsPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PinterestMasonryCardsPage = /** @class */ (function () {
                function PinterestMasonryCardsPage() {
                    this.posts = [];
                }
                PinterestMasonryCardsPage.prototype.ngOnInit = function () {
                    this.posts = [
                        {
                            description: 'Trying out digital painting',
                            image: 'https://s-media-cache-ak0.pinimg.com/564x/d5/63/b0/d563b08194f0a92cc7d381f7f8582a08.jpg'
                        },
                        {
                            description: '',
                            image: 'https://s-media-cache-ak0.pinimg.com/236x/43/f3/3d/43f33de6f96ca8e6f8dc6ff1ad86b586.jpg'
                        },
                        {
                            description: 'Look at this amazing clay humming bird I crafted!',
                            image: 'https://s-media-cache-ak0.pinimg.com/236x/68/68/a2/6868a2f821e5d15cc8fcd8cfa1694606.jpg'
                        },
                        {
                            description: 'Origami tullip tutorial',
                            image: 'https://s-media-cache-ak0.pinimg.com/236x/38/6f/8e/386f8ec1725f09883d827094228d0f82.jpg'
                        },
                        {
                            description: '',
                            image: 'https://s-media-cache-ak0.pinimg.com/564x/f6/61/5c/f6615ca7068da18157588890f9e9e03a.jpg'
                        },
                        {
                            description: '',
                            image: 'https://s-media-cache-ak0.pinimg.com/564x/0d/29/35/0d2935d14c17aff1baab75360c9e2bd6.jpg'
                        },
                        {
                            description: 'Delicious chocolate bread recipe!',
                            image: 'https://s-media-cache-ak0.pinimg.com/564x/06/a9/8e/06a98e67111aae83a481a2c1dbb594a4.jpg'
                        },
                        {
                            description: '',
                            image: 'https://s-media-cache-ak0.pinimg.com/564x/d5/8c/37/d58c3783d6ebf79db0f9c057726800a0.jpg'
                        },
                        {
                            description: '',
                            image: 'https://s-media-cache-ak0.pinimg.com/564x/f5/35/97/f53597bf16aff91315a0beca27ffdbda.jpg'
                        },
                        {
                            description: '',
                            image: 'https://s-media-cache-ak0.pinimg.com/564x/cf/fe/6d/cffe6dd7dece1cb0562f65cd3bfba1ac.jpg'
                        },
                        {
                            description: 'Fastest car of all times',
                            image: 'https://s-media-cache-ak0.pinimg.com/564x/5f/bf/34/5fbf3414f9de301c8f4b868b1c2e2339.jpg'
                        },
                    ];
                };
                return PinterestMasonryCardsPage;
            }());
            PinterestMasonryCardsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-pinterest-masonry-cards',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pinterest-masonry-cards.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/miscellaneous/pinterest-masonry-cards/pinterest-masonry-cards.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pinterest-masonry-cards.page.scss */ "./src/app/pages/yannbf/components/miscellaneous/pinterest-masonry-cards/pinterest-masonry-cards.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], PinterestMasonryCardsPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-yannbf-components-miscellaneous-pinterest-masonry-cards-pinterest-masonry-cards-module-es2015.js.map
//# sourceMappingURL=pages-yannbf-components-miscellaneous-pinterest-masonry-cards-pinterest-masonry-cards-module-es5.js.map
//# sourceMappingURL=pages-yannbf-components-miscellaneous-pinterest-masonry-cards-pinterest-masonry-cards-module-es5.js.map