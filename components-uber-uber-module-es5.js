function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-uber-uber-module"], {
  /***/
  "./src/app/pages/clones-ui/components/uber/uber-routing.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/pages/clones-ui/components/uber/uber-routing.module.ts ***!
    \************************************************************************/

  /*! exports provided: UberPageRoutingModule */

  /***/
  function srcAppPagesClonesUiComponentsUberUberRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UberPageRoutingModule", function () {
      return UberPageRoutingModule;
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


    var _uber_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./uber.page */
    "./src/app/pages/clones-ui/components/uber/uber.page.ts");

    var routes = [{
      path: '',
      component: _uber_page__WEBPACK_IMPORTED_MODULE_2__["UberPage"]
    }];

    var UberPageRoutingModule = function UberPageRoutingModule() {
      _classCallCheck(this, UberPageRoutingModule);
    };

    UberPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: UberPageRoutingModule
    });
    UberPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function UberPageRoutingModule_Factory(t) {
        return new (t || UberPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UberPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UberPageRoutingModule, [{
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
  "./src/app/pages/clones-ui/components/uber/uber.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/clones-ui/components/uber/uber.module.ts ***!
    \****************************************************************/

  /*! exports provided: UberPageModule */

  /***/
  function srcAppPagesClonesUiComponentsUberUberModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UberPageModule", function () {
      return UberPageModule;
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


    var _uber_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./uber-routing.module */
    "./src/app/pages/clones-ui/components/uber/uber-routing.module.ts");
    /* harmony import */


    var _uber_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./uber.page */
    "./src/app/pages/clones-ui/components/uber/uber.page.ts");

    var UberPageModule = function UberPageModule() {
      _classCallCheck(this, UberPageModule);
    };

    UberPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: UberPageModule
    });
    UberPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function UberPageModule_Factory(t) {
        return new (t || UberPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _uber_routing_module__WEBPACK_IMPORTED_MODULE_4__["UberPageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UberPageModule, {
        declarations: [_uber_page__WEBPACK_IMPORTED_MODULE_5__["UberPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _uber_routing_module__WEBPACK_IMPORTED_MODULE_4__["UberPageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UberPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _uber_routing_module__WEBPACK_IMPORTED_MODULE_4__["UberPageRoutingModule"]],
          declarations: [_uber_page__WEBPACK_IMPORTED_MODULE_5__["UberPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/clones-ui/components/uber/uber.page.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/clones-ui/components/uber/uber.page.ts ***!
    \**************************************************************/

  /*! exports provided: UberPage */

  /***/
  function srcAppPagesClonesUiComponentsUberUberPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UberPage", function () {
      return UberPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function UberPage_ion_title_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Offline ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function UberPage_ion_title_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Online ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function UberPage_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-avatar", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "You are Offline");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function UberPage_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div");
      }
    }

    function UberPage_ion_footer_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-footer");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-fab", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-fab-button");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-card", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-avatar", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-label", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "John Doe");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "$325.00");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-card-content", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "ion-icon", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-label", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "10.2");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Hours Online");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "ion-icon", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-label", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "30 KM");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Total Distance");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "ion-icon", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ion-label", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "20");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Total Jobs");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function UberPage_ion_footer_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-footer");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-fab", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-fab-button");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-card", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-card-header", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-thumbnail");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Esther Berry");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-button", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Apple pay");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-button", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Discount");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-label", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " $25.00");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-label", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "2.2 KM");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-card-content", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Pick Up");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-label", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "7958 Swift Village");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Drop Off");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ion-label", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "105 William, US");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "ion-button", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Ignore");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "ion-button", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Accept");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "ion-label", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "View All Requests");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var UberPage = /*#__PURE__*/function () {
      function UberPage(geolocation, menuCtrl, alertController, activeRouter) {
        _classCallCheck(this, UberPage);

        this.geolocation = geolocation;
        this.menuCtrl = menuCtrl;
        this.alertController = alertController;
        this.activeRouter = activeRouter;
        this.markerUrl = '../../../assets/clones/map/markerPin.png';
        this.zoom = 12;
        this.lat = 26.8549;
        this.lng = 75.8243;
        this.driveStatus = false;
        this.userCard = false;
        this.renderOpts = {
          suppressMarkers: true
        };
        this.directionOptions = {
          origin: {
            icon: '../../../assets/clones/map/Google-Car.png'
          },
          destination: {
            icon: '../../../assets/clones/map/distinationsMaker.png',
            opacity: 0.8
          }
        };
        this.style = [{
          'elementType': 'geometry',
          'stylers': [{
            'color': '#f5f5f5'
          }]
        }, {
          'elementType': 'labels.icon',
          'stylers': [{
            'visibility': 'off'
          }]
        }, {
          'elementType': 'labels.text.fill',
          'stylers': [{
            'color': '#616161'
          }]
        }, {
          'elementType': 'labels.text.stroke',
          'stylers': [{
            'color': '#f5f5f5'
          }]
        }, {
          'featureType': 'administrative.land_parcel',
          'elementType': 'labels.text.fill',
          'stylers': [{
            'color': '#bdbdbd'
          }]
        }, {
          'featureType': 'poi',
          'elementType': 'geometry',
          'stylers': [{
            'color': '#eeeeee'
          }]
        }, {
          'featureType': 'poi',
          'elementType': 'labels.text.fill',
          'stylers': [{
            'color': '#757575'
          }]
        }, {
          'featureType': 'poi.park',
          'elementType': 'geometry',
          'stylers': [{
            'color': '#e5e5e5'
          }]
        }, {
          'featureType': 'poi.park',
          'elementType': 'labels.text.fill',
          'stylers': [{
            'color': '#9e9e9e'
          }]
        }, {
          'featureType': 'road',
          'elementType': 'geometry',
          'stylers': [{
            'color': '#ffffff'
          }]
        }, {
          'featureType': 'road.arterial',
          'elementType': 'labels.text.fill',
          'stylers': [{
            'color': '#757575'
          }]
        }, {
          'featureType': 'road.highway',
          'elementType': 'geometry',
          'stylers': [{
            'color': '#dadada'
          }]
        }, {
          'featureType': 'road.highway',
          'elementType': 'labels.text.fill',
          'stylers': [{
            'color': '#616161'
          }]
        }, {
          'featureType': 'road.local',
          'elementType': 'labels.text.fill',
          'stylers': [{
            'color': '#9e9e9e'
          }]
        }, {
          'featureType': 'transit.line',
          'elementType': 'geometry',
          'stylers': [{
            'color': '#e5e5e5'
          }]
        }, {
          'featureType': 'transit.station',
          'elementType': 'geometry',
          'stylers': [{
            'color': '#eeeeee'
          }]
        }, {
          'featureType': 'water',
          'elementType': 'geometry',
          'stylers': [{
            'color': '#c9c9c9'
          }]
        }, {
          'featureType': 'water',
          'elementType': 'labels.text.fill',
          'stylers': [{
            'color': '#9e9e9e'
          }]
        }];
        this.driveStatus = false;
        this.userCard = false;
        this.menuCtrl.enable(true); // this.geoLocations();
      }

      _createClass(UberPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getDirection();
          console.log('ngonit');
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this = this;

          console.log('ionViewDidEnter');
          this.activeRouter.params.subscribe(function (data) {
            console.log(data);

            if (data) {
              _this.userCard = data.userCard ? data.userCard : false;
            }
          });
        } // mapReady(a, event) {
        //   if (event) {
        //     console.log('event if')
        //   }
        // }

      }, {
        key: "driverStatusChange",
        value: function driverStatusChange(event, val) {
          var _this2 = this;

          if (this.driveStatus) {
            console.log('true');
            setTimeout(function () {
              _this2.presentAlertConfirm();
            }, 2000);
          } else {
            this.userCard = false;
          }
        }
      }, {
        key: "presentAlertConfirm",
        value: function presentAlertConfirm() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      header: 'Confirm Request!',
                      message: 'You have a new Pickup request',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {}
                      }, {
                        text: 'Okay',
                        handler: function handler() {
                          _this3.userCard = true;
                        }
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getDirection",
        value: function getDirection() {
          console.log('directions');
          this.origin = {
            lat: 26.857114,
            lng: 75.8127086
          };
          this.destination = {
            lat: 0.5 + 26.857114,
            lng: 0.5 + 75.8127086
          };
          console.log('origin', this.origin, this.destination);
        }
      }, {
        key: "requestAccept",
        value: function requestAccept() {}
      }, {
        key: "requestIgnore",
        value: function requestIgnore() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));
        }
      }, {
        key: "getcurrentLocations",
        value: function getcurrentLocations() {
          var _this4 = this;

          this.geolocation.getCurrentPosition().then(function (resp) {
            console.log('resp', resp);
            _this4.lat = resp.coords.latitude;
            _this4.lng = resp.coords.longitude;
          })["catch"](function (error) {
            console.log('Error getting location', error);
          });
          var watch = this.geolocation.watchPosition();
          watch.subscribe(function (data) {
            console.log('data', data);
          });
        }
      }]);

      return UberPage;
    }();

    UberPage.ɵfac = function UberPage_Factory(t) {
      return new (t || UberPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    UberPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: UberPage,
      selectors: [["app-uber"]],
      decls: 12,
      vars: 7,
      consts: [["slot", "start"], ["defaultHref", "/clones-ui"], [4, "ngIf"], ["slot", "end", "color", "secondary", 3, "ngModel", "ngModelChange"], ["slot", "fixed"], ["color", "secondary", "lines", "none"], ["slot", "start", 1, "nightModeIcon"], ["src", "../../../assets/clones/map/nightMode.png"], [1, "textBold"], [1, "driverCardBottom"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed", "color", "dark", 1, "driverlocationIcon"], ["name", "locate", 1, "locationIcon"], ["no-padding", "", "no-margin", "", "slot", "fixed", 1, "driverCard", "fixed"], ["src", "../../../assets/clones/map/driver.jpeg"], ["text-capitalize", ""], ["fill", "outline", "slot", "end"], ["color", "primary", "no-margin", ""], [1, "cardContent"], [1, "driverDetails"], ["name", "time", 1, "driverStatusIcons"], [1, "textColor", "textBold", "detailsLabel"], ["text-uppercase", "", 1, "detailText"], ["name", "speedometer", 1, "driverStatusIcons"], ["text-uppercase", "", 1, "textColor", "textBold", "detailsLabel"], [1, "relative"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed", "color", "dark", "padding-bottom", "", 1, "userlocationIcon"], ["slot", "fixed", 1, "userCard"], ["color", "light", 1, "userCardHeader", "dFlex"], ["src", "../../../assets/clones/map/user.jpeg", 1, "userIcon"], ["padding-horizontal", ""], ["align-items-center", "", 1, "dFlex"], ["size", "small", "color", "primary", "shape", "round", "text-capitalize", "", 1, "card-Chip", "textBold", "boxShadow"], ["float-right", "", "padding-start", ""], [1, "textBold", "lightTextColor"], ["color", "light", "no-margin", "", 1, "userCard-conetnt"], [1, "borderBottom", "paddingVertical"], ["text-uppercase", "", 1, "detailText", "fontSmall"], [1, "detailsLabel", "textColor", "textBold"], ["padding-start", "", 1, "userCardFooter"], ["color", "light", "size", "small", 1, "textBold", "boxShadow"], ["color", "firebase", "size", "small", 1, "textBold", "boxShadow"], ["no-padding", "", 1, "requestAll"], ["color", "dark", 1, "textBold", "boxShadow"]],
      template: function UberPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, UberPage_ion_title_4_Template, 2, 0, "ion-title", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, UberPage_ion_title_5_Template, 2, 0, "ion-title", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-toggle", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UberPage_Template_ion_toggle_ngModelChange_6_listener($event) {
            return ctx.driveStatus = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-content", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, UberPage_div_8_Template, 6, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, UberPage_div_9_Template, 1, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, UberPage_ion_footer_10_Template, 35, 0, "ion-footer", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, UberPage_ion_footer_11_Template, 45, 0, "ion-footer", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.driveStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.driveStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.driveStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.driveStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.driveStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.driveStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.driveStatus && ctx.userCard);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButtonDelegate"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToggle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["BooleanValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonFabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonThumbnail"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"]],
      styles: [".welcome-card[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%] {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.fixed[_ngcontent-%COMP%] {\n  position: fixed;\n}\n\n.textBold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.dFlex[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.borderBottom[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e8e4e4;\n}\n\n.textColor[_ngcontent-%COMP%] {\n  color: #000;\n}\n\nagm-map[_ngcontent-%COMP%] {\n  height: calc(100vh - 64px);\n}\n\nagm-map[_ngcontent-%COMP%]   .gm-svpc[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.gmnoprint[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n.nightModeIcon[_ngcontent-%COMP%] {\n  border: 3px dotted #000;\n  padding: 3px;\n}\n\n.driverlocationIcon[_ngcontent-%COMP%] {\n  bottom: 190px;\n}\n\n.driverlocationIcon[_ngcontent-%COMP%]   .locationIcon[_ngcontent-%COMP%] {\n  font-size: 26px;\n}\n\n.driverlocationIcon[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%] {\n  --background: #fff;\n  --color: #000;\n  height: 40px;\n  width: 40px;\n}\n\n.driverCard[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  bottom: -7px;\n  background: #fff;\n  border-radius: 11px;\n  padding-bottom: 5%;\n}\n\n.cardContent[_ngcontent-%COMP%] {\n  background: #ffd524;\n  display: flex;\n  justify-content: space-around;\n  border-radius: 6px;\n  padding: 3%;\n}\n\n.cardContent[_ngcontent-%COMP%]   .driverDetails[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.cardContent[_ngcontent-%COMP%]   .driverStatusIcons[_ngcontent-%COMP%] {\n  font-size: 26px;\n  color: #c3a527;\n}\n\n.cardContent[_ngcontent-%COMP%]   .detailText[_ngcontent-%COMP%] {\n  color: #c3a527;\n  font-size: 10px;\n}\n\n.cardContent[_ngcontent-%COMP%]   .detailsLabel[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.userlocationIcon[_ngcontent-%COMP%] {\n  bottom: 300px;\n}\n\n.userlocationIcon[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%] {\n  --background: #fff;\n  --color: #000;\n  height: 40px;\n  width: 40px;\n}\n\n.userCard[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 94%;\n  bottom: 0;\n  background: #fff;\n  border-radius: 11px;\n  padding-bottom: 5%;\n  margin: 10px;\n  -webkit-animation: mymove 2s;\n          animation: mymove 2s;\n}\n\n.userCard[_ngcontent-%COMP%]   .userCardHeader[_ngcontent-%COMP%] {\n  box-shadow: 2px 2px 2px #e8e4e4;\n}\n\n.userCard[_ngcontent-%COMP%]   .userDetails[_ngcontent-%COMP%] {\n  background: #ffd524;\n  border-radius: 90px;\n  display: flex;\n  height: 21px;\n  padding-left: 12px;\n  padding-right: 14px;\n  padding-top: 3px;\n  padding-bottom: 0;\n}\n\n.userCard[_ngcontent-%COMP%]   .userIcon[_ngcontent-%COMP%] {\n  margin: 2%;\n  margin-left: 9%;\n  border: 1px solid #b9b1b1;\n}\n\n.userCard[_ngcontent-%COMP%]   .userCardFooter[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.userCard[_ngcontent-%COMP%]   .paddingVertical[_ngcontent-%COMP%] {\n  padding: 10px 0px;\n}\n\n.sc-ion-modal-md-h[_ngcontent-%COMP%] {\n  margin-top: 13%;\n}\n\n.card-Chip[_ngcontent-%COMP%] {\n  font-size: 11px;\n  --border-radius: 18px;\n  height: 1.8em;\n}\n\n.requestAll[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n}\n\n.userCard-conetnt[_ngcontent-%COMP%] {\n  padding-bottom: 0;\n  padding-top: 10px;\n}\n\n@-webkit-keyframes mymove {\n  from {\n    bottom: -200px;\n  }\n  to {\n    bottom: 20px;\n  }\n}\n\n@keyframes mymove {\n  from {\n    bottom: -200px;\n  }\n  to {\n    bottom: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2xvbmVzLXVpL2NvbXBvbmVudHMvdWJlci9DOlxcVXNlcnNcXFZhZ25lciBTYWJhZGlcXERvY3VtZW50c1xcUHJvamVjdHNcXF9NeVxcYXdlc29tZS1jb21wb25lbnRzLWlvbmljL3NyY1xcYXBwXFxwYWdlc1xcY2xvbmVzLXVpXFxjb21wb25lbnRzXFx1YmVyXFx1YmVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2xvbmVzLXVpL2NvbXBvbmVudHMvdWJlci91YmVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7QUNFSjs7QURDQTtFQUNJLGlCQUFBO0FDRUo7O0FEQUE7RUFDSSxhQUFBO0FDR0o7O0FEQUE7RUFDSSxnQ0FBQTtBQ0dKOztBRERBO0VBQ0ksV0FBQTtBQ0lKOztBRERBO0VBQ0ksMEJBQUE7QUNJSjs7QURBSTtFQUNJLGFBQUE7QUNHUjs7QURBQTtFQUNJLHdCQUFBO0FDR0o7O0FEREE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7QUNJSjs7QURGQTtFQUNJLGFBQUE7QUNLSjs7QURISTtFQUNJLGVBQUE7QUNLUjs7QURISTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDS1I7O0FEREE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDSUo7O0FERkE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0tKOztBREhJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0tSOztBREhJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNLUjs7QURISTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDS1I7O0FESEk7RUFDSSxlQUFBO0FDS1I7O0FEREE7RUFDSSxhQUFBO0FDSUo7O0FERkk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0lSOztBREFBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtVQUFBLG9CQUFBO0FDR0o7O0FEREk7RUFDSSwrQkFBQTtBQ0dSOztBREFJO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNFUjs7QURBSTtFQUdJLFVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNBUjs7QURFSTtFQUNJLFlBQUE7QUNBUjs7QURHSTtFQUNJLGlCQUFBO0FDRFI7O0FES0E7RUFDSSxlQUFBO0FDRko7O0FES0E7RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0FDRko7O0FESUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FDREo7O0FESUE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FDREo7O0FESUE7RUFDSTtJQUNJLGNBQUE7RUNETjtFREdFO0lBQ0ksWUFBQTtFQ0ROO0FBQ0Y7O0FESUE7RUFDSTtJQUNJLGNBQUE7RUNGTjtFRElFO0lBQ0ksWUFBQTtFQ0ZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jbG9uZXMtdWkvY29tcG9uZW50cy91YmVyL3ViZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5maXhlZCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuXHJcbi50ZXh0Qm9sZCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uZEZsZXgge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmJvcmRlckJvdHRvbSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U4ZTRlNDtcclxufVxyXG4udGV4dENvbG9yIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG5hZ20tbWFwIHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xyXG59XHJcblxyXG5hZ20tbWFwIHtcclxuICAgIC5nbS1zdnBjIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcbi5nbW5vcHJpbnQge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5uaWdodE1vZGVJY29uIHtcclxuICAgIGJvcmRlcjogM3B4IGRvdHRlZCAjMDAwO1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG59XHJcbi5kcml2ZXJsb2NhdGlvbkljb24ge1xyXG4gICAgYm90dG9tOiAxOTBweDtcclxuXHJcbiAgICAubG9jYXRpb25JY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICB9XHJcbiAgICBpb24tZmFiLWJ1dHRvbiB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIC0tY29sb3I6ICMwMDA7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZHJpdmVyQ2FyZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvdHRvbTogLTdweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xyXG59XHJcbi5jYXJkQ29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZkNTI0O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgcGFkZGluZzogMyU7XHJcblxyXG4gICAgLmRyaXZlckRldGFpbHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmRyaXZlclN0YXR1c0ljb25zIHtcclxuICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgY29sb3I6ICNjM2E1Mjc7XHJcbiAgICB9XHJcbiAgICAuZGV0YWlsVGV4dCB7XHJcbiAgICAgICAgY29sb3I6ICNjM2E1Mjc7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmRldGFpbHNMYWJlbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4udXNlcmxvY2F0aW9uSWNvbiB7XHJcbiAgICBib3R0b206IDMwMHB4O1xyXG5cclxuICAgIGlvbi1mYWItYnV0dG9uIHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgLS1jb2xvcjogIzAwMDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi51c2VyQ2FyZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogOTQlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDExcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBhbmltYXRpb246IG15bW92ZSAycztcclxuXHJcbiAgICAudXNlckNhcmRIZWFkZXIge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4ICNlOGU0ZTQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnVzZXJEZXRhaWxzIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZkNTI0O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDkwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBoZWlnaHQ6IDIxcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE0cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDNweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIH1cclxuICAgIC51c2VySWNvbiB7XHJcbiAgICAgICAgLy8gd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgLy8gaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIG1hcmdpbjogMiU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDklO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiOWIxYjE7XHJcbiAgICB9XHJcbiAgICAudXNlckNhcmRGb290ZXIge1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIH1cclxuXHJcbiAgICAucGFkZGluZ1ZlcnRpY2FsIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLnNjLWlvbi1tb2RhbC1tZC1oIHtcclxuICAgIG1hcmdpbi10b3A6IDEzJTtcclxufVxyXG5cclxuLmNhcmQtQ2hpcCB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgICBoZWlnaHQ6IDEuOGVtO1xyXG59XHJcbi5yZXF1ZXN0QWxsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4udXNlckNhcmQtY29uZXRudCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgbXltb3ZlIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIGJvdHRvbTogLTIwMHB4O1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICAgIGJvdHRvbTogMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBteW1vdmUge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgYm90dG9tOiAtMjAwcHg7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG59XHJcbiIsIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5maXhlZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuLnRleHRCb2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5kRmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5ib3JkZXJCb3R0b20ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U4ZTRlNDtcbn1cblxuLnRleHRDb2xvciB7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG5hZ20tbWFwIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjRweCk7XG59XG5cbmFnbS1tYXAgLmdtLXN2cGMge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZ21ub3ByaW50IHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ubmlnaHRNb2RlSWNvbiB7XG4gIGJvcmRlcjogM3B4IGRvdHRlZCAjMDAwO1xuICBwYWRkaW5nOiAzcHg7XG59XG5cbi5kcml2ZXJsb2NhdGlvbkljb24ge1xuICBib3R0b206IDE5MHB4O1xufVxuLmRyaXZlcmxvY2F0aW9uSWNvbiAubG9jYXRpb25JY29uIHtcbiAgZm9udC1zaXplOiAyNnB4O1xufVxuLmRyaXZlcmxvY2F0aW9uSWNvbiBpb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcbiAgLS1jb2xvcjogIzAwMDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbn1cblxuLmRyaXZlckNhcmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IC03cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDExcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1JTtcbn1cblxuLmNhcmRDb250ZW50IHtcbiAgYmFja2dyb3VuZDogI2ZmZDUyNDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZzogMyU7XG59XG4uY2FyZENvbnRlbnQgLmRyaXZlckRldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jYXJkQ29udGVudCAuZHJpdmVyU3RhdHVzSWNvbnMge1xuICBmb250LXNpemU6IDI2cHg7XG4gIGNvbG9yOiAjYzNhNTI3O1xufVxuLmNhcmRDb250ZW50IC5kZXRhaWxUZXh0IHtcbiAgY29sb3I6ICNjM2E1Mjc7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5jYXJkQ29udGVudCAuZGV0YWlsc0xhYmVsIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4udXNlcmxvY2F0aW9uSWNvbiB7XG4gIGJvdHRvbTogMzAwcHg7XG59XG4udXNlcmxvY2F0aW9uSWNvbiBpb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcbiAgLS1jb2xvcjogIzAwMDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbn1cblxuLnVzZXJDYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogOTQlO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDExcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1JTtcbiAgbWFyZ2luOiAxMHB4O1xuICBhbmltYXRpb246IG15bW92ZSAycztcbn1cbi51c2VyQ2FyZCAudXNlckNhcmRIZWFkZXIge1xuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAjZThlNGU0O1xufVxuLnVzZXJDYXJkIC51c2VyRGV0YWlscyB7XG4gIGJhY2tncm91bmQ6ICNmZmQ1MjQ7XG4gIGJvcmRlci1yYWRpdXM6IDkwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMjFweDtcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNHB4O1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbi51c2VyQ2FyZCAudXNlckljb24ge1xuICBtYXJnaW46IDIlO1xuICBtYXJnaW4tbGVmdDogOSU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiOWIxYjE7XG59XG4udXNlckNhcmQgLnVzZXJDYXJkRm9vdGVyIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLnVzZXJDYXJkIC5wYWRkaW5nVmVydGljYWwge1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbn1cblxuLnNjLWlvbi1tb2RhbC1tZC1oIHtcbiAgbWFyZ2luLXRvcDogMTMlO1xufVxuXG4uY2FyZC1DaGlwIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIGhlaWdodDogMS44ZW07XG59XG5cbi5yZXF1ZXN0QWxsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udXNlckNhcmQtY29uZXRudCB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIG15bW92ZSB7XG4gIGZyb20ge1xuICAgIGJvdHRvbTogLTIwMHB4O1xuICB9XG4gIHRvIHtcbiAgICBib3R0b206IDIwcHg7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbXltb3ZlIHtcbiAgZnJvbSB7XG4gICAgYm90dG9tOiAtMjAwcHg7XG4gIH1cbiAgdG8ge1xuICAgIGJvdHRvbTogMjBweDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UberPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-uber',
          templateUrl: './uber.page.html',
          styleUrls: ['./uber.page.scss']
        }]
      }], function () {
        return [{
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=components-uber-uber-module-es5.js.map