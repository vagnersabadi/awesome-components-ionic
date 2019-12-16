var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-angular-material-components-mat-input-mat-input-module~pages-angular-material-componen~2fc2eb0d"], {
        /***/ "./node_modules/@angular/material/esm2015/sort.js": 
        /*!********************************************************!*\
          !*** ./node_modules/@angular/material/esm2015/sort.js ***!
          \********************************************************/
        /*! exports provided: MatSortModule, MatSortHeader, MAT_SORT_HEADER_INTL_PROVIDER_FACTORY, MatSortHeaderIntl, MAT_SORT_HEADER_INTL_PROVIDER, MatSort, matSortAnimations */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSortModule", function () { return MatSortModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSortHeader", function () { return MatSortHeader; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SORT_HEADER_INTL_PROVIDER_FACTORY", function () { return MAT_SORT_HEADER_INTL_PROVIDER_FACTORY; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSortHeaderIntl", function () { return MatSortHeaderIntl; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SORT_HEADER_INTL_PROVIDER", function () { return MAT_SORT_HEADER_INTL_PROVIDER; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSort", function () { return MatSort; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matSortAnimations", function () { return matSortAnimations; });
            /* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm2015/coercion.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /**
             * @license
             * Copyright Google LLC All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * \@docs-private
             * @param {?} id
             * @return {?}
             */
            function getSortDuplicateSortableIdError(id) {
                return Error("Cannot have two MatSortables with the same id (" + id + ").");
            }
            /**
             * \@docs-private
             * @return {?}
             */
            function getSortHeaderNotContainedWithinSortError() {
                return Error("MatSortHeader must be placed within a parent element with the MatSort directive.");
            }
            /**
             * \@docs-private
             * @return {?}
             */
            function getSortHeaderMissingIdError() {
                return Error("MatSortHeader must be provided with a unique id.");
            }
            /**
             * \@docs-private
             * @param {?} direction
             * @return {?}
             */
            function getSortInvalidDirectionError(direction) {
                return Error(direction + " is not a valid sort direction ('asc' or 'desc').");
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            // Boilerplate for applying mixins to MatSort.
            /**
             * \@docs-private
             */
            var MatSortBase = /** @class */ (function () {
                function MatSortBase() {
                }
                return MatSortBase;
            }());
            /** @type {?} */
            var _MatSortMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinInitialized"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(MatSortBase));
            /**
             * Container for MatSortables to manage the sort state and provide default sort parameters.
             */
            var MatSort = /** @class */ (function (_super) {
                __extends(MatSort, _super);
                function MatSort() {
                    var _this = _super.apply(this, __spread(arguments)) || this;
                    /**
                     * Collection of all registered sortables that this directive manages.
                     */
                    _this.sortables = new Map();
                    /**
                     * Used to notify any child components listening to state changes.
                     */
                    _this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
                    /**
                     * The direction to set when an MatSortable is initially sorted.
                     * May be overriden by the MatSortable's sort start.
                     */
                    _this.start = 'asc';
                    _this._direction = '';
                    /**
                     * Event emitted when the user changes either the active sort or sort direction.
                     */
                    _this.sortChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    return _this;
                }
                Object.defineProperty(MatSort.prototype, "direction", {
                    /**
                     * The sort direction of the currently active MatSortable.
                     * @return {?}
                     */
                    get: function () { return this._direction; },
                    /**
                     * @param {?} direction
                     * @return {?}
                     */
                    set: function (direction) {
                        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() && direction && direction !== 'asc' && direction !== 'desc') {
                            throw getSortInvalidDirectionError(direction);
                        }
                        this._direction = direction;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatSort.prototype, "disableClear", {
                    /**
                     * Whether to disable the user from clearing the sort by finishing the sort direction cycle.
                     * May be overriden by the MatSortable's disable clear input.
                     * @return {?}
                     */
                    get: function () { return this._disableClear; },
                    /**
                     * @param {?} v
                     * @return {?}
                     */
                    set: function (v) { this._disableClear = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(v); },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Register function to be used by the contained MatSortables. Adds the MatSortable to the
                 * collection of MatSortables.
                 * @param {?} sortable
                 * @return {?}
                 */
                MatSort.prototype.register = function (sortable) {
                    if (!sortable.id) {
                        throw getSortHeaderMissingIdError();
                    }
                    if (this.sortables.has(sortable.id)) {
                        throw getSortDuplicateSortableIdError(sortable.id);
                    }
                    this.sortables.set(sortable.id, sortable);
                };
                /**
                 * Unregister function to be used by the contained MatSortables. Removes the MatSortable from the
                 * collection of contained MatSortables.
                 * @param {?} sortable
                 * @return {?}
                 */
                MatSort.prototype.deregister = function (sortable) {
                    this.sortables.delete(sortable.id);
                };
                /**
                 * Sets the active sort id and determines the new sort direction.
                 * @param {?} sortable
                 * @return {?}
                 */
                MatSort.prototype.sort = function (sortable) {
                    if (this.active != sortable.id) {
                        this.active = sortable.id;
                        this.direction = sortable.start ? sortable.start : this.start;
                    }
                    else {
                        this.direction = this.getNextSortDirection(sortable);
                    }
                    this.sortChange.emit({ active: this.active, direction: this.direction });
                };
                /**
                 * Returns the next sort direction of the active sortable, checking for potential overrides.
                 * @param {?} sortable
                 * @return {?}
                 */
                MatSort.prototype.getNextSortDirection = function (sortable) {
                    if (!sortable) {
                        return '';
                    }
                    // Get the sort direction cycle with the potential sortable overrides.
                    /** @type {?} */
                    var disableClear = sortable.disableClear != null ? sortable.disableClear : this.disableClear;
                    /** @type {?} */
                    var sortDirectionCycle = getSortDirectionCycle(sortable.start || this.start, disableClear);
                    // Get and return the next direction in the cycle
                    /** @type {?} */
                    var nextDirectionIndex = sortDirectionCycle.indexOf(this.direction) + 1;
                    if (nextDirectionIndex >= sortDirectionCycle.length) {
                        nextDirectionIndex = 0;
                    }
                    return sortDirectionCycle[nextDirectionIndex];
                };
                /**
                 * @return {?}
                 */
                MatSort.prototype.ngOnInit = function () {
                    this._markInitialized();
                };
                /**
                 * @return {?}
                 */
                MatSort.prototype.ngOnChanges = function () {
                    this._stateChanges.next();
                };
                /**
                 * @return {?}
                 */
                MatSort.prototype.ngOnDestroy = function () {
                    this._stateChanges.complete();
                };
                return MatSort;
            }(_MatSortMixinBase));
            MatSort.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                            selector: '[matSort]',
                            exportAs: 'matSort',
                            inputs: ['disabled: matSortDisabled']
                        },] },
            ];
            MatSort.propDecorators = {
                active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['matSortActive',] }],
                start: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['matSortStart',] }],
                direction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['matSortDirection',] }],
                disableClear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['matSortDisableClear',] }],
                sortChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['matSortChange',] }]
            };
            /**
             * Returns the sort direction cycle to use given the provided parameters of order and clear.
             * @param {?} start
             * @param {?} disableClear
             * @return {?}
             */
            function getSortDirectionCycle(start, disableClear) {
                /** @type {?} */
                var sortOrder = ['asc', 'desc'];
                if (start == 'desc') {
                    sortOrder.reverse();
                }
                if (!disableClear) {
                    sortOrder.push('');
                }
                return sortOrder;
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var SORT_ANIMATION_TRANSITION = _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["AnimationDurations"].ENTERING + ' ' +
                _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["AnimationCurves"].STANDARD_CURVE;
            /**
             * Animations used by MatSort.
             * \@docs-private
             * @type {?}
             */
            var matSortAnimations = {
                /**
                 * Animation that moves the sort indicator.
                 */
                indicator: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('indicator', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('active-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateY(0px)' })),
                    // 10px is the height of the sort indicator, minus the width of the pointers
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('active-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateY(10px)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('active-asc <=> active-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(SORT_ANIMATION_TRANSITION))
                ]),
                /**
                 * Animation that rotates the left pointer of the indicator based on the sorting direction.
                 */
                leftPointer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('leftPointer', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('active-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'rotate(-45deg)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('active-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'rotate(45deg)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('active-asc <=> active-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(SORT_ANIMATION_TRANSITION))
                ]),
                /**
                 * Animation that rotates the right pointer of the indicator based on the sorting direction.
                 */
                rightPointer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('rightPointer', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('active-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'rotate(45deg)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('active-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'rotate(-45deg)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('active-asc <=> active-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(SORT_ANIMATION_TRANSITION))
                ]),
                /**
                 * Animation that controls the arrow opacity.
                 */
                arrowOpacity: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('arrowOpacity', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('desc-to-active, asc-to-active, active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('desc-to-hint, asc-to-hint, hint', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: .54 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('hint-to-desc, active-to-desc, desc, hint-to-asc, active-to-asc, asc, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0 })),
                    // Transition between all states except for immediate transitions
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => asc, * => desc, * => active, * => hint, * => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0ms')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(SORT_ANIMATION_TRANSITION)),
                ]),
                /**
                 * Animation for the translation of the arrow as a whole. States are separated into two
                 * groups: ones with animations and others that are immediate. Immediate states are asc, desc,
                 * peek, and active. The other states define a specific animation (source-to-destination)
                 * and are determined as a function of their prev user-perceived state and what the next state
                 * should be.
                 */
                arrowPosition: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('arrowPosition', [
                    // Hidden Above => Hint Center
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => desc-to-hint, * => desc-to-active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateY(-25%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateY(0)' })
                    ]))),
                    // Hint Center => Hidden Below
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => hint-to-desc, * => active-to-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateY(0)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateY(25%)' })
                    ]))),
                    // Hidden Below => Hint Center
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => asc-to-hint, * => asc-to-active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateY(25%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateY(0)' })
                    ]))),
                    // Hint Center => Hidden Above
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => hint-to-asc, * => active-to-asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateY(0)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateY(-25%)' })
                    ]))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('desc-to-hint, asc-to-hint, hint, desc-to-active, asc-to-active, active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateY(0)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('hint-to-desc, active-to-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateY(-25%)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('hint-to-asc, active-to-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translateY(25%)' })),
                ]),
                /**
                 * Necessary trigger that calls animate on children animations.
                 */
                allowChildren: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('allowChildren', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* <=> *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])('@*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animateChild"])(), { optional: true })
                    ])
                ]),
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * To modify the labels and text displayed, create a new instance of MatSortHeaderIntl and
             * include it in a custom provider.
             */
            var MatSortHeaderIntl = /** @class */ (function () {
                function MatSortHeaderIntl() {
                    /**
                     * Stream that emits whenever the labels here are changed. Use this to notify
                     * components if the labels have changed after initialization.
                     */
                    this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
                    /**
                     * ARIA label for the sorting button.
                     */
                    this.sortButtonLabel = ( /**
                     * @param {?} id
                     * @return {?}
                     */function (id) {
                        return "Change sorting for " + id;
                    });
                }
                return MatSortHeaderIntl;
            }());
            MatSortHeaderIntl.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
            ];
            /** @nocollapse */ MatSortHeaderIntl.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function MatSortHeaderIntl_Factory() { return new MatSortHeaderIntl(); }, token: MatSortHeaderIntl, providedIn: "root" });
            /**
             * \@docs-private
             * @param {?} parentIntl
             * @return {?}
             */
            function MAT_SORT_HEADER_INTL_PROVIDER_FACTORY(parentIntl) {
                return parentIntl || new MatSortHeaderIntl();
            }
            /**
             * \@docs-private
             * @type {?}
             */
            var MAT_SORT_HEADER_INTL_PROVIDER = {
                // If there is already an MatSortHeaderIntl available, use that. Otherwise, provide a new one.
                provide: MatSortHeaderIntl,
                deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), MatSortHeaderIntl]],
                useFactory: MAT_SORT_HEADER_INTL_PROVIDER_FACTORY
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            // Boilerplate for applying mixins to the sort header.
            /**
             * \@docs-private
             */
            var MatSortHeaderBase = /** @class */ (function () {
                function MatSortHeaderBase() {
                }
                return MatSortHeaderBase;
            }());
            /** @type {?} */
            var _MatSortHeaderMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(MatSortHeaderBase);
            /**
             * Applies sorting behavior (click to change sort) and styles to an element, including an
             * arrow to display the current sort direction.
             *
             * Must be provided with an id and contained within a parent MatSort directive.
             *
             * If used on header cells in a CdkTable, it will automatically default its id from its containing
             * column definition.
             */
            var MatSortHeader = /** @class */ (function (_super) {
                __extends(MatSortHeader, _super);
                /**
                 * @param {?} _intl
                 * @param {?} changeDetectorRef
                 * @param {?} _sort
                 * @param {?} _columnDef
                 */
                function MatSortHeader(_intl, changeDetectorRef, _sort, _columnDef) {
                    var _this = 
                    // Note that we use a string token for the `_columnDef`, because the value is provided both by
                    // `material/table` and `cdk/table` and we can't have the CDK depending on Material,
                    // and we want to avoid having the sort header depending on the CDK table because
                    // of this single reference.
                    _super.call(this) || this;
                    _this._intl = _intl;
                    _this._sort = _sort;
                    _this._columnDef = _columnDef;
                    /**
                     * Flag set to true when the indicator should be displayed while the sort is not active. Used to
                     * provide an affordance that the header is sortable by showing on focus and hover.
                     */
                    _this._showIndicatorHint = false;
                    /**
                     * The direction the arrow should be facing according to the current state.
                     */
                    _this._arrowDirection = '';
                    /**
                     * Whether the view state animation should show the transition between the `from` and `to` states.
                     */
                    _this._disableViewStateAnimation = false;
                    /**
                     * Sets the position of the arrow that displays when sorted.
                     */
                    _this.arrowPosition = 'after';
                    if (!_sort) {
                        throw getSortHeaderNotContainedWithinSortError();
                    }
                    _this._rerenderSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(_sort.sortChange, _sort._stateChanges, _intl.changes)
                        .subscribe(( /**
                 * @return {?}
                 */function () {
                        if (_this._isSorted()) {
                            _this._updateArrowDirection();
                        }
                        // If this header was recently active and now no longer sorted, animate away the arrow.
                        if (!_this._isSorted() && _this._viewState && _this._viewState.toState === 'active') {
                            _this._disableViewStateAnimation = false;
                            _this._setAnimationTransitionState({ fromState: 'active', toState: _this._arrowDirection });
                        }
                        changeDetectorRef.markForCheck();
                    }));
                    return _this;
                }
                Object.defineProperty(MatSortHeader.prototype, "disableClear", {
                    /**
                     * Overrides the disable clear value of the containing MatSort for this MatSortable.
                     * @return {?}
                     */
                    get: function () { return this._disableClear; },
                    /**
                     * @param {?} v
                     * @return {?}
                     */
                    set: function (v) { this._disableClear = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(v); },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @return {?}
                 */
                MatSortHeader.prototype.ngOnInit = function () {
                    if (!this.id && this._columnDef) {
                        this.id = this._columnDef.name;
                    }
                    // Initialize the direction of the arrow and set the view state to be immediately that state.
                    this._updateArrowDirection();
                    this._setAnimationTransitionState({ toState: this._isSorted() ? 'active' : this._arrowDirection });
                    this._sort.register(this);
                };
                /**
                 * @return {?}
                 */
                MatSortHeader.prototype.ngOnDestroy = function () {
                    this._sort.deregister(this);
                    this._rerenderSubscription.unsubscribe();
                };
                /**
                 * Sets the "hint" state such that the arrow will be semi-transparently displayed as a hint to the
                 * user showing what the active sort will become. If set to false, the arrow will fade away.
                 * @param {?} visible
                 * @return {?}
                 */
                MatSortHeader.prototype._setIndicatorHintVisible = function (visible) {
                    // No-op if the sort header is disabled - should not make the hint visible.
                    if (this._isDisabled() && visible) {
                        return;
                    }
                    this._showIndicatorHint = visible;
                    if (!this._isSorted()) {
                        this._updateArrowDirection();
                        if (this._showIndicatorHint) {
                            this._setAnimationTransitionState({ fromState: this._arrowDirection, toState: 'hint' });
                        }
                        else {
                            this._setAnimationTransitionState({ fromState: 'hint', toState: this._arrowDirection });
                        }
                    }
                };
                /**
                 * Sets the animation transition view state for the arrow's position and opacity. If the
                 * `disableViewStateAnimation` flag is set to true, the `fromState` will be ignored so that
                 * no animation appears.
                 * @param {?} viewState
                 * @return {?}
                 */
                MatSortHeader.prototype._setAnimationTransitionState = function (viewState) {
                    this._viewState = viewState;
                    // If the animation for arrow position state (opacity/translation) should be disabled,
                    // remove the fromState so that it jumps right to the toState.
                    if (this._disableViewStateAnimation) {
                        this._viewState = { toState: viewState.toState };
                    }
                };
                /**
                 * Triggers the sort on this sort header and removes the indicator hint.
                 * @return {?}
                 */
                MatSortHeader.prototype._handleClick = function () {
                    if (this._isDisabled()) {
                        return;
                    }
                    this._sort.sort(this);
                    // Do not show the animation if the header was already shown in the right position.
                    if (this._viewState.toState === 'hint' || this._viewState.toState === 'active') {
                        this._disableViewStateAnimation = true;
                    }
                    // If the arrow is now sorted, animate the arrow into place. Otherwise, animate it away into
                    // the direction it is facing.
                    /** @type {?} */
                    var viewState = this._isSorted() ?
                        { fromState: this._arrowDirection, toState: 'active' } :
                        { fromState: 'active', toState: this._arrowDirection };
                    this._setAnimationTransitionState(viewState);
                    this._showIndicatorHint = false;
                };
                /**
                 * Whether this MatSortHeader is currently sorted in either ascending or descending order.
                 * @return {?}
                 */
                MatSortHeader.prototype._isSorted = function () {
                    return this._sort.active == this.id &&
                        (this._sort.direction === 'asc' || this._sort.direction === 'desc');
                };
                /**
                 * Returns the animation state for the arrow direction (indicator and pointers).
                 * @return {?}
                 */
                MatSortHeader.prototype._getArrowDirectionState = function () {
                    return "" + (this._isSorted() ? 'active-' : '') + this._arrowDirection;
                };
                /**
                 * Returns the arrow position state (opacity, translation).
                 * @return {?}
                 */
                MatSortHeader.prototype._getArrowViewState = function () {
                    /** @type {?} */
                    var fromState = this._viewState.fromState;
                    return (fromState ? fromState + "-to-" : '') + this._viewState.toState;
                };
                /**
                 * Updates the direction the arrow should be pointing. If it is not sorted, the arrow should be
                 * facing the start direction. Otherwise if it is sorted, the arrow should point in the currently
                 * active sorted direction. The reason this is updated through a function is because the direction
                 * should only be changed at specific times - when deactivated but the hint is displayed and when
                 * the sort is active and the direction changes. Otherwise the arrow's direction should linger
                 * in cases such as the sort becoming deactivated but we want to animate the arrow away while
                 * preserving its direction, even though the next sort direction is actually different and should
                 * only be changed once the arrow displays again (hint or activation).
                 * @return {?}
                 */
                MatSortHeader.prototype._updateArrowDirection = function () {
                    this._arrowDirection = this._isSorted() ?
                        this._sort.direction :
                        (this.start || this._sort.start);
                };
                /**
                 * @return {?}
                 */
                MatSortHeader.prototype._isDisabled = function () {
                    return this._sort.disabled || this.disabled;
                };
                /**
                 * Gets the aria-sort attribute that should be applied to this sort header. If this header
                 * is not sorted, returns null so that the attribute is removed from the host element. Aria spec
                 * says that the aria-sort property should only be present on one header at a time, so removing
                 * ensures this is true.
                 * @return {?}
                 */
                MatSortHeader.prototype._getAriaSortAttribute = function () {
                    if (!this._isSorted()) {
                        return null;
                    }
                    return this._sort.direction == 'asc' ? 'ascending' : 'descending';
                };
                /**
                 * Whether the arrow inside the sort header should be rendered.
                 * @return {?}
                 */
                MatSortHeader.prototype._renderArrow = function () {
                    return !this._isDisabled() || this._isSorted();
                };
                return MatSortHeader;
            }(_MatSortHeaderMixinBase));
            MatSortHeader.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{ selector: '[mat-sort-header]',
                            exportAs: 'matSortHeader',
                            template: "<div class=\"mat-sort-header-container\" [class.mat-sort-header-sorted]=\"_isSorted()\" [class.mat-sort-header-position-before]=\"arrowPosition == 'before'\"><button class=\"mat-sort-header-button\" type=\"button\" [attr.disabled]=\"_isDisabled() || null\" [attr.aria-label]=\"_intl.sortButtonLabel(id)\" (focus)=\"_setIndicatorHintVisible(true)\" (blur)=\"_setIndicatorHintVisible(false)\"><ng-content></ng-content></button><div class=\"mat-sort-header-arrow\" *ngIf=\"_renderArrow()\" [@arrowOpacity]=\"_getArrowViewState()\" [@arrowPosition]=\"_getArrowViewState()\" [@allowChildren]=\"_getArrowDirectionState()\" (@arrowPosition.start)=\"_disableViewStateAnimation = true\" (@arrowPosition.done)=\"_disableViewStateAnimation = false\"><div class=\"mat-sort-header-stem\"></div><div class=\"mat-sort-header-indicator\" [@indicator]=\"_getArrowDirectionState()\"><div class=\"mat-sort-header-pointer-left\" [@leftPointer]=\"_getArrowDirectionState()\"></div><div class=\"mat-sort-header-pointer-right\" [@rightPointer]=\"_getArrowDirectionState()\"></div><div class=\"mat-sort-header-pointer-middle\"></div></div></div></div>",
                            styles: [".mat-sort-header-container{display:flex;cursor:pointer;align-items:center}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-button{border:none;background:0 0;display:flex;align-items:center;padding:0;cursor:inherit;outline:0;font:inherit;color:currentColor}.mat-sort-header-button::-moz-focus-inner{border:0}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}@media (-ms-high-contrast:active){.mat-sort-header-stem{width:0;border-left:solid 2px}}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}@media (-ms-high-contrast:active){.mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}@media (-ms-high-contrast:active){.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}"],
                            host: {
                                '(click)': '_handleClick()',
                                '(mouseenter)': '_setIndicatorHintVisible(true)',
                                '(mouseleave)': '_setIndicatorHintVisible(false)',
                                '[attr.aria-sort]': '_getAriaSortAttribute()',
                                '[class.mat-sort-header-disabled]': '_isDisabled()',
                            },
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                            inputs: ['disabled'],
                            animations: [
                                matSortAnimations.indicator,
                                matSortAnimations.leftPointer,
                                matSortAnimations.rightPointer,
                                matSortAnimations.arrowOpacity,
                                matSortAnimations.arrowPosition,
                                matSortAnimations.allowChildren,
                            ]
                        },] },
            ];
            /** @nocollapse */
            MatSortHeader.ctorParameters = function () { return [
                { type: MatSortHeaderIntl },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: MatSort, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['MAT_SORT_HEADER_COLUMN_DEF',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
            ]; };
            MatSortHeader.propDecorators = {
                id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['mat-sort-header',] }],
                arrowPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
                start: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
                disableClear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var MatSortModule = /** @class */ (function () {
                function MatSortModule() {
                }
                return MatSortModule;
            }());
            MatSortModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
                            exports: [MatSort, MatSortHeader],
                            declarations: [MatSort, MatSortHeader],
                            providers: [MAT_SORT_HEADER_INTL_PROVIDER]
                        },] },
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            //# sourceMappingURL=sort.js.map
            /***/ 
        })
    }]);
//# sourceMappingURL=default~pages-angular-material-components-mat-input-mat-input-module~pages-angular-material-componen~2fc2eb0d-es2015.js.map
//# sourceMappingURL=default~pages-angular-material-components-mat-input-mat-input-module~pages-angular-material-componen~2fc2eb0d-es5.js.map
//# sourceMappingURL=default~pages-angular-material-components-mat-input-mat-input-module~pages-angular-material-componen~2fc2eb0d-es5.js.map