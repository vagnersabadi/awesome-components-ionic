(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-action-sheet-controller_8.entry.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-action-sheet-controller_8.entry.js ***!
  \**************************************************************************************/
/*! exports provided: ion_action_sheet_controller, ion_alert_controller, ion_anchor, ion_loading_controller, ion_modal_controller, ion_picker_controller, ion_popover_controller, ion_toast_controller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_action_sheet_controller", function() { return ActionSheetController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_alert_controller", function() { return AlertController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_anchor", function() { return Anchor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_loading_controller", function() { return LoadingController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_modal_controller", function() { return ModalController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_picker_controller", function() { return PickerController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_popover_controller", function() { return PopoverController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_toast_controller", function() { return ToastController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-ca0488fc.js */ "./node_modules/@ionic/core/dist/esm-es5/core-ca0488fc.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm-es5/config-3c7f3790.js");
/* harmony import */ var _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overlays-10640d86.js */ "./node_modules/@ionic/core/dist/esm-es5/overlays-10640d86.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js");





var ActionSheetController = /** @class */ (function () {
    function class_1(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
    }
    /**
     * Create an action sheet overlay with action sheet options.
     *
     * @param options The options to use to create the action sheet.
     */
    class_1.prototype.create = function (options) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__["h"])('ion-action-sheet', options);
    };
    /**
     * Dismiss the open action sheet overlay.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the action sheet.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the action sheet.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     * @param id The id of the action sheet to dismiss. If an id is not provided, it will dismiss the most recently opened action sheet.
     */
    class_1.prototype.dismiss = function (data, role, id) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__["j"])(document, data, role, 'ion-action-sheet', id);
    };
    /**
     * Get the most recently opened action sheet overlay.
     */
    class_1.prototype.getTop = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__["k"])(document, 'ion-action-sheet')];
            });
        });
    };
    return class_1;
}());
var AlertController = /** @class */ (function () {
    function class_2(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
    }
    /**
     * Create an alert overlay with alert options.
     *
     * @param options The options to use to create the alert.
     */
    class_2.prototype.create = function (options) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__["h"])('ion-alert', options);
    };
    /**
     * Dismiss the open alert overlay.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the alert.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the alert.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     * @param id The id of the alert to dismiss. If an id is not provided, it will dismiss the most recently opened alert.
     */
    class_2.prototype.dismiss = function (data, role, id) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__["j"])(document, data, role, 'ion-alert', id);
    };
    /**
     * Get the most recently opened alert overlay.
     */
    class_2.prototype.getTop = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__["k"])(document, 'ion-alert')];
            });
        });
    };
    return class_2;
}());
var Anchor = /** @class */ (function () {
    function Anchor(hostRef) {
        var _this = this;
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        /**
         * When using a router, it specifies the transition direction when navigating to
         * another page using `href`.
         */
        this.routerDirection = 'forward';
        this.onClick = function (ev) {
            Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_4__["o"])(_this.href, ev, _this.routerDirection);
        };
    }
    Anchor.prototype.componentDidLoad = function () {
        console.warn('[DEPRECATED][ion-anchor] The <ion-anchor> component has been deprecated. Please use an <ion-router-link> if you are using a vanilla JS or Stencil project or an <a> with the Angular router.');
    };
    Anchor.prototype.render = function () {
        var _a;
        var mode = Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this);
        var attrs = {
            href: this.href,
            rel: this.rel
        };
        return (Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__["H"], { onClick: this.onClick, class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_4__["c"])(this.color)), (_a = {}, _a[mode] = true, _a['ion-activatable'] = true, _a)) }, Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__["h"])("a", Object.assign({}, attrs), Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", null))));
    };
    Object.defineProperty(Anchor, "style", {
        get: function () { return ":host{--background:transparent;--color:var(--ion-color-primary,#3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"; },
        enumerable: true,
        configurable: true
    });
    return Anchor;
}());
var LoadingController = /** @class */ (function () {
    function class_3(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
    }
    /**
     * Create a loading overlay with loading options.
     *
     * @param options The options to use to create the loading.
     */
    class_3.prototype.create = function (options) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__["h"])('ion-loading', options);
    };
    /**
     * Dismiss the open loading overlay.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the loading.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the loading.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     * @param id The id of the loading to dismiss. If an id is not provided, it will dismiss the most recently opened loading.
     */
    class_3.prototype.dismiss = function (data, role, id) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__["j"])(document, data, role, 'ion-loading', id);
    };
    /**
     * Get the most recently opened loading overlay.
     */
    class_3.prototype.getTop = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__["k"])(document, 'ion-loading')];
            });
        });
    };
    return class_3;
}());
var ModalController = /** @class */ (function () {
    function class_4(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
    }
    /**
     * Create a modal overlay with modal options.
     *
     * @param options The options to use to create the modal.
     */
    class_4.prototype.create = function (options) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__["h"])('ion-modal', options);
    };
    /**
     * Dismiss the open modal overlay.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the modal.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the modal.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     * @param id The id of the modal to dismiss. If an id is not provided, it will dismiss the most recently opened modal.
     */
    class_4.prototype.dismiss = function (data, role, id) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__["j"])(document, data, role, 'ion-modal', id);
    };
    /**
     * Get the most recently opened modal overlay.
     */
    class_4.prototype.getTop = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__["k"])(document, 'ion-modal')];
            });
        });
    };
    return class_4;
}());
var PickerController = /** @class */ (function () {
    function class_5(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
    }
    /**
     * Create a picker overlay with picker options.
     *
     * @param options The options to use to create the picker.
     */
    class_5.prototype.create = function (options) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__["h"])('ion-picker', options);
    };
    /**
     * Dismiss the open picker overlay.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the picker.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the picker.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     * @param id The id of the picker to dismiss. If an id is not provided, it will dismiss the most recently opened picker.
     */
    class_5.prototype.dismiss = function (data, role, id) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__["j"])(document, data, role, 'ion-picker', id);
    };
    /**
     * Get the most recently opened picker overlay.
     */
    class_5.prototype.getTop = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__["k"])(document, 'ion-picker')];
            });
        });
    };
    return class_5;
}());
var PopoverController = /** @class */ (function () {
    function class_6(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
    }
    /**
     * Create a popover overlay with popover options.
     *
     * @param options The options to use to create the popover.
     */
    class_6.prototype.create = function (options) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__["h"])('ion-popover', options);
    };
    /**
     * Dismiss the open popover overlay.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the popover.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the popover.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     * @param id The id of the popover to dismiss. If an id is not provided, it will dismiss the most recently opened popover.
     */
    class_6.prototype.dismiss = function (data, role, id) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__["j"])(document, data, role, 'ion-popover', id);
    };
    /**
     * Get the most recently opened popover overlay.
     */
    class_6.prototype.getTop = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__["k"])(document, 'ion-popover')];
            });
        });
    };
    return class_6;
}());
var ToastController = /** @class */ (function () {
    function class_7(hostRef) {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
    }
    /**
     * Create a toast overlay with toast options.
     *
     * @param options The options to use to create the toast.
     */
    class_7.prototype.create = function (options) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__["h"])('ion-toast', options);
    };
    /**
     * Dismiss the open toast overlay.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the toast. For example, 'cancel' or 'backdrop'.
     * @param id The id of the toast to dismiss. If an id is not provided, it will dismiss the most recently opened toast.
     */
    class_7.prototype.dismiss = function (data, role, id) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__["j"])(document, data, role, 'ion-toast', id);
    };
    /**
     * Get the most recently opened toast overlay.
     */
    class_7.prototype.getTop = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__["k"])(document, 'ion-toast')];
            });
        });
    };
    return class_7;
}());



/***/ })

}]);
//# sourceMappingURL=2-es5.js.map