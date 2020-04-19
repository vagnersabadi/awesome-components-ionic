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
        var ctx_r460 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var i_r456 = ctx_r460.index;
        var chat_r455 = ctx_r460.$implicit;

        var ctx_r457 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, ctx_r457.msgList[i_r456 + 1] && ctx_r457.msgList[i_r456 + 1].userId != chat_r455.userId || !ctx_r457.msgList[i_r456 + 1]));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](5, _c2, ctx_r457.msgList[i_r456 + 1] && ctx_r457.msgList[i_r456 + 1].userId == chat_r455.userId && ctx_r457.msgList[i_r456 - 1] && ctx_r457.msgList[i_r456 - 1].userId == chat_r455.userId, ctx_r457.msgList[i_r456 - 1] && ctx_r457.msgList[i_r456 - 1].userId == chat_r455.userId, ctx_r457.msgList[i_r456 + 1] && ctx_r457.msgList[i_r456 + 1].userId == chat_r455.userId));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", chat_r455.message, " ");
      }
    }

    function ClassicPage_div_10_ion_row_2_p_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var chat_r455 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](chat_r455.message);
      }
    }

    function ClassicPage_div_10_ion_row_2_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-img", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var chat_r455 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", chat_r455.image);
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
        var chat_r455 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", chat_r455.video, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
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
        var ctx_r471 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var i_r456 = ctx_r471.index;
        var chat_r455 = ctx_r471.$implicit;

        var ctx_r458 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c1, ctx_r458.msgList[i_r456 + 1] && ctx_r458.msgList[i_r456 + 1].userId != chat_r455.userId || !ctx_r458.msgList[i_r456 + 1]));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction4"](11, _c3, ctx_r458.msgList[i_r456 + 1] && ctx_r458.msgList[i_r456 + 1].userId == chat_r455.userId && ctx_r458.msgList[i_r456 - 1] && ctx_r458.msgList[i_r456 - 1].userId == chat_r455.userId, ctx_r458.msgList[i_r456 - 1] && ctx_r458.msgList[i_r456 - 1].userId == chat_r455.userId, ctx_r458.msgList[i_r456 + 1] && ctx_r458.msgList[i_r456 + 1].userId == chat_r455.userId, chat_r455.image || chat_r455.map || chat_r455.video));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !chat_r455.image && !chat_r455.video && !chat_r455.map);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", chat_r455.image);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", chat_r455.video);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", chat_r455.map);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(chat_r455.image || chat_r455.map || chat_r455.video));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", chat_r455.image || chat_r455.map || chat_r455.video);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", chat_r455.image || chat_r455.map || chat_r455.video);
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
        var chat_r455 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](chat_r455.time);
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
        var chat_r455 = ctx.$implicit;
        var i_r456 = ctx.index;

        var ctx_r452 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", chat_r455.userId == ctx_r452.User);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", chat_r455.userId == ctx_r452.toUser);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r452.msgList[i_r456 + 1] && ctx_r452.msgList[i_r456 + 1].userId != chat_r455.userId || !ctx_r452.msgList[i_r456 + 1]);
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
        var footer_r474 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", footer_r474.icon);
      }
    }

    function ClassicPage_ion_list_18_ion_col_2_ion_thumbnail_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-thumbnail");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-img", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var footer_r474 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", footer_r474.image);
      }
    }

    function ClassicPage_ion_list_18_ion_col_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r481 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-label", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClassicPage_ion_list_18_ion_col_2_Template_ion_label_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r481);

          var footer_r474 = ctx.$implicit;

          var ctx_r480 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r480.typeSelected(footer_r474);
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
        var footer_r474 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", footer_r474.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", footer_r474.image);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](footer_r474.label);
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
        var ctx_r454 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r454.footerJson)("ngForOf", ctx_r454.index);
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
      styles: ["ion-title[_ngcontent-%COMP%] {\n  font-size: 26px;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: #e8e8f8;\n}\n\nion-header[_ngcontent-%COMP%] {\n  --background: #5b2573;\n}\n\nion-toolbar[_ngcontent-%COMP%], ion-item[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n\nion-list[_ngcontent-%COMP%] {\n  background: transparent;\n  margin-bottom: 0;\n  padding: 20px 10px 0 10px;\n}\n\n.imageAvatarRight[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n}\n\n.imageAvatarRight[_ngcontent-%COMP%]   .imageAvatarBottom[_ngcontent-%COMP%] {\n  max-width: 214px;\n  align-items: flex-end;\n  display: flex;\n  border-radius: 50%;\n  position: relative;\n  top: 6px;\n  z-index: 11;\n}\n\n.imageAvatarRight[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.imageAvatarRight[_ngcontent-%COMP%]   .imageAvatarBottomIcon[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50px;\n  background: var(--ion-color-tertiary-tint);\n  position: absolute;\n  top: 17%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  right: 10.1%;\n  color: white;\n}\n\n.imageAvatarRight[_ngcontent-%COMP%]   .chatDiv[_ngcontent-%COMP%] {\n  text-align: justify;\n  position: relative;\n  background: white;\n  border-radius: 6px;\n  border-bottom-left-radius: 0;\n  max-width: 72vw;\n  color: #444;\n}\n\n.imageAvatarRight[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n}\n\n.imageAvatarRight[_ngcontent-%COMP%]   .sharper.chatDiv[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n\n.imageAvatarRight[_ngcontent-%COMP%]   .sharper-bottom.chatDiv[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.imageAvatarRight[_ngcontent-%COMP%]   .sharper-top.chatDiv[_ngcontent-%COMP%] {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.imageAvatarLeft[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-end;\n}\n\n.imageAvatarLeft[_ngcontent-%COMP%]   .imageAvatarBottom[_ngcontent-%COMP%] {\n  max-width: 214px;\n  align-items: flex-end;\n  display: flex;\n  border-radius: 50%;\n  position: relative;\n  top: 6px;\n  z-index: 11;\n}\n\n.imageAvatarLeft[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.imageAvatarLeft[_ngcontent-%COMP%]   .imageAvatarBottomIcon[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50px;\n  background: var(--ion-color-tertiary-tint);\n  position: absolute;\n  top: 17%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  right: 10.1%;\n  color: white;\n}\n\n.imageAvatarLeft[_ngcontent-%COMP%]   .chatDiv[_ngcontent-%COMP%] {\n  text-align: left;\n  position: relative;\n  background: #b9a3e8;\n  border-radius: 6px;\n  border-bottom-right-radius: 0;\n  max-width: 72vw;\n  color: white;\n  font-weight: 500;\n  padding: 8px;\n}\n\n.imageAvatarLeft[_ngcontent-%COMP%]   .chatDiv.transparent-bg[_ngcontent-%COMP%] {\n  background: transparent;\n}\n\n.imageAvatarLeft[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n}\n\n.imageAvatarLeft[_ngcontent-%COMP%]   ion-img.imageFrom_footer[_ngcontent-%COMP%] {\n  width: calc(100% + 0px);\n  height: auto;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.imageAvatarLeft[_ngcontent-%COMP%]   .imageFrom_footer[_ngcontent-%COMP%] {\n  width: calc(72vw + 20px);\n}\n\n.imageAvatarLeft[_ngcontent-%COMP%]   .imageFrom_footer.video[_ngcontent-%COMP%] {\n  background: black;\n}\n\n.imageAvatarLeft[_ngcontent-%COMP%]   .imageFrom_footerMap[_ngcontent-%COMP%] {\n  width: calc(72vw + 20px);\n}\n\n.imageAvatarLeft[_ngcontent-%COMP%]   .videoFrom_footer[_ngcontent-%COMP%] {\n  width: calc(72vw + 20px);\n  -o-object-fit: fill;\n  object-fit: fill;\n  height: auto;\n  border-radius: 5px;\n  display: block;\n}\n\n.imageAvatarLeft[_ngcontent-%COMP%]   .sharper.chatDiv[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n\n.imageAvatarLeft[_ngcontent-%COMP%]   .sharper-bottom.chatDiv[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.imageAvatarLeft[_ngcontent-%COMP%]   .sharper-top.chatDiv[_ngcontent-%COMP%] {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\nion-buttons[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n\nion-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n\nion-fab-button[_ngcontent-%COMP%] {\n  width: 47px !important;\n  height: 47px !important;\n}\n\nion-fab[_ngcontent-%COMP%] {\n  bottom: -22px !important;\n}\n\n.footerIcon[_ngcontent-%COMP%] {\n  color: #b39ddb;\n  font-size: 2.5em;\n}\n\n.footerIconSend[_ngcontent-%COMP%] {\n  color: rgba(161, 169, 187, 0.92);\n}\n\nion-input[_ngcontent-%COMP%] {\n  --placeholder-color: var(--ion-color-medium-tint);\n}\n\n.chatDivLoader[_ngcontent-%COMP%] {\n  position: relative;\n  background: white;\n  border-radius: 6px;\n  min-width: 80px;\n  max-width: 80px;\n  display: flex;\n  align-items: center;\n  color: white;\n  padding: 2px;\n  display: flex;\n  justify-content: center;\n  border-bottom-left-radius: 0;\n  margin-bottom: 15px;\n}\n\n.chatDivLoader[_ngcontent-%COMP%]   .corner-parent-right[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n  background: transparent;\n  position: absolute;\n  left: -16px;\n  bottom: 0;\n  overflow: hidden;\n  border-radius: 0;\n}\n\n.chatDivLoader[_ngcontent-%COMP%]   .corner-parent-right[_ngcontent-%COMP%]   .corner-child-right[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n  border-top: 14px solid transparent;\n  border-right: 19px solid white;\n  border-bottom: 2px solid white;\n}\n\nion-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--ion-color-medium);\n}\n\nion-col[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.imageAvatarBottomLoader[_ngcontent-%COMP%] {\n  max-width: 214px;\n  align-items: flex-end;\n  display: flex;\n  border-radius: 50%;\n  position: relative;\n  top: 8px;\n  z-index: 11;\n}\n\n.hidden[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n.loading-col[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n  padding-left: 20px;\n}\n\n.right[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n  padding-left: 20px;\n}\n\n.left[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  padding-right: 20px;\n}\n\n.clubbed[_ngcontent-%COMP%]   .imageAvatarRight[_ngcontent-%COMP%]   .chatDiv[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n\n.clubbed[_ngcontent-%COMP%]   .imageAvatarRight[_ngcontent-%COMP%]   .chatDiv[_ngcontent-%COMP%]   .corner-parent-right[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n  background: transparent;\n  position: absolute;\n  left: -16px;\n  bottom: 0;\n  overflow: hidden;\n  border-radius: 0;\n}\n\n.clubbed[_ngcontent-%COMP%]   .imageAvatarRight[_ngcontent-%COMP%]   .chatDiv[_ngcontent-%COMP%]   .corner-parent-right[_ngcontent-%COMP%]   .corner-child-right[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n  border-top: 14px solid transparent;\n  border-right: 19px solid white;\n  border-bottom: 2px solid white;\n}\n\n.clubbed[_ngcontent-%COMP%]   .imageAvatarLeft[_ngcontent-%COMP%]   .chatDiv[_ngcontent-%COMP%]   .corner-parent-left[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n  background: transparent;\n  position: absolute;\n  right: -16px;\n  bottom: 0;\n  overflow: hidden;\n  border-radius: 0;\n}\n\n.clubbed[_ngcontent-%COMP%]   .imageAvatarLeft[_ngcontent-%COMP%]   .chatDiv[_ngcontent-%COMP%]   .corner-parent-left[_ngcontent-%COMP%]   .corner-child-left[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n  border-top: 14px solid transparent;\n  border-right: 10px solid transparent;\n  border-left: 17px solid #b9a3e8;\n  border-bottom: 2px solid #b9a3e8;\n}\n\n.input-box[_ngcontent-%COMP%] {\n  color: var(--ion-color-dark-shade);\n}\n\nion-item.footer_item[_ngcontent-%COMP%] {\n  --inner-border-width: 0px 0px 0px 0px;\n  --highlight-color-valid: var(--ion-color-tertiary-contrast) !important;\n}\n\n.footer-options[_ngcontent-%COMP%] {\n  background: #e8e8f8;\n}\n\n.footer_row[_ngcontent-%COMP%] {\n  padding: 16px 0px 0px 0px;\n  background: transparent;\n}\n\n.footer_row[_ngcontent-%COMP%]   .footer_label[_ngcontent-%COMP%] {\n  padding-bottom: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding-top: 10px;\n}\n\nagm-map[_ngcontent-%COMP%] {\n  height: calc(72vw + 20px);\n  width: calc(72vw + 20px);\n}\n\n.chat-time[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-weight: bold;\n  font-size: 11px;\n  color: #888;\n}\n\n.corner-parent-left-image[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -20px;\n  width: 20px;\n  height: calc(100% - 20px);\n  top: 0;\n  background: #e8e8f8;\n}\n\n.corner-child-left-image[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% - 20px);\n  width: 20px;\n  height: 20px;\n  right: -20px;\n}\n\n.corner-child-left-image[_ngcontent-%COMP%]   .child[_ngcontent-%COMP%] {\n  border-right: 21px solid #e8e8f8;\n  border-bottom: 15px solid transparent;\n}\n\n.transparent-bg[_ngcontent-%COMP%] {\n  background: transparent;\n}\n\n.loader-text[_ngcontent-%COMP%] {\n  padding: 0 20px 0 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2xvbmVzLXVpL2NvbXBvbmVudHMvd2hhdHNhcHAvY2xhc3NpYy9DOlxcVXNlcnNcXHNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZXRvc1xcX2lvbmljXFxpb25pYzQtY29tcG9uZW50cy9zcmNcXGFwcFxccGFnZXNcXGNsb25lcy11aVxcY29tcG9uZW50c1xcd2hhdHNhcHBcXGNsYXNzaWNcXGNsYXNzaWMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jbG9uZXMtdWkvY29tcG9uZW50cy93aGF0c2FwcC9jbGFzc2ljL2NsYXNzaWMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QURDQTtFQUNFLHFCQUFBO0FDRUY7O0FEQUE7O0VBRUUseUJBQUE7QUNHRjs7QUREQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ0lGOztBREZBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUNLRjs7QURKRTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FDTUo7O0FESkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDTUo7O0FESkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDTUo7O0FESkU7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNNSjs7QURKRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDTUo7O0FESEk7RUFDRSxnQkFBQTtBQ0tOOztBRERJO0VBQ0UsNEJBQUE7RUFDQSw2QkFBQTtBQ0dOOztBRENJO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtBQ0NOOztBRElBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUNERjs7QURFRTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FDQUo7O0FERUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQUo7O0FERUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDQUo7O0FERUU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNBSjs7QURDSTtFQUNFLHVCQUFBO0FDQ047O0FERUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREVFO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0FKOztBREVFO0VBQ0Usd0JBQUE7QUNBSjs7QURDSTtFQUNFLGlCQUFBO0FDQ047O0FERUU7RUFDRSx3QkFBQTtBQ0FKOztBREVFO0VBQ0Usd0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREdJO0VBQ0UsZ0JBQUE7QUNETjs7QURLSTtFQUNFLDRCQUFBO0VBQ0EsNkJBQUE7QUNITjs7QURPSTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7QUNMTjs7QURVRTtFQUNFLGVBQUE7QUNQSjs7QURVQTtFQUNFLGVBQUE7QUNQRjs7QURTQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7QUNORjs7QURRQTtFQUNFLHdCQUFBO0FDTEY7O0FET0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNKRjs7QURNQTtFQUNFLGdDQUFBO0FDSEY7O0FES0E7RUFDRSxpREFBQTtBQ0ZGOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUNERjs7QURFRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0FKOztBRENJO0VBQ0UsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7QUNDTjs7QURHQTtFQUNFLGVBQUE7RUFDQSw4QkFBQTtBQ0FGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURDQTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FDRUY7O0FEQUE7RUFDRSxrQkFBQTtBQ0dGOztBRERBO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtBQ0lGOztBRERBO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtBQ0lGOztBREZBO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtBQ0tGOztBREFJO0VBQ0UsWUFBQTtBQ0dOOztBRERNO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDR1I7O0FERlE7RUFDRSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtBQ0lWOztBRElNO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDRlI7O0FER1E7RUFDRSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0VBQ0Esb0NBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0FDRFY7O0FET0E7RUFDRSxrQ0FBQTtBQ0pGOztBRE1BO0VBQ0UscUNBQUE7RUFDQSxzRUFBQTtBQ0hGOztBREtBO0VBQ0UsbUJBQUE7QUNGRjs7QURJQTtFQUNFLHlCQUFBO0VBQ0EsdUJBQUE7QUNERjs7QURFRTtFQUNFLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FDQUo7O0FER0E7RUFDRSx5QkFBQTtFQUNBLHdCQUFBO0FDQUY7O0FERUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsTUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDRUY7O0FEREU7RUFDRSxnQ0FBQTtFQUNBLHFDQUFBO0FDR0o7O0FEQUE7RUFDRSx1QkFBQTtBQ0dGOztBRERBO0VBQ0UsaUNBQUE7QUNJRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Nsb25lcy11aS9jb21wb25lbnRzL3doYXRzYXBwL2NsYXNzaWMvY2xhc3NpYy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogI2U4ZThmODtcclxufVxyXG5pb24taGVhZGVyIHtcclxuICAtLWJhY2tncm91bmQ6ICM1YjI1NzM7XHJcbn1cclxuaW9uLXRvb2xiYXIsXHJcbmlvbi1pdGVtIHtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcbmlvbi1saXN0IHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIHBhZGRpbmc6IDIwcHggMTBweCAwIDEwcHg7XHJcbn1cclxuLmltYWdlQXZhdGFyUmlnaHQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIC5pbWFnZUF2YXRhckJvdHRvbSB7XHJcbiAgICBtYXgtd2lkdGg6IDIxNHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNnB4O1xyXG4gICAgei1pbmRleDogMTE7XHJcbiAgfVxyXG4gIC5hdmF0YXIge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAuaW1hZ2VBdmF0YXJCb3R0b21JY29uIHtcclxuICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50KTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTclO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHJpZ2h0OiAxMC4xJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLmNoYXREaXYge1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICAgIG1heC13aWR0aDogNzJ2dztcclxuICAgIGNvbG9yOiAjNDQ0O1xyXG4gIH1cclxuICBpb24taW1nIHtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gIH1cclxuICAuc2hhcnBlciB7XHJcbiAgICAmLmNoYXREaXYge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICAuc2hhcnBlci1ib3R0b20ge1xyXG4gICAgJi5jaGF0RGl2IHtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zaGFycGVyLXRvcCB7XHJcbiAgICAmLmNoYXREaXYge1xyXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5pbWFnZUF2YXRhckxlZnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgLmltYWdlQXZhdGFyQm90dG9tIHtcclxuICAgIG1heC13aWR0aDogMjE0cHg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA2cHg7XHJcbiAgICB6LWluZGV4OiAxMTtcclxuICB9XHJcbiAgLmF2YXRhciB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5pbWFnZUF2YXRhckJvdHRvbUljb24ge1xyXG4gICAgd2lkdGg6IDEycHg7XHJcbiAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNyU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcmlnaHQ6IDEwLjElO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuY2hhdERpdiB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDogI2I5YTNlODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgbWF4LXdpZHRoOiA3MnZ3O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgICYudHJhbnNwYXJlbnQtYmcge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuICB9XHJcbiAgaW9uLWltZyB7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICB9XHJcbiAgaW9uLWltZy5pbWFnZUZyb21fZm9vdGVyIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAwcHgpO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG4gIC5pbWFnZUZyb21fZm9vdGVyIHtcclxuICAgIHdpZHRoOiBjYWxjKDcydncgKyAyMHB4KTtcclxuICAgICYudmlkZW8ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIH1cclxuICB9XHJcbiAgLmltYWdlRnJvbV9mb290ZXJNYXAge1xyXG4gICAgd2lkdGg6IGNhbGMoNzJ2dyArIDIwcHgpO1xyXG4gIH1cclxuICAudmlkZW9Gcm9tX2Zvb3RlciB7XHJcbiAgICB3aWR0aDogY2FsYyg3MnZ3ICsgMjBweCk7XHJcbiAgICAtby1vYmplY3QtZml0OiBmaWxsO1xyXG4gICAgb2JqZWN0LWZpdDogZmlsbDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAuc2hhcnBlciB7XHJcbiAgICAmLmNoYXREaXYge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICAuc2hhcnBlci1ib3R0b20ge1xyXG4gICAgJi5jaGF0RGl2IHtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zaGFycGVyLXRvcCB7XHJcbiAgICAmLmNoYXREaXYge1xyXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuaW9uLWJ1dHRvbnMge1xyXG4gIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICB9XHJcbn1cclxuaW9uLXRpdGxlIHtcclxuICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuaW9uLWZhYi1idXR0b24ge1xyXG4gIHdpZHRoOiA0N3B4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA0N3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWZhYiB7XHJcbiAgYm90dG9tOiAtMjJweCAhaW1wb3J0YW50O1xyXG59XHJcbi5mb290ZXJJY29uIHtcclxuICBjb2xvcjogI2IzOWRkYjtcclxuICBmb250LXNpemU6IDIuNWVtO1xyXG59XHJcbi5mb290ZXJJY29uU2VuZCB7XHJcbiAgY29sb3I6IHJnYmEoMTYxLCAxNjksIDE4NywgMC45Mik7XHJcbn1cclxuaW9uLWlucHV0IHtcclxuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xyXG59XHJcbi5jaGF0RGl2TG9hZGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIG1pbi13aWR0aDogODBweDtcclxuICBtYXgtd2lkdGg6IDgwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAycHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgLmNvcm5lci1wYXJlbnQtcmlnaHQge1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IC0xNnB4O1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAuY29ybmVyLWNoaWxkLXJpZ2h0IHtcclxuICAgICAgd2lkdGg6IDA7XHJcbiAgICAgIGhlaWdodDogMDtcclxuICAgICAgYm9yZGVyLXRvcDogMTRweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAxOXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmlvbi10ZXh0IHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG59XHJcbmlvbi1jb2wge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uaW1hZ2VBdmF0YXJCb3R0b21Mb2FkZXIge1xyXG4gIG1heC13aWR0aDogMjE0cHg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDhweDtcclxuICB6LWluZGV4OiAxMTtcclxufVxyXG4uaGlkZGVuIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuLmxvYWRpbmctY29sIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4ucmlnaHQge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuLmxlZnQge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG5cclxuLmNsdWJiZWQge1xyXG4gIC5pbWFnZUF2YXRhclJpZ2h0IHtcclxuICAgIC5jaGF0RGl2IHtcclxuICAgICAgcGFkZGluZzogOHB4O1xyXG5cclxuICAgICAgLmNvcm5lci1wYXJlbnQtcmlnaHQge1xyXG4gICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICB3aWR0aDogMTZweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogLTE2cHg7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAuY29ybmVyLWNoaWxkLXJpZ2h0IHtcclxuICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDogMTRweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGJvcmRlci1yaWdodDogMTlweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5pbWFnZUF2YXRhckxlZnQge1xyXG4gICAgLmNoYXREaXYge1xyXG4gICAgICAuY29ybmVyLXBhcmVudC1sZWZ0IHtcclxuICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAtMTZweDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgIC5jb3JuZXItY2hpbGQtbGVmdCB7XHJcbiAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDE0cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBib3JkZXItbGVmdDogMTdweCBzb2xpZCAjYjlhM2U4O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNiOWEzZTg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5pbnB1dC1ib3gge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay1zaGFkZSk7XHJcbn1cclxuaW9uLWl0ZW0uZm9vdGVyX2l0ZW0ge1xyXG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XHJcbiAgLS1oaWdobGlnaHQtY29sb3ItdmFsaWQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdCkgIWltcG9ydGFudDtcclxufVxyXG4uZm9vdGVyLW9wdGlvbnMge1xyXG4gIGJhY2tncm91bmQ6ICNlOGU4Zjg7XHJcbn1cclxuLmZvb3Rlcl9yb3cge1xyXG4gIHBhZGRpbmc6IDE2cHggMHB4IDBweCAwcHg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgLmZvb3Rlcl9sYWJlbCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgfVxyXG59XHJcbmFnbS1tYXAge1xyXG4gIGhlaWdodDogY2FsYyg3MnZ3ICsgMjBweCk7XHJcbiAgd2lkdGg6IGNhbGMoNzJ2dyArIDIwcHgpO1xyXG59XHJcbi5jaGF0LXRpbWUge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGNvbG9yOiAjODg4O1xyXG59XHJcblxyXG4uY29ybmVyLXBhcmVudC1sZWZ0LWltYWdlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IC0yMHB4O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gMjBweCk7XHJcbiAgdG9wOiAwO1xyXG4gIGJhY2tncm91bmQ6ICNlOGU4Zjg7XHJcbn1cclxuLmNvcm5lci1jaGlsZC1sZWZ0LWltYWdlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiBjYWxjKDEwMCUgLSAyMHB4KTtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgcmlnaHQ6IC0yMHB4O1xyXG4gIC5jaGlsZCB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDIxcHggc29saWQgI2U4ZThmODtcclxuICAgIGJvcmRlci1ib3R0b206IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG59XHJcbi50cmFuc3BhcmVudC1iZyB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmxvYWRlci10ZXh0IHtcclxuICBwYWRkaW5nOiAwIDIwcHggMCAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiaW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyNnB4O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2U4ZThmODtcbn1cblxuaW9uLWhlYWRlciB7XG4gIC0tYmFja2dyb3VuZDogIzViMjU3Mztcbn1cblxuaW9uLXRvb2xiYXIsXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmc6IDIwcHggMTBweCAwIDEwcHg7XG59XG5cbi5pbWFnZUF2YXRhclJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbi5pbWFnZUF2YXRhclJpZ2h0IC5pbWFnZUF2YXRhckJvdHRvbSB7XG4gIG1heC13aWR0aDogMjE0cHg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNnB4O1xuICB6LWluZGV4OiAxMTtcbn1cbi5pbWFnZUF2YXRhclJpZ2h0IC5hdmF0YXIge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5pbWFnZUF2YXRhclJpZ2h0IC5pbWFnZUF2YXRhckJvdHRvbUljb24ge1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktdGludCk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNyU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICByaWdodDogMTAuMSU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5pbWFnZUF2YXRhclJpZ2h0IC5jaGF0RGl2IHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICBtYXgtd2lkdGg6IDcydnc7XG4gIGNvbG9yOiAjNDQ0O1xufVxuLmltYWdlQXZhdGFyUmlnaHQgaW9uLWltZyB7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG59XG4uaW1hZ2VBdmF0YXJSaWdodCAuc2hhcnBlci5jaGF0RGl2IHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5pbWFnZUF2YXRhclJpZ2h0IC5zaGFycGVyLWJvdHRvbS5jaGF0RGl2IHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG59XG4uaW1hZ2VBdmF0YXJSaWdodCAuc2hhcnBlci10b3AuY2hhdERpdiB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xufVxuXG4uaW1hZ2VBdmF0YXJMZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuLmltYWdlQXZhdGFyTGVmdCAuaW1hZ2VBdmF0YXJCb3R0b20ge1xuICBtYXgtd2lkdGg6IDIxNHB4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDZweDtcbiAgei1pbmRleDogMTE7XG59XG4uaW1hZ2VBdmF0YXJMZWZ0IC5hdmF0YXIge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5pbWFnZUF2YXRhckxlZnQgLmltYWdlQXZhdGFyQm90dG9tSWNvbiB7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE3JTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHJpZ2h0OiAxMC4xJTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmltYWdlQXZhdGFyTGVmdCAuY2hhdERpdiB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI2I5YTNlODtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgbWF4LXdpZHRoOiA3MnZ3O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDhweDtcbn1cbi5pbWFnZUF2YXRhckxlZnQgLmNoYXREaXYudHJhbnNwYXJlbnQtYmcge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5pbWFnZUF2YXRhckxlZnQgaW9uLWltZyB7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG59XG4uaW1hZ2VBdmF0YXJMZWZ0IGlvbi1pbWcuaW1hZ2VGcm9tX2Zvb3RlciB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyAwcHgpO1xuICBoZWlnaHQ6IGF1dG87XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLmltYWdlQXZhdGFyTGVmdCAuaW1hZ2VGcm9tX2Zvb3RlciB7XG4gIHdpZHRoOiBjYWxjKDcydncgKyAyMHB4KTtcbn1cbi5pbWFnZUF2YXRhckxlZnQgLmltYWdlRnJvbV9mb290ZXIudmlkZW8ge1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cbi5pbWFnZUF2YXRhckxlZnQgLmltYWdlRnJvbV9mb290ZXJNYXAge1xuICB3aWR0aDogY2FsYyg3MnZ3ICsgMjBweCk7XG59XG4uaW1hZ2VBdmF0YXJMZWZ0IC52aWRlb0Zyb21fZm9vdGVyIHtcbiAgd2lkdGg6IGNhbGMoNzJ2dyArIDIwcHgpO1xuICAtby1vYmplY3QtZml0OiBmaWxsO1xuICBvYmplY3QtZml0OiBmaWxsO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uaW1hZ2VBdmF0YXJMZWZ0IC5zaGFycGVyLmNoYXREaXYge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuLmltYWdlQXZhdGFyTGVmdCAuc2hhcnBlci1ib3R0b20uY2hhdERpdiB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xufVxuLmltYWdlQXZhdGFyTGVmdCAuc2hhcnBlci10b3AuY2hhdERpdiB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xufVxuXG5pb24tYnV0dG9ucyBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG5pb24tZmFiLWJ1dHRvbiB7XG4gIHdpZHRoOiA0N3B4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDdweCAhaW1wb3J0YW50O1xufVxuXG5pb24tZmFiIHtcbiAgYm90dG9tOiAtMjJweCAhaW1wb3J0YW50O1xufVxuXG4uZm9vdGVySWNvbiB7XG4gIGNvbG9yOiAjYjM5ZGRiO1xuICBmb250LXNpemU6IDIuNWVtO1xufVxuXG4uZm9vdGVySWNvblNlbmQge1xuICBjb2xvcjogcmdiYSgxNjEsIDE2OSwgMTg3LCAwLjkyKTtcbn1cblxuaW9uLWlucHV0IHtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbn1cblxuLmNoYXREaXZMb2FkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG1pbi13aWR0aDogODBweDtcbiAgbWF4LXdpZHRoOiA4MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDJweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uY2hhdERpdkxvYWRlciAuY29ybmVyLXBhcmVudC1yaWdodCB7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0xNnB4O1xuICBib3R0b206IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4uY2hhdERpdkxvYWRlciAuY29ybmVyLXBhcmVudC1yaWdodCAuY29ybmVyLWNoaWxkLXJpZ2h0IHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLXRvcDogMTRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiAxOXB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XG59XG5cbmlvbi10ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG5cbmlvbi1jb2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmltYWdlQXZhdGFyQm90dG9tTG9hZGVyIHtcbiAgbWF4LXdpZHRoOiAyMTRweDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA4cHg7XG4gIHotaW5kZXg6IDExO1xufVxuXG4uaGlkZGVuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4ubG9hZGluZy1jb2wge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLnJpZ2h0IHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5sZWZ0IHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuLmNsdWJiZWQgLmltYWdlQXZhdGFyUmlnaHQgLmNoYXREaXYge1xuICBwYWRkaW5nOiA4cHg7XG59XG4uY2x1YmJlZCAuaW1hZ2VBdmF0YXJSaWdodCAuY2hhdERpdiAuY29ybmVyLXBhcmVudC1yaWdodCB7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0xNnB4O1xuICBib3R0b206IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4uY2x1YmJlZCAuaW1hZ2VBdmF0YXJSaWdodCAuY2hhdERpdiAuY29ybmVyLXBhcmVudC1yaWdodCAuY29ybmVyLWNoaWxkLXJpZ2h0IHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLXRvcDogMTRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiAxOXB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XG59XG4uY2x1YmJlZCAuaW1hZ2VBdmF0YXJMZWZ0IC5jaGF0RGl2IC5jb3JuZXItcGFyZW50LWxlZnQge1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxNnB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTE2cHg7XG4gIGJvdHRvbTogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5jbHViYmVkIC5pbWFnZUF2YXRhckxlZnQgLmNoYXREaXYgLmNvcm5lci1wYXJlbnQtbGVmdCAuY29ybmVyLWNoaWxkLWxlZnQge1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItdG9wOiAxNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0OiAxN3B4IHNvbGlkICNiOWEzZTg7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjYjlhM2U4O1xufVxuXG4uaW5wdXQtYm94IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXNoYWRlKTtcbn1cblxuaW9uLWl0ZW0uZm9vdGVyX2l0ZW0ge1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xuICAtLWhpZ2hsaWdodC1jb2xvci12YWxpZDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0KSAhaW1wb3J0YW50O1xufVxuXG4uZm9vdGVyLW9wdGlvbnMge1xuICBiYWNrZ3JvdW5kOiAjZThlOGY4O1xufVxuXG4uZm9vdGVyX3JvdyB7XG4gIHBhZGRpbmc6IDE2cHggMHB4IDBweCAwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLmZvb3Rlcl9yb3cgLmZvb3Rlcl9sYWJlbCB7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbmFnbS1tYXAge1xuICBoZWlnaHQ6IGNhbGMoNzJ2dyArIDIwcHgpO1xuICB3aWR0aDogY2FsYyg3MnZ3ICsgMjBweCk7XG59XG5cbi5jaGF0LXRpbWUge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogIzg4ODtcbn1cblxuLmNvcm5lci1wYXJlbnQtbGVmdC1pbWFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0yMHB4O1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kOiAjZThlOGY4O1xufVxuXG4uY29ybmVyLWNoaWxkLWxlZnQtaW1hZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogY2FsYygxMDAlIC0gMjBweCk7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHJpZ2h0OiAtMjBweDtcbn1cbi5jb3JuZXItY2hpbGQtbGVmdC1pbWFnZSAuY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IDIxcHggc29saWQgI2U4ZThmODtcbiAgYm9yZGVyLWJvdHRvbTogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLnRyYW5zcGFyZW50LWJnIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5sb2FkZXItdGV4dCB7XG4gIHBhZGRpbmc6IDAgMjBweCAwIDEwcHggIWltcG9ydGFudDtcbn0iXX0= */"]
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
        var chat_r487 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](chat_r487.time);
      }
    }

    function WhatsappPage_ion_list_26_ion_item_1_ion_text_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-text", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var chat_r487 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](chat_r487.past);
      }
    }

    function WhatsappPage_ion_list_26_ion_item_1_ion_avatar_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-avatar", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var chat_r487 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](chat_r487.count);
      }
    }

    function WhatsappPage_ion_list_26_ion_item_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r495 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WhatsappPage_ion_list_26_ion_item_1_Template_ion_item_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r495);

          var chat_r487 = ctx.$implicit;

          var ctx_r494 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          return ctx_r494.goforChat(chat_r487);
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
        var chat_r487 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", chat_r487.image);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", chat_r487.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](chat_r487.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", chat_r487.time);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", chat_r487.past);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", chat_r487.count);
      }
    }

    function WhatsappPage_ion_list_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-list", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, WhatsappPage_ion_list_26_ion_item_1_Template, 15, 6, "ion-item", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r484 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r484.chatData);
      }
    }

    function WhatsappPage_ion_list_27_ion_item_1_ion_icon_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-icon", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var chat_r497 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("name", chat_r497.video);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", chat_r497.count, " ");
      }
    }

    function WhatsappPage_ion_list_27_ion_item_1_ion_icon_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-icon", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var chat_r497 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("name", chat_r497.phone);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", chat_r497.count, " ");
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
        var chat_r497 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", chat_r497.image);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", chat_r497.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](chat_r497.call);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", chat_r497.video);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", chat_r497.phone);
      }
    }

    function WhatsappPage_ion_list_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-list", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, WhatsappPage_ion_list_27_ion_item_1_Template, 14, 5, "ion-item", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r485 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r485.chatData);
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
      styles: [".chatImage[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n}\n\n.plusClass[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 25px;\n  height: 25px;\n  background: white;\n  border-radius: 50%;\n  right: 15px;\n  position: relative;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), background-color 15ms linear, color 15ms linear;\n  box-shadow: 0 0.5px 0px 5px rgba(0, 0, 0, 0.2), 0 0px 0px 0 rgba(0, 0, 0, 0.14), 0 0px 0px 0 rgba(0, 0, 0, 0.12);\n}\n\nion-header[_ngcontent-%COMP%]:after {\n  box-shadow: 0 0px 20px rgba(0, 0, 0, 0.5);\n  background-image: none;\n  left: 0;\n  bottom: 0px;\n  background-position: left 0 top 0;\n  position: absolute;\n  width: 100%;\n  height: 8px;\n  content: \"\";\n}\n\nion-header[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%] {\n  --background: #006257;\n}\n\n.contentCenter[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-segment-button[_ngcontent-%COMP%] {\n  --color: #58938e !important;\n  --color-checked: var(--ion-color-tertiary-contrast);\n  border-bottom: 0px solid rgba(255, 255, 255, 0.3);\n}\n\n.padding_right[_ngcontent-%COMP%] {\n  padding-right: 8px;\n}\n\nion-icon[_ngcontent-%COMP%] {\n  width: 1.5em;\n  height: 1.5em;\n}\n\n.header_image[_ngcontent-%COMP%] {\n  width: 1.5em;\n  height: 1.5em;\n  margin: 0px 18px 0px 18px;\n}\n\n.tab-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.withcount[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.chatCount[_ngcontent-%COMP%] {\n  background: var(--ion-color-success);\n  width: 17px !important;\n  height: 17px !important;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  font-size: 10px;\n  font-weight: bold;\n  color: var(--background);\n  margin-left: 8px;\n}\n\n.videocam[_ngcontent-%COMP%] {\n  width: 17px !important;\n  height: 17px !important;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  font-size: 10px;\n  font-weight: bold;\n  color: #006257;\n  margin-left: 8px;\n}\n\n.segmentCount[_ngcontent-%COMP%] {\n  background: var(--ion-color-tertiary-contrast);\n  width: 17px !important;\n  height: 17px !important;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  font-size: 10px;\n  font-weight: bold;\n  color: #006257;\n  margin-left: 8px;\n  padding: 3px;\n  box-sizing: content-box;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 0.84em;\n  font-weight: bold;\n  color: #383a3ee3;\n}\n\n.timeEnd[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding-bottom: 8px;\n}\n\n.widthHalf[_ngcontent-%COMP%] {\n  color: #222428b0;\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.nameAvatar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 50%;\n}\n\n.nameAvatar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 0.94em;\n  font-weight: bold;\n}\n\nion-text[_ngcontent-%COMP%] {\n  font-size: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-text.segment_Text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.sc-ion-label-ios-h[_ngcontent-%COMP%] {\n  height: 44px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.timeSlot[_ngcontent-%COMP%] {\n  align-items: flex-end;\n  display: flex;\n  flex-direction: column;\n}\n\nion-searchbar[_ngcontent-%COMP%] {\n  --placeholder-color: white;\n  --color: white;\n  height: 35px !important;\n}\n\n.list-ios[_ngcontent-%COMP%] {\n  margin-bottom: 0 !important;\n}\n\n.sc-ion-label-ios-s[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  margin-top: 5px;\n}\n\n.title-ios[_ngcontent-%COMP%] {\n  height: 40px !important;\n  padding-top: 12px;\n  padding-left: 50px;\n  padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2xvbmVzLXVpL2NvbXBvbmVudHMvd2hhdHNhcHAvQzpcXFVzZXJzXFxzYWJhZGlcXERvY3VtZW50c1xcUHJvamV0b3NcXF9pb25pY1xcaW9uaWM0LWNvbXBvbmVudHMvc3JjXFxhcHBcXHBhZ2VzXFxjbG9uZXMtdWlcXGNvbXBvbmVudHNcXHdoYXRzYXBwXFx3aGF0c2FwcC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Nsb25lcy11aS9jb21wb25lbnRzL3doYXRzYXBwL3doYXRzYXBwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDBHQUFBO0VBQ0EsZ0hBQUE7QUNFSjs7QURDSTtFQUNJLHlDQUFBO0VBQ0Esc0JBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNFUjs7QURFQTs7RUFFSSxxQkFBQTtBQ0NKOztBRENBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURBQTtFQUNJLDJCQUFBO0VBQ0EsbURBQUE7RUFDQSxpREFBQTtBQ0dKOztBREFBO0VBQ0ksa0JBQUE7QUNHSjs7QUREQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FDSUo7O0FERkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FDS0o7O0FESEE7RUFDSSxlQUFBO0FDTUo7O0FESkE7RUFDSSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQ09KOztBRExBO0VBQ0ksb0NBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FDUUo7O0FETkE7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNTSjs7QURQQTtFQUNJLDhDQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDVUo7O0FEUkE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNXSjs7QURUQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDWUo7O0FEVkE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ2FKOztBRFhBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQ2NKOztBRGJJO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQ2VSOztBRFhBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDY0o7O0FEWkE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNlSjs7QURiQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ2dCSjs7QURkQTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDaUJKOztBRGZBO0VBQ0ksMEJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUNrQko7O0FEaEJBO0VBQ0ksMkJBQUE7QUNtQko7O0FEakJBO0VBQ0ksZUFBQTtBQ29CSjs7QURsQkE7RUFDSSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ3FCSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Nsb25lcy11aS9jb21wb25lbnRzL3doYXRzYXBwL3doYXRzYXBwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGF0SW1hZ2Uge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuLnBsdXNDbGFzcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyODBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpLCBiYWNrZ3JvdW5kLWNvbG9yIDE1bXMgbGluZWFyLCBjb2xvciAxNW1zIGxpbmVhcjtcclxuICAgIGJveC1zaGFkb3c6IDAgMC41cHggMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMHB4IDBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMHB4IDBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbn1cclxuaW9uLWhlYWRlciB7XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCAwIHRvcCAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDhweDtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24taGVhZGVyLFxyXG5pb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwMDYyNTc7XHJcbn1cclxuLmNvbnRlbnRDZW50ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5pb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgLS1jb2xvcjogIzU4OTM4ZSAhaW1wb3J0YW50O1xyXG4gICAgLS1jb2xvci1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QpO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxufVxyXG5cclxuLnBhZGRpbmdfcmlnaHQge1xyXG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xyXG59XHJcbmlvbi1pY29uIHtcclxuICAgIHdpZHRoOiAxLjVlbTtcclxuICAgIGhlaWdodDogMS41ZW07XHJcbn1cclxuLmhlYWRlcl9pbWFnZSB7XHJcbiAgICB3aWR0aDogMS41ZW07XHJcbiAgICBoZWlnaHQ6IDEuNWVtO1xyXG4gICAgbWFyZ2luOiAwcHggMThweCAwcHggMThweDtcclxufVxyXG4udGFiLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi53aXRoY291bnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmNoYXRDb3VudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XHJcbiAgICB3aWR0aDogMTdweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG59XHJcbi52aWRlb2NhbSB7XHJcbiAgICB3aWR0aDogMTdweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzAwNjI1NztcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuLnNlZ21lbnRDb3VudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QpO1xyXG4gICAgd2lkdGg6IDE3cHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTdweCAhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMwMDYyNTc7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbn1cclxuaDIge1xyXG4gICAgZm9udC1zaXplOiAwLjg0ZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjMzgzYTNlZTM7XHJcbn1cclxuLnRpbWVFbmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG59XHJcbi53aWR0aEhhbGYge1xyXG4gICAgY29sb3I6ICMyMjI0MjhiMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5uYW1lQXZhdGFyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDAuOTRlbTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5pb24tdGV4dC5zZWdtZW50X1RleHQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uc2MtaW9uLWxhYmVsLWlvcy1oIHtcclxuICAgIGhlaWdodDogNDRweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnRpbWVTbG90IHtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbmlvbi1zZWFyY2hiYXIge1xyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogd2hpdGU7XHJcbiAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogMzVweCAhaW1wb3J0YW50O1xyXG59XHJcbi5saXN0LWlvcyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNjLWlvbi1sYWJlbC1pb3MtcyBwOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi50aXRsZS1pb3Mge1xyXG4gICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcbiIsIi5jaGF0SW1hZ2Uge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4ucGx1c0NsYXNzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHJpZ2h0OiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjgwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSwgYmFja2dyb3VuZC1jb2xvciAxNW1zIGxpbmVhciwgY29sb3IgMTVtcyBsaW5lYXI7XG4gIGJveC1zaGFkb3c6IDAgMC41cHggMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMHB4IDBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMHB4IDBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbmlvbi1oZWFkZXI6YWZ0ZXIge1xuICBib3gtc2hhZG93OiAwIDBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgMCB0b3AgMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4cHg7XG4gIGNvbnRlbnQ6IFwiXCI7XG59XG5cbmlvbi1oZWFkZXIsXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzAwNjI1Nztcbn1cblxuLmNvbnRlbnRDZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgLS1jb2xvcjogIzU4OTM4ZSAhaW1wb3J0YW50O1xuICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdCk7XG4gIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG59XG5cbi5wYWRkaW5nX3JpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xufVxuXG5pb24taWNvbiB7XG4gIHdpZHRoOiAxLjVlbTtcbiAgaGVpZ2h0OiAxLjVlbTtcbn1cblxuLmhlYWRlcl9pbWFnZSB7XG4gIHdpZHRoOiAxLjVlbTtcbiAgaGVpZ2h0OiAxLjVlbTtcbiAgbWFyZ2luOiAwcHggMThweCAwcHggMThweDtcbn1cblxuLnRhYi1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ud2l0aGNvdW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2hhdENvdW50IHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xuICB3aWR0aDogMTdweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE3cHggIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLnZpZGVvY2FtIHtcbiAgd2lkdGg6IDE3cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxN3B4ICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzAwNjI1NztcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLnNlZ21lbnRDb3VudCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdCk7XG4gIHdpZHRoOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTdweCAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwMDYyNTc7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIHBhZGRpbmc6IDNweDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAwLjg0ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzM4M2EzZWUzO1xufVxuXG4udGltZUVuZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG5cbi53aWR0aEhhbGYge1xuICBjb2xvcjogIzIyMjQyOGIwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubmFtZUF2YXRhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA1MCU7XG59XG4ubmFtZUF2YXRhciBoMiB7XG4gIGZvbnQtc2l6ZTogMC45NGVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW9uLXRleHQge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5pb24tdGV4dC5zZWdtZW50X1RleHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2MtaW9uLWxhYmVsLWlvcy1oIHtcbiAgaGVpZ2h0OiA0NHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnRpbWVTbG90IHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogd2hpdGU7XG4gIC0tY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcbn1cblxuLmxpc3QtaW9zIHtcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuXG4uc2MtaW9uLWxhYmVsLWlvcy1zIHA6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLnRpdGxlLWlvcyB7XG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMTJweDtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn0iXX0= */"]
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