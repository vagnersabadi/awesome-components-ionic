!function(){function e(e,n){var i;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(i=function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return t(e,n)}(e))||n&&e&&"number"==typeof e.length){i&&(e=i);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,c=!1;return{s:function(){i=e[Symbol.iterator]()},n:function(){var e=i.next();return s=e.done,e},e:function(e){c=!0,r=e},f:function(){try{s||null==i.return||i.return()}finally{if(c)throw r}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function n(e,t,i){return(n="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}(e,t);if(i){var o=Object.getOwnPropertyDescriptor(i,t);return o.get?o.get.call(n):o.value}})(e,t,i||e)}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,i=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return r(this,n)}}function r(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?s(e):t}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function u(e,t,n){return t&&d(e.prototype,t),n&&d(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"+rOU":function(e,t,o){"use strict";o.d(t,"a",function(){return b}),o.d(t,"b",function(){return v}),o.d(t,"c",function(){return p}),o.d(t,"d",function(){return g}),o.d(t,"e",function(){return y}),o.d(t,"f",function(){return f});var r=o("fXoL"),d=o("ofXK"),h=function(){function e(){l(this,e)}return u(e,[{key:"attach",value:function(e){return this._attachedHost=e,e.attach(this)}},{key:"detach",value:function(){var e=this._attachedHost;null!=e&&(this._attachedHost=null,e.detach())}},{key:"isAttached",get:function(){return null!=this._attachedHost}},{key:"setAttachedHost",value:function(e){this._attachedHost=e}}]),e}(),p=function(e){i(n,e);var t=a(n);function n(e,i,o,a){var r;return l(this,n),(r=t.call(this)).component=e,r.viewContainerRef=i,r.injector=o,r.componentFactoryResolver=a,r}return n}(h),f=function(e){i(o,e);var t=a(o);function o(e,n,i){var a;return l(this,o),(a=t.call(this)).templateRef=e,a.viewContainerRef=n,a.context=i,a}return u(o,[{key:"origin",get:function(){return this.templateRef.elementRef}},{key:"attach",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.context;return this.context=t,n(c(o.prototype),"attach",this).call(this,e)}},{key:"detach",value:function(){return this.context=void 0,n(c(o.prototype),"detach",this).call(this)}}]),o}(h),m=function(e){i(n,e);var t=a(n);function n(e){var i;return l(this,n),(i=t.call(this)).element=e instanceof r.m?e.nativeElement:e,i}return n}(h),b=function(){function e(){l(this,e),this._isDisposed=!1,this.attachDomPortal=null}return u(e,[{key:"hasAttached",value:function(){return!!this._attachedPortal}},{key:"attach",value:function(e){return e instanceof p?(this._attachedPortal=e,this.attachComponentPortal(e)):e instanceof f?(this._attachedPortal=e,this.attachTemplatePortal(e)):this.attachDomPortal&&e instanceof m?(this._attachedPortal=e,this.attachDomPortal(e)):void 0}},{key:"detach",value:function(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}},{key:"dispose",value:function(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}},{key:"setDisposeFn",value:function(e){this._disposeFn=e}},{key:"_invokeDisposeFn",value:function(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}}]),e}(),g=function(e){i(o,e);var t=a(o);function o(e,i,a,r,d){var u,h;return l(this,o),(h=t.call(this)).outletElement=e,h._componentFactoryResolver=i,h._appRef=a,h._defaultInjector=r,h.attachDomPortal=function(e){var t=e.element,i=h._document.createComment("dom-portal");t.parentNode.insertBefore(i,t),h.outletElement.appendChild(t),n((u=s(h),c(o.prototype)),"setDisposeFn",u).call(u,function(){i.parentNode&&i.parentNode.replaceChild(t,i)})},h._document=d,h}return u(o,[{key:"attachComponentPortal",value:function(e){var t,n=this,i=(e.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(e.component);return e.viewContainerRef?(t=e.viewContainerRef.createComponent(i,e.viewContainerRef.length,e.injector||e.viewContainerRef.injector),this.setDisposeFn(function(){return t.destroy()})):(t=i.create(e.injector||this._defaultInjector),this._appRef.attachView(t.hostView),this.setDisposeFn(function(){n._appRef.detachView(t.hostView),t.destroy()})),this.outletElement.appendChild(this._getComponentRootNode(t)),t}},{key:"attachTemplatePortal",value:function(e){var t=this,n=e.viewContainerRef,i=n.createEmbeddedView(e.templateRef,e.context);return i.rootNodes.forEach(function(e){return t.outletElement.appendChild(e)}),i.detectChanges(),this.setDisposeFn(function(){var e=n.indexOf(i);-1!==e&&n.remove(e)}),i}},{key:"dispose",value:function(){n(c(o.prototype),"dispose",this).call(this),null!=this.outletElement.parentNode&&this.outletElement.parentNode.removeChild(this.outletElement)}},{key:"_getComponentRootNode",value:function(e){return e.hostView.rootNodes[0]}}]),o}(b),v=function(){var e=function(e){i(o,e);var t=a(o);function o(e,i,a){var d,u;return l(this,o),(u=t.call(this))._componentFactoryResolver=e,u._viewContainerRef=i,u._isInitialized=!1,u.attached=new r.p,u.attachDomPortal=function(e){var t=e.element,i=u._document.createComment("dom-portal");e.setAttachedHost(s(u)),t.parentNode.insertBefore(i,t),u._getRootNode().appendChild(t),n((d=s(u),c(o.prototype)),"setDisposeFn",d).call(d,function(){i.parentNode&&i.parentNode.replaceChild(t,i)})},u._document=a,u}return u(o,[{key:"portal",get:function(){return this._attachedPortal},set:function(e){(!this.hasAttached()||e||this._isInitialized)&&(this.hasAttached()&&n(c(o.prototype),"detach",this).call(this),e&&n(c(o.prototype),"attach",this).call(this,e),this._attachedPortal=e)}},{key:"attachedRef",get:function(){return this._attachedRef}},{key:"ngOnInit",value:function(){this._isInitialized=!0}},{key:"ngOnDestroy",value:function(){n(c(o.prototype),"dispose",this).call(this),this._attachedPortal=null,this._attachedRef=null}},{key:"attachComponentPortal",value:function(e){e.setAttachedHost(this);var t=null!=e.viewContainerRef?e.viewContainerRef:this._viewContainerRef,i=(e.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(e.component),a=t.createComponent(i,t.length,e.injector||t.injector);return t!==this._viewContainerRef&&this._getRootNode().appendChild(a.hostView.rootNodes[0]),n(c(o.prototype),"setDisposeFn",this).call(this,function(){return a.destroy()}),this._attachedPortal=e,this._attachedRef=a,this.attached.emit(a),a}},{key:"attachTemplatePortal",value:function(e){var t=this;e.setAttachedHost(this);var i=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context);return n(c(o.prototype),"setDisposeFn",this).call(this,function(){return t._viewContainerRef.clear()}),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}},{key:"_getRootNode",value:function(){var e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}}]),o}(b);return e.\u0275fac=function(t){return new(t||e)(r.Pb(r.k),r.Pb(r.S),r.Pb(d.e))},e.\u0275dir=r.Kb({type:e,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:["cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[r.Ab]}),e}(),y=function(){var e=function e(){l(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.Nb({type:e}),e.\u0275inj=r.Mb({}),e}()},"0EQZ":function(t,n,o){"use strict";o.d(n,"a",function(){return f}),o.d(n,"b",function(){return h}),o.d(n,"c",function(){return g}),o.d(n,"d",function(){return v}),o.d(n,"e",function(){return m}),o.d(n,"f",function(){return b}),o.d(n,"g",function(){return y}),o.d(n,"h",function(){return p});var r=o("7+OI"),s=o("LRne"),c=o("XNiG"),d=o("fXoL"),h=function e(){l(this,e)};function p(e){return e&&"function"==typeof e.connect}var f=function(e){i(n,e);var t=a(n);function n(e){var i;return l(this,n),(i=t.call(this))._data=e,i}return u(n,[{key:"connect",value:function(){return Object(r.a)(this._data)?this._data:Object(s.a)(this._data)}},{key:"disconnect",value:function(){}}]),n}(h),m=function(){function e(){l(this,e)}return u(e,[{key:"applyChanges",value:function(e,t,n,i,o){e.forEachOperation(function(e,i,a){var r,s;if(null==e.previousIndex){var c=n(e,i,a);r=t.createEmbeddedView(c.templateRef,c.context,c.index),s=1}else null==a?(t.remove(i),s=3):(r=t.get(i),t.move(r,a),s=2);o&&o({context:null==r?void 0:r.context,operation:s,record:e})})}},{key:"detach",value:function(){}}]),e}(),b=function(){function t(){l(this,t),this.viewCacheSize=20,this._viewCache=[]}return u(t,[{key:"applyChanges",value:function(e,t,n,i,o){var a=this;e.forEachOperation(function(e,r,s){var c,l;null==e.previousIndex?l=(c=a._insertView(function(){return n(e,r,s)},s,t,i(e)))?1:0:null==s?(a._detachAndCacheView(r,t),l=3):(c=a._moveView(r,s,t,i(e)),l=2),o&&o({context:null==c?void 0:c.context,operation:l,record:e})})}},{key:"detach",value:function(){var t,n=e(this._viewCache);try{for(n.s();!(t=n.n()).done;){t.value.destroy()}}catch(i){n.e(i)}finally{n.f()}this._viewCache=[]}},{key:"_insertView",value:function(e,t,n,i){var o=this._insertViewFromCache(t,n);if(!o){var a=e();return n.createEmbeddedView(a.templateRef,a.context,a.index)}o.context.$implicit=i}},{key:"_detachAndCacheView",value:function(e,t){var n=t.detach(e);this._maybeCacheView(n,t)}},{key:"_moveView",value:function(e,t,n,i){var o=n.get(e);return n.move(o,t),o.context.$implicit=i,o}},{key:"_maybeCacheView",value:function(e,t){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(e);else{var n=t.indexOf(e);-1===n?e.destroy():t.remove(n)}}},{key:"_insertViewFromCache",value:function(e,t){var n=this._viewCache.pop();return n&&t.insert(n,e),n||null}}]),t}(),g=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=arguments.length>1?arguments[1]:void 0,o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];l(this,e),this._multiple=n,this._emitChanges=o,this._selection=new Set,this._deselectedToEmit=[],this._selectedToEmit=[],this.changed=new c.a,i&&i.length&&(n?i.forEach(function(e){return t._markSelected(e)}):this._markSelected(i[0]),this._selectedToEmit.length=0)}return u(e,[{key:"selected",get:function(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}},{key:"select",value:function(){for(var e=this,t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];this._verifyValueAssignment(n),n.forEach(function(t){return e._markSelected(t)}),this._emitChangeEvent()}},{key:"deselect",value:function(){for(var e=this,t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];this._verifyValueAssignment(n),n.forEach(function(t){return e._unmarkSelected(t)}),this._emitChangeEvent()}},{key:"toggle",value:function(e){this.isSelected(e)?this.deselect(e):this.select(e)}},{key:"clear",value:function(){this._unmarkAll(),this._emitChangeEvent()}},{key:"isSelected",value:function(e){return this._selection.has(e)}},{key:"isEmpty",value:function(){return 0===this._selection.size}},{key:"hasValue",value:function(){return!this.isEmpty()}},{key:"sort",value:function(e){this._multiple&&this.selected&&this._selected.sort(e)}},{key:"isMultipleSelection",value:function(){return this._multiple}},{key:"_emitChangeEvent",value:function(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}},{key:"_markSelected",value:function(e){this.isSelected(e)||(this._multiple||this._unmarkAll(),this._selection.add(e),this._emitChanges&&this._selectedToEmit.push(e))}},{key:"_unmarkSelected",value:function(e){this.isSelected(e)&&(this._selection.delete(e),this._emitChanges&&this._deselectedToEmit.push(e))}},{key:"_unmarkAll",value:function(){var e=this;this.isEmpty()||this._selection.forEach(function(t){return e._unmarkSelected(t)})}},{key:"_verifyValueAssignment",value:function(e){}}]),e}(),v=function(){var t=function(){function t(){l(this,t),this._listeners=[]}return u(t,[{key:"notify",value:function(t,n){var i,o=e(this._listeners);try{for(o.s();!(i=o.n()).done;){(0,i.value)(t,n)}}catch(a){o.e(a)}finally{o.f()}}},{key:"listen",value:function(e){var t=this;return this._listeners.push(e),function(){t._listeners=t._listeners.filter(function(t){return e!==t})}}},{key:"ngOnDestroy",value:function(){this._listeners=[]}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=Object(d.Lb)({factory:function(){return new t},token:t,providedIn:"root"}),t}(),y=new d.t("_ViewRepeater")},"7+OI":function(e,t,n){"use strict";n.d(t,"a",function(){return o});var i=n("HDdC");function o(e){return!!e&&(e instanceof i.a||"function"==typeof e.lift&&"function"==typeof e.subscribe)}},cEUy:function(e,t,o){"use strict";o.r(t),o.d(t,"ExpansionPageModule",function(){return fe});var r,s,d,h=o("ofXK"),p=o("3Pt+"),f=o("tyNb"),m=o("TEn/"),b=o("fXoL"),g=o("8LU1"),v=o("XNiG"),y=o("quSY"),_=o("0EQZ"),x=0,k=new b.t("CdkAccordion"),w=((d=function(){function e(){l(this,e),this._stateChanges=new v.a,this._openCloseAllActions=new v.a,this.id="cdk-accordion-"+x++,this._multi=!1}return u(e,[{key:"multi",get:function(){return this._multi},set:function(e){this._multi=Object(g.c)(e)}},{key:"openAll",value:function(){this._multi&&this._openCloseAllActions.next(!0)}},{key:"closeAll",value:function(){this._openCloseAllActions.next(!1)}},{key:"ngOnChanges",value:function(e){this._stateChanges.next(e)}},{key:"ngOnDestroy",value:function(){this._stateChanges.complete(),this._openCloseAllActions.complete()}}]),e}()).\u0275fac=function(e){return new(e||d)},d.\u0275dir=b.Kb({type:d,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:"multi"},exportAs:["cdkAccordion"],features:[b.Cb([{provide:k,useExisting:d}]),b.Bb]}),d),C=0,O=((s=function(){function e(t,n,i){var o=this;l(this,e),this.accordion=t,this._changeDetectorRef=n,this._expansionDispatcher=i,this._openCloseAllSubscription=y.a.EMPTY,this.closed=new b.p,this.opened=new b.p,this.destroyed=new b.p,this.expandedChange=new b.p,this.id="cdk-accordion-child-"+C++,this._expanded=!1,this._disabled=!1,this._removeUniqueSelectionListener=function(){},this._removeUniqueSelectionListener=i.listen(function(e,t){o.accordion&&!o.accordion.multi&&o.accordion.id===t&&o.id!==e&&(o.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}return u(e,[{key:"expanded",get:function(){return this._expanded},set:function(e){e=Object(g.c)(e),this._expanded!==e&&(this._expanded=e,this.expandedChange.emit(e),e?(this.opened.emit(),this._expansionDispatcher.notify(this.id,this.accordion?this.accordion.id:this.id)):this.closed.emit(),this._changeDetectorRef.markForCheck())}},{key:"disabled",get:function(){return this._disabled},set:function(e){this._disabled=Object(g.c)(e)}},{key:"ngOnDestroy",value:function(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}},{key:"toggle",value:function(){this.disabled||(this.expanded=!this.expanded)}},{key:"close",value:function(){this.disabled||(this.expanded=!1)}},{key:"open",value:function(){this.disabled||(this.expanded=!0)}},{key:"_subscribeToOpenCloseAllActions",value:function(){var e=this;return this.accordion._openCloseAllActions.subscribe(function(t){e.disabled||(e.expanded=t)})}}]),e}()).\u0275fac=function(e){return new(e||s)(b.Pb(k,12),b.Pb(b.i),b.Pb(_.d))},s.\u0275dir=b.Kb({type:s,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:"expanded",disabled:"disabled"},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[b.Cb([{provide:k,useValue:void 0}])]}),s),E=((r=function e(){l(this,e)}).\u0275fac=function(e){return new(e||r)},r.\u0275mod=b.Nb({type:r}),r.\u0275inj=b.Mb({}),r),P=o("+rOU"),A=o("FKr1"),R=o("u47x"),j=o("/uUt"),S=o("JX91"),T=o("pLZG"),V=o("IzEk"),D=o("FtGj"),H=o("R1ws"),I=o("EY2u"),F=o("VRyK"),N=o("R0Ic"),M=["body"];function U(e,t){}var L=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],z=["mat-expansion-panel-header","*","mat-action-row"];function K(e,t){if(1&e&&b.Qb(0,"span",2),2&e){var n=b.hc();b.nc("@indicatorRotate",n._getExpandedState())}}var X,B,J,Q,G,q,Y,Z,$,W=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],ee=["mat-panel-title","mat-panel-description","*"],te=new b.t("MAT_ACCORDION"),ne={indicatorRotate:Object(N.n)("indicatorRotate",[Object(N.k)("collapsed, void",Object(N.l)({transform:"rotate(0deg)"})),Object(N.k)("expanded",Object(N.l)({transform:"rotate(180deg)"})),Object(N.m)("expanded <=> collapsed, void => collapsed",Object(N.e)("225ms cubic-bezier(0.4,0.0,0.2,1)"))]),bodyExpansion:Object(N.n)("bodyExpansion",[Object(N.k)("collapsed, void",Object(N.l)({height:"0px",visibility:"hidden"})),Object(N.k)("expanded",Object(N.l)({height:"*",visibility:"visible"})),Object(N.m)("expanded <=> collapsed, void => collapsed",Object(N.e)("225ms cubic-bezier(0.4,0.0,0.2,1)"))])},ie=((X=function e(t){l(this,e),this._template=t}).\u0275fac=function(e){return new(e||X)(b.Pb(b.O))},X.\u0275dir=b.Kb({type:X,selectors:[["ng-template","matExpansionPanelContent",""]]}),X),oe=0,ae=new b.t("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),re=((q=function(e){i(o,e);var t=a(o);function o(e,n,i,a,r,s,c){var d;return l(this,o),(d=t.call(this,e,n,i))._viewContainerRef=a,d._animationMode=s,d._hideToggle=!1,d.afterExpand=new b.p,d.afterCollapse=new b.p,d._inputChanges=new v.a,d._headerId="mat-expansion-panel-header-"+oe++,d._bodyAnimationDone=new v.a,d.accordion=e,d._document=r,d._bodyAnimationDone.pipe(Object(j.a)(function(e,t){return e.fromState===t.fromState&&e.toState===t.toState})).subscribe(function(e){"void"!==e.fromState&&("expanded"===e.toState?d.afterExpand.emit():"collapsed"===e.toState&&d.afterCollapse.emit())}),c&&(d.hideToggle=c.hideToggle),d}return u(o,[{key:"hideToggle",get:function(){return this._hideToggle||this.accordion&&this.accordion.hideToggle},set:function(e){this._hideToggle=Object(g.c)(e)}},{key:"togglePosition",get:function(){return this._togglePosition||this.accordion&&this.accordion.togglePosition},set:function(e){this._togglePosition=e}},{key:"_hasSpacing",value:function(){return!!this.accordion&&this.expanded&&"default"===this.accordion.displayMode}},{key:"_getExpandedState",value:function(){return this.expanded?"expanded":"collapsed"}},{key:"toggle",value:function(){this.expanded=!this.expanded}},{key:"close",value:function(){this.expanded=!1}},{key:"open",value:function(){this.expanded=!0}},{key:"ngAfterContentInit",value:function(){var e=this;this._lazyContent&&this.opened.pipe(Object(S.a)(null),Object(T.a)(function(){return e.expanded&&!e._portal}),Object(V.a)(1)).subscribe(function(){e._portal=new P.f(e._lazyContent._template,e._viewContainerRef)})}},{key:"ngOnChanges",value:function(e){this._inputChanges.next(e)}},{key:"ngOnDestroy",value:function(){n(c(o.prototype),"ngOnDestroy",this).call(this),this._bodyAnimationDone.complete(),this._inputChanges.complete()}},{key:"_containsFocus",value:function(){if(this._body){var e=this._document.activeElement,t=this._body.nativeElement;return e===t||t.contains(e)}return!1}}]),o}(O)).\u0275fac=function(e){return new(e||q)(b.Pb(te,12),b.Pb(b.i),b.Pb(_.d),b.Pb(b.S),b.Pb(h.e),b.Pb(H.a,8),b.Pb(ae,8))},q.\u0275cmp=b.Jb({type:q,selectors:[["mat-expansion-panel"]],contentQueries:function(e,t,n){var i;1&e&&b.Ib(n,ie,1),2&e&&b.xc(i=b.ec())&&(t._lazyContent=i.first)},viewQuery:function(e,t){var n;1&e&&b.Pc(M,1),2&e&&b.xc(n=b.ec())&&(t._body=n.first)},hostAttrs:[1,"mat-expansion-panel"],hostVars:6,hostBindings:function(e,t){2&e&&b.Hb("mat-expanded",t.expanded)("_mat-animation-noopable","NoopAnimations"===t._animationMode)("mat-expansion-panel-spacing",t._hasSpacing())},inputs:{disabled:"disabled",expanded:"expanded",hideToggle:"hideToggle",togglePosition:"togglePosition"},outputs:{opened:"opened",closed:"closed",expandedChange:"expandedChange",afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[b.Cb([{provide:te,useValue:void 0}]),b.Ab,b.Bb],ngContentSelectors:z,decls:7,vars:4,consts:[["role","region",1,"mat-expansion-panel-content",3,"id"],["body",""],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(e,t){1&e&&(b.mc(L),b.lc(0),b.Vb(1,"div",0,1),b.dc("@bodyExpansion.done",function(e){return t._bodyAnimationDone.next(e)}),b.Vb(3,"div",2),b.lc(4,1),b.Jc(5,U,0,0,"ng-template",3),b.Ub(),b.lc(6,2),b.Ub()),2&e&&(b.Db(1),b.nc("@bodyExpansion",t._getExpandedState())("id",t.id),b.Eb("aria-labelledby",t._headerId),b.Db(4),b.nc("cdkPortalOutlet",t._portal))},directives:[P.b],styles:[".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row button.mat-button-base,.mat-action-row button.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row button.mat-button-base,[dir=rtl] .mat-action-row button.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"],encapsulation:2,data:{animation:[ne.bodyExpansion]},changeDetection:0}),q),se=((G=function(){function e(t,n,i,o,a,r){var s=this;l(this,e),this.panel=t,this._element=n,this._focusMonitor=i,this._changeDetectorRef=o,this._animationMode=r,this._parentChangeSubscription=y.a.EMPTY;var c=t.accordion?t.accordion._stateChanges.pipe(Object(T.a)(function(e){return!(!e.hideToggle&&!e.togglePosition)})):I.a;this._parentChangeSubscription=Object(F.a)(t.opened,t.closed,c,t._inputChanges.pipe(Object(T.a)(function(e){return!!(e.hideToggle||e.disabled||e.togglePosition)}))).subscribe(function(){return s._changeDetectorRef.markForCheck()}),t.closed.pipe(Object(T.a)(function(){return t._containsFocus()})).subscribe(function(){return i.focusVia(n,"program")}),a&&(this.expandedHeight=a.expandedHeight,this.collapsedHeight=a.collapsedHeight)}return u(e,[{key:"disabled",get:function(){return this.panel.disabled}},{key:"_toggle",value:function(){this.disabled||this.panel.toggle()}},{key:"_isExpanded",value:function(){return this.panel.expanded}},{key:"_getExpandedState",value:function(){return this.panel._getExpandedState()}},{key:"_getPanelId",value:function(){return this.panel.id}},{key:"_getTogglePosition",value:function(){return this.panel.togglePosition}},{key:"_showToggle",value:function(){return!this.panel.hideToggle&&!this.panel.disabled}},{key:"_getHeaderHeight",value:function(){var e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}},{key:"_keydown",value:function(e){switch(e.keyCode){case D.m:case D.e:Object(D.r)(e)||(e.preventDefault(),this._toggle());break;default:return void(this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e))}}},{key:"focus",value:function(e,t){e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}},{key:"ngAfterViewInit",value:function(){var e=this;this._focusMonitor.monitor(this._element).subscribe(function(t){t&&e.panel.accordion&&e.panel.accordion._handleHeaderFocus(e)})}},{key:"ngOnDestroy",value:function(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}}]),e}()).\u0275fac=function(e){return new(e||G)(b.Pb(re,1),b.Pb(b.m),b.Pb(R.h),b.Pb(b.i),b.Pb(ae,8),b.Pb(H.a,8))},G.\u0275cmp=b.Jb({type:G,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:15,hostBindings:function(e,t){1&e&&b.dc("click",function(){return t._toggle()})("keydown",function(e){return t._keydown(e)}),2&e&&(b.Eb("id",t.panel._headerId)("tabindex",t.disabled?-1:0)("aria-controls",t._getPanelId())("aria-expanded",t._isExpanded())("aria-disabled",t.panel.disabled),b.Gc("height",t._getHeaderHeight()),b.Hb("mat-expanded",t._isExpanded())("mat-expansion-toggle-indicator-after","after"===t._getTogglePosition())("mat-expansion-toggle-indicator-before","before"===t._getTogglePosition())("_mat-animation-noopable","NoopAnimations"===t._animationMode))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight"},ngContentSelectors:ee,decls:5,vars:1,consts:[[1,"mat-content"],["class","mat-expansion-indicator",4,"ngIf"],[1,"mat-expansion-indicator"]],template:function(e,t){1&e&&(b.mc(W),b.Vb(0,"span",0),b.lc(1),b.lc(2,1),b.lc(3,2),b.Ub(),b.Jc(4,K,1,1,"span",1)),2&e&&(b.Db(4),b.nc("ngIf",t._showToggle()))},directives:[h.o],styles:['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;margin-right:16px}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}.cdk-high-contrast-active .mat-expansion-panel .mat-expansion-panel-header.cdk-keyboard-focused:not([aria-disabled=true])::before,.cdk-high-contrast-active .mat-expansion-panel .mat-expansion-panel-header.cdk-program-focused:not([aria-disabled=true])::before,.cdk-high-contrast-active .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:hover:not([aria-disabled=true])::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;border:3px solid;border-radius:4px;content:""}\n'],encapsulation:2,data:{animation:[ne.indicatorRotate]},changeDetection:0}),G),ce=((Q=function e(){l(this,e)}).\u0275fac=function(e){return new(e||Q)},Q.\u0275dir=b.Kb({type:Q,selectors:[["mat-panel-description"]],hostAttrs:[1,"mat-expansion-panel-header-description"]}),Q),le=((J=function e(){l(this,e)}).\u0275fac=function(e){return new(e||J)},J.\u0275dir=b.Kb({type:J,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]}),J),de=((B=function(e){i(o,e);var t=a(o);function o(){var e;return l(this,o),(e=t.apply(this,arguments))._ownHeaders=new b.G,e._hideToggle=!1,e.displayMode="default",e.togglePosition="after",e}return u(o,[{key:"hideToggle",get:function(){return this._hideToggle},set:function(e){this._hideToggle=Object(g.c)(e)}},{key:"ngAfterContentInit",value:function(){var e=this;this._headers.changes.pipe(Object(S.a)(this._headers)).subscribe(function(t){e._ownHeaders.reset(t.filter(function(t){return t.panel.accordion===e})),e._ownHeaders.notifyOnChanges()}),this._keyManager=new R.g(this._ownHeaders).withWrap().withHomeAndEnd()}},{key:"_handleHeaderKeydown",value:function(e){this._keyManager.onKeydown(e)}},{key:"_handleHeaderFocus",value:function(e){this._keyManager.updateActiveItem(e)}},{key:"ngOnDestroy",value:function(){n(c(o.prototype),"ngOnDestroy",this).call(this),this._ownHeaders.destroy()}}]),o}(w)).\u0275fac=function(e){return ue(e||B)},B.\u0275dir=b.Kb({type:B,selectors:[["mat-accordion"]],contentQueries:function(e,t,n){var i;1&e&&b.Ib(n,se,1),2&e&&b.xc(i=b.ec())&&(t._headers=i)},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(e,t){2&e&&b.Hb("mat-accordion-multi",t.multi)},inputs:{multi:"multi",displayMode:"displayMode",togglePosition:"togglePosition",hideToggle:"hideToggle"},exportAs:["matAccordion"],features:[b.Cb([{provide:te,useExisting:B}]),b.Ab]}),B),ue=b.Xb(de),he=((Y=function e(){l(this,e)}).\u0275fac=function(e){return new(e||Y)},Y.\u0275mod=b.Nb({type:Y}),Y.\u0275inj=b.Mb({imports:[[h.c,A.h,E,P.e]]}),Y),pe=[{path:"",component:(Z=function(){function e(){l(this,e)}return u(e,[{key:"ngOnInit",value:function(){}}]),e}(),Z.\u0275fac=function(e){return new(e||Z)},Z.\u0275cmp=b.Jb({type:Z,selectors:[["app-expansion"]],decls:23,vars:1,consts:[["slot","start"],[1,"ion-padding"],[3,"opened","closed"]],template:function(e,t){1&e&&(b.Vb(0,"ion-header"),b.Vb(1,"ion-toolbar"),b.Vb(2,"ion-buttons",0),b.Qb(3,"ion-back-button"),b.Ub(),b.Vb(4,"ion-title"),b.Lc(5,"Expansion Panel"),b.Ub(),b.Ub(),b.Ub(),b.Vb(6,"ion-content",1),b.Vb(7,"mat-accordion"),b.Vb(8,"mat-expansion-panel"),b.Vb(9,"mat-expansion-panel-header"),b.Vb(10,"mat-panel-title"),b.Lc(11," Personal data "),b.Ub(),b.Vb(12,"mat-panel-description"),b.Lc(13," Type your name and age "),b.Ub(),b.Ub(),b.Lc(14," Panel Content "),b.Ub(),b.Vb(15,"mat-expansion-panel",2),b.dc("opened",function(){return t.panelOpenState=!0})("closed",function(){return t.panelOpenState=!1}),b.Vb(16,"mat-expansion-panel-header"),b.Vb(17,"mat-panel-title"),b.Lc(18," Self aware panel "),b.Ub(),b.Vb(19,"mat-panel-description"),b.Lc(20),b.Ub(),b.Ub(),b.Vb(21,"p"),b.Lc(22,"I'm visible because I am open"),b.Ub(),b.Ub(),b.Ub(),b.Ub()),2&e&&(b.Db(20),b.Nc(" Currently I am ",t.panelOpenState?"open":"closed"," "))},directives:[m.z,m.mb,m.l,m.h,m.i,m.kb,m.u,de,re,se,le,ce],styles:[""]}),Z)}],fe=(($=function e(){l(this,e)}).\u0275fac=function(e){return new(e||$)},$.\u0275mod=b.Nb({type:$}),$.\u0275inj=b.Mb({imports:[[h.c,p.h,m.nb,f.j.forChild(pe),he]]}),$)}}])}();