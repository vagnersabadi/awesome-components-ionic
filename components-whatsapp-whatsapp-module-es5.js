function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-whatsapp-whatsapp-module"], {
  /***/
  "./src/app/pages/clones-ui/components/whatsapp/classic/classic.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/clones-ui/components/whatsapp/classic/classic.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: ClassicPageModule */

  /***/
  function srcAppPagesClonesUiComponentsWhatsappClassicClassicModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClassicPageModule", function () {
      return ClassicPageModule;
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


    var _classic_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./classic.page */
    "./src/app/pages/clones-ui/components/whatsapp/classic/classic.page.ts");
    /**
    * Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
    *
    * Copyright © 2019-present Enappd. All rights reserved.
    *
    * This source code is licensed as per the terms found in the
    * LICENSE.md file in the root directory of this source tree.
    */


    var ClassicPageModule = function ClassicPageModule() {
      _classCallCheck(this, ClassicPageModule);
    };

    ClassicPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ClassicPageModule
    });
    ClassicPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ClassicPageModule_Factory(t) {
        return new (t || ClassicPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ClassicPageModule, {
        declarations: [_classic_page__WEBPACK_IMPORTED_MODULE_4__["ClassicPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClassicPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
          declarations: [_classic_page__WEBPACK_IMPORTED_MODULE_4__["ClassicPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/clones-ui/components/whatsapp/classic/classic.page.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/clones-ui/components/whatsapp/classic/classic.page.ts ***!
    \*****************************************************************************/

  /*! exports provided: ClassicPage */

  /***/
  function srcAppPagesClonesUiComponentsWhatsappClassicClassicPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClassicPage", function () {
      return ClassicPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /**
    * Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
    *
    * Copyright © 2019-present Enappd. All rights reserved.
    *
    * This source code is licensed as per the terms found in the
    * LICENSE.md file in the root directory of this source tree.
    */


    var _c0 = ["IonContent"];

    var _c1 = function _c1(a0) {
      return {
        "clubbed": a0
      };
    };

    var _c2 = function _c2(a0, a1, a2) {
      return {
        "sharper": a0,
        "sharper-top": a1,
        "sharper-bottom": a2
      };
    };

    function ClassicPage_div_10_ion_row_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-col", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var i_r5 = ctx_r9.index;
        var chat_r4 = ctx_r9.$implicit;

        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, ctx_r6.msgList[i_r5 + 1] && ctx_r6.msgList[i_r5 + 1].userId != chat_r4.userId || !ctx_r6.msgList[i_r5 + 1]));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](5, _c2, ctx_r6.msgList[i_r5 + 1] && ctx_r6.msgList[i_r5 + 1].userId == chat_r4.userId && ctx_r6.msgList[i_r5 - 1] && ctx_r6.msgList[i_r5 - 1].userId == chat_r4.userId, ctx_r6.msgList[i_r5 - 1] && ctx_r6.msgList[i_r5 - 1].userId == chat_r4.userId, ctx_r6.msgList[i_r5 + 1] && ctx_r6.msgList[i_r5 + 1].userId == chat_r4.userId));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", chat_r4.message, " ");
      }
    }

    function ClassicPage_div_10_ion_row_2_p_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var chat_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](chat_r4.message);
      }
    }

    function ClassicPage_div_10_ion_row_2_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-img", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var chat_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", chat_r4.image);
      }
    }

    function ClassicPage_div_10_ion_row_2_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "video", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "source", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var chat_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", chat_r4.video, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function ClassicPage_div_10_ion_row_2_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 35);
      }
    }

    function ClassicPage_div_10_ion_row_2_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ClassicPage_div_10_ion_row_2_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 38);
      }
    }

    function ClassicPage_div_10_ion_row_2_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var _c3 = function _c3(a0, a1, a2, a3) {
      return {
        "sharper": a0,
        "sharper-top": a1,
        "sharper-bottom": a2,
        "transparent-bg": a3
      };
    };

    function ClassicPage_div_10_ion_row_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-col", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ClassicPage_div_10_ion_row_2_p_5_Template, 2, 1, "p", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ClassicPage_div_10_ion_row_2_div_6_Template, 2, 1, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ClassicPage_div_10_ion_row_2_div_7_Template, 3, 1, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ClassicPage_div_10_ion_row_2_div_8_Template, 1, 0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ClassicPage_div_10_ion_row_2_div_9_Template, 2, 0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ClassicPage_div_10_ion_row_2_div_10_Template, 1, 0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ClassicPage_div_10_ion_row_2_div_11_Template, 2, 0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var i_r5 = ctx_r20.index;
        var chat_r4 = ctx_r20.$implicit;

        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c1, ctx_r7.msgList[i_r5 + 1] && ctx_r7.msgList[i_r5 + 1].userId != chat_r4.userId || !ctx_r7.msgList[i_r5 + 1]));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction4"](11, _c3, ctx_r7.msgList[i_r5 + 1] && ctx_r7.msgList[i_r5 + 1].userId == chat_r4.userId && ctx_r7.msgList[i_r5 - 1] && ctx_r7.msgList[i_r5 - 1].userId == chat_r4.userId, ctx_r7.msgList[i_r5 - 1] && ctx_r7.msgList[i_r5 - 1].userId == chat_r4.userId, ctx_r7.msgList[i_r5 + 1] && ctx_r7.msgList[i_r5 + 1].userId == chat_r4.userId, chat_r4.image || chat_r4.map || chat_r4.video));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !chat_r4.image && !chat_r4.video && !chat_r4.map);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", chat_r4.image);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", chat_r4.video);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", chat_r4.map);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(chat_r4.image || chat_r4.map || chat_r4.video));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", chat_r4.image || chat_r4.map || chat_r4.video);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", chat_r4.image || chat_r4.map || chat_r4.video);
      }
    }

    function ClassicPage_div_10_ion_row_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-col");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-text", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var chat_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](chat_r4.time);
      }
    }

    function ClassicPage_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ClassicPage_div_10_ion_row_1_Template, 9, 9, "ion-row", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ClassicPage_div_10_ion_row_2_Template, 12, 16, "ion-row", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ClassicPage_div_10_ion_row_3_Template, 4, 1, "ion-row", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var chat_r4 = ctx.$implicit;
        var i_r5 = ctx.index;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", chat_r4.userId == ctx_r1.User);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", chat_r4.userId == ctx_r1.toUser);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.msgList[i_r5 + 1] && ctx_r1.msgList[i_r5 + 1].userId != chat_r4.userId || !ctx_r1.msgList[i_r5 + 1]);
      }
    }

    function ClassicPage_ion_row_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-col", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ion-spinner", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ClassicPage_ion_list_18_ion_col_2_ion_icon_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-icon", 52);
      }

      if (rf & 2) {
        var footer_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", footer_r23.icon);
      }
    }

    function ClassicPage_ion_list_18_ion_col_2_ion_thumbnail_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-thumbnail");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-img", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var footer_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", footer_r23.image);
      }
    }

    function ClassicPage_ion_list_18_ion_col_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-label", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClassicPage_ion_list_18_ion_col_2_Template_ion_label_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30);

          var footer_r23 = ctx.$implicit;

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r29.typeSelected(footer_r23);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ClassicPage_ion_list_18_ion_col_2_ion_icon_2_Template, 1, 1, "ion-icon", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ClassicPage_ion_list_18_ion_col_2_ion_thumbnail_3_Template, 2, 1, "ion-thumbnail", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var footer_r23 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", footer_r23.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", footer_r23.image);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](footer_r23.label);
      }
    }

    function ClassicPage_ion_list_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-list", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-row", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ClassicPage_ion_list_18_ion_col_2_Template, 6, 3, "ion-col", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.footerJson)("ngForOf", ctx_r3.index);
      }
    }

    var ClassicPage = /*#__PURE__*/function () {
      function ClassicPage(activRoute, modal) {
        var _this = this;

        _classCallCheck(this, ClassicPage);

        this.activRoute = activRoute;
        this.modal = modal;
        this.user_input = '';
        this.User = 'Me';
        this.toUser = 'HealthBot';
        this.show = false;
        this.show = false;
        this.activRoute.params.subscribe(function (params) {
          _this.paramData = params;
          _this.userName = params.name;
        });
        this.msgList = [{
          userId: 'HealthBot',
          userName: 'HealthBot',
          userAvatar: '../../../../assets/clones/chat/chat/chat3.jpg',
          time: '12:00',
          message: 'Hello, have you seen this great chat UI',
          id: 0
        }, {
          userId: 'Me',
          userName: 'Me',
          userAvatar: this.paramData.image ? this.paramData.image : '../../../../assets/clones/chat/chat/chat5.jpg',
          time: '12:03',
          message: 'Yeah, I see this. This looks great. ',
          id: 1
        }, {
          userId: 'HealthBot',
          userName: 'HealthBot',
          userAvatar: '../../../../assets/clones/chat/chat/chat3.jpg',
          time: '12:05',
          message: '... and this is absolutely free, anyone can use',
          id: 3
        }, {
          userId: 'Me',
          userName: 'Me',
          userAvatar: '../../../../assets/clones/chat/chat/chat5.jpg',
          time: '12:06',
          message: 'wow ! that\'s great. Love to see more of such chat themes',
          id: 4
        }, {
          userId: 'HealthBot',
          userName: 'HealthBot',
          userAvatar: '../../../../assets/clones/chat/chat/chat3.jpg',
          message: 'Oh there are several other designs. Check all their designs on their website enappd.com',
          id: 5
        }];
        this.footerJson = [{
          'icon': 'images',
          'label': 'Image'
        }, {
          'icon': 'call',
          'label': 'Phone'
        }, {
          'icon': 'mail-unread',
          'label': 'Red'
        }, {
          'label': 'Document',
          'icon': 'radio-button-on'
        }, {
          'icon': 'pin',
          'label': 'Position'
        }, {
          'icon': 'videocam',
          'label': 'Video'
        }];
      }

      _createClass(ClassicPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "typeSelected",
        value: function typeSelected(type) {
          var _this2 = this;

          console.log(type);

          if (this.user_input === '' && type.icon === 'images') {
            this.msgList.push({
              userId: this.toUser,
              userName: this.toUser,
              time: '12:01',
              image: '../../../../assets/clones/chat/chat/chat3.jpg',
              id: this.msgList.length + 1
            });
            this.user_input = '';
            this.show = false;
            this.scrollDown();
            setTimeout(function () {
              _this2.senderSends();
            }, 500);
          } else if (this.user_input === '' && type.icon === 'videocam') {
            this.msgList.push({
              userId: this.toUser,
              userName: this.toUser,
              time: '12:01',
              video: '../../../../assets/clones/chat/chat/video.mp4',
              id: this.msgList.length + 1
            });
            this.user_input = '';
            this.show = false;
            this.scrollDown();
            setTimeout(function () {
              _this2.senderSends();
            }, 500);
          } else if (this.user_input === '' && type.icon === 'pin') {
            this.msgList.push({
              userId: this.toUser,
              userName: this.toUser,
              time: '12:01',
              map: {
                lat: 52.678418,
                lng: 7.809007
              },
              id: this.msgList.length + 1
            });
            this.user_input = '';
            this.show = false;
            this.scrollDown();
            setTimeout(function () {
              _this2.senderSends();
            }, 500);
          }
        }
      }, {
        key: "toggleList",
        value: function toggleList() {
          this.show = !this.show;
          console.log(this.show);
          this.scrollDown();
        }
      }, {
        key: "sendMsg",
        value: function sendMsg() {
          var _this3 = this;

          if (this.user_input !== '') {
            this.msgList.push({
              userId: this.toUser,
              userName: this.toUser,
              userAvatar: this.paramData.image ? this.paramData.image : '../../../../assets/clones/chat/chat/chat3.jpg',
              time: '12:01',
              message: this.user_input,
              id: this.msgList.length + 1
            });
            this.user_input = '';
            this.scrollDown();
            setTimeout(function () {
              _this3.senderSends();
            }, 500);
            this.show = false;
          }
        }
      }, {
        key: "senderSends",
        value: function senderSends() {
          var _this4 = this;

          this.loader = true;
          setTimeout(function () {
            _this4.msgList.push({
              userId: _this4.User,
              userName: _this4.User,
              userAvatar: '../../../../assets/clones/chat/chat/chat5.jpg',
              message: 'Sorry, didn\'t get what you said. Can you repeat that please'
            });

            _this4.loader = false;

            _this4.scrollDown();
          }, 2000);
          this.scrollDown();
        }
      }, {
        key: "scrollDown",
        value: function scrollDown() {
          var _this5 = this;

          setTimeout(function () {
            _this5.content.scrollToBottom(50);
          }, 200);
        }
      }, {
        key: "userTyping",
        value: function userTyping(event) {
          this.show = false;
          console.log(event);
          this.start_typing = event.target.value;
          this.scrollDown();
        }
      }, {
        key: "focusFunction",
        value: function focusFunction(event) {
          this.show = false;
          console.log(event);
        }
      }, {
        key: "something",
        value: function something($event) {
          $event.preventDefault();
          console.log($event);
        }
      }]);

      return ClassicPage;
    }();

    ClassicPage.ɵfac = function ClassicPage_Factory(t) {
      return new (t || ClassicPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["ModalController"]));
    };

    ClassicPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ClassicPage,
      selectors: [["app-classic"]],
      viewQuery: function ClassicPage_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
        }
      },
      decls: 19,
      vars: 4,
      consts: [["translucent", ""], [1, "padding_toolbar"], ["slot", "start"], ["slot", "icon-only", "fill", "clear", 3, "click"], ["name", "arrow-back"], ["color", "medium", "text-center", ""], ["IonContent", ""], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "footer_item"], ["slot", "end", "name", "send", "expand", "icon-only", 1, "footerIconSend", 3, "click", "mousedown"], ["type", "text", "placeholder", "Write a message...", 1, "input-box", 3, "ngModel", "ngModelChange", "keypress", "ionFocus"], ["slot", "end", "name", "add", "expand", "icon-only", 1, "footerIcon", 3, "click"], ["class", "footer-options", 4, "ngIf"], ["no-padding", "", 1, "right", 3, "ngClass"], [1, "imageAvatarRight"], ["color", "light"], [1, "chatDiv", 3, "ngClass"], ["text-wrap", "", "padding", ""], [1, "corner-parent-right"], [1, "corner-child-right"], ["no-padding", "", 1, "left", 3, "ngClass"], [1, "imageAvatarLeft"], ["text-wrap", "", "padding", "", 4, "ngIf"], ["class", "imageFrom_footer", 4, "ngIf"], ["class", "imageFrom_footer video", 4, "ngIf"], ["class", "imageFrom_footerMap", 4, "ngIf"], ["class", "corner-parent-left", 4, "ngIf"], ["class", "corner-parent-left-image", 4, "ngIf"], ["class", "corner-child-left-image", 4, "ngIf"], [1, "imageFrom_footer"], [1, "imageFrom_footer", 3, "src"], [1, "imageFrom_footer", "video"], ["controls", "", 1, "videoFrom_footer"], ["type", "video/mp4", 3, "src"], [1, "imageFrom_footerMap"], [1, "corner-parent-left"], [1, "corner-child-left"], [1, "corner-parent-left-image"], [1, "corner-child-left-image"], [1, "child"], [1, "chat-time"], ["no-padding", "", 1, "loading-col"], [1, "chatDivLoader"], ["text-wrap", "", "padding", "", 1, "loader-text"], ["name", "dots", "color", "dark"], [1, "footer-options"], [1, "footer_row"], ["size", "4", "class", "footer_col", 4, "ngFor", "ngForOf"], ["size", "4", 1, "footer_col"], [1, "footer_label", 3, "click"], ["expand", "icon-only", "class", "footerIcon", 3, "name", 4, "ngIf"], ["expand", "icon-only", 1, "footerIcon", 3, "name"], [3, "src"]],
      template: function ClassicPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClassicPage_Template_ion_button_click_3_listener() {
            return ctx.modal.dismiss();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-title", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Classic");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-content", null, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ClassicPage_div_10_Template, 4, 3, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ClassicPage_ion_row_11_Template, 9, 0, "ion-row", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-item", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClassicPage_Template_ion_icon_click_15_listener() {
            return ctx.sendMsg();
          })("mousedown", function ClassicPage_Template_ion_icon_mousedown_15_listener($event) {
            return ctx.something($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ClassicPage_Template_ion_input_ngModelChange_16_listener($event) {
            return ctx.user_input = $event;
          })("keypress", function ClassicPage_Template_ion_input_keypress_16_listener($event) {
            return ctx.userTyping($event);
          })("ionFocus", function ClassicPage_Template_ion_input_ionFocus_16_listener($event) {
            return ctx.focusFunction($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClassicPage_Template_ion_icon_click_17_listener() {
            return ctx.toggleList();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ClassicPage_ion_list_18_Template, 3, 2, "ion-list", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.msgList);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loader);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user_input);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.show);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonCol"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonImg"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonSpinner"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonThumbnail"]],
      styles: ["ion-title[_ngcontent-%COMP%] {\n  font-size: 26px;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: #e8e8f8;\n}\n\nion-header[_ngcontent-%COMP%] {\n  --background: #5b2573;\n}\n\nion-toolbar[_ngcontent-%COMP%], ion-item[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n\nion-list[_ngcontent-%COMP%] {\n  background: transparent;\n  margin-bottom: 0;\n  padding: 20px 10px 0 10px;\n}\n\n.imageAvatarRight[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n}\n\n.imageAvatarRight[_ngcontent-%COMP%]   .imageAvatarBottom[_ngcontent-%COMP%] {\n  max-width: 214px;\n  align-items: flex-end;\n  display: flex;\n  border-radius: 50%;\n  position: relative;\n  top: 6px;\n  z-index: 11;\n}\n\n.imageAvatarRight[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.imageAvatarRight[_ngcontent-%COMP%]   .imageAvatarBottomIcon[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50px;\n  background: var(--ion-color-tertiary-tint);\n  position: absolute;\n  top: 17%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  right: 10.1%;\n  color: white;\n}\n\n.imageAvatarRight[_ngcontent-%COMP%]   .chatDiv[_ngcontent-%COMP%] {\n  text-align: justify;\n  position: relative;\n  background: white;\n  border-radius: 6px;\n  border-bottom-left-radius: 0;\n  max-width: 72vw;\n  color: #444;\n}\n\n.imageAvatarRight[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n}\n\n.imageAvatarRight[_ngcontent-%COMP%]   .sharper.chatDiv[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n\n.imageAvatarRight[_ngcontent-%COMP%]   .sharper-bottom.chatDiv[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.imageAvatarRight[_ngcontent-%COMP%]   .sharper-top.chatDiv[_ngcontent-%COMP%] {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.imageAvatarLeft[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-end;\n}\n\n.imageAvatarLeft[_ngcontent-%COMP%]   .imageAvatarBottom[_ngcontent-%COMP%] {\n  max-width: 214px;\n  align-items: flex-end;\n  display: flex;\n  border-radius: 50%;\n  position: relative;\n  top: 6px;\n  z-index: 11;\n}\n\n.imageAvatarLeft[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.imageAvatarLeft[_ngcontent-%COMP%]   .imageAvatarBottomIcon[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50px;\n  background: var(--ion-color-tertiary-tint);\n  position: absolute;\n  top: 17%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  right: 10.1%;\n  color: white;\n}\n\n.imageAvatarLeft[_ngcontent-%COMP%]   .chatDiv[_ngcontent-%COMP%] {\n  text-align: left;\n  position: relative;\n  background: #b9a3e8;\n  border-radius: 6px;\n  border-bottom-right-radius: 0;\n  max-width: 72vw;\n  color: white;\n  font-weight: 500;\n  padding: 8px;\n}\n\n.imageAvatarLeft[_ngcontent-%COMP%]   .chatDiv.transparent-bg[_ngcontent-%COMP%] {\n  background: transparent;\n}\n\n.imageAvatarLeft[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n}\n\n.imageAvatarLeft[_ngcontent-%COMP%]   ion-img.imageFrom_footer[_ngcontent-%COMP%] {\n  width: calc(100% + 0px);\n  height: auto;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.imageAvatarLeft[_ngcontent-%COMP%]   .imageFrom_footer[_ngcontent-%COMP%] {\n  width: calc(72vw + 20px);\n}\n\n.imageAvatarLeft[_ngcontent-%COMP%]   .imageFrom_footer.video[_ngcontent-%COMP%] {\n  background: black;\n}\n\n.imageAvatarLeft[_ngcontent-%COMP%]   .imageFrom_footerMap[_ngcontent-%COMP%] {\n  width: calc(72vw + 20px);\n}\n\n.imageAvatarLeft[_ngcontent-%COMP%]   .videoFrom_footer[_ngcontent-%COMP%] {\n  width: calc(72vw + 20px);\n  -o-object-fit: fill;\n  object-fit: fill;\n  height: auto;\n  border-radius: 5px;\n  display: block;\n}\n\n.imageAvatarLeft[_ngcontent-%COMP%]   .sharper.chatDiv[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n\n.imageAvatarLeft[_ngcontent-%COMP%]   .sharper-bottom.chatDiv[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.imageAvatarLeft[_ngcontent-%COMP%]   .sharper-top.chatDiv[_ngcontent-%COMP%] {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\nion-buttons[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n\nion-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n\nion-fab-button[_ngcontent-%COMP%] {\n  width: 47px !important;\n  height: 47px !important;\n}\n\nion-fab[_ngcontent-%COMP%] {\n  bottom: -22px !important;\n}\n\n.footerIcon[_ngcontent-%COMP%] {\n  color: #b39ddb;\n  font-size: 2.5em;\n}\n\n.footerIconSend[_ngcontent-%COMP%] {\n  color: rgba(161, 169, 187, 0.92);\n}\n\nion-input[_ngcontent-%COMP%] {\n  --placeholder-color: var(--ion-color-medium-tint);\n}\n\n.chatDivLoader[_ngcontent-%COMP%] {\n  position: relative;\n  background: white;\n  border-radius: 6px;\n  min-width: 80px;\n  max-width: 80px;\n  display: flex;\n  align-items: center;\n  color: white;\n  padding: 2px;\n  display: flex;\n  justify-content: center;\n  border-bottom-left-radius: 0;\n  margin-bottom: 15px;\n}\n\n.chatDivLoader[_ngcontent-%COMP%]   .corner-parent-right[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n  background: transparent;\n  position: absolute;\n  left: -16px;\n  bottom: 0;\n  overflow: hidden;\n  border-radius: 0;\n}\n\n.chatDivLoader[_ngcontent-%COMP%]   .corner-parent-right[_ngcontent-%COMP%]   .corner-child-right[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n  border-top: 14px solid transparent;\n  border-right: 19px solid white;\n  border-bottom: 2px solid white;\n}\n\nion-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--ion-color-medium);\n}\n\nion-col[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.imageAvatarBottomLoader[_ngcontent-%COMP%] {\n  max-width: 214px;\n  align-items: flex-end;\n  display: flex;\n  border-radius: 50%;\n  position: relative;\n  top: 8px;\n  z-index: 11;\n}\n\n.hidden[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n.loading-col[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n  padding-left: 20px;\n}\n\n.right[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n  padding-left: 20px;\n}\n\n.left[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  padding-right: 20px;\n}\n\n.clubbed[_ngcontent-%COMP%]   .imageAvatarRight[_ngcontent-%COMP%]   .chatDiv[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n\n.clubbed[_ngcontent-%COMP%]   .imageAvatarRight[_ngcontent-%COMP%]   .chatDiv[_ngcontent-%COMP%]   .corner-parent-right[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n  background: transparent;\n  position: absolute;\n  left: -16px;\n  bottom: 0;\n  overflow: hidden;\n  border-radius: 0;\n}\n\n.clubbed[_ngcontent-%COMP%]   .imageAvatarRight[_ngcontent-%COMP%]   .chatDiv[_ngcontent-%COMP%]   .corner-parent-right[_ngcontent-%COMP%]   .corner-child-right[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n  border-top: 14px solid transparent;\n  border-right: 19px solid white;\n  border-bottom: 2px solid white;\n}\n\n.clubbed[_ngcontent-%COMP%]   .imageAvatarLeft[_ngcontent-%COMP%]   .chatDiv[_ngcontent-%COMP%]   .corner-parent-left[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n  background: transparent;\n  position: absolute;\n  right: -16px;\n  bottom: 0;\n  overflow: hidden;\n  border-radius: 0;\n}\n\n.clubbed[_ngcontent-%COMP%]   .imageAvatarLeft[_ngcontent-%COMP%]   .chatDiv[_ngcontent-%COMP%]   .corner-parent-left[_ngcontent-%COMP%]   .corner-child-left[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n  border-top: 14px solid transparent;\n  border-right: 10px solid transparent;\n  border-left: 17px solid #b9a3e8;\n  border-bottom: 2px solid #b9a3e8;\n}\n\n.input-box[_ngcontent-%COMP%] {\n  color: var(--ion-color-dark-shade);\n}\n\nion-item.footer_item[_ngcontent-%COMP%] {\n  --inner-border-width: 0px 0px 0px 0px;\n  --highlight-color-valid: var(--ion-color-tertiary-contrast) !important;\n}\n\n.footer-options[_ngcontent-%COMP%] {\n  background: #e8e8f8;\n}\n\n.footer_row[_ngcontent-%COMP%] {\n  padding: 16px 0px 0px 0px;\n  background: transparent;\n}\n\n.footer_row[_ngcontent-%COMP%]   .footer_label[_ngcontent-%COMP%] {\n  padding-bottom: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding-top: 10px;\n}\n\nagm-map[_ngcontent-%COMP%] {\n  height: calc(72vw + 20px);\n  width: calc(72vw + 20px);\n}\n\n.chat-time[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-weight: bold;\n  font-size: 11px;\n  color: #888;\n}\n\n.corner-parent-left-image[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -20px;\n  width: 20px;\n  height: calc(100% - 20px);\n  top: 0;\n  background: #e8e8f8;\n}\n\n.corner-child-left-image[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% - 20px);\n  width: 20px;\n  height: 20px;\n  right: -20px;\n}\n\n.corner-child-left-image[_ngcontent-%COMP%]   .child[_ngcontent-%COMP%] {\n  border-right: 21px solid #e8e8f8;\n  border-bottom: 15px solid transparent;\n}\n\n.transparent-bg[_ngcontent-%COMP%] {\n  background: transparent;\n}\n\n.loader-text[_ngcontent-%COMP%] {\n  padding: 0 20px 0 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2xvbmVzLXVpL2NvbXBvbmVudHMvd2hhdHNhcHAvY2xhc3NpYy9DOlxcVXNlcnNcXFZhZ25lciBTYWJhZGlcXERvY3VtZW50c1xcUHJvamVjdHNcXF9NeVxcYXdlc29tZS1jb21wb25lbnRzLWlvbmljL3NyY1xcYXBwXFxwYWdlc1xcY2xvbmVzLXVpXFxjb21wb25lbnRzXFx3aGF0c2FwcFxcY2xhc3NpY1xcY2xhc3NpYy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Nsb25lcy11aS9jb21wb25lbnRzL3doYXRzYXBwL2NsYXNzaWMvY2xhc3NpYy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBRENBO0VBQ0UscUJBQUE7QUNFRjs7QURBQTs7RUFFRSx5QkFBQTtBQ0dGOztBRERBO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDSUY7O0FERkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQ0tGOztBREpFO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUNNSjs7QURKRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNNSjs7QURKRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNNSjs7QURKRTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ01KOztBREpFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNNSjs7QURISTtFQUNFLGdCQUFBO0FDS047O0FEREk7RUFDRSw0QkFBQTtFQUNBLDZCQUFBO0FDR047O0FEQ0k7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0FDQ047O0FESUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQ0RGOztBREVFO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUNBSjs7QURFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNBSjs7QURFRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0FKOztBRENJO0VBQ0UsdUJBQUE7QUNDTjs7QURFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQUo7O0FERUU7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDQUo7O0FERUU7RUFDRSx3QkFBQTtBQ0FKOztBRENJO0VBQ0UsaUJBQUE7QUNDTjs7QURFRTtFQUNFLHdCQUFBO0FDQUo7O0FERUU7RUFDRSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQUo7O0FER0k7RUFDRSxnQkFBQTtBQ0ROOztBREtJO0VBQ0UsNEJBQUE7RUFDQSw2QkFBQTtBQ0hOOztBRE9JO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtBQ0xOOztBRFVFO0VBQ0UsZUFBQTtBQ1BKOztBRFVBO0VBQ0UsZUFBQTtBQ1BGOztBRFNBO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtBQ05GOztBRFFBO0VBQ0Usd0JBQUE7QUNMRjs7QURPQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ0pGOztBRE1BO0VBQ0UsZ0NBQUE7QUNIRjs7QURLQTtFQUNFLGlEQUFBO0FDRkY7O0FESUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQ0RGOztBREVFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQUo7O0FEQ0k7RUFDRSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtBQ0NOOztBREdBO0VBQ0UsZUFBQTtFQUNBLDhCQUFBO0FDQUY7O0FERUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBRENBO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUNFRjs7QURBQTtFQUNFLGtCQUFBO0FDR0Y7O0FEREE7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0FDSUY7O0FEREE7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0FDSUY7O0FERkE7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FDS0Y7O0FEQUk7RUFDRSxZQUFBO0FDR047O0FERE07RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNHUjs7QURGUTtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0FDSVY7O0FESU07RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNGUjs7QURHUTtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7QUNEVjs7QURPQTtFQUNFLGtDQUFBO0FDSkY7O0FETUE7RUFDRSxxQ0FBQTtFQUNBLHNFQUFBO0FDSEY7O0FES0E7RUFDRSxtQkFBQTtBQ0ZGOztBRElBO0VBQ0UseUJBQUE7RUFDQSx1QkFBQTtBQ0RGOztBREVFO0VBQ0Usb0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURHQTtFQUNFLHlCQUFBO0VBQ0Esd0JBQUE7QUNBRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxNQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURDQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNFRjs7QURERTtFQUNFLGdDQUFBO0VBQ0EscUNBQUE7QUNHSjs7QURBQTtFQUNFLHVCQUFBO0FDR0Y7O0FEREE7RUFDRSxpQ0FBQTtBQ0lGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2xvbmVzLXVpL2NvbXBvbmVudHMvd2hhdHNhcHAvY2xhc3NpYy9jbGFzc2ljLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAyNnB4O1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZThlOGY4O1xyXG59XHJcbmlvbi1oZWFkZXIge1xyXG4gIC0tYmFja2dyb3VuZDogIzViMjU3MztcclxufVxyXG5pb24tdG9vbGJhcixcclxuaW9uLWl0ZW0ge1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuaW9uLWxpc3Qge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgcGFkZGluZzogMjBweCAxMHB4IDAgMTBweDtcclxufVxyXG4uaW1hZ2VBdmF0YXJSaWdodCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgLmltYWdlQXZhdGFyQm90dG9tIHtcclxuICAgIG1heC13aWR0aDogMjE0cHg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA2cHg7XHJcbiAgICB6LWluZGV4OiAxMTtcclxuICB9XHJcbiAgLmF2YXRhciB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5pbWFnZUF2YXRhckJvdHRvbUljb24ge1xyXG4gICAgd2lkdGg6IDEycHg7XHJcbiAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNyU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcmlnaHQ6IDEwLjElO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuY2hhdERpdiB7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgbWF4LXdpZHRoOiA3MnZ3O1xyXG4gICAgY29sb3I6ICM0NDQ7XHJcbiAgfVxyXG4gIGlvbi1pbWcge1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgfVxyXG4gIC5zaGFycGVyIHtcclxuICAgICYuY2hhdERpdiB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zaGFycGVyLWJvdHRvbSB7XHJcbiAgICAmLmNoYXREaXYge1xyXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIH1cclxuICB9XHJcbiAgLnNoYXJwZXItdG9wIHtcclxuICAgICYuY2hhdERpdiB7XHJcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmltYWdlQXZhdGFyTGVmdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAuaW1hZ2VBdmF0YXJCb3R0b20ge1xyXG4gICAgbWF4LXdpZHRoOiAyMTRweDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDZweDtcclxuICAgIHotaW5kZXg6IDExO1xyXG4gIH1cclxuICAuYXZhdGFyIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgLmltYWdlQXZhdGFyQm90dG9tSWNvbiB7XHJcbiAgICB3aWR0aDogMTJweDtcclxuICAgIGhlaWdodDogMTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktdGludCk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE3JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICByaWdodDogMTAuMSU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5jaGF0RGl2IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYjlhM2U4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICBtYXgtd2lkdGg6IDcydnc7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgJi50cmFuc3BhcmVudC1iZyB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG4gIH1cclxuICBpb24taW1nIHtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gIH1cclxuICBpb24taW1nLmltYWdlRnJvbV9mb290ZXIge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDBweCk7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcbiAgLmltYWdlRnJvbV9mb290ZXIge1xyXG4gICAgd2lkdGg6IGNhbGMoNzJ2dyArIDIwcHgpO1xyXG4gICAgJi52aWRlbyB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgfVxyXG4gIH1cclxuICAuaW1hZ2VGcm9tX2Zvb3Rlck1hcCB7XHJcbiAgICB3aWR0aDogY2FsYyg3MnZ3ICsgMjBweCk7XHJcbiAgfVxyXG4gIC52aWRlb0Zyb21fZm9vdGVyIHtcclxuICAgIHdpZHRoOiBjYWxjKDcydncgKyAyMHB4KTtcclxuICAgIC1vLW9iamVjdC1maXQ6IGZpbGw7XHJcbiAgICBvYmplY3QtZml0OiBmaWxsO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC5zaGFycGVyIHtcclxuICAgICYuY2hhdERpdiB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zaGFycGVyLWJvdHRvbSB7XHJcbiAgICAmLmNoYXREaXYge1xyXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIH1cclxuICB9XHJcbiAgLnNoYXJwZXItdG9wIHtcclxuICAgICYuY2hhdERpdiB7XHJcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5pb24tYnV0dG9ucyB7XHJcbiAgaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gIH1cclxufVxyXG5pb24tdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5pb24tZmFiLWJ1dHRvbiB7XHJcbiAgd2lkdGg6IDQ3cHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDQ3cHggIWltcG9ydGFudDtcclxufVxyXG5pb24tZmFiIHtcclxuICBib3R0b206IC0yMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZvb3Rlckljb24ge1xyXG4gIGNvbG9yOiAjYjM5ZGRiO1xyXG4gIGZvbnQtc2l6ZTogMi41ZW07XHJcbn1cclxuLmZvb3Rlckljb25TZW5kIHtcclxuICBjb2xvcjogcmdiYSgxNjEsIDE2OSwgMTg3LCAwLjkyKTtcclxufVxyXG5pb24taW5wdXQge1xyXG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XHJcbn1cclxuLmNoYXREaXZMb2FkZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgbWluLXdpZHRoOiA4MHB4O1xyXG4gIG1heC13aWR0aDogODBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDJweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAuY29ybmVyLXBhcmVudC1yaWdodCB7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLTE2cHg7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIC5jb3JuZXItY2hpbGQtcmlnaHQge1xyXG4gICAgICB3aWR0aDogMDtcclxuICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICBib3JkZXItdG9wOiAxNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDE5cHggc29saWQgd2hpdGU7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuaW9uLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbn1cclxuaW9uLWNvbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5pbWFnZUF2YXRhckJvdHRvbUxvYWRlciB7XHJcbiAgbWF4LXdpZHRoOiAyMTRweDtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogOHB4O1xyXG4gIHotaW5kZXg6IDExO1xyXG59XHJcbi5oaWRkZW4ge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG4ubG9hZGluZy1jb2wge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5yaWdodCB7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG4ubGVmdCB7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uY2x1YmJlZCB7XHJcbiAgLmltYWdlQXZhdGFyUmlnaHQge1xyXG4gICAgLmNoYXREaXYge1xyXG4gICAgICBwYWRkaW5nOiA4cHg7XHJcblxyXG4gICAgICAuY29ybmVyLXBhcmVudC1yaWdodCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAtMTZweDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgIC5jb3JuZXItY2hpbGQtcmlnaHQge1xyXG4gICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgICBib3JkZXItdG9wOiAxNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxOXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmltYWdlQXZhdGFyTGVmdCB7XHJcbiAgICAuY2hhdERpdiB7XHJcbiAgICAgIC5jb3JuZXItcGFyZW50LWxlZnQge1xyXG4gICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICB3aWR0aDogMTZweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IC0xNnB4O1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgLmNvcm5lci1jaGlsZC1sZWZ0IHtcclxuICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDogMTRweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGJvcmRlci1sZWZ0OiAxN3B4IHNvbGlkICNiOWEzZTg7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2I5YTNlODtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLmlucHV0LWJveCB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXNoYWRlKTtcclxufVxyXG5pb24taXRlbS5mb290ZXJfaXRlbSB7XHJcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweCAwcHggMHB4IDBweDtcclxuICAtLWhpZ2hsaWdodC1jb2xvci12YWxpZDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0KSAhaW1wb3J0YW50O1xyXG59XHJcbi5mb290ZXItb3B0aW9ucyB7XHJcbiAgYmFja2dyb3VuZDogI2U4ZThmODtcclxufVxyXG4uZm9vdGVyX3JvdyB7XHJcbiAgcGFkZGluZzogMTZweCAwcHggMHB4IDBweDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAuZm9vdGVyX2xhYmVsIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICB9XHJcbn1cclxuYWdtLW1hcCB7XHJcbiAgaGVpZ2h0OiBjYWxjKDcydncgKyAyMHB4KTtcclxuICB3aWR0aDogY2FsYyg3MnZ3ICsgMjBweCk7XHJcbn1cclxuLmNoYXQtdGltZSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgY29sb3I6ICM4ODg7XHJcbn1cclxuXHJcbi5jb3JuZXItcGFyZW50LWxlZnQtaW1hZ2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogLTIwcHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyMHB4KTtcclxuICB0b3A6IDA7XHJcbiAgYmFja2dyb3VuZDogI2U4ZThmODtcclxufVxyXG4uY29ybmVyLWNoaWxkLWxlZnQtaW1hZ2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IGNhbGMoMTAwJSAtIDIwcHgpO1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICByaWdodDogLTIwcHg7XHJcbiAgLmNoaWxkIHtcclxuICAgIGJvcmRlci1yaWdodDogMjFweCBzb2xpZCAjZThlOGY4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICB9XHJcbn1cclxuLnRyYW5zcGFyZW50LWJnIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG4ubG9hZGVyLXRleHQge1xyXG4gIHBhZGRpbmc6IDAgMjBweCAwIDEwcHggIWltcG9ydGFudDtcclxufVxyXG4iLCJpb24tdGl0bGUge1xuICBmb250LXNpemU6IDI2cHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZThlOGY4O1xufVxuXG5pb24taGVhZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNWIyNTczO1xufVxuXG5pb24tdG9vbGJhcixcbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZzogMjBweCAxMHB4IDAgMTBweDtcbn1cblxuLmltYWdlQXZhdGFyUmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuLmltYWdlQXZhdGFyUmlnaHQgLmltYWdlQXZhdGFyQm90dG9tIHtcbiAgbWF4LXdpZHRoOiAyMTRweDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA2cHg7XG4gIHotaW5kZXg6IDExO1xufVxuLmltYWdlQXZhdGFyUmlnaHQgLmF2YXRhciB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmltYWdlQXZhdGFyUmlnaHQgLmltYWdlQXZhdGFyQm90dG9tSWNvbiB7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE3JTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHJpZ2h0OiAxMC4xJTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmltYWdlQXZhdGFyUmlnaHQgLmNoYXREaXYge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gIG1heC13aWR0aDogNzJ2dztcbiAgY29sb3I6ICM0NDQ7XG59XG4uaW1hZ2VBdmF0YXJSaWdodCBpb24taW1nIHtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbn1cbi5pbWFnZUF2YXRhclJpZ2h0IC5zaGFycGVyLmNoYXREaXYge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuLmltYWdlQXZhdGFyUmlnaHQgLnNoYXJwZXItYm90dG9tLmNoYXREaXYge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbn1cbi5pbWFnZUF2YXRhclJpZ2h0IC5zaGFycGVyLXRvcC5jaGF0RGl2IHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG59XG5cbi5pbWFnZUF2YXRhckxlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG4uaW1hZ2VBdmF0YXJMZWZ0IC5pbWFnZUF2YXRhckJvdHRvbSB7XG4gIG1heC13aWR0aDogMjE0cHg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNnB4O1xuICB6LWluZGV4OiAxMTtcbn1cbi5pbWFnZUF2YXRhckxlZnQgLmF2YXRhciB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmltYWdlQXZhdGFyTGVmdCAuaW1hZ2VBdmF0YXJCb3R0b21JY29uIHtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTclO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcmlnaHQ6IDEwLjElO1xuICBjb2xvcjogd2hpdGU7XG59XG4uaW1hZ2VBdmF0YXJMZWZ0IC5jaGF0RGl2IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjYjlhM2U4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICBtYXgtd2lkdGg6IDcydnc7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogOHB4O1xufVxuLmltYWdlQXZhdGFyTGVmdCAuY2hhdERpdi50cmFuc3BhcmVudC1iZyB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLmltYWdlQXZhdGFyTGVmdCBpb24taW1nIHtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbn1cbi5pbWFnZUF2YXRhckxlZnQgaW9uLWltZy5pbWFnZUZyb21fZm9vdGVyIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDBweCk7XG4gIGhlaWdodDogYXV0bztcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4uaW1hZ2VBdmF0YXJMZWZ0IC5pbWFnZUZyb21fZm9vdGVyIHtcbiAgd2lkdGg6IGNhbGMoNzJ2dyArIDIwcHgpO1xufVxuLmltYWdlQXZhdGFyTGVmdCAuaW1hZ2VGcm9tX2Zvb3Rlci52aWRlbyB7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuLmltYWdlQXZhdGFyTGVmdCAuaW1hZ2VGcm9tX2Zvb3Rlck1hcCB7XG4gIHdpZHRoOiBjYWxjKDcydncgKyAyMHB4KTtcbn1cbi5pbWFnZUF2YXRhckxlZnQgLnZpZGVvRnJvbV9mb290ZXIge1xuICB3aWR0aDogY2FsYyg3MnZ3ICsgMjBweCk7XG4gIC1vLW9iamVjdC1maXQ6IGZpbGw7XG4gIG9iamVjdC1maXQ6IGZpbGw7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5pbWFnZUF2YXRhckxlZnQgLnNoYXJwZXIuY2hhdERpdiB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4uaW1hZ2VBdmF0YXJMZWZ0IC5zaGFycGVyLWJvdHRvbS5jaGF0RGl2IHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG59XG4uaW1hZ2VBdmF0YXJMZWZ0IC5zaGFycGVyLXRvcC5jaGF0RGl2IHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG59XG5cbmlvbi1idXR0b25zIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG5pb24tdGl0bGUge1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgd2lkdGg6IDQ3cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0N3B4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1mYWIge1xuICBib3R0b206IC0yMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5mb290ZXJJY29uIHtcbiAgY29sb3I6ICNiMzlkZGI7XG4gIGZvbnQtc2l6ZTogMi41ZW07XG59XG5cbi5mb290ZXJJY29uU2VuZCB7XG4gIGNvbG9yOiByZ2JhKDE2MSwgMTY5LCAxODcsIDAuOTIpO1xufVxuXG5pb24taW5wdXQge1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xufVxuXG4uY2hhdERpdkxvYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICBtYXgtd2lkdGg6IDgwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5jaGF0RGl2TG9hZGVyIC5jb3JuZXItcGFyZW50LXJpZ2h0IHtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTZweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTE2cHg7XG4gIGJvdHRvbTogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5jaGF0RGl2TG9hZGVyIC5jb3JuZXItcGFyZW50LXJpZ2h0IC5jb3JuZXItY2hpbGQtcmlnaHQge1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItdG9wOiAxNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDE5cHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcbn1cblxuaW9uLXRleHQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cblxuaW9uLWNvbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW1hZ2VBdmF0YXJCb3R0b21Mb2FkZXIge1xuICBtYXgtd2lkdGg6IDIxNHB4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDhweDtcbiAgei1pbmRleDogMTE7XG59XG5cbi5oaWRkZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5sb2FkaW5nLWNvbCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4ucmlnaHQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLmxlZnQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG4uY2x1YmJlZCAuaW1hZ2VBdmF0YXJSaWdodCAuY2hhdERpdiB7XG4gIHBhZGRpbmc6IDhweDtcbn1cbi5jbHViYmVkIC5pbWFnZUF2YXRhclJpZ2h0IC5jaGF0RGl2IC5jb3JuZXItcGFyZW50LXJpZ2h0IHtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTZweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTE2cHg7XG4gIGJvdHRvbTogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5jbHViYmVkIC5pbWFnZUF2YXRhclJpZ2h0IC5jaGF0RGl2IC5jb3JuZXItcGFyZW50LXJpZ2h0IC5jb3JuZXItY2hpbGQtcmlnaHQge1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItdG9wOiAxNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDE5cHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcbn1cbi5jbHViYmVkIC5pbWFnZUF2YXRhckxlZnQgLmNoYXREaXYgLmNvcm5lci1wYXJlbnQtbGVmdCB7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMTZweDtcbiAgYm90dG9tOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuLmNsdWJiZWQgLmltYWdlQXZhdGFyTGVmdCAuY2hhdERpdiAuY29ybmVyLXBhcmVudC1sZWZ0IC5jb3JuZXItY2hpbGQtbGVmdCB7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci10b3A6IDE0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWxlZnQ6IDE3cHggc29saWQgI2I5YTNlODtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNiOWEzZTg7XG59XG5cbi5pbnB1dC1ib3gge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstc2hhZGUpO1xufVxuXG5pb24taXRlbS5mb290ZXJfaXRlbSB7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XG4gIC0taGlnaGxpZ2h0LWNvbG9yLXZhbGlkOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QpICFpbXBvcnRhbnQ7XG59XG5cbi5mb290ZXItb3B0aW9ucyB7XG4gIGJhY2tncm91bmQ6ICNlOGU4Zjg7XG59XG5cbi5mb290ZXJfcm93IHtcbiAgcGFkZGluZzogMTZweCAwcHggMHB4IDBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uZm9vdGVyX3JvdyAuZm9vdGVyX2xhYmVsIHtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuYWdtLW1hcCB7XG4gIGhlaWdodDogY2FsYyg3MnZ3ICsgMjBweCk7XG4gIHdpZHRoOiBjYWxjKDcydncgKyAyMHB4KTtcbn1cblxuLmNoYXQtdGltZSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjODg4O1xufVxuXG4uY29ybmVyLXBhcmVudC1sZWZ0LWltYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQ6ICNlOGU4Zjg7XG59XG5cbi5jb3JuZXItY2hpbGQtbGVmdC1pbWFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgcmlnaHQ6IC0yMHB4O1xufVxuLmNvcm5lci1jaGlsZC1sZWZ0LWltYWdlIC5jaGlsZCB7XG4gIGJvcmRlci1yaWdodDogMjFweCBzb2xpZCAjZThlOGY4O1xuICBib3JkZXItYm90dG9tOiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4udHJhbnNwYXJlbnQtYmcge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmxvYWRlci10ZXh0IHtcbiAgcGFkZGluZzogMCAyMHB4IDAgMTBweCAhaW1wb3J0YW50O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ClassicPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-classic',
          templateUrl: './classic.page.html',
          styleUrls: ['./classic.page.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["ModalController"]
        }];
      }, {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['IonContent', {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/clones-ui/components/whatsapp/whatsapp-routing.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/clones-ui/components/whatsapp/whatsapp-routing.module.ts ***!
    \********************************************************************************/

  /*! exports provided: WhatsappPageRoutingModule */

  /***/
  function srcAppPagesClonesUiComponentsWhatsappWhatsappRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WhatsappPageRoutingModule", function () {
      return WhatsappPageRoutingModule;
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


    var _whatsapp_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./whatsapp.page */
    "./src/app/pages/clones-ui/components/whatsapp/whatsapp.page.ts");

    var routes = [{
      path: '',
      component: _whatsapp_page__WEBPACK_IMPORTED_MODULE_2__["WhatsappPage"]
    }];

    var WhatsappPageRoutingModule = function WhatsappPageRoutingModule() {
      _classCallCheck(this, WhatsappPageRoutingModule);
    };

    WhatsappPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: WhatsappPageRoutingModule
    });
    WhatsappPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function WhatsappPageRoutingModule_Factory(t) {
        return new (t || WhatsappPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WhatsappPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WhatsappPageRoutingModule, [{
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
  "./src/app/pages/clones-ui/components/whatsapp/whatsapp.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/pages/clones-ui/components/whatsapp/whatsapp.module.ts ***!
    \************************************************************************/

  /*! exports provided: WhatsappPageModule */

  /***/
  function srcAppPagesClonesUiComponentsWhatsappWhatsappModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WhatsappPageModule", function () {
      return WhatsappPageModule;
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


    var _whatsapp_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./whatsapp-routing.module */
    "./src/app/pages/clones-ui/components/whatsapp/whatsapp-routing.module.ts");
    /* harmony import */


    var _whatsapp_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./whatsapp.page */
    "./src/app/pages/clones-ui/components/whatsapp/whatsapp.page.ts");
    /* harmony import */


    var _classic_classic_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./classic/classic.module */
    "./src/app/pages/clones-ui/components/whatsapp/classic/classic.module.ts");

    var WhatsappPageModule = function WhatsappPageModule() {
      _classCallCheck(this, WhatsappPageModule);
    };

    WhatsappPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: WhatsappPageModule
    });
    WhatsappPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function WhatsappPageModule_Factory(t) {
        return new (t || WhatsappPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _whatsapp_routing_module__WEBPACK_IMPORTED_MODULE_4__["WhatsappPageRoutingModule"], _classic_classic_module__WEBPACK_IMPORTED_MODULE_6__["ClassicPageModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WhatsappPageModule, {
        declarations: [_whatsapp_page__WEBPACK_IMPORTED_MODULE_5__["WhatsappPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _whatsapp_routing_module__WEBPACK_IMPORTED_MODULE_4__["WhatsappPageRoutingModule"], _classic_classic_module__WEBPACK_IMPORTED_MODULE_6__["ClassicPageModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WhatsappPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _whatsapp_routing_module__WEBPACK_IMPORTED_MODULE_4__["WhatsappPageRoutingModule"], _classic_classic_module__WEBPACK_IMPORTED_MODULE_6__["ClassicPageModule"]],
          declarations: [_whatsapp_page__WEBPACK_IMPORTED_MODULE_5__["WhatsappPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/clones-ui/components/whatsapp/whatsapp.page.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/clones-ui/components/whatsapp/whatsapp.page.ts ***!
    \**********************************************************************/

  /*! exports provided: WhatsappPage */

  /***/
  function srcAppPagesClonesUiComponentsWhatsappWhatsappPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WhatsappPage", function () {
      return WhatsappPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _classic_classic_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./classic/classic.page */
    "./src/app/pages/clones-ui/components/whatsapp/classic/classic.page.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function WhatsappPage_ion_title_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-title", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Classic");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function WhatsappPage_ion_searchbar_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ion-searchbar", 16);
      }
    }

    function WhatsappPage_ion_list_26_ion_item_1_ion_text_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-text", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var chat_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](chat_r5.time);
      }
    }

    function WhatsappPage_ion_list_26_ion_item_1_ion_text_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-text", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var chat_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](chat_r5.past);
      }
    }

    function WhatsappPage_ion_list_26_ion_item_1_ion_avatar_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-avatar", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var chat_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](chat_r5.count);
      }
    }

    function WhatsappPage_ion_list_26_ion_item_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WhatsappPage_ion_list_26_ion_item_1_Template_ion_item_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);

          var chat_r5 = ctx.$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          return ctx_r12.goforChat(chat_r5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-avatar", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ion-img", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h2", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, WhatsappPage_ion_list_26_ion_item_1_ion_text_12_Template, 2, 1, "ion-text", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, WhatsappPage_ion_list_26_ion_item_1_ion_text_13_Template, 2, 1, "ion-text", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, WhatsappPage_ion_list_26_ion_item_1_ion_avatar_14_Template, 2, 1, "ion-avatar", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var chat_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", chat_r5.image);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", chat_r5.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](chat_r5.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", chat_r5.time);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", chat_r5.past);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", chat_r5.count);
      }
    }

    function WhatsappPage_ion_list_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-list", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, WhatsappPage_ion_list_26_ion_item_1_Template, 15, 6, "ion-item", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.chatData);
      }
    }

    function WhatsappPage_ion_list_27_ion_item_1_ion_icon_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-icon", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var chat_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("name", chat_r15.video);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", chat_r15.count, " ");
      }
    }

    function WhatsappPage_ion_list_27_ion_item_1_ion_icon_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-icon", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var chat_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("name", chat_r15.phone);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", chat_r15.count, " ");
      }
    }

    function WhatsappPage_ion_list_27_ion_item_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-avatar", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ion-img", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h2", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, WhatsappPage_ion_list_27_ion_item_1_ion_icon_12_Template, 2, 2, "ion-icon", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, WhatsappPage_ion_list_27_ion_item_1_ion_icon_13_Template, 2, 2, "ion-icon", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var chat_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", chat_r15.image);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", chat_r15.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](chat_r15.call);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", chat_r15.video);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", chat_r15.phone);
      }
    }

    function WhatsappPage_ion_list_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-list", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, WhatsappPage_ion_list_27_ion_item_1_Template, 14, 5, "ion-item", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.chatData);
      }
    }

    var WhatsappPage = /*#__PURE__*/function () {
      function WhatsappPage(modalCtrl) {
        _classCallCheck(this, WhatsappPage);

        this.modalCtrl = modalCtrl;
        this.segmentTab = 'Chats';
        this.title = true;
        this.chatData = [{
          'name': 'Jovenica Alba',
          'image': '../../../../assets/clones/chat/chat/chat1.jpg',
          'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
          'count': '2',
          'time': '12:17',
          'call': '(3) January 09/27/2019',
          'video': 'videocam'
        }, {
          'name': 'Oliver',
          'image': ' ../../../../assets/clones/chat/chat/chat2.jpg',
          'description': 'Rahim: thanks!',
          'time': '12:17',
          'call': '(3) January 09/26/2019',
          'video': 'videocam'
        }, {
          'name': 'George',
          'image': ' ../../../../assets/clones/chat/chat/chat3.jpg',
          'description': 'Kajor P: share your contact please!',
          'count': '2',
          'time': 'Yesterday',
          'call': '(1) January 09/26/2018',
          'video': 'videocam'
        }, {
          'name': 'Harry',
          'image': ' ../../../../assets/clones/chat/chat/chat3.jpg',
          'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
          'time': 'Sunday',
          'call': '(5) February 08/20/2018',
          'video': 'videocam'
        }, {
          'name': 'Jack',
          'image': ' ../../../../assets/clones/chat/chat/chat5.jpg',
          'description': 'Yes! that\'s right call him right now.',
          'past': '09/27/2015',
          'call': '(4) February 28/20/2018',
          'phone': 'call'
        }, {
          'name': 'Jacob',
          'image': ' ../../../../assets/clones/chat/chat/chat6.jpg',
          'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
          'count': '1',
          'past': '09/27/2015',
          'call': '(4) February 28/20/2015',
          'phone': 'call'
        }, {
          'name': 'Noah',
          'image': ' ../../../../assets/clones/chat/chat/chat7.jpg',
          'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
          'past': '09/27/2015',
          'call': '(3) February 28/20/2016',
          'phone': 'call'
        }, {
          'name': 'Charlie',
          'image': ' ../../../../assets/clones/chat/chat/chat8.jpg',
          'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
          'count': '6',
          'past': '09/27/2015',
          'call': '(3) December 28/20/2017',
          'phone': 'call'
        }, {
          'name': 'Logan',
          'image': ' ../../../../assets/clones/chat/chat/chat1.jpg',
          'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
          'past': '09/27/2015',
          'call': '09/27/2015',
          'phone': 'call'
        }, {
          'name': 'Harrison',
          'image': ' ../../../../assets/clones/chat/chat/chat2.jpg',
          'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
          'past': '09/27/2015',
          'call': '09/27/2015',
          'video': 'videocam'
        }, {
          'name': 'Sebastian',
          'image': ' ../../../../assets/clones/chat/chat/chat3.jpg',
          'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
          'past': '09/17/2016',
          'call': '(3) December 28/20/2017',
          'video': 'videocam'
        }, {
          'name': 'Zachary',
          'image': ' ../../../../assets/clones/chat/chat/chat3.jpg',
          'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
          'past': '09/07/2017',
          'call': '09/27/2015',
          'video': 'videocam'
        }, {
          'name': 'Elijah',
          'image': ' ../../../../assets/clones/chat/chat/chat5.jpg',
          'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
          'past': '09/09/2018',
          'call': '09/27/2015',
          'phone': 'call'
        }];
      }

      _createClass(WhatsappPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "segmentChanged",
        value: function segmentChanged(event) {
          this.segmentTab = event.detail.value;
          console.log(this.segmentTab);
        }
      }, {
        key: "goforChat",
        value: function goforChat(chat) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.title = true;
                    _context.next = 3;
                    return this.modalCtrl.create({
                      component: _classic_classic_page__WEBPACK_IMPORTED_MODULE_3__["ClassicPage"]
                    });

                  case 3:
                    modal = _context.sent;
                    _context.next = 6;
                    return modal.present();

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "toggleSearchTitl",
        value: function toggleSearchTitl() {
          this.title = !this.title;
        }
      }]);

      return WhatsappPage;
    }();

    WhatsappPage.ɵfac = function WhatsappPage_Factory(t) {
      return new (t || WhatsappPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]));
    };

    WhatsappPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: WhatsappPage,
      selectors: [["app-whatsapp"]],
      decls: 28,
      vars: 4,
      consts: [["slot", "start"], ["defaultHref", "/clones-ui"], ["name", "search", "expand", "icon-only", "color", "light", "mode", "ios", "slot", "end", 3, "click"], ["src", "assets/clones/chat/chat/chat.png", "slot", "end", 1, "header_image"], ["name", "ellipsis-vertical", "expand", "icon-only", "color", "light", "mode", "md", "slot", "end"], ["mode", "md", "color", "light", "text-start", "", 4, "ngIf"], ["mode", "ios", "placeholder", "Search your friend", 4, "ngIf"], ["mode", "md", 3, "ionChange"], ["mode", "md", "value", "Calls"], [1, "contentCenter"], ["slot", "end", 1, "segment_Text"], ["mode", "md", "value", "Chats", "checked", ""], [1, "segmentCount"], ["mode", "md", "value", "group"], ["no-padding", "", 4, "ngIf"], ["mode", "md", "color", "light", "text-start", ""], ["mode", "ios", "placeholder", "Search your friend"], ["no-padding", ""], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], ["slot", "start", 1, "chatImage"], [3, "src"], [1, "withcount"], [1, "nameAvatar"], ["color", "light"], [1, "widthHalf"], ["slot", "end", 1, "timeSlot"], [1, "timeEnd"], ["slot", "end", "color", "success", "text-uppercase", "", 4, "ngIf"], ["slot", "end", "color", "medium", 4, "ngIf"], ["class", "chatCount", 4, "ngIf"], ["slot", "end", "color", "success", "text-uppercase", ""], ["slot", "end", "color", "medium"], [1, "chatCount"], [4, "ngFor", "ngForOf"], ["class", "videocam", "expand", "icon-only", "mode", "ios", 3, "name", 4, "ngIf"], ["expand", "icon-only", "mode", "ios", 1, "videocam", 3, "name"]],
      template: function WhatsappPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-buttons", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-back-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WhatsappPage_Template_ion_icon_click_4_listener() {
            return ctx.toggleSearchTitl();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "ion-img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "ion-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, WhatsappPage_ion_title_7_Template, 2, 0, "ion-title", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, WhatsappPage_ion_searchbar_8_Template, 1, 0, "ion-searchbar", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-segment", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionChange", function WhatsappPage_Template_ion_segment_ionChange_10_listener($event) {
            return ctx.segmentChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-segment-button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ion-text", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Calls");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-segment-button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ion-text", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Chats");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ion-avatar", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "17");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "ion-segment-button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "ion-text", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Contacts");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, WhatsappPage_ion_list_26_Template, 2, 1, "ion-list", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, WhatsappPage_ion_list_27_Template, 2, 1, "ion-list", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.segmentTab == "Chats");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.segmentTab == "Calls");
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonImg"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSegment"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["SelectValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSegmentButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSearchbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["TextValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"]],
      styles: [".chatImage[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n}\n\n.plusClass[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 25px;\n  height: 25px;\n  background: white;\n  border-radius: 50%;\n  right: 15px;\n  position: relative;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), background-color 15ms linear, color 15ms linear;\n  box-shadow: 0 0.5px 0px 5px rgba(0, 0, 0, 0.2), 0 0px 0px 0 rgba(0, 0, 0, 0.14), 0 0px 0px 0 rgba(0, 0, 0, 0.12);\n}\n\nion-header[_ngcontent-%COMP%]:after {\n  box-shadow: 0 0px 20px rgba(0, 0, 0, 0.5);\n  background-image: none;\n  left: 0;\n  bottom: 0px;\n  background-position: left 0 top 0;\n  position: absolute;\n  width: 100%;\n  height: 8px;\n  content: \"\";\n}\n\nion-header[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%] {\n  --background: #006257;\n}\n\n.contentCenter[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-segment-button[_ngcontent-%COMP%] {\n  --color: #58938e !important;\n  --color-checked: var(--ion-color-tertiary-contrast);\n  border-bottom: 0px solid rgba(255, 255, 255, 0.3);\n}\n\n.padding_right[_ngcontent-%COMP%] {\n  padding-right: 8px;\n}\n\nion-icon[_ngcontent-%COMP%] {\n  width: 1.5em;\n  height: 1.5em;\n}\n\n.header_image[_ngcontent-%COMP%] {\n  width: 1.5em;\n  height: 1.5em;\n  margin: 0px 18px 0px 18px;\n}\n\n.tab-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.withcount[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.chatCount[_ngcontent-%COMP%] {\n  background: var(--ion-color-success);\n  width: 17px !important;\n  height: 17px !important;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  font-size: 10px;\n  font-weight: bold;\n  color: var(--background);\n  margin-left: 8px;\n}\n\n.videocam[_ngcontent-%COMP%] {\n  width: 17px !important;\n  height: 17px !important;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  font-size: 10px;\n  font-weight: bold;\n  color: #006257;\n  margin-left: 8px;\n}\n\n.segmentCount[_ngcontent-%COMP%] {\n  background: var(--ion-color-tertiary-contrast);\n  width: 17px !important;\n  height: 17px !important;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  font-size: 10px;\n  font-weight: bold;\n  color: #006257;\n  margin-left: 8px;\n  padding: 3px;\n  box-sizing: content-box;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 0.84em;\n  font-weight: bold;\n  color: #383a3ee3;\n}\n\n.timeEnd[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding-bottom: 8px;\n}\n\n.widthHalf[_ngcontent-%COMP%] {\n  color: #222428b0;\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.nameAvatar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 50%;\n}\n\n.nameAvatar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 0.94em;\n  font-weight: bold;\n}\n\nion-text[_ngcontent-%COMP%] {\n  font-size: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-text.segment_Text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.sc-ion-label-ios-h[_ngcontent-%COMP%] {\n  height: 44px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.timeSlot[_ngcontent-%COMP%] {\n  align-items: flex-end;\n  display: flex;\n  flex-direction: column;\n}\n\nion-searchbar[_ngcontent-%COMP%] {\n  --placeholder-color: white;\n  --color: white;\n  height: 35px !important;\n}\n\n.list-ios[_ngcontent-%COMP%] {\n  margin-bottom: 0 !important;\n}\n\n.sc-ion-label-ios-s[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  margin-top: 5px;\n}\n\n.title-ios[_ngcontent-%COMP%] {\n  height: 40px !important;\n  padding-top: 12px;\n  padding-left: 50px;\n  padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2xvbmVzLXVpL2NvbXBvbmVudHMvd2hhdHNhcHAvQzpcXFVzZXJzXFxWYWduZXIgU2FiYWRpXFxEb2N1bWVudHNcXFByb2plY3RzXFxfTXlcXGF3ZXNvbWUtY29tcG9uZW50cy1pb25pYy9zcmNcXGFwcFxccGFnZXNcXGNsb25lcy11aVxcY29tcG9uZW50c1xcd2hhdHNhcHBcXHdoYXRzYXBwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2xvbmVzLXVpL2NvbXBvbmVudHMvd2hhdHNhcHAvd2hhdHNhcHAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURDQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMEdBQUE7RUFDQSxnSEFBQTtBQ0VKOztBRENJO0VBQ0kseUNBQUE7RUFDQSxzQkFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0VSOztBREVBOztFQUVJLHFCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0VKOztBREFBO0VBQ0ksMkJBQUE7RUFDQSxtREFBQTtFQUNBLGlEQUFBO0FDR0o7O0FEQUE7RUFDSSxrQkFBQTtBQ0dKOztBRERBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNJSjs7QURGQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUNLSjs7QURIQTtFQUNJLGVBQUE7QUNNSjs7QURKQTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FDT0o7O0FETEE7RUFDSSxvQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUNRSjs7QUROQTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ1NKOztBRFBBO0VBQ0ksOENBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUNVSjs7QURSQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ1dKOztBRFRBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNZSjs7QURWQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDYUo7O0FEWEE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FDY0o7O0FEYkk7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FDZVI7O0FEWEE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNjSjs7QURaQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ2VKOztBRGJBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDZ0JKOztBRGRBO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNpQko7O0FEZkE7RUFDSSwwQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQ2tCSjs7QURoQkE7RUFDSSwyQkFBQTtBQ21CSjs7QURqQkE7RUFDSSxlQUFBO0FDb0JKOztBRGxCQTtFQUNJLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDcUJKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2xvbmVzLXVpL2NvbXBvbmVudHMvd2hhdHNhcHAvd2hhdHNhcHAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXRJbWFnZSB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG4ucGx1c0NsYXNzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDI4MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksIGJhY2tncm91bmQtY29sb3IgMTVtcyBsaW5lYXIsIGNvbG9yIDE1bXMgbGluZWFyO1xyXG4gICAgYm94LXNoYWRvdzogMCAwLjVweCAwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAwcHggMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAwcHggMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5pb24taGVhZGVyIHtcclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBib3R0b206IDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IDAgdG9wIDA7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1oZWFkZXIsXHJcbmlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzAwNjI1NztcclxufVxyXG4uY29udGVudENlbnRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbmlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICAtLWNvbG9yOiAjNTg5MzhlICFpbXBvcnRhbnQ7XHJcbiAgICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdCk7XHJcbiAgICBib3JkZXItYm90dG9tOiAwcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG59XHJcblxyXG4ucGFkZGluZ19yaWdodCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbn1cclxuaW9uLWljb24ge1xyXG4gICAgd2lkdGg6IDEuNWVtO1xyXG4gICAgaGVpZ2h0OiAxLjVlbTtcclxufVxyXG4uaGVhZGVyX2ltYWdlIHtcclxuICAgIHdpZHRoOiAxLjVlbTtcclxuICAgIGhlaWdodDogMS41ZW07XHJcbiAgICBtYXJnaW46IDBweCAxOHB4IDBweCAxOHB4O1xyXG59XHJcbi50YWItaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLndpdGhjb3VudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uY2hhdENvdW50IHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcclxuICAgIHdpZHRoOiAxN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDE3cHggIWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuLnZpZGVvY2FtIHtcclxuICAgIHdpZHRoOiAxN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDE3cHggIWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjMDA2MjU3O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxufVxyXG4uc2VnbWVudENvdW50IHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdCk7XHJcbiAgICB3aWR0aDogMTdweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzAwNjI1NztcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxufVxyXG5oMiB7XHJcbiAgICBmb250LXNpemU6IDAuODRlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMzODNhM2VlMztcclxufVxyXG4udGltZUVuZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbn1cclxuLndpZHRoSGFsZiB7XHJcbiAgICBjb2xvcjogIzIyMjQyOGIwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLm5hbWVBdmF0YXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45NGVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24tdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbmlvbi10ZXh0LnNlZ21lbnRfVGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5zYy1pb24tbGFiZWwtaW9zLWgge1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4udGltZVNsb3Qge1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuaW9uLXNlYXJjaGJhciB7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiAzNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmxpc3QtaW9zIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcclxufVxyXG4uc2MtaW9uLWxhYmVsLWlvcy1zIHA6bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLnRpdGxlLWlvcyB7XHJcbiAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuIiwiLmNoYXRJbWFnZSB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5wbHVzQ2xhc3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcmlnaHQ6IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyODBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpLCBiYWNrZ3JvdW5kLWNvbG9yIDE1bXMgbGluZWFyLCBjb2xvciAxNW1zIGxpbmVhcjtcbiAgYm94LXNoYWRvdzogMCAwLjVweCAwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAwcHggMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAwcHggMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuaW9uLWhlYWRlcjphZnRlciB7XG4gIGJveC1zaGFkb3c6IDAgMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCAwIHRvcCAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDhweDtcbiAgY29udGVudDogXCJcIjtcbn1cblxuaW9uLWhlYWRlcixcbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA2MjU3O1xufVxuXG4uY29udGVudENlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5pb24tc2VnbWVudC1idXR0b24ge1xuICAtLWNvbG9yOiAjNTg5MzhlICFpbXBvcnRhbnQ7XG4gIC0tY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0KTtcbiAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbn1cblxuLnBhZGRpbmdfcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59XG5cbmlvbi1pY29uIHtcbiAgd2lkdGg6IDEuNWVtO1xuICBoZWlnaHQ6IDEuNWVtO1xufVxuXG4uaGVhZGVyX2ltYWdlIHtcbiAgd2lkdGg6IDEuNWVtO1xuICBoZWlnaHQ6IDEuNWVtO1xuICBtYXJnaW46IDBweCAxOHB4IDBweCAxOHB4O1xufVxuXG4udGFiLWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi53aXRoY291bnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jaGF0Q291bnQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG4gIHdpZHRoOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTdweCAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG4udmlkZW9jYW0ge1xuICB3aWR0aDogMTdweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE3cHggIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDA2MjU3O1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG4uc2VnbWVudENvdW50IHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0KTtcbiAgd2lkdGg6IDE3cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxN3B4ICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzAwNjI1NztcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgcGFkZGluZzogM3B4O1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDAuODRlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMzgzYTNlZTM7XG59XG5cbi50aW1lRW5kIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbn1cblxuLndpZHRoSGFsZiB7XG4gIGNvbG9yOiAjMjIyNDI4YjA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5uYW1lQXZhdGFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDUwJTtcbn1cbi5uYW1lQXZhdGFyIGgyIHtcbiAgZm9udC1zaXplOiAwLjk0ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmlvbi10ZXh0LnNlZ21lbnRfVGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zYy1pb24tbGFiZWwtaW9zLWgge1xuICBoZWlnaHQ6IDQ0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udGltZVNsb3Qge1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmlvbi1zZWFyY2hiYXIge1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB3aGl0ZTtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogMzVweCAhaW1wb3J0YW50O1xufVxuXG4ubGlzdC1pb3Mge1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5zYy1pb24tbGFiZWwtaW9zLXMgcDpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4udGl0bGUtaW9zIHtcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](WhatsappPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'app-whatsapp',
          templateUrl: './whatsapp.page.html',
          styleUrls: ['./whatsapp.page.scss']
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=components-whatsapp-whatsapp-module-es5.js.map