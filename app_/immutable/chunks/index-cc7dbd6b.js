function E(){}const Z=t=>t;function mt(t,e){for(const n in e)t[n]=e[n];return t}function tt(t){return t()}function V(){return Object.create(null)}function C(t){t.forEach(tt)}function K(t){return typeof t=="function"}function Wt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let q;function Gt(t,e){return q||(q=document.createElement("a")),q.href=e,t===q.href}function pt(t){return Object.keys(t).length===0}function yt(t,...e){if(t==null)return E;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Jt(t,e,n){t.$$.on_destroy.push(yt(e,n))}function Kt(t,e,n,s){if(t){const r=et(t,e,n,s);return t[0](r)}}function et(t,e,n,s){return t[1]&&s?mt(n.ctx.slice(),t[1](s(e))):n.ctx}function Qt(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],i=Math.max(e.dirty.length,r.length);for(let c=0;c<i;c+=1)l[c]=e.dirty[c]|r[c];return l}return e.dirty|r}return e.dirty}function Ut(t,e,n,s,r,l){if(r){const i=et(e,n,s,l);t.p(i,r)}}function Vt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function Xt(t){return t&&K(t.destroy)?t.destroy:E}const nt=typeof window!="undefined";let it=nt?()=>window.performance.now():()=>Date.now(),Q=nt?t=>requestAnimationFrame(t):E;const k=new Set;function st(t){k.forEach(e=>{e.c(t)||(k.delete(e),e.f())}),k.size!==0&&Q(st)}function rt(t){let e;return k.size===0&&Q(st),{promise:new Promise(n=>{k.add(e={c:t,f:n})}),abort(){k.delete(e)}}}let z=!1;function gt(){z=!0}function xt(){z=!1}function bt(t,e,n,s){for(;t<e;){const r=t+(e-t>>1);n(r)<=s?t=r+1:e=r}return t}function wt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let u=0;u<e.length;u++){const d=e[u];d.claim_order!==void 0&&o.push(d)}e=o}const n=new Int32Array(e.length+1),s=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const u=e[o].claim_order,d=(r>0&&e[n[r]].claim_order<=u?r+1:bt(1,r,a=>e[n[a]].claim_order,u))-1;s[o]=n[d]+1;const f=d+1;n[f]=o,r=Math.max(f,r)}const l=[],i=[];let c=e.length-1;for(let o=n[r]+1;o!=0;o=s[o-1]){for(l.push(e[o-1]);c>=o;c--)i.push(e[c]);c--}for(;c>=0;c--)i.push(e[c]);l.reverse(),i.sort((o,u)=>o.claim_order-u.claim_order);for(let o=0,u=0;o<i.length;o++){for(;u<l.length&&i[o].claim_order>=l[u].claim_order;)u++;const d=u<l.length?l[u]:null;t.insertBefore(i[o],d)}}function $t(t,e){t.appendChild(e)}function ot(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function vt(t){const e=ct("style");return Et(ot(t),e),e.sheet}function Et(t,e){$t(t.head||t,e)}function kt(t,e){if(z){for(wt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Yt(t,e,n){z&&!n?kt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function Ct(t){t.parentNode.removeChild(t)}function Zt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ct(t){return document.createElement(t)}function St(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function U(t){return document.createTextNode(t)}function te(){return U(" ")}function ee(){return U("")}function ne(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function ie(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function At(t){return Array.from(t.childNodes)}function Nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function lt(t,e,n,s,r=!1){Nt(t);const l=(()=>{for(let i=t.claim_info.last_index;i<t.length;i++){const c=t[i];if(e(c)){const o=n(c);return o===void 0?t.splice(i,1):t[i]=o,r||(t.claim_info.last_index=i),c}}for(let i=t.claim_info.last_index-1;i>=0;i--){const c=t[i];if(e(c)){const o=n(c);return o===void 0?t.splice(i,1):t[i]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=i,c}}return s()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function ut(t,e,n,s){return lt(t,r=>r.nodeName===e,r=>{const l=[];for(let i=0;i<r.attributes.length;i++){const c=r.attributes[i];n[c.name]||l.push(c.name)}l.forEach(i=>r.removeAttribute(i))},()=>s(e))}function se(t,e,n){return ut(t,e,n,ct)}function re(t,e,n){return ut(t,e,n,St)}function jt(t,e){return lt(t,n=>n.nodeType===3,n=>{const s=""+e;if(n.data.startsWith(s)){if(n.data.length!==s.length)return n.splitText(s.length)}else n.data=s},()=>U(e),!0)}function oe(t){return jt(t," ")}function ce(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function le(t,e,n,s){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function ue(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e){s.selected=!0;return}}t.selectedIndex=-1}function ae(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function fe(t,e,n){t.classList[n?"add":"remove"](e)}function Mt(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,s,e),r}function _e(t,e=document.body){return Array.from(e.querySelectorAll(t))}const D=new Map;let L=0;function Rt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function qt(t,e){const n={stylesheet:vt(e),rules:{}};return D.set(t,n),n}function G(t,e,n,s,r,l,i,c=0){const o=16.666/s;let u=`{
`;for(let p=0;p<=1;p+=o){const y=e+(n-e)*l(p);u+=p*100+`%{${i(y,1-y)}}
`}const d=u+`100% {${i(n,1-n)}}
}`,f=`__svelte_${Rt(d)}_${c}`,a=ot(t),{stylesheet:_,rules:h}=D.get(a)||qt(a,t);h[f]||(h[f]=!0,_.insertRule(`@keyframes ${f} ${d}`,_.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${f} ${s}ms linear ${r}ms 1 both`,L+=1,f}function at(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),r=n.length-s.length;r&&(t.style.animation=s.join(", "),L-=r,L||Bt())}function Bt(){Q(()=>{L||(D.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),D.clear())})}function de(t,e,n,s){if(!e)return E;const r=t.getBoundingClientRect();if(e.left===r.left&&e.right===r.right&&e.top===r.top&&e.bottom===r.bottom)return E;const{delay:l=0,duration:i=300,easing:c=Z,start:o=it()+l,end:u=o+i,tick:d=E,css:f}=n(t,{from:e,to:r},s);let a=!0,_=!1,h;function g(){f&&(h=G(t,0,1,i,l,c,f)),l||(_=!0)}function p(){f&&at(t,h),a=!1}return rt(y=>{if(!_&&y>=o&&(_=!0),_&&y>=u&&(d(1,0),p()),!a)return!1;if(_){const $=y-o,x=0+1*c($/i);d(x,1-x)}return!0}),g(),d(0,1),p}function he(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:s}=e,r=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=s,Ot(t,r)}}function Ot(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const s=getComputedStyle(t),r=s.transform==="none"?"":s.transform;t.style.transform=`${r} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let j;function N(t){j=t}function F(){if(!j)throw new Error("Function called outside component initialization");return j}function me(t){F().$$.on_mount.push(t)}function pe(t){F().$$.after_update.push(t)}function ye(t,e){return F().$$.context.set(t,e),e}function ge(t){return F().$$.context.get(t)}const A=[],X=[],O=[],Y=[],ft=Promise.resolve();let J=!1;function _t(){J||(J=!0,ft.then(dt))}function xe(){return _t(),ft}function T(t){O.push(t)}const H=new Set;let B=0;function dt(){const t=j;do{for(;B<A.length;){const e=A[B];B++,N(e),Pt(e.$$)}for(N(null),A.length=0,B=0;X.length;)X.pop()();for(let e=0;e<O.length;e+=1){const n=O[e];H.has(n)||(H.add(n),n())}O.length=0}while(A.length);for(;Y.length;)Y.pop()();J=!1,H.clear(),N(t)}function Pt(t){if(t.fragment!==null){t.update(),C(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}let S;function Dt(){return S||(S=Promise.resolve(),S.then(()=>{S=null})),S}function W(t,e,n){t.dispatchEvent(Mt(`${e?"intro":"outro"}${n}`))}const P=new Set;let v;function be(){v={r:0,c:[],p:v}}function we(){v.r||C(v.c),v=v.p}function ht(t,e){t&&t.i&&(P.delete(t),t.i(e))}function Lt(t,e,n,s){if(t&&t.o){if(P.has(t))return;P.add(t),v.c.push(()=>{P.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const Tt={duration:0};function $e(t,e,n,s){let r=e(t,n),l=s?0:1,i=null,c=null,o=null;function u(){o&&at(t,o)}function d(a,_){const h=a.b-l;return _*=Math.abs(h),{a:l,b:a.b,d:h,duration:_,start:a.start,end:a.start+_,group:a.group}}function f(a){const{delay:_=0,duration:h=300,easing:g=Z,tick:p=E,css:y}=r||Tt,$={start:it()+_,b:a};a||($.group=v,v.r+=1),i||c?c=$:(y&&(u(),o=G(t,l,a,h,_,g,y)),a&&p(0,1),i=d($,h),T(()=>W(t,a,"start")),rt(x=>{if(c&&x>c.start&&(i=d(c,h),c=null,W(t,i.b,"start"),y&&(u(),o=G(t,l,i.b,i.duration,0,g,r.css))),i){if(x>=i.end)p(l=i.b,1-l),W(t,i.b,"end"),c||(i.b?u():--i.group.r||C(i.group.c)),i=null;else if(x>=i.start){const M=x-i.start;l=i.a+i.d*g(M/i.duration),p(l,1-l)}}return!!(i||c)}))}return{run(a){K(r)?Dt().then(()=>{r=r(),f(a)}):f(a)},end(){u(),i=c=null}}}function zt(t,e){Lt(t,1,1,()=>{e.delete(t.key)})}function ve(t,e){t.f(),zt(t,e)}function Ee(t,e,n,s,r,l,i,c,o,u,d,f){let a=t.length,_=l.length,h=a;const g={};for(;h--;)g[t[h].key]=h;const p=[],y=new Map,$=new Map;for(h=_;h--;){const m=f(r,l,h),b=n(m);let w=i.get(b);w?s&&w.p(m,e):(w=u(b,m),w.c()),y.set(b,p[h]=w),b in g&&$.set(b,Math.abs(h-g[b]))}const x=new Set,M=new Set;function I(m){ht(m,1),m.m(c,d),i.set(m.key,m),d=m.first,_--}for(;a&&_;){const m=p[_-1],b=t[a-1],w=m.key,R=b.key;m===b?(d=m.first,a--,_--):y.has(R)?!i.has(w)||x.has(w)?I(m):M.has(R)?a--:$.get(w)>$.get(R)?(M.add(w),I(m)):(x.add(R),a--):(o(b,i),a--)}for(;a--;){const m=t[a];y.has(m.key)||o(m,i)}for(;_;)I(p[_-1]);return p}function ke(t,e){const n={},s={},r={$$scope:1};let l=t.length;for(;l--;){const i=t[l],c=e[l];if(c){for(const o in i)o in c||(s[o]=1);for(const o in c)r[o]||(n[o]=c[o],r[o]=1);t[l]=c}else for(const o in i)r[o]=1}for(const i in s)i in n||(n[i]=void 0);return n}function Ce(t){return typeof t=="object"&&t!==null?t:{}}function Se(t){t&&t.c()}function Ae(t,e){t&&t.l(e)}function Ft(t,e,n,s){const{fragment:r,on_mount:l,on_destroy:i,after_update:c}=t.$$;r&&r.m(e,n),s||T(()=>{const o=l.map(tt).filter(K);i?i.push(...o):C(o),t.$$.on_mount=[]}),c.forEach(T)}function It(t,e){const n=t.$$;n.fragment!==null&&(C(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ht(t,e){t.$$.dirty[0]===-1&&(A.push(t),_t(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ne(t,e,n,s,r,l,i,c=[-1]){const o=j;N(t);const u=t.$$={fragment:null,ctx:null,props:l,update:E,not_equal:r,bound:V(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:V(),dirty:c,skip_bound:!1,root:e.target||o.$$.root};i&&i(u.root);let d=!1;if(u.ctx=n?n(t,e.props||{},(f,a,..._)=>{const h=_.length?_[0]:a;return u.ctx&&r(u.ctx[f],u.ctx[f]=h)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](h),d&&Ht(t,f)),a}):[],u.update(),d=!0,C(u.before_update),u.fragment=s?s(u.ctx):!1,e.target){if(e.hydrate){gt();const f=At(e.target);u.fragment&&u.fragment.l(f),f.forEach(Ct)}else u.fragment&&u.fragment.c();e.intro&&ht(t.$$.fragment),Ft(t,e.target,e.anchor,e.customElement),xt(),dt()}N(o)}class je{$destroy(){It(this,1),this.$destroy=E}$on(e,n){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!pt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{it as $,Ce as A,It as B,mt as C,xe as D,E,yt as F,C as G,K as H,ge as I,St as J,re as K,Gt as L,fe as M,kt as N,Jt as O,Kt as P,Ut as Q,Vt as R,je as S,Qt as T,Zt as U,_e as V,T as W,ue as X,ne as Y,$e as Z,ae as _,At as a,rt as a0,Xt as a1,he as a2,Ot as a3,de as a4,Ee as a5,ve as a6,ie as b,se as c,Ct as d,ct as e,le as f,Yt as g,jt as h,Ne as i,ce as j,te as k,ee as l,oe as m,be as n,Lt as o,we as p,ht as q,ye as r,Wt as s,U as t,pe as u,me as v,Se as w,Ae as x,Ft as y,ke as z};
