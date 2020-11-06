function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["grid5-grid5-module"], {
  /***/
  "./src/app/pages/samples/components/grids/grid5/grid5-routing.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/samples/components/grids/grid5/grid5-routing.module.ts ***!
    \******************************************************************************/

  /*! exports provided: Grid5PageRoutingModule */

  /***/
  function srcAppPagesSamplesComponentsGridsGrid5Grid5RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Grid5PageRoutingModule", function () {
      return Grid5PageRoutingModule;
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


    var _grid5_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./grid5.page */
    "./src/app/pages/samples/components/grids/grid5/grid5.page.ts");

    var routes = [{
      path: '',
      component: _grid5_page__WEBPACK_IMPORTED_MODULE_2__["Grid5Page"]
    }];

    var Grid5PageRoutingModule = function Grid5PageRoutingModule() {
      _classCallCheck(this, Grid5PageRoutingModule);
    };

    Grid5PageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: Grid5PageRoutingModule
    });
    Grid5PageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function Grid5PageRoutingModule_Factory(t) {
        return new (t || Grid5PageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Grid5PageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Grid5PageRoutingModule, [{
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
  "./src/app/pages/samples/components/grids/grid5/grid5.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/samples/components/grids/grid5/grid5.module.ts ***!
    \**********************************************************************/

  /*! exports provided: Grid5PageModule */

  /***/
  function srcAppPagesSamplesComponentsGridsGrid5Grid5ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Grid5PageModule", function () {
      return Grid5PageModule;
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


    var _grid5_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./grid5-routing.module */
    "./src/app/pages/samples/components/grids/grid5/grid5-routing.module.ts");
    /* harmony import */


    var _grid5_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./grid5.page */
    "./src/app/pages/samples/components/grids/grid5/grid5.page.ts");

    var Grid5PageModule = function Grid5PageModule() {
      _classCallCheck(this, Grid5PageModule);
    };

    Grid5PageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: Grid5PageModule
    });
    Grid5PageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function Grid5PageModule_Factory(t) {
        return new (t || Grid5PageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _grid5_routing_module__WEBPACK_IMPORTED_MODULE_4__["Grid5PageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Grid5PageModule, {
        declarations: [_grid5_page__WEBPACK_IMPORTED_MODULE_5__["Grid5Page"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _grid5_routing_module__WEBPACK_IMPORTED_MODULE_4__["Grid5PageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Grid5PageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _grid5_routing_module__WEBPACK_IMPORTED_MODULE_4__["Grid5PageRoutingModule"]],
          declarations: [_grid5_page__WEBPACK_IMPORTED_MODULE_5__["Grid5Page"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/samples/components/grids/grid5/grid5.page.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/samples/components/grids/grid5/grid5.page.ts ***!
    \********************************************************************/

  /*! exports provided: Grid5Page */

  /***/
  function srcAppPagesSamplesComponentsGridsGrid5Grid5PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Grid5Page", function () {
      return Grid5Page;
    });
    /* harmony import */


    var _services_grid_grid_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../../../../services/grid/grid-service.service */
    "./src/app/services/grid/grid-service.service.ts");
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

    function Grid5Page_ion_card_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-card", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-img", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r2.image);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.title);
      }
    }

    function Grid5Page_ion_card_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-card", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-img", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r3.image);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r3.title);
      }
    }

    var Grid5Page = /*#__PURE__*/function () {
      function Grid5Page(gridServ) {
        _classCallCheck(this, Grid5Page);

        this.gridServ = gridServ;
        this.buzz = this.gridServ.buzz;
        this.buzz1 = this.gridServ.buzz1;
      }

      _createClass(Grid5Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Grid5Page;
    }();

    Grid5Page.ɵfac = function Grid5Page_Factory(t) {
      return new (t || Grid5Page)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_grid_grid_service_service__WEBPACK_IMPORTED_MODULE_0__["GridServiceService"]));
    };

    Grid5Page.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: Grid5Page,
      selectors: [["app-grid5"]],
      decls: 12,
      vars: 2,
      consts: [["slot", "start"], ["defaultHref", "/grids"], ["text-capitalize", "", 1, "title-ios"], ["size", "6"], ["no-margin", "", 4, "ngFor", "ngForOf"], ["no-margin", ""], [3, "src"], [1, "card-title"]],
      template: function Grid5Page_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Masonry Grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-col", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, Grid5Page_ion_card_9_Template, 5, 2, "ion-card", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-col", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, Grid5Page_ion_card_11_Template, 5, 2, "ion-card", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.buzz);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.buzz1);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCardHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonImg"]],
      styles: [".txt[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-top: 0;\n}\n\nion-card[_ngcontent-%COMP%] {\n  margin: 0;\n  margin-bottom: 10px;\n  box-shadow: 0px 0px 0px 0px white;\n}\n\nion-card[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\nion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%] {\n  padding: 0;\n  border-radius: 20px;\n  overflow: hidden;\n}\n\nion-card-header[_ngcontent-%COMP%]:before {\n  content: \"\";\n  background: #2d2d2d85;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-bottom: 30px;\n  bottom: 5px;\n  color: white;\n  padding: 0 8px;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2FtcGxlcy9jb21wb25lbnRzL2dyaWRzL2dyaWQ1L0M6XFxVc2Vyc1xcVmFnbmVyIFNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZWN0c1xcX015XFxhd2Vzb21lLWNvbXBvbmVudHMtaW9uaWMvc3JjXFxhcHBcXHBhZ2VzXFxzYW1wbGVzXFxjb21wb25lbnRzXFxncmlkc1xcZ3JpZDVcXGdyaWQ1LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2FtcGxlcy9jb21wb25lbnRzL2dyaWRzL2dyaWQ1L2dyaWQ1LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FEQ0E7RUFFRSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtBQ0NGOztBRENFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0NKOztBRENFO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURDQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zYW1wbGVzL2NvbXBvbmVudHMvZ3JpZHMvZ3JpZDUvZ3JpZDUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnR4dCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuaW9uLWNhcmQge1xyXG4gIC8vIHdpZHRoOiAxNjBweDtcclxuICBtYXJnaW46IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggd2hpdGU7XHJcblxyXG4gIGlvbi1pbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG4gIGlvbi1jYXJkLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG59XHJcbmlvbi1jYXJkLWhlYWRlcjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgYmFja2dyb3VuZDogIzJkMmQyZDg1O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmNhcmQtdGl0bGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIC8vdG9wOiAwO1xyXG4gIGJvdHRvbTogNXB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAwIDhweDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuIiwiLnR4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuaW9uLWNhcmQge1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCB3aGl0ZTtcbn1cbmlvbi1jYXJkIGlvbi1pbWcge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5pb24tY2FyZCBpb24tY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5pb24tY2FyZC1oZWFkZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogIzJkMmQyZDg1O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBib3R0b206IDVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwIDhweDtcbiAgbWFyZ2luOiAwO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Grid5Page, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-grid5',
          templateUrl: './grid5.page.html',
          styleUrls: ['./grid5.page.scss']
        }]
      }], function () {
        return [{
          type: _services_grid_grid_service_service__WEBPACK_IMPORTED_MODULE_0__["GridServiceService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=grid5-grid5-module-es5.js.map