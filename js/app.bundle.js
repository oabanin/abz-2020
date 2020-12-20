!function(){var e,t,r={2190:function(e,t,r){"use strict";r.d(t,{v:function(){return o},Z:function(){return a}});var n=r(7294).createContext(),{Provider:o}=n,a=n},5868:function(e,t,r){"use strict";function n(e,t,r,n,o,a,u){try{var l=e[a](u),i=l.value}catch(e){return void r(e)}l.done?t(i):Promise.resolve(i).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,a){var u=e.apply(t,r);function l(e){n(u,o,a,l,i,"next",e)}function i(e){n(u,o,a,l,i,"throw",e)}l(void 0)}))}}r.d(t,{uh:function(){return c},br:function(){return f},YN:function(){return m},zh:function(){return d},NH:function(){return p},KR:function(){return v}});var a=(0,r(7407).oM)({name:"users",initialState:{users:[],nextUrl:null,error:null,isLoading:!1},reducers:{startLoading:e=>{e.isLoading=!0},usersSuccess:(e,t)=>{e.users=t.payload.users,e.nextUrl=t.payload.links.next_url,e.isLoading=!1},usersError:(e,t)=>{e.isLoading=!1,e.error=t.payload},usersAddMore:(e,t)=>{e.isLoading=!1,e.users.push(...t.payload.users),e.nextUrl=t.payload.links.next_url}}}),{startLoading:u,usersSuccess:l,usersAddMore:i,usersError:s}=a.actions,c=(e,t)=>function(){var r=o((function*(r){r(u());try{var{data:n}=yield e(t);r(l(n))}catch(e){r(s(e.message))}}));return function(e){return r.apply(this,arguments)}}(),f=e=>function(){var t=o((function*(t,r){t(u());try{var{data:n}=yield e(r().users.nextUrl);t(i(n))}catch(e){t(s(e.message))}}));return function(e,r){return t.apply(this,arguments)}}(),m=e=>e.users.users,d=e=>e.users.error,p=e=>e.users.isLoading,v=e=>e.users.nextUrl;t.ZP=a.reducer},316:function(e,t,r){"use strict";var n={};r.r(n),r.d(n,{getPositions:function(){return F},getResourse:function(){return B},getToken:function(){return z},getUrl:function(){return j},getUsers:function(){return O},userRegisterRequest:function(){return R}});var o=r(7294),a=r(3935),u=r(7803),l=r(3253),i=r.n(l);class s extends o.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0}}render(){return this.state.hasError?o.createElement("section",{className:"error"},o.createElement("div",{className:"container-fluid"},o.createElement("div",{className:"row"},o.createElement("div",{className:"col-md-8 offset-md-2"},o.createElement("h1",{className:"error__title"},"Error in Component"))),o.createElement("div",{className:"row"},o.createElement("div",{className:"col-md-6 offset-md-3"},o.createElement("p",{className:"error__subtitle"},"Try to reload page"))))):this.props.children}}var c=s,f=r(6261),m=r.p+"img/logo.svg";var d=function(e){var{closeBurger:t=(()=>{})}=e;return o.createElement(o.Fragment,null,o.createElement("a",{className:"header__logo",onClick:()=>{f.NY.scrollToTop(),t()}},o.createElement("img",{src:m,alt:"Logo"})))},p=()=>o.createElement(o.Fragment,null,o.createElement("nav",{className:"menu"},[{href:"about",value:"About me"},{href:"form",value:"Relationships"},{href:"form",value:"Requirements"},{href:"users",value:"Users"},{href:"form",value:"Sign Up"}].map((e=>o.createElement(f.rU,{key:e.value,className:"menu__link",to:e.href,spy:!0,smooth:!0,offset:-70,duration:500},e.value)))));var v=function(e){var{active:t,closeBurger:r}=e;return document.body.style.overflow=t?"hidden":"visible",o.createElement(o.Fragment,null,o.createElement("div",{className:t?"overlay active":"overlay",onClick:r}),o.createElement("div",{className:t?"burger active":"burger"},o.createElement("div",{className:"burger__header"},o.createElement(d,{closeBurger:r})),o.createElement("div",{className:"burger__content"},o.createElement("ul",null,[{href:"about",value:"About me"},{href:"form",value:"Relationships"},{href:"users",value:"Users"},{href:"form",value:"Sign Up"},{href:"form",value:"Terms And Conditions"},{href:"form",value:"How it works"},{href:"form",value:"Partnership"},{href:"form",value:"Help"},{href:"form",value:"Leave testimonial"},{href:"form",value:"Contact us"},{href:"form",value:"Articles"},{href:"form",value:"Our news"},{href:"form",value:"Testimonials"},{href:"form",value:"Licenses"},{href:"form",value:"Privacy Policy"}].map((e=>o.createElement("li",{key:e.value},o.createElement(f.rU,{key:e.value,className:"burger__link",to:e.href,spy:!0,smooth:!0,offset:-70,duration:500,onClick:r},e.value))))))))},h=()=>{var{burgerActive:e,closeBurgerMenu:t,openBurgerMenu:r}=(()=>{var[e,t]=(0,o.useState)(!1);return{burgerActive:e,closeBurgerMenu:()=>t(!1),openBurgerMenu:()=>t(!0)}})();return o.createElement("header",{className:"header"},o.createElement(v,{active:e,closeBurger:t}),o.createElement("div",{className:"container-fluid"},o.createElement("div",{className:"row h-100"},o.createElement("div",{className:"col-lg-2 col-md-2 col-sm-6 col-6 d-flex align-items-center"},o.createElement(d,null)),o.createElement("div",{className:"col-lg-6 offset-lg-4 col-md-8 offset-md-2 col-sm-6 col-6"},o.createElement(p,null),o.createElement("div",{className:"header__burger"},o.createElement("button",{className:"burgerBtn",type:"button",onClick:r}))))))},g=r(1852),y=()=>{var e=(0,g.useMediaQuery)({query:"(max-width: 360px)"}),t="We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck! The photo has to scale in the banner area on the different screens";return o.createElement("section",{className:"banner"},o.createElement("div",{className:"container-fluid"},o.createElement("div",{className:"row"},o.createElement("div",{className:"col-lg-7"},o.createElement("h1",{className:"banner__title"},"Test assignment for Frontend Developer position"),o.createElement("p",{className:"banner__text"},e?t.split(".",1)[0]+".":t),o.createElement(f.rU,{className:"button",to:"form",spy:!0,smooth:!0,offset:-70,duration:500},"Sing up now")))))},b=r(4195),E=r.n(b),N=r(507),x=r.n(N),k=r(4511),w=r.n(k),_=r(2903),P=r.n(_),T=()=>o.createElement(o.Fragment,null,o.createElement(h,null),o.createElement("main",null,o.createElement(y,null),o.createElement(E(),null),o.createElement(c,null,o.createElement(x(),null)),o.createElement(c,null,o.createElement(w(),null))),o.createElement(P(),null)),C=r(2190),S=r(9669),U=r.n(S);function M(e,t,r,n,o,a,u){try{var l=e[a](u),i=l.value}catch(e){return void r(e)}l.done?t(i):Promise.resolve(i).then(n,o)}function A(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function u(e){M(a,n,o,u,l,"next",e)}function l(e){M(a,n,o,u,l,"throw",e)}u(void 0)}))}}var L="https://frontend-test-assignment-api.abz.agency/api/v1",j=function(){var e=A((function*(e){return yield U().get(e)}));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=A((function*(e){return yield U().get("".concat(L).concat(e))}));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=A((function*(e){return yield B("/users?page=1&count=".concat(e))}));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=A((function*(){return yield B("/positions")}));return function(){return e.apply(this,arguments)}}(),z=function(){var e=A((function*(){return yield B("/token")}));return function(){return e.apply(this,arguments)}}(),R=function(){var e=A((function*(e){var{name:t,email:r,phone:n,photo:{0:o},position_id:a,token:u}=e,l=new FormData;return l.append("position_id",a),l.append("name",t),l.append("email",r),l.append("phone",n),l.append("photo",o),yield U().post("".concat(L,"/users"),l,{headers:{"Content-Type":"multipart/form-data",Token:u}})}));return function(t){return e.apply(this,arguments)}}(),q=r(7407),D=r(5868),H=(0,q.xC)({reducer:{users:D.ZP}});r(4829);i().setAppElement("#root"),a.render(o.createElement(o.StrictMode,null,o.createElement(u.zt,{store:H},o.createElement(c,null,o.createElement(C.v,{value:n},o.createElement(T,null))))),document.getElementById("root"))},4195:function(e,t,r){e.exports=function(e){r.e(835).then(function(t){e(r(4835))}.bind(null,r)).catch(r.oe)}},2903:function(e,t,r){e.exports=function(e){r.e(955).then(function(t){e(r(5955))}.bind(null,r)).catch(r.oe)}},4511:function(e,t,r){e.exports=function(e){Promise.all([r.e(283),r.e(340)]).then(function(t){e(r(340))}.bind(null,r)).catch(r.oe)}},507:function(e,t,r){e.exports=function(e){Promise.all([r.e(168),r.e(6)]).then(function(t){e(r(8006))}.bind(null,r)).catch(r.oe)}},4829:function(){}},n={};function o(e){if(n[e])return n[e].exports;var t=n[e]={id:e,loaded:!1,exports:{}};return r[e].call(t.exports,t,t.exports,o),t.loaded=!0,t.exports}o.m=r,o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,r){return o.f[r](e,t),t}),[]))},o.u=function(e){return"js/"+e+"."+{6:"83e8262966a16075715e",168:"34e111d64f71ff54a155",283:"876485313105a226f1a6",340:"1a44792b5a56e3dd9ed6",835:"c1b3fd98fe676cb2269a",955:"51b7cd33c96b0468f73e"}[e]+".js"},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.hmd=function(e){return(e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e={},t="abz-2020:",o.l=function(r,n,a){if(e[r])e[r].push(n);else{var u,l;if(void 0!==a)for(var i=document.getElementsByTagName("script"),s=0;s<i.length;s++){var c=i[s];if(c.getAttribute("src")==r||c.getAttribute("data-webpack")==t+a){u=c;break}}u||(l=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.setAttribute("data-webpack",t+a),u.src=r),e[r]=[n];var f=function(t,n){u.onerror=u.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),l&&document.head.appendChild(u)}},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/abz-2020/",function(){var e={143:0},t=[[316,7]];o.f.j=function(t,r){var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var a=new Promise((function(r,o){n=e[t]=[r,o]}));r.push(n[2]=a);var u=o.p+o.u(t),l=new Error;o.l(u,(function(r){if(o.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+u+")",l.name="ChunkLoadError",l.type=a,l.request=u,n[1](l)}}),"chunk-"+t)}};var r=function(){};function n(){for(var r,n=0;n<t.length;n++){for(var a=t[n],u=!0,l=1;l<a.length;l++){var i=a[l];0!==e[i]&&(u=!1)}u&&(t.splice(n--,1),r=o(o.s=a[0]))}return 0===t.length&&(o.x(),o.x=function(){}),r}o.x=function(){o.x=function(){},u=u.slice();for(var e=0;e<u.length;e++)a(u[e]);return(r=n)()};var a=function(n){for(var a,u,i=n[0],s=n[1],c=n[2],f=n[3],m=0,d=[];m<i.length;m++)u=i[m],o.o(e,u)&&e[u]&&d.push(e[u][0]),e[u]=0;for(a in s)o.o(s,a)&&(o.m[a]=s[a]);for(c&&c(o),l(n);d.length;)d.shift()();return f&&t.push.apply(t,f),r()},u=self.webpackChunkabz_2020=self.webpackChunkabz_2020||[],l=u.push.bind(u);u.push=a}(),o.x()}();