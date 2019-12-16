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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28], {
        /***/ "./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js": 
        /*!*****************************************************************************!*\
          !*** ./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js ***!
          \*****************************************************************************/
        /*! exports provided: ion_infinite_scroll, ion_infinite_scroll_content */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_infinite_scroll", function () { return InfiniteScroll; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_infinite_scroll_content", function () { return InfiniteScrollContent; });
            /* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm/core-feeeff0d.js");
            /* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
            /* harmony import */ var _index_3476b023_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-3476b023.js */ "./node_modules/@ionic/core/dist/esm/index-3476b023.js");
            var InfiniteScroll = /** @class */ (function () {
                function class_1(hostRef) {
                    var _this = this;
                    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                    this.thrPx = 0;
                    this.thrPc = 0;
                    this.didFire = false;
                    this.isBusy = false;
                    this.isLoading = false;
                    /**
                     * The threshold distance from the bottom
                     * of the content to call the `infinite` output event when scrolled.
                     * The threshold value can be either a percent, or
                     * in pixels. For example, use the value of `10%` for the `infinite`
                     * output event to get called when the user has scrolled 10%
                     * from the bottom of the page. Use the value `100px` when the
                     * scroll is within 100 pixels from the bottom of the page.
                     */
                    this.threshold = '15%';
                    /**
                     * If `true`, the infinite scroll will be hidden and scroll event listeners
                     * will be removed.
                     *
                     * Set this to true to disable the infinite scroll from actively
                     * trying to receive new data while scrolling. This is useful
                     * when it is known that there is no more data that can be added, and
                     * the infinite scroll is no longer needed.
                     */
                    this.disabled = false;
                    /**
                     * The position of the infinite scroll element.
                     * The value can be either `top` or `bottom`.
                     */
                    this.position = 'bottom';
                    this.onScroll = function () {
                        var scrollEl = _this.scrollEl;
                        if (!scrollEl || !_this.canStart()) {
                            return 1;
                        }
                        var infiniteHeight = _this.el.offsetHeight;
                        if (infiniteHeight === 0) {
                            // if there is no height of this element then do nothing
                            return 2;
                        }
                        var scrollTop = scrollEl.scrollTop;
                        var scrollHeight = scrollEl.scrollHeight;
                        var height = scrollEl.offsetHeight;
                        var threshold = _this.thrPc !== 0 ? (height * _this.thrPc) : _this.thrPx;
                        var distanceFromInfinite = (_this.position === 'bottom')
                            ? scrollHeight - infiniteHeight - scrollTop - threshold - height
                            : scrollTop - infiniteHeight - threshold;
                        if (distanceFromInfinite < 0) {
                            if (!_this.didFire) {
                                _this.isLoading = true;
                                _this.didFire = true;
                                _this.ionInfinite.emit();
                                return 3;
                            }
                        }
                        else {
                            _this.didFire = false;
                        }
                        return 4;
                    };
                    this.ionInfinite = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionInfinite", 7);
                }
                class_1.prototype.thresholdChanged = function () {
                    var val = this.threshold;
                    if (val.lastIndexOf('%') > -1) {
                        this.thrPx = 0;
                        this.thrPc = (parseFloat(val) / 100);
                    }
                    else {
                        this.thrPx = parseFloat(val);
                        this.thrPc = 0;
                    }
                };
                class_1.prototype.disabledChanged = function () {
                    var disabled = this.disabled;
                    if (disabled) {
                        this.isLoading = false;
                        this.isBusy = false;
                    }
                    this.enableScrollEvents(!disabled);
                };
                class_1.prototype.connectedCallback = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var contentEl, _a;
                        var _this = this;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    contentEl = this.el.closest('ion-content');
                                    if (!contentEl) {
                                        console.error('<ion-infinite-scroll> must be used inside an <ion-content>');
                                        return [2 /*return*/];
                                    }
                                    _a = this;
                                    return [4 /*yield*/, contentEl.getScrollElement()];
                                case 1:
                                    _a.scrollEl = _b.sent();
                                    this.thresholdChanged();
                                    this.disabledChanged();
                                    if (this.position === 'top') {
                                        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["w"])(function () {
                                            if (_this.scrollEl) {
                                                _this.scrollEl.scrollTop = _this.scrollEl.scrollHeight - _this.scrollEl.clientHeight;
                                            }
                                        });
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                class_1.prototype.disconnectedCallback = function () {
                    this.enableScrollEvents(false);
                    this.scrollEl = undefined;
                };
                /**
                 * Call `complete()` within the `ionInfinite` output event handler when
                 * your async operation has completed. For example, the `loading`
                 * state is while the app is performing an asynchronous operation,
                 * such as receiving more data from an AJAX request to add more items
                 * to a data list. Once the data has been received and UI updated, you
                 * then call this method to signify that the loading has completed.
                 * This method will change the infinite scroll's state from `loading`
                 * to `enabled`.
                 */
                class_1.prototype.complete = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var scrollEl, prev_1;
                        var _this = this;
                        return __generator(this, function (_a) {
                            scrollEl = this.scrollEl;
                            if (!this.isLoading || !scrollEl) {
                                return [2 /*return*/];
                            }
                            this.isLoading = false;
                            if (this.position === 'top') {
                                /**
                                 * New content is being added at the top, but the scrollTop position stays the same,
                                 * which causes a scroll jump visually. This algorithm makes sure to prevent this.
                                 * (Frame 1)
                                 *    - complete() is called, but the UI hasn't had time to update yet.
                                 *    - Save the current content dimensions.
                                 *    - Wait for the next frame using _dom.read, so the UI will be updated.
                                 * (Frame 2)
                                 *    - Read the new content dimensions.
                                 *    - Calculate the height difference and the new scroll position.
                                 *    - Delay the scroll position change until other possible dom reads are done using _dom.write to be performant.
                                 * (Still frame 2, if I'm correct)
                                 *    - Change the scroll position (= visually maintain the scroll position).
                                 *    - Change the state to re-enable the InfiniteScroll.
                                 *    - This should be after changing the scroll position, or it could
                                 *    cause the InfiniteScroll to be triggered again immediately.
                                 * (Frame 3)
                                 *    Done.
                                 */
                                this.isBusy = true;
                                prev_1 = scrollEl.scrollHeight - scrollEl.scrollTop;
                                // ******** DOM READ ****************
                                requestAnimationFrame(function () {
                                    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["f"])(function () {
                                        // UI has updated, save the new content dimensions
                                        var scrollHeight = scrollEl.scrollHeight;
                                        // New content was added on top, so the scroll position should be changed immediately to prevent it from jumping around
                                        var newScrollTop = scrollHeight - prev_1;
                                        // ******** DOM WRITE ****************
                                        requestAnimationFrame(function () {
                                            Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["w"])(function () {
                                                scrollEl.scrollTop = newScrollTop;
                                                _this.isBusy = false;
                                            });
                                        });
                                    });
                                });
                            }
                            return [2 /*return*/];
                        });
                    });
                };
                class_1.prototype.canStart = function () {
                    return (!this.disabled &&
                        !this.isBusy &&
                        !!this.scrollEl &&
                        !this.isLoading);
                };
                class_1.prototype.enableScrollEvents = function (shouldListen) {
                    if (this.scrollEl) {
                        if (shouldListen) {
                            this.scrollEl.addEventListener('scroll', this.onScroll);
                        }
                        else {
                            this.scrollEl.removeEventListener('scroll', this.onScroll);
                        }
                    }
                };
                class_1.prototype.render = function () {
                    var _a;
                    var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
                    var disabled = this.disabled;
                    return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: (_a = {},
                            _a[mode] = true,
                            _a['infinite-scroll-loading'] = this.isLoading,
                            _a['infinite-scroll-enabled'] = !disabled,
                            _a) }));
                };
                Object.defineProperty(class_1.prototype, "el", {
                    get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_1, "watchers", {
                    get: function () {
                        return {
                            "threshold": ["thresholdChanged"],
                            "disabled": ["disabledChanged"]
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_1, "style", {
                    get: function () { return "ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_1;
            }());
            var InfiniteScrollContent = /** @class */ (function () {
                function class_2(hostRef) {
                    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                }
                class_2.prototype.componentDidLoad = function () {
                    if (this.loadingSpinner === undefined) {
                        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
                        this.loadingSpinner = _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('infiniteLoadingSpinner', _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('spinner', mode === 'ios' ? 'lines' : 'crescent'));
                    }
                };
                class_2.prototype.render = function () {
                    var _a;
                    var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
                    return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: (_a = {},
                            _a[mode] = true,
                            // Used internally for styling
                            _a["infinite-scroll-content-" + mode] = true,
                            _a) }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "infinite-loading" }, this.loadingSpinner && (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "infinite-loading-spinner" }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-spinner", { name: this.loadingSpinner }))), this.loadingText && (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "infinite-loading-text", innerHTML: Object(_index_3476b023_js__WEBPACK_IMPORTED_MODULE_2__["s"])(this.loadingText) })))));
                };
                Object.defineProperty(class_2, "style", {
                    get: function () { return "ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-md .infinite-loading-text{color:var(--ion-color-step-600,#666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-crescent circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-small-md line{stroke:var(--ion-color-step-600,#666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600,#666)}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_2;
            }());
            /***/ 
        })
    }]);
//# sourceMappingURL=28-es2015.js.map
//# sourceMappingURL=28-es5.js.map
//# sourceMappingURL=28-es5.js.map