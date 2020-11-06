function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-login-login-instagram-login-instagram-module"], {
  /***/
  "./src/app/pages/yannbf/components/login/login-instagram/login-instagram.module.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/pages/yannbf/components/login/login-instagram/login-instagram.module.ts ***!
    \*****************************************************************************************/

  /*! exports provided: LoginInstagramPageModule */

  /***/
  function srcAppPagesYannbfComponentsLoginLoginInstagramLoginInstagramModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginInstagramPageModule", function () {
      return LoginInstagramPageModule;
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


    var _login_instagram_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-instagram.page */
    "./src/app/pages/yannbf/components/login/login-instagram/login-instagram.page.ts");

    var routes = [{
      path: '',
      component: _login_instagram_page__WEBPACK_IMPORTED_MODULE_5__["LoginInstagramPage"]
    }];

    var LoginInstagramPageModule = function LoginInstagramPageModule() {
      _classCallCheck(this, LoginInstagramPageModule);
    };

    LoginInstagramPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LoginInstagramPageModule
    });
    LoginInstagramPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function LoginInstagramPageModule_Factory(t) {
        return new (t || LoginInstagramPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginInstagramPageModule, {
        declarations: [_login_instagram_page__WEBPACK_IMPORTED_MODULE_5__["LoginInstagramPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginInstagramPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
          declarations: [_login_instagram_page__WEBPACK_IMPORTED_MODULE_5__["LoginInstagramPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/yannbf/components/login/login-instagram/login-instagram.page.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/pages/yannbf/components/login/login-instagram/login-instagram.page.ts ***!
    \***************************************************************************************/

  /*! exports provided: LoginInstagramPage */

  /***/
  function srcAppPagesYannbfComponentsLoginLoginInstagramLoginInstagramPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginInstagramPage", function () {
      return LoginInstagramPage;
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

    var LoginInstagramPage = /*#__PURE__*/function () {
      function LoginInstagramPage(loadingCtrl, alertCtrl) {
        _classCallCheck(this, LoginInstagramPage);

        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl; // Gradient logic from https://codepen.io/quasimondo/pen/lDdrF
        // NOTE: I'm not using this logic anymore, but if you want to use somehow, somewhere,
        // A programmatically way to make a nice rainbow effect, there you go.
        // NOTE: It probably won't work because it will crash your phone as this method is heavy \o/

        this.colors = new Array([62, 35, 255], [60, 255, 60], [255, 35, 98], [45, 175, 230], [255, 0, 255], [255, 128, 0]);
        this.step = 0; // color table indices for:
        // [current color left,next color left,current color right,next color right]

        this.colorIndices = [0, 1, 2, 3]; // transition speed

        this.gradientSpeed = 0.00005;
        this.gradient = '';
      }

      _createClass(LoginInstagramPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "login",
        value: function login() {
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
                      message: 'Please wait...'
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
        key: "goToSignup",
        value: function goToSignup() {}
      }, {
        key: "updateGradient",
        value: function updateGradient() {
          var _this2 = this;

          var c00 = this.colors[this.colorIndices[0]];
          var c01 = this.colors[this.colorIndices[1]];
          var c10 = this.colors[this.colorIndices[2]];
          var c11 = this.colors[this.colorIndices[3]];
          var istep = 1 - this.step;
          var r1 = Math.round(istep * c00[0] + this.step * c01[0]);
          var g1 = Math.round(istep * c00[1] + this.step * c01[1]);
          var b1 = Math.round(istep * c00[2] + this.step * c01[2]);
          var color1 = 'rgb(' + r1 + ',' + g1 + ',' + b1 + ')';
          var r2 = Math.round(istep * c10[0] + this.step * c11[0]);
          var g2 = Math.round(istep * c10[1] + this.step * c11[1]);
          var b2 = Math.round(istep * c10[2] + this.step * c11[2]);
          var color2 = 'rgb(' + r2 + ',' + g2 + ',' + b2 + ')';
          this.gradient = "-webkit-gradient(linear, left top, right bottom, from(".concat(color1, "), to(").concat(color2, "))");
          this.step += this.gradientSpeed;

          if (this.step >= 1) {
            this.step %= 1;
            this.colorIndices[0] = this.colorIndices[1];
            this.colorIndices[2] = this.colorIndices[3]; // pick two new target color indices
            // do not pick the same as the current one

            this.colorIndices[1] = (this.colorIndices[1] + Math.floor(1 + Math.random() * (this.colors.length - 1))) % this.colors.length;
            this.colorIndices[3] = (this.colorIndices[3] + Math.floor(1 + Math.random() * (this.colors.length - 1))) % this.colors.length;
          }

          setInterval(function () {
            _this2.updateGradient();
          }, 40);
        }
      }]);

      return LoginInstagramPage;
    }();

    LoginInstagramPage.ɵfac = function LoginInstagramPage_Factory(t) {
      return new (t || LoginInstagramPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]));
    };

    LoginInstagramPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LoginInstagramPage,
      selectors: [["app-login-instagram"]],
      decls: 25,
      vars: 0,
      consts: [[1, "ion-padding"], ["lines", "none", "href", "/login", 1, "item-arrow-back"], ["slot", "start", "name", "arrow-back", "color", "light"], ["src", "assets/yannbf/img/logo/logo-instagram.png", 1, "logo"], ["type", "text", "placeholder", "Username"], ["type", "password", "placeholder", "Password"], ["expand", "block", "fill", "outline", "color", "light", 1, "login-button", 3, "click"], [1, "strike"], ["expand", "block", "fill", "clear", "color", "light", 1, "login-button", 3, "click"], ["name", "logo-facebook"], [1, "footer"], [3, "click"]],
      template: function LoginInstagramPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ion-input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "ion-input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginInstagramPage_Template_ion_button_click_9_listener() {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "OR");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginInstagramPage_Template_ion_button_click_14_listener() {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "ion-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Login with Facebook ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-toolbar", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginInstagramPage_Template_div_click_19_listener() {
            return ctx.goToSignup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Don't have an account? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Sign up here");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["TextValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"]],
      styles: [".item-arrow-back[_ngcontent-%COMP%] {\n  --background: transparent !important;\n}\n\nspan[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.header-md[_ngcontent-%COMP%]::after, .toolbar-background-ios[_ngcontent-%COMP%] {\n  background-image: none;\n  border-bottom: 0;\n}\n\nion-footer[_ngcontent-%COMP%] {\n  height: 47px;\n}\n\n.footer[_ngcontent-%COMP%] {\n  text-align: center;\n  background: rgba(255, 255, 255, 0.06);\n  min-height: 47px;\n}\n\n.footer-md[_ngcontent-%COMP%]::before {\n  border-top: 1px solid rgba(255, 255, 255, 0.6);\n  background-image: none;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: none;\n  background: linear-gradient(316deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);\n  background-size: 1800% 1800%;\n  -webkit-animation: rainbow 30s linear infinite;\n          animation: rainbow 30s linear infinite;\n  text-align: center;\n}\n\n@-webkit-keyframes rainbow {\n  0% {\n    background-position: 0% 0%;\n  }\n  50% {\n    background-position: 100% 100%;\n  }\n  100% {\n    background-position: 0% 0%;\n  }\n}\n\n@keyframes rainbow {\n  0% {\n    background-position: 0% 0%;\n  }\n  50% {\n    background-position: 100% 100%;\n  }\n  100% {\n    background-position: 0% 0%;\n  }\n}\n\n.logo[_ngcontent-%COMP%] {\n  width: 50%;\n  height: auto;\n  margin: 0 auto;\n  padding-top: 50px;\n}\n\nion-item[_ngcontent-%COMP%] {\n  border-radius: 3px !important;\n  padding-left: 10px !important;\n  margin-bottom: 15px !important;\n  margin-bottom: 10px;\n  --color: #fff !important;\n  --background: rgba(255, 255, 255, 0.2) !important;\n  font-size: 0.9em;\n}\n\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: white !important;\n}\n\n.login-button[_ngcontent-%COMP%] {\n  text-transform: none;\n  border-radius: 3px !important;\n}\n\nion-icon[_ngcontent-%COMP%] {\n  padding-right: 10px;\n  font-size: 2.2rem;\n}\n\n.strike[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.strike[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  font-weight: bold;\n}\n\n.strike[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:before, .strike[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  width: 9999px;\n  height: 1px;\n  background: rgba(255, 255, 255, 0.6);\n}\n\n.strike[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:before {\n  right: 100%;\n  margin-right: 15px;\n}\n\n.strike[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:after {\n  left: 100%;\n  margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbG9naW4vbG9naW4taW5zdGFncmFtL0M6XFxVc2Vyc1xcVmFnbmVyIFNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZWN0c1xcX015XFxhd2Vzb21lLWNvbXBvbmVudHMtaW9uaWMvc3JjXFxhcHBcXHBhZ2VzXFx5YW5uYmZcXGNvbXBvbmVudHNcXGxvZ2luXFxsb2dpbi1pbnN0YWdyYW1cXGxvZ2luLWluc3RhZ3JhbS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL2xvZ2luL2xvZ2luLWluc3RhZ3JhbS9sb2dpbi1pbnN0YWdyYW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQUE7QUNDRjs7QURLQTtFQUNFLFlBQUE7QUNGRjs7QURLQTs7RUFFRSxzQkFBQTtFQUNBLGdCQUFBO0FDRkY7O0FES0E7RUFDRSxZQUFBO0FDRkY7O0FESUE7RUFDRSxrQkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURHQTtFQUNFLDhDQUFBO0VBQ0Esc0JBQUE7QUNBRjs7QURHQTtFQUVFLGtCQUFBO0VBQ0Esb0hBQUE7RUFDQSw0QkFBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7RUFDQSxrQkFBQTtBQ0RGOztBREdBO0VBQ0U7SUFDRSwwQkFBQTtFQ0FGO0VERUE7SUFDRSw4QkFBQTtFQ0FGO0VERUE7SUFDRSwwQkFBQTtFQ0FGO0FBQ0Y7O0FEVEE7RUFDRTtJQUNFLDBCQUFBO0VDQUY7RURFQTtJQUNFLDhCQUFBO0VDQUY7RURFQTtJQUNFLDBCQUFBO0VDQUY7QUFDRjs7QURHQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDREY7O0FESUE7RUFDRSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsaURBQUE7RUFDQSxnQkFBQTtBQ0RGOztBREdBO0VBQ0UsdUJBQUE7QUNBRjs7QURJQTtFQUNFLG9CQUFBO0VBQ0EsNkJBQUE7QUNERjs7QURJQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUNERjs7QURJQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNERjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREVBOztFQUVFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQS9Ga0I7QUNnR3BCOztBRENBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQUE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL2xvZ2luL2xvZ2luLWluc3RhZ3JhbS9sb2dpbi1pbnN0YWdyYW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0tYXJyb3ctYmFja3tcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiR0cmFuc3BhcmVudC13aGl0ZTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xyXG4vLyBUaGlzIGlzIGp1c3QgdG8gbWFrZSB0aGUgaGVhZGVyIHRyYW5zcGFyZW50IGFuZCBidXR0b24vaWNvbiB3aXRoIHdoaXRlIGNvbG9yXHJcblxyXG5zcGFuIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5oZWFkZXItbWQ6OmFmdGVyLFxyXG4udG9vbGJhci1iYWNrZ3JvdW5kLWlvcyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiAwO1xyXG59XHJcbi8vIEZvb3RlclxyXG5pb24tZm9vdGVyIHtcclxuICBoZWlnaHQ6IDQ3cHg7XHJcbn1cclxuLmZvb3RlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNik7XHJcbiAgbWluLWhlaWdodDogNDdweDtcclxufVxyXG4uZm9vdGVyLW1kOjpiZWZvcmUge1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAkdHJhbnNwYXJlbnQtd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxufVxyXG4vLyBGdWxsc2NyZWVuIGFuaW1hdGVkIHJhaW5ib3cgZ3JhZGllbnRcclxuaW9uLWNvbnRlbnQge1xyXG4gICAgXHJcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTZkZWcsICNmZjI0MDAsICNlODFkMWQsICNlOGI3MWQsICNlM2U4MWQsICMxZGU4NDAsICMxZGRkZTgsICMyYjFkZTgsICNkZDAwZjMsICNkZDAwZjMpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTgwMCUgMTgwMCU7XHJcbiAgYW5pbWF0aW9uOiByYWluYm93IDMwcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbkBrZXlmcmFtZXMgcmFpbmJvdyB7XHJcbiAgMCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMCU7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDEwMCU7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMCU7XHJcbiAgfVxyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbn1cclxuLy8gSW5wdXQgaXRlbXNcclxuaW9uLWl0ZW0ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIC0tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMC45ZW07XHJcbn1cclxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLy8gLS1cclxuLmxvZ2luLWJ1dHRvbiB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLy8gRmFjZWJvb2sgaWNvblxyXG5pb24taWNvbiB7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICBmb250LXNpemU6IDIuMnJlbTtcclxufVxyXG4vLyBIUiB3aXRoIHRleHQgaW4gdGhlIG1pZGRsZSBlZmZlY3RcclxuLnN0cmlrZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG4uc3RyaWtlID4gc3BhbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uc3RyaWtlID4gc3BhbjpiZWZvcmUsXHJcbi5zdHJpa2UgPiBzcGFuOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICB3aWR0aDogOTk5OXB4O1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGJhY2tncm91bmQ6ICR0cmFuc3BhcmVudC13aGl0ZTtcclxufVxyXG4uc3RyaWtlID4gc3BhbjpiZWZvcmUge1xyXG4gIHJpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG4uc3RyaWtlID4gc3BhbjphZnRlciB7XHJcbiAgbGVmdDogMTAwJTtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG4iLCIuaXRlbS1hcnJvdy1iYWNrIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG5zcGFuIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaGVhZGVyLW1kOjphZnRlcixcbi50b29sYmFyLWJhY2tncm91bmQtaW9zIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIGhlaWdodDogNDdweDtcbn1cblxuLmZvb3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA2KTtcbiAgbWluLWhlaWdodDogNDdweDtcbn1cblxuLmZvb3Rlci1tZDo6YmVmb3JlIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTZkZWcsICNmZjI0MDAsICNlODFkMWQsICNlOGI3MWQsICNlM2U4MWQsICMxZGU4NDAsICMxZGRkZTgsICMyYjFkZTgsICNkZDAwZjMsICNkZDAwZjMpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDE4MDAlIDE4MDAlO1xuICBhbmltYXRpb246IHJhaW5ib3cgMzBzIGxpbmVhciBpbmZpbml0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5Aa2V5ZnJhbWVzIHJhaW5ib3cge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMCU7XG4gIH1cbiAgNTAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDEwMCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMCU7XG4gIH1cbn1cbi5sb2dvIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZy10b3A6IDUwcHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIC0tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAwLjllbTtcbn1cblxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5sb2dpbi1idXR0b24ge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pY29uIHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgZm9udC1zaXplOiAyLjJyZW07XG59XG5cbi5zdHJpa2Uge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uc3RyaWtlID4gc3BhbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnN0cmlrZSA+IHNwYW46YmVmb3JlLFxuLnN0cmlrZSA+IHNwYW46YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB3aWR0aDogOTk5OXB4O1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xufVxuXG4uc3RyaWtlID4gc3BhbjpiZWZvcmUge1xuICByaWdodDogMTAwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uc3RyaWtlID4gc3BhbjphZnRlciB7XG4gIGxlZnQ6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginInstagramPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-login-instagram',
          templateUrl: './login-instagram.page.html',
          styleUrls: ['./login-instagram.page.scss']
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-yannbf-components-login-login-instagram-login-instagram-module-es5.js.map