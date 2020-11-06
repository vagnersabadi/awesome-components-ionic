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
      styles: [".textsliderfont[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\nion-slides[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nion-slides[_ngcontent-%COMP%]   .liveTrackingImg[_ngcontent-%COMP%] {\n  width: 96%;\n  padding: 20%;\n}\n\nion-slides[_ngcontent-%COMP%]   .btnSubmit[_ngcontent-%COMP%] {\n  --border-radius: 7px;\n}\n\nion-slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 20px;\n  flex-direction: column;\n}\n\nion-slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 150px;\n}\n\nion-slides[_ngcontent-%COMP%]   .slide.slide-1[_ngcontent-%COMP%] {\n  background: dodgerblue;\n  color: white;\n}\n\nion-slides[_ngcontent-%COMP%]   .slide.slide-2[_ngcontent-%COMP%] {\n  background: #f28131;\n  color: white;\n}\n\nion-slides[_ngcontent-%COMP%]   .slide.slide-3[_ngcontent-%COMP%] {\n  background: #9f5afd;\n  color: white;\n}\n\nion-slides[_ngcontent-%COMP%]   .slide.slide-4[_ngcontent-%COMP%] {\n  background: #2ecc71;\n  color: white;\n}\n\nion-slides[_ngcontent-%COMP%]   .skip-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2FtcGxlcy9jb21wb25lbnRzL3dhbGt0aHJvdWdoL0M6XFxVc2Vyc1xcVmFnbmVyIFNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZWN0c1xcX015XFxhd2Vzb21lLWNvbXBvbmVudHMtaW9uaWMvc3JjXFxhcHBcXHBhZ2VzXFxzYW1wbGVzXFxjb21wb25lbnRzXFx3YWxrdGhyb3VnaFxcd2Fsa3Rocm91Z2gucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zYW1wbGVzL2NvbXBvbmVudHMvd2Fsa3Rocm91Z2gvd2Fsa3Rocm91Z2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtBQ0VGOztBREFFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUNFSjs7QURDRTtFQUNFLG9CQUFBO0FDQ0o7O0FERUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDQUo7O0FEQ0k7RUFDRSxnQkFBQTtBQ0NOOztBRENJO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0FDQ047O0FEQ0k7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUNDTjs7QURDSTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQ0NOOztBRENJO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDQ047O0FER0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zYW1wbGVzL2NvbXBvbmVudHMvd2Fsa3Rocm91Z2gvd2Fsa3Rocm91Z2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRzbGlkZXJmb250IHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuaW9uLXNsaWRlcyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAubGl2ZVRyYWNraW5nSW1nIHtcclxuICAgIHdpZHRoOiA5NiU7XHJcbiAgICBwYWRkaW5nOiAyMCU7XHJcbiAgfVxyXG5cclxuICAuYnRuU3VibWl0IHtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIH1cclxuXHJcbiAgLnNsaWRlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaW1nIHtcclxuICAgICAgbWF4LXdpZHRoOiAxNTBweDtcclxuICAgIH1cclxuICAgICYuc2xpZGUtMSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGRvZGdlcmJsdWU7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgICYuc2xpZGUtMiB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmMjgxMzE7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgICYuc2xpZGUtMyB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICM5ZjVhZmQ7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgICYuc2xpZGUtNCB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMyZWNjNzE7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5za2lwLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICByaWdodDogMjBweDtcclxuICB9XHJcbn1cclxuIiwiLnRleHRzbGlkZXJmb250IHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5pb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuaW9uLXNsaWRlcyAubGl2ZVRyYWNraW5nSW1nIHtcbiAgd2lkdGg6IDk2JTtcbiAgcGFkZGluZzogMjAlO1xufVxuaW9uLXNsaWRlcyAuYnRuU3VibWl0IHtcbiAgLS1ib3JkZXItcmFkaXVzOiA3cHg7XG59XG5pb24tc2xpZGVzIC5zbGlkZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuaW9uLXNsaWRlcyAuc2xpZGUgaW1nIHtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbn1cbmlvbi1zbGlkZXMgLnNsaWRlLnNsaWRlLTEge1xuICBiYWNrZ3JvdW5kOiBkb2RnZXJibHVlO1xuICBjb2xvcjogd2hpdGU7XG59XG5pb24tc2xpZGVzIC5zbGlkZS5zbGlkZS0yIHtcbiAgYmFja2dyb3VuZDogI2YyODEzMTtcbiAgY29sb3I6IHdoaXRlO1xufVxuaW9uLXNsaWRlcyAuc2xpZGUuc2xpZGUtMyB7XG4gIGJhY2tncm91bmQ6ICM5ZjVhZmQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmlvbi1zbGlkZXMgLnNsaWRlLnNsaWRlLTQge1xuICBiYWNrZ3JvdW5kOiAjMmVjYzcxO1xuICBjb2xvcjogd2hpdGU7XG59XG5pb24tc2xpZGVzIC5za2lwLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICByaWdodDogMjBweDtcbn0iXX0= */"]
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