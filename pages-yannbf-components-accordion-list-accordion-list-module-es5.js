(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-accordion-list-accordion-list-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/accordion-list/accordion-list.page.html": 
        /*!***********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/accordion-list/accordion-list.page.html ***!
          \***********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Accordion List</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <p>Accordion list example - Best places to visit:</p>\r\n\r\n  <app-component-accordion-list \r\n  *ngFor=\"let item of items; let index = index\" \r\n  [title]=\"item.name\" \r\n  [textColor]=\"'#FFF'\"\r\n  [hasMargin]=\"false\" \r\n  [headerColor]=\"'#F53D3D'\" \r\n  [expanded]=\"index === 0\"\r\n  [contentColor]=\"'#F9F9F9'\"\r\n  >\r\n\r\n    <img [src]=\"item.imageUrl\">\r\n    <p class=\"ion-text-justify\">{{item.description}}</p>\r\n\r\n  </app-component-accordion-list>\r\n</ion-content>");
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/accordion-list/accordion-list.module.ts": 
        /*!*********************************************************************************!*\
          !*** ./src/app/pages/yannbf/components/accordion-list/accordion-list.module.ts ***!
          \*********************************************************************************/
        /*! exports provided: AccordionListPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionListPageModule", function () { return AccordionListPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _accordion_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./accordion-list.page */ "./src/app/pages/yannbf/components/accordion-list/accordion-list.page.ts");
            /* harmony import */ var src_app_components_yannbf_yannbf_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/yannbf/yannbf.components.module */ "./src/app/components/yannbf/yannbf.components.module.ts");
            var routes = [
                {
                    path: '',
                    component: _accordion_list_page__WEBPACK_IMPORTED_MODULE_6__["AccordionListPage"]
                }
            ];
            var AccordionListPageModule = /** @class */ (function () {
                function AccordionListPageModule() {
                }
                return AccordionListPageModule;
            }());
            AccordionListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                        src_app_components_yannbf_yannbf_components_module__WEBPACK_IMPORTED_MODULE_7__["YannbfComponentsModule"]
                    ],
                    declarations: [_accordion_list_page__WEBPACK_IMPORTED_MODULE_6__["AccordionListPage"]]
                })
            ], AccordionListPageModule);
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/accordion-list/accordion-list.page.scss": 
        /*!*********************************************************************************!*\
          !*** ./src/app/pages/yannbf/components/accordion-list/accordion-list.page.scss ***!
          \*********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL2FjY29yZGlvbi1saXN0L2FjY29yZGlvbi1saXN0LnBhZ2Uuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/accordion-list/accordion-list.page.ts": 
        /*!*******************************************************************************!*\
          !*** ./src/app/pages/yannbf/components/accordion-list/accordion-list.page.ts ***!
          \*******************************************************************************/
        /*! exports provided: AccordionListPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionListPage", function () { return AccordionListPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AccordionListPage = /** @class */ (function () {
                function AccordionListPage() {
                    this.items = [
                        {
                            name: 'Angra dos Reis, Brazil',
                            description: 'Brazil’s visa waiver during the Olympics was a success for one big reason: it encouraged travel beyond the big cities. The tourism board hopes to bring back the waiver, and if you’re planning to take advantage, save time to visit Angra dos Reis, between Rio and São Paulo. This popular Brazilian vacation area is where cariocas go to escape the crowds. “It’s where many of the country’s elite have their beach villas,” says Martin Frankenberg of Matuete, who has access to several of these glamorous rentals. Big changes are coming to the region. In May, Brazilian chain Fasano will open a long-awaited 54-suite hotel in a complex that includes a marina, golf course, restaurants, and a spa. The design is striking, with elevated wooden buildings that look like they’re floating, all with open-air terraces and views of the forest and sea. And the government recently pledged $8 million to improve the infrastructure on Ilha Grande—an island that’s so popular that they’ve had to impose a daily limit on visitors. —Stephanie Wu',
                            imageUrl: 'http://cdn-image.travelandleisure.com/sites/default/files/styles/964x524/public/1479915553/angra-dos-reis-brazil-WTG2017.jpg?itok=damBsB9G',
                        },
                        {
                            name: 'Belfast, Northern Ireland',
                            description: 'With a growing array of open-air bars, arts venues, and restaurants, Belfast is quickly becoming an attractive destination for travelers. Stay at the design-forward Bullitt Hotel (inspired by the Steve McQueen film), which opened in October with casual, well-appointed rooms and complimentary grab-and-go breakfast granola. Check out arts organization Seedhead, which runs street-art tours and hosts pop-up cabarets around the city. The Michelin-starred OX and EIPIC lead the fine-dining pack, but also visit Permit Room, with its internationally inspired breakfast and locally roasted coffee. Noteworthy new nightlife spots include the Muddlers Club, a stylish restaurant and cocktail bar in the trendy Cathedral Quarter, and Vandal, a graffiti-adorned pizza place that turns into a late-night club, on the top floor of a 17th-century pub.—Nell McShane Wulfhart',
                            imageUrl: 'http://cdn-image.travelandleisure.com/sites/default/files/styles/964x524/public/1480711606/belfast-city-hall-northern-ireland-WTG2017.jpg?itok=mCqumH31',
                        },
                        {
                            name: 'Belgrade, Serbia',
                            description: 'Since the end of the Yugoslav wars, Belgrade has attracted steady investment—its graffiti-covered neighborhoods are now full of restaurants and bars. You’ll find hearty platters of ćevapi—smoky sausages without casing—and stuffed somborka peppers at Sokače, paprika-laden kebabs at Tri Šešira, and pan-Latin tapas at Toro. But the biggest draw is the growing craft-beer scene (the city has 37 breweries). Don’t miss the Kabinet Supernova IPA at Prohibicija in the bar-filled Savamala district, as well as Kas’s full-bodied pale ales and Salto’s IPA at Bajloni, set in a 100-year-old brewery space in Cetinjska. —Govind Dhar',
                            imageUrl: 'http://cdn-image.travelandleisure.com/sites/default/files/styles/964x524/public/1479487289/belgrade-serbia-fortress-WTG2017.jpg?itok=rw8c4Esh',
                        },
                        {
                            name: 'Bermuda',
                            description: 'After being hit hard by the financial crisis, Bermuda is shaking itself out of stagnation and attracting a new generation of travelers. In 2014, the island won a bid to host the 35th America’s Cup, the high-profile international sailing race, which takes place this June. The promise of a flood of wealthy visitors—and a loosening of restrictions on foreign investment—has sparked a spate of development. Big news is the $100 million overhaul of the Hamilton Princess & Beach Club, the island’s 132-year-old grande dame, whose revamped rooms have a fresh, contemporary look. The hotel has also added a stellar art collection, a spa, and a restaurant serving locally sourced fare from James Beard Award–winning chef Marcus Samuelsson. Elsewhere on the island, a St. Regis, a lavish Ritz-Carlton Reserve, and the Ariel Sands resort (backed by actors Michael Douglas and Catherine Zeta-Jones) are in the works. —Paola Singer',
                            imageUrl: 'http://cdn-image.travelandleisure.com/sites/default/files/styles/964x524/public/1479915553/hamilton-princess-bermuda-WTG2017.jpg?itok=E4sFyZFn',
                        }
                    ];
                }
                AccordionListPage.prototype.ngOnInit = function () {
                };
                return AccordionListPage;
            }());
            AccordionListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-accordion-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./accordion-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/accordion-list/accordion-list.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./accordion-list.page.scss */ "./src/app/pages/yannbf/components/accordion-list/accordion-list.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], AccordionListPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-yannbf-components-accordion-list-accordion-list-module-es2015.js.map
//# sourceMappingURL=pages-yannbf-components-accordion-list-accordion-list-module-es5.js.map
//# sourceMappingURL=pages-yannbf-components-accordion-list-accordion-list-module-es5.js.map