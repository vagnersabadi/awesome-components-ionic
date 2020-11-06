(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["slide-walkthrough-slide-walkthrough-module"],{

/***/ "./src/app/pages/yannbf/components/slides/slide-walkthrough/slide-walkthrough.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/slides/slide-walkthrough/slide-walkthrough.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: SlideWalkthroughPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideWalkthroughPageModule", function() { return SlideWalkthroughPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _slide_walkthrough_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slide-walkthrough.page */ "./src/app/pages/yannbf/components/slides/slide-walkthrough/slide-walkthrough.page.ts");








const routes = [
    {
        path: '',
        component: _slide_walkthrough_page__WEBPACK_IMPORTED_MODULE_5__["SlideWalkthroughPage"]
    }
];
class SlideWalkthroughPageModule {
}
SlideWalkthroughPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SlideWalkthroughPageModule });
SlideWalkthroughPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SlideWalkthroughPageModule_Factory(t) { return new (t || SlideWalkthroughPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SlideWalkthroughPageModule, { declarations: [_slide_walkthrough_page__WEBPACK_IMPORTED_MODULE_5__["SlideWalkthroughPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlideWalkthroughPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
                ],
                declarations: [_slide_walkthrough_page__WEBPACK_IMPORTED_MODULE_5__["SlideWalkthroughPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/yannbf/components/slides/slide-walkthrough/slide-walkthrough.page.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/slides/slide-walkthrough/slide-walkthrough.page.ts ***!
  \********************************************************************************************/
/*! exports provided: SlideWalkthroughPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideWalkthroughPage", function() { return SlideWalkthroughPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = ["slider"];
const _c1 = function (a0) { return { "background-image": a0 }; };
function SlideWalkthroughPage_ion_slide_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-slide", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, "url(" + slide_r3.imageUrl + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", slide_r3.title, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", slide_r3.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function SlideWalkthroughPage_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SlideWalkthroughPage_div_10_Template_ion_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.goToApp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Let's go!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SlideWalkthroughPage {
    constructor() {
        this.slideIndex = 0;
        this.slides = [
            {
                title: 'Dream\'s Adventure',
                imageUrl: 'assets/yannbf/img/lists/wishlist-1.jpg',
                description: 'Take a look at our amazing options',
            },
            {
                title: 'For the Weekend',
                imageUrl: 'assets/yannbf/img/lists/wishlist-2.jpg',
                description: 'Take a look at our amazing options',
            },
            {
                title: 'Family Time',
                imageUrl: 'assets/yannbf/img/lists/wishlist-3.jpg',
                description: 'Take a look at our amazing options',
            },
            {
                title: 'My Trip',
                imageUrl: 'assets/yannbf/img/lists/wishlist-4.jpg',
                description: 'Take a look at our amazing options',
            }
        ];
        this.slideOpts1 = {
            autoplay: {
                delay: 3000,
            },
        };
    }
    ngOnInit() {
    }
    onSlideChanged() {
        this.slider.getActiveIndex().then((index) => {
            console.log('Slide changed! Current index is', index);
            this.slideIndex = index;
        });
    }
    goToApp() {
        console.log('Go to App clicked');
    }
    skip() {
        console.log('Skip clicked');
    }
}
SlideWalkthroughPage.ɵfac = function SlideWalkthroughPage_Factory(t) { return new (t || SlideWalkthroughPage)(); };
SlideWalkthroughPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SlideWalkthroughPage, selectors: [["app-slide-walkthrough"]], viewQuery: function SlideWalkthroughPage_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.slider = _t.first);
    } }, decls: 11, vars: 3, consts: [["slot", "start"], ["defaultHref", "/"], ["fullscreen", "true", 1, "no-padding-top"], ["pager", "true", 3, "options", "ionSlideWillChange"], ["slider", ""], ["class", "slide-background", 3, "ngStyle", 4, "ngFor", "ngForOf"], ["class", "floating-buttons pop-in", 4, "ngIf"], [1, "slide-background", 3, "ngStyle"], [1, "text-wrapper"], [1, "slide-text"], [1, "slide-title", 3, "innerHTML"], [3, "innerHTML"], [1, "floating-buttons", "pop-in"], ["fill", "clear", "size", "large", "expand", "full", 3, "click"]], template: function SlideWalkthroughPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Slide Walkthrough");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-slides", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionSlideWillChange", function SlideWalkthroughPage_Template_ion_slides_ionSlideWillChange_7_listener() { return ctx.onSlideChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SlideWalkthroughPage_ion_slide_9_Template, 6, 5, "ion-slide", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SlideWalkthroughPage_div_10_Template, 3, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.slideOpts1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.slideIndex >= ctx.slides.length - 1);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSlides"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSlide"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"]], styles: ["ion-item[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n\n.swiper-pagination-bullet[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.no-padding-top[_ngcontent-%COMP%]   .scroll-content[_ngcontent-%COMP%] {\n  padding-top: 0 !important;\n}\n\n.skip-button[_ngcontent-%COMP%] {\n  text-transform: none;\n  padding: 15px 15px;\n  font-weight: bold;\n}\n\n.floating-buttons[_ngcontent-%COMP%] {\n  z-index: 1;\n  width: 100%;\n  bottom: 0;\n  position: absolute;\n  margin-bottom: 50px;\n  transition: all 0.4s linear;\n}\n\n.floating-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --color: white;\n  min-height: 7vh;\n  text-transform: none;\n  font-size: 1.4em;\n  font-weight: bold;\n  --background: rgba(49, 161, 216, 0.67);\n}\n\n.slide-background[_ngcontent-%COMP%] {\n  background-size: cover !important;\n  background-position: center;\n  background-repeat: no-repeat;\n  border-color: transparent;\n}\n\n.toolbar-background[_ngcontent-%COMP%] {\n  border-color: transparent;\n}\n\n.slide-zoom[_ngcontent-%COMP%] {\n  background: linear-gradient(transparent, rgba(0, 0, 0, 0.4)) !important;\n  height: 100%;\n}\n\n.text-wrapper[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n}\n\n.slide-text[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.slide-title[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n}\n\n.slide-image[_ngcontent-%COMP%] {\n  max-height: 100%;\n  max-width: 100%;\n  margin: 18px 0;\n}\n\nb[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\np[_ngcontent-%COMP%] {\n  padding: 0 40px;\n  font-size: 1em;\n  line-height: 1.5;\n  color: #fff;\n}\n\np[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #000000;\n}\n\n.pop-in[_ngcontent-%COMP%] {\n  -webkit-animation: pop-in 0.65s;\n  animation: pop-in 0.65s !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvc2xpZGVzL3NsaWRlLXdhbGt0aHJvdWdoL0M6XFxVc2Vyc1xcVmFnbmVyIFNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZWN0c1xcX015XFxhd2Vzb21lLWNvbXBvbmVudHMtaW9uaWMvc3JjXFxhcHBcXHBhZ2VzXFx5YW5uYmZcXGNvbXBvbmVudHNcXHNsaWRlc1xcc2xpZGUtd2Fsa3Rocm91Z2hcXHNsaWRlLXdhbGt0aHJvdWdoLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvc2xpZGVzL3NsaWRlLXdhbGt0aHJvdWdoL3NsaWRlLXdhbGt0aHJvdWdoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxzQkFBQTtBQ0VGOztBREFBO0VBQ0UseUJBQUE7QUNHRjs7QUREQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0lGOztBREZBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FDS0Y7O0FERkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNDQUFBO0FDS0Y7O0FESEE7RUFDRSxpQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtBQ01GOztBREpBO0VBQ0UseUJBQUE7QUNPRjs7QURMQTtFQUNFLHVFQUFBO0VBQ0EsWUFBQTtBQ1FGOztBRE5BO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNTRjs7QURQQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUNVRjs7QURSQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQ1dGOztBRFRBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ1lGOztBRFBBO0VBQ0UsZ0JBQUE7QUNVRjs7QURSQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDV0Y7O0FEVkU7RUFDRSxjQUFBO0FDWUo7O0FEUkE7RUFDRSwrQkFBQTtFQUNBLGtDQUFBO0FDV0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy9zbGlkZXMvc2xpZGUtd2Fsa3Rocm91Z2gvc2xpZGUtd2Fsa3Rocm91Z2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG4ubm8tcGFkZGluZy10b3AgLnNjcm9sbC1jb250ZW50IHtcclxuICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5za2lwLWJ1dHRvbiB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgcGFkZGluZzogMTVweCAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5mbG9hdGluZy1idXR0b25zIHtcclxuICB6LWluZGV4OiAxO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvdHRvbTogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBsaW5lYXI7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogJGJhc2UtY29sb3ItdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmZsb2F0aW5nLWJ1dHRvbnMgaW9uLWJ1dHRvbiB7XHJcbiAgLS1jb2xvcjogd2hpdGU7XHJcbiAgbWluLWhlaWdodDogN3ZoO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDQ5LCAxNjEsIDIxNiwgMC42Nyk7XHJcbn1cclxuLnNsaWRlLWJhY2tncm91bmQge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi50b29sYmFyLWJhY2tncm91bmQge1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLnNsaWRlLXpvb20ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCwgcmdiYSgwLCAwLCAwLCAwLjQpKSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4udGV4dC13cmFwcGVyIHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG4uc2xpZGUtdGV4dCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuLnNsaWRlLXRpdGxlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnNsaWRlLWltYWdlIHtcclxuICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDE4cHggMDtcclxufVxyXG4ubGFzdC1zbGlkZSB7XHJcbiAgLy8gICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJpbWcvd2VsY29tZS00LmpwZ1wiKTtcclxufVxyXG5iIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbnAge1xyXG4gIHBhZGRpbmc6IDAgNDBweDtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGIge1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgfVxyXG59XHJcblxyXG4ucG9wLWluIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogcG9wLWluIDAuNjVzO1xyXG4gIGFuaW1hdGlvbjogcG9wLWluIDAuNjVzICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLm5vLXBhZGRpbmctdG9wIC5zY3JvbGwtY29udGVudCB7XG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5za2lwLWJ1dHRvbiB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBwYWRkaW5nOiAxNXB4IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZmxvYXRpbmctYnV0dG9ucyB7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgbGluZWFyO1xufVxuXG4uZmxvYXRpbmctYnV0dG9ucyBpb24tYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIG1pbi1oZWlnaHQ6IDd2aDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAtLWJhY2tncm91bmQ6IHJnYmEoNDksIDE2MSwgMjE2LCAwLjY3KTtcbn1cblxuLnNsaWRlLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnRvb2xiYXItYmFja2dyb3VuZCB7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5zbGlkZS16b29tIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LCByZ2JhKDAsIDAsIDAsIDAuNCkpICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRleHQtd3JhcHBlciB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLnNsaWRlLXRleHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLnNsaWRlLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNsaWRlLWltYWdlIHtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDE4cHggMDtcbn1cblxuYiB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbnAge1xuICBwYWRkaW5nOiAwIDQwcHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogI2ZmZjtcbn1cbnAgYiB7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4ucG9wLWluIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IHBvcC1pbiAwLjY1cztcbiAgYW5pbWF0aW9uOiBwb3AtaW4gMC42NXMgIWltcG9ydGFudDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlideWalkthroughPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-slide-walkthrough',
                templateUrl: './slide-walkthrough.page.html',
                styleUrls: ['./slide-walkthrough.page.scss'],
            }]
    }], function () { return []; }, { slider: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['slider', { static: true }]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=slide-walkthrough-slide-walkthrough-module-es2015.js.map