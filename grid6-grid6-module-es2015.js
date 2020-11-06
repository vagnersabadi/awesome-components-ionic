(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["grid6-grid6-module"],{

/***/ "./src/app/pages/samples/components/grids/grid6/grid6-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/samples/components/grids/grid6/grid6-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: Grid6PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid6PageRoutingModule", function() { return Grid6PageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _grid6_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid6.page */ "./src/app/pages/samples/components/grids/grid6/grid6.page.ts");





const routes = [
    {
        path: '',
        component: _grid6_page__WEBPACK_IMPORTED_MODULE_2__["Grid6Page"]
    }
];
class Grid6PageRoutingModule {
}
Grid6PageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Grid6PageRoutingModule });
Grid6PageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Grid6PageRoutingModule_Factory(t) { return new (t || Grid6PageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Grid6PageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Grid6PageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/samples/components/grids/grid6/grid6.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/samples/components/grids/grid6/grid6.module.ts ***!
  \**********************************************************************/
/*! exports provided: Grid6PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid6PageModule", function() { return Grid6PageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _grid6_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grid6-routing.module */ "./src/app/pages/samples/components/grids/grid6/grid6-routing.module.ts");
/* harmony import */ var _grid6_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grid6.page */ "./src/app/pages/samples/components/grids/grid6/grid6.page.ts");







class Grid6PageModule {
}
Grid6PageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Grid6PageModule });
Grid6PageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Grid6PageModule_Factory(t) { return new (t || Grid6PageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _grid6_routing_module__WEBPACK_IMPORTED_MODULE_4__["Grid6PageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Grid6PageModule, { declarations: [_grid6_page__WEBPACK_IMPORTED_MODULE_5__["Grid6Page"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        _grid6_routing_module__WEBPACK_IMPORTED_MODULE_4__["Grid6PageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Grid6PageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                    _grid6_routing_module__WEBPACK_IMPORTED_MODULE_4__["Grid6PageRoutingModule"]
                ],
                declarations: [_grid6_page__WEBPACK_IMPORTED_MODULE_5__["Grid6Page"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/samples/components/grids/grid6/grid6.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/samples/components/grids/grid6/grid6.page.ts ***!
  \********************************************************************/
/*! exports provided: Grid6Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid6Page", function() { return Grid6Page; });
/* harmony import */ var _services_grid_grid_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../../services/grid/grid-service.service */ "./src/app/services/grid/grid-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function Grid6Page_ion_col_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.title);
} }
class Grid6Page {
    constructor(gridServ) {
        this.gridServ = gridServ;
        this.medicines = this.gridServ.medicines;
    }
    ngOnInit() {
    }
}
Grid6Page.ɵfac = function Grid6Page_Factory(t) { return new (t || Grid6Page)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_grid_grid_service_service__WEBPACK_IMPORTED_MODULE_0__["GridServiceService"])); };
Grid6Page.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: Grid6Page, selectors: [["app-grid6"]], decls: 9, vars: 1, consts: [["slot", "start"], ["defaultHref", "/grids"], [1, "title-ios"], ["margin-top", "", "margin-bottom", ""], ["size", "4", 4, "ngFor", "ngForOf"], ["size", "4"], ["margin-top", "", 1, "cardSection"], [3, "src"], [1, "contentText"]], template: function Grid6Page_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Product Grid X3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-row", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, Grid6Page_ion_col_8_Template, 6, 2, "ion-col", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.medicines);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCardContent"]], styles: ["ion-content[_ngcontent-%COMP%] {\n  --background:#eaeaea;\n}\n\n.cardSection[_ngcontent-%COMP%] {\n  background: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n}\n\n.cardSection[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 75%;\n  margin-top: 16px;\n}\n\n.cardSection[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%] {\n  padding: 16px 5px;\n}\n\n.contentText[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: bold;\n  color: #4e4343;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2FtcGxlcy9jb21wb25lbnRzL2dyaWRzL2dyaWQ2L0M6XFxVc2Vyc1xcVmFnbmVyIFNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZWN0c1xcX015XFxhd2Vzb21lLWNvbXBvbmVudHMtaW9uaWMvc3JjXFxhcHBcXHBhZ2VzXFxzYW1wbGVzXFxjb21wb25lbnRzXFxncmlkc1xcZ3JpZDZcXGdyaWQ2LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2FtcGxlcy9jb21wb25lbnRzL2dyaWRzL2dyaWQ2L2dyaWQ2LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLG9CQUFBO0FDQUo7O0FER0U7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FDQUo7O0FERUk7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUNBUjs7QURHSTtFQUNJLGlCQUFBO0FDRFI7O0FESUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zYW1wbGVzL2NvbXBvbmVudHMvZ3JpZHMvZ3JpZDYvZ3JpZDYucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNlYWVhZWE7XHJcbiAgfVxyXG5cclxuICAuY2FyZFNlY3Rpb257XHJcbiAgICBiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjowO1xyXG5cclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWNhcmQtY29udGVudHtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4IDVweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmNvbnRlbnRUZXh0e1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzRlNDM0MztcclxuICB9IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6I2VhZWFlYTtcbn1cblxuLmNhcmRTZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbn1cbi5jYXJkU2VjdGlvbiBpbWcge1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuLmNhcmRTZWN0aW9uIGlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxNnB4IDVweDtcbn1cblxuLmNvbnRlbnRUZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM0ZTQzNDM7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Grid6Page, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-grid6',
                templateUrl: './grid6.page.html',
                styleUrls: ['./grid6.page.scss'],
            }]
    }], function () { return [{ type: _services_grid_grid_service_service__WEBPACK_IMPORTED_MODULE_0__["GridServiceService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=grid6-grid6-module-es2015.js.map