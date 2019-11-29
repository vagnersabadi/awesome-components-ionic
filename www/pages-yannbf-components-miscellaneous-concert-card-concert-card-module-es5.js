(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-miscellaneous-concert-card-concert-card-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/yannbf/components/miscellaneous/concert-card/concert-card.page.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/yannbf/components/miscellaneous/concert-card/concert-card.page.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Concert Card</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-slides class=\"ion-margin-bottom ion-margin-top\">\r\n    <ion-slides autoplay=\"2000\">\r\n      <ion-slide *ngFor=\"let concert of concerts\">\r\n        <ion-card>\r\n          <div class=\"the-header\">\r\n            <div class=\"header-text\">\r\n              <h1>{{concert.artistName}}</h1>\r\n              <p>{{concert.name}}</p>\r\n            </div>\r\n            <div class=\"background\" [style.background]=\"concert.color\">\r\n              <img [src]=\"concert.artistImage\" />\r\n            </div>\r\n            <button ion-fab>\r\n              <ion-icon name=\"musical-notes\"></ion-icon>\r\n            </button>\r\n          </div>\r\n          <div class=\"ion-padding the-content\">\r\n            <h2>POWER PASS</h2>\r\n            <div class=\"ion-padding\">\r\n              <small>\r\n                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,\r\n                totam\r\n                rem aperiam,\r\n                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.\r\n              </small>\r\n            </div>\r\n            <h2>SOMETHING ELSE</h2>\r\n            <div class=\"ion-padding\">\r\n              <small>\r\n                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque. dicta sunt\r\n                explicabo.\r\n              </small>\r\n            </div>\r\n            <ion-button expand=\"block\" [style.background]=\"concert.color\">Purchase</ion-button>\r\n          </div>\r\n        </ion-card>\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </ion-slides>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/yannbf/components/miscellaneous/concert-card/concert-card.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/miscellaneous/concert-card/concert-card.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: ConcertCardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConcertCardPageModule", function() { return ConcertCardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _concert_card_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./concert-card.page */ "./src/app/pages/yannbf/components/miscellaneous/concert-card/concert-card.page.ts");







var routes = [
    {
        path: '',
        component: _concert_card_page__WEBPACK_IMPORTED_MODULE_6__["ConcertCardPage"]
    }
];
var ConcertCardPageModule = /** @class */ (function () {
    function ConcertCardPageModule() {
    }
    ConcertCardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_concert_card_page__WEBPACK_IMPORTED_MODULE_6__["ConcertCardPage"]]
        })
    ], ConcertCardPageModule);
    return ConcertCardPageModule;
}());



/***/ }),

