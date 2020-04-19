function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["grid1-grid1-module"], {
  /***/
  "./src/app/pages/samples/components/grids/grid1/grid1-routing.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/samples/components/grids/grid1/grid1-routing.module.ts ***!
    \******************************************************************************/

  /*! exports provided: Grid1PageRoutingModule */

  /***/
  function srcAppPagesSamplesComponentsGridsGrid1Grid1RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Grid1PageRoutingModule", function () {
      return Grid1PageRoutingModule;
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


    var _grid1_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./grid1.page */
    "./src/app/pages/samples/components/grids/grid1/grid1.page.ts");

    var routes = [{
      path: '',
      component: _grid1_page__WEBPACK_IMPORTED_MODULE_2__["Grid1Page"]
    }];

    var Grid1PageRoutingModule = function Grid1PageRoutingModule() {
      _classCallCheck(this, Grid1PageRoutingModule);
    };

    Grid1PageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: Grid1PageRoutingModule
    });
    Grid1PageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function Grid1PageRoutingModule_Factory(t) {
        return new (t || Grid1PageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Grid1PageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Grid1PageRoutingModule, [{
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
  "./src/app/pages/samples/components/grids/grid1/grid1.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/samples/components/grids/grid1/grid1.module.ts ***!
    \**********************************************************************/

  /*! exports provided: Grid1PageModule */

  /***/
  function srcAppPagesSamplesComponentsGridsGrid1Grid1ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Grid1PageModule", function () {
      return Grid1PageModule;
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


    var _grid1_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./grid1-routing.module */
    "./src/app/pages/samples/components/grids/grid1/grid1-routing.module.ts");
    /* harmony import */


    var _grid1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./grid1.page */
    "./src/app/pages/samples/components/grids/grid1/grid1.page.ts");

    var Grid1PageModule = function Grid1PageModule() {
      _classCallCheck(this, Grid1PageModule);
    };

    Grid1PageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: Grid1PageModule
    });
    Grid1PageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function Grid1PageModule_Factory(t) {
        return new (t || Grid1PageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _grid1_routing_module__WEBPACK_IMPORTED_MODULE_4__["Grid1PageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Grid1PageModule, {
        declarations: [_grid1_page__WEBPACK_IMPORTED_MODULE_5__["Grid1Page"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _grid1_routing_module__WEBPACK_IMPORTED_MODULE_4__["Grid1PageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Grid1PageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _grid1_routing_module__WEBPACK_IMPORTED_MODULE_4__["Grid1PageRoutingModule"]],
          declarations: [_grid1_page__WEBPACK_IMPORTED_MODULE_5__["Grid1Page"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/samples/components/grids/grid1/grid1.page.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/samples/components/grids/grid1/grid1.page.ts ***!
    \********************************************************************/

  /*! exports provided: Grid1Page */

  /***/
  function srcAppPagesSamplesComponentsGridsGrid1Grid1PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Grid1Page", function () {
      return Grid1Page;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_grid_grid_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../../../services/grid/grid-service.service */
    "./src/app/services/grid/grid-service.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["slides"];

    function Grid1Page_ion_col_9_ion_badge_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-badge", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r383 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", data_r383.discount, "%");
      }
    }

    function Grid1Page_ion_col_9_ion_col_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-col", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-text", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r383 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

        var ctx_r385 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", data_r383.currency, "", data_r383.cost_price, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", data_r383.currency, "", ctx_r385.gridServ.calculate(data_r383.cost_price, data_r383.discount), "");
      }
    }

    function Grid1Page_ion_col_9_ion_col_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-col", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-text", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r383 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", data_r383.currency, "", data_r383.cost_price, "");
      }
    }

    function Grid1Page_ion_col_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-col", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-card", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, Grid1Page_ion_col_9_ion_badge_2_Template, 2, 1, "ion-badge", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, Grid1Page_ion_col_9_ion_col_7_Template, 7, 4, "ion-col", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, Grid1Page_ion_col_9_ion_col_8_Template, 5, 2, "ion-col", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-col", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "h6", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r383 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", data_r383.offer);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", data_r383.image[0], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", data_r383.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", data_r383.offer);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !data_r383.offer);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", data_r383.bought, "+ bought this");
      }
    }

    var Grid1Page = /*#__PURE__*/function () {
      function Grid1Page(gridServ) {
        _classCallCheck(this, Grid1Page);

        this.gridServ = gridServ;
        this.segment = '';
        this.index = 0;
        this.data = [];
        this.products = this.gridServ.products_1;
        this.data = this.gridServ.tabs;
      }

      _createClass(Grid1Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "segmentChange",
        value: function segmentChange(event) {
          console.log('event', event);
          this.segment = event.detail.value;
        }
      }, {
        key: "updateSlide",
        value: function updateSlide(i) {
          console.log('index', i, typeof i);
          this.slides.slideTo(i, 300);
        }
      }, {
        key: "change",
        value: function change() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.slides.getActiveIndex().then(function (data) {
                      return _this.index = data;
                    });

                  case 2:
                    this.segment = this.data[this.index].title;
                    this.drag();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "drag",
        value: function drag() {
          var distanceToScroll = 0;

          for (var index in this.data) {
            if (parseInt(index) < this.index) {
              distanceToScroll = distanceToScroll + document.getElementById('seg_' + index).offsetWidth + 24;
            }
          }

          document.getElementById('dag').scrollLeft = distanceToScroll;
        }
      }]);

      return Grid1Page;
    }();

    Grid1Page.ɵfac = function Grid1Page_Factory(t) {
      return new (t || Grid1Page)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_grid_grid_service_service__WEBPACK_IMPORTED_MODULE_1__["GridServiceService"]));
    };

    Grid1Page.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: Grid1Page,
      selectors: [["app-grid1"]],
      viewQuery: function Grid1Page_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.slides = _t.first);
        }
      },
      decls: 10,
      vars: 1,
      consts: [["slot", "start"], ["defaultHref", "/grids"], ["size", "6", 4, "ngFor", "ngForOf"], ["size", "6"], ["no-margin", "", 1, "card"], ["class", "badge", 4, "ngIf"], [3, "src", "alt"], ["no-padding", "", 4, "ngIf"], ["text-left", "", "no-padding", ""], ["text-left", "", 1, "subtitle"], [1, "badge"], ["no-padding", ""], ["text-left", ""], [1, "price"], [1, "inline"]],
      template: function Grid1Page_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-buttons", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-back-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Shop Grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, Grid1Page_ion_col_9_Template, 13, 6, "ion-col", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.products);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCard"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBadge"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonText"]],
      styles: ["ion-content[_ngcontent-%COMP%] {\n  --background:#f4f5f8;\n}\n\n.card[_ngcontent-%COMP%] {\n  box-shadow: unset;\n  border-radius: 9px;\n  background-color: white !important;\n}\n\n.price[_ngcontent-%COMP%] {\n  font-size: 18px;\n  float: left;\n  margin: 3px;\n}\n\n.inline[_ngcontent-%COMP%] {\n  font-size: 15px;\n  -webkit-margin-end: 5px;\n          margin-inline-end: 5px;\n  text-decoration: line-through;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #787878;\n}\n\n.badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10%;\n  left: 0;\n  background-color: rgba(12, 12, 12, 0.75);\n  border-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2FtcGxlcy9jb21wb25lbnRzL2dyaWRzL2dyaWQxL0M6XFxVc2Vyc1xcc2FiYWRpXFxEb2N1bWVudHNcXFByb2pldG9zXFxfaW9uaWNcXGlvbmljNC1jb21wb25lbnRzL3NyY1xcYXBwXFxwYWdlc1xcc2FtcGxlc1xcY29tcG9uZW50c1xcZ3JpZHNcXGdyaWQxXFxncmlkMS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NhbXBsZXMvY29tcG9uZW50cy9ncmlkcy9ncmlkMS9ncmlkMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0FDQ0o7O0FEQ0E7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7RUFDQSx1QkFBQTtVQUFBLHNCQUFBO0VBQ0EsNkJBQUE7QUNHSjs7QUREQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDSUo7O0FERkE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQkFBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2FtcGxlcy9jb21wb25lbnRzL2dyaWRzL2dyaWQxL2dyaWQxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNmNGY1Zjg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIGJveC1zaGFkb3c6IHVuc2V0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4ucHJpY2Uge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW46IDNweDtcclxufVxyXG4uaW5saW5lIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiA1cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxufVxyXG4uc3VidGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IHJnYigxMjAsIDEyMCwgMTIwKTtcclxufVxyXG4uYmFkZ2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMiwgMTIsIDEyLCAuNzUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiNmNGY1Zjg7XG59XG5cbi5jYXJkIHtcbiAgYm94LXNoYWRvdzogdW5zZXQ7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLnByaWNlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAzcHg7XG59XG5cbi5pbmxpbmUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiA1cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuXG4uc3VidGl0bGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNzg3ODc4O1xufVxuXG4uYmFkZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAlO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyLCAxMiwgMTIsIDAuNzUpO1xuICBib3JkZXItcmFkaXVzOiAwO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](Grid1Page, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'app-grid1',
          templateUrl: './grid1.page.html',
          styleUrls: ['./grid1.page.scss']
        }]
      }], function () {
        return [{
          type: _services_grid_grid_service_service__WEBPACK_IMPORTED_MODULE_1__["GridServiceService"]
        }];
      }, {
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['slides', {
            "static": true
          }]
        }]
      });
    })();
    /***/

  }
}]);
//# sourceMappingURL=grid1-grid1-module-es5.js.map