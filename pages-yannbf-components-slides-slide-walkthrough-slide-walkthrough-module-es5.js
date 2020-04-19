function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-slides-slide-walkthrough-slide-walkthrough-module"], {
  /***/
  "./src/app/pages/yannbf/components/slides/slide-walkthrough/slide-walkthrough.module.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/pages/yannbf/components/slides/slide-walkthrough/slide-walkthrough.module.ts ***!
    \**********************************************************************************************/

  /*! exports provided: SlideWalkthroughPageModule */

  /***/
  function srcAppPagesYannbfComponentsSlidesSlideWalkthroughSlideWalkthroughModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlideWalkthroughPageModule", function () {
      return SlideWalkthroughPageModule;
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


    var _slide_walkthrough_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./slide-walkthrough.page */
    "./src/app/pages/yannbf/components/slides/slide-walkthrough/slide-walkthrough.page.ts");

    var routes = [{
      path: '',
      component: _slide_walkthrough_page__WEBPACK_IMPORTED_MODULE_5__["SlideWalkthroughPage"]
    }];

    var SlideWalkthroughPageModule = function SlideWalkthroughPageModule() {
      _classCallCheck(this, SlideWalkthroughPageModule);
    };

    SlideWalkthroughPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SlideWalkthroughPageModule
    });
    SlideWalkthroughPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SlideWalkthroughPageModule_Factory(t) {
        return new (t || SlideWalkthroughPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SlideWalkthroughPageModule, {
        declarations: [_slide_walkthrough_page__WEBPACK_IMPORTED_MODULE_5__["SlideWalkthroughPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlideWalkthroughPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
          declarations: [_slide_walkthrough_page__WEBPACK_IMPORTED_MODULE_5__["SlideWalkthroughPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/yannbf/components/slides/slide-walkthrough/slide-walkthrough.page.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/pages/yannbf/components/slides/slide-walkthrough/slide-walkthrough.page.ts ***!
    \********************************************************************************************/

  /*! exports provided: SlideWalkthroughPage */

  /***/
  function srcAppPagesYannbfComponentsSlidesSlideWalkthroughSlideWalkthroughPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlideWalkthroughPage", function () {
      return SlideWalkthroughPage;
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

    var _c0 = ["slider"];

    var _c1 = function _c1(a0) {
      return {
        "background-image": a0
      };
    };

    function SlideWalkthroughPage_ion_slide_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-slide", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "h2", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var slide_r204 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, "url(" + slide_r204.imageUrl + ")"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", slide_r204.title, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", slide_r204.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function SlideWalkthroughPage_div_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r206 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SlideWalkthroughPage_div_10_Template_ion_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r206);

          var ctx_r205 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r205.goToApp();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Let's go!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var SlideWalkthroughPage = /*#__PURE__*/function () {
      function SlideWalkthroughPage() {
        _classCallCheck(this, SlideWalkthroughPage);

        this.slideIndex = 0;
        this.slides = [{
          title: 'Dream\'s Adventure',
          imageUrl: 'assets/yannbf/img/lists/wishlist-1.jpg',
          description: 'Take a look at our amazing options'
        }, {
          title: 'For the Weekend',
          imageUrl: 'assets/yannbf/img/lists/wishlist-2.jpg',
          description: 'Take a look at our amazing options'
        }, {
          title: 'Family Time',
          imageUrl: 'assets/yannbf/img/lists/wishlist-3.jpg',
          description: 'Take a look at our amazing options'
        }, {
          title: 'My Trip',
          imageUrl: 'assets/yannbf/img/lists/wishlist-4.jpg',
          description: 'Take a look at our amazing options'
        }];
        this.slideOpts1 = {
          autoplay: {
            delay: 3000
          }
        };
      }

      _createClass(SlideWalkthroughPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSlideChanged",
        value: function onSlideChanged() {
          var _this = this;

          this.slider.getActiveIndex().then(function (index) {
            console.log('Slide changed! Current index is', index);
            _this.slideIndex = index;
          });
        }
      }, {
        key: "goToApp",
        value: function goToApp() {
          console.log('Go to App clicked');
        }
      }, {
        key: "skip",
        value: function skip() {
          console.log('Skip clicked');
        }
      }]);

      return SlideWalkthroughPage;
    }();

    SlideWalkthroughPage.ɵfac = function SlideWalkthroughPage_Factory(t) {
      return new (t || SlideWalkthroughPage)();
    };

    SlideWalkthroughPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SlideWalkthroughPage,
      selectors: [["app-slide-walkthrough"]],
      viewQuery: function SlideWalkthroughPage_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.slider = _t.first);
        }
      },
      decls: 11,
      vars: 3,
      consts: [["slot", "start"], ["defaultHref", "/"], ["fullscreen", "true", 1, "no-padding-top"], ["pager", "true", 3, "options", "ionSlideWillChange"], ["slider", ""], ["class", "slide-background", 3, "ngStyle", 4, "ngFor", "ngForOf"], ["class", "floating-buttons pop-in", 4, "ngIf"], [1, "slide-background", 3, "ngStyle"], [1, "text-wrapper"], [1, "slide-text"], [1, "slide-title", 3, "innerHTML"], [3, "innerHTML"], [1, "floating-buttons", "pop-in"], ["fill", "clear", "size", "large", "expand", "full", 3, "click"]],
      template: function SlideWalkthroughPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Slide Walkthrough");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-slides", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionSlideWillChange", function SlideWalkthroughPage_Template_ion_slides_ionSlideWillChange_7_listener() {
            return ctx.onSlideChanged();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SlideWalkthroughPage_ion_slide_9_Template, 6, 5, "ion-slide", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SlideWalkthroughPage_div_10_Template, 3, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.slideOpts1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.slideIndex >= ctx.slides.length - 1);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSlides"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSlide"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"]],
      styles: ["ion-item[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n\n.swiper-pagination-bullet[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.no-padding-top[_ngcontent-%COMP%]   .scroll-content[_ngcontent-%COMP%] {\n  padding-top: 0 !important;\n}\n\n.skip-button[_ngcontent-%COMP%] {\n  text-transform: none;\n  padding: 15px 15px;\n  font-weight: bold;\n}\n\n.floating-buttons[_ngcontent-%COMP%] {\n  z-index: 1;\n  width: 100%;\n  bottom: 0;\n  position: absolute;\n  margin-bottom: 50px;\n  transition: all 0.4s linear;\n}\n\n.floating-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --color: white;\n  min-height: 7vh;\n  text-transform: none;\n  font-size: 1.4em;\n  font-weight: bold;\n  --background: rgba(49, 161, 216, 0.67);\n}\n\n.slide-background[_ngcontent-%COMP%] {\n  background-size: cover !important;\n  background-position: center;\n  background-repeat: no-repeat;\n  border-color: transparent;\n}\n\n.toolbar-background[_ngcontent-%COMP%] {\n  border-color: transparent;\n}\n\n.slide-zoom[_ngcontent-%COMP%] {\n  background: linear-gradient(transparent, rgba(0, 0, 0, 0.4)) !important;\n  height: 100%;\n}\n\n.text-wrapper[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n}\n\n.slide-text[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.slide-title[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n}\n\n.slide-image[_ngcontent-%COMP%] {\n  max-height: 100%;\n  max-width: 100%;\n  margin: 18px 0;\n}\n\nb[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\np[_ngcontent-%COMP%] {\n  padding: 0 40px;\n  font-size: 1em;\n  line-height: 1.5;\n  color: #fff;\n}\n\np[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #000000;\n}\n\n.pop-in[_ngcontent-%COMP%] {\n  -webkit-animation: pop-in 0.65s;\n  animation: pop-in 0.65s !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvc2xpZGVzL3NsaWRlLXdhbGt0aHJvdWdoL0M6XFxVc2Vyc1xcc2FiYWRpXFxEb2N1bWVudHNcXFByb2pldG9zXFxfaW9uaWNcXGlvbmljNC1jb21wb25lbnRzL3NyY1xcYXBwXFxwYWdlc1xceWFubmJmXFxjb21wb25lbnRzXFxzbGlkZXNcXHNsaWRlLXdhbGt0aHJvdWdoXFxzbGlkZS13YWxrdGhyb3VnaC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL3NsaWRlcy9zbGlkZS13YWxrdGhyb3VnaC9zbGlkZS13YWxrdGhyb3VnaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGOztBRENBO0VBQ0Usc0JBQUE7QUNFRjs7QURBQTtFQUNFLHlCQUFBO0FDR0Y7O0FEREE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNJRjs7QURGQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQ0tGOztBREZBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQ0FBQTtBQ0tGOztBREhBO0VBQ0UsaUNBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7QUNNRjs7QURKQTtFQUNFLHlCQUFBO0FDT0Y7O0FETEE7RUFDRSx1RUFBQTtFQUNBLFlBQUE7QUNRRjs7QUROQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDU0Y7O0FEUEE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FDVUY7O0FEUkE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUNXRjs7QURUQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNZRjs7QURQQTtFQUNFLGdCQUFBO0FDVUY7O0FEUkE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ1dGOztBRFZFO0VBQ0UsY0FBQTtBQ1lKOztBRFJBO0VBQ0UsK0JBQUE7RUFDQSxrQ0FBQTtBQ1dGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvc2xpZGVzL3NsaWRlLXdhbGt0aHJvdWdoL3NsaWRlLXdhbGt0aHJvdWdoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuLm5vLXBhZGRpbmctdG9wIC5zY3JvbGwtY29udGVudCB7XHJcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcclxufVxyXG4uc2tpcC1idXR0b24ge1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIHBhZGRpbmc6IDE1cHggMTVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uZmxvYXRpbmctYnV0dG9ucyB7XHJcbiAgei1pbmRleDogMTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3R0b206IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgbGluZWFyO1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICRiYXNlLWNvbG9yLXRyYW5zcGFyZW50O1xyXG59XHJcbi5mbG9hdGluZy1idXR0b25zIGlvbi1idXR0b24ge1xyXG4gIC0tY29sb3I6IHdoaXRlO1xyXG4gIG1pbi1oZWlnaHQ6IDd2aDtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICBmb250LXNpemU6IDEuNGVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIC0tYmFja2dyb3VuZDogcmdiYSg0OSwgMTYxLCAyMTYsIDAuNjcpO1xyXG59XHJcbi5zbGlkZS1iYWNrZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4udG9vbGJhci1iYWNrZ3JvdW5kIHtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5zbGlkZS16b29tIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQsIHJnYmEoMCwgMCwgMCwgMC40KSkgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLnRleHQtd3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuLnNsaWRlLXRleHQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcbi5zbGlkZS10aXRsZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5zbGlkZS1pbWFnZSB7XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAxOHB4IDA7XHJcbn1cclxuLmxhc3Qtc2xpZGUge1xyXG4gIC8vICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaW1nL3dlbGNvbWUtNC5qcGdcIik7XHJcbn1cclxuYiB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5wIHtcclxuICBwYWRkaW5nOiAwIDQwcHg7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiIHtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gIH1cclxufVxyXG5cclxuLnBvcC1pbiB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHBvcC1pbiAwLjY1cztcclxuICBhbmltYXRpb246IHBvcC1pbiAwLjY1cyAhaW1wb3J0YW50O1xyXG59XHJcbiIsImlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5uby1wYWRkaW5nLXRvcCAuc2Nyb2xsLWNvbnRlbnQge1xuICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xufVxuXG4uc2tpcC1idXR0b24ge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgcGFkZGluZzogMTVweCAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmZsb2F0aW5nLWJ1dHRvbnMge1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGxpbmVhcjtcbn1cblxuLmZsb2F0aW5nLWJ1dHRvbnMgaW9uLWJ1dHRvbiB7XG4gIC0tY29sb3I6IHdoaXRlO1xuICBtaW4taGVpZ2h0OiA3dmg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LXNpemU6IDEuNGVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDQ5LCAxNjEsIDIxNiwgMC42Nyk7XG59XG5cbi5zbGlkZS1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi50b29sYmFyLWJhY2tncm91bmQge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uc2xpZGUtem9vbSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCwgcmdiYSgwLCAwLCAwLCAwLjQpKSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50ZXh0LXdyYXBwZXIge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5zbGlkZS10ZXh0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi5zbGlkZS10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zbGlkZS1pbWFnZSB7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAxOHB4IDA7XG59XG5cbmIge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5wIHtcbiAgcGFkZGluZzogMCA0MHB4O1xuICBmb250LXNpemU6IDFlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICNmZmY7XG59XG5wIGIge1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLnBvcC1pbiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBwb3AtaW4gMC42NXM7XG4gIGFuaW1hdGlvbjogcG9wLWluIDAuNjVzICFpbXBvcnRhbnQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlideWalkthroughPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-slide-walkthrough',
          templateUrl: './slide-walkthrough.page.html',
          styleUrls: ['./slide-walkthrough.page.scss']
        }]
      }], function () {
        return [];
      }, {
        slider: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['slider', {
            "static": true
          }]
        }]
      });
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-yannbf-components-slides-slide-walkthrough-slide-walkthrough-module-es5.js.map