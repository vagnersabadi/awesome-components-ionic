(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-miscellaneous-pinterest-masonry-cards-pinterest-masonry-cards-module"],{

/***/ "./src/app/pages/yannbf/components/miscellaneous/pinterest-masonry-cards/pinterest-masonry-cards.module.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/miscellaneous/pinterest-masonry-cards/pinterest-masonry-cards.module.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: PinterestMasonryCardsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinterestMasonryCardsPageModule", function() { return PinterestMasonryCardsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _pinterest_masonry_cards_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pinterest-masonry-cards.page */ "./src/app/pages/yannbf/components/miscellaneous/pinterest-masonry-cards/pinterest-masonry-cards.page.ts");








const routes = [
    {
        path: '',
        component: _pinterest_masonry_cards_page__WEBPACK_IMPORTED_MODULE_5__["PinterestMasonryCardsPage"]
    }
];
class PinterestMasonryCardsPageModule {
}
PinterestMasonryCardsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PinterestMasonryCardsPageModule });
PinterestMasonryCardsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PinterestMasonryCardsPageModule_Factory(t) { return new (t || PinterestMasonryCardsPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PinterestMasonryCardsPageModule, { declarations: [_pinterest_masonry_cards_page__WEBPACK_IMPORTED_MODULE_5__["PinterestMasonryCardsPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PinterestMasonryCardsPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
                ],
                declarations: [_pinterest_masonry_cards_page__WEBPACK_IMPORTED_MODULE_5__["PinterestMasonryCardsPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/yannbf/components/miscellaneous/pinterest-masonry-cards/pinterest-masonry-cards.page.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/miscellaneous/pinterest-masonry-cards/pinterest-masonry-cards.page.ts ***!
  \***************************************************************************************************************/
/*! exports provided: PinterestMasonryCardsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinterestMasonryCardsPage", function() { return PinterestMasonryCardsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function PinterestMasonryCardsPage_ion_card_8_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r1.description);
} }
function PinterestMasonryCardsPage_ion_card_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PinterestMasonryCardsPage_ion_card_8_div_4_Template, 3, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-card-content", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-avatar", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "McFly");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", post_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r1.description);
} }
class PinterestMasonryCardsPage {
    constructor() {
        this.posts = [];
    }
    ngOnInit() {
        this.posts = [
            {
                description: 'Trying out digital painting',
                image: 'https://s-media-cache-ak0.pinimg.com/564x/d5/63/b0/d563b08194f0a92cc7d381f7f8582a08.jpg'
            },
            {
                description: '',
                image: 'https://s-media-cache-ak0.pinimg.com/236x/43/f3/3d/43f33de6f96ca8e6f8dc6ff1ad86b586.jpg'
            },
            {
                description: 'Look at this amazing clay humming bird I crafted!',
                image: 'https://s-media-cache-ak0.pinimg.com/236x/68/68/a2/6868a2f821e5d15cc8fcd8cfa1694606.jpg'
            },
            {
                description: 'Origami tullip tutorial',
                image: 'https://s-media-cache-ak0.pinimg.com/236x/38/6f/8e/386f8ec1725f09883d827094228d0f82.jpg'
            },
            {
                description: '',
                image: 'https://s-media-cache-ak0.pinimg.com/564x/f6/61/5c/f6615ca7068da18157588890f9e9e03a.jpg'
            },
            {
                description: '',
                image: 'https://s-media-cache-ak0.pinimg.com/564x/0d/29/35/0d2935d14c17aff1baab75360c9e2bd6.jpg'
            },
            {
                description: 'Delicious chocolate bread recipe!',
                image: 'https://s-media-cache-ak0.pinimg.com/564x/06/a9/8e/06a98e67111aae83a481a2c1dbb594a4.jpg'
            },
            {
                description: '',
                image: 'https://s-media-cache-ak0.pinimg.com/564x/d5/8c/37/d58c3783d6ebf79db0f9c057726800a0.jpg'
            },
            {
                description: '',
                image: 'https://s-media-cache-ak0.pinimg.com/564x/f5/35/97/f53597bf16aff91315a0beca27ffdbda.jpg'
            },
            {
                description: '',
                image: 'https://s-media-cache-ak0.pinimg.com/564x/cf/fe/6d/cffe6dd7dece1cb0562f65cd3bfba1ac.jpg'
            },
            {
                description: 'Fastest car of all times',
                image: 'https://s-media-cache-ak0.pinimg.com/564x/5f/bf/34/5fbf3414f9de301c8f4b868b1c2e2339.jpg'
            },
        ];
    }
}
PinterestMasonryCardsPage.ɵfac = function PinterestMasonryCardsPage_Factory(t) { return new (t || PinterestMasonryCardsPage)(); };
PinterestMasonryCardsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PinterestMasonryCardsPage, selectors: [["app-pinterest-masonry-cards"]], decls: 9, vars: 1, consts: [["slot", "start"], ["defaultHref", "/"], [1, "pins"], ["class", "pin", 4, "ngFor", "ngForOf"], [1, "pin"], [3, "src"], ["class", "post-description", 4, "ngIf"], [1, "ion-no-padding"], ["lines", "none"], ["src", "assets/yannbf/img/avatar/marty-avatar.png"], [1, "post-description"]], template: function PinterestMasonryCardsPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Masonry Cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PinterestMasonryCardsPage_ion_card_8_Template, 14, 2, "ion-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.posts);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCardHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCardSubtitle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"]], styles: [".pins[_ngcontent-%COMP%] {\n  -moz-column-count: 2;\n       column-count: 2;\n}\n\n.pin[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.card[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 9vw;\n  height: 9vw;\n}\n\n.post-description[_ngcontent-%COMP%] {\n  padding: 8px;\n  border-bottom: 1px solid #eee;\n}\n\n@media (min-width: 480px) {\n  .pins[_ngcontent-%COMP%] {\n    -moz-column-count: 3;\n         column-count: 3;\n  }\n\n  .item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 7vw !important;\n    height: 7vw !important;\n  }\n}\n\n@media (min-width: 640px) {\n  .pins[_ngcontent-%COMP%] {\n    -moz-column-count: 4;\n         column-count: 4;\n  }\n\n  .item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 5vw !important;\n    height: 5vw !important;\n    margin: 6px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbWlzY2VsbGFuZW91cy9waW50ZXJlc3QtbWFzb25yeS1jYXJkcy9DOlxcVXNlcnNcXFZhZ25lciBTYWJhZGlcXERvY3VtZW50c1xcUHJvamVjdHNcXF9NeVxcYXdlc29tZS1jb21wb25lbnRzLWlvbmljL3NyY1xcYXBwXFxwYWdlc1xceWFubmJmXFxjb21wb25lbnRzXFxtaXNjZWxsYW5lb3VzXFxwaW50ZXJlc3QtbWFzb25yeS1jYXJkc1xccGludGVyZXN0LW1hc29ucnktY2FyZHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy9taXNjZWxsYW5lb3VzL3BpbnRlcmVzdC1tYXNvbnJ5LWNhcmRzL3BpbnRlcmVzdC1tYXNvbnJ5LWNhcmRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO09BQUEsZUFBQTtBQ0NKOztBREdBO0VBQ0kscUJBQUE7QUNBSjs7QURHQTtFQUNJLGdCQUFBO0FDQUo7O0FET0E7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQ0pKOztBRE9BO0VBQ0ksWUFBQTtFQUNBLDZCQUFBO0FDSko7O0FEUUE7RUFDSTtJQUNJLG9CQUFBO1NBQUEsZUFBQTtFQ0xOOztFRE9FO0lBQ0kscUJBQUE7SUFDQSxzQkFBQTtFQ0pOO0FBQ0Y7O0FET0E7RUFDSTtJQUNJLG9CQUFBO1NBQUEsZUFBQTtFQ0xOOztFRE9FO0lBQ0kscUJBQUE7SUFDQSxzQkFBQTtJQUNBLFdBQUE7RUNKTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbWlzY2VsbGFuZW91cy9waW50ZXJlc3QtbWFzb25yeS1jYXJkcy9waW50ZXJlc3QtbWFzb25yeS1jYXJkcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGlucyB7XHJcbiAgICBjb2x1bW4tY291bnQ6IDI7XHJcbn1cclxuXHJcblxyXG4ucGluIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLy8gaW9uLWF2YXRhciB7XHJcbi8vICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLml0ZW0gaW9uLWF2YXRhciBpbWcge1xyXG4gICAgd2lkdGg6IDl2dyA7XHJcbiAgICBoZWlnaHQ6IDl2dztcclxufVxyXG5cclxuLnBvc3QtZGVzY3JpcHRpb24ge1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XHJcbn1cclxuXHJcbi8vIE1lZGlhIHF1ZXJpZXNcclxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAucGlucyB7XHJcbiAgICAgICAgY29sdW1uLWNvdW50OiAzO1xyXG4gICAgfVxyXG4gICAgLml0ZW0gaW9uLWF2YXRhciBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAgN3Z3ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiA3dncgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XHJcbiAgICAucGlucyB7XHJcbiAgICAgICAgY29sdW1uLWNvdW50OiA0O1xyXG4gICAgfVxyXG4gICAgLml0ZW0gaW9uLWF2YXRhciBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAgNXZ3ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiA1dncgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW46IDZweDtcclxuICAgIH1cclxufSIsIi5waW5zIHtcbiAgY29sdW1uLWNvdW50OiAyO1xufVxuXG4ucGluIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uY2FyZCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5pdGVtIGlvbi1hdmF0YXIgaW1nIHtcbiAgd2lkdGg6IDl2dztcbiAgaGVpZ2h0OiA5dnc7XG59XG5cbi5wb3N0LWRlc2NyaXB0aW9uIHtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XG4gIC5waW5zIHtcbiAgICBjb2x1bW4tY291bnQ6IDM7XG4gIH1cblxuICAuaXRlbSBpb24tYXZhdGFyIGltZyB7XG4gICAgd2lkdGg6IDd2dyAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogN3Z3ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xuICAucGlucyB7XG4gICAgY29sdW1uLWNvdW50OiA0O1xuICB9XG5cbiAgLml0ZW0gaW9uLWF2YXRhciBpbWcge1xuICAgIHdpZHRoOiA1dncgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDV2dyAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogNnB4O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PinterestMasonryCardsPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pinterest-masonry-cards',
                templateUrl: './pinterest-masonry-cards.page.html',
                styleUrls: ['./pinterest-masonry-cards.page.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-yannbf-components-miscellaneous-pinterest-masonry-cards-pinterest-masonry-cards-module-es2015.js.map