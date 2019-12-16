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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55], {
        /***/ "./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js": 
        /*!****************************************************************!*\
          !*** ./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js ***!
          \****************************************************************/
        /*! exports provided: ion_route, ion_route_redirect, ion_router, ion_router_link */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            var _this = this;
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_route", function () { return Route; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_route_redirect", function () { return RouteRedirect; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_router", function () { return Router; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_router_link", function () { return RouterLink; });
            /* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm/core-feeeff0d.js");
            /* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
            /* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "./node_modules/@ionic/core/dist/esm/helpers-46f4a262.js");
            /* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");
            var Route = /** @class */ (function () {
                function class_1(hostRef) {
                    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                    /**
                     * Relative path that needs to match in order for this route to apply.
                     *
                     * Accepts paths similar to expressjs so that you can define parameters
                     * in the url /foo/:bar where bar would be available in incoming props.
                     */
                    this.url = '';
                    this.ionRouteDataChanged = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionRouteDataChanged", 7);
                }
                class_1.prototype.onUpdate = function (newValue) {
                    this.ionRouteDataChanged.emit(newValue);
                };
                class_1.prototype.onComponentProps = function (newValue, oldValue) {
                    var e_1, _a;
                    if (newValue === oldValue) {
                        return;
                    }
                    var keys1 = newValue ? Object.keys(newValue) : [];
                    var keys2 = oldValue ? Object.keys(oldValue) : [];
                    if (keys1.length !== keys2.length) {
                        this.onUpdate(newValue);
                        return;
                    }
                    try {
                        for (var keys1_1 = __values(keys1), keys1_1_1 = keys1_1.next(); !keys1_1_1.done; keys1_1_1 = keys1_1.next()) {
                            var key = keys1_1_1.value;
                            if (newValue[key] !== oldValue[key]) {
                                this.onUpdate(newValue);
                                return;
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (keys1_1_1 && !keys1_1_1.done && (_a = keys1_1.return)) _a.call(keys1_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                };
                class_1.prototype.connectedCallback = function () {
                    this.ionRouteDataChanged.emit();
                };
                Object.defineProperty(class_1, "watchers", {
                    get: function () {
                        return {
                            "url": ["onUpdate"],
                            "component": ["onUpdate"],
                            "componentProps": ["onComponentProps"]
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                return class_1;
            }());
            var RouteRedirect = /** @class */ (function () {
                function class_2(hostRef) {
                    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                    this.ionRouteRedirectChanged = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionRouteRedirectChanged", 7);
                }
                class_2.prototype.propDidChange = function () {
                    this.ionRouteRedirectChanged.emit();
                };
                class_2.prototype.connectedCallback = function () {
                    this.ionRouteRedirectChanged.emit();
                };
                Object.defineProperty(class_2, "watchers", {
                    get: function () {
                        return {
                            "from": ["propDidChange"],
                            "to": ["propDidChange"]
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                return class_2;
            }());
            var ROUTER_INTENT_NONE = 'root';
            var ROUTER_INTENT_FORWARD = 'forward';
            var ROUTER_INTENT_BACK = 'back';
            var generatePath = function (segments) {
                var path = segments
                    .filter(function (s) { return s.length > 0; })
                    .join('/');
                return '/' + path;
            };
            var chainToPath = function (chain) {
                var e_2, _a, e_3, _b;
                var path = [];
                try {
                    for (var chain_1 = __values(chain), chain_1_1 = chain_1.next(); !chain_1_1.done; chain_1_1 = chain_1.next()) {
                        var route = chain_1_1.value;
                        try {
                            for (var _c = (e_3 = void 0, __values(route.path)), _d = _c.next(); !_d.done; _d = _c.next()) {
                                var segment = _d.value;
                                if (segment[0] === ':') {
                                    var param = route.params && route.params[segment.slice(1)];
                                    if (!param) {
                                        return null;
                                    }
                                    path.push(param);
                                }
                                else if (segment !== '') {
                                    path.push(segment);
                                }
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (chain_1_1 && !chain_1_1.done && (_a = chain_1.return)) _a.call(chain_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                return path;
            };
            var writePath = function (history, root, useHash, path, direction, state) {
                var url = generatePath(__spread(parsePath(root), path));
                if (useHash) {
                    url = '#' + url;
                }
                if (direction === ROUTER_INTENT_FORWARD) {
                    history.pushState(state, '', url);
                }
                else {
                    history.replaceState(state, '', url);
                }
            };
            var removePrefix = function (prefix, path) {
                if (prefix.length > path.length) {
                    return null;
                }
                if (prefix.length <= 1 && prefix[0] === '') {
                    return path;
                }
                for (var i = 0; i < prefix.length; i++) {
                    if (prefix[i].length > 0 && prefix[i] !== path[i]) {
                        return null;
                    }
                }
                if (path.length === prefix.length) {
                    return [''];
                }
                return path.slice(prefix.length);
            };
            var readPath = function (loc, root, useHash) {
                var pathname = loc.pathname;
                if (useHash) {
                    var hash = loc.hash;
                    pathname = (hash[0] === '#')
                        ? hash.slice(1)
                        : '';
                }
                var prefix = parsePath(root);
                var path = parsePath(pathname);
                return removePrefix(prefix, path);
            };
            var parsePath = function (path) {
                if (path == null) {
                    return [''];
                }
                var segments = path.split('/')
                    .map(function (s) { return s.trim(); })
                    .filter(function (s) { return s.length > 0; });
                if (segments.length === 0) {
                    return [''];
                }
                else {
                    return segments;
                }
            };
            var printRoutes = function (routes) {
                var e_4, _a;
                console.group("[ion-core] ROUTES[" + routes.length + "]");
                var _loop_1 = function (chain) {
                    var path = [];
                    chain.forEach(function (r) { return path.push.apply(path, __spread(r.path)); });
                    var ids = chain.map(function (r) { return r.id; });
                    console.debug("%c " + generatePath(path), 'font-weight: bold; padding-left: 20px', '=>\t', "(" + ids.join(', ') + ")");
                };
                try {
                    for (var routes_1 = __values(routes), routes_1_1 = routes_1.next(); !routes_1_1.done; routes_1_1 = routes_1.next()) {
                        var chain = routes_1_1.value;
                        _loop_1(chain);
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (routes_1_1 && !routes_1_1.done && (_a = routes_1.return)) _a.call(routes_1);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
                console.groupEnd();
            };
            var printRedirects = function (redirects) {
                var e_5, _a;
                console.group("[ion-core] REDIRECTS[" + redirects.length + "]");
                try {
                    for (var redirects_1 = __values(redirects), redirects_1_1 = redirects_1.next(); !redirects_1_1.done; redirects_1_1 = redirects_1.next()) {
                        var redirect = redirects_1_1.value;
                        if (redirect.to) {
                            console.debug('FROM: ', "$c " + generatePath(redirect.from), 'font-weight: bold', ' TO: ', "$c " + generatePath(redirect.to), 'font-weight: bold');
                        }
                    }
                }
                catch (e_5_1) { e_5 = { error: e_5_1 }; }
                finally {
                    try {
                        if (redirects_1_1 && !redirects_1_1.done && (_a = redirects_1.return)) _a.call(redirects_1);
                    }
                    finally { if (e_5) throw e_5.error; }
                }
                console.groupEnd();
            };
            var writeNavState = function (root, chain, direction, index, changed) {
                if (changed === void 0) { changed = false; }
                return __awaiter(_this, void 0, void 0, function () {
                    var outlet, route, result, e_6;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 6, , 7]);
                                outlet = searchNavNode(root);
                                // make sure we can continue interacting the DOM, otherwise abort
                                if (index >= chain.length || !outlet) {
                                    return [2 /*return*/, changed];
                                }
                                return [4 /*yield*/, outlet.componentOnReady()];
                            case 1:
                                _a.sent();
                                route = chain[index];
                                return [4 /*yield*/, outlet.setRouteId(route.id, route.params, direction)];
                            case 2:
                                result = _a.sent();
                                // if the outlet changed the page, reset navigation to neutral (no direction)
                                // this means nested outlets will not animate
                                if (result.changed) {
                                    direction = ROUTER_INTENT_NONE;
                                    changed = true;
                                }
                                return [4 /*yield*/, writeNavState(result.element, chain, direction, index + 1, changed)];
                            case 3:
                                // recursively set nested outlets
                                changed = _a.sent();
                                if (!result.markVisible) return [3 /*break*/, 5];
                                return [4 /*yield*/, result.markVisible()];
                            case 4:
                                _a.sent();
                                _a.label = 5;
                            case 5: return [2 /*return*/, changed];
                            case 6:
                                e_6 = _a.sent();
                                console.error(e_6);
                                return [2 /*return*/, false];
                            case 7: return [2 /*return*/];
                        }
                    });
                });
            };
            var readNavState = function (root) { return __awaiter(_this, void 0, void 0, function () {
                var ids, outlet, node, id;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            ids = [];
                            node = root;
                            _a.label = 1;
                        case 1:
                            if (!true) return [3 /*break*/, 5];
                            outlet = searchNavNode(node);
                            if (!outlet) return [3 /*break*/, 3];
                            return [4 /*yield*/, outlet.getRouteId()];
                        case 2:
                            id = _a.sent();
                            if (id) {
                                node = id.element;
                                id.element = undefined;
                                ids.push(id);
                            }
                            else {
                                return [3 /*break*/, 5];
                            }
                            return [3 /*break*/, 4];
                        case 3: return [3 /*break*/, 5];
                        case 4: return [3 /*break*/, 1];
                        case 5: return [2 /*return*/, { ids: ids, outlet: outlet }];
                    }
                });
            }); };
            var waitUntilNavNode = function () {
                if (searchNavNode(document.body)) {
                    return Promise.resolve();
                }
                return new Promise(function (resolve) {
                    window.addEventListener('ionNavWillLoad', resolve, { once: true });
                });
            };
            var QUERY = ':not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet';
            var searchNavNode = function (root) {
                if (!root) {
                    return undefined;
                }
                if (root.matches(QUERY)) {
                    return root;
                }
                var outlet = root.querySelector(QUERY);
                return outlet ? outlet : undefined;
            };
            var matchesRedirect = function (input, route) {
                var from = route.from, to = route.to;
                if (to === undefined) {
                    return false;
                }
                if (from.length > input.length) {
                    return false;
                }
                for (var i = 0; i < from.length; i++) {
                    var expected = from[i];
                    if (expected === '*') {
                        return true;
                    }
                    if (expected !== input[i]) {
                        return false;
                    }
                }
                return from.length === input.length;
            };
            var routeRedirect = function (path, routes) {
                return routes.find(function (route) { return matchesRedirect(path, route); });
            };
            var matchesIDs = function (ids, chain) {
                var len = Math.min(ids.length, chain.length);
                var i = 0;
                for (; i < len; i++) {
                    if (ids[i].toLowerCase() !== chain[i].id) {
                        break;
                    }
                }
                return i;
            };
            var matchesPath = function (inputPath, chain) {
                var e_7, _a;
                var segments = new RouterSegments(inputPath);
                var matchesDefault = false;
                var allparams;
                for (var i = 0; i < chain.length; i++) {
                    var path = chain[i].path;
                    if (path[0] === '') {
                        matchesDefault = true;
                    }
                    else {
                        try {
                            for (var path_1 = (e_7 = void 0, __values(path)), path_1_1 = path_1.next(); !path_1_1.done; path_1_1 = path_1.next()) {
                                var segment = path_1_1.value;
                                var data = segments.next();
                                // data param
                                if (segment[0] === ':') {
                                    if (data === '') {
                                        return null;
                                    }
                                    allparams = allparams || [];
                                    var params = allparams[i] || (allparams[i] = {});
                                    params[segment.slice(1)] = data;
                                }
                                else if (data !== segment) {
                                    return null;
                                }
                            }
                        }
                        catch (e_7_1) { e_7 = { error: e_7_1 }; }
                        finally {
                            try {
                                if (path_1_1 && !path_1_1.done && (_a = path_1.return)) _a.call(path_1);
                            }
                            finally { if (e_7) throw e_7.error; }
                        }
                        matchesDefault = false;
                    }
                }
                var matches = (matchesDefault)
                    ? matchesDefault === (segments.next() === '')
                    : true;
                if (!matches) {
                    return null;
                }
                if (allparams) {
                    return chain.map(function (route, i) { return ({
                        id: route.id,
                        path: route.path,
                        params: mergeParams(route.params, allparams[i])
                    }); });
                }
                return chain;
            };
            var mergeParams = function (a, b) {
                if (!a && b) {
                    return b;
                }
                else if (a && !b) {
                    return a;
                }
                else if (a && b) {
                    return Object.assign(Object.assign({}, a), b);
                }
                return undefined;
            };
            var routerIDsToChain = function (ids, chains) {
                var e_8, _a;
                var match = null;
                var maxMatches = 0;
                var plainIDs = ids.map(function (i) { return i.id; });
                try {
                    for (var chains_1 = __values(chains), chains_1_1 = chains_1.next(); !chains_1_1.done; chains_1_1 = chains_1.next()) {
                        var chain = chains_1_1.value;
                        var score = matchesIDs(plainIDs, chain);
                        if (score > maxMatches) {
                            match = chain;
                            maxMatches = score;
                        }
                    }
                }
                catch (e_8_1) { e_8 = { error: e_8_1 }; }
                finally {
                    try {
                        if (chains_1_1 && !chains_1_1.done && (_a = chains_1.return)) _a.call(chains_1);
                    }
                    finally { if (e_8) throw e_8.error; }
                }
                if (match) {
                    return match.map(function (route, i) { return ({
                        id: route.id,
                        path: route.path,
                        params: mergeParams(route.params, ids[i] && ids[i].params)
                    }); });
                }
                return null;
            };
            var routerPathToChain = function (path, chains) {
                var e_9, _a;
                var match = null;
                var matches = 0;
                try {
                    for (var chains_2 = __values(chains), chains_2_1 = chains_2.next(); !chains_2_1.done; chains_2_1 = chains_2.next()) {
                        var chain = chains_2_1.value;
                        var matchedChain = matchesPath(path, chain);
                        if (matchedChain !== null) {
                            var score = computePriority(matchedChain);
                            if (score > matches) {
                                matches = score;
                                match = matchedChain;
                            }
                        }
                    }
                }
                catch (e_9_1) { e_9 = { error: e_9_1 }; }
                finally {
                    try {
                        if (chains_2_1 && !chains_2_1.done && (_a = chains_2.return)) _a.call(chains_2);
                    }
                    finally { if (e_9) throw e_9.error; }
                }
                return match;
            };
            var computePriority = function (chain) {
                var e_10, _a, e_11, _b;
                var score = 1;
                var level = 1;
                try {
                    for (var chain_2 = __values(chain), chain_2_1 = chain_2.next(); !chain_2_1.done; chain_2_1 = chain_2.next()) {
                        var route = chain_2_1.value;
                        try {
                            for (var _c = (e_11 = void 0, __values(route.path)), _d = _c.next(); !_d.done; _d = _c.next()) {
                                var path = _d.value;
                                if (path[0] === ':') {
                                    score += Math.pow(1, level);
                                }
                                else if (path !== '') {
                                    score += Math.pow(2, level);
                                }
                                level++;
                            }
                        }
                        catch (e_11_1) { e_11 = { error: e_11_1 }; }
                        finally {
                            try {
                                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                            }
                            finally { if (e_11) throw e_11.error; }
                        }
                    }
                }
                catch (e_10_1) { e_10 = { error: e_10_1 }; }
                finally {
                    try {
                        if (chain_2_1 && !chain_2_1.done && (_a = chain_2.return)) _a.call(chain_2);
                    }
                    finally { if (e_10) throw e_10.error; }
                }
                return score;
            };
            var RouterSegments = /** @class */ (function () {
                function RouterSegments(path) {
                    this.path = path.slice();
                }
                RouterSegments.prototype.next = function () {
                    if (this.path.length > 0) {
                        return this.path.shift();
                    }
                    return '';
                };
                return RouterSegments;
            }());
            var readRedirects = function (root) {
                return Array.from(root.children)
                    .filter(function (el) { return el.tagName === 'ION-ROUTE-REDIRECT'; })
                    .map(function (el) {
                    var to = readProp(el, 'to');
                    return {
                        from: parsePath(readProp(el, 'from')),
                        to: to == null ? undefined : parsePath(to),
                    };
                });
            };
            var readRoutes = function (root) {
                return flattenRouterTree(readRouteNodes(root));
            };
            var readRouteNodes = function (root, node) {
                if (node === void 0) { node = root; }
                return Array.from(node.children)
                    .filter(function (el) { return el.tagName === 'ION-ROUTE' && el.component; })
                    .map(function (el) {
                    var component = readProp(el, 'component');
                    if (component == null) {
                        throw new Error('component missing in ion-route');
                    }
                    return {
                        path: parsePath(readProp(el, 'url')),
                        id: component.toLowerCase(),
                        params: el.componentProps,
                        children: readRouteNodes(root, el)
                    };
                });
            };
            var readProp = function (el, prop) {
                if (prop in el) {
                    return el[prop];
                }
                if (el.hasAttribute(prop)) {
                    return el.getAttribute(prop);
                }
                return null;
            };
            var flattenRouterTree = function (nodes) {
                var e_12, _a;
                var routes = [];
                try {
                    for (var nodes_1 = __values(nodes), nodes_1_1 = nodes_1.next(); !nodes_1_1.done; nodes_1_1 = nodes_1.next()) {
                        var node = nodes_1_1.value;
                        flattenNode([], routes, node);
                    }
                }
                catch (e_12_1) { e_12 = { error: e_12_1 }; }
                finally {
                    try {
                        if (nodes_1_1 && !nodes_1_1.done && (_a = nodes_1.return)) _a.call(nodes_1);
                    }
                    finally { if (e_12) throw e_12.error; }
                }
                return routes;
            };
            var flattenNode = function (chain, routes, node) {
                var e_13, _a;
                var s = chain.slice();
                s.push({
                    id: node.id,
                    path: node.path,
                    params: node.params
                });
                if (node.children.length === 0) {
                    routes.push(s);
                    return;
                }
                try {
                    for (var _b = __values(node.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var sub = _c.value;
                        flattenNode(s, routes, sub);
                    }
                }
                catch (e_13_1) { e_13 = { error: e_13_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_13) throw e_13.error; }
                }
            };
            var Router = /** @class */ (function () {
                function class_3(hostRef) {
                    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                    this.previousPath = null;
                    this.busy = false;
                    this.state = 0;
                    this.lastState = 0;
                    /**
                     * By default `ion-router` will match the routes at the root path ("/").
                     * That can be changed when
                     *
                     */
                    this.root = '/';
                    /**
                     * The router can work in two "modes":
                     * - With hash: `/index.html#/path/to/page`
                     * - Without hash: `/path/to/page`
                     *
                     * Using one or another might depend in the requirements of your app and/or where it's deployed.
                     *
                     * Usually "hash-less" navigation works better for SEO and it's more user friendly too, but it might
                     * requires additional server-side configuration in order to properly work.
                     *
                     * On the otherside hash-navigation is much easier to deploy, it even works over the file protocol.
                     *
                     * By default, this property is `true`, change to `false` to allow hash-less URLs.
                     */
                    this.useHash = true;
                    this.ionRouteWillChange = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionRouteWillChange", 7);
                    this.ionRouteDidChange = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionRouteDidChange", 7);
                }
                class_3.prototype.componentWillLoad = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    console.debug('[ion-router] router will load');
                                    return [4 /*yield*/, waitUntilNavNode()];
                                case 1:
                                    _a.sent();
                                    console.debug('[ion-router] found nav');
                                    return [4 /*yield*/, this.onRoutesChanged()];
                                case 2:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                class_3.prototype.componentDidLoad = function () {
                    window.addEventListener('ionRouteRedirectChanged', Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["e"])(this.onRedirectChanged.bind(this), 10));
                    window.addEventListener('ionRouteDataChanged', Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["e"])(this.onRoutesChanged.bind(this), 100));
                };
                class_3.prototype.onPopState = function () {
                    var direction = this.historyDirection();
                    var path = this.getPath();
                    console.debug('[ion-router] URL changed -> update nav', path, direction);
                    return this.writeNavStateRoot(path, direction);
                };
                class_3.prototype.onBackButton = function (ev) {
                    var _this = this;
                    ev.detail.register(0, function () { return _this.back(); });
                };
                /**
                 * Navigate to the specified URL.
                 *
                 * @param url The url to navigate to.
                 * @param direction The direction of the animation. Defaults to `"forward"`.
                 */
                class_3.prototype.push = function (url, direction) {
                    if (direction === void 0) { direction = 'forward'; }
                    if (url.startsWith('.')) {
                        url = (new URL(url, window.location.href)).pathname;
                    }
                    console.debug('[ion-router] URL pushed -> updating nav', url, direction);
                    var path = parsePath(url);
                    this.setPath(path, direction);
                    return this.writeNavStateRoot(path, direction);
                };
                /**
                 * Go back to previous page in the window.history.
                 */
                class_3.prototype.back = function () {
                    window.history.back();
                    return Promise.resolve(this.waitPromise);
                };
                /** @internal */
                class_3.prototype.printDebug = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            console.debug('CURRENT PATH', this.getPath());
                            console.debug('PREVIOUS PATH', this.previousPath);
                            printRoutes(readRoutes(this.el));
                            printRedirects(readRedirects(this.el));
                            return [2 /*return*/];
                        });
                    });
                };
                /** @internal */
                class_3.prototype.navChanged = function (direction) {
                    return __awaiter(this, void 0, void 0, function () {
                        var _a, ids, outlet, routes, chain, path;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    if (this.busy) {
                                        console.warn('[ion-router] router is busy, navChanged was cancelled');
                                        return [2 /*return*/, false];
                                    }
                                    return [4 /*yield*/, readNavState(window.document.body)];
                                case 1:
                                    _a = _b.sent(), ids = _a.ids, outlet = _a.outlet;
                                    routes = readRoutes(this.el);
                                    chain = routerIDsToChain(ids, routes);
                                    if (!chain) {
                                        console.warn('[ion-router] no matching URL for ', ids.map(function (i) { return i.id; }));
                                        return [2 /*return*/, false];
                                    }
                                    path = chainToPath(chain);
                                    if (!path) {
                                        console.warn('[ion-router] router could not match path because some required param is missing');
                                        return [2 /*return*/, false];
                                    }
                                    console.debug('[ion-router] nav changed -> update URL', ids, path);
                                    this.setPath(path, direction);
                                    return [4 /*yield*/, this.safeWriteNavState(outlet, chain, ROUTER_INTENT_NONE, path, null, ids.length)];
                                case 2:
                                    _b.sent();
                                    return [2 /*return*/, true];
                            }
                        });
                    });
                };
                class_3.prototype.onRedirectChanged = function () {
                    var path = this.getPath();
                    if (path && routeRedirect(path, readRedirects(this.el))) {
                        this.writeNavStateRoot(path, ROUTER_INTENT_NONE);
                    }
                };
                class_3.prototype.onRoutesChanged = function () {
                    return this.writeNavStateRoot(this.getPath(), ROUTER_INTENT_NONE);
                };
                class_3.prototype.historyDirection = function () {
                    var win = window;
                    if (win.history.state === null) {
                        this.state++;
                        win.history.replaceState(this.state, win.document.title, win.document.location && win.document.location.href);
                    }
                    var state = win.history.state;
                    var lastState = this.lastState;
                    this.lastState = state;
                    if (state > lastState) {
                        return ROUTER_INTENT_FORWARD;
                    }
                    else if (state < lastState) {
                        return ROUTER_INTENT_BACK;
                    }
                    else {
                        return ROUTER_INTENT_NONE;
                    }
                };
                class_3.prototype.writeNavStateRoot = function (path, direction) {
                    return __awaiter(this, void 0, void 0, function () {
                        var redirects, redirect, redirectFrom, routes, chain;
                        return __generator(this, function (_a) {
                            if (!path) {
                                console.error('[ion-router] URL is not part of the routing set');
                                return [2 /*return*/, false];
                            }
                            redirects = readRedirects(this.el);
                            redirect = routeRedirect(path, redirects);
                            redirectFrom = null;
                            if (redirect) {
                                this.setPath(redirect.to, direction);
                                redirectFrom = redirect.from;
                                path = redirect.to;
                            }
                            routes = readRoutes(this.el);
                            chain = routerPathToChain(path, routes);
                            if (!chain) {
                                console.error('[ion-router] the path does not match any route');
                                return [2 /*return*/, false];
                            }
                            // write DOM give
                            return [2 /*return*/, this.safeWriteNavState(document.body, chain, direction, path, redirectFrom)];
                        });
                    });
                };
                class_3.prototype.safeWriteNavState = function (node, chain, direction, path, redirectFrom, index) {
                    if (index === void 0) { index = 0; }
                    return __awaiter(this, void 0, void 0, function () {
                        var unlock, changed, e_14;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.lock()];
                                case 1:
                                    unlock = _a.sent();
                                    changed = false;
                                    _a.label = 2;
                                case 2:
                                    _a.trys.push([2, 4, , 5]);
                                    return [4 /*yield*/, this.writeNavState(node, chain, direction, path, redirectFrom, index)];
                                case 3:
                                    changed = _a.sent();
                                    return [3 /*break*/, 5];
                                case 4:
                                    e_14 = _a.sent();
                                    console.error(e_14);
                                    return [3 /*break*/, 5];
                                case 5:
                                    unlock();
                                    return [2 /*return*/, changed];
                            }
                        });
                    });
                };
                class_3.prototype.lock = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var p, resolve;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    p = this.waitPromise;
                                    this.waitPromise = new Promise(function (r) { return resolve = r; });
                                    if (!(p !== undefined)) return [3 /*break*/, 2];
                                    return [4 /*yield*/, p];
                                case 1:
                                    _a.sent();
                                    _a.label = 2;
                                case 2: return [2 /*return*/, resolve];
                            }
                        });
                    });
                };
                class_3.prototype.writeNavState = function (node, chain, direction, path, redirectFrom, index) {
                    if (index === void 0) { index = 0; }
                    return __awaiter(this, void 0, void 0, function () {
                        var routeEvent, changed;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (this.busy) {
                                        console.warn('[ion-router] router is busy, transition was cancelled');
                                        return [2 /*return*/, false];
                                    }
                                    this.busy = true;
                                    routeEvent = this.routeChangeEvent(path, redirectFrom);
                                    if (routeEvent) {
                                        this.ionRouteWillChange.emit(routeEvent);
                                    }
                                    return [4 /*yield*/, writeNavState(node, chain, direction, index)];
                                case 1:
                                    changed = _a.sent();
                                    this.busy = false;
                                    if (changed) {
                                        console.debug('[ion-router] route changed', path);
                                    }
                                    // emit did change
                                    if (routeEvent) {
                                        this.ionRouteDidChange.emit(routeEvent);
                                    }
                                    return [2 /*return*/, changed];
                            }
                        });
                    });
                };
                class_3.prototype.setPath = function (path, direction) {
                    this.state++;
                    writePath(window.history, this.root, this.useHash, path, direction, this.state);
                };
                class_3.prototype.getPath = function () {
                    return readPath(window.location, this.root, this.useHash);
                };
                class_3.prototype.routeChangeEvent = function (path, redirectFromPath) {
                    var from = this.previousPath;
                    var to = generatePath(path);
                    this.previousPath = to;
                    if (to === from) {
                        return null;
                    }
                    var redirectedFrom = redirectFromPath ? generatePath(redirectFromPath) : null;
                    return {
                        from: from,
                        redirectedFrom: redirectedFrom,
                        to: to,
                    };
                };
                Object.defineProperty(class_3.prototype, "el", {
                    get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
                    enumerable: true,
                    configurable: true
                });
                return class_3;
            }());
            var RouterLink = /** @class */ (function () {
                function class_4(hostRef) {
                    var _this = this;
                    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                    /**
                     * When using a router, it specifies the transition direction when navigating to
                     * another page using `href`.
                     */
                    this.routerDirection = 'forward';
                    this.onClick = function (ev) {
                        Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__["o"])(_this.href, ev, _this.routerDirection);
                    };
                }
                class_4.prototype.render = function () {
                    var _a;
                    var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
                    var attrs = {
                        href: this.href,
                        rel: this.rel,
                        target: this.target
                    };
                    return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { onClick: this.onClick, class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this.color)), (_a = {}, _a[mode] = true, _a['ion-activatable'] = true, _a)) }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", Object.assign({}, attrs), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))));
                };
                Object.defineProperty(class_4, "style", {
                    get: function () { return ":host{--background:transparent;--color:var(--ion-color-primary,#3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_4;
            }());
            /***/ 
        })
    }]);
//# sourceMappingURL=55-es2015.js.map
//# sourceMappingURL=55-es5.js.map
//# sourceMappingURL=55-es5.js.map