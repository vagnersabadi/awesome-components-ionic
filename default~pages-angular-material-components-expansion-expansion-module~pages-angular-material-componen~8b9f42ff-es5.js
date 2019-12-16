var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-angular-material-components-expansion-expansion-module~pages-angular-material-componen~8b9f42ff"], {
        /***/ "./node_modules/@angular/cdk/esm2015/portal.js": 
        /*!*****************************************************!*\
          !*** ./node_modules/@angular/cdk/esm2015/portal.js ***!
          \*****************************************************/
        /*! exports provided: Portal, ComponentPortal, TemplatePortal, BasePortalOutlet, BasePortalHost, DomPortalOutlet, DomPortalHost, CdkPortal, TemplatePortalDirective, CdkPortalOutlet, PortalHostDirective, PortalModule, PortalInjector */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Portal", function () { return Portal; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentPortal", function () { return ComponentPortal; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatePortal", function () { return TemplatePortal; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasePortalOutlet", function () { return BasePortalOutlet; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasePortalHost", function () { return BasePortalHost; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomPortalOutlet", function () { return DomPortalOutlet; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomPortalHost", function () { return DomPortalHost; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkPortal", function () { return CdkPortal; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatePortalDirective", function () { return TemplatePortalDirective; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkPortalOutlet", function () { return CdkPortalOutlet; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalHostDirective", function () { return PortalHostDirective; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalModule", function () { return PortalModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalInjector", function () { return PortalInjector; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /**
             * @license
             * Copyright Google LLC All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Throws an exception when attempting to attach a null portal to a host.
             * \@docs-private
             * @return {?}
             */
            function throwNullPortalError() {
                throw Error('Must provide a portal to attach');
            }
            /**
             * Throws an exception when attempting to attach a portal to a host that is already attached.
             * \@docs-private
             * @return {?}
             */
            function throwPortalAlreadyAttachedError() {
                throw Error('Host already has a portal attached');
            }
            /**
             * Throws an exception when attempting to attach a portal to an already-disposed host.
             * \@docs-private
             * @return {?}
             */
            function throwPortalOutletAlreadyDisposedError() {
                throw Error('This PortalOutlet has already been disposed');
            }
            /**
             * Throws an exception when attempting to attach an unknown portal type.
             * \@docs-private
             * @return {?}
             */
            function throwUnknownPortalTypeError() {
                throw Error('Attempting to attach an unknown Portal type. BasePortalOutlet accepts either ' +
                    'a ComponentPortal or a TemplatePortal.');
            }
            /**
             * Throws an exception when attempting to attach a portal to a null host.
             * \@docs-private
             * @return {?}
             */
            function throwNullPortalOutletError() {
                throw Error('Attempting to attach a portal to a null PortalOutlet');
            }
            /**
             * Throws an exception when attempting to detach a portal that is not attached.
             * \@docs-private
             * @return {?}
             */
            function throwNoPortalAttachedError() {
                throw Error('Attempting to detach a portal that is not attached to a host');
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * A `Portal` is something that you want to render somewhere else.
             * It can be attach to / detached from a `PortalOutlet`.
             * @abstract
             * @template T
             */
            var Portal = /** @class */ (function () {
                function Portal() {
                }
                /**
                 * Attach this portal to a host.
                 * @param {?} host
                 * @return {?}
                 */
                Portal.prototype.attach = function (host) {
                    if (host == null) {
                        throwNullPortalOutletError();
                    }
                    if (host.hasAttached()) {
                        throwPortalAlreadyAttachedError();
                    }
                    this._attachedHost = host;
                    return ( /** @type {?} */(host.attach(this)));
                };
                /**
                 * Detach this portal from its host
                 * @return {?}
                 */
                Portal.prototype.detach = function () {
                    /** @type {?} */
                    var host = this._attachedHost;
                    if (host == null) {
                        throwNoPortalAttachedError();
                    }
                    else {
                        this._attachedHost = null;
                        host.detach();
                    }
                };
                Object.defineProperty(Portal.prototype, "isAttached", {
                    /**
                     * Whether this portal is attached to a host.
                     * @return {?}
                     */
                    get: function () {
                        return this._attachedHost != null;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Sets the PortalOutlet reference without performing `attach()`. This is used directly by
                 * the PortalOutlet when it is performing an `attach()` or `detach()`.
                 * @param {?} host
                 * @return {?}
                 */
                Portal.prototype.setAttachedHost = function (host) {
                    this._attachedHost = host;
                };
                return Portal;
            }());
            /**
             * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
             * @template T
             */
            var ComponentPortal = /** @class */ (function (_super) {
                __extends(ComponentPortal, _super);
                /**
                 * @param {?} component
                 * @param {?=} viewContainerRef
                 * @param {?=} injector
                 * @param {?=} componentFactoryResolver
                 */
                function ComponentPortal(component, viewContainerRef, injector, componentFactoryResolver) {
                    var _this = _super.call(this) || this;
                    _this.component = component;
                    _this.viewContainerRef = viewContainerRef;
                    _this.injector = injector;
                    _this.componentFactoryResolver = componentFactoryResolver;
                    return _this;
                }
                return ComponentPortal;
            }(Portal));
            /**
             * A `TemplatePortal` is a portal that represents some embedded template (TemplateRef).
             * @template C
             */
            var TemplatePortal = /** @class */ (function (_super) {
                __extends(TemplatePortal, _super);
                /**
                 * @param {?} template
                 * @param {?} viewContainerRef
                 * @param {?=} context
                 */
                function TemplatePortal(template, viewContainerRef, context) {
                    var _this = _super.call(this) || this;
                    _this.templateRef = template;
                    _this.viewContainerRef = viewContainerRef;
                    _this.context = context;
                    return _this;
                }
                Object.defineProperty(TemplatePortal.prototype, "origin", {
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return this.templateRef.elementRef;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Attach the portal to the provided `PortalOutlet`.
                 * When a context is provided it will override the `context` property of the `TemplatePortal`
                 * instance.
                 * @param {?} host
                 * @param {?=} context
                 * @return {?}
                 */
                TemplatePortal.prototype.attach = function (host, context) {
                    if (context === void 0) { context = this.context; }
                    this.context = context;
                    return _super.prototype.attach.call(this, host);
                };
                /**
                 * @return {?}
                 */
                TemplatePortal.prototype.detach = function () {
                    this.context = undefined;
                    return _super.prototype.detach.call(this);
                };
                return TemplatePortal;
            }(Portal));
            /**
             * Partial implementation of PortalOutlet that handles attaching
             * ComponentPortal and TemplatePortal.
             * @abstract
             */
            var BasePortalOutlet = /** @class */ (function () {
                function BasePortalOutlet() {
                    /**
                     * Whether this host has already been permanently disposed.
                     */
                    this._isDisposed = false;
                }
                /**
                 * Whether this host has an attached portal.
                 * @return {?}
                 */
                BasePortalOutlet.prototype.hasAttached = function () {
                    return !!this._attachedPortal;
                };
                /**
                 * Attaches a portal.
                 * @param {?} portal
                 * @return {?}
                 */
                BasePortalOutlet.prototype.attach = function (portal) {
                    if (!portal) {
                        throwNullPortalError();
                    }
                    if (this.hasAttached()) {
                        throwPortalAlreadyAttachedError();
                    }
                    if (this._isDisposed) {
                        throwPortalOutletAlreadyDisposedError();
                    }
                    if (portal instanceof ComponentPortal) {
                        this._attachedPortal = portal;
                        return this.attachComponentPortal(portal);
                    }
                    else if (portal instanceof TemplatePortal) {
                        this._attachedPortal = portal;
                        return this.attachTemplatePortal(portal);
                    }
                    throwUnknownPortalTypeError();
                };
                /**
                 * Detaches a previously attached portal.
                 * @return {?}
                 */
                BasePortalOutlet.prototype.detach = function () {
                    if (this._attachedPortal) {
                        this._attachedPortal.setAttachedHost(null);
                        this._attachedPortal = null;
                    }
                    this._invokeDisposeFn();
                };
                /**
                 * Permanently dispose of this portal host.
                 * @return {?}
                 */
                BasePortalOutlet.prototype.dispose = function () {
                    if (this.hasAttached()) {
                        this.detach();
                    }
                    this._invokeDisposeFn();
                    this._isDisposed = true;
                };
                /**
                 * \@docs-private
                 * @param {?} fn
                 * @return {?}
                 */
                BasePortalOutlet.prototype.setDisposeFn = function (fn) {
                    this._disposeFn = fn;
                };
                /**
                 * @private
                 * @return {?}
                 */
                BasePortalOutlet.prototype._invokeDisposeFn = function () {
                    if (this._disposeFn) {
                        this._disposeFn();
                        this._disposeFn = null;
                    }
                };
                return BasePortalOutlet;
            }());
            /**
             * @deprecated Use `BasePortalOutlet` instead.
             * \@breaking-change 9.0.0
             * @abstract
             */
            var BasePortalHost = /** @class */ (function (_super) {
                __extends(BasePortalHost, _super);
                function BasePortalHost() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return BasePortalHost;
            }(BasePortalOutlet));
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * A PortalOutlet for attaching portals to an arbitrary DOM element outside of the Angular
             * application context.
             */
            var DomPortalOutlet = /** @class */ (function (_super) {
                __extends(DomPortalOutlet, _super);
                /**
                 * @param {?} outletElement
                 * @param {?} _componentFactoryResolver
                 * @param {?} _appRef
                 * @param {?} _defaultInjector
                 */
                function DomPortalOutlet(outletElement, _componentFactoryResolver, _appRef, _defaultInjector) {
                    var _this = _super.call(this) || this;
                    _this.outletElement = outletElement;
                    _this._componentFactoryResolver = _componentFactoryResolver;
                    _this._appRef = _appRef;
                    _this._defaultInjector = _defaultInjector;
                    return _this;
                }
                /**
                 * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
                 * @template T
                 * @param {?} portal Portal to be attached
                 * @return {?} Reference to the created component.
                 */
                DomPortalOutlet.prototype.attachComponentPortal = function (portal) {
                    var _this = this;
                    /** @type {?} */
                    var resolver = portal.componentFactoryResolver || this._componentFactoryResolver;
                    /** @type {?} */
                    var componentFactory = resolver.resolveComponentFactory(portal.component);
                    /** @type {?} */
                    var componentRef;
                    // If the portal specifies a ViewContainerRef, we will use that as the attachment point
                    // for the component (in terms of Angular's component tree, not rendering).
                    // When the ViewContainerRef is missing, we use the factory to create the component directly
                    // and then manually attach the view to the application.
                    if (portal.viewContainerRef) {
                        componentRef = portal.viewContainerRef.createComponent(componentFactory, portal.viewContainerRef.length, portal.injector || portal.viewContainerRef.injector);
                        this.setDisposeFn(( /**
                         * @return {?}
                         */function () { return componentRef.destroy(); }));
                    }
                    else {
                        componentRef = componentFactory.create(portal.injector || this._defaultInjector);
                        this._appRef.attachView(componentRef.hostView);
                        this.setDisposeFn(( /**
                         * @return {?}
                         */function () {
                            _this._appRef.detachView(componentRef.hostView);
                            componentRef.destroy();
                        }));
                    }
                    // At this point the component has been instantiated, so we move it to the location in the DOM
                    // where we want it to be rendered.
                    this.outletElement.appendChild(this._getComponentRootNode(componentRef));
                    return componentRef;
                };
                /**
                 * Attaches a template portal to the DOM as an embedded view.
                 * @template C
                 * @param {?} portal Portal to be attached.
                 * @return {?} Reference to the created embedded view.
                 */
                DomPortalOutlet.prototype.attachTemplatePortal = function (portal) {
                    var _this = this;
                    /** @type {?} */
                    var viewContainer = portal.viewContainerRef;
                    /** @type {?} */
                    var viewRef = viewContainer.createEmbeddedView(portal.templateRef, portal.context);
                    viewRef.detectChanges();
                    // The method `createEmbeddedView` will add the view as a child of the viewContainer.
                    // But for the DomPortalOutlet the view can be added everywhere in the DOM
                    // (e.g Overlay Container) To move the view to the specified host element. We just
                    // re-append the existing root nodes.
                    viewRef.rootNodes.forEach(( /**
                     * @param {?} rootNode
                     * @return {?}
                     */function (/**
                     * @param {?} rootNode
                     * @return {?}
                     */ rootNode) { return _this.outletElement.appendChild(rootNode); }));
                    this.setDisposeFn((( /**
                     * @return {?}
                     */function () {
                        /** @type {?} */
                        var index = viewContainer.indexOf(viewRef);
                        if (index !== -1) {
                            viewContainer.remove(index);
                        }
                    })));
                    // TODO(jelbourn): Return locals from view.
                    return viewRef;
                };
                /**
                 * Clears out a portal from the DOM.
                 * @return {?}
                 */
                DomPortalOutlet.prototype.dispose = function () {
                    _super.prototype.dispose.call(this);
                    if (this.outletElement.parentNode != null) {
                        this.outletElement.parentNode.removeChild(this.outletElement);
                    }
                };
                /**
                 * Gets the root HTMLElement for an instantiated component.
                 * @private
                 * @param {?} componentRef
                 * @return {?}
                 */
                DomPortalOutlet.prototype._getComponentRootNode = function (componentRef) {
                    return ( /** @type {?} */((( /** @type {?} */(componentRef.hostView))).rootNodes[0]));
                };
                return DomPortalOutlet;
            }(BasePortalOutlet));
            /**
             * @deprecated Use `DomPortalOutlet` instead.
             * \@breaking-change 9.0.0
             */
            var DomPortalHost = /** @class */ (function (_super) {
                __extends(DomPortalHost, _super);
                function DomPortalHost() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return DomPortalHost;
            }(DomPortalOutlet));
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Directive version of a `TemplatePortal`. Because the directive *is* a TemplatePortal,
             * the directive instance itself can be attached to a host, enabling declarative use of portals.
             */
            var CdkPortal = /** @class */ (function (_super) {
                __extends(CdkPortal, _super);
                /**
                 * @param {?} templateRef
                 * @param {?} viewContainerRef
                 */
                function CdkPortal(templateRef, viewContainerRef) {
                    return _super.call(this, templateRef, viewContainerRef) || this;
                }
                return CdkPortal;
            }(TemplatePortal));
            CdkPortal.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[cdkPortal]',
                            exportAs: 'cdkPortal',
                        },] },
            ];
            /** @nocollapse */
            CdkPortal.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }
            ]; };
            /**
             * @deprecated Use `CdkPortal` instead.
             * \@breaking-change 9.0.0
             */
            var TemplatePortalDirective = /** @class */ (function (_super) {
                __extends(TemplatePortalDirective, _super);
                function TemplatePortalDirective() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return TemplatePortalDirective;
            }(CdkPortal));
            TemplatePortalDirective.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[cdk-portal], [portal]',
                            exportAs: 'cdkPortal',
                            providers: [{
                                    provide: CdkPortal,
                                    useExisting: TemplatePortalDirective
                                }]
                        },] },
            ];
            /**
             * Directive version of a PortalOutlet. Because the directive *is* a PortalOutlet, portals can be
             * directly attached to it, enabling declarative use.
             *
             * Usage:
             * `<ng-template [cdkPortalOutlet]="greeting"></ng-template>`
             */
            var CdkPortalOutlet = /** @class */ (function (_super) {
                __extends(CdkPortalOutlet, _super);
                /**
                 * @param {?} _componentFactoryResolver
                 * @param {?} _viewContainerRef
                 */
                function CdkPortalOutlet(_componentFactoryResolver, _viewContainerRef) {
                    var _this = _super.call(this) || this;
                    _this._componentFactoryResolver = _componentFactoryResolver;
                    _this._viewContainerRef = _viewContainerRef;
                    /**
                     * Whether the portal component is initialized.
                     */
                    _this._isInitialized = false;
                    /**
                     * Emits when a portal is attached to the outlet.
                     */
                    _this.attached = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    return _this;
                }
                Object.defineProperty(CdkPortalOutlet.prototype, "portal", {
                    /**
                     * Portal associated with the Portal outlet.
                     * @return {?}
                     */
                    get: function () {
                        return this._attachedPortal;
                    },
                    /**
                     * @param {?} portal
                     * @return {?}
                     */
                    set: function (portal) {
                        // Ignore the cases where the `portal` is set to a falsy value before the lifecycle hooks have
                        // run. This handles the cases where the user might do something like `<div cdkPortalOutlet>`
                        // and attach a portal programmatically in the parent component. When Angular does the first CD
                        // round, it will fire the setter with empty string, causing the user's content to be cleared.
                        if (this.hasAttached() && !portal && !this._isInitialized) {
                            return;
                        }
                        if (this.hasAttached()) {
                            _super.prototype.detach.call(this);
                        }
                        if (portal) {
                            _super.prototype.attach.call(this, portal);
                        }
                        this._attachedPortal = portal;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(CdkPortalOutlet.prototype, "attachedRef", {
                    /**
                     * Component or view reference that is attached to the portal.
                     * @return {?}
                     */
                    get: function () {
                        return this._attachedRef;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @return {?}
                 */
                CdkPortalOutlet.prototype.ngOnInit = function () {
                    this._isInitialized = true;
                };
                /**
                 * @return {?}
                 */
                CdkPortalOutlet.prototype.ngOnDestroy = function () {
                    _super.prototype.dispose.call(this);
                    this._attachedPortal = null;
                    this._attachedRef = null;
                };
                /**
                 * Attach the given ComponentPortal to this PortalOutlet using the ComponentFactoryResolver.
                 *
                 * @template T
                 * @param {?} portal Portal to be attached to the portal outlet.
                 * @return {?} Reference to the created component.
                 */
                CdkPortalOutlet.prototype.attachComponentPortal = function (portal) {
                    portal.setAttachedHost(this);
                    // If the portal specifies an origin, use that as the logical location of the component
                    // in the application tree. Otherwise use the location of this PortalOutlet.
                    /** @type {?} */
                    var viewContainerRef = portal.viewContainerRef != null ?
                        portal.viewContainerRef :
                        this._viewContainerRef;
                    /** @type {?} */
                    var resolver = portal.componentFactoryResolver || this._componentFactoryResolver;
                    /** @type {?} */
                    var componentFactory = resolver.resolveComponentFactory(portal.component);
                    /** @type {?} */
                    var ref = viewContainerRef.createComponent(componentFactory, viewContainerRef.length, portal.injector || viewContainerRef.injector);
                    _super.prototype.setDisposeFn.call(this, ( /**
                     * @return {?}
                     */function () { return ref.destroy(); }));
                    this._attachedPortal = portal;
                    this._attachedRef = ref;
                    this.attached.emit(ref);
                    return ref;
                };
                /**
                 * Attach the given TemplatePortal to this PortlHost as an embedded View.
                 * @template C
                 * @param {?} portal Portal to be attached.
                 * @return {?} Reference to the created embedded view.
                 */
                CdkPortalOutlet.prototype.attachTemplatePortal = function (portal) {
                    var _this = this;
                    portal.setAttachedHost(this);
                    /** @type {?} */
                    var viewRef = this._viewContainerRef.createEmbeddedView(portal.templateRef, portal.context);
                    _super.prototype.setDisposeFn.call(this, ( /**
                     * @return {?}
                     */function () { return _this._viewContainerRef.clear(); }));
                    this._attachedPortal = portal;
                    this._attachedRef = viewRef;
                    this.attached.emit(viewRef);
                    return viewRef;
                };
                return CdkPortalOutlet;
            }(BasePortalOutlet));
            CdkPortalOutlet.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[cdkPortalOutlet]',
                            exportAs: 'cdkPortalOutlet',
                            inputs: ['portal: cdkPortalOutlet']
                        },] },
            ];
            /** @nocollapse */
            CdkPortalOutlet.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }
            ]; };
            CdkPortalOutlet.propDecorators = {
                attached: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
            };
            /**
             * @deprecated Use `CdkPortalOutlet` instead.
             * \@breaking-change 9.0.0
             */
            var PortalHostDirective = /** @class */ (function (_super) {
                __extends(PortalHostDirective, _super);
                function PortalHostDirective() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PortalHostDirective;
            }(CdkPortalOutlet));
            PortalHostDirective.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[cdkPortalHost], [portalHost]',
                            exportAs: 'cdkPortalHost',
                            inputs: ['portal: cdkPortalHost'],
                            providers: [{
                                    provide: CdkPortalOutlet,
                                    useExisting: PortalHostDirective
                                }]
                        },] },
            ];
            var PortalModule = /** @class */ (function () {
                function PortalModule() {
                }
                return PortalModule;
            }());
            PortalModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                            exports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective],
                            declarations: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective],
                        },] },
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Custom injector to be used when providing custom
             * injection tokens to components inside a portal.
             * \@docs-private
             */
            var PortalInjector = /** @class */ (function () {
                /**
                 * @param {?} _parentInjector
                 * @param {?} _customTokens
                 */
                function PortalInjector(_parentInjector, _customTokens) {
                    this._parentInjector = _parentInjector;
                    this._customTokens = _customTokens;
                }
                /**
                 * @param {?} token
                 * @param {?=} notFoundValue
                 * @return {?}
                 */
                PortalInjector.prototype.get = function (token, notFoundValue) {
                    /** @type {?} */
                    var value = this._customTokens.get(token);
                    if (typeof value !== 'undefined') {
                        return value;
                    }
                    return this._parentInjector.get(token, notFoundValue);
                };
                return PortalInjector;
            }());
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            //# sourceMappingURL=portal.js.map
            /***/ 
        })
    }]);
//# sourceMappingURL=default~pages-angular-material-components-expansion-expansion-module~pages-angular-material-componen~8b9f42ff-es2015.js.map
//# sourceMappingURL=default~pages-angular-material-components-expansion-expansion-module~pages-angular-material-componen~8b9f42ff-es5.js.map
//# sourceMappingURL=default~pages-angular-material-components-expansion-expansion-module~pages-angular-material-componen~8b9f42ff-es5.js.map