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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-angular-material-components-mat-input-mat-input-module~pages-angular-material-componen~4d21505d"], {
        /***/ "./node_modules/@angular/cdk/esm2015/stepper.js": 
        /*!******************************************************!*\
          !*** ./node_modules/@angular/cdk/esm2015/stepper.js ***!
          \******************************************************/
        /*! exports provided: StepperSelectionEvent, STEP_STATE, STEPPER_GLOBAL_OPTIONS, MAT_STEPPER_GLOBAL_OPTIONS, CdkStep, CdkStepper, CdkStepLabel, CdkStepperNext, CdkStepperPrevious, CdkStepperModule, CdkStepHeader */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepperSelectionEvent", function () { return StepperSelectionEvent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEP_STATE", function () { return STEP_STATE; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEPPER_GLOBAL_OPTIONS", function () { return STEPPER_GLOBAL_OPTIONS; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_STEPPER_GLOBAL_OPTIONS", function () { return MAT_STEPPER_GLOBAL_OPTIONS; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStep", function () { return CdkStep; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStepper", function () { return CdkStepper; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStepLabel", function () { return CdkStepLabel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStepperNext", function () { return CdkStepperNext; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStepperPrevious", function () { return CdkStepperPrevious; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStepperModule", function () { return CdkStepperModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStepHeader", function () { return CdkStepHeader; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
            /* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm2015/bidi.js");
            /* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm2015/coercion.js");
            /* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
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
            var CdkStepHeader = /** @class */ (function () {
                /**
                 * @param {?} _elementRef
                 */
                function CdkStepHeader(_elementRef) {
                    this._elementRef = _elementRef;
                }
                /**
                 * Focuses the step header.
                 * @return {?}
                 */
                CdkStepHeader.prototype.focus = function () {
                    this._elementRef.nativeElement.focus();
                };
                return CdkStepHeader;
            }());
            CdkStepHeader.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[cdkStepHeader]',
                            host: {
                                'role': 'tab',
                            },
                        },] },
            ];
            /** @nocollapse */
            CdkStepHeader.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
            ]; };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var CdkStepLabel = /** @class */ (function () {
                /**
                 * @param {?} template
                 */
                function CdkStepLabel(/** @docs-private */ template) {
                    this.template = template;
                }
                return CdkStepLabel;
            }());
            CdkStepLabel.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[cdkStepLabel]',
                        },] },
            ];
            /** @nocollapse */
            CdkStepLabel.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
            ]; };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Used to generate unique ID for each stepper component.
             * @type {?}
             */
            var nextId = 0;
            /**
             * Change event emitted on selection changes.
             */
            var StepperSelectionEvent = /** @class */ (function () {
                function StepperSelectionEvent() {
                }
                return StepperSelectionEvent;
            }());
            /**
             * Enum to represent the different states of the steps.
             * @type {?}
             */
            var STEP_STATE = {
                NUMBER: 'number',
                EDIT: 'edit',
                DONE: 'done',
                ERROR: 'error'
            };
            /**
             * InjectionToken that can be used to specify the global stepper options.
             * @type {?}
             */
            var STEPPER_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('STEPPER_GLOBAL_OPTIONS');
            /**
             * InjectionToken that can be used to specify the global stepper options.
             * @deprecated Use `STEPPER_GLOBAL_OPTIONS` instead.
             * \@breaking-change 8.0.0.
             * @type {?}
             */
            var MAT_STEPPER_GLOBAL_OPTIONS = STEPPER_GLOBAL_OPTIONS;
            var CdkStep = /** @class */ (function () {
                /**
                 * \@breaking-change 8.0.0 remove the `?` after `stepperOptions`
                 * @param {?} _stepper
                 * @param {?=} stepperOptions
                 */
                function CdkStep(_stepper, stepperOptions) {
                    this._stepper = _stepper;
                    /**
                     * Whether user has seen the expanded step content or not.
                     */
                    this.interacted = false;
                    this._editable = true;
                    this._optional = false;
                    this._completedOverride = null;
                    this._customError = null;
                    this._stepperOptions = stepperOptions ? stepperOptions : {};
                    this._displayDefaultIndicatorType = this._stepperOptions.displayDefaultIndicatorType !== false;
                    this._showError = !!this._stepperOptions.showError;
                }
                Object.defineProperty(CdkStep.prototype, "editable", {
                    /**
                     * Whether the user can return to this step once it has been marked as completed.
                     * @return {?}
                     */
                    get: function () {
                        return this._editable;
                    },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._editable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(CdkStep.prototype, "optional", {
                    /**
                     * Whether the completion of step is optional.
                     * @return {?}
                     */
                    get: function () {
                        return this._optional;
                    },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._optional = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(CdkStep.prototype, "completed", {
                    /**
                     * Whether step is marked as completed.
                     * @return {?}
                     */
                    get: function () {
                        return this._completedOverride == null ? this._getDefaultCompleted() : this._completedOverride;
                    },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._completedOverride = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @private
                 * @return {?}
                 */
                CdkStep.prototype._getDefaultCompleted = function () {
                    return this.stepControl ? this.stepControl.valid && this.interacted : this.interacted;
                };
                Object.defineProperty(CdkStep.prototype, "hasError", {
                    /**
                     * Whether step has an error.
                     * @return {?}
                     */
                    get: function () {
                        return this._customError == null ? this._getDefaultError() : this._customError;
                    },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._customError = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @private
                 * @return {?}
                 */
                CdkStep.prototype._getDefaultError = function () {
                    return this.stepControl && this.stepControl.invalid && this.interacted;
                };
                /**
                 * Selects this step component.
                 * @return {?}
                 */
                CdkStep.prototype.select = function () {
                    this._stepper.selected = this;
                };
                /**
                 * Resets the step to its initial state. Note that this includes resetting form data.
                 * @return {?}
                 */
                CdkStep.prototype.reset = function () {
                    this.interacted = false;
                    if (this._completedOverride != null) {
                        this._completedOverride = false;
                    }
                    if (this._customError != null) {
                        this._customError = false;
                    }
                    if (this.stepControl) {
                        this.stepControl.reset();
                    }
                };
                /**
                 * @return {?}
                 */
                CdkStep.prototype.ngOnChanges = function () {
                    // Since basically all inputs of the MatStep get proxied through the view down to the
                    // underlying MatStepHeader, we have to make sure that change detection runs correctly.
                    this._stepper._stateChanged();
                };
                return CdkStep;
            }());
            CdkStep.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{ selector: 'cdk-step',
                            exportAs: 'cdkStep',
                            template: '<ng-template><ng-content></ng-content></ng-template>',
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                        },] },
            ];
            /** @nocollapse */
            CdkStep.ctorParameters = function () { return [
                { type: CdkStepper, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                                                 * @return {?}
                                                 */function () { return CdkStepper; })),] }] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [STEPPER_GLOBAL_OPTIONS,] }] }
            ]; };
            CdkStep.propDecorators = {
                stepLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [CdkStepLabel, { static: false },] }],
                content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], { static: true },] }],
                stepControl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                errorMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['aria-label',] }],
                ariaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['aria-labelledby',] }],
                state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                editable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                optional: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                completed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                hasError: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            var CdkStepper = /** @class */ (function () {
                /**
                 * @param {?} _dir
                 * @param {?} _changeDetectorRef
                 * @param {?=} _elementRef
                 * @param {?=} _document
                 */
                function CdkStepper(_dir, _changeDetectorRef, _elementRef, _document) {
                    this._dir = _dir;
                    this._changeDetectorRef = _changeDetectorRef;
                    this._elementRef = _elementRef;
                    /**
                     * Emits when the component is destroyed.
                     */
                    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
                    this._linear = false;
                    this._selectedIndex = 0;
                    /**
                     * Event emitted when the selected step has changed.
                     */
                    this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    this._orientation = 'horizontal';
                    this._groupId = nextId++;
                    this._document = _document;
                }
                Object.defineProperty(CdkStepper.prototype, "steps", {
                    /**
                     * The list of step components that the stepper is holding.
                     * @return {?}
                     */
                    get: function () {
                        return this._steps;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(CdkStepper.prototype, "linear", {
                    /**
                     * Whether the validity of previous steps should be checked or not.
                     * @return {?}
                     */
                    get: function () {
                        return this._linear;
                    },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._linear = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(CdkStepper.prototype, "selectedIndex", {
                    /**
                     * The index of the selected step.
                     * @return {?}
                     */
                    get: function () {
                        return this._selectedIndex;
                    },
                    /**
                     * @param {?} index
                     * @return {?}
                     */
                    set: function (index) {
                        /** @type {?} */
                        var newIndex = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(index);
                        if (this.steps) {
                            // Ensure that the index can't be out of bounds.
                            if (newIndex < 0 || newIndex > this.steps.length - 1) {
                                throw Error('cdkStepper: Cannot assign out-of-bounds value to `selectedIndex`.');
                            }
                            if (this._selectedIndex != newIndex && !this._anyControlsInvalidOrPending(newIndex) &&
                                (newIndex >= this._selectedIndex || this.steps.toArray()[newIndex].editable)) {
                                this._updateSelectedItemIndex(index);
                            }
                        }
                        else {
                            this._selectedIndex = newIndex;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(CdkStepper.prototype, "selected", {
                    /**
                     * The step that is selected.
                     * @return {?}
                     */
                    get: function () {
                        // @breaking-change 8.0.0 Change return type to `CdkStep | undefined`.
                        return this.steps ? this.steps.toArray()[this.selectedIndex] : ( /** @type {?} */(undefined));
                    },
                    /**
                     * @param {?} step
                     * @return {?}
                     */
                    set: function (step) {
                        this.selectedIndex = this.steps ? this.steps.toArray().indexOf(step) : -1;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @return {?}
                 */
                CdkStepper.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    // Note that while the step headers are content children by default, any components that
                    // extend this one might have them as view chidren. We initialize the keyboard handling in
                    // AfterViewInit so we're guaranteed for both view and content children to be defined.
                    this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusKeyManager"](this._stepHeader)
                        .withWrap()
                        .withVerticalOrientation(this._orientation === 'vertical');
                    (this._dir ? (( /** @type {?} */(this._dir.change))) : Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])())
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(this._layoutDirection()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed))
                        .subscribe(( /**
                 * @param {?} direction
                 * @return {?}
                 */function (/**
                 * @param {?} direction
                 * @return {?}
                 */ direction) { return _this._keyManager.withHorizontalOrientation(direction); }));
                    this._keyManager.updateActiveItemIndex(this._selectedIndex);
                    this.steps.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(( /**
                     * @return {?}
                     */function () {
                        if (!_this.selected) {
                            _this._selectedIndex = Math.max(_this._selectedIndex - 1, 0);
                        }
                    }));
                };
                /**
                 * @return {?}
                 */
                CdkStepper.prototype.ngOnDestroy = function () {
                    this._destroyed.next();
                    this._destroyed.complete();
                };
                /**
                 * Selects and focuses the next step in list.
                 * @return {?}
                 */
                CdkStepper.prototype.next = function () {
                    this.selectedIndex = Math.min(this._selectedIndex + 1, this.steps.length - 1);
                };
                /**
                 * Selects and focuses the previous step in list.
                 * @return {?}
                 */
                CdkStepper.prototype.previous = function () {
                    this.selectedIndex = Math.max(this._selectedIndex - 1, 0);
                };
                /**
                 * Resets the stepper to its initial state. Note that this includes clearing form data.
                 * @return {?}
                 */
                CdkStepper.prototype.reset = function () {
                    this._updateSelectedItemIndex(0);
                    this.steps.forEach(( /**
                     * @param {?} step
                     * @return {?}
                     */function (/**
                     * @param {?} step
                     * @return {?}
                     */ step) { return step.reset(); }));
                    this._stateChanged();
                };
                /**
                 * Returns a unique id for each step label element.
                 * @param {?} i
                 * @return {?}
                 */
                CdkStepper.prototype._getStepLabelId = function (i) {
                    return "cdk-step-label-" + this._groupId + "-" + i;
                };
                /**
                 * Returns unique id for each step content element.
                 * @param {?} i
                 * @return {?}
                 */
                CdkStepper.prototype._getStepContentId = function (i) {
                    return "cdk-step-content-" + this._groupId + "-" + i;
                };
                /**
                 * Marks the component to be change detected.
                 * @return {?}
                 */
                CdkStepper.prototype._stateChanged = function () {
                    this._changeDetectorRef.markForCheck();
                };
                /**
                 * Returns position state of the step with the given index.
                 * @param {?} index
                 * @return {?}
                 */
                CdkStepper.prototype._getAnimationDirection = function (index) {
                    /** @type {?} */
                    var position = index - this._selectedIndex;
                    if (position < 0) {
                        return this._layoutDirection() === 'rtl' ? 'next' : 'previous';
                    }
                    else if (position > 0) {
                        return this._layoutDirection() === 'rtl' ? 'previous' : 'next';
                    }
                    return 'current';
                };
                /**
                 * Returns the type of icon to be displayed.
                 * @param {?} index
                 * @param {?=} state
                 * @return {?}
                 */
                CdkStepper.prototype._getIndicatorType = function (index, state) {
                    if (state === void 0) { state = STEP_STATE.NUMBER; }
                    /** @type {?} */
                    var step = this.steps.toArray()[index];
                    /** @type {?} */
                    var isCurrentStep = this._isCurrentStep(index);
                    return step._displayDefaultIndicatorType ? this._getDefaultIndicatorLogic(step, isCurrentStep) :
                        this._getGuidelineLogic(step, isCurrentStep, state);
                };
                /**
                 * @private
                 * @param {?} step
                 * @param {?} isCurrentStep
                 * @return {?}
                 */
                CdkStepper.prototype._getDefaultIndicatorLogic = function (step, isCurrentStep) {
                    if (step._showError && step.hasError && !isCurrentStep) {
                        return STEP_STATE.ERROR;
                    }
                    else if (!step.completed || isCurrentStep) {
                        return STEP_STATE.NUMBER;
                    }
                    else {
                        return step.editable ? STEP_STATE.EDIT : STEP_STATE.DONE;
                    }
                };
                /**
                 * @private
                 * @param {?} step
                 * @param {?} isCurrentStep
                 * @param {?=} state
                 * @return {?}
                 */
                CdkStepper.prototype._getGuidelineLogic = function (step, isCurrentStep, state) {
                    if (state === void 0) { state = STEP_STATE.NUMBER; }
                    if (step._showError && step.hasError && !isCurrentStep) {
                        return STEP_STATE.ERROR;
                    }
                    else if (step.completed && !isCurrentStep) {
                        return STEP_STATE.DONE;
                    }
                    else if (step.completed && isCurrentStep) {
                        return state;
                    }
                    else if (step.editable && isCurrentStep) {
                        return STEP_STATE.EDIT;
                    }
                    else {
                        return state;
                    }
                };
                /**
                 * @private
                 * @param {?} index
                 * @return {?}
                 */
                CdkStepper.prototype._isCurrentStep = function (index) {
                    return this._selectedIndex === index;
                };
                /**
                 * Returns the index of the currently-focused step header.
                 * @return {?}
                 */
                CdkStepper.prototype._getFocusIndex = function () {
                    return this._keyManager ? this._keyManager.activeItemIndex : this._selectedIndex;
                };
                /**
                 * @private
                 * @param {?} newIndex
                 * @return {?}
                 */
                CdkStepper.prototype._updateSelectedItemIndex = function (newIndex) {
                    /** @type {?} */
                    var stepsArray = this.steps.toArray();
                    this.selectionChange.emit({
                        selectedIndex: newIndex,
                        previouslySelectedIndex: this._selectedIndex,
                        selectedStep: stepsArray[newIndex],
                        previouslySelectedStep: stepsArray[this._selectedIndex],
                    });
                    // If focus is inside the stepper, move it to the next header, otherwise it may become
                    // lost when the active step content is hidden. We can't be more granular with the check
                    // (e.g. checking whether focus is inside the active step), because we don't have a
                    // reference to the elements that are rendering out the content.
                    this._containsFocus() ? this._keyManager.setActiveItem(newIndex) :
                        this._keyManager.updateActiveItemIndex(newIndex);
                    this._selectedIndex = newIndex;
                    this._stateChanged();
                };
                /**
                 * @param {?} event
                 * @return {?}
                 */
                CdkStepper.prototype._onKeydown = function (event) {
                    /** @type {?} */
                    var hasModifier = Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["hasModifierKey"])(event);
                    /** @type {?} */
                    var keyCode = event.keyCode;
                    /** @type {?} */
                    var manager = this._keyManager;
                    if (manager.activeItemIndex != null && !hasModifier &&
                        (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["SPACE"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["ENTER"])) {
                        this.selectedIndex = manager.activeItemIndex;
                        event.preventDefault();
                    }
                    else if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["HOME"]) {
                        manager.setFirstItemActive();
                        event.preventDefault();
                    }
                    else if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["END"]) {
                        manager.setLastItemActive();
                        event.preventDefault();
                    }
                    else {
                        manager.onKeydown(event);
                    }
                };
                /**
                 * @private
                 * @param {?} index
                 * @return {?}
                 */
                CdkStepper.prototype._anyControlsInvalidOrPending = function (index) {
                    /** @type {?} */
                    var steps = this.steps.toArray();
                    steps[this._selectedIndex].interacted = true;
                    if (this._linear && index >= 0) {
                        return steps.slice(0, index).some(( /**
                         * @param {?} step
                         * @return {?}
                         */function (/**
                         * @param {?} step
                         * @return {?}
                         */ step) {
                            /** @type {?} */
                            var control = step.stepControl;
                            /** @type {?} */
                            var isIncomplete = control ? (control.invalid || control.pending || !step.interacted) : !step.completed;
                            return isIncomplete && !step.optional && !step._completedOverride;
                        }));
                    }
                    return false;
                };
                /**
                 * @private
                 * @return {?}
                 */
                CdkStepper.prototype._layoutDirection = function () {
                    return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
                };
                /**
                 * Checks whether the stepper contains the focused element.
                 * @private
                 * @return {?}
                 */
                CdkStepper.prototype._containsFocus = function () {
                    if (!this._document || !this._elementRef) {
                        return false;
                    }
                    /** @type {?} */
                    var stepperElement = this._elementRef.nativeElement;
                    /** @type {?} */
                    var focusedElement = this._document.activeElement;
                    return stepperElement === focusedElement || stepperElement.contains(focusedElement);
                };
                return CdkStepper;
            }());
            CdkStepper.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[cdkStepper]',
                            exportAs: 'cdkStepper',
                        },] },
            ];
            /** @nocollapse */
            CdkStepper.ctorParameters = function () { return [
                { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] }
            ]; };
            CdkStepper.propDecorators = {
                _steps: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [CdkStep,] }],
                _stepHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [CdkStepHeader,] }],
                linear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                selectedIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                selectionChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Button that moves to the next step in a stepper workflow.
             */
            var CdkStepperNext = /** @class */ (function () {
                /**
                 * @param {?} _stepper
                 */
                function CdkStepperNext(_stepper) {
                    this._stepper = _stepper;
                    /**
                     * Type of the next button. Defaults to "submit" if not specified.
                     */
                    this.type = 'submit';
                }
                // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
                // In Ivy the `host` bindings will be merged when this class is extended, whereas in
                // ViewEngine they're overwritten.
                // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
                // tslint:disable-next-line:no-host-decorator-in-concrete
                /**
                 * @return {?}
                 */
                CdkStepperNext.prototype._handleClick = function () {
                    this._stepper.next();
                };
                return CdkStepperNext;
            }());
            CdkStepperNext.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'button[cdkStepperNext]',
                            host: {
                                '[type]': 'type',
                            }
                        },] },
            ];
            /** @nocollapse */
            CdkStepperNext.ctorParameters = function () { return [
                { type: CdkStepper }
            ]; };
            CdkStepperNext.propDecorators = {
                type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                _handleClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }]
            };
            /**
             * Button that moves to the previous step in a stepper workflow.
             */
            var CdkStepperPrevious = /** @class */ (function () {
                /**
                 * @param {?} _stepper
                 */
                function CdkStepperPrevious(_stepper) {
                    this._stepper = _stepper;
                    /**
                     * Type of the previous button. Defaults to "button" if not specified.
                     */
                    this.type = 'button';
                }
                // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
                // In Ivy the `host` bindings will be merged when this class is extended, whereas in
                // ViewEngine they're overwritten.
                // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
                // tslint:disable-next-line:no-host-decorator-in-concrete
                /**
                 * @return {?}
                 */
                CdkStepperPrevious.prototype._handleClick = function () {
                    this._stepper.previous();
                };
                return CdkStepperPrevious;
            }());
            CdkStepperPrevious.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'button[cdkStepperPrevious]',
                            host: {
                                '[type]': 'type',
                            }
                        },] },
            ];
            /** @nocollapse */
            CdkStepperPrevious.ctorParameters = function () { return [
                { type: CdkStepper }
            ]; };
            CdkStepperPrevious.propDecorators = {
                type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                _handleClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var CdkStepperModule = /** @class */ (function () {
                function CdkStepperModule() {
                }
                return CdkStepperModule;
            }());
            CdkStepperModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                            imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
                            exports: [
                                CdkStep,
                                CdkStepper,
                                CdkStepHeader,
                                CdkStepLabel,
                                CdkStepperNext,
                                CdkStepperPrevious,
                            ],
                            declarations: [
                                CdkStep,
                                CdkStepper,
                                CdkStepHeader,
                                CdkStepLabel,
                                CdkStepperNext,
                                CdkStepperPrevious,
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
            //# sourceMappingURL=stepper.js.map
            /***/ 
        }),
        /***/ "./node_modules/@angular/common/fesm2015/http.js": 
        /*!*******************************************************!*\
          !*** ./node_modules/@angular/common/fesm2015/http.js ***!
          \*******************************************************/
        /*! exports provided: ɵangular_packages_common_http_http_a, ɵangular_packages_common_http_http_b, ɵangular_packages_common_http_http_c, ɵangular_packages_common_http_http_d, ɵangular_packages_common_http_http_g, ɵangular_packages_common_http_http_h, ɵangular_packages_common_http_http_e, ɵangular_packages_common_http_http_f, HttpBackend, HttpHandler, HttpClient, HttpHeaders, HTTP_INTERCEPTORS, JsonpClientBackend, JsonpInterceptor, HttpClientJsonpModule, HttpClientModule, HttpClientXsrfModule, ɵHttpInterceptingHandler, HttpParams, HttpUrlEncodingCodec, HttpRequest, HttpErrorResponse, HttpEventType, HttpHeaderResponse, HttpResponse, HttpResponseBase, HttpXhrBackend, XhrFactory, HttpXsrfTokenExtractor */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_a", function () { return NoopInterceptor; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_b", function () { return JsonpCallbackContext; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_c", function () { return jsonpCallbackContext; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_d", function () { return BrowserXhr; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_g", function () { return HttpXsrfCookieExtractor; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_h", function () { return HttpXsrfInterceptor; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_e", function () { return XSRF_COOKIE_NAME; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_f", function () { return XSRF_HEADER_NAME; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpBackend", function () { return HttpBackend; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHandler", function () { return HttpHandler; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClient", function () { return HttpClient; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHeaders", function () { return HttpHeaders; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_INTERCEPTORS", function () { return HTTP_INTERCEPTORS; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpClientBackend", function () { return JsonpClientBackend; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpInterceptor", function () { return JsonpInterceptor; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientJsonpModule", function () { return HttpClientJsonpModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientModule", function () { return HttpClientModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientXsrfModule", function () { return HttpClientXsrfModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵHttpInterceptingHandler", function () { return HttpInterceptingHandler; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpParams", function () { return HttpParams; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpUrlEncodingCodec", function () { return HttpUrlEncodingCodec; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequest", function () { return HttpRequest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorResponse", function () { return HttpErrorResponse; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpEventType", function () { return HttpEventType; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHeaderResponse", function () { return HttpHeaderResponse; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResponse", function () { return HttpResponse; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResponseBase", function () { return HttpResponseBase; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpXhrBackend", function () { return HttpXhrBackend; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XhrFactory", function () { return XhrFactory; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpXsrfTokenExtractor", function () { return HttpXsrfTokenExtractor; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /**
             * @license Angular v8.2.14
             * (c) 2010-2019 Google LLC. https://angular.io/
             * License: MIT
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @license
             * Copyright Google Inc. All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            /**
             * Transforms an `HttpRequest` into a stream of `HttpEvent`s, one of which will likely be a
             * `HttpResponse`.
             *
             * `HttpHandler` is injectable. When injected, the handler instance dispatches requests to the
             * first interceptor in the chain, which dispatches to the second, etc, eventually reaching the
             * `HttpBackend`.
             *
             * In an `HttpInterceptor`, the `HttpHandler` parameter is the next interceptor in the chain.
             *
             * \@publicApi
             * @abstract
             */
            var HttpHandler = /** @class */ (function () {
                function HttpHandler() {
                }
                return HttpHandler;
            }());
            if (false) { }
            /**
             * A final `HttpHandler` which will dispatch the request via browser HTTP APIs to a backend.
             *
             * Interceptors sit between the `HttpClient` interface and the `HttpBackend`.
             *
             * When injected, `HttpBackend` dispatches requests directly to the backend, without going
             * through the interceptor chain.
             *
             * \@publicApi
             * @abstract
             */
            var HttpBackend = /** @class */ (function () {
                function HttpBackend() {
                }
                return HttpBackend;
            }());
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @license
             * Copyright Google Inc. All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            /**
             * @record
             */
            function Update() { }
            if (false) { }
            /**
             * Represents the header configuration options for an HTTP request.
             * Instances are immutable. Modifying methods return a cloned
             * instance with the change. The original object is never changed.
             *
             * \@publicApi
             */
            var HttpHeaders = /** @class */ (function () {
                /**
                 * Constructs a new HTTP header object with the given values.
                 * @param {?=} headers
                 */
                function HttpHeaders(headers) {
                    var _this = this;
                    /**
                     * Internal map of lowercased header names to the normalized
                     * form of the name (the form seen first).
                     */
                    this.normalizedNames = new Map();
                    /**
                     * Queued updates to be materialized the next initialization.
                     */
                    this.lazyUpdate = null;
                    if (!headers) {
                        this.headers = new Map();
                    }
                    else if (typeof headers === 'string') {
                        this.lazyInit = ( /**
                         * @return {?}
                         */function () {
                            _this.headers = new Map();
                            headers.split('\n').forEach(( /**
                             * @param {?} line
                             * @return {?}
                             */function (/**
                             * @param {?} line
                             * @return {?}
                             */ line) {
                                /** @type {?} */
                                var index = line.indexOf(':');
                                if (index > 0) {
                                    /** @type {?} */
                                    var name = line.slice(0, index);
                                    /** @type {?} */
                                    var key = name.toLowerCase();
                                    /** @type {?} */
                                    var value = line.slice(index + 1).trim();
                                    _this.maybeSetNormalizedName(name, key);
                                    if (_this.headers.has(key)) {
                                        ( /** @type {?} */(_this.headers.get(key))).push(value);
                                    }
                                    else {
                                        _this.headers.set(key, [value]);
                                    }
                                }
                            }));
                        });
                    }
                    else {
                        this.lazyInit = ( /**
                         * @return {?}
                         */function () {
                            _this.headers = new Map();
                            Object.keys(headers).forEach(( /**
                             * @param {?} name
                             * @return {?}
                             */function (/**
                             * @param {?} name
                             * @return {?}
                             */ name) {
                                /** @type {?} */
                                var values = headers[name];
                                /** @type {?} */
                                var key = name.toLowerCase();
                                if (typeof values === 'string') {
                                    values = [values];
                                }
                                if (values.length > 0) {
                                    _this.headers.set(key, values);
                                    _this.maybeSetNormalizedName(name, key);
                                }
                            }));
                        });
                    }
                }
                /**
                 * Checks for existence of a given header.
                 *
                 * @param {?} name The header name to check for existence.
                 *
                 * @return {?} True if the header exists, false otherwise.
                 */
                HttpHeaders.prototype.has = function (name) {
                    this.init();
                    return this.headers.has(name.toLowerCase());
                };
                /**
                 * Retrieves the first value of a given header.
                 *
                 * @param {?} name The header name.
                 *
                 * @return {?} The value string if the header exists, null otherwise
                 */
                HttpHeaders.prototype.get = function (name) {
                    this.init();
                    /** @type {?} */
                    var values = this.headers.get(name.toLowerCase());
                    return values && values.length > 0 ? values[0] : null;
                };
                /**
                 * Retrieves the names of the headers.
                 *
                 * @return {?} A list of header names.
                 */
                HttpHeaders.prototype.keys = function () {
                    this.init();
                    return Array.from(this.normalizedNames.values());
                };
                /**
                 * Retrieves a list of values for a given header.
                 *
                 * @param {?} name The header name from which to retrieve values.
                 *
                 * @return {?} A string of values if the header exists, null otherwise.
                 */
                HttpHeaders.prototype.getAll = function (name) {
                    this.init();
                    return this.headers.get(name.toLowerCase()) || null;
                };
                /**
                 * Appends a new value to the existing set of values for a header
                 * and returns them in a clone of the original instance.
                 *
                 * @param {?} name The header name for which to append the value or values.
                 * @param {?} value The new value or array of values.
                 *
                 * @return {?} A clone of the HTTP headers object with the value appended to the given header.
                 */
                HttpHeaders.prototype.append = function (name, value) {
                    return this.clone({ name: name, value: value, op: 'a' });
                };
                /**
                 * Sets or modifies a value for a given header in a clone of the original instance.
                 * If the header already exists, its value is replaced with the given value
                 * in the returned object.
                 *
                 * @param {?} name The header name.
                 * @param {?} value The value or values to set or overide for the given header.
                 *
                 * @return {?} A clone of the HTTP headers object with the newly set header value.
                 */
                HttpHeaders.prototype.set = function (name, value) {
                    return this.clone({ name: name, value: value, op: 's' });
                };
                /**
                 * Deletes values for a given header in a clone of the original instance.
                 *
                 * @param {?} name The header name.
                 * @param {?=} value The value or values to delete for the given header.
                 *
                 * @return {?} A clone of the HTTP headers object with the given value deleted.
                 */
                HttpHeaders.prototype.delete = function (name, value) {
                    return this.clone({ name: name, value: value, op: 'd' });
                };
                /**
                 * @private
                 * @param {?} name
                 * @param {?} lcName
                 * @return {?}
                 */
                HttpHeaders.prototype.maybeSetNormalizedName = function (name, lcName) {
                    if (!this.normalizedNames.has(lcName)) {
                        this.normalizedNames.set(lcName, name);
                    }
                };
                /**
                 * @private
                 * @return {?}
                 */
                HttpHeaders.prototype.init = function () {
                    var _this = this;
                    if (!!this.lazyInit) {
                        if (this.lazyInit instanceof HttpHeaders) {
                            this.copyFrom(this.lazyInit);
                        }
                        else {
                            this.lazyInit();
                        }
                        this.lazyInit = null;
                        if (!!this.lazyUpdate) {
                            this.lazyUpdate.forEach(( /**
                             * @param {?} update
                             * @return {?}
                             */function (/**
                             * @param {?} update
                             * @return {?}
                             */ update) { return _this.applyUpdate(update); }));
                            this.lazyUpdate = null;
                        }
                    }
                };
                /**
                 * @private
                 * @param {?} other
                 * @return {?}
                 */
                HttpHeaders.prototype.copyFrom = function (other) {
                    var _this = this;
                    other.init();
                    Array.from(other.headers.keys()).forEach(( /**
                     * @param {?} key
                     * @return {?}
                     */function (/**
                     * @param {?} key
                     * @return {?}
                     */ key) {
                        _this.headers.set(key, ( /** @type {?} */(other.headers.get(key))));
                        _this.normalizedNames.set(key, ( /** @type {?} */(other.normalizedNames.get(key))));
                    }));
                };
                /**
                 * @private
                 * @param {?} update
                 * @return {?}
                 */
                HttpHeaders.prototype.clone = function (update) {
                    /** @type {?} */
                    var clone = new HttpHeaders();
                    clone.lazyInit =
                        (!!this.lazyInit && this.lazyInit instanceof HttpHeaders) ? this.lazyInit : this;
                    clone.lazyUpdate = (this.lazyUpdate || []).concat([update]);
                    return clone;
                };
                /**
                 * @private
                 * @param {?} update
                 * @return {?}
                 */
                HttpHeaders.prototype.applyUpdate = function (update) {
                    /** @type {?} */
                    var key = update.name.toLowerCase();
                    switch (update.op) {
                        case 'a':
                        case 's':
                            /** @type {?} */
                            var value = ( /** @type {?} */(update.value));
                            if (typeof value === 'string') {
                                value = [value];
                            }
                            if (value.length === 0) {
                                return;
                            }
                            this.maybeSetNormalizedName(update.name, key);
                            /** @type {?} */
                            var base = (update.op === 'a' ? this.headers.get(key) : undefined) || [];
                            base.push.apply(base, __spread(value));
                            this.headers.set(key, base);
                            break;
                        case 'd':
                            /** @type {?} */
                            var toDelete_1 = ( /** @type {?} */(update.value));
                            if (!toDelete_1) {
                                this.headers.delete(key);
                                this.normalizedNames.delete(key);
                            }
                            else {
                                /** @type {?} */
                                var existing = this.headers.get(key);
                                if (!existing) {
                                    return;
                                }
                                existing = existing.filter(( /**
                                 * @param {?} value
                                 * @return {?}
                                 */function (/**
                                 * @param {?} value
                                 * @return {?}
                                 */ value) { return toDelete_1.indexOf(value) === -1; }));
                                if (existing.length === 0) {
                                    this.headers.delete(key);
                                    this.normalizedNames.delete(key);
                                }
                                else {
                                    this.headers.set(key, existing);
                                }
                            }
                            break;
                    }
                };
                /**
                 * \@internal
                 * @param {?} fn
                 * @return {?}
                 */
                HttpHeaders.prototype.forEach = function (fn) {
                    var _this = this;
                    this.init();
                    Array.from(this.normalizedNames.keys())
                        .forEach(( /**
                 * @param {?} key
                 * @return {?}
                 */function (/**
                 * @param {?} key
                 * @return {?}
                 */ key) { return fn(( /** @type {?} */(_this.normalizedNames.get(key))), ( /** @type {?} */(_this.headers.get(key)))); }));
                };
                return HttpHeaders;
            }());
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @license
             * Copyright Google Inc. All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            /**
             * A codec for encoding and decoding parameters in URLs.
             *
             * Used by `HttpParams`.
             *
             * \@publicApi
             *
             * @record
             */
            function HttpParameterCodec() { }
            if (false) { }
            /**
             * Provides encoding and decoding of URL parameter and query-string values.
             *
             * Serializes and parses URL parameter keys and values to encode and decode them.
             * If you pass URL query parameters without encoding,
             * the query parameters can be misinterpreted at the receiving end.
             *
             *
             * \@publicApi
             */
            var HttpUrlEncodingCodec = /** @class */ (function () {
                function HttpUrlEncodingCodec() {
                }
                /**
                 * Encodes a key name for a URL parameter or query-string.
                 * @param {?} key The key name.
                 * @return {?} The encoded key name.
                 */
                HttpUrlEncodingCodec.prototype.encodeKey = function (key) { return standardEncoding(key); };
                /**
                 * Encodes the value of a URL parameter or query-string.
                 * @param {?} value The value.
                 * @return {?} The encoded value.
                 */
                HttpUrlEncodingCodec.prototype.encodeValue = function (value) { return standardEncoding(value); };
                /**
                 * Decodes an encoded URL parameter or query-string key.
                 * @param {?} key The encoded key name.
                 * @return {?} The decoded key name.
                 */
                HttpUrlEncodingCodec.prototype.decodeKey = function (key) { return decodeURIComponent(key); };
                /**
                 * Decodes an encoded URL parameter or query-string value.
                 * @param {?} value The encoded value.
                 * @return {?} The decoded value.
                 */
                HttpUrlEncodingCodec.prototype.decodeValue = function (value) { return decodeURIComponent(value); };
                return HttpUrlEncodingCodec;
            }());
            /**
             * @param {?} rawParams
             * @param {?} codec
             * @return {?}
             */
            function paramParser(rawParams, codec) {
                /** @type {?} */
                var map = new Map();
                if (rawParams.length > 0) {
                    /** @type {?} */
                    var params = rawParams.split('&');
                    params.forEach(( /**
                     * @param {?} param
                     * @return {?}
                     */function (param) {
                        /** @type {?} */
                        var eqIdx = param.indexOf('=');
                        var _a = __read(eqIdx == -1 ?
                            [codec.decodeKey(param), ''] :
                            [codec.decodeKey(param.slice(0, eqIdx)), codec.decodeValue(param.slice(eqIdx + 1))], 2), key = _a[0], val = _a[1];
                        /** @type {?} */
                        var list = map.get(key) || [];
                        list.push(val);
                        map.set(key, list);
                    }));
                }
                return map;
            }
            /**
             * @param {?} v
             * @return {?}
             */
            function standardEncoding(v) {
                return encodeURIComponent(v)
                    .replace(/%40/gi, '@')
                    .replace(/%3A/gi, ':')
                    .replace(/%24/gi, '$')
                    .replace(/%2C/gi, ',')
                    .replace(/%3B/gi, ';')
                    .replace(/%2B/gi, '+')
                    .replace(/%3D/gi, '=')
                    .replace(/%3F/gi, '?')
                    .replace(/%2F/gi, '/');
            }
            /**
             * @record
             */
            function Update$1() { }
            if (false) { }
            /**
             * Options used to construct an `HttpParams` instance.
             *
             * \@publicApi
             * @record
             */
            function HttpParamsOptions() { }
            if (false) { }
            /**
             * An HTTP request/response body that represents serialized parameters,
             * per the MIME type `application/x-www-form-urlencoded`.
             *
             * This class is immutable; all mutation operations return a new instance.
             *
             * \@publicApi
             */
            var HttpParams = /** @class */ (function () {
                /**
                 * @param {?=} options
                 */
                function HttpParams(options) {
                    var _this = this;
                    if (options === void 0) { options = ( /** @type {?} */({})); }
                    this.updates = null;
                    this.cloneFrom = null;
                    this.encoder = options.encoder || new HttpUrlEncodingCodec();
                    if (!!options.fromString) {
                        if (!!options.fromObject) {
                            throw new Error("Cannot specify both fromString and fromObject.");
                        }
                        this.map = paramParser(options.fromString, this.encoder);
                    }
                    else if (!!options.fromObject) {
                        this.map = new Map();
                        Object.keys(options.fromObject).forEach(( /**
                         * @param {?} key
                         * @return {?}
                         */function (/**
                         * @param {?} key
                         * @return {?}
                         */ key) {
                            /** @type {?} */
                            var value = (( /** @type {?} */(options.fromObject)))[key];
                            ( /** @type {?} */(_this.map)).set(key, Array.isArray(value) ? value : [value]);
                        }));
                    }
                    else {
                        this.map = null;
                    }
                }
                /**
                 * Reports whether the body includes one or more values for a given parameter.
                 * @param {?} param The parameter name.
                 * @return {?} True if the parameter has one or more values,
                 * false if it has no value or is not present.
                 */
                HttpParams.prototype.has = function (param) {
                    this.init();
                    return ( /** @type {?} */(this.map)).has(param);
                };
                /**
                 * Retrieves the first value for a parameter.
                 * @param {?} param The parameter name.
                 * @return {?} The first value of the given parameter,
                 * or `null` if the parameter is not present.
                 */
                HttpParams.prototype.get = function (param) {
                    this.init();
                    /** @type {?} */
                    var res = ( /** @type {?} */(this.map)).get(param);
                    return !!res ? res[0] : null;
                };
                /**
                 * Retrieves all values for a  parameter.
                 * @param {?} param The parameter name.
                 * @return {?} All values in a string array,
                 * or `null` if the parameter not present.
                 */
                HttpParams.prototype.getAll = function (param) {
                    this.init();
                    return ( /** @type {?} */(this.map)).get(param) || null;
                };
                /**
                 * Retrieves all the parameters for this body.
                 * @return {?} The parameter names in a string array.
                 */
                HttpParams.prototype.keys = function () {
                    this.init();
                    return Array.from(( /** @type {?} */(this.map)).keys());
                };
                /**
                 * Appends a new value to existing values for a parameter.
                 * @param {?} param The parameter name.
                 * @param {?} value The new value to add.
                 * @return {?} A new body with the appended value.
                 */
                HttpParams.prototype.append = function (param, value) { return this.clone({ param: param, value: value, op: 'a' }); };
                /**
                 * Replaces the value for a parameter.
                 * @param {?} param The parameter name.
                 * @param {?} value The new value.
                 * @return {?} A new body with the new value.
                 */
                HttpParams.prototype.set = function (param, value) { return this.clone({ param: param, value: value, op: 's' }); };
                /**
                 * Removes a given value or all values from a parameter.
                 * @param {?} param The parameter name.
                 * @param {?=} value The value to remove, if provided.
                 * @return {?} A new body with the given value removed, or with all values
                 * removed if no value is specified.
                 */
                HttpParams.prototype.delete = function (param, value) { return this.clone({ param: param, value: value, op: 'd' }); };
                /**
                 * Serializes the body to an encoded string, where key-value pairs (separated by `=`) are
                 * separated by `&`s.
                 * @return {?}
                 */
                HttpParams.prototype.toString = function () {
                    var _this = this;
                    this.init();
                    return this.keys()
                        .map(( /**
                 * @param {?} key
                 * @return {?}
                 */function (/**
                 * @param {?} key
                 * @return {?}
                 */ key) {
                        /** @type {?} */
                        var eKey = _this.encoder.encodeKey(key);
                        return ( /** @type {?} */(( /** @type {?} */(_this.map)).get(key))).map(( /**
                         * @param {?} value
                         * @return {?}
                         */function (/**
                         * @param {?} value
                         * @return {?}
                         */ value) { return eKey + '=' + _this.encoder.encodeValue(value); }))
                            .join('&');
                    }))
                        .join('&');
                };
                /**
                 * @private
                 * @param {?} update
                 * @return {?}
                 */
                HttpParams.prototype.clone = function (update) {
                    /** @type {?} */
                    var clone = new HttpParams(( /** @type {?} */({ encoder: this.encoder })));
                    clone.cloneFrom = this.cloneFrom || this;
                    clone.updates = (this.updates || []).concat([update]);
                    return clone;
                };
                /**
                 * @private
                 * @return {?}
                 */
                HttpParams.prototype.init = function () {
                    var _this = this;
                    if (this.map === null) {
                        this.map = new Map();
                    }
                    if (this.cloneFrom !== null) {
                        this.cloneFrom.init();
                        this.cloneFrom.keys().forEach(( /**
                         * @param {?} key
                         * @return {?}
                         */function (/**
                         * @param {?} key
                         * @return {?}
                         */ key) { return ( /** @type {?} */(_this.map)).set(key, ( /** @type {?} */(( /** @type {?} */(( /** @type {?} */(_this.cloneFrom)).map)).get(key)))); }));
                        ( /** @type {?} */(this.updates)).forEach(( /**
                         * @param {?} update
                         * @return {?}
                         */function (/**
                         * @param {?} update
                         * @return {?}
                         */ update) {
                            switch (update.op) {
                                case 'a':
                                case 's':
                                    /** @type {?} */
                                    var base = (update.op === 'a' ? ( /** @type {?} */(_this.map)).get(update.param) : undefined) || [];
                                    base.push(( /** @type {?} */(update.value)));
                                    ( /** @type {?} */(_this.map)).set(update.param, base);
                                    break;
                                case 'd':
                                    if (update.value !== undefined) {
                                        /** @type {?} */
                                        var base_1 = ( /** @type {?} */(_this.map)).get(update.param) || [];
                                        /** @type {?} */
                                        var idx = base_1.indexOf(update.value);
                                        if (idx !== -1) {
                                            base_1.splice(idx, 1);
                                        }
                                        if (base_1.length > 0) {
                                            ( /** @type {?} */(_this.map)).set(update.param, base_1);
                                        }
                                        else {
                                            ( /** @type {?} */(_this.map)).delete(update.param);
                                        }
                                    }
                                    else {
                                        ( /** @type {?} */(_this.map)).delete(update.param);
                                        break;
                                    }
                            }
                        }));
                        this.cloneFrom = this.updates = null;
                    }
                };
                return HttpParams;
            }());
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Construction interface for `HttpRequest`s.
             *
             * All values are optional and will override default values if provided.
             * @record
             */
            function HttpRequestInit() { }
            if (false) { }
            /**
             * Determine whether the given HTTP method may include a body.
             * @param {?} method
             * @return {?}
             */
            function mightHaveBody(method) {
                switch (method) {
                    case 'DELETE':
                    case 'GET':
                    case 'HEAD':
                    case 'OPTIONS':
                    case 'JSONP':
                        return false;
                    default:
                        return true;
                }
            }
            /**
             * Safely assert whether the given value is an ArrayBuffer.
             *
             * In some execution environments ArrayBuffer is not defined.
             * @param {?} value
             * @return {?}
             */
            function isArrayBuffer(value) {
                return typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer;
            }
            /**
             * Safely assert whether the given value is a Blob.
             *
             * In some execution environments Blob is not defined.
             * @param {?} value
             * @return {?}
             */
            function isBlob(value) {
                return typeof Blob !== 'undefined' && value instanceof Blob;
            }
            /**
             * Safely assert whether the given value is a FormData instance.
             *
             * In some execution environments FormData is not defined.
             * @param {?} value
             * @return {?}
             */
            function isFormData(value) {
                return typeof FormData !== 'undefined' && value instanceof FormData;
            }
            /**
             * An outgoing HTTP request with an optional typed body.
             *
             * `HttpRequest` represents an outgoing request, including URL, method,
             * headers, body, and other request configuration options. Instances should be
             * assumed to be immutable. To modify a `HttpRequest`, the `clone`
             * method should be used.
             *
             * \@publicApi
             * @template T
             */
            var HttpRequest = /** @class */ (function () {
                /**
                 * @param {?} method
                 * @param {?} url
                 * @param {?=} third
                 * @param {?=} fourth
                 */
                function HttpRequest(method, url, third, fourth) {
                    this.url = url;
                    /**
                     * The request body, or `null` if one isn't set.
                     *
                     * Bodies are not enforced to be immutable, as they can include a reference to any
                     * user-defined data type. However, interceptors should take care to preserve
                     * idempotence by treating them as such.
                     */
                    this.body = null;
                    /**
                     * Whether this request should be made in a way that exposes progress events.
                     *
                     * Progress events are expensive (change detection runs on each event) and so
                     * they should only be requested if the consumer intends to monitor them.
                     */
                    this.reportProgress = false;
                    /**
                     * Whether this request should be sent with outgoing credentials (cookies).
                     */
                    this.withCredentials = false;
                    /**
                     * The expected response type of the server.
                     *
                     * This is used to parse the response appropriately before returning it to
                     * the requestee.
                     */
                    this.responseType = 'json';
                    this.method = method.toUpperCase();
                    // Next, need to figure out which argument holds the HttpRequestInit
                    // options, if any.
                    /** @type {?} */
                    var options;
                    // Check whether a body argument is expected. The only valid way to omit
                    // the body argument is to use a known no-body method like GET.
                    if (mightHaveBody(this.method) || !!fourth) {
                        // Body is the third argument, options are the fourth.
                        this.body = (third !== undefined) ? ( /** @type {?} */(third)) : null;
                        options = fourth;
                    }
                    else {
                        // No body required, options are the third argument. The body stays null.
                        options = ( /** @type {?} */(third));
                    }
                    // If options have been passed, interpret them.
                    if (options) {
                        // Normalize reportProgress and withCredentials.
                        this.reportProgress = !!options.reportProgress;
                        this.withCredentials = !!options.withCredentials;
                        // Override default response type of 'json' if one is provided.
                        if (!!options.responseType) {
                            this.responseType = options.responseType;
                        }
                        // Override headers if they're provided.
                        if (!!options.headers) {
                            this.headers = options.headers;
                        }
                        if (!!options.params) {
                            this.params = options.params;
                        }
                    }
                    // If no headers have been passed in, construct a new HttpHeaders instance.
                    if (!this.headers) {
                        this.headers = new HttpHeaders();
                    }
                    // If no parameters have been passed in, construct a new HttpUrlEncodedParams instance.
                    if (!this.params) {
                        this.params = new HttpParams();
                        this.urlWithParams = url;
                    }
                    else {
                        // Encode the parameters to a string in preparation for inclusion in the URL.
                        /** @type {?} */
                        var params = this.params.toString();
                        if (params.length === 0) {
                            // No parameters, the visible URL is just the URL given at creation time.
                            this.urlWithParams = url;
                        }
                        else {
                            // Does the URL already have query parameters? Look for '?'.
                            /** @type {?} */
                            var qIdx = url.indexOf('?');
                            // There are 3 cases to handle:
                            // 1) No existing parameters -> append '?' followed by params.
                            // 2) '?' exists and is followed by existing query string ->
                            //    append '&' followed by params.
                            // 3) '?' exists at the end of the url -> append params directly.
                            // This basically amounts to determining the character, if any, with
                            // which to join the URL and parameters.
                            /** @type {?} */
                            var sep = qIdx === -1 ? '?' : (qIdx < url.length - 1 ? '&' : '');
                            this.urlWithParams = url + sep + params;
                        }
                    }
                }
                /**
                 * Transform the free-form body into a serialized format suitable for
                 * transmission to the server.
                 * @return {?}
                 */
                HttpRequest.prototype.serializeBody = function () {
                    // If no body is present, no need to serialize it.
                    if (this.body === null) {
                        return null;
                    }
                    // Check whether the body is already in a serialized form. If so,
                    // it can just be returned directly.
                    if (isArrayBuffer(this.body) || isBlob(this.body) || isFormData(this.body) ||
                        typeof this.body === 'string') {
                        return this.body;
                    }
                    // Check whether the body is an instance of HttpUrlEncodedParams.
                    if (this.body instanceof HttpParams) {
                        return this.body.toString();
                    }
                    // Check whether the body is an object or array, and serialize with JSON if so.
                    if (typeof this.body === 'object' || typeof this.body === 'boolean' ||
                        Array.isArray(this.body)) {
                        return JSON.stringify(this.body);
                    }
                    // Fall back on toString() for everything else.
                    return (( /** @type {?} */(this.body))).toString();
                };
                /**
                 * Examine the body and attempt to infer an appropriate MIME type
                 * for it.
                 *
                 * If no such type can be inferred, this method will return `null`.
                 * @return {?}
                 */
                HttpRequest.prototype.detectContentTypeHeader = function () {
                    // An empty body has no content type.
                    if (this.body === null) {
                        return null;
                    }
                    // FormData bodies rely on the browser's content type assignment.
                    if (isFormData(this.body)) {
                        return null;
                    }
                    // Blobs usually have their own content type. If it doesn't, then
                    // no type can be inferred.
                    if (isBlob(this.body)) {
                        return this.body.type || null;
                    }
                    // Array buffers have unknown contents and thus no type can be inferred.
                    if (isArrayBuffer(this.body)) {
                        return null;
                    }
                    // Technically, strings could be a form of JSON data, but it's safe enough
                    // to assume they're plain strings.
                    if (typeof this.body === 'string') {
                        return 'text/plain';
                    }
                    // `HttpUrlEncodedParams` has its own content-type.
                    if (this.body instanceof HttpParams) {
                        return 'application/x-www-form-urlencoded;charset=UTF-8';
                    }
                    // Arrays, objects, and numbers will be encoded as JSON.
                    if (typeof this.body === 'object' || typeof this.body === 'number' ||
                        Array.isArray(this.body)) {
                        return 'application/json';
                    }
                    // No type could be inferred.
                    return null;
                };
                /**
                 * @param {?=} update
                 * @return {?}
                 */
                HttpRequest.prototype.clone = function (update) {
                    if (update === void 0) { update = {}; }
                    // For method, url, and responseType, take the current value unless
                    // it is overridden in the update hash.
                    /** @type {?} */
                    var method = update.method || this.method;
                    /** @type {?} */
                    var url = update.url || this.url;
                    /** @type {?} */
                    var responseType = update.responseType || this.responseType;
                    // The body is somewhat special - a `null` value in update.body means
                    // whatever current body is present is being overridden with an empty
                    // body, whereas an `undefined` value in update.body implies no
                    // override.
                    /** @type {?} */
                    var body = (update.body !== undefined) ? update.body : this.body;
                    // Carefully handle the boolean options to differentiate between
                    // `false` and `undefined` in the update args.
                    /** @type {?} */
                    var withCredentials = (update.withCredentials !== undefined) ? update.withCredentials : this.withCredentials;
                    /** @type {?} */
                    var reportProgress = (update.reportProgress !== undefined) ? update.reportProgress : this.reportProgress;
                    // Headers and params may be appended to if `setHeaders` or
                    // `setParams` are used.
                    /** @type {?} */
                    var headers = update.headers || this.headers;
                    /** @type {?} */
                    var params = update.params || this.params;
                    // Check whether the caller has asked to add headers.
                    if (update.setHeaders !== undefined) {
                        // Set every requested header.
                        headers =
                            Object.keys(update.setHeaders)
                                .reduce(( /**
                         * @param {?} headers
                         * @param {?} name
                         * @return {?}
                         */function (headers, name) { return headers.set(name, ( /** @type {?} */(update.setHeaders))[name]); }), headers);
                    }
                    // Check whether the caller has asked to set params.
                    if (update.setParams) {
                        // Set every requested param.
                        params = Object.keys(update.setParams)
                            .reduce(( /**
                     * @param {?} params
                     * @param {?} param
                     * @return {?}
                     */function (params, param) { return params.set(param, ( /** @type {?} */(update.setParams))[param]); }), params);
                    }
                    // Finally, construct the new HttpRequest using the pieces from above.
                    return new HttpRequest(method, url, body, {
                        params: params, headers: headers, reportProgress: reportProgress, responseType: responseType, withCredentials: withCredentials,
                    });
                };
                return HttpRequest;
            }());
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @enum {number} */
            var HttpEventType = {
                /**
                 * The request was sent out over the wire.
                 */
                Sent: 0,
                /**
                 * An upload progress event was received.
                 */
                UploadProgress: 1,
                /**
                 * The response status code and headers were received.
                 */
                ResponseHeader: 2,
                /**
                 * A download progress event was received.
                 */
                DownloadProgress: 3,
                /**
                 * The full response including the body was received.
                 */
                Response: 4,
                /**
                 * A custom event from an interceptor or a backend.
                 */
                User: 5,
            };
            HttpEventType[HttpEventType.Sent] = 'Sent';
            HttpEventType[HttpEventType.UploadProgress] = 'UploadProgress';
            HttpEventType[HttpEventType.ResponseHeader] = 'ResponseHeader';
            HttpEventType[HttpEventType.DownloadProgress] = 'DownloadProgress';
            HttpEventType[HttpEventType.Response] = 'Response';
            HttpEventType[HttpEventType.User] = 'User';
            /**
             * Base interface for progress events.
             *
             * \@publicApi
             * @record
             */
            function HttpProgressEvent() { }
            if (false) { }
            /**
             * A download progress event.
             *
             * \@publicApi
             * @record
             */
            function HttpDownloadProgressEvent() { }
            if (false) { }
            /**
             * An upload progress event.
             *
             * \@publicApi
             * @record
             */
            function HttpUploadProgressEvent() { }
            if (false) { }
            /**
             * An event indicating that the request was sent to the server. Useful
             * when a request may be retried multiple times, to distinguish between
             * retries on the final event stream.
             *
             * \@publicApi
             * @record
             */
            function HttpSentEvent() { }
            if (false) { }
            /**
             * A user-defined event.
             *
             * Grouping all custom events under this type ensures they will be handled
             * and forwarded by all implementations of interceptors.
             *
             * \@publicApi
             * @record
             * @template T
             */
            function HttpUserEvent() { }
            if (false) { }
            /**
             * An error that represents a failed attempt to JSON.parse text coming back
             * from the server.
             *
             * It bundles the Error object with the actual response body that failed to parse.
             *
             *
             * @record
             */
            function HttpJsonParseError() { }
            if (false) { }
            /**
             * Base class for both `HttpResponse` and `HttpHeaderResponse`.
             *
             * \@publicApi
             * @abstract
             */
            var HttpResponseBase = /** @class */ (function () {
                /**
                 * Super-constructor for all responses.
                 *
                 * The single parameter accepted is an initialization hash. Any properties
                 * of the response passed there will override the default values.
                 * @param {?} init
                 * @param {?=} defaultStatus
                 * @param {?=} defaultStatusText
                 */
                function HttpResponseBase(init, defaultStatus, defaultStatusText) {
                    if (defaultStatus === void 0) { defaultStatus = 200; }
                    if (defaultStatusText === void 0) { defaultStatusText = 'OK'; }
                    // If the hash has values passed, use them to initialize the response.
                    // Otherwise use the default values.
                    this.headers = init.headers || new HttpHeaders();
                    this.status = init.status !== undefined ? init.status : defaultStatus;
                    this.statusText = init.statusText || defaultStatusText;
                    this.url = init.url || null;
                    // Cache the ok value to avoid defining a getter.
                    this.ok = this.status >= 200 && this.status < 300;
                }
                return HttpResponseBase;
            }());
            if (false) { }
            /**
             * A partial HTTP response which only includes the status and header data,
             * but no response body.
             *
             * `HttpHeaderResponse` is a `HttpEvent` available on the response
             * event stream, only when progress events are requested.
             *
             * \@publicApi
             */
            var HttpHeaderResponse = /** @class */ (function (_super) {
                __extends(HttpHeaderResponse, _super);
                /**
                 * Create a new `HttpHeaderResponse` with the given parameters.
                 * @param {?=} init
                 */
                function HttpHeaderResponse(init) {
                    if (init === void 0) { init = {}; }
                    var _this = _super.call(this, init) || this;
                    _this.type = HttpEventType.ResponseHeader;
                    return _this;
                }
                /**
                 * Copy this `HttpHeaderResponse`, overriding its contents with the
                 * given parameter hash.
                 * @param {?=} update
                 * @return {?}
                 */
                HttpHeaderResponse.prototype.clone = function (update) {
                    if (update === void 0) { update = {}; }
                    // Perform a straightforward initialization of the new HttpHeaderResponse,
                    // overriding the current parameters with new ones if given.
                    return new HttpHeaderResponse({
                        headers: update.headers || this.headers,
                        status: update.status !== undefined ? update.status : this.status,
                        statusText: update.statusText || this.statusText,
                        url: update.url || this.url || undefined,
                    });
                };
                return HttpHeaderResponse;
            }(HttpResponseBase));
            if (false) { }
            /**
             * A full HTTP response, including a typed response body (which may be `null`
             * if one was not returned).
             *
             * `HttpResponse` is a `HttpEvent` available on the response event
             * stream.
             *
             * \@publicApi
             * @template T
             */
            var HttpResponse = /** @class */ (function (_super) {
                __extends(HttpResponse, _super);
                /**
                 * Construct a new `HttpResponse`.
                 * @param {?=} init
                 */
                function HttpResponse(init) {
                    if (init === void 0) { init = {}; }
                    var _this = _super.call(this, init) || this;
                    _this.type = HttpEventType.Response;
                    _this.body = init.body !== undefined ? init.body : null;
                    return _this;
                }
                /**
                 * @param {?=} update
                 * @return {?}
                 */
                HttpResponse.prototype.clone = function (update) {
                    if (update === void 0) { update = {}; }
                    return new HttpResponse({
                        body: (update.body !== undefined) ? update.body : this.body,
                        headers: update.headers || this.headers,
                        status: (update.status !== undefined) ? update.status : this.status,
                        statusText: update.statusText || this.statusText,
                        url: update.url || this.url || undefined,
                    });
                };
                return HttpResponse;
            }(HttpResponseBase));
            if (false) { }
            /**
             * A response that represents an error or failure, either from a
             * non-successful HTTP status, an error while executing the request,
             * or some other failure which occurred during the parsing of the response.
             *
             * Any error returned on the `Observable` response stream will be
             * wrapped in an `HttpErrorResponse` to provide additional context about
             * the state of the HTTP layer when the error occurred. The error property
             * will contain either a wrapped Error object or the error response returned
             * from the server.
             *
             * \@publicApi
             */
            var HttpErrorResponse = /** @class */ (function (_super) {
                __extends(HttpErrorResponse, _super);
                /**
                 * @param {?} init
                 */
                function HttpErrorResponse(init) {
                    var _this = 
                    // Initialize with a default status of 0 / Unknown Error.
                    _super.call(this, init, 0, 'Unknown Error') || this;
                    _this.name = 'HttpErrorResponse';
                    /**
                     * Errors are never okay, even when the status code is in the 2xx success range.
                     */
                    _this.ok = false;
                    // If the response was successful, then this was a parse error. Otherwise, it was
                    // a protocol-level failure of some sort. Either the request failed in transit
                    // or the server returned an unsuccessful status code.
                    if (_this.status >= 200 && _this.status < 300) {
                        _this.message = "Http failure during parsing for " + (init.url || '(unknown url)');
                    }
                    else {
                        _this.message =
                            "Http failure response for " + (init.url || '(unknown url)') + ": " + init.status + " " + init.statusText;
                    }
                    _this.error = init.error || null;
                    return _this;
                }
                return HttpErrorResponse;
            }(HttpResponseBase));
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Constructs an instance of `HttpRequestOptions<T>` from a source `HttpMethodOptions` and
             * the given `body`. This function clones the object and adds the body.
             *
             * Note that the `responseType` *options* value is a String that identifies the
             * single data type of the response.
             * A single overload version of the method handles each response type.
             * The value of `responseType` cannot be a union, as the combined signature could imply.
             *
             * @template T
             * @param {?} options
             * @param {?} body
             * @return {?}
             */
            function addBody(options, body) {
                return {
                    body: body,
                    headers: options.headers,
                    observe: options.observe,
                    params: options.params,
                    reportProgress: options.reportProgress,
                    responseType: options.responseType,
                    withCredentials: options.withCredentials,
                };
            }
            /**
             * Performs HTTP requests.
             * This service is available as an injectable class, with methods to perform HTTP requests.
             * Each request method has multiple signatures, and the return type varies based on
             * the signature that is called (mainly the values of `observe` and `responseType`).
             *
             * Note that the `responseType` *options* value is a String that identifies the
             * single data type of the response.
             * A single overload version of the method handles each response type.
             * The value of `responseType` cannot be a union, as the combined signature could imply.
             *
             * \@usageNotes
             * Sample HTTP requests for the [Tour of Heroes](/tutorial/toh-pt0) application.
             *
             * ### HTTP Request Example
             *
             * ```
             *  // GET heroes whose name contains search term
             * searchHeroes(term: string): observable<Hero[]>{
             *
             *  const params = new HttpParams({fromString: 'name=term'});
             *    return this.httpClient.request('GET', this.heroesUrl, {responseType:'json', params});
             * }
             * ```
             * ### JSONP Example
             * ```
             * requestJsonp(url, callback = 'callback') {
             *  return this.httpClient.jsonp(this.heroesURL, callback);
             * }
             * ```
             *
             * ### PATCH Example
             * ```
             * // PATCH one of the heroes' name
             * patchHero (id: number, heroName: string): Observable<{}> {
             * const url = `${this.heroesUrl}/${id}`;   // PATCH api/heroes/42
             *  return this.httpClient.patch(url, {name: heroName}, httpOptions)
             *    .pipe(catchError(this.handleError('patchHero')));
             * }
             * ```
             *
             * @see [HTTP Guide](guide/http)
             *
             * \@publicApi
             */
            var HttpClient = /** @class */ (function () {
                /**
                 * @param {?} handler
                 */
                function HttpClient(handler) {
                    this.handler = handler;
                }
                /**
                 * Constructs an observable for a generic HTTP request that, when subscribed,
                 * fires the request through the chain of registered interceptors and on to the
                 * server.
                 *
                 * You can pass an `HttpRequest` directly as the only parameter. In this case,
                 * the call returns an observable of the raw `HttpEvent` stream.
                 *
                 * Alternatively you can pass an HTTP method as the first parameter,
                 * a URL string as the second, and an options hash containing the request body as the third.
                 * See `addBody()`. In this case, the specified `responseType` and `observe` options determine the
                 * type of returned observable.
                 *   * The `responseType` value determines how a successful response body is parsed.
                 *   * If `responseType` is the default `json`, you can pass a type interface for the resulting
                 * object as a type parameter to the call.
                 *
                 * The `observe` value determines the return type, according to what you are interested in
                 * observing.
                 *   * An `observe` value of events returns an observable of the raw `HttpEvent` stream, including
                 * progress events by default.
                 *   * An `observe` value of response returns an observable of `HttpResponse<T>`,
                 * where the `T` parameter depends on the `responseType` and any optionally provided type
                 * parameter.
                 *   * An `observe` value of body returns an observable of `<T>` with the same `T` body type.
                 *
                 * @param {?} first
                 * @param {?=} url
                 * @param {?=} options
                 * @return {?}
                 */
                HttpClient.prototype.request = function (first, url, options) {
                    var _this = this;
                    if (options === void 0) { options = {}; }
                    /** @type {?} */
                    var req;
                    // First, check whether the primary argument is an instance of `HttpRequest`.
                    if (first instanceof HttpRequest) {
                        // It is. The other arguments must be undefined (per the signatures) and can be
                        // ignored.
                        req = ( /** @type {?} */(first));
                    }
                    else {
                        // It's a string, so it represents a URL. Construct a request based on it,
                        // and incorporate the remaining arguments (assuming `GET` unless a method is
                        // provided.
                        // Figure out the headers.
                        /** @type {?} */
                        var headers = undefined;
                        if (options.headers instanceof HttpHeaders) {
                            headers = options.headers;
                        }
                        else {
                            headers = new HttpHeaders(options.headers);
                        }
                        // Sort out parameters.
                        /** @type {?} */
                        var params = undefined;
                        if (!!options.params) {
                            if (options.params instanceof HttpParams) {
                                params = options.params;
                            }
                            else {
                                params = new HttpParams(( /** @type {?} */({ fromObject: options.params })));
                            }
                        }
                        // Construct the request.
                        req = new HttpRequest(first, ( /** @type {?} */(url)), (options.body !== undefined ? options.body : null), {
                            headers: headers,
                            params: params,
                            reportProgress: options.reportProgress,
                            // By default, JSON is assumed to be returned for all calls.
                            responseType: options.responseType || 'json',
                            withCredentials: options.withCredentials,
                        });
                    }
                    // Start with an Observable.of() the initial request, and run the handler (which
                    // includes all interceptors) inside a concatMap(). This way, the handler runs
                    // inside an Observable chain, which causes interceptors to be re-run on every
                    // subscription (this also makes retries re-run the handler, including interceptors).
                    /** @type {?} */
                    var events$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(( /**
                     * @param {?} req
                     * @return {?}
                     */function (req) { return _this.handler.handle(req); })));
                    // If coming via the API signature which accepts a previously constructed HttpRequest,
                    // the only option is to get the event stream. Otherwise, return the event stream if
                    // that is what was requested.
                    if (first instanceof HttpRequest || options.observe === 'events') {
                        return events$;
                    }
                    // The requested stream contains either the full response or the body. In either
                    // case, the first step is to filter the event stream to extract a stream of
                    // responses(s).
                    /** @type {?} */
                    var res$ = ( /** @type {?} */(events$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(( /**
                     * @param {?} event
                     * @return {?}
                     */function (event) { return event instanceof HttpResponse; })))));
                    // Decide which stream to return.
                    switch (options.observe || 'body') {
                        case 'body':
                            // The requested stream is the body. Map the response stream to the response
                            // body. This could be done more simply, but a misbehaving interceptor might
                            // transform the response body into a different format and ignore the requested
                            // responseType. Guard against this by validating that the response is of the
                            // requested type.
                            switch (req.responseType) {
                                case 'arraybuffer':
                                    return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(( /**
                                     * @param {?} res
                                     * @return {?}
                                     */function (res) {
                                        // Validate that the body is an ArrayBuffer.
                                        if (res.body !== null && !(res.body instanceof ArrayBuffer)) {
                                            throw new Error('Response is not an ArrayBuffer.');
                                        }
                                        return res.body;
                                    })));
                                case 'blob':
                                    return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(( /**
                                     * @param {?} res
                                     * @return {?}
                                     */function (res) {
                                        // Validate that the body is a Blob.
                                        if (res.body !== null && !(res.body instanceof Blob)) {
                                            throw new Error('Response is not a Blob.');
                                        }
                                        return res.body;
                                    })));
                                case 'text':
                                    return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(( /**
                                     * @param {?} res
                                     * @return {?}
                                     */function (res) {
                                        // Validate that the body is a string.
                                        if (res.body !== null && typeof res.body !== 'string') {
                                            throw new Error('Response is not a string.');
                                        }
                                        return res.body;
                                    })));
                                case 'json':
                                default:
                                    // No validation needed for JSON responses, as they can be of any type.
                                    return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(( /**
                                     * @param {?} res
                                     * @return {?}
                                     */function (res) { return res.body; })));
                            }
                        case 'response':
                            // The response stream was requested directly, so return it.
                            return res$;
                        default:
                            // Guard against new future observe types being added.
                            throw new Error("Unreachable: unhandled observe type " + options.observe + "}");
                    }
                };
                /**
                 * Constructs an observable that, when subscribed, causes the configured
                 * `DELETE` request to execute on the server. See the individual overloads for
                 * details on the return type.
                 *
                 * @param {?} url     The endpoint URL.
                 * @param {?=} options The HTTP options to send with the request.
                 *
                 * @return {?}
                 */
                HttpClient.prototype.delete = function (url, options) {
                    if (options === void 0) { options = {}; }
                    return this.request('DELETE', url, ( /** @type {?} */(options)));
                };
                /**
                 * Constructs an observable that, when subscribed, causes the configured
                 * `GET` request to execute on the server. See the individual overloads for
                 * details on the return type.
                 * @param {?} url
                 * @param {?=} options
                 * @return {?}
                 */
                HttpClient.prototype.get = function (url, options) {
                    if (options === void 0) { options = {}; }
                    return this.request('GET', url, ( /** @type {?} */(options)));
                };
                /**
                 * Constructs an observable that, when subscribed, causes the configured
                 * `HEAD` request to execute on the server. The `HEAD` method returns
                 * meta information about the resource without transferring the
                 * resource itself. See the individual overloads for
                 * details on the return type.
                 * @param {?} url
                 * @param {?=} options
                 * @return {?}
                 */
                HttpClient.prototype.head = function (url, options) {
                    if (options === void 0) { options = {}; }
                    return this.request('HEAD', url, ( /** @type {?} */(options)));
                };
                /**
                 * Constructs an `Observable` that, when subscribed, causes a request with the special method
                 * `JSONP` to be dispatched via the interceptor pipeline.
                 * The [JSONP pattern](https://en.wikipedia.org/wiki/JSONP) works around limitations of certain
                 * API endpoints that don't support newer,
                 * and preferable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) protocol.
                 * JSONP treats the endpoint API as a JavaScript file and tricks the browser to process the
                 * requests even if the API endpoint is not located on the same domain (origin) as the client-side
                 * application making the request.
                 * The endpoint API must support JSONP callback for JSONP requests to work.
                 * The resource API returns the JSON response wrapped in a callback function.
                 * You can pass the callback function name as one of the query parameters.
                 * Note that JSONP requests can only be used with `GET` requests.
                 *
                 * @template T
                 * @param {?} url The resource URL.
                 * @param {?} callbackParam The callback function name.
                 *
                 * @return {?}
                 */
                HttpClient.prototype.jsonp = function (url, callbackParam) {
                    return this.request('JSONP', url, {
                        params: new HttpParams().append(callbackParam, 'JSONP_CALLBACK'),
                        observe: 'body',
                        responseType: 'json',
                    });
                };
                /**
                 * Constructs an `Observable` that, when subscribed, causes the configured
                 * `OPTIONS` request to execute on the server. This method allows the client
                 * to determine the supported HTTP methods and other capabilites of an endpoint,
                 * without implying a resource action. See the individual overloads for
                 * details on the return type.
                 * @param {?} url
                 * @param {?=} options
                 * @return {?}
                 */
                HttpClient.prototype.options = function (url, options) {
                    if (options === void 0) { options = {}; }
                    return this.request('OPTIONS', url, ( /** @type {?} */(options)));
                };
                /**
                 * Constructs an observable that, when subscribed, causes the configured
                 * `PATCH` request to execute on the server. See the individual overloads for
                 * details on the return type.
                 * @param {?} url
                 * @param {?} body
                 * @param {?=} options
                 * @return {?}
                 */
                HttpClient.prototype.patch = function (url, body, options) {
                    if (options === void 0) { options = {}; }
                    return this.request('PATCH', url, addBody(options, body));
                };
                /**
                 * Constructs an observable that, when subscribed, causes the configured
                 * `POST` request to execute on the server. The server responds with the location of
                 * the replaced resource. See the individual overloads for
                 * details on the return type.
                 * @param {?} url
                 * @param {?} body
                 * @param {?=} options
                 * @return {?}
                 */
                HttpClient.prototype.post = function (url, body, options) {
                    if (options === void 0) { options = {}; }
                    return this.request('POST', url, addBody(options, body));
                };
                /**
                 * Constructs an observable that, when subscribed, causes the configured
                 * `PUT` request to execute on the server. The `PUT` method replaces an existing resource
                 * with a new set of values.
                 * See the individual overloads for details on the return type.
                 * @param {?} url
                 * @param {?} body
                 * @param {?=} options
                 * @return {?}
                 */
                HttpClient.prototype.put = function (url, body, options) {
                    if (options === void 0) { options = {}; }
                    return this.request('PUT', url, addBody(options, body));
                };
                return HttpClient;
            }());
            HttpClient.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
            ];
            /** @nocollapse */
            HttpClient.ctorParameters = function () { return [
                { type: HttpHandler }
            ]; };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Intercepts and handles an `HttpRequest` or `HttpResponse`.
             *
             * Most interceptors transform the outgoing request before passing it to the
             * next interceptor in the chain, by calling `next.handle(transformedReq)`.
             * An interceptor may transform the
             * response event stream as well, by applying additional RxJS operators on the stream
             * returned by `next.handle()`.
             *
             * More rarely, an interceptor may handle the request entirely,
             * and compose a new event stream instead of invoking `next.handle()`. This is an
             * acceptable behavior, but keep in mind that further interceptors will be skipped entirely.
             *
             * It is also rare but valid for an interceptor to return multiple responses on the
             * event stream for a single request.
             *
             * \@publicApi
             *
             * @see [HTTP Guide](guide/http#intercepting-requests-and-responses)
             *
             * \@usageNotes
             *
             * To use the same instance of `HttpInterceptors` for the entire app, import the `HttpClientModule`
             * only in your `AppModule`, and add the interceptors to the root application injector .
             * If you import `HttpClientModule` multiple times across different modules (for example, in lazy
             * loading modules), each import creates a new copy of the `HttpClientModule`, which overwrites the interceptors
             * provided in the root module.
             *
             * @record
             */
            function HttpInterceptor() { }
            if (false) { }
            /**
             * `HttpHandler` which applies an `HttpInterceptor` to an `HttpRequest`.
             *
             *
             */
            var HttpInterceptorHandler = /** @class */ (function () {
                /**
                 * @param {?} next
                 * @param {?} interceptor
                 */
                function HttpInterceptorHandler(next, interceptor) {
                    this.next = next;
                    this.interceptor = interceptor;
                }
                /**
                 * @param {?} req
                 * @return {?}
                 */
                HttpInterceptorHandler.prototype.handle = function (req) {
                    return this.interceptor.intercept(req, this.next);
                };
                return HttpInterceptorHandler;
            }());
            if (false) { }
            /**
             * A multi-provider token that represents the array of registered
             * `HttpInterceptor` objects.
             *
             * \@publicApi
             * @type {?}
             */
            var HTTP_INTERCEPTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('HTTP_INTERCEPTORS');
            var NoopInterceptor = /** @class */ (function () {
                function NoopInterceptor() {
                }
                /**
                 * @param {?} req
                 * @param {?} next
                 * @return {?}
                 */
                NoopInterceptor.prototype.intercept = function (req, next) {
                    return next.handle(req);
                };
                return NoopInterceptor;
            }());
            NoopInterceptor.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            // Every request made through JSONP needs a callback name that's unique across the
            // whole page. Each request is assigned an id and the callback name is constructed
            // from that. The next id to be assigned is tracked in a global variable here that
            // is shared among all applications on the page.
            /** @type {?} */
            var nextRequestId = 0;
            // Error text given when a JSONP script is injected, but doesn't invoke the callback
            // passed in its URL.
            /** @type {?} */
            var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
            // Error text given when a request is passed to the JsonpClientBackend that doesn't
            // have a request method JSONP.
            /** @type {?} */
            var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use JSONP request method.';
            /** @type {?} */
            var JSONP_ERR_WRONG_RESPONSE_TYPE = 'JSONP requests must use Json response type.';
            /**
             * DI token/abstract type representing a map of JSONP callbacks.
             *
             * In the browser, this should always be the `window` object.
             *
             *
             * @abstract
             */
            var JsonpCallbackContext = /** @class */ (function () {
                function JsonpCallbackContext() {
                }
                return JsonpCallbackContext;
            }());
            /**
             * Processes an `HttpRequest` with the JSONP method,
             * by performing JSONP style requests.
             * @see `HttpHandler`
             * @see `HttpXhrBackend`
             *
             * \@publicApi
             */
            var JsonpClientBackend = /** @class */ (function () {
                /**
                 * @param {?} callbackMap
                 * @param {?} document
                 */
                function JsonpClientBackend(callbackMap, document) {
                    this.callbackMap = callbackMap;
                    this.document = document;
                }
                /**
                 * Get the name of the next callback method, by incrementing the global `nextRequestId`.
                 * @private
                 * @return {?}
                 */
                JsonpClientBackend.prototype.nextCallback = function () { return "ng_jsonp_callback_" + nextRequestId++; };
                /**
                 * Processes a JSONP request and returns an event stream of the results.
                 * @param {?} req The request object.
                 * @return {?} An observable of the response events.
                 *
                 */
                JsonpClientBackend.prototype.handle = function (req) {
                    var _this = this;
                    // Firstly, check both the method and response type. If either doesn't match
                    // then the request was improperly routed here and cannot be handled.
                    if (req.method !== 'JSONP') {
                        throw new Error(JSONP_ERR_WRONG_METHOD);
                    }
                    else if (req.responseType !== 'json') {
                        throw new Error(JSONP_ERR_WRONG_RESPONSE_TYPE);
                    }
                    // Everything else happens inside the Observable boundary.
                    return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](( /**
                     * @param {?} observer
                     * @return {?}
                     */function (observer) {
                        // The first step to make a request is to generate the callback name, and replace the
                        // callback placeholder in the URL with the name. Care has to be taken here to ensure
                        // a trailing &, if matched, gets inserted back into the URL in the correct place.
                        /** @type {?} */
                        var callback = _this.nextCallback();
                        /** @type {?} */
                        var url = req.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, "=" + callback + "$1");
                        // Construct the <script> tag and point it at the URL.
                        /** @type {?} */
                        var node = _this.document.createElement('script');
                        node.src = url;
                        // A JSONP request requires waiting for multiple callbacks. These variables
                        // are closed over and track state across those callbacks.
                        // The response object, if one has been received, or null otherwise.
                        /** @type {?} */
                        var body = null;
                        // Whether the response callback has been called.
                        /** @type {?} */
                        var finished = false;
                        // Whether the request has been cancelled (and thus any other callbacks)
                        // should be ignored.
                        /** @type {?} */
                        var cancelled = false;
                        // Set the response callback in this.callbackMap (which will be the window
                        // object in the browser. The script being loaded via the <script> tag will
                        // eventually call this callback.
                        _this.callbackMap[callback] = ( /**
                         * @param {?=} data
                         * @return {?}
                         */function (data) {
                            // Data has been received from the JSONP script. Firstly, delete this callback.
                            delete _this.callbackMap[callback];
                            // Next, make sure the request wasn't cancelled in the meantime.
                            if (cancelled) {
                                return;
                            }
                            // Set state to indicate data was received.
                            body = data;
                            finished = true;
                        });
                        // cleanup() is a utility closure that removes the <script> from the page and
                        // the response callback from the window. This logic is used in both the
                        // success, error, and cancellation paths, so it's extracted out for convenience.
                        /** @type {?} */
                        var cleanup = ( /**
                         * @return {?}
                         */function () {
                            // Remove the <script> tag if it's still on the page.
                            if (node.parentNode) {
                                node.parentNode.removeChild(node);
                            }
                            // Remove the response callback from the callbackMap (window object in the
                            // browser).
                            delete _this.callbackMap[callback];
                        });
                        // onLoad() is the success callback which runs after the response callback
                        // if the JSONP script loads successfully. The event itself is unimportant.
                        // If something went wrong, onLoad() may run without the response callback
                        // having been invoked.
                        /** @type {?} */
                        var onLoad = ( /**
                         * @param {?} event
                         * @return {?}
                         */function (event) {
                            // Do nothing if the request has been cancelled.
                            if (cancelled) {
                                return;
                            }
                            // Cleanup the page.
                            cleanup();
                            // Check whether the response callback has run.
                            if (!finished) {
                                // It hasn't, something went wrong with the request. Return an error via
                                // the Observable error path. All JSONP errors have status 0.
                                observer.error(new HttpErrorResponse({
                                    url: url,
                                    status: 0,
                                    statusText: 'JSONP Error',
                                    error: new Error(JSONP_ERR_NO_CALLBACK),
                                }));
                                return;
                            }
                            // Success. body either contains the response body or null if none was
                            // returned.
                            observer.next(new HttpResponse({
                                body: body,
                                status: 200,
                                statusText: 'OK', url: url,
                            }));
                            // Complete the stream, the response is over.
                            observer.complete();
                        });
                        // onError() is the error callback, which runs if the script returned generates
                        // a Javascript error. It emits the error via the Observable error channel as
                        // a HttpErrorResponse.
                        /** @type {?} */
                        var onError = ( /**
                         * @param {?} error
                         * @return {?}
                         */function (error) {
                            // If the request was already cancelled, no need to emit anything.
                            if (cancelled) {
                                return;
                            }
                            cleanup();
                            // Wrap the error in a HttpErrorResponse.
                            observer.error(new HttpErrorResponse({
                                error: error,
                                status: 0,
                                statusText: 'JSONP Error', url: url,
                            }));
                        });
                        // Subscribe to both the success (load) and error events on the <script> tag,
                        // and add it to the page.
                        node.addEventListener('load', onLoad);
                        node.addEventListener('error', onError);
                        _this.document.body.appendChild(node);
                        // The request has now been successfully sent.
                        observer.next({ type: HttpEventType.Sent });
                        // Cancellation handler.
                        return ( /**
                         * @return {?}
                         */function () {
                            // Track the cancellation so event listeners won't do anything even if already scheduled.
                            cancelled = true;
                            // Remove the event listeners so they won't run if the events later fire.
                            node.removeEventListener('load', onLoad);
                            node.removeEventListener('error', onError);
                            // And finally, clean up the page.
                            cleanup();
                        });
                    }));
                };
                return JsonpClientBackend;
            }());
            JsonpClientBackend.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
            ];
            /** @nocollapse */
            JsonpClientBackend.ctorParameters = function () { return [
                { type: JsonpCallbackContext },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] }
            ]; };
            if (false) { }
            /**
             * Identifies requests with the method JSONP and
             * shifts them to the `JsonpClientBackend`.
             *
             * @see `HttpInterceptor`
             *
             * \@publicApi
             */
            var JsonpInterceptor = /** @class */ (function () {
                /**
                 * @param {?} jsonp
                 */
                function JsonpInterceptor(jsonp) {
                    this.jsonp = jsonp;
                }
                /**
                 * Identifies and handles a given JSONP request.
                 * @param {?} req The outgoing request object to handle.
                 * @param {?} next The next interceptor in the chain, or the backend
                 * if no interceptors remain in the chain.
                 * @return {?} An observable of the event stream.
                 */
                JsonpInterceptor.prototype.intercept = function (req, next) {
                    if (req.method === 'JSONP') {
                        return this.jsonp.handle(( /** @type {?} */(req)));
                    }
                    // Fall through for normal HTTP requests.
                    return next.handle(req);
                };
                return JsonpInterceptor;
            }());
            JsonpInterceptor.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
            ];
            /** @nocollapse */
            JsonpInterceptor.ctorParameters = function () { return [
                { type: JsonpClientBackend }
            ]; };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var XSSI_PREFIX = /^\)\]\}',?\n/;
            /**
             * Determine an appropriate URL for the response, by checking either
             * XMLHttpRequest.responseURL or the X-Request-URL header.
             * @param {?} xhr
             * @return {?}
             */
            function getResponseUrl(xhr) {
                if ('responseURL' in xhr && xhr.responseURL) {
                    return xhr.responseURL;
                }
                if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
                    return xhr.getResponseHeader('X-Request-URL');
                }
                return null;
            }
            /**
             * A wrapper around the `XMLHttpRequest` constructor.
             *
             * \@publicApi
             * @abstract
             */
            var XhrFactory = /** @class */ (function () {
                function XhrFactory() {
                }
                return XhrFactory;
            }());
            if (false) { }
            /**
             * A factory for `HttpXhrBackend` that uses the `XMLHttpRequest` browser API.
             *
             */
            var BrowserXhr = /** @class */ (function () {
                function BrowserXhr() {
                }
                /**
                 * @return {?}
                 */
                BrowserXhr.prototype.build = function () { return ( /** @type {?} */((new XMLHttpRequest()))); };
                return BrowserXhr;
            }());
            BrowserXhr.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
            ];
            /** @nocollapse */
            BrowserXhr.ctorParameters = function () { return []; };
            /**
             * Tracks a response from the server that does not yet have a body.
             * @record
             */
            function PartialResponse() { }
            if (false) { }
            /**
             * Uses `XMLHttpRequest` to send requests to a backend server.
             * @see `HttpHandler`
             * @see `JsonpClientBackend`
             *
             * \@publicApi
             */
            var HttpXhrBackend = /** @class */ (function () {
                /**
                 * @param {?} xhrFactory
                 */
                function HttpXhrBackend(xhrFactory) {
                    this.xhrFactory = xhrFactory;
                }
                /**
                 * Processes a request and returns a stream of response events.
                 * @param {?} req The request object.
                 * @return {?} An observable of the response events.
                 */
                HttpXhrBackend.prototype.handle = function (req) {
                    var _this = this;
                    // Quick check to give a better error message when a user attempts to use
                    // HttpClient.jsonp() without installing the JsonpClientModule
                    if (req.method === 'JSONP') {
                        throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");
                    }
                    // Everything happens on Observable subscription.
                    return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](( /**
                     * @param {?} observer
                     * @return {?}
                     */function (observer) {
                        // Start by setting up the XHR object with request method, URL, and withCredentials flag.
                        /** @type {?} */
                        var xhr = _this.xhrFactory.build();
                        xhr.open(req.method, req.urlWithParams);
                        if (!!req.withCredentials) {
                            xhr.withCredentials = true;
                        }
                        // Add all the requested headers.
                        req.headers.forEach(( /**
                         * @param {?} name
                         * @param {?} values
                         * @return {?}
                         */function (name, values) { return xhr.setRequestHeader(name, values.join(',')); }));
                        // Add an Accept header if one isn't present already.
                        if (!req.headers.has('Accept')) {
                            xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
                        }
                        // Auto-detect the Content-Type header if one isn't present already.
                        if (!req.headers.has('Content-Type')) {
                            /** @type {?} */
                            var detectedType = req.detectContentTypeHeader();
                            // Sometimes Content-Type detection fails.
                            if (detectedType !== null) {
                                xhr.setRequestHeader('Content-Type', detectedType);
                            }
                        }
                        // Set the responseType if one was requested.
                        if (req.responseType) {
                            /** @type {?} */
                            var responseType = req.responseType.toLowerCase();
                            // JSON responses need to be processed as text. This is because if the server
                            // returns an XSSI-prefixed JSON response, the browser will fail to parse it,
                            // xhr.response will be null, and xhr.responseText cannot be accessed to
                            // retrieve the prefixed JSON data in order to strip the prefix. Thus, all JSON
                            // is parsed by first requesting text and then applying JSON.parse.
                            xhr.responseType = ( /** @type {?} */(((responseType !== 'json') ? responseType : 'text')));
                        }
                        // Serialize the request body if one is present. If not, this will be set to null.
                        /** @type {?} */
                        var reqBody = req.serializeBody();
                        // If progress events are enabled, response headers will be delivered
                        // in two events - the HttpHeaderResponse event and the full HttpResponse
                        // event. However, since response headers don't change in between these
                        // two events, it doesn't make sense to parse them twice. So headerResponse
                        // caches the data extracted from the response whenever it's first parsed,
                        // to ensure parsing isn't duplicated.
                        /** @type {?} */
                        var headerResponse = null;
                        // partialFromXhr extracts the HttpHeaderResponse from the current XMLHttpRequest
                        // state, and memoizes it into headerResponse.
                        /** @type {?} */
                        var partialFromXhr = ( /**
                         * @return {?}
                         */function () {
                            if (headerResponse !== null) {
                                return headerResponse;
                            }
                            // Read status and normalize an IE9 bug (http://bugs.jquery.com/ticket/1450).
                            /** @type {?} */
                            var status = xhr.status === 1223 ? 204 : xhr.status;
                            /** @type {?} */
                            var statusText = xhr.statusText || 'OK';
                            // Parse headers from XMLHttpRequest - this step is lazy.
                            /** @type {?} */
                            var headers = new HttpHeaders(xhr.getAllResponseHeaders());
                            // Read the response URL from the XMLHttpResponse instance and fall back on the
                            // request URL.
                            /** @type {?} */
                            var url = getResponseUrl(xhr) || req.url;
                            // Construct the HttpHeaderResponse and memoize it.
                            headerResponse = new HttpHeaderResponse({ headers: headers, status: status, statusText: statusText, url: url });
                            return headerResponse;
                        });
                        // Next, a few closures are defined for the various events which XMLHttpRequest can
                        // emit. This allows them to be unregistered as event listeners later.
                        // First up is the load event, which represents a response being fully available.
                        /** @type {?} */
                        var onLoad = ( /**
                         * @return {?}
                         */function () {
                            // Read response state from the memoized partial data.
                            var _a = partialFromXhr(), headers = _a.headers, status = _a.status, statusText = _a.statusText, url = _a.url;
                            // The body will be read out if present.
                            /** @type {?} */
                            var body = null;
                            if (status !== 204) {
                                // Use XMLHttpRequest.response if set, responseText otherwise.
                                body = (typeof xhr.response === 'undefined') ? xhr.responseText : xhr.response;
                            }
                            // Normalize another potential bug (this one comes from CORS).
                            if (status === 0) {
                                status = !!body ? 200 : 0;
                            }
                            // ok determines whether the response will be transmitted on the event or
                            // error channel. Unsuccessful status codes (not 2xx) will always be errors,
                            // but a successful status code can still result in an error if the user
                            // asked for JSON data and the body cannot be parsed as such.
                            /** @type {?} */
                            var ok = status >= 200 && status < 300;
                            // Check whether the body needs to be parsed as JSON (in many cases the browser
                            // will have done that already).
                            if (req.responseType === 'json' && typeof body === 'string') {
                                // Save the original body, before attempting XSSI prefix stripping.
                                /** @type {?} */
                                var originalBody = body;
                                body = body.replace(XSSI_PREFIX, '');
                                try {
                                    // Attempt the parse. If it fails, a parse error should be delivered to the user.
                                    body = body !== '' ? JSON.parse(body) : null;
                                }
                                catch (error) {
                                    // Since the JSON.parse failed, it's reasonable to assume this might not have been a
                                    // JSON response. Restore the original body (including any XSSI prefix) to deliver
                                    // a better error response.
                                    body = originalBody;
                                    // If this was an error request to begin with, leave it as a string, it probably
                                    // just isn't JSON. Otherwise, deliver the parsing error to the user.
                                    if (ok) {
                                        // Even though the response status was 2xx, this is still an error.
                                        ok = false;
                                        // The parse error contains the text of the body that failed to parse.
                                        body = ( /** @type {?} */({ error: error, text: body }));
                                    }
                                }
                            }
                            if (ok) {
                                // A successful response is delivered on the event stream.
                                observer.next(new HttpResponse({
                                    body: body,
                                    headers: headers,
                                    status: status,
                                    statusText: statusText,
                                    url: url || undefined,
                                }));
                                // The full body has been received and delivered, no further events
                                // are possible. This request is complete.
                                observer.complete();
                            }
                            else {
                                // An unsuccessful request is delivered on the error channel.
                                observer.error(new HttpErrorResponse({
                                    // The error in this case is the response body (error from the server).
                                    error: body,
                                    headers: headers,
                                    status: status,
                                    statusText: statusText,
                                    url: url || undefined,
                                }));
                            }
                        });
                        // The onError callback is called when something goes wrong at the network level.
                        // Connection timeout, DNS error, offline, etc. These are actual errors, and are
                        // transmitted on the error channel.
                        /** @type {?} */
                        var onError = ( /**
                         * @param {?} error
                         * @return {?}
                         */function (error) {
                            var url = partialFromXhr().url;
                            /** @type {?} */
                            var res = new HttpErrorResponse({
                                error: error,
                                status: xhr.status || 0,
                                statusText: xhr.statusText || 'Unknown Error',
                                url: url || undefined,
                            });
                            observer.error(res);
                        });
                        // The sentHeaders flag tracks whether the HttpResponseHeaders event
                        // has been sent on the stream. This is necessary to track if progress
                        // is enabled since the event will be sent on only the first download
                        // progerss event.
                        /** @type {?} */
                        var sentHeaders = false;
                        // The download progress event handler, which is only registered if
                        // progress events are enabled.
                        /** @type {?} */
                        var onDownProgress = ( /**
                         * @param {?} event
                         * @return {?}
                         */function (event) {
                            // Send the HttpResponseHeaders event if it hasn't been sent already.
                            if (!sentHeaders) {
                                observer.next(partialFromXhr());
                                sentHeaders = true;
                            }
                            // Start building the download progress event to deliver on the response
                            // event stream.
                            /** @type {?} */
                            var progressEvent = {
                                type: HttpEventType.DownloadProgress,
                                loaded: event.loaded,
                            };
                            // Set the total number of bytes in the event if it's available.
                            if (event.lengthComputable) {
                                progressEvent.total = event.total;
                            }
                            // If the request was for text content and a partial response is
                            // available on XMLHttpRequest, include it in the progress event
                            // to allow for streaming reads.
                            if (req.responseType === 'text' && !!xhr.responseText) {
                                progressEvent.partialText = xhr.responseText;
                            }
                            // Finally, fire the event.
                            observer.next(progressEvent);
                        });
                        // The upload progress event handler, which is only registered if
                        // progress events are enabled.
                        /** @type {?} */
                        var onUpProgress = ( /**
                         * @param {?} event
                         * @return {?}
                         */function (event) {
                            // Upload progress events are simpler. Begin building the progress
                            // event.
                            /** @type {?} */
                            var progress = {
                                type: HttpEventType.UploadProgress,
                                loaded: event.loaded,
                            };
                            // If the total number of bytes being uploaded is available, include
                            // it.
                            if (event.lengthComputable) {
                                progress.total = event.total;
                            }
                            // Send the event.
                            observer.next(progress);
                        });
                        // By default, register for load and error events.
                        xhr.addEventListener('load', onLoad);
                        xhr.addEventListener('error', onError);
                        // Progress events are only enabled if requested.
                        if (req.reportProgress) {
                            // Download progress is always enabled if requested.
                            xhr.addEventListener('progress', onDownProgress);
                            // Upload progress depends on whether there is a body to upload.
                            if (reqBody !== null && xhr.upload) {
                                xhr.upload.addEventListener('progress', onUpProgress);
                            }
                        }
                        // Fire the request, and notify the event stream that it was fired.
                        xhr.send(( /** @type {?} */(reqBody)));
                        observer.next({ type: HttpEventType.Sent });
                        // This is the return from the Observable function, which is the
                        // request cancellation handler.
                        return ( /**
                         * @return {?}
                         */function () {
                            // On a cancellation, remove all registered event listeners.
                            xhr.removeEventListener('error', onError);
                            xhr.removeEventListener('load', onLoad);
                            if (req.reportProgress) {
                                xhr.removeEventListener('progress', onDownProgress);
                                if (reqBody !== null && xhr.upload) {
                                    xhr.upload.removeEventListener('progress', onUpProgress);
                                }
                            }
                            // Finally, abort the in-flight request.
                            xhr.abort();
                        });
                    }));
                };
                return HttpXhrBackend;
            }());
            HttpXhrBackend.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
            ];
            /** @nocollapse */
            HttpXhrBackend.ctorParameters = function () { return [
                { type: XhrFactory }
            ]; };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var XSRF_COOKIE_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('XSRF_COOKIE_NAME');
            /** @type {?} */
            var XSRF_HEADER_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('XSRF_HEADER_NAME');
            /**
             * Retrieves the current XSRF token to use with the next outgoing request.
             *
             * \@publicApi
             * @abstract
             */
            var HttpXsrfTokenExtractor = /** @class */ (function () {
                function HttpXsrfTokenExtractor() {
                }
                return HttpXsrfTokenExtractor;
            }());
            if (false) { }
            /**
             * `HttpXsrfTokenExtractor` which retrieves the token from a cookie.
             */
            var HttpXsrfCookieExtractor = /** @class */ (function () {
                /**
                 * @param {?} doc
                 * @param {?} platform
                 * @param {?} cookieName
                 */
                function HttpXsrfCookieExtractor(doc, platform, cookieName) {
                    this.doc = doc;
                    this.platform = platform;
                    this.cookieName = cookieName;
                    this.lastCookieString = '';
                    this.lastToken = null;
                    /**
                     * \@internal for testing
                     */
                    this.parseCount = 0;
                }
                /**
                 * @return {?}
                 */
                HttpXsrfCookieExtractor.prototype.getToken = function () {
                    if (this.platform === 'server') {
                        return null;
                    }
                    /** @type {?} */
                    var cookieString = this.doc.cookie || '';
                    if (cookieString !== this.lastCookieString) {
                        this.parseCount++;
                        this.lastToken = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵparseCookieValue"])(cookieString, this.cookieName);
                        this.lastCookieString = cookieString;
                    }
                    return this.lastToken;
                };
                return HttpXsrfCookieExtractor;
            }());
            HttpXsrfCookieExtractor.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
            ];
            /** @nocollapse */
            HttpXsrfCookieExtractor.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
                { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
                { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [XSRF_COOKIE_NAME,] }] }
            ]; };
            if (false) { }
            /**
             * `HttpInterceptor` which adds an XSRF token to eligible outgoing requests.
             */
            var HttpXsrfInterceptor = /** @class */ (function () {
                /**
                 * @param {?} tokenService
                 * @param {?} headerName
                 */
                function HttpXsrfInterceptor(tokenService, headerName) {
                    this.tokenService = tokenService;
                    this.headerName = headerName;
                }
                /**
                 * @param {?} req
                 * @param {?} next
                 * @return {?}
                 */
                HttpXsrfInterceptor.prototype.intercept = function (req, next) {
                    /** @type {?} */
                    var lcUrl = req.url.toLowerCase();
                    // Skip both non-mutating requests and absolute URLs.
                    // Non-mutating requests don't require a token, and absolute URLs require special handling
                    // anyway as the cookie set
                    // on our origin is not the same as the token expected by another origin.
                    if (req.method === 'GET' || req.method === 'HEAD' || lcUrl.startsWith('http://') ||
                        lcUrl.startsWith('https://')) {
                        return next.handle(req);
                    }
                    /** @type {?} */
                    var token = this.tokenService.getToken();
                    // Be careful not to overwrite an existing header of the same name.
                    if (token !== null && !req.headers.has(this.headerName)) {
                        req = req.clone({ headers: req.headers.set(this.headerName, token) });
                    }
                    return next.handle(req);
                };
                return HttpXsrfInterceptor;
            }());
            HttpXsrfInterceptor.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
            ];
            /** @nocollapse */
            HttpXsrfInterceptor.ctorParameters = function () { return [
                { type: HttpXsrfTokenExtractor },
                { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [XSRF_HEADER_NAME,] }] }
            ]; };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * An injectable `HttpHandler` that applies multiple interceptors
             * to a request before passing it to the given `HttpBackend`.
             *
             * The interceptors are loaded lazily from the injector, to allow
             * interceptors to themselves inject classes depending indirectly
             * on `HttpInterceptingHandler` itself.
             * @see `HttpInterceptor`
             */
            var HttpInterceptingHandler = /** @class */ (function () {
                /**
                 * @param {?} backend
                 * @param {?} injector
                 */
                function HttpInterceptingHandler(backend, injector) {
                    this.backend = backend;
                    this.injector = injector;
                    this.chain = null;
                }
                /**
                 * @param {?} req
                 * @return {?}
                 */
                HttpInterceptingHandler.prototype.handle = function (req) {
                    if (this.chain === null) {
                        /** @type {?} */
                        var interceptors = this.injector.get(HTTP_INTERCEPTORS, []);
                        this.chain = interceptors.reduceRight(( /**
                         * @param {?} next
                         * @param {?} interceptor
                         * @return {?}
                         */function (next, interceptor) { return new HttpInterceptorHandler(next, interceptor); }), this.backend);
                    }
                    return this.chain.handle(req);
                };
                return HttpInterceptingHandler;
            }());
            HttpInterceptingHandler.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
            ];
            /** @nocollapse */
            HttpInterceptingHandler.ctorParameters = function () { return [
                { type: HttpBackend },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }
            ]; };
            if (false) { }
            /**
             * Constructs an `HttpHandler` that applies interceptors
             * to a request before passing it to the given `HttpBackend`.
             *
             * Use as a factory function within `HttpClientModule`.
             *
             *
             * @param {?} backend
             * @param {?=} interceptors
             * @return {?}
             */
            function interceptingHandler(backend, interceptors) {
                if (interceptors === void 0) { interceptors = []; }
                if (!interceptors) {
                    return backend;
                }
                return interceptors.reduceRight(( /**
                 * @param {?} next
                 * @param {?} interceptor
                 * @return {?}
                 */function (next, interceptor) { return new HttpInterceptorHandler(next, interceptor); }), backend);
            }
            /**
             * Factory function that determines where to store JSONP callbacks.
             *
             * Ordinarily JSONP callbacks are stored on the `window` object, but this may not exist
             * in test environments. In that case, callbacks are stored on an anonymous object instead.
             *
             *
             * @return {?}
             */
            function jsonpCallbackContext() {
                if (typeof window === 'object') {
                    return window;
                }
                return {};
            }
            /**
             * Configures XSRF protection support for outgoing requests.
             *
             * For a server that supports a cookie-based XSRF protection system,
             * use directly to configure XSRF protection with the correct
             * cookie and header names.
             *
             * If no names are supplied, the default cookie name is `XSRF-TOKEN`
             * and the default header name is `X-XSRF-TOKEN`.
             *
             * \@publicApi
             */
            var HttpClientXsrfModule = /** @class */ (function () {
                function HttpClientXsrfModule() {
                }
                /**
                 * Disable the default XSRF protection.
                 * @return {?}
                 */
                HttpClientXsrfModule.disable = function () {
                    return {
                        ngModule: HttpClientXsrfModule,
                        providers: [
                            { provide: HttpXsrfInterceptor, useClass: NoopInterceptor },
                        ],
                    };
                };
                /**
                 * Configure XSRF protection.
                 * @param {?=} options An object that can specify either or both
                 * cookie name or header name.
                 * - Cookie name default is `XSRF-TOKEN`.
                 * - Header name default is `X-XSRF-TOKEN`.
                 *
                 * @return {?}
                 */
                HttpClientXsrfModule.withOptions = function (options) {
                    if (options === void 0) { options = {}; }
                    return {
                        ngModule: HttpClientXsrfModule,
                        providers: [
                            options.cookieName ? { provide: XSRF_COOKIE_NAME, useValue: options.cookieName } : [],
                            options.headerName ? { provide: XSRF_HEADER_NAME, useValue: options.headerName } : [],
                        ],
                    };
                };
                return HttpClientXsrfModule;
            }());
            HttpClientXsrfModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                            providers: [
                                HttpXsrfInterceptor,
                                { provide: HTTP_INTERCEPTORS, useExisting: HttpXsrfInterceptor, multi: true },
                                { provide: HttpXsrfTokenExtractor, useClass: HttpXsrfCookieExtractor },
                                { provide: XSRF_COOKIE_NAME, useValue: 'XSRF-TOKEN' },
                                { provide: XSRF_HEADER_NAME, useValue: 'X-XSRF-TOKEN' },
                            ],
                        },] }
            ];
            /**
             * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
             * with supporting services for XSRF. Automatically imported by `HttpClientModule`.
             *
             * You can add interceptors to the chain behind `HttpClient` by binding them to the
             * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
             *
             * \@publicApi
             */
            var HttpClientModule = /** @class */ (function () {
                function HttpClientModule() {
                }
                return HttpClientModule;
            }());
            HttpClientModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                            /**
                             * Optional configuration for XSRF protection.
                             */
                            imports: [
                                HttpClientXsrfModule.withOptions({
                                    cookieName: 'XSRF-TOKEN',
                                    headerName: 'X-XSRF-TOKEN',
                                }),
                            ],
                            /**
                             * Configures the [dependency injector](guide/glossary#injector) where it is imported
                             * with supporting services for HTTP communications.
                             */
                            providers: [
                                HttpClient,
                                { provide: HttpHandler, useClass: HttpInterceptingHandler },
                                HttpXhrBackend,
                                { provide: HttpBackend, useExisting: HttpXhrBackend },
                                BrowserXhr,
                                { provide: XhrFactory, useExisting: BrowserXhr },
                            ],
                        },] }
            ];
            /**
             * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
             * with supporting services for JSONP.
             * Without this module, Jsonp requests reach the backend
             * with method JSONP, where they are rejected.
             *
             * You can add interceptors to the chain behind `HttpClient` by binding them to the
             * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
             *
             * \@publicApi
             */
            var HttpClientJsonpModule = /** @class */ (function () {
                function HttpClientJsonpModule() {
                }
                return HttpClientJsonpModule;
            }());
            HttpClientJsonpModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                            providers: [
                                JsonpClientBackend,
                                { provide: JsonpCallbackContext, useFactory: jsonpCallbackContext },
                                { provide: HTTP_INTERCEPTORS, useClass: JsonpInterceptor, multi: true },
                            ],
                        },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Generated bundle index. Do not edit.
             */
            //# sourceMappingURL=http.js.map
            /***/ 
        }),
        /***/ "./node_modules/@angular/material/esm2015/button.js": 
        /*!**********************************************************!*\
          !*** ./node_modules/@angular/material/esm2015/button.js ***!
          \**********************************************************/
        /*! exports provided: MatButtonModule, MatButton, MatAnchor */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatButtonModule", function () { return MatButtonModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatButton", function () { return MatButton; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatAnchor", function () { return MatAnchor; });
            /* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
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
             * Default color palette for round buttons (mat-fab and mat-mini-fab)
             * @type {?}
             */
            var DEFAULT_ROUND_BUTTON_COLOR = 'accent';
            /**
             * List of classes to add to MatButton instances based on host attributes to
             * style as different variants.
             * @type {?}
             */
            var BUTTON_HOST_ATTRIBUTES = [
                'mat-button',
                'mat-flat-button',
                'mat-icon-button',
                'mat-raised-button',
                'mat-stroked-button',
                'mat-mini-fab',
                'mat-fab',
            ];
            // Boilerplate for applying mixins to MatButton.
            /**
             * \@docs-private
             */
            var MatButtonBase = /** @class */ (function () {
                /**
                 * @param {?} _elementRef
                 */
                function MatButtonBase(_elementRef) {
                    this._elementRef = _elementRef;
                }
                return MatButtonBase;
            }());
            /** @type {?} */
            var _MatButtonMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(MatButtonBase)));
            /**
             * Material design button.
             */
            var MatButton = /** @class */ (function (_super) {
                __extends(MatButton, _super);
                /**
                 * @param {?} elementRef
                 * @param {?} _focusMonitor
                 * @param {?} _animationMode
                 */
                function MatButton(elementRef, _focusMonitor, _animationMode) {
                    var e_1, _a;
                    var _this = _super.call(this, elementRef) || this;
                    _this._focusMonitor = _focusMonitor;
                    _this._animationMode = _animationMode;
                    /**
                     * Whether the button is round.
                     */
                    _this.isRoundButton = _this._hasHostAttributes('mat-fab', 'mat-mini-fab');
                    /**
                     * Whether the button is icon button.
                     */
                    _this.isIconButton = _this._hasHostAttributes('mat-icon-button');
                    try {
                        // For each of the variant selectors that is present in the button's host
                        // attributes, add the correct corresponding class.
                        for (var BUTTON_HOST_ATTRIBUTES_1 = __values(BUTTON_HOST_ATTRIBUTES), BUTTON_HOST_ATTRIBUTES_1_1 = BUTTON_HOST_ATTRIBUTES_1.next(); !BUTTON_HOST_ATTRIBUTES_1_1.done; BUTTON_HOST_ATTRIBUTES_1_1 = BUTTON_HOST_ATTRIBUTES_1.next()) {
                            var attr = BUTTON_HOST_ATTRIBUTES_1_1.value;
                            if (_this._hasHostAttributes(attr)) {
                                (( /** @type {?} */(_this._getHostElement()))).classList.add(attr);
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (BUTTON_HOST_ATTRIBUTES_1_1 && !BUTTON_HOST_ATTRIBUTES_1_1.done && (_a = BUTTON_HOST_ATTRIBUTES_1.return)) _a.call(BUTTON_HOST_ATTRIBUTES_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    // Add a class that applies to all buttons. This makes it easier to target if somebody
                    // wants to target all Material buttons. We do it here rather than `host` to ensure that
                    // the class is applied to derived classes.
                    elementRef.nativeElement.classList.add('mat-button-base');
                    _this._focusMonitor.monitor(_this._elementRef, true);
                    if (_this.isRoundButton) {
                        _this.color = DEFAULT_ROUND_BUTTON_COLOR;
                    }
                    return _this;
                }
                /**
                 * @return {?}
                 */
                MatButton.prototype.ngOnDestroy = function () {
                    this._focusMonitor.stopMonitoring(this._elementRef);
                };
                /**
                 * Focuses the button.
                 * @param {?=} origin
                 * @param {?=} options
                 * @return {?}
                 */
                MatButton.prototype.focus = function (origin, options) {
                    if (origin === void 0) { origin = 'program'; }
                    this._focusMonitor.focusVia(this._getHostElement(), origin, options);
                };
                /**
                 * @return {?}
                 */
                MatButton.prototype._getHostElement = function () {
                    return this._elementRef.nativeElement;
                };
                /**
                 * @return {?}
                 */
                MatButton.prototype._isRippleDisabled = function () {
                    return this.disableRipple || this.disabled;
                };
                /**
                 * Gets whether the button has one of the given attributes.
                 * @param {...?} attributes
                 * @return {?}
                 */
                MatButton.prototype._hasHostAttributes = function () {
                    var _this = this;
                    var attributes = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        attributes[_i] = arguments[_i];
                    }
                    return attributes.some(( /**
                     * @param {?} attribute
                     * @return {?}
                     */function (/**
                     * @param {?} attribute
                     * @return {?}
                     */ attribute) { return _this._getHostElement().hasAttribute(attribute); }));
                };
                return MatButton;
            }(_MatButtonMixinBase));
            MatButton.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{ selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],\n             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],\n             button[mat-flat-button]",
                            exportAs: 'matButton',
                            host: {
                                '[attr.disabled]': 'disabled || null',
                                '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
                            },
                            template: "<span class=\"mat-button-wrapper\"><ng-content></ng-content></span><div matRipple class=\"mat-button-ripple\" [class.mat-button-ripple-round]=\"isRoundButton || isIconButton\" [matRippleDisabled]=\"_isRippleDisabled()\" [matRippleCentered]=\"isIconButton\" [matRippleTrigger]=\"_getHostElement()\"></div><div class=\"mat-button-focus-overlay\"></div>",
                            styles: [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:.04}@media (hover:none){.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-flat-button,.mat-icon-button,.mat-stroked-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-button[disabled],.mat-flat-button[disabled],.mat-icon-button[disabled],.mat-stroked-button[disabled]{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button[disabled]{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-focus-overlay,.mat-stroked-button .mat-button-ripple.mat-ripple{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab[disabled]{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab[disabled]{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button .mat-icon,.mat-icon-button i{line-height:24px}.mat-button-focus-overlay,.mat-button-ripple.mat-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity .2s cubic-bezier(.35,0,.25,1),background-color .2s cubic-bezier(.35,0,.25,1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}@media (-ms-high-contrast:active){.mat-button-focus-overlay{background-color:#fff}}@media (-ms-high-contrast:black-on-white){.mat-button-focus-overlay{background-color:#000}}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}@media (-ms-high-contrast:active){.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button{outline:solid 1px}}"],
                            inputs: ['disabled', 'disableRipple', 'color'],
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                        },] },
            ];
            /** @nocollapse */
            MatButton.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
                { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"] },
                { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"],] }] }
            ]; };
            MatButton.propDecorators = {
                ripple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRipple"], { static: false },] }]
            };
            /**
             * Material design anchor button.
             */
            var MatAnchor = /** @class */ (function (_super) {
                __extends(MatAnchor, _super);
                /**
                 * @param {?} focusMonitor
                 * @param {?} elementRef
                 * @param {?} animationMode
                 */
                function MatAnchor(focusMonitor, elementRef, animationMode) {
                    return _super.call(this, elementRef, focusMonitor, animationMode) || this;
                }
                /**
                 * @param {?} event
                 * @return {?}
                 */
                MatAnchor.prototype._haltDisabledEvents = function (event) {
                    // A disabled button shouldn't apply any actions
                    if (this.disabled) {
                        event.preventDefault();
                        event.stopImmediatePropagation();
                    }
                };
                return MatAnchor;
            }(MatButton));
            MatAnchor.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{ selector: "a[mat-button], a[mat-raised-button], a[mat-icon-button], a[mat-fab],\n             a[mat-mini-fab], a[mat-stroked-button], a[mat-flat-button]",
                            exportAs: 'matButton, matAnchor',
                            host: {
                                // Note that we ignore the user-specified tabindex when it's disabled for
                                // consistency with the `mat-button` applied on native buttons where even
                                // though they have an index, they're not tabbable.
                                '[attr.tabindex]': 'disabled ? -1 : (tabIndex || 0)',
                                '[attr.disabled]': 'disabled || null',
                                '[attr.aria-disabled]': 'disabled.toString()',
                                '(click)': '_haltDisabledEvents($event)',
                                '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
                            },
                            inputs: ['disabled', 'disableRipple', 'color'],
                            template: "<span class=\"mat-button-wrapper\"><ng-content></ng-content></span><div matRipple class=\"mat-button-ripple\" [class.mat-button-ripple-round]=\"isRoundButton || isIconButton\" [matRippleDisabled]=\"_isRippleDisabled()\" [matRippleCentered]=\"isIconButton\" [matRippleTrigger]=\"_getHostElement()\"></div><div class=\"mat-button-focus-overlay\"></div>",
                            styles: [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:.04}@media (hover:none){.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-flat-button,.mat-icon-button,.mat-stroked-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-button[disabled],.mat-flat-button[disabled],.mat-icon-button[disabled],.mat-stroked-button[disabled]{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button[disabled]{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-focus-overlay,.mat-stroked-button .mat-button-ripple.mat-ripple{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab[disabled]{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab[disabled]{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button .mat-icon,.mat-icon-button i{line-height:24px}.mat-button-focus-overlay,.mat-button-ripple.mat-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity .2s cubic-bezier(.35,0,.25,1),background-color .2s cubic-bezier(.35,0,.25,1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}@media (-ms-high-contrast:active){.mat-button-focus-overlay{background-color:#fff}}@media (-ms-high-contrast:black-on-white){.mat-button-focus-overlay{background-color:#000}}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}@media (-ms-high-contrast:active){.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button{outline:solid 1px}}"],
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                        },] },
            ];
            /** @nocollapse */
            MatAnchor.ctorParameters = function () { return [
                { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
                { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"],] }] }
            ]; };
            MatAnchor.propDecorators = {
                tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var MatButtonModule = /** @class */ (function () {
                function MatButtonModule() {
                }
                return MatButtonModule;
            }());
            MatButtonModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                            imports: [
                                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                                _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                                _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"],
                            ],
                            exports: [
                                MatButton,
                                MatAnchor,
                                _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"],
                            ],
                            declarations: [
                                MatButton,
                                MatAnchor,
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
            //# sourceMappingURL=button.js.map
            /***/ 
        }),
        /***/ "./node_modules/@angular/material/esm2015/icon.js": 
        /*!********************************************************!*\
          !*** ./node_modules/@angular/material/esm2015/icon.js ***!
          \********************************************************/
        /*! exports provided: MatIconModule, MAT_ICON_LOCATION_FACTORY, MAT_ICON_LOCATION, MatIcon, getMatIconNameNotFoundError, getMatIconNoHttpProviderError, getMatIconFailedToSanitizeUrlError, getMatIconFailedToSanitizeLiteralError, ICON_REGISTRY_PROVIDER_FACTORY, MatIconRegistry, ICON_REGISTRY_PROVIDER */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatIconModule", function () { return MatIconModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_ICON_LOCATION_FACTORY", function () { return MAT_ICON_LOCATION_FACTORY; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_ICON_LOCATION", function () { return MAT_ICON_LOCATION; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatIcon", function () { return MatIcon; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatIconNameNotFoundError", function () { return getMatIconNameNotFoundError; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatIconNoHttpProviderError", function () { return getMatIconNoHttpProviderError; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatIconFailedToSanitizeUrlError", function () { return getMatIconFailedToSanitizeUrlError; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatIconFailedToSanitizeLiteralError", function () { return getMatIconFailedToSanitizeLiteralError; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON_REGISTRY_PROVIDER_FACTORY", function () { return ICON_REGISTRY_PROVIDER_FACTORY; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatIconRegistry", function () { return MatIconRegistry; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON_REGISTRY_PROVIDER", function () { return ICON_REGISTRY_PROVIDER; });
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm2015/coercion.js");
            /* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
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
             * Returns an exception to be thrown in the case when attempting to
             * load an icon with a name that cannot be found.
             * \@docs-private
             * @param {?} iconName
             * @return {?}
             */
            function getMatIconNameNotFoundError(iconName) {
                return Error("Unable to find icon with the name \"" + iconName + "\"");
            }
            /**
             * Returns an exception to be thrown when the consumer attempts to use
             * `<mat-icon>` without including \@angular/common/http.
             * \@docs-private
             * @return {?}
             */
            function getMatIconNoHttpProviderError() {
                return Error('Could not find HttpClient provider for use with Angular Material icons. ' +
                    'Please include the HttpClientModule from @angular/common/http in your ' +
                    'app imports.');
            }
            /**
             * Returns an exception to be thrown when a URL couldn't be sanitized.
             * \@docs-private
             * @param {?} url URL that was attempted to be sanitized.
             * @return {?}
             */
            function getMatIconFailedToSanitizeUrlError(url) {
                return Error("The URL provided to MatIconRegistry was not trusted as a resource URL " +
                    ("via Angular's DomSanitizer. Attempted URL was \"" + url + "\"."));
            }
            /**
             * Returns an exception to be thrown when a HTML string couldn't be sanitized.
             * \@docs-private
             * @param {?} literal HTML that was attempted to be sanitized.
             * @return {?}
             */
            function getMatIconFailedToSanitizeLiteralError(literal) {
                return Error("The literal provided to MatIconRegistry was not trusted as safe HTML by " +
                    ("Angular's DomSanitizer. Attempted literal was \"" + literal + "\"."));
            }
            /**
             * Configuration for an icon, including the URL and possibly the cached SVG element.
             * \@docs-private
             */
            var SvgIconConfig = /** @class */ (function () {
                /**
                 * @param {?} data
                 * @param {?=} options
                 */
                function SvgIconConfig(data, options) {
                    this.options = options;
                    // Note that we can't use `instanceof SVGElement` here,
                    // because it'll break during server-side rendering.
                    if (!!(( /** @type {?} */(data))).nodeName) {
                        this.svgElement = ( /** @type {?} */(data));
                    }
                    else {
                        this.url = ( /** @type {?} */(data));
                    }
                }
                return SvgIconConfig;
            }());
            /**
             * Service to register and display icons used by the `<mat-icon>` component.
             * - Registers icon URLs by namespace and name.
             * - Registers icon set URLs by namespace.
             * - Registers aliases for CSS classes, for use with icon fonts.
             * - Loads icons from URLs and extracts individual icons from icon sets.
             */
            var MatIconRegistry = /** @class */ (function () {
                /**
                 * @param {?} _httpClient
                 * @param {?} _sanitizer
                 * @param {?} document
                 * @param {?=} _errorHandler
                 */
                function MatIconRegistry(_httpClient, _sanitizer, document, _errorHandler) {
                    this._httpClient = _httpClient;
                    this._sanitizer = _sanitizer;
                    this._errorHandler = _errorHandler;
                    /**
                     * URLs and cached SVG elements for individual icons. Keys are of the format "[namespace]:[icon]".
                     */
                    this._svgIconConfigs = new Map();
                    /**
                     * SvgIconConfig objects and cached SVG elements for icon sets, keyed by namespace.
                     * Multiple icon sets can be registered under the same namespace.
                     */
                    this._iconSetConfigs = new Map();
                    /**
                     * Cache for icons loaded by direct URLs.
                     */
                    this._cachedIconsByUrl = new Map();
                    /**
                     * In-progress icon fetches. Used to coalesce multiple requests to the same URL.
                     */
                    this._inProgressUrlFetches = new Map();
                    /**
                     * Map from font identifiers to their CSS class names. Used for icon fonts.
                     */
                    this._fontCssClassesByAlias = new Map();
                    /**
                     * The CSS class to apply when an `<mat-icon>` component has no icon name, url, or font specified.
                     * The default 'material-icons' value assumes that the material icon font has been loaded as
                     * described at http://google.github.io/material-design-icons/#icon-font-for-the-web
                     */
                    this._defaultFontSetClass = 'material-icons';
                    this._document = document;
                }
                /**
                 * Registers an icon by URL in the default namespace.
                 * @template THIS
                 * @this {THIS}
                 * @param {?} iconName Name under which the icon should be registered.
                 * @param {?} url
                 * @param {?=} options
                 * @return {THIS}
                 */
                MatIconRegistry.prototype.addSvgIcon = function (iconName, url, options) {
                    return ( /** @type {?} */(this)).addSvgIconInNamespace('', iconName, url, options);
                };
                /**
                 * Registers an icon using an HTML string in the default namespace.
                 * @template THIS
                 * @this {THIS}
                 * @param {?} iconName Name under which the icon should be registered.
                 * @param {?} literal SVG source of the icon.
                 * @param {?=} options
                 * @return {THIS}
                 */
                MatIconRegistry.prototype.addSvgIconLiteral = function (iconName, literal, options) {
                    return ( /** @type {?} */(this)).addSvgIconLiteralInNamespace('', iconName, literal, options);
                };
                /**
                 * Registers an icon by URL in the specified namespace.
                 * @template THIS
                 * @this {THIS}
                 * @param {?} namespace Namespace in which the icon should be registered.
                 * @param {?} iconName Name under which the icon should be registered.
                 * @param {?} url
                 * @param {?=} options
                 * @return {THIS}
                 */
                MatIconRegistry.prototype.addSvgIconInNamespace = function (namespace, iconName, url, options) {
                    return ( /** @type {?} */(this))._addSvgIconConfig(namespace, iconName, new SvgIconConfig(url, options));
                };
                /**
                 * Registers an icon using an HTML string in the specified namespace.
                 * @template THIS
                 * @this {THIS}
                 * @param {?} namespace Namespace in which the icon should be registered.
                 * @param {?} iconName Name under which the icon should be registered.
                 * @param {?} literal SVG source of the icon.
                 * @param {?=} options
                 * @return {THIS}
                 */
                MatIconRegistry.prototype.addSvgIconLiteralInNamespace = function (namespace, iconName, literal, options) {
                    /** @type {?} */
                    var sanitizedLiteral = ( /** @type {?} */(this))._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__["SecurityContext"].HTML, literal);
                    if (!sanitizedLiteral) {
                        throw getMatIconFailedToSanitizeLiteralError(literal);
                    }
                    /** @type {?} */
                    var svgElement = ( /** @type {?} */(this))._createSvgElementForSingleIcon(sanitizedLiteral, options);
                    return ( /** @type {?} */(this))._addSvgIconConfig(namespace, iconName, new SvgIconConfig(svgElement, options));
                };
                /**
                 * Registers an icon set by URL in the default namespace.
                 * @template THIS
                 * @this {THIS}
                 * @param {?} url
                 * @param {?=} options
                 * @return {THIS}
                 */
                MatIconRegistry.prototype.addSvgIconSet = function (url, options) {
                    return ( /** @type {?} */(this)).addSvgIconSetInNamespace('', url, options);
                };
                /**
                 * Registers an icon set using an HTML string in the default namespace.
                 * @template THIS
                 * @this {THIS}
                 * @param {?} literal SVG source of the icon set.
                 * @param {?=} options
                 * @return {THIS}
                 */
                MatIconRegistry.prototype.addSvgIconSetLiteral = function (literal, options) {
                    return ( /** @type {?} */(this)).addSvgIconSetLiteralInNamespace('', literal, options);
                };
                /**
                 * Registers an icon set by URL in the specified namespace.
                 * @template THIS
                 * @this {THIS}
                 * @param {?} namespace Namespace in which to register the icon set.
                 * @param {?} url
                 * @param {?=} options
                 * @return {THIS}
                 */
                MatIconRegistry.prototype.addSvgIconSetInNamespace = function (namespace, url, options) {
                    return ( /** @type {?} */(this))._addSvgIconSetConfig(namespace, new SvgIconConfig(url, options));
                };
                /**
                 * Registers an icon set using an HTML string in the specified namespace.
                 * @template THIS
                 * @this {THIS}
                 * @param {?} namespace Namespace in which to register the icon set.
                 * @param {?} literal SVG source of the icon set.
                 * @param {?=} options
                 * @return {THIS}
                 */
                MatIconRegistry.prototype.addSvgIconSetLiteralInNamespace = function (namespace, literal, options) {
                    /** @type {?} */
                    var sanitizedLiteral = ( /** @type {?} */(this))._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__["SecurityContext"].HTML, literal);
                    if (!sanitizedLiteral) {
                        throw getMatIconFailedToSanitizeLiteralError(literal);
                    }
                    /** @type {?} */
                    var svgElement = ( /** @type {?} */(this))._svgElementFromString(sanitizedLiteral);
                    return ( /** @type {?} */(this))._addSvgIconSetConfig(namespace, new SvgIconConfig(svgElement, options));
                };
                /**
                 * Defines an alias for a CSS class name to be used for icon fonts. Creating an matIcon
                 * component with the alias as the fontSet input will cause the class name to be applied
                 * to the `<mat-icon>` element.
                 *
                 * @template THIS
                 * @this {THIS}
                 * @param {?} alias Alias for the font.
                 * @param {?=} className Class name override to be used instead of the alias.
                 * @return {THIS}
                 */
                MatIconRegistry.prototype.registerFontClassAlias = function (alias, className) {
                    if (className === void 0) { className = alias; }
                    ( /** @type {?} */(this))._fontCssClassesByAlias.set(alias, className);
                    return ( /** @type {?} */(this));
                };
                /**
                 * Returns the CSS class name associated with the alias by a previous call to
                 * registerFontClassAlias. If no CSS class has been associated, returns the alias unmodified.
                 * @param {?} alias
                 * @return {?}
                 */
                MatIconRegistry.prototype.classNameForFontAlias = function (alias) {
                    return this._fontCssClassesByAlias.get(alias) || alias;
                };
                /**
                 * Sets the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
                 * have a fontSet input value, and is not loading an icon by name or URL.
                 *
                 * @template THIS
                 * @this {THIS}
                 * @param {?} className
                 * @return {THIS}
                 */
                MatIconRegistry.prototype.setDefaultFontSetClass = function (className) {
                    ( /** @type {?} */(this))._defaultFontSetClass = className;
                    return ( /** @type {?} */(this));
                };
                /**
                 * Returns the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
                 * have a fontSet input value, and is not loading an icon by name or URL.
                 * @return {?}
                 */
                MatIconRegistry.prototype.getDefaultFontSetClass = function () {
                    return this._defaultFontSetClass;
                };
                /**
                 * Returns an Observable that produces the icon (as an `<svg>` DOM element) from the given URL.
                 * The response from the URL may be cached so this will not always cause an HTTP request, but
                 * the produced element will always be a new copy of the originally fetched icon. (That is,
                 * it will not contain any modifications made to elements previously returned).
                 *
                 * @param {?} safeUrl URL from which to fetch the SVG icon.
                 * @return {?}
                 */
                MatIconRegistry.prototype.getSvgIconFromUrl = function (safeUrl) {
                    var _this = this;
                    /** @type {?} */
                    var url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__["SecurityContext"].RESOURCE_URL, safeUrl);
                    if (!url) {
                        throw getMatIconFailedToSanitizeUrlError(safeUrl);
                    }
                    /** @type {?} */
                    var cachedIcon = this._cachedIconsByUrl.get(url);
                    if (cachedIcon) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(cloneSvg(cachedIcon));
                    }
                    return this._loadSvgIconFromConfig(new SvgIconConfig(safeUrl)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(( /**
                     * @param {?} svg
                     * @return {?}
                     */function (/**
                     * @param {?} svg
                     * @return {?}
                     */ svg) { return _this._cachedIconsByUrl.set(( /** @type {?} */(url)), svg); })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(( /**
                     * @param {?} svg
                     * @return {?}
                     */function (/**
                     * @param {?} svg
                     * @return {?}
                     */ svg) { return cloneSvg(svg); })));
                };
                /**
                 * Returns an Observable that produces the icon (as an `<svg>` DOM element) with the given name
                 * and namespace. The icon must have been previously registered with addIcon or addIconSet;
                 * if not, the Observable will throw an error.
                 *
                 * @param {?} name Name of the icon to be retrieved.
                 * @param {?=} namespace Namespace in which to look for the icon.
                 * @return {?}
                 */
                MatIconRegistry.prototype.getNamedSvgIcon = function (name, namespace) {
                    if (namespace === void 0) { namespace = ''; }
                    // Return (copy of) cached icon if possible.
                    /** @type {?} */
                    var key = iconKey(namespace, name);
                    /** @type {?} */
                    var config = this._svgIconConfigs.get(key);
                    if (config) {
                        return this._getSvgFromConfig(config);
                    }
                    // See if we have any icon sets registered for the namespace.
                    /** @type {?} */
                    var iconSetConfigs = this._iconSetConfigs.get(namespace);
                    if (iconSetConfigs) {
                        return this._getSvgFromIconSetConfigs(name, iconSetConfigs);
                    }
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(getMatIconNameNotFoundError(key));
                };
                /**
                 * @return {?}
                 */
                MatIconRegistry.prototype.ngOnDestroy = function () {
                    this._svgIconConfigs.clear();
                    this._iconSetConfigs.clear();
                    this._cachedIconsByUrl.clear();
                };
                /**
                 * Returns the cached icon for a SvgIconConfig if available, or fetches it from its URL if not.
                 * @private
                 * @param {?} config
                 * @return {?}
                 */
                MatIconRegistry.prototype._getSvgFromConfig = function (config) {
                    if (config.svgElement) {
                        // We already have the SVG element for this icon, return a copy.
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(cloneSvg(config.svgElement));
                    }
                    else {
                        // Fetch the icon from the config's URL, cache it, and return a copy.
                        return this._loadSvgIconFromConfig(config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(( /**
                         * @param {?} svg
                         * @return {?}
                         */function (/**
                         * @param {?} svg
                         * @return {?}
                         */ svg) { return config.svgElement = svg; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(( /**
                         * @param {?} svg
                         * @return {?}
                         */function (/**
                         * @param {?} svg
                         * @return {?}
                         */ svg) { return cloneSvg(svg); })));
                    }
                };
                /**
                 * Attempts to find an icon with the specified name in any of the SVG icon sets.
                 * First searches the available cached icons for a nested element with a matching name, and
                 * if found copies the element to a new `<svg>` element. If not found, fetches all icon sets
                 * that have not been cached, and searches again after all fetches are completed.
                 * The returned Observable produces the SVG element if possible, and throws
                 * an error if no icon with the specified name can be found.
                 * @private
                 * @param {?} name
                 * @param {?} iconSetConfigs
                 * @return {?}
                 */
                MatIconRegistry.prototype._getSvgFromIconSetConfigs = function (name, iconSetConfigs) {
                    var _this = this;
                    // For all the icon set SVG elements we've fetched, see if any contain an icon with the
                    // requested name.
                    /** @type {?} */
                    var namedIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs);
                    if (namedIcon) {
                        // We could cache namedIcon in _svgIconConfigs, but since we have to make a copy every
                        // time anyway, there's probably not much advantage compared to just always extracting
                        // it from the icon set.
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(namedIcon);
                    }
                    // Not found in any cached icon sets. If there are icon sets with URLs that we haven't
                    // fetched, fetch them now and look for iconName in the results.
                    /** @type {?} */
                    var iconSetFetchRequests = iconSetConfigs
                        .filter(( /**
                 * @param {?} iconSetConfig
                 * @return {?}
                 */function (/**
                 * @param {?} iconSetConfig
                 * @return {?}
                 */ iconSetConfig) { return !iconSetConfig.svgElement; }))
                        .map(( /**
                 * @param {?} iconSetConfig
                 * @return {?}
                 */function (/**
                 * @param {?} iconSetConfig
                 * @return {?}
                 */ iconSetConfig) {
                        return _this._loadSvgIconSetFromConfig(iconSetConfig).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(( /**
                         * @param {?} err
                         * @return {?}
                         */function (err) {
                            /** @type {?} */
                            var url = _this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__["SecurityContext"].RESOURCE_URL, iconSetConfig.url);
                            // Swallow errors fetching individual URLs so the
                            // combined Observable won't necessarily fail.
                            /** @type {?} */
                            var errorMessage = "Loading icon set URL: " + url + " failed: " + err.message;
                            // @breaking-change 9.0.0 _errorHandler parameter to be made required
                            if (_this._errorHandler) {
                                _this._errorHandler.handleError(new Error(errorMessage));
                            }
                            else {
                                console.error(errorMessage);
                            }
                            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
                        })));
                    }));
                    // Fetch all the icon set URLs. When the requests complete, every IconSet should have a
                    // cached SVG element (unless the request failed), and we can check again for the icon.
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(iconSetFetchRequests).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(( /**
                     * @return {?}
                     */function () {
                        /** @type {?} */
                        var foundIcon = _this._extractIconWithNameFromAnySet(name, iconSetConfigs);
                        if (!foundIcon) {
                            throw getMatIconNameNotFoundError(name);
                        }
                        return foundIcon;
                    })));
                };
                /**
                 * Searches the cached SVG elements for the given icon sets for a nested icon element whose "id"
                 * tag matches the specified name. If found, copies the nested element to a new SVG element and
                 * returns it. Returns null if no matching element is found.
                 * @private
                 * @param {?} iconName
                 * @param {?} iconSetConfigs
                 * @return {?}
                 */
                MatIconRegistry.prototype._extractIconWithNameFromAnySet = function (iconName, iconSetConfigs) {
                    // Iterate backwards, so icon sets added later have precedence.
                    for (var i = iconSetConfigs.length - 1; i >= 0; i--) {
                        /** @type {?} */
                        var config = iconSetConfigs[i];
                        if (config.svgElement) {
                            /** @type {?} */
                            var foundIcon = this._extractSvgIconFromSet(config.svgElement, iconName, config.options);
                            if (foundIcon) {
                                return foundIcon;
                            }
                        }
                    }
                    return null;
                };
                /**
                 * Loads the content of the icon URL specified in the SvgIconConfig and creates an SVG element
                 * from it.
                 * @private
                 * @param {?} config
                 * @return {?}
                 */
                MatIconRegistry.prototype._loadSvgIconFromConfig = function (config) {
                    var _this = this;
                    return this._fetchUrl(config.url)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(( /**
                 * @param {?} svgText
                 * @return {?}
                 */function (/**
                 * @param {?} svgText
                 * @return {?}
                 */ svgText) { return _this._createSvgElementForSingleIcon(svgText, config.options); })));
                };
                /**
                 * Loads the content of the icon set URL specified in the SvgIconConfig and creates an SVG element
                 * from it.
                 * @private
                 * @param {?} config
                 * @return {?}
                 */
                MatIconRegistry.prototype._loadSvgIconSetFromConfig = function (config) {
                    var _this = this;
                    // If the SVG for this icon set has already been parsed, do nothing.
                    if (config.svgElement) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(config.svgElement);
                    }
                    return this._fetchUrl(config.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(( /**
                     * @param {?} svgText
                     * @return {?}
                     */function (/**
                     * @param {?} svgText
                     * @return {?}
                     */ svgText) {
                        // It is possible that the icon set was parsed and cached by an earlier request, so parsing
                        // only needs to occur if the cache is yet unset.
                        if (!config.svgElement) {
                            config.svgElement = _this._svgElementFromString(svgText);
                        }
                        return config.svgElement;
                    })));
                };
                /**
                 * Creates a DOM element from the given SVG string, and adds default attributes.
                 * @private
                 * @param {?} responseText
                 * @param {?=} options
                 * @return {?}
                 */
                MatIconRegistry.prototype._createSvgElementForSingleIcon = function (responseText, options) {
                    /** @type {?} */
                    var svg = this._svgElementFromString(responseText);
                    this._setSvgAttributes(svg, options);
                    return svg;
                };
                /**
                 * Searches the cached element of the given SvgIconConfig for a nested icon element whose "id"
                 * tag matches the specified name. If found, copies the nested element to a new SVG element and
                 * returns it. Returns null if no matching element is found.
                 * @private
                 * @param {?} iconSet
                 * @param {?} iconName
                 * @param {?=} options
                 * @return {?}
                 */
                MatIconRegistry.prototype._extractSvgIconFromSet = function (iconSet, iconName, options) {
                    // Use the `id="iconName"` syntax in order to escape special
                    // characters in the ID (versus using the #iconName syntax).
                    /** @type {?} */
                    var iconSource = iconSet.querySelector("[id=\"" + iconName + "\"]");
                    if (!iconSource) {
                        return null;
                    }
                    // Clone the element and remove the ID to prevent multiple elements from being added
                    // to the page with the same ID.
                    /** @type {?} */
                    var iconElement = ( /** @type {?} */(iconSource.cloneNode(true)));
                    iconElement.removeAttribute('id');
                    // If the icon node is itself an <svg> node, clone and return it directly. If not, set it as
                    // the content of a new <svg> node.
                    if (iconElement.nodeName.toLowerCase() === 'svg') {
                        return this._setSvgAttributes(( /** @type {?} */(iconElement)), options);
                    }
                    // If the node is a <symbol>, it won't be rendered so we have to convert it into <svg>. Note
                    // that the same could be achieved by referring to it via <use href="#id">, however the <use>
                    // tag is problematic on Firefox, because it needs to include the current page path.
                    if (iconElement.nodeName.toLowerCase() === 'symbol') {
                        return this._setSvgAttributes(this._toSvgElement(iconElement), options);
                    }
                    // createElement('SVG') doesn't work as expected; the DOM ends up with
                    // the correct nodes, but the SVG content doesn't render. Instead we
                    // have to create an empty SVG node using innerHTML and append its content.
                    // Elements created using DOMParser.parseFromString have the same problem.
                    // http://stackoverflow.com/questions/23003278/svg-innerhtml-in-firefox-can-not-display
                    /** @type {?} */
                    var svg = this._svgElementFromString('<svg></svg>');
                    // Clone the node so we don't remove it from the parent icon set element.
                    svg.appendChild(iconElement);
                    return this._setSvgAttributes(svg, options);
                };
                /**
                 * Creates a DOM element from the given SVG string.
                 * @private
                 * @param {?} str
                 * @return {?}
                 */
                MatIconRegistry.prototype._svgElementFromString = function (str) {
                    /** @type {?} */
                    var div = this._document.createElement('DIV');
                    div.innerHTML = str;
                    /** @type {?} */
                    var svg = ( /** @type {?} */(div.querySelector('svg')));
                    if (!svg) {
                        throw Error('<svg> tag not found');
                    }
                    return svg;
                };
                /**
                 * Converts an element into an SVG node by cloning all of its children.
                 * @private
                 * @param {?} element
                 * @return {?}
                 */
                MatIconRegistry.prototype._toSvgElement = function (element) {
                    /** @type {?} */
                    var svg = this._svgElementFromString('<svg></svg>');
                    /** @type {?} */
                    var attributes = element.attributes;
                    // Copy over all the attributes from the `symbol` to the new SVG, except the id.
                    for (var i = 0; i < attributes.length; i++) {
                        var _a = attributes[i], name = _a.name, value = _a.value;
                        if (name !== 'id') {
                            svg.setAttribute(name, value);
                        }
                    }
                    for (var i = 0; i < element.childNodes.length; i++) {
                        if (element.childNodes[i].nodeType === this._document.ELEMENT_NODE) {
                            svg.appendChild(element.childNodes[i].cloneNode(true));
                        }
                    }
                    return svg;
                };
                /**
                 * Sets the default attributes for an SVG element to be used as an icon.
                 * @private
                 * @param {?} svg
                 * @param {?=} options
                 * @return {?}
                 */
                MatIconRegistry.prototype._setSvgAttributes = function (svg, options) {
                    svg.setAttribute('fit', '');
                    svg.setAttribute('height', '100%');
                    svg.setAttribute('width', '100%');
                    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
                    svg.setAttribute('focusable', 'false'); // Disable IE11 default behavior to make SVGs focusable.
                    if (options && options.viewBox) {
                        svg.setAttribute('viewBox', options.viewBox);
                    }
                    return svg;
                };
                /**
                 * Returns an Observable which produces the string contents of the given URL. Results may be
                 * cached, so future calls with the same URL may not cause another HTTP request.
                 * @private
                 * @param {?} safeUrl
                 * @return {?}
                 */
                MatIconRegistry.prototype._fetchUrl = function (safeUrl) {
                    var _this = this;
                    if (!this._httpClient) {
                        throw getMatIconNoHttpProviderError();
                    }
                    if (safeUrl == null) {
                        throw Error("Cannot fetch icon from URL \"" + safeUrl + "\".");
                    }
                    /** @type {?} */
                    var url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__["SecurityContext"].RESOURCE_URL, safeUrl);
                    if (!url) {
                        throw getMatIconFailedToSanitizeUrlError(safeUrl);
                    }
                    // Store in-progress fetches to avoid sending a duplicate request for a URL when there is
                    // already a request in progress for that URL. It's necessary to call share() on the
                    // Observable returned by http.get() so that multiple subscribers don't cause multiple XHRs.
                    /** @type {?} */
                    var inProgressFetch = this._inProgressUrlFetches.get(url);
                    if (inProgressFetch) {
                        return inProgressFetch;
                    }
                    // TODO(jelbourn): for some reason, the `finalize` operator "loses" the generic type on the
                    // Observable. Figure out why and fix it.
                    /** @type {?} */
                    var req = this._httpClient.get(url, { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(( /**
                     * @return {?}
                     */function () { return _this._inProgressUrlFetches.delete(url); })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])());
                    this._inProgressUrlFetches.set(url, req);
                    return req;
                };
                /**
                 * Registers an icon config by name in the specified namespace.
                 * @private
                 * @template THIS
                 * @this {THIS}
                 * @param {?} namespace Namespace in which to register the icon config.
                 * @param {?} iconName Name under which to register the config.
                 * @param {?} config Config to be registered.
                 * @return {THIS}
                 */
                MatIconRegistry.prototype._addSvgIconConfig = function (namespace, iconName, config) {
                    ( /** @type {?} */(this))._svgIconConfigs.set(iconKey(namespace, iconName), config);
                    return ( /** @type {?} */(this));
                };
                /**
                 * Registers an icon set config in the specified namespace.
                 * @private
                 * @template THIS
                 * @this {THIS}
                 * @param {?} namespace Namespace in which to register the icon config.
                 * @param {?} config Config to be registered.
                 * @return {THIS}
                 */
                MatIconRegistry.prototype._addSvgIconSetConfig = function (namespace, config) {
                    /** @type {?} */
                    var configNamespace = ( /** @type {?} */(this))._iconSetConfigs.get(namespace);
                    if (configNamespace) {
                        configNamespace.push(config);
                    }
                    else {
                        ( /** @type {?} */(this))._iconSetConfigs.set(namespace, [config]);
                    }
                    return ( /** @type {?} */(this));
                };
                return MatIconRegistry;
            }());
            MatIconRegistry.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"], args: [{ providedIn: 'root' },] },
            ];
            /** @nocollapse */
            MatIconRegistry.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] }] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] }
            ]; };
            /** @nocollapse */ MatIconRegistry.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"])({ factory: function MatIconRegistry_Factory() { return new MatIconRegistry(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"], 8)); }, token: MatIconRegistry, providedIn: "root" });
            /**
             * \@docs-private
             * @param {?} parentRegistry
             * @param {?} httpClient
             * @param {?} sanitizer
             * @param {?=} document
             * @param {?=} errorHandler
             * @return {?}
             */
            function ICON_REGISTRY_PROVIDER_FACTORY(parentRegistry, httpClient, sanitizer, document, errorHandler) {
                return parentRegistry || new MatIconRegistry(httpClient, sanitizer, document, errorHandler);
            }
            /**
             * \@docs-private
             * @type {?}
             */
            var ICON_REGISTRY_PROVIDER = {
                // If there is already an MatIconRegistry available, use that. Otherwise, provide a new one.
                provide: MatIconRegistry,
                deps: [
                    [new _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"](), MatIconRegistry],
                    [new _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"](), _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
                    [new _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"](), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"]],
                    [new _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"](), ( /** @type {?} */(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]))],
                ],
                useFactory: ICON_REGISTRY_PROVIDER_FACTORY,
            };
            /**
             * Clones an SVGElement while preserving type information.
             * @param {?} svg
             * @return {?}
             */
            function cloneSvg(svg) {
                return ( /** @type {?} */(svg.cloneNode(true)));
            }
            /**
             * Returns the cache key to use for an icon namespace and name.
             * @param {?} namespace
             * @param {?} name
             * @return {?}
             */
            function iconKey(namespace, name) {
                return namespace + ':' + name;
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            // Boilerplate for applying mixins to MatIcon.
            /**
             * \@docs-private
             */
            var MatIconBase = /** @class */ (function () {
                /**
                 * @param {?} _elementRef
                 */
                function MatIconBase(_elementRef) {
                    this._elementRef = _elementRef;
                }
                return MatIconBase;
            }());
            /** @type {?} */
            var _MatIconMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["mixinColor"])(MatIconBase);
            /**
             * Injection token used to provide the current location to `MatIcon`.
             * Used to handle server-side rendering and to stub out during unit tests.
             * \@docs-private
             * @type {?}
             */
            var MAT_ICON_LOCATION = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-icon-location', {
                providedIn: 'root',
                factory: MAT_ICON_LOCATION_FACTORY
            });
            /**
             * \@docs-private
             * @return {?}
             */
            function MAT_ICON_LOCATION_FACTORY() {
                /** @type {?} */
                var _document = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]);
                /** @type {?} */
                var _location = _document ? _document.location : null;
                return {
                    // Note that this needs to be a function, rather than a property, because Angular
                    // will only resolve it once, but we want the current path on each call.
                    getPathname: ( /**
                     * @return {?}
                     */function () { return _location ? (_location.pathname + _location.search) : ''; })
                };
            }
            /**
             * SVG attributes that accept a FuncIRI (e.g. `url(<something>)`).
             * @type {?}
             */
            var funcIriAttributes = [
                'clip-path',
                'color-profile',
                'src',
                'cursor',
                'fill',
                'filter',
                'marker',
                'marker-start',
                'marker-mid',
                'marker-end',
                'mask',
                'stroke'
            ];
            var ɵ0 = /**
             * @param {?} attr
             * @return {?}
             */ function (/**
             * @param {?} attr
             * @return {?}
             */ attr) { return "[" + attr + "]"; };
            /**
             * Selector that can be used to find all elements that are using a `FuncIRI`.
             * @type {?}
             */
            var funcIriAttributeSelector = funcIriAttributes.map((ɵ0)).join(', ');
            /**
             * Regex that can be used to extract the id out of a FuncIRI.
             * @type {?}
             */
            var funcIriPattern = /^url\(['"]?#(.*?)['"]?\)$/;
            /**
             * Component to display an icon. It can be used in the following ways:
             *
             * - Specify the svgIcon input to load an SVG icon from a URL previously registered with the
             *   addSvgIcon, addSvgIconInNamespace, addSvgIconSet, or addSvgIconSetInNamespace methods of
             *   MatIconRegistry. If the svgIcon value contains a colon it is assumed to be in the format
             *   "[namespace]:[name]", if not the value will be the name of an icon in the default namespace.
             *   Examples:
             *     `<mat-icon svgIcon="left-arrow"></mat-icon>
             *     <mat-icon svgIcon="animals:cat"></mat-icon>`
             *
             * - Use a font ligature as an icon by putting the ligature text in the content of the `<mat-icon>`
             *   component. By default the Material icons font is used as described at
             *   http://google.github.io/material-design-icons/#icon-font-for-the-web. You can specify an
             *   alternate font by setting the fontSet input to either the CSS class to apply to use the
             *   desired font, or to an alias previously registered with MatIconRegistry.registerFontClassAlias.
             *   Examples:
             *     `<mat-icon>home</mat-icon>
             *     <mat-icon fontSet="myfont">sun</mat-icon>`
             *
             * - Specify a font glyph to be included via CSS rules by setting the fontSet input to specify the
             *   font, and the fontIcon input to specify the icon. Typically the fontIcon will specify a
             *   CSS class which causes the glyph to be displayed via a :before selector, as in
             *   https://fortawesome.github.io/Font-Awesome/examples/
             *   Example:
             *     `<mat-icon fontSet="fa" fontIcon="alarm"></mat-icon>`
             */
            var MatIcon = /** @class */ (function (_super) {
                __extends(MatIcon, _super);
                /**
                 * @param {?} elementRef
                 * @param {?} _iconRegistry
                 * @param {?} ariaHidden
                 * @param {?=} _location
                 * @param {?=} _errorHandler
                 */
                function MatIcon(elementRef, _iconRegistry, ariaHidden, _location, _errorHandler) {
                    var _this = _super.call(this, elementRef) || this;
                    _this._iconRegistry = _iconRegistry;
                    _this._location = _location;
                    _this._errorHandler = _errorHandler;
                    _this._inline = false;
                    // If the user has not explicitly set aria-hidden, mark the icon as hidden, as this is
                    // the right thing to do for the majority of icon use-cases.
                    if (!ariaHidden) {
                        elementRef.nativeElement.setAttribute('aria-hidden', 'true');
                    }
                    return _this;
                }
                Object.defineProperty(MatIcon.prototype, "inline", {
                    /**
                     * Whether the icon should be inlined, automatically sizing the icon to match the font size of
                     * the element the icon is contained in.
                     * @return {?}
                     */
                    get: function () {
                        return this._inline;
                    },
                    /**
                     * @param {?} inline
                     * @return {?}
                     */
                    set: function (inline) {
                        this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceBooleanProperty"])(inline);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatIcon.prototype, "fontSet", {
                    /**
                     * Font set that the icon is a part of.
                     * @return {?}
                     */
                    get: function () { return this._fontSet; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._fontSet = this._cleanupFontValue(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MatIcon.prototype, "fontIcon", {
                    /**
                     * Name of an icon within a font set.
                     * @return {?}
                     */
                    get: function () { return this._fontIcon; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._fontIcon = this._cleanupFontValue(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Splits an svgIcon binding value into its icon set and icon name components.
                 * Returns a 2-element array of [(icon set), (icon name)].
                 * The separator for the two fields is ':'. If there is no separator, an empty
                 * string is returned for the icon set and the entire value is returned for
                 * the icon name. If the argument is falsy, returns an array of two empty strings.
                 * Throws an error if the name contains two or more ':' separators.
                 * Examples:
                 *   `'social:cake' -> ['social', 'cake']
                 *   'penguin' -> ['', 'penguin']
                 *   null -> ['', '']
                 *   'a:b:c' -> (throws Error)`
                 * @private
                 * @param {?} iconName
                 * @return {?}
                 */
                MatIcon.prototype._splitIconName = function (iconName) {
                    if (!iconName) {
                        return ['', ''];
                    }
                    /** @type {?} */
                    var parts = iconName.split(':');
                    switch (parts.length) {
                        case 1: return ['', parts[0]]; // Use default namespace.
                        case 2: return ( /** @type {?} */(parts));
                        default: throw Error("Invalid icon name: \"" + iconName + "\"");
                    }
                };
                /**
                 * @param {?} changes
                 * @return {?}
                 */
                MatIcon.prototype.ngOnChanges = function (changes) {
                    var _this = this;
                    // Only update the inline SVG icon if the inputs changed, to avoid unnecessary DOM operations.
                    /** @type {?} */
                    var svgIconChanges = changes['svgIcon'];
                    if (svgIconChanges) {
                        if (this.svgIcon) {
                            var _a = __read(this._splitIconName(this.svgIcon), 2), namespace_1 = _a[0], iconName_1 = _a[1];
                            this._iconRegistry.getNamedSvgIcon(iconName_1, namespace_1)
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
                                .subscribe(( /**
                         * @param {?} svg
                         * @return {?}
                         */function (/**
                         * @param {?} svg
                         * @return {?}
                         */ svg) { return _this._setSvgElement(svg); }), ( /**
                             * @param {?} err
                             * @return {?}
                             */function (err) {
                                /** @type {?} */
                                var errorMessage = "Error retrieving icon " + namespace_1 + ":" + iconName_1 + "! " + err.message;
                                // @breaking-change 9.0.0 _errorHandler parameter to be made required.
                                if (_this._errorHandler) {
                                    _this._errorHandler.handleError(new Error(errorMessage));
                                }
                                else {
                                    console.error(errorMessage);
                                }
                            }));
                        }
                        else if (svgIconChanges.previousValue) {
                            this._clearSvgElement();
                        }
                    }
                    if (this._usingFontIcon()) {
                        this._updateFontIconClasses();
                    }
                };
                /**
                 * @return {?}
                 */
                MatIcon.prototype.ngOnInit = function () {
                    // Update font classes because ngOnChanges won't be called if none of the inputs are present,
                    // e.g. <mat-icon>arrow</mat-icon> In this case we need to add a CSS class for the default font.
                    if (this._usingFontIcon()) {
                        this._updateFontIconClasses();
                    }
                };
                /**
                 * @return {?}
                 */
                MatIcon.prototype.ngAfterViewChecked = function () {
                    /** @type {?} */
                    var cachedElements = this._elementsWithExternalReferences;
                    if (cachedElements && this._location && cachedElements.size) {
                        /** @type {?} */
                        var newPath = this._location.getPathname();
                        // We need to check whether the URL has changed on each change detection since
                        // the browser doesn't have an API that will let us react on link clicks and
                        // we can't depend on the Angular router. The references need to be updated,
                        // because while most browsers don't care whether the URL is correct after
                        // the first render, Safari will break if the user navigates to a different
                        // page and the SVG isn't re-rendered.
                        if (newPath !== this._previousPath) {
                            this._previousPath = newPath;
                            this._prependPathToReferences(newPath);
                        }
                    }
                };
                /**
                 * @return {?}
                 */
                MatIcon.prototype.ngOnDestroy = function () {
                    if (this._elementsWithExternalReferences) {
                        this._elementsWithExternalReferences.clear();
                    }
                };
                /**
                 * @private
                 * @return {?}
                 */
                MatIcon.prototype._usingFontIcon = function () {
                    return !this.svgIcon;
                };
                /**
                 * @private
                 * @param {?} svg
                 * @return {?}
                 */
                MatIcon.prototype._setSvgElement = function (svg) {
                    this._clearSvgElement();
                    // Workaround for IE11 and Edge ignoring `style` tags inside dynamically-created SVGs.
                    // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10898469/
                    // Do this before inserting the element into the DOM, in order to avoid a style recalculation.
                    /** @type {?} */
                    var styleTags = ( /** @type {?} */(svg.querySelectorAll('style')));
                    for (var i = 0; i < styleTags.length; i++) {
                        styleTags[i].textContent += ' ';
                    }
                    // Note: we do this fix here, rather than the icon registry, because the
                    // references have to point to the URL at the time that the icon was created.
                    if (this._location) {
                        /** @type {?} */
                        var path = this._location.getPathname();
                        this._previousPath = path;
                        this._cacheChildrenWithExternalReferences(svg);
                        this._prependPathToReferences(path);
                    }
                    this._elementRef.nativeElement.appendChild(svg);
                };
                /**
                 * @private
                 * @return {?}
                 */
                MatIcon.prototype._clearSvgElement = function () {
                    /** @type {?} */
                    var layoutElement = this._elementRef.nativeElement;
                    /** @type {?} */
                    var childCount = layoutElement.childNodes.length;
                    if (this._elementsWithExternalReferences) {
                        this._elementsWithExternalReferences.clear();
                    }
                    // Remove existing non-element child nodes and SVGs, and add the new SVG element. Note that
                    // we can't use innerHTML, because IE will throw if the element has a data binding.
                    while (childCount--) {
                        /** @type {?} */
                        var child = layoutElement.childNodes[childCount];
                        // 1 corresponds to Node.ELEMENT_NODE. We remove all non-element nodes in order to get rid
                        // of any loose text nodes, as well as any SVG elements in order to remove any old icons.
                        if (child.nodeType !== 1 || child.nodeName.toLowerCase() === 'svg') {
                            layoutElement.removeChild(child);
                        }
                    }
                };
                /**
                 * @private
                 * @return {?}
                 */
                MatIcon.prototype._updateFontIconClasses = function () {
                    if (!this._usingFontIcon()) {
                        return;
                    }
                    /** @type {?} */
                    var elem = this._elementRef.nativeElement;
                    /** @type {?} */
                    var fontSetClass = this.fontSet ?
                        this._iconRegistry.classNameForFontAlias(this.fontSet) :
                        this._iconRegistry.getDefaultFontSetClass();
                    if (fontSetClass != this._previousFontSetClass) {
                        if (this._previousFontSetClass) {
                            elem.classList.remove(this._previousFontSetClass);
                        }
                        if (fontSetClass) {
                            elem.classList.add(fontSetClass);
                        }
                        this._previousFontSetClass = fontSetClass;
                    }
                    if (this.fontIcon != this._previousFontIconClass) {
                        if (this._previousFontIconClass) {
                            elem.classList.remove(this._previousFontIconClass);
                        }
                        if (this.fontIcon) {
                            elem.classList.add(this.fontIcon);
                        }
                        this._previousFontIconClass = this.fontIcon;
                    }
                };
                /**
                 * Cleans up a value to be used as a fontIcon or fontSet.
                 * Since the value ends up being assigned as a CSS class, we
                 * have to trim the value and omit space-separated values.
                 * @private
                 * @param {?} value
                 * @return {?}
                 */
                MatIcon.prototype._cleanupFontValue = function (value) {
                    return typeof value === 'string' ? value.trim().split(' ')[0] : value;
                };
                /**
                 * Prepends the current path to all elements that have an attribute pointing to a `FuncIRI`
                 * reference. This is required because WebKit browsers require references to be prefixed with
                 * the current path, if the page has a `base` tag.
                 * @private
                 * @param {?} path
                 * @return {?}
                 */
                MatIcon.prototype._prependPathToReferences = function (path) {
                    /** @type {?} */
                    var elements = this._elementsWithExternalReferences;
                    if (elements) {
                        elements.forEach(( /**
                         * @param {?} attrs
                         * @param {?} element
                         * @return {?}
                         */function (attrs, element) {
                            attrs.forEach(( /**
                             * @param {?} attr
                             * @return {?}
                             */function (/**
                             * @param {?} attr
                             * @return {?}
                             */ attr) {
                                element.setAttribute(attr.name, "url('" + path + "#" + attr.value + "')");
                            }));
                        }));
                    }
                };
                /**
                 * Caches the children of an SVG element that have `url()`
                 * references that we need to prefix with the current path.
                 * @private
                 * @param {?} element
                 * @return {?}
                 */
                MatIcon.prototype._cacheChildrenWithExternalReferences = function (element) {
                    /** @type {?} */
                    var elementsWithFuncIri = element.querySelectorAll(funcIriAttributeSelector);
                    /** @type {?} */
                    var elements = this._elementsWithExternalReferences =
                        this._elementsWithExternalReferences || new Map();
                    var _loop_1 = function (i) {
                        funcIriAttributes.forEach(( /**
                         * @param {?} attr
                         * @return {?}
                         */function (/**
                         * @param {?} attr
                         * @return {?}
                         */ attr) {
                            /** @type {?} */
                            var elementWithReference = elementsWithFuncIri[i];
                            /** @type {?} */
                            var value = elementWithReference.getAttribute(attr);
                            /** @type {?} */
                            var match = value ? value.match(funcIriPattern) : null;
                            if (match) {
                                /** @type {?} */
                                var attributes = elements.get(elementWithReference);
                                if (!attributes) {
                                    attributes = [];
                                    elements.set(elementWithReference, attributes);
                                }
                                ( /** @type {?} */(attributes)).push({ name: attr, value: match[1] });
                            }
                        }));
                    };
                    for (var i = 0; i < elementsWithFuncIri.length; i++) {
                        _loop_1(i);
                    }
                };
                return MatIcon;
            }(_MatIconMixinBase));
            MatIcon.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{ template: '<ng-content></ng-content>',
                            selector: 'mat-icon',
                            exportAs: 'matIcon',
                            styles: [".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1,1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],
                            inputs: ['color'],
                            host: {
                                'role': 'img',
                                'class': 'mat-icon notranslate',
                                '[class.mat-icon-inline]': 'inline',
                                '[class.mat-icon-no-color]': 'color !== "primary" && color !== "accent" && color !== "warn"',
                            },
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                        },] },
            ];
            /** @nocollapse */
            MatIcon.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
                { type: MatIconRegistry },
                { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Attribute"], args: ['aria-hidden',] }] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [MAT_ICON_LOCATION,] }] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] }
            ]; };
            MatIcon.propDecorators = {
                inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                svgIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                fontSet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                fontIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var MatIconModule = /** @class */ (function () {
                function MatIconModule() {
                }
                return MatIconModule;
            }());
            MatIconModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                            imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"]],
                            exports: [MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"]],
                            declarations: [MatIcon],
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
            //# sourceMappingURL=icon.js.map
            /***/ 
        }),
        /***/ "./node_modules/@angular/material/esm2015/stepper.js": 
        /*!***********************************************************!*\
          !*** ./node_modules/@angular/material/esm2015/stepper.js ***!
          \***********************************************************/
        /*! exports provided: MatStepperModule, MatStepLabel, MatStep, MatStepper, MatHorizontalStepper, MatVerticalStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MAT_STEPPER_INTL_PROVIDER_FACTORY, MatStepperIntl, MAT_STEPPER_INTL_PROVIDER, matStepperAnimations, MatStepperIcon */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepperModule", function () { return MatStepperModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepLabel", function () { return MatStepLabel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStep", function () { return MatStep; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepper", function () { return MatStepper; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatHorizontalStepper", function () { return MatHorizontalStepper; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatVerticalStepper", function () { return MatVerticalStepper; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepperNext", function () { return MatStepperNext; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepperPrevious", function () { return MatStepperPrevious; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepHeader", function () { return MatStepHeader; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_STEPPER_INTL_PROVIDER_FACTORY", function () { return MAT_STEPPER_INTL_PROVIDER_FACTORY; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepperIntl", function () { return MatStepperIntl; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_STEPPER_INTL_PROVIDER", function () { return MAT_STEPPER_INTL_PROVIDER; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matStepperAnimations", function () { return matStepperAnimations; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepperIcon", function () { return MatStepperIcon; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm2015/stepper.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
            /* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
            /* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm2015/bidi.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
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
            var MatStepLabel = /** @class */ (function (_super) {
                __extends(MatStepLabel, _super);
                function MatStepLabel() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return MatStepLabel;
            }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepLabel"]));
            MatStepLabel.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[matStepLabel]',
                        },] },
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Stepper data that is required for internationalization.
             */
            var MatStepperIntl = /** @class */ (function () {
                function MatStepperIntl() {
                    /**
                     * Stream that emits whenever the labels here are changed. Use this to notify
                     * components if the labels have changed after initialization.
                     */
                    this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                    /**
                     * Label that is rendered below optional steps.
                     */
                    this.optionalLabel = 'Optional';
                }
                return MatStepperIntl;
            }());
            MatStepperIntl.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
            ];
            /** @nocollapse */ MatStepperIntl.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function MatStepperIntl_Factory() { return new MatStepperIntl(); }, token: MatStepperIntl, providedIn: "root" });
            /**
             * \@docs-private
             * @param {?} parentIntl
             * @return {?}
             */
            function MAT_STEPPER_INTL_PROVIDER_FACTORY(parentIntl) {
                return parentIntl || new MatStepperIntl();
            }
            /**
             * \@docs-private
             * @type {?}
             */
            var MAT_STEPPER_INTL_PROVIDER = {
                provide: MatStepperIntl,
                deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), MatStepperIntl]],
                useFactory: MAT_STEPPER_INTL_PROVIDER_FACTORY
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var MatStepHeader = /** @class */ (function (_super) {
                __extends(MatStepHeader, _super);
                /**
                 * @param {?} _intl
                 * @param {?} _focusMonitor
                 * @param {?} _elementRef
                 * @param {?} changeDetectorRef
                 */
                function MatStepHeader(_intl, _focusMonitor, _elementRef, changeDetectorRef) {
                    var _this = _super.call(this, _elementRef) || this;
                    _this._intl = _intl;
                    _this._focusMonitor = _focusMonitor;
                    _focusMonitor.monitor(_elementRef, true);
                    _this._intlSubscription = _intl.changes.subscribe(( /**
                     * @return {?}
                     */function () { return changeDetectorRef.markForCheck(); }));
                    return _this;
                }
                /**
                 * @return {?}
                 */
                MatStepHeader.prototype.ngOnDestroy = function () {
                    this._intlSubscription.unsubscribe();
                    this._focusMonitor.stopMonitoring(this._elementRef);
                };
                /**
                 * Focuses the step header.
                 * @return {?}
                 */
                MatStepHeader.prototype.focus = function () {
                    this._focusMonitor.focusVia(this._elementRef, 'program');
                };
                /**
                 * Returns string label of given step if it is a text label.
                 * @return {?}
                 */
                MatStepHeader.prototype._stringLabel = function () {
                    return this.label instanceof MatStepLabel ? null : this.label;
                };
                /**
                 * Returns MatStepLabel if the label of given step is a template label.
                 * @return {?}
                 */
                MatStepHeader.prototype._templateLabel = function () {
                    return this.label instanceof MatStepLabel ? this.label : null;
                };
                /**
                 * Returns the host HTML element.
                 * @return {?}
                 */
                MatStepHeader.prototype._getHostElement = function () {
                    return this._elementRef.nativeElement;
                };
                /**
                 * Template context variables that are exposed to the `matStepperIcon` instances.
                 * @return {?}
                 */
                MatStepHeader.prototype._getIconContext = function () {
                    return {
                        index: this.index,
                        active: this.active,
                        optional: this.optional
                    };
                };
                /**
                 * @param {?} state
                 * @return {?}
                 */
                MatStepHeader.prototype._getDefaultTextForState = function (state$$1) {
                    if (state$$1 == 'number') {
                        return "" + (this.index + 1);
                    }
                    if (state$$1 == 'edit') {
                        return 'create';
                    }
                    if (state$$1 == 'error') {
                        return 'warning';
                    }
                    return state$$1;
                };
                return MatStepHeader;
            }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepHeader"]));
            MatStepHeader.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{ selector: 'mat-step-header',
                            template: "<div class=\"mat-step-header-ripple\" matRipple [matRippleTrigger]=\"_getHostElement()\" [matRippleDisabled]=\"disableRipple\"></div><div class=\"mat-step-icon-state-{{state}} mat-step-icon\" [class.mat-step-icon-selected]=\"selected\"><div class=\"mat-step-icon-content\" [ngSwitch]=\"!!(iconOverrides && iconOverrides[state])\"><ng-container *ngSwitchCase=\"true\" [ngTemplateOutlet]=\"iconOverrides[state]\" [ngTemplateOutletContext]=\"_getIconContext()\"></ng-container><ng-container *ngSwitchDefault [ngSwitch]=\"state\"><span *ngSwitchCase=\"'number'\">{{_getDefaultTextForState(state)}}</span><mat-icon *ngSwitchDefault>{{_getDefaultTextForState(state)}}</mat-icon></ng-container></div></div><div class=\"mat-step-label\" [class.mat-step-label-active]=\"active\" [class.mat-step-label-selected]=\"selected\" [class.mat-step-label-error]=\"state == 'error'\"><ng-container *ngIf=\"_templateLabel()\" [ngTemplateOutlet]=\"_templateLabel()!.template\"></ng-container><div class=\"mat-step-text-label\" *ngIf=\"_stringLabel()\">{{label}}</div><div class=\"mat-step-optional\" *ngIf=\"optional && state != 'error'\">{{_intl.optionalLabel}}</div><div class=\"mat-step-sub-label-error\" *ngIf=\"state == 'error'\">{{errorMessage}}</div></div>",
                            styles: [".mat-step-header{overflow:hidden;outline:0;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:transparent}.mat-step-optional,.mat-step-sub-label-error{font-size:12px}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative}.mat-step-icon .mat-icon,.mat-step-icon-content{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}"],
                            host: {
                                'class': 'mat-step-header',
                                'role': 'tab',
                            },
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                        },] },
            ];
            /** @nocollapse */
            MatStepHeader.ctorParameters = function () { return [
                { type: MatStepperIntl },
                { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
            ]; };
            MatStepHeader.propDecorators = {
                state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                errorMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                iconOverrides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                optional: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                disableRipple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Animations used by the Material steppers.
             * \@docs-private
             * @type {?}
             */
            var matStepperAnimations = {
                /**
                 * Animation that transitions the step along the X axis in a horizontal stepper.
                 */
                horizontalStepTransition: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('stepTransition', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('previous', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translate3d(-100%, 0, 0)', visibility: 'hidden' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('current', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'none', visibility: 'visible' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('next', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'translate3d(100%, 0, 0)', visibility: 'hidden' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('500ms cubic-bezier(0.35, 0, 0.25, 1)'))
                ]),
                /**
                 * Animation that transitions the step along the Y axis in a vertical stepper.
                 */
                verticalStepTransition: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('stepTransition', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('previous', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: '0px', visibility: 'hidden' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('next', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: '0px', visibility: 'hidden' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('current', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: '*', visibility: 'visible' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* <=> current', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
                ])
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Template to be used to override the icons inside the step header.
             */
            var MatStepperIcon = /** @class */ (function () {
                /**
                 * @param {?} templateRef
                 */
                function MatStepperIcon(templateRef) {
                    this.templateRef = templateRef;
                }
                return MatStepperIcon;
            }());
            MatStepperIcon.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'ng-template[matStepperIcon]',
                        },] },
            ];
            /** @nocollapse */
            MatStepperIcon.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
            ]; };
            MatStepperIcon.propDecorators = {
                name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matStepperIcon',] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var MatStep = /** @class */ (function (_super) {
                __extends(MatStep, _super);
                /**
                 * \@breaking-change 8.0.0 remove the `?` after `stepperOptions`
                 * @param {?} stepper
                 * @param {?} _errorStateMatcher
                 * @param {?=} stepperOptions
                 */
                function MatStep(stepper, _errorStateMatcher, stepperOptions) {
                    var _this = _super.call(this, stepper, stepperOptions) || this;
                    _this._errorStateMatcher = _errorStateMatcher;
                    return _this;
                }
                /**
                 * Custom error state matcher that additionally checks for validity of interacted form.
                 * @param {?} control
                 * @param {?} form
                 * @return {?}
                 */
                MatStep.prototype.isErrorState = function (control, form) {
                    /** @type {?} */
                    var originalErrorState = this._errorStateMatcher.isErrorState(control, form);
                    // Custom error state checks for the validity of form that is not submitted or touched
                    // since user can trigger a form change by calling for another step without directly
                    // interacting with the current form.
                    /** @type {?} */
                    var customErrorState = !!(control && control.invalid && this.interacted);
                    return originalErrorState || customErrorState;
                };
                return MatStep;
            }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStep"]));
            MatStep.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{ selector: 'mat-step',
                            template: "<ng-template><ng-content></ng-content></ng-template>",
                            providers: [{ provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["ErrorStateMatcher"], useExisting: MatStep }],
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                            exportAs: 'matStep',
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                        },] },
            ];
            /** @nocollapse */
            MatStep.ctorParameters = function () { return [
                { type: MatStepper, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                                                 * @return {?}
                                                 */function () { return MatStepper; })),] }] },
                { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["ErrorStateMatcher"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["STEPPER_GLOBAL_OPTIONS"],] }] }
            ]; };
            MatStep.propDecorators = {
                stepLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [MatStepLabel, { static: false },] }]
            };
            var MatStepper = /** @class */ (function (_super) {
                __extends(MatStepper, _super);
                function MatStepper() {
                    var _this = _super.apply(this, __spread(arguments)) || this;
                    /**
                     * Event emitted when the current step is done transitioning in.
                     */
                    _this.animationDone = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    /**
                     * Consumer-specified template-refs to be used to override the header icons.
                     */
                    _this._iconOverrides = {};
                    /**
                     * Stream of animation `done` events when the body expands/collapses.
                     */
                    _this._animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                    return _this;
                }
                /**
                 * @return {?}
                 */
                MatStepper.prototype.ngAfterContentInit = function () {
                    var _this = this;
                    this._icons.forEach(( /**
                     * @param {?} __0
                     * @return {?}
                     */function (_a) {
                        var name = _a.name, templateRef = _a.templateRef;
                        return _this._iconOverrides[name] = templateRef;
                    }));
                    // Mark the component for change detection whenever the content children query changes
                    this._steps.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._destroyed)).subscribe(( /**
                     * @return {?}
                     */function () { return _this._stateChanged(); }));
                    this._animationDone.pipe(
                    // This needs a `distinctUntilChanged` in order to avoid emitting the same event twice due
                    // to a bug in animations where the `.done` callback gets invoked twice on some browsers.
                    // See https://github.com/angular/angular/issues/24084
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])(( /**
                     * @param {?} x
                     * @param {?} y
                     * @return {?}
                     */function (x, y) { return x.fromState === y.fromState && x.toState === y.toState; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._destroyed)).subscribe(( /**
                     * @param {?} event
                     * @return {?}
                     */function (/**
                     * @param {?} event
                     * @return {?}
                     */ event) {
                        if ((( /** @type {?} */(event.toState))) === 'current') {
                            _this.animationDone.emit();
                        }
                    }));
                };
                return MatStepper;
            }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"]));
            MatStepper.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[matStepper]', providers: [{ provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"], useExisting: MatStepper }] },] },
            ];
            MatStepper.propDecorators = {
                _stepHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"], args: [MatStepHeader,] }],
                _steps: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [MatStep,] }],
                _icons: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [MatStepperIcon,] }],
                animationDone: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
                disableRipple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            var MatHorizontalStepper = /** @class */ (function (_super) {
                __extends(MatHorizontalStepper, _super);
                function MatHorizontalStepper() {
                    var _this = _super.apply(this, __spread(arguments)) || this;
                    /**
                     * Whether the label should display in bottom or end position.
                     */
                    _this.labelPosition = 'end';
                    return _this;
                }
                return MatHorizontalStepper;
            }(MatStepper));
            MatHorizontalStepper.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{ selector: 'mat-horizontal-stepper',
                            exportAs: 'matHorizontalStepper',
                            template: "<div class=\"mat-horizontal-stepper-header-container\"><ng-container *ngFor=\"let step of steps; let i = index; let isLast = last\"><mat-step-header class=\"mat-horizontal-stepper-header\" (click)=\"step.select()\" (keydown)=\"_onKeydown($event)\" [tabIndex]=\"_getFocusIndex() === i ? 0 : -1\" [id]=\"_getStepLabelId(i)\" [attr.aria-posinset]=\"i + 1\" [attr.aria-setsize]=\"steps.length\" [attr.aria-controls]=\"_getStepContentId(i)\" [attr.aria-selected]=\"selectedIndex == i\" [attr.aria-label]=\"step.ariaLabel || null\" [attr.aria-labelledby]=\"(!step.ariaLabel && step.ariaLabelledby) ? step.ariaLabelledby : null\" [index]=\"i\" [state]=\"_getIndicatorType(i, step.state)\" [label]=\"step.stepLabel || step.label\" [selected]=\"selectedIndex === i\" [active]=\"step.completed || selectedIndex === i || !linear\" [optional]=\"step.optional\" [errorMessage]=\"step.errorMessage\" [iconOverrides]=\"_iconOverrides\" [disableRipple]=\"disableRipple\"></mat-step-header><div *ngIf=\"!isLast\" class=\"mat-stepper-horizontal-line\"></div></ng-container></div><div class=\"mat-horizontal-content-container\"><div *ngFor=\"let step of steps; let i = index\" [attr.tabindex]=\"selectedIndex === i ? 0 : null\" class=\"mat-horizontal-stepper-content\" role=\"tabpanel\" [@stepTransition]=\"_getAnimationDirection(i)\" (@stepTransition.done)=\"_animationDone.next($event)\" [id]=\"_getStepContentId(i)\" [attr.aria-labelledby]=\"_getStepLabelId(i)\" [attr.aria-expanded]=\"selectedIndex === i\"><ng-container [ngTemplateOutlet]=\"step.content\"></ng-container></div></div>",
                            styles: [".mat-stepper-horizontal,.mat-stepper-vertical{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:36px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{border-top-width:1px;border-top-style:solid;content:'';display:inline-block;height:0;position:absolute;top:36px;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto;padding:24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;padding:24px;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:'';position:absolute;top:-16px;bottom:-16px;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}"],
                            inputs: ['selectedIndex'],
                            host: {
                                'class': 'mat-stepper-horizontal',
                                '[class.mat-stepper-label-position-end]': 'labelPosition == "end"',
                                '[class.mat-stepper-label-position-bottom]': 'labelPosition == "bottom"',
                                'aria-orientation': 'horizontal',
                                'role': 'tablist',
                            },
                            animations: [matStepperAnimations.horizontalStepTransition],
                            providers: [
                                { provide: MatStepper, useExisting: MatHorizontalStepper },
                                { provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"], useExisting: MatHorizontalStepper }
                            ],
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                        },] },
            ];
            MatHorizontalStepper.propDecorators = {
                labelPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            var MatVerticalStepper = /** @class */ (function (_super) {
                __extends(MatVerticalStepper, _super);
                /**
                 * @param {?} dir
                 * @param {?} changeDetectorRef
                 * @param {?=} elementRef
                 * @param {?=} _document
                 */
                function MatVerticalStepper(dir, changeDetectorRef, 
                // @breaking-change 8.0.0 `elementRef` and `_document` parameters to become required.
                elementRef, _document) {
                    var _this = _super.call(this, dir, changeDetectorRef, elementRef, _document) || this;
                    _this._orientation = 'vertical';
                    return _this;
                }
                return MatVerticalStepper;
            }(MatStepper));
            MatVerticalStepper.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{ selector: 'mat-vertical-stepper',
                            exportAs: 'matVerticalStepper',
                            template: "<div class=\"mat-step\" *ngFor=\"let step of steps; let i = index; let isLast = last\"><mat-step-header class=\"mat-vertical-stepper-header\" (click)=\"step.select()\" (keydown)=\"_onKeydown($event)\" [tabIndex]=\"_getFocusIndex() == i ? 0 : -1\" [id]=\"_getStepLabelId(i)\" [attr.aria-posinset]=\"i + 1\" [attr.aria-setsize]=\"steps.length\" [attr.aria-controls]=\"_getStepContentId(i)\" [attr.aria-selected]=\"selectedIndex === i\" [attr.aria-label]=\"step.ariaLabel || null\" [attr.aria-labelledby]=\"(!step.ariaLabel && step.ariaLabelledby) ? step.ariaLabelledby : null\" [index]=\"i\" [state]=\"_getIndicatorType(i, step.state)\" [label]=\"step.stepLabel || step.label\" [selected]=\"selectedIndex === i\" [active]=\"step.completed || selectedIndex === i || !linear\" [optional]=\"step.optional\" [errorMessage]=\"step.errorMessage\" [iconOverrides]=\"_iconOverrides\" [disableRipple]=\"disableRipple\"></mat-step-header><div class=\"mat-vertical-content-container\" [class.mat-stepper-vertical-line]=\"!isLast\"><div class=\"mat-vertical-stepper-content\" role=\"tabpanel\" [attr.tabindex]=\"selectedIndex === i ? 0 : null\" [@stepTransition]=\"_getAnimationDirection(i)\" (@stepTransition.done)=\"_animationDone.next($event)\" [id]=\"_getStepContentId(i)\" [attr.aria-labelledby]=\"_getStepLabelId(i)\" [attr.aria-expanded]=\"selectedIndex === i\"><div class=\"mat-vertical-content\"><ng-container [ngTemplateOutlet]=\"step.content\"></ng-container></div></div></div></div>",
                            styles: [".mat-stepper-horizontal,.mat-stepper-vertical{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:36px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{border-top-width:1px;border-top-style:solid;content:'';display:inline-block;height:0;position:absolute;top:36px;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto;padding:24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;padding:24px;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:'';position:absolute;top:-16px;bottom:-16px;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}"],
                            inputs: ['selectedIndex'],
                            host: {
                                'class': 'mat-stepper-vertical',
                                'aria-orientation': 'vertical',
                                'role': 'tablist',
                            },
                            animations: [matStepperAnimations.verticalStepTransition],
                            providers: [
                                { provide: MatStepper, useExisting: MatVerticalStepper },
                                { provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"], useExisting: MatVerticalStepper }
                            ],
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                        },] },
            ];
            /** @nocollapse */
            MatVerticalStepper.ctorParameters = function () { return [
                { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"],] }] }
            ]; };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Button that moves to the next step in a stepper workflow.
             */
            var MatStepperNext = /** @class */ (function (_super) {
                __extends(MatStepperNext, _super);
                function MatStepperNext() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return MatStepperNext;
            }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepperNext"]));
            MatStepperNext.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'button[matStepperNext]',
                            host: {
                                '[type]': 'type',
                            },
                            inputs: ['type']
                        },] },
            ];
            /**
             * Button that moves to the previous step in a stepper workflow.
             */
            var MatStepperPrevious = /** @class */ (function (_super) {
                __extends(MatStepperPrevious, _super);
                function MatStepperPrevious() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return MatStepperPrevious;
            }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepperPrevious"]));
            MatStepperPrevious.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'button[matStepperPrevious]',
                            host: {
                                '[type]': 'type',
                            },
                            inputs: ['type']
                        },] },
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var MatStepperModule = /** @class */ (function () {
                function MatStepperModule() {
                }
                return MatStepperModule;
            }());
            MatStepperModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                            imports: [
                                _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"],
                                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__["PortalModule"],
                                _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepperModule"],
                                _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                                _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
                            ],
                            exports: [
                                _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"],
                                MatHorizontalStepper,
                                MatVerticalStepper,
                                MatStep,
                                MatStepLabel,
                                MatStepper,
                                MatStepperNext,
                                MatStepperPrevious,
                                MatStepHeader,
                                MatStepperIcon,
                            ],
                            declarations: [
                                MatHorizontalStepper,
                                MatVerticalStepper,
                                MatStep,
                                MatStepLabel,
                                MatStepper,
                                MatStepperNext,
                                MatStepperPrevious,
                                MatStepHeader,
                                MatStepperIcon,
                            ],
                            providers: [MAT_STEPPER_INTL_PROVIDER, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["ErrorStateMatcher"]],
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
            //# sourceMappingURL=stepper.js.map
            /***/ 
        })
    }]);
//# sourceMappingURL=default~pages-angular-material-components-mat-input-mat-input-module~pages-angular-material-componen~4d21505d-es2015.js.map
//# sourceMappingURL=default~pages-angular-material-components-mat-input-mat-input-module~pages-angular-material-componen~4d21505d-es5.js.map
//# sourceMappingURL=default~pages-angular-material-components-mat-input-mat-input-module~pages-angular-material-componen~4d21505d-es5.js.map