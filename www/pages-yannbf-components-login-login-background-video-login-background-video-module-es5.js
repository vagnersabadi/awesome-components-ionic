(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-login-login-background-video-login-background-video-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/yannbf/components/login/login-background-video/login-background-video.page.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/yannbf/components/login/login-background-video/login-background-video.page.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\"  class=\"ion-padding ion-text-center\">\r\n  <img class=\"logo\" src=\"assets/yannbf/img/logo/logo-canon.png\" />\r\n  <div class=\"buttons\">\r\n    <ion-button class=\"login-button facebook\" (click)=\"goToLogin()\">Continue with Facebook</ion-button>\r\n    <ion-button class=\"login-button google\" (click)=\"goToLogin()\">Login</ion-button>\r\n    <ion-button class=\"login-button\" color=\"dark\" (click)=\"goToSignup()\">Create account</ion-button>\r\n  </div>\r\n  <video #player playsinline autoplay muted loop poster=\"assets/yannbf/video/video-cover.jpg\" id=\"bgvid\">\r\n    <source src=\"assets/yannbf/video/background-480.mp4\" type=\"video/mp4\"> Your browser does not support the video tag.\r\n  </video>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/yannbf/components/login/login-background-video/login-background-video.module.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/login/login-background-video/login-background-video.module.ts ***!
  \*******************************************************************************************************/
/*! exports provided: LoginBackgroundVideoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginBackgroundVideoPageModule", function() { return LoginBackgroundVideoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_background_video_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-background-video.page */ "./src/app/pages/yannbf/components/login/login-background-video/login-background-video.page.ts");







