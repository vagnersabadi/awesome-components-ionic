function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["slide-with-arrows-slide-with-arrows-module"], {
  /***/
  "./src/app/pages/yannbf/components/slides/slide-with-arrows/slide-with-arrows.module.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/pages/yannbf/components/slides/slide-with-arrows/slide-with-arrows.module.ts ***!
    \**********************************************************************************************/

  /*! exports provided: SlideWithArrowsPageModule */

  /***/
  function srcAppPagesYannbfComponentsSlidesSlideWithArrowsSlideWithArrowsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlideWithArrowsPageModule", function () {
      return SlideWithArrowsPageModule;
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


    var _slide_with_arrows_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./slide-with-arrows.page */
    "./src/app/pages/yannbf/components/slides/slide-with-arrows/slide-with-arrows.page.ts");

    var routes = [{
      path: '',
      component: _slide_with_arrows_page__WEBPACK_IMPORTED_MODULE_5__["SlideWithArrowsPage"]
    }];

    var SlideWithArrowsPageModule = function SlideWithArrowsPageModule() {
      _classCallCheck(this, SlideWithArrowsPageModule);
    };

    SlideWithArrowsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SlideWithArrowsPageModule
    });
    SlideWithArrowsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SlideWithArrowsPageModule_Factory(t) {
        return new (t || SlideWithArrowsPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SlideWithArrowsPageModule, {
        declarations: [_slide_with_arrows_page__WEBPACK_IMPORTED_MODULE_5__["SlideWithArrowsPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlideWithArrowsPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
          declarations: [_slide_with_arrows_page__WEBPACK_IMPORTED_MODULE_5__["SlideWithArrowsPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/yannbf/components/slides/slide-with-arrows/slide-with-arrows.page.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/pages/yannbf/components/slides/slide-with-arrows/slide-with-arrows.page.ts ***!
    \********************************************************************************************/

  /*! exports provided: SlideWithArrowsPage */

  /***/
  function srcAppPagesYannbfComponentsSlidesSlideWithArrowsSlideWithArrowsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlideWithArrowsPage", function () {
      return SlideWithArrowsPage;
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
        "background": a0
      };
    };

    function SlideWithArrowsPage_ion_slide_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-slide", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var slide_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, "url(" + slide_r4.imageUrl + ")"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r4.title);
      }
    }

    function SlideWithArrowsPage_div_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SlideWithArrowsPage_div_10_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.previousSlide();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SlideWithArrowsPage_div_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SlideWithArrowsPage_div_11_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.nextSlide();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var SlideWithArrowsPage = /*#__PURE__*/function () {
      function SlideWithArrowsPage() {
        _classCallCheck(this, SlideWithArrowsPage);

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
        this.slideOpts = {
          loop: true,
          autoplay: {
            delay: 2000
          },
          on: {
            beforeInit: function beforeInit() {
              var swiper = this;
              swiper.classNames.push("".concat(swiper.params.containerModifierClass, "fade"));
              var overwriteParams = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                spaceBetween: 0,
                virtualTranslate: true
              };
              swiper.params = Object.assign(swiper.params, overwriteParams);
              swiper.params = Object.assign(swiper.originalParams, overwriteParams);
            },
            setTranslate: function setTranslate() {
              var swiper = this;
              var slides = swiper.slides;

              for (var i = 0; i < slides.length; i += 1) {
                var $slideEl = swiper.slides.eq(i);
                var offset$$1 = $slideEl[0].swiperSlideOffset;
                var tx = -offset$$1;
                if (!swiper.params.virtualTranslate) tx -= swiper.translate;
                var ty = 0;

                if (!swiper.isHorizontal()) {
                  ty = tx;
                  tx = 0;
                }

                var slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
                $slideEl.css({
                  opacity: slideOpacity
                }).transform("translate3d(".concat(tx, "px, ").concat(ty, "px, 0px)"));
              }
            },
            setTransition: function setTransition(duration) {
              var swiper = this;
              var slides = swiper.slides,
                  $wrapperEl = swiper.$wrapperEl;
              slides.transition(duration);

              if (swiper.params.virtualTranslate && duration !== 0) {
                var eventTriggered = false;
                slides.transitionEnd(function () {
                  if (eventTriggered) return;
                  if (!swiper || swiper.destroyed) return;
                  eventTriggered = true;
                  swiper.animating = false;
                  var triggerEvents = ['webkitTransitionEnd', 'transitionend'];

                  for (var i = 0; i < triggerEvents.length; i += 1) {
                    $wrapperEl.trigger(triggerEvents[i]);
                  }
                });
              }
            }
          }
        };
        this.currentIndex = 0;
      }

      _createClass(SlideWithArrowsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "nextSlide",
        value: function nextSlide() {
          this.slider.slideNext();
        }
      }, {
        key: "previousSlide",
        value: function previousSlide() {
          this.slider.slidePrev();
        }
      }, {
        key: "onSlideChanged",
        value: function onSlideChanged() {
          var _this = this;

          this.slider.getActiveIndex().then(function (index) {
            return _this.currentIndex = index;
          });
        }
      }]);

      return SlideWithArrowsPage;
    }();

    SlideWithArrowsPage.ɵfac = function SlideWithArrowsPage_Factory(t) {
      return new (t || SlideWithArrowsPage)();
    };

    SlideWithArrowsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SlideWithArrowsPage,
      selectors: [["app-slide-with-arrows"]],
      viewQuery: function SlideWithArrowsPage_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.slider = _t.first);
        }
      },
      decls: 12,
      vars: 4,
      consts: [["slot", "start"], ["defaultHref", "/"], [3, "options", "ionSlideWillChange"], ["slider", ""], ["class", "swiper-no-swiping", 3, "ngStyle", 4, "ngFor", "ngForOf"], ["class", "swiper-button-prev swiper-button-white", 3, "click", 4, "ngIf"], ["class", "swiper-button-next swiper-button-white", 3, "click", 4, "ngIf"], [1, "swiper-no-swiping", 3, "ngStyle"], [1, "swiper-button-prev", "swiper-button-white", 3, "click"], [1, "swiper-button-next", "swiper-button-white", 3, "click"]],
      template: function SlideWithArrowsPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Slide With Arrows");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-slides", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionSlideWillChange", function SlideWithArrowsPage_Template_ion_slides_ionSlideWillChange_7_listener() {
            return ctx.onSlideChanged();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SlideWithArrowsPage_ion_slide_9_Template, 3, 4, "ion-slide", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SlideWithArrowsPage_div_10_Template, 1, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SlideWithArrowsPage_div_11_Template, 1, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.slideOpts);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentIndex > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentIndex < ctx.slides.length - 1);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSlides"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSlide"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]],
      styles: ["h2[_ngcontent-%COMP%] {\n  color: white;\n}\n\nion-slides[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\nion-slides[_ngcontent-%COMP%]   .slide-zoom[_ngcontent-%COMP%] {\n  text-align: center;\n  display: block;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvc2xpZGVzL3NsaWRlLXdpdGgtYXJyb3dzL0M6XFxVc2Vyc1xcVmFnbmVyIFNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZWN0c1xcX015XFxhd2Vzb21lLWNvbXBvbmVudHMtaW9uaWMvc3JjXFxhcHBcXHBhZ2VzXFx5YW5uYmZcXGNvbXBvbmVudHNcXHNsaWRlc1xcc2xpZGUtd2l0aC1hcnJvd3NcXHNsaWRlLXdpdGgtYXJyb3dzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvc2xpZGVzL3NsaWRlLXdpdGgtYXJyb3dzL3NsaWRlLXdpdGgtYXJyb3dzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBRENFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvc2xpZGVzL3NsaWRlLXdpdGgtYXJyb3dzL3NsaWRlLXdpdGgtYXJyb3dzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1zbGlkZXMge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgLnNsaWRlLXpvb20ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuIiwiaDIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1zbGlkZXMge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbmlvbi1zbGlkZXMgLnNsaWRlLXpvb20ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlideWithArrowsPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-slide-with-arrows',
          templateUrl: './slide-with-arrows.page.html',
          styleUrls: ['./slide-with-arrows.page.scss']
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
//# sourceMappingURL=slide-with-arrows-slide-with-arrows-module-es5.js.map