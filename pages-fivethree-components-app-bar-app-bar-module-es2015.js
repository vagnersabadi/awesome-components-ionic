(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-fivethree-components-app-bar-app-bar-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fivethree/components/app-bar/app-bar.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fivethree/components/app-bar/app-bar.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>App-bar</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-item>\r\n    <ion-label>Title Layout</ion-label>\r\n    <ion-select [(ngModel)]=\"titleLayout\" [interfaceOptions]=\"customTitleLayoutOptions\" interface=\"popover\">\r\n      <ion-select-option value=\"hide\">Hide Title</ion-select-option>\r\n      <ion-select-option value=\"show\">Show Title</ion-select-option>\r\n      <ion-select-option value=\"active-only\">Show Title for active only</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Floating Action Bottom Position</ion-label>\r\n    <ion-select [(ngModel)]=\"position\" [interfaceOptions]=\"customFabPositionOptions\" interface=\"popover\">\r\n      <ion-select-option value=\"center\">Center</ion-select-option>\r\n      <ion-select-option value=\"right\">Right</ion-select-option>\r\n      <ion-select-option value=\"left\">Left</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Fab Visible</ion-label>\r\n    <ion-checkbox [(ngModel)]=\"fabVisible\" slot=\"end\"></ion-checkbox>\r\n  </ion-item>\r\n\r\n\r\n\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-tabs #tabs>\r\n    <fiv-app-bar (fivFabClick)=\"presentToast('Floating action button clicked')\" slot=\"bottom\"\r\n      [titleLayout]=\"titleLayout\" #bar [position]=\"position\" [fabVisible]=\"fabVisible\" [icon]=\"icon\">\r\n      <fiv-app-bar-tab left tab=\"#\" href=\"#\" icon=\"md-home\" name=\"App Bar\">\r\n      </fiv-app-bar-tab>\r\n      <fiv-app-bar-tab left tab=\"#\" href=\"#\" icon=\"md-resize\" name=\"Expandable\" [badge]=\"1\">\r\n      </fiv-app-bar-tab>\r\n      <fiv-app-bar-tab right tab=\"#\" href=\"#\" icon=\"md-eye\" name=\"Password\">\r\n      </fiv-app-bar-tab>\r\n      <fiv-app-bar-tab right tab=\"#\" href=\"#\" icon=\"md-more\" name=\"Buttons\">\r\n      </fiv-app-bar-tab>\r\n    </fiv-app-bar>\r\n  </ion-tabs>\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/fivethree/components/app-bar/app-bar.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/fivethree/components/app-bar/app-bar.module.ts ***!
  \**********************************************************************/
/*! exports provided: AppBarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBarPageModule", function() { return AppBarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _app_bar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-bar.page */ "./src/app/pages/fivethree/components/app-bar/app-bar.page.ts");
/* harmony import */ var _fivethree_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fivethree/core */ "./node_modules/@fivethree/core/fesm2015/fivethree-core.js");








const routes = [
    {
        path: '',
        component: _app_bar_page__WEBPACK_IMPORTED_MODULE_6__["AppBarPage"]
    }
];
let AppBarPageModule = class AppBarPageModule {
};
AppBarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _fivethree_core__WEBPACK_IMPORTED_MODULE_7__["FivAppBarModule"],
            _fivethree_core__WEBPACK_IMPORTED_MODULE_7__["FivCenterModule"]
        ],
        declarations: [_app_bar_page__WEBPACK_IMPORTED_MODULE_6__["AppBarPage"]]
    })
], AppBarPageModule);



/***/ }),

/***/ "./src/app/pages/fivethree/components/app-bar/app-bar.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/fivethree/components/app-bar/app-bar.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpdmV0aHJlZS9jb21wb25lbnRzL2FwcC1iYXIvYXBwLWJhci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/fivethree/components/app-bar/app-bar.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/fivethree/components/app-bar/app-bar.page.ts ***!
  \********************************************************************/
/*! exports provided: AppBarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBarPage", function() { return AppBarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let AppBarPage = class AppBarPage {
    constructor(toastController) {
        this.toastController = toastController;
        this.titleLayout = 'hide';
        this.position = 'center';
        this.fabVisible = true;
        this.icon = 'checkmark';
        this.customTitleLayoutOptions = {
            header: 'Title Layout',
            subHeader: 'Select a title layout'
        };
        this.customFabPositionOptions = {
            header: 'Fab Position',
            subHeader: 'Select a floating action button position.'
        };
    }
    ngOnInit() { }
    presentToast(text) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: text,
                duration: 2000
            });
            toast.present();
        });
    }
};
AppBarPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
AppBarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-app-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app-bar.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fivethree/components/app-bar/app-bar.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app-bar.page.scss */ "./src/app/pages/fivethree/components/app-bar/app-bar.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
], AppBarPage);



/***/ })

}]);
//# sourceMappingURL=pages-fivethree-components-app-bar-app-bar-module-es2015.js.map