function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["slide-color-changing-slide-color-changing-module"], {
  /***/
  "./src/app/pages/yannbf/components/slides/slide-color-changing/slide-color-changing.module.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/app/pages/yannbf/components/slides/slide-color-changing/slide-color-changing.module.ts ***!
    \****************************************************************************************************/

  /*! exports provided: SlideColorChangingPageModule */

  /***/
  function srcAppPagesYannbfComponentsSlidesSlideColorChangingSlideColorChangingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlideColorChangingPageModule", function () {
      return SlideColorChangingPageModule;
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


    var _slide_color_changing_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./slide-color-changing.page */
    "./src/app/pages/yannbf/components/slides/slide-color-changing/slide-color-changing.page.ts");

    var routes = [{
      path: '',
      component: _slide_color_changing_page__WEBPACK_IMPORTED_MODULE_5__["SlideColorChangingPage"]
    }];

    var SlideColorChangingPageModule = function SlideColorChangingPageModule() {
      _classCallCheck(this, SlideColorChangingPageModule);
    };

    SlideColorChangingPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SlideColorChangingPageModule
    });
    SlideColorChangingPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SlideColorChangingPageModule_Factory(t) {
        return new (t || SlideColorChangingPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SlideColorChangingPageModule, {
        declarations: [_slide_color_changing_page__WEBPACK_IMPORTED_MODULE_5__["SlideColorChangingPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlideColorChangingPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
          declarations: [_slide_color_changing_page__WEBPACK_IMPORTED_MODULE_5__["SlideColorChangingPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/yannbf/components/slides/slide-color-changing/slide-color-changing.page.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/pages/yannbf/components/slides/slide-color-changing/slide-color-changing.page.ts ***!
    \**************************************************************************************************/

  /*! exports provided: SlideColorChangingPage */

  /***/
  function srcAppPagesYannbfComponentsSlidesSlideColorChangingSlideColorChangingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlideColorChangingPage", function () {
      return SlideColorChangingPage;
    });
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["slider"];

    function SlideColorChangingPage_ion_slide_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-slide");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var slide_r2 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", ctx_r1.color);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](slide_r2.title);
      }
    }

    var SlideColorChangingPage = /*#__PURE__*/function () {
      function SlideColorChangingPage() {
        _classCallCheck(this, SlideColorChangingPage);

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
        this.colors = ['#e43737', '#e0e437', '#37e446', '#375be4', '#972cb1'];
        this.color = this.colors[0];
      }

      _createClass(SlideColorChangingPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSlideChanged",
        value: function onSlideChanged() {
          var _this = this;

          this.slider.getActiveIndex().then(function (currentIndex) {
            _this.color = _this.colors[currentIndex];
            console.log('Slide changed! Current index is', currentIndex);
          });
        }
      }]);

      return SlideColorChangingPage;
    }();

    SlideColorChangingPage.ɵfac = function SlideColorChangingPage_Factory(t) {
      return new (t || SlideColorChangingPage)();
    };

    SlideColorChangingPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SlideColorChangingPage,
      selectors: [["app-slide-color-changing"]],
      viewQuery: function SlideColorChangingPage_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.slider = _t.first);
        }
      },
      decls: 28,
      vars: 4,
      consts: [["slot", "start"], ["defaultHref", "/"], ["fullscreen", ""], [3, "pager", "ionSlideDidChange"], ["slider", ""], [1, "container"], [3, "background-color", 4, "ngFor", "ngForOf"]],
      template: function SlideColorChangingPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Color Changing Slide");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-slides", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionSlideDidChange", function SlideColorChangingPage_Template_ion_slides_ionSlideDidChange_7_listener() {
            return ctx.onSlideChanged();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-slide");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Love ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "him");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "her");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "you");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "me");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "them");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "everyone");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, SlideColorChangingPage_ion_slide_27_Template, 3, 3, "ion-slide", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pager", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", ctx.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.slides);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonSlides"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonSlide"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: [".bar-buttons[_ngcontent-%COMP%], .toolbar-title[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.scroll-content[_ngcontent-%COMP%] {\n  padding-top: 0 !important;\n}\n\nion-slide[_ngcontent-%COMP%] {\n  transition: all 1s linear;\n}\n\n.swiper-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.swiper-slide[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 18px;\n  background: #fff;\n  \n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 10% auto 0;\n}\n\nh1[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: initial;\n  overflow: hidden;\n  display: flex;\n  position: relative;\n  font-size: 30px;\n  font-family: Helvetica;\n  font-family: Sans-serif;\n  font-weight: 800;\n  letter-spacing: 2px;\n  text-align: left;\n  padding-left: 10px;\n}\n\nh1[_ngcontent-%COMP%], span[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] {\n  color: white;\n}\n\nul[_ngcontent-%COMP%] {\n  margin: 0 0 0 50px;\n  position: absolute;\n  -webkit-animation: scroll 6s infinite linear;\n          animation: scroll 6s infinite linear;\n}\n\nli[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 30px;\n}\n\n@-webkit-keyframes scroll {\n  from {\n    transform: translateY(0);\n  }\n  to {\n    transform: translateY(-100%);\n  }\n}\n\n@keyframes scroll {\n  from {\n    transform: translateY(0);\n  }\n  to {\n    transform: translateY(-100%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvc2xpZGVzL3NsaWRlLWNvbG9yLWNoYW5naW5nL0M6XFxVc2Vyc1xcVmFnbmVyIFNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZWN0c1xcX015XFxhd2Vzb21lLWNvbXBvbmVudHMtaW9uaWMvc3JjXFxhcHBcXHBhZ2VzXFx5YW5uYmZcXGNvbXBvbmVudHNcXHNsaWRlc1xcc2xpZGUtY29sb3ItY2hhbmdpbmdcXHNsaWRlLWNvbG9yLWNoYW5naW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvc2xpZGVzL3NsaWRlLWNvbG9yLWNoYW5naW5nL3NsaWRlLWNvbG9yLWNoYW5naW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxXQUFBO0FDQ0Y7O0FEQ0E7RUFDRSx5QkFBQTtBQ0VGOztBREFBO0VBQ0UseUJBQUE7QUNHRjs7QUREQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDSUY7O0FERkE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNLRjs7QURGQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQ0tGOztBREhBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDTUY7O0FESkE7OztFQUdFLFlBQUE7QUNPRjs7QURMQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtVQUFBLG9DQUFBO0FDUUY7O0FETkE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUNTRjs7QURQQTtFQUNFO0lBQ0Usd0JBQUE7RUNVRjtFRFJBO0lBQ0UsNEJBQUE7RUNVRjtBQUNGOztBRGhCQTtFQUNFO0lBQ0Usd0JBQUE7RUNVRjtFRFJBO0lBQ0UsNEJBQUE7RUNVRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvc2xpZGVzL3NsaWRlLWNvbG9yLWNoYW5naW5nL3NsaWRlLWNvbG9yLWNoYW5naW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYXItYnV0dG9ucyxcclxuLnRvb2xiYXItdGl0bGUge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5zY3JvbGwtY29udGVudCB7XHJcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcclxufVxyXG5pb24tc2xpZGUge1xyXG4gIHRyYW5zaXRpb246IGFsbCAxcyBsaW5lYXI7XHJcbn1cclxuLnN3aXBlci1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4uc3dpcGVyLXNsaWRlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgLyogQ2VudGVyIHNsaWRlIHRleHQgdmVydGljYWxseSAqL1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW46IDEwJSBhdXRvIDA7XHJcbn1cclxuaDEge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogaW5pdGlhbDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xyXG4gIGZvbnQtZmFtaWx5OiBTYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5oMSxcclxuc3BhbixcclxuaDIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG51bCB7XHJcbiAgbWFyZ2luOiAwIDAgMCA1MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBhbmltYXRpb246IHNjcm9sbCA2cyBpbmZpbml0ZSBsaW5lYXI7XHJcbn1cclxubGkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuQGtleWZyYW1lcyBzY3JvbGwge1xyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gIH1cclxufVxyXG4iLCIuYmFyLWJ1dHRvbnMsXG4udG9vbGJhci10aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uc2Nyb2xsLWNvbnRlbnQge1xuICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xufVxuXG5pb24tc2xpZGUge1xuICB0cmFuc2l0aW9uOiBhbGwgMXMgbGluZWFyO1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgLyogQ2VudGVyIHNsaWRlIHRleHQgdmVydGljYWxseSAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMTAlIGF1dG8gMDtcbn1cblxuaDEge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiBpbml0aWFsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcbiAgZm9udC1mYW1pbHk6IFNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaDEsXG5zcGFuLFxuaDIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbnVsIHtcbiAgbWFyZ2luOiAwIDAgMCA1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGFuaW1hdGlvbjogc2Nyb2xsIDZzIGluZmluaXRlIGxpbmVhcjtcbn1cblxubGkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuQGtleWZyYW1lcyBzY3JvbGwge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SlideColorChangingPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-slide-color-changing',
          templateUrl: './slide-color-changing.page.html',
          styleUrls: ['./slide-color-changing.page.scss']
        }]
      }], function () {
        return [];
      }, {
        slider: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['slider', {
            "static": true
          }]
        }]
      });
    })();
    /***/

  }
}]);
//# sourceMappingURL=slide-color-changing-slide-color-changing-module-es5.js.map