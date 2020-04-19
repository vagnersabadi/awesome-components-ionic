function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-popup-menu-popup-menu-module"], {
  /***/
  "./src/app/pages/yannbf/components/popup-menu/popup-menu-one/popup-menu-one.module.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/pages/yannbf/components/popup-menu/popup-menu-one/popup-menu-one.module.ts ***!
    \********************************************************************************************/

  /*! exports provided: PopupMenuOnePageModule */

  /***/
  function srcAppPagesYannbfComponentsPopupMenuPopupMenuOnePopupMenuOneModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopupMenuOnePageModule", function () {
      return PopupMenuOnePageModule;
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


    var _popup_menu_one_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./popup-menu-one.page */
    "./src/app/pages/yannbf/components/popup-menu/popup-menu-one/popup-menu-one.page.ts");

    var PopupMenuOnePageModule = function PopupMenuOnePageModule() {
      _classCallCheck(this, PopupMenuOnePageModule);
    };

    PopupMenuOnePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PopupMenuOnePageModule
    });
    PopupMenuOnePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PopupMenuOnePageModule_Factory(t) {
        return new (t || PopupMenuOnePageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PopupMenuOnePageModule, {
        declarations: [_popup_menu_one_page__WEBPACK_IMPORTED_MODULE_4__["PopupMenuOnePage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupMenuOnePageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
          declarations: [_popup_menu_one_page__WEBPACK_IMPORTED_MODULE_4__["PopupMenuOnePage"]],
          entryComponents: [_popup_menu_one_page__WEBPACK_IMPORTED_MODULE_4__["PopupMenuOnePage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/yannbf/components/popup-menu/popup-menu-one/popup-menu-one.page.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/pages/yannbf/components/popup-menu/popup-menu-one/popup-menu-one.page.ts ***!
    \******************************************************************************************/

  /*! exports provided: PopupMenuOnePage */

  /***/
  function srcAppPagesYannbfComponentsPopupMenuPopupMenuOnePopupMenuOnePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopupMenuOnePage", function () {
      return PopupMenuOnePage;
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
        "out": a0
      };
    };

    var _c1 = function _c1(a0) {
      return {
        "in": a0
      };
    };

    var PopupMenuOnePage = /*#__PURE__*/function () {
      function PopupMenuOnePage(modalCtrl) {
        _classCallCheck(this, PopupMenuOnePage);

        this.modalCtrl = modalCtrl;
        this.openMenu = false;
      }

      _createClass(PopupMenuOnePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalCtrl.dismiss();
        }
      }, {
        key: "togglePopupMenu",
        value: function togglePopupMenu() {
          return this.openMenu = !this.openMenu;
        }
      }, {
        key: "goToAccount",
        value: function goToAccount() {
          alert('Account clicked.');
          this.togglePopupMenu();
        }
      }, {
        key: "goToHome",
        value: function goToHome() {
          alert('Home clicked.');
          this.togglePopupMenu();
        }
      }, {
        key: "goToCups",
        value: function goToCups() {
          alert('Cups clicked.');
          this.togglePopupMenu();
        }
      }, {
        key: "goToLeaderboard",
        value: function goToLeaderboard() {
          alert('Leaderboard clicked.');
          this.togglePopupMenu();
        }
      }, {
        key: "goToHelp",
        value: function goToHelp() {
          alert('Help clicked.');
          this.togglePopupMenu();
        }
      }, {
        key: "goToShop",
        value: function goToShop() {
          alert('Shop clicked.');
          this.togglePopupMenu();
        }
      }]);

      return PopupMenuOnePage;
    }();

    PopupMenuOnePage.ɵfac = function PopupMenuOnePage_Factory(t) {
      return new (t || PopupMenuOnePage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]));
    };

    PopupMenuOnePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PopupMenuOnePage,
      selectors: [["app-popup-menu-one"]],
      decls: 46,
      vars: 9,
      consts: [["slot", "start"], ["fill", "clear", 3, "click"], ["name", "arrow-back", "slot", "icon-only"], [1, "ion-padding"], [1, "popup-menu"], [1, "popup-menu-toggle", 3, "ngClass", "click"], ["name", "home"], [1, "popup-menu-overlay", 3, "ngClass", "click"], [1, "popup-menu-panel", 3, "ngClass"], [1, "ion-no-padding"], ["align-items-center", ""], ["size", "4", 1, "ion-no-padding"], [3, "click"], ["name", "trophy"], ["name", "podium"], ["name", "help"], ["name", "person"], ["name", "cart"]],
      template: function PopupMenuOnePage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupMenuOnePage_Template_ion_button_click_3_listener() {
            return ctx.modalCtrl.dismiss();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ion-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Popup Menu One");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-content", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupMenuOnePage_Template_div_click_9_listener() {
            return ctx.togglePopupMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "ion-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupMenuOnePage_Template_div_click_11_listener() {
            return ctx.togglePopupMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-grid", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-row", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-col", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-tab-button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupMenuOnePage_Template_ion_tab_button_click_16_listener() {
            return ctx.goToHome();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "ion-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "HOME");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ion-col", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ion-tab-button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupMenuOnePage_Template_ion_tab_button_click_21_listener() {
            return ctx.goToCups();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "ion-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "CUPS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ion-col", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ion-tab-button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupMenuOnePage_Template_ion_tab_button_click_26_listener() {
            return ctx.goToLeaderboard();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "ion-icon", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "LEADERBOARD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ion-row", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ion-col", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ion-tab-button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupMenuOnePage_Template_ion_tab_button_click_32_listener() {
            return ctx.goToHelp();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "ion-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "HELP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ion-col", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ion-tab-button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupMenuOnePage_Template_ion_tab_button_click_37_listener() {
            return ctx.goToAccount();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "ion-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "ACCOUNT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ion-col", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "ion-tab-button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupMenuOnePage_Template_ion_tab_button_click_42_listener() {
            return ctx.goToShop();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "ion-icon", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "SHOP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.openMenu));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx.openMenu));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx.openMenu));
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"]],
      styles: [".popup-menu[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 2.5em;\n}\n\n.popup-menu[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 0.7em;\n}\n\n.popup-menu-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  z-index: 6;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.15s ease-in-out;\n  background-image: linear-gradient(rgba(68, 68, 68, 0.5) 0%, rgba(68, 68, 68, 0.25) 100%);\n}\n\n.popup-menu-overlay.in[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n\n.popup-menu-toggle[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 40px;\n  height: 40px;\n  bottom: 20px;\n  left: 50%;\n  margin-left: -20px;\n  background-color: #886aea;\n  border: 1px solid #5227e1;\n  z-index: 7;\n  transition: all 0.35s ease-in-out;\n}\n\n.popup-menu-toggle[_ngcontent-%COMP%]:before {\n  position: absolute;\n  font-family: \"Ionicons\";\n  width: 40px;\n  height: 40px;\n  top: 0px;\n  left: 0px;\n  line-height: 40px;\n  text-align: center;\n  font-size: 28px;\n  color: white;\n  opacity: 1;\n  transition: all 0.35s ease-in-out;\n  transform-origin: 100% 100%;\n  transform: scale(1);\n}\n\n.popup-menu-toggle.out[_ngcontent-%COMP%] {\n  opacity: 0;\n  visibility: hidden;\n  transform: scale(0);\n  transition: all 0.15s ease-in-out;\n}\n\n.popup-menu-toggle.out[_ngcontent-%COMP%]:before {\n  transition: all 0.15s ease-in-out;\n  transform: scale(0);\n}\n\n.popup-menu-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 300px;\n  height: 110px;\n  bottom: 20px;\n  left: 50%;\n  margin-left: -150px;\n  background-color: #886aea;\n  z-index: 8;\n  transition: all 0.35s ease-in-out;\n  transition-delay: 0.15s;\n  transform-origin: 50% 100%;\n  transform: scale(0);\n  display: -moz-flex;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.popup-menu-panel.in[_ngcontent-%COMP%] {\n  transform: scale(1);\n  transition-delay: 0s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvcG9wdXAtbWVudS9wb3B1cC1tZW51LW9uZS9DOlxcVXNlcnNcXHNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZXRvc1xcX2lvbmljXFxpb25pYzQtY29tcG9uZW50cy9zcmNcXGFwcFxccGFnZXNcXHlhbm5iZlxcY29tcG9uZW50c1xccG9wdXAtbWVudVxccG9wdXAtbWVudS1vbmVcXHBvcHVwLW1lbnUtb25lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvcG9wdXAtbWVudS9wb3B1cC1tZW51LW9uZS9wb3B1cC1tZW51LW9uZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxZQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ0NGOztBRENBO0VBQ0UsZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBRUEsaUNBQUE7RUFFQSx3RkFBQTtBQ0VGOztBREFBO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0FDR0Y7O0FEREE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFFQSxpQ0FBQTtBQ0lGOztBREZBO0VBQ0Usa0JBQUE7RUFFQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBRUEsaUNBQUE7RUFFQSwyQkFBQTtFQUVBLG1CQUFBO0FDSUY7O0FERkE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFFQSxtQkFBQTtFQUVBLGlDQUFBO0FDS0Y7O0FESEE7RUFFRSxpQ0FBQTtFQUVBLG1CQUFBO0FDTUY7O0FESkE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBRUEseUJBQUE7RUFDQSxVQUFBO0VBRUEsaUNBQUE7RUFFQSx1QkFBQTtFQUVBLDBCQUFBO0VBRUEsbUJBQUE7RUFJQSxrQkFBQTtFQUVBLGFBQUE7RUFJQSxlQUFBO0FDTUY7O0FESEE7RUFFRSxtQkFBQTtFQUVBLG9CQUFBO0FDTUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy9wb3B1cC1tZW51L3BvcHVwLW1lbnUtb25lL3BvcHVwLW1lbnUtb25lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3B1cC1tZW51IGlvbi1pY29uIHtcclxuICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMi41ZW07XHJcbn1cclxuLnBvcHVwLW1lbnUgaW9uLWxhYmVsIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAwLjdlbTtcclxufVxyXG4ucG9wdXAtbWVudS1vdmVybGF5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHJpZ2h0OiAwcHg7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgei1pbmRleDogNjtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmdiYSg2OCwgNjgsIDY4LCAwLjUpIDAlLCByZ2JhKDY4LCA2OCwgNjgsIDAuMjUpIDEwMCUpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDY4LCA2OCwgNjgsIDAuNSkgMCUsIHJnYmEoNjgsIDY4LCA2OCwgMC4yNSkgMTAwJSk7XHJcbn1cclxuLnBvcHVwLW1lbnUtb3ZlcmxheS5pbiB7XHJcbiAgb3BhY2l0eTogMTtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcbi5wb3B1cC1tZW51LXRvZ2dsZSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3R0b206IDIwcHg7XHJcbiAgbGVmdDogNTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg2YWVhO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM1MjI3ZTE7XHJcbiAgei1pbmRleDogNztcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjM1cyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLnBvcHVwLW1lbnUtdG9nZ2xlOmJlZm9yZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8vIGNvbnRlbnQ6IFwiXFxmMzBjXCI7XHJcbiAgZm9udC1mYW1pbHk6IFwiSW9uaWNvbnNcIjtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgdG9wOiAwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zNXMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMzVzIGVhc2UtaW4tb3V0O1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMTAwJTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxufVxyXG4ucG9wdXAtbWVudS10b2dnbGUub3V0IHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLnBvcHVwLW1lbnUtdG9nZ2xlLm91dDpiZWZvcmUge1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxufVxyXG4ucG9wdXAtbWVudS1wYW5lbCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6IDExMHB4O1xyXG4gIGJvdHRvbTogMjBweDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xNTBweDtcclxuICAvLyBwYWRkaW5nOiAwcHggNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4ODZhZWE7XHJcbiAgei1pbmRleDogODtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjM1cyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwLjE1cztcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjE1cztcclxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiAtbW96LWZsZXg7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcclxuICAtbW96LWZsZXgtd3JhcDogd3JhcDtcclxuICAtbXMtZmxleC13cmFwOiB3cmFwO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLnBvcHVwLW1lbnUtcGFuZWwuaW4ge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMHM7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogMHM7XHJcbn1cclxuXHJcbiIsIi5wb3B1cC1tZW51IGlvbi1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIuNWVtO1xufVxuXG4ucG9wdXAtbWVudSBpb24tbGFiZWwge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG59XG5cbi5wb3B1cC1tZW51LW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICB6LWluZGV4OiA2O1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHJnYmEoNjgsIDY4LCA2OCwgMC41KSAwJSwgcmdiYSg2OCwgNjgsIDY4LCAwLjI1KSAxMDAlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoNjgsIDY4LCA2OCwgMC41KSAwJSwgcmdiYSg2OCwgNjgsIDY4LCAwLjI1KSAxMDAlKTtcbn1cblxuLnBvcHVwLW1lbnUtb3ZlcmxheS5pbiB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5wb3B1cC1tZW51LXRvZ2dsZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm90dG9tOiAyMHB4O1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg4NmFlYTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzUyMjdlMTtcbiAgei1pbmRleDogNztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjM1cyBlYXNlLWluLW91dDtcbn1cblxuLnBvcHVwLW1lbnUtdG9nZ2xlOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1mYW1pbHk6IFwiSW9uaWNvbnNcIjtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIG9wYWNpdHk6IDE7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMzVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zNXMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLnBvcHVwLW1lbnUtdG9nZ2xlLm91dCB7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xufVxuXG4ucG9wdXAtbWVudS10b2dnbGUub3V0OmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbn1cblxuLnBvcHVwLW1lbnUtcGFuZWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgYm90dG9tOiAyMHB4O1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMTUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4ODZhZWE7XG4gIHotaW5kZXg6IDg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMzVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zNXMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMC4xNXM7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMTVzO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1vei1mbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XG4gIC1tb3otZmxleC13cmFwOiB3cmFwO1xuICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5wb3B1cC1tZW51LXBhbmVsLmluIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupMenuOnePage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-popup-menu-one',
          templateUrl: './popup-menu-one.page.html',
          styleUrls: ['./popup-menu-one.page.scss']
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/yannbf/components/popup-menu/popup-menu-two/popup-menu-two.module.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/pages/yannbf/components/popup-menu/popup-menu-two/popup-menu-two.module.ts ***!
    \********************************************************************************************/

  /*! exports provided: PopupMenuTwoPageModule */

  /***/
  function srcAppPagesYannbfComponentsPopupMenuPopupMenuTwoPopupMenuTwoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopupMenuTwoPageModule", function () {
      return PopupMenuTwoPageModule;
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


    var _popup_menu_two_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./popup-menu-two.page */
    "./src/app/pages/yannbf/components/popup-menu/popup-menu-two/popup-menu-two.page.ts");

    var PopupMenuTwoPageModule = function PopupMenuTwoPageModule() {
      _classCallCheck(this, PopupMenuTwoPageModule);
    };

    PopupMenuTwoPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PopupMenuTwoPageModule
    });
    PopupMenuTwoPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PopupMenuTwoPageModule_Factory(t) {
        return new (t || PopupMenuTwoPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PopupMenuTwoPageModule, {
        declarations: [_popup_menu_two_page__WEBPACK_IMPORTED_MODULE_4__["PopupMenuTwoPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupMenuTwoPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
          declarations: [_popup_menu_two_page__WEBPACK_IMPORTED_MODULE_4__["PopupMenuTwoPage"]],
          entryComponents: [_popup_menu_two_page__WEBPACK_IMPORTED_MODULE_4__["PopupMenuTwoPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/yannbf/components/popup-menu/popup-menu-two/popup-menu-two.page.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/pages/yannbf/components/popup-menu/popup-menu-two/popup-menu-two.page.ts ***!
    \******************************************************************************************/

  /*! exports provided: PopupMenuTwoPage */

  /***/
  function srcAppPagesYannbfComponentsPopupMenuPopupMenuTwoPopupMenuTwoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopupMenuTwoPage", function () {
      return PopupMenuTwoPage;
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
        "out": a0
      };
    };

    var _c1 = function _c1(a0) {
      return {
        "in": a0
      };
    };

    var PopupMenuTwoPage = /*#__PURE__*/function () {
      function PopupMenuTwoPage(modalCtrl) {
        _classCallCheck(this, PopupMenuTwoPage);

        this.modalCtrl = modalCtrl;
        this.openMenu = false;
      }

      _createClass(PopupMenuTwoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "togglePopupMenu",
        value: function togglePopupMenu() {
          return this.openMenu = !this.openMenu;
        }
      }, {
        key: "goToAccount",
        value: function goToAccount() {
          alert('Account clicked.');
          this.togglePopupMenu();
        }
      }, {
        key: "goToHome",
        value: function goToHome() {
          alert('Home clicked.');
          this.togglePopupMenu();
        }
      }, {
        key: "goToCups",
        value: function goToCups() {
          alert('Cups clicked.');
          this.togglePopupMenu();
        }
      }, {
        key: "goToLeaderboard",
        value: function goToLeaderboard() {
          alert('Leaderboard clicked.');
          this.togglePopupMenu();
        }
      }, {
        key: "goToHelp",
        value: function goToHelp() {
          alert('Help clicked.');
          this.togglePopupMenu();
        }
      }, {
        key: "goToShop",
        value: function goToShop() {
          alert('Shop clicked.');
          this.togglePopupMenu();
        }
      }]);

      return PopupMenuTwoPage;
    }();

    PopupMenuTwoPage.ɵfac = function PopupMenuTwoPage_Factory(t) {
      return new (t || PopupMenuTwoPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]));
    };

    PopupMenuTwoPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PopupMenuTwoPage,
      selectors: [["app-popup-menu-two"]],
      decls: 45,
      vars: 9,
      consts: [["slot", "start"], ["fill", "clear", 3, "click"], ["name", "arrow-back", "slot", "icon-only"], [1, "ion-padding"], [1, "popup-menu"], [1, "popup-menu-toggle", 3, "ngClass", "click"], ["name", "apps"], [1, "popup-menu-overlay", 3, "ngClass", "click"], [1, "popup-menu-panel", 3, "ngClass"], [1, "popup-menu-item", 3, "click"], ["name", "home"], ["name", "trophy"], ["name", "podium"], ["name", "help"], ["name", "person"], ["name", "cart"]],
      template: function PopupMenuTwoPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupMenuTwoPage_Template_ion_button_click_3_listener() {
            return ctx.modalCtrl.dismiss();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ion-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Popup Menu Two");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-content", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupMenuTwoPage_Template_div_click_9_listener() {
            return ctx.togglePopupMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "ion-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupMenuTwoPage_Template_div_click_11_listener() {
            return ctx.togglePopupMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupMenuTwoPage_Template_div_click_13_listener() {
            return ctx.goToHome();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "ion-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-badge");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "25");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "HOME");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupMenuTwoPage_Template_div_click_19_listener() {
            return ctx.goToCups();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "ion-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "CUPS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupMenuTwoPage_Template_div_click_23_listener() {
            return ctx.goToLeaderboard();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "ion-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ion-badge");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "LEADERBOARD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupMenuTwoPage_Template_div_click_29_listener() {
            return ctx.goToHelp();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "ion-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "HELP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupMenuTwoPage_Template_div_click_33_listener() {
            return ctx.goToAccount();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "ion-icon", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ion-badge");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "ACCOUNT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupMenuTwoPage_Template_div_click_39_listener() {
            return ctx.goToShop();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "ion-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ion-badge");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "25");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "SHOP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.openMenu));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx.openMenu));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx.openMenu));
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBadge"]],
      styles: ["ion-badge[_ngcontent-%COMP%] {\n  right: calc(50% - 30px) !important;\n  top: -5px;\n  position: absolute;\n  right: 4%;\n  padding: 1px 6px;\n  height: auto;\n  font-size: 12px;\n  line-height: 16px;\n}\n\n.popup-menu-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  z-index: 100;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.15s ease-in-out;\n  background-image: linear-gradient(rgba(68, 68, 68, 0.5) 0%, rgba(68, 68, 68, 0.25) 100%);\n}\n\n.popup-menu-overlay.in[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n\n.popup-menu-toggle[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 40px;\n  height: 40px;\n  bottom: 10px;\n  left: 50%;\n  margin-left: -20px;\n  background-color: #0f9d58;\n  border-radius: 50%;\n  z-index: 101;\n  transition: all 0.25s ease-in-out;\n}\n\n.popup-menu-toggle[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  text-align: center;\n  color: white;\n  font-size: 2.5em;\n}\n\n.popup-menu-toggle[_ngcontent-%COMP%]:before {\n  position: absolute;\n  font-family: \"Ionicons\";\n  width: 40px;\n  height: 40px;\n  top: 0px;\n  left: 0px;\n  line-height: 40px;\n  text-align: center;\n  font-size: 28px;\n  color: white;\n  opacity: 1;\n  transition: all 0.25s ease-in-out;\n  transform-origin: 100% 100%;\n  transform: scale(1);\n}\n\n.popup-menu-toggle.out[_ngcontent-%COMP%] {\n  opacity: 0;\n  visibility: hidden;\n  transform: scale(0);\n  transition: all 0.15s ease-in-out;\n}\n\n.popup-menu-toggle.out[_ngcontent-%COMP%]:before {\n  transition: all 0.15s ease-in-out;\n  transform: scale(0);\n}\n\n.popup-menu-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 300px;\n  height: 180px;\n  border-radius: 5%;\n  bottom: 20px;\n  left: 50%;\n  margin-left: -150px;\n  padding: 0px 5px;\n  background-color: #0f9d58;\n  z-index: 102;\n  transition: all 0.25s ease-in-out;\n  transition-delay: 0.15s;\n  transform-origin: 50% 100%;\n  transform: scale(0);\n  display: -moz-flex;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.popup-menu-panel[_ngcontent-%COMP%]   .popup-menu-item[_ngcontent-%COMP%] {\n  margin: auto;\n  -moz-flex: 1 0 30%;\n  flex: 1 0 30%;\n  display: -moz-flex;\n  display: flex;\n  -moz-flex-direction: column;\n  flex-direction: column;\n  transform: scale(0);\n  opacity: 0;\n  transition: all 0.25s ease-in-out;\n}\n\n.popup-menu-panel[_ngcontent-%COMP%]   .popup-menu-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  text-align: center;\n  color: white;\n  font-size: 2.5em;\n  margin-left: 29px;\n}\n\n.popup-menu-panel[_ngcontent-%COMP%]   .popup-menu-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin: auto 0px 5px 0px;\n  padding: 0px;\n  font-size: 30px;\n  line-height: 30px;\n  text-align: center;\n  color: white;\n}\n\n.popup-menu-panel[_ngcontent-%COMP%]   .popup-menu-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0px;\n  margin: 0px 0px auto 0px;\n  color: white;\n  text-align: center;\n  font-size: 11px;\n  text-transform: uppercase;\n  font-weight: bold;\n  line-height: 11px;\n}\n\n.popup-menu-panel[_ngcontent-%COMP%]   .popup-menu-item[_ngcontent-%COMP%]:active   i[_ngcontent-%COMP%] {\n  color: #dd4135;\n  transition: all 0.15s;\n}\n\n.popup-menu-panel[_ngcontent-%COMP%]   .popup-menu-item[_ngcontent-%COMP%]:active   span[_ngcontent-%COMP%] {\n  color: #dd4135;\n  transition: all 0.15s;\n}\n\n.popup-menu-panel.in[_ngcontent-%COMP%] {\n  transform: scale(1);\n  transition-delay: 0s;\n}\n\n.popup-menu-panel.in[_ngcontent-%COMP%]   .popup-menu-item[_ngcontent-%COMP%] {\n  transform: scale(1);\n  opacity: 1;\n  transition-delay: 0.15s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvcG9wdXAtbWVudS9wb3B1cC1tZW51LXR3by9DOlxcVXNlcnNcXHNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZXRvc1xcX2lvbmljXFxpb25pYzQtY29tcG9uZW50cy9zcmNcXGFwcFxccGFnZXNcXHlhbm5iZlxcY29tcG9uZW50c1xccG9wdXAtbWVudVxccG9wdXAtbWVudS10d29cXHBvcHVwLW1lbnUtdHdvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvcG9wdXAtbWVudS9wb3B1cC1tZW51LXR3by9wb3B1cC1tZW51LXR3by5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQ0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUVBLGlDQUFBO0VBRUEsd0ZBQUE7QUNDRjs7QURDQTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQ0VGOztBREFBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBRUEsaUNBQUE7QUNHRjs7QURERTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDR0o7O0FEQUE7RUFDRSxrQkFBQTtFQUVBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFFQSxpQ0FBQTtFQUVBLDJCQUFBO0VBRUEsbUJBQUE7QUNFRjs7QURBQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUVBLG1CQUFBO0VBRUEsaUNBQUE7QUNHRjs7QUREQTtFQUVFLGlDQUFBO0VBRUEsbUJBQUE7QUNJRjs7QURGQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBRUEsaUNBQUE7RUFFQSx1QkFBQTtFQUVBLDBCQUFBO0VBRUEsbUJBQUE7RUFJQSxrQkFBQTtFQUVBLGFBQUE7RUFJQSxlQUFBO0FDS0Y7O0FESEE7RUFDRSxZQUFBO0VBSUEsa0JBQUE7RUFFQSxhQUFBO0VBSUEsa0JBQUE7RUFFQSxhQUFBO0VBSUEsMkJBQUE7RUFFQSxzQkFBQTtFQUVBLG1CQUFBO0VBQ0EsVUFBQTtFQUVBLGlDQUFBO0FDTUY7O0FESkU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDTUo7O0FESEE7RUFDRSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNNRjs7QURKQTtFQUNFLFlBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNPRjs7QURMQTtFQUNFLGNBQUE7RUFFQSxxQkFBQTtBQ1FGOztBRE5BO0VBQ0UsY0FBQTtFQUVBLHFCQUFBO0FDU0Y7O0FEUEE7RUFFRSxtQkFBQTtFQUVBLG9CQUFBO0FDVUY7O0FEUkE7RUFFRSxtQkFBQTtFQUNBLFVBQUE7RUFFQSx1QkFBQTtBQ1dGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvcG9wdXAtbWVudS9wb3B1cC1tZW51LXR3by9wb3B1cC1tZW51LXR3by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYmFkZ2Uge1xyXG4gIHJpZ2h0OiBjYWxjKDUwJSAtIDMwcHgpICFpbXBvcnRhbnQ7XHJcbiAgdG9wOiAtNXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogNCU7XHJcbiAgcGFkZGluZzogMXB4IDZweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG59XHJcblxyXG4ucG9wdXAtbWVudS1vdmVybGF5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHJpZ2h0OiAwcHg7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyZ2JhKDY4LCA2OCwgNjgsIDAuNSkgMCUsIHJnYmEoNjgsIDY4LCA2OCwgMC4yNSkgMTAwJSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoNjgsIDY4LCA2OCwgMC41KSAwJSwgcmdiYSg2OCwgNjgsIDY4LCAwLjI1KSAxMDAlKTtcclxufVxyXG4ucG9wdXAtbWVudS1vdmVybGF5LmluIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuLnBvcHVwLW1lbnUtdG9nZ2xlIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvdHRvbTogMTBweDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgMTU3LCA4OCk7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHotaW5kZXg6IDEwMTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gIGlvbi1pY29uIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgfVxyXG59XHJcbi5wb3B1cC1tZW51LXRvZ2dsZTpiZWZvcmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvLyAgIGNvbnRlbnQ6IFwiXFxmMTBhXCI7XHJcbiAgZm9udC1mYW1pbHk6IFwiSW9uaWNvbnNcIjtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgdG9wOiAwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMTAwJTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxufVxyXG4ucG9wdXAtbWVudS10b2dnbGUub3V0IHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLnBvcHVwLW1lbnUtdG9nZ2xlLm91dDpiZWZvcmUge1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxufVxyXG4ucG9wdXAtbWVudS1wYW5lbCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6IDE4MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUlO1xyXG4gIGJvdHRvbTogMjBweDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xNTBweDtcclxuICBwYWRkaW5nOiAwcHggNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgMTU3LCA4OCk7XHJcbiAgei1pbmRleDogMTAyO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcclxuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDAuMTVzO1xyXG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMTVzO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIGRpc3BsYXk6IC1tb3otZmxleDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xyXG4gIC1tb3otZmxleC13cmFwOiB3cmFwO1xyXG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcbi5wb3B1cC1tZW51LXBhbmVsIC5wb3B1cC1tZW51LWl0ZW0ge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICAtd2Via2l0LWJveC1mbGV4OiAxIDAgMzAlO1xyXG4gIC13ZWJraXQtZmxleDogMSAwIDMwJTtcclxuICAtbW96LWJveC1mbGV4OiAxIDAgMzAlO1xyXG4gIC1tb3otZmxleDogMSAwIDMwJTtcclxuICAtbXMtZmxleDogMSAwIDMwJTtcclxuICBmbGV4OiAxIDAgMzAlO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiAtbW96LWZsZXg7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAtbW96LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgaW9uLWljb24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyLjVlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyOXB4O1xyXG4gIH1cclxufVxyXG4ucG9wdXAtbWVudS1wYW5lbCAucG9wdXAtbWVudS1pdGVtIGkge1xyXG4gIG1hcmdpbjogYXV0byAwcHggNXB4IDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnBvcHVwLW1lbnUtcGFuZWwgLnBvcHVwLW1lbnUtaXRlbSBzcGFuIHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgbWFyZ2luOiAwcHggMHB4IGF1dG8gMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbGluZS1oZWlnaHQ6IDExcHg7XHJcbn1cclxuLnBvcHVwLW1lbnUtcGFuZWwgLnBvcHVwLW1lbnUtaXRlbTphY3RpdmUgaSB7XHJcbiAgY29sb3I6IHJnYigyMjEsIDY1LCA1Myk7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xNXM7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xyXG59XHJcbi5wb3B1cC1tZW51LXBhbmVsIC5wb3B1cC1tZW51LWl0ZW06YWN0aXZlIHNwYW4ge1xyXG4gIGNvbG9yOiByZ2IoMjIxLCA2NSwgNTMpO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cztcclxufVxyXG4ucG9wdXAtbWVudS1wYW5lbC5pbiB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwcztcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcclxufVxyXG4ucG9wdXAtbWVudS1wYW5lbC5pbiAucG9wdXAtbWVudS1pdGVtIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICBvcGFjaXR5OiAxO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMC4xNXM7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4xNXM7XHJcbn1cclxuIiwiaW9uLWJhZGdlIHtcbiAgcmlnaHQ6IGNhbGMoNTAlIC0gMzBweCkgIWltcG9ydGFudDtcbiAgdG9wOiAtNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA0JTtcbiAgcGFkZGluZzogMXB4IDZweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuXG4ucG9wdXAtbWVudS1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMHB4O1xuICBib3R0b206IDBweDtcbiAgei1pbmRleDogMTAwO1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHJnYmEoNjgsIDY4LCA2OCwgMC41KSAwJSwgcmdiYSg2OCwgNjgsIDY4LCAwLjI1KSAxMDAlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoNjgsIDY4LCA2OCwgMC41KSAwJSwgcmdiYSg2OCwgNjgsIDY4LCAwLjI1KSAxMDAlKTtcbn1cblxuLnBvcHVwLW1lbnUtb3ZlcmxheS5pbiB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5wb3B1cC1tZW51LXRvZ2dsZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm90dG9tOiAxMHB4O1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmOWQ1ODtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiAxMDE7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XG59XG4ucG9wdXAtbWVudS10b2dnbGUgaW9uLWljb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyLjVlbTtcbn1cblxuLnBvcHVwLW1lbnUtdG9nZ2xlOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1mYW1pbHk6IFwiSW9uaWNvbnNcIjtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIG9wYWNpdHk6IDE7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLnBvcHVwLW1lbnUtdG9nZ2xlLm91dCB7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xufVxuXG4ucG9wdXAtbWVudS10b2dnbGUub3V0OmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbn1cblxuLnBvcHVwLW1lbnUtcGFuZWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAxODBweDtcbiAgYm9yZGVyLXJhZGl1czogNSU7XG4gIGJvdHRvbTogMjBweDtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTE1MHB4O1xuICBwYWRkaW5nOiAwcHggNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGY5ZDU4O1xuICB6LWluZGV4OiAxMDI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMC4xNXM7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMTVzO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1vei1mbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XG4gIC1tb3otZmxleC13cmFwOiB3cmFwO1xuICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5wb3B1cC1tZW51LXBhbmVsIC5wb3B1cC1tZW51LWl0ZW0ge1xuICBtYXJnaW46IGF1dG87XG4gIC13ZWJraXQtYm94LWZsZXg6IDEgMCAzMCU7XG4gIC13ZWJraXQtZmxleDogMSAwIDMwJTtcbiAgLW1vei1ib3gtZmxleDogMSAwIDMwJTtcbiAgLW1vei1mbGV4OiAxIDAgMzAlO1xuICAtbXMtZmxleDogMSAwIDMwJTtcbiAgZmxleDogMSAwIDMwJTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tb3otZmxleDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC1tb3otZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcbn1cbi5wb3B1cC1tZW51LXBhbmVsIC5wb3B1cC1tZW51LWl0ZW0gaW9uLWljb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyLjVlbTtcbiAgbWFyZ2luLWxlZnQ6IDI5cHg7XG59XG5cbi5wb3B1cC1tZW51LXBhbmVsIC5wb3B1cC1tZW51LWl0ZW0gaSB7XG4gIG1hcmdpbjogYXV0byAwcHggNXB4IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnBvcHVwLW1lbnUtcGFuZWwgLnBvcHVwLW1lbnUtaXRlbSBzcGFuIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweCAwcHggYXV0byAwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDExcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMTFweDtcbn1cblxuLnBvcHVwLW1lbnUtcGFuZWwgLnBvcHVwLW1lbnUtaXRlbTphY3RpdmUgaSB7XG4gIGNvbG9yOiAjZGQ0MTM1O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xufVxuXG4ucG9wdXAtbWVudS1wYW5lbCAucG9wdXAtbWVudS1pdGVtOmFjdGl2ZSBzcGFuIHtcbiAgY29sb3I6ICNkZDQxMzU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG59XG5cbi5wb3B1cC1tZW51LXBhbmVsLmluIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbn1cblxuLnBvcHVwLW1lbnUtcGFuZWwuaW4gLnBvcHVwLW1lbnUtaXRlbSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgb3BhY2l0eTogMTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwLjE1cztcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4xNXM7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupMenuTwoPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-popup-menu-two',
          templateUrl: './popup-menu-two.page.html',
          styleUrls: ['./popup-menu-two.page.scss']
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/yannbf/components/popup-menu/popup-menu.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/yannbf/components/popup-menu/popup-menu.module.ts ***!
    \*************************************************************************/

  /*! exports provided: PopupMenuPageModule */

  /***/
  function srcAppPagesYannbfComponentsPopupMenuPopupMenuModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopupMenuPageModule", function () {
      return PopupMenuPageModule;
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


    var _popup_menu_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./popup-menu.page */
    "./src/app/pages/yannbf/components/popup-menu/popup-menu.page.ts");
    /* harmony import */


    var _popup_menu_two_popup_menu_two_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./popup-menu-two/popup-menu-two.module */
    "./src/app/pages/yannbf/components/popup-menu/popup-menu-two/popup-menu-two.module.ts");
    /* harmony import */


    var _popup_menu_one_popup_menu_one_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./popup-menu-one/popup-menu-one.module */
    "./src/app/pages/yannbf/components/popup-menu/popup-menu-one/popup-menu-one.module.ts");

    var routes = [{
      path: '',
      component: _popup_menu_page__WEBPACK_IMPORTED_MODULE_5__["PopupMenuPage"]
    }];

    var PopupMenuPageModule = function PopupMenuPageModule() {
      _classCallCheck(this, PopupMenuPageModule);
    };

    PopupMenuPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PopupMenuPageModule
    });
    PopupMenuPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PopupMenuPageModule_Factory(t) {
        return new (t || PopupMenuPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _popup_menu_one_popup_menu_one_module__WEBPACK_IMPORTED_MODULE_7__["PopupMenuOnePageModule"], _popup_menu_two_popup_menu_two_module__WEBPACK_IMPORTED_MODULE_6__["PopupMenuTwoPageModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PopupMenuPageModule, {
        declarations: [_popup_menu_page__WEBPACK_IMPORTED_MODULE_5__["PopupMenuPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _popup_menu_one_popup_menu_one_module__WEBPACK_IMPORTED_MODULE_7__["PopupMenuOnePageModule"], _popup_menu_two_popup_menu_two_module__WEBPACK_IMPORTED_MODULE_6__["PopupMenuTwoPageModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupMenuPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _popup_menu_one_popup_menu_one_module__WEBPACK_IMPORTED_MODULE_7__["PopupMenuOnePageModule"], _popup_menu_two_popup_menu_two_module__WEBPACK_IMPORTED_MODULE_6__["PopupMenuTwoPageModule"]],
          declarations: [_popup_menu_page__WEBPACK_IMPORTED_MODULE_5__["PopupMenuPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/yannbf/components/popup-menu/popup-menu.page.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/yannbf/components/popup-menu/popup-menu.page.ts ***!
    \***********************************************************************/

  /*! exports provided: PopupMenuPage */

  /***/
  function srcAppPagesYannbfComponentsPopupMenuPopupMenuPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopupMenuPage", function () {
      return PopupMenuPage;
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


    var _popup_menu_one_popup_menu_one_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./popup-menu-one/popup-menu-one.page */
    "./src/app/pages/yannbf/components/popup-menu/popup-menu-one/popup-menu-one.page.ts");
    /* harmony import */


    var _popup_menu_two_popup_menu_two_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./popup-menu-two/popup-menu-two.page */
    "./src/app/pages/yannbf/components/popup-menu/popup-menu-two/popup-menu-two.page.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PopupMenuPage_ion_item_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PopupMenuPage_ion_item_8_Template_ion_item_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r72);

          var item_r70 = ctx.$implicit;

          var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r71.itemTapped($event, item_r70);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r70 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r70.title, " ");
      }
    }

    var PopupMenuPage = /*#__PURE__*/function () {
      function PopupMenuPage(modalCtrl) {
        _classCallCheck(this, PopupMenuPage);

        this.modalCtrl = modalCtrl;
        this.items = [{
          title: 'Type One',
          page: _popup_menu_one_popup_menu_one_page__WEBPACK_IMPORTED_MODULE_3__["PopupMenuOnePage"]
        }, {
          title: 'Type Two',
          page: _popup_menu_two_popup_menu_two_page__WEBPACK_IMPORTED_MODULE_4__["PopupMenuTwoPage"]
        }];
      }

      _createClass(PopupMenuPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "itemTapped",
        value: function itemTapped(event, item) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalCtrl.create({
                      component: item.page
                    });

                  case 2:
                    modal = _context.sent;
                    _context.next = 5;
                    return modal.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return PopupMenuPage;
    }();

    PopupMenuPage.ɵfac = function PopupMenuPage_Factory(t) {
      return new (t || PopupMenuPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]));
    };

    PopupMenuPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: PopupMenuPage,
      selectors: [["app-popup-menu"]],
      decls: 9,
      vars: 1,
      consts: [["slot", "start"], ["defaultHref", "/"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"]],
      template: function PopupMenuPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Popup Menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, PopupMenuPage_ion_item_8_Template, 2, 1, "ion-item", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL3BvcHVwLW1lbnUvcG9wdXAtbWVudS5wYWdlLnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PopupMenuPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-popup-menu',
          templateUrl: './popup-menu.page.html',
          styleUrls: ['./popup-menu.page.scss']
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-yannbf-components-popup-menu-popup-menu-module-es5.js.map