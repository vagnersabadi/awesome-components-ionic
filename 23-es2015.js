(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js ***!
  \*********************************************************************/
/*! exports provided: ion_progress_bar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_progress_bar", function() { return ProgressBar; });
/* harmony import */ var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-e806d1f6.js */ "./node_modules/@ionic/core/dist/esm/index-e806d1f6.js");
/* harmony import */ var _ionic_global_9d5c8ee3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ionic-global-9d5c8ee3.js */ "./node_modules/@ionic/core/dist/esm/ionic-global-9d5c8ee3.js");
/* harmony import */ var _helpers_002e4980_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-002e4980.js */ "./node_modules/@ionic/core/dist/esm/helpers-002e4980.js");
/* harmony import */ var _theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-ff3fc52f.js */ "./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js");





const progressBarIosCss = ":host{--background:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.2);--progress-background:var(--ion-color-primary, #3880ff);--buffer-background:var(--background);display:block;position:relative;width:100%;contain:strict;direction:ltr;overflow:hidden}:host(.ion-color){--progress-background:var(--ion-color-base);--buffer-background:rgba(var(--ion-color-base-rgb), 0.2)}:host(.progress-bar-indeterminate){background:var(--buffer-background)}.progress,.progress-indeterminate,.indeterminate-bar-primary,.indeterminate-bar-secondary,.progress-buffer-bar,.progress-buffer-bar:before,.buffer-circles{left:0;right:0;top:0;bottom:0;position:absolute;width:100%;height:100%}.progress,.progress-buffer-bar{transform-origin:left top;transition:transform 150ms linear}.progress,.progress-indeterminate{background:var(--progress-background);z-index:2}.progress-buffer-bar{background:#fff;z-index:1}.progress-buffer-bar:before{background:var(--buffer-background);content:\"\"}.indeterminate-bar-primary{top:0;right:0;bottom:0;left:-145.166611%;animation:primary-indeterminate-translate 2s infinite linear}.indeterminate-bar-primary .progress-indeterminate{animation:primary-indeterminate-scale 2s infinite linear;animation-play-state:inherit}.indeterminate-bar-secondary{top:0;right:0;bottom:0;left:-54.888891%;animation:secondary-indeterminate-translate 2s infinite linear}.indeterminate-bar-secondary .progress-indeterminate{animation:secondary-indeterminate-scale 2s infinite linear;animation-play-state:inherit}.buffer-circles{background:radial-gradient(ellipse at center, var(--buffer-background) 0%, var(--buffer-background) 30%, transparent 30%) repeat-x 5px center;background-size:10px 10px;z-index:0;animation:buffering 450ms infinite linear}:host(.progress-bar-reversed) .progress,:host(.progress-bar-reversed) .progress-buffer-bar{transform-origin:right top}:host(.progress-bar-reversed) .buffer-circles,:host(.progress-bar-reversed) .indeterminate-bar-primary,:host(.progress-bar-reversed) .indeterminate-bar-secondary,:host(.progress-bar-reversed) .progress-indeterminate{animation-direction:reverse}:host(.progress-paused) .indeterminate-bar-secondary,:host(.progress-paused) .indeterminate-bar-primary,:host(.progress-paused) .buffer-circles{animation-play-state:paused}@keyframes primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes buffering{to{transform:translateX(-10px)}}:host{height:3px}";

