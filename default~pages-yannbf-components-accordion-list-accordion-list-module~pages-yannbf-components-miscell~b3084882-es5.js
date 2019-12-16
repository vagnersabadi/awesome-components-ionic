(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-yannbf-components-accordion-list-accordion-list-module~pages-yannbf-components-miscell~b3084882"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/yannbf/accordion-list/accordion-list.component.html": 
        /*!**********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/yannbf/accordion-list/accordion-list.component.html ***!
          \**********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-list class=\"accordion-list\">\r\n\r\n  <ion-item lines=\"none\"  [style]=\"getDynamicColor(headerColor)\" (click)=\"toggleAccordion()\"\r\n    class=\"accordion-header\" [class.active]=\"expanded\">\r\n    <ion-icon slot=\"start\" name=\"ios-arrow-forward\"> </ion-icon>\r\n    <ion-label> {{ title }} </ion-label>\r\n  </ion-item>\r\n  <div class=\"expand\">\r\n    <section #accordionContent [style.background]=\"contentColor\" [class.active]=\"expanded\" class=\"accordion-content\">\r\n      <ng-content></ng-content>\r\n    </section>\r\n\r\n  </div>\r\n\r\n\r\n\r\n</ion-list>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/yannbf/flash-card/flash-card.component.html": 
        /*!**************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/yannbf/flash-card/flash-card.component.html ***!
          \**************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"fc-container\" (click)=\"flip()\" [class.fc-back]=\"flipped\" #fcContainer>\r\n    <div class=\"front\" #front>\r\n        <ng-content  select=\".fc-front\"></ng-content>\r\n    </div>\r\n \r\n    <div class=\"back\" #back>\r\n        <ng-content select=\".fc-back\"></ng-content>\r\n    </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/yannbf/timer-progress/timer-progress.component.html": 
        /*!**********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/yannbf/timer-progress/timer-progress.component.html ***!
          \**********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-card *ngIf=\"timer\" >\r\n  <ion-card-header>\r\n    <div class=\"radial-progress\" data-progress=\"0\">\r\n      <div class=\"circle\">\r\n        <div class=\"mask full\" [style.transform]=\"transform\">\r\n          <div class=\"fill\" [style.transform]=\"transform\"></div>\r\n        </div>\r\n        <div class=\"mask half\">\r\n          <div class=\"fill\" [style.transform]=\"transform\"></div>\r\n          <div class=\"fill fix\" [style.transform]=\"fixTransform\"></div>\r\n        </div>\r\n        <div class=\"shadow\"></div>\r\n      </div>\r\n      <div class=\"inset\">\r\n        <div class=\"percentage\">{{timer.displayTime}}</div>\r\n      </div>\r\n    </div>\r\n    <ion-button *ngIf=\"!timeInSeconds || timeInSeconds == 0\" fill=\"clear\" expand=\"block\" class=\"timer-button\">Timer set up\r\n      incorrectly</ion-button>\r\n  </ion-card-header>\r\n  <ion-item *ngIf=\"timeInSeconds && timeInSeconds > 0\">\r\n    <ion-button fill=\"clear\" class=\"large\" color=\"danger\" (click)=\"initTimer()\" item-start\r\n      *ngIf=\"!timer.runTimer && (timer.hasStarted || timer.hasFinished) || timer.hasFinished\">\r\n      <ion-icon name=\"refresh\"></ion-icon>\r\n      Restart\r\n    </ion-button>\r\n    <ion-button fill=\"clear\" class=\"large\" (click)=\"pauseTimer()\" slot=\"end\"\r\n      *ngIf=\"timer.runTimer && timer.hasStarted && !timer.hasFinished\">\r\n      <ion-icon name=\"pause\"></ion-icon>\r\n      Pause\r\n    </ion-button>\r\n    <ion-button fill=\"clear\" class=\"large\" (click)=\"resumeTimer()\" slot=\"end\"\r\n      *ngIf=\"!timer.runTimer && timer.hasStarted && !timer.hasFinished\">\r\n      <ion-icon name=\"play\"></ion-icon>\r\n      Resume\r\n    </ion-button>\r\n    <ion-button fill=\"clear\" class=\"large\" (click)=\"startTimer()\" slot=\"end\" *ngIf=\"!timer.hasStarted\">\r\n      <ion-icon name=\"play\"></ion-icon>\r\n      Start\r\n    </ion-button>\r\n  </ion-item>\r\n</ion-card>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/yannbf/timer/timer.component.html": 
        /*!****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/yannbf/timer/timer.component.html ***!
          \****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-card *ngIf=\"timer\">\r\n  <ion-card-header>\r\n    <ion-button *ngIf=\"timeInSeconds && timeInSeconds > 0\" size=\"large\" expand=\"block\" fill=\"clear\"\r\n      class=\"timer-button x-large\">\r\n      {{timer.displayTime}}\r\n    </ion-button>\r\n    <ion-button *ngIf=\"!timeInSeconds || timeInSeconds == 0\" size=\"large\" expand=\"block\" fill=\"clear\"\r\n      class=\"timer-button\">Timer set up\r\n      incorrectly</ion-button>\r\n  </ion-card-header>\r\n  <ion-item *ngIf=\"timeInSeconds && timeInSeconds > 0\">\r\n    <ion-button fill=\"clear\" class=\"large\" color=\"danger\" (click)=\"initTimer()\" slot=\"start\"\r\n      *ngIf=\"!timer.runTimer && (timer.hasStarted || timer.hasFinished) || timer.hasFinished\">\r\n      <ion-icon name=\"refresh\"></ion-icon>\r\n      Restart\r\n    </ion-button>\r\n    <ion-button fill=\"clear\" class=\"large\" (click)=\"pauseTimer()\" slot=\"end\"\r\n      *ngIf=\"timer.runTimer && timer.hasStarted && !timer.hasFinished\">\r\n      <ion-icon name=\"pause\"></ion-icon>\r\n      Pause\r\n    </ion-button>\r\n    <ion-button fill=\"clear\" class=\"large\" (click)=\"resumeTimer()\" slot=\"end\"\r\n      *ngIf=\"!timer.runTimer && timer.hasStarted && !timer.hasFinished\">\r\n      <ion-icon name=\"play\"></ion-icon>\r\n      Resume\r\n    </ion-button>\r\n    <ion-button fill=\"clear\" class=\"large\" (click)=\"startTimer()\" slot=\"end\" *ngIf=\"!timer.hasStarted\">\r\n      <ion-icon name=\"play\"></ion-icon>\r\n      Start\r\n    </ion-button>\r\n  </ion-item>\r\n</ion-card>");
            /***/ 
        }),
        /***/ "./src/app/components/yannbf/accordion-list/accordion-list.component.scss": 
        /*!********************************************************************************!*\
          !*** ./src/app/components/yannbf/accordion-list/accordion-list.component.scss ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".accordion-header {\n  color: white;\n  --background: var(--myvar);\n}\n.accordion-header .item-inner {\n  margin-left: 0 !important;\n}\n.accordion-header ion-icon {\n  color: white;\n  transition: all 0.25s ease-in;\n  transform: rotate(0);\n}\n.active ion-icon {\n  transform: rotate(90deg);\n}\n.accordion-content {\n  transition: 0.3s ease-in-out;\n}\n.accordion-content.active {\n  padding: 0.75rem;\n}\n.label {\n  margin: 0px;\n}\n.expand {\n  margin: -4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy95YW5uYmYvYWNjb3JkaW9uLWxpc3QvQzpcXFVzZXJzXFxzYWJhZGlcXERvY3VtZW50c1xcUHJvamV0b3NcXF9pb25pY1xcaW9uaWM0LWNvbXBvbmVudHMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHlhbm5iZlxcYWNjb3JkaW9uLWxpc3RcXGFjY29yZGlvbi1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3lhbm5iZi9hY2NvcmRpb24tbGlzdC9hY2NvcmRpb24tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSwwQkFBQTtBQ0NGO0FEQ0U7RUFDRSx5QkFBQTtBQ0NKO0FERUU7RUFDRSxZQUFBO0VBRUEsNkJBQUE7RUFDQSxvQkFBQTtBQ0RKO0FES0E7RUFDRSx3QkFBQTtBQ0ZGO0FES0E7RUFDRSw0QkFBQTtBQ0ZGO0FER0U7RUFDRSxnQkFBQTtBQ0RKO0FES0E7RUFDRSxXQUFBO0FDRkY7QURLQTtFQUNFLFlBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMveWFubmJmL2FjY29yZGlvbi1saXN0L2FjY29yZGlvbi1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjY29yZGlvbi1oZWFkZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLW15dmFyKTtcclxuXHJcbiAgLml0ZW0taW5uZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbjtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gIH1cclxufVxyXG5cclxuLmFjdGl2ZSBpb24taWNvbiB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG59XHJcblxyXG4uYWNjb3JkaW9uLWNvbnRlbnQge1xyXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgJi5hY3RpdmUge1xyXG4gICAgcGFkZGluZzogMC43NXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5sYWJlbCB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5leHBhbmQge1xyXG4gIG1hcmdpbjogLTRweDtcclxufVxyXG4iLCIuYWNjb3JkaW9uLWhlYWRlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1teXZhcik7XG59XG4uYWNjb3JkaW9uLWhlYWRlciAuaXRlbS1pbm5lciB7XG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG59XG4uYWNjb3JkaW9uLWhlYWRlciBpb24taWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW47XG4gIHRyYW5zZm9ybTogcm90YXRlKDApO1xufVxuXG4uYWN0aXZlIGlvbi1pY29uIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuXG4uYWNjb3JkaW9uLWNvbnRlbnQge1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLmFjY29yZGlvbi1jb250ZW50LmFjdGl2ZSB7XG4gIHBhZGRpbmc6IDAuNzVyZW07XG59XG5cbi5sYWJlbCB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uZXhwYW5kIHtcbiAgbWFyZ2luOiAtNHB4O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/yannbf/accordion-list/accordion-list.component.ts": 
        /*!******************************************************************************!*\
          !*** ./src/app/components/yannbf/accordion-list/accordion-list.component.ts ***!
          \******************************************************************************/
        /*! exports provided: AccordionListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionListComponent", function () { return AccordionListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var AccordionListComponent = /** @class */ (function () {
                function AccordionListComponent(renderer, sanitizer) {
                    this.renderer = renderer;
                    this.sanitizer = sanitizer;
                    this.headerColor = '#F53D3D';
                    this.textColor = '#FFF';
                    this.contentColor = '#F9F9F9';
                    this.hasMargin = true;
                }
                AccordionListComponent.prototype.ngOnInit = function () {
                    if (!this.expanded) {
                        this.renderer.setStyle(this.elementView.nativeElement, 'height', 0 + 'px');
                    }
                };
                AccordionListComponent.prototype.toggleAccordion = function () {
                    this.expanded = !this.expanded;
                    var newHeight = this.expanded ? '100%' : '0px';
                    console.log(newHeight);
                    this.renderer.setStyle(this.elementView.nativeElement, 'height', newHeight);
                };
                AccordionListComponent.prototype.getDynamicColor = function (color) {
                    return this.sanitizer.bypassSecurityTrustStyle("--myvar:" + color);
                };
                return AccordionListComponent;
            }());
            AccordionListComponent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('headerColor'),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
            ], AccordionListComponent.prototype, "headerColor", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('textColor'),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
            ], AccordionListComponent.prototype, "textColor", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('contentColor'),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
            ], AccordionListComponent.prototype, "contentColor", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('title'),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
            ], AccordionListComponent.prototype, "title", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('hasMargin'),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
            ], AccordionListComponent.prototype, "hasMargin", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('expanded'),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
            ], AccordionListComponent.prototype, "expanded", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('accordionContent', { static: true }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
            ], AccordionListComponent.prototype, "elementView", void 0);
            AccordionListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-component-accordion-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./accordion-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/yannbf/accordion-list/accordion-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./accordion-list.component.scss */ "./src/app/components/yannbf/accordion-list/accordion-list.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
            ], AccordionListComponent);
            /***/ 
        }),
        /***/ "./src/app/components/yannbf/flash-card/flash-card.component.scss": 
        /*!************************************************************************!*\
          !*** ./src/app/components/yannbf/flash-card/flash-card.component.scss ***!
          \************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".fc-container {\n  transition: 0.6s;\n  transform-style: preserve-3d;\n  position: relative;\n}\n.fc-container.fc-back {\n  transform: rotateY(180deg);\n}\n.fc-container .front {\n  position: inherit;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 2;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  padding: 20px;\n  background: #f2f2f2;\n  transform: rotateY(0deg);\n}\n.fc-container .back {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: #f2f2f2;\n  padding: 20px;\n  transform: rotateY(180deg);\n}\n.fc-back .front {\n  z-index: 2;\n}\n.fc-back .back {\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy95YW5uYmYvZmxhc2gtY2FyZC9DOlxcVXNlcnNcXHNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZXRvc1xcX2lvbmljXFxpb25pYzQtY29tcG9uZW50cy9zcmNcXGFwcFxcY29tcG9uZW50c1xceWFubmJmXFxmbGFzaC1jYXJkXFxmbGFzaC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3lhbm5iZi9mbGFzaC1jYXJkL2ZsYXNoLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0VBO0VBQ0UsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FDakVGO0FEa0VFO0VBQ0UsMEJBQUE7QUNoRUo7QURtRUU7RUFDRSxpQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUNqRUo7QURvRUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0FDbEVKO0FEc0VFO0VBQ0UsVUFBQTtBQ25FSjtBRHFFRTtFQUNFLFVBQUE7QUNuRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3lhbm5iZi9mbGFzaC1jYXJkL2ZsYXNoLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAvKlxyXG4vLyAgICAgICogIEZsaXAgYW5pbWF0aW9uIGJ5IERhdmlkIFdhbHNoOiBodHRwczovL2Rhdmlkd2Fsc2gubmFtZS9jc3MtZmxpcFxyXG4vLyAgICAgICovXHJcblxyXG4vLyAvKiBmbGlwIHRoZSBwYW5lIHdoZW4gaG92ZXJlZCAqL1xyXG4vLyAuZmxpcC1jb250YWluZXIuZmxpcHBlZCAuZmxpcHBlciB7XHJcbi8vICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbi8vIH1cclxuXHJcbi8vIC5mbGlwLWNvbnRhaW5lcixcclxuLy8gLmZyb250LFxyXG4vLyAuYmFjayB7XHJcbi8vICAgLy8gd2lkdGg6IDkwdnc7XHJcbi8vICAgLy8gaGVpZ2h0OiA0MHZoO1xyXG4vLyAgIC8vIG1hcmdpbjogMjBweCBhdXRvO1xyXG4vLyB9XHJcblxyXG4vLyAvKiBmbGlwIHNwZWVkIGdvZXMgaGVyZSAqL1xyXG4vLyAuZmxpcHBlciB7XHJcbi8vICAgdHJhbnNpdGlvbjogMC42cztcclxuLy8gICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gfVxyXG5cclxuLy8gLyogaGlkZSBiYWNrIG9mIHBhbmUgZHVyaW5nIHN3YXAgKi9cclxuLy8gLmZyb250LFxyXG4vLyAuYmFjayB7XHJcbi8vICAgLy8gZGlzcGxheTogZmxleDtcclxuLy8gICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNlY2YwZjE7XHJcbi8vICAgLy8gYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4vLyAgIC8vIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDhweCA0cHggLTRweCByZ2JhKDE2MywgMTYzLCAxNjMsIDAuMjUpO1xyXG4vLyAgIC8vIC1tb3otYm94LXNoYWRvdzogMHB4IDhweCA0cHggLTRweCByZ2JhKDE2MywgMTYzLCAxNjMsIDAuMjUpO1xyXG4vLyAgIC8vIGJveC1zaGFkb3c6IDBweCA4cHggNHB4IC00cHggcmdiYSgxNjMsIDE2MywgMTYzLCAwLjI1KTtcclxuLy8gICAvLyBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmUzO1xyXG4vLyAgIC8vIG1hcmdpbjogMDtcclxuLy8gICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgLy8gdG9wOiAwO1xyXG4vLyAgIC8vIGxlZnQ6IDA7XHJcblxyXG4vLyAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICB0b3A6IDA7XHJcbi8vICAgbGVmdDogMDtcclxuLy8gICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG4vLyAgIHBhZGRpbmc6IDIwcHg7XHJcbi8vICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuLy8gICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuLy8gfVxyXG5cclxuLy8gLyogZnJvbnQgcGFuZSwgcGxhY2VkIGFib3ZlIGJhY2sgKi9cclxuLy8gLmZyb250IHtcclxuLy8gICB6LWluZGV4OiAyO1xyXG4vLyAgIC8qIGZvciBmaXJlZm94IDMxICovXHJcbi8vICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4vLyB9XHJcblxyXG4vLyAvKiBiYWNrLCBpbml0aWFsbHkgaGlkZGVuIHBhbmUgKi9cclxuLy8gLmJhY2sge1xyXG4vLyAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG4vLyAgIHotaW5kZXg6IDI7XHJcblxyXG4vLyAgIC8vIGJhY2tncm91bmQtY29sb3I6ICM5ZWVlYjY7XHJcbi8vIH1cclxuXHJcbi5mYy1jb250YWluZXIge1xyXG4gIHRyYW5zaXRpb246IDAuNnM7XHJcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgJi5mYy1iYWNrIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG4gIH1cclxuXHJcbiAgLmZyb250IHtcclxuICAgIHBvc2l0aW9uOiBpbmhlcml0O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gIH1cclxuXHJcbiAgLmJhY2sge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZDogI2YyZjJmMjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuICB9XHJcbn1cclxuLmZjLWJhY2sge1xyXG4gIC5mcm9udCB7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuICAuYmFjayB7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxufVxyXG4iLCIuZmMtY29udGFpbmVyIHtcbiAgdHJhbnNpdGlvbjogMC42cztcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmZjLWNvbnRhaW5lci5mYy1iYWNrIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG4uZmMtY29udGFpbmVyIC5mcm9udCB7XG4gIHBvc2l0aW9uOiBpbmhlcml0O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAyO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbn1cbi5mYy1jb250YWluZXIgLmJhY2sge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufVxuXG4uZmMtYmFjayAuZnJvbnQge1xuICB6LWluZGV4OiAyO1xufVxuLmZjLWJhY2sgLmJhY2sge1xuICB6LWluZGV4OiAyO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/yannbf/flash-card/flash-card.component.ts": 
        /*!**********************************************************************!*\
          !*** ./src/app/components/yannbf/flash-card/flash-card.component.ts ***!
          \**********************************************************************/
        /*! exports provided: FlashCardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlashCardComponent", function () { return FlashCardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FlashCardComponent = /** @class */ (function () {
                function FlashCardComponent() {
                    // @ViewChild('fcContainer', { static: true }) fcContainer;
                    // @ViewChild('front', { static: true }) fcFront;
                    // @ViewChild('back', { static: true }) fcBack;
                    this.flipped = false;
                }
                FlashCardComponent.prototype.flip = function () {
                    this.flipped = !this.flipped;
                };
                FlashCardComponent.prototype.ngOnInit = function () {
                };
                return FlashCardComponent;
            }());
            FlashCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-flash-card-component',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./flash-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/yannbf/flash-card/flash-card.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./flash-card.component.scss */ "./src/app/components/yannbf/flash-card/flash-card.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], FlashCardComponent);
            /***/ 
        }),
        /***/ "./src/app/components/yannbf/timer-progress/timer-progress.component.scss": 
        /*!********************************************************************************!*\
          !*** ./src/app/components/yannbf/timer-progress/timer-progress.component.scss ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".radial-progress {\n  margin: 50px;\n  width: 150px;\n  height: 150px;\n  background-color: #d6dadc;\n  border-radius: 50%;\n}\n.radial-progress .circle .fill,\n.radial-progress .circle .mask,\n.radial-progress .circle .shadow {\n  width: 150px;\n  height: 150px;\n  position: absolute;\n  border-radius: 50%;\n}\n.radial-progress .circle .shadow {\n  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.2) inset;\n}\n.radial-progress .circle .fill,\n.radial-progress .circle .mask {\n  -webkit-backface-visibility: hidden;\n  transition: transform 1s;\n  border-radius: 50%;\n}\n.radial-progress .circle .mask {\n  clip: rect(0px, 150px, 150px, 75px);\n}\n.radial-progress .circle .mask .fill {\n  clip: rect(0px, 75px, 150px, 0px);\n  background-color: tomato;\n}\n.radial-progress .inset {\n  width: 120px;\n  height: 120px;\n  position: absolute;\n  margin-left: 15px;\n  margin-top: 15px;\n  background-color: #fbfbfb;\n  border-radius: 50%;\n  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.2);\n}\n.radial-progress .inset .percentage {\n  width: 100%;\n  position: absolute;\n  top: 49px;\n  line-height: 1;\n  text-align: center;\n  font-family: \"Lato\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  color: tomato;\n  font-weight: 800;\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy95YW5uYmYvdGltZXItcHJvZ3Jlc3MvQzpcXFVzZXJzXFxzYWJhZGlcXERvY3VtZW50c1xcUHJvamV0b3NcXF9pb25pY1xcaW9uaWM0LWNvbXBvbmVudHMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHlhbm5iZlxcdGltZXItcHJvZ3Jlc3NcXHRpbWVyLXByb2dyZXNzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3lhbm5iZi90aW1lci1wcm9ncmVzcy90aW1lci1wcm9ncmVzcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQVdJLFlBQUE7RUFDQSxZQVhjO0VBWWQsYUFaYztFQWFkLHlCQVpvQjtFQWFwQixrQkFBQTtBQ1RKO0FEWU07OztFQUdFLFlBcEJVO0VBcUJWLGFBckJVO0VBc0JWLGtCQUFBO0VBQ0Esa0JBQUE7QUNWUjtBRGFNO0VBQ0UsaURBQUE7QUNYUjtBRGNNOztFQUVFLG1DQUFBO0VBR0Esd0JBQUE7RUFDQSxrQkFBQTtBQ1pSO0FEZU07RUFDRSxtQ0FBQTtBQ2JSO0FEZVE7RUFDRSxpQ0FBQTtFQUNBLHdCQTFDUztBQzZCbkI7QURrQkk7RUFDRSxZQS9DVztFQWdEWCxhQWhEVztFQWlEWCxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFuRFk7RUFvRFosa0JBQUE7RUFDQSwyQ0FuRE87QUNtQ2I7QURrQk07RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUVBQUE7RUFDQSxhQTNEZTtFQTREZixnQkFBQTtFQUNBLGVBNURtQjtBQzRDM0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3lhbm5iZi90aW1lci1wcm9ncmVzcy90aW1lci1wcm9ncmVzcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yYWRpYWwtcHJvZ3Jlc3Mge1xyXG4gICAgJGNpcmNsZS1zaXplOiAxNTBweDtcclxuICAgICRjaXJjbGUtYmFja2dyb3VuZDogI2Q2ZGFkYztcclxuICAgICRjaXJjbGUtY29sb3I6IHRvbWF0bztcclxuICAgICRpbnNldC1zaXplOiAxMjBweDtcclxuICAgICRpbnNldC1jb2xvcjogI2ZiZmJmYjtcclxuICAgICR0cmFuc2l0aW9uLWxlbmd0aDogMXM7XHJcbiAgICAkc2hhZG93OiA2cHggNnB4IDEwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgJHBlcmNlbnRhZ2UtY29sb3I6IHRvbWF0bztcclxuICAgICRwZXJjZW50YWdlLWZvbnQtc2l6ZTogMjJweDtcclxuXHJcbiAgICBtYXJnaW46IDUwcHg7XHJcbiAgICB3aWR0aDogJGNpcmNsZS1zaXplO1xyXG4gICAgaGVpZ2h0OiAkY2lyY2xlLXNpemU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2lyY2xlLWJhY2tncm91bmQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcblxyXG4gICAgLmNpcmNsZSB7XHJcbiAgICAgIC5maWxsLFxyXG4gICAgICAubWFzayxcclxuICAgICAgLnNoYWRvdyB7XHJcbiAgICAgICAgd2lkdGg6ICRjaXJjbGUtc2l6ZTtcclxuICAgICAgICBoZWlnaHQ6ICRjaXJjbGUtc2l6ZTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2hhZG93IHtcclxuICAgICAgICBib3gtc2hhZG93OiAkc2hhZG93IGluc2V0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZmlsbCxcclxuICAgICAgLm1hc2sge1xyXG4gICAgICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtICR0cmFuc2l0aW9uLWxlbmd0aDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAtbXMtdHJhbnNmb3JtICR0cmFuc2l0aW9uLWxlbmd0aDtcclxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gJHRyYW5zaXRpb24tbGVuZ3RoO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm1hc2sge1xyXG4gICAgICAgIGNsaXA6IHJlY3QoMHB4LCAkY2lyY2xlLXNpemUsICRjaXJjbGUtc2l6ZSwgJGNpcmNsZS1zaXplLzIpO1xyXG5cclxuICAgICAgICAuZmlsbCB7XHJcbiAgICAgICAgICBjbGlwOiByZWN0KDBweCwgJGNpcmNsZS1zaXplLzIsICRjaXJjbGUtc2l6ZSwgMHB4KTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjaXJjbGUtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmluc2V0IHtcclxuICAgICAgd2lkdGg6ICRpbnNldC1zaXplO1xyXG4gICAgICBoZWlnaHQ6ICRpbnNldC1zaXplO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAoJGNpcmNsZS1zaXplIC0gJGluc2V0LXNpemUpLzI7XHJcbiAgICAgIG1hcmdpbi10b3A6ICgkY2lyY2xlLXNpemUgLSAkaW5zZXQtc2l6ZSkvMjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGluc2V0LWNvbG9yO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJveC1zaGFkb3c6ICRzaGFkb3c7XHJcblxyXG4gICAgICAucGVyY2VudGFnZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogKCRpbnNldC1zaXplIC0gJHBlcmNlbnRhZ2UtZm9udC1zaXplKSAvIDI7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGNvbG9yOiAkcGVyY2VudGFnZS1jb2xvcjtcclxuICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJHBlcmNlbnRhZ2UtZm9udC1zaXplO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSIsIi5yYWRpYWwtcHJvZ3Jlc3Mge1xuICBtYXJnaW46IDUwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZGFkYztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnJhZGlhbC1wcm9ncmVzcyAuY2lyY2xlIC5maWxsLFxuLnJhZGlhbC1wcm9ncmVzcyAuY2lyY2xlIC5tYXNrLFxuLnJhZGlhbC1wcm9ncmVzcyAuY2lyY2xlIC5zaGFkb3cge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnJhZGlhbC1wcm9ncmVzcyAuY2lyY2xlIC5zaGFkb3cge1xuICBib3gtc2hhZG93OiA2cHggNnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpIGluc2V0O1xufVxuLnJhZGlhbC1wcm9ncmVzcyAuY2lyY2xlIC5maWxsLFxuLnJhZGlhbC1wcm9ncmVzcyAuY2lyY2xlIC5tYXNrIHtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDFzO1xuICB0cmFuc2l0aW9uOiAtbXMtdHJhbnNmb3JtIDFzO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5yYWRpYWwtcHJvZ3Jlc3MgLmNpcmNsZSAubWFzayB7XG4gIGNsaXA6IHJlY3QoMHB4LCAxNTBweCwgMTUwcHgsIDc1cHgpO1xufVxuLnJhZGlhbC1wcm9ncmVzcyAuY2lyY2xlIC5tYXNrIC5maWxsIHtcbiAgY2xpcDogcmVjdCgwcHgsIDc1cHgsIDE1MHB4LCAwcHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0b21hdG87XG59XG4ucmFkaWFsLXByb2dyZXNzIC5pbnNldCB7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZmJmYjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiA2cHggNnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLnJhZGlhbC1wcm9ncmVzcyAuaW5zZXQgLnBlcmNlbnRhZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQ5cHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogdG9tYXRvO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDIycHg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/yannbf/timer-progress/timer-progress.component.ts": 
        /*!******************************************************************************!*\
          !*** ./src/app/components/yannbf/timer-progress/timer-progress.component.ts ***!
          \******************************************************************************/
        /*! exports provided: TimerProgressComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerProgressComponent", function () { return TimerProgressComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var TimerProgressComponent = /** @class */ (function () {
                function TimerProgressComponent(sanitizer) {
                    this.sanitizer = sanitizer;
                }
                TimerProgressComponent.prototype.ngOnInit = function () {
                    this.initTimer();
                };
                TimerProgressComponent.prototype.hasFinished = function () {
                    return this.timer.hasFinished;
                };
                TimerProgressComponent.prototype.initProgressBar = function () {
                    this.percent = 100;
                    this.increment = 180 / 100;
                    var progress = 'rotate(' + this.increment * this.percent + 'deg)';
                    this.transform = this.sanitizer.bypassSecurityTrustStyle(progress);
                    this.fixTransform = this.sanitizer.bypassSecurityTrustStyle(progress);
                };
                TimerProgressComponent.prototype.initTimer = function () {
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
                };
                TimerProgressComponent.prototype.startTimer = function () {
                    this.timer.hasStarted = true;
                    this.timer.runTimer = true;
                    this.timerTick();
                };
                TimerProgressComponent.prototype.pauseTimer = function () {
                    this.timer.runTimer = false;
                };
                TimerProgressComponent.prototype.resumeTimer = function () {
                    this.startTimer();
                };
                TimerProgressComponent.prototype.timerTick = function () {
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
                        }
                        else {
                            _this.timer.hasFinished = true;
                        }
                    }, 1000);
                };
                TimerProgressComponent.prototype.getSecondsAsDigitalClock = function (inputSeconds) {
                    var secNum = parseInt(inputSeconds.toString(), 10); // don't forget the second param
                    var hours = Math.floor(secNum / 3600);
                    var minutes = Math.floor((secNum - (hours * 3600)) / 60);
                    var seconds = secNum - (hours * 3600) - (minutes * 60);
                    var hoursString = '';
                    var minutesString = '';
                    var secondsString = '';
                    hoursString = (hours < 10) ? '0' + hours : hours.toString();
                    minutesString = (minutes < 10) ? '0' + minutes : minutes.toString();
                    secondsString = (seconds < 10) ? '0' + seconds : seconds.toString();
                    return hoursString + ':' + minutesString + ':' + secondsString;
                };
                return TimerProgressComponent;
            }());
            TimerProgressComponent.ctorParameters = function () { return [
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
            ], TimerProgressComponent.prototype, "timeInSeconds", void 0);
            TimerProgressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-timer-progress',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./timer-progress.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/yannbf/timer-progress/timer-progress.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./timer-progress.component.scss */ "./src/app/components/yannbf/timer-progress/timer-progress.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
            ], TimerProgressComponent);
            /***/ 
        }),
        /***/ "./src/app/components/yannbf/timer/timer.component.scss": 
        /*!**************************************************************!*\
          !*** ./src/app/components/yannbf/timer/timer.component.scss ***!
          \**************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMveWFubmJmL3RpbWVyL3RpbWVyLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/components/yannbf/timer/timer.component.ts": 
        /*!************************************************************!*\
          !*** ./src/app/components/yannbf/timer/timer.component.ts ***!
          \************************************************************/
        /*! exports provided: TimerComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerComponent", function () { return TimerComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var TimerComponent = /** @class */ (function () {
                function TimerComponent() {
                }
                TimerComponent.prototype.ngOnInit = function () {
                    this.initTimer();
                };
                TimerComponent.prototype.hasFinished = function () {
                    return this.timer.hasFinished;
                };
                TimerComponent.prototype.initTimer = function () {
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
                };
                TimerComponent.prototype.startTimer = function () {
                    this.timer.hasStarted = true;
                    this.timer.runTimer = true;
                    this.timerTick();
                };
                TimerComponent.prototype.pauseTimer = function () {
                    this.timer.runTimer = false;
                };
                TimerComponent.prototype.resumeTimer = function () {
                    this.startTimer();
                };
                TimerComponent.prototype.timerTick = function () {
                    var _this = this;
                    setTimeout(function () {
                        if (!_this.timer.runTimer) {
                            return;
                        }
                        _this.timer.secondsRemaining--;
                        _this.timer.displayTime = _this.getSecondsAsDigitalClock(_this.timer.secondsRemaining);
                        if (_this.timer.secondsRemaining > 0) {
                            _this.timerTick();
                        }
                        else {
                            _this.timer.hasFinished = true;
                        }
                    }, 1000);
                };
                TimerComponent.prototype.getSecondsAsDigitalClock = function (inputSeconds) {
                    var secNum = parseInt(inputSeconds.toString(), 10); // don't forget the second param
                    var hours = Math.floor(secNum / 3600);
                    var minutes = Math.floor((secNum - (hours * 3600)) / 60);
                    var seconds = secNum - (hours * 3600) - (minutes * 60);
                    var hoursString = '';
                    var minutesString = '';
                    var secondsString = '';
                    hoursString = (hours < 10) ? '0' + hours : hours.toString();
                    minutesString = (minutes < 10) ? '0' + minutes : minutes.toString();
                    secondsString = (seconds < 10) ? '0' + seconds : seconds.toString();
                    return hoursString + ':' + minutesString + ':' + secondsString;
                };
                return TimerComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
            ], TimerComponent.prototype, "timeInSeconds", void 0);
            TimerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-timer',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./timer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/yannbf/timer/timer.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./timer.component.scss */ "./src/app/components/yannbf/timer/timer.component.scss")).default]
                })
            ], TimerComponent);
            /***/ 
        }),
        /***/ "./src/app/components/yannbf/yannbf.components.module.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/components/yannbf/yannbf.components.module.ts ***!
          \***************************************************************/
        /*! exports provided: components, YannbfComponentsModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function () { return components; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YannbfComponentsModule", function () { return YannbfComponentsModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _flash_card_flash_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flash-card/flash-card.component */ "./src/app/components/yannbf/flash-card/flash-card.component.ts");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _accordion_list_accordion_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accordion-list/accordion-list.component */ "./src/app/components/yannbf/accordion-list/accordion-list.component.ts");
            /* harmony import */ var _timer_progress_timer_progress_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timer-progress/timer-progress.component */ "./src/app/components/yannbf/timer-progress/timer-progress.component.ts");
            /* harmony import */ var _timer_timer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./timer/timer.component */ "./src/app/components/yannbf/timer/timer.component.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            var components = [
                _accordion_list_accordion_list_component__WEBPACK_IMPORTED_MODULE_4__["AccordionListComponent"],
                _flash_card_flash_card_component__WEBPACK_IMPORTED_MODULE_1__["FlashCardComponent"],
                _timer_progress_timer_progress_component__WEBPACK_IMPORTED_MODULE_5__["TimerProgressComponent"],
                _timer_timer_component__WEBPACK_IMPORTED_MODULE_6__["TimerComponent"],
            ];
            var YannbfComponentsModule = /** @class */ (function () {
                function YannbfComponentsModule() {
                }
                return YannbfComponentsModule;
            }());
            YannbfComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
                    declarations: [components],
                    imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"]],
                    exports: [components]
                })
            ], YannbfComponentsModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=default~pages-yannbf-components-accordion-list-accordion-list-module~pages-yannbf-components-miscell~b3084882-es2015.js.map
//# sourceMappingURL=default~pages-yannbf-components-accordion-list-accordion-list-module~pages-yannbf-components-miscell~b3084882-es5.js.map
//# sourceMappingURL=default~pages-yannbf-components-accordion-list-accordion-list-module~pages-yannbf-components-miscell~b3084882-es5.js.map