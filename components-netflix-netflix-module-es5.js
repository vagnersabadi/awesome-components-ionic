function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-netflix-netflix-module"], {
  /***/
  "./src/app/pages/clones-ui/components/netflix/netflix-routing.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/clones-ui/components/netflix/netflix-routing.module.ts ***!
    \******************************************************************************/

  /*! exports provided: NetflixPageRoutingModule */

  /***/
  function srcAppPagesClonesUiComponentsNetflixNetflixRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NetflixPageRoutingModule", function () {
      return NetflixPageRoutingModule;
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


    var _netflix_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./netflix.page */
    "./src/app/pages/clones-ui/components/netflix/netflix.page.ts");

    var routes = [{
      path: '',
      component: _netflix_page__WEBPACK_IMPORTED_MODULE_2__["NetflixPage"]
    }];

    var NetflixPageRoutingModule = function NetflixPageRoutingModule() {
      _classCallCheck(this, NetflixPageRoutingModule);
    };

    NetflixPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NetflixPageRoutingModule
    });
    NetflixPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function NetflixPageRoutingModule_Factory(t) {
        return new (t || NetflixPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NetflixPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NetflixPageRoutingModule, [{
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
  "./src/app/pages/clones-ui/components/netflix/netflix.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/clones-ui/components/netflix/netflix.module.ts ***!
    \**********************************************************************/

  /*! exports provided: NetflixPageModule */

  /***/
  function srcAppPagesClonesUiComponentsNetflixNetflixModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NetflixPageModule", function () {
      return NetflixPageModule;
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


    var _netflix_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./netflix-routing.module */
    "./src/app/pages/clones-ui/components/netflix/netflix-routing.module.ts");
    /* harmony import */


    var _netflix_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./netflix.page */
    "./src/app/pages/clones-ui/components/netflix/netflix.page.ts");

    var NetflixPageModule = function NetflixPageModule() {
      _classCallCheck(this, NetflixPageModule);
    };

    NetflixPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NetflixPageModule
    });
    NetflixPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function NetflixPageModule_Factory(t) {
        return new (t || NetflixPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _netflix_routing_module__WEBPACK_IMPORTED_MODULE_4__["NetflixPageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NetflixPageModule, {
        declarations: [_netflix_page__WEBPACK_IMPORTED_MODULE_5__["NetflixPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _netflix_routing_module__WEBPACK_IMPORTED_MODULE_4__["NetflixPageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NetflixPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _netflix_routing_module__WEBPACK_IMPORTED_MODULE_4__["NetflixPageRoutingModule"]],
          declarations: [_netflix_page__WEBPACK_IMPORTED_MODULE_5__["NetflixPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/clones-ui/components/netflix/netflix.page.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/clones-ui/components/netflix/netflix.page.ts ***!
    \********************************************************************/

  /*! exports provided: NetflixPage */

  /***/
  function srcAppPagesClonesUiComponentsNetflixNetflixPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NetflixPage", function () {
      return NetflixPage;
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

    var _c0 = function _c0(a0) {
      return {
        "background-image": a0
      };
    };

    function NetflixPage_div_13_div_20_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-icon", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r429 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, "url(" + item_r429.image + ")"));
      }
    }

    function NetflixPage_div_13_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NetflixPage_div_13_div_20_div_4_Template, 4, 3, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tray_r427 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tray_r427.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", tray_r427.items);
      }
    }

    function NetflixPage_div_13_div_32_div_4_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NetflixPage_div_13_div_32_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NetflixPage_div_13_div_32_div_4_div_2_Template, 2, 0, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r432 = ctx.$implicit;

        var tray_r430 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, "url(" + item_r432.image + ")"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tray_r430["continue"]);
      }
    }

    function NetflixPage_div_13_div_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NetflixPage_div_13_div_32_div_4_Template, 3, 4, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tray_r430 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tray_r430.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", tray_r430.items);
      }
    }

    function NetflixPage_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ion-icon", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "My List");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "ion-icon", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Play ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "ion-icon", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Info");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, NetflixPage_div_13_div_20_Template, 5, 2, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "ion-img", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ion-button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "ion-icon", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Trailer ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ion-button", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "ion-icon", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " My List ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, NetflixPage_div_13_div_32_Template, 5, 2, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r423 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, "url(" + ctx_r423.netflixSeriesData.banner.image + ")"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Watch ", ctx_r423.netflixSeriesData.banner.title, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r423.netflixSeriesData.trays_before);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Coming on ", ctx_r423.netflixSeriesData.upcoming.date, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r423.netflixSeriesData.upcoming.image);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r423.netflixSeriesData.trays_after);
      }
    }

    function NetflixPage_div_14_div_20_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-icon", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r439 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, "url(" + item_r439.image + ")"));
      }
    }

    function NetflixPage_div_14_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NetflixPage_div_14_div_20_div_4_Template, 4, 3, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tray_r437 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tray_r437.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", tray_r437.items);
      }
    }

    function NetflixPage_div_14_div_32_div_4_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NetflixPage_div_14_div_32_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NetflixPage_div_14_div_32_div_4_div_2_Template, 2, 0, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r442 = ctx.$implicit;

        var tray_r440 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, "url(" + item_r442.image + ")"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tray_r440["continue"]);
      }
    }

    function NetflixPage_div_14_div_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NetflixPage_div_14_div_32_div_4_Template, 3, 4, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tray_r440 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tray_r440.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", tray_r440.items);
      }
    }

    function NetflixPage_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ion-icon", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "My List");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "ion-icon", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Play ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "ion-icon", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Info");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, NetflixPage_div_14_div_20_Template, 5, 2, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "ion-img", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ion-button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "ion-icon", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Trailer ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ion-button", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "ion-icon", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " My List ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, NetflixPage_div_14_div_32_Template, 5, 2, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r424 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, "url(" + ctx_r424.netflixMoviesData.banner.image + ")"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Watch ", ctx_r424.netflixMoviesData.banner.title, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r424.netflixMoviesData.trays_before);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Coming on ", ctx_r424.netflixMoviesData.upcoming.date, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r424.netflixMoviesData.upcoming.image);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r424.netflixMoviesData.trays_after);
      }
    }

    var NetflixPage = /*#__PURE__*/function () {
      function NetflixPage() {
        _classCallCheck(this, NetflixPage);

        this.netflixSeriesData = {
          banner: {
            image: 'assets/clones/netflix/wonder.jpg',
            title: 'Wonder Woman'
          },
          upcoming: {
            image: 'assets/clones/netflix/into-the-wild.jpg',
            title: 'Into the wild',
            date: 'March 29'
          },
          trays_before: [{
            title: 'Popular on Netflix',
            items: [{
              title: 'The Fury',
              image: 'assets/clones/netflix/1.png'
            }, {
              title: 'Gone Girl',
              image: 'assets/clones/netflix/2.png'
            }, {
              title: 'Guardians of the Galaxy',
              image: 'assets/clones/netflix/3.png'
            }, {
              title: 'Tombstones',
              image: 'assets/clones/netflix/4.png'
            }, {
              title: 'Captain America',
              image: 'assets/clones/netflix/5.png'
            }, {
              title: 'Let\'s be cops',
              image: 'assets/clones/netflix/6.png'
            }, {
              title: 'Annabelle',
              image: 'assets/clones/netflix/7.png'
            }, {
              title: 'Transformers',
              image: 'assets/clones/netflix/8.png'
            }, {
              title: 'The Grand Budapest Hotel',
              image: 'assets/clones/netflix/9.png'
            }, {
              title: 'The Divergent',
              image: 'assets/clones/netflix/10.png'
            }, {
              title: 'Edge of Tomorrow',
              image: 'assets/clones/netflix/11.png'
            }, {
              title: 'Frozen',
              image: 'assets/clones/netflix/12.png'
            }, {
              title: 'Fault in our stars',
              image: 'assets/clones/netflix/13.png'
            }, {
              title: 'Maleficent',
              image: 'assets/clones/netflix/14.png'
            }]
          }, {
            title: 'Recommended for you',
            items: [{
              title: 'Frozen',
              image: 'assets/clones/netflix/12.png'
            }, {
              title: 'Transformers',
              image: 'assets/clones/netflix/8.png'
            }, {
              title: 'Guardians of the Galaxy',
              image: 'assets/clones/netflix/3.png'
            }, {
              title: 'Gone Girl',
              image: 'assets/clones/netflix/2.png'
            }, {
              title: 'Tombstones',
              image: 'assets/clones/netflix/4.png'
            }, {
              title: 'Captain America',
              image: 'assets/clones/netflix/5.png'
            }, {
              title: 'Annabelle',
              image: 'assets/clones/netflix/7.png'
            }, {
              title: 'The Fury',
              image: 'assets/clones/netflix/1.png'
            }, {
              title: 'The Grand Budapest Hotel',
              image: 'assets/clones/netflix/9.png'
            }, {
              title: 'The Divergent',
              image: 'assets/clones/netflix/10.png'
            }, {
              title: 'Let\'s be cops',
              image: 'assets/clones/netflix/6.png'
            }, {
              title: 'Edge of Tomorrow',
              image: 'assets/clones/netflix/11.png'
            }, {
              title: 'Fault in our stars',
              image: 'assets/clones/netflix/13.png'
            }, {
              title: 'Maleficent',
              image: 'assets/clones/netflix/14.png'
            }]
          }],
          trays_after: [{
            title: 'My List',
            items: [{
              title: 'Captain America',
              image: 'assets/clones/netflix/5.png'
            }, {
              title: 'Annabelle',
              image: 'assets/clones/netflix/7.png'
            }, {
              title: 'The Fury',
              image: 'assets/clones/netflix/1.png'
            }, {
              title: 'Edge of Tomorrow',
              image: 'assets/clones/netflix/11.png'
            }, {
              title: 'Fault in our stars',
              image: 'assets/clones/netflix/13.png'
            }, {
              title: 'Maleficent',
              image: 'assets/clones/netflix/14.png'
            }]
          }, {
            title: 'Continue watching for Abhi',
            "continue": true,
            items: [{
              title: 'Frozen',
              image: 'assets/clones/netflix/12.png'
            }, {
              title: 'Transformers',
              image: 'assets/clones/netflix/8.png'
            }, {
              title: 'Guardians of the Galaxy',
              image: 'assets/clones/netflix/3.png'
            }, {
              title: 'Gone Girl',
              image: 'assets/clones/netflix/2.png'
            }]
          }]
        };
        this.netflixMoviesData = {
          banner: {
            image: 'assets/clones/netflix/exorcist.jpg',
            title: 'The Exorcist'
          },
          upcoming: {
            image: 'assets/clones/netflix/got.jpg',
            title: 'Game of Thrones',
            date: 'July 29'
          },
          trays_before: [{
            title: 'Popular on Netflix',
            items: [{
              title: 'The Grand Budapest Hotel',
              image: 'assets/clones/netflix/9.png'
            }, {
              title: 'The Divergent',
              image: 'assets/clones/netflix/10.png'
            }, {
              title: 'Edge of Tomorrow',
              image: 'assets/clones/netflix/11.png'
            }, {
              title: 'Frozen',
              image: 'assets/clones/netflix/12.png'
            }, {
              title: 'Fault in our stars',
              image: 'assets/clones/netflix/13.png'
            }, {
              title: 'Maleficent',
              image: 'assets/clones/netflix/14.png'
            }, {
              title: 'The Fury',
              image: 'assets/clones/netflix/1.png'
            }, {
              title: 'Gone Girl',
              image: 'assets/clones/netflix/2.png'
            }, {
              title: 'Guardians of the Galaxy',
              image: 'assets/clones/netflix/3.png'
            }, {
              title: 'Tombstones',
              image: 'assets/clones/netflix/4.png'
            }, {
              title: 'Captain America',
              image: 'assets/clones/netflix/5.png'
            }, {
              title: 'Let\'s be cops',
              image: 'assets/clones/netflix/6.png'
            }, {
              title: 'Annabelle',
              image: 'assets/clones/netflix/7.png'
            }, {
              title: 'Transformers',
              image: 'assets/clones/netflix/8.png'
            }]
          }, {
            title: 'Recommended for you',
            items: [{
              title: 'Annabelle',
              image: 'assets/clones/netflix/7.png'
            }, {
              title: 'The Fury',
              image: 'assets/clones/netflix/1.png'
            }, {
              title: 'The Grand Budapest Hotel',
              image: 'assets/clones/netflix/9.png'
            }, {
              title: 'The Divergent',
              image: 'assets/clones/netflix/10.png'
            }, {
              title: 'Let\'s be cops',
              image: 'assets/clones/netflix/6.png'
            }, {
              title: 'Edge of Tomorrow',
              image: 'assets/clones/netflix/11.png'
            }, {
              title: 'Fault in our stars',
              image: 'assets/clones/netflix/13.png'
            }, {
              title: 'Maleficent',
              image: 'assets/clones/netflix/14.png'
            }, {
              title: 'Frozen',
              image: 'assets/clones/netflix/12.png'
            }, {
              title: 'Transformers',
              image: 'assets/clones/netflix/8.png'
            }, {
              title: 'Guardians of the Galaxy',
              image: 'assets/clones/netflix/3.png'
            }, {
              title: 'Gone Girl',
              image: 'assets/clones/netflix/2.png'
            }, {
              title: 'Tombstones',
              image: 'assets/clones/netflix/4.png'
            }, {
              title: 'Captain America',
              image: 'assets/clones/netflix/5.png'
            }]
          }],
          trays_after: [{
            title: 'My List',
            items: [{
              title: 'Captain America',
              image: 'assets/clones/netflix/5.png'
            }, {
              title: 'Annabelle',
              image: 'assets/clones/netflix/7.png'
            }, {
              title: 'The Fury',
              image: 'assets/clones/netflix/1.png'
            }, {
              title: 'Edge of Tomorrow',
              image: 'assets/clones/netflix/11.png'
            }, {
              title: 'Fault in our stars',
              image: 'assets/clones/clones/netflix/13.png'
            }, {
              title: 'Maleficent',
              image: 'assets/clones/netflix/14.png'
            }]
          }, {
            title: 'Continue watching for Abhi',
            "continue": true,
            items: [{
              title: 'Frozen',
              image: 'assets/clones/netflix/12.png'
            }, {
              title: 'Transformers',
              image: 'assets/clones/netflix/8.png'
            }, {
              title: 'Guardians of the Galaxy',
              image: 'assets/clones/netflix/3.png'
            }, {
              title: 'Gone Girl',
              image: 'assets/clones/netflix/2.png'
            }]
          }]
        };
        this.segmentTab = 'series';
      }

      _createClass(NetflixPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "segmentChanged",
        value: function segmentChanged(event) {
          this.segmentTab = event.detail.value;
        }
      }]);

      return NetflixPage;
    }();

    NetflixPage.ɵfac = function NetflixPage_Factory(t) {
      return new (t || NetflixPage)();
    };

    NetflixPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NetflixPage,
      selectors: [["app-netflix"]],
      decls: 15,
      vars: 2,
      consts: [["color", "dark"], ["slot", "start"], ["defaultHref", "/clones-ui"], [3, "ionChange"], ["value", "series", "checked", ""], ["value", "movies", "checked", ""], ["value", "mylist", "checked", ""], [4, "ngIf"], [1, "banner", 3, "ngStyle"], [1, "overlay"], [1, "banner-bottom"], [1, "banner-title"], [1, "banner-buttons"], [1, "mylist"], [1, "icon"], ["name", "add"], [1, "text"], [1, "play"], ["name", "play"], [1, "info"], ["name", "information-circle-outline"], ["class", "tray", 4, "ngFor", "ngForOf"], [1, "upcoming"], [1, "date"], [3, "src"], [1, "upcoming-buttons"], ["expand", "block", "color", "light", 1, "trailer"], ["slot", "start", "name", "play"], ["fill", "outline", "expand", "block", "color", "light", 1, "add"], ["slot", "start", "name", "add"], [1, "tray"], [1, "tray-title"], [1, "tray-inner"], ["class", "tray-content", 4, "ngFor", "ngForOf"], [1, "tray-content"], [1, "tray-item", 3, "ngStyle"], [1, "play-div"], ["class", "play-div", 4, "ngIf"]],
      template: function NetflixPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-segment", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionChange", function NetflixPage_Template_ion_segment_ionChange_5_listener($event) {
            return ctx.segmentChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-segment-button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Series");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-segment-button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Movies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-segment-button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "My List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NetflixPage_div_13_Template, 33, 8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NetflixPage_div_14_Template, 33, 8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.segmentTab == "series");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.segmentTab == "movies");
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSegment"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["SelectValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSegmentButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonImg"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"]],
      styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: #232528;\n}\n\n.banner[_ngcontent-%COMP%] {\n  height: 70vh;\n  background-position: center top;\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: relative;\n}\n\n.banner[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  background: linear-gradient(transparent 50%, #242528);\n}\n\n.banner[_ngcontent-%COMP%]   .banner-bottom[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.banner[_ngcontent-%COMP%]   .banner-bottom[_ngcontent-%COMP%]   .banner-title[_ngcontent-%COMP%] {\n  text-align: center;\n  color: white;\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n\n.banner[_ngcontent-%COMP%]   .banner-bottom[_ngcontent-%COMP%]   .banner-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  width: 60%;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.banner[_ngcontent-%COMP%]   .banner-bottom[_ngcontent-%COMP%]   .banner-buttons[_ngcontent-%COMP%]   .mylist[_ngcontent-%COMP%] {\n  color: white;\n  text-align: center;\n}\n\n.banner[_ngcontent-%COMP%]   .banner-bottom[_ngcontent-%COMP%]   .banner-buttons[_ngcontent-%COMP%]   .mylist[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 36px;\n}\n\n.banner[_ngcontent-%COMP%]   .banner-bottom[_ngcontent-%COMP%]   .banner-buttons[_ngcontent-%COMP%]   .mylist[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.banner[_ngcontent-%COMP%]   .banner-bottom[_ngcontent-%COMP%]   .banner-buttons[_ngcontent-%COMP%]   .play[_ngcontent-%COMP%] {\n  background: white;\n  padding: 5px 10px;\n  border-radius: 3px;\n  display: flex;\n  align-items: center;\n  width: 100px;\n  justify-content: space-around;\n}\n\n.banner[_ngcontent-%COMP%]   .banner-bottom[_ngcontent-%COMP%]   .banner-buttons[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  color: white;\n  text-align: center;\n}\n\n.banner[_ngcontent-%COMP%]   .banner-bottom[_ngcontent-%COMP%]   .banner-buttons[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 36px;\n}\n\n.banner[_ngcontent-%COMP%]   .banner-bottom[_ngcontent-%COMP%]   .banner-buttons[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.tray[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-x: scroll;\n  padding: 10px 15px;\n}\n\n.tray[_ngcontent-%COMP%]   .tray-title[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n  padding-bottom: 10px;\n}\n\n.tray[_ngcontent-%COMP%]   .tray-inner[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.tray[_ngcontent-%COMP%]   .tray-inner[_ngcontent-%COMP%]   .tray-content[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.tray[_ngcontent-%COMP%]   .tray-inner[_ngcontent-%COMP%]   .tray-content[_ngcontent-%COMP%]   .tray-item[_ngcontent-%COMP%] {\n  height: 170px;\n  width: 120px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.tray[_ngcontent-%COMP%]   .tray-inner[_ngcontent-%COMP%]   .tray-content[_ngcontent-%COMP%]   .tray-item[_ngcontent-%COMP%]   .play-div[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.tray[_ngcontent-%COMP%]   .tray-inner[_ngcontent-%COMP%]   .tray-content[_ngcontent-%COMP%]   .tray-item[_ngcontent-%COMP%]   .play-div[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 24px;\n}\n\n.upcoming[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  color: white;\n  font-weight: bold;\n}\n\n.upcoming[_ngcontent-%COMP%]   .upcoming-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n\n.upcoming[_ngcontent-%COMP%]   .upcoming-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 5px 5px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2xvbmVzLXVpL2NvbXBvbmVudHMvbmV0ZmxpeC9DOlxcVXNlcnNcXHNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZXRvc1xcX2lvbmljXFxpb25pYzQtY29tcG9uZW50cy9zcmNcXGFwcFxccGFnZXNcXGNsb25lcy11aVxcY29tcG9uZW50c1xcbmV0ZmxpeFxcbmV0ZmxpeC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Nsb25lcy11aS9jb21wb25lbnRzL25ldGZsaXgvbmV0ZmxpeC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQ0NKOztBRENBO0VBQ0ksWUFBQTtFQUNBLCtCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEREk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxxREFBQTtBQ0dSOztBRERJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDR1I7O0FERlE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDSVo7O0FERlE7RUFDSSxhQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUNJWjs7QURIWTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQ0toQjs7QURIb0I7RUFDSSxlQUFBO0FDS3hCOztBREZnQjtFQUNJLGVBQUE7QUNJcEI7O0FERFk7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7QUNHaEI7O0FERFk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNHaEI7O0FERG9CO0VBQ0ksZUFBQTtBQ0d4Qjs7QURBZ0I7RUFDSSxlQUFBO0FDRXBCOztBRElBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNESjs7QURFSTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDQVI7O0FERUk7RUFDSSxhQUFBO0FDQVI7O0FEQ1E7RUFDSSxpQkFBQTtBQ0NaOztBREFZO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDRWhCOztBRERnQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDR3BCOztBREZvQjtFQUNJLFlBQUE7RUFDQSxlQUFBO0FDSXhCOztBRElJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNEUjs7QURLSTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtBQ0hSOztBRElRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FDRloiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jbG9uZXMtdWkvY29tcG9uZW50cy9uZXRmbGl4L25ldGZsaXgucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMjMyNTI4O1xyXG59XHJcbi5iYW5uZXIge1xyXG4gICAgaGVpZ2h0OiA3MHZoO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLm92ZXJsYXkge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCA1MCUsICMyNDI1MjgpO1xyXG4gICAgfVxyXG4gICAgLmJhbm5lci1ib3R0b20ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDEwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgLmJhbm5lci10aXRsZSB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJhbm5lci1idXR0b25zIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIC5teWxpc3Qge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgLmljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnBsYXkge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmluZm8ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgLmljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLnRyYXkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICAudHJheS10aXRsZSB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLnRyYXktaW5uZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLnRyYXktY29udGVudCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAudHJheS1pdGVtIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTcwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAucGxheS1kaXYge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4udXBjb21pbmcge1xyXG4gICAgLmRhdGUge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICBpb24taW1nIHtcclxuICAgIH1cclxuICAgIC51cGNvbWluZy1idXR0b25zIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDVweCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudHJhaWxlciB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hZGQge1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogIzIzMjUyODtcbn1cblxuLmJhbm5lciB7XG4gIGhlaWdodDogNzB2aDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJhbm5lciAub3ZlcmxheSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCA1MCUsICMyNDI1MjgpO1xufVxuLmJhbm5lciAuYmFubmVyLWJvdHRvbSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5iYW5uZXIgLmJhbm5lci1ib3R0b20gLmJhbm5lci10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5iYW5uZXIgLmJhbm5lci1ib3R0b20gLmJhbm5lci1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDYwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYmFubmVyIC5iYW5uZXItYm90dG9tIC5iYW5uZXItYnV0dG9ucyAubXlsaXN0IHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYmFubmVyIC5iYW5uZXItYm90dG9tIC5iYW5uZXItYnV0dG9ucyAubXlsaXN0IC5pY29uIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAzNnB4O1xufVxuLmJhbm5lciAuYmFubmVyLWJvdHRvbSAuYmFubmVyLWJ1dHRvbnMgLm15bGlzdCAudGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5iYW5uZXIgLmJhbm5lci1ib3R0b20gLmJhbm5lci1idXR0b25zIC5wbGF5IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDBweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4uYmFubmVyIC5iYW5uZXItYm90dG9tIC5iYW5uZXItYnV0dG9ucyAuaW5mbyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJhbm5lciAuYmFubmVyLWJvdHRvbSAuYmFubmVyLWJ1dHRvbnMgLmluZm8gLmljb24gaW9uLWljb24ge1xuICBmb250LXNpemU6IDM2cHg7XG59XG4uYmFubmVyIC5iYW5uZXItYm90dG9tIC5iYW5uZXItYnV0dG9ucyAuaW5mbyAudGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnRyYXkge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG59XG4udHJheSAudHJheS10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLnRyYXkgLnRyYXktaW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnRyYXkgLnRyYXktaW5uZXIgLnRyYXktY29udGVudCB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLnRyYXkgLnRyYXktaW5uZXIgLnRyYXktY29udGVudCAudHJheS1pdGVtIHtcbiAgaGVpZ2h0OiAxNzBweDtcbiAgd2lkdGg6IDEyMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udHJheSAudHJheS1pbm5lciAudHJheS1jb250ZW50IC50cmF5LWl0ZW0gLnBsYXktZGl2IHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRyYXkgLnRyYXktaW5uZXIgLnRyYXktY29udGVudCAudHJheS1pdGVtIC5wbGF5LWRpdiBpb24taWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4udXBjb21pbmcgLmRhdGUge1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4udXBjb21pbmcgLnVwY29taW5nLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi51cGNvbWluZyAudXBjb21pbmctYnV0dG9ucyBpb24tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDVweCA1cHggMDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NetflixPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-netflix',
          templateUrl: './netflix.page.html',
          styleUrls: ['./netflix.page.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=components-netflix-netflix-module-es5.js.map