function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-slides-slide-custom-pagination-slide-custom-pagination-module"], {
  /***/
  "./src/app/pages/yannbf/components/slides/slide-custom-pagination/slide-custom-pagination.module.ts":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/pages/yannbf/components/slides/slide-custom-pagination/slide-custom-pagination.module.ts ***!
    \**********************************************************************************************************/

  /*! exports provided: SlideCustomPaginationPageModule */

  /***/
  function srcAppPagesYannbfComponentsSlidesSlideCustomPaginationSlideCustomPaginationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlideCustomPaginationPageModule", function () {
      return SlideCustomPaginationPageModule;
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


    var _slide_custom_pagination_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./slide-custom-pagination.page */
    "./src/app/pages/yannbf/components/slides/slide-custom-pagination/slide-custom-pagination.page.ts");

    var routes = [{
      path: '',
      component: _slide_custom_pagination_page__WEBPACK_IMPORTED_MODULE_5__["SlideCustomPaginationPage"]
    }];

    var SlideCustomPaginationPageModule = function SlideCustomPaginationPageModule() {
      _classCallCheck(this, SlideCustomPaginationPageModule);
    };

    SlideCustomPaginationPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SlideCustomPaginationPageModule
    });
    SlideCustomPaginationPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SlideCustomPaginationPageModule_Factory(t) {
        return new (t || SlideCustomPaginationPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SlideCustomPaginationPageModule, {
        declarations: [_slide_custom_pagination_page__WEBPACK_IMPORTED_MODULE_5__["SlideCustomPaginationPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlideCustomPaginationPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
          declarations: [_slide_custom_pagination_page__WEBPACK_IMPORTED_MODULE_5__["SlideCustomPaginationPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/yannbf/components/slides/slide-custom-pagination/slide-custom-pagination.page.ts":
  /*!********************************************************************************************************!*\
    !*** ./src/app/pages/yannbf/components/slides/slide-custom-pagination/slide-custom-pagination.page.ts ***!
    \********************************************************************************************************/

  /*! exports provided: SlideCustomPaginationPage */

  /***/
  function srcAppPagesYannbfComponentsSlidesSlideCustomPaginationSlideCustomPaginationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlideCustomPaginationPage", function () {
      return SlideCustomPaginationPage;
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

    var _c0 = ["sliderOne"];
    var _c1 = ["sliderTwo"];
    var _c2 = ["sliderThree"];

    var _c3 = function _c3(a0) {
      return {
        "background": a0
      };
    };

    function SlideCustomPaginationPage_ion_slide_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-slide", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var slide_r178 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, "url(" + slide_r178.imageUrl + ")"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r178.title);
      }
    }

    function SlideCustomPaginationPage_ion_slide_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-slide", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var slide_r179 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, "url(" + slide_r179.imageUrl + ")"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r179.title);
      }
    }

    function SlideCustomPaginationPage_ion_slide_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-slide", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var slide_r180 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, "url(" + slide_r180.imageUrl + ")"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r180.title);
      }
    }

    var SlideCustomPaginationPage = /*#__PURE__*/function () {
      function SlideCustomPaginationPage() {
        _classCallCheck(this, SlideCustomPaginationPage);

        this.slides = [{
          title: 'Dream\'s Adventure',
          imageUrl: 'assets/yannbf/img/lists/wishlist-1.jpg',
          songs: 2,
          "private": false
        }, {
          title: 'For the Weekend',
          imageUrl: 'assets/yannbf/img/lists/wishlist-2.jpg',
          songs: 4,
          "private": false
        }, {
          title: 'Family Time',
          imageUrl: 'assets/yannbf/img/lists/wishlist-3.jpg',
          songs: 5,
          "private": true
        }, {
          title: 'My Trip',
          imageUrl: 'assets/yannbf/img/lists/wishlist-4.jpg',
          songs: 12,
          "private": true
        }];
      }

      _createClass(SlideCustomPaginationPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.sliderOne.paginationBulletRender = (index, className) => {
          //   return `<span class="custom-pagination ${className}>${index + 1}</span>`;
          // };
          // this.sliderTwo.paginationBulletRender = (index, className) => {
          //   return `<span class="custom-pagination-2 ${className}>${index + 1}</span>`;
          // };
          // this.sliderThree.paginationBulletRender = (index, className) => {
          //   return `<span class="custom-pagination-3 bullet-icon-${index + 1} ${className}></span>`;
          // };
        }
      }]);

      return SlideCustomPaginationPage;
    }();

    SlideCustomPaginationPage.ɵfac = function SlideCustomPaginationPage_Factory(t) {
      return new (t || SlideCustomPaginationPage)();
    };

    SlideCustomPaginationPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SlideCustomPaginationPage,
      selectors: [["app-slide-custom-pagination"]],
      viewQuery: function SlideCustomPaginationPage_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c2, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sliderOne = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sliderTwo = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sliderThree = _t.first);
        }
      },
      decls: 22,
      vars: 3,
      consts: [["slot", "start"], ["defaultHref", "/"], [1, "ion-text-center"], ["pager", ""], ["sliderOne", ""], [3, "ngStyle", 4, "ngFor", "ngForOf"], ["sliderTwo", ""], ["sliderThree", ""], [3, "ngStyle"]],
      template: function SlideCustomPaginationPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Custom Pagination");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Pagination numbers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-slides", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SlideCustomPaginationPage_ion_slide_11_Template, 3, 4, "ion-slide", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Pagination numbers 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-slides", 3, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SlideCustomPaginationPage_ion_slide_16_Template, 3, 4, "ion-slide", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Pagination icons");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ion-slides", 3, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SlideCustomPaginationPage_ion_slide_21_Template, 3, 4, "ion-slide", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSlides"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSlide"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]],
      styles: ["h2[_ngcontent-%COMP%] {\n  color: white;\n}\n\nion-slides[_ngcontent-%COMP%], .swiper-container[_ngcontent-%COMP%] {\n  height: 40vh;\n  width: auto;\n}\n\n.swiper-slide[_ngcontent-%COMP%] {\n  background-size: cover !important;\n  background-position: center !important;\n}\n\n.swiper-pagination-bullet[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.custom-pagination.swiper-pagination-bullet[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  text-align: center;\n  line-height: 20px;\n  font-size: 12px;\n  color: #000;\n  opacity: 1;\n  background: rgba(0, 0, 0, 0.2);\n}\n\n.custom-pagination.swiper-pagination-bullet-active[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #f52c2c;\n  transition: transform 0.3s;\n  transform: scale(1.5);\n}\n\n.custom-pagination-2.swiper-pagination-bullet[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  text-align: center;\n  font-size: 12px;\n  opacity: 1;\n  line-height: 18px;\n  color: #fff;\n  background: rgba(0, 0, 0, 0.2);\n  border: 1px solid white;\n}\n\n.custom-pagination-2.swiper-pagination-bullet-active[_ngcontent-%COMP%] {\n  color: #fff;\n  border-color: #a0f;\n  background: transparent;\n}\n\n.custom-pagination-3.swiper-pagination-bullet[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  opacity: 1;\n  border-radius: 0;\n  background-size: cover;\n  background-position: center;\n}\n\n.custom-pagination-3.swiper-pagination-bullet-active[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  transition: transform 0.3s;\n  transform: scale(1.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvc2xpZGVzL3NsaWRlLWN1c3RvbS1wYWdpbmF0aW9uL0M6XFxVc2Vyc1xcc2FiYWRpXFxEb2N1bWVudHNcXFByb2pldG9zXFxfaW9uaWNcXGlvbmljNC1jb21wb25lbnRzL3NyY1xcYXBwXFxwYWdlc1xceWFubmJmXFxjb21wb25lbnRzXFxzbGlkZXNcXHNsaWRlLWN1c3RvbS1wYWdpbmF0aW9uXFxzbGlkZS1jdXN0b20tcGFnaW5hdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL3NsaWRlcy9zbGlkZS1jdXN0b20tcGFnaW5hdGlvbi9zbGlkZS1jdXN0b20tcGFnaW5hdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FEQ0E7O0VBRUUsWUFBQTtFQUNBLFdBQUE7QUNFRjs7QURBQTtFQUNFLGlDQUFBO0VBQ0Esc0NBQUE7QUNHRjs7QUREQTtFQUNFLHVCQUFBO0FDSUY7O0FEREE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSw4QkFBQTtBQ0lGOztBRENBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtBQ0VGOztBRENBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtBQ0VGOztBREFBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUNHRjs7QURBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQ0dGOztBRERBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy9zbGlkZXMvc2xpZGUtY3VzdG9tLXBhZ2luYXRpb24vc2xpZGUtY3VzdG9tLXBhZ2luYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5pb24tc2xpZGVzLFxyXG4uc3dpcGVyLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiA0MHZoO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcbi5zd2lwZXItc2xpZGUge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4vLyBDdXN0b20gUGFnaW5hdGlvbiBTdHlsZSAxXHJcbi5jdXN0b20tcGFnaW5hdGlvbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG5cclxuICBcclxufVxyXG5cclxuLmN1c3RvbS1wYWdpbmF0aW9uLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICNmNTJjMmM7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG59XHJcbi8vIEN1c3RvbSBQYWdpbmF0aW9uIFN0eWxlIDJcclxuLmN1c3RvbS1wYWdpbmF0aW9uLTIuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxufVxyXG4uY3VzdG9tLXBhZ2luYXRpb24tMi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXItY29sb3I6ICNhMGY7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLy8gQ3VzdG9tIFBhZ2luYXRpb24gd2l0aCBJY29uc1xyXG4uY3VzdG9tLXBhZ2luYXRpb24tMy5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuLmN1c3RvbS1wYWdpbmF0aW9uLTMuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcclxufVxyXG4vLyBJY29ucyBkZXZlbG9wZWQgYnkgUGFvbWVkaWE6IGh0dHBzOi8vd3d3Lmljb25maW5kZXIuY29tL2ljb25zZXRzL3NtYWxsLW4tZmxhdFxyXG4vLyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LmJ1bGxldC1pY29uLTEge1xyXG4vLyAgIGJhY2tncm91bmQ6IHVybCgnLi9hc3NldHMveWFubmJmL2ljb24vY2FtZXJhLnN2ZycpIG5vLXJlcGVhdDtcclxuLy8gfVxyXG4vLyAuYnVsbGV0LWljb24tMiB7XHJcbi8vICAgYmFja2dyb3VuZDogdXJsKCcuL2Fzc2V0cy95YW5uYmYvaWNvbi9tYXAuc3ZnJykgbm8tcmVwZWF0O1xyXG4vLyB9XHJcbi8vIC5idWxsZXQtaWNvbi0zIHtcclxuLy8gICBiYWNrZ3JvdW5kOiB1cmwoJy4vYXNzZXRzL3lhbm5iZi9pY29uL3dvcmxkLnN2ZycpIG5vLXJlcGVhdDtcclxuLy8gfVxyXG4vLyAuYnVsbGV0LWljb24tNCB7XHJcbi8vICAgYmFja2dyb3VuZDogdXJsKCcuL2Fzc2V0cy95YW5uYmYvaWNvbi9oZWFydC5zdmcnKSBuby1yZXBlYXQ7XHJcbi8vIH1cclxuXHJcbiIsImgyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tc2xpZGVzLFxuLnN3aXBlci1jb250YWluZXIge1xuICBoZWlnaHQ6IDQwdmg7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG4uc3dpcGVyLXNsaWRlIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uY3VzdG9tLXBhZ2luYXRpb24uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzAwMDtcbiAgb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uY3VzdG9tLXBhZ2luYXRpb24uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjZjUyYzJjO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xufVxuXG4uY3VzdG9tLXBhZ2luYXRpb24tMi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgb3BhY2l0eTogMTtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xufVxuXG4uY3VzdG9tLXBhZ2luYXRpb24tMi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1jb2xvcjogI2EwZjtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5jdXN0b20tcGFnaW5hdGlvbi0zLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG9wYWNpdHk6IDE7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmN1c3RvbS1wYWdpbmF0aW9uLTMuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlideCustomPaginationPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-slide-custom-pagination',
          templateUrl: './slide-custom-pagination.page.html',
          styleUrls: ['./slide-custom-pagination.page.scss']
        }]
      }], function () {
        return [];
      }, {
        sliderOne: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['sliderOne', {
            "static": true
          }]
        }],
        sliderTwo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['sliderTwo', {
            "static": true
          }]
        }],
        sliderThree: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['sliderThree', {
            "static": true
          }]
        }]
      });
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-yannbf-components-slides-slide-custom-pagination-slide-custom-pagination-module-es5.js.map