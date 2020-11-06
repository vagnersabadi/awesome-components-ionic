(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["touch-swipe-touch-swipe-module"],{

/***/ "./src/app/directives/social-gestures/social-gestures.directive.ts":
/*!*************************************************************************!*\
  !*** ./src/app/directives/social-gestures/social-gestures.directive.ts ***!
  \*************************************************************************/
/*! exports provided: SocialGestureDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialGestureDirective", function() { return SocialGestureDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/**
 * By
 * https://medium.com/@JordanBenge/ionic-4-gestures-made-easy-5ce30aa82b7b
 */




/**
 * In component.ts
 *
 * gestureOpts: Gesture[] = [
 * {name: 'tap'},
 * {name: 'doubleTap'},
 * {name: 'press'},
 * {name: 'swipe'},
 *  ];
 */
/**
 * In component.html
 *
 * < ion-card
 * appSocialGestures
 * [gestureOpts]="gestureOpts"
 * (tap)="onTap($event) "
 * (doubleTap)="onDoubleTap($event) "
 * (press)="onPress($event)"
 * (swipe)="onSwipe($event)"
 * (swipeEnd)="onMoveed($event)"
 * > ... </ ion-card
 */
class SocialGestureDirective {
    constructor(gestureCtrl, el) {
        this.gestureCtrl = gestureCtrl;
        this.el = el;
        this.debugMode = false;
        // Events we can listen to.
        this.tap = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.doubleTap = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.press = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.swipe = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.swipeEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tapGesture = {
            name: 'tap',
            enabled: false,
            interval: 250,
        };
        this.doubleTapGesture = {
            name: 'doubleTap',
            enabled: false,
            interval: 300,
        };
        this.pressGesture = {
            name: 'press',
            enabled: false,
            interval: 251,
        };
        this.swipeGesture = {
            name: 'swipe',
            enabled: false,
            interval: 250,
            threshold: 15,
            reportInterval: undefined,
            direction: ['right', 'left'],
        };
        this.DIRECTIVE_GESTURES = [this.tapGesture, this.doubleTapGesture, this.pressGesture, this.swipeGesture];
        this.GESTURE_CREATED = false;
        this.lastTap = 0;
        this.tapCount = 0;
        this.tapTimeout = null;
        this.pressTimeout = null;
        this.isPressing = false;
        this.moveTimeout = null;
        this.isMoving = false;
        this.lastSwipeReport = null;
    }
    ngOnInit() {
        this.initSetupGestures();
    }
    onPress(touch) {
        if (!this.pressGesture.enabled) {
            return;
        } // Press is not enabled, don't do anything.
        this.handlePressing(touch.type);
    }
    handleTaps(e) {
        const tapTimestamp = Math.floor(e.timeStamp);
        const isDoubleTap = this.lastTap + this.tapGesture.interval > tapTimestamp;
        if ((!this.tapGesture.enabled && !this.doubleTapGesture.enabled) || this.isPressing || this.isMoving) {
            return this.resetTaps();
        }
        this.tapCount++;
        if (isDoubleTap && this.doubleTapGesture.enabled) {
            this.emitTaps();
        }
        else if (!isDoubleTap) {
            this.tapTimeout = setTimeout(() => this.emitTaps(), this.tapGesture.interval);
        }
        this.lastTap = tapTimestamp;
    }
    /**
     * This will setup the gestures that the user has provided in their Gesture Options.
     */
    initSetupGestures() {
        this.DIRECTIVE_GESTURES.filter((dGesture) => {
            this.gestureOpts.find((gestureOpt) => {
                if (dGesture.name === gestureOpt.name) {
                    // get values gestureOpts param
                    dGesture.enabled = true;
                    if (dGesture.name === 'swipe') {
                        this.swipeGesture.reportInterval = gestureOpt.reportInterval || dGesture.reportInterval;
                        this.swipeGesture.direction = gestureOpt.direction || dGesture.direction;
                        this.createGesture();
                    }
                    else {
                        dGesture.interval = gestureOpt.interval || dGesture.interval;
                        dGesture.threshold = gestureOpt.threshold || dGesture.threshold;
                    }
                }
            });
        });
    }
    handleMoving(moveType, $event) {
        if (this.moveTimeout !== null) {
            clearTimeout(this.moveTimeout);
            this.moveTimeout = null;
        }
        const deltaX = $event.deltaX;
        const deltaY = $event.deltaY;
        const absDeltaX = Math.abs(deltaX);
        const absDeltaY = Math.abs(deltaY);
        const reportItvl = this.swipeGesture.reportInterval || 'live';
        const threshold = this.swipeGesture.threshold;
        if (absDeltaX < threshold && absDeltaY < threshold) { // We haven't moved enough to consider it a swipe.
            return;
        }
        const shouldReport = this.isMoving &&
            ((reportItvl === 'start' && this.lastSwipeReport === null) ||
                (reportItvl === 'live') ||
                (reportItvl === 'end' && moveType === 'moveend'));
        this.lastSwipeReport = $event.timeStamp;
        if (shouldReport) {
            const emitObj = Object.assign({ dirX: undefined, dirY: undefined, swipeType: moveType }, $event);
            if (absDeltaX > threshold) {
                if (deltaX > 0) {
                    emitObj.dirX = 'right';
                }
                else if (deltaX < 0) {
                    emitObj.dirX = 'left';
                }
            }
            if (absDeltaY > threshold) {
                if (deltaY > 0) {
                    emitObj.dirY = 'down';
                }
                else if (deltaY < 0) {
                    emitObj.dirY = 'up';
                }
            }
            const dirArray = this.swipeGesture.direction;
            if (dirArray.includes(emitObj.dirX) || dirArray.includes(emitObj.dirY)) {
                if (this.debugMode) {
                    console.log(`Swipe`);
                }
                this.swipe.emit(emitObj);
            }
        }
        if ((moveType === 'moveend' && this.lastSwipeReport !== null)) {
            this.isMoving = false;
            this.lastSwipeReport = null;
            this.swipeEnd.emit();
        }
    }
    /**
     * Touch event
     * @param type touchend or touchstart
     */
    handlePressing(type) {
        if (type === 'touchstart') {
            this.pressTimeout = setTimeout(() => {
                this.isPressing = true;
                if (this.debugMode) {
                    console.log('PressStart');
                }
                this.press.emit('start');
            }, this.pressGesture.interval); // Considered a press if it's longer than interval (default: 251).
        }
        else if (type === 'touchend') {
            clearTimeout(this.pressTimeout);
            if (this.isPressing) {
                if (this.debugMode) {
                    console.log('PressEnd');
                }
                this.press.emit('end');
                this.resetTaps(); // Just incase this gets passed as a tap event too.
            }
            // Clicks have a natural delay of 300ms, so we have to account for that, before resetting isPressing.
            // Otherwise a tap event is emitted.
            setTimeout(() => this.isPressing = false, 150);
        }
    }
    /**
     * Observe element gestures
     */
    createGesture() {
        if (this.GESTURE_CREATED) {
            return;
        }
        const gesture = this.gestureCtrl.create({
            gestureName: 'socialGesture',
            el: this.el.nativeElement,
            onStart: () => {
                if (this.swipeGesture.enabled) {
                    this.isMoving = true;
                    this.moveTimeout = setInterval(() => {
                        this.isMoving = false;
                    }, 249);
                }
            },
            onMove: ($event) => {
                if (this.swipeGesture.enabled) {
                    this.handleMoving('moving', $event);
                }
            },
            onEnd: ($event) => {
                if (this.swipeGesture.enabled) {
                    this.handleMoving('moveend', $event);
                }
            },
        }, true);
        gesture.enable();
        this.GESTURE_CREATED = true;
    }
    /**
     * Send emit tags for clicks
     */
    emitTaps() {
        if (this.tapCount === 1 && this.tapGesture.enabled) {
            if (this.debugMode) {
                console.log('1 Tap ');
            }
            this.tap.emit();
        }
        else if (this.tapCount === 2 && this.doubleTapGesture.enabled) {
            if (this.debugMode) {
                console.log('2 Tap');
            }
            this.doubleTap.emit();
        }
        this.resetTaps();
    }
    /**
     * Clear counters and timeouts for taps
     */
    resetTaps() {
        clearTimeout(this.tapTimeout); // clear the old timeout
        this.tapCount = 0;
        this.tapTimeout = null;
        this.lastTap = 0;
    }
}
SocialGestureDirective.ɵfac = function SocialGestureDirective_Factory(t) { return new (t || SocialGestureDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["GestureController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
SocialGestureDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: SocialGestureDirective, selectors: [["", "appSocialGestures", ""]], hostBindings: function SocialGestureDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("touchstart", function SocialGestureDirective_touchstart_HostBindingHandler($event) { return ctx.onPress($event); })("touchend", function SocialGestureDirective_touchend_HostBindingHandler($event) { return ctx.onPress($event); })("click", function SocialGestureDirective_click_HostBindingHandler($event) { return ctx.handleTaps($event); });
    } }, inputs: { gestureOpts: "gestureOpts", debugMode: "debugMode" }, outputs: { tap: "tap", doubleTap: "doubleTap", press: "press", swipe: "swipe", swipeEnd: "swipeEnd" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialGestureDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appSocialGestures]',
            }]
    }], function () { return [{ type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["GestureController"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { gestureOpts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], debugMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], tap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], doubleTap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], press: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], swipe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], swipeEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onPress: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['touchstart', ['$event']]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['touchend', ['$event']]
        }], handleTaps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/samples/components/gestures/touch-swipe/touch-swipe-routing.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/samples/components/gestures/touch-swipe/touch-swipe-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: TouchSwipePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouchSwipePageRoutingModule", function() { return TouchSwipePageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _touch_swipe_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./touch-swipe.page */ "./src/app/pages/samples/components/gestures/touch-swipe/touch-swipe.page.ts");





