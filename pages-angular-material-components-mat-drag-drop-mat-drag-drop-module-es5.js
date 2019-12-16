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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-angular-material-components-mat-drag-drop-mat-drag-drop-module"], {
        /***/ "./node_modules/@angular/cdk/esm2015/bidi.js": 
        /*!***************************************************!*\
          !*** ./node_modules/@angular/cdk/esm2015/bidi.js ***!
          \***************************************************/
        /*! exports provided: Directionality, DIR_DOCUMENT, Dir, BidiModule, ɵa */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Directionality", function () { return Directionality; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIR_DOCUMENT", function () { return DIR_DOCUMENT; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dir", function () { return Dir; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidiModule", function () { return BidiModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function () { return DIR_DOCUMENT_FACTORY; });
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
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
             * Injection token used to inject the document into Directionality.
             * This is used so that the value can be faked in tests.
             *
             * We can't use the real document in tests because changing the real `dir` causes geometry-based
             * tests in Safari to fail.
             *
             * We also can't re-provide the DOCUMENT token from platform-brower because the unit tests
             * themselves use things like `querySelector` in test code.
             *
             * This token is defined in a separate file from Directionality as a workaround for
             * https://github.com/angular/angular/issues/22559
             *
             * \@docs-private
             * @type {?}
             */
            var DIR_DOCUMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('cdk-dir-doc', {
                providedIn: 'root',
                factory: DIR_DOCUMENT_FACTORY,
            });
            /**
             * \@docs-private
             * @return {?}
             */
            function DIR_DOCUMENT_FACTORY() {
                return Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]);
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * The directionality (LTR / RTL) context for the application (or a subtree of it).
             * Exposes the current direction and a stream of direction changes.
             */
            var Directionality = /** @class */ (function () {
                /**
                 * @param {?=} _document
                 */
                function Directionality(_document) {
                    /**
                     * The current 'ltr' or 'rtl' value.
                     */
                    this.value = 'ltr';
                    /**
                     * Stream that emits whenever the 'ltr' / 'rtl' state changes.
                     */
                    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    if (_document) {
                        // TODO: handle 'auto' value -
                        // We still need to account for dir="auto".
                        // It looks like HTMLElemenet.dir is also "auto" when that's set to the attribute,
                        // but getComputedStyle return either "ltr" or "rtl". avoiding getComputedStyle for now
                        /** @type {?} */
                        var bodyDir = _document.body ? _document.body.dir : null;
                        /** @type {?} */
                        var htmlDir = _document.documentElement ? _document.documentElement.dir : null;
                        /** @type {?} */
                        var value = bodyDir || htmlDir;
                        this.value = (value === 'ltr' || value === 'rtl') ? value : 'ltr';
                    }
                }
                /**
                 * @return {?}
                 */
                Directionality.prototype.ngOnDestroy = function () {
                    this.change.complete();
                };
                return Directionality;
            }());
            Directionality.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
            ];
            /** @nocollapse */
            Directionality.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [DIR_DOCUMENT,] }] }
            ]; };
            /** @nocollapse */ Directionality.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function Directionality_Factory() { return new Directionality(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(DIR_DOCUMENT, 8)); }, token: Directionality, providedIn: "root" });
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Directive to listen for changes of direction of part of the DOM.
             *
             * Provides itself as Directionality such that descendant directives only need to ever inject
             * Directionality to get the closest direction.
             */
            var Dir = /** @class */ (function () {
                function Dir() {
                    /**
                     * Normalized direction that accounts for invalid/unsupported values.
                     */
                    this._dir = 'ltr';
                    /**
                     * Whether the `value` has been set to its initial value.
                     */
                    this._isInitialized = false;
                    /**
                     * Event emitted when the direction changes.
                     */
                    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                Object.defineProperty(Dir.prototype, "dir", {
                    /**
                     * \@docs-private
                     * @return {?}
                     */
                    get: function () { return this._dir; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        /** @type {?} */
                        var old = this._dir;
                        /** @type {?} */
                        var normalizedValue = value ? value.toLowerCase() : value;
                        this._rawDir = value;
                        this._dir = (normalizedValue === 'ltr' || normalizedValue === 'rtl') ? normalizedValue : 'ltr';
                        if (old !== this._dir && this._isInitialized) {
                            this.change.emit(this._dir);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dir.prototype, "value", {
                    /**
                     * Current layout direction of the element.
                     * @return {?}
                     */
                    get: function () { return this.dir; },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Initialize once default value has been set.
                 * @return {?}
                 */
                Dir.prototype.ngAfterContentInit = function () {
                    this._isInitialized = true;
                };
                /**
                 * @return {?}
                 */
                Dir.prototype.ngOnDestroy = function () {
                    this.change.complete();
                };
                return Dir;
            }());
            Dir.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                            selector: '[dir]',
                            providers: [{ provide: Directionality, useExisting: Dir }],
                            host: { '[attr.dir]': '_rawDir' },
                            exportAs: 'dir',
                        },] },
            ];
            Dir.propDecorators = {
                change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['dirChange',] }],
                dir: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var BidiModule = /** @class */ (function () {
                function BidiModule() {
                }
                return BidiModule;
            }());
            BidiModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                            exports: [Dir],
                            declarations: [Dir],
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
            //# sourceMappingURL=bidi.js.map
            /***/ 
        }),
        /***/ "./node_modules/@angular/cdk/esm2015/drag-drop.js": 
        /*!********************************************************!*\
          !*** ./node_modules/@angular/cdk/esm2015/drag-drop.js ***!
          \********************************************************/
        /*! exports provided: DragDrop, DragRef, DropListRef, CdkDropList, CDK_DROP_LIST, CDK_DROP_LIST_CONTAINER, moveItemInArray, transferArrayItem, copyArrayItem, DragDropModule, DragDropRegistry, CdkDropListGroup, CDK_DRAG_CONFIG_FACTORY, CDK_DRAG_CONFIG, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder, ɵb */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDrop", function () { return DragDrop; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragRef", function () { return DragRef; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropListRef", function () { return DropListRef; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDropList", function () { return CdkDropList; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DROP_LIST", function () { return CDK_DROP_LIST; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DROP_LIST_CONTAINER", function () { return CDK_DROP_LIST_CONTAINER; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveItemInArray", function () { return moveItemInArray; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transferArrayItem", function () { return transferArrayItem; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyArrayItem", function () { return copyArrayItem; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropModule", function () { return DragDropModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropRegistry", function () { return DragDropRegistry; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDropListGroup", function () { return CdkDropListGroup; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DRAG_CONFIG_FACTORY", function () { return CDK_DRAG_CONFIG_FACTORY; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DRAG_CONFIG", function () { return CDK_DRAG_CONFIG; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDrag", function () { return CdkDrag; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDragHandle", function () { return CdkDragHandle; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDragPreview", function () { return CdkDragPreview; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDragPlaceholder", function () { return CdkDragPlaceholder; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function () { return CDK_DRAG_PARENT; });
            /* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm2015/platform.js");
            /* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm2015/coercion.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
            /* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm2015/bidi.js");
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
             * Shallow-extends a stylesheet object with another stylesheet object.
             * \@docs-private
             * @param {?} dest
             * @param {?} source
             * @return {?}
             */
            function extendStyles(dest, source) {
                for (var key in source) {
                    if (source.hasOwnProperty(key)) {
                        dest[key] = ( /** @type {?} */(source[key]));
                    }
                }
                return dest;
            }
            /**
             * Toggles whether the native drag interactions should be enabled for an element.
             * \@docs-private
             * @param {?} element Element on which to toggle the drag interactions.
             * @param {?} enable Whether the drag interactions should be enabled.
             * @return {?}
             */
            function toggleNativeDragInteractions(element, enable) {
                /** @type {?} */
                var userSelect = enable ? '' : 'none';
                extendStyles(element.style, {
                    touchAction: enable ? '' : 'none',
                    webkitUserDrag: enable ? '' : 'none',
                    webkitTapHighlightColor: enable ? '' : 'transparent',
                    userSelect: userSelect,
                    msUserSelect: userSelect,
                    webkitUserSelect: userSelect,
                    MozUserSelect: userSelect
                });
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Parses a CSS time value to milliseconds.
             * @param {?} value
             * @return {?}
             */
            function parseCssTimeUnitsToMs(value) {
                // Some browsers will return it in seconds, whereas others will return milliseconds.
                /** @type {?} */
                var multiplier = value.toLowerCase().indexOf('ms') > -1 ? 1 : 1000;
                return parseFloat(value) * multiplier;
            }
            /**
             * Gets the transform transition duration, including the delay, of an element in milliseconds.
             * @param {?} element
             * @return {?}
             */
            function getTransformTransitionDurationInMs(element) {
                /** @type {?} */
                var computedStyle = getComputedStyle(element);
                /** @type {?} */
                var transitionedProperties = parseCssPropertyValue(computedStyle, 'transition-property');
                /** @type {?} */
                var property = transitionedProperties.find(( /**
                 * @param {?} prop
                 * @return {?}
                 */function (/**
                 * @param {?} prop
                 * @return {?}
                 */ prop) { return prop === 'transform' || prop === 'all'; }));
                // If there's no transition for `all` or `transform`, we shouldn't do anything.
                if (!property) {
                    return 0;
                }
                // Get the index of the property that we're interested in and match
                // it up to the same index in `transition-delay` and `transition-duration`.
                /** @type {?} */
                var propertyIndex = transitionedProperties.indexOf(property);
                /** @type {?} */
                var rawDurations = parseCssPropertyValue(computedStyle, 'transition-duration');
                /** @type {?} */
                var rawDelays = parseCssPropertyValue(computedStyle, 'transition-delay');
                return parseCssTimeUnitsToMs(rawDurations[propertyIndex]) +
                    parseCssTimeUnitsToMs(rawDelays[propertyIndex]);
            }
            /**
             * Parses out multiple values from a computed style into an array.
             * @param {?} computedStyle
             * @param {?} name
             * @return {?}
             */
            function parseCssPropertyValue(computedStyle, name) {
                /** @type {?} */
                var value = computedStyle.getPropertyValue(name);
                return value.split(',').map(( /**
                 * @param {?} part
                 * @return {?}
                 */function (/**
                 * @param {?} part
                 * @return {?}
                 */ part) { return part.trim(); }));
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Options that can be used to bind a passive event listener.
             * @type {?}
             */
            var passiveEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["normalizePassiveListenerOptions"])({ passive: true });
            /**
             * Options that can be used to bind an active event listener.
             * @type {?}
             */
            var activeEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["normalizePassiveListenerOptions"])({ passive: false });
            /**
             * Time in milliseconds for which to ignore mouse events, after
             * receiving a touch event. Used to avoid doing double work for
             * touch devices where the browser fires fake mouse events, in
             * addition to touch events.
             * @type {?}
             */
            var MOUSE_EVENT_IGNORE_TIME = 800;
            /**
             * Reference to a draggable item. Used to manipulate or dispose of the item.
             * \@docs-private
             * @template T
             */
            var DragRef = /** @class */ (function () {
                /**
                 * @param {?} element
                 * @param {?} _config
                 * @param {?} _document
                 * @param {?} _ngZone
                 * @param {?} _viewportRuler
                 * @param {?} _dragDropRegistry
                 */
                function DragRef(element, _config, _document, _ngZone, _viewportRuler, _dragDropRegistry) {
                    var _this = this;
                    this._config = _config;
                    this._document = _document;
                    this._ngZone = _ngZone;
                    this._viewportRuler = _viewportRuler;
                    this._dragDropRegistry = _dragDropRegistry;
                    /**
                     * CSS `transform` applied to the element when it isn't being dragged. We need a
                     * passive transform in order for the dragged element to retain its new position
                     * after the user has stopped dragging and because we need to know the relative
                     * position in case they start dragging again. This corresponds to `element.style.transform`.
                     */
                    this._passiveTransform = { x: 0, y: 0 };
                    /**
                     * CSS `transform` that is applied to the element while it's being dragged.
                     */
                    this._activeTransform = { x: 0, y: 0 };
                    /**
                     * Emits when the item is being moved.
                     */
                    this._moveEvents = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                    /**
                     * Subscription to pointer movement events.
                     */
                    this._pointerMoveSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
                    /**
                     * Subscription to the event that is dispatched when the user lifts their pointer.
                     */
                    this._pointerUpSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
                    /**
                     * Subscription to the viewport being scrolled.
                     */
                    this._scrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
                    /**
                     * Subscription to the viewport being resized.
                     */
                    this._resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
                    /**
                     * Cached reference to the boundary element.
                     */
                    this._boundaryElement = null;
                    /**
                     * Whether the native dragging interactions have been enabled on the root element.
                     */
                    this._nativeInteractionsEnabled = true;
                    /**
                     * Elements that can be used to drag the draggable item.
                     */
                    this._handles = [];
                    /**
                     * Registered handles that are currently disabled.
                     */
                    this._disabledHandles = new Set();
                    /**
                     * Layout direction of the item.
                     */
                    this._direction = 'ltr';
                    /**
                     * Amount of milliseconds to wait after the user has put their
                     * pointer down before starting to drag the element.
                     */
                    this.dragStartDelay = 0;
                    this._disabled = false;
                    /**
                     * Emits as the drag sequence is being prepared.
                     */
                    this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                    /**
                     * Emits when the user starts dragging the item.
                     */
                    this.started = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                    /**
                     * Emits when the user has released a drag item, before any animations have started.
                     */
                    this.released = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                    /**
                     * Emits when the user stops dragging an item in the container.
                     */
                    this.ended = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                    /**
                     * Emits when the user has moved the item into a new container.
                     */
                    this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                    /**
                     * Emits when the user removes the item its container by dragging it into another container.
                     */
                    this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                    /**
                     * Emits when the user drops the item inside a container.
                     */
                    this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                    /**
                     * Emits as the user is dragging the item. Use with caution,
                     * because this event will fire for every pixel that the user has dragged.
                     */
                    this.moved = this._moveEvents.asObservable();
                    /**
                     * Handler for the `mousedown`/`touchstart` events.
                     */
                    this._pointerDown = ( /**
                     * @param {?} event
                     * @return {?}
                     */function (event) {
                        _this.beforeStarted.next();
                        // Delegate the event based on whether it started from a handle or the element itself.
                        if (_this._handles.length) {
                            /** @type {?} */
                            var targetHandle = _this._handles.find(( /**
                             * @param {?} handle
                             * @return {?}
                             */function (/**
                             * @param {?} handle
                             * @return {?}
                             */ handle) {
                                /** @type {?} */
                                var target = event.target;
                                return !!target && (target === handle || handle.contains(( /** @type {?} */(target))));
                            }));
                            if (targetHandle && !_this._disabledHandles.has(targetHandle) && !_this.disabled) {
                                _this._initializeDragSequence(targetHandle, event);
                            }
                        }
                        else if (!_this.disabled) {
                            _this._initializeDragSequence(_this._rootElement, event);
                        }
                    });
                    /**
                     * Handler that is invoked when the user moves their pointer after they've initiated a drag.
                     */
                    this._pointerMove = ( /**
                     * @param {?} event
                     * @return {?}
                     */function (event) {
                        if (!_this._hasStartedDragging) {
                            /** @type {?} */
                            var pointerPosition = _this._getPointerPositionOnPage(event);
                            /** @type {?} */
                            var distanceX = Math.abs(pointerPosition.x - _this._pickupPositionOnPage.x);
                            /** @type {?} */
                            var distanceY = Math.abs(pointerPosition.y - _this._pickupPositionOnPage.y);
                            /** @type {?} */
                            var isOverThreshold = distanceX + distanceY >= _this._config.dragStartThreshold;
                            // Only start dragging after the user has moved more than the minimum distance in either
                            // direction. Note that this is preferrable over doing something like `skip(minimumDistance)`
                            // in the `pointerMove` subscription, because we're not guaranteed to have one move event
                            // per pixel of movement (e.g. if the user moves their pointer quickly).
                            if (isOverThreshold) {
                                /** @type {?} */
                                var isDelayElapsed = Date.now() >= _this._dragStartTime + (_this.dragStartDelay || 0);
                                if (!isDelayElapsed) {
                                    _this._endDragSequence(event);
                                    return;
                                }
                                // Prevent other drag sequences from starting while something in the container is still
                                // being dragged. This can happen while we're waiting for the drop animation to finish
                                // and can cause errors, because some elements might still be moving around.
                                if (!_this._dropContainer || !_this._dropContainer.isDragging()) {
                                    _this._hasStartedDragging = true;
                                    _this._ngZone.run(( /**
                                     * @return {?}
                                     */function () { return _this._startDragSequence(event); }));
                                }
                            }
                            return;
                        }
                        // We only need the preview dimensions if we have a boundary element.
                        if (_this._boundaryElement) {
                            // Cache the preview element rect if we haven't cached it already or if
                            // we cached it too early before the element dimensions were computed.
                            if (!_this._previewRect || (!_this._previewRect.width && !_this._previewRect.height)) {
                                _this._previewRect = (_this._preview || _this._rootElement).getBoundingClientRect();
                            }
                        }
                        /** @type {?} */
                        var constrainedPointerPosition = _this._getConstrainedPointerPosition(event);
                        _this._hasMoved = true;
                        event.preventDefault();
                        _this._updatePointerDirectionDelta(constrainedPointerPosition);
                        if (_this._dropContainer) {
                            _this._updateActiveDropContainer(constrainedPointerPosition);
                        }
                        else {
                            /** @type {?} */
                            var activeTransform = _this._activeTransform;
                            activeTransform.x =
                                constrainedPointerPosition.x - _this._pickupPositionOnPage.x + _this._passiveTransform.x;
                            activeTransform.y =
                                constrainedPointerPosition.y - _this._pickupPositionOnPage.y + _this._passiveTransform.y;
                            _this._applyRootElementTransform(activeTransform.x, activeTransform.y);
                            // Apply transform as attribute if dragging and svg element to work for IE
                            if (typeof SVGElement !== 'undefined' && _this._rootElement instanceof SVGElement) {
                                /** @type {?} */
                                var appliedTransform = "translate(" + activeTransform.x + " " + activeTransform.y + ")";
                                _this._rootElement.setAttribute('transform', appliedTransform);
                            }
                        }
                        // Since this event gets fired for every pixel while dragging, we only
                        // want to fire it if the consumer opted into it. Also we have to
                        // re-enter the zone because we run all of the events on the outside.
                        if (_this._moveEvents.observers.length) {
                            _this._ngZone.run(( /**
                             * @return {?}
                             */function () {
                                _this._moveEvents.next({
                                    source: _this,
                                    pointerPosition: constrainedPointerPosition,
                                    event: event,
                                    distance: _this._getDragDistance(constrainedPointerPosition),
                                    delta: _this._pointerDirectionDelta
                                });
                            }));
                        }
                    });
                    /**
                     * Handler that is invoked when the user lifts their pointer up, after initiating a drag.
                     */
                    this._pointerUp = ( /**
                     * @param {?} event
                     * @return {?}
                     */function (event) {
                        _this._endDragSequence(event);
                    });
                    this.withRootElement(element);
                    _dragDropRegistry.registerDragItem(this);
                }
                Object.defineProperty(DragRef.prototype, "disabled", {
                    /**
                     * Whether starting to drag this element is disabled.
                     * @return {?}
                     */
                    get: function () {
                        return this._disabled || !!(this._dropContainer && this._dropContainer.disabled);
                    },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        /** @type {?} */
                        var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
                        if (newValue !== this._disabled) {
                            this._disabled = newValue;
                            this._toggleNativeDragInteractions();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Returns the element that is being used as a placeholder
                 * while the current element is being dragged.
                 * @return {?}
                 */
                DragRef.prototype.getPlaceholderElement = function () {
                    return this._placeholder;
                };
                /**
                 * Returns the root draggable element.
                 * @return {?}
                 */
                DragRef.prototype.getRootElement = function () {
                    return this._rootElement;
                };
                /**
                 * Registers the handles that can be used to drag the element.
                 * @template THIS
                 * @this {THIS}
                 * @param {?} handles
                 * @return {THIS}
                 */
                DragRef.prototype.withHandles = function (handles) {
                    ( /** @type {?} */(this))._handles = handles.map(( /**
                     * @param {?} handle
                     * @return {?}
                     */function (/**
                     * @param {?} handle
                     * @return {?}
                     */ handle) { return Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(handle); }));
                    ( /** @type {?} */(this))._handles.forEach(( /**
                     * @param {?} handle
                     * @return {?}
                     */function (/**
                     * @param {?} handle
                     * @return {?}
                     */ handle) { return toggleNativeDragInteractions(handle, false); }));
                    ( /** @type {?} */(this))._toggleNativeDragInteractions();
                    return ( /** @type {?} */(this));
                };
                /**
                 * Registers the template that should be used for the drag preview.
                 * @template THIS
                 * @this {THIS}
                 * @param {?} template Template that from which to stamp out the preview.
                 * @return {THIS}
                 */
                DragRef.prototype.withPreviewTemplate = function (template) {
                    ( /** @type {?} */(this))._previewTemplate = template;
                    return ( /** @type {?} */(this));
                };
                /**
                 * Registers the template that should be used for the drag placeholder.
                 * @template THIS
                 * @this {THIS}
                 * @param {?} template Template that from which to stamp out the placeholder.
                 * @return {THIS}
                 */
                DragRef.prototype.withPlaceholderTemplate = function (template) {
                    ( /** @type {?} */(this))._placeholderTemplate = template;
                    return ( /** @type {?} */(this));
                };
                /**
                 * Sets an alternate drag root element. The root element is the element that will be moved as
                 * the user is dragging. Passing an alternate root element is useful when trying to enable
                 * dragging on an element that you might not have access to.
                 * @template THIS
                 * @this {THIS}
                 * @param {?} rootElement
                 * @return {THIS}
                 */
                DragRef.prototype.withRootElement = function (rootElement) {
                    /** @type {?} */
                    var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(rootElement);
                    if (element !== ( /** @type {?} */(this))._rootElement) {
                        if (( /** @type {?} */(this))._rootElement) {
                            ( /** @type {?} */(this))._removeRootElementListeners(( /** @type {?} */(this))._rootElement);
                        }
                        element.addEventListener('mousedown', ( /** @type {?} */(this))._pointerDown, activeEventListenerOptions);
                        element.addEventListener('touchstart', ( /** @type {?} */(this))._pointerDown, passiveEventListenerOptions);
                        ( /** @type {?} */(this))._initialTransform = undefined;
                        ( /** @type {?} */(this))._rootElement = element;
                    }
                    return ( /** @type {?} */(this));
                };
                /**
                 * Element to which the draggable's position will be constrained.
                 * @template THIS
                 * @this {THIS}
                 * @param {?} boundaryElement
                 * @return {THIS}
                 */
                DragRef.prototype.withBoundaryElement = function (boundaryElement) {
                    var _this = this;
                    ( /** @type {?} */(this))._boundaryElement = boundaryElement ? Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(boundaryElement) : null;
                    ( /** @type {?} */(this))._resizeSubscription.unsubscribe();
                    if (boundaryElement) {
                        ( /** @type {?} */(this))._resizeSubscription = ( /** @type {?} */(this))._viewportRuler
                            .change(10)
                            .subscribe(( /**
                     * @return {?}
                     */function () { return ( /** @type {?} */(_this))._containInsideBoundaryOnResize(); }));
                    }
                    return ( /** @type {?} */(this));
                };
                /**
                 * Removes the dragging functionality from the DOM element.
                 * @return {?}
                 */
                DragRef.prototype.dispose = function () {
                    this._removeRootElementListeners(this._rootElement);
                    // Do this check before removing from the registry since it'll
                    // stop being considered as dragged once it is removed.
                    if (this.isDragging()) {
                        // Since we move out the element to the end of the body while it's being
                        // dragged, we have to make sure that it's removed if it gets destroyed.
                        removeElement(this._rootElement);
                    }
                    this._destroyPreview();
                    this._destroyPlaceholder();
                    this._dragDropRegistry.removeDragItem(this);
                    this._removeSubscriptions();
                    this.beforeStarted.complete();
                    this.started.complete();
                    this.released.complete();
                    this.ended.complete();
                    this.entered.complete();
                    this.exited.complete();
                    this.dropped.complete();
                    this._moveEvents.complete();
                    this._handles = [];
                    this._disabledHandles.clear();
                    this._dropContainer = undefined;
                    this._boundaryElement = this._rootElement = this._placeholderTemplate =
                        this._previewTemplate = this._nextSibling = ( /** @type {?} */(null));
                };
                /**
                 * Checks whether the element is currently being dragged.
                 * @return {?}
                 */
                DragRef.prototype.isDragging = function () {
                    return this._hasStartedDragging && this._dragDropRegistry.isDragging(this);
                };
                /**
                 * Resets a standalone drag item to its initial position.
                 * @return {?}
                 */
                DragRef.prototype.reset = function () {
                    this._rootElement.style.transform = this._initialTransform || '';
                    this._activeTransform = { x: 0, y: 0 };
                    this._passiveTransform = { x: 0, y: 0 };
                };
                /**
                 * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
                 * @param {?} handle Handle element that should be disabled.
                 * @return {?}
                 */
                DragRef.prototype.disableHandle = function (handle) {
                    if (this._handles.indexOf(handle) > -1) {
                        this._disabledHandles.add(handle);
                    }
                };
                /**
                 * Enables a handle, if it has been disabled.
                 * @param {?} handle Handle element to be enabled.
                 * @return {?}
                 */
                DragRef.prototype.enableHandle = function (handle) {
                    this._disabledHandles.delete(handle);
                };
                /**
                 * Sets the layout direction of the draggable item.
                 * @template THIS
                 * @this {THIS}
                 * @param {?} direction
                 * @return {THIS}
                 */
                DragRef.prototype.withDirection = function (direction) {
                    ( /** @type {?} */(this))._direction = direction;
                    return ( /** @type {?} */(this));
                };
                /**
                 * Sets the container that the item is part of.
                 * @param {?} container
                 * @return {?}
                 */
                DragRef.prototype._withDropContainer = function (container) {
                    this._dropContainer = container;
                };
                /**
                 * Gets the current position in pixels the draggable outside of a drop container.
                 * @return {?}
                 */
                DragRef.prototype.getFreeDragPosition = function () {
                    /** @type {?} */
                    var position = this.isDragging() ? this._activeTransform : this._passiveTransform;
                    return { x: position.x, y: position.y };
                };
                /**
                 * Sets the current position in pixels the draggable outside of a drop container.
                 * @template THIS
                 * @this {THIS}
                 * @param {?} value New position to be set.
                 * @return {THIS}
                 */
                DragRef.prototype.setFreeDragPosition = function (value) {
                    ( /** @type {?} */(this))._activeTransform = { x: 0, y: 0 };
                    ( /** @type {?} */(this))._passiveTransform.x = value.x;
                    ( /** @type {?} */(this))._passiveTransform.y = value.y;
                    if (!( /** @type {?} */(this))._dropContainer) {
                        ( /** @type {?} */(this))._applyRootElementTransform(value.x, value.y);
                    }
                    return ( /** @type {?} */(this));
                };
                /**
                 * Updates the item's sort order based on the last-known pointer position.
                 * @return {?}
                 */
                DragRef.prototype._sortFromLastPointerPosition = function () {
                    /** @type {?} */
                    var position = this._pointerPositionAtLastDirectionChange;
                    if (position && this._dropContainer) {
                        this._updateActiveDropContainer(position);
                    }
                };
                /**
                 * Unsubscribes from the global subscriptions.
                 * @private
                 * @return {?}
                 */
                DragRef.prototype._removeSubscriptions = function () {
                    this._pointerMoveSubscription.unsubscribe();
                    this._pointerUpSubscription.unsubscribe();
                    this._scrollSubscription.unsubscribe();
                };
                /**
                 * Destroys the preview element and its ViewRef.
                 * @private
                 * @return {?}
                 */
                DragRef.prototype._destroyPreview = function () {
                    if (this._preview) {
                        removeElement(this._preview);
                    }
                    if (this._previewRef) {
                        this._previewRef.destroy();
                    }
                    this._preview = this._previewRef = ( /** @type {?} */(null));
                };
                /**
                 * Destroys the placeholder element and its ViewRef.
                 * @private
                 * @return {?}
                 */
                DragRef.prototype._destroyPlaceholder = function () {
                    if (this._placeholder) {
                        removeElement(this._placeholder);
                    }
                    if (this._placeholderRef) {
                        this._placeholderRef.destroy();
                    }
                    this._placeholder = this._placeholderRef = ( /** @type {?} */(null));
                };
                /**
                 * Clears subscriptions and stops the dragging sequence.
                 * @private
                 * @param {?} event Browser event object that ended the sequence.
                 * @return {?}
                 */
                DragRef.prototype._endDragSequence = function (event) {
                    var _this = this;
                    // Note that here we use `isDragging` from the service, rather than from `this`.
                    // The difference is that the one from the service reflects whether a dragging sequence
                    // has been initiated, whereas the one on `this` includes whether the user has passed
                    // the minimum dragging threshold.
                    if (!this._dragDropRegistry.isDragging(this)) {
                        return;
                    }
                    this._removeSubscriptions();
                    this._dragDropRegistry.stopDragging(this);
                    this._toggleNativeDragInteractions();
                    if (this._handles) {
                        this._rootElement.style.webkitTapHighlightColor = this._rootElementTapHighlight;
                    }
                    if (!this._hasStartedDragging) {
                        return;
                    }
                    this.released.next({ source: this });
                    if (this._dropContainer) {
                        // Stop scrolling immediately, instead of waiting for the animation to finish.
                        this._dropContainer._stopScrolling();
                        this._animatePreviewToPlaceholder().then(( /**
                         * @return {?}
                         */function () {
                            _this._cleanupDragArtifacts(event);
                            _this._cleanupCachedDimensions();
                            _this._dragDropRegistry.stopDragging(_this);
                        }));
                    }
                    else {
                        // Convert the active transform into a passive one. This means that next time
                        // the user starts dragging the item, its position will be calculated relatively
                        // to the new passive transform.
                        this._passiveTransform.x = this._activeTransform.x;
                        this._passiveTransform.y = this._activeTransform.y;
                        this._ngZone.run(( /**
                         * @return {?}
                         */function () {
                            _this.ended.next({
                                source: _this,
                                distance: _this._getDragDistance(_this._getPointerPositionOnPage(event))
                            });
                        }));
                        this._cleanupCachedDimensions();
                        this._dragDropRegistry.stopDragging(this);
                    }
                };
                /**
                 * Starts the dragging sequence.
                 * @private
                 * @param {?} event
                 * @return {?}
                 */
                DragRef.prototype._startDragSequence = function (event) {
                    // Emit the event on the item before the one on the container.
                    this.started.next({ source: this });
                    if (isTouchEvent(event)) {
                        this._lastTouchEventTime = Date.now();
                    }
                    this._toggleNativeDragInteractions();
                    if (this._dropContainer) {
                        /** @type {?} */
                        var element = this._rootElement;
                        // Grab the `nextSibling` before the preview and placeholder
                        // have been created so we don't get the preview by accident.
                        this._nextSibling = element.nextSibling;
                        /** @type {?} */
                        var preview = this._preview = this._createPreviewElement();
                        /** @type {?} */
                        var placeholder = this._placeholder = this._createPlaceholderElement();
                        // We move the element out at the end of the body and we make it hidden, because keeping it in
                        // place will throw off the consumer's `:last-child` selectors. We can't remove the element
                        // from the DOM completely, because iOS will stop firing all subsequent events in the chain.
                        element.style.display = 'none';
                        this._document.body.appendChild(( /** @type {?} */(element.parentNode)).replaceChild(placeholder, element));
                        getPreviewInsertionPoint(this._document).appendChild(preview);
                        this._dropContainer.start();
                    }
                };
                /**
                 * Sets up the different variables and subscriptions
                 * that will be necessary for the dragging sequence.
                 * @private
                 * @param {?} referenceElement Element that started the drag sequence.
                 * @param {?} event Browser event object that started the sequence.
                 * @return {?}
                 */
                DragRef.prototype._initializeDragSequence = function (referenceElement, event) {
                    var _this = this;
                    // Always stop propagation for the event that initializes
                    // the dragging sequence, in order to prevent it from potentially
                    // starting another sequence for a draggable parent somewhere up the DOM tree.
                    event.stopPropagation();
                    /** @type {?} */
                    var isDragging = this.isDragging();
                    /** @type {?} */
                    var isTouchSequence = isTouchEvent(event);
                    /** @type {?} */
                    var isAuxiliaryMouseButton = !isTouchSequence && (( /** @type {?} */(event))).button !== 0;
                    /** @type {?} */
                    var rootElement = this._rootElement;
                    /** @type {?} */
                    var isSyntheticEvent = !isTouchSequence && this._lastTouchEventTime &&
                        this._lastTouchEventTime + MOUSE_EVENT_IGNORE_TIME > Date.now();
                    // If the event started from an element with the native HTML drag&drop, it'll interfere
                    // with our own dragging (e.g. `img` tags do it by default). Prevent the default action
                    // to stop it from happening. Note that preventing on `dragstart` also seems to work, but
                    // it's flaky and it fails if the user drags it away quickly. Also note that we only want
                    // to do this for `mousedown` since doing the same for `touchstart` will stop any `click`
                    // events from firing on touch devices.
                    if (event.target && (( /** @type {?} */(event.target))).draggable && event.type === 'mousedown') {
                        event.preventDefault();
                    }
                    // Abort if the user is already dragging or is using a mouse button other than the primary one.
                    if (isDragging || isAuxiliaryMouseButton || isSyntheticEvent) {
                        return;
                    }
                    // If we've got handles, we need to disable the tap highlight on the entire root element,
                    // otherwise iOS will still add it, even though all the drag interactions on the handle
                    // are disabled.
                    if (this._handles.length) {
                        this._rootElementTapHighlight = rootElement.style.webkitTapHighlightColor;
                        rootElement.style.webkitTapHighlightColor = 'transparent';
                    }
                    this._hasStartedDragging = this._hasMoved = false;
                    this._initialContainer = ( /** @type {?} */(this._dropContainer));
                    // Avoid multiple subscriptions and memory leaks when multi touch
                    // (isDragging check above isn't enough because of possible temporal and/or dimensional delays)
                    this._removeSubscriptions();
                    this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(this._pointerMove);
                    this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(this._pointerUp);
                    this._scrollSubscription = this._dragDropRegistry.scroll.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(null)).subscribe(( /**
                     * @return {?}
                     */function () {
                        _this._scrollPosition = _this._viewportRuler.getViewportScrollPosition();
                    }));
                    if (this._boundaryElement) {
                        this._boundaryRect = this._boundaryElement.getBoundingClientRect();
                    }
                    // If we have a custom preview template, the element won't be visible anyway so we avoid the
                    // extra `getBoundingClientRect` calls and just move the preview next to the cursor.
                    this._pickupPositionInElement = this._previewTemplate && this._previewTemplate.template ?
                        { x: 0, y: 0 } :
                        this._getPointerPositionInElement(referenceElement, event);
                    /** @type {?} */
                    var pointerPosition = this._pickupPositionOnPage = this._getPointerPositionOnPage(event);
                    this._pointerDirectionDelta = { x: 0, y: 0 };
                    this._pointerPositionAtLastDirectionChange = { x: pointerPosition.x, y: pointerPosition.y };
                    this._dragStartTime = Date.now();
                    this._dragDropRegistry.startDragging(this, event);
                };
                /**
                 * Cleans up the DOM artifacts that were added to facilitate the element being dragged.
                 * @private
                 * @param {?} event
                 * @return {?}
                 */
                DragRef.prototype._cleanupDragArtifacts = function (event) {
                    var _this = this;
                    // Restore the element's visibility and insert it at its old position in the DOM.
                    // It's important that we maintain the position, because moving the element around in the DOM
                    // can throw off `NgFor` which does smart diffing and re-creates elements only when necessary,
                    // while moving the existing elements in all other cases.
                    this._rootElement.style.display = '';
                    if (this._nextSibling) {
                        ( /** @type {?} */(this._nextSibling.parentNode)).insertBefore(this._rootElement, this._nextSibling);
                    }
                    else {
                        Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this._initialContainer.element).appendChild(this._rootElement);
                    }
                    this._destroyPreview();
                    this._destroyPlaceholder();
                    this._boundaryRect = this._previewRect = undefined;
                    // Re-enter the NgZone since we bound `document` events on the outside.
                    this._ngZone.run(( /**
                     * @return {?}
                     */function () {
                        /** @type {?} */
                        var container = ( /** @type {?} */(_this._dropContainer));
                        /** @type {?} */
                        var currentIndex = container.getItemIndex(_this);
                        /** @type {?} */
                        var pointerPosition = _this._getPointerPositionOnPage(event);
                        /** @type {?} */
                        var distance = _this._getDragDistance(_this._getPointerPositionOnPage(event));
                        /** @type {?} */
                        var isPointerOverContainer = container._isOverContainer(pointerPosition.x, pointerPosition.y);
                        _this.ended.next({ source: _this, distance: distance });
                        _this.dropped.next({
                            item: _this,
                            currentIndex: currentIndex,
                            previousIndex: _this._initialContainer.getItemIndex(_this),
                            container: container,
                            previousContainer: _this._initialContainer,
                            isPointerOverContainer: isPointerOverContainer,
                            distance: distance
                        });
                        container.drop(_this, currentIndex, _this._initialContainer, isPointerOverContainer, distance);
                        _this._dropContainer = _this._initialContainer;
                    }));
                };
                /**
                 * Updates the item's position in its drop container, or moves it
                 * into a new one, depending on its current drag position.
                 * @private
                 * @param {?} __0
                 * @return {?}
                 */
                DragRef.prototype._updateActiveDropContainer = function (_a) {
                    var _this = this;
                    var x = _a.x, y = _a.y;
                    // Drop container that draggable has been moved into.
                    /** @type {?} */
                    var newContainer = this._initialContainer._getSiblingContainerFromPosition(this, x, y);
                    // If we couldn't find a new container to move the item into, and the item has left its
                    // initial container, check whether the it's over the initial container. This handles the
                    // case where two containers are connected one way and the user tries to undo dragging an
                    // item into a new container.
                    if (!newContainer && this._dropContainer !== this._initialContainer &&
                        this._initialContainer._isOverContainer(x, y)) {
                        newContainer = this._initialContainer;
                    }
                    if (newContainer && newContainer !== this._dropContainer) {
                        this._ngZone.run(( /**
                         * @return {?}
                         */function () {
                            // Notify the old container that the item has left.
                            _this.exited.next({ item: _this, container: ( /** @type {?} */(_this._dropContainer)) });
                            ( /** @type {?} */(_this._dropContainer)).exit(_this);
                            // Notify the new container that the item has entered.
                            _this._dropContainer = ( /** @type {?} */(newContainer));
                            _this._dropContainer.enter(_this, x, y);
                            _this.entered.next({
                                item: _this,
                                container: ( /** @type {?} */(newContainer)),
                                currentIndex: ( /** @type {?} */(newContainer)).getItemIndex(_this)
                            });
                        }));
                    }
                    ( /** @type {?} */(this._dropContainer))._startScrollingIfNecessary(x, y);
                    ( /** @type {?} */(this._dropContainer))._sortItem(this, x, y, this._pointerDirectionDelta);
                    this._preview.style.transform =
                        getTransform(x - this._pickupPositionInElement.x, y - this._pickupPositionInElement.y);
                };
                /**
                 * Creates the element that will be rendered next to the user's pointer
                 * and will be used as a preview of the element that is being dragged.
                 * @private
                 * @return {?}
                 */
                DragRef.prototype._createPreviewElement = function () {
                    /** @type {?} */
                    var previewConfig = this._previewTemplate;
                    /** @type {?} */
                    var previewTemplate = previewConfig ? previewConfig.template : null;
                    /** @type {?} */
                    var preview;
                    if (previewTemplate) {
                        /** @type {?} */
                        var viewRef = ( /** @type {?} */(previewConfig)).viewContainer.createEmbeddedView(previewTemplate, ( /** @type {?} */(previewConfig)).context);
                        preview = getRootNode(viewRef, this._document);
                        this._previewRef = viewRef;
                        preview.style.transform =
                            getTransform(this._pickupPositionOnPage.x, this._pickupPositionOnPage.y);
                    }
                    else {
                        /** @type {?} */
                        var element = this._rootElement;
                        /** @type {?} */
                        var elementRect = element.getBoundingClientRect();
                        preview = deepCloneNode(element);
                        preview.style.width = elementRect.width + "px";
                        preview.style.height = elementRect.height + "px";
                        preview.style.transform = getTransform(elementRect.left, elementRect.top);
                    }
                    extendStyles(preview.style, {
                        // It's important that we disable the pointer events on the preview, because
                        // it can throw off the `document.elementFromPoint` calls in the `CdkDropList`.
                        pointerEvents: 'none',
                        // We have to reset the margin, because can throw off positioning relative to the viewport.
                        margin: '0',
                        position: 'fixed',
                        top: '0',
                        left: '0',
                        zIndex: '1000'
                    });
                    toggleNativeDragInteractions(preview, false);
                    preview.classList.add('cdk-drag-preview');
                    preview.setAttribute('dir', this._direction);
                    return preview;
                };
                /**
                 * Animates the preview element from its current position to the location of the drop placeholder.
                 * @private
                 * @return {?} Promise that resolves when the animation completes.
                 */
                DragRef.prototype._animatePreviewToPlaceholder = function () {
                    var _this = this;
                    // If the user hasn't moved yet, the transitionend event won't fire.
                    if (!this._hasMoved) {
                        return Promise.resolve();
                    }
                    /** @type {?} */
                    var placeholderRect = this._placeholder.getBoundingClientRect();
                    // Apply the class that adds a transition to the preview.
                    this._preview.classList.add('cdk-drag-animating');
                    // Move the preview to the placeholder position.
                    this._preview.style.transform = getTransform(placeholderRect.left, placeholderRect.top);
                    // If the element doesn't have a `transition`, the `transitionend` event won't fire. Since
                    // we need to trigger a style recalculation in order for the `cdk-drag-animating` class to
                    // apply its style, we take advantage of the available info to figure out whether we need to
                    // bind the event in the first place.
                    /** @type {?} */
                    var duration = getTransformTransitionDurationInMs(this._preview);
                    if (duration === 0) {
                        return Promise.resolve();
                    }
                    return this._ngZone.runOutsideAngular(( /**
                     * @return {?}
                     */function () {
                        return new Promise(( /**
                         * @param {?} resolve
                         * @return {?}
                         */function (/**
                         * @param {?} resolve
                         * @return {?}
                         */ resolve) {
                            /** @type {?} */
                            var handler = ( /** @type {?} */((( /**
                             * @param {?} event
                             * @return {?}
                             */function (event) {
                                if (!event || (event.target === _this._preview && event.propertyName === 'transform')) {
                                    _this._preview.removeEventListener('transitionend', handler);
                                    resolve();
                                    clearTimeout(timeout);
                                }
                            }))));
                            // If a transition is short enough, the browser might not fire the `transitionend` event.
                            // Since we know how long it's supposed to take, add a timeout with a 50% buffer that'll
                            // fire if the transition hasn't completed when it was supposed to.
                            /** @type {?} */
                            var timeout = setTimeout(( /** @type {?} */(handler)), duration * 1.5);
                            _this._preview.addEventListener('transitionend', handler);
                        }));
                    }));
                };
                /**
                 * Creates an element that will be shown instead of the current element while dragging.
                 * @private
                 * @return {?}
                 */
                DragRef.prototype._createPlaceholderElement = function () {
                    /** @type {?} */
                    var placeholderConfig = this._placeholderTemplate;
                    /** @type {?} */
                    var placeholderTemplate = placeholderConfig ? placeholderConfig.template : null;
                    /** @type {?} */
                    var placeholder;
                    if (placeholderTemplate) {
                        this._placeholderRef = ( /** @type {?} */(placeholderConfig)).viewContainer.createEmbeddedView(placeholderTemplate, ( /** @type {?} */(placeholderConfig)).context);
                        placeholder = getRootNode(this._placeholderRef, this._document);
                    }
                    else {
                        placeholder = deepCloneNode(this._rootElement);
                    }
                    placeholder.classList.add('cdk-drag-placeholder');
                    return placeholder;
                };
                /**
                 * Figures out the coordinates at which an element was picked up.
                 * @private
                 * @param {?} referenceElement Element that initiated the dragging.
                 * @param {?} event Event that initiated the dragging.
                 * @return {?}
                 */
                DragRef.prototype._getPointerPositionInElement = function (referenceElement, event) {
                    /** @type {?} */
                    var elementRect = this._rootElement.getBoundingClientRect();
                    /** @type {?} */
                    var handleElement = referenceElement === this._rootElement ? null : referenceElement;
                    /** @type {?} */
                    var referenceRect = handleElement ? handleElement.getBoundingClientRect() : elementRect;
                    /** @type {?} */
                    var point = isTouchEvent(event) ? event.targetTouches[0] : event;
                    /** @type {?} */
                    var x = point.pageX - referenceRect.left - this._scrollPosition.left;
                    /** @type {?} */
                    var y = point.pageY - referenceRect.top - this._scrollPosition.top;
                    return {
                        x: referenceRect.left - elementRect.left + x,
                        y: referenceRect.top - elementRect.top + y
                    };
                };
                /**
                 * Determines the point of the page that was touched by the user.
                 * @private
                 * @param {?} event
                 * @return {?}
                 */
                DragRef.prototype._getPointerPositionOnPage = function (event) {
                    // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
                    /** @type {?} */
                    var point = isTouchEvent(event) ? (event.touches[0] || event.changedTouches[0]) : event;
                    return {
                        x: point.pageX - this._scrollPosition.left,
                        y: point.pageY - this._scrollPosition.top
                    };
                };
                /**
                 * Gets the pointer position on the page, accounting for any position constraints.
                 * @private
                 * @param {?} event
                 * @return {?}
                 */
                DragRef.prototype._getConstrainedPointerPosition = function (event) {
                    /** @type {?} */
                    var point = this._getPointerPositionOnPage(event);
                    /** @type {?} */
                    var constrainedPoint = this.constrainPosition ? this.constrainPosition(point, this) : point;
                    /** @type {?} */
                    var dropContainerLock = this._dropContainer ? this._dropContainer.lockAxis : null;
                    if (this.lockAxis === 'x' || dropContainerLock === 'x') {
                        constrainedPoint.y = this._pickupPositionOnPage.y;
                    }
                    else if (this.lockAxis === 'y' || dropContainerLock === 'y') {
                        constrainedPoint.x = this._pickupPositionOnPage.x;
                    }
                    if (this._boundaryRect) {
                        var _a = this._pickupPositionInElement, pickupX = _a.x, pickupY = _a.y;
                        /** @type {?} */
                        var boundaryRect = this._boundaryRect;
                        /** @type {?} */
                        var previewRect = ( /** @type {?} */(this._previewRect));
                        /** @type {?} */
                        var minY = boundaryRect.top + pickupY;
                        /** @type {?} */
                        var maxY = boundaryRect.bottom - (previewRect.height - pickupY);
                        /** @type {?} */
                        var minX = boundaryRect.left + pickupX;
                        /** @type {?} */
                        var maxX = boundaryRect.right - (previewRect.width - pickupX);
                        constrainedPoint.x = clamp(constrainedPoint.x, minX, maxX);
                        constrainedPoint.y = clamp(constrainedPoint.y, minY, maxY);
                    }
                    return constrainedPoint;
                };
                /**
                 * Updates the current drag delta, based on the user's current pointer position on the page.
                 * @private
                 * @param {?} pointerPositionOnPage
                 * @return {?}
                 */
                DragRef.prototype._updatePointerDirectionDelta = function (pointerPositionOnPage) {
                    var x = pointerPositionOnPage.x, y = pointerPositionOnPage.y;
                    /** @type {?} */
                    var delta = this._pointerDirectionDelta;
                    /** @type {?} */
                    var positionSinceLastChange = this._pointerPositionAtLastDirectionChange;
                    // Amount of pixels the user has dragged since the last time the direction changed.
                    /** @type {?} */
                    var changeX = Math.abs(x - positionSinceLastChange.x);
                    /** @type {?} */
                    var changeY = Math.abs(y - positionSinceLastChange.y);
                    // Because we handle pointer events on a per-pixel basis, we don't want the delta
                    // to change for every pixel, otherwise anything that depends on it can look erratic.
                    // To make the delta more consistent, we track how much the user has moved since the last
                    // delta change and we only update it after it has reached a certain threshold.
                    if (changeX > this._config.pointerDirectionChangeThreshold) {
                        delta.x = x > positionSinceLastChange.x ? 1 : -1;
                        positionSinceLastChange.x = x;
                    }
                    if (changeY > this._config.pointerDirectionChangeThreshold) {
                        delta.y = y > positionSinceLastChange.y ? 1 : -1;
                        positionSinceLastChange.y = y;
                    }
                    return delta;
                };
                /**
                 * Toggles the native drag interactions, based on how many handles are registered.
                 * @private
                 * @return {?}
                 */
                DragRef.prototype._toggleNativeDragInteractions = function () {
                    if (!this._rootElement || !this._handles) {
                        return;
                    }
                    /** @type {?} */
                    var shouldEnable = this._handles.length > 0 || !this.isDragging();
                    if (shouldEnable !== this._nativeInteractionsEnabled) {
                        this._nativeInteractionsEnabled = shouldEnable;
                        toggleNativeDragInteractions(this._rootElement, shouldEnable);
                    }
                };
                /**
                 * Removes the manually-added event listeners from the root element.
                 * @private
                 * @param {?} element
                 * @return {?}
                 */
                DragRef.prototype._removeRootElementListeners = function (element) {
                    element.removeEventListener('mousedown', this._pointerDown, activeEventListenerOptions);
                    element.removeEventListener('touchstart', this._pointerDown, passiveEventListenerOptions);
                };
                /**
                 * Applies a `transform` to the root element, taking into account any existing transforms on it.
                 * @private
                 * @param {?} x New transform value along the X axis.
                 * @param {?} y New transform value along the Y axis.
                 * @return {?}
                 */
                DragRef.prototype._applyRootElementTransform = function (x, y) {
                    /** @type {?} */
                    var transform = getTransform(x, y);
                    // Cache the previous transform amount only after the first drag sequence, because
                    // we don't want our own transforms to stack on top of each other.
                    if (this._initialTransform == null) {
                        this._initialTransform = this._rootElement.style.transform || '';
                    }
                    // Preserve the previous `transform` value, if there was one. Note that we apply our own
                    // transform before the user's, because things like rotation can affect which direction
                    // the element will be translated towards.
                    this._rootElement.style.transform = this._initialTransform ?
                        transform + ' ' + this._initialTransform : transform;
                };
                /**
                 * Gets the distance that the user has dragged during the current drag sequence.
                 * @private
                 * @param {?} currentPosition Current position of the user's pointer.
                 * @return {?}
                 */
                DragRef.prototype._getDragDistance = function (currentPosition) {
                    /** @type {?} */
                    var pickupPosition = this._pickupPositionOnPage;
                    if (pickupPosition) {
                        return { x: currentPosition.x - pickupPosition.x, y: currentPosition.y - pickupPosition.y };
                    }
                    return { x: 0, y: 0 };
                };
                /**
                 * Cleans up any cached element dimensions that we don't need after dragging has stopped.
                 * @private
                 * @return {?}
                 */
                DragRef.prototype._cleanupCachedDimensions = function () {
                    this._boundaryRect = this._previewRect = undefined;
                };
                /**
                 * Checks whether the element is still inside its boundary after the viewport has been resized.
                 * If not, the position is adjusted so that the element fits again.
                 * @private
                 * @return {?}
                 */
                DragRef.prototype._containInsideBoundaryOnResize = function () {
                    var _a = this._passiveTransform, x = _a.x, y = _a.y;
                    if ((x === 0 && y === 0) || this.isDragging() || !this._boundaryElement) {
                        return;
                    }
                    /** @type {?} */
                    var boundaryRect = this._boundaryElement.getBoundingClientRect();
                    /** @type {?} */
                    var elementRect = this._rootElement.getBoundingClientRect();
                    /** @type {?} */
                    var leftOverflow = boundaryRect.left - elementRect.left;
                    /** @type {?} */
                    var rightOverflow = elementRect.right - boundaryRect.right;
                    /** @type {?} */
                    var topOverflow = boundaryRect.top - elementRect.top;
                    /** @type {?} */
                    var bottomOverflow = elementRect.bottom - boundaryRect.bottom;
                    // If the element has become wider than the boundary, we can't
                    // do much to make it fit so we just anchor it to the left.
                    if (boundaryRect.width > elementRect.width) {
                        if (leftOverflow > 0) {
                            x += leftOverflow;
                        }
                        if (rightOverflow > 0) {
                            x -= rightOverflow;
                        }
                    }
                    else {
                        x = 0;
                    }
                    // If the element has become taller than the boundary, we can't
                    // do much to make it fit so we just anchor it to the top.
                    if (boundaryRect.height > elementRect.height) {
                        if (topOverflow > 0) {
                            y += topOverflow;
                        }
                        if (bottomOverflow > 0) {
                            y -= bottomOverflow;
                        }
                    }
                    else {
                        y = 0;
                    }
                    if (x !== this._passiveTransform.x || y !== this._passiveTransform.y) {
                        this.setFreeDragPosition({ y: y, x: x });
                    }
                };
                return DragRef;
            }());
            /**
             * Gets a 3d `transform` that can be applied to an element.
             * @param {?} x Desired position of the element along the X axis.
             * @param {?} y Desired position of the element along the Y axis.
             * @return {?}
             */
            function getTransform(x, y) {
                // Round the transforms since some browsers will
                // blur the elements for sub-pixel transforms.
                return "translate3d(" + Math.round(x) + "px, " + Math.round(y) + "px, 0)";
            }
            /**
             * Creates a deep clone of an element.
             * @param {?} node
             * @return {?}
             */
            function deepCloneNode(node) {
                /** @type {?} */
                var clone = ( /** @type {?} */(node.cloneNode(true)));
                /** @type {?} */
                var descendantsWithId = clone.querySelectorAll('[id]');
                /** @type {?} */
                var descendantCanvases = node.querySelectorAll('canvas');
                // Remove the `id` to avoid having multiple elements with the same id on the page.
                clone.removeAttribute('id');
                for (var i = 0; i < descendantsWithId.length; i++) {
                    descendantsWithId[i].removeAttribute('id');
                }
                // `cloneNode` won't transfer the content of `canvas` elements so we have to do it ourselves.
                // We match up the cloned canvas to their sources using their index in the DOM.
                if (descendantCanvases.length) {
                    /** @type {?} */
                    var cloneCanvases = clone.querySelectorAll('canvas');
                    for (var i = 0; i < descendantCanvases.length; i++) {
                        /** @type {?} */
                        var correspondingCloneContext = cloneCanvases[i].getContext('2d');
                        if (correspondingCloneContext) {
                            correspondingCloneContext.drawImage(descendantCanvases[i], 0, 0);
                        }
                    }
                }
                return clone;
            }
            /**
             * Clamps a value between a minimum and a maximum.
             * @param {?} value
             * @param {?} min
             * @param {?} max
             * @return {?}
             */
            function clamp(value, min, max) {
                return Math.max(min, Math.min(max, value));
            }
            /**
             * Helper to remove an element from the DOM and to do all the necessary null checks.
             * @param {?} element Element to be removed.
             * @return {?}
             */
            function removeElement(element) {
                if (element && element.parentNode) {
                    element.parentNode.removeChild(element);
                }
            }
            /**
             * Determines whether an event is a touch event.
             * @param {?} event
             * @return {?}
             */
            function isTouchEvent(event) {
                // This function is called for every pixel that the user has dragged so we need it to be
                // as fast as possible. Since we only bind mouse events and touch events, we can assume
                // that if the event's name starts with `t`, it's a touch event.
                return event.type[0] === 't';
            }
            /**
             * Gets the element into which the drag preview should be inserted.
             * @param {?} documentRef
             * @return {?}
             */
            function getPreviewInsertionPoint(documentRef) {
                // We can't use the body if the user is in fullscreen mode,
                // because the preview will render under the fullscreen element.
                // TODO(crisbeto): dedupe this with the `FullscreenOverlayContainer` eventually.
                return documentRef.fullscreenElement ||
                    documentRef.webkitFullscreenElement ||
                    documentRef.mozFullScreenElement ||
                    documentRef.msFullscreenElement ||
                    documentRef.body;
            }
            /**
             * Gets the root HTML element of an embedded view.
             * If the root is not an HTML element it gets wrapped in one.
             * @param {?} viewRef
             * @param {?} _document
             * @return {?}
             */
            function getRootNode(viewRef, _document) {
                /** @type {?} */
                var rootNode = viewRef.rootNodes[0];
                if (rootNode.nodeType !== _document.ELEMENT_NODE) {
                    /** @type {?} */
                    var wrapper = _document.createElement('div');
                    wrapper.appendChild(rootNode);
                    return wrapper;
                }
                return ( /** @type {?} */(rootNode));
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Moves an item one index in an array to another.
             * @template T
             * @param {?} array Array in which to move the item.
             * @param {?} fromIndex Starting index of the item.
             * @param {?} toIndex Index to which the item should be moved.
             * @return {?}
             */
            function moveItemInArray(array, fromIndex, toIndex) {
                /** @type {?} */
                var from = clamp$1(fromIndex, array.length - 1);
                /** @type {?} */
                var to = clamp$1(toIndex, array.length - 1);
                if (from === to) {
                    return;
                }
                /** @type {?} */
                var target = array[from];
                /** @type {?} */
                var delta = to < from ? -1 : 1;
                for (var i = from; i !== to; i += delta) {
                    array[i] = array[i + delta];
                }
                array[to] = target;
            }
            /**
             * Moves an item from one array to another.
             * @template T
             * @param {?} currentArray Array from which to transfer the item.
             * @param {?} targetArray Array into which to put the item.
             * @param {?} currentIndex Index of the item in its current array.
             * @param {?} targetIndex Index at which to insert the item.
             * @return {?}
             */
            function transferArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
                /** @type {?} */
                var from = clamp$1(currentIndex, currentArray.length - 1);
                /** @type {?} */
                var to = clamp$1(targetIndex, targetArray.length);
                if (currentArray.length) {
                    targetArray.splice(to, 0, currentArray.splice(from, 1)[0]);
                }
            }
            /**
             * Copies an item from one array to another, leaving it in its
             * original position in current array.
             * @template T
             * @param {?} currentArray Array from which to copy the item.
             * @param {?} targetArray Array into which is copy the item.
             * @param {?} currentIndex Index of the item in its current array.
             * @param {?} targetIndex Index at which to insert the item.
             *
             * @return {?}
             */
            function copyArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
                /** @type {?} */
                var to = clamp$1(targetIndex, targetArray.length);
                if (currentArray.length) {
                    targetArray.splice(to, 0, currentArray[currentIndex]);
                }
            }
            /**
             * Clamps a number between zero and a maximum.
             * @param {?} value
             * @param {?} max
             * @return {?}
             */
            function clamp$1(value, max) {
                return Math.max(0, Math.min(max, value));
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Counter used to generate unique ids for drop refs.
             * @type {?}
             */
            var _uniqueIdCounter = 0;
            /**
             * Proximity, as a ratio to width/height, at which a
             * dragged item will affect the drop container.
             * @type {?}
             */
            var DROP_PROXIMITY_THRESHOLD = 0.05;
            /**
             * Proximity, as a ratio to width/height at which to start auto-scrolling the drop list or the
             * viewport. The value comes from trying it out manually until it feels right.
             * @type {?}
             */
            var SCROLL_PROXIMITY_THRESHOLD = 0.05;
            /**
             * Number of pixels to scroll for each frame when auto-scrolling an element.
             * The value comes from trying it out manually until it feels right.
             * @type {?}
             */
            var AUTO_SCROLL_STEP = 2;
            /**
             * Reference to a drop list. Used to manipulate or dispose of the container.
             * \@docs-private
             * @template T
             */
            var DropListRef = /** @class */ (function () {
                /**
                 * @param {?} element
                 * @param {?} _dragDropRegistry
                 * @param {?} _document
                 * @param {?=} _ngZone
                 * @param {?=} _viewportRuler
                 */
                function DropListRef(element, _dragDropRegistry, _document, _ngZone, _viewportRuler) {
                    var _this = this;
                    this._dragDropRegistry = _dragDropRegistry;
                    this._ngZone = _ngZone;
                    this._viewportRuler = _viewportRuler;
                    /**
                     * Unique ID for the drop list.
                     * @deprecated No longer being used. To be removed.
                     * \@breaking-change 8.0.0
                     */
                    this.id = "cdk-drop-list-ref-" + _uniqueIdCounter++;
                    /**
                     * Whether starting a dragging sequence from this container is disabled.
                     */
                    this.disabled = false;
                    /**
                     * Whether sorting items within the list is disabled.
                     */
                    this.sortingDisabled = false;
                    /**
                     * Whether auto-scrolling the view when the user
                     * moves their pointer close to the edges is disabled.
                     */
                    this.autoScrollDisabled = false;
                    /**
                     * Function that is used to determine whether an item
                     * is allowed to be moved into a drop container.
                     */
                    this.enterPredicate = ( /**
                     * @return {?}
                     */function () { return true; });
                    /**
                     * Emits right before dragging has started.
                     */
                    this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                    /**
                     * Emits when the user has moved a new drag item into this container.
                     */
                    this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                    /**
                     * Emits when the user removes an item from the container
                     * by dragging it into another container.
                     */
                    this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                    /**
                     * Emits when the user drops an item inside the container.
                     */
                    this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                    /**
                     * Emits as the user is swapping items while actively dragging.
                     */
                    this.sorted = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                    /**
                     * Whether an item in the list is being dragged.
                     */
                    this._isDragging = false;
                    /**
                     * Cache of the dimensions of all the items inside the container.
                     */
                    this._itemPositions = [];
                    /**
                     * Keeps track of the container's scroll position.
                     */
                    this._scrollPosition = { top: 0, left: 0 };
                    /**
                     * Keeps track of the scroll position of the viewport.
                     */
                    this._viewportScrollPosition = { top: 0, left: 0 };
                    /**
                     * Keeps track of the item that was last swapped with the dragged item, as
                     * well as what direction the pointer was moving in when the swap occured.
                     */
                    this._previousSwap = { drag: ( /** @type {?} */(null)), delta: 0 };
                    /**
                     * Drop lists that are connected to the current one.
                     */
                    this._siblings = [];
                    /**
                     * Direction in which the list is oriented.
                     */
                    this._orientation = 'vertical';
                    /**
                     * Connected siblings that currently have a dragged item.
                     */
                    this._activeSiblings = new Set();
                    /**
                     * Layout direction of the drop list.
                     */
                    this._direction = 'ltr';
                    /**
                     * Subscription to the window being scrolled.
                     */
                    this._viewportScrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
                    /**
                     * Vertical direction in which the list is currently scrolling.
                     */
                    this._verticalScrollDirection = 0 /* NONE */;
                    /**
                     * Horizontal direction in which the list is currently scrolling.
                     */
                    this._horizontalScrollDirection = 0 /* NONE */;
                    /**
                     * Used to signal to the current auto-scroll sequence when to stop.
                     */
                    this._stopScrollTimers = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                    /**
                     * Handles the container being scrolled. Has to be an arrow function to preserve the context.
                     */
                    this._handleScroll = ( /**
                     * @return {?}
                     */function () {
                        if (!_this.isDragging()) {
                            return;
                        }
                        /** @type {?} */
                        var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(_this.element);
                        _this._updateAfterScroll(_this._scrollPosition, element.scrollTop, element.scrollLeft);
                    });
                    /**
                     * Starts the interval that'll auto-scroll the element.
                     */
                    this._startScrollInterval = ( /**
                     * @return {?}
                     */function () {
                        _this._stopScrolling();
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(0, rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"])
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this._stopScrollTimers))
                            .subscribe(( /**
                     * @return {?}
                     */function () {
                            /** @type {?} */
                            var node = _this._scrollNode;
                            if (_this._verticalScrollDirection === 1 /* UP */) {
                                incrementVerticalScroll(node, -AUTO_SCROLL_STEP);
                            }
                            else if (_this._verticalScrollDirection === 2 /* DOWN */) {
                                incrementVerticalScroll(node, AUTO_SCROLL_STEP);
                            }
                            if (_this._horizontalScrollDirection === 1 /* LEFT */) {
                                incrementHorizontalScroll(node, -AUTO_SCROLL_STEP);
                            }
                            else if (_this._horizontalScrollDirection === 2 /* RIGHT */) {
                                incrementHorizontalScroll(node, AUTO_SCROLL_STEP);
                            }
                        }));
                    });
                    /** @type {?} */
                    var nativeNode = this.element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(element);
                    this._shadowRoot = getShadowRoot(nativeNode) || _document;
                    _dragDropRegistry.registerDropContainer(this);
                }
                /**
                 * Removes the drop list functionality from the DOM element.
                 * @return {?}
                 */
                DropListRef.prototype.dispose = function () {
                    this._stopScrolling();
                    this._stopScrollTimers.complete();
                    this._removeListeners();
                    this.beforeStarted.complete();
                    this.entered.complete();
                    this.exited.complete();
                    this.dropped.complete();
                    this.sorted.complete();
                    this._activeSiblings.clear();
                    this._scrollNode = ( /** @type {?} */(null));
                    this._dragDropRegistry.removeDropContainer(this);
                };
                /**
                 * Whether an item from this list is currently being dragged.
                 * @return {?}
                 */
                DropListRef.prototype.isDragging = function () {
                    return this._isDragging;
                };
                /**
                 * Starts dragging an item.
                 * @return {?}
                 */
                DropListRef.prototype.start = function () {
                    var _this = this;
                    /** @type {?} */
                    var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this.element);
                    this.beforeStarted.next();
                    this._isDragging = true;
                    this._cacheItems();
                    this._siblings.forEach(( /**
                     * @param {?} sibling
                     * @return {?}
                     */function (/**
                     * @param {?} sibling
                     * @return {?}
                     */ sibling) { return sibling._startReceiving(_this); }));
                    this._removeListeners();
                    // @breaking-change 9.0.0 Remove check for _ngZone once it's marked as a required param.
                    if (this._ngZone) {
                        this._ngZone.runOutsideAngular(( /**
                         * @return {?}
                         */function () { return element.addEventListener('scroll', _this._handleScroll); }));
                    }
                    else {
                        element.addEventListener('scroll', this._handleScroll);
                    }
                    // @breaking-change 9.0.0 Remove check for _viewportRuler once it's marked as a required param.
                    if (this._viewportRuler) {
                        this._listenToScrollEvents();
                    }
                };
                /**
                 * Emits an event to indicate that the user moved an item into the container.
                 * @param {?} item Item that was moved into the container.
                 * @param {?} pointerX Position of the item along the X axis.
                 * @param {?} pointerY Position of the item along the Y axis.
                 * @return {?}
                 */
                DropListRef.prototype.enter = function (item, pointerX, pointerY) {
                    this.start();
                    // If sorting is disabled, we want the item to return to its starting
                    // position if the user is returning it to its initial container.
                    /** @type {?} */
                    var newIndex = this.sortingDisabled ? this._draggables.indexOf(item) : -1;
                    if (newIndex === -1) {
                        // We use the coordinates of where the item entered the drop
                        // zone to figure out at which index it should be inserted.
                        newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY);
                    }
                    /** @type {?} */
                    var activeDraggables = this._activeDraggables;
                    /** @type {?} */
                    var currentIndex = activeDraggables.indexOf(item);
                    /** @type {?} */
                    var placeholder = item.getPlaceholderElement();
                    /** @type {?} */
                    var newPositionReference = activeDraggables[newIndex];
                    // If the item at the new position is the same as the item that is being dragged,
                    // it means that we're trying to restore the item to its initial position. In this
                    // case we should use the next item from the list as the reference.
                    if (newPositionReference === item) {
                        newPositionReference = activeDraggables[newIndex + 1];
                    }
                    // Since the item may be in the `activeDraggables` already (e.g. if the user dragged it
                    // into another container and back again), we have to ensure that it isn't duplicated.
                    if (currentIndex > -1) {
                        activeDraggables.splice(currentIndex, 1);
                    }
                    // Don't use items that are being dragged as a reference, because
                    // their element has been moved down to the bottom of the body.
                    if (newPositionReference && !this._dragDropRegistry.isDragging(newPositionReference)) {
                        /** @type {?} */
                        var element = newPositionReference.getRootElement();
                        ( /** @type {?} */(element.parentElement)).insertBefore(placeholder, element);
                        activeDraggables.splice(newIndex, 0, item);
                    }
                    else {
                        Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this.element).appendChild(placeholder);
                        activeDraggables.push(item);
                    }
                    // The transform needs to be cleared so it doesn't throw off the measurements.
                    placeholder.style.transform = '';
                    // Note that the positions were already cached when we called `start` above,
                    // but we need to refresh them since the amount of items has changed.
                    this._cacheItemPositions();
                    this.entered.next({ item: item, container: this, currentIndex: this.getItemIndex(item) });
                };
                /**
                 * Removes an item from the container after it was dragged into another container by the user.
                 * @param {?} item Item that was dragged out.
                 * @return {?}
                 */
                DropListRef.prototype.exit = function (item) {
                    this._reset();
                    this.exited.next({ item: item, container: this });
                };
                /**
                 * Drops an item into this container.
                 * \@breaking-change 9.0.0 `distance` parameter to become required.
                 * @param {?} item Item being dropped into the container.
                 * @param {?} currentIndex Index at which the item should be inserted.
                 * @param {?} previousContainer Container from which the item got dragged in.
                 * @param {?} isPointerOverContainer Whether the user's pointer was over the
                 *    container when the item was dropped.
                 * @param {?=} distance Distance the user has dragged since the start of the dragging sequence.
                 * @return {?}
                 */
                DropListRef.prototype.drop = function (item, currentIndex, previousContainer, isPointerOverContainer, distance) {
                    if (distance === void 0) { distance = { x: 0, y: 0 }; }
                    this._reset();
                    this.dropped.next({
                        item: item,
                        currentIndex: currentIndex,
                        previousIndex: previousContainer.getItemIndex(item),
                        container: this,
                        previousContainer: previousContainer,
                        isPointerOverContainer: isPointerOverContainer,
                        distance: distance
                    });
                };
                /**
                 * Sets the draggable items that are a part of this list.
                 * @template THIS
                 * @this {THIS}
                 * @param {?} items Items that are a part of this list.
                 * @return {THIS}
                 */
                DropListRef.prototype.withItems = function (items) {
                    var _this = this;
                    ( /** @type {?} */(this))._draggables = items;
                    items.forEach(( /**
                     * @param {?} item
                     * @return {?}
                     */function (/**
                     * @param {?} item
                     * @return {?}
                     */ item) { return item._withDropContainer(( /** @type {?} */(_this))); }));
                    if (( /** @type {?} */(this)).isDragging()) {
                        ( /** @type {?} */(this))._cacheItems();
                    }
                    return ( /** @type {?} */(this));
                };
                /**
                 * Sets the layout direction of the drop list.
                 * @template THIS
                 * @this {THIS}
                 * @param {?} direction
                 * @return {THIS}
                 */
                DropListRef.prototype.withDirection = function (direction) {
                    ( /** @type {?} */(this))._direction = direction;
                    return ( /** @type {?} */(this));
                };
                /**
                 * Sets the containers that are connected to this one. When two or more containers are
                 * connected, the user will be allowed to transfer items between them.
                 * @template THIS
                 * @this {THIS}
                 * @param {?} connectedTo Other containers that the current containers should be connected to.
                 * @return {THIS}
                 */
                DropListRef.prototype.connectedTo = function (connectedTo) {
                    ( /** @type {?} */(this))._siblings = connectedTo.slice();
                    return ( /** @type {?} */(this));
                };
                /**
                 * Sets the orientation of the container.
                 * @template THIS
                 * @this {THIS}
                 * @param {?} orientation New orientation for the container.
                 * @return {THIS}
                 */
                DropListRef.prototype.withOrientation = function (orientation) {
                    ( /** @type {?} */(this))._orientation = orientation;
                    return ( /** @type {?} */(this));
                };
                /**
                 * Figures out the index of an item in the container.
                 * @param {?} item Item whose index should be determined.
                 * @return {?}
                 */
                DropListRef.prototype.getItemIndex = function (item) {
                    if (!this._isDragging) {
                        return this._draggables.indexOf(item);
                    }
                    // Items are sorted always by top/left in the cache, however they flow differently in RTL.
                    // The rest of the logic still stands no matter what orientation we're in, however
                    // we need to invert the array when determining the index.
                    /** @type {?} */
                    var items = this._orientation === 'horizontal' && this._direction === 'rtl' ?
                        this._itemPositions.slice().reverse() : this._itemPositions;
                    return findIndex(items, ( /**
                     * @param {?} currentItem
                     * @return {?}
                     */function (/**
                     * @param {?} currentItem
                     * @return {?}
                     */ currentItem) { return currentItem.drag === item; }));
                };
                /**
                 * Whether the list is able to receive the item that
                 * is currently being dragged inside a connected drop list.
                 * @return {?}
                 */
                DropListRef.prototype.isReceiving = function () {
                    return this._activeSiblings.size > 0;
                };
                /**
                 * Sorts an item inside the container based on its position.
                 * @param {?} item Item to be sorted.
                 * @param {?} pointerX Position of the item along the X axis.
                 * @param {?} pointerY Position of the item along the Y axis.
                 * @param {?} pointerDelta Direction in which the pointer is moving along each axis.
                 * @return {?}
                 */
                DropListRef.prototype._sortItem = function (item, pointerX, pointerY, pointerDelta) {
                    // Don't sort the item if sorting is disabled or it's out of range.
                    if (this.sortingDisabled || !this._isPointerNearDropContainer(pointerX, pointerY)) {
                        return;
                    }
                    /** @type {?} */
                    var siblings = this._itemPositions;
                    /** @type {?} */
                    var newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY, pointerDelta);
                    if (newIndex === -1 && siblings.length > 0) {
                        return;
                    }
                    /** @type {?} */
                    var isHorizontal = this._orientation === 'horizontal';
                    /** @type {?} */
                    var currentIndex = findIndex(siblings, ( /**
                     * @param {?} currentItem
                     * @return {?}
                     */function (/**
                     * @param {?} currentItem
                     * @return {?}
                     */ currentItem) { return currentItem.drag === item; }));
                    /** @type {?} */
                    var siblingAtNewPosition = siblings[newIndex];
                    /** @type {?} */
                    var currentPosition = siblings[currentIndex].clientRect;
                    /** @type {?} */
                    var newPosition = siblingAtNewPosition.clientRect;
                    /** @type {?} */
                    var delta = currentIndex > newIndex ? 1 : -1;
                    this._previousSwap.drag = siblingAtNewPosition.drag;
                    this._previousSwap.delta = isHorizontal ? pointerDelta.x : pointerDelta.y;
                    // How many pixels the item's placeholder should be offset.
                    /** @type {?} */
                    var itemOffset = this._getItemOffsetPx(currentPosition, newPosition, delta);
                    // How many pixels all the other items should be offset.
                    /** @type {?} */
                    var siblingOffset = this._getSiblingOffsetPx(currentIndex, siblings, delta);
                    // Save the previous order of the items before moving the item to its new index.
                    // We use this to check whether an item has been moved as a result of the sorting.
                    /** @type {?} */
                    var oldOrder = siblings.slice();
                    // Shuffle the array in place.
                    moveItemInArray(siblings, currentIndex, newIndex);
                    this.sorted.next({
                        previousIndex: currentIndex,
                        currentIndex: newIndex,
                        container: this,
                        item: item
                    });
                    siblings.forEach(( /**
                     * @param {?} sibling
                     * @param {?} index
                     * @return {?}
                     */function (sibling, index) {
                        // Don't do anything if the position hasn't changed.
                        if (oldOrder[index] === sibling) {
                            return;
                        }
                        /** @type {?} */
                        var isDraggedItem = sibling.drag === item;
                        /** @type {?} */
                        var offset = isDraggedItem ? itemOffset : siblingOffset;
                        /** @type {?} */
                        var elementToOffset = isDraggedItem ? item.getPlaceholderElement() :
                            sibling.drag.getRootElement();
                        // Update the offset to reflect the new position.
                        sibling.offset += offset;
                        // Since we're moving the items with a `transform`, we need to adjust their cached
                        // client rects to reflect their new position, as well as swap their positions in the cache.
                        // Note that we shouldn't use `getBoundingClientRect` here to update the cache, because the
                        // elements may be mid-animation which will give us a wrong result.
                        if (isHorizontal) {
                            // Round the transforms since some browsers will
                            // blur the elements, for sub-pixel transforms.
                            elementToOffset.style.transform = "translate3d(" + Math.round(sibling.offset) + "px, 0, 0)";
                            adjustClientRect(sibling.clientRect, 0, offset);
                        }
                        else {
                            elementToOffset.style.transform = "translate3d(0, " + Math.round(sibling.offset) + "px, 0)";
                            adjustClientRect(sibling.clientRect, offset, 0);
                        }
                    }));
                };
                /**
                 * Checks whether the user's pointer is close to the edges of either the
                 * viewport or the drop list and starts the auto-scroll sequence.
                 * @param {?} pointerX User's pointer position along the x axis.
                 * @param {?} pointerY User's pointer position along the y axis.
                 * @return {?}
                 */
                DropListRef.prototype._startScrollingIfNecessary = function (pointerX, pointerY) {
                    var _a;
                    if (this.autoScrollDisabled) {
                        return;
                    }
                    /** @type {?} */
                    var scrollNode;
                    /** @type {?} */
                    var verticalScrollDirection = 0 /* NONE */;
                    /** @type {?} */
                    var horizontalScrollDirection = 0 /* NONE */;
                    // Check whether we should start scrolling the container.
                    if (this._isPointerNearDropContainer(pointerX, pointerY)) {
                        /** @type {?} */
                        var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this.element);
                        _a = __read(getElementScrollDirections(element, this._clientRect, pointerX, pointerY), 2), verticalScrollDirection = _a[0], horizontalScrollDirection = _a[1];
                        if (verticalScrollDirection || horizontalScrollDirection) {
                            scrollNode = element;
                        }
                    }
                    // @breaking-change 9.0.0 Remove null check for _viewportRuler once it's a required parameter.
                    // Otherwise check if we can start scrolling the viewport.
                    if (this._viewportRuler && !verticalScrollDirection && !horizontalScrollDirection) {
                        var _b = this._viewportRuler.getViewportSize(), width = _b.width, height = _b.height;
                        /** @type {?} */
                        var clientRect = { width: width, height: height, top: 0, right: width, bottom: height, left: 0 };
                        verticalScrollDirection = getVerticalScrollDirection(clientRect, pointerY);
                        horizontalScrollDirection = getHorizontalScrollDirection(clientRect, pointerX);
                        scrollNode = window;
                    }
                    if (scrollNode && (verticalScrollDirection !== this._verticalScrollDirection ||
                        horizontalScrollDirection !== this._horizontalScrollDirection ||
                        scrollNode !== this._scrollNode)) {
                        this._verticalScrollDirection = verticalScrollDirection;
                        this._horizontalScrollDirection = horizontalScrollDirection;
                        this._scrollNode = scrollNode;
                        if ((verticalScrollDirection || horizontalScrollDirection) && scrollNode) {
                            // @breaking-change 9.0.0 Remove null check for `_ngZone` once it is made required.
                            if (this._ngZone) {
                                this._ngZone.runOutsideAngular(this._startScrollInterval);
                            }
                            else {
                                this._startScrollInterval();
                            }
                        }
                        else {
                            this._stopScrolling();
                        }
                    }
                };
                /**
                 * Stops any currently-running auto-scroll sequences.
                 * @return {?}
                 */
                DropListRef.prototype._stopScrolling = function () {
                    this._stopScrollTimers.next();
                };
                /**
                 * Caches the position of the drop list.
                 * @private
                 * @return {?}
                 */
                DropListRef.prototype._cacheOwnPosition = function () {
                    /** @type {?} */
                    var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this.element);
                    this._clientRect = getMutableClientRect(element);
                    this._scrollPosition = { top: element.scrollTop, left: element.scrollLeft };
                };
                /**
                 * Refreshes the position cache of the items and sibling containers.
                 * @private
                 * @return {?}
                 */
                DropListRef.prototype._cacheItemPositions = function () {
                    var _this = this;
                    /** @type {?} */
                    var isHorizontal = this._orientation === 'horizontal';
                    this._itemPositions = this._activeDraggables.map(( /**
                     * @param {?} drag
                     * @return {?}
                     */function (/**
                     * @param {?} drag
                     * @return {?}
                     */ drag) {
                        /** @type {?} */
                        var elementToMeasure = _this._dragDropRegistry.isDragging(drag) ?
                            // If the element is being dragged, we have to measure the
                            // placeholder, because the element is hidden.
                            drag.getPlaceholderElement() :
                            drag.getRootElement();
                        return { drag: drag, offset: 0, clientRect: getMutableClientRect(elementToMeasure) };
                    })).sort(( /**
                     * @param {?} a
                     * @param {?} b
                     * @return {?}
                     */function (a, b) {
                        return isHorizontal ? a.clientRect.left - b.clientRect.left :
                            a.clientRect.top - b.clientRect.top;
                    }));
                };
                /**
                 * Resets the container to its initial state.
                 * @private
                 * @return {?}
                 */
                DropListRef.prototype._reset = function () {
                    var _this = this;
                    this._isDragging = false;
                    // TODO(crisbeto): may have to wait for the animations to finish.
                    this._activeDraggables.forEach(( /**
                     * @param {?} item
                     * @return {?}
                     */function (/**
                     * @param {?} item
                     * @return {?}
                     */ item) { return item.getRootElement().style.transform = ''; }));
                    this._siblings.forEach(( /**
                     * @param {?} sibling
                     * @return {?}
                     */function (/**
                     * @param {?} sibling
                     * @return {?}
                     */ sibling) { return sibling._stopReceiving(_this); }));
                    this._activeDraggables = [];
                    this._itemPositions = [];
                    this._previousSwap.drag = null;
                    this._previousSwap.delta = 0;
                    this._stopScrolling();
                    this._removeListeners();
                };
                /**
                 * Gets the offset in pixels by which the items that aren't being dragged should be moved.
                 * @private
                 * @param {?} currentIndex Index of the item currently being dragged.
                 * @param {?} siblings All of the items in the list.
                 * @param {?} delta Direction in which the user is moving.
                 * @return {?}
                 */
                DropListRef.prototype._getSiblingOffsetPx = function (currentIndex, siblings, delta) {
                    /** @type {?} */
                    var isHorizontal = this._orientation === 'horizontal';
                    /** @type {?} */
                    var currentPosition = siblings[currentIndex].clientRect;
                    /** @type {?} */
                    var immediateSibling = siblings[currentIndex + delta * -1];
                    /** @type {?} */
                    var siblingOffset = currentPosition[isHorizontal ? 'width' : 'height'] * delta;
                    if (immediateSibling) {
                        /** @type {?} */
                        var start = isHorizontal ? 'left' : 'top';
                        /** @type {?} */
                        var end = isHorizontal ? 'right' : 'bottom';
                        // Get the spacing between the start of the current item and the end of the one immediately
                        // after it in the direction in which the user is dragging, or vice versa. We add it to the
                        // offset in order to push the element to where it will be when it's inline and is influenced
                        // by the `margin` of its siblings.
                        if (delta === -1) {
                            siblingOffset -= immediateSibling.clientRect[start] - currentPosition[end];
                        }
                        else {
                            siblingOffset += currentPosition[start] - immediateSibling.clientRect[end];
                        }
                    }
                    return siblingOffset;
                };
                /**
                 * Checks whether the pointer coordinates are close to the drop container.
                 * @private
                 * @param {?} pointerX Coordinates along the X axis.
                 * @param {?} pointerY Coordinates along the Y axis.
                 * @return {?}
                 */
                DropListRef.prototype._isPointerNearDropContainer = function (pointerX, pointerY) {
                    var _a = this._clientRect, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left, width = _a.width, height = _a.height;
                    /** @type {?} */
                    var xThreshold = width * DROP_PROXIMITY_THRESHOLD;
                    /** @type {?} */
                    var yThreshold = height * DROP_PROXIMITY_THRESHOLD;
                    return pointerY > top - yThreshold && pointerY < bottom + yThreshold &&
                        pointerX > left - xThreshold && pointerX < right + xThreshold;
                };
                /**
                 * Gets the offset in pixels by which the item that is being dragged should be moved.
                 * @private
                 * @param {?} currentPosition Current position of the item.
                 * @param {?} newPosition Position of the item where the current item should be moved.
                 * @param {?} delta Direction in which the user is moving.
                 * @return {?}
                 */
                DropListRef.prototype._getItemOffsetPx = function (currentPosition, newPosition, delta) {
                    /** @type {?} */
                    var isHorizontal = this._orientation === 'horizontal';
                    /** @type {?} */
                    var itemOffset = isHorizontal ? newPosition.left - currentPosition.left :
                        newPosition.top - currentPosition.top;
                    // Account for differences in the item width/height.
                    if (delta === -1) {
                        itemOffset += isHorizontal ? newPosition.width - currentPosition.width :
                            newPosition.height - currentPosition.height;
                    }
                    return itemOffset;
                };
                /**
                 * Gets the index of an item in the drop container, based on the position of the user's pointer.
                 * @private
                 * @param {?} item Item that is being sorted.
                 * @param {?} pointerX Position of the user's pointer along the X axis.
                 * @param {?} pointerY Position of the user's pointer along the Y axis.
                 * @param {?=} delta Direction in which the user is moving their pointer.
                 * @return {?}
                 */
                DropListRef.prototype._getItemIndexFromPointerPosition = function (item, pointerX, pointerY, delta) {
                    var _this = this;
                    /** @type {?} */
                    var isHorizontal = this._orientation === 'horizontal';
                    return findIndex(this._itemPositions, ( /**
                     * @param {?} __0
                     * @param {?} _
                     * @param {?} array
                     * @return {?}
                     */function (_a, _, array) {
                        var drag = _a.drag, clientRect = _a.clientRect;
                        if (drag === item) {
                            // If there's only one item left in the container, it must be
                            // the dragged item itself so we use it as a reference.
                            return array.length < 2;
                        }
                        if (delta) {
                            /** @type {?} */
                            var direction = isHorizontal ? delta.x : delta.y;
                            // If the user is still hovering over the same item as last time, and they didn't change
                            // the direction in which they're dragging, we don't consider it a direction swap.
                            if (drag === _this._previousSwap.drag && direction === _this._previousSwap.delta) {
                                return false;
                            }
                        }
                        return isHorizontal ?
                            // Round these down since most browsers report client rects with
                            // sub-pixel precision, whereas the pointer coordinates are rounded to pixels.
                            pointerX >= Math.floor(clientRect.left) && pointerX <= Math.floor(clientRect.right) :
                            pointerY >= Math.floor(clientRect.top) && pointerY <= Math.floor(clientRect.bottom);
                    }));
                };
                /**
                 * Caches the current items in the list and their positions.
                 * @private
                 * @return {?}
                 */
                DropListRef.prototype._cacheItems = function () {
                    this._activeDraggables = this._draggables.slice();
                    this._cacheItemPositions();
                    this._cacheOwnPosition();
                };
                /**
                 * Updates the internal state of the container after a scroll event has happened.
                 * @private
                 * @param {?} scrollPosition Object that is keeping track of the scroll position.
                 * @param {?} newTop New top scroll position.
                 * @param {?} newLeft New left scroll position.
                 * @param {?=} extraClientRect Extra `ClientRect` object that should be updated, in addition to the
                 *  ones of the drag items. Useful when the viewport has been scrolled and we also need to update
                 *  the `ClientRect` of the list.
                 * @return {?}
                 */
                DropListRef.prototype._updateAfterScroll = function (scrollPosition, newTop, newLeft, extraClientRect) {
                    var _this = this;
                    /** @type {?} */
                    var topDifference = scrollPosition.top - newTop;
                    /** @type {?} */
                    var leftDifference = scrollPosition.left - newLeft;
                    if (extraClientRect) {
                        adjustClientRect(extraClientRect, topDifference, leftDifference);
                    }
                    // Since we know the amount that the user has scrolled we can shift all of the client rectangles
                    // ourselves. This is cheaper than re-measuring everything and we can avoid inconsistent
                    // behavior where we might be measuring the element before its position has changed.
                    this._itemPositions.forEach(( /**
                     * @param {?} __0
                     * @return {?}
                     */function (_a) {
                        var clientRect = _a.clientRect;
                        adjustClientRect(clientRect, topDifference, leftDifference);
                    }));
                    // We need two loops for this, because we want all of the cached
                    // positions to be up-to-date before we re-sort the item.
                    this._itemPositions.forEach(( /**
                     * @param {?} __0
                     * @return {?}
                     */function (_a) {
                        var drag = _a.drag;
                        if (_this._dragDropRegistry.isDragging(drag)) {
                            // We need to re-sort the item manually, because the pointer move
                            // events won't be dispatched while the user is scrolling.
                            drag._sortFromLastPointerPosition();
                        }
                    }));
                    scrollPosition.top = newTop;
                    scrollPosition.left = newLeft;
                };
                /**
                 * Removes the event listeners associated with this drop list.
                 * @private
                 * @return {?}
                 */
                DropListRef.prototype._removeListeners = function () {
                    Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this.element).removeEventListener('scroll', this._handleScroll);
                    this._viewportScrollSubscription.unsubscribe();
                };
                /**
                 * Checks whether the user's pointer is positioned over the container.
                 * @param {?} x Pointer position along the X axis.
                 * @param {?} y Pointer position along the Y axis.
                 * @return {?}
                 */
                DropListRef.prototype._isOverContainer = function (x, y) {
                    return isInsideClientRect(this._clientRect, x, y);
                };
                /**
                 * Figures out whether an item should be moved into a sibling
                 * drop container, based on its current position.
                 * @param {?} item Drag item that is being moved.
                 * @param {?} x Position of the item along the X axis.
                 * @param {?} y Position of the item along the Y axis.
                 * @return {?}
                 */
                DropListRef.prototype._getSiblingContainerFromPosition = function (item, x, y) {
                    return this._siblings.find(( /**
                     * @param {?} sibling
                     * @return {?}
                     */function (/**
                     * @param {?} sibling
                     * @return {?}
                     */ sibling) { return sibling._canReceive(item, x, y); }));
                };
                /**
                 * Checks whether the drop list can receive the passed-in item.
                 * @param {?} item Item that is being dragged into the list.
                 * @param {?} x Position of the item along the X axis.
                 * @param {?} y Position of the item along the Y axis.
                 * @return {?}
                 */
                DropListRef.prototype._canReceive = function (item, x, y) {
                    if (!this.enterPredicate(item, this) || !isInsideClientRect(this._clientRect, x, y)) {
                        return false;
                    }
                    /** @type {?} */
                    var elementFromPoint = ( /** @type {?} */(this._shadowRoot.elementFromPoint(x, y)));
                    // If there's no element at the pointer position, then
                    // the client rect is probably scrolled out of the view.
                    if (!elementFromPoint) {
                        return false;
                    }
                    /** @type {?} */
                    var nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this.element);
                    // The `ClientRect`, that we're using to find the container over which the user is
                    // hovering, doesn't give us any information on whether the element has been scrolled
                    // out of the view or whether it's overlapping with other containers. This means that
                    // we could end up transferring the item into a container that's invisible or is positioned
                    // below another one. We use the result from `elementFromPoint` to get the top-most element
                    // at the pointer position and to find whether it's one of the intersecting drop containers.
                    return elementFromPoint === nativeElement || nativeElement.contains(elementFromPoint);
                };
                /**
                 * Called by one of the connected drop lists when a dragging sequence has started.
                 * @param {?} sibling Sibling in which dragging has started.
                 * @return {?}
                 */
                DropListRef.prototype._startReceiving = function (sibling) {
                    /** @type {?} */
                    var activeSiblings = this._activeSiblings;
                    if (!activeSiblings.has(sibling)) {
                        activeSiblings.add(sibling);
                        this._cacheOwnPosition();
                        this._listenToScrollEvents();
                    }
                };
                /**
                 * Called by a connected drop list when dragging has stopped.
                 * @param {?} sibling Sibling whose dragging has stopped.
                 * @return {?}
                 */
                DropListRef.prototype._stopReceiving = function (sibling) {
                    this._activeSiblings.delete(sibling);
                    this._viewportScrollSubscription.unsubscribe();
                };
                /**
                 * Starts listening to scroll events on the viewport.
                 * Used for updating the internal state of the list.
                 * @private
                 * @return {?}
                 */
                DropListRef.prototype._listenToScrollEvents = function () {
                    var _this = this;
                    this._viewportScrollPosition = ( /** @type {?} */(this._viewportRuler)).getViewportScrollPosition();
                    this._viewportScrollSubscription = this._dragDropRegistry.scroll.subscribe(( /**
                     * @return {?}
                     */function () {
                        if (_this.isDragging()) {
                            /** @type {?} */
                            var newPosition = ( /** @type {?} */(_this._viewportRuler)).getViewportScrollPosition();
                            _this._updateAfterScroll(_this._viewportScrollPosition, newPosition.top, newPosition.left, _this._clientRect);
                        }
                        else if (_this.isReceiving()) {
                            _this._cacheOwnPosition();
                        }
                    }));
                };
                return DropListRef;
            }());
            /**
             * Updates the top/left positions of a `ClientRect`, as well as their bottom/right counterparts.
             * @param {?} clientRect `ClientRect` that should be updated.
             * @param {?} top Amount to add to the `top` position.
             * @param {?} left Amount to add to the `left` position.
             * @return {?}
             */
            function adjustClientRect(clientRect, top, left) {
                clientRect.top += top;
                clientRect.bottom = clientRect.top + clientRect.height;
                clientRect.left += left;
                clientRect.right = clientRect.left + clientRect.width;
            }
            /**
             * Finds the index of an item that matches a predicate function. Used as an equivalent
             * of `Array.prototype.findIndex` which isn't part of the standard Google typings.
             * @template T
             * @param {?} array Array in which to look for matches.
             * @param {?} predicate Function used to determine whether an item is a match.
             * @return {?}
             */
            function findIndex(array, predicate) {
                for (var i = 0; i < array.length; i++) {
                    if (predicate(array[i], i, array)) {
                        return i;
                    }
                }
                return -1;
            }
            /**
             * Checks whether some coordinates are within a `ClientRect`.
             * @param {?} clientRect ClientRect that is being checked.
             * @param {?} x Coordinates along the X axis.
             * @param {?} y Coordinates along the Y axis.
             * @return {?}
             */
            function isInsideClientRect(clientRect, x, y) {
                var top = clientRect.top, bottom = clientRect.bottom, left = clientRect.left, right = clientRect.right;
                return y >= top && y <= bottom && x >= left && x <= right;
            }
            /**
             * Gets a mutable version of an element's bounding `ClientRect`.
             * @param {?} element
             * @return {?}
             */
            function getMutableClientRect(element) {
                /** @type {?} */
                var clientRect = element.getBoundingClientRect();
                // We need to clone the `clientRect` here, because all the values on it are readonly
                // and we need to be able to update them. Also we can't use a spread here, because
                // the values on a `ClientRect` aren't own properties. See:
                // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect#Notes
                return {
                    top: clientRect.top,
                    right: clientRect.right,
                    bottom: clientRect.bottom,
                    left: clientRect.left,
                    width: clientRect.width,
                    height: clientRect.height
                };
            }
            /**
             * Increments the vertical scroll position of a node.
             * @param {?} node Node whose scroll position should change.
             * @param {?} amount Amount of pixels that the `node` should be scrolled.
             * @return {?}
             */
            function incrementVerticalScroll(node, amount) {
                if (node === window) {
                    (( /** @type {?} */(node))).scrollBy(0, amount);
                }
                else {
                    // Ideally we could use `Element.scrollBy` here as well, but IE and Edge don't support it.
                    (( /** @type {?} */(node))).scrollTop += amount;
                }
            }
            /**
             * Increments the horizontal scroll position of a node.
             * @param {?} node Node whose scroll position should change.
             * @param {?} amount Amount of pixels that the `node` should be scrolled.
             * @return {?}
             */
            function incrementHorizontalScroll(node, amount) {
                if (node === window) {
                    (( /** @type {?} */(node))).scrollBy(amount, 0);
                }
                else {
                    // Ideally we could use `Element.scrollBy` here as well, but IE and Edge don't support it.
                    (( /** @type {?} */(node))).scrollLeft += amount;
                }
            }
            /**
             * Gets whether the vertical auto-scroll direction of a node.
             * @param {?} clientRect Dimensions of the node.
             * @param {?} pointerY Position of the user's pointer along the y axis.
             * @return {?}
             */
            function getVerticalScrollDirection(clientRect, pointerY) {
                var top = clientRect.top, bottom = clientRect.bottom, height = clientRect.height;
                /** @type {?} */
                var yThreshold = height * SCROLL_PROXIMITY_THRESHOLD;
                if (pointerY >= top - yThreshold && pointerY <= top + yThreshold) {
                    return 1 /* UP */;
                }
                else if (pointerY >= bottom - yThreshold && pointerY <= bottom + yThreshold) {
                    return 2 /* DOWN */;
                }
                return 0 /* NONE */;
            }
            /**
             * Gets whether the horizontal auto-scroll direction of a node.
             * @param {?} clientRect Dimensions of the node.
             * @param {?} pointerX Position of the user's pointer along the x axis.
             * @return {?}
             */
            function getHorizontalScrollDirection(clientRect, pointerX) {
                var left = clientRect.left, right = clientRect.right, width = clientRect.width;
                /** @type {?} */
                var xThreshold = width * SCROLL_PROXIMITY_THRESHOLD;
                if (pointerX >= left - xThreshold && pointerX <= left + xThreshold) {
                    return 1 /* LEFT */;
                }
                else if (pointerX >= right - xThreshold && pointerX <= right + xThreshold) {
                    return 2 /* RIGHT */;
                }
                return 0 /* NONE */;
            }
            /**
             * Gets the directions in which an element node should be scrolled,
             * assuming that the user's pointer is already within it scrollable region.
             * @param {?} element Element for which we should calculate the scroll direction.
             * @param {?} clientRect Bounding client rectangle of the element.
             * @param {?} pointerX Position of the user's pointer along the x axis.
             * @param {?} pointerY Position of the user's pointer along the y axis.
             * @return {?}
             */
            function getElementScrollDirections(element, clientRect, pointerX, pointerY) {
                /** @type {?} */
                var computedVertical = getVerticalScrollDirection(clientRect, pointerY);
                /** @type {?} */
                var computedHorizontal = getHorizontalScrollDirection(clientRect, pointerX);
                /** @type {?} */
                var verticalScrollDirection = 0 /* NONE */;
                /** @type {?} */
                var horizontalScrollDirection = 0 /* NONE */;
                // Note that we here we do some extra checks for whether the element is actually scrollable in
                // a certain direction and we only assign the scroll direction if it is. We do this so that we
                // can allow other elements to be scrolled, if the current element can't be scrolled anymore.
                // This allows us to handle cases where the scroll regions of two scrollable elements overlap.
                if (computedVertical) {
                    /** @type {?} */
                    var scrollTop = element.scrollTop;
                    if (computedVertical === 1 /* UP */) {
                        if (scrollTop > 0) {
                            verticalScrollDirection = 1 /* UP */;
                        }
                    }
                    else if (element.scrollHeight - scrollTop > element.clientHeight) {
                        verticalScrollDirection = 2 /* DOWN */;
                    }
                }
                if (computedHorizontal) {
                    /** @type {?} */
                    var scrollLeft = element.scrollLeft;
                    if (computedHorizontal === 1 /* LEFT */) {
                        if (scrollLeft > 0) {
                            horizontalScrollDirection = 1 /* LEFT */;
                        }
                    }
                    else if (element.scrollWidth - scrollLeft > element.clientWidth) {
                        horizontalScrollDirection = 2 /* RIGHT */;
                    }
                }
                return [verticalScrollDirection, horizontalScrollDirection];
            }
            /**
             * Gets the shadow root of an element, if any.
             * @param {?} element
             * @return {?}
             */
            function getShadowRoot(element) {
                if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["_supportsShadowDom"])()) {
                    /** @type {?} */
                    var rootNode = element.getRootNode ? element.getRootNode() : null;
                    if (rootNode instanceof ShadowRoot) {
                        return rootNode;
                    }
                }
                return null;
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Event options that can be used to bind an active, capturing event.
             * @type {?}
             */
            var activeCapturingEventOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["normalizePassiveListenerOptions"])({
                passive: false,
                capture: true
            });
            /**
             * Service that keeps track of all the drag item and drop container
             * instances, and manages global event listeners on the `document`.
             * \@docs-private
             * @template I, C
             */
            // Note: this class is generic, rather than referencing CdkDrag and CdkDropList directly, in order
            // to avoid circular imports. If we were to reference them here, importing the registry into the
            // classes that are registering themselves will introduce a circular import.
            var DragDropRegistry = /** @class */ (function () {
                /**
                 * @param {?} _ngZone
                 * @param {?} _document
                 */
                function DragDropRegistry(_ngZone, _document) {
                    var _this = this;
                    this._ngZone = _ngZone;
                    /**
                     * Registered drop container instances.
                     */
                    this._dropInstances = new Set();
                    /**
                     * Registered drag item instances.
                     */
                    this._dragInstances = new Set();
                    /**
                     * Drag item instances that are currently being dragged.
                     */
                    this._activeDragInstances = new Set();
                    /**
                     * Keeps track of the event listeners that we've bound to the `document`.
                     */
                    this._globalListeners = new Map();
                    /**
                     * Emits the `touchmove` or `mousemove` events that are dispatched
                     * while the user is dragging a drag item instance.
                     */
                    this.pointerMove = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                    /**
                     * Emits the `touchend` or `mouseup` events that are dispatched
                     * while the user is dragging a drag item instance.
                     */
                    this.pointerUp = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                    /**
                     * Emits when the viewport has been scrolled while the user is dragging an item.
                     */
                    this.scroll = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                    /**
                     * Event listener that will prevent the default browser action while the user is dragging.
                     * @param event Event whose default action should be prevented.
                     */
                    this._preventDefaultWhileDragging = ( /**
                     * @param {?} event
                     * @return {?}
                     */function (event) {
                        if (_this._activeDragInstances.size) {
                            event.preventDefault();
                        }
                    });
                    this._document = _document;
                }
                /**
                 * Adds a drop container to the registry.
                 * @param {?} drop
                 * @return {?}
                 */
                DragDropRegistry.prototype.registerDropContainer = function (drop) {
                    if (!this._dropInstances.has(drop)) {
                        if (this.getDropContainer(drop.id)) {
                            throw Error("Drop instance with id \"" + drop.id + "\" has already been registered.");
                        }
                        this._dropInstances.add(drop);
                    }
                };
                /**
                 * Adds a drag item instance to the registry.
                 * @param {?} drag
                 * @return {?}
                 */
                DragDropRegistry.prototype.registerDragItem = function (drag) {
                    var _this = this;
                    this._dragInstances.add(drag);
                    // The `touchmove` event gets bound once, ahead of time, because WebKit
                    // won't preventDefault on a dynamically-added `touchmove` listener.
                    // See https://bugs.webkit.org/show_bug.cgi?id=184250.
                    if (this._dragInstances.size === 1) {
                        this._ngZone.runOutsideAngular(( /**
                         * @return {?}
                         */function () {
                            // The event handler has to be explicitly active,
                            // because newer browsers make it passive by default.
                            _this._document.addEventListener('touchmove', _this._preventDefaultWhileDragging, activeCapturingEventOptions);
                        }));
                    }
                };
                /**
                 * Removes a drop container from the registry.
                 * @param {?} drop
                 * @return {?}
                 */
                DragDropRegistry.prototype.removeDropContainer = function (drop) {
                    this._dropInstances.delete(drop);
                };
                /**
                 * Removes a drag item instance from the registry.
                 * @param {?} drag
                 * @return {?}
                 */
                DragDropRegistry.prototype.removeDragItem = function (drag) {
                    this._dragInstances.delete(drag);
                    this.stopDragging(drag);
                    if (this._dragInstances.size === 0) {
                        this._document.removeEventListener('touchmove', this._preventDefaultWhileDragging, activeCapturingEventOptions);
                    }
                };
                /**
                 * Starts the dragging sequence for a drag instance.
                 * @param {?} drag Drag instance which is being dragged.
                 * @param {?} event Event that initiated the dragging.
                 * @return {?}
                 */
                DragDropRegistry.prototype.startDragging = function (drag, event) {
                    var _this = this;
                    // Do not process the same drag twice to avoid memory leaks and redundant listeners
                    if (this._activeDragInstances.has(drag)) {
                        return;
                    }
                    this._activeDragInstances.add(drag);
                    if (this._activeDragInstances.size === 1) {
                        /** @type {?} */
                        var isTouchEvent_1 = event.type.startsWith('touch');
                        /** @type {?} */
                        var moveEvent = isTouchEvent_1 ? 'touchmove' : 'mousemove';
                        /** @type {?} */
                        var upEvent = isTouchEvent_1 ? 'touchend' : 'mouseup';
                        // We explicitly bind __active__ listeners here, because newer browsers will default to
                        // passive ones for `mousemove` and `touchmove`. The events need to be active, because we
                        // use `preventDefault` to prevent the page from scrolling while the user is dragging.
                        this._globalListeners
                            .set(moveEvent, {
                            handler: ( /**
                             * @param {?} e
                             * @return {?}
                             */function (e) { return _this.pointerMove.next(( /** @type {?} */(e))); }),
                            options: activeCapturingEventOptions
                        })
                            .set(upEvent, {
                            handler: ( /**
                             * @param {?} e
                             * @return {?}
                             */function (e) { return _this.pointerUp.next(( /** @type {?} */(e))); }),
                            options: true
                        })
                            .set('scroll', {
                            handler: ( /**
                             * @param {?} e
                             * @return {?}
                             */function (e) { return _this.scroll.next(e); }),
                            // Use capturing so that we pick up scroll changes in any scrollable nodes that aren't
                            // the document. See https://github.com/angular/components/issues/17144.
                            options: true
                        })
                            // Preventing the default action on `mousemove` isn't enough to disable text selection
                            // on Safari so we need to prevent the selection event as well. Alternatively this can
                            // be done by setting `user-select: none` on the `body`, however it has causes a style
                            // recalculation which can be expensive on pages with a lot of elements.
                            .set('selectstart', {
                            handler: this._preventDefaultWhileDragging,
                            options: activeCapturingEventOptions
                        });
                        this._ngZone.runOutsideAngular(( /**
                         * @return {?}
                         */function () {
                            _this._globalListeners.forEach(( /**
                             * @param {?} config
                             * @param {?} name
                             * @return {?}
                             */function (config, name) {
                                _this._document.addEventListener(name, config.handler, config.options);
                            }));
                        }));
                    }
                };
                /**
                 * Stops dragging a drag item instance.
                 * @param {?} drag
                 * @return {?}
                 */
                DragDropRegistry.prototype.stopDragging = function (drag) {
                    this._activeDragInstances.delete(drag);
                    if (this._activeDragInstances.size === 0) {
                        this._clearGlobalListeners();
                    }
                };
                /**
                 * Gets whether a drag item instance is currently being dragged.
                 * @param {?} drag
                 * @return {?}
                 */
                DragDropRegistry.prototype.isDragging = function (drag) {
                    return this._activeDragInstances.has(drag);
                };
                /**
                 * Gets a drop container by its id.
                 * @deprecated No longer being used. To be removed.
                 * \@breaking-change 8.0.0
                 * @param {?} id
                 * @return {?}
                 */
                DragDropRegistry.prototype.getDropContainer = function (id) {
                    return Array.from(this._dropInstances).find(( /**
                     * @param {?} instance
                     * @return {?}
                     */function (/**
                     * @param {?} instance
                     * @return {?}
                     */ instance) { return instance.id === id; }));
                };
                /**
                 * @return {?}
                 */
                DragDropRegistry.prototype.ngOnDestroy = function () {
                    var _this = this;
                    this._dragInstances.forEach(( /**
                     * @param {?} instance
                     * @return {?}
                     */function (/**
                     * @param {?} instance
                     * @return {?}
                     */ instance) { return _this.removeDragItem(instance); }));
                    this._dropInstances.forEach(( /**
                     * @param {?} instance
                     * @return {?}
                     */function (/**
                     * @param {?} instance
                     * @return {?}
                     */ instance) { return _this.removeDropContainer(instance); }));
                    this._clearGlobalListeners();
                    this.pointerMove.complete();
                    this.pointerUp.complete();
                };
                /**
                 * Clears out the global event listeners from the `document`.
                 * @private
                 * @return {?}
                 */
                DragDropRegistry.prototype._clearGlobalListeners = function () {
                    var _this = this;
                    this._globalListeners.forEach(( /**
                     * @param {?} config
                     * @param {?} name
                     * @return {?}
                     */function (config, name) {
                        _this._document.removeEventListener(name, config.handler, config.options);
                    }));
                    this._globalListeners.clear();
                };
                return DragDropRegistry;
            }());
            DragDropRegistry.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{ providedIn: 'root' },] },
            ];
            /** @nocollapse */
            DragDropRegistry.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] }
            ]; };
            /** @nocollapse */ DragDropRegistry.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"])({ factory: function DragDropRegistry_Factory() { return new DragDropRegistry(Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"])); }, token: DragDropRegistry, providedIn: "root" });
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Default configuration to be used when creating a `DragRef`.
             * @type {?}
             */
            var DEFAULT_CONFIG = {
                dragStartThreshold: 5,
                pointerDirectionChangeThreshold: 5
            };
            /**
             * Service that allows for drag-and-drop functionality to be attached to DOM elements.
             */
            var DragDrop = /** @class */ (function () {
                /**
                 * @param {?} _document
                 * @param {?} _ngZone
                 * @param {?} _viewportRuler
                 * @param {?} _dragDropRegistry
                 */
                function DragDrop(_document, _ngZone, _viewportRuler, _dragDropRegistry) {
                    this._document = _document;
                    this._ngZone = _ngZone;
                    this._viewportRuler = _viewportRuler;
                    this._dragDropRegistry = _dragDropRegistry;
                }
                /**
                 * Turns an element into a draggable item.
                 * @template T
                 * @param {?} element Element to which to attach the dragging functionality.
                 * @param {?=} config Object used to configure the dragging behavior.
                 * @return {?}
                 */
                DragDrop.prototype.createDrag = function (element, config) {
                    if (config === void 0) { config = DEFAULT_CONFIG; }
                    return new DragRef(element, config, this._document, this._ngZone, this._viewportRuler, this._dragDropRegistry);
                };
                /**
                 * Turns an element into a drop list.
                 * @template T
                 * @param {?} element Element to which to attach the drop list functionality.
                 * @return {?}
                 */
                DragDrop.prototype.createDropList = function (element) {
                    return new DropListRef(element, this._dragDropRegistry, this._document, this._ngZone, this._viewportRuler);
                };
                return DragDrop;
            }());
            DragDrop.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{ providedIn: 'root' },] },
            ];
            /** @nocollapse */
            DragDrop.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
                { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ViewportRuler"] },
                { type: DragDropRegistry }
            ]; };
            /** @nocollapse */ DragDrop.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"])({ factory: function DragDrop_Factory() { return new DragDrop(Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(DragDropRegistry)); }, token: DragDrop, providedIn: "root" });
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Injection token that is used to provide a CdkDropList instance to CdkDrag.
             * Used for avoiding circular imports.
             * @type {?}
             */
            var CDK_DROP_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('CDK_DROP_LIST');
            /**
             * Injection token that is used to provide a CdkDropList instance to CdkDrag.
             * Used for avoiding circular imports.
             * @deprecated Use `CDK_DROP_LIST` instead.
             * \@breaking-change 8.0.0
             * @type {?}
             */
            var CDK_DROP_LIST_CONTAINER = CDK_DROP_LIST;
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Injection token that can be used for a `CdkDrag` to provide itself as a parent to the
             * drag-specific child directive (`CdkDragHandle`, `CdkDragPreview` etc.). Used primarily
             * to avoid circular imports.
             * \@docs-private
             * @type {?}
             */
            var CDK_DRAG_PARENT = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('CDK_DRAG_PARENT');
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Handle that can be used to drag and CdkDrag instance.
             */
            var CdkDragHandle = /** @class */ (function () {
                /**
                 * @param {?} element
                 * @param {?=} parentDrag
                 */
                function CdkDragHandle(element, parentDrag) {
                    this.element = element;
                    /**
                     * Emits when the state of the handle has changed.
                     */
                    this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                    this._disabled = false;
                    this._parentDrag = parentDrag;
                    toggleNativeDragInteractions(element.nativeElement, false);
                }
                Object.defineProperty(CdkDragHandle.prototype, "disabled", {
                    /**
                     * Whether starting to drag through this handle is disabled.
                     * @return {?}
                     */
                    get: function () { return this._disabled; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
                        this._stateChanges.next(this);
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @return {?}
                 */
                CdkDragHandle.prototype.ngOnDestroy = function () {
                    this._stateChanges.complete();
                };
                return CdkDragHandle;
            }());
            CdkDragHandle.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                            selector: '[cdkDragHandle]',
                            host: {
                                'class': 'cdk-drag-handle'
                            }
                        },] },
            ];
            /** @nocollapse */
            CdkDragHandle.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [CDK_DRAG_PARENT,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] }
            ]; };
            CdkDragHandle.propDecorators = {
                disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragHandleDisabled',] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Element that will be used as a template for the placeholder of a CdkDrag when
             * it is being dragged. The placeholder is displayed in place of the element being dragged.
             * @template T
             */
            var CdkDragPlaceholder = /** @class */ (function () {
                /**
                 * @param {?} templateRef
                 */
                function CdkDragPlaceholder(templateRef) {
                    this.templateRef = templateRef;
                }
                return CdkDragPlaceholder;
            }());
            CdkDragPlaceholder.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                            selector: 'ng-template[cdkDragPlaceholder]'
                        },] },
            ];
            /** @nocollapse */
            CdkDragPlaceholder.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"] }
            ]; };
            CdkDragPlaceholder.propDecorators = {
                data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Element that will be used as a template for the preview
             * of a CdkDrag when it is being dragged.
             * @template T
             */
            var CdkDragPreview = /** @class */ (function () {
                /**
                 * @param {?} templateRef
                 */
                function CdkDragPreview(templateRef) {
                    this.templateRef = templateRef;
                }
                return CdkDragPreview;
            }());
            CdkDragPreview.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                            selector: 'ng-template[cdkDragPreview]'
                        },] },
            ];
            /** @nocollapse */
            CdkDragPreview.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"] }
            ]; };
            CdkDragPreview.propDecorators = {
                data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Injection token that can be used to configure the behavior of `CdkDrag`.
             * @type {?}
             */
            var CDK_DRAG_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('CDK_DRAG_CONFIG', {
                providedIn: 'root',
                factory: CDK_DRAG_CONFIG_FACTORY
            });
            /**
             * \@docs-private
             * @return {?}
             */
            function CDK_DRAG_CONFIG_FACTORY() {
                return { dragStartThreshold: 5, pointerDirectionChangeThreshold: 5 };
            }
            /**
             * Element that can be moved inside a CdkDropList container.
             * @template T
             */
            var CdkDrag = /** @class */ (function () {
                /**
                 * @param {?} element
                 * @param {?} dropContainer
                 * @param {?} _document
                 * @param {?} _ngZone
                 * @param {?} _viewContainerRef
                 * @param {?} config
                 * @param {?} _dir
                 * @param {?} dragDrop
                 * @param {?} _changeDetectorRef
                 */
                function CdkDrag(element, dropContainer, _document, _ngZone, _viewContainerRef, config, _dir, dragDrop, _changeDetectorRef) {
                    var _this = this;
                    this.element = element;
                    this.dropContainer = dropContainer;
                    this._document = _document;
                    this._ngZone = _ngZone;
                    this._viewContainerRef = _viewContainerRef;
                    this._dir = _dir;
                    this._changeDetectorRef = _changeDetectorRef;
                    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                    /**
                     * Amount of milliseconds to wait after the user has put their
                     * pointer down before starting to drag the element.
                     */
                    this.dragStartDelay = 0;
                    this._disabled = false;
                    /**
                     * Emits when the user starts dragging the item.
                     */
                    this.started = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
                    /**
                     * Emits when the user has released a drag item, before any animations have started.
                     */
                    this.released = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
                    /**
                     * Emits when the user stops dragging an item in the container.
                     */
                    this.ended = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
                    /**
                     * Emits when the user has moved the item into a new container.
                     */
                    this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
                    /**
                     * Emits when the user removes the item its container by dragging it into another container.
                     */
                    this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
                    /**
                     * Emits when the user drops the item inside a container.
                     */
                    this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
                    /**
                     * Emits as the user is dragging the item. Use with caution,
                     * because this event will fire for every pixel that the user has dragged.
                     */
                    this.moved = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](( /**
                     * @param {?} observer
                     * @return {?}
                     */function (observer) {
                        /** @type {?} */
                        var subscription = _this._dragRef.moved.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(( /**
                         * @param {?} movedEvent
                         * @return {?}
                         */function (/**
                         * @param {?} movedEvent
                         * @return {?}
                         */ movedEvent) { return ({
                            source: _this,
                            pointerPosition: movedEvent.pointerPosition,
                            event: movedEvent.event,
                            delta: movedEvent.delta,
                            distance: movedEvent.distance
                        }); }))).subscribe(observer);
                        return ( /**
                         * @return {?}
                         */function () {
                            subscription.unsubscribe();
                        });
                    }));
                    this._dragRef = dragDrop.createDrag(element, config);
                    this._dragRef.data = this;
                    this._syncInputs(this._dragRef);
                    this._handleEvents(this._dragRef);
                }
                Object.defineProperty(CdkDrag.prototype, "boundaryElementSelector", {
                    /**
                     * Selector that will be used to determine the element to which the draggable's position will
                     * be constrained. Matching starts from the element's parent and goes up the DOM until a matching
                     * element has been found
                     * @deprecated Use `boundaryElement` instead.
                     * \@breaking-change 9.0.0
                     * @return {?}
                     */
                    get: function () {
                        return typeof this.boundaryElement === 'string' ? this.boundaryElement : ( /** @type {?} */(undefined));
                    },
                    /**
                     * @param {?} selector
                     * @return {?}
                     */
                    set: function (selector) {
                        this.boundaryElement = selector;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(CdkDrag.prototype, "disabled", {
                    /**
                     * Whether starting to drag this element is disabled.
                     * @return {?}
                     */
                    get: function () {
                        return this._disabled || (this.dropContainer && this.dropContainer.disabled);
                    },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
                        this._dragRef.disabled = this._disabled;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Returns the element that is being used as a placeholder
                 * while the current element is being dragged.
                 * @return {?}
                 */
                CdkDrag.prototype.getPlaceholderElement = function () {
                    return this._dragRef.getPlaceholderElement();
                };
                /**
                 * Returns the root draggable element.
                 * @return {?}
                 */
                CdkDrag.prototype.getRootElement = function () {
                    return this._dragRef.getRootElement();
                };
                /**
                 * Resets a standalone drag item to its initial position.
                 * @return {?}
                 */
                CdkDrag.prototype.reset = function () {
                    this._dragRef.reset();
                };
                /**
                 * Gets the pixel coordinates of the draggable outside of a drop container.
                 * @return {?}
                 */
                CdkDrag.prototype.getFreeDragPosition = function () {
                    return this._dragRef.getFreeDragPosition();
                };
                /**
                 * @return {?}
                 */
                CdkDrag.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    // We need to wait for the zone to stabilize, in order for the reference
                    // element to be in the proper place in the DOM. This is mostly relevant
                    // for draggable elements inside portals since they get stamped out in
                    // their original DOM position and then they get transferred to the portal.
                    this._ngZone.onStable.asObservable()
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed))
                        .subscribe(( /**
                 * @return {?}
                 */function () {
                        _this._updateRootElement();
                        // Listen for any newly-added handles.
                        _this._handles.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(_this._handles), 
                        // Sync the new handles with the DragRef.
                        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(( /**
                         * @param {?} handles
                         * @return {?}
                         */function (handles) {
                            /** @type {?} */
                            var childHandleElements = handles
                                .filter(( /**
                         * @param {?} handle
                         * @return {?}
                         */function (/**
                         * @param {?} handle
                         * @return {?}
                         */ handle) { return handle._parentDrag === _this; }))
                                .map(( /**
                         * @param {?} handle
                         * @return {?}
                         */function (/**
                         * @param {?} handle
                         * @return {?}
                         */ handle) { return handle.element; }));
                            _this._dragRef.withHandles(childHandleElements);
                        })), 
                        // Listen if the state of any of the handles changes.
                        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(( /**
                         * @param {?} handles
                         * @return {?}
                         */function (handles) {
                            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"]).apply(void 0, __spread(handles.map(( /**
                             * @param {?} item
                             * @return {?}
                             */function (/**
                             * @param {?} item
                             * @return {?}
                             */ item) { return item._stateChanges; }))));
                        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this._destroyed)).subscribe(( /**
                         * @param {?} handleInstance
                         * @return {?}
                         */function (/**
                         * @param {?} handleInstance
                         * @return {?}
                         */ handleInstance) {
                            // Enabled/disable the handle that changed in the DragRef.
                            /** @type {?} */
                            var dragRef = _this._dragRef;
                            /** @type {?} */
                            var handle = handleInstance.element.nativeElement;
                            handleInstance.disabled ? dragRef.disableHandle(handle) : dragRef.enableHandle(handle);
                        }));
                        if (_this.freeDragPosition) {
                            _this._dragRef.setFreeDragPosition(_this.freeDragPosition);
                        }
                    }));
                };
                /**
                 * @param {?} changes
                 * @return {?}
                 */
                CdkDrag.prototype.ngOnChanges = function (changes) {
                    /** @type {?} */
                    var rootSelectorChange = changes['rootElementSelector'];
                    /** @type {?} */
                    var positionChange = changes['freeDragPosition'];
                    // We don't have to react to the first change since it's being
                    // handled in `ngAfterViewInit` where it needs to be deferred.
                    if (rootSelectorChange && !rootSelectorChange.firstChange) {
                        this._updateRootElement();
                    }
                    // Skip the first change since it's being handled in `ngAfterViewInit`.
                    if (positionChange && !positionChange.firstChange && this.freeDragPosition) {
                        this._dragRef.setFreeDragPosition(this.freeDragPosition);
                    }
                };
                /**
                 * @return {?}
                 */
                CdkDrag.prototype.ngOnDestroy = function () {
                    this._destroyed.next();
                    this._destroyed.complete();
                    this._dragRef.dispose();
                };
                /**
                 * Syncs the root element with the `DragRef`.
                 * @private
                 * @return {?}
                 */
                CdkDrag.prototype._updateRootElement = function () {
                    /** @type {?} */
                    var element = this.element.nativeElement;
                    /** @type {?} */
                    var rootElement = this.rootElementSelector ?
                        getClosestMatchingAncestor(element, this.rootElementSelector) : element;
                    if (rootElement && rootElement.nodeType !== this._document.ELEMENT_NODE) {
                        throw Error("cdkDrag must be attached to an element node. " +
                            ("Currently attached to \"" + rootElement.nodeName + "\"."));
                    }
                    this._dragRef.withRootElement(rootElement || element);
                };
                /**
                 * Gets the boundary element, based on the `boundaryElement` value.
                 * @private
                 * @return {?}
                 */
                CdkDrag.prototype._getBoundaryElement = function () {
                    /** @type {?} */
                    var boundary = this.boundaryElement;
                    if (!boundary) {
                        return null;
                    }
                    if (typeof boundary === 'string') {
                        return getClosestMatchingAncestor(this.element.nativeElement, boundary);
                    }
                    /** @type {?} */
                    var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(boundary);
                    if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["isDevMode"])() && !element.contains(this.element.nativeElement)) {
                        throw Error('Draggable element is not inside of the node passed into cdkDragBoundary.');
                    }
                    return element;
                };
                /**
                 * Syncs the inputs of the CdkDrag with the options of the underlying DragRef.
                 * @private
                 * @param {?} ref
                 * @return {?}
                 */
                CdkDrag.prototype._syncInputs = function (ref) {
                    var _this = this;
                    ref.beforeStarted.subscribe(( /**
                     * @return {?}
                     */function () {
                        if (!ref.isDragging()) {
                            /** @type {?} */
                            var dir = _this._dir;
                            /** @type {?} */
                            var placeholder = _this._placeholderTemplate ? {
                                template: _this._placeholderTemplate.templateRef,
                                context: _this._placeholderTemplate.data,
                                viewContainer: _this._viewContainerRef
                            } : null;
                            /** @type {?} */
                            var preview = _this._previewTemplate ? {
                                template: _this._previewTemplate.templateRef,
                                context: _this._previewTemplate.data,
                                viewContainer: _this._viewContainerRef
                            } : null;
                            ref.disabled = _this.disabled;
                            ref.lockAxis = _this.lockAxis;
                            ref.dragStartDelay = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(_this.dragStartDelay);
                            ref.constrainPosition = _this.constrainPosition;
                            ref
                                .withBoundaryElement(_this._getBoundaryElement())
                                .withPlaceholderTemplate(placeholder)
                                .withPreviewTemplate(preview);
                            if (dir) {
                                ref.withDirection(dir.value);
                            }
                        }
                    }));
                };
                /**
                 * Handles the events from the underlying `DragRef`.
                 * @private
                 * @param {?} ref
                 * @return {?}
                 */
                CdkDrag.prototype._handleEvents = function (ref) {
                    var _this = this;
                    ref.started.subscribe(( /**
                     * @return {?}
                     */function () {
                        _this.started.emit({ source: _this });
                        // Since all of these events run outside of change detection,
                        // we need to ensure that everything is marked correctly.
                        _this._changeDetectorRef.markForCheck();
                    }));
                    ref.released.subscribe(( /**
                     * @return {?}
                     */function () {
                        _this.released.emit({ source: _this });
                    }));
                    ref.ended.subscribe(( /**
                     * @param {?} event
                     * @return {?}
                     */function (/**
                     * @param {?} event
                     * @return {?}
                     */ event) {
                        _this.ended.emit({ source: _this, distance: event.distance });
                        // Since all of these events run outside of change detection,
                        // we need to ensure that everything is marked correctly.
                        _this._changeDetectorRef.markForCheck();
                    }));
                    ref.entered.subscribe(( /**
                     * @param {?} event
                     * @return {?}
                     */function (/**
                     * @param {?} event
                     * @return {?}
                     */ event) {
                        _this.entered.emit({
                            container: event.container.data,
                            item: _this,
                            currentIndex: event.currentIndex
                        });
                    }));
                    ref.exited.subscribe(( /**
                     * @param {?} event
                     * @return {?}
                     */function (/**
                     * @param {?} event
                     * @return {?}
                     */ event) {
                        _this.exited.emit({
                            container: event.container.data,
                            item: _this
                        });
                    }));
                    ref.dropped.subscribe(( /**
                     * @param {?} event
                     * @return {?}
                     */function (/**
                     * @param {?} event
                     * @return {?}
                     */ event) {
                        _this.dropped.emit({
                            previousIndex: event.previousIndex,
                            currentIndex: event.currentIndex,
                            previousContainer: event.previousContainer.data,
                            container: event.container.data,
                            isPointerOverContainer: event.isPointerOverContainer,
                            item: _this,
                            distance: event.distance
                        });
                    }));
                };
                return CdkDrag;
            }());
            CdkDrag.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                            selector: '[cdkDrag]',
                            exportAs: 'cdkDrag',
                            host: {
                                'class': 'cdk-drag',
                                '[class.cdk-drag-disabled]': 'disabled',
                                '[class.cdk-drag-dragging]': '_dragRef.isDragging()',
                            },
                            providers: [{ provide: CDK_DRAG_PARENT, useExisting: CdkDrag }]
                        },] },
            ];
            /** @nocollapse */
            CdkDrag.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [CDK_DROP_LIST,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["SkipSelf"] }] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [CDK_DRAG_CONFIG,] }] },
                { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
                { type: DragDrop },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }
            ]; };
            CdkDrag.propDecorators = {
                _handles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [CdkDragHandle, { descendants: true },] }],
                _previewTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"], args: [CdkDragPreview, { static: false },] }],
                _placeholderTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"], args: [CdkDragPlaceholder, { static: false },] }],
                data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragData',] }],
                lockAxis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragLockAxis',] }],
                rootElementSelector: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragRootElement',] }],
                boundaryElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragBoundary',] }],
                dragStartDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragStartDelay',] }],
                freeDragPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragFreeDragPosition',] }],
                disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragDisabled',] }],
                constrainPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragConstrainPosition',] }],
                started: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDragStarted',] }],
                released: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDragReleased',] }],
                ended: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDragEnded',] }],
                entered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDragEntered',] }],
                exited: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDragExited',] }],
                dropped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDragDropped',] }],
                moved: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDragMoved',] }]
            };
            /**
             * Gets the closest ancestor of an element that matches a selector.
             * @param {?} element
             * @param {?} selector
             * @return {?}
             */
            function getClosestMatchingAncestor(element, selector) {
                /** @type {?} */
                var currentElement = ( /** @type {?} */(element.parentElement));
                while (currentElement) {
                    // IE doesn't support `matches` so we have to fall back to `msMatchesSelector`.
                    if (currentElement.matches ? currentElement.matches(selector) :
                        (( /** @type {?} */(currentElement))).msMatchesSelector(selector)) {
                        return currentElement;
                    }
                    currentElement = currentElement.parentElement;
                }
                return null;
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Declaratively connects sibling `cdkDropList` instances together. All of the `cdkDropList`
             * elements that are placed inside a `cdkDropListGroup` will be connected to each other
             * automatically. Can be used as an alternative to the `cdkDropListConnectedTo` input
             * from `cdkDropList`.
             * @template T
             */
            var CdkDropListGroup = /** @class */ (function () {
                function CdkDropListGroup() {
                    /**
                     * Drop lists registered inside the group.
                     */
                    this._items = new Set();
                    this._disabled = false;
                }
                Object.defineProperty(CdkDropListGroup.prototype, "disabled", {
                    /**
                     * Whether starting a dragging sequence from inside this group is disabled.
                     * @return {?}
                     */
                    get: function () { return this._disabled; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @return {?}
                 */
                CdkDropListGroup.prototype.ngOnDestroy = function () {
                    this._items.clear();
                };
                return CdkDropListGroup;
            }());
            CdkDropListGroup.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                            selector: '[cdkDropListGroup]',
                            exportAs: 'cdkDropListGroup',
                        },] },
            ];
            CdkDropListGroup.propDecorators = {
                disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListGroupDisabled',] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Counter used to generate unique ids for drop zones.
             * @type {?}
             */
            var _uniqueIdCounter$1 = 0;
            var ɵ0 = undefined;
            // @breaking-change 8.0.0 `CdkDropList` implements `CdkDropListContainer` for backwards
            // compatiblity. The implements clause, as well as all the methods that it enforces can
            // be removed when `CdkDropListContainer` is deleted.
            /**
             * Container that wraps a set of draggable items.
             * @template T
             */
            var CdkDropList = /** @class */ (function () {
                /**
                 * @param {?} element
                 * @param {?} dragDrop
                 * @param {?} _changeDetectorRef
                 * @param {?=} _dir
                 * @param {?=} _group
                 */
                function CdkDropList(element, dragDrop, _changeDetectorRef, _dir, _group) {
                    var _this = this;
                    this.element = element;
                    this._changeDetectorRef = _changeDetectorRef;
                    this._dir = _dir;
                    this._group = _group;
                    /**
                     * Emits when the list has been destroyed.
                     */
                    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                    /**
                     * Other draggable containers that this container is connected to and into which the
                     * container's items can be transferred. Can either be references to other drop containers,
                     * or their unique IDs.
                     */
                    this.connectedTo = [];
                    /**
                     * Direction in which the list is oriented.
                     */
                    this.orientation = 'vertical';
                    /**
                     * Unique ID for the drop zone. Can be used as a reference
                     * in the `connectedTo` of another `CdkDropList`.
                     */
                    this.id = "cdk-drop-list-" + _uniqueIdCounter$1++;
                    this._disabled = false;
                    this._sortingDisabled = false;
                    /**
                     * Function that is used to determine whether an item
                     * is allowed to be moved into a drop container.
                     */
                    this.enterPredicate = ( /**
                     * @return {?}
                     */function () { return true; });
                    /**
                     * Whether to auto-scroll the view when the user moves their pointer close to the edges.
                     */
                    this.autoScrollDisabled = false;
                    /**
                     * Emits when the user drops an item inside the container.
                     */
                    this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
                    /**
                     * Emits when the user has moved a new drag item into this container.
                     */
                    this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
                    /**
                     * Emits when the user removes an item from the container
                     * by dragging it into another container.
                     */
                    this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
                    /**
                     * Emits as the user is swapping items while actively dragging.
                     */
                    this.sorted = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
                    this._dropListRef = dragDrop.createDropList(element);
                    this._dropListRef.data = this;
                    this._dropListRef.enterPredicate = ( /**
                     * @param {?} drag
                     * @param {?} drop
                     * @return {?}
                     */function (drag, drop) {
                        return _this.enterPredicate(drag.data, drop.data);
                    });
                    this._syncInputs(this._dropListRef);
                    this._handleEvents(this._dropListRef);
                    CdkDropList._dropLists.push(this);
                    if (_group) {
                        _group._items.add(this);
                    }
                }
                Object.defineProperty(CdkDropList.prototype, "disabled", {
                    /**
                     * Whether starting a dragging sequence from this container is disabled.
                     * @return {?}
                     */
                    get: function () {
                        return this._disabled || (!!this._group && this._group.disabled);
                    },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(CdkDropList.prototype, "sortingDisabled", {
                    /**
                     * Whether sorting within this drop list is disabled.
                     * @return {?}
                     */
                    get: function () { return this._sortingDisabled; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._sortingDisabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @return {?}
                 */
                CdkDropList.prototype.ngAfterContentInit = function () {
                    var _this = this;
                    this._draggables.changes
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(this._draggables), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed))
                        .subscribe(( /**
                 * @param {?} items
                 * @return {?}
                 */function (items) {
                        _this._dropListRef.withItems(items.map(( /**
                         * @param {?} drag
                         * @return {?}
                         */function (/**
                         * @param {?} drag
                         * @return {?}
                         */ drag) { return drag._dragRef; })));
                    }));
                };
                /**
                 * @return {?}
                 */
                CdkDropList.prototype.ngOnDestroy = function () {
                    /** @type {?} */
                    var index = CdkDropList._dropLists.indexOf(this);
                    if (index > -1) {
                        CdkDropList._dropLists.splice(index, 1);
                    }
                    if (this._group) {
                        this._group._items.delete(this);
                    }
                    this._dropListRef.dispose();
                    this._destroyed.next();
                    this._destroyed.complete();
                };
                /**
                 * Starts dragging an item.
                 * @return {?}
                 */
                CdkDropList.prototype.start = function () {
                    this._dropListRef.start();
                };
                /**
                 * Drops an item into this container.
                 * @param {?} item Item being dropped into the container.
                 * @param {?} currentIndex Index at which the item should be inserted.
                 * @param {?} previousContainer Container from which the item got dragged in.
                 * @param {?} isPointerOverContainer Whether the user's pointer was over the
                 *    container when the item was dropped.
                 * @return {?}
                 */
                CdkDropList.prototype.drop = function (item, currentIndex, previousContainer, isPointerOverContainer) {
                    this._dropListRef.drop(item._dragRef, currentIndex, (( /** @type {?} */(previousContainer)))._dropListRef, isPointerOverContainer);
                };
                /**
                 * Emits an event to indicate that the user moved an item into the container.
                 * @param {?} item Item that was moved into the container.
                 * @param {?} pointerX Position of the item along the X axis.
                 * @param {?} pointerY Position of the item along the Y axis.
                 * @return {?}
                 */
                CdkDropList.prototype.enter = function (item, pointerX, pointerY) {
                    this._dropListRef.enter(item._dragRef, pointerX, pointerY);
                };
                /**
                 * Removes an item from the container after it was dragged into another container by the user.
                 * @param {?} item Item that was dragged out.
                 * @return {?}
                 */
                CdkDropList.prototype.exit = function (item) {
                    this._dropListRef.exit(item._dragRef);
                };
                /**
                 * Figures out the index of an item in the container.
                 * @param {?} item Item whose index should be determined.
                 * @return {?}
                 */
                CdkDropList.prototype.getItemIndex = function (item) {
                    return this._dropListRef.getItemIndex(item._dragRef);
                };
                /**
                 * Sorts an item inside the container based on its position.
                 * @param {?} item Item to be sorted.
                 * @param {?} pointerX Position of the item along the X axis.
                 * @param {?} pointerY Position of the item along the Y axis.
                 * @param {?} pointerDelta Direction in which the pointer is moving along each axis.
                 * @return {?}
                 */
                CdkDropList.prototype._sortItem = function (item, pointerX, pointerY, pointerDelta) {
                    return this._dropListRef._sortItem(item._dragRef, pointerX, pointerY, pointerDelta);
                };
                /**
                 * Figures out whether an item should be moved into a sibling
                 * drop container, based on its current position.
                 * @param {?} item Drag item that is being moved.
                 * @param {?} x Position of the item along the X axis.
                 * @param {?} y Position of the item along the Y axis.
                 * @return {?}
                 */
                CdkDropList.prototype._getSiblingContainerFromPosition = function (item, x, y) {
                    /** @type {?} */
                    var result = this._dropListRef._getSiblingContainerFromPosition(item._dragRef, x, y);
                    return result ? result.data : null;
                };
                /**
                 * Checks whether the user's pointer is positioned over the container.
                 * @param {?} x Pointer position along the X axis.
                 * @param {?} y Pointer position along the Y axis.
                 * @return {?}
                 */
                CdkDropList.prototype._isOverContainer = function (x, y) {
                    return this._dropListRef._isOverContainer(x, y);
                };
                /**
                 * Syncs the inputs of the CdkDropList with the options of the underlying DropListRef.
                 * @private
                 * @param {?} ref
                 * @return {?}
                 */
                CdkDropList.prototype._syncInputs = function (ref) {
                    var _this = this;
                    if (this._dir) {
                        this._dir.change
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(this._dir.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed))
                            .subscribe(( /**
                     * @param {?} value
                     * @return {?}
                     */function (/**
                     * @param {?} value
                     * @return {?}
                     */ value) { return ref.withDirection(value); }));
                    }
                    ref.beforeStarted.subscribe(( /**
                     * @return {?}
                     */function () {
                        /** @type {?} */
                        var siblings = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceArray"])(_this.connectedTo).map(( /**
                         * @param {?} drop
                         * @return {?}
                         */function (/**
                         * @param {?} drop
                         * @return {?}
                         */ drop) {
                            return typeof drop === 'string' ?
                                ( /** @type {?} */(CdkDropList._dropLists.find(( /**
                                 * @param {?} list
                                 * @return {?}
                                 */function (/**
                                 * @param {?} list
                                 * @return {?}
                                 */ list) { return list.id === drop; })))) : drop;
                        }));
                        if (_this._group) {
                            _this._group._items.forEach(( /**
                             * @param {?} drop
                             * @return {?}
                             */function (/**
                             * @param {?} drop
                             * @return {?}
                             */ drop) {
                                if (siblings.indexOf(drop) === -1) {
                                    siblings.push(drop);
                                }
                            }));
                        }
                        ref.disabled = _this.disabled;
                        ref.lockAxis = _this.lockAxis;
                        ref.sortingDisabled = _this.sortingDisabled;
                        ref.autoScrollDisabled = _this.autoScrollDisabled;
                        ref
                            .connectedTo(siblings.filter(( /**
                     * @param {?} drop
                     * @return {?}
                     */function (/**
                     * @param {?} drop
                     * @return {?}
                     */ drop) { return drop && drop !== _this; })).map(( /**
                         * @param {?} list
                         * @return {?}
                         */function (/**
                         * @param {?} list
                         * @return {?}
                         */ list) { return list._dropListRef; })))
                            .withOrientation(_this.orientation);
                    }));
                };
                /**
                 * Handles events from the underlying DropListRef.
                 * @private
                 * @param {?} ref
                 * @return {?}
                 */
                CdkDropList.prototype._handleEvents = function (ref) {
                    var _this = this;
                    ref.beforeStarted.subscribe(( /**
                     * @return {?}
                     */function () {
                        _this._changeDetectorRef.markForCheck();
                    }));
                    ref.entered.subscribe(( /**
                     * @param {?} event
                     * @return {?}
                     */function (/**
                     * @param {?} event
                     * @return {?}
                     */ event) {
                        _this.entered.emit({
                            container: _this,
                            item: event.item.data,
                            currentIndex: event.currentIndex
                        });
                    }));
                    ref.exited.subscribe(( /**
                     * @param {?} event
                     * @return {?}
                     */function (/**
                     * @param {?} event
                     * @return {?}
                     */ event) {
                        _this.exited.emit({
                            container: _this,
                            item: event.item.data
                        });
                        _this._changeDetectorRef.markForCheck();
                    }));
                    ref.sorted.subscribe(( /**
                     * @param {?} event
                     * @return {?}
                     */function (/**
                     * @param {?} event
                     * @return {?}
                     */ event) {
                        _this.sorted.emit({
                            previousIndex: event.previousIndex,
                            currentIndex: event.currentIndex,
                            container: _this,
                            item: event.item.data
                        });
                    }));
                    ref.dropped.subscribe(( /**
                     * @param {?} event
                     * @return {?}
                     */function (/**
                     * @param {?} event
                     * @return {?}
                     */ event) {
                        _this.dropped.emit({
                            previousIndex: event.previousIndex,
                            currentIndex: event.currentIndex,
                            previousContainer: event.previousContainer.data,
                            container: event.container.data,
                            item: event.item.data,
                            isPointerOverContainer: event.isPointerOverContainer,
                            distance: event.distance
                        });
                        // Mark for check since all of these events run outside of change
                        // detection and we're not guaranteed for something else to have triggered it.
                        _this._changeDetectorRef.markForCheck();
                    }));
                };
                return CdkDropList;
            }());
            /**
             * Keeps track of the drop lists that are currently on the page.
             */
            CdkDropList._dropLists = [];
            CdkDropList.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                            selector: '[cdkDropList], cdk-drop-list',
                            exportAs: 'cdkDropList',
                            providers: [
                                // Prevent child drop lists from picking up the same group as their parent.
                                { provide: CdkDropListGroup, useValue: ɵ0 },
                                { provide: CDK_DROP_LIST_CONTAINER, useExisting: CdkDropList },
                            ],
                            host: {
                                'class': 'cdk-drop-list',
                                '[id]': 'id',
                                '[class.cdk-drop-list-disabled]': 'disabled',
                                '[class.cdk-drop-list-dragging]': '_dropListRef.isDragging()',
                                '[class.cdk-drop-list-receiving]': '_dropListRef.isReceiving()',
                            }
                        },] },
            ];
            /** @nocollapse */
            CdkDropList.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
                { type: DragDrop },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
                { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
                { type: CdkDropListGroup, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["SkipSelf"] }] }
            ]; };
            CdkDropList.propDecorators = {
                _draggables: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(( /**
                                         * @return {?}
                                         */function () { return CdkDrag; })), {
                                // Explicitly set to false since some of the logic below makes assumptions about it.
                                // The `.withItems` call below should be updated if we ever need to switch this to `true`.
                                descendants: false
                            },] }],
                connectedTo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListConnectedTo',] }],
                data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListData',] }],
                orientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListOrientation',] }],
                id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
                lockAxis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListLockAxis',] }],
                disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListDisabled',] }],
                sortingDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListSortingDisabled',] }],
                enterPredicate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListEnterPredicate',] }],
                autoScrollDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListAutoScrollDisabled',] }],
                dropped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDropListDropped',] }],
                entered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDropListEntered',] }],
                exited: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDropListExited',] }],
                sorted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDropListSorted',] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var DragDropModule = /** @class */ (function () {
                function DragDropModule() {
                }
                return DragDropModule;
            }());
            DragDropModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                            declarations: [
                                CdkDropList,
                                CdkDropListGroup,
                                CdkDrag,
                                CdkDragHandle,
                                CdkDragPreview,
                                CdkDragPlaceholder,
                            ],
                            exports: [
                                CdkDropList,
                                CdkDropListGroup,
                                CdkDrag,
                                CdkDragHandle,
                                CdkDragPreview,
                                CdkDragPlaceholder,
                            ],
                            providers: [
                                DragDrop,
                            ]
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
            //# sourceMappingURL=drag-drop.js.map
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/angular-material/components/mat-drag-drop/mat-drag-drop.page.html": 
        /*!*******************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/angular-material/components/mat-drag-drop/mat-drag-drop.page.html ***!
          \*******************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Drag Drop</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <div class=\"example-container\">\r\n    <h2>To do</h2>\r\n\r\n    <div cdkDropList #todoList=\"cdkDropList\" [cdkDropListData]=\"todo\" [cdkDropListConnectedTo]=\"[doneList]\"\r\n      class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\r\n      <div class=\"example-box\" *ngFor=\"let item of todo\" cdkDrag>{{item}}</div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"example-container\">\r\n    <h2>Done</h2>\r\n\r\n    <div cdkDropList #doneList=\"cdkDropList\" [cdkDropListData]=\"done\" [cdkDropListConnectedTo]=\"[todoList]\"\r\n      class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\r\n      <div class=\"example-box\" *ngFor=\"let item of done\" cdkDrag>{{item}}</div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"example-box-basic\" cdkDrag>\r\n    Drag me around\r\n  </div>\r\n</ion-content>");
            /***/ 
        }),
        /***/ "./src/app/pages/angular-material/components/mat-drag-drop/mat-drag-drop.module.ts": 
        /*!*****************************************************************************************!*\
          !*** ./src/app/pages/angular-material/components/mat-drag-drop/mat-drag-drop.module.ts ***!
          \*****************************************************************************************/
        /*! exports provided: MatDragDropPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDragDropPageModule", function () { return MatDragDropPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _mat_drag_drop_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mat-drag-drop.page */ "./src/app/pages/angular-material/components/mat-drag-drop/mat-drag-drop.page.ts");
            /* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
            var routes = [
                {
                    path: '',
                    component: _mat_drag_drop_page__WEBPACK_IMPORTED_MODULE_6__["MatDragDropPage"]
                }
            ];
            var MatDragDropPageModule = /** @class */ (function () {
                function MatDragDropPageModule() {
                }
                return MatDragDropPageModule;
            }());
            MatDragDropPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"]
                    ],
                    declarations: [_mat_drag_drop_page__WEBPACK_IMPORTED_MODULE_6__["MatDragDropPage"]]
                })
            ], MatDragDropPageModule);
            /***/ 
        }),
        /***/ "./src/app/pages/angular-material/components/mat-drag-drop/mat-drag-drop.page.scss": 
        /*!*****************************************************************************************!*\
          !*** ./src/app/pages/angular-material/components/mat-drag-drop/mat-drag-drop.page.scss ***!
          \*****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".example-container {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.example-list {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box-basic:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.example-box-basic {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYW5ndWxhci1tYXRlcmlhbC9jb21wb25lbnRzL21hdC1kcmFnLWRyb3AvQzpcXFVzZXJzXFxzYWJhZGlcXERvY3VtZW50c1xcUHJvamV0b3NcXF9pb25pY1xcaW9uaWM0LWNvbXBvbmVudHMvc3JjXFxhcHBcXHBhZ2VzXFxhbmd1bGFyLW1hdGVyaWFsXFxjb21wb25lbnRzXFxtYXQtZHJhZy1kcm9wXFxtYXQtZHJhZy1kcm9wLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYW5ndWxhci1tYXRlcmlhbC9jb21wb25lbnRzL21hdC1kcmFnLWRyb3AvbWF0LWRyYWctZHJvcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxSEFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0Usc0RBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLHNEQUFBO0FDQ0Y7O0FERUE7RUFDRSxxSEFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsdURBQUE7RUFDQSwrR0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYW5ndWxhci1tYXRlcmlhbC9jb21wb25lbnRzL21hdC1kcmFnLWRyb3AvbWF0LWRyYWctZHJvcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIDI1cHggMjVweCAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcblxyXG4uZXhhbXBsZS1saXN0IHtcclxuICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xyXG4gIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5leGFtcGxlLWJveCB7XHJcbiAgcGFkZGluZzogMjBweCAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2NjO1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGN1cnNvcjogbW92ZTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1wcmV2aWV3IHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmNkay1kcmFnLWFuaW1hdGluZyB7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcblxyXG4uZXhhbXBsZS1ib3g6bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uZXhhbXBsZS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmV4YW1wbGUtYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbn1cclxuXHJcbi5leGFtcGxlLWJveC1iYXNpYzphY3RpdmUge1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5cclxuLmV4YW1wbGUtYm94LWJhc2ljIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xyXG4gIGN1cnNvcjogbW92ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG59XHJcbiIsIi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA0MDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgMjVweCAyNXB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLmV4YW1wbGUtbGlzdCB7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZXhhbXBsZS1ib3gge1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2NjO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjdXJzb3I6IG1vdmU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jZGstZHJhZy1wcmV2aWV3IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jZGstZHJhZy1hbmltYXRpbmcge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi5leGFtcGxlLWJveDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uZXhhbXBsZS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmV4YW1wbGUtYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4uZXhhbXBsZS1ib3gtYmFzaWM6YWN0aXZlIHtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uZXhhbXBsZS1ib3gtYmFzaWMge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBjdXJzb3I6IG1vdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDIwMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/pages/angular-material/components/mat-drag-drop/mat-drag-drop.page.ts": 
        /*!***************************************************************************************!*\
          !*** ./src/app/pages/angular-material/components/mat-drag-drop/mat-drag-drop.page.ts ***!
          \***************************************************************************************/
        /*! exports provided: MatDragDropPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDragDropPage", function () { return MatDragDropPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
            var MatDragDropPage = /** @class */ (function () {
                function MatDragDropPage() {
                    this.todo = [
                        'Get to work',
                        'Pick up groceries',
                        'Go home',
                        'Fall asleep'
                    ];
                    this.done = [
                        'Get up',
                        'Brush teeth',
                        'Take a shower',
                        'Check e-mail',
                        'Walk dog'
                    ];
                }
                MatDragDropPage.prototype.ngOnInit = function () {
                };
                MatDragDropPage.prototype.drop = function (event) {
                    if (event.previousContainer === event.container) {
                        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
                    }
                    else {
                        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
                    }
                };
                return MatDragDropPage;
            }());
            MatDragDropPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-mat-drag-drop',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mat-drag-drop.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/angular-material/components/mat-drag-drop/mat-drag-drop.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mat-drag-drop.page.scss */ "./src/app/pages/angular-material/components/mat-drag-drop/mat-drag-drop.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], MatDragDropPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-angular-material-components-mat-drag-drop-mat-drag-drop-module-es2015.js.map
//# sourceMappingURL=pages-angular-material-components-mat-drag-drop-mat-drag-drop-module-es5.js.map
//# sourceMappingURL=pages-angular-material-components-mat-drag-drop-mat-drag-drop-module-es5.js.map