(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/@ionic/core/dist/esm/ion-action-sheet-controller_8.entry.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-action-sheet-controller_8.entry.js ***!
  \**********************************************************************************/
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
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm/core-feeeff0d.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
/* harmony import */ var _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./overlays-10640d86.js */ "./node_modules/@ionic/core/dist/esm/overlays-10640d86.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");





const ActionSheetController = class {
    constructor(hostRef) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    /**
     * Create an action sheet overlay with action sheet options.
     *
     * @param options The options to use to create the action sheet.
     */
    create(options) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["h"])('ion-action-sheet', options);
    }
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
    dismiss(data, role, id) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["j"])(document, data, role, 'ion-action-sheet', id);
    }
    /**
     * Get the most recently opened action sheet overlay.
     */
    async getTop() {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["k"])(document, 'ion-action-sheet');
    }
};

const AlertController = class {
    constructor(hostRef) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    /**
     * Create an alert overlay with alert options.
     *
     * @param options The options to use to create the alert.
     */
    create(options) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["h"])('ion-alert', options);
    }
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
    dismiss(data, role, id) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["j"])(document, data, role, 'ion-alert', id);
    }
    /**
     * Get the most recently opened alert overlay.
     */
    async getTop() {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["k"])(document, 'ion-alert');
    }
};

const Anchor = class {
    constructor(hostRef) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * When using a router, it specifies the transition direction when navigating to
         * another page using `href`.
         */
        this.routerDirection = 'forward';
        this.onClick = (ev) => {
            Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__["o"])(this.href, ev, this.routerDirection);
        };
    }
    componentDidLoad() {
        console.warn('[DEPRECATED][ion-anchor] The <ion-anchor> component has been deprecated. Please use an <ion-router-link> if you are using a vanilla JS or Stencil project or an <a> with the Angular router.');
    }
    render() {
        const mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
        const attrs = {
            href: this.href,
            rel: this.rel
        };
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { onClick: this.onClick, class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this.color)), { [mode]: true, 'ion-activatable': true }) }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", Object.assign({}, attrs), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))));
    }
    static get style() { return ":host{--background:transparent;--color:var(--ion-color-primary,#3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"; }
};

const LoadingController = class {
    constructor(hostRef) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    /**
     * Create a loading overlay with loading options.
     *
     * @param options The options to use to create the loading.
     */
    create(options) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["h"])('ion-loading', options);
    }
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
    dismiss(data, role, id) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["j"])(document, data, role, 'ion-loading', id);
    }
    /**
     * Get the most recently opened loading overlay.
     */
    async getTop() {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["k"])(document, 'ion-loading');
    }
};

const ModalController = class {
    constructor(hostRef) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    /**
     * Create a modal overlay with modal options.
     *
     * @param options The options to use to create the modal.
     */
    create(options) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["h"])('ion-modal', options);
    }
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
    dismiss(data, role, id) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["j"])(document, data, role, 'ion-modal', id);
    }
    /**
     * Get the most recently opened modal overlay.
     */
    async getTop() {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["k"])(document, 'ion-modal');
    }
};

const PickerController = class {
    constructor(hostRef) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    /**
     * Create a picker overlay with picker options.
     *
     * @param options The options to use to create the picker.
     */
    create(options) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["h"])('ion-picker', options);
    }
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
    dismiss(data, role, id) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["j"])(document, data, role, 'ion-picker', id);
    }
    /**
     * Get the most recently opened picker overlay.
     */
    async getTop() {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["k"])(document, 'ion-picker');
    }
};

const PopoverController = class {
    constructor(hostRef) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    /**
     * Create a popover overlay with popover options.
     *
     * @param options The options to use to create the popover.
     */
    create(options) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["h"])('ion-popover', options);
    }
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
    dismiss(data, role, id) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["j"])(document, data, role, 'ion-popover', id);
    }
    /**
     * Get the most recently opened popover overlay.
     */
    async getTop() {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["k"])(document, 'ion-popover');
    }
};

const ToastController = class {
    constructor(hostRef) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    /**
     * Create a toast overlay with toast options.
     *
     * @param options The options to use to create the toast.
     */
    create(options) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["h"])('ion-toast', options);
    }
    /**
     * Dismiss the open toast overlay.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the toast. For example, 'cancel' or 'backdrop'.
     * @param id The id of the toast to dismiss. If an id is not provided, it will dismiss the most recently opened toast.
     */
    dismiss(data, role, id) {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["j"])(document, data, role, 'ion-toast', id);
    }
    /**
     * Get the most recently opened toast overlay.
     */
    async getTop() {
        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["k"])(document, 'ion-toast');
    }
};




/***/ })

}]);
//# sourceMappingURL=0-es2015.js.map