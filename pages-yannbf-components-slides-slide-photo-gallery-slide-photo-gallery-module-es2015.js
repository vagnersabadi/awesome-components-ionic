(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-slides-slide-photo-gallery-slide-photo-gallery-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/slides/slide-photo-gallery/slide-photo-gallery.page.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/slides/slide-photo-gallery/slide-photo-gallery.page.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Photo Gallery</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <!-- Swiper -->\r\n  <div id=\"gallery-top\" class=\"swiper-container gallery-top\">\r\n    <div class=\"swiper-wrapper\">\r\n      <div class=\"swiper-slide\" style=\"background-image:url(http://lorempixel.com/1200/1200/nature/1)\"></div>\r\n      <div class=\"swiper-slide\" style=\"background-image:url(http://lorempixel.com/1200/1200/nature/2)\"></div>\r\n      <div class=\"swiper-slide\" style=\"background-image:url(http://lorempixel.com/1200/1200/nature/3)\"></div>\r\n      <div class=\"swiper-slide\" style=\"background-image:url(http://lorempixel.com/1200/1200/nature/4)\"></div>\r\n      <div class=\"swiper-slide\" style=\"background-image:url(http://lorempixel.com/1200/1200/nature/5)\"></div>\r\n      <div class=\"swiper-slide\" style=\"background-image:url(http://lorempixel.com/1200/1200/nature/6)\"></div>\r\n      <div class=\"swiper-slide\" style=\"background-image:url(http://lorempixel.com/1200/1200/nature/7)\"></div>\r\n      <div class=\"swiper-slide\" style=\"background-image:url(http://lorempixel.com/1200/1200/nature/8)\"></div>\r\n      <div class=\"swiper-slide\" style=\"background-image:url(http://lorempixel.com/1200/1200/nature/9)\"></div>\r\n      <div class=\"swiper-slide\" style=\"background-image:url(http://lorempixel.com/1200/1200/nature/10)\"></div>\r\n    </div>\r\n    <!-- Add Arrows -->\r\n    <div class=\"swiper-button-next swiper-button-white\"></div>\r\n    <div class=\"swiper-button-prev swiper-button-white\"></div>\r\n  </div>\r\n  <div id=\"gallery-thumbs\" class=\"swiper-container gallery-thumbs\">\r\n    <div class=\"swiper-wrapper\">\r\n      <div class=\"swiper-slide\" style=\"background-image:url(http://lorempixel.com/1200/1200/nature/1)\"></div>\r\n      <div class=\"swiper-slide\" style=\"background-image:url(http://lorempixel.com/1200/1200/nature/2)\"></div>\r\n      <div class=\"swiper-slide\" style=\"background-image:url(http://lorempixel.com/1200/1200/nature/3)\"></div>\r\n      <div class=\"swiper-slide\" style=\"background-image:url(http://lorempixel.com/1200/1200/nature/4)\"></div>\r\n      <div class=\"swiper-slide\" style=\"background-image:url(http://lorempixel.com/1200/1200/nature/5)\"></div>\r\n      <div class=\"swiper-slide\" style=\"background-image:url(http://lorempixel.com/1200/1200/nature/6)\"></div>\r\n      <div class=\"swiper-slide\" style=\"background-image:url(http://lorempixel.com/1200/1200/nature/7)\"></div>\r\n      <div class=\"swiper-slide\" style=\"background-image:url(http://lorempixel.com/1200/1200/nature/8)\"></div>\r\n      <div class=\"swiper-slide\" style=\"background-image:url(http://lorempixel.com/1200/1200/nature/9)\"></div>\r\n      <div class=\"swiper-slide\" style=\"background-image:url(http://lorempixel.com/1200/1200/nature/10)\"></div>\r\n    </div>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/yannbf/components/slides/slide-photo-gallery/slide-photo-gallery.module.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/slides/slide-photo-gallery/slide-photo-gallery.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: SlidePhotoGalleryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidePhotoGalleryPageModule", function() { return SlidePhotoGalleryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _slide_photo_gallery_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slide-photo-gallery.page */ "./src/app/pages/yannbf/components/slides/slide-photo-gallery/slide-photo-gallery.page.ts");







const routes = [
    {
        path: '',
        component: _slide_photo_gallery_page__WEBPACK_IMPORTED_MODULE_6__["SlidePhotoGalleryPage"]
    }
];
let SlidePhotoGalleryPageModule = class SlidePhotoGalleryPageModule {
};
SlidePhotoGalleryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_slide_photo_gallery_page__WEBPACK_IMPORTED_MODULE_6__["SlidePhotoGalleryPage"]]
    })
], SlidePhotoGalleryPageModule);



/***/ }),

