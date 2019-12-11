(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-lists-settings-settings-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/yannbf/components/lists/settings/settings.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/yannbf/components/lists/settings/settings.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Settings List</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-list-header>\r\n      Settings\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-icon name=\"airplane\" slot=\"start\" color=\"danger\"></ion-icon>\r\n      <ion-label>Airplane Mode</ion-label>\r\n      <ion-toggle color=\"secondary\" slot=\"end\" ></ion-toggle>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-icon name=\"wifi\" slot=\"start\" color=\"primary\"></ion-icon>\r\n      <ion-label>Wi-Fi</ion-label>\r\n      <ion-note slot=\"end\">The Interwebz</ion-note>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-icon name=\"bluetooth\" slot=\"start\" color=\"primary\"></ion-icon>\r\n      <ion-label>Bluetooth</ion-label>\r\n      <ion-note slot=\"end\">Off</ion-note>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-icon name=\"call\" slot=\"start\" color=\"secondary\"></ion-icon>\r\n      <ion-label>Cellular</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-icon name=\"link\" slot=\"start\" color=\"secondary\"></ion-icon>\r\n      <ion-label>Personal Hotspot</ion-label>\r\n      <ion-note slot=\"end\">Off</ion-note>\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-list radio-group>\r\n    <ion-list-header>\r\n      Silence Phone\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-label color=\"dark\">Always</ion-label>\r\n      <ion-radio value=\"always\" checked></ion-radio>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label color=\"dark\">Only while phone is locked</ion-label>\r\n      <ion-radio value=\"locked\"></ion-radio>\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-list>\r\n    <ion-list-header>\r\n      Apps Installed\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-icon name=\"logo-ionic\" slot=\"start\" color=\"primary\"></ion-icon>\r\n      <ion-label>Ionic View</ion-label>\r\n      <ion-button fill=\"outline\" slot=\"end\">Uninstall</ion-button>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-icon name=\"brush\" slot=\"start\" color=\"primary\"></ion-icon>\r\n      <ion-label>Ionic Creator</ion-label>\r\n      <ion-button fill=\"outline\" slot=\"end\">Uninstall</ion-button>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-icon name=\"logo-octocat\" slot=\"start\" color=\"dark\"></ion-icon>\r\n      <ion-label>Hubstruck</ion-label>\r\n      <ion-button fill=\"outline\" slot=\"end\">Uninstall</ion-button>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-icon name=\"paw\" slot=\"start\" color=\"danger\"></ion-icon>\r\n      <ion-label>Barkpark</ion-label>\r\n      <ion-button fill=\"outline\" slot=\"end\">Uninstall</ion-button>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/yannbf/components/lists/settings/settings.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/lists/settings/settings.module.ts ***!
  \***************************************************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "./src/app/pages/yannbf/components/lists/settings/settings.page.ts");







const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]
    }
];
let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
    })
], SettingsPageModule);



/***/ }),

/***/ "./src/app/pages/yannbf/components/lists/settings/settings.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/lists/settings/settings.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL2xpc3RzL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/yannbf/components/lists/settings/settings.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/lists/settings/settings.page.ts ***!
  \*************************************************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SettingsPage = class SettingsPage {
    constructor() { }
    ngOnInit() {
    }
};
SettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: __webpack_require__(/*! raw-loader!./settings.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/yannbf/components/lists/settings/settings.page.html"),
        styles: [__webpack_require__(/*! ./settings.page.scss */ "./src/app/pages/yannbf/components/lists/settings/settings.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SettingsPage);



/***/ })

}]);
//# sourceMappingURL=pages-yannbf-components-lists-settings-settings-module-es2015.js.map