(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-slides-slide-with-arrows-slide-with-arrows-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/slides/slide-with-arrows/slide-with-arrows.page.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/slides/slide-with-arrows/slide-with-arrows.page.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Slide With Arrows</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-slides #slider [options]=\"slideOpts\" (ionSlideWillChange)=\"onSlideChanged()\">\r\n    <ion-slide *ngFor=\"let slide of slides\" class=\"swiper-no-swiping\"\r\n      [ngStyle]=\"{'background' : 'url(' + slide.imageUrl + ')'}\">\r\n      <h2>{{slide.title}}</h2>\r\n    </ion-slide>\r\n    <!-- Add Pagination -->\r\n    <div *ngIf=\"currentIndex > 0\" class=\"swiper-button-prev swiper-button-white\" (click)=\"previousSlide()\"></div>\r\n    <div *ngIf=\"currentIndex < slides.length-1\" class=\"swiper-button-next swiper-button-white\" (click)=\"nextSlide()\">\r\n    </div>\r\n  </ion-slides>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/yannbf/components/slides/slide-with-arrows/slide-with-arrows.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/slides/slide-with-arrows/slide-with-arrows.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: SlideWithArrowsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideWithArrowsPageModule", function() { return SlideWithArrowsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _slide_with_arrows_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slide-with-arrows.page */ "./src/app/pages/yannbf/components/slides/slide-with-arrows/slide-with-arrows.page.ts");







const routes = [
    {
        path: '',
        component: _slide_with_arrows_page__WEBPACK_IMPORTED_MODULE_6__["SlideWithArrowsPage"]
    }
];
let SlideWithArrowsPageModule = class SlideWithArrowsPageModule {
};
SlideWithArrowsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_slide_with_arrows_page__WEBPACK_IMPORTED_MODULE_6__["SlideWithArrowsPage"]]
    })
], SlideWithArrowsPageModule);



/***/ }),

/***/ "./src/app/pages/yannbf/components/slides/slide-with-arrows/slide-with-arrows.page.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/slides/slide-with-arrows/slide-with-arrows.page.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\n  color: white;\n}\n\nion-slides {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\nion-slides .slide-zoom {\n  text-align: center;\n  display: block;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvc2xpZGVzL3NsaWRlLXdpdGgtYXJyb3dzL0M6XFxVc2Vyc1xcc2FiYWRpXFxEb2N1bWVudHNcXFByb2pldG9zXFxfaW9uaWNcXGlvbmljNC1jb21wb25lbnRzL3NyY1xcYXBwXFxwYWdlc1xceWFubmJmXFxjb21wb25lbnRzXFxzbGlkZXNcXHNsaWRlLXdpdGgtYXJyb3dzXFxzbGlkZS13aXRoLWFycm93cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL3NsaWRlcy9zbGlkZS13aXRoLWFycm93cy9zbGlkZS13aXRoLWFycm93cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURDRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL3NsaWRlcy9zbGlkZS13aXRoLWFycm93cy9zbGlkZS13aXRoLWFycm93cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pb24tc2xpZGVzIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIC5zbGlkZS16b29tIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbiIsImgyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tc2xpZGVzIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5pb24tc2xpZGVzIC5zbGlkZS16b29tIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/yannbf/components/slides/slide-with-arrows/slide-with-arrows.page.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/slides/slide-with-arrows/slide-with-arrows.page.ts ***!
  \********************************************************************************************/
/*! exports provided: SlideWithArrowsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideWithArrowsPage", function() { return SlideWithArrowsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let SlideWithArrowsPage = class SlideWithArrowsPage {
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
        this.slideOpts = {
            loop: true,
            autoplay: {
                delay: 2000,
            },
            on: {
                beforeInit() {
                    const swiper = this;
                    swiper.classNames.push(`${swiper.params.containerModifierClass}fade`);
                    const overwriteParams = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: true,
                        spaceBetween: 0,
                        virtualTranslate: true,
                    };
                    swiper.params = Object.assign(swiper.params, overwriteParams);
                    swiper.params = Object.assign(swiper.originalParams, overwriteParams);
                },
                setTranslate() {
                    const swiper = this;
                    const { slides } = swiper;
                    for (let i = 0; i < slides.length; i += 1) {
                        const $slideEl = swiper.slides.eq(i);
                        const offset$$1 = $slideEl[0].swiperSlideOffset;
                        let tx = -offset$$1;
                        if (!swiper.params.virtualTranslate)
                            tx -= swiper.translate;
                        let ty = 0;
                        if (!swiper.isHorizontal()) {
                            ty = tx;
                            tx = 0;
                        }
                        const slideOpacity = swiper.params.fadeEffect.crossFade
                            ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
                            : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
                        $slideEl
                            .css({
                            opacity: slideOpacity,
                        })
                            .transform(`translate3d(${tx}px, ${ty}px, 0px)`);
                    }
                },
                setTransition(duration) {
                    const swiper = this;
                    const { slides, $wrapperEl } = swiper;
                    slides.transition(duration);
                    if (swiper.params.virtualTranslate && duration !== 0) {
                        let eventTriggered = false;
                        slides.transitionEnd(() => {
                            if (eventTriggered)
                                return;
                            if (!swiper || swiper.destroyed)
                                return;
                            eventTriggered = true;
                            swiper.animating = false;
                            const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
                            for (let i = 0; i < triggerEvents.length; i += 1) {
                                $wrapperEl.trigger(triggerEvents[i]);
                            }
                        });
                    }
                },
            }
        };
        this.currentIndex = 0;
    }
    ngOnInit() {
    }
    nextSlide() {
        this.slider.slideNext();
    }
    previousSlide() {
        this.slider.slidePrev();
    }
    onSlideChanged() {
        this.slider.getActiveIndex().then(index => this.currentIndex = index);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slider', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
], SlideWithArrowsPage.prototype, "slider", void 0);
SlideWithArrowsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-slide-with-arrows',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./slide-with-arrows.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/slides/slide-with-arrows/slide-with-arrows.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./slide-with-arrows.page.scss */ "./src/app/pages/yannbf/components/slides/slide-with-arrows/slide-with-arrows.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SlideWithArrowsPage);



/***/ })

}]);
//# sourceMappingURL=pages-yannbf-components-slides-slide-with-arrows-slide-with-arrows-module-es2015.js.map