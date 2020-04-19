function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-timeline-timeline-module"], {
  /***/
  "./src/app/pages/yannbf/components/timeline/timeline-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/yannbf/components/timeline/timeline-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: TimelinePageRoutingModule */

  /***/
  function srcAppPagesYannbfComponentsTimelineTimelineRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimelinePageRoutingModule", function () {
      return TimelinePageRoutingModule;
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


    var _timeline_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./timeline.page */
    "./src/app/pages/yannbf/components/timeline/timeline.page.ts");

    var routes = [{
      path: '',
      component: _timeline_page__WEBPACK_IMPORTED_MODULE_2__["TimelinePage"]
    }];

    var TimelinePageRoutingModule = function TimelinePageRoutingModule() {
      _classCallCheck(this, TimelinePageRoutingModule);
    };

    TimelinePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TimelinePageRoutingModule
    });
    TimelinePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TimelinePageRoutingModule_Factory(t) {
        return new (t || TimelinePageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TimelinePageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimelinePageRoutingModule, [{
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
  "./src/app/pages/yannbf/components/timeline/timeline.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/yannbf/components/timeline/timeline.module.ts ***!
    \*********************************************************************/

  /*! exports provided: TimelinePageModule */

  /***/
  function srcAppPagesYannbfComponentsTimelineTimelineModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimelinePageModule", function () {
      return TimelinePageModule;
    });
    /* harmony import */


    var _components_yannbf_yannbf_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../../../components/yannbf/yannbf.components.module */
    "./src/app/components/yannbf/yannbf.components.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _timeline_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./timeline-routing.module */
    "./src/app/pages/yannbf/components/timeline/timeline-routing.module.ts");
    /* harmony import */


    var _timeline_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./timeline.page */
    "./src/app/pages/yannbf/components/timeline/timeline.page.ts");

    var TimelinePageModule = function TimelinePageModule() {
      _classCallCheck(this, TimelinePageModule);
    };

    TimelinePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: TimelinePageModule
    });
    TimelinePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function TimelinePageModule_Factory(t) {
        return new (t || TimelinePageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _timeline_routing_module__WEBPACK_IMPORTED_MODULE_5__["TimelinePageRoutingModule"], _components_yannbf_yannbf_components_module__WEBPACK_IMPORTED_MODULE_0__["YannbfComponentsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TimelinePageModule, {
        declarations: [_timeline_page__WEBPACK_IMPORTED_MODULE_6__["TimelinePage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _timeline_routing_module__WEBPACK_IMPORTED_MODULE_5__["TimelinePageRoutingModule"], _components_yannbf_yannbf_components_module__WEBPACK_IMPORTED_MODULE_0__["YannbfComponentsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TimelinePageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _timeline_routing_module__WEBPACK_IMPORTED_MODULE_5__["TimelinePageRoutingModule"], _components_yannbf_yannbf_components_module__WEBPACK_IMPORTED_MODULE_0__["YannbfComponentsModule"]],
          declarations: [_timeline_page__WEBPACK_IMPORTED_MODULE_6__["TimelinePage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/yannbf/components/timeline/timeline.page.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/yannbf/components/timeline/timeline.page.ts ***!
    \*******************************************************************/

  /*! exports provided: TimelinePage */

  /***/
  function srcAppPagesYannbfComponentsTimelineTimelinePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimelinePage", function () {
      return TimelinePage;
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


    var _components_yannbf_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../components/yannbf/timeline/timeline.component */
    "./src/app/components/yannbf/timeline/timeline.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TimelinePage_timeline_item_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "timeline-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r262 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", item_r262.color, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "calendar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r262.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r262.content, " ");
      }
    }

    var TimelinePage = /*#__PURE__*/function () {
      function TimelinePage() {
        _classCallCheck(this, TimelinePage);

        this.items = [{
          title: 'Courgette daikon',
          content: "Parsley amaranth tigernut silver beet maize fennel spinach. Ricebean black-eyed pea maize\n                scallion green bean spinach cabbage j\xEDcama bell pepper carrot onion corn plantain garbanzo.\n                Sierra leone bologi komatsuna celery peanut swiss chard silver beet squash dandelion maize\n                chicory burdock tatsoi dulse radish wakame beetroot.",
          icon: 'calendar',
          time: {
            subtitle: '4/16/2013',
            title: '21:30'
          },
          color: '#33FF5E'
        }, {
          title: 'Courgette daikon',
          content: "Parsley amaranth tigernut silver beet maize fennel spinach. Ricebean black-eyed pea maize\n                scallion green bean spinach cabbage j\xEDcama bell pepper carrot onion corn plantain garbanzo.\n                Sierra leone bologi komatsuna celery peanut swiss chard silver beet squash dandelion maize\n                chicory burdock tatsoi dulse radish wakame beetroot.",
          icon: 'calendar',
          time: {
            subtitle: 'January',
            title: '29'
          },
          color: '#FF5733'
        }, {
          title: 'Courgette daikon',
          content: "Parsley amaranth tigernut silver beet maize fennel spinach. Ricebean black-eyed pea maize\n                scallion green bean spinach cabbage j\xEDcama bell pepper carrot onion corn plantain garbanzo.\n                Sierra leone bologi komatsuna celery peanut swiss chard silver beet squash dandelion maize\n                chicory burdock tatsoi dulse radish wakame beetroot.",
          icon: 'calendar',
          time: {
            title: 'Short Text'
          },
          color: '#ff4162'
        }];
      }

      _createClass(TimelinePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TimelinePage;
    }();

    TimelinePage.ɵfac = function TimelinePage_Factory(t) {
      return new (t || TimelinePage)();
    };

    TimelinePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TimelinePage,
      selectors: [["app-timeline"]],
      decls: 9,
      vars: 1,
      consts: [["slot", "start"], ["defaultHref", "/"], [4, "ngFor", "ngForOf"], [1, "icon-timeline", 3, "name"]],
      template: function TimelinePage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Timeline cards");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "timeline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TimelinePage_timeline_item_8_Template, 7, 5, "timeline-item", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _components_yannbf_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_2__["TimelineComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _components_yannbf_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_2__["TimelineItemComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCardHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCardContent"]],
      styles: ["ion-card[_ngcontent-%COMP%] {\n  margin-left: 12%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvdGltZWxpbmUvQzpcXFVzZXJzXFxzYWJhZGlcXERvY3VtZW50c1xcUHJvamV0b3NcXF9pb25pY1xcaW9uaWM0LWNvbXBvbmVudHMvc3JjXFxhcHBcXHBhZ2VzXFx5YW5uYmZcXGNvbXBvbmVudHNcXHRpbWVsaW5lXFx0aW1lbGluZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL3RpbWVsaW5lL3RpbWVsaW5lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy90aW1lbGluZS90aW1lbGluZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMiU7XHJcbn0iLCJpb24tY2FyZCB7XG4gIG1hcmdpbi1sZWZ0OiAxMiU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimelinePage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-timeline',
          templateUrl: './timeline.page.html',
          styleUrls: ['./timeline.page.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-yannbf-components-timeline-timeline-module-es5.js.map