function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-popup-fab-popup-fab-module"], {
  /***/
  "./src/app/pages/yannbf/components/popup-fab/popup-fab-modal/popup-fab-modal.module.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/pages/yannbf/components/popup-fab/popup-fab-modal/popup-fab-modal.module.ts ***!
    \*********************************************************************************************/

  /*! exports provided: PopupFabModalPageModule */

  /***/
  function srcAppPagesYannbfComponentsPopupFabPopupFabModalPopupFabModalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopupFabModalPageModule", function () {
      return PopupFabModalPageModule;
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


    var _popup_fab_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./popup-fab-modal.page */
    "./src/app/pages/yannbf/components/popup-fab/popup-fab-modal/popup-fab-modal.page.ts");

    var PopupFabModalPageModule = function PopupFabModalPageModule() {
      _classCallCheck(this, PopupFabModalPageModule);
    };

    PopupFabModalPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PopupFabModalPageModule
    });
    PopupFabModalPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PopupFabModalPageModule_Factory(t) {
        return new (t || PopupFabModalPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PopupFabModalPageModule, {
        declarations: [_popup_fab_modal_page__WEBPACK_IMPORTED_MODULE_4__["PopupFabModalPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupFabModalPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
          declarations: [_popup_fab_modal_page__WEBPACK_IMPORTED_MODULE_4__["PopupFabModalPage"]],
          entryComponents: [_popup_fab_modal_page__WEBPACK_IMPORTED_MODULE_4__["PopupFabModalPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/yannbf/components/popup-fab/popup-fab-modal/popup-fab-modal.page.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/pages/yannbf/components/popup-fab/popup-fab-modal/popup-fab-modal.page.ts ***!
    \*******************************************************************************************/

  /*! exports provided: PopupFabModalPage */

  /***/
  function srcAppPagesYannbfComponentsPopupFabPopupFabModalPopupFabModalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopupFabModalPage", function () {
      return PopupFabModalPage;
    });
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PopupFabModalPage = /*#__PURE__*/function () {
      function PopupFabModalPage(modaCtrl) {
        _classCallCheck(this, PopupFabModalPage);

        this.modaCtrl = modaCtrl;
        this.slideOpts = {
          effect: 'flip'
        };
      }

      _createClass(PopupFabModalPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modaCtrl.dismiss();
        }
      }]);

      return PopupFabModalPage;
    }();

    PopupFabModalPage.ɵfac = function PopupFabModalPage_Factory(t) {
      return new (t || PopupFabModalPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["ModalController"]));
    };

    PopupFabModalPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: PopupFabModalPage,
      selectors: [["app-popup-fab-modal"]],
      decls: 24,
      vars: 2,
      consts: [["slot", "end"], ["fill", "clear", 3, "click"], ["name", "close", "slot", "icon-only", "color", "primary"], [3, "fullscreen"], ["pager", "true", 3, "options"], [1, "slide", "slide-1"], [1, "slideTitle"], [1, "slide", "slide-2"], [1, "slide", "slide-3"]],
      template: function PopupFabModalPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PopupFabModalPage_Template_ion_button_click_3_listener() {
            return ctx.dismiss();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Popup fab modal");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-content", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-slides", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-slide");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h1", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Slide 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-slide");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h1", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Slide 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-slide");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h1", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Slide 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fullscreen", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.slideOpts);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonSlides"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonSlide"]],
      styles: ["ion-slide[_ngcontent-%COMP%] {\n  -webkit-animation: fade-in 0.8s ease-in-out;\n          animation: fade-in 0.8s ease-in-out;\n}\n\n@-webkit-keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: #00ccb2;\n}\n\nion-icon[_ngcontent-%COMP%], div[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n}\n\nion-slides[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nion-slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 20px;\n  flex-direction: column;\n}\n\nion-slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 150px;\n}\n\nion-slides[_ngcontent-%COMP%]   .slide.slide-1[_ngcontent-%COMP%] {\n  background: dodgerblue;\n  color: white;\n}\n\nion-slides[_ngcontent-%COMP%]   .slide.slide-2[_ngcontent-%COMP%] {\n  background: #f28131;\n  color: white;\n}\n\nion-slides[_ngcontent-%COMP%]   .slide.slide-3[_ngcontent-%COMP%] {\n  background: #9f5afd;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvcG9wdXAtZmFiL3BvcHVwLWZhYi1tb2RhbC9DOlxcVXNlcnNcXHNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZXRvc1xcX2lvbmljXFxpb25pYzQtY29tcG9uZW50cy9zcmNcXGFwcFxccGFnZXNcXHlhbm5iZlxcY29tcG9uZW50c1xccG9wdXAtZmFiXFxwb3B1cC1mYWItbW9kYWxcXHBvcHVwLWZhYi1tb2RhbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL3BvcHVwLWZhYi9wb3B1cC1mYWItbW9kYWwvcG9wdXAtZmFiLW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJDQUFBO1VBQUEsbUNBQUE7QUNDRjs7QURFQTtFQUNFO0lBQ0UsVUFBQTtFQ0NGO0VEQ0E7SUFDRSxVQUFBO0VDQ0Y7QUFDRjs7QURQQTtFQUNFO0lBQ0UsVUFBQTtFQ0NGO0VEQ0E7SUFDRSxVQUFBO0VDQ0Y7QUFDRjs7QURFQTtFQUNFLHFCQUFBO0FDQUY7O0FER0E7O0VBRUUsWUFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FERUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDQUo7O0FEQ0k7RUFDRSxnQkFBQTtBQ0NOOztBRENJO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0FDQ047O0FEQ0k7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUNDTjs7QURDSTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQ0NOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvcG9wdXAtZmFiL3BvcHVwLWZhYi1tb2RhbC9wb3B1cC1mYWItbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNsaWRlIHtcclxuICBhbmltYXRpb246IGZhZGUtaW4gMC44cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlLWluIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMDBjY2IyO1xyXG59XHJcblxyXG5pb24taWNvbixcclxuZGl2IHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmlvbi1zbGlkZXMge1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgLnNsaWRlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaW1nIHtcclxuICAgICAgbWF4LXdpZHRoOiAxNTBweDtcclxuICAgIH1cclxuICAgICYuc2xpZGUtMSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGRvZGdlcmJsdWU7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgICYuc2xpZGUtMiB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmMjgxMzE7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgICYuc2xpZGUtMyB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICM5ZjVhZmQ7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW9uLXNsaWRlIHtcbiAgYW5pbWF0aW9uOiBmYWRlLWluIDAuOHMgZWFzZS1pbi1vdXQ7XG59XG5cbkBrZXlmcmFtZXMgZmFkZS1pbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDBjY2IyO1xufVxuXG5pb24taWNvbixcbmRpdiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5pb24tc2xpZGVzIC5zbGlkZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuaW9uLXNsaWRlcyAuc2xpZGUgaW1nIHtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbn1cbmlvbi1zbGlkZXMgLnNsaWRlLnNsaWRlLTEge1xuICBiYWNrZ3JvdW5kOiBkb2RnZXJibHVlO1xuICBjb2xvcjogd2hpdGU7XG59XG5pb24tc2xpZGVzIC5zbGlkZS5zbGlkZS0yIHtcbiAgYmFja2dyb3VuZDogI2YyODEzMTtcbiAgY29sb3I6IHdoaXRlO1xufVxuaW9uLXNsaWRlcyAuc2xpZGUuc2xpZGUtMyB7XG4gIGJhY2tncm91bmQ6ICM5ZjVhZmQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PopupFabModalPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-popup-fab-modal',
          templateUrl: './popup-fab-modal.page.html',
          styleUrls: ['./popup-fab-modal.page.scss']
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["ModalController"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/yannbf/components/popup-fab/popup-fab.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/yannbf/components/popup-fab/popup-fab.module.ts ***!
    \***********************************************************************/

  /*! exports provided: PopupFabPageModule */

  /***/
  function srcAppPagesYannbfComponentsPopupFabPopupFabModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopupFabPageModule", function () {
      return PopupFabPageModule;
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


    var _popup_fab_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./popup-fab.page */
    "./src/app/pages/yannbf/components/popup-fab/popup-fab.page.ts");
    /* harmony import */


    var _popup_fab_modal_popup_fab_modal_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./popup-fab-modal/popup-fab-modal.module */
    "./src/app/pages/yannbf/components/popup-fab/popup-fab-modal/popup-fab-modal.module.ts");

    var routes = [{
      path: '',
      component: _popup_fab_page__WEBPACK_IMPORTED_MODULE_5__["PopupFabPage"]
    }];

    var PopupFabPageModule = function PopupFabPageModule() {
      _classCallCheck(this, PopupFabPageModule);
    };

    PopupFabPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PopupFabPageModule
    });
    PopupFabPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PopupFabPageModule_Factory(t) {
        return new (t || PopupFabPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _popup_fab_modal_popup_fab_modal_module__WEBPACK_IMPORTED_MODULE_6__["PopupFabModalPageModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PopupFabPageModule, {
        declarations: [_popup_fab_page__WEBPACK_IMPORTED_MODULE_5__["PopupFabPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _popup_fab_modal_popup_fab_modal_module__WEBPACK_IMPORTED_MODULE_6__["PopupFabModalPageModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupFabPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _popup_fab_modal_popup_fab_modal_module__WEBPACK_IMPORTED_MODULE_6__["PopupFabModalPageModule"]],
          declarations: [_popup_fab_page__WEBPACK_IMPORTED_MODULE_5__["PopupFabPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/yannbf/components/popup-fab/popup-fab.page.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/yannbf/components/popup-fab/popup-fab.page.ts ***!
    \*********************************************************************/

  /*! exports provided: PopupFabPage */

  /***/
  function srcAppPagesYannbfComponentsPopupFabPopupFabPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopupFabPage", function () {
      return PopupFabPage;
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


    var _popup_fab_modal_popup_fab_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./popup-fab-modal/popup-fab-modal.page */
    "./src/app/pages/yannbf/components/popup-fab/popup-fab-modal/popup-fab-modal.page.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0, a1) {
      return {
        "expand": a0,
        "contract": a1
      };
    };

    var PopupFabPage = /*#__PURE__*/function () {
      function PopupFabPage(modalCtrl) {
        _classCallCheck(this, PopupFabPage);

        this.modalCtrl = modalCtrl;
        this.showIcon = true;
        this.preload = true;
      }

      _createClass(PopupFabPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "expand",
        value: function expand() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.expanded = true;
                    this.contracted = !this.expanded;
                    this.showIcon = false; // setTimeout(() => {
                    //   const modal = this.modalCtrl.create('PopupFabModalPage');
                    //   modal.onDidDismiss(data => {
                    //     this.expanded = false;
                    //     this.contracted = !this.expanded;
                    //     setTimeout(() => this.showIcon = true, 330);
                    //   });
                    //   modal.present();
                    // }, 200);

                    setTimeout(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var _this2 = this;

                        var modal, _yield$modal$onWillDi, data;

                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                _context.next = 2;
                                return this.modalCtrl.create({
                                  component: _popup_fab_modal_popup_fab_modal_page__WEBPACK_IMPORTED_MODULE_3__["PopupFabModalPage"]
                                });

                              case 2:
                                modal = _context.sent;
                                _context.next = 5;
                                return modal.present();

                              case 5:
                                _context.next = 7;
                                return modal.onWillDismiss();

                              case 7:
                                _yield$modal$onWillDi = _context.sent;
                                data = _yield$modal$onWillDi.data;
                                this.expanded = false;
                                this.contracted = !this.expanded;
                                setTimeout(function () {
                                  return _this2.showIcon = true;
                                }, 330);

                              case 12:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    }, 200);

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return PopupFabPage;
    }();

    PopupFabPage.ɵfac = function PopupFabPage_Factory(t) {
      return new (t || PopupFabPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]));
    };

    PopupFabPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: PopupFabPage,
      selectors: [["app-popup-fab"]],
      decls: 17,
      vars: 5,
      consts: [["slot", "start"], ["defaultHref", "/"], [1, "ion-padding"], ["src", "assets/yannbf/img/lists/wishlist-4.jpg"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed", 3, "ngClass"], ["size", "small", 3, "click"], ["name", "ios-arrow-forward", 3, "hidden"]],
      template: function PopupFabPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Popup fab");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Let's take a look");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-fab", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-fab-button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PopupFabPage_Template_ion_fab_button_click_15_listener() {
            return ctx.expand();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "ion-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c0, ctx.expanded, ctx.contracted));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.showIcon);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFab"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"]],
      styles: ["ion-fab-button[_ngcontent-%COMP%] {\n  --background: #00ccb2;\n}\n\n.expand[_ngcontent-%COMP%] {\n  -webkit-animation: expand 0.5s cubic-bezier(0.66, 0.35, 0.96, 0.38) forwards;\n          animation: expand 0.5s cubic-bezier(0.66, 0.35, 0.96, 0.38) forwards;\n}\n\n.contract[_ngcontent-%COMP%] {\n  -webkit-animation: contract 0.4s cubic-bezier(0.75, 0.8, 0.25, 0) forwards;\n          animation: contract 0.4s cubic-bezier(0.75, 0.8, 0.25, 0) forwards;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: #82e850;\n}\n\n@-webkit-keyframes contract {\n  0% {\n    transform: scale(100);\n    border-radius: 100%;\n    margin: 0;\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes contract {\n  0% {\n    transform: scale(100);\n    border-radius: 100%;\n    margin: 0;\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@-webkit-keyframes expand {\n  50% {\n    transform: scale(100);\n  }\n  100% {\n    transform: scale(100);\n    border-radius: 100%;\n    margin: 0;\n  }\n}\n\n@keyframes expand {\n  50% {\n    transform: scale(100);\n  }\n  100% {\n    transform: scale(100);\n    border-radius: 100%;\n    margin: 0;\n  }\n}\n\nion-card[_ngcontent-%COMP%] {\n  position: relative;\n  height: 80vh;\n  background: white;\n}\n\nion-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  left: 5%;\n  bottom: 3%;\n  position: absolute;\n}\n\nion-icon[_ngcontent-%COMP%] {\n  transition: display 1s ease-in;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvcG9wdXAtZmFiL0M6XFxVc2Vyc1xcc2FiYWRpXFxEb2N1bWVudHNcXFByb2pldG9zXFxfaW9uaWNcXGlvbmljNC1jb21wb25lbnRzL3NyY1xcYXBwXFxwYWdlc1xceWFubmJmXFxjb21wb25lbnRzXFxwb3B1cC1mYWJcXHBvcHVwLWZhYi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL3BvcHVwLWZhYi9wb3B1cC1mYWIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLDRFQUFBO1VBQUEsb0VBQUE7QUNDRjs7QURFQTtFQUNFLDBFQUFBO1VBQUEsa0VBQUE7QUNDRjs7QURFQTtFQUNBLHFCQUFBO0FDQ0E7O0FERUE7RUFDRTtJQUNFLHFCQUFBO0lBQ0EsbUJBQUE7SUFDQSxTQUFBO0VDQ0Y7RURDQTtJQUNFLG1CQUFBO0VDQ0Y7QUFDRjs7QURUQTtFQUNFO0lBQ0UscUJBQUE7SUFDQSxtQkFBQTtJQUNBLFNBQUE7RUNDRjtFRENBO0lBQ0UsbUJBQUE7RUNDRjtBQUNGOztBREVBO0VBQ0U7SUFDRSxxQkFBQTtFQ0FGO0VERUE7SUFDRSxxQkFBQTtJQUNBLG1CQUFBO0lBQ0EsU0FBQTtFQ0FGO0FBQ0Y7O0FEUkE7RUFDRTtJQUNFLHFCQUFBO0VDQUY7RURFQTtJQUNFLHFCQUFBO0lBQ0EsbUJBQUE7SUFDQSxTQUFBO0VDQUY7QUFDRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDREY7O0FER0U7RUFDRSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDREo7O0FES0E7RUFDRSw4QkFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvcG9wdXAtZmFiL3BvcHVwLWZhYi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZmFiLWJ1dHRvbiB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMDBjY2IyO1xyXG59XHJcblxyXG4uZXhwYW5kIHtcclxuICBhbmltYXRpb246IGV4cGFuZCAwLjVzIGN1YmljLWJlemllcigwLjY2LCAwLjM1LCAwLjk2LCAwLjM4KSBmb3J3YXJkcztcclxufVxyXG5cclxuLmNvbnRyYWN0IHtcclxuICBhbmltYXRpb246IGNvbnRyYWN0IDAuNHMgY3ViaWMtYmV6aWVyKDAuNzUsIDAuOCwgMC4yNSwgMCkgZm9yd2FyZHM7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuLS1iYWNrZ3JvdW5kOiAjODJlODUwO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGNvbnRyYWN0IHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEwMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGV4cGFuZCB7XHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMTAwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEwMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDgwdmg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcblxyXG4gIGg0IHtcclxuICAgIGxlZnQ6IDUlO1xyXG4gICAgYm90dG9tOiAzJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICB0cmFuc2l0aW9uOiBkaXNwbGF5IDFzIGVhc2UtaW47XHJcbn1cclxuIiwiaW9uLWZhYi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICMwMGNjYjI7XG59XG5cbi5leHBhbmQge1xuICBhbmltYXRpb246IGV4cGFuZCAwLjVzIGN1YmljLWJlemllcigwLjY2LCAwLjM1LCAwLjk2LCAwLjM4KSBmb3J3YXJkcztcbn1cblxuLmNvbnRyYWN0IHtcbiAgYW5pbWF0aW9uOiBjb250cmFjdCAwLjRzIGN1YmljLWJlemllcigwLjc1LCAwLjgsIDAuMjUsIDApIGZvcndhcmRzO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogIzgyZTg1MDtcbn1cblxuQGtleWZyYW1lcyBjb250cmFjdCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEwMCk7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuQGtleWZyYW1lcyBleHBhbmQge1xuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMTAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEwMCk7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cbmlvbi1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDgwdmg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuaW9uLWNhcmQgaDQge1xuICBsZWZ0OiA1JTtcbiAgYm90dG9tOiAzJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG5pb24taWNvbiB7XG4gIHRyYW5zaXRpb246IGRpc3BsYXkgMXMgZWFzZS1pbjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PopupFabPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-popup-fab',
          templateUrl: './popup-fab.page.html',
          styleUrls: ['./popup-fab.page.scss']
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
//# sourceMappingURL=pages-yannbf-components-popup-fab-popup-fab-module-es5.js.map