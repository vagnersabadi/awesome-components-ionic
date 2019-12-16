var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-fivethree-components-feature-discovery-feature-discovery-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fivethree/components/feature-discovery/feature-discovery.page.html": 
        /*!********************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fivethree/components/feature-discovery/feature-discovery.page.html ***!
          \********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Feature Discovery</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n  <ion-item-divider>\r\n    <ion-label>Example</ion-label>\r\n  </ion-item-divider>\r\n  <ion-button shape=\"round\" (click)=\"fab.show()\">\r\n    Open Feature\r\n  </ion-button>\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-label>Feature Radius</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-range [(ngModel)]=\"fp\" min=\"0\" max=\"200\" color=\"secondary\">\r\n        <ion-label slot=\"start\">small</ion-label>\r\n        <ion-label slot=\"end\">big</ion-label>\r\n      </ion-range>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Content</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-range [(ngModel)]=\"co\" min=\"-50\" max=\"50\" color=\"secondary\">\r\n        <ion-label slot=\"start\">narrow</ion-label>\r\n        <ion-label slot=\"end\">wide</ion-label>\r\n      </ion-range>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button color=\"primary\" (click)=\"log('FAB Clicked')\">\r\n      <!-- use the fiv-icon for cool icon effect -->\r\n      <fiv-icon #fab=\"fivFeature\" [fivFeature]=\"fabContent\" [featurePadding]=\"fp\" [contentOffset]=\"co\" name=\"add\"\r\n        (fivFeatureClick)=\"log('feature click')\" (fivWillOpen)=\"log('fiv will open')\" (fivOpen)=\"log('fiv open')\"\r\n        (fivWillClose)=\"log('fiv will close')\" (fivClose)=\"log('fiv close')\">\r\n      </fiv-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n\r\n<ng-template #fabContent>\r\n  <div padding>\r\n    <ion-text color=\"light\">\r\n      <h1>This is a FAB</h1>\r\n      <p>Click this Button to do some cool stuff.</p>\r\n    </ion-text>\r\n    <ion-buttons>\r\n      <ion-button color=\"light\" shape=\"round\" fill=\"outline\" (click)=\"fab.hide();\">\r\n        <ion-icon slot=\"end\" name=\"close\"></ion-icon>\r\n        Close\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </div>\r\n</ng-template>");
            /***/ 
        }),
        /***/ "./src/app/pages/fivethree/components/feature-discovery/feature-discovery.module.ts": 
        /*!******************************************************************************************!*\
          !*** ./src/app/pages/fivethree/components/feature-discovery/feature-discovery.module.ts ***!
          \******************************************************************************************/
        /*! exports provided: FeatureDiscoveryPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureDiscoveryPageModule", function () { return FeatureDiscoveryPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _feature_discovery_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feature-discovery.page */ "./src/app/pages/fivethree/components/feature-discovery/feature-discovery.page.ts");
            /* harmony import */ var _fivethree_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fivethree/core */ "./node_modules/@fivethree/core/fesm2015/fivethree-core.js");
            var routes = [
                {
                    path: '',
                    component: _feature_discovery_page__WEBPACK_IMPORTED_MODULE_6__["FeatureDiscoveryPage"]
                }
            ];
            var FeatureDiscoveryPageModule = /** @class */ (function () {
                function FeatureDiscoveryPageModule() {
                }
                return FeatureDiscoveryPageModule;
            }());
            FeatureDiscoveryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                        _fivethree_core__WEBPACK_IMPORTED_MODULE_7__["FivFeatureDiscoveryModule"],
                        _fivethree_core__WEBPACK_IMPORTED_MODULE_7__["FivIconModule"]
                    ],
                    declarations: [_feature_discovery_page__WEBPACK_IMPORTED_MODULE_6__["FeatureDiscoveryPage"]]
                })
            ], FeatureDiscoveryPageModule);
            /***/ 
        }),
        /***/ "./src/app/pages/fivethree/components/feature-discovery/feature-discovery.page.scss": 
        /*!******************************************************************************************!*\
          !*** ./src/app/pages/fivethree/components/feature-discovery/feature-discovery.page.scss ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpdmV0aHJlZS9jb21wb25lbnRzL2ZlYXR1cmUtZGlzY292ZXJ5L2ZlYXR1cmUtZGlzY292ZXJ5LnBhZ2Uuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/pages/fivethree/components/feature-discovery/feature-discovery.page.ts": 
        /*!****************************************************************************************!*\
          !*** ./src/app/pages/fivethree/components/feature-discovery/feature-discovery.page.ts ***!
          \****************************************************************************************/
        /*! exports provided: FeatureDiscoveryPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureDiscoveryPage", function () { return FeatureDiscoveryPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            var FeatureDiscoveryPage = /** @class */ (function () {
                function FeatureDiscoveryPage(navController) {
                    this.navController = navController;
                    this.fp = 20;
                    this.co = 20;
                }
                FeatureDiscoveryPage.prototype.ngOnInit = function () { };
                FeatureDiscoveryPage.prototype.log = function (s) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/];
                    }); });
                };
                FeatureDiscoveryPage.prototype.navigateBack = function () {
                    this.navController.back();
                };
                return FeatureDiscoveryPage;
            }());
            FeatureDiscoveryPage.ctorParameters = function () { return [
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
            ]; };
            FeatureDiscoveryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-feature-discovery',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./feature-discovery.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fivethree/components/feature-discovery/feature-discovery.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./feature-discovery.page.scss */ "./src/app/pages/fivethree/components/feature-discovery/feature-discovery.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
            ], FeatureDiscoveryPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-fivethree-components-feature-discovery-feature-discovery-module-es2015.js.map
//# sourceMappingURL=pages-fivethree-components-feature-discovery-feature-discovery-module-es5.js.map
//# sourceMappingURL=pages-fivethree-components-feature-discovery-feature-discovery-module-es5.js.map