const progressBarMdCss = ":host{--background:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.2);--progress-background:var(--ion-color-primary, #3880ff);--buffer-background:var(--background);display:block;position:relative;width:100%;contain:strict;direction:ltr;overflow:hidden}:host(.ion-color){--progress-background:var(--ion-color-base);--buffer-background:rgba(var(--ion-color-base-rgb), 0.2)}:host(.progress-bar-indeterminate){background:var(--buffer-background)}.progress,.progress-indeterminate,.indeterminate-bar-primary,.indeterminate-bar-secondary,.progress-buffer-bar,.progress-buffer-bar:before,.buffer-circles{left:0;right:0;top:0;bottom:0;position:absolute;width:100%;height:100%}.progress,.progress-buffer-bar{transform-origin:left top;transition:transform 150ms linear}.progress,.progress-indeterminate{background:var(--progress-background);z-index:2}.progress-buffer-bar{background:#fff;z-index:1}.progress-buffer-bar:before{background:var(--buffer-background);content:\"\"}.indeterminate-bar-primary{top:0;right:0;bottom:0;left:-145.166611%;animation:primary-indeterminate-translate 2s infinite linear}.indeterminate-bar-primary .progress-indeterminate{animation:primary-indeterminate-scale 2s infinite linear;animation-play-state:inherit}.indeterminate-bar-secondary{top:0;right:0;bottom:0;left:-54.888891%;animation:secondary-indeterminate-translate 2s infinite linear}.indeterminate-bar-secondary .progress-indeterminate{animation:secondary-indeterminate-scale 2s infinite linear;animation-play-state:inherit}.buffer-circles{background:radial-gradient(ellipse at center, var(--buffer-background) 0%, var(--buffer-background) 30%, transparent 30%) repeat-x 5px center;background-size:10px 10px;z-index:0;animation:buffering 450ms infinite linear}:host(.progress-bar-reversed) .progress,:host(.progress-bar-reversed) .progress-buffer-bar{transform-origin:right top}:host(.progress-bar-reversed) .buffer-circles,:host(.progress-bar-reversed) .indeterminate-bar-primary,:host(.progress-bar-reversed) .indeterminate-bar-secondary,:host(.progress-bar-reversed) .progress-indeterminate{animation-direction:reverse}:host(.progress-paused) .indeterminate-bar-secondary,:host(.progress-paused) .indeterminate-bar-primary,:host(.progress-paused) .buffer-circles{animation-play-state:paused}@keyframes primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes buffering{to{transform:translateX(-10px)}}:host{height:4px}";

const ProgressBar = class {
  constructor(hostRef) {
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /**
     * The state of the progress bar, based on if the time the process takes is known or not.
     * Default options are: `"determinate"` (no animation), `"indeterminate"` (animate from left to right).
     */
    this.type = 'determinate';
    /**
     * If true, reverse the progress bar direction.
     */
    this.reversed = false;
    /**
     * The value determines how much of the active bar should display when the
     * `type` is `"determinate"`.
     * The value should be between [0, 1].
     */
    this.value = 0;
    /**
     * If the buffer and value are smaller than 1, the buffer circles will show.
     * The buffer should be between [0, 1].
     */
    this.buffer = 1;
  }
  render() {
    const { color, type, reversed, value, buffer } = this;
    const paused = _ionic_global_9d5c8ee3_js__WEBPACK_IMPORTED_MODULE_1__["c"].getBoolean('_testing');
    const mode = Object(_ionic_global_9d5c8ee3_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
    return (Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["H"], { role: "progressbar", "aria-valuenow": type === 'determinate' ? value : null, "aria-valuemin": "0", "aria-valuemax": "1", class: Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_3__["c"])(color, {
        [mode]: true,
        [`progress-bar-${type}`]: true,
        'progress-paused': paused,
        'progress-bar-reversed': document.dir === 'rtl' ? !reversed : reversed
      }) }, type === 'indeterminate'
      ? renderIndeterminate()
      : renderProgress(value, buffer)));
  }
};
const renderIndeterminate = () => {
  return [
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "indeterminate-bar-primary" }, Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "progress-indeterminate" })),
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "indeterminate-bar-secondary" }, Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "progress-indeterminate" }))
  ];
};
const renderProgress = (value, buffer) => {
  const finalValue = Object(_helpers_002e4980_js__WEBPACK_IMPORTED_MODULE_2__["e"])(0, value, 1);
  const finalBuffer = Object(_helpers_002e4980_js__WEBPACK_IMPORTED_MODULE_2__["e"])(0, buffer, 1);
  return [
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "progress", style: { transform: `scaleX(${finalValue})` } }),
    finalBuffer !== 1 && Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "buffer-circles" }),
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "progress-buffer-bar", style: { transform: `scaleX(${finalBuffer})` } }),
  ];
};
ProgressBar.style = {
  ios: progressBarIosCss,
  md: progressBarMdCss
};




/***/ })

}]);
//# sourceMappingURL=23-es2015.js.map