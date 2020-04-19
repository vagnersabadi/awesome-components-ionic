(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-yannbf-components-accordion-list-accordion-list-module~pages-yannbf-components-miscell~8ed0dc24"],{

/***/ "./src/app/components/yannbf/accordion-list/accordion-list.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/yannbf/accordion-list/accordion-list.component.ts ***!
  \******************************************************************************/
/*! exports provided: AccordionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionListComponent", function() { return AccordionListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





const _c0 = ["accordionContent"];
const _c1 = ["*"];
class AccordionListComponent {
    constructor(renderer, sanitizer) {
        this.renderer = renderer;
        this.sanitizer = sanitizer;
        this.headerColor = '#F53D3D';
        this.textColor = '#FFF';
        this.contentColor = '#F9F9F9';
        this.hasMargin = true;
    }
    ngOnInit() {
        if (!this.expanded) {
            this.renderer.setStyle(this.elementView.nativeElement, 'height', 0 + 'px');
        }
    }
    toggleAccordion() {
        this.expanded = !this.expanded;
        const newHeight = this.expanded ? '100%' : '0px';
        console.log(newHeight);
        this.renderer.setStyle(this.elementView.nativeElement, 'height', newHeight);
    }
    getDynamicColor(color) {
        return this.sanitizer.bypassSecurityTrustStyle(`--myvar:` + color);
    }
}
AccordionListComponent.ɵfac = function AccordionListComponent_Factory(t) { return new (t || AccordionListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
AccordionListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccordionListComponent, selectors: [["app-component-accordion-list"]], viewQuery: function AccordionListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.elementView = _t.first);
    } }, inputs: { headerColor: "headerColor", textColor: "textColor", contentColor: "contentColor", title: "title", hasMargin: "hasMargin", expanded: "expanded" }, ngContentSelectors: _c1, decls: 9, vars: 9, consts: [[1, "accordion-list"], ["lines", "none", 1, "accordion-header", 3, "click"], ["slot", "start", "name", "ios-arrow-forward"], [1, "expand"], [1, "accordion-content"], ["accordionContent", ""]], template: function AccordionListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccordionListComponent_Template_ion_item_click_1_listener() { return ctx.toggleAccordion(); });
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.getDynamicColor(ctx.headerColor));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.expanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.contentColor, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.expanded);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"]], styles: [".accordion-header[_ngcontent-%COMP%] {\n  color: white;\n  --background: var(--myvar);\n}\n.accordion-header[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%] {\n  margin-left: 0 !important;\n}\n.accordion-header[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: white;\n  transition: all 0.25s ease-in;\n  transform: rotate(0);\n}\n.active[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n.accordion-content[_ngcontent-%COMP%] {\n  transition: 0.3s ease-in-out;\n}\n.accordion-content.active[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n}\n.label[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n.expand[_ngcontent-%COMP%] {\n  margin: -4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy95YW5uYmYvYWNjb3JkaW9uLWxpc3QvQzpcXFVzZXJzXFxzYWJhZGlcXERvY3VtZW50c1xcUHJvamV0b3NcXF9pb25pY1xcaW9uaWM0LWNvbXBvbmVudHMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHlhbm5iZlxcYWNjb3JkaW9uLWxpc3RcXGFjY29yZGlvbi1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3lhbm5iZi9hY2NvcmRpb24tbGlzdC9hY2NvcmRpb24tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSwwQkFBQTtBQ0NGO0FEQ0U7RUFDRSx5QkFBQTtBQ0NKO0FERUU7RUFDRSxZQUFBO0VBRUEsNkJBQUE7RUFDQSxvQkFBQTtBQ0RKO0FES0E7RUFDRSx3QkFBQTtBQ0ZGO0FES0E7RUFDRSw0QkFBQTtBQ0ZGO0FER0U7RUFDRSxnQkFBQTtBQ0RKO0FES0E7RUFDRSxXQUFBO0FDRkY7QURLQTtFQUNFLFlBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMveWFubmJmL2FjY29yZGlvbi1saXN0L2FjY29yZGlvbi1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjY29yZGlvbi1oZWFkZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLW15dmFyKTtcclxuXHJcbiAgLml0ZW0taW5uZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbjtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gIH1cclxufVxyXG5cclxuLmFjdGl2ZSBpb24taWNvbiB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG59XHJcblxyXG4uYWNjb3JkaW9uLWNvbnRlbnQge1xyXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgJi5hY3RpdmUge1xyXG4gICAgcGFkZGluZzogMC43NXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5sYWJlbCB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5leHBhbmQge1xyXG4gIG1hcmdpbjogLTRweDtcclxufVxyXG4iLCIuYWNjb3JkaW9uLWhlYWRlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1teXZhcik7XG59XG4uYWNjb3JkaW9uLWhlYWRlciAuaXRlbS1pbm5lciB7XG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG59XG4uYWNjb3JkaW9uLWhlYWRlciBpb24taWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW47XG4gIHRyYW5zZm9ybTogcm90YXRlKDApO1xufVxuXG4uYWN0aXZlIGlvbi1pY29uIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuXG4uYWNjb3JkaW9uLWNvbnRlbnQge1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLmFjY29yZGlvbi1jb250ZW50LmFjdGl2ZSB7XG4gIHBhZGRpbmc6IDAuNzVyZW07XG59XG5cbi5sYWJlbCB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uZXhwYW5kIHtcbiAgbWFyZ2luOiAtNHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-component-accordion-list',
                templateUrl: './accordion-list.component.html',
                styleUrls: ['./accordion-list.component.scss'],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, { headerColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['headerColor']
        }], textColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['textColor']
        }], contentColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['contentColor']
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['title']
        }], hasMargin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['hasMargin']
        }], expanded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['expanded']
        }], elementView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['accordionContent', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/components/yannbf/flash-card/flash-card.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/yannbf/flash-card/flash-card.component.ts ***!
  \**********************************************************************/
/*! exports provided: FlashCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlashCardComponent", function() { return FlashCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = [[["", 8, "fc-front"]], [["", 8, "fc-back"]]];
const _c1 = [".fc-front", ".fc-back"];
class FlashCardComponent {
    constructor() {
        // @ViewChild('fcContainer', { static: true }) fcContainer;
        // @ViewChild('front', { static: true }) fcFront;
        // @ViewChild('back', { static: true }) fcBack;
        this.flipped = false;
    }
    flip() {
        this.flipped = !this.flipped;
    }
    ngOnInit() {
    }
}
FlashCardComponent.ɵfac = function FlashCardComponent_Factory(t) { return new (t || FlashCardComponent)(); };
FlashCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FlashCardComponent, selectors: [["app-flash-card-component"]], ngContentSelectors: _c1, decls: 8, vars: 2, consts: [[1, "fc-container", 3, "click"], ["fcContainer", ""], [1, "front"], ["front", ""], [1, "back"], ["back", ""]], template: function FlashCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlashCardComponent_Template_div_click_0_listener() { return ctx.flip(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("fc-back", ctx.flipped);
    } }, styles: [".fc-container[_ngcontent-%COMP%] {\n  transition: 0.6s;\n  transform-style: preserve-3d;\n  position: relative;\n}\n.fc-container.fc-back[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n}\n.fc-container[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%] {\n  position: inherit;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 2;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  padding: 20px;\n  background: #f2f2f2;\n  transform: rotateY(0deg);\n}\n.fc-container[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%] {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: #f2f2f2;\n  padding: 20px;\n  transform: rotateY(180deg);\n}\n.fc-back[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%] {\n  z-index: 2;\n}\n.fc-back[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%] {\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy95YW5uYmYvZmxhc2gtY2FyZC9DOlxcVXNlcnNcXHNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZXRvc1xcX2lvbmljXFxpb25pYzQtY29tcG9uZW50cy9zcmNcXGFwcFxcY29tcG9uZW50c1xceWFubmJmXFxmbGFzaC1jYXJkXFxmbGFzaC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3lhbm5iZi9mbGFzaC1jYXJkL2ZsYXNoLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0VBO0VBQ0UsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FDakVGO0FEa0VFO0VBQ0UsMEJBQUE7QUNoRUo7QURtRUU7RUFDRSxpQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUNqRUo7QURvRUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0FDbEVKO0FEc0VFO0VBQ0UsVUFBQTtBQ25FSjtBRHFFRTtFQUNFLFVBQUE7QUNuRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3lhbm5iZi9mbGFzaC1jYXJkL2ZsYXNoLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAvKlxyXG4vLyAgICAgICogIEZsaXAgYW5pbWF0aW9uIGJ5IERhdmlkIFdhbHNoOiBodHRwczovL2Rhdmlkd2Fsc2gubmFtZS9jc3MtZmxpcFxyXG4vLyAgICAgICovXHJcblxyXG4vLyAvKiBmbGlwIHRoZSBwYW5lIHdoZW4gaG92ZXJlZCAqL1xyXG4vLyAuZmxpcC1jb250YWluZXIuZmxpcHBlZCAuZmxpcHBlciB7XHJcbi8vICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbi8vIH1cclxuXHJcbi8vIC5mbGlwLWNvbnRhaW5lcixcclxuLy8gLmZyb250LFxyXG4vLyAuYmFjayB7XHJcbi8vICAgLy8gd2lkdGg6IDkwdnc7XHJcbi8vICAgLy8gaGVpZ2h0OiA0MHZoO1xyXG4vLyAgIC8vIG1hcmdpbjogMjBweCBhdXRvO1xyXG4vLyB9XHJcblxyXG4vLyAvKiBmbGlwIHNwZWVkIGdvZXMgaGVyZSAqL1xyXG4vLyAuZmxpcHBlciB7XHJcbi8vICAgdHJhbnNpdGlvbjogMC42cztcclxuLy8gICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gfVxyXG5cclxuLy8gLyogaGlkZSBiYWNrIG9mIHBhbmUgZHVyaW5nIHN3YXAgKi9cclxuLy8gLmZyb250LFxyXG4vLyAuYmFjayB7XHJcbi8vICAgLy8gZGlzcGxheTogZmxleDtcclxuLy8gICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNlY2YwZjE7XHJcbi8vICAgLy8gYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4vLyAgIC8vIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDhweCA0cHggLTRweCByZ2JhKDE2MywgMTYzLCAxNjMsIDAuMjUpO1xyXG4vLyAgIC8vIC1tb3otYm94LXNoYWRvdzogMHB4IDhweCA0cHggLTRweCByZ2JhKDE2MywgMTYzLCAxNjMsIDAuMjUpO1xyXG4vLyAgIC8vIGJveC1zaGFkb3c6IDBweCA4cHggNHB4IC00cHggcmdiYSgxNjMsIDE2MywgMTYzLCAwLjI1KTtcclxuLy8gICAvLyBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmUzO1xyXG4vLyAgIC8vIG1hcmdpbjogMDtcclxuLy8gICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgLy8gdG9wOiAwO1xyXG4vLyAgIC8vIGxlZnQ6IDA7XHJcblxyXG4vLyAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICB0b3A6IDA7XHJcbi8vICAgbGVmdDogMDtcclxuLy8gICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG4vLyAgIHBhZGRpbmc6IDIwcHg7XHJcbi8vICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuLy8gICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuLy8gfVxyXG5cclxuLy8gLyogZnJvbnQgcGFuZSwgcGxhY2VkIGFib3ZlIGJhY2sgKi9cclxuLy8gLmZyb250IHtcclxuLy8gICB6LWluZGV4OiAyO1xyXG4vLyAgIC8qIGZvciBmaXJlZm94IDMxICovXHJcbi8vICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4vLyB9XHJcblxyXG4vLyAvKiBiYWNrLCBpbml0aWFsbHkgaGlkZGVuIHBhbmUgKi9cclxuLy8gLmJhY2sge1xyXG4vLyAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG4vLyAgIHotaW5kZXg6IDI7XHJcblxyXG4vLyAgIC8vIGJhY2tncm91bmQtY29sb3I6ICM5ZWVlYjY7XHJcbi8vIH1cclxuXHJcbi5mYy1jb250YWluZXIge1xyXG4gIHRyYW5zaXRpb246IDAuNnM7XHJcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgJi5mYy1iYWNrIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG4gIH1cclxuXHJcbiAgLmZyb250IHtcclxuICAgIHBvc2l0aW9uOiBpbmhlcml0O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gIH1cclxuXHJcbiAgLmJhY2sge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZDogI2YyZjJmMjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuICB9XHJcbn1cclxuLmZjLWJhY2sge1xyXG4gIC5mcm9udCB7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuICAuYmFjayB7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxufVxyXG4iLCIuZmMtY29udGFpbmVyIHtcbiAgdHJhbnNpdGlvbjogMC42cztcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmZjLWNvbnRhaW5lci5mYy1iYWNrIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG4uZmMtY29udGFpbmVyIC5mcm9udCB7XG4gIHBvc2l0aW9uOiBpbmhlcml0O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAyO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbn1cbi5mYy1jb250YWluZXIgLmJhY2sge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufVxuXG4uZmMtYmFjayAuZnJvbnQge1xuICB6LWluZGV4OiAyO1xufVxuLmZjLWJhY2sgLmJhY2sge1xuICB6LWluZGV4OiAyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlashCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-flash-card-component',
                templateUrl: './flash-card.component.html',
                styleUrls: ['./flash-card.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/yannbf/timeline/timeline.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/yannbf/timeline/timeline.component.ts ***!
  \******************************************************************/
/*! exports provided: TimelineComponent, TimelineItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineItemComponent", function() { return TimelineItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = ["*"];
class TimelineComponent {
    constructor() {
    }
    ngOnInit() { }
}
TimelineComponent.ɵfac = function TimelineComponent_Factory(t) { return new (t || TimelineComponent)(); };
TimelineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimelineComponent, selectors: [["timeline"]], ngContentSelectors: _c0, decls: 3, vars: 0, consts: [[1, "timeline"]], template: function TimelineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "timeline-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: function () { return [TimelineItemComponent]; }, styles: ["[_nghost-%COMP%]     .timeline {\n  margin: 16px 0 0 0;\n  padding: 0;\n  position: relative;\n}\n[_nghost-%COMP%]     .timeline .card-item ion-card-content {\n  -webkit-box-orient: vertical;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .timeline:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 5px;\n  background: #32a7b5;\n  border-left: 2px dotted #999;\n  left: 8%;\n  margin-left: -10px;\n}\n[_nghost-%COMP%]     .timeline timeline-item {\n  position: relative;\n  display: block;\n}\n[_nghost-%COMP%]     .timeline timeline-item .icon-timeline {\n  width: 15px;\n  height: 15px;\n  font-size: 1.4em;\n  position: absolute;\n  color: #fff;\n  background: #32a7b5;\n  border-radius: 50%;\n  padding: 4px;\n  text-align: center;\n  left: 8%;\n  top: 0;\n  margin: 10px 0 0 -18px;\n}\n[_nghost-%COMP%]     .timeline timeline-item .icon-timeline:after {\n  left: 46px;\n  border: solid transparent;\n  content: \" \";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n  border-left-color: #afdcf8;\n  border-width: 10px;\n  top: 10px;\n}\n[_nghost-%COMP%]     .timeline timeline-item:last-child {\n  width: 100%;\n}\n[_nghost-%COMP%]     .timeline timeline-item:last-child ion-icon {\n  box-shadow: none;\n}\n[_nghost-%COMP%]     .timeline timeline-item:last-child ion-icon:after {\n  border-width: 0;\n}\n[_nghost-%COMP%]     .timeline .no-card {\n  border: 0;\n  border-radius: 0;\n  box-shadow: none;\n}\n[_nghost-%COMP%]     .timeline .no-card ion-card-header, [_nghost-%COMP%]     .timeline .no-card ion-card-content {\n  padding: 5px 5px 5px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy95YW5uYmYvdGltZWxpbmUvQzpcXFVzZXJzXFxzYWJhZGlcXERvY3VtZW50c1xcUHJvamV0b3NcXF9pb25pY1xcaW9uaWM0LWNvbXBvbmVudHMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHlhbm5iZlxcdGltZWxpbmVcXHRpbWVsaW5lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3lhbm5iZi90aW1lbGluZS90aW1lbGluZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQVNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDVEY7QURBSTtFQUNFLDRCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDRU47QURLRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQXJCcUI7RUFzQnJCLDRCQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0FDSEo7QURLRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQ0hKO0FES0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBcENtQjtFQXFDbkIsa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLHNCQUFBO0FDSE47QURJTTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ0ZSO0FES0k7RUFDRSxXQUFBO0FDSE47QURJTTtFQUNFLGdCQUFBO0FDRlI7QURHUTtFQUNFLGVBQUE7QUNEVjtBRE1FO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNKSjtBREtJOztFQUVFLHNCQUFBO0FDSE4iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3lhbm5iZi90aW1lbGluZS90aW1lbGluZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR0aW1lbGluZS1wcmltYXJ5LWNvbG9yOiAjMzJhN2I1O1xyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC50aW1lbGluZSB7XHJcbiAgLmNhcmQtaXRlbSB7XHJcbiAgICBpb24tY2FyZC1jb250ZW50IHtcclxuICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMztcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuICB9XHJcbiAgbWFyZ2luOiAxNnB4IDAgMCAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAmOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDVweDtcclxuICAgIGJhY2tncm91bmQ6ICR0aW1lbGluZS1wcmltYXJ5LWNvbG9yO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBkb3R0ZWQgIzk5OTtcclxuICAgIGxlZnQ6IDglO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gIH1cclxuICB0aW1lbGluZS1pdGVtIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgIC5pY29uLXRpbWVsaW5lIHtcclxuICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgZm9udC1zaXplOiAxLjRlbTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgYmFja2dyb3VuZDogJHRpbWVsaW5lLXByaW1hcnktY29sb3I7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGxlZnQ6IDglO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIG1hcmdpbjogMTBweCAwIDAgLTE4cHg7XHJcbiAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIGxlZnQ6IDQ2cHg7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICBjb250ZW50OiBcIiBcIjtcclxuICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjYWZkY2Y4O1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMTBweDtcclxuICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgIGJvcmRlci13aWR0aDogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLm5vLWNhcmQge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBpb24tY2FyZC1oZWFkZXIsXHJcbiAgICBpb24tY2FyZC1jb250ZW50IHtcclxuICAgICAgcGFkZGluZzogNXB4IDVweCA1cHggMDtcclxuICAgIH1cclxuICB9XHJcbn0iLCI6aG9zdCA6Om5nLWRlZXAgLnRpbWVsaW5lIHtcbiAgbWFyZ2luOiAxNnB4IDAgMCAwO1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG46aG9zdCA6Om5nLWRlZXAgLnRpbWVsaW5lIC5jYXJkLWl0ZW0gaW9uLWNhcmQtY29udGVudCB7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG46aG9zdCA6Om5nLWRlZXAgLnRpbWVsaW5lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiA1cHg7XG4gIGJhY2tncm91bmQ6ICMzMmE3YjU7XG4gIGJvcmRlci1sZWZ0OiAycHggZG90dGVkICM5OTk7XG4gIGxlZnQ6IDglO1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLnRpbWVsaW5lIHRpbWVsaW5lLWl0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuOmhvc3QgOjpuZy1kZWVwIC50aW1lbGluZSB0aW1lbGluZS1pdGVtIC5pY29uLXRpbWVsaW5lIHtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgZm9udC1zaXplOiAxLjRlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogIzMyYTdiNTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiA0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGVmdDogOCU7XG4gIHRvcDogMDtcbiAgbWFyZ2luOiAxMHB4IDAgMCAtMThweDtcbn1cbjpob3N0IDo6bmctZGVlcCAudGltZWxpbmUgdGltZWxpbmUtaXRlbSAuaWNvbi10aW1lbGluZTphZnRlciB7XG4gIGxlZnQ6IDQ2cHg7XG4gIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBib3JkZXItbGVmdC1jb2xvcjogI2FmZGNmODtcbiAgYm9yZGVyLXdpZHRoOiAxMHB4O1xuICB0b3A6IDEwcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLnRpbWVsaW5lIHRpbWVsaW5lLWl0ZW06bGFzdC1jaGlsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgOjpuZy1kZWVwIC50aW1lbGluZSB0aW1lbGluZS1pdGVtOmxhc3QtY2hpbGQgaW9uLWljb24ge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuOmhvc3QgOjpuZy1kZWVwIC50aW1lbGluZSB0aW1lbGluZS1pdGVtOmxhc3QtY2hpbGQgaW9uLWljb246YWZ0ZXIge1xuICBib3JkZXItd2lkdGg6IDA7XG59XG46aG9zdCA6Om5nLWRlZXAgLnRpbWVsaW5lIC5uby1jYXJkIHtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuOmhvc3QgOjpuZy1kZWVwIC50aW1lbGluZSAubm8tY2FyZCBpb24tY2FyZC1oZWFkZXIsXG46aG9zdCA6Om5nLWRlZXAgLnRpbWVsaW5lIC5uby1jYXJkIGlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiA1cHggNXB4IDVweCAwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimelineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'timeline',
                templateUrl: './timeline.component.html',
                styleUrls: ['./timeline.component.scss']
            }]
    }], function () { return []; }, null); })();
class TimelineItemComponent {
    constructor() {
    }
}
TimelineItemComponent.ɵfac = function TimelineItemComponent_Factory(t) { return new (t || TimelineItemComponent)(); };
TimelineItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimelineItemComponent, selectors: [["timeline-item"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function TimelineItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimelineItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'timeline-item',
                template: '<ng-content></ng-content>'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/yannbf/timer-progress/timer-progress.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/yannbf/timer-progress/timer-progress.component.ts ***!
  \******************************************************************************/
/*! exports provided: TimerProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerProgressComponent", function() { return TimerProgressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






function TimerProgressComponent_ion_card_0_ion_button_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Timer set up incorrectly");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TimerProgressComponent_ion_card_0_ion_item_14_ion_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimerProgressComponent_ion_card_0_ion_item_14_ion_button_1_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r23.initTimer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Restart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TimerProgressComponent_ion_card_0_ion_item_14_ion_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimerProgressComponent_ion_card_0_ion_item_14_ion_button_2_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r25.pauseTimer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Pause ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TimerProgressComponent_ion_card_0_ion_item_14_ion_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimerProgressComponent_ion_card_0_ion_item_14_ion_button_3_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r27.resumeTimer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Resume ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TimerProgressComponent_ion_card_0_ion_item_14_ion_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimerProgressComponent_ion_card_0_ion_item_14_ion_button_4_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r29.startTimer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Start ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TimerProgressComponent_ion_card_0_ion_item_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TimerProgressComponent_ion_card_0_ion_item_14_ion_button_1_Template, 3, 0, "ion-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TimerProgressComponent_ion_card_0_ion_item_14_ion_button_2_Template, 3, 0, "ion-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TimerProgressComponent_ion_card_0_ion_item_14_ion_button_3_Template, 3, 0, "ion-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TimerProgressComponent_ion_card_0_ion_item_14_ion_button_4_Template, 3, 0, "ion-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r18.timer.runTimer && (ctx_r18.timer.hasStarted || ctx_r18.timer.hasFinished) || ctx_r18.timer.hasFinished);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.timer.runTimer && ctx_r18.timer.hasStarted && !ctx_r18.timer.hasFinished);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r18.timer.runTimer && ctx_r18.timer.hasStarted && !ctx_r18.timer.hasFinished);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r18.timer.hasStarted);
} }
function TimerProgressComponent_ion_card_0_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform", ctx_r16.transform);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform", ctx_r16.transform);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform", ctx_r16.transform);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform", ctx_r16.fixTransform);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.timer.displayTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r16.timeInSeconds || ctx_r16.timeInSeconds == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.timeInSeconds && ctx_r16.timeInSeconds > 0);
} }
class TimerProgressComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    ngOnInit() {
        this.initTimer();
    }
    hasFinished() {
        return this.timer.hasFinished;
    }
    initProgressBar() {
        this.percent = 100;
        this.increment = 180 / 100;
        const progress = 'rotate(' + this.increment * this.percent + 'deg)';
        this.transform = this.sanitizer.bypassSecurityTrustStyle(progress);
        this.fixTransform = this.sanitizer.bypassSecurityTrustStyle(progress);
    }
    initTimer() {
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
    startTimer() {
        this.timer.hasStarted = true;
        this.timer.runTimer = true;
        this.timerTick();
    }
    pauseTimer() {
        this.timer.runTimer = false;
    }
    resumeTimer() {
        this.startTimer();
    }
    timerTick() {
        setTimeout(() => {
            if (!this.timer.runTimer) {
                return;
            }
            this.timer.secondsRemaining--;
            this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
            this.percent = this.timer.secondsRemaining / this.timer.seconds * 100;
            this.increment = 180 / 100;
            const progress = 'rotate(' + this.increment * this.percent + 'deg)';
            this.transform = this.sanitizer.bypassSecurityTrustStyle(progress);
            this.fixTransform = this.sanitizer.bypassSecurityTrustStyle(progress);
            if (this.timer.secondsRemaining > 0) {
                this.timerTick();
            }
            else {
                this.timer.hasFinished = true;
            }
        }, 1000);
    }
    getSecondsAsDigitalClock(inputSeconds) {
        const secNum = parseInt(inputSeconds.toString(), 10); // don't forget the second param
        const hours = Math.floor(secNum / 3600);
        const minutes = Math.floor((secNum - (hours * 3600)) / 60);
        const seconds = secNum - (hours * 3600) - (minutes * 60);
        let hoursString = '';
        let minutesString = '';
        let secondsString = '';
        hoursString = (hours < 10) ? '0' + hours : hours.toString();
        minutesString = (minutes < 10) ? '0' + minutes : minutes.toString();
        secondsString = (seconds < 10) ? '0' + seconds : seconds.toString();
        return hoursString + ':' + minutesString + ':' + secondsString;
    }
}
TimerProgressComponent.ɵfac = function TimerProgressComponent_Factory(t) { return new (t || TimerProgressComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
TimerProgressComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimerProgressComponent, selectors: [["app-timer-progress"]], inputs: { timeInSeconds: "timeInSeconds" }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["data-progress", "0", 1, "radial-progress"], [1, "circle"], [1, "mask", "full"], [1, "fill"], [1, "mask", "half"], [1, "fill", "fix"], [1, "shadow"], [1, "inset"], [1, "percentage"], ["fill", "clear", "expand", "block", "class", "timer-button", 4, "ngIf"], ["fill", "clear", "expand", "block", 1, "timer-button"], ["fill", "clear", "class", "large", "color", "danger", "item-start", "", 3, "click", 4, "ngIf"], ["fill", "clear", "class", "large", "slot", "end", 3, "click", 4, "ngIf"], ["fill", "clear", "color", "danger", "item-start", "", 1, "large", 3, "click"], ["name", "refresh"], ["fill", "clear", "slot", "end", 1, "large", 3, "click"], ["name", "pause"], ["name", "play"]], template: function TimerProgressComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TimerProgressComponent_ion_card_0_Template, 15, 11, "ion-card", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.timer);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"]], styles: [".radial-progress[_ngcontent-%COMP%] {\n  margin: 50px;\n  width: 150px;\n  height: 150px;\n  background-color: #d6dadc;\n  border-radius: 50%;\n}\n.radial-progress[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .fill[_ngcontent-%COMP%], .radial-progress[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .mask[_ngcontent-%COMP%], .radial-progress[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .shadow[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  position: absolute;\n  border-radius: 50%;\n}\n.radial-progress[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .shadow[_ngcontent-%COMP%] {\n  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.2) inset;\n}\n.radial-progress[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .fill[_ngcontent-%COMP%], .radial-progress[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .mask[_ngcontent-%COMP%] {\n  -webkit-backface-visibility: hidden;\n  transition: transform 1s;\n  border-radius: 50%;\n}\n.radial-progress[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .mask[_ngcontent-%COMP%] {\n  clip: rect(0px, 150px, 150px, 75px);\n}\n.radial-progress[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .mask[_ngcontent-%COMP%]   .fill[_ngcontent-%COMP%] {\n  clip: rect(0px, 75px, 150px, 0px);\n  background-color: tomato;\n}\n.radial-progress[_ngcontent-%COMP%]   .inset[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  position: absolute;\n  margin-left: 15px;\n  margin-top: 15px;\n  background-color: #fbfbfb;\n  border-radius: 50%;\n  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.2);\n}\n.radial-progress[_ngcontent-%COMP%]   .inset[_ngcontent-%COMP%]   .percentage[_ngcontent-%COMP%] {\n  width: 100%;\n  position: absolute;\n  top: 49px;\n  line-height: 1;\n  text-align: center;\n  font-family: \"Lato\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  color: tomato;\n  font-weight: 800;\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy95YW5uYmYvdGltZXItcHJvZ3Jlc3MvQzpcXFVzZXJzXFxzYWJhZGlcXERvY3VtZW50c1xcUHJvamV0b3NcXF9pb25pY1xcaW9uaWM0LWNvbXBvbmVudHMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHlhbm5iZlxcdGltZXItcHJvZ3Jlc3NcXHRpbWVyLXByb2dyZXNzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3lhbm5iZi90aW1lci1wcm9ncmVzcy90aW1lci1wcm9ncmVzcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQVdJLFlBQUE7RUFDQSxZQVhjO0VBWWQsYUFaYztFQWFkLHlCQVpvQjtFQWFwQixrQkFBQTtBQ1RKO0FEWU07OztFQUdFLFlBcEJVO0VBcUJWLGFBckJVO0VBc0JWLGtCQUFBO0VBQ0Esa0JBQUE7QUNWUjtBRGFNO0VBQ0UsaURBQUE7QUNYUjtBRGNNOztFQUVFLG1DQUFBO0VBR0Esd0JBQUE7RUFDQSxrQkFBQTtBQ1pSO0FEZU07RUFDRSxtQ0FBQTtBQ2JSO0FEZVE7RUFDRSxpQ0FBQTtFQUNBLHdCQTFDUztBQzZCbkI7QURrQkk7RUFDRSxZQS9DVztFQWdEWCxhQWhEVztFQWlEWCxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFuRFk7RUFvRFosa0JBQUE7RUFDQSwyQ0FuRE87QUNtQ2I7QURrQk07RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUVBQUE7RUFDQSxhQTNEZTtFQTREZixnQkFBQTtFQUNBLGVBNURtQjtBQzRDM0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3lhbm5iZi90aW1lci1wcm9ncmVzcy90aW1lci1wcm9ncmVzcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yYWRpYWwtcHJvZ3Jlc3Mge1xyXG4gICAgJGNpcmNsZS1zaXplOiAxNTBweDtcclxuICAgICRjaXJjbGUtYmFja2dyb3VuZDogI2Q2ZGFkYztcclxuICAgICRjaXJjbGUtY29sb3I6IHRvbWF0bztcclxuICAgICRpbnNldC1zaXplOiAxMjBweDtcclxuICAgICRpbnNldC1jb2xvcjogI2ZiZmJmYjtcclxuICAgICR0cmFuc2l0aW9uLWxlbmd0aDogMXM7XHJcbiAgICAkc2hhZG93OiA2cHggNnB4IDEwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgJHBlcmNlbnRhZ2UtY29sb3I6IHRvbWF0bztcclxuICAgICRwZXJjZW50YWdlLWZvbnQtc2l6ZTogMjJweDtcclxuXHJcbiAgICBtYXJnaW46IDUwcHg7XHJcbiAgICB3aWR0aDogJGNpcmNsZS1zaXplO1xyXG4gICAgaGVpZ2h0OiAkY2lyY2xlLXNpemU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2lyY2xlLWJhY2tncm91bmQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcblxyXG4gICAgLmNpcmNsZSB7XHJcbiAgICAgIC5maWxsLFxyXG4gICAgICAubWFzayxcclxuICAgICAgLnNoYWRvdyB7XHJcbiAgICAgICAgd2lkdGg6ICRjaXJjbGUtc2l6ZTtcclxuICAgICAgICBoZWlnaHQ6ICRjaXJjbGUtc2l6ZTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2hhZG93IHtcclxuICAgICAgICBib3gtc2hhZG93OiAkc2hhZG93IGluc2V0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZmlsbCxcclxuICAgICAgLm1hc2sge1xyXG4gICAgICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtICR0cmFuc2l0aW9uLWxlbmd0aDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAtbXMtdHJhbnNmb3JtICR0cmFuc2l0aW9uLWxlbmd0aDtcclxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gJHRyYW5zaXRpb24tbGVuZ3RoO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm1hc2sge1xyXG4gICAgICAgIGNsaXA6IHJlY3QoMHB4LCAkY2lyY2xlLXNpemUsICRjaXJjbGUtc2l6ZSwgJGNpcmNsZS1zaXplLzIpO1xyXG5cclxuICAgICAgICAuZmlsbCB7XHJcbiAgICAgICAgICBjbGlwOiByZWN0KDBweCwgJGNpcmNsZS1zaXplLzIsICRjaXJjbGUtc2l6ZSwgMHB4KTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjaXJjbGUtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmluc2V0IHtcclxuICAgICAgd2lkdGg6ICRpbnNldC1zaXplO1xyXG4gICAgICBoZWlnaHQ6ICRpbnNldC1zaXplO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAoJGNpcmNsZS1zaXplIC0gJGluc2V0LXNpemUpLzI7XHJcbiAgICAgIG1hcmdpbi10b3A6ICgkY2lyY2xlLXNpemUgLSAkaW5zZXQtc2l6ZSkvMjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGluc2V0LWNvbG9yO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJveC1zaGFkb3c6ICRzaGFkb3c7XHJcblxyXG4gICAgICAucGVyY2VudGFnZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogKCRpbnNldC1zaXplIC0gJHBlcmNlbnRhZ2UtZm9udC1zaXplKSAvIDI7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGNvbG9yOiAkcGVyY2VudGFnZS1jb2xvcjtcclxuICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJHBlcmNlbnRhZ2UtZm9udC1zaXplO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSIsIi5yYWRpYWwtcHJvZ3Jlc3Mge1xuICBtYXJnaW46IDUwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZGFkYztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnJhZGlhbC1wcm9ncmVzcyAuY2lyY2xlIC5maWxsLFxuLnJhZGlhbC1wcm9ncmVzcyAuY2lyY2xlIC5tYXNrLFxuLnJhZGlhbC1wcm9ncmVzcyAuY2lyY2xlIC5zaGFkb3cge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnJhZGlhbC1wcm9ncmVzcyAuY2lyY2xlIC5zaGFkb3cge1xuICBib3gtc2hhZG93OiA2cHggNnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpIGluc2V0O1xufVxuLnJhZGlhbC1wcm9ncmVzcyAuY2lyY2xlIC5maWxsLFxuLnJhZGlhbC1wcm9ncmVzcyAuY2lyY2xlIC5tYXNrIHtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDFzO1xuICB0cmFuc2l0aW9uOiAtbXMtdHJhbnNmb3JtIDFzO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5yYWRpYWwtcHJvZ3Jlc3MgLmNpcmNsZSAubWFzayB7XG4gIGNsaXA6IHJlY3QoMHB4LCAxNTBweCwgMTUwcHgsIDc1cHgpO1xufVxuLnJhZGlhbC1wcm9ncmVzcyAuY2lyY2xlIC5tYXNrIC5maWxsIHtcbiAgY2xpcDogcmVjdCgwcHgsIDc1cHgsIDE1MHB4LCAwcHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0b21hdG87XG59XG4ucmFkaWFsLXByb2dyZXNzIC5pbnNldCB7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZmJmYjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiA2cHggNnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLnJhZGlhbC1wcm9ncmVzcyAuaW5zZXQgLnBlcmNlbnRhZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQ5cHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogdG9tYXRvO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDIycHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimerProgressComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-timer-progress',
                templateUrl: './timer-progress.component.html',
                styleUrls: ['./timer-progress.component.scss'],
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, { timeInSeconds: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/yannbf/timer/timer.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/yannbf/timer/timer.component.ts ***!
  \************************************************************/
/*! exports provided: TimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerComponent", function() { return TimerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




function TimerComponent_ion_card_0_ion_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r32.timer.displayTime, " ");
} }
function TimerComponent_ion_card_0_ion_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Timer set up incorrectly");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TimerComponent_ion_card_0_ion_item_4_ion_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimerComponent_ion_card_0_ion_item_4_ion_button_1_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r39.initTimer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Restart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TimerComponent_ion_card_0_ion_item_4_ion_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimerComponent_ion_card_0_ion_item_4_ion_button_2_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r41.pauseTimer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Pause ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TimerComponent_ion_card_0_ion_item_4_ion_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimerComponent_ion_card_0_ion_item_4_ion_button_3_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r43.resumeTimer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Resume ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TimerComponent_ion_card_0_ion_item_4_ion_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimerComponent_ion_card_0_ion_item_4_ion_button_4_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r45.startTimer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Start ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TimerComponent_ion_card_0_ion_item_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TimerComponent_ion_card_0_ion_item_4_ion_button_1_Template, 3, 0, "ion-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TimerComponent_ion_card_0_ion_item_4_ion_button_2_Template, 3, 0, "ion-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TimerComponent_ion_card_0_ion_item_4_ion_button_3_Template, 3, 0, "ion-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TimerComponent_ion_card_0_ion_item_4_ion_button_4_Template, 3, 0, "ion-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r34.timer.runTimer && (ctx_r34.timer.hasStarted || ctx_r34.timer.hasFinished) || ctx_r34.timer.hasFinished);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r34.timer.runTimer && ctx_r34.timer.hasStarted && !ctx_r34.timer.hasFinished);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r34.timer.runTimer && ctx_r34.timer.hasStarted && !ctx_r34.timer.hasFinished);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r34.timer.hasStarted);
} }
function TimerComponent_ion_card_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TimerComponent_ion_card_0_ion_button_2_Template, 2, 1, "ion-button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TimerComponent_ion_card_0_ion_button_3_Template, 2, 0, "ion-button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TimerComponent_ion_card_0_ion_item_4_Template, 5, 4, "ion-item", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.timeInSeconds && ctx_r31.timeInSeconds > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r31.timeInSeconds || ctx_r31.timeInSeconds == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.timeInSeconds && ctx_r31.timeInSeconds > 0);
} }
class TimerComponent {
    ngOnInit() {
        this.initTimer();
    }
    hasFinished() {
        return this.timer.hasFinished;
    }
    initTimer() {
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
    startTimer() {
        this.timer.hasStarted = true;
        this.timer.runTimer = true;
        this.timerTick();
    }
    pauseTimer() {
        this.timer.runTimer = false;
    }
    resumeTimer() {
        this.startTimer();
    }
    timerTick() {
        setTimeout(() => {
            if (!this.timer.runTimer) {
                return;
            }
            this.timer.secondsRemaining--;
            this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
            if (this.timer.secondsRemaining > 0) {
                this.timerTick();
            }
            else {
                this.timer.hasFinished = true;
            }
        }, 1000);
    }
    getSecondsAsDigitalClock(inputSeconds) {
        const secNum = parseInt(inputSeconds.toString(), 10); // don't forget the second param
        const hours = Math.floor(secNum / 3600);
        const minutes = Math.floor((secNum - (hours * 3600)) / 60);
        const seconds = secNum - (hours * 3600) - (minutes * 60);
        let hoursString = '';
        let minutesString = '';
        let secondsString = '';
        hoursString = (hours < 10) ? '0' + hours : hours.toString();
        minutesString = (minutes < 10) ? '0' + minutes : minutes.toString();
        secondsString = (seconds < 10) ? '0' + seconds : seconds.toString();
        return hoursString + ':' + minutesString + ':' + secondsString;
    }
}
TimerComponent.ɵfac = function TimerComponent_Factory(t) { return new (t || TimerComponent)(); };
TimerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimerComponent, selectors: [["app-timer"]], inputs: { timeInSeconds: "timeInSeconds" }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["size", "large", "expand", "block", "fill", "clear", "class", "timer-button x-large", 4, "ngIf"], ["size", "large", "expand", "block", "fill", "clear", "class", "timer-button", 4, "ngIf"], ["size", "large", "expand", "block", "fill", "clear", 1, "timer-button", "x-large"], ["size", "large", "expand", "block", "fill", "clear", 1, "timer-button"], ["fill", "clear", "class", "large", "color", "danger", "slot", "start", 3, "click", 4, "ngIf"], ["fill", "clear", "class", "large", "slot", "end", 3, "click", 4, "ngIf"], ["fill", "clear", "color", "danger", "slot", "start", 1, "large", 3, "click"], ["name", "refresh"], ["fill", "clear", "slot", "end", 1, "large", 3, "click"], ["name", "pause"], ["name", "play"]], template: function TimerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TimerComponent_ion_card_0_Template, 5, 3, "ion-card", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.timer);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCardHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMveWFubmJmL3RpbWVyL3RpbWVyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-timer',
                templateUrl: './timer.component.html',
                styleUrls: ['./timer.component.scss'],
            }]
    }], null, { timeInSeconds: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/yannbf/yannbf.components.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/yannbf/yannbf.components.module.ts ***!
  \***************************************************************/
/*! exports provided: components, YannbfComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YannbfComponentsModule", function() { return YannbfComponentsModule; });
/* harmony import */ var _flash_card_flash_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flash-card/flash-card.component */ "./src/app/components/yannbf/flash-card/flash-card.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _accordion_list_accordion_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accordion-list/accordion-list.component */ "./src/app/components/yannbf/accordion-list/accordion-list.component.ts");
/* harmony import */ var _timer_progress_timer_progress_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timer-progress/timer-progress.component */ "./src/app/components/yannbf/timer-progress/timer-progress.component.ts");
/* harmony import */ var _timer_timer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timer/timer.component */ "./src/app/components/yannbf/timer/timer.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/components/yannbf/timeline/timeline.component.ts");









