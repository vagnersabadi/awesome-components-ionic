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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41], {
        /***/ "./node_modules/@ionic/core/dist/esm/ion-nav_5.entry.js": 
        /*!**************************************************************!*\
          !*** ./node_modules/@ionic/core/dist/esm/ion-nav_5.entry.js ***!
          \**************************************************************/
        /*! exports provided: ion_nav, ion_nav_link, ion_nav_pop, ion_nav_push, ion_nav_set_root */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_nav", function () { return Nav; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_nav_link", function () { return NavLink; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_nav_pop", function () { return NavPop; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_nav_push", function () { return NavPush; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_nav_set_root", function () { return NavSetRoot; });
            /* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm/core-feeeff0d.js");
            /* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
            /* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "./node_modules/@ionic/core/dist/esm/helpers-46f4a262.js");
            /* harmony import */ var _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants-3c3e1099.js */ "./node_modules/@ionic/core/dist/esm/constants-3c3e1099.js");
            /* harmony import */ var _framework_delegate_c2e2e1f4_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./framework-delegate-c2e2e1f4.js */ "./node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js");
            /* harmony import */ var _index_4d91f03a_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-4d91f03a.js */ "./node_modules/@ionic/core/dist/esm/index-4d91f03a.js");
            /* harmony import */ var _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cubic-bezier-2812fda3.js */ "./node_modules/@ionic/core/dist/esm/cubic-bezier-2812fda3.js");
            var VIEW_STATE_NEW = 1;
            var VIEW_STATE_ATTACHED = 2;
            var VIEW_STATE_DESTROYED = 3;
            var ViewController = /** @class */ (function () {
                function ViewController(component, params) {
                    this.component = component;
                    this.params = params;
                    this.state = VIEW_STATE_NEW;
                }
                ViewController.prototype.init = function (container) {
                    return __awaiter(this, void 0, void 0, function () {
                        var component, _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    this.state = VIEW_STATE_ATTACHED;
                                    if (!!this.element) return [3 /*break*/, 2];
                                    component = this.component;
                                    _a = this;
                                    return [4 /*yield*/, Object(_framework_delegate_c2e2e1f4_js__WEBPACK_IMPORTED_MODULE_4__["a"])(this.delegate, container, component, ['ion-page', 'ion-page-invisible'], this.params)];
                                case 1:
                                    _a.element = _b.sent();
                                    _b.label = 2;
                                case 2: return [2 /*return*/];
                            }
                        });
                    });
                };
                /**
                 * DOM WRITE
                 */
                ViewController.prototype._destroy = function () {
                    Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this.state !== VIEW_STATE_DESTROYED, 'view state must be ATTACHED');
                    var element = this.element;
                    if (element) {
                        if (this.delegate) {
                            this.delegate.removeViewFromDom(element.parentElement, element);
                        }
                        else {
                            element.remove();
                        }
                    }
                    this.nav = undefined;
                    this.state = VIEW_STATE_DESTROYED;
                };
                return ViewController;
            }());
            var matches = function (view, id, params) {
                var e_1, _a;
                if (!view) {
                    return false;
                }
                if (view.component !== id) {
                    return false;
                }
                var currentParams = view.params;
                if (currentParams === params) {
                    return true;
                }
                if (!currentParams && !params) {
                    return true;
                }
                if (!currentParams || !params) {
                    return false;
                }
                var keysA = Object.keys(currentParams);
                var keysB = Object.keys(params);
                if (keysA.length !== keysB.length) {
                    return false;
                }
                try {
                    // Test for A's keys different from B.
                    for (var keysA_1 = __values(keysA), keysA_1_1 = keysA_1.next(); !keysA_1_1.done; keysA_1_1 = keysA_1.next()) {
                        var key = keysA_1_1.value;
                        if (currentParams[key] !== params[key]) {
                            return false;
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (keysA_1_1 && !keysA_1_1.done && (_a = keysA_1.return)) _a.call(keysA_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                return true;
            };
            var convertToView = function (page, params) {
                if (!page) {
                    return null;
                }
                if (page instanceof ViewController) {
                    return page;
                }
                return new ViewController(page, params);
            };
            var convertToViews = function (pages) {
                return pages.map(function (page) {
                    if (page instanceof ViewController) {
                        return page;
                    }
                    if ('page' in page) {
                        return convertToView(page.page, page.params);
                    }
                    return convertToView(page, undefined);
                }).filter(function (v) { return v !== null; });
            };
            var Nav = /** @class */ (function () {
                function class_1(hostRef) {
                    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                    this.transInstr = [];
                    this.animationEnabled = true;
                    this.useRouter = false;
                    this.isTransitioning = false;
                    this.destroyed = false;
                    this.views = [];
                    /**
                     * If `true`, the nav should animate the transition of components.
                     */
                    this.animated = true;
                    this.ionNavWillLoad = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionNavWillLoad", 7);
                    this.ionNavWillChange = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionNavWillChange", 3);
                    this.ionNavDidChange = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionNavDidChange", 3);
                }
                class_1.prototype.swipeGestureChanged = function () {
                    if (this.gesture) {
                        this.gesture.setDisabled(this.swipeGesture !== true);
                    }
                };
                class_1.prototype.rootChanged = function () {
                    if (this.root !== undefined) {
                        if (!this.useRouter) {
                            this.setRoot(this.root, this.rootParams);
                        }
                    }
                };
                class_1.prototype.componentWillLoad = function () {
                    this.useRouter =
                        !!document.querySelector('ion-router') &&
                            !this.el.closest('[no-router]');
                    if (this.swipeGesture === undefined) {
                        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
                        this.swipeGesture = _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].getBoolean('swipeBackEnabled', mode === 'ios');
                    }
                    this.ionNavWillLoad.emit();
                };
                class_1.prototype.componentDidLoad = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    this.rootChanged();
                                    _a = this;
                                    return [4 /*yield*/, __webpack_require__.e(/*! import() | swipe-back-35ad8e37-js */ "swipe-back-35ad8e37-js").then(__webpack_require__.bind(null, /*! ./swipe-back-35ad8e37.js */ "./node_modules/@ionic/core/dist/esm/swipe-back-35ad8e37.js"))];
                                case 1:
                                    _a.gesture = (_b.sent()).createSwipeBackGesture(this.el, this.canStart.bind(this), this.onStart.bind(this), this.onMove.bind(this), this.onEnd.bind(this));
                                    this.swipeGestureChanged();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                class_1.prototype.componentDidUnload = function () {
                    var e_2, _a;
                    try {
                        for (var _b = __values(this.views), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var view = _c.value;
                            Object(_index_4d91f03a_js__WEBPACK_IMPORTED_MODULE_5__["l"])(view.element, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_3__["d"]);
                            view._destroy();
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    if (this.gesture) {
                        this.gesture.destroy();
                        this.gesture = undefined;
                    }
                    // release swipe back gesture and transition
                    this.transInstr.length = this.views.length = 0;
                    this.destroyed = true;
                };
                /**
                 * Push a new component onto the current navigation stack. Pass any additional
                 * information along as an object. This additional information is accessible
                 * through NavParams.
                 *
                 * @param component The component to push onto the navigation stack.
                 * @param componentProps Any properties of the component.
                 * @param opts The navigation options.
                 * @param done The transition complete function.
                 */
                class_1.prototype.push = function (component, componentProps, opts, done) {
                    return this.queueTrns({
                        insertStart: -1,
                        insertViews: [{ page: component, params: componentProps }],
                        opts: opts
                    }, done);
                };
                /**
                 * Inserts a component into the navigation stack at the specified index.
                 * This is useful to add a component at any point in the navigation stack.
                 *
                 * @param insertIndex The index to insert the component at in the stack.
                 * @param component The component to insert into the navigation stack.
                 * @param componentProps Any properties of the component.
                 * @param opts The navigation options.
                 * @param done The transition complete function.
                 */
                class_1.prototype.insert = function (insertIndex, component, componentProps, opts, done) {
                    return this.queueTrns({
                        insertStart: insertIndex,
                        insertViews: [{ page: component, params: componentProps }],
                        opts: opts
                    }, done);
                };
                /**
                 * Inserts an array of components into the navigation stack at the specified index.
                 * The last component in the array will become instantiated as a view, and animate
                 * in to become the active view.
                 *
                 * @param insertIndex The index to insert the components at in the stack.
                 * @param insertComponents The components to insert into the navigation stack.
                 * @param opts The navigation options.
                 * @param done The transition complete function.
                 */
                class_1.prototype.insertPages = function (insertIndex, insertComponents, opts, done) {
                    return this.queueTrns({
                        insertStart: insertIndex,
                        insertViews: insertComponents,
                        opts: opts
                    }, done);
                };
                /**
                 * Pop a component off of the navigation stack. Navigates back from the current
                 * component.
                 *
                 * @param opts The navigation options.
                 * @param done The transition complete function.
                 */
                class_1.prototype.pop = function (opts, done) {
                    return this.queueTrns({
                        removeStart: -1,
                        removeCount: 1,
                        opts: opts
                    }, done);
                };
                /**
                 * Pop to a specific index in the navigation stack.
                 *
                 * @param indexOrViewCtrl The index or view controller to pop to.
                 * @param opts The navigation options.
                 * @param done The transition complete function.
                 */
                class_1.prototype.popTo = function (indexOrViewCtrl, opts, done) {
                    var tiConfig = {
                        removeStart: -1,
                        removeCount: -1,
                        opts: opts
                    };
                    if (typeof indexOrViewCtrl === 'object' && indexOrViewCtrl.component) {
                        tiConfig.removeView = indexOrViewCtrl;
                        tiConfig.removeStart = 1;
                    }
                    else if (typeof indexOrViewCtrl === 'number') {
                        tiConfig.removeStart = indexOrViewCtrl + 1;
                    }
                    return this.queueTrns(tiConfig, done);
                };
                /**
                 * Navigate back to the root of the stack, no matter how far back that is.
                 *
                 * @param opts The navigation options.
                 * @param done The transition complete function.
                 */
                class_1.prototype.popToRoot = function (opts, done) {
                    return this.queueTrns({
                        removeStart: 1,
                        removeCount: -1,
                        opts: opts
                    }, done);
                };
                /**
                 * Removes a component from the navigation stack at the specified index.
                 *
                 * @param startIndex The number to begin removal at.
                 * @param removeCount The number of components to remove.
                 * @param opts The navigation options.
                 * @param done The transition complete function.
                 */
                class_1.prototype.removeIndex = function (startIndex, removeCount, opts, done) {
                    if (removeCount === void 0) { removeCount = 1; }
                    return this.queueTrns({
                        removeStart: startIndex,
                        removeCount: removeCount,
                        opts: opts
                    }, done);
                };
                /**
                 * Set the root for the current navigation stack to a component.
                 *
                 * @param component The component to set as the root of the navigation stack.
                 * @param componentProps Any properties of the component.
                 * @param opts The navigation options.
                 * @param done The transition complete function.
                 */
                class_1.prototype.setRoot = function (component, componentProps, opts, done) {
                    return this.setPages([{ page: component, params: componentProps }], opts, done);
                };
                /**
                 * Set the views of the current navigation stack and navigate to the last view.
                 * By default animations are disabled, but they can be enabled by passing options
                 * to the navigation controller. Navigation parameters can also be passed to the
                 * individual pages in the array.
                 *
                 * @param views The list of views to set as the navigation stack.
                 * @param opts The navigation options.
                 * @param done The transition complete function.
                 */
                class_1.prototype.setPages = function (views, opts, done) {
                    if (opts == null) {
                        opts = {};
                    }
                    // if animation wasn't set to true then default it to NOT animate
                    if (opts.animated !== true) {
                        opts.animated = false;
                    }
                    return this.queueTrns({
                        insertStart: 0,
                        insertViews: views,
                        removeStart: 0,
                        removeCount: -1,
                        opts: opts
                    }, done);
                };
                /** @internal */
                class_1.prototype.setRouteId = function (id, params, direction) {
                    var _this = this;
                    var active = this.getActiveSync();
                    if (matches(active, id, params)) {
                        return Promise.resolve({
                            changed: false,
                            element: active.element
                        });
                    }
                    var resolve;
                    var promise = new Promise(function (r) { return (resolve = r); });
                    var finish;
                    var commonOpts = {
                        updateURL: false,
                        viewIsReady: function (enteringEl) {
                            var mark;
                            var p = new Promise(function (r) { return (mark = r); });
                            resolve({
                                changed: true,
                                element: enteringEl,
                                markVisible: function () { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                mark();
                                                return [4 /*yield*/, finish];
                                            case 1:
                                                _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); }
                            });
                            return p;
                        }
                    };
                    if (direction === 'root') {
                        finish = this.setRoot(id, params, commonOpts);
                    }
                    else {
                        var viewController = this.views.find(function (v) { return matches(v, id, params); });
                        if (viewController) {
                            finish = this.popTo(viewController, Object.assign(Object.assign({}, commonOpts), { direction: 'back' }));
                        }
                        else if (direction === 'forward') {
                            finish = this.push(id, params, commonOpts);
                        }
                        else if (direction === 'back') {
                            finish = this.setRoot(id, params, Object.assign(Object.assign({}, commonOpts), { direction: 'back', animated: true }));
                        }
                    }
                    return promise;
                };
                /** @internal */
                class_1.prototype.getRouteId = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var active;
                        return __generator(this, function (_a) {
                            active = this.getActiveSync();
                            return [2 /*return*/, active
                                    ? {
                                        id: active.element.tagName,
                                        params: active.params,
                                        element: active.element
                                    }
                                    : undefined];
                        });
                    });
                };
                /**
                 * Get the active view.
                 */
                class_1.prototype.getActive = function () {
                    return Promise.resolve(this.getActiveSync());
                };
                /**
                 * Get the view at the specified index.
                 *
                 * @param index The index of the view.
                 */
                class_1.prototype.getByIndex = function (index) {
                    return Promise.resolve(this.views[index]);
                };
                /**
                 * Returns `true` if the current view can go back.
                 *
                 * @param view The view to check.
                 */
                class_1.prototype.canGoBack = function (view) {
                    return Promise.resolve(this.canGoBackSync(view));
                };
                /**
                 * Get the previous view.
                 *
                 * @param view The view to get.
                 */
                class_1.prototype.getPrevious = function (view) {
                    return Promise.resolve(this.getPreviousSync(view));
                };
                class_1.prototype.getLength = function () {
                    return this.views.length;
                };
                class_1.prototype.getActiveSync = function () {
                    return this.views[this.views.length - 1];
                };
                class_1.prototype.canGoBackSync = function (view) {
                    if (view === void 0) { view = this.getActiveSync(); }
                    return !!(view && this.getPreviousSync(view));
                };
                class_1.prototype.getPreviousSync = function (view) {
                    if (view === void 0) { view = this.getActiveSync(); }
                    if (!view) {
                        return undefined;
                    }
                    var views = this.views;
                    var index = views.indexOf(view);
                    return index > 0 ? views[index - 1] : undefined;
                };
                // _queueTrns() adds a navigation stack change to the queue and schedules it to run:
                // 1. _nextTrns(): consumes the next transition in the queue
                // 2. _viewInit(): initializes enteringView if required
                // 3. _viewTest(): ensures canLeave/canEnter Returns `true`, so the operation can continue
                // 4. _postViewInit(): add/remove the views from the navigation stack
                // 5. _transitionInit(): initializes the visual transition if required and schedules it to run
                // 6. _viewAttachToDOM(): attaches the enteringView to the DOM
                // 7. _transitionStart(): called once the transition actually starts, it initializes the Animation underneath.
                // 8. _transitionFinish(): called once the transition finishes
                // 9. _cleanup(): syncs the navigation internal state with the DOM. For example it removes the pages from the DOM or hides/show them.
                class_1.prototype.queueTrns = function (ti, done) {
                    if (this.isTransitioning && ti.opts != null && ti.opts.skipIfBusy) {
                        return Promise.resolve(false);
                    }
                    var promise = new Promise(function (resolve, reject) {
                        ti.resolve = resolve;
                        ti.reject = reject;
                    });
                    ti.done = done;
                    // Normalize empty
                    if (ti.insertViews && ti.insertViews.length === 0) {
                        ti.insertViews = undefined;
                    }
                    // Enqueue transition instruction
                    this.transInstr.push(ti);
                    // if there isn't a transition already happening
                    // then this will kick off this transition
                    this.nextTrns();
                    return promise;
                };
                class_1.prototype.success = function (result, ti) {
                    if (this.destroyed) {
                        this.fireError('nav controller was destroyed', ti);
                        return;
                    }
                    if (ti.done) {
                        ti.done(result.hasCompleted, result.requiresTransition, result.enteringView, result.leavingView, result.direction);
                    }
                    ti.resolve(result.hasCompleted);
                    if (ti.opts.updateURL !== false && this.useRouter) {
                        var router = document.querySelector('ion-router');
                        if (router) {
                            var direction = result.direction === 'back' ? 'back' : 'forward';
                            router.navChanged(direction);
                        }
                    }
                };
                class_1.prototype.failed = function (rejectReason, ti) {
                    if (this.destroyed) {
                        this.fireError('nav controller was destroyed', ti);
                        return;
                    }
                    this.transInstr.length = 0;
                    this.fireError(rejectReason, ti);
                };
                class_1.prototype.fireError = function (rejectReason, ti) {
                    if (ti.done) {
                        ti.done(false, false, rejectReason);
                    }
                    if (ti.reject && !this.destroyed) {
                        ti.reject(rejectReason);
                    }
                    else {
                        ti.resolve(false);
                    }
                };
                class_1.prototype.nextTrns = function () {
                    // this is the framework's bread 'n butta function
                    // only one transition is allowed at any given time
                    if (this.isTransitioning) {
                        return false;
                    }
                    // there is no transition happening right now
                    // get the next instruction
                    var ti = this.transInstr.shift();
                    if (!ti) {
                        return false;
                    }
                    this.runTransition(ti);
                    return true;
                };
                class_1.prototype.runTransition = function (ti) {
                    return __awaiter(this, void 0, void 0, function () {
                        var leavingView, enteringView, requiresTransition, result, _a, rejectReason_1;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _b.trys.push([0, 6, , 7]);
                                    // set that this nav is actively transitioning
                                    this.ionNavWillChange.emit();
                                    this.isTransitioning = true;
                                    this.prepareTI(ti);
                                    leavingView = this.getActiveSync();
                                    enteringView = this.getEnteringView(ti, leavingView);
                                    if (!leavingView && !enteringView) {
                                        throw new Error('no views in the stack to be removed');
                                    }
                                    if (!(enteringView && enteringView.state === VIEW_STATE_NEW)) return [3 /*break*/, 2];
                                    return [4 /*yield*/, enteringView.init(this.el)];
                                case 1:
                                    _b.sent();
                                    _b.label = 2;
                                case 2:
                                    this.postViewInit(enteringView, leavingView, ti);
                                    requiresTransition = (ti.enteringRequiresTransition || ti.leavingRequiresTransition) &&
                                        enteringView !== leavingView;
                                    if (!requiresTransition) return [3 /*break*/, 4];
                                    return [4 /*yield*/, this.transition(enteringView, leavingView, ti)];
                                case 3:
                                    _a = _b.sent();
                                    return [3 /*break*/, 5];
                                case 4:
                                    _a = {
                                        // transition is not required, so we are already done!
                                        // they're inserting/removing the views somewhere in the middle or
                                        // beginning, so visually nothing needs to animate/transition
                                        // resolve immediately because there's no animation that's happening
                                        hasCompleted: true,
                                        requiresTransition: false
                                    };
                                    _b.label = 5;
                                case 5:
                                    result = _a;
                                    this.success(result, ti);
                                    this.ionNavDidChange.emit();
                                    return [3 /*break*/, 7];
                                case 6:
                                    rejectReason_1 = _b.sent();
                                    this.failed(rejectReason_1, ti);
                                    return [3 /*break*/, 7];
                                case 7:
                                    this.isTransitioning = false;
                                    this.nextTrns();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                class_1.prototype.prepareTI = function (ti) {
                    var e_3, _a;
                    var viewsLength = this.views.length;
                    ti.opts = ti.opts || {};
                    if (ti.opts.delegate === undefined) {
                        ti.opts.delegate = this.delegate;
                    }
                    if (ti.removeView !== undefined) {
                        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(ti.removeStart !== undefined, 'removeView needs removeStart');
                        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(ti.removeCount !== undefined, 'removeView needs removeCount');
                        var index = this.views.indexOf(ti.removeView);
                        if (index < 0) {
                            throw new Error('removeView was not found');
                        }
                        ti.removeStart += index;
                    }
                    if (ti.removeStart !== undefined) {
                        if (ti.removeStart < 0) {
                            ti.removeStart = viewsLength - 1;
                        }
                        if (ti.removeCount < 0) {
                            ti.removeCount = viewsLength - ti.removeStart;
                        }
                        ti.leavingRequiresTransition =
                            ti.removeCount > 0 && ti.removeStart + ti.removeCount === viewsLength;
                    }
                    if (ti.insertViews) {
                        // allow -1 to be passed in to auto push it on the end
                        // and clean up the index if it's larger then the size of the stack
                        if (ti.insertStart < 0 || ti.insertStart > viewsLength) {
                            ti.insertStart = viewsLength;
                        }
                        ti.enteringRequiresTransition = ti.insertStart === viewsLength;
                    }
                    var insertViews = ti.insertViews;
                    if (!insertViews) {
                        return;
                    }
                    Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(insertViews.length > 0, 'length can not be zero');
                    var viewControllers = convertToViews(insertViews);
                    if (viewControllers.length === 0) {
                        throw new Error('invalid views to insert');
                    }
                    try {
                        // Check all the inserted view are correct
                        for (var viewControllers_1 = __values(viewControllers), viewControllers_1_1 = viewControllers_1.next(); !viewControllers_1_1.done; viewControllers_1_1 = viewControllers_1.next()) {
                            var view = viewControllers_1_1.value;
                            view.delegate = ti.opts.delegate;
                            var nav = view.nav;
                            if (nav && nav !== this) {
                                throw new Error('inserted view was already inserted');
                            }
                            if (view.state === VIEW_STATE_DESTROYED) {
                                throw new Error('inserted view was already destroyed');
                            }
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (viewControllers_1_1 && !viewControllers_1_1.done && (_a = viewControllers_1.return)) _a.call(viewControllers_1);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                    ti.insertViews = viewControllers;
                };
                class_1.prototype.getEnteringView = function (ti, leavingView) {
                    var insertViews = ti.insertViews;
                    if (insertViews !== undefined) {
                        // grab the very last view of the views to be inserted
                        // and initialize it as the new entering view
                        return insertViews[insertViews.length - 1];
                    }
                    var removeStart = ti.removeStart;
                    if (removeStart !== undefined) {
                        var views = this.views;
                        var removeEnd = removeStart + ti.removeCount;
                        for (var i = views.length - 1; i >= 0; i--) {
                            var view = views[i];
                            if ((i < removeStart || i >= removeEnd) && view !== leavingView) {
                                return view;
                            }
                        }
                    }
                    return undefined;
                };
                class_1.prototype.postViewInit = function (enteringView, leavingView, ti) {
                    var e_4, _a, e_5, _b, e_6, _c;
                    Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(leavingView || enteringView, 'Both leavingView and enteringView are null');
                    Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(ti.resolve, 'resolve must be valid');
                    Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(ti.reject, 'reject must be valid');
                    var opts = ti.opts;
                    var insertViews = ti.insertViews;
                    var removeStart = ti.removeStart;
                    var removeCount = ti.removeCount;
                    var destroyQueue;
                    // there are views to remove
                    if (removeStart !== undefined && removeCount !== undefined) {
                        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(removeStart >= 0, 'removeStart can not be negative');
                        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(removeCount >= 0, 'removeCount can not be negative');
                        destroyQueue = [];
                        for (var i = 0; i < removeCount; i++) {
                            var view = this.views[i + removeStart];
                            if (view && view !== enteringView && view !== leavingView) {
                                destroyQueue.push(view);
                            }
                        }
                        // default the direction to "back"
                        opts.direction = opts.direction || 'back';
                    }
                    var finalBalance = this.views.length +
                        (insertViews !== undefined ? insertViews.length : 0) -
                        (removeCount !== undefined ? removeCount : 0);
                    Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(finalBalance >= 0, 'final balance can not be negative');
                    if (finalBalance === 0) {
                        console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.", this, this.el);
                        throw new Error('navigation stack needs at least one root page');
                    }
                    // At this point the transition can not be rejected, any throw should be an error
                    // there are views to insert
                    if (insertViews) {
                        // add the views to the
                        var insertIndex = ti.insertStart;
                        try {
                            for (var insertViews_1 = __values(insertViews), insertViews_1_1 = insertViews_1.next(); !insertViews_1_1.done; insertViews_1_1 = insertViews_1.next()) {
                                var view = insertViews_1_1.value;
                                this.insertViewAt(view, insertIndex);
                                insertIndex++;
                            }
                        }
                        catch (e_4_1) { e_4 = { error: e_4_1 }; }
                        finally {
                            try {
                                if (insertViews_1_1 && !insertViews_1_1.done && (_a = insertViews_1.return)) _a.call(insertViews_1);
                            }
                            finally { if (e_4) throw e_4.error; }
                        }
                        if (ti.enteringRequiresTransition) {
                            // default to forward if not already set
                            opts.direction = opts.direction || 'forward';
                        }
                    }
                    // if the views to be removed are in the beginning or middle
                    // and there is not a view that needs to visually transition out
                    // then just destroy them and don't transition anything
                    // batch all of lifecycles together
                    // let's make sure, callbacks are zoned
                    if (destroyQueue && destroyQueue.length > 0) {
                        try {
                            for (var destroyQueue_1 = __values(destroyQueue), destroyQueue_1_1 = destroyQueue_1.next(); !destroyQueue_1_1.done; destroyQueue_1_1 = destroyQueue_1.next()) {
                                var view = destroyQueue_1_1.value;
                                Object(_index_4d91f03a_js__WEBPACK_IMPORTED_MODULE_5__["l"])(view.element, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_3__["b"]);
                                Object(_index_4d91f03a_js__WEBPACK_IMPORTED_MODULE_5__["l"])(view.element, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_3__["c"]);
                                Object(_index_4d91f03a_js__WEBPACK_IMPORTED_MODULE_5__["l"])(view.element, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_3__["d"]);
                            }
                        }
                        catch (e_5_1) { e_5 = { error: e_5_1 }; }
                        finally {
                            try {
                                if (destroyQueue_1_1 && !destroyQueue_1_1.done && (_b = destroyQueue_1.return)) _b.call(destroyQueue_1);
                            }
                            finally { if (e_5) throw e_5.error; }
                        }
                        try {
                            // once all lifecycle events has been delivered, we can safely detroy the views
                            for (var destroyQueue_2 = __values(destroyQueue), destroyQueue_2_1 = destroyQueue_2.next(); !destroyQueue_2_1.done; destroyQueue_2_1 = destroyQueue_2.next()) {
                                var view = destroyQueue_2_1.value;
                                this.destroyView(view);
                            }
                        }
                        catch (e_6_1) { e_6 = { error: e_6_1 }; }
                        finally {
                            try {
                                if (destroyQueue_2_1 && !destroyQueue_2_1.done && (_c = destroyQueue_2.return)) _c.call(destroyQueue_2);
                            }
                            finally { if (e_6) throw e_6.error; }
                        }
                    }
                };
                class_1.prototype.transition = function (enteringView, leavingView, ti) {
                    return __awaiter(this, void 0, void 0, function () {
                        var opts, progressCallback, mode, enteringEl, leavingEl, animationOpts, hasCompleted;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    opts = ti.opts;
                                    progressCallback = opts.progressAnimation
                                        ? function (ani) { return _this.sbAni = ani; }
                                        : undefined;
                                    mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
                                    enteringEl = enteringView.element;
                                    leavingEl = leavingView && leavingView.element;
                                    animationOpts = Object.assign({ mode: mode, showGoBack: this.canGoBackSync(enteringView), baseEl: this.el, animationBuilder: this.animation || opts.animationBuilder || _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('navAnimation'), progressCallback: progressCallback, animated: this.animated && _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].getBoolean('animated', true), enteringEl: enteringEl,
                                        leavingEl: leavingEl }, opts);
                                    return [4 /*yield*/, Object(_index_4d91f03a_js__WEBPACK_IMPORTED_MODULE_5__["t"])(animationOpts)];
                                case 1:
                                    hasCompleted = (_a.sent()).hasCompleted;
                                    return [2 /*return*/, this.transitionFinish(hasCompleted, enteringView, leavingView, opts)];
                            }
                        });
                    });
                };
                class_1.prototype.transitionFinish = function (hasCompleted, enteringView, leavingView, opts) {
                    var cleanupView = hasCompleted ? enteringView : leavingView;
                    if (cleanupView) {
                        this.cleanup(cleanupView);
                    }
                    return {
                        hasCompleted: hasCompleted,
                        requiresTransition: true,
                        enteringView: enteringView,
                        leavingView: leavingView,
                        direction: opts.direction
                    };
                };
                class_1.prototype.insertViewAt = function (view, index) {
                    var views = this.views;
                    var existingIndex = views.indexOf(view);
                    if (existingIndex > -1) {
                        // this view is already in the stack!!
                        // move it to its new location
                        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(view.nav === this, 'view is not part of the nav');
                        views.splice(index, 0, views.splice(existingIndex, 1)[0]);
                    }
                    else {
                        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(!view.nav, 'nav is used');
                        // this is a new view to add to the stack
                        // create the new entering view
                        view.nav = this;
                        // insert the entering view into the correct index in the stack
                        views.splice(index, 0, view);
                    }
                };
                class_1.prototype.removeView = function (view) {
                    Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(view.state === VIEW_STATE_ATTACHED || view.state === VIEW_STATE_DESTROYED, 'view state should be loaded or destroyed');
                    var views = this.views;
                    var index = views.indexOf(view);
                    Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(index > -1, 'view must be part of the stack');
                    if (index >= 0) {
                        views.splice(index, 1);
                    }
                };
                class_1.prototype.destroyView = function (view) {
                    view._destroy();
                    this.removeView(view);
                };
                /**
                 * DOM WRITE
                 */
                class_1.prototype.cleanup = function (activeView) {
                    // ok, cleanup time!! Destroy all of the views that are
                    // INACTIVE and come after the active view
                    // only do this if the views exist, though
                    if (this.destroyed) {
                        return;
                    }
                    var views = this.views;
                    var activeViewIndex = views.indexOf(activeView);
                    for (var i = views.length - 1; i >= 0; i--) {
                        var view = views[i];
                        var element = view.element;
                        if (i > activeViewIndex) {
                            // this view comes after the active view
                            // let's unload it
                            Object(_index_4d91f03a_js__WEBPACK_IMPORTED_MODULE_5__["l"])(element, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_3__["d"]);
                            this.destroyView(view);
                        }
                        else if (i < activeViewIndex) {
                            // this view comes before the active view
                            // and it is not a portal then ensure it is hidden
                            Object(_index_4d91f03a_js__WEBPACK_IMPORTED_MODULE_5__["s"])(element, true);
                        }
                    }
                };
                class_1.prototype.canStart = function () {
                    return (!!this.swipeGesture &&
                        !this.isTransitioning &&
                        this.transInstr.length === 0 &&
                        this.animationEnabled &&
                        this.canGoBackSync());
                };
                class_1.prototype.onStart = function () {
                    this.queueTrns({
                        removeStart: -1,
                        removeCount: 1,
                        opts: {
                            direction: 'back',
                            progressAnimation: true
                        }
                    }, undefined);
                };
                class_1.prototype.onMove = function (stepValue) {
                    if (this.sbAni) {
                        this.sbAni.progressStep(stepValue);
                    }
                };
                class_1.prototype.onEnd = function (shouldComplete, stepValue, dur) {
                    var _this = this;
                    if (this.sbAni) {
                        this.animationEnabled = false;
                        this.sbAni.onFinish(function () {
                            _this.animationEnabled = true;
                        }, { oneTimeCallback: true });
                        // Account for rounding errors in JS
                        var newStepValue = (shouldComplete) ? -0.001 : 0.001;
                        /**
                         * Animation will be reversed here, so need to
                         * reverse the easing curve as well
                         *
                         * Additionally, we need to account for the time relative
                         * to the new easing curve, as `stepValue` is going to be given
                         * in terms of a linear curve.
                         */
                        if (!shouldComplete) {
                            this.sbAni.easing('cubic-bezier(1, 0, 0.68, 0.28)');
                            newStepValue += Object(_cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_6__["g"])(new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_6__["P"](0, 0), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_6__["P"](1, 0), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_6__["P"](0.68, 0.28), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_6__["P"](1, 1), stepValue);
                        }
                        else {
                            newStepValue += Object(_cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_6__["g"])(new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_6__["P"](0, 0), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_6__["P"](0.32, 0.72), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_6__["P"](0, 1), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_6__["P"](1, 1), stepValue);
                        }
                        this.sbAni.progressEnd(shouldComplete ? 1 : 0, newStepValue, dur);
                    }
                };
                class_1.prototype.render = function () {
                    return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null));
                };
                Object.defineProperty(class_1.prototype, "el", {
                    get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_1, "watchers", {
                    get: function () {
                        return {
                            "swipeGesture": ["swipeGestureChanged"],
                            "root": ["rootChanged"]
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_1, "style", {
                    get: function () { return ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_1;
            }());
            var navLink = function (el, routerDirection, component, componentProps) {
                var nav = el.closest('ion-nav');
                if (nav) {
                    if (routerDirection === 'forward') {
                        if (component !== undefined) {
                            return nav.push(component, componentProps, { skipIfBusy: true });
                        }
                    }
                    else if (routerDirection === 'root') {
                        if (component !== undefined) {
                            return nav.setRoot(component, componentProps, { skipIfBusy: true });
                        }
                    }
                    else if (routerDirection === 'back') {
                        return nav.pop({ skipIfBusy: true });
                    }
                }
                return Promise.resolve(false);
            };
            var NavLink = /** @class */ (function () {
                function class_2(hostRef) {
                    var _this = this;
                    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                    /**
                     * The transition direction when navigating to another page.
                     */
                    this.routerDirection = 'forward';
                    this.onClick = function () {
                        return navLink(_this.el, _this.routerDirection, _this.component, _this.componentProps);
                    };
                }
                class_2.prototype.render = function () {
                    return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { onClick: this.onClick }));
                };
                Object.defineProperty(class_2.prototype, "el", {
                    get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
                    enumerable: true,
                    configurable: true
                });
                return class_2;
            }());
            var NavPop = /** @class */ (function () {
                function class_3(hostRef) {
                    var _this = this;
                    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                    this.pop = function () {
                        return navLink(_this.el, 'back');
                    };
                }
                class_3.prototype.componentDidLoad = function () {
                    console.warn('[DEPRECATED][ion-nav-pop] <ion-nav-pop> is deprecated. Use `<ion-nav-link routerDirection="back">` instead.');
                };
                class_3.prototype.render = function () {
                    return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { onClick: this.pop }));
                };
                Object.defineProperty(class_3.prototype, "el", {
                    get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
                    enumerable: true,
                    configurable: true
                });
                return class_3;
            }());
            var NavPush = /** @class */ (function () {
                function class_4(hostRef) {
                    var _this = this;
                    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                    this.push = function () {
                        return navLink(_this.el, 'forward', _this.component, _this.componentProps);
                    };
                }
                class_4.prototype.componentDidLoad = function () {
                    console.warn('[DEPRECATED][ion-nav-push] `<ion-nav-push component="MyComponent">` is deprecated. Use `<ion-nav-link component="MyComponent">` instead.');
                };
                class_4.prototype.render = function () {
                    return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { onClick: this.push }));
                };
                Object.defineProperty(class_4.prototype, "el", {
                    get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
                    enumerable: true,
                    configurable: true
                });
                return class_4;
            }());
            var NavSetRoot = /** @class */ (function () {
                function class_5(hostRef) {
                    var _this = this;
                    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                    this.setRoot = function () {
                        return navLink(_this.el, 'root', _this.component, _this.componentProps);
                    };
                }
                class_5.prototype.componentDidLoad = function () {
                    console.warn('[DEPRECATED][ion-nav-set-root] `<ion-nav-set-root component="MyComponent">` is deprecated. Use `<ion-nav-link component="MyComponent" routerDirection="root">` instead.');
                };
                class_5.prototype.render = function () {
                    return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { onClick: this.setRoot }));
                };
                Object.defineProperty(class_5.prototype, "el", {
                    get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
                    enumerable: true,
                    configurable: true
                });
                return class_5;
            }());
            /***/ 
        })
    }]);
//# sourceMappingURL=41-es2015.js.map
//# sourceMappingURL=41-es5.js.map
//# sourceMappingURL=41-es5.js.map