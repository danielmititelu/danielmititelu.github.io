import{S as yn,i as bn,s as _n,e as p,t as i,k as l,c as e,a as o,h as r,d as s,m as u,b as f,g as t,F as c,G as Z}from"../../chunks/vendor-cac58433.js";function vn(mn){let k,W,D,_,z,A,v,B,I,E,J,C,h,fn=`<code class="language-cs"><span class="token comment">// Dutch national flag problem (partition array into 3 parts: red, white, blue)</span>
<span class="token comment">// 0 -> red, 1 -> white, 2 -> blue</span>
<span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">SortColors</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> nums<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token class-name"><span class="token keyword">int</span></span> red <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> white <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> blue <span class="token operator">=</span> nums<span class="token punctuation">.</span>Length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token comment">// Traverse the array until we hit the blue part</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>white <span class="token operator">&lt;=</span> blue<span class="token punctuation">)</span> 
    <span class="token punctuation">&#123;</span>
        <span class="token comment">// if the white iterator hit a red color</span>
        <span class="token comment">// swap it with the red iterator and increment it </span>
        <span class="token comment">// and the white iterator</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>white<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> 
        <span class="token punctuation">&#123;</span> 
            <span class="token function">Swap</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> red<span class="token punctuation">,</span> white<span class="token punctuation">)</span><span class="token punctuation">;</span>
            red<span class="token operator">++</span><span class="token punctuation">;</span>
            white<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span> 

        <span class="token comment">// if the white iterator hit a blue color</span>
        <span class="token comment">// swap it with the blue iterator and </span>
        <span class="token comment">// decrement the blue iterator</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>white<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> 
        <span class="token punctuation">&#123;</span> 
            <span class="token function">Swap</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> white<span class="token punctuation">,</span> blue<span class="token punctuation">)</span><span class="token punctuation">;</span>
            blue<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span> 

        <span class="token comment">// if white iterator hit a white color</span>
        <span class="token comment">// it's already in the right place</span>
        <span class="token comment">// so just increase the white iterator</span>
        <span class="token keyword">else</span> <span class="token punctuation">&#123;</span> 
            white<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Swap</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> nums<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">int</span></span> left<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">int</span></span> i<span class="token punctuation">)</span>
<span class="token punctuation">&#123;</span>
    <span class="token class-name"><span class="token keyword">int</span></span> temp <span class="token operator">=</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">;</span>
    nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,R,g,K,q,w,hn=`<code class="language-cs"><span class="token comment">// Function to partition the array around the range such </span>
<span class="token comment">// that array is divided into three parts.</span>
<span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ThreeWayPartition</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> arr<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">int</span></span> a<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">int</span></span> b<span class="token punctuation">)</span>
<span class="token punctuation">&#123;</span>
    <span class="token class-name"><span class="token keyword">int</span></span> smaller <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> bigger <span class="token operator">=</span> arr<span class="token punctuation">.</span>Length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token comment">// Traverse the array</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> bigger<span class="token punctuation">)</span>
    <span class="token punctuation">&#123;</span>
        <span class="token comment">// If current element is smaller than a,</span>
        <span class="token comment">// then increment smaller and iterator by 1</span>
        <span class="token comment">// and swap current element with smaller element</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> a<span class="token punctuation">)</span>
        <span class="token punctuation">&#123;</span>
            <span class="token function">Swap</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> i<span class="token punctuation">,</span> smaller<span class="token punctuation">)</span><span class="token punctuation">;</span>
            smaller<span class="token operator">++</span><span class="token punctuation">;</span>
            i<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span>

        <span class="token comment">// If current element is bigger than b,</span>
        <span class="token comment">// then decrement bigger by 1 and swap</span>
        <span class="token comment">// current element with bigger element</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">></span> b<span class="token punctuation">)</span>
        <span class="token punctuation">&#123;</span>
            <span class="token function">Swap</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> i<span class="token punctuation">,</span> bigger<span class="token punctuation">)</span><span class="token punctuation">;</span>
            bigger<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span>

        <span class="token comment">// Else current element is in range [a,b]</span>
        <span class="token comment">// so do nothing</span>
        <span class="token keyword">else</span>
            i<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Swap</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> arr<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">int</span></span> first<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">int</span></span> second<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token class-name"><span class="token keyword">var</span></span> temp <span class="token operator">=</span> arr<span class="token punctuation">[</span>first<span class="token punctuation">]</span><span class="token punctuation">;</span>
    arr<span class="token punctuation">[</span>first<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>second<span class="token punctuation">]</span><span class="token punctuation">;</span>
    arr<span class="token punctuation">[</span>second<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,F,P,N,M,L,H,d,O,U,S,Q,j,m,T,y,V,X,x,b,Y;return{c(){k=p("h1"),W=i("Three way partitioning"),D=l(),_=p("p"),z=i("A partition strategy that is sometime used in quicksort."),A=l(),v=p("h2"),B=i("Code example"),I=l(),E=p("h3"),J=i("Dutch national flag problem"),C=l(),h=p("pre"),R=l(),g=p("h3"),K=i("Partition around a range"),q=l(),w=p("pre"),F=l(),P=p("h2"),N=i("References"),M=l(),L=p("ul"),H=p("li"),d=p("a"),O=i("https://en.wikipedia.org/wiki/Dutch_national_flag_problem#Pseudocode"),U=l(),S=p("h2"),Q=i("Problems"),j=l(),m=p("ul"),T=p("li"),y=p("a"),V=i("https://leetcode.com/problems/sort-colors/"),X=l(),x=p("li"),b=p("a"),Y=i("https://practice.geeksforgeeks.org/problems/three-way-partitioning/1/#"),this.h()},l(n){k=e(n,"H1",{});var a=o(k);W=r(a,"Three way partitioning"),a.forEach(s),D=u(n),_=e(n,"P",{});var $=o(_);z=r($,"A partition strategy that is sometime used in quicksort."),$.forEach(s),A=u(n),v=e(n,"H2",{});var nn=o(v);B=r(nn,"Code example"),nn.forEach(s),I=u(n),E=e(n,"H3",{});var sn=o(E);J=r(sn,"Dutch national flag problem"),sn.forEach(s),C=u(n),h=e(n,"PRE",{class:!0});var wn=o(h);wn.forEach(s),R=u(n),g=e(n,"H3",{});var an=o(g);K=r(an,"Partition around a range"),an.forEach(s),q=u(n),w=e(n,"PRE",{class:!0});var dn=o(w);dn.forEach(s),F=u(n),P=e(n,"H2",{});var tn=o(P);N=r(tn,"References"),tn.forEach(s),M=u(n),L=e(n,"UL",{});var pn=o(L);H=e(pn,"LI",{});var en=o(H);d=e(en,"A",{href:!0,rel:!0});var on=o(d);O=r(on,"https://en.wikipedia.org/wiki/Dutch_national_flag_problem#Pseudocode"),on.forEach(s),en.forEach(s),pn.forEach(s),U=u(n),S=e(n,"H2",{});var cn=o(S);Q=r(cn,"Problems"),cn.forEach(s),j=u(n),m=e(n,"UL",{});var G=o(m);T=e(G,"LI",{});var ln=o(T);y=e(ln,"A",{href:!0,rel:!0});var un=o(y);V=r(un,"https://leetcode.com/problems/sort-colors/"),un.forEach(s),ln.forEach(s),X=u(G),x=e(G,"LI",{});var rn=o(x);b=e(rn,"A",{href:!0,rel:!0});var kn=o(b);Y=r(kn,"https://practice.geeksforgeeks.org/problems/three-way-partitioning/1/#"),kn.forEach(s),rn.forEach(s),G.forEach(s),this.h()},h(){f(h,"class","language-cs"),f(w,"class","language-cs"),f(d,"href","https://en.wikipedia.org/wiki/Dutch_national_flag_problem#Pseudocode"),f(d,"rel","nofollow"),f(y,"href","https://leetcode.com/problems/sort-colors/"),f(y,"rel","nofollow"),f(b,"href","https://practice.geeksforgeeks.org/problems/three-way-partitioning/1/#"),f(b,"rel","nofollow")},m(n,a){t(n,k,a),c(k,W),t(n,D,a),t(n,_,a),c(_,z),t(n,A,a),t(n,v,a),c(v,B),t(n,I,a),t(n,E,a),c(E,J),t(n,C,a),t(n,h,a),h.innerHTML=fn,t(n,R,a),t(n,g,a),c(g,K),t(n,q,a),t(n,w,a),w.innerHTML=hn,t(n,F,a),t(n,P,a),c(P,N),t(n,M,a),t(n,L,a),c(L,H),c(H,d),c(d,O),t(n,U,a),t(n,S,a),c(S,Q),t(n,j,a),t(n,m,a),c(m,T),c(T,y),c(y,V),c(m,X),c(m,x),c(x,b),c(b,Y)},p:Z,i:Z,o:Z,d(n){n&&s(k),n&&s(D),n&&s(_),n&&s(A),n&&s(v),n&&s(I),n&&s(E),n&&s(C),n&&s(h),n&&s(R),n&&s(g),n&&s(q),n&&s(w),n&&s(F),n&&s(P),n&&s(M),n&&s(L),n&&s(U),n&&s(S),n&&s(j),n&&s(m)}}}class gn extends yn{constructor(k){super();bn(this,k,null,vn,_n,{})}}export{gn as default};
