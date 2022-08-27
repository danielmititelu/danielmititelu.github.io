import{S as Fn,i as Tn,s as jn,l as p,u as c,a as u,m as e,p as o,v as i,h as a,c as r,q as zn,b as l,F as s,n as yn}from"../../chunks/index-a3d3ad5c.js";function Bn(qn){let h,N,g,w,O,F,v,Q,T,_,V,j,k,H,W,X,L,Y,Z,C,$,nn,A,an,sn,P,tn,z,x,pn,B,d,S,en,on,M,ln,cn,G,un,D,I,rn,J,f,U,kn,dn,q,fn,mn,R,hn,K,y,Rn=`<code class="language-cs"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MinHeap</span>
<span class="token punctuation">&#123;</span>
    <span class="token keyword">private</span> <span class="token class-name">List<span class="token punctuation">&lt;</span><span class="token keyword">int</span><span class="token punctuation">></span></span> _heap<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">MinHeap</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#123;</span>
        _heap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span><span class="token keyword">int</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Insert</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> <span class="token keyword">value</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#123;</span>
        _heap<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">value</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token keyword">var</span></span> currentIndex <span class="token operator">=</span> _heap<span class="token punctuation">.</span>Count <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token keyword">var</span></span> parentIndex <span class="token operator">=</span> <span class="token function">GetParentIndex</span><span class="token punctuation">(</span>currentIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>parentIndex <span class="token operator">>=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> _heap<span class="token punctuation">[</span>currentIndex<span class="token punctuation">]</span> <span class="token operator">&lt;</span> _heap<span class="token punctuation">[</span>parentIndex<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">&#123;</span>
            <span class="token function">Swap</span><span class="token punctuation">(</span>currentIndex<span class="token punctuation">,</span> parentIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
            currentIndex <span class="token operator">=</span> parentIndex<span class="token punctuation">;</span>
            parentIndex <span class="token operator">=</span> <span class="token function">GetParentIndex</span><span class="token punctuation">(</span>currentIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span>

    <span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> <span class="token function">GetParentIndex</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> currentIndex<span class="token punctuation">)</span>
    <span class="token punctuation">&#123;</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>currentIndex <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> <span class="token function">ExtractMin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#123;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>_heap<span class="token punctuation">.</span>Count <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token punctuation">&#123;</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Exception</span><span class="token punctuation">(</span><span class="token string">"Heap is empty"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span>

        <span class="token class-name"><span class="token keyword">int</span></span> min <span class="token operator">=</span> _heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        _heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> _heap<span class="token punctuation">[</span>_heap<span class="token punctuation">.</span>Count <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        _heap<span class="token punctuation">.</span><span class="token function">RemoveAt</span><span class="token punctuation">(</span>_heap<span class="token punctuation">.</span>Count <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">Heapify</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> min<span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>

    <span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Heapify</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> index<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token class-name"><span class="token keyword">int</span></span> left <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token keyword">int</span></span> right <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> index <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token keyword">int</span></span> smallest <span class="token operator">=</span> index<span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> _heap<span class="token punctuation">.</span>Count <span class="token operator">&amp;&amp;</span> _heap<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">&lt;</span> _heap<span class="token punctuation">[</span>smallest<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
            smallest <span class="token operator">=</span> left<span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">&lt;</span> _heap<span class="token punctuation">.</span>Count <span class="token operator">&amp;&amp;</span> _heap<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">&lt;</span> _heap<span class="token punctuation">[</span>smallest<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
            smallest <span class="token operator">=</span> right<span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>smallest <span class="token operator">!=</span> index<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
            <span class="token function">Swap</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> smallest<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">Heapify</span><span class="token punctuation">(</span>smallest<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span>

    <span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Swap</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> index<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">int</span></span> parentIndex<span class="token punctuation">)</span>
    <span class="token punctuation">&#123;</span>
        <span class="token class-name"><span class="token keyword">int</span></span> temp <span class="token operator">=</span> _heap<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
        _heap<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> _heap<span class="token punctuation">[</span>parentIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>
        _heap<span class="token punctuation">[</span>parentIndex<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`;return{c(){h=p("h1"),N=c("Heap"),g=u(),w=p("p"),O=c("A heap is a complete binary tree where the any given node is smaller/bigger than it\u2019s descendents depending if it\u2019s a min/max heap"),F=u(),v=p("h3"),Q=c("Heap represented as array"),T=u(),_=p("p"),V=c("A heap can easily be represented as an array:"),j=u(),k=p("ul"),H=p("li"),W=c("add in array level by level"),X=u(),L=p("li"),Y=c("if a given node is at index i to find the parent of a node: p = (i - 1) / 2 (floor value of i/2)"),Z=u(),C=p("li"),$=c("left chlid = 2 * i + 1"),nn=u(),A=p("li"),an=c("right child = 2 * i + 2"),sn=u(),P=p("li"),tn=c("all leaf nodes are in the last half of the array"),z=u(),x=p("h3"),pn=c("Insert a value in the heap"),B=u(),d=p("ul"),S=p("li"),en=c("add element at the end of array"),on=u(),M=p("li"),ln=c("compare with parent and swap if it\u2019s smaller/bigger"),cn=u(),G=p("li"),un=c("repeat for all parents of that node"),D=u(),I=p("h3"),rn=c("Extract min/max value from heap"),J=u(),f=p("ul"),U=p("li"),kn=c("get value from root"),dn=u(),q=p("li"),fn=c("bring the right-most leaf(last element of array) in the root"),mn=u(),R=p("li"),hn=c("push the element down by comparing with it\u2019s children and swapping if neccesary (or [[Heapify]])"),K=u(),y=p("pre"),this.h()},l(n){h=e(n,"H1",{});var t=o(h);N=i(t,"Heap"),t.forEach(a),g=r(n),w=e(n,"P",{});var wn=o(w);O=i(wn,"A heap is a complete binary tree where the any given node is smaller/bigger than it\u2019s descendents depending if it\u2019s a min/max heap"),wn.forEach(a),F=r(n),v=e(n,"H3",{});var vn=o(v);Q=i(vn,"Heap represented as array"),vn.forEach(a),T=r(n),_=e(n,"P",{});var _n=o(_);V=i(_n,"A heap can easily be represented as an array:"),_n.forEach(a),j=r(n),k=e(n,"UL",{});var m=o(k);H=e(m,"LI",{});var xn=o(H);W=i(xn,"add in array level by level"),xn.forEach(a),X=r(m),L=e(m,"LI",{});var In=o(L);Y=i(In,"if a given node is at index i to find the parent of a node: p = (i - 1) / 2 (floor value of i/2)"),In.forEach(a),Z=r(m),C=e(m,"LI",{});var bn=o(C);$=i(bn,"left chlid = 2 * i + 1"),bn.forEach(a),nn=r(m),A=e(m,"LI",{});var En=o(A);an=i(En,"right child = 2 * i + 2"),En.forEach(a),sn=r(m),P=e(m,"LI",{});var Hn=o(P);tn=i(Hn,"all leaf nodes are in the last half of the array"),Hn.forEach(a),m.forEach(a),z=r(n),x=e(n,"H3",{});var Ln=o(x);pn=i(Ln,"Insert a value in the heap"),Ln.forEach(a),B=r(n),d=e(n,"UL",{});var b=o(d);S=e(b,"LI",{});var Cn=o(S);en=i(Cn,"add element at the end of array"),Cn.forEach(a),on=r(b),M=e(b,"LI",{});var An=o(M);ln=i(An,"compare with parent and swap if it\u2019s smaller/bigger"),An.forEach(a),cn=r(b),G=e(b,"LI",{});var Pn=o(G);un=i(Pn,"repeat for all parents of that node"),Pn.forEach(a),b.forEach(a),D=r(n),I=e(n,"H3",{});var Sn=o(I);rn=i(Sn,"Extract min/max value from heap"),Sn.forEach(a),J=r(n),f=e(n,"UL",{});var E=o(f);U=e(E,"LI",{});var Mn=o(U);kn=i(Mn,"get value from root"),Mn.forEach(a),dn=r(E),q=e(E,"LI",{});var Gn=o(q);fn=i(Gn,"bring the right-most leaf(last element of array) in the root"),Gn.forEach(a),mn=r(E),R=e(E,"LI",{});var Un=o(R);hn=i(Un,"push the element down by comparing with it\u2019s children and swapping if neccesary (or [[Heapify]])"),Un.forEach(a),E.forEach(a),K=r(n),y=e(n,"PRE",{class:!0});var gn=o(y);gn.forEach(a),this.h()},h(){zn(y,"class","language-cs")},m(n,t){l(n,h,t),s(h,N),l(n,g,t),l(n,w,t),s(w,O),l(n,F,t),l(n,v,t),s(v,Q),l(n,T,t),l(n,_,t),s(_,V),l(n,j,t),l(n,k,t),s(k,H),s(H,W),s(k,X),s(k,L),s(L,Y),s(k,Z),s(k,C),s(C,$),s(k,nn),s(k,A),s(A,an),s(k,sn),s(k,P),s(P,tn),l(n,z,t),l(n,x,t),s(x,pn),l(n,B,t),l(n,d,t),s(d,S),s(S,en),s(d,on),s(d,M),s(M,ln),s(d,cn),s(d,G),s(G,un),l(n,D,t),l(n,I,t),s(I,rn),l(n,J,t),l(n,f,t),s(f,U),s(U,kn),s(f,dn),s(f,q),s(q,fn),s(f,mn),s(f,R),s(R,hn),l(n,K,t),l(n,y,t),y.innerHTML=Rn},p:yn,i:yn,o:yn,d(n){n&&a(h),n&&a(g),n&&a(w),n&&a(F),n&&a(v),n&&a(T),n&&a(_),n&&a(j),n&&a(k),n&&a(z),n&&a(x),n&&a(B),n&&a(d),n&&a(D),n&&a(I),n&&a(J),n&&a(f),n&&a(K),n&&a(y)}}}const Jn={title:"Heap",tags:["data-structure"]};class Kn extends Fn{constructor(h){super(),Tn(this,h,null,Bn,jn,{})}}export{Kn as default,Jn as metadata};