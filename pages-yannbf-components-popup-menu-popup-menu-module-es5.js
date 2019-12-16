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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-popup-menu-popup-menu-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/popup-menu/popup-menu-one/popup-menu-one.page.html": 
        /*!**********************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/popup-menu/popup-menu-one/popup-menu-one.page.html ***!
          \**********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"modalCtrl.dismiss()\" fill=\"clear\">\r\n        <ion-icon name=\"arrow-back\" slot=\"icon-only\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Popup Menu One</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <div class=\"popup-menu\">\r\n    <div class=\"popup-menu-toggle\" [ngClass]=\"{'out': openMenu}\" (click)=\"togglePopupMenu()\">\r\n      <ion-icon name=\"home\"></ion-icon>\r\n    </div>\r\n    <div class=\"popup-menu-overlay\" [ngClass]=\"{'in': openMenu}\" (click)=\"togglePopupMenu()\"></div>\r\n\r\n    <div class=\"popup-menu-panel\" [ngClass]=\"{'in': openMenu}\">\r\n      <ion-grid class=\"ion-no-padding\">\r\n        <ion-row align-items-center>\r\n          <ion-col size=\"4\" class=\"ion-no-padding\">\r\n            <ion-tab-button (click)=\"goToHome()\">\r\n              <ion-icon name=\"home\"></ion-icon>\r\n              <ion-label>HOME</ion-label>\r\n            </ion-tab-button>\r\n          </ion-col>\r\n          <ion-col size=\"4\" class=\"ion-no-padding\">\r\n            <ion-tab-button (click)=\"goToCups()\">\r\n              <ion-icon name=\"trophy\"></ion-icon>\r\n              <ion-label>CUPS</ion-label>\r\n            </ion-tab-button>\r\n          </ion-col>\r\n          <ion-col size=\"4\" class=\"ion-no-padding\">\r\n            <ion-tab-button (click)=\"goToLeaderboard()\">\r\n              <ion-icon name=\"podium\"></ion-icon>\r\n              <ion-label>LEADERBOARD</ion-label>\r\n            </ion-tab-button>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row align-items-center>\r\n          <ion-col size=\"4\" class=\"ion-no-padding\">\r\n            <ion-tab-button (click)=\"goToHelp()\">\r\n              <ion-icon name=\"help\"></ion-icon>\r\n              <ion-label>HELP</ion-label>\r\n            </ion-tab-button>\r\n          </ion-col>\r\n          <ion-col size=\"4\" class=\"ion-no-padding\">\r\n            <ion-tab-button (click)=\"goToAccount()\">\r\n              <ion-icon name=\"person\"></ion-icon>\r\n              <ion-label>ACCOUNT</ion-label>\r\n            </ion-tab-button>\r\n          </ion-col>\r\n          <ion-col size=\"4\" class=\"ion-no-padding\">\r\n            <ion-tab-button (click)=\"goToShop()\">\r\n              <ion-icon name=\"cart\"></ion-icon>\r\n              <ion-label>SHOP</ion-label>\r\n            </ion-tab-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </div>\r\n</ion-content>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/popup-menu/popup-menu-two/popup-menu-two.page.html": 
        /*!**********************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/popup-menu/popup-menu-two/popup-menu-two.page.html ***!
          \**********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"modalCtrl.dismiss()\" fill=\"clear\">\r\n        <ion-icon name=\"arrow-back\" slot=\"icon-only\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Popup Menu Two</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <div class=\"popup-menu\">\r\n    <div class=\"popup-menu-toggle\" (click)=\"togglePopupMenu()\" [ngClass]=\"{'out': openMenu}\">\r\n      <ion-icon name=\"apps\"></ion-icon>\r\n    </div>\r\n    <div class=\"popup-menu-overlay\" [ngClass]=\"{'in': openMenu}\" (click)=\"togglePopupMenu()\"></div>\r\n    <div class=\"popup-menu-panel\" [ngClass]=\"{'in': openMenu}\">\r\n      <div class=\"popup-menu-item\" (click)=\"goToHome()\">\r\n        <ion-icon name=\"home\"></ion-icon>\r\n        <ion-badge>25</ion-badge>\r\n        <span>HOME</span>\r\n      </div>\r\n      <div class=\"popup-menu-item\" (click)=\"goToCups()\">\r\n        <ion-icon name=\"trophy\"></ion-icon>\r\n        <span>CUPS</span>\r\n      </div>\r\n      <div class=\"popup-menu-item\" (click)=\"goToLeaderboard()\">\r\n        <ion-icon name=\"podium\"></ion-icon>\r\n        <ion-badge>10</ion-badge>\r\n        <span>LEADERBOARD</span>\r\n      </div>\r\n      <div class=\"popup-menu-item\" (click)=\"goToHelp()\">\r\n        <ion-icon name=\"help\"></ion-icon>\r\n        <span>HELP</span>\r\n      </div>\r\n      <div class=\"popup-menu-item\" (click)=\"goToAccount()\">\r\n        <ion-icon name=\"person\"></ion-icon>\r\n        <ion-badge>5</ion-badge>\r\n        <span>ACCOUNT</span>\r\n      </div>\r\n      <div class=\"popup-menu-item\" (click)=\"goToShop()\">\r\n        <ion-icon name=\"cart\"></ion-icon>\r\n        <ion-badge>25</ion-badge>\r\n        <span>SHOP</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/popup-menu/popup-menu.page.html": 
        /*!***************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/popup-menu/popup-menu.page.html ***!
          \***************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Popup Menu</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let item of items\" (click)=\"itemTapped($event, item)\">\r\n      {{item.title}}\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>");
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/popup-menu/popup-menu-one/popup-menu-one.module.ts": 
        /*!********************************************************************************************!*\
          !*** ./src/app/pages/yannbf/components/popup-menu/popup-menu-one/popup-menu-one.module.ts ***!
          \********************************************************************************************/
        /*! exports provided: PopupMenuOnePageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupMenuOnePageModule", function () { return PopupMenuOnePageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _popup_menu_one_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popup-menu-one.page */ "./src/app/pages/yannbf/components/popup-menu/popup-menu-one/popup-menu-one.page.ts");
            var PopupMenuOnePageModule = /** @class */ (function () {
                function PopupMenuOnePageModule() {
                }
                return PopupMenuOnePageModule;
            }());
            PopupMenuOnePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                    ],
                    declarations: [_popup_menu_one_page__WEBPACK_IMPORTED_MODULE_5__["PopupMenuOnePage"]],
                    entryComponents: [_popup_menu_one_page__WEBPACK_IMPORTED_MODULE_5__["PopupMenuOnePage"]]
                })
            ], PopupMenuOnePageModule);
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/popup-menu/popup-menu-one/popup-menu-one.page.scss": 
        /*!********************************************************************************************!*\
          !*** ./src/app/pages/yannbf/components/popup-menu/popup-menu-one/popup-menu-one.page.scss ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".popup-menu ion-icon {\n  color: white;\n  font-size: 2.5em;\n}\n\n.popup-menu ion-label {\n  color: white;\n  font-size: 0.7em;\n}\n\n.popup-menu-overlay {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  z-index: 6;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.15s ease-in-out;\n  background-image: linear-gradient(rgba(68, 68, 68, 0.5) 0%, rgba(68, 68, 68, 0.25) 100%);\n}\n\n.popup-menu-overlay.in {\n  opacity: 1;\n  visibility: visible;\n}\n\n.popup-menu-toggle {\n  position: fixed;\n  width: 40px;\n  height: 40px;\n  bottom: 20px;\n  left: 50%;\n  margin-left: -20px;\n  background-color: #886aea;\n  border: 1px solid #5227e1;\n  z-index: 7;\n  transition: all 0.35s ease-in-out;\n}\n\n.popup-menu-toggle:before {\n  position: absolute;\n  font-family: \"Ionicons\";\n  width: 40px;\n  height: 40px;\n  top: 0px;\n  left: 0px;\n  line-height: 40px;\n  text-align: center;\n  font-size: 28px;\n  color: white;\n  opacity: 1;\n  transition: all 0.35s ease-in-out;\n  transform-origin: 100% 100%;\n  transform: scale(1);\n}\n\n.popup-menu-toggle.out {\n  opacity: 0;\n  visibility: hidden;\n  transform: scale(0);\n  transition: all 0.15s ease-in-out;\n}\n\n.popup-menu-toggle.out:before {\n  transition: all 0.15s ease-in-out;\n  transform: scale(0);\n}\n\n.popup-menu-panel {\n  position: fixed;\n  width: 300px;\n  height: 110px;\n  bottom: 20px;\n  left: 50%;\n  margin-left: -150px;\n  background-color: #886aea;\n  z-index: 8;\n  transition: all 0.35s ease-in-out;\n  transition-delay: 0.15s;\n  transform-origin: 50% 100%;\n  transform: scale(0);\n  display: -moz-flex;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.popup-menu-panel.in {\n  transform: scale(1);\n  transition-delay: 0s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvcG9wdXAtbWVudS9wb3B1cC1tZW51LW9uZS9DOlxcVXNlcnNcXHNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZXRvc1xcX2lvbmljXFxpb25pYzQtY29tcG9uZW50cy9zcmNcXGFwcFxccGFnZXNcXHlhbm5iZlxcY29tcG9uZW50c1xccG9wdXAtbWVudVxccG9wdXAtbWVudS1vbmVcXHBvcHVwLW1lbnUtb25lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvcG9wdXAtbWVudS9wb3B1cC1tZW51LW9uZS9wb3B1cC1tZW51LW9uZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxZQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ0NGOztBRENBO0VBQ0UsZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBRUEsaUNBQUE7RUFFQSx3RkFBQTtBQ0VGOztBREFBO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0FDR0Y7O0FEREE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFFQSxpQ0FBQTtBQ0lGOztBREZBO0VBQ0Usa0JBQUE7RUFFQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBRUEsaUNBQUE7RUFFQSwyQkFBQTtFQUVBLG1CQUFBO0FDSUY7O0FERkE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFFQSxtQkFBQTtFQUVBLGlDQUFBO0FDS0Y7O0FESEE7RUFFRSxpQ0FBQTtFQUVBLG1CQUFBO0FDTUY7O0FESkE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBRUEseUJBQUE7RUFDQSxVQUFBO0VBRUEsaUNBQUE7RUFFQSx1QkFBQTtFQUVBLDBCQUFBO0VBRUEsbUJBQUE7RUFJQSxrQkFBQTtFQUVBLGFBQUE7RUFJQSxlQUFBO0FDTUY7O0FESEE7RUFFRSxtQkFBQTtFQUVBLG9CQUFBO0FDTUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy9wb3B1cC1tZW51L3BvcHVwLW1lbnUtb25lL3BvcHVwLW1lbnUtb25lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3B1cC1tZW51IGlvbi1pY29uIHtcclxuICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMi41ZW07XHJcbn1cclxuLnBvcHVwLW1lbnUgaW9uLWxhYmVsIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAwLjdlbTtcclxufVxyXG4ucG9wdXAtbWVudS1vdmVybGF5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHJpZ2h0OiAwcHg7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgei1pbmRleDogNjtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmdiYSg2OCwgNjgsIDY4LCAwLjUpIDAlLCByZ2JhKDY4LCA2OCwgNjgsIDAuMjUpIDEwMCUpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDY4LCA2OCwgNjgsIDAuNSkgMCUsIHJnYmEoNjgsIDY4LCA2OCwgMC4yNSkgMTAwJSk7XHJcbn1cclxuLnBvcHVwLW1lbnUtb3ZlcmxheS5pbiB7XHJcbiAgb3BhY2l0eTogMTtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcbi5wb3B1cC1tZW51LXRvZ2dsZSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3R0b206IDIwcHg7XHJcbiAgbGVmdDogNTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg2YWVhO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM1MjI3ZTE7XHJcbiAgei1pbmRleDogNztcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjM1cyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLnBvcHVwLW1lbnUtdG9nZ2xlOmJlZm9yZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8vIGNvbnRlbnQ6IFwiXFxmMzBjXCI7XHJcbiAgZm9udC1mYW1pbHk6IFwiSW9uaWNvbnNcIjtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgdG9wOiAwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zNXMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMzVzIGVhc2UtaW4tb3V0O1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMTAwJTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxufVxyXG4ucG9wdXAtbWVudS10b2dnbGUub3V0IHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLnBvcHVwLW1lbnUtdG9nZ2xlLm91dDpiZWZvcmUge1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxufVxyXG4ucG9wdXAtbWVudS1wYW5lbCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6IDExMHB4O1xyXG4gIGJvdHRvbTogMjBweDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xNTBweDtcclxuICAvLyBwYWRkaW5nOiAwcHggNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4ODZhZWE7XHJcbiAgei1pbmRleDogODtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjM1cyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwLjE1cztcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjE1cztcclxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiAtbW96LWZsZXg7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcclxuICAtbW96LWZsZXgtd3JhcDogd3JhcDtcclxuICAtbXMtZmxleC13cmFwOiB3cmFwO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLnBvcHVwLW1lbnUtcGFuZWwuaW4ge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMHM7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogMHM7XHJcbn1cclxuXHJcbiIsIi5wb3B1cC1tZW51IGlvbi1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIuNWVtO1xufVxuXG4ucG9wdXAtbWVudSBpb24tbGFiZWwge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG59XG5cbi5wb3B1cC1tZW51LW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICB6LWluZGV4OiA2O1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHJnYmEoNjgsIDY4LCA2OCwgMC41KSAwJSwgcmdiYSg2OCwgNjgsIDY4LCAwLjI1KSAxMDAlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoNjgsIDY4LCA2OCwgMC41KSAwJSwgcmdiYSg2OCwgNjgsIDY4LCAwLjI1KSAxMDAlKTtcbn1cblxuLnBvcHVwLW1lbnUtb3ZlcmxheS5pbiB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5wb3B1cC1tZW51LXRvZ2dsZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm90dG9tOiAyMHB4O1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg4NmFlYTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzUyMjdlMTtcbiAgei1pbmRleDogNztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjM1cyBlYXNlLWluLW91dDtcbn1cblxuLnBvcHVwLW1lbnUtdG9nZ2xlOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1mYW1pbHk6IFwiSW9uaWNvbnNcIjtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIG9wYWNpdHk6IDE7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMzVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zNXMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLnBvcHVwLW1lbnUtdG9nZ2xlLm91dCB7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xufVxuXG4ucG9wdXAtbWVudS10b2dnbGUub3V0OmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbn1cblxuLnBvcHVwLW1lbnUtcGFuZWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgYm90dG9tOiAyMHB4O1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMTUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4ODZhZWE7XG4gIHotaW5kZXg6IDg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMzVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zNXMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMC4xNXM7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMTVzO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1vei1mbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XG4gIC1tb3otZmxleC13cmFwOiB3cmFwO1xuICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5wb3B1cC1tZW51LXBhbmVsLmluIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/popup-menu/popup-menu-one/popup-menu-one.page.ts": 
        /*!******************************************************************************************!*\
          !*** ./src/app/pages/yannbf/components/popup-menu/popup-menu-one/popup-menu-one.page.ts ***!
          \******************************************************************************************/
        /*! exports provided: PopupMenuOnePage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupMenuOnePage", function () { return PopupMenuOnePage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            var PopupMenuOnePage = /** @class */ (function () {
                function PopupMenuOnePage(modalCtrl) {
                    this.modalCtrl = modalCtrl;
                    this.openMenu = false;
                }
                PopupMenuOnePage.prototype.ngOnInit = function () {
                };
                PopupMenuOnePage.prototype.dismiss = function () {
                    this.modalCtrl.dismiss();
                };
                PopupMenuOnePage.prototype.togglePopupMenu = function () {
                    return this.openMenu = !this.openMenu;
                };
                PopupMenuOnePage.prototype.goToAccount = function () {
                    alert('Account clicked.');
                    this.togglePopupMenu();
                };
                PopupMenuOnePage.prototype.goToHome = function () {
                    alert('Home clicked.');
                    this.togglePopupMenu();
                };
                PopupMenuOnePage.prototype.goToCups = function () {
                    alert('Cups clicked.');
                    this.togglePopupMenu();
                };
                PopupMenuOnePage.prototype.goToLeaderboard = function () {
                    alert('Leaderboard clicked.');
                    this.togglePopupMenu();
                };
                PopupMenuOnePage.prototype.goToHelp = function () {
                    alert('Help clicked.');
                    this.togglePopupMenu();
                };
                PopupMenuOnePage.prototype.goToShop = function () {
                    alert('Shop clicked.');
                    this.togglePopupMenu();
                };
                return PopupMenuOnePage;
            }());
            PopupMenuOnePage.ctorParameters = function () { return [
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
            ]; };
            PopupMenuOnePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-popup-menu-one',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./popup-menu-one.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/popup-menu/popup-menu-one/popup-menu-one.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./popup-menu-one.page.scss */ "./src/app/pages/yannbf/components/popup-menu/popup-menu-one/popup-menu-one.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
            ], PopupMenuOnePage);
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/popup-menu/popup-menu-two/popup-menu-two.module.ts": 
        /*!********************************************************************************************!*\
          !*** ./src/app/pages/yannbf/components/popup-menu/popup-menu-two/popup-menu-two.module.ts ***!
          \********************************************************************************************/
        /*! exports provided: PopupMenuTwoPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupMenuTwoPageModule", function () { return PopupMenuTwoPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _popup_menu_two_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popup-menu-two.page */ "./src/app/pages/yannbf/components/popup-menu/popup-menu-two/popup-menu-two.page.ts");
            var PopupMenuTwoPageModule = /** @class */ (function () {
                function PopupMenuTwoPageModule() {
                }
                return PopupMenuTwoPageModule;
            }());
            PopupMenuTwoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                    ],
                    declarations: [_popup_menu_two_page__WEBPACK_IMPORTED_MODULE_5__["PopupMenuTwoPage"]],
                    entryComponents: [_popup_menu_two_page__WEBPACK_IMPORTED_MODULE_5__["PopupMenuTwoPage"]]
                })
            ], PopupMenuTwoPageModule);
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/popup-menu/popup-menu-two/popup-menu-two.page.scss": 
        /*!********************************************************************************************!*\
          !*** ./src/app/pages/yannbf/components/popup-menu/popup-menu-two/popup-menu-two.page.scss ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("ion-badge {\n  right: calc(50% - 30px) !important;\n  top: -5px;\n  position: absolute;\n  right: 4%;\n  padding: 1px 6px;\n  height: auto;\n  font-size: 12px;\n  line-height: 16px;\n}\n\n.popup-menu-overlay {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  z-index: 100;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.15s ease-in-out;\n  background-image: linear-gradient(rgba(68, 68, 68, 0.5) 0%, rgba(68, 68, 68, 0.25) 100%);\n}\n\n.popup-menu-overlay.in {\n  opacity: 1;\n  visibility: visible;\n}\n\n.popup-menu-toggle {\n  position: fixed;\n  width: 40px;\n  height: 40px;\n  bottom: 10px;\n  left: 50%;\n  margin-left: -20px;\n  background-color: #0f9d58;\n  border-radius: 50%;\n  z-index: 101;\n  transition: all 0.25s ease-in-out;\n}\n\n.popup-menu-toggle ion-icon {\n  text-align: center;\n  color: white;\n  font-size: 2.5em;\n}\n\n.popup-menu-toggle:before {\n  position: absolute;\n  font-family: \"Ionicons\";\n  width: 40px;\n  height: 40px;\n  top: 0px;\n  left: 0px;\n  line-height: 40px;\n  text-align: center;\n  font-size: 28px;\n  color: white;\n  opacity: 1;\n  transition: all 0.25s ease-in-out;\n  transform-origin: 100% 100%;\n  transform: scale(1);\n}\n\n.popup-menu-toggle.out {\n  opacity: 0;\n  visibility: hidden;\n  transform: scale(0);\n  transition: all 0.15s ease-in-out;\n}\n\n.popup-menu-toggle.out:before {\n  transition: all 0.15s ease-in-out;\n  transform: scale(0);\n}\n\n.popup-menu-panel {\n  position: fixed;\n  width: 300px;\n  height: 180px;\n  border-radius: 5%;\n  bottom: 20px;\n  left: 50%;\n  margin-left: -150px;\n  padding: 0px 5px;\n  background-color: #0f9d58;\n  z-index: 102;\n  transition: all 0.25s ease-in-out;\n  transition-delay: 0.15s;\n  transform-origin: 50% 100%;\n  transform: scale(0);\n  display: -moz-flex;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.popup-menu-panel .popup-menu-item {\n  margin: auto;\n  -moz-flex: 1 0 30%;\n  flex: 1 0 30%;\n  display: -moz-flex;\n  display: flex;\n  -moz-flex-direction: column;\n  flex-direction: column;\n  transform: scale(0);\n  opacity: 0;\n  transition: all 0.25s ease-in-out;\n}\n\n.popup-menu-panel .popup-menu-item ion-icon {\n  text-align: center;\n  color: white;\n  font-size: 2.5em;\n  margin-left: 29px;\n}\n\n.popup-menu-panel .popup-menu-item i {\n  margin: auto 0px 5px 0px;\n  padding: 0px;\n  font-size: 30px;\n  line-height: 30px;\n  text-align: center;\n  color: white;\n}\n\n.popup-menu-panel .popup-menu-item span {\n  padding: 0px;\n  margin: 0px 0px auto 0px;\n  color: white;\n  text-align: center;\n  font-size: 11px;\n  text-transform: uppercase;\n  font-weight: bold;\n  line-height: 11px;\n}\n\n.popup-menu-panel .popup-menu-item:active i {\n  color: #dd4135;\n  transition: all 0.15s;\n}\n\n.popup-menu-panel .popup-menu-item:active span {\n  color: #dd4135;\n  transition: all 0.15s;\n}\n\n.popup-menu-panel.in {\n  transform: scale(1);\n  transition-delay: 0s;\n}\n\n.popup-menu-panel.in .popup-menu-item {\n  transform: scale(1);\n  opacity: 1;\n  transition-delay: 0.15s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvcG9wdXAtbWVudS9wb3B1cC1tZW51LXR3by9DOlxcVXNlcnNcXHNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZXRvc1xcX2lvbmljXFxpb25pYzQtY29tcG9uZW50cy9zcmNcXGFwcFxccGFnZXNcXHlhbm5iZlxcY29tcG9uZW50c1xccG9wdXAtbWVudVxccG9wdXAtbWVudS10d29cXHBvcHVwLW1lbnUtdHdvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvcG9wdXAtbWVudS9wb3B1cC1tZW51LXR3by9wb3B1cC1tZW51LXR3by5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQ0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUVBLGlDQUFBO0VBRUEsd0ZBQUE7QUNDRjs7QURDQTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQ0VGOztBREFBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBRUEsaUNBQUE7QUNHRjs7QURERTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDR0o7O0FEQUE7RUFDRSxrQkFBQTtFQUVBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFFQSxpQ0FBQTtFQUVBLDJCQUFBO0VBRUEsbUJBQUE7QUNFRjs7QURBQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUVBLG1CQUFBO0VBRUEsaUNBQUE7QUNHRjs7QUREQTtFQUVFLGlDQUFBO0VBRUEsbUJBQUE7QUNJRjs7QURGQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBRUEsaUNBQUE7RUFFQSx1QkFBQTtFQUVBLDBCQUFBO0VBRUEsbUJBQUE7RUFJQSxrQkFBQTtFQUVBLGFBQUE7RUFJQSxlQUFBO0FDS0Y7O0FESEE7RUFDRSxZQUFBO0VBSUEsa0JBQUE7RUFFQSxhQUFBO0VBSUEsa0JBQUE7RUFFQSxhQUFBO0VBSUEsMkJBQUE7RUFFQSxzQkFBQTtFQUVBLG1CQUFBO0VBQ0EsVUFBQTtFQUVBLGlDQUFBO0FDTUY7O0FESkU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDTUo7O0FESEE7RUFDRSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNNRjs7QURKQTtFQUNFLFlBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNPRjs7QURMQTtFQUNFLGNBQUE7RUFFQSxxQkFBQTtBQ1FGOztBRE5BO0VBQ0UsY0FBQTtFQUVBLHFCQUFBO0FDU0Y7O0FEUEE7RUFFRSxtQkFBQTtFQUVBLG9CQUFBO0FDVUY7O0FEUkE7RUFFRSxtQkFBQTtFQUNBLFVBQUE7RUFFQSx1QkFBQTtBQ1dGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvcG9wdXAtbWVudS9wb3B1cC1tZW51LXR3by9wb3B1cC1tZW51LXR3by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYmFkZ2Uge1xyXG4gIHJpZ2h0OiBjYWxjKDUwJSAtIDMwcHgpICFpbXBvcnRhbnQ7XHJcbiAgdG9wOiAtNXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogNCU7XHJcbiAgcGFkZGluZzogMXB4IDZweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG59XHJcblxyXG4ucG9wdXAtbWVudS1vdmVybGF5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHJpZ2h0OiAwcHg7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyZ2JhKDY4LCA2OCwgNjgsIDAuNSkgMCUsIHJnYmEoNjgsIDY4LCA2OCwgMC4yNSkgMTAwJSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoNjgsIDY4LCA2OCwgMC41KSAwJSwgcmdiYSg2OCwgNjgsIDY4LCAwLjI1KSAxMDAlKTtcclxufVxyXG4ucG9wdXAtbWVudS1vdmVybGF5LmluIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuLnBvcHVwLW1lbnUtdG9nZ2xlIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvdHRvbTogMTBweDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgMTU3LCA4OCk7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHotaW5kZXg6IDEwMTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gIGlvbi1pY29uIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgfVxyXG59XHJcbi5wb3B1cC1tZW51LXRvZ2dsZTpiZWZvcmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvLyAgIGNvbnRlbnQ6IFwiXFxmMTBhXCI7XHJcbiAgZm9udC1mYW1pbHk6IFwiSW9uaWNvbnNcIjtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgdG9wOiAwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMTAwJTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxufVxyXG4ucG9wdXAtbWVudS10b2dnbGUub3V0IHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLnBvcHVwLW1lbnUtdG9nZ2xlLm91dDpiZWZvcmUge1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxufVxyXG4ucG9wdXAtbWVudS1wYW5lbCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6IDE4MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUlO1xyXG4gIGJvdHRvbTogMjBweDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xNTBweDtcclxuICBwYWRkaW5nOiAwcHggNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgMTU3LCA4OCk7XHJcbiAgei1pbmRleDogMTAyO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcclxuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDAuMTVzO1xyXG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMTVzO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIGRpc3BsYXk6IC1tb3otZmxleDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xyXG4gIC1tb3otZmxleC13cmFwOiB3cmFwO1xyXG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcbi5wb3B1cC1tZW51LXBhbmVsIC5wb3B1cC1tZW51LWl0ZW0ge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICAtd2Via2l0LWJveC1mbGV4OiAxIDAgMzAlO1xyXG4gIC13ZWJraXQtZmxleDogMSAwIDMwJTtcclxuICAtbW96LWJveC1mbGV4OiAxIDAgMzAlO1xyXG4gIC1tb3otZmxleDogMSAwIDMwJTtcclxuICAtbXMtZmxleDogMSAwIDMwJTtcclxuICBmbGV4OiAxIDAgMzAlO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiAtbW96LWZsZXg7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAtbW96LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgaW9uLWljb24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyLjVlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyOXB4O1xyXG4gIH1cclxufVxyXG4ucG9wdXAtbWVudS1wYW5lbCAucG9wdXAtbWVudS1pdGVtIGkge1xyXG4gIG1hcmdpbjogYXV0byAwcHggNXB4IDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnBvcHVwLW1lbnUtcGFuZWwgLnBvcHVwLW1lbnUtaXRlbSBzcGFuIHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgbWFyZ2luOiAwcHggMHB4IGF1dG8gMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbGluZS1oZWlnaHQ6IDExcHg7XHJcbn1cclxuLnBvcHVwLW1lbnUtcGFuZWwgLnBvcHVwLW1lbnUtaXRlbTphY3RpdmUgaSB7XHJcbiAgY29sb3I6IHJnYigyMjEsIDY1LCA1Myk7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xNXM7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xyXG59XHJcbi5wb3B1cC1tZW51LXBhbmVsIC5wb3B1cC1tZW51LWl0ZW06YWN0aXZlIHNwYW4ge1xyXG4gIGNvbG9yOiByZ2IoMjIxLCA2NSwgNTMpO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cztcclxufVxyXG4ucG9wdXAtbWVudS1wYW5lbC5pbiB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwcztcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcclxufVxyXG4ucG9wdXAtbWVudS1wYW5lbC5pbiAucG9wdXAtbWVudS1pdGVtIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICBvcGFjaXR5OiAxO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMC4xNXM7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4xNXM7XHJcbn1cclxuIiwiaW9uLWJhZGdlIHtcbiAgcmlnaHQ6IGNhbGMoNTAlIC0gMzBweCkgIWltcG9ydGFudDtcbiAgdG9wOiAtNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA0JTtcbiAgcGFkZGluZzogMXB4IDZweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuXG4ucG9wdXAtbWVudS1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMHB4O1xuICBib3R0b206IDBweDtcbiAgei1pbmRleDogMTAwO1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHJnYmEoNjgsIDY4LCA2OCwgMC41KSAwJSwgcmdiYSg2OCwgNjgsIDY4LCAwLjI1KSAxMDAlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoNjgsIDY4LCA2OCwgMC41KSAwJSwgcmdiYSg2OCwgNjgsIDY4LCAwLjI1KSAxMDAlKTtcbn1cblxuLnBvcHVwLW1lbnUtb3ZlcmxheS5pbiB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5wb3B1cC1tZW51LXRvZ2dsZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm90dG9tOiAxMHB4O1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmOWQ1ODtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiAxMDE7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XG59XG4ucG9wdXAtbWVudS10b2dnbGUgaW9uLWljb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyLjVlbTtcbn1cblxuLnBvcHVwLW1lbnUtdG9nZ2xlOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1mYW1pbHk6IFwiSW9uaWNvbnNcIjtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIG9wYWNpdHk6IDE7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLnBvcHVwLW1lbnUtdG9nZ2xlLm91dCB7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xufVxuXG4ucG9wdXAtbWVudS10b2dnbGUub3V0OmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbn1cblxuLnBvcHVwLW1lbnUtcGFuZWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAxODBweDtcbiAgYm9yZGVyLXJhZGl1czogNSU7XG4gIGJvdHRvbTogMjBweDtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTE1MHB4O1xuICBwYWRkaW5nOiAwcHggNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGY5ZDU4O1xuICB6LWluZGV4OiAxMDI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMC4xNXM7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMTVzO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1vei1mbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XG4gIC1tb3otZmxleC13cmFwOiB3cmFwO1xuICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5wb3B1cC1tZW51LXBhbmVsIC5wb3B1cC1tZW51LWl0ZW0ge1xuICBtYXJnaW46IGF1dG87XG4gIC13ZWJraXQtYm94LWZsZXg6IDEgMCAzMCU7XG4gIC13ZWJraXQtZmxleDogMSAwIDMwJTtcbiAgLW1vei1ib3gtZmxleDogMSAwIDMwJTtcbiAgLW1vei1mbGV4OiAxIDAgMzAlO1xuICAtbXMtZmxleDogMSAwIDMwJTtcbiAgZmxleDogMSAwIDMwJTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tb3otZmxleDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC1tb3otZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcbn1cbi5wb3B1cC1tZW51LXBhbmVsIC5wb3B1cC1tZW51LWl0ZW0gaW9uLWljb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyLjVlbTtcbiAgbWFyZ2luLWxlZnQ6IDI5cHg7XG59XG5cbi5wb3B1cC1tZW51LXBhbmVsIC5wb3B1cC1tZW51LWl0ZW0gaSB7XG4gIG1hcmdpbjogYXV0byAwcHggNXB4IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnBvcHVwLW1lbnUtcGFuZWwgLnBvcHVwLW1lbnUtaXRlbSBzcGFuIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweCAwcHggYXV0byAwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDExcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMTFweDtcbn1cblxuLnBvcHVwLW1lbnUtcGFuZWwgLnBvcHVwLW1lbnUtaXRlbTphY3RpdmUgaSB7XG4gIGNvbG9yOiAjZGQ0MTM1O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xufVxuXG4ucG9wdXAtbWVudS1wYW5lbCAucG9wdXAtbWVudS1pdGVtOmFjdGl2ZSBzcGFuIHtcbiAgY29sb3I6ICNkZDQxMzU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG59XG5cbi5wb3B1cC1tZW51LXBhbmVsLmluIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbn1cblxuLnBvcHVwLW1lbnUtcGFuZWwuaW4gLnBvcHVwLW1lbnUtaXRlbSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgb3BhY2l0eTogMTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwLjE1cztcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4xNXM7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/popup-menu/popup-menu-two/popup-menu-two.page.ts": 
        /*!******************************************************************************************!*\
          !*** ./src/app/pages/yannbf/components/popup-menu/popup-menu-two/popup-menu-two.page.ts ***!
          \******************************************************************************************/
        /*! exports provided: PopupMenuTwoPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupMenuTwoPage", function () { return PopupMenuTwoPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            var PopupMenuTwoPage = /** @class */ (function () {
                function PopupMenuTwoPage(modalCtrl) {
                    this.modalCtrl = modalCtrl;
                    this.openMenu = false;
                }
                PopupMenuTwoPage.prototype.ngOnInit = function () {
                };
                PopupMenuTwoPage.prototype.togglePopupMenu = function () {
                    return this.openMenu = !this.openMenu;
                };
                PopupMenuTwoPage.prototype.goToAccount = function () {
                    alert('Account clicked.');
                    this.togglePopupMenu();
                };
                PopupMenuTwoPage.prototype.goToHome = function () {
                    alert('Home clicked.');
                    this.togglePopupMenu();
                };
                PopupMenuTwoPage.prototype.goToCups = function () {
                    alert('Cups clicked.');
                    this.togglePopupMenu();
                };
                PopupMenuTwoPage.prototype.goToLeaderboard = function () {
                    alert('Leaderboard clicked.');
                    this.togglePopupMenu();
                };
                PopupMenuTwoPage.prototype.goToHelp = function () {
                    alert('Help clicked.');
                    this.togglePopupMenu();
                };
                PopupMenuTwoPage.prototype.goToShop = function () {
                    alert('Shop clicked.');
                    this.togglePopupMenu();
                };
                return PopupMenuTwoPage;
            }());
            PopupMenuTwoPage.ctorParameters = function () { return [
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
            ]; };
            PopupMenuTwoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-popup-menu-two',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./popup-menu-two.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/popup-menu/popup-menu-two/popup-menu-two.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./popup-menu-two.page.scss */ "./src/app/pages/yannbf/components/popup-menu/popup-menu-two/popup-menu-two.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
            ], PopupMenuTwoPage);
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/popup-menu/popup-menu.module.ts": 
        /*!*************************************************************************!*\
          !*** ./src/app/pages/yannbf/components/popup-menu/popup-menu.module.ts ***!
          \*************************************************************************/
        /*! exports provided: PopupMenuPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupMenuPageModule", function () { return PopupMenuPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _popup_menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popup-menu.page */ "./src/app/pages/yannbf/components/popup-menu/popup-menu.page.ts");
            /* harmony import */ var _popup_menu_two_popup_menu_two_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./popup-menu-two/popup-menu-two.module */ "./src/app/pages/yannbf/components/popup-menu/popup-menu-two/popup-menu-two.module.ts");
            /* harmony import */ var _popup_menu_one_popup_menu_one_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./popup-menu-one/popup-menu-one.module */ "./src/app/pages/yannbf/components/popup-menu/popup-menu-one/popup-menu-one.module.ts");
            var routes = [
                {
                    path: '',
                    component: _popup_menu_page__WEBPACK_IMPORTED_MODULE_6__["PopupMenuPage"]
                }
            ];
            var PopupMenuPageModule = /** @class */ (function () {
                function PopupMenuPageModule() {
                }
                return PopupMenuPageModule;
            }());
            PopupMenuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                        _popup_menu_one_popup_menu_one_module__WEBPACK_IMPORTED_MODULE_8__["PopupMenuOnePageModule"],
                        _popup_menu_two_popup_menu_two_module__WEBPACK_IMPORTED_MODULE_7__["PopupMenuTwoPageModule"]
                    ],
                    declarations: [_popup_menu_page__WEBPACK_IMPORTED_MODULE_6__["PopupMenuPage"]]
                })
            ], PopupMenuPageModule);
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/popup-menu/popup-menu.page.scss": 
        /*!*************************************************************************!*\
          !*** ./src/app/pages/yannbf/components/popup-menu/popup-menu.page.scss ***!
          \*************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL3BvcHVwLW1lbnUvcG9wdXAtbWVudS5wYWdlLnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/popup-menu/popup-menu.page.ts": 
        /*!***********************************************************************!*\
          !*** ./src/app/pages/yannbf/components/popup-menu/popup-menu.page.ts ***!
          \***********************************************************************/
        /*! exports provided: PopupMenuPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupMenuPage", function () { return PopupMenuPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _popup_menu_one_popup_menu_one_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup-menu-one/popup-menu-one.page */ "./src/app/pages/yannbf/components/popup-menu/popup-menu-one/popup-menu-one.page.ts");
            /* harmony import */ var _popup_menu_two_popup_menu_two_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popup-menu-two/popup-menu-two.page */ "./src/app/pages/yannbf/components/popup-menu/popup-menu-two/popup-menu-two.page.ts");
            var PopupMenuPage = /** @class */ (function () {
                function PopupMenuPage(modalCtrl) {
                    this.modalCtrl = modalCtrl;
                    this.items = [
                        {
                            title: 'Type One',
                            page: _popup_menu_one_popup_menu_one_page__WEBPACK_IMPORTED_MODULE_3__["PopupMenuOnePage"]
                        },
                        {
                            title: 'Type Two',
                            page: _popup_menu_two_popup_menu_two_page__WEBPACK_IMPORTED_MODULE_4__["PopupMenuTwoPage"]
                        },
                    ];
                }
                PopupMenuPage.prototype.ngOnInit = function () {
                };
                PopupMenuPage.prototype.itemTapped = function (event, item) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var modal;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.modalCtrl.create({
                                        component: item.page,
                                    })];
                                case 1:
                                    modal = _a.sent();
                                    return [4 /*yield*/, modal.present()];
                                case 2:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                return PopupMenuPage;
            }());
            PopupMenuPage.ctorParameters = function () { return [
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
            ]; };
            PopupMenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-popup-menu',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./popup-menu.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/popup-menu/popup-menu.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./popup-menu.page.scss */ "./src/app/pages/yannbf/components/popup-menu/popup-menu.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
            ], PopupMenuPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-yannbf-components-popup-menu-popup-menu-module-es2015.js.map
//# sourceMappingURL=pages-yannbf-components-popup-menu-popup-menu-module-es5.js.map
//# sourceMappingURL=pages-yannbf-components-popup-menu-popup-menu-module-es5.js.map