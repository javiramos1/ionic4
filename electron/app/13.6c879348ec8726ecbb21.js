(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{JLuJ:function(n,l,u){"use strict";u.r(l);var t=u("CcnG"),o=function(){return function(){}}(),e=u("pMnS"),i=u("oBZk"),r=u("ZZ/e"),a=u("Wcq6"),c=u("CB3U"),b=u("NzdG"),s=function(n,l,u,t){return new(u||(u=Promise))(function(o,e){function i(n){try{a(t.next(n))}catch(l){e(l)}}function r(n){try{a(t.throw(n))}catch(l){e(l)}}function a(n){n.done?o(n.value):new u(function(l){l(n.value)}).then(i,r)}a((t=t.apply(n,l||[])).next())})},h=function(n,l){var u,t,o,e,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return e={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function r(e){return function(r){return function(e){if(u)throw new TypeError("Generator is already executing.");for(;i;)try{if(u=1,t&&(o=2&e[0]?t.return:e[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,e[1])).done)return o;switch(t=0,o&&(e=[2&e[0],o.value]),e[0]){case 0:case 1:o=e;break;case 4:return i.label++,{value:e[1],done:!1};case 5:i.label++,t=e[1],e=[0];continue;case 7:e=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===e[0]||2===e[0])){i=0;continue}if(3===e[0]&&(!o||e[1]>o[0]&&e[1]<o[3])){i.label=e[1];break}if(6===e[0]&&i.label<o[1]){i.label=o[1],o=e;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(e);break}o[2]&&i.ops.pop(),i.trys.pop();continue}e=l.call(n,i)}catch(r){e=[6,r],t=0}finally{u=o=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,r])}}},p=function(){function n(n,l,u){this.afAuth=n,this.gplus=l,this.platform=u,this.user=this.afAuth.authState}return n.prototype.googleLogin=function(){this.platform.is("cordova")?(console.log("native"),this.nativeGoogleLogin()):this.webGoogleLogin()},n.prototype.signOut=function(){this.afAuth.auth.signOut()},n.prototype.nativeGoogleLogin=function(){return s(this,void 0,void 0,function(){var n,l;return h(this,function(u){switch(u.label){case 0:return u.trys.push([0,2,,3]),[4,this.gplus.login({webClientId:"534789110521-l6eb7qfk2gmmaicpsg6dsg9r3g793upv.apps.googleusercontent.com",offline:!0,scopes:"profile email"}).catch(function(n){return console.log(n)})];case 1:return n=u.sent(),console.log("gplusUser",n),this.afAuth.auth.signInWithCredential(a.auth.GoogleAuthProvider.credential(n.idToken)),[3,3];case 2:return l=u.sent(),console.log(l),[3,3];case 3:return[2]}})})},n.prototype.webGoogleLogin=function(){return s(this,void 0,void 0,function(){var n,l,u;return h(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),n=new a.auth.GoogleAuthProvider,[4,this.afAuth.auth.signInWithPopup(n)];case 1:return l=t.sent(),console.log(l),this.name=l.user.displayName,[3,3];case 2:return u=t.sent(),console.log(u),[3,3];case 3:return[2]}})})},n}(),f=t.mb({encapsulation:2,styles:[],data:{}});function g(n){return t.Gb(0,[(n()(),t.ob(0,0,null,null,7,"ion-button",[["expand","block"]],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.googleLogin()&&t),t},i.O,i.p)),t.nb(1,49152,null,0,r.sb,[t.h,t.k],{expand:[0,"expand"]},null),(n()(),t.Eb(-1,0,["Google Login"])),(n()(),t.ob(3,0,null,0,4,"ion-button",[],null,null,null,i.O,i.p)),t.nb(4,49152,null,0,r.sb,[t.h,t.k],null,null),(n()(),t.ob(5,0,null,0,0,"p",[],null,null,null,null,null)),(n()(),t.ob(6,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),t.Eb(7,null,["",""]))],function(n,l){n(l,1,0,"block")},function(n,l){n(l,7,0,l.component.name)})}var d=function(){return function(){}}(),v=t.mb({encapsulation:0,styles:[[".welcome-card[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{max-height:35vh;overflow:hidden}"]],data:{}});function m(n){return t.Gb(0,[(n()(),t.ob(0,0,null,null,6,"ion-header",[],null,null,null,i.V,i.w)),t.nb(1,49152,null,0,r.Jb,[t.h,t.k],null,null),(n()(),t.ob(2,0,null,0,4,"ion-toolbar",[],null,null,null,i.M,i.n)),t.nb(3,49152,null,0,r.db,[t.h,t.k],null,null),(n()(),t.ob(4,0,null,0,2,"ion-title",[],null,null,null,i.L,i.m)),t.nb(5,49152,null,0,r.bb,[t.h,t.k],null,null),(n()(),t.Eb(-1,0,[" Tab One "])),(n()(),t.ob(7,0,null,null,23,"ion-content",[],null,null,null,i.U,i.v)),t.nb(8,49152,null,0,r.Cb,[t.h,t.k],null,null),(n()(),t.ob(9,0,null,0,15,"ion-card",[["class","welcome-card"]],null,null,null,i.P,i.q)),t.nb(10,49152,null,0,r.ub,[t.h,t.k],null,null),(n()(),t.ob(11,0,null,0,1,"ion-img",[["src","./assets/shapes.svg"]],null,null,null,i.X,i.y)),t.nb(12,49152,null,0,r.Lb,[t.h,t.k],{src:[0,"src"]},null),(n()(),t.ob(13,0,null,0,7,"ion-card-header",[],null,null,null,i.R,i.s)),t.nb(14,49152,null,0,r.wb,[t.h,t.k],null,null),(n()(),t.ob(15,0,null,0,2,"ion-card-subtitle",[],null,null,null,i.S,i.t)),t.nb(16,49152,null,0,r.xb,[t.h,t.k],null,null),(n()(),t.Eb(-1,0,["Get Started"])),(n()(),t.ob(18,0,null,0,2,"ion-card-title",[],null,null,null,i.T,i.u)),t.nb(19,49152,null,0,r.yb,[t.h,t.k],null,null),(n()(),t.Eb(-1,0,["Welcome to Irish Life Ionic Demo"])),(n()(),t.ob(21,0,null,0,3,"ion-card-content",[],null,null,null,i.Q,i.r)),t.nb(22,49152,null,0,r.vb,[t.h,t.k],null,null),(n()(),t.ob(23,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),t.Eb(-1,null,["This App compiles in 5 different platforms and it is a PWA. Click Tabs to Navigate"])),(n()(),t.ob(25,0,null,0,5,"ion-card",[],null,null,null,i.P,i.q)),t.nb(26,49152,null,0,r.ub,[t.h,t.k],null,null),(n()(),t.ob(27,0,null,0,0,"p",[],null,null,null,null,null)),(n()(),t.ob(28,0,null,0,1,"google-login",[],null,null,null,g,f)),t.nb(29,49152,null,0,p,[c.a,b.a,r.f],null,null),(n()(),t.ob(30,0,null,0,0,"p",[],null,null,null,null,null))],function(n,l){n(l,12,0,"./assets/shapes.svg")},null)}function k(n){return t.Gb(0,[(n()(),t.ob(0,0,null,null,1,"app-tab1",[],null,null,null,m,v)),t.nb(1,49152,null,0,d,[],null,null)],null,null)}var w=t.kb("app-tab1",d,k,{},{},[]),y=u("Ip0R"),G=u("gIcY"),x=function(){return function(){}}(),L=u("ZYCi");u.d(l,"Tab1PageModuleNgFactory",function(){return P});var P=t.lb(o,[],function(n){return t.ub([t.vb(512,t.j,t.ab,[[8,[e.a,w]],[3,t.j],t.x]),t.vb(4608,y.l,y.k,[t.u,[2,y.s]]),t.vb(4608,r.mb,r.mb,[t.z,t.g]),t.vb(4608,r.ob,r.ob,[r.mb,t.j,t.q]),t.vb(4608,r.pb,r.pb,[r.mb,t.j,t.q]),t.vb(4608,G.i,G.i,[]),t.vb(1073742336,y.b,y.b,[]),t.vb(1073742336,r.b,r.b,[]),t.vb(1073742336,G.h,G.h,[]),t.vb(1073742336,G.a,G.a,[]),t.vb(1073742336,x,x,[]),t.vb(1073742336,L.n,L.n,[[2,L.t],[2,L.m]]),t.vb(1073742336,o,o,[]),t.vb(1024,L.k,function(){return[[{path:"",component:d}]]},[])])})}}]);