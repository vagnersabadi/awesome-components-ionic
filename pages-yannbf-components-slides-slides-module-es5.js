function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-slides-slides-module"], {
  /***/
  "./src/app/pages/yannbf/components/slides/slides.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/yannbf/components/slides/slides.module.ts ***!
    \*****************************************************************/

  /*! exports provided: SlidesPageModule */

  /***/
  function srcAppPagesYannbfComponentsSlidesSlidesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlidesPageModule", function () {
      return SlidesPageModule;
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


    var _slides_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./slides.page */
    "./src/app/pages/yannbf/components/slides/slides.page.ts");

    var routes = [{
      path: '',
      component: _slides_page__WEBPACK_IMPORTED_MODULE_5__["SlidesPage"]
    }, {
      path: 'slide-color-changing',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | slide-color-changing-slide-color-changing-module */
        "slide-color-changing-slide-color-changing-module").then(__webpack_require__.bind(null,
        /*! ./slide-color-changing/slide-color-changing.module */
        "./src/app/pages/yannbf/components/slides/slide-color-changing/slide-color-changing.module.ts")).then(function (m) {
          return m.SlideColorChangingPageModule;
        });
      }
    }, {
      path: 'slide-color-changing',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | slide-color-changing-slide-color-changing-module */
        "slide-color-changing-slide-color-changing-module").then(__webpack_require__.bind(null,
        /*! ./slide-color-changing/slide-color-changing.module */
        "./src/app/pages/yannbf/components/slides/slide-color-changing/slide-color-changing.module.ts")).then(function (m) {
          return m.SlideColorChangingPageModule;
        });
      }
    }, {
      path: 'slide-custom-pagination',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | slide-custom-pagination-slide-custom-pagination-module */
        "slide-custom-pagination-slide-custom-pagination-module").then(__webpack_require__.bind(null,
        /*! ./slide-custom-pagination/slide-custom-pagination.module */
        "./src/app/pages/yannbf/components/slides/slide-custom-pagination/slide-custom-pagination.module.ts")).then(function (m) {
          return m.SlideCustomPaginationPageModule;
        });
      }
    }, {
      path: 'slide-nested',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | slide-nested-slide-nested-module */
        "slide-nested-slide-nested-module").then(__webpack_require__.bind(null,
        /*! ./slide-nested/slide-nested.module */
        "./src/app/pages/yannbf/components/slides/slide-nested/slide-nested.module.ts")).then(function (m) {
          return m.SlideNestedPageModule;
        });
      }
    }, {
      path: 'slide-free-mode',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | slide-free-mode-slide-free-mode-module */
        "slide-free-mode-slide-free-mode-module").then(__webpack_require__.bind(null,
        /*! ./slide-free-mode/slide-free-mode.module */
        "./src/app/pages/yannbf/components/slides/slide-free-mode/slide-free-mode.module.ts")).then(function (m) {
          return m.SlideFreeModePageModule;
        });
      }
    }, {
      path: 'slide-photo-gallery',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | slide-photo-gallery-slide-photo-gallery-module */
        "slide-photo-gallery-slide-photo-gallery-module").then(__webpack_require__.bind(null,
        /*! ./slide-photo-gallery/slide-photo-gallery.module */
        "./src/app/pages/yannbf/components/slides/slide-photo-gallery/slide-photo-gallery.module.ts")).then(function (m) {
          return m.SlidePhotoGalleryPageModule;
        });
      }
    }, {
      path: 'slide-rtl',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | slide-rtl-slide-rtl-module */
        "slide-rtl-slide-rtl-module").then(__webpack_require__.bind(null,
        /*! ./slide-rtl/slide-rtl.module */
        "./src/app/pages/yannbf/components/slides/slide-rtl/slide-rtl.module.ts")).then(function (m) {
          return m.SlideRtlPageModule;
        });
      }
    }, {
      path: 'slide-transitions',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | slide-transitions-slide-transitions-module */
        "slide-transitions-slide-transitions-module").then(__webpack_require__.bind(null,
        /*! ./slide-transitions/slide-transitions.module */
        "./src/app/pages/yannbf/components/slides/slide-transitions/slide-transitions.module.ts")).then(function (m) {
          return m.SlideTransitionsPageModule;
        });
      }
    }, {
      path: 'slide-walkthrough',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | slide-walkthrough-slide-walkthrough-module */
        "slide-walkthrough-slide-walkthrough-module").then(__webpack_require__.bind(null,
        /*! ./slide-walkthrough/slide-walkthrough.module */
        "./src/app/pages/yannbf/components/slides/slide-walkthrough/slide-walkthrough.module.ts")).then(function (m) {
          return m.SlideWalkthroughPageModule;
        });
      }
    }, {
      path: 'slide-list',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | slide-list-slide-list-module */
        "slide-list-slide-list-module").then(__webpack_require__.bind(null,
        /*! ./slide-list/slide-list.module */
        "./src/app/pages/yannbf/components/slides/slide-list/slide-list.module.ts")).then(function (m) {
          return m.SlideListPageModule;
        });
      }
    }, {
      path: 'slide-with-arrows',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | slide-with-arrows-slide-with-arrows-module */
        "slide-with-arrows-slide-with-arrows-module").then(__webpack_require__.bind(null,
        /*! ./slide-with-arrows/slide-with-arrows.module */
        "./src/app/pages/yannbf/components/slides/slide-with-arrows/slide-with-arrows.module.ts")).then(function (m) {
          return m.SlideWithArrowsPageModule;
        });
      }
    }, {
      path: 'slide-carousel',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | slide-carousel-slide-carousel-module */
        "slide-carousel-slide-carousel-module").then(__webpack_require__.bind(null,
        /*! ./slide-carousel/slide-carousel.module */
        "./src/app/pages/yannbf/components/slides/slide-carousel/slide-carousel.module.ts")).then(function (m) {
          return m.SlideCarouselPageModule;
        });
      }
    }, {
      path: 'slide-pagination',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | slide-pagination-slide-pagination-module */
        "slide-pagination-slide-pagination-module").then(__webpack_require__.bind(null,
        /*! ./slide-pagination/slide-pagination.module */
        "./src/app/pages/yannbf/components/slides/slide-pagination/slide-pagination.module.ts")).then(function (m) {
          return m.SlidePaginationPageModule;
        });
      }
    }];

    var SlidesPageModule = function SlidesPageModule() {
      _classCallCheck(this, SlidesPageModule);
    };

    SlidesPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SlidesPageModule
    });
    SlidesPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SlidesPageModule_Factory(t) {
        return new (t || SlidesPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SlidesPageModule, {
        declarations: [_slides_page__WEBPACK_IMPORTED_MODULE_5__["SlidesPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlidesPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
          declarations: [_slides_page__WEBPACK_IMPORTED_MODULE_5__["SlidesPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/yannbf/components/slides/slides.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/yannbf/components/slides/slides.page.ts ***!
    \***************************************************************/

  /*! exports provided: SlidesPage */

  /***/
  function srcAppPagesYannbfComponentsSlidesSlidesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlidesPage", function () {
      return SlidesPage;
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
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function SlidesPage_ion_item_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r1.page);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.title, " ");
      }
    }

    var SlidesPage = /*#__PURE__*/function () {
      function SlidesPage(navCtrl) {
        _classCallCheck(this, SlidesPage);

        this.navCtrl = navCtrl;
        this.items = [{
          title: 'Carousel',
          page: 'slide-carousel'
        }, {
          title: 'Color changing sliders',
          page: 'slide-color-changing'
        }, {
          title: 'Custom pagination',
          page: 'slide-custom-pagination'
        }, {
          title: 'Free mode slide (no fixed positions)',
          page: 'slide-free-mode'
        }, {
          title: 'List of Sliders',
          page: 'slide-list'
        }, {
          title: 'Nested slides',
          page: 'slide-nested'
        }, {
          title: 'Slide transitions',
          page: 'slide-transitions'
        }, {
          title: 'Slide right to left',
          page: 'slide-rtl'
        }, {
          title: 'Slide with pagination arrows',
          page: 'slide-with-arrows'
        }, {
          title: 'Slide Walkthrough',
          page: 'slide-walkthrough'
        }, {
          title: 'Photo Gallery (not working)',
          page: 'slide-photo-gallery'
        }, {
          title: 'Slide Pagination',
          page: 'slide-pagination'
        }];
      }

      _createClass(SlidesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "itemTapped",
        value: function itemTapped(event, item) {
          this.navCtrl.navigateForward(item.page);
        }
      }]);

      return SlidesPage;
    }();

    SlidesPage.ɵfac = function SlidesPage_Factory(t) {
      return new (t || SlidesPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]));
    };

    SlidesPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SlidesPage,
      selectors: [["app-slides"]],
      decls: 9,
      vars: 1,
      consts: [["slot", "start"], ["defaultHref", "/"], ["details", "", 3, "routerLink", 4, "ngFor", "ngForOf"], ["details", "", 3, "routerLink"]],
      template: function SlidesPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Slides");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SlidesPage_ion_item_8_Template, 2, 2, "ion-item", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL3NsaWRlcy9zbGlkZXMucGFnZS5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlidesPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-slides',
          templateUrl: './slides.page.html',
          styleUrls: ['./slides.page.scss']
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-yannbf-components-slides-slides-module-es5.js.map