var routes = [
    {
        path: '',
        component: _login_background_video_page__WEBPACK_IMPORTED_MODULE_6__["LoginBackgroundVideoPage"]
    }
];
var LoginBackgroundVideoPageModule = /** @class */ (function () {
    function LoginBackgroundVideoPageModule() {
    }
    LoginBackgroundVideoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_background_video_page__WEBPACK_IMPORTED_MODULE_6__["LoginBackgroundVideoPage"]]
        })
    ], LoginBackgroundVideoPageModule);
    return LoginBackgroundVideoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/yannbf/components/login/login-background-video/login-background-video.page.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/login/login-background-video/login-background-video.page.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: transparent !important;\n}\n\nion-content {\n  --background: none;\n  background-position: center top;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\nvideo#bgvid {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  min-width: 100%;\n  min-height: 100%;\n  width: auto;\n  height: auto;\n  z-index: -100;\n  -webkit-transform: translateX(-50%) translateY(-50%);\n          transform: translateX(-50%) translateY(-50%);\n  background-size: cover;\n}\n\n.logo {\n  width: 70%;\n  height: auto;\n  margin: 0 auto;\n  padding-top: 50px;\n}\n\n.buttons {\n  text-align: center;\n  position: absolute;\n  bottom: 0;\n  padding-bottom: 10px;\n  width: 90%;\n  -webkit-transition: all 1s ease;\n  transition: all 1s ease;\n}\n\n.buttons ion-button {\n  --color: white;\n}\n\n.buttons .login-button {\n  width: 100%;\n  height: 3rem;\n  font-size: 1.2em;\n  font-weight: bold;\n  text-transform: none !important;\n}\n\n.buttons .facebook {\n  --background: rgba(59, 89, 152, 0.7) !important;\n}\n\n.buttons .facebook.activated {\n  --background: rgba(59, 89, 152, 1) !important;\n}\n\n.buttons .google {\n  --background: rgba(219, 68, 55, 0.7) !important;\n}\n\n.buttons .google.activated {\n  --background: rgba(219, 68, 55, 1) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbG9naW4vbG9naW4tYmFja2dyb3VuZC12aWRlby9DOlxcVXNlcnNcXHNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZXRvc1xcX2lvbmljXFxpb25pYzQtY29tcG9uZW50cy9zcmNcXGFwcFxccGFnZXNcXHlhbm5iZlxcY29tcG9uZW50c1xcbG9naW5cXGxvZ2luLWJhY2tncm91bmQtdmlkZW9cXGxvZ2luLWJhY2tncm91bmQtdmlkZW8ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy9sb2dpbi9sb2dpbi1iYWNrZ3JvdW5kLXZpZGVvL2xvZ2luLWJhY2tncm91bmQtdmlkZW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQUE7QUNDRjs7QURDQTtFQUNFLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDRUY7O0FEQ0E7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxvREFBQTtVQUFBLDRDQUFBO0VBQ0Esc0JBQUE7QUNFRjs7QURBQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDR0Y7O0FEQUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLCtCQUFBO0VBQUEsdUJBQUE7QUNHRjs7QURERTtFQUNFLGNBQUE7QUNHSjs7QURBRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FDRUo7O0FEQUU7RUFDRSwrQ0FBQTtBQ0VKOztBRERJO0VBQ0UsNkNBQUE7QUNHTjs7QURBRTtFQUNFLCtDQUFBO0FDRUo7O0FEREk7RUFDRSw2Q0FBQTtBQ0dOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbG9naW4vbG9naW4tYmFja2dyb3VuZC12aWRlby9sb2dpbi1iYWNrZ3JvdW5kLXZpZGVvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogbm9uZTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxudmlkZW8jYmd2aWQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHotaW5kZXg6IC0xMDA7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4ubG9nbyB7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5idXR0b25zIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICB3aWR0aDogOTAlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xyXG5cclxuICBpb24tYnV0dG9uIHtcclxuICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLmxvZ2luLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogM3JlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5mYWNlYm9vayB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoNTksIDg5LCAxNTIsIDAuNykgIWltcG9ydGFudDtcclxuICAgICYuYWN0aXZhdGVkIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDU5LCA4OSwgMTUyLCAxKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuICAuZ29vZ2xlIHtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiYSgyMTksIDY4LCA1NSwgMC43KSAhaW1wb3J0YW50O1xyXG4gICAgJi5hY3RpdmF0ZWQge1xyXG4gICAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjE5LCA2OCwgNTUsIDEpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxudmlkZW8jYmd2aWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgei1pbmRleDogLTEwMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5sb2dvIHtcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZy10b3A6IDUwcHg7XG59XG5cbi5idXR0b25zIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xufVxuLmJ1dHRvbnMgaW9uLWJ1dHRvbiB7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuLmJ1dHRvbnMgLmxvZ2luLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDNyZW07XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xufVxuLmJ1dHRvbnMgLmZhY2Vib29rIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDU5LCA4OSwgMTUyLCAwLjcpICFpbXBvcnRhbnQ7XG59XG4uYnV0dG9ucyAuZmFjZWJvb2suYWN0aXZhdGVkIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDU5LCA4OSwgMTUyLCAxKSAhaW1wb3J0YW50O1xufVxuLmJ1dHRvbnMgLmdvb2dsZSB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyMTksIDY4LCA1NSwgMC43KSAhaW1wb3J0YW50O1xufVxuLmJ1dHRvbnMgLmdvb2dsZS5hY3RpdmF0ZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMjE5LCA2OCwgNTUsIDEpICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/yannbf/components/login/login-background-video/login-background-video.page.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/login/login-background-video/login-background-video.page.ts ***!
  \*****************************************************************************************************/
/*! exports provided: LoginBackgroundVideoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginBackgroundVideoPage", function() { return LoginBackgroundVideoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginBackgroundVideoPage = /** @class */ (function () {
    function LoginBackgroundVideoPage() {
    }
    LoginBackgroundVideoPage.prototype.ngOnInit = function () {
    };
    // It's interesting to remove the src and put it back
    // when entering and leaving the page so there are no memory leaks.
    LoginBackgroundVideoPage.prototype.ionViewWillLeave = function () {
        // the .nativeElement property of the ViewChild is the reference to the tag <video>
        this.player.nativeElement.src = '';
        this.player.nativeElement.load();
    };
    LoginBackgroundVideoPage.prototype.ionViewWillEnter = function () {
        this.player.nativeElement.src = 'assets/yannbf/video/background-480.mp4';
        this.player.nativeElement.load();
    };
    LoginBackgroundVideoPage.prototype.ionViewDidLoad = function () {
        console.log('Hello LoginBackgroundVideo Page');
    };
    LoginBackgroundVideoPage.prototype.goToSignup = function () {
        console.log('Signup clicked');
    };
    LoginBackgroundVideoPage.prototype.goToLogin = function () {
        console.log('Login clicked');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('player', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LoginBackgroundVideoPage.prototype, "player", void 0);
    LoginBackgroundVideoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-background-video',
            template: __webpack_require__(/*! raw-loader!./login-background-video.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/yannbf/components/login/login-background-video/login-background-video.page.html"),
            styles: [__webpack_require__(/*! ./login-background-video.page.scss */ "./src/app/pages/yannbf/components/login/login-background-video/login-background-video.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginBackgroundVideoPage);
    return LoginBackgroundVideoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-yannbf-components-login-login-background-video-login-background-video-module-es5.js.map