function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["grid3-grid3-module"], {
  /***/
  "./src/app/pages/samples/components/grids/grid3/grid3-routing.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/samples/components/grids/grid3/grid3-routing.module.ts ***!
    \******************************************************************************/

  /*! exports provided: Grid3PageRoutingModule */

  /***/
  function srcAppPagesSamplesComponentsGridsGrid3Grid3RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Grid3PageRoutingModule", function () {
      return Grid3PageRoutingModule;
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


    var _grid3_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./grid3.page */
    "./src/app/pages/samples/components/grids/grid3/grid3.page.ts");

    var routes = [{
      path: '',
      component: _grid3_page__WEBPACK_IMPORTED_MODULE_2__["Grid3Page"]
    }];

    var Grid3PageRoutingModule = function Grid3PageRoutingModule() {
      _classCallCheck(this, Grid3PageRoutingModule);
    };

    Grid3PageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: Grid3PageRoutingModule
    });
    Grid3PageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function Grid3PageRoutingModule_Factory(t) {
        return new (t || Grid3PageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Grid3PageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Grid3PageRoutingModule, [{
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
  "./src/app/pages/samples/components/grids/grid3/grid3.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/samples/components/grids/grid3/grid3.module.ts ***!
    \**********************************************************************/

  /*! exports provided: Grid3PageModule */

  /***/
  function srcAppPagesSamplesComponentsGridsGrid3Grid3ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Grid3PageModule", function () {
      return Grid3PageModule;
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


    var _grid3_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./grid3-routing.module */
    "./src/app/pages/samples/components/grids/grid3/grid3-routing.module.ts");
    /* harmony import */


    var _grid3_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./grid3.page */
    "./src/app/pages/samples/components/grids/grid3/grid3.page.ts");

    var Grid3PageModule = function Grid3PageModule() {
      _classCallCheck(this, Grid3PageModule);
    };

    Grid3PageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: Grid3PageModule
    });
    Grid3PageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function Grid3PageModule_Factory(t) {
        return new (t || Grid3PageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _grid3_routing_module__WEBPACK_IMPORTED_MODULE_4__["Grid3PageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Grid3PageModule, {
        declarations: [_grid3_page__WEBPACK_IMPORTED_MODULE_5__["Grid3Page"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _grid3_routing_module__WEBPACK_IMPORTED_MODULE_4__["Grid3PageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Grid3PageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _grid3_routing_module__WEBPACK_IMPORTED_MODULE_4__["Grid3PageRoutingModule"]],
          declarations: [_grid3_page__WEBPACK_IMPORTED_MODULE_5__["Grid3Page"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/samples/components/grids/grid3/grid3.page.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/samples/components/grids/grid3/grid3.page.ts ***!
    \********************************************************************/

  /*! exports provided: Grid3Page */

  /***/
  function srcAppPagesSamplesComponentsGridsGrid3Grid3PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Grid3Page", function () {
      return Grid3Page;
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

    var _c0 = function _c0(a0) {
      return {
        "background-image": a0,
        "background-repeat": "no-repeat",
        "height": "40% 100px",
        "background-size": "cover "
      };
    };

    function Grid3Page_ion_item_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, "linear-gradient(0deg,rgba(88, 87, 88, 0.3),rgba(94, 93, 94, 0.3)),url(" + p_r1.image + ")"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r1.title);
      }
    }

    var Grid3Page = /*#__PURE__*/function () {
      function Grid3Page() {
        _classCallCheck(this, Grid3Page);

        this.gridImages = [{
          title: 'V I N Y A S A',
          image: 'assets/samples/products/vinyasa.jpg'
        }, {
          title: 'A S H T A N G A',
          image: 'assets/samples/products/ashtanga.jpg'
        }, {
          title: 'I Y E N G A R',
          image: 'assets/samples/products/gallery7.jpg'
        }, {
          title: 'B I K R A M',
          image: 'assets/samples/products/bikram.jpg'
        }, {
          title: 'J I V A M U K T I',
          image: 'assets/samples/products/jivamukti.jpg'
        }, {
          title: 'P O W E R',
          image: 'assets/samples/products/power.jpg'
        }, {
          title: 'S I V A N A N D A',
          image: 'assets/samples/products/sivananda.jpg'
        }, {
          title: 'Y I N',
          image: 'assets/samples/products/yin.jpg'
        }];
      }

      _createClass(Grid3Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Grid3Page;
    }();

    Grid3Page.ɵfac = function Grid3Page_Factory(t) {
      return new (t || Grid3Page)();
    };

    Grid3Page.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Grid3Page,
      selectors: [["app-grid3"]],
      decls: 9,
      vars: 1,
      consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "/grids"], [1, "title-ios"], ["no-lines", "", "ion-item", "", "no-padding", "", "mode", "md", 4, "ngFor", "ngForOf"], ["no-lines", "", "ion-item", "", "no-padding", "", "mode", "md"], [1, "imagediv", 3, "ngStyle"], [1, "inner"]],
      template: function Grid3Page_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Full Width Images");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, Grid3Page_ion_item_8_Template, 6, 4, "ion-item", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gridImages);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]],
      styles: ["[_nghost-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --background: transparent;\n  --color: white;\n  position: absolute;\n}\n\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  --background-size: cover;\n}\n\n[_nghost-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --border-style: none;\n  --inner-padding-end: 0;\n  --padding-start: 0;\n  font-family: Source Code Pro !important;\n}\n\n.scroll-content[_ngcontent-%COMP%] {\n  padding-top: 0 !important;\n}\n\n.label[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nion-button[_ngcontent-%COMP%] {\n  --background: transparent;\n  --box-shadow: none;\n  --background-activated: #f5f6f900;\n  --background-focused: #3171e000;\n  font-family: Source Code Pro !important;\n  font-size: medium;\n  font-weight: bold;\n}\n\n[_nghost-%COMP%]   .imagediv[_ngcontent-%COMP%] {\n  height: 200px;\n  justify-content: center;\n  display: flex;\n  vertical-align: middle;\n  align-items: center;\n  width: 100%;\n  font-size: 30px;\n  color: white;\n}\n\n.list-md[_ngcontent-%COMP%], .list-ios[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0px 0;\n  padding-bottom: 53px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2FtcGxlcy9jb21wb25lbnRzL2dyaWRzL2dyaWQzL0M6XFxVc2Vyc1xcVmFnbmVyIFNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZWN0c1xcX015XFxhd2Vzb21lLWNvbXBvbmVudHMtaW9uaWMvc3JjXFxhcHBcXHBhZ2VzXFxzYW1wbGVzXFxjb21wb25lbnRzXFxncmlkc1xcZ3JpZDNcXGdyaWQzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2FtcGxlcy9jb21wb25lbnRzL2dyaWRzL2dyaWQzL2dyaWQzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUU7RUFDRSx3QkFBQTtBQ0NKOztBRElFO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUNBQUE7QUNESjs7QURJQTtFQUNFLHlCQUFBO0FDREY7O0FER0E7RUFDRSxTQUFBO0FDQUY7O0FERUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSwrQkFBQTtFQUNBLHVDQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTs7RUFFRSxTQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zYW1wbGVzL2NvbXBvbmVudHMvZ3JpZHMvZ3JpZDMvZ3JpZDMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgLS1jb2xvcjogd2hpdGU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbjpob3N0IHtcclxuICBpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSAsICM0MjlFQjYsI2ZmZmZmZik7XHJcbiAgfVxyXG59XHJcbjpob3N0IHtcclxuICBpb24taXRlbSB7XHJcbiAgICAtLWJvcmRlci1zdHlsZTogbm9uZTtcclxuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICBmb250LWZhbWlseTogU291cmNlIENvZGUgUHJvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbi5zY3JvbGwtY29udGVudCB7XHJcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcclxufVxyXG4ubGFiZWwge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5pb24tYnV0dG9uIHtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZjVmNmY5MDA7XHJcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICMzMTcxZTAwMDtcclxuICBmb250LWZhbWlseTogU291cmNlIENvZGUgUHJvICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuOmhvc3Qge1xyXG4gIC5pbWFnZWRpdiB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbn1cclxuLmxpc3QtbWQsXHJcbi5saXN0LWlvcyB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDBweCAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiA1M3B4O1xyXG4gIC8vICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tdGFiYmFyLXRleHQtY29sb3IpO1xyXG4gIC8vYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCx2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwjZmZmKSk7XHJcbn1cclxuIiwiOmhvc3QgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG46aG9zdCBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuOmhvc3QgaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1zdHlsZTogbm9uZTtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICBmb250LWZhbWlseTogU291cmNlIENvZGUgUHJvICFpbXBvcnRhbnQ7XG59XG5cbi5zY3JvbGwtY29udGVudCB7XG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5sYWJlbCB7XG4gIG1hcmdpbjogMDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2Y1ZjZmOTAwO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzMxNzFlMDAwO1xuICBmb250LWZhbWlseTogU291cmNlIENvZGUgUHJvICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuOmhvc3QgLmltYWdlZGl2IHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmxpc3QtbWQsXG4ubGlzdC1pb3Mge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDBweCAwO1xuICBwYWRkaW5nLWJvdHRvbTogNTNweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Grid3Page, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-grid3',
          templateUrl: './grid3.page.html',
          styleUrls: ['./grid3.page.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=grid3-grid3-module-es5.js.map