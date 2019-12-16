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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46], {
        /***/ "./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js": 
        /*!********************************************************************!*\
          !*** ./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js ***!
          \********************************************************************/
        /*! exports provided: ion_radio, ion_radio_group */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_radio", function () { return Radio; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_radio_group", function () { return RadioGroup; });
            /* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm/core-feeeff0d.js");
            /* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
            /* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "./node_modules/@ionic/core/dist/esm/helpers-46f4a262.js");
            /* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");
            /* harmony import */ var _watch_options_2af96011_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./watch-options-2af96011.js */ "./node_modules/@ionic/core/dist/esm/watch-options-2af96011.js");
            var Radio = /** @class */ (function () {
                function class_1(hostRef) {
                    var _this = this;
                    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                    this.inputId = "ion-rb-" + radioButtonIds++;
                    /**
                     * The name of the control, which is submitted with the form data.
                     */
                    this.name = this.inputId;
                    /**
                     * If `true`, the user cannot interact with the radio.
                     */
                    this.disabled = false;
                    /**
                     * If `true`, the radio is selected.
                     */
                    this.checked = false;
                    this.onFocus = function () {
                        _this.ionFocus.emit();
                    };
                    this.onBlur = function () {
                        _this.ionBlur.emit();
                    };
                    this.onClick = function () {
                        if (_this.checked) {
                            _this.ionDeselect.emit();
                        }
                        else {
                            _this.checked = true;
                        }
                    };
                    this.ionStyle = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionStyle", 7);
                    this.ionSelect = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionSelect", 7);
                    this.ionDeselect = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionDeselect", 7);
                    this.ionFocus = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionFocus", 7);
                    this.ionBlur = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionBlur", 7);
                }
                class_1.prototype.colorChanged = function () {
                    this.emitStyle();
                };
                class_1.prototype.checkedChanged = function (isChecked) {
                    if (isChecked) {
                        this.ionSelect.emit({
                            checked: true,
                            value: this.value
                        });
                    }
                    this.emitStyle();
                };
                class_1.prototype.disabledChanged = function () {
                    this.emitStyle();
                };
                class_1.prototype.componentWillLoad = function () {
                    if (this.value === undefined) {
                        this.value = this.inputId;
                    }
                    this.emitStyle();
                };
                class_1.prototype.emitStyle = function () {
                    this.ionStyle.emit({
                        'radio-checked': this.checked,
                        'interactive-disabled': this.disabled,
                    });
                };
                class_1.prototype.render = function () {
                    var _a;
                    var _b = this, inputId = _b.inputId, disabled = _b.disabled, checked = _b.checked, color = _b.color, el = _b.el;
                    var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
                    var labelId = inputId + '-lbl';
                    var label = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["f"])(el);
                    if (label) {
                        label.id = labelId;
                    }
                    return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { onClick: this.onClick, role: "radio", "aria-disabled": disabled ? 'true' : null, "aria-checked": "" + checked, "aria-labelledby": labelId, class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__["c"])(color)), (_a = {}, _a[mode] = true, _a['in-item'] = Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__["h"])('ion-item', el), _a['interactive'] = true, _a['radio-checked'] = checked, _a['radio-disabled'] = disabled, _a)) }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "radio-icon" }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "radio-inner" })), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { type: "button", onFocus: this.onFocus, onBlur: this.onBlur, disabled: disabled })));
                };
                Object.defineProperty(class_1.prototype, "el", {
                    get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_1, "watchers", {
                    get: function () {
                        return {
                            "color": ["colorChanged"],
                            "checked": ["checkedChanged"],
                            "disabled": ["disabledChanged"]
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_1, "style", {
                    get: function () { return ":host{display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:layout size style}.radio-icon,button{width:100%;height:100%}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--color-checked:var(--ion-color-primary,#3880ff);width:15px;height:24px}:host(.ion-color.radio-checked) .radio-inner{border-color:var(--ion-color-base)}.item-radio.item-ios ion-label{margin-left:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.item-radio.item-ios ion-label{margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}.radio-inner{width:33%;height:50%}:host(.radio-checked) .radio-inner{-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--color-checked)}:host(.radio-disabled){opacity:.3}:host(.ion-focused) .radio-icon:after{border-radius:50%;left:-9px;top:-8px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint,#4c8dff);content:\"\";opacity:.2}:host-context([dir=rtl]).ion-focused .radio-icon:after,:host-context([dir=rtl]):host(.ion-focused) .radio-icon:after{left:unset;right:unset;right:-9px}:host(.in-item){margin-left:8px;margin-right:11px;margin-top:8px;margin-bottom:8px;display:block;position:static}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:11px;margin-inline-end:11px}}:host(.in-item[slot=start]){margin-left:3px;margin-right:21px;margin-top:8px;margin-bottom:8px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:3px;margin-inline-start:3px;-webkit-margin-end:21px;margin-inline-end:21px}}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_1;
            }());
            var radioButtonIds = 0;
            var RadioGroup = /** @class */ (function () {
                function class_2(hostRef) {
                    var _this = this;
                    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                    this.inputId = "ion-rg-" + radioGroupIds++;
                    this.labelId = this.inputId + "-lbl";
                    /**
                     * If `true`, the radios can be deselected.
                     */
                    this.allowEmptySelection = false;
                    /**
                     * The name of the control, which is submitted with the form data.
                     */
                    this.name = this.inputId;
                    this.onSelect = function (ev) {
                        var selectedRadio = ev.target;
                        if (selectedRadio) {
                            _this.value = selectedRadio.value;
                        }
                    };
                    this.onDeselect = function (ev) {
                        var selectedRadio = ev.target;
                        if (selectedRadio) {
                            selectedRadio.checked = false;
                            _this.value = undefined;
                        }
                    };
                    this.ionChange = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionChange", 7);
                }
                class_2.prototype.valueChanged = function (value) {
                    this.updateRadios();
                    this.ionChange.emit({ value: value });
                };
                class_2.prototype.connectedCallback = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var el, header, label, radio;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    el = this.el;
                                    header = el.querySelector('ion-list-header') || el.querySelector('ion-item-divider');
                                    if (header) {
                                        label = header.querySelector('ion-label');
                                        if (label) {
                                            this.labelId = label.id = this.name + '-lbl';
                                        }
                                    }
                                    if (!(this.value === undefined)) return [3 /*break*/, 2];
                                    radio = Object(_watch_options_2af96011_js__WEBPACK_IMPORTED_MODULE_4__["f"])(el, 'ion-radio');
                                    if (!(radio !== undefined)) return [3 /*break*/, 2];
                                    return [4 /*yield*/, radio.componentOnReady()];
                                case 1:
                                    _a.sent();
                                    if (this.value === undefined) {
                                        this.value = radio.value;
                                    }
                                    _a.label = 2;
                                case 2:
                                    this.mutationO = Object(_watch_options_2af96011_js__WEBPACK_IMPORTED_MODULE_4__["w"])(el, 'ion-radio', function (newOption) {
                                        if (newOption !== undefined) {
                                            newOption.componentOnReady().then(function () {
                                                _this.value = newOption.value;
                                            });
                                        }
                                        else {
                                            _this.updateRadios();
                                        }
                                    });
                                    this.updateRadios();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                class_2.prototype.disconnectedCallback = function () {
                    if (this.mutationO) {
                        this.mutationO.disconnect();
                        this.mutationO = undefined;
                    }
                };
                class_2.prototype.updateRadios = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var radios, value, hasChecked, radios_1, radios_1_1, radio;
                        var e_1, _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0: return [4 /*yield*/, this.getRadios()];
                                case 1:
                                    radios = _b.sent();
                                    value = this.value;
                                    hasChecked = false;
                                    try {
                                        // Walk the DOM in reverse order, since the last selected one wins!
                                        for (radios_1 = __values(radios), radios_1_1 = radios_1.next(); !radios_1_1.done; radios_1_1 = radios_1.next()) {
                                            radio = radios_1_1.value;
                                            if (!hasChecked && radio.value === value) {
                                                // correct value for this radio
                                                // but this radio isn't checked yet
                                                // and we haven't found a checked yet
                                                hasChecked = true;
                                                radio.checked = true;
                                            }
                                            else {
                                                // this radio doesn't have the correct value
                                                // or the radio group has been already checked
                                                radio.checked = false;
                                            }
                                        }
                                    }
                                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                                    finally {
                                        try {
                                            if (radios_1_1 && !radios_1_1.done && (_a = radios_1.return)) _a.call(radios_1);
                                        }
                                        finally { if (e_1) throw e_1.error; }
                                    }
                                    // Reset value if
                                    if (!hasChecked) {
                                        this.value = undefined;
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                class_2.prototype.getRadios = function () {
                    return Promise.all(Array
                        .from(this.el.querySelectorAll('ion-radio'))
                        .map(function (r) { return r.componentOnReady(); }));
                };
                class_2.prototype.render = function () {
                    return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { role: "radiogroup", "aria-labelledby": this.labelId, onIonSelect: this.onSelect, onIonDeselect: this.allowEmptySelection ? this.onDeselect : undefined, class: Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this) }));
                };
                Object.defineProperty(class_2.prototype, "el", {
                    get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_2, "watchers", {
                    get: function () {
                        return {
                            "value": ["valueChanged"]
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                return class_2;
            }());
            var radioGroupIds = 0;
            /***/ 
        })
    }]);
//# sourceMappingURL=46-es2015.js.map
//# sourceMappingURL=46-es5.js.map
//# sourceMappingURL=46-es5.js.map