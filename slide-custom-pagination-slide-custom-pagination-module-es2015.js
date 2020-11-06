(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["slide-custom-pagination-slide-custom-pagination-module"],{

/***/ "./src/app/pages/yannbf/components/slides/slide-custom-pagination/slide-custom-pagination.module.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/slides/slide-custom-pagination/slide-custom-pagination.module.ts ***!
  \**********************************************************************************************************/
/*! exports provided: SlideCustomPaginationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideCustomPaginationPageModule", function() { return SlideCustomPaginationPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _slide_custom_pagination_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slide-custom-pagination.page */ "./src/app/pages/yannbf/components/slides/slide-custom-pagination/slide-custom-pagination.page.ts");








const routes = [
    {
        path: '',
        component: _slide_custom_pagination_page__WEBPACK_IMPORTED_MODULE_5__["SlideCustomPaginationPage"]
    }
];
class SlideCustomPaginationPageModule {
}
SlideCustomPaginationPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SlideCustomPaginationPageModule });
SlideCustomPaginationPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SlideCustomPaginationPageModule_Factory(t) { return new (t || SlideCustomPaginationPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SlideCustomPaginationPageModule, { declarations: [_slide_custom_pagination_page__WEBPACK_IMPORTED_MODULE_5__["SlideCustomPaginationPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlideCustomPaginationPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
                ],
                declarations: [_slide_custom_pagination_page__WEBPACK_IMPORTED_MODULE_5__["SlideCustomPaginationPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/yannbf/components/slides/slide-custom-pagination/slide-custom-pagination.page.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/slides/slide-custom-pagination/slide-custom-pagination.page.ts ***!
  \********************************************************************************************************/
/*! exports provided: SlideCustomPaginationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideCustomPaginationPage", function() { return SlideCustomPaginationPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = ["sliderOne"];
const _c1 = ["sliderTwo"];
const _c2 = ["sliderThree"];
const _c3 = function (a0) { return { "background": a0 }; };
function SlideCustomPaginationPage_ion_slide_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-slide", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, "url(" + slide_r6.imageUrl + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r6.title);
} }
function SlideCustomPaginationPage_ion_slide_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-slide", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, "url(" + slide_r7.imageUrl + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r7.title);
} }
function SlideCustomPaginationPage_ion_slide_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-slide", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, "url(" + slide_r8.imageUrl + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r8.title);
} }
class SlideCustomPaginationPage {
    constructor() {
        this.slides = [
            {
                title: 'Dream\'s Adventure',
                imageUrl: 'assets/yannbf/img/lists/wishlist-1.jpg',
                songs: 2,
                private: false
            },
            {
                title: 'For the Weekend',
                imageUrl: 'assets/yannbf/img/lists/wishlist-2.jpg',
                songs: 4,
                private: false
            },
            {
                title: 'Family Time',
                imageUrl: 'assets/yannbf/img/lists/wishlist-3.jpg',
                songs: 5,
                private: true
            },
            {
                title: 'My Trip',
                imageUrl: 'assets/yannbf/img/lists/wishlist-4.jpg',
                songs: 12,
                private: true
            }
        ];
    }
    ngOnInit() {
        // this.sliderOne.paginationBulletRender = (index, className) => {
        //   return `<span class="custom-pagination ${className}>${index + 1}</span>`;
        // };
        // this.sliderTwo.paginationBulletRender = (index, className) => {
        //   return `<span class="custom-pagination-2 ${className}>${index + 1}</span>`;
        // };
        // this.sliderThree.paginationBulletRender = (index, className) => {
        //   return `<span class="custom-pagination-3 bullet-icon-${index + 1} ${className}></span>`;
        // };
    }
}
SlideCustomPaginationPage.ɵfac = function SlideCustomPaginationPage_Factory(t) { return new (t || SlideCustomPaginationPage)(); };
SlideCustomPaginationPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SlideCustomPaginationPage, selectors: [["app-slide-custom-pagination"]], viewQuery: function SlideCustomPaginationPage_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sliderOne = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sliderTwo = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sliderThree = _t.first);
    } }, decls: 22, vars: 3, consts: [["slot", "start"], ["defaultHref", "/"], [1, "ion-text-center"], ["pager", ""], ["sliderOne", ""], [3, "ngStyle", 4, "ngFor", "ngForOf"], ["sliderTwo", ""], ["sliderThree", ""], [3, "ngStyle"]], template: function SlideCustomPaginationPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Custom Pagination");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Pagination numbers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-slides", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SlideCustomPaginationPage_ion_slide_11_Template, 3, 4, "ion-slide", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Pagination numbers 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-slides", 3, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SlideCustomPaginationPage_ion_slide_16_Template, 3, 4, "ion-slide", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Pagination icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ion-slides", 3, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SlideCustomPaginationPage_ion_slide_21_Template, 3, 4, "ion-slide", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSlides"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSlide"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: ["h2[_ngcontent-%COMP%] {\n  color: white;\n}\n\nion-slides[_ngcontent-%COMP%], .swiper-container[_ngcontent-%COMP%] {\n  height: 40vh;\n  width: auto;\n}\n\n.swiper-slide[_ngcontent-%COMP%] {\n  background-size: cover !important;\n  background-position: center !important;\n}\n\n.swiper-pagination-bullet[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.custom-pagination.swiper-pagination-bullet[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  text-align: center;\n  line-height: 20px;\n  font-size: 12px;\n  color: #000;\n  opacity: 1;\n  background: rgba(0, 0, 0, 0.2);\n}\n\n.custom-pagination.swiper-pagination-bullet-active[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #f52c2c;\n  transition: transform 0.3s;\n  transform: scale(1.5);\n}\n\n.custom-pagination-2.swiper-pagination-bullet[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  text-align: center;\n  font-size: 12px;\n  opacity: 1;\n  line-height: 18px;\n  color: #fff;\n  background: rgba(0, 0, 0, 0.2);\n  border: 1px solid white;\n}\n\n.custom-pagination-2.swiper-pagination-bullet-active[_ngcontent-%COMP%] {\n  color: #fff;\n  border-color: #a0f;\n  background: transparent;\n}\n\n.custom-pagination-3.swiper-pagination-bullet[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  opacity: 1;\n  border-radius: 0;\n  background-size: cover;\n  background-position: center;\n}\n\n.custom-pagination-3.swiper-pagination-bullet-active[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  transition: transform 0.3s;\n  transform: scale(1.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvc2xpZGVzL3NsaWRlLWN1c3RvbS1wYWdpbmF0aW9uL0M6XFxVc2Vyc1xcVmFnbmVyIFNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZWN0c1xcX015XFxhd2Vzb21lLWNvbXBvbmVudHMtaW9uaWMvc3JjXFxhcHBcXHBhZ2VzXFx5YW5uYmZcXGNvbXBvbmVudHNcXHNsaWRlc1xcc2xpZGUtY3VzdG9tLXBhZ2luYXRpb25cXHNsaWRlLWN1c3RvbS1wYWdpbmF0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvc2xpZGVzL3NsaWRlLWN1c3RvbS1wYWdpbmF0aW9uL3NsaWRlLWN1c3RvbS1wYWdpbmF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjs7QURDQTs7RUFFRSxZQUFBO0VBQ0EsV0FBQTtBQ0VGOztBREFBO0VBQ0UsaUNBQUE7RUFDQSxzQ0FBQTtBQ0dGOztBRERBO0VBQ0UsdUJBQUE7QUNJRjs7QUREQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO0FDSUY7O0FEQ0E7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0FDRUY7O0FEQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0FDRUY7O0FEQUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQ0dGOztBREFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FDR0Y7O0FEREE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7QUNJRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL3NsaWRlcy9zbGlkZS1jdXN0b20tcGFnaW5hdGlvbi9zbGlkZS1jdXN0b20tcGFnaW5hdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbmlvbi1zbGlkZXMsXHJcbi5zd2lwZXItY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDQwdmg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuLnN3aXBlci1zbGlkZSB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi8vIEN1c3RvbSBQYWdpbmF0aW9uIFN0eWxlIDFcclxuLmN1c3RvbS1wYWdpbmF0aW9uLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgb3BhY2l0eTogMTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcblxyXG4gIFxyXG59XHJcblxyXG4uY3VzdG9tLXBhZ2luYXRpb24uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogI2Y1MmMyYztcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XHJcbn1cclxuLy8gQ3VzdG9tIFBhZ2luYXRpb24gU3R5bGUgMlxyXG4uY3VzdG9tLXBhZ2luYXRpb24tMi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG59XHJcbi5jdXN0b20tcGFnaW5hdGlvbi0yLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1jb2xvcjogI2EwZjtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG4vLyBDdXN0b20gUGFnaW5hdGlvbiB3aXRoIEljb25zXHJcbi5jdXN0b20tcGFnaW5hdGlvbi0zLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG4uY3VzdG9tLXBhZ2luYXRpb24tMy5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcclxuICB3aWR0aDogMjVweDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG59XHJcbi8vIEljb25zIGRldmVsb3BlZCBieSBQYW9tZWRpYTogaHR0cHM6Ly93d3cuaWNvbmZpbmRlci5jb20vaWNvbnNldHMvc21hbGwtbi1mbGF0XHJcbi8vIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQuYnVsbGV0LWljb24tMSB7XHJcbi8vICAgYmFja2dyb3VuZDogdXJsKCcuL2Fzc2V0cy95YW5uYmYvaWNvbi9jYW1lcmEuc3ZnJykgbm8tcmVwZWF0O1xyXG4vLyB9XHJcbi8vIC5idWxsZXQtaWNvbi0yIHtcclxuLy8gICBiYWNrZ3JvdW5kOiB1cmwoJy4vYXNzZXRzL3lhbm5iZi9pY29uL21hcC5zdmcnKSBuby1yZXBlYXQ7XHJcbi8vIH1cclxuLy8gLmJ1bGxldC1pY29uLTMge1xyXG4vLyAgIGJhY2tncm91bmQ6IHVybCgnLi9hc3NldHMveWFubmJmL2ljb24vd29ybGQuc3ZnJykgbm8tcmVwZWF0O1xyXG4vLyB9XHJcbi8vIC5idWxsZXQtaWNvbi00IHtcclxuLy8gICBiYWNrZ3JvdW5kOiB1cmwoJy4vYXNzZXRzL3lhbm5iZi9pY29uL2hlYXJ0LnN2ZycpIG5vLXJlcGVhdDtcclxuLy8gfVxyXG5cclxuIiwiaDIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1zbGlkZXMsXG4uc3dpcGVyLWNvbnRhaW5lciB7XG4gIGhlaWdodDogNDB2aDtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5jdXN0b20tcGFnaW5hdGlvbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMDAwO1xuICBvcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5jdXN0b20tcGFnaW5hdGlvbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICNmNTJjMmM7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG59XG5cbi5jdXN0b20tcGFnaW5hdGlvbi0yLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBvcGFjaXR5OiAxO1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG59XG5cbi5jdXN0b20tcGFnaW5hdGlvbi0yLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjYTBmO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmN1c3RvbS1wYWdpbmF0aW9uLTMuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgb3BhY2l0eTogMTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4uY3VzdG9tLXBhZ2luYXRpb24tMy5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlideCustomPaginationPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-slide-custom-pagination',
                templateUrl: './slide-custom-pagination.page.html',
                styleUrls: ['./slide-custom-pagination.page.scss'],
            }]
    }], function () { return []; }, { sliderOne: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['sliderOne', { static: true }]
        }], sliderTwo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['sliderTwo', { static: true }]
        }], sliderThree: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['sliderThree', { static: true }]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=slide-custom-pagination-slide-custom-pagination-module-es2015.js.map