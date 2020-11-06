function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-instagram-instagram-module"], {
  /***/
  "./src/app/components/clones/clone.components.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/clones/clone.components.module.ts ***!
    \**************************************************************/

  /*! exports provided: components, CloneComponentsModule */

  /***/
  function srcAppComponentsClonesCloneComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "components", function () {
      return components;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CloneComponentsModule", function () {
      return CloneComponentsModule;
    });
    /* harmony import */


    var _instagram_ui_insta_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./instagram-ui/insta.component */
    "./src/app/components/clones/instagram-ui/insta.component.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var components = [_instagram_ui_insta_component__WEBPACK_IMPORTED_MODULE_0__["InstagramComponent"]];

    var CloneComponentsModule = function CloneComponentsModule() {
      _classCallCheck(this, CloneComponentsModule);
    };

    CloneComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: CloneComponentsModule
    });
    CloneComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function CloneComponentsModule_Factory(t) {
        return new (t || CloneComponentsModule)();
      },
      imports: [[_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CloneComponentsModule, {
        declarations: [_instagram_ui_insta_component__WEBPACK_IMPORTED_MODULE_0__["InstagramComponent"]],
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
        exports: [_instagram_ui_insta_component__WEBPACK_IMPORTED_MODULE_0__["InstagramComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CloneComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [components],
          imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
          exports: [components]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/clones/instagram-ui/insta.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/clones/instagram-ui/insta.component.ts ***!
    \*******************************************************************/

  /*! exports provided: InstagramComponent */

  /***/
  function srcAppComponentsClonesInstagramUiInstaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InstagramComponent", function () {
      return InstagramComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    function InstagramComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-item", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-avatar", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-text", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "ion-icon", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "ion-icon", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "ion-icon", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "ion-icon", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "ion-icon", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ion-text", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ion-text");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.subtitle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.likes);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.desc);
      }
    }

    var InstagramComponent = /*#__PURE__*/function () {
      function InstagramComponent() {
        _classCallCheck(this, InstagramComponent);

        this.instaData = [{
          title: 'Striker II',
          subtitle: 'Hey there !',
          img: 'https://www.dropbox.com/s/fmv3y88ccpuajgo/musk.jpg?raw=1',
          avatar: 'https://www.dropbox.com/s/149w8lj8w2mkdig/trump.jpg?raw=1',
          desc: 'Lorem ipsum dolor what is this multi-line text',
          likes: '5 likes'
        }, {
          title: 'Akena',
          subtitle: 'Mountain lover !',
          img: 'https://www.dropbox.com/s/nmwasfye1ur01la/mountain.jpg?raw=1',
          avatar: 'https://www.dropbox.com/s/x12of27iact93y3/coderr.jpg?raw=1',
          desc: 'Lorem ipsum dolor what is this multi-line text',
          likes: '1115 likes'
        }, {
          title: 'Adam Chris',
          subtitle: 'Is dil ke laddoo fat gaye',
          img: 'https://www.dropbox.com/s/u2zkqe6wu2pt9ke/boy.jpg?raw=1',
          avatar: 'https://www.dropbox.com/s/n6eg08194q7nxvl/codergirl.jpg?raw=1',
          desc: 'Lorem ipsum dolor what is this multi-line text',
          likes: '10 likes '
        }, {
          title: 'Jim Halpert',
          subtitle: 'Yipee ka yay',
          img: 'https://www.dropbox.com/s/6b6cirog51q9sfm/coder.jpg?raw=1',
          avatar: 'https://www.dropbox.com/s/ct8s21p1mznn0l2/aptaya.jpg?raw=1',
          desc: 'Lorem ipsum dolor what is this multi-line text',
          likes: '100 likes '
        }, {
          title: 'Micheal Scott',
          subtitle: 'Scmarf Kajaaak',
          img: 'https://www.dropbox.com/s/9x31o0pw5qld8wg/boyy.jpg?raw=1',
          avatar: 'https://www.dropbox.com/s/149w8lj8w2mkdig/trump.jpg?raw=1',
          desc: 'Lorem ipsum dolor what is this multi-line text',
          likes: '100 likes '
        }];
      }

      _createClass(InstagramComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InstagramComponent;
    }();

    InstagramComponent.ɵfac = function InstagramComponent_Factory(t) {
      return new (t || InstagramComponent)();
    };

    InstagramComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InstagramComponent,
      selectors: [["app-component-instagram"]],
      decls: 1,
      vars: 1,
      consts: [["class", "feed-block", 4, "ngFor", "ngForOf"], [1, "feed-block"], [1, "block-header"], ["lines", "none"], ["slot", "start"], [3, "src"], ["color", "dark"], ["slot", "end", "name", "more"], [1, "block-image"], [1, "block-icons"], ["slot", "start", "name", "heart-outline"], ["slot", "start", "name", "chatbubble-outline"], ["slot", "start", "name", "send-outline"], ["name", "bookmark-outline", 1, "bookmark"], [1, "block-desc"], [1, "likes"]],
      template: function InstagramComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InstagramComponent_div_0_Template, 25, 6, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.instaData);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"]],
      styles: [".feed-block[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.feed-block[_ngcontent-%COMP%]   .block-image[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  text-align: center;\n}\n.feed-block[_ngcontent-%COMP%]   .block-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  min-height: 300px;\n  background: #aaa;\n}\n.feed-block[_ngcontent-%COMP%]   .block-header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n}\n.feed-block[_ngcontent-%COMP%]   .block-header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 16px;\n}\n.feed-block[_ngcontent-%COMP%]   .block-header[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%] {\n  border: 1px solid rgba(0, 0, 0, 0.3);\n}\n.feed-block[_ngcontent-%COMP%]   .block-icons[_ngcontent-%COMP%] {\n  padding: 5px 15px;\n}\n.feed-block[_ngcontent-%COMP%]   .block-icons[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  margin-right: 20px;\n  color: #444;\n}\n.feed-block[_ngcontent-%COMP%]   .block-desc[_ngcontent-%COMP%] {\n  padding: 0 15px 8px 15px;\n  font-size: 14px;\n  font-family: sans-serif;\n}\n.feed-block[_ngcontent-%COMP%]   .block-desc[_ngcontent-%COMP%]   .likes[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jbG9uZXMvaW5zdGFncmFtLXVpL0M6XFxVc2Vyc1xcVmFnbmVyIFNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZWN0c1xcX015XFxhd2Vzb21lLWNvbXBvbmVudHMtaW9uaWMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNsb25lc1xcaW5zdGFncmFtLXVpXFxpbnN0YS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jbG9uZXMvaW5zdGFncmFtLXVpL2luc3RhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUNDRjtBREFFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0VKO0FEREk7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FDR047QURFTTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0FSO0FERU07RUFDRSxpQkFBQTtBQ0FSO0FER0k7RUFDRSxvQ0FBQTtBQ0ROO0FESUU7RUFDRSxpQkFBQTtBQ0ZKO0FER0k7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDRE47QURJRTtFQUNFLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FDRko7QURHSTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ0ROIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jbG9uZXMvaW5zdGFncmFtLXVpL2luc3RhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZlZWQtYmxvY2sge1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgLmJsb2NrLWltYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBpbWcge1xyXG4gICAgICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICAgICAgYmFja2dyb3VuZDogI2FhYTtcclxuICAgIH1cclxuICB9XHJcbiAgLmJsb2NrLWhlYWRlciB7XHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB9XHJcbiAgICAgIHAge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24tYXZhdGFyIHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgfVxyXG4gIH1cclxuICAuYmxvY2staWNvbnMge1xyXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICBjb2xvcjogIzQ0NDtcclxuICAgIH1cclxuICB9XHJcbiAgLmJsb2NrLWRlc2Mge1xyXG4gICAgcGFkZGluZzogMCAxNXB4IDhweCAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAubGlrZXMge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuZmVlZC1ibG9jayB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uZmVlZC1ibG9jayAuYmxvY2staW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mZWVkLWJsb2NrIC5ibG9jay1pbWFnZSBpbWcge1xuICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgYmFja2dyb3VuZDogI2FhYTtcbn1cbi5mZWVkLWJsb2NrIC5ibG9jay1oZWFkZXIgaW9uLWxhYmVsIGgzIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5mZWVkLWJsb2NrIC5ibG9jay1oZWFkZXIgaW9uLWxhYmVsIHAge1xuICBsaW5lLWhlaWdodDogMTZweDtcbn1cbi5mZWVkLWJsb2NrIC5ibG9jay1oZWFkZXIgaW9uLWF2YXRhciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cbi5mZWVkLWJsb2NrIC5ibG9jay1pY29ucyB7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xufVxuLmZlZWQtYmxvY2sgLmJsb2NrLWljb25zIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjNDQ0O1xufVxuLmZlZWQtYmxvY2sgLmJsb2NrLWRlc2Mge1xuICBwYWRkaW5nOiAwIDE1cHggOHB4IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG59XG4uZmVlZC1ibG9jayAuYmxvY2stZGVzYyAubGlrZXMge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InstagramComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-component-instagram',
          templateUrl: './insta.component.html',
          styleUrls: ['./insta.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/clones-ui/components/instagram/instagram-routing.module.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/pages/clones-ui/components/instagram/instagram-routing.module.ts ***!
    \**********************************************************************************/

  /*! exports provided: InstagramPageRoutingModule */

  /***/
  function srcAppPagesClonesUiComponentsInstagramInstagramRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InstagramPageRoutingModule", function () {
      return InstagramPageRoutingModule;
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


    var _instagram_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./instagram.page */
    "./src/app/pages/clones-ui/components/instagram/instagram.page.ts");

    var routes = [{
      path: '',
      component: _instagram_page__WEBPACK_IMPORTED_MODULE_2__["InstagramPage"]
    }];

    var InstagramPageRoutingModule = function InstagramPageRoutingModule() {
      _classCallCheck(this, InstagramPageRoutingModule);
    };

    InstagramPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: InstagramPageRoutingModule
    });
    InstagramPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function InstagramPageRoutingModule_Factory(t) {
        return new (t || InstagramPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InstagramPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InstagramPageRoutingModule, [{
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
  "./src/app/pages/clones-ui/components/instagram/instagram.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/clones-ui/components/instagram/instagram.module.ts ***!
    \**************************************************************************/

  /*! exports provided: InstagramPageModule */

  /***/
  function srcAppPagesClonesUiComponentsInstagramInstagramModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InstagramPageModule", function () {
      return InstagramPageModule;
    });
    /* harmony import */


    var _components_clones_clone_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../../../components/clones/clone.components.module */
    "./src/app/components/clones/clone.components.module.ts");
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


    var _instagram_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./instagram-routing.module */
    "./src/app/pages/clones-ui/components/instagram/instagram-routing.module.ts");
    /* harmony import */


    var _instagram_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./instagram.page */
    "./src/app/pages/clones-ui/components/instagram/instagram.page.ts");

    var InstagramPageModule = function InstagramPageModule() {
      _classCallCheck(this, InstagramPageModule);
    };

    InstagramPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: InstagramPageModule
    });
    InstagramPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function InstagramPageModule_Factory(t) {
        return new (t || InstagramPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _instagram_routing_module__WEBPACK_IMPORTED_MODULE_5__["InstagramPageRoutingModule"], _components_clones_clone_components_module__WEBPACK_IMPORTED_MODULE_0__["CloneComponentsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](InstagramPageModule, {
        declarations: [_instagram_page__WEBPACK_IMPORTED_MODULE_6__["InstagramPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _instagram_routing_module__WEBPACK_IMPORTED_MODULE_5__["InstagramPageRoutingModule"], _components_clones_clone_components_module__WEBPACK_IMPORTED_MODULE_0__["CloneComponentsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InstagramPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _instagram_routing_module__WEBPACK_IMPORTED_MODULE_5__["InstagramPageRoutingModule"], _components_clones_clone_components_module__WEBPACK_IMPORTED_MODULE_0__["CloneComponentsModule"]],
          declarations: [_instagram_page__WEBPACK_IMPORTED_MODULE_6__["InstagramPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/clones-ui/components/instagram/instagram.page.ts":
  /*!************************************************************************!*\
    !*** ./src/app/pages/clones-ui/components/instagram/instagram.page.ts ***!
    \************************************************************************/

  /*! exports provided: InstagramPage */

  /***/
  function srcAppPagesClonesUiComponentsInstagramInstagramPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InstagramPage", function () {
      return InstagramPage;
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


    var _components_clones_instagram_ui_insta_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../components/clones/instagram-ui/insta.component */
    "./src/app/components/clones/instagram-ui/insta.component.ts");

    var InstagramPage = /*#__PURE__*/function () {
      function InstagramPage() {
        _classCallCheck(this, InstagramPage);
      }

      _createClass(InstagramPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InstagramPage;
    }();

    InstagramPage.ɵfac = function InstagramPage_Factory(t) {
      return new (t || InstagramPage)();
    };

    InstagramPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InstagramPage,
      selectors: [["app-instagram"]],
      decls: 8,
      vars: 0,
      consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "/clones-ui"]],
      template: function InstagramPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Instagram Layout ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-component-instagram");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _components_clones_instagram_ui_insta_component__WEBPACK_IMPORTED_MODULE_2__["InstagramComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Nsb25lcy11aS9jb21wb25lbnRzL2luc3RhZ3JhbS9pbnN0YWdyYW0ucGFnZS5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InstagramPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-instagram',
          templateUrl: './instagram.page.html',
          styleUrls: ['./instagram.page.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=components-instagram-instagram-module-es5.js.map