const routes = [
    {
        path: '',
        component: _touch_swipe_page__WEBPACK_IMPORTED_MODULE_2__["TouchSwipePage"]
    }
];
class TouchSwipePageRoutingModule {
}
TouchSwipePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TouchSwipePageRoutingModule });
TouchSwipePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TouchSwipePageRoutingModule_Factory(t) { return new (t || TouchSwipePageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TouchSwipePageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TouchSwipePageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/samples/components/gestures/touch-swipe/touch-swipe.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/samples/components/gestures/touch-swipe/touch-swipe.module.ts ***!
  \*************************************************************************************/
/*! exports provided: TouchSwipePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouchSwipePageModule", function() { return TouchSwipePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _touch_swipe_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./touch-swipe-routing.module */ "./src/app/pages/samples/components/gestures/touch-swipe/touch-swipe-routing.module.ts");
/* harmony import */ var _touch_swipe_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./touch-swipe.page */ "./src/app/pages/samples/components/gestures/touch-swipe/touch-swipe.page.ts");
/* harmony import */ var _directives_social_gestures_social_gestures_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../../directives/social-gestures/social-gestures.directive */ "./src/app/directives/social-gestures/social-gestures.directive.ts");








class TouchSwipePageModule {
}
TouchSwipePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TouchSwipePageModule });
TouchSwipePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TouchSwipePageModule_Factory(t) { return new (t || TouchSwipePageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _touch_swipe_routing_module__WEBPACK_IMPORTED_MODULE_4__["TouchSwipePageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TouchSwipePageModule, { declarations: [_touch_swipe_page__WEBPACK_IMPORTED_MODULE_5__["TouchSwipePage"], _directives_social_gestures_social_gestures_directive__WEBPACK_IMPORTED_MODULE_6__["SocialGestureDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        _touch_swipe_routing_module__WEBPACK_IMPORTED_MODULE_4__["TouchSwipePageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TouchSwipePageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                    _touch_swipe_routing_module__WEBPACK_IMPORTED_MODULE_4__["TouchSwipePageRoutingModule"]
                ],
                declarations: [_touch_swipe_page__WEBPACK_IMPORTED_MODULE_5__["TouchSwipePage"], _directives_social_gestures_social_gestures_directive__WEBPACK_IMPORTED_MODULE_6__["SocialGestureDirective"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/samples/components/gestures/touch-swipe/touch-swipe.page.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/samples/components/gestures/touch-swipe/touch-swipe.page.ts ***!
  \***********************************************************************************/
/*! exports provided: TouchSwipePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouchSwipePage", function() { return TouchSwipePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _directives_social_gestures_social_gestures_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../directives/social-gestures/social-gestures.directive */ "./src/app/directives/social-gestures/social-gestures.directive.ts");






class TouchSwipePage {
    constructor(toastController) {
        this.toastController = toastController;
        this.gestureOptsTap = [
            { name: 'tap' },
            { name: 'doubleTap' },
        ];
        this.gestureOptsPress = [
            { name: 'press', interval: 1500 },
        ];
        this.gestureOptsSwipe = [
            { name: 'swipe', direction: ['left', 'right'] },
        ];
        this.direction = null;
    }
    ngOnInit() {
    }
    onTap() {
        this.presentToast('Tap');
    }
    onDoubleTap() {
        this.presentToast('DoubleTap');
    }
    onPress() {
        this.presentToast('Long Press 1.5s');
    }
    onSwipe(e) {
        this.direction = e.dirX;
    }
    onMoveed() {
        this.presentToast('Swipe End ' + this.direction);
    }
    presentToast(msgm) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msgm,
                duration: 500
            });
            toast.present();
        });
    }
}
TouchSwipePage.ɵfac = function TouchSwipePage_Factory(t) { return new (t || TouchSwipePage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"])); };
TouchSwipePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TouchSwipePage, selectors: [["app-touch-swipe"]], decls: 25, vars: 3, consts: [["slot", "start"], ["defaultHref", "/gestures"], ["color", "primary", "appSocialGestures", "", "debugMode", "true", 3, "gestureOpts", "tap", "doubleTap"], ["color", "secondary", "appSocialGestures", "", "debugMode", "true", 3, "gestureOpts", "press"], ["color", "tertiary", "appSocialGestures", "", "debugMode", "true", 3, "gestureOpts", "swipe", "swipeEnd"]], template: function TouchSwipePage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Touch Swipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("tap", function TouchSwipePage_Template_ion_card_tap_7_listener() { return ctx.onTap(); })("doubleTap", function TouchSwipePage_Template_ion_card_doubleTap_7_listener() { return ctx.onDoubleTap(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Exemple 01");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Tap and DoubleTap");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("press", function TouchSwipePage_Template_ion_card_press_13_listener() { return ctx.onPress(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Exemple 02");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "LongPress after 1.5 seconds");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("swipe", function TouchSwipePage_Template_ion_card_swipe_19_listener($event) { return ctx.onSwipe($event); })("swipeEnd", function TouchSwipePage_Template_ion_card_swipeEnd_19_listener() { return ctx.onMoveed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Exemple 03");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Swipe Lefth Right");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("gestureOpts", ctx.gestureOptsTap);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("gestureOpts", ctx.gestureOptsPress);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("gestureOpts", ctx.gestureOptsSwipe);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCard"], _directives_social_gestures_social_gestures_directive__WEBPACK_IMPORTED_MODULE_3__["SocialGestureDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCardHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCardSubtitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCardTitle"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NhbXBsZXMvY29tcG9uZW50cy9nZXN0dXJlcy90b3VjaC1zd2lwZS90b3VjaC1zd2lwZS5wYWdlLnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TouchSwipePage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-touch-swipe',
                templateUrl: './touch-swipe.page.html',
                styleUrls: ['./touch-swipe.page.scss'],
            }]
    }], function () { return [{ type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=touch-swipe-touch-swipe-module-es2015.js.map