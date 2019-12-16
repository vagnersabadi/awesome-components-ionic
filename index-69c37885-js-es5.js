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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index-69c37885-js"], {
        /***/ "./node_modules/@ionic/core/dist/esm/index-69c37885.js": 
        /*!*************************************************************!*\
          !*** ./node_modules/@ionic/core/dist/esm/index-69c37885.js ***!
          \*************************************************************/
        /*! exports provided: create */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function () { return create; });
            var transitionEnd = function (el, callback) {
                var unRegTrans;
                var opts = { passive: true };
                var unregister = function () {
                    if (unRegTrans) {
                        unRegTrans();
                    }
                };
                var onTransitionEnd = function (ev) {
                    if (el === ev.target) {
                        unregister();
                        callback(ev);
                    }
                };
                if (el) {
                    el.addEventListener('webkitTransitionEnd', onTransitionEnd, opts);
                    el.addEventListener('transitionend', onTransitionEnd, opts);
                    unRegTrans = function () {
                        el.removeEventListener('webkitTransitionEnd', onTransitionEnd, opts);
                        el.removeEventListener('transitionend', onTransitionEnd, opts);
                    };
                }
                return unregister;
            };
            var CSS_VALUE_REGEX = /(^-?\d*\.?\d*)(.*)/;
            var DURATION_MIN = 32;
            var TRANSITION_END_FALLBACK_PADDING_MS = 400;
            var TRANSFORM_PROPS = {
                'translateX': 1,
                'translateY': 1,
                'translateZ': 1,
                'scale': 1,
                'scaleX': 1,
                'scaleY': 1,
                'scaleZ': 1,
                'rotate': 1,
                'rotateX': 1,
                'rotateY': 1,
                'rotateZ': 1,
                'skewX': 1,
                'skewY': 1,
                'perspective': 1
            };
            var win = typeof window !== 'undefined' ? window : {};
            var raf = win.requestAnimationFrame
                ? win.requestAnimationFrame.bind(win)
                : function (f) { return f(Date.now()); };
            var Animator = /** @class */ (function () {
                function Animator() {
                    this._hasDur = false;
                    this._hasTweenEffect = false;
                    this._isAsync = false;
                    this._isReverse = false;
                    this._destroyed = false;
                    this.hasChildren = false;
                    this.isPlaying = false;
                    this.hasCompleted = false;
                }
                Animator.prototype.addElement = function (el) {
                    if (el != null) {
                        if (el.length > 0) {
                            for (var i = 0; i < el.length; i++) {
                                this._addEl(el[i]);
                            }
                        }
                        else {
                            this._addEl(el);
                        }
                    }
                    return this;
                };
                /**
                 * NO DOM
                 */
                Animator.prototype._addEl = function (el) {
                    if (el.nodeType === 1) {
                        (this._elements = this._elements || []).push(el);
                    }
                };
                /**
                 * Add a child animation to this animation.
                 */
                Animator.prototype.add = function (childAnimation) {
                    childAnimation.parent = this;
                    this.hasChildren = true;
                    (this._childAnimations = this._childAnimations || []).push(childAnimation);
                    return this;
                };
                /**
                 * Get the duration of this animation. If this animation does
                 * not have a duration, then it'll get the duration from its parent.
                 */
                Animator.prototype.getDuration = function (opts) {
                    if (opts && opts.duration !== undefined) {
                        return opts.duration;
                    }
                    else if (this._duration !== undefined) {
                        return this._duration;
                    }
                    else if (this.parent) {
                        return this.parent.getDuration();
                    }
                    return 0;
                };
                /**
                 * Returns if the animation is a root one.
                 */
                Animator.prototype.isRoot = function () {
                    return !this.parent;
                };
                /**
                 * Set the duration for this animation.
                 */
                Animator.prototype.duration = function (milliseconds) {
                    this._duration = milliseconds;
                    return this;
                };
                /**
                 * Get the easing of this animation. If this animation does
                 * not have an easing, then it'll get the easing from its parent.
                 */
                Animator.prototype.getEasing = function () {
                    if (this._isReverse && this._reversedEasingName !== undefined) {
                        return this._reversedEasingName;
                    }
                    return this._easingName !== undefined ? this._easingName : (this.parent && this.parent.getEasing()) || null;
                };
                /**
                 * Set the easing for this animation.
                 */
                Animator.prototype.easing = function (name) {
                    this._easingName = name;
                    return this;
                };
                /**
                 * Set the easing for this reversed animation.
                 */
                Animator.prototype.easingReverse = function (name) {
                    this._reversedEasingName = name;
                    return this;
                };
                /**
                 * Add the "from" value for a specific property.
                 */
                Animator.prototype.from = function (prop, val) {
                    this._addProp('from', prop, val);
                    return this;
                };
                /**
                 * Add the "to" value for a specific property.
                 */
                Animator.prototype.to = function (prop, val, clearProperyAfterTransition) {
                    if (clearProperyAfterTransition === void 0) { clearProperyAfterTransition = false; }
                    var fx = this._addProp('to', prop, val);
                    if (clearProperyAfterTransition) {
                        // if this effect is a transform then clear the transform effect
                        // otherwise just clear the actual property
                        this.afterClearStyles(fx.trans ? ['transform', '-webkit-transform'] : [prop]);
                    }
                    return this;
                };
                /**
                 * Shortcut to add both the "from" and "to" for the same property.
                 */
                Animator.prototype.fromTo = function (prop, fromVal, toVal, clearProperyAfterTransition) {
                    return this.from(prop, fromVal).to(prop, toVal, clearProperyAfterTransition);
                };
                /**
                 * NO DOM
                 */
                Animator.prototype._getProp = function (name) {
                    if (this._fxProperties) {
                        return this._fxProperties.find(function (prop) { return prop.effectName === name; });
                    }
                    return undefined;
                };
                Animator.prototype._addProp = function (state, prop, val) {
                    var fxProp = this._getProp(prop);
                    if (!fxProp) {
                        // first time we've see this EffectProperty
                        var shouldTrans = (TRANSFORM_PROPS[prop] === 1);
                        fxProp = {
                            effectName: prop,
                            trans: shouldTrans,
                            // add the will-change property for transforms or opacity
                            wc: (shouldTrans ? 'transform' : prop)
                        };
                        (this._fxProperties = this._fxProperties || []).push(fxProp);
                    }
                    // add from/to EffectState to the EffectProperty
                    var fxState = {
                        val: val,
                        num: 0,
                        effectUnit: '',
                    };
                    fxProp[state] = fxState;
                    if (typeof val === 'string' && val.indexOf(' ') < 0) {
                        var r = val.match(CSS_VALUE_REGEX);
                        if (r) {
                            var num = parseFloat(r[1]);
                            if (!isNaN(num)) {
                                fxState.num = num;
                            }
                            fxState.effectUnit = (r[0] !== r[2] ? r[2] : '');
                        }
                    }
                    else if (typeof val === 'number') {
                        fxState.num = val;
                    }
                    return fxProp;
                };
                /**
                 * Add CSS class to this animation's elements
                 * before the animation begins.
                 */
                Animator.prototype.beforeAddClass = function (className) {
                    (this._beforeAddClasses = this._beforeAddClasses || []).push(className);
                    return this;
                };
                /**
                 * Remove CSS class from this animation's elements
                 * before the animation begins.
                 */
                Animator.prototype.beforeRemoveClass = function (className) {
                    (this._beforeRemoveClasses = this._beforeRemoveClasses || []).push(className);
                    return this;
                };
                /**
                 * Set CSS inline styles to this animation's elements
                 * before the animation begins.
                 */
                Animator.prototype.beforeStyles = function (styles) {
                    this._beforeStyles = styles;
                    return this;
                };
                /**
                 * Clear CSS inline styles from this animation's elements
                 * before the animation begins.
                 */
                Animator.prototype.beforeClearStyles = function (propertyNames) {
                    var e_1, _a;
                    this._beforeStyles = this._beforeStyles || {};
                    try {
                        for (var propertyNames_1 = __values(propertyNames), propertyNames_1_1 = propertyNames_1.next(); !propertyNames_1_1.done; propertyNames_1_1 = propertyNames_1.next()) {
                            var prop = propertyNames_1_1.value;
                            this._beforeStyles[prop] = '';
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (propertyNames_1_1 && !propertyNames_1_1.done && (_a = propertyNames_1.return)) _a.call(propertyNames_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    return this;
                };
                /**
                 * Add a function which contains DOM reads, which will run
                 * before the animation begins.
                 */
                Animator.prototype.beforeAddRead = function (domReadFn) {
                    (this._readCallbacks = this._readCallbacks || []).push(domReadFn);
                    return this;
                };
                /**
                 * Add a function which contains DOM writes, which will run
                 * before the animation begins.
                 */
                Animator.prototype.beforeAddWrite = function (domWriteFn) {
                    (this._writeCallbacks = this._writeCallbacks || []).push(domWriteFn);
                    return this;
                };
                /**
                 * Add CSS class to this animation's elements
                 * after the animation finishes.
                 */
                Animator.prototype.afterAddClass = function (className) {
                    (this._afterAddClasses = this._afterAddClasses || []).push(className);
                    return this;
                };
                /**
                 * Remove CSS class from this animation's elements
                 * after the animation finishes.
                 */
                Animator.prototype.afterRemoveClass = function (className) {
                    (this._afterRemoveClasses = this._afterRemoveClasses || []).push(className);
                    return this;
                };
                /**
                 * Set CSS inline styles to this animation's elements
                 * after the animation finishes.
                 */
                Animator.prototype.afterStyles = function (styles) {
                    this._afterStyles = styles;
                    return this;
                };
                /**
                 * Clear CSS inline styles from this animation's elements
                 * after the animation finishes.
                 */
                Animator.prototype.afterClearStyles = function (propertyNames) {
                    var e_2, _a;
                    this._afterStyles = this._afterStyles || {};
                    try {
                        for (var propertyNames_2 = __values(propertyNames), propertyNames_2_1 = propertyNames_2.next(); !propertyNames_2_1.done; propertyNames_2_1 = propertyNames_2.next()) {
                            var prop = propertyNames_2_1.value;
                            this._afterStyles[prop] = '';
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (propertyNames_2_1 && !propertyNames_2_1.done && (_a = propertyNames_2.return)) _a.call(propertyNames_2);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    return this;
                };
                /**
                 * Play the animation.
                 */
                Animator.prototype.play = function (opts) {
                    var _this = this;
                    // If the animation was already invalidated (it did finish), do nothing
                    if (this._destroyed) {
                        return;
                    }
                    // this is the top level animation and is in full control
                    // of when the async play() should actually kick off
                    // if there is no duration then it'll set the TO property immediately
                    // if there is a duration, then it'll stage all animations at the
                    // FROM property and transition duration, wait a few frames, then
                    // kick off the animation by setting the TO property for each animation
                    this._isAsync = this._hasDuration(opts);
                    // ensure all past transition end events have been cleared
                    this._clearAsync();
                    // recursively kicks off the correct progress step for each child animation
                    // ******** DOM WRITE ****************
                    this._playInit(opts);
                    // doubling up RAFs since this animation was probably triggered
                    // from an input event, and just having one RAF would have this code
                    // run within the same frame as the triggering input event, and the
                    // input event probably already did way too much work for one frame
                    raf(function () {
                        raf(function () {
                            _this._playDomInspect(opts);
                        });
                    });
                };
                Animator.prototype.playAsync = function (opts) {
                    var _this = this;
                    return new Promise(function (resolve) {
                        _this.onFinish(resolve, { oneTimeCallback: true, clearExistingCallbacks: true });
                        _this.play(opts);
                        return _this;
                    });
                };
                Animator.prototype.playSync = function () {
                    // If the animation was already invalidated (it did finish), do nothing
                    if (!this._destroyed) {
                        var opts = { duration: 0 };
                        this._isAsync = false;
                        this._clearAsync();
                        this._playInit(opts);
                        this._playDomInspect(opts);
                    }
                };
                /**
                 * DOM WRITE
                 * RECURSION
                 */
                Animator.prototype._playInit = function (opts) {
                    var e_3, _a;
                    // always default that an animation does not tween
                    // a tween requires that an Animation class has an element
                    // and that it has at least one FROM/TO effect
                    // and that the FROM/TO effect can tween numeric values
                    this._hasTweenEffect = false;
                    this.isPlaying = true;
                    this.hasCompleted = false;
                    this._hasDur = (this.getDuration(opts) > DURATION_MIN);
                    var children = this._childAnimations;
                    if (children) {
                        try {
                            for (var children_1 = __values(children), children_1_1 = children_1.next(); !children_1_1.done; children_1_1 = children_1.next()) {
                                var child = children_1_1.value;
                                // ******** DOM WRITE ****************
                                child._playInit(opts);
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (children_1_1 && !children_1_1.done && (_a = children_1.return)) _a.call(children_1);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                    }
                    if (this._hasDur) {
                        // if there is a duration then we want to start at step 0
                        // ******** DOM WRITE ****************
                        this._progress(0);
                        // add the will-change properties
                        // ******** DOM WRITE ****************
                        this._willChange(true);
                    }
                };
                /**
                 * DOM WRITE
                 * NO RECURSION
                 * ROOT ANIMATION
                 */
                Animator.prototype._playDomInspect = function (opts) {
                    var _this = this;
                    // fire off all the "before" function that have DOM READS in them
                    // elements will be in the DOM, however visibily hidden
                    // so we can read their dimensions if need be
                    // ******** DOM READ ****************
                    // ******** DOM WRITE ****************
                    this._beforeAnimation();
                    // for the root animation only
                    // set the async TRANSITION END event
                    // and run onFinishes when the transition ends
                    var dur = this.getDuration(opts);
                    if (this._isAsync) {
                        this._asyncEnd(dur, true);
                    }
                    // ******** DOM WRITE ****************
                    this._playProgress(opts);
                    if (this._isAsync && !this._destroyed) {
                        // this animation has a duration so we need another RAF
                        // for the CSS TRANSITION properties to kick in
                        raf(function () {
                            _this._playToStep(1);
                        });
                    }
                };
                /**
                 * DOM WRITE
                 * RECURSION
                 */
                Animator.prototype._playProgress = function (opts) {
                    var e_4, _a;
                    var children = this._childAnimations;
                    if (children) {
                        try {
                            for (var children_2 = __values(children), children_2_1 = children_2.next(); !children_2_1.done; children_2_1 = children_2.next()) {
                                var child = children_2_1.value;
                                // ******** DOM WRITE ****************
                                child._playProgress(opts);
                            }
                        }
                        catch (e_4_1) { e_4 = { error: e_4_1 }; }
                        finally {
                            try {
                                if (children_2_1 && !children_2_1.done && (_a = children_2.return)) _a.call(children_2);
                            }
                            finally { if (e_4) throw e_4.error; }
                        }
                    }
                    if (this._hasDur) {
                        // set the CSS TRANSITION duration/easing
                        // ******** DOM WRITE ****************
                        this._setTrans(this.getDuration(opts), false);
                    }
                    else {
                        // this animation does not have a duration, so it should not animate
                        // just go straight to the TO properties and call it done
                        // ******** DOM WRITE ****************
                        this._progress(1);
                        // since there was no animation, immediately run the after
                        // ******** DOM WRITE ****************
                        this._setAfterStyles();
                        // this animation has no duration, so it has finished
                        // other animations could still be running
                        this._didFinish(true);
                    }
                };
                /**
                 * DOM WRITE
                 * RECURSION
                 */
                Animator.prototype._playToStep = function (stepValue) {
                    var e_5, _a;
                    if (!this._destroyed) {
                        var children = this._childAnimations;
                        if (children) {
                            try {
                                for (var children_3 = __values(children), children_3_1 = children_3.next(); !children_3_1.done; children_3_1 = children_3.next()) {
                                    var child = children_3_1.value;
                                    // ******** DOM WRITE ****************
                                    child._playToStep(stepValue);
                                }
                            }
                            catch (e_5_1) { e_5 = { error: e_5_1 }; }
                            finally {
                                try {
                                    if (children_3_1 && !children_3_1.done && (_a = children_3.return)) _a.call(children_3);
                                }
                                finally { if (e_5) throw e_5.error; }
                            }
                        }
                        if (this._hasDur) {
                            // browser had some time to render everything in place
                            // and the transition duration/easing is set
                            // now set the TO properties which will trigger the transition to begin
                            // ******** DOM WRITE ****************
                            this._progress(stepValue);
                        }
                    }
                };
                /**
                 * DOM WRITE
                 * NO RECURSION
                 * ROOT ANIMATION
                 */
                Animator.prototype._asyncEnd = function (dur, shouldComplete) {
                    var self = this;
                    var onTransitionEnd = function () {
                        // congrats! a successful transition completed!
                        // ensure transition end events and timeouts have been cleared
                        self._clearAsync();
                        // ******** DOM WRITE ****************
                        self._playEnd();
                        // transition finished
                        self._didFinishAll(shouldComplete, true, false);
                    };
                    var onTransitionFallback = function () {
                        // oh noz! the transition end event didn't fire in time!
                        // instead the fallback timer when first
                        // if all goes well this fallback should never fire
                        // clear the other async end events from firing
                        self._timerId = undefined;
                        self._clearAsync();
                        // set the after styles
                        // ******** DOM WRITE ****************
                        self._playEnd(shouldComplete ? 1 : 0);
                        // transition finished
                        self._didFinishAll(shouldComplete, true, false);
                    };
                    // set the TRANSITION END event on one of the transition elements
                    self._unregisterTrnsEnd = transitionEnd(self._transEl(), onTransitionEnd);
                    // set a fallback timeout if the transition end event never fires, or is too slow
                    // transition end fallback: (animation duration + XXms)
                    self._timerId = setTimeout(onTransitionFallback, (dur + TRANSITION_END_FALLBACK_PADDING_MS));
                };
                /**
                 * DOM WRITE
                 * RECURSION
                 */
                Animator.prototype._playEnd = function (stepValue) {
                    var e_6, _a;
                    var children = this._childAnimations;
                    if (children) {
                        try {
                            for (var children_4 = __values(children), children_4_1 = children_4.next(); !children_4_1.done; children_4_1 = children_4.next()) {
                                var child = children_4_1.value;
                                // ******** DOM WRITE ****************
                                child._playEnd(stepValue);
                            }
                        }
                        catch (e_6_1) { e_6 = { error: e_6_1 }; }
                        finally {
                            try {
                                if (children_4_1 && !children_4_1.done && (_a = children_4.return)) _a.call(children_4);
                            }
                            finally { if (e_6) throw e_6.error; }
                        }
                    }
                    if (this._hasDur) {
                        if (stepValue !== undefined) {
                            // too late to have a smooth animation, just finish it
                            // ******** DOM WRITE ****************
                            this._setTrans(0, true);
                            // ensure the ending progress step gets rendered
                            // ******** DOM WRITE ****************
                            this._progress(stepValue);
                        }
                        // set the after styles
                        // ******** DOM WRITE ****************
                        this._setAfterStyles();
                        // remove the will-change properties
                        // ******** DOM WRITE ****************
                        this._willChange(false);
                    }
                };
                /**
                 * NO DOM
                 * RECURSION
                 */
                Animator.prototype._hasDuration = function (opts) {
                    var e_7, _a;
                    if (this.getDuration(opts) > DURATION_MIN) {
                        return true;
                    }
                    var children = this._childAnimations;
                    if (children) {
                        try {
                            for (var children_5 = __values(children), children_5_1 = children_5.next(); !children_5_1.done; children_5_1 = children_5.next()) {
                                var child = children_5_1.value;
                                if (child._hasDuration(opts)) {
                                    return true;
                                }
                            }
                        }
                        catch (e_7_1) { e_7 = { error: e_7_1 }; }
                        finally {
                            try {
                                if (children_5_1 && !children_5_1.done && (_a = children_5.return)) _a.call(children_5);
                            }
                            finally { if (e_7) throw e_7.error; }
                        }
                    }
                    return false;
                };
                /**
                 * NO DOM
                 * RECURSION
                 */
                Animator.prototype._hasDomReads = function () {
                    var e_8, _a;
                    if (this._readCallbacks && this._readCallbacks.length > 0) {
                        return true;
                    }
                    var children = this._childAnimations;
                    if (children) {
                        try {
                            for (var children_6 = __values(children), children_6_1 = children_6.next(); !children_6_1.done; children_6_1 = children_6.next()) {
                                var child = children_6_1.value;
                                if (child._hasDomReads()) {
                                    return true;
                                }
                            }
                        }
                        catch (e_8_1) { e_8 = { error: e_8_1 }; }
                        finally {
                            try {
                                if (children_6_1 && !children_6_1.done && (_a = children_6.return)) _a.call(children_6);
                            }
                            finally { if (e_8) throw e_8.error; }
                        }
                    }
                    return false;
                };
                /**
                 * Immediately stop at the end of the animation.
                 */
                Animator.prototype.stop = function (stepValue) {
                    if (stepValue === void 0) { stepValue = 1; }
                    // ensure all past transition end events have been cleared
                    this._clearAsync();
                    this._hasDur = true;
                    this._playEnd(stepValue);
                };
                /**
                 * NO DOM
                 * NO RECURSION
                 */
                Animator.prototype._clearAsync = function () {
                    if (this._unregisterTrnsEnd) {
                        this._unregisterTrnsEnd();
                    }
                    if (this._timerId) {
                        clearTimeout(this._timerId);
                    }
                    this._timerId = this._unregisterTrnsEnd = undefined;
                };
                /**
                 * DOM WRITE
                 * NO RECURSION
                 */
                Animator.prototype._progress = function (stepValue) {
                    // bread 'n butter
                    var val;
                    var elements = this._elements;
                    var effects = this._fxProperties;
                    if (!elements || elements.length === 0 || !effects || this._destroyed) {
                        return;
                    }
                    // flip the number if we're going in reverse
                    if (this._isReverse) {
                        stepValue = 1 - stepValue;
                    }
                    var i = 0;
                    var j = 0;
                    var finalTransform = '';
                    var fx;
                    for (i = 0; i < effects.length; i++) {
                        fx = effects[i];
                        if (fx.from && fx.to) {
                            var fromNum = fx.from.num;
                            var toNum = fx.to.num;
                            var tweenEffect = (fromNum !== toNum);
                            if (tweenEffect) {
                                this._hasTweenEffect = true;
                            }
                            if (stepValue === 0) {
                                // FROM
                                val = fx.from.val;
                            }
                            else if (stepValue === 1) {
                                // TO
                                val = fx.to.val;
                            }
                            else if (tweenEffect) {
                                // EVERYTHING IN BETWEEN
                                var valNum = (((toNum - fromNum) * stepValue) + fromNum);
                                var unit = fx.to.effectUnit;
                                val = valNum + unit;
                            }
                            if (val !== null) {
                                var prop = fx.effectName;
                                if (fx.trans) {
                                    finalTransform += prop + '(' + val + ') ';
                                }
                                else {
                                    for (j = 0; j < elements.length; j++) {
                                        // ******** DOM WRITE ****************
                                        elements[j].style.setProperty(prop, val);
                                    }
                                }
                            }
                        }
                    }
                    // place all transforms on the same property
                    if (finalTransform.length > 0) {
                        if (!this._isReverse && stepValue !== 1 || this._isReverse && stepValue !== 0) {
                            finalTransform += 'translateZ(0px)';
                        }
                        for (i = 0; i < elements.length; i++) {
                            // ******** DOM WRITE ****************
                            elements[i].style.setProperty('transform', finalTransform);
                            elements[i].style.setProperty('-webkit-transform', finalTransform);
                        }
                    }
                };
                /**
                 * DOM WRITE
                 * NO RECURSION
                 */
                Animator.prototype._setTrans = function (dur, forcedLinearEasing) {
                    var e_9, _a;
                    // Transition is not enabled if there are not effects
                    var elements = this._elements;
                    if (!elements || elements.length === 0 || !this._fxProperties) {
                        return;
                    }
                    // set the TRANSITION properties inline on the element
                    var easing = (forcedLinearEasing ? 'linear' : this.getEasing());
                    var durString = dur + 'ms';
                    try {
                        for (var elements_1 = __values(elements), elements_1_1 = elements_1.next(); !elements_1_1.done; elements_1_1 = elements_1.next()) {
                            var style = elements_1_1.value.style;
                            if (dur > 0) {
                                // ******** DOM WRITE ****************
                                style.transitionDuration = durString;
                                // each animation can have a different easing
                                if (easing !== null) {
                                    // ******** DOM WRITE ****************
                                    style.transitionTimingFunction = easing;
                                }
                            }
                            else {
                                style.transitionDuration = '0';
                            }
                        }
                    }
                    catch (e_9_1) { e_9 = { error: e_9_1 }; }
                    finally {
                        try {
                            if (elements_1_1 && !elements_1_1.done && (_a = elements_1.return)) _a.call(elements_1);
                        }
                        finally { if (e_9) throw e_9.error; }
                    }
                };
                /**
                 * DOM READ
                 * DOM WRITE
                 * RECURSION
                 */
                Animator.prototype._beforeAnimation = function () {
                    // fire off all the "before" function that have DOM READS in them
                    // elements will be in the DOM, however visibily hidden
                    // so we can read their dimensions if need be
                    // ******** DOM READ ****************
                    this._fireBeforeReadFunc();
                    // ******** DOM READS ABOVE / DOM WRITES BELOW ****************
                    // fire off all the "before" function that have DOM WRITES in them
                    // ******** DOM WRITE ****************
                    this._fireBeforeWriteFunc();
                    // stage all of the before css classes and inline styles
                    // ******** DOM WRITE ****************
                    this._setBeforeStyles();
                };
                /**
                 * DOM WRITE
                 * RECURSION
                 */
                Animator.prototype._setBeforeStyles = function () {
                    var e_10, _a, e_11, _b, e_12, _c, e_13, _d, e_14, _e;
                    var children = this._childAnimations;
                    if (children) {
                        try {
                            for (var children_7 = __values(children), children_7_1 = children_7.next(); !children_7_1.done; children_7_1 = children_7.next()) {
                                var child = children_7_1.value;
                                child._setBeforeStyles();
                            }
                        }
                        catch (e_10_1) { e_10 = { error: e_10_1 }; }
                        finally {
                            try {
                                if (children_7_1 && !children_7_1.done && (_a = children_7.return)) _a.call(children_7);
                            }
                            finally { if (e_10) throw e_10.error; }
                        }
                    }
                    var elements = this._elements;
                    // before the animations have started
                    // only set before styles if animation is not reversed
                    if (!elements || elements.length === 0 || this._isReverse) {
                        return;
                    }
                    var addClasses = this._beforeAddClasses;
                    var removeClasses = this._beforeRemoveClasses;
                    try {
                        for (var elements_2 = __values(elements), elements_2_1 = elements_2.next(); !elements_2_1.done; elements_2_1 = elements_2.next()) {
                            var el = elements_2_1.value;
                            var elementClassList = el.classList;
                            // css classes to add before the animation
                            if (addClasses) {
                                try {
                                    for (var addClasses_1 = (e_12 = void 0, __values(addClasses)), addClasses_1_1 = addClasses_1.next(); !addClasses_1_1.done; addClasses_1_1 = addClasses_1.next()) {
                                        var c = addClasses_1_1.value;
                                        // ******** DOM WRITE ****************
                                        elementClassList.add(c);
                                    }
                                }
                                catch (e_12_1) { e_12 = { error: e_12_1 }; }
                                finally {
                                    try {
                                        if (addClasses_1_1 && !addClasses_1_1.done && (_c = addClasses_1.return)) _c.call(addClasses_1);
                                    }
                                    finally { if (e_12) throw e_12.error; }
                                }
                            }
                            // css classes to remove before the animation
                            if (removeClasses) {
                                try {
                                    for (var removeClasses_1 = (e_13 = void 0, __values(removeClasses)), removeClasses_1_1 = removeClasses_1.next(); !removeClasses_1_1.done; removeClasses_1_1 = removeClasses_1.next()) {
                                        var c = removeClasses_1_1.value;
                                        // ******** DOM WRITE ****************
                                        elementClassList.remove(c);
                                    }
                                }
                                catch (e_13_1) { e_13 = { error: e_13_1 }; }
                                finally {
                                    try {
                                        if (removeClasses_1_1 && !removeClasses_1_1.done && (_d = removeClasses_1.return)) _d.call(removeClasses_1);
                                    }
                                    finally { if (e_13) throw e_13.error; }
                                }
                            }
                            // inline styles to add before the animation
                            if (this._beforeStyles) {
                                try {
                                    for (var _f = (e_14 = void 0, __values(Object.entries(this._beforeStyles))), _g = _f.next(); !_g.done; _g = _f.next()) {
                                        var _h = __read(_g.value, 2), key = _h[0], value = _h[1];
                                        // ******** DOM WRITE ****************
                                        el.style.setProperty(key, value);
                                    }
                                }
                                catch (e_14_1) { e_14 = { error: e_14_1 }; }
                                finally {
                                    try {
                                        if (_g && !_g.done && (_e = _f.return)) _e.call(_f);
                                    }
                                    finally { if (e_14) throw e_14.error; }
                                }
                            }
                        }
                    }
                    catch (e_11_1) { e_11 = { error: e_11_1 }; }
                    finally {
                        try {
                            if (elements_2_1 && !elements_2_1.done && (_b = elements_2.return)) _b.call(elements_2);
                        }
                        finally { if (e_11) throw e_11.error; }
                    }
                };
                /**
                 * DOM READ
                 * RECURSION
                 */
                Animator.prototype._fireBeforeReadFunc = function () {
                    var e_15, _a, e_16, _b;
                    var children = this._childAnimations;
                    if (children) {
                        try {
                            for (var children_8 = __values(children), children_8_1 = children_8.next(); !children_8_1.done; children_8_1 = children_8.next()) {
                                var child = children_8_1.value;
                                // ******** DOM READ ****************
                                child._fireBeforeReadFunc();
                            }
                        }
                        catch (e_15_1) { e_15 = { error: e_15_1 }; }
                        finally {
                            try {
                                if (children_8_1 && !children_8_1.done && (_a = children_8.return)) _a.call(children_8);
                            }
                            finally { if (e_15) throw e_15.error; }
                        }
                    }
                    var readFunctions = this._readCallbacks;
                    if (readFunctions) {
                        try {
                            for (var readFunctions_1 = __values(readFunctions), readFunctions_1_1 = readFunctions_1.next(); !readFunctions_1_1.done; readFunctions_1_1 = readFunctions_1.next()) {
                                var callback = readFunctions_1_1.value;
                                // ******** DOM READ ****************
                                callback();
                            }
                        }
                        catch (e_16_1) { e_16 = { error: e_16_1 }; }
                        finally {
                            try {
                                if (readFunctions_1_1 && !readFunctions_1_1.done && (_b = readFunctions_1.return)) _b.call(readFunctions_1);
                            }
                            finally { if (e_16) throw e_16.error; }
                        }
                    }
                };
                /**
                 * DOM WRITE
                 * RECURSION
                 */
                Animator.prototype._fireBeforeWriteFunc = function () {
                    var e_17, _a, e_18, _b;
                    var children = this._childAnimations;
                    if (children) {
                        try {
                            for (var children_9 = __values(children), children_9_1 = children_9.next(); !children_9_1.done; children_9_1 = children_9.next()) {
                                var child = children_9_1.value;
                                // ******** DOM WRITE ****************
                                child._fireBeforeWriteFunc();
                            }
                        }
                        catch (e_17_1) { e_17 = { error: e_17_1 }; }
                        finally {
                            try {
                                if (children_9_1 && !children_9_1.done && (_a = children_9.return)) _a.call(children_9);
                            }
                            finally { if (e_17) throw e_17.error; }
                        }
                    }
                    var writeFunctions = this._writeCallbacks;
                    if (writeFunctions) {
                        try {
                            for (var writeFunctions_1 = __values(writeFunctions), writeFunctions_1_1 = writeFunctions_1.next(); !writeFunctions_1_1.done; writeFunctions_1_1 = writeFunctions_1.next()) {
                                var callback = writeFunctions_1_1.value;
                                // ******** DOM WRITE ****************
                                callback();
                            }
                        }
                        catch (e_18_1) { e_18 = { error: e_18_1 }; }
                        finally {
                            try {
                                if (writeFunctions_1_1 && !writeFunctions_1_1.done && (_b = writeFunctions_1.return)) _b.call(writeFunctions_1);
                            }
                            finally { if (e_18) throw e_18.error; }
                        }
                    }
                };
                /**
                 * DOM WRITE
                 */
                Animator.prototype._setAfterStyles = function () {
                    var e_19, _a, e_20, _b, e_21, _c, e_22, _d, e_23, _e, e_24, _f, e_25, _g;
                    var elements = this._elements;
                    if (!elements) {
                        return;
                    }
                    try {
                        for (var elements_3 = __values(elements), elements_3_1 = elements_3.next(); !elements_3_1.done; elements_3_1 = elements_3.next()) {
                            var el = elements_3_1.value;
                            var elementClassList = el.classList;
                            // remove the transition duration/easing
                            // ******** DOM WRITE ****************
                            el.style.transitionDuration = el.style.transitionTimingFunction = '';
                            if (this._isReverse) {
                                // finished in reverse direction
                                // css classes that were added before the animation should be removed
                                var beforeAddClasses = this._beforeAddClasses;
                                if (beforeAddClasses) {
                                    try {
                                        for (var beforeAddClasses_1 = (e_20 = void 0, __values(beforeAddClasses)), beforeAddClasses_1_1 = beforeAddClasses_1.next(); !beforeAddClasses_1_1.done; beforeAddClasses_1_1 = beforeAddClasses_1.next()) {
                                            var c = beforeAddClasses_1_1.value;
                                            elementClassList.remove(c);
                                        }
                                    }
                                    catch (e_20_1) { e_20 = { error: e_20_1 }; }
                                    finally {
                                        try {
                                            if (beforeAddClasses_1_1 && !beforeAddClasses_1_1.done && (_b = beforeAddClasses_1.return)) _b.call(beforeAddClasses_1);
                                        }
                                        finally { if (e_20) throw e_20.error; }
                                    }
                                }
                                // css classes that were removed before the animation should be added
                                var beforeRemoveClasses = this._beforeRemoveClasses;
                                if (beforeRemoveClasses) {
                                    try {
                                        for (var beforeRemoveClasses_1 = (e_21 = void 0, __values(beforeRemoveClasses)), beforeRemoveClasses_1_1 = beforeRemoveClasses_1.next(); !beforeRemoveClasses_1_1.done; beforeRemoveClasses_1_1 = beforeRemoveClasses_1.next()) {
                                            var c = beforeRemoveClasses_1_1.value;
                                            elementClassList.add(c);
                                        }
                                    }
                                    catch (e_21_1) { e_21 = { error: e_21_1 }; }
                                    finally {
                                        try {
                                            if (beforeRemoveClasses_1_1 && !beforeRemoveClasses_1_1.done && (_c = beforeRemoveClasses_1.return)) _c.call(beforeRemoveClasses_1);
                                        }
                                        finally { if (e_21) throw e_21.error; }
                                    }
                                }
                                // inline styles that were added before the animation should be removed
                                var beforeStyles = this._beforeStyles;
                                if (beforeStyles) {
                                    try {
                                        for (var _h = (e_22 = void 0, __values(Object.keys(beforeStyles))), _j = _h.next(); !_j.done; _j = _h.next()) {
                                            var propName = _j.value;
                                            // ******** DOM WRITE ****************
                                            el.style.removeProperty(propName);
                                        }
                                    }
                                    catch (e_22_1) { e_22 = { error: e_22_1 }; }
                                    finally {
                                        try {
                                            if (_j && !_j.done && (_d = _h.return)) _d.call(_h);
                                        }
                                        finally { if (e_22) throw e_22.error; }
                                    }
                                }
                            }
                            else {
                                // finished in forward direction
                                // css classes to add after the animation
                                var afterAddClasses = this._afterAddClasses;
                                if (afterAddClasses) {
                                    try {
                                        for (var afterAddClasses_1 = (e_23 = void 0, __values(afterAddClasses)), afterAddClasses_1_1 = afterAddClasses_1.next(); !afterAddClasses_1_1.done; afterAddClasses_1_1 = afterAddClasses_1.next()) {
                                            var c = afterAddClasses_1_1.value;
                                            // ******** DOM WRITE ****************
                                            elementClassList.add(c);
                                        }
                                    }
                                    catch (e_23_1) { e_23 = { error: e_23_1 }; }
                                    finally {
                                        try {
                                            if (afterAddClasses_1_1 && !afterAddClasses_1_1.done && (_e = afterAddClasses_1.return)) _e.call(afterAddClasses_1);
                                        }
                                        finally { if (e_23) throw e_23.error; }
                                    }
                                }
                                // css classes to remove after the animation
                                var afterRemoveClasses = this._afterRemoveClasses;
                                if (afterRemoveClasses) {
                                    try {
                                        for (var afterRemoveClasses_1 = (e_24 = void 0, __values(afterRemoveClasses)), afterRemoveClasses_1_1 = afterRemoveClasses_1.next(); !afterRemoveClasses_1_1.done; afterRemoveClasses_1_1 = afterRemoveClasses_1.next()) {
                                            var c = afterRemoveClasses_1_1.value;
                                            // ******** DOM WRITE ****************
                                            elementClassList.remove(c);
                                        }
                                    }
                                    catch (e_24_1) { e_24 = { error: e_24_1 }; }
                                    finally {
                                        try {
                                            if (afterRemoveClasses_1_1 && !afterRemoveClasses_1_1.done && (_f = afterRemoveClasses_1.return)) _f.call(afterRemoveClasses_1);
                                        }
                                        finally { if (e_24) throw e_24.error; }
                                    }
                                }
                                // inline styles to add after the animation
                                var afterStyles = this._afterStyles;
                                if (afterStyles) {
                                    try {
                                        for (var _k = (e_25 = void 0, __values(Object.entries(afterStyles))), _l = _k.next(); !_l.done; _l = _k.next()) {
                                            var _m = __read(_l.value, 2), key = _m[0], value = _m[1];
                                            el.style.setProperty(key, value);
                                        }
                                    }
                                    catch (e_25_1) { e_25 = { error: e_25_1 }; }
                                    finally {
                                        try {
                                            if (_l && !_l.done && (_g = _k.return)) _g.call(_k);
                                        }
                                        finally { if (e_25) throw e_25.error; }
                                    }
                                }
                            }
                        }
                    }
                    catch (e_19_1) { e_19 = { error: e_19_1 }; }
                    finally {
                        try {
                            if (elements_3_1 && !elements_3_1.done && (_a = elements_3.return)) _a.call(elements_3);
                        }
                        finally { if (e_19) throw e_19.error; }
                    }
                };
                /**
                 * DOM WRITE
                 * NO RECURSION
                 */
                Animator.prototype._willChange = function (addWillChange) {
                    var e_26, _a, e_27, _b;
                    var wc;
                    var effects = this._fxProperties;
                    var willChange;
                    if (addWillChange && effects) {
                        wc = [];
                        try {
                            for (var effects_1 = __values(effects), effects_1_1 = effects_1.next(); !effects_1_1.done; effects_1_1 = effects_1.next()) {
                                var effect = effects_1_1.value;
                                var propWC = effect.wc;
                                if (propWC === 'webkitTransform') {
                                    wc.push('transform', '-webkit-transform');
                                }
                                else if (propWC !== undefined) {
                                    wc.push(propWC);
                                }
                            }
                        }
                        catch (e_26_1) { e_26 = { error: e_26_1 }; }
                        finally {
                            try {
                                if (effects_1_1 && !effects_1_1.done && (_a = effects_1.return)) _a.call(effects_1);
                            }
                            finally { if (e_26) throw e_26.error; }
                        }
                        willChange = wc.join(',');
                    }
                    else {
                        willChange = '';
                    }
                    var elements = this._elements;
                    if (elements) {
                        try {
                            for (var elements_4 = __values(elements), elements_4_1 = elements_4.next(); !elements_4_1.done; elements_4_1 = elements_4.next()) {
                                var el = elements_4_1.value;
                                // ******** DOM WRITE ****************
                                el.style.setProperty('will-change', willChange);
                            }
                        }
                        catch (e_27_1) { e_27 = { error: e_27_1 }; }
                        finally {
                            try {
                                if (elements_4_1 && !elements_4_1.done && (_b = elements_4.return)) _b.call(elements_4);
                            }
                            finally { if (e_27) throw e_27.error; }
                        }
                    }
                };
                /**
                 * Start the animation with a user controlled progress.
                 */
                Animator.prototype.progressStart = function () {
                    // ensure all past transition end events have been cleared
                    this._clearAsync();
                    // ******** DOM READ/WRITE ****************
                    this._beforeAnimation();
                    // ******** DOM WRITE ****************
                    this._progressStart();
                };
                /**
                 * DOM WRITE
                 * RECURSION
                 */
                Animator.prototype._progressStart = function () {
                    var e_28, _a;
                    var children = this._childAnimations;
                    if (children) {
                        try {
                            for (var children_10 = __values(children), children_10_1 = children_10.next(); !children_10_1.done; children_10_1 = children_10.next()) {
                                var child = children_10_1.value;
                                // ******** DOM WRITE ****************
                                child._progressStart();
                            }
                        }
                        catch (e_28_1) { e_28 = { error: e_28_1 }; }
                        finally {
                            try {
                                if (children_10_1 && !children_10_1.done && (_a = children_10.return)) _a.call(children_10);
                            }
                            finally { if (e_28) throw e_28.error; }
                        }
                    }
                    // force no duration, linear easing
                    // ******** DOM WRITE ****************
                    this._setTrans(0, true);
                    // ******** DOM WRITE ****************
                    this._willChange(true);
                };
                /**
                 * Set the progress step for this animation.
                 * progressStep() is not debounced, so it should not be called faster than 60FPS.
                 */
                Animator.prototype.progressStep = function (stepValue) {
                    var e_29, _a;
                    // only update if the last update was more than 16ms ago
                    stepValue = Math.min(1, Math.max(0, stepValue));
                    var children = this._childAnimations;
                    if (children) {
                        try {
                            for (var children_11 = __values(children), children_11_1 = children_11.next(); !children_11_1.done; children_11_1 = children_11.next()) {
                                var child = children_11_1.value;
                                // ******** DOM WRITE ****************
                                child.progressStep(stepValue);
                            }
                        }
                        catch (e_29_1) { e_29 = { error: e_29_1 }; }
                        finally {
                            try {
                                if (children_11_1 && !children_11_1.done && (_a = children_11.return)) _a.call(children_11);
                            }
                            finally { if (e_29) throw e_29.error; }
                        }
                    }
                    // ******** DOM WRITE ****************
                    this._progress(stepValue);
                };
                /**
                 * End the progress animation.
                 */
                Animator.prototype.progressEnd = function (shouldComplete, currentStepValue, dur) {
                    var _this = this;
                    if (dur === void 0) { dur = -1; }
                    if (this._isReverse) {
                        // if the animation is going in reverse then
                        // flip the step value: 0 becomes 1, 1 becomes 0
                        currentStepValue = 1 - currentStepValue;
                    }
                    var stepValue = shouldComplete ? 1 : 0;
                    var diff = Math.abs(currentStepValue - stepValue);
                    if (dur < 0) {
                        dur = this._duration || 0;
                    }
                    else if (diff < 0.05) {
                        dur = 0;
                    }
                    this._isAsync = (dur > 30);
                    this._progressEnd(shouldComplete, stepValue, dur, this._isAsync);
                    if (this._isAsync) {
                        // for the root animation only
                        // set the async TRANSITION END event
                        // and run onFinishes when the transition ends
                        // ******** DOM WRITE ****************
                        this._asyncEnd(dur, shouldComplete);
                        // this animation has a duration so we need another RAF
                        // for the CSS TRANSITION properties to kick in
                        if (!this._destroyed) {
                            raf(function () {
                                _this._playToStep(stepValue);
                            });
                        }
                    }
                };
                /**
                 * DOM WRITE
                 * RECURSION
                 */
                Animator.prototype._progressEnd = function (shouldComplete, stepValue, dur, isAsync) {
                    var e_30, _a;
                    var children = this._childAnimations;
                    if (children) {
                        try {
                            for (var children_12 = __values(children), children_12_1 = children_12.next(); !children_12_1.done; children_12_1 = children_12.next()) {
                                var child = children_12_1.value;
                                // ******** DOM WRITE ****************
                                child._progressEnd(shouldComplete, stepValue, dur, isAsync);
                            }
                        }
                        catch (e_30_1) { e_30 = { error: e_30_1 }; }
                        finally {
                            try {
                                if (children_12_1 && !children_12_1.done && (_a = children_12.return)) _a.call(children_12);
                            }
                            finally { if (e_30) throw e_30.error; }
                        }
                    }
                    if (!isAsync) {
                        // stop immediately
                        // set all the animations to their final position
                        // ******** DOM WRITE ****************
                        this._progress(stepValue);
                        this._willChange(false);
                        this._setAfterStyles();
                        this._didFinish(shouldComplete);
                    }
                    else {
                        // animate it back to it's ending position
                        this.isPlaying = true;
                        this.hasCompleted = false;
                        this._hasDur = true;
                        // ******** DOM WRITE ****************
                        this._willChange(true);
                        this._setTrans(dur, false);
                    }
                };
                /**
                 * Add a callback to fire when the animation has finished.
                 */
                Animator.prototype.onFinish = function (callback, opts) {
                    if (opts && opts.clearExistingCallbacks) {
                        this._onFinishCallbacks = this._onFinishOneTimeCallbacks = undefined;
                    }
                    if (opts && opts.oneTimeCallback) {
                        this._onFinishOneTimeCallbacks = this._onFinishOneTimeCallbacks || [];
                        this._onFinishOneTimeCallbacks.push(callback);
                    }
                    else {
                        this._onFinishCallbacks = this._onFinishCallbacks || [];
                        this._onFinishCallbacks.push(callback);
                    }
                    return this;
                };
                /**
                 * NO DOM
                 * RECURSION
                 */
                Animator.prototype._didFinishAll = function (hasCompleted, finishAsyncAnimations, finishNoDurationAnimations) {
                    var e_31, _a;
                    var children = this._childAnimations;
                    if (children) {
                        try {
                            for (var children_13 = __values(children), children_13_1 = children_13.next(); !children_13_1.done; children_13_1 = children_13.next()) {
                                var child = children_13_1.value;
                                child._didFinishAll(hasCompleted, finishAsyncAnimations, finishNoDurationAnimations);
                            }
                        }
                        catch (e_31_1) { e_31 = { error: e_31_1 }; }
                        finally {
                            try {
                                if (children_13_1 && !children_13_1.done && (_a = children_13.return)) _a.call(children_13);
                            }
                            finally { if (e_31) throw e_31.error; }
                        }
                    }
                    if (finishAsyncAnimations && this._isAsync || finishNoDurationAnimations && !this._isAsync) {
                        this._didFinish(hasCompleted);
                    }
                };
                /**
                 * NO RECURSION
                 */
                Animator.prototype._didFinish = function (hasCompleted) {
                    var e_32, _a, e_33, _b;
                    this.isPlaying = false;
                    this.hasCompleted = hasCompleted;
                    if (this._onFinishCallbacks) {
                        try {
                            // run all finish callbacks
                            for (var _c = __values(this._onFinishCallbacks), _d = _c.next(); !_d.done; _d = _c.next()) {
                                var callback = _d.value;
                                callback(this);
                            }
                        }
                        catch (e_32_1) { e_32 = { error: e_32_1 }; }
                        finally {
                            try {
                                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                            }
                            finally { if (e_32) throw e_32.error; }
                        }
                    }
                    if (this._onFinishOneTimeCallbacks) {
                        try {
                            // run all "onetime" finish callbacks
                            for (var _e = __values(this._onFinishOneTimeCallbacks), _f = _e.next(); !_f.done; _f = _e.next()) {
                                var callback = _f.value;
                                callback(this);
                            }
                        }
                        catch (e_33_1) { e_33 = { error: e_33_1 }; }
                        finally {
                            try {
                                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                            }
                            finally { if (e_33) throw e_33.error; }
                        }
                        this._onFinishOneTimeCallbacks.length = 0;
                    }
                };
                /**
                 * Reverse the animation.
                 */
                Animator.prototype.reverse = function (shouldReverse) {
                    var e_34, _a;
                    if (shouldReverse === void 0) { shouldReverse = true; }
                    var children = this._childAnimations;
                    if (children) {
                        try {
                            for (var children_14 = __values(children), children_14_1 = children_14.next(); !children_14_1.done; children_14_1 = children_14.next()) {
                                var child = children_14_1.value;
                                child.reverse(shouldReverse);
                            }
                        }
                        catch (e_34_1) { e_34 = { error: e_34_1 }; }
                        finally {
                            try {
                                if (children_14_1 && !children_14_1.done && (_a = children_14.return)) _a.call(children_14);
                            }
                            finally { if (e_34) throw e_34.error; }
                        }
                    }
                    this._isReverse = !!shouldReverse;
                    return this;
                };
                /**
                 * Recursively destroy this animation and all child animations.
                 */
                Animator.prototype.destroy = function () {
                    var e_35, _a;
                    this._didFinish(false);
                    this._destroyed = true;
                    var children = this._childAnimations;
                    if (children) {
                        try {
                            for (var children_15 = __values(children), children_15_1 = children_15.next(); !children_15_1.done; children_15_1 = children_15.next()) {
                                var child = children_15_1.value;
                                child.destroy();
                            }
                        }
                        catch (e_35_1) { e_35 = { error: e_35_1 }; }
                        finally {
                            try {
                                if (children_15_1 && !children_15_1.done && (_a = children_15.return)) _a.call(children_15);
                            }
                            finally { if (e_35) throw e_35.error; }
                        }
                    }
                    this._clearAsync();
                    if (this._elements) {
                        this._elements.length = 0;
                    }
                    if (this._readCallbacks) {
                        this._readCallbacks.length = 0;
                    }
                    if (this._writeCallbacks) {
                        this._writeCallbacks.length = 0;
                    }
                    this.parent = undefined;
                    if (this._childAnimations) {
                        this._childAnimations.length = 0;
                    }
                    if (this._onFinishCallbacks) {
                        this._onFinishCallbacks.length = 0;
                    }
                    if (this._onFinishOneTimeCallbacks) {
                        this._onFinishOneTimeCallbacks.length = 0;
                    }
                };
                /**
                 * NO DOM
                 */
                Animator.prototype._transEl = function () {
                    var e_36, _a;
                    // get the lowest level element that has an Animator
                    var children = this._childAnimations;
                    if (children) {
                        try {
                            for (var children_16 = __values(children), children_16_1 = children_16.next(); !children_16_1.done; children_16_1 = children_16.next()) {
                                var child = children_16_1.value;
                                var targetEl = child._transEl();
                                if (targetEl) {
                                    return targetEl;
                                }
                            }
                        }
                        catch (e_36_1) { e_36 = { error: e_36_1 }; }
                        finally {
                            try {
                                if (children_16_1 && !children_16_1.done && (_a = children_16.return)) _a.call(children_16);
                            }
                            finally { if (e_36) throw e_36.error; }
                        }
                    }
                    return (this._hasTweenEffect &&
                        this._hasDur &&
                        this._elements !== undefined &&
                        this._elements.length > 0 ?
                        this._elements[0] : null);
                };
                return Animator;
            }());
            var create = function (animationBuilder, baseEl, opts) {
                if (animationBuilder) {
                    return animationBuilder(Animator, baseEl, opts);
                }
                return Promise.resolve(new Animator());
            };
            /***/ 
        })
    }]);
//# sourceMappingURL=index-69c37885-js-es2015.js.map
//# sourceMappingURL=index-69c37885-js-es5.js.map
//# sourceMappingURL=index-69c37885-js-es5.js.map