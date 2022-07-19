import{S as bl,i as yl,s as Pl,l as i,u as f,a as n,m as s,p as r,v as p,h as l,c as u,q as z,b as o,H as a,n as We}from"../../chunks/index-d3fa6a4c.js";function Cl(fl){let m,ue,B,C,de,J,S,ce,K,c,_,_e,q,me,we,A,ve,Ee,be,d,ye,F,Pe,Ce,W,Se,he,U,xe,De,Ie,j,ke,Q,h,He,V,v,pl='<code class="language-undefined">ssh pi@raspberrypi.local</code>',X,x,Le,Z,D,Oe,$,E,nl='<code class="language-undefined">ifconfig</code>',g,I,Ge,ee,b,ul='<code class="language-undefined">iwconfig</code>',le,k,Me,te,y,dl='<code class="language-undefined">iwlist wlan0 scan | grep ESSID</code>',oe,H,Re,ae,P,cl=`<code class="language-undefined">sudo killall wpa_supplicant
sudo wpa_supplicant -c/etc/wpa_supplicant/wpa_supplicant.conf -iwlan0</code>`,ie,L,Ne,se,O,Te,re,G,Ye,fe,M,qe,pe,R,Ae,ne,N,Fe;return{c(){m=i("h1"),ue=f("Gadget mode on raspberry pi"),B=n(),C=i("p"),de=f("Gadget mode enables a raspberry pi to be connected and controlled by a computer with only a usb cable"),J=n(),S=i("p"),ce=f("Flash raspberry pi os(the full or lite version) on an SD card and modify the following in the boot folder:"),K=n(),c=i("ul"),_=i("li"),_e=f("in "),q=i("code"),me=f("config.txt"),we=f(" add "),A=i("code"),ve=f("dtoverlay=dwc2"),Ee=f(" at the end of the file"),be=n(),d=i("li"),ye=f("in "),F=i("code"),Pe=f("cmdline.txt"),Ce=f(" add "),W=i("code"),Se=f("modules-load=dwc2,g_ether"),he=f(" after "),U=i("code"),xe=f("rootwait"),De=f(" word"),Ie=n(),j=i("li"),ke=f("create a file name ssh (without extension)"),Q=n(),h=i("p"),He=f("You should be able to connect to the pi now:"),V=n(),v=i("pre"),X=n(),x=i("h3"),Le=f("Debugging wifi connectivity"),Z=n(),D=i("p"),Oe=f("Command to see the network interfaces"),$=n(),E=i("pre"),g=n(),I=i("p"),Ge=f("Command to see the wireless interfaces"),ee=n(),b=i("pre"),le=n(),k=i("p"),Me=f("Command to scan wireless networks"),te=n(),y=i("pre"),oe=n(),H=i("p"),Re=f("Commands to stop and start wpa_supplicant manually"),ae=n(),P=i("pre"),ie=n(),L=i("h3"),Ne=f("Internet via usb cable"),se=n(),O=i("p"),Te=f("You can also give internet to the pi with the usb connection:"),re=n(),G=i("p"),Ye=f("On Windows:"),fe=n(),M=i("p"),qe=f("Control Panel > Network and Internet > Network and Sharing Center"),pe=n(),R=i("p"),Ae=f("On Mac:"),ne=n(),N=i("p"),Fe=f("Apple menu > System preferences > Sharing > Internet Sharing > RNDIS/Ethernet Gadget"),this.h()},l(e){m=s(e,"H1",{});var t=r(m);ue=p(t,"Gadget mode on raspberry pi"),t.forEach(l),B=u(e),C=s(e,"P",{});var Ue=r(C);de=p(Ue,"Gadget mode enables a raspberry pi to be connected and controlled by a computer with only a usb cable"),Ue.forEach(l),J=u(e),S=s(e,"P",{});var je=r(S);ce=p(je,"Flash raspberry pi os(the full or lite version) on an SD card and modify the following in the boot folder:"),je.forEach(l),K=u(e),c=s(e,"UL",{});var T=r(c);_=s(T,"LI",{});var Y=r(_);_e=p(Y,"in "),q=s(Y,"CODE",{});var ze=r(q);me=p(ze,"config.txt"),ze.forEach(l),we=p(Y," add "),A=s(Y,"CODE",{});var Be=r(A);ve=p(Be,"dtoverlay=dwc2"),Be.forEach(l),Ee=p(Y," at the end of the file"),Y.forEach(l),be=u(T),d=s(T,"LI",{});var w=r(d);ye=p(w,"in "),F=s(w,"CODE",{});var Je=r(F);Pe=p(Je,"cmdline.txt"),Je.forEach(l),Ce=p(w," add "),W=s(w,"CODE",{});var Ke=r(W);Se=p(Ke,"modules-load=dwc2,g_ether"),Ke.forEach(l),he=p(w," after "),U=s(w,"CODE",{});var Qe=r(U);xe=p(Qe,"rootwait"),Qe.forEach(l),De=p(w," word"),w.forEach(l),Ie=u(T),j=s(T,"LI",{});var Ve=r(j);ke=p(Ve,"create a file name ssh (without extension)"),Ve.forEach(l),T.forEach(l),Q=u(e),h=s(e,"P",{});var Xe=r(h);He=p(Xe,"You should be able to connect to the pi now:"),Xe.forEach(l),V=u(e),v=s(e,"PRE",{class:!0});var _l=r(v);_l.forEach(l),X=u(e),x=s(e,"H3",{});var Ze=r(x);Le=p(Ze,"Debugging wifi connectivity"),Ze.forEach(l),Z=u(e),D=s(e,"P",{});var $e=r(D);Oe=p($e,"Command to see the network interfaces"),$e.forEach(l),$=u(e),E=s(e,"PRE",{class:!0});var ml=r(E);ml.forEach(l),g=u(e),I=s(e,"P",{});var ge=r(I);Ge=p(ge,"Command to see the wireless interfaces"),ge.forEach(l),ee=u(e),b=s(e,"PRE",{class:!0});var wl=r(b);wl.forEach(l),le=u(e),k=s(e,"P",{});var el=r(k);Me=p(el,"Command to scan wireless networks"),el.forEach(l),te=u(e),y=s(e,"PRE",{class:!0});var vl=r(y);vl.forEach(l),oe=u(e),H=s(e,"P",{});var ll=r(H);Re=p(ll,"Commands to stop and start wpa_supplicant manually"),ll.forEach(l),ae=u(e),P=s(e,"PRE",{class:!0});var El=r(P);El.forEach(l),ie=u(e),L=s(e,"H3",{});var tl=r(L);Ne=p(tl,"Internet via usb cable"),tl.forEach(l),se=u(e),O=s(e,"P",{});var ol=r(O);Te=p(ol,"You can also give internet to the pi with the usb connection:"),ol.forEach(l),re=u(e),G=s(e,"P",{});var al=r(G);Ye=p(al,"On Windows:"),al.forEach(l),fe=u(e),M=s(e,"P",{});var il=r(M);qe=p(il,"Control Panel > Network and Internet > Network and Sharing Center"),il.forEach(l),pe=u(e),R=s(e,"P",{});var sl=r(R);Ae=p(sl,"On Mac:"),sl.forEach(l),ne=u(e),N=s(e,"P",{});var rl=r(N);Fe=p(rl,"Apple menu > System preferences > Sharing > Internet Sharing > RNDIS/Ethernet Gadget"),rl.forEach(l),this.h()},h(){z(v,"class","language-undefined"),z(E,"class","language-undefined"),z(b,"class","language-undefined"),z(y,"class","language-undefined"),z(P,"class","language-undefined")},m(e,t){o(e,m,t),a(m,ue),o(e,B,t),o(e,C,t),a(C,de),o(e,J,t),o(e,S,t),a(S,ce),o(e,K,t),o(e,c,t),a(c,_),a(_,_e),a(_,q),a(q,me),a(_,we),a(_,A),a(A,ve),a(_,Ee),a(c,be),a(c,d),a(d,ye),a(d,F),a(F,Pe),a(d,Ce),a(d,W),a(W,Se),a(d,he),a(d,U),a(U,xe),a(d,De),a(c,Ie),a(c,j),a(j,ke),o(e,Q,t),o(e,h,t),a(h,He),o(e,V,t),o(e,v,t),v.innerHTML=pl,o(e,X,t),o(e,x,t),a(x,Le),o(e,Z,t),o(e,D,t),a(D,Oe),o(e,$,t),o(e,E,t),E.innerHTML=nl,o(e,g,t),o(e,I,t),a(I,Ge),o(e,ee,t),o(e,b,t),b.innerHTML=ul,o(e,le,t),o(e,k,t),a(k,Me),o(e,te,t),o(e,y,t),y.innerHTML=dl,o(e,oe,t),o(e,H,t),a(H,Re),o(e,ae,t),o(e,P,t),P.innerHTML=cl,o(e,ie,t),o(e,L,t),a(L,Ne),o(e,se,t),o(e,O,t),a(O,Te),o(e,re,t),o(e,G,t),a(G,Ye),o(e,fe,t),o(e,M,t),a(M,qe),o(e,pe,t),o(e,R,t),a(R,Ae),o(e,ne,t),o(e,N,t),a(N,Fe)},p:We,i:We,o:We,d(e){e&&l(m),e&&l(B),e&&l(C),e&&l(J),e&&l(S),e&&l(K),e&&l(c),e&&l(Q),e&&l(h),e&&l(V),e&&l(v),e&&l(X),e&&l(x),e&&l(Z),e&&l(D),e&&l($),e&&l(E),e&&l(g),e&&l(I),e&&l(ee),e&&l(b),e&&l(le),e&&l(k),e&&l(te),e&&l(y),e&&l(oe),e&&l(H),e&&l(ae),e&&l(P),e&&l(ie),e&&l(L),e&&l(se),e&&l(O),e&&l(re),e&&l(G),e&&l(fe),e&&l(M),e&&l(pe),e&&l(R),e&&l(ne),e&&l(N)}}}const hl={title:"Gadget mode on raspberry pi",tags:["raspberrypi","linux"]};class xl extends bl{constructor(m){super(),yl(this,m,null,Cl,Pl,{})}}export{xl as default,hl as metadata};
