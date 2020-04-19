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
      styles: [".item-arrow-back[_ngcontent-%COMP%] {\n  --background: transparent !important;\n}\n\nspan[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.header-md[_ngcontent-%COMP%]::after, .toolbar-background-ios[_ngcontent-%COMP%] {\n  background-image: none;\n  border-bottom: 0;\n}\n\nion-footer[_ngcontent-%COMP%] {\n  height: 47px;\n}\n\n.footer[_ngcontent-%COMP%] {\n  text-align: center;\n  background: rgba(255, 255, 255, 0.06);\n  min-height: 47px;\n}\n\n.footer-md[_ngcontent-%COMP%]::before {\n  border-top: 1px solid rgba(255, 255, 255, 0.6);\n  background-image: none;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: none;\n  background: linear-gradient(316deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);\n  background-size: 1800% 1800%;\n  -webkit-animation: rainbow 30s linear infinite;\n          animation: rainbow 30s linear infinite;\n  text-align: center;\n}\n\n@-webkit-keyframes rainbow {\n  0% {\n    background-position: 0% 0%;\n  }\n  50% {\n    background-position: 100% 100%;\n  }\n  100% {\n    background-position: 0% 0%;\n  }\n}\n\n@keyframes rainbow {\n  0% {\n    background-position: 0% 0%;\n  }\n  50% {\n    background-position: 100% 100%;\n  }\n  100% {\n    background-position: 0% 0%;\n  }\n}\n\n.logo[_ngcontent-%COMP%] {\n  width: 50%;\n  height: auto;\n  margin: 0 auto;\n  padding-top: 50px;\n}\n\nion-item[_ngcontent-%COMP%] {\n  border-radius: 3px !important;\n  padding-left: 10px !important;\n  margin-bottom: 15px !important;\n  margin-bottom: 10px;\n  --color: #fff !important;\n  --background: rgba(255, 255, 255, 0.2) !important;\n  font-size: 0.9em;\n}\n\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: white !important;\n}\n\n.login-button[_ngcontent-%COMP%] {\n  text-transform: none;\n  border-radius: 3px !important;\n}\n\nion-icon[_ngcontent-%COMP%] {\n  padding-right: 10px;\n  font-size: 2.2rem;\n}\n\n.strike[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.strike[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  font-weight: bold;\n}\n\n.strike[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:before, .strike[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  width: 9999px;\n  height: 1px;\n  background: rgba(255, 255, 255, 0.6);\n}\n\n.strike[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:before {\n  right: 100%;\n  margin-right: 15px;\n}\n\n.strike[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:after {\n  left: 100%;\n  margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbG9naW4vbG9naW4taW5zdGFncmFtL0M6XFxVc2Vyc1xcc2FiYWRpXFxEb2N1bWVudHNcXFByb2pldG9zXFxfaW9uaWNcXGlvbmljNC1jb21wb25lbnRzL3NyY1xcYXBwXFxwYWdlc1xceWFubmJmXFxjb21wb25lbnRzXFxsb2dpblxcbG9naW4taW5zdGFncmFtXFxsb2dpbi1pbnN0YWdyYW0ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy9sb2dpbi9sb2dpbi1pbnN0YWdyYW0vbG9naW4taW5zdGFncmFtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFBO0FDQ0Y7O0FES0E7RUFDRSxZQUFBO0FDRkY7O0FES0E7O0VBRUUsc0JBQUE7RUFDQSxnQkFBQTtBQ0ZGOztBREtBO0VBQ0UsWUFBQTtBQ0ZGOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0FDREY7O0FER0E7RUFDRSw4Q0FBQTtFQUNBLHNCQUFBO0FDQUY7O0FER0E7RUFFRSxrQkFBQTtFQUNBLG9IQUFBO0VBQ0EsNEJBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURHQTtFQUNFO0lBQ0UsMEJBQUE7RUNBRjtFREVBO0lBQ0UsOEJBQUE7RUNBRjtFREVBO0lBQ0UsMEJBQUE7RUNBRjtBQUNGOztBRFRBO0VBQ0U7SUFDRSwwQkFBQTtFQ0FGO0VERUE7SUFDRSw4QkFBQTtFQ0FGO0VERUE7SUFDRSwwQkFBQTtFQ0FGO0FBQ0Y7O0FER0E7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0RGOztBRElBO0VBQ0UsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLGlEQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURHQTtFQUNFLHVCQUFBO0FDQUY7O0FESUE7RUFDRSxvQkFBQTtFQUNBLDZCQUFBO0FDREY7O0FESUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FDREY7O0FESUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDREY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURFQTs7RUFFRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxvQ0EvRmtCO0FDZ0dwQjs7QURDQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0VGOztBREFBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy9sb2dpbi9sb2dpbi1pbnN0YWdyYW0vbG9naW4taW5zdGFncmFtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtLWFycm93LWJhY2t7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4kdHJhbnNwYXJlbnQtd2hpdGU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcclxuLy8gVGhpcyBpcyBqdXN0IHRvIG1ha2UgdGhlIGhlYWRlciB0cmFuc3BhcmVudCBhbmQgYnV0dG9uL2ljb24gd2l0aCB3aGl0ZSBjb2xvclxyXG5cclxuc3BhbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaGVhZGVyLW1kOjphZnRlcixcclxuLnRvb2xiYXItYmFja2dyb3VuZC1pb3Mge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMDtcclxufVxyXG4vLyBGb290ZXJcclxuaW9uLWZvb3RlciB7XHJcbiAgaGVpZ2h0OiA0N3B4O1xyXG59XHJcbi5mb290ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDYpO1xyXG4gIG1pbi1oZWlnaHQ6IDQ3cHg7XHJcbn1cclxuLmZvb3Rlci1tZDo6YmVmb3JlIHtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgJHRyYW5zcGFyZW50LXdoaXRlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbn1cclxuLy8gRnVsbHNjcmVlbiBhbmltYXRlZCByYWluYm93IGdyYWRpZW50XHJcbmlvbi1jb250ZW50IHtcclxuICAgIFxyXG4gIC0tYmFja2dyb3VuZDogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE2ZGVnLCAjZmYyNDAwLCAjZTgxZDFkLCAjZThiNzFkLCAjZTNlODFkLCAjMWRlODQwLCAjMWRkZGU4LCAjMmIxZGU4LCAjZGQwMGYzLCAjZGQwMGYzKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDE4MDAlIDE4MDAlO1xyXG4gIGFuaW1hdGlvbjogcmFpbmJvdyAzMHMgbGluZWFyIGluZmluaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5Aa2V5ZnJhbWVzIHJhaW5ib3cge1xyXG4gIDAlIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDAlO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAxMDAlO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDAlO1xyXG4gIH1cclxufVxyXG5cclxuLmxvZ28ge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG59XHJcbi8vIElucHV0IGl0ZW1zXHJcbmlvbi1pdGVtIHtcclxuICBib3JkZXItcmFkaXVzOiAzcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDAuOWVtO1xyXG59XHJcbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIC0tXHJcbi5sb2dpbi1idXR0b24ge1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweCAhaW1wb3J0YW50O1xyXG59XHJcbi8vIEZhY2Vib29rIGljb25cclxuaW9uLWljb24ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAyLjJyZW07XHJcbn1cclxuLy8gSFIgd2l0aCB0ZXh0IGluIHRoZSBtaWRkbGUgZWZmZWN0XHJcbi5zdHJpa2Uge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuLnN0cmlrZSA+IHNwYW4ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnN0cmlrZSA+IHNwYW46YmVmb3JlLFxyXG4uc3RyaWtlID4gc3BhbjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgd2lkdGg6IDk5OTlweDtcclxuICBoZWlnaHQ6IDFweDtcclxuICBiYWNrZ3JvdW5kOiAkdHJhbnNwYXJlbnQtd2hpdGU7XHJcbn1cclxuLnN0cmlrZSA+IHNwYW46YmVmb3JlIHtcclxuICByaWdodDogMTAwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuLnN0cmlrZSA+IHNwYW46YWZ0ZXIge1xyXG4gIGxlZnQ6IDEwMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuIiwiLml0ZW0tYXJyb3ctYmFjayB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuc3BhbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmhlYWRlci1tZDo6YWZ0ZXIsXG4udG9vbGJhci1iYWNrZ3JvdW5kLWlvcyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDA7XG59XG5cbmlvbi1mb290ZXIge1xuICBoZWlnaHQ6IDQ3cHg7XG59XG5cbi5mb290ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNik7XG4gIG1pbi1oZWlnaHQ6IDQ3cHg7XG59XG5cbi5mb290ZXItbWQ6OmJlZm9yZSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE2ZGVnLCAjZmYyNDAwLCAjZTgxZDFkLCAjZThiNzFkLCAjZTNlODFkLCAjMWRlODQwLCAjMWRkZGU4LCAjMmIxZGU4LCAjZGQwMGYzLCAjZGQwMGYzKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxODAwJSAxODAwJTtcbiAgYW5pbWF0aW9uOiByYWluYm93IDMwcyBsaW5lYXIgaW5maW5pdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQGtleWZyYW1lcyByYWluYm93IHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDAlO1xuICB9XG4gIDUwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAxMDAlO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDAlO1xuICB9XG59XG4ubG9nbyB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuXG5pb24taXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDNweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59XG5cbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4ubG9naW4tYnV0dG9uIHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDNweCAhaW1wb3J0YW50O1xufVxuXG5pb24taWNvbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xufVxuXG4uc3RyaWtlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLnN0cmlrZSA+IHNwYW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zdHJpa2UgPiBzcGFuOmJlZm9yZSxcbi5zdHJpa2UgPiBzcGFuOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgd2lkdGg6IDk5OTlweDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbn1cblxuLnN0cmlrZSA+IHNwYW46YmVmb3JlIHtcbiAgcmlnaHQ6IDEwMCU7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLnN0cmlrZSA+IHNwYW46YWZ0ZXIge1xuICBsZWZ0OiAxMDAlO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn0iXX0= */"]
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