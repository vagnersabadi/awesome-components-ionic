(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-lists-crypto-list-crypto-list-module"],{

/***/ "./src/app/pages/yannbf/components/lists/crypto-list/crypto-list-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/lists/crypto-list/crypto-list-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: CryptoListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CryptoListPageRoutingModule", function() { return CryptoListPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _crypto_list_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crypto-list.page */ "./src/app/pages/yannbf/components/lists/crypto-list/crypto-list.page.ts");





const routes = [
    {
        path: '',
        component: _crypto_list_page__WEBPACK_IMPORTED_MODULE_2__["CryptoListPage"]
    }
];
class CryptoListPageRoutingModule {
}
CryptoListPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CryptoListPageRoutingModule });
CryptoListPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CryptoListPageRoutingModule_Factory(t) { return new (t || CryptoListPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CryptoListPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CryptoListPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/yannbf/components/lists/crypto-list/crypto-list.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/lists/crypto-list/crypto-list.module.ts ***!
  \*********************************************************************************/
/*! exports provided: CryptoListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CryptoListPageModule", function() { return CryptoListPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _crypto_list_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./crypto-list-routing.module */ "./src/app/pages/yannbf/components/lists/crypto-list/crypto-list-routing.module.ts");
/* harmony import */ var _crypto_list_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./crypto-list.page */ "./src/app/pages/yannbf/components/lists/crypto-list/crypto-list.page.ts");







