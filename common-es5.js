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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
        /***/ "./node_modules/@ionic/core/dist/esm/cubic-bezier-2812fda3.js": 
        /*!********************************************************************!*\
          !*** ./node_modules/@ionic/core/dist/esm/cubic-bezier-2812fda3.js ***!
          \********************************************************************/
        /*! exports provided: P, g */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function () { return Point; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function () { return getTimeGivenProgression; });
            /**
             * Based on:
             * https://stackoverflow.com/questions/7348009/y-coordinate-for-a-given-x-cubic-bezier
             * https://math.stackexchange.com/questions/26846/is-there-an-explicit-form-for-cubic-b%C3%A9zier-curves
             * TODO: Reduce rounding error
             */
            var Point = /** @class */ (function () {
                function Point(x, y) {
                    this.x = x;
                    this.y = y;
                }
                return Point;
            }());
            /**
             * Given a cubic-bezier curve, get the x value (time) given
             * the y value (progression).
             * Ex: cubic-bezier(0.32, 0.72, 0, 1);
             * P0: (0, 0)
             * P1: (0.32, 0.72)
             * P2: (0, 1)
             * P3: (1, 1)
             *
             * If you give a cubic bezier curve that never reaches the
             * provided progression, this function will return NaN.
             */
            var getTimeGivenProgression = function (p0, p1, p2, p3, progression) {
                var tValues = solveCubicBezier(p0.y, p1.y, p2.y, p3.y, progression);
                return solveCubicParametricEquation(p0.x, p1.x, p2.x, p3.x, tValues[0]); // TODO: Add better strategy for dealing with multiple solutions
            };
            /**
             * Solve a cubic equation in one dimension (time)
             */
            var solveCubicParametricEquation = function (p0, p1, p2, p3, t) {
                var partA = (3 * p1) * Math.pow(t - 1, 2);
                var partB = (-3 * p2 * t) + (3 * p2) + (p3 * t);
                var partC = p0 * Math.pow(t - 1, 3);
                return t * (partA + (t * partB)) - partC;
            };
            /**
             * Find the `t` value for a cubic bezier using Cardano's formula
             */
            var solveCubicBezier = function (p0, p1, p2, p3, refPoint) {
                p0 -= refPoint;
                p1 -= refPoint;
                p2 -= refPoint;
                p3 -= refPoint;
                var roots = solveCubicEquation(p3 - 3 * p2 + 3 * p1 - p0, 3 * p2 - 6 * p1 + 3 * p0, 3 * p1 - 3 * p0, p0);
                return roots.filter(function (root) { return root >= 0 && root <= 1; });
            };
            var solveQuadraticEquation = function (a, b, c) {
                var discriminant = b * b - 4 * a * c;
                if (discriminant < 0) {
                    return [];
                }
                else {
                    return [
                        (-b + Math.sqrt(discriminant)) / (2 * a),
                        (-b - Math.sqrt(discriminant)) / (2 * a)
                    ];
                }
            };
            var solveCubicEquation = function (a, b, c, d) {
                if (a === 0) {
                    return solveQuadraticEquation(b, c, d);
                }
                b /= a;
                c /= a;
                d /= a;
                var p = (3 * c - b * b) / 3;
                var q = (2 * b * b * b - 9 * b * c + 27 * d) / 27;
                if (p === 0) {
                    return [Math.pow(-q, 1 / 3)];
                }
                else if (q === 0) {
                    return [Math.sqrt(-p), -Math.sqrt(-p)];
                }
                var discriminant = Math.pow(q / 2, 2) + Math.pow(p / 3, 3);
                if (discriminant === 0) {
                    return [Math.pow(q / 2, 1 / 2) - b / 3];
                }
                else if (discriminant > 0) {
                    return [Math.pow(-(q / 2) + Math.sqrt(discriminant), 1 / 3) - Math.pow((q / 2) + Math.sqrt(discriminant), 1 / 3) - b / 3];
                }
                var r = Math.sqrt(Math.pow(-(p / 3), 3));
                var phi = Math.acos(-(q / (2 * Math.sqrt(Math.pow(-(p / 3), 3)))));
                var s = 2 * Math.pow(r, 1 / 3);
                return [
                    s * Math.cos(phi / 3) - b / 3,
                    s * Math.cos((phi + 2 * Math.PI) / 3) - b / 3,
                    s * Math.cos((phi + 4 * Math.PI) / 3) - b / 3
                ];
            };
            /***/ 
        }),
        /***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js": 
        /*!**************************************************************************!*\
          !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js ***!
          \**************************************************************************/
        /*! exports provided: a, d */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            var _this = this;
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return attachComponent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function () { return detachComponent; });
            var attachComponent = function (delegate, container, component, cssClasses, componentProps) { return __awaiter(_this, void 0, void 0, function () {
                var el;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (delegate) {
                                return [2 /*return*/, delegate.attachViewToDom(container, component, componentProps, cssClasses)];
                            }
                            if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
                                throw new Error('framework delegate is missing');
                            }
                            el = (typeof component === 'string')
                                ? container.ownerDocument && container.ownerDocument.createElement(component)
                                : component;
                            if (cssClasses) {
                                cssClasses.forEach(function (c) { return el.classList.add(c); });
                            }
                            if (componentProps) {
                                Object.assign(el, componentProps);
                            }
                            container.appendChild(el);
                            if (!el.componentOnReady) return [3 /*break*/, 2];
                            return [4 /*yield*/, el.componentOnReady()];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2: return [2 /*return*/, el];
                    }
                });
            }); };
            var detachComponent = function (delegate, element) {
                if (element) {
                    if (delegate) {
                        var container = element.parentElement;
                        return delegate.removeViewFromDom(container, element);
                    }
                    element.remove();
                }
                return Promise.resolve();
            };
            /***/ 
        }),
        /***/ "./node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js": 
        /*!**************************************************************!*\
          !*** ./node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js ***!
          \**************************************************************/
        /*! exports provided: a, b, c, h */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return hapticSelectionStart; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function () { return hapticSelectionChanged; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function () { return hapticSelectionEnd; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function () { return hapticSelection; });
            /**
             * Check to see if the Haptic Plugin is available
             * @return Returns `true` or false if the plugin is available
             */
            /**
             * Trigger a selection changed haptic event. Good for one-time events
             * (not for gestures)
             */
            var hapticSelection = function () {
                var engine = window.TapticEngine;
                if (engine) {
                    engine.selection();
                }
            };
            /**
             * Tell the haptic engine that a gesture for a selection change is starting.
             */
            var hapticSelectionStart = function () {
                var engine = window.TapticEngine;
                if (engine) {
                    engine.gestureSelectionStart();
                }
            };
            /**
             * Tell the haptic engine that a selection changed during a gesture.
             */
            var hapticSelectionChanged = function () {
                var engine = window.TapticEngine;
                if (engine) {
                    engine.gestureSelectionChanged();
                }
            };
            /**
             * Tell the haptic engine we are done with a gesture. This needs to be
             * called lest resources are not properly recycled.
             */
            var hapticSelectionEnd = function () {
                var engine = window.TapticEngine;
                if (engine) {
                    engine.gestureSelectionEnd();
                }
            };
            /***/ 
        }),
        /***/ "./node_modules/@ionic/core/dist/esm/index-3476b023.js": 
        /*!*************************************************************!*\
          !*** ./node_modules/@ionic/core/dist/esm/index-3476b023.js ***!
          \*************************************************************/
        /*! exports provided: s */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function () { return sanitizeDOMString; });
            /**
             * Does a simple sanitization of all elements
             * in an untrusted string
             */
            var sanitizeDOMString = function (untrustedString) {
                try {
                    if (typeof untrustedString !== 'string' || untrustedString === '') {
                        return untrustedString;
                    }
                    /**
                     * Create a document fragment
                     * separate from the main DOM,
                     * create a div to do our work in
                     */
                    var documentFragment_1 = document.createDocumentFragment();
                    var workingDiv = document.createElement('div');
                    documentFragment_1.appendChild(workingDiv);
                    workingDiv.innerHTML = untrustedString;
                    /**
                     * Remove any elements
                     * that are blocked
                     */
                    blockedTags.forEach(function (blockedTag) {
                        var getElementsToRemove = documentFragment_1.querySelectorAll(blockedTag);
                        for (var elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
                            var element = getElementsToRemove[elementIndex];
                            if (element.parentNode) {
                                element.parentNode.removeChild(element);
                            }
                            else {
                                documentFragment_1.removeChild(element);
                            }
                            /**
                             * We still need to sanitize
                             * the children of this element
                             * as they are left behind
                             */
                            var childElements = getElementChildren(element);
                            /* tslint:disable-next-line */
                            for (var childIndex = 0; childIndex < childElements.length; childIndex++) {
                                sanitizeElement(childElements[childIndex]);
                            }
                        }
                    });
                    /**
                     * Go through remaining elements and remove
                     * non-allowed attribs
                     */
                    // IE does not support .children on document fragments, only .childNodes
                    var dfChildren = getElementChildren(documentFragment_1);
                    /* tslint:disable-next-line */
                    for (var childIndex = 0; childIndex < dfChildren.length; childIndex++) {
                        sanitizeElement(dfChildren[childIndex]);
                    }
                    // Append document fragment to div
                    var fragmentDiv = document.createElement('div');
                    fragmentDiv.appendChild(documentFragment_1);
                    // First child is always the div we did our work in
                    var getInnerDiv = fragmentDiv.querySelector('div');
                    return (getInnerDiv !== null) ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
                }
                catch (err) {
                    console.error(err);
                    return '';
                }
            };
            /**
             * Clean up current element based on allowed attributes
             * and then recursively dig down into any child elements to
             * clean those up as well
             */
            var sanitizeElement = function (element) {
                // IE uses childNodes, so ignore nodes that are not elements
                if (element.nodeType && element.nodeType !== 1) {
                    return;
                }
                for (var i = element.attributes.length - 1; i >= 0; i--) {
                    var attribute = element.attributes.item(i);
                    var attributeName = attribute.name;
                    // remove non-allowed attribs
                    if (!allowedAttributes.includes(attributeName.toLowerCase())) {
                        element.removeAttribute(attributeName);
                        continue;
                    }
                    // clean up any allowed attribs
                    // that attempt to do any JS funny-business
                    var attributeValue = attribute.value;
                    /* tslint:disable-next-line */
                    if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
                        element.removeAttribute(attributeName);
                    }
                }
                /**
                 * Sanitize any nested children
                 */
                var childElements = getElementChildren(element);
                /* tslint:disable-next-line */
                for (var i = 0; i < childElements.length; i++) {
                    sanitizeElement(childElements[i]);
                }
            };
            /**
             * IE doesn't always support .children
             * so we revert to .childNodes instead
             */
            var getElementChildren = function (el) {
                return (el.children != null) ? el.children : el.childNodes;
            };
            var allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
            var blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];
            /***/ 
        }),
        /***/ "./node_modules/@ionic/core/dist/esm/index-4d91f03a.js": 
        /*!*************************************************************!*\
          !*** ./node_modules/@ionic/core/dist/esm/index-4d91f03a.js ***!
          \*************************************************************/
        /*! exports provided: d, g, l, s, t */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            var _this = this;
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function () { return deepReady; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function () { return getIonPageElement; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function () { return lifecycle; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function () { return setPageHidden; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function () { return transition; });
            /* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm/core-feeeff0d.js");
            /* harmony import */ var _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants-3c3e1099.js */ "./node_modules/@ionic/core/dist/esm/constants-3c3e1099.js");
            var iosTransitionAnimation = function () { return __webpack_require__.e(/*! import() | ios-transition-504cdd09-js */ "ios-transition-504cdd09-js").then(__webpack_require__.bind(null, /*! ./ios.transition-504cdd09.js */ "./node_modules/@ionic/core/dist/esm/ios.transition-504cdd09.js")); };
            var mdTransitionAnimation = function () { return __webpack_require__.e(/*! import() | md-transition-fea2bbfb-js */ "md-transition-fea2bbfb-js").then(__webpack_require__.bind(null, /*! ./md.transition-fea2bbfb.js */ "./node_modules/@ionic/core/dist/esm/md.transition-fea2bbfb.js")); };
            var transition = function (opts) {
                return new Promise(function (resolve, reject) {
                    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["w"])(function () {
                        beforeTransition(opts);
                        runTransition(opts).then(function (result) {
                            if (result.animation) {
                                result.animation.destroy();
                            }
                            afterTransition(opts);
                            resolve(result);
                        }, function (error) {
                            afterTransition(opts);
                            reject(error);
                        });
                    });
                });
            };
            var beforeTransition = function (opts) {
                var enteringEl = opts.enteringEl;
                var leavingEl = opts.leavingEl;
                setZIndex(enteringEl, leavingEl, opts.direction);
                if (opts.showGoBack) {
                    enteringEl.classList.add('can-go-back');
                }
                else {
                    enteringEl.classList.remove('can-go-back');
                }
                setPageHidden(enteringEl, false);
                if (leavingEl) {
                    setPageHidden(leavingEl, false);
                }
            };
            var runTransition = function (opts) { return __awaiter(_this, void 0, void 0, function () {
                var animationBuilder, ani;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, getAnimationBuilder(opts)];
                        case 1:
                            animationBuilder = _a.sent();
                            ani = (animationBuilder)
                                ? animation(animationBuilder, opts)
                                : noAnimation(opts);
                            return [2 /*return*/, ani];
                    }
                });
            }); };
            var afterTransition = function (opts) {
                var enteringEl = opts.enteringEl;
                var leavingEl = opts.leavingEl;
                enteringEl.classList.remove('ion-page-invisible');
                if (leavingEl !== undefined) {
                    leavingEl.classList.remove('ion-page-invisible');
                }
            };
            var getAnimationBuilder = function (opts) { return __awaiter(_this, void 0, void 0, function () {
                var getAnimation, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!opts.leavingEl || !opts.animated || opts.duration === 0) {
                                return [2 /*return*/, undefined];
                            }
                            if (opts.animationBuilder) {
                                return [2 /*return*/, opts.animationBuilder];
                            }
                            if (!(opts.mode === 'ios')) return [3 /*break*/, 2];
                            return [4 /*yield*/, iosTransitionAnimation()];
                        case 1:
                            _a = (_b.sent()).iosTransitionAnimation;
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, mdTransitionAnimation()];
                        case 3:
                            _a = (_b.sent()).mdTransitionAnimation;
                            _b.label = 4;
                        case 4:
                            getAnimation = _a;
                            return [2 /*return*/, getAnimation];
                    }
                });
            }); };
            var animation = function (animationBuilder, opts) { return __awaiter(_this, void 0, void 0, function () {
                var trans, mod, err_1, didComplete;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, waitForReady(opts, true)];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, 5, , 6]);
                            return [4 /*yield*/, __webpack_require__.e(/*! import() | index-69c37885-js */ "index-69c37885-js").then(__webpack_require__.bind(null, /*! ./index-69c37885.js */ "./node_modules/@ionic/core/dist/esm/index-69c37885.js"))];
                        case 3:
                            mod = _a.sent();
                            return [4 /*yield*/, mod.create(animationBuilder, opts.baseEl, opts)];
                        case 4:
                            trans = _a.sent();
                            return [3 /*break*/, 6];
                        case 5:
                            err_1 = _a.sent();
                            trans = animationBuilder(opts.baseEl, opts);
                            return [3 /*break*/, 6];
                        case 6:
                            fireWillEvents(opts.enteringEl, opts.leavingEl);
                            return [4 /*yield*/, playTransition(trans, opts)];
                        case 7:
                            didComplete = _a.sent();
                            if (opts.progressCallback) {
                                opts.progressCallback(undefined);
                            }
                            if (didComplete) {
                                fireDidEvents(opts.enteringEl, opts.leavingEl);
                            }
                            return [2 /*return*/, {
                                    hasCompleted: didComplete,
                                    animation: trans
                                }];
                    }
                });
            }); };
            var noAnimation = function (opts) { return __awaiter(_this, void 0, void 0, function () {
                var enteringEl, leavingEl;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            enteringEl = opts.enteringEl;
                            leavingEl = opts.leavingEl;
                            return [4 /*yield*/, waitForReady(opts, false)];
                        case 1:
                            _a.sent();
                            fireWillEvents(enteringEl, leavingEl);
                            fireDidEvents(enteringEl, leavingEl);
                            return [2 /*return*/, {
                                    hasCompleted: true
                                }];
                    }
                });
            }); };
            var waitForReady = function (opts, defaultDeep) { return __awaiter(_this, void 0, void 0, function () {
                var deep, promises;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            deep = opts.deepWait !== undefined ? opts.deepWait : defaultDeep;
                            promises = deep ? [
                                deepReady(opts.enteringEl),
                                deepReady(opts.leavingEl),
                            ] : [
                                shallowReady(opts.enteringEl),
                                shallowReady(opts.leavingEl),
                            ];
                            return [4 /*yield*/, Promise.all(promises)];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, notifyViewReady(opts.viewIsReady, opts.enteringEl)];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); };
            var notifyViewReady = function (viewIsReady, enteringEl) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!viewIsReady) return [3 /*break*/, 2];
                            return [4 /*yield*/, viewIsReady(enteringEl)];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            }); };
            var playTransition = function (trans, opts) {
                var progressCallback = opts.progressCallback;
                // TODO: Remove AnimationBuilder
                var promise = new Promise(function (resolve) {
                    trans.onFinish(function (currentStep) {
                        if (typeof currentStep === 'number') {
                            resolve(currentStep === 1);
                        }
                        else if (trans.hasCompleted !== undefined) {
                            resolve(trans.hasCompleted);
                        }
                    });
                });
                // cool, let's do this, start the transition
                if (progressCallback) {
                    // this is a swipe to go back, just get the transition progress ready
                    // kick off the swipe animation start
                    trans.progressStart(true);
                    progressCallback(trans);
                }
                else {
                    // only the top level transition should actually start "play"
                    // kick it off and let it play through
                    // ******** DOM WRITE ****************
                    trans.play();
                }
                // create a callback for when the animation is done
                return promise;
            };
            var fireWillEvents = function (enteringEl, leavingEl) {
                lifecycle(leavingEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["b"]);
                lifecycle(enteringEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["L"]);
            };
            var fireDidEvents = function (enteringEl, leavingEl) {
                lifecycle(enteringEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["a"]);
                lifecycle(leavingEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["c"]);
            };
            var lifecycle = function (el, eventName) {
                if (el) {
                    var ev = new CustomEvent(eventName, {
                        bubbles: false,
                        cancelable: false,
                    });
                    el.dispatchEvent(ev);
                }
            };
            var shallowReady = function (el) {
                if (el && el.componentOnReady) {
                    return el.componentOnReady();
                }
                return Promise.resolve();
            };
            var deepReady = function (el) { return __awaiter(_this, void 0, void 0, function () {
                var element, stencilEl;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            element = el;
                            if (!element) return [3 /*break*/, 4];
                            if (!(element.componentOnReady != null)) return [3 /*break*/, 2];
                            return [4 /*yield*/, element.componentOnReady()];
                        case 1:
                            stencilEl = _a.sent();
                            if (stencilEl != null) {
                                return [2 /*return*/];
                            }
                            _a.label = 2;
                        case 2: return [4 /*yield*/, Promise.all(Array.from(element.children).map(deepReady))];
                        case 3:
                            _a.sent();
                            _a.label = 4;
                        case 4: return [2 /*return*/];
                    }
                });
            }); };
            var setPageHidden = function (el, hidden) {
                if (hidden) {
                    el.setAttribute('aria-hidden', 'true');
                    el.classList.add('ion-page-hidden');
                }
                else {
                    el.hidden = false;
                    el.removeAttribute('aria-hidden');
                    el.classList.remove('ion-page-hidden');
                }
            };
            var setZIndex = function (enteringEl, leavingEl, direction) {
                if (enteringEl !== undefined) {
                    enteringEl.style.zIndex = (direction === 'back')
                        ? '99'
                        : '101';
                }
                if (leavingEl !== undefined) {
                    leavingEl.style.zIndex = '100';
                }
            };
            var getIonPageElement = function (element) {
                if (element.classList.contains('ion-page')) {
                    return element;
                }
                var ionPage = element.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs');
                if (ionPage) {
                    return ionPage;
                }
                // idk, return the original element so at least something animates and we don't have a null pointer
                return element;
            };
            /***/ 
        }),
        /***/ "./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js": 
        /*!*************************************************************!*\
          !*** ./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js ***!
          \*************************************************************/
        /*! exports provided: c, g, h, o */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            var _this = this;
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function () { return createColorClasses; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function () { return getClassMap; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function () { return hostContext; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function () { return openURL; });
            var hostContext = function (selector, el) {
                return el.closest(selector) !== null;
            };
            /**
             * Create the mode and color classes for the component based on the classes passed in
             */
            var createColorClasses = function (color) {
                var _a;
                return (typeof color === 'string' && color.length > 0) ? (_a = {
                        'ion-color': true
                    },
                    _a["ion-color-" + color] = true,
                    _a) : undefined;
            };
            var getClassList = function (classes) {
                if (classes !== undefined) {
                    var array = Array.isArray(classes) ? classes : classes.split(' ');
                    return array
                        .filter(function (c) { return c != null; })
                        .map(function (c) { return c.trim(); })
                        .filter(function (c) { return c !== ''; });
                }
                return [];
            };
            var getClassMap = function (classes) {
                var map = {};
                getClassList(classes).forEach(function (c) { return map[c] = true; });
                return map;
            };
            var SCHEME = /^[a-z][a-z0-9+\-.]*:/;
            var openURL = function (url, ev, direction) { return __awaiter(_this, void 0, void 0, function () {
                var router;
                return __generator(this, function (_a) {
                    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
                        router = document.querySelector('ion-router');
                        if (router) {
                            if (ev != null) {
                                ev.preventDefault();
                            }
                            return [2 /*return*/, router.push(url, direction)];
                        }
                    }
                    return [2 /*return*/, false];
                });
            }); };
            /***/ 
        }),
        /***/ "./node_modules/@ionic/core/dist/esm/watch-options-2af96011.js": 
        /*!*********************************************************************!*\
          !*** ./node_modules/@ionic/core/dist/esm/watch-options-2af96011.js ***!
          \*********************************************************************/
        /*! exports provided: f, w */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function () { return findCheckedOption; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function () { return watchForOptions; });
            var watchForOptions = function (containerEl, tagName, onChange) {
                var mutation = new MutationObserver(function (mutationList) {
                    onChange(getSelectedOption(mutationList, tagName));
                });
                mutation.observe(containerEl, {
                    childList: true,
                    subtree: true
                });
                return mutation;
            };
            var getSelectedOption = function (mutationList, tagName) {
                var newOption;
                mutationList.forEach(function (mut) {
                    // tslint:disable-next-line: prefer-for-of
                    for (var i = 0; i < mut.addedNodes.length; i++) {
                        newOption = findCheckedOption(mut.addedNodes[i], tagName) || newOption;
                    }
                });
                return newOption;
            };
            var findCheckedOption = function (el, tagName) {
                if (el.nodeType !== 1) {
                    return undefined;
                }
                var options = (el.tagName === tagName.toUpperCase())
                    ? [el]
                    : Array.from(el.querySelectorAll(tagName));
                return options.find(function (o) { return o.checked === true; });
            };
            /***/ 
        })
    }]);
//# sourceMappingURL=common-es2015.js.map
//# sourceMappingURL=common-es5.js.map
//# sourceMappingURL=common-es5.js.map