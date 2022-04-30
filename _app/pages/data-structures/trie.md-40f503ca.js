import{S as K,i as F,s as L,e,t as x,k as w,c,a as d,h as C,d as s,m as y,M as R,b as T,g as p,F as f,G}from"../../chunks/vendor-cac58433.js";function j(q){let t,N,m,l,E,h,u,g,_,k,i,P,v,r,I,b,o,A=`<code class="language-cs"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Trie</span> <span class="token punctuation">&#123;</span>

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
<span class="token punctuation">&#125;</span></code>`;return{c(){t=e("h1"),N=x("Trie"),m=w(),l=e("p"),E=x("Created: 2021-11-30 12:43"),h=w(),u=e("p"),g=x("A trie or prefix tree is tree data structure that allows for fast searching of a key or string prefix in a dataset of strings. It is used in word completion like google search or intellisense"),_=w(),k=e("p"),i=e("img"),v=w(),r=e("h3"),I=x("Example implementation"),b=w(),o=e("pre"),this.h()},l(n){t=c(n,"H1",{});var a=d(t);N=C(a,"Trie"),a.forEach(s),m=y(n),l=c(n,"P",{});var S=d(l);E=C(S,"Created: 2021-11-30 12:43"),S.forEach(s),h=y(n),u=c(n,"P",{});var W=d(u);g=C(W,"A trie or prefix tree is tree data structure that allows for fast searching of a key or string prefix in a dataset of strings. It is used in word completion like google search or intellisense"),W.forEach(s),_=y(n),k=c(n,"P",{});var H=d(k);i=c(H,"IMG",{src:!0,alt:!0}),H.forEach(s),v=y(n),r=c(n,"H3",{});var M=d(r);I=C(M,"Example implementation"),M.forEach(s),b=y(n),o=c(n,"PRE",{class:!0});var D=d(o);D.forEach(s),this.h()},h(){R(i.src,P="/trie.svg")||T(i,"src",P),T(i,"alt","image"),T(o,"class","language-cs")},m(n,a){p(n,t,a),f(t,N),p(n,m,a),p(n,l,a),f(l,E),p(n,h,a),p(n,u,a),f(u,g),p(n,_,a),p(n,k,a),f(k,i),p(n,v,a),p(n,r,a),f(r,I),p(n,b,a),p(n,o,a),o.innerHTML=A},p:G,i:G,o:G,d(n){n&&s(t),n&&s(m),n&&s(l),n&&s(h),n&&s(u),n&&s(_),n&&s(k),n&&s(v),n&&s(r),n&&s(b),n&&s(o)}}}const B={title:"Trie"};class J extends K{constructor(t){super();F(this,t,null,j,L,{})}}export{J as default,B as metadata};
