(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-miscellaneous-countdown-countdown-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/yannbf/components/miscellaneous/countdown/countdown.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/yannbf/components/miscellaneous/countdown/countdown.page.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title> Countdown </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <h2>Countdown Timer</h2>\r\n    <app-timer #countdownTimer [timeInSeconds]=\"2700\"></app-timer>\r\n    <app-timer-progress #countdownTimerProgress [timeInSeconds]=\"2700\"></app-timer-progress>\r\n  \r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/yannbf/components/miscellaneous/countdown/countdown.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/miscellaneous/countdown/countdown.module.ts ***!
  \*************************************************************************************/
/*! exports provided: CountdownPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownPageModule", function() { return CountdownPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _countdown_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./countdown.page */ "./src/app/pages/yannbf/components/miscellaneous/countdown/countdown.page.ts");
/* harmony import */ var src_app_components_yannbf_yannbf_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/yannbf/yannbf.components.module */ "./src/app/components/yannbf/yannbf.components.module.ts");








var routes = [
    {
        path: '',
        component: _countdown_page__WEBPACK_IMPORTED_MODULE_6__["CountdownPage"]
    }
];
var CountdownPageModule = /** @class */ (function () {
    function CountdownPageModule() {
    }
    CountdownPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                src_app_components_yannbf_yannbf_components_module__WEBPACK_IMPORTED_MODULE_7__["YannbfComponentsModule"]
            ],
            declarations: [_countdown_page__WEBPACK_IMPORTED_MODULE_6__["CountdownPage"]]
        })
    ], CountdownPageModule);
    return CountdownPageModule;
}());



/***/ }),

/***/ "./src/app/pages/yannbf/components/miscellaneous/countdown/countdown.page.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/miscellaneous/countdown/countdown.page.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  text-align: center;\n}\n\nion-icon {\n  font-size: xx-large;\n  padding-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbWlzY2VsbGFuZW91cy9jb3VudGRvd24vQzpcXFVzZXJzXFxzYWJhZGlcXERvY3VtZW50c1xcUHJvamV0b3NcXF9pb25pY1xcaW9uaWM0LWNvbXBvbmVudHMvc3JjXFxhcHBcXHBhZ2VzXFx5YW5uYmZcXGNvbXBvbmVudHNcXG1pc2NlbGxhbmVvdXNcXGNvdW50ZG93blxcY291bnRkb3duLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbWlzY2VsbGFuZW91cy9jb3VudGRvd24vY291bnRkb3duLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy9taXNjZWxsYW5lb3VzL2NvdW50ZG93bi9jb3VudGRvd24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1pY29uIHsgXHJcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxufSIsImgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/yannbf/components/miscellaneous/countdown/countdown.page.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/miscellaneous/countdown/countdown.page.ts ***!
  \***********************************************************************************/
/*! exports provided: CountdownPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownPage", function() { return CountdownPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CountdownPage = /** @class */ (function () {
    function CountdownPage() {
    }
    CountdownPage.prototype.ngOnInit = function () {
    };
    CountdownPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-countdown',
            template: __webpack_require__(/*! raw-loader!./countdown.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/yannbf/components/miscellaneous/countdown/countdown.page.html"),
            styles: [__webpack_require__(/*! ./countdown.page.scss */ "./src/app/pages/yannbf/components/miscellaneous/countdown/countdown.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CountdownPage);
    return CountdownPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-yannbf-components-miscellaneous-countdown-countdown-module-es5.js.map