(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-clones-ui-clones-ui-module"],{

/***/ "./src/app/pages/clones-ui/clones-ui-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/clones-ui/clones-ui-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ClonesUiPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClonesUiPageRoutingModule", function() { return ClonesUiPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _clones_ui_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clones-ui.page */ "./src/app/pages/clones-ui/clones-ui.page.ts");





const routes = [
    {
        path: '',
        component: _clones_ui_page__WEBPACK_IMPORTED_MODULE_2__["ClonesUiPage"]
    },
    {
        path: 'instagram',
        loadChildren: () => __webpack_require__.e(/*! import() | components-instagram-instagram-module */ "components-instagram-instagram-module").then(__webpack_require__.bind(null, /*! ./components/instagram/instagram.module */ "./src/app/pages/clones-ui/components/instagram/instagram.module.ts")).then(m => m.InstagramPageModule)
    },
    {
        path: 'netflix',
        loadChildren: () => __webpack_require__.e(/*! import() | components-netflix-netflix-module */ "components-netflix-netflix-module").then(__webpack_require__.bind(null, /*! ./components/netflix/netflix.module */ "./src/app/pages/clones-ui/components/netflix/netflix.module.ts")).then(m => m.NetflixPageModule)
    },
    {
        path: 'uber',
        loadChildren: () => __webpack_require__.e(/*! import() | components-uber-uber-module */ "components-uber-uber-module").then(__webpack_require__.bind(null, /*! ./components/uber/uber.module */ "./src/app/pages/clones-ui/components/uber/uber.module.ts")).then(m => m.UberPageModule)
    },
    {
        path: 'whatsapp',
        loadChildren: () => __webpack_require__.e(/*! import() | components-whatsapp-whatsapp-module */ "components-whatsapp-whatsapp-module").then(__webpack_require__.bind(null, /*! ./components/whatsapp/whatsapp.module */ "./src/app/pages/clones-ui/components/whatsapp/whatsapp.module.ts")).then(m => m.WhatsappPageModule)
    },
    {
        path: 'tinder',
        loadChildren: () => __webpack_require__.e(/*! import() | components-tinder-tinder-module */ "components-tinder-tinder-module").then(__webpack_require__.bind(null, /*! ./components/tinder/tinder.module */ "./src/app/pages/clones-ui/components/tinder/tinder.module.ts")).then(m => m.TinderPageModule)
    }
];
class ClonesUiPageRoutingModule {
}
ClonesUiPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ClonesUiPageRoutingModule });
ClonesUiPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ClonesUiPageRoutingModule_Factory(t) { return new (t || ClonesUiPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ClonesUiPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClonesUiPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/clones-ui/clones-ui.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/clones-ui/clones-ui.module.ts ***!
  \*****************************************************/
/*! exports provided: ClonesUiPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClonesUiPageModule", function() { return ClonesUiPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _clones_ui_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clones-ui-routing.module */ "./src/app/pages/clones-ui/clones-ui-routing.module.ts");
/* harmony import */ var _clones_ui_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clones-ui.page */ "./src/app/pages/clones-ui/clones-ui.page.ts");







class ClonesUiPageModule {
}
ClonesUiPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ClonesUiPageModule });
ClonesUiPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ClonesUiPageModule_Factory(t) { return new (t || ClonesUiPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _clones_ui_routing_module__WEBPACK_IMPORTED_MODULE_4__["ClonesUiPageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ClonesUiPageModule, { declarations: [_clones_ui_page__WEBPACK_IMPORTED_MODULE_5__["ClonesUiPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        _clones_ui_routing_module__WEBPACK_IMPORTED_MODULE_4__["ClonesUiPageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClonesUiPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                    _clones_ui_routing_module__WEBPACK_IMPORTED_MODULE_4__["ClonesUiPageRoutingModule"]
                ],
                declarations: [_clones_ui_page__WEBPACK_IMPORTED_MODULE_5__["ClonesUiPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/clones-ui/clones-ui.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/clones-ui/clones-ui.page.ts ***!
  \***************************************************/
/*! exports provided: ClonesUiPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClonesUiPage", function() { return ClonesUiPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const _c0 = function (a0) { return [a0]; };
function ClonesUiPage_ion_item_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r420 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r420.router));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r420.namePage, " ");
} }
class ClonesUiPage {
    constructor() {
        this.pages = [
            {
                namePage: 'Instagram',
                router: '/clones-ui/instagram',
            },
            {
                namePage: 'Netflix',
                router: '/clones-ui/netflix',
            },
            {
                namePage: 'Uber',
                router: '/clones-ui/uber',
            },
            {
                namePage: 'Whatsapp',
                router: '/clones-ui/whatsapp',
            },
            {
                namePage: 'Tinder',
                router: '/clones-ui/tinder',
            },
        ];
    }
    ngOnInit() {
    }
}
ClonesUiPage.ɵfac = function ClonesUiPage_Factory(t) { return new (t || ClonesUiPage)(); };
ClonesUiPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClonesUiPage, selectors: [["app-clones-ui"]], decls: 16, vars: 1, consts: [["slot", "start"], [1, "ion-text-wrap"], ["detail", "", 3, "routerLink", 4, "ngFor", "ngForOf"], ["detail", "", 3, "routerLink"]], template: function ClonesUiPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-menu-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Clones UI ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Main apps interfaces ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Interfaces (UI) of some applications used daily, and known. Using ionic structure. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ClonesUiPage_ion_item_15_Template, 3, 4, "ion-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pages);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonMenuButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCardHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCardTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Nsb25lcy11aS9jbG9uZXMtdWkucGFnZS5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClonesUiPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-clones-ui',
                templateUrl: './clones-ui.page.html',
                styleUrls: ['./clones-ui.page.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-clones-ui-clones-ui-module-es2015.js.map