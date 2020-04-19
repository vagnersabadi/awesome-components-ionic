(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-slides-slide-list-slide-list-module"],{

/***/ "./src/app/pages/yannbf/components/slides/slide-list/slide-list.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/slides/slide-list/slide-list.module.ts ***!
  \********************************************************************************/
/*! exports provided: SlideListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideListPageModule", function() { return SlideListPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _slide_list_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slide-list.page */ "./src/app/pages/yannbf/components/slides/slide-list/slide-list.page.ts");








const routes = [
    {
        path: '',
        component: _slide_list_page__WEBPACK_IMPORTED_MODULE_5__["SlideListPage"]
    }
];
class SlideListPageModule {
}
SlideListPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SlideListPageModule });
SlideListPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SlideListPageModule_Factory(t) { return new (t || SlideListPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SlideListPageModule, { declarations: [_slide_list_page__WEBPACK_IMPORTED_MODULE_5__["SlideListPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlideListPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
                ],
                declarations: [_slide_list_page__WEBPACK_IMPORTED_MODULE_5__["SlideListPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/yannbf/components/slides/slide-list/slide-list.page.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/slides/slide-list/slide-list.page.ts ***!
  \******************************************************************************/
/*! exports provided: SlideListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideListPage", function() { return SlideListPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function (a0) { return { "background-image": a0 }; };
function SlideListPage_ion_list_7_ion_slide_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-slide", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r210 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, "url(" + slide_r210.imageUrl + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r210.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", slide_r210.songs, " songs");
} }
function SlideListPage_ion_list_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-list", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-slides", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SlideListPage_ion_list_7_ion_slide_2_Template, 6, 5, "ion-slide", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r208 = ctx.$implicit;
    const ctx_r207 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pager", true)("options", ctx_r207.slideOptsProgressbar);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r208.slides);
} }
class SlideListPage {
    constructor() {
        this.items = [
            {
                name: 'one',
                slides: [{
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
                    }]
            },
            {
                name: 'one',
                slides: [
                    {
                        title: 'My Trip',
                        imageUrl: 'assets/yannbf/img/lists/wishlist-4.jpg',
                        songs: 12,
                        private: true
                    },
                    {
                        title: 'Dream\'s Adventure',
                        imageUrl: 'assets/yannbf/img/lists/wishlist-1.jpg',
                        songs: 2,
                        private: false
                    },
                    {
                        title: 'Family Time',
                        imageUrl: 'assets/yannbf/img/lists/wishlist-3.jpg',
                        songs: 5,
                        private: true
                    },
                ]
            },
            {
                name: 'one',
                slides: [
                    {
                        title: 'For the Weekend',
                        imageUrl: 'assets/yannbf/img/lists/wishlist-2.jpg',
                        songs: 4,
                        private: false
                    },
                    {
                        title: 'Dream\'s Adventure',
                        imageUrl: 'assets/yannbf/img/lists/wishlist-1.jpg',
                        songs: 2,
                        private: false
                    },
                    {
                        title: 'Dream\'s Adventure',
                        imageUrl: 'assets/yannbf/img/lists/wishlist-1.jpg',
                        songs: 2,
                        private: false
                    },
                    {
                        title: 'Family Time',
                        imageUrl: 'assets/yannbf/img/lists/wishlist-3.jpg',
                        songs: 5,
                        private: true
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
                    }
                ]
            }
        ];
        this.slideOptsProgressbar = {
            pagination: {
                el: '.swiper-pagination',
                type: 'custom',
                renderCustom: (swiper, current, total) => {
                    return this.customProgressBar(current, total);
                }
            }
        };
    }
    ngOnInit() {
    }
    customProgressBar(current, total) {
        const ratio = current / total;
        const progressBarStyle = 'style=\'transform: translate3d(0px, 0px, 0px) scaleX(' + ratio + ') scaleY(1); transition-duration: 300ms;\'';
        const progressBar = '<span class=\'swiper-pagination-progressbar-fill\' ' + progressBarStyle + '></span>';
        let progressBarContainer = '<div class=\'swiper-pagination-progressbar\' style=\'height: 4px; top: 6px; width: 100%;\'>';
        progressBarContainer += progressBar;
        progressBarContainer += '</span></div>';
        return progressBarContainer;
    }
}
SlideListPage.ɵfac = function SlideListPage_Factory(t) { return new (t || SlideListPage)(); };
SlideListPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SlideListPage, selectors: [["app-slide-list"]], decls: 8, vars: 1, consts: [["slot", "start"], ["defaultHref", "/"], ["class", "ion-no-margin", 4, "ngFor", "ngForOf"], [1, "ion-no-margin"], [3, "pager", "options"], ["class", "text-center slider-item", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "text-center", "slider-item", 3, "ngStyle"], [1, "slide-text"]], template: function SlideListPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Slide List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SlideListPage_ion_list_7_Template, 3, 3, "ion-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSlides"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSlide"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: ["ion-slides[_ngcontent-%COMP%] {\n  --bullet-background: white;\n  --bullet-background-active: #fa3;\n}\n\n.slider-item[_ngcontent-%COMP%] {\n  height: 35vh;\n  width: 100%;\n  background-size: cover;\n}\n\n.slide-zoom[_ngcontent-%COMP%] {\n  height: 100%;\n  background: linear-gradient(transparent, rgba(0, 0, 0, 0.22)) !important;\n}\n\n.slide-text[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  transform: translateY(-50%);\n}\n\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvc2xpZGVzL3NsaWRlLWxpc3QvQzpcXFVzZXJzXFxzYWJhZGlcXERvY3VtZW50c1xcUHJvamV0b3NcXF9pb25pY1xcaW9uaWM0LWNvbXBvbmVudHMvc3JjXFxhcHBcXHBhZ2VzXFx5YW5uYmZcXGNvbXBvbmVudHNcXHNsaWRlc1xcc2xpZGUtbGlzdFxcc2xpZGUtbGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL3NsaWRlcy9zbGlkZS1saXN0L3NsaWRlLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7RUFDQSxnQ0FBQTtBQ0NKOztBREVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtFQUNBLHdFQUFBO0FDRUY7O0FEQUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBRUEsMkJBQUE7QUNFRjs7QURBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvc2xpZGVzL3NsaWRlLWxpc3Qvc2xpZGUtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2xpZGVzIHtcclxuICAgIC0tYnVsbGV0LWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6ICNmYTM7XHJcbn1cclxuXHJcbi5zbGlkZXItaXRlbSB7XHJcbiAgaGVpZ2h0OiAzNXZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLnNsaWRlLXpvb20ge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQsIHJnYmEoMCwgMCwgMCwgMC4yMikpICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNsaWRlLXRleHQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLy8gICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuLnRleHQtY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiIsImlvbi1zbGlkZXMge1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6ICNmYTM7XG59XG5cbi5zbGlkZXItaXRlbSB7XG4gIGhlaWdodDogMzV2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5zbGlkZS16b29tIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQsIHJnYmEoMCwgMCwgMCwgMC4yMikpICFpbXBvcnRhbnQ7XG59XG5cbi5zbGlkZS10ZXh0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlideListPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-slide-list',
                templateUrl: './slide-list.page.html',
                styleUrls: ['./slide-list.page.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-yannbf-components-slides-slide-list-slide-list-module-es2015.js.map