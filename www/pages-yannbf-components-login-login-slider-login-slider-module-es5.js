(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-login-login-slider-login-slider-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/yannbf/components/login/login-slider/login-slider.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/yannbf/components/login/login-slider/login-slider.page.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n\r\n  <ion-slides #slider class=\"content-slider\" direction=\"vertical\">\r\n    <ion-slide>\r\n      <!-- <div class=\"ion-padding\">\r\n        <img class=\"logo\" src=\"assets/yannbf/img/logo/logo-pr.png\" />\r\n         <ion-slides class=\"text-slider\" >\r\n          <ion-slide>\r\n            <h3> Really nice stuff </h3>\r\n          </ion-slide>\r\n          <ion-slide>\r\n            <img src=\"assets/yannbf/img/misc/emoji.png\" />\r\n          </ion-slide>\r\n          <ion-slide>\r\n            <h3> Unique experiences given to you for just a couple bucks </h3>\r\n          </ion-slide>\r\n          <ion-slide>\r\n            <h3> Share what you love </h3>\r\n          </ion-slide>\r\n        </ion-slides> \r\n        <ion-grid >\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <ion-button shape=\"round\" color=\"light\" class=\"login-button\" (click)=\"goToLogin()\">SIGN IN</ion-button>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              <ion-button shape=\"round\" color=\"light\" class=\"login-button\" (click)=\"goToSignup()\">SIGN UP</ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div> -->\r\n\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <img class=\"logo\" src=\"assets/yannbf/img/logo/logo-pr.png\" />\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n      \r\n\r\n        <ion-row class=\"group-btn\">\r\n          <ion-col size=\"6\">\r\n            <ion-button shape=\"round\" color=\"light\" class=\"login-button\" (click)=\"goToLogin()\">SIGN IN</ion-button>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-button shape=\"round\" color=\"light\" class=\"login-button\" (click)=\"goToSignup()\">SIGN UP</ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n    </ion-slide>\r\n    <ion-slide class=\"zoom swiper-no-swiping\">\r\n      <ion-slides #innerSlider class=\"content-slider\">\r\n        <ion-slide class=\"swiper-no-swiping\">\r\n          <div style=\"padding: 20% 32px 32px 32px\">\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Username</ion-label>\r\n              <ion-input type=\"text\"></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Password</ion-label>\r\n              <ion-input type=\"password\"></ion-input>\r\n            </ion-item>\r\n            <ion-button expand=\"block\" shape=\"round\" (click)=\"login()\" color=\"light\" class=\"login-button\">Login\r\n            </ion-button>\r\n            <ion-button fill=\"clear\" (click)=\"slideNext()\" color=\"light\" class=\"forgot-button\">FORGOT PASSWORD?\r\n            </ion-button>\r\n          </div>\r\n          <ion-button fill=\"clear\" (click)=\"goToSignup()\" class=\"slide-button position-bottom\">GO TO SIGNUP<ion-icon\r\n              name=\"arrow-down\"></ion-icon>\r\n          </ion-button>\r\n        </ion-slide>\r\n        <ion-slide class=\"swiper-no-swiping\">\r\n          <div style=\"padding: 20% 32px 32px 32px\">\r\n            <ion-item>\r\n              <ion-label floating>E-mail</ion-label>\r\n              <ion-input type=\"email\"></ion-input>\r\n            </ion-item>\r\n            <ion-button expand=\"block\" shape=\"round\" (click)=\"resetPassword()\" color=\"light\" class=\"login-button\">RESET\r\n              PASSWORD</ion-button>\r\n            <ion-button fill=\"clear\" (click)=\"slidePrevious()\" color=\"light\" class=\"goback-button\">\r\n              <ion-icon name=\"arrow-back\"></ion-icon> GO BACK\r\n            </ion-button>\r\n          </div>\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </ion-slide>\r\n    <ion-slide class=\"zoom swiper-no-swiping\">\r\n      <ion-button fill=\"clear\" (click)=\"goToLogin()\" class=\"slide-button\">\r\n        GO TO LOGIN\r\n        <ion-icon name=\"arrow-up\"></ion-icon>\r\n      </ion-button>\r\n      <div style=\"padding: 32px\">\r\n        <ion-item>\r\n          <ion-label floating>Username</ion-label>\r\n          <ion-input type=\"text\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label floating>Password</ion-label>\r\n          <ion-input type=\"password\"></ion-input>\r\n        </ion-item>\r\n        <ion-item class=\"margin-bottom\">\r\n          <ion-label floating>Confirm Password</ion-label>\r\n          <ion-input type=\"password\"></ion-input>\r\n        </ion-item>\r\n        <ion-button expand=\"block\" shape=\"round\" (click)=\"signup()\" color=\"light\" class=\"login-button\">SIGN UP\r\n        </ion-button>\r\n      </div>\r\n    </ion-slide>\r\n  </ion-slides>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/yannbf/components/login/login-slider/login-slider.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/login/login-slider/login-slider.module.ts ***!
  \***********************************************************************************/
/*! exports provided: LoginSliderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSliderPageModule", function() { return LoginSliderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_slider_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-slider.page */ "./src/app/pages/yannbf/components/login/login-slider/login-slider.page.ts");







