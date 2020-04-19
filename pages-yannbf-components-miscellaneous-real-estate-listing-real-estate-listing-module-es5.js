function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-miscellaneous-real-estate-listing-real-estate-listing-module"], {
  /***/
  "./src/app/pages/yannbf/components/miscellaneous/real-estate-listing/real-estate-listing.module.ts":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/pages/yannbf/components/miscellaneous/real-estate-listing/real-estate-listing.module.ts ***!
    \*********************************************************************************************************/

  /*! exports provided: RealEstateListingPageModule */

  /***/
  function srcAppPagesYannbfComponentsMiscellaneousRealEstateListingRealEstateListingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RealEstateListingPageModule", function () {
      return RealEstateListingPageModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _real_estate_listing_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./real-estate-listing.page */
    "./src/app/pages/yannbf/components/miscellaneous/real-estate-listing/real-estate-listing.page.ts");

    var routes = [{
      path: '',
      component: _real_estate_listing_page__WEBPACK_IMPORTED_MODULE_5__["RealEstateListingPage"]
    }];

    var RealEstateListingPageModule = function RealEstateListingPageModule() {
      _classCallCheck(this, RealEstateListingPageModule);
    };

    RealEstateListingPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: RealEstateListingPageModule
    });
    RealEstateListingPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function RealEstateListingPageModule_Factory(t) {
        return new (t || RealEstateListingPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RealEstateListingPageModule, {
        declarations: [_real_estate_listing_page__WEBPACK_IMPORTED_MODULE_5__["RealEstateListingPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RealEstateListingPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
          declarations: [_real_estate_listing_page__WEBPACK_IMPORTED_MODULE_5__["RealEstateListingPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/yannbf/components/miscellaneous/real-estate-listing/real-estate-listing.page.ts":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/pages/yannbf/components/miscellaneous/real-estate-listing/real-estate-listing.page.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: RealEstateListingPage */

  /***/
  function srcAppPagesYannbfComponentsMiscellaneousRealEstateListingRealEstateListingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RealEstateListingPage", function () {
      return RealEstateListingPage;
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

    function RealEstateListingPage_ion_col_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-col", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var feature_r163 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", feature_r163.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](feature_r163.title);
      }
    }

    function RealEstateListingPage_ion_row_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-col");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " info here ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "background-image": a0
      };
    };

    var _c1 = function _c1() {
      return [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    };

    var RealEstateListingPage = /*#__PURE__*/function () {
      function RealEstateListingPage() {
        _classCallCheck(this, RealEstateListingPage);

        this.estateProperty = {
          name: 'Pretty house',
          description: "It\u2019s a 2 bedroom, 2 bathroom laneway house that also has a spacious study off the upstairs landing.\n                  Sporting modern finishes and some cute touches like wall niches and bamboo accents,\n                  this laneway house is a great example of what can be built on most of Vancouver\u2019s standard 33 x 122\n                  foot lots.",
          price: '850000',
          image: 'https://static.lakana.com/mmm-global-us-east-1/photo/2018/11/16/2019-exterior-home-trends_1542398306940_19450740_ver1.0_1280_720.jpg',
          style: 'Modern Interior',
          size: '33\' Lot',
          features: [{
            icon: 'paw',
            title: 'Pet Friendly'
          }, {
            icon: 'bicycle',
            title: 'Bike Stations'
          }, {
            icon: 'rose',
            title: 'Beautiful Garden'
          }]
        };
      }

      _createClass(RealEstateListingPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RealEstateListingPage;
    }();

    RealEstateListingPage.ɵfac = function RealEstateListingPage_Factory(t) {
      return new (t || RealEstateListingPage)();
    };

    RealEstateListingPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RealEstateListingPage,
      selectors: [["app-real-estate-listing"]],
      decls: 32,
      vars: 13,
      consts: [["slot", "start"], ["defaultHref", "/"], ["elestic-header", "", 3, "fullscreen"], [1, "housing-image", 3, "ngStyle"], [1, "ion-padding", "housing-banner"], [1, "housing-title"], [1, "price"], [1, "main-content"], [1, "main-features"], ["class", "ion-text-center", 4, "ngFor", "ngForOf"], [1, "listing-details"], [1, "ion-margin-horizontal", 2, "text-align", "justify"], ["name", "home"], ["name", "pin"], [4, "ngFor", "ngForOf"], ["size", "large", "expand", "full", "color", "danger", 1, "ion-no-margin"], [1, "ion-text-center"], [3, "name"], [1, "item-block"]],
      template: function RealEstateListingPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-grid", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RealEstateListingPage_ion_col_16_Template, 4, 2, "ion-col", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ion-grid", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ion-col");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "ion-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ion-col");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "ion-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, RealEstateListingPage_ion_row_28_Template, 3, 0, "ion-row", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ion-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ion-button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " get in touch now ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.estateProperty.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullscreen", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, "url(" + ctx.estateProperty.image + ")"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.estateProperty.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.estateProperty.price, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.estateProperty.features);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.estateProperty.description, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.estateProperty.style, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.estateProperty.size, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c1));
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRow"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"]],
      styles: [".toolbar-background[_ngcontent-%COMP%] {\n  border-color: transparent;\n  background: rgba(0, 0, 0, 0.3);\n}\n.bar-button[_ngcontent-%COMP%], .toolbar-title[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.housing-image[_ngcontent-%COMP%] {\n  background-size: cover;\n  height: 50vh;\n  position: relative;\n}\n.housing-banner[_ngcontent-%COMP%] {\n  color: white;\n  background: rgba(0, 0, 0, 0.3);\n  height: 13vh;\n  width: 100vw;\n  position: absolute;\n  bottom: -1px;\n}\n.housing-banner[_ngcontent-%COMP%]   .housing-title[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.2rem;\n}\n.housing-banner[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n\n.content[_ngcontent-%COMP%] {\n  background: whitesmoke;\n}\n.scroll-content[_ngcontent-%COMP%] {\n  padding-top: 0 !important;\n}\n.main-content[_ngcontent-%COMP%] {\n  color: #666;\n}\n.listing-details[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 1rem;\n  margin: 0.45rem;\n  background: rgba(236, 236, 236, 0.8);\n}\n.listing-details[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n.main-features[_ngcontent-%COMP%] {\n  color: #3cc59a;\n}\n.main-features[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 5.5rem !important;\n}\n.item-block[_ngcontent-%COMP%] {\n  text-align: center;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbWlzY2VsbGFuZW91cy9yZWFsLWVzdGF0ZS1saXN0aW5nL0M6XFxVc2Vyc1xcc2FiYWRpXFxEb2N1bWVudHNcXFByb2pldG9zXFxfaW9uaWNcXGlvbmljNC1jb21wb25lbnRzL3NyY1xcYXBwXFxwYWdlc1xceWFubmJmXFxjb21wb25lbnRzXFxtaXNjZWxsYW5lb3VzXFxyZWFsLWVzdGF0ZS1saXN0aW5nXFxyZWFsLWVzdGF0ZS1saXN0aW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbWlzY2VsbGFuZW91cy9yZWFsLWVzdGF0ZS1saXN0aW5nL3JlYWwtZXN0YXRlLWxpc3RpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BLFdBQUE7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsOEJBVGM7QUNJaEI7QURRQTs7RUFFRSxZQVprQjtBQ09wQjtBRFFBLFVBQUE7QUFDQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDTEY7QURRQTtFQUNFLFlBdkJrQjtFQXdCbEIsOEJBMUJjO0VBMkJkLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDTEY7QURPRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ0xKO0FEUUU7RUFDRSxlQUFBO0FDTko7QURTQSxZQUFBO0FBQ0E7RUFDRSxzQkF4Q2M7QUNrQ2hCO0FEU0E7RUFDRSx5QkFBQTtBQ05GO0FEU0E7RUFDRSxXQWxEVztBQzRDYjtBRFFBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FwRGtCO0FDK0NwQjtBRE1FO0VBQ0Usb0JBQUE7QUNKSjtBRFFBO0VBQ0UsY0FBQTtBQ0xGO0FET0U7RUFDRSw0QkFBQTtBQ0xKO0FEU0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUNORiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL21pc2NlbGxhbmVvdXMvcmVhbC1lc3RhdGUtbGlzdGluZy9yZWFsLWVzdGF0ZS1saXN0aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRibGFjay1vdmVybGF5OiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiR0ZXh0LWNvbG9yOiAjNjY2O1xyXG4kYmFubmVyLXRleHQtY29sb3I6IHdoaXRlO1xyXG4kY29udGVudC1jb2xvcjogd2hpdGVzbW9rZTtcclxuJGRldGFpbC1iYWNrZ3JvdW5kOiByZ2JhKDIzNiwgMjM2LCAyMzYsIDAuOCk7XHJcblxyXG4vKiBIZWFkZXIgKi9cclxuLnRvb2xiYXItYmFja2dyb3VuZCB7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBiYWNrZ3JvdW5kOiAkYmxhY2stb3ZlcmxheTtcclxufVxyXG5cclxuLmJhci1idXR0b24sXHJcbi50b29sYmFyLXRpdGxlIHtcclxuICBjb2xvcjogJGJhbm5lci10ZXh0LWNvbG9yO1xyXG59XHJcblxyXG4vKiBJbWFnZSAqL1xyXG4uaG91c2luZy1pbWFnZSB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBoZWlnaHQ6IDUwdmg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaG91c2luZy1iYW5uZXIge1xyXG4gIGNvbG9yOiAkYmFubmVyLXRleHQtY29sb3I7XHJcbiAgYmFja2dyb3VuZDogJGJsYWNrLW92ZXJsYXk7XHJcbiAgaGVpZ2h0OiAxM3ZoO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAtMXB4O1xyXG5cclxuICAuaG91c2luZy10aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIH1cclxuXHJcbiAgLnByaWNlIHtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICB9XHJcbn1cclxuLyogQ29udGVudCAqL1xyXG4uY29udGVudCB7XHJcbiAgYmFja2dyb3VuZDogJGNvbnRlbnQtY29sb3I7XHJcbn1cclxuXHJcbi5zY3JvbGwtY29udGVudCB7XHJcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1haW4tY29udGVudCB7XHJcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG59XHJcbi5saXN0aW5nLWRldGFpbHMgaW9uLWNvbCB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBtYXJnaW46IDAuNDVyZW07XHJcbiAgYmFja2dyb3VuZDogJGRldGFpbC1iYWNrZ3JvdW5kO1xyXG4gIGlvbi1pY29uIHtcclxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLm1haW4tZmVhdHVyZXMge1xyXG4gIGNvbG9yOiAjM2NjNTlhO1xyXG5cclxuICBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDUuNXJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLml0ZW0tYmxvY2sge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4iLCIvKiBIZWFkZXIgKi9cbi50b29sYmFyLWJhY2tncm91bmQge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi5iYXItYnV0dG9uLFxuLnRvb2xiYXItdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi8qIEltYWdlICovXG4uaG91c2luZy1pbWFnZSB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogNTB2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaG91c2luZy1iYW5uZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgaGVpZ2h0OiAxM3ZoO1xuICB3aWR0aDogMTAwdnc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMXB4O1xufVxuLmhvdXNpbmctYmFubmVyIC5ob3VzaW5nLXRpdGxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuLmhvdXNpbmctYmFubmVyIC5wcmljZSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbn1cblxuLyogQ29udGVudCAqL1xuLmNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xufVxuXG4uc2Nyb2xsLWNvbnRlbnQge1xuICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xufVxuXG4ubWFpbi1jb250ZW50IHtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5saXN0aW5nLWRldGFpbHMgaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIG1hcmdpbjogMC40NXJlbTtcbiAgYmFja2dyb3VuZDogcmdiYSgyMzYsIDIzNiwgMjM2LCAwLjgpO1xufVxuLmxpc3RpbmctZGV0YWlscyBpb24tY29sIGlvbi1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG5cbi5tYWluLWZlYXR1cmVzIHtcbiAgY29sb3I6ICMzY2M1OWE7XG59XG4ubWFpbi1mZWF0dXJlcyBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogNS41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5pdGVtLWJsb2NrIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RealEstateListingPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-real-estate-listing',
          templateUrl: './real-estate-listing.page.html',
          styleUrls: ['./real-estate-listing.page.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-yannbf-components-miscellaneous-real-estate-listing-real-estate-listing-module-es5.js.map