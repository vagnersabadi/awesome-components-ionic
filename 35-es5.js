var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35], {
        /***/ "./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js": 
        /*!********************************************************************!*\
          !*** ./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js ***!
          \********************************************************************/
        /*! exports provided: ion_loading */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_loading", function () { return Loading; });
            /* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm/core-feeeff0d.js");
            /* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
            /* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "./node_modules/@ionic/core/dist/esm/helpers-46f4a262.js");
            /* harmony import */ var _animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animation-af478fe9.js */ "./node_modules/@ionic/core/dist/esm/animation-af478fe9.js");
            /* harmony import */ var _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./overlays-10640d86.js */ "./node_modules/@ionic/core/dist/esm/overlays-10640d86.js");
            /* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");
            /* harmony import */ var _index_3476b023_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index-3476b023.js */ "./node_modules/@ionic/core/dist/esm/index-3476b023.js");
            /**
             * iOS Loading Enter Animation
             */
            var iosEnterAnimation = function (baseEl) {
                var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                var backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                backdropAnimation
                    .addElement(baseEl.querySelector('ion-backdrop'))
                    .fromTo('opacity', 0.01, 0.3);
                wrapperAnimation
                    .addElement(baseEl.querySelector('.loading-wrapper'))
                    .keyframes([
                    { offset: 0, opacity: 0.01, transform: 'scale(1.1)' },
                    { offset: 1, opacity: 1, transform: 'scale(1)' }
                ]);
                return baseAnimation
                    .addElement(baseEl)
                    .easing('ease-in-out')
                    .duration(200)
                    .addAnimation([backdropAnimation, wrapperAnimation]);
            };
            /**
             * iOS Loading Leave Animation
             */
            var iosLeaveAnimation = function (baseEl) {
                var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                var backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                backdropAnimation
                    .addElement(baseEl.querySelector('ion-backdrop'))
                    .fromTo('opacity', 0.3, 0);
                wrapperAnimation
                    .addElement(baseEl.querySelector('.loading-wrapper'))
                    .keyframes([
                    { offset: 0, opacity: 0.99, transform: 'scale(1)' },
                    { offset: 1, opacity: 0, transform: 'scale(0.9)' }
                ]);
                return baseAnimation
                    .addElement(baseEl)
                    .easing('ease-in-out')
                    .duration(200)
                    .addAnimation([backdropAnimation, wrapperAnimation]);
            };
            /**
             * Md Loading Enter Animation
             */
            var mdEnterAnimation = function (baseEl) {
                var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                var backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                backdropAnimation
                    .addElement(baseEl.querySelector('ion-backdrop'))
                    .fromTo('opacity', 0.01, 0.32);
                wrapperAnimation
                    .addElement(baseEl.querySelector('.loading-wrapper'))
                    .keyframes([
                    { offset: 0, opacity: 0.01, transform: 'scale(1.1)' },
                    { offset: 1, opacity: 1, transform: 'scale(1)' }
                ]);
                return baseAnimation
                    .addElement(baseEl)
                    .easing('ease-in-out')
                    .duration(200)
                    .addAnimation([backdropAnimation, wrapperAnimation]);
            };
            /**
             * Md Loading Leave Animation
             */
            var mdLeaveAnimation = function (baseEl) {
                var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                var backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                backdropAnimation
                    .addElement(baseEl.querySelector('ion-backdrop'))
                    .fromTo('opacity', 0.32, 0);
                wrapperAnimation
                    .addElement(baseEl.querySelector('.loading-wrapper'))
                    .keyframes([
                    { offset: 0, opacity: 0.99, transform: 'scale(1)' },
                    { offset: 1, opacity: 0, transform: 'scale(0.9)' }
                ]);
                return baseAnimation
                    .addElement(baseEl)
                    .easing('ease-in-out')
                    .duration(200)
                    .addAnimation([backdropAnimation, wrapperAnimation]);
            };
            var Loading = /** @class */ (function () {
                function class_1(hostRef) {
                    var _this = this;
                    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                    this.presented = false;
                    this.mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
                    /**
                     * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
                     */
                    this.keyboardClose = true;
                    /**
                     * Number of milliseconds to wait before dismissing the loading indicator.
                     */
                    this.duration = 0;
                    /**
                     * If `true`, the loading indicator will be dismissed when the backdrop is clicked.
                     */
                    this.backdropDismiss = false;
                    /**
                     * If `true`, a backdrop will be displayed behind the loading indicator.
                     */
                    this.showBackdrop = true;
                    /**
                     * If `true`, the loading indicator will be translucent.
                     * Only applies when the mode is `"ios"` and the device supports
                     * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
                     */
                    this.translucent = false;
                    /**
                     * If `true`, the loading indicator will animate.
                     */
                    this.animated = true;
                    this.onBackdropTap = function () {
                        _this.dismiss(undefined, _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["B"]);
                    };
                    Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["d"])(this.el);
                    this.didPresent = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionLoadingDidPresent", 7);
                    this.willPresent = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionLoadingWillPresent", 7);
                    this.willDismiss = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionLoadingWillDismiss", 7);
                    this.didDismiss = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionLoadingDidDismiss", 7);
                }
                class_1.prototype.componentWillLoad = function () {
                    if (this.spinner === undefined) {
                        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
                        this.spinner = _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('loadingSpinner', _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('spinner', mode === 'ios' ? 'lines' : 'crescent'));
                    }
                };
                /**
                 * Present the loading overlay after it has been created.
                 */
                class_1.prototype.present = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["e"])(this, 'loadingEnter', iosEnterAnimation, mdEnterAnimation, undefined)];
                                case 1:
                                    _a.sent();
                                    if (this.duration > 0) {
                                        this.durationTimeout = setTimeout(function () { return _this.dismiss(); }, this.duration + 10);
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                /**
                 * Dismiss the loading overlay after it has been presented.
                 *
                 * @param data Any data to emit in the dismiss events.
                 * @param role The role of the element that is dismissing the loading.
                 * This can be useful in a button handler for determining which button was
                 * clicked to dismiss the loading.
                 * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
                 */
                class_1.prototype.dismiss = function (data, role) {
                    if (this.durationTimeout) {
                        clearTimeout(this.durationTimeout);
                    }
                    return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["f"])(this, data, role, 'loadingLeave', iosLeaveAnimation, mdLeaveAnimation);
                };
                /**
                 * Returns a promise that resolves when the loading did dismiss.
                 */
                class_1.prototype.onDidDismiss = function () {
                    return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["g"])(this.el, 'ionLoadingDidDismiss');
                };
                /**
                 * Returns a promise that resolves when the loading will dismiss.
                 */
                class_1.prototype.onWillDismiss = function () {
                    return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_4__["g"])(this.el, 'ionLoadingWillDismiss');
                };
                class_1.prototype.render = function () {
                    var _a;
                    var _b = this, message = _b.message, spinner = _b.spinner;
                    var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
                    return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { onIonBackdropTap: this.onBackdropTap, style: {
                            zIndex: "" + (40000 + this.overlayIndex)
                        }, class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_5__["g"])(this.cssClass)), (_a = {}, _a[mode] = true, _a['loading-translucent'] = this.translucent, _a)) }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-backdrop", { visible: this.showBackdrop, tappable: this.backdropDismiss }), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "loading-wrapper", role: "dialog" }, spinner && (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "loading-spinner" }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-spinner", { name: spinner }))), message && Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "loading-content", innerHTML: Object(_index_3476b023_js__WEBPACK_IMPORTED_MODULE_6__["s"])(message) }))));
                };
                Object.defineProperty(class_1.prototype, "el", {
                    get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_1, "style", {
                    get: function () { return ".sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-bubbles.sc-ion-loading-ios, .spinner-circles.sc-ion-loading-ios, .spinner-crescent.sc-ion-loading-ios, .spinner-dots.sc-ion-loading-ios, .spinner-lines.sc-ion-loading-ios, .spinner-lines-small.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-overlay-background-color,var(--ion-color-step-100,#f9f9f9));--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600,#666);color:var(--ion-text-color,#000);font-size:14px}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;padding-left:34px;padding-right:34px;padding-top:24px;padding-bottom:24px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-wrapper.sc-ion-loading-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px}}\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.loading-translucent.sc-ion-loading-ios-h .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.loading-content.sc-ion-loading-ios{font-weight:700}.loading-spinner.sc-ion-loading-ios + .loading-content.sc-ion-loading-ios{margin-left:16px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-spinner.sc-ion-loading-ios + .loading-content.sc-ion-loading-ios{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_1;
            }());
            /***/ 
        })
    }]);
//# sourceMappingURL=35-es2015.js.map
//# sourceMappingURL=35-es5.js.map
//# sourceMappingURL=35-es5.js.map