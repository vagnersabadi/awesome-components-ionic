(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-slides-slide-list-slide-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/slides/slide-list/slide-list.page.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/slides/slide-list/slide-list.page.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Slide List</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-list class=\"ion-no-margin\" *ngFor=\"let item of items\">\r\n    <ion-slides [pager]=\"true\" [options]=\"slideOptsProgressbar\">\r\n      <ion-slide *ngFor=\"let slide of item.slides\" class=\"text-center slider-item\"\r\n        [ngStyle]=\"{'background-image': 'url(' + slide.imageUrl +')'}\">\r\n        <div class=\"slide-text\">\r\n          <h2>{{slide.title}}</h2>\r\n          <p>{{slide.songs}} songs</p>\r\n        </div>\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </ion-list>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/yannbf/components/slides/slide-list/slide-list.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/slides/slide-list/slide-list.module.ts ***!
  \********************************************************************************/
/*! exports provided: SlideListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideListPageModule", function() { return SlideListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _slide_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slide-list.page */ "./src/app/pages/yannbf/components/slides/slide-list/slide-list.page.ts");







const routes = [
    {
        path: '',
        component: _slide_list_page__WEBPACK_IMPORTED_MODULE_6__["SlideListPage"]
    }
];
let SlideListPageModule = class SlideListPageModule {
};
SlideListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_slide_list_page__WEBPACK_IMPORTED_MODULE_6__["SlideListPage"]]
    })
], SlideListPageModule);



/***/ }),

/***/ "./src/app/pages/yannbf/components/slides/slide-list/slide-list.page.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/slides/slide-list/slide-list.page.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slides {\n  --bullet-background: white;\n  --bullet-background-active: #fa3;\n}\n\n.slider-item {\n  height: 35vh;\n  width: 100%;\n  background-size: cover;\n}\n\n.slide-zoom {\n  height: 100%;\n  background: linear-gradient(transparent, rgba(0, 0, 0, 0.22)) !important;\n}\n\n.slide-text {\n  position: relative;\n  text-align: center;\n  transform: translateY(-50%);\n}\n\n.text-center {\n  text-align: center;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvc2xpZGVzL3NsaWRlLWxpc3QvQzpcXFVzZXJzXFxzYWJhZGlcXERvY3VtZW50c1xcUHJvamV0b3NcXF9pb25pY1xcaW9uaWM0LWNvbXBvbmVudHMvc3JjXFxhcHBcXHBhZ2VzXFx5YW5uYmZcXGNvbXBvbmVudHNcXHNsaWRlc1xcc2xpZGUtbGlzdFxcc2xpZGUtbGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL3NsaWRlcy9zbGlkZS1saXN0L3NsaWRlLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7RUFDQSxnQ0FBQTtBQ0NKOztBREVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtFQUNBLHdFQUFBO0FDRUY7O0FEQUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBRUEsMkJBQUE7QUNFRjs7QURBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvc2xpZGVzL3NsaWRlLWxpc3Qvc2xpZGUtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2xpZGVzIHtcclxuICAgIC0tYnVsbGV0LWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6ICNmYTM7XHJcbn1cclxuXHJcbi5zbGlkZXItaXRlbSB7XHJcbiAgaGVpZ2h0OiAzNXZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLnNsaWRlLXpvb20ge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQsIHJnYmEoMCwgMCwgMCwgMC4yMikpICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNsaWRlLXRleHQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLy8gICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuLnRleHQtY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiIsImlvbi1zbGlkZXMge1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6ICNmYTM7XG59XG5cbi5zbGlkZXItaXRlbSB7XG4gIGhlaWdodDogMzV2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5zbGlkZS16b29tIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQsIHJnYmEoMCwgMCwgMCwgMC4yMikpICFpbXBvcnRhbnQ7XG59XG5cbi5zbGlkZS10ZXh0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59Il19 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SlideListPage = class SlideListPage {
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
};
SlideListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-slide-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./slide-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/slides/slide-list/slide-list.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./slide-list.page.scss */ "./src/app/pages/yannbf/components/slides/slide-list/slide-list.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SlideListPage);



/***/ })

}]);
//# sourceMappingURL=pages-yannbf-components-slides-slide-list-slide-list-module-es2015.js.map