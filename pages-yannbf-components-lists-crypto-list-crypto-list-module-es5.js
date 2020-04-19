function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-lists-crypto-list-crypto-list-module"], {
  /***/
  "./src/app/pages/yannbf/components/lists/crypto-list/crypto-list-routing.module.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/pages/yannbf/components/lists/crypto-list/crypto-list-routing.module.ts ***!
    \*****************************************************************************************/

  /*! exports provided: CryptoListPageRoutingModule */

  /***/
  function srcAppPagesYannbfComponentsListsCryptoListCryptoListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CryptoListPageRoutingModule", function () {
      return CryptoListPageRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _crypto_list_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./crypto-list.page */
    "./src/app/pages/yannbf/components/lists/crypto-list/crypto-list.page.ts");

    var routes = [{
      path: '',
      component: _crypto_list_page__WEBPACK_IMPORTED_MODULE_2__["CryptoListPage"]
    }];

    var CryptoListPageRoutingModule = function CryptoListPageRoutingModule() {
      _classCallCheck(this, CryptoListPageRoutingModule);
    };

    CryptoListPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CryptoListPageRoutingModule
    });
    CryptoListPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CryptoListPageRoutingModule_Factory(t) {
        return new (t || CryptoListPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CryptoListPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CryptoListPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/yannbf/components/lists/crypto-list/crypto-list.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/yannbf/components/lists/crypto-list/crypto-list.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: CryptoListPageModule */

  /***/
  function srcAppPagesYannbfComponentsListsCryptoListCryptoListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CryptoListPageModule", function () {
      return CryptoListPageModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _crypto_list_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./crypto-list-routing.module */
    "./src/app/pages/yannbf/components/lists/crypto-list/crypto-list-routing.module.ts");
    /* harmony import */


    var _crypto_list_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./crypto-list.page */
    "./src/app/pages/yannbf/components/lists/crypto-list/crypto-list.page.ts");

    var CryptoListPageModule = function CryptoListPageModule() {
      _classCallCheck(this, CryptoListPageModule);
    };

    CryptoListPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CryptoListPageModule
    });
    CryptoListPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CryptoListPageModule_Factory(t) {
        return new (t || CryptoListPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _crypto_list_routing_module__WEBPACK_IMPORTED_MODULE_4__["CryptoListPageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CryptoListPageModule, {
        declarations: [_crypto_list_page__WEBPACK_IMPORTED_MODULE_5__["CryptoListPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _crypto_list_routing_module__WEBPACK_IMPORTED_MODULE_4__["CryptoListPageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CryptoListPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _crypto_list_routing_module__WEBPACK_IMPORTED_MODULE_4__["CryptoListPageRoutingModule"]],
          declarations: [_crypto_list_page__WEBPACK_IMPORTED_MODULE_5__["CryptoListPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/yannbf/components/lists/crypto-list/crypto-list.page.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/yannbf/components/lists/crypto-list/crypto-list.page.ts ***!
    \*******************************************************************************/

  /*! exports provided: CryptoListPage */

  /***/
  function srcAppPagesYannbfComponentsListsCryptoListCryptoListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CryptoListPage", function () {
      return CryptoListPage;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CryptoListPage_ion_row_17_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var d_r264 = ctx.$implicit;

        var ctx_r263 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", "assets/yannbf/img/currencies/" + d_r264.symbol + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rank ", d_r264.rank, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](d_r264.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r263.precision(d_r264.price_usd, 1), " $");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r263.evolution(d_r264.percent_change_1h), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    var CryptoListPage = /*#__PURE__*/function () {
      function CryptoListPage() {
        _classCallCheck(this, CryptoListPage);

        this.data = [{
          id: 'bitcoin',
          name: 'Bitcoin',
          symbol: 'btc',
          rank: '1',
          price_usd: '13208.8',
          percent_change_1h: '1.54'
        }, {
          id: 'ethereum',
          name: 'Ethereum',
          symbol: 'eth',
          rank: '2',
          price_usd: '658.926',
          percent_change_1h: '2.42'
        }, {
          id: 'bitcoin-cash',
          name: 'Bitcoin Cash',
          symbol: 'bch',
          rank: '3',
          price_usd: '2758.51',
          percent_change_1h: '2.65'
        }, {
          id: 'ripple',
          name: 'Ripple',
          symbol: 'xrp',
          rank: '4',
          price_usd: '1.01963',
          percent_change_1h: '0.98'
        }, {
          id: 'litecoin',
          name: 'Litecoin',
          symbol: 'ltc',
          rank: '5',
          price_usd: '263.913',
          percent_change_1h: '2.21'
        }];
      }

      _createClass(CryptoListPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "precision",
        value: function precision(n, m) {
          return parseFloat(n).toFixed(m);
        }
      }, {
        key: "evolution",
        value: function evolution(n) {
          return n > 0 ? '<span>' + parseFloat(n).toFixed(2) + '&nbsp;<i class="fa fa-caret-up"></i></span>' : '<span class="red">' + parseFloat(n).toFixed(2) + '&nbsp;<i class="fa fa-caret-down"></i></span>';
        }
      }]);

      return CryptoListPage;
    }();

    CryptoListPage.ɵfac = function CryptoListPage_Factory(t) {
      return new (t || CryptoListPage)();
    };

    CryptoListPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CryptoListPage,
      selectors: [["app-crypto-list"]],
      decls: 18,
      vars: 1,
      consts: [["slot", "start"], ["defaultHref", "/"], [1, "page-background"], [1, "welcome-header"], [1, "content"], [1, "title"], [1, "subtitle"], ["color", "dark", 1, "refresh"], ["name", "md-refresh"], [1, "body", "ion-padding"], [1, "currencies"], ["class", "currency", 4, "ngFor", "ngForOf"], [1, "currency"], [1, "image"], ["alt", "", 3, "src"], ["size", "4", 1, "text"], [1, "rank"], [1, "name"], [1, "usd"], [1, "evolution", 3, "innerHtml"], ["size", "1"], [1, "indicator"], ["icon", "md-arrow-dropright"]],
      template: function CryptoListPage_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonFabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCol"]],
      styles: [".page-background[_ngcontent-%COMP%] {\n  --background: rgb(89, 138, 223);\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.welcome-header[_ngcontent-%COMP%] {\n  position: relative;\n  background: linear-gradient(135deg, #8b7fe0, #f75f9d);\n  width: 100%;\n  padding: 30px 0;\n  margin-bottom: 20px;\n}\n\n.welcome-header[_ngcontent-%COMP%]   .refresh[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n}\n\n.welcome-header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n  color: white;\n}\n\n.welcome-header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  margin-bottom: 10px;\n}\n\n.welcome-header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  text-transform: uppercase;\n  margin-bottom: 10px;\n}\n\n.welcome-header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 400;\n  text-align: center;\n}\n\n.body[_ngcontent-%COMP%]   .currencies[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%] {\n  background: linear-gradient(45deg, #5e6d8c, #384662);\n  padding: 10px;\n  border-radius: 10px;\n  margin: 10px auto;\n}\n\n.body[_ngcontent-%COMP%]   .currencies[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.body[_ngcontent-%COMP%]   .currencies[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50px;\n  margin: 0;\n  display: block;\n}\n\n.body[_ngcontent-%COMP%]   .currencies[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: #bcc6d4;\n  font-size: 15px;\n  font-weight: 700;\n}\n\n.body[_ngcontent-%COMP%]   .currencies[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .rank[_ngcontent-%COMP%] {\n  color: #8b9bbd;\n  font-size: 15px;\n  font-weight: 500;\n}\n\n.body[_ngcontent-%COMP%]   .currencies[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .usd[_ngcontent-%COMP%] {\n  color: #bcc6d4;\n  font-size: 15px;\n  font-weight: 700;\n}\n\n.body[_ngcontent-%COMP%]   .currencies[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .evolution[_ngcontent-%COMP%] {\n  color: #00cb78;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.body[_ngcontent-%COMP%]   .currencies[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .evolution[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%] {\n  color: #f44447;\n}\n\n.body[_ngcontent-%COMP%]   .currencies[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  margin-top: -7px;\n  right: 0;\n  color: rgba(236, 236, 236, 0.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbGlzdHMvY3J5cHRvLWxpc3QvQzpcXFVzZXJzXFxzYWJhZGlcXERvY3VtZW50c1xcUHJvamV0b3NcXF9pb25pY1xcaW9uaWM0LWNvbXBvbmVudHMvc3JjXFxhcHBcXHBhZ2VzXFx5YW5uYmZcXGNvbXBvbmVudHNcXGxpc3RzXFxjcnlwdG8tbGlzdFxcY3J5cHRvLWxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy9saXN0cy9jcnlwdG8tbGlzdC9jcnlwdG8tbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxxREFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURDRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREdFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0RKOztBREdJO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FDRE47O0FESUk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDRk47O0FES0k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0hOOztBRFVJO0VBQ0Usb0RBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ1BOOztBRFNNO0VBQ0UsZ0JBQUE7QUNQUjs7QURTUTtFQUNFLFdBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQ1BWOztBRFlRO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1ZWOztBRGFRO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1hWOztBRGNRO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1pWOztBRGVRO0VBQ0UsY0FBQTtFQUtBLGVBQUE7RUFDQSxnQkFBQTtBQ2pCVjs7QURhVTtFQUNFLGNBQUE7QUNYWjs7QURrQk07RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSwrQkFBQTtBQ2hCUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL2xpc3RzL2NyeXB0by1saXN0L2NyeXB0by1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWJhY2tncm91bmQge1xyXG4gIC0tYmFja2dyb3VuZDogcmdiKDg5LCAxMzgsIDIyMyk7XHJcbn1cclxuXHJcbnAge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLndlbGNvbWUtaGVhZGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzhiN2ZlMCwgI2Y3NWY5ZCk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMzBweCAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gIC5yZWZyZXNoIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG5cclxuICB9XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC50aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuc3VidGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5ib2R5IHtcclxuICAuY3VycmVuY2llcyB7XHJcbiAgICAuY3VycmVuY3kge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICM1ZTZkOGMsICMzODQ2NjIpO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBtYXJnaW46IDEwcHggYXV0bztcclxuXHJcbiAgICAgIC5pbWFnZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAudGV4dCB7XHJcbiAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgY29sb3I6ICNiY2M2ZDQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJhbmsge1xyXG4gICAgICAgICAgY29sb3I6ICM4YjliYmQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnVzZCB7XHJcbiAgICAgICAgICBjb2xvcjogI2JjYzZkNDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZXZvbHV0aW9uIHtcclxuICAgICAgICAgIGNvbG9yOiAjMDBjYjc4O1xyXG5cclxuICAgICAgICAgIC5yZWQge1xyXG4gICAgICAgICAgICBjb2xvcjogI2Y0NDQ0NztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuaW5kaWNhdG9yIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTdweDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBjb2xvcjogcmdiYSgyMzYsIDIzNiwgMjM2LCAwLjMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5wYWdlLWJhY2tncm91bmQge1xuICAtLWJhY2tncm91bmQ6IHJnYig4OSwgMTM4LCAyMjMpO1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4ud2VsY29tZS1oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM4YjdmZTAsICNmNzVmOWQpO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMzBweCAwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLndlbGNvbWUtaGVhZGVyIC5yZWZyZXNoIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbn1cbi53ZWxjb21lLWhlYWRlciAuY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLndlbGNvbWUtaGVhZGVyIC5jb250ZW50IGltZyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi53ZWxjb21lLWhlYWRlciAuY29udGVudCAudGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ud2VsY29tZS1oZWFkZXIgLmNvbnRlbnQgLnN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ib2R5IC5jdXJyZW5jaWVzIC5jdXJyZW5jeSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzVlNmQ4YywgIzM4NDY2Mik7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xufVxuLmJvZHkgLmN1cnJlbmNpZXMgLmN1cnJlbmN5IC5pbWFnZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uYm9keSAuY3VycmVuY2llcyAuY3VycmVuY3kgLmltYWdlIGltZyB7XG4gIHdpZHRoOiA1MHB4O1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmJvZHkgLmN1cnJlbmNpZXMgLmN1cnJlbmN5IC50ZXh0IC5uYW1lIHtcbiAgY29sb3I6ICNiY2M2ZDQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5ib2R5IC5jdXJyZW5jaWVzIC5jdXJyZW5jeSAudGV4dCAucmFuayB7XG4gIGNvbG9yOiAjOGI5YmJkO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uYm9keSAuY3VycmVuY2llcyAuY3VycmVuY3kgLnRleHQgLnVzZCB7XG4gIGNvbG9yOiAjYmNjNmQ0O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4uYm9keSAuY3VycmVuY2llcyAuY3VycmVuY3kgLnRleHQgLmV2b2x1dGlvbiB7XG4gIGNvbG9yOiAjMDBjYjc4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uYm9keSAuY3VycmVuY2llcyAuY3VycmVuY3kgLnRleHQgLmV2b2x1dGlvbiAucmVkIHtcbiAgY29sb3I6ICNmNDQ0NDc7XG59XG4uYm9keSAuY3VycmVuY2llcyAuY3VycmVuY3kgLmluZGljYXRvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIG1hcmdpbi10b3A6IC03cHg7XG4gIHJpZ2h0OiAwO1xuICBjb2xvcjogcmdiYSgyMzYsIDIzNiwgMjM2LCAwLjMpO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CryptoListPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-crypto-list',
          templateUrl: './crypto-list.page.html',
          styleUrls: ['./crypto-list.page.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-yannbf-components-lists-crypto-list-crypto-list-module-es5.js.map