class CryptoListPageModule {
}
CryptoListPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CryptoListPageModule });
CryptoListPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CryptoListPageModule_Factory(t) { return new (t || CryptoListPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _crypto_list_routing_module__WEBPACK_IMPORTED_MODULE_4__["CryptoListPageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CryptoListPageModule, { declarations: [_crypto_list_page__WEBPACK_IMPORTED_MODULE_5__["CryptoListPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        _crypto_list_routing_module__WEBPACK_IMPORTED_MODULE_4__["CryptoListPageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CryptoListPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                    _crypto_list_routing_module__WEBPACK_IMPORTED_MODULE_4__["CryptoListPageRoutingModule"]
                ],
                declarations: [_crypto_list_page__WEBPACK_IMPORTED_MODULE_5__["CryptoListPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/yannbf/components/lists/crypto-list/crypto-list.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/lists/crypto-list/crypto-list.page.ts ***!
  \*******************************************************************************/
/*! exports provided: CryptoListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CryptoListPage", function() { return CryptoListPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function CryptoListPage_ion_row_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-row", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-col", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-col", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "ion-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", "assets/yannbf/img/currencies/" + d_r1.symbol + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rank ", d_r1.rank, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](d_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.precision(d_r1.price_usd, 1), " $");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r0.evolution(d_r1.percent_change_1h), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class CryptoListPage {
    constructor() {
        this.data = [
            {
                id: 'bitcoin',
                name: 'Bitcoin',
                symbol: 'btc',
                rank: '1',
                price_usd: '13208.8',
                percent_change_1h: '1.54'
            },
            {
                id: 'ethereum',
                name: 'Ethereum',
                symbol: 'eth',
                rank: '2',
                price_usd: '658.926',
                percent_change_1h: '2.42'
            },
            {
                id: 'bitcoin-cash',
                name: 'Bitcoin Cash',
                symbol: 'bch',
                rank: '3',
                price_usd: '2758.51',
                percent_change_1h: '2.65'
            },
            {
                id: 'ripple',
                name: 'Ripple',
                symbol: 'xrp',
                rank: '4',
                price_usd: '1.01963',
                percent_change_1h: '0.98'
            },
            {
                id: 'litecoin',
                name: 'Litecoin',
                symbol: 'ltc',
                rank: '5',
                price_usd: '263.913',
                percent_change_1h: '2.21'
            }
        ];
    }
    ngOnInit() {
    }
    precision(n, m) {
        return parseFloat(n).toFixed(m);
    }
    evolution(n) {
        return n > 0
            ? '<span>' + parseFloat(n).toFixed(2) + '&nbsp;<i class="fa fa-caret-up"></i></span>'
            : '<span class="red">' + parseFloat(n).toFixed(2) + '&nbsp;<i class="fa fa-caret-down"></i></span>';
    }
}
CryptoListPage.ɵfac = function CryptoListPage_Factory(t) { return new (t || CryptoListPage)(); };
CryptoListPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CryptoListPage, selectors: [["app-crypto-list"]], decls: 18, vars: 1, consts: [["slot", "start"], ["defaultHref", "/"], [1, "page-background"], [1, "welcome-header"], [1, "content"], [1, "title"], [1, "subtitle"], ["color", "dark", 1, "refresh"], ["name", "md-refresh"], [1, "body", "ion-padding"], [1, "currencies"], ["class", "currency", 4, "ngFor", "ngForOf"], [1, "currency"], [1, "image"], ["alt", "", 3, "src"], ["size", "4", 1, "text"], [1, "rank"], [1, "name"], [1, "usd"], [1, "evolution", 3, "innerHtml"], ["size", "1"], [1, "indicator"], ["icon", "md-arrow-dropright"]], template: function CryptoListPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Crypto List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Crypto Currencies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Find The latest info about Crypto currencies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-fab-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "ion-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CryptoListPage_ion_row_17_Template, 15, 5, "ion-row", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonFabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCol"]], styles: [".page-background[_ngcontent-%COMP%] {\n  --background: rgb(89, 138, 223);\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.welcome-header[_ngcontent-%COMP%] {\n  position: relative;\n  background: linear-gradient(135deg, #8b7fe0, #f75f9d);\n  width: 100%;\n  padding: 30px 0;\n  margin-bottom: 20px;\n}\n\n.welcome-header[_ngcontent-%COMP%]   .refresh[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n}\n\n.welcome-header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n  color: white;\n}\n\n.welcome-header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  margin-bottom: 10px;\n}\n\n.welcome-header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  text-transform: uppercase;\n  margin-bottom: 10px;\n}\n\n.welcome-header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 400;\n  text-align: center;\n}\n\n.body[_ngcontent-%COMP%]   .currencies[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%] {\n  background: linear-gradient(45deg, #5e6d8c, #384662);\n  padding: 10px;\n  border-radius: 10px;\n  margin: 10px auto;\n}\n\n.body[_ngcontent-%COMP%]   .currencies[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.body[_ngcontent-%COMP%]   .currencies[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50px;\n  margin: 0;\n  display: block;\n}\n\n.body[_ngcontent-%COMP%]   .currencies[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: #bcc6d4;\n  font-size: 15px;\n  font-weight: 700;\n}\n\n.body[_ngcontent-%COMP%]   .currencies[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .rank[_ngcontent-%COMP%] {\n  color: #8b9bbd;\n  font-size: 15px;\n  font-weight: 500;\n}\n\n.body[_ngcontent-%COMP%]   .currencies[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .usd[_ngcontent-%COMP%] {\n  color: #bcc6d4;\n  font-size: 15px;\n  font-weight: 700;\n}\n\n.body[_ngcontent-%COMP%]   .currencies[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .evolution[_ngcontent-%COMP%] {\n  color: #00cb78;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.body[_ngcontent-%COMP%]   .currencies[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .evolution[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%] {\n  color: #f44447;\n}\n\n.body[_ngcontent-%COMP%]   .currencies[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  margin-top: -7px;\n  right: 0;\n  color: rgba(236, 236, 236, 0.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbGlzdHMvY3J5cHRvLWxpc3QvQzpcXFVzZXJzXFxWYWduZXIgU2FiYWRpXFxEb2N1bWVudHNcXFByb2plY3RzXFxfTXlcXGF3ZXNvbWUtY29tcG9uZW50cy1pb25pYy9zcmNcXGFwcFxccGFnZXNcXHlhbm5iZlxcY29tcG9uZW50c1xcbGlzdHNcXGNyeXB0by1saXN0XFxjcnlwdG8tbGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL2xpc3RzL2NyeXB0by1saXN0L2NyeXB0by1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLHFEQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0NGOztBRENFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FDQ0o7O0FER0U7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDREo7O0FER0k7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNETjs7QURJSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNGTjs7QURLSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDSE47O0FEVUk7RUFDRSxvREFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDUE47O0FEU007RUFDRSxnQkFBQTtBQ1BSOztBRFNRO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FDUFY7O0FEWVE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDVlY7O0FEYVE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDWFY7O0FEY1E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDWlY7O0FEZVE7RUFDRSxjQUFBO0VBS0EsZUFBQTtFQUNBLGdCQUFBO0FDakJWOztBRGFVO0VBQ0UsY0FBQTtBQ1haOztBRGtCTTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsUUFBQTtFQUNBLCtCQUFBO0FDaEJSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbGlzdHMvY3J5cHRvLWxpc3QvY3J5cHRvLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtYmFja2dyb3VuZCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoODksIDEzOCwgMjIzKTtcclxufVxyXG5cclxucCB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ud2VsY29tZS1oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjOGI3ZmUwLCAjZjc1ZjlkKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAzMHB4IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgLnJlZnJlc2gge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcblxyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zdWJ0aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmJvZHkge1xyXG4gIC5jdXJyZW5jaWVzIHtcclxuICAgIC5jdXJyZW5jeSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzVlNmQ4YywgIzM4NDY2Mik7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG5cclxuICAgICAgLmltYWdlIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50ZXh0IHtcclxuICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICBjb2xvcjogI2JjYzZkNDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucmFuayB7XHJcbiAgICAgICAgICBjb2xvcjogIzhiOWJiZDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudXNkIHtcclxuICAgICAgICAgIGNvbG9yOiAjYmNjNmQ0O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ldm9sdXRpb24ge1xyXG4gICAgICAgICAgY29sb3I6ICMwMGNiNzg7XHJcblxyXG4gICAgICAgICAgLnJlZCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZjQ0NDQ3O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5pbmRpY2F0b3Ige1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtN3B4O1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDIzNiwgMjM2LCAyMzYsIDAuMyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLnBhZ2UtYmFja2dyb3VuZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDg5LCAxMzgsIDIyMyk7XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG59XG5cbi53ZWxjb21lLWhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzhiN2ZlMCwgI2Y3NWY5ZCk7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAzMHB4IDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ud2VsY29tZS1oZWFkZXIgLnJlZnJlc2gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xufVxuLndlbGNvbWUtaGVhZGVyIC5jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4ud2VsY29tZS1oZWFkZXIgLmNvbnRlbnQgaW1nIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLndlbGNvbWUtaGVhZGVyIC5jb250ZW50IC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi53ZWxjb21lLWhlYWRlciAuY29udGVudCAuc3VidGl0bGUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJvZHkgLmN1cnJlbmNpZXMgLmN1cnJlbmN5IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNWU2ZDhjLCAjMzg0NjYyKTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG59XG4uYm9keSAuY3VycmVuY2llcyAuY3VycmVuY3kgLmltYWdlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5ib2R5IC5jdXJyZW5jaWVzIC5jdXJyZW5jeSAuaW1hZ2UgaW1nIHtcbiAgd2lkdGg6IDUwcHg7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uYm9keSAuY3VycmVuY2llcyAuY3VycmVuY3kgLnRleHQgLm5hbWUge1xuICBjb2xvcjogI2JjYzZkNDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmJvZHkgLmN1cnJlbmNpZXMgLmN1cnJlbmN5IC50ZXh0IC5yYW5rIHtcbiAgY29sb3I6ICM4YjliYmQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5ib2R5IC5jdXJyZW5jaWVzIC5jdXJyZW5jeSAudGV4dCAudXNkIHtcbiAgY29sb3I6ICNiY2M2ZDQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5ib2R5IC5jdXJyZW5jaWVzIC5jdXJyZW5jeSAudGV4dCAuZXZvbHV0aW9uIHtcbiAgY29sb3I6ICMwMGNiNzg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5ib2R5IC5jdXJyZW5jaWVzIC5jdXJyZW5jeSAudGV4dCAuZXZvbHV0aW9uIC5yZWQge1xuICBjb2xvcjogI2Y0NDQ0Nztcbn1cbi5ib2R5IC5jdXJyZW5jaWVzIC5jdXJyZW5jeSAuaW5kaWNhdG9yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbWFyZ2luLXRvcDogLTdweDtcbiAgcmlnaHQ6IDA7XG4gIGNvbG9yOiByZ2JhKDIzNiwgMjM2LCAyMzYsIDAuMyk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CryptoListPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-crypto-list',
                templateUrl: './crypto-list.page.html',
                styleUrls: ['./crypto-list.page.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-yannbf-components-lists-crypto-list-crypto-list-module-es2015.js.map