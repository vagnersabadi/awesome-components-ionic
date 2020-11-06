(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-fivethree-components-app-bar-app-bar-module"],{

/***/ "./src/app/pages/fivethree/components/app-bar/app-bar-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/fivethree/components/app-bar/app-bar-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: AppBarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBarPageRoutingModule", function() { return AppBarPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_bar_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-bar.page */ "./src/app/pages/fivethree/components/app-bar/app-bar.page.ts");





const routes = [
    {
        path: '',
        component: _app_bar_page__WEBPACK_IMPORTED_MODULE_2__["AppBarPage"]
    }
];
class AppBarPageRoutingModule {
}
AppBarPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppBarPageRoutingModule });
AppBarPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppBarPageRoutingModule_Factory(t) { return new (t || AppBarPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppBarPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppBarPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/fivethree/components/app-bar/app-bar.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/fivethree/components/app-bar/app-bar.module.ts ***!
  \**********************************************************************/
/*! exports provided: AppBarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBarPageModule", function() { return AppBarPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _app_bar_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-bar-routing.module */ "./src/app/pages/fivethree/components/app-bar/app-bar-routing.module.ts");
/* harmony import */ var _app_bar_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-bar.page */ "./src/app/pages/fivethree/components/app-bar/app-bar.page.ts");
/* harmony import */ var _fivethree_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fivethree/core */ "./node_modules/@fivethree/core/__ivy_ngcc__/fesm2015/fivethree-core.js");








class AppBarPageModule {
}
AppBarPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppBarPageModule });
AppBarPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppBarPageModule_Factory(t) { return new (t || AppBarPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _app_bar_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppBarPageRoutingModule"],
            _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivAppBarModule"],
            _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivCenterModule"],
            _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivIfModule"],
            _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivFabModule"],
            _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivIconModule"],
            _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivFeatureDiscoveryModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppBarPageModule, { declarations: [_app_bar_page__WEBPACK_IMPORTED_MODULE_5__["AppBarPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        _app_bar_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppBarPageRoutingModule"],
        _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivAppBarModule"],
        _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivCenterModule"],
        _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivIfModule"],
        _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivFabModule"],
        _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivIconModule"],
        _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivFeatureDiscoveryModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppBarPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                    _app_bar_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppBarPageRoutingModule"],
                    _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivAppBarModule"],
                    _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivCenterModule"],
                    _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivIfModule"],
                    _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivFabModule"],
                    _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivIconModule"],
                    _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivFeatureDiscoveryModule"]
                ],
                declarations: [_app_bar_page__WEBPACK_IMPORTED_MODULE_5__["AppBarPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/fivethree/components/app-bar/app-bar.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/fivethree/components/app-bar/app-bar.page.ts ***!
  \********************************************************************/
/*! exports provided: AppBarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBarPage", function() { return AppBarPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _fivethree_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fivethree/core */ "./node_modules/@fivethree/core/__ivy_ngcc__/fesm2015/fivethree-core.js");




class AppBarPage {
    constructor() {
        this.titleMode = 'hide';
        this.position = 'center';
    }
    ngOnInit() { }
}
AppBarPage.ɵfac = function AppBarPage_Factory(t) { return new (t || AppBarPage)(); };
AppBarPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppBarPage, selectors: [["app-app-bar"]], decls: 30, vars: 2, consts: [["slot", "start"], ["defaultHref", "/fivethree"], ["tabs", ""], ["slot", "bottom"], ["bar", ""], [3, "fivAppBarFab"], ["fab", ""], ["name", "color-wand"], ["left", "", "tab", "tab1", "href", "#"], ["name", "home"], ["left", "", "tab", "tab2", "href", "#"], ["name", "images"], ["right", "", "tab", "tab3", "href", "#"], ["name", "pizza", 3, "badge"], ["right", "", "tab", "tab4", "href", "#"], ["name", "chatbox-ellipses"]], template: function AppBarPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "App Bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-tabs", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "fiv-app-bar", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "fiv-fab", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "fiv-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "fiv-app-bar-tab", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "fiv-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "fiv-app-bar-tab", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "fiv-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Images");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "fiv-app-bar-tab", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "fiv-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Pizza");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "fiv-app-bar-tab", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "fiv-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fivAppBarFab", ctx.position);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("badge", 1);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTabs"], _fivethree_core__WEBPACK_IMPORTED_MODULE_2__["FivAppBar"], _fivethree_core__WEBPACK_IMPORTED_MODULE_2__["FivFab"], _fivethree_core__WEBPACK_IMPORTED_MODULE_2__["FivAppBarFabDirective"], _fivethree_core__WEBPACK_IMPORTED_MODULE_2__["FivIcon"], _fivethree_core__WEBPACK_IMPORTED_MODULE_2__["FivAppBarTab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"]], styles: [".container.min[_ngcontent-%COMP%] {\n  min-height: 70vh;\n  max-width: 411px;\n  display: block;\n  position: relative;\n  margin: 0 auto;\n  border: 2px solid var(--ion-color-dark);\n  cursor: url(/assets/icon/cursor.png), auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZml2ZXRocmVlL2NvbXBvbmVudHMvYXBwLWJhci9DOlxcVXNlcnNcXFZhZ25lciBTYWJhZGlcXERvY3VtZW50c1xcUHJvamVjdHNcXF9NeVxcYXdlc29tZS1jb21wb25lbnRzLWlvbmljL3NyY1xcYXBwXFxwYWdlc1xcZml2ZXRocmVlXFxjb21wb25lbnRzXFxhcHAtYmFyXFxhcHAtYmFyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZml2ZXRocmVlL2NvbXBvbmVudHMvYXBwLWJhci9hcHAtYmFyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUNBQUE7RUFDQSwwQ0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZml2ZXRocmVlL2NvbXBvbmVudHMvYXBwLWJhci9hcHAtYmFyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIubWluIHtcclxuICAgIG1pbi1oZWlnaHQ6IDcwdmg7XHJcbiAgICBtYXgtd2lkdGg6IDQxMXB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgIGN1cnNvcjogdXJsKC9hc3NldHMvaWNvbi9jdXJzb3IucG5nKSwgYXV0bztcclxuICB9XHJcbiAgXHJcbiAgZml2LWFwcC1iYXIge1xyXG4gICAgLy8gLS1maXYtaWNvbi1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgLy8gLS1maXYtc21hbGwtaWNvbi1iYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbiAgICAvLyAtLWZpdi1zbWFsbC1pY29uLWNvbG9yOiByZWQ7XHJcbiAgXHJcbiAgICAvLyAtLWZpdi1iYWRnZS1iYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbiAgICAvLyAtLWZpdi1iYWRnZS1jb2xvcjogcmVkO1xyXG4gIFxyXG4gICAgLy8gLS1maXYtZG90LWJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxuICBcclxuICAgIC8vIC0tZml2LWljb24tYWN0aXYtY29sb3I6IHJlZDtcclxuICB9XHJcbiAgIiwiLmNvbnRhaW5lci5taW4ge1xuICBtaW4taGVpZ2h0OiA3MHZoO1xuICBtYXgtd2lkdGg6IDQxMXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICBjdXJzb3I6IHVybCgvYXNzZXRzL2ljb24vY3Vyc29yLnBuZyksIGF1dG87XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppBarPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-app-bar',
                templateUrl: './app-bar.page.html',
                styleUrls: ['./app-bar.page.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-fivethree-components-app-bar-app-bar-module-es2015.js.map