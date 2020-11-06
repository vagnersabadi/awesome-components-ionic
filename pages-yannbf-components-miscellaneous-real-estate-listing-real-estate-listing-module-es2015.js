(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-miscellaneous-real-estate-listing-real-estate-listing-module"],{

/***/ "./src/app/pages/yannbf/components/miscellaneous/real-estate-listing/real-estate-listing.module.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/miscellaneous/real-estate-listing/real-estate-listing.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: RealEstateListingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealEstateListingPageModule", function() { return RealEstateListingPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _real_estate_listing_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./real-estate-listing.page */ "./src/app/pages/yannbf/components/miscellaneous/real-estate-listing/real-estate-listing.page.ts");








const routes = [
    {
        path: '',
        component: _real_estate_listing_page__WEBPACK_IMPORTED_MODULE_5__["RealEstateListingPage"]
    }
];
class RealEstateListingPageModule {
}
RealEstateListingPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RealEstateListingPageModule });
RealEstateListingPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RealEstateListingPageModule_Factory(t) { return new (t || RealEstateListingPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RealEstateListingPageModule, { declarations: [_real_estate_listing_page__WEBPACK_IMPORTED_MODULE_5__["RealEstateListingPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RealEstateListingPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
                ],
                declarations: [_real_estate_listing_page__WEBPACK_IMPORTED_MODULE_5__["RealEstateListingPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/yannbf/components/miscellaneous/real-estate-listing/real-estate-listing.page.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/miscellaneous/real-estate-listing/real-estate-listing.page.ts ***!
  \*******************************************************************************************************/
/*! exports provided: RealEstateListingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealEstateListingPage", function() { return RealEstateListingPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function RealEstateListingPage_ion_col_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const feature_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", feature_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](feature_r2.title);
} }
function RealEstateListingPage_ion_row_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " info here ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "background-image": a0 }; };
const _c1 = function () { return [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]; };
class RealEstateListingPage {
    constructor() {
        this.estateProperty = {
            name: 'Pretty house',
            description: `It’s a 2 bedroom, 2 bathroom laneway house that also has a spacious study off the upstairs landing.
                  Sporting modern finishes and some cute touches like wall niches and bamboo accents,
                  this laneway house is a great example of what can be built on most of Vancouver’s standard 33 x 122
                  foot lots.`,
            price: '850000',
            image: 'https://static.lakana.com/mmm-global-us-east-1/photo/2018/11/16/2019-exterior-home-trends_1542398306940_19450740_ver1.0_1280_720.jpg',
            style: 'Modern Interior',
            size: '33\' Lot',
            features: [
                {
                    icon: 'paw',
                    title: 'Pet Friendly'
                },
                {
                    icon: 'bicycle',
                    title: 'Bike Stations'
                },
                {
                    icon: 'rose',
                    title: 'Beautiful Garden'
                }
            ]
        };
    }
    ngOnInit() {
    }
}
RealEstateListingPage.ɵfac = function RealEstateListingPage_Factory(t) { return new (t || RealEstateListingPage)(); };
RealEstateListingPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RealEstateListingPage, selectors: [["app-real-estate-listing"]], decls: 32, vars: 13, consts: [["slot", "start"], ["defaultHref", "/"], ["elestic-header", "", 3, "fullscreen"], [1, "housing-image", 3, "ngStyle"], [1, "ion-padding", "housing-banner"], [1, "housing-title"], [1, "price"], [1, "main-content"], [1, "main-features"], ["class", "ion-text-center", 4, "ngFor", "ngForOf"], [1, "listing-details"], [1, "ion-margin-horizontal", 2, "text-align", "justify"], ["name", "home"], ["name", "pin"], [4, "ngFor", "ngForOf"], ["size", "large", "expand", "full", "color", "danger", 1, "ion-no-margin"], [1, "ion-text-center"], [3, "name"], [1, "item-block"]], template: function RealEstateListingPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-grid", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RealEstateListingPage_ion_col_16_Template, 4, 2, "ion-col", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ion-grid", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "ion-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "ion-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, RealEstateListingPage_ion_row_28_Template, 3, 0, "ion-row", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ion-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ion-button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " get in touch now ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.estateProperty.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullscreen", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, "url(" + ctx.estateProperty.image + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.estateProperty.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.estateProperty.price, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.estateProperty.features);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.estateProperty.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.estateProperty.style, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.estateProperty.size, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c1));
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRow"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"]], styles: [".toolbar-background[_ngcontent-%COMP%] {\n  border-color: transparent;\n  background: rgba(0, 0, 0, 0.3);\n}\n.bar-button[_ngcontent-%COMP%], .toolbar-title[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.housing-image[_ngcontent-%COMP%] {\n  background-size: cover;\n  height: 50vh;\n  position: relative;\n}\n.housing-banner[_ngcontent-%COMP%] {\n  color: white;\n  background: rgba(0, 0, 0, 0.3);\n  height: 13vh;\n  width: 100vw;\n  position: absolute;\n  bottom: -1px;\n}\n.housing-banner[_ngcontent-%COMP%]   .housing-title[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.2rem;\n}\n.housing-banner[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n\n.content[_ngcontent-%COMP%] {\n  background: whitesmoke;\n}\n.scroll-content[_ngcontent-%COMP%] {\n  padding-top: 0 !important;\n}\n.main-content[_ngcontent-%COMP%] {\n  color: #666;\n}\n.listing-details[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 1rem;\n  margin: 0.45rem;\n  background: rgba(236, 236, 236, 0.8);\n}\n.listing-details[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n.main-features[_ngcontent-%COMP%] {\n  color: #3cc59a;\n}\n.main-features[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 5.5rem !important;\n}\n.item-block[_ngcontent-%COMP%] {\n  text-align: center;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbWlzY2VsbGFuZW91cy9yZWFsLWVzdGF0ZS1saXN0aW5nL0M6XFxVc2Vyc1xcVmFnbmVyIFNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZWN0c1xcX015XFxhd2Vzb21lLWNvbXBvbmVudHMtaW9uaWMvc3JjXFxhcHBcXHBhZ2VzXFx5YW5uYmZcXGNvbXBvbmVudHNcXG1pc2NlbGxhbmVvdXNcXHJlYWwtZXN0YXRlLWxpc3RpbmdcXHJlYWwtZXN0YXRlLWxpc3RpbmcucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy9taXNjZWxsYW5lb3VzL3JlYWwtZXN0YXRlLWxpc3RpbmcvcmVhbC1lc3RhdGUtbGlzdGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUEsV0FBQTtBQUNBO0VBQ0UseUJBQUE7RUFDQSw4QkFUYztBQ0loQjtBRFFBOztFQUVFLFlBWmtCO0FDT3BCO0FEUUEsVUFBQTtBQUNBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNMRjtBRFFBO0VBQ0UsWUF2QmtCO0VBd0JsQiw4QkExQmM7RUEyQmQsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNMRjtBRE9FO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDTEo7QURRRTtFQUNFLGVBQUE7QUNOSjtBRFNBLFlBQUE7QUFDQTtFQUNFLHNCQXhDYztBQ2tDaEI7QURTQTtFQUNFLHlCQUFBO0FDTkY7QURTQTtFQUNFLFdBbERXO0FDNENiO0FEUUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQXBEa0I7QUMrQ3BCO0FETUU7RUFDRSxvQkFBQTtBQ0pKO0FEUUE7RUFDRSxjQUFBO0FDTEY7QURPRTtFQUNFLDRCQUFBO0FDTEo7QURTQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQ05GIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbWlzY2VsbGFuZW91cy9yZWFsLWVzdGF0ZS1saXN0aW5nL3JlYWwtZXN0YXRlLWxpc3RpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJsYWNrLW92ZXJsYXk6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuJHRleHQtY29sb3I6ICM2NjY7XHJcbiRiYW5uZXItdGV4dC1jb2xvcjogd2hpdGU7XHJcbiRjb250ZW50LWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4kZGV0YWlsLWJhY2tncm91bmQ6IHJnYmEoMjM2LCAyMzYsIDIzNiwgMC44KTtcclxuXHJcbi8qIEhlYWRlciAqL1xyXG4udG9vbGJhci1iYWNrZ3JvdW5kIHtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQ6ICRibGFjay1vdmVybGF5O1xyXG59XHJcblxyXG4uYmFyLWJ1dHRvbixcclxuLnRvb2xiYXItdGl0bGUge1xyXG4gIGNvbG9yOiAkYmFubmVyLXRleHQtY29sb3I7XHJcbn1cclxuXHJcbi8qIEltYWdlICovXHJcbi5ob3VzaW5nLWltYWdlIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGhlaWdodDogNTB2aDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5ob3VzaW5nLWJhbm5lciB7XHJcbiAgY29sb3I6ICRiYW5uZXItdGV4dC1jb2xvcjtcclxuICBiYWNrZ3JvdW5kOiAkYmxhY2stb3ZlcmxheTtcclxuICBoZWlnaHQ6IDEzdmg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IC0xcHg7XHJcblxyXG4gIC5ob3VzaW5nLXRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgfVxyXG5cclxuICAucHJpY2Uge1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gIH1cclxufVxyXG4vKiBDb250ZW50ICovXHJcbi5jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kOiAkY29udGVudC1jb2xvcjtcclxufVxyXG5cclxuLnNjcm9sbC1jb250ZW50IHtcclxuICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWFpbi1jb250ZW50IHtcclxuICBjb2xvcjogJHRleHQtY29sb3I7XHJcbn1cclxuLmxpc3RpbmctZGV0YWlscyBpb24tY29sIHtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIG1hcmdpbjogMC40NXJlbTtcclxuICBiYWNrZ3JvdW5kOiAkZGV0YWlsLWJhY2tncm91bmQ7XHJcbiAgaW9uLWljb24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgfVxyXG59XHJcblxyXG4ubWFpbi1mZWF0dXJlcyB7XHJcbiAgY29sb3I6ICMzY2M1OWE7XHJcblxyXG4gIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogNS41cmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uaXRlbS1ibG9jayB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiIsIi8qIEhlYWRlciAqL1xuLnRvb2xiYXItYmFja2dyb3VuZCB7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLmJhci1idXR0b24sXG4udG9vbGJhci10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogSW1hZ2UgKi9cbi5ob3VzaW5nLWltYWdlIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiA1MHZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5ob3VzaW5nLWJhbm5lciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBoZWlnaHQ6IDEzdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0xcHg7XG59XG4uaG91c2luZy1iYW5uZXIgLmhvdXNpbmctdGl0bGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG4uaG91c2luZy1iYW5uZXIgLnByaWNlIHtcbiAgZm9udC1zaXplOiAzcmVtO1xufVxuXG4vKiBDb250ZW50ICovXG4uY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG59XG5cbi5zY3JvbGwtY29udGVudCB7XG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5tYWluLWNvbnRlbnQge1xuICBjb2xvcjogIzY2Njtcbn1cblxuLmxpc3RpbmctZGV0YWlscyBpb24tY29sIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWFyZ2luOiAwLjQ1cmVtO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIzNiwgMjM2LCAyMzYsIDAuOCk7XG59XG4ubGlzdGluZy1kZXRhaWxzIGlvbi1jb2wgaW9uLWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cblxuLm1haW4tZmVhdHVyZXMge1xuICBjb2xvcjogIzNjYzU5YTtcbn1cbi5tYWluLWZlYXR1cmVzIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA1LjVyZW0gIWltcG9ydGFudDtcbn1cblxuLml0ZW0tYmxvY2sge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RealEstateListingPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-real-estate-listing',
                templateUrl: './real-estate-listing.page.html',
                styleUrls: ['./real-estate-listing.page.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-yannbf-components-miscellaneous-real-estate-listing-real-estate-listing-module-es2015.js.map