(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-miscellaneous-concert-card-concert-card-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/miscellaneous/concert-card/concert-card.page.html": 
        /*!*********************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/miscellaneous/concert-card/concert-card.page.html ***!
          \*********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Concert Card</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-slides class=\"ion-margin-bottom ion-margin-top\">\r\n    <ion-slides autoplay=\"2000\">\r\n      <ion-slide *ngFor=\"let concert of concerts\">\r\n        <ion-card>\r\n          <div class=\"the-header\">\r\n            <div class=\"header-text\">\r\n              <h1>{{concert.artistName}}</h1>\r\n              <p>{{concert.name}}</p>\r\n            </div>\r\n            <div class=\"background\" [style.background]=\"concert.color\">\r\n              <img [src]=\"concert.artistImage\" />\r\n            </div>\r\n            <button ion-fab>\r\n              <ion-icon name=\"musical-notes\"></ion-icon>\r\n            </button>\r\n          </div>\r\n          <div class=\"ion-padding the-content\">\r\n            <h2>POWER PASS</h2>\r\n            <div class=\"ion-padding\">\r\n              <small>\r\n                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,\r\n                totam\r\n                rem aperiam,\r\n                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.\r\n              </small>\r\n            </div>\r\n            <h2>SOMETHING ELSE</h2>\r\n            <div class=\"ion-padding\">\r\n              <small>\r\n                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque. dicta sunt\r\n                explicabo.\r\n              </small>\r\n            </div>\r\n            <ion-button expand=\"block\" [style.background]=\"concert.color\">Purchase</ion-button>\r\n          </div>\r\n        </ion-card>\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </ion-slides>\r\n</ion-content>");
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/miscellaneous/concert-card/concert-card.module.ts": 
        /*!*******************************************************************************************!*\
          !*** ./src/app/pages/yannbf/components/miscellaneous/concert-card/concert-card.module.ts ***!
          \*******************************************************************************************/
        /*! exports provided: ConcertCardPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConcertCardPageModule", function () { return ConcertCardPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
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
                return ConcertCardPageModule;
            }());
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
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/miscellaneous/concert-card/concert-card.page.scss": 
        /*!*******************************************************************************************!*\
          !*** ./src/app/pages/yannbf/components/miscellaneous/concert-card/concert-card.page.scss ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".bar-buttons,\n.toolbar-title, button {\n  color: #fff !important;\n}\n\n.toolbar-background {\n  background: rgba(0, 0, 0, 0.2) !important;\n}\n\n.scroll-content {\n  background: #494949;\n}\n\nion-card {\n  margin: 0 auto !important;\n  max-width: 500px;\n  background: #494949 !important;\n  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.8) !important;\n}\n\n.the-header {\n  position: relative;\n  height: 30vh;\n}\n\n.the-header .header-text {\n  position: absolute;\n  z-index: 2;\n  top: 40px;\n  left: 15px;\n}\n\n.the-header .header-text h1 {\n  font-weight: bold;\n}\n\n.the-header .header-text p {\n  padding-left: 2rem;\n  font-weight: bold;\n  color: white;\n}\n\n.the-header .background {\n  height: 30vh;\n  position: relative;\n  -webkit-clip-path: polygon(0 0, 100% 0, 100% 170px, 0 115%);\n          clip-path: polygon(0 0, 100% 0, 100% 170px, 0 115%);\n}\n\n.the-header .background img {\n  max-width: 34rem;\n  position: absolute;\n  right: -90px;\n  bottom: 0;\n}\n\n.the-header button {\n  position: absolute;\n  bottom: -30px;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  background: #1c1c1c;\n  border: 6px solid #494949;\n  z-index: 2;\n}\n\n.the-header button ion-icon {\n  font-size: 2.8rem;\n}\n\n.the-header button.activated {\n  background: #1c1c1c;\n}\n\n.the-header button.activated ion-icon {\n  transition: 0.1s linear;\n  color: #f73e53;\n}\n\n.the-content {\n  padding-top: 40px !important;\n  background: #1c1c1c;\n  -webkit-clip-path: polygon(0 24px, 100% -20px, 100% 100%, 0 101%);\n          clip-path: polygon(0 24px, 100% -20px, 100% 100%, 0 101%);\n  min-height: 50vh;\n}\n\n.the-content h2, .the-content small, .the-content p {\n  color: white;\n}\n\n.the-content ion-button {\n  --background: $header-color;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbWlzY2VsbGFuZW91cy9jb25jZXJ0LWNhcmQvQzpcXFVzZXJzXFxzYWJhZGlcXERvY3VtZW50c1xcUHJvamV0b3NcXF9pb25pY1xcaW9uaWM0LWNvbXBvbmVudHMvc3JjXFxhcHBcXHBhZ2VzXFx5YW5uYmZcXGNvbXBvbmVudHNcXG1pc2NlbGxhbmVvdXNcXGNvbmNlcnQtY2FyZFxcY29uY2VydC1jYXJkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbWlzY2VsbGFuZW91cy9jb25jZXJ0LWNhcmQvY29uY2VydC1jYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTs7RUFFSSxzQkFBQTtBQ0hKOztBRE1BO0VBQ0kseUNBQUE7QUNISjs7QURNQTtFQUNJLG1CQVpTO0FDU2I7O0FETUE7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtREFBQTtBQ0hKOztBRE1BO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FDSEo7O0FES0k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0hSOztBRE1JO0VBQ0ksaUJBQUE7QUNKUjs7QURPSTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDTFI7O0FEUUk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyREFBQTtVQUFBLG1EQUFBO0FDTlI7O0FET1E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUNMWjs7QURTSTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQTlEUTtFQStEUix5QkFBQTtFQUNBLFVBQUE7QUNQUjs7QURRUTtFQUNJLGlCQUFBO0FDTlo7O0FEUVE7RUFDSSxtQkFyRUk7QUMrRGhCOztBRFFRO0VBQ0ksdUJBQUE7RUFDQSxjQTFFRztBQ29FZjs7QURXQTtFQUNJLDRCQUFBO0VBQ0EsbUJBaEZZO0VBaUZaLGlFQUFBO1VBQUEseURBQUE7RUFDQSxnQkFBQTtBQ1JKOztBRFVJO0VBQ0ksWUFBQTtBQ1JSOztBRFdJO0VBQ0ksMkJBQUE7QUNUUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL21pc2NlbGxhbmVvdXMvY29uY2VydC1jYXJkL2NvbmNlcnQtY2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkaGVhZGVyLWNvbG9yOiAjZjczZTUzO1xyXG4kY29udGVudC1jb2xvcjogIzFjMWMxYztcclxuJGNsaXAtY29sb3I6ICM0OTQ5NDk7XHJcblxyXG4uYmFyLWJ1dHRvbnMsXHJcbi50b29sYmFyLXRpdGxlLCBidXR0b24ge1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRvb2xiYXItYmFja2dyb3VuZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudGl6ZShibGFjaywwLjgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zY3JvbGwtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY2xpcC1jb2xvcjtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDk0OTQ5ICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50aGUtaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMzB2aDtcclxuXHJcbiAgICAuaGVhZGVyLXRleHQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgIHRvcDogNDBweDtcclxuICAgICAgICBsZWZ0OiAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5oZWFkZXItdGV4dCBoMSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmhlYWRlci10ZXh0IHAge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMnJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLmJhY2tncm91bmQge1xyXG4gICAgICAgIGhlaWdodDogMzB2aDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDE3MHB4LCAwIDExNSUpO1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMzRyZW07XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IC05MHB4O1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogLTMwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkY29udGVudC1jb2xvcjtcclxuICAgICAgICBib3JkZXI6IDZweCBzb2xpZCAkY2xpcC1jb2xvcjtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyLjhyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuYWN0aXZhdGVkIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJGNvbnRlbnQtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuYWN0aXZhdGVkIGlvbi1pY29ue1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAuMXMgbGluZWFyO1xyXG4gICAgICAgICAgICBjb2xvcjogJGhlYWRlci1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi50aGUtY29udGVudCB7XHJcbiAgICBwYWRkaW5nLXRvcDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogJGNvbnRlbnQtY29sb3I7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAyNHB4LCAxMDAlIC0yMHB4LCAxMDAlIDEwMCUsIDAgMTAxJSk7XHJcbiAgICBtaW4taGVpZ2h0OiA1MHZoO1xyXG5cclxuICAgIGgyLCBzbWFsbCwgcCB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogJGhlYWRlci1jb2xvcjtcclxuICAgIH1cclxufSIsIi5iYXItYnV0dG9ucyxcbi50b29sYmFyLXRpdGxlLCBidXR0b24ge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4udG9vbGJhci1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpICFpbXBvcnRhbnQ7XG59XG5cbi5zY3JvbGwtY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICM0OTQ5NDk7XG59XG5cbmlvbi1jYXJkIHtcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgYmFja2dyb3VuZDogIzQ5NDk0OSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjgpICFpbXBvcnRhbnQ7XG59XG5cbi50aGUtaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDMwdmg7XG59XG4udGhlLWhlYWRlciAuaGVhZGVyLXRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIHRvcDogNDBweDtcbiAgbGVmdDogMTVweDtcbn1cbi50aGUtaGVhZGVyIC5oZWFkZXItdGV4dCBoMSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnRoZS1oZWFkZXIgLmhlYWRlci10ZXh0IHAge1xuICBwYWRkaW5nLWxlZnQ6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG59XG4udGhlLWhlYWRlciAuYmFja2dyb3VuZCB7XG4gIGhlaWdodDogMzB2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDEwMCUgMTcwcHgsIDAgMTE1JSk7XG59XG4udGhlLWhlYWRlciAuYmFja2dyb3VuZCBpbWcge1xuICBtYXgtd2lkdGg6IDM0cmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtOTBweDtcbiAgYm90dG9tOiAwO1xufVxuLnRoZS1oZWFkZXIgYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0zMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6ICMxYzFjMWM7XG4gIGJvcmRlcjogNnB4IHNvbGlkICM0OTQ5NDk7XG4gIHotaW5kZXg6IDI7XG59XG4udGhlLWhlYWRlciBidXR0b24gaW9uLWljb24ge1xuICBmb250LXNpemU6IDIuOHJlbTtcbn1cbi50aGUtaGVhZGVyIGJ1dHRvbi5hY3RpdmF0ZWQge1xuICBiYWNrZ3JvdW5kOiAjMWMxYzFjO1xufVxuLnRoZS1oZWFkZXIgYnV0dG9uLmFjdGl2YXRlZCBpb24taWNvbiB7XG4gIHRyYW5zaXRpb246IDAuMXMgbGluZWFyO1xuICBjb2xvcjogI2Y3M2U1Mztcbn1cblxuLnRoZS1jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDQwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogIzFjMWMxYztcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMjRweCwgMTAwJSAtMjBweCwgMTAwJSAxMDAlLCAwIDEwMSUpO1xuICBtaW4taGVpZ2h0OiA1MHZoO1xufVxuLnRoZS1jb250ZW50IGgyLCAudGhlLWNvbnRlbnQgc21hbGwsIC50aGUtY29udGVudCBwIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnRoZS1jb250ZW50IGlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICRoZWFkZXItY29sb3I7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/miscellaneous/concert-card/concert-card.page.ts": 
        /*!*****************************************************************************************!*\
          !*** ./src/app/pages/yannbf/components/miscellaneous/concert-card/concert-card.page.ts ***!
          \*****************************************************************************************/
        /*! exports provided: ConcertCardPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConcertCardPage", function () { return ConcertCardPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
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
                return ConcertCardPage;
            }());
            ConcertCardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-concert-card',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./concert-card.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/miscellaneous/concert-card/concert-card.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./concert-card.page.scss */ "./src/app/pages/yannbf/components/miscellaneous/concert-card/concert-card.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], ConcertCardPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-yannbf-components-miscellaneous-concert-card-concert-card-module-es2015.js.map
//# sourceMappingURL=pages-yannbf-components-miscellaneous-concert-card-concert-card-module-es5.js.map
//# sourceMappingURL=pages-yannbf-components-miscellaneous-concert-card-concert-card-module-es5.js.map