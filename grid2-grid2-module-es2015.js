(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["grid2-grid2-module"],{

/***/ "./src/app/pages/samples/components/grids/grid2/grid2-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/samples/components/grids/grid2/grid2-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: Grid2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid2PageRoutingModule", function() { return Grid2PageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _grid2_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid2.page */ "./src/app/pages/samples/components/grids/grid2/grid2.page.ts");





const routes = [
    {
        path: '',
        component: _grid2_page__WEBPACK_IMPORTED_MODULE_2__["Grid2Page"]
    }
];
class Grid2PageRoutingModule {
}
Grid2PageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Grid2PageRoutingModule });
Grid2PageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Grid2PageRoutingModule_Factory(t) { return new (t || Grid2PageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Grid2PageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Grid2PageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/samples/components/grids/grid2/grid2.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/samples/components/grids/grid2/grid2.module.ts ***!
  \**********************************************************************/
/*! exports provided: Grid2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid2PageModule", function() { return Grid2PageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _grid2_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grid2-routing.module */ "./src/app/pages/samples/components/grids/grid2/grid2-routing.module.ts");
/* harmony import */ var _grid2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grid2.page */ "./src/app/pages/samples/components/grids/grid2/grid2.page.ts");







class Grid2PageModule {
}
Grid2PageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Grid2PageModule });
Grid2PageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Grid2PageModule_Factory(t) { return new (t || Grid2PageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _grid2_routing_module__WEBPACK_IMPORTED_MODULE_4__["Grid2PageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Grid2PageModule, { declarations: [_grid2_page__WEBPACK_IMPORTED_MODULE_5__["Grid2Page"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        _grid2_routing_module__WEBPACK_IMPORTED_MODULE_4__["Grid2PageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Grid2PageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                    _grid2_routing_module__WEBPACK_IMPORTED_MODULE_4__["Grid2PageRoutingModule"]
                ],
                declarations: [_grid2_page__WEBPACK_IMPORTED_MODULE_5__["Grid2Page"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/samples/components/grids/grid2/grid2.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/samples/components/grids/grid2/grid2.page.ts ***!
  \********************************************************************/
/*! exports provided: Grid2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid2Page", function() { return Grid2Page; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function (a0) { return { "background-image": a0 }; };
function Grid2Page_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, "url(" + p_r1.image + ")"));
} }
class Grid2Page {
    constructor() {
        this.topLevelSagment = 'image';
        this.gridImages = [
            { image: 'assets/samples/products/gallery1.jpg' },
            { image: 'assets/samples/products/gallery2.jpg' },
            { image: 'assets/samples/products/gallery3.jpg' },
            { image: 'assets/samples/products/gallery8.jpg' },
            { image: 'assets/samples/products/gallery5.jpg' },
            { image: 'assets/samples/products/gallery1.jpg' },
            { image: 'assets/samples/products/gallery7.jpg' },
            { image: 'assets/samples/products/gallery8.jpg' },
            { image: 'assets/samples/products/gallery1.jpg' },
            { image: 'assets/samples/products/gallery2.jpg' },
            { image: 'assets/samples/products/gallery3.jpg' },
            { image: 'assets/samples/products/gallery8.jpg' },
            { image: 'assets/samples/products/gallery5.jpg' },
            { image: 'assets/samples/products/gallery1.jpg' }
        ];
    }
    ngOnInit() {
    }
    segmentChanged(ev) {
        console.log('Segment changed', ev);
        this.headerName = ev.detail.value;
        console.log(this.headerName + 'here');
        this.topLevelSagment = this.headerName;
        console.log('topLevelSagment ' + this.topLevelSagment);
    }
}
Grid2Page.ɵfac = function Grid2Page_Factory(t) { return new (t || Grid2Page)(); };
Grid2Page.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Grid2Page, selectors: [["app-grid2"]], decls: 10, vars: 1, consts: [["slot", "start"], ["defaultHref", "/grids"], ["no-padding", "", 4, "ngFor", "ngForOf"], ["no-padding", ""], [1, "square-grid", 3, "ngStyle"]], template: function Grid2Page_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Image Grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, Grid2Page_div_9_Template, 2, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gridImages);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRow"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: [".square-grid[_ngcontent-%COMP%] {\n  width: 48vw;\n  height: 48vw;\n  background-position: center;\n  background-size: cover;\n  max-width: 250px;\n  max-height: 250px;\n}\n\n.sc-ion-segment-md-h[_ngcontent-%COMP%], .sc-ion-segment-ios-h[_ngcontent-%COMP%] {\n  --background: var(--ion-color-primary,#1DA1F2);\n  --background-checked: white;\n  --border-color: rgba(0,0,0,0.1);\n  --color: white;\n  --color-checked:var(--ion-color-primary,#1DA1F2);\n}\n\nion-segment-button[_ngcontent-%COMP%] {\n  border-radius: 0 !important;\n}\n\nion-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2FtcGxlcy9jb21wb25lbnRzL2dyaWRzL2dyaWQyL0M6XFxVc2Vyc1xcVmFnbmVyIFNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZWN0c1xcX015XFxhd2Vzb21lLWNvbXBvbmVudHMtaW9uaWMvc3JjXFxhcHBcXHBhZ2VzXFxzYW1wbGVzXFxjb21wb25lbnRzXFxncmlkc1xcZ3JpZDJcXGdyaWQyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2FtcGxlcy9jb21wb25lbnRzL2dyaWRzL2dyaWQyL2dyaWQyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDRTtFQUNJLDhDQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLGNBQUE7RUFDQSxnREFBQTtBQ0VOOztBRENJO0VBQ0UsMkJBQUE7QUNFTjs7QURBSTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtBQ0dOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2FtcGxlcy9jb21wb25lbnRzL2dyaWRzL2dyaWQyL2dyaWQyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcXVhcmUtZ3JpZHtcclxuICAgIHdpZHRoOiA0OHZ3O1xyXG4gICAgaGVpZ2h0OiA0OHZ3O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIG1heC13aWR0aDogMjUwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAyNTBweDtcclxuICB9XHJcbiAgLnNjLWlvbi1zZWdtZW50LW1kLWgsLnNjLWlvbi1zZWdtZW50LWlvcy1oIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiAgdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzFEQTFGMik7XHJcbiAgICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB3aGl0ZTtcclxuICAgICAgLS1ib3JkZXItY29sb3I6IHJnYmEoMCwwLDAsMC4xKTtcclxuICAgICAgLS1jb2xvcjogd2hpdGU7XHJcbiAgICAgIC0tY29sb3ItY2hlY2tlZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMURBMUYyKTs7XHJcbiAgICAgIC8vbWFyZ2luLXRvcDogMzBweDtcclxuICAgIH1cclxuICAgIGlvbi1zZWdtZW50LWJ1dHRvbntcclxuICAgICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgaW9uLXJvd3tcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICB9IiwiLnNxdWFyZS1ncmlkIHtcbiAgd2lkdGg6IDQ4dnc7XG4gIGhlaWdodDogNDh2dztcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBtYXgtd2lkdGg6IDI1MHB4O1xuICBtYXgtaGVpZ2h0OiAyNTBweDtcbn1cblxuLnNjLWlvbi1zZWdtZW50LW1kLWgsIC5zYy1pb24tc2VnbWVudC1pb3MtaCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzFEQTFGMik7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiB3aGl0ZTtcbiAgLS1ib3JkZXItY29sb3I6IHJnYmEoMCwwLDAsMC4xKTtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIC0tY29sb3ItY2hlY2tlZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMURBMUYyKTtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xufVxuXG5pb24tcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Grid2Page, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grid2',
                templateUrl: './grid2.page.html',
                styleUrls: ['./grid2.page.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=grid2-grid2-module-es2015.js.map