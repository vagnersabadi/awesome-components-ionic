(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-side-menu-side-menu-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/side-menu/side-menu.page.html": 
        /*!*************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/side-menu/side-menu.page.html ***!
          \*************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Side Menu</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <p>The home icon on the right is a small width sidemenu.</p>\r\n  <ion-button expand=\"block\" color=\"secondary\" (click)=\"changeMenu(MENU.DEFAULT)\">Default sidemenu</ion-button>\r\n  <ion-button expand=\"block\" color=\"danger\" (click)=\"changeMenu(MENU.AVATAR)\">Sidemenu with avatar</ion-button>\r\n  <ion-button expand=\"block\" (click)=\"changeMenu(MENU.MATERIAL)\">Material Design</ion-button>\r\n  <ion-button expand=\"block\" (click)=\"changeMenu(MENU.RIGHT)\">Menu Right</ion-button>\r\n\r\n</ion-content>");
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/side-menu/side-menu.module.ts": 
        /*!***********************************************************************!*\
          !*** ./src/app/pages/yannbf/components/side-menu/side-menu.module.ts ***!
          \***********************************************************************/
        /*! exports provided: SideMenuPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideMenuPageModule", function () { return SideMenuPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _side_menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./side-menu.page */ "./src/app/pages/yannbf/components/side-menu/side-menu.page.ts");
            var routes = [
                {
                    path: '',
                    component: _side_menu_page__WEBPACK_IMPORTED_MODULE_6__["SideMenuPage"]
                }
            ];
            var SideMenuPageModule = /** @class */ (function () {
                function SideMenuPageModule() {
                }
                return SideMenuPageModule;
            }());
            SideMenuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
                    ],
                    declarations: [_side_menu_page__WEBPACK_IMPORTED_MODULE_6__["SideMenuPage"]]
                })
            ], SideMenuPageModule);
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/side-menu/side-menu.page.scss": 
        /*!***********************************************************************!*\
          !*** ./src/app/pages/yannbf/components/side-menu/side-menu.page.scss ***!
          \***********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL3NpZGUtbWVudS9zaWRlLW1lbnUucGFnZS5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/side-menu/side-menu.page.ts": 
        /*!*********************************************************************!*\
          !*** ./src/app/pages/yannbf/components/side-menu/side-menu.page.ts ***!
          \*********************************************************************/
        /*! exports provided: SideMenuPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideMenuPage", function () { return SideMenuPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            var SideMenuPage = /** @class */ (function () {
                function SideMenuPage(menuCtrl) {
                    this.menuCtrl = menuCtrl;
                    this.MENU = {
                        DEFAULT: 'menu-first',
                        MATERIAL: 'menu-material',
                        AVATAR: 'menu-avatar',
                        RIGHT: 'menu-right',
                    };
                }
                // Only enables right side menu for this page. Testing purposes.
                SideMenuPage.prototype.ngOnInit = function () {
                    this.menuCtrl.enable(false, 'menu-right');
                };
                SideMenuPage.prototype.changeMenu = function (menu) {
                    var _this = this;
                    // Disables all other sidemenus
                    Object.keys(this.MENU).map(function (k) { return _this.menuCtrl.enable(false, _this.MENU[k]); });
                    // Enables then open the selected menu
                    this.menuCtrl.enable(true, menu);
                    this.menuCtrl.open(menu);
                };
                SideMenuPage.prototype.changeMenuRight = function () {
                    this.menuCtrl.enable(true, 'menu-right');
                    this.menuCtrl.open('menu-right');
                };
                return SideMenuPage;
            }());
            SideMenuPage.ctorParameters = function () { return [
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
            ]; };
            SideMenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-side-menu',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./side-menu.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/side-menu/side-menu.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./side-menu.page.scss */ "./src/app/pages/yannbf/components/side-menu/side-menu.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
            ], SideMenuPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-yannbf-components-side-menu-side-menu-module-es2015.js.map
//# sourceMappingURL=pages-yannbf-components-side-menu-side-menu-module-es5.js.map
//# sourceMappingURL=pages-yannbf-components-side-menu-side-menu-module-es5.js.map