const components = [
    _accordion_list_accordion_list_component__WEBPACK_IMPORTED_MODULE_3__["AccordionListComponent"],
    _flash_card_flash_card_component__WEBPACK_IMPORTED_MODULE_0__["FlashCardComponent"],
    _timer_progress_timer_progress_component__WEBPACK_IMPORTED_MODULE_4__["TimerProgressComponent"],
    _timer_timer_component__WEBPACK_IMPORTED_MODULE_5__["TimerComponent"],
    _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_7__["TimelineComponent"],
    _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_7__["TimelineItemComponent"]
];
class YannbfComponentsModule {
}
YannbfComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: YannbfComponentsModule });
YannbfComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function YannbfComponentsModule_Factory(t) { return new (t || YannbfComponentsModule)(); }, imports: [[_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](YannbfComponentsModule, { declarations: [_accordion_list_accordion_list_component__WEBPACK_IMPORTED_MODULE_3__["AccordionListComponent"],
        _flash_card_flash_card_component__WEBPACK_IMPORTED_MODULE_0__["FlashCardComponent"],
        _timer_progress_timer_progress_component__WEBPACK_IMPORTED_MODULE_4__["TimerProgressComponent"],
        _timer_timer_component__WEBPACK_IMPORTED_MODULE_5__["TimerComponent"],
        _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_7__["TimelineComponent"],
        _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_7__["TimelineItemComponent"]], imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]], exports: [_accordion_list_accordion_list_component__WEBPACK_IMPORTED_MODULE_3__["AccordionListComponent"],
        _flash_card_flash_card_component__WEBPACK_IMPORTED_MODULE_0__["FlashCardComponent"],
        _timer_progress_timer_progress_component__WEBPACK_IMPORTED_MODULE_4__["TimerProgressComponent"],
        _timer_timer_component__WEBPACK_IMPORTED_MODULE_5__["TimerComponent"],
        _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_7__["TimelineComponent"],
        _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_7__["TimelineItemComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](YannbfComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [components],
                imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]],
                exports: [components]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=default~pages-yannbf-components-accordion-list-accordion-list-module~pages-yannbf-components-miscell~8ed0dc24-es2015.js.map