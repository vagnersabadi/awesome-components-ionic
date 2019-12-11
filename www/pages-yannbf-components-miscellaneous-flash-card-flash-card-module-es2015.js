(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-miscellaneous-flash-card-flash-card-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/yannbf/components/miscellaneous/flash-card/flash-card.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/yannbf/components/miscellaneous/flash-card/flash-card.page.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Flash Card</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <app-flash-card-component *ngFor=\"let card of flashCards\">\r\n    <ion-card class=\"fc-front\">\r\n      <img [src]=\"card.front.image\" />\r\n      <ion-card-header>\r\n        <ion-card-subtitle>{{card.front.subtitle}}</ion-card-subtitle>\r\n        <ion-card-title>{{card.front.title}}</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        {{card.front.content}}\r\n      </ion-card-content>\r\n    </ion-card>\r\n    <ion-card class=\"fc-back\">\r\n      <img [src]=\"card.front.image\" />\r\n      <ion-card-header>\r\n        <ion-card-subtitle>{{card.back.subtitle}}</ion-card-subtitle>\r\n        <ion-card-title>{{card.back.title}}</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        {{card.back.content}}\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </app-flash-card-component>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/yannbf/components/miscellaneous/flash-card/flash-card.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/miscellaneous/flash-card/flash-card.module.ts ***!
  \***************************************************************************************/
/*! exports provided: FlashCardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlashCardPageModule", function() { return FlashCardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _flash_card_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flash-card.page */ "./src/app/pages/yannbf/components/miscellaneous/flash-card/flash-card.page.ts");
/* harmony import */ var src_app_components_yannbf_yannbf_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/yannbf/yannbf.components.module */ "./src/app/components/yannbf/yannbf.components.module.ts");








const routes = [
    {
        path: '',
        component: _flash_card_page__WEBPACK_IMPORTED_MODULE_6__["FlashCardPage"]
    }
];
let FlashCardPageModule = class FlashCardPageModule {
};
FlashCardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            src_app_components_yannbf_yannbf_components_module__WEBPACK_IMPORTED_MODULE_7__["YannbfComponentsModule"]
        ],
        declarations: [_flash_card_page__WEBPACK_IMPORTED_MODULE_6__["FlashCardPage"]]
    })
], FlashCardPageModule);



/***/ }),

/***/ "./src/app/pages/yannbf/components/miscellaneous/flash-card/flash-card.page.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/miscellaneous/flash-card/flash-card.page.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL21pc2NlbGxhbmVvdXMvZmxhc2gtY2FyZC9mbGFzaC1jYXJkLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/yannbf/components/miscellaneous/flash-card/flash-card.page.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/miscellaneous/flash-card/flash-card.page.ts ***!
  \*************************************************************************************/
/*! exports provided: FlashCardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlashCardPage", function() { return FlashCardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FlashCardPage = class FlashCardPage {
    constructor() {
        this.flashCards = [];
        this.flashCards = [
            {
                front: { image: 'assets/yannbf/img/flashcards/namaste.jpg', title: 'Namaste', subtitle: 'नमस्ते' },
                back: {
                    title: 'meaning',
                    subtitle: 'Hello, Greetings, I bless the divine in you',
                    content: 'It is used to greet people every time they meet. It is usually initiated by the juniors'
                }
            },
            {
                front: {
                    image: 'assets/yannbf/img/flashcards/how_are_you.jpg',
                    title: '(Tapailai) Kasto chha?',
                    subtitle: '( तपाईंलाई ) कस्तो छ ?'
                },
                back: {
                    title: 'meaning',
                    subtitle: 'How are you?',
                    content: 'It is used to ask people how they are doing or feeling.'
                }
            },
            {
                front: {
                    image: 'assets/yannbf/img/flashcards/sorry.jpg',
                    title: 'Maaph garnuhos',
                    subtitle: 'माफ गर्नुहोस्'
                },
                back: {
                    title: 'meaning',
                    subtitle: 'Excuse me/ pardon me / Sorry',
                    content: 'It is used to ask for forgiveness when you do make mistakes.'
                }
            }
        ];
    }
    ngOnInit() {
    }
};
FlashCardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-flash-card',
        template: __webpack_require__(/*! raw-loader!./flash-card.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/yannbf/components/miscellaneous/flash-card/flash-card.page.html"),
        styles: [__webpack_require__(/*! ./flash-card.page.scss */ "./src/app/pages/yannbf/components/miscellaneous/flash-card/flash-card.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FlashCardPage);



/***/ })

}]);
//# sourceMappingURL=pages-yannbf-components-miscellaneous-flash-card-flash-card-module-es2015.js.map