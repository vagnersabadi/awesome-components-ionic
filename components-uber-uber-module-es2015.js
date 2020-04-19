(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-uber-uber-module"],{

/***/ "./src/app/pages/clones-ui/components/uber/uber-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/clones-ui/components/uber/uber-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: UberPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UberPageRoutingModule", function() { return UberPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _uber_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uber.page */ "./src/app/pages/clones-ui/components/uber/uber.page.ts");





const routes = [
    {
        path: '',
        component: _uber_page__WEBPACK_IMPORTED_MODULE_2__["UberPage"]
    }
];
class UberPageRoutingModule {
}
UberPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UberPageRoutingModule });
UberPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UberPageRoutingModule_Factory(t) { return new (t || UberPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UberPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UberPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/clones-ui/components/uber/uber.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/clones-ui/components/uber/uber.module.ts ***!
  \****************************************************************/
/*! exports provided: UberPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UberPageModule", function() { return UberPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _uber_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./uber-routing.module */ "./src/app/pages/clones-ui/components/uber/uber-routing.module.ts");
/* harmony import */ var _uber_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./uber.page */ "./src/app/pages/clones-ui/components/uber/uber.page.ts");







class UberPageModule {
}
UberPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UberPageModule });
UberPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UberPageModule_Factory(t) { return new (t || UberPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _uber_routing_module__WEBPACK_IMPORTED_MODULE_4__["UberPageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UberPageModule, { declarations: [_uber_page__WEBPACK_IMPORTED_MODULE_5__["UberPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        _uber_routing_module__WEBPACK_IMPORTED_MODULE_4__["UberPageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UberPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                    _uber_routing_module__WEBPACK_IMPORTED_MODULE_4__["UberPageRoutingModule"]
                ],
                declarations: [_uber_page__WEBPACK_IMPORTED_MODULE_5__["UberPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/clones-ui/components/uber/uber.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/clones-ui/components/uber/uber.page.ts ***!
  \**************************************************************/
/*! exports provided: UberPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UberPage", function() { return UberPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");











function UberPage_ion_title_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Offline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UberPage_ion_title_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Online ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UberPage_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-avatar", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "You are Offline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UberPage_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div");
} }
function UberPage_ion_footer_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-fab", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-fab-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-avatar", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "John Doe");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "$325.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-card-content", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "ion-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "10.2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Hours Online");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "ion-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "30 KM");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Total Distance");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "ion-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ion-label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "20");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Total Jobs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UberPage_ion_footer_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-fab", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-fab-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-card", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-card-header", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-thumbnail");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Esther Berry");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Apple pay");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Discount");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " $25.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "2.2 KM");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-card-content", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Pick Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "7958 Swift Village");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Drop Off");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ion-label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "105 William, US");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "ion-button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Ignore");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "ion-button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Accept");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "ion-label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "View All Requests");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class UberPage {
    constructor(geolocation, menuCtrl, alertController, activeRouter) {
        this.geolocation = geolocation;
        this.menuCtrl = menuCtrl;
        this.alertController = alertController;
        this.activeRouter = activeRouter;
        this.markerUrl = '../../../assets/clones/map/markerPin.png';
        this.zoom = 12;
        this.lat = 26.8549;
        this.lng = 75.8243;
        this.driveStatus = false;
        this.userCard = false;
        this.renderOpts = {
            suppressMarkers: true,
        };
        this.directionOptions = {
            origin: {
                icon: '../../../assets/clones/map/Google-Car.png',
            },
            destination: {
                icon: '../../../assets/clones/map/distinationsMaker.png',
                opacity: 0.8,
            },
        };
        this.style = [
            {
                'elementType': 'geometry',
                'stylers': [
                    {
                        'color': '#f5f5f5'
                    }
                ]
            },
            {
                'elementType': 'labels.icon',
                'stylers': [
                    {
                        'visibility': 'off'
                    }
                ]
            },
            {
                'elementType': 'labels.text.fill',
                'stylers': [
                    {
                        'color': '#616161'
                    }
                ]
            },
            {
                'elementType': 'labels.text.stroke',
                'stylers': [
                    {
                        'color': '#f5f5f5'
                    }
                ]
            },
            {
                'featureType': 'administrative.land_parcel',
                'elementType': 'labels.text.fill',
                'stylers': [
                    {
                        'color': '#bdbdbd'
                    }
                ]
            },
            {
                'featureType': 'poi',
                'elementType': 'geometry',
                'stylers': [
                    {
                        'color': '#eeeeee'
                    }
                ]
            },
            {
                'featureType': 'poi',
                'elementType': 'labels.text.fill',
                'stylers': [
                    {
                        'color': '#757575'
                    }
                ]
            },
            {
                'featureType': 'poi.park',
                'elementType': 'geometry',
                'stylers': [
                    {
                        'color': '#e5e5e5'
                    }
                ]
            },
            {
                'featureType': 'poi.park',
                'elementType': 'labels.text.fill',
                'stylers': [
                    {
                        'color': '#9e9e9e'
                    }
                ]
            },
            {
                'featureType': 'road',
                'elementType': 'geometry',
                'stylers': [
                    {
                        'color': '#ffffff'
                    }
                ]
            },
            {
                'featureType': 'road.arterial',
                'elementType': 'labels.text.fill',
                'stylers': [
                    {
                        'color': '#757575'
                    }
                ]
            },
            {
                'featureType': 'road.highway',
                'elementType': 'geometry',
                'stylers': [
                    {
                        'color': '#dadada'
                    }
                ]
            },
            {
                'featureType': 'road.highway',
                'elementType': 'labels.text.fill',
                'stylers': [
                    {
                        'color': '#616161'
                    }
                ]
            },
            {
                'featureType': 'road.local',
                'elementType': 'labels.text.fill',
                'stylers': [
                    {
                        'color': '#9e9e9e'
                    }
                ]
            },
            {
                'featureType': 'transit.line',
                'elementType': 'geometry',
                'stylers': [
                    {
                        'color': '#e5e5e5'
                    }
                ]
            },
            {
                'featureType': 'transit.station',
                'elementType': 'geometry',
                'stylers': [
                    {
                        'color': '#eeeeee'
                    }
                ]
            },
            {
                'featureType': 'water',
                'elementType': 'geometry',
                'stylers': [
                    {
                        'color': '#c9c9c9'
                    }
                ]
            },
            {
                'featureType': 'water',
                'elementType': 'labels.text.fill',
                'stylers': [
                    {
                        'color': '#9e9e9e'
                    }
                ]
            }
        ];
        this.driveStatus = false;
        this.userCard = false;
        this.menuCtrl.enable(true);
        // this.geoLocations();
    }
    ngOnInit() {
        this.getDirection();
        console.log('ngonit');
    }
    ionViewDidEnter() {
        console.log('ionViewDidEnter');
        this.activeRouter.params.subscribe((data) => {
            console.log(data);
            if (data) {
                this.userCard = data.userCard ? data.userCard : false;
            }
        });
    }
    // mapReady(a, event) {
    //   if (event) {
    //     console.log('event if')
    //   }
    // }
    driverStatusChange(event, val) {
        if (this.driveStatus) {
            console.log('true');
            setTimeout(() => {
                this.presentAlertConfirm();
            }, 2000);
        }
        else {
            this.userCard = false;
        }
    }
    presentAlertConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirm Request!',
                message: 'You have a new Pickup request',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'Okay',
                        handler: () => {
                            this.userCard = true;
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    getDirection() {
        console.log('directions');
        this.origin = { lat: 26.857114, lng: 75.8127086 };
        this.destination = { lat: 0.5 + 26.857114, lng: 0.5 + 75.8127086 };
        console.log('origin', this.origin, this.destination);
    }
    requestAccept() {
    }
    requestIgnore() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        });
    }
    getcurrentLocations() {
        this.geolocation.getCurrentPosition().then((resp) => {
            console.log('resp', resp);
            this.lat = resp.coords.latitude;
            this.lng = resp.coords.longitude;
        }).catch((error) => {
            console.log('Error getting location', error);
        });
        const watch = this.geolocation.watchPosition();
        watch.subscribe((data) => {
            console.log('data', data);
        });
    }
}
UberPage.ɵfac = function UberPage_Factory(t) { return new (t || UberPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
UberPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UberPage, selectors: [["app-uber"]], decls: 12, vars: 7, consts: [["slot", "start"], ["defaultHref", "/clones-ui"], [4, "ngIf"], ["slot", "end", "color", "secondary", 3, "ngModel", "ngModelChange"], ["slot", "fixed"], ["color", "secondary", "lines", "none"], ["slot", "start", 1, "nightModeIcon"], ["src", "../../../assets/clones/map/nightMode.png"], [1, "textBold"], [1, "driverCardBottom"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed", "color", "dark", 1, "driverlocationIcon"], ["name", "locate", 1, "locationIcon"], ["no-padding", "", "no-margin", "", "slot", "fixed", 1, "driverCard", "fixed"], ["src", "../../../assets/clones/map/driver.jpeg"], ["text-capitalize", ""], ["fill", "outline", "slot", "end"], ["color", "primary", "no-margin", ""], [1, "cardContent"], [1, "driverDetails"], ["name", "time", 1, "driverStatusIcons"], [1, "textColor", "textBold", "detailsLabel"], ["text-uppercase", "", 1, "detailText"], ["name", "speedometer", 1, "driverStatusIcons"], ["text-uppercase", "", 1, "textColor", "textBold", "detailsLabel"], [1, "relative"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed", "color", "dark", "padding-bottom", "", 1, "userlocationIcon"], ["slot", "fixed", 1, "userCard"], ["color", "light", 1, "userCardHeader", "dFlex"], ["src", "../../../assets/clones/map/user.jpeg", 1, "userIcon"], ["padding-horizontal", ""], ["align-items-center", "", 1, "dFlex"], ["size", "small", "color", "primary", "shape", "round", "text-capitalize", "", 1, "card-Chip", "textBold", "boxShadow"], ["float-right", "", "padding-start", ""], [1, "textBold", "lightTextColor"], ["color", "light", "no-margin", "", 1, "userCard-conetnt"], [1, "borderBottom", "paddingVertical"], ["text-uppercase", "", 1, "detailText", "fontSmall"], [1, "detailsLabel", "textColor", "textBold"], ["padding-start", "", 1, "userCardFooter"], ["color", "light", "size", "small", 1, "textBold", "boxShadow"], ["color", "firebase", "size", "small", 1, "textBold", "boxShadow"], ["no-padding", "", 1, "requestAll"], ["color", "dark", 1, "textBold", "boxShadow"]], template: function UberPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, UberPage_ion_title_4_Template, 2, 0, "ion-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, UberPage_ion_title_5_Template, 2, 0, "ion-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-toggle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UberPage_Template_ion_toggle_ngModelChange_6_listener($event) { return ctx.driveStatus = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, UberPage_div_8_Template, 6, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, UberPage_div_9_Template, 1, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, UberPage_ion_footer_10_Template, 35, 0, "ion-footer", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, UberPage_ion_footer_11_Template, 45, 0, "ion-footer", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.driveStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.driveStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.driveStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.driveStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.driveStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.driveStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.driveStatus && ctx.userCard);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButtonDelegate"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToggle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["BooleanValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonFabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonThumbnail"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"]], styles: [".welcome-card[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%] {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.fixed[_ngcontent-%COMP%] {\n  position: fixed;\n}\n\n.textBold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.dFlex[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.borderBottom[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e8e4e4;\n}\n\n.textColor[_ngcontent-%COMP%] {\n  color: #000;\n}\n\nagm-map[_ngcontent-%COMP%] {\n  height: calc(100vh - 64px);\n}\n\nagm-map[_ngcontent-%COMP%]   .gm-svpc[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.gmnoprint[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n.nightModeIcon[_ngcontent-%COMP%] {\n  border: 3px dotted #000;\n  padding: 3px;\n}\n\n.driverlocationIcon[_ngcontent-%COMP%] {\n  bottom: 190px;\n}\n\n.driverlocationIcon[_ngcontent-%COMP%]   .locationIcon[_ngcontent-%COMP%] {\n  font-size: 26px;\n}\n\n.driverlocationIcon[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%] {\n  --background: #fff;\n  --color: #000;\n  height: 40px;\n  width: 40px;\n}\n\n.driverCard[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  bottom: -7px;\n  background: #fff;\n  border-radius: 11px;\n  padding-bottom: 5%;\n}\n\n.cardContent[_ngcontent-%COMP%] {\n  background: #ffd524;\n  display: flex;\n  justify-content: space-around;\n  border-radius: 6px;\n  padding: 3%;\n}\n\n.cardContent[_ngcontent-%COMP%]   .driverDetails[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.cardContent[_ngcontent-%COMP%]   .driverStatusIcons[_ngcontent-%COMP%] {\n  font-size: 26px;\n  color: #c3a527;\n}\n\n.cardContent[_ngcontent-%COMP%]   .detailText[_ngcontent-%COMP%] {\n  color: #c3a527;\n  font-size: 10px;\n}\n\n.cardContent[_ngcontent-%COMP%]   .detailsLabel[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.userlocationIcon[_ngcontent-%COMP%] {\n  bottom: 300px;\n}\n\n.userlocationIcon[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%] {\n  --background: #fff;\n  --color: #000;\n  height: 40px;\n  width: 40px;\n}\n\n.userCard[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 94%;\n  bottom: 0;\n  background: #fff;\n  border-radius: 11px;\n  padding-bottom: 5%;\n  margin: 10px;\n  -webkit-animation: mymove 2s;\n          animation: mymove 2s;\n}\n\n.userCard[_ngcontent-%COMP%]   .userCardHeader[_ngcontent-%COMP%] {\n  box-shadow: 2px 2px 2px #e8e4e4;\n}\n\n.userCard[_ngcontent-%COMP%]   .userDetails[_ngcontent-%COMP%] {\n  background: #ffd524;\n  border-radius: 90px;\n  display: flex;\n  height: 21px;\n  padding-left: 12px;\n  padding-right: 14px;\n  padding-top: 3px;\n  padding-bottom: 0;\n}\n\n.userCard[_ngcontent-%COMP%]   .userIcon[_ngcontent-%COMP%] {\n  margin: 2%;\n  margin-left: 9%;\n  border: 1px solid #b9b1b1;\n}\n\n.userCard[_ngcontent-%COMP%]   .userCardFooter[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.userCard[_ngcontent-%COMP%]   .paddingVertical[_ngcontent-%COMP%] {\n  padding: 10px 0px;\n}\n\n.sc-ion-modal-md-h[_ngcontent-%COMP%] {\n  margin-top: 13%;\n}\n\n.card-Chip[_ngcontent-%COMP%] {\n  font-size: 11px;\n  --border-radius: 18px;\n  height: 1.8em;\n}\n\n.requestAll[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n}\n\n.userCard-conetnt[_ngcontent-%COMP%] {\n  padding-bottom: 0;\n  padding-top: 10px;\n}\n\n@-webkit-keyframes mymove {\n  from {\n    bottom: -200px;\n  }\n  to {\n    bottom: 20px;\n  }\n}\n\n@keyframes mymove {\n  from {\n    bottom: -200px;\n  }\n  to {\n    bottom: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2xvbmVzLXVpL2NvbXBvbmVudHMvdWJlci9DOlxcVXNlcnNcXHNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZXRvc1xcX2lvbmljXFxpb25pYzQtY29tcG9uZW50cy9zcmNcXGFwcFxccGFnZXNcXGNsb25lcy11aVxcY29tcG9uZW50c1xcdWJlclxcdWJlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Nsb25lcy11aS9jb21wb25lbnRzL3ViZXIvdWJlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxlQUFBO0FDRUo7O0FEQ0E7RUFDSSxpQkFBQTtBQ0VKOztBREFBO0VBQ0ksYUFBQTtBQ0dKOztBREFBO0VBQ0ksZ0NBQUE7QUNHSjs7QUREQTtFQUNJLFdBQUE7QUNJSjs7QUREQTtFQUNJLDBCQUFBO0FDSUo7O0FEQUk7RUFDSSxhQUFBO0FDR1I7O0FEQUE7RUFDSSx3QkFBQTtBQ0dKOztBRERBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0FDSUo7O0FERkE7RUFDSSxhQUFBO0FDS0o7O0FESEk7RUFDSSxlQUFBO0FDS1I7O0FESEk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0tSOztBRERBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0lKOztBREZBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNLSjs7QURISTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNLUjs7QURISTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDS1I7O0FESEk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ0tSOztBREhJO0VBQ0ksZUFBQTtBQ0tSOztBRERBO0VBQ0ksYUFBQTtBQ0lKOztBREZJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNJUjs7QURBQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7VUFBQSxvQkFBQTtBQ0dKOztBRERJO0VBQ0ksK0JBQUE7QUNHUjs7QURBSTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDRVI7O0FEQUk7RUFHSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDQVI7O0FERUk7RUFDSSxZQUFBO0FDQVI7O0FER0k7RUFDSSxpQkFBQTtBQ0RSOztBREtBO0VBQ0ksZUFBQTtBQ0ZKOztBREtBO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtBQ0ZKOztBRElBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQ0RKOztBRElBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQ0RKOztBRElBO0VBQ0k7SUFDSSxjQUFBO0VDRE47RURHRTtJQUNJLFlBQUE7RUNETjtBQUNGOztBRElBO0VBQ0k7SUFDSSxjQUFBO0VDRk47RURJRTtJQUNJLFlBQUE7RUNGTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2xvbmVzLXVpL2NvbXBvbmVudHMvdWJlci91YmVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XHJcbiAgICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uZml4ZWQge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG59XHJcblxyXG4udGV4dEJvbGQge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmRGbGV4IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5ib3JkZXJCb3R0b20ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGU0ZTQ7XHJcbn1cclxuLnRleHRDb2xvciB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuYWdtLW1hcCB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KTtcclxufVxyXG5cclxuYWdtLW1hcCB7XHJcbiAgICAuZ20tc3ZwYyB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG4uZ21ub3ByaW50IHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4ubmlnaHRNb2RlSWNvbiB7XHJcbiAgICBib3JkZXI6IDNweCBkb3R0ZWQgIzAwMDtcclxuICAgIHBhZGRpbmc6IDNweDtcclxufVxyXG4uZHJpdmVybG9jYXRpb25JY29uIHtcclxuICAgIGJvdHRvbTogMTkwcHg7XHJcblxyXG4gICAgLmxvY2F0aW9uSWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWZhYi1idXR0b24ge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAtLWNvbG9yOiAjMDAwO1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmRyaXZlckNhcmQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3R0b206IC03cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTFweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1JTtcclxufVxyXG4uY2FyZENvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZDUyNDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHBhZGRpbmc6IDMlO1xyXG5cclxuICAgIC5kcml2ZXJEZXRhaWxzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5kcml2ZXJTdGF0dXNJY29ucyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjYzNhNTI3O1xyXG4gICAgfVxyXG4gICAgLmRldGFpbFRleHQge1xyXG4gICAgICAgIGNvbG9yOiAjYzNhNTI3O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIH1cclxuICAgIC5kZXRhaWxzTGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxufVxyXG5cclxuLnVzZXJsb2NhdGlvbkljb24ge1xyXG4gICAgYm90dG9tOiAzMDBweDtcclxuXHJcbiAgICBpb24tZmFiLWJ1dHRvbiB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIC0tY29sb3I6ICMwMDA7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4udXNlckNhcmQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDk0JTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgYW5pbWF0aW9uOiBteW1vdmUgMnM7XHJcblxyXG4gICAgLnVzZXJDYXJkSGVhZGVyIHtcclxuICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCAjZThlNGU0O1xyXG4gICAgfVxyXG5cclxuICAgIC51c2VyRGV0YWlscyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZDUyNDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA5MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMXB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTJweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgICAudXNlckljb24ge1xyXG4gICAgICAgIC8vIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgIC8vIGhlaWdodDogNDBweDtcclxuICAgICAgICBtYXJnaW46IDIlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA5JTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYjliMWIxO1xyXG4gICAgfVxyXG4gICAgLnVzZXJDYXJkRm9vdGVyIHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnBhZGRpbmdWZXJ0aWNhbCB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zYy1pb24tbW9kYWwtbWQtaCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMyU7XHJcbn1cclxuXHJcbi5jYXJkLUNoaXAge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAxLjhlbTtcclxufVxyXG4ucmVxdWVzdEFsbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnVzZXJDYXJkLWNvbmV0bnQge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIG15bW92ZSB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBib3R0b206IC0yMDBweDtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICBib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbXltb3ZlIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIGJvdHRvbTogLTIwMHB4O1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICAgIGJvdHRvbTogMjBweDtcclxuICAgIH1cclxufVxyXG4iLCIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZml4ZWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbi50ZXh0Qm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZEZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYm9yZGVyQm90dG9tIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGU0ZTQ7XG59XG5cbi50ZXh0Q29sb3Ige1xuICBjb2xvcjogIzAwMDtcbn1cblxuYWdtLW1hcCB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xufVxuXG5hZ20tbWFwIC5nbS1zdnBjIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmdtbm9wcmludCB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLm5pZ2h0TW9kZUljb24ge1xuICBib3JkZXI6IDNweCBkb3R0ZWQgIzAwMDtcbiAgcGFkZGluZzogM3B4O1xufVxuXG4uZHJpdmVybG9jYXRpb25JY29uIHtcbiAgYm90dG9tOiAxOTBweDtcbn1cbi5kcml2ZXJsb2NhdGlvbkljb24gLmxvY2F0aW9uSWNvbiB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cbi5kcml2ZXJsb2NhdGlvbkljb24gaW9uLWZhYi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gIC0tY29sb3I6ICMwMDA7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG59XG5cbi5kcml2ZXJDYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAtN3B4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNSU7XG59XG5cbi5jYXJkQ29udGVudCB7XG4gIGJhY2tncm91bmQ6ICNmZmQ1MjQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmc6IDMlO1xufVxuLmNhcmRDb250ZW50IC5kcml2ZXJEZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY2FyZENvbnRlbnQgLmRyaXZlclN0YXR1c0ljb25zIHtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBjb2xvcjogI2MzYTUyNztcbn1cbi5jYXJkQ29udGVudCAuZGV0YWlsVGV4dCB7XG4gIGNvbG9yOiAjYzNhNTI3O1xuICBmb250LXNpemU6IDEwcHg7XG59XG4uY2FyZENvbnRlbnQgLmRldGFpbHNMYWJlbCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnVzZXJsb2NhdGlvbkljb24ge1xuICBib3R0b206IDMwMHB4O1xufVxuLnVzZXJsb2NhdGlvbkljb24gaW9uLWZhYi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gIC0tY29sb3I6ICMwMDA7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG59XG5cbi51c2VyQ2FyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDk0JTtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNSU7XG4gIG1hcmdpbjogMTBweDtcbiAgYW5pbWF0aW9uOiBteW1vdmUgMnM7XG59XG4udXNlckNhcmQgLnVzZXJDYXJkSGVhZGVyIHtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggI2U4ZTRlNDtcbn1cbi51c2VyQ2FyZCAudXNlckRldGFpbHMge1xuICBiYWNrZ3JvdW5kOiAjZmZkNTI0O1xuICBib3JkZXItcmFkaXVzOiA5MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDIxcHg7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbiAgcGFkZGluZy1yaWdodDogMTRweDtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG4udXNlckNhcmQgLnVzZXJJY29uIHtcbiAgbWFyZ2luOiAyJTtcbiAgbWFyZ2luLWxlZnQ6IDklO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjliMWIxO1xufVxuLnVzZXJDYXJkIC51c2VyQ2FyZEZvb3RlciB7XG4gIGZsb2F0OiByaWdodDtcbn1cbi51c2VyQ2FyZCAucGFkZGluZ1ZlcnRpY2FsIHtcbiAgcGFkZGluZzogMTBweCAwcHg7XG59XG5cbi5zYy1pb24tbW9kYWwtbWQtaCB7XG4gIG1hcmdpbi10b3A6IDEzJTtcbn1cblxuLmNhcmQtQ2hpcCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxOHB4O1xuICBoZWlnaHQ6IDEuOGVtO1xufVxuXG4ucmVxdWVzdEFsbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnVzZXJDYXJkLWNvbmV0bnQge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBteW1vdmUge1xuICBmcm9tIHtcbiAgICBib3R0b206IC0yMDBweDtcbiAgfVxuICB0byB7XG4gICAgYm90dG9tOiAyMHB4O1xuICB9XG59XG5Aa2V5ZnJhbWVzIG15bW92ZSB7XG4gIGZyb20ge1xuICAgIGJvdHRvbTogLTIwMHB4O1xuICB9XG4gIHRvIHtcbiAgICBib3R0b206IDIwcHg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UberPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-uber',
                templateUrl: './uber.page.html',
                styleUrls: ['./uber.page.scss'],
            }]
    }], function () { return [{ type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=components-uber-uber-module-es2015.js.map