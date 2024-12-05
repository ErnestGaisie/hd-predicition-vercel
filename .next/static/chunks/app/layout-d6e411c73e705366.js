(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{8709:function(e,t,n){"use strict";n.d(t,{F:function(){return c},f:function(){return m}});var r=n(6006);let o=["light","dark"],a="(prefers-color-scheme: dark)",s="undefined"==typeof window,l=(0,r.createContext)(void 0),i={setTheme:e=>{},themes:[]},c=()=>{var e;return null!==(e=(0,r.useContext)(l))&&void 0!==e?e:i},m=e=>(0,r.useContext)(l)?r.createElement(r.Fragment,null,e.children):r.createElement(d,e),u=["light","dark"],d=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:s=!0,storageKey:i="theme",themes:c=u,defaultTheme:m=n?"system":"light",attribute:d="data-theme",value:_,children:$,nonce:b})=>{let[p,g]=(0,r.useState)(()=>h(i,m)),[S,E]=(0,r.useState)(()=>h(i)),w=_?Object.values(_):c,k=(0,r.useCallback)(e=>{let r=e;if(!r)return;"system"===e&&n&&(r=v());let a=_?_[r]:r,l=t?y():null,i=document.documentElement;if("class"===d?(i.classList.remove(...w),a&&i.classList.add(a)):a?i.setAttribute(d,a):i.removeAttribute(d),s){let e=o.includes(m)?m:null,t=o.includes(r)?r:e;i.style.colorScheme=t}null==l||l()},[]),T=(0,r.useCallback)(e=>{g(e);try{localStorage.setItem(i,e)}catch(e){}},[e]),C=(0,r.useCallback)(t=>{let r=v(t);E(r),"system"===p&&n&&!e&&k("system")},[p,e]);(0,r.useEffect)(()=>{let e=window.matchMedia(a);return e.addListener(C),C(e),()=>e.removeListener(C)},[C]),(0,r.useEffect)(()=>{let e=e=>{e.key===i&&T(e.newValue||m)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[T]),(0,r.useEffect)(()=>{k(null!=e?e:p)},[e,p]);let O=(0,r.useMemo)(()=>({theme:p,setTheme:T,forcedTheme:e,resolvedTheme:"system"===p?S:p,themes:n?[...c,"system"]:c,systemTheme:n?S:void 0}),[p,T,e,S,n,c]);return r.createElement(l.Provider,{value:O},r.createElement(f,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:s,storageKey:i,themes:c,defaultTheme:m,attribute:d,value:_,children:$,attrs:w,nonce:b}),$)},f=(0,r.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:s,enableColorScheme:l,defaultTheme:i,value:c,attrs:m,nonce:u})=>{let d="system"===i,f="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${m.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,h=l?o.includes(i)&&i?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",y=(e,t=!1,r=!0)=>{let a=c?c[e]:e,s=t?e+"|| ''":`'${a}'`,i="";return l&&r&&!t&&o.includes(e)&&(i+=`d.style.colorScheme = '${e}';`),"class"===n?i+=t||a?`c.add(${s})`:"null":a&&(i+=`d[s](n,${s})`),i},v=e?`!function(){${f}${y(e)}}()`:s?`!function(){try{${f}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${d})){var t='${a}',m=window.matchMedia(t);if(m.media!==t||m.matches){${y("dark")}}else{${y("light")}}}else if(e){${c?`var x=${JSON.stringify(c)};`:""}${y(c?"x[e]":"e",!0)}}${d?"":"else{"+y(i,!1,!1)+"}"}${h}}catch(e){}}()`:`!function(){try{${f}var e=localStorage.getItem('${t}');if(e){${c?`var x=${JSON.stringify(c)};`:""}${y(c?"x[e]":"e",!0)}}else{${y(i,!1,!1)};}${h}}catch(t){}}();`;return r.createElement("script",{nonce:u,dangerouslySetInnerHTML:{__html:v}})},()=>!0),h=(e,t)=>{let n;if(!s){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},y=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},v=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")},8477:function(e,t,n){Promise.resolve().then(n.bind(n,3891)),Promise.resolve().then(n.t.bind(n,7402,23)),Promise.resolve().then(n.t.bind(n,7977,23))},3891:function(e,t,n){"use strict";n.r(t),n.d(t,{ThemeProvider:function(){return a}});var r=n(9268);n(6006);var o=n(8709);function a(e){let{children:t,...n}=e;return(0,r.jsx)(o.f,{...n,children:t})}},7402:function(){},7977:function(e){e.exports={style:{fontFamily:"'__Inter_a184c8', '__Inter_Fallback_a184c8'",fontStyle:"normal"},className:"__className_a184c8"}},3177:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(6006),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,a={},c=null,m=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(m=t.ref),t)s.call(t,r)&&!i.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:m,props:a,_owner:l.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},9268:function(e,t,n){"use strict";e.exports=n(3177)}},function(e){e.O(0,[253,769,744],function(){return e(e.s=8477)}),_N_E=e.O()}]);