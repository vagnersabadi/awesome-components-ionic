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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-angular-material-components-expansion-expansion-module~pages-angular-material-componen~959d541f"], {
        /***/ "./node_modules/@angular/cdk/esm2015/collections.js": 
        /*!**********************************************************!*\
          !*** ./node_modules/@angular/cdk/esm2015/collections.js ***!
          \**********************************************************/
        /*! exports provided: UniqueSelectionDispatcher, ArrayDataSource, isDataSource, DataSource, getMultipleValuesInSingleSelectionError, SelectionModel */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueSelectionDispatcher", function () { return UniqueSelectionDispatcher; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayDataSource", function () { return ArrayDataSource; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDataSource", function () { return isDataSource; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSource", function () { return DataSource; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMultipleValuesInSingleSelectionError", function () { return getMultipleValuesInSingleSelectionError; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionModel", function () { return SelectionModel; });
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
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
             * @abstract
             * @template T
             */
            var DataSource = /** @class */ (function () {
                function DataSource() {
                }
                return DataSource;
            }());
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
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * DataSource wrapper for a native array.
             * @template T
             */
            var ArrayDataSource = /** @class */ (function (_super) {
                __extends(ArrayDataSource, _super);
                /**
                 * @param {?} _data
                 */
                function ArrayDataSource(_data) {
                    var _this = _super.call(this) || this;
                    _this._data = _data;
                    return _this;
                }
                /**
                 * @return {?}
                 */
                ArrayDataSource.prototype.connect = function () {
                    return this._data instanceof rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"] ? this._data : Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this._data);
                };
                /**
                 * @return {?}
                 */
                ArrayDataSource.prototype.disconnect = function () { };
                return ArrayDataSource;
            }(DataSource));
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Class to be used to power selecting one or more options from a list.
             * @template T
             */
            var SelectionModel = /** @class */ (function () {
                /**
                 * @param {?=} _multiple
                 * @param {?=} initiallySelectedValues
                 * @param {?=} _emitChanges
                 */
                function SelectionModel(_multiple, initiallySelectedValues, _emitChanges) {
                    var _this = this;
                    if (_multiple === void 0) { _multiple = false; }
                    if (_emitChanges === void 0) { _emitChanges = true; }
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
                    /**
                     * Event emitted when the value has changed.
                     * @deprecated Use `changed` instead.
                     * \@breaking-change 8.0.0 To be changed to `changed`
                     */
                    this.onChange = this.changed;
                    if (initiallySelectedValues && initiallySelectedValues.length) {
                        if (_multiple) {
                            initiallySelectedValues.forEach(( /**
                             * @param {?} value
                             * @return {?}
                             */function (/**
                             * @param {?} value
                             * @return {?}
                             */ value) { return _this._markSelected(value); }));
                        }
                        else {
                            this._markSelected(initiallySelectedValues[0]);
                        }
                        // Clear the array in order to avoid firing the change event for preselected values.
                        this._selectedToEmit.length = 0;
                    }
                }
                Object.defineProperty(SelectionModel.prototype, "selected", {
                    /**
                     * Selected values.
                     * @return {?}
                     */
                    get: function () {
                        if (!this._selected) {
                            this._selected = Array.from(this._selection.values());
                        }
                        return this._selected;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Selects a value or an array of values.
                 * @param {...?} values
                 * @return {?}
                 */
                SelectionModel.prototype.select = function () {
                    var _this = this;
                    var values = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        values[_i] = arguments[_i];
                    }
                    this._verifyValueAssignment(values);
                    values.forEach(( /**
                     * @param {?} value
                     * @return {?}
                     */function (/**
                     * @param {?} value
                     * @return {?}
                     */ value) { return _this._markSelected(value); }));
                    this._emitChangeEvent();
                };
                /**
                 * Deselects a value or an array of values.
                 * @param {...?} values
                 * @return {?}
                 */
                SelectionModel.prototype.deselect = function () {
                    var _this = this;
                    var values = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        values[_i] = arguments[_i];
                    }
                    this._verifyValueAssignment(values);
                    values.forEach(( /**
                     * @param {?} value
                     * @return {?}
                     */function (/**
                     * @param {?} value
                     * @return {?}
                     */ value) { return _this._unmarkSelected(value); }));
                    this._emitChangeEvent();
                };
                /**
                 * Toggles a value between selected and deselected.
                 * @param {?} value
                 * @return {?}
                 */
                SelectionModel.prototype.toggle = function (value) {
                    this.isSelected(value) ? this.deselect(value) : this.select(value);
                };
                /**
                 * Clears all of the selected values.
                 * @return {?}
                 */
                SelectionModel.prototype.clear = function () {
                    this._unmarkAll();
                    this._emitChangeEvent();
                };
                /**
                 * Determines whether a value is selected.
                 * @param {?} value
                 * @return {?}
                 */
                SelectionModel.prototype.isSelected = function (value) {
                    return this._selection.has(value);
                };
                /**
                 * Determines whether the model does not have a value.
                 * @return {?}
                 */
                SelectionModel.prototype.isEmpty = function () {
                    return this._selection.size === 0;
                };
                /**
                 * Determines whether the model has a value.
                 * @return {?}
                 */
                SelectionModel.prototype.hasValue = function () {
                    return !this.isEmpty();
                };
                /**
                 * Sorts the selected values based on a predicate function.
                 * @param {?=} predicate
                 * @return {?}
                 */
                SelectionModel.prototype.sort = function (predicate) {
                    if (this._multiple && this.selected) {
                        ( /** @type {?} */(this._selected)).sort(predicate);
                    }
                };
                /**
                 * Gets whether multiple values can be selected.
                 * @return {?}
                 */
                SelectionModel.prototype.isMultipleSelection = function () {
                    return this._multiple;
                };
                /**
                 * Emits a change event and clears the records of selected and deselected values.
                 * @private
                 * @return {?}
                 */
                SelectionModel.prototype._emitChangeEvent = function () {
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
                };
                /**
                 * Selects a value.
                 * @private
                 * @param {?} value
                 * @return {?}
                 */
                SelectionModel.prototype._markSelected = function (value) {
                    if (!this.isSelected(value)) {
                        if (!this._multiple) {
                            this._unmarkAll();
                        }
                        this._selection.add(value);
                        if (this._emitChanges) {
                            this._selectedToEmit.push(value);
                        }
                    }
                };
                /**
                 * Deselects a value.
                 * @private
                 * @param {?} value
                 * @return {?}
                 */
                SelectionModel.prototype._unmarkSelected = function (value) {
                    if (this.isSelected(value)) {
                        this._selection.delete(value);
                        if (this._emitChanges) {
                            this._deselectedToEmit.push(value);
                        }
                    }
                };
                /**
                 * Clears out the selected values.
                 * @private
                 * @return {?}
                 */
                SelectionModel.prototype._unmarkAll = function () {
                    var _this = this;
                    if (!this.isEmpty()) {
                        this._selection.forEach(( /**
                         * @param {?} value
                         * @return {?}
                         */function (/**
                         * @param {?} value
                         * @return {?}
                         */ value) { return _this._unmarkSelected(value); }));
                    }
                };
                /**
                 * Verifies the value assignment and throws an error if the specified value array is
                 * including multiple values while the selection model is not supporting multiple values.
                 * @private
                 * @param {?} values
                 * @return {?}
                 */
                SelectionModel.prototype._verifyValueAssignment = function (values) {
                    if (values.length > 1 && !this._multiple) {
                        throw getMultipleValuesInSingleSelectionError();
                    }
                };
                return SelectionModel;
            }());
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
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            var UniqueSelectionDispatcher = /** @class */ (function () {
                function UniqueSelectionDispatcher() {
                    this._listeners = [];
                }
                /**
                 * Notify other items that selection for the given name has been set.
                 * @param {?} id ID of the item.
                 * @param {?} name Name of the item.
                 * @return {?}
                 */
                UniqueSelectionDispatcher.prototype.notify = function (id, name) {
                    var e_1, _a;
                    try {
                        for (var _b = __values(this._listeners), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var listener = _c.value;
                            listener(id, name);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                };
                /**
                 * Listen for future changes to item selection.
                 * @param {?} listener
                 * @return {?} Function used to deregister listener
                 */
                UniqueSelectionDispatcher.prototype.listen = function (listener) {
                    var _this = this;
                    this._listeners.push(listener);
                    return ( /**
                     * @return {?}
                     */function () {
                        _this._listeners = _this._listeners.filter(( /**
                         * @param {?} registered
                         * @return {?}
                         */function (registered) {
                            return listener !== registered;
                        }));
                    });
                };
                /**
                 * @return {?}
                 */
                UniqueSelectionDispatcher.prototype.ngOnDestroy = function () {
                    this._listeners = [];
                };
                return UniqueSelectionDispatcher;
            }());
            UniqueSelectionDispatcher.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
            ];
            /** @nocollapse */ UniqueSelectionDispatcher.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function UniqueSelectionDispatcher_Factory() { return new UniqueSelectionDispatcher(); }, token: UniqueSelectionDispatcher, providedIn: "root" });
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
            //# sourceMappingURL=collections.js.map
            /***/ 
        })
    }]);
//# sourceMappingURL=default~pages-angular-material-components-expansion-expansion-module~pages-angular-material-componen~959d541f-es2015.js.map
//# sourceMappingURL=default~pages-angular-material-components-expansion-expansion-module~pages-angular-material-componen~959d541f-es5.js.map
//# sourceMappingURL=default~pages-angular-material-components-expansion-expansion-module~pages-angular-material-componen~959d541f-es5.js.map