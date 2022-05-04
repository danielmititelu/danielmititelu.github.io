import{S as bl,i as yl,s as Pl,e as i,t as r,k as n,c as s,a as f,h as p,d as l,m as d,b as z,g as o,F as a,G as qe}from"../../chunks/vendor-cac58433.js";function Cl(rl){let m,de,B,C,ue,J,S,ce,K,c,_,_e,F,me,we,A,ve,Ee,be,u,ye,W,Pe,Ce,q,Se,he,U,De,Ie,xe,j,ke,Q,h,Ge,V,v,pl='<code class="language-undefined">ssh pi@raspberrypi.local</code>',X,D,Le,Z,I,Oe,$,E,nl='<code class="language-undefined">ifconfig</code>',g,x,He,ee,b,dl='<code class="language-undefined">iwconfig</code>',le,k,Me,te,y,ul='<code class="language-undefined">iwlist wlan0 scan | grep ESSID</code>',oe,G,Re,ae,P,cl=`<code class="language-undefined">sudo killall wpa_supplicant
sudo wpa_supplicant -c/etc/wpa_supplicant/wpa_supplicant.conf -iwlan0</code>`,ie,L,Ne,se,O,Te,fe,H,Ye,re,M,Fe,pe,R,Ae,ne,N,We;return{c(){m=i("h1"),de=r("Gadget mode on raspberry pi"),B=n(),C=i("p"),ue=r("Gadget mode enables a raspberry pi to be connected and controlled by a computer with only a usb cable"),J=n(),S=i("p"),ce=r("Flash raspberry pi os(the full or lite version) on an SD card and modify the following in the boot folder:"),K=n(),c=i("ul"),_=i("li"),_e=r("in "),F=i("code"),me=r("config.txt"),we=r(" add "),A=i("code"),ve=r("dtoverlay=dwc2"),Ee=r(" at the end of the file"),be=n(),u=i("li"),ye=r("in "),W=i("code"),Pe=r("cmdline.txt"),Ce=r(" add "),q=i("code"),Se=r("modules-load=dwc2,g_ether"),he=r(" after "),U=i("code"),De=r("rootwait"),Ie=r(" word"),xe=n(),j=i("li"),ke=r("create a file name ssh (without extension)"),Q=n(),h=i("p"),Ge=r("You should be able to connect to the pi now:"),V=n(),v=i("pre"),X=n(),D=i("h3"),Le=r("Debugging wifi connectivity"),Z=n(),I=i("p"),Oe=r("Command to see the network interfaces"),$=n(),E=i("pre"),g=n(),x=i("p"),He=r("Command to see the wireless interfaces"),ee=n(),b=i("pre"),le=n(),k=i("p"),Me=r("Command to scan wireless networks"),te=n(),y=i("pre"),oe=n(),G=i("p"),Re=r("Commands to stop and start wpa_supplicant manually"),ae=n(),P=i("pre"),ie=n(),L=i("h3"),Ne=r("Internet via usb cable"),se=n(),O=i("p"),Te=r("You can also give internet to the pi with the usb connection:"),fe=n(),H=i("p"),Ye=r("On Windows:"),re=n(),M=i("p"),Fe=r("Control Panel > Network and Internet > Network and Sharing Center"),pe=n(),R=i("p"),Ae=r("On Mac:"),ne=n(),N=i("p"),We=r("Apple menu > System preferences > Sharing > Internet Sharing > RNDIS/Ethernet Gadget"),this.h()},l(e){m=s(e,"H1",{});var t=f(m);de=p(t,"Gadget mode on raspberry pi"),t.forEach(l),B=d(e),C=s(e,"P",{});var Ue=f(C);ue=p(Ue,"Gadget mode enables a raspberry pi to be connected and controlled by a computer with only a usb cable"),Ue.forEach(l),J=d(e),S=s(e,"P",{});var je=f(S);ce=p(je,"Flash raspberry pi os(the full or lite version) on an SD card and modify the following in the boot folder:"),je.forEach(l),K=d(e),c=s(e,"UL",{});var T=f(c);_=s(T,"LI",{});var Y=f(_);_e=p(Y,"in "),F=s(Y,"CODE",{});var ze=f(F);me=p(ze,"config.txt"),ze.forEach(l),we=p(Y," add "),A=s(Y,"CODE",{});var Be=f(A);ve=p(Be,"dtoverlay=dwc2"),Be.forEach(l),Ee=p(Y," at the end of the file"),Y.forEach(l),be=d(T),u=s(T,"LI",{});var w=f(u);ye=p(w,"in "),W=s(w,"CODE",{});var Je=f(W);Pe=p(Je,"cmdline.txt"),Je.forEach(l),Ce=p(w," add "),q=s(w,"CODE",{});var Ke=f(q);Se=p(Ke,"modules-load=dwc2,g_ether"),Ke.forEach(l),he=p(w," after "),U=s(w,"CODE",{});var Qe=f(U);De=p(Qe,"rootwait"),Qe.forEach(l),Ie=p(w," word"),w.forEach(l),xe=d(T),j=s(T,"LI",{});var Ve=f(j);ke=p(Ve,"create a file name ssh (without extension)"),Ve.forEach(l),T.forEach(l),Q=d(e),h=s(e,"P",{});var Xe=f(h);Ge=p(Xe,"You should be able to connect to the pi now:"),Xe.forEach(l),V=d(e),v=s(e,"PRE",{class:!0});var _l=f(v);_l.forEach(l),X=d(e),D=s(e,"H3",{});var Ze=f(D);Le=p(Ze,"Debugging wifi connectivity"),Ze.forEach(l),Z=d(e),I=s(e,"P",{});var $e=f(I);Oe=p($e,"Command to see the network interfaces"),$e.forEach(l),$=d(e),E=s(e,"PRE",{class:!0});var ml=f(E);ml.forEach(l),g=d(e),x=s(e,"P",{});var ge=f(x);He=p(ge,"Command to see the wireless interfaces"),ge.forEach(l),ee=d(e),b=s(e,"PRE",{class:!0});var wl=f(b);wl.forEach(l),le=d(e),k=s(e,"P",{});var el=f(k);Me=p(el,"Command to scan wireless networks"),el.forEach(l),te=d(e),y=s(e,"PRE",{class:!0});var vl=f(y);vl.forEach(l),oe=d(e),G=s(e,"P",{});var ll=f(G);Re=p(ll,"Commands to stop and start wpa_supplicant manually"),ll.forEach(l),ae=d(e),P=s(e,"PRE",{class:!0});var El=f(P);El.forEach(l),ie=d(e),L=s(e,"H3",{});var tl=f(L);Ne=p(tl,"Internet via usb cable"),tl.forEach(l),se=d(e),O=s(e,"P",{});var ol=f(O);Te=p(ol,"You can also give internet to the pi with the usb connection:"),ol.forEach(l),fe=d(e),H=s(e,"P",{});var al=f(H);Ye=p(al,"On Windows:"),al.forEach(l),re=d(e),M=s(e,"P",{});var il=f(M);Fe=p(il,"Control Panel > Network and Internet > Network and Sharing Center"),il.forEach(l),pe=d(e),R=s(e,"P",{});var sl=f(R);Ae=p(sl,"On Mac:"),sl.forEach(l),ne=d(e),N=s(e,"P",{});var fl=f(N);We=p(fl,"Apple menu > System preferences > Sharing > Internet Sharing > RNDIS/Ethernet Gadget"),fl.forEach(l),this.h()},h(){z(v,"class","language-undefined"),z(E,"class","language-undefined"),z(b,"class","language-undefined"),z(y,"class","language-undefined"),z(P,"class","language-undefined")},m(e,t){o(e,m,t),a(m,de),o(e,B,t),o(e,C,t),a(C,ue),o(e,J,t),o(e,S,t),a(S,ce),o(e,K,t),o(e,c,t),a(c,_),a(_,_e),a(_,F),a(F,me),a(_,we),a(_,A),a(A,ve),a(_,Ee),a(c,be),a(c,u),a(u,ye),a(u,W),a(W,Pe),a(u,Ce),a(u,q),a(q,Se),a(u,he),a(u,U),a(U,De),a(u,Ie),a(c,xe),a(c,j),a(j,ke),o(e,Q,t),o(e,h,t),a(h,Ge),o(e,V,t),o(e,v,t),v.innerHTML=pl,o(e,X,t),o(e,D,t),a(D,Le),o(e,Z,t),o(e,I,t),a(I,Oe),o(e,$,t),o(e,E,t),E.innerHTML=nl,o(e,g,t),o(e,x,t),a(x,He),o(e,ee,t),o(e,b,t),b.innerHTML=dl,o(e,le,t),o(e,k,t),a(k,Me),o(e,te,t),o(e,y,t),y.innerHTML=ul,o(e,oe,t),o(e,G,t),a(G,Re),o(e,ae,t),o(e,P,t),P.innerHTML=cl,o(e,ie,t),o(e,L,t),a(L,Ne),o(e,se,t),o(e,O,t),a(O,Te),o(e,fe,t),o(e,H,t),a(H,Ye),o(e,re,t),o(e,M,t),a(M,Fe),o(e,pe,t),o(e,R,t),a(R,Ae),o(e,ne,t),o(e,N,t),a(N,We)},p:qe,i:qe,o:qe,d(e){e&&l(m),e&&l(B),e&&l(C),e&&l(J),e&&l(S),e&&l(K),e&&l(c),e&&l(Q),e&&l(h),e&&l(V),e&&l(v),e&&l(X),e&&l(D),e&&l(Z),e&&l(I),e&&l($),e&&l(E),e&&l(g),e&&l(x),e&&l(ee),e&&l(b),e&&l(le),e&&l(k),e&&l(te),e&&l(y),e&&l(oe),e&&l(G),e&&l(ae),e&&l(P),e&&l(ie),e&&l(L),e&&l(se),e&&l(O),e&&l(fe),e&&l(H),e&&l(re),e&&l(M),e&&l(pe),e&&l(R),e&&l(ne),e&&l(N)}}}const hl={title:"Gadget mode on raspberry pi"};class Dl extends bl{constructor(m){super();yl(this,m,null,Cl,Pl,{})}}export{Dl as default,hl as metadata};