var routes = [
    {
        path: '',
        component: _login_slider_page__WEBPACK_IMPORTED_MODULE_6__["LoginSliderPage"]
    }
];
var LoginSliderPageModule = /** @class */ (function () {
    function LoginSliderPageModule() {
    }
    LoginSliderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_slider_page__WEBPACK_IMPORTED_MODULE_6__["LoginSliderPage"]]
        })
    ], LoginSliderPageModule);
    return LoginSliderPageModule;
}());



/***/ }),

/***/ "./src/app/pages/yannbf/components/login/login-slider/login-slider.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/login/login-slider/login-slider.page.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: transparent !important;\n}\n\nion-content {\n  --background: none;\n  background-image: url(\"/assets/yannbf/img/background/background-6.jpg\");\n  background-position: center top;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.content-slider ion-slides,\n.content-slider .swiper-container {\n  height: 100%;\n  width: auto;\n}\n\n.zoom .slide-zoom {\n  height: 100%;\n}\n\n.scroll-content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  overflow: hidden;\n}\n\n.logo {\n  width: 100%;\n  max-width: 19em;\n  height: auto;\n  margin: 0 auto;\n}\n\nion-row {\n  -webkit-box-align: center;\n          align-items: center;\n  text-align: center;\n}\n\nion-col {\n  padding: 0 20px;\n}\n\nspan,\np,\nh3 {\n  color: white;\n}\n\nion-label,\n.input-has-focus {\n  color: #fff !important;\n}\n\nion-item {\n  border-radius: 3px !important;\n  padding-right: 16px !important;\n  margin-bottom: 5px !important;\n  --color: #fff !important;\n  --background: transparent !important;\n  font-size: 0.9em;\n}\n\n.margin-bottom {\n  margin-bottom: 15px !important;\n}\n\n::-webkit-input-placeholder {\n  color: white !important;\n}\n\n.item-inner {\n  border-bottom: 2px solid white !important;\n  box-shadow: none !important;\n}\n\n.login-button {\n  width: 100%;\n  height: 50px;\n  font-size: 1.2em;\n}\n\n.login-button span {\n  color: #18485a !important;\n}\n\n.forgot-button {\n  font-weight: bold;\n  float: right;\n}\n\n.forgot-button ion-icon {\n  padding-left: 10px;\n  font-size: 2.2rem;\n}\n\n.goback-button {\n  font-weight: bold;\n  float: left;\n}\n\n.goback-button ion-icon {\n  padding-right: 10px;\n  font-size: 2.2rem;\n}\n\n.slide-button {\n  margin-top: 4rem;\n  font-weight: bold;\n}\n\n.slide-button ion-icon {\n  padding-left: 10px;\n  font-size: 2.2rem;\n}\n\n.position-bottom {\n  position: absolute;\n  left: 0;\n  bottom: 10px;\n  right: 0;\n  margin: 0 auto;\n  width: 200px;\n}\n\n.group-btn {\n  margin-top: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbG9naW4vbG9naW4tc2xpZGVyL0M6XFxVc2Vyc1xcc2FiYWRpXFxEb2N1bWVudHNcXFByb2pldG9zXFxfaW9uaWNcXGlvbmljNC1jb21wb25lbnRzL3NyY1xcYXBwXFxwYWdlc1xceWFubmJmXFxjb21wb25lbnRzXFxsb2dpblxcbG9naW4tc2xpZGVyXFxsb2dpbi1zbGlkZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy9sb2dpbi9sb2dpbi1zbGlkZXIvbG9naW4tc2xpZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG9DQUFBO0FDREY7O0FES0E7RUFDRSxrQkFBQTtFQUNBLHVFQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDRkY7O0FEU0U7O0VBRUUsWUFBQTtFQUNBLFdBQUE7QUNOSjs7QURlQTtFQUNFLFlBQUE7QUNaRjs7QURlQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGdCQUFBO0FDWkY7O0FEY0E7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDWEY7O0FEYUE7RUFDRSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0JBQUE7QUNWRjs7QURZQTtFQUNFLGVBQUE7QUNURjs7QURXQTs7O0VBR0UsWUFBQTtBQ1JGOztBRFdBOztFQUVFLHNCQUFBO0FDUkY7O0FEVUE7RUFDRSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7QUNQRjs7QURTQTtFQUNFLDhCQUFBO0FDTkY7O0FEUUE7RUFDRSx1QkFBQTtBQ0xGOztBRE9BO0VBQ0UseUNBQUE7RUFDQSwyQkFBQTtBQ0pGOztBRE9BO0VBQ0UsV0FBQTtFQUVBLFlBQUE7RUFDQSxnQkFBQTtBQ0xGOztBRE1FO0VBQ0UseUJBQUE7QUNKSjs7QURPQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQ0pGOztBREtFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQ0hKOztBRE1BO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FDSEY7O0FESUU7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FDRko7O0FES0E7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDRkY7O0FER0U7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FDREo7O0FESUE7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDREY7O0FESUE7RUFDRSxlQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy9sb2dpbi9sb2dpbi1zbGlkZXIvbG9naW4tc2xpZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRiYXNlLWNvbG9yOiByZ2IoMjQsIDcyLCA5MCk7XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcbi8vIEZ1bGxzY3JlZW4gY2VudGVyZWQgaW1hZ2UgYmFja2dyb3VuZFxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3lhbm5iZi9pbWcvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLTYuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFNsaWRlclxyXG4uY29udGVudC1zbGlkZXIge1xyXG4gIGlvbi1zbGlkZXMsXHJcbiAgLnN3aXBlci1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG59XHJcbi50ZXh0LXNsaWRlciB7XHJcbiAgaW9uLXNsaWRlcyB7XHJcbiAgICAvLyBoZWlnaHQ6IDIwdmg7XHJcbiAgICAvLyB3aWR0aDogYXV0bztcclxuICB9XHJcbn1cclxuLnpvb20gLnNsaWRlLXpvb20ge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4vLyBDb250ZW50XHJcbi5zY3JvbGwtY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmxvZ28ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTllbTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuaW9uLXJvdyB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaW9uLWNvbCB7XHJcbiAgcGFkZGluZzogMCAyMHB4O1xyXG59XHJcbnNwYW4sXHJcbnAsXHJcbmgzIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLy8gSW5wdXQgaXRlbXNcclxuaW9uLWxhYmVsLFxyXG4uaW5wdXQtaGFzLWZvY3VzIHtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1pdGVtIHtcclxuICBib3JkZXItcmFkaXVzOiAzcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgLS1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDAuOWVtO1xyXG59XHJcbi5tYXJnaW4tYm90dG9tIHtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4uaXRlbS1pbm5lciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi8vXHJcbi5sb2dpbi1idXR0b24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8vIG1heC13aWR0aDogNDByZW07XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgc3BhbiB7XHJcbiAgICBjb2xvcjogJGJhc2UtY29sb3IgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuLmZvcmdvdC1idXR0b24ge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBpb24taWNvbiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDIuMnJlbTtcclxuICB9XHJcbn1cclxuLmdvYmFjay1idXR0b24ge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGlvbi1pY29uIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDIuMnJlbTtcclxuICB9XHJcbn1cclxuLnNsaWRlLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogNHJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBpb24taWNvbiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDIuMnJlbTtcclxuICB9XHJcbn1cclxuLnBvc2l0aW9uLWJvdHRvbSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAxMHB4O1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLmdyb3VwLWJ0bntcclxuICBtYXJnaW4tdG9wOiA1MCU7XHJcbn1cclxuIiwiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3lhbm5iZi9pbWcvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLTYuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uY29udGVudC1zbGlkZXIgaW9uLXNsaWRlcyxcbi5jb250ZW50LXNsaWRlciAuc3dpcGVyLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi56b29tIC5zbGlkZS16b29tIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2Nyb2xsLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubG9nbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDE5ZW07XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbmlvbi1yb3cge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1jb2wge1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG5cbnNwYW4sXG5wLFxuaDMge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1sYWJlbCxcbi5pbnB1dC1oYXMtZm9jdXMge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDNweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xuICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAwLjllbTtcbn1cblxuLm1hcmdpbi1ib3R0b20ge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uaXRlbS1pbm5lciB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5sb2dpbi1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuLmxvZ2luLWJ1dHRvbiBzcGFuIHtcbiAgY29sb3I6ICMxODQ4NWEgIWltcG9ydGFudDtcbn1cblxuLmZvcmdvdC1idXR0b24ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLmZvcmdvdC1idXR0b24gaW9uLWljb24ge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xufVxuXG4uZ29iYWNrLWJ1dHRvbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmbG9hdDogbGVmdDtcbn1cbi5nb2JhY2stYnV0dG9uIGlvbi1pY29uIHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgZm9udC1zaXplOiAyLjJyZW07XG59XG5cbi5zbGlkZS1idXR0b24ge1xuICBtYXJnaW4tdG9wOiA0cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5zbGlkZS1idXR0b24gaW9uLWljb24ge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xufVxuXG4ucG9zaXRpb24tYm90dG9tIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDEwcHg7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uZ3JvdXAtYnRuIHtcbiAgbWFyZ2luLXRvcDogNTAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/yannbf/components/login/login-slider/login-slider.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/login/login-slider/login-slider.page.ts ***!
  \*********************************************************************************/
