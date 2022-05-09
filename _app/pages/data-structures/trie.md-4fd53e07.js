import{S as M,i as L,s as R,e,t as x,k as w,c,a as d,h as C,d as n,m as y,N as j,b as T,g as p,H as f,I as G}from"../../chunks/vendor-0a633d05.js";function z(A){let t,N,m,l,E,h,u,g,_,k,i,H,v,r,I,b,o,D=`<code class="language-cs"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Trie</span> <span class="token punctuation">&#123;</span>

    <span class="token keyword">private</span> <span class="token class-name">Node</span> _root<span class="token punctuation">;</span>
    
    <span class="token keyword">public</span> <span class="token function">Trie</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        _root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Node</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
    
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Insert</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> word<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token class-name"><span class="token keyword">var</span></span> node <span class="token operator">=</span> _root<span class="token punctuation">;</span>
        <span class="token keyword">foreach</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">char</span></span> c <span class="token keyword">in</span> word<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">.</span>Children<span class="token punctuation">.</span><span class="token function">ContainsKey</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
                node<span class="token punctuation">.</span>Children<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Node</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">&#125;</span>
            
            node <span class="token operator">=</span> node<span class="token punctuation">.</span>Children<span class="token punctuation">[</span>c<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span>
        node<span class="token punctuation">.</span>IsWord <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
    
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">bool</span></span> <span class="token function">Search</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> word<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token class-name"><span class="token keyword">var</span></span> node <span class="token operator">=</span> <span class="token function">GetNode</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>node <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span>
        
        <span class="token keyword">return</span> node<span class="token punctuation">.</span>IsWord<span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
    
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">bool</span></span> <span class="token function">StartsWith</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> prefix<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token class-name"><span class="token keyword">var</span></span> node <span class="token operator">=</span> <span class="token function">GetNode</span><span class="token punctuation">(</span>prefix<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> node <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
    
    <span class="token keyword">private</span> <span class="token return-type class-name">Node</span> <span class="token function">GetNode</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> word<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token class-name"><span class="token keyword">var</span></span> node <span class="token operator">=</span> _root<span class="token punctuation">;</span>
        <span class="token keyword">foreach</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> c <span class="token keyword">in</span> word<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">.</span>Children<span class="token punctuation">.</span><span class="token function">ContainsKey</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
                <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>
                node <span class="token operator">=</span> node<span class="token punctuation">.</span>Children<span class="token punctuation">[</span>c<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">&#125;</span>
        <span class="token punctuation">&#125;</span>
        <span class="token keyword">return</span> node<span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Node</span>
<span class="token punctuation">&#123;</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">Dictionary<span class="token punctuation">&lt;</span><span class="token keyword">char</span><span class="token punctuation">,</span> Node<span class="token punctuation">></span></span> Children <span class="token punctuation">&#123;</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">&#125;</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">bool</span></span> IsWord <span class="token punctuation">&#123;</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">&#125;</span>
    
    <span class="token keyword">public</span> <span class="token function">Node</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        Children <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Dictionary<span class="token punctuation">&lt;</span><span class="token keyword">char</span><span class="token punctuation">,</span> Node<span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`;return{c(){t=e("h1"),N=x("Trie"),m=w(),l=e("p"),E=x("Created: 2021-11-30 12:43"),h=w(),u=e("p"),g=x("A trie or prefix tree is tree data structure that allows for fast searching of a key or string prefix in a dataset of strings. It is used in word completion like google search or intellisense"),_=w(),k=e("p"),i=e("img"),v=w(),r=e("h3"),I=x("Example implementation"),b=w(),o=e("pre"),this.h()},l(s){t=c(s,"H1",{});var a=d(t);N=C(a,"Trie"),a.forEach(n),m=y(s),l=c(s,"P",{});var P=d(l);E=C(P,"Created: 2021-11-30 12:43"),P.forEach(n),h=y(s),u=c(s,"P",{});var S=d(u);g=C(S,"A trie or prefix tree is tree data structure that allows for fast searching of a key or string prefix in a dataset of strings. It is used in word completion like google search or intellisense"),S.forEach(n),_=y(s),k=c(s,"P",{});var W=d(k);i=c(W,"IMG",{src:!0,alt:!0}),W.forEach(n),v=y(s),r=c(s,"H3",{});var q=d(r);I=C(q,"Example implementation"),q.forEach(n),b=y(s),o=c(s,"PRE",{class:!0});var K=d(o);K.forEach(n),this.h()},h(){j(i.src,H="/trie.svg")||T(i,"src",H),T(i,"alt","image"),T(o,"class","language-cs")},m(s,a){p(s,t,a),f(t,N),p(s,m,a),p(s,l,a),f(l,E),p(s,h,a),p(s,u,a),f(u,g),p(s,_,a),p(s,k,a),f(k,i),p(s,v,a),p(s,r,a),f(r,I),p(s,b,a),p(s,o,a),o.innerHTML=D},p:G,i:G,o:G,d(s){s&&n(t),s&&n(m),s&&n(l),s&&n(h),s&&n(u),s&&n(_),s&&n(k),s&&n(v),s&&n(r),s&&n(b),s&&n(o)}}}const F={title:"Trie",tags:["data-structure"]};class J extends M{constructor(t){super();L(this,t,null,z,R,{})}}export{J as default,F as metadata};
