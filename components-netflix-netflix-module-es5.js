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
        var item_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, "url(" + item_r6.image + ")"));
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
        var tray_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tray_r4.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", tray_r4.items);
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
        var item_r9 = ctx.$implicit;

        var tray_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, "url(" + item_r9.image + ")"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tray_r7["continue"]);
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
        var tray_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tray_r7.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", tray_r7.items);
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
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, "url(" + ctx_r0.netflixSeriesData.banner.image + ")"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Watch ", ctx_r0.netflixSeriesData.banner.title, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.netflixSeriesData.trays_before);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Coming on ", ctx_r0.netflixSeriesData.upcoming.date, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.netflixSeriesData.upcoming.image);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.netflixSeriesData.trays_after);
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
        var item_r16 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, "url(" + item_r16.image + ")"));
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
        var tray_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tray_r14.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", tray_r14.items);
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
        var item_r19 = ctx.$implicit;

        var tray_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, "url(" + item_r19.image + ")"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tray_r17["continue"]);
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
        var tray_r17 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tray_r17.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", tray_r17.items);
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
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, "url(" + ctx_r1.netflixMoviesData.banner.image + ")"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Watch ", ctx_r1.netflixMoviesData.banner.title, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.netflixMoviesData.trays_before);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Coming on ", ctx_r1.netflixMoviesData.upcoming.date, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.netflixMoviesData.upcoming.image);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.netflixMoviesData.trays_after);
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
      styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: #232528;\n}\n\n.banner[_ngcontent-%COMP%] {\n  height: 70vh;\n  background-position: center top;\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: relative;\n}\n\n.banner[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  background: linear-gradient(transparent 50%, #242528);\n}\n\n.banner[_ngcontent-%COMP%]   .banner-bottom[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.banner[_ngcontent-%COMP%]   .banner-bottom[_ngcontent-%COMP%]   .banner-title[_ngcontent-%COMP%] {\n  text-align: center;\n  color: white;\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n\n.banner[_ngcontent-%COMP%]   .banner-bottom[_ngcontent-%COMP%]   .banner-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  width: 60%;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.banner[_ngcontent-%COMP%]   .banner-bottom[_ngcontent-%COMP%]   .banner-buttons[_ngcontent-%COMP%]   .mylist[_ngcontent-%COMP%] {\n  color: white;\n  text-align: center;\n}\n\n.banner[_ngcontent-%COMP%]   .banner-bottom[_ngcontent-%COMP%]   .banner-buttons[_ngcontent-%COMP%]   .mylist[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 36px;\n}\n\n.banner[_ngcontent-%COMP%]   .banner-bottom[_ngcontent-%COMP%]   .banner-buttons[_ngcontent-%COMP%]   .mylist[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.banner[_ngcontent-%COMP%]   .banner-bottom[_ngcontent-%COMP%]   .banner-buttons[_ngcontent-%COMP%]   .play[_ngcontent-%COMP%] {\n  background: white;\n  padding: 5px 10px;\n  border-radius: 3px;\n  display: flex;\n  align-items: center;\n  width: 100px;\n  justify-content: space-around;\n}\n\n.banner[_ngcontent-%COMP%]   .banner-bottom[_ngcontent-%COMP%]   .banner-buttons[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  color: white;\n  text-align: center;\n}\n\n.banner[_ngcontent-%COMP%]   .banner-bottom[_ngcontent-%COMP%]   .banner-buttons[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 36px;\n}\n\n.banner[_ngcontent-%COMP%]   .banner-bottom[_ngcontent-%COMP%]   .banner-buttons[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.tray[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-x: scroll;\n  padding: 10px 15px;\n}\n\n.tray[_ngcontent-%COMP%]   .tray-title[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n  padding-bottom: 10px;\n}\n\n.tray[_ngcontent-%COMP%]   .tray-inner[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.tray[_ngcontent-%COMP%]   .tray-inner[_ngcontent-%COMP%]   .tray-content[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.tray[_ngcontent-%COMP%]   .tray-inner[_ngcontent-%COMP%]   .tray-content[_ngcontent-%COMP%]   .tray-item[_ngcontent-%COMP%] {\n  height: 170px;\n  width: 120px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.tray[_ngcontent-%COMP%]   .tray-inner[_ngcontent-%COMP%]   .tray-content[_ngcontent-%COMP%]   .tray-item[_ngcontent-%COMP%]   .play-div[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.tray[_ngcontent-%COMP%]   .tray-inner[_ngcontent-%COMP%]   .tray-content[_ngcontent-%COMP%]   .tray-item[_ngcontent-%COMP%]   .play-div[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 24px;\n}\n\n.upcoming[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  color: white;\n  font-weight: bold;\n}\n\n.upcoming[_ngcontent-%COMP%]   .upcoming-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n\n.upcoming[_ngcontent-%COMP%]   .upcoming-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 5px 5px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2xvbmVzLXVpL2NvbXBvbmVudHMvbmV0ZmxpeC9DOlxcVXNlcnNcXFZhZ25lciBTYWJhZGlcXERvY3VtZW50c1xcUHJvamVjdHNcXF9NeVxcYXdlc29tZS1jb21wb25lbnRzLWlvbmljL3NyY1xcYXBwXFxwYWdlc1xcY2xvbmVzLXVpXFxjb21wb25lbnRzXFxuZXRmbGl4XFxuZXRmbGl4LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2xvbmVzLXVpL2NvbXBvbmVudHMvbmV0ZmxpeC9uZXRmbGl4LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURESTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHFEQUFBO0FDR1I7O0FEREk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNHUjs7QURGUTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNJWjs7QURGUTtFQUNJLGFBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ0laOztBREhZO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FDS2hCOztBREhvQjtFQUNJLGVBQUE7QUNLeEI7O0FERmdCO0VBQ0ksZUFBQTtBQ0lwQjs7QUREWTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQ0doQjs7QUREWTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQ0doQjs7QUREb0I7RUFDSSxlQUFBO0FDR3hCOztBREFnQjtFQUNJLGVBQUE7QUNFcEI7O0FESUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0RKOztBREVJO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNBUjs7QURFSTtFQUNJLGFBQUE7QUNBUjs7QURDUTtFQUNJLGlCQUFBO0FDQ1o7O0FEQVk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNFaEI7O0FERGdCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNHcEI7O0FERm9CO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUNJeEI7O0FESUk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0RSOztBREtJO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0FDSFI7O0FESVE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNGWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Nsb25lcy11aS9jb21wb25lbnRzL25ldGZsaXgvbmV0ZmxpeC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMyMzI1Mjg7XHJcbn1cclxuLmJhbm5lciB7XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAub3ZlcmxheSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDUwJSwgIzI0MjUyOCk7XHJcbiAgICB9XHJcbiAgICAuYmFubmVyLWJvdHRvbSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMTBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAuYmFubmVyLXRpdGxlIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYmFubmVyLWJ1dHRvbnMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgLm15bGlzdCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAuaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucGxheSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaW5mbyB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAuaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4udHJheSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIC50cmF5LXRpdGxlIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbiAgICAudHJheS1pbm5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAudHJheS1jb250ZW50IHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgIC50cmF5LWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNzBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIC5wbGF5LWRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi51cGNvbWluZyB7XHJcbiAgICAuZGF0ZSB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIGlvbi1pbWcge1xyXG4gICAgfVxyXG4gICAgLnVwY29taW5nLWJ1dHRvbnMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggNXB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50cmFpbGVyIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFkZCB7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjMjMyNTI4O1xufVxuXG4uYmFubmVyIHtcbiAgaGVpZ2h0OiA3MHZoO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYmFubmVyIC5vdmVybGF5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDUwJSwgIzI0MjUyOCk7XG59XG4uYmFubmVyIC5iYW5uZXItYm90dG9tIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmJhbm5lciAuYmFubmVyLWJvdHRvbSAuYmFubmVyLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmJhbm5lciAuYmFubmVyLWJvdHRvbSAuYmFubmVyLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogNjAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5iYW5uZXIgLmJhbm5lci1ib3R0b20gLmJhbm5lci1idXR0b25zIC5teWxpc3Qge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5iYW5uZXIgLmJhbm5lci1ib3R0b20gLmJhbm5lci1idXR0b25zIC5teWxpc3QgLmljb24gaW9uLWljb24ge1xuICBmb250LXNpemU6IDM2cHg7XG59XG4uYmFubmVyIC5iYW5uZXItYm90dG9tIC5iYW5uZXItYnV0dG9ucyAubXlsaXN0IC50ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmJhbm5lciAuYmFubmVyLWJvdHRvbSAuYmFubmVyLWJ1dHRvbnMgLnBsYXkge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5iYW5uZXIgLmJhbm5lci1ib3R0b20gLmJhbm5lci1idXR0b25zIC5pbmZvIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYmFubmVyIC5iYW5uZXItYm90dG9tIC5iYW5uZXItYnV0dG9ucyAuaW5mbyAuaWNvbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbn1cbi5iYW5uZXIgLmJhbm5lci1ib3R0b20gLmJhbm5lci1idXR0b25zIC5pbmZvIC50ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4udHJheSB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbn1cbi50cmF5IC50cmF5LXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4udHJheSAudHJheS1pbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4udHJheSAudHJheS1pbm5lciAudHJheS1jb250ZW50IHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4udHJheSAudHJheS1pbm5lciAudHJheS1jb250ZW50IC50cmF5LWl0ZW0ge1xuICBoZWlnaHQ6IDE3MHB4O1xuICB3aWR0aDogMTIwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50cmF5IC50cmF5LWlubmVyIC50cmF5LWNvbnRlbnQgLnRyYXktaXRlbSAucGxheS1kaXYge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udHJheSAudHJheS1pbm5lciAudHJheS1jb250ZW50IC50cmF5LWl0ZW0gLnBsYXktZGl2IGlvbi1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi51cGNvbWluZyAuZGF0ZSB7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi51cGNvbWluZyAudXBjb21pbmctYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLnVwY29taW5nIC51cGNvbWluZy1idXR0b25zIGlvbi1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNXB4IDVweCAwO1xufSJdfQ== */"]
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