(this.webpackJsonpsuperchat=this.webpackJsonpsuperchat||[]).push([[0],{23:function(e,t,n){},25:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(4),c=n.n(r),a=n(14),i=n.n(a),s=(n(23),n(13)),u=n.n(s),o=n(15),b=n(10),j=(n(25),n(9)),d=(n(31),n(27),n(17)),p=n(18),h=n(2);j.a.initializeApp({apiKey:"AIzaSyATQJX_MJV2FBYP2-itScdvC38EmWUMq_0",authDomain:"superchat-app-beb6f.firebaseapp.com",projectId:"superchat-app-beb6f",storageBucket:"superchat-app-beb6f.appspot.com",messagingSenderId:"978172304835",appId:"1:978172304835:web:b46e8e9e9d31c5bf6cf176",measurementId:"G-NGXXN1PRZT"});var l=j.a.auth(),f=j.a.firestore();function O(){return Object(h.jsx)("button",{onClick:function(){var e=new j.a.auth.GoogleAuthProvider;l.signInWithPopup(e)},children:"Sign in with Google"})}function m(){return l.currentUser&&Object(h.jsx)("button",{onClick:function(){return l.signOut()},children:"Sign Out"})}function x(){var e=Object(r.useRef)(),t=f.collection("messages"),n=t.orderBy("createdAt").limit(25),c=Object(p.a)(n,{idField:"id"}),a=Object(b.a)(c,1)[0],i=Object(r.useState)(""),s=Object(b.a)(i,2),d=s[0],O=s[1],m=function(){var n=Object(o.a)(u.a.mark((function n(r){var c,a,i;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),c=l.currentUser,a=c.uid,i=c.photoURL,n.next=4,t.add({text:d,createdAt:j.a.firestore.FieldValue.serverTimestamp(),uid:a,photoURL:i});case 4:O(""),e.current.scrollIntoView({behaviour:"smooth"});case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("main",{children:[a&&a.map((function(e){return Object(h.jsx)(g,{message:e},e.id)})),Object(h.jsx)("div",{ref:e})]}),Object(h.jsxs)("form",{onSubmit:m,children:[Object(h.jsx)("input",{value:d,onChange:function(e){return O(e.target.value)}}),Object(h.jsx)("button",{type:"submit",children:"\ud83d\udd4a"})]})]})}function g(e){var t=e.message,n=t.text,r=t.uid,c=t.photoURL,a=r===l.currentUser.uid?"sent":"received";return Object(h.jsxs)("div",{className:"message ".concat(a),children:[Object(h.jsx)("img",{src:c||"https://api.adorable.io/avatars/23/abott@adorable.png"}),Object(h.jsx)("p",{children:n})]})}var v=function(){var e=Object(d.a)(l),t=Object(b.a)(e,1)[0];return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("header",{children:[Object(h.jsx)("h1",{children:"\u269b\ufe0f\ud83d\udd25\ud83d\udcac"}),Object(h.jsx)(m,{})]}),Object(h.jsx)("section",{children:t?Object(h.jsx)(x,{}):Object(h.jsx)(O,{})})]})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root")),I()}},[[30,1,2]]]);
//# sourceMappingURL=main.417fe659.chunk.js.map