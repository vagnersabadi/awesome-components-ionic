function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["slide-pagination-slide-pagination-module"], {
  /***/
  "./src/app/pages/yannbf/components/slides/slide-pagination/slide-pagination-routing.module.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/app/pages/yannbf/components/slides/slide-pagination/slide-pagination-routing.module.ts ***!
    \****************************************************************************************************/

  /*! exports provided: SlidePaginationPageRoutingModule */

  /***/
  function srcAppPagesYannbfComponentsSlidesSlidePaginationSlidePaginationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlidePaginationPageRoutingModule", function () {
      return SlidePaginationPageRoutingModule;
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


    var _slide_pagination_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./slide-pagination.page */
    "./src/app/pages/yannbf/components/slides/slide-pagination/slide-pagination.page.ts");

    var routes = [{
      path: '',
      component: _slide_pagination_page__WEBPACK_IMPORTED_MODULE_2__["SlidePaginationPage"]
    }];

    var SlidePaginationPageRoutingModule = function SlidePaginationPageRoutingModule() {
      _classCallCheck(this, SlidePaginationPageRoutingModule);
    };

    SlidePaginationPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SlidePaginationPageRoutingModule
    });
    SlidePaginationPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SlidePaginationPageRoutingModule_Factory(t) {
        return new (t || SlidePaginationPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SlidePaginationPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlidePaginationPageRoutingModule, [{
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
  "./src/app/pages/yannbf/components/slides/slide-pagination/slide-pagination.module.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/pages/yannbf/components/slides/slide-pagination/slide-pagination.module.ts ***!
    \********************************************************************************************/

  /*! exports provided: SlidePaginationPageModule */

  /***/
  function srcAppPagesYannbfComponentsSlidesSlidePaginationSlidePaginationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlidePaginationPageModule", function () {
      return SlidePaginationPageModule;
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


    var _slide_pagination_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./slide-pagination-routing.module */
    "./src/app/pages/yannbf/components/slides/slide-pagination/slide-pagination-routing.module.ts");
    /* harmony import */


    var _slide_pagination_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./slide-pagination.page */
    "./src/app/pages/yannbf/components/slides/slide-pagination/slide-pagination.page.ts");

    var SlidePaginationPageModule = function SlidePaginationPageModule() {
      _classCallCheck(this, SlidePaginationPageModule);
    };

    SlidePaginationPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SlidePaginationPageModule
    });
    SlidePaginationPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SlidePaginationPageModule_Factory(t) {
        return new (t || SlidePaginationPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _slide_pagination_routing_module__WEBPACK_IMPORTED_MODULE_4__["SlidePaginationPageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SlidePaginationPageModule, {
        declarations: [_slide_pagination_page__WEBPACK_IMPORTED_MODULE_5__["SlidePaginationPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _slide_pagination_routing_module__WEBPACK_IMPORTED_MODULE_4__["SlidePaginationPageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlidePaginationPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _slide_pagination_routing_module__WEBPACK_IMPORTED_MODULE_4__["SlidePaginationPageRoutingModule"]],
          declarations: [_slide_pagination_page__WEBPACK_IMPORTED_MODULE_5__["SlidePaginationPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/yannbf/components/slides/slide-pagination/slide-pagination.page.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/pages/yannbf/components/slides/slide-pagination/slide-pagination.page.ts ***!
    \******************************************************************************************/

  /*! exports provided: SlidePaginationPage */

  /***/
  function srcAppPagesYannbfComponentsSlidesSlidePaginationSlidePaginationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlidePaginationPage", function () {
      return SlidePaginationPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["slider"];
    var _c1 = ["segment"];
    var _c2 = ["segmentFooter"];

    function SlidePaginationPage_ion_segment_button_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-segment-button", 11);
      }

      if (rf & 2) {
        var i_r7 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", i_r7);
      }
    }

    function SlidePaginationPage_ion_slide_12_ion_card_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-card-subtitle");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Destination");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Madison, WI");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var _c3 = function _c3() {
      return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    };

    function SlidePaginationPage_ion_slide_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-slide");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-item", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SlidePaginationPage_ion_slide_12_Template_ion_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r11.prevStage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-text", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " SQL - No-Show");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " 6 R$ 0,00 \u2022 R$ 0,00 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SlidePaginationPage_ion_slide_12_Template_ion_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r13.nextStage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "ion-icon", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, SlidePaginationPage_ion_slide_12_ion_card_15_Template, 9, 0, "ion-card", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c3));
      }
    }

    function SlidePaginationPage_ion_segment_button_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-segment-button", 11);
      }

      if (rf & 2) {
        var i_r15 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", i_r15);
      }
    }

    var SlidePaginationPage = /*#__PURE__*/function () {
      function SlidePaginationPage() {
        _classCallCheck(this, SlidePaginationPage);

        this.sliderConfig = {
          initialSlide: 0,
          loop: false,
          freemode: {
            freeModeMomentum: false
          }
        };
      }

      _createClass(SlidePaginationPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "prevStage",
        value: function prevStage() {
          this.slider.slidePrev();
          this.activeSlide();
        }
      }, {
        key: "nextStage",
        value: function nextStage() {
          this.slider.slideNext();
          this.activeSlide();
        }
      }, {
        key: "activeSlide",
        value: function activeSlide() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var index;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.slider.getActiveIndex();

                  case 2:
                    index = _context.sent;
                    this.segment.value = index.toString();
                    this.segmentFooter.value = index.toString();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "stageSegmentChanged",
        value: function stageSegmentChanged(event) {
          this.slider.slideTo(event.detail.value);
        }
      }]);

      return SlidePaginationPage;
    }();

    SlidePaginationPage.ɵfac = function SlidePaginationPage_Factory(t) {
      return new (t || SlidePaginationPage)();
    };

    SlidePaginationPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SlidePaginationPage,
      selectors: [["app-slide-pagination"]],
      viewQuery: function SlidePaginationPage_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c2, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.slider = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.segment = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.segmentFooter = _t.first);
        }
      },
      decls: 18,
      vars: 7,
      consts: [["slot", "start"], ["defaultHref", "/"], ["scrollable", "", "value", "0", 3, "ionChange"], ["segment", ""], [3, "value", 4, "ngFor", "ngForOf"], ["pager", "true", 3, "options", "ionSlideTransitionEnd"], ["slider", ""], [4, "ngFor", "ngForOf"], [1, "ion-no-border"], [1, "segment-arrow"], ["segmentFooter", ""], [3, "value"], [1, "content-stage"], ["lines", "none", 1, "trasnparent", "title-stage"], ["slot", "icon-only", "fill", "clear", "slot", "start", 3, "click"], ["name", "chevron-back", "color", "grey-seven"], ["color", "grey-seven"], ["slot", "icon-only", "fill", "clear", "slot", "end", 3, "click"], ["name", "chevron-forward", "color", "grey-seven"], ["src", "assets/yannbf/img/lists/wishlist-1.jpg"]],
      template: function SlidePaginationPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Slide Pagination");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-segment", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function SlidePaginationPage_Template_ion_segment_ionChange_6_listener($event) {
            return ctx.stageSegmentChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SlidePaginationPage_ion_segment_button_8_Template, 1, 1, "ion-segment-button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-slides", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionSlideTransitionEnd", function SlidePaginationPage_Template_ion_slides_ionSlideTransitionEnd_10_listener() {
            return ctx.activeSlide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SlidePaginationPage_ion_slide_12_Template, 16, 2, "ion-slide", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-footer", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-segment", 2, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function SlidePaginationPage_Template_ion_segment_ionChange_15_listener($event) {
            return ctx.stageSegmentChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, SlidePaginationPage_ion_segment_button_17_Template, 1, 1, "ion-segment-button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.sliderConfig);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c3));
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSegment"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["SelectValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSegmentButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlide"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCardHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCardSubtitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCardTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCardContent"]],
      styles: ["ion-slides[_ngcontent-%COMP%], ion-slide[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-y: scroll;\n}\n\nion-segment[_ngcontent-%COMP%] {\n  --background: var(--ion-color-secondary);\n}\n\nion-segment[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\nion-segment-button[_ngcontent-%COMP%] {\n  --background-checked: var(--ion-color-tertiary);\n  border-right: 1px solid #fff;\n  min-height: 0px;\n  height: 20px;\n  min-width: 0;\n  --padding-end: 40px;\n}\n\n.segment-arrow[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%] {\n  --background: var(--ion-color-light);\n}\n\n.segment-arrow[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  --background-checked: var(--ion-color-medium);\n  display: table-cell;\n  padding: 0;\n  position: relative;\n  vertical-align: middle;\n  min-height: 0px;\n  height: 20px;\n  min-width: 0;\n}\n\n.segment-arrow[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]:before {\n  width: 10px;\n  height: 10px;\n  position: absolute;\n  right: -8px;\n  top: 2px;\n  border-top: 6px solid #fff;\n  border-right: 6px solid #fff;\n  transform: scaleX(0.3) rotate(45deg);\n  content: \" \";\n  background: transparent;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvc2xpZGVzL3NsaWRlLXBhZ2luYXRpb24vQzpcXFVzZXJzXFxWYWduZXIgU2FiYWRpXFxEb2N1bWVudHNcXFByb2plY3RzXFxfTXlcXGF3ZXNvbWUtY29tcG9uZW50cy1pb25pYy9zcmNcXGFwcFxccGFnZXNcXHlhbm5iZlxcY29tcG9uZW50c1xcc2xpZGVzXFxzbGlkZS1wYWdpbmF0aW9uXFxzbGlkZS1wYWdpbmF0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvc2xpZGVzL3NsaWRlLXBhZ2luYXRpb24vc2xpZGUtcGFnaW5hdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUksWUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSx3Q0FBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtBQ0NKOztBREVBO0VBQ0ksK0NBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FESUk7RUFDSSxvQ0FBQTtBQ0RSOztBRElJO0VBQ0ksNkNBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDRlI7O0FES0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBRUEsb0NBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0FDSFIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy9zbGlkZXMvc2xpZGUtcGFnaW5hdGlvbi9zbGlkZS1wYWdpbmF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zbGlkZXMsXHJcbmlvbi1zbGlkZSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbmlvbi1zZWdtZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbn1cclxuXHJcbmlvbi1zZWdtZW50Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi8vIEJMT0NPXHJcbmlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZmY7XHJcbiAgICBtaW4taGVpZ2h0OiAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBtaW4td2lkdGg6IDA7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0MHB4O1xyXG59XHJcblxyXG4uc2VnbWVudC1hcnJvdyB7XHJcbiAgICBcclxuICAgIGlvbi1zZWdtZW50IHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgICAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgbWluLXdpZHRoOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1zZWdtZW50LWJ1dHRvbjpiZWZvcmUge1xyXG4gICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IC04cHg7XHJcbiAgICAgICAgdG9wOiAycHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogNnB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiA2cHggc29saWQgI2ZmZjtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDAuMykgcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwLjMpIHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgY29udGVudDogXCIgXCI7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgIH1cclxufVxyXG4iLCJpb24tc2xpZGVzLFxuaW9uLXNsaWRlIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbmlvbi1zZWdtZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuaW9uLXNlZ21lbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZmY7XG4gIG1pbi1oZWlnaHQ6IDBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtaW4td2lkdGg6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDQwcHg7XG59XG5cbi5zZWdtZW50LWFycm93IGlvbi1zZWdtZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuLnNlZ21lbnQtYXJyb3cgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1pbi1oZWlnaHQ6IDBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtaW4td2lkdGg6IDA7XG59XG4uc2VnbWVudC1hcnJvdyBpb24tc2VnbWVudC1idXR0b246YmVmb3JlIHtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLThweDtcbiAgdG9wOiAycHg7XG4gIGJvcmRlci10b3A6IDZweCBzb2xpZCAjZmZmO1xuICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCAjZmZmO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDAuMykgcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMC4zKSByb3RhdGUoNDVkZWcpO1xuICBjb250ZW50OiBcIiBcIjtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHotaW5kZXg6IDE7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SlidePaginationPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-slide-pagination',
          templateUrl: './slide-pagination.page.html',
          styleUrls: ['./slide-pagination.page.scss']
        }]
      }], function () {
        return [];
      }, {
        slider: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['slider', {
            "static": true
          }]
        }],
        segment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['segment', {
            "static": true
          }]
        }],
        segmentFooter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['segmentFooter', {
            "static": true
          }]
        }]
      });
    })();
    /***/

  }
}]);
//# sourceMappingURL=slide-pagination-slide-pagination-module-es5.js.map