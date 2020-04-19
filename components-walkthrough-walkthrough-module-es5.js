function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-walkthrough-walkthrough-module"], {
  /***/
  "./src/app/pages/samples/components/walkthrough/walkthrough-routing.module.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/pages/samples/components/walkthrough/walkthrough-routing.module.ts ***!
    \************************************************************************************/

  /*! exports provided: WalkthroughPageRoutingModule */

  /***/
  function srcAppPagesSamplesComponentsWalkthroughWalkthroughRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WalkthroughPageRoutingModule", function () {
      return WalkthroughPageRoutingModule;
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


    var _walkthrough_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./walkthrough.page */
    "./src/app/pages/samples/components/walkthrough/walkthrough.page.ts");

    var routes = [{
      path: '',
      component: _walkthrough_page__WEBPACK_IMPORTED_MODULE_2__["WalkthroughPage"]
    }];

    var WalkthroughPageRoutingModule = function WalkthroughPageRoutingModule() {
      _classCallCheck(this, WalkthroughPageRoutingModule);
    };

    WalkthroughPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: WalkthroughPageRoutingModule
    });
    WalkthroughPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function WalkthroughPageRoutingModule_Factory(t) {
        return new (t || WalkthroughPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WalkthroughPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WalkthroughPageRoutingModule, [{
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
  "./src/app/pages/samples/components/walkthrough/walkthrough.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/pages/samples/components/walkthrough/walkthrough.module.ts ***!
    \****************************************************************************/

  /*! exports provided: WalkthroughPageModule */

  /***/
  function srcAppPagesSamplesComponentsWalkthroughWalkthroughModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WalkthroughPageModule", function () {
      return WalkthroughPageModule;
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


    var _walkthrough_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./walkthrough-routing.module */
    "./src/app/pages/samples/components/walkthrough/walkthrough-routing.module.ts");
    /* harmony import */


    var _walkthrough_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./walkthrough.page */
    "./src/app/pages/samples/components/walkthrough/walkthrough.page.ts");

    var WalkthroughPageModule = function WalkthroughPageModule() {
      _classCallCheck(this, WalkthroughPageModule);
    };

    WalkthroughPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: WalkthroughPageModule
    });
    WalkthroughPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function WalkthroughPageModule_Factory(t) {
        return new (t || WalkthroughPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _walkthrough_routing_module__WEBPACK_IMPORTED_MODULE_4__["WalkthroughPageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WalkthroughPageModule, {
        declarations: [_walkthrough_page__WEBPACK_IMPORTED_MODULE_5__["WalkthroughPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _walkthrough_routing_module__WEBPACK_IMPORTED_MODULE_4__["WalkthroughPageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WalkthroughPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _walkthrough_routing_module__WEBPACK_IMPORTED_MODULE_4__["WalkthroughPageRoutingModule"]],
          declarations: [_walkthrough_page__WEBPACK_IMPORTED_MODULE_5__["WalkthroughPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/samples/components/walkthrough/walkthrough.page.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/samples/components/walkthrough/walkthrough.page.ts ***!
    \**************************************************************************/

  /*! exports provided: WalkthroughPage */

  /***/
  function srcAppPagesSamplesComponentsWalkthroughWalkthroughPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WalkthroughPage", function () {
      return WalkthroughPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var WalkthroughPage = /*#__PURE__*/function () {
      function WalkthroughPage(route) {
        _classCallCheck(this, WalkthroughPage);

        this.route = route;
        this.slideOpts = {
          effect: 'flip'
        };
      }

      _createClass(WalkthroughPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "sliderChanges",
        value: function sliderChanges(event) {}
      }, {
        key: "skip",
        value: function skip() {
          console.log('skip slides');
          this.route.navigate(['samples']);
        }
      }]);

      return WalkthroughPage;
    }();

    WalkthroughPage.ɵfac = function WalkthroughPage_Factory(t) {
      return new (t || WalkthroughPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    WalkthroughPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WalkthroughPage,
      selectors: [["app-walkthrough"]],
      decls: 46,
      vars: 1,
      consts: [["pager", "true", 3, "options", "ionSlideDidChange"], [1, "slide", "slide-1"], [1, "skip-button"], ["color", "light", "fill", "clear", 1, "skip", 3, "click"], ["src", "assets/samples/imgs/ionic-white.png"], [1, "slideTitle"], [1, "slideText"], [1, "slide", "slide-2"], ["src", "assets/samples/imgs/firebase.png", "alt", ""], [1, "slide", "slide-3"], ["src", "assets/samples/imgs/woocommerce.png", "alt", ""], [1, "slide", "slide-4"], ["src", "assets/samples/imgs/layouts.png", "alt", ""], ["padding-vertical", "", "padding-horizontal", "", "margin-horizontal", "", "margin-vertical", ""], ["color", "primary", "padding-horizontal", "", "text-uppercase", "", 1, "btnSubmit", "slideTitle", 3, "click"]],
      template: function WalkthroughPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-slides", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionSlideDidChange", function WalkthroughPage_Template_ion_slides_ionSlideDidChange_1_listener($event) {
            return ctx.sliderChanges($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-slide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalkthroughPage_Template_ion_button_click_5_listener() {
            return ctx.skip();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Skip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "SAMPLES");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Explore the ultimate Ionic 5 resource for all your app development");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-slide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalkthroughPage_Template_ion_button_click_16_listener() {
            return ctx.skip();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Skip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "FIREBASE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Use Firebase Authentication, social login, storage and data queries for your application");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ion-slide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ion-button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalkthroughPage_Template_ion_button_click_27_listener() {
            return ctx.skip();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Skip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "WOO-COMMERCE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Use Woocommerce directly in your app. Use all shop features of an e-commerce platform.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ion-slide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "LAYOUTS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Explore from a large number of layouts and create your perfect app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ion-button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalkthroughPage_Template_ion_button_click_44_listener() {
            return ctx.skip();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Get Started");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.slideOpts);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlide"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"]],
      styles: [".textsliderfont[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\nion-slides[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nion-slides[_ngcontent-%COMP%]   .liveTrackingImg[_ngcontent-%COMP%] {\n  width: 96%;\n  padding: 20%;\n}\n\nion-slides[_ngcontent-%COMP%]   .btnSubmit[_ngcontent-%COMP%] {\n  --border-radius: 7px;\n}\n\nion-slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 20px;\n  flex-direction: column;\n}\n\nion-slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 150px;\n}\n\nion-slides[_ngcontent-%COMP%]   .slide.slide-1[_ngcontent-%COMP%] {\n  background: dodgerblue;\n  color: white;\n}\n\nion-slides[_ngcontent-%COMP%]   .slide.slide-2[_ngcontent-%COMP%] {\n  background: #f28131;\n  color: white;\n}\n\nion-slides[_ngcontent-%COMP%]   .slide.slide-3[_ngcontent-%COMP%] {\n  background: #9f5afd;\n  color: white;\n}\n\nion-slides[_ngcontent-%COMP%]   .slide.slide-4[_ngcontent-%COMP%] {\n  background: #2ecc71;\n  color: white;\n}\n\nion-slides[_ngcontent-%COMP%]   .skip-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2FtcGxlcy9jb21wb25lbnRzL3dhbGt0aHJvdWdoL0M6XFxVc2Vyc1xcc2FiYWRpXFxEb2N1bWVudHNcXFByb2pldG9zXFxfaW9uaWNcXGlvbmljNC1jb21wb25lbnRzL3NyY1xcYXBwXFxwYWdlc1xcc2FtcGxlc1xcY29tcG9uZW50c1xcd2Fsa3Rocm91Z2hcXHdhbGt0aHJvdWdoLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2FtcGxlcy9jb21wb25lbnRzL3dhbGt0aHJvdWdoL3dhbGt0aHJvdWdoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUNDRjs7QURDQTtFQUNFLFlBQUE7QUNFRjs7QURBRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQ0U7RUFDRSxvQkFBQTtBQ0NKOztBREVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ0FKOztBRENJO0VBQ0UsZ0JBQUE7QUNDTjs7QURDSTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtBQ0NOOztBRENJO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDQ047O0FEQ0k7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUNDTjs7QURDSTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQ0NOOztBREdFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2FtcGxlcy9jb21wb25lbnRzL3dhbGt0aHJvdWdoL3dhbGt0aHJvdWdoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0c2xpZGVyZm9udCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbmlvbi1zbGlkZXMge1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgLmxpdmVUcmFja2luZ0ltZyB7XHJcbiAgICB3aWR0aDogOTYlO1xyXG4gICAgcGFkZGluZzogMjAlO1xyXG4gIH1cclxuXHJcbiAgLmJ0blN1Ym1pdCB7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDdweDtcclxuICB9XHJcblxyXG4gIC5zbGlkZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGltZyB7XHJcbiAgICAgIG1heC13aWR0aDogMTUwcHg7XHJcbiAgICB9XHJcbiAgICAmLnNsaWRlLTEge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBkb2RnZXJibHVlO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAmLnNsaWRlLTIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZjI4MTMxO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAmLnNsaWRlLTMge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjOWY1YWZkO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAmLnNsaWRlLTQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMmVjYzcxO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2tpcC1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG59XHJcbiIsIi50ZXh0c2xpZGVyZm9udCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogMTAwJTtcbn1cbmlvbi1zbGlkZXMgLmxpdmVUcmFja2luZ0ltZyB7XG4gIHdpZHRoOiA5NiU7XG4gIHBhZGRpbmc6IDIwJTtcbn1cbmlvbi1zbGlkZXMgLmJ0blN1Ym1pdCB7XG4gIC0tYm9yZGVyLXJhZGl1czogN3B4O1xufVxuaW9uLXNsaWRlcyAuc2xpZGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbmlvbi1zbGlkZXMgLnNsaWRlIGltZyB7XG4gIG1heC13aWR0aDogMTUwcHg7XG59XG5pb24tc2xpZGVzIC5zbGlkZS5zbGlkZS0xIHtcbiAgYmFja2dyb3VuZDogZG9kZ2VyYmx1ZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuaW9uLXNsaWRlcyAuc2xpZGUuc2xpZGUtMiB7XG4gIGJhY2tncm91bmQ6ICNmMjgxMzE7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmlvbi1zbGlkZXMgLnNsaWRlLnNsaWRlLTMge1xuICBiYWNrZ3JvdW5kOiAjOWY1YWZkO1xuICBjb2xvcjogd2hpdGU7XG59XG5pb24tc2xpZGVzIC5zbGlkZS5zbGlkZS00IHtcbiAgYmFja2dyb3VuZDogIzJlY2M3MTtcbiAgY29sb3I6IHdoaXRlO1xufVxuaW9uLXNsaWRlcyAuc2tpcC1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjBweDtcbiAgcmlnaHQ6IDIwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WalkthroughPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-walkthrough',
          templateUrl: './walkthrough.page.html',
          styleUrls: ['./walkthrough.page.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=components-walkthrough-walkthrough-module-es5.js.map