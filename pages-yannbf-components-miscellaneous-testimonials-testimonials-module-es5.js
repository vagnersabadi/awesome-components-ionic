function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-miscellaneous-testimonials-testimonials-module"], {
  /***/
  "./src/app/pages/yannbf/components/miscellaneous/testimonials/testimonials.module.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/pages/yannbf/components/miscellaneous/testimonials/testimonials.module.ts ***!
    \*******************************************************************************************/

  /*! exports provided: TestimonialsPageModule */

  /***/
  function srcAppPagesYannbfComponentsMiscellaneousTestimonialsTestimonialsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestimonialsPageModule", function () {
      return TestimonialsPageModule;
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


    var _testimonials_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./testimonials.page */
    "./src/app/pages/yannbf/components/miscellaneous/testimonials/testimonials.page.ts");

    var routes = [{
      path: '',
      component: _testimonials_page__WEBPACK_IMPORTED_MODULE_5__["TestimonialsPage"]
    }];

    var TestimonialsPageModule = function TestimonialsPageModule() {
      _classCallCheck(this, TestimonialsPageModule);
    };

    TestimonialsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TestimonialsPageModule
    });
    TestimonialsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TestimonialsPageModule_Factory(t) {
        return new (t || TestimonialsPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TestimonialsPageModule, {
        declarations: [_testimonials_page__WEBPACK_IMPORTED_MODULE_5__["TestimonialsPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestimonialsPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
          declarations: [_testimonials_page__WEBPACK_IMPORTED_MODULE_5__["TestimonialsPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/yannbf/components/miscellaneous/testimonials/testimonials.page.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/pages/yannbf/components/miscellaneous/testimonials/testimonials.page.ts ***!
    \*****************************************************************************************/

  /*! exports provided: TestimonialsPage */

  /***/
  function srcAppPagesYannbfComponentsMiscellaneousTestimonialsTestimonialsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestimonialsPage", function () {
      return TestimonialsPage;
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

    function TestimonialsPage_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "figure", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "figcaption");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "blockquote");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var testimonial_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", testimonial_r1.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](testimonial_r1.quote);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](testimonial_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](testimonial_r1.position);
      }
    }

    var TestimonialsPage = /*#__PURE__*/function () {
      function TestimonialsPage() {
        _classCallCheck(this, TestimonialsPage);

        this.testimonials = [{
          imageUrl: 'assets/yannbf/img/misc/testimonial-1.jpg',
          quote: 'Which is worse, that everyone has his price, or that the price is always so low.',
          name: 'Sue Shei',
          position: 'Founder'
        }, {
          imageUrl: 'assets/yannbf/img/misc/testimonial-2.jpg',
          quote: 'I\'m killing time while I wait for life to shower me with meaning and happiness.',
          name: 'Will Barrow',
          position: 'Web Designer'
        }, {
          imageUrl: 'assets/yannbf/img/misc/testimonial-3.jpg',
          quote: 'The only skills I have the patience to learn are those that have no real application in life.',
          name: 'Indigo Violet',
          position: 'Public Relations'
        }, {
          imageUrl: 'assets/yannbf/img/misc/testimonial-1.jpg',
          quote: 'Which is worse, that everyone has his price, or that the price is always so low.',
          name: 'Sue Shei',
          position: 'Founder'
        }, {
          imageUrl: 'assets/yannbf/img/misc/testimonial-2.jpg',
          quote: 'I\'m killing time while I wait for life to shower me with meaning and happiness.',
          name: 'Will Barrow',
          position: 'Web Designer'
        }, {
          imageUrl: 'assets/yannbf/img/misc/testimonial-3.jpg',
          quote: 'The only skills I have the patience to learn are those that have no real application in life.',
          name: 'Indigo Violet',
          position: 'Public Relations'
        }];
      }

      _createClass(TestimonialsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TestimonialsPage;
    }();

    TestimonialsPage.ɵfac = function TestimonialsPage_Factory(t) {
      return new (t || TestimonialsPage)();
    };

    TestimonialsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TestimonialsPage,
      selectors: [["app-testimonials"]],
      decls: 8,
      vars: 1,
      consts: [["slot", "start"], ["defaultHref", "/"], [4, "ngFor", "ngForOf"], [1, "snip1574"], ["alt", "profile-sample2", 3, "src"]],
      template: function TestimonialsPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Testimonials ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TestimonialsPage_div_7_Template, 11, 4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.testimonials);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["@import url(https://fonts.googleapis.com/css?family=Lato);\n@import url(https://fonts.googleapis.com/css?family=Oswald);\n@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css);\n@charset \"UTF-8\";\n.snip1574[_ngcontent-%COMP%] {\n  font-family: \"Lato\", Arial, sans-serif;\n  position: relative;\n  display: inline-block;\n  overflow: hidden;\n  margin: 8px;\n  min-width: 250px;\n  max-width: 310px;\n  width: 100%;\n  background-color: #000000;\n  color: #ffffff;\n  text-align: center;\n  font-size: 16px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);\n}\n.snip1574[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.snip1574[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  vertical-align: top;\n  opacity: 0.7;\n}\n.snip1574[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 80px 10% 15%;\n}\n.snip1574[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]:before {\n  font-family: \"FontAwesome\";\n  content: \"\u201C\";\n  position: absolute;\n  font-size: 170px;\n  opacity: 0.35;\n  font-style: normal;\n  transform: translateX(-50%);\n  top: 0px;\n  left: 50%;\n}\n.snip1574[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  font-style: italic;\n  font-size: 1.2em;\n}\n.snip1574[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Oswald\";\n  text-transform: uppercase;\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 24px;\n  margin: 3px 0;\n}\n.snip1574[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 400;\n  margin: 0;\n  text-transform: uppercase;\n  color: #bbb;\n  letter-spacing: 1px;\n}\n\nion-content[_ngcontent-%COMP%] {\n  background-color: #212121 !important;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbWlzY2VsbGFuZW91cy90ZXN0aW1vbmlhbHMvQzpcXFVzZXJzXFxWYWduZXIgU2FiYWRpXFxEb2N1bWVudHNcXFByb2plY3RzXFxfTXlcXGF3ZXNvbWUtY29tcG9uZW50cy1pb25pYy9zcmNcXGFwcFxccGFnZXNcXHlhbm5iZlxcY29tcG9uZW50c1xcbWlzY2VsbGFuZW91c1xcdGVzdGltb25pYWxzXFx0ZXN0aW1vbmlhbHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy9taXNjZWxsYW5lb3VzL3Rlc3RpbW9uaWFscy90ZXN0aW1vbmlhbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBUSx5REFBQTtBQUNBLDJEQUFBO0FBQ0Esd0ZBQUE7QUNGUixnQkFBZ0I7QURHaEI7RUFDRSxzQ0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHVDQUFBO0FDRUY7QURDQTtFQUVFLHNCQUFBO0FDRUY7QURDQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNFRjtBRENBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EscUJBQUE7QUNFRjtBRENBO0VBQ0UsMEJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUVBLDJCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNFRjtBRENBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDRUY7QURDQTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUNFRjtBRENBO0VBQ0UsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNFRjtBRENBLHVCQUFBO0FBRUE7RUFDRSxvQ0FBQTtFQUNBLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy9taXNjZWxsYW5lb3VzL3Rlc3RpbW9uaWFscy90ZXN0aW1vbmlhbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG8pO1xyXG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3N3YWxkKTtcclxuQGltcG9ydCB1cmwoaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC40LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzKTtcclxuLnNuaXAxNTc0IHtcclxuICBmb250LWZhbWlseTogXCJMYXRvXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW46IDhweDtcclxuICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gIG1heC13aWR0aDogMzEwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxufVxyXG5cclxuLnNuaXAxNTc0ICoge1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uc25pcDE1NzQgaW1nIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuXHJcbi5zbmlwMTU3NCBmaWdjYXB0aW9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHBhZGRpbmc6IDgwcHggMTAlIDE1JTtcclxufVxyXG5cclxuLnNuaXAxNTc0IGZpZ2NhcHRpb246YmVmb3JlIHtcclxuICBmb250LWZhbWlseTogXCJGb250QXdlc29tZVwiO1xyXG4gIGNvbnRlbnQ6IFwiXFwyMDFDXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGZvbnQtc2l6ZTogMTcwcHg7XHJcbiAgb3BhY2l0eTogMC4zNTtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIHRvcDogMHB4O1xyXG4gIGxlZnQ6IDUwJTtcclxufVxyXG5cclxuLnNuaXAxNTc0IGJsb2NrcXVvdGUge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG59XHJcblxyXG4uc25pcDE1NzQgaDMge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk9zd2FsZFwiO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgbWFyZ2luOiAzcHggMDtcclxufVxyXG5cclxuLnNuaXAxNTc0IGg1IHtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIG1hcmdpbjogMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGNvbG9yOiAjYmJiO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuXHJcbi8qIERlbW8gcHVycG9zZXMgb25seSAqL1xyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjEgIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIiwiQGNoYXJzZXQgXCJVVEYtOFwiO1xuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG8pO1xuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9zd2FsZCk7XG5AaW1wb3J0IHVybChodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjQuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MpO1xuLnNuaXAxNTc0IHtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogOHB4O1xuICBtaW4td2lkdGg6IDI1MHB4O1xuICBtYXgtd2lkdGg6IDMxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG5cbi5zbmlwMTU3NCAqIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uc25pcDE1NzQgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi5zbmlwMTU3NCBmaWdjYXB0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmc6IDgwcHggMTAlIDE1JTtcbn1cblxuLnNuaXAxNTc0IGZpZ2NhcHRpb246YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6IFwiRm9udEF3ZXNvbWVcIjtcbiAgY29udGVudDogXCLigJxcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDE3MHB4O1xuICBvcGFjaXR5OiAwLjM1O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiA1MCU7XG59XG5cbi5zbmlwMTU3NCBibG9ja3F1b3RlIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG5cbi5zbmlwMTU3NCBoMyB7XG4gIGZvbnQtZmFtaWx5OiBcIk9zd2FsZFwiO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW46IDNweCAwO1xufVxuXG4uc25pcDE1NzQgaDUge1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW46IDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjYmJiO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4vKiBEZW1vIHB1cnBvc2VzIG9ubHkgKi9cbmlvbi1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMSAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestimonialsPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-testimonials',
          templateUrl: './testimonials.page.html',
          styleUrls: ['./testimonials.page.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-yannbf-components-miscellaneous-testimonials-testimonials-module-es5.js.map