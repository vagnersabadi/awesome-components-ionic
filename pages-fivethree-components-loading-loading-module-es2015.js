(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-fivethree-components-loading-loading-module"],{

/***/ "./src/app/pages/fivethree/components/loading/loading-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/fivethree/components/loading/loading-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: LoadingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingPageRoutingModule", function() { return LoadingPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _loading_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loading.page */ "./src/app/pages/fivethree/components/loading/loading.page.ts");





const routes = [
    {
        path: '',
        component: _loading_page__WEBPACK_IMPORTED_MODULE_2__["LoadingPage"]
    }
];
class LoadingPageRoutingModule {
}
LoadingPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoadingPageRoutingModule });
LoadingPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoadingPageRoutingModule_Factory(t) { return new (t || LoadingPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoadingPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/fivethree/components/loading/loading.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/fivethree/components/loading/loading.module.ts ***!
  \**********************************************************************/
/*! exports provided: LoadingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingPageModule", function() { return LoadingPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _loading_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loading-routing.module */ "./src/app/pages/fivethree/components/loading/loading-routing.module.ts");
/* harmony import */ var _loading_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading.page */ "./src/app/pages/fivethree/components/loading/loading.page.ts");
/* harmony import */ var _fivethree_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fivethree/core */ "./node_modules/@fivethree/core/__ivy_ngcc__/fesm2015/fivethree-core.js");








