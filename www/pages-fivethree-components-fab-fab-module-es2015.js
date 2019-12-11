(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-fivethree-components-fab-fab-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/fivethree/components/fab/fab.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/fivethree/components/fab/fab.page.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Fab Button</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content #content>\r\n\r\n  <ion-item-group>\r\n    <ion-item>\r\n      <ion-label>Vertical</ion-label>\r\n      <ion-select [(ngModel)]=\"vertical\" placeholder=\"Vertical Align\">\r\n        <ion-select-option value=\"top\">top</ion-select-option>\r\n        <ion-select-option value=\"middle\">middle</ion-select-option>\r\n        <ion-select-option value=\"bottom\">bottom</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Horizontal</ion-label>\r\n      <ion-select [(ngModel)]=\"horizontal\" placeholder=\"Horizontal Align\">\r\n        <ion-select-option value=\"start\">start</ion-select-option>\r\n        <ion-select-option value=\"center\">center</ion-select-option>\r\n        <ion-select-option value=\"end\">end</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Mode</ion-label>\r\n      <ion-select [(ngModel)]=\"mode\" placeholder=\"Mode\">\r\n        <ion-select-option value=\"edge\">edge</ion-select-option>\r\n        <ion-select-option value=\"normal\">normal</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>Scroll</ion-label>\r\n      <ion-toggle slot=\"end\" [checked]=\"scroll\" [(ngModel)]=\"scroll\"></ion-toggle>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Pulse</ion-label>\r\n      <ion-toggle slot=\"end\" [checked]=\"pulse\" [(ngModel)]=\"pulse\"></ion-toggle>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Extended</ion-label>\r\n      <ion-toggle slot=\"end\" [checked]=\"extended\" [(ngModel)]=\"extended\"></ion-toggle>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Visible</ion-label>\r\n      <ion-toggle slot=\"end\" [checked]=\"visible\" [(ngModel)]=\"visible\"></ion-toggle>\r\n    </ion-item>\r\n\r\n    <div class=\"scroll\"></div>\r\n  </ion-item-group>\r\n\r\n  <fiv-fab [mode]=\"mode\" [visible]=\"visible\" [scroll]=\"scroll\" (fivComplete)=\"icon = 'checkmark'\" [pulse]=\"pulse\"\r\n    slot=\"fixed\" checkmark=\"true\" #fab\r\n    (click)=\"fab.loading ? fab.complete() : icon === 'checkmark' ? icon = 'fitness' : fab.load()\"\r\n    [horizontal]=\"horizontal\" [vertical]=\"vertical\" spinColor=\"light\" [color]=\"'primary'\">\r\n    <fiv-icon color=\"light\" slot=\"icon-only\" [name]=\"icon\"></fiv-icon>\r\n    <ion-label *ngIf=\"extended\" color=\"light\">Primary Action</ion-label>\r\n  </fiv-fab>\r\n</ion-content>\r\n\r\n<ion-footer *ngIf=\"mode === 'edge' && vertical === 'bottom'\">\r\n  <ion-toolbar color=\"dark\">\r\n  </ion-toolbar>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/fivethree/components/fab/fab.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/fivethree/components/fab/fab.module.ts ***!
  \**************************************************************/
/*! exports provided: FabPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabPageModule", function() { return FabPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fab_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fab.page */ "./src/app/pages/fivethree/components/fab/fab.page.ts");
/* harmony import */ var _fivethree_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fivethree/core */ "./node_modules/@fivethree/core/fesm2015/fivethree-core.js");








const routes = [
    {
        path: '',
        component: _fab_page__WEBPACK_IMPORTED_MODULE_6__["FabPage"]
    }
];
let FabPageModule = class FabPageModule {
};
FabPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _fivethree_core__WEBPACK_IMPORTED_MODULE_7__["FivFabModule"],
            _fivethree_core__WEBPACK_IMPORTED_MODULE_7__["FivIconModule"]
        ],
        declarations: [_fab_page__WEBPACK_IMPORTED_MODULE_6__["FabPage"]]
    })
], FabPageModule);



/***/ }),

/***/ "./src/app/pages/fivethree/components/fab/fab.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/fivethree/components/fab/fab.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scroll {\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZml2ZXRocmVlL2NvbXBvbmVudHMvZmFiL0M6XFxVc2Vyc1xcc2FiYWRpXFxEb2N1bWVudHNcXFByb2pldG9zXFxfaW9uaWNcXGlvbmljNC1jb21wb25lbnRzL3NyY1xcYXBwXFxwYWdlc1xcZml2ZXRocmVlXFxjb21wb25lbnRzXFxmYWJcXGZhYi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2ZpdmV0aHJlZS9jb21wb25lbnRzL2ZhYi9mYWIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZml2ZXRocmVlL2NvbXBvbmVudHMvZmFiL2ZhYi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nyb2xsIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgfSIsIi5zY3JvbGwge1xuICBoZWlnaHQ6IDEwMHZoO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/fivethree/components/fab/fab.page.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/fivethree/components/fab/fab.page.ts ***!
  \************************************************************/
/*! exports provided: FabPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabPage", function() { return FabPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FabPage = class FabPage {
    constructor() {
        this.pulse = false;
        this.icon = 'fitness';
        this.vertical = 'bottom';
        this.horizontal = 'end';
        this.extended = true;
        this.visible = true;
        this.scroll = true;
        this.mode = 'normal';
    }
    ngOnInit() {
    }
};
FabPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fab',
        template: __webpack_require__(/*! raw-loader!./fab.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/fivethree/components/fab/fab.page.html"),
        styles: [__webpack_require__(/*! ./fab.page.scss */ "./src/app/pages/fivethree/components/fab/fab.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FabPage);



/***/ })

}]);
//# sourceMappingURL=pages-fivethree-components-fab-fab-module-es2015.js.map