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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-angular-material-components-expansion-expansion-module~pages-angular-material-componen~5af9c64a"], {
  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js ***!
    \*****************************************************************/

  /*! exports provided: A11yModule, ActiveDescendantKeyManager, AriaDescriber, CDK_DESCRIBEDBY_HOST_ATTRIBUTE, CDK_DESCRIBEDBY_ID_PREFIX, CdkAriaLive, CdkMonitorFocus, CdkTrapFocus, ConfigurableFocusTrap, ConfigurableFocusTrapFactory, EventListenerFocusTrapInertStrategy, FOCUS_TRAP_INERT_STRATEGY, FocusKeyManager, FocusMonitor, FocusTrap, FocusTrapFactory, HighContrastModeDetector, InteractivityChecker, LIVE_ANNOUNCER_DEFAULT_OPTIONS, LIVE_ANNOUNCER_ELEMENT_TOKEN, LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY, ListKeyManager, LiveAnnouncer, MESSAGES_CONTAINER_ID, TOUCH_BUFFER_MS, isFakeMousedownFromScreenReader, ɵangular_material_src_cdk_a11y_a11y_a, ɵangular_material_src_cdk_a11y_a11y_b */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015A11yJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "A11yModule", function () {
      return A11yModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActiveDescendantKeyManager", function () {
      return ActiveDescendantKeyManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AriaDescriber", function () {
      return AriaDescriber;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CDK_DESCRIBEDBY_HOST_ATTRIBUTE", function () {
      return CDK_DESCRIBEDBY_HOST_ATTRIBUTE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CDK_DESCRIBEDBY_ID_PREFIX", function () {
      return CDK_DESCRIBEDBY_ID_PREFIX;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkAriaLive", function () {
      return CdkAriaLive;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkMonitorFocus", function () {
      return CdkMonitorFocus;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTrapFocus", function () {
      return CdkTrapFocus;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigurableFocusTrap", function () {
      return ConfigurableFocusTrap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigurableFocusTrapFactory", function () {
      return ConfigurableFocusTrapFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventListenerFocusTrapInertStrategy", function () {
      return EventListenerFocusTrapInertStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FOCUS_TRAP_INERT_STRATEGY", function () {
      return FOCUS_TRAP_INERT_STRATEGY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FocusKeyManager", function () {
      return FocusKeyManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FocusMonitor", function () {
      return FocusMonitor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FocusTrap", function () {
      return FocusTrap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FocusTrapFactory", function () {
      return FocusTrapFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HighContrastModeDetector", function () {
      return HighContrastModeDetector;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InteractivityChecker", function () {
      return InteractivityChecker;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_DEFAULT_OPTIONS", function () {
      return LIVE_ANNOUNCER_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_ELEMENT_TOKEN", function () {
      return LIVE_ANNOUNCER_ELEMENT_TOKEN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY", function () {
      return LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListKeyManager", function () {
      return ListKeyManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LiveAnnouncer", function () {
      return LiveAnnouncer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MESSAGES_CONTAINER_ID", function () {
      return MESSAGES_CONTAINER_ID;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TOUCH_BUFFER_MS", function () {
      return TOUCH_BUFFER_MS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isFakeMousedownFromScreenReader", function () {
      return isFakeMousedownFromScreenReader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_a11y_a11y_a", function () {
      return FocusTrapManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_a11y_a11y_b", function () {
      return ConfigurableFocusTrapConfig;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/observers.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/aria-describer/aria-reference.ts
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
     * IDs are deliminated by an empty space, as per the spec.
     * @type {?}
     */


    var ID_DELIMINATOR = ' ';
    /**
     * Adds the given ID to the specified ARIA attribute on an element.
     * Used for attributes such as aria-labelledby, aria-owns, etc.
     * @param {?} el
     * @param {?} attr
     * @param {?} id
     * @return {?}
     */

    function addAriaReferencedId(el, attr, id) {
      /** @type {?} */
      var ids = getAriaReferenceIds(el, attr);

      if (ids.some(
      /**
      * @param {?} existingId
      * @return {?}
      */
      function (existingId) {
        return existingId.trim() == id.trim();
      })) {
        return;
      }

      ids.push(id.trim());
      el.setAttribute(attr, ids.join(ID_DELIMINATOR));
    }
    /**
     * Removes the given ID from the specified ARIA attribute on an element.
     * Used for attributes such as aria-labelledby, aria-owns, etc.
     * @param {?} el
     * @param {?} attr
     * @param {?} id
     * @return {?}
     */


    function removeAriaReferencedId(el, attr, id) {
      /** @type {?} */
      var ids = getAriaReferenceIds(el, attr);
      /** @type {?} */

      var filteredIds = ids.filter(
      /**
      * @param {?} val
      * @return {?}
      */
      function (val) {
        return val != id.trim();
      });

      if (filteredIds.length) {
        el.setAttribute(attr, filteredIds.join(ID_DELIMINATOR));
      } else {
        el.removeAttribute(attr);
      }
    }
    /**
     * Gets the list of IDs referenced by the given ARIA attribute on an element.
     * Used for attributes such as aria-labelledby, aria-owns, etc.
     * @param {?} el
     * @param {?} attr
     * @return {?}
     */


    function getAriaReferenceIds(el, attr) {
      // Get string array of all individual ids (whitespace deliminated) in the attribute value
      return (el.getAttribute(attr) || '').match(/\S+/g) || [];
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/aria-describer/aria-describer.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Interface used to register message elements and keep a count of how many registrations have
     * the same message and the reference to the message element used for the `aria-describedby`.
     * @record
     */


    function RegisteredMessage() {}

    if (false) {}
    /**
     * ID used for the body container where all messages are appended.
     * @type {?}
     */


    var MESSAGES_CONTAINER_ID = 'cdk-describedby-message-container';
    /**
     * ID prefix used for each created message element.
     * @type {?}
     */

    var CDK_DESCRIBEDBY_ID_PREFIX = 'cdk-describedby-message';
    /**
     * Attribute given to each host element that is described by a message element.
     * @type {?}
     */

    var CDK_DESCRIBEDBY_HOST_ATTRIBUTE = 'cdk-describedby-host';
    /**
     * Global incremental identifier for each registered message element.
     * @type {?}
     */

    var nextId = 0;
    /**
     * Global map of all registered message elements that have been placed into the document.
     * @type {?}
     */

    var messageRegistry = new Map();
    /**
     * Container for all registered messages.
     * @type {?}
     */

    var messagesContainer = null;
    /**
     * Utility that creates visually hidden elements with a message content. Useful for elements that
     * want to use aria-describedby to further describe themselves without adding additional visual
     * content.
     */

    var AriaDescriber = /*#__PURE__*/function () {
      /**
       * @param {?} _document
       */
      function AriaDescriber(_document) {
        _classCallCheck(this, AriaDescriber);

        this._document = _document;
      }
      /**
       * Adds to the host element an aria-describedby reference to a hidden element that contains
       * the message. If the same message has already been registered, then it will reuse the created
       * message element.
       * @param {?} hostElement
       * @param {?} message
       * @return {?}
       */


      _createClass(AriaDescriber, [{
        key: "describe",
        value: function describe(hostElement, message) {
          if (!this._canBeDescribed(hostElement, message)) {
            return;
          }

          if (typeof message !== 'string') {
            // We need to ensure that the element has an ID.
            this._setMessageId(message);

            messageRegistry.set(message, {
              messageElement: message,
              referenceCount: 0
            });
          } else if (!messageRegistry.has(message)) {
            this._createMessageElement(message);
          }

          if (!this._isElementDescribedByMessage(hostElement, message)) {
            this._addMessageReference(hostElement, message);
          }
        }
        /**
         * Removes the host element's aria-describedby reference to the message element.
         * @param {?} hostElement
         * @param {?} message
         * @return {?}
         */

      }, {
        key: "removeDescription",
        value: function removeDescription(hostElement, message) {
          if (!this._isElementNode(hostElement)) {
            return;
          }

          if (this._isElementDescribedByMessage(hostElement, message)) {
            this._removeMessageReference(hostElement, message);
          } // If the message is a string, it means that it's one that we created for the
          // consumer so we can remove it safely, otherwise we should leave it in place.


          if (typeof message === 'string') {
            /** @type {?} */
            var registeredMessage = messageRegistry.get(message);

            if (registeredMessage && registeredMessage.referenceCount === 0) {
              this._deleteMessageElement(message);
            }
          }

          if (messagesContainer && messagesContainer.childNodes.length === 0) {
            this._deleteMessagesContainer();
          }
        }
        /**
         * Unregisters all created message elements and removes the message container.
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          /** @type {?} */
          var describedElements = this._document.querySelectorAll("[".concat(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, "]"));

          for (var i = 0; i < describedElements.length; i++) {
            this._removeCdkDescribedByReferenceIds(describedElements[i]);

            describedElements[i].removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
          }

          if (messagesContainer) {
            this._deleteMessagesContainer();
          }

          messageRegistry.clear();
        }
        /**
         * Creates a new element in the visually hidden message container element with the message
         * as its content and adds it to the message registry.
         * @private
         * @param {?} message
         * @return {?}
         */

      }, {
        key: "_createMessageElement",
        value: function _createMessageElement(message) {
          /** @type {?} */
          var messageElement = this._document.createElement('div');

          this._setMessageId(messageElement);

          messageElement.textContent = message;

          this._createMessagesContainer();

          /** @type {?} */
          messagesContainer.appendChild(messageElement);
          messageRegistry.set(message, {
            messageElement: messageElement,
            referenceCount: 0
          });
        }
        /**
         * Assigns a unique ID to an element, if it doesn't have one already.
         * @private
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "_setMessageId",
        value: function _setMessageId(element) {
          if (!element.id) {
            element.id = "".concat(CDK_DESCRIBEDBY_ID_PREFIX, "-").concat(nextId++);
          }
        }
        /**
         * Deletes the message element from the global messages container.
         * @private
         * @param {?} message
         * @return {?}
         */

      }, {
        key: "_deleteMessageElement",
        value: function _deleteMessageElement(message) {
          /** @type {?} */
          var registeredMessage = messageRegistry.get(message);
          /** @type {?} */

          var messageElement = registeredMessage && registeredMessage.messageElement;

          if (messagesContainer && messageElement) {
            messagesContainer.removeChild(messageElement);
          }

          messageRegistry["delete"](message);
        }
        /**
         * Creates the global container for all aria-describedby messages.
         * @private
         * @return {?}
         */

      }, {
        key: "_createMessagesContainer",
        value: function _createMessagesContainer() {
          if (!messagesContainer) {
            /** @type {?} */
            var preExistingContainer = this._document.getElementById(MESSAGES_CONTAINER_ID); // When going from the server to the client, we may end up in a situation where there's
            // already a container on the page, but we don't have a reference to it. Clear the
            // old container so we don't get duplicates. Doing this, instead of emptying the previous
            // container, should be slightly faster.


            if (preExistingContainer) {
              /** @type {?} */
              preExistingContainer.parentNode.removeChild(preExistingContainer);
            }

            messagesContainer = this._document.createElement('div');
            messagesContainer.id = MESSAGES_CONTAINER_ID;
            messagesContainer.setAttribute('aria-hidden', 'true');
            messagesContainer.style.display = 'none';

            this._document.body.appendChild(messagesContainer);
          }
        }
        /**
         * Deletes the global messages container.
         * @private
         * @return {?}
         */

      }, {
        key: "_deleteMessagesContainer",
        value: function _deleteMessagesContainer() {
          if (messagesContainer && messagesContainer.parentNode) {
            messagesContainer.parentNode.removeChild(messagesContainer);
            messagesContainer = null;
          }
        }
        /**
         * Removes all cdk-describedby messages that are hosted through the element.
         * @private
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "_removeCdkDescribedByReferenceIds",
        value: function _removeCdkDescribedByReferenceIds(element) {
          // Remove all aria-describedby reference IDs that are prefixed by CDK_DESCRIBEDBY_ID_PREFIX

          /** @type {?} */
          var originalReferenceIds = getAriaReferenceIds(element, 'aria-describedby').filter(
          /**
          * @param {?} id
          * @return {?}
          */
          function (id) {
            return id.indexOf(CDK_DESCRIBEDBY_ID_PREFIX) != 0;
          });
          element.setAttribute('aria-describedby', originalReferenceIds.join(' '));
        }
        /**
         * Adds a message reference to the element using aria-describedby and increments the registered
         * message's reference count.
         * @private
         * @param {?} element
         * @param {?} message
         * @return {?}
         */

      }, {
        key: "_addMessageReference",
        value: function _addMessageReference(element, message) {
          /** @type {?} */
          var registeredMessage =
          /** @type {?} */
          messageRegistry.get(message); // Add the aria-describedby reference and set the
          // describedby_host attribute to mark the element.

          addAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
          element.setAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, '');
          registeredMessage.referenceCount++;
        }
        /**
         * Removes a message reference from the element using aria-describedby
         * and decrements the registered message's reference count.
         * @private
         * @param {?} element
         * @param {?} message
         * @return {?}
         */

      }, {
        key: "_removeMessageReference",
        value: function _removeMessageReference(element, message) {
          /** @type {?} */
          var registeredMessage =
          /** @type {?} */
          messageRegistry.get(message);
          registeredMessage.referenceCount--;
          removeAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
          element.removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
        }
        /**
         * Returns true if the element has been described by the provided message ID.
         * @private
         * @param {?} element
         * @param {?} message
         * @return {?}
         */

      }, {
        key: "_isElementDescribedByMessage",
        value: function _isElementDescribedByMessage(element, message) {
          /** @type {?} */
          var referenceIds = getAriaReferenceIds(element, 'aria-describedby');
          /** @type {?} */

          var registeredMessage = messageRegistry.get(message);
          /** @type {?} */

          var messageId = registeredMessage && registeredMessage.messageElement.id;
          return !!messageId && referenceIds.indexOf(messageId) != -1;
        }
        /**
         * Determines whether a message can be described on a particular element.
         * @private
         * @param {?} element
         * @param {?} message
         * @return {?}
         */

      }, {
        key: "_canBeDescribed",
        value: function _canBeDescribed(element, message) {
          if (!this._isElementNode(element)) {
            return false;
          }

          if (message && typeof message === 'object') {
            // We'd have to make some assumptions about the description element's text, if the consumer
            // passed in an element. Assume that if an element is passed in, the consumer has verified
            // that it can be used as a description.
            return true;
          }
          /** @type {?} */


          var trimmedMessage = message == null ? '' : "".concat(message).trim();
          /** @type {?} */

          var ariaLabel = element.getAttribute('aria-label'); // We shouldn't set descriptions if they're exactly the same as the `aria-label` of the
          // element, because screen readers will end up reading out the same text twice in a row.

          return trimmedMessage ? !ariaLabel || ariaLabel.trim() !== trimmedMessage : false;
        }
        /**
         * Checks whether a node is an Element node.
         * @private
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "_isElementNode",
        value: function _isElementNode(element) {
          return element.nodeType === this._document.ELEMENT_NODE;
        }
      }]);

      return AriaDescriber;
    }();

    AriaDescriber.ɵfac = function AriaDescriber_Factory(t) {
      return new (t || AriaDescriber)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
    };
    /** @nocollapse */


    AriaDescriber.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
        }]
      }];
    };
    /** @nocollapse */


    AriaDescriber.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function AriaDescriber_Factory() {
        return new AriaDescriber(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
      },
      token: AriaDescriber,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AriaDescriber, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/key-manager/list-key-manager.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * This interface is for items that can be passed to a ListKeyManager.
     * @record
     */


    function ListKeyManagerOption() {}

    if (false) {}
    /**
     * This class manages keyboard events for selectable lists. If you pass it a query list
     * of items, it will set the active item correctly when arrow events occur.
     * @template T
     */


    var ListKeyManager = /*#__PURE__*/function () {
      /**
       * @param {?} _items
       */
      function ListKeyManager(_items) {
        var _this = this;

        _classCallCheck(this, ListKeyManager);

        this._items = _items;
        this._activeItemIndex = -1;
        this._activeItem = null;
        this._wrap = false;
        this._letterKeyStream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._typeaheadSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        this._vertical = true;
        this._allowedModifierKeys = [];
        /**
         * Predicate function that can be used to check whether an item should be skipped
         * by the key manager. By default, disabled items are skipped.
         */

        this._skipPredicateFn =
        /**
        * @param {?} item
        * @return {?}
        */
        function (item) {
          return item.disabled;
        }; // Buffer for the letters that the user has pressed when the typeahead option is turned on.


        this._pressedLetters = [];
        /**
         * Stream that emits any time the TAB key is pressed, so components can react
         * when focus is shifted off of the list.
         */

        this.tabOut = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Stream that emits whenever the active item of the list manager changes.
         */

        this.change = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"](); // We allow for the items to be an array because, in some cases, the consumer may
        // not have access to a QueryList of the items they want to manage (e.g. when the
        // items aren't being collected via `ViewChildren` or `ContentChildren`).

        if (_items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]) {
          _items.changes.subscribe(
          /**
          * @param {?} newItems
          * @return {?}
          */
          function (newItems) {
            if (_this._activeItem) {
              /** @type {?} */
              var itemArray = newItems.toArray();
              /** @type {?} */

              var newIndex = itemArray.indexOf(_this._activeItem);

              if (newIndex > -1 && newIndex !== _this._activeItemIndex) {
                _this._activeItemIndex = newIndex;
              }
            }
          });
        }
      }
      /**
       * Sets the predicate function that determines which items should be skipped by the
       * list key manager.
       * @template THIS
       * @this {THIS}
       * @param {?} predicate Function that determines whether the given item should be skipped.
       * @return {THIS}
       */


      _createClass(ListKeyManager, [{
        key: "skipPredicate",
        value: function skipPredicate(predicate) {
          /** @type {?} */
          this._skipPredicateFn = predicate;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Configures wrapping mode, which determines whether the active item will wrap to
         * the other end of list when there are no more items in the given direction.
         * @template THIS
         * @this {THIS}
         * @param {?=} shouldWrap Whether the list should wrap when reaching the end.
         * @return {THIS}
         */

      }, {
        key: "withWrap",
        value: function withWrap() {
          var shouldWrap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

          /** @type {?} */
          this._wrap = shouldWrap;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Configures whether the key manager should be able to move the selection vertically.
         * @template THIS
         * @this {THIS}
         * @param {?=} enabled Whether vertical selection should be enabled.
         * @return {THIS}
         */

      }, {
        key: "withVerticalOrientation",
        value: function withVerticalOrientation() {
          var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

          /** @type {?} */
          this._vertical = enabled;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Configures the key manager to move the selection horizontally.
         * Passing in `null` will disable horizontal movement.
         * @template THIS
         * @this {THIS}
         * @param {?} direction Direction in which the selection can be moved.
         * @return {THIS}
         */

      }, {
        key: "withHorizontalOrientation",
        value: function withHorizontalOrientation(direction) {
          /** @type {?} */
          this._horizontal = direction;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Modifier keys which are allowed to be held down and whose default actions will be prevented
         * as the user is pressing the arrow keys. Defaults to not allowing any modifier keys.
         * @template THIS
         * @this {THIS}
         * @param {?} keys
         * @return {THIS}
         */

      }, {
        key: "withAllowedModifierKeys",
        value: function withAllowedModifierKeys(keys) {
          /** @type {?} */
          this._allowedModifierKeys = keys;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Turns on typeahead mode which allows users to set the active item by typing.
         * @template THIS
         * @this {THIS}
         * @param {?=} debounceInterval Time to wait after the last keystroke before setting the active item.
         * @return {THIS}
         */

      }, {
        key: "withTypeAhead",
        value: function withTypeAhead() {
          var _this2 = this;

          var debounceInterval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;

          if (
          /** @type {?} */
          this._items.length &&
          /** @type {?} */
          this._items.some(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return typeof item.getLabel !== 'function';
          })) {
            throw Error('ListKeyManager items in typeahead mode must implement the `getLabel` method.');
          }

          /** @type {?} */
          this._typeaheadSubscription.unsubscribe(); // Debounce the presses of non-navigational keys, collect the ones that correspond to letters
          // and convert those letters back into a string. Afterwards find the first item that starts
          // with that string and select it.


          /** @type {?} */
          this._typeaheadSubscription =
          /** @type {?} */
          this._letterKeyStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(
          /**
          * @param {?} letter
          * @return {?}
          */
          function (letter) {
            return (
              /** @type {?} */
              _this2._pressedLetters.push(letter)
            );
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(debounceInterval), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
          /**
          * @return {?}
          */
          function () {
            return (
              /** @type {?} */
              _this2._pressedLetters.length > 0
            );
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
          /**
          * @return {?}
          */
          function () {
            return (
              /** @type {?} */
              _this2._pressedLetters.join('')
            );
          })).subscribe(
          /**
          * @param {?} inputString
          * @return {?}
          */
          function (inputString) {
            /** @type {?} */
            var items =
            /** @type {?} */
            _this2._getItemsArray(); // Start at 1 because we want to start searching at the item immediately
            // following the current active item.


            for (var i = 1; i < items.length + 1; i++) {
              /** @type {?} */
              var index = (
              /** @type {?} */
              _this2._activeItemIndex + i) % items.length;
              /** @type {?} */

              var item = items[index];

              if (!
              /** @type {?} */
              _this2._skipPredicateFn(item) &&
              /** @type {?} */
              item.getLabel().toUpperCase().trim().indexOf(inputString) === 0) {
                /** @type {?} */
                _this2.setActiveItem(index);

                break;
              }
            }

            /** @type {?} */
            _this2._pressedLetters = [];
          });
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "setActiveItem",
        value: function setActiveItem(item) {
          /** @type {?} */
          var previousIndex = this._activeItemIndex;
          this.updateActiveItem(item);

          if (this._activeItemIndex !== previousIndex) {
            this.change.next(this._activeItemIndex);
          }
        }
        /**
         * Sets the active item depending on the key event passed in.
         * @param {?} event Keyboard event to be used for determining which element should be active.
         * @return {?}
         */

      }, {
        key: "onKeydown",
        value: function onKeydown(event) {
          var _this3 = this;

          /** @type {?} */
          var keyCode = event.keyCode;
          /** @type {?} */

          var modifiers = ['altKey', 'ctrlKey', 'metaKey', 'shiftKey'];
          /** @type {?} */

          var isModifierAllowed = modifiers.every(
          /**
          * @param {?} modifier
          * @return {?}
          */
          function (modifier) {
            return !event[modifier] || _this3._allowedModifierKeys.indexOf(modifier) > -1;
          });

          switch (keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["TAB"]:
              this.tabOut.next();
              return;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["DOWN_ARROW"]:
              if (this._vertical && isModifierAllowed) {
                this.setNextItemActive();
                break;
              } else {
                return;
              }

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["UP_ARROW"]:
              if (this._vertical && isModifierAllowed) {
                this.setPreviousItemActive();
                break;
              } else {
                return;
              }

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["RIGHT_ARROW"]:
              if (this._horizontal && isModifierAllowed) {
                this._horizontal === 'rtl' ? this.setPreviousItemActive() : this.setNextItemActive();
                break;
              } else {
                return;
              }

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["LEFT_ARROW"]:
              if (this._horizontal && isModifierAllowed) {
                this._horizontal === 'rtl' ? this.setNextItemActive() : this.setPreviousItemActive();
                break;
              } else {
                return;
              }

            default:
              if (isModifierAllowed || Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["hasModifierKey"])(event, 'shiftKey')) {
                // Attempt to use the `event.key` which also maps it to the user's keyboard language,
                // otherwise fall back to resolving alphanumeric characters via the keyCode.
                if (event.key && event.key.length === 1) {
                  this._letterKeyStream.next(event.key.toLocaleUpperCase());
                } else if (keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["A"] && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["Z"] || keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ZERO"] && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["NINE"]) {
                  this._letterKeyStream.next(String.fromCharCode(keyCode));
                }
              } // Note that we return here, in order to avoid preventing
              // the default action of non-navigational keys.


              return;
          }

          this._pressedLetters = [];
          event.preventDefault();
        }
        /**
         * Index of the currently active item.
         * @return {?}
         */

      }, {
        key: "isTyping",

        /**
         * Gets whether the user is currently typing into the manager using the typeahead feature.
         * @return {?}
         */
        value: function isTyping() {
          return this._pressedLetters.length > 0;
        }
        /**
         * Sets the active item to the first enabled item in the list.
         * @return {?}
         */

      }, {
        key: "setFirstItemActive",
        value: function setFirstItemActive() {
          this._setActiveItemByIndex(0, 1);
        }
        /**
         * Sets the active item to the last enabled item in the list.
         * @return {?}
         */

      }, {
        key: "setLastItemActive",
        value: function setLastItemActive() {
          this._setActiveItemByIndex(this._items.length - 1, -1);
        }
        /**
         * Sets the active item to the next enabled item in the list.
         * @return {?}
         */

      }, {
        key: "setNextItemActive",
        value: function setNextItemActive() {
          this._activeItemIndex < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1);
        }
        /**
         * Sets the active item to a previous enabled item in the list.
         * @return {?}
         */

      }, {
        key: "setPreviousItemActive",
        value: function setPreviousItemActive() {
          this._activeItemIndex < 0 && this._wrap ? this.setLastItemActive() : this._setActiveItemByDelta(-1);
        }
        /**
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "updateActiveItem",
        value: function updateActiveItem(item) {
          /** @type {?} */
          var itemArray = this._getItemsArray();
          /** @type {?} */


          var index = typeof item === 'number' ? item : itemArray.indexOf(item);
          /** @type {?} */

          var activeItem = itemArray[index]; // Explicitly check for `null` and `undefined` because other falsy values are valid.

          this._activeItem = activeItem == null ? null : activeItem;
          this._activeItemIndex = index;
        }
        /**
         * This method sets the active item, given a list of items and the delta between the
         * currently active item and the new active item. It will calculate differently
         * depending on whether wrap mode is turned on.
         * @private
         * @param {?} delta
         * @return {?}
         */

      }, {
        key: "_setActiveItemByDelta",
        value: function _setActiveItemByDelta(delta) {
          this._wrap ? this._setActiveInWrapMode(delta) : this._setActiveInDefaultMode(delta);
        }
        /**
         * Sets the active item properly given "wrap" mode. In other words, it will continue to move
         * down the list until it finds an item that is not disabled, and it will wrap if it
         * encounters either end of the list.
         * @private
         * @param {?} delta
         * @return {?}
         */

      }, {
        key: "_setActiveInWrapMode",
        value: function _setActiveInWrapMode(delta) {
          /** @type {?} */
          var items = this._getItemsArray();

          for (var i = 1; i <= items.length; i++) {
            /** @type {?} */
            var index = (this._activeItemIndex + delta * i + items.length) % items.length;
            /** @type {?} */

            var item = items[index];

            if (!this._skipPredicateFn(item)) {
              this.setActiveItem(index);
              return;
            }
          }
        }
        /**
         * Sets the active item properly given the default mode. In other words, it will
         * continue to move down the list until it finds an item that is not disabled. If
         * it encounters either end of the list, it will stop and not wrap.
         * @private
         * @param {?} delta
         * @return {?}
         */

      }, {
        key: "_setActiveInDefaultMode",
        value: function _setActiveInDefaultMode(delta) {
          this._setActiveItemByIndex(this._activeItemIndex + delta, delta);
        }
        /**
         * Sets the active item to the first enabled item starting at the index specified. If the
         * item is disabled, it will move in the fallbackDelta direction until it either
         * finds an enabled item or encounters the end of the list.
         * @private
         * @param {?} index
         * @param {?} fallbackDelta
         * @return {?}
         */

      }, {
        key: "_setActiveItemByIndex",
        value: function _setActiveItemByIndex(index, fallbackDelta) {
          /** @type {?} */
          var items = this._getItemsArray();

          if (!items[index]) {
            return;
          }

          while (this._skipPredicateFn(items[index])) {
            index += fallbackDelta;

            if (!items[index]) {
              return;
            }
          }

          this.setActiveItem(index);
        }
        /**
         * Returns the items as an array.
         * @private
         * @return {?}
         */

      }, {
        key: "_getItemsArray",
        value: function _getItemsArray() {
          return this._items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"] ? this._items.toArray() : this._items;
        }
      }, {
        key: "activeItemIndex",
        get: function get() {
          return this._activeItemIndex;
        }
        /**
         * The active item.
         * @return {?}
         */

      }, {
        key: "activeItem",
        get: function get() {
          return this._activeItem;
        }
      }]);

      return ListKeyManager;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/key-manager/activedescendant-key-manager.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * This is the interface for highlightable items (used by the ActiveDescendantKeyManager).
     * Each item must know how to style itself as active or inactive and whether or not it is
     * currently disabled.
     * @record
     */


    function Highlightable() {}

    if (false) {}
    /**
     * @template T
     */


    var ActiveDescendantKeyManager = /*#__PURE__*/function (_ListKeyManager) {
      _inherits(ActiveDescendantKeyManager, _ListKeyManager);

      var _super = _createSuper(ActiveDescendantKeyManager);

      function ActiveDescendantKeyManager() {
        _classCallCheck(this, ActiveDescendantKeyManager);

        return _super.apply(this, arguments);
      }

      _createClass(ActiveDescendantKeyManager, [{
        key: "setActiveItem",

        /**
         * @param {?} index
         * @return {?}
         */
        value: function setActiveItem(index) {
          if (this.activeItem) {
            this.activeItem.setInactiveStyles();
          }

          _get(_getPrototypeOf(ActiveDescendantKeyManager.prototype), "setActiveItem", this).call(this, index);

          if (this.activeItem) {
            this.activeItem.setActiveStyles();
          }
        }
      }]);

      return ActiveDescendantKeyManager;
    }(ListKeyManager);
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/key-manager/focus-key-manager.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * This is the interface for focusable items (used by the FocusKeyManager).
     * Each item must know how to focus itself, whether or not it is currently disabled
     * and be able to supply its label.
     * @record
     */


    function FocusableOption() {}

    if (false) {}
    /**
     * @template T
     */


    var FocusKeyManager = /*#__PURE__*/function (_ListKeyManager2) {
      _inherits(FocusKeyManager, _ListKeyManager2);

      var _super2 = _createSuper(FocusKeyManager);

      function FocusKeyManager() {
        var _this4;

        _classCallCheck(this, FocusKeyManager);

        _this4 = _super2.apply(this, arguments);
        _this4._origin = 'program';
        return _this4;
      }
      /**
       * Sets the focus origin that will be passed in to the items for any subsequent `focus` calls.
       * @template THIS
       * @this {THIS}
       * @param {?} origin Focus origin to be used when focusing items.
       * @return {THIS}
       */


      _createClass(FocusKeyManager, [{
        key: "setFocusOrigin",
        value: function setFocusOrigin(origin) {
          /** @type {?} */
          this._origin = origin;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "setActiveItem",
        value: function setActiveItem(item) {
          _get(_getPrototypeOf(FocusKeyManager.prototype), "setActiveItem", this).call(this, item);

          if (this.activeItem) {
            this.activeItem.focus(this._origin);
          }
        }
      }]);

      return FocusKeyManager;
    }(ListKeyManager);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/interactivity-checker/interactivity-checker.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // The InteractivityChecker leans heavily on the ally.js accessibility utilities.
    // Methods like `isTabbable` are only covering specific edge-cases for the browsers which are
    // supported.

    /**
     * Utility for checking the interactivity of an element, such as whether is is focusable or
     * tabbable.
     */


    var InteractivityChecker = /*#__PURE__*/function () {
      /**
       * @param {?} _platform
       */
      function InteractivityChecker(_platform) {
        _classCallCheck(this, InteractivityChecker);

        this._platform = _platform;
      }
      /**
       * Gets whether an element is disabled.
       *
       * @param {?} element Element to be checked.
       * @return {?} Whether the element is disabled.
       */


      _createClass(InteractivityChecker, [{
        key: "isDisabled",
        value: function isDisabled(element) {
          // This does not capture some cases, such as a non-form control with a disabled attribute or
          // a form control inside of a disabled form, but should capture the most common cases.
          return element.hasAttribute('disabled');
        }
        /**
         * Gets whether an element is visible for the purposes of interactivity.
         *
         * This will capture states like `display: none` and `visibility: hidden`, but not things like
         * being clipped by an `overflow: hidden` parent or being outside the viewport.
         *
         * @param {?} element
         * @return {?} Whether the element is visible.
         */

      }, {
        key: "isVisible",
        value: function isVisible(element) {
          return hasGeometry(element) && getComputedStyle(element).visibility === 'visible';
        }
        /**
         * Gets whether an element can be reached via Tab key.
         * Assumes that the element has already been checked with isFocusable.
         *
         * @param {?} element Element to be checked.
         * @return {?} Whether the element is tabbable.
         */

      }, {
        key: "isTabbable",
        value: function isTabbable(element) {
          // Nothing is tabbable on the server 😎
          if (!this._platform.isBrowser) {
            return false;
          }
          /** @type {?} */


          var frameElement = getFrameElement(getWindow(element));

          if (frameElement) {
            /** @type {?} */
            var frameType = frameElement && frameElement.nodeName.toLowerCase(); // Frame elements inherit their tabindex onto all child elements.

            if (getTabIndexValue(frameElement) === -1) {
              return false;
            } // Webkit and Blink consider anything inside of an <object> element as non-tabbable.


            if ((this._platform.BLINK || this._platform.WEBKIT) && frameType === 'object') {
              return false;
            } // Webkit and Blink disable tabbing to an element inside of an invisible frame.


            if ((this._platform.BLINK || this._platform.WEBKIT) && !this.isVisible(frameElement)) {
              return false;
            }
          }
          /** @type {?} */


          var nodeName = element.nodeName.toLowerCase();
          /** @type {?} */

          var tabIndexValue = getTabIndexValue(element);

          if (element.hasAttribute('contenteditable')) {
            return tabIndexValue !== -1;
          }

          if (nodeName === 'iframe') {
            // The frames may be tabbable depending on content, but it's not possibly to reliably
            // investigate the content of the frames.
            return false;
          }

          if (nodeName === 'audio') {
            if (!element.hasAttribute('controls')) {
              // By default an <audio> element without the controls enabled is not tabbable.
              return false;
            } else if (this._platform.BLINK) {
              // In Blink <audio controls> elements are always tabbable.
              return true;
            }
          }

          if (nodeName === 'video') {
            if (!element.hasAttribute('controls') && this._platform.TRIDENT) {
              // In Trident a <video> element without the controls enabled is not tabbable.
              return false;
            } else if (this._platform.BLINK || this._platform.FIREFOX) {
              // In Chrome and Firefox <video controls> elements are always tabbable.
              return true;
            }
          }

          if (nodeName === 'object' && (this._platform.BLINK || this._platform.WEBKIT)) {
            // In all Blink and WebKit based browsers <object> elements are never tabbable.
            return false;
          } // In iOS the browser only considers some specific elements as tabbable.


          if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
            return false;
          }

          return element.tabIndex >= 0;
        }
        /**
         * Gets whether an element can be focused by the user.
         *
         * @param {?} element Element to be checked.
         * @return {?} Whether the element is focusable.
         */

      }, {
        key: "isFocusable",
        value: function isFocusable(element) {
          // Perform checks in order of left to most expensive.
          // Again, naive approach that does not capture many edge cases and browser quirks.
          return isPotentiallyFocusable(element) && !this.isDisabled(element) && this.isVisible(element);
        }
      }]);

      return InteractivityChecker;
    }();

    InteractivityChecker.ɵfac = function InteractivityChecker_Factory(t) {
      return new (t || InteractivityChecker)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]));
    };
    /** @nocollapse */


    InteractivityChecker.ctorParameters = function () {
      return [{
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]
      }];
    };
    /** @nocollapse */


    InteractivityChecker.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function InteractivityChecker_Factory() {
        return new InteractivityChecker(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]));
      },
      token: InteractivityChecker,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InteractivityChecker, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * Returns the frame element from a window object. Since browsers like MS Edge throw errors if
     * the frameElement property is being accessed from a different host address, this property
     * should be accessed carefully.
     * @param {?} window
     * @return {?}
     */


    function getFrameElement(window) {
      try {
        return (
          /** @type {?} */
          window.frameElement
        );
      } catch (_a) {
        return null;
      }
    }
    /**
     * Checks whether the specified element has any geometry / rectangles.
     * @param {?} element
     * @return {?}
     */


    function hasGeometry(element) {
      // Use logic from jQuery to check for an invisible element.
      // See https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.js#L12
      return !!(element.offsetWidth || element.offsetHeight || typeof element.getClientRects === 'function' && element.getClientRects().length);
    }
    /**
     * Gets whether an element's
     * @param {?} element
     * @return {?}
     */


    function isNativeFormElement(element) {
      /** @type {?} */
      var nodeName = element.nodeName.toLowerCase();
      return nodeName === 'input' || nodeName === 'select' || nodeName === 'button' || nodeName === 'textarea';
    }
    /**
     * Gets whether an element is an `<input type="hidden">`.
     * @param {?} element
     * @return {?}
     */


    function isHiddenInput(element) {
      return isInputElement(element) && element.type == 'hidden';
    }
    /**
     * Gets whether an element is an anchor that has an href attribute.
     * @param {?} element
     * @return {?}
     */


    function isAnchorWithHref(element) {
      return isAnchorElement(element) && element.hasAttribute('href');
    }
    /**
     * Gets whether an element is an input element.
     * @param {?} element
     * @return {?}
     */


    function isInputElement(element) {
      return element.nodeName.toLowerCase() == 'input';
    }
    /**
     * Gets whether an element is an anchor element.
     * @param {?} element
     * @return {?}
     */


    function isAnchorElement(element) {
      return element.nodeName.toLowerCase() == 'a';
    }
    /**
     * Gets whether an element has a valid tabindex.
     * @param {?} element
     * @return {?}
     */


    function hasValidTabIndex(element) {
      if (!element.hasAttribute('tabindex') || element.tabIndex === undefined) {
        return false;
      }
      /** @type {?} */


      var tabIndex = element.getAttribute('tabindex'); // IE11 parses tabindex="" as the value "-32768"

      if (tabIndex == '-32768') {
        return false;
      }

      return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
    }
    /**
     * Returns the parsed tabindex from the element attributes instead of returning the
     * evaluated tabindex from the browsers defaults.
     * @param {?} element
     * @return {?}
     */


    function getTabIndexValue(element) {
      if (!hasValidTabIndex(element)) {
        return null;
      } // See browser issue in Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054

      /** @type {?} */


      var tabIndex = parseInt(element.getAttribute('tabindex') || '', 10);
      return isNaN(tabIndex) ? -1 : tabIndex;
    }
    /**
     * Checks whether the specified element is potentially tabbable on iOS
     * @param {?} element
     * @return {?}
     */


    function isPotentiallyTabbableIOS(element) {
      /** @type {?} */
      var nodeName = element.nodeName.toLowerCase();
      /** @type {?} */

      var inputType = nodeName === 'input' &&
      /** @type {?} */
      element.type;
      return inputType === 'text' || inputType === 'password' || nodeName === 'select' || nodeName === 'textarea';
    }
    /**
     * Gets whether an element is potentially focusable without taking current visible/disabled state
     * into account.
     * @param {?} element
     * @return {?}
     */


    function isPotentiallyFocusable(element) {
      // Inputs are potentially focusable *unless* they're type="hidden".
      if (isHiddenInput(element)) {
        return false;
      }

      return isNativeFormElement(element) || isAnchorWithHref(element) || element.hasAttribute('contenteditable') || hasValidTabIndex(element);
    }
    /**
     * Gets the parent window of a DOM node with regards of being inside of an iframe.
     * @param {?} node
     * @return {?}
     */


    function getWindow(node) {
      // ownerDocument is null if `node` itself *is* a document.
      return node.ownerDocument && node.ownerDocument.defaultView || window;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/focus-trap/focus-trap.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Class that allows for trapping focus within a DOM element.
     *
     * This class currently uses a relatively simple approach to focus trapping.
     * It assumes that the tab order is the same as DOM order, which is not necessarily true.
     * Things like `tabIndex > 0`, flex `order`, and shadow roots can cause to two to misalign.
     *
     * @deprecated Use `ConfigurableFocusTrap` instead.
     * \@breaking-change for 11.0.0 Remove this class.
     */


    var FocusTrap = /*#__PURE__*/function () {
      /**
       * @param {?} _element
       * @param {?} _checker
       * @param {?} _ngZone
       * @param {?} _document
       * @param {?=} deferAnchors
       */
      function FocusTrap(_element, _checker, _ngZone, _document) {
        var _this5 = this;

        var deferAnchors = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

        _classCallCheck(this, FocusTrap);

        this._element = _element;
        this._checker = _checker;
        this._ngZone = _ngZone;
        this._document = _document;
        this._hasAttached = false; // Event listeners for the anchors. Need to be regular functions so that we can unbind them later.

        this.startAnchorListener =
        /**
        * @return {?}
        */
        function () {
          return _this5.focusLastTabbableElement();
        };

        this.endAnchorListener =
        /**
        * @return {?}
        */
        function () {
          return _this5.focusFirstTabbableElement();
        };

        this._enabled = true;

        if (!deferAnchors) {
          this.attachAnchors();
        }
      }
      /**
       * Whether the focus trap is active.
       * @return {?}
       */


      _createClass(FocusTrap, [{
        key: "destroy",

        /**
         * Destroys the focus trap by cleaning up the anchors.
         * @return {?}
         */
        value: function destroy() {
          /** @type {?} */
          var startAnchor = this._startAnchor;
          /** @type {?} */

          var endAnchor = this._endAnchor;

          if (startAnchor) {
            startAnchor.removeEventListener('focus', this.startAnchorListener);

            if (startAnchor.parentNode) {
              startAnchor.parentNode.removeChild(startAnchor);
            }
          }

          if (endAnchor) {
            endAnchor.removeEventListener('focus', this.endAnchorListener);

            if (endAnchor.parentNode) {
              endAnchor.parentNode.removeChild(endAnchor);
            }
          }

          this._startAnchor = this._endAnchor = null;
        }
        /**
         * Inserts the anchors into the DOM. This is usually done automatically
         * in the constructor, but can be deferred for cases like directives with `*ngIf`.
         * @return {?} Whether the focus trap managed to attach successfuly. This may not be the case
         * if the target element isn't currently in the DOM.
         */

      }, {
        key: "attachAnchors",
        value: function attachAnchors() {
          var _this6 = this;

          // If we're not on the browser, there can be no focus to trap.
          if (this._hasAttached) {
            return true;
          }

          this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            if (!_this6._startAnchor) {
              _this6._startAnchor = _this6._createAnchor();

              /** @type {?} */
              _this6._startAnchor.addEventListener('focus', _this6.startAnchorListener);
            }

            if (!_this6._endAnchor) {
              _this6._endAnchor = _this6._createAnchor();

              /** @type {?} */
              _this6._endAnchor.addEventListener('focus', _this6.endAnchorListener);
            }
          });

          if (this._element.parentNode) {
            this._element.parentNode.insertBefore(
            /** @type {?} */
            this._startAnchor, this._element);

            this._element.parentNode.insertBefore(
            /** @type {?} */
            this._endAnchor, this._element.nextSibling);

            this._hasAttached = true;
          }

          return this._hasAttached;
        }
        /**
         * Waits for the zone to stabilize, then either focuses the first element that the
         * user specified, or the first tabbable element.
         * @return {?} Returns a promise that resolves with a boolean, depending
         * on whether focus was moved successfuly.
         */

      }, {
        key: "focusInitialElementWhenReady",
        value: function focusInitialElementWhenReady() {
          var _this7 = this;

          return new Promise(
          /**
          * @param {?} resolve
          * @return {?}
          */
          function (resolve) {
            _this7._executeOnStable(
            /**
            * @return {?}
            */
            function () {
              return resolve(_this7.focusInitialElement());
            });
          });
        }
        /**
         * Waits for the zone to stabilize, then focuses
         * the first tabbable element within the focus trap region.
         * @return {?} Returns a promise that resolves with a boolean, depending
         * on whether focus was moved successfuly.
         */

      }, {
        key: "focusFirstTabbableElementWhenReady",
        value: function focusFirstTabbableElementWhenReady() {
          var _this8 = this;

          return new Promise(
          /**
          * @param {?} resolve
          * @return {?}
          */
          function (resolve) {
            _this8._executeOnStable(
            /**
            * @return {?}
            */
            function () {
              return resolve(_this8.focusFirstTabbableElement());
            });
          });
        }
        /**
         * Waits for the zone to stabilize, then focuses
         * the last tabbable element within the focus trap region.
         * @return {?} Returns a promise that resolves with a boolean, depending
         * on whether focus was moved successfuly.
         */

      }, {
        key: "focusLastTabbableElementWhenReady",
        value: function focusLastTabbableElementWhenReady() {
          var _this9 = this;

          return new Promise(
          /**
          * @param {?} resolve
          * @return {?}
          */
          function (resolve) {
            _this9._executeOnStable(
            /**
            * @return {?}
            */
            function () {
              return resolve(_this9.focusLastTabbableElement());
            });
          });
        }
        /**
         * Get the specified boundary element of the trapped region.
         * @private
         * @param {?} bound The boundary to get (start or end of trapped region).
         * @return {?} The boundary element.
         */

      }, {
        key: "_getRegionBoundary",
        value: function _getRegionBoundary(bound) {
          // Contains the deprecated version of selector, for temporary backwards comparability.

          /** @type {?} */
          var markers =
          /** @type {?} */
          this._element.querySelectorAll("[cdk-focus-region-".concat(bound, "], ") + "[cdkFocusRegion".concat(bound, "], ") + "[cdk-focus-".concat(bound, "]"));

          for (var i = 0; i < markers.length; i++) {
            // @breaking-change 8.0.0
            if (markers[i].hasAttribute("cdk-focus-".concat(bound))) {
              console.warn("Found use of deprecated attribute 'cdk-focus-".concat(bound, "', ") + "use 'cdkFocusRegion".concat(bound, "' instead. The deprecated ") + "attribute will be removed in 8.0.0.", markers[i]);
            } else if (markers[i].hasAttribute("cdk-focus-region-".concat(bound))) {
              console.warn("Found use of deprecated attribute 'cdk-focus-region-".concat(bound, "', ") + "use 'cdkFocusRegion".concat(bound, "' instead. The deprecated attribute ") + "will be removed in 8.0.0.", markers[i]);
            }
          }

          if (bound == 'start') {
            return markers.length ? markers[0] : this._getFirstTabbableElement(this._element);
          }

          return markers.length ? markers[markers.length - 1] : this._getLastTabbableElement(this._element);
        }
        /**
         * Focuses the element that should be focused when the focus trap is initialized.
         * @return {?} Whether focus was moved successfuly.
         */

      }, {
        key: "focusInitialElement",
        value: function focusInitialElement() {
          // Contains the deprecated version of selector, for temporary backwards comparability.

          /** @type {?} */
          var redirectToElement =
          /** @type {?} */
          this._element.querySelector("[cdk-focus-initial], " + "[cdkFocusInitial]");

          if (redirectToElement) {
            // @breaking-change 8.0.0
            if (redirectToElement.hasAttribute("cdk-focus-initial")) {
              console.warn("Found use of deprecated attribute 'cdk-focus-initial', " + "use 'cdkFocusInitial' instead. The deprecated attribute " + "will be removed in 8.0.0", redirectToElement);
            } // Warn the consumer if the element they've pointed to
            // isn't focusable, when not in production mode.


            if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() && !this._checker.isFocusable(redirectToElement)) {
              console.warn("Element matching '[cdkFocusInitial]' is not focusable.", redirectToElement);
            }

            redirectToElement.focus();
            return true;
          }

          return this.focusFirstTabbableElement();
        }
        /**
         * Focuses the first tabbable element within the focus trap region.
         * @return {?} Whether focus was moved successfuly.
         */

      }, {
        key: "focusFirstTabbableElement",
        value: function focusFirstTabbableElement() {
          /** @type {?} */
          var redirectToElement = this._getRegionBoundary('start');

          if (redirectToElement) {
            redirectToElement.focus();
          }

          return !!redirectToElement;
        }
        /**
         * Focuses the last tabbable element within the focus trap region.
         * @return {?} Whether focus was moved successfuly.
         */

      }, {
        key: "focusLastTabbableElement",
        value: function focusLastTabbableElement() {
          /** @type {?} */
          var redirectToElement = this._getRegionBoundary('end');

          if (redirectToElement) {
            redirectToElement.focus();
          }

          return !!redirectToElement;
        }
        /**
         * Checks whether the focus trap has successfuly been attached.
         * @return {?}
         */

      }, {
        key: "hasAttached",
        value: function hasAttached() {
          return this._hasAttached;
        }
        /**
         * Get the first tabbable element from a DOM subtree (inclusive).
         * @private
         * @param {?} root
         * @return {?}
         */

      }, {
        key: "_getFirstTabbableElement",
        value: function _getFirstTabbableElement(root) {
          if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
            return root;
          } // Iterate in DOM order. Note that IE doesn't have `children` for SVG so we fall
          // back to `childNodes` which includes text nodes, comments etc.

          /** @type {?} */


          var children = root.children || root.childNodes;

          for (var i = 0; i < children.length; i++) {
            /** @type {?} */
            var tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getFirstTabbableElement(
            /** @type {?} */
            children[i]) : null;

            if (tabbableChild) {
              return tabbableChild;
            }
          }

          return null;
        }
        /**
         * Get the last tabbable element from a DOM subtree (inclusive).
         * @private
         * @param {?} root
         * @return {?}
         */

      }, {
        key: "_getLastTabbableElement",
        value: function _getLastTabbableElement(root) {
          if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
            return root;
          } // Iterate in reverse DOM order.

          /** @type {?} */


          var children = root.children || root.childNodes;

          for (var i = children.length - 1; i >= 0; i--) {
            /** @type {?} */
            var tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getLastTabbableElement(
            /** @type {?} */
            children[i]) : null;

            if (tabbableChild) {
              return tabbableChild;
            }
          }

          return null;
        }
        /**
         * Creates an anchor element.
         * @private
         * @return {?}
         */

      }, {
        key: "_createAnchor",
        value: function _createAnchor() {
          /** @type {?} */
          var anchor = this._document.createElement('div');

          this._toggleAnchorTabIndex(this._enabled, anchor);

          anchor.classList.add('cdk-visually-hidden');
          anchor.classList.add('cdk-focus-trap-anchor');
          anchor.setAttribute('aria-hidden', 'true');
          return anchor;
        }
        /**
         * Toggles the `tabindex` of an anchor, based on the enabled state of the focus trap.
         * @private
         * @param {?} isEnabled Whether the focus trap is enabled.
         * @param {?} anchor Anchor on which to toggle the tabindex.
         * @return {?}
         */

      }, {
        key: "_toggleAnchorTabIndex",
        value: function _toggleAnchorTabIndex(isEnabled, anchor) {
          // Remove the tabindex completely, rather than setting it to -1, because if the
          // element has a tabindex, the user might still hit it when navigating with the arrow keys.
          isEnabled ? anchor.setAttribute('tabindex', '0') : anchor.removeAttribute('tabindex');
        }
        /**
         * Toggles the`tabindex` of both anchors to either trap Tab focus or allow it to escape.
         * @protected
         * @param {?} enabled
         * @return {?}
         */

      }, {
        key: "toggleAnchors",
        value: function toggleAnchors(enabled) {
          if (this._startAnchor && this._endAnchor) {
            this._toggleAnchorTabIndex(enabled, this._startAnchor);

            this._toggleAnchorTabIndex(enabled, this._endAnchor);
          }
        }
        /**
         * Executes a function when the zone is stable.
         * @private
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "_executeOnStable",
        value: function _executeOnStable(fn) {
          if (this._ngZone.isStable) {
            fn();
          } else {
            this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(fn);
          }
        }
      }, {
        key: "enabled",
        get: function get() {
          return this._enabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._enabled = value;

          if (this._startAnchor && this._endAnchor) {
            this._toggleAnchorTabIndex(value, this._startAnchor);

            this._toggleAnchorTabIndex(value, this._endAnchor);
          }
        }
      }]);

      return FocusTrap;
    }();

    if (false) {}
    /**
     * Factory that allows easy instantiation of focus traps.
     * @deprecated Use `ConfigurableFocusTrapFactory` instead.
     * \@breaking-change for 11.0.0 Remove this class.
     */


    var FocusTrapFactory = /*#__PURE__*/function () {
      /**
       * @param {?} _checker
       * @param {?} _ngZone
       * @param {?} _document
       */
      function FocusTrapFactory(_checker, _ngZone, _document) {
        _classCallCheck(this, FocusTrapFactory);

        this._checker = _checker;
        this._ngZone = _ngZone;
        this._document = _document;
      }
      /**
       * Creates a focus-trapped region around the given element.
       * @param {?} element The element around which focus will be trapped.
       * @param {?=} deferCaptureElements Defers the creation of focus-capturing elements to be done
       *     manually by the user.
       * @return {?} The created focus trap instance.
       */


      _createClass(FocusTrapFactory, [{
        key: "create",
        value: function create(element) {
          var deferCaptureElements = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          return new FocusTrap(element, this._checker, this._ngZone, this._document, deferCaptureElements);
        }
      }]);

      return FocusTrapFactory;
    }();

    FocusTrapFactory.ɵfac = function FocusTrapFactory_Factory(t) {
      return new (t || FocusTrapFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](InteractivityChecker), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
    };
    /** @nocollapse */


    FocusTrapFactory.ctorParameters = function () {
      return [{
        type: InteractivityChecker
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
        }]
      }];
    };
    /** @nocollapse */


    FocusTrapFactory.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function FocusTrapFactory_Factory() {
        return new FocusTrapFactory(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(InteractivityChecker), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
      },
      token: FocusTrapFactory,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FocusTrapFactory, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: InteractivityChecker
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * Directive for trapping focus within a region.
     */


    var CdkTrapFocus = /*#__PURE__*/function () {
      /**
       * @param {?} _elementRef
       * @param {?} _focusTrapFactory
       * @param {?} _document
       */
      function CdkTrapFocus(_elementRef, _focusTrapFactory, _document) {
        _classCallCheck(this, CdkTrapFocus);

        this._elementRef = _elementRef;
        this._focusTrapFactory = _focusTrapFactory;
        /**
         * Previously focused element to restore focus to upon destroy when using autoCapture.
         */

        this._previouslyFocusedElement = null;
        this._document = _document;
        this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
      }
      /**
       * Whether the focus trap is active.
       * @return {?}
       */


      _createClass(CdkTrapFocus, [{
        key: "ngOnDestroy",

        /**
         * @return {?}
         */
        value: function ngOnDestroy() {
          this.focusTrap.destroy(); // If we stored a previously focused element when using autoCapture, return focus to that
          // element now that the trapped region is being destroyed.

          if (this._previouslyFocusedElement) {
            this._previouslyFocusedElement.focus();

            this._previouslyFocusedElement = null;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          this.focusTrap.attachAnchors();

          if (this.autoCapture) {
            this._previouslyFocusedElement =
            /** @type {?} */
            this._document.activeElement;
            this.focusTrap.focusInitialElementWhenReady();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          if (!this.focusTrap.hasAttached()) {
            this.focusTrap.attachAnchors();
          }
        }
      }, {
        key: "enabled",
        get: function get() {
          return this.focusTrap.enabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this.focusTrap.enabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether the directive should automatially move focus into the trapped region upon
         * initialization and return focus to the previous activeElement upon destruction.
         * @return {?}
         */

      }, {
        key: "autoCapture",
        get: function get() {
          return this._autoCapture;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._autoCapture = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        }
      }]);

      return CdkTrapFocus;
    }();

    CdkTrapFocus.ɵfac = function CdkTrapFocus_Factory(t) {
      return new (t || CdkTrapFocus)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FocusTrapFactory), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
    };

    CdkTrapFocus.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkTrapFocus,
      selectors: [["", "cdkTrapFocus", ""]],
      inputs: {
        enabled: ["cdkTrapFocus", "enabled"],
        autoCapture: ["cdkTrapFocusAutoCapture", "autoCapture"]
      },
      exportAs: ["cdkTrapFocus"]
    });
    /** @nocollapse */

    CdkTrapFocus.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: FocusTrapFactory
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
        }]
      }];
    };

    CdkTrapFocus.propDecorators = {
      enabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkTrapFocus']
      }],
      autoCapture: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkTrapFocusAutoCapture']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkTrapFocus, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[cdkTrapFocus]',
          exportAs: 'cdkTrapFocus'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: FocusTrapFactory
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }];
      }, {
        enabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkTrapFocus']
        }],
        autoCapture: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkTrapFocusAutoCapture']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/focus-trap/configurable-focus-trap.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Class that allows for trapping focus within a DOM element.
     *
     * This class uses a strategy pattern that determines how it traps focus.
     * See FocusTrapInertStrategy.
     */


    var ConfigurableFocusTrap = /*#__PURE__*/function (_FocusTrap) {
      _inherits(ConfigurableFocusTrap, _FocusTrap);

      var _super3 = _createSuper(ConfigurableFocusTrap);

      /**
       * @param {?} _element
       * @param {?} _checker
       * @param {?} _ngZone
       * @param {?} _document
       * @param {?} _focusTrapManager
       * @param {?} _inertStrategy
       * @param {?} config
       */
      function ConfigurableFocusTrap(_element, _checker, _ngZone, _document, _focusTrapManager, _inertStrategy, config) {
        var _this10;

        _classCallCheck(this, ConfigurableFocusTrap);

        _this10 = _super3.call(this, _element, _checker, _ngZone, _document, config.defer);
        _this10._focusTrapManager = _focusTrapManager;
        _this10._inertStrategy = _inertStrategy;

        _this10._focusTrapManager.register(_assertThisInitialized(_this10));

        return _this10;
      }
      /**
       * Whether the FocusTrap is enabled.
       * @return {?}
       */


      _createClass(ConfigurableFocusTrap, [{
        key: "destroy",

        /**
         * Notifies the FocusTrapManager that this FocusTrap will be destroyed.
         * @return {?}
         */
        value: function destroy() {
          this._focusTrapManager.deregister(this);

          _get(_getPrototypeOf(ConfigurableFocusTrap.prototype), "destroy", this).call(this);
        }
        /**
         * \@docs-private Implemented as part of ManagedFocusTrap.
         * @return {?}
         */

      }, {
        key: "_enable",
        value: function _enable() {
          this._inertStrategy.preventFocus(this);

          this.toggleAnchors(true);
        }
        /**
         * \@docs-private Implemented as part of ManagedFocusTrap.
         * @return {?}
         */

      }, {
        key: "_disable",
        value: function _disable() {
          this._inertStrategy.allowFocus(this);

          this.toggleAnchors(false);
        }
      }, {
        key: "enabled",
        get: function get() {
          return this._enabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._enabled = value;

          if (this._enabled) {
            this._focusTrapManager.register(this);
          } else {
            this._focusTrapManager.deregister(this);
          }
        }
      }]);

      return ConfigurableFocusTrap;
    }(FocusTrap);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/focus-trap/polyfill.ts
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
     * IE 11 compatible closest implementation that is able to start from non-Element Nodes.
     * @param {?} element
     * @param {?} selector
     * @return {?}
     */


    function closest(element, selector) {
      if (!(element instanceof Node)) {
        return null;
      }
      /** @type {?} */


      var curr = element;

      while (curr != null && !(curr instanceof Element)) {
        curr = curr.parentNode;
      }

      return curr && (
      /** @type {?} */
      hasNativeClosest ? curr.closest(selector) : polyfillClosest(curr, selector));
    }
    /**
     * Polyfill for browsers without Element.closest.
     * @param {?} element
     * @param {?} selector
     * @return {?}
     */


    function polyfillClosest(element, selector) {
      /** @type {?} */
      var curr = element;

      while (curr != null && !(curr instanceof Element && matches(curr, selector))) {
        curr = curr.parentNode;
      }

      return (
        /** @type {?} */
        curr || null
      );
    }
    /** @type {?} */


    var hasNativeClosest = typeof Element != 'undefined' && !!Element.prototype.closest;
    /**
     * IE 11 compatible matches implementation.
     * @param {?} element
     * @param {?} selector
     * @return {?}
     */

    function matches(element, selector) {
      return element.matches ? element.matches(selector) :
      /** @type {?} */
      element['msMatchesSelector'](selector);
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/focus-trap/event-listener-inert-strategy.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Lightweight FocusTrapInertStrategy that adds a document focus event
     * listener to redirect focus back inside the FocusTrap.
     */


    var EventListenerFocusTrapInertStrategy = /*#__PURE__*/function () {
      function EventListenerFocusTrapInertStrategy() {
        _classCallCheck(this, EventListenerFocusTrapInertStrategy);

        /**
         * Focus event handler.
         */
        this._listener = null;
      }
      /**
       * Adds a document event listener that keeps focus inside the FocusTrap.
       * @param {?} focusTrap
       * @return {?}
       */


      _createClass(EventListenerFocusTrapInertStrategy, [{
        key: "preventFocus",
        value: function preventFocus(focusTrap) {
          var _this11 = this;

          // Ensure there's only one listener per document
          if (this._listener) {
            focusTrap._document.removeEventListener('focus',
            /** @type {?} */
            this._listener, true);
          }

          this._listener =
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            return _this11._trapFocus(focusTrap, e);
          };

          focusTrap._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            focusTrap._document.addEventListener('focus',
            /** @type {?} */
            _this11._listener, true);
          });
        }
        /**
         * Removes the event listener added in preventFocus.
         * @param {?} focusTrap
         * @return {?}
         */

      }, {
        key: "allowFocus",
        value: function allowFocus(focusTrap) {
          if (!this._listener) {
            return;
          }

          focusTrap._document.removeEventListener('focus',
          /** @type {?} */
          this._listener, true);

          this._listener = null;
        }
        /**
         * Refocuses the first element in the FocusTrap if the focus event target was outside
         * the FocusTrap.
         *
         * This is an event listener callback. The event listener is added in runOutsideAngular,
         * so all this code runs outside Angular as well.
         * @private
         * @param {?} focusTrap
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_trapFocus",
        value: function _trapFocus(focusTrap, event) {
          /** @type {?} */
          var target =
          /** @type {?} */
          event.target;
          /** @type {?} */

          var focusTrapRoot = focusTrap._element; // Don't refocus if target was in an overlay, because the overlay might be associated
          // with an element inside the FocusTrap, ex. mat-select.

          if (!focusTrapRoot.contains(target) && closest(target, 'div.cdk-overlay-pane') === null) {
            // Some legacy FocusTrap usages have logic that focuses some element on the page
            // just before FocusTrap is destroyed. For backwards compatibility, wait
            // to be sure FocusTrap is still enabled before refocusing.
            setTimeout(
            /**
            * @return {?}
            */
            function () {
              // Check whether focus wasn't put back into the focus trap while the timeout was pending.
              if (focusTrap.enabled && !focusTrapRoot.contains(focusTrap._document.activeElement)) {
                focusTrap.focusFirstTabbableElement();
              }
            });
          }
        }
      }]);

      return EventListenerFocusTrapInertStrategy;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/focus-trap/configurable-focus-trap-config.ts
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
     * Configuration for creating a ConfigurableFocusTrap.
     */


    var ConfigurableFocusTrapConfig = function ConfigurableFocusTrapConfig() {
      _classCallCheck(this, ConfigurableFocusTrapConfig);

      /**
       * Whether to defer the creation of FocusTrap elements to be
       * done manually by the user. Default is to create them
       * automatically.
       */
      this.defer = false;
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/focus-trap/focus-trap-inert-strategy.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The injection token used to specify the inert strategy.
     * @type {?}
     */


    var FOCUS_TRAP_INERT_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('FOCUS_TRAP_INERT_STRATEGY');
    /**
     * A strategy that dictates how FocusTrap should prevent elements
     * outside of the FocusTrap from being focused.
     * @record
     */

    function FocusTrapInertStrategy() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/focus-trap/focus-trap-manager.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * A FocusTrap managed by FocusTrapManager.
     * Implemented by ConfigurableFocusTrap to avoid circular dependency.
     * @record
     */


    function ManagedFocusTrap() {}

    if (false) {}
    /**
     * Injectable that ensures only the most recently enabled FocusTrap is active.
     */


    var FocusTrapManager = /*#__PURE__*/function () {
      function FocusTrapManager() {
        _classCallCheck(this, FocusTrapManager);

        // A stack of the FocusTraps on the page. Only the FocusTrap at the
        // top of the stack is active.
        this._focusTrapStack = [];
      }
      /**
       * Disables the FocusTrap at the top of the stack, and then pushes
       * the new FocusTrap onto the stack.
       * @param {?} focusTrap
       * @return {?}
       */


      _createClass(FocusTrapManager, [{
        key: "register",
        value: function register(focusTrap) {
          // Dedupe focusTraps that register multiple times.
          this._focusTrapStack = this._focusTrapStack.filter(
          /**
          * @param {?} ft
          * @return {?}
          */
          function (ft) {
            return ft !== focusTrap;
          });
          /** @type {?} */

          var stack = this._focusTrapStack;

          if (stack.length) {
            stack[stack.length - 1]._disable();
          }

          stack.push(focusTrap);

          focusTrap._enable();
        }
        /**
         * Removes the FocusTrap from the stack, and activates the
         * FocusTrap that is the new top of the stack.
         * @param {?} focusTrap
         * @return {?}
         */

      }, {
        key: "deregister",
        value: function deregister(focusTrap) {
          focusTrap._disable();
          /** @type {?} */


          var stack = this._focusTrapStack;
          /** @type {?} */

          var i = stack.indexOf(focusTrap);

          if (i !== -1) {
            stack.splice(i, 1);

            if (stack.length) {
              stack[stack.length - 1]._enable();
            }
          }
        }
      }]);

      return FocusTrapManager;
    }();

    FocusTrapManager.ɵfac = function FocusTrapManager_Factory(t) {
      return new (t || FocusTrapManager)();
    };
    /** @nocollapse */


    FocusTrapManager.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function FocusTrapManager_Factory() {
        return new FocusTrapManager();
      },
      token: FocusTrapManager,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FocusTrapManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/focus-trap/configurable-focus-trap-factory.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Factory that allows easy instantiation of configurable focus traps.
     */


    var ConfigurableFocusTrapFactory = /*#__PURE__*/function () {
      /**
       * @param {?} _checker
       * @param {?} _ngZone
       * @param {?} _focusTrapManager
       * @param {?} _document
       * @param {?=} _inertStrategy
       */
      function ConfigurableFocusTrapFactory(_checker, _ngZone, _focusTrapManager, _document, _inertStrategy) {
        _classCallCheck(this, ConfigurableFocusTrapFactory);

        this._checker = _checker;
        this._ngZone = _ngZone;
        this._focusTrapManager = _focusTrapManager;
        this._document = _document; // TODO split up the strategies into different modules, similar to DateAdapter.

        this._inertStrategy = _inertStrategy || new EventListenerFocusTrapInertStrategy();
      }
      /**
       * @param {?} element
       * @param {?=} config
       * @return {?}
       */


      _createClass(ConfigurableFocusTrapFactory, [{
        key: "create",
        value: function create(element) {
          var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new ConfigurableFocusTrapConfig();

          /** @type {?} */
          var configObject;

          if (typeof config === 'boolean') {
            configObject = new ConfigurableFocusTrapConfig();
            configObject.defer = config;
          } else {
            configObject = config;
          }

          return new ConfigurableFocusTrap(element, this._checker, this._ngZone, this._document, this._focusTrapManager, this._inertStrategy, configObject);
        }
      }]);

      return ConfigurableFocusTrapFactory;
    }();

    ConfigurableFocusTrapFactory.ɵfac = function ConfigurableFocusTrapFactory_Factory(t) {
      return new (t || ConfigurableFocusTrapFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](InteractivityChecker), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](FocusTrapManager), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](FOCUS_TRAP_INERT_STRATEGY, 8));
    };
    /** @nocollapse */


    ConfigurableFocusTrapFactory.ctorParameters = function () {
      return [{
        type: InteractivityChecker
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: FocusTrapManager
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [FOCUS_TRAP_INERT_STRATEGY]
        }]
      }];
    };
    /** @nocollapse */


    ConfigurableFocusTrapFactory.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function ConfigurableFocusTrapFactory_Factory() {
        return new ConfigurableFocusTrapFactory(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(InteractivityChecker), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(FocusTrapManager), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(FOCUS_TRAP_INERT_STRATEGY, 8));
      },
      token: ConfigurableFocusTrapFactory,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ConfigurableFocusTrapFactory, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: InteractivityChecker
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: FocusTrapManager
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [FOCUS_TRAP_INERT_STRATEGY]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/live-announcer/live-announcer-tokens.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var LIVE_ANNOUNCER_ELEMENT_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('liveAnnouncerElement', {
      providedIn: 'root',
      factory: LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY
    });
    /**
     * \@docs-private
     * @return {?}
     */

    function LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY() {
      return null;
    }
    /**
     * Object that can be used to configure the default options for the LiveAnnouncer.
     * @record
     */


    function LiveAnnouncerDefaultOptions() {}

    if (false) {}
    /**
     * Injection token that can be used to configure the default options for the LiveAnnouncer.
     * @type {?}
     */


    var LIVE_ANNOUNCER_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('LIVE_ANNOUNCER_DEFAULT_OPTIONS');
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/live-announcer/live-announcer.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var LiveAnnouncer = /*#__PURE__*/function () {
      /**
       * @param {?} elementToken
       * @param {?} _ngZone
       * @param {?} _document
       * @param {?=} _defaultOptions
       */
      function LiveAnnouncer(elementToken, _ngZone, _document, _defaultOptions) {
        _classCallCheck(this, LiveAnnouncer);

        this._ngZone = _ngZone;
        this._defaultOptions = _defaultOptions; // We inject the live element and document as `any` because the constructor signature cannot
        // reference browser globals (HTMLElement, Document) on non-browser environments, since having
        // a class decorator causes TypeScript to preserve the constructor signature types.

        this._document = _document;
        this._liveElement = elementToken || this._createLiveElement();
      }
      /**
       * @param {?} message
       * @param {...?} args
       * @return {?}
       */


      _createClass(LiveAnnouncer, [{
        key: "announce",
        value: function announce(message) {
          var _this12 = this;

          /** @type {?} */
          var defaultOptions = this._defaultOptions;
          /** @type {?} */

          var politeness;
          /** @type {?} */

          var duration;

          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          if (args.length === 1 && typeof args[0] === 'number') {
            duration = args[0];
          } else {
            politeness = args[0];
            duration = args[1];
          }

          this.clear();
          clearTimeout(this._previousTimeout);

          if (!politeness) {
            politeness = defaultOptions && defaultOptions.politeness ? defaultOptions.politeness : 'polite';
          }

          if (duration == null && defaultOptions) {
            duration = defaultOptions.duration;
          } // TODO: ensure changing the politeness works on all environments we support.


          this._liveElement.setAttribute('aria-live', politeness); // This 100ms timeout is necessary for some browser + screen-reader combinations:
          // - Both JAWS and NVDA over IE11 will not announce anything without a non-zero timeout.
          // - With Chrome and IE11 with NVDA or JAWS, a repeated (identical) message won't be read a
          //   second time without clearing and then using a non-zero delay.
          // (using JAWS 17 at time of this writing).


          return this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            return new Promise(
            /**
            * @param {?} resolve
            * @return {?}
            */
            function (resolve) {
              clearTimeout(_this12._previousTimeout);
              _this12._previousTimeout = setTimeout(
              /**
              * @return {?}
              */
              function () {
                _this12._liveElement.textContent = message;
                resolve();

                if (typeof duration === 'number') {
                  _this12._previousTimeout = setTimeout(
                  /**
                  * @return {?}
                  */
                  function () {
                    return _this12.clear();
                  }, duration);
                }
              }, 100);
            });
          });
        }
        /**
         * Clears the current text from the announcer element. Can be used to prevent
         * screen readers from reading the text out again while the user is going
         * through the page landmarks.
         * @return {?}
         */

      }, {
        key: "clear",
        value: function clear() {
          if (this._liveElement) {
            this._liveElement.textContent = '';
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          clearTimeout(this._previousTimeout);

          if (this._liveElement && this._liveElement.parentNode) {
            this._liveElement.parentNode.removeChild(this._liveElement);

            this._liveElement =
            /** @type {?} */
            null;
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_createLiveElement",
        value: function _createLiveElement() {
          /** @type {?} */
          var elementClass = 'cdk-live-announcer-element';
          /** @type {?} */

          var previousElements = this._document.getElementsByClassName(elementClass);
          /** @type {?} */


          var liveEl = this._document.createElement('div'); // Remove any old containers. This can happen when coming in from a server-side-rendered page.


          for (var i = 0; i < previousElements.length; i++) {
            /** @type {?} */
            previousElements[i].parentNode.removeChild(previousElements[i]);
          }

          liveEl.classList.add(elementClass);
          liveEl.classList.add('cdk-visually-hidden');
          liveEl.setAttribute('aria-atomic', 'true');
          liveEl.setAttribute('aria-live', 'polite');

          this._document.body.appendChild(liveEl);

          return liveEl;
        }
      }]);

      return LiveAnnouncer;
    }();

    LiveAnnouncer.ɵfac = function LiveAnnouncer_Factory(t) {
      return new (t || LiveAnnouncer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](LIVE_ANNOUNCER_ELEMENT_TOKEN, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](LIVE_ANNOUNCER_DEFAULT_OPTIONS, 8));
    };
    /** @nocollapse */


    LiveAnnouncer.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [LIVE_ANNOUNCER_ELEMENT_TOKEN]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [LIVE_ANNOUNCER_DEFAULT_OPTIONS]
        }]
      }];
    };
    /** @nocollapse */


    LiveAnnouncer.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function LiveAnnouncer_Factory() {
        return new LiveAnnouncer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(LIVE_ANNOUNCER_ELEMENT_TOKEN, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(LIVE_ANNOUNCER_DEFAULT_OPTIONS, 8));
      },
      token: LiveAnnouncer,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LiveAnnouncer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [LIVE_ANNOUNCER_ELEMENT_TOKEN]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [LIVE_ANNOUNCER_DEFAULT_OPTIONS]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * A directive that works similarly to aria-live, but uses the LiveAnnouncer to ensure compatibility
     * with a wider range of browsers and screen readers.
     */


    var CdkAriaLive = /*#__PURE__*/function () {
      /**
       * @param {?} _elementRef
       * @param {?} _liveAnnouncer
       * @param {?} _contentObserver
       * @param {?} _ngZone
       */
      function CdkAriaLive(_elementRef, _liveAnnouncer, _contentObserver, _ngZone) {
        _classCallCheck(this, CdkAriaLive);

        this._elementRef = _elementRef;
        this._liveAnnouncer = _liveAnnouncer;
        this._contentObserver = _contentObserver;
        this._ngZone = _ngZone;
        this._politeness = 'off';
      }
      /**
       * The aria-live politeness level to use when announcing messages.
       * @return {?}
       */


      _createClass(CdkAriaLive, [{
        key: "ngOnDestroy",

        /**
         * @return {?}
         */
        value: function ngOnDestroy() {
          if (this._subscription) {
            this._subscription.unsubscribe();
          }
        }
      }, {
        key: "politeness",
        get: function get() {
          return this._politeness;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          var _this13 = this;

          this._politeness = value === 'polite' || value === 'assertive' ? value : 'off';

          if (this._politeness === 'off') {
            if (this._subscription) {
              this._subscription.unsubscribe();

              this._subscription = null;
            }
          } else if (!this._subscription) {
            this._subscription = this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              return _this13._contentObserver.observe(_this13._elementRef).subscribe(
              /**
              * @return {?}
              */
              function () {
                // Note that we use textContent here, rather than innerText, in order to avoid a reflow.

                /** @type {?} */
                var elementText = _this13._elementRef.nativeElement.textContent; // The `MutationObserver` fires also for attribute
                // changes which we don't want to announce.

                if (elementText !== _this13._previousAnnouncedText) {
                  _this13._liveAnnouncer.announce(elementText, _this13._politeness);

                  _this13._previousAnnouncedText = elementText;
                }
              });
            });
          }
        }
      }]);

      return CdkAriaLive;
    }();

    CdkAriaLive.ɵfac = function CdkAriaLive_Factory(t) {
      return new (t || CdkAriaLive)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LiveAnnouncer), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ContentObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    CdkAriaLive.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkAriaLive,
      selectors: [["", "cdkAriaLive", ""]],
      inputs: {
        politeness: ["cdkAriaLive", "politeness"]
      },
      exportAs: ["cdkAriaLive"]
    });
    /** @nocollapse */

    CdkAriaLive.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: LiveAnnouncer
      }, {
        type: _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ContentObserver"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    CdkAriaLive.propDecorators = {
      politeness: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkAriaLive']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkAriaLive, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[cdkAriaLive]',
          exportAs: 'cdkAriaLive'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: LiveAnnouncer
        }, {
          type: _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ContentObserver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, {
        politeness: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkAriaLive']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/focus-monitor/focus-monitor.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // This is the value used by AngularJS Material. Through trial and error (on iPhone 6S) they found
    // that a value of around 650ms seems appropriate.

    /** @type {?} */


    var TOUCH_BUFFER_MS = 650;
    /**
     * Corresponds to the options that can be passed to the native `focus` event.
     * via https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus
     * @record
     */

    function FocusOptions() {}

    if (false) {}
    /**
     * Event listener options that enable capturing and also
     * mark the listener as passive if the browser supports it.
     * @type {?}
     */


    var captureEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["normalizePassiveListenerOptions"])({
      passive: true,
      capture: true
    });
    /**
     * Monitors mouse and keyboard events to determine the cause of focus events.
     */

    var FocusMonitor = /*#__PURE__*/function () {
      /**
       * @param {?} _ngZone
       * @param {?} _platform
       * @param {?=} document
       */
      function FocusMonitor(_ngZone, _platform,
      /** @breaking-change 11.0.0 make document required */
      document) {
        var _this14 = this;

        _classCallCheck(this, FocusMonitor);

        this._ngZone = _ngZone;
        this._platform = _platform;
        /**
         * The focus origin that the next focus event is a result of.
         */

        this._origin = null;
        /**
         * Whether the window has just been focused.
         */

        this._windowFocused = false;
        /**
         * Map of elements being monitored to their info.
         */

        this._elementInfo = new Map();
        /**
         * The number of elements currently being monitored.
         */

        this._monitoredElementCount = 0;
        /**
         * Event listener for `keydown` events on the document.
         * Needs to be an arrow function in order to preserve the context when it gets bound.
         */

        this._documentKeydownListener =
        /**
        * @return {?}
        */
        function () {
          // On keydown record the origin and clear any touch event that may be in progress.
          _this14._lastTouchTarget = null;

          _this14._setOriginForCurrentEventQueue('keyboard');
        };
        /**
         * Event listener for `mousedown` events on the document.
         * Needs to be an arrow function in order to preserve the context when it gets bound.
         */


        this._documentMousedownListener =
        /**
        * @return {?}
        */
        function () {
          // On mousedown record the origin only if there is not touch
          // target, since a mousedown can happen as a result of a touch event.
          if (!_this14._lastTouchTarget) {
            _this14._setOriginForCurrentEventQueue('mouse');
          }
        };
        /**
         * Event listener for `touchstart` events on the document.
         * Needs to be an arrow function in order to preserve the context when it gets bound.
         */


        this._documentTouchstartListener =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          // When the touchstart event fires the focus event is not yet in the event queue. This means
          // we can't rely on the trick used above (setting timeout of 1ms). Instead we wait 650ms to
          // see if a focus happens.
          if (_this14._touchTimeoutId != null) {
            clearTimeout(_this14._touchTimeoutId);
          } // Since this listener is bound on the `document` level, any events coming from the shadow DOM
          // will have their `target` set to the shadow root. If available, use `composedPath` to
          // figure out the event target.


          _this14._lastTouchTarget = event.composedPath ? event.composedPath()[0] : event.target;
          _this14._touchTimeoutId = setTimeout(
          /**
          * @return {?}
          */
          function () {
            return _this14._lastTouchTarget = null;
          }, TOUCH_BUFFER_MS);
        };
        /**
         * Event listener for `focus` events on the window.
         * Needs to be an arrow function in order to preserve the context when it gets bound.
         */


        this._windowFocusListener =
        /**
        * @return {?}
        */
        function () {
          // Make a note of when the window regains focus, so we can
          // restore the origin info for the focused element.
          _this14._windowFocused = true;
          _this14._windowFocusTimeoutId = setTimeout(
          /**
          * @return {?}
          */
          function () {
            return _this14._windowFocused = false;
          });
        };

        this._document = document;
      }
      /**
       * @param {?} element
       * @param {?=} checkChildren
       * @return {?}
       */


      _createClass(FocusMonitor, [{
        key: "monitor",
        value: function monitor(element) {
          var _this15 = this;

          var checkChildren = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          // Do nothing if we're not on the browser platform.
          if (!this._platform.isBrowser) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
          }
          /** @type {?} */


          var nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceElement"])(element); // Check if we're already monitoring this element.

          if (this._elementInfo.has(nativeElement)) {
            /** @type {?} */
            var cachedInfo = this._elementInfo.get(nativeElement);

            /** @type {?} */
            cachedInfo.checkChildren = checkChildren;
            return (
              /** @type {?} */
              cachedInfo.subject.asObservable()
            );
          } // Create monitored element info.

          /** @type {?} */


          var info = {
            unlisten:
            /**
            * @return {?}
            */
            function unlisten() {},
            checkChildren: checkChildren,
            subject: new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]()
          };

          this._elementInfo.set(nativeElement, info);

          this._incrementMonitoredElementCount(); // Start listening. We need to listen in capture phase since focus events don't bubble.

          /** @type {?} */


          var focusListener =
          /**
          * @param {?} event
          * @return {?}
          */
          function focusListener(event) {
            return _this15._onFocus(event, nativeElement);
          };
          /** @type {?} */


          var blurListener =
          /**
          * @param {?} event
          * @return {?}
          */
          function blurListener(event) {
            return _this15._onBlur(event, nativeElement);
          };

          this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            nativeElement.addEventListener('focus', focusListener, true);
            nativeElement.addEventListener('blur', blurListener, true);
          }); // Create an unlisten function for later.


          info.unlisten =
          /**
          * @return {?}
          */
          function () {
            nativeElement.removeEventListener('focus', focusListener, true);
            nativeElement.removeEventListener('blur', blurListener, true);
          };

          return info.subject.asObservable();
        }
        /**
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "stopMonitoring",
        value: function stopMonitoring(element) {
          /** @type {?} */
          var nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceElement"])(element);
          /** @type {?} */

          var elementInfo = this._elementInfo.get(nativeElement);

          if (elementInfo) {
            elementInfo.unlisten();
            elementInfo.subject.complete();

            this._setClasses(nativeElement);

            this._elementInfo["delete"](nativeElement);

            this._decrementMonitoredElementCount();
          }
        }
        /**
         * @param {?} element
         * @param {?} origin
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "focusVia",
        value: function focusVia(element, origin, options) {
          /** @type {?} */
          var nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceElement"])(element);

          this._setOriginForCurrentEventQueue(origin); // `focus` isn't available on the server


          if (typeof nativeElement.focus === 'function') {
            // Cast the element to `any`, because the TS typings don't have the `options` parameter yet.

            /** @type {?} */
            nativeElement.focus(options);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _this16 = this;

          this._elementInfo.forEach(
          /**
          * @param {?} _info
          * @param {?} element
          * @return {?}
          */
          function (_info, element) {
            return _this16.stopMonitoring(element);
          });
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
         * @private
         * @param {?} element
         * @param {?} className
         * @param {?} shouldSet
         * @return {?}
         */

      }, {
        key: "_toggleClass",
        value: function _toggleClass(element, className, shouldSet) {
          if (shouldSet) {
            element.classList.add(className);
          } else {
            element.classList.remove(className);
          }
        }
        /**
         * Sets the focus classes on the element based on the given focus origin.
         * @private
         * @param {?} element The element to update the classes on.
         * @param {?=} origin The focus origin.
         * @return {?}
         */

      }, {
        key: "_setClasses",
        value: function _setClasses(element, origin) {
          /** @type {?} */
          var elementInfo = this._elementInfo.get(element);

          if (elementInfo) {
            this._toggleClass(element, 'cdk-focused', !!origin);

            this._toggleClass(element, 'cdk-touch-focused', origin === 'touch');

            this._toggleClass(element, 'cdk-keyboard-focused', origin === 'keyboard');

            this._toggleClass(element, 'cdk-mouse-focused', origin === 'mouse');

            this._toggleClass(element, 'cdk-program-focused', origin === 'program');
          }
        }
        /**
         * Sets the origin and schedules an async function to clear it at the end of the event queue.
         * @private
         * @param {?} origin The origin to set.
         * @return {?}
         */

      }, {
        key: "_setOriginForCurrentEventQueue",
        value: function _setOriginForCurrentEventQueue(origin) {
          var _this17 = this;

          this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            _this17._origin = origin; // Sometimes the focus origin won't be valid in Firefox because Firefox seems to focus *one*
            // tick after the interaction event fired. To ensure the focus origin is always correct,
            // the focus origin will be determined at the beginning of the next tick.

            _this17._originTimeoutId = setTimeout(
            /**
            * @return {?}
            */
            function () {
              return _this17._origin = null;
            }, 1);
          });
        }
        /**
         * Checks whether the given focus event was caused by a touchstart event.
         * @private
         * @param {?} event The focus event to check.
         * @return {?} Whether the event was caused by a touch.
         */

      }, {
        key: "_wasCausedByTouch",
        value: function _wasCausedByTouch(event) {
          // Note(mmalerba): This implementation is not quite perfect, there is a small edge case.
          // Consider the following dom structure:
          //
          // <div #parent tabindex="0" cdkFocusClasses>
          //   <div #child (click)="#parent.focus()"></div>
          // </div>
          //
          // If the user touches the #child element and the #parent is programmatically focused as a
          // result, this code will still consider it to have been caused by the touch event and will
          // apply the cdk-touch-focused class rather than the cdk-program-focused class. This is a
          // relatively small edge-case that can be worked around by using
          // focusVia(parentEl, 'program') to focus the parent element.
          //
          // If we decide that we absolutely must handle this case correctly, we can do so by listening
          // for the first focus event after the touchstart, and then the first blur event after that
          // focus event. When that blur event fires we know that whatever follows is not a result of the
          // touchstart.

          /** @type {?} */
          var focusTarget = event.target;
          return this._lastTouchTarget instanceof Node && focusTarget instanceof Node && (focusTarget === this._lastTouchTarget || focusTarget.contains(this._lastTouchTarget));
        }
        /**
         * Handles focus events on a registered element.
         * @private
         * @param {?} event The focus event.
         * @param {?} element The monitored element.
         * @return {?}
         */

      }, {
        key: "_onFocus",
        value: function _onFocus(event, element) {
          // NOTE(mmalerba): We currently set the classes based on the focus origin of the most recent
          // focus event affecting the monitored element. If we want to use the origin of the first event
          // instead we should check for the cdk-focused class here and return if the element already has
          // it. (This only matters for elements that have includesChildren = true).
          // NOTE(mmalerba): We currently set the classes based on the focus origin of the most recent
          // focus event affecting the monitored element. If we want to use the origin of the first event
          // instead we should check for the cdk-focused class here and return if the element already has
          // it. (This only matters for elements that have includesChildren = true).
          // If we are not counting child-element-focus as focused, make sure that the event target is the
          // monitored element itself.

          /** @type {?} */
          var elementInfo = this._elementInfo.get(element);

          if (!elementInfo || !elementInfo.checkChildren && element !== event.target) {
            return;
          } // If we couldn't detect a cause for the focus event, it's due to one of three reasons:
          // 1) The window has just regained focus, in which case we want to restore the focused state of
          //    the element from before the window blurred.
          // 2) It was caused by a touch event, in which case we mark the origin as 'touch'.
          // 3) The element was programmatically focused, in which case we should mark the origin as
          //    'program'.

          /** @type {?} */


          var origin = this._origin;

          if (!origin) {
            if (this._windowFocused && this._lastFocusOrigin) {
              origin = this._lastFocusOrigin;
            } else if (this._wasCausedByTouch(event)) {
              origin = 'touch';
            } else {
              origin = 'program';
            }
          }

          this._setClasses(element, origin);

          this._emitOrigin(elementInfo.subject, origin);

          this._lastFocusOrigin = origin;
        }
        /**
         * Handles blur events on a registered element.
         * @param {?} event The blur event.
         * @param {?} element The monitored element.
         * @return {?}
         */

      }, {
        key: "_onBlur",
        value: function _onBlur(event, element) {
          // If we are counting child-element-focus as focused, make sure that we aren't just blurring in
          // order to focus another child of the monitored element.

          /** @type {?} */
          var elementInfo = this._elementInfo.get(element);

          if (!elementInfo || elementInfo.checkChildren && event.relatedTarget instanceof Node && element.contains(event.relatedTarget)) {
            return;
          }

          this._setClasses(element);

          this._emitOrigin(elementInfo.subject, null);
        }
        /**
         * @private
         * @param {?} subject
         * @param {?} origin
         * @return {?}
         */

      }, {
        key: "_emitOrigin",
        value: function _emitOrigin(subject, origin) {
          this._ngZone.run(
          /**
          * @return {?}
          */
          function () {
            return subject.next(origin);
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_incrementMonitoredElementCount",
        value: function _incrementMonitoredElementCount() {
          var _this18 = this;

          // Register global listeners when first element is monitored.
          if (++this._monitoredElementCount == 1 && this._platform.isBrowser) {
            // Note: we listen to events in the capture phase so we
            // can detect them even if the user stops propagation.
            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              /** @type {?} */
              var document = _this18._getDocument();
              /** @type {?} */


              var window = _this18._getWindow();

              document.addEventListener('keydown', _this18._documentKeydownListener, captureEventListenerOptions);
              document.addEventListener('mousedown', _this18._documentMousedownListener, captureEventListenerOptions);
              document.addEventListener('touchstart', _this18._documentTouchstartListener, captureEventListenerOptions);
              window.addEventListener('focus', _this18._windowFocusListener);
            });
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_decrementMonitoredElementCount",
        value: function _decrementMonitoredElementCount() {
          // Unregister global listeners when last element is unmonitored.
          if (! --this._monitoredElementCount) {
            /** @type {?} */
            var _document2 = this._getDocument();
            /** @type {?} */


            var _window = this._getWindow();

            _document2.removeEventListener('keydown', this._documentKeydownListener, captureEventListenerOptions);

            _document2.removeEventListener('mousedown', this._documentMousedownListener, captureEventListenerOptions);

            _document2.removeEventListener('touchstart', this._documentTouchstartListener, captureEventListenerOptions);

            _window.removeEventListener('focus', this._windowFocusListener); // Clear timeouts for all potentially pending timeouts to prevent the leaks.


            clearTimeout(this._windowFocusTimeoutId);
            clearTimeout(this._touchTimeoutId);
            clearTimeout(this._originTimeoutId);
          }
        }
      }]);

      return FocusMonitor;
    }();

    FocusMonitor.ɵfac = function FocusMonitor_Factory(t) {
      return new (t || FocusMonitor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"], 8));
    };
    /** @nocollapse */


    FocusMonitor.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
        }]
      }];
    };
    /** @nocollapse */


    FocusMonitor.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function FocusMonitor_Factory() {
        return new FocusMonitor(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"], 8));
      },
      token: FocusMonitor,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FocusMonitor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * Directive that determines how a particular element was focused (via keyboard, mouse, touch, or
     * programmatically) and adds corresponding classes to the element.
     *
     * There are two variants of this directive:
     * 1) cdkMonitorElementFocus: does not consider an element to be focused if one of its children is
     *    focused.
     * 2) cdkMonitorSubtreeFocus: considers an element focused if it or any of its children are focused.
     */


    var CdkMonitorFocus = /*#__PURE__*/function () {
      /**
       * @param {?} _elementRef
       * @param {?} _focusMonitor
       */
      function CdkMonitorFocus(_elementRef, _focusMonitor) {
        var _this19 = this;

        _classCallCheck(this, CdkMonitorFocus);

        this._elementRef = _elementRef;
        this._focusMonitor = _focusMonitor;
        this.cdkFocusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._monitorSubscription = this._focusMonitor.monitor(this._elementRef, this._elementRef.nativeElement.hasAttribute('cdkMonitorSubtreeFocus')).subscribe(
        /**
        * @param {?} origin
        * @return {?}
        */
        function (origin) {
          return _this19.cdkFocusChange.emit(origin);
        });
      }
      /**
       * @return {?}
       */


      _createClass(CdkMonitorFocus, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._focusMonitor.stopMonitoring(this._elementRef);

          this._monitorSubscription.unsubscribe();
        }
      }]);

      return CdkMonitorFocus;
    }();

    CdkMonitorFocus.ɵfac = function CdkMonitorFocus_Factory(t) {
      return new (t || CdkMonitorFocus)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FocusMonitor));
    };

    CdkMonitorFocus.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkMonitorFocus,
      selectors: [["", "cdkMonitorElementFocus", ""], ["", "cdkMonitorSubtreeFocus", ""]],
      outputs: {
        cdkFocusChange: "cdkFocusChange"
      }
    });
    /** @nocollapse */

    CdkMonitorFocus.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: FocusMonitor
      }];
    };

    CdkMonitorFocus.propDecorators = {
      cdkFocusChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkMonitorFocus, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: FocusMonitor
        }];
      }, {
        cdkFocusChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/fake-mousedown.ts
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
     * Screenreaders will often fire fake mousedown events when a focusable element
     * is activated using the keyboard. We can typically distinguish between these faked
     * mousedown events and real mousedown events using the "buttons" property. While
     * real mousedowns will indicate the mouse button that was pressed (e.g. "1" for
     * the left mouse button), faked mousedowns will usually set the property value to 0.
     * @param {?} event
     * @return {?}
     */


    function isFakeMousedownFromScreenReader(event) {
      return event.buttons === 0;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/high-contrast-mode/high-contrast-mode-detector.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @enum {number} */


    var HighContrastMode = {
      NONE: 0,
      BLACK_ON_WHITE: 1,
      WHITE_ON_BLACK: 2
    };
    /**
     * CSS class applied to the document body when in black-on-white high-contrast mode.
     * @type {?}
     */

    var BLACK_ON_WHITE_CSS_CLASS = 'cdk-high-contrast-black-on-white';
    /**
     * CSS class applied to the document body when in white-on-black high-contrast mode.
     * @type {?}
     */

    var WHITE_ON_BLACK_CSS_CLASS = 'cdk-high-contrast-white-on-black';
    /**
     * CSS class applied to the document body when in high-contrast mode.
     * @type {?}
     */

    var HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS = 'cdk-high-contrast-active';
    /**
     * Service to determine whether the browser is currently in a high-constrast-mode environment.
     *
     * Microsoft Windows supports an accessibility feature called "High Contrast Mode". This mode
     * changes the appearance of all applications, including web applications, to dramatically increase
     * contrast.
     *
     * IE, Edge, and Firefox currently support this mode. Chrome does not support Windows High Contrast
     * Mode. This service does not detect high-contrast mode as added by the Chrome "High Contrast"
     * browser extension.
     */

    var HighContrastModeDetector = /*#__PURE__*/function () {
      /**
       * @param {?} _platform
       * @param {?} document
       */
      function HighContrastModeDetector(_platform, document) {
        _classCallCheck(this, HighContrastModeDetector);

        this._platform = _platform;
        this._document = document;
      }
      /**
       * Gets the current high-constrast-mode for the page.
       * @return {?}
       */


      _createClass(HighContrastModeDetector, [{
        key: "getHighContrastMode",
        value: function getHighContrastMode() {
          if (!this._platform.isBrowser) {
            return 0
            /* NONE */
            ;
          } // Create a test element with an arbitrary background-color that is neither black nor
          // white; high-contrast mode will coerce the color to either black or white. Also ensure that
          // appending the test element to the DOM does not affect layout by absolutely positioning it

          /** @type {?} */


          var testElement = this._document.createElement('div');

          testElement.style.backgroundColor = 'rgb(1,2,3)';
          testElement.style.position = 'absolute';

          this._document.body.appendChild(testElement); // Get the computed style for the background color, collapsing spaces to normalize between
          // browsers. Once we get this color, we no longer need the test element. Access the `window`
          // via the document so we can fake it in tests.

          /** @type {?} */


          var documentWindow =
          /** @type {?} */
          this._document.defaultView;
          /** @type {?} */

          var computedColor = (documentWindow.getComputedStyle(testElement).backgroundColor || '').replace(/ /g, '');

          this._document.body.removeChild(testElement);

          switch (computedColor) {
            case 'rgb(0,0,0)':
              return 2
              /* WHITE_ON_BLACK */
              ;

            case 'rgb(255,255,255)':
              return 1
              /* BLACK_ON_WHITE */
              ;
          }

          return 0
          /* NONE */
          ;
        }
        /**
         * Applies CSS classes indicating high-contrast mode to document body (browser-only).
         * @return {?}
         */

      }, {
        key: "_applyBodyHighContrastModeCssClasses",
        value: function _applyBodyHighContrastModeCssClasses() {
          if (this._platform.isBrowser && this._document.body) {
            /** @type {?} */
            var bodyClasses = this._document.body.classList; // IE11 doesn't support `classList` operations with multiple arguments

            bodyClasses.remove(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
            bodyClasses.remove(BLACK_ON_WHITE_CSS_CLASS);
            bodyClasses.remove(WHITE_ON_BLACK_CSS_CLASS);
            /** @type {?} */

            var mode = this.getHighContrastMode();

            if (mode === 1
            /* BLACK_ON_WHITE */
            ) {
                bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
                bodyClasses.add(BLACK_ON_WHITE_CSS_CLASS);
              } else if (mode === 2
            /* WHITE_ON_BLACK */
            ) {
                bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
                bodyClasses.add(WHITE_ON_BLACK_CSS_CLASS);
              }
          }
        }
      }]);

      return HighContrastModeDetector;
    }();

    HighContrastModeDetector.ɵfac = function HighContrastModeDetector_Factory(t) {
      return new (t || HighContrastModeDetector)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
    };
    /** @nocollapse */


    HighContrastModeDetector.ctorParameters = function () {
      return [{
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
        }]
      }];
    };
    /** @nocollapse */


    HighContrastModeDetector.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function HighContrastModeDetector_Factory() {
        return new HighContrastModeDetector(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
      },
      token: HighContrastModeDetector,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HighContrastModeDetector, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/a11y-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var A11yModule =
    /**
     * @param {?} highContrastModeDetector
     */
    function A11yModule(highContrastModeDetector) {
      _classCallCheck(this, A11yModule);

      highContrastModeDetector._applyBodyHighContrastModeCssClasses();
    };

    A11yModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: A11yModule
    });
    A11yModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function A11yModule_Factory(t) {
        return new (t || A11yModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](HighContrastModeDetector));
      },
      imports: [[_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ObserversModule"]]]
    });
    /** @nocollapse */

    A11yModule.ctorParameters = function () {
      return [{
        type: HighContrastModeDetector
      }];
    };

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](A11yModule, {
        declarations: function declarations() {
          return [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus];
        },
        imports: function imports() {
          return [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ObserversModule"]];
        },
        exports: function exports() {
          return [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](A11yModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ObserversModule"]],
          declarations: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
          exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]
        }]
      }], function () {
        return [{
          type: HighContrastModeDetector
        }];
      }, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/a11y/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=a11y.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js ***!
    \*********************************************************************/

  /*! exports provided: A, ALT, APOSTROPHE, AT_SIGN, B, BACKSLASH, BACKSPACE, C, CAPS_LOCK, CLOSE_SQUARE_BRACKET, COMMA, CONTEXT_MENU, CONTROL, D, DASH, DELETE, DOWN_ARROW, E, EIGHT, END, ENTER, EQUALS, ESCAPE, F, F1, F10, F11, F12, F2, F3, F4, F5, F6, F7, F8, F9, FF_EQUALS, FF_MINUS, FF_MUTE, FF_SEMICOLON, FF_VOLUME_DOWN, FF_VOLUME_UP, FIRST_MEDIA, FIVE, FOUR, G, H, HOME, I, INSERT, J, K, L, LAST_MEDIA, LEFT_ARROW, M, MAC_ENTER, MAC_META, MAC_WK_CMD_LEFT, MAC_WK_CMD_RIGHT, META, MUTE, N, NINE, NUMPAD_DIVIDE, NUMPAD_EIGHT, NUMPAD_FIVE, NUMPAD_FOUR, NUMPAD_MINUS, NUMPAD_MULTIPLY, NUMPAD_NINE, NUMPAD_ONE, NUMPAD_PERIOD, NUMPAD_PLUS, NUMPAD_SEVEN, NUMPAD_SIX, NUMPAD_THREE, NUMPAD_TWO, NUMPAD_ZERO, NUM_CENTER, NUM_LOCK, O, ONE, OPEN_SQUARE_BRACKET, P, PAGE_DOWN, PAGE_UP, PAUSE, PLUS_SIGN, PRINT_SCREEN, Q, QUESTION_MARK, R, RIGHT_ARROW, S, SCROLL_LOCK, SEMICOLON, SEVEN, SHIFT, SINGLE_QUOTE, SIX, SLASH, SPACE, T, TAB, THREE, TILDE, TWO, U, UP_ARROW, V, VOLUME_DOWN, VOLUME_UP, W, X, Y, Z, ZERO, hasModifierKey */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015KeycodesJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "A", function () {
      return A;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ALT", function () {
      return ALT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "APOSTROPHE", function () {
      return APOSTROPHE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AT_SIGN", function () {
      return AT_SIGN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "B", function () {
      return B;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BACKSLASH", function () {
      return BACKSLASH;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BACKSPACE", function () {
      return BACKSPACE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "C", function () {
      return C;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CAPS_LOCK", function () {
      return CAPS_LOCK;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CLOSE_SQUARE_BRACKET", function () {
      return CLOSE_SQUARE_BRACKET;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "COMMA", function () {
      return COMMA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CONTEXT_MENU", function () {
      return CONTEXT_MENU;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CONTROL", function () {
      return CONTROL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "D", function () {
      return D;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DASH", function () {
      return DASH;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DELETE", function () {
      return DELETE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DOWN_ARROW", function () {
      return DOWN_ARROW;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "E", function () {
      return E;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EIGHT", function () {
      return EIGHT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "END", function () {
      return END;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ENTER", function () {
      return ENTER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EQUALS", function () {
      return EQUALS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ESCAPE", function () {
      return ESCAPE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F", function () {
      return F;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F1", function () {
      return F1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F10", function () {
      return F10;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F11", function () {
      return F11;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F12", function () {
      return F12;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F2", function () {
      return F2;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F3", function () {
      return F3;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F4", function () {
      return F4;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F5", function () {
      return F5;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F6", function () {
      return F6;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F7", function () {
      return F7;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F8", function () {
      return F8;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F9", function () {
      return F9;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FF_EQUALS", function () {
      return FF_EQUALS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FF_MINUS", function () {
      return FF_MINUS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FF_MUTE", function () {
      return FF_MUTE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FF_SEMICOLON", function () {
      return FF_SEMICOLON;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FF_VOLUME_DOWN", function () {
      return FF_VOLUME_DOWN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FF_VOLUME_UP", function () {
      return FF_VOLUME_UP;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FIRST_MEDIA", function () {
      return FIRST_MEDIA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FIVE", function () {
      return FIVE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FOUR", function () {
      return FOUR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "G", function () {
      return G;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "H", function () {
      return H;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HOME", function () {
      return HOME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "I", function () {
      return I;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "INSERT", function () {
      return INSERT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "J", function () {
      return J;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "K", function () {
      return K;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "L", function () {
      return L;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LAST_MEDIA", function () {
      return LAST_MEDIA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LEFT_ARROW", function () {
      return LEFT_ARROW;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "M", function () {
      return M;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAC_ENTER", function () {
      return MAC_ENTER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAC_META", function () {
      return MAC_META;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAC_WK_CMD_LEFT", function () {
      return MAC_WK_CMD_LEFT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAC_WK_CMD_RIGHT", function () {
      return MAC_WK_CMD_RIGHT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "META", function () {
      return META;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MUTE", function () {
      return MUTE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "N", function () {
      return N;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NINE", function () {
      return NINE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_DIVIDE", function () {
      return NUMPAD_DIVIDE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_EIGHT", function () {
      return NUMPAD_EIGHT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_FIVE", function () {
      return NUMPAD_FIVE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_FOUR", function () {
      return NUMPAD_FOUR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_MINUS", function () {
      return NUMPAD_MINUS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_MULTIPLY", function () {
      return NUMPAD_MULTIPLY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_NINE", function () {
      return NUMPAD_NINE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_ONE", function () {
      return NUMPAD_ONE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_PERIOD", function () {
      return NUMPAD_PERIOD;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_PLUS", function () {
      return NUMPAD_PLUS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_SEVEN", function () {
      return NUMPAD_SEVEN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_SIX", function () {
      return NUMPAD_SIX;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_THREE", function () {
      return NUMPAD_THREE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_TWO", function () {
      return NUMPAD_TWO;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_ZERO", function () {
      return NUMPAD_ZERO;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUM_CENTER", function () {
      return NUM_CENTER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUM_LOCK", function () {
      return NUM_LOCK;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "O", function () {
      return O;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ONE", function () {
      return ONE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OPEN_SQUARE_BRACKET", function () {
      return OPEN_SQUARE_BRACKET;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "P", function () {
      return P;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PAGE_DOWN", function () {
      return PAGE_DOWN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PAGE_UP", function () {
      return PAGE_UP;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PAUSE", function () {
      return PAUSE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PLUS_SIGN", function () {
      return PLUS_SIGN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PRINT_SCREEN", function () {
      return PRINT_SCREEN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Q", function () {
      return Q;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QUESTION_MARK", function () {
      return QUESTION_MARK;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "R", function () {
      return R;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RIGHT_ARROW", function () {
      return RIGHT_ARROW;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S", function () {
      return S;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SCROLL_LOCK", function () {
      return SCROLL_LOCK;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SEMICOLON", function () {
      return SEMICOLON;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SEVEN", function () {
      return SEVEN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SHIFT", function () {
      return SHIFT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SINGLE_QUOTE", function () {
      return SINGLE_QUOTE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SIX", function () {
      return SIX;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SLASH", function () {
      return SLASH;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SPACE", function () {
      return SPACE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "T", function () {
      return T;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TAB", function () {
      return TAB;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "THREE", function () {
      return THREE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TILDE", function () {
      return TILDE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TWO", function () {
      return TWO;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "U", function () {
      return U;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UP_ARROW", function () {
      return UP_ARROW;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "V", function () {
      return V;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VOLUME_DOWN", function () {
      return VOLUME_DOWN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VOLUME_UP", function () {
      return VOLUME_UP;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "W", function () {
      return W;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "X", function () {
      return X;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Y", function () {
      return Y;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Z", function () {
      return Z;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ZERO", function () {
      return ZERO;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "hasModifierKey", function () {
      return hasModifierKey;
    });
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/keycodes/keycodes.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** @type {?} */


    var MAC_ENTER = 3;
    /** @type {?} */

    var BACKSPACE = 8;
    /** @type {?} */

    var TAB = 9;
    /** @type {?} */

    var NUM_CENTER = 12;
    /** @type {?} */

    var ENTER = 13;
    /** @type {?} */

    var SHIFT = 16;
    /** @type {?} */

    var CONTROL = 17;
    /** @type {?} */

    var ALT = 18;
    /** @type {?} */

    var PAUSE = 19;
    /** @type {?} */

    var CAPS_LOCK = 20;
    /** @type {?} */

    var ESCAPE = 27;
    /** @type {?} */

    var SPACE = 32;
    /** @type {?} */

    var PAGE_UP = 33;
    /** @type {?} */

    var PAGE_DOWN = 34;
    /** @type {?} */

    var END = 35;
    /** @type {?} */

    var HOME = 36;
    /** @type {?} */

    var LEFT_ARROW = 37;
    /** @type {?} */

    var UP_ARROW = 38;
    /** @type {?} */

    var RIGHT_ARROW = 39;
    /** @type {?} */

    var DOWN_ARROW = 40;
    /** @type {?} */

    var PLUS_SIGN = 43;
    /** @type {?} */

    var PRINT_SCREEN = 44;
    /** @type {?} */

    var INSERT = 45;
    /** @type {?} */

    var DELETE = 46;
    /** @type {?} */

    var ZERO = 48;
    /** @type {?} */

    var ONE = 49;
    /** @type {?} */

    var TWO = 50;
    /** @type {?} */

    var THREE = 51;
    /** @type {?} */

    var FOUR = 52;
    /** @type {?} */

    var FIVE = 53;
    /** @type {?} */

    var SIX = 54;
    /** @type {?} */

    var SEVEN = 55;
    /** @type {?} */

    var EIGHT = 56;
    /** @type {?} */

    var NINE = 57;
    /** @type {?} */

    var FF_SEMICOLON = 59; // Firefox (Gecko) fires this for semicolon instead of 186

    /** @type {?} */

    var FF_EQUALS = 61; // Firefox (Gecko) fires this for equals instead of 187

    /** @type {?} */

    var QUESTION_MARK = 63;
    /** @type {?} */

    var AT_SIGN = 64;
    /** @type {?} */

    var A = 65;
    /** @type {?} */

    var B = 66;
    /** @type {?} */

    var C = 67;
    /** @type {?} */

    var D = 68;
    /** @type {?} */

    var E = 69;
    /** @type {?} */

    var F = 70;
    /** @type {?} */

    var G = 71;
    /** @type {?} */

    var H = 72;
    /** @type {?} */

    var I = 73;
    /** @type {?} */

    var J = 74;
    /** @type {?} */

    var K = 75;
    /** @type {?} */

    var L = 76;
    /** @type {?} */

    var M = 77;
    /** @type {?} */

    var N = 78;
    /** @type {?} */

    var O = 79;
    /** @type {?} */

    var P = 80;
    /** @type {?} */

    var Q = 81;
    /** @type {?} */

    var R = 82;
    /** @type {?} */

    var S = 83;
    /** @type {?} */

    var T = 84;
    /** @type {?} */

    var U = 85;
    /** @type {?} */

    var V = 86;
    /** @type {?} */

    var W = 87;
    /** @type {?} */

    var X = 88;
    /** @type {?} */

    var Y = 89;
    /** @type {?} */

    var Z = 90;
    /** @type {?} */

    var META = 91; // WIN_KEY_LEFT

    /** @type {?} */

    var MAC_WK_CMD_LEFT = 91;
    /** @type {?} */

    var MAC_WK_CMD_RIGHT = 93;
    /** @type {?} */

    var CONTEXT_MENU = 93;
    /** @type {?} */

    var NUMPAD_ZERO = 96;
    /** @type {?} */

    var NUMPAD_ONE = 97;
    /** @type {?} */

    var NUMPAD_TWO = 98;
    /** @type {?} */

    var NUMPAD_THREE = 99;
    /** @type {?} */

    var NUMPAD_FOUR = 100;
    /** @type {?} */

    var NUMPAD_FIVE = 101;
    /** @type {?} */

    var NUMPAD_SIX = 102;
    /** @type {?} */

    var NUMPAD_SEVEN = 103;
    /** @type {?} */

    var NUMPAD_EIGHT = 104;
    /** @type {?} */

    var NUMPAD_NINE = 105;
    /** @type {?} */

    var NUMPAD_MULTIPLY = 106;
    /** @type {?} */

    var NUMPAD_PLUS = 107;
    /** @type {?} */

    var NUMPAD_MINUS = 109;
    /** @type {?} */

    var NUMPAD_PERIOD = 110;
    /** @type {?} */

    var NUMPAD_DIVIDE = 111;
    /** @type {?} */

    var F1 = 112;
    /** @type {?} */

    var F2 = 113;
    /** @type {?} */

    var F3 = 114;
    /** @type {?} */

    var F4 = 115;
    /** @type {?} */

    var F5 = 116;
    /** @type {?} */

    var F6 = 117;
    /** @type {?} */

    var F7 = 118;
    /** @type {?} */

    var F8 = 119;
    /** @type {?} */

    var F9 = 120;
    /** @type {?} */

    var F10 = 121;
    /** @type {?} */

    var F11 = 122;
    /** @type {?} */

    var F12 = 123;
    /** @type {?} */

    var NUM_LOCK = 144;
    /** @type {?} */

    var SCROLL_LOCK = 145;
    /** @type {?} */

    var FIRST_MEDIA = 166;
    /** @type {?} */

    var FF_MINUS = 173;
    /** @type {?} */

    var MUTE = 173; // Firefox (Gecko) fires 181 for MUTE

    /** @type {?} */

    var VOLUME_DOWN = 174; // Firefox (Gecko) fires 182 for VOLUME_DOWN

    /** @type {?} */

    var VOLUME_UP = 175; // Firefox (Gecko) fires 183 for VOLUME_UP

    /** @type {?} */

    var FF_MUTE = 181;
    /** @type {?} */

    var FF_VOLUME_DOWN = 182;
    /** @type {?} */

    var LAST_MEDIA = 183;
    /** @type {?} */

    var FF_VOLUME_UP = 183;
    /** @type {?} */

    var SEMICOLON = 186; // Firefox (Gecko) fires 59 for SEMICOLON

    /** @type {?} */

    var EQUALS = 187; // Firefox (Gecko) fires 61 for EQUALS

    /** @type {?} */

    var COMMA = 188;
    /** @type {?} */

    var DASH = 189; // Firefox (Gecko) fires 173 for DASH/MINUS

    /** @type {?} */

    var SLASH = 191;
    /** @type {?} */

    var APOSTROPHE = 192;
    /** @type {?} */

    var TILDE = 192;
    /** @type {?} */

    var OPEN_SQUARE_BRACKET = 219;
    /** @type {?} */

    var BACKSLASH = 220;
    /** @type {?} */

    var CLOSE_SQUARE_BRACKET = 221;
    /** @type {?} */

    var SINGLE_QUOTE = 222;
    /** @type {?} */

    var MAC_META = 224;
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/keycodes/modifiers.ts
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
     * Checks whether a modifier key is pressed.
     * @param {?} event Event to be checked.
     * @param {...?} modifiers
     * @return {?}
     */

    function hasModifierKey(event) {
      for (var _len2 = arguments.length, modifiers = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        modifiers[_key2 - 1] = arguments[_key2];
      }

      if (modifiers.length) {
        return modifiers.some(
        /**
        * @param {?} modifier
        * @return {?}
        */
        function (modifier) {
          return event[modifier];
        });
      }

      return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/keycodes/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=keycodes.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/observers.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/observers.js ***!
    \**********************************************************************/

  /*! exports provided: CdkObserveContent, ContentObserver, MutationObserverFactory, ObserversModule */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015ObserversJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkObserveContent", function () {
      return CdkObserveContent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentObserver", function () {
      return ContentObserver;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MutationObserverFactory", function () {
      return MutationObserverFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ObserversModule", function () {
      return ObserversModule;
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
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/observers/observe-content.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Factory that creates a new MutationObserver and allows us to stub it out in unit tests.
     * \@docs-private
     */


    var MutationObserverFactory = /*#__PURE__*/function () {
      function MutationObserverFactory() {
        _classCallCheck(this, MutationObserverFactory);
      }

      _createClass(MutationObserverFactory, [{
        key: "create",

        /**
         * @param {?} callback
         * @return {?}
         */
        value: function create(callback) {
          return typeof MutationObserver === 'undefined' ? null : new MutationObserver(callback);
        }
      }]);

      return MutationObserverFactory;
    }();

    MutationObserverFactory.ɵfac = function MutationObserverFactory_Factory(t) {
      return new (t || MutationObserverFactory)();
    };
    /** @nocollapse */


    MutationObserverFactory.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function MutationObserverFactory_Factory() {
        return new MutationObserverFactory();
      },
      token: MutationObserverFactory,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MutationObserverFactory, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /**
     * An injectable service that allows watching elements for changes to their content.
     */


    var ContentObserver = /*#__PURE__*/function () {
      /**
       * @param {?} _mutationObserverFactory
       */
      function ContentObserver(_mutationObserverFactory) {
        _classCallCheck(this, ContentObserver);

        this._mutationObserverFactory = _mutationObserverFactory;
        /**
         * Keeps track of the existing MutationObservers so they can be reused.
         */

        this._observedElements = new Map();
      }
      /**
       * @return {?}
       */


      _createClass(ContentObserver, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _this20 = this;

          this._observedElements.forEach(
          /**
          * @param {?} _
          * @param {?} element
          * @return {?}
          */
          function (_, element) {
            return _this20._cleanupObserver(element);
          });
        }
        /**
         * @param {?} elementOrRef
         * @return {?}
         */

      }, {
        key: "observe",
        value: function observe(elementOrRef) {
          var _this21 = this;

          /** @type {?} */
          var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceElement"])(elementOrRef);
          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](
          /**
          * @param {?} observer
          * @return {?}
          */
          function (observer) {
            /** @type {?} */
            var stream = _this21._observeElement(element);
            /** @type {?} */


            var subscription = stream.subscribe(observer);
            return (
              /**
              * @return {?}
              */
              function () {
                subscription.unsubscribe();

                _this21._unobserveElement(element);
              }
            );
          });
        }
        /**
         * Observes the given element by using the existing MutationObserver if available, or creating a
         * new one if not.
         * @private
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "_observeElement",
        value: function _observeElement(element) {
          if (!this._observedElements.has(element)) {
            /** @type {?} */
            var stream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            /** @type {?} */

            var observer = this._mutationObserverFactory.create(
            /**
            * @param {?} mutations
            * @return {?}
            */
            function (mutations) {
              return stream.next(mutations);
            });

            if (observer) {
              observer.observe(element, {
                characterData: true,
                childList: true,
                subtree: true
              });
            }

            this._observedElements.set(element, {
              observer: observer,
              stream: stream,
              count: 1
            });
          } else {
            /** @type {?} */this._observedElements.get(element).count++;
          }

          return (
            /** @type {?} */
            this._observedElements.get(element).stream
          );
        }
        /**
         * Un-observes the given element and cleans up the underlying MutationObserver if nobody else is
         * observing this element.
         * @private
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "_unobserveElement",
        value: function _unobserveElement(element) {
          if (this._observedElements.has(element)) {
            /** @type {?} */this._observedElements.get(element).count--;

            if (!
            /** @type {?} */
            this._observedElements.get(element).count) {
              this._cleanupObserver(element);
            }
          }
        }
        /**
         * Clean up the underlying MutationObserver for the specified element.
         * @private
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "_cleanupObserver",
        value: function _cleanupObserver(element) {
          if (this._observedElements.has(element)) {
            var _this$_observedElemen =
            /** @type {?} */
            this._observedElements.get(element),
                observer = _this$_observedElemen.observer,
                stream = _this$_observedElemen.stream;

            if (observer) {
              observer.disconnect();
            }

            stream.complete();

            this._observedElements["delete"](element);
          }
        }
      }]);

      return ContentObserver;
    }();

    ContentObserver.ɵfac = function ContentObserver_Factory(t) {
      return new (t || ContentObserver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MutationObserverFactory));
    };
    /** @nocollapse */


    ContentObserver.ctorParameters = function () {
      return [{
        type: MutationObserverFactory
      }];
    };
    /** @nocollapse */


    ContentObserver.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function ContentObserver_Factory() {
        return new ContentObserver(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(MutationObserverFactory));
      },
      token: ContentObserver,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContentObserver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: MutationObserverFactory
        }];
      }, null);
    })();

    if (false) {}
    /**
     * Directive that triggers a callback whenever the content of
     * its associated element has changed.
     */


    var CdkObserveContent = /*#__PURE__*/function () {
      /**
       * @param {?} _contentObserver
       * @param {?} _elementRef
       * @param {?} _ngZone
       */
      function CdkObserveContent(_contentObserver, _elementRef, _ngZone) {
        _classCallCheck(this, CdkObserveContent);

        this._contentObserver = _contentObserver;
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        /**
         * Event emitted for each change in the element's content.
         */

        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._disabled = false;
        this._currentSubscription = null;
      }
      /**
       * Whether observing content is disabled. This option can be used
       * to disconnect the underlying MutationObserver until it is needed.
       * @return {?}
       */


      _createClass(CdkObserveContent, [{
        key: "ngAfterContentInit",

        /**
         * @return {?}
         */
        value: function ngAfterContentInit() {
          if (!this._currentSubscription && !this.disabled) {
            this._subscribe();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._unsubscribe();
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_subscribe",
        value: function _subscribe() {
          var _this22 = this;

          this._unsubscribe();
          /** @type {?} */


          var stream = this._contentObserver.observe(this._elementRef); // TODO(mmalerba): We shouldn't be emitting on this @Output() outside the zone.
          // Consider brining it back inside the zone next time we're making breaking changes.
          // Bringing it back inside can cause things like infinite change detection loops and changed
          // after checked errors if people's code isn't handling it properly.


          this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            _this22._currentSubscription = (_this22.debounce ? stream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(_this22.debounce)) : stream).subscribe(_this22.event);
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_unsubscribe",
        value: function _unsubscribe() {
          if (this._currentSubscription) {
            this._currentSubscription.unsubscribe();
          }
        }
      }, {
        key: "disabled",
        get: function get() {
          return this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
          this._disabled ? this._unsubscribe() : this._subscribe();
        }
        /**
         * Debounce interval for emitting the changes.
         * @return {?}
         */

      }, {
        key: "debounce",
        get: function get() {
          return this._debounce;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._debounce = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value);

          this._subscribe();
        }
      }]);

      return CdkObserveContent;
    }();

    CdkObserveContent.ɵfac = function CdkObserveContent_Factory(t) {
      return new (t || CdkObserveContent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ContentObserver), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    CdkObserveContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkObserveContent,
      selectors: [["", "cdkObserveContent", ""]],
      inputs: {
        disabled: ["cdkObserveContentDisabled", "disabled"],
        debounce: "debounce"
      },
      outputs: {
        event: "cdkObserveContent"
      },
      exportAs: ["cdkObserveContent"]
    });
    /** @nocollapse */

    CdkObserveContent.ctorParameters = function () {
      return [{
        type: ContentObserver
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    CdkObserveContent.propDecorators = {
      event: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
        args: ['cdkObserveContent']
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkObserveContentDisabled']
      }],
      debounce: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkObserveContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[cdkObserveContent]',
          exportAs: 'cdkObserveContent'
        }]
      }], function () {
        return [{
          type: ContentObserver
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, {
        event: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['cdkObserveContent']
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkObserveContentDisabled']
        }],
        debounce: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    if (false) {}

    var ObserversModule = function ObserversModule() {
      _classCallCheck(this, ObserversModule);
    };

    ObserversModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ObserversModule
    });
    ObserversModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ObserversModule_Factory(t) {
        return new (t || ObserversModule)();
      },
      providers: [MutationObserverFactory]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ObserversModule, {
        declarations: [CdkObserveContent],
        exports: [CdkObserveContent]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ObserversModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          exports: [CdkObserveContent],
          declarations: [CdkObserveContent],
          providers: [MutationObserverFactory]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/observers/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=observers.js.map

    /***/

  }
}]);
//# sourceMappingURL=default~pages-angular-material-components-expansion-expansion-module~pages-angular-material-componen~5af9c64a-es5.js.map