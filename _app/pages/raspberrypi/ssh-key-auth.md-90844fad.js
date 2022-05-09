import{S as V,i as W,s as X,e as t,t as M,k as h,c as r,a as i,h as G,d as l,m as y,b as E,g as s,J as _,G as T}from"../../chunks/vendor-a21aee19.js";function Y(B){let p,I,S,d,v,O,k,o,D=`<code class="language-undefined">ssh-keygen
# add &#96;~/.ssh/pi_rsa&#96; when prompted for which file to save the key</code>`,H,u,b,P,L,f,F='<code class="language-undefined">ssh-copy-id -i ~/.ssh/pi_rsa.pub pi@raspberrypi.local</code>',x,n,m,R,w,c,K='<code class="language-undefined">ssh pi@raspberrypi.local</code>';return{c(){p=t("h1"),I=M("SSH key-based auth"),S=h(),d=t("ol"),v=t("li"),O=M("Generate a public/private key pair and"),k=h(),o=t("pre"),H=h(),u=t("ol"),b=t("li"),P=M("Move the public key to the raspberry pi"),L=h(),f=t("pre"),x=h(),n=t("ol"),m=t("li"),R=M("SSH into the raspberry pi"),w=h(),c=t("pre"),this.h()},l(e){p=r(e,"H1",{});var a=i(p);I=G(a,"SSH key-based auth"),a.forEach(l),S=y(e),d=r(e,"OL",{});var q=i(d);v=r(q,"LI",{});var C=i(v);O=G(C,"Generate a public/private key pair and"),C.forEach(l),q.forEach(l),k=y(e),o=r(e,"PRE",{class:!0});var N=i(o);N.forEach(l),H=y(e),u=r(e,"OL",{start:!0});var J=i(u);b=r(J,"LI",{});var j=i(b);P=G(j,"Move the public key to the raspberry pi"),j.forEach(l),J.forEach(l),L=y(e),f=r(e,"PRE",{class:!0});var Q=i(f);Q.forEach(l),x=y(e),n=r(e,"OL",{start:!0});var z=i(n);m=r(z,"LI",{});var A=i(m);R=G(A,"SSH into the raspberry pi"),A.forEach(l),z.forEach(l),w=y(e),c=r(e,"PRE",{class:!0});var U=i(c);U.forEach(l),this.h()},h(){E(o,"class","language-undefined"),E(u,"start","2"),E(f,"class","language-undefined"),E(n,"start","3"),E(c,"class","language-undefined")},m(e,a){s(e,p,a),_(p,I),s(e,S,a),s(e,d,a),_(d,v),_(v,O),s(e,k,a),s(e,o,a),o.innerHTML=D,s(e,H,a),s(e,u,a),_(u,b),_(b,P),s(e,L,a),s(e,f,a),f.innerHTML=F,s(e,x,a),s(e,n,a),_(n,m),_(m,R),s(e,w,a),s(e,c,a),c.innerHTML=K},p:T,i:T,o:T,d(e){e&&l(p),e&&l(S),e&&l(d),e&&l(k),e&&l(o),e&&l(H),e&&l(u),e&&l(L),e&&l(f),e&&l(x),e&&l(n),e&&l(w),e&&l(c)}}}const $={title:"SSH key-based auth",tags:["raspberrypi","linux"]};class g extends V{constructor(p){super();W(this,p,null,Y,X,{})}}export{g as default,$ as metadata};
