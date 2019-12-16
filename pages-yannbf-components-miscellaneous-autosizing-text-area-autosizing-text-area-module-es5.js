(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-miscellaneous-autosizing-text-area-autosizing-text-area-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/miscellaneous/autosizing-text-area/autosizing-text-area.page.html": 
        /*!*************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/miscellaneous/autosizing-text-area/autosizing-text-area.page.html ***!
          \*************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Autosizing Textarea</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <!-- Default textarea -->\r\n  <ion-textarea [value]=\"dummyText\"></ion-textarea>\r\n\r\n  <!-- Textarea in an item with a placeholder -->\r\n  <ion-item>\r\n    <ion-textarea placeholder=\"Enter more information here...\"></ion-textarea>\r\n  </ion-item>\r\n\r\n  <!-- Textarea in an item with a floating label -->\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Description</ion-label>\r\n    <ion-textarea [value]=\"dummyText\"></ion-textarea>\r\n  </ion-item>\r\n\r\n  <!-- Disabled and readonly textarea in an item with a stacked label -->\r\n  <ion-item>\r\n    <ion-label position=\"stacked\">Summary</ion-label>\r\n    <ion-textarea disabled readonly [value]=\"dummyText\">\r\n    </ion-textarea>\r\n  </ion-item>\r\n\r\n  <!-- Textarea that clears the value on edit -->\r\n  <ion-item>\r\n    <ion-label>Comment</ion-label>\r\n    <ion-textarea clearOnEdit=\"true\" [value]=\"dummyText\"></ion-textarea>\r\n  </ion-item>\r\n\r\n  <!-- Textarea with custom number of rows and cols -->\r\n  <ion-item>\r\n    <ion-label>Notes</ion-label>\r\n    <ion-textarea rows=\"6\" cols=\"20\" placeholder=\"Enter any notes here...\"></ion-textarea>\r\n  </ion-item>\r\n\r\n</ion-content>");
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/miscellaneous/autosizing-text-area/autosizing-text-area.module.ts": 
        /*!***********************************************************************************************************!*\
          !*** ./src/app/pages/yannbf/components/miscellaneous/autosizing-text-area/autosizing-text-area.module.ts ***!
          \***********************************************************************************************************/
        /*! exports provided: AutosizingTextAreaPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutosizingTextAreaPageModule", function () { return AutosizingTextAreaPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _autosizing_text_area_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./autosizing-text-area.page */ "./src/app/pages/yannbf/components/miscellaneous/autosizing-text-area/autosizing-text-area.page.ts");
            var routes = [
                {
                    path: '',
                    component: _autosizing_text_area_page__WEBPACK_IMPORTED_MODULE_6__["AutosizingTextAreaPage"]
                }
            ];
            var AutosizingTextAreaPageModule = /** @class */ (function () {
                function AutosizingTextAreaPageModule() {
                }
                return AutosizingTextAreaPageModule;
            }());
            AutosizingTextAreaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
                    ],
                    declarations: [_autosizing_text_area_page__WEBPACK_IMPORTED_MODULE_6__["AutosizingTextAreaPage"]]
                })
            ], AutosizingTextAreaPageModule);
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/miscellaneous/autosizing-text-area/autosizing-text-area.page.scss": 
        /*!***********************************************************************************************************!*\
          !*** ./src/app/pages/yannbf/components/miscellaneous/autosizing-text-area/autosizing-text-area.page.scss ***!
          \***********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL21pc2NlbGxhbmVvdXMvYXV0b3NpemluZy10ZXh0LWFyZWEvYXV0b3NpemluZy10ZXh0LWFyZWEucGFnZS5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/miscellaneous/autosizing-text-area/autosizing-text-area.page.ts": 
        /*!*********************************************************************************************************!*\
          !*** ./src/app/pages/yannbf/components/miscellaneous/autosizing-text-area/autosizing-text-area.page.ts ***!
          \*********************************************************************************************************/
        /*! exports provided: AutosizingTextAreaPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutosizingTextAreaPage", function () { return AutosizingTextAreaPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AutosizingTextAreaPage = /** @class */ (function () {
                function AutosizingTextAreaPage() {
                    this.dummyText = "Hello I am autosizing textarea.\n  I automatically adjusts to accommodate my content.\n  I increase and decrease my size based on my content.\n  Try by removing few lines or adding few new lines of text to see what I am able to do.";
                }
                AutosizingTextAreaPage.prototype.ngOnInit = function () {
                };
                return AutosizingTextAreaPage;
            }());
            AutosizingTextAreaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-autosizing-text-area',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./autosizing-text-area.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/miscellaneous/autosizing-text-area/autosizing-text-area.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./autosizing-text-area.page.scss */ "./src/app/pages/yannbf/components/miscellaneous/autosizing-text-area/autosizing-text-area.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], AutosizingTextAreaPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-yannbf-components-miscellaneous-autosizing-text-area-autosizing-text-area-module-es2015.js.map
//# sourceMappingURL=pages-yannbf-components-miscellaneous-autosizing-text-area-autosizing-text-area-module-es5.js.map
//# sourceMappingURL=pages-yannbf-components-miscellaneous-autosizing-text-area-autosizing-text-area-module-es5.js.map