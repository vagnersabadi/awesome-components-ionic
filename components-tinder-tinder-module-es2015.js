(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-tinder-tinder-module"],{

/***/ "./src/app/pages/clones-ui/components/tinder/tinder-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/clones-ui/components/tinder/tinder-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: TinderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TinderPageRoutingModule", function() { return TinderPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tinder_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tinder.page */ "./src/app/pages/clones-ui/components/tinder/tinder.page.ts");





const routes = [
    {
        path: '',
        component: _tinder_page__WEBPACK_IMPORTED_MODULE_2__["TinderPage"]
    }
];
class TinderPageRoutingModule {
}
TinderPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TinderPageRoutingModule });
TinderPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TinderPageRoutingModule_Factory(t) { return new (t || TinderPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TinderPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TinderPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/clones-ui/components/tinder/tinder.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/clones-ui/components/tinder/tinder.module.ts ***!
  \********************************************************************/
/*! exports provided: TinderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TinderPageModule", function() { return TinderPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _tinder_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tinder-routing.module */ "./src/app/pages/clones-ui/components/tinder/tinder-routing.module.ts");
/* harmony import */ var _tinder_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tinder.page */ "./src/app/pages/clones-ui/components/tinder/tinder.page.ts");







class TinderPageModule {
}
TinderPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TinderPageModule });
TinderPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TinderPageModule_Factory(t) { return new (t || TinderPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _tinder_routing_module__WEBPACK_IMPORTED_MODULE_4__["TinderPageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TinderPageModule, { declarations: [_tinder_page__WEBPACK_IMPORTED_MODULE_5__["TinderPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        _tinder_routing_module__WEBPACK_IMPORTED_MODULE_4__["TinderPageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TinderPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                    _tinder_routing_module__WEBPACK_IMPORTED_MODULE_4__["TinderPageRoutingModule"]
                ],
                declarations: [_tinder_page__WEBPACK_IMPORTED_MODULE_5__["TinderPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/clones-ui/components/tinder/tinder.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/clones-ui/components/tinder/tinder.page.ts ***!
  \******************************************************************/
/*! exports provided: TinderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TinderPage", function() { return TinderPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function TinderPage_ion_card_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ion-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r503 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("position", "absolute");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", "100%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", p_r503.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r503.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Power: ", p_r503.power, "");
} }
class TinderPage {
    constructor(gestureCtrl, zone, plt) {
        this.gestureCtrl = gestureCtrl;
        this.zone = zone;
        this.plt = plt;
        this.peoaple = [
            {
                name: 'Marsy',
                img: 'assets/clones/chat/avatars/1.png',
                power: 0
            },
            {
                name: 'Anys',
                img: 'assets/clones/chat/avatars/2.png',
                power: 0
            },
            {
                name: 'Max',
                img: 'assets/clones/chat/avatars/4.png',
                power: 0
            },
            {
                name: 'Geneva',
                img: 'assets/clones/chat/avatars/5.png',
                power: 0
            },
        ];
        this.longPressActive = false;
    }
    ngAfterViewInit() {
        const cardArray = this.cards.toArray();
        // this.useLongPress(cardArray);
        this.userTinderSwipe(cardArray);
    }
    /**
     * Use long Press card
     * Obs: Desable userTinderSwipe()
     */
    useLongPress(cardArray) {
        for (let i = 0; i < cardArray.length; i++) {
            const card = cardArray[i];
            const gesture = this.gestureCtrl.create({
                el: card.nativeElement,
                gestureName: 'long-press',
                onStart: ev => {
                    this.longPressActive = true;
                    this.increasePower(i);
                },
                onEnd: ev => {
                    this.longPressActive = false;
                }
            });
            gesture.enable(true);
        }
    }
    /**
     * Incremente Power
     */
    increasePower(i) {
        console.log('IncreasePower');
        setTimeout(() => {
            if (this.longPressActive) {
                this.zone.run(() => {
                    this.peoaple[i].power++;
                    this.increasePower(i);
                });
            }
        }, 200);
    }
    /**
     * Swipe card
     */
    userTinderSwipe(cardArray) {
        for (let i = 0; i < cardArray.length; i++) {
            const card = cardArray[i];
            const gesture = this.gestureCtrl.create({
                el: card.nativeElement,
                gestureName: 'swipe',
                onStart: ev => {
                },
                onMove: ev => {
                    card.nativeElement.style.transform = `translateX(${ev.deltaX}px) rotate(${ev.deltaX / 10}deg)`;
                    this.setCardColor(ev.deltaX, card.nativeElement);
                },
                onEnd: ev => {
                    card.nativeElement.style.transition = '.5s ease-out';
                    if (ev.deltaX > 150) {
                        // move out size screen view RIGTH
                        card.nativeElement.style.transform = `translateX(${+this.plt.width() * 2}px) rotate(${ev.deltaX / 2}deg)`;
                    }
                    else if (ev.deltaX < -150) {
                        // move out size screen view LEFT
                        card.nativeElement.style.transform = `translateX(-${+this.plt.width() * 2}px) rotate(${ev.deltaX / 2}deg)`;
                    }
                    else {
                        card.nativeElement.style.transform = '';
                    }
                }
            });
            gesture.enable(true);
        }
    }
    /**
     * Color Rigth left
     * @param x
     * @param element
     */
    setCardColor(x, element) {
        let color = '';
        const abs = Math.abs(x);
        const min = Math.trunc(Math.min(16 * 16 - abs, 16 * 16));
        const hexCode = this.decimalToHex(min, 2);
        if (x < 0) {
            // red
            color = '#FF' + hexCode + hexCode;
        }
        else {
            // green
            color = '#' + hexCode + 'FF' + hexCode;
        }
        element.style.background = color;
    }
    /**
     * Colors Hex
     */
    decimalToHex(d, padding) {
        let hex = Number(d).toString(16);
        padding = typeof padding === 'undefined' || padding === null ? (padding = 2) : padding;
        while (hex.length < padding) {
            hex = '0' + hex;
        }
        return hex;
    }
}
TinderPage.ɵfac = function TinderPage_Factory(t) { return new (t || TinderPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["GestureController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"])); };
TinderPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TinderPage, selectors: [["app-tinder"]], viewQuery: function TinderPage_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCard"], true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cards = _t);
    } }, decls: 8, vars: 1, consts: [["slot", "start"], ["defaultHref", "/clones-ui"], [1, "ion-padding"], [3, "position", 4, "ngFor", "ngForOf"], [3, "src"]], template: function TinderPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Tinder cards Gestures ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TinderPage_ion_card_7_Template, 8, 7, "ion-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.peoaple);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCardHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCardTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCardSubtitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCardContent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Nsb25lcy11aS9jb21wb25lbnRzL3RpbmRlci90aW5kZXIucGFnZS5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TinderPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tinder',
                templateUrl: './tinder.page.html',
                styleUrls: ['./tinder.page.scss'],
            }]
    }], function () { return [{ type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["GestureController"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"] }]; }, { cards: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCard"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=components-tinder-tinder-module-es2015.js.map