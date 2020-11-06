function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-angular-material-components-expansion-expansion-module~pages-angular-material-componen~959d541f"], {
  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js":
  /*!************************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js ***!
    \************************************************************************/

  /*! exports provided: ArrayDataSource, DataSource, SelectionModel, UniqueSelectionDispatcher, getMultipleValuesInSingleSelectionError, isDataSource */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015CollectionsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArrayDataSource", function () {
      return ArrayDataSource;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataSource", function () {
      return DataSource;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectionModel", function () {
      return SelectionModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniqueSelectionDispatcher", function () {
      return UniqueSelectionDispatcher;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMultipleValuesInSingleSelectionError", function () {
      return getMultipleValuesInSingleSelectionError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isDataSource", function () {
      return isDataSource;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/collections/data-source.ts
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
     * @abstract
     * @template T
     */


    var DataSource = function DataSource() {
      _classCallCheck(this, DataSource);
    };

    if (false) {}
    /**
     * Checks whether an object is a data source.
     * @param {?} value
     * @return {?}
     */


    function isDataSource(value) {
      // Check if the value is a DataSource by observing if it has a connect function. Cannot
      // be checked as an `instanceof DataSource` since people could create their own sources
      // that match the interface, but don't extend DataSource.
      return value && typeof value.connect === 'function';
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/collections/array-data-source.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * DataSource wrapper for a native array.
     * @template T
     */


    var ArrayDataSource = /*#__PURE__*/function (_DataSource) {
      _inherits(ArrayDataSource, _DataSource);

      var _super = _createSuper(ArrayDataSource);

      /**
       * @param {?} _data
       */
      function ArrayDataSource(_data) {
        var _this;

        _classCallCheck(this, ArrayDataSource);

        _this = _super.call(this);
        _this._data = _data;
        return _this;
      }
      /**
       * @return {?}
       */


      _createClass(ArrayDataSource, [{
        key: "connect",
        value: function connect() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["isObservable"])(this._data) ? this._data : Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this._data);
        }
        /**
         * @return {?}
         */

      }, {
        key: "disconnect",
        value: function disconnect() {}
      }]);

      return ArrayDataSource;
    }(DataSource);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/collections/collection-viewer.ts
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
     * Interface for any component that provides a view of some data collection and wants to provide
     * information regarding the view and any changes made.
     * @record
     */


    function CollectionViewer() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/collections/selection-model.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Class to be used to power selecting one or more options from a list.
     * @template T
     */


    var SelectionModel = /*#__PURE__*/function () {
      /**
       * @param {?=} _multiple
       * @param {?=} initiallySelectedValues
       * @param {?=} _emitChanges
       */
      function SelectionModel() {
        var _this2 = this;

        var _multiple = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        var initiallySelectedValues = arguments.length > 1 ? arguments[1] : undefined;

        var _emitChanges = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        _classCallCheck(this, SelectionModel);

        this._multiple = _multiple;
        this._emitChanges = _emitChanges;
        /**
         * Currently-selected values.
         */

        this._selection = new Set();
        /**
         * Keeps track of the deselected options that haven't been emitted by the change event.
         */

        this._deselectedToEmit = [];
        /**
         * Keeps track of the selected options that haven't been emitted by the change event.
         */

        this._selectedToEmit = [];
        /**
         * Event emitted when the value has changed.
         */

        this.changed = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();

        if (initiallySelectedValues && initiallySelectedValues.length) {
          if (_multiple) {
            initiallySelectedValues.forEach(
            /**
            * @param {?} value
            * @return {?}
            */
            function (value) {
              return _this2._markSelected(value);
            });
          } else {
            this._markSelected(initiallySelectedValues[0]);
          } // Clear the array in order to avoid firing the change event for preselected values.


          this._selectedToEmit.length = 0;
        }
      }
      /**
       * Selected values.
       * @return {?}
       */


      _createClass(SelectionModel, [{
        key: "select",

        /**
         * Selects a value or an array of values.
         * @param {...?} values
         * @return {?}
         */
        value: function select() {
          var _this3 = this;

          for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
            values[_key] = arguments[_key];
          }

          this._verifyValueAssignment(values);

          values.forEach(
          /**
          * @param {?} value
          * @return {?}
          */
          function (value) {
            return _this3._markSelected(value);
          });

          this._emitChangeEvent();
        }
        /**
         * Deselects a value or an array of values.
         * @param {...?} values
         * @return {?}
         */

      }, {
        key: "deselect",
        value: function deselect() {
          var _this4 = this;

          for (var _len2 = arguments.length, values = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            values[_key2] = arguments[_key2];
          }

          this._verifyValueAssignment(values);

          values.forEach(
          /**
          * @param {?} value
          * @return {?}
          */
          function (value) {
            return _this4._unmarkSelected(value);
          });

          this._emitChangeEvent();
        }
        /**
         * Toggles a value between selected and deselected.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "toggle",
        value: function toggle(value) {
          this.isSelected(value) ? this.deselect(value) : this.select(value);
        }
        /**
         * Clears all of the selected values.
         * @return {?}
         */

      }, {
        key: "clear",
        value: function clear() {
          this._unmarkAll();

          this._emitChangeEvent();
        }
        /**
         * Determines whether a value is selected.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "isSelected",
        value: function isSelected(value) {
          return this._selection.has(value);
        }
        /**
         * Determines whether the model does not have a value.
         * @return {?}
         */

      }, {
        key: "isEmpty",
        value: function isEmpty() {
          return this._selection.size === 0;
        }
        /**
         * Determines whether the model has a value.
         * @return {?}
         */

      }, {
        key: "hasValue",
        value: function hasValue() {
          return !this.isEmpty();
        }
        /**
         * Sorts the selected values based on a predicate function.
         * @param {?=} predicate
         * @return {?}
         */

      }, {
        key: "sort",
        value: function sort(predicate) {
          if (this._multiple && this.selected) {
            /** @type {?} */
            this._selected.sort(predicate);
          }
        }
        /**
         * Gets whether multiple values can be selected.
         * @return {?}
         */

      }, {
        key: "isMultipleSelection",
        value: function isMultipleSelection() {
          return this._multiple;
        }
        /**
         * Emits a change event and clears the records of selected and deselected values.
         * @private
         * @return {?}
         */

      }, {
        key: "_emitChangeEvent",
        value: function _emitChangeEvent() {
          // Clear the selected values so they can be re-cached.
          this._selected = null;

          if (this._selectedToEmit.length || this._deselectedToEmit.length) {
            this.changed.next({
              source: this,
              added: this._selectedToEmit,
              removed: this._deselectedToEmit
            });
            this._deselectedToEmit = [];
            this._selectedToEmit = [];
          }
        }
        /**
         * Selects a value.
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_markSelected",
        value: function _markSelected(value) {
          if (!this.isSelected(value)) {
            if (!this._multiple) {
              this._unmarkAll();
            }

            this._selection.add(value);

            if (this._emitChanges) {
              this._selectedToEmit.push(value);
            }
          }
        }
        /**
         * Deselects a value.
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_unmarkSelected",
        value: function _unmarkSelected(value) {
          if (this.isSelected(value)) {
            this._selection["delete"](value);

            if (this._emitChanges) {
              this._deselectedToEmit.push(value);
            }
          }
        }
        /**
         * Clears out the selected values.
         * @private
         * @return {?}
         */

      }, {
        key: "_unmarkAll",
        value: function _unmarkAll() {
          var _this5 = this;

          if (!this.isEmpty()) {
            this._selection.forEach(
            /**
            * @param {?} value
            * @return {?}
            */
            function (value) {
              return _this5._unmarkSelected(value);
            });
          }
        }
        /**
         * Verifies the value assignment and throws an error if the specified value array is
         * including multiple values while the selection model is not supporting multiple values.
         * @private
         * @param {?} values
         * @return {?}
         */

      }, {
        key: "_verifyValueAssignment",
        value: function _verifyValueAssignment(values) {
          if (values.length > 1 && !this._multiple) {
            throw getMultipleValuesInSingleSelectionError();
          }
        }
      }, {
        key: "selected",
        get: function get() {
          if (!this._selected) {
            this._selected = Array.from(this._selection.values());
          }

          return this._selected;
        }
      }]);

      return SelectionModel;
    }();

    if (false) {}
    /**
     * Event emitted when the value of a MatSelectionModel has changed.
     * \@docs-private
     * @record
     * @template T
     */


    function SelectionChange() {}

    if (false) {}
    /**
     * Returns an error that reports that multiple values are passed into a selection model
     * with a single value.
     * \@docs-private
     * @return {?}
     */


    function getMultipleValuesInSingleSelectionError() {
      return Error('Cannot pass multiple values into SelectionModel with single-value mode.');
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/collections/unique-selection-dispatcher.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Class to coordinate unique selection based on name.
     * Intended to be consumed as an Angular service.
     * This service is needed because native radio change events are only fired on the item currently
     * being selected, and we still need to uncheck the previous selection.
     *
     * This service does not *store* any IDs and names because they may change at any time, so it is
     * less error-prone if they are simply passed through when the events occur.
     */


    var UniqueSelectionDispatcher = /*#__PURE__*/function () {
      function UniqueSelectionDispatcher() {
        _classCallCheck(this, UniqueSelectionDispatcher);

        this._listeners = [];
      }
      /**
       * Notify other items that selection for the given name has been set.
       * @param {?} id ID of the item.
       * @param {?} name Name of the item.
       * @return {?}
       */


      _createClass(UniqueSelectionDispatcher, [{
        key: "notify",
        value: function notify(id, name) {
          var _iterator = _createForOfIteratorHelper(this._listeners),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var listener = _step.value;
              listener(id, name);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        /**
         * Listen for future changes to item selection.
         * @param {?} listener
         * @return {?} Function used to deregister listener
         */

      }, {
        key: "listen",
        value: function listen(listener) {
          var _this6 = this;

          this._listeners.push(listener);

          return (
            /**
            * @return {?}
            */
            function () {
              _this6._listeners = _this6._listeners.filter(
              /**
              * @param {?} registered
              * @return {?}
              */
              function (registered) {
                return listener !== registered;
              });
            }
          );
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._listeners = [];
        }
      }]);

      return UniqueSelectionDispatcher;
    }();

    UniqueSelectionDispatcher.ɵfac = function UniqueSelectionDispatcher_Factory(t) {
      return new (t || UniqueSelectionDispatcher)();
    };
    /** @nocollapse */


    UniqueSelectionDispatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function UniqueSelectionDispatcher_Factory() {
        return new UniqueSelectionDispatcher();
      },
      token: UniqueSelectionDispatcher,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UniqueSelectionDispatcher, [{
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
     * Generated from: src/cdk/collections/tree-adapter.ts
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
     * Interface for a class that can flatten hierarchical structured data and re-expand the flattened
     * data back into its original structure. Should be used in conjunction with the cdk-tree.
     * @record
     * @template T
     */


    function TreeDataNodeFlattener() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/collections/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=collections.js.map

    /***/

  }
}]);
//# sourceMappingURL=default~pages-angular-material-components-expansion-expansion-module~pages-angular-material-componen~959d541f-es5.js.map