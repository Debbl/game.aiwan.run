(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();const b={};function de(e){b.context=e}const he=(e,t)=>e===t,pe=Symbol("solid-track"),U={equals:he};let se=oe;const $=1,R=2,ie={owned:null,cleanups:null,context:null,owner:null};var h=null;let x=null,d=null,p=null,_=null,Y=0;function G(e,t){const n=d,s=h,i=e.length===0,r=i?ie:{owned:null,cleanups:null,context:null,owner:t||s},o=i?e:()=>e(()=>F(()=>Z(r)));h=r,d=null;try{return H(o,!0)}finally{d=n,h=s}}function X(e,t){t=t?Object.assign({},U,t):U;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.value)),le(n,i));return[re.bind(n),s]}function N(e,t,n){const s=J(e,t,!1,$);D(s)}function ge(e,t,n){se=ve;const s=J(e,t,!1,$);s.user=!0,_?_.push(s):D(s)}function O(e,t,n){n=n?Object.assign({},U,n):U;const s=J(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,D(s),re.bind(s)}function F(e){let t,n=d;return d=null,t=e(),d=n,t}function ye(e){return h===null||(h.cleanups===null?h.cleanups=[e]:h.cleanups.push(e)),e}function me(e){const t=O(e),n=O(()=>Q(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}function re(){const e=x;if(this.sources&&(this.state||e))if(this.state===$||e)D(this);else{const t=p;p=null,H(()=>q(this),!1),p=t}if(d){const t=this.observers?this.observers.length:0;d.sources?(d.sources.push(this),d.sourceSlots.push(t)):(d.sources=[this],d.sourceSlots=[t]),this.observers?(this.observers.push(d),this.observerSlots.push(d.sources.length-1)):(this.observers=[d],this.observerSlots=[d.sources.length-1])}return this.value}function le(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&H(()=>{for(let i=0;i<e.observers.length;i+=1){const r=e.observers[i],o=x&&x.running;o&&x.disposed.has(r),(o&&!r.tState||!o&&!r.state)&&(r.pure?p.push(r):_.push(r),r.observers&&fe(r)),o||(r.state=$)}if(p.length>1e6)throw p=[],new Error},!1)),t}function D(e){if(!e.fn)return;Z(e);const t=h,n=d,s=Y;d=h=e,we(e,e.value,s),d=n,h=t}function we(e,t,n){let s;try{s=e.fn(t)}catch(i){e.pure&&(e.state=$),ce(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?le(e,s):e.value=s,e.updatedAt=n)}function J(e,t,n,s=$,i){const r={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:h,context:null,pure:n};return h===null||h!==ie&&(h.owned?h.owned.push(r):h.owned=[r]),r}function j(e){const t=x;if(e.state===0||t)return;if(e.state===R||t)return q(e);if(e.suspense&&F(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Y);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===$||t)D(e);else if(e.state===R||t){const i=p;p=null,H(()=>q(e,n[0]),!1),p=i}}function H(e,t){if(p)return e();let n=!1;t||(p=[]),_?n=!0:_=[],Y++;try{const s=e();return be(n),s}catch(s){p||(_=null),ce(s)}}function be(e){if(p&&(oe(p),p=null),e)return;const t=_;_=null,t.length&&H(()=>se(t),!1)}function oe(e){for(let t=0;t<e.length;t++)j(e[t])}function ve(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:j(s)}for(b.context&&de(),t=0;t<n;t++)j(e[t])}function q(e,t){const n=x;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===$||n?i!==t&&j(i):(i.state===R||n)&&q(i,t))}}function fe(e){const t=x;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=R,s.pure?p.push(s):_.push(s),s.observers&&fe(s))}}function Z(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const r=i.pop(),o=n.observerSlots.pop();s<i.length&&(r.sourceSlots[o]=s,i[s]=r,n.observerSlots[s]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)Z(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function Ae(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function ce(e){throw e=Ae(e),e}function Q(e){if(typeof e=="function"&&!e.length)return Q(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=Q(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}const _e=Symbol("fallback");function z(e){for(let t=0;t<e.length;t++)e[t]()}function $e(e,t,n={}){let s=[],i=[],r=[],o=0,l=t.length>1?[]:null;return ye(()=>z(r)),()=>{let u=e()||[],c,f;return u[pe],F(()=>{let a=u.length,y,C,B,M,P,m,w,v,k;if(a===0)o!==0&&(z(r),r=[],s=[],i=[],o=0,l&&(l=[])),n.fallback&&(s=[_e],i[0]=G(ae=>(r[0]=ae,n.fallback())),o=1);else if(o===0){for(i=new Array(a),f=0;f<a;f++)s[f]=u[f],i[f]=G(g);o=a}else{for(B=new Array(a),M=new Array(a),l&&(P=new Array(a)),m=0,w=Math.min(o,a);m<w&&s[m]===u[m];m++);for(w=o-1,v=a-1;w>=m&&v>=m&&s[w]===u[v];w--,v--)B[v]=i[w],M[v]=r[w],l&&(P[v]=l[w]);for(y=new Map,C=new Array(v+1),f=v;f>=m;f--)k=u[f],c=y.get(k),C[f]=c===void 0?-1:c,y.set(k,f);for(c=m;c<=w;c++)k=s[c],f=y.get(k),f!==void 0&&f!==-1?(B[f]=i[c],M[f]=r[c],l&&(P[f]=l[c]),f=C[f],y.set(k,f)):r[c]();for(f=m;f<a;f++)f in B?(i[f]=B[f],r[f]=M[f],l&&(l[f]=P[f],l[f](f))):i[f]=G(g);i=i.slice(0,o=a),s=u.slice(0)}return i});function g(a){if(r[f]=a,l){const[y,C]=X(f);return l[f]=C,t(u[f],y)}return t(u[f])}}}function A(e,t){return F(()=>e(t||{}))}function Ce(e){const t="fallback"in e&&{fallback:()=>e.fallback};return O($e(()=>e.each,e.children,t||void 0))}function xe(e){let t=!1,n=!1;const s=me(()=>e.children),i=O(()=>{let r=s();Array.isArray(r)||(r=[r]);for(let o=0;o<r.length;o++){const l=r[o].when;if(l)return n=!!r[o].keyed,[o,l,r[o]]}return[-1]},void 0,{equals:(r,o)=>r[0]===o[0]&&(t?r[1]===o[1]:!r[1]==!o[1])&&r[2]===o[2]});return O(()=>{const[r,o,l]=i();if(r<0)return e.fallback;const u=l.children,c=typeof u=="function"&&u.length>0;return t=n||c,c?F(()=>u(o)):u})}function V(e){return e}function Ee(e,t,n){let s=n.length,i=t.length,r=s,o=0,l=0,u=t[i-1].nextSibling,c=null;for(;o<i||l<r;){if(t[o]===n[l]){o++,l++;continue}for(;t[i-1]===n[r-1];)i--,r--;if(i===o){const f=r<s?l?n[l-1].nextSibling:n[r-l]:u;for(;l<r;)e.insertBefore(n[l++],f)}else if(r===l)for(;o<i;)(!c||!c.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[r-1]&&n[l]===t[i-1]){const f=t[--i].nextSibling;e.insertBefore(n[l++],t[o++].nextSibling),e.insertBefore(n[--r],f),t[i]=n[r]}else{if(!c){c=new Map;let g=l;for(;g<r;)c.set(n[g],g++)}const f=c.get(t[o]);if(f!=null)if(l<f&&f<r){let g=o,a=1,y;for(;++g<i&&g<r&&!((y=c.get(t[g]))==null||y!==f+a);)a++;if(a>f-l){const C=t[o];for(;l<f;)e.insertBefore(n[l++],C)}else e.replaceChild(n[l++],t[o++])}else o++;else t[o++].remove()}}}const ee="_$DX_DELEGATE";function Se(e,t,n){let s;return G(i=>{s=i,t===document?e():I(t,e(),t.firstChild?null:void 0,n)}),()=>{s(),t.textContent=""}}function T(e,t,n){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return n&&(i=i.firstChild),i}function ue(e,t=window.document){const n=t[ee]||(t[ee]=new Set);for(let s=0,i=e.length;s<i;s++){const r=e[s];n.has(r)||(n.add(r),t.addEventListener(r,ke))}}function Ne(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function E(e,t){t==null?e.removeAttribute("class"):e.className=t}function Te(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const i=n[0];e.addEventListener(t,n[0]=r=>i.call(e,n[1],r))}else e.addEventListener(t,n)}function I(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return K(e,t,s,n);N(i=>K(e,t(),i,n),s)}function ke(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),b.registry&&!b.done&&(b.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>s.remove()));n!==null;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s.call(n,i,e):s.call(n,e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function K(e,t,n,s,i){for(b.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const r=typeof t,o=s!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,r==="string"||r==="number"){if(b.context)return n;if(r==="number"&&(t=t.toString()),o){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=L(e,n,s,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||r==="boolean"){if(b.context)return n;n=L(e,n,s)}else{if(r==="function")return N(()=>{let l=t();for(;typeof l=="function";)l=l();n=K(e,l,n,s)}),()=>n;if(Array.isArray(t)){const l=[],u=n&&Array.isArray(n);if(W(l,t,n,i))return N(()=>n=K(e,l,n,s,!0)),()=>n;if(b.context){if(!l.length)return n;for(let c=0;c<l.length;c++)if(l[c].parentNode)return n=l}if(l.length===0){if(n=L(e,n,s),o)return n}else u?n.length===0?te(e,l,s):Ee(e,n,l):(n&&L(e),te(e,l));n=l}else if(t instanceof Node){if(b.context&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=L(e,n,s,t);L(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function W(e,t,n,s){let i=!1;for(let r=0,o=t.length;r<o;r++){let l=t[r],u=n&&n[r];if(l instanceof Node)e.push(l);else if(!(l==null||l===!0||l===!1))if(Array.isArray(l))i=W(e,l,u)||i;else if(typeof l=="function")if(s){for(;typeof l=="function";)l=l();i=W(e,Array.isArray(l)?l:[l],u)||i}else e.push(l),i=!0;else{const c=String(l);u&&u.nodeType===3&&u.data===c?e.push(u):e.push(document.createTextNode(c))}}return i}function te(e,t,n){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function L(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let r=!1;for(let o=t.length-1;o>=0;o--){const l=t[o];if(i!==l){const u=l.parentNode===e;!r&&!o?u?e.replaceChild(i,l):e.insertBefore(i,n):u&&l.remove()}else r=!0}}else e.insertBefore(i,n);return[i]}const Le="_App_tcruc_1",Be="_Container_tcruc_5",Ie="_Header_tcruc_12",Oe="_Title_tcruc_19",Fe="_Board_tcruc_29",De="_Item_tcruc_37",He="_Footer_tcruc_47",S={App:Le,Container:Be,Header:Ie,Title:Oe,Board:Fe,Item:De,Footer:He},Me=""+new URL("github.8ec8d021.svg",import.meta.url).href,Pe=T('<div><a href=""><img></a></div>'),Ge=()=>(()=>{const e=Pe.cloneNode(!0),t=e.firstChild,n=t.firstChild;return Ne(n,"src",Me),N(()=>E(e,S.Footer)),e})(),Ue=T("<div><div>\u4E95\u5B57\u68CB</div><button>\u65B0\u6E38\u620F</button></div>"),Re=e=>{const{resetGame:t}=e;return(()=>{const n=Ue.cloneNode(!0),s=n.firstChild,i=s.nextSibling;return Te(i,"click",t,!0),N(r=>{const o=S.Header,l=S.Title;return o!==r._v$&&E(n,r._v$=o),l!==r._v$2&&E(s,r._v$2=l),r},{_v$:void 0,_v$2:void 0}),n})()};ue(["click"]);const je=T("<span></span>"),qe=T("<span>X</span>"),Ke=T("<span>O</span>"),Ve=T("<button></button>"),Xe=e=>{const{item:t,index:n,handelClick:s}=e;return(()=>{const i=Ve.cloneNode(!0);return i.$$click=()=>s(t,n),I(i,A(xe,{get children(){return[A(V,{when:t===0,get children(){return je.cloneNode(!0)}}),A(V,{when:t===1,get children(){return qe.cloneNode(!0)}}),A(V,{when:t===-1,get children(){return Ke.cloneNode(!0)}})]}})),N(()=>E(i,S.Item)),i})()};ue(["click"]);const ne=Array.from({length:9}).map(()=>0);function Qe(){const[e,t]=X(ne),[n,s]=X(!0),i=(c,f)=>{const g=[...e()];if(c===0){const a=n()?1:-1;g[f]=a,t(g),s(!n())}},r=(c,f,g)=>{const a=e();return Math.abs(a[c]+a[f]+a[g])===3},o=c=>{for(let f=0;f<9;f+=3)if(r(f,f+1,f+2))return c[f];for(let f=0;f<3;f++)if(r(f,f+3,f+6))return c[f];return r(0,4,8)?c[0]:r(2,4,6)?c[2]:(l()&&setTimeout(()=>{alert("\u6E38\u620F\u7ED3\u675F")}),0)},l=()=>e().every(c=>c!==0),u=()=>{t(ne),s(!0)};return ge(()=>{const c=o(e());Math.abs(c)===1&&setTimeout(()=>{alert("You win!")})}),{board:e,handelClick:i,resetGame:u}}const We=T("<div><div><div></div></div></div>"),Ye=()=>{const{board:e,handelClick:t,resetGame:n}=Qe();return(()=>{const s=We.cloneNode(!0),i=s.firstChild,r=i.firstChild;return I(i,A(Re,{resetGame:n}),r),I(r,A(Ce,{get each(){return e()},fallback:"loading...",children:(o,l)=>A(Xe,{item:o,get index(){return l()},handelClick:t})})),I(s,A(Ge,{}),null),N(o=>{const l=S.App,u=S.Container,c=S.Board;return l!==o._v$&&E(s,o._v$=l),u!==o._v$2&&E(i,o._v$2=u),c!==o._v$3&&E(r,o._v$3=c),o},{_v$:void 0,_v$2:void 0,_v$3:void 0}),s})()};Se(()=>A(Ye,{}),document.getElementById("root"));
