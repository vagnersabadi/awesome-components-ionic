(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-login-login-instagram-login-instagram-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/yannbf/components/login/login-instagram/login-instagram.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/yannbf/components/login/login-instagram/login-instagram.page.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Login Instagram</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding \">\r\n\r\n  <img class=\"logo\" src=\"assets/yannbf/img/logo/logo-instagram.png\" />\r\n  <div class=\"ion-padding\">\r\n    <ion-item>\r\n      <ion-input type=\"text\" placeholder=\"Username\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-input type=\"password\" placeholder=\"Password\"></ion-input>\r\n    </ion-item>\r\n    <ion-button expand=\"block\" fill=\"outline\" (click)=\"login()\" color=\"light\" class=\"login-button\">Login</ion-button>\r\n  </div>\r\n  <div class=\"strike\">\r\n    <span>OR</span>\r\n  </div>\r\n  <ion-button expand=\"block\" fill=\"clear\" (click)=\"login()\" color=\"light\" class=\"login-button\">\r\n    <ion-icon name=\"logo-facebook\"></ion-icon> Login with Facebook\r\n  </ion-button>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar class=\"footer\">\r\n    <div (click)=\"goToSignup()\">\r\n      <span>Don't have an account? <strong>Sign up here</strong>.</span>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/yannbf/components/login/login-instagram/login-instagram.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/login/login-instagram/login-instagram.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: LoginInstagramPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginInstagramPageModule", function() { return LoginInstagramPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_instagram_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-instagram.page */ "./src/app/pages/yannbf/components/login/login-instagram/login-instagram.page.ts");







var routes = [
    {
        path: '',
        component: _login_instagram_page__WEBPACK_IMPORTED_MODULE_6__["LoginInstagramPage"]
    }
];
var LoginInstagramPageModule = /** @class */ (function () {
    function LoginInstagramPageModule() {
    }
    LoginInstagramPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_instagram_page__WEBPACK_IMPORTED_MODULE_6__["LoginInstagramPage"]]
        })
    ], LoginInstagramPageModule);
    return LoginInstagramPageModule;
}());



/***/ }),