/*! exports provided: LoginSliderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSliderPage", function() { return LoginSliderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var LoginSliderPage = /** @class */ (function () {
    function LoginSliderPage(loadingCtrl, alertCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.backgroundImage = 'assets/img/background/background-6.jpg';
        this.slideOpts = {
            slidesPerView: 1,
            initialSlide: 0,
            speed: 400
        };
    }
    LoginSliderPage.prototype.ngOnInit = function () { };
    LoginSliderPage.prototype.goToLogin = function () {
        this.slider.slideTo(1);
    };
    LoginSliderPage.prototype.goToSignup = function () {
        this.slider.slideTo(2);
    };
    LoginSliderPage.prototype.slideNext = function () {
        this.innerSlider.slideNext();
    };
    LoginSliderPage.prototype.slidePrevious = function () {
        this.innerSlider.slidePrev();
    };
    LoginSliderPage.prototype.presentLoading = function (messages) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            duration: 500,
                            message: messages,
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, loading.onDidDismiss()
                                .then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var alert;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.alertCtrl.create({
                                                header: 'Logged in!',
                                                subHeader: 'Thanks for logging in.',
                                                buttons: ['Dismiss']
                                            })];
                                        case 1:
                                            alert = _a.sent();
                                            return [4 /*yield*/, alert.present()];
                                        case 2:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginSliderPage.prototype.login = function () {
        this.presentLoading('Thanks for signing up!');
    };
    LoginSliderPage.prototype.signup = function () {
        this.presentLoading('Thanks for signing up!');
    };
    LoginSliderPage.prototype.resetPassword = function () {
        this.presentLoading('An e-mail was sent with your new password.');
    };
    LoginSliderPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slider', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], LoginSliderPage.prototype, "slider", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('innerSlider', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], LoginSliderPage.prototype, "innerSlider", void 0);
    LoginSliderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-slider',
            template: __webpack_require__(/*! raw-loader!./login-slider.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/yannbf/components/login/login-slider/login-slider.page.html"),
            styles: [__webpack_require__(/*! ./login-slider.page.scss */ "./src/app/pages/yannbf/components/login/login-slider/login-slider.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], LoginSliderPage);
    return LoginSliderPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-yannbf-components-login-login-slider-login-slider-module-es5.js.map