"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6731],{6406:(T,x,l)=>{l.d(x,{Z:()=>C});var R=l(4408),h=l(727);const v={schedule(m){let s=requestAnimationFrame,c=cancelAnimationFrame;const{delegate:a}=v;a&&(s=a.requestAnimationFrame,c=a.cancelAnimationFrame);const p=s(S=>{c=void 0,m(S)});return new h.w0(()=>null==c?void 0:c(p))},requestAnimationFrame(...m){const{delegate:s}=v;return((null==s?void 0:s.requestAnimationFrame)||requestAnimationFrame)(...m)},cancelAnimationFrame(...m){const{delegate:s}=v;return((null==s?void 0:s.cancelAnimationFrame)||cancelAnimationFrame)(...m)},delegate:void 0};var w=l(640);const C=new class _ extends w.v{flush(s){this._active=!0;const c=this._scheduled;this._scheduled=void 0;const{actions:a}=this;let p;s=s||a.shift();do{if(p=s.execute(s.state,s.delay))break}while((s=a[0])&&s.id===c&&a.shift());if(this._active=!1,p){for(;(s=a[0])&&s.id===c&&a.shift();)s.unsubscribe();throw p}}}(class y extends R.o{constructor(s,c){super(s,c),this.scheduler=s,this.work=c}requestAsyncId(s,c,a=0){return null!==a&&a>0?super.requestAsyncId(s,c,a):(s.actions.push(this),s._scheduled||(s._scheduled=v.requestAnimationFrame(()=>s.flush(void 0))))}recycleAsyncId(s,c,a=0){var p;if(null!=a?a>0:this.delay>0)return super.recycleAsyncId(s,c,a);const{actions:S}=s;null!=c&&(null===(p=S[S.length-1])||void 0===p?void 0:p.id)!==c&&(v.cancelAnimationFrame(c),s._scheduled=void 0)}})},6731:(T,x,l)=>{l.d(x,{ZD:()=>b,mF:()=>Y,Cl:()=>K,rL:()=>Q});var R=l(3191),h=l(5e3),v=l(4408);let w,y=1;const _={};function C(r){return r in _&&(delete _[r],!0)}const k={setImmediate(r){const t=y++;return _[t]=!0,w||(w=Promise.resolve()),w.then(()=>C(t)&&r()),t},clearImmediate(r){C(r)}},{setImmediate:s,clearImmediate:c}=k,a={setImmediate(...r){const{delegate:t}=a;return((null==t?void 0:t.setImmediate)||s)(...r)},clearImmediate(r){const{delegate:t}=a;return((null==t?void 0:t.clearImmediate)||c)(r)},delegate:void 0};var S=l(640);new class A extends S.v{flush(t){this._active=!0;const e=this._scheduled;this._scheduled=void 0;const{actions:i}=this;let n;t=t||i.shift();do{if(n=t.execute(t.state,t.delay))break}while((t=i[0])&&t.id===e&&i.shift());if(this._active=!1,n){for(;(t=i[0])&&t.id===e&&i.shift();)t.unsubscribe();throw n}}}(class p extends v.o{constructor(t,e){super(t,e),this.scheduler=t,this.work=e}requestAsyncId(t,e,i=0){return null!==i&&i>0?super.requestAsyncId(t,e,i):(t.actions.push(this),t._scheduled||(t._scheduled=a.setImmediate(t.flush.bind(t,void 0))))}recycleAsyncId(t,e,i=0){var n;if(null!=i?i>0:this.delay>0)return super.recycleAsyncId(t,e,i);const{actions:o}=t;null!=e&&(null===(n=o[o.length-1])||void 0===n?void 0:n.id)!==e&&(a.clearImmediate(e),t._scheduled=void 0)}});var V=l(7579),L=l(9646),P=l(8306),B=l(4968),j=(l(6406),l(4986)),N=l(4482),W=l(8421),z=l(5403),Z=l(5963);function F(r,t=j.z){return function H(r){return(0,N.e)((t,e)=>{let i=!1,n=null,o=null,d=!1;const g=()=>{if(null==o||o.unsubscribe(),o=null,i){i=!1;const f=n;n=null,e.next(f)}d&&e.complete()},u=()=>{o=null,d&&e.complete()};t.subscribe((0,z.x)(e,f=>{i=!0,n=f,o||(0,W.Xf)(r(f)).subscribe(o=(0,z.x)(e,g,u))},()=>{d=!0,(!i||!o||o.closed)&&e.complete()}))})}(()=>(0,Z.H)(r,t))}var G=l(9300),D=l(9808),O=l(925),I=l(226);let Y=(()=>{class r{constructor(e,i,n){this._ngZone=e,this._platform=i,this._scrolled=new V.x,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=n}register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){const i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=20){return this._platform.isBrowser?new P.y(i=>{this._globalSubscription||this._addGlobalListener();const n=e>0?this._scrolled.pipe(F(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{n.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):(0,L.of)()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){const n=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe((0,G.h)(o=>!o||n.indexOf(o)>-1))}getAncestorScrollContainers(e){const i=[];return this.scrollContainers.forEach((n,o)=>{this._scrollableContainsElement(o,e)&&i.push(o)}),i}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(e,i){let n=(0,R.fI)(i),o=e.getElementRef().nativeElement;do{if(n==o)return!0}while(n=n.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>{const e=this._getWindow();return(0,B.R)(e.document,"scroll").subscribe(()=>this._scrolled.next())})}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}}return r.\u0275fac=function(e){return new(e||r)(h.LFG(h.R0b),h.LFG(O.t4),h.LFG(D.K0,8))},r.\u0275prov=h.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})(),Q=(()=>{class r{constructor(e,i,n){this._platform=e,this._change=new V.x,this._changeListener=o=>{this._change.next(o)},this._document=n,i.runOutsideAngular(()=>{if(e.isBrowser){const o=this._getWindow();o.addEventListener("resize",this._changeListener),o.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){if(this._platform.isBrowser){const e=this._getWindow();e.removeEventListener("resize",this._changeListener),e.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();const e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){const e=this.getViewportScrollPosition(),{width:i,height:n}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+n,right:e.left+i,height:n,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};const e=this._document,i=this._getWindow(),n=e.documentElement,o=n.getBoundingClientRect();return{top:-o.top||e.body.scrollTop||i.scrollY||n.scrollTop||0,left:-o.left||e.body.scrollLeft||i.scrollX||n.scrollLeft||0}}change(e=20){return e>0?this._change.pipe(F(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){const e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}}return r.\u0275fac=function(e){return new(e||r)(h.LFG(O.t4),h.LFG(h.R0b),h.LFG(D.K0,8))},r.\u0275prov=h.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})(),b=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=h.oAB({type:r}),r.\u0275inj=h.cJS({}),r})(),K=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=h.oAB({type:r}),r.\u0275inj=h.cJS({imports:[[I.vT,b],I.vT,b]}),r})()}}]);