/***/ "./src/app/pages/yannbf/components/miscellaneous/concert-card/concert-card.page.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/miscellaneous/concert-card/concert-card.page.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bar-buttons,\n.toolbar-title, button {\n  color: #fff !important;\n}\n\n.toolbar-background {\n  background: rgba(0, 0, 0, 0.2) !important;\n}\n\n.scroll-content {\n  background: #494949;\n}\n\nion-card {\n  margin: 0 auto !important;\n  max-width: 500px;\n  background: #494949 !important;\n  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.8) !important;\n}\n\n.the-header {\n  position: relative;\n  height: 30vh;\n}\n\n.the-header .header-text {\n  position: absolute;\n  z-index: 2;\n  top: 40px;\n  left: 15px;\n}\n\n.the-header .header-text h1 {\n  font-weight: bold;\n}\n\n.the-header .header-text p {\n  padding-left: 2rem;\n  font-weight: bold;\n  color: white;\n}\n\n.the-header .background {\n  height: 30vh;\n  position: relative;\n  -webkit-clip-path: polygon(0 0, 100% 0, 100% 170px, 0 115%);\n          clip-path: polygon(0 0, 100% 0, 100% 170px, 0 115%);\n}\n\n.the-header .background img {\n  max-width: 34rem;\n  position: absolute;\n  right: -90px;\n  bottom: 0;\n}\n\n.the-header button {\n  position: absolute;\n  bottom: -30px;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  background: #1c1c1c;\n  border: 6px solid #494949;\n  z-index: 2;\n}\n\n.the-header button ion-icon {\n  font-size: 2.8rem;\n}\n\n.the-header button.activated {\n  background: #1c1c1c;\n}\n\n.the-header button.activated ion-icon {\n  -webkit-transition: 0.1s linear;\n  transition: 0.1s linear;\n  color: #f73e53;\n}\n\n.the-content {\n  padding-top: 40px !important;\n  background: #1c1c1c;\n  -webkit-clip-path: polygon(0 24px, 100% -20px, 100% 100%, 0 101%);\n          clip-path: polygon(0 24px, 100% -20px, 100% 100%, 0 101%);\n  min-height: 50vh;\n}\n\n.the-content h2, .the-content small, .the-content p {\n  color: white;\n}\n\n.the-content ion-button {\n  --background: $header-color;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbWlzY2VsbGFuZW91cy9jb25jZXJ0LWNhcmQvQzpcXFVzZXJzXFxzYWJhZGlcXERvY3VtZW50c1xcUHJvamV0b3NcXF9pb25pY1xcaW9uaWM0LWNvbXBvbmVudHMvc3JjXFxhcHBcXHBhZ2VzXFx5YW5uYmZcXGNvbXBvbmVudHNcXG1pc2NlbGxhbmVvdXNcXGNvbmNlcnQtY2FyZFxcY29uY2VydC1jYXJkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbWlzY2VsbGFuZW91cy9jb25jZXJ0LWNhcmQvY29uY2VydC1jYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTs7RUFFSSxzQkFBQTtBQ0hKOztBRE1BO0VBQ0kseUNBQUE7QUNISjs7QURNQTtFQUNJLG1CQVpTO0FDU2I7O0FETUE7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtREFBQTtBQ0hKOztBRE1BO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FDSEo7O0FES0k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0hSOztBRE1JO0VBQ0ksaUJBQUE7QUNKUjs7QURPSTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDTFI7O0FEUUk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyREFBQTtVQUFBLG1EQUFBO0FDTlI7O0FET1E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUNMWjs7QURTSTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQTlEUTtFQStEUix5QkFBQTtFQUNBLFVBQUE7QUNQUjs7QURRUTtFQUNJLGlCQUFBO0FDTlo7O0FEUVE7RUFDSSxtQkFyRUk7QUMrRGhCOztBRFFRO0VBQ0ksK0JBQUE7RUFBQSx1QkFBQTtFQUNBLGNBMUVHO0FDb0VmOztBRFdBO0VBQ0ksNEJBQUE7RUFDQSxtQkFoRlk7RUFpRlosaUVBQUE7VUFBQSx5REFBQTtFQUNBLGdCQUFBO0FDUko7O0FEVUk7RUFDSSxZQUFBO0FDUlI7O0FEV0k7RUFDSSwyQkFBQTtBQ1RSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbWlzY2VsbGFuZW91cy9jb25jZXJ0LWNhcmQvY29uY2VydC1jYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRoZWFkZXItY29sb3I6ICNmNzNlNTM7XHJcbiRjb250ZW50LWNvbG9yOiAjMWMxYzFjO1xyXG4kY2xpcC1jb2xvcjogIzQ5NDk0OTtcclxuXHJcbi5iYXItYnV0dG9ucyxcclxuLnRvb2xiYXItdGl0bGUsIGJ1dHRvbiB7XHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udG9vbGJhci1iYWNrZ3JvdW5kIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50aXplKGJsYWNrLDAuOCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNjcm9sbC1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQ6ICRjbGlwLWNvbG9yO1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIGJhY2tncm91bmQ6ICM0OTQ5NDkgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IDAgNnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuOCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRoZS1oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAzMHZoO1xyXG5cclxuICAgIC5oZWFkZXItdGV4dCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgdG9wOiA0MHB4O1xyXG4gICAgICAgIGxlZnQ6IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmhlYWRlci10ZXh0IGgxIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuXHJcbiAgICAuaGVhZGVyLXRleHQgcCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAuYmFja2dyb3VuZCB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHZoO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDEwMCUgMTcwcHgsIDAgMTE1JSk7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAzNHJlbTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogLTkwcHg7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAtMzBweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRjb250ZW50LWNvbG9yO1xyXG4gICAgICAgIGJvcmRlcjogNnB4IHNvbGlkICRjbGlwLWNvbG9yO1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIuOHJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5hY3RpdmF0ZWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY29udGVudC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5hY3RpdmF0ZWQgaW9uLWljb257XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IC4xcyBsaW5lYXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkaGVhZGVyLWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnRoZS1jb250ZW50IHtcclxuICAgIHBhZGRpbmctdG9wOiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29udGVudC1jb2xvcjtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDI0cHgsIDEwMCUgLTIwcHgsIDEwMCUgMTAwJSwgMCAxMDElKTtcclxuICAgIG1pbi1oZWlnaHQ6IDUwdmg7XHJcblxyXG4gICAgaDIsIHNtYWxsLCBwIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAkaGVhZGVyLWNvbG9yO1xyXG4gICAgfVxyXG59IiwiLmJhci1idXR0b25zLFxuLnRvb2xiYXItdGl0bGUsIGJ1dHRvbiB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi50b29sYmFyLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMikgIWltcG9ydGFudDtcbn1cblxuLnNjcm9sbC1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogIzQ5NDk0OTtcbn1cblxuaW9uLWNhcmQge1xuICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBiYWNrZ3JvdW5kOiAjNDk0OTQ5ICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuOCkgIWltcG9ydGFudDtcbn1cblxuLnRoZS1oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMzB2aDtcbn1cbi50aGUtaGVhZGVyIC5oZWFkZXItdGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjtcbiAgdG9wOiA0MHB4O1xuICBsZWZ0OiAxNXB4O1xufVxuLnRoZS1oZWFkZXIgLmhlYWRlci10ZXh0IGgxIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4udGhlLWhlYWRlciAuaGVhZGVyLXRleHQgcCB7XG4gIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi50aGUtaGVhZGVyIC5iYWNrZ3JvdW5kIHtcbiAgaGVpZ2h0OiAzMHZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAxNzBweCwgMCAxMTUlKTtcbn1cbi50aGUtaGVhZGVyIC5iYWNrZ3JvdW5kIGltZyB7XG4gIG1heC13aWR0aDogMzRyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC05MHB4O1xuICBib3R0b206IDA7XG59XG4udGhlLWhlYWRlciBidXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTMwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogIzFjMWMxYztcbiAgYm9yZGVyOiA2cHggc29saWQgIzQ5NDk0OTtcbiAgei1pbmRleDogMjtcbn1cbi50aGUtaGVhZGVyIGJ1dHRvbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMi44cmVtO1xufVxuLnRoZS1oZWFkZXIgYnV0dG9uLmFjdGl2YXRlZCB7XG4gIGJhY2tncm91bmQ6ICMxYzFjMWM7XG59XG4udGhlLWhlYWRlciBidXR0b24uYWN0aXZhdGVkIGlvbi1pY29uIHtcbiAgdHJhbnNpdGlvbjogMC4xcyBsaW5lYXI7XG4gIGNvbG9yOiAjZjczZTUzO1xufVxuXG4udGhlLWNvbnRlbnQge1xuICBwYWRkaW5nLXRvcDogNDBweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjMWMxYzFjO1xuICBjbGlwLXBhdGg6IHBvbHlnb24oMCAyNHB4LCAxMDAlIC0yMHB4LCAxMDAlIDEwMCUsIDAgMTAxJSk7XG4gIG1pbi1oZWlnaHQ6IDUwdmg7XG59XG4udGhlLWNvbnRlbnQgaDIsIC50aGUtY29udGVudCBzbWFsbCwgLnRoZS1jb250ZW50IHAge1xuICBjb2xvcjogd2hpdGU7XG59XG4udGhlLWNvbnRlbnQgaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogJGhlYWRlci1jb2xvcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/yannbf/components/miscellaneous/concert-card/concert-card.page.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/miscellaneous/concert-card/concert-card.page.ts ***!
  \*****************************************************************************************/
