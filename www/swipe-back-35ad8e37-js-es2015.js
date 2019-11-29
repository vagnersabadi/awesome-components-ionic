(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["swipe-back-35ad8e37-js"],{

/***/ "./node_modules/@ionic/core/dist/esm/swipe-back-35ad8e37.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/swipe-back-35ad8e37.js ***!
  \******************************************************************/
/*! exports provided: createSwipeBackGesture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSwipeBackGesture", function() { return createSwipeBackGesture; });
/* harmony import */ var _index_624eea58_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-624eea58.js */ "./node_modules/@ionic/core/dist/esm/index-624eea58.js");


const createSwipeBackGesture = (el, canStartHandler, onStartHandler, onMoveHandler, onEndHandler) => {
    const win = el.ownerDocument.defaultView;
    const canStart = (detail) => {
        return detail.startX <= 50 && canStartHandler();
    };
    const onMove = (detail) => {
        // set the transition animation's progress
        const delta = detail.deltaX;
        const stepValue = delta / win.innerWidth;
        onMoveHandler(stepValue);
    };
    const onEnd = (detail) => {
        // the swipe back gesture has ended
        const delta = detail.deltaX;
        const width = win.innerWidth;
        const stepValue = delta / width;
        const velocity = detail.velocityX;
        const z = width / 2.0;
        const shouldComplete = velocity >= 0 && (velocity > 0.2 || detail.deltaX > z);
        const missing = shouldComplete ? 1 - stepValue : stepValue;
        const missingDistance = missing * width;
        let realDur = 0;
        if (missingDistance > 5) {
            const dur = missingDistance / Math.abs(velocity);
            realDur = Math.min(dur, 540);
        }
        /**
         * TODO: stepValue can sometimes return a negative
         * value, but you can't have a negative time value
         * for the cubic bezier curve (at least with web animations)
         * Not sure if the negative step value is an error or not
         */
        onEndHandler(shouldComplete, (stepValue <= 0) ? 0.01 : stepValue, realDur);
    };
    return Object(_index_624eea58_js__WEBPACK_IMPORTED_MODULE_0__["createGesture"])({
        el,
        gestureName: 'goback-swipe',
        gesturePriority: 40,
        threshold: 10,
        canStart,
        onStart: onStartHandler,
        onMove,
        onEnd
    });
};




/***/ })

}]);
//# sourceMappingURL=swipe-back-35ad8e37-js-es2015.js.map