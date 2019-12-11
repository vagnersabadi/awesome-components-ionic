(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hardware-back-button-5afe3cb0-js"],{

/***/ "./node_modules/@ionic/core/dist/esm/hardware-back-button-5afe3cb0.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/hardware-back-button-5afe3cb0.js ***!
  \****************************************************************************/
/*! exports provided: startHardwareBackButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startHardwareBackButton", function() { return startHardwareBackButton; });
const startHardwareBackButton = () => {
    const doc = document;
    let busy = false;
    doc.addEventListener('backbutton', () => {
        if (busy) {
            return;
        }
        const handlers = [];
        const ev = new CustomEvent('ionBackButton', {
            bubbles: false,
            detail: {
                register(priority, handler) {
                    handlers.push({ priority, handler });
                }
            }
        });
        doc.dispatchEvent(ev);
        if (handlers.length > 0) {
            let selectedPriority = Number.MIN_SAFE_INTEGER;
            let selectedHandler;
            handlers.forEach(({ priority, handler }) => {
                if (priority >= selectedPriority) {
                    selectedPriority = priority;
                    selectedHandler = handler;
                }
            });
            busy = true;
            executeAction(selectedHandler).then(() => busy = false);
        }
    });
};
const executeAction = async (handler) => {
    try {
        if (handler) {
            const result = handler();
            if (result != null) {
                await result;
            }
        }
    }
    catch (e) {
        console.error(e);
    }
};




/***/ })

}]);
//# sourceMappingURL=hardware-back-button-5afe3cb0-js-es2015.js.map