/***/ "./src/app/pages/yannbf/components/login/login-instagram/login-instagram.page.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/login/login-instagram/login-instagram.page.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span {\n  color: white;\n}\n\n.header-md::after,\n.toolbar-background-ios {\n  background-image: none;\n  border-bottom: 0;\n}\n\nion-footer {\n  height: 47px;\n}\n\n.footer {\n  text-align: center;\n  background: rgba(255, 255, 255, 0.06);\n  min-height: 47px;\n}\n\n.footer-md::before {\n  border-top: 1px solid rgba(255, 255, 255, 0.6);\n  background-image: none;\n}\n\nion-content {\n  --background: none;\n  background: linear-gradient(316deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);\n  background-size: 1800% 1800%;\n  -webkit-animation: rainbow 30s linear infinite;\n          animation: rainbow 30s linear infinite;\n  text-align: center;\n}\n\n@-webkit-keyframes rainbow {\n  0% {\n    background-position: 0% 0%;\n  }\n  50% {\n    background-position: 100% 100%;\n  }\n  100% {\n    background-position: 0% 0%;\n  }\n}\n\n@keyframes rainbow {\n  0% {\n    background-position: 0% 0%;\n  }\n  50% {\n    background-position: 100% 100%;\n  }\n  100% {\n    background-position: 0% 0%;\n  }\n}\n\n.logo {\n  width: 50%;\n  height: auto;\n  margin: 0 auto;\n  padding-top: 50px;\n}\n\nion-item {\n  border-radius: 3px !important;\n  padding-left: 10px !important;\n  margin-bottom: 15px !important;\n  margin-bottom: 10px;\n  --color: #fff !important;\n  --background: rgba(255, 255, 255, 0.2) !important;\n  font-size: 0.9em;\n}\n\n::-webkit-input-placeholder {\n  color: white !important;\n}\n\n.login-button {\n  text-transform: none;\n  border-radius: 3px !important;\n}\n\nion-icon {\n  padding-right: 10px;\n  font-size: 2.2rem;\n}\n\n.strike {\n  display: block;\n  text-align: center;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.strike > span {\n  position: relative;\n  display: inline-block;\n  font-weight: bold;\n}\n\n.strike > span:before,\n.strike > span:after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  width: 9999px;\n  height: 1px;\n  background: rgba(255, 255, 255, 0.6);\n}\n\n.strike > span:before {\n  right: 100%;\n  margin-right: 15px;\n}\n\n.strike > span:after {\n  left: 100%;\n  margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbG9naW4vbG9naW4taW5zdGFncmFtL0M6XFxVc2Vyc1xcc2FiYWRpXFxEb2N1bWVudHNcXFByb2pldG9zXFxfaW9uaWNcXGlvbmljNC1jb21wb25lbnRzL3NyY1xcYXBwXFxwYWdlc1xceWFubmJmXFxjb21wb25lbnRzXFxsb2dpblxcbG9naW4taW5zdGFncmFtXFxsb2dpbi1pbnN0YWdyYW0ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy9sb2dpbi9sb2dpbi1pbnN0YWdyYW0vbG9naW4taW5zdGFncmFtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLFlBQUE7QUNGRjs7QURLQTs7RUFFRSxzQkFBQTtFQUNBLGdCQUFBO0FDRkY7O0FES0E7RUFDRSxZQUFBO0FDRkY7O0FESUE7RUFDRSxrQkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURHQTtFQUNFLDhDQUFBO0VBQ0Esc0JBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0Esb0hBQUE7RUFDQSw0QkFBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREVBO0VBQ0U7SUFDRSwwQkFBQTtFQ0NGO0VEQ0E7SUFDRSw4QkFBQTtFQ0NGO0VEQ0E7SUFDRSwwQkFBQTtFQ0NGO0FBQ0Y7O0FEVkE7RUFDRTtJQUNFLDBCQUFBO0VDQ0Y7RURDQTtJQUNFLDhCQUFBO0VDQ0Y7RURDQTtJQUNFLDBCQUFBO0VDQ0Y7QUFDRjs7QURFQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsaURBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREVBO0VBQ0UsdUJBQUE7QUNDRjs7QURHQTtFQUNFLG9CQUFBO0VBQ0EsNkJBQUE7QUNBRjs7QURHQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ0NGOztBRENBOztFQUVFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQTlGa0I7QUNnR3BCOztBREFBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDR0Y7O0FEREE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7QUNJRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL2xvZ2luL2xvZ2luLWluc3RhZ3JhbS9sb2dpbi1pbnN0YWdyYW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHRyYW5zcGFyZW50LXdoaXRlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XHJcbi8vIFRoaXMgaXMganVzdCB0byBtYWtlIHRoZSBoZWFkZXIgdHJhbnNwYXJlbnQgYW5kIGJ1dHRvbi9pY29uIHdpdGggd2hpdGUgY29sb3JcclxuXHJcbnNwYW4ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmhlYWRlci1tZDo6YWZ0ZXIsXHJcbi50b29sYmFyLWJhY2tncm91bmQtaW9zIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDA7XHJcbn1cclxuLy8gRm9vdGVyXHJcbmlvbi1mb290ZXIge1xyXG4gIGhlaWdodDogNDdweDtcclxufVxyXG4uZm9vdGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA2KTtcclxuICBtaW4taGVpZ2h0OiA0N3B4O1xyXG59XHJcbi5mb290ZXItbWQ6OmJlZm9yZSB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICR0cmFuc3BhcmVudC13aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG59XHJcbi8vIEZ1bGxzY3JlZW4gYW5pbWF0ZWQgcmFpbmJvdyBncmFkaWVudFxyXG5pb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTZkZWcsICNmZjI0MDAsICNlODFkMWQsICNlOGI3MWQsICNlM2U4MWQsICMxZGU4NDAsICMxZGRkZTgsICMyYjFkZTgsICNkZDAwZjMsICNkZDAwZjMpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTgwMCUgMTgwMCU7XHJcbiAgYW5pbWF0aW9uOiByYWluYm93IDMwcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbkBrZXlmcmFtZXMgcmFpbmJvdyB7XHJcbiAgMCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMCU7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDEwMCU7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMCU7XHJcbiAgfVxyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbn1cclxuLy8gSW5wdXQgaXRlbXNcclxuaW9uLWl0ZW0ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIC0tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMC45ZW07XHJcbn1cclxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLy8gLS1cclxuLmxvZ2luLWJ1dHRvbiB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLy8gRmFjZWJvb2sgaWNvblxyXG5pb24taWNvbiB7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICBmb250LXNpemU6IDIuMnJlbTtcclxufVxyXG4vLyBIUiB3aXRoIHRleHQgaW4gdGhlIG1pZGRsZSBlZmZlY3RcclxuLnN0cmlrZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG4uc3RyaWtlID4gc3BhbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uc3RyaWtlID4gc3BhbjpiZWZvcmUsXHJcbi5zdHJpa2UgPiBzcGFuOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICB3aWR0aDogOTk5OXB4O1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGJhY2tncm91bmQ6ICR0cmFuc3BhcmVudC13aGl0ZTtcclxufVxyXG4uc3RyaWtlID4gc3BhbjpiZWZvcmUge1xyXG4gIHJpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG4uc3RyaWtlID4gc3BhbjphZnRlciB7XHJcbiAgbGVmdDogMTAwJTtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG4iLCJzcGFuIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaGVhZGVyLW1kOjphZnRlcixcbi50b29sYmFyLWJhY2tncm91bmQtaW9zIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIGhlaWdodDogNDdweDtcbn1cblxuLmZvb3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA2KTtcbiAgbWluLWhlaWdodDogNDdweDtcbn1cblxuLmZvb3Rlci1tZDo6YmVmb3JlIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTZkZWcsICNmZjI0MDAsICNlODFkMWQsICNlOGI3MWQsICNlM2U4MWQsICMxZGU4NDAsICMxZGRkZTgsICMyYjFkZTgsICNkZDAwZjMsICNkZDAwZjMpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDE4MDAlIDE4MDAlO1xuICBhbmltYXRpb246IHJhaW5ib3cgMzBzIGxpbmVhciBpbmZpbml0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5Aa2V5ZnJhbWVzIHJhaW5ib3cge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMCU7XG4gIH1cbiAgNTAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDEwMCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMCU7XG4gIH1cbn1cbi5sb2dvIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZy10b3A6IDUwcHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIC0tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAwLjllbTtcbn1cblxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5sb2dpbi1idXR0b24ge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pY29uIHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgZm9udC1zaXplOiAyLjJyZW07XG59XG5cbi5zdHJpa2Uge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uc3RyaWtlID4gc3BhbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnN0cmlrZSA+IHNwYW46YmVmb3JlLFxuLnN0cmlrZSA+IHNwYW46YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB3aWR0aDogOTk5OXB4O1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xufVxuXG4uc3RyaWtlID4gc3BhbjpiZWZvcmUge1xuICByaWdodDogMTAwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uc3RyaWtlID4gc3BhbjphZnRlciB7XG4gIGxlZnQ6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/yannbf/components/login/login-instagram/login-instagram.page.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/login/login-instagram/login-instagram.page.ts ***!
  \***************************************************************************************/
