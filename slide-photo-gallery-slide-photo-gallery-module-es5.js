function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["slide-photo-gallery-slide-photo-gallery-module"], {
  /***/
  "./src/app/pages/yannbf/components/slides/slide-photo-gallery/slide-photo-gallery.module.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/pages/yannbf/components/slides/slide-photo-gallery/slide-photo-gallery.module.ts ***!
    \**************************************************************************************************/

  /*! exports provided: SlidePhotoGalleryPageModule */

  /***/
  function srcAppPagesYannbfComponentsSlidesSlidePhotoGallerySlidePhotoGalleryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlidePhotoGalleryPageModule", function () {
      return SlidePhotoGalleryPageModule;
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


    var _slide_photo_gallery_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./slide-photo-gallery.page */
    "./src/app/pages/yannbf/components/slides/slide-photo-gallery/slide-photo-gallery.page.ts");

    var routes = [{
      path: '',
      component: _slide_photo_gallery_page__WEBPACK_IMPORTED_MODULE_5__["SlidePhotoGalleryPage"]
    }];

    var SlidePhotoGalleryPageModule = function SlidePhotoGalleryPageModule() {
      _classCallCheck(this, SlidePhotoGalleryPageModule);
    };

    SlidePhotoGalleryPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SlidePhotoGalleryPageModule
    });
    SlidePhotoGalleryPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SlidePhotoGalleryPageModule_Factory(t) {
        return new (t || SlidePhotoGalleryPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SlidePhotoGalleryPageModule, {
        declarations: [_slide_photo_gallery_page__WEBPACK_IMPORTED_MODULE_5__["SlidePhotoGalleryPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlidePhotoGalleryPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
          declarations: [_slide_photo_gallery_page__WEBPACK_IMPORTED_MODULE_5__["SlidePhotoGalleryPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/yannbf/components/slides/slide-photo-gallery/slide-photo-gallery.page.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/pages/yannbf/components/slides/slide-photo-gallery/slide-photo-gallery.page.ts ***!
    \************************************************************************************************/

  /*! exports provided: SlidePhotoGalleryPage */

  /***/
  function srcAppPagesYannbfComponentsSlidesSlidePhotoGallerySlidePhotoGalleryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlidePhotoGalleryPage", function () {
      return SlidePhotoGalleryPage;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var SlidePhotoGalleryPage = /*#__PURE__*/function () {
      function SlidePhotoGalleryPage() {
        _classCallCheck(this, SlidePhotoGalleryPage);

        this.slides = [{
          imageUrl: 'http://lorempixel.com/1200/1200/nature/1'
        }, {
          imageUrl: 'http://lorempixel.com/1200/1200/nature/2'
        }, {
          imageUrl: 'http://lorempixel.com/1200/1200/nature/3'
        }, {
          imageUrl: 'http://lorempixel.com/1200/1200/nature/4'
        }, {
          imageUrl: 'http://lorempixel.com/1200/1200/nature/5'
        }, {
          imageUrl: 'http://lorempixel.com/1200/1200/nature/6'
        }, {
          imageUrl: 'http://lorempixel.com/1200/1200/nature/7'
        }, {
          imageUrl: 'http://lorempixel.com/1200/1200/nature/8'
        }, {
          imageUrl: 'http://lorempixel.com/1200/1200/nature/9'
        }, {
          imageUrl: 'http://lorempixel.com/1200/1200/nature/10'
        }];
      }

      _createClass(SlidePhotoGalleryPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SlidePhotoGalleryPage;
    }();

    SlidePhotoGalleryPage.ɵfac = function SlidePhotoGalleryPage_Factory(t) {
      return new (t || SlidePhotoGalleryPage)();
    };

    SlidePhotoGalleryPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SlidePhotoGalleryPage,
      selectors: [["app-slide-photo-gallery"]],
      decls: 33,
      vars: 0,
      consts: [["slot", "start"], ["defaultHref", "/"], ["id", "gallery-top", 1, "swiper-container", "gallery-top"], [1, "swiper-wrapper"], [1, "swiper-slide", 2, "background-image", "url(http://lorempixel.com/1200/1200/nature/1)"], [1, "swiper-slide", 2, "background-image", "url(http://lorempixel.com/1200/1200/nature/2)"], [1, "swiper-slide", 2, "background-image", "url(http://lorempixel.com/1200/1200/nature/3)"], [1, "swiper-slide", 2, "background-image", "url(http://lorempixel.com/1200/1200/nature/4)"], [1, "swiper-slide", 2, "background-image", "url(http://lorempixel.com/1200/1200/nature/5)"], [1, "swiper-slide", 2, "background-image", "url(http://lorempixel.com/1200/1200/nature/6)"], [1, "swiper-slide", 2, "background-image", "url(http://lorempixel.com/1200/1200/nature/7)"], [1, "swiper-slide", 2, "background-image", "url(http://lorempixel.com/1200/1200/nature/8)"], [1, "swiper-slide", 2, "background-image", "url(http://lorempixel.com/1200/1200/nature/9)"], [1, "swiper-slide", 2, "background-image", "url(http://lorempixel.com/1200/1200/nature/10)"], [1, "swiper-button-next", "swiper-button-white"], [1, "swiper-button-prev", "swiper-button-white"], ["id", "gallery-thumbs", 1, "swiper-container", "gallery-thumbs"]],
      template: function SlidePhotoGalleryPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Photo Gallery");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"]],
      styles: [".swiper-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.swiper-slide[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-position: center;\n}\n\n.gallery-top[_ngcontent-%COMP%] {\n  height: 80%;\n  width: 100%;\n}\n\n.gallery-thumbs[_ngcontent-%COMP%] {\n  height: 20%;\n  box-sizing: border-box;\n  padding: 10px 0;\n}\n\n.gallery-thumbs[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  width: 25%;\n  height: 100%;\n  opacity: 0.4;\n}\n\n.gallery-thumbs[_ngcontent-%COMP%]   .swiper-slide-active[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvc2xpZGVzL3NsaWRlLXBob3RvLWdhbGxlcnkvQzpcXFVzZXJzXFxWYWduZXIgU2FiYWRpXFxEb2N1bWVudHNcXFByb2plY3RzXFxfTXlcXGF3ZXNvbWUtY29tcG9uZW50cy1pb25pYy9zcmNcXGFwcFxccGFnZXNcXHlhbm5iZlxcY29tcG9uZW50c1xcc2xpZGVzXFxzbGlkZS1waG90by1nYWxsZXJ5XFxzbGlkZS1waG90by1nYWxsZXJ5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvc2xpZGVzL3NsaWRlLXBob3RvLWdhbGxlcnkvc2xpZGUtcGhvdG8tZ2FsbGVyeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDRTtFQUNFLHNCQUFBO0VBQ0EsMkJBQUE7QUNFSjs7QURBRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FDR0o7O0FEREU7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDSUo7O0FERkU7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNLSjs7QURIRTtFQUNFLFVBQUE7QUNNSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL3NsaWRlcy9zbGlkZS1waG90by1nYWxsZXJ5L3NsaWRlLXBob3RvLWdhbGxlcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN3aXBlci1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIC5zd2lwZXItc2xpZGUge1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICB9XHJcbiAgLmdhbGxlcnktdG9wIHtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5nYWxsZXJ5LXRodW1icyB7XHJcbiAgICBoZWlnaHQ6IDIwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgfVxyXG4gIC5nYWxsZXJ5LXRodW1icyAuc3dpcGVyLXNsaWRlIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvcGFjaXR5OiAwLjQ7XHJcbiAgfVxyXG4gIC5nYWxsZXJ5LXRodW1icyAuc3dpcGVyLXNsaWRlLWFjdGl2ZSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH0iLCIuc3dpcGVyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uc3dpcGVyLXNsaWRlIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4uZ2FsbGVyeS10b3Age1xuICBoZWlnaHQ6IDgwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5nYWxsZXJ5LXRodW1icyB7XG4gIGhlaWdodDogMjAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG5cbi5nYWxsZXJ5LXRodW1icyAuc3dpcGVyLXNsaWRlIHtcbiAgd2lkdGg6IDI1JTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvcGFjaXR5OiAwLjQ7XG59XG5cbi5nYWxsZXJ5LXRodW1icyAuc3dpcGVyLXNsaWRlLWFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlidePhotoGalleryPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-slide-photo-gallery',
          templateUrl: './slide-photo-gallery.page.html',
          styleUrls: ['./slide-photo-gallery.page.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=slide-photo-gallery-slide-photo-gallery-module-es5.js.map