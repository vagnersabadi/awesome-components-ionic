(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"+rOU":function(e,t,n){"use strict";n.d(t,"a",function(){return d}),n.d(t,"b",function(){return h}),n.d(t,"c",function(){return s}),n.d(t,"d",function(){return l}),n.d(t,"e",function(){return p}),n.d(t,"f",function(){return r});var i=n("fXoL"),o=n("ofXK");class a{attach(e){return this._attachedHost=e,e.attach(this)}detach(){let e=this._attachedHost;null!=e&&(this._attachedHost=null,e.detach())}get isAttached(){return null!=this._attachedHost}setAttachedHost(e){this._attachedHost=e}}class s extends a{constructor(e,t,n,i){super(),this.component=e,this.viewContainerRef=t,this.injector=n,this.componentFactoryResolver=i}}class r extends a{constructor(e,t,n){super(),this.templateRef=e,this.viewContainerRef=t,this.context=n}get origin(){return this.templateRef.elementRef}attach(e,t=this.context){return this.context=t,super.attach(e)}detach(){return this.context=void 0,super.detach()}}class c extends a{constructor(e){super(),this.element=e instanceof i.m?e.nativeElement:e}}class d{constructor(){this._isDisposed=!1,this.attachDomPortal=null}hasAttached(){return!!this._attachedPortal}attach(e){return e instanceof s?(this._attachedPortal=e,this.attachComponentPortal(e)):e instanceof r?(this._attachedPortal=e,this.attachTemplatePortal(e)):this.attachDomPortal&&e instanceof c?(this._attachedPortal=e,this.attachDomPortal(e)):void 0}detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(e){this._disposeFn=e}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}}class l extends d{constructor(e,t,n,i,o){super(),this.outletElement=e,this._componentFactoryResolver=t,this._appRef=n,this._defaultInjector=i,this.attachDomPortal=e=>{const t=e.element,n=this._document.createComment("dom-portal");t.parentNode.insertBefore(n,t),this.outletElement.appendChild(t),super.setDisposeFn(()=>{n.parentNode&&n.parentNode.replaceChild(t,n)})},this._document=o}attachComponentPortal(e){const t=(e.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(e.component);let n;return e.viewContainerRef?(n=e.viewContainerRef.createComponent(t,e.viewContainerRef.length,e.injector||e.viewContainerRef.injector),this.setDisposeFn(()=>n.destroy())):(n=t.create(e.injector||this._defaultInjector),this._appRef.attachView(n.hostView),this.setDisposeFn(()=>{this._appRef.detachView(n.hostView),n.destroy()})),this.outletElement.appendChild(this._getComponentRootNode(n)),n}attachTemplatePortal(e){let t=e.viewContainerRef,n=t.createEmbeddedView(e.templateRef,e.context);return n.rootNodes.forEach(e=>this.outletElement.appendChild(e)),n.detectChanges(),this.setDisposeFn(()=>{let e=t.indexOf(n);-1!==e&&t.remove(e)}),n}dispose(){super.dispose(),null!=this.outletElement.parentNode&&this.outletElement.parentNode.removeChild(this.outletElement)}_getComponentRootNode(e){return e.hostView.rootNodes[0]}}let h=(()=>{class e extends d{constructor(e,t,n){super(),this._componentFactoryResolver=e,this._viewContainerRef=t,this._isInitialized=!1,this.attached=new i.p,this.attachDomPortal=e=>{const t=e.element,n=this._document.createComment("dom-portal");e.setAttachedHost(this),t.parentNode.insertBefore(n,t),this._getRootNode().appendChild(t),super.setDisposeFn(()=>{n.parentNode&&n.parentNode.replaceChild(t,n)})},this._document=n}get portal(){return this._attachedPortal}set portal(e){(!this.hasAttached()||e||this._isInitialized)&&(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e)}get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedPortal=null,this._attachedRef=null}attachComponentPortal(e){e.setAttachedHost(this);const t=null!=e.viewContainerRef?e.viewContainerRef:this._viewContainerRef,n=(e.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(e.component),i=t.createComponent(n,t.length,e.injector||t.injector);return t!==this._viewContainerRef&&this._getRootNode().appendChild(i.hostView.rootNodes[0]),super.setDisposeFn(()=>i.destroy()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}attachTemplatePortal(e){e.setAttachedHost(this);const t=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context);return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=t,this.attached.emit(t),t}_getRootNode(){const e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}}return e.\u0275fac=function(t){return new(t||e)(i.Pb(i.k),i.Pb(i.S),i.Pb(o.e))},e.\u0275dir=i.Kb({type:e,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:["cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[i.Ab]}),e})(),p=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.Nb({type:e}),e.\u0275inj=i.Mb({}),e})()},"0EQZ":function(e,t,n){"use strict";n.d(t,"a",function(){return d}),n.d(t,"b",function(){return r}),n.d(t,"c",function(){return p}),n.d(t,"d",function(){return u}),n.d(t,"e",function(){return l}),n.d(t,"f",function(){return h}),n.d(t,"g",function(){return m}),n.d(t,"h",function(){return c});var i=n("7+OI"),o=n("LRne"),a=n("XNiG"),s=n("fXoL");class r{}function c(e){return e&&"function"==typeof e.connect}class d extends r{constructor(e){super(),this._data=e}connect(){return Object(i.a)(this._data)?this._data:Object(o.a)(this._data)}disconnect(){}}class l{applyChanges(e,t,n,i,o){e.forEachOperation((e,i,a)=>{let s,r;if(null==e.previousIndex){const o=n(e,i,a);s=t.createEmbeddedView(o.templateRef,o.context,o.index),r=1}else null==a?(t.remove(i),r=3):(s=t.get(i),t.move(s,a),r=2);o&&o({context:null==s?void 0:s.context,operation:r,record:e})})}detach(){}}class h{constructor(){this.viewCacheSize=20,this._viewCache=[]}applyChanges(e,t,n,i,o){e.forEachOperation((e,a,s)=>{let r,c;null==e.previousIndex?(r=this._insertView(()=>n(e,a,s),s,t,i(e)),c=r?1:0):null==s?(this._detachAndCacheView(a,t),c=3):(r=this._moveView(a,s,t,i(e)),c=2),o&&o({context:null==r?void 0:r.context,operation:c,record:e})})}detach(){for(const e of this._viewCache)e.destroy();this._viewCache=[]}_insertView(e,t,n,i){const o=this._insertViewFromCache(t,n);if(o)return void(o.context.$implicit=i);const a=e();return n.createEmbeddedView(a.templateRef,a.context,a.index)}_detachAndCacheView(e,t){const n=t.detach(e);this._maybeCacheView(n,t)}_moveView(e,t,n,i){const o=n.get(e);return n.move(o,t),o.context.$implicit=i,o}_maybeCacheView(e,t){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(e);else{const n=t.indexOf(e);-1===n?e.destroy():t.remove(n)}}_insertViewFromCache(e,t){const n=this._viewCache.pop();return n&&t.insert(n,e),n||null}}class p{constructor(e=!1,t,n=!0){this._multiple=e,this._emitChanges=n,this._selection=new Set,this._deselectedToEmit=[],this._selectedToEmit=[],this.changed=new a.a,t&&t.length&&(e?t.forEach(e=>this._markSelected(e)):this._markSelected(t[0]),this._selectedToEmit.length=0)}get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}select(...e){this._verifyValueAssignment(e),e.forEach(e=>this._markSelected(e)),this._emitChangeEvent()}deselect(...e){this._verifyValueAssignment(e),e.forEach(e=>this._unmarkSelected(e)),this._emitChangeEvent()}toggle(e){this.isSelected(e)?this.deselect(e):this.select(e)}clear(){this._unmarkAll(),this._emitChangeEvent()}isSelected(e){return this._selection.has(e)}isEmpty(){return 0===this._selection.size}hasValue(){return!this.isEmpty()}sort(e){this._multiple&&this.selected&&this._selected.sort(e)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(e){this.isSelected(e)||(this._multiple||this._unmarkAll(),this._selection.add(e),this._emitChanges&&this._selectedToEmit.push(e))}_unmarkSelected(e){this.isSelected(e)&&(this._selection.delete(e),this._emitChanges&&this._deselectedToEmit.push(e))}_unmarkAll(){this.isEmpty()||this._selection.forEach(e=>this._unmarkSelected(e))}_verifyValueAssignment(e){}}let u=(()=>{class e{constructor(){this._listeners=[]}notify(e,t){for(let n of this._listeners)n(e,t)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(t=>e!==t)}}ngOnDestroy(){this._listeners=[]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=Object(s.Lb)({factory:function(){return new e},token:e,providedIn:"root"}),e})();const m=new s.t("_ViewRepeater")},"7+OI":function(e,t,n){"use strict";n.d(t,"a",function(){return o});var i=n("HDdC");function o(e){return!!e&&(e instanceof i.a||"function"==typeof e.lift&&"function"==typeof e.subscribe)}},cEUy:function(e,t,n){"use strict";n.r(t),n.d(t,"ExpansionPageModule",function(){return Y});var i=n("ofXK"),o=n("3Pt+"),a=n("tyNb"),s=n("TEn/"),r=n("fXoL"),c=n("8LU1"),d=n("XNiG"),l=n("quSY"),h=n("0EQZ");let p=0;const u=new r.t("CdkAccordion");let m=(()=>{class e{constructor(){this._stateChanges=new d.a,this._openCloseAllActions=new d.a,this.id="cdk-accordion-"+p++,this._multi=!1}get multi(){return this._multi}set multi(e){this._multi=Object(c.c)(e)}openAll(){this._multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(e){this._stateChanges.next(e)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=r.Kb({type:e,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:"multi"},exportAs:["cdkAccordion"],features:[r.Cb([{provide:u,useExisting:e}]),r.Bb]}),e})(),b=0,g=(()=>{class e{constructor(e,t,n){this.accordion=e,this._changeDetectorRef=t,this._expansionDispatcher=n,this._openCloseAllSubscription=l.a.EMPTY,this.closed=new r.p,this.opened=new r.p,this.destroyed=new r.p,this.expandedChange=new r.p,this.id="cdk-accordion-child-"+b++,this._expanded=!1,this._disabled=!1,this._removeUniqueSelectionListener=()=>{},this._removeUniqueSelectionListener=n.listen((e,t)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===t&&this.id!==e&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}get expanded(){return this._expanded}set expanded(e){e=Object(c.c)(e),this._expanded!==e&&(this._expanded=e,this.expandedChange.emit(e),e?(this.opened.emit(),this._expansionDispatcher.notify(this.id,this.accordion?this.accordion.id:this.id)):this.closed.emit(),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled}set disabled(e){this._disabled=Object(c.c)(e)}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}}return e.\u0275fac=function(t){return new(t||e)(r.Pb(u,12),r.Pb(r.i),r.Pb(h.d))},e.\u0275dir=r.Kb({type:e,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:"expanded",disabled:"disabled"},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[r.Cb([{provide:u,useValue:void 0}])]}),e})(),_=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.Nb({type:e}),e.\u0275inj=r.Mb({}),e})();var f=n("+rOU"),x=n("FKr1"),w=n("u47x"),y=n("/uUt"),v=n("JX91"),C=n("pLZG"),E=n("IzEk"),P=n("FtGj"),A=n("R1ws"),O=n("EY2u"),k=n("VRyK"),R=n("R0Ic");const V=["body"];function T(e,t){}const S=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],D=["mat-expansion-panel-header","*","mat-action-row"];function j(e,t){if(1&e&&r.Qb(0,"span",2),2&e){const e=r.hc();r.nc("@indicatorRotate",e._getExpandedState())}}const H=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],F=["mat-panel-title","mat-panel-description","*"],I=new r.t("MAT_ACCORDION"),N={indicatorRotate:Object(R.n)("indicatorRotate",[Object(R.k)("collapsed, void",Object(R.l)({transform:"rotate(0deg)"})),Object(R.k)("expanded",Object(R.l)({transform:"rotate(180deg)"})),Object(R.m)("expanded <=> collapsed, void => collapsed",Object(R.e)("225ms cubic-bezier(0.4,0.0,0.2,1)"))]),bodyExpansion:Object(R.n)("bodyExpansion",[Object(R.k)("collapsed, void",Object(R.l)({height:"0px",visibility:"hidden"})),Object(R.k)("expanded",Object(R.l)({height:"*",visibility:"visible"})),Object(R.m)("expanded <=> collapsed, void => collapsed",Object(R.e)("225ms cubic-bezier(0.4,0.0,0.2,1)"))])};let M=(()=>{class e{constructor(e){this._template=e}}return e.\u0275fac=function(t){return new(t||e)(r.Pb(r.O))},e.\u0275dir=r.Kb({type:e,selectors:[["ng-template","matExpansionPanelContent",""]]}),e})(),U=0;const L=new r.t("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS");let z=(()=>{class e extends g{constructor(e,t,n,i,o,a,s){super(e,t,n),this._viewContainerRef=i,this._animationMode=a,this._hideToggle=!1,this.afterExpand=new r.p,this.afterCollapse=new r.p,this._inputChanges=new d.a,this._headerId="mat-expansion-panel-header-"+U++,this._bodyAnimationDone=new d.a,this.accordion=e,this._document=o,this._bodyAnimationDone.pipe(Object(y.a)((e,t)=>e.fromState===t.fromState&&e.toState===t.toState)).subscribe(e=>{"void"!==e.fromState&&("expanded"===e.toState?this.afterExpand.emit():"collapsed"===e.toState&&this.afterCollapse.emit())}),s&&(this.hideToggle=s.hideToggle)}get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=Object(c.c)(e)}get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}_hasSpacing(){return!!this.accordion&&this.expanded&&"default"===this.accordion.displayMode}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this.opened.pipe(Object(v.a)(null),Object(C.a)(()=>this.expanded&&!this._portal),Object(E.a)(1)).subscribe(()=>{this._portal=new f.f(this._lazyContent._template,this._viewContainerRef)})}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._bodyAnimationDone.complete(),this._inputChanges.complete()}_containsFocus(){if(this._body){const e=this._document.activeElement,t=this._body.nativeElement;return e===t||t.contains(e)}return!1}}return e.\u0275fac=function(t){return new(t||e)(r.Pb(I,12),r.Pb(r.i),r.Pb(h.d),r.Pb(r.S),r.Pb(i.e),r.Pb(A.a,8),r.Pb(L,8))},e.\u0275cmp=r.Jb({type:e,selectors:[["mat-expansion-panel"]],contentQueries:function(e,t,n){if(1&e&&r.Ib(n,M,1),2&e){let e;r.xc(e=r.ec())&&(t._lazyContent=e.first)}},viewQuery:function(e,t){if(1&e&&r.Pc(V,1),2&e){let e;r.xc(e=r.ec())&&(t._body=e.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:6,hostBindings:function(e,t){2&e&&r.Hb("mat-expanded",t.expanded)("_mat-animation-noopable","NoopAnimations"===t._animationMode)("mat-expansion-panel-spacing",t._hasSpacing())},inputs:{disabled:"disabled",expanded:"expanded",hideToggle:"hideToggle",togglePosition:"togglePosition"},outputs:{opened:"opened",closed:"closed",expandedChange:"expandedChange",afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[r.Cb([{provide:I,useValue:void 0}]),r.Ab,r.Bb],ngContentSelectors:D,decls:7,vars:4,consts:[["role","region",1,"mat-expansion-panel-content",3,"id"],["body",""],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(e,t){1&e&&(r.mc(S),r.lc(0),r.Vb(1,"div",0,1),r.dc("@bodyExpansion.done",function(e){return t._bodyAnimationDone.next(e)}),r.Vb(3,"div",2),r.lc(4,1),r.Jc(5,T,0,0,"ng-template",3),r.Ub(),r.lc(6,2),r.Ub()),2&e&&(r.Db(1),r.nc("@bodyExpansion",t._getExpandedState())("id",t.id),r.Eb("aria-labelledby",t._headerId),r.Db(4),r.nc("cdkPortalOutlet",t._portal))},directives:[f.b],styles:[".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row button.mat-button-base,.mat-action-row button.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row button.mat-button-base,[dir=rtl] .mat-action-row button.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"],encapsulation:2,data:{animation:[N.bodyExpansion]},changeDetection:0}),e})(),K=(()=>{class e{constructor(e,t,n,i,o,a){this.panel=e,this._element=t,this._focusMonitor=n,this._changeDetectorRef=i,this._animationMode=a,this._parentChangeSubscription=l.a.EMPTY;const s=e.accordion?e.accordion._stateChanges.pipe(Object(C.a)(e=>!(!e.hideToggle&&!e.togglePosition))):O.a;this._parentChangeSubscription=Object(k.a)(e.opened,e.closed,s,e._inputChanges.pipe(Object(C.a)(e=>!!(e.hideToggle||e.disabled||e.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(Object(C.a)(()=>e._containsFocus())).subscribe(()=>n.focusVia(t,"program")),o&&(this.expandedHeight=o.expandedHeight,this.collapsedHeight=o.collapsedHeight)}get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){const e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case P.m:case P.e:Object(P.r)(e)||(e.preventDefault(),this._toggle());break;default:return void(this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e))}}focus(e,t){e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}}return e.\u0275fac=function(t){return new(t||e)(r.Pb(z,1),r.Pb(r.m),r.Pb(w.h),r.Pb(r.i),r.Pb(L,8),r.Pb(A.a,8))},e.\u0275cmp=r.Jb({type:e,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:15,hostBindings:function(e,t){1&e&&r.dc("click",function(){return t._toggle()})("keydown",function(e){return t._keydown(e)}),2&e&&(r.Eb("id",t.panel._headerId)("tabindex",t.disabled?-1:0)("aria-controls",t._getPanelId())("aria-expanded",t._isExpanded())("aria-disabled",t.panel.disabled),r.Gc("height",t._getHeaderHeight()),r.Hb("mat-expanded",t._isExpanded())("mat-expansion-toggle-indicator-after","after"===t._getTogglePosition())("mat-expansion-toggle-indicator-before","before"===t._getTogglePosition())("_mat-animation-noopable","NoopAnimations"===t._animationMode))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight"},ngContentSelectors:F,decls:5,vars:1,consts:[[1,"mat-content"],["class","mat-expansion-indicator",4,"ngIf"],[1,"mat-expansion-indicator"]],template:function(e,t){1&e&&(r.mc(H),r.Vb(0,"span",0),r.lc(1),r.lc(2,1),r.lc(3,2),r.Ub(),r.Jc(4,j,1,1,"span",1)),2&e&&(r.Db(4),r.nc("ngIf",t._showToggle()))},directives:[i.o],styles:['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;margin-right:16px}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}.cdk-high-contrast-active .mat-expansion-panel .mat-expansion-panel-header.cdk-keyboard-focused:not([aria-disabled=true])::before,.cdk-high-contrast-active .mat-expansion-panel .mat-expansion-panel-header.cdk-program-focused:not([aria-disabled=true])::before,.cdk-high-contrast-active .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:hover:not([aria-disabled=true])::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;border:3px solid;border-radius:4px;content:""}\n'],encapsulation:2,data:{animation:[N.indicatorRotate]},changeDetection:0}),e})(),X=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=r.Kb({type:e,selectors:[["mat-panel-description"]],hostAttrs:[1,"mat-expansion-panel-header-description"]}),e})(),J=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=r.Kb({type:e,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]}),e})(),B=(()=>{class e extends m{constructor(){super(...arguments),this._ownHeaders=new r.G,this._hideToggle=!1,this.displayMode="default",this.togglePosition="after"}get hideToggle(){return this._hideToggle}set hideToggle(e){this._hideToggle=Object(c.c)(e)}ngAfterContentInit(){this._headers.changes.pipe(Object(v.a)(this._headers)).subscribe(e=>{this._ownHeaders.reset(e.filter(e=>e.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new w.g(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(e){this._keyManager.onKeydown(e)}_handleHeaderFocus(e){this._keyManager.updateActiveItem(e)}ngOnDestroy(){super.ngOnDestroy(),this._ownHeaders.destroy()}}return e.\u0275fac=function(t){return Q(t||e)},e.\u0275dir=r.Kb({type:e,selectors:[["mat-accordion"]],contentQueries:function(e,t,n){if(1&e&&r.Ib(n,K,1),2&e){let e;r.xc(e=r.ec())&&(t._headers=e)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(e,t){2&e&&r.Hb("mat-accordion-multi",t.multi)},inputs:{multi:"multi",displayMode:"displayMode",togglePosition:"togglePosition",hideToggle:"hideToggle"},exportAs:["matAccordion"],features:[r.Cb([{provide:I,useExisting:e}]),r.Ab]}),e})();const Q=r.Xb(B);let G=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.Nb({type:e}),e.\u0275inj=r.Mb({imports:[[i.c,x.h,_,f.e]]}),e})();const q=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Jb({type:e,selectors:[["app-expansion"]],decls:23,vars:1,consts:[["slot","start"],[1,"ion-padding"],[3,"opened","closed"]],template:function(e,t){1&e&&(r.Vb(0,"ion-header"),r.Vb(1,"ion-toolbar"),r.Vb(2,"ion-buttons",0),r.Qb(3,"ion-back-button"),r.Ub(),r.Vb(4,"ion-title"),r.Lc(5,"Expansion Panel"),r.Ub(),r.Ub(),r.Ub(),r.Vb(6,"ion-content",1),r.Vb(7,"mat-accordion"),r.Vb(8,"mat-expansion-panel"),r.Vb(9,"mat-expansion-panel-header"),r.Vb(10,"mat-panel-title"),r.Lc(11," Personal data "),r.Ub(),r.Vb(12,"mat-panel-description"),r.Lc(13," Type your name and age "),r.Ub(),r.Ub(),r.Lc(14," Panel Content "),r.Ub(),r.Vb(15,"mat-expansion-panel",2),r.dc("opened",function(){return t.panelOpenState=!0})("closed",function(){return t.panelOpenState=!1}),r.Vb(16,"mat-expansion-panel-header"),r.Vb(17,"mat-panel-title"),r.Lc(18," Self aware panel "),r.Ub(),r.Vb(19,"mat-panel-description"),r.Lc(20),r.Ub(),r.Ub(),r.Vb(21,"p"),r.Lc(22,"I'm visible because I am open"),r.Ub(),r.Ub(),r.Ub(),r.Ub()),2&e&&(r.Db(20),r.Nc(" Currently I am ",t.panelOpenState?"open":"closed"," "))},directives:[s.z,s.mb,s.l,s.h,s.i,s.kb,s.u,B,z,K,J,X],styles:[""]}),e})()}];let Y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.Nb({type:e}),e.\u0275inj=r.Mb({imports:[[i.c,o.h,s.nb,a.j.forChild(q),G]]}),e})()}}]);