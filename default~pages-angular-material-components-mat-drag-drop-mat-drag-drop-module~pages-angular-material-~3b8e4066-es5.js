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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-angular-material-components-mat-drag-drop-mat-drag-drop-module~pages-angular-material-~3b8e4066"], {
        /***/ "./node_modules/@angular/cdk/esm2015/scrolling.js": 
        /*!********************************************************!*\
          !*** ./node_modules/@angular/cdk/esm2015/scrolling.js ***!
          \********************************************************/
        /*! exports provided: _fixedSizeVirtualScrollStrategyFactory, FixedSizeVirtualScrollStrategy, CdkFixedSizeVirtualScroll, SCROLL_DISPATCHER_PROVIDER_FACTORY, DEFAULT_SCROLL_TIME, ScrollDispatcher, SCROLL_DISPATCHER_PROVIDER, CdkScrollable, ScrollingModule, ScrollDispatchModule, VIEWPORT_RULER_PROVIDER_FACTORY, DEFAULT_RESIZE_TIME, ViewportRuler, VIEWPORT_RULER_PROVIDER, CdkVirtualForOf, VIRTUAL_SCROLL_STRATEGY, CdkVirtualScrollViewport */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_fixedSizeVirtualScrollStrategyFactory", function () { return _fixedSizeVirtualScrollStrategyFactory; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedSizeVirtualScrollStrategy", function () { return FixedSizeVirtualScrollStrategy; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFixedSizeVirtualScroll", function () { return CdkFixedSizeVirtualScroll; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCROLL_DISPATCHER_PROVIDER_FACTORY", function () { return SCROLL_DISPATCHER_PROVIDER_FACTORY; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SCROLL_TIME", function () { return DEFAULT_SCROLL_TIME; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollDispatcher", function () { return ScrollDispatcher; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCROLL_DISPATCHER_PROVIDER", function () { return SCROLL_DISPATCHER_PROVIDER; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkScrollable", function () { return CdkScrollable; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollingModule", function () { return ScrollingModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollDispatchModule", function () { return ScrollDispatchModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEWPORT_RULER_PROVIDER_FACTORY", function () { return VIEWPORT_RULER_PROVIDER_FACTORY; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_RESIZE_TIME", function () { return DEFAULT_RESIZE_TIME; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewportRuler", function () { return ViewportRuler; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEWPORT_RULER_PROVIDER", function () { return VIEWPORT_RULER_PROVIDER; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkVirtualForOf", function () { return CdkVirtualForOf; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIRTUAL_SCROLL_STRATEGY", function () { return VIRTUAL_SCROLL_STRATEGY; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkVirtualScrollViewport", function () { return CdkVirtualScrollViewport; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm2015/coercion.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm2015/platform.js");
            /* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm2015/bidi.js");
            /* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm2015/collections.js");
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
             * The injection token used to specify the virtual scrolling strategy.
             * @type {?}
             */
            var VIRTUAL_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('VIRTUAL_SCROLL_STRATEGY');
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Virtual scrolling strategy for lists with items of known fixed size.
             */
            var FixedSizeVirtualScrollStrategy = /** @class */ (function () {
                /**
                 * @param {?} itemSize The size of the items in the virtually scrolling list.
                 * @param {?} minBufferPx The minimum amount of buffer (in pixels) before needing to render more
                 * @param {?} maxBufferPx The amount of buffer (in pixels) to render when rendering more.
                 */
                function FixedSizeVirtualScrollStrategy(itemSize, minBufferPx, maxBufferPx) {
                    this._scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                    /**
                     * \@docs-private Implemented as part of VirtualScrollStrategy.
                     */
                    this.scrolledIndexChange = this._scrolledIndexChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
                    /**
                     * The attached viewport.
                     */
                    this._viewport = null;
                    this._itemSize = itemSize;
                    this._minBufferPx = minBufferPx;
                    this._maxBufferPx = maxBufferPx;
                }
                /**
                 * Attaches this scroll strategy to a viewport.
                 * @param {?} viewport The viewport to attach this strategy to.
                 * @return {?}
                 */
                FixedSizeVirtualScrollStrategy.prototype.attach = function (viewport) {
                    this._viewport = viewport;
                    this._updateTotalContentSize();
                    this._updateRenderedRange();
                };
                /**
                 * Detaches this scroll strategy from the currently attached viewport.
                 * @return {?}
                 */
                FixedSizeVirtualScrollStrategy.prototype.detach = function () {
                    this._scrolledIndexChange.complete();
                    this._viewport = null;
                };
                /**
                 * Update the item size and buffer size.
                 * @param {?} itemSize The size of the items in the virtually scrolling list.
                 * @param {?} minBufferPx The minimum amount of buffer (in pixels) before needing to render more
                 * @param {?} maxBufferPx The amount of buffer (in pixels) to render when rendering more.
                 * @return {?}
                 */
                FixedSizeVirtualScrollStrategy.prototype.updateItemAndBufferSize = function (itemSize, minBufferPx, maxBufferPx) {
                    if (maxBufferPx < minBufferPx) {
                        throw Error('CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx');
                    }
                    this._itemSize = itemSize;
                    this._minBufferPx = minBufferPx;
                    this._maxBufferPx = maxBufferPx;
                    this._updateTotalContentSize();
                    this._updateRenderedRange();
                };
                /**
                 * \@docs-private Implemented as part of VirtualScrollStrategy.
                 * @return {?}
                 */
                FixedSizeVirtualScrollStrategy.prototype.onContentScrolled = function () {
                    this._updateRenderedRange();
                };
                /**
                 * \@docs-private Implemented as part of VirtualScrollStrategy.
                 * @return {?}
                 */
                FixedSizeVirtualScrollStrategy.prototype.onDataLengthChanged = function () {
                    this._updateTotalContentSize();
                    this._updateRenderedRange();
                };
                /**
                 * \@docs-private Implemented as part of VirtualScrollStrategy.
                 * @return {?}
                 */
                FixedSizeVirtualScrollStrategy.prototype.onContentRendered = function () { };
                /**
                 * \@docs-private Implemented as part of VirtualScrollStrategy.
                 * @return {?}
                 */
                FixedSizeVirtualScrollStrategy.prototype.onRenderedOffsetChanged = function () { };
                /**
                 * Scroll to the offset for the given index.
                 * @param {?} index The index of the element to scroll to.
                 * @param {?} behavior The ScrollBehavior to use when scrolling.
                 * @return {?}
                 */
                FixedSizeVirtualScrollStrategy.prototype.scrollToIndex = function (index, behavior) {
                    if (this._viewport) {
                        this._viewport.scrollToOffset(index * this._itemSize, behavior);
                    }
                };
                /**
                 * Update the viewport's total content size.
                 * @private
                 * @return {?}
                 */
                FixedSizeVirtualScrollStrategy.prototype._updateTotalContentSize = function () {
                    if (!this._viewport) {
                        return;
                    }
                    this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
                };
                /**
                 * Update the viewport's rendered range.
                 * @private
                 * @return {?}
                 */
                FixedSizeVirtualScrollStrategy.prototype._updateRenderedRange = function () {
                    if (!this._viewport) {
                        return;
                    }
                    /** @type {?} */
                    var scrollOffset = this._viewport.measureScrollOffset();
                    /** @type {?} */
                    var firstVisibleIndex = scrollOffset / this._itemSize;
                    /** @type {?} */
                    var renderedRange = this._viewport.getRenderedRange();
                    /** @type {?} */
                    var newRange = { start: renderedRange.start, end: renderedRange.end };
                    /** @type {?} */
                    var viewportSize = this._viewport.getViewportSize();
                    /** @type {?} */
                    var dataLength = this._viewport.getDataLength();
                    /** @type {?} */
                    var startBuffer = scrollOffset - newRange.start * this._itemSize;
                    if (startBuffer < this._minBufferPx && newRange.start != 0) {
                        /** @type {?} */
                        var expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
                        newRange.start = Math.max(0, newRange.start - expandStart);
                        newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
                    }
                    else {
                        /** @type {?} */
                        var endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);
                        if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
                            /** @type {?} */
                            var expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);
                            if (expandEnd > 0) {
                                newRange.end = Math.min(dataLength, newRange.end + expandEnd);
                                newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
                            }
                        }
                    }
                    this._viewport.setRenderedRange(newRange);
                    this._viewport.setRenderedContentOffset(this._itemSize * newRange.start);
                    this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
                };
                return FixedSizeVirtualScrollStrategy;
            }());
            /**
             * Provider factory for `FixedSizeVirtualScrollStrategy` that simply extracts the already created
             * `FixedSizeVirtualScrollStrategy` from the given directive.
             * @param {?} fixedSizeDir The instance of `CdkFixedSizeVirtualScroll` to extract the
             *     `FixedSizeVirtualScrollStrategy` from.
             * @return {?}
             */
            function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
                return fixedSizeDir._scrollStrategy;
            }
            /**
             * A virtual scroll strategy that supports fixed-size items.
             */
            var CdkFixedSizeVirtualScroll = /** @class */ (function () {
                function CdkFixedSizeVirtualScroll() {
                    this._itemSize = 20;
                    this._minBufferPx = 100;
                    this._maxBufferPx = 200;
                    /**
                     * The scroll strategy used by this directive.
                     */
                    this._scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
                }
                Object.defineProperty(CdkFixedSizeVirtualScroll.prototype, "itemSize", {
                    /**
                     * The size of the items in the list (in pixels).
                     * @return {?}
                     */
                    get: function () { return this._itemSize; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) { this._itemSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(value); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(CdkFixedSizeVirtualScroll.prototype, "minBufferPx", {
                    /**
                     * The minimum amount of buffer rendered beyond the viewport (in pixels).
                     * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
                     * @return {?}
                     */
                    get: function () { return this._minBufferPx; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) { this._minBufferPx = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(value); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(CdkFixedSizeVirtualScroll.prototype, "maxBufferPx", {
                    /**
                     * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
                     * @return {?}
                     */
                    get: function () { return this._maxBufferPx; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) { this._maxBufferPx = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(value); },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @return {?}
                 */
                CdkFixedSizeVirtualScroll.prototype.ngOnChanges = function () {
                    this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
                };
                return CdkFixedSizeVirtualScroll;
            }());
            CdkFixedSizeVirtualScroll.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'cdk-virtual-scroll-viewport[itemSize]',
                            providers: [{
                                    provide: VIRTUAL_SCROLL_STRATEGY,
                                    useFactory: _fixedSizeVirtualScrollStrategyFactory,
                                    deps: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                                             * @return {?}
                                             */function () { return CdkFixedSizeVirtualScroll; }))],
                                }],
                        },] },
            ];
            CdkFixedSizeVirtualScroll.propDecorators = {
                itemSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                minBufferPx: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                maxBufferPx: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Time in ms to throttle the scrolling events by default.
             * @type {?}
             */
            var DEFAULT_SCROLL_TIME = 20;
            /**
             * Service contained all registered Scrollable references and emits an event when any one of the
             * Scrollable references emit a scrolled event.
             */
            var ScrollDispatcher = /** @class */ (function () {
                /**
                 * @param {?} _ngZone
                 * @param {?} _platform
                 */
                function ScrollDispatcher(_ngZone, _platform) {
                    this._ngZone = _ngZone;
                    this._platform = _platform;
                    /**
                     * Subject for notifying that a registered scrollable reference element has been scrolled.
                     */
                    this._scrolled = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                    /**
                     * Keeps track of the global `scroll` and `resize` subscriptions.
                     */
                    this._globalSubscription = null;
                    /**
                     * Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards.
                     */
                    this._scrolledCount = 0;
                    /**
                     * Map of all the scrollable references that are registered with the service and their
                     * scroll event subscriptions.
                     */
                    this.scrollContainers = new Map();
                }
                /**
                 * Registers a scrollable instance with the service and listens for its scrolled events. When the
                 * scrollable is scrolled, the service emits the event to its scrolled observable.
                 * @param {?} scrollable Scrollable instance to be registered.
                 * @return {?}
                 */
                ScrollDispatcher.prototype.register = function (scrollable) {
                    var _this = this;
                    if (!this.scrollContainers.has(scrollable)) {
                        this.scrollContainers.set(scrollable, scrollable.elementScrolled()
                            .subscribe(( /**
                     * @return {?}
                     */function () { return _this._scrolled.next(scrollable); })));
                    }
                };
                /**
                 * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
                 * @param {?} scrollable Scrollable instance to be deregistered.
                 * @return {?}
                 */
                ScrollDispatcher.prototype.deregister = function (scrollable) {
                    /** @type {?} */
                    var scrollableReference = this.scrollContainers.get(scrollable);
                    if (scrollableReference) {
                        scrollableReference.unsubscribe();
                        this.scrollContainers.delete(scrollable);
                    }
                };
                /**
                 * Returns an observable that emits an event whenever any of the registered Scrollable
                 * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
                 * to override the default "throttle" time.
                 *
                 * **Note:** in order to avoid hitting change detection for every scroll event,
                 * all of the events emitted from this stream will be run outside the Angular zone.
                 * If you need to update any data bindings as a result of a scroll event, you have
                 * to run the callback using `NgZone.run`.
                 * @param {?=} auditTimeInMs
                 * @return {?}
                 */
                ScrollDispatcher.prototype.scrolled = function (auditTimeInMs) {
                    var _this = this;
                    if (auditTimeInMs === void 0) { auditTimeInMs = DEFAULT_SCROLL_TIME; }
                    if (!this._platform.isBrowser) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
                    }
                    return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](( /**
                     * @param {?} observer
                     * @return {?}
                     */function (observer) {
                        if (!_this._globalSubscription) {
                            _this._addGlobalListener();
                        }
                        // In the case of a 0ms delay, use an observable without auditTime
                        // since it does add a perceptible delay in processing overhead.
                        /** @type {?} */
                        var subscription = auditTimeInMs > 0 ?
                            _this._scrolled.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(auditTimeInMs)).subscribe(observer) :
                            _this._scrolled.subscribe(observer);
                        _this._scrolledCount++;
                        return ( /**
                         * @return {?}
                         */function () {
                            subscription.unsubscribe();
                            _this._scrolledCount--;
                            if (!_this._scrolledCount) {
                                _this._removeGlobalListener();
                            }
                        });
                    }));
                };
                /**
                 * @return {?}
                 */
                ScrollDispatcher.prototype.ngOnDestroy = function () {
                    var _this = this;
                    this._removeGlobalListener();
                    this.scrollContainers.forEach(( /**
                     * @param {?} _
                     * @param {?} container
                     * @return {?}
                     */function (_, container) { return _this.deregister(container); }));
                    this._scrolled.complete();
                };
                /**
                 * Returns an observable that emits whenever any of the
                 * scrollable ancestors of an element are scrolled.
                 * @param {?} elementRef Element whose ancestors to listen for.
                 * @param {?=} auditTimeInMs Time to throttle the scroll events.
                 * @return {?}
                 */
                ScrollDispatcher.prototype.ancestorScrolled = function (elementRef, auditTimeInMs) {
                    /** @type {?} */
                    var ancestors = this.getAncestorScrollContainers(elementRef);
                    return this.scrolled(auditTimeInMs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(( /**
                     * @param {?} target
                     * @return {?}
                     */function (/**
                     * @param {?} target
                     * @return {?}
                     */ target) {
                        return !target || ancestors.indexOf(target) > -1;
                    })));
                };
                /**
                 * Returns all registered Scrollables that contain the provided element.
                 * @param {?} elementRef
                 * @return {?}
                 */
                ScrollDispatcher.prototype.getAncestorScrollContainers = function (elementRef) {
                    var _this = this;
                    /** @type {?} */
                    var scrollingContainers = [];
                    this.scrollContainers.forEach(( /**
                     * @param {?} _subscription
                     * @param {?} scrollable
                     * @return {?}
                     */function (_subscription, scrollable) {
                        if (_this._scrollableContainsElement(scrollable, elementRef)) {
                            scrollingContainers.push(scrollable);
                        }
                    }));
                    return scrollingContainers;
                };
                /**
                 * Returns true if the element is contained within the provided Scrollable.
                 * @private
                 * @param {?} scrollable
                 * @param {?} elementRef
                 * @return {?}
                 */
                ScrollDispatcher.prototype._scrollableContainsElement = function (scrollable, elementRef) {
                    /** @type {?} */
                    var element = elementRef.nativeElement;
                    /** @type {?} */
                    var scrollableElement = scrollable.getElementRef().nativeElement;
                    // Traverse through the element parents until we reach null, checking if any of the elements
                    // are the scrollable's element.
                    do {
                        if (element == scrollableElement) {
                            return true;
                        }
                    } while (element = ( /** @type {?} */(element)).parentElement);
                    return false;
                };
                /**
                 * Sets up the global scroll listeners.
                 * @private
                 * @return {?}
                 */
                ScrollDispatcher.prototype._addGlobalListener = function () {
                    var _this = this;
                    this._globalSubscription = this._ngZone.runOutsideAngular(( /**
                     * @return {?}
                     */function () {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window.document, 'scroll').subscribe(( /**
                         * @return {?}
                         */function () { return _this._scrolled.next(); }));
                    }));
                };
                /**
                 * Cleans up the global scroll listener.
                 * @private
                 * @return {?}
                 */
                ScrollDispatcher.prototype._removeGlobalListener = function () {
                    if (this._globalSubscription) {
                        this._globalSubscription.unsubscribe();
                        this._globalSubscription = null;
                    }
                };
                return ScrollDispatcher;
            }());
            ScrollDispatcher.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
            ];
            /** @nocollapse */
            ScrollDispatcher.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
                { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
            ]; };
            /** @nocollapse */ ScrollDispatcher.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function ScrollDispatcher_Factory() { return new ScrollDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"])); }, token: ScrollDispatcher, providedIn: "root" });
            /**
             * \@docs-private \@deprecated \@breaking-change 8.0.0
             * @param {?} parentDispatcher
             * @param {?} ngZone
             * @param {?} platform
             * @return {?}
             */
            function SCROLL_DISPATCHER_PROVIDER_FACTORY(parentDispatcher, ngZone, platform) {
                return parentDispatcher || new ScrollDispatcher(ngZone, platform);
            }
            /**
             * \@docs-private \@deprecated \@breaking-change 8.0.0
             * @type {?}
             */
            var SCROLL_DISPATCHER_PROVIDER = {
                // If there is already a ScrollDispatcher available, use that. Otherwise, provide a new one.
                provide: ScrollDispatcher,
                deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), ScrollDispatcher], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]],
                useFactory: SCROLL_DISPATCHER_PROVIDER_FACTORY
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Sends an event when the directive's element is scrolled. Registers itself with the
             * ScrollDispatcher service to include itself as part of its collection of scrolling events that it
             * can be listened to through the service.
             */
            var CdkScrollable = /** @class */ (function () {
                /**
                 * @param {?} elementRef
                 * @param {?} scrollDispatcher
                 * @param {?} ngZone
                 * @param {?=} dir
                 */
                function CdkScrollable(elementRef, scrollDispatcher, ngZone, dir) {
                    var _this = this;
                    this.elementRef = elementRef;
                    this.scrollDispatcher = scrollDispatcher;
                    this.ngZone = ngZone;
                    this.dir = dir;
                    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                    this._elementScrolled = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](( /**
                     * @param {?} observer
                     * @return {?}
                     */function (observer) { return _this.ngZone.runOutsideAngular(( /**
                     * @return {?}
                     */function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(_this.elementRef.nativeElement, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this._destroyed))
                        .subscribe(observer); })); }));
                }
                /**
                 * @return {?}
                 */
                CdkScrollable.prototype.ngOnInit = function () {
                    this.scrollDispatcher.register(this);
                };
                /**
                 * @return {?}
                 */
                CdkScrollable.prototype.ngOnDestroy = function () {
                    this.scrollDispatcher.deregister(this);
                    this._destroyed.next();
                    this._destroyed.complete();
                };
                /**
                 * Returns observable that emits when a scroll event is fired on the host element.
                 * @return {?}
                 */
                CdkScrollable.prototype.elementScrolled = function () {
                    return this._elementScrolled;
                };
                /**
                 * Gets the ElementRef for the viewport.
                 * @return {?}
                 */
                CdkScrollable.prototype.getElementRef = function () {
                    return this.elementRef;
                };
                /**
                 * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
                 * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
                 * left and right always refer to the left and right side of the scrolling container irrespective
                 * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
                 * in an RTL context.
                 * @param {?} options specified the offsets to scroll to.
                 * @return {?}
                 */
                CdkScrollable.prototype.scrollTo = function (options) {
                    /** @type {?} */
                    var el = this.elementRef.nativeElement;
                    /** @type {?} */
                    var isRtl = this.dir && this.dir.value == 'rtl';
                    // Rewrite start & end offsets as right or left offsets.
                    options.left = options.left == null ? (isRtl ? options.end : options.start) : options.left;
                    options.right = options.right == null ? (isRtl ? options.start : options.end) : options.right;
                    // Rewrite the bottom offset as a top offset.
                    if (options.bottom != null) {
                        (( /** @type {?} */(options))).top =
                            el.scrollHeight - el.clientHeight - options.bottom;
                    }
                    // Rewrite the right offset as a left offset.
                    if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() != _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].NORMAL) {
                        if (options.left != null) {
                            (( /** @type {?} */(options))).right =
                                el.scrollWidth - el.clientWidth - options.left;
                        }
                        if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].INVERTED) {
                            options.left = options.right;
                        }
                        else if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].NEGATED) {
                            options.left = options.right ? -options.right : options.right;
                        }
                    }
                    else {
                        if (options.right != null) {
                            (( /** @type {?} */(options))).left =
                                el.scrollWidth - el.clientWidth - options.right;
                        }
                    }
                    this._applyScrollToOptions(options);
                };
                /**
                 * @private
                 * @param {?} options
                 * @return {?}
                 */
                CdkScrollable.prototype._applyScrollToOptions = function (options) {
                    /** @type {?} */
                    var el = this.elementRef.nativeElement;
                    if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["supportsScrollBehavior"])()) {
                        el.scrollTo(options);
                    }
                    else {
                        if (options.top != null) {
                            el.scrollTop = options.top;
                        }
                        if (options.left != null) {
                            el.scrollLeft = options.left;
                        }
                    }
                };
                /**
                 * Measures the scroll offset relative to the specified edge of the viewport. This method can be
                 * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
                 * about what scrollLeft means in RTL. The values returned by this method are normalized such that
                 * left and right always refer to the left and right side of the scrolling container irrespective
                 * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
                 * in an RTL context.
                 * @param {?} from The edge to measure from.
                 * @return {?}
                 */
                CdkScrollable.prototype.measureScrollOffset = function (from) {
                    /** @type {?} */
                    var LEFT = 'left';
                    /** @type {?} */
                    var RIGHT = 'right';
                    /** @type {?} */
                    var el = this.elementRef.nativeElement;
                    if (from == 'top') {
                        return el.scrollTop;
                    }
                    if (from == 'bottom') {
                        return el.scrollHeight - el.clientHeight - el.scrollTop;
                    }
                    // Rewrite start & end as left or right offsets.
                    /** @type {?} */
                    var isRtl = this.dir && this.dir.value == 'rtl';
                    if (from == 'start') {
                        from = isRtl ? RIGHT : LEFT;
                    }
                    else if (from == 'end') {
                        from = isRtl ? LEFT : RIGHT;
                    }
                    if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].INVERTED) {
                        // For INVERTED, scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and
                        // 0 when scrolled all the way right.
                        if (from == LEFT) {
                            return el.scrollWidth - el.clientWidth - el.scrollLeft;
                        }
                        else {
                            return el.scrollLeft;
                        }
                    }
                    else if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].NEGATED) {
                        // For NEGATED, scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and
                        // 0 when scrolled all the way right.
                        if (from == LEFT) {
                            return el.scrollLeft + el.scrollWidth - el.clientWidth;
                        }
                        else {
                            return -el.scrollLeft;
                        }
                    }
                    else {
                        // For NORMAL, as well as non-RTL contexts, scrollLeft is 0 when scrolled all the way left and
                        // (scrollWidth - clientWidth) when scrolled all the way right.
                        if (from == LEFT) {
                            return el.scrollLeft;
                        }
                        else {
                            return el.scrollWidth - el.clientWidth - el.scrollLeft;
                        }
                    }
                };
                return CdkScrollable;
            }());
            CdkScrollable.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[cdk-scrollable], [cdkScrollable]'
                        },] },
            ];
            /** @nocollapse */
            CdkScrollable.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
                { type: ScrollDispatcher },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
                { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
            ]; };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Checks if the given ranges are equal.
             * @param {?} r1
             * @param {?} r2
             * @return {?}
             */
            function rangesEqual(r1, r2) {
                return r1.start == r2.start && r1.end == r2.end;
            }
            /**
             * Scheduler to be used for scroll events. Needs to fall back to
             * something that doesn't rely on requestAnimationFrame on environments
             * that don't support it (e.g. server-side rendering).
             * @type {?}
             */
            var SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"] : rxjs__WEBPACK_IMPORTED_MODULE_2__["asapScheduler"];
            /**
             * A viewport that virtualizes its scrolling with the help of `CdkVirtualForOf`.
             */
            var CdkVirtualScrollViewport = /** @class */ (function (_super) {
                __extends(CdkVirtualScrollViewport, _super);
                /**
                 * @param {?} elementRef
                 * @param {?} _changeDetectorRef
                 * @param {?} ngZone
                 * @param {?} _scrollStrategy
                 * @param {?} dir
                 * @param {?} scrollDispatcher
                 */
                function CdkVirtualScrollViewport(elementRef, _changeDetectorRef, ngZone, _scrollStrategy, dir, scrollDispatcher) {
                    var _this = _super.call(this, elementRef, scrollDispatcher, ngZone, dir) || this;
                    _this.elementRef = elementRef;
                    _this._changeDetectorRef = _changeDetectorRef;
                    _this._scrollStrategy = _scrollStrategy;
                    /**
                     * Emits when the viewport is detached from a CdkVirtualForOf.
                     */
                    _this._detachedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                    /**
                     * Emits when the rendered range changes.
                     */
                    _this._renderedRangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                    _this._orientation = 'vertical';
                    // Note: we don't use the typical EventEmitter here because we need to subscribe to the scroll
                    // strategy lazily (i.e. only if the user is actually listening to the events). We do this because
                    // depending on how the strategy calculates the scrolled index, it may come at a cost to
                    // performance.
                    /**
                     * Emits when the index of the first element visible in the viewport changes.
                     */
                    _this.scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](( /**
                     * @param {?} observer
                     * @return {?}
                     */function (observer) { return _this._scrollStrategy.scrolledIndexChange.subscribe(( /**
                     * @param {?} index
                     * @return {?}
                     */function (/**
                     * @param {?} index
                     * @return {?}
                     */ index) { return Promise.resolve().then(( /**
                     * @return {?}
                     */function () { return _this.ngZone.run(( /**
                     * @return {?}
                     */function () { return observer.next(index); })); })); })); }));
                    /**
                     * A stream that emits whenever the rendered range changes.
                     */
                    _this.renderedRangeStream = _this._renderedRangeSubject.asObservable();
                    /**
                     * The total size of all content (in pixels), including content that is not currently rendered.
                     */
                    _this._totalContentSize = 0;
                    /**
                     * A string representing the `style.width` property value to be used for the spacer element.
                     */
                    _this._totalContentWidth = '';
                    /**
                     * A string representing the `style.height` property value to be used for the spacer element.
                     */
                    _this._totalContentHeight = '';
                    /**
                     * The currently rendered range of indices.
                     */
                    _this._renderedRange = { start: 0, end: 0 };
                    /**
                     * The length of the data bound to this viewport (in number of items).
                     */
                    _this._dataLength = 0;
                    /**
                     * The size of the viewport (in pixels).
                     */
                    _this._viewportSize = 0;
                    /**
                     * The last rendered content offset that was set.
                     */
                    _this._renderedContentOffset = 0;
                    /**
                     * Whether the last rendered content offset was to the end of the content (and therefore needs to
                     * be rewritten as an offset to the start of the content).
                     */
                    _this._renderedContentOffsetNeedsRewrite = false;
                    /**
                     * Whether there is a pending change detection cycle.
                     */
                    _this._isChangeDetectionPending = false;
                    /**
                     * A list of functions to run after the next change detection cycle.
                     */
                    _this._runAfterChangeDetection = [];
                    if (!_scrollStrategy) {
                        throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
                    }
                    return _this;
                }
                Object.defineProperty(CdkVirtualScrollViewport.prototype, "orientation", {
                    /**
                     * The direction the viewport scrolls.
                     * @return {?}
                     */
                    get: function () {
                        return this._orientation;
                    },
                    /**
                     * @param {?} orientation
                     * @return {?}
                     */
                    set: function (orientation) {
                        if (this._orientation !== orientation) {
                            this._orientation = orientation;
                            this._calculateSpacerSize();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @return {?}
                 */
                CdkVirtualScrollViewport.prototype.ngOnInit = function () {
                    var _this = this;
                    _super.prototype.ngOnInit.call(this);
                    // It's still too early to measure the viewport at this point. Deferring with a promise allows
                    // the Viewport to be rendered with the correct size before we measure. We run this outside the
                    // zone to avoid causing more change detection cycles. We handle the change detection loop
                    // ourselves instead.
                    this.ngZone.runOutsideAngular(( /**
                     * @return {?}
                     */function () { return Promise.resolve().then(( /**
                     * @return {?}
                     */function () {
                        _this._measureViewportSize();
                        _this._scrollStrategy.attach(_this);
                        _this.elementScrolled()
                            .pipe(
                        // Start off with a fake scroll event so we properly detect our initial position.
                        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(( /** @type {?} */(null))), 
                        // Collect multiple events into one until the next animation frame. This way if
                        // there are multiple scroll events in the same frame we only need to recheck
                        // our layout once.
                        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(0, SCROLL_SCHEDULER))
                            .subscribe(( /**
                     * @return {?}
                     */function () { return _this._scrollStrategy.onContentScrolled(); }));
                        _this._markChangeDetectionNeeded();
                    })); }));
                };
                /**
                 * @return {?}
                 */
                CdkVirtualScrollViewport.prototype.ngOnDestroy = function () {
                    this.detach();
                    this._scrollStrategy.detach();
                    // Complete all subjects
                    this._renderedRangeSubject.complete();
                    this._detachedSubject.complete();
                    _super.prototype.ngOnDestroy.call(this);
                };
                /**
                 * Attaches a `CdkVirtualForOf` to this viewport.
                 * @param {?} forOf
                 * @return {?}
                 */
                CdkVirtualScrollViewport.prototype.attach = function (forOf) {
                    var _this = this;
                    if (this._forOf) {
                        throw Error('CdkVirtualScrollViewport is already attached.');
                    }
                    // Subscribe to the data stream of the CdkVirtualForOf to keep track of when the data length
                    // changes. Run outside the zone to avoid triggering change detection, since we're managing the
                    // change detection loop ourselves.
                    this.ngZone.runOutsideAngular(( /**
                     * @return {?}
                     */function () {
                        _this._forOf = forOf;
                        _this._forOf.dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this._detachedSubject)).subscribe(( /**
                         * @param {?} data
                         * @return {?}
                         */function (/**
                         * @param {?} data
                         * @return {?}
                         */ data) {
                            /** @type {?} */
                            var newLength = data.length;
                            if (newLength !== _this._dataLength) {
                                _this._dataLength = newLength;
                                _this._scrollStrategy.onDataLengthChanged();
                            }
                            _this._doChangeDetection();
                        }));
                    }));
                };
                /**
                 * Detaches the current `CdkVirtualForOf`.
                 * @return {?}
                 */
                CdkVirtualScrollViewport.prototype.detach = function () {
                    this._forOf = null;
                    this._detachedSubject.next();
                };
                /**
                 * Gets the length of the data bound to this viewport (in number of items).
                 * @return {?}
                 */
                CdkVirtualScrollViewport.prototype.getDataLength = function () {
                    return this._dataLength;
                };
                /**
                 * Gets the size of the viewport (in pixels).
                 * @return {?}
                 */
                CdkVirtualScrollViewport.prototype.getViewportSize = function () {
                    return this._viewportSize;
                };
                // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
                // cycle happens. I'm being careful to only call it after the render cycle is complete and before
                // setting it to something else, but its error prone and should probably be split into
                // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.
                /**
                 * Get the current rendered range of items.
                 * @return {?}
                 */
                CdkVirtualScrollViewport.prototype.getRenderedRange = function () {
                    return this._renderedRange;
                };
                /**
                 * Sets the total size of all content (in pixels), including content that is not currently
                 * rendered.
                 * @param {?} size
                 * @return {?}
                 */
                CdkVirtualScrollViewport.prototype.setTotalContentSize = function (size) {
                    if (this._totalContentSize !== size) {
                        this._totalContentSize = size;
                        this._calculateSpacerSize();
                        this._markChangeDetectionNeeded();
                    }
                };
                /**
                 * Sets the currently rendered range of indices.
                 * @param {?} range
                 * @return {?}
                 */
                CdkVirtualScrollViewport.prototype.setRenderedRange = function (range) {
                    var _this = this;
                    if (!rangesEqual(this._renderedRange, range)) {
                        this._renderedRangeSubject.next(this._renderedRange = range);
                        this._markChangeDetectionNeeded(( /**
                         * @return {?}
                         */function () { return _this._scrollStrategy.onContentRendered(); }));
                    }
                };
                /**
                 * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
                 * @return {?}
                 */
                CdkVirtualScrollViewport.prototype.getOffsetToRenderedContentStart = function () {
                    return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
                };
                /**
                 * Sets the offset from the start of the viewport to either the start or end of the rendered data
                 * (in pixels).
                 * @param {?} offset
                 * @param {?=} to
                 * @return {?}
                 */
                CdkVirtualScrollViewport.prototype.setRenderedContentOffset = function (offset, to) {
                    var _this = this;
                    if (to === void 0) { to = 'to-start'; }
                    // For a horizontal viewport in a right-to-left language we need to translate along the x-axis
                    // in the negative direction.
                    /** @type {?} */
                    var isRtl = this.dir && this.dir.value == 'rtl';
                    /** @type {?} */
                    var isHorizontal = this.orientation == 'horizontal';
                    /** @type {?} */
                    var axis = isHorizontal ? 'X' : 'Y';
                    /** @type {?} */
                    var axisDirection = isHorizontal && isRtl ? -1 : 1;
                    /** @type {?} */
                    var transform = "translate" + axis + "(" + Number(axisDirection * offset) + "px)";
                    this._renderedContentOffset = offset;
                    if (to === 'to-end') {
                        transform += " translate" + axis + "(-100%)";
                        // The viewport should rewrite this as a `to-start` offset on the next render cycle. Otherwise
                        // elements will appear to expand in the wrong direction (e.g. `mat-expansion-panel` would
                        // expand upward).
                        this._renderedContentOffsetNeedsRewrite = true;
                    }
                    if (this._renderedContentTransform != transform) {
                        // We know this value is safe because we parse `offset` with `Number()` before passing it
                        // into the string.
                        this._renderedContentTransform = transform;
                        this._markChangeDetectionNeeded(( /**
                         * @return {?}
                         */function () {
                            if (_this._renderedContentOffsetNeedsRewrite) {
                                _this._renderedContentOffset -= _this.measureRenderedContentSize();
                                _this._renderedContentOffsetNeedsRewrite = false;
                                _this.setRenderedContentOffset(_this._renderedContentOffset);
                            }
                            else {
                                _this._scrollStrategy.onRenderedOffsetChanged();
                            }
                        }));
                    }
                };
                /**
                 * Scrolls to the given offset from the start of the viewport. Please note that this is not always
                 * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
                 * direction, this would be the equivalent of setting a fictional `scrollRight` property.
                 * @param {?} offset The offset to scroll to.
                 * @param {?=} behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
                 * @return {?}
                 */
                CdkVirtualScrollViewport.prototype.scrollToOffset = function (offset, behavior) {
                    if (behavior === void 0) { behavior = 'auto'; }
                    /** @type {?} */
                    var options = { behavior: behavior };
                    if (this.orientation === 'horizontal') {
                        options.start = offset;
                    }
                    else {
                        options.top = offset;
                    }
                    this.scrollTo(options);
                };
                /**
                 * Scrolls to the offset for the given index.
                 * @param {?} index The index of the element to scroll to.
                 * @param {?=} behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
                 * @return {?}
                 */
                CdkVirtualScrollViewport.prototype.scrollToIndex = function (index, behavior) {
                    if (behavior === void 0) { behavior = 'auto'; }
                    this._scrollStrategy.scrollToIndex(index, behavior);
                };
                /**
                 * Gets the current scroll offset from the start of the viewport (in pixels).
                 * @param {?=} from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
                 *     in horizontal mode.
                 * @return {?}
                 */
                CdkVirtualScrollViewport.prototype.measureScrollOffset = function (from) {
                    return _super.prototype.measureScrollOffset.call(this, from ? from : this.orientation === 'horizontal' ? 'start' : 'top');
                };
                /**
                 * Measure the combined size of all of the rendered items.
                 * @return {?}
                 */
                CdkVirtualScrollViewport.prototype.measureRenderedContentSize = function () {
                    /** @type {?} */
                    var contentEl = this._contentWrapper.nativeElement;
                    return this.orientation === 'horizontal' ? contentEl.offsetWidth : contentEl.offsetHeight;
                };
                /**
                 * Measure the total combined size of the given range. Throws if the range includes items that are
                 * not rendered.
                 * @param {?} range
                 * @return {?}
                 */
                CdkVirtualScrollViewport.prototype.measureRangeSize = function (range) {
                    if (!this._forOf) {
                        return 0;
                    }
                    return this._forOf.measureRangeSize(range, this.orientation);
                };
                /**
                 * Update the viewport dimensions and re-render.
                 * @return {?}
                 */
                CdkVirtualScrollViewport.prototype.checkViewportSize = function () {
                    // TODO: Cleanup later when add logic for handling content resize
                    this._measureViewportSize();
                    this._scrollStrategy.onDataLengthChanged();
                };
                /**
                 * Measure the viewport size.
                 * @private
                 * @return {?}
                 */
                CdkVirtualScrollViewport.prototype._measureViewportSize = function () {
                    /** @type {?} */
                    var viewportEl = this.elementRef.nativeElement;
                    this._viewportSize = this.orientation === 'horizontal' ?
                        viewportEl.clientWidth : viewportEl.clientHeight;
                };
                /**
                 * Queue up change detection to run.
                 * @private
                 * @param {?=} runAfter
                 * @return {?}
                 */
                CdkVirtualScrollViewport.prototype._markChangeDetectionNeeded = function (runAfter) {
                    var _this = this;
                    if (runAfter) {
                        this._runAfterChangeDetection.push(runAfter);
                    }
                    // Use a Promise to batch together calls to `_doChangeDetection`. This way if we set a bunch of
                    // properties sequentially we only have to run `_doChangeDetection` once at the end.
                    if (!this._isChangeDetectionPending) {
                        this._isChangeDetectionPending = true;
                        this.ngZone.runOutsideAngular(( /**
                         * @return {?}
                         */function () { return Promise.resolve().then(( /**
                         * @return {?}
                         */function () {
                            _this._doChangeDetection();
                        })); }));
                    }
                };
                /**
                 * Run change detection.
                 * @private
                 * @return {?}
                 */
                CdkVirtualScrollViewport.prototype._doChangeDetection = function () {
                    var e_1, _a;
                    var _this = this;
                    this._isChangeDetectionPending = false;
                    // Apply changes to Angular bindings. Note: We must call `markForCheck` to run change detection
                    // from the root, since the repeated items are content projected in. Calling `detectChanges`
                    // instead does not properly check the projected content.
                    this.ngZone.run(( /**
                     * @return {?}
                     */function () { return _this._changeDetectorRef.markForCheck(); }));
                    // Apply the content transform. The transform can't be set via an Angular binding because
                    // bypassSecurityTrustStyle is banned in Google. However the value is safe, it's composed of
                    // string literals, a variable that can only be 'X' or 'Y', and user input that is run through
                    // the `Number` function first to coerce it to a numeric value.
                    this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform;
                    /** @type {?} */
                    var runAfterChangeDetection = this._runAfterChangeDetection;
                    this._runAfterChangeDetection = [];
                    try {
                        for (var runAfterChangeDetection_1 = __values(runAfterChangeDetection), runAfterChangeDetection_1_1 = runAfterChangeDetection_1.next(); !runAfterChangeDetection_1_1.done; runAfterChangeDetection_1_1 = runAfterChangeDetection_1.next()) {
                            var fn = runAfterChangeDetection_1_1.value;
                            fn();
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (runAfterChangeDetection_1_1 && !runAfterChangeDetection_1_1.done && (_a = runAfterChangeDetection_1.return)) _a.call(runAfterChangeDetection_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                };
                /**
                 * Calculates the `style.width` and `style.height` for the spacer element.
                 * @private
                 * @return {?}
                 */
                CdkVirtualScrollViewport.prototype._calculateSpacerSize = function () {
                    this._totalContentHeight =
                        this.orientation === 'horizontal' ? '' : this._totalContentSize + "px";
                    this._totalContentWidth =
                        this.orientation === 'horizontal' ? this._totalContentSize + "px" : '';
                };
                return CdkVirtualScrollViewport;
            }(CdkScrollable));
            CdkVirtualScrollViewport.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{ selector: 'cdk-virtual-scroll-viewport',
                            template: "<div #contentWrapper class=\"cdk-virtual-scroll-content-wrapper\"><ng-content></ng-content></div><div class=\"cdk-virtual-scroll-spacer\" [style.width]=\"_totalContentWidth\" [style.height]=\"_totalContentHeight\"></div>",
                            styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:0}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:0}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}"],
                            host: {
                                'class': 'cdk-virtual-scroll-viewport',
                                '[class.cdk-virtual-scroll-orientation-horizontal]': 'orientation === "horizontal"',
                                '[class.cdk-virtual-scroll-orientation-vertical]': 'orientation !== "horizontal"',
                            },
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                            providers: [{
                                    provide: CdkScrollable,
                                    useExisting: CdkVirtualScrollViewport,
                                }]
                        },] },
            ];
            /** @nocollapse */
            CdkVirtualScrollViewport.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [VIRTUAL_SCROLL_STRATEGY,] }] },
                { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
                { type: ScrollDispatcher }
            ]; };
            CdkVirtualScrollViewport.propDecorators = {
                orientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                scrolledIndexChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
                _contentWrapper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['contentWrapper', { static: true },] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Helper to extract size from a DOM Node.
             * @param {?} orientation
             * @param {?} node
             * @return {?}
             */
            function getSize(orientation, node) {
                /** @type {?} */
                var el = ( /** @type {?} */(node));
                if (!el.getBoundingClientRect) {
                    return 0;
                }
                /** @type {?} */
                var rect = el.getBoundingClientRect();
                return orientation == 'horizontal' ? rect.width : rect.height;
            }
            /**
             * A directive similar to `ngForOf` to be used for rendering data inside a virtual scrolling
             * container.
             * @template T
             */
            var CdkVirtualForOf = /** @class */ (function () {
                /**
                 * @param {?} _viewContainerRef
                 * @param {?} _template
                 * @param {?} _differs
                 * @param {?} _viewport
                 * @param {?} ngZone
                 */
                function CdkVirtualForOf(_viewContainerRef, _template, _differs, _viewport, ngZone) {
                    var _this = this;
                    this._viewContainerRef = _viewContainerRef;
                    this._template = _template;
                    this._differs = _differs;
                    this._viewport = _viewport;
                    /**
                     * Emits when the rendered view of the data changes.
                     */
                    this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                    /**
                     * Subject that emits when a new DataSource instance is given.
                     */
                    this._dataSourceChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                    /**
                     * The size of the cache used to store templates that are not being used for re-use later.
                     * Setting the cache size to `0` will disable caching. Defaults to 20 templates.
                     */
                    this.cdkVirtualForTemplateCacheSize = 20;
                    /**
                     * Emits whenever the data in the current DataSource changes.
                     */
                    this.dataStream = this._dataSourceChanges
                        .pipe(
                    // Start off with null `DataSource`.
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(( /** @type {?} */(null))), 
                    // Bundle up the previous and current data sources so we can work with both.
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pairwise"])(), 
                    // Use `_changeDataSource` to disconnect from the previous data source and connect to the
                    // new one, passing back a stream of data changes which we run through `switchMap` to give
                    // us a data stream that emits the latest data from whatever the current `DataSource` is.
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(( /**
                     * @param {?} __0
                     * @return {?}
                     */function (_a) {
                        var _b = __read(_a, 2), prev = _b[0], cur = _b[1];
                        return _this._changeDataSource(prev, cur);
                    })), 
                    // Replay the last emitted data when someone subscribes.
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
                    /**
                     * The differ used to calculate changes to the data.
                     */
                    this._differ = null;
                    /**
                     * The template cache used to hold on ot template instancess that have been stamped out, but don't
                     * currently need to be rendered. These instances will be reused in the future rather than
                     * stamping out brand new ones.
                     */
                    this._templateCache = [];
                    /**
                     * Whether the rendered data should be updated during the next ngDoCheck cycle.
                     */
                    this._needsUpdate = false;
                    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                    this.dataStream.subscribe(( /**
                     * @param {?} data
                     * @return {?}
                     */function (/**
                     * @param {?} data
                     * @return {?}
                     */ data) {
                        _this._data = data;
                        _this._onRenderedDataChange();
                    }));
                    this._viewport.renderedRangeStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(( /**
                     * @param {?} range
                     * @return {?}
                     */function (/**
                     * @param {?} range
                     * @return {?}
                     */ range) {
                        _this._renderedRange = range;
                        ngZone.run(( /**
                         * @return {?}
                         */function () { return _this.viewChange.next(_this._renderedRange); }));
                        _this._onRenderedDataChange();
                    }));
                    this._viewport.attach(this);
                }
                Object.defineProperty(CdkVirtualForOf.prototype, "cdkVirtualForOf", {
                    /**
                     * The DataSource to display.
                     * @return {?}
                     */
                    get: function () {
                        return this._cdkVirtualForOf;
                    },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._cdkVirtualForOf = value;
                        /** @type {?} */
                        var ds = Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["isDataSource"])(value) ? value :
                            // Slice the value if its an NgIterable to ensure we're working with an array.
                            new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["ArrayDataSource"](value instanceof rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"] ? value : Array.prototype.slice.call(value || []));
                        this._dataSourceChanges.next(ds);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(CdkVirtualForOf.prototype, "cdkVirtualForTrackBy", {
                    /**
                     * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
                     * the item and produces a value to be used as the item's identity when tracking changes.
                     * @return {?}
                     */
                    get: function () {
                        return this._cdkVirtualForTrackBy;
                    },
                    /**
                     * @param {?} fn
                     * @return {?}
                     */
                    set: function (fn) {
                        var _this = this;
                        this._needsUpdate = true;
                        this._cdkVirtualForTrackBy = fn ?
                            ( /**
                             * @param {?} index
                             * @param {?} item
                             * @return {?}
                             */function (index, item) { return fn(index + (_this._renderedRange ? _this._renderedRange.start : 0), item); }) :
                            undefined;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(CdkVirtualForOf.prototype, "cdkVirtualForTemplate", {
                    /**
                     * The template used to stamp out new elements.
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        if (value) {
                            this._needsUpdate = true;
                            this._template = value;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Measures the combined size (width for horizontal orientation, height for vertical) of all items
                 * in the specified range. Throws an error if the range includes items that are not currently
                 * rendered.
                 * @param {?} range
                 * @param {?} orientation
                 * @return {?}
                 */
                CdkVirtualForOf.prototype.measureRangeSize = function (range, orientation) {
                    if (range.start >= range.end) {
                        return 0;
                    }
                    if (range.start < this._renderedRange.start || range.end > this._renderedRange.end) {
                        throw Error("Error: attempted to measure an item that isn't rendered.");
                    }
                    // The index into the list of rendered views for the first item in the range.
                    /** @type {?} */
                    var renderedStartIndex = range.start - this._renderedRange.start;
                    // The length of the range we're measuring.
                    /** @type {?} */
                    var rangeLen = range.end - range.start;
                    // Loop over all root nodes for all items in the range and sum up their size.
                    /** @type {?} */
                    var totalSize = 0;
                    /** @type {?} */
                    var i = rangeLen;
                    while (i--) {
                        /** @type {?} */
                        var view = ( /** @type {?} */(this._viewContainerRef.get(i + renderedStartIndex)));
                        /** @type {?} */
                        var j = view ? view.rootNodes.length : 0;
                        while (j--) {
                            totalSize += getSize(orientation, ( /** @type {?} */(view)).rootNodes[j]);
                        }
                    }
                    return totalSize;
                };
                /**
                 * @return {?}
                 */
                CdkVirtualForOf.prototype.ngDoCheck = function () {
                    if (this._differ && this._needsUpdate) {
                        // TODO(mmalerba): We should differentiate needs update due to scrolling and a new portion of
                        // this list being rendered (can use simpler algorithm) vs needs update due to data actually
                        // changing (need to do this diff).
                        /** @type {?} */
                        var changes = this._differ.diff(this._renderedItems);
                        if (!changes) {
                            this._updateContext();
                        }
                        else {
                            this._applyChanges(changes);
                        }
                        this._needsUpdate = false;
                    }
                };
                /**
                 * @return {?}
                 */
                CdkVirtualForOf.prototype.ngOnDestroy = function () {
                    var e_2, _a;
                    this._viewport.detach();
                    this._dataSourceChanges.next();
                    this._dataSourceChanges.complete();
                    this.viewChange.complete();
                    this._destroyed.next();
                    this._destroyed.complete();
                    try {
                        for (var _b = __values(this._templateCache), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var view = _c.value;
                            view.destroy();
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                };
                /**
                 * React to scroll state changes in the viewport.
                 * @private
                 * @return {?}
                 */
                CdkVirtualForOf.prototype._onRenderedDataChange = function () {
                    if (!this._renderedRange) {
                        return;
                    }
                    this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);
                    if (!this._differ) {
                        this._differ = this._differs.find(this._renderedItems).create(this.cdkVirtualForTrackBy);
                    }
                    this._needsUpdate = true;
                };
                /**
                 * Swap out one `DataSource` for another.
                 * @private
                 * @param {?} oldDs
                 * @param {?} newDs
                 * @return {?}
                 */
                CdkVirtualForOf.prototype._changeDataSource = function (oldDs, newDs) {
                    if (oldDs) {
                        oldDs.disconnect(this);
                    }
                    this._needsUpdate = true;
                    return newDs ? newDs.connect(this) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
                };
                /**
                 * Update the `CdkVirtualForOfContext` for all views.
                 * @private
                 * @return {?}
                 */
                CdkVirtualForOf.prototype._updateContext = function () {
                    /** @type {?} */
                    var count = this._data.length;
                    /** @type {?} */
                    var i = this._viewContainerRef.length;
                    while (i--) {
                        /** @type {?} */
                        var view = ( /** @type {?} */(this._viewContainerRef.get(i)));
                        view.context.index = this._renderedRange.start + i;
                        view.context.count = count;
                        this._updateComputedContextProperties(view.context);
                        view.detectChanges();
                    }
                };
                /**
                 * Apply changes to the DOM.
                 * @private
                 * @param {?} changes
                 * @return {?}
                 */
                CdkVirtualForOf.prototype._applyChanges = function (changes) {
                    var _this = this;
                    // Rearrange the views to put them in the right location.
                    changes.forEachOperation(( /**
                     * @param {?} record
                     * @param {?} adjustedPreviousIndex
                     * @param {?} currentIndex
                     * @return {?}
                     */function (record, adjustedPreviousIndex, currentIndex) {
                        if (record.previousIndex == null) { // Item added.
                            // Item added.
                            /** @type {?} */
                            var view = _this._insertViewForNewItem(( /** @type {?} */(currentIndex)));
                            view.context.$implicit = record.item;
                        }
                        else if (currentIndex == null) { // Item removed.
                            _this._cacheView(_this._detachView(( /** @type {?} */(adjustedPreviousIndex))));
                        }
                        else { // Item moved.
                            // Item moved.
                            /** @type {?} */
                            var view = ( /** @type {?} */(_this._viewContainerRef.get(( /** @type {?} */(adjustedPreviousIndex)))));
                            _this._viewContainerRef.move(view, currentIndex);
                            view.context.$implicit = record.item;
                        }
                    }));
                    // Update $implicit for any items that had an identity change.
                    changes.forEachIdentityChange(( /**
                     * @param {?} record
                     * @return {?}
                     */function (record) {
                        /** @type {?} */
                        var view = ( /** @type {?} */(_this._viewContainerRef.get(( /** @type {?} */(record.currentIndex)))));
                        view.context.$implicit = record.item;
                    }));
                    // Update the context variables on all items.
                    /** @type {?} */
                    var count = this._data.length;
                    /** @type {?} */
                    var i = this._viewContainerRef.length;
                    while (i--) {
                        /** @type {?} */
                        var view = ( /** @type {?} */(this._viewContainerRef.get(i)));
                        view.context.index = this._renderedRange.start + i;
                        view.context.count = count;
                        this._updateComputedContextProperties(view.context);
                    }
                };
                /**
                 * Cache the given detached view.
                 * @private
                 * @param {?} view
                 * @return {?}
                 */
                CdkVirtualForOf.prototype._cacheView = function (view) {
                    if (this._templateCache.length < this.cdkVirtualForTemplateCacheSize) {
                        this._templateCache.push(view);
                    }
                    else {
                        /** @type {?} */
                        var index = this._viewContainerRef.indexOf(view);
                        // It's very unlikely that the index will ever be -1, but just in case,
                        // destroy the view on its own, otherwise destroy it through the
                        // container to ensure that all the references are removed.
                        if (index === -1) {
                            view.destroy();
                        }
                        else {
                            this._viewContainerRef.remove(index);
                        }
                    }
                };
                /**
                 * Inserts a view for a new item, either from the cache or by creating a new one.
                 * @private
                 * @param {?} index
                 * @return {?}
                 */
                CdkVirtualForOf.prototype._insertViewForNewItem = function (index) {
                    return this._insertViewFromCache(index) || this._createEmbeddedViewAt(index);
                };
                /**
                 * Update the computed properties on the `CdkVirtualForOfContext`.
                 * @private
                 * @param {?} context
                 * @return {?}
                 */
                CdkVirtualForOf.prototype._updateComputedContextProperties = function (context) {
                    context.first = context.index === 0;
                    context.last = context.index === context.count - 1;
                    context.even = context.index % 2 === 0;
                    context.odd = !context.even;
                };
                /**
                 * Creates a new embedded view and moves it to the given index
                 * @private
                 * @param {?} index
                 * @return {?}
                 */
                CdkVirtualForOf.prototype._createEmbeddedViewAt = function (index) {
                    // Note that it's important that we insert the item directly at the proper index,
                    // rather than inserting it and the moving it in place, because if there's a directive
                    // on the same node that injects the `ViewContainerRef`, Angular will insert another
                    // comment node which can throw off the move when it's being repeated for all items.
                    return this._viewContainerRef.createEmbeddedView(this._template, {
                        $implicit: ( /** @type {?} */(null)),
                        cdkVirtualForOf: this._cdkVirtualForOf,
                        index: -1,
                        count: -1,
                        first: false,
                        last: false,
                        odd: false,
                        even: false
                    }, index);
                };
                /**
                 * Inserts a recycled view from the cache at the given index.
                 * @private
                 * @param {?} index
                 * @return {?}
                 */
                CdkVirtualForOf.prototype._insertViewFromCache = function (index) {
                    /** @type {?} */
                    var cachedView = this._templateCache.pop();
                    if (cachedView) {
                        this._viewContainerRef.insert(cachedView, index);
                    }
                    return cachedView || null;
                };
                /**
                 * Detaches the embedded view at the given index.
                 * @private
                 * @param {?} index
                 * @return {?}
                 */
                CdkVirtualForOf.prototype._detachView = function (index) {
                    return ( /** @type {?} */(this._viewContainerRef.detach(index)));
                };
                return CdkVirtualForOf;
            }());
            CdkVirtualForOf.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[cdkVirtualFor][cdkVirtualForOf]',
                        },] },
            ];
            /** @nocollapse */
            CdkVirtualForOf.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"] },
                { type: CdkVirtualScrollViewport, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
            ]; };
            CdkVirtualForOf.propDecorators = {
                cdkVirtualForOf: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                cdkVirtualForTrackBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                cdkVirtualForTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                cdkVirtualForTemplateCacheSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var ScrollingModule = /** @class */ (function () {
                function ScrollingModule() {
                }
                return ScrollingModule;
            }());
            ScrollingModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                            imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["BidiModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"]],
                            exports: [
                                _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["BidiModule"],
                                CdkFixedSizeVirtualScroll,
                                CdkScrollable,
                                CdkVirtualForOf,
                                CdkVirtualScrollViewport,
                            ],
                            declarations: [
                                CdkFixedSizeVirtualScroll,
                                CdkScrollable,
                                CdkVirtualForOf,
                                CdkVirtualScrollViewport,
                            ],
                        },] },
            ];
            /**
             * @deprecated ScrollDispatchModule has been renamed to ScrollingModule.
             * \@breaking-change 8.0.0 delete this alias
             */
            var ScrollDispatchModule = /** @class */ (function () {
                function ScrollDispatchModule() {
                }
                return ScrollDispatchModule;
            }());
            ScrollDispatchModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                            imports: [ScrollingModule],
                            exports: [ScrollingModule],
                        },] },
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Time in ms to throttle the resize events by default.
             * @type {?}
             */
            var DEFAULT_RESIZE_TIME = 20;
            /**
             * Simple utility for getting the bounds of the browser viewport.
             * \@docs-private
             */
            var ViewportRuler = /** @class */ (function () {
                /**
                 * @param {?} _platform
                 * @param {?} ngZone
                 */
                function ViewportRuler(_platform, ngZone) {
                    var _this = this;
                    this._platform = _platform;
                    ngZone.runOutsideAngular(( /**
                     * @return {?}
                     */function () {
                        _this._change = _platform.isBrowser ?
                            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize'), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'orientationchange')) :
                            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
                        // Note that we need to do the subscription inside `runOutsideAngular`
                        // since subscribing is what causes the event listener to be added.
                        _this._invalidateCache = _this.change().subscribe(( /**
                         * @return {?}
                         */function () { return _this._updateViewportSize(); }));
                    }));
                }
                /**
                 * @return {?}
                 */
                ViewportRuler.prototype.ngOnDestroy = function () {
                    this._invalidateCache.unsubscribe();
                };
                /**
                 * Returns the viewport's width and height.
                 * @return {?}
                 */
                ViewportRuler.prototype.getViewportSize = function () {
                    if (!this._viewportSize) {
                        this._updateViewportSize();
                    }
                    /** @type {?} */
                    var output = { width: this._viewportSize.width, height: this._viewportSize.height };
                    // If we're not on a browser, don't cache the size since it'll be mocked out anyway.
                    if (!this._platform.isBrowser) {
                        this._viewportSize = ( /** @type {?} */(null));
                    }
                    return output;
                };
                /**
                 * Gets a ClientRect for the viewport's bounds.
                 * @return {?}
                 */
                ViewportRuler.prototype.getViewportRect = function () {
                    // Use the document element's bounding rect rather than the window scroll properties
                    // (e.g. pageYOffset, scrollY) due to in issue in Chrome and IE where window scroll
                    // properties and client coordinates (boundingClientRect, clientX/Y, etc.) are in different
                    // conceptual viewports. Under most circumstances these viewports are equivalent, but they
                    // can disagree when the page is pinch-zoomed (on devices that support touch).
                    // See https://bugs.chromium.org/p/chromium/issues/detail?id=489206#c4
                    // We use the documentElement instead of the body because, by default (without a css reset)
                    // browsers typically give the document body an 8px margin, which is not included in
                    // getBoundingClientRect().
                    /** @type {?} */
                    var scrollPosition = this.getViewportScrollPosition();
                    var _a = this.getViewportSize(), width = _a.width, height = _a.height;
                    return {
                        top: scrollPosition.top,
                        left: scrollPosition.left,
                        bottom: scrollPosition.top + height,
                        right: scrollPosition.left + width,
                        height: height,
                        width: width,
                    };
                };
                /**
                 * Gets the (top, left) scroll position of the viewport.
                 * @return {?}
                 */
                ViewportRuler.prototype.getViewportScrollPosition = function () {
                    // While we can get a reference to the fake document
                    // during SSR, it doesn't have getBoundingClientRect.
                    if (!this._platform.isBrowser) {
                        return { top: 0, left: 0 };
                    }
                    // The top-left-corner of the viewport is determined by the scroll position of the document
                    // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
                    // whether `document.body` or `document.documentElement` is the scrolled element, so reading
                    // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
                    // `document.documentElement` works consistently, where the `top` and `left` values will
                    // equal negative the scroll position.
                    /** @type {?} */
                    var documentElement = ( /** @type {?} */(document.documentElement));
                    /** @type {?} */
                    var documentRect = documentElement.getBoundingClientRect();
                    /** @type {?} */
                    var top = -documentRect.top || document.body.scrollTop || window.scrollY ||
                        documentElement.scrollTop || 0;
                    /** @type {?} */
                    var left = -documentRect.left || document.body.scrollLeft || window.scrollX ||
                        documentElement.scrollLeft || 0;
                    return { top: top, left: left };
                };
                /**
                 * Returns a stream that emits whenever the size of the viewport changes.
                 * @param {?=} throttleTime Time in milliseconds to throttle the stream.
                 * @return {?}
                 */
                ViewportRuler.prototype.change = function (throttleTime) {
                    if (throttleTime === void 0) { throttleTime = DEFAULT_RESIZE_TIME; }
                    return throttleTime > 0 ? this._change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(throttleTime)) : this._change;
                };
                /**
                 * Updates the cached viewport size.
                 * @private
                 * @return {?}
                 */
                ViewportRuler.prototype._updateViewportSize = function () {
                    this._viewportSize = this._platform.isBrowser ?
                        { width: window.innerWidth, height: window.innerHeight } :
                        { width: 0, height: 0 };
                };
                return ViewportRuler;
            }());
            ViewportRuler.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
            ];
            /** @nocollapse */
            ViewportRuler.ctorParameters = function () { return [
                { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
            ]; };
            /** @nocollapse */ ViewportRuler.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function ViewportRuler_Factory() { return new ViewportRuler(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); }, token: ViewportRuler, providedIn: "root" });
            /**
             * \@docs-private \@deprecated \@breaking-change 8.0.0
             * @param {?} parentRuler
             * @param {?} platform
             * @param {?} ngZone
             * @return {?}
             */
            function VIEWPORT_RULER_PROVIDER_FACTORY(parentRuler, platform, ngZone) {
                return parentRuler || new ViewportRuler(platform, ngZone);
            }
            /**
             * \@docs-private \@deprecated \@breaking-change 8.0.0
             * @type {?}
             */
            var VIEWPORT_RULER_PROVIDER = {
                // If there is already a ViewportRuler available, use that. Otherwise, provide a new one.
                provide: ViewportRuler,
                deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), ViewportRuler], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]],
                useFactory: VIEWPORT_RULER_PROVIDER_FACTORY
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            //# sourceMappingURL=scrolling.js.map
            /***/ 
        })
    }]);
//# sourceMappingURL=default~pages-angular-material-components-mat-drag-drop-mat-drag-drop-module~pages-angular-material-~3b8e4066-es2015.js.map
//# sourceMappingURL=default~pages-angular-material-components-mat-drag-drop-mat-drag-drop-module~pages-angular-material-~3b8e4066-es5.js.map
//# sourceMappingURL=default~pages-angular-material-components-mat-drag-drop-mat-drag-drop-module~pages-angular-material-~3b8e4066-es5.js.map