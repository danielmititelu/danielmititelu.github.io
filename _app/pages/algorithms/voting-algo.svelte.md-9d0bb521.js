import{S as G,i as L,s as g,e as l,t as y,k as h,c,a as i,h as d,d as a,m as _,b as S,g as t,F as f,G as q}from"../../chunks/vendor-cac58433.js";function z(I){let e,E,w,r,T,x,u,M,b,o,C=`<code class="language-cs"><span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> <span class="token function">MajorityElement</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> nums<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	<span class="token class-name"><span class="token keyword">int</span></span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token class-name"><span class="token keyword">int</span></span> candidate <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> num <span class="token keyword">in</span> nums<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
			candidate <span class="token operator">=</span> num<span class="token punctuation">;</span>
		<span class="token punctuation">&#125;</span>
		count <span class="token operator">+=</span> <span class="token punctuation">(</span>num <span class="token operator">==</span> candidate<span class="token punctuation">)</span> <span class="token punctuation">?</span> <span class="token number">1</span> <span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span>
	<span class="token keyword">return</span> candidate<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,v,k,O,j,m,p,P;return{c(){e=l("h1"),E=y("Boyer-Moore Voting Algorithm"),w=h(),r=l("p"),T=y(`Time complexity : O(n)
Space complexity : O(1)`),x=h(),u=l("p"),M=y("The algorithm counts the majority of votes(elements) in an array by finding a part of the array (suffix) where the first element in array suffix is the majority. It does this by diregarding any prefix where the majority is equal to the minority of votes."),b=h(),o=l("pre"),v=h(),k=l("h3"),O=y("References"),j=h(),m=l("p"),p=l("a"),P=y("https://leetcode.com/problems/majority-element/solution/"),this.h()},l(s){e=c(s,"H1",{});var n=i(e);E=d(n,"Boyer-Moore Voting Algorithm"),n.forEach(a),w=_(s),r=c(s,"P",{});var A=i(r);T=d(A,`Time complexity : O(n)
Space complexity : O(1)`),A.forEach(a),x=_(s),u=c(s,"P",{});var H=i(u);M=d(H,"The algorithm counts the majority of votes(elements) in an array by finding a part of the array (suffix) where the first element in array suffix is the majority. It does this by diregarding any prefix where the majority is equal to the minority of votes."),H.forEach(a),b=_(s),o=c(s,"PRE",{class:!0});var F=i(o);F.forEach(a),v=_(s),k=c(s,"H3",{});var R=i(k);O=d(R,"References"),R.forEach(a),j=_(s),m=c(s,"P",{});var V=i(m);p=c(V,"A",{href:!0,rel:!0});var B=i(p);P=d(B,"https://leetcode.com/problems/majority-element/solution/"),B.forEach(a),V.forEach(a),this.h()},h(){S(o,"class","language-cs"),S(p,"href","https://leetcode.com/problems/majority-element/solution/"),S(p,"rel","nofollow")},m(s,n){t(s,e,n),f(e,E),t(s,w,n),t(s,r,n),f(r,T),t(s,x,n),t(s,u,n),f(u,M),t(s,b,n),t(s,o,n),o.innerHTML=C,t(s,v,n),t(s,k,n),f(k,O),t(s,j,n),t(s,m,n),f(m,p),f(p,P)},p:q,i:q,o:q,d(s){s&&a(e),s&&a(w),s&&a(r),s&&a(x),s&&a(u),s&&a(b),s&&a(o),s&&a(v),s&&a(k),s&&a(j),s&&a(m)}}}class J extends G{constructor(e){super();L(this,e,null,z,g,{})}}export{J as default};