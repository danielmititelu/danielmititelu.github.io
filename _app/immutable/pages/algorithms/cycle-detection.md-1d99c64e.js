import{S as L,i as P,s as q,l,a as E,u as x,m as u,p as k,h as n,c as g,v as H,q as h,b as r,F as f,n as w}from"../../chunks/index-a3d3ad5c.js";function S(B){let a,G=`<code class="language-cs"><span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">Colors</span> <span class="token punctuation">&#123;</span>
    White<span class="token punctuation">,</span>
    Gray<span class="token punctuation">,</span>
    Black
<span class="token punctuation">&#125;</span>

<span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">bool</span></span> <span class="token function">HasCycle</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> graph<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">int</span></span> start<span class="token punctuation">,</span> <span class="token class-name">Colors<span class="token punctuation">[</span><span class="token punctuation">]</span></span> colors<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>colors<span class="token punctuation">[</span>start<span class="token punctuation">]</span> <span class="token operator">==</span> Colors<span class="token punctuation">.</span>Gray<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>colors<span class="token punctuation">[</span>start<span class="token punctuation">]</span> <span class="token operator">==</span> Colors<span class="token punctuation">.</span>Black<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    
    colors<span class="token punctuation">[</span>start<span class="token punctuation">]</span> <span class="token operator">=</span> Colors<span class="token punctuation">.</span>Gray<span class="token punctuation">;</span>
    <span class="token keyword">foreach</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> neighbor <span class="token keyword">in</span> graph<span class="token punctuation">[</span>start<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">HasCycle</span><span class="token punctuation">(</span>graph<span class="token punctuation">,</span> neighbor<span class="token punctuation">,</span> colors<span class="token punctuation">)</span><span class="token punctuation">)</span> 
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
    
    colors<span class="token punctuation">[</span>start<span class="token punctuation">]</span> <span class="token operator">=</span> Colors<span class="token punctuation">.</span>Black<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,i,o,m,d,e,c,t,y;return{c(){a=l("pre"),i=E(),o=l("h2"),m=x("Problems"),d=E(),e=l("ul"),c=l("li"),t=l("a"),y=x("https://leetcode.com/problems/find-eventual-safe-states"),this.h()},l(s){a=u(s,"PRE",{class:!0});var p=k(a);p.forEach(n),i=g(s),o=u(s,"H2",{});var b=k(o);m=H(b,"Problems"),b.forEach(n),d=g(s),e=u(s,"UL",{});var _=k(e);c=u(_,"LI",{});var v=k(c);t=u(v,"A",{href:!0,rel:!0});var C=k(t);y=H(C,"https://leetcode.com/problems/find-eventual-safe-states"),C.forEach(n),v.forEach(n),_.forEach(n),this.h()},h(){h(a,"class","language-cs"),h(t,"href","https://leetcode.com/problems/find-eventual-safe-states"),h(t,"rel","nofollow")},m(s,p){r(s,a,p),a.innerHTML=G,r(s,i,p),r(s,o,p),f(o,m),r(s,d,p),r(s,e,p),f(e,c),f(c,t),f(t,y)},p:w,i:w,o:w,d(s){s&&n(a),s&&n(i),s&&n(o),s&&n(d),s&&n(e)}}}const F={title:"Cycle detection",tags:["algorithm"]};class I extends L{constructor(a){super(),P(this,a,null,S,q,{})}}export{I as default,F as metadata};