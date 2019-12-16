var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-login-login-slider-login-slider-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/login/login-slider/login-slider.page.html": 
        /*!*************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/login/login-slider/login-slider.page.html ***!
          \*************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n\r\n  <ion-slides #slider class=\"content-slider\" direction=\"vertical\">\r\n    <ion-slide>\r\n      <!-- <div class=\"ion-padding\">\r\n        <img class=\"logo\" src=\"assets/yannbf/img/logo/logo-pr.png\" />\r\n         <ion-slides class=\"text-slider\" >\r\n          <ion-slide>\r\n            <h3> Really nice stuff </h3>\r\n          </ion-slide>\r\n          <ion-slide>\r\n            <img src=\"assets/yannbf/img/misc/emoji.png\" />\r\n          </ion-slide>\r\n          <ion-slide>\r\n            <h3> Unique experiences given to you for just a couple bucks </h3>\r\n          </ion-slide>\r\n          <ion-slide>\r\n            <h3> Share what you love </h3>\r\n          </ion-slide>\r\n        </ion-slides> \r\n        <ion-grid >\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <ion-button shape=\"round\" color=\"light\" class=\"login-button\" (click)=\"goToLogin()\">SIGN IN</ion-button>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              <ion-button shape=\"round\" color=\"light\" class=\"login-button\" (click)=\"goToSignup()\">SIGN UP</ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div> -->\r\n\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <img class=\"logo\" src=\"assets/yannbf/img/logo/logo-pr.png\" />\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n      \r\n\r\n        <ion-row class=\"group-btn\">\r\n          <ion-col size=\"6\">\r\n            <ion-button shape=\"round\" color=\"light\" class=\"login-button\" (click)=\"goToLogin()\">SIGN IN</ion-button>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-button shape=\"round\" color=\"light\" class=\"login-button\" (click)=\"goToSignup()\">SIGN UP</ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n    </ion-slide>\r\n    <ion-slide class=\"zoom swiper-no-swiping\">\r\n      <ion-slides #innerSlider class=\"content-slider\">\r\n        <ion-slide class=\"swiper-no-swiping\">\r\n          <div style=\"padding: 20% 32px 32px 32px\">\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Username</ion-label>\r\n              <ion-input type=\"text\"></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Password</ion-label>\r\n              <ion-input type=\"password\"></ion-input>\r\n            </ion-item>\r\n            <ion-button expand=\"block\" shape=\"round\" (click)=\"login()\" color=\"light\" class=\"login-button\">Login\r\n            </ion-button>\r\n            <ion-button fill=\"clear\" (click)=\"slideNext()\" color=\"light\" class=\"forgot-button\">FORGOT PASSWORD?\r\n            </ion-button>\r\n          </div>\r\n          <ion-button fill=\"clear\" (click)=\"goToSignup()\" class=\"slide-button position-bottom\">GO TO SIGNUP<ion-icon\r\n              name=\"arrow-down\"></ion-icon>\r\n          </ion-button>\r\n        </ion-slide>\r\n        <ion-slide class=\"swiper-no-swiping\">\r\n          <div style=\"padding: 20% 32px 32px 32px\">\r\n            <ion-item>\r\n              <ion-label floating>E-mail</ion-label>\r\n              <ion-input type=\"email\"></ion-input>\r\n            </ion-item>\r\n            <ion-button expand=\"block\" shape=\"round\" (click)=\"resetPassword()\" color=\"light\" class=\"login-button\">RESET\r\n              PASSWORD</ion-button>\r\n            <ion-button fill=\"clear\" (click)=\"slidePrevious()\" color=\"light\" class=\"goback-button\">\r\n              <ion-icon name=\"arrow-back\"></ion-icon> GO BACK\r\n            </ion-button>\r\n          </div>\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </ion-slide>\r\n    <ion-slide class=\"zoom swiper-no-swiping\">\r\n      <ion-button fill=\"clear\" (click)=\"goToLogin()\" class=\"slide-button\">\r\n        GO TO LOGIN\r\n        <ion-icon name=\"arrow-up\"></ion-icon>\r\n      </ion-button>\r\n      <div style=\"padding: 32px\">\r\n        <ion-item>\r\n          <ion-label floating>Username</ion-label>\r\n          <ion-input type=\"text\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label floating>Password</ion-label>\r\n          <ion-input type=\"password\"></ion-input>\r\n        </ion-item>\r\n        <ion-item class=\"margin-bottom\">\r\n          <ion-label floating>Confirm Password</ion-label>\r\n          <ion-input type=\"password\"></ion-input>\r\n        </ion-item>\r\n        <ion-button expand=\"block\" shape=\"round\" (click)=\"signup()\" color=\"light\" class=\"login-button\">SIGN UP\r\n        </ion-button>\r\n      </div>\r\n    </ion-slide>\r\n  </ion-slides>\r\n</ion-content>");
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/login/login-slider/login-slider.module.ts": 
        /*!***********************************************************************************!*\
          !*** ./src/app/pages/yannbf/components/login/login-slider/login-slider.module.ts ***!
          \***********************************************************************************/
        /*! exports provided: LoginSliderPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSliderPageModule", function () { return LoginSliderPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
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
                return LoginSliderPageModule;
            }());
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
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/login/login-slider/login-slider.page.scss": 
        /*!***********************************************************************************!*\
          !*** ./src/app/pages/yannbf/components/login/login-slider/login-slider.page.scss ***!
          \***********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: transparent !important;\n}\n\nion-content {\n  --background: none;\n  background-image: url(\"/assets/yannbf/img/background/background-6.jpg\");\n  background-position: center top;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.content-slider ion-slides,\n.content-slider .swiper-container {\n  height: 100%;\n  width: auto;\n}\n\n.zoom .slide-zoom {\n  height: 100%;\n}\n\n.scroll-content {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n\n.logo {\n  width: 100%;\n  max-width: 19em;\n  height: auto;\n  margin: 0 auto;\n}\n\nion-row {\n  align-items: center;\n  text-align: center;\n}\n\nion-col {\n  padding: 0 20px;\n}\n\nspan,\np,\nh3 {\n  color: white;\n}\n\nion-label,\n.input-has-focus {\n  color: #fff !important;\n}\n\nion-item {\n  border-radius: 3px !important;\n  padding-right: 16px !important;\n  margin-bottom: 5px !important;\n  --color: #fff !important;\n  --background: transparent !important;\n  font-size: 0.9em;\n}\n\n.margin-bottom {\n  margin-bottom: 15px !important;\n}\n\n::-webkit-input-placeholder {\n  color: white !important;\n}\n\n.item-inner {\n  border-bottom: 2px solid white !important;\n  box-shadow: none !important;\n}\n\n.login-button {\n  width: 100%;\n  height: 50px;\n  font-size: 1.2em;\n}\n\n.login-button span {\n  color: #18485a !important;\n}\n\n.forgot-button {\n  font-weight: bold;\n  float: right;\n}\n\n.forgot-button ion-icon {\n  padding-left: 10px;\n  font-size: 2.2rem;\n}\n\n.goback-button {\n  font-weight: bold;\n  float: left;\n}\n\n.goback-button ion-icon {\n  padding-right: 10px;\n  font-size: 2.2rem;\n}\n\n.slide-button {\n  margin-top: 4rem;\n  font-weight: bold;\n}\n\n.slide-button ion-icon {\n  padding-left: 10px;\n  font-size: 2.2rem;\n}\n\n.position-bottom {\n  position: absolute;\n  left: 0;\n  bottom: 10px;\n  right: 0;\n  margin: 0 auto;\n  width: 200px;\n}\n\n.group-btn {\n  margin-top: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbG9naW4vbG9naW4tc2xpZGVyL0M6XFxVc2Vyc1xcc2FiYWRpXFxEb2N1bWVudHNcXFByb2pldG9zXFxfaW9uaWNcXGlvbmljNC1jb21wb25lbnRzL3NyY1xcYXBwXFxwYWdlc1xceWFubmJmXFxjb21wb25lbnRzXFxsb2dpblxcbG9naW4tc2xpZGVyXFxsb2dpbi1zbGlkZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy9sb2dpbi9sb2dpbi1zbGlkZXIvbG9naW4tc2xpZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG9DQUFBO0FDREY7O0FES0E7RUFDRSxrQkFBQTtFQUNBLHVFQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDRkY7O0FEU0U7O0VBRUUsWUFBQTtFQUNBLFdBQUE7QUNOSjs7QURlQTtFQUNFLFlBQUE7QUNaRjs7QURlQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDWkY7O0FEY0E7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDWEY7O0FEYUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FDVkY7O0FEWUE7RUFDRSxlQUFBO0FDVEY7O0FEV0E7OztFQUdFLFlBQUE7QUNSRjs7QURXQTs7RUFFRSxzQkFBQTtBQ1JGOztBRFVBO0VBQ0UsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FDUEY7O0FEU0E7RUFDRSw4QkFBQTtBQ05GOztBRFFBO0VBQ0UsdUJBQUE7QUNMRjs7QURPQTtFQUNFLHlDQUFBO0VBQ0EsMkJBQUE7QUNKRjs7QURPQTtFQUNFLFdBQUE7RUFFQSxZQUFBO0VBQ0EsZ0JBQUE7QUNMRjs7QURNRTtFQUNFLHlCQUFBO0FDSko7O0FET0E7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUNKRjs7QURLRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUNISjs7QURNQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQ0hGOztBRElFO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQ0ZKOztBREtBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ0ZGOztBREdFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQ0RKOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0RGOztBRElBO0VBQ0UsZUFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbG9naW4vbG9naW4tc2xpZGVyL2xvZ2luLXNsaWRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmFzZS1jb2xvcjogcmdiKDI0LCA3MiwgOTApO1xyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG4vLyBGdWxsc2NyZWVuIGNlbnRlcmVkIGltYWdlIGJhY2tncm91bmRcclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy95YW5uYmYvaW1nL2JhY2tncm91bmQvYmFja2dyb3VuZC02LmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuXHJcblxyXG4vLyBTbGlkZXJcclxuLmNvbnRlbnQtc2xpZGVyIHtcclxuICBpb24tc2xpZGVzLFxyXG4gIC5zd2lwZXItY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gIH1cclxufVxyXG4udGV4dC1zbGlkZXIge1xyXG4gIGlvbi1zbGlkZXMge1xyXG4gICAgLy8gaGVpZ2h0OiAyMHZoO1xyXG4gICAgLy8gd2lkdGg6IGF1dG87XHJcbiAgfVxyXG59XHJcbi56b29tIC5zbGlkZS16b29tIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLy8gQ29udGVudFxyXG4uc2Nyb2xsLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5sb2dvIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDE5ZW07XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbmlvbi1yb3cge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmlvbi1jb2wge1xyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxufVxyXG5zcGFuLFxyXG5wLFxyXG5oMyB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi8vIElucHV0IGl0ZW1zXHJcbmlvbi1sYWJlbCxcclxuLmlucHV0LWhhcy1mb2N1cyB7XHJcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG5pb24taXRlbSB7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1yaWdodDogMTZweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xyXG4gIC0tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAwLjllbTtcclxufVxyXG4ubWFyZ2luLWJvdHRvbSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLml0ZW0taW5uZXIge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4vL1xyXG4ubG9naW4tYnV0dG9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICAvLyBtYXgtd2lkdGg6IDQwcmVtO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG4gIHNwYW4ge1xyXG4gICAgY29sb3I6ICRiYXNlLWNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbi5mb3Jnb3QtYnV0dG9uIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgaW9uLWljb24ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgfVxyXG59XHJcbi5nb2JhY2stYnV0dG9uIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmbG9hdDogbGVmdDtcclxuICBpb24taWNvbiB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgfVxyXG59XHJcbi5zbGlkZS1idXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDRyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgaW9uLWljb24ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgfVxyXG59XHJcbi5wb3NpdGlvbi1ib3R0b20ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMTBweDtcclxuICByaWdodDogMDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5ncm91cC1idG57XHJcbiAgbWFyZ2luLXRvcDogNTAlO1xyXG59XHJcbiIsImlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy95YW5uYmYvaW1nL2JhY2tncm91bmQvYmFja2dyb3VuZC02LmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmNvbnRlbnQtc2xpZGVyIGlvbi1zbGlkZXMsXG4uY29udGVudC1zbGlkZXIgLnN3aXBlci1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG4uem9vbSAuc2xpZGUtem9vbSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNjcm9sbC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmxvZ28ge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxOWVtO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5pb24tcm93IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tY29sIHtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuXG5zcGFuLFxucCxcbmgzIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tbGFiZWwsXG4uaW5wdXQtaGFzLWZvY3VzIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuaW9uLWl0ZW0ge1xuICBib3JkZXItcmFkaXVzOiAzcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMTZweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtcbiAgLS1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59XG5cbi5tYXJnaW4tYm90dG9tIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xufVxuXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLml0ZW0taW5uZXIge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ubG9naW4tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cbi5sb2dpbi1idXR0b24gc3BhbiB7XG4gIGNvbG9yOiAjMTg0ODVhICFpbXBvcnRhbnQ7XG59XG5cbi5mb3Jnb3QtYnV0dG9uIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5mb3Jnb3QtYnV0dG9uIGlvbi1pY29uIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDIuMnJlbTtcbn1cblxuLmdvYmFjay1idXR0b24ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4uZ29iYWNrLWJ1dHRvbiBpb24taWNvbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xufVxuXG4uc2xpZGUtYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogNHJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc2xpZGUtYnV0dG9uIGlvbi1pY29uIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDIuMnJlbTtcbn1cblxuLnBvc2l0aW9uLWJvdHRvbSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAxMHB4O1xuICByaWdodDogMDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLmdyb3VwLWJ0biB7XG4gIG1hcmdpbi10b3A6IDUwJTtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/login/login-slider/login-slider.page.ts": 
        /*!*********************************************************************************!*\
          !*** ./src/app/pages/yannbf/components/login/login-slider/login-slider.page.ts ***!
          \*********************************************************************************/
        /*! exports provided: LoginSliderPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSliderPage", function () { return LoginSliderPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
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
                        return __generator(this, function (_a) {
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
                                            return __generator(this, function (_a) {
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
                return LoginSliderPage;
            }());
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
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login-slider.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/login/login-slider/login-slider.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login-slider.page.scss */ "./src/app/pages/yannbf/components/login/login-slider/login-slider.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
            ], LoginSliderPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-yannbf-components-login-login-slider-login-slider-module-es2015.js.map
//# sourceMappingURL=pages-yannbf-components-login-login-slider-login-slider-module-es5.js.map
//# sourceMappingURL=pages-yannbf-components-login-login-slider-login-slider-module-es5.js.map