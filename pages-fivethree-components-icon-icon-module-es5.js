function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-fivethree-components-icon-icon-module"], {
  /***/
  "./src/app/pages/fivethree/components/icon/icon-routing.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/pages/fivethree/components/icon/icon-routing.module.ts ***!
    \************************************************************************/

  /*! exports provided: IconPageRoutingModule */

  /***/
  function srcAppPagesFivethreeComponentsIconIconRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IconPageRoutingModule", function () {
      return IconPageRoutingModule;
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


    var _icon_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./icon.page */
    "./src/app/pages/fivethree/components/icon/icon.page.ts");

    var routes = [{
      path: '',
      component: _icon_page__WEBPACK_IMPORTED_MODULE_2__["IconPage"]
    }];

    var IconPageRoutingModule = function IconPageRoutingModule() {
      _classCallCheck(this, IconPageRoutingModule);
    };

    IconPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: IconPageRoutingModule
    });
    IconPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function IconPageRoutingModule_Factory(t) {
        return new (t || IconPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IconPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconPageRoutingModule, [{
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
  "./src/app/pages/fivethree/components/icon/icon.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/fivethree/components/icon/icon.module.ts ***!
    \****************************************************************/

  /*! exports provided: IconPageModule */

  /***/
  function srcAppPagesFivethreeComponentsIconIconModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IconPageModule", function () {
      return IconPageModule;
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


    var _icon_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./icon-routing.module */
    "./src/app/pages/fivethree/components/icon/icon-routing.module.ts");
    /* harmony import */


    var _icon_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./icon.page */
    "./src/app/pages/fivethree/components/icon/icon.page.ts");
    /* harmony import */


    var _fivethree_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @fivethree/core */
    "./node_modules/@fivethree/core/__ivy_ngcc__/fesm2015/fivethree-core.js");

    var IconPageModule = function IconPageModule() {
      _classCallCheck(this, IconPageModule);
    };

    IconPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: IconPageModule
    });
    IconPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function IconPageModule_Factory(t) {
        return new (t || IconPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _icon_routing_module__WEBPACK_IMPORTED_MODULE_4__["IconPageRoutingModule"], _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivIconModule"], _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivCenterModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IconPageModule, {
        declarations: [_icon_page__WEBPACK_IMPORTED_MODULE_5__["IconPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _icon_routing_module__WEBPACK_IMPORTED_MODULE_4__["IconPageRoutingModule"], _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivIconModule"], _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivCenterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _icon_routing_module__WEBPACK_IMPORTED_MODULE_4__["IconPageRoutingModule"], _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivIconModule"], _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivCenterModule"]],
          declarations: [_icon_page__WEBPACK_IMPORTED_MODULE_5__["IconPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/fivethree/components/icon/icon.page.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/fivethree/components/icon/icon.page.ts ***!
    \**************************************************************/

  /*! exports provided: IconPage */

  /***/
  function srcAppPagesFivethreeComponentsIconIconPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IconPage", function () {
      return IconPage;
    });
    /* harmony import */


    var _services_util_util_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../../../services/util/util.service */
    "./src/app/services/util/util.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _fivethree_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @fivethree/core */
    "./node_modules/@fivethree/core/__ivy_ngcc__/fesm2015/fivethree-core.js");

    var IconPage = /*#__PURE__*/function () {
      function IconPage(util) {
        _classCallCheck(this, IconPage);

        this.util = util;
        this.icon = 'notifications';
        this.badge = 0;
        this.off = false;
        this.dot = false;
      }

      _createClass(IconPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "decrement",
        value: function decrement() {
          if (this.badge > 0) {
            this.badge--;
          }
        }
      }, {
        key: "increment",
        value: function increment() {
          this.badge++;
        }
      }, {
        key: "getNewIcon",
        value: function getNewIcon() {
          var icon = this.util.getRandomIcon();
          this.icon = icon.icons[1] || icon.icons[0];
        }
      }]);

      return IconPage;
    }();

    IconPage.ɵfac = function IconPage_Factory(t) {
      return new (t || IconPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_util_util_service__WEBPACK_IMPORTED_MODULE_0__["UtilService"]));
    };

    IconPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: IconPage,
      selectors: [["app-icon"]],
      decls: 27,
      vars: 6,
      consts: [["slot", "start"], ["defaultHref", "/fivethree"], ["slot", "end", 3, "ngModel", "ngModelChange"], ["color", "translucent"], ["slot", "end"], ["color", "primary", 3, "click"], ["slot", "icon-only", "name", "add"], ["slot", "icon-only", "name", "remove"], ["color", "primary", "fill", "outline", "shape", "round", 3, "click"], [1, "example"], [3, "fivCenter"], ["slot", "icon-only", 3, "off", "dot", "badge", "name"]],
      template: function IconPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Icon turned off");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-checkbox", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function IconPage_Template_ion_checkbox_ngModelChange_10_listener($event) {
            return ctx.off = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Icon dot");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-checkbox", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function IconPage_Template_ion_checkbox_ngModelChange_14_listener($event) {
            return ctx.dot = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-toolbar", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-buttons", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IconPage_Template_ion_button_click_17_listener() {
            return ctx.increment();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "ion-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IconPage_Template_ion_button_click_19_listener() {
            return ctx.decrement();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "ion-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IconPage_Template_ion_button_click_21_listener() {
            return ctx.getNewIcon();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " change random icon ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-buttons", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-button");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "fiv-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.off);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.dot);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("off", ctx.off)("dot", ctx.dot)("badge", ctx.badge)("name", ctx.icon);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCheckbox"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["BooleanValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _fivethree_core__WEBPACK_IMPORTED_MODULE_4__["FivCenter"], _fivethree_core__WEBPACK_IMPORTED_MODULE_4__["FivIcon"]],
      styles: ["[_nghost-%COMP%] {\n  --fiv-dot-background-color: var(--ion-color-danger);\n}\n\n.example[_ngcontent-%COMP%] {\n  position: relative;\n  height: 120px;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --background: var(--ion-item-background);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZml2ZXRocmVlL2NvbXBvbmVudHMvaWNvbi9DOlxcVXNlcnNcXFZhZ25lciBTYWJhZGlcXERvY3VtZW50c1xcUHJvamVjdHNcXF9NeVxcYXdlc29tZS1jb21wb25lbnRzLWlvbmljL3NyY1xcYXBwXFxwYWdlc1xcZml2ZXRocmVlXFxjb21wb25lbnRzXFxpY29uXFxpY29uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZml2ZXRocmVlL2NvbXBvbmVudHMvaWNvbi9pY29uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1EQUFBO0FDQ0o7O0FERUU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUNDSjs7QURFRTtFQUNFLHdDQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9maXZldGhyZWUvY29tcG9uZW50cy9pY29uL2ljb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgLS1maXYtZG90LWJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gIH1cclxuICBcclxuICBpb24taXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQpO1xyXG4gIH1cclxuICAiLCI6aG9zdCB7XG4gIC0tZml2LWRvdC1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn1cblxuLmV4YW1wbGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTIwcHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kKTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IconPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-icon',
          templateUrl: './icon.page.html',
          styleUrls: ['./icon.page.scss']
        }]
      }], function () {
        return [{
          type: _services_util_util_service__WEBPACK_IMPORTED_MODULE_0__["UtilService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/icons/icons.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/icons/icons.service.ts ***!
    \*************************************************/

  /*! exports provided: icons */

  /***/
  function srcAppServicesIconsIconsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "icons", function () {
      return icons;
    }); // Generated by https://quicktype.io


    var icons = {
      icons: [{
        icons: ['add-circle-outline'],
        tags: ['circle']
      }, {
        icons: ['add-circle'],
        tags: ['add', 'circle']
      }, {
        icons: ['add'],
        tags: ['add', 'include', 'invite', 'plus']
      }, {
        icons: ['alarm'],
        tags: ['alarm']
      }, {
        icons: ['albums'],
        tags: ['albums', 'boxes', 'slides', 'square']
      }, {
        icons: ['alert-circle'],
        tags: ['!', 'alert', 'attention', 'exclamation', 'notice', 'warning']
      }, {
        icons: ['american-football'],
        tags: ['american', 'football']
      }, {
        icons: ['analytics'],
        tags: ['analytics', 'data', 'metrics', 'track']
      }, {
        icons: ['aperture'],
        tags: ['aperture', 'dark', 'images', 'levels', 'light', 'settings']
      }, {
        icons: ['apps'],
        tags: ['apps', 'applications']
      }, {
        icons: ['logo-apple-appstore'],
        tags: ['appstore', 'store', 'apple']
      }, {
        icons: ['logo-google-playstore'],
        tags: ['appstore', 'store', 'google']
      }, {
        icons: ['archive'],
        tags: ['archive', 'email']
      }, {
        icons: ['arrow-back'],
        tags: ['arrow', 'back', 'chevron', 'navigation']
      }, {
        icons: ['arrow-down'],
        tags: ['arrow', 'chevron', 'down']
      }, {
        icons: ['caret-down-circle'],
        tags: ['arrow', 'circle', 'dropdown']
      }, {
        icons: ['caret-down'],
        tags: ['arrow', 'dropdown']
      }, {
        icons: ['caret-back-circle'],
        tags: ['arrow', 'circle', 'dropleft']
      }, {
        icons: ['caret-back'],
        tags: ['arrow', 'dropleft']
      }, {
        icons: ['caret-forward-circle'],
        tags: ['arrow', 'circle', 'dropright']
      }, {
        icons: ['caret-forwardt'],
        tags: ['arrow', 'dropright']
      }, {
        icons: ['caret-up-circle'],
        tags: ['arrow', 'circle', 'dropup']
      }, {
        icons: ['caret-up'],
        tags: ['arrow', 'dropup']
      }, {
        icons: ['arrow-forward'],
        tags: ['arrow', 'chevron', 'forward', 'navigation']
      }, {
        icons: ['arrow-up'],
        tags: ['arrow', 'chevron', 'up']
      }, {
        icons: ['at-circle'],
        tags: ['@', 'at']
      }, {
        icons: ['attach'],
        tags: ['attach']
      }, {
        icons: ['backspace'],
        tags: ['backspace']
      }, {
        icons: ['barcode'],
        tags: ['barcode', 'camera', 'reader']
      }, {
        icons: ['baseball'],
        tags: ['baseball']
      }, {
        icons: ['basket'],
        tags: ['basket']
      }, {
        icons: ['basketball'],
        tags: ['basketball']
      }, {
        icons: ['battery-charging'],
        tags: ['battery', 'charging']
      }, {
        icons: ['battery-dead'],
        tags: ['battery', 'dead']
      }, {
        icons: ['battery-full'],
        tags: ['battery', 'full']
      }, {
        icons: ['beaker'],
        tags: ['beaker', 'flask', 'mixture', 'potion']
      }, {
        icons: ['bed'],
        tags: ['bed', 'sleep']
      }, {
        icons: ['beer'],
        tags: ['beer', 'drink', 'eat', 'food']
      }, {
        icons: ['bicycle'],
        tags: ['bicycle']
      }, {
        icons: ['bluetooth'],
        tags: ['bluetooth', 'cloud', 'connection']
      }, {
        icons: ['boat'],
        tags: ['boat']
      }, {
        icons: ['body'],
        tags: ['body']
      }, {
        icons: ['bonfire'],
        tags: ['bonfire', 'heat', 'hot']
      }, {
        icons: ['book'],
        tags: ['book', 'read']
      }, {
        icons: ['bookmark'],
        tags: ['bookmark', 'favorite', 'save', 'tag']
      }, {
        icons: ['bookmarks'],
        tags: ['bookmarks', 'favorite']
      }, {
        icons: ['briefcase'],
        tags: ['briefcase', 'folder', 'organize']
      }, {
        icons: ['browsers'],
        tags: ['browsers', 'square']
      }, {
        icons: ['brush'],
        tags: ['brush']
      }, {
        icons: ['bug'],
        tags: ['bug', 'develop', 'error', 'hacker', 'program']
      }, {
        icons: ['build'],
        tags: ['build']
      }, {
        icons: ['bulb'],
        tags: ['bulb']
      }, {
        icons: ['bus'],
        tags: ['bus']
      }, {
        icons: ['business'],
        tags: ['business']
      }, {
        icons: ['cafe'],
        tags: ['cafe']
      }, {
        icons: ['calculator'],
        tags: ['arithmatic', 'calculator', 'math']
      }, {
        icons: ['calendar'],
        tags: ['calendar', 'date', 'month', 'week']
      }, {
        icons: ['call'],
        tags: ['call', 'telephone']
      }, {
        icons: ['camera'],
        tags: ['camera', 'image', 'photo']
      }, {
        icons: ['car'],
        tags: ['car']
      }, {
        icons: ['card'],
        tags: ['$', 'card', 'cash', 'credit', 'debit', 'dollars', 'money', 'price', 'shopping']
      }, {
        icons: ['cart'],
        tags: ['cart']
      }, {
        icons: ['cash'],
        tags: ['$', 'cash', 'credit', 'debit', 'dollars', 'money', 'price', 'shopping']
      }, {
        icons: ['cellular'],
        tags: ['cellular']
      }, {
        icons: ['chatbox'],
        tags: ['chatbox', 'talk']
      }, {
        icons: ['chatbubbles'],
        tags: ['chatbubbles', 'talk']
      }, {
        icons: ['checkbox-outline'],
        tags: ['checkbox']
      }, {
        icons: ['checkbox'],
        tags: ['checkbox']
      }, {
        icons: ['checkmark-circle-outline'],
        tags: ['checkmark']
      }, {
        icons: ['checkmark-circle'],
        tags: ['checkmark', 'circle']
      }, {
        icons: ['checkmark'],
        tags: ['checkmark']
      }, {
        icons: ['clipboard'],
        tags: ['clipboard', 'write']
      }, {
        icons: ['close-circle-outline'],
        tags: ['close', 'cicle']
      }, {
        icons: ['close-circle'],
        tags: ['circle', 'close']
      }, {
        icons: ['close'],
        tags: ['close', 'delete', 'remove']
      }, {
        icons: ['cloud-circle'],
        tags: ['circle', 'cloud']
      }, {
        icons: ['cloud-done'],
        tags: ['cloud', 'done']
      }, {
        icons: ['cloud-download'],
        tags: ['cloud', 'download', 'storage']
      }, {
        icons: ['cloud-outline'],
        tags: ['cloud']
      }, {
        icons: ['cloud-upload'],
        tags: ['cloud', 'storage', 'upload']
      }, {
        icons: ['cloud'],
        tags: ['cloud', 'storage', 'weather', 'whether']
      }, {
        icons: ['cloudy-night'],
        tags: ['cloudy', 'night', 'overcast', 'weather', 'whether']
      }, {
        icons: ['cloudy'],
        tags: ['cloudy', 'overcast', 'weather', 'whether']
      }, {
        icons: ['code-download'],
        tags: ['code', 'develop', 'download', 'hacker', 'program']
      }, {
        icons: ['code-working'],
        tags: ['code', 'develop', 'hacker', 'program', 'working']
      }, {
        icons: ['code'],
        tags: ['code', 'develop', 'hacker', 'program']
      }, {
        icons: ['cog'],
        tags: ['cog', 'gear', 'options', 'settings']
      }, {
        icons: ['color-fill'],
        tags: ['color', 'fill']
      }, {
        icons: ['color-filter'],
        tags: ['color', 'filter']
      }, {
        icons: ['color-palette'],
        tags: ['color', 'palette']
      }, {
        icons: ['color-wand'],
        tags: ['color', 'wand']
      }, {
        icons: ['compass'],
        tags: ['compass', 'directions', 'location', 'navigation']
      }, {
        icons: ['construct'],
        tags: ['construct']
      }, {
        icons: ['person-circle'],
        tags: ['contacts', 'people', 'users']
      }, {
        icons: ['contract'],
        tags: ['contract']
      }, {
        icons: ['contrast'],
        tags: ['contrast', 'dark', 'images', 'levels', 'light', 'settings']
      }, {
        icons: ['copy'],
        tags: ['copy', 'duplicate', 'paper']
      }, {
        icons: ['create'],
        tags: ['create']
      }, {
        icons: ['crop'],
        tags: ['crop']
      }, {
        icons: ['cube'],
        tags: ['box', 'container', 'cube', 'square']
      }, {
        icons: ['cut'],
        tags: ['cut']
      }, {
        icons: ['desktop'],
        tags: ['desktop']
      }, {
        icons: ['disc'],
        tags: ['cd', 'disc', 'vinyl']
      }, {
        icons: ['document'],
        tags: ['document', 'file', 'paper']
      }, {
        icons: ['checkmark-done'],
        tags: ['all', 'done']
      }, {
        icons: ['download'],
        tags: ['download', 'export']
      }, {
        icons: ['easel'],
        tags: ['easel']
      }, {
        icons: ['egg'],
        tags: ['baby', 'bird', 'birth', 'egg', 'twitter']
      }, {
        icons: ['exit'],
        tags: ['exit']
      }, {
        icons: ['expand'],
        tags: ['expand']
      }, {
        icons: ['eye-off'],
        tags: ['eye', 'off']
      }, {
        icons: ['eye'],
        tags: ['exposed', 'eye', 'look', 'see', 'view']
      }, {
        icons: ['play-forward'],
        tags: ['fastforward', 'jump', 'next', 'skip']
      }, {
        icons: ['female'],
        tags: ['dudette', 'female', 'girl', 'lady']
      }, {
        icons: ['file-tray'],
        tags: ['archive', 'filing']
      }, {
        icons: ['film'],
        tags: ['film']
      }, {
        icons: ['finger-print'],
        tags: ['finger', 'print']
      }, {
        icons: ['fitness'],
        tags: ['fitness']
      }, {
        icons: ['flag'],
        tags: ['favorite', 'flag', 'marker']
      }, {
        icons: ['flame'],
        tags: ['fire', 'flame', 'heat', 'hot']
      }, {
        icons: ['flash-off'],
        tags: ['flash']
      }, {
        icons: ['flash'],
        tags: ['flash', 'lightning', 'weather', 'whether']
      }, {
        icons: ['flashlight'],
        tags: ['flashlight']
      }, {
        icons: ['flask'],
        tags: ['bubbles', 'flask', 'mixture', 'potion']
      }, {
        icons: ['flower'],
        tags: ['flower']
      }, {
        icons: ['folder-open'],
        tags: ['folder', 'open']
      }, {
        icons: ['folder'],
        tags: ['file', 'folder']
      }, {
        icons: ['football'],
        tags: ['football', 'soccer']
      }, {
        icons: ['funnel'],
        tags: ['funnel', 'sort']
      }, {
        icons: ['gift'],
        tags: ['gift']
      }, {
        icons: ['git-branch'],
        tags: ['branch', 'git']
      }, {
        icons: ['git-commit'],
        tags: ['commit', 'git']
      }, {
        icons: ['git-compare'],
        tags: ['compare', 'git']
      }, {
        icons: ['git-merge'],
        tags: ['git', 'merge']
      }, {
        icons: ['git-network'],
        tags: ['git', 'network']
      }, {
        icons: ['git-pull-request'],
        tags: ['git', 'pull', 'request']
      }, {
        icons: ['glasses'],
        tags: ['glasses', 'look', 'reading', 'see', 'steve']
      }, {
        icons: ['globe'],
        tags: ['globe']
      }, {
        icons: ['grid'],
        tags: ['grid', 'menu']
      }, {
        icons: ['hammer'],
        tags: ['hammer', 'options', 'settings', 'tools']
      }, {
        icons: ['hand-left'],
        tags: ['hand', 'stop', 'left']
      }, {
        icons: ['hand-right'],
        tags: ['hand', 'stop', 'right']
      }, {
        icons: ['happy'],
        tags: ['fun', 'good', 'happy', 'like', 'yes']
      }, {
        icons: ['headset'],
        tags: ['headset']
      }, {
        icons: ['heart'],
        tags: ['heart', 'love']
      }, {
        icons: ['heart-dislike'],
        tags: ['dislike', 'heart', 'love']
      }, {
        icons: ['heart-outline'],
        tags: ['empty', 'heart', 'love']
      }, {
        icons: ['heart-half'],
        tags: ['half', 'heart', 'love']
      }, {
        icons: ['help-buoy'],
        tags: ['?', 'buoy', 'help', 'question']
      }, {
        icons: ['help-circle-outline'],
        tags: ['help']
      }, {
        icons: ['help-circle'],
        tags: ['circle', 'help']
      }, {
        icons: ['help'],
        tags: ['?', 'help', 'information', 'question']
      }, {
        icons: ['home'],
        tags: ['home', 'house']
      }, {
        icons: ['hourglass'],
        tags: ['hourglass']
      }, {
        icons: ['ice-cream'],
        tags: ['cream', 'ice']
      }, {
        icons: ['image'],
        tags: ['camera', 'image', 'photo']
      }, {
        icons: ['images'],
        tags: ['images', 'photo']
      }, {
        icons: ['infinite'],
        tags: ['forever', 'infinite', 'loop']
      }, {
        icons: ['information-circle-outline'],
        tags: ['information']
      }, {
        icons: ['information-circle'],
        tags: ['circle', 'information']
      }, {
        icons: ['information'],
        tags: ['help', 'information', 'knowledge']
      }, {
        icons: ['airplane'],
        tags: ['fly', 'jet', 'plane', 'airplane']
      }, {
        icons: ['journal'],
        tags: ['journal']
      }, {
        icons: ['key'],
        tags: ['access', 'key']
      }, {
        icons: ['keypad'],
        tags: ['keypad', 'type']
      }, {
        icons: ['laptop'],
        tags: ['apple', 'laptop', 'macbook', 'osx']
      }, {
        icons: ['leaf'],
        tags: ['green', 'leaf', 'nature', 'plant', 'recycle']
      }, {
        icons: ['link'],
        tags: ['anchor', 'attach', 'chain', 'href', 'link']
      }, {
        icons: ['list'],
        tags: ['list']
      }, {
        icons: ['locate'],
        tags: ['gps', 'locate', 'maps', 'navigate']
      }, {
        icons: ['lock-closed'],
        tags: ['lock', 'closed']
      }, {
        icons: ['log-in'],
        tags: ['in', 'log', 'signin']
      }, {
        icons: ['log-out'],
        tags: ['log', 'out', 'signout']
      }, {
        icons: ['magnet'],
        tags: ['attraction', 'magnet', 'sticky']
      }, {
        icons: ['mail-open'],
        tags: ['mail', 'open']
      }, {
        icons: ['mail-unread'],
        tags: ['mail', 'unread']
      }, {
        icons: ['mail'],
        tags: ['email', 'mail']
      }, {
        icons: ['male'],
        tags: ['boy', 'dude', 'guy', 'male', 'male']
      }, {
        icons: ['man'],
        tags: ['boy', 'dude', 'guy', 'male', 'man']
      }, {
        icons: ['map'],
        tags: ['gps', 'map', 'navigation', 'pin']
      }, {
        icons: ['medal'],
        tags: ['medal']
      }, {
        icons: ['medical'],
        tags: ['medical']
      }, {
        icons: ['medkit'],
        tags: ['case', 'disease', 'firstaid', 'health', 'medkit', 'sick']
      }, {
        icons: ['megaphone'],
        tags: ['megaphone']
      }, {
        icons: ['menu'],
        tags: ['menu']
      }, {
        icons: ['mic-off'],
        tags: ['mic', 'noise', 'off', 'sound', 'speaker', 'talk']
      }, {
        icons: ['mic'],
        tags: ['mic', 'noise', 'sound', 'speaker', 'talk']
      }, {
        icons: ['moon'],
        tags: ['dark', 'moon', 'night', 'sky']
      }, {
        icons: ['ellipsis-horizontal'],
        tags: ['more', 'options']
      }, {
        icons: ['move'],
        tags: ['move']
      }, {
        icons: ['musical-note'],
        tags: ['listening', 'musical', 'noise', 'note', 'play', 'sound']
      }, {
        icons: ['musical-notes'],
        tags: ['listening', 'musical', 'noise', 'notes', 'play', 'sound']
      }, {
        icons: ['navigate'],
        tags: ['gps', 'location', 'map', 'navigate', 'pin']
      }, {
        icons: ['notifications-off'],
        tags: ['notifications', 'off']
      }, {
        icons: ['notifications-circle'],
        tags: ['notifications']
      }, {
        icons: ['notifications'],
        tags: ['notifications']
      }, {
        icons: ['nuclear'],
        tags: ['danger', 'hazard', 'nuclear', 'warning']
      }, {
        icons: ['nutrition'],
        tags: ['nutrition']
      }, {
        icons: ['open'],
        tags: ['open']
      }, {
        icons: ['options'],
        tags: ['options']
      }, {
        icons: ['paper-plane'],
        tags: ['paper', 'plane']
      }, {
        icons: ['newspaper'],
        tags: ['feed', 'paper', 'paper']
      }, {
        icons: ['partly-sunny'],
        tags: ['partly', 'sunny']
      }, {
        icons: ['pause'],
        tags: ['break', 'freeze', 'hold', 'music', 'pause']
      }, {
        icons: ['paw'],
        tags: ['paw']
      }, {
        icons: ['people'],
        tags: ['head', 'human', 'people', 'person', 'stalker', 'users']
      }, {
        icons: ['person-add'],
        tags: ['add', 'head', 'human', 'member', 'new', 'person', 'staff', 'users']
      }, {
        icons: ['person'],
        tags: ['head', 'human', 'person', 'staff', 'users']
      }, {
        icons: ['phone-landscape'],
        tags: ['landscape', 'phone']
      }, {
        icons: ['phone-portrait'],
        tags: ['phone', 'portrait']
      }, {
        icons: ['image'],
        tags: ['image', 'images', 'photos', 'square', 'stills']
      }, {
        icons: ['images'],
        tags: ['image', 'images', 'photos', 'square', 'stills']
      }, {
        icons: ['pie-chart'],
        tags: ['cog', 'options', 'pie', 'settings', 'chart']
      }, {
        icons: ['pin'],
        tags: ['gps', 'navigation', 'pin']
      }, {
        icons: ['pint'],
        tags: ['pint']
      }, {
        icons: ['pizza'],
        tags: ['drink', 'eat', 'food', 'pizza']
      }, {
        icons: ['planet'],
        tags: ['globe', 'home', 'nature', 'planet', 'planet', 'space']
      }, {
        icons: ['play-circle'],
        tags: ['play']
      }, {
        icons: ['play'],
        tags: ['arrow', 'music', 'play', 'right', 'watch']
      }, {
        icons: ['podium'],
        tags: ['award', 'compete', 'competition', 'lose', 'podium', 'win']
      }, {
        icons: ['power'],
        tags: ['off', 'on', 'power']
      }, {
        icons: ['pricetag'],
        tags: ['$', 'commerce', 'items', 'money', 'pricetag', 'shopping']
      }, {
        icons: ['pricetags'],
        tags: ['$', 'commerce', 'items', 'money', 'pricetags', 'shopping']
      }, {
        icons: ['print'],
        tags: ['print']
      }, {
        icons: ['pulse'],
        tags: ['hot', 'live', 'pulse', 'rate']
      }, {
        icons: ['qr-code'],
        tags: ['qr', 'reader', 'scanner', 'code']
      }, {
        icons: ['radio-button-off'],
        tags: ['button', 'off', 'radio']
      }, {
        icons: ['radio-button-on'],
        tags: ['button', 'on', 'radio']
      }, {
        icons: ['radio'],
        tags: ['radio']
      }, {
        icons: ['rainy'],
        tags: ['cloud', 'rainy', 'water', 'weather', 'whether']
      }, {
        icons: ['recording'],
        tags: ['film', 'recording', 'tape', 'voicemail']
      }, {
        icons: ['arrow-redo'],
        tags: ['forward', 'redo', 'arrow']
      }, {
        icons: ['refresh-circle'],
        tags: ['circle', 'refresh']
      }, {
        icons: ['refresh'],
        tags: ['refresh', 'reload', 'renew', 'reset']
      }, {
        icons: ['remove-circle-outline'],
        tags: ['remove']
      }, {
        icons: ['remove-circle'],
        tags: ['circle', 'remove']
      }, {
        icons: ['remove'],
        tags: ['minus', 'remove', 'subtract']
      }, {
        icons: ['reorder-two'],
        tags: ['reorder', 'two']
      }, {
        icons: ['reorder-three'],
        tags: ['reorder', 'three']
      }, {
        icons: ['reorder-four'],
        tags: ['reorder', 'four']
      }, {
        icons: ['repeat'],
        tags: ['repeat']
      }, {
        icons: ['resize'],
        tags: ['resize']
      }, {
        icons: ['restaurant'],
        tags: ['restaurant']
      }, {
        icons: ['return-down-back'],
        tags: ['left', 'return']
      }, {
        icons: ['return-down-forward'],
        tags: ['return', 'right']
      }, {
        icons: ['camera-reverse'],
        tags: ['camera', 'picture', 'reverse']
      }, {
        icons: ['play-back'],
        tags: ['back', 'music', 'previous', 'rewind']
      }, {
        icons: ['ribbon'],
        tags: ['ribbon']
      }, {
        icons: ['rocket'],
        tags: ['rocket']
      }, {
        icons: ['rose'],
        tags: ['rose']
      }, {
        icons: ['sad'],
        tags: ['bad', 'cry', 'no', 'sad']
      }, {
        icons: ['save'],
        tags: ['save']
      }, {
        icons: ['school'],
        tags: ['school']
      }, {
        icons: ['search'],
        tags: ['magnifyingglass', 'search']
      }, {
        icons: ['send'],
        tags: ['email', 'paper', 'send']
      }, {
        icons: ['settings'],
        tags: ['options', 'settings']
      }, {
        icons: ['share'],
        tags: ['share']
      }, {
        icons: ['shirt'],
        tags: ['shirt']
      }, {
        icons: ['shuffle'],
        tags: ['random', 'shuffle']
      }, {
        icons: ['play-skip-back'],
        tags: ['backward', 'music', 'previous', 'skip']
      }, {
        icons: ['play-skip-forward'],
        tags: ['forward', 'music', 'next', 'skip']
      }, {
        icons: ['snow'],
        tags: ['snow']
      }, {
        icons: ['speedometer'],
        tags: ['drive', 'level', 'speed', 'speedometer']
      }, {
        icons: ['square-outline'],
        tags: ['square']
      }, {
        icons: ['square'],
        tags: ['square']
      }, {
        icons: ['star-half'],
        tags: ['favorite', 'half', 'rate', 'star']
      }, {
        icons: ['star-outline'],
        tags: ['star']
      }, {
        icons: ['star'],
        tags: ['favorite', 'star']
      }, {
        icons: ['stats-chart'],
        tags: ['stats']
      }, {
        icons: ['stopwatch'],
        tags: ['stopwatch']
      }, {
        icons: ['subway'],
        tags: ['subway']
      }, {
        icons: ['sunny'],
        tags: ['light', 'sky', 'sunny', 'weather', 'whether']
      }, {
        icons: ['swap-horizontal'],
        tags: ['swap']
      }, {
        icons: ['toggle'],
        tags: ['switch']
      }, {
        icons: ['sync'],
        tags: ['sync']
      }, {
        icons: ['tablet-landscape'],
        tags: ['landscape', 'tablet']
      }, {
        icons: ['tablet-portrait'],
        tags: ['portrait', 'tablet']
      }, {
        icons: ['tennisball'],
        tags: ['tennisball']
      }, {
        icons: ['chatbox-ellipses'],
        tags: ['text']
      }, {
        icons: ['thermometer'],
        tags: ['cold', 'heat', 'hot', 'mercury', 'temperature', 'thermometer']
      }, {
        icons: ['thumbs-down'],
        tags: ['down', 'thumbs']
      }, {
        icons: ['thumbs-up'],
        tags: ['thumbs', 'up']
      }, {
        icons: ['thunderstorm'],
        tags: ['cloudy', 'lightning', 'overcast', 'rain', 'sky', 'storm', 'thunderstorm', 'weather', 'whether']
      }, {
        icons: ['time'],
        tags: ['clock', 'hour', 'minute', 'second', 'time', 'watch']
      }, {
        icons: ['timer'],
        tags: ['clock', 'timer']
      }, {
        icons: ['today'],
        tags: ['today']
      }, {
        icons: ['train'],
        tags: ['train']
      }, {
        icons: ['transgender'],
        tags: ['transgender']
      }, {
        icons: ['trash'],
        tags: ['close', 'delete', 'remove', 'trash']
      }, {
        icons: ['trending-down'],
        tags: ['down', 'trending']
      }, {
        icons: ['trending-up'],
        tags: ['trending', 'up']
      }, {
        icons: ['trophy'],
        tags: ['award', 'compete', 'competition', 'lose', 'trophy', 'win']
      }, {
        icons: ['tv'],
        tags: ['television', 'tv']
      }, {
        icons: ['umbrella'],
        tags: ['dry', 'rain', 'shelter', 'umbrella', 'wet']
      }, {
        icons: ['arrow-undo'],
        tags: ['reply', 'undo']
      }, {
        icons: ['lock-open'],
        tags: ['unlock', 'open', 'lock']
      }, {
        icons: ['videocam'],
        tags: ['camera', 'film', 'movie', 'videocam']
      }, {
        icons: ['volume-high'],
        tags: ['volume']
      }, {
        icons: ['volume-low'],
        tags: ['volume']
      }, {
        icons: ['volume-mute'],
        tags: ['mute', 'sound', 'volume']
      }, {
        icons: ['volume-off'],
        tags: ['off', 'volume']
      }, {
        icons: ['wallet'],
        tags: ['cash', 'money', 'wallet']
      }, {
        icons: ['walk'],
        tags: ['walk']
      }, {
        icons: ['warning'],
        tags: ['warning']
      }, {
        icons: ['watch'],
        tags: ['watch']
      }, {
        icons: ['water'],
        tags: ['water']
      }, {
        icons: ['wifi'],
        tags: ['bars', 'connection', 'internet', 'wifi']
      }, {
        icons: ['wine'],
        tags: ['wine']
      }, {
        icons: ['woman'],
        tags: ['dudette', 'female', 'girl', 'lady', 'woman']
      }, {
        icons: ['logo-android'],
        tags: ['android']
      }, {
        icons: ['logo-angular'],
        tags: ['angular']
      }, {
        icons: ['logo-apple'],
        tags: ['apple']
      }, {
        icons: ['logo-bitbucket'],
        tags: ['bitbucket']
      }, {
        icons: ['logo-bitcoin'],
        tags: ['bitcoin']
      }, {
        icons: ['logo-buffer'],
        tags: ['buffer']
      }, {
        icons: ['logo-chrome'],
        tags: ['chrome']
      }, {
        icons: ['logo-closed-captioning'],
        tags: ['closed-captioning']
      }, {
        icons: ['logo-codepen'],
        tags: ['codepen']
      }, {
        icons: ['logo-css3'],
        tags: ['css3']
      }, {
        icons: ['logo-designernews'],
        tags: ['designernews']
      }, {
        icons: ['logo-dribbble'],
        tags: ['dribbble']
      }, {
        icons: ['logo-dropbox'],
        tags: ['dropbox']
      }, {
        icons: ['logo-euro'],
        tags: ['euro']
      }, {
        icons: ['logo-facebook'],
        tags: ['facebook']
      }, {
        icons: ['logo-flickr'],
        tags: ['flickr']
      }, {
        icons: ['logo-foursquare'],
        tags: ['foursquare']
      }, {
        icons: ['game-controller'],
        tags: ['controller', 'game']
      }, {
        icons: ['logo-github'],
        tags: ['github']
      }, {
        icons: ['logo-google'],
        tags: ['google']
      }, {
        icons: ['logo-hackernews'],
        tags: ['hackernews']
      }, {
        icons: ['logo-html5'],
        tags: ['html5']
      }, {
        icons: ['logo-instagram'],
        tags: ['instagram']
      }, {
        icons: ['logo-ionic'],
        tags: ['ionic']
      }, {
        icons: ['logo-ionitron'],
        tags: ['ionitron']
      }, {
        icons: ['logo-javascript'],
        tags: ['javascript']
      }, {
        icons: ['logo-linkedin'],
        tags: ['linkedin']
      }, {
        icons: ['logo-markdown'],
        tags: ['markdown']
      }, {
        icons: ['logo-no-smoking'],
        tags: ['no-smoking']
      }, {
        icons: ['logo-nodejs'],
        tags: ['nodejs']
      }, {
        icons: ['logo-npm'],
        tags: ['npm']
      }, {
        icons: ['logo-octocat'],
        tags: ['octocat']
      }, {
        icons: ['logo-pinterest'],
        tags: ['pinterest']
      }, {
        icons: ['logo-playstation'],
        tags: ['playstation']
      }, {
        icons: ['logo-python'],
        tags: ['python']
      }, {
        icons: ['logo-reddit'],
        tags: ['reddit']
      }, {
        icons: ['logo-rss'],
        tags: ['rss']
      }, {
        icons: ['logo-sass'],
        tags: ['sass']
      }, {
        icons: ['logo-skype'],
        tags: ['skype']
      }, {
        icons: ['logo-slack'],
        tags: ['slack']
      }, {
        icons: ['logo-snapchat'],
        tags: ['snapchat']
      }, {
        icons: ['logo-steam'],
        tags: ['steam']
      }, {
        icons: ['logo-tumblr'],
        tags: ['tumblr']
      }, {
        icons: ['logo-tux'],
        tags: ['tux']
      }, {
        icons: ['logo-twitch'],
        tags: ['twitch']
      }, {
        icons: ['logo-twitter'],
        tags: ['twitter']
      }, {
        icons: ['logo-usd'],
        tags: ['usd']
      }, {
        icons: ['logo-vimeo'],
        tags: ['vimeo']
      }, {
        icons: ['logo-vk'],
        tags: ['vk']
      }, {
        icons: ['logo-whatsapp'],
        tags: ['whatsapp']
      }, {
        icons: ['logo-windows'],
        tags: ['windows']
      }, {
        icons: ['logo-wordpress'],
        tags: ['wordpress']
      }, {
        icons: ['logo-xbox'],
        tags: ['xbox']
      }, {
        icons: ['logo-xing'],
        tags: ['xing']
      }, {
        icons: ['logo-yahoo'],
        tags: ['yahoo']
      }, {
        icons: ['logo-yen'],
        tags: ['yen']
      }, {
        icons: ['logo-youtube'],
        tags: ['youtube']
      }]
    };
    /***/
  },

  /***/
  "./src/app/services/util/util.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/util/util.service.ts ***!
    \***********************************************/

  /*! exports provided: UtilService */

  /***/
  function srcAppServicesUtilUtilServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilService", function () {
      return UtilService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _icons_icons_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../icons/icons.service */
    "./src/app/services/icons/icons.service.ts");

    var UtilService = /*#__PURE__*/function () {
      function UtilService() {
        _classCallCheck(this, UtilService);
      }

      _createClass(UtilService, [{
        key: "getRandomIcon",
        value: function getRandomIcon() {
          return _icons_icons_service__WEBPACK_IMPORTED_MODULE_1__["icons"].icons[Math.floor(Math.random() * _icons_icons_service__WEBPACK_IMPORTED_MODULE_1__["icons"].icons.length)];
        }
      }]);

      return UtilService;
    }();

    UtilService.ɵfac = function UtilService_Factory(t) {
      return new (t || UtilService)();
    };

    UtilService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UtilService,
      factory: UtilService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UtilService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-fivethree-components-icon-icon-module-es5.js.map