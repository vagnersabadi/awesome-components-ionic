(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-slides-slide-nested-slide-nested-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/slides/slide-nested/slide-nested.page.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/slides/slide-nested/slide-nested.page.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Slide Nested</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-slides pager>\r\n    <ion-slide *ngFor=\"let slide of slides\">\r\n      <ion-slides #slider pager [options]=\"slideOpts\">\r\n        <ion-slide *ngFor=\"let slide of slides\" [ngStyle]=\"{'background' : 'url(' + slide.imageUrl + ')'}\">\r\n          <h2>{{slide.title}}</h2>\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </ion-slide>\r\n  </ion-slides>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/yannbf/components/slides/slide-nested/slide-nested.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/slides/slide-nested/slide-nested.module.ts ***!
  \************************************************************************************/
/*! exports provided: SlideNestedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideNestedPageModule", function() { return SlideNestedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _slide_nested_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slide-nested.page */ "./src/app/pages/yannbf/components/slides/slide-nested/slide-nested.page.ts");







const routes = [
    {
        path: '',
        component: _slide_nested_page__WEBPACK_IMPORTED_MODULE_6__["SlideNestedPage"]
    }
];
let SlideNestedPageModule = class SlideNestedPageModule {
};
SlideNestedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_slide_nested_page__WEBPACK_IMPORTED_MODULE_6__["SlideNestedPage"]]
    })
], SlideNestedPageModule);



/***/ }),

/***/ "./src/app/pages/yannbf/components/slides/slide-nested/slide-nested.page.scss":
/*!************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/slides/slide-nested/slide-nested.page.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\n  color: white;\n}\n\nion-slides,\n.swiper-container {\n  height: 100%;\n  width: 100%;\n}\n\n.swiper-slide {\n  background-size: cover !important;\n  background-position: center !important;\n}\n\n.swiper-pagination-bullet {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvc2xpZGVzL3NsaWRlLW5lc3RlZC9DOlxcVXNlcnNcXHNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZXRvc1xcX2lvbmljXFxpb25pYzQtY29tcG9uZW50cy9zcmNcXGFwcFxccGFnZXNcXHlhbm5iZlxcY29tcG9uZW50c1xcc2xpZGVzXFxzbGlkZS1uZXN0ZWRcXHNsaWRlLW5lc3RlZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL3NsaWRlcy9zbGlkZS1uZXN0ZWQvc2xpZGUtbmVzdGVkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjs7QURDQTs7RUFFRSxZQUFBO0VBQ0EsV0FBQTtBQ0VGOztBREFBO0VBQ0UsaUNBQUE7RUFDQSxzQ0FBQTtBQ0dGOztBRERBO0VBQ0UsdUJBQUE7QUNJRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL3NsaWRlcy9zbGlkZS1uZXN0ZWQvc2xpZGUtbmVzdGVkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuaW9uLXNsaWRlcyxcclxuLnN3aXBlci1jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uc3dpcGVyLXNsaWRlIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuIiwiaDIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1zbGlkZXMsXG4uc3dpcGVyLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/yannbf/components/slides/slide-nested/slide-nested.page.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/slides/slide-nested/slide-nested.page.ts ***!
  \**********************************************************************************/
/*! exports provided: SlideNestedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideNestedPage", function() { return SlideNestedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SlideNestedPage = class SlideNestedPage {
    constructor() {
        this.slides = [{
                title: 'Dream\'s Adventure',
                imageUrl: 'assets/yannbf/img/lists/wishlist-1.jpg',
            },
            {
                title: 'For the Weekend',
                imageUrl: 'assets/yannbf/img/lists/wishlist-2.jpg',
            },
            {
                title: 'Family Time',
                imageUrl: 'assets/yannbf/img/lists/wishlist-3.jpg',
            },
            {
                title: 'My Trip',
                imageUrl: 'assets/yannbf/img/lists/wishlist-4.jpg',
            }
        ];
        this.slideOpts = {
            direction: 'vertical',
            slidesPerView: 1,
        };
    }
    ngOnInit() {
    }
};
SlideNestedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-slide-nested',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./slide-nested.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/slides/slide-nested/slide-nested.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./slide-nested.page.scss */ "./src/app/pages/yannbf/components/slides/slide-nested/slide-nested.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SlideNestedPage);



/***/ })

}]);
//# sourceMappingURL=pages-yannbf-components-slides-slide-nested-slide-nested-module-es2015.js.map