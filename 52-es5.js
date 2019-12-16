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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52], {
        /***/ "./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js": 
        /*!**********************************************************************!*\
          !*** ./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js ***!
          \**********************************************************************/
        /*! exports provided: ion_reorder, ion_reorder_group */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_reorder", function () { return Reorder; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_reorder_group", function () { return ReorderGroup; });
            /* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm/core-feeeff0d.js");
            /* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
            /* harmony import */ var _haptic_c8f1473e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-c8f1473e.js */ "./node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js");
            var Reorder = /** @class */ (function () {
                function class_1(hostRef) {
                    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                }
                class_1.prototype.onClick = function (ev) {
                    ev.preventDefault();
                    ev.stopImmediatePropagation();
                };
                class_1.prototype.render = function () {
                    return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this) }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", { name: "reorder", lazy: false, class: "reorder-icon" }))));
                };
                Object.defineProperty(class_1, "style", {
                    get: function () { return ":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px;font-size:34px;opacity:.4}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_1;
            }());
            var ReorderGroup = /** @class */ (function () {
                function class_2(hostRef) {
                    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                    this.lastToIndex = -1;
                    this.cachedHeights = [];
                    this.scrollElTop = 0;
                    this.scrollElBottom = 0;
                    this.scrollElInitial = 0;
                    this.containerTop = 0;
                    this.containerBottom = 0;
                    this.state = 0 /* Idle */;
                    /**
                     * If `true`, the reorder will be hidden.
                     */
                    this.disabled = true;
                    this.ionItemReorder = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionItemReorder", 7);
                }
                class_2.prototype.disabledChanged = function () {
                    if (this.gesture) {
                        this.gesture.setDisabled(this.disabled);
                    }
                };
                class_2.prototype.connectedCallback = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var contentEl, _a, _b;
                        var _this = this;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    contentEl = this.el.closest('ion-content');
                                    if (!contentEl) return [3 /*break*/, 2];
                                    _a = this;
                                    return [4 /*yield*/, contentEl.getScrollElement()];
                                case 1:
                                    _a.scrollEl = _c.sent();
                                    _c.label = 2;
                                case 2:
                                    _b = this;
                                    return [4 /*yield*/, Promise.resolve( /*! import() */).then(__webpack_require__.bind(null, /*! ./index-624eea58.js */ "./node_modules/@ionic/core/dist/esm/index-624eea58.js"))];
                                case 3:
                                    _b.gesture = (_c.sent()).createGesture({
                                        el: this.el,
                                        gestureName: 'reorder',
                                        gesturePriority: 110,
                                        threshold: 0,
                                        direction: 'y',
                                        passive: false,
                                        canStart: function (detail) { return _this.canStart(detail); },
                                        onStart: function (ev) { return _this.onStart(ev); },
                                        onMove: function (ev) { return _this.onMove(ev); },
                                        onEnd: function () { return _this.onEnd(); },
                                    });
                                    this.disabledChanged();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                class_2.prototype.disconnectedCallback = function () {
                    this.onEnd();
                    if (this.gesture) {
                        this.gesture.destroy();
                        this.gesture = undefined;
                    }
                };
                /**
                 * Completes the reorder operation. Must be called by the `ionItemReorder` event.
                 *
                 * If a list of items is passed, the list will be reordered and returned in the
                 * proper order.
                 *
                 * If no parameters are passed or if `true` is passed in, the reorder will complete
                 * and the item will remain in the position it was dragged to. If `false` is passed,
                 * the reorder will complete and the item will bounce back to its original position.
                 *
                 * @param listOrReorder A list of items to be sorted and returned in the new order or a
                 * boolean of whether or not the reorder should reposition the item.
                 */
                class_2.prototype.complete = function (listOrReorder) {
                    return Promise.resolve(this.completeSync(listOrReorder));
                };
                class_2.prototype.canStart = function (ev) {
                    if (this.selectedItemEl || this.state !== 0 /* Idle */) {
                        return false;
                    }
                    var target = ev.event.target;
                    var reorderEl = target.closest('ion-reorder');
                    if (!reorderEl) {
                        return false;
                    }
                    var item = findReorderItem(reorderEl, this.el);
                    if (!item) {
                        return false;
                    }
                    ev.data = item;
                    return true;
                };
                class_2.prototype.onStart = function (ev) {
                    ev.event.preventDefault();
                    var item = this.selectedItemEl = ev.data;
                    var heights = this.cachedHeights;
                    heights.length = 0;
                    var el = this.el;
                    var children = el.children;
                    if (!children || children.length === 0) {
                        return;
                    }
                    var sum = 0;
                    for (var i = 0; i < children.length; i++) {
                        var child = children[i];
                        sum += child.offsetHeight;
                        heights.push(sum);
                        child.$ionIndex = i;
                    }
                    var box = el.getBoundingClientRect();
                    this.containerTop = box.top;
                    this.containerBottom = box.bottom;
                    if (this.scrollEl) {
                        var scrollBox = this.scrollEl.getBoundingClientRect();
                        this.scrollElInitial = this.scrollEl.scrollTop;
                        this.scrollElTop = scrollBox.top + AUTO_SCROLL_MARGIN;
                        this.scrollElBottom = scrollBox.bottom - AUTO_SCROLL_MARGIN;
                    }
                    else {
                        this.scrollElInitial = 0;
                        this.scrollElTop = 0;
                        this.scrollElBottom = 0;
                    }
                    this.lastToIndex = indexForItem(item);
                    this.selectedItemHeight = item.offsetHeight;
                    this.state = 1 /* Active */;
                    item.classList.add(ITEM_REORDER_SELECTED);
                    Object(_haptic_c8f1473e_js__WEBPACK_IMPORTED_MODULE_2__["a"])();
                };
                class_2.prototype.onMove = function (ev) {
                    var selectedItem = this.selectedItemEl;
                    if (!selectedItem) {
                        return;
                    }
                    // Scroll if we reach the scroll margins
                    var scroll = this.autoscroll(ev.currentY);
                    // // Get coordinate
                    var top = this.containerTop - scroll;
                    var bottom = this.containerBottom - scroll;
                    var currentY = Math.max(top, Math.min(ev.currentY, bottom));
                    var deltaY = scroll + currentY - ev.startY;
                    var normalizedY = currentY - top;
                    var toIndex = this.itemIndexForTop(normalizedY);
                    if (toIndex !== this.lastToIndex) {
                        var fromIndex = indexForItem(selectedItem);
                        this.lastToIndex = toIndex;
                        Object(_haptic_c8f1473e_js__WEBPACK_IMPORTED_MODULE_2__["b"])();
                        this.reorderMove(fromIndex, toIndex);
                    }
                    // Update selected item position
                    selectedItem.style.transform = "translateY(" + deltaY + "px)";
                };
                class_2.prototype.onEnd = function () {
                    var selectedItemEl = this.selectedItemEl;
                    this.state = 2 /* Complete */;
                    if (!selectedItemEl) {
                        this.state = 0 /* Idle */;
                        return;
                    }
                    var toIndex = this.lastToIndex;
                    var fromIndex = indexForItem(selectedItemEl);
                    if (toIndex === fromIndex) {
                        this.completeSync();
                    }
                    else {
                        this.ionItemReorder.emit({
                            from: fromIndex,
                            to: toIndex,
                            complete: this.completeSync.bind(this)
                        });
                    }
                    Object(_haptic_c8f1473e_js__WEBPACK_IMPORTED_MODULE_2__["c"])();
                };
                class_2.prototype.completeSync = function (listOrReorder) {
                    var selectedItemEl = this.selectedItemEl;
                    if (selectedItemEl && this.state === 2 /* Complete */) {
                        var children = this.el.children;
                        var len = children.length;
                        var toIndex = this.lastToIndex;
                        var fromIndex = indexForItem(selectedItemEl);
                        if (toIndex !== fromIndex && (!listOrReorder || listOrReorder === true)) {
                            var ref = (fromIndex < toIndex)
                                ? children[toIndex + 1]
                                : children[toIndex];
                            this.el.insertBefore(selectedItemEl, ref);
                        }
                        if (Array.isArray(listOrReorder)) {
                            listOrReorder = reorderArray(listOrReorder, fromIndex, toIndex);
                        }
                        for (var i = 0; i < len; i++) {
                            children[i].style['transform'] = '';
                        }
                        selectedItemEl.style.transition = '';
                        selectedItemEl.classList.remove(ITEM_REORDER_SELECTED);
                        this.selectedItemEl = undefined;
                        this.state = 0 /* Idle */;
                    }
                    return listOrReorder;
                };
                class_2.prototype.itemIndexForTop = function (deltaY) {
                    var heights = this.cachedHeights;
                    var i = 0;
                    // TODO: since heights is a sorted array of integers, we can do
                    // speed up the search using binary search. Remember that linear-search is still
                    // faster than binary-search for small arrays (<64) due CPU branch misprediction.
                    for (i = 0; i < heights.length; i++) {
                        if (heights[i] > deltaY) {
                            break;
                        }
                    }
                    return i;
                };
                /********* DOM WRITE ********* */
                class_2.prototype.reorderMove = function (fromIndex, toIndex) {
                    var itemHeight = this.selectedItemHeight;
                    var children = this.el.children;
                    for (var i = 0; i < children.length; i++) {
                        var style = children[i].style;
                        var value = '';
                        if (i > fromIndex && i <= toIndex) {
                            value = "translateY(" + -itemHeight + "px)";
                        }
                        else if (i < fromIndex && i >= toIndex) {
                            value = "translateY(" + itemHeight + "px)";
                        }
                        style['transform'] = value;
                    }
                };
                class_2.prototype.autoscroll = function (posY) {
                    if (!this.scrollEl) {
                        return 0;
                    }
                    var amount = 0;
                    if (posY < this.scrollElTop) {
                        amount = -SCROLL_JUMP;
                    }
                    else if (posY > this.scrollElBottom) {
                        amount = SCROLL_JUMP;
                    }
                    if (amount !== 0) {
                        this.scrollEl.scrollBy(0, amount);
                    }
                    return this.scrollEl.scrollTop - this.scrollElInitial;
                };
                class_2.prototype.render = function () {
                    var _a;
                    var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
                    return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: (_a = {},
                            _a[mode] = true,
                            _a['reorder-enabled'] = !this.disabled,
                            _a['reorder-list-active'] = this.state !== 0 /* Idle */,
                            _a) }));
                };
                Object.defineProperty(class_2.prototype, "el", {
                    get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_2, "watchers", {
                    get: function () {
                        return {
                            "disabled": ["disabledChanged"]
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_2, "style", {
                    get: function () { return ".reorder-list-active>*{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none!important;transition:none!important;-webkit-box-shadow:0 0 10px rgba(0,0,0,.4);box-shadow:0 0 10px rgba(0,0,0,.4);opacity:.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translateZ(0);transform:translateZ(0)}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_2;
            }());
            var indexForItem = function (element) {
                return element['$ionIndex'];
            };
            var findReorderItem = function (node, container) {
                var parent;
                while (node) {
                    parent = node.parentElement;
                    if (parent === container) {
                        return node;
                    }
                    node = parent;
                }
                return undefined;
            };
            var AUTO_SCROLL_MARGIN = 60;
            var SCROLL_JUMP = 10;
            var ITEM_REORDER_SELECTED = 'reorder-selected';
            var reorderArray = function (array, from, to) {
                var element = array[from];
                array.splice(from, 1);
                array.splice(to, 0, element);
                return array.slice();
            };
            /***/ 
        })
    }]);
//# sourceMappingURL=52-es2015.js.map
//# sourceMappingURL=52-es5.js.map
//# sourceMappingURL=52-es5.js.map