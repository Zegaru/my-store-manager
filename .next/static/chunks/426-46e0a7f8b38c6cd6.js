"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[426],{3250:function(e,t,r){/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var n=r(7294),s="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=n.useState,u=n.useEffect,a=n.useLayoutEffect,o=n.useDebugValue;function l(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!s(e,r)}catch(n){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=i({inst:{value:r,getSnapshot:t}}),s=n[0].inst,c=n[1];return a(function(){s.value=r,s.getSnapshot=t,l(s)&&c({inst:s})},[e,r,t]),u(function(){return l(s)&&c({inst:s}),e(function(){l(s)&&c({inst:s})})},[e]),o(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:c},1688:function(e,t,r){e.exports=r(3250)},2510:function(e,t,r){r.d(t,{v:function(){return N}});var n,s,i,u=r(7294),a=r(2984),o=r(2351),l=r(9362),c=r(4192),d=r(6723),h=r(3784),f=r(9946),p=r(1363),v=r(1497),m=r(4103),y=r(4575),R=r(9650),b=r(1591),g=r(6567),I=r(4157),S=r(1074),E=r(3781),x=((n=x||{})[n.Open=0]="Open",n[n.Closed=1]="Closed",n),w=((s=w||{})[s.Pointer=0]="Pointer",s[s.Other=1]="Other",s),T=((i=T||{})[i.OpenMenu=0]="OpenMenu",i[i.CloseMenu=1]="CloseMenu",i[i.GoToItem=2]="GoToItem",i[i.Search=3]="Search",i[i.ClearSearch=4]="ClearSearch",i[i.RegisterItem=5]="RegisterItem",i[i.UnregisterItem=6]="UnregisterItem",i);function C(e,t=e=>e){let r=null!==e.activeItemIndex?e.items[e.activeItemIndex]:null,n=(0,y.z2)(t(e.items.slice()),e=>e.dataRef.current.domRef.current),s=r?n.indexOf(r):null;return -1===s&&(s=null),{items:n,activeItemIndex:s}}let O={1:e=>1===e.menuState?e:{...e,activeItemIndex:null,menuState:1},0:e=>0===e.menuState?e:{...e,menuState:0},2(e,t){var r;let n=C(e),s=(0,v.d)(t,{resolveItems:()=>n.items,resolveActiveIndex:()=>n.activeItemIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...e,...n,searchQuery:"",activeItemIndex:s,activationTrigger:null!=(r=t.trigger)?r:1}},3(e,t){let r=""!==e.searchQuery?0:1,n=e.searchQuery+t.value.toLowerCase(),s=(null!==e.activeItemIndex?e.items.slice(e.activeItemIndex+r).concat(e.items.slice(0,e.activeItemIndex+r)):e.items).find(e=>{var t;return(null==(t=e.dataRef.current.textValue)?void 0:t.startsWith(n))&&!e.dataRef.current.disabled}),i=s?e.items.indexOf(s):-1;return -1===i||i===e.activeItemIndex?{...e,searchQuery:n}:{...e,searchQuery:n,activeItemIndex:i,activationTrigger:1}},4:e=>""===e.searchQuery?e:{...e,searchQuery:"",searchActiveItemIndex:null},5(e,t){let r=C(e,e=>[...e,{id:t.id,dataRef:t.dataRef}]);return{...e,...r}},6(e,t){let r=C(e,e=>{let r=e.findIndex(e=>e.id===t.id);return -1!==r&&e.splice(r,1),e});return{...e,...r,activationTrigger:1}}},k=(0,u.createContext)(null);function Q(e){let t=(0,u.useContext)(k);if(null===t){let r=Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Q),r}return t}function P(e,t){return(0,a.E)(t.type,O,e,t)}k.displayName="MenuContext";let A=u.Fragment,M=(0,o.yV)(function(e,t){let r=(0,u.useReducer)(P,{menuState:1,buttonRef:(0,u.createRef)(),itemsRef:(0,u.createRef)(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:n,itemsRef:s,buttonRef:i},l]=r,c=(0,h.T)(t);(0,R.O)([i,s],(e,t)=>{var r;l({type:1}),(0,y.sP)(t,y.tJ.Loose)||(e.preventDefault(),null==(r=i.current)||r.focus())},0===n);let d=(0,E.z)(()=>{l({type:1})}),f=(0,u.useMemo)(()=>({open:0===n,close:d}),[n,d]);return u.createElement(k.Provider,{value:r},u.createElement(g.up,{value:(0,a.E)(n,{0:g.ZM.Open,1:g.ZM.Closed})},(0,o.sY)({ourProps:{ref:c},theirProps:e,slot:f,defaultTag:A,name:"Menu"})))}),F=(0,o.yV)(function(e,t){var r;let[n,s]=Q("Menu.Button"),i=(0,h.T)(n.buttonRef,t),a=`headlessui-menu-button-${(0,f.M)()}`,l=(0,c.G)(),d=(0,E.z)(e=>{switch(e.key){case p.R.Space:case p.R.Enter:case p.R.ArrowDown:e.preventDefault(),e.stopPropagation(),s({type:0}),l.nextFrame(()=>s({type:2,focus:v.T.First}));break;case p.R.ArrowUp:e.preventDefault(),e.stopPropagation(),s({type:0}),l.nextFrame(()=>s({type:2,focus:v.T.Last}))}}),y=(0,E.z)(e=>{e.key===p.R.Space&&e.preventDefault()}),R=(0,E.z)(t=>{if((0,m.P)(t.currentTarget))return t.preventDefault();e.disabled||(0===n.menuState?(s({type:1}),l.nextFrame(()=>{var e;return null==(e=n.buttonRef.current)?void 0:e.focus({preventScroll:!0})})):(t.preventDefault(),s({type:0})))}),b=(0,u.useMemo)(()=>({open:0===n.menuState}),[n]),g={ref:i,id:a,type:(0,I.f)(e,n.buttonRef),"aria-haspopup":!0,"aria-controls":null==(r=n.itemsRef.current)?void 0:r.id,"aria-expanded":e.disabled?void 0:0===n.menuState,onKeyDown:d,onKeyUp:y,onClick:R};return(0,o.sY)({ourProps:g,theirProps:e,slot:b,defaultTag:"button",name:"Menu.Button"})}),D=o.AN.RenderStrategy|o.AN.Static,L=(0,o.yV)(function(e,t){var r,n;let[s,i]=Q("Menu.Items"),a=(0,h.T)(s.itemsRef,t),d=(0,S.i)(s.itemsRef),m=`headlessui-menu-items-${(0,f.M)()}`,R=(0,c.G)(),I=(0,g.oJ)(),x=null!==I?I===g.ZM.Open:0===s.menuState;(0,u.useEffect)(()=>{let e=s.itemsRef.current;e&&0===s.menuState&&e!==(null==d?void 0:d.activeElement)&&e.focus({preventScroll:!0})},[s.menuState,s.itemsRef,d]),(0,b.B)({container:s.itemsRef.current,enabled:0===s.menuState,accept:e=>"menuitem"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let w=(0,E.z)(e=>{var t,r;switch(R.dispose(),e.key){case p.R.Space:if(""!==s.searchQuery)return e.preventDefault(),e.stopPropagation(),i({type:3,value:e.key});case p.R.Enter:if(e.preventDefault(),e.stopPropagation(),i({type:1}),null!==s.activeItemIndex){let{dataRef:n}=s.items[s.activeItemIndex];null==(r=null==(t=n.current)?void 0:t.domRef.current)||r.click()}(0,y.wI)(s.buttonRef.current);break;case p.R.ArrowDown:return e.preventDefault(),e.stopPropagation(),i({type:2,focus:v.T.Next});case p.R.ArrowUp:return e.preventDefault(),e.stopPropagation(),i({type:2,focus:v.T.Previous});case p.R.Home:case p.R.PageUp:return e.preventDefault(),e.stopPropagation(),i({type:2,focus:v.T.First});case p.R.End:case p.R.PageDown:return e.preventDefault(),e.stopPropagation(),i({type:2,focus:v.T.Last});case p.R.Escape:e.preventDefault(),e.stopPropagation(),i({type:1}),(0,l.k)().nextFrame(()=>{var e;return null==(e=s.buttonRef.current)?void 0:e.focus({preventScroll:!0})});break;case p.R.Tab:e.preventDefault(),e.stopPropagation(),i({type:1}),(0,l.k)().nextFrame(()=>{(0,y.EO)(s.buttonRef.current,e.shiftKey?y.TO.Previous:y.TO.Next)});break;default:1===e.key.length&&(i({type:3,value:e.key}),R.setTimeout(()=>i({type:4}),350))}}),T=(0,E.z)(e=>{e.key===p.R.Space&&e.preventDefault()}),C=(0,u.useMemo)(()=>({open:0===s.menuState}),[s]),O={"aria-activedescendant":null===s.activeItemIndex||null==(r=s.items[s.activeItemIndex])?void 0:r.id,"aria-labelledby":null==(n=s.buttonRef.current)?void 0:n.id,id:m,onKeyDown:w,onKeyUp:T,role:"menu",tabIndex:0,ref:a};return(0,o.sY)({ourProps:O,theirProps:e,slot:C,defaultTag:"div",features:D,visible:x,name:"Menu.Items"})}),U=u.Fragment,N=Object.assign(M,{Button:F,Items:L,Item:(0,o.yV)(function(e,t){let{disabled:r=!1,...n}=e,[s,i]=Q("Menu.Item"),a=`headlessui-menu-item-${(0,f.M)()}`,c=null!==s.activeItemIndex&&s.items[s.activeItemIndex].id===a,p=(0,u.useRef)(null),m=(0,h.T)(t,p);(0,d.e)(()=>{if(0!==s.menuState||!c||0===s.activationTrigger)return;let e=(0,l.k)();return e.requestAnimationFrame(()=>{var e,t;null==(t=null==(e=p.current)?void 0:e.scrollIntoView)||t.call(e,{block:"nearest"})}),e.dispose},[p,c,s.menuState,s.activationTrigger,s.activeItemIndex]);let R=(0,u.useRef)({disabled:r,domRef:p});(0,d.e)(()=>{R.current.disabled=r},[R,r]),(0,d.e)(()=>{var e,t;R.current.textValue=null==(t=null==(e=p.current)?void 0:e.textContent)?void 0:t.toLowerCase()},[R,p]),(0,d.e)(()=>(i({type:5,id:a,dataRef:R}),()=>i({type:6,id:a})),[R,a]);let b=(0,E.z)(()=>{i({type:1})}),g=(0,E.z)(e=>{if(r)return e.preventDefault();i({type:1}),(0,y.wI)(s.buttonRef.current)}),I=(0,E.z)(()=>{if(r)return i({type:2,focus:v.T.Nothing});i({type:2,focus:v.T.Specific,id:a})}),S=(0,E.z)(()=>{r||c||i({type:2,focus:v.T.Specific,id:a,trigger:0})}),x=(0,E.z)(()=>{r||!c||i({type:2,focus:v.T.Nothing})}),w=(0,u.useMemo)(()=>({active:c,disabled:r,close:b}),[c,r,b]);return(0,o.sY)({ourProps:{id:a,ref:m,role:"menuitem",tabIndex:!0===r?void 0:-1,"aria-disabled":!0===r||void 0,disabled:void 0,onClick:g,onFocus:I,onPointerMove:S,onMouseMove:S,onPointerLeave:x,onMouseLeave:x},theirProps:n,slot:w,defaultTag:U,name:"Menu.Item"})})})},4157:function(e,t,r){r.d(t,{f:function(){return u}});var n=r(7294),s=r(6723);function i(e){var t;if(e.type)return e.type;let r=null!=(t=e.as)?t:"button";if("string"==typeof r&&"button"===r.toLowerCase())return"button"}function u(e,t){let[r,u]=(0,n.useState)(()=>i(e));return(0,s.e)(()=>{u(i(e))},[e.type,e.as]),(0,s.e)(()=>{r||!t.current||t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&u("button")},[r,t]),r}},1591:function(e,t,r){r.d(t,{B:function(){return u}});var n=r(7294),s=r(6723),i=r(5466);function u({container:e,accept:t,walk:r,enabled:u=!0}){let a=(0,n.useRef)(t),o=(0,n.useRef)(r);(0,n.useEffect)(()=>{a.current=t,o.current=r},[t,r]),(0,s.e)(()=>{if(!e||!u)return;let t=(0,i.r)(e);if(!t)return;let r=a.current,n=o.current,s=Object.assign(e=>r(e),{acceptNode:r}),l=t.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,s,!1);for(;l.nextNode();)n(l.currentNode)},[e,u,a,o])}},1497:function(e,t,r){r.d(t,{T:function(){return s},d:function(){return i}});var n,s=((n=s||{})[n.First=0]="First",n[n.Previous=1]="Previous",n[n.Next=2]="Next",n[n.Last=3]="Last",n[n.Specific=4]="Specific",n[n.Nothing=5]="Nothing",n);function i(e,t){let r=t.resolveItems();if(r.length<=0)return null;let n=t.resolveActiveIndex(),s=null!=n?n:-1,i=(()=>{switch(e.focus){case 0:return r.findIndex(e=>!t.resolveDisabled(e));case 1:{let n=r.slice().reverse().findIndex((e,r,n)=>(-1===s||!(n.length-r-1>=s))&&!t.resolveDisabled(e));return -1===n?n:r.length-1-n}case 2:return r.findIndex((e,r)=>!(r<=s)&&!t.resolveDisabled(e));case 3:{let i=r.slice().reverse().findIndex(e=>!t.resolveDisabled(e));return -1===i?i:r.length-1-i}case 4:return r.findIndex(r=>t.resolveId(r)===e.id);case 5:return null;default:!function(e){throw Error("Unexpected object: "+e)}(e)}})();return -1===i?n:i}},8752:function(e,t,r){var n=r(7294);let s=n.forwardRef(function({title:e,titleId:t,...r},s){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{fillRule:"evenodd",d:"M2 3.75A.75.75 0 012.75 3h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 3.75zm0 4.167a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zm0 4.166a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zm0 4.167a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z",clipRule:"evenodd"}))});t.Z=s},6221:function(e,t,r){var n=r(7294);let s=n.forwardRef(function({title:e,titleId:t,...r},s){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{fillRule:"evenodd",d:"M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z",clipRule:"evenodd"}))});t.Z=s},7714:function(e,t,r){var n=r(7294);let s=n.forwardRef(function({title:e,titleId:t,...r},s){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"}))});t.Z=s},8680:function(e,t,r){var n=r(7294);let s=n.forwardRef(function({title:e,titleId:t,...r},s){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"}))});t.Z=s},97:function(e,t,r){var n=r(7294);let s=n.forwardRef(function({title:e,titleId:t,...r},s){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"}))});t.Z=s},7837:function(e,t,r){let n;r.d(t,{a:function(){return k}});var s=r(2161),i=r(81),u=r(5761),a=r(3989),o=r(2379);class l extends a.l{constructor(e,t){super(),this.client=e,this.options=t,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(t)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.length&&(this.currentQuery.addObserver(this),c(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.listeners.length||this.destroy()}shouldFetchOnReconnect(){return d(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return d(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=[],this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(e,t){let r=this.options,n=this.currentQuery;if(this.options=this.client.defaultQueryOptions(e),(0,s.VS)(r,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled)throw Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();let i=this.hasListeners();i&&h(this.currentQuery,n,this.options,r)&&this.executeFetch(),this.updateResult(t),i&&(this.currentQuery!==n||this.options.enabled!==r.enabled||this.options.staleTime!==r.staleTime)&&this.updateStaleTimeout();let u=this.computeRefetchInterval();i&&(this.currentQuery!==n||this.options.enabled!==r.enabled||u!==this.currentRefetchInterval)&&this.updateRefetchInterval(u)}getOptimisticResult(e){let t=this.client.getQueryCache().build(this.client,e);return this.createResult(t,e)}getCurrentResult(){return this.currentResult}trackResult(e){let t={};return Object.keys(e).forEach(r=>{Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(r),e[r])})}),t}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:e,...t}={}){return this.fetch({...t,meta:{refetchPage:e}})}fetchOptimistic(e){let t=this.client.defaultQueryOptions(e),r=this.client.getQueryCache().build(this.client,t);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,t))}fetch(e){var t;return this.executeFetch({...e,cancelRefetch:null==(t=e.cancelRefetch)||t}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(e){this.updateQuery();let t=this.currentQuery.fetch(this.options,e);return null!=e&&e.throwOnError||(t=t.catch(s.ZT)),t}updateStaleTimeout(){if(this.clearStaleTimeout(),s.sk||this.currentResult.isStale||!(0,s.PN)(this.options.staleTime))return;let e=(0,s.Kp)(this.currentResult.dataUpdatedAt,this.options.staleTime);this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},e+1)}computeRefetchInterval(){var e;return"function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.currentResult.data,this.currentQuery):null!=(e=this.options.refetchInterval)&&e}updateRefetchInterval(e){this.clearRefetchInterval(),this.currentRefetchInterval=e,!s.sk&&!1!==this.options.enabled&&(0,s.PN)(this.currentRefetchInterval)&&0!==this.currentRefetchInterval&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||u.j.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(e,t){let r;let n=this.currentQuery,i=this.options,u=this.currentResult,a=this.currentResultState,l=this.currentResultOptions,d=e!==n,p=d?e.state:this.currentQueryInitialState,v=d?this.currentResult:this.previousQueryResult,{state:m}=e,{dataUpdatedAt:y,error:R,errorUpdatedAt:b,fetchStatus:g,status:I}=m,S=!1,E=!1;if(t._optimisticResults){let x=this.hasListeners(),w=!x&&c(e,t),T=x&&h(e,n,t,i);(w||T)&&(g=(0,o.Kw)(e.options.networkMode)?"fetching":"paused",y||(I="loading")),"isRestoring"===t._optimisticResults&&(g="idle")}if(t.keepPreviousData&&!m.dataUpdatedAt&&null!=v&&v.isSuccess&&"error"!==I)r=v.data,y=v.dataUpdatedAt,I=v.status,S=!0;else if(t.select&&void 0!==m.data){if(u&&m.data===(null==a?void 0:a.data)&&t.select===this.selectFn)r=this.selectResult;else try{this.selectFn=t.select,r=t.select(m.data),r=(0,s.oE)(null==u?void 0:u.data,r,t),this.selectResult=r,this.selectError=null}catch(C){this.selectError=C}}else r=m.data;if(void 0!==t.placeholderData&&void 0===r&&"loading"===I){let O;if(null!=u&&u.isPlaceholderData&&t.placeholderData===(null==l?void 0:l.placeholderData))O=u.data;else if(O="function"==typeof t.placeholderData?t.placeholderData():t.placeholderData,t.select&&void 0!==O)try{O=t.select(O),this.selectError=null}catch(k){this.selectError=k}void 0!==O&&(I="success",r=(0,s.oE)(null==u?void 0:u.data,O,t),E=!0)}this.selectError&&(R=this.selectError,r=this.selectResult,b=Date.now(),I="error");let Q="fetching"===g,P="loading"===I,A="error"===I,M={status:I,fetchStatus:g,isLoading:P,isSuccess:"success"===I,isError:A,isInitialLoading:P&&Q,data:r,dataUpdatedAt:y,error:R,errorUpdatedAt:b,failureCount:m.fetchFailureCount,failureReason:m.fetchFailureReason,errorUpdateCount:m.errorUpdateCount,isFetched:m.dataUpdateCount>0||m.errorUpdateCount>0,isFetchedAfterMount:m.dataUpdateCount>p.dataUpdateCount||m.errorUpdateCount>p.errorUpdateCount,isFetching:Q,isRefetching:Q&&!P,isLoadingError:A&&0===m.dataUpdatedAt,isPaused:"paused"===g,isPlaceholderData:E,isPreviousData:S,isRefetchError:A&&0!==m.dataUpdatedAt,isStale:f(e,t),refetch:this.refetch,remove:this.remove};return M}updateResult(e){let t=this.currentResult,r=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,(0,s.VS)(r,t))return;this.currentResult=r;let n={cache:!0};(null==e?void 0:e.listeners)!==!1&&(()=>{if(!t)return!0;let{notifyOnChangeProps:e}=this.options;if("all"===e||!e&&!this.trackedProps.size)return!0;let r=new Set(null!=e?e:this.trackedProps);return this.options.useErrorBoundary&&r.add("error"),Object.keys(this.currentResult).some(e=>{let n=this.currentResult[e]!==t[e];return n&&r.has(e)})})()&&(n.listeners=!0),this.notify({...n,...e})}updateQuery(){let e=this.client.getQueryCache().build(this.client,this.options);if(e===this.currentQuery)return;let t=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==t||t.removeObserver(this),e.addObserver(this))}onQueryUpdate(e){let t={};"success"===e.type?t.onSuccess=!e.manual:"error"!==e.type||(0,o.DV)(e.error)||(t.onError=!0),this.updateResult(t),this.hasListeners()&&this.updateTimers()}notify(e){i.V.batch(()=>{var t,r,n,s,i,u,a,o;e.onSuccess?(null==(t=(r=this.options).onSuccess)||t.call(r,this.currentResult.data),null==(n=(s=this.options).onSettled)||n.call(s,this.currentResult.data,null)):e.onError&&(null==(i=(u=this.options).onError)||i.call(u,this.currentResult.error),null==(a=(o=this.options).onSettled)||a.call(o,void 0,this.currentResult.error)),e.listeners&&this.listeners.forEach(e=>{e(this.currentResult)}),e.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function c(e,t){return!1!==t.enabled&&!e.state.dataUpdatedAt&&!("error"===e.state.status&&!1===t.retryOnMount)||e.state.dataUpdatedAt>0&&d(e,t,t.refetchOnMount)}function d(e,t,r){if(!1!==t.enabled){let n="function"==typeof r?r(e):r;return"always"===n||!1!==n&&f(e,t)}return!1}function h(e,t,r,n){return!1!==r.enabled&&(e!==t||!1===n.enabled)&&(!r.suspense||"error"!==e.state.status)&&f(e,r)}function f(e,t){return e.isStaleByTime(t.staleTime)}var p=r(7294),v=r(1688);let m=v.useSyncExternalStore,y=p.createContext((n=!1,{clearReset(){n=!1},reset(){n=!0},isReset:()=>n})),R=()=>p.useContext(y);var b=r(5945);let g=p.createContext(!1),I=()=>p.useContext(g);g.Provider;let S=(e,t)=>{(e.suspense||e.useErrorBoundary)&&!t.isReset()&&(e.retryOnMount=!1)},E=e=>{p.useEffect(()=>{e.clearReset()},[e])},x=({result:e,errorResetBoundary:t,useErrorBoundary:r,query:n})=>{var s;return e.isError&&!t.isReset()&&!e.isFetching&&(s=[e.error,n],"function"==typeof r?r(...s):!!r)},w=e=>{e.suspense&&"number"!=typeof e.staleTime&&(e.staleTime=1e3)},T=(e,t)=>e.isLoading&&e.isFetching&&!t,C=(e,t,r)=>(null==e?void 0:e.suspense)&&T(t,r),O=(e,t,r)=>t.fetchOptimistic(e).then(({data:t})=>{null==e.onSuccess||e.onSuccess(t),null==e.onSettled||e.onSettled(t,null)}).catch(t=>{r.clearReset(),null==e.onError||e.onError(t),null==e.onSettled||e.onSettled(void 0,t)});function k(e,t,r){let n=(0,s._v)(e,t,r);return function(e,t){let r=(0,b.NL)({context:e.context}),n=I(),s=R(),u=r.defaultQueryOptions(e);u._optimisticResults=n?"isRestoring":"optimistic",u.onError&&(u.onError=i.V.batchCalls(u.onError)),u.onSuccess&&(u.onSuccess=i.V.batchCalls(u.onSuccess)),u.onSettled&&(u.onSettled=i.V.batchCalls(u.onSettled)),w(u),S(u,s),E(s);let[a]=p.useState(()=>new t(r,u)),o=a.getOptimisticResult(u);if(m(p.useCallback(e=>n?()=>void 0:a.subscribe(i.V.batchCalls(e)),[a,n]),()=>a.getCurrentResult(),()=>a.getCurrentResult()),p.useEffect(()=>{a.setOptions(u,{listeners:!1})},[u,a]),C(u,o,n))throw O(u,a,s);if(x({result:o,errorResetBoundary:s,useErrorBoundary:u.useErrorBoundary,query:a.getCurrentQuery()}))throw o.error;return u.notifyOnChangeProps?o:a.trackResult(o)}(n,l)}}}]);