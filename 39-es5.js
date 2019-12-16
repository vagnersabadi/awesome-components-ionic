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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39], {
        /***/ "./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js": 
        /*!******************************************************************!*\
          !*** ./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js ***!
          \******************************************************************/
        /*! exports provided: ion_modal */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_modal", function () { return Modal; });
            /* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm/core-feeeff0d.js");
            /* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
            /* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "./node_modules/@ionic/core/dist/esm/helpers-46f4a262.js");
            /* harmony import */ var _animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animation-af478fe9.js */ "./node_modules/@ionic/core/dist/esm/animation-af478fe9.js");
            /* harmony import */ var _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants-3c3e1099.js */ "./node_modules/@ionic/core/dist/esm/constants-3c3e1099.js");
            /* harmony import */ var _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./overlays-10640d86.js */ "./node_modules/@ionic/core/dist/esm/overlays-10640d86.js");
            /* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");
            /* harmony import */ var _framework_delegate_c2e2e1f4_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./framework-delegate-c2e2e1f4.js */ "./node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js");
            /* harmony import */ var _index_4d91f03a_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index-4d91f03a.js */ "./node_modules/@ionic/core/dist/esm/index-4d91f03a.js");
            /**
             * iOS Modal Enter Animation
             */
            var iosEnterAnimation = function (baseEl) {
                var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                var backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                backdropAnimation
                    .addElement(baseEl.querySelector('ion-backdrop'))
                    .fromTo('opacity', 0.01, 0.4);
                wrapperAnimation
                    .addElement(baseEl.querySelector('.modal-wrapper'))
                    .beforeStyles({ 'opacity': 1 })
                    .fromTo('transform', 'translateY(100%)', 'translateY(0%)');
                return baseAnimation
                    .addElement(baseEl)
                    .easing('cubic-bezier(0.36,0.66,0.04,1)')
                    .duration(400)
                    .beforeAddClass('show-modal')
                    .addAnimation([backdropAnimation, wrapperAnimation]);
            };
            /**
             * Animations for modals
             */
            // export function modalSlideIn(rootEl: HTMLElement) {
            // }
            // export class ModalSlideOut {
            //   constructor(el: HTMLElement) {
            //     let backdrop = new Animation(this.plt, el.querySelector('ion-backdrop'));
            //     let wrapperEle = <HTMLElement>el.querySelector('.modal-wrapper');
            //     let wrapperEleRect = wrapperEle.getBoundingClientRect();
            //     let wrapper = new Animation(this.plt, wrapperEle);
            //     // height of the screen - top of the container tells us how much to scoot it down
            //     // so it's off-screen
            //     wrapper.fromTo('translateY', '0px', `${this.plt.height() - wrapperEleRect.top}px`);
            //     backdrop.fromTo('opacity', 0.4, 0.0);
            //     this
            //       .element(this.leavingView.pageRef())
            //       .easing('ease-out')
            //       .duration(250)
            //       .add(backdrop)
            //       .add(wrapper);
            //   }
            // }
            // export class ModalMDSlideIn {
            //   constructor(el: HTMLElement) {
            //     const backdrop = new Animation(this.plt, el.querySelector('ion-backdrop'));
            //     const wrapper = new Animation(this.plt, el.querySelector('.modal-wrapper'));
            //     backdrop.fromTo('opacity', 0.01, 0.4);
            //     wrapper.fromTo('translateY', '40px', '0px');
            //     wrapper.fromTo('opacity', 0.01, 1);
            //     const DURATION = 280;
            //     const EASING = 'cubic-bezier(0.36,0.66,0.04,1)';
            //     this.element(this.enteringView.pageRef()).easing(EASING).duration(DURATION)
            //       .add(backdrop)
            //       .add(wrapper);
            //   }
            // }
            // export class ModalMDSlideOut {
            //   constructor(el: HTMLElement) {
            //     const backdrop = new Animation(this.plt, el.querySelector('ion-backdrop'));
            //     const wrapper = new Animation(this.plt, el.querySelector('.modal-wrapper'));
            //     backdrop.fromTo('opacity', 0.4, 0.0);
            //     wrapper.fromTo('translateY', '0px', '40px');
            //     wrapper.fromTo('opacity', 0.99, 0);
            //     this
            //       .element(this.leavingView.pageRef())
            //       .duration(200)
            //       .easing('cubic-bezier(0.47,0,0.745,0.715)')
            //       .add(wrapper)
            //       .add(backdrop);
            //   }
            // }
            /**
             * iOS Modal Leave Animation
             */
            var iosLeaveAnimation = function (baseEl) {
                var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                var backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                var wrapperEl = baseEl.querySelector('.modal-wrapper');
                var wrapperElRect = wrapperEl.getBoundingClientRect();
                backdropAnimation
                    .addElement(baseEl.querySelector('ion-backdrop'))
                    .fromTo('opacity', 0.4, 0.0);
                wrapperAnimation
                    .addElement(wrapperEl)
                    .beforeStyles({ 'opacity': 1 })
                    .fromTo('transform', 'translateY(0%)', "translateY(" + (baseEl.ownerDocument.defaultView.innerHeight - wrapperElRect.top) + "px)");
                return baseAnimation
                    .addElement(baseEl)
                    .easing('ease-out')
                    .duration(250)
                    .addAnimation([backdropAnimation, wrapperAnimation]);
            };
            /**
             * Md Modal Enter Animation
             */
            var mdEnterAnimation = function (baseEl) {
                var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                var backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                backdropAnimation
                    .addElement(baseEl.querySelector('ion-backdrop'))
                    .fromTo('opacity', 0.01, 0.32);
                wrapperAnimation
                    .addElement(baseEl.querySelector('.modal-wrapper'))
                    .keyframes([
                    { offset: 0, opacity: 0.01, transform: 'translateY(40px)' },
                    { offset: 1, opacity: 1, transform: 'translateY(0px)' }
                ]);
                return baseAnimation
                    .addElement(baseEl)
                    .easing('cubic-bezier(0.36,0.66,0.04,1)')
                    .duration(280)
                    .beforeAddClass('show-modal')
                    .addAnimation([backdropAnimation, wrapperAnimation]);
            };
            /**
             * Md Modal Leave Animation
             */
            var mdLeaveAnimation = function (baseEl) {
                var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                var backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                var wrapperEl = baseEl.querySelector('.modal-wrapper');
                backdropAnimation
                    .addElement(baseEl.querySelector('ion-backdrop'))
                    .fromTo('opacity', 0.32, 0.0);
                wrapperAnimation
                    .addElement(wrapperEl)
                    .keyframes([
                    { offset: 0, opacity: 0.99, transform: 'translateY(0px)' },
                    { offset: 1, opacity: 0, transform: 'translateY(40px)' }
                ]);
                return baseAnimation
                    .addElement(baseEl)
                    .easing('cubic-bezier(0.47,0,0.745,0.715)')
                    .duration(200)
                    .addAnimation([backdropAnimation, wrapperAnimation]);
            };
            var Modal = /** @class */ (function () {
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
                     * If `true`, the modal will be dismissed when the backdrop is clicked.
                     */
                    this.backdropDismiss = true;
                    /**
                     * If `true`, a backdrop will be displayed behind the modal.
                     */
                    this.showBackdrop = true;
                    /**
                     * If `true`, the modal will animate.
                     */
                    this.animated = true;
                    this.onBackdropTap = function () {
                        _this.dismiss(undefined, _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__["B"]);
                    };
                    this.onDismiss = function (ev) {
                        ev.stopPropagation();
                        ev.preventDefault();
                        _this.dismiss();
                    };
                    this.onLifecycle = function (modalEvent) {
                        var el = _this.usersElement;
                        var name = LIFECYCLE_MAP[modalEvent.type];
                        if (el && name) {
                            var ev = new CustomEvent(name, {
                                bubbles: false,
                                cancelable: false,
                                detail: modalEvent.detail
                            });
                            el.dispatchEvent(ev);
                        }
                    };
                    Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__["d"])(this.el);
                    this.didPresent = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionModalDidPresent", 7);
                    this.willPresent = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionModalWillPresent", 7);
                    this.willDismiss = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionModalWillDismiss", 7);
                    this.didDismiss = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionModalDidDismiss", 7);
                }
                /**
                 * Present the modal overlay after it has been created.
                 */
                class_1.prototype.present = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var container, componentProps, _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    if (this.presented) {
                                        return [2 /*return*/];
                                    }
                                    container = this.el.querySelector(".modal-wrapper");
                                    if (!container) {
                                        throw new Error('container is undefined');
                                    }
                                    componentProps = Object.assign(Object.assign({}, this.componentProps), { modal: this.el });
                                    _a = this;
                                    return [4 /*yield*/, Object(_framework_delegate_c2e2e1f4_js__WEBPACK_IMPORTED_MODULE_7__["a"])(this.delegate, container, this.component, ['ion-page'], componentProps)];
                                case 1:
                                    _a.usersElement = _b.sent();
                                    return [4 /*yield*/, Object(_index_4d91f03a_js__WEBPACK_IMPORTED_MODULE_8__["d"])(this.usersElement)];
                                case 2:
                                    _b.sent();
                                    return [2 /*return*/, Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__["e"])(this, 'modalEnter', iosEnterAnimation, mdEnterAnimation)];
                            }
                        });
                    });
                };
                /**
                 * Dismiss the modal overlay after it has been presented.
                 *
                 * @param data Any data to emit in the dismiss events.
                 * @param role The role of the element that is dismissing the modal. For example, 'cancel' or 'backdrop'.
                 */
                class_1.prototype.dismiss = function (data, role) {
                    return __awaiter(this, void 0, void 0, function () {
                        var dismissed;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__["f"])(this, data, role, 'modalLeave', iosLeaveAnimation, mdLeaveAnimation)];
                                case 1:
                                    dismissed = _a.sent();
                                    if (!dismissed) return [3 /*break*/, 3];
                                    return [4 /*yield*/, Object(_framework_delegate_c2e2e1f4_js__WEBPACK_IMPORTED_MODULE_7__["d"])(this.delegate, this.usersElement)];
                                case 2:
                                    _a.sent();
                                    _a.label = 3;
                                case 3: return [2 /*return*/, dismissed];
                            }
                        });
                    });
                };
                /**
                 * Returns a promise that resolves when the modal did dismiss.
                 */
                class_1.prototype.onDidDismiss = function () {
                    return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__["g"])(this.el, 'ionModalDidDismiss');
                };
                /**
                 * Returns a promise that resolves when the modal will dismiss.
                 */
                class_1.prototype.onWillDismiss = function () {
                    return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__["g"])(this.el, 'ionModalWillDismiss');
                };
                class_1.prototype.render = function () {
                    var _a, _b;
                    var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
                    return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { "no-router": true, "aria-modal": "true", class: Object.assign((_a = {}, _a[mode] = true, _a), Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_6__["g"])(this.cssClass)), style: {
                            zIndex: "" + (20000 + this.overlayIndex),
                        }, onIonBackdropTap: this.onBackdropTap, onIonDismiss: this.onDismiss, onIonModalDidPresent: this.onLifecycle, onIonModalWillPresent: this.onLifecycle, onIonModalWillDismiss: this.onLifecycle, onIonModalDidDismiss: this.onLifecycle }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-backdrop", { visible: this.showBackdrop, tappable: this.backdropDismiss }), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { role: "dialog", class: (_b = {},
                            _b["modal-wrapper"] = true,
                            _b[mode] = true,
                            _b) })));
                };
                Object.defineProperty(class_1.prototype, "el", {
                    get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_1, "style", {
                    get: function () { return ".sc-ion-modal-ios-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color,#fff);--box-shadow:none;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:strict}.overlay-hidden.sc-ion-modal-ios-h{display:none}.modal-wrapper.sc-ion-modal-ios{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}\@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-ios-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}\@media only screen and (min-width:768px) and (min-height:768px){.sc-ion-modal-ios-h{--width:600px;--height:600px}}\@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-ios-h{--border-radius:10px}}.modal-wrapper.sc-ion-modal-ios{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_1;
            }());
            var LIFECYCLE_MAP = {
                'ionModalDidPresent': 'ionViewDidEnter',
                'ionModalWillPresent': 'ionViewWillEnter',
                'ionModalWillDismiss': 'ionViewWillLeave',
                'ionModalDidDismiss': 'ionViewDidLeave',
            };
            /***/ 
        })
    }]);
//# sourceMappingURL=39-es2015.js.map
//# sourceMappingURL=39-es5.js.map
//# sourceMappingURL=39-es5.js.map