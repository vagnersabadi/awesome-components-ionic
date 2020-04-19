function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-fivethree-components-app-bar-app-bar-module"], {
  /***/
  "./src/app/pages/fivethree/components/app-bar/app-bar-routing.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/fivethree/components/app-bar/app-bar-routing.module.ts ***!
    \******************************************************************************/

  /*! exports provided: AppBarPageRoutingModule */

  /***/
  function srcAppPagesFivethreeComponentsAppBarAppBarRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppBarPageRoutingModule", function () {
      return AppBarPageRoutingModule;
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


    var _app_bar_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-bar.page */
    "./src/app/pages/fivethree/components/app-bar/app-bar.page.ts");

    var routes = [{
      path: '',
      component: _app_bar_page__WEBPACK_IMPORTED_MODULE_2__["AppBarPage"]
    }];

    var AppBarPageRoutingModule = function AppBarPageRoutingModule() {
      _classCallCheck(this, AppBarPageRoutingModule);
    };

    AppBarPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppBarPageRoutingModule
    });
    AppBarPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppBarPageRoutingModule_Factory(t) {
        return new (t || AppBarPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppBarPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppBarPageRoutingModule, [{
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
  "./src/app/pages/fivethree/components/app-bar/app-bar.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/fivethree/components/app-bar/app-bar.module.ts ***!
    \**********************************************************************/

  /*! exports provided: AppBarPageModule */

  /***/
  function srcAppPagesFivethreeComponentsAppBarAppBarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppBarPageModule", function () {
      return AppBarPageModule;
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


    var _app_bar_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-bar-routing.module */
    "./src/app/pages/fivethree/components/app-bar/app-bar-routing.module.ts");
    /* harmony import */


    var _app_bar_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-bar.page */
    "./src/app/pages/fivethree/components/app-bar/app-bar.page.ts");
    /* harmony import */


    var _fivethree_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @fivethree/core */
    "./node_modules/@fivethree/core/__ivy_ngcc__/fesm2015/fivethree-core.js");

    var AppBarPageModule = function AppBarPageModule() {
      _classCallCheck(this, AppBarPageModule);
    };

    AppBarPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppBarPageModule
    });
    AppBarPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppBarPageModule_Factory(t) {
        return new (t || AppBarPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _app_bar_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppBarPageRoutingModule"], _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivAppBarModule"], _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivCenterModule"], _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivIfModule"], _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivFabModule"], _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivIconModule"], _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivFeatureDiscoveryModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppBarPageModule, {
        declarations: [_app_bar_page__WEBPACK_IMPORTED_MODULE_5__["AppBarPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _app_bar_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppBarPageRoutingModule"], _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivAppBarModule"], _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivCenterModule"], _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivIfModule"], _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivFabModule"], _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivIconModule"], _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivFeatureDiscoveryModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppBarPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _app_bar_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppBarPageRoutingModule"], _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivAppBarModule"], _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivCenterModule"], _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivIfModule"], _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivFabModule"], _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivIconModule"], _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivFeatureDiscoveryModule"]],
          declarations: [_app_bar_page__WEBPACK_IMPORTED_MODULE_5__["AppBarPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/fivethree/components/app-bar/app-bar.page.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/fivethree/components/app-bar/app-bar.page.ts ***!
    \********************************************************************/

  /*! exports provided: AppBarPage */

  /***/
  function srcAppPagesFivethreeComponentsAppBarAppBarPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppBarPage", function () {
      return AppBarPage;
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


    var _fivethree_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fivethree/core */
    "./node_modules/@fivethree/core/__ivy_ngcc__/fesm2015/fivethree-core.js");

    var AppBarPage = /*#__PURE__*/function () {
      function AppBarPage() {
        _classCallCheck(this, AppBarPage);

        this.titleMode = 'hide';
        this.position = 'center';
      }

      _createClass(AppBarPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppBarPage;
    }();

    AppBarPage.ɵfac = function AppBarPage_Factory(t) {
      return new (t || AppBarPage)();
    };

    AppBarPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppBarPage,
      selectors: [["app-app-bar"]],
      decls: 30,
      vars: 2,
      consts: [["slot", "start"], ["defaultHref", "/fivethree"], ["tabs", ""], ["slot", "bottom"], ["bar", ""], [3, "fivAppBarFab"], ["fab", ""], ["name", "color-wand"], ["left", "", "tab", "tab1", "href", "#"], ["name", "home"], ["left", "", "tab", "tab2", "href", "#"], ["name", "images"], ["right", "", "tab", "tab3", "href", "#"], ["name", "pizza", 3, "badge"], ["right", "", "tab", "tab4", "href", "#"], ["name", "chatbox-ellipses"]],
      template: function AppBarPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "App Bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-tabs", null, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "fiv-app-bar", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "fiv-fab", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "fiv-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "fiv-app-bar-tab", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "fiv-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "fiv-app-bar-tab", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "fiv-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Images");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "fiv-app-bar-tab", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "fiv-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Pizza");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "fiv-app-bar-tab", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "fiv-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fivAppBarFab", ctx.position);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("badge", 1);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTabs"], _fivethree_core__WEBPACK_IMPORTED_MODULE_2__["FivAppBar"], _fivethree_core__WEBPACK_IMPORTED_MODULE_2__["FivFab"], _fivethree_core__WEBPACK_IMPORTED_MODULE_2__["FivAppBarFabDirective"], _fivethree_core__WEBPACK_IMPORTED_MODULE_2__["FivIcon"], _fivethree_core__WEBPACK_IMPORTED_MODULE_2__["FivAppBarTab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"]],
      styles: [".container.min[_ngcontent-%COMP%] {\n  min-height: 70vh;\n  max-width: 411px;\n  display: block;\n  position: relative;\n  margin: 0 auto;\n  border: 2px solid var(--ion-color-dark);\n  cursor: url(/assets/icon/cursor.png), auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZml2ZXRocmVlL2NvbXBvbmVudHMvYXBwLWJhci9DOlxcVXNlcnNcXHNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZXRvc1xcX2lvbmljXFxpb25pYzQtY29tcG9uZW50cy9zcmNcXGFwcFxccGFnZXNcXGZpdmV0aHJlZVxcY29tcG9uZW50c1xcYXBwLWJhclxcYXBwLWJhci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2ZpdmV0aHJlZS9jb21wb25lbnRzL2FwcC1iYXIvYXBwLWJhci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHVDQUFBO0VBQ0EsMENBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpdmV0aHJlZS9jb21wb25lbnRzL2FwcC1iYXIvYXBwLWJhci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLm1pbiB7XHJcbiAgICBtaW4taGVpZ2h0OiA3MHZoO1xyXG4gICAgbWF4LXdpZHRoOiA0MTFweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICBjdXJzb3I6IHVybCgvYXNzZXRzL2ljb24vY3Vyc29yLnBuZyksIGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIGZpdi1hcHAtYmFyIHtcclxuICAgIC8vIC0tZml2LWljb24tY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgIC8vIC0tZml2LXNtYWxsLWljb24tYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG4gICAgLy8gLS1maXYtc21hbGwtaWNvbi1jb2xvcjogcmVkO1xyXG4gIFxyXG4gICAgLy8gLS1maXYtYmFkZ2UtYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG4gICAgLy8gLS1maXYtYmFkZ2UtY29sb3I6IHJlZDtcclxuICBcclxuICAgIC8vIC0tZml2LWRvdC1iYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbiAgXHJcbiAgICAvLyAtLWZpdi1pY29uLWFjdGl2LWNvbG9yOiByZWQ7XHJcbiAgfVxyXG4gICIsIi5jb250YWluZXIubWluIHtcbiAgbWluLWhlaWdodDogNzB2aDtcbiAgbWF4LXdpZHRoOiA0MTFweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgY3Vyc29yOiB1cmwoL2Fzc2V0cy9pY29uL2N1cnNvci5wbmcpLCBhdXRvO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppBarPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-app-bar',
          templateUrl: './app-bar.page.html',
          styleUrls: ['./app-bar.page.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-fivethree-components-app-bar-app-bar-module-es5.js.map