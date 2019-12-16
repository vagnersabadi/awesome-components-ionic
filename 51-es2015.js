(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[51],{

/***/ "./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js ***!
  \***********************************************************************/
/*! exports provided: ion_refresher, ion_refresher_content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_refresher", function() { return Refresher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_refresher_content", function() { return RefresherContent; });
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm/core-feeeff0d.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
/* harmony import */ var _index_3476b023_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-3476b023.js */ "./node_modules/@ionic/core/dist/esm/index-3476b023.js");




const Refresher = class {
    constructor(hostRef) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.appliedStyles = false;
        this.didStart = false;
        this.progress = 0;
        /**
         * The current state which the refresher is in. The refresher's states include:
         *
         * - `inactive` - The refresher is not being pulled down or refreshing and is currently hidden.
         * - `pulling` - The user is actively pulling down the refresher, but has not reached the point yet that if the user lets go, it'll refresh.
         * - `cancelling` - The user pulled down the refresher and let go, but did not pull down far enough to kick off the `refreshing` state. After letting go, the refresher is in the `cancelling` state while it is closing, and will go back to the `inactive` state once closed.
         * - `ready` - The user has pulled down the refresher far enough that if they let go, it'll begin the `refreshing` state.
         * - `refreshing` - The refresher is actively waiting on the async operation to end. Once the refresh handler calls `complete()` it will begin the `completing` state.
         * - `completing` - The `refreshing` state has finished and the refresher is in the way of closing itself. Once closed, the refresher will go back to the `inactive` state.
         */
        this.state = 1 /* Inactive */;
        /**
         * The minimum distance the user must pull down until the
         * refresher will go into the `refreshing` state.
         */
        this.pullMin = 60;
        /**
         * The maximum distance of the pull until the refresher
         * will automatically go into the `refreshing` state.
         * Defaults to the result of `pullMin + 60`.
         */
        this.pullMax = this.pullMin + 60;
        /**
         * Time it takes to close the refresher.
         */
        this.closeDuration = '280ms';
        /**
         * Time it takes the refresher to to snap back to the `refreshing` state.
         */
        this.snapbackDuration = '280ms';
        /**
         * How much to multiply the pull speed by. To slow the pull animation down,
         * pass a number less than `1`. To speed up the pull, pass a number greater
         * than `1`. The default value is `1` which is equal to the speed of the cursor.
         * If a negative value is passed in, the factor will be `1` instead.
         *
         * For example: If the value passed is `1.2` and the content is dragged by
         * `10` pixels, instead of `10` pixels the content will be pulled by `12` pixels
         * (an increase of 20 percent). If the value passed is `0.8`, the dragged amount
         * will be `8` pixels, less than the amount the cursor has moved.
         */
        this.pullFactor = 1;
        /**
         * If `true`, the refresher will be hidden.
         */
        this.disabled = false;
        this.ionRefresh = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionRefresh", 7);
        this.ionPull = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionPull", 7);
        this.ionStart = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionStart", 7);
    }
    disabledChanged() {
        if (this.gesture) {
            this.gesture.setDisabled(this.disabled);
        }
    }
    async connectedCallback() {
        if (this.el.getAttribute('slot') !== 'fixed') {
            console.error('Make sure you use: <ion-refresher slot="fixed">');
            return;
        }
        const contentEl = this.el.closest('ion-content');
        if (!contentEl) {
            console.error('<ion-refresher> must be used inside an <ion-content>');
            return;
        }
        this.scrollEl = await contentEl.getScrollElement();
        this.gesture = (await Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./index-624eea58.js */ "./node_modules/@ionic/core/dist/esm/index-624eea58.js"))).createGesture({
            el: contentEl,
            gestureName: 'refresher',
            gesturePriority: 10,
            direction: 'y',
            threshold: 20,
            passive: false,
            canStart: () => this.canStart(),
            onStart: () => this.onStart(),
            onMove: ev => this.onMove(ev),
            onEnd: () => this.onEnd(),
        });
        this.disabledChanged();
    }
    disconnectedCallback() {
        this.scrollEl = undefined;
        if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
        }
    }
    /**
     * Call `complete()` when your async operation has completed.
     * For example, the `refreshing` state is while the app is performing
     * an asynchronous operation, such as receiving more data from an
     * AJAX request. Once the data has been received, you then call this
     * method to signify that the refreshing has completed and to close
     * the refresher. This method also changes the refresher's state from
     * `refreshing` to `completing`.
     */
    async complete() {
        this.close(32 /* Completing */, '120ms');
    }
    /**
     * Changes the refresher's state from `refreshing` to `cancelling`.
     */
    async cancel() {
        this.close(16 /* Cancelling */, '');
    }
    /**
     * A number representing how far down the user has pulled.
     * The number `0` represents the user hasn't pulled down at all. The
     * number `1`, and anything greater than `1`, represents that the user
     * has pulled far enough down that when they let go then the refresh will
     * happen. If they let go and the number is less than `1`, then the
     * refresh will not happen, and the content will return to it's original
     * position.
     */
    getProgress() {
        return Promise.resolve(this.progress);
    }
    canStart() {
        if (!this.scrollEl) {
            return false;
        }
        if (this.state !== 1 /* Inactive */) {
            return false;
        }
        // if the scrollTop is greater than zero then it's
        // not possible to pull the content down yet
        if (this.scrollEl.scrollTop > 0) {
            return false;
        }
        return true;
    }
    onStart() {
        this.progress = 0;
        this.state = 1 /* Inactive */;
    }
    onMove(detail) {
        if (!this.scrollEl) {
            return;
        }
        // this method can get called like a bazillion times per second,
        // so it's built to be as efficient as possible, and does its
        // best to do any DOM read/writes only when absolutely necessary
        // if multi-touch then get out immediately
        const ev = detail.event;
        if (ev.touches && ev.touches.length > 1) {
            return;
        }
        // do nothing if it's actively refreshing
        // or it's in the way of closing
        // or this was never a startY
        if ((this.state & 56 /* _BUSY_ */) !== 0) {
            return;
        }
        const pullFactor = (Number.isNaN(this.pullFactor) || this.pullFactor < 0) ? 1 : this.pullFactor;
        const deltaY = detail.deltaY * pullFactor;
        // don't bother if they're scrolling up
        // and have not already started dragging
        if (deltaY <= 0) {
            // the current Y is higher than the starting Y
            // so they scrolled up enough to be ignored
            this.progress = 0;
            this.state = 1 /* Inactive */;
            if (this.appliedStyles) {
                // reset the styles only if they were applied
                this.setCss(0, '', false, '');
                return;
            }
            return;
        }
        if (this.state === 1 /* Inactive */) {
            // this refresh is not already actively pulling down
            // get the content's scrollTop
            const scrollHostScrollTop = this.scrollEl.scrollTop;
            // if the scrollTop is greater than zero then it's
            // not possible to pull the content down yet
            if (scrollHostScrollTop > 0) {
                this.progress = 0;
                return;
            }
            // content scrolled all the way to the top, and dragging down
            this.state = 2 /* Pulling */;
        }
        // prevent native scroll events
        if (ev.cancelable) {
            ev.preventDefault();
        }
        // the refresher is actively pulling at this point
        // move the scroll element within the content element
        this.setCss(deltaY, '0ms', true, '');
        if (deltaY === 0) {
            // don't continue if there's no delta yet
            this.progress = 0;
            return;
        }
        const pullMin = this.pullMin;
        // set pull progress
        this.progress = deltaY / pullMin;
        // emit "start" if it hasn't started yet
        if (!this.didStart) {
            this.didStart = true;
            this.ionStart.emit();
        }
        // emit "pulling" on every move
        this.ionPull.emit();
        // do nothing if the delta is less than the pull threshold
        if (deltaY < pullMin) {
            // ensure it stays in the pulling state, cuz its not ready yet
            this.state = 2 /* Pulling */;
            return;
        }
        if (deltaY > this.pullMax) {
            // they pulled farther than the max, so kick off the refresh
            this.beginRefresh();
            return;
        }
        // pulled farther than the pull min!!
        // it is now in the `ready` state!!
        // if they let go then it'll refresh, kerpow!!
        this.state = 4 /* Ready */;
        return;
    }
    onEnd() {
        // only run in a zone when absolutely necessary
        if (this.state === 4 /* Ready */) {
            // they pulled down far enough, so it's ready to refresh
            this.beginRefresh();
        }
        else if (this.state === 2 /* Pulling */) {
            // they were pulling down, but didn't pull down far enough
            // set the content back to it's original location
            // and close the refresher
            // set that the refresh is actively cancelling
            this.cancel();
        }
    }
    beginRefresh() {
        // assumes we're already back in a zone
        // they pulled down far enough, so it's ready to refresh
        this.state = 8 /* Refreshing */;
        // place the content in a hangout position while it thinks
        this.setCss(this.pullMin, this.snapbackDuration, true, '');
        // emit "refresh" because it was pulled down far enough
        // and they let go to begin refreshing
        this.ionRefresh.emit({
            complete: this.complete.bind(this)
        });
    }
    close(state, delay) {
        // create fallback timer incase something goes wrong with transitionEnd event
        setTimeout(() => {
            this.state = 1 /* Inactive */;
            this.progress = 0;
            this.didStart = false;
            this.setCss(0, '0ms', false, '');
        }, 600);
        // reset set the styles on the scroll element
        // set that the refresh is actively cancelling/completing
        this.state = state;
        this.setCss(0, this.closeDuration, true, delay);
        // TODO: stop gesture
    }
    setCss(y, duration, overflowVisible, delay) {
        this.appliedStyles = (y > 0);
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["w"])(() => {
            if (this.scrollEl) {
                const style = this.scrollEl.style;
                style.transform = ((y > 0) ? `translateY(${y}px) translateZ(0px)` : 'translateZ(0px)');
                style.transitionDuration = duration;
                style.transitionDelay = delay;
                style.overflow = (overflowVisible ? 'hidden' : '');
            }
        });
    }
    render() {
        const mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { slot: "fixed", class: {
                [mode]: true,
                // Used internally for styling
                [`refresher-${mode}`]: true,
                'refresher-active': this.state !== 1 /* Inactive */,
                'refresher-pulling': this.state === 2 /* Pulling */,
                'refresher-ready': this.state === 4 /* Ready */,
                'refresher-refreshing': this.state === 8 /* Refreshing */,
                'refresher-cancelling': this.state === 16 /* Cancelling */,
                'refresher-completing': this.state === 32 /* Completing */
            } }));
    }
    get el() { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
    static get watchers() { return {
        "disabled": ["disabledChanged"]
    }; }
    static get style() { return "ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;z-index:-1}:host-context([dir=rtl]) ion-refresher,[dir=rtl] ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:.2s;transition:.2s;font-size:30px;text-align:center}:host-context([dir=rtl]) .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-refreshing-icon,[dir=rtl] .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}.refresher-pulling ion-refresher-content .refresher-pulling,.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-cancelling ion-refresher-content .refresher-pulling,.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-md .refresher-pulling-icon,.refresher-md .refresher-pulling-text,.refresher-md .refresher-refreshing-icon,.refresher-md .refresher-refreshing-text{color:var(--ion-text-color,#000)}.refresher-md .refresher-refreshing .spinner-crescent circle,.refresher-md .refresher-refreshing .spinner-lines-md line,.refresher-md .refresher-refreshing .spinner-lines-small-md line{stroke:var(--ion-text-color,#000)}.refresher-md .refresher-refreshing .spinner-bubbles circle,.refresher-md .refresher-refreshing .spinner-circles circle,.refresher-md .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color,#000)}"; }
};

const RefresherContent = class {
    constructor(hostRef) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    componentWillLoad() {
        if (this.pullingIcon === undefined) {
            this.pullingIcon = _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('refreshingIcon', 'arrow-down');
        }
        if (this.refreshingSpinner === undefined) {
            const mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
            this.refreshingSpinner = _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('refreshingSpinner', _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('spinner', mode === 'ios' ? 'lines' : 'crescent'));
        }
    }
    render() {
        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this) }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "refresher-pulling" }, this.pullingIcon &&
            Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "refresher-pulling-icon" }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", { icon: this.pullingIcon, lazy: false })), this.pullingText &&
            Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "refresher-pulling-text", innerHTML: Object(_index_3476b023_js__WEBPACK_IMPORTED_MODULE_2__["s"])(this.pullingText) })), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "refresher-refreshing" }, this.refreshingSpinner &&
            Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "refresher-refreshing-icon" }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-spinner", { name: this.refreshingSpinner })), this.refreshingText &&
            Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "refresher-refreshing-text", innerHTML: Object(_index_3476b023_js__WEBPACK_IMPORTED_MODULE_2__["s"])(this.refreshingText) }))));
    }
};




/***/ })

}]);
//# sourceMappingURL=51-es2015.js.map