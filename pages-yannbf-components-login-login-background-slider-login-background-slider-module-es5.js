function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-login-login-background-slider-login-background-slider-module"], {
  /***/
  "./src/app/pages/yannbf/components/login/login-background-slider/login-background-slider.module.ts":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/pages/yannbf/components/login/login-background-slider/login-background-slider.module.ts ***!
    \*********************************************************************************************************/

  /*! exports provided: LoginBackgroundSliderPageModule */

  /***/
  function srcAppPagesYannbfComponentsLoginLoginBackgroundSliderLoginBackgroundSliderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginBackgroundSliderPageModule", function () {
      return LoginBackgroundSliderPageModule;
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


    var _login_background_slider_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-background-slider.page */
    "./src/app/pages/yannbf/components/login/login-background-slider/login-background-slider.page.ts");

    var routes = [{
      path: '',
      component: _login_background_slider_page__WEBPACK_IMPORTED_MODULE_5__["LoginBackgroundSliderPage"]
    }];

    var LoginBackgroundSliderPageModule = function LoginBackgroundSliderPageModule() {
      _classCallCheck(this, LoginBackgroundSliderPageModule);
    };

    LoginBackgroundSliderPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LoginBackgroundSliderPageModule
    });
    LoginBackgroundSliderPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function LoginBackgroundSliderPageModule_Factory(t) {
        return new (t || LoginBackgroundSliderPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginBackgroundSliderPageModule, {
        declarations: [_login_background_slider_page__WEBPACK_IMPORTED_MODULE_5__["LoginBackgroundSliderPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginBackgroundSliderPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
          declarations: [_login_background_slider_page__WEBPACK_IMPORTED_MODULE_5__["LoginBackgroundSliderPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/yannbf/components/login/login-background-slider/login-background-slider.page.ts":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/pages/yannbf/components/login/login-background-slider/login-background-slider.page.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: LoginBackgroundSliderPage */

  /***/
  function srcAppPagesYannbfComponentsLoginLoginBackgroundSliderLoginBackgroundSliderPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginBackgroundSliderPage", function () {
      return LoginBackgroundSliderPage;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "background-image": a0
      };
    };

    function LoginBackgroundSliderPage_ion_slide_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-slide", 13);
      }

      if (rf & 2) {
        var background_r108 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, "url(" + background_r108 + ")"));
      }
    }

    var LoginBackgroundSliderPage = /*#__PURE__*/function () {
      function LoginBackgroundSliderPage(formBuilder) {
        _classCallCheck(this, LoginBackgroundSliderPage);

        this.formBuilder = formBuilder;
        this.backgrounds = ['assets/yannbf/img/background/background-1.jpg', 'assets/yannbf/img/background/background-2.jpg', 'assets/yannbf/img/background/background-3.jpg', 'assets/yannbf/img/background/background-4.jpg'];
        this.slideOpts = {
          loop: true,
          speed: 1500,
          autoplay: {
            delay: 2000
          },
          effect: 'fade'
        };
        this.loginForm = formBuilder.group({
          email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])]
        });
      }

      _createClass(LoginBackgroundSliderPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDidLoad",
        value: function ionViewDidLoad() {
          console.log('Hello LoginBackgroundSlider Page');
        }
      }, {
        key: "openResetPassword",
        value: function openResetPassword() {
          console.log('Reset password clicked');
        }
      }, {
        key: "doLogin",
        value: function doLogin() {
          if (!this.loginForm.valid) {
            console.log('Invalid or empty data');
          } else {
            var userEmail = this.loginForm.value.email;
            var userPassword = this.loginForm.value.password;
            console.log('user data', userEmail, userPassword);
          }
        }
      }]);

      return LoginBackgroundSliderPage;
    }();

    LoginBackgroundSliderPage.ɵfac = function LoginBackgroundSliderPage_Factory(t) {
      return new (t || LoginBackgroundSliderPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    LoginBackgroundSliderPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginBackgroundSliderPage,
      selectors: [["app-login-background-slider"]],
      decls: 23,
      vars: 2,
      consts: [["no-border", ""], ["slot", "start"], ["defaultHref", "/"], ["fullscreen", ""], ["pager", "false", 3, "options"], ["class", "slide-background swiper-no-swiping", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "login-container"], ["src", "assets/yannbf/img/logo/logo-canon.png", 1, "logo"], [3, "submit"], ["type", "email", "placeholder", "Email"], ["type", "password", "placeholder", "Password"], ["color", "danger", 1, "ion-margin"], [3, "click"], [1, "slide-background", "swiper-no-swiping", 3, "ngStyle"]],
      template: function LoginBackgroundSliderPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Login Background Slider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-slides", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LoginBackgroundSliderPage_ion_slide_8_Template, 1, 3, "ion-slide", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginBackgroundSliderPage_Template_form_submit_11_listener() {
            return ctx.doLogin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Login:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "ion-input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "ion-input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ion-button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "LOGIN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginBackgroundSliderPage_Template_p_click_20_listener() {
            return ctx.openResetPassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Forgot your password?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.slideOpts);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.backgrounds);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["TextValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlide"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]],
      styles: ["ion-toolbar[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n\n.scroll-content[_ngcontent-%COMP%] {\n  margin-top: 0 !important;\n}\n\n.logo[_ngcontent-%COMP%] {\n  width: 70%;\n  height: auto;\n  padding-top: 9vh;\n  margin-bottom: 15vh;\n}\n\nspan[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.slide-background[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  border-color: transparent;\n}\n\nion-slides[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n\nion-item[_ngcontent-%COMP%] {\n  color: white !important;\n  padding-left: 10px !important;\n  margin-bottom: 10px;\n  --background: transparent !important;\n  font-size: 0.9em;\n}\n\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: white !important;\n}\n\n.login-container[_ngcontent-%COMP%] {\n  color: white;\n  position: absolute;\n  top: 0;\n  padding: 10vw;\n  text-align: center;\n  width: 100%;\n  margin: 0 auto;\n  z-index: 2;\n}\n\nion-button[_ngcontent-%COMP%] {\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbG9naW4vbG9naW4tYmFja2dyb3VuZC1zbGlkZXIvQzpcXFVzZXJzXFxzYWJhZGlcXERvY3VtZW50c1xcUHJvamV0b3NcXF9pb25pY1xcaW9uaWM0LWNvbXBvbmVudHMvc3JjXFxhcHBcXHBhZ2VzXFx5YW5uYmZcXGNvbXBvbmVudHNcXGxvZ2luXFxsb2dpbi1iYWNrZ3JvdW5kLXNsaWRlclxcbG9naW4tYmFja2dyb3VuZC1zbGlkZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy9sb2dpbi9sb2dpbi1iYWNrZ3JvdW5kLXNsaWRlci9sb2dpbi1iYWNrZ3JvdW5kLXNsaWRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0Usd0JBQUE7QUNDRjs7QURDQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0VGOztBREFBO0VBQ0UsWUFBQTtBQ0dGOztBRERBO0VBQ0Usc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7QUNJRjs7QUREQTtFQUNFLGFBQUE7QUNJRjs7QURGQTtFQUNFLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7QUNLRjs7QURIQTtFQUNFLHVCQUFBO0FDTUY7O0FESkE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FDT0Y7O0FETEE7RUFDRSxZQUFBO0FDUUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy9sb2dpbi9sb2dpbi1iYWNrZ3JvdW5kLXNsaWRlci9sb2dpbi1iYWNrZ3JvdW5kLXNsaWRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uc2Nyb2xsLWNvbnRlbnQge1xyXG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcclxufVxyXG4ubG9nbyB7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZy10b3A6IDl2aDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXZoO1xyXG59XHJcbnNwYW4ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uc2xpZGUtYmFja2dyb3VuZCB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5pb24tc2xpZGVzIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcbmlvbi1pdGVtIHtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDAuOWVtO1xyXG59XHJcbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmxvZ2luLWNvbnRhaW5lciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcGFkZGluZzogMTB2dztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5pb24tYnV0dG9uIHtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuIiwiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uc2Nyb2xsLWNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5sb2dvIHtcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLXRvcDogOXZoO1xuICBtYXJnaW4tYm90dG9tOiAxNXZoO1xufVxuXG5zcGFuIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc2xpZGUtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbmlvbi1pdGVtIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59XG5cbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4ubG9naW4tY29udGFpbmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcGFkZGluZzogMTB2dztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHotaW5kZXg6IDI7XG59XG5cbmlvbi1idXR0b24ge1xuICBvcGFjaXR5OiAwLjg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginBackgroundSliderPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login-background-slider',
          templateUrl: './login-background-slider.page.html',
          styleUrls: ['./login-background-slider.page.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-yannbf-components-login-login-background-slider-login-background-slider-module-es5.js.map