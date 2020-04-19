(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["grid3-grid3-module"],{

/***/ "./src/app/pages/samples/components/grids/grid3/grid3-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/samples/components/grids/grid3/grid3-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: Grid3PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid3PageRoutingModule", function() { return Grid3PageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _grid3_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid3.page */ "./src/app/pages/samples/components/grids/grid3/grid3.page.ts");





const routes = [
    {
        path: '',
        component: _grid3_page__WEBPACK_IMPORTED_MODULE_2__["Grid3Page"]
    }
];
class Grid3PageRoutingModule {
}
Grid3PageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Grid3PageRoutingModule });
Grid3PageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Grid3PageRoutingModule_Factory(t) { return new (t || Grid3PageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Grid3PageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Grid3PageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/samples/components/grids/grid3/grid3.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/samples/components/grids/grid3/grid3.module.ts ***!
  \**********************************************************************/
/*! exports provided: Grid3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid3PageModule", function() { return Grid3PageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _grid3_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grid3-routing.module */ "./src/app/pages/samples/components/grids/grid3/grid3-routing.module.ts");
/* harmony import */ var _grid3_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grid3.page */ "./src/app/pages/samples/components/grids/grid3/grid3.page.ts");







class Grid3PageModule {
}
Grid3PageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Grid3PageModule });
Grid3PageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Grid3PageModule_Factory(t) { return new (t || Grid3PageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _grid3_routing_module__WEBPACK_IMPORTED_MODULE_4__["Grid3PageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Grid3PageModule, { declarations: [_grid3_page__WEBPACK_IMPORTED_MODULE_5__["Grid3Page"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        _grid3_routing_module__WEBPACK_IMPORTED_MODULE_4__["Grid3PageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Grid3PageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                    _grid3_routing_module__WEBPACK_IMPORTED_MODULE_4__["Grid3PageRoutingModule"]
                ],
                declarations: [_grid3_page__WEBPACK_IMPORTED_MODULE_5__["Grid3Page"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/samples/components/grids/grid3/grid3.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/samples/components/grids/grid3/grid3.page.ts ***!
  \********************************************************************/
/*! exports provided: Grid3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid3Page", function() { return Grid3Page; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function (a0) { return { "background-image": a0, "background-repeat": "no-repeat", "height": "40% 100px", "background-size": "cover " }; };
function Grid3Page_ion_item_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r393 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, "linear-gradient(0deg,rgba(88, 87, 88, 0.3),rgba(94, 93, 94, 0.3)),url(" + p_r393.image + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r393.title);
} }
class Grid3Page {
    constructor() {
        this.gridImages = [
            { title: 'V I N Y A S A', image: 'assets/samples/products/vinyasa.jpg' },
            { title: 'A S H T A N G A', image: 'assets/samples/products/ashtanga.jpg' },
            { title: 'I Y E N G A R', image: 'assets/samples/products/gallery7.jpg' },
            { title: 'B I K R A M', image: 'assets/samples/products/bikram.jpg' },
            { title: 'J I V A M U K T I', image: 'assets/samples/products/jivamukti.jpg' },
            { title: 'P O W E R', image: 'assets/samples/products/power.jpg' },
            { title: 'S I V A N A N D A', image: 'assets/samples/products/sivananda.jpg' },
            { title: 'Y I N', image: 'assets/samples/products/yin.jpg' },
        ];
    }
    ngOnInit() {
    }
}
Grid3Page.ɵfac = function Grid3Page_Factory(t) { return new (t || Grid3Page)(); };
Grid3Page.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Grid3Page, selectors: [["app-grid3"]], decls: 9, vars: 1, consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "/grids"], [1, "title-ios"], ["no-lines", "", "ion-item", "", "no-padding", "", "mode", "md", 4, "ngFor", "ngForOf"], ["no-lines", "", "ion-item", "", "no-padding", "", "mode", "md"], [1, "imagediv", 3, "ngStyle"], [1, "inner"]], template: function Grid3Page_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Full Width Images");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, Grid3Page_ion_item_8_Template, 6, 4, "ion-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gridImages);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: ["[_nghost-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --background: transparent;\n  --color: white;\n  position: absolute;\n}\n\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  --background-size: cover;\n}\n\n[_nghost-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --border-style: none;\n  --inner-padding-end: 0;\n  --padding-start: 0;\n  font-family: Source Code Pro !important;\n}\n\n.scroll-content[_ngcontent-%COMP%] {\n  padding-top: 0 !important;\n}\n\n.label[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nion-button[_ngcontent-%COMP%] {\n  --background: transparent;\n  --box-shadow: none;\n  --background-activated: #f5f6f900;\n  --background-focused: #3171e000;\n  font-family: Source Code Pro !important;\n  font-size: medium;\n  font-weight: bold;\n}\n\n[_nghost-%COMP%]   .imagediv[_ngcontent-%COMP%] {\n  height: 200px;\n  justify-content: center;\n  display: flex;\n  vertical-align: middle;\n  align-items: center;\n  width: 100%;\n  font-size: 30px;\n  color: white;\n}\n\n.list-md[_ngcontent-%COMP%], .list-ios[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0px 0;\n  padding-bottom: 53px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2FtcGxlcy9jb21wb25lbnRzL2dyaWRzL2dyaWQzL0M6XFxVc2Vyc1xcc2FiYWRpXFxEb2N1bWVudHNcXFByb2pldG9zXFxfaW9uaWNcXGlvbmljNC1jb21wb25lbnRzL3NyY1xcYXBwXFxwYWdlc1xcc2FtcGxlc1xcY29tcG9uZW50c1xcZ3JpZHNcXGdyaWQzXFxncmlkMy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NhbXBsZXMvY29tcG9uZW50cy9ncmlkcy9ncmlkMy9ncmlkMy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVFO0VBQ0Usd0JBQUE7QUNDSjs7QURJRTtFQUNFLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO0FDREo7O0FESUE7RUFDRSx5QkFBQTtBQ0RGOztBREdBO0VBQ0UsU0FBQTtBQ0FGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsK0JBQUE7RUFDQSx1Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7O0VBRUUsU0FBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2FtcGxlcy9jb21wb25lbnRzL2dyaWRzL2dyaWQzL2dyaWQzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IGlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIC0tY29sb3I6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG46aG9zdCB7XHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byBib3R0b20gLCAjNDI5RUI2LCNmZmZmZmYpO1xyXG4gIH1cclxufVxyXG46aG9zdCB7XHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgLS1ib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFNvdXJjZSBDb2RlIFBybyAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4uc2Nyb2xsLWNvbnRlbnQge1xyXG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmxhYmVsIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuaW9uLWJ1dHRvbiB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2Y1ZjZmOTAwO1xyXG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjMzE3MWUwMDA7XHJcbiAgZm9udC1mYW1pbHk6IFNvdXJjZSBDb2RlIFBybyAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbjpob3N0IHtcclxuICAuaW1hZ2VkaXYge1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG59XHJcbi5saXN0LW1kLFxyXG4ubGlzdC1pb3Mge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwcHggMDtcclxuICBwYWRkaW5nLWJvdHRvbTogNTNweDtcclxuICAvLyAgYmFja2dyb3VuZDogdmFyKC0taW9uLXRhYmJhci10ZXh0LWNvbG9yKTtcclxuICAvL2JhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsI2ZmZikpO1xyXG59XHJcbiIsIjpob3N0IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuOmhvc3QgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbjpob3N0IGlvbi1pdGVtIHtcbiAgLS1ib3JkZXItc3R5bGU6IG5vbmU7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgZm9udC1mYW1pbHk6IFNvdXJjZSBDb2RlIFBybyAhaW1wb3J0YW50O1xufVxuXG4uc2Nyb2xsLWNvbnRlbnQge1xuICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xufVxuXG4ubGFiZWwge1xuICBtYXJnaW46IDA7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmNWY2ZjkwMDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICMzMTcxZTAwMDtcbiAgZm9udC1mYW1pbHk6IFNvdXJjZSBDb2RlIFBybyAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbjpob3N0IC5pbWFnZWRpdiB7XG4gIGhlaWdodDogMjAwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5saXN0LW1kLFxuLmxpc3QtaW9zIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwcHggMDtcbiAgcGFkZGluZy1ib3R0b206IDUzcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Grid3Page, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grid3',
                templateUrl: './grid3.page.html',
                styleUrls: ['./grid3.page.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=grid3-grid3-module-es2015.js.map