(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-fivethree-components-bottom-sheet-bottom-sheet-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/fivethree/components/bottom-sheet/bottom-sheet.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/fivethree/components/bottom-sheet/bottom-sheet.page.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Bottom Sheet</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-label>Top</ion-label>\r\n      <ion-radio [checked]=\"drawerState===states.Top\" (click)=\"drawerState = states.Top\"></ion-radio>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Docked</ion-label>\r\n      <ion-radio [checked]=\"drawerState===states.Docked\" (click)=\"drawerState = states.Docked\"></ion-radio>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Bottom</ion-label>\r\n      <ion-radio [checked]=\"drawerState===states.Bottom\" (click)=\"drawerState = states.Bottom\"></ion-radio>\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-label>Bounce</ion-label>\r\n      <ion-checkbox [(ngModel)]=\"shouldBounce\"></ion-checkbox>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Docked height</ion-label>\r\n      <ion-input type=\"number\" [(ngModel)]=\"dockedHeight\" value=\"150\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Top Distance</ion-label>\r\n      <ion-input type=\"number\" [(ngModel)]=\"distanceTop\" value=\"56\"></ion-input>\r\n    </ion-item>\r\n    <ion-item-divider>\r\n      <ion-label>Bottom Sheet Content</ion-label>\r\n    </ion-item-divider>\r\n    <ion-item>\r\n      <ion-label>Rounded</ion-label>\r\n      <ion-checkbox [(ngModel)]=\"rounded\"></ion-checkbox>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Handle</ion-label>\r\n      <ion-checkbox [(ngModel)]=\"handle\"></ion-checkbox>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Float</ion-label>\r\n      <ion-checkbox [(ngModel)]=\"float\"></ion-checkbox>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n</ion-content>\r\n\r\n<fiv-bottom-sheet #fbs *fivIf=\"['mobile']\" [(state)]=\"drawerState\" [dockedHeight]=\"dockedHeight\"\r\n  [shouldBounce]=\"shouldBounce\" [distanceTop]=\"distanceTop\">\r\n\r\n  <fiv-bottom-sheet-content [float]=\"float\" [rounded]=\"rounded\" [handle]=\"handle\">\r\n    <ion-item-divider padding sticky>\r\n      <ion-title color=\"primary\">Bottom Sheet</ion-title>\r\n      <ion-buttons slot=\"end\">\r\n        <ion-button fill=\"outline\" shape=\"round\" color=\"primary\">\r\n          Do Action\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-item-divider>\r\n    <ion-item-group>\r\n      <div class=\"flex-scroll\">\r\n        <ion-card *ngFor=\"let i of [1,2,3,4,5,6,7,8,9]\">\r\n          <ion-card-header>\r\n            <ion-card-subtitle>Awesome Flex</ion-card-subtitle>\r\n            <ion-card-title>Awesome Title</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            Awesome content\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </div>\r\n\r\n    </ion-item-group>\r\n\r\n  </fiv-bottom-sheet-content>\r\n\r\n</fiv-bottom-sheet>"

/***/ }),

/***/ "./src/app/pages/fivethree/components/bottom-sheet/bottom-sheet.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/fivethree/components/bottom-sheet/bottom-sheet.module.ts ***!
  \********************************************************************************/
/*! exports provided: BottomSheetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomSheetPageModule", function() { return BottomSheetPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bottom_sheet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bottom-sheet.page */ "./src/app/pages/fivethree/components/bottom-sheet/bottom-sheet.page.ts");
/* harmony import */ var _fivethree_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fivethree/core */ "./node_modules/@fivethree/core/fesm5/fivethree-core.js");








