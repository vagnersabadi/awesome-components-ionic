function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-yannbf-components-accordion-list-accordion-list-module~pages-yannbf-components-miscell~8ed0dc24"], {
  /***/
  "./src/app/components/yannbf/accordion-list/accordion-list.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/components/yannbf/accordion-list/accordion-list.component.ts ***!
    \******************************************************************************/

  /*! exports provided: AccordionListComponent */

  /***/
  function srcAppComponentsYannbfAccordionListAccordionListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccordionListComponent", function () {
      return AccordionListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var _c0 = ["accordionContent"];
    var _c1 = ["*"];

    var AccordionListComponent = /*#__PURE__*/function () {
      function AccordionListComponent(renderer, sanitizer) {
        _classCallCheck(this, AccordionListComponent);

        this.renderer = renderer;
        this.sanitizer = sanitizer;
        this.headerColor = '#F53D3D';
        this.textColor = '#FFF';
        this.contentColor = '#F9F9F9';
        this.hasMargin = true;
      }

      _createClass(AccordionListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!this.expanded) {
            this.renderer.setStyle(this.elementView.nativeElement, 'height', 0 + 'px');
          }
        }
      }, {
        key: "toggleAccordion",
        value: function toggleAccordion() {
          this.expanded = !this.expanded;
          var newHeight = this.expanded ? '100%' : '0px';
          console.log(newHeight);
          this.renderer.setStyle(this.elementView.nativeElement, 'height', newHeight);
        }
      }, {
        key: "getDynamicColor",
        value: function getDynamicColor(color) {
          return this.sanitizer.bypassSecurityTrustStyle("--myvar:" + color);
        }
      }]);

      return AccordionListComponent;
    }();

    AccordionListComponent.ɵfac = function AccordionListComponent_Factory(t) {
      return new (t || AccordionListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]));
    };

    AccordionListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AccordionListComponent,
      selectors: [["app-component-accordion-list"]],
      viewQuery: function AccordionListComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.elementView = _t.first);
        }
      },
      inputs: {
        headerColor: "headerColor",
        textColor: "textColor",
        contentColor: "contentColor",
        title: "title",
        hasMargin: "hasMargin",
        expanded: "expanded"
      },
      ngContentSelectors: _c1,
      decls: 9,
      vars: 9,
      consts: [[1, "accordion-list"], ["lines", "none", 1, "accordion-header", 3, "click"], ["slot", "start", "name", "ios-arrow-forward"], [1, "expand"], [1, "accordion-content"], ["accordionContent", ""]],
      template: function AccordionListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-list", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-item", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccordionListComponent_Template_ion_item_click_1_listener() {
            return ctx.toggleAccordion();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ion-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.getDynamicColor(ctx.headerColor));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.expanded);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.contentColor, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.expanded);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"]],
      styles: [".accordion-header[_ngcontent-%COMP%] {\n  color: white;\n  --background: var(--myvar);\n}\n.accordion-header[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%] {\n  margin-left: 0 !important;\n}\n.accordion-header[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: white;\n  transition: all 0.25s ease-in;\n  transform: rotate(0);\n}\n.active[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n.accordion-content[_ngcontent-%COMP%] {\n  transition: 0.3s ease-in-out;\n}\n.accordion-content.active[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n}\n.label[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n.expand[_ngcontent-%COMP%] {\n  margin: -4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy95YW5uYmYvYWNjb3JkaW9uLWxpc3QvQzpcXFVzZXJzXFxWYWduZXIgU2FiYWRpXFxEb2N1bWVudHNcXFByb2plY3RzXFxfTXlcXGF3ZXNvbWUtY29tcG9uZW50cy1pb25pYy9zcmNcXGFwcFxcY29tcG9uZW50c1xceWFubmJmXFxhY2NvcmRpb24tbGlzdFxcYWNjb3JkaW9uLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMveWFubmJmL2FjY29yZGlvbi1saXN0L2FjY29yZGlvbi1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLDBCQUFBO0FDQ0Y7QURDRTtFQUNFLHlCQUFBO0FDQ0o7QURFRTtFQUNFLFlBQUE7RUFFQSw2QkFBQTtFQUNBLG9CQUFBO0FDREo7QURLQTtFQUNFLHdCQUFBO0FDRkY7QURLQTtFQUNFLDRCQUFBO0FDRkY7QURHRTtFQUNFLGdCQUFBO0FDREo7QURLQTtFQUNFLFdBQUE7QUNGRjtBREtBO0VBQ0UsWUFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy95YW5uYmYvYWNjb3JkaW9uLWxpc3QvYWNjb3JkaW9uLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWNjb3JkaW9uLWhlYWRlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0tbXl2YXIpO1xyXG5cclxuICAuaXRlbS1pbm5lciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgaW9uLWljb24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgfVxyXG59XHJcblxyXG4uYWN0aXZlIGlvbi1pY29uIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbn1cclxuXHJcbi5hY2NvcmRpb24tY29udGVudCB7XHJcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxuICAmLmFjdGl2ZSB7XHJcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmxhYmVsIHtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLmV4cGFuZCB7XHJcbiAgbWFyZ2luOiAtNHB4O1xyXG59XHJcbiIsIi5hY2NvcmRpb24taGVhZGVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6IHZhcigtLW15dmFyKTtcbn1cbi5hY2NvcmRpb24taGVhZGVyIC5pdGVtLWlubmVyIHtcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbn1cbi5hY2NvcmRpb24taGVhZGVyIGlvbi1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbjtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG59XG5cbi5hY3RpdmUgaW9uLWljb24ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG5cbi5hY2NvcmRpb24tY29udGVudCB7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4uYWNjb3JkaW9uLWNvbnRlbnQuYWN0aXZlIHtcbiAgcGFkZGluZzogMC43NXJlbTtcbn1cblxuLmxhYmVsIHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5leHBhbmQge1xuICBtYXJnaW46IC00cHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-component-accordion-list',
          templateUrl: './accordion-list.component.html',
          styleUrls: ['./accordion-list.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
        }];
      }, {
        headerColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['headerColor']
        }],
        textColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['textColor']
        }],
        contentColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['contentColor']
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['title']
        }],
        hasMargin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['hasMargin']
        }],
        expanded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['expanded']
        }],
        elementView: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['accordionContent', {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/yannbf/flash-card/flash-card.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/yannbf/flash-card/flash-card.component.ts ***!
    \**********************************************************************/

  /*! exports provided: FlashCardComponent */

  /***/
  function srcAppComponentsYannbfFlashCardFlashCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlashCardComponent", function () {
      return FlashCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = [[["", 8, "fc-front"]], [["", 8, "fc-back"]]];
    var _c1 = [".fc-front", ".fc-back"];

    var FlashCardComponent = /*#__PURE__*/function () {
      function FlashCardComponent() {
        _classCallCheck(this, FlashCardComponent);

        // @ViewChild('fcContainer', { static: true }) fcContainer;
        // @ViewChild('front', { static: true }) fcFront;
        // @ViewChild('back', { static: true }) fcBack;
        this.flipped = false;
      }

      _createClass(FlashCardComponent, [{
        key: "flip",
        value: function flip() {
          this.flipped = !this.flipped;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FlashCardComponent;
    }();

    FlashCardComponent.ɵfac = function FlashCardComponent_Factory(t) {
      return new (t || FlashCardComponent)();
    };

    FlashCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FlashCardComponent,
      selectors: [["app-flash-card-component"]],
      ngContentSelectors: _c1,
      decls: 8,
      vars: 2,
      consts: [[1, "fc-container", 3, "click"], ["fcContainer", ""], [1, "front"], ["front", ""], [1, "back"], ["back", ""]],
      template: function FlashCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlashCardComponent_Template_div_click_0_listener() {
            return ctx.flip();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("fc-back", ctx.flipped);
        }
      },
      styles: [".fc-container[_ngcontent-%COMP%] {\n  transition: 0.6s;\n  transform-style: preserve-3d;\n  position: relative;\n}\n.fc-container.fc-back[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n}\n.fc-container[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%] {\n  position: inherit;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 2;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  padding: 20px;\n  background: #f2f2f2;\n  transform: rotateY(0deg);\n}\n.fc-container[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%] {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: #f2f2f2;\n  padding: 20px;\n  transform: rotateY(180deg);\n}\n.fc-back[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%] {\n  z-index: 2;\n}\n.fc-back[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%] {\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy95YW5uYmYvZmxhc2gtY2FyZC9DOlxcVXNlcnNcXFZhZ25lciBTYWJhZGlcXERvY3VtZW50c1xcUHJvamVjdHNcXF9NeVxcYXdlc29tZS1jb21wb25lbnRzLWlvbmljL3NyY1xcYXBwXFxjb21wb25lbnRzXFx5YW5uYmZcXGZsYXNoLWNhcmRcXGZsYXNoLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMveWFubmJmL2ZsYXNoLWNhcmQvZmxhc2gtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRUE7RUFDRSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUNqRUY7QURrRUU7RUFDRSwwQkFBQTtBQ2hFSjtBRG1FRTtFQUNFLGlCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBQ2pFSjtBRG9FRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7QUNsRUo7QURzRUU7RUFDRSxVQUFBO0FDbkVKO0FEcUVFO0VBQ0UsVUFBQTtBQ25FSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMveWFubmJmL2ZsYXNoLWNhcmQvZmxhc2gtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC8qXHJcbi8vICAgICAgKiAgRmxpcCBhbmltYXRpb24gYnkgRGF2aWQgV2Fsc2g6IGh0dHBzOi8vZGF2aWR3YWxzaC5uYW1lL2Nzcy1mbGlwXHJcbi8vICAgICAgKi9cclxuXHJcbi8vIC8qIGZsaXAgdGhlIHBhbmUgd2hlbiBob3ZlcmVkICovXHJcbi8vIC5mbGlwLWNvbnRhaW5lci5mbGlwcGVkIC5mbGlwcGVyIHtcclxuLy8gICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuLy8gfVxyXG5cclxuLy8gLmZsaXAtY29udGFpbmVyLFxyXG4vLyAuZnJvbnQsXHJcbi8vIC5iYWNrIHtcclxuLy8gICAvLyB3aWR0aDogOTB2dztcclxuLy8gICAvLyBoZWlnaHQ6IDQwdmg7XHJcbi8vICAgLy8gbWFyZ2luOiAyMHB4IGF1dG87XHJcbi8vIH1cclxuXHJcbi8vIC8qIGZsaXAgc3BlZWQgZ29lcyBoZXJlICovXHJcbi8vIC5mbGlwcGVyIHtcclxuLy8gICB0cmFuc2l0aW9uOiAwLjZzO1xyXG4vLyAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyB9XHJcblxyXG4vLyAvKiBoaWRlIGJhY2sgb2YgcGFuZSBkdXJpbmcgc3dhcCAqL1xyXG4vLyAuZnJvbnQsXHJcbi8vIC5iYWNrIHtcclxuLy8gICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2VjZjBmMTtcclxuLy8gICAvLyBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbi8vICAgLy8gLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggOHB4IDRweCAtNHB4IHJnYmEoMTYzLCAxNjMsIDE2MywgMC4yNSk7XHJcbi8vICAgLy8gLW1vei1ib3gtc2hhZG93OiAwcHggOHB4IDRweCAtNHB4IHJnYmEoMTYzLCAxNjMsIDE2MywgMC4yNSk7XHJcbi8vICAgLy8gYm94LXNoYWRvdzogMHB4IDhweCA0cHggLTRweCByZ2JhKDE2MywgMTYzLCAxNjMsIDAuMjUpO1xyXG4vLyAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTM7XHJcbi8vICAgLy8gbWFyZ2luOiAwO1xyXG4vLyAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAvLyB0b3A6IDA7XHJcbi8vICAgLy8gbGVmdDogMDtcclxuXHJcbi8vICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgIHRvcDogMDtcclxuLy8gICBsZWZ0OiAwO1xyXG4vLyAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XHJcbi8vICAgcGFkZGluZzogMjBweDtcclxuLy8gICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG4vLyAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG4vLyB9XHJcblxyXG4vLyAvKiBmcm9udCBwYW5lLCBwbGFjZWQgYWJvdmUgYmFjayAqL1xyXG4vLyAuZnJvbnQge1xyXG4vLyAgIHotaW5kZXg6IDI7XHJcbi8vICAgLyogZm9yIGZpcmVmb3ggMzEgKi9cclxuLy8gICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbi8vIH1cclxuXHJcbi8vIC8qIGJhY2ssIGluaXRpYWxseSBoaWRkZW4gcGFuZSAqL1xyXG4vLyAuYmFjayB7XHJcbi8vICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbi8vICAgei1pbmRleDogMjtcclxuXHJcbi8vICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzllZWViNjtcclxuLy8gfVxyXG5cclxuLmZjLWNvbnRhaW5lciB7XHJcbiAgdHJhbnNpdGlvbjogMC42cztcclxuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAmLmZjLWJhY2sge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgfVxyXG5cclxuICAuZnJvbnQge1xyXG4gICAgcG9zaXRpb246IGluaGVyaXQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbiAgfVxyXG5cclxuICAuYmFjayB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG4gIH1cclxufVxyXG4uZmMtYmFjayB7XHJcbiAgLmZyb250IHtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgfVxyXG4gIC5iYWNrIHtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgfVxyXG59XHJcbiIsIi5mYy1jb250YWluZXIge1xuICB0cmFuc2l0aW9uOiAwLjZzO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZmMtY29udGFpbmVyLmZjLWJhY2sge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn1cbi5mYy1jb250YWluZXIgLmZyb250IHtcbiAgcG9zaXRpb246IGluaGVyaXQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDI7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xufVxuLmZjLWNvbnRhaW5lciAuYmFjayB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgcGFkZGluZzogMjBweDtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG5cbi5mYy1iYWNrIC5mcm9udCB7XG4gIHotaW5kZXg6IDI7XG59XG4uZmMtYmFjayAuYmFjayB7XG4gIHotaW5kZXg6IDI7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlashCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-flash-card-component',
          templateUrl: './flash-card.component.html',
          styleUrls: ['./flash-card.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/yannbf/timeline/timeline.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/yannbf/timeline/timeline.component.ts ***!
    \******************************************************************/

  /*! exports provided: TimelineComponent, TimelineItemComponent */

  /***/
  function srcAppComponentsYannbfTimelineTimelineComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimelineComponent", function () {
      return TimelineComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimelineItemComponent", function () {
      return TimelineItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = ["*"];

    var TimelineComponent = /*#__PURE__*/function () {
      function TimelineComponent() {
        _classCallCheck(this, TimelineComponent);
      }

      _createClass(TimelineComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TimelineComponent;
    }();

    TimelineComponent.ɵfac = function TimelineComponent_Factory(t) {
      return new (t || TimelineComponent)();
    };

    TimelineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TimelineComponent,
      selectors: [["timeline"]],
      ngContentSelectors: _c0,
      decls: 3,
      vars: 0,
      consts: [[1, "timeline"]],
      template: function TimelineComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "timeline-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: function directives() {
        return [TimelineItemComponent];
      },
      styles: ["[_nghost-%COMP%]     .timeline {\n  margin: 16px 0 0 0;\n  padding: 0;\n  position: relative;\n}\n[_nghost-%COMP%]     .timeline .card-item ion-card-content {\n  -webkit-box-orient: vertical;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .timeline:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 5px;\n  background: #32a7b5;\n  border-left: 2px dotted #999;\n  left: 8%;\n  margin-left: -10px;\n}\n[_nghost-%COMP%]     .timeline timeline-item {\n  position: relative;\n  display: block;\n}\n[_nghost-%COMP%]     .timeline timeline-item .icon-timeline {\n  width: 15px;\n  height: 15px;\n  font-size: 1.4em;\n  position: absolute;\n  color: #fff;\n  background: #32a7b5;\n  border-radius: 50%;\n  padding: 4px;\n  text-align: center;\n  left: 8%;\n  top: 0;\n  margin: 10px 0 0 -18px;\n}\n[_nghost-%COMP%]     .timeline timeline-item .icon-timeline:after {\n  left: 46px;\n  border: solid transparent;\n  content: \" \";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n  border-left-color: #afdcf8;\n  border-width: 10px;\n  top: 10px;\n}\n[_nghost-%COMP%]     .timeline timeline-item:last-child {\n  width: 100%;\n}\n[_nghost-%COMP%]     .timeline timeline-item:last-child ion-icon {\n  box-shadow: none;\n}\n[_nghost-%COMP%]     .timeline timeline-item:last-child ion-icon:after {\n  border-width: 0;\n}\n[_nghost-%COMP%]     .timeline .no-card {\n  border: 0;\n  border-radius: 0;\n  box-shadow: none;\n}\n[_nghost-%COMP%]     .timeline .no-card ion-card-header, [_nghost-%COMP%]     .timeline .no-card ion-card-content {\n  padding: 5px 5px 5px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy95YW5uYmYvdGltZWxpbmUvQzpcXFVzZXJzXFxWYWduZXIgU2FiYWRpXFxEb2N1bWVudHNcXFByb2plY3RzXFxfTXlcXGF3ZXNvbWUtY29tcG9uZW50cy1pb25pYy9zcmNcXGFwcFxcY29tcG9uZW50c1xceWFubmJmXFx0aW1lbGluZVxcdGltZWxpbmUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMveWFubmJmL3RpbWVsaW5lL3RpbWVsaW5lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBU0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNURjtBREFJO0VBQ0UsNEJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNFTjtBREtFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBckJxQjtFQXNCckIsNEJBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7QUNISjtBREtFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FDSEo7QURLSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFwQ21CO0VBcUNuQixrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0Esc0JBQUE7QUNITjtBRElNO0VBQ0UsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FDRlI7QURLSTtFQUNFLFdBQUE7QUNITjtBRElNO0VBQ0UsZ0JBQUE7QUNGUjtBREdRO0VBQ0UsZUFBQTtBQ0RWO0FETUU7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0pKO0FES0k7O0VBRUUsc0JBQUE7QUNITiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMveWFubmJmL3RpbWVsaW5lL3RpbWVsaW5lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHRpbWVsaW5lLXByaW1hcnktY29sb3I6ICMzMmE3YjU7XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnRpbWVsaW5lIHtcclxuICAuY2FyZC1pdGVtIHtcclxuICAgIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG4gIH1cclxuICBtYXJnaW46IDE2cHggMCAwIDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICY6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogNXB4O1xyXG4gICAgYmFja2dyb3VuZDogJHRpbWVsaW5lLXByaW1hcnktY29sb3I7XHJcbiAgICBib3JkZXItbGVmdDogMnB4IGRvdHRlZCAjOTk5O1xyXG4gICAgbGVmdDogOCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgfVxyXG4gIHRpbWVsaW5lLWl0ZW0ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgLmljb24tdGltZWxpbmUge1xyXG4gICAgICB3aWR0aDogMTVweDtcclxuICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICBmb250LXNpemU6IDEuNGVtO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkdGltZWxpbmUtcHJpbWFyeS1jb2xvcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbGVmdDogOCU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbWFyZ2luOiAxMHB4IDAgMCAtMThweDtcclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgbGVmdDogNDZweDtcclxuICAgICAgICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICNhZmRjZjg7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxMHB4O1xyXG4gICAgICAgIHRvcDogMTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAubm8tY2FyZCB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGlvbi1jYXJkLWhlYWRlcixcclxuICAgIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgICBwYWRkaW5nOiA1cHggNXB4IDVweCAwO1xyXG4gICAgfVxyXG4gIH1cclxufSIsIjpob3N0IDo6bmctZGVlcCAudGltZWxpbmUge1xuICBtYXJnaW46IDE2cHggMCAwIDA7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbjpob3N0IDo6bmctZGVlcCAudGltZWxpbmUgLmNhcmQtaXRlbSBpb24tY2FyZC1jb250ZW50IHtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjpob3N0IDo6bmctZGVlcCAudGltZWxpbmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDVweDtcbiAgYmFja2dyb3VuZDogIzMyYTdiNTtcbiAgYm9yZGVyLWxlZnQ6IDJweCBkb3R0ZWQgIzk5OTtcbiAgbGVmdDogOCU7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbn1cbjpob3N0IDo6bmctZGVlcCAudGltZWxpbmUgdGltZWxpbmUtaXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG46aG9zdCA6Om5nLWRlZXAgLnRpbWVsaW5lIHRpbWVsaW5lLWl0ZW0gLmljb24tdGltZWxpbmUge1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBmb250LXNpemU6IDEuNGVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjMzJhN2I1O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZWZ0OiA4JTtcbiAgdG9wOiAwO1xuICBtYXJnaW46IDEwcHggMCAwIC0xOHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC50aW1lbGluZSB0aW1lbGluZS1pdGVtIC5pY29uLXRpbWVsaW5lOmFmdGVyIHtcbiAgbGVmdDogNDZweDtcbiAgYm9yZGVyOiBzb2xpZCB0cmFuc3BhcmVudDtcbiAgY29udGVudDogXCIgXCI7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjYWZkY2Y4O1xuICBib3JkZXItd2lkdGg6IDEwcHg7XG4gIHRvcDogMTBweDtcbn1cbjpob3N0IDo6bmctZGVlcCAudGltZWxpbmUgdGltZWxpbmUtaXRlbTpsYXN0LWNoaWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCA6Om5nLWRlZXAgLnRpbWVsaW5lIHRpbWVsaW5lLWl0ZW06bGFzdC1jaGlsZCBpb24taWNvbiB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG46aG9zdCA6Om5nLWRlZXAgLnRpbWVsaW5lIHRpbWVsaW5lLWl0ZW06bGFzdC1jaGlsZCBpb24taWNvbjphZnRlciB7XG4gIGJvcmRlci13aWR0aDogMDtcbn1cbjpob3N0IDo6bmctZGVlcCAudGltZWxpbmUgLm5vLWNhcmQge1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG46aG9zdCA6Om5nLWRlZXAgLnRpbWVsaW5lIC5uby1jYXJkIGlvbi1jYXJkLWhlYWRlcixcbjpob3N0IDo6bmctZGVlcCAudGltZWxpbmUgLm5vLWNhcmQgaW9uLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDVweCA1cHggNXB4IDA7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimelineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'timeline',
          templateUrl: './timeline.component.html',
          styleUrls: ['./timeline.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();

    var TimelineItemComponent = function TimelineItemComponent() {
      _classCallCheck(this, TimelineItemComponent);
    };

    TimelineItemComponent.ɵfac = function TimelineItemComponent_Factory(t) {
      return new (t || TimelineItemComponent)();
    };

    TimelineItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TimelineItemComponent,
      selectors: [["timeline-item"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function TimelineItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimelineItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'timeline-item',
          template: '<ng-content></ng-content>'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/yannbf/timer-progress/timer-progress.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/components/yannbf/timer-progress/timer-progress.component.ts ***!
    \******************************************************************************/

  /*! exports provided: TimerProgressComponent */

  /***/
  function srcAppComponentsYannbfTimerProgressTimerProgressComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimerProgressComponent", function () {
      return TimerProgressComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    function TimerProgressComponent_ion_card_0_ion_button_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Timer set up incorrectly");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TimerProgressComponent_ion_card_0_ion_item_14_ion_button_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimerProgressComponent_ion_card_0_ion_item_14_ion_button_1_Template_ion_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r7.initTimer();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Restart ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TimerProgressComponent_ion_card_0_ion_item_14_ion_button_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimerProgressComponent_ion_card_0_ion_item_14_ion_button_2_Template_ion_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r9.pauseTimer();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Pause ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TimerProgressComponent_ion_card_0_ion_item_14_ion_button_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimerProgressComponent_ion_card_0_ion_item_14_ion_button_3_Template_ion_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r11.resumeTimer();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Resume ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TimerProgressComponent_ion_card_0_ion_item_14_ion_button_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimerProgressComponent_ion_card_0_ion_item_14_ion_button_4_Template_ion_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r13.startTimer();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Start ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TimerProgressComponent_ion_card_0_ion_item_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TimerProgressComponent_ion_card_0_ion_item_14_ion_button_1_Template, 3, 0, "ion-button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TimerProgressComponent_ion_card_0_ion_item_14_ion_button_2_Template, 3, 0, "ion-button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TimerProgressComponent_ion_card_0_ion_item_14_ion_button_3_Template, 3, 0, "ion-button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TimerProgressComponent_ion_card_0_ion_item_14_ion_button_4_Template, 3, 0, "ion-button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.timer.runTimer && (ctx_r2.timer.hasStarted || ctx_r2.timer.hasFinished) || ctx_r2.timer.hasFinished);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.timer.runTimer && ctx_r2.timer.hasStarted && !ctx_r2.timer.hasFinished);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.timer.runTimer && ctx_r2.timer.hasStarted && !ctx_r2.timer.hasFinished);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.timer.hasStarted);
      }
    }

    function TimerProgressComponent_ion_card_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TimerProgressComponent_ion_card_0_ion_button_13_Template, 2, 0, "ion-button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TimerProgressComponent_ion_card_0_ion_item_14_Template, 5, 4, "ion-item", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform", ctx_r0.transform);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform", ctx_r0.transform);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform", ctx_r0.transform);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform", ctx_r0.fixTransform);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.timer.displayTime);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.timeInSeconds || ctx_r0.timeInSeconds == 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.timeInSeconds && ctx_r0.timeInSeconds > 0);
      }
    }

    var TimerProgressComponent = /*#__PURE__*/function () {
      function TimerProgressComponent(sanitizer) {
        _classCallCheck(this, TimerProgressComponent);

        this.sanitizer = sanitizer;
      }

      _createClass(TimerProgressComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initTimer();
        }
      }, {
        key: "hasFinished",
        value: function hasFinished() {
          return this.timer.hasFinished;
        }
      }, {
        key: "initProgressBar",
        value: function initProgressBar() {
          this.percent = 100;
          this.increment = 180 / 100;
          var progress = 'rotate(' + this.increment * this.percent + 'deg)';
          this.transform = this.sanitizer.bypassSecurityTrustStyle(progress);
          this.fixTransform = this.sanitizer.bypassSecurityTrustStyle(progress);
        }
      }, {
        key: "initTimer",
        value: function initTimer() {
          this.initProgressBar();

          if (!this.timeInSeconds) {
            this.timeInSeconds = 0;
          }

          this.timer = {
            seconds: this.timeInSeconds,
            runTimer: false,
            hasStarted: false,
            hasFinished: false,
            secondsRemaining: this.timeInSeconds
          };
          this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
        }
      }, {
        key: "startTimer",
        value: function startTimer() {
          this.timer.hasStarted = true;
          this.timer.runTimer = true;
          this.timerTick();
        }
      }, {
        key: "pauseTimer",
        value: function pauseTimer() {
          this.timer.runTimer = false;
        }
      }, {
        key: "resumeTimer",
        value: function resumeTimer() {
          this.startTimer();
        }
      }, {
        key: "timerTick",
        value: function timerTick() {
          var _this = this;

          setTimeout(function () {
            if (!_this.timer.runTimer) {
              return;
            }

            _this.timer.secondsRemaining--;
            _this.timer.displayTime = _this.getSecondsAsDigitalClock(_this.timer.secondsRemaining);
            _this.percent = _this.timer.secondsRemaining / _this.timer.seconds * 100;
            _this.increment = 180 / 100;
            var progress = 'rotate(' + _this.increment * _this.percent + 'deg)';
            _this.transform = _this.sanitizer.bypassSecurityTrustStyle(progress);
            _this.fixTransform = _this.sanitizer.bypassSecurityTrustStyle(progress);

            if (_this.timer.secondsRemaining > 0) {
              _this.timerTick();
            } else {
              _this.timer.hasFinished = true;
            }
          }, 1000);
        }
      }, {
        key: "getSecondsAsDigitalClock",
        value: function getSecondsAsDigitalClock(inputSeconds) {
          var secNum = parseInt(inputSeconds.toString(), 10); // don't forget the second param

          var hours = Math.floor(secNum / 3600);
          var minutes = Math.floor((secNum - hours * 3600) / 60);
          var seconds = secNum - hours * 3600 - minutes * 60;
          var hoursString = '';
          var minutesString = '';
          var secondsString = '';

          if (hours > 0) {
            hoursString = hours < 10 ? '0' + hours + ':' : hours.toString() + ':';
          }

          minutesString = minutes < 10 ? '0' + minutes : minutes.toString();
          secondsString = seconds < 10 ? '0' + seconds : seconds.toString();
          return hoursString + minutesString + ':' + secondsString;
        }
      }]);

      return TimerProgressComponent;
    }();

    TimerProgressComponent.ɵfac = function TimerProgressComponent_Factory(t) {
      return new (t || TimerProgressComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]));
    };

    TimerProgressComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TimerProgressComponent,
      selectors: [["app-timer-progress"]],
      inputs: {
        timeInSeconds: "timeInSeconds"
      },
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], ["data-progress", "0", 1, "radial-progress"], [1, "circle"], [1, "mask", "full"], [1, "fill"], [1, "mask", "half"], [1, "fill", "fix"], [1, "shadow"], [1, "inset"], [1, "percentage"], ["fill", "clear", "expand", "block", "class", "timer-button", 4, "ngIf"], ["fill", "clear", "expand", "block", 1, "timer-button"], ["fill", "clear", "class", "large", "color", "danger", "item-start", "", 3, "click", 4, "ngIf"], ["fill", "clear", "class", "large", "slot", "end", 3, "click", 4, "ngIf"], ["fill", "clear", "color", "danger", "item-start", "", 1, "large", 3, "click"], ["name", "refresh"], ["fill", "clear", "slot", "end", 1, "large", 3, "click"], ["name", "pause"], ["name", "play"]],
      template: function TimerProgressComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TimerProgressComponent_ion_card_0_Template, 15, 11, "ion-card", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.timer);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"]],
      styles: [".radial-progress[_ngcontent-%COMP%] {\n  margin: 50px;\n  width: 150px;\n  height: 150px;\n  background-color: #d6dadc;\n  border-radius: 50%;\n}\n.radial-progress[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .fill[_ngcontent-%COMP%], .radial-progress[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .mask[_ngcontent-%COMP%], .radial-progress[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .shadow[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  position: absolute;\n  border-radius: 50%;\n}\n.radial-progress[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .shadow[_ngcontent-%COMP%] {\n  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.2) inset;\n}\n.radial-progress[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .fill[_ngcontent-%COMP%], .radial-progress[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .mask[_ngcontent-%COMP%] {\n  -webkit-backface-visibility: hidden;\n  transition: transform 1s;\n  border-radius: 50%;\n}\n.radial-progress[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .mask[_ngcontent-%COMP%] {\n  clip: rect(0px, 150px, 150px, 75px);\n}\n.radial-progress[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .mask[_ngcontent-%COMP%]   .fill[_ngcontent-%COMP%] {\n  clip: rect(0px, 75px, 150px, 0px);\n  background-color: tomato;\n}\n.radial-progress[_ngcontent-%COMP%]   .inset[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  position: absolute;\n  margin-left: 15px;\n  margin-top: 15px;\n  background-color: #fbfbfb;\n  border-radius: 50%;\n  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.2);\n}\n.radial-progress[_ngcontent-%COMP%]   .inset[_ngcontent-%COMP%]   .percentage[_ngcontent-%COMP%] {\n  width: 100%;\n  position: absolute;\n  top: 49px;\n  line-height: 1;\n  text-align: center;\n  font-family: \"Lato\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  color: tomato;\n  font-weight: 800;\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy95YW5uYmYvdGltZXItcHJvZ3Jlc3MvQzpcXFVzZXJzXFxWYWduZXIgU2FiYWRpXFxEb2N1bWVudHNcXFByb2plY3RzXFxfTXlcXGF3ZXNvbWUtY29tcG9uZW50cy1pb25pYy9zcmNcXGFwcFxcY29tcG9uZW50c1xceWFubmJmXFx0aW1lci1wcm9ncmVzc1xcdGltZXItcHJvZ3Jlc3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMveWFubmJmL3RpbWVyLXByb2dyZXNzL3RpbWVyLXByb2dyZXNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBV0ksWUFBQTtFQUNBLFlBWGM7RUFZZCxhQVpjO0VBYWQseUJBWm9CO0VBYXBCLGtCQUFBO0FDVEo7QURZTTs7O0VBR0UsWUFwQlU7RUFxQlYsYUFyQlU7RUFzQlYsa0JBQUE7RUFDQSxrQkFBQTtBQ1ZSO0FEYU07RUFDRSxpREFBQTtBQ1hSO0FEY007O0VBRUUsbUNBQUE7RUFHQSx3QkFBQTtFQUNBLGtCQUFBO0FDWlI7QURlTTtFQUNFLG1DQUFBO0FDYlI7QURlUTtFQUNFLGlDQUFBO0VBQ0Esd0JBMUNTO0FDNkJuQjtBRGtCSTtFQUNFLFlBL0NXO0VBZ0RYLGFBaERXO0VBaURYLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQW5EWTtFQW9EWixrQkFBQTtFQUNBLDJDQW5ETztBQ21DYjtBRGtCTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtRUFBQTtFQUNBLGFBM0RlO0VBNERmLGdCQUFBO0VBQ0EsZUE1RG1CO0FDNEMzQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMveWFubmJmL3RpbWVyLXByb2dyZXNzL3RpbWVyLXByb2dyZXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJhZGlhbC1wcm9ncmVzcyB7XHJcbiAgICAkY2lyY2xlLXNpemU6IDE1MHB4O1xyXG4gICAgJGNpcmNsZS1iYWNrZ3JvdW5kOiAjZDZkYWRjO1xyXG4gICAgJGNpcmNsZS1jb2xvcjogdG9tYXRvO1xyXG4gICAgJGluc2V0LXNpemU6IDEyMHB4O1xyXG4gICAgJGluc2V0LWNvbG9yOiAjZmJmYmZiO1xyXG4gICAgJHRyYW5zaXRpb24tbGVuZ3RoOiAxcztcclxuICAgICRzaGFkb3c6IDZweCA2cHggMTBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICAkcGVyY2VudGFnZS1jb2xvcjogdG9tYXRvO1xyXG4gICAgJHBlcmNlbnRhZ2UtZm9udC1zaXplOiAyMnB4O1xyXG5cclxuICAgIG1hcmdpbjogNTBweDtcclxuICAgIHdpZHRoOiAkY2lyY2xlLXNpemU7XHJcbiAgICBoZWlnaHQ6ICRjaXJjbGUtc2l6ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjaXJjbGUtYmFja2dyb3VuZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHJcbiAgICAuY2lyY2xlIHtcclxuICAgICAgLmZpbGwsXHJcbiAgICAgIC5tYXNrLFxyXG4gICAgICAuc2hhZG93IHtcclxuICAgICAgICB3aWR0aDogJGNpcmNsZS1zaXplO1xyXG4gICAgICAgIGhlaWdodDogJGNpcmNsZS1zaXplO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zaGFkb3cge1xyXG4gICAgICAgIGJveC1zaGFkb3c6ICRzaGFkb3cgaW5zZXQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5maWxsLFxyXG4gICAgICAubWFzayB7XHJcbiAgICAgICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gJHRyYW5zaXRpb24tbGVuZ3RoO1xyXG4gICAgICAgIHRyYW5zaXRpb246IC1tcy10cmFuc2Zvcm0gJHRyYW5zaXRpb24tbGVuZ3RoO1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAkdHJhbnNpdGlvbi1sZW5ndGg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubWFzayB7XHJcbiAgICAgICAgY2xpcDogcmVjdCgwcHgsICRjaXJjbGUtc2l6ZSwgJGNpcmNsZS1zaXplLCAkY2lyY2xlLXNpemUvMik7XHJcblxyXG4gICAgICAgIC5maWxsIHtcclxuICAgICAgICAgIGNsaXA6IHJlY3QoMHB4LCAkY2lyY2xlLXNpemUvMiwgJGNpcmNsZS1zaXplLCAwcHgpO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNpcmNsZS1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuaW5zZXQge1xyXG4gICAgICB3aWR0aDogJGluc2V0LXNpemU7XHJcbiAgICAgIGhlaWdodDogJGluc2V0LXNpemU7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbWFyZ2luLWxlZnQ6ICgkY2lyY2xlLXNpemUgLSAkaW5zZXQtc2l6ZSkvMjtcclxuICAgICAgbWFyZ2luLXRvcDogKCRjaXJjbGUtc2l6ZSAtICRpbnNldC1zaXplKS8yO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5zZXQtY29sb3I7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYm94LXNoYWRvdzogJHNoYWRvdztcclxuXHJcbiAgICAgIC5wZXJjZW50YWdlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAoJGluc2V0LXNpemUgLSAkcGVyY2VudGFnZS1mb250LXNpemUpIC8gMjtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgY29sb3I6ICRwZXJjZW50YWdlLWNvbG9yO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAkcGVyY2VudGFnZS1mb250LXNpemU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9IiwiLnJhZGlhbC1wcm9ncmVzcyB7XG4gIG1hcmdpbjogNTBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZkYWRjO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ucmFkaWFsLXByb2dyZXNzIC5jaXJjbGUgLmZpbGwsXG4ucmFkaWFsLXByb2dyZXNzIC5jaXJjbGUgLm1hc2ssXG4ucmFkaWFsLXByb2dyZXNzIC5jaXJjbGUgLnNoYWRvdyB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ucmFkaWFsLXByb2dyZXNzIC5jaXJjbGUgLnNoYWRvdyB7XG4gIGJveC1zaGFkb3c6IDZweCA2cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMikgaW5zZXQ7XG59XG4ucmFkaWFsLXByb2dyZXNzIC5jaXJjbGUgLmZpbGwsXG4ucmFkaWFsLXByb2dyZXNzIC5jaXJjbGUgLm1hc2sge1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMXM7XG4gIHRyYW5zaXRpb246IC1tcy10cmFuc2Zvcm0gMXM7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnJhZGlhbC1wcm9ncmVzcyAuY2lyY2xlIC5tYXNrIHtcbiAgY2xpcDogcmVjdCgwcHgsIDE1MHB4LCAxNTBweCwgNzVweCk7XG59XG4ucmFkaWFsLXByb2dyZXNzIC5jaXJjbGUgLm1hc2sgLmZpbGwge1xuICBjbGlwOiByZWN0KDBweCwgNzVweCwgMTUwcHgsIDBweCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHRvbWF0bztcbn1cbi5yYWRpYWwtcHJvZ3Jlc3MgLmluc2V0IHtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmYmZiO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IDZweCA2cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4ucmFkaWFsLXByb2dyZXNzIC5pbnNldCAucGVyY2VudGFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDlweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiB0b21hdG87XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimerProgressComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-timer-progress',
          templateUrl: './timer-progress.component.html',
          styleUrls: ['./timer-progress.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
        }];
      }, {
        timeInSeconds: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/yannbf/timer/timer.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/components/yannbf/timer/timer.component.ts ***!
    \************************************************************/

  /*! exports provided: TimerComponent */

  /***/
  function srcAppComponentsYannbfTimerTimerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimerComponent", function () {
      return TimerComponent;
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

    function TimerComponent_ion_card_0_ion_button_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.timer.displayTime, " ");
      }
    }

    function TimerComponent_ion_card_0_ion_button_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Timer set up incorrectly");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TimerComponent_ion_card_0_ion_item_4_ion_button_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimerComponent_ion_card_0_ion_item_4_ion_button_1_Template_ion_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r8.initTimer();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Restart ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TimerComponent_ion_card_0_ion_item_4_ion_button_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimerComponent_ion_card_0_ion_item_4_ion_button_2_Template_ion_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r10.pauseTimer();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Pause ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TimerComponent_ion_card_0_ion_item_4_ion_button_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimerComponent_ion_card_0_ion_item_4_ion_button_3_Template_ion_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r12.resumeTimer();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Resume ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TimerComponent_ion_card_0_ion_item_4_ion_button_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimerComponent_ion_card_0_ion_item_4_ion_button_4_Template_ion_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r14.startTimer();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Start ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TimerComponent_ion_card_0_ion_item_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TimerComponent_ion_card_0_ion_item_4_ion_button_1_Template, 3, 0, "ion-button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TimerComponent_ion_card_0_ion_item_4_ion_button_2_Template, 3, 0, "ion-button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TimerComponent_ion_card_0_ion_item_4_ion_button_3_Template, 3, 0, "ion-button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TimerComponent_ion_card_0_ion_item_4_ion_button_4_Template, 3, 0, "ion-button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.timer.runTimer && (ctx_r3.timer.hasStarted || ctx_r3.timer.hasFinished) || ctx_r3.timer.hasFinished);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.timer.runTimer && ctx_r3.timer.hasStarted && !ctx_r3.timer.hasFinished);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.timer.runTimer && ctx_r3.timer.hasStarted && !ctx_r3.timer.hasFinished);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.timer.hasStarted);
      }
    }

    function TimerComponent_ion_card_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TimerComponent_ion_card_0_ion_button_2_Template, 2, 1, "ion-button", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TimerComponent_ion_card_0_ion_button_3_Template, 2, 0, "ion-button", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TimerComponent_ion_card_0_ion_item_4_Template, 5, 4, "ion-item", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.timeInSeconds && ctx_r0.timeInSeconds > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.timeInSeconds || ctx_r0.timeInSeconds == 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.timeInSeconds && ctx_r0.timeInSeconds > 0);
      }
    }

    var TimerComponent = /*#__PURE__*/function () {
      function TimerComponent() {
        _classCallCheck(this, TimerComponent);
      }

      _createClass(TimerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initTimer();
        }
      }, {
        key: "hasFinished",
        value: function hasFinished() {
          return this.timer.hasFinished;
        }
      }, {
        key: "initTimer",
        value: function initTimer() {
          if (!this.timeInSeconds) {
            this.timeInSeconds = 0;
          }

          this.timer = {
            seconds: this.timeInSeconds,
            runTimer: false,
            hasStarted: false,
            hasFinished: false,
            secondsRemaining: this.timeInSeconds
          };
          this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
        }
      }, {
        key: "startTimer",
        value: function startTimer() {
          this.timer.hasStarted = true;
          this.timer.runTimer = true;
          this.timerTick();
        }
      }, {
        key: "pauseTimer",
        value: function pauseTimer() {
          this.timer.runTimer = false;
        }
      }, {
        key: "resumeTimer",
        value: function resumeTimer() {
          this.startTimer();
        }
      }, {
        key: "timerTick",
        value: function timerTick() {
          var _this2 = this;

          setTimeout(function () {
            if (!_this2.timer.runTimer) {
              return;
            }

            _this2.timer.secondsRemaining--;
            _this2.timer.displayTime = _this2.getSecondsAsDigitalClock(_this2.timer.secondsRemaining);

            if (_this2.timer.secondsRemaining > 0) {
              _this2.timerTick();
            } else {
              _this2.timer.hasFinished = true;
            }
          }, 1000);
        }
      }, {
        key: "getSecondsAsDigitalClock",
        value: function getSecondsAsDigitalClock(inputSeconds) {
          var secNum = parseInt(inputSeconds.toString(), 10); // don't forget the second param

          var hours = Math.floor(secNum / 3600);
          var minutes = Math.floor((secNum - hours * 3600) / 60);
          var seconds = secNum - hours * 3600 - minutes * 60;
          var hoursString = '';
          var minutesString = '';
          var secondsString = '';
          hoursString = hours < 10 ? '0' + hours : hours.toString();
          minutesString = minutes < 10 ? '0' + minutes : minutes.toString();
          secondsString = seconds < 10 ? '0' + seconds : seconds.toString();
          return hoursString + ':' + minutesString + ':' + secondsString;
        }
      }]);

      return TimerComponent;
    }();

    TimerComponent.ɵfac = function TimerComponent_Factory(t) {
      return new (t || TimerComponent)();
    };

    TimerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TimerComponent,
      selectors: [["app-timer"]],
      inputs: {
        timeInSeconds: "timeInSeconds"
      },
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], ["size", "large", "expand", "block", "fill", "clear", "class", "timer-button x-large", 4, "ngIf"], ["size", "large", "expand", "block", "fill", "clear", "class", "timer-button", 4, "ngIf"], ["size", "large", "expand", "block", "fill", "clear", 1, "timer-button", "x-large"], ["size", "large", "expand", "block", "fill", "clear", 1, "timer-button"], ["fill", "clear", "class", "large", "color", "danger", "slot", "start", 3, "click", 4, "ngIf"], ["fill", "clear", "class", "large", "slot", "end", 3, "click", 4, "ngIf"], ["fill", "clear", "color", "danger", "slot", "start", 1, "large", 3, "click"], ["name", "refresh"], ["fill", "clear", "slot", "end", 1, "large", 3, "click"], ["name", "pause"], ["name", "play"]],
      template: function TimerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TimerComponent_ion_card_0_Template, 5, 3, "ion-card", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.timer);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCardHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMveWFubmJmL3RpbWVyL3RpbWVyLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-timer',
          templateUrl: './timer.component.html',
          styleUrls: ['./timer.component.scss']
        }]
      }], null, {
        timeInSeconds: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/yannbf/yannbf.components.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/yannbf/yannbf.components.module.ts ***!
    \***************************************************************/

  /*! exports provided: components, YannbfComponentsModule */

  /***/
  function srcAppComponentsYannbfYannbfComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "components", function () {
      return components;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "YannbfComponentsModule", function () {
      return YannbfComponentsModule;
    });
    /* harmony import */


    var _flash_card_flash_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./flash-card/flash-card.component */
    "./src/app/components/yannbf/flash-card/flash-card.component.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _accordion_list_accordion_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./accordion-list/accordion-list.component */
    "./src/app/components/yannbf/accordion-list/accordion-list.component.ts");
    /* harmony import */


    var _timer_progress_timer_progress_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./timer-progress/timer-progress.component */
    "./src/app/components/yannbf/timer-progress/timer-progress.component.ts");
    /* harmony import */


    var _timer_timer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./timer/timer.component */
    "./src/app/components/yannbf/timer/timer.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./timeline/timeline.component */
    "./src/app/components/yannbf/timeline/timeline.component.ts");

    var components = [_accordion_list_accordion_list_component__WEBPACK_IMPORTED_MODULE_3__["AccordionListComponent"], _flash_card_flash_card_component__WEBPACK_IMPORTED_MODULE_0__["FlashCardComponent"], _timer_progress_timer_progress_component__WEBPACK_IMPORTED_MODULE_4__["TimerProgressComponent"], _timer_timer_component__WEBPACK_IMPORTED_MODULE_5__["TimerComponent"], _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_7__["TimelineComponent"], _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_7__["TimelineItemComponent"]];

    var YannbfComponentsModule = function YannbfComponentsModule() {
      _classCallCheck(this, YannbfComponentsModule);
    };

    YannbfComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: YannbfComponentsModule
    });
    YannbfComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function YannbfComponentsModule_Factory(t) {
        return new (t || YannbfComponentsModule)();
      },
      imports: [[_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](YannbfComponentsModule, {
        declarations: [_accordion_list_accordion_list_component__WEBPACK_IMPORTED_MODULE_3__["AccordionListComponent"], _flash_card_flash_card_component__WEBPACK_IMPORTED_MODULE_0__["FlashCardComponent"], _timer_progress_timer_progress_component__WEBPACK_IMPORTED_MODULE_4__["TimerProgressComponent"], _timer_timer_component__WEBPACK_IMPORTED_MODULE_5__["TimerComponent"], _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_7__["TimelineComponent"], _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_7__["TimelineItemComponent"]],
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]],
        exports: [_accordion_list_accordion_list_component__WEBPACK_IMPORTED_MODULE_3__["AccordionListComponent"], _flash_card_flash_card_component__WEBPACK_IMPORTED_MODULE_0__["FlashCardComponent"], _timer_progress_timer_progress_component__WEBPACK_IMPORTED_MODULE_4__["TimerProgressComponent"], _timer_timer_component__WEBPACK_IMPORTED_MODULE_5__["TimerComponent"], _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_7__["TimelineComponent"], _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_7__["TimelineItemComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](YannbfComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [components],
          imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]],
          exports: [components]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=default~pages-yannbf-components-accordion-list-accordion-list-module~pages-yannbf-components-miscell~8ed0dc24-es5.js.map