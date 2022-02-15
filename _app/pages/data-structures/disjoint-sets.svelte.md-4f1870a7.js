import{S as kn,i as rn,s as fn,e as o,t as u,k as c,c as e,a as l,h as k,d as n,m as i,M as an,b as r,g as t,F as p,G as Hs}from"../../chunks/vendor-cac58433.js";function dn(tn){let f,ks,J,x,rs,K,E,fs,N,d,M,ds,ms,S,ys,Q,R,ws,V,m,O,_s,vs,C,hs,W,P,bs,X,F,xs,Y,U,j,Is,Z,L,Es,$,w,pn=`<code class="language-cs"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UnionFind</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">private</span> <span class="token class-name"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> _parents<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">UnionFind</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> n<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        _parents <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name"><span class="token keyword">int</span></span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
            _parents<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> <span class="token function">Find</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> x<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>_parents<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">==</span> x<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
            <span class="token keyword">return</span> x<span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span>
        <span class="token keyword">return</span> <span class="token function">Find</span><span class="token punctuation">(</span>_parents<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Union</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> x<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">int</span></span> y<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token class-name"><span class="token keyword">int</span></span> xRoot <span class="token operator">=</span> <span class="token function">Find</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token keyword">int</span></span> yRoot <span class="token operator">=</span> <span class="token function">Find</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>xRoot <span class="token operator">==</span> yRoot<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span>
        _parents<span class="token punctuation">[</span>xRoot<span class="token punctuation">]</span> <span class="token operator">=</span> yRoot<span class="token punctuation">;</span>
        _count<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,g,T,Rs,ss,A,Ps,ns,H,I,qs,as,_,on=`<code class="language-cs"><span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> <span class="token function">Find</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> x<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>_parents<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">==</span> x<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> x<span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span>
	<span class="token comment">// path compression</span>
	_parents<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">Find</span><span class="token punctuation">(</span>_parents<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> _parents<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,ts,q,Fs,ps,D,Us,os,v,en=`<code class="language-cs"><span class="token comment">//...</span>
<span class="token keyword">private</span> <span class="token class-name"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> _parents<span class="token punctuation">;</span>
<span class="token keyword">private</span> <span class="token class-name"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> _ranks<span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token function">UnionFind</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> n<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	_parents <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name"><span class="token keyword">int</span></span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		_parents<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
	    _ranks<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>
<span class="token comment">//...</span>

<span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Union</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> x<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">int</span></span> y<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	<span class="token class-name"><span class="token keyword">int</span></span> xRoot <span class="token operator">=</span> <span class="token function">Find</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name"><span class="token keyword">int</span></span> yRoot <span class="token operator">=</span> <span class="token function">Find</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>xRoot <span class="token operator">==</span> yRoot<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span><span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span>

	<span class="token comment">// union by rank</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>_ranks<span class="token punctuation">[</span>xRoot<span class="token punctuation">]</span> <span class="token operator">&lt;</span> _ranks<span class="token punctuation">[</span>yRoot<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		_parents<span class="token punctuation">[</span>xRoot<span class="token punctuation">]</span> <span class="token operator">=</span> yRoot<span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>_ranks<span class="token punctuation">[</span>xRoot<span class="token punctuation">]</span> <span class="token operator">></span> _ranks<span class="token punctuation">[</span>yRoot<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		_parents<span class="token punctuation">[</span>yRoot<span class="token punctuation">]</span> <span class="token operator">=</span> xRoot<span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>
		_parents<span class="token punctuation">[</span>yRoot<span class="token punctuation">]</span> <span class="token operator">=</span> xRoot<span class="token punctuation">;</span>
		_ranks<span class="token punctuation">[</span>xRoot<span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,es,z,js,ls,y,G,h,Ls,Ts,B,b,As;return{c(){f=o("h1"),ks=u("Disjoint sets"),J=c(),x=o("p"),rs=u("Disjoint Sets or Union find is a data structure used for finding relationships between nodes."),K=c(),E=o("p"),fs=u("For example disjointed sets are ideal for the following scenarios:"),N=c(),d=o("ul"),M=o("li"),ds=u("find if a person is a direct or indirect friend of another person in a social platform"),ms=c(),S=o("li"),ys=u("given a list of flights find if there is a way to reach a destination starting from a given city"),Q=c(),R=o("p"),ws=u("Disjoint Sets or Union find implements 2 methods:"),V=c(),m=o("ul"),O=o("li"),_s=u("find - returns the union representative"),vs=c(),C=o("li"),hs=u("union - connects two nodes"),W=c(),P=o("p"),bs=u("Time complexity for both find and union is smaller than O(log n) or amortized O(1) if union by rank and path compression is used."),X=c(),F=o("p"),xs=u("An array is used to represent the parents of the disjointed sets. This is how the parents array would look after the union operation is performed on the blue and red nodes:"),Y=c(),U=o("p"),j=o("img"),Z=c(),L=o("h4"),Es=u("Code example:"),$=c(),w=o("pre"),g=c(),T=o("h4"),Rs=u("Path compression"),ss=c(),A=o("p"),Ps=u("An optimization that aims to flatten the traveral tree to the height of one so that all find operation would be completed in constant time."),ns=c(),H=o("p"),I=o("img"),as=c(),_=o("pre"),ts=c(),q=o("h4"),Fs=u("Union by rank"),ps=c(),D=o("p"),Us=u("This optimization aims to always attached the smaller tree to the bigger one. An additional array is required to store the ranks of each tree."),os=c(),v=o("pre"),es=c(),z=o("h4"),js=u("Problems that could be solved with union find"),ls=c(),y=o("ul"),G=o("li"),h=o("a"),Ls=u("https://leetcode.com/problems/number-of-provinces/submissions/"),Ts=c(),B=o("li"),b=o("a"),As=u("https://leetcode.com/problems/longest-consecutive-sequence/submissions/"),this.h()},l(s){f=e(s,"H1",{});var a=l(f);ks=k(a,"Disjoint sets"),a.forEach(n),J=i(s),x=e(s,"P",{});var Ds=l(x);rs=k(Ds,"Disjoint Sets or Union find is a data structure used for finding relationships between nodes."),Ds.forEach(n),K=i(s),E=e(s,"P",{});var zs=l(E);fs=k(zs,"For example disjointed sets are ideal for the following scenarios:"),zs.forEach(n),N=i(s),d=e(s,"UL",{});var cs=l(d);M=e(cs,"LI",{});var Ms=l(M);ds=k(Ms,"find if a person is a direct or indirect friend of another person in a social platform"),Ms.forEach(n),ms=i(cs),S=e(cs,"LI",{});var Ss=l(S);ys=k(Ss,"given a list of flights find if there is a way to reach a destination starting from a given city"),Ss.forEach(n),cs.forEach(n),Q=i(s),R=e(s,"P",{});var Os=l(R);ws=k(Os,"Disjoint Sets or Union find implements 2 methods:"),Os.forEach(n),V=i(s),m=e(s,"UL",{});var is=l(m);O=e(is,"LI",{});var Cs=l(O);_s=k(Cs,"find - returns the union representative"),Cs.forEach(n),vs=i(is),C=e(is,"LI",{});var Gs=l(C);hs=k(Gs,"union - connects two nodes"),Gs.forEach(n),is.forEach(n),W=i(s),P=e(s,"P",{});var Bs=l(P);bs=k(Bs,"Time complexity for both find and union is smaller than O(log n) or amortized O(1) if union by rank and path compression is used."),Bs.forEach(n),X=i(s),F=e(s,"P",{});var Js=l(F);xs=k(Js,"An array is used to represent the parents of the disjointed sets. This is how the parents array would look after the union operation is performed on the blue and red nodes:"),Js.forEach(n),Y=i(s),U=e(s,"P",{});var Ks=l(U);j=e(Ks,"IMG",{src:!0,alt:!0}),Ks.forEach(n),Z=i(s),L=e(s,"H4",{});var Ns=l(L);Es=k(Ns,"Code example:"),Ns.forEach(n),$=i(s),w=e(s,"PRE",{class:!0});var ln=l(w);ln.forEach(n),g=i(s),T=e(s,"H4",{});var Qs=l(T);Rs=k(Qs,"Path compression"),Qs.forEach(n),ss=i(s),A=e(s,"P",{});var Vs=l(A);Ps=k(Vs,"An optimization that aims to flatten the traveral tree to the height of one so that all find operation would be completed in constant time."),Vs.forEach(n),ns=i(s),H=e(s,"P",{});var Ws=l(H);I=e(Ws,"IMG",{src:!0,alt:!0}),Ws.forEach(n),as=i(s),_=e(s,"PRE",{class:!0});var cn=l(_);cn.forEach(n),ts=i(s),q=e(s,"H4",{});var Xs=l(q);Fs=k(Xs,"Union by rank"),Xs.forEach(n),ps=i(s),D=e(s,"P",{});var Ys=l(D);Us=k(Ys,"This optimization aims to always attached the smaller tree to the bigger one. An additional array is required to store the ranks of each tree."),Ys.forEach(n),os=i(s),v=e(s,"PRE",{class:!0});var un=l(v);un.forEach(n),es=i(s),z=e(s,"H4",{});var Zs=l(z);js=k(Zs,"Problems that could be solved with union find"),Zs.forEach(n),ls=i(s),y=e(s,"UL",{});var us=l(y);G=e(us,"LI",{});var $s=l(G);h=e($s,"A",{href:!0,rel:!0});var gs=l(h);Ls=k(gs,"https://leetcode.com/problems/number-of-provinces/submissions/"),gs.forEach(n),$s.forEach(n),Ts=i(us),B=e(us,"LI",{});var sn=l(B);b=e(sn,"A",{href:!0,rel:!0});var nn=l(b);As=k(nn,"https://leetcode.com/problems/longest-consecutive-sequence/submissions/"),nn.forEach(n),sn.forEach(n),us.forEach(n),this.h()},h(){an(j.src,Is="/disjoint-sets.svg")||r(j,"src",Is),r(j,"alt","image"),r(w,"class","language-cs"),an(I.src,qs="/disjoint-sets-copmleted.svg")||r(I,"src",qs),r(I,"alt","image"),r(_,"class","language-cs"),r(v,"class","language-cs"),r(h,"href","https://leetcode.com/problems/number-of-provinces/submissions/"),r(h,"rel","nofollow"),r(b,"href","https://leetcode.com/problems/longest-consecutive-sequence/submissions/"),r(b,"rel","nofollow")},m(s,a){t(s,f,a),p(f,ks),t(s,J,a),t(s,x,a),p(x,rs),t(s,K,a),t(s,E,a),p(E,fs),t(s,N,a),t(s,d,a),p(d,M),p(M,ds),p(d,ms),p(d,S),p(S,ys),t(s,Q,a),t(s,R,a),p(R,ws),t(s,V,a),t(s,m,a),p(m,O),p(O,_s),p(m,vs),p(m,C),p(C,hs),t(s,W,a),t(s,P,a),p(P,bs),t(s,X,a),t(s,F,a),p(F,xs),t(s,Y,a),t(s,U,a),p(U,j),t(s,Z,a),t(s,L,a),p(L,Es),t(s,$,a),t(s,w,a),w.innerHTML=pn,t(s,g,a),t(s,T,a),p(T,Rs),t(s,ss,a),t(s,A,a),p(A,Ps),t(s,ns,a),t(s,H,a),p(H,I),t(s,as,a),t(s,_,a),_.innerHTML=on,t(s,ts,a),t(s,q,a),p(q,Fs),t(s,ps,a),t(s,D,a),p(D,Us),t(s,os,a),t(s,v,a),v.innerHTML=en,t(s,es,a),t(s,z,a),p(z,js),t(s,ls,a),t(s,y,a),p(y,G),p(G,h),p(h,Ls),p(y,Ts),p(y,B),p(B,b),p(b,As)},p:Hs,i:Hs,o:Hs,d(s){s&&n(f),s&&n(J),s&&n(x),s&&n(K),s&&n(E),s&&n(N),s&&n(d),s&&n(Q),s&&n(R),s&&n(V),s&&n(m),s&&n(W),s&&n(P),s&&n(X),s&&n(F),s&&n(Y),s&&n(U),s&&n(Z),s&&n(L),s&&n($),s&&n(w),s&&n(g),s&&n(T),s&&n(ss),s&&n(A),s&&n(ns),s&&n(H),s&&n(as),s&&n(_),s&&n(ts),s&&n(q),s&&n(ps),s&&n(D),s&&n(os),s&&n(v),s&&n(es),s&&n(z),s&&n(ls),s&&n(y)}}}class yn extends kn{constructor(f){super();rn(this,f,null,dn,fn,{})}}export{yn as default};