/***/ "./src/app/pages/yannbf/components/slides/slide-photo-gallery/slide-photo-gallery.page.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/slides/slide-photo-gallery/slide-photo-gallery.page.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".swiper-container {\n  width: 100%;\n  height: 300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.swiper-slide {\n  background-size: cover;\n  background-position: center;\n}\n\n.gallery-top {\n  height: 80%;\n  width: 100%;\n}\n\n.gallery-thumbs {\n  height: 20%;\n  box-sizing: border-box;\n  padding: 10px 0;\n}\n\n.gallery-thumbs .swiper-slide {\n  width: 25%;\n  height: 100%;\n  opacity: 0.4;\n}\n\n.gallery-thumbs .swiper-slide-active {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvc2xpZGVzL3NsaWRlLXBob3RvLWdhbGxlcnkvQzpcXFVzZXJzXFxzYWJhZGlcXERvY3VtZW50c1xcUHJvamV0b3NcXF9pb25pY1xcaW9uaWM0LWNvbXBvbmVudHMvc3JjXFxhcHBcXHBhZ2VzXFx5YW5uYmZcXGNvbXBvbmVudHNcXHNsaWRlc1xcc2xpZGUtcGhvdG8tZ2FsbGVyeVxcc2xpZGUtcGhvdG8tZ2FsbGVyeS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL3NsaWRlcy9zbGlkZS1waG90by1nYWxsZXJ5L3NsaWRlLXBob3RvLWdhbGxlcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxzQkFBQTtFQUNBLDJCQUFBO0FDRUo7O0FEQUU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQ0dKOztBRERFO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQ0lKOztBREZFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDS0o7O0FESEU7RUFDRSxVQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy9zbGlkZXMvc2xpZGUtcGhvdG8tZ2FsbGVyeS9zbGlkZS1waG90by1nYWxsZXJ5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zd2lwZXItY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICAuc3dpcGVyLXNsaWRlIHtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5nYWxsZXJ5LXRvcCB7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuZ2FsbGVyeS10aHVtYnMge1xyXG4gICAgaGVpZ2h0OiAyMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gIH1cclxuICAuZ2FsbGVyeS10aHVtYnMgLnN3aXBlci1zbGlkZSB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3BhY2l0eTogMC40O1xyXG4gIH1cclxuICAuZ2FsbGVyeS10aHVtYnMgLnN3aXBlci1zbGlkZS1hY3RpdmUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9IiwiLnN3aXBlci1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnN3aXBlci1zbGlkZSB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmdhbGxlcnktdG9wIHtcbiAgaGVpZ2h0OiA4MCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZ2FsbGVyeS10aHVtYnMge1xuICBoZWlnaHQ6IDIwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuXG4uZ2FsbGVyeS10aHVtYnMgLnN3aXBlci1zbGlkZSB7XG4gIHdpZHRoOiAyNSU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3BhY2l0eTogMC40O1xufVxuXG4uZ2FsbGVyeS10aHVtYnMgLnN3aXBlci1zbGlkZS1hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/yannbf/components/slides/slide-photo-gallery/slide-photo-gallery.page.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/slides/slide-photo-gallery/slide-photo-gallery.page.ts ***!
  \************************************************************************************************/
/*! exports provided: SlidePhotoGalleryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidePhotoGalleryPage", function() { return SlidePhotoGalleryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SlidePhotoGalleryPage = class SlidePhotoGalleryPage {
    constructor() {
        this.slides = [
            {
                imageUrl: 'http://lorempixel.com/1200/1200/nature/1',
            }, {
                imageUrl: 'http://lorempixel.com/1200/1200/nature/2',
            }, {
                imageUrl: 'http://lorempixel.com/1200/1200/nature/3',
            }, {
                imageUrl: 'http://lorempixel.com/1200/1200/nature/4',
            }, {
                imageUrl: 'http://lorempixel.com/1200/1200/nature/5',
            }, {
                imageUrl: 'http://lorempixel.com/1200/1200/nature/6',
            }, {
                imageUrl: 'http://lorempixel.com/1200/1200/nature/7',
            }, {
                imageUrl: 'http://lorempixel.com/1200/1200/nature/8',
            }, {
                imageUrl: 'http://lorempixel.com/1200/1200/nature/9',
            }, {
                imageUrl: 'http://lorempixel.com/1200/1200/nature/10',
            },
        ];
    }
    ngOnInit() {
    }
};
SlidePhotoGalleryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-slide-photo-gallery',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./slide-photo-gallery.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/slides/slide-photo-gallery/slide-photo-gallery.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./slide-photo-gallery.page.scss */ "./src/app/pages/yannbf/components/slides/slide-photo-gallery/slide-photo-gallery.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SlidePhotoGalleryPage);



/***/ })

}]);
//# sourceMappingURL=pages-yannbf-components-slides-slide-photo-gallery-slide-photo-gallery-module-es2015.js.map