var routes = [
    {
        path: '',
        component: _bottom_sheet_page__WEBPACK_IMPORTED_MODULE_6__["BottomSheetPage"]
    }
];
var BottomSheetPageModule = /** @class */ (function () {
    function BottomSheetPageModule() {
    }
    BottomSheetPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _fivethree_core__WEBPACK_IMPORTED_MODULE_7__["FivBottomSheetModule"],
                _fivethree_core__WEBPACK_IMPORTED_MODULE_7__["FivIfModule"]
            ],
            declarations: [_bottom_sheet_page__WEBPACK_IMPORTED_MODULE_6__["BottomSheetPage"]]
        })
    ], BottomSheetPageModule);
    return BottomSheetPageModule;
}());



/***/ }),

/***/ "./src/app/pages/fivethree/components/bottom-sheet/bottom-sheet.page.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/fivethree/components/bottom-sheet/bottom-sheet.page.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".drawer-content {\n  border-top: 0.5px solid #e5e5e5;\n  padding: 10px;\n}\n\n.flex-scroll {\n  display: -webkit-box;\n  display: flex;\n  overflow-x: scroll;\n  width: 100%;\n}\n\n.flex-scroll ion-card {\n  -webkit-box-flex: 1;\n          flex: 1 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZml2ZXRocmVlL2NvbXBvbmVudHMvYm90dG9tLXNoZWV0L0M6XFxVc2Vyc1xcc2FiYWRpXFxEb2N1bWVudHNcXFByb2pldG9zXFxfaW9uaWNcXGlvbmljNC1jb21wb25lbnRzL3NyY1xcYXBwXFxwYWdlc1xcZml2ZXRocmVlXFxjb21wb25lbnRzXFxib3R0b20tc2hlZXRcXGJvdHRvbS1zaGVldC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2ZpdmV0aHJlZS9jb21wb25lbnRzL2JvdHRvbS1zaGVldC9ib3R0b20tc2hlZXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURBSTtFQUNFLG1CQUFBO1VBQUEsY0FBQTtBQ0VOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZml2ZXRocmVlL2NvbXBvbmVudHMvYm90dG9tLXNoZWV0L2JvdHRvbS1zaGVldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJhd2VyLWNvbnRlbnQge1xyXG4gICAgYm9yZGVyLXRvcDogMC41cHggc29saWQgI2U1ZTVlNTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5mbGV4LXNjcm9sbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgIGZsZXg6IDEgMCBhdXRvO1xyXG4gICAgfVxyXG4gIH0iLCIuZHJhd2VyLWNvbnRlbnQge1xuICBib3JkZXItdG9wOiAwLjVweCBzb2xpZCAjZTVlNWU1O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uZmxleC1zY3JvbGwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmZsZXgtc2Nyb2xsIGlvbi1jYXJkIHtcbiAgZmxleDogMSAwIGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/fivethree/components/bottom-sheet/bottom-sheet.page.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/fivethree/components/bottom-sheet/bottom-sheet.page.ts ***!
  \******************************************************************************/
/*! exports provided: BottomSheetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomSheetPage", function() { return BottomSheetPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fivethree_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fivethree/core */ "./node_modules/@fivethree/core/fesm5/fivethree-core.js");



var BottomSheetPage = /** @class */ (function () {
    function BottomSheetPage() {
        this.shouldBounce = true;
        this.dockedHeight = 204;
        this.distanceTop = 0;
        this.drawerState = _fivethree_core__WEBPACK_IMPORTED_MODULE_2__["DrawerState"].Docked;
        this.states = _fivethree_core__WEBPACK_IMPORTED_MODULE_2__["DrawerState"];
        this.handle = true;
        this.float = true;
        this.rounded = true;
    }
    BottomSheetPage.prototype.ngOnInit = function () {
    };
    BottomSheetPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bottom-sheet',
            template: __webpack_require__(/*! raw-loader!./bottom-sheet.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/fivethree/components/bottom-sheet/bottom-sheet.page.html"),
            styles: [__webpack_require__(/*! ./bottom-sheet.page.scss */ "./src/app/pages/fivethree/components/bottom-sheet/bottom-sheet.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BottomSheetPage);
    return BottomSheetPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-fivethree-components-bottom-sheet-bottom-sheet-module-es5.js.map