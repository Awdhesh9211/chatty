import{r as u,g as F,R as g,_ as v,j as r,u as C,a as R}from"./index-BAY2KkQs.js";import{a as w}from"./axios-Bo0ATomq.js";var q={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const M=e=>{let t;const s=new Set,n=(d,p)=>{const m=typeof d=="function"?d(t):d;if(!Object.is(m,t)){const f=t;t=p??(typeof m!="object"||m===null)?m:Object.assign({},t,m),s.forEach(h=>h(t,f))}},a=()=>t,l={setState:n,getState:a,getInitialState:()=>y,subscribe:d=>(s.add(d),()=>s.delete(d)),destroy:()=>{(q?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),s.clear()}},y=t=e(n,a,l);return l},G=e=>e?M(e):M;var $={exports:{}},z={},T={exports:{}},B={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j=u;function H(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Z=typeof Object.is=="function"?Object.is:H,K=j.useState,J=j.useEffect,Q=j.useLayoutEffect,X=j.useDebugValue;function Y(e,t){var s=t(),n=K({inst:{value:s,getSnapshot:t}}),a=n[0].inst,o=n[1];return Q(function(){a.value=s,a.getSnapshot=t,O(a)&&o({inst:a})},[e,s,t]),J(function(){return O(a)&&o({inst:a}),e(function(){O(a)&&o({inst:a})})},[e]),X(s),s}function O(e){var t=e.getSnapshot;e=e.value;try{var s=t();return!Z(e,s)}catch{return!0}}function ee(e,t){return t()}var te=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?ee:Y;B.useSyncExternalStore=j.useSyncExternalStore!==void 0?j.useSyncExternalStore:te;T.exports=B;var se=T.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N=u,ne=se;function re(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ae=typeof Object.is=="function"?Object.is:re,oe=ne.useSyncExternalStore,ie=N.useRef,ce=N.useEffect,le=N.useMemo,ue=N.useDebugValue;z.useSyncExternalStoreWithSelector=function(e,t,s,n,a){var o=ie(null);if(o.current===null){var i={hasValue:!1,value:null};o.current=i}else i=o.current;o=le(function(){function l(f){if(!y){if(y=!0,d=f,f=n(f),a!==void 0&&i.hasValue){var h=i.value;if(a(h,f))return p=h}return p=f}if(h=p,ae(d,f))return h;var _=n(f);return a!==void 0&&a(h,_)?h:(d=f,p=_)}var y=!1,d,p,m=s===void 0?null:s;return[function(){return l(t())},m===null?void 0:function(){return l(m())}]},[t,s,n,a]);var c=oe(e,o[0],o[1]);return ce(function(){i.hasValue=!0,i.value=c},[c]),ue(c),c};$.exports=z;var de=$.exports;const fe=F(de);var V={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{useDebugValue:me}=g,{useSyncExternalStoreWithSelector:he}=fe;let P=!1;const ge=e=>e;function pe(e,t=ge,s){(V?"production":void 0)!=="production"&&s&&!P&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),P=!0);const n=he(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,s);return me(n),n}const D=e=>{(V?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?G(e):e,s=(n,a)=>pe(t,n,a);return Object.assign(s,t),s},xe=e=>e?D(e):D,x=xe(e=>({selectedConversation:null,setSelectedConversation:t=>e({selectedConversation:t}),messages:[],setMessages:t=>e({messages:t})}));var A={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},k=g.createContext&&g.createContext(A),ve=["attr","size","title"];function je(e,t){if(e==null)return{};var s=ye(e,t),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}function ye(e,t){if(e==null)return{};var s={},n=Object.keys(e),a,o;for(o=0;o<n.length;o++)a=n[o],!(t.indexOf(a)>=0)&&(s[a]=e[a]);return s}function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},b.apply(this,arguments)}function L(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),s.push.apply(s,n)}return s}function S(e){for(var t=1;t<arguments.length;t++){var s=arguments[t]!=null?arguments[t]:{};t%2?L(Object(s),!0).forEach(function(n){be(e,n,s[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):L(Object(s)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))})}return e}function be(e,t,s){return t=Se(t),t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function Se(e){var t=we(e,"string");return typeof t=="symbol"?t:String(t)}function we(e,t){if(typeof e!="object"||e===null)return e;var s=e[Symbol.toPrimitive];if(s!==void 0){var n=s.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function W(e){return e&&e.map((t,s)=>g.createElement(t.tag,S({key:s},t.attr),W(t.child)))}function E(e){return t=>g.createElement(Ne,b({attr:S({},e.attr)},t),W(e.child))}function Ne(e){var t=s=>{var{attr:n,size:a,title:o}=e,i=je(e,ve),c=a||s.size||"1em",l;return s.className&&(l=s.className),e.className&&(l=(l?l+" ":"")+e.className),g.createElement("svg",b({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},s.attr,n,i,{className:l,style:S(S({color:e.color||s.color},s.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),o&&g.createElement("title",null,o),e.children)};return k!==void 0?g.createElement(k.Consumer,null,s=>t(s)):t(A)}function Ee(e){return E({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"},child:[]}]})(e)}const Oe=()=>{const[e,t]=u.useState(!1),{messages:s,setMessages:n,selectedConversation:a}=x();return{sendMessage:async i=>{t(!0);try{const l=(await w.post(`/api/messages/send/${a._id}`,{message:i},{headers:{"Content-Type":"application/json"}})).data;if(l.error)throw new Error(l.error);n([...s,l])}catch(c){v.error(c.message)}finally{t(!1)}},loading:e}},Ce=()=>{const[e,t]=u.useState(""),{loading:s,sendMessage:n}=Oe(),a=async o=>{o.preventDefault(),e&&(await n(e),t(""))};return r.jsx("form",{className:"px-4 my-3",onSubmit:a,children:r.jsxs("div",{className:"w-full relative",children:[r.jsx("input",{type:"text",className:"border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white",placeholder:"Send a message",value:e,onChange:o=>t(o.target.value)}),r.jsx("button",{type:"submit",className:"absolute inset-y-0 end-0 flex text-white  items-center pe-3",children:s?r.jsx("div",{className:"loading loading-spinner"}):r.jsx(Ee,{style:{color:"white"}})})]})})},_e=()=>{const[e,t]=u.useState(!1),{messages:s,setMessages:n,selectedConversation:a}=x();return u.useEffect(()=>{const o=async()=>{t(!0);try{const c=(await w.get(`/api/messages/${a._id}`)).data;if(c.error)throw new Error(c.error);n(c)}catch(i){v.error(i.message)}finally{t(!1)}};a!=null&&a._id&&o()},[a==null?void 0:a._id,n]),{messages:s,loading:e}},Me=()=>r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"flex gap-3 items-center",children:[r.jsx("div",{className:"skeleton w-10 h-10 rounded-full shrink-0"}),r.jsxs("div",{className:"flex flex-col gap-1",children:[r.jsx("div",{className:"skeleton h-4 w-40"}),r.jsx("div",{className:"skeleton h-4 w-40"})]})]}),r.jsxs("div",{className:"flex gap-3 items-center justify-end",children:[r.jsx("div",{className:"flex flex-col gap-1",children:r.jsx("div",{className:"skeleton h-4 w-40"})}),r.jsx("div",{className:"skeleton w-10 h-10 rounded-full shrink-0"})]})]});function Pe(e){const t=new Date(e),s=t.getHours().toString().padStart(2,"0"),n=t.getMinutes().toString().padStart(2,"0");return`${s}:${n}`}const De=({message:e})=>{const{authUser:t}=C(),{selectedConversation:s}=x(),n=e.senderId===t._id,a=Pe(e.createdAt),o=n?"chat-end":"chat-start",i=n?t.profilePic:s==null?void 0:s.profilePic,c=n?"bg-blue-500":"",l=e.shouldShake?"shake":"";return r.jsxs("div",{className:`chat ${o}`,children:[r.jsx("div",{className:"chat-image avatar",children:r.jsx("div",{className:"w-10 rounded-full",children:r.jsx("img",{alt:"Tailwind CSS chat bubble component",src:i})})}),r.jsx("div",{className:`chat-bubble text-white ${c} ${l} pb-2`,children:e.message}),r.jsx("div",{className:"chat-footer opacity-50 text-xs flex gap-1 items-center",children:a})]})},ke="/assets/notification-qhDe3lRG.mp3",Le=()=>{const{socket:e}=R(),{messages:t,setMessages:s}=x();u.useEffect(()=>(e==null||e.on("newMessage",n=>{n.shouldShake=!0,new Audio(ke).play(),s([...t,n])}),()=>e==null?void 0:e.off("newMessage")),[e,s,t])},Ie=()=>{const{messages:e,loading:t}=_e();Le();const s=u.useRef();return u.useEffect(()=>{setTimeout(()=>{var n;(n=s.current)==null||n.scrollIntoView({behavior:"smooth"})},100)},[e]),r.jsxs("div",{className:"px-4 flex-1 overflow-auto",children:[!t&&e.length>0&&e.map(n=>r.jsx("div",{ref:s,children:r.jsx(De,{message:n})},n._id)),t&&[...Array(3)].map((n,a)=>r.jsx(Me,{},a)),!t&&e.length===0&&r.jsx("p",{className:"text-center",children:"Send a message to start the conversation"})]})};function Re(e){return E({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21 7h-3c0-1.65-1.35-3-3-3h-12c-1.65 0-3 1.35-3 3v7c0 1.65 1.35 3 3 3v3l3-3c0 1.65 1.35 3 3 3h8l3 3v-3h1c1.65 0 3-1.35 3-3v-7c0-1.65-1.35-3-3-3zm-18 8c-.542 0-1-.458-1-1v-7c0-.542.458-1 1-1h12c.542 0 1 .458 1 1v1h-6.5c-1.379 0-2.5 1.121-2.5 2.5v4.5h-4zm19 2c0 .542-.458 1-1 1h-12c-.542 0-1-.458-1-1v-6.5c0-.827.673-1.5 1.5-1.5h11.5c.542 0 1 .458 1 1v7z"},child:[]}]})(e)}const $e=()=>{const{selectedConversation:e,setSelectedConversation:t}=x();return u.useEffect(()=>()=>t(null),[t]),r.jsx("div",{className:"md:min-w-[450px] flex flex-col",children:e?r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"bg-slate-500 px-4 py-2 mb-2",children:[r.jsx("span",{className:"label-text",children:"To:"})," ",r.jsx("span",{className:"text-gray-900 font-bold",children:e.fullName})]}),r.jsx(Ie,{}),r.jsx(Ce,{})]}):r.jsx(ze,{})})},ze=()=>{const{authUser:e}=C();return r.jsx("div",{className:"flex items-center justify-center w-full h-full",children:r.jsxs("div",{className:"px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2",children:[r.jsxs("p",{children:["Welcome 👋 ",e.fullName," ❄"]}),r.jsx("p",{children:"Select a chat to start messaging"}),r.jsx(Re,{className:"text-3xl md:text-6xl text-center"})]})})},U=()=>{const[e,t]=u.useState(!1),[s,n]=u.useState([]);return u.useEffect(()=>{(async()=>{t(!0);try{const i=(await w.get("http://localhost:5000/api/users")).data;if(console.log(i),i.error)throw new Error(i.error);n(i)}catch(o){v.error(o.message)}finally{t(!1)}})()},[]),{loading:e,conversations:s}},I=["👾","⭐","🌟","🎉","🎊","🎈","🎁","🎂","🎄","🎃","🎗","🎟","🎫","🎖","🏆","🏅","🥇","🥈","🥉","⚽","🏀","🏈","⚾","🎾","🏐","🏉","🎱","🏓","🏸","🥅","🏒","🏑","🏏","⛳","🏹","🎣","🥊","🥋","🎽","⛸","🥌","🛷","🎿","⛷","🏂","🏋️","🤼","🤸","🤺","⛹️","🤾","🏌️","🏇","🧘"],Te=()=>I[Math.floor(Math.random()*I.length)],Be=({conversation:e,lastIdx:t,emoji:s})=>{const{selectedConversation:n,setSelectedConversation:a}=x(),o=(n==null?void 0:n._id)===e._id,{onlineUsers:i}=R(),c=i.includes(e._id);return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
				${o?"bg-sky-500":""}
			`,onClick:()=>a(e),children:[r.jsx("div",{className:`avatar ${c?"online":""}`,children:r.jsx("div",{className:"w-12 rounded-full",children:r.jsx("img",{src:e.profilePic,alt:"user avatar"})})}),r.jsx("div",{className:"flex flex-col flex-1",children:r.jsxs("div",{className:"flex gap-3 justify-between",children:[r.jsx("p",{className:"font-bold text-gray-200",children:e.fullName}),r.jsx("span",{className:"text-xl",children:s})]})})]}),!t&&r.jsx("div",{className:"divider my-0 py-0 h-1"})]})},Ve=()=>{const{loading:e,conversations:t}=U();return r.jsxs("div",{className:"py-2 flex flex-col overflow-auto",children:[t.map((s,n)=>r.jsx(Be,{conversation:s,emoji:Te(),lastIdx:n===t.length-1},s._id)),e?r.jsx("span",{className:"loading loading-spinner mx-auto"}):null]})};function Ae(e){return E({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16 13v-2H7V8l-5 4 5 4v-3z"},child:[]},{tag:"path",attr:{d:"M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"},child:[]}]})(e)}const We=()=>{const[e,t]=u.useState(!1),{setAuthUser:s}=C();return{loading:e,logout:async()=>{t(!0);try{const o=(await w.post("/api/auth/logout",{headers:{"Content-Type":"application/json"}})).data;if(o.error)throw new Error(o.error);localStorage.removeItem("chat-user"),s(null)}catch(a){v.error(a.message)}finally{t(!1)}}}},Ue=()=>{const{loading:e,logout:t}=We();return r.jsx("div",{className:"mt-auto",children:e?r.jsx("span",{className:"loading loading-spinner"}):r.jsx(Ae,{className:"w-6 h-6 text-white cursor-pointer",onClick:t})})};function Fe(e){return E({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 428 339.92 303.9a160.48 160.48 0 0 0 30.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0 0 94.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 1 1 110.37-110.37 110.5 110.5 0 0 1-110.37 110.37z"},child:[]}]})(e)}const qe=()=>{const[e,t]=u.useState(""),{setSelectedConversation:s}=x(),{conversations:n}=U(),a=o=>{if(o.preventDefault(),!e)return;if(e.length<3)return v.error("Search term must be at least 3 characters long");const i=n.find(c=>c.fullName.toLowerCase().includes(e.toLowerCase()));i?(s(i),t("")):v.error("No such user found!")};return r.jsxs("form",{onSubmit:a,className:"flex items-center gap-2",children:[r.jsx("input",{type:"text",placeholder:"Search…",className:"input input-bordered rounded-full",value:e,onChange:o=>t(o.target.value)}),r.jsx("button",{type:"submit",className:"btn btn-circle bg-sky-500 ",children:r.jsx(Fe,{className:"w-6 h-6 outline-none"})})]})},Ge=()=>r.jsxs("div",{className:"md:min-w-[450px] border-r text-white border-slate-500 p-4 flex flex-col",children:[r.jsx(qe,{}),r.jsx("div",{className:"divider px-3"}),r.jsx(Ve,{}),r.jsx(Ue,{})]}),Ke=()=>r.jsxs("div",{className:"flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0",children:[r.jsx(Ge,{}),r.jsx($e,{})]});export{Ke as default};
