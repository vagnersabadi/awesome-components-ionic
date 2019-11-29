(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-fivethree-components-gallery-gallery-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/fivethree/components/gallery/gallery.page.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/fivethree/components/gallery/gallery.page.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Gallery</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <fiv-gallery ambient=\"true\">\r\n    <fiv-gallery-toolbar [position]=\"'top'\">\r\n      <fiv-gallery-toolbar-content></fiv-gallery-toolbar-content>\r\n    </fiv-gallery-toolbar>\r\n    <ion-grid fixed no-padding>\r\n      <ion-row class=\"big\">\r\n        <ion-col size=\"6\">\r\n          <fiv-gallery-image [src]=\"'assets/images/photo_2.jpeg'\"></fiv-gallery-image>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <fiv-gallery-image [src]=\"'assets/images/photo_1.jpeg'\">\r\n            <div [fivCenter]>\r\n              <fiv-loading-spinner [circleRadius]=\"8\" [diameter]=\"20\" [strokeWidth]=\"2\"></fiv-loading-spinner>\r\n            </div>\r\n          </fiv-gallery-image>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"large\">\r\n        <ion-col size=\"4\">\r\n          <fiv-gallery-image [src]=\"'assets/images/photo_3.jpeg'\"></fiv-gallery-image>\r\n        </ion-col>\r\n        <ion-col size=\"4\">\r\n          <fiv-gallery-image [src]=\"'assets/images/photo_4.jpeg'\"></fiv-gallery-image>\r\n        </ion-col>\r\n        <ion-col size=\"4\">\r\n          <fiv-gallery-image [src]=\"'assets/images/photo_5.jpeg'\"></fiv-gallery-image>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"small\">\r\n        <ion-col size=\"3\">\r\n          <fiv-gallery-image [src]=\"'assets/images/photo_6.jpeg'\"></fiv-gallery-image>\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <fiv-gallery-image [src]=\"'assets/images/photo_7.jpeg'\"></fiv-gallery-image>\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <fiv-gallery-image [src]=\"'assets/images/photo_8.jpeg'\"></fiv-gallery-image>\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <fiv-gallery-image [src]=\"'assets/images/photo_9.jpeg'\"></fiv-gallery-image>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <fiv-gallery-toolbar [position]=\"'bottom'\">\r\n      <ion-toolbar color=\"transparent\">\r\n        <ion-title>Custom Toolbar</ion-title>\r\n\r\n      </ion-toolbar>\r\n    </fiv-gallery-toolbar>\r\n\r\n  </fiv-gallery>\r\n  <ion-grid fixed>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n\r\n        <ion-item-group>\r\n          <ion-item-divider>\r\n            <ion-label>*ngFor example</ion-label>\r\n          </ion-item-divider>\r\n          <fiv-gallery class=\"loop\">\r\n            <fiv-gallery-image *ngFor=\"let pic of picsum\" [src]=\"pic\"></fiv-gallery-image>\r\n          </fiv-gallery>\r\n          <ion-item-divider>\r\n            <ion-label>*ngFor example async</ion-label>\r\n          </ion-item-divider>\r\n          <fiv-gallery class=\"loop\">\r\n            <fiv-gallery-image *ngFor=\"let pic of picsumAsync | async\" [src]=\"pic\"></fiv-gallery-image>\r\n          </fiv-gallery>\r\n\r\n          <ion-item-divider>\r\n            <ion-label>*ngFor example grid</ion-label>\r\n          </ion-item-divider>\r\n          <fiv-gallery>\r\n            <ion-grid fixed>\r\n              <ion-row>\r\n                <ion-col *ngFor=\"let pic of picsum\" size=\"6\" sizeMd=\"4\">\r\n                  <fiv-gallery-image [src]=\"pic\"></fiv-gallery-image>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </fiv-gallery>\r\n\r\n        </ion-item-group>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/fivethree/components/gallery/gallery.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/fivethree/components/gallery/gallery.module.ts ***!
  \**********************************************************************/
/*! exports provided: GalleryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryPageModule", function() { return GalleryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _gallery_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gallery.page */ "./src/app/pages/fivethree/components/gallery/gallery.page.ts");
/* harmony import */ var _fivethree_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fivethree/core */ "./node_modules/@fivethree/core/fesm5/fivethree-core.js");








var routes = [
    {
        path: '',
        component: _gallery_page__WEBPACK_IMPORTED_MODULE_6__["GalleryPage"]
    }
];
var GalleryPageModule = /** @class */ (function () {
    function GalleryPageModule() {
    }
    GalleryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _fivethree_core__WEBPACK_IMPORTED_MODULE_7__["FivGalleryModule"],
                _fivethree_core__WEBPACK_IMPORTED_MODULE_7__["FivLoadingSpinnerModule"],
                _fivethree_core__WEBPACK_IMPORTED_MODULE_7__["FivCenterModule"]
            ],
            declarations: [_gallery_page__WEBPACK_IMPORTED_MODULE_6__["GalleryPage"]]
        })
    ], GalleryPageModule);
    return GalleryPageModule;
}());



/***/ }),

/***/ "./src/app/pages/fivethree/components/gallery/gallery.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/fivethree/components/gallery/gallery.page.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpdmV0aHJlZS9jb21wb25lbnRzL2dhbGxlcnkvZ2FsbGVyeS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/fivethree/components/gallery/gallery.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/fivethree/components/gallery/gallery.page.ts ***!
  \********************************************************************/
/*! exports provided: GalleryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryPage", function() { return GalleryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var GalleryPage = /** @class */ (function () {
    function GalleryPage() {
        this.picsum = Array.from(new Array(10), function (x, i) { return "https://picsum.photos/500/?" + i; });
        this.picsumAsync = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(Array.from(new Array(10), function (x, i) { return "https://picsum.photos/500/?" + (i + 10); }));
    }
    GalleryPage.prototype.ngOnInit = function () {
    };
    GalleryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! raw-loader!./gallery.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/fivethree/components/gallery/gallery.page.html"),
            styles: [__webpack_require__(/*! ./gallery.page.scss */ "./src/app/pages/fivethree/components/gallery/gallery.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GalleryPage);
    return GalleryPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-fivethree-components-gallery-gallery-module-es5.js.map