class LoadingPageModule {
}
LoadingPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoadingPageModule });
LoadingPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoadingPageModule_Factory(t) { return new (t || LoadingPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _loading_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoadingPageRoutingModule"],
            _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivLoadingProgressBarModule"],
            _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivSpinnerModule"],
            _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivCenterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoadingPageModule, { declarations: [_loading_page__WEBPACK_IMPORTED_MODULE_5__["LoadingPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        _loading_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoadingPageRoutingModule"],
        _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivLoadingProgressBarModule"],
        _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivSpinnerModule"],
        _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivCenterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                    _loading_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoadingPageRoutingModule"],
                    _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivLoadingProgressBarModule"],
                    _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivSpinnerModule"],
                    _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivCenterModule"]
                ],
                declarations: [_loading_page__WEBPACK_IMPORTED_MODULE_5__["LoadingPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/fivethree/components/loading/loading.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/fivethree/components/loading/loading.page.ts ***!
  \********************************************************************/
/*! exports provided: LoadingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingPage", function() { return LoadingPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _fivethree_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fivethree/core */ "./node_modules/@fivethree/core/__ivy_ngcc__/fesm2015/fivethree-core.js");




class LoadingPage {
    constructor() {
        this.mode = 'determinate';
        this.value = 0;
    }
    ngOnInit() { }
    fabComplete() { }
    buttonComplete() { }
    showHint(refresher) {
        refresher.showHint();
    }
    onRefresh(refresher) {
        setTimeout(() => {
            refresher.completeRefresh();
        }, 2000);
    }
    complete() { }
}
LoadingPage.ɵfac = function LoadingPage_Factory(t) { return new (t || LoadingPage)(); };
LoadingPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingPage, selectors: [["app-loading"]], decls: 24, vars: 5, consts: [["slot", "start"], ["defaultHref", "/fivethree"], [3, "disabled", "click"], [1, "wrapper"], [1, "progress-bar", 3, "fivCenter"], ["bar", ""], [3, "fivCenter"]], template: function LoadingPage_Template(rf, ctx) { if (rf & 1) {
        const _r359 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoadingPage_Template_ion_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r359); const _r358 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20); return _r358.fillIn(2000); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " fill ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoadingPage_Template_ion_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r359); const _r358 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20); return _r358.shrinkIn(2000); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " shrink ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoadingPage_Template_ion_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r359); const _r358 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20); return _r358.load(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " load ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoadingPage_Template_ion_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r359); const _r358 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20); return _r358.unload(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " unload ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoadingPage_Template_ion_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r359); const _r358 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20); return _r358.complete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " complete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "fiv-loading-progress-bar", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "fiv-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r358 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r358.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r358.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r358.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r358.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r358.loading);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _fivethree_core__WEBPACK_IMPORTED_MODULE_2__["FivCenter"], _fivethree_core__WEBPACK_IMPORTED_MODULE_2__["FivLoadingProgressBar"], _fivethree_core__WEBPACK_IMPORTED_MODULE_2__["FivSpinner"]], styles: ["ion-card[_ngcontent-%COMP%] {\n  top: 16px;\n}\n\nion-list[_ngcontent-%COMP%] {\n  padding-bottom: 8px;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 5px;\n  background: var(--ion-color-light);\n}\n\n[_nghost-%COMP%] {\n  --fiv-color-fab: var(--ion-color-light);\n}\n\nfiv-loading-progress-bar[_ngcontent-%COMP%] {\n  --background-progress-bar: purple;\n  --color-spin-0: red;\n  --color-spin-50: green;\n  --color-spin-100: yellow;\n}\n\nion-item-divider[_ngcontent-%COMP%] {\n  border-bottom: 0;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --border-style: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZml2ZXRocmVlL2NvbXBvbmVudHMvbG9hZGluZy9DOlxcVXNlcnNcXHNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZXRvc1xcX2lvbmljXFxpb25pYzQtY29tcG9uZW50cy9zcmNcXGFwcFxccGFnZXNcXGZpdmV0aHJlZVxcY29tcG9uZW50c1xcbG9hZGluZ1xcbG9hZGluZy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2ZpdmV0aHJlZS9jb21wb25lbnRzL2xvYWRpbmcvbG9hZGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0FDQ0o7O0FERUU7RUFDRSxtQkFBQTtBQ0NKOztBREVFO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtBQ0NKOztBREVFO0VBQ0UsdUNBQUE7QUNDSjs7QURFRTtFQUNFLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0FDQ0o7O0FERUU7RUFDRSxnQkFBQTtBQ0NKOztBRENFO0VBQ0Usb0JBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpdmV0aHJlZS9jb21wb25lbnRzL2xvYWRpbmcvbG9hZGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XHJcbiAgICB0b3A6IDE2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1saXN0IHtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9ncmVzcy1iYXIge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICB9XHJcbiAgXHJcbiAgOmhvc3Qge1xyXG4gICAgLS1maXYtY29sb3ItZmFiOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gIH1cclxuICBcclxuICBmaXYtbG9hZGluZy1wcm9ncmVzcy1iYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kLXByb2dyZXNzLWJhcjogcHVycGxlO1xyXG4gICAgLS1jb2xvci1zcGluLTA6IHJlZDtcclxuICAgIC0tY29sb3Itc3Bpbi01MDogZ3JlZW47XHJcbiAgICAtLWNvbG9yLXNwaW4tMTAwOiB5ZWxsb3c7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1pdGVtLWRpdmlkZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICB9XHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgLS1ib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgfVxyXG4gICIsImlvbi1jYXJkIHtcbiAgdG9wOiAxNnB4O1xufVxuXG5pb24tbGlzdCB7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG5cbi5wcm9ncmVzcy1iYXIge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuOmhvc3Qge1xuICAtLWZpdi1jb2xvci1mYWI6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbmZpdi1sb2FkaW5nLXByb2dyZXNzLWJhciB7XG4gIC0tYmFja2dyb3VuZC1wcm9ncmVzcy1iYXI6IHB1cnBsZTtcbiAgLS1jb2xvci1zcGluLTA6IHJlZDtcbiAgLS1jb2xvci1zcGluLTUwOiBncmVlbjtcbiAgLS1jb2xvci1zcGluLTEwMDogeWVsbG93O1xufVxuXG5pb24taXRlbS1kaXZpZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1zdHlsZTogbm9uZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading',
                templateUrl: './loading.page.html',
                styleUrls: ['./loading.page.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-fivethree-components-loading-loading-module-es2015.js.map