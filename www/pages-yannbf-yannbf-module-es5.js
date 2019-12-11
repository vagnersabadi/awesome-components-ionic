(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-yannbf-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/yannbf/yannbf.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/yannbf/yannbf.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Yannbf\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-subtitle><a\r\n          href=\"https://github.com/yannbf/ionic3-components\">https://github.com/yannbf/ionic3-components</a>\r\n      </ion-card-subtitle>\r\n      <ion-card-title> Yannbf Components </ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-label class=\"ion-text-wrap\">\r\n        This repository was made in order to help people learn and speed up their development process. You will find\r\n        many many different components, pages, pipes, services, of which can be very useful to you. Note though that\r\n        these are all experimental!\r\n\r\n        The content here is a mix of tutorials found online, a few adapted codepen stuff, a few dribbble inspired\r\n        layouts, and also other stuff made by the amazing contributors of this project.\r\n      </ion-label>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-list>\r\n    <ion-item [routerLink]=\"['/accordion-list']\" detail>\r\n      <ion-label>\r\n        Accordion List\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item [routerLink]=\"['/lists']\" detail>\r\n      <ion-label>\r\n        Lists\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item [routerLink]=\"['/login']\" detail>\r\n      <ion-label>\r\n        Login\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item [routerLink]=\"['/timeline']\" detail>\r\n      <ion-badge slot=\"end\" color=\"danger\"> BUG </ion-badge>\r\n      <ion-label>\r\n        Timeline\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item [routerLink]=\"['/miscellaneous']\" detail>\r\n      <ion-label>\r\n        Miscellaneous\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item [routerLink]=\"['/modal-with-navigation']\" detail>\r\n      <ion-label>\r\n        Modal With Navigation\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item [routerLink]=\"['/popup-fab']\" detail>\r\n      <ion-label>\r\n        Popup Fab\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item [routerLink]=\"['/popup-modal']\" detail>\r\n      <ion-label>\r\n        Popup Modal\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  </ion-list>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/yannbf/yannbf.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/yannbf/yannbf.module.ts ***!
  \***********************************************/
/*! exports provided: YannbfPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YannbfPageModule", function() { return YannbfPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _yannbf_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./yannbf.page */ "./src/app/pages/yannbf/yannbf.page.ts");







var routes = [
    {
        path: '',
        component: _yannbf_page__WEBPACK_IMPORTED_MODULE_6__["YannbfPage"]
    }
];
var YannbfPageModule = /** @class */ (function () {
    function YannbfPageModule() {
    }
    YannbfPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_yannbf_page__WEBPACK_IMPORTED_MODULE_6__["YannbfPage"]]
        })
    ], YannbfPageModule);
    return YannbfPageModule;
}());



/***/ }),

/***/ "./src/app/pages/yannbf/yannbf.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/yannbf/yannbf.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lhbm5iZi95YW5uYmYucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/yannbf/yannbf.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/yannbf/yannbf.page.ts ***!
  \*********************************************/
/*! exports provided: YannbfPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YannbfPage", function() { return YannbfPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var YannbfPage = /** @class */ (function () {
    function YannbfPage() {
    }
    YannbfPage.prototype.ngOnInit = function () {
    };
    YannbfPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-yannbf',
            template: __webpack_require__(/*! raw-loader!./yannbf.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/yannbf/yannbf.page.html"),
            styles: [__webpack_require__(/*! ./yannbf.page.scss */ "./src/app/pages/yannbf/yannbf.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], YannbfPage);
    return YannbfPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-yannbf-yannbf-module-es5.js.map