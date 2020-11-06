(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-fivethree-components-refresh-refresh-module"],{

/***/ "./src/app/pages/fivethree/components/refresh/refresh-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/fivethree/components/refresh/refresh-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: RefreshPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefreshPageRoutingModule", function() { return RefreshPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _refresh_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./refresh.page */ "./src/app/pages/fivethree/components/refresh/refresh.page.ts");





const routes = [
    {
        path: '',
        component: _refresh_page__WEBPACK_IMPORTED_MODULE_2__["RefreshPage"]
    }
];
class RefreshPageRoutingModule {
}
RefreshPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RefreshPageRoutingModule });
RefreshPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RefreshPageRoutingModule_Factory(t) { return new (t || RefreshPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RefreshPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RefreshPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/fivethree/components/refresh/refresh.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/fivethree/components/refresh/refresh.module.ts ***!
  \**********************************************************************/
/*! exports provided: RefreshPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefreshPageModule", function() { return RefreshPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _refresh_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./refresh-routing.module */ "./src/app/pages/fivethree/components/refresh/refresh-routing.module.ts");
/* harmony import */ var _refresh_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./refresh.page */ "./src/app/pages/fivethree/components/refresh/refresh.page.ts");
/* harmony import */ var _fivethree_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fivethree/core */ "./node_modules/@fivethree/core/__ivy_ngcc__/fesm2015/fivethree-core.js");








class RefreshPageModule {
}
RefreshPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RefreshPageModule });
RefreshPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RefreshPageModule_Factory(t) { return new (t || RefreshPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _refresh_routing_module__WEBPACK_IMPORTED_MODULE_4__["RefreshPageRoutingModule"],
            _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivRefresherModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RefreshPageModule, { declarations: [_refresh_page__WEBPACK_IMPORTED_MODULE_5__["RefreshPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        _refresh_routing_module__WEBPACK_IMPORTED_MODULE_4__["RefreshPageRoutingModule"],
        _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivRefresherModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RefreshPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                    _refresh_routing_module__WEBPACK_IMPORTED_MODULE_4__["RefreshPageRoutingModule"],
                    _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivRefresherModule"]
                ],
                declarations: [_refresh_page__WEBPACK_IMPORTED_MODULE_5__["RefreshPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/fivethree/components/refresh/refresh.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/fivethree/components/refresh/refresh.page.ts ***!
  \********************************************************************/
/*! exports provided: RefreshPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefreshPage", function() { return RefreshPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _fivethree_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fivethree/core */ "./node_modules/@fivethree/core/__ivy_ngcc__/fesm2015/fivethree-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





class RefreshPage {
    constructor() {
        this.header = true;
    }
    ngOnInit() {
    }
}
RefreshPage.ɵfac = function RefreshPage_Factory(t) { return new (t || RefreshPage)(); };
RefreshPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RefreshPage, selectors: [["app-refresh"]], decls: 22, vars: 1, consts: [["slot", "start"], ["defaultHref", "/fivethree"], ["refresher", ""], ["slot", "end", 3, "ngModel", "ngModelChange"], ["color", "translucent"], ["slot", "end"], ["shape", "round", "fill", "outline", "color", "primary", 3, "click"], [1, "scroll"]], template: function RefreshPage_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "fiv-refresher", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Show Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-checkbox", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RefreshPage_Template_ion_checkbox_ngModelChange_12_listener($event) { return ctx.header = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-toolbar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-buttons", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RefreshPage_Template_ion_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return _r0.showHint(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Show hint ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ion-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RefreshPage_Template_ion_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return _r0.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Refresh ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ion-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RefreshPage_Template_ion_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return _r0.complete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " complete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.header);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _fivethree_core__WEBPACK_IMPORTED_MODULE_2__["FivRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCheckbox"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["BooleanValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"]], styles: ["ion-grid[_ngcontent-%COMP%] {\n  margin-top: 56px;\n}\n\n.flex-scroll[_ngcontent-%COMP%] {\n  display: flex;\n  overflow-x: scroll;\n  width: 100%;\n}\n\n.flex-scroll[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  flex: 1 0 auto;\n}\n\n.scroll[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n\nfiv-refresher[_ngcontent-%COMP%] {\n  --fiv-spin-color: var(--ion-color-secondary);\n  --fiv-hint-color: var(--ion-color-secondary);\n}\n\nion-item[_ngcontent-%COMP%], ion-list[_ngcontent-%COMP%] {\n  --background: var(--ion-item-background);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZml2ZXRocmVlL2NvbXBvbmVudHMvcmVmcmVzaC9DOlxcVXNlcnNcXFZhZ25lciBTYWJhZGlcXERvY3VtZW50c1xcUHJvamVjdHNcXF9NeVxcYXdlc29tZS1jb21wb25lbnRzLWlvbmljL3NyY1xcYXBwXFxwYWdlc1xcZml2ZXRocmVlXFxjb21wb25lbnRzXFxyZWZyZXNoXFxyZWZyZXNoLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZml2ZXRocmVlL2NvbXBvbmVudHMvcmVmcmVzaC9yZWZyZXNoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDQ0o7O0FEQUk7RUFDRSxjQUFBO0FDRU47O0FERUU7RUFDRSxhQUFBO0FDQ0o7O0FERUU7RUFDRSw0Q0FBQTtFQUNBLDRDQUFBO0FDQ0o7O0FERUU7O0VBRUUsd0NBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpdmV0aHJlZS9jb21wb25lbnRzL3JlZnJlc2gvcmVmcmVzaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZ3JpZCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1NnB4O1xyXG4gIH1cclxuICBcclxuICAuZmxleC1zY3JvbGwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaW9uLWNhcmQge1xyXG4gICAgICBmbGV4OiAxIDAgYXV0bztcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnNjcm9sbCB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxuICBcclxuICBmaXYtcmVmcmVzaGVyIHtcclxuICAgIC0tZml2LXNwaW4tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgLS1maXYtaGludC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAvLyAtLWZpdi1zcGluLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQpO1xyXG4gIH1cclxuICBpb24taXRlbSxcclxuICBpb24tbGlzdCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQpO1xyXG4gIH1cclxuICAiLCJpb24tZ3JpZCB7XG4gIG1hcmdpbi10b3A6IDU2cHg7XG59XG5cbi5mbGV4LXNjcm9sbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZmxleC1zY3JvbGwgaW9uLWNhcmQge1xuICBmbGV4OiAxIDAgYXV0bztcbn1cblxuLnNjcm9sbCB7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbmZpdi1yZWZyZXNoZXIge1xuICAtLWZpdi1zcGluLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgLS1maXYtaGludC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbmlvbi1pdGVtLFxuaW9uLWxpc3Qge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RefreshPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-refresh',
                templateUrl: './refresh.page.html',
                styleUrls: ['./refresh.page.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-fivethree-components-refresh-refresh-module-es2015.js.map