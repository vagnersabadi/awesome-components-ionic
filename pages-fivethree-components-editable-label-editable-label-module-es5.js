(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-fivethree-components-editable-label-editable-label-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fivethree/components/editable-label/editable-label.page.html": 
        /*!**************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fivethree/components/editable-label/editable-label.page.html ***!
          \**************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Editable Label</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n\r\n  <ion-item>\r\n    <ion-label>Editing</ion-label>\r\n    <ion-checkbox slot=\"start\" [(ngModel)]=\"editing\"></ion-checkbox>\r\n  </ion-item>\r\n\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <fiv-editable-label value=\"Not in a form\" [editing]=\"editing\"></fiv-editable-label>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <ion-item>\r\n        <fiv-editable-label value=\"Text with NgModel\" [(ngModel)]=\"model\" [editing]=\"editing\">\r\n        </fiv-editable-label>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label>{{model}}</ion-label>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n\r\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n    <ion-card>\r\n      <ion-toolbar>\r\n        <fiv-editable-label value=\"Title\" type=\"title\" formControlName=\"title\" [editing]=\"editing\">\r\n        </fiv-editable-label>\r\n      </ion-toolbar>\r\n      <ion-card-content>\r\n        <ion-item>\r\n          <fiv-editable-label value=\"Your Name\" formControlName=\"name\" [editing]=\"editing\"></fiv-editable-label>\r\n        </ion-item>\r\n      </ion-card-content>\r\n    </ion-card>\r\n    <div class=\"ion-text-center\">\r\n      <ion-button block color=\"primary\" type=\"submit\">\r\n        Login\r\n      </ion-button>\r\n    </div>\r\n  </form>\r\n  <ion-card>\r\n    <ion-card-content>\r\n      {{form.value | json}}\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n\r\n</ion-content>");
            /***/ 
        }),
        /***/ "./src/app/pages/fivethree/components/editable-label/editable-label.module.ts": 
        /*!************************************************************************************!*\
          !*** ./src/app/pages/fivethree/components/editable-label/editable-label.module.ts ***!
          \************************************************************************************/
        /*! exports provided: EditableLabelPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditableLabelPageModule", function () { return EditableLabelPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _editable_label_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editable-label.page */ "./src/app/pages/fivethree/components/editable-label/editable-label.page.ts");
            /* harmony import */ var _fivethree_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fivethree/core */ "./node_modules/@fivethree/core/fesm2015/fivethree-core.js");
            var routes = [
                {
                    path: '',
                    component: _editable_label_page__WEBPACK_IMPORTED_MODULE_6__["EditableLabelPage"]
                }
            ];
            var EditableLabelPageModule = /** @class */ (function () {
                function EditableLabelPageModule() {
                }
                return EditableLabelPageModule;
            }());
            EditableLabelPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                        _fivethree_core__WEBPACK_IMPORTED_MODULE_7__["FivEditableLabelModule"]
                    ],
                    declarations: [_editable_label_page__WEBPACK_IMPORTED_MODULE_6__["EditableLabelPage"]]
                })
            ], EditableLabelPageModule);
            /***/ 
        }),
        /***/ "./src/app/pages/fivethree/components/editable-label/editable-label.page.scss": 
        /*!************************************************************************************!*\
          !*** ./src/app/pages/fivethree/components/editable-label/editable-label.page.scss ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpdmV0aHJlZS9jb21wb25lbnRzL2VkaXRhYmxlLWxhYmVsL2VkaXRhYmxlLWxhYmVsLnBhZ2Uuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/pages/fivethree/components/editable-label/editable-label.page.ts": 
        /*!**********************************************************************************!*\
          !*** ./src/app/pages/fivethree/components/editable-label/editable-label.page.ts ***!
          \**********************************************************************************/
        /*! exports provided: EditableLabelPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditableLabelPage", function () { return EditableLabelPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var EditableLabelPage = /** @class */ (function () {
                function EditableLabelPage(formBuilder) {
                    this.formBuilder = formBuilder;
                    this.setupForm();
                }
                EditableLabelPage.prototype.ngOnInit = function () { };
                EditableLabelPage.prototype.setupForm = function () {
                    this.form = this.formBuilder.group({
                        title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                        name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                        password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
                    });
                };
                EditableLabelPage.prototype.onSubmit = function () { };
                return EditableLabelPage;
            }());
            EditableLabelPage.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
            ]; };
            EditableLabelPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-editable-label',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./editable-label.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fivethree/components/editable-label/editable-label.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./editable-label.page.scss */ "./src/app/pages/fivethree/components/editable-label/editable-label.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
            ], EditableLabelPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-fivethree-components-editable-label-editable-label-module-es2015.js.map
//# sourceMappingURL=pages-fivethree-components-editable-label-editable-label-module-es5.js.map
//# sourceMappingURL=pages-fivethree-components-editable-label-editable-label-module-es5.js.map