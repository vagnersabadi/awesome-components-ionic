(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-fivethree-components-stepper-stepper-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fivethree/components/stepper/stepper.page.html": 
        /*!************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fivethree/components/stepper/stepper.page.html ***!
          \************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Stepper</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n\r\n  <ion-item-divider>\r\n    <ion-label>Vertical Stepper</ion-label>\r\n  </ion-item-divider>\r\n  <ion-item line=\"none\">\r\n    Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor.\r\n  </ion-item>\r\n  <div class=\"wrapper\">\r\n    <fiv-stepper #stepperV [mode]=\"'vertical'\" (fivClick)=\"stepperV.open($event)\">\r\n      <fiv-step [title]=\"'Awesome Title'\" [subtitle]=\"'Awesome Subtitle'\">\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-subtitle>Awesome Subtitle</ion-card-subtitle>\r\n            <ion-card-title>Awesome Title</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n          </ion-card-content>\r\n          <ion-toolbar>\r\n            <ion-buttons slot=\"end\">\r\n              <ion-button color=\"dark\" (click)=\"stepperV.closeAll()\">\r\n                Close\r\n              </ion-button>\r\n              <ion-button color=\"dark\" (click)=\"stepperV.reset(0)\">\r\n                reset\r\n              </ion-button>\r\n              <ion-button color=\"secondary\" (click)=\"stepperV.completeStep(0)\">\r\n                Complete\r\n              </ion-button>\r\n              <ion-button color=\"primary\" (click)=\"stepperV.select(1)\">\r\n                NEXT\r\n              </ion-button>\r\n            </ion-buttons>\r\n          </ion-toolbar>\r\n        </ion-card>\r\n      </fiv-step>\r\n      <fiv-step [title]=\"'Address'\" [subtitle]=\"'Please enter your adress'\">\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-subtitle>Awesome Subtitle</ion-card-subtitle>\r\n            <ion-card-title>Awesome Title</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n          </ion-card-content>\r\n          <ion-toolbar>\r\n            <ion-buttons slot=\"end\">\r\n              <ion-button color=\"dark\" (click)=\"stepperV.select(0)\">\r\n                Previous\r\n              </ion-button>\r\n              <ion-button color=\"primary\" (click)=\"stepperV.select(2)\">\r\n                NEXT\r\n              </ion-button>\r\n            </ion-buttons>\r\n          </ion-toolbar>\r\n        </ion-card>\r\n      </fiv-step>\r\n      <fiv-step [title]=\"'Awesome Title'\" [subtitle]=\"'Awesome Subtitle'\">\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-subtitle>Awesome Subtitle</ion-card-subtitle>\r\n            <ion-card-title>Awesome Title</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n          </ion-card-content>\r\n          <ion-toolbar>\r\n            <ion-buttons slot=\"end\">\r\n              <ion-button color=\"dark\" (click)=\"stepperV.select(1)\">\r\n                Previous\r\n              </ion-button>\r\n              <ion-button color=\"primary\" (click)=\"stepperV.select(0)\">\r\n                NEXT\r\n              </ion-button>\r\n            </ion-buttons>\r\n          </ion-toolbar>\r\n        </ion-card>\r\n      </fiv-step>\r\n    </fiv-stepper>\r\n  </div>\r\n  <ion-item-divider>\r\n    <ion-label>Horizontal Stepper</ion-label>\r\n  </ion-item-divider>\r\n  <ion-item line=\"none\">\r\n    Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor.\r\n  </ion-item>\r\n  <div class=\"wrapper\">\r\n    <fiv-stepper #stepper [mode]=\"'horizontal'\">\r\n      <fiv-step [title]=\"'Awesome Title'\" [subtitle]=\"'Awesome Subtitle'\">\r\n        <ion-card class=\"card-horizontal\">\r\n          <ion-card-header>\r\n            <ion-card-subtitle>Awesome Subtitle</ion-card-subtitle>\r\n            <ion-card-title>Awesome Title</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n          </ion-card-content>\r\n          <ion-toolbar>\r\n            <ion-buttons slot=\"end\">\r\n              <ion-button color=\"primary\" (click)=\"stepper.select(1)\">\r\n                NEXT\r\n              </ion-button>\r\n            </ion-buttons>\r\n          </ion-toolbar>\r\n        </ion-card>\r\n      </fiv-step>\r\n      <fiv-step [title]=\"'Address'\" [subtitle]=\"'Please enter your adress'\">\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-subtitle>Awesome Subtitle</ion-card-subtitle>\r\n            <ion-card-title>Awesome Title</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n\r\n          </ion-card-content>\r\n          <ion-toolbar>\r\n            <ion-buttons slot=\"end\">\r\n              <ion-button color=\"dark\" (click)=\"stepper.select(0)\">\r\n                Previous\r\n              </ion-button>\r\n              <ion-button color=\"primary\" (click)=\"stepper.select(2)\">\r\n                NEXT\r\n              </ion-button>\r\n            </ion-buttons>\r\n          </ion-toolbar>\r\n        </ion-card>\r\n      </fiv-step>\r\n      <fiv-step [title]=\"'Awesome Title'\" [subtitle]=\"'Awesome Subtitle'\">\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-subtitle>Awesome Subtitle</ion-card-subtitle>\r\n            <ion-card-title>Awesome Title</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n          </ion-card-content>\r\n          <ion-toolbar>\r\n            <ion-buttons slot=\"end\">\r\n              <ion-button color=\"dark\" (click)=\"stepper.select(1)\">\r\n                Previous\r\n              </ion-button>\r\n              <ion-button color=\"primary\" (click)=\"stepper.select(0)\">\r\n                NEXT\r\n              </ion-button>\r\n            </ion-buttons>\r\n          </ion-toolbar>\r\n        </ion-card>\r\n      </fiv-step>\r\n    </fiv-stepper>\r\n  </div>\r\n\r\n\r\n</ion-content>");
            /***/ 
        }),
        /***/ "./src/app/pages/fivethree/components/stepper/stepper.module.ts": 
        /*!**********************************************************************!*\
          !*** ./src/app/pages/fivethree/components/stepper/stepper.module.ts ***!
          \**********************************************************************/
        /*! exports provided: StepperPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepperPageModule", function () { return StepperPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _stepper_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stepper.page */ "./src/app/pages/fivethree/components/stepper/stepper.page.ts");
            /* harmony import */ var _fivethree_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fivethree/core */ "./node_modules/@fivethree/core/fesm2015/fivethree-core.js");
            var routes = [
                {
                    path: '',
                    component: _stepper_page__WEBPACK_IMPORTED_MODULE_6__["StepperPage"]
                }
            ];
            var StepperPageModule = /** @class */ (function () {
                function StepperPageModule() {
                }
                return StepperPageModule;
            }());
            StepperPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                        _fivethree_core__WEBPACK_IMPORTED_MODULE_7__["FivStepperModule"]
                    ],
                    declarations: [_stepper_page__WEBPACK_IMPORTED_MODULE_6__["StepperPage"]]
                })
            ], StepperPageModule);
            /***/ 
        }),
        /***/ "./src/app/pages/fivethree/components/stepper/stepper.page.scss": 
        /*!**********************************************************************!*\
          !*** ./src/app/pages/fivethree/components/stepper/stepper.page.scss ***!
          \**********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("ion-item-divider {\n  border-bottom: 0;\n}\n\nion-item {\n  --border-style: none;\n}\n\n.card-horizontal {\n  min-width: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZml2ZXRocmVlL2NvbXBvbmVudHMvc3RlcHBlci9DOlxcVXNlcnNcXHNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZXRvc1xcX2lvbmljXFxpb25pYzQtY29tcG9uZW50cy9zcmNcXGFwcFxccGFnZXNcXGZpdmV0aHJlZVxcY29tcG9uZW50c1xcc3RlcHBlclxcc3RlcHBlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2ZpdmV0aHJlZS9jb21wb25lbnRzL3N0ZXBwZXIvc3RlcHBlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKOztBREVFO0VBQ0Usb0JBQUE7QUNDSjs7QURFRTtFQUNFLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpdmV0aHJlZS9jb21wb25lbnRzL3N0ZXBwZXIvc3RlcHBlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbS1kaXZpZGVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1pdGVtIHtcclxuICAgIC0tYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gIH1cclxuICBcclxuICAuY2FyZC1ob3Jpem9udGFsIHtcclxuICAgIG1pbi13aWR0aDogODAlO1xyXG4gIH1cclxuICAiLCJpb24taXRlbS1kaXZpZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuLmNhcmQtaG9yaXpvbnRhbCB7XG4gIG1pbi13aWR0aDogODAlO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/pages/fivethree/components/stepper/stepper.page.ts": 
        /*!********************************************************************!*\
          !*** ./src/app/pages/fivethree/components/stepper/stepper.page.ts ***!
          \********************************************************************/
        /*! exports provided: StepperPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepperPage", function () { return StepperPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _fivethree_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fivethree/core */ "./node_modules/@fivethree/core/fesm2015/fivethree-core.js");
            var StepperPage = /** @class */ (function () {
                function StepperPage() {
                }
                StepperPage.prototype.ngOnInit = function () {
                };
                return StepperPage;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('stepperV', { static: true }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _fivethree_core__WEBPACK_IMPORTED_MODULE_2__["FivStepper"])
            ], StepperPage.prototype, "stepperV", void 0);
            StepperPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-stepper',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./stepper.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fivethree/components/stepper/stepper.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./stepper.page.scss */ "./src/app/pages/fivethree/components/stepper/stepper.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], StepperPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-fivethree-components-stepper-stepper-module-es2015.js.map
//# sourceMappingURL=pages-fivethree-components-stepper-stepper-module-es5.js.map
//# sourceMappingURL=pages-fivethree-components-stepper-stepper-module-es5.js.map