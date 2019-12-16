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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-angular-material-components-expansion-expansion-module~pages-angular-material-componen~a3730d0f"], {
        /***/ "./node_modules/@angular/cdk/esm2015/accordion.js": 
        /*!********************************************************!*\
          !*** ./node_modules/@angular/cdk/esm2015/accordion.js ***!
          \********************************************************/
        /*! exports provided: CdkAccordionItem, CdkAccordion, CdkAccordionModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkAccordionItem", function () { return CdkAccordionItem; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkAccordion", function () { return CdkAccordion; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkAccordionModule", function () { return CdkAccordionModule; });
            /* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm2015/coercion.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm2015/collections.js");
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
             * Used to generate unique ID for each accordion.
             * @type {?}
             */
            var nextId = 0;
            /**
             * Directive whose purpose is to manage the expanded state of CdkAccordionItem children.
             */
            var CdkAccordion = /** @class */ (function () {
                function CdkAccordion() {
                    /**
                     * Emits when the state of the accordion changes
                     */
                    this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                    /**
                     * Stream that emits true/false when openAll/closeAll is triggered.
                     */
                    this._openCloseAllActions = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                    /**
                     * A readonly id value to use for unique selection coordination.
                     */
                    this.id = "cdk-accordion-" + nextId++;
                    this._multi = false;
                }
                Object.defineProperty(CdkAccordion.prototype, "multi", {
                    /**
                     * Whether the accordion should allow multiple expanded accordion items simultaneously.
                     * @return {?}
                     */
                    get: function () { return this._multi; },
                    /**
                     * @param {?} multi
                     * @return {?}
                     */
                    set: function (multi) { this._multi = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(multi); },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Opens all enabled accordion items in an accordion where multi is enabled.
                 * @return {?}
                 */
                CdkAccordion.prototype.openAll = function () {
                    this._openCloseAll(true);
                };
                /**
                 * Closes all enabled accordion items in an accordion where multi is enabled.
                 * @return {?}
                 */
                CdkAccordion.prototype.closeAll = function () {
                    this._openCloseAll(false);
                };
                /**
                 * @param {?} changes
                 * @return {?}
                 */
                CdkAccordion.prototype.ngOnChanges = function (changes) {
                    this._stateChanges.next(changes);
                };
                /**
                 * @return {?}
                 */
                CdkAccordion.prototype.ngOnDestroy = function () {
                    this._stateChanges.complete();
                };
                /**
                 * @private
                 * @param {?} expanded
                 * @return {?}
                 */
                CdkAccordion.prototype._openCloseAll = function (expanded) {
                    if (this.multi) {
                        this._openCloseAllActions.next(expanded);
                    }
                };
                return CdkAccordion;
            }());
            CdkAccordion.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                            selector: 'cdk-accordion, [cdkAccordion]',
                            exportAs: 'cdkAccordion',
                        },] },
            ];
            CdkAccordion.propDecorators = {
                multi: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Used to generate unique ID for each accordion item.
             * @type {?}
             */
            var nextId$1 = 0;
            var ɵ0 = undefined;
            /**
             * An basic directive expected to be extended and decorated as a component.  Sets up all
             * events and attributes needed to be managed by a CdkAccordion parent.
             */
            var CdkAccordionItem = /** @class */ (function () {
                /**
                 * @param {?} accordion
                 * @param {?} _changeDetectorRef
                 * @param {?} _expansionDispatcher
                 */
                function CdkAccordionItem(accordion, _changeDetectorRef, _expansionDispatcher) {
                    var _this = this;
                    this.accordion = accordion;
                    this._changeDetectorRef = _changeDetectorRef;
                    this._expansionDispatcher = _expansionDispatcher;
                    /**
                     * Subscription to openAll/closeAll events.
                     */
                    this._openCloseAllSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
                    /**
                     * Event emitted every time the AccordionItem is closed.
                     */
                    this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * Event emitted every time the AccordionItem is opened.
                     */
                    this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * Event emitted when the AccordionItem is destroyed.
                     */
                    this.destroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * Emits whenever the expanded state of the accordion changes.
                     * Primarily used to facilitate two-way binding.
                     * \@docs-private
                     */
                    this.expandedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * The unique AccordionItem id.
                     */
                    this.id = "cdk-accordion-child-" + nextId$1++;
                    this._expanded = false;
                    this._disabled = false;
                    /**
                     * Unregister function for _expansionDispatcher.
                     */
                    this._removeUniqueSelectionListener = ( /**
                     * @return {?}
                     */function () { });
                    this._removeUniqueSelectionListener =
                        _expansionDispatcher.listen(( /**
                         * @param {?} id
                         * @param {?} accordionId
                         * @return {?}
                         */function (id, accordionId) {
                            if (_this.accordion && !_this.accordion.multi &&
                                _this.accordion.id === accordionId && _this.id !== id) {
                                _this.expanded = false;
                            }
                        }));
                    // When an accordion item is hosted in an accordion, subscribe to open/close events.
                    if (this.accordion) {
                        this._openCloseAllSubscription = this._subscribeToOpenCloseAllActions();
                    }
                }
                Object.defineProperty(CdkAccordionItem.prototype, "expanded", {
                    /**
                     * Whether the AccordionItem is expanded.
                     * @return {?}
                     */
                    get: function () { return this._expanded; },
                    /**
                     * @param {?} expanded
                     * @return {?}
                     */
                    set: function (expanded) {
                        expanded = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(expanded);
                        // Only emit events and update the internal value if the value changes.
                        if (this._expanded !== expanded) {
                            this._expanded = expanded;
                            this.expandedChange.emit(expanded);
                            if (expanded) {
                                this.opened.emit();
                                /**
                                 * In the unique selection dispatcher, the id parameter is the id of the CdkAccordionItem,
                                 * the name value is the id of the accordion.
                                 * @type {?}
                                 */
                                var accordionId = this.accordion ? this.accordion.id : this.id;
                                this._expansionDispatcher.notify(this.id, accordionId);
                            }
                            else {
                                this.closed.emit();
                            }
                            // Ensures that the animation will run when the value is set outside of an `@Input`.
                            // This includes cases like the open, close and toggle methods.
                            this._changeDetectorRef.markForCheck();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(CdkAccordionItem.prototype, "disabled", {
                    /**
                     * Whether the AccordionItem is disabled.
                     * @return {?}
                     */
                    get: function () { return this._disabled; },
                    /**
                     * @param {?} disabled
                     * @return {?}
                     */
                    set: function (disabled) { this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(disabled); },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Emits an event for the accordion item being destroyed.
                 * @return {?}
                 */
                CdkAccordionItem.prototype.ngOnDestroy = function () {
                    this.opened.complete();
                    this.closed.complete();
                    this.destroyed.emit();
                    this.destroyed.complete();
                    this._removeUniqueSelectionListener();
                    this._openCloseAllSubscription.unsubscribe();
                };
                /**
                 * Toggles the expanded state of the accordion item.
                 * @return {?}
                 */
                CdkAccordionItem.prototype.toggle = function () {
                    if (!this.disabled) {
                        this.expanded = !this.expanded;
                    }
                };
                /**
                 * Sets the expanded state of the accordion item to false.
                 * @return {?}
                 */
                CdkAccordionItem.prototype.close = function () {
                    if (!this.disabled) {
                        this.expanded = false;
                    }
                };
                /**
                 * Sets the expanded state of the accordion item to true.
                 * @return {?}
                 */
                CdkAccordionItem.prototype.open = function () {
                    if (!this.disabled) {
                        this.expanded = true;
                    }
                };
                /**
                 * @private
                 * @return {?}
                 */
                CdkAccordionItem.prototype._subscribeToOpenCloseAllActions = function () {
                    var _this = this;
                    return this.accordion._openCloseAllActions.subscribe(( /**
                     * @param {?} expanded
                     * @return {?}
                     */function (/**
                     * @param {?} expanded
                     * @return {?}
                     */ expanded) {
                        // Only change expanded state if item is enabled
                        if (!_this.disabled) {
                            _this.expanded = expanded;
                        }
                    }));
                };
                return CdkAccordionItem;
            }());
            CdkAccordionItem.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                            selector: 'cdk-accordion-item, [cdkAccordionItem]',
                            exportAs: 'cdkAccordionItem',
                            providers: [
                                // Provide CdkAccordion as undefined to prevent nested accordion items from registering
                                // to the same accordion.
                                { provide: CdkAccordion, useValue: ɵ0 },
                            ],
                        },] },
            ];
            /** @nocollapse */
            CdkAccordionItem.ctorParameters = function () { return [
                { type: CdkAccordion, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["UniqueSelectionDispatcher"] }
            ]; };
            CdkAccordionItem.propDecorators = {
                closed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
                opened: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
                destroyed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
                expandedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
                expanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
                disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var CdkAccordionModule = /** @class */ (function () {
                function CdkAccordionModule() {
                }
                return CdkAccordionModule;
            }());
            CdkAccordionModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                            exports: [CdkAccordion, CdkAccordionItem],
                            declarations: [CdkAccordion, CdkAccordionItem],
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
            //# sourceMappingURL=accordion.js.map
            /***/ 
        }),
        /***/ "./node_modules/@angular/material/esm2015/expansion.js": 
        /*!*************************************************************!*\
          !*** ./node_modules/@angular/material/esm2015/expansion.js ***!
          \*************************************************************/
        /*! exports provided: MatExpansionModule, MatAccordion, MAT_ACCORDION, MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelDescription, MatExpansionPanelTitle, MatExpansionPanelContent, EXPANSION_PANEL_ANIMATION_TIMING, matExpansionAnimations */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionModule", function () { return MatExpansionModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatAccordion", function () { return MatAccordion; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_ACCORDION", function () { return MAT_ACCORDION; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_EXPANSION_PANEL_DEFAULT_OPTIONS", function () { return MAT_EXPANSION_PANEL_DEFAULT_OPTIONS; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanel", function () { return MatExpansionPanel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanelActionRow", function () { return MatExpansionPanelActionRow; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanelHeader", function () { return MatExpansionPanelHeader; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanelDescription", function () { return MatExpansionPanelDescription; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanelTitle", function () { return MatExpansionPanelTitle; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanelContent", function () { return MatExpansionPanelContent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPANSION_PANEL_ANIMATION_TIMING", function () { return EXPANSION_PANEL_ANIMATION_TIMING; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matExpansionAnimations", function () { return matExpansionAnimations; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
            /* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/accordion */ "./node_modules/@angular/cdk/esm2015/accordion.js");
            /* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm2015/coercion.js");
            /* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm2015/collections.js");
            /* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
            /* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
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
             * Token used to provide a `MatAccordion` to `MatExpansionPanel`.
             * Used primarily to avoid circular imports between `MatAccordion` and `MatExpansionPanel`.
             * @type {?}
             */
            var MAT_ACCORDION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_ACCORDION');
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Time and timing curve for expansion panel animations.
             * @type {?}
             */
            var EXPANSION_PANEL_ANIMATION_TIMING = '225ms cubic-bezier(0.4,0.0,0.2,1)';
            /**
             * Animations used by the Material expansion panel.
             *
             * A bug in angular animation's `state` when ViewContainers are moved using ViewContainerRef.move()
             * causes the animation state of moved components to become `void` upon exit, and not update again
             * upon reentry into the DOM.  This can lead a to situation for the expansion panel where the state
             * of the panel is `expanded` or `collapsed` but the animation state is `void`.
             *
             * To correctly handle animating to the next state, we animate between `void` and `collapsed` which
             * are defined to have the same styles. Since angular animates from the current styles to the
             * destination state's style definition, in situations where we are moving from `void`'s styles to
             * `collapsed` this acts a noop since no style values change.
             *
             * In the case where angular's animation state is out of sync with the expansion panel's state, the
             * expansion panel being `expanded` and angular animations being `void`, the animation from the
             * `expanded`'s effective styles (though in a `void` animation state) to the collapsed state will
             * occur as expected.
             *
             * Angular Bug: https://github.com/angular/angular/issues/18847
             *
             * \@docs-private
             * @type {?}
             */
            var matExpansionAnimations = {
                /**
                 * Animation that rotates the indicator arrow.
                 */
                indicatorRotate: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('indicatorRotate', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'rotate(0deg)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'rotate(180deg)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('expanded <=> collapsed, void => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(EXPANSION_PANEL_ANIMATION_TIMING)),
                ]),
                /**
                 * Animation that expands and collapses the panel header height.
                 */
                expansionHeaderHeight: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('expansionHeight', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        height: '{{collapsedHeight}}',
                    }), {
                        params: { collapsedHeight: '48px' },
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        height: '{{expandedHeight}}'
                    }), {
                        params: { expandedHeight: '64px' }
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('expanded <=> collapsed, void => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('@indicatorRotate', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])(), { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(EXPANSION_PANEL_ANIMATION_TIMING),
                    ])),
                ]),
                /**
                 * Animation that expands and collapses the panel content.
                 */
                bodyExpansion: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('bodyExpansion', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '0px', visibility: 'hidden' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*', visibility: 'visible' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('expanded <=> collapsed, void => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(EXPANSION_PANEL_ANIMATION_TIMING)),
                ])
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Expansion panel content that will be rendered lazily
             * after the panel is opened for the first time.
             */
            var MatExpansionPanelContent = /** @class */ (function () {
                /**
                 * @param {?} _template
                 */
                function MatExpansionPanelContent(_template) {
                    this._template = _template;
                }
                return MatExpansionPanelContent;
            }());
            MatExpansionPanelContent.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'ng-template[matExpansionPanelContent]'
                        },] },
            ];
            /** @nocollapse */
            MatExpansionPanelContent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
            ]; };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Counter for generating unique element ids.
             * @type {?}
             */
            var uniqueId = 0;
            /**
             * Injection token that can be used to configure the defalt
             * options for the expansion panel component.
             * @type {?}
             */
            var MAT_EXPANSION_PANEL_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_EXPANSION_PANEL_DEFAULT_OPTIONS');
            var ɵ0 = undefined;
            /**
             * `<mat-expansion-panel>`
             *
             * This component can be used as a single element to show expandable content, or as one of
             * multiple children of an element with the MatAccordion directive attached.
             */
            var MatExpansionPanel = /** @class */ (function (_super) {
                __extends(MatExpansionPanel, _super);
                /**
                 * @param {?} accordion
                 * @param {?} _changeDetectorRef
                 * @param {?} _uniqueSelectionDispatcher
                 * @param {?} _viewContainerRef
                 * @param {?} _document
                 * @param {?} _animationMode
                 * @param {?=} defaultOptions
                 */
                function MatExpansionPanel(accordion, _changeDetectorRef, _uniqueSelectionDispatcher, _viewContainerRef, _document, _animationMode, defaultOptions) {
                    var _this = _super.call(this, accordion, _changeDetectorRef, _uniqueSelectionDispatcher) || this;
                    _this._viewContainerRef = _viewContainerRef;
                    _this._animationMode = _animationMode;
                    _this._hideToggle = false;
                    /**
                     * An event emitted after the body's expansion animation happens.
                     */
                    _this.afterExpand = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    /**
                     * An event emitted after the body's collapse animation happens.
                     */
                    _this.afterCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    /**
                     * Stream that emits for changes in `\@Input` properties.
                     */
                    _this._inputChanges = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
                    /**
                     * ID for the associated header element. Used for a11y labelling.
                     */
                    _this._headerId = "mat-expansion-panel-header-" + uniqueId++;
                    /**
                     * Stream of body animation done events.
                     */
                    _this._bodyAnimationDone = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
                    _this.accordion = accordion;
                    _this._document = _document;
                    // We need a Subject with distinctUntilChanged, because the `done` event
                    // fires twice on some browsers. See https://github.com/angular/angular/issues/24084
                    _this._bodyAnimationDone.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["distinctUntilChanged"])(( /**
                     * @param {?} x
                     * @param {?} y
                     * @return {?}
                     */function (x, y) {
                        return x.fromState === y.fromState && x.toState === y.toState;
                    }))).subscribe(( /**
                     * @param {?} event
                     * @return {?}
                     */function (/**
                     * @param {?} event
                     * @return {?}
                     */ event) {
                        if (event.fromState !== 'void') {
                            if (event.toState === 'expanded') {
                                _this.afterExpand.emit();
                            }
                            else if (event.toState === 'collapsed') {
                                _this.afterCollapse.emit();
                            }
                        }
                    }));
                    if (defaultOptions) {
                        _this.hideToggle = defaultOptions.hideToggle;
                    }
                    return _this;
                }
                Object.defineProperty(MatExpansionPanel.prototype, "hideToggle", {
                    /**
                     * Whether the toggle indicator should be hidden.
                     * @return {?}
                     */
                    get: function () {
                        return this._hideToggle || (this.accordion && this.accordion.hideToggle);
                    },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._hideToggle = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatExpansionPanel.prototype, "togglePosition", {
                    /**
                     * The position of the expansion indicator.
                     * @return {?}
                     */
                    get: function () {
                        return this._togglePosition || (this.accordion && this.accordion.togglePosition);
                    },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._togglePosition = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Determines whether the expansion panel should have spacing between it and its siblings.
                 * @return {?}
                 */
                MatExpansionPanel.prototype._hasSpacing = function () {
                    if (this.accordion) {
                        // We don't need to subscribe to the `stateChanges` of the parent accordion because each time
                        // the [displayMode] input changes, the change detection will also cover the host bindings
                        // of this expansion panel.
                        return (this.expanded ? this.accordion.displayMode : this._getExpandedState()) === 'default';
                    }
                    return false;
                };
                /**
                 * Gets the expanded state string.
                 * @return {?}
                 */
                MatExpansionPanel.prototype._getExpandedState = function () {
                    return this.expanded ? 'expanded' : 'collapsed';
                };
                /**
                 * @return {?}
                 */
                MatExpansionPanel.prototype.ngAfterContentInit = function () {
                    var _this = this;
                    if (this._lazyContent) {
                        // Render the content as soon as the panel becomes open.
                        this.opened.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(( /** @type {?} */(null))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(( /**
                         * @return {?}
                         */function () { return _this.expanded && !_this._portal; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1)).subscribe(( /**
                         * @return {?}
                         */function () {
                            _this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["TemplatePortal"](_this._lazyContent._template, _this._viewContainerRef);
                        }));
                    }
                };
                /**
                 * @param {?} changes
                 * @return {?}
                 */
                MatExpansionPanel.prototype.ngOnChanges = function (changes) {
                    this._inputChanges.next(changes);
                };
                /**
                 * @return {?}
                 */
                MatExpansionPanel.prototype.ngOnDestroy = function () {
                    _super.prototype.ngOnDestroy.call(this);
                    this._bodyAnimationDone.complete();
                    this._inputChanges.complete();
                };
                /**
                 * Checks whether the expansion panel's content contains the currently-focused element.
                 * @return {?}
                 */
                MatExpansionPanel.prototype._containsFocus = function () {
                    if (this._body) {
                        /** @type {?} */
                        var focusedElement = this._document.activeElement;
                        /** @type {?} */
                        var bodyElement = this._body.nativeElement;
                        return focusedElement === bodyElement || bodyElement.contains(focusedElement);
                    }
                    return false;
                };
                return MatExpansionPanel;
            }(_angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__["CdkAccordionItem"]));
            MatExpansionPanel.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{ styles: [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(.4,0,.2,1),box-shadow 280ms cubic-bezier(.4,0,.2,1)}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}@media (-ms-high-contrast:active){.mat-expansion-panel{outline:solid 1px}}.mat-expansion-panel._mat-animation-noopable,.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row button.mat-button-base{margin-left:8px}[dir=rtl] .mat-action-row button.mat-button-base{margin-left:0;margin-right:8px}"],
                            selector: 'mat-expansion-panel',
                            exportAs: 'matExpansionPanel',
                            template: "<ng-content select=\"mat-expansion-panel-header\"></ng-content><div class=\"mat-expansion-panel-content\" role=\"region\" [@bodyExpansion]=\"_getExpandedState()\" (@bodyExpansion.done)=\"_bodyAnimationDone.next($event)\" [attr.aria-labelledby]=\"_headerId\" [id]=\"id\" #body><div class=\"mat-expansion-panel-body\"><ng-content></ng-content><ng-template [cdkPortalOutlet]=\"_portal\"></ng-template></div><ng-content select=\"mat-action-row\"></ng-content></div>",
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                            inputs: ['disabled', 'expanded'],
                            outputs: ['opened', 'closed', 'expandedChange'],
                            animations: [matExpansionAnimations.bodyExpansion],
                            providers: [
                                // Provide MatAccordion as undefined to prevent nested expansion panels from registering
                                // to the same accordion.
                                { provide: MAT_ACCORDION, useValue: ɵ0 },
                            ],
                            host: {
                                'class': 'mat-expansion-panel',
                                '[class.mat-expanded]': 'expanded',
                                '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
                                '[class.mat-expansion-panel-spacing]': '_hasSpacing()',
                            }
                        },] },
            ];
            /** @nocollapse */
            MatExpansionPanel.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_ACCORDION,] }] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
                { type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["UniqueSelectionDispatcher"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"],] }] },
                { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"],] }] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
            ]; };
            MatExpansionPanel.propDecorators = {
                hideToggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                togglePosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                afterExpand: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
                afterCollapse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
                _lazyContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [MatExpansionPanelContent, { static: false },] }],
                _body: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['body', { static: false },] }]
            };
            var MatExpansionPanelActionRow = /** @class */ (function () {
                function MatExpansionPanelActionRow() {
                }
                return MatExpansionPanelActionRow;
            }());
            MatExpansionPanelActionRow.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'mat-action-row',
                            host: {
                                class: 'mat-action-row'
                            }
                        },] },
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * `<mat-expansion-panel-header>`
             *
             * This component corresponds to the header element of an `<mat-expansion-panel>`.
             */
            var MatExpansionPanelHeader = /** @class */ (function () {
                /**
                 * @param {?} panel
                 * @param {?} _element
                 * @param {?} _focusMonitor
                 * @param {?} _changeDetectorRef
                 * @param {?=} defaultOptions
                 */
                function MatExpansionPanelHeader(panel, _element, _focusMonitor, _changeDetectorRef, defaultOptions) {
                    var _this = this;
                    this.panel = panel;
                    this._element = _element;
                    this._focusMonitor = _focusMonitor;
                    this._changeDetectorRef = _changeDetectorRef;
                    this._parentChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"].EMPTY;
                    /**
                     * Whether Angular animations in the panel header should be disabled.
                     */
                    this._animationsDisabled = true;
                    /** @type {?} */
                    var accordionHideToggleChange = panel.accordion ?
                        panel.accordion._stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(( /**
                         * @param {?} changes
                         * @return {?}
                         */function (/**
                         * @param {?} changes
                         * @return {?}
                         */ changes) { return !!(changes['hideToggle'] || changes['togglePosition']); }))) :
                        rxjs__WEBPACK_IMPORTED_MODULE_8__["EMPTY"];
                    // Since the toggle state depends on an @Input on the panel, we
                    // need to subscribe and trigger change detection manually.
                    this._parentChangeSubscription =
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["merge"])(panel.opened, panel.closed, accordionHideToggleChange, panel._inputChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(( /**
                         * @param {?} changes
                         * @return {?}
                         */function (/**
                         * @param {?} changes
                         * @return {?}
                         */ changes) {
                            return !!(changes['hideToggle'] ||
                                changes['disabled'] ||
                                changes['togglePosition']);
                        }))))
                            .subscribe(( /**
                     * @return {?}
                     */function () { return _this._changeDetectorRef.markForCheck(); }));
                    // Avoids focus being lost if the panel contained the focused element and was closed.
                    panel.closed
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(( /**
                 * @return {?}
                 */function () { return panel._containsFocus(); })))
                        .subscribe(( /**
                 * @return {?}
                 */function () { return _focusMonitor.focusVia(_element, 'program'); }));
                    _focusMonitor.monitor(_element).subscribe(( /**
                     * @param {?} origin
                     * @return {?}
                     */function (/**
                     * @param {?} origin
                     * @return {?}
                     */ origin) {
                        if (origin && panel.accordion) {
                            panel.accordion._handleHeaderFocus(_this);
                        }
                    }));
                    if (defaultOptions) {
                        this.expandedHeight = defaultOptions.expandedHeight;
                        this.collapsedHeight = defaultOptions.collapsedHeight;
                    }
                }
                /**
                 * @return {?}
                 */
                MatExpansionPanelHeader.prototype._animationStarted = function () {
                    // Currently the `expansionHeight` animation has a `void => collapsed` transition which is
                    // there to work around a bug in Angular (see #13088), however this introduces a different
                    // issue. The new transition will cause the header to animate in on init (see #16067), if the
                    // consumer has set a header height that is different from the default one. We work around it
                    // by disabling animations on the header and re-enabling them after the first animation has run.
                    // Note that Angular dispatches animation events even if animations are disabled. Ideally this
                    // wouldn't be necessary if we remove the `void => collapsed` transition, but we have to wait
                    // for https://github.com/angular/angular/issues/18847 to be resolved.
                    this._animationsDisabled = false;
                };
                Object.defineProperty(MatExpansionPanelHeader.prototype, "disabled", {
                    /**
                     * Whether the associated panel is disabled. Implemented as a part of `FocusableOption`.
                     * \@docs-private
                     * @return {?}
                     */
                    get: function () {
                        return this.panel.disabled;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Toggles the expanded state of the panel.
                 * @return {?}
                 */
                MatExpansionPanelHeader.prototype._toggle = function () {
                    this.panel.toggle();
                };
                /**
                 * Gets whether the panel is expanded.
                 * @return {?}
                 */
                MatExpansionPanelHeader.prototype._isExpanded = function () {
                    return this.panel.expanded;
                };
                /**
                 * Gets the expanded state string of the panel.
                 * @return {?}
                 */
                MatExpansionPanelHeader.prototype._getExpandedState = function () {
                    return this.panel._getExpandedState();
                };
                /**
                 * Gets the panel id.
                 * @return {?}
                 */
                MatExpansionPanelHeader.prototype._getPanelId = function () {
                    return this.panel.id;
                };
                /**
                 * Gets the toggle position for the header.
                 * @return {?}
                 */
                MatExpansionPanelHeader.prototype._getTogglePosition = function () {
                    return this.panel.togglePosition;
                };
                /**
                 * Gets whether the expand indicator should be shown.
                 * @return {?}
                 */
                MatExpansionPanelHeader.prototype._showToggle = function () {
                    return !this.panel.hideToggle && !this.panel.disabled;
                };
                /**
                 * Handle keydown event calling to toggle() if appropriate.
                 * @param {?} event
                 * @return {?}
                 */
                MatExpansionPanelHeader.prototype._keydown = function (event) {
                    switch (event.keyCode) {
                        // Toggle for space and enter keys.
                        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["SPACE"]:
                        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["ENTER"]:
                            if (!Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["hasModifierKey"])(event)) {
                                event.preventDefault();
                                this._toggle();
                            }
                            break;
                        default:
                            if (this.panel.accordion) {
                                this.panel.accordion._handleHeaderKeydown(event);
                            }
                            return;
                    }
                };
                /**
                 * Focuses the panel header. Implemented as a part of `FocusableOption`.
                 * \@docs-private
                 * @param {?=} origin Origin of the action that triggered the focus.
                 * @param {?=} options
                 * @return {?}
                 */
                MatExpansionPanelHeader.prototype.focus = function (origin, options) {
                    if (origin === void 0) { origin = 'program'; }
                    this._focusMonitor.focusVia(this._element, origin, options);
                };
                /**
                 * @return {?}
                 */
                MatExpansionPanelHeader.prototype.ngOnDestroy = function () {
                    this._parentChangeSubscription.unsubscribe();
                    this._focusMonitor.stopMonitoring(this._element);
                };
                return MatExpansionPanelHeader;
            }());
            MatExpansionPanelHeader.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{ selector: 'mat-expansion-panel-header',
                            styles: [".mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:0}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-expansion-panel-header-description,.mat-expansion-panel-header-title{display:flex;flex-grow:1;margin-right:16px}[dir=rtl] .mat-expansion-panel-header-description,[dir=rtl] .mat-expansion-panel-header-title{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:'';display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}"],
                            template: "<span class=\"mat-content\"><ng-content select=\"mat-panel-title\"></ng-content><ng-content select=\"mat-panel-description\"></ng-content><ng-content></ng-content></span><span [@indicatorRotate]=\"_getExpandedState()\" *ngIf=\"_showToggle()\" class=\"mat-expansion-indicator\"></span>",
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                            animations: [
                                matExpansionAnimations.indicatorRotate,
                                matExpansionAnimations.expansionHeaderHeight
                            ],
                            host: {
                                'class': 'mat-expansion-panel-header',
                                'role': 'button',
                                '[attr.id]': 'panel._headerId',
                                '[attr.tabindex]': 'disabled ? -1 : 0',
                                '[attr.aria-controls]': '_getPanelId()',
                                '[attr.aria-expanded]': '_isExpanded()',
                                '[attr.aria-disabled]': 'panel.disabled',
                                '[class.mat-expanded]': '_isExpanded()',
                                '[class.mat-expansion-toggle-indicator-after]': "_getTogglePosition() === 'after'",
                                '[class.mat-expansion-toggle-indicator-before]': "_getTogglePosition() === 'before'",
                                '(click)': '_toggle()',
                                '(keydown)': '_keydown($event)',
                                '[@.disabled]': '_animationsDisabled',
                                '(@expansionHeight.start)': '_animationStarted()',
                                '[@expansionHeight]': "{\n        value: _getExpandedState(),\n        params: {\n          collapsedHeight: collapsedHeight,\n          expandedHeight: expandedHeight\n        }\n    }",
                            },
                        },] },
            ];
            /** @nocollapse */
            MatExpansionPanelHeader.ctorParameters = function () { return [
                { type: MatExpansionPanel, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
                { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
            ]; };
            MatExpansionPanelHeader.propDecorators = {
                expandedHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                collapsedHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            /**
             * `<mat-panel-description>`
             *
             * This directive is to be used inside of the MatExpansionPanelHeader component.
             */
            var MatExpansionPanelDescription = /** @class */ (function () {
                function MatExpansionPanelDescription() {
                }
                return MatExpansionPanelDescription;
            }());
            MatExpansionPanelDescription.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'mat-panel-description',
                            host: {
                                class: 'mat-expansion-panel-header-description'
                            }
                        },] },
            ];
            /**
             * `<mat-panel-title>`
             *
             * This directive is to be used inside of the MatExpansionPanelHeader component.
             */
            var MatExpansionPanelTitle = /** @class */ (function () {
                function MatExpansionPanelTitle() {
                }
                return MatExpansionPanelTitle;
            }());
            MatExpansionPanelTitle.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'mat-panel-title',
                            host: {
                                class: 'mat-expansion-panel-header-title'
                            }
                        },] },
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Directive for a Material Design Accordion.
             */
            var MatAccordion = /** @class */ (function (_super) {
                __extends(MatAccordion, _super);
                function MatAccordion() {
                    var _this = _super.apply(this, __spread(arguments)) || this;
                    _this._hideToggle = false;
                    /**
                     * Display mode used for all expansion panels in the accordion. Currently two display
                     * modes exist:
                     *  default - a gutter-like spacing is placed around any expanded panel, placing the expanded
                     *     panel at a different elevation from the rest of the accordion.
                     *  flat - no spacing is placed around expanded panels, showing all panels at the same
                     *     elevation.
                     */
                    _this.displayMode = 'default';
                    /**
                     * The position of the expansion indicator.
                     */
                    _this.togglePosition = 'after';
                    return _this;
                }
                Object.defineProperty(MatAccordion.prototype, "hideToggle", {
                    /**
                     * Whether the expansion indicator should be hidden.
                     * @return {?}
                     */
                    get: function () { return this._hideToggle; },
                    /**
                     * @param {?} show
                     * @return {?}
                     */
                    set: function (show) { this._hideToggle = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(show); },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @return {?}
                 */
                MatAccordion.prototype.ngAfterContentInit = function () {
                    this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusKeyManager"](this._headers).withWrap();
                };
                /**
                 * Handles keyboard events coming in from the panel headers.
                 * @param {?} event
                 * @return {?}
                 */
                MatAccordion.prototype._handleHeaderKeydown = function (event) {
                    var keyCode = event.keyCode;
                    /** @type {?} */
                    var manager = this._keyManager;
                    if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["HOME"]) {
                        if (!Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["hasModifierKey"])(event)) {
                            manager.setFirstItemActive();
                            event.preventDefault();
                        }
                    }
                    else if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["END"]) {
                        if (!Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["hasModifierKey"])(event)) {
                            manager.setLastItemActive();
                            event.preventDefault();
                        }
                    }
                    else {
                        this._keyManager.onKeydown(event);
                    }
                };
                /**
                 * @param {?} header
                 * @return {?}
                 */
                MatAccordion.prototype._handleHeaderFocus = function (header) {
                    this._keyManager.updateActiveItem(header);
                };
                return MatAccordion;
            }(_angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__["CdkAccordion"]));
            MatAccordion.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'mat-accordion',
                            exportAs: 'matAccordion',
                            inputs: ['multi'],
                            providers: [{
                                    provide: MAT_ACCORDION,
                                    useExisting: MatAccordion
                                }],
                            host: {
                                class: 'mat-accordion'
                            }
                        },] },
            ];
            MatAccordion.propDecorators = {
                _headers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [MatExpansionPanelHeader, { descendants: true },] }],
                hideToggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                displayMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                togglePosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var MatExpansionModule = /** @class */ (function () {
                function MatExpansionModule() {
                }
                return MatExpansionModule;
            }());
            MatExpansionModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__["CdkAccordionModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["PortalModule"]],
                            exports: [
                                MatAccordion,
                                MatExpansionPanel,
                                MatExpansionPanelActionRow,
                                MatExpansionPanelHeader,
                                MatExpansionPanelTitle,
                                MatExpansionPanelDescription,
                                MatExpansionPanelContent,
                            ],
                            declarations: [
                                MatAccordion,
                                MatExpansionPanel,
                                MatExpansionPanelActionRow,
                                MatExpansionPanelHeader,
                                MatExpansionPanelTitle,
                                MatExpansionPanelDescription,
                                MatExpansionPanelContent,
                            ],
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
            //# sourceMappingURL=expansion.js.map
            /***/ 
        })
    }]);
//# sourceMappingURL=default~pages-angular-material-components-expansion-expansion-module~pages-angular-material-componen~a3730d0f-es2015.js.map
//# sourceMappingURL=default~pages-angular-material-components-expansion-expansion-module~pages-angular-material-componen~a3730d0f-es5.js.map
//# sourceMappingURL=default~pages-angular-material-components-expansion-expansion-module~pages-angular-material-componen~a3730d0f-es5.js.map