/*! exports provided: LoginInstagramPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginInstagramPage", function() { return LoginInstagramPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var LoginInstagramPage = /** @class */ (function () {
    function LoginInstagramPage(loadingCtrl, alertCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        // Gradient logic from https://codepen.io/quasimondo/pen/lDdrF
        // NOTE: I'm not using this logic anymore, but if you want to use somehow, somewhere,
        // A programmatically way to make a nice rainbow effect, there you go.
        // NOTE: It probably won't work because it will crash your phone as this method is heavy \o/
        this.colors = new Array([62, 35, 255], [60, 255, 60], [255, 35, 98], [45, 175, 230], [255, 0, 255], [255, 128, 0]);
        this.step = 0;
        // color table indices for:
        // [current color left,next color left,current color right,next color right]
        this.colorIndices = [0, 1, 2, 3];
        // transition speed
        this.gradientSpeed = 0.00005;
        this.gradient = '';
    }
    LoginInstagramPage.prototype.ngOnInit = function () { };
    LoginInstagramPage.prototype.login = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            duration: 500,
                            message: 'Please wait...',
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
    LoginInstagramPage.prototype.goToSignup = function () { };
    LoginInstagramPage.prototype.updateGradient = function () {
        var _this = this;
        var c00 = this.colors[this.colorIndices[0]];
        var c01 = this.colors[this.colorIndices[1]];
        var c10 = this.colors[this.colorIndices[2]];
        var c11 = this.colors[this.colorIndices[3]];
        var istep = 1 - this.step;
        var r1 = Math.round(istep * c00[0] + this.step * c01[0]);
        var g1 = Math.round(istep * c00[1] + this.step * c01[1]);
        var b1 = Math.round(istep * c00[2] + this.step * c01[2]);
        var color1 = 'rgb(' + r1 + ',' + g1 + ',' + b1 + ')';
        var r2 = Math.round(istep * c10[0] + this.step * c11[0]);
        var g2 = Math.round(istep * c10[1] + this.step * c11[1]);
        var b2 = Math.round(istep * c10[2] + this.step * c11[2]);
        var color2 = 'rgb(' + r2 + ',' + g2 + ',' + b2 + ')';
        this.gradient = "-webkit-gradient(linear, left top, right bottom, from(" + color1 + "), to(" + color2 + "))";
        this.step += this.gradientSpeed;
        if (this.step >= 1) {
            this.step %= 1;
            this.colorIndices[0] = this.colorIndices[1];
            this.colorIndices[2] = this.colorIndices[3];
            // pick two new target color indices
            // do not pick the same as the current one
            this.colorIndices[1] =
                (this.colorIndices[1] + Math.floor(1 + Math.random() * (this.colors.length - 1)))
                    % this.colors.length;
            this.colorIndices[3] =
                (this.colorIndices[3] + Math.floor(1 + Math.random() * (this.colors.length - 1)))
                    % this.colors.length;
        }
        setInterval(function () { _this.updateGradient(); }, 40);
    };
    LoginInstagramPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
    ]; };
    LoginInstagramPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-instagram',
            template: __webpack_require__(/*! raw-loader!./login-instagram.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/yannbf/components/login/login-instagram/login-instagram.page.html"),
            styles: [__webpack_require__(/*! ./login-instagram.page.scss */ "./src/app/pages/yannbf/components/login/login-instagram/login-instagram.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], LoginInstagramPage);
    return LoginInstagramPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-yannbf-components-login-login-instagram-login-instagram-module-es5.js.map