(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-miscellaneous-expandable-header-expandable-header-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/yannbf/components/miscellaneous/expandable-header/expandable-header.page.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/yannbf/components/miscellaneous/expandable-header/expandable-header.page.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar [appExpandableHeader]=\"scrollArea\" color=\"primary\">\r\n    <ion-item>\r\n      <ion-label>\r\n        <ion-icon name=\"search\"></ion-icon>\r\n      </ion-label>\r\n      <ion-input type=\"text\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>\r\n        <ion-icon name=\"funnel\"></ion-icon>\r\n      </ion-label>\r\n      <ion-input type=\"text\"></ion-input>\r\n    </ion-item>\r\n  </ion-toolbar>\r\n\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title> Expandable header </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" #scrollArea [scrollEvents]=\"true\" class=\"ion-padding\">\r\n  <header>\r\n    <h1>Dummy Title</h1>\r\n  </header>\r\n  <main>\r\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta dolor urna, quis iaculis eros tincidunt\r\n      sed.\r\n      Nunc tempor porttitor lacus, non ultrices sapien interdum non. Curabitur tempor efficitur tellus, id convallis\r\n      felis varius eu.\r\n      Pellentesque quis velit metus. Nam quis dictum quam. Integer ut mauris augue. Nulla at convallis mauris. Sed vel\r\n      faucibus odio.\r\n      Proin eu ante in massa scelerisque auctor. Nulla at sapien id lectus ultricies dapibus at eu augue. Morbi ac\r\n      volutpat nulla.\r\n      Morbi elit ex, accumsan vitae tincidunt eget, posuere id sem. Sed cursus sem ante, non fringilla augue mattis ac.\r\n    </p>\r\n    <p>Vestibulum finibus mi lacus, eget condimentum diam consequat eu. Donec fermentum accumsan libero, a fermentum\r\n      ante faucibus vel.\r\n      Etiam euismod mi nec efficitur tincidunt. Nulla facilisi. Vivamus nec malesuada turpis. Nulla ultricies non lacus\r\n      vel scelerisque.\r\n      Integer vulputate ex non rutrum scelerisque. Sed ac dapibus risus. Fusce blandit, mauris at semper venenatis,\r\n      metus ipsum ultricies\r\n      lacus, quis suscipit nunc nibh ut tellus. Cras varius quam vel libero scelerisque accumsan. Pellentesque at luctus\r\n      tortor.\r\n      In eleifend neque justo, porttitor auctor augue rhoncus ac.\r\n      Mauris ut eros eu sapien aliquet lacinia. Donec fringilla velit diam, eu maximus felis lacinia vel.</p>\r\n    <p>Nullam eleifend ut eros sit amet aliquam. In mattis dolor non tortor vulputate, nec eleifend magna lobortis.\r\n      Vivamus id ex ultrices, mollis enim a, fringilla risus. Quisque vel aliquet diam. Morbi vitae facilisis elit.\r\n      Donec in pretium sapien. Phasellus rhoncus nisi ante, eget tempus nibh pretium non. Aliquam fringilla, odio sit\r\n      amet varius commodo, lacus metus volutpat nisi, in faucibus est urna non orci. Suspendisse rhoncus lobortis\r\n      tortor,\r\n      sed placerat metus finibus sodales. Mauris at sapien placerat, efficitur leo at, auctor erat.\r\n      In faucibus tellus sit amet leo vehicula, ac ultrices dui auctor. Duis maximus auctor metus a vulputate.</p>\r\n    <p>Nullam eleifend ut eros sit amet aliquam. In mattis dolor non tortor vulputate, nec eleifend magna lobortis.\r\n      Vivamus id ex ultrices, mollis enim a, fringilla risus. Quisque vel aliquet diam. Morbi vitae facilisis elit.\r\n      Donec in pretium sapien. Phasellus rhoncus nisi ante, eget tempus nibh pretium non. Aliquam fringilla, odio sit\r\n      amet varius commodo, lacus metus volutpat nisi, in faucibus est urna non orci. Suspendisse rhoncus lobortis\r\n      tortor,\r\n      sed placerat metus finibus sodales. Mauris at sapien placerat, efficitur leo at, auctor erat.\r\n      In faucibus tellus sit amet leo vehicula, ac ultrices dui auctor. Duis maximus auctor metus a vulputate.</p>\r\n  </main>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/directives/yannbf/expandable-header/expandable-header.directive.ts":
/*!************************************************************************************!*\
  !*** ./src/app/directives/yannbf/expandable-header/expandable-header.directive.ts ***!
  \************************************************************************************/
/*! exports provided: ExpandableHeaderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandableHeaderDirective", function() { return ExpandableHeaderDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let ExpandableHeaderDirective = class ExpandableHeaderDirective {
    constructor(element, renderer, domCtrl) {
        this.element = element;
        this.renderer = renderer;
        this.domCtrl = domCtrl;
        this.hidden = false;
        this.triggerDistance = 0;
    }
    ngOnInit() {
        // Wait until 'ion-scroll' element is added to 'ion-content'
        this.initStyles();
        this.scrollArea.ionScroll.subscribe((scrollEvent) => {
            const delta = scrollEvent.detail.deltaY;
            if (scrollEvent.detail.currentY === 0 && this.hidden) {
                this.show();
            }
            else if (!this.hidden && delta > this.triggerDistance) {
                this.hide();
            }
            else if (this.hidden && delta < -this.triggerDistance) {
                this.show();
            }
        });
    }
    initStyles() {
        this.domCtrl.write(() => {
            this.renderer.setStyle(this.element.nativeElement, 'transition', '0.5s linear');
        });
    }
    hide() {
        this.domCtrl.write(() => {
            this.renderer.setStyle(this.element.nativeElement, 'min-height', '0px');
            this.renderer.setStyle(this.element.nativeElement, 'height', '0px');
            this.renderer.setStyle(this.element.nativeElement, 'opacity', '0');
            this.renderer.setStyle(this.element.nativeElement, 'padding', '0');
        });
        this.hidden = true;
    }
    show() {
        this.domCtrl.write(() => {
            this.renderer.setStyle(this.element.nativeElement, 'height', '150px');
            this.renderer.removeStyle(this.element.nativeElement, 'opacity');
            this.renderer.removeStyle(this.element.nativeElement, 'min-height');
            this.renderer.removeStyle(this.element.nativeElement, 'padding');
        });
        this.hidden = false;
    }
};
ExpandableHeaderDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["DomController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appExpandableHeader'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ExpandableHeaderDirective.prototype, "scrollArea", void 0);
ExpandableHeaderDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appExpandableHeader]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["DomController"]])
], ExpandableHeaderDirective);



/***/ }),

