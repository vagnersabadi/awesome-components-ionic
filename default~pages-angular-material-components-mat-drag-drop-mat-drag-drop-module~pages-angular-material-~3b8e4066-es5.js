function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-angular-material-components-mat-drag-drop-mat-drag-drop-module~pages-angular-material-~3b8e4066"], {
  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js ***!
    \**********************************************************************/

  /*! exports provided: CdkFixedSizeVirtualScroll, CdkScrollable, CdkVirtualForOf, CdkVirtualScrollViewport, DEFAULT_RESIZE_TIME, DEFAULT_SCROLL_TIME, FixedSizeVirtualScrollStrategy, ScrollDispatcher, ScrollingModule, VIRTUAL_SCROLL_STRATEGY, ViewportRuler, _fixedSizeVirtualScrollStrategyFactory */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015ScrollingJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkFixedSizeVirtualScroll", function () {
      return CdkFixedSizeVirtualScroll;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkScrollable", function () {
      return CdkScrollable;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkVirtualForOf", function () {
      return CdkVirtualForOf;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkVirtualScrollViewport", function () {
      return CdkVirtualScrollViewport;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DEFAULT_RESIZE_TIME", function () {
      return DEFAULT_RESIZE_TIME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DEFAULT_SCROLL_TIME", function () {
      return DEFAULT_SCROLL_TIME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FixedSizeVirtualScrollStrategy", function () {
      return FixedSizeVirtualScrollStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollDispatcher", function () {
      return ScrollDispatcher;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollingModule", function () {
      return ScrollingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VIRTUAL_SCROLL_STRATEGY", function () {
      return VIRTUAL_SCROLL_STRATEGY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewportRuler", function () {
      return ViewportRuler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_fixedSizeVirtualScrollStrategyFactory", function () {
      return _fixedSizeVirtualScrollStrategyFactory;
    });
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/scrolling/virtual-scroll-strategy.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The injection token used to specify the virtual scrolling strategy.
     * @type {?}
     */


    var _c0 = ["contentWrapper"];
    var _c1 = ["*"];
    var VIRTUAL_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('VIRTUAL_SCROLL_STRATEGY');
    /**
     * A strategy that dictates which items should be rendered in the viewport.
     * @record
     */

    function VirtualScrollStrategy() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/scrolling/fixed-size-virtual-scroll.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Virtual scrolling strategy for lists with items of known fixed size.
     */


    var FixedSizeVirtualScrollStrategy = /*#__PURE__*/function () {
      /**
       * @param {?} itemSize The size of the items in the virtually scrolling list.
       * @param {?} minBufferPx The minimum amount of buffer (in pixels) before needing to render more
       * @param {?} maxBufferPx The amount of buffer (in pixels) to render when rendering more.
       */
      function FixedSizeVirtualScrollStrategy(itemSize, minBufferPx, maxBufferPx) {
        _classCallCheck(this, FixedSizeVirtualScrollStrategy);

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


      _createClass(FixedSizeVirtualScrollStrategy, [{
        key: "attach",
        value: function attach(viewport) {
          this._viewport = viewport;

          this._updateTotalContentSize();

          this._updateRenderedRange();
        }
        /**
         * Detaches this scroll strategy from the currently attached viewport.
         * @return {?}
         */

      }, {
        key: "detach",
        value: function detach() {
          this._scrolledIndexChange.complete();

          this._viewport = null;
        }
        /**
         * Update the item size and buffer size.
         * @param {?} itemSize The size of the items in the virtually scrolling list.
         * @param {?} minBufferPx The minimum amount of buffer (in pixels) before needing to render more
         * @param {?} maxBufferPx The amount of buffer (in pixels) to render when rendering more.
         * @return {?}
         */

      }, {
        key: "updateItemAndBufferSize",
        value: function updateItemAndBufferSize(itemSize, minBufferPx, maxBufferPx) {
          if (maxBufferPx < minBufferPx) {
            throw Error('CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx');
          }

          this._itemSize = itemSize;
          this._minBufferPx = minBufferPx;
          this._maxBufferPx = maxBufferPx;

          this._updateTotalContentSize();

          this._updateRenderedRange();
        }
        /**
         * \@docs-private Implemented as part of VirtualScrollStrategy.
         * @return {?}
         */

      }, {
        key: "onContentScrolled",
        value: function onContentScrolled() {
          this._updateRenderedRange();
        }
        /**
         * \@docs-private Implemented as part of VirtualScrollStrategy.
         * @return {?}
         */

      }, {
        key: "onDataLengthChanged",
        value: function onDataLengthChanged() {
          this._updateTotalContentSize();

          this._updateRenderedRange();
        }
        /**
         * \@docs-private Implemented as part of VirtualScrollStrategy.
         * @return {?}
         */

      }, {
        key: "onContentRendered",
        value: function onContentRendered() {}
        /**
         * \@docs-private Implemented as part of VirtualScrollStrategy.
         * @return {?}
         */

      }, {
        key: "onRenderedOffsetChanged",
        value: function onRenderedOffsetChanged() {}
        /**
         * Scroll to the offset for the given index.
         * @param {?} index The index of the element to scroll to.
         * @param {?} behavior The ScrollBehavior to use when scrolling.
         * @return {?}
         */

      }, {
        key: "scrollToIndex",
        value: function scrollToIndex(index, behavior) {
          if (this._viewport) {
            this._viewport.scrollToOffset(index * this._itemSize, behavior);
          }
        }
        /**
         * Update the viewport's total content size.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateTotalContentSize",
        value: function _updateTotalContentSize() {
          if (!this._viewport) {
            return;
          }

          this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
        }
        /**
         * Update the viewport's rendered range.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateRenderedRange",
        value: function _updateRenderedRange() {
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


          var newRange = {
            start: renderedRange.start,
            end: renderedRange.end
          };
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
          } else {
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
        }
      }]);

      return FixedSizeVirtualScrollStrategy;
    }();

    if (false) {}
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


    var CdkFixedSizeVirtualScroll = /*#__PURE__*/function () {
      function CdkFixedSizeVirtualScroll() {
        _classCallCheck(this, CdkFixedSizeVirtualScroll);

        this._itemSize = 20;
        this._minBufferPx = 100;
        this._maxBufferPx = 200;
        /**
         * The scroll strategy used by this directive.
         */

        this._scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
      }
      /**
       * The size of the items in the list (in pixels).
       * @return {?}
       */


      _createClass(CdkFixedSizeVirtualScroll, [{
        key: "ngOnChanges",

        /**
         * @return {?}
         */
        value: function ngOnChanges() {
          this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
        }
      }, {
        key: "itemSize",
        get: function get() {
          return this._itemSize;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._itemSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value);
        }
        /**
         * The minimum amount of buffer rendered beyond the viewport (in pixels).
         * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
         * @return {?}
         */

      }, {
        key: "minBufferPx",
        get: function get() {
          return this._minBufferPx;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._minBufferPx = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value);
        }
        /**
         * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
         * @return {?}
         */

      }, {
        key: "maxBufferPx",
        get: function get() {
          return this._maxBufferPx;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._maxBufferPx = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value);
        }
      }]);

      return CdkFixedSizeVirtualScroll;
    }();

    CdkFixedSizeVirtualScroll.ɵfac = function CdkFixedSizeVirtualScroll_Factory(t) {
      return new (t || CdkFixedSizeVirtualScroll)();
    };

    CdkFixedSizeVirtualScroll.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkFixedSizeVirtualScroll,
      selectors: [["cdk-virtual-scroll-viewport", "itemSize", ""]],
      inputs: {
        itemSize: "itemSize",
        minBufferPx: "minBufferPx",
        maxBufferPx: "maxBufferPx"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: VIRTUAL_SCROLL_STRATEGY,
        useFactory: _fixedSizeVirtualScrollStrategyFactory,
        deps: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return CdkFixedSizeVirtualScroll;
        })]
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
    CdkFixedSizeVirtualScroll.propDecorators = {
      itemSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      minBufferPx: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      maxBufferPx: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkFixedSizeVirtualScroll, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'cdk-virtual-scroll-viewport[itemSize]',
          providers: [{
            provide: VIRTUAL_SCROLL_STRATEGY,
            useFactory: _fixedSizeVirtualScrollStrategyFactory,
            deps: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(
            /**
            * @return {?}
            */
            function () {
              return CdkFixedSizeVirtualScroll;
            })]
          }]
        }]
      }], function () {
        return [];
      }, {
        itemSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        minBufferPx: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        maxBufferPx: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/scrolling/scroll-dispatcher.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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

    var ScrollDispatcher = /*#__PURE__*/function () {
      /**
       * @param {?} _ngZone
       * @param {?} _platform
       * @param {?=} document
       */
      function ScrollDispatcher(_ngZone, _platform,
      /** @breaking-change 11.0.0 make document required */
      document) {
        _classCallCheck(this, ScrollDispatcher);

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
        this._document = document;
      }
      /**
       * Registers a scrollable instance with the service and listens for its scrolled events. When the
       * scrollable is scrolled, the service emits the event to its scrolled observable.
       * @param {?} scrollable Scrollable instance to be registered.
       * @return {?}
       */


      _createClass(ScrollDispatcher, [{
        key: "register",
        value: function register(scrollable) {
          var _this = this;

          if (!this.scrollContainers.has(scrollable)) {
            this.scrollContainers.set(scrollable, scrollable.elementScrolled().subscribe(
            /**
            * @return {?}
            */
            function () {
              return _this._scrolled.next(scrollable);
            }));
          }
        }
        /**
         * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
         * @param {?} scrollable Scrollable instance to be deregistered.
         * @return {?}
         */

      }, {
        key: "deregister",
        value: function deregister(scrollable) {
          /** @type {?} */
          var scrollableReference = this.scrollContainers.get(scrollable);

          if (scrollableReference) {
            scrollableReference.unsubscribe();
            this.scrollContainers["delete"](scrollable);
          }
        }
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

      }, {
        key: "scrolled",
        value: function scrolled() {
          var _this2 = this;

          var auditTimeInMs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_SCROLL_TIME;

          if (!this._platform.isBrowser) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
          }

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](
          /**
          * @param {?} observer
          * @return {?}
          */
          function (observer) {
            if (!_this2._globalSubscription) {
              _this2._addGlobalListener();
            } // In the case of a 0ms delay, use an observable without auditTime
            // since it does add a perceptible delay in processing overhead.

            /** @type {?} */


            var subscription = auditTimeInMs > 0 ? _this2._scrolled.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(auditTimeInMs)).subscribe(observer) : _this2._scrolled.subscribe(observer);
            _this2._scrolledCount++;
            return (
              /**
              * @return {?}
              */
              function () {
                subscription.unsubscribe();
                _this2._scrolledCount--;

                if (!_this2._scrolledCount) {
                  _this2._removeGlobalListener();
                }
              }
            );
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _this3 = this;

          this._removeGlobalListener();

          this.scrollContainers.forEach(
          /**
          * @param {?} _
          * @param {?} container
          * @return {?}
          */
          function (_, container) {
            return _this3.deregister(container);
          });

          this._scrolled.complete();
        }
        /**
         * Returns an observable that emits whenever any of the
         * scrollable ancestors of an element are scrolled.
         * @param {?} elementRef Element whose ancestors to listen for.
         * @param {?=} auditTimeInMs Time to throttle the scroll events.
         * @return {?}
         */

      }, {
        key: "ancestorScrolled",
        value: function ancestorScrolled(elementRef, auditTimeInMs) {
          /** @type {?} */
          var ancestors = this.getAncestorScrollContainers(elementRef);
          return this.scrolled(auditTimeInMs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(
          /**
          * @param {?} target
          * @return {?}
          */
          function (target) {
            return !target || ancestors.indexOf(target) > -1;
          }));
        }
        /**
         * Returns all registered Scrollables that contain the provided element.
         * @param {?} elementRef
         * @return {?}
         */

      }, {
        key: "getAncestorScrollContainers",
        value: function getAncestorScrollContainers(elementRef) {
          var _this4 = this;

          /** @type {?} */
          var scrollingContainers = [];
          this.scrollContainers.forEach(
          /**
          * @param {?} _subscription
          * @param {?} scrollable
          * @return {?}
          */
          function (_subscription, scrollable) {
            if (_this4._scrollableContainsElement(scrollable, elementRef)) {
              scrollingContainers.push(scrollable);
            }
          });
          return scrollingContainers;
        }
        /**
         * Access injected document if available or fallback to global document reference
         * @private
         * @return {?}
         */

      }, {
        key: "_getDocument",
        value: function _getDocument() {
          return this._document || document;
        }
        /**
         * Use defaultView of injected document if available or fallback to global window reference
         * @private
         * @return {?}
         */

      }, {
        key: "_getWindow",
        value: function _getWindow() {
          /** @type {?} */
          var doc = this._getDocument();

          return doc.defaultView || window;
        }
        /**
         * Returns true if the element is contained within the provided Scrollable.
         * @private
         * @param {?} scrollable
         * @param {?} elementRef
         * @return {?}
         */

      }, {
        key: "_scrollableContainsElement",
        value: function _scrollableContainsElement(scrollable, elementRef) {
          /** @type {?} */
          var element = elementRef.nativeElement;
          /** @type {?} */

          var scrollableElement = scrollable.getElementRef().nativeElement; // Traverse through the element parents until we reach null, checking if any of the elements
          // are the scrollable's element.

          do {
            if (element == scrollableElement) {
              return true;
            }
          } while (element =
          /** @type {?} */
          element.parentElement);

          return false;
        }
        /**
         * Sets up the global scroll listeners.
         * @private
         * @return {?}
         */

      }, {
        key: "_addGlobalListener",
        value: function _addGlobalListener() {
          var _this5 = this;

          this._globalSubscription = this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var window = _this5._getWindow();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window.document, 'scroll').subscribe(
            /**
            * @return {?}
            */
            function () {
              return _this5._scrolled.next();
            });
          });
        }
        /**
         * Cleans up the global scroll listener.
         * @private
         * @return {?}
         */

      }, {
        key: "_removeGlobalListener",
        value: function _removeGlobalListener() {
          if (this._globalSubscription) {
            this._globalSubscription.unsubscribe();

            this._globalSubscription = null;
          }
        }
      }]);

      return ScrollDispatcher;
    }();

    ScrollDispatcher.ɵfac = function ScrollDispatcher_Factory(t) {
      return new (t || ScrollDispatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8));
    };
    /** @nocollapse */


    ScrollDispatcher.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
        }]
      }];
    };
    /** @nocollapse */


    ScrollDispatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function ScrollDispatcher_Factory() {
        return new ScrollDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8));
      },
      token: ScrollDispatcher,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScrollDispatcher, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/scrolling/scrollable.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Sends an event when the directive's element is scrolled. Registers itself with the
     * ScrollDispatcher service to include itself as part of its collection of scrolling events that it
     * can be listened to through the service.
     */


    var CdkScrollable = /*#__PURE__*/function () {
      /**
       * @param {?} elementRef
       * @param {?} scrollDispatcher
       * @param {?} ngZone
       * @param {?=} dir
       */
      function CdkScrollable(elementRef, scrollDispatcher, ngZone, dir) {
        var _this6 = this;

        _classCallCheck(this, CdkScrollable);

        this.elementRef = elementRef;
        this.scrollDispatcher = scrollDispatcher;
        this.ngZone = ngZone;
        this.dir = dir;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._elementScrolled = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](
        /**
        * @param {?} observer
        * @return {?}
        */
        function (observer) {
          return _this6.ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(_this6.elementRef.nativeElement, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this6._destroyed)).subscribe(observer);
          });
        });
      }
      /**
       * @return {?}
       */


      _createClass(CdkScrollable, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.scrollDispatcher.register(this);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.scrollDispatcher.deregister(this);

          this._destroyed.next();

          this._destroyed.complete();
        }
        /**
         * Returns observable that emits when a scroll event is fired on the host element.
         * @return {?}
         */

      }, {
        key: "elementScrolled",
        value: function elementScrolled() {
          return this._elementScrolled;
        }
        /**
         * Gets the ElementRef for the viewport.
         * @return {?}
         */

      }, {
        key: "getElementRef",
        value: function getElementRef() {
          return this.elementRef;
        }
        /**
         * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
         * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
         * left and right always refer to the left and right side of the scrolling container irrespective
         * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
         * in an RTL context.
         * @param {?} options specified the offsets to scroll to.
         * @return {?}
         */

      }, {
        key: "scrollTo",
        value: function scrollTo(options) {
          /** @type {?} */
          var el = this.elementRef.nativeElement;
          /** @type {?} */

          var isRtl = this.dir && this.dir.value == 'rtl'; // Rewrite start & end offsets as right or left offsets.

          if (options.left == null) {
            options.left = isRtl ? options.end : options.start;
          }

          if (options.right == null) {
            options.right = isRtl ? options.start : options.end;
          } // Rewrite the bottom offset as a top offset.


          if (options.bottom != null) {
            /** @type {?} */
            options.top = el.scrollHeight - el.clientHeight - options.bottom;
          } // Rewrite the right offset as a left offset.


          if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() != 0
          /* NORMAL */
          ) {
              if (options.left != null) {
                /** @type {?} */
                options.right = el.scrollWidth - el.clientWidth - options.left;
              }

              if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == 2
              /* INVERTED */
              ) {
                  options.left = options.right;
                } else if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == 1
              /* NEGATED */
              ) {
                  options.left = options.right ? -options.right : options.right;
                }
            } else {
            if (options.right != null) {
              /** @type {?} */
              options.left = el.scrollWidth - el.clientWidth - options.right;
            }
          }

          this._applyScrollToOptions(options);
        }
        /**
         * @private
         * @param {?} options
         * @return {?}
         */

      }, {
        key: "_applyScrollToOptions",
        value: function _applyScrollToOptions(options) {
          /** @type {?} */
          var el = this.elementRef.nativeElement;

          if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["supportsScrollBehavior"])()) {
            el.scrollTo(options);
          } else {
            if (options.top != null) {
              el.scrollTop = options.top;
            }

            if (options.left != null) {
              el.scrollLeft = options.left;
            }
          }
        }
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

      }, {
        key: "measureScrollOffset",
        value: function measureScrollOffset(from) {
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
          } // Rewrite start & end as left or right offsets.

          /** @type {?} */


          var isRtl = this.dir && this.dir.value == 'rtl';

          if (from == 'start') {
            from = isRtl ? RIGHT : LEFT;
          } else if (from == 'end') {
            from = isRtl ? LEFT : RIGHT;
          }

          if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == 2
          /* INVERTED */
          ) {
              // For INVERTED, scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and
              // 0 when scrolled all the way right.
              if (from == LEFT) {
                return el.scrollWidth - el.clientWidth - el.scrollLeft;
              } else {
                return el.scrollLeft;
              }
            } else if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == 1
          /* NEGATED */
          ) {
              // For NEGATED, scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and
              // 0 when scrolled all the way right.
              if (from == LEFT) {
                return el.scrollLeft + el.scrollWidth - el.clientWidth;
              } else {
                return -el.scrollLeft;
              }
            } else {
            // For NORMAL, as well as non-RTL contexts, scrollLeft is 0 when scrolled all the way left and
            // (scrollWidth - clientWidth) when scrolled all the way right.
            if (from == LEFT) {
              return el.scrollLeft;
            } else {
              return el.scrollWidth - el.clientWidth - el.scrollLeft;
            }
          }
        }
      }]);

      return CdkScrollable;
    }();

    CdkScrollable.ɵfac = function CdkScrollable_Factory(t) {
      return new (t || CdkScrollable)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], 8));
    };

    CdkScrollable.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkScrollable,
      selectors: [["", "cdk-scrollable", ""], ["", "cdkScrollable", ""]]
    });
    /** @nocollapse */

    CdkScrollable.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: ScrollDispatcher
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkScrollable, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[cdk-scrollable], [cdkScrollable]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: ScrollDispatcher
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/scrolling/viewport-ruler.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Time in ms to throttle the resize events by default.
     * @type {?}
     */


    var DEFAULT_RESIZE_TIME = 20;
    /**
     * Object that holds the scroll position of the viewport in each direction.
     * @record
     */

    function ViewportScrollPosition() {}

    if (false) {}
    /**
     * Simple utility for getting the bounds of the browser viewport.
     * \@docs-private
     */


    var ViewportRuler = /*#__PURE__*/function () {
      /**
       * @param {?} _platform
       * @param {?} ngZone
       * @param {?=} document
       */
      function ViewportRuler(_platform, ngZone,
      /** @breaking-change 11.0.0 make document required */
      document) {
        var _this7 = this;

        _classCallCheck(this, ViewportRuler);

        this._platform = _platform;
        this._document = document;
        ngZone.runOutsideAngular(
        /**
        * @return {?}
        */
        function () {
          /** @type {?} */
          var window = _this7._getWindow();

          _this7._change = _platform.isBrowser ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize'), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'orientationchange')) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(); // Note that we need to do the subscription inside `runOutsideAngular`
          // since subscribing is what causes the event listener to be added.

          _this7._invalidateCache = _this7.change().subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this7._updateViewportSize();
          });
        });
      }
      /**
       * @return {?}
       */


      _createClass(ViewportRuler, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._invalidateCache.unsubscribe();
        }
        /**
         * Returns the viewport's width and height.
         * @return {?}
         */

      }, {
        key: "getViewportSize",
        value: function getViewportSize() {
          if (!this._viewportSize) {
            this._updateViewportSize();
          }
          /** @type {?} */


          var output = {
            width: this._viewportSize.width,
            height: this._viewportSize.height
          }; // If we're not on a browser, don't cache the size since it'll be mocked out anyway.

          if (!this._platform.isBrowser) {
            this._viewportSize =
            /** @type {?} */
            null;
          }

          return output;
        }
        /**
         * Gets a ClientRect for the viewport's bounds.
         * @return {?}
         */

      }, {
        key: "getViewportRect",
        value: function getViewportRect() {
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

          var _this$getViewportSize = this.getViewportSize(),
              width = _this$getViewportSize.width,
              height = _this$getViewportSize.height;

          return {
            top: scrollPosition.top,
            left: scrollPosition.left,
            bottom: scrollPosition.top + height,
            right: scrollPosition.left + width,
            height: height,
            width: width
          };
        }
        /**
         * Gets the (top, left) scroll position of the viewport.
         * @return {?}
         */

      }, {
        key: "getViewportScrollPosition",
        value: function getViewportScrollPosition() {
          // While we can get a reference to the fake document
          // during SSR, it doesn't have getBoundingClientRect.
          if (!this._platform.isBrowser) {
            return {
              top: 0,
              left: 0
            };
          } // The top-left-corner of the viewport is determined by the scroll position of the document
          // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
          // whether `document.body` or `document.documentElement` is the scrolled element, so reading
          // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
          // `document.documentElement` works consistently, where the `top` and `left` values will
          // equal negative the scroll position.

          /** @type {?} */


          var document = this._getDocument();
          /** @type {?} */


          var window = this._getWindow();
          /** @type {?} */


          var documentElement =
          /** @type {?} */
          document.documentElement;
          /** @type {?} */

          var documentRect = documentElement.getBoundingClientRect();
          /** @type {?} */

          var top = -documentRect.top || document.body.scrollTop || window.scrollY || documentElement.scrollTop || 0;
          /** @type {?} */

          var left = -documentRect.left || document.body.scrollLeft || window.scrollX || documentElement.scrollLeft || 0;
          return {
            top: top,
            left: left
          };
        }
        /**
         * Returns a stream that emits whenever the size of the viewport changes.
         * @param {?=} throttleTime Time in milliseconds to throttle the stream.
         * @return {?}
         */

      }, {
        key: "change",
        value: function change() {
          var throttleTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_RESIZE_TIME;
          return throttleTime > 0 ? this._change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(throttleTime)) : this._change;
        }
        /**
         * Access injected document if available or fallback to global document reference
         * @private
         * @return {?}
         */

      }, {
        key: "_getDocument",
        value: function _getDocument() {
          return this._document || document;
        }
        /**
         * Use defaultView of injected document if available or fallback to global window reference
         * @private
         * @return {?}
         */

      }, {
        key: "_getWindow",
        value: function _getWindow() {
          /** @type {?} */
          var doc = this._getDocument();

          return doc.defaultView || window;
        }
        /**
         * Updates the cached viewport size.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateViewportSize",
        value: function _updateViewportSize() {
          /** @type {?} */
          var window = this._getWindow();

          this._viewportSize = this._platform.isBrowser ? {
            width: window.innerWidth,
            height: window.innerHeight
          } : {
            width: 0,
            height: 0
          };
        }
      }]);

      return ViewportRuler;
    }();

    ViewportRuler.ɵfac = function ViewportRuler_Factory(t) {
      return new (t || ViewportRuler)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8));
    };
    /** @nocollapse */


    ViewportRuler.ctorParameters = function () {
      return [{
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
        }]
      }];
    };
    /** @nocollapse */


    ViewportRuler.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function ViewportRuler_Factory() {
        return new ViewportRuler(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8));
      },
      token: ViewportRuler,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ViewportRuler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/scrolling/virtual-scroll-viewport.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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

    var CdkVirtualScrollViewport = /*#__PURE__*/function (_CdkScrollable) {
      _inherits(CdkVirtualScrollViewport, _CdkScrollable);

      var _super = _createSuper(CdkVirtualScrollViewport);

      /**
       * @param {?} elementRef
       * @param {?} _changeDetectorRef
       * @param {?} ngZone
       * @param {?} _scrollStrategy
       * @param {?} dir
       * @param {?} scrollDispatcher
       * @param {?=} viewportRuler
       */
      function CdkVirtualScrollViewport(elementRef, _changeDetectorRef, ngZone, _scrollStrategy, dir, scrollDispatcher,
      /**
       * @deprecated `viewportRuler` parameter to become required.
       * @breaking-change 11.0.0
       */
      viewportRuler) {
        var _this8;

        _classCallCheck(this, CdkVirtualScrollViewport);

        _this8 = _super.call(this, elementRef, scrollDispatcher, ngZone, dir);
        _this8.elementRef = elementRef;
        _this8._changeDetectorRef = _changeDetectorRef;
        _this8._scrollStrategy = _scrollStrategy;
        /**
         * Emits when the viewport is detached from a CdkVirtualForOf.
         */

        _this8._detachedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the rendered range changes.
         */

        _this8._renderedRangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        _this8._orientation = 'vertical'; // Note: we don't use the typical EventEmitter here because we need to subscribe to the scroll
        // strategy lazily (i.e. only if the user is actually listening to the events). We do this because
        // depending on how the strategy calculates the scrolled index, it may come at a cost to
        // performance.

        /**
         * Emits when the index of the first element visible in the viewport changes.
         */

        _this8.scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](
        /**
        * @param {?} observer
        * @return {?}
        */
        function (observer) {
          return _this8._scrollStrategy.scrolledIndexChange.subscribe(
          /**
          * @param {?} index
          * @return {?}
          */
          function (index) {
            return Promise.resolve().then(
            /**
            * @return {?}
            */
            function () {
              return _this8.ngZone.run(
              /**
              * @return {?}
              */
              function () {
                return observer.next(index);
              });
            });
          });
        });
        /**
         * A stream that emits whenever the rendered range changes.
         */

        _this8.renderedRangeStream = _this8._renderedRangeSubject.asObservable();
        /**
         * The total size of all content (in pixels), including content that is not currently rendered.
         */

        _this8._totalContentSize = 0;
        /**
         * A string representing the `style.width` property value to be used for the spacer element.
         */

        _this8._totalContentWidth = '';
        /**
         * A string representing the `style.height` property value to be used for the spacer element.
         */

        _this8._totalContentHeight = '';
        /**
         * The currently rendered range of indices.
         */

        _this8._renderedRange = {
          start: 0,
          end: 0
        };
        /**
         * The length of the data bound to this viewport (in number of items).
         */

        _this8._dataLength = 0;
        /**
         * The size of the viewport (in pixels).
         */

        _this8._viewportSize = 0;
        /**
         * The last rendered content offset that was set.
         */

        _this8._renderedContentOffset = 0;
        /**
         * Whether the last rendered content offset was to the end of the content (and therefore needs to
         * be rewritten as an offset to the start of the content).
         */

        _this8._renderedContentOffsetNeedsRewrite = false;
        /**
         * Whether there is a pending change detection cycle.
         */

        _this8._isChangeDetectionPending = false;
        /**
         * A list of functions to run after the next change detection cycle.
         */

        _this8._runAfterChangeDetection = [];
        /**
         * Subscription to changes in the viewport size.
         */

        _this8._viewportChanges = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;

        if (!_scrollStrategy) {
          throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
        } // @breaking-change 11.0.0 Remove null check for `viewportRuler`.


        if (viewportRuler) {
          _this8._viewportChanges = viewportRuler.change().subscribe(
          /**
          * @return {?}
          */
          function () {
            _this8.checkViewportSize();
          });
        }

        return _this8;
      }
      /**
       * The direction the viewport scrolls.
       * @return {?}
       */


      _createClass(CdkVirtualScrollViewport, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          var _this9 = this;

          _get(_getPrototypeOf(CdkVirtualScrollViewport.prototype), "ngOnInit", this).call(this); // It's still too early to measure the viewport at this point. Deferring with a promise allows
          // the Viewport to be rendered with the correct size before we measure. We run this outside the
          // zone to avoid causing more change detection cycles. We handle the change detection loop
          // ourselves instead.


          this.ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            return Promise.resolve().then(
            /**
            * @return {?}
            */
            function () {
              _this9._measureViewportSize();

              _this9._scrollStrategy.attach(_this9);

              _this9.elementScrolled().pipe( // Start off with a fake scroll event so we properly detect our initial position.
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(
              /** @type {?} */
              null), // Collect multiple events into one until the next animation frame. This way if
              // there are multiple scroll events in the same frame we only need to recheck
              // our layout once.
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(0, SCROLL_SCHEDULER)).subscribe(
              /**
              * @return {?}
              */
              function () {
                return _this9._scrollStrategy.onContentScrolled();
              });

              _this9._markChangeDetectionNeeded();
            });
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.detach();

          this._scrollStrategy.detach(); // Complete all subjects


          this._renderedRangeSubject.complete();

          this._detachedSubject.complete();

          this._viewportChanges.unsubscribe();

          _get(_getPrototypeOf(CdkVirtualScrollViewport.prototype), "ngOnDestroy", this).call(this);
        }
        /**
         * Attaches a `CdkVirtualForOf` to this viewport.
         * @param {?} forOf
         * @return {?}
         */

      }, {
        key: "attach",
        value: function attach(forOf) {
          var _this10 = this;

          if (this._forOf) {
            throw Error('CdkVirtualScrollViewport is already attached.');
          } // Subscribe to the data stream of the CdkVirtualForOf to keep track of when the data length
          // changes. Run outside the zone to avoid triggering change detection, since we're managing the
          // change detection loop ourselves.


          this.ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            _this10._forOf = forOf;

            _this10._forOf.dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this10._detachedSubject)).subscribe(
            /**
            * @param {?} data
            * @return {?}
            */
            function (data) {
              /** @type {?} */
              var newLength = data.length;

              if (newLength !== _this10._dataLength) {
                _this10._dataLength = newLength;

                _this10._scrollStrategy.onDataLengthChanged();
              }

              _this10._doChangeDetection();
            });
          });
        }
        /**
         * Detaches the current `CdkVirtualForOf`.
         * @return {?}
         */

      }, {
        key: "detach",
        value: function detach() {
          this._forOf = null;

          this._detachedSubject.next();
        }
        /**
         * Gets the length of the data bound to this viewport (in number of items).
         * @return {?}
         */

      }, {
        key: "getDataLength",
        value: function getDataLength() {
          return this._dataLength;
        }
        /**
         * Gets the size of the viewport (in pixels).
         * @return {?}
         */

      }, {
        key: "getViewportSize",
        value: function getViewportSize() {
          return this._viewportSize;
        } // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
        // cycle happens. I'm being careful to only call it after the render cycle is complete and before
        // setting it to something else, but its error prone and should probably be split into
        // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.

        /**
         * Get the current rendered range of items.
         * @return {?}
         */

      }, {
        key: "getRenderedRange",
        value: function getRenderedRange() {
          return this._renderedRange;
        }
        /**
         * Sets the total size of all content (in pixels), including content that is not currently
         * rendered.
         * @param {?} size
         * @return {?}
         */

      }, {
        key: "setTotalContentSize",
        value: function setTotalContentSize(size) {
          if (this._totalContentSize !== size) {
            this._totalContentSize = size;

            this._calculateSpacerSize();

            this._markChangeDetectionNeeded();
          }
        }
        /**
         * Sets the currently rendered range of indices.
         * @param {?} range
         * @return {?}
         */

      }, {
        key: "setRenderedRange",
        value: function setRenderedRange(range) {
          var _this11 = this;

          if (!rangesEqual(this._renderedRange, range)) {
            this._renderedRangeSubject.next(this._renderedRange = range);

            this._markChangeDetectionNeeded(
            /**
            * @return {?}
            */
            function () {
              return _this11._scrollStrategy.onContentRendered();
            });
          }
        }
        /**
         * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
         * @return {?}
         */

      }, {
        key: "getOffsetToRenderedContentStart",
        value: function getOffsetToRenderedContentStart() {
          return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
        }
        /**
         * Sets the offset from the start of the viewport to either the start or end of the rendered data
         * (in pixels).
         * @param {?} offset
         * @param {?=} to
         * @return {?}
         */

      }, {
        key: "setRenderedContentOffset",
        value: function setRenderedContentOffset(offset) {
          var _this12 = this;

          var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'to-start';
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

          var transform = "translate".concat(axis, "(").concat(Number(axisDirection * offset), "px)");
          this._renderedContentOffset = offset;

          if (to === 'to-end') {
            transform += " translate".concat(axis, "(-100%)"); // The viewport should rewrite this as a `to-start` offset on the next render cycle. Otherwise
            // elements will appear to expand in the wrong direction (e.g. `mat-expansion-panel` would
            // expand upward).

            this._renderedContentOffsetNeedsRewrite = true;
          }

          if (this._renderedContentTransform != transform) {
            // We know this value is safe because we parse `offset` with `Number()` before passing it
            // into the string.
            this._renderedContentTransform = transform;

            this._markChangeDetectionNeeded(
            /**
            * @return {?}
            */
            function () {
              if (_this12._renderedContentOffsetNeedsRewrite) {
                _this12._renderedContentOffset -= _this12.measureRenderedContentSize();
                _this12._renderedContentOffsetNeedsRewrite = false;

                _this12.setRenderedContentOffset(_this12._renderedContentOffset);
              } else {
                _this12._scrollStrategy.onRenderedOffsetChanged();
              }
            });
          }
        }
        /**
         * Scrolls to the given offset from the start of the viewport. Please note that this is not always
         * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
         * direction, this would be the equivalent of setting a fictional `scrollRight` property.
         * @param {?} offset The offset to scroll to.
         * @param {?=} behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
         * @return {?}
         */

      }, {
        key: "scrollToOffset",
        value: function scrollToOffset(offset) {
          var behavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';

          /** @type {?} */
          var options = {
            behavior: behavior
          };

          if (this.orientation === 'horizontal') {
            options.start = offset;
          } else {
            options.top = offset;
          }

          this.scrollTo(options);
        }
        /**
         * Scrolls to the offset for the given index.
         * @param {?} index The index of the element to scroll to.
         * @param {?=} behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
         * @return {?}
         */

      }, {
        key: "scrollToIndex",
        value: function scrollToIndex(index) {
          var behavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';

          this._scrollStrategy.scrollToIndex(index, behavior);
        }
        /**
         * Gets the current scroll offset from the start of the viewport (in pixels).
         * @param {?=} from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
         *     in horizontal mode.
         * @return {?}
         */

      }, {
        key: "measureScrollOffset",
        value: function measureScrollOffset(from) {
          return from ? _get(_getPrototypeOf(CdkVirtualScrollViewport.prototype), "measureScrollOffset", this).call(this, from) : _get(_getPrototypeOf(CdkVirtualScrollViewport.prototype), "measureScrollOffset", this).call(this, this.orientation === 'horizontal' ? 'start' : 'top');
        }
        /**
         * Measure the combined size of all of the rendered items.
         * @return {?}
         */

      }, {
        key: "measureRenderedContentSize",
        value: function measureRenderedContentSize() {
          /** @type {?} */
          var contentEl = this._contentWrapper.nativeElement;
          return this.orientation === 'horizontal' ? contentEl.offsetWidth : contentEl.offsetHeight;
        }
        /**
         * Measure the total combined size of the given range. Throws if the range includes items that are
         * not rendered.
         * @param {?} range
         * @return {?}
         */

      }, {
        key: "measureRangeSize",
        value: function measureRangeSize(range) {
          if (!this._forOf) {
            return 0;
          }

          return this._forOf.measureRangeSize(range, this.orientation);
        }
        /**
         * Update the viewport dimensions and re-render.
         * @return {?}
         */

      }, {
        key: "checkViewportSize",
        value: function checkViewportSize() {
          // TODO: Cleanup later when add logic for handling content resize
          this._measureViewportSize();

          this._scrollStrategy.onDataLengthChanged();
        }
        /**
         * Measure the viewport size.
         * @private
         * @return {?}
         */

      }, {
        key: "_measureViewportSize",
        value: function _measureViewportSize() {
          /** @type {?} */
          var viewportEl = this.elementRef.nativeElement;
          this._viewportSize = this.orientation === 'horizontal' ? viewportEl.clientWidth : viewportEl.clientHeight;
        }
        /**
         * Queue up change detection to run.
         * @private
         * @param {?=} runAfter
         * @return {?}
         */

      }, {
        key: "_markChangeDetectionNeeded",
        value: function _markChangeDetectionNeeded(runAfter) {
          var _this13 = this;

          if (runAfter) {
            this._runAfterChangeDetection.push(runAfter);
          } // Use a Promise to batch together calls to `_doChangeDetection`. This way if we set a bunch of
          // properties sequentially we only have to run `_doChangeDetection` once at the end.


          if (!this._isChangeDetectionPending) {
            this._isChangeDetectionPending = true;
            this.ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              return Promise.resolve().then(
              /**
              * @return {?}
              */
              function () {
                _this13._doChangeDetection();
              });
            });
          }
        }
        /**
         * Run change detection.
         * @private
         * @return {?}
         */

      }, {
        key: "_doChangeDetection",
        value: function _doChangeDetection() {
          var _this14 = this;

          this._isChangeDetectionPending = false; // Apply the content transform. The transform can't be set via an Angular binding because
          // bypassSecurityTrustStyle is banned in Google. However the value is safe, it's composed of
          // string literals, a variable that can only be 'X' or 'Y', and user input that is run through
          // the `Number` function first to coerce it to a numeric value.

          this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform; // Apply changes to Angular bindings. Note: We must call `markForCheck` to run change detection
          // from the root, since the repeated items are content projected in. Calling `detectChanges`
          // instead does not properly check the projected content.

          this.ngZone.run(
          /**
          * @return {?}
          */
          function () {
            return _this14._changeDetectorRef.markForCheck();
          });
          /** @type {?} */

          var runAfterChangeDetection = this._runAfterChangeDetection;
          this._runAfterChangeDetection = [];

          var _iterator = _createForOfIteratorHelper(runAfterChangeDetection),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var fn = _step.value;
              fn();
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        /**
         * Calculates the `style.width` and `style.height` for the spacer element.
         * @private
         * @return {?}
         */

      }, {
        key: "_calculateSpacerSize",
        value: function _calculateSpacerSize() {
          this._totalContentHeight = this.orientation === 'horizontal' ? '' : "".concat(this._totalContentSize, "px");
          this._totalContentWidth = this.orientation === 'horizontal' ? "".concat(this._totalContentSize, "px") : '';
        }
      }, {
        key: "orientation",
        get: function get() {
          return this._orientation;
        }
        /**
         * @param {?} orientation
         * @return {?}
         */
        ,
        set: function set(orientation) {
          if (this._orientation !== orientation) {
            this._orientation = orientation;

            this._calculateSpacerSize();
          }
        }
      }]);

      return CdkVirtualScrollViewport;
    }(CdkScrollable);

    CdkVirtualScrollViewport.ɵfac = function CdkVirtualScrollViewport_Factory(t) {
      return new (t || CdkVirtualScrollViewport)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](VIRTUAL_SCROLL_STRATEGY, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ViewportRuler, 8));
    };

    CdkVirtualScrollViewport.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CdkVirtualScrollViewport,
      selectors: [["cdk-virtual-scroll-viewport"]],
      viewQuery: function CdkVirtualScrollViewport_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._contentWrapper = _t.first);
        }
      },
      hostAttrs: [1, "cdk-virtual-scroll-viewport"],
      hostVars: 4,
      hostBindings: function CdkVirtualScrollViewport_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cdk-virtual-scroll-orientation-horizontal", ctx.orientation === "horizontal")("cdk-virtual-scroll-orientation-vertical", ctx.orientation !== "horizontal");
        }
      },
      inputs: {
        orientation: "orientation"
      },
      outputs: {
        scrolledIndexChange: "scrolledIndexChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: CdkScrollable,
        useExisting: CdkVirtualScrollViewport
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c1,
      decls: 4,
      vars: 4,
      consts: [[1, "cdk-virtual-scroll-content-wrapper"], ["contentWrapper", ""], [1, "cdk-virtual-scroll-spacer"]],
      template: function CdkVirtualScrollViewport_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx._totalContentWidth)("height", ctx._totalContentHeight);
        }
      },
      styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    CdkVirtualScrollViewport.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [VIRTUAL_SCROLL_STRATEGY]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: ScrollDispatcher
      }, {
        type: ViewportRuler,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };

    CdkVirtualScrollViewport.propDecorators = {
      orientation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      scrolledIndexChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      _contentWrapper: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: ['contentWrapper', {
          "static": true
        }]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkVirtualScrollViewport, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'cdk-virtual-scroll-viewport',
          template: "<!--\n  Wrap the rendered content in an element that will be used to offset it based on the scroll\n  position.\n-->\n<div #contentWrapper class=\"cdk-virtual-scroll-content-wrapper\">\n  <ng-content></ng-content>\n</div>\n<!--\n  Spacer used to force the scrolling container to the correct size for the *total* number of items\n  so that the scrollbar captures the size of the entire data set.\n-->\n<div class=\"cdk-virtual-scroll-spacer\"\n     [style.width]=\"_totalContentWidth\" [style.height]=\"_totalContentHeight\"></div>\n",
          host: {
            'class': 'cdk-virtual-scroll-viewport',
            '[class.cdk-virtual-scroll-orientation-horizontal]': 'orientation === "horizontal"',
            '[class.cdk-virtual-scroll-orientation-vertical]': 'orientation !== "horizontal"'
          },
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
          providers: [{
            provide: CdkScrollable,
            useExisting: CdkVirtualScrollViewport
          }],
          styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [VIRTUAL_SCROLL_STRATEGY]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: ScrollDispatcher
        }, {
          type: ViewportRuler,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      }, {
        scrolledIndexChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        orientation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        _contentWrapper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['contentWrapper', {
            "static": true
          }]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/scrolling/virtual-for-of.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Helper to extract size from a DOM Node.
     * @param {?} orientation
     * @param {?} node
     * @return {?}
     */


    function getSize(orientation, node) {
      /** @type {?} */
      var el =
      /** @type {?} */
      node;

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


    var CdkVirtualForOf = /*#__PURE__*/function () {
      /**
       * @param {?} _viewContainerRef
       * @param {?} _template
       * @param {?} _differs
       * @param {?} _viewport
       * @param {?} ngZone
       */
      function CdkVirtualForOf(_viewContainerRef, _template, _differs, _viewport, ngZone) {
        var _this15 = this;

        _classCallCheck(this, CdkVirtualForOf);

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

        this.dataStream = this._dataSourceChanges.pipe( // Start off with null `DataSource`.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(
        /** @type {?} */
        null), // Bundle up the previous and current data sources so we can work with both.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pairwise"])(), // Use `_changeDataSource` to disconnect from the previous data source and connect to the
        // new one, passing back a stream of data changes which we run through `switchMap` to give
        // us a data stream that emits the latest data from whatever the current `DataSource` is.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(
        /**
        * @param {?} __0
        * @return {?}
        */
        function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              prev = _ref2[0],
              cur = _ref2[1];

          return _this15._changeDataSource(prev, cur);
        }), // Replay the last emitted data when someone subscribes.
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
        this.dataStream.subscribe(
        /**
        * @param {?} data
        * @return {?}
        */
        function (data) {
          _this15._data = data;

          _this15._onRenderedDataChange();
        });

        this._viewport.renderedRangeStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(
        /**
        * @param {?} range
        * @return {?}
        */
        function (range) {
          _this15._renderedRange = range;
          ngZone.run(
          /**
          * @return {?}
          */
          function () {
            return _this15.viewChange.next(_this15._renderedRange);
          });

          _this15._onRenderedDataChange();
        });

        this._viewport.attach(this);
      }
      /**
       * The DataSource to display.
       * @return {?}
       */


      _createClass(CdkVirtualForOf, [{
        key: "measureRangeSize",

        /**
         * Measures the combined size (width for horizontal orientation, height for vertical) of all items
         * in the specified range. Throws an error if the range includes items that are not currently
         * rendered.
         * @param {?} range
         * @param {?} orientation
         * @return {?}
         */
        value: function measureRangeSize(range, orientation) {
          if (range.start >= range.end) {
            return 0;
          }

          if (range.start < this._renderedRange.start || range.end > this._renderedRange.end) {
            throw Error("Error: attempted to measure an item that isn't rendered.");
          } // The index into the list of rendered views for the first item in the range.

          /** @type {?} */


          var renderedStartIndex = range.start - this._renderedRange.start; // The length of the range we're measuring.

          /** @type {?} */

          var rangeLen = range.end - range.start; // Loop over all root nodes for all items in the range and sum up their size.

          /** @type {?} */

          var totalSize = 0;
          /** @type {?} */

          var i = rangeLen;

          while (i--) {
            /** @type {?} */
            var view =
            /** @type {?} */
            this._viewContainerRef.get(i + renderedStartIndex);
            /** @type {?} */


            var j = view ? view.rootNodes.length : 0;

            while (j--) {
              totalSize += getSize(orientation,
              /** @type {?} */
              view.rootNodes[j]);
            }
          }

          return totalSize;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          if (this._differ && this._needsUpdate) {
            // TODO(mmalerba): We should differentiate needs update due to scrolling and a new portion of
            // this list being rendered (can use simpler algorithm) vs needs update due to data actually
            // changing (need to do this diff).

            /** @type {?} */
            var changes = this._differ.diff(this._renderedItems);

            if (!changes) {
              this._updateContext();
            } else {
              this._applyChanges(changes);
            }

            this._needsUpdate = false;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._viewport.detach();

          this._dataSourceChanges.next();

          this._dataSourceChanges.complete();

          this.viewChange.complete();

          this._destroyed.next();

          this._destroyed.complete();

          var _iterator2 = _createForOfIteratorHelper(this._templateCache),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var view = _step2.value;
              view.destroy();
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
        /**
         * React to scroll state changes in the viewport.
         * @private
         * @return {?}
         */

      }, {
        key: "_onRenderedDataChange",
        value: function _onRenderedDataChange() {
          if (!this._renderedRange) {
            return;
          }

          this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);

          if (!this._differ) {
            this._differ = this._differs.find(this._renderedItems).create(this.cdkVirtualForTrackBy);
          }

          this._needsUpdate = true;
        }
        /**
         * Swap out one `DataSource` for another.
         * @private
         * @param {?} oldDs
         * @param {?} newDs
         * @return {?}
         */

      }, {
        key: "_changeDataSource",
        value: function _changeDataSource(oldDs, newDs) {
          if (oldDs) {
            oldDs.disconnect(this);
          }

          this._needsUpdate = true;
          return newDs ? newDs.connect(this) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
        }
        /**
         * Update the `CdkVirtualForOfContext` for all views.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateContext",
        value: function _updateContext() {
          /** @type {?} */
          var count = this._data.length;
          /** @type {?} */

          var i = this._viewContainerRef.length;

          while (i--) {
            /** @type {?} */
            var view =
            /** @type {?} */
            this._viewContainerRef.get(i);

            view.context.index = this._renderedRange.start + i;
            view.context.count = count;

            this._updateComputedContextProperties(view.context);

            view.detectChanges();
          }
        }
        /**
         * Apply changes to the DOM.
         * @private
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "_applyChanges",
        value: function _applyChanges(changes) {
          var _this16 = this;

          // Rearrange the views to put them in the right location.
          changes.forEachOperation(
          /**
          * @param {?} record
          * @param {?} adjustedPreviousIndex
          * @param {?} currentIndex
          * @return {?}
          */
          function (record, adjustedPreviousIndex, currentIndex) {
            if (record.previousIndex == null) {
              // Item added.
              // Item added.

              /** @type {?} */
              var view = _this16._insertViewForNewItem(
              /** @type {?} */
              currentIndex);

              view.context.$implicit = record.item;
            } else if (currentIndex == null) {
              // Item removed.
              _this16._cacheView(_this16._detachView(
              /** @type {?} */
              adjustedPreviousIndex));
            } else {
              // Item moved.
              // Item moved.

              /** @type {?} */
              var _view =
              /** @type {?} */
              _this16._viewContainerRef.get(
              /** @type {?} */
              adjustedPreviousIndex);

              _this16._viewContainerRef.move(_view, currentIndex);

              _view.context.$implicit = record.item;
            }
          }); // Update $implicit for any items that had an identity change.

          changes.forEachIdentityChange(
          /**
          * @param {?} record
          * @return {?}
          */
          function (record) {
            /** @type {?} */
            var view =
            /** @type {?} */
            _this16._viewContainerRef.get(
            /** @type {?} */
            record.currentIndex);

            view.context.$implicit = record.item;
          }); // Update the context variables on all items.

          /** @type {?} */

          var count = this._data.length;
          /** @type {?} */

          var i = this._viewContainerRef.length;

          while (i--) {
            /** @type {?} */
            var view =
            /** @type {?} */
            this._viewContainerRef.get(i);

            view.context.index = this._renderedRange.start + i;
            view.context.count = count;

            this._updateComputedContextProperties(view.context);
          }
        }
        /**
         * Cache the given detached view.
         * @private
         * @param {?} view
         * @return {?}
         */

      }, {
        key: "_cacheView",
        value: function _cacheView(view) {
          if (this._templateCache.length < this.cdkVirtualForTemplateCacheSize) {
            this._templateCache.push(view);
          } else {
            /** @type {?} */
            var index = this._viewContainerRef.indexOf(view); // It's very unlikely that the index will ever be -1, but just in case,
            // destroy the view on its own, otherwise destroy it through the
            // container to ensure that all the references are removed.


            if (index === -1) {
              view.destroy();
            } else {
              this._viewContainerRef.remove(index);
            }
          }
        }
        /**
         * Inserts a view for a new item, either from the cache or by creating a new one.
         * @private
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_insertViewForNewItem",
        value: function _insertViewForNewItem(index) {
          return this._insertViewFromCache(index) || this._createEmbeddedViewAt(index);
        }
        /**
         * Update the computed properties on the `CdkVirtualForOfContext`.
         * @private
         * @param {?} context
         * @return {?}
         */

      }, {
        key: "_updateComputedContextProperties",
        value: function _updateComputedContextProperties(context) {
          context.first = context.index === 0;
          context.last = context.index === context.count - 1;
          context.even = context.index % 2 === 0;
          context.odd = !context.even;
        }
        /**
         * Creates a new embedded view and moves it to the given index
         * @private
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_createEmbeddedViewAt",
        value: function _createEmbeddedViewAt(index) {
          // Note that it's important that we insert the item directly at the proper index,
          // rather than inserting it and the moving it in place, because if there's a directive
          // on the same node that injects the `ViewContainerRef`, Angular will insert another
          // comment node which can throw off the move when it's being repeated for all items.
          return this._viewContainerRef.createEmbeddedView(this._template, {
            $implicit:
            /** @type {?} */
            null,
            // It's guaranteed that the iterable is not "undefined" or "null" because we only
            // generate views for elements if the "cdkVirtualForOf" iterable has elements.
            cdkVirtualForOf:
            /** @type {?} */
            this._cdkVirtualForOf,
            index: -1,
            count: -1,
            first: false,
            last: false,
            odd: false,
            even: false
          }, index);
        }
        /**
         * Inserts a recycled view from the cache at the given index.
         * @private
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_insertViewFromCache",
        value: function _insertViewFromCache(index) {
          /** @type {?} */
          var cachedView = this._templateCache.pop();

          if (cachedView) {
            this._viewContainerRef.insert(cachedView, index);
          }

          return cachedView || null;
        }
        /**
         * Detaches the embedded view at the given index.
         * @private
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_detachView",
        value: function _detachView(index) {
          return (
            /** @type {?} */
            this._viewContainerRef.detach(index)
          );
        }
      }, {
        key: "cdkVirtualForOf",
        get: function get() {
          return this._cdkVirtualForOf;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._cdkVirtualForOf = value;

          if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["isDataSource"])(value)) {
            this._dataSourceChanges.next(value);
          } else {
            // Slice the value if its an NgIterable to ensure we're working with an array.
            this._dataSourceChanges.next(new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["ArrayDataSource"](Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["isObservable"])(value) ? value : Array.prototype.slice.call(value || [])));
          }
        }
        /**
         * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
         * the item and produces a value to be used as the item's identity when tracking changes.
         * @return {?}
         */

      }, {
        key: "cdkVirtualForTrackBy",
        get: function get() {
          return this._cdkVirtualForTrackBy;
        }
        /**
         * @param {?} fn
         * @return {?}
         */
        ,
        set: function set(fn) {
          var _this17 = this;

          this._needsUpdate = true;
          this._cdkVirtualForTrackBy = fn ?
          /**
          * @param {?} index
          * @param {?} item
          * @return {?}
          */
          function (index, item) {
            return fn(index + (_this17._renderedRange ? _this17._renderedRange.start : 0), item);
          } : undefined;
        }
        /**
         * The template used to stamp out new elements.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "cdkVirtualForTemplate",
        set: function set(value) {
          if (value) {
            this._needsUpdate = true;
            this._template = value;
          }
        }
      }]);

      return CdkVirtualForOf;
    }();

    CdkVirtualForOf.ɵfac = function CdkVirtualForOf_Factory(t) {
      return new (t || CdkVirtualForOf)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CdkVirtualScrollViewport, 4), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    CdkVirtualForOf.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkVirtualForOf,
      selectors: [["", "cdkVirtualFor", "", "cdkVirtualForOf", ""]],
      inputs: {
        cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize",
        cdkVirtualForOf: "cdkVirtualForOf",
        cdkVirtualForTrackBy: "cdkVirtualForTrackBy",
        cdkVirtualForTemplate: "cdkVirtualForTemplate"
      }
    });
    /** @nocollapse */

    CdkVirtualForOf.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]
      }, {
        type: CdkVirtualScrollViewport,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    CdkVirtualForOf.propDecorators = {
      cdkVirtualForOf: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      cdkVirtualForTrackBy: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      cdkVirtualForTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      cdkVirtualForTemplateCacheSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkVirtualForOf, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[cdkVirtualFor][cdkVirtualForOf]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]
        }, {
          type: CdkVirtualScrollViewport,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, {
        cdkVirtualForTemplateCacheSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cdkVirtualForOf: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cdkVirtualForTrackBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cdkVirtualForTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/scrolling/scrolling-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ScrollingModule = function ScrollingModule() {
      _classCallCheck(this, ScrollingModule);
    };

    ScrollingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ScrollingModule
    });
    ScrollingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ScrollingModule_Factory(t) {
        return new (t || ScrollingModule)();
      },
      imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"]], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ScrollingModule, {
        declarations: function declarations() {
          return [CdkFixedSizeVirtualScroll, CdkScrollable, CdkVirtualForOf, CdkVirtualScrollViewport];
        },
        imports: function imports() {
          return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"]];
        },
        exports: function exports() {
          return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], CdkFixedSizeVirtualScroll, CdkScrollable, CdkVirtualForOf, CdkVirtualScrollViewport];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScrollingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"]],
          exports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], CdkFixedSizeVirtualScroll, CdkScrollable, CdkVirtualForOf, CdkVirtualScrollViewport],
          declarations: [CdkFixedSizeVirtualScroll, CdkScrollable, CdkVirtualForOf, CdkVirtualScrollViewport]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/scrolling/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=scrolling.js.map

    /***/

  }
}]);
//# sourceMappingURL=default~pages-angular-material-components-mat-drag-drop-mat-drag-drop-module~pages-angular-material-~3b8e4066-es5.js.map