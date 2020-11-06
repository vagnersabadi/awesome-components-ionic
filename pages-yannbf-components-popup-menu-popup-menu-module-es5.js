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
      styles: [".popup-menu[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 2.5em;\n}\n\n.popup-menu[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 0.7em;\n}\n\n.popup-menu-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  z-index: 6;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.15s ease-in-out;\n  background-image: linear-gradient(rgba(68, 68, 68, 0.5) 0%, rgba(68, 68, 68, 0.25) 100%);\n}\n\n.popup-menu-overlay.in[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n\n.popup-menu-toggle[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 40px;\n  height: 40px;\n  bottom: 20px;\n  left: 50%;\n  margin-left: -20px;\n  background-color: #886aea;\n  border: 1px solid #5227e1;\n  z-index: 7;\n  transition: all 0.35s ease-in-out;\n}\n\n.popup-menu-toggle[_ngcontent-%COMP%]:before {\n  position: absolute;\n  font-family: \"Ionicons\";\n  width: 40px;\n  height: 40px;\n  top: 0px;\n  left: 0px;\n  line-height: 40px;\n  text-align: center;\n  font-size: 28px;\n  color: white;\n  opacity: 1;\n  transition: all 0.35s ease-in-out;\n  transform-origin: 100% 100%;\n  transform: scale(1);\n}\n\n.popup-menu-toggle.out[_ngcontent-%COMP%] {\n  opacity: 0;\n  visibility: hidden;\n  transform: scale(0);\n  transition: all 0.15s ease-in-out;\n}\n\n.popup-menu-toggle.out[_ngcontent-%COMP%]:before {\n  transition: all 0.15s ease-in-out;\n  transform: scale(0);\n}\n\n.popup-menu-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 300px;\n  height: 110px;\n  bottom: 20px;\n  left: 50%;\n  margin-left: -150px;\n  background-color: #886aea;\n  z-index: 8;\n  transition: all 0.35s ease-in-out;\n  transition-delay: 0.15s;\n  transform-origin: 50% 100%;\n  transform: scale(0);\n  display: -moz-flex;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.popup-menu-panel.in[_ngcontent-%COMP%] {\n  transform: scale(1);\n  transition-delay: 0s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvcG9wdXAtbWVudS9wb3B1cC1tZW51LW9uZS9DOlxcVXNlcnNcXFZhZ25lciBTYWJhZGlcXERvY3VtZW50c1xcUHJvamVjdHNcXF9NeVxcYXdlc29tZS1jb21wb25lbnRzLWlvbmljL3NyY1xcYXBwXFxwYWdlc1xceWFubmJmXFxjb21wb25lbnRzXFxwb3B1cC1tZW51XFxwb3B1cC1tZW51LW9uZVxccG9wdXAtbWVudS1vbmUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy9wb3B1cC1tZW51L3BvcHVwLW1lbnUtb25lL3BvcHVwLW1lbnUtb25lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLFlBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFFQSxpQ0FBQTtFQUVBLHdGQUFBO0FDRUY7O0FEQUE7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7QUNHRjs7QUREQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUVBLGlDQUFBO0FDSUY7O0FERkE7RUFDRSxrQkFBQTtFQUVBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFFQSxpQ0FBQTtFQUVBLDJCQUFBO0VBRUEsbUJBQUE7QUNJRjs7QURGQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUVBLG1CQUFBO0VBRUEsaUNBQUE7QUNLRjs7QURIQTtFQUVFLGlDQUFBO0VBRUEsbUJBQUE7QUNNRjs7QURKQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFFQSx5QkFBQTtFQUNBLFVBQUE7RUFFQSxpQ0FBQTtFQUVBLHVCQUFBO0VBRUEsMEJBQUE7RUFFQSxtQkFBQTtFQUlBLGtCQUFBO0VBRUEsYUFBQTtFQUlBLGVBQUE7QUNNRjs7QURIQTtFQUVFLG1CQUFBO0VBRUEsb0JBQUE7QUNNRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL3BvcHVwLW1lbnUvcG9wdXAtbWVudS1vbmUvcG9wdXAtbWVudS1vbmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvcHVwLW1lbnUgaW9uLWljb24ge1xyXG4gIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAyLjVlbTtcclxufVxyXG4ucG9wdXAtbWVudSBpb24tbGFiZWwge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDAuN2VtO1xyXG59XHJcbi5wb3B1cC1tZW51LW92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDBweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgcmlnaHQ6IDBweDtcclxuICBib3R0b206IDBweDtcclxuICB6LWluZGV4OiA2O1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyZ2JhKDY4LCA2OCwgNjgsIDAuNSkgMCUsIHJnYmEoNjgsIDY4LCA2OCwgMC4yNSkgMTAwJSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoNjgsIDY4LCA2OCwgMC41KSAwJSwgcmdiYSg2OCwgNjgsIDY4LCAwLjI1KSAxMDAlKTtcclxufVxyXG4ucG9wdXAtbWVudS1vdmVybGF5LmluIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuLnBvcHVwLW1lbnUtdG9nZ2xlIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvdHRvbTogMjBweDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4ODZhZWE7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzUyMjdlMTtcclxuICB6LWluZGV4OiA3O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMzVzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjM1cyBlYXNlLWluLW91dDtcclxufVxyXG4ucG9wdXAtbWVudS10b2dnbGU6YmVmb3JlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLy8gY29udGVudDogXCJcXGYzMGNcIjtcclxuICBmb250LWZhbWlseTogXCJJb25pY29uc1wiO1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICB0b3A6IDBweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgb3BhY2l0eTogMTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjM1cyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG59XHJcbi5wb3B1cC1tZW51LXRvZ2dsZS5vdXQge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcclxufVxyXG4ucG9wdXAtbWVudS10b2dnbGUub3V0OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG59XHJcbi5wb3B1cC1tZW51LXBhbmVsIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGhlaWdodDogMTEwcHg7XHJcbiAgYm90dG9tOiAyMHB4O1xyXG4gIGxlZnQ6IDUwJTtcclxuICBtYXJnaW4tbGVmdDogLTE1MHB4O1xyXG4gIC8vIHBhZGRpbmc6IDBweCA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg4NmFlYTtcclxuICB6LWluZGV4OiA4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMzVzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjM1cyBlYXNlLWluLW91dDtcclxuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDAuMTVzO1xyXG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMTVzO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIGRpc3BsYXk6IC1tb3otZmxleDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xyXG4gIC1tb3otZmxleC13cmFwOiB3cmFwO1xyXG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4ucG9wdXAtbWVudS1wYW5lbC5pbiB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwcztcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcclxufVxyXG5cclxuIiwiLnBvcHVwLW1lbnUgaW9uLWljb24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMi41ZW07XG59XG5cbi5wb3B1cC1tZW51IGlvbi1sYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAwLjdlbTtcbn1cblxuLnBvcHVwLW1lbnUtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIHotaW5kZXg6IDY7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmdiYSg2OCwgNjgsIDY4LCAwLjUpIDAlLCByZ2JhKDY4LCA2OCwgNjgsIDAuMjUpIDEwMCUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSg2OCwgNjgsIDY4LCAwLjUpIDAlLCByZ2JhKDY4LCA2OCwgNjgsIDAuMjUpIDEwMCUpO1xufVxuXG4ucG9wdXAtbWVudS1vdmVybGF5LmluIHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLnBvcHVwLW1lbnUtdG9nZ2xlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3R0b206IDIwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg2YWVhO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNTIyN2UxO1xuICB6LWluZGV4OiA3O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjM1cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMzVzIGVhc2UtaW4tb3V0O1xufVxuXG4ucG9wdXAtbWVudS10b2dnbGU6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LWZhbWlseTogXCJJb25pY29uc1wiO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogMTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjM1cyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMTAwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4ucG9wdXAtbWVudS10b2dnbGUub3V0IHtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5wb3B1cC1tZW51LXRvZ2dsZS5vdXQ6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xufVxuXG4ucG9wdXAtbWVudS1wYW5lbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDExMHB4O1xuICBib3R0b206IDIwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0xNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg4NmFlYTtcbiAgei1pbmRleDogODtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjM1cyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwLjE1cztcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4xNXM7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWZsZXg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcbiAgLW1vei1mbGV4LXdyYXA6IHdyYXA7XG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnBvcHVwLW1lbnUtcGFuZWwuaW4ge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xufSJdfQ== */"]
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
      styles: ["ion-badge[_ngcontent-%COMP%] {\n  right: calc(50% - 30px) !important;\n  top: -5px;\n  position: absolute;\n  right: 4%;\n  padding: 1px 6px;\n  height: auto;\n  font-size: 12px;\n  line-height: 16px;\n}\n\n.popup-menu-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  z-index: 100;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.15s ease-in-out;\n  background-image: linear-gradient(rgba(68, 68, 68, 0.5) 0%, rgba(68, 68, 68, 0.25) 100%);\n}\n\n.popup-menu-overlay.in[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n\n.popup-menu-toggle[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 40px;\n  height: 40px;\n  bottom: 10px;\n  left: 50%;\n  margin-left: -20px;\n  background-color: #0f9d58;\n  border-radius: 50%;\n  z-index: 101;\n  transition: all 0.25s ease-in-out;\n}\n\n.popup-menu-toggle[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  text-align: center;\n  color: white;\n  font-size: 2.5em;\n}\n\n.popup-menu-toggle[_ngcontent-%COMP%]:before {\n  position: absolute;\n  font-family: \"Ionicons\";\n  width: 40px;\n  height: 40px;\n  top: 0px;\n  left: 0px;\n  line-height: 40px;\n  text-align: center;\n  font-size: 28px;\n  color: white;\n  opacity: 1;\n  transition: all 0.25s ease-in-out;\n  transform-origin: 100% 100%;\n  transform: scale(1);\n}\n\n.popup-menu-toggle.out[_ngcontent-%COMP%] {\n  opacity: 0;\n  visibility: hidden;\n  transform: scale(0);\n  transition: all 0.15s ease-in-out;\n}\n\n.popup-menu-toggle.out[_ngcontent-%COMP%]:before {\n  transition: all 0.15s ease-in-out;\n  transform: scale(0);\n}\n\n.popup-menu-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 300px;\n  height: 180px;\n  border-radius: 5%;\n  bottom: 20px;\n  left: 50%;\n  margin-left: -150px;\n  padding: 0px 5px;\n  background-color: #0f9d58;\n  z-index: 102;\n  transition: all 0.25s ease-in-out;\n  transition-delay: 0.15s;\n  transform-origin: 50% 100%;\n  transform: scale(0);\n  display: -moz-flex;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.popup-menu-panel[_ngcontent-%COMP%]   .popup-menu-item[_ngcontent-%COMP%] {\n  margin: auto;\n  -moz-flex: 1 0 30%;\n  flex: 1 0 30%;\n  display: -moz-flex;\n  display: flex;\n  -moz-flex-direction: column;\n  flex-direction: column;\n  transform: scale(0);\n  opacity: 0;\n  transition: all 0.25s ease-in-out;\n}\n\n.popup-menu-panel[_ngcontent-%COMP%]   .popup-menu-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  text-align: center;\n  color: white;\n  font-size: 2.5em;\n  margin-left: 29px;\n}\n\n.popup-menu-panel[_ngcontent-%COMP%]   .popup-menu-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin: auto 0px 5px 0px;\n  padding: 0px;\n  font-size: 30px;\n  line-height: 30px;\n  text-align: center;\n  color: white;\n}\n\n.popup-menu-panel[_ngcontent-%COMP%]   .popup-menu-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0px;\n  margin: 0px 0px auto 0px;\n  color: white;\n  text-align: center;\n  font-size: 11px;\n  text-transform: uppercase;\n  font-weight: bold;\n  line-height: 11px;\n}\n\n.popup-menu-panel[_ngcontent-%COMP%]   .popup-menu-item[_ngcontent-%COMP%]:active   i[_ngcontent-%COMP%] {\n  color: #dd4135;\n  transition: all 0.15s;\n}\n\n.popup-menu-panel[_ngcontent-%COMP%]   .popup-menu-item[_ngcontent-%COMP%]:active   span[_ngcontent-%COMP%] {\n  color: #dd4135;\n  transition: all 0.15s;\n}\n\n.popup-menu-panel.in[_ngcontent-%COMP%] {\n  transform: scale(1);\n  transition-delay: 0s;\n}\n\n.popup-menu-panel.in[_ngcontent-%COMP%]   .popup-menu-item[_ngcontent-%COMP%] {\n  transform: scale(1);\n  opacity: 1;\n  transition-delay: 0.15s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvcG9wdXAtbWVudS9wb3B1cC1tZW51LXR3by9DOlxcVXNlcnNcXFZhZ25lciBTYWJhZGlcXERvY3VtZW50c1xcUHJvamVjdHNcXF9NeVxcYXdlc29tZS1jb21wb25lbnRzLWlvbmljL3NyY1xcYXBwXFxwYWdlc1xceWFubmJmXFxjb21wb25lbnRzXFxwb3B1cC1tZW51XFxwb3B1cC1tZW51LXR3b1xccG9wdXAtbWVudS10d28ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy9wb3B1cC1tZW51L3BvcHVwLW1lbnUtdHdvL3BvcHVwLW1lbnUtdHdvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBRUEsaUNBQUE7RUFFQSx3RkFBQTtBQ0NGOztBRENBO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0FDRUY7O0FEQUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFFQSxpQ0FBQTtBQ0dGOztBRERFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNHSjs7QURBQTtFQUNFLGtCQUFBO0VBRUEsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUVBLGlDQUFBO0VBRUEsMkJBQUE7RUFFQSxtQkFBQTtBQ0VGOztBREFBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBRUEsbUJBQUE7RUFFQSxpQ0FBQTtBQ0dGOztBRERBO0VBRUUsaUNBQUE7RUFFQSxtQkFBQTtBQ0lGOztBREZBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFFQSxpQ0FBQTtFQUVBLHVCQUFBO0VBRUEsMEJBQUE7RUFFQSxtQkFBQTtFQUlBLGtCQUFBO0VBRUEsYUFBQTtFQUlBLGVBQUE7QUNLRjs7QURIQTtFQUNFLFlBQUE7RUFJQSxrQkFBQTtFQUVBLGFBQUE7RUFJQSxrQkFBQTtFQUVBLGFBQUE7RUFJQSwyQkFBQTtFQUVBLHNCQUFBO0VBRUEsbUJBQUE7RUFDQSxVQUFBO0VBRUEsaUNBQUE7QUNNRjs7QURKRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNNSjs7QURIQTtFQUNFLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ01GOztBREpBO0VBQ0UsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ09GOztBRExBO0VBQ0UsY0FBQTtFQUVBLHFCQUFBO0FDUUY7O0FETkE7RUFDRSxjQUFBO0VBRUEscUJBQUE7QUNTRjs7QURQQTtFQUVFLG1CQUFBO0VBRUEsb0JBQUE7QUNVRjs7QURSQTtFQUVFLG1CQUFBO0VBQ0EsVUFBQTtFQUVBLHVCQUFBO0FDV0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy9wb3B1cC1tZW51L3BvcHVwLW1lbnUtdHdvL3BvcHVwLW1lbnUtdHdvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1iYWRnZSB7XHJcbiAgcmlnaHQ6IGNhbGMoNTAlIC0gMzBweCkgIWltcG9ydGFudDtcclxuICB0b3A6IC01cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiA0JTtcclxuICBwYWRkaW5nOiAxcHggNnB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcbi5wb3B1cC1tZW51LW92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDBweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgcmlnaHQ6IDBweDtcclxuICBib3R0b206IDBweDtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgb3BhY2l0eTogMDtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHJnYmEoNjgsIDY4LCA2OCwgMC41KSAwJSwgcmdiYSg2OCwgNjgsIDY4LCAwLjI1KSAxMDAlKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSg2OCwgNjgsIDY4LCAwLjUpIDAlLCByZ2JhKDY4LCA2OCwgNjgsIDAuMjUpIDEwMCUpO1xyXG59XHJcbi5wb3B1cC1tZW51LW92ZXJsYXkuaW4ge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG4ucG9wdXAtbWVudS10b2dnbGUge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm90dG9tOiAxMHB4O1xyXG4gIGxlZnQ6IDUwJTtcclxuICBtYXJnaW4tbGVmdDogLTIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1LCAxNTcsIDg4KTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgei1pbmRleDogMTAxO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgaW9uLWljb24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyLjVlbTtcclxuICB9XHJcbn1cclxuLnBvcHVwLW1lbnUtdG9nZ2xlOmJlZm9yZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8vICAgY29udGVudDogXCJcXGYxMGFcIjtcclxuICBmb250LWZhbWlseTogXCJJb25pY29uc1wiO1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICB0b3A6IDBweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgb3BhY2l0eTogMTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG59XHJcbi5wb3B1cC1tZW51LXRvZ2dsZS5vdXQge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcclxufVxyXG4ucG9wdXAtbWVudS10b2dnbGUub3V0OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG59XHJcbi5wb3B1cC1tZW51LXBhbmVsIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGhlaWdodDogMTgwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNSU7XHJcbiAgYm90dG9tOiAyMHB4O1xyXG4gIGxlZnQ6IDUwJTtcclxuICBtYXJnaW4tbGVmdDogLTE1MHB4O1xyXG4gIHBhZGRpbmc6IDBweCA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1LCAxNTcsIDg4KTtcclxuICB6LWluZGV4OiAxMDI7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMC4xNXM7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4xNXM7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtbW96LWJveDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgZGlzcGxheTogLW1vei1mbGV4O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgLW1vei1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuLnBvcHVwLW1lbnUtcGFuZWwgLnBvcHVwLW1lbnUtaXRlbSB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIC13ZWJraXQtYm94LWZsZXg6IDEgMCAzMCU7XHJcbiAgLXdlYmtpdC1mbGV4OiAxIDAgMzAlO1xyXG4gIC1tb3otYm94LWZsZXg6IDEgMCAzMCU7XHJcbiAgLW1vei1mbGV4OiAxIDAgMzAlO1xyXG4gIC1tcy1mbGV4OiAxIDAgMzAlO1xyXG4gIGZsZXg6IDEgMCAzMCU7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIGRpc3BsYXk6IC1tb3otZmxleDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIC1tb3otZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICBpb24taWNvbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDIuNWVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI5cHg7XHJcbiAgfVxyXG59XHJcbi5wb3B1cC1tZW51LXBhbmVsIC5wb3B1cC1tZW51LWl0ZW0gaSB7XHJcbiAgbWFyZ2luOiBhdXRvIDBweCA1cHggMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4ucG9wdXAtbWVudS1wYW5lbCAucG9wdXAtbWVudS1pdGVtIHNwYW4ge1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBtYXJnaW46IDBweCAwcHggYXV0byAwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsaW5lLWhlaWdodDogMTFweDtcclxufVxyXG4ucG9wdXAtbWVudS1wYW5lbCAucG9wdXAtbWVudS1pdGVtOmFjdGl2ZSBpIHtcclxuICBjb2xvcjogcmdiKDIyMSwgNjUsIDUzKTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XHJcbn1cclxuLnBvcHVwLW1lbnUtcGFuZWwgLnBvcHVwLW1lbnUtaXRlbTphY3RpdmUgc3BhbiB7XHJcbiAgY29sb3I6IHJnYigyMjEsIDY1LCA1Myk7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xNXM7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xyXG59XHJcbi5wb3B1cC1tZW51LXBhbmVsLmluIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDBzO1xyXG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xyXG59XHJcbi5wb3B1cC1tZW51LXBhbmVsLmluIC5wb3B1cC1tZW51LWl0ZW0ge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwLjE1cztcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjE1cztcclxufVxyXG4iLCJpb24tYmFkZ2Uge1xuICByaWdodDogY2FsYyg1MCUgLSAzMHB4KSAhaW1wb3J0YW50O1xuICB0b3A6IC01cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDQlO1xuICBwYWRkaW5nOiAxcHggNnB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG59XG5cbi5wb3B1cC1tZW51LW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICB6LWluZGV4OiAxMDA7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmdiYSg2OCwgNjgsIDY4LCAwLjUpIDAlLCByZ2JhKDY4LCA2OCwgNjgsIDAuMjUpIDEwMCUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSg2OCwgNjgsIDY4LCAwLjUpIDAlLCByZ2JhKDY4LCA2OCwgNjgsIDAuMjUpIDEwMCUpO1xufVxuXG4ucG9wdXAtbWVudS1vdmVybGF5LmluIHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLnBvcHVwLW1lbnUtdG9nZ2xlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3R0b206IDEwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGY5ZDU4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHotaW5kZXg6IDEwMTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcbn1cbi5wb3B1cC1tZW51LXRvZ2dsZSBpb24taWNvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIuNWVtO1xufVxuXG4ucG9wdXAtbWVudS10b2dnbGU6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LWZhbWlseTogXCJJb25pY29uc1wiO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogMTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMTAwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4ucG9wdXAtbWVudS10b2dnbGUub3V0IHtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5wb3B1cC1tZW51LXRvZ2dsZS5vdXQ6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xufVxuXG4ucG9wdXAtbWVudS1wYW5lbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDE4MHB4O1xuICBib3JkZXItcmFkaXVzOiA1JTtcbiAgYm90dG9tOiAyMHB4O1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMTUwcHg7XG4gIHBhZGRpbmc6IDBweCA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZjlkNTg7XG4gIHotaW5kZXg6IDEwMjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwLjE1cztcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4xNXM7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWZsZXg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcbiAgLW1vei1mbGV4LXdyYXA6IHdyYXA7XG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnBvcHVwLW1lbnUtcGFuZWwgLnBvcHVwLW1lbnUtaXRlbSB7XG4gIG1hcmdpbjogYXV0bztcbiAgLXdlYmtpdC1ib3gtZmxleDogMSAwIDMwJTtcbiAgLXdlYmtpdC1mbGV4OiAxIDAgMzAlO1xuICAtbW96LWJveC1mbGV4OiAxIDAgMzAlO1xuICAtbW96LWZsZXg6IDEgMCAzMCU7XG4gIC1tcy1mbGV4OiAxIDAgMzAlO1xuICBmbGV4OiAxIDAgMzAlO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1vei1mbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLW1vei1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xufVxuLnBvcHVwLW1lbnUtcGFuZWwgLnBvcHVwLW1lbnUtaXRlbSBpb24taWNvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIuNWVtO1xuICBtYXJnaW4tbGVmdDogMjlweDtcbn1cblxuLnBvcHVwLW1lbnUtcGFuZWwgLnBvcHVwLW1lbnUtaXRlbSBpIHtcbiAgbWFyZ2luOiBhdXRvIDBweCA1cHggMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucG9wdXAtbWVudS1wYW5lbCAucG9wdXAtbWVudS1pdGVtIHNwYW4ge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4IDBweCBhdXRvIDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAxMXB4O1xufVxuXG4ucG9wdXAtbWVudS1wYW5lbCAucG9wdXAtbWVudS1pdGVtOmFjdGl2ZSBpIHtcbiAgY29sb3I6ICNkZDQxMzU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG59XG5cbi5wb3B1cC1tZW51LXBhbmVsIC5wb3B1cC1tZW51LWl0ZW06YWN0aXZlIHNwYW4ge1xuICBjb2xvcjogI2RkNDEzNTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cztcbn1cblxuLnBvcHVwLW1lbnUtcGFuZWwuaW4ge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xufVxuXG4ucG9wdXAtbWVudS1wYW5lbC5pbiAucG9wdXAtbWVudS1pdGVtIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICBvcGFjaXR5OiAxO1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDAuMTVzO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjE1cztcbn0iXX0= */"]
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
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PopupMenuPage_ion_item_8_Template_ion_item_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

          var item_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r2.itemTapped($event, item_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r1.title, " ");
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