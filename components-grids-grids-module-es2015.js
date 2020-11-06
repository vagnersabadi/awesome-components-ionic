(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-grids-grids-module"],{

/***/ "./src/app/pages/samples/components/grids/grids-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/samples/components/grids/grids-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: GridsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridsPageRoutingModule", function() { return GridsPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _grids_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grids.page */ "./src/app/pages/samples/components/grids/grids.page.ts");





const routes = [
    {
        path: '',
        component: _grids_page__WEBPACK_IMPORTED_MODULE_2__["GridsPage"]
    },
    {
        path: 'grid1',
        loadChildren: () => Promise.all(/*! import() | grid1-grid1-module */[__webpack_require__.e("default~grid1-grid1-module~grid4-grid4-module~grid5-grid5-module~grid6-grid6-module~grid7-grid7-module"), __webpack_require__.e("grid1-grid1-module")]).then(__webpack_require__.bind(null, /*! ./grid1/grid1.module */ "./src/app/pages/samples/components/grids/grid1/grid1.module.ts")).then(m => m.Grid1PageModule)
    },
    {
        path: 'grid2',
        loadChildren: () => __webpack_require__.e(/*! import() | grid2-grid2-module */ "grid2-grid2-module").then(__webpack_require__.bind(null, /*! ./grid2/grid2.module */ "./src/app/pages/samples/components/grids/grid2/grid2.module.ts")).then(m => m.Grid2PageModule)
    },
    {
        path: 'grid3',
        loadChildren: () => __webpack_require__.e(/*! import() | grid3-grid3-module */ "grid3-grid3-module").then(__webpack_require__.bind(null, /*! ./grid3/grid3.module */ "./src/app/pages/samples/components/grids/grid3/grid3.module.ts")).then(m => m.Grid3PageModule)
    },
    {
        path: 'grid4',
        loadChildren: () => Promise.all(/*! import() | grid4-grid4-module */[__webpack_require__.e("default~grid1-grid1-module~grid4-grid4-module~grid5-grid5-module~grid6-grid6-module~grid7-grid7-module"), __webpack_require__.e("grid4-grid4-module")]).then(__webpack_require__.bind(null, /*! ./grid4/grid4.module */ "./src/app/pages/samples/components/grids/grid4/grid4.module.ts")).then(m => m.Grid4PageModule)
    },
    {
        path: 'grid5',
        loadChildren: () => Promise.all(/*! import() | grid5-grid5-module */[__webpack_require__.e("default~grid1-grid1-module~grid4-grid4-module~grid5-grid5-module~grid6-grid6-module~grid7-grid7-module"), __webpack_require__.e("grid5-grid5-module")]).then(__webpack_require__.bind(null, /*! ./grid5/grid5.module */ "./src/app/pages/samples/components/grids/grid5/grid5.module.ts")).then(m => m.Grid5PageModule)
    },
    {
        path: 'grid6',
        loadChildren: () => Promise.all(/*! import() | grid6-grid6-module */[__webpack_require__.e("default~grid1-grid1-module~grid4-grid4-module~grid5-grid5-module~grid6-grid6-module~grid7-grid7-module"), __webpack_require__.e("grid6-grid6-module")]).then(__webpack_require__.bind(null, /*! ./grid6/grid6.module */ "./src/app/pages/samples/components/grids/grid6/grid6.module.ts")).then(m => m.Grid6PageModule)
    },
    {
        path: 'grid7',
        loadChildren: () => Promise.all(/*! import() | grid7-grid7-module */[__webpack_require__.e("default~grid1-grid1-module~grid4-grid4-module~grid5-grid5-module~grid6-grid6-module~grid7-grid7-module"), __webpack_require__.e("grid7-grid7-module")]).then(__webpack_require__.bind(null, /*! ./grid7/grid7.module */ "./src/app/pages/samples/components/grids/grid7/grid7.module.ts")).then(m => m.Grid7PageModule)
    }
];
class GridsPageRoutingModule {
}
GridsPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GridsPageRoutingModule });
GridsPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GridsPageRoutingModule_Factory(t) { return new (t || GridsPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GridsPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridsPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/samples/components/grids/grids.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/samples/components/grids/grids.module.ts ***!
  \****************************************************************/
/*! exports provided: GridsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridsPageModule", function() { return GridsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _grids_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grids-routing.module */ "./src/app/pages/samples/components/grids/grids-routing.module.ts");
/* harmony import */ var _grids_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grids.page */ "./src/app/pages/samples/components/grids/grids.page.ts");







class GridsPageModule {
}
GridsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GridsPageModule });
GridsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GridsPageModule_Factory(t) { return new (t || GridsPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _grids_routing_module__WEBPACK_IMPORTED_MODULE_4__["GridsPageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GridsPageModule, { declarations: [_grids_page__WEBPACK_IMPORTED_MODULE_5__["GridsPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        _grids_routing_module__WEBPACK_IMPORTED_MODULE_4__["GridsPageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridsPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                    _grids_routing_module__WEBPACK_IMPORTED_MODULE_4__["GridsPageRoutingModule"]
                ],
                declarations: [_grids_page__WEBPACK_IMPORTED_MODULE_5__["GridsPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/samples/components/grids/grids.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/samples/components/grids/grids.page.ts ***!
  \**************************************************************/
/*! exports provided: GridsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridsPage", function() { return GridsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





function GridsPage_ion_item_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", page_r1.router);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r1.name);
} }
class GridsPage {
    constructor() {
        this.pages = [
            { name: 'Grid 1 - Shop Grid', router: 'grid1' },
            { name: 'Grid 2 - Image Grid', router: 'grid2' },
            { name: 'Grid 3 - Full Width Images', router: 'grid3' },
            { name: 'Grid 4 - Expandable List', router: 'grid4' },
            { name: 'Grid 5 - Masonry Grid', router: 'grid5' },
            { name: 'Grid 6 - Product Grid X3', router: 'grid6' },
            { name: 'Grid 7 - Product Card Grid X2', router: 'grid7' }
        ];
    }
    ngOnInit() {
    }
}
GridsPage.ɵfac = function GridsPage_Factory(t) { return new (t || GridsPage)(); };
GridsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GridsPage, selectors: [["app-grids"]], decls: 8, vars: 1, consts: [["slot", "start"], ["defaultHref", "/samples"], ["details", "", 3, "routerLink", 4, "ngFor", "ngForOf"], ["details", "", 3, "routerLink"]], template: function GridsPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Grids");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GridsPage_ion_item_7_Template, 3, 2, "ion-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pages);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NhbXBsZXMvY29tcG9uZW50cy9ncmlkcy9ncmlkcy5wYWdlLnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridsPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grids',
                templateUrl: './grids.page.html',
                styleUrls: ['./grids.page.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=components-grids-grids-module-es2015.js.map