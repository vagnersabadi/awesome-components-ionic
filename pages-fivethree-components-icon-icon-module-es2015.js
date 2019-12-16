(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-fivethree-components-icon-icon-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fivethree/components/icon/icon.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fivethree/components/icon/icon.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Icons</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-item-divider>\r\n    <ion-label>Basic Example</ion-label>\r\n  </ion-item-divider>\r\n  <div class=\"ion-text-center\">\r\n    <ion-button (click)=\"getNewIcon()\">\r\n      change icon\r\n    </ion-button>\r\n    <ion-button (click)=\"increment()\">\r\n      <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\r\n    </ion-button>\r\n    <ion-button (click)=\"decrement()\">\r\n      <ion-icon slot=\"icon-only\" name=\"remove\"></ion-icon>\r\n    </ion-button>\r\n  </div>\r\n\r\n  <ion-item>\r\n    <ion-label>Icon turned off</ion-label>\r\n    <ion-checkbox [(ngModel)]=\"off\" slot=\"end\"></ion-checkbox>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>Icon dot</ion-label>\r\n    <ion-checkbox [(ngModel)]=\"dot\" slot=\"end\"></ion-checkbox>\r\n  </ion-item>\r\n\r\n  <div class=\"example\">\r\n    <ion-button [fivCenter] fill=\"clear\">\r\n      <fiv-icon [off]=\"off\" [dotVisible]=\"dot\" slot=\"icon-only\" [indicatorValue]=\"indicatorValue\" [name]=\"icon\">\r\n      </fiv-icon>\r\n    </ion-button>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/fivethree/components/icon/icon.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/fivethree/components/icon/icon.module.ts ***!
  \****************************************************************/
/*! exports provided: IconPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconPageModule", function() { return IconPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _icon_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icon.page */ "./src/app/pages/fivethree/components/icon/icon.page.ts");
/* harmony import */ var _fivethree_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fivethree/core */ "./node_modules/@fivethree/core/fesm2015/fivethree-core.js");








const routes = [
    {
        path: '',
        component: _icon_page__WEBPACK_IMPORTED_MODULE_6__["IconPage"]
    }
];
let IconPageModule = class IconPageModule {
};
IconPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _fivethree_core__WEBPACK_IMPORTED_MODULE_7__["FivIconModule"],
            _fivethree_core__WEBPACK_IMPORTED_MODULE_7__["FivCenterModule"]
        ],
        declarations: [_icon_page__WEBPACK_IMPORTED_MODULE_6__["IconPage"]]
    })
], IconPageModule);



/***/ }),

/***/ "./src/app/pages/fivethree/components/icon/icon.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/fivethree/components/icon/icon.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --fiv-dot-color-background: var(--ion-color-light);\n  --fiv-dot-color: var(--ion-color-primary);\n}\n\n.example {\n  --fiv-color-icon: var(--ion-color-dark);\n  position: relative;\n  height: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZml2ZXRocmVlL2NvbXBvbmVudHMvaWNvbi9DOlxcVXNlcnNcXHNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZXRvc1xcX2lvbmljXFxpb25pYzQtY29tcG9uZW50cy9zcmNcXGFwcFxccGFnZXNcXGZpdmV0aHJlZVxcY29tcG9uZW50c1xcaWNvblxcaWNvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2ZpdmV0aHJlZS9jb21wb25lbnRzL2ljb24vaWNvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrREFBQTtFQUNBLHlDQUFBO0FDQ0o7O0FERUU7RUFDRSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZml2ZXRocmVlL2NvbXBvbmVudHMvaWNvbi9pY29uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIC0tZml2LWRvdC1jb2xvci1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgLS1maXYtZG90LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlIHtcclxuICAgIC0tZml2LWNvbG9yLWljb246IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgfVxyXG4gICIsIjpob3N0IHtcbiAgLS1maXYtZG90LWNvbG9yLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIC0tZml2LWRvdC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uZXhhbXBsZSB7XG4gIC0tZml2LWNvbG9yLWljb246IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/fivethree/components/icon/icon.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/fivethree/components/icon/icon.page.ts ***!
  \**************************************************************/
/*! exports provided: IconPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconPage", function() { return IconPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/icons */ "./src/app/pages/fivethree/components/services/icons.ts");



let IconPage = class IconPage {
    constructor() {
        this.icon = 'md-notifications';
        this.indicatorValue = 0;
        this.off = false;
        this.dot = false;
    }
    ngOnInit() { }
    decrement() {
        if (this.indicatorValue > 0) {
            this.indicatorValue--;
        }
    }
    increment() {
        this.indicatorValue++;
    }
    getNewIcon() {
        const icon = this.getRandomIcon();
        this.icon = icon.icons[1] || icon.icons[0];
    }
    getRandomIcon() {
        return _services_icons__WEBPACK_IMPORTED_MODULE_2__["icons"].icons[Math.floor(Math.random() * _services_icons__WEBPACK_IMPORTED_MODULE_2__["icons"].icons.length)];
    }
};
IconPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-icon',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./icon.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fivethree/components/icon/icon.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./icon.page.scss */ "./src/app/pages/fivethree/components/icon/icon.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], IconPage);



/***/ }),

/***/ "./src/app/pages/fivethree/components/services/icons.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/fivethree/components/services/icons.ts ***!
  \**************************************************************/