/***/ "./src/app/pages/yannbf/components/miscellaneous/expandable-header/expandable-header.module.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/miscellaneous/expandable-header/expandable-header.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ExpandableHeaderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandableHeaderPageModule", function() { return ExpandableHeaderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _directives_yannbf_expandable_header_expandable_header_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../directives/yannbf/expandable-header/expandable-header.directive */ "./src/app/directives/yannbf/expandable-header/expandable-header.directive.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _expandable_header_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./expandable-header.page */ "./src/app/pages/yannbf/components/miscellaneous/expandable-header/expandable-header.page.ts");








const routes = [
    {
        path: '',
        component: _expandable_header_page__WEBPACK_IMPORTED_MODULE_7__["ExpandableHeaderPage"]
    }
];
let ExpandableHeaderPageModule = class ExpandableHeaderPageModule {
};
ExpandableHeaderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
        ],
        declarations: [_expandable_header_page__WEBPACK_IMPORTED_MODULE_7__["ExpandableHeaderPage"], _directives_yannbf_expandable_header_expandable_header_directive__WEBPACK_IMPORTED_MODULE_1__["ExpandableHeaderDirective"]] //<-- import directive
    })
], ExpandableHeaderPageModule);



/***/ }),

/***/ "./src/app/pages/yannbf/components/miscellaneous/expandable-header/expandable-header.page.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/miscellaneous/expandable-header/expandable-header.page.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  width: 92%;\n  margin: 4%;\n  padding-left: 10px !important;\n  margin-bottom: 10px;\n  --background: #fff;\n  opacity: 0.7;\n  font-size: 0.9em;\n  -webkit-transition: 0.2s linear;\n  transition: 0.2s linear;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbWlzY2VsbGFuZW91cy9leHBhbmRhYmxlLWhlYWRlci9DOlxcVXNlcnNcXHNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZXRvc1xcX2lvbmljXFxpb25pYzQtY29tcG9uZW50cy9zcmNcXGFwcFxccGFnZXNcXHlhbm5iZlxcY29tcG9uZW50c1xcbWlzY2VsbGFuZW91c1xcZXhwYW5kYWJsZS1oZWFkZXJcXGV4cGFuZGFibGUtaGVhZGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbWlzY2VsbGFuZW91cy9leHBhbmRhYmxlLWhlYWRlci9leHBhbmRhYmxlLWhlYWRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQUEsdUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL21pc2NlbGxhbmVvdXMvZXhwYW5kYWJsZS1oZWFkZXIvZXhwYW5kYWJsZS1oZWFkZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xyXG4gIHdpZHRoOiA5MiU7XHJcbiAgbWFyZ2luOiA0JTtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgZm9udC1zaXplOiAwLjllbTtcclxuICB0cmFuc2l0aW9uOiAwLjJzIGxpbmVhcjtcclxufVxyXG4iLCJpb24taXRlbSB7XG4gIHdpZHRoOiA5MiU7XG4gIG1hcmdpbjogNCU7XG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gIG9wYWNpdHk6IDAuNztcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgdHJhbnNpdGlvbjogMC4ycyBsaW5lYXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/yannbf/components/miscellaneous/expandable-header/expandable-header.page.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/miscellaneous/expandable-header/expandable-header.page.ts ***!
  \***************************************************************************************************/
/*! exports provided: ExpandableHeaderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandableHeaderPage", function() { return ExpandableHeaderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ExpandableHeaderPage = class ExpandableHeaderPage {
    constructor() { }
    ngOnInit() {
    }
};
ExpandableHeaderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-expandable-header',
        template: __webpack_require__(/*! raw-loader!./expandable-header.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/yannbf/components/miscellaneous/expandable-header/expandable-header.page.html"),
        styles: [__webpack_require__(/*! ./expandable-header.page.scss */ "./src/app/pages/yannbf/components/miscellaneous/expandable-header/expandable-header.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ExpandableHeaderPage);



/***/ })

}]);
//# sourceMappingURL=pages-yannbf-components-miscellaneous-expandable-header-expandable-header-module-es2015.js.map