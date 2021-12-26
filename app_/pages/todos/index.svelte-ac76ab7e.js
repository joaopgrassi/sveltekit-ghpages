import{S as ae,i as oe,s as ne,e as j,k as R,c as w,a as y,n as D,d as k,b as n,H as W,f as X,I as f,X as C,Y,Z as le,_ as se,$ as re,a0 as de,a1 as x,R as ie,t as ue,U as ce,g as _e,a2 as fe,w as he,x as me,u as pe,a3 as ve,a4 as $,r as be,a5 as ge,J as ke}from"../../chunks/vendor-cd404de0.js";function H(i,{pending:t,error:e,result:a}){let h;async function E(m){const c=h={};m.preventDefault();const v=new FormData(i);t&&t(v,i);try{const r=await fetch(i.action,{method:i.method,headers:{accept:"application/json"},body:v});if(c!==h)return;r.ok?a(r,i):e?e(r,null,i):console.error(await r.text())}catch(r){if(e)e(null,r,i);else throw r}}return i.addEventListener("submit",E),{destroy(){i.removeEventListener("submit",E)}}}function ee(i,t,e){const a=i.slice();return a[6]=t[e],a[7]=t,a[8]=e,a}function te(i,t){let e,a,h,E,m,c,v,r,o,p,_,b,U,M,O,s,d,l,T,F,I,B,L,N,V,A=ke,q,J,Z;function z(...g){return t[3](t[6],t[7],t[8],...g)}function G(){return t[4](t[6],t[7],t[8])}function K(){return t[5](t[6])}return{key:i,first:null,c(){e=j("div"),a=j("form"),h=j("input"),m=R(),c=j("button"),p=R(),_=j("form"),b=j("input"),M=R(),O=j("button"),d=R(),l=j("form"),T=j("button"),L=R(),this.h()},l(g){e=w(g,"DIV",{class:!0});var u=y(e);a=w(u,"FORM",{action:!0,method:!0});var P=y(a);h=w(P,"INPUT",{type:!0,name:!0,class:!0}),m=D(P),c=w(P,"BUTTON",{class:!0,"aria-label":!0}),y(c).forEach(k),P.forEach(k),p=D(u),_=w(u,"FORM",{class:!0,action:!0,method:!0});var S=y(_);b=w(S,"INPUT",{"aria-label":!0,type:!0,name:!0,class:!0}),M=D(S),O=w(S,"BUTTON",{class:!0,"aria-label":!0}),y(O).forEach(k),S.forEach(k),d=D(u),l=w(u,"FORM",{action:!0,method:!0});var Q=y(l);T=w(Q,"BUTTON",{class:!0,"aria-label":!0}),y(T).forEach(k),Q.forEach(k),L=D(u),u.forEach(k),this.h()},h(){n(h,"type","hidden"),n(h,"name","done"),h.value=E=t[6].done?"":"true",n(h,"class","svelte-dmxqmd"),n(c,"class","toggle svelte-dmxqmd"),n(c,"aria-label",v="Mark todo as "+(t[6].done?"not done":"done")),n(a,"action",r="/todos/"+t[6].uid+".json?_method=patch"),n(a,"method","post"),n(b,"aria-label","Edit todo"),n(b,"type","text"),n(b,"name","text"),b.value=U=t[6].text,n(b,"class","svelte-dmxqmd"),n(O,"class","save svelte-dmxqmd"),n(O,"aria-label","Save todo"),n(_,"class","text svelte-dmxqmd"),n(_,"action",s="/todos/"+t[6].uid+".json?_method=patch"),n(_,"method","post"),n(T,"class","delete svelte-dmxqmd"),n(T,"aria-label","Delete todo"),T.disabled=F=t[6].pending_delete,n(l,"action",I="/todos/"+t[6].uid+".json?_method=delete"),n(l,"method","post"),n(e,"class","todo svelte-dmxqmd"),W(e,"done",t[6].done),this.first=e},m(g,u){X(g,e,u),f(e,a),f(a,h),f(a,m),f(a,c),f(e,p),f(e,_),f(_,b),f(_,M),f(_,O),f(e,d),f(e,l),f(l,T),f(e,L),q=!0,J||(Z=[C(o=H.call(null,a,{pending:z,result:t[1]})),C(H.call(null,_,{result:t[1]})),C(B=H.call(null,l,{pending:G,result:K}))],J=!0)},p(g,u){t=g,(!q||u&1&&E!==(E=t[6].done?"":"true"))&&(h.value=E),(!q||u&1&&v!==(v="Mark todo as "+(t[6].done?"not done":"done")))&&n(c,"aria-label",v),(!q||u&1&&r!==(r="/todos/"+t[6].uid+".json?_method=patch"))&&n(a,"action",r),o&&Y(o.update)&&u&1&&o.update.call(null,{pending:z,result:t[1]}),(!q||u&1&&U!==(U=t[6].text)&&b.value!==U)&&(b.value=U),(!q||u&1&&s!==(s="/todos/"+t[6].uid+".json?_method=patch"))&&n(_,"action",s),(!q||u&1&&F!==(F=t[6].pending_delete))&&(T.disabled=F),(!q||u&1&&I!==(I="/todos/"+t[6].uid+".json?_method=delete"))&&n(l,"action",I),B&&Y(B.update)&&u&1&&B.update.call(null,{pending:G,result:K}),u&1&&W(e,"done",t[6].done)},r(){V=e.getBoundingClientRect()},f(){le(e),A(),se(e,V)},a(){A(),A=re(e,V,ve,{duration:200})},i(g){q||(g&&de(()=>{N||(N=x(e,$,{start:.7},!0)),N.run(1)}),q=!0)},o(g){g&&(N||(N=x(e,$,{start:.7},!1)),N.run(0)),q=!1},d(g){g&&k(e),g&&N&&N.end(),J=!1,ie(Z)}}}function Ee(i){let t,e,a,h,E,m,c,v,r,o=[],p=new Map,_,b,U,M=i[0];const O=s=>s[6].uid;for(let s=0;s<M.length;s+=1){let d=ee(i,M,s),l=O(d);p.set(l,o[s]=te(l,d))}return{c(){t=R(),e=j("div"),a=j("h1"),h=ue("Todos"),E=R(),m=j("form"),c=j("input"),r=R();for(let s=0;s<o.length;s+=1)o[s].c();this.h()},l(s){ce('[data-svelte="svelte-181o7gf"]',document.head).forEach(k),t=D(s),e=w(s,"DIV",{class:!0});var l=y(e);a=w(l,"H1",{});var T=y(a);h=_e(T,"Todos"),T.forEach(k),E=D(l),m=w(l,"FORM",{class:!0,action:!0,method:!0});var F=y(m);c=w(F,"INPUT",{name:!0,"aria-label":!0,placeholder:!0,class:!0}),F.forEach(k),r=D(l);for(let I=0;I<o.length;I+=1)o[I].l(l);l.forEach(k),this.h()},h(){document.title="Todos",n(c,"name","text"),n(c,"aria-label","Add todo"),n(c,"placeholder","+ tap to add a todo"),n(c,"class","svelte-dmxqmd"),n(m,"class","new svelte-dmxqmd"),n(m,"action","/todos.json"),n(m,"method","post"),n(e,"class","todos svelte-dmxqmd")},m(s,d){X(s,t,d),X(s,e,d),f(e,a),f(a,h),f(e,E),f(e,m),f(m,c),f(e,r);for(let l=0;l<o.length;l+=1)o[l].m(e,null);_=!0,b||(U=C(v=H.call(null,m,{result:i[2]})),b=!0)},p(s,[d]){if(v&&Y(v.update)&&d&1&&v.update.call(null,{result:s[2]}),d&3){M=s[0],be();for(let l=0;l<o.length;l+=1)o[l].r();o=fe(o,d,O,1,s,M,p,e,ge,te,null,ee);for(let l=0;l<o.length;l+=1)o[l].a();he()}},i(s){if(!_){for(let d=0;d<M.length;d+=1)me(o[d]);_=!0}},o(s){for(let d=0;d<o.length;d+=1)pe(o[d]);_=!1},d(s){s&&k(t),s&&k(e);for(let d=0;d<o.length;d+=1)o[d].d();b=!1,U()}}}const Te=async({fetch:i})=>{const t=await i("/todos.json");if(t.ok)return{props:{todos:await t.json()}};const{message:e}=await t.json();return{error:new Error(e)}};function je(i,t,e){let{todos:a}=t;async function h(r){const o=await r.json();e(0,a=a.map(p=>p.uid===o.uid?o:p))}const E=async(r,o)=>{const p=await r.json();e(0,a=[...a,p]),o.reset()},m=(r,o,p,_)=>{e(0,o[p].done=!!_.get("done"),a)},c=(r,o,p)=>e(0,o[p].pending_delete=!0,a),v=r=>{e(0,a=a.filter(o=>o.uid!==r.uid))};return i.$$set=r=>{"todos"in r&&e(0,a=r.todos)},[a,h,E,m,c,v]}class qe extends ae{constructor(t){super();oe(this,t,je,Ee,ne,{todos:0})}}export{qe as default,Te as load};
