function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-angular-material-components-mat-input-mat-input-module~pages-angular-material-componen~4d3eede4"], {
  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js":
  /*!********************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js ***!
    \********************************************************************/

  /*! exports provided: CdkScrollable, ScrollDispatcher, ViewportRuler, BlockScrollStrategy, CdkConnectedOverlay, CdkOverlayOrigin, CloseScrollStrategy, ConnectedOverlayPositionChange, ConnectedPositionStrategy, ConnectionPositionPair, FlexibleConnectedPositionStrategy, FullscreenOverlayContainer, GlobalPositionStrategy, NoopScrollStrategy, OVERLAY_PROVIDERS, Overlay, OverlayConfig, OverlayContainer, OverlayKeyboardDispatcher, OverlayModule, OverlayPositionBuilder, OverlayRef, RepositionScrollStrategy, ScrollStrategyOptions, ScrollingVisibility, validateHorizontalPosition, validateVerticalPosition, ɵangular_material_src_cdk_overlay_overlay_a, ɵangular_material_src_cdk_overlay_overlay_b, ɵangular_material_src_cdk_overlay_overlay_c, ɵangular_material_src_cdk_overlay_overlay_d, ɵangular_material_src_cdk_overlay_overlay_e, ɵangular_material_src_cdk_overlay_overlay_f, ɵangular_material_src_cdk_overlay_overlay_g */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015OverlayJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlockScrollStrategy", function () {
      return BlockScrollStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkConnectedOverlay", function () {
      return CdkConnectedOverlay;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkOverlayOrigin", function () {
      return CdkOverlayOrigin;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CloseScrollStrategy", function () {
      return CloseScrollStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConnectedOverlayPositionChange", function () {
      return ConnectedOverlayPositionChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConnectedPositionStrategy", function () {
      return ConnectedPositionStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConnectionPositionPair", function () {
      return ConnectionPositionPair;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlexibleConnectedPositionStrategy", function () {
      return FlexibleConnectedPositionStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FullscreenOverlayContainer", function () {
      return FullscreenOverlayContainer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalPositionStrategy", function () {
      return GlobalPositionStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NoopScrollStrategy", function () {
      return NoopScrollStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OVERLAY_PROVIDERS", function () {
      return OVERLAY_PROVIDERS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Overlay", function () {
      return Overlay;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlayConfig", function () {
      return OverlayConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlayContainer", function () {
      return OverlayContainer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlayKeyboardDispatcher", function () {
      return OverlayKeyboardDispatcher;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlayModule", function () {
      return OverlayModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlayPositionBuilder", function () {
      return OverlayPositionBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlayRef", function () {
      return OverlayRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RepositionScrollStrategy", function () {
      return RepositionScrollStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollStrategyOptions", function () {
      return ScrollStrategyOptions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollingVisibility", function () {
      return ScrollingVisibility;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "validateHorizontalPosition", function () {
      return validateHorizontalPosition;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "validateVerticalPosition", function () {
      return validateVerticalPosition;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_a", function () {
      return OVERLAY_CONTAINER_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_b", function () {
      return OVERLAY_CONTAINER_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_c", function () {
      return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_d", function () {
      return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_e", function () {
      return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_f", function () {
      return OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_g", function () {
      return OVERLAY_KEYBOARD_DISPATCHER_PROVIDER;
    });
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CdkScrollable", function () {
      return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkScrollable"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ScrollDispatcher", function () {
      return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ViewportRuler", function () {
      return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"];
    });
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/scroll/block-scroll-strategy.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Strategy that will prevent the user from scrolling while the overlay is visible.
     */


    var BlockScrollStrategy = /*#__PURE__*/function () {
      /**
       * @param {?} _viewportRuler
       * @param {?} document
       */
      function BlockScrollStrategy(_viewportRuler, document) {
        _classCallCheck(this, BlockScrollStrategy);

        this._viewportRuler = _viewportRuler;
        this._previousHTMLStyles = {
          top: '',
          left: ''
        };
        this._isEnabled = false;
        this._document = document;
      }
      /**
       * Attaches this scroll strategy to an overlay.
       * @return {?}
       */


      _createClass(BlockScrollStrategy, [{
        key: "attach",
        value: function attach() {}
        /**
         * Blocks page-level scroll while the attached overlay is open.
         * @return {?}
         */

      }, {
        key: "enable",
        value: function enable() {
          if (this._canBeEnabled()) {
            /** @type {?} */
            var root =
            /** @type {?} */
            this._document.documentElement;
            this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition(); // Cache the previous inline styles in case the user had set them.

            this._previousHTMLStyles.left = root.style.left || '';
            this._previousHTMLStyles.top = root.style.top || ''; // Note: we're using the `html` node, instead of the `body`, because the `body` may
            // have the user agent margin, whereas the `html` is guaranteed not to have one.

            root.style.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(-this._previousScrollPosition.left);
            root.style.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(-this._previousScrollPosition.top);
            root.classList.add('cdk-global-scrollblock');
            this._isEnabled = true;
          }
        }
        /**
         * Unblocks page-level scroll while the attached overlay is open.
         * @return {?}
         */

      }, {
        key: "disable",
        value: function disable() {
          if (this._isEnabled) {
            /** @type {?} */
            var html =
            /** @type {?} */
            this._document.documentElement;
            /** @type {?} */

            var body =
            /** @type {?} */
            this._document.body;
            /** @type {?} */

            var htmlStyle =
            /** @type {?} */
            html.style;
            /** @type {?} */

            var bodyStyle =
            /** @type {?} */
            body.style;
            /** @type {?} */

            var previousHtmlScrollBehavior = htmlStyle.scrollBehavior || '';
            /** @type {?} */

            var previousBodyScrollBehavior = bodyStyle.scrollBehavior || '';
            this._isEnabled = false;
            htmlStyle.left = this._previousHTMLStyles.left;
            htmlStyle.top = this._previousHTMLStyles.top;
            html.classList.remove('cdk-global-scrollblock'); // Disable user-defined smooth scrolling temporarily while we restore the scroll position.
            // See https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior

            htmlStyle.scrollBehavior = bodyStyle.scrollBehavior = 'auto';
            window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top);
            htmlStyle.scrollBehavior = previousHtmlScrollBehavior;
            bodyStyle.scrollBehavior = previousBodyScrollBehavior;
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_canBeEnabled",
        value: function _canBeEnabled() {
          // Since the scroll strategies can't be singletons, we have to use a global CSS class
          // (`cdk-global-scrollblock`) to make sure that we don't try to disable global
          // scrolling multiple times.

          /** @type {?} */
          var html =
          /** @type {?} */
          this._document.documentElement;

          if (html.classList.contains('cdk-global-scrollblock') || this._isEnabled) {
            return false;
          }
          /** @type {?} */


          var body = this._document.body;
          /** @type {?} */

          var viewport = this._viewportRuler.getViewportSize();

          return body.scrollHeight > viewport.height || body.scrollWidth > viewport.width;
        }
      }]);

      return BlockScrollStrategy;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/scroll/scroll-strategy.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Describes a strategy that will be used by an overlay to handle scroll events while it is open.
     * @record
     */


    function ScrollStrategy() {}

    if (false) {}
    /**
     * Returns an error to be thrown when attempting to attach an already-attached scroll strategy.
     * @return {?}
     */


    function getMatScrollStrategyAlreadyAttachedError() {
      return Error("Scroll strategy has already been attached.");
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/scroll/close-scroll-strategy.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Config options for the CloseScrollStrategy.
     * @record
     */


    function CloseScrollStrategyConfig() {}

    if (false) {}
    /**
     * Strategy that will close the overlay as soon as the user starts scrolling.
     */


    var CloseScrollStrategy = /*#__PURE__*/function () {
      /**
       * @param {?} _scrollDispatcher
       * @param {?} _ngZone
       * @param {?} _viewportRuler
       * @param {?=} _config
       */
      function CloseScrollStrategy(_scrollDispatcher, _ngZone, _viewportRuler, _config) {
        var _this = this;

        _classCallCheck(this, CloseScrollStrategy);

        this._scrollDispatcher = _scrollDispatcher;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._config = _config;
        this._scrollSubscription = null;
        /**
         * Detaches the overlay ref and disables the scroll strategy.
         */

        this._detach =
        /**
        * @return {?}
        */
        function () {
          _this.disable();

          if (_this._overlayRef.hasAttached()) {
            _this._ngZone.run(
            /**
            * @return {?}
            */
            function () {
              return _this._overlayRef.detach();
            });
          }
        };
      }
      /**
       * Attaches this scroll strategy to an overlay.
       * @param {?} overlayRef
       * @return {?}
       */


      _createClass(CloseScrollStrategy, [{
        key: "attach",
        value: function attach(overlayRef) {
          if (this._overlayRef) {
            throw getMatScrollStrategyAlreadyAttachedError();
          }

          this._overlayRef = overlayRef;
        }
        /**
         * Enables the closing of the attached overlay on scroll.
         * @return {?}
         */

      }, {
        key: "enable",
        value: function enable() {
          var _this2 = this;

          if (this._scrollSubscription) {
            return;
          }
          /** @type {?} */


          var stream = this._scrollDispatcher.scrolled(0);

          if (this._config && this._config.threshold && this._config.threshold > 1) {
            this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top;
            this._scrollSubscription = stream.subscribe(
            /**
            * @return {?}
            */
            function () {
              /** @type {?} */
              var scrollPosition = _this2._viewportRuler.getViewportScrollPosition().top;

              if (Math.abs(scrollPosition - _this2._initialScrollPosition) >
              /** @type {?} */

              /** @type {?} */
              _this2._config.threshold) {
                _this2._detach();
              } else {
                _this2._overlayRef.updatePosition();
              }
            });
          } else {
            this._scrollSubscription = stream.subscribe(this._detach);
          }
        }
        /**
         * Disables the closing the attached overlay on scroll.
         * @return {?}
         */

      }, {
        key: "disable",
        value: function disable() {
          if (this._scrollSubscription) {
            this._scrollSubscription.unsubscribe();

            this._scrollSubscription = null;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "detach",
        value: function detach() {
          this.disable();
          this._overlayRef =
          /** @type {?} */
          null;
        }
      }]);

      return CloseScrollStrategy;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/scroll/noop-scroll-strategy.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Scroll strategy that doesn't do anything.
     */


    var NoopScrollStrategy = /*#__PURE__*/function () {
      function NoopScrollStrategy() {
        _classCallCheck(this, NoopScrollStrategy);
      }

      _createClass(NoopScrollStrategy, [{
        key: "enable",

        /**
         * Does nothing, as this scroll strategy is a no-op.
         * @return {?}
         */
        value: function enable() {}
        /**
         * Does nothing, as this scroll strategy is a no-op.
         * @return {?}
         */

      }, {
        key: "disable",
        value: function disable() {}
        /**
         * Does nothing, as this scroll strategy is a no-op.
         * @return {?}
         */

      }, {
        key: "attach",
        value: function attach() {}
      }]);

      return NoopScrollStrategy;
    }();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/position/scroll-clip.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // TODO(jelbourn): move this to live with the rest of the scrolling code
    // TODO(jelbourn): someday replace this with IntersectionObservers

    /**
     * Gets whether an element is scrolled outside of view by any of its parent scrolling containers.
     * \@docs-private
     * @param {?} element Dimensions of the element (from getBoundingClientRect)
     * @param {?} scrollContainers Dimensions of element's scrolling containers (from getBoundingClientRect)
     * @return {?} Whether the element is scrolled out of view
     */


    function isElementScrolledOutsideView(element, scrollContainers) {
      return scrollContainers.some(
      /**
      * @param {?} containerBounds
      * @return {?}
      */
      function (containerBounds) {
        /** @type {?} */
        var outsideAbove = element.bottom < containerBounds.top;
        /** @type {?} */

        var outsideBelow = element.top > containerBounds.bottom;
        /** @type {?} */

        var outsideLeft = element.right < containerBounds.left;
        /** @type {?} */

        var outsideRight = element.left > containerBounds.right;
        return outsideAbove || outsideBelow || outsideLeft || outsideRight;
      });
    }
    /**
     * Gets whether an element is clipped by any of its scrolling containers.
     * \@docs-private
     * @param {?} element Dimensions of the element (from getBoundingClientRect)
     * @param {?} scrollContainers Dimensions of element's scrolling containers (from getBoundingClientRect)
     * @return {?} Whether the element is clipped
     */


    function isElementClippedByScrolling(element, scrollContainers) {
      return scrollContainers.some(
      /**
      * @param {?} scrollContainerRect
      * @return {?}
      */
      function (scrollContainerRect) {
        /** @type {?} */
        var clippedAbove = element.top < scrollContainerRect.top;
        /** @type {?} */

        var clippedBelow = element.bottom > scrollContainerRect.bottom;
        /** @type {?} */

        var clippedLeft = element.left < scrollContainerRect.left;
        /** @type {?} */

        var clippedRight = element.right > scrollContainerRect.right;
        return clippedAbove || clippedBelow || clippedLeft || clippedRight;
      });
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/scroll/reposition-scroll-strategy.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Config options for the RepositionScrollStrategy.
     * @record
     */


    function RepositionScrollStrategyConfig() {}

    if (false) {}
    /**
     * Strategy that will update the element position as the user is scrolling.
     */


    var RepositionScrollStrategy = /*#__PURE__*/function () {
      /**
       * @param {?} _scrollDispatcher
       * @param {?} _viewportRuler
       * @param {?} _ngZone
       * @param {?=} _config
       */
      function RepositionScrollStrategy(_scrollDispatcher, _viewportRuler, _ngZone, _config) {
        _classCallCheck(this, RepositionScrollStrategy);

        this._scrollDispatcher = _scrollDispatcher;
        this._viewportRuler = _viewportRuler;
        this._ngZone = _ngZone;
        this._config = _config;
        this._scrollSubscription = null;
      }
      /**
       * Attaches this scroll strategy to an overlay.
       * @param {?} overlayRef
       * @return {?}
       */


      _createClass(RepositionScrollStrategy, [{
        key: "attach",
        value: function attach(overlayRef) {
          if (this._overlayRef) {
            throw getMatScrollStrategyAlreadyAttachedError();
          }

          this._overlayRef = overlayRef;
        }
        /**
         * Enables repositioning of the attached overlay on scroll.
         * @return {?}
         */

      }, {
        key: "enable",
        value: function enable() {
          var _this3 = this;

          if (!this._scrollSubscription) {
            /** @type {?} */
            var throttle = this._config ? this._config.scrollThrottle : 0;
            this._scrollSubscription = this._scrollDispatcher.scrolled(throttle).subscribe(
            /**
            * @return {?}
            */
            function () {
              _this3._overlayRef.updatePosition(); // TODO(crisbeto): make `close` on by default once all components can handle it.


              if (_this3._config && _this3._config.autoClose) {
                /** @type {?} */
                var overlayRect = _this3._overlayRef.overlayElement.getBoundingClientRect();

                var _this3$_viewportRuler = _this3._viewportRuler.getViewportSize(),
                    width = _this3$_viewportRuler.width,
                    height = _this3$_viewportRuler.height; // TODO(crisbeto): include all ancestor scroll containers here once
                // we have a way of exposing the trigger element to the scroll strategy.

                /** @type {?} */


                var parentRects = [{
                  width: width,
                  height: height,
                  bottom: height,
                  right: width,
                  top: 0,
                  left: 0
                }];

                if (isElementScrolledOutsideView(overlayRect, parentRects)) {
                  _this3.disable();

                  _this3._ngZone.run(
                  /**
                  * @return {?}
                  */
                  function () {
                    return _this3._overlayRef.detach();
                  });
                }
              }
            });
          }
        }
        /**
         * Disables repositioning of the attached overlay on scroll.
         * @return {?}
         */

      }, {
        key: "disable",
        value: function disable() {
          if (this._scrollSubscription) {
            this._scrollSubscription.unsubscribe();

            this._scrollSubscription = null;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "detach",
        value: function detach() {
          this.disable();
          this._overlayRef =
          /** @type {?} */
          null;
        }
      }]);

      return RepositionScrollStrategy;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/scroll/scroll-strategy-options.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Options for how an overlay will handle scrolling.
     *
     * Users can provide a custom value for `ScrollStrategyOptions` to replace the default
     * behaviors. This class primarily acts as a factory for ScrollStrategy instances.
     */


    var ScrollStrategyOptions =
    /**
     * @param {?} _scrollDispatcher
     * @param {?} _viewportRuler
     * @param {?} _ngZone
     * @param {?} document
     */
    function ScrollStrategyOptions(_scrollDispatcher, _viewportRuler, _ngZone, document) {
      var _this4 = this;

      _classCallCheck(this, ScrollStrategyOptions);

      this._scrollDispatcher = _scrollDispatcher;
      this._viewportRuler = _viewportRuler;
      this._ngZone = _ngZone;
      /**
       * Do nothing on scroll.
       */

      this.noop =
      /**
      * @return {?}
      */
      function () {
        return new NoopScrollStrategy();
      };
      /**
       * Close the overlay as soon as the user scrolls.
       * @param config Configuration to be used inside the scroll strategy.
       */


      this.close =
      /**
      * @param {?=} config
      * @return {?}
      */
      function (config) {
        return new CloseScrollStrategy(_this4._scrollDispatcher, _this4._ngZone, _this4._viewportRuler, config);
      };
      /**
       * Block scrolling.
       */


      this.block =
      /**
      * @return {?}
      */
      function () {
        return new BlockScrollStrategy(_this4._viewportRuler, _this4._document);
      };
      /**
       * Update the overlay's position on scroll.
       * @param config Configuration to be used inside the scroll strategy.
       * Allows debouncing the reposition calls.
       */


      this.reposition =
      /**
      * @param {?=} config
      * @return {?}
      */
      function (config) {
        return new RepositionScrollStrategy(_this4._scrollDispatcher, _this4._viewportRuler, _this4._ngZone, config);
      };

      this._document = document;
    };

    ScrollStrategyOptions.ɵfac = function ScrollStrategyOptions_Factory(t) {
      return new (t || ScrollStrategyOptions)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
    };
    /** @nocollapse */


    ScrollStrategyOptions.ctorParameters = function () {
      return [{
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"]
      }, {
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
        }]
      }];
    };
    /** @nocollapse */


    ScrollStrategyOptions.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function ScrollStrategyOptions_Factory() {
        return new ScrollStrategyOptions(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
      },
      token: ScrollStrategyOptions,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScrollStrategyOptions, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/scroll/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/overlay-config.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Initial configuration used when creating an overlay.
     */


    var OverlayConfig =
    /**
     * @param {?=} config
     */
    function OverlayConfig(config) {
      _classCallCheck(this, OverlayConfig);

      /**
       * Strategy to be used when handling scroll events while the overlay is open.
       */
      this.scrollStrategy = new NoopScrollStrategy();
      /**
       * Custom class to add to the overlay pane.
       */

      this.panelClass = '';
      /**
       * Whether the overlay has a backdrop.
       */

      this.hasBackdrop = false;
      /**
       * Custom class to add to the backdrop
       */

      this.backdropClass = 'cdk-overlay-dark-backdrop';
      /**
       * Whether the overlay should be disposed of when the user goes backwards/forwards in history.
       * Note that this usually doesn't include clicking on links (unless the user is using
       * the `HashLocationStrategy`).
       */

      this.disposeOnNavigation = false;

      if (config) {
        // Use `Iterable` instead of `Array` because TypeScript, as of 3.6.3,
        // loses the array generic type in the `for of`. But we *also* have to use `Array` because
        // typescript won't iterate over an `Iterable` unless you compile with `--downlevelIteration`

        /** @type {?} */
        var configKeys =
        /** @type {?} */
        Object.keys(config);

        for (var _i = 0, _configKeys = configKeys; _i < _configKeys.length; _i++) {
          var key = _configKeys[_i];

          if (config[key] !== undefined) {
            // TypeScript, as of version 3.5, sees the left-hand-side of this expression
            // as "I don't know *which* key this is, so the only valid value is the intersection
            // of all the posible values." In this case, that happens to be `undefined`. TypeScript
            // is not smart enough to see that the right-hand-side is actually an access of the same
            // exact type with the same exact key, meaning that the value type must be identical.
            // So we use `any` to work around this.
            this[key] =
            /** @type {?} */
            config[key];
          }
        }
      }
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/position/connected-position.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * A connection point on the origin element.
     * @record
     */


    function OriginConnectionPosition() {}

    if (false) {}
    /**
     * A connection point on the overlay element.
     * @record
     */


    function OverlayConnectionPosition() {}

    if (false) {}
    /**
     * The points of the origin element and the overlay element to connect.
     */


    var ConnectionPositionPair =
    /**
     * @param {?} origin
     * @param {?} overlay
     * @param {?=} offsetX
     * @param {?=} offsetY
     * @param {?=} panelClass
     */
    function ConnectionPositionPair(origin, overlay, offsetX, offsetY, panelClass) {
      _classCallCheck(this, ConnectionPositionPair);

      this.offsetX = offsetX;
      this.offsetY = offsetY;
      this.panelClass = panelClass;
      this.originX = origin.originX;
      this.originY = origin.originY;
      this.overlayX = overlay.overlayX;
      this.overlayY = overlay.overlayY;
    };

    if (false) {}
    /**
     * Set of properties regarding the position of the origin and overlay relative to the viewport
     * with respect to the containing Scrollable elements.
     *
     * The overlay and origin are clipped if any part of their bounding client rectangle exceeds the
     * bounds of any one of the strategy's Scrollable's bounding client rectangle.
     *
     * The overlay and origin are outside view if there is no overlap between their bounding client
     * rectangle and any one of the strategy's Scrollable's bounding client rectangle.
     *
     *       -----------                    -----------
     *       | outside |                    | clipped |
     *       |  view   |              --------------------------
     *       |         |              |     |         |        |
     *       ----------               |     -----------        |
     *  --------------------------    |                        |
     *  |                        |    |      Scrollable        |
     *  |                        |    |                        |
     *  |                        |     --------------------------
     *  |      Scrollable        |
     *  |                        |
     *  --------------------------
     *
     * \@docs-private
     */


    var ScrollingVisibility = function ScrollingVisibility() {
      _classCallCheck(this, ScrollingVisibility);
    };

    if (false) {}
    /**
     * The change event emitted by the strategy when a fallback position is used.
     */


    var ConnectedOverlayPositionChange =
    /**
     * @param {?} connectionPair
     * @param {?} scrollableViewProperties
     */
    function ConnectedOverlayPositionChange(connectionPair, scrollableViewProperties) {
      _classCallCheck(this, ConnectedOverlayPositionChange);

      this.connectionPair = connectionPair;
      this.scrollableViewProperties = scrollableViewProperties;
    };
    /** @nocollapse */


    ConnectedOverlayPositionChange.ctorParameters = function () {
      return [{
        type: ConnectionPositionPair
      }, {
        type: ScrollingVisibility,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };

    if (false) {}
    /**
     * Validates whether a vertical position property matches the expected values.
     * \@docs-private
     * @param {?} property Name of the property being validated.
     * @param {?} value Value of the property being validated.
     * @return {?}
     */


    function validateVerticalPosition(property, value) {
      if (value !== 'top' && value !== 'bottom' && value !== 'center') {
        throw Error("ConnectedPosition: Invalid ".concat(property, " \"").concat(value, "\". ") + "Expected \"top\", \"bottom\" or \"center\".");
      }
    }
    /**
     * Validates whether a horizontal position property matches the expected values.
     * \@docs-private
     * @param {?} property Name of the property being validated.
     * @param {?} value Value of the property being validated.
     * @return {?}
     */


    function validateHorizontalPosition(property, value) {
      if (value !== 'start' && value !== 'end' && value !== 'center') {
        throw Error("ConnectedPosition: Invalid ".concat(property, " \"").concat(value, "\". ") + "Expected \"start\", \"end\" or \"center\".");
      }
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/keyboard/overlay-keyboard-dispatcher.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Service for dispatching keyboard events that land on the body to appropriate overlay ref,
     * if any. It maintains a list of attached overlays to determine best suited overlay based
     * on event target and order of overlay opens.
     */


    var OverlayKeyboardDispatcher = /*#__PURE__*/function () {
      /**
       * @param {?} document
       */
      function OverlayKeyboardDispatcher(document) {
        var _this5 = this;

        _classCallCheck(this, OverlayKeyboardDispatcher);

        /**
         * Currently attached overlays in the order they were attached.
         */
        this._attachedOverlays = [];
        /**
         * Keyboard event listener that will be attached to the body.
         */

        this._keydownListener =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          /** @type {?} */
          var overlays = _this5._attachedOverlays;

          for (var i = overlays.length - 1; i > -1; i--) {
            // Dispatch the keydown event to the top overlay which has subscribers to its keydown events.
            // We want to target the most recent overlay, rather than trying to match where the event came
            // from, because some components might open an overlay, but keep focus on a trigger element
            // (e.g. for select and autocomplete). We skip overlays without keydown event subscriptions,
            // because we don't want overlays that don't handle keyboard events to block the ones below
            // them that do.
            if (overlays[i]._keydownEventSubscriptions > 0) {
              overlays[i]._keydownEvents.next(event);

              break;
            }
          }
        };

        this._document = document;
      }
      /**
       * @return {?}
       */


      _createClass(OverlayKeyboardDispatcher, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._detach();
        }
        /**
         * Add a new overlay to the list of attached overlay refs.
         * @param {?} overlayRef
         * @return {?}
         */

      }, {
        key: "add",
        value: function add(overlayRef) {
          // Ensure that we don't get the same overlay multiple times.
          this.remove(overlayRef); // Lazily start dispatcher once first overlay is added

          if (!this._isAttached) {
            this._document.body.addEventListener('keydown', this._keydownListener);

            this._isAttached = true;
          }

          this._attachedOverlays.push(overlayRef);
        }
        /**
         * Remove an overlay from the list of attached overlay refs.
         * @param {?} overlayRef
         * @return {?}
         */

      }, {
        key: "remove",
        value: function remove(overlayRef) {
          /** @type {?} */
          var index = this._attachedOverlays.indexOf(overlayRef);

          if (index > -1) {
            this._attachedOverlays.splice(index, 1);
          } // Remove the global listener once there are no more overlays.


          if (this._attachedOverlays.length === 0) {
            this._detach();
          }
        }
        /**
         * Detaches the global keyboard event listener.
         * @private
         * @return {?}
         */

      }, {
        key: "_detach",
        value: function _detach() {
          if (this._isAttached) {
            this._document.body.removeEventListener('keydown', this._keydownListener);

            this._isAttached = false;
          }
        }
      }]);

      return OverlayKeyboardDispatcher;
    }();

    OverlayKeyboardDispatcher.ɵfac = function OverlayKeyboardDispatcher_Factory(t) {
      return new (t || OverlayKeyboardDispatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
    };
    /** @nocollapse */


    OverlayKeyboardDispatcher.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
        }]
      }];
    };
    /** @nocollapse */


    OverlayKeyboardDispatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function OverlayKeyboardDispatcher_Factory() {
        return new OverlayKeyboardDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
      },
      token: OverlayKeyboardDispatcher,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OverlayKeyboardDispatcher, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * \@docs-private \@deprecated \@breaking-change 8.0.0
     * @param {?} dispatcher
     * @param {?} _document
     * @return {?}
     */


    function OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY(dispatcher, _document) {
      return dispatcher || new OverlayKeyboardDispatcher(_document);
    }
    /**
     * \@docs-private \@deprecated \@breaking-change 8.0.0
     * @type {?}
     */


    var OVERLAY_KEYBOARD_DISPATCHER_PROVIDER = {
      // If there is already an OverlayKeyboardDispatcher available, use that.
      // Otherwise, provide a new one.
      provide: OverlayKeyboardDispatcher,
      deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), OverlayKeyboardDispatcher],
      /** @type {?} */
      // Coerce to `InjectionToken` so that the `deps` match the "shape"
      // of the type expected by Angular
      _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]],
      useFactory: OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/overlay-container.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Whether we're in a testing environment.
     * TODO(crisbeto): remove this once we have an overlay testing module.
     * @type {?}
     */

    var isTestEnvironment = typeof window !== 'undefined' && !!window && !!(
    /** @type {?} */
    window.__karma__ ||
    /** @type {?} */
    window.jasmine);
    /**
     * Container inside which all overlays will render.
     */

    var OverlayContainer = /*#__PURE__*/function () {
      /**
       * @param {?} document
       * @param {?=} _platform
       */
      function OverlayContainer(document, _platform) {
        _classCallCheck(this, OverlayContainer);

        this._platform = _platform;
        this._document = document;
      }
      /**
       * @return {?}
       */


      _createClass(OverlayContainer, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          /** @type {?} */
          var container = this._containerElement;

          if (container && container.parentNode) {
            container.parentNode.removeChild(container);
          }
        }
        /**
         * This method returns the overlay container element. It will lazily
         * create the element the first time  it is called to facilitate using
         * the container in non-browser environments.
         * @return {?} the container element
         */

      }, {
        key: "getContainerElement",
        value: function getContainerElement() {
          if (!this._containerElement) {
            this._createContainer();
          }

          return this._containerElement;
        }
        /**
         * Create the overlay container element, which is simply a div
         * with the 'cdk-overlay-container' class on the document body.
         * @protected
         * @return {?}
         */

      }, {
        key: "_createContainer",
        value: function _createContainer() {
          // @breaking-change 10.0.0 Remove null check for `_platform`.

          /** @type {?} */
          var isBrowser = this._platform ? this._platform.isBrowser : typeof window !== 'undefined';
          /** @type {?} */

          var containerClass = 'cdk-overlay-container';

          if (isBrowser || isTestEnvironment) {
            /** @type {?} */
            var oppositePlatformContainers = this._document.querySelectorAll(".".concat(containerClass, "[platform=\"server\"], ") + ".".concat(containerClass, "[platform=\"test\"]")); // Remove any old containers from the opposite platform.
            // This can happen when transitioning from the server to the client.


            for (var i = 0; i < oppositePlatformContainers.length; i++) {
              /** @type {?} */
              oppositePlatformContainers[i].parentNode.removeChild(oppositePlatformContainers[i]);
            }
          }
          /** @type {?} */


          var container = this._document.createElement('div');

          container.classList.add(containerClass); // A long time ago we kept adding new overlay containers whenever a new app was instantiated,
          // but at some point we added logic which clears the duplicate ones in order to avoid leaks.
          // The new logic was a little too aggressive since it was breaking some legitimate use cases.
          // To mitigate the problem we made it so that only containers from a different platform are
          // cleared, but the side-effect was that people started depending on the overly-aggressive
          // logic to clean up their tests for them. Until we can introduce an overlay-specific testing
          // module which does the cleanup, we try to detect that we're in a test environment and we
          // always clear the container. See #17006.
          // TODO(crisbeto): remove the test environment check once we have an overlay testing module.

          if (isTestEnvironment) {
            container.setAttribute('platform', 'test');
          } else if (!isBrowser) {
            container.setAttribute('platform', 'server');
          }

          this._document.body.appendChild(container);

          this._containerElement = container;
        }
      }]);

      return OverlayContainer;
    }();

    OverlayContainer.ɵfac = function OverlayContainer_Factory(t) {
      return new (t || OverlayContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]));
    };
    /** @nocollapse */


    OverlayContainer.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
        }]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }];
    };
    /** @nocollapse */


    OverlayContainer.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function OverlayContainer_Factory() {
        return new OverlayContainer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]));
      },
      token: OverlayContainer,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OverlayContainer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * \@docs-private \@deprecated \@breaking-change 8.0.0
     * @param {?} parentContainer
     * @param {?} _document
     * @return {?}
     */


    function OVERLAY_CONTAINER_PROVIDER_FACTORY(parentContainer, _document) {
      return parentContainer || new OverlayContainer(_document);
    }
    /**
     * \@docs-private \@deprecated \@breaking-change 8.0.0
     * @type {?}
     */


    var OVERLAY_CONTAINER_PROVIDER = {
      // If there is already an OverlayContainer available, use that. Otherwise, provide a new one.
      provide: OverlayContainer,
      deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), OverlayContainer],
      /** @type {?} */
      _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]],
      useFactory: OVERLAY_CONTAINER_PROVIDER_FACTORY
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/overlay-ref.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Reference to an overlay that has been created with the Overlay service.
     * Used to manipulate or dispose of said overlay.
     */

    var OverlayRef = /*#__PURE__*/function () {
      /**
       * @param {?} _portalOutlet
       * @param {?} _host
       * @param {?} _pane
       * @param {?} _config
       * @param {?} _ngZone
       * @param {?} _keyboardDispatcher
       * @param {?} _document
       * @param {?=} _location
       */
      function OverlayRef(_portalOutlet, _host, _pane, _config, _ngZone, _keyboardDispatcher, _document, _location) {
        var _this6 = this;

        _classCallCheck(this, OverlayRef);

        this._portalOutlet = _portalOutlet;
        this._host = _host;
        this._pane = _pane;
        this._config = _config;
        this._ngZone = _ngZone;
        this._keyboardDispatcher = _keyboardDispatcher;
        this._document = _document;
        this._location = _location;
        this._backdropElement = null;
        this._backdropClick = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this._attachments = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this._detachments = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this._locationChanges = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;

        this._backdropClickHandler =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          return _this6._backdropClick.next(event);
        };

        this._keydownEventsObservable = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"](
        /**
        * @param {?} observer
        * @return {?}
        */
        function (observer) {
          /** @type {?} */
          var subscription = _this6._keydownEvents.subscribe(observer);

          _this6._keydownEventSubscriptions++;
          return (
            /**
            * @return {?}
            */
            function () {
              subscription.unsubscribe();
              _this6._keydownEventSubscriptions--;
            }
          );
        });
        /**
         * Stream of keydown events dispatched to this overlay.
         */

        this._keydownEvents = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /**
         * Amount of subscriptions to the keydown events.
         */

        this._keydownEventSubscriptions = 0;

        if (_config.scrollStrategy) {
          this._scrollStrategy = _config.scrollStrategy;

          this._scrollStrategy.attach(this);
        }

        this._positionStrategy = _config.positionStrategy;
      }
      /**
       * The overlay's HTML element
       * @return {?}
       */


      _createClass(OverlayRef, [{
        key: "attach",

        /**
         * Attaches content, given via a Portal, to the overlay.
         * If the overlay is configured to have a backdrop, it will be created.
         *
         * @param {?} portal Portal instance to which to attach the overlay.
         * @return {?} The portal attachment result.
         */
        value: function attach(portal) {
          var _this7 = this;

          /** @type {?} */
          var attachResult = this._portalOutlet.attach(portal); // Update the pane element with the given configuration.


          if (!this._host.parentElement && this._previousHostParent) {
            this._previousHostParent.appendChild(this._host);
          }

          if (this._positionStrategy) {
            this._positionStrategy.attach(this);
          }

          this._updateStackingOrder();

          this._updateElementSize();

          this._updateElementDirection();

          if (this._scrollStrategy) {
            this._scrollStrategy.enable();
          } // Update the position once the zone is stable so that the overlay will be fully rendered
          // before attempting to position it, as the position may depend on the size of the rendered
          // content.


          this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1)).subscribe(
          /**
          * @return {?}
          */
          function () {
            // The overlay could've been detached before the zone has stabilized.
            if (_this7.hasAttached()) {
              _this7.updatePosition();
            }
          }); // Enable pointer events for the overlay pane element.


          this._togglePointerEvents(true);

          if (this._config.hasBackdrop) {
            this._attachBackdrop();
          }

          if (this._config.panelClass) {
            this._toggleClasses(this._pane, this._config.panelClass, true);
          } // Only emit the `attachments` event once all other setup is done.


          this._attachments.next(); // Track this overlay by the keyboard dispatcher


          this._keyboardDispatcher.add(this); // @breaking-change 8.0.0 remove the null check for `_location`
          // once the constructor parameter is made required.


          if (this._config.disposeOnNavigation && this._location) {
            this._locationChanges = this._location.subscribe(
            /**
            * @return {?}
            */
            function () {
              return _this7.dispose();
            });
          }

          return attachResult;
        }
        /**
         * Detaches an overlay from a portal.
         * @return {?} The portal detachment result.
         */

      }, {
        key: "detach",
        value: function detach() {
          if (!this.hasAttached()) {
            return;
          }

          this.detachBackdrop(); // When the overlay is detached, the pane element should disable pointer events.
          // This is necessary because otherwise the pane element will cover the page and disable
          // pointer events therefore. Depends on the position strategy and the applied pane boundaries.

          this._togglePointerEvents(false);

          if (this._positionStrategy && this._positionStrategy.detach) {
            this._positionStrategy.detach();
          }

          if (this._scrollStrategy) {
            this._scrollStrategy.disable();
          }
          /** @type {?} */


          var detachmentResult = this._portalOutlet.detach(); // Only emit after everything is detached.


          this._detachments.next(); // Remove this overlay from keyboard dispatcher tracking.


          this._keyboardDispatcher.remove(this); // Keeping the host element in the DOM can cause scroll jank, because it still gets
          // rendered, even though it's transparent and unclickable which is why we remove it.


          this._detachContentWhenStable(); // Stop listening for location changes.


          this._locationChanges.unsubscribe();

          return detachmentResult;
        }
        /**
         * Cleans up the overlay from the DOM.
         * @return {?}
         */

      }, {
        key: "dispose",
        value: function dispose() {
          /** @type {?} */
          var isAttached = this.hasAttached();

          if (this._positionStrategy) {
            this._positionStrategy.dispose();
          }

          this._disposeScrollStrategy();

          this.detachBackdrop();

          this._locationChanges.unsubscribe();

          this._keyboardDispatcher.remove(this);

          this._portalOutlet.dispose();

          this._attachments.complete();

          this._backdropClick.complete();

          this._keydownEvents.complete();

          if (this._host && this._host.parentNode) {
            this._host.parentNode.removeChild(this._host);

            this._host =
            /** @type {?} */
            null;
          }

          this._previousHostParent = this._pane =
          /** @type {?} */
          null;

          if (isAttached) {
            this._detachments.next();
          }

          this._detachments.complete();
        }
        /**
         * Whether the overlay has attached content.
         * @return {?}
         */

      }, {
        key: "hasAttached",
        value: function hasAttached() {
          return this._portalOutlet.hasAttached();
        }
        /**
         * Gets an observable that emits when the backdrop has been clicked.
         * @return {?}
         */

      }, {
        key: "backdropClick",
        value: function backdropClick() {
          return this._backdropClick.asObservable();
        }
        /**
         * Gets an observable that emits when the overlay has been attached.
         * @return {?}
         */

      }, {
        key: "attachments",
        value: function attachments() {
          return this._attachments.asObservable();
        }
        /**
         * Gets an observable that emits when the overlay has been detached.
         * @return {?}
         */

      }, {
        key: "detachments",
        value: function detachments() {
          return this._detachments.asObservable();
        }
        /**
         * Gets an observable of keydown events targeted to this overlay.
         * @return {?}
         */

      }, {
        key: "keydownEvents",
        value: function keydownEvents() {
          return this._keydownEventsObservable;
        }
        /**
         * Gets the current overlay configuration, which is immutable.
         * @return {?}
         */

      }, {
        key: "getConfig",
        value: function getConfig() {
          return this._config;
        }
        /**
         * Updates the position of the overlay based on the position strategy.
         * @return {?}
         */

      }, {
        key: "updatePosition",
        value: function updatePosition() {
          if (this._positionStrategy) {
            this._positionStrategy.apply();
          }
        }
        /**
         * Switches to a new position strategy and updates the overlay position.
         * @param {?} strategy
         * @return {?}
         */

      }, {
        key: "updatePositionStrategy",
        value: function updatePositionStrategy(strategy) {
          if (strategy === this._positionStrategy) {
            return;
          }

          if (this._positionStrategy) {
            this._positionStrategy.dispose();
          }

          this._positionStrategy = strategy;

          if (this.hasAttached()) {
            strategy.attach(this);
            this.updatePosition();
          }
        }
        /**
         * Update the size properties of the overlay.
         * @param {?} sizeConfig
         * @return {?}
         */

      }, {
        key: "updateSize",
        value: function updateSize(sizeConfig) {
          this._config = Object.assign(Object.assign({}, this._config), sizeConfig);

          this._updateElementSize();
        }
        /**
         * Sets the LTR/RTL direction for the overlay.
         * @param {?} dir
         * @return {?}
         */

      }, {
        key: "setDirection",
        value: function setDirection(dir) {
          this._config = Object.assign(Object.assign({}, this._config), {
            direction: dir
          });

          this._updateElementDirection();
        }
        /**
         * Add a CSS class or an array of classes to the overlay pane.
         * @param {?} classes
         * @return {?}
         */

      }, {
        key: "addPanelClass",
        value: function addPanelClass(classes) {
          if (this._pane) {
            this._toggleClasses(this._pane, classes, true);
          }
        }
        /**
         * Remove a CSS class or an array of classes from the overlay pane.
         * @param {?} classes
         * @return {?}
         */

      }, {
        key: "removePanelClass",
        value: function removePanelClass(classes) {
          if (this._pane) {
            this._toggleClasses(this._pane, classes, false);
          }
        }
        /**
         * Returns the layout direction of the overlay panel.
         * @return {?}
         */

      }, {
        key: "getDirection",
        value: function getDirection() {
          /** @type {?} */
          var direction = this._config.direction;

          if (!direction) {
            return 'ltr';
          }

          return typeof direction === 'string' ? direction : direction.value;
        }
        /**
         * Switches to a new scroll strategy.
         * @param {?} strategy
         * @return {?}
         */

      }, {
        key: "updateScrollStrategy",
        value: function updateScrollStrategy(strategy) {
          if (strategy === this._scrollStrategy) {
            return;
          }

          this._disposeScrollStrategy();

          this._scrollStrategy = strategy;

          if (this.hasAttached()) {
            strategy.attach(this);
            strategy.enable();
          }
        }
        /**
         * Updates the text direction of the overlay panel.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateElementDirection",
        value: function _updateElementDirection() {
          this._host.setAttribute('dir', this.getDirection());
        }
        /**
         * Updates the size of the overlay element based on the overlay config.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateElementSize",
        value: function _updateElementSize() {
          if (!this._pane) {
            return;
          }
          /** @type {?} */


          var style = this._pane.style;
          style.width = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.width);
          style.height = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.height);
          style.minWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.minWidth);
          style.minHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.minHeight);
          style.maxWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.maxWidth);
          style.maxHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.maxHeight);
        }
        /**
         * Toggles the pointer events for the overlay pane element.
         * @private
         * @param {?} enablePointer
         * @return {?}
         */

      }, {
        key: "_togglePointerEvents",
        value: function _togglePointerEvents(enablePointer) {
          this._pane.style.pointerEvents = enablePointer ? 'auto' : 'none';
        }
        /**
         * Attaches a backdrop for this overlay.
         * @private
         * @return {?}
         */

      }, {
        key: "_attachBackdrop",
        value: function _attachBackdrop() {
          var _this8 = this;

          /** @type {?} */
          var showingClass = 'cdk-overlay-backdrop-showing';
          this._backdropElement = this._document.createElement('div');

          this._backdropElement.classList.add('cdk-overlay-backdrop');

          if (this._config.backdropClass) {
            this._toggleClasses(this._backdropElement, this._config.backdropClass, true);
          } // Insert the backdrop before the pane in the DOM order,
          // in order to handle stacked overlays properly.


          /** @type {?} */
          this._host.parentElement.insertBefore(this._backdropElement, this._host); // Forward backdrop clicks such that the consumer of the overlay can perform whatever
          // action desired when such a click occurs (usually closing the overlay).


          this._backdropElement.addEventListener('click', this._backdropClickHandler); // Add class to fade-in the backdrop after one frame.


          if (typeof requestAnimationFrame !== 'undefined') {
            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              requestAnimationFrame(
              /**
              * @return {?}
              */
              function () {
                if (_this8._backdropElement) {
                  _this8._backdropElement.classList.add(showingClass);
                }
              });
            });
          } else {
            this._backdropElement.classList.add(showingClass);
          }
        }
        /**
         * Updates the stacking order of the element, moving it to the top if necessary.
         * This is required in cases where one overlay was detached, while another one,
         * that should be behind it, was destroyed. The next time both of them are opened,
         * the stacking will be wrong, because the detached element's pane will still be
         * in its original DOM position.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateStackingOrder",
        value: function _updateStackingOrder() {
          if (this._host.nextSibling) {
            /** @type {?} */
            this._host.parentNode.appendChild(this._host);
          }
        }
        /**
         * Detaches the backdrop (if any) associated with the overlay.
         * @return {?}
         */

      }, {
        key: "detachBackdrop",
        value: function detachBackdrop() {
          var _this9 = this;

          /** @type {?} */
          var backdropToDetach = this._backdropElement;

          if (!backdropToDetach) {
            return;
          }
          /** @type {?} */


          var timeoutId;
          /** @type {?} */

          var finishDetach =
          /**
          * @return {?}
          */
          function finishDetach() {
            // It may not be attached to anything in certain cases (e.g. unit tests).
            if (backdropToDetach) {
              backdropToDetach.removeEventListener('click', _this9._backdropClickHandler);
              backdropToDetach.removeEventListener('transitionend', finishDetach);

              if (backdropToDetach.parentNode) {
                backdropToDetach.parentNode.removeChild(backdropToDetach);
              }
            } // It is possible that a new portal has been attached to this overlay since we started
            // removing the backdrop. If that is the case, only clear the backdrop reference if it
            // is still the same instance that we started to remove.


            if (_this9._backdropElement == backdropToDetach) {
              _this9._backdropElement = null;
            }

            if (_this9._config.backdropClass) {
              _this9._toggleClasses(
              /** @type {?} */
              backdropToDetach, _this9._config.backdropClass, false);
            }

            clearTimeout(timeoutId);
          };

          backdropToDetach.classList.remove('cdk-overlay-backdrop-showing');

          this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            backdropToDetach.addEventListener('transitionend', finishDetach);
          }); // If the backdrop doesn't have a transition, the `transitionend` event won't fire.
          // In this case we make it unclickable and we try to remove it after a delay.


          backdropToDetach.style.pointerEvents = 'none'; // Run this outside the Angular zone because there's nothing that Angular cares about.
          // If it were to run inside the Angular zone, every test that used Overlay would have to be
          // either async or fakeAsync.

          timeoutId = this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            return setTimeout(finishDetach, 500);
          });
        }
        /**
         * Toggles a single CSS class or an array of classes on an element.
         * @private
         * @param {?} element
         * @param {?} cssClasses
         * @param {?} isAdd
         * @return {?}
         */

      }, {
        key: "_toggleClasses",
        value: function _toggleClasses(element, cssClasses, isAdd) {
          /** @type {?} */
          var classList = element.classList;
          Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceArray"])(cssClasses).forEach(
          /**
          * @param {?} cssClass
          * @return {?}
          */
          function (cssClass) {
            // We can't do a spread here, because IE doesn't support setting multiple classes.
            // Also trying to add an empty string to a DOMTokenList will throw.
            if (cssClass) {
              isAdd ? classList.add(cssClass) : classList.remove(cssClass);
            }
          });
        }
        /**
         * Detaches the overlay content next time the zone stabilizes.
         * @private
         * @return {?}
         */

      }, {
        key: "_detachContentWhenStable",
        value: function _detachContentWhenStable() {
          var _this10 = this;

          // Normally we wouldn't have to explicitly run this outside the `NgZone`, however
          // if the consumer is using `zone-patch-rxjs`, the `Subscription.unsubscribe` call will
          // be patched to run inside the zone, which will throw us into an infinite loop.
          this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            // We can't remove the host here immediately, because the overlay pane's content
            // might still be animating. This stream helps us avoid interrupting the animation
            // by waiting for the pane to become empty.

            /** @type {?} */
            var subscription = _this10._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(_this10._attachments, _this10._detachments))).subscribe(
            /**
            * @return {?}
            */
            function () {
              // Needs a couple of checks for the pane and host, because
              // they may have been removed by the time the zone stabilizes.
              if (!_this10._pane || !_this10._host || _this10._pane.children.length === 0) {
                if (_this10._pane && _this10._config.panelClass) {
                  _this10._toggleClasses(_this10._pane, _this10._config.panelClass, false);
                }

                if (_this10._host && _this10._host.parentElement) {
                  _this10._previousHostParent = _this10._host.parentElement;

                  _this10._previousHostParent.removeChild(_this10._host);
                }

                subscription.unsubscribe();
              }
            });
          });
        }
        /**
         * Disposes of a scroll strategy.
         * @private
         * @return {?}
         */

      }, {
        key: "_disposeScrollStrategy",
        value: function _disposeScrollStrategy() {
          /** @type {?} */
          var scrollStrategy = this._scrollStrategy;

          if (scrollStrategy) {
            scrollStrategy.disable();

            if (scrollStrategy.detach) {
              scrollStrategy.detach();
            }
          }
        }
      }, {
        key: "overlayElement",
        get: function get() {
          return this._pane;
        }
        /**
         * The overlay's backdrop HTML element.
         * @return {?}
         */

      }, {
        key: "backdropElement",
        get: function get() {
          return this._backdropElement;
        }
        /**
         * Wrapper around the panel element. Can be used for advanced
         * positioning where a wrapper with specific styling is
         * required around the overlay pane.
         * @return {?}
         */

      }, {
        key: "hostElement",
        get: function get() {
          return this._host;
        }
      }]);

      return OverlayRef;
    }();

    if (false) {}
    /**
     * Size properties for an overlay.
     * @record
     */


    function OverlaySizeConfig() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/position/flexible-connected-position-strategy.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // TODO: refactor clipping detection into a separate thing (part of scrolling module)
    // TODO: doesn't handle both flexible width and height when it has to scroll along both axis.

    /**
     * Class to be added to the overlay bounding box.
     * @type {?}
     */


    var boundingBoxClass = 'cdk-overlay-connected-position-bounding-box';
    /**
     * Regex used to split a string on its CSS units.
     * @type {?}
     */

    var cssUnitPattern = /([A-Za-z%]+)$/;
    /**
     * A strategy for positioning overlays. Using this strategy, an overlay is given an
     * implicit position relative some origin element. The relative position is defined in terms of
     * a point on the origin element that is connected to a point on the overlay element. For example,
     * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
     * of the overlay.
     */

    var FlexibleConnectedPositionStrategy = /*#__PURE__*/function () {
      /**
       * @param {?} connectedTo
       * @param {?} _viewportRuler
       * @param {?} _document
       * @param {?} _platform
       * @param {?} _overlayContainer
       */
      function FlexibleConnectedPositionStrategy(connectedTo, _viewportRuler, _document, _platform, _overlayContainer) {
        _classCallCheck(this, FlexibleConnectedPositionStrategy);

        this._viewportRuler = _viewportRuler;
        this._document = _document;
        this._platform = _platform;
        this._overlayContainer = _overlayContainer;
        /**
         * Last size used for the bounding box. Used to avoid resizing the overlay after open.
         */

        this._lastBoundingBoxSize = {
          width: 0,
          height: 0
        };
        /**
         * Whether the overlay was pushed in a previous positioning.
         */

        this._isPushed = false;
        /**
         * Whether the overlay can be pushed on-screen on the initial open.
         */

        this._canPush = true;
        /**
         * Whether the overlay can grow via flexible width/height after the initial open.
         */

        this._growAfterOpen = false;
        /**
         * Whether the overlay's width and height can be constrained to fit within the viewport.
         */

        this._hasFlexibleDimensions = true;
        /**
         * Whether the overlay position is locked.
         */

        this._positionLocked = false;
        /**
         * Amount of space that must be maintained between the overlay and the edge of the viewport.
         */

        this._viewportMargin = 0;
        /**
         * The Scrollable containers used to check scrollable view properties on position change.
         */

        this._scrollables = [];
        /**
         * Ordered list of preferred positions, from most to least desirable.
         */

        this._preferredPositions = [];
        /**
         * Subject that emits whenever the position changes.
         */

        this._positionChanges = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /**
         * Subscription to viewport size changes.
         */

        this._resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
        /**
         * Default offset for the overlay along the x axis.
         */

        this._offsetX = 0;
        /**
         * Default offset for the overlay along the y axis.
         */

        this._offsetY = 0;
        /**
         * Keeps track of the CSS classes that the position strategy has applied on the overlay panel.
         */

        this._appliedPanelClasses = [];
        /**
         * Observable sequence of position changes.
         */

        this.positionChanges = this._positionChanges.asObservable();
        this.setOrigin(connectedTo);
      }
      /**
       * Ordered list of preferred positions, from most to least desirable.
       * @return {?}
       */


      _createClass(FlexibleConnectedPositionStrategy, [{
        key: "attach",

        /**
         * Attaches this position strategy to an overlay.
         * @param {?} overlayRef
         * @return {?}
         */
        value: function attach(overlayRef) {
          var _this11 = this;

          if (this._overlayRef && overlayRef !== this._overlayRef) {
            throw Error('This position strategy is already attached to an overlay');
          }

          this._validatePositions();

          overlayRef.hostElement.classList.add(boundingBoxClass);
          this._overlayRef = overlayRef;
          this._boundingBox = overlayRef.hostElement;
          this._pane = overlayRef.overlayElement;
          this._isDisposed = false;
          this._isInitialRender = true;
          this._lastPosition = null;

          this._resizeSubscription.unsubscribe();

          this._resizeSubscription = this._viewportRuler.change().subscribe(
          /**
          * @return {?}
          */
          function () {
            // When the window is resized, we want to trigger the next reposition as if it
            // was an initial render, in order for the strategy to pick a new optimal position,
            // otherwise position locking will cause it to stay at the old one.
            _this11._isInitialRender = true;

            _this11.apply();
          });
        }
        /**
         * Updates the position of the overlay element, using whichever preferred position relative
         * to the origin best fits on-screen.
         *
         * The selection of a position goes as follows:
         *  - If any positions fit completely within the viewport as-is,
         *      choose the first position that does so.
         *  - If flexible dimensions are enabled and at least one satifies the given minimum width/height,
         *      choose the position with the greatest available size modified by the positions' weight.
         *  - If pushing is enabled, take the position that went off-screen the least and push it
         *      on-screen.
         *  - If none of the previous criteria were met, use the position that goes off-screen the least.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "apply",
        value: function apply() {
          // We shouldn't do anything if the strategy was disposed or we're on the server.
          if (this._isDisposed || !this._platform.isBrowser) {
            return;
          } // If the position has been applied already (e.g. when the overlay was opened) and the
          // consumer opted into locking in the position, re-use the old position, in order to
          // prevent the overlay from jumping around.


          if (!this._isInitialRender && this._positionLocked && this._lastPosition) {
            this.reapplyLastPosition();
            return;
          }

          this._clearPanelClasses();

          this._resetOverlayElementStyles();

          this._resetBoundingBoxStyles(); // We need the bounding rects for the origin and the overlay to determine how to position
          // the overlay relative to the origin.
          // We use the viewport rect to determine whether a position would go off-screen.


          this._viewportRect = this._getNarrowedViewportRect();
          this._originRect = this._getOriginRect();
          this._overlayRect = this._pane.getBoundingClientRect();
          /** @type {?} */

          var originRect = this._originRect;
          /** @type {?} */

          var overlayRect = this._overlayRect;
          /** @type {?} */

          var viewportRect = this._viewportRect; // Positions where the overlay will fit with flexible dimensions.

          /** @type {?} */

          var flexibleFits = []; // Fallback if none of the preferred positions fit within the viewport.

          /** @type {?} */

          var fallback; // Go through each of the preferred positions looking for a good fit.
          // If a good fit is found, it will be applied immediately.

          var _iterator = _createForOfIteratorHelper(this._preferredPositions),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var pos = _step.value;

              // Get the exact (x, y) coordinate for the point-of-origin on the origin element.

              /** @type {?} */
              var originPoint = this._getOriginPoint(originRect, pos); // From that point-of-origin, get the exact (x, y) coordinate for the top-left corner of the
              // overlay in this position. We use the top-left corner for calculations and later translate
              // this into an appropriate (top, left, bottom, right) style.

              /** @type {?} */


              var overlayPoint = this._getOverlayPoint(originPoint, overlayRect, pos); // Calculate how well the overlay would fit into the viewport with this point.

              /** @type {?} */


              var overlayFit = this._getOverlayFit(overlayPoint, overlayRect, viewportRect, pos); // If the overlay, without any further work, fits into the viewport, use this position.


              if (overlayFit.isCompletelyWithinViewport) {
                this._isPushed = false;

                this._applyPosition(pos, originPoint);

                return;
              } // If the overlay has flexible dimensions, we can use this position
              // so long as there's enough space for the minimum dimensions.


              if (this._canFitWithFlexibleDimensions(overlayFit, overlayPoint, viewportRect)) {
                // Save positions where the overlay will fit with flexible dimensions. We will use these
                // if none of the positions fit *without* flexible dimensions.
                flexibleFits.push({
                  position: pos,
                  origin: originPoint,
                  overlayRect: overlayRect,
                  boundingBoxRect: this._calculateBoundingBoxRect(originPoint, pos)
                });
                continue;
              } // If the current preferred position does not fit on the screen, remember the position
              // if it has more visible area on-screen than we've seen and move onto the next preferred
              // position.


              if (!fallback || fallback.overlayFit.visibleArea < overlayFit.visibleArea) {
                fallback = {
                  overlayFit: overlayFit,
                  overlayPoint: overlayPoint,
                  originPoint: originPoint,
                  position: pos,
                  overlayRect: overlayRect
                };
              }
            } // If there are any positions where the overlay would fit with flexible dimensions, choose the
            // one that has the greatest area available modified by the position's weight

          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          if (flexibleFits.length) {
            /** @type {?} */
            var bestFit = null;
            /** @type {?} */

            var bestScore = -1;

            var _iterator2 = _createForOfIteratorHelper(flexibleFits),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var fit = _step2.value;

                /** @type {?} */
                var score = fit.boundingBoxRect.width * fit.boundingBoxRect.height * (fit.position.weight || 1);

                if (score > bestScore) {
                  bestScore = score;
                  bestFit = fit;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            this._isPushed = false;

            this._applyPosition(
            /** @type {?} */
            bestFit.position,
            /** @type {?} */
            bestFit.origin);

            return;
          } // When none of the preferred positions fit within the viewport, take the position
          // that went off-screen the least and attempt to push it on-screen.


          if (this._canPush) {
            // TODO(jelbourn): after pushing, the opening "direction" of the overlay might not make sense.
            this._isPushed = true;

            this._applyPosition(
            /** @type {?} */
            fallback.position,
            /** @type {?} */
            fallback.originPoint);

            return;
          } // All options for getting the overlay within the viewport have been exhausted, so go with the
          // position that went off-screen the least.


          this._applyPosition(
          /** @type {?} */
          fallback.position,
          /** @type {?} */
          fallback.originPoint);
        }
        /**
         * @return {?}
         */

      }, {
        key: "detach",
        value: function detach() {
          this._clearPanelClasses();

          this._lastPosition = null;
          this._previousPushAmount = null;

          this._resizeSubscription.unsubscribe();
        }
        /**
         * Cleanup after the element gets destroyed.
         * @return {?}
         */

      }, {
        key: "dispose",
        value: function dispose() {
          if (this._isDisposed) {
            return;
          } // We can't use `_resetBoundingBoxStyles` here, because it resets
          // some properties to zero, rather than removing them.


          if (this._boundingBox) {
            extendStyles(this._boundingBox.style,
            /** @type {?} */
            {
              top: '',
              left: '',
              right: '',
              bottom: '',
              height: '',
              width: '',
              alignItems: '',
              justifyContent: ''
            });
          }

          if (this._pane) {
            this._resetOverlayElementStyles();
          }

          if (this._overlayRef) {
            this._overlayRef.hostElement.classList.remove(boundingBoxClass);
          }

          this.detach();

          this._positionChanges.complete();

          this._overlayRef = this._boundingBox =
          /** @type {?} */
          null;
          this._isDisposed = true;
        }
        /**
         * This re-aligns the overlay element with the trigger in its last calculated position,
         * even if a position higher in the "preferred positions" list would now fit. This
         * allows one to re-align the panel without changing the orientation of the panel.
         * @return {?}
         */

      }, {
        key: "reapplyLastPosition",
        value: function reapplyLastPosition() {
          if (!this._isDisposed && (!this._platform || this._platform.isBrowser)) {
            this._originRect = this._getOriginRect();
            this._overlayRect = this._pane.getBoundingClientRect();
            this._viewportRect = this._getNarrowedViewportRect();
            /** @type {?} */

            var lastPosition = this._lastPosition || this._preferredPositions[0];
            /** @type {?} */

            var originPoint = this._getOriginPoint(this._originRect, lastPosition);

            this._applyPosition(lastPosition, originPoint);
          }
        }
        /**
         * Sets the list of Scrollable containers that host the origin element so that
         * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
         * Scrollable must be an ancestor element of the strategy's origin element.
         * @template THIS
         * @this {THIS}
         * @param {?} scrollables
         * @return {THIS}
         */

      }, {
        key: "withScrollableContainers",
        value: function withScrollableContainers(scrollables) {
          /** @type {?} */
          this._scrollables = scrollables;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Adds new preferred positions.
         * @template THIS
         * @this {THIS}
         * @param {?} positions List of positions options for this overlay.
         * @return {THIS}
         */

      }, {
        key: "withPositions",
        value: function withPositions(positions) {
          /** @type {?} */
          this._preferredPositions = positions; // If the last calculated position object isn't part of the positions anymore, clear
          // it in order to avoid it being picked up if the consumer tries to re-apply.

          if (positions.indexOf(
          /** @type {?} */

          /** @type {?} */
          this._lastPosition) === -1) {
            /** @type {?} */
            this._lastPosition = null;
          }

          /** @type {?} */
          this._validatePositions();

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets a minimum distance the overlay may be positioned to the edge of the viewport.
         * @template THIS
         * @this {THIS}
         * @param {?} margin Required margin between the overlay and the viewport edge in pixels.
         * @return {THIS}
         */

      }, {
        key: "withViewportMargin",
        value: function withViewportMargin(margin) {
          /** @type {?} */
          this._viewportMargin = margin;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets whether the overlay's width and height can be constrained to fit within the viewport.
         * @template THIS
         * @this {THIS}
         * @param {?=} flexibleDimensions
         * @return {THIS}
         */

      }, {
        key: "withFlexibleDimensions",
        value: function withFlexibleDimensions() {
          var flexibleDimensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

          /** @type {?} */
          this._hasFlexibleDimensions = flexibleDimensions;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets whether the overlay can grow after the initial open via flexible width/height.
         * @template THIS
         * @this {THIS}
         * @param {?=} growAfterOpen
         * @return {THIS}
         */

      }, {
        key: "withGrowAfterOpen",
        value: function withGrowAfterOpen() {
          var growAfterOpen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

          /** @type {?} */
          this._growAfterOpen = growAfterOpen;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets whether the overlay can be pushed on-screen if none of the provided positions fit.
         * @template THIS
         * @this {THIS}
         * @param {?=} canPush
         * @return {THIS}
         */

      }, {
        key: "withPush",
        value: function withPush() {
          var canPush = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

          /** @type {?} */
          this._canPush = canPush;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets whether the overlay's position should be locked in after it is positioned
         * initially. When an overlay is locked in, it won't attempt to reposition itself
         * when the position is re-applied (e.g. when the user scrolls away).
         * @template THIS
         * @this {THIS}
         * @param {?=} isLocked Whether the overlay should locked in.
         * @return {THIS}
         */

      }, {
        key: "withLockedPosition",
        value: function withLockedPosition() {
          var isLocked = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

          /** @type {?} */
          this._positionLocked = isLocked;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the origin, relative to which to position the overlay.
         * Using an element origin is useful for building components that need to be positioned
         * relatively to a trigger (e.g. dropdown menus or tooltips), whereas using a point can be
         * used for cases like contextual menus which open relative to the user's pointer.
         * @template THIS
         * @this {THIS}
         * @param {?} origin Reference to the new origin.
         * @return {THIS}
         */

      }, {
        key: "setOrigin",
        value: function setOrigin(origin) {
          /** @type {?} */
          this._origin = origin;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the default offset for the overlay's connection point on the x-axis.
         * @template THIS
         * @this {THIS}
         * @param {?} offset New offset in the X axis.
         * @return {THIS}
         */

      }, {
        key: "withDefaultOffsetX",
        value: function withDefaultOffsetX(offset) {
          /** @type {?} */
          this._offsetX = offset;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the default offset for the overlay's connection point on the y-axis.
         * @template THIS
         * @this {THIS}
         * @param {?} offset New offset in the Y axis.
         * @return {THIS}
         */

      }, {
        key: "withDefaultOffsetY",
        value: function withDefaultOffsetY(offset) {
          /** @type {?} */
          this._offsetY = offset;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Configures that the position strategy should set a `transform-origin` on some elements
         * inside the overlay, depending on the current position that is being applied. This is
         * useful for the cases where the origin of an animation can change depending on the
         * alignment of the overlay.
         * @template THIS
         * @this {THIS}
         * @param {?} selector CSS selector that will be used to find the target
         *    elements onto which to set the transform origin.
         * @return {THIS}
         */

      }, {
        key: "withTransformOriginOn",
        value: function withTransformOriginOn(selector) {
          /** @type {?} */
          this._transformOriginSelector = selector;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Gets the (x, y) coordinate of a connection point on the origin based on a relative position.
         * @private
         * @param {?} originRect
         * @param {?} pos
         * @return {?}
         */

      }, {
        key: "_getOriginPoint",
        value: function _getOriginPoint(originRect, pos) {
          /** @type {?} */
          var x;

          if (pos.originX == 'center') {
            // Note: when centering we should always use the `left`
            // offset, otherwise the position will be wrong in RTL.
            x = originRect.left + originRect.width / 2;
          } else {
            /** @type {?} */
            var startX = this._isRtl() ? originRect.right : originRect.left;
            /** @type {?} */

            var endX = this._isRtl() ? originRect.left : originRect.right;
            x = pos.originX == 'start' ? startX : endX;
          }
          /** @type {?} */


          var y;

          if (pos.originY == 'center') {
            y = originRect.top + originRect.height / 2;
          } else {
            y = pos.originY == 'top' ? originRect.top : originRect.bottom;
          }

          return {
            x: x,
            y: y
          };
        }
        /**
         * Gets the (x, y) coordinate of the top-left corner of the overlay given a given position and
         * origin point to which the overlay should be connected.
         * @private
         * @param {?} originPoint
         * @param {?} overlayRect
         * @param {?} pos
         * @return {?}
         */

      }, {
        key: "_getOverlayPoint",
        value: function _getOverlayPoint(originPoint, overlayRect, pos) {
          // Calculate the (overlayStartX, overlayStartY), the start of the
          // potential overlay position relative to the origin point.

          /** @type {?} */
          var overlayStartX;

          if (pos.overlayX == 'center') {
            overlayStartX = -overlayRect.width / 2;
          } else if (pos.overlayX === 'start') {
            overlayStartX = this._isRtl() ? -overlayRect.width : 0;
          } else {
            overlayStartX = this._isRtl() ? 0 : -overlayRect.width;
          }
          /** @type {?} */


          var overlayStartY;

          if (pos.overlayY == 'center') {
            overlayStartY = -overlayRect.height / 2;
          } else {
            overlayStartY = pos.overlayY == 'top' ? 0 : -overlayRect.height;
          } // The (x, y) coordinates of the overlay.


          return {
            x: originPoint.x + overlayStartX,
            y: originPoint.y + overlayStartY
          };
        }
        /**
         * Gets how well an overlay at the given point will fit within the viewport.
         * @private
         * @param {?} point
         * @param {?} overlay
         * @param {?} viewport
         * @param {?} position
         * @return {?}
         */

      }, {
        key: "_getOverlayFit",
        value: function _getOverlayFit(point, overlay, viewport, position) {
          var x = point.x,
              y = point.y;
          /** @type {?} */

          var offsetX = this._getOffset(position, 'x');
          /** @type {?} */


          var offsetY = this._getOffset(position, 'y'); // Account for the offsets since they could push the overlay out of the viewport.


          if (offsetX) {
            x += offsetX;
          }

          if (offsetY) {
            y += offsetY;
          } // How much the overlay would overflow at this position, on each side.

          /** @type {?} */


          var leftOverflow = 0 - x;
          /** @type {?} */

          var rightOverflow = x + overlay.width - viewport.width;
          /** @type {?} */

          var topOverflow = 0 - y;
          /** @type {?} */

          var bottomOverflow = y + overlay.height - viewport.height; // Visible parts of the element on each axis.

          /** @type {?} */

          var visibleWidth = this._subtractOverflows(overlay.width, leftOverflow, rightOverflow);
          /** @type {?} */


          var visibleHeight = this._subtractOverflows(overlay.height, topOverflow, bottomOverflow);
          /** @type {?} */


          var visibleArea = visibleWidth * visibleHeight;
          return {
            visibleArea: visibleArea,
            isCompletelyWithinViewport: overlay.width * overlay.height === visibleArea,
            fitsInViewportVertically: visibleHeight === overlay.height,
            fitsInViewportHorizontally: visibleWidth == overlay.width
          };
        }
        /**
         * Whether the overlay can fit within the viewport when it may resize either its width or height.
         * @private
         * @param {?} fit How well the overlay fits in the viewport at some position.
         * @param {?} point The (x, y) coordinates of the overlat at some position.
         * @param {?} viewport The geometry of the viewport.
         * @return {?}
         */

      }, {
        key: "_canFitWithFlexibleDimensions",
        value: function _canFitWithFlexibleDimensions(fit, point, viewport) {
          if (this._hasFlexibleDimensions) {
            /** @type {?} */
            var availableHeight = viewport.bottom - point.y;
            /** @type {?} */

            var availableWidth = viewport.right - point.x;
            /** @type {?} */

            var minHeight = getPixelValue(this._overlayRef.getConfig().minHeight);
            /** @type {?} */

            var minWidth = getPixelValue(this._overlayRef.getConfig().minWidth);
            /** @type {?} */

            var verticalFit = fit.fitsInViewportVertically || minHeight != null && minHeight <= availableHeight;
            /** @type {?} */

            var horizontalFit = fit.fitsInViewportHorizontally || minWidth != null && minWidth <= availableWidth;
            return verticalFit && horizontalFit;
          }

          return false;
        }
        /**
         * Gets the point at which the overlay can be "pushed" on-screen. If the overlay is larger than
         * the viewport, the top-left corner will be pushed on-screen (with overflow occuring on the
         * right and bottom).
         *
         * @private
         * @param {?} start Starting point from which the overlay is pushed.
         * @param {?} overlay Dimensions of the overlay.
         * @param {?} scrollPosition Current viewport scroll position.
         * @return {?} The point at which to position the overlay after pushing. This is effectively a new
         *     originPoint.
         */

      }, {
        key: "_pushOverlayOnScreen",
        value: function _pushOverlayOnScreen(start, overlay, scrollPosition) {
          // If the position is locked and we've pushed the overlay already, reuse the previous push
          // amount, rather than pushing it again. If we were to continue pushing, the element would
          // remain in the viewport, which goes against the expectations when position locking is enabled.
          if (this._previousPushAmount && this._positionLocked) {
            return {
              x: start.x + this._previousPushAmount.x,
              y: start.y + this._previousPushAmount.y
            };
          }
          /** @type {?} */


          var viewport = this._viewportRect; // Determine how much the overlay goes outside the viewport on each
          // side, which we'll use to decide which direction to push it.

          /** @type {?} */

          var overflowRight = Math.max(start.x + overlay.width - viewport.right, 0);
          /** @type {?} */

          var overflowBottom = Math.max(start.y + overlay.height - viewport.bottom, 0);
          /** @type {?} */

          var overflowTop = Math.max(viewport.top - scrollPosition.top - start.y, 0);
          /** @type {?} */

          var overflowLeft = Math.max(viewport.left - scrollPosition.left - start.x, 0); // Amount by which to push the overlay in each axis such that it remains on-screen.

          /** @type {?} */

          var pushX = 0;
          /** @type {?} */

          var pushY = 0; // If the overlay fits completely within the bounds of the viewport, push it from whichever
          // direction is goes off-screen. Otherwise, push the top-left corner such that its in the
          // viewport and allow for the trailing end of the overlay to go out of bounds.

          if (overlay.width <= viewport.width) {
            pushX = overflowLeft || -overflowRight;
          } else {
            pushX = start.x < this._viewportMargin ? viewport.left - scrollPosition.left - start.x : 0;
          }

          if (overlay.height <= viewport.height) {
            pushY = overflowTop || -overflowBottom;
          } else {
            pushY = start.y < this._viewportMargin ? viewport.top - scrollPosition.top - start.y : 0;
          }

          this._previousPushAmount = {
            x: pushX,
            y: pushY
          };
          return {
            x: start.x + pushX,
            y: start.y + pushY
          };
        }
        /**
         * Applies a computed position to the overlay and emits a position change.
         * @private
         * @param {?} position The position preference
         * @param {?} originPoint The point on the origin element where the overlay is connected.
         * @return {?}
         */

      }, {
        key: "_applyPosition",
        value: function _applyPosition(position, originPoint) {
          this._setTransformOrigin(position);

          this._setOverlayElementStyles(originPoint, position);

          this._setBoundingBoxStyles(originPoint, position);

          if (position.panelClass) {
            this._addPanelClasses(position.panelClass);
          } // Save the last connected position in case the position needs to be re-calculated.


          this._lastPosition = position; // Notify that the position has been changed along with its change properties.
          // We only emit if we've got any subscriptions, because the scroll visibility
          // calculcations can be somewhat expensive.

          if (this._positionChanges.observers.length) {
            /** @type {?} */
            var scrollableViewProperties = this._getScrollVisibility();
            /** @type {?} */


            var changeEvent = new ConnectedOverlayPositionChange(position, scrollableViewProperties);

            this._positionChanges.next(changeEvent);
          }

          this._isInitialRender = false;
        }
        /**
         * Sets the transform origin based on the configured selector and the passed-in position.
         * @private
         * @param {?} position
         * @return {?}
         */

      }, {
        key: "_setTransformOrigin",
        value: function _setTransformOrigin(position) {
          if (!this._transformOriginSelector) {
            return;
          }
          /** @type {?} */


          var elements =
          /** @type {?} */
          this._boundingBox.querySelectorAll(this._transformOriginSelector);
          /** @type {?} */


          var xOrigin;
          /** @type {?} */

          var yOrigin = position.overlayY;

          if (position.overlayX === 'center') {
            xOrigin = 'center';
          } else if (this._isRtl()) {
            xOrigin = position.overlayX === 'start' ? 'right' : 'left';
          } else {
            xOrigin = position.overlayX === 'start' ? 'left' : 'right';
          }

          for (var i = 0; i < elements.length; i++) {
            elements[i].style.transformOrigin = "".concat(xOrigin, " ").concat(yOrigin);
          }
        }
        /**
         * Gets the position and size of the overlay's sizing container.
         *
         * This method does no measuring and applies no styles so that we can cheaply compute the
         * bounds for all positions and choose the best fit based on these results.
         * @private
         * @param {?} origin
         * @param {?} position
         * @return {?}
         */

      }, {
        key: "_calculateBoundingBoxRect",
        value: function _calculateBoundingBoxRect(origin, position) {
          /** @type {?} */
          var viewport = this._viewportRect;
          /** @type {?} */

          var isRtl = this._isRtl();
          /** @type {?} */


          var height;
          /** @type {?} */

          var top;
          /** @type {?} */

          var bottom;

          if (position.overlayY === 'top') {
            // Overlay is opening "downward" and thus is bound by the bottom viewport edge.
            top = origin.y;
            height = viewport.height - top + this._viewportMargin;
          } else if (position.overlayY === 'bottom') {
            // Overlay is opening "upward" and thus is bound by the top viewport edge. We need to add
            // the viewport margin back in, because the viewport rect is narrowed down to remove the
            // margin, whereas the `origin` position is calculated based on its `ClientRect`.
            bottom = viewport.height - origin.y + this._viewportMargin * 2;
            height = viewport.height - bottom + this._viewportMargin;
          } else {
            // If neither top nor bottom, it means that the overlay is vertically centered on the
            // origin point. Note that we want the position relative to the viewport, rather than
            // the page, which is why we don't use something like `viewport.bottom - origin.y` and
            // `origin.y - viewport.top`.

            /** @type {?} */
            var smallestDistanceToViewportEdge = Math.min(viewport.bottom - origin.y + viewport.top, origin.y);
            /** @type {?} */

            var previousHeight = this._lastBoundingBoxSize.height;
            height = smallestDistanceToViewportEdge * 2;
            top = origin.y - smallestDistanceToViewportEdge;

            if (height > previousHeight && !this._isInitialRender && !this._growAfterOpen) {
              top = origin.y - previousHeight / 2;
            }
          } // The overlay is opening 'right-ward' (the content flows to the right).

          /** @type {?} */


          var isBoundedByRightViewportEdge = position.overlayX === 'start' && !isRtl || position.overlayX === 'end' && isRtl; // The overlay is opening 'left-ward' (the content flows to the left).

          /** @type {?} */

          var isBoundedByLeftViewportEdge = position.overlayX === 'end' && !isRtl || position.overlayX === 'start' && isRtl;
          /** @type {?} */

          var width;
          /** @type {?} */

          var left;
          /** @type {?} */

          var right;

          if (isBoundedByLeftViewportEdge) {
            right = viewport.width - origin.x + this._viewportMargin;
            width = origin.x - this._viewportMargin;
          } else if (isBoundedByRightViewportEdge) {
            left = origin.x;
            width = viewport.right - origin.x;
          } else {
            // If neither start nor end, it means that the overlay is horizontally centered on the
            // origin point. Note that we want the position relative to the viewport, rather than
            // the page, which is why we don't use something like `viewport.right - origin.x` and
            // `origin.x - viewport.left`.

            /** @type {?} */
            var _smallestDistanceToViewportEdge = Math.min(viewport.right - origin.x + viewport.left, origin.x);
            /** @type {?} */


            var previousWidth = this._lastBoundingBoxSize.width;
            width = _smallestDistanceToViewportEdge * 2;
            left = origin.x - _smallestDistanceToViewportEdge;

            if (width > previousWidth && !this._isInitialRender && !this._growAfterOpen) {
              left = origin.x - previousWidth / 2;
            }
          }

          return {
            top:
            /** @type {?} */
            top,
            left:
            /** @type {?} */
            left,
            bottom:
            /** @type {?} */
            bottom,
            right:
            /** @type {?} */
            right,
            width: width,
            height: height
          };
        }
        /**
         * Sets the position and size of the overlay's sizing wrapper. The wrapper is positioned on the
         * origin's connection point and stetches to the bounds of the viewport.
         *
         * @private
         * @param {?} origin The point on the origin element where the overlay is connected.
         * @param {?} position The position preference
         * @return {?}
         */

      }, {
        key: "_setBoundingBoxStyles",
        value: function _setBoundingBoxStyles(origin, position) {
          /** @type {?} */
          var boundingBoxRect = this._calculateBoundingBoxRect(origin, position); // It's weird if the overlay *grows* while scrolling, so we take the last size into account
          // when applying a new size.


          if (!this._isInitialRender && !this._growAfterOpen) {
            boundingBoxRect.height = Math.min(boundingBoxRect.height, this._lastBoundingBoxSize.height);
            boundingBoxRect.width = Math.min(boundingBoxRect.width, this._lastBoundingBoxSize.width);
          }
          /** @type {?} */


          var styles =
          /** @type {?} */
          {};

          if (this._hasExactPosition()) {
            styles.top = styles.left = '0';
            styles.bottom = styles.right = styles.maxHeight = styles.maxWidth = '';
            styles.width = styles.height = '100%';
          } else {
            /** @type {?} */
            var maxHeight = this._overlayRef.getConfig().maxHeight;
            /** @type {?} */


            var maxWidth = this._overlayRef.getConfig().maxWidth;

            styles.height = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.height);
            styles.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.top);
            styles.bottom = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.bottom);
            styles.width = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.width);
            styles.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.left);
            styles.right = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.right); // Push the pane content towards the proper direction.

            if (position.overlayX === 'center') {
              styles.alignItems = 'center';
            } else {
              styles.alignItems = position.overlayX === 'end' ? 'flex-end' : 'flex-start';
            }

            if (position.overlayY === 'center') {
              styles.justifyContent = 'center';
            } else {
              styles.justifyContent = position.overlayY === 'bottom' ? 'flex-end' : 'flex-start';
            }

            if (maxHeight) {
              styles.maxHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(maxHeight);
            }

            if (maxWidth) {
              styles.maxWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(maxWidth);
            }
          }

          this._lastBoundingBoxSize = boundingBoxRect;
          extendStyles(
          /** @type {?} */
          this._boundingBox.style, styles);
        }
        /**
         * Resets the styles for the bounding box so that a new positioning can be computed.
         * @private
         * @return {?}
         */

      }, {
        key: "_resetBoundingBoxStyles",
        value: function _resetBoundingBoxStyles() {
          extendStyles(
          /** @type {?} */
          this._boundingBox.style,
          /** @type {?} */
          {
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            height: '',
            width: '',
            alignItems: '',
            justifyContent: ''
          });
        }
        /**
         * Resets the styles for the overlay pane so that a new positioning can be computed.
         * @private
         * @return {?}
         */

      }, {
        key: "_resetOverlayElementStyles",
        value: function _resetOverlayElementStyles() {
          extendStyles(this._pane.style,
          /** @type {?} */
          {
            top: '',
            left: '',
            bottom: '',
            right: '',
            position: '',
            transform: ''
          });
        }
        /**
         * Sets positioning styles to the overlay element.
         * @private
         * @param {?} originPoint
         * @param {?} position
         * @return {?}
         */

      }, {
        key: "_setOverlayElementStyles",
        value: function _setOverlayElementStyles(originPoint, position) {
          /** @type {?} */
          var styles =
          /** @type {?} */
          {};
          /** @type {?} */

          var hasExactPosition = this._hasExactPosition();
          /** @type {?} */


          var hasFlexibleDimensions = this._hasFlexibleDimensions;
          /** @type {?} */

          var config = this._overlayRef.getConfig();

          if (hasExactPosition) {
            /** @type {?} */
            var scrollPosition = this._viewportRuler.getViewportScrollPosition();

            extendStyles(styles, this._getExactOverlayY(position, originPoint, scrollPosition));
            extendStyles(styles, this._getExactOverlayX(position, originPoint, scrollPosition));
          } else {
            styles.position = 'static';
          } // Use a transform to apply the offsets. We do this because the `center` positions rely on
          // being in the normal flex flow and setting a `top` / `left` at all will completely throw
          // off the position. We also can't use margins, because they won't have an effect in some
          // cases where the element doesn't have anything to "push off of". Finally, this works
          // better both with flexible and non-flexible positioning.

          /** @type {?} */


          var transformString = '';
          /** @type {?} */

          var offsetX = this._getOffset(position, 'x');
          /** @type {?} */


          var offsetY = this._getOffset(position, 'y');

          if (offsetX) {
            transformString += "translateX(".concat(offsetX, "px) ");
          }

          if (offsetY) {
            transformString += "translateY(".concat(offsetY, "px)");
          }

          styles.transform = transformString.trim(); // If a maxWidth or maxHeight is specified on the overlay, we remove them. We do this because
          // we need these values to both be set to "100%" for the automatic flexible sizing to work.
          // The maxHeight and maxWidth are set on the boundingBox in order to enforce the constraint.
          // Note that this doesn't apply when we have an exact position, in which case we do want to
          // apply them because they'll be cleared from the bounding box.

          if (config.maxHeight) {
            if (hasExactPosition) {
              styles.maxHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(config.maxHeight);
            } else if (hasFlexibleDimensions) {
              styles.maxHeight = '';
            }
          }

          if (config.maxWidth) {
            if (hasExactPosition) {
              styles.maxWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(config.maxWidth);
            } else if (hasFlexibleDimensions) {
              styles.maxWidth = '';
            }
          }

          extendStyles(this._pane.style, styles);
        }
        /**
         * Gets the exact top/bottom for the overlay when not using flexible sizing or when pushing.
         * @private
         * @param {?} position
         * @param {?} originPoint
         * @param {?} scrollPosition
         * @return {?}
         */

      }, {
        key: "_getExactOverlayY",
        value: function _getExactOverlayY(position, originPoint, scrollPosition) {
          // Reset any existing styles. This is necessary in case the
          // preferred position has changed since the last `apply`.

          /** @type {?} */
          var styles =
          /** @type {?} */
          {
            top: '',
            bottom: ''
          };
          /** @type {?} */

          var overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);

          if (this._isPushed) {
            overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
          }
          /** @type {?} */


          var virtualKeyboardOffset = this._overlayContainer.getContainerElement().getBoundingClientRect().top; // Normally this would be zero, however when the overlay is attached to an input (e.g. in an
          // autocomplete), mobile browsers will shift everything in order to put the input in the middle
          // of the screen and to make space for the virtual keyboard. We need to account for this offset,
          // otherwise our positioning will be thrown off.


          overlayPoint.y -= virtualKeyboardOffset; // We want to set either `top` or `bottom` based on whether the overlay wants to appear
          // above or below the origin and the direction in which the element will expand.

          if (position.overlayY === 'bottom') {
            // When using `bottom`, we adjust the y position such that it is the distance
            // from the bottom of the viewport rather than the top.

            /** @type {?} */
            var documentHeight =
            /** @type {?} */
            this._document.documentElement.clientHeight;
            styles.bottom = "".concat(documentHeight - (overlayPoint.y + this._overlayRect.height), "px");
          } else {
            styles.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(overlayPoint.y);
          }

          return styles;
        }
        /**
         * Gets the exact left/right for the overlay when not using flexible sizing or when pushing.
         * @private
         * @param {?} position
         * @param {?} originPoint
         * @param {?} scrollPosition
         * @return {?}
         */

      }, {
        key: "_getExactOverlayX",
        value: function _getExactOverlayX(position, originPoint, scrollPosition) {
          // Reset any existing styles. This is necessary in case the preferred position has
          // changed since the last `apply`.

          /** @type {?} */
          var styles =
          /** @type {?} */
          {
            left: '',
            right: ''
          };
          /** @type {?} */

          var overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);

          if (this._isPushed) {
            overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
          } // We want to set either `left` or `right` based on whether the overlay wants to appear "before"
          // or "after" the origin, which determines the direction in which the element will expand.
          // For the horizontal axis, the meaning of "before" and "after" change based on whether the
          // page is in RTL or LTR.

          /** @type {?} */


          var horizontalStyleProperty;

          if (this._isRtl()) {
            horizontalStyleProperty = position.overlayX === 'end' ? 'left' : 'right';
          } else {
            horizontalStyleProperty = position.overlayX === 'end' ? 'right' : 'left';
          } // When we're setting `right`, we adjust the x position such that it is the distance
          // from the right edge of the viewport rather than the left edge.


          if (horizontalStyleProperty === 'right') {
            /** @type {?} */
            var documentWidth =
            /** @type {?} */
            this._document.documentElement.clientWidth;
            styles.right = "".concat(documentWidth - (overlayPoint.x + this._overlayRect.width), "px");
          } else {
            styles.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(overlayPoint.x);
          }

          return styles;
        }
        /**
         * Gets the view properties of the trigger and overlay, including whether they are clipped
         * or completely outside the view of any of the strategy's scrollables.
         * @private
         * @return {?}
         */

      }, {
        key: "_getScrollVisibility",
        value: function _getScrollVisibility() {
          // Note: needs fresh rects since the position could've changed.

          /** @type {?} */
          var originBounds = this._getOriginRect();
          /** @type {?} */


          var overlayBounds = this._pane.getBoundingClientRect(); // TODO(jelbourn): instead of needing all of the client rects for these scrolling containers
          // every time, we should be able to use the scrollTop of the containers if the size of those
          // containers hasn't changed.

          /** @type {?} */


          var scrollContainerBounds = this._scrollables.map(
          /**
          * @param {?} scrollable
          * @return {?}
          */
          function (scrollable) {
            return scrollable.getElementRef().nativeElement.getBoundingClientRect();
          });

          return {
            isOriginClipped: isElementClippedByScrolling(originBounds, scrollContainerBounds),
            isOriginOutsideView: isElementScrolledOutsideView(originBounds, scrollContainerBounds),
            isOverlayClipped: isElementClippedByScrolling(overlayBounds, scrollContainerBounds),
            isOverlayOutsideView: isElementScrolledOutsideView(overlayBounds, scrollContainerBounds)
          };
        }
        /**
         * Subtracts the amount that an element is overflowing on an axis from its length.
         * @private
         * @param {?} length
         * @param {...?} overflows
         * @return {?}
         */

      }, {
        key: "_subtractOverflows",
        value: function _subtractOverflows(length) {
          for (var _len = arguments.length, overflows = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            overflows[_key - 1] = arguments[_key];
          }

          return overflows.reduce(
          /**
          * @param {?} currentValue
          * @param {?} currentOverflow
          * @return {?}
          */
          function (currentValue, currentOverflow) {
            return currentValue - Math.max(currentOverflow, 0);
          }, length);
        }
        /**
         * Narrows the given viewport rect by the current _viewportMargin.
         * @private
         * @return {?}
         */

      }, {
        key: "_getNarrowedViewportRect",
        value: function _getNarrowedViewportRect() {
          // We recalculate the viewport rect here ourselves, rather than using the ViewportRuler,
          // because we want to use the `clientWidth` and `clientHeight` as the base. The difference
          // being that the client properties don't include the scrollbar, as opposed to `innerWidth`
          // and `innerHeight` that do. This is necessary, because the overlay container uses
          // 100% `width` and `height` which don't include the scrollbar either.

          /** @type {?} */
          var width =
          /** @type {?} */
          this._document.documentElement.clientWidth;
          /** @type {?} */

          var height =
          /** @type {?} */
          this._document.documentElement.clientHeight;
          /** @type {?} */

          var scrollPosition = this._viewportRuler.getViewportScrollPosition();

          return {
            top: scrollPosition.top + this._viewportMargin,
            left: scrollPosition.left + this._viewportMargin,
            right: scrollPosition.left + width - this._viewportMargin,
            bottom: scrollPosition.top + height - this._viewportMargin,
            width: width - 2 * this._viewportMargin,
            height: height - 2 * this._viewportMargin
          };
        }
        /**
         * Whether the we're dealing with an RTL context
         * @private
         * @return {?}
         */

      }, {
        key: "_isRtl",
        value: function _isRtl() {
          return this._overlayRef.getDirection() === 'rtl';
        }
        /**
         * Determines whether the overlay uses exact or flexible positioning.
         * @private
         * @return {?}
         */

      }, {
        key: "_hasExactPosition",
        value: function _hasExactPosition() {
          return !this._hasFlexibleDimensions || this._isPushed;
        }
        /**
         * Retrieves the offset of a position along the x or y axis.
         * @private
         * @param {?} position
         * @param {?} axis
         * @return {?}
         */

      }, {
        key: "_getOffset",
        value: function _getOffset(position, axis) {
          if (axis === 'x') {
            // We don't do something like `position['offset' + axis]` in
            // order to avoid breking minifiers that rename properties.
            return position.offsetX == null ? this._offsetX : position.offsetX;
          }

          return position.offsetY == null ? this._offsetY : position.offsetY;
        }
        /**
         * Validates that the current position match the expected values.
         * @private
         * @return {?}
         */

      }, {
        key: "_validatePositions",
        value: function _validatePositions() {
          if (!this._preferredPositions.length) {
            throw Error('FlexibleConnectedPositionStrategy: At least one position is required.');
          } // TODO(crisbeto): remove these once Angular's template type
          // checking is advanced enough to catch these cases.


          this._preferredPositions.forEach(
          /**
          * @param {?} pair
          * @return {?}
          */
          function (pair) {
            validateHorizontalPosition('originX', pair.originX);
            validateVerticalPosition('originY', pair.originY);
            validateHorizontalPosition('overlayX', pair.overlayX);
            validateVerticalPosition('overlayY', pair.overlayY);
          });
        }
        /**
         * Adds a single CSS class or an array of classes on the overlay panel.
         * @private
         * @param {?} cssClasses
         * @return {?}
         */

      }, {
        key: "_addPanelClasses",
        value: function _addPanelClasses(cssClasses) {
          var _this12 = this;

          if (this._pane) {
            Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceArray"])(cssClasses).forEach(
            /**
            * @param {?} cssClass
            * @return {?}
            */
            function (cssClass) {
              if (cssClass !== '' && _this12._appliedPanelClasses.indexOf(cssClass) === -1) {
                _this12._appliedPanelClasses.push(cssClass);

                _this12._pane.classList.add(cssClass);
              }
            });
          }
        }
        /**
         * Clears the classes that the position strategy has applied from the overlay panel.
         * @private
         * @return {?}
         */

      }, {
        key: "_clearPanelClasses",
        value: function _clearPanelClasses() {
          var _this13 = this;

          if (this._pane) {
            this._appliedPanelClasses.forEach(
            /**
            * @param {?} cssClass
            * @return {?}
            */
            function (cssClass) {
              _this13._pane.classList.remove(cssClass);
            });

            this._appliedPanelClasses = [];
          }
        }
        /**
         * Returns the ClientRect of the current origin.
         * @private
         * @return {?}
         */

      }, {
        key: "_getOriginRect",
        value: function _getOriginRect() {
          /** @type {?} */
          var origin = this._origin;

          if (origin instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]) {
            return origin.nativeElement.getBoundingClientRect();
          } // Check for Element so SVG elements are also supported.


          if (origin instanceof Element) {
            return origin.getBoundingClientRect();
          }
          /** @type {?} */


          var width = origin.width || 0;
          /** @type {?} */

          var height = origin.height || 0; // If the origin is a point, return a client rect as if it was a 0x0 element at the point.

          return {
            top: origin.y,
            bottom: origin.y + height,
            left: origin.x,
            right: origin.x + width,
            height: height,
            width: width
          };
        }
      }, {
        key: "positions",
        get: function get() {
          return this._preferredPositions;
        }
      }]);

      return FlexibleConnectedPositionStrategy;
    }();

    if (false) {}
    /**
     * A simple (x, y) coordinate.
     * @record
     */


    function Point() {}

    if (false) {}
    /**
     * Record of measurements for how an overlay (at a given position) fits into the viewport.
     * @record
     */


    function OverlayFit() {}

    if (false) {}
    /**
     * Record of the measurments determining whether an overlay will fit in a specific position.
     * @record
     */


    function FallbackPosition() {}

    if (false) {}
    /**
     * Position and size of the overlay sizing wrapper for a specific position.
     * @record
     */


    function BoundingBoxRect() {}

    if (false) {}
    /**
     * Record of measures determining how well a given position will fit with flexible dimensions.
     * @record
     */


    function FlexibleFit() {}

    if (false) {}
    /**
     * A connected position as specified by the user.
     * @record
     */


    function ConnectedPosition() {}

    if (false) {}
    /**
     * Shallow-extends a stylesheet object with another stylesheet object.
     * @param {?} destination
     * @param {?} source
     * @return {?}
     */


    function extendStyles(destination, source) {
      for (var key in source) {
        if (source.hasOwnProperty(key)) {
          destination[key] = source[key];
        }
      }

      return destination;
    }
    /**
     * Extracts the pixel value as a number from a value, if it's a number
     * or a CSS pixel string (e.g. `1337px`). Otherwise returns null.
     * @param {?} input
     * @return {?}
     */


    function getPixelValue(input) {
      if (typeof input !== 'number' && input != null) {
        var _input$split = input.split(cssUnitPattern),
            _input$split2 = _slicedToArray(_input$split, 2),
            value = _input$split2[0],
            units = _input$split2[1];

        return !units || units === 'px' ? parseFloat(value) : null;
      }

      return input || null;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/position/connected-position-strategy.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * A strategy for positioning overlays. Using this strategy, an overlay is given an
     * implicit position relative to some origin element. The relative position is defined in terms of
     * a point on the origin element that is connected to a point on the overlay element. For example,
     * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
     * of the overlay.
     * @deprecated Use `FlexibleConnectedPositionStrategy` instead.
     * \@breaking-change 8.0.0
     */


    var ConnectedPositionStrategy = /*#__PURE__*/function () {
      /**
       * @param {?} originPos
       * @param {?} overlayPos
       * @param {?} connectedTo
       * @param {?} viewportRuler
       * @param {?} document
       * @param {?} platform
       * @param {?} overlayContainer
       */
      function ConnectedPositionStrategy(originPos, overlayPos, connectedTo, viewportRuler, document, platform, overlayContainer) {
        _classCallCheck(this, ConnectedPositionStrategy);

        /**
         * Ordered list of preferred positions, from most to least desirable.
         */
        this._preferredPositions = []; // Since the `ConnectedPositionStrategy` is deprecated and we don't want to maintain
        // the extra logic, we create an instance of the positioning strategy that has some
        // defaults that make it behave as the old position strategy and to which we'll
        // proxy all of the API calls.

        this._positionStrategy = new FlexibleConnectedPositionStrategy(connectedTo, viewportRuler, document, platform, overlayContainer).withFlexibleDimensions(false).withPush(false).withViewportMargin(0);
        this.withFallbackPosition(originPos, overlayPos);
      }
      /**
       * Whether the we're dealing with an RTL context
       * @return {?}
       */


      _createClass(ConnectedPositionStrategy, [{
        key: "attach",

        /**
         * Attach this position strategy to an overlay.
         * @param {?} overlayRef
         * @return {?}
         */
        value: function attach(overlayRef) {
          this._overlayRef = overlayRef;

          this._positionStrategy.attach(overlayRef);

          if (this._direction) {
            overlayRef.setDirection(this._direction);
            this._direction = null;
          }
        }
        /**
         * Disposes all resources used by the position strategy.
         * @return {?}
         */

      }, {
        key: "dispose",
        value: function dispose() {
          this._positionStrategy.dispose();
        }
        /**
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "detach",
        value: function detach() {
          this._positionStrategy.detach();
        }
        /**
         * Updates the position of the overlay element, using whichever preferred position relative
         * to the origin fits on-screen.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "apply",
        value: function apply() {
          this._positionStrategy.apply();
        }
        /**
         * Re-positions the overlay element with the trigger in its last calculated position,
         * even if a position higher in the "preferred positions" list would now fit. This
         * allows one to re-align the panel without changing the orientation of the panel.
         * @return {?}
         */

      }, {
        key: "recalculateLastPosition",
        value: function recalculateLastPosition() {
          this._positionStrategy.reapplyLastPosition();
        }
        /**
         * Sets the list of Scrollable containers that host the origin element so that
         * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
         * Scrollable must be an ancestor element of the strategy's origin element.
         * @param {?} scrollables
         * @return {?}
         */

      }, {
        key: "withScrollableContainers",
        value: function withScrollableContainers(scrollables) {
          this._positionStrategy.withScrollableContainers(scrollables);
        }
        /**
         * Adds a new preferred fallback position.
         * @template THIS
         * @this {THIS}
         * @param {?} originPos
         * @param {?} overlayPos
         * @param {?=} offsetX
         * @param {?=} offsetY
         * @return {THIS}
         */

      }, {
        key: "withFallbackPosition",
        value: function withFallbackPosition(originPos, overlayPos, offsetX, offsetY) {
          /** @type {?} */
          var position = new ConnectionPositionPair(originPos, overlayPos, offsetX, offsetY);

          /** @type {?} */
          this._preferredPositions.push(position);

          /** @type {?} */
          this._positionStrategy.withPositions(
          /** @type {?} */
          this._preferredPositions);

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the layout direction so the overlay's position can be adjusted to match.
         * @template THIS
         * @this {THIS}
         * @param {?} dir New layout direction.
         * @return {THIS}
         */

      }, {
        key: "withDirection",
        value: function withDirection(dir) {
          // Since the direction might be declared before the strategy is attached,
          // we save the value in a temporary property and we'll transfer it to the
          // overlay ref on attachment.
          if (
          /** @type {?} */
          this._overlayRef) {
            /** @type {?} */
            this._overlayRef.setDirection(dir);
          } else {
            /** @type {?} */
            this._direction = dir;
          }

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets an offset for the overlay's connection point on the x-axis
         * @template THIS
         * @this {THIS}
         * @param {?} offset New offset in the X axis.
         * @return {THIS}
         */

      }, {
        key: "withOffsetX",
        value: function withOffsetX(offset) {
          /** @type {?} */
          this._positionStrategy.withDefaultOffsetX(offset);

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets an offset for the overlay's connection point on the y-axis
         * @template THIS
         * @this {THIS}
         * @param {?} offset New offset in the Y axis.
         * @return {THIS}
         */

      }, {
        key: "withOffsetY",
        value: function withOffsetY(offset) {
          /** @type {?} */
          this._positionStrategy.withDefaultOffsetY(offset);

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets whether the overlay's position should be locked in after it is positioned
         * initially. When an overlay is locked in, it won't attempt to reposition itself
         * when the position is re-applied (e.g. when the user scrolls away).
         * @template THIS
         * @this {THIS}
         * @param {?} isLocked Whether the overlay should locked in.
         * @return {THIS}
         */

      }, {
        key: "withLockedPosition",
        value: function withLockedPosition(isLocked) {
          /** @type {?} */
          this._positionStrategy.withLockedPosition(isLocked);

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Overwrites the current set of positions with an array of new ones.
         * @template THIS
         * @this {THIS}
         * @param {?} positions Position pairs to be set on the strategy.
         * @return {THIS}
         */

      }, {
        key: "withPositions",
        value: function withPositions(positions) {
          /** @type {?} */
          this._preferredPositions = positions.slice();

          /** @type {?} */
          this._positionStrategy.withPositions(
          /** @type {?} */
          this._preferredPositions);

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the origin element, relative to which to position the overlay.
         * @template THIS
         * @this {THIS}
         * @param {?} origin Reference to the new origin element.
         * @return {THIS}
         */

      }, {
        key: "setOrigin",
        value: function setOrigin(origin) {
          /** @type {?} */
          this._positionStrategy.setOrigin(origin);

          return (
            /** @type {?} */
            this
          );
        }
      }, {
        key: "_isRtl",
        get: function get() {
          return this._overlayRef.getDirection() === 'rtl';
        }
        /**
         * Emits an event when the connection point changes.
         * @return {?}
         */

      }, {
        key: "onPositionChange",
        get: function get() {
          return this._positionStrategy.positionChanges;
        }
        /**
         * Ordered list of preferred positions, from most to least desirable.
         * @return {?}
         */

      }, {
        key: "positions",
        get: function get() {
          return this._preferredPositions;
        }
      }]);

      return ConnectedPositionStrategy;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/position/global-position-strategy.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Class to be added to the overlay pane wrapper.
     * @type {?}
     */


    var wrapperClass = 'cdk-global-overlay-wrapper';
    /**
     * A strategy for positioning overlays. Using this strategy, an overlay is given an
     * explicit position relative to the browser's viewport. We use flexbox, instead of
     * transforms, in order to avoid issues with subpixel rendering which can cause the
     * element to become blurry.
     */

    var GlobalPositionStrategy = /*#__PURE__*/function () {
      function GlobalPositionStrategy() {
        _classCallCheck(this, GlobalPositionStrategy);

        this._cssPosition = 'static';
        this._topOffset = '';
        this._bottomOffset = '';
        this._leftOffset = '';
        this._rightOffset = '';
        this._alignItems = '';
        this._justifyContent = '';
        this._width = '';
        this._height = '';
      }
      /**
       * @param {?} overlayRef
       * @return {?}
       */


      _createClass(GlobalPositionStrategy, [{
        key: "attach",
        value: function attach(overlayRef) {
          /** @type {?} */
          var config = overlayRef.getConfig();
          this._overlayRef = overlayRef;

          if (this._width && !config.width) {
            overlayRef.updateSize({
              width: this._width
            });
          }

          if (this._height && !config.height) {
            overlayRef.updateSize({
              height: this._height
            });
          }

          overlayRef.hostElement.classList.add(wrapperClass);
          this._isDisposed = false;
        }
        /**
         * Sets the top position of the overlay. Clears any previously set vertical position.
         * @template THIS
         * @this {THIS}
         * @param {?=} value New top offset.
         * @return {THIS}
         */

      }, {
        key: "top",
        value: function top() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

          /** @type {?} */
          this._bottomOffset = '';

          /** @type {?} */
          this._topOffset = value;

          /** @type {?} */
          this._alignItems = 'flex-start';
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the left position of the overlay. Clears any previously set horizontal position.
         * @template THIS
         * @this {THIS}
         * @param {?=} value New left offset.
         * @return {THIS}
         */

      }, {
        key: "left",
        value: function left() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

          /** @type {?} */
          this._rightOffset = '';

          /** @type {?} */
          this._leftOffset = value;

          /** @type {?} */
          this._justifyContent = 'flex-start';
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the bottom position of the overlay. Clears any previously set vertical position.
         * @template THIS
         * @this {THIS}
         * @param {?=} value New bottom offset.
         * @return {THIS}
         */

      }, {
        key: "bottom",
        value: function bottom() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

          /** @type {?} */
          this._topOffset = '';

          /** @type {?} */
          this._bottomOffset = value;

          /** @type {?} */
          this._alignItems = 'flex-end';
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the right position of the overlay. Clears any previously set horizontal position.
         * @template THIS
         * @this {THIS}
         * @param {?=} value New right offset.
         * @return {THIS}
         */

      }, {
        key: "right",
        value: function right() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

          /** @type {?} */
          this._leftOffset = '';

          /** @type {?} */
          this._rightOffset = value;

          /** @type {?} */
          this._justifyContent = 'flex-end';
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the overlay width and clears any previously set width.
         * @deprecated Pass the `width` through the `OverlayConfig`.
         * \@breaking-change 8.0.0
         * @template THIS
         * @this {THIS}
         * @param {?=} value New width for the overlay
         * @return {THIS}
         */

      }, {
        key: "width",
        value: function width() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

          if (
          /** @type {?} */
          this._overlayRef) {
            /** @type {?} */
            this._overlayRef.updateSize({
              width: value
            });
          } else {
            /** @type {?} */
            this._width = value;
          }

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the overlay height and clears any previously set height.
         * @deprecated Pass the `height` through the `OverlayConfig`.
         * \@breaking-change 8.0.0
         * @template THIS
         * @this {THIS}
         * @param {?=} value New height for the overlay
         * @return {THIS}
         */

      }, {
        key: "height",
        value: function height() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

          if (
          /** @type {?} */
          this._overlayRef) {
            /** @type {?} */
            this._overlayRef.updateSize({
              height: value
            });
          } else {
            /** @type {?} */
            this._height = value;
          }

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Centers the overlay horizontally with an optional offset.
         * Clears any previously set horizontal position.
         *
         * @template THIS
         * @this {THIS}
         * @param {?=} offset Overlay offset from the horizontal center.
         * @return {THIS}
         */

      }, {
        key: "centerHorizontally",
        value: function centerHorizontally() {
          var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

          /** @type {?} */
          this.left(offset);

          /** @type {?} */
          this._justifyContent = 'center';
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Centers the overlay vertically with an optional offset.
         * Clears any previously set vertical position.
         *
         * @template THIS
         * @this {THIS}
         * @param {?=} offset Overlay offset from the vertical center.
         * @return {THIS}
         */

      }, {
        key: "centerVertically",
        value: function centerVertically() {
          var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

          /** @type {?} */
          this.top(offset);

          /** @type {?} */
          this._alignItems = 'center';
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Apply the position to the element.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "apply",
        value: function apply() {
          // Since the overlay ref applies the strategy asynchronously, it could
          // have been disposed before it ends up being applied. If that is the
          // case, we shouldn't do anything.
          if (!this._overlayRef || !this._overlayRef.hasAttached()) {
            return;
          }
          /** @type {?} */


          var styles = this._overlayRef.overlayElement.style;
          /** @type {?} */

          var parentStyles = this._overlayRef.hostElement.style;
          /** @type {?} */

          var config = this._overlayRef.getConfig();

          var width = config.width,
              height = config.height,
              maxWidth = config.maxWidth,
              maxHeight = config.maxHeight;
          /** @type {?} */

          var shouldBeFlushHorizontally = (width === '100%' || width === '100vw') && (!maxWidth || maxWidth === '100%' || maxWidth === '100vw');
          /** @type {?} */

          var shouldBeFlushVertically = (height === '100%' || height === '100vh') && (!maxHeight || maxHeight === '100%' || maxHeight === '100vh');
          styles.position = this._cssPosition;
          styles.marginLeft = shouldBeFlushHorizontally ? '0' : this._leftOffset;
          styles.marginTop = shouldBeFlushVertically ? '0' : this._topOffset;
          styles.marginBottom = this._bottomOffset;
          styles.marginRight = this._rightOffset;

          if (shouldBeFlushHorizontally) {
            parentStyles.justifyContent = 'flex-start';
          } else if (this._justifyContent === 'center') {
            parentStyles.justifyContent = 'center';
          } else if (this._overlayRef.getConfig().direction === 'rtl') {
            // In RTL the browser will invert `flex-start` and `flex-end` automatically, but we
            // don't want that because our positioning is explicitly `left` and `right`, hence
            // why we do another inversion to ensure that the overlay stays in the same position.
            // TODO: reconsider this if we add `start` and `end` methods.
            if (this._justifyContent === 'flex-start') {
              parentStyles.justifyContent = 'flex-end';
            } else if (this._justifyContent === 'flex-end') {
              parentStyles.justifyContent = 'flex-start';
            }
          } else {
            parentStyles.justifyContent = this._justifyContent;
          }

          parentStyles.alignItems = shouldBeFlushVertically ? 'flex-start' : this._alignItems;
        }
        /**
         * Cleans up the DOM changes from the position strategy.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "dispose",
        value: function dispose() {
          if (this._isDisposed || !this._overlayRef) {
            return;
          }
          /** @type {?} */


          var styles = this._overlayRef.overlayElement.style;
          /** @type {?} */

          var parent = this._overlayRef.hostElement;
          /** @type {?} */

          var parentStyles = parent.style;
          parent.classList.remove(wrapperClass);
          parentStyles.justifyContent = parentStyles.alignItems = styles.marginTop = styles.marginBottom = styles.marginLeft = styles.marginRight = styles.position = '';
          this._overlayRef =
          /** @type {?} */
          null;
          this._isDisposed = true;
        }
      }]);

      return GlobalPositionStrategy;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/position/overlay-position-builder.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Builder for overlay position strategy.
     */


    var OverlayPositionBuilder = /*#__PURE__*/function () {
      /**
       * @param {?} _viewportRuler
       * @param {?} _document
       * @param {?} _platform
       * @param {?} _overlayContainer
       */
      function OverlayPositionBuilder(_viewportRuler, _document, _platform, _overlayContainer) {
        _classCallCheck(this, OverlayPositionBuilder);

        this._viewportRuler = _viewportRuler;
        this._document = _document;
        this._platform = _platform;
        this._overlayContainer = _overlayContainer;
      }
      /**
       * Creates a global position strategy.
       * @return {?}
       */


      _createClass(OverlayPositionBuilder, [{
        key: "global",
        value: function global() {
          return new GlobalPositionStrategy();
        }
        /**
         * Creates a relative position strategy.
         * @deprecated Use `flexibleConnectedTo` instead.
         * \@breaking-change 8.0.0
         * @param {?} elementRef
         * @param {?} originPos
         * @param {?} overlayPos
         * @return {?}
         */

      }, {
        key: "connectedTo",
        value: function connectedTo(elementRef, originPos, overlayPos) {
          return new ConnectedPositionStrategy(originPos, overlayPos, elementRef, this._viewportRuler, this._document, this._platform, this._overlayContainer);
        }
        /**
         * Creates a flexible position strategy.
         * @param {?} origin Origin relative to which to position the overlay.
         * @return {?}
         */

      }, {
        key: "flexibleConnectedTo",
        value: function flexibleConnectedTo(origin) {
          return new FlexibleConnectedPositionStrategy(origin, this._viewportRuler, this._document, this._platform, this._overlayContainer);
        }
      }]);

      return OverlayPositionBuilder;
    }();

    OverlayPositionBuilder.ɵfac = function OverlayPositionBuilder_Factory(t) {
      return new (t || OverlayPositionBuilder)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OverlayContainer));
    };
    /** @nocollapse */


    OverlayPositionBuilder.ctorParameters = function () {
      return [{
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
        }]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: OverlayContainer
      }];
    };
    /** @nocollapse */


    OverlayPositionBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function OverlayPositionBuilder_Factory() {
        return new OverlayPositionBuilder(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(OverlayContainer));
      },
      token: OverlayPositionBuilder,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OverlayPositionBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: OverlayContainer
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/overlay.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Next overlay unique ID.
     * @type {?}
     */


    var nextUniqueId = 0; // Note that Overlay is *not* scoped to the app root because of the ComponentFactoryResolver
    // which needs to be different depending on where OverlayModule is imported.

    /**
     * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
     * used as a low-level building block for other components. Dialogs, tooltips, menus,
     * selects, etc. can all be built using overlays. The service should primarily be used by authors
     * of re-usable components rather than developers building end-user applications.
     *
     * An overlay *is* a PortalOutlet, so any kind of Portal can be loaded into one.
     */

    var Overlay = /*#__PURE__*/function () {
      /**
       * @param {?} scrollStrategies
       * @param {?} _overlayContainer
       * @param {?} _componentFactoryResolver
       * @param {?} _positionBuilder
       * @param {?} _keyboardDispatcher
       * @param {?} _injector
       * @param {?} _ngZone
       * @param {?} _document
       * @param {?} _directionality
       * @param {?=} _location
       */
      function Overlay(scrollStrategies, _overlayContainer, _componentFactoryResolver, _positionBuilder, _keyboardDispatcher, _injector, _ngZone, _document, _directionality, _location) {
        _classCallCheck(this, Overlay);

        this.scrollStrategies = scrollStrategies;
        this._overlayContainer = _overlayContainer;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._positionBuilder = _positionBuilder;
        this._keyboardDispatcher = _keyboardDispatcher;
        this._injector = _injector;
        this._ngZone = _ngZone;
        this._document = _document;
        this._directionality = _directionality;
        this._location = _location;
      }
      /**
       * Creates an overlay.
       * @param {?=} config Configuration applied to the overlay.
       * @return {?} Reference to the created overlay.
       */


      _createClass(Overlay, [{
        key: "create",
        value: function create(config) {
          /** @type {?} */
          var host = this._createHostElement();
          /** @type {?} */


          var pane = this._createPaneElement(host);
          /** @type {?} */


          var portalOutlet = this._createPortalOutlet(pane);
          /** @type {?} */


          var overlayConfig = new OverlayConfig(config);
          overlayConfig.direction = overlayConfig.direction || this._directionality.value;
          return new OverlayRef(portalOutlet, host, pane, overlayConfig, this._ngZone, this._keyboardDispatcher, this._document, this._location);
        }
        /**
         * Gets a position builder that can be used, via fluent API,
         * to construct and configure a position strategy.
         * @return {?} An overlay position builder.
         */

      }, {
        key: "position",
        value: function position() {
          return this._positionBuilder;
        }
        /**
         * Creates the DOM element for an overlay and appends it to the overlay container.
         * @private
         * @param {?} host
         * @return {?} Newly-created pane element
         */

      }, {
        key: "_createPaneElement",
        value: function _createPaneElement(host) {
          /** @type {?} */
          var pane = this._document.createElement('div');

          pane.id = "cdk-overlay-".concat(nextUniqueId++);
          pane.classList.add('cdk-overlay-pane');
          host.appendChild(pane);
          return pane;
        }
        /**
         * Creates the host element that wraps around an overlay
         * and can be used for advanced positioning.
         * @private
         * @return {?} Newly-create host element.
         */

      }, {
        key: "_createHostElement",
        value: function _createHostElement() {
          /** @type {?} */
          var host = this._document.createElement('div');

          this._overlayContainer.getContainerElement().appendChild(host);

          return host;
        }
        /**
         * Create a DomPortalOutlet into which the overlay content can be loaded.
         * @private
         * @param {?} pane The DOM element to turn into a portal outlet.
         * @return {?} A portal outlet for the given DOM element.
         */

      }, {
        key: "_createPortalOutlet",
        value: function _createPortalOutlet(pane) {
          // We have to resolve the ApplicationRef later in order to allow people
          // to use overlay-based providers during app initialization.
          if (!this._appRef) {
            this._appRef = this._injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]);
          }

          return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["DomPortalOutlet"](pane, this._componentFactoryResolver, this._appRef, this._injector, this._document);
        }
      }]);

      return Overlay;
    }();

    Overlay.ɵfac = function Overlay_Factory(t) {
      return new (t || Overlay)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ScrollStrategyOptions), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OverlayContainer), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OverlayPositionBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OverlayKeyboardDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], 8));
    };

    Overlay.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: Overlay,
      factory: Overlay.ɵfac
    });
    /** @nocollapse */

    Overlay.ctorParameters = function () {
      return [{
        type: ScrollStrategyOptions
      }, {
        type: OverlayContainer
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
      }, {
        type: OverlayPositionBuilder
      }, {
        type: OverlayKeyboardDispatcher
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Overlay, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: ScrollStrategyOptions
        }, {
          type: OverlayContainer
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
        }, {
          type: OverlayPositionBuilder
        }, {
          type: OverlayKeyboardDispatcher
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/overlay-directives.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Default set of positions for the overlay. Follows the behavior of a dropdown.
     * @type {?}
     */


    var defaultPositionList = [{
      originX: 'start',
      originY: 'bottom',
      overlayX: 'start',
      overlayY: 'top'
    }, {
      originX: 'start',
      originY: 'top',
      overlayX: 'start',
      overlayY: 'bottom'
    }, {
      originX: 'end',
      originY: 'top',
      overlayX: 'end',
      overlayY: 'bottom'
    }, {
      originX: 'end',
      originY: 'bottom',
      overlayX: 'end',
      overlayY: 'top'
    }];
    /**
     * Injection token that determines the scroll handling while the connected overlay is open.
     * @type {?}
     */

    var CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('cdk-connected-overlay-scroll-strategy');
    /**
     * \@docs-private \@deprecated \@breaking-change 8.0.0
     * @param {?} overlay
     * @return {?}
     */

    function CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_FACTORY(overlay) {
      return (
        /**
        * @param {?=} config
        * @return {?}
        */
        function (config) {
          return overlay.scrollStrategies.reposition(config);
        }
      );
    }
    /**
     * Directive applied to an element to make it usable as an origin for an Overlay using a
     * ConnectedPositionStrategy.
     */


    var CdkOverlayOrigin =
    /**
     * @param {?} elementRef
     */
    function CdkOverlayOrigin(elementRef) {
      _classCallCheck(this, CdkOverlayOrigin);

      this.elementRef = elementRef;
    };

    CdkOverlayOrigin.ɵfac = function CdkOverlayOrigin_Factory(t) {
      return new (t || CdkOverlayOrigin)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
    };

    CdkOverlayOrigin.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkOverlayOrigin,
      selectors: [["", "cdk-overlay-origin", ""], ["", "overlay-origin", ""], ["", "cdkOverlayOrigin", ""]],
      exportAs: ["cdkOverlayOrigin"]
    });
    /** @nocollapse */

    CdkOverlayOrigin.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkOverlayOrigin, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]',
          exportAs: 'cdkOverlayOrigin'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * Directive to facilitate declarative creation of an
     * Overlay using a FlexibleConnectedPositionStrategy.
     */


    var CdkConnectedOverlay = /*#__PURE__*/function () {
      // TODO(jelbourn): inputs for size, scroll behavior, animation, etc.

      /**
       * @param {?} _overlay
       * @param {?} templateRef
       * @param {?} viewContainerRef
       * @param {?} scrollStrategyFactory
       * @param {?} _dir
       */
      function CdkConnectedOverlay(_overlay, templateRef, viewContainerRef, scrollStrategyFactory, _dir) {
        _classCallCheck(this, CdkConnectedOverlay);

        this._overlay = _overlay;
        this._dir = _dir;
        this._hasBackdrop = false;
        this._lockPosition = false;
        this._growAfterOpen = false;
        this._flexibleDimensions = false;
        this._push = false;
        this._backdropSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
        /**
         * Margin between the overlay and the viewport edges.
         */

        this.viewportMargin = 0;
        /**
         * Whether the overlay is open.
         */

        this.open = false;
        /**
         * Event emitted when the backdrop is clicked.
         */

        this.backdropClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Event emitted when the position has changed.
         */

        this.positionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Event emitted when the overlay has been attached.
         */

        this.attach = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Event emitted when the overlay has been detached.
         */

        this.detach = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits when there are keyboard events that are targeted at the overlay.
         */

        this.overlayKeydown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._templatePortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["TemplatePortal"](templateRef, viewContainerRef);
        this._scrollStrategyFactory = scrollStrategyFactory;
        this.scrollStrategy = this._scrollStrategyFactory();
      }
      /**
       * The offset in pixels for the overlay connection point on the x-axis
       * @return {?}
       */


      _createClass(CdkConnectedOverlay, [{
        key: "ngOnDestroy",

        /**
         * @return {?}
         */
        value: function ngOnDestroy() {
          if (this._overlayRef) {
            this._overlayRef.dispose();
          }

          this._backdropSubscription.unsubscribe();
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (this._position) {
            this._updatePositionStrategy(this._position);

            this._overlayRef.updateSize({
              width: this.width,
              minWidth: this.minWidth,
              height: this.height,
              minHeight: this.minHeight
            });

            if (changes['origin'] && this.open) {
              this._position.apply();
            }
          }

          if (changes['open']) {
            this.open ? this._attachOverlay() : this._detachOverlay();
          }
        }
        /**
         * Creates an overlay
         * @private
         * @return {?}
         */

      }, {
        key: "_createOverlay",
        value: function _createOverlay() {
          var _this14 = this;

          if (!this.positions || !this.positions.length) {
            this.positions = defaultPositionList;
          }

          this._overlayRef = this._overlay.create(this._buildConfig());

          this._overlayRef.keydownEvents().subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this14.overlayKeydown.next(event);

            if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["ESCAPE"] && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["hasModifierKey"])(event)) {
              event.preventDefault();

              _this14._detachOverlay();
            }
          });
        }
        /**
         * Builds the overlay config based on the directive's inputs
         * @private
         * @return {?}
         */

      }, {
        key: "_buildConfig",
        value: function _buildConfig() {
          /** @type {?} */
          var positionStrategy = this._position = this.positionStrategy || this._createPositionStrategy();
          /** @type {?} */


          var overlayConfig = new OverlayConfig({
            direction: this._dir,
            positionStrategy: positionStrategy,
            scrollStrategy: this.scrollStrategy,
            hasBackdrop: this.hasBackdrop
          });

          if (this.width || this.width === 0) {
            overlayConfig.width = this.width;
          }

          if (this.height || this.height === 0) {
            overlayConfig.height = this.height;
          }

          if (this.minWidth || this.minWidth === 0) {
            overlayConfig.minWidth = this.minWidth;
          }

          if (this.minHeight || this.minHeight === 0) {
            overlayConfig.minHeight = this.minHeight;
          }

          if (this.backdropClass) {
            overlayConfig.backdropClass = this.backdropClass;
          }

          if (this.panelClass) {
            overlayConfig.panelClass = this.panelClass;
          }

          return overlayConfig;
        }
        /**
         * Updates the state of a position strategy, based on the values of the directive inputs.
         * @private
         * @param {?} positionStrategy
         * @return {?}
         */

      }, {
        key: "_updatePositionStrategy",
        value: function _updatePositionStrategy(positionStrategy) {
          var _this15 = this;

          /** @type {?} */
          var positions = this.positions.map(
          /**
          * @param {?} currentPosition
          * @return {?}
          */
          function (currentPosition) {
            return {
              originX: currentPosition.originX,
              originY: currentPosition.originY,
              overlayX: currentPosition.overlayX,
              overlayY: currentPosition.overlayY,
              offsetX: currentPosition.offsetX || _this15.offsetX,
              offsetY: currentPosition.offsetY || _this15.offsetY,
              panelClass: currentPosition.panelClass || undefined
            };
          });
          return positionStrategy.setOrigin(this.origin.elementRef).withPositions(positions).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector);
        }
        /**
         * Returns the position strategy of the overlay to be set on the overlay config
         * @private
         * @return {?}
         */

      }, {
        key: "_createPositionStrategy",
        value: function _createPositionStrategy() {
          var _this16 = this;

          /** @type {?} */
          var strategy = this._overlay.position().flexibleConnectedTo(this.origin.elementRef);

          this._updatePositionStrategy(strategy);

          strategy.positionChanges.subscribe(
          /**
          * @param {?} p
          * @return {?}
          */
          function (p) {
            return _this16.positionChange.emit(p);
          });
          return strategy;
        }
        /**
         * Attaches the overlay and subscribes to backdrop clicks if backdrop exists
         * @private
         * @return {?}
         */

      }, {
        key: "_attachOverlay",
        value: function _attachOverlay() {
          var _this17 = this;

          if (!this._overlayRef) {
            this._createOverlay();
          } else {
            // Update the overlay size, in case the directive's inputs have changed
            this._overlayRef.getConfig().hasBackdrop = this.hasBackdrop;
          }

          if (!this._overlayRef.hasAttached()) {
            this._overlayRef.attach(this._templatePortal);

            this.attach.emit();
          }

          if (this.hasBackdrop) {
            this._backdropSubscription = this._overlayRef.backdropClick().subscribe(
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              _this17.backdropClick.emit(event);
            });
          } else {
            this._backdropSubscription.unsubscribe();
          }
        }
        /**
         * Detaches the overlay and unsubscribes to backdrop clicks if backdrop exists
         * @private
         * @return {?}
         */

      }, {
        key: "_detachOverlay",
        value: function _detachOverlay() {
          if (this._overlayRef) {
            this._overlayRef.detach();

            this.detach.emit();
          }

          this._backdropSubscription.unsubscribe();
        }
      }, {
        key: "offsetX",
        get: function get() {
          return this._offsetX;
        }
        /**
         * @param {?} offsetX
         * @return {?}
         */
        ,
        set: function set(offsetX) {
          this._offsetX = offsetX;

          if (this._position) {
            this._updatePositionStrategy(this._position);
          }
        }
        /**
         * The offset in pixels for the overlay connection point on the y-axis
         * @return {?}
         */

      }, {
        key: "offsetY",
        get: function get() {
          return this._offsetY;
        }
        /**
         * @param {?} offsetY
         * @return {?}
         */
        ,
        set: function set(offsetY) {
          this._offsetY = offsetY;

          if (this._position) {
            this._updatePositionStrategy(this._position);
          }
        }
        /**
         * Whether or not the overlay should attach a backdrop.
         * @return {?}
         */

      }, {
        key: "hasBackdrop",
        get: function get() {
          return this._hasBackdrop;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._hasBackdrop = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether or not the overlay should be locked when scrolling.
         * @return {?}
         */

      }, {
        key: "lockPosition",
        get: function get() {
          return this._lockPosition;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._lockPosition = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether the overlay's width and height can be constrained to fit within the viewport.
         * @return {?}
         */

      }, {
        key: "flexibleDimensions",
        get: function get() {
          return this._flexibleDimensions;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._flexibleDimensions = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether the overlay can grow after the initial open when flexible positioning is turned on.
         * @return {?}
         */

      }, {
        key: "growAfterOpen",
        get: function get() {
          return this._growAfterOpen;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._growAfterOpen = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether the overlay can be pushed on-screen if none of the provided positions fit.
         * @return {?}
         */

      }, {
        key: "push",
        get: function get() {
          return this._push;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._push = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        }
        /**
         * The associated overlay reference.
         * @return {?}
         */

      }, {
        key: "overlayRef",
        get: function get() {
          return this._overlayRef;
        }
        /**
         * The element's layout direction.
         * @return {?}
         */

      }, {
        key: "dir",
        get: function get() {
          return this._dir ? this._dir.value : 'ltr';
        }
      }]);

      return CdkConnectedOverlay;
    }();

    CdkConnectedOverlay.ɵfac = function CdkConnectedOverlay_Factory(t) {
      return new (t || CdkConnectedOverlay)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], 8));
    };

    CdkConnectedOverlay.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkConnectedOverlay,
      selectors: [["", "cdk-connected-overlay", ""], ["", "connected-overlay", ""], ["", "cdkConnectedOverlay", ""]],
      inputs: {
        viewportMargin: ["cdkConnectedOverlayViewportMargin", "viewportMargin"],
        open: ["cdkConnectedOverlayOpen", "open"],
        scrollStrategy: ["cdkConnectedOverlayScrollStrategy", "scrollStrategy"],
        offsetX: ["cdkConnectedOverlayOffsetX", "offsetX"],
        offsetY: ["cdkConnectedOverlayOffsetY", "offsetY"],
        hasBackdrop: ["cdkConnectedOverlayHasBackdrop", "hasBackdrop"],
        lockPosition: ["cdkConnectedOverlayLockPosition", "lockPosition"],
        flexibleDimensions: ["cdkConnectedOverlayFlexibleDimensions", "flexibleDimensions"],
        growAfterOpen: ["cdkConnectedOverlayGrowAfterOpen", "growAfterOpen"],
        push: ["cdkConnectedOverlayPush", "push"],
        positions: ["cdkConnectedOverlayPositions", "positions"],
        origin: ["cdkConnectedOverlayOrigin", "origin"],
        positionStrategy: ["cdkConnectedOverlayPositionStrategy", "positionStrategy"],
        width: ["cdkConnectedOverlayWidth", "width"],
        height: ["cdkConnectedOverlayHeight", "height"],
        minWidth: ["cdkConnectedOverlayMinWidth", "minWidth"],
        minHeight: ["cdkConnectedOverlayMinHeight", "minHeight"],
        backdropClass: ["cdkConnectedOverlayBackdropClass", "backdropClass"],
        panelClass: ["cdkConnectedOverlayPanelClass", "panelClass"],
        transformOriginSelector: ["cdkConnectedOverlayTransformOriginOn", "transformOriginSelector"]
      },
      outputs: {
        backdropClick: "backdropClick",
        positionChange: "positionChange",
        attach: "attach",
        detach: "detach",
        overlayKeydown: "overlayKeydown"
      },
      exportAs: ["cdkConnectedOverlay"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
    /** @nocollapse */

    CdkConnectedOverlay.ctorParameters = function () {
      return [{
        type: Overlay
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };

    CdkConnectedOverlay.propDecorators = {
      origin: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayOrigin']
      }],
      positions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayPositions']
      }],
      positionStrategy: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayPositionStrategy']
      }],
      offsetX: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayOffsetX']
      }],
      offsetY: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayOffsetY']
      }],
      width: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayWidth']
      }],
      height: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayHeight']
      }],
      minWidth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayMinWidth']
      }],
      minHeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayMinHeight']
      }],
      backdropClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayBackdropClass']
      }],
      panelClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayPanelClass']
      }],
      viewportMargin: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayViewportMargin']
      }],
      scrollStrategy: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayScrollStrategy']
      }],
      open: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayOpen']
      }],
      transformOriginSelector: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayTransformOriginOn']
      }],
      hasBackdrop: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayHasBackdrop']
      }],
      lockPosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayLockPosition']
      }],
      flexibleDimensions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayFlexibleDimensions']
      }],
      growAfterOpen: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayGrowAfterOpen']
      }],
      push: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayPush']
      }],
      backdropClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      positionChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      attach: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      detach: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      overlayKeydown: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkConnectedOverlay, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]',
          exportAs: 'cdkConnectedOverlay'
        }]
      }], function () {
        return [{
          type: Overlay
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      }, {
        viewportMargin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayViewportMargin']
        }],
        open: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayOpen']
        }],
        backdropClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        positionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        attach: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        detach: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        overlayKeydown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        scrollStrategy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayScrollStrategy']
        }],
        offsetX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayOffsetX']
        }],
        offsetY: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayOffsetY']
        }],
        hasBackdrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayHasBackdrop']
        }],
        lockPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayLockPosition']
        }],
        flexibleDimensions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayFlexibleDimensions']
        }],
        growAfterOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayGrowAfterOpen']
        }],
        push: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayPush']
        }],
        positions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayPositions']
        }],
        origin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayOrigin']
        }],
        positionStrategy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayPositionStrategy']
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayWidth']
        }],
        height: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayHeight']
        }],
        minWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayMinWidth']
        }],
        minHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayMinHeight']
        }],
        backdropClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayBackdropClass']
        }],
        panelClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayPanelClass']
        }],
        transformOriginSelector: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayTransformOriginOn']
        }]
      });
    })();

    if (false) {}
    /**
     * \@docs-private
     * @param {?} overlay
     * @return {?}
     */


    function CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
      return (
        /**
        * @return {?}
        */
        function () {
          return overlay.scrollStrategies.reposition();
        }
      );
    }
    /**
     * \@docs-private
     * @type {?}
     */


    var CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER = {
      provide: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY,
      deps: [Overlay],
      useFactory: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/overlay-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var OverlayModule = function OverlayModule() {
      _classCallCheck(this, OverlayModule);
    };

    OverlayModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: OverlayModule
    });
    OverlayModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function OverlayModule_Factory(t) {
        return new (t || OverlayModule)();
      },
      providers: [Overlay, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER],
      imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OverlayModule, {
        declarations: function declarations() {
          return [CdkConnectedOverlay, CdkOverlayOrigin];
        },
        imports: function imports() {
          return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]];
        },
        exports: function exports() {
          return [CdkConnectedOverlay, CdkOverlayOrigin, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OverlayModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]],
          exports: [CdkConnectedOverlay, CdkOverlayOrigin, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]],
          declarations: [CdkConnectedOverlay, CdkOverlayOrigin],
          providers: [Overlay, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER]
        }]
      }], null, null);
    })();
    /**
     * @deprecated Use `OverlayModule` instead.
     * \@breaking-change 8.0.0
     * \@docs-private
     * @type {?}
     */


    var OVERLAY_PROVIDERS = [Overlay, OverlayPositionBuilder, OVERLAY_KEYBOARD_DISPATCHER_PROVIDER, OVERLAY_CONTAINER_PROVIDER, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER];
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/fullscreen-overlay-container.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Alternative to OverlayContainer that supports correct displaying of overlay elements in
     * Fullscreen mode
     * https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen
     *
     * Should be provided in the root component.
     */

    var FullscreenOverlayContainer = /*#__PURE__*/function (_OverlayContainer) {
      _inherits(FullscreenOverlayContainer, _OverlayContainer);

      var _super = _createSuper(FullscreenOverlayContainer);

      /**
       * @param {?} _document
       * @param {?=} platform
       */
      function FullscreenOverlayContainer(_document,
      /**
       * @deprecated `platform` parameter to become required.
       * @breaking-change 10.0.0
       */
      platform) {
        _classCallCheck(this, FullscreenOverlayContainer);

        return _super.call(this, _document, platform);
      }
      /**
       * @return {?}
       */


      _createClass(FullscreenOverlayContainer, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          _get(_getPrototypeOf(FullscreenOverlayContainer.prototype), "ngOnDestroy", this).call(this);

          if (this._fullScreenEventName && this._fullScreenListener) {
            this._document.removeEventListener(this._fullScreenEventName, this._fullScreenListener);
          }
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "_createContainer",
        value: function _createContainer() {
          var _this18 = this;

          _get(_getPrototypeOf(FullscreenOverlayContainer.prototype), "_createContainer", this).call(this);

          this._adjustParentForFullscreenChange();

          this._addFullscreenChangeListener(
          /**
          * @return {?}
          */
          function () {
            return _this18._adjustParentForFullscreenChange();
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_adjustParentForFullscreenChange",
        value: function _adjustParentForFullscreenChange() {
          if (!this._containerElement) {
            return;
          }
          /** @type {?} */


          var fullscreenElement = this.getFullscreenElement();
          /** @type {?} */

          var parent = fullscreenElement || this._document.body;
          parent.appendChild(this._containerElement);
        }
        /**
         * @private
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "_addFullscreenChangeListener",
        value: function _addFullscreenChangeListener(fn) {
          /** @type {?} */
          var eventName = this._getEventName();

          if (eventName) {
            if (this._fullScreenListener) {
              this._document.removeEventListener(eventName, this._fullScreenListener);
            }

            this._document.addEventListener(eventName, fn);

            this._fullScreenListener = fn;
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_getEventName",
        value: function _getEventName() {
          if (!this._fullScreenEventName) {
            /** @type {?} */
            var _document =
            /** @type {?} */
            this._document;

            if (_document.fullscreenEnabled) {
              this._fullScreenEventName = 'fullscreenchange';
            } else if (_document.webkitFullscreenEnabled) {
              this._fullScreenEventName = 'webkitfullscreenchange';
            } else if (_document.mozFullScreenEnabled) {
              this._fullScreenEventName = 'mozfullscreenchange';
            } else if (_document.msFullscreenEnabled) {
              this._fullScreenEventName = 'MSFullscreenChange';
            }
          }

          return this._fullScreenEventName;
        }
        /**
         * When the page is put into fullscreen mode, a specific element is specified.
         * Only that element and its children are visible when in fullscreen mode.
         * @return {?}
         */

      }, {
        key: "getFullscreenElement",
        value: function getFullscreenElement() {
          /** @type {?} */
          var _document =
          /** @type {?} */
          this._document;
          return _document.fullscreenElement || _document.webkitFullscreenElement || _document.mozFullScreenElement || _document.msFullscreenElement || null;
        }
      }]);

      return FullscreenOverlayContainer;
    }(OverlayContainer);

    FullscreenOverlayContainer.ɵfac = function FullscreenOverlayContainer_Factory(t) {
      return new (t || FullscreenOverlayContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]));
    };
    /** @nocollapse */


    FullscreenOverlayContainer.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
        }]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }];
    };
    /** @nocollapse */


    FullscreenOverlayContainer.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function FullscreenOverlayContainer_Factory() {
        return new FullscreenOverlayContainer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]));
      },
      token: FullscreenOverlayContainer,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FullscreenOverlayContainer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=overlay.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js ***!
    \****************************************************************************/

  /*! exports provided: MAT_FORM_FIELD_DEFAULT_OPTIONS, MatError, MatFormField, MatFormFieldControl, MatFormFieldModule, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix, getMatFormFieldDuplicatedHintError, getMatFormFieldMissingControlError, getMatFormFieldPlaceholderConflictError, matFormFieldAnimations */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015FormFieldJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_FORM_FIELD_DEFAULT_OPTIONS", function () {
      return MAT_FORM_FIELD_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatError", function () {
      return MatError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatFormField", function () {
      return MatFormField;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatFormFieldControl", function () {
      return MatFormFieldControl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatFormFieldModule", function () {
      return MatFormFieldModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatHint", function () {
      return MatHint;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatLabel", function () {
      return MatLabel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatPlaceholder", function () {
      return MatPlaceholder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatPrefix", function () {
      return MatPrefix;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSuffix", function () {
      return MatSuffix;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMatFormFieldDuplicatedHintError", function () {
      return getMatFormFieldDuplicatedHintError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMatFormFieldMissingControlError", function () {
      return getMatFormFieldMissingControlError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMatFormFieldPlaceholderConflictError", function () {
      return getMatFormFieldPlaceholderConflictError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matFormFieldAnimations", function () {
      return matFormFieldAnimations;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/observers.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/form-field/error.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var _c0 = ["underline"];
    var _c1 = ["connectionContainer"];
    var _c2 = ["inputContainer"];
    var _c3 = ["label"];

    function MatFormField_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }
    }

    function MatFormField_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1, 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MatFormField_label_9_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1, 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r54._control.placeholder);
      }
    }

    function MatFormField_label_9_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0, 3, ["*ngSwitchCase", "true"]);
      }
    }

    function MatFormField_label_9_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " *");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MatFormField_label_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 20, 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkObserveContent", function MatFormField_label_9_Template_label_cdkObserveContent_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r58);

          var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r57.updateOutlineGap();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MatFormField_label_9_ng_container_2_Template, 4, 1, "ng-container", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MatFormField_label_9_3_Template, 1, 0, undefined, 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MatFormField_label_9_span_4_Template, 2, 0, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-empty", ctx_r48._control.empty && !ctx_r48._shouldAlwaysFloat)("mat-form-field-empty", ctx_r48._control.empty && !ctx_r48._shouldAlwaysFloat)("mat-accent", ctx_r48.color == "accent")("mat-warn", ctx_r48.color == "warn");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkObserveContentDisabled", ctx_r48.appearance != "outline")("id", ctx_r48._labelId)("ngSwitch", ctx_r48._hasLabel());

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("for", ctx_r48._control.id)("aria-owns", ctx_r48._control.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r48.hideRequiredMarker && ctx_r48._control.required && !ctx_r48._control.disabled);
      }
    }

    function MatFormField_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1, 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MatFormField_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25, 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-accent", ctx_r50.color == "accent")("mat-warn", ctx_r50.color == "warn");
      }
    }

    function MatFormField_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1, 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@transitionMessages", ctx_r51._subscriptAnimationState);
      }
    }

    function MatFormField_div_14_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx_r60._hintLabelId);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r60.hintLabel);
      }
    }

    function MatFormField_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MatFormField_div_14_div_1_Template, 2, 2, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2, 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](4, 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@transitionMessages", ctx_r52._subscriptAnimationState);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r52.hintLabel);
      }
    }

    var _c4 = ["*", [["", "matPrefix", ""]], [["mat-placeholder"]], [["mat-label"]], [["", "matSuffix", ""]], [["mat-error"]], [["mat-hint", 3, "align", "end"]], [["mat-hint", "align", "end"]]];
    var _c5 = ["*", "[matPrefix]", "mat-placeholder", "mat-label", "[matSuffix]", "mat-error", "mat-hint:not([align='end'])", "mat-hint[align='end']"];
    var nextUniqueId = 0;
    /**
     * Single error message to be shown underneath the form field.
     */

    var MatError = function MatError() {
      _classCallCheck(this, MatError);

      this.id = "mat-error-".concat(nextUniqueId++);
    };

    MatError.ɵfac = function MatError_Factory(t) {
      return new (t || MatError)();
    };

    MatError.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatError,
      selectors: [["mat-error"]],
      hostAttrs: ["role", "alert", 1, "mat-error"],
      hostVars: 1,
      hostBindings: function MatError_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx.id);
        }
      },
      inputs: {
        id: "id"
      }
    });
    MatError.propDecorators = {
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatError, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'mat-error',
          host: {
            'class': 'mat-error',
            'role': 'alert',
            '[attr.id]': 'id'
          }
        }]
      }], function () {
        return [];
      }, {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/form-field/form-field-animations.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Animations used by the MatFormField.
     * \@docs-private
     * @type {?}
     */


    var matFormFieldAnimations = {
      /**
       * Animation that transitions the form field's error and hint messages.
       */
      transitionMessages: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('transitionMessages', [// TODO(mmalerba): Use angular animations for label animation as well.
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
        opacity: 1,
        transform: 'translateY(0%)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('void => enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
        opacity: 0,
        transform: 'translateY(-100%)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('300ms cubic-bezier(0.55, 0, 0.55, 0.2)')])])
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/form-field/form-field-control.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * An interface which allows a control to work inside of a `MatFormField`.
     * @abstract
     * @template T
     */

    var MatFormFieldControl = function MatFormFieldControl() {
      _classCallCheck(this, MatFormFieldControl);
    };

    MatFormFieldControl.ɵfac = function MatFormFieldControl_Factory(t) {
      return new (t || MatFormFieldControl)();
    };

    MatFormFieldControl.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatFormFieldControl
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatFormFieldControl, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"]
      }], null, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/form-field/form-field-errors.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * \@docs-private
     * @return {?}
     */


    function getMatFormFieldPlaceholderConflictError() {
      return Error('Placeholder attribute and child element were both specified.');
    }
    /**
     * \@docs-private
     * @param {?} align
     * @return {?}
     */


    function getMatFormFieldDuplicatedHintError(align) {
      return Error("A hint was already declared for 'align=\"".concat(align, "\"'."));
    }
    /**
     * \@docs-private
     * @return {?}
     */


    function getMatFormFieldMissingControlError() {
      return Error('mat-form-field must contain a MatFormFieldControl.');
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/form-field/hint.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var nextUniqueId$1 = 0;
    /**
     * Hint text to be shown underneath the form field control.
     */

    var MatHint = function MatHint() {
      _classCallCheck(this, MatHint);

      /**
       * Whether to align the hint label at the start or end of the line.
       */
      this.align = 'start';
      /**
       * Unique ID for the hint. Used for the aria-describedby on the form field control.
       */

      this.id = "mat-hint-".concat(nextUniqueId$1++);
    };

    MatHint.ɵfac = function MatHint_Factory(t) {
      return new (t || MatHint)();
    };

    MatHint.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatHint,
      selectors: [["mat-hint"]],
      hostAttrs: [1, "mat-hint"],
      hostVars: 4,
      hostBindings: function MatHint_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx.id)("align", null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-right", ctx.align == "end");
        }
      },
      inputs: {
        align: "align",
        id: "id"
      }
    });
    MatHint.propDecorators = {
      align: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatHint, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'mat-hint',
          host: {
            'class': 'mat-hint',
            '[class.mat-right]': 'align == "end"',
            '[attr.id]': 'id',
            // Remove align attribute to prevent it from interfering with layout.
            '[attr.align]': 'null'
          }
        }]
      }], function () {
        return [];
      }, {
        align: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/form-field/label.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The floating label for a `mat-form-field`.
     */


    var MatLabel = function MatLabel() {
      _classCallCheck(this, MatLabel);
    };

    MatLabel.ɵfac = function MatLabel_Factory(t) {
      return new (t || MatLabel)();
    };

    MatLabel.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatLabel,
      selectors: [["mat-label"]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatLabel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'mat-label'
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/form-field/placeholder.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The placeholder text for an `MatFormField`.
     * @deprecated Use `<mat-label>` to specify the label and the `placeholder` attribute to specify the
     *     placeholder.
     * \@breaking-change 8.0.0
     */


    var MatPlaceholder = function MatPlaceholder() {
      _classCallCheck(this, MatPlaceholder);
    };

    MatPlaceholder.ɵfac = function MatPlaceholder_Factory(t) {
      return new (t || MatPlaceholder)();
    };

    MatPlaceholder.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatPlaceholder,
      selectors: [["mat-placeholder"]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatPlaceholder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'mat-placeholder'
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/form-field/prefix.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Prefix to be placed in front of the form field.
     */


    var MatPrefix = function MatPrefix() {
      _classCallCheck(this, MatPrefix);
    };

    MatPrefix.ɵfac = function MatPrefix_Factory(t) {
      return new (t || MatPrefix)();
    };

    MatPrefix.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatPrefix,
      selectors: [["", "matPrefix", ""]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatPrefix, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[matPrefix]'
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/form-field/suffix.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Suffix to be placed at the end of the form field.
     */


    var MatSuffix = function MatSuffix() {
      _classCallCheck(this, MatSuffix);
    };

    MatSuffix.ɵfac = function MatSuffix_Factory(t) {
      return new (t || MatSuffix)();
    };

    MatSuffix.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatSuffix,
      selectors: [["", "matSuffix", ""]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSuffix, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[matSuffix]'
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/form-field/form-field.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var nextUniqueId$2 = 0;
    /** @type {?} */

    var floatingLabelScale = 0.75;
    /** @type {?} */

    var outlineGapPadding = 5;
    /**
     * Boilerplate for applying mixins to MatFormField.
     * \@docs-private
     */

    var MatFormFieldBase =
    /**
     * @param {?} _elementRef
     */
    function MatFormFieldBase(_elementRef) {
      _classCallCheck(this, MatFormFieldBase);

      this._elementRef = _elementRef;
    };

    if (false) {}
    /**
     * Base class to which we're applying the form field mixins.
     * \@docs-private
     * @type {?}
     */


    var _MatFormFieldMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinColor"])(MatFormFieldBase, 'primary');
    /**
     * Represents the default options for the form field that can be configured
     * using the `MAT_FORM_FIELD_DEFAULT_OPTIONS` injection token.
     * @record
     */


    function MatFormFieldDefaultOptions() {}

    if (false) {}
    /**
     * Injection token that can be used to configure the
     * default options for all form field within an app.
     * @type {?}
     */


    var MAT_FORM_FIELD_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MAT_FORM_FIELD_DEFAULT_OPTIONS');
    /**
     * Container for form controls that applies Material Design styling and behavior.
     */

    var MatFormField = /*#__PURE__*/function (_MatFormFieldMixinBas) {
      _inherits(MatFormField, _MatFormFieldMixinBas);

      var _super2 = _createSuper(MatFormField);

      /**
       * @param {?} _elementRef
       * @param {?} _changeDetectorRef
       * @param {?} labelOptions
       * @param {?} _dir
       * @param {?} _defaults
       * @param {?} _platform
       * @param {?} _ngZone
       * @param {?} _animationMode
       */
      function MatFormField(_elementRef, _changeDetectorRef, labelOptions, _dir, _defaults, _platform, _ngZone, _animationMode) {
        var _this19;

        _classCallCheck(this, MatFormField);

        _this19 = _super2.call(this, _elementRef);
        _this19._elementRef = _elementRef;
        _this19._changeDetectorRef = _changeDetectorRef;
        _this19._dir = _dir;
        _this19._defaults = _defaults;
        _this19._platform = _platform;
        _this19._ngZone = _ngZone;
        /**
         * Whether the outline gap needs to be calculated
         * immediately on the next change detection run.
         */

        _this19._outlineGapCalculationNeededImmediately = false;
        /**
         * Whether the outline gap needs to be calculated next time the zone has stabilized.
         */

        _this19._outlineGapCalculationNeededOnStable = false;
        _this19._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Override for the logic that disables the label animation in certain cases.
         */

        _this19._showAlwaysAnimate = false;
        /**
         * State of the mat-hint and mat-error animations.
         */

        _this19._subscriptAnimationState = '';
        _this19._hintLabel = ''; // Unique id for the hint label.

        _this19._hintLabelId = "mat-hint-".concat(nextUniqueId$2++); // Unique id for the internal form field label.

        _this19._labelId = "mat-form-field-label-".concat(nextUniqueId$2++);
        _this19._labelOptions = labelOptions ? labelOptions : {};
        _this19.floatLabel = _this19._getDefaultFloatLabelState();
        _this19._animationsEnabled = _animationMode !== 'NoopAnimations'; // Set the default through here so we invoke the setter on the first run.

        _this19.appearance = _defaults && _defaults.appearance ? _defaults.appearance : 'legacy';
        _this19._hideRequiredMarker = _defaults && _defaults.hideRequiredMarker != null ? _defaults.hideRequiredMarker : false;
        return _this19;
      }
      /**
       * The form-field appearance style.
       * @return {?}
       */


      _createClass(MatFormField, [{
        key: "getConnectedOverlayOrigin",

        /**
         * Gets an ElementRef for the element that a overlay attached to the form-field should be
         * positioned relative to.
         * @return {?}
         */
        value: function getConnectedOverlayOrigin() {
          return this._connectionContainerRef || this._elementRef;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this20 = this;

          this._validateControlChild();
          /** @type {?} */


          var control = this._control;

          if (control.controlType) {
            this._elementRef.nativeElement.classList.add("mat-form-field-type-".concat(control.controlType));
          } // Subscribe to changes in the child control state in order to update the form field UI.


          control.stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(
          /** @type {?} */
          null)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this20._validatePlaceholders();

            _this20._syncDescribedByIds();

            _this20._changeDetectorRef.markForCheck();
          }); // Run change detection if the value changes.

          if (control.ngControl && control.ngControl.valueChanges) {
            control.ngControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(
            /**
            * @return {?}
            */
            function () {
              return _this20._changeDetectorRef.markForCheck();
            });
          } // Note that we have to run outside of the `NgZone` explicitly,
          // in order to avoid throwing users into an infinite loop
          // if `zone-patch-rxjs` is included.


          this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            _this20._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(_this20._destroyed)).subscribe(
            /**
            * @return {?}
            */
            function () {
              if (_this20._outlineGapCalculationNeededOnStable) {
                _this20.updateOutlineGap();
              }
            });
          }); // Run change detection and update the outline if the suffix or prefix changes.


          Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(this._prefixChildren.changes, this._suffixChildren.changes).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this20._outlineGapCalculationNeededOnStable = true;

            _this20._changeDetectorRef.markForCheck();
          }); // Re-validate when the number of hints changes.

          this._hintChildren.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this20._processHints();

            _this20._changeDetectorRef.markForCheck();
          }); // Update the aria-described by when the number of errors changes.


          this._errorChildren.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this20._syncDescribedByIds();

            _this20._changeDetectorRef.markForCheck();
          });

          if (this._dir) {
            this._dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(
            /**
            * @return {?}
            */
            function () {
              if (typeof requestAnimationFrame === 'function') {
                _this20._ngZone.runOutsideAngular(
                /**
                * @return {?}
                */
                function () {
                  requestAnimationFrame(
                  /**
                  * @return {?}
                  */
                  function () {
                    return _this20.updateOutlineGap();
                  });
                });
              } else {
                _this20.updateOutlineGap();
              }
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          this._validateControlChild();

          if (this._outlineGapCalculationNeededImmediately) {
            this.updateOutlineGap();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          // Avoid animations on load.
          this._subscriptAnimationState = 'enter';

          this._changeDetectorRef.detectChanges();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroyed.next();

          this._destroyed.complete();
        }
        /**
         * Determines whether a class from the NgControl should be forwarded to the host element.
         * @param {?} prop
         * @return {?}
         */

      }, {
        key: "_shouldForward",
        value: function _shouldForward(prop) {
          /** @type {?} */
          var ngControl = this._control ? this._control.ngControl : null;
          return ngControl && ngControl[prop];
        }
        /**
         * @return {?}
         */

      }, {
        key: "_hasPlaceholder",
        value: function _hasPlaceholder() {
          return !!(this._control && this._control.placeholder || this._placeholderChild);
        }
        /**
         * @return {?}
         */

      }, {
        key: "_hasLabel",
        value: function _hasLabel() {
          return !!this._labelChild;
        }
        /**
         * @return {?}
         */

      }, {
        key: "_shouldLabelFloat",
        value: function _shouldLabelFloat() {
          return this._canLabelFloat && (this._control.shouldLabelFloat || this._shouldAlwaysFloat);
        }
        /**
         * @return {?}
         */

      }, {
        key: "_hideControlPlaceholder",
        value: function _hideControlPlaceholder() {
          // In the legacy appearance the placeholder is promoted to a label if no label is given.
          return this.appearance === 'legacy' && !this._hasLabel() || this._hasLabel() && !this._shouldLabelFloat();
        }
        /**
         * @return {?}
         */

      }, {
        key: "_hasFloatingLabel",
        value: function _hasFloatingLabel() {
          // In the legacy appearance the placeholder is promoted to a label if no label is given.
          return this._hasLabel() || this.appearance === 'legacy' && this._hasPlaceholder();
        }
        /**
         * Determines whether to display hints or errors.
         * @return {?}
         */

      }, {
        key: "_getDisplayedMessages",
        value: function _getDisplayedMessages() {
          return this._errorChildren && this._errorChildren.length > 0 && this._control.errorState ? 'error' : 'hint';
        }
        /**
         * Animates the placeholder up and locks it in position.
         * @return {?}
         */

      }, {
        key: "_animateAndLockLabel",
        value: function _animateAndLockLabel() {
          var _this21 = this;

          if (this._hasFloatingLabel() && this._canLabelFloat) {
            // If animations are disabled, we shouldn't go in here,
            // because the `transitionend` will never fire.
            if (this._animationsEnabled && this._label) {
              this._showAlwaysAnimate = true;
              Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this._label.nativeElement, 'transitionend').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(
              /**
              * @return {?}
              */
              function () {
                _this21._showAlwaysAnimate = false;
              });
            }

            this.floatLabel = 'always';

            this._changeDetectorRef.markForCheck();
          }
        }
        /**
         * Ensure that there is only one placeholder (either `placeholder` attribute on the child control
         * or child element with the `mat-placeholder` directive).
         * @private
         * @return {?}
         */

      }, {
        key: "_validatePlaceholders",
        value: function _validatePlaceholders() {
          if (this._control.placeholder && this._placeholderChild) {
            throw getMatFormFieldPlaceholderConflictError();
          }
        }
        /**
         * Does any extra processing that is required when handling the hints.
         * @private
         * @return {?}
         */

      }, {
        key: "_processHints",
        value: function _processHints() {
          this._validateHints();

          this._syncDescribedByIds();
        }
        /**
         * Ensure that there is a maximum of one of each `<mat-hint>` alignment specified, with the
         * attribute being considered as `align="start"`.
         * @private
         * @return {?}
         */

      }, {
        key: "_validateHints",
        value: function _validateHints() {
          var _this22 = this;

          if (this._hintChildren) {
            /** @type {?} */
            var startHint;
            /** @type {?} */

            var endHint;

            this._hintChildren.forEach(
            /**
            * @param {?} hint
            * @return {?}
            */
            function (hint) {
              if (hint.align === 'start') {
                if (startHint || _this22.hintLabel) {
                  throw getMatFormFieldDuplicatedHintError('start');
                }

                startHint = hint;
              } else if (hint.align === 'end') {
                if (endHint) {
                  throw getMatFormFieldDuplicatedHintError('end');
                }

                endHint = hint;
              }
            });
          }
        }
        /**
         * Gets the default float label state.
         * @private
         * @return {?}
         */

      }, {
        key: "_getDefaultFloatLabelState",
        value: function _getDefaultFloatLabelState() {
          return this._defaults && this._defaults.floatLabel || this._labelOptions["float"] || 'auto';
        }
        /**
         * Sets the list of element IDs that describe the child control. This allows the control to update
         * its `aria-describedby` attribute accordingly.
         * @private
         * @return {?}
         */

      }, {
        key: "_syncDescribedByIds",
        value: function _syncDescribedByIds() {
          if (this._control) {
            /** @type {?} */
            var ids = [];

            if (this._getDisplayedMessages() === 'hint') {
              /** @type {?} */
              var startHint = this._hintChildren ? this._hintChildren.find(
              /**
              * @param {?} hint
              * @return {?}
              */
              function (hint) {
                return hint.align === 'start';
              }) : null;
              /** @type {?} */

              var endHint = this._hintChildren ? this._hintChildren.find(
              /**
              * @param {?} hint
              * @return {?}
              */
              function (hint) {
                return hint.align === 'end';
              }) : null;

              if (startHint) {
                ids.push(startHint.id);
              } else if (this._hintLabel) {
                ids.push(this._hintLabelId);
              }

              if (endHint) {
                ids.push(endHint.id);
              }
            } else if (this._errorChildren) {
              ids = this._errorChildren.map(
              /**
              * @param {?} error
              * @return {?}
              */
              function (error) {
                return error.id;
              });
            }

            this._control.setDescribedByIds(ids);
          }
        }
        /**
         * Throws an error if the form field's control is missing.
         * @protected
         * @return {?}
         */

      }, {
        key: "_validateControlChild",
        value: function _validateControlChild() {
          if (!this._control) {
            throw getMatFormFieldMissingControlError();
          }
        }
        /**
         * Updates the width and position of the gap in the outline. Only relevant for the outline
         * appearance.
         * @return {?}
         */

      }, {
        key: "updateOutlineGap",
        value: function updateOutlineGap() {
          /** @type {?} */
          var labelEl = this._label ? this._label.nativeElement : null;

          if (this.appearance !== 'outline' || !labelEl || !labelEl.children.length || !labelEl.textContent.trim()) {
            return;
          }

          if (!this._platform.isBrowser) {
            // getBoundingClientRect isn't available on the server.
            return;
          } // If the element is not present in the DOM, the outline gap will need to be calculated
          // the next time it is checked and in the DOM.


          if (!this._isAttachedToDOM()) {
            this._outlineGapCalculationNeededImmediately = true;
            return;
          }
          /** @type {?} */


          var startWidth = 0;
          /** @type {?} */

          var gapWidth = 0;
          /** @type {?} */

          var container = this._connectionContainerRef.nativeElement;
          /** @type {?} */

          var startEls = container.querySelectorAll('.mat-form-field-outline-start');
          /** @type {?} */

          var gapEls = container.querySelectorAll('.mat-form-field-outline-gap');

          if (this._label && this._label.nativeElement.children.length) {
            /** @type {?} */
            var containerRect = container.getBoundingClientRect(); // If the container's width and height are zero, it means that the element is
            // invisible and we can't calculate the outline gap. Mark the element as needing
            // to be checked the next time the zone stabilizes. We can't do this immediately
            // on the next change detection, because even if the element becomes visible,
            // the `ClientRect` won't be reclaculated immediately. We reset the
            // `_outlineGapCalculationNeededImmediately` flag some we don't run the checks twice.

            if (containerRect.width === 0 && containerRect.height === 0) {
              this._outlineGapCalculationNeededOnStable = true;
              this._outlineGapCalculationNeededImmediately = false;
              return;
            }
            /** @type {?} */


            var containerStart = this._getStartEnd(containerRect);
            /** @type {?} */


            var labelStart = this._getStartEnd(labelEl.children[0].getBoundingClientRect());
            /** @type {?} */


            var labelWidth = 0;

            var _iterator3 = _createForOfIteratorHelper(labelEl.children),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var child = _step3.value;
                labelWidth += child.offsetWidth;
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            startWidth = labelStart - containerStart - outlineGapPadding;
            gapWidth = labelWidth > 0 ? labelWidth * floatingLabelScale + outlineGapPadding * 2 : 0;
          }

          for (var i = 0; i < startEls.length; i++) {
            startEls[i].style.width = "".concat(startWidth, "px");
          }

          for (var _i2 = 0; _i2 < gapEls.length; _i2++) {
            gapEls[_i2].style.width = "".concat(gapWidth, "px");
          }

          this._outlineGapCalculationNeededOnStable = this._outlineGapCalculationNeededImmediately = false;
        }
        /**
         * Gets the start end of the rect considering the current directionality.
         * @private
         * @param {?} rect
         * @return {?}
         */

      }, {
        key: "_getStartEnd",
        value: function _getStartEnd(rect) {
          return this._dir && this._dir.value === 'rtl' ? rect.right : rect.left;
        }
        /**
         * Checks whether the form field is attached to the DOM.
         * @private
         * @return {?}
         */

      }, {
        key: "_isAttachedToDOM",
        value: function _isAttachedToDOM() {
          /** @type {?} */
          var element = this._elementRef.nativeElement;

          if (element.getRootNode) {
            /** @type {?} */
            var rootNode = element.getRootNode(); // If the element is inside the DOM the root node will be either the document
            // or the closest shadow root, otherwise it'll be the element itself.

            return rootNode && rootNode !== element;
          } // Otherwise fall back to checking if it's in the document. This doesn't account for
          // shadow DOM, however browser that support shadow DOM should support `getRootNode` as well.


          return (
            /** @type {?} */
            document.documentElement.contains(element)
          );
        }
      }, {
        key: "appearance",
        get: function get() {
          return this._appearance;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var oldValue = this._appearance;
          this._appearance = value || this._defaults && this._defaults.appearance || 'legacy';

          if (this._appearance === 'outline' && oldValue !== value) {
            this._outlineGapCalculationNeededOnStable = true;
          }
        }
        /**
         * Whether the required marker should be hidden.
         * @return {?}
         */

      }, {
        key: "hideRequiredMarker",
        get: function get() {
          return this._hideRequiredMarker;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._hideRequiredMarker = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether the floating label should always float or not.
         * @return {?}
         */

      }, {
        key: "_shouldAlwaysFloat",
        get: function get() {
          return this.floatLabel === 'always' && !this._showAlwaysAnimate;
        }
        /**
         * Whether the label can float or not.
         * @return {?}
         */

      }, {
        key: "_canLabelFloat",
        get: function get() {
          return this.floatLabel !== 'never';
        }
        /**
         * Text for the form field hint.
         * @return {?}
         */

      }, {
        key: "hintLabel",
        get: function get() {
          return this._hintLabel;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._hintLabel = value;

          this._processHints();
        }
        /**
         * Whether the label should always float, never float or float as the user types.
         *
         * Note: only the legacy appearance supports the `never` option. `never` was originally added as a
         * way to make the floating label emulate the behavior of a standard input placeholder. However
         * the form field now supports both floating labels and placeholders. Therefore in the non-legacy
         * appearances the `never` option has been disabled in favor of just using the placeholder.
         * @return {?}
         */

      }, {
        key: "floatLabel",
        get: function get() {
          return this.appearance !== 'legacy' && this._floatLabel === 'never' ? 'auto' : this._floatLabel;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          if (value !== this._floatLabel) {
            this._floatLabel = value || this._getDefaultFloatLabelState();

            this._changeDetectorRef.markForCheck();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "_control",
        get: function get() {
          // TODO(crisbeto): we need this workaround in order to support both Ivy and ViewEngine.
          //  We should clean this up once Ivy is the default renderer.
          return this._explicitFormFieldControl || this._controlNonStatic || this._controlStatic;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._explicitFormFieldControl = value;
        }
        /**
         * @return {?}
         */

      }, {
        key: "_labelChild",
        get: function get() {
          return this._labelChildNonStatic || this._labelChildStatic;
        }
      }]);

      return MatFormField;
    }(_MatFormFieldMixinBase);

    MatFormField.ɵfac = function MatFormField_Factory(t) {
      return new (t || MatFormField)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_LABEL_GLOBAL_OPTIONS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_FORM_FIELD_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"], 8));
    };

    MatFormField.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MatFormField,
      selectors: [["mat-form-field"]],
      contentQueries: function MatFormField_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatFormFieldControl, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticContentQuery"](dirIndex, MatFormFieldControl, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatLabel, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticContentQuery"](dirIndex, MatLabel, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatPlaceholder, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatError, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatHint, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatPrefix, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatSuffix, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._controlNonStatic = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._controlStatic = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._labelChildNonStatic = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._labelChildStatic = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._placeholderChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._errorChildren = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._hintChildren = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._prefixChildren = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._suffixChildren = _t);
        }
      },
      viewQuery: function MatFormField_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.underlineRef = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._connectionContainerRef = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._inputContainerRef = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._label = _t.first);
        }
      },
      hostAttrs: [1, "mat-form-field"],
      hostVars: 44,
      hostBindings: function MatFormField_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-form-field-appearance-standard", ctx.appearance == "standard")("mat-form-field-appearance-fill", ctx.appearance == "fill")("mat-form-field-appearance-outline", ctx.appearance == "outline")("mat-form-field-appearance-legacy", ctx.appearance == "legacy")("mat-form-field-invalid", ctx._control.errorState)("mat-form-field-can-float", ctx._canLabelFloat)("mat-form-field-should-float", ctx._shouldLabelFloat())("mat-form-field-has-label", ctx._hasFloatingLabel())("mat-form-field-hide-placeholder", ctx._hideControlPlaceholder())("mat-form-field-disabled", ctx._control.disabled)("mat-form-field-autofilled", ctx._control.autofilled)("mat-focused", ctx._control.focused)("mat-accent", ctx.color == "accent")("mat-warn", ctx.color == "warn")("ng-untouched", ctx._shouldForward("untouched"))("ng-touched", ctx._shouldForward("touched"))("ng-pristine", ctx._shouldForward("pristine"))("ng-dirty", ctx._shouldForward("dirty"))("ng-valid", ctx._shouldForward("valid"))("ng-invalid", ctx._shouldForward("invalid"))("ng-pending", ctx._shouldForward("pending"))("_mat-animation-noopable", !ctx._animationsEnabled);
        }
      },
      inputs: {
        color: "color",
        floatLabel: "floatLabel",
        appearance: "appearance",
        hideRequiredMarker: "hideRequiredMarker",
        hintLabel: "hintLabel"
      },
      exportAs: ["matFormField"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c5,
      decls: 15,
      vars: 8,
      consts: [[1, "mat-form-field-wrapper"], [1, "mat-form-field-flex", 3, "click"], ["connectionContainer", ""], [4, "ngIf"], ["class", "mat-form-field-prefix", 4, "ngIf"], [1, "mat-form-field-infix"], ["inputContainer", ""], [1, "mat-form-field-label-wrapper"], ["class", "mat-form-field-label", 3, "cdkObserveContentDisabled", "id", "mat-empty", "mat-form-field-empty", "mat-accent", "mat-warn", "ngSwitch", "cdkObserveContent", 4, "ngIf"], ["class", "mat-form-field-suffix", 4, "ngIf"], ["class", "mat-form-field-underline", 4, "ngIf"], [1, "mat-form-field-subscript-wrapper", 3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "mat-form-field-hint-wrapper", 4, "ngSwitchCase"], [1, "mat-form-field-outline"], [1, "mat-form-field-outline-start"], [1, "mat-form-field-outline-gap"], [1, "mat-form-field-outline-end"], [1, "mat-form-field-outline", "mat-form-field-outline-thick"], [1, "mat-form-field-prefix"], [1, "mat-form-field-label", 3, "cdkObserveContentDisabled", "id", "ngSwitch", "cdkObserveContent"], ["label", ""], ["class", "mat-placeholder-required mat-form-field-required-marker", "aria-hidden", "true", 4, "ngIf"], ["aria-hidden", "true", 1, "mat-placeholder-required", "mat-form-field-required-marker"], [1, "mat-form-field-suffix"], [1, "mat-form-field-underline"], ["underline", ""], [1, "mat-form-field-ripple"], [1, "mat-form-field-hint-wrapper"], ["class", "mat-hint", 3, "id", 4, "ngIf"], [1, "mat-form-field-hint-spacer"], [1, "mat-hint", 3, "id"]],
      template: function MatFormField_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatFormField_Template_div_click_1_listener($event) {
            return ctx._control.onContainerClick && ctx._control.onContainerClick($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MatFormField_ng_container_3_Template, 9, 0, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MatFormField_div_4_Template, 2, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, MatFormField_label_9_Template, 5, 16, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, MatFormField_div_10_Template, 2, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, MatFormField_div_11_Template, 3, 4, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, MatFormField_div_13_Template, 2, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, MatFormField_div_14_Template, 5, 2, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.appearance == "outline");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._prefixChildren.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._hasFloatingLabel());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._suffixChildren.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.appearance != "outline");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx._getDisplayedMessages());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "hint");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgSwitchCase"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__["CdkObserveContent"]],
      styles: [".mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}.cdk-high-contrast-active .mat-form-field-infix{border-image:linear-gradient(transparent, transparent)}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),width 400ms cubic-bezier(0.25, 0.8, 0.25, 1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.mat-form-field-empty.mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scale3d(1, 1.0001, 1)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(0.5);opacity:0;transition:background-color 300ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:scaleX(1);transition:transform 300ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 300ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-subscript-wrapper .mat-icon,.mat-form-field-label-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none}\n", ".mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:\"\";display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em}\n", ".mat-input-element{font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element::-ms-clear,.mat-input-element::-ms-reveal{display:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=month]::after,.mat-input-element[type=week]::after,.mat-input-element[type=time]::after{content:\" \";white-space:pre;width:1px}.mat-input-element::-webkit-inner-spin-button,.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-moz-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-webkit-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element:-ms-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-ms-expand{display:none}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}select.mat-input-element::-ms-value{color:inherit;background:none}.mat-focused .cdk-high-contrast-active select.mat-input-element::-ms-value{color:inherit}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:\"\";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px}\n", ".mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px);-ms-transform:none}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px}\n", ".mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-0.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-end{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap{border-width:2px}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap{transition:none}\n", ".mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:2px}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}\n"],
      encapsulation: 2,
      data: {
        animation: [matFormFieldAnimations.transitionMessages]
      },
      changeDetection: 0
    });
    /** @nocollapse */

    MatFormField.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_LABEL_GLOBAL_OPTIONS"]]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [MAT_FORM_FIELD_DEFAULT_OPTIONS]
        }]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    MatFormField.propDecorators = {
      appearance: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      hideRequiredMarker: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      hintLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      floatLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      underlineRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: ['underline']
      }],
      _connectionContainerRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: ['connectionContainer', {
          "static": true
        }]
      }],
      _inputContainerRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: ['inputContainer']
      }],
      _label: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: ['label']
      }],
      _controlNonStatic: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
        args: [MatFormFieldControl]
      }],
      _controlStatic: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
        args: [MatFormFieldControl, {
          "static": true
        }]
      }],
      _labelChildNonStatic: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
        args: [MatLabel]
      }],
      _labelChildStatic: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
        args: [MatLabel, {
          "static": true
        }]
      }],
      _placeholderChild: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
        args: [MatPlaceholder]
      }],
      _errorChildren: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
        args: [MatError, {
          descendants: true
        }]
      }],
      _hintChildren: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
        args: [MatHint, {
          descendants: true
        }]
      }],
      _prefixChildren: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
        args: [MatPrefix, {
          descendants: true
        }]
      }],
      _suffixChildren: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
        args: [MatSuffix, {
          descendants: true
        }]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatFormField, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mat-form-field',
          exportAs: 'matFormField',
          template: "<div class=\"mat-form-field-wrapper\">\n  <div class=\"mat-form-field-flex\" #connectionContainer\n       (click)=\"_control.onContainerClick && _control.onContainerClick($event)\">\n\n    <!-- Outline used for outline appearance. -->\n    <ng-container *ngIf=\"appearance == 'outline'\">\n      <div class=\"mat-form-field-outline\">\n        <div class=\"mat-form-field-outline-start\"></div>\n        <div class=\"mat-form-field-outline-gap\"></div>\n        <div class=\"mat-form-field-outline-end\"></div>\n      </div>\n      <div class=\"mat-form-field-outline mat-form-field-outline-thick\">\n        <div class=\"mat-form-field-outline-start\"></div>\n        <div class=\"mat-form-field-outline-gap\"></div>\n        <div class=\"mat-form-field-outline-end\"></div>\n      </div>\n    </ng-container>\n\n    <div class=\"mat-form-field-prefix\" *ngIf=\"_prefixChildren.length\">\n      <ng-content select=\"[matPrefix]\"></ng-content>\n    </div>\n\n    <div class=\"mat-form-field-infix\" #inputContainer>\n      <ng-content></ng-content>\n\n      <span class=\"mat-form-field-label-wrapper\">\n        <!-- We add aria-owns as a workaround for an issue in JAWS & NVDA where the label isn't\n             read if it comes before the control in the DOM. -->\n        <label class=\"mat-form-field-label\"\n               (cdkObserveContent)=\"updateOutlineGap()\"\n               [cdkObserveContentDisabled]=\"appearance != 'outline'\"\n               [id]=\"_labelId\"\n               [attr.for]=\"_control.id\"\n               [attr.aria-owns]=\"_control.id\"\n               [class.mat-empty]=\"_control.empty && !_shouldAlwaysFloat\"\n               [class.mat-form-field-empty]=\"_control.empty && !_shouldAlwaysFloat\"\n               [class.mat-accent]=\"color == 'accent'\"\n               [class.mat-warn]=\"color == 'warn'\"\n               #label\n               *ngIf=\"_hasFloatingLabel()\"\n               [ngSwitch]=\"_hasLabel()\">\n\n          <!-- @breaking-change 8.0.0 remove in favor of mat-label element an placeholder attr. -->\n          <ng-container *ngSwitchCase=\"false\">\n            <ng-content select=\"mat-placeholder\"></ng-content>\n            <span>{{_control.placeholder}}</span>\n          </ng-container>\n\n          <ng-content select=\"mat-label\" *ngSwitchCase=\"true\"></ng-content>\n\n          <!-- @breaking-change 8.0.0 remove `mat-placeholder-required` class -->\n          <span\n            class=\"mat-placeholder-required mat-form-field-required-marker\"\n            aria-hidden=\"true\"\n            *ngIf=\"!hideRequiredMarker && _control.required && !_control.disabled\">&#32;*</span>\n        </label>\n      </span>\n    </div>\n\n    <div class=\"mat-form-field-suffix\" *ngIf=\"_suffixChildren.length\">\n      <ng-content select=\"[matSuffix]\"></ng-content>\n    </div>\n  </div>\n\n  <!-- Underline used for legacy, standard, and box appearances. -->\n  <div class=\"mat-form-field-underline\" #underline\n       *ngIf=\"appearance != 'outline'\">\n    <span class=\"mat-form-field-ripple\"\n          [class.mat-accent]=\"color == 'accent'\"\n          [class.mat-warn]=\"color == 'warn'\"></span>\n  </div>\n\n  <div class=\"mat-form-field-subscript-wrapper\"\n       [ngSwitch]=\"_getDisplayedMessages()\">\n    <div *ngSwitchCase=\"'error'\" [@transitionMessages]=\"_subscriptAnimationState\">\n      <ng-content select=\"mat-error\"></ng-content>\n    </div>\n\n    <div class=\"mat-form-field-hint-wrapper\" *ngSwitchCase=\"'hint'\"\n      [@transitionMessages]=\"_subscriptAnimationState\">\n      <!-- TODO(mmalerba): use an actual <mat-hint> once all selectors are switched to mat-* -->\n      <div *ngIf=\"hintLabel\" [id]=\"_hintLabelId\" class=\"mat-hint\">{{hintLabel}}</div>\n      <ng-content select=\"mat-hint:not([align='end'])\"></ng-content>\n      <div class=\"mat-form-field-hint-spacer\"></div>\n      <ng-content select=\"mat-hint[align='end']\"></ng-content>\n    </div>\n  </div>\n</div>\n",
          animations: [matFormFieldAnimations.transitionMessages],
          host: {
            'class': 'mat-form-field',
            '[class.mat-form-field-appearance-standard]': 'appearance == "standard"',
            '[class.mat-form-field-appearance-fill]': 'appearance == "fill"',
            '[class.mat-form-field-appearance-outline]': 'appearance == "outline"',
            '[class.mat-form-field-appearance-legacy]': 'appearance == "legacy"',
            '[class.mat-form-field-invalid]': '_control.errorState',
            '[class.mat-form-field-can-float]': '_canLabelFloat',
            '[class.mat-form-field-should-float]': '_shouldLabelFloat()',
            '[class.mat-form-field-has-label]': '_hasFloatingLabel()',
            '[class.mat-form-field-hide-placeholder]': '_hideControlPlaceholder()',
            '[class.mat-form-field-disabled]': '_control.disabled',
            '[class.mat-form-field-autofilled]': '_control.autofilled',
            '[class.mat-focused]': '_control.focused',
            '[class.mat-accent]': 'color == "accent"',
            '[class.mat-warn]': 'color == "warn"',
            '[class.ng-untouched]': '_shouldForward("untouched")',
            '[class.ng-touched]': '_shouldForward("touched")',
            '[class.ng-pristine]': '_shouldForward("pristine")',
            '[class.ng-dirty]': '_shouldForward("dirty")',
            '[class.ng-valid]': '_shouldForward("valid")',
            '[class.ng-invalid]': '_shouldForward("invalid")',
            '[class.ng-pending]': '_shouldForward("pending")',
            '[class._mat-animation-noopable]': '!_animationsEnabled'
          },
          inputs: ['color'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
          styles: [".mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}.cdk-high-contrast-active .mat-form-field-infix{border-image:linear-gradient(transparent, transparent)}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),width 400ms cubic-bezier(0.25, 0.8, 0.25, 1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.mat-form-field-empty.mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scale3d(1, 1.0001, 1)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(0.5);opacity:0;transition:background-color 300ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:scaleX(1);transition:transform 300ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 300ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-subscript-wrapper .mat-icon,.mat-form-field-label-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none}\n", ".mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:\"\";display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em}\n", ".mat-input-element{font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element::-ms-clear,.mat-input-element::-ms-reveal{display:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=month]::after,.mat-input-element[type=week]::after,.mat-input-element[type=time]::after{content:\" \";white-space:pre;width:1px}.mat-input-element::-webkit-inner-spin-button,.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-moz-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-webkit-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element:-ms-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-ms-expand{display:none}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}select.mat-input-element::-ms-value{color:inherit;background:none}.mat-focused .cdk-high-contrast-active select.mat-input-element::-ms-value{color:inherit}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:\"\";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px}\n", ".mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px);-ms-transform:none}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px}\n", ".mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-0.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-end{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap{border-width:2px}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap{transition:none}\n", ".mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:2px}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_LABEL_GLOBAL_OPTIONS"]]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [MAT_FORM_FIELD_DEFAULT_OPTIONS]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      }, {
        floatLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        appearance: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        hideRequiredMarker: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        hintLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        underlineRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['underline']
        }],
        _connectionContainerRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['connectionContainer', {
            "static": true
          }]
        }],
        _inputContainerRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['inputContainer']
        }],
        _label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['label']
        }],
        _controlNonStatic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [MatFormFieldControl]
        }],
        _controlStatic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [MatFormFieldControl, {
            "static": true
          }]
        }],
        _labelChildNonStatic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [MatLabel]
        }],
        _labelChildStatic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [MatLabel, {
            "static": true
          }]
        }],
        _placeholderChild: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [MatPlaceholder]
        }],
        _errorChildren: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
          args: [MatError, {
            descendants: true
          }]
        }],
        _hintChildren: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
          args: [MatHint, {
            descendants: true
          }]
        }],
        _prefixChildren: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
          args: [MatPrefix, {
            descendants: true
          }]
        }],
        _suffixChildren: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
          args: [MatSuffix, {
            descendants: true
          }]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/form-field/form-field-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatFormFieldModule = function MatFormFieldModule() {
      _classCallCheck(this, MatFormFieldModule);
    };

    MatFormFieldModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: MatFormFieldModule
    });
    MatFormFieldModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function MatFormFieldModule_Factory(t) {
        return new (t || MatFormFieldModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__["ObserversModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatFormFieldModule, {
        declarations: function declarations() {
          return [MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__["ObserversModule"]];
        },
        exports: function exports() {
          return [MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatFormFieldModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__["ObserversModule"]],
          exports: [MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/form-field/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=form-field.js.map

    /***/

  }
}]);
//# sourceMappingURL=default~pages-angular-material-components-mat-input-mat-input-module~pages-angular-material-componen~4d3eede4-es5.js.map