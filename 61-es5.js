var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[61], {
        /***/ "./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js": 
        /*!********************************************************************!*\
          !*** ./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js ***!
          \********************************************************************/
        /*! exports provided: ion_select, ion_select_option, ion_select_popover */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_select", function () { return Select; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_select_option", function () { return SelectOption; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_select_popover", function () { return SelectPopover; });
            /* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm/core-feeeff0d.js");
            /* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
            /* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "./node_modules/@ionic/core/dist/esm/helpers-46f4a262.js");
            /* harmony import */ var _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overlays-10640d86.js */ "./node_modules/@ionic/core/dist/esm/overlays-10640d86.js");
            /* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");
            /* harmony import */ var _watch_options_2af96011_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./watch-options-2af96011.js */ "./node_modules/@ionic/core/dist/esm/watch-options-2af96011.js");
            var Select = /** @class */ (function () {
                function class_1(hostRef) {
                    var _this = this;
                    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                    this.inputId = "ion-sel-" + selectIds++;
                    this.didInit = false;
                    this.isExpanded = false;
                    /**
                     * If `true`, the user cannot interact with the select.
                     */
                    this.disabled = false;
                    /**
                     * The text to display on the cancel button.
                     */
                    this.cancelText = 'Cancel';
                    /**
                     * The text to display on the ok button.
                     */
                    this.okText = 'OK';
                    /**
                     * The name of the control, which is submitted with the form data.
                     */
                    this.name = this.inputId;
                    /**
                     * If `true`, the select can accept multiple values.
                     */
                    this.multiple = false;
                    /**
                     * The interface the select should use: `action-sheet`, `popover` or `alert`.
                     */
                    this.interface = 'alert';
                    /**
                     * Any additional options that the `alert`, `action-sheet` or `popover` interface
                     * can take. See the [AlertController API docs](../../alert/AlertController/#create), the
                     * [ActionSheetController API docs](../../action-sheet/ActionSheetController/#create) and the
                     * [PopoverController API docs](../../popover/PopoverController/#create) for the
                     * create options for each interface.
                     */
                    this.interfaceOptions = {};
                    this.onClick = function (ev) {
                        _this.setFocus();
                        _this.open(ev);
                    };
                    this.onFocus = function () {
                        _this.ionFocus.emit();
                    };
                    this.onBlur = function () {
                        _this.ionBlur.emit();
                    };
                    this.ionChange = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionChange", 7);
                    this.ionCancel = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionCancel", 7);
                    this.ionFocus = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionFocus", 7);
                    this.ionBlur = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionBlur", 7);
                    this.ionStyle = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionStyle", 7);
                }
                class_1.prototype.disabledChanged = function () {
                    this.emitStyle();
                };
                class_1.prototype.valueChanged = function () {
                    this.updateOptions();
                    this.emitStyle();
                    if (this.didInit) {
                        this.ionChange.emit({
                            value: this.value,
                        });
                    }
                };
                class_1.prototype.connectedCallback = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var checked, checked;
                        var _this = this;
                        return __generator(this, function (_a) {
                            if (this.value === undefined) {
                                if (this.multiple) {
                                    checked = this.childOpts.filter(function (o) { return o.selected; });
                                    this.value = checked.map(function (o) { return getOptionValue(o); });
                                }
                                else {
                                    checked = this.childOpts.find(function (o) { return o.selected; });
                                    if (checked) {
                                        this.value = getOptionValue(checked);
                                    }
                                }
                            }
                            this.updateOptions();
                            this.updateOverlayOptions();
                            this.emitStyle();
                            this.mutationO = Object(_watch_options_2af96011_js__WEBPACK_IMPORTED_MODULE_5__["w"])(this.el, 'ion-select-option', function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    this.updateOptions();
                                    this.updateOverlayOptions();
                                    return [2 /*return*/];
                                });
                            }); });
                            return [2 /*return*/];
                        });
                    });
                };
                class_1.prototype.disconnectedCallback = function () {
                    if (this.mutationO) {
                        this.mutationO.disconnect();
                        this.mutationO = undefined;
                    }
                };
                class_1.prototype.componentDidLoad = function () {
                    this.didInit = true;
                };
                /**
                 * Open the select overlay. The overlay is either an alert, action sheet, or popover,
                 * depending on the `interface` property on the `ion-select`.
                 *
                 * @param event The user interface event that called the open.
                 */
                class_1.prototype.open = function (event) {
                    return __awaiter(this, void 0, void 0, function () {
                        var overlay, _a;
                        var _this = this;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    if (this.disabled || this.isExpanded) {
                                        return [2 /*return*/, undefined];
                                    }
                                    _a = this;
                                    return [4 /*yield*/, this.createOverlay(event)];
                                case 1:
                                    overlay = _a.overlay = _b.sent();
                                    this.isExpanded = true;
                                    overlay.onDidDismiss().then(function () {
                                        _this.overlay = undefined;
                                        _this.isExpanded = false;
                                        _this.setFocus();
                                    });
                                    return [4 /*yield*/, overlay.present()];
                                case 2:
                                    _b.sent();
                                    return [2 /*return*/, overlay];
                            }
                        });
                    });
                };
                class_1.prototype.createOverlay = function (ev) {
                    var selectInterface = this.interface;
                    if ((selectInterface === 'action-sheet' || selectInterface === 'popover') && this.multiple) {
                        console.warn("Select interface cannot be \"" + selectInterface + "\" with a multi-value select. Using the \"alert\" interface instead.");
                        selectInterface = 'alert';
                    }
                    if (selectInterface === 'popover' && !ev) {
                        console.warn('Select interface cannot be a "popover" without passing an event. Using the "alert" interface instead.');
                        selectInterface = 'alert';
                    }
                    if (selectInterface === 'popover') {
                        return this.openPopover(ev);
                    }
                    if (selectInterface === 'action-sheet') {
                        return this.openActionSheet();
                    }
                    return this.openAlert();
                };
                class_1.prototype.updateOverlayOptions = function () {
                    var overlay = this.overlay;
                    if (!overlay) {
                        return;
                    }
                    var childOpts = this.childOpts;
                    switch (this.interface) {
                        case 'action-sheet':
                            overlay.buttons = this.createActionSheetButtons(childOpts);
                            break;
                        case 'popover':
                            var popover = overlay.querySelector('ion-select-popover');
                            if (popover) {
                                popover.options = this.createPopoverOptions(childOpts);
                            }
                            break;
                        case 'alert':
                            var inputType = (this.multiple ? 'checkbox' : 'radio');
                            overlay.inputs = this.createAlertInputs(childOpts, inputType);
                            break;
                    }
                };
                class_1.prototype.createActionSheetButtons = function (data) {
                    var _this = this;
                    var actionSheetButtons = data.map(function (option) {
                        return {
                            role: (option.selected ? 'selected' : ''),
                            text: option.textContent,
                            handler: function () {
                                _this.value = getOptionValue(option);
                            }
                        };
                    });
                    // Add "cancel" button
                    actionSheetButtons.push({
                        text: this.cancelText,
                        role: 'cancel',
                        handler: function () {
                            _this.ionCancel.emit();
                        }
                    });
                    return actionSheetButtons;
                };
                class_1.prototype.createAlertInputs = function (data, inputType) {
                    return data.map(function (o) {
                        return {
                            type: inputType,
                            label: o.textContent,
                            value: getOptionValue(o),
                            checked: o.selected,
                            disabled: o.disabled
                        };
                    });
                };
                class_1.prototype.createPopoverOptions = function (data) {
                    var _this = this;
                    return data.map(function (o) {
                        var value = getOptionValue(o);
                        return {
                            text: o.textContent,
                            value: value,
                            checked: o.selected,
                            disabled: o.disabled,
                            handler: function () {
                                _this.value = value;
                                _this.close();
                            }
                        };
                    });
                };
                class_1.prototype.openPopover = function (ev) {
                    return __awaiter(this, void 0, void 0, function () {
                        var interfaceOptions, mode, popoverOpts;
                        return __generator(this, function (_a) {
                            interfaceOptions = this.interfaceOptions;
                            mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
                            popoverOpts = Object.assign(Object.assign({ mode: mode }, interfaceOptions), { component: 'ion-select-popover', cssClass: ['select-popover', interfaceOptions.cssClass], event: ev, componentProps: {
                                    header: interfaceOptions.header,
                                    subHeader: interfaceOptions.subHeader,
                                    message: interfaceOptions.message,
                                    value: this.value,
                                    options: this.createPopoverOptions(this.childOpts)
                                } });
                            return [2 /*return*/, _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__["c"].create(popoverOpts)];
                        });
                    });
                };
                class_1.prototype.openActionSheet = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var mode, interfaceOptions, actionSheetOpts;
                        return __generator(this, function (_a) {
                            mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
                            interfaceOptions = this.interfaceOptions;
                            actionSheetOpts = Object.assign(Object.assign({ mode: mode }, interfaceOptions), { buttons: this.createActionSheetButtons(this.childOpts), cssClass: ['select-action-sheet', interfaceOptions.cssClass] });
                            return [2 /*return*/, _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__["b"].create(actionSheetOpts)];
                        });
                    });
                };
                class_1.prototype.openAlert = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var label, labelText, interfaceOptions, inputType, mode, alertOpts;
                        var _this = this;
                        return __generator(this, function (_a) {
                            label = this.getLabel();
                            labelText = (label) ? label.textContent : null;
                            interfaceOptions = this.interfaceOptions;
                            inputType = (this.multiple ? 'checkbox' : 'radio');
                            mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
                            alertOpts = Object.assign(Object.assign({ mode: mode }, interfaceOptions), { header: interfaceOptions.header ? interfaceOptions.header : labelText, inputs: this.createAlertInputs(this.childOpts, inputType), buttons: [
                                    {
                                        text: this.cancelText,
                                        role: 'cancel',
                                        handler: function () {
                                            _this.ionCancel.emit();
                                        }
                                    },
                                    {
                                        text: this.okText,
                                        handler: function (selectedValues) {
                                            _this.value = selectedValues;
                                        }
                                    }
                                ], cssClass: ['select-alert', interfaceOptions.cssClass,
                                    (this.multiple ? 'multiple-select-alert' : 'single-select-alert')] });
                            return [2 /*return*/, _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__["a"].create(alertOpts)];
                        });
                    });
                };
                /**
                 * Close the select interface.
                 */
                class_1.prototype.close = function () {
                    // TODO check !this.overlay || !this.isFocus()
                    if (!this.overlay) {
                        return Promise.resolve(false);
                    }
                    return this.overlay.dismiss();
                };
                class_1.prototype.updateOptions = function () {
                    var e_1, _a;
                    // iterate all options, updating the selected prop
                    var canSelect = true;
                    var _b = this, value = _b.value, childOpts = _b.childOpts, compareWith = _b.compareWith, multiple = _b.multiple;
                    try {
                        for (var childOpts_1 = __values(childOpts), childOpts_1_1 = childOpts_1.next(); !childOpts_1_1.done; childOpts_1_1 = childOpts_1.next()) {
                            var selectOption = childOpts_1_1.value;
                            var optValue = getOptionValue(selectOption);
                            var selected = canSelect && isOptionSelected(value, optValue, compareWith);
                            selectOption.selected = selected;
                            // if current option is selected and select is single-option, we can't select
                            // any option more
                            if (selected && !multiple) {
                                canSelect = false;
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (childOpts_1_1 && !childOpts_1_1.done && (_a = childOpts_1.return)) _a.call(childOpts_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                };
                class_1.prototype.getLabel = function () {
                    return Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["f"])(this.el);
                };
                class_1.prototype.hasValue = function () {
                    return this.getText() !== '';
                };
                Object.defineProperty(class_1.prototype, "childOpts", {
                    get: function () {
                        return Array.from(this.el.querySelectorAll('ion-select-option'));
                    },
                    enumerable: true,
                    configurable: true
                });
                class_1.prototype.getText = function () {
                    var selectedText = this.selectedText;
                    if (selectedText != null && selectedText !== '') {
                        return selectedText;
                    }
                    return generateText(this.childOpts, this.value, this.compareWith);
                };
                class_1.prototype.setFocus = function () {
                    if (this.buttonEl) {
                        this.buttonEl.focus();
                    }
                };
                class_1.prototype.emitStyle = function () {
                    this.ionStyle.emit({
                        'interactive': true,
                        'select': true,
                        'has-placeholder': this.placeholder != null,
                        'has-value': this.hasValue(),
                        'interactive-disabled': this.disabled,
                        'select-disabled': this.disabled
                    });
                };
                class_1.prototype.render = function () {
                    var _a;
                    var _this = this;
                    var _b = this, placeholder = _b.placeholder, name = _b.name, disabled = _b.disabled, isExpanded = _b.isExpanded, value = _b.value, el = _b.el;
                    var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
                    var labelId = this.inputId + '-lbl';
                    var label = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["f"])(el);
                    if (label) {
                        label.id = labelId;
                    }
                    var addPlaceholderClass = false;
                    var selectText = this.getText();
                    if (selectText === '' && placeholder != null) {
                        selectText = placeholder;
                        addPlaceholderClass = true;
                    }
                    Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["a"])(true, el, name, parseValue(value), disabled);
                    var selectTextClasses = {
                        'select-text': true,
                        'select-placeholder': addPlaceholderClass
                    };
                    return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { onClick: this.onClick, role: "combobox", "aria-haspopup": "dialog", "aria-disabled": disabled ? 'true' : null, "aria-expanded": "" + isExpanded, "aria-labelledby": labelId, class: (_a = {},
                            _a[mode] = true,
                            _a['in-item'] = Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_4__["h"])('ion-item', el),
                            _a['select-disabled'] = disabled,
                            _a) }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: selectTextClasses }, selectText), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "select-icon", role: "presentation" }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "select-icon-inner" })), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { type: "button", onFocus: this.onFocus, onBlur: this.onBlur, disabled: disabled, ref: (function (btnEl) { return _this.buttonEl = btnEl; }) })));
                };
                Object.defineProperty(class_1.prototype, "el", {
                    get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_1, "watchers", {
                    get: function () {
                        return {
                            "disabled": ["disabledChanged"],
                            "placeholder": ["disabledChanged"],
                            "value": ["valueChanged"]
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_1, "style", {
                    get: function () { return ":host{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;font-family:var(--ion-font-family,inherit);overflow:hidden;z-index:2}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:currentColor;opacity:.33}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.select-icon{position:relative}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-3px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;opacity:.33;pointer-events:none}:host-context([dir=rtl]) .select-icon-inner,[dir=rtl] .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:0;--padding-bottom:11px;--padding-start:16px}.select-icon{width:19px;height:19px}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_1;
            }());
            var getOptionValue = function (el) {
                var value = el.value;
                return (value === undefined)
                    ? el.textContent || ''
                    : value;
            };
            var parseValue = function (value) {
                if (value == null) {
                    return undefined;
                }
                if (Array.isArray(value)) {
                    return value.join(',');
                }
                return value.toString();
            };
            var isOptionSelected = function (currentValue, compareValue, compareWith) {
                if (currentValue === undefined) {
                    return false;
                }
                if (Array.isArray(currentValue)) {
                    return currentValue.some(function (val) { return compareOptions(val, compareValue, compareWith); });
                }
                else {
                    return compareOptions(currentValue, compareValue, compareWith);
                }
            };
            var compareOptions = function (currentValue, compareValue, compareWith) {
                if (typeof compareWith === 'function') {
                    return compareWith(currentValue, compareValue);
                }
                else if (typeof compareWith === 'string') {
                    return currentValue[compareWith] === compareValue[compareWith];
                }
                else {
                    return currentValue === compareValue;
                }
            };
            var generateText = function (opts, value, compareWith) {
                if (value === undefined) {
                    return '';
                }
                if (Array.isArray(value)) {
                    return value
                        .map(function (v) { return textForValue(opts, v, compareWith); })
                        .filter(function (opt) { return opt !== null; })
                        .join(', ');
                }
                else {
                    return textForValue(opts, value, compareWith) || '';
                }
            };
            var textForValue = function (opts, value, compareWith) {
                var selectOpt = opts.find(function (opt) {
                    return compareOptions(getOptionValue(opt), value, compareWith);
                });
                return selectOpt
                    ? selectOpt.textContent
                    : null;
            };
            var selectIds = 0;
            var SelectOption = /** @class */ (function () {
                function class_2(hostRef) {
                    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                    this.inputId = "ion-selopt-" + selectOptionIds++;
                    /**
                     * If `true`, the user cannot interact with the select option.
                     */
                    this.disabled = false;
                    /**
                     * If `true`, the element is selected.
                     */
                    this.selected = false;
                }
                class_2.prototype.render = function () {
                    return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { role: "option", id: this.inputId, class: Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this) }));
                };
                Object.defineProperty(class_2.prototype, "el", {
                    get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_2, "style", {
                    get: function () { return ":host{display:none}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_2;
            }());
            var selectOptionIds = 0;
            var SelectPopover = /** @class */ (function () {
                function class_3(hostRef) {
                    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                    /** Array of options for the popover */
                    this.options = [];
                }
                class_3.prototype.onSelect = function (ev) {
                    var option = this.options.find(function (o) { return o.value === ev.target.value; });
                    if (option) {
                        Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__["s"])(option.handler);
                    }
                };
                class_3.prototype.render = function () {
                    return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this) }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-list", null, this.header !== undefined && Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-list-header", null, this.header), (this.subHeader !== undefined || this.message !== undefined) &&
                        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-item", null, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-label", { class: "ion-text-wrap" }, this.subHeader !== undefined && Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h3", null, this.subHeader), this.message !== undefined && Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, this.message))), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-radio-group", null, this.options.map(function (option) { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-item", null, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-label", null, option.text), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-radio", { checked: option.checked, value: option.value, disabled: option.disabled })); })))));
                };
                Object.defineProperty(class_3, "style", {
                    get: function () { return ".sc-ion-select-popover-h ion-list.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:-1px;margin-bottom:-1px}.sc-ion-select-popover-h ion-label.sc-ion-select-popover, .sc-ion-select-popover-h ion-list-header.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_3;
            }());
            /***/ 
        })
    }]);
//# sourceMappingURL=61-es2015.js.map
//# sourceMappingURL=61-es5.js.map
//# sourceMappingURL=61-es5.js.map