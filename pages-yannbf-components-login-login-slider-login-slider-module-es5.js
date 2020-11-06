function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-login-login-slider-login-slider-module"], {
  /***/
  "./src/app/pages/yannbf/components/login/login-slider/login-slider.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/yannbf/components/login/login-slider/login-slider.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: LoginSliderPageModule */

  /***/
  function srcAppPagesYannbfComponentsLoginLoginSliderLoginSliderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginSliderPageModule", function () {
      return LoginSliderPageModule;
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


    var _login_slider_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-slider.page */
    "./src/app/pages/yannbf/components/login/login-slider/login-slider.page.ts");

    var routes = [{
      path: '',
      component: _login_slider_page__WEBPACK_IMPORTED_MODULE_5__["LoginSliderPage"]
    }];

    var LoginSliderPageModule = function LoginSliderPageModule() {
      _classCallCheck(this, LoginSliderPageModule);
    };

    LoginSliderPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LoginSliderPageModule
    });
    LoginSliderPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function LoginSliderPageModule_Factory(t) {
        return new (t || LoginSliderPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginSliderPageModule, {
        declarations: [_login_slider_page__WEBPACK_IMPORTED_MODULE_5__["LoginSliderPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginSliderPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
          declarations: [_login_slider_page__WEBPACK_IMPORTED_MODULE_5__["LoginSliderPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/yannbf/components/login/login-slider/login-slider.page.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/yannbf/components/login/login-slider/login-slider.page.ts ***!
    \*********************************************************************************/

  /*! exports provided: LoginSliderPage */

  /***/
  function srcAppPagesYannbfComponentsLoginLoginSliderLoginSliderPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginSliderPage", function () {
      return LoginSliderPage;
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

    var _c0 = ["slider"];
    var _c1 = ["innerSlider"];

    var LoginSliderPage = /*#__PURE__*/function () {
      function LoginSliderPage(loadingCtrl, alertCtrl) {
        _classCallCheck(this, LoginSliderPage);

        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.backgroundImage = 'assets/img/background/background-6.jpg';
        this.slideOpts = {
          slidesPerView: 1,
          initialSlide: 0,
          speed: 400
        };
      }

      _createClass(LoginSliderPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToLogin",
        value: function goToLogin() {
          this.slider.slideTo(1);
        }
      }, {
        key: "goToSignup",
        value: function goToSignup() {
          this.slider.slideTo(2);
        }
      }, {
        key: "slideNext",
        value: function slideNext() {
          this.innerSlider.slideNext();
        }
      }, {
        key: "slidePrevious",
        value: function slidePrevious() {
          this.innerSlider.slidePrev();
        }
      }, {
        key: "presentLoading",
        value: function presentLoading(messages) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.loadingCtrl.create({
                      duration: 500,
                      message: messages
                    });

                  case 2:
                    loading = _context2.sent;
                    _context2.next = 5;
                    return loading.present();

                  case 5:
                    _context2.next = 7;
                    return loading.onDidDismiss().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var alert;
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                _context.next = 2;
                                return this.alertCtrl.create({
                                  header: 'Logged in!',
                                  subHeader: 'Thanks for logging in.',
                                  buttons: ['Dismiss']
                                });

                              case 2:
                                alert = _context.sent;
                                _context.next = 5;
                                return alert.present();

                              case 5:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    });

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "login",
        value: function login() {
          this.presentLoading('Thanks for signing up!');
        }
      }, {
        key: "signup",
        value: function signup() {
          this.presentLoading('Thanks for signing up!');
        }
      }, {
        key: "resetPassword",
        value: function resetPassword() {
          this.presentLoading('An e-mail was sent with your new password.');
        }
      }]);

      return LoginSliderPage;
    }();

    LoginSliderPage.ɵfac = function LoginSliderPage_Factory(t) {
      return new (t || LoginSliderPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]));
    };

    LoginSliderPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LoginSliderPage,
      selectors: [["app-login-slider"]],
      viewQuery: function LoginSliderPage_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.slider = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.innerSlider = _t.first);
        }
      },
      decls: 69,
      vars: 0,
      consts: [["slot", "start"], ["defaultHref", "/"], ["fullscreen", ""], ["direction", "vertical", 1, "content-slider"], ["slider", ""], ["size", "12"], ["src", "assets/yannbf/img/logo/logo-pr.png", 1, "logo"], [1, "group-btn"], ["size", "6"], ["shape", "round", "color", "light", 1, "login-button", 3, "click"], [1, "zoom", "swiper-no-swiping"], [1, "content-slider"], ["innerSlider", ""], [1, "swiper-no-swiping"], [2, "padding", "20% 32px 32px 32px"], ["position", "floating"], ["type", "text"], ["type", "password"], ["expand", "block", "shape", "round", "color", "light", 1, "login-button", 3, "click"], ["fill", "clear", "color", "light", 1, "forgot-button", 3, "click"], ["fill", "clear", 1, "slide-button", "position-bottom", 3, "click"], ["name", "arrow-down"], ["floating", ""], ["type", "email"], ["fill", "clear", "color", "light", 1, "goback-button", 3, "click"], ["name", "arrow-back"], ["fill", "clear", 1, "slide-button", 3, "click"], ["name", "arrow-up"], [2, "padding", "32px"], [1, "margin-bottom"]],
      template: function LoginSliderPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-content", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-slides", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-slide");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-col", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-row", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-col", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginSliderPage_Template_ion_button_click_14_listener() {
            return ctx.goToLogin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "SIGN IN");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-col", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginSliderPage_Template_ion_button_click_17_listener() {
            return ctx.goToSignup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "SIGN UP");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-slide", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-slides", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-slide", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "ion-input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "ion-input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "ion-button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginSliderPage_Template_ion_button_click_32_listener() {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Login ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ion-button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginSliderPage_Template_ion_button_click_34_listener() {
            return ctx.slideNext();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "FORGOT PASSWORD? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ion-button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginSliderPage_Template_ion_button_click_36_listener() {
            return ctx.goToSignup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "GO TO SIGNUP");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "ion-icon", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "ion-slide", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "ion-label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "E-mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "ion-input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "ion-button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginSliderPage_Template_ion_button_click_45_listener() {
            return ctx.resetPassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "RESET PASSWORD");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "ion-button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginSliderPage_Template_ion_button_click_47_listener() {
            return ctx.slidePrevious();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "ion-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " GO BACK ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "ion-slide", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "ion-button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginSliderPage_Template_ion_button_click_51_listener() {
            return ctx.goToLogin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, " GO TO LOGIN ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "ion-icon", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "ion-label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "ion-input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "ion-label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "ion-input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "ion-item", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "ion-label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Confirm Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "ion-input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "ion-button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginSliderPage_Template_ion_button_click_67_listener() {
            return ctx.signup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "SIGN UP ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlide"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["TextValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"]],
      styles: ["ion-toolbar[_ngcontent-%COMP%] {\n  --background: transparent !important;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: none;\n  background-image: url(\"/assets/yannbf/img/background/background-6.jpg\");\n  background-position: center top;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.content-slider[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%], .content-slider[_ngcontent-%COMP%]   .swiper-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: auto;\n}\n\n.zoom[_ngcontent-%COMP%]   .slide-zoom[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.scroll-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n\n.logo[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 19em;\n  height: auto;\n  margin: 0 auto;\n}\n\nion-row[_ngcontent-%COMP%] {\n  align-items: center;\n  text-align: center;\n}\n\nion-col[_ngcontent-%COMP%] {\n  padding: 0 20px;\n}\n\nspan[_ngcontent-%COMP%], p[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  color: white;\n}\n\nion-label[_ngcontent-%COMP%], .input-has-focus[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n\nion-item[_ngcontent-%COMP%] {\n  border-radius: 3px !important;\n  padding-right: 16px !important;\n  margin-bottom: 5px !important;\n  --color: #fff !important;\n  --background: transparent !important;\n  font-size: 0.9em;\n}\n\n.margin-bottom[_ngcontent-%COMP%] {\n  margin-bottom: 15px !important;\n}\n\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: white !important;\n}\n\n.item-inner[_ngcontent-%COMP%] {\n  border-bottom: 2px solid white !important;\n  box-shadow: none !important;\n}\n\n.login-button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  font-size: 1.2em;\n}\n\n.login-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #18485a !important;\n}\n\n.forgot-button[_ngcontent-%COMP%] {\n  font-weight: bold;\n  float: right;\n}\n\n.forgot-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  font-size: 2.2rem;\n}\n\n.goback-button[_ngcontent-%COMP%] {\n  font-weight: bold;\n  float: left;\n}\n\n.goback-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  padding-right: 10px;\n  font-size: 2.2rem;\n}\n\n.slide-button[_ngcontent-%COMP%] {\n  margin-top: 4rem;\n  font-weight: bold;\n}\n\n.slide-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  font-size: 2.2rem;\n}\n\n.position-bottom[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  bottom: 10px;\n  right: 0;\n  margin: 0 auto;\n  width: 200px;\n}\n\n.group-btn[_ngcontent-%COMP%] {\n  margin-top: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbG9naW4vbG9naW4tc2xpZGVyL0M6XFxVc2Vyc1xcVmFnbmVyIFNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZWN0c1xcX015XFxhd2Vzb21lLWNvbXBvbmVudHMtaW9uaWMvc3JjXFxhcHBcXHBhZ2VzXFx5YW5uYmZcXGNvbXBvbmVudHNcXGxvZ2luXFxsb2dpbi1zbGlkZXJcXGxvZ2luLXNsaWRlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL2xvZ2luL2xvZ2luLXNsaWRlci9sb2dpbi1zbGlkZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usb0NBQUE7QUNERjs7QURLQTtFQUNFLGtCQUFBO0VBQ0EsdUVBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUNGRjs7QURTRTs7RUFFRSxZQUFBO0VBQ0EsV0FBQTtBQ05KOztBRGVBO0VBQ0UsWUFBQTtBQ1pGOztBRGVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNaRjs7QURjQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNYRjs7QURhQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUNWRjs7QURZQTtFQUNFLGVBQUE7QUNURjs7QURXQTs7O0VBR0UsWUFBQTtBQ1JGOztBRFdBOztFQUVFLHNCQUFBO0FDUkY7O0FEVUE7RUFDRSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7QUNQRjs7QURTQTtFQUNFLDhCQUFBO0FDTkY7O0FEUUE7RUFDRSx1QkFBQTtBQ0xGOztBRE9BO0VBQ0UseUNBQUE7RUFDQSwyQkFBQTtBQ0pGOztBRE9BO0VBQ0UsV0FBQTtFQUVBLFlBQUE7RUFDQSxnQkFBQTtBQ0xGOztBRE1FO0VBQ0UseUJBQUE7QUNKSjs7QURPQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQ0pGOztBREtFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQ0hKOztBRE1BO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FDSEY7O0FESUU7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FDRko7O0FES0E7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDRkY7O0FER0U7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FDREo7O0FESUE7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDREY7O0FESUE7RUFDRSxlQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy9sb2dpbi9sb2dpbi1zbGlkZXIvbG9naW4tc2xpZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRiYXNlLWNvbG9yOiByZ2IoMjQsIDcyLCA5MCk7XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcbi8vIEZ1bGxzY3JlZW4gY2VudGVyZWQgaW1hZ2UgYmFja2dyb3VuZFxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3lhbm5iZi9pbWcvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLTYuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFNsaWRlclxyXG4uY29udGVudC1zbGlkZXIge1xyXG4gIGlvbi1zbGlkZXMsXHJcbiAgLnN3aXBlci1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG59XHJcbi50ZXh0LXNsaWRlciB7XHJcbiAgaW9uLXNsaWRlcyB7XHJcbiAgICAvLyBoZWlnaHQ6IDIwdmg7XHJcbiAgICAvLyB3aWR0aDogYXV0bztcclxuICB9XHJcbn1cclxuLnpvb20gLnNsaWRlLXpvb20ge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4vLyBDb250ZW50XHJcbi5zY3JvbGwtY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmxvZ28ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTllbTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuaW9uLXJvdyB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaW9uLWNvbCB7XHJcbiAgcGFkZGluZzogMCAyMHB4O1xyXG59XHJcbnNwYW4sXHJcbnAsXHJcbmgzIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLy8gSW5wdXQgaXRlbXNcclxuaW9uLWxhYmVsLFxyXG4uaW5wdXQtaGFzLWZvY3VzIHtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1pdGVtIHtcclxuICBib3JkZXItcmFkaXVzOiAzcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgLS1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDAuOWVtO1xyXG59XHJcbi5tYXJnaW4tYm90dG9tIHtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4uaXRlbS1pbm5lciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi8vXHJcbi5sb2dpbi1idXR0b24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8vIG1heC13aWR0aDogNDByZW07XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgc3BhbiB7XHJcbiAgICBjb2xvcjogJGJhc2UtY29sb3IgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuLmZvcmdvdC1idXR0b24ge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBpb24taWNvbiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDIuMnJlbTtcclxuICB9XHJcbn1cclxuLmdvYmFjay1idXR0b24ge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGlvbi1pY29uIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDIuMnJlbTtcclxuICB9XHJcbn1cclxuLnNsaWRlLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogNHJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBpb24taWNvbiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDIuMnJlbTtcclxuICB9XHJcbn1cclxuLnBvc2l0aW9uLWJvdHRvbSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAxMHB4O1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLmdyb3VwLWJ0bntcclxuICBtYXJnaW4tdG9wOiA1MCU7XHJcbn1cclxuIiwiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3lhbm5iZi9pbWcvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLTYuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uY29udGVudC1zbGlkZXIgaW9uLXNsaWRlcyxcbi5jb250ZW50LXNsaWRlciAuc3dpcGVyLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi56b29tIC5zbGlkZS16b29tIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2Nyb2xsLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubG9nbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDE5ZW07XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbmlvbi1yb3cge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1jb2wge1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG5cbnNwYW4sXG5wLFxuaDMge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1sYWJlbCxcbi5pbnB1dC1oYXMtZm9jdXMge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDNweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xuICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAwLjllbTtcbn1cblxuLm1hcmdpbi1ib3R0b20ge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uaXRlbS1pbm5lciB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5sb2dpbi1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuLmxvZ2luLWJ1dHRvbiBzcGFuIHtcbiAgY29sb3I6ICMxODQ4NWEgIWltcG9ydGFudDtcbn1cblxuLmZvcmdvdC1idXR0b24ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLmZvcmdvdC1idXR0b24gaW9uLWljb24ge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xufVxuXG4uZ29iYWNrLWJ1dHRvbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmbG9hdDogbGVmdDtcbn1cbi5nb2JhY2stYnV0dG9uIGlvbi1pY29uIHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgZm9udC1zaXplOiAyLjJyZW07XG59XG5cbi5zbGlkZS1idXR0b24ge1xuICBtYXJnaW4tdG9wOiA0cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5zbGlkZS1idXR0b24gaW9uLWljb24ge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xufVxuXG4ucG9zaXRpb24tYm90dG9tIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDEwcHg7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uZ3JvdXAtYnRuIHtcbiAgbWFyZ2luLXRvcDogNTAlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginSliderPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-login-slider',
          templateUrl: './login-slider.page.html',
          styleUrls: ['./login-slider.page.scss']
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }];
      }, {
        slider: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['slider', {
            "static": true
          }]
        }],
        innerSlider: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['innerSlider', {
            "static": true
          }]
        }]
      });
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-yannbf-components-login-login-slider-login-slider-module-es5.js.map