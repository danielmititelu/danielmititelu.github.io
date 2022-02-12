import{S as pn,i as en,s as on,e,t as o,k as y,c,a as l,h as u,d as s,m as w,b as cn,g as p,F as t,G as J}from"../../chunks/vendor-cac58433.js";function ln(sn){let k,B,I,h,L,E,i,v,S,V,x,T,O,f,z,H,r,A,_,D,R,j,d,g,N,q,F,C,b,U,P,m,an=`<code class="language-cs"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyHashMap</span>
<span class="token punctuation">&#123;</span>
    <span class="token keyword">private</span> <span class="token class-name">Node<span class="token punctuation">[</span><span class="token punctuation">]</span></span> _buckets<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name"><span class="token keyword">int</span></span> _bucketCount<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">MyHashMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#123;</span>
        _bucketCount <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
        _buckets <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Node</span><span class="token punctuation">[</span>_bucketCount<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Put</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> key<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">int</span></span> <span class="token keyword">value</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#123;</span>
        <span class="token class-name"><span class="token keyword">var</span></span> bucketIndex <span class="token operator">=</span> <span class="token function">GetBucketIndex</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token keyword">var</span></span> node <span class="token operator">=</span> _buckets<span class="token punctuation">[</span>bucketIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        <span class="token punctuation">&#123;</span>
            _buckets<span class="token punctuation">[</span>bucketIndex<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Node</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token keyword">value</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span>

        <span class="token keyword">while</span> <span class="token punctuation">(</span>node <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        <span class="token punctuation">&#123;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>Key <span class="token operator">==</span> key<span class="token punctuation">)</span>
            <span class="token punctuation">&#123;</span>
                node<span class="token punctuation">.</span>Value <span class="token operator">=</span> <span class="token keyword">value</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span><span class="token punctuation">;</span>
            <span class="token punctuation">&#125;</span>

            <span class="token keyword">if</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>Next <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
            <span class="token punctuation">&#123;</span>
                node<span class="token punctuation">.</span>Next <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Node</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token keyword">value</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span><span class="token punctuation">;</span>
            <span class="token punctuation">&#125;</span>
            node <span class="token operator">=</span> node<span class="token punctuation">.</span>Next<span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> <span class="token function">Get</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> key<span class="token punctuation">)</span>
    <span class="token punctuation">&#123;</span>
        <span class="token class-name"><span class="token keyword">var</span></span> bucketIndex <span class="token operator">=</span> <span class="token function">GetBucketIndex</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token keyword">var</span></span> node <span class="token operator">=</span> _buckets<span class="token punctuation">[</span>bucketIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>node <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        <span class="token punctuation">&#123;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>Key <span class="token operator">==</span> key<span class="token punctuation">)</span>
            <span class="token punctuation">&#123;</span>
                <span class="token keyword">return</span> node<span class="token punctuation">.</span>Value<span class="token punctuation">;</span>
            <span class="token punctuation">&#125;</span>
            node <span class="token operator">=</span> node<span class="token punctuation">.</span>Next<span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Remove</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> key<span class="token punctuation">)</span>
    <span class="token punctuation">&#123;</span>
        <span class="token class-name"><span class="token keyword">var</span></span> bucketIndex <span class="token operator">=</span> <span class="token function">GetBucketIndex</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token keyword">var</span></span> node <span class="token operator">=</span> _buckets<span class="token punctuation">[</span>bucketIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        <span class="token punctuation">&#123;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>Key <span class="token operator">==</span> key<span class="token punctuation">)</span>
        <span class="token punctuation">&#123;</span>
            _buckets<span class="token punctuation">[</span>bucketIndex<span class="token punctuation">]</span> <span class="token operator">=</span> node<span class="token punctuation">.</span>Next<span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span>

        <span class="token keyword">while</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>Next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        <span class="token punctuation">&#123;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>Next<span class="token punctuation">.</span>Key <span class="token operator">==</span> key<span class="token punctuation">)</span>
            <span class="token punctuation">&#123;</span>
                node<span class="token punctuation">.</span>Next <span class="token operator">=</span> node<span class="token punctuation">.</span>Next<span class="token punctuation">.</span>Next<span class="token punctuation">;</span>
                <span class="token keyword">return</span><span class="token punctuation">;</span>
            <span class="token punctuation">&#125;</span>
            node <span class="token operator">=</span> node<span class="token punctuation">.</span>Next<span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span>

    <span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> <span class="token function">GetBucketIndex</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> key<span class="token punctuation">)</span>
    <span class="token punctuation">&#123;</span>
        <span class="token keyword">return</span> key <span class="token operator">%</span> _bucketCount<span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Node</span>
<span class="token punctuation">&#123;</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Key <span class="token punctuation">&#123;</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">&#125;</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Value <span class="token punctuation">&#123;</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">&#125;</span>

    <span class="token keyword">public</span> <span class="token return-type class-name">Node</span> Next <span class="token punctuation">&#123;</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">&#125;</span>
    <span class="token keyword">public</span> <span class="token function">Node</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> key<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">int</span></span> <span class="token keyword">value</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#123;</span>
        Key <span class="token operator">=</span> key<span class="token punctuation">;</span>
        Value <span class="token operator">=</span> <span class="token keyword">value</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`;return{c(){k=e("h1"),B=o("Hash map / Hash table"),I=y(),h=e("p"),L=o("Time complexity:"),E=y(),i=e("ul"),v=e("li"),S=o("average case: insert, lookup O(1)"),V=y(),x=e("li"),T=o("worst case: insert, lookup O(N)"),O=y(),f=e("p"),z=o("A hash map, hash table or dictionary organizes data in key/value pairs with constant lookup time for the keys. It is similar to an array where indexes are used to access values but the key difference (no pun intended) is that any type of object can be used as the key and not just integers."),H=y(),r=e("p"),A=o("In fact hash tables are built with array as the backing field but in order to support strings or custom object in keys a "),_=e("code"),D=o("hashing function"),R=o(" is used to convert the string/custom object to an integer index."),j=y(),d=e("p"),g=o("One problem using hash functions is that two keys can convert to the same index, and here "),N=e("code"),q=o("hash colisions"),F=o(" appear. One way to solve this is in each element in array to store a linked list and everytime we get a hash collision we store the key/value pair in the next node in the likned list."),C=y(),b=e("p"),U=o("Sample implementation:"),P=y(),m=e("pre"),this.h()},l(n){k=c(n,"H1",{});var a=l(k);B=u(a,"Hash map / Hash table"),a.forEach(s),I=w(n),h=c(n,"P",{});var Q=l(h);L=u(Q,"Time complexity:"),Q.forEach(s),E=w(n),i=c(n,"UL",{});var G=l(i);v=c(G,"LI",{});var W=l(v);S=u(W,"average case: insert, lookup O(1)"),W.forEach(s),V=w(G),x=c(G,"LI",{});var X=l(x);T=u(X,"worst case: insert, lookup O(N)"),X.forEach(s),G.forEach(s),O=w(n),f=c(n,"P",{});var Y=l(f);z=u(Y,"A hash map, hash table or dictionary organizes data in key/value pairs with constant lookup time for the keys. It is similar to an array where indexes are used to access values but the key difference (no pun intended) is that any type of object can be used as the key and not just integers."),Y.forEach(s),H=w(n),r=c(n,"P",{});var K=l(r);A=u(K,"In fact hash tables are built with array as the backing field but in order to support strings or custom object in keys a "),_=c(K,"CODE",{});var Z=l(_);D=u(Z,"hashing function"),Z.forEach(s),R=u(K," is used to convert the string/custom object to an integer index."),K.forEach(s),j=w(n),d=c(n,"P",{});var M=l(d);g=u(M,"One problem using hash functions is that two keys can convert to the same index, and here "),N=c(M,"CODE",{});var $=l(N);q=u($,"hash colisions"),$.forEach(s),F=u(M," appear. One way to solve this is in each element in array to store a linked list and everytime we get a hash collision we store the key/value pair in the next node in the likned list."),M.forEach(s),C=w(n),b=c(n,"P",{});var nn=l(b);U=u(nn,"Sample implementation:"),nn.forEach(s),P=w(n),m=c(n,"PRE",{class:!0});var tn=l(m);tn.forEach(s),this.h()},h(){cn(m,"class","language-cs")},m(n,a){p(n,k,a),t(k,B),p(n,I,a),p(n,h,a),t(h,L),p(n,E,a),p(n,i,a),t(i,v),t(v,S),t(i,V),t(i,x),t(x,T),p(n,O,a),p(n,f,a),t(f,z),p(n,H,a),p(n,r,a),t(r,A),t(r,_),t(_,D),t(r,R),p(n,j,a),p(n,d,a),t(d,g),t(d,N),t(N,q),t(d,F),p(n,C,a),p(n,b,a),t(b,U),p(n,P,a),p(n,m,a),m.innerHTML=an},p:J,i:J,o:J,d(n){n&&s(k),n&&s(I),n&&s(h),n&&s(E),n&&s(i),n&&s(O),n&&s(f),n&&s(H),n&&s(r),n&&s(j),n&&s(d),n&&s(C),n&&s(b),n&&s(P),n&&s(m)}}}class kn extends pn{constructor(k){super();en(this,k,null,ln,on,{})}}export{kn as default};
