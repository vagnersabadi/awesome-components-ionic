(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-miscellaneous-expandable-header-expandable-header-module"],{

/***/ "./src/app/directives/yannbf/expandable-header/expandable-header.directive.ts":
/*!************************************************************************************!*\
  !*** ./src/app/directives/yannbf/expandable-header/expandable-header.directive.ts ***!
  \************************************************************************************/
/*! exports provided: ExpandableHeaderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandableHeaderDirective", function() { return ExpandableHeaderDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




class ExpandableHeaderDirective {
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
}
ExpandableHeaderDirective.ɵfac = function ExpandableHeaderDirective_Factory(t) { return new (t || ExpandableHeaderDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["DomController"])); };
ExpandableHeaderDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ExpandableHeaderDirective, selectors: [["", "appExpandableHeader", ""]], inputs: { scrollArea: ["appExpandableHeader", "scrollArea"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExpandableHeaderDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appExpandableHeader]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["DomController"] }]; }, { scrollArea: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['appExpandableHeader']
        }] }); })();


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
/* harmony import */ var _directives_yannbf_expandable_header_expandable_header_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../../directives/yannbf/expandable-header/expandable-header.directive */ "./src/app/directives/yannbf/expandable-header/expandable-header.directive.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _expandable_header_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./expandable-header.page */ "./src/app/pages/yannbf/components/miscellaneous/expandable-header/expandable-header.page.ts");









const routes = [
    {
        path: '',
        component: _expandable_header_page__WEBPACK_IMPORTED_MODULE_6__["ExpandableHeaderPage"]
    }
];
class ExpandableHeaderPageModule {
}
ExpandableHeaderPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExpandableHeaderPageModule });
ExpandableHeaderPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExpandableHeaderPageModule_Factory(t) { return new (t || ExpandableHeaderPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExpandableHeaderPageModule, { declarations: [_expandable_header_page__WEBPACK_IMPORTED_MODULE_6__["ExpandableHeaderPage"], _directives_yannbf_expandable_header_expandable_header_directive__WEBPACK_IMPORTED_MODULE_0__["ExpandableHeaderDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExpandableHeaderPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                ],
                declarations: [_expandable_header_page__WEBPACK_IMPORTED_MODULE_6__["ExpandableHeaderPage"], _directives_yannbf_expandable_header_expandable_header_directive__WEBPACK_IMPORTED_MODULE_0__["ExpandableHeaderDirective"]] //<-- import directive
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _directives_yannbf_expandable_header_expandable_header_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../directives/yannbf/expandable-header/expandable-header.directive */ "./src/app/directives/yannbf/expandable-header/expandable-header.directive.ts");




class ExpandableHeaderPage {
    constructor() {
    }
    ngOnInit() {
    }
}
ExpandableHeaderPage.ɵfac = function ExpandableHeaderPage_Factory(t) { return new (t || ExpandableHeaderPage)(); };
ExpandableHeaderPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExpandableHeaderPage, selectors: [["app-expandable-header"]], decls: 29, vars: 3, consts: [["color", "primary", 3, "appExpandableHeader"], ["name", "search"], ["type", "text"], ["name", "funnel"], ["slot", "start"], ["defaultHref", "/"], [1, "ion-padding", 3, "fullscreen", "scrollEvents"], ["scrollArea", ""]], template: function ExpandableHeaderPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ion-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ion-input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ion-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ion-input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-buttons", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "ion-back-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Expandable header ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-content", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Dummy Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta dolor urna, quis iaculis eros tincidunt sed. Nunc tempor porttitor lacus, non ultrices sapien interdum non. Curabitur tempor efficitur tellus, id convallis felis varius eu. Pellentesque quis velit metus. Nam quis dictum quam. Integer ut mauris augue. Nulla at convallis mauris. Sed vel faucibus odio. Proin eu ante in massa scelerisque auctor. Nulla at sapien id lectus ultricies dapibus at eu augue. Morbi ac volutpat nulla. Morbi elit ex, accumsan vitae tincidunt eget, posuere id sem. Sed cursus sem ante, non fringilla augue mattis ac. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Vestibulum finibus mi lacus, eget condimentum diam consequat eu. Donec fermentum accumsan libero, a fermentum ante faucibus vel. Etiam euismod mi nec efficitur tincidunt. Nulla facilisi. Vivamus nec malesuada turpis. Nulla ultricies non lacus vel scelerisque. Integer vulputate ex non rutrum scelerisque. Sed ac dapibus risus. Fusce blandit, mauris at semper venenatis, metus ipsum ultricies lacus, quis suscipit nunc nibh ut tellus. Cras varius quam vel libero scelerisque accumsan. Pellentesque at luctus tortor. In eleifend neque justo, porttitor auctor augue rhoncus ac. Mauris ut eros eu sapien aliquet lacinia. Donec fringilla velit diam, eu maximus felis lacinia vel.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Nullam eleifend ut eros sit amet aliquam. In mattis dolor non tortor vulputate, nec eleifend magna lobortis. Vivamus id ex ultrices, mollis enim a, fringilla risus. Quisque vel aliquet diam. Morbi vitae facilisis elit. Donec in pretium sapien. Phasellus rhoncus nisi ante, eget tempus nibh pretium non. Aliquam fringilla, odio sit amet varius commodo, lacus metus volutpat nisi, in faucibus est urna non orci. Suspendisse rhoncus lobortis tortor, sed placerat metus finibus sodales. Mauris at sapien placerat, efficitur leo at, auctor erat. In faucibus tellus sit amet leo vehicula, ac ultrices dui auctor. Duis maximus auctor metus a vulputate.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Nullam eleifend ut eros sit amet aliquam. In mattis dolor non tortor vulputate, nec eleifend magna lobortis. Vivamus id ex ultrices, mollis enim a, fringilla risus. Quisque vel aliquet diam. Morbi vitae facilisis elit. Donec in pretium sapien. Phasellus rhoncus nisi ante, eget tempus nibh pretium non. Aliquam fringilla, odio sit amet varius commodo, lacus metus volutpat nisi, in faucibus est urna non orci. Suspendisse rhoncus lobortis tortor, sed placerat metus finibus sodales. Mauris at sapien placerat, efficitur leo at, auctor erat. In faucibus tellus sit amet leo vehicula, ac ultrices dui auctor. Duis maximus auctor metus a vulputate.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r154 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appExpandableHeader", _r154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullscreen", true)("scrollEvents", true);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _directives_yannbf_expandable_header_expandable_header_directive__WEBPACK_IMPORTED_MODULE_2__["ExpandableHeaderDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["TextValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"]], styles: ["ion-item[_ngcontent-%COMP%] {\n  width: 92%;\n  margin: 4%;\n  padding-left: 10px !important;\n  margin-bottom: 10px;\n  --background: #fff;\n  opacity: 0.7;\n  font-size: 0.9em;\n  transition: 0.2s linear;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbWlzY2VsbGFuZW91cy9leHBhbmRhYmxlLWhlYWRlci9DOlxcVXNlcnNcXHNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZXRvc1xcX2lvbmljXFxpb25pYzQtY29tcG9uZW50cy9zcmNcXGFwcFxccGFnZXNcXHlhbm5iZlxcY29tcG9uZW50c1xcbWlzY2VsbGFuZW91c1xcZXhwYW5kYWJsZS1oZWFkZXJcXGV4cGFuZGFibGUtaGVhZGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbWlzY2VsbGFuZW91cy9leHBhbmRhYmxlLWhlYWRlci9leHBhbmRhYmxlLWhlYWRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy9taXNjZWxsYW5lb3VzL2V4cGFuZGFibGUtaGVhZGVyL2V4cGFuZGFibGUtaGVhZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcclxuICB3aWR0aDogOTIlO1xyXG4gIG1hcmdpbjogNCU7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAtLWJhY2tncm91bmQ6ICNmZmY7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgdHJhbnNpdGlvbjogMC4ycyBsaW5lYXI7XHJcbn1cclxuIiwiaW9uLWl0ZW0ge1xuICB3aWR0aDogOTIlO1xuICBtYXJnaW46IDQlO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICBvcGFjaXR5OiAwLjc7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIHRyYW5zaXRpb246IDAuMnMgbGluZWFyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExpandableHeaderPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-expandable-header',
                templateUrl: './expandable-header.page.html',
                styleUrls: ['./expandable-header.page.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-yannbf-components-miscellaneous-expandable-header-expandable-header-module-es2015.js.map