/*! exports provided: ConcertCardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConcertCardPage", function() { return ConcertCardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConcertCardPage = /** @class */ (function () {
    function ConcertCardPage() {
        this.concerts = [
            {
                name: 'yeezy world tour 2017',
                artistName: 'Kanye West',
                artistImage: 'assets/yannbf/img/misc/kanye_west.png',
                color: '#f73e53'
            },
            {
                name: 'yeezy world tour 2017',
                artistName: 'Kanye West',
                artistImage: 'assets/yannbf/img/misc/kanye_west.png',
                color: '#0be3ff'
            },
            {
                name: 'yeezy world tour 2017',
                artistName: 'Kanye West',
                artistImage: 'assets/yannbf/img/misc/kanye_west.png',
                color: '#fdd427'
            },
        ];
    }
    ConcertCardPage.prototype.ngOnInit = function () {
    };
    ConcertCardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-concert-card',
            template: __webpack_require__(/*! raw-loader!./concert-card.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/yannbf/components/miscellaneous/concert-card/concert-card.page.html"),
            styles: [__webpack_require__(/*! ./concert-card.page.scss */ "./src/app/pages/yannbf/components/miscellaneous/concert-card/concert-card.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConcertCardPage);
    return ConcertCardPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-yannbf-components-miscellaneous-concert-card-concert-card-module-es5.js.map