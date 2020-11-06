(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["drawer-drawer-module"],{

/***/ "./src/app/components/ui/slide-drawer/slide-drawer.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/ui/slide-drawer/slide-drawer.component.ts ***!
  \**********************************************************************/
/*! exports provided: SlideDrawerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideDrawerComponent", function() { return SlideDrawerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





const _c0 = ["*"];
class SlideDrawerComponent {
    constructor(gestureCtrl, element, renderer) {
        this.gestureCtrl = gestureCtrl;
        this.element = element;
        this.renderer = renderer;
        this.state = 'bottom';
        this.title = 'Hello World';
        this.handleHeight = 138;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const windowHeight = window.innerHeight;
            const drawerHeight = windowHeight - this.handleHeight;
            // const drawerHeight = windowHeight - 118; 
            this.renderer.setStyle(this.element.nativeElement, 'top', windowHeight - this.handleHeight + 'px');
            const options = {
                el: document.querySelector('#header'),
                direction: 'y',
                gestureName: 'slide-drawer-swipe',
                onStart: (ev) => {
                    // do something as the gesture begins
                    this.renderer.setStyle(this.element.nativeElement, 'transition', 'none');
                },
                onMove: (ev) => {
                    // do something in response to movement        
                    if (ev.deltaY < 0 && this.state === 'bottom') {
                        this.renderer.setStyle(this.element.nativeElement, 'transform', `translateY(${ev.deltaY}px)`);
                    }
                    else if (this.state === 'top') {
                        // element size is -76 then deltaY subtraction. ex. calc (2 - 76) = -74 means downward movement.
                        this.renderer.setStyle(this.element.nativeElement, 'transform', `translateY(calc(${ev.deltaY}px - ${drawerHeight}px))`);
                    }
                },
                onEnd: (ev) => {
                    // do something when the gesture ends
                    this.renderer.setStyle(this.element.nativeElement, 'transition', '0.3s ease-out');
                    if (ev.deltaY < -(windowHeight / 20) && this.state === 'bottom') {
                        this.renderer.setStyle(this.element.nativeElement, 'transform', `translateY(-${drawerHeight}px)`);
                        this.state = 'top';
                    }
                    else if (ev.deltaY < (windowHeight / 20) && this.state === 'top') {
                        this.renderer.setStyle(this.element.nativeElement, 'transform', `translateY(-${drawerHeight}px)`);
                        this.state = 'top';
                    }
                    else if (ev.deltaY > (windowHeight / 20) && this.state === 'top') {
                        this.renderer.setStyle(this.element.nativeElement, 'transform', 'translateY(0px)');
                        this.state = 'bottom';
                    }
                    else {
                        this.renderer.setStyle(this.element.nativeElement, 'transform', 'translateY(0px)');
                        this.state = 'bottom';
                    }
                }
            };
            const gesture = yield this.gestureCtrl.create(options);
            gesture.enable();
        });
    }
}
SlideDrawerComponent.ɵfac = function SlideDrawerComponent_Factory(t) { return new (t || SlideDrawerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["GestureController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"])); };
SlideDrawerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SlideDrawerComponent, selectors: [["app-slide-drawer"]], inputs: { title: "title", handleHeight: "handleHeight" }, ngContentSelectors: _c0, decls: 7, vars: 1, consts: [["mode", "ios", "id", "header"], ["mode", "md"], ["src", "assets/icon/arrow.svg"]], template: function SlideDrawerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: calc(100vh - 144px);\n  z-index: 9999;\n}\n[_nghost-%COMP%]   ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  height: 88px;\n  border-top-right-radius: 8px;\n  border-top-left-radius: 8px;\n}\n[_nghost-%COMP%]   ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 60px;\n  height: 20px;\n  display: flex;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91aS9zbGlkZS1kcmF3ZXIvQzpcXFVzZXJzXFxWYWduZXIgU2FiYWRpXFxEb2N1bWVudHNcXFByb2plY3RzXFxfTXlcXGF3ZXNvbWUtY29tcG9uZW50cy1pb25pYy9zcmNcXGFwcFxcY29tcG9uZW50c1xcdWlcXHNsaWRlLWRyYXdlclxcc2xpZGUtZHJhd2VyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3VpL3NsaWRlLWRyYXdlci9zbGlkZS1kcmF3ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0FDQ0o7QURDUTtFQUNJLFlBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0FDQ1o7QURBWTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNFaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VpL3NsaWRlLWRyYXdlci9zbGlkZS1kcmF3ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogY2FsYygxMDB2aCAtIDE0NHB4KTtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICBpb24taGVhZGVyIHtcclxuICAgICAgICBpb24tdG9vbGJhciB7XHJcbiAgICAgICAgICAgIGhlaWdodDogODhweDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBjYWxjKDEwMHZoIC0gMTQ0cHgpO1xuICB6LWluZGV4OiA5OTk5O1xufVxuOmhvc3QgaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG4gIGhlaWdodDogODhweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xufVxuOmhvc3QgaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDAgYXV0bztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SlideDrawerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-slide-drawer',
                templateUrl: './slide-drawer.component.html',
                styleUrls: ['./slide-drawer.component.scss'],
            }]
    }], function () { return [{ type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["GestureController"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }]; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], handleHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/ui/ui.components.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/ui/ui.components.module.ts ***!
  \*******************************************************/
/*! exports provided: components, UiComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiComponentsModule", function() { return UiComponentsModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _slide_drawer_slide_drawer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slide-drawer/slide-drawer.component */ "./src/app/components/ui/slide-drawer/slide-drawer.component.ts");





const components = [
    _slide_drawer_slide_drawer_component__WEBPACK_IMPORTED_MODULE_3__["SlideDrawerComponent"]
];
class UiComponentsModule {
}
UiComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: UiComponentsModule });
UiComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function UiComponentsModule_Factory(t) { return new (t || UiComponentsModule)(); }, imports: [[_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UiComponentsModule, { declarations: [_slide_drawer_slide_drawer_component__WEBPACK_IMPORTED_MODULE_3__["SlideDrawerComponent"]], imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]], exports: [_slide_drawer_slide_drawer_component__WEBPACK_IMPORTED_MODULE_3__["SlideDrawerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UiComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [components],
                imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                exports: [components]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/samples/components/gestures/drawer/drawer-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/samples/components/gestures/drawer/drawer-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: DrawerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerPageRoutingModule", function() { return DrawerPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _drawer_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drawer.page */ "./src/app/pages/samples/components/gestures/drawer/drawer.page.ts");





const routes = [
    {
        path: '',
        component: _drawer_page__WEBPACK_IMPORTED_MODULE_2__["DrawerPage"]
    }
];
class DrawerPageRoutingModule {
}
DrawerPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DrawerPageRoutingModule });
DrawerPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DrawerPageRoutingModule_Factory(t) { return new (t || DrawerPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DrawerPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DrawerPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/samples/components/gestures/drawer/drawer.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/samples/components/gestures/drawer/drawer.module.ts ***!
  \***************************************************************************/
/*! exports provided: DrawerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerPageModule", function() { return DrawerPageModule; });
/* harmony import */ var _components_ui_ui_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../../components/ui/ui.components.module */ "./src/app/components/ui/ui.components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _drawer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./drawer-routing.module */ "./src/app/pages/samples/components/gestures/drawer/drawer-routing.module.ts");
/* harmony import */ var _drawer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./drawer.page */ "./src/app/pages/samples/components/gestures/drawer/drawer.page.ts");








class DrawerPageModule {
}
DrawerPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DrawerPageModule });
DrawerPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function DrawerPageModule_Factory(t) { return new (t || DrawerPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _drawer_routing_module__WEBPACK_IMPORTED_MODULE_5__["DrawerPageRoutingModule"],
            _components_ui_ui_components_module__WEBPACK_IMPORTED_MODULE_0__["UiComponentsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DrawerPageModule, { declarations: [_drawer_page__WEBPACK_IMPORTED_MODULE_6__["DrawerPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        _drawer_routing_module__WEBPACK_IMPORTED_MODULE_5__["DrawerPageRoutingModule"],
        _components_ui_ui_components_module__WEBPACK_IMPORTED_MODULE_0__["UiComponentsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DrawerPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                    _drawer_routing_module__WEBPACK_IMPORTED_MODULE_5__["DrawerPageRoutingModule"],
                    _components_ui_ui_components_module__WEBPACK_IMPORTED_MODULE_0__["UiComponentsModule"]
                ],
                declarations: [_drawer_page__WEBPACK_IMPORTED_MODULE_6__["DrawerPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/samples/components/gestures/drawer/drawer.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/samples/components/gestures/drawer/drawer.page.ts ***!
  \*************************************************************************/
/*! exports provided: DrawerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerPage", function() { return DrawerPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _components_ui_slide_drawer_slide_drawer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../components/ui/slide-drawer/slide-drawer.component */ "./src/app/components/ui/slide-drawer/slide-drawer.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function DrawerPage_ion_item_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; };
class DrawerPage {
    constructor() { }
    ngOnInit() {
    }
}
DrawerPage.ɵfac = function DrawerPage_Factory(t) { return new (t || DrawerPage)(); };
DrawerPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DrawerPage, selectors: [["app-drawer"]], decls: 13, vars: 2, consts: [["slot", "start"], ["defaultHref", "/gestures"], ["lines", "none"], [4, "ngFor", "ngForOf"], ["slot", "start", "color", "medium", "name", "book"]], template: function DrawerPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Slide Drawer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-slide-drawer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-list-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DrawerPage_ion_item_12_Template, 4, 0, "ion-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _components_ui_slide_drawer_slide_drawer_component__WEBPACK_IMPORTED_MODULE_2__["SlideDrawerComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonListHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NhbXBsZXMvY29tcG9uZW50cy9nZXN0dXJlcy9kcmF3ZXIvZHJhd2VyLnBhZ2Uuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DrawerPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-drawer',
                templateUrl: './drawer.page.html',
                styleUrls: ['./drawer.page.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=drawer-drawer-module-es2015.js.map