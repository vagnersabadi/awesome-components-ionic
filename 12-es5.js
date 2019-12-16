(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12], {
        /***/ "./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js": 
        /*!********************************************************************!*\
          !*** ./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js ***!
          \********************************************************************/
        /*! exports provided: ion_backdrop */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_backdrop", function () { return Backdrop; });
            /* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm/core-feeeff0d.js");
            /* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
            /* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "./node_modules/@ionic/core/dist/esm/helpers-46f4a262.js");
            /* harmony import */ var _index_624eea58_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-624eea58.js */ "./node_modules/@ionic/core/dist/esm/index-624eea58.js");
            var Backdrop = /** @class */ (function () {
                function class_1(hostRef) {
                    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                    this.lastClick = -10000;
                    this.blocker = _index_624eea58_js__WEBPACK_IMPORTED_MODULE_3__["GESTURE_CONTROLLER"].createBlocker({
                        disableScroll: true
                    });
                    /**
                     * If `true`, the backdrop will be visible.
                     */
                    this.visible = true;
                    /**
                     * If `true`, the backdrop will can be clicked and will emit the `ionBackdropTap` event.
                     */
                    this.tappable = true;
                    /**
                     * If `true`, the backdrop will stop propagation on tap.
                     */
                    this.stopPropagation = true;
                    this.ionBackdropTap = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionBackdropTap", 7);
                }
                class_1.prototype.connectedCallback = function () {
                    if (this.stopPropagation) {
                        this.blocker.block();
                    }
                };
                class_1.prototype.disconnectedCallback = function () {
                    this.blocker.unblock();
                };
                class_1.prototype.onTouchStart = function (ev) {
                    this.lastClick = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["n"])(ev);
                    this.emitTap(ev);
                };
                class_1.prototype.onMouseDown = function (ev) {
                    if (this.lastClick < Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["n"])(ev) - 2500) {
                        this.emitTap(ev);
                    }
                };
                class_1.prototype.emitTap = function (ev) {
                    if (this.stopPropagation) {
                        ev.preventDefault();
                        ev.stopPropagation();
                    }
                    if (this.tappable) {
                        this.ionBackdropTap.emit();
                    }
                };
                class_1.prototype.render = function () {
                    var _a;
                    var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
                    return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { tabindex: "-1", class: (_a = {},
                            _a[mode] = true,
                            _a['backdrop-hide'] = !this.visible,
                            _a['backdrop-no-tappable'] = !this.tappable,
                            _a) }));
                };
                Object.defineProperty(class_1, "style", {
                    get: function () { return ":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color,#000)}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_1;
            }());
            /***/ 
        })
    }]);
//# sourceMappingURL=12-es2015.js.map
//# sourceMappingURL=12-es5.js.map
//# sourceMappingURL=12-es5.js.map