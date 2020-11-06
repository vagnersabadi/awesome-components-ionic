function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-fivethree-components-gallery-gallery-module"], {
  /***/
  "./src/app/pages/fivethree/components/gallery/gallery-routing.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/fivethree/components/gallery/gallery-routing.module.ts ***!
    \******************************************************************************/

  /*! exports provided: GalleryPageRoutingModule */

  /***/
  function srcAppPagesFivethreeComponentsGalleryGalleryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleryPageRoutingModule", function () {
      return GalleryPageRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _gallery_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./gallery.page */
    "./src/app/pages/fivethree/components/gallery/gallery.page.ts");

    var routes = [{
      path: '',
      component: _gallery_page__WEBPACK_IMPORTED_MODULE_2__["GalleryPage"]
    }];

    var GalleryPageRoutingModule = function GalleryPageRoutingModule() {
      _classCallCheck(this, GalleryPageRoutingModule);
    };

    GalleryPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: GalleryPageRoutingModule
    });
    GalleryPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function GalleryPageRoutingModule_Factory(t) {
        return new (t || GalleryPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GalleryPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/fivethree/components/gallery/gallery.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/fivethree/components/gallery/gallery.module.ts ***!
    \**********************************************************************/

  /*! exports provided: GalleryPageModule */

  /***/
  function srcAppPagesFivethreeComponentsGalleryGalleryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleryPageModule", function () {
      return GalleryPageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _gallery_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./gallery-routing.module */
    "./src/app/pages/fivethree/components/gallery/gallery-routing.module.ts");
    /* harmony import */


    var _gallery_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./gallery.page */
    "./src/app/pages/fivethree/components/gallery/gallery.page.ts");
    /* harmony import */


    var _fivethree_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @fivethree/core */
    "./node_modules/@fivethree/core/__ivy_ngcc__/fesm2015/fivethree-core.js");

    var GalleryPageModule = function GalleryPageModule() {
      _classCallCheck(this, GalleryPageModule);
    };

    GalleryPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: GalleryPageModule
    });
    GalleryPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function GalleryPageModule_Factory(t) {
        return new (t || GalleryPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _gallery_routing_module__WEBPACK_IMPORTED_MODULE_4__["GalleryPageRoutingModule"], _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivGalleryModule"], _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivSpinnerModule"], _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivCenterModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GalleryPageModule, {
        declarations: [_gallery_page__WEBPACK_IMPORTED_MODULE_5__["GalleryPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _gallery_routing_module__WEBPACK_IMPORTED_MODULE_4__["GalleryPageRoutingModule"], _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivGalleryModule"], _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivSpinnerModule"], _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivCenterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _gallery_routing_module__WEBPACK_IMPORTED_MODULE_4__["GalleryPageRoutingModule"], _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivGalleryModule"], _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivSpinnerModule"], _fivethree_core__WEBPACK_IMPORTED_MODULE_6__["FivCenterModule"]],
          declarations: [_gallery_page__WEBPACK_IMPORTED_MODULE_5__["GalleryPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/fivethree/components/gallery/gallery.page.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/fivethree/components/gallery/gallery.page.ts ***!
    \********************************************************************/

  /*! exports provided: GalleryPage */

  /***/
  function srcAppPagesFivethreeComponentsGalleryGalleryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleryPage", function () {
      return GalleryPage;
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


    var _fivethree_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fivethree/core */
    "./node_modules/@fivethree/core/__ivy_ngcc__/fesm2015/fivethree-core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function GalleryPage_ion_col_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-col", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fiv-gallery-image", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var pic_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", pic_r1);
      }
    }

    var GalleryPage = /*#__PURE__*/function () {
      function GalleryPage() {
        _classCallCheck(this, GalleryPage);

        this.picsum = Array.from(new Array(12), function (x, i) {
          return "https://source.unsplash.com/random/1080x720?".concat(i);
        });
      }

      _createClass(GalleryPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GalleryPage;
    }();

    GalleryPage.ɵfac = function GalleryPage_Factory(t) {
      return new (t || GalleryPage)();
    };

    GalleryPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GalleryPage,
      selectors: [["app-gallery"]],
      decls: 13,
      vars: 1,
      consts: [["slot", "start"], ["defaultHref", "/fivethree"], ["position", "top"], ["fixed", ""], ["size", "6", "sizeMd", "4", 4, "ngFor", "ngForOf"], ["size", "6", "sizeMd", "4"], [3, "src"]],
      template: function GalleryPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Gallery");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "fiv-gallery");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "fiv-gallery-toolbar", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "fiv-gallery-toolbar-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-grid", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, GalleryPage_ion_col_12_Template, 2, 1, "ion-col", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.picsum);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _fivethree_core__WEBPACK_IMPORTED_MODULE_2__["FivGallery"], _fivethree_core__WEBPACK_IMPORTED_MODULE_2__["FivGalleryToolbar"], _fivethree_core__WEBPACK_IMPORTED_MODULE_2__["FivGalleryToolbarContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRow"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCol"], _fivethree_core__WEBPACK_IMPORTED_MODULE_2__["FivGalleryImage"]],
      styles: ["ion-row.big[_ngcontent-%COMP%]   fiv-gallery-image[_ngcontent-%COMP%] {\n  --max-height: 86px;\n}\n\nion-row.small[_ngcontent-%COMP%]   fiv-gallery-image[_ngcontent-%COMP%] {\n  --max-height: 60px;\n}\n\nion-row.large[_ngcontent-%COMP%]   fiv-gallery-image[_ngcontent-%COMP%] {\n  --max-height: 120px;\n}\n\n.loop[_ngcontent-%COMP%]   fiv-gallery-image[_ngcontent-%COMP%] {\n  --max-height: 90px;\n  --width: auto;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZml2ZXRocmVlL2NvbXBvbmVudHMvZ2FsbGVyeS9DOlxcVXNlcnNcXFZhZ25lciBTYWJhZGlcXERvY3VtZW50c1xcUHJvamVjdHNcXF9NeVxcYXdlc29tZS1jb21wb25lbnRzLWlvbmljL3NyY1xcYXBwXFxwYWdlc1xcZml2ZXRocmVlXFxjb21wb25lbnRzXFxnYWxsZXJ5XFxnYWxsZXJ5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZml2ZXRocmVlL2NvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNFLGtCQUFBO0FDQU47O0FES0k7RUFDRSxrQkFBQTtBQ0ZOOztBRE9JO0VBQ0UsbUJBQUE7QUNKTjs7QURTSTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FDTk4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9maXZldGhyZWUvY29tcG9uZW50cy9nYWxsZXJ5L2dhbGxlcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXJvdy5iaWcge1xyXG4gICAgZml2LWdhbGxlcnktaW1hZ2Uge1xyXG4gICAgICAtLW1heC1oZWlnaHQ6IDg2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1yb3cuc21hbGwge1xyXG4gICAgZml2LWdhbGxlcnktaW1hZ2Uge1xyXG4gICAgICAtLW1heC1oZWlnaHQ6IDYwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1yb3cubGFyZ2Uge1xyXG4gICAgZml2LWdhbGxlcnktaW1hZ2Uge1xyXG4gICAgICAtLW1heC1oZWlnaHQ6IDEyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAubG9vcCB7XHJcbiAgICBmaXYtZ2FsbGVyeS1pbWFnZSB7XHJcbiAgICAgIC0tbWF4LWhlaWdodDogOTBweDtcclxuICAgICAgLS13aWR0aDogYXV0bztcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxuICAiLCJpb24tcm93LmJpZyBmaXYtZ2FsbGVyeS1pbWFnZSB7XG4gIC0tbWF4LWhlaWdodDogODZweDtcbn1cblxuaW9uLXJvdy5zbWFsbCBmaXYtZ2FsbGVyeS1pbWFnZSB7XG4gIC0tbWF4LWhlaWdodDogNjBweDtcbn1cblxuaW9uLXJvdy5sYXJnZSBmaXYtZ2FsbGVyeS1pbWFnZSB7XG4gIC0tbWF4LWhlaWdodDogMTIwcHg7XG59XG5cbi5sb29wIGZpdi1nYWxsZXJ5LWltYWdlIHtcbiAgLS1tYXgtaGVpZ2h0OiA5MHB4O1xuICAtLXdpZHRoOiBhdXRvO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-gallery',
          templateUrl: './gallery.page.html',
          styleUrls: ['./gallery.page.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-fivethree-components-gallery-gallery-module-es5.js.map