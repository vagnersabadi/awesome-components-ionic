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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54], {
        /***/ "./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js": 
        /*!**********************************************************************!*\
          !*** ./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js ***!
          \**********************************************************************/
        /*! exports provided: ion_ripple_effect */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_ripple_effect", function () { return RippleEffect; });
            /* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm/core-feeeff0d.js");
            /* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
            var RippleEffect = /** @class */ (function () {
                function class_1(hostRef) {
                    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                    /**
                     * Sets the type of ripple-effect:
                     *
                     * - `bounded`: the ripple effect expands from the user's click position
                     * - `unbounded`: the ripple effect expands from the center of the button and overflows the container.
                     *
                     * NOTE: Surfaces for bounded ripples should have the overflow property set to hidden,
                     * while surfaces for unbounded ripples should have it set to visible.
                     */
                    this.type = 'bounded';
                }
                /**
                 * Adds the ripple effect to the parent element.
                 *
                 * @param x The horizontal coordinate of where the ripple should start.
                 * @param y The vertical coordinate of where the ripple should start.
                 */
                class_1.prototype.addRipple = function (x, y) {
                    return __awaiter(this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            return [2 /*return*/, new Promise(function (resolve) {
                                    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["f"])(function () {
                                        var rect = _this.el.getBoundingClientRect();
                                        var width = rect.width;
                                        var height = rect.height;
                                        var hypotenuse = Math.sqrt(width * width + height * height);
                                        var maxDim = Math.max(height, width);
                                        var maxRadius = _this.unbounded ? maxDim : hypotenuse + PADDING;
                                        var initialSize = Math.floor(maxDim * INITIAL_ORIGIN_SCALE);
                                        var finalScale = maxRadius / initialSize;
                                        var posX = x - rect.left;
                                        var posY = y - rect.top;
                                        if (_this.unbounded) {
                                            posX = width * 0.5;
                                            posY = height * 0.5;
                                        }
                                        var styleX = posX - initialSize * 0.5;
                                        var styleY = posY - initialSize * 0.5;
                                        var moveX = width * 0.5 - posX;
                                        var moveY = height * 0.5 - posY;
                                        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["w"])(function () {
                                            var div = document.createElement('div');
                                            div.classList.add('ripple-effect');
                                            var style = div.style;
                                            style.top = styleY + 'px';
                                            style.left = styleX + 'px';
                                            style.width = style.height = initialSize + 'px';
                                            style.setProperty('--final-scale', "" + finalScale);
                                            style.setProperty('--translate-end', moveX + "px, " + moveY + "px");
                                            var container = _this.el.shadowRoot || _this.el;
                                            container.appendChild(div);
                                            setTimeout(function () {
                                                resolve(function () {
                                                    removeRipple(div);
                                                });
                                            }, 225 + 100);
                                        });
                                    });
                                })];
                        });
                    });
                };
                Object.defineProperty(class_1.prototype, "unbounded", {
                    get: function () {
                        return this.type === 'unbounded';
                    },
                    enumerable: true,
                    configurable: true
                });
                class_1.prototype.render = function () {
                    var _a;
                    var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
                    return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { role: "presentation", class: (_a = {},
                            _a[mode] = true,
                            _a['unbounded'] = this.unbounded,
                            _a) }));
                };
                Object.defineProperty(class_1.prototype, "el", {
                    get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_1, "style", {
                    get: function () { return ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:rippleAnimation 225ms forwards,fadeInAnimation 75ms forwards;animation:rippleAnimation 225ms forwards,fadeInAnimation 75ms forwards;will-change:transform,opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1));-webkit-animation:fadeOutAnimation .15s forwards;animation:fadeOutAnimation .15s forwards}\@-webkit-keyframes rippleAnimation{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1))}}\@keyframes rippleAnimation{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1))}}\@-webkit-keyframes fadeInAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.16}}\@keyframes fadeInAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.16}}\@-webkit-keyframes fadeOutAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.16}to{opacity:0}}\@keyframes fadeOutAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.16}to{opacity:0}}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_1;
            }());
            var removeRipple = function (ripple) {
                ripple.classList.add('fade-out');
                setTimeout(function () {
                    ripple.remove();
                }, 200);
            };
            var PADDING = 10;
            var INITIAL_ORIGIN_SCALE = 0.5;
            /***/ 
        })
    }]);
//# sourceMappingURL=54-es2015.js.map
//# sourceMappingURL=54-es5.js.map
//# sourceMappingURL=54-es5.js.map