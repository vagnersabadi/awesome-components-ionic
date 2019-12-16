var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21], {
        /***/ "./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js": 
        /*!**************************************************************!*\
          !*** ./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js ***!
          \**************************************************************/
        /*! exports provided: ion_col, ion_grid, ion_row */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_col", function () { return Col; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_grid", function () { return Grid; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_row", function () { return Row; });
            /* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm/core-feeeff0d.js");
            /* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
            var SIZE_TO_MEDIA = {
                'xs': '(min-width: 0px)',
                'sm': '(min-width: 576px)',
                'md': '(min-width: 768px)',
                'lg': '(min-width: 992px)',
                'xl': '(min-width: 1200px)',
            };
            // Check if the window matches the media query
            // at the breakpoint passed
            // e.g. matchBreakpoint('sm') => true if screen width exceeds 576px
            var matchBreakpoint = function (breakpoint) {
                if (breakpoint === undefined || breakpoint === '') {
                    return true;
                }
                if (window.matchMedia) {
                    var mediaQuery = SIZE_TO_MEDIA[breakpoint];
                    return window.matchMedia(mediaQuery).matches;
                }
                return false;
            };
            var win = window;
            var SUPPORTS_VARS = !!(win.CSS && win.CSS.supports && win.CSS.supports('--a: 0'));
            var BREAKPOINTS = ['', 'xs', 'sm', 'md', 'lg', 'xl'];
            var Col = /** @class */ (function () {
                function class_1(hostRef) {
                    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                }
                class_1.prototype.onResize = function () {
                    this.el.forceUpdate();
                };
                // Loop through all of the breakpoints to see if the media query
                // matches and grab the column value from the relevant prop if so
                class_1.prototype.getColumns = function (property) {
                    var e_1, _a;
                    var matched;
                    try {
                        for (var BREAKPOINTS_1 = __values(BREAKPOINTS), BREAKPOINTS_1_1 = BREAKPOINTS_1.next(); !BREAKPOINTS_1_1.done; BREAKPOINTS_1_1 = BREAKPOINTS_1.next()) {
                            var breakpoint = BREAKPOINTS_1_1.value;
                            var matches = matchBreakpoint(breakpoint);
                            // Grab the value of the property, if it exists and our
                            // media query matches we return the value
                            var columns = this[property + breakpoint.charAt(0).toUpperCase() + breakpoint.slice(1)];
                            if (matches && columns !== undefined) {
                                matched = columns;
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (BREAKPOINTS_1_1 && !BREAKPOINTS_1_1.done && (_a = BREAKPOINTS_1.return)) _a.call(BREAKPOINTS_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    // Return the last matched columns since the breakpoints
                    // increase in size and we want to return the largest match
                    return matched;
                };
                class_1.prototype.calculateSize = function () {
                    var columns = this.getColumns('size');
                    // If size wasn't set for any breakpoint
                    // or if the user set the size without a value
                    // it means we need to stick with the default and return
                    // e.g. <ion-col size-md>
                    if (!columns || columns === '') {
                        return;
                    }
                    // If the size is set to auto then don't calculate a size
                    var colSize = (columns === 'auto')
                        ? 'auto'
                        // If CSS supports variables we should use the grid columns var
                        : SUPPORTS_VARS ? "calc(calc(" + columns + " / var(--ion-grid-columns, 12)) * 100%)"
                            // Convert the columns to a percentage by dividing by the total number
                            // of columns (12) and then multiplying by 100
                            : ((columns / 12) * 100) + '%';
                    return {
                        'flex': "0 0 " + colSize,
                        'width': "" + colSize,
                        'max-width': "" + colSize
                    };
                };
                // Called by push, pull, and offset since they use the same calculations
                class_1.prototype.calculatePosition = function (property, modifier) {
                    var _a;
                    var columns = this.getColumns(property);
                    if (!columns) {
                        return;
                    }
                    // If the number of columns passed are greater than 0 and less than
                    // 12 we can position the column, else default to auto
                    var amount = SUPPORTS_VARS
                        // If CSS supports variables we should use the grid columns var
                        ? "calc(calc(" + columns + " / var(--ion-grid-columns, 12)) * 100%)"
                        // Convert the columns to a percentage by dividing by the total number
                        // of columns (12) and then multiplying by 100
                        : (columns > 0 && columns < 12) ? (columns / 12 * 100) + '%' : 'auto';
                    return _a = {},
                        _a[modifier] = amount,
                        _a;
                };
                class_1.prototype.calculateOffset = function (isRTL) {
                    return this.calculatePosition('offset', isRTL ? 'margin-right' : 'margin-left');
                };
                class_1.prototype.calculatePull = function (isRTL) {
                    return this.calculatePosition('pull', isRTL ? 'left' : 'right');
                };
                class_1.prototype.calculatePush = function (isRTL) {
                    return this.calculatePosition('push', isRTL ? 'right' : 'left');
                };
                class_1.prototype.render = function () {
                    var _a;
                    var isRTL = document.dir === 'rtl';
                    var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
                    return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: (_a = {},
                            _a[mode] = true,
                            _a), style: Object.assign(Object.assign(Object.assign(Object.assign({}, this.calculateOffset(isRTL)), this.calculatePull(isRTL)), this.calculatePush(isRTL)), this.calculateSize()) }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
                };
                Object.defineProperty(class_1.prototype, "el", {
                    get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_1, "style", {
                    get: function () { return ":host{padding-left:var(--ion-grid-column-padding-xs,var(--ion-grid-column-padding,5px));padding-right:var(--ion-grid-column-padding-xs,var(--ion-grid-column-padding,5px));padding-top:var(--ion-grid-column-padding-xs,var(--ion-grid-column-padding,5px));padding-bottom:var(--ion-grid-column-padding-xs,var(--ion-grid-column-padding,5px));margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;width:100%;max-width:100%;min-height:1px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-xs,var(--ion-grid-column-padding,5px));padding-inline-start:var(--ion-grid-column-padding-xs,var(--ion-grid-column-padding,5px));-webkit-padding-end:var(--ion-grid-column-padding-xs,var(--ion-grid-column-padding,5px));padding-inline-end:var(--ion-grid-column-padding-xs,var(--ion-grid-column-padding,5px))}}\@media (min-width:576px){:host{padding-left:var(--ion-grid-column-padding-sm,var(--ion-grid-column-padding,5px));padding-right:var(--ion-grid-column-padding-sm,var(--ion-grid-column-padding,5px));padding-top:var(--ion-grid-column-padding-sm,var(--ion-grid-column-padding,5px));padding-bottom:var(--ion-grid-column-padding-sm,var(--ion-grid-column-padding,5px))}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-sm,var(--ion-grid-column-padding,5px));padding-inline-start:var(--ion-grid-column-padding-sm,var(--ion-grid-column-padding,5px));-webkit-padding-end:var(--ion-grid-column-padding-sm,var(--ion-grid-column-padding,5px));padding-inline-end:var(--ion-grid-column-padding-sm,var(--ion-grid-column-padding,5px))}}}\@media (min-width:768px){:host{padding-left:var(--ion-grid-column-padding-md,var(--ion-grid-column-padding,5px));padding-right:var(--ion-grid-column-padding-md,var(--ion-grid-column-padding,5px));padding-top:var(--ion-grid-column-padding-md,var(--ion-grid-column-padding,5px));padding-bottom:var(--ion-grid-column-padding-md,var(--ion-grid-column-padding,5px))}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-md,var(--ion-grid-column-padding,5px));padding-inline-start:var(--ion-grid-column-padding-md,var(--ion-grid-column-padding,5px));-webkit-padding-end:var(--ion-grid-column-padding-md,var(--ion-grid-column-padding,5px));padding-inline-end:var(--ion-grid-column-padding-md,var(--ion-grid-column-padding,5px))}}}\@media (min-width:992px){:host{padding-left:var(--ion-grid-column-padding-lg,var(--ion-grid-column-padding,5px));padding-right:var(--ion-grid-column-padding-lg,var(--ion-grid-column-padding,5px));padding-top:var(--ion-grid-column-padding-lg,var(--ion-grid-column-padding,5px));padding-bottom:var(--ion-grid-column-padding-lg,var(--ion-grid-column-padding,5px))}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-lg,var(--ion-grid-column-padding,5px));padding-inline-start:var(--ion-grid-column-padding-lg,var(--ion-grid-column-padding,5px));-webkit-padding-end:var(--ion-grid-column-padding-lg,var(--ion-grid-column-padding,5px));padding-inline-end:var(--ion-grid-column-padding-lg,var(--ion-grid-column-padding,5px))}}}\@media (min-width:1200px){:host{padding-left:var(--ion-grid-column-padding-xl,var(--ion-grid-column-padding,5px));padding-right:var(--ion-grid-column-padding-xl,var(--ion-grid-column-padding,5px));padding-top:var(--ion-grid-column-padding-xl,var(--ion-grid-column-padding,5px));padding-bottom:var(--ion-grid-column-padding-xl,var(--ion-grid-column-padding,5px))}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-xl,var(--ion-grid-column-padding,5px));padding-inline-start:var(--ion-grid-column-padding-xl,var(--ion-grid-column-padding,5px));-webkit-padding-end:var(--ion-grid-column-padding-xl,var(--ion-grid-column-padding,5px));padding-inline-end:var(--ion-grid-column-padding-xl,var(--ion-grid-column-padding,5px))}}}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_1;
            }());
            var Grid = /** @class */ (function () {
                function class_2(hostRef) {
                    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                    /**
                     * If `true`, the grid will have a fixed width based on the screen size.
                     */
                    this.fixed = false;
                }
                class_2.prototype.render = function () {
                    var _a;
                    var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
                    return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: (_a = {},
                            _a[mode] = true,
                            _a['grid-fixed'] = this.fixed,
                            _a) }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
                };
                Object.defineProperty(class_2, "style", {
                    get: function () { return ":host{padding-left:var(--ion-grid-padding-xs,var(--ion-grid-padding,5px));padding-right:var(--ion-grid-padding-xs,var(--ion-grid-padding,5px));padding-top:var(--ion-grid-padding-xs,var(--ion-grid-padding,5px));padding-bottom:var(--ion-grid-padding-xs,var(--ion-grid-padding,5px));margin-left:auto;margin-right:auto;display:block;-ms-flex:1;flex:1}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-padding-xs,var(--ion-grid-padding,5px));padding-inline-start:var(--ion-grid-padding-xs,var(--ion-grid-padding,5px));-webkit-padding-end:var(--ion-grid-padding-xs,var(--ion-grid-padding,5px));padding-inline-end:var(--ion-grid-padding-xs,var(--ion-grid-padding,5px))}}\@media (min-width:576px){:host{padding-left:var(--ion-grid-padding-sm,var(--ion-grid-padding,5px));padding-right:var(--ion-grid-padding-sm,var(--ion-grid-padding,5px));padding-top:var(--ion-grid-padding-sm,var(--ion-grid-padding,5px));padding-bottom:var(--ion-grid-padding-sm,var(--ion-grid-padding,5px))}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-padding-sm,var(--ion-grid-padding,5px));padding-inline-start:var(--ion-grid-padding-sm,var(--ion-grid-padding,5px));-webkit-padding-end:var(--ion-grid-padding-sm,var(--ion-grid-padding,5px));padding-inline-end:var(--ion-grid-padding-sm,var(--ion-grid-padding,5px))}}}\@media (min-width:768px){:host{padding-left:var(--ion-grid-padding-md,var(--ion-grid-padding,5px));padding-right:var(--ion-grid-padding-md,var(--ion-grid-padding,5px));padding-top:var(--ion-grid-padding-md,var(--ion-grid-padding,5px));padding-bottom:var(--ion-grid-padding-md,var(--ion-grid-padding,5px))}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-padding-md,var(--ion-grid-padding,5px));padding-inline-start:var(--ion-grid-padding-md,var(--ion-grid-padding,5px));-webkit-padding-end:var(--ion-grid-padding-md,var(--ion-grid-padding,5px));padding-inline-end:var(--ion-grid-padding-md,var(--ion-grid-padding,5px))}}}\@media (min-width:992px){:host{padding-left:var(--ion-grid-padding-lg,var(--ion-grid-padding,5px));padding-right:var(--ion-grid-padding-lg,var(--ion-grid-padding,5px));padding-top:var(--ion-grid-padding-lg,var(--ion-grid-padding,5px));padding-bottom:var(--ion-grid-padding-lg,var(--ion-grid-padding,5px))}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-padding-lg,var(--ion-grid-padding,5px));padding-inline-start:var(--ion-grid-padding-lg,var(--ion-grid-padding,5px));-webkit-padding-end:var(--ion-grid-padding-lg,var(--ion-grid-padding,5px));padding-inline-end:var(--ion-grid-padding-lg,var(--ion-grid-padding,5px))}}}\@media (min-width:1200px){:host{padding-left:var(--ion-grid-padding-xl,var(--ion-grid-padding,5px));padding-right:var(--ion-grid-padding-xl,var(--ion-grid-padding,5px));padding-top:var(--ion-grid-padding-xl,var(--ion-grid-padding,5px));padding-bottom:var(--ion-grid-padding-xl,var(--ion-grid-padding,5px))}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-padding-xl,var(--ion-grid-padding,5px));padding-inline-start:var(--ion-grid-padding-xl,var(--ion-grid-padding,5px));-webkit-padding-end:var(--ion-grid-padding-xl,var(--ion-grid-padding,5px));padding-inline-end:var(--ion-grid-padding-xl,var(--ion-grid-padding,5px));margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}}:host(.grid-fixed){width:var(--ion-grid-width-xs,var(--ion-grid-width,100%));max-width:100%}\@media (min-width:576px){:host(.grid-fixed){width:var(--ion-grid-width-sm,var(--ion-grid-width,540px))}}\@media (min-width:768px){:host(.grid-fixed){width:var(--ion-grid-width-md,var(--ion-grid-width,720px))}}\@media (min-width:992px){:host(.grid-fixed){width:var(--ion-grid-width-lg,var(--ion-grid-width,960px))}}\@media (min-width:1200px){:host(.grid-fixed){width:var(--ion-grid-width-xl,var(--ion-grid-width,1140px))}}:host([no-padding]),:host([no-padding]) ::slotted(ion-col){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_2;
            }());
            var Row = /** @class */ (function () {
                function class_3(hostRef) {
                    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                }
                class_3.prototype.render = function () {
                    return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this) }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
                };
                Object.defineProperty(class_3, "style", {
                    get: function () { return ":host{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_3;
            }());
            /***/ 
        })
    }]);
//# sourceMappingURL=21-es2015.js.map
//# sourceMappingURL=21-es5.js.map
//# sourceMappingURL=21-es5.js.map