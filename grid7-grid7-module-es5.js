function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["grid7-grid7-module"], {
  /***/
  "./src/app/pages/samples/components/grids/grid7/grid7-routing.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/samples/components/grids/grid7/grid7-routing.module.ts ***!
    \******************************************************************************/

  /*! exports provided: Grid7PageRoutingModule */

  /***/
  function srcAppPagesSamplesComponentsGridsGrid7Grid7RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Grid7PageRoutingModule", function () {
      return Grid7PageRoutingModule;
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


    var _grid7_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./grid7.page */
    "./src/app/pages/samples/components/grids/grid7/grid7.page.ts");

    var routes = [{
      path: '',
      component: _grid7_page__WEBPACK_IMPORTED_MODULE_2__["Grid7Page"]
    }];

    var Grid7PageRoutingModule = function Grid7PageRoutingModule() {
      _classCallCheck(this, Grid7PageRoutingModule);
    };

    Grid7PageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: Grid7PageRoutingModule
    });
    Grid7PageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function Grid7PageRoutingModule_Factory(t) {
        return new (t || Grid7PageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Grid7PageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Grid7PageRoutingModule, [{
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
  "./src/app/pages/samples/components/grids/grid7/grid7.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/samples/components/grids/grid7/grid7.module.ts ***!
    \**********************************************************************/

  /*! exports provided: Grid7PageModule */

  /***/
  function srcAppPagesSamplesComponentsGridsGrid7Grid7ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Grid7PageModule", function () {
      return Grid7PageModule;
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


    var _grid7_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./grid7-routing.module */
    "./src/app/pages/samples/components/grids/grid7/grid7-routing.module.ts");
    /* harmony import */


    var _grid7_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./grid7.page */
    "./src/app/pages/samples/components/grids/grid7/grid7.page.ts");

    var Grid7PageModule = function Grid7PageModule() {
      _classCallCheck(this, Grid7PageModule);
    };

    Grid7PageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: Grid7PageModule
    });
    Grid7PageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function Grid7PageModule_Factory(t) {
        return new (t || Grid7PageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _grid7_routing_module__WEBPACK_IMPORTED_MODULE_4__["Grid7PageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Grid7PageModule, {
        declarations: [_grid7_page__WEBPACK_IMPORTED_MODULE_5__["Grid7Page"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _grid7_routing_module__WEBPACK_IMPORTED_MODULE_4__["Grid7PageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Grid7PageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _grid7_routing_module__WEBPACK_IMPORTED_MODULE_4__["Grid7PageRoutingModule"]],
          declarations: [_grid7_page__WEBPACK_IMPORTED_MODULE_5__["Grid7Page"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/samples/components/grids/grid7/grid7.page.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/samples/components/grids/grid7/grid7.page.ts ***!
    \********************************************************************/

  /*! exports provided: Grid7Page */

  /***/
  function srcAppPagesSamplesComponentsGridsGrid7Grid7PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Grid7Page", function () {
      return Grid7Page;
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

    function Grid7Page_ion_col_8_ion_icon_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-icon", 20);
      }
    }

    function Grid7Page_ion_col_8_ion_icon_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-icon", 21);
      }
    }

    function Grid7Page_ion_col_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-card", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Grid7Page_ion_col_8_Template_div_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

          var i_r2 = ctx.index;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r5.favorites(i_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, Grid7Page_ion_col_8_ion_icon_3_Template, 1, 0, "ion-icon", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, Grid7Page_ion_col_8_ion_icon_4_Template, 1, 0, "ion-icon", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-col");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-row", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-col", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-label", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "ion-icon", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "(124)");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-col", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !item_r1.checked);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r1.checked);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.rate);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20B9", item_r1.regularPrice, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20B9", item_r1.salePrice, "");
      }
    }

    var Grid7Page = /*#__PURE__*/function () {
      function Grid7Page(gridServ) {
        _classCallCheck(this, Grid7Page);

        this.gridServ = gridServ;
        this.medicalList = this.gridServ.medicalList;
      }

      _createClass(Grid7Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "favorites",
        value: function favorites(index) {
          this.medicalList[index].checked = !this.medicalList[index].checked;
        }
      }]);

      return Grid7Page;
    }();

    Grid7Page.ɵfac = function Grid7Page_Factory(t) {
      return new (t || Grid7Page)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_grid_grid_service_service__WEBPACK_IMPORTED_MODULE_0__["GridServiceService"]));
    };

    Grid7Page.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: Grid7Page,
      selectors: [["app-grid7"]],
      decls: 9,
      vars: 1,
      consts: [["slot", "start"], ["defaultHref", "/grids"], [1, "title-ios"], ["margin-top", "", "margin-bottom", ""], ["size", "6", 4, "ngFor", "ngForOf"], ["size", "6"], ["margin-top", "", 1, "cardSection"], [1, "heartIcon", 3, "click"], ["slot", "end", "name", "heart", "class", "iconSize heart ", 4, "ngIf"], ["slot", "end", "name", "heart", "class", "iconSize heartRed", 4, "ngIf"], [3, "src"], [1, "contentText"], [1, "rowSection"], ["size", "6", 1, "colSection"], [1, "discountSection"], ["text-uppercase", ""], ["name", "star"], [1, "salesCount"], [1, "regularPriceSection"], [1, "PriceSection"], ["slot", "end", "name", "heart", 1, "iconSize", "heart"], ["slot", "end", "name", "heart", 1, "iconSize", "heartRed"]],
      template: function Grid7Page_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Product Card Grid X2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-row", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, Grid7Page_ion_col_8_Template, 25, 7, "ion-col", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.medicalList);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCard"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"]],
      styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: #eaeaea;\n}\n\n.cardSection[_ngcontent-%COMP%] {\n  background: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n}\n\n.cardSection[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 75%;\n  margin-top: 16px;\n}\n\n.cardSection[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%] {\n  padding: 16px 5px;\n  width: 100%;\n}\n\n.contentText[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: bold;\n  color: #4e4343;\n}\n\n.rowSection[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.discountSection[_ngcontent-%COMP%] {\n  background: #15bf15;\n  color: #fff;\n  border-radius: 5px;\n  width: 40px;\n  display: flex;\n  justify-content: center;\n  padding: 0 5px;\n}\n\n.regularPriceSection[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n}\n\n.colSection[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.salesCount[_ngcontent-%COMP%] {\n  padding-left: 2px;\n}\n\n.PriceSection[_ngcontent-%COMP%] {\n  color: #ff0000;\n  font-weight: bold;\n  font-size: 16px;\n  padding-left: 8px;\n}\n\n.heartIcon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n  font-size: 20px;\n}\n\n.heart[_ngcontent-%COMP%] {\n  color: #d4cccc;\n}\n\n.heartRed[_ngcontent-%COMP%] {\n  color: #ff0000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2FtcGxlcy9jb21wb25lbnRzL2dyaWRzL2dyaWQ3L0M6XFxVc2Vyc1xcVmFnbmVyIFNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZWN0c1xcX015XFxhd2Vzb21lLWNvbXBvbmVudHMtaW9uaWMvc3JjXFxhcHBcXHBhZ2VzXFxzYW1wbGVzXFxjb21wb25lbnRzXFxncmlkc1xcZ3JpZDdcXGdyaWQ3LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2FtcGxlcy9jb21wb25lbnRzL2dyaWRzL2dyaWQ3L2dyaWQ3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFRTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBRENBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ0VGOztBRENBO0VBQ0UsNkJBQUE7QUNFRjs7QURDQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FDRUY7O0FEQ0E7RUFDRSxpQkFBQTtBQ0VGOztBRENBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDRUY7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0VGOztBRENBO0VBQ0UsY0FBQTtBQ0VGOztBRENBO0VBQ0UsY0FBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2FtcGxlcy9jb21wb25lbnRzL2dyaWRzL2dyaWQ3L2dyaWQ3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6ICNlYWVhZWE7XHJcbn1cclxuXHJcbi5jYXJkU2VjdGlvbiB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDA7XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICB9XHJcblxyXG4gIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMTZweCA1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuLmNvbnRlbnRUZXh0IHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICM0ZTQzNDM7XHJcbn1cclxuLnJvd1NlY3Rpb24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5kaXNjb3VudFNlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQ6ICMxNWJmMTU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMCA1cHg7XHJcbn1cclxuXHJcbi5yZWd1bGFyUHJpY2VTZWN0aW9uIHtcclxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxufVxyXG5cclxuLmNvbFNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnNhbGVzQ291bnQge1xyXG4gIHBhZGRpbmctbGVmdDogMnB4O1xyXG59XHJcblxyXG4uUHJpY2VTZWN0aW9uIHtcclxuICBjb2xvcjogI2ZmMDAwMDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbn1cclxuXHJcbi5oZWFydEljb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDVweDtcclxuICByaWdodDogMTBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5oZWFydCB7XHJcbiAgY29sb3I6ICNkNGNjY2M7XHJcbn1cclxuXHJcbi5oZWFydFJlZCB7XHJcbiAgY29sb3I6ICNmZjAwMDA7XHJcbn1cclxuIiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNlYWVhZWE7XG59XG5cbi5jYXJkU2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDA7XG59XG4uY2FyZFNlY3Rpb24gaW1nIHtcbiAgd2lkdGg6IDc1JTtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cbi5jYXJkU2VjdGlvbiBpb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMTZweCA1cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGVudFRleHQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzRlNDM0Mztcbn1cblxuLnJvd1NlY3Rpb24ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRpc2NvdW50U2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICMxNWJmMTU7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMCA1cHg7XG59XG5cbi5yZWd1bGFyUHJpY2VTZWN0aW9uIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbi5jb2xTZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zYWxlc0NvdW50IHtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG59XG5cbi5QcmljZVNlY3Rpb24ge1xuICBjb2xvcjogI2ZmMDAwMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG5cbi5oZWFydEljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICByaWdodDogMTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uaGVhcnQge1xuICBjb2xvcjogI2Q0Y2NjYztcbn1cblxuLmhlYXJ0UmVkIHtcbiAgY29sb3I6ICNmZjAwMDA7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Grid7Page, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-grid7',
          templateUrl: './grid7.page.html',
          styleUrls: ['./grid7.page.scss']
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
//# sourceMappingURL=grid7-grid7-module-es5.js.map