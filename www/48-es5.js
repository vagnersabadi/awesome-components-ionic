(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-radio_2-ios.entry.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-radio_2-ios.entry.js ***!
  \************************************************************************/
/*! exports provided: ion_radio, ion_radio_group */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_radio", function() { return Radio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_radio_group", function() { return RadioGroup; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-ca0488fc.js */ "./node_modules/@ionic/core/dist/esm-es5/core-ca0488fc.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm-es5/config-3c7f3790.js");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "./node_modules/@ionic/core/dist/esm-es5/helpers-46f4a262.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js");
/* harmony import */ var _watch_options_2af96011_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./watch-options-2af96011.js */ "./node_modules/@ionic/core/dist/esm-es5/watch-options-2af96011.js");






var Radio = /** @class */ (function () {
    function Radio(hostRef) {
        var _this = this;
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
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
        this.ionStyle = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this, "ionStyle", 7);
        this.ionSelect = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this, "ionSelect", 7);
        this.ionDeselect = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this, "ionDeselect", 7);
        this.ionFocus = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this, "ionFocus", 7);
        this.ionBlur = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this, "ionBlur", 7);
    }
    Radio.prototype.colorChanged = function () {
        this.emitStyle();
    };
    Radio.prototype.checkedChanged = function (isChecked) {
        if (isChecked) {
            this.ionSelect.emit({
                checked: true,
                value: this.value
            });
        }
        this.emitStyle();
    };
    Radio.prototype.disabledChanged = function () {
        this.emitStyle();
    };
    Radio.prototype.componentWillLoad = function () {
        if (this.value === undefined) {
            this.value = this.inputId;
        }
        this.emitStyle();
    };
    Radio.prototype.emitStyle = function () {
        this.ionStyle.emit({
            'radio-checked': this.checked,
            'interactive-disabled': this.disabled,
        });
    };
    Radio.prototype.render = function () {
        var _a;
        var _b = this, inputId = _b.inputId, disabled = _b.disabled, checked = _b.checked, color = _b.color, el = _b.el;
        var mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this);
        var labelId = inputId + '-lbl';
        var label = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__["f"])(el);
        if (label) {
            label.id = labelId;
        }
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__["H"], { onClick: this.onClick, role: "radio", "aria-disabled": disabled ? 'true' : null, "aria-checked": "" + checked, "aria-labelledby": labelId, class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_4__["c"])(color)), (_a = {}, _a[mode] = true, _a['in-item'] = Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_4__["h"])('ion-item', el), _a['interactive'] = true, _a['radio-checked'] = checked, _a['radio-disabled'] = disabled, _a)) }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "radio-icon" }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "radio-inner" })), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__["h"])("button", { type: "button", onFocus: this.onFocus, onBlur: this.onBlur, disabled: disabled })));
    };
    Object.defineProperty(Radio.prototype, "el", {
        get: function () { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Radio, "watchers", {
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
    Object.defineProperty(Radio, "style", {
        get: function () { return ":host{display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:layout size style}.radio-icon,button{width:100%;height:100%}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--color-checked:var(--ion-color-primary,#3880ff);width:15px;height:24px}:host(.ion-color.radio-checked) .radio-inner{border-color:var(--ion-color-base)}.item-radio.item-ios ion-label{margin-left:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.item-radio.item-ios ion-label{margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}.radio-inner{width:33%;height:50%}:host(.radio-checked) .radio-inner{-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--color-checked)}:host(.radio-disabled){opacity:.3}:host(.ion-focused) .radio-icon:after{border-radius:50%;left:-9px;top:-8px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint,#4c8dff);content:\"\";opacity:.2}:host-context([dir=rtl]).ion-focused .radio-icon:after,:host-context([dir=rtl]):host(.ion-focused) .radio-icon:after{left:unset;right:unset;right:-9px}:host(.in-item){margin-left:8px;margin-right:11px;margin-top:8px;margin-bottom:8px;display:block;position:static}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:11px;margin-inline-end:11px}}:host(.in-item[slot=start]){margin-left:3px;margin-right:21px;margin-top:8px;margin-bottom:8px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:3px;margin-inline-start:3px;-webkit-margin-end:21px;margin-inline-end:21px}}"; },
        enumerable: true,
        configurable: true
    });
    return Radio;
}());
var radioButtonIds = 0;
var RadioGroup = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
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
        this.ionChange = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this, "ionChange", 7);
    }
    class_1.prototype.valueChanged = function (value) {
        this.updateRadios();
        this.ionChange.emit({ value: value });
    };
    class_1.prototype.connectedCallback = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var el, header, label, radio;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
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
                        radio = Object(_watch_options_2af96011_js__WEBPACK_IMPORTED_MODULE_5__["f"])(el, 'ion-radio');
                        if (!(radio !== undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, radio.componentOnReady()];
                    case 1:
                        _a.sent();
                        if (this.value === undefined) {
                            this.value = radio.value;
                        }
                        _a.label = 2;
                    case 2:
                        this.mutationO = Object(_watch_options_2af96011_js__WEBPACK_IMPORTED_MODULE_5__["w"])(el, 'ion-radio', function (newOption) {
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
    class_1.prototype.disconnectedCallback = function () {
        if (this.mutationO) {
            this.mutationO.disconnect();
            this.mutationO = undefined;
        }
    };
    class_1.prototype.updateRadios = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var radios, value, hasChecked, _i, radios_1, radio;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRadios()];
                    case 1:
                        radios = _a.sent();
                        value = this.value;
                        hasChecked = false;
                        // Walk the DOM in reverse order, since the last selected one wins!
                        for (_i = 0, radios_1 = radios; _i < radios_1.length; _i++) {
                            radio = radios_1[_i];
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
                        // Reset value if
                        if (!hasChecked) {
                            this.value = undefined;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.getRadios = function () {
        return Promise.all(Array
            .from(this.el.querySelectorAll('ion-radio'))
            .map(function (r) { return r.componentOnReady(); }));
    };
    class_1.prototype.render = function () {
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__["H"], { role: "radiogroup", "aria-labelledby": this.labelId, onIonSelect: this.onSelect, onIonDeselect: this.allowEmptySelection ? this.onDeselect : undefined, class: Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this) }));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "value": ["valueChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
var radioGroupIds = 0;



/***/ })

}]);
//# sourceMappingURL=48-es5.js.map