/*! exports provided: icons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icons", function() { return icons; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// Generated by https://quicktype.io

const icons = {
    icons: [
        {
            icons: ['ios-add-circle-outline', 'md-add-circle-outline'],
            tags: ['circle']
        },
        {
            icons: ['ios-add-circle', 'md-add-circle'],
            tags: ['add', 'circle']
        },
        {
            icons: ['ios-add', 'md-add'],
            tags: ['add', 'include', 'invite', 'plus']
        },
        {
            icons: ['ios-airplane', 'md-airplane'],
            tags: ['airplane', 'plane']
        },
        {
            icons: ['ios-alarm', 'md-alarm'],
            tags: ['alarm']
        },
        {
            icons: ['ios-albums', 'md-albums'],
            tags: ['albums', 'boxes', 'slides', 'square']
        },
        {
            icons: ['ios-alert', 'md-alert'],
            tags: ['!', 'alert', 'attention', 'exclamation', 'notice', 'warning']
        },
        {
            icons: ['ios-american-football', 'md-american-football'],
            tags: ['american', 'football']
        },
        {
            icons: ['ios-analytics', 'md-analytics'],
            tags: ['analytics', 'data', 'metrics', 'track']
        },
        {
            icons: ['ios-aperture', 'md-aperture'],
            tags: ['aperture', 'dark', 'images', 'levels', 'light', 'settings']
        },
        {
            icons: ['ios-apps', 'md-apps'],
            tags: ['apps', 'applications']
        },
        {
            icons: ['ios-appstore', 'md-appstore'],
            tags: ['appstore', 'store']
        },
        {
            icons: ['ios-archive', 'md-archive'],
            tags: ['archive', 'email']
        },
        {
            icons: ['ios-arrow-back', 'md-arrow-back'],
            tags: ['arrow', 'back', 'chevron', 'navigation']
        },
        {
            icons: ['ios-arrow-down', 'md-arrow-down'],
            tags: ['arrow', 'chevron', 'down']
        },
        {
            icons: ['ios-arrow-dropdown-circle', 'md-arrow-dropdown-circle'],
            tags: ['arrow', 'circle', 'dropdown']
        },
        {
            icons: ['ios-arrow-dropdown', 'md-arrow-dropdown'],
            tags: ['arrow', 'dropdown']
        },
        {
            icons: ['ios-arrow-dropleft-circle', 'md-arrow-dropleft-circle'],
            tags: ['arrow', 'circle', 'dropleft']
        },
        {
            icons: ['ios-arrow-dropleft', 'md-arrow-dropleft'],
            tags: ['arrow', 'dropleft']
        },
        {
            icons: ['ios-arrow-dropright-circle', 'md-arrow-dropright-circle'],
            tags: ['arrow', 'circle', 'dropright']
        },
        {
            icons: ['ios-arrow-dropright', 'md-arrow-dropright'],
            tags: ['arrow', 'dropright']
        },
        {
            icons: ['ios-arrow-dropup-circle', 'md-arrow-dropup-circle'],
            tags: ['arrow', 'circle', 'dropup']
        },
        {
            icons: ['ios-arrow-dropup', 'md-arrow-dropup'],
            tags: ['arrow', 'dropup']
        },
        {
            icons: ['ios-arrow-forward', 'md-arrow-forward'],
            tags: ['arrow', 'chevron', 'forward', 'navigation']
        },
        {
            icons: ['ios-arrow-round-back', 'md-arrow-round-back'],
            tags: ['arrow', 'back', 'round']
        },
        {
            icons: ['ios-arrow-round-down', 'md-arrow-round-down'],
            tags: ['arrow', 'down', 'round']
        },
        {
            icons: ['ios-arrow-round-forward', 'md-arrow-round-forward'],
            tags: ['arrow', 'forward', 'round']
        },
        {
            icons: ['ios-arrow-round-up', 'md-arrow-round-up'],
            tags: ['arrow', 'round', 'up']
        },
        {
            icons: ['ios-arrow-up', 'md-arrow-up'],
            tags: ['arrow', 'chevron', 'up']
        },
        {
            icons: ['ios-at', 'md-at'],
            tags: ['@', 'at']
        },
        {
            icons: ['ios-attach', 'md-attach'],
            tags: ['attach']
        },
        {
            icons: ['ios-backspace', 'md-backspace'],
            tags: ['backspace']
        },
        {
            icons: ['ios-barcode', 'md-barcode'],
            tags: ['barcode', 'camera', 'reader']
        },
        {
            icons: ['ios-baseball', 'md-baseball'],
            tags: ['baseball']
        },
        {
            icons: ['ios-basket', 'md-basket'],
            tags: ['basket']
        },
        {
            icons: ['ios-basketball', 'md-basketball'],
            tags: ['basketball']
        },
        {
            icons: ['ios-battery-charging', 'md-battery-charging'],
            tags: ['battery', 'charging']
        },
        {
            icons: ['ios-battery-dead', 'md-battery-dead'],
            tags: ['battery', 'dead']
        },
        {
            icons: ['ios-battery-full', 'md-battery-full'],
            tags: ['battery', 'full']
        },
        {
            icons: ['ios-beaker', 'md-beaker'],
            tags: ['beaker', 'flask', 'mixture', 'potion']
        },
        {
            icons: ['ios-bed', 'md-bed'],
            tags: ['bed', 'sleep']
        },
        {
            icons: ['ios-beer', 'md-beer'],
            tags: ['beer', 'drink', 'eat', 'food']
        },
        {
            icons: ['ios-bicycle', 'md-bicycle'],
            tags: ['bicycle']
        },
        {
            icons: ['ios-bluetooth', 'md-bluetooth'],
            tags: ['bluetooth', 'cloud', 'connection']
        },
        {
            icons: ['ios-boat', 'md-boat'],
            tags: ['boat']
        },
        {
            icons: ['ios-body', 'md-body'],
            tags: ['body']
        },
        {
            icons: ['ios-bonfire', 'md-bonfire'],
            tags: ['bonfire', 'heat', 'hot']
        },
        {
            icons: ['ios-book', 'md-book'],
            tags: ['book', 'read']
        },
        {
            icons: ['ios-bookmark', 'md-bookmark'],
            tags: ['bookmark', 'favorite', 'save', 'tag']
        },
        {
            icons: ['ios-bookmarks', 'md-bookmarks'],
            tags: ['bookmarks', 'favorite']
        },
        {
            icons: ['ios-bowtie', 'md-bowtie'],
            tags: ['bowtie']
        },
        {
            icons: ['ios-briefcase', 'md-briefcase'],
            tags: ['briefcase', 'folder', 'organize']
        },
        {
            icons: ['ios-browsers', 'md-browsers'],
            tags: ['browsers', 'square']
        },
        {
            icons: ['ios-brush', 'md-brush'],
            tags: ['brush']
        },
        {
            icons: ['ios-bug', 'md-bug'],
            tags: ['bug', 'develop', 'error', 'hacker', 'program']
        },
        {
            icons: ['ios-build', 'md-build'],
            tags: ['build']
        },
        {
            icons: ['ios-bulb', 'md-bulb'],
            tags: ['bulb']
        },
        {
            icons: ['ios-bus', 'md-bus'],
            tags: ['bus']
        },
        {
            icons: ['ios-business', 'md-business'],
            tags: ['business']
        },
        {
            icons: ['ios-cafe', 'md-cafe'],
            tags: ['cafe']
        },
        {
            icons: ['ios-calculator', 'md-calculator'],
            tags: ['arithmatic', 'calculator', 'math']
        },
        {
            icons: ['ios-calendar', 'md-calendar'],
            tags: ['calendar', 'date', 'month', 'week']
        },
        {
            icons: ['ios-call', 'md-call'],
            tags: ['call', 'telephone']
        },
        {
            icons: ['ios-camera', 'md-camera'],
            tags: ['camera', 'image', 'photo']
        },
        {
            icons: ['ios-car', 'md-car'],
            tags: ['car']
        },
        {
            icons: ['ios-card', 'md-card'],
            tags: [
                '$',
                'card',
                'cash',
                'credit',
                'debit',
                'dollars',
                'money',
                'price',
                'shopping'
            ]
        },
        {
            icons: ['ios-cart', 'md-cart'],
            tags: ['cart']
        },
        {
            icons: ['ios-cash', 'md-cash'],
            tags: [
                '$',
                'cash',
                'credit',
                'debit',
                'dollars',
                'money',
                'price',
                'shopping'
            ]
        },
        {
            icons: ['ios-cellular', 'md-cellular'],
            tags: ['cellular']
        },
        {
            icons: ['ios-chatboxes', 'md-chatboxes'],
            tags: ['chatboxes', 'talk']
        },
        {
            icons: ['ios-chatbubbles', 'md-chatbubbles'],
            tags: ['chatbubbles', 'talk']
        },
        {
            icons: ['ios-checkbox-outline', 'md-checkbox-outline'],
            tags: ['checkbox']
        },
        {
            icons: ['ios-checkbox', 'md-checkbox'],
            tags: ['checkbox']
        },
        {
            icons: ['ios-checkmark-circle-outline', 'md-checkmark-circle-outline'],
            tags: ['checkmark']
        },
        {
            icons: ['ios-checkmark-circle', 'md-checkmark-circle'],
            tags: ['checkmark', 'circle']
        },
        {
            icons: ['ios-checkmark', 'md-checkmark'],
            tags: ['checkmark']
        },
        {
            icons: ['ios-clipboard', 'md-clipboard'],
            tags: ['clipboard', 'write']
        },
        {
            icons: ['ios-clock', 'md-clock'],
            tags: ['clock', 'time']
        },
        {
            icons: ['ios-close-circle-outline', 'md-close-circle-outline'],
            tags: ['close', 'cicle']
        },
        {
            icons: ['ios-close-circle', 'md-close-circle'],
            tags: ['circle', 'close']
        },
        {
            icons: ['ios-close', 'md-close'],
            tags: ['close', 'delete', 'remove']
        },
        {
            icons: ['ios-cloud-circle', 'md-cloud-circle'],
            tags: ['circle', 'cloud']
        },
        {
            icons: ['ios-cloud-done', 'md-cloud-done'],
            tags: ['cloud', 'done']
        },
        {
            icons: ['ios-cloud-download', 'md-cloud-download'],
            tags: ['cloud', 'download', 'storage']
        },
        {
            icons: ['ios-cloud-outline', 'md-cloud-outline'],
            tags: ['cloud']
        },
        {
            icons: ['ios-cloud-upload', 'md-cloud-upload'],
            tags: ['cloud', 'storage', 'upload']
        },
        {
            icons: ['ios-cloud', 'md-cloud'],
            tags: ['cloud', 'storage', 'weather', 'whether']
        },
        {
            icons: ['ios-cloudy-night', 'md-cloudy-night'],
            tags: ['cloudy', 'night', 'overcast', 'weather', 'whether']
        },
        {
            icons: ['ios-cloudy', 'md-cloudy'],
            tags: ['cloudy', 'overcast', 'weather', 'whether']
        },
        {
            icons: ['ios-code-download', 'md-code-download'],
            tags: ['code', 'develop', 'download', 'hacker', 'program']
        },
        {
            icons: ['ios-code-working', 'md-code-working'],
            tags: ['code', 'develop', 'hacker', 'program', 'working']
        },
        {
            icons: ['ios-code', 'md-code'],
            tags: ['code', 'develop', 'hacker', 'program']
        },
        {
            icons: ['ios-cog', 'md-cog'],
            tags: ['cog', 'gear', 'options', 'settings']
        },
        {
            icons: ['ios-color-fill', 'md-color-fill'],
            tags: ['color', 'fill']
        },
        {
            icons: ['ios-color-filter', 'md-color-filter'],
            tags: ['color', 'filter']
        },
        {
            icons: ['ios-color-palette', 'md-color-palette'],
            tags: ['color', 'palette']
        },
        {
            icons: ['ios-color-wand', 'md-color-wand'],
            tags: ['color', 'wand']
        },
        {
            icons: ['ios-compass', 'md-compass'],
            tags: ['compass', 'directions', 'location', 'navigation']
        },
        {
            icons: ['ios-construct', 'md-construct'],
            tags: ['construct']
        },
        {
            icons: ['ios-contact', 'md-contact'],
            tags: ['contact', 'people', 'users']
        },
        {
            icons: ['ios-contacts', 'md-contacts'],
            tags: ['contacts', 'people', 'users']
        },
        {
            icons: ['ios-contract', 'md-contract'],
            tags: ['contract']
        },
        {
            icons: ['ios-contrast', 'md-contrast'],
            tags: ['contrast', 'dark', 'images', 'levels', 'light', 'settings']
        },
        {
            icons: ['ios-copy', 'md-copy'],
            tags: ['copy', 'duplicate', 'paper']
        },
        {
            icons: ['ios-create', 'md-create'],
            tags: ['create']
        },
        {
            icons: ['ios-crop', 'md-crop'],
            tags: ['crop']
        },
        {
            icons: ['ios-cube', 'md-cube'],
            tags: ['box', 'container', 'cube', 'square']
        },
        {
            icons: ['ios-cut', 'md-cut'],
            tags: ['cut']
        },
        {
            icons: ['ios-desktop', 'md-desktop'],
            tags: ['desktop']
        },
        {
            icons: ['ios-disc', 'md-disc'],
            tags: ['cd', 'disc', 'vinyl']
        },
        {
            icons: ['ios-document', 'md-document'],
            tags: ['document', 'file', 'paper']
        },
        {
            icons: ['ios-done-all', 'md-done-all'],
            tags: ['all', 'done']
        },
        {
            icons: ['ios-download', 'md-download'],
            tags: ['download', 'export']
        },
        {
            icons: ['ios-easel', 'md-easel'],
            tags: ['easel']
        },
        {
            icons: ['ios-egg', 'md-egg'],
            tags: ['baby', 'bird', 'birth', 'egg', 'twitter']
        },
        {
            icons: ['ios-exit', 'md-exit'],
            tags: ['exit']
        },
        {
            icons: ['ios-expand', 'md-expand'],
            tags: ['expand']
        },
        {
            icons: ['ios-eye-off', 'md-eye-off'],
            tags: ['eye', 'off']
        },
        {
            icons: ['ios-eye', 'md-eye'],
            tags: ['exposed', 'eye', 'look', 'see', 'view']
        },
        {
            icons: ['ios-fastforward', 'md-fastforward'],
            tags: ['fastforward', 'jump', 'next', 'skip']
        },
        {
            icons: ['ios-female', 'md-female'],
            tags: ['dudette', 'female', 'girl', 'lady']
        },
        {
            icons: ['ios-filing', 'md-filing'],
            tags: ['archive', 'filing']
        },
        {
            icons: ['ios-film', 'md-film'],
            tags: ['film']
        },
        {
            icons: ['ios-finger-print', 'md-finger-print'],
            tags: ['finger', 'print']
        },
        {
            icons: ['ios-fitness', 'md-fitness'],
            tags: ['fitness']
        },
        {
            icons: ['ios-flag', 'md-flag'],
            tags: ['favorite', 'flag', 'marker']
        },
        {
            icons: ['ios-flame', 'md-flame'],
            tags: ['fire', 'flame', 'heat', 'hot']
        },
        {
            icons: ['ios-flash-off', 'md-flash-off'],
            tags: ['flash']
        },
        {
            icons: ['ios-flash', 'md-flash'],
            tags: ['flash', 'lightning', 'weather', 'whether']
        },
        {
            icons: ['ios-flashlight', 'md-flashlight'],
            tags: ['flashlight']
        },
        {
            icons: ['ios-flask', 'md-flask'],
            tags: ['bubbles', 'flask', 'mixture', 'potion']
        },
        {
            icons: ['ios-flower', 'md-flower'],
            tags: ['flower']
        },
        {
            icons: ['ios-folder-open', 'md-folder-open'],
            tags: ['folder', 'open']
        },
        {
            icons: ['ios-folder', 'md-folder'],
            tags: ['file', 'folder']
        },
        {
            icons: ['ios-football', 'md-football'],
            tags: ['football', 'soccer']
        },
        {
            icons: ['ios-funnel', 'md-funnel'],
            tags: ['funnel', 'sort']
        },
        {
            icons: ['ios-gift', 'md-gift'],
            tags: ['gift']
        },
        {
            icons: ['ios-git-branch', 'md-git-branch'],
            tags: ['branch', 'git']
        },
        {
            icons: ['ios-git-commit', 'md-git-commit'],
            tags: ['commit', 'git']
        },
        {
            icons: ['ios-git-compare', 'md-git-compare'],
            tags: ['compare', 'git']
        },
        {
            icons: ['ios-git-merge', 'md-git-merge'],
            tags: ['git', 'merge']
        },
        {
            icons: ['ios-git-network', 'md-git-network'],
            tags: ['git', 'network']
        },
        {
            icons: ['ios-git-pull-request', 'md-git-pull-request'],
            tags: ['git', 'pull', 'request']
        },
        {
            icons: ['ios-glasses', 'md-glasses'],
            tags: ['glasses', 'look', 'reading', 'see', 'steve']
        },
        {
            icons: ['ios-globe', 'md-globe'],
            tags: ['globe']
        },
        {
            icons: ['ios-grid', 'md-grid'],
            tags: ['grid', 'menu']
        },
        {
            icons: ['ios-hammer', 'md-hammer'],
            tags: ['hammer', 'options', 'settings', 'tools']
        },
        {
            icons: ['ios-hand', 'md-hand'],
            tags: ['hand', 'stop']
        },
        {
            icons: ['ios-happy', 'md-happy'],
            tags: ['fun', 'good', 'happy', 'like', 'yes']
        },
        {
            icons: ['ios-headset', 'md-headset'],
            tags: ['headset']
        },
        {
            icons: ['ios-heart', 'md-heart'],
            tags: ['heart', 'love']
        },
        {
            icons: ['ios-heart-dislike', 'md-heart-dislike'],
            tags: ['dislike', 'heart', 'love']
        },
        {
            icons: ['ios-heart-empty', 'md-heart-empty'],
            tags: ['empty', 'heart', 'love']
        },
        {
            icons: ['ios-heart-half', 'md-heart-half'],
            tags: ['half', 'heart', 'love']
        },
        {
            icons: ['ios-help-buoy', 'md-help-buoy'],
            tags: ['?', 'buoy', 'help', 'question']
        },
        {
            icons: ['ios-help-circle-outline', 'md-help-circle-outline'],
            tags: ['help']
        },
        {
            icons: ['ios-help-circle', 'md-help-circle'],
            tags: ['circle', 'help']
        },
        {
            icons: ['ios-help', 'md-help'],
            tags: ['?', 'help', 'information', 'question']
        },
        {
            icons: ['ios-home', 'md-home'],
            tags: ['home', 'house']
        },
        {
            icons: ['ios-hourglass', 'md-hourglass'],
            tags: ['hourglass']
        },
        {
            icons: ['ios-ice-cream', 'md-ice-cream'],
            tags: ['cream', 'ice']
        },
        {
            icons: ['ios-image', 'md-image'],
            tags: ['camera', 'image', 'photo']
        },
        {
            icons: ['ios-images', 'md-images'],
            tags: ['images', 'photo']
        },
        {
            icons: ['ios-infinite', 'md-infinite'],
            tags: ['forever', 'infinite', 'loop']
        },
        {
            icons: [
                'ios-information-circle-outline',
                'md-information-circle-outline'
            ],
            tags: ['information']
        },
        {
            icons: ['ios-information-circle', 'md-information-circle'],
            tags: ['circle', 'information']
        },
        {
            icons: ['ios-information', 'md-information'],
            tags: ['help', 'information', 'knowledge']
        },
        {
            icons: ['ios-jet', 'md-jet'],
            tags: ['fly', 'jet', 'plane']
        },
        {
            icons: ['ios-journal', 'md-journal'],
            tags: ['journal']
        },
        {
            icons: ['ios-key', 'md-key'],
            tags: ['access', 'key']
        },
        {
            icons: ['ios-keypad', 'md-keypad'],
            tags: ['keypad', 'type']
        },
        {
            icons: ['ios-laptop', 'md-laptop'],
            tags: ['apple', 'laptop', 'macbook', 'osx']
        },
        {
            icons: ['ios-leaf', 'md-leaf'],
            tags: ['green', 'leaf', 'nature', 'plant', 'recycle']
        },
        {
            icons: ['ios-link', 'md-link'],
            tags: ['anchor', 'attach', 'chain', 'href', 'link']
        },
        {
            icons: ['ios-list-box', 'md-list-box'],
            tags: ['box', 'list']
        },
        {
            icons: ['ios-list', 'md-list'],
            tags: ['list']
        },
        {
            icons: ['ios-locate', 'md-locate'],
            tags: ['gps', 'locate', 'maps', 'navigate']
        },
        {
            icons: ['ios-lock', 'md-lock'],
            tags: ['lock']
        },
        {
            icons: ['ios-log-in', 'md-log-in'],
            tags: ['in', 'log', 'signin']
        },
        {
            icons: ['ios-log-out', 'md-log-out'],
            tags: ['log', 'out', 'signout']
        },
        {
            icons: ['ios-magnet', 'md-magnet'],
            tags: ['attraction', 'magnet', 'sticky']
        },
        {
            icons: ['ios-mail-open', 'md-mail-open'],
            tags: ['mail', 'open']
        },
        {
            icons: ['ios-mail-unread', 'md-mail-unread'],
            tags: ['mail', 'unread']
        },
        {
            icons: ['ios-mail', 'md-mail'],
            tags: ['email', 'mail']
        },
        {
            icons: ['ios-male', 'md-male'],
            tags: ['boy', 'dude', 'guy', 'male', 'male']
        },
        {
            icons: ['ios-man', 'md-man'],
            tags: ['boy', 'dude', 'guy', 'male', 'man']
        },
        {
            icons: ['ios-map', 'md-map'],
            tags: ['gps', 'map', 'navigation', 'pin']
        },
        {
            icons: ['ios-medal', 'md-medal'],
            tags: ['medal']
        },
        {
            icons: ['ios-medical', 'md-medical'],
            tags: ['medical']
        },
        {
            icons: ['ios-medkit', 'md-medkit'],
            tags: ['case', 'disease', 'firstaid', 'health', 'medkit', 'sick']
        },
        {
            icons: ['ios-megaphone', 'md-megaphone'],
            tags: ['megaphone']
        },
        {
            icons: ['ios-menu', 'md-menu'],
            tags: ['menu']
        },
        {
            icons: ['ios-mic-off', 'md-mic-off'],
            tags: ['mic', 'noise', 'off', 'sound', 'speaker', 'talk']
        },
        {
            icons: ['ios-mic', 'md-mic'],
            tags: ['mic', 'noise', 'sound', 'speaker', 'talk']
        },
        {
            icons: ['ios-microphone', 'md-microphone'],
            tags: ['microphone', 'music', 'noise', 'recorde', 'sound', 'speak']
        },
        {
            icons: ['ios-moon', 'md-moon'],
            tags: ['dark', 'moon', 'night', 'sky']
        },
        {
            icons: ['ios-more', 'md-more'],
            tags: ['more', 'options']
        },
        {
            icons: ['ios-move', 'md-move'],
            tags: ['move']
        },
        {
            icons: ['ios-musical-note', 'md-musical-note'],
            tags: ['listening', 'musical', 'noise', 'note', 'play', 'sound']
        },
        {
            icons: ['ios-musical-notes', 'md-musical-notes'],
            tags: ['listening', 'musical', 'noise', 'notes', 'play', 'sound']
        },
        {
            icons: ['ios-navigate', 'md-navigate'],
            tags: ['gps', 'location', 'map', 'navigate', 'pin']
        },
        {
            icons: ['ios-notifications-off', 'md-notifications-off'],
            tags: ['notifications', 'off']
        },
        {
            icons: ['ios-notifications-outline', 'md-notifications-outline'],
            tags: ['notifications']
        },
        {
            icons: ['ios-notifications', 'md-notifications'],
            tags: ['notifications']
        },
        {
            icons: ['ios-nuclear', 'md-nuclear'],
            tags: ['danger', 'hazard', 'nuclear', 'warning']
        },
        {
            icons: ['ios-nutrition', 'md-nutrition'],
            tags: ['nutrition']
        },
        {
            icons: ['ios-open', 'md-open'],
            tags: ['open']
        },
        {
            icons: ['ios-options', 'md-options'],
            tags: ['options']
        },
        {
            icons: ['ios-outlet', 'md-outlet'],
            tags: ['computer', 'digital', 'electricity', 'outlet']
        },
        {
            icons: ['ios-paper-plane', 'md-paper-plane'],
            tags: ['paper', 'plane']
        },
        {
            icons: ['ios-paper', 'md-paper'],
            tags: ['feed', 'paper', 'paper']
        },
        {
            icons: ['ios-partly-sunny', 'md-partly-sunny'],
            tags: ['partly', 'sunny']
        },
        {
            icons: ['ios-pause', 'md-pause'],
            tags: ['break', 'freeze', 'hold', 'music', 'pause']
        },
        {
            icons: ['ios-paw', 'md-paw'],
            tags: ['paw']
        },
        {
            icons: ['ios-people', 'md-people'],
            tags: ['head', 'human', 'people', 'person', 'stalker', 'users']
        },
        {
            icons: ['ios-person-add', 'md-person-add'],
            tags: [
                'add',
                'head',
                'human',
                'member',
                'new',
                'person',
                'staff',
                'users'
            ]
        },
        {
            icons: ['ios-person', 'md-person'],
            tags: ['head', 'human', 'person', 'staff', 'users']
        },
        {
            icons: ['ios-phone-landscape', 'md-phone-landscape'],
            tags: ['landscape', 'phone']
        },
        {
            icons: ['ios-phone-portrait', 'md-phone-portrait'],
            tags: ['phone', 'portrait']
        },
        {
            icons: ['ios-photos', 'md-photos'],
            tags: ['images', 'photos', 'square', 'stills']
        },
        {
            icons: ['ios-pie', 'md-pie'],
            tags: ['cog', 'options', 'pie', 'settings']
        },
        {
            icons: ['ios-pin', 'md-pin'],
            tags: ['gps', 'navigation', 'pin']
        },
        {
            icons: ['ios-pint', 'md-pint'],
            tags: ['pint']
        },
        {
            icons: ['ios-pizza', 'md-pizza'],
            tags: ['drink', 'eat', 'food', 'pizza']
        },
        {
            icons: ['ios-planet', 'md-planet'],
            tags: ['globe', 'home', 'nature', 'planet', 'planet', 'space']
        },
        {
            icons: ['ios-play-circle', 'md-play-circle'],
            tags: ['play']
        },
        {
            icons: ['ios-play', 'md-play'],
            tags: ['arrow', 'music', 'play', 'right', 'watch']
        },
        {
            icons: ['ios-podium', 'md-podium'],
            tags: ['award', 'compete', 'competition', 'lose', 'podium', 'win']
        },
        {
            icons: ['ios-power', 'md-power'],
            tags: ['off', 'on', 'power']
        },
        {
            icons: ['ios-pricetag', 'md-pricetag'],
            tags: ['$', 'commerce', 'items', 'money', 'pricetag', 'shopping']
        },
        {
            icons: ['ios-pricetags', 'md-pricetags'],
            tags: ['$', 'commerce', 'items', 'money', 'pricetags', 'shopping']
        },
        {
            icons: ['ios-print', 'md-print'],
            tags: ['print']
        },
        {
            icons: ['ios-pulse', 'md-pulse'],
            tags: ['hot', 'live', 'pulse', 'rate']
        },
        {
            icons: ['ios-qr-scanner', 'md-qr-scanner'],
            tags: ['qr', 'reader', 'scanner']
        },
        {
            icons: ['ios-quote', 'md-quote'],
            tags: ['chat', 'quotation', 'quote']
        },
        {
            icons: ['ios-radio-button-off', 'md-radio-button-off'],
            tags: ['button', 'off', 'radio']
        },
        {
            icons: ['ios-radio-button-on', 'md-radio-button-on'],
            tags: ['button', 'on', 'radio']
        },
        {
            icons: ['ios-radio', 'md-radio'],
            tags: ['radio']
        },
        {
            icons: ['ios-rainy', 'md-rainy'],
            tags: ['cloud', 'rainy', 'water', 'weather', 'whether']
        },
        {
            icons: ['ios-recording', 'md-recording'],
            tags: ['film', 'recording', 'tape', 'voicemail']
        },
        {
            icons: ['ios-redo', 'md-redo'],
            tags: ['forward', 'redo']
        },
        {
            icons: ['ios-refresh-circle', 'md-refresh-circle'],
            tags: ['circle', 'refresh']
        },
        {
            icons: ['ios-refresh', 'md-refresh'],
            tags: ['refresh', 'reload', 'renew', 'reset']
        },
        {
            icons: ['ios-remove-circle-outline', 'md-remove-circle-outline'],
            tags: ['remove']
        },
        {
            icons: ['ios-remove-circle', 'md-remove-circle'],
            tags: ['circle', 'remove']
        },
        {
            icons: ['ios-remove', 'md-remove'],
            tags: ['minus', 'remove', 'subtract']
        },
        {
            icons: ['ios-reorder', 'md-reorder'],
            tags: ['reorder']
        },
        {
            icons: ['ios-repeat', 'md-repeat'],
            tags: ['repeat']
        },
        {
            icons: ['ios-resize', 'md-resize'],
            tags: ['resize']
        },
        {
            icons: ['ios-restaurant', 'md-restaurant'],
            tags: ['restaurant']
        },
        {
            icons: ['ios-return-left', 'md-return-left'],
            tags: ['left', 'return']
        },
        {
            icons: ['ios-return-right', 'md-return-right'],
            tags: ['return', 'right']
        },
        {
            icons: ['ios-reverse-camera', 'md-reverse-camera'],
            tags: ['camera', 'picture', 'reverse']
        },
        {
            icons: ['ios-rewind', 'md-rewind'],
            tags: ['back', 'music', 'previous', 'rewind']
        },
        {
            icons: ['ios-ribbon', 'md-ribbon'],
            tags: ['ribbon']
        },
        {
            icons: ['ios-rocket', 'md-rocket'],
            tags: ['rocket']
        },
        {
            icons: ['ios-rose', 'md-rose'],
            tags: ['rose']
        },
        {
            icons: ['ios-sad', 'md-sad'],
            tags: ['bad', 'cry', 'no', 'sad']
        },
        {
            icons: ['ios-save', 'md-save'],
            tags: ['save']
        },
        {
            icons: ['ios-school', 'md-school'],
            tags: ['school']
        },
        {
            icons: ['ios-search', 'md-search'],
            tags: ['magnifyingglass', 'search']
        },
        {
            icons: ['ios-send', 'md-send'],
            tags: ['email', 'paper', 'send']
        },
        {
            icons: ['ios-settings', 'md-settings'],
            tags: ['options', 'settings']
        },
        {
            icons: ['ios-share-alt', 'md-share-alt'],
            tags: ['alt', 'share']
        },
        {
            icons: ['ios-share', 'md-share'],
            tags: ['share']
        },
        {
            icons: ['ios-shirt', 'md-shirt'],
            tags: ['shirt']
        },
        {
            icons: ['ios-shuffle', 'md-shuffle'],
            tags: ['random', 'shuffle']
        },
        {
            icons: ['ios-skip-backward', 'md-skip-backward'],
            tags: ['backward', 'music', 'previous', 'skip']
        },
        {
            icons: ['ios-skip-forward', 'md-skip-forward'],
            tags: ['forward', 'music', 'next', 'skip']
        },
        {
            icons: ['ios-snow', 'md-snow'],
            tags: ['snow']
        },
        {
            icons: ['ios-speedometer', 'md-speedometer'],
            tags: ['drive', 'level', 'speed', 'speedometer']
        },
        {
            icons: ['ios-square-outline', 'md-square-outline'],
            tags: ['square']
        },
        {
            icons: ['ios-square', 'md-square'],
            tags: ['square']
        },
        {
            icons: ['ios-star-half', 'md-star-half'],
            tags: ['favorite', 'half', 'rate', 'star']
        },
        {
            icons: ['ios-star-outline', 'md-star-outline'],
            tags: ['star']
        },
        {
            icons: ['ios-star', 'md-star'],
            tags: ['favorite', 'star']
        },
        {
            icons: ['ios-stats', 'md-stats'],
            tags: ['stats']
        },
        {
            icons: ['ios-stopwatch', 'md-stopwatch'],
            tags: ['stopwatch']
        },
        {
            icons: ['ios-subway', 'md-subway'],
            tags: ['subway']
        },
        {
            icons: ['ios-sunny', 'md-sunny'],
            tags: ['light', 'sky', 'sunny', 'weather', 'whether']
        },
        {
            icons: ['ios-swap', 'md-swap'],
            tags: ['swap']
        },
        {
            icons: ['ios-switch', 'md-switch'],
            tags: ['switch']
        },
        {
            icons: ['ios-sync', 'md-sync'],
            tags: ['sync']
        },
        {
            icons: ['ios-tablet-landscape', 'md-tablet-landscape'],
            tags: ['landscape', 'tablet']
        },
        {
            icons: ['ios-tablet-portrait', 'md-tablet-portrait'],
            tags: ['portrait', 'tablet']
        },
        {
            icons: ['ios-tennisball', 'md-tennisball'],
            tags: ['tennisball']
        },
        {
            icons: ['ios-text', 'md-text'],
            tags: ['text']
        },
        {
            icons: ['ios-thermometer', 'md-thermometer'],
            tags: ['cold', 'heat', 'hot', 'mercury', 'temperature', 'thermometer']
        },
        {
            icons: ['ios-thumbs-down', 'md-thumbs-down'],
            tags: ['down', 'thumbs']
        },
        {
            icons: ['ios-thumbs-up', 'md-thumbs-up'],
            tags: ['thumbs', 'up']
        },
        {
            icons: ['ios-thunderstorm', 'md-thunderstorm'],
            tags: [
                'cloudy',
                'lightning',
                'overcast',
                'rain',
                'sky',
                'storm',
                'thunderstorm',
                'weather',
                'whether'
            ]
        },
        {
            icons: ['ios-time', 'md-time'],
            tags: ['clock', 'hour', 'minute', 'second', 'time', 'watch']
        },
        {
            icons: ['ios-timer', 'md-timer'],
            tags: ['clock', 'timer']
        },
        {
            icons: ['ios-today', 'md-today'],
            tags: ['today']
        },
        {
            icons: ['ios-train', 'md-train'],
            tags: ['train']
        },
        {
            icons: ['ios-transgender', 'md-transgender'],
            tags: ['transgender']
        },
        {
            icons: ['ios-trash', 'md-trash'],
            tags: ['close', 'delete', 'remove', 'trash']
        },
        {
            icons: ['ios-trending-down', 'md-trending-down'],
            tags: ['down', 'trending']
        },
        {
            icons: ['ios-trending-up', 'md-trending-up'],
            tags: ['trending', 'up']
        },
        {
            icons: ['ios-trophy', 'md-trophy'],
            tags: ['award', 'compete', 'competition', 'lose', 'trophy', 'win']
        },
        {
            icons: ['ios-tv', 'md-tv'],
            tags: ['television', 'tv']
        },
        {
            icons: ['ios-umbrella', 'md-umbrella'],
            tags: ['dry', 'rain', 'shelter', 'umbrella', 'wet']
        },
        {
            icons: ['ios-undo', 'md-undo'],
            tags: ['reply', 'undo']
        },
        {
            icons: ['ios-unlock', 'md-unlock'],
            tags: ['unlock']
        },
        {
            icons: ['ios-videocam', 'md-videocam'],
            tags: ['camera', 'film', 'movie', 'videocam']
        },
        {
            icons: ['ios-volume-high', 'md-volume-high'],
            tags: ['volume']
        },
        {
            icons: ['ios-volume-low', 'md-volume-low'],
            tags: ['volume']
        },
        {
            icons: ['ios-volume-mute', 'md-volume-mute'],
            tags: ['mute', 'sound', 'volume']
        },
        {
            icons: ['ios-volume-off', 'md-volume-off'],
            tags: ['off', 'volume']
        },
        {
            icons: ['ios-wallet', 'md-wallet'],
            tags: ['cash', 'money', 'wallet']
        },
        {
            icons: ['ios-walk', 'md-walk'],
            tags: ['walk']
        },
        {
            icons: ['ios-warning', 'md-warning'],
            tags: ['warning']
        },
        {
            icons: ['ios-watch', 'md-watch'],
            tags: ['watch']
        },
        {
            icons: ['ios-water', 'md-water'],
            tags: ['water']
        },
        {
            icons: ['ios-wifi', 'md-wifi'],
            tags: ['bars', 'connection', 'internet', 'wifi']
        },
        {
            icons: ['ios-wine', 'md-wine'],
            tags: ['wine']
        },
        {
            icons: ['ios-woman', 'md-woman'],
            tags: ['dudette', 'female', 'girl', 'lady', 'woman']
        },
        {
            icons: ['logo-android'],
            tags: ['android']
        },
        {
            icons: ['logo-angular'],
            tags: ['angular']
        },
        {
            icons: ['logo-apple'],
            tags: ['apple']
        },
        {
            icons: ['logo-bitbucket'],
            tags: ['bitbucket']
        },
        {
            icons: ['logo-bitcoin'],
            tags: ['bitcoin']
        },
        {
            icons: ['logo-buffer'],
            tags: ['buffer']
        },
        {
            icons: ['logo-chrome'],
            tags: ['chrome']
        },
        {
            icons: ['logo-closed-captioning'],
            tags: ['closed-captioning']
        },
        {
            icons: ['logo-codepen'],
            tags: ['codepen']
        },
        {
            icons: ['logo-css3'],
            tags: ['css3']
        },
        {
            icons: ['logo-designernews'],
            tags: ['designernews']
        },
        {
            icons: ['logo-dribbble'],
            tags: ['dribbble']
        },
        {
            icons: ['logo-dropbox'],
            tags: ['dropbox']
        },
        {
            icons: ['logo-euro'],
            tags: ['euro']
        },
        {
            icons: ['logo-facebook'],
            tags: ['facebook']
        },
        {
            icons: ['logo-flickr'],
            tags: ['flickr']
        },
        {
            icons: ['logo-foursquare'],
            tags: ['foursquare']
        },
        {
            icons: ['logo-freebsd-devil'],
            tags: ['freebsd-devil']
        },
        {
            icons: ['logo-game-controller-a'],
            tags: ['controller', 'game']
        },
        {
            icons: ['logo-game-controller-b'],
            tags: ['controller', 'game']
        },
        {
            icons: ['logo-github'],
            tags: ['github']
        },
        {
            icons: ['logo-google'],
            tags: ['google']
        },
        {
            icons: ['logo-googleplus'],
            tags: ['googleplus']
        },
        {
            icons: ['logo-hackernews'],
            tags: ['hackernews']
        },
        {
            icons: ['logo-html5'],
            tags: ['html5']
        },
        {
            icons: ['logo-instagram'],
            tags: ['instagram']
        },
        {
            icons: ['logo-ionic'],
            tags: ['ionic']
        },
        {
            icons: ['logo-ionitron'],
            tags: ['ionitron']
        },
        {
            icons: ['logo-javascript'],
            tags: ['javascript']
        },
        {
            icons: ['logo-linkedin'],
            tags: ['linkedin']
        },
        {
            icons: ['logo-markdown'],
            tags: ['markdown']
        },
        {
            icons: ['logo-model-s'],
            tags: ['model-s']
        },
        {
            icons: ['logo-no-smoking'],
            tags: ['no-smoking']
        },
        {
            icons: ['logo-nodejs'],
            tags: ['nodejs']
        },
        {
            icons: ['logo-npm'],
            tags: ['npm']
        },
        {
            icons: ['logo-octocat'],
            tags: ['octocat']
        },
        {
            icons: ['logo-pinterest'],
            tags: ['pinterest']
        },
        {
            icons: ['logo-playstation'],
            tags: ['playstation']
        },
        {
            icons: ['logo-polymer'],
            tags: ['polymer']
        },
        {
            icons: ['logo-python'],
            tags: ['python']
        },
        {
            icons: ['logo-reddit'],
            tags: ['reddit']
        },
        {
            icons: ['logo-rss'],
            tags: ['rss']
        },
        {
            icons: ['logo-sass'],
            tags: ['sass']
        },
        {
            icons: ['logo-skype'],
            tags: ['skype']
        },
        {
            icons: ['logo-slack'],
            tags: ['slack']
        },
        {
            icons: ['logo-snapchat'],
            tags: ['snapchat']
        },
        {
            icons: ['logo-steam'],
            tags: ['steam']
        },
        {
            icons: ['logo-tumblr'],
            tags: ['tumblr']
        },
        {
            icons: ['logo-tux'],
            tags: ['tux']
        },
        {
            icons: ['logo-twitch'],
            tags: ['twitch']
        },
        {
            icons: ['logo-twitter'],
            tags: ['twitter']
        },
        {
            icons: ['logo-usd'],
            tags: ['usd']
        },
        {
            icons: ['logo-vimeo'],
            tags: ['vimeo']
        },
        {
            icons: ['logo-vk'],
            tags: ['vk']
        },
        {
            icons: ['logo-whatsapp'],
            tags: ['whatsapp']
        },
        {
            icons: ['logo-windows'],
            tags: ['windows']
        },
        {
            icons: ['logo-wordpress'],
            tags: ['wordpress']
        },
        {
            icons: ['logo-xbox'],
            tags: ['xbox']
        },
        {
            icons: ['logo-xing'],
            tags: ['xing']
        },
        {
            icons: ['logo-yahoo'],
            tags: ['yahoo']
        },
        {
            icons: ['logo-yen'],
            tags: ['yen']
        },
        {
            icons: ['logo-youtube'],
            tags: ['youtube']
        }
    ]
};


/***/ })

}]);
//# sourceMappingURL=pages-fivethree-components-icon-icon-module-es2015.js.map