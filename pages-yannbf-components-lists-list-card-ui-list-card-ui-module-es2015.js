(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-lists-list-card-ui-list-card-ui-module"],{

/***/ "./src/app/pages/yannbf/components/lists/list-card-ui/list-card-ui-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/lists/list-card-ui/list-card-ui-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: ListCardUiPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCardUiPageRoutingModule", function() { return ListCardUiPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _list_card_ui_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-card-ui.page */ "./src/app/pages/yannbf/components/lists/list-card-ui/list-card-ui.page.ts");





const routes = [
    {
        path: '',
        component: _list_card_ui_page__WEBPACK_IMPORTED_MODULE_2__["ListCardUiPage"]
    }
];
class ListCardUiPageRoutingModule {
}
ListCardUiPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ListCardUiPageRoutingModule });
ListCardUiPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ListCardUiPageRoutingModule_Factory(t) { return new (t || ListCardUiPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ListCardUiPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListCardUiPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/yannbf/components/lists/list-card-ui/list-card-ui.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/lists/list-card-ui/list-card-ui.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ListCardUiPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCardUiPageModule", function() { return ListCardUiPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _list_card_ui_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-card-ui-routing.module */ "./src/app/pages/yannbf/components/lists/list-card-ui/list-card-ui-routing.module.ts");
/* harmony import */ var _list_card_ui_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-card-ui.page */ "./src/app/pages/yannbf/components/lists/list-card-ui/list-card-ui.page.ts");







class ListCardUiPageModule {
}
ListCardUiPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ListCardUiPageModule });
ListCardUiPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ListCardUiPageModule_Factory(t) { return new (t || ListCardUiPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _list_card_ui_routing_module__WEBPACK_IMPORTED_MODULE_4__["ListCardUiPageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ListCardUiPageModule, { declarations: [_list_card_ui_page__WEBPACK_IMPORTED_MODULE_5__["ListCardUiPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        _list_card_ui_routing_module__WEBPACK_IMPORTED_MODULE_4__["ListCardUiPageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListCardUiPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                    _list_card_ui_routing_module__WEBPACK_IMPORTED_MODULE_4__["ListCardUiPageRoutingModule"]
                ],
                declarations: [_list_card_ui_page__WEBPACK_IMPORTED_MODULE_5__["ListCardUiPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/yannbf/components/lists/list-card-ui/list-card-ui.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/lists/list-card-ui/list-card-ui.page.ts ***!
  \*********************************************************************************/
/*! exports provided: ListCardUiPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCardUiPage", function() { return ListCardUiPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function ListCardUiPage_ion_card_17_ion_icon_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-icon", 16);
} }
const _c0 = function () { return [1, 2, 3, 4, 5]; };
function ListCardUiPage_ion_card_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-col", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ListCardUiPage_ion_card_17_ion_icon_11_Template, 1, 0, "ion-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-col", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r269 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", i_r269.imagemUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r269.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r269.descricao);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("R$ ", i_r269.preco, "");
} }
function ListCardUiPage_ion_card_27_ion_icon_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-icon", 16);
} }
function ListCardUiPage_ion_card_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-card", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-col", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ListCardUiPage_ion_card_27_ion_icon_11_Template, 1, 0, "ion-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-col", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r272 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", i_r272.imagemUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r272.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r272.descricao);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("R$ ", i_r272.preco, "");
} }
function ListCardUiPage_ion_card_36_ion_icon_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-icon", 16);
} }
function ListCardUiPage_ion_card_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-col", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ListCardUiPage_ion_card_36_ion_icon_11_Template, 1, 0, "ion-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-col", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r275 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", i_r275.imagemUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r275.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r275.descricao);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("R$ ", i_r275.preco, "");
} }
function ListCardUiPage_ion_card_45_ion_icon_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-icon", 16);
} }
function ListCardUiPage_ion_card_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-col", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ListCardUiPage_ion_card_45_ion_icon_11_Template, 1, 0, "ion-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-col", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r278 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", i_r278.imagemUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r278.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r278.descricao);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("R$ ", i_r278.preco, "");
} }
class ListCardUiPage {
    constructor() {
        this.menu = 'bolos';
        this.bolos = [
            { preco: "25,00", nome: "Bolo Fofo de Especiarias", imagemUrl: "./assets/yannbf/img/listscards/bolo01.jpeg", descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " },
            { preco: "22,00", nome: "Bolo de Rolo", imagemUrl: "./assets/yannbf/img/listscards/bolo02.jpeg", descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " },
            { preco: "20,00", nome: "Bolo Fofo de Limão", imagemUrl: "./assets/yannbf/img/listscards/bolo03.jpeg", descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " },
            { preco: "23,00", nome: "Bolo Fofo de Especiarias", imagemUrl: "./assets/yannbf/img/listscards/bolo04.jpeg", descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " },
            { preco: "30,00", nome: "Bolo Fofo de Fubar com Goiaba", imagemUrl: "./assets/yannbf/img/listscards/bolo05.jpeg", descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " }
        ];
        this.doces = [
            { preco: "30,00", nome: "Chessescake com frutas vermelhas", imagemUrl: "./assets/yannbf/img/listscards/doce01.jpeg", descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " },
            { preco: "33,00", nome: "Mousse de Chocolate com Frutas Vermelhas", imagemUrl: "./assets/yannbf/img/listscards/doce02.jpeg", descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " },
            { preco: "39,00", nome: "Bolo Fofo de Limão", imagemUrl: "./assets/yannbf/img/listscards/bolo03.jpeg", descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " },
            { preco: "43,00", nome: "Bolo Fofo de Especiarias", imagemUrl: "./assets/yannbf/img/listscards/bolo04.jpeg", descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " },
            { preco: "31,60", nome: "Bolo Fofo de Fubar com Goiaba", imagemUrl: "./assets/yannbf/img/listscards/bolo05.jpeg", descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " }
        ];
        this.salgados = [
            { preco: "12,50", nome: "TORTINHA DE PALMITO 140 GRAMAS", imagemUrl: "./assets/yannbf/img/listscards/salgado01.jpg", descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " },
            { preco: "33,50", nome: "TORTINHA DE FRANGO 140 GRAMAS", imagemUrl: "./assets/yannbf/img/listscards/salgado02.jpg", descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " },
            { preco: "88,50", nome: "QUICHE 3 QUEIJOS", imagemUrl: "./assets/yannbf/img/listscards/salgado03.jpg", descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " },
            { preco: "55,50", nome: "QUICHE DE ALHO PORÓ", imagemUrl: "./assets/yannbf/img/listscards/salgado01.jpg", descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " }
        ];
        this.tortas = [
            { preco: "43,00", nome: "Torta de Maçã com Crumbe de Canela", imagemUrl: "./assets/yannbf/img/listscards/torta01.jpeg", descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " },
            { preco: "45,00", nome: "Torta de Morango", imagemUrl: "./assets/yannbf/img/listscards/torta02.jpeg", descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " },
            { preco: "41,00", nome: "Torta de Chocolate com Menta", imagemUrl: "./assets/yannbf/img/listscards/torta03.jpeg", descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " },
            { preco: "43,00", nome: "Torta de Limão", imagemUrl: "./assets/yannbf/img/listscards/torta04.jpeg", descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " }
        ];
    }
    ngOnInit() {
    }
}
ListCardUiPage.ɵfac = function ListCardUiPage_Factory(t) { return new (t || ListCardUiPage)(); };
ListCardUiPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListCardUiPage, selectors: [["app-list-card-ui"]], decls: 46, vars: 5, consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "/"], ["placeholder", "Pesquisar..."], ["id", "produtos"], ["color", "light"], ["slot", "end", 1, "ion-margin"], [1, "scroll-horizontal"], [4, "ngFor", "ngForOf"], ["name", "arrow-forward"], ["id", "doces", 4, "ngFor", "ngForOf"], [2, "width", "100%", "height", "151px", 3, "src"], ["size", "8"], ["name", "star", "color", "warning", 4, "ngFor", "ngForOf"], ["size", "4"], [1, "preco"], ["name", "star", "color", "warning"], ["id", "doces"], [2, "width", "100%", "height", "130px", 3, "src"], [1, "preco", 2, "text-align", "right"]], template: function ListCardUiPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "List Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ion-searchbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-item-divider", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Bolos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Ver Todos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ListCardUiPage_ion_card_17_Template, 15, 6, "ion-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ion-item-divider", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Doces");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "ion-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ListCardUiPage_ion_card_27_Template, 15, 6, "ion-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ion-item-divider", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Salgos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Ver Todos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ListCardUiPage_ion_card_36_Template, 15, 6, "ion-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ion-item-divider", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Tortas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Ver Todos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ListCardUiPage_ion_card_45_Template, 15, 6, "ion-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bolos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.doces == null ? null : ctx.doces.length, " doces");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.doces);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.salgados);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tortas);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSearchbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["TextValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItemDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonImg"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCol"]], styles: [".toolbar-ios-primary[_ngcontent-%COMP%]   .searchbar-ios[_ngcontent-%COMP%]   .searchbar-search-icon[_ngcontent-%COMP%] {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2013%2013'><path%20fill='#999'%20d='M5,1c2.2,0,4,1.8,4,4S7.2,9,5,9S1,7.2,1,5S2.8,1,5,1%20M5,0C2.2,0,0,2.2,0,5s2.2,5,5,5s5-2.2,5-5S7.8,0,5,0%20L5,0z'/><line%20stroke='#999'%20stroke-miterlimit='10'%20x1='12.6'%20y1='12.6'%20x2='8.2'%20y2='8.2'/></svg>\") !important;\n}\n.toolbar-ios-primary[_ngcontent-%COMP%]   .searchbar-ios[_ngcontent-%COMP%]   .searchbar-clear-icon[_ngcontent-%COMP%] {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><path%20fill='#999'%20d='M403.1,108.9c-81.2-81.2-212.9-81.2-294.2,0s-81.2,212.9,0,294.2c81.2,81.2,212.9,81.2,294.2,0S484.3,190.1,403.1,108.9z%20M352,340.2L340.2,352l-84.4-84.2l-84,83.8L160,339.8l84-83.8l-84-83.8l11.8-11.8l84,83.8l84.4-84.2l11.8,11.8L267.6,256L352,340.2z'/></svg>\") !important;\n}\nion-content#produtos[_ngcontent-%COMP%]   .scroll-horizontal[_ngcontent-%COMP%] {\n  width: 100%;\n  white-space: nowrap;\n  overflow: auto;\n  overflow-y: hidden;\n}\nion-content#produtos[_ngcontent-%COMP%]   .scroll-horizontal[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  width: 60%;\n  display: inline-block;\n}\nion-content#produtos[_ngcontent-%COMP%]   .scroll-horizontal[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\nion-content#produtos[_ngcontent-%COMP%]   [col-8][_ngcontent-%COMP%] {\n  padding: 5px 5px 5px 10px !important;\n}\nion-content#produtos[_ngcontent-%COMP%]   [col-4][_ngcontent-%COMP%] {\n  padding: 5px 10px 5px 5px !important;\n}\nion-content#produtos[_ngcontent-%COMP%]   .preco[_ngcontent-%COMP%] {\n  font-weight: 900;\n}\nion-content#produtos[_ngcontent-%COMP%]   ion-item-divider[_ngcontent-%COMP%] {\n  margin-bottom: -20px;\n}\nion-content#produtos[_ngcontent-%COMP%]   ion-item-divider[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 800;\n  color: #666;\n}\nion-content#produtos[_ngcontent-%COMP%]   ion-item-divider[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\nion-content#produtos[_ngcontent-%COMP%]   ion-item-divider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 9pt;\n  color: var(--ion-color-primary);\n  margin-left: 5px;\n}\nion-content#produtos[_ngcontent-%COMP%]   #doces[_ngcontent-%COMP%] {\n  width: 95%;\n}\nion-content#produtos[_ngcontent-%COMP%]   #doces[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-top: -50px;\n}\nion-content#produtos[_ngcontent-%COMP%]   #doces[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%] {\n  padding: 0px 5px 0px 5px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbGlzdHMvbGlzdC1jYXJkLXVpL0M6XFxVc2Vyc1xcc2FiYWRpXFxEb2N1bWVudHNcXFByb2pldG9zXFxfaW9uaWNcXGlvbmljNC1jb21wb25lbnRzL3NyY1xcYXBwXFxwYWdlc1xceWFubmJmXFxjb21wb25lbnRzXFxsaXN0c1xcbGlzdC1jYXJkLXVpXFxsaXN0LWNhcmQtdWkucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy9saXN0cy9saXN0LWNhcmQtdWkvbGlzdC1jYXJkLXVpLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLDBYQUFBO0FDQUo7QURFRTtFQUNFLG9hQUFBO0FDQUo7QURLRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0ZKO0FESUk7RUFDRSxVQUFBO0VBQ0EscUJBQUE7QUNGTjtBREdNO0VBQ0UsdUJBQUE7QUNEUjtBREtFO0VBQ0Usb0NBQUE7QUNISjtBREtFO0VBQ0Usb0NBQUE7QUNISjtBREtFO0VBQ0UsZ0JBQUE7QUNISjtBREtFO0VBQ0Usb0JBQUE7QUNISjtBRElJO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FDRk47QURJSTtFQUNFLCtCQUFBO0FDRk47QURLTTtFQUNFLGNBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FDSFI7QURPRTtFQUNFLFVBQUE7QUNMSjtBRE9NO0VBQ0UsaUJBQUE7QUNMUjtBRFFJO0VBQ0UsbUNBQUE7QUNOTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL2xpc3RzL2xpc3QtY2FyZC11aS9saXN0LWNhcmQtdWkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2xiYXItaW9zLXByaW1hcnkgLnNlYXJjaGJhci1pb3Mge1xyXG4gIC5zZWFyY2hiYXItc2VhcmNoLWljb24ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsPHN2ZyUyMHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclMjB2aWV3Qm94PScwJTIwMCUyMDEzJTIwMTMnPjxwYXRoJTIwZmlsbD0nIzk5OSclMjBkPSdNNSwxYzIuMiwwLDQsMS44LDQsNFM3LjIsOSw1LDlTMSw3LjIsMSw1UzIuOCwxLDUsMSUyME01LDBDMi4yLDAsMCwyLjIsMCw1czIuMiw1LDUsNXM1LTIuMiw1LTVTNy44LDAsNSwwJTIwTDUsMHonLz48bGluZSUyMHN0cm9rZT0nIzk5OSclMjBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnJTIweDE9JzEyLjYnJTIweTE9JzEyLjYnJTIweDI9JzguMiclMjB5Mj0nOC4yJy8+PC9zdmc+XCIpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5zZWFyY2hiYXItY2xlYXItaWNvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCw8c3ZnJTIweG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUyMHZpZXdCb3g9JzAlMjAwJTIwNTEyJTIwNTEyJz48cGF0aCUyMGZpbGw9JyM5OTknJTIwZD0nTTQwMy4xLDEwOC45Yy04MS4yLTgxLjItMjEyLjktODEuMi0yOTQuMiwwcy04MS4yLDIxMi45LDAsMjk0LjJjODEuMiw4MS4yLDIxMi45LDgxLjIsMjk0LjIsMFM0ODQuMywxOTAuMSw0MDMuMSwxMDguOXolMjBNMzUyLDM0MC4yTDM0MC4yLDM1MmwtODQuNC04NC4ybC04NCw4My44TDE2MCwzMzkuOGw4NC04My44bC04NC04My44bDExLjgtMTEuOGw4NCw4My44bDg0LjQtODQuMmwxMS44LDExLjhMMjY3LjYsMjU2TDM1MiwzNDAuMnonLz48L3N2Zz5cIikgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1jb250ZW50I3Byb2R1dG9zIHtcclxuICAuc2Nyb2xsLWhvcml6b250YWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcblxyXG4gICAgaW9uLWNhcmQge1xyXG4gICAgICB3aWR0aDogNjAlO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFtjb2wtOF0ge1xyXG4gICAgcGFkZGluZzogNXB4IDVweCA1cHggMTBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBbY29sLTRdIHtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCA1cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnByZWNvIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgfVxyXG4gIGlvbi1pdGVtLWRpdmlkZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTIwcHg7XHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgfVxyXG4gICAgc21hbGwge1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgfVxyXG4gICAgc3BhbiB7XHJcbiAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDlwdDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgI2RvY2VzIHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBpb24taW1nIHtcclxuICAgICAgaW1nIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtNTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW9uLWdyaWQge1xyXG4gICAgICBwYWRkaW5nOiAwcHggNXB4IDBweCA1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLnRvb2xiYXItaW9zLXByaW1hcnkgLnNlYXJjaGJhci1pb3MgLnNlYXJjaGJhci1zZWFyY2gtaWNvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LDxzdmclMjB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTIwdmlld0JveD0nMCUyMDAlMjAxMyUyMDEzJz48cGF0aCUyMGZpbGw9JyM5OTknJTIwZD0nTTUsMWMyLjIsMCw0LDEuOCw0LDRTNy4yLDksNSw5UzEsNy4yLDEsNVMyLjgsMSw1LDElMjBNNSwwQzIuMiwwLDAsMi4yLDAsNXMyLjIsNSw1LDVzNS0yLjIsNS01UzcuOCwwLDUsMCUyMEw1LDB6Jy8+PGxpbmUlMjBzdHJva2U9JyM5OTknJTIwc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyUyMHgxPScxMi42JyUyMHkxPScxMi42JyUyMHgyPSc4LjInJTIweTI9JzguMicvPjwvc3ZnPlwiKSAhaW1wb3J0YW50O1xufVxuLnRvb2xiYXItaW9zLXByaW1hcnkgLnNlYXJjaGJhci1pb3MgLnNlYXJjaGJhci1jbGVhci1pY29uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsPHN2ZyUyMHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclMjB2aWV3Qm94PScwJTIwMCUyMDUxMiUyMDUxMic+PHBhdGglMjBmaWxsPScjOTk5JyUyMGQ9J000MDMuMSwxMDguOWMtODEuMi04MS4yLTIxMi45LTgxLjItMjk0LjIsMHMtODEuMiwyMTIuOSwwLDI5NC4yYzgxLjIsODEuMiwyMTIuOSw4MS4yLDI5NC4yLDBTNDg0LjMsMTkwLjEsNDAzLjEsMTA4Ljl6JTIwTTM1MiwzNDAuMkwzNDAuMiwzNTJsLTg0LjQtODQuMmwtODQsODMuOEwxNjAsMzM5LjhsODQtODMuOGwtODQtODMuOGwxMS44LTExLjhsODQsODMuOGw4NC40LTg0LjJsMTEuOCwxMS44TDI2Ny42LDI1NkwzNTIsMzQwLjJ6Jy8+PC9zdmc+XCIpICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50I3Byb2R1dG9zIC5zY3JvbGwtaG9yaXpvbnRhbCB7XG4gIHdpZHRoOiAxMDAlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogYXV0bztcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuaW9uLWNvbnRlbnQjcHJvZHV0b3MgLnNjcm9sbC1ob3Jpem9udGFsIGlvbi1jYXJkIHtcbiAgd2lkdGg6IDYwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuaW9uLWNvbnRlbnQjcHJvZHV0b3MgLnNjcm9sbC1ob3Jpem9udGFsIGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50I3Byb2R1dG9zIFtjb2wtOF0ge1xuICBwYWRkaW5nOiA1cHggNXB4IDVweCAxMHB4ICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCNwcm9kdXRvcyBbY29sLTRdIHtcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDVweCAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQjcHJvZHV0b3MgLnByZWNvIHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cbmlvbi1jb250ZW50I3Byb2R1dG9zIGlvbi1pdGVtLWRpdmlkZXIge1xuICBtYXJnaW4tYm90dG9tOiAtMjBweDtcbn1cbmlvbi1jb250ZW50I3Byb2R1dG9zIGlvbi1pdGVtLWRpdmlkZXIgaDIge1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogIzY2Njtcbn1cbmlvbi1jb250ZW50I3Byb2R1dG9zIGlvbi1pdGVtLWRpdmlkZXIgc21hbGwge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuaW9uLWNvbnRlbnQjcHJvZHV0b3MgaW9uLWl0ZW0tZGl2aWRlciBzcGFuIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA5cHQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5pb24tY29udGVudCNwcm9kdXRvcyAjZG9jZXMge1xuICB3aWR0aDogOTUlO1xufVxuaW9uLWNvbnRlbnQjcHJvZHV0b3MgI2RvY2VzIGlvbi1pbWcgaW1nIHtcbiAgbWFyZ2luLXRvcDogLTUwcHg7XG59XG5pb24tY29udGVudCNwcm9kdXRvcyAjZG9jZXMgaW9uLWdyaWQge1xuICBwYWRkaW5nOiAwcHggNXB4IDBweCA1cHggIWltcG9ydGFudDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListCardUiPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-card-ui',
                templateUrl: './list-card-ui.page.html',
                styleUrls: ['./list-card-ui.page.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-yannbf-components-lists-list-card-ui-list-card-ui-module-es2015.js.map