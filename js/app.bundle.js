!function(){var e,r,n={2190:function(e,r,n){"use strict";n.d(r,{v:function(){return u},Z:function(){return o}});var t=n(7294).createContext(),{Provider:u}=t,o=t},3443:function(e,r,n){"use strict";n.d(r,{Z:function(){return o}});var t=n(7294),u="E:\\NODE\\abz-2020\\src\\components\\spinner\\spinner.js",o=()=>t.createElement("div",{className:"spinner",__source:{fileName:u,lineNumber:5,columnNumber:5}},t.createElement("div",{__source:{fileName:u,lineNumber:6,columnNumber:7}}),t.createElement("div",{__source:{fileName:u,lineNumber:7,columnNumber:7}}),t.createElement("div",{__source:{fileName:u,lineNumber:8,columnNumber:7}}),t.createElement("div",{__source:{fileName:u,lineNumber:9,columnNumber:7}}),t.createElement("div",{__source:{fileName:u,lineNumber:10,columnNumber:7}}),t.createElement("div",{__source:{fileName:u,lineNumber:11,columnNumber:7}}),t.createElement("div",{__source:{fileName:u,lineNumber:12,columnNumber:7}}),t.createElement("div",{__source:{fileName:u,lineNumber:13,columnNumber:7}}),t.createElement("div",{__source:{fileName:u,lineNumber:14,columnNumber:7}}),t.createElement("div",{__source:{fileName:u,lineNumber:15,columnNumber:7}}),t.createElement("div",{__source:{fileName:u,lineNumber:16,columnNumber:7}}),t.createElement("div",{__source:{fileName:u,lineNumber:17,columnNumber:7}}))},5868:function(e,r,n){"use strict";function t(e,r,n,t,u,o,a){try{var l=e[o](a),m=l.value}catch(e){return void n(e)}l.done?r(m):Promise.resolve(m).then(t,u)}function u(e){return function(){var r=this,n=arguments;return new Promise((function(u,o){var a=e.apply(r,n);function l(e){t(a,u,o,l,m,"next",e)}function m(e){t(a,u,o,l,m,"throw",e)}l(void 0)}))}}n.d(r,{uh:function(){return i},br:function(){return s},YN:function(){return f},zh:function(){return N},NH:function(){return b},KR:function(){return d}});var o=(0,n(7407).oM)({name:"users",initialState:{users:[],nextUrl:null,error:null,isLoading:!1},reducers:{startLoading:e=>{e.isLoading=!0},usersSuccess:(e,r)=>{e.users=r.payload.users,e.nextUrl=r.payload.links.next_url,e.isLoading=!1},usersError:(e,r)=>{e.isLoading=!1,e.error=r.payload},usersAddMore:(e,r)=>{e.isLoading=!1,e.users.push(...r.payload.users),e.nextUrl=r.payload.links.next_url}}}),{startLoading:a,usersSuccess:l,usersAddMore:m,usersError:c}=o.actions,i=(e,r)=>function(){var n=u((function*(n){n(a());try{var{data:t}=yield e(r);n(l(t))}catch(e){n(c(e.message))}}));return function(e){return n.apply(this,arguments)}}(),s=e=>function(){var r=u((function*(r,n){r(a());try{var{data:t}=yield e(n().users.nextUrl);r(m(t))}catch(e){r(c(e.message))}}));return function(e,n){return r.apply(this,arguments)}}(),f=e=>e.users.users,N=e=>e.users.error,b=e=>e.users.isLoading,d=e=>e.users.nextUrl;r.ZP=o.reducer},3611:function(e,r,n){"use strict";var t={};n.r(t),n.d(t,{getPositions:function(){return R},getResourse:function(){return F},getToken:function(){return Z},getUrl:function(){return M},getUsers:function(){return q},userRegisterRequest:function(){return H}});var u=n(7294),o=n(3935),a=n(7803),l="E:\\NODE\\abz-2020\\src\\components\\error-boundary\\error-boundary.js";class m extends u.Component{constructor(){var e,r,n;super(...arguments),n={hasError:!1},(r="state")in(e=this)?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n}static getDerivedStateFromError(e){return console.log(e),{hasError:!0}}componentDidCatch(e,r){console.log("Logging ",e,r)}render(){return this.state.hasError?u.createElement("section",{className:"error",__source:{fileName:l,lineNumber:18,columnNumber:7}},u.createElement("div",{className:"container-fluid",__source:{fileName:l,lineNumber:19,columnNumber:9}},u.createElement("div",{className:"row",__source:{fileName:l,lineNumber:21,columnNumber:11}},u.createElement("div",{className:"col-md-8 offset-md-2",__source:{fileName:l,lineNumber:22,columnNumber:13}},u.createElement("h1",{className:"error__title",__source:{fileName:l,lineNumber:23,columnNumber:15}},"Error in Component"))),u.createElement("div",{className:"row",__source:{fileName:l,lineNumber:27,columnNumber:11}},u.createElement("div",{className:"col-md-6 offset-md-3",__source:{fileName:l,lineNumber:28,columnNumber:13}},u.createElement("p",{className:"error__subtitle",__source:{fileName:l,lineNumber:29,columnNumber:15}},"Try to reload page"))))):this.props.children}}var c=m,i=n(6261),s=n.p+"img/logo.svg",f="E:\\NODE\\abz-2020\\src\\components\\header\\components\\header-logo\\header-logo.js";var N=function(e){var{closeBurger:r=(()=>{})}=e;return u.createElement(u.Fragment,null,u.createElement("a",{className:"header__logo",onClick:()=>{i.NY.scrollToTop(),r()},__source:{fileName:f,lineNumber:9,columnNumber:13}},u.createElement("img",{src:s,alt:"Logo",__source:{fileName:f,lineNumber:16,columnNumber:17}})))},b="E:\\NODE\\abz-2020\\src\\components\\header\\components\\menu\\menu.js",d=()=>u.createElement(u.Fragment,null,u.createElement("nav",{className:"menu",__source:{fileName:b,lineNumber:14,columnNumber:7}},[{href:"about",value:"About me"},{href:"form",value:"Relationships"},{href:"form",value:"Requirements"},{href:"users",value:"Users"},{href:"form",value:"Sign Up"}].map((e=>u.createElement(i.rU,{key:e.value,className:"menu__link",to:e.href,spy:!0,smooth:!0,offset:-70,duration:500,__source:{fileName:b,lineNumber:15,columnNumber:28}},e.value))))),_=(n(8893),"E:\\NODE\\abz-2020\\src\\components\\header\\components\\burger-menu\\burger-menu.js");var p=function(e){var{active:r,closeBurger:n}=e;return document.body.style.overflow=r?"hidden":"visible",u.createElement(u.Fragment,null,u.createElement("div",{className:r?"overlay active":"overlay",onClick:n,__source:{fileName:_,lineNumber:31,columnNumber:7}}),u.createElement("div",{className:r?"burger active":"burger",__source:{fileName:_,lineNumber:32,columnNumber:7}},u.createElement("div",{className:"burger__header",__source:{fileName:_,lineNumber:33,columnNumber:9}},u.createElement(N,{closeBurger:n,__source:{fileName:_,lineNumber:34,columnNumber:11}})),u.createElement("div",{className:"burger__content",__source:{fileName:_,lineNumber:36,columnNumber:9}},u.createElement("ul",{__source:{fileName:_,lineNumber:37,columnNumber:11}},[{href:"about",value:"About me"},{href:"form",value:"Relationships"},{href:"users",value:"Users"},{href:"form",value:"Sign Up"},{href:"form",value:"Terms And Conditions"},{href:"form",value:"How it works"},{href:"form",value:"Partnership"},{href:"form",value:"Help"},{href:"form",value:"Leave testimonial"},{href:"form",value:"Contact us"},{href:"form",value:"Articles"},{href:"form",value:"Our news"},{href:"form",value:"Testimonials"},{href:"form",value:"Licenses"},{href:"form",value:"Privacy Policy"}].map((e=>u.createElement("li",{key:e.value,__source:{fileName:_,lineNumber:39,columnNumber:15}},u.createElement(i.rU,{key:e.value,className:"burger__link",to:e.href,spy:!0,smooth:!0,offset:-70,duration:500,onClick:n,__source:{fileName:_,lineNumber:40,columnNumber:17}},e.value))))))))},v="E:\\NODE\\abz-2020\\src\\components\\header\\header.js",h=()=>{var{burgerActive:e,closeBurgerMenu:r,openBurgerMenu:n}=(()=>{var[e,r]=(0,u.useState)(!1);return{burgerActive:e,closeBurgerMenu:()=>r(!1),openBurgerMenu:()=>r(!0)}})();return u.createElement("header",{className:"header",__source:{fileName:v,lineNumber:10,columnNumber:3}},u.createElement(p,{active:e,closeBurger:r,__source:{fileName:v,lineNumber:11,columnNumber:4}}),u.createElement("div",{className:"container-fluid",__source:{fileName:v,lineNumber:12,columnNumber:4}},u.createElement("div",{className:"row h-100",__source:{fileName:v,lineNumber:13,columnNumber:5}},u.createElement("div",{className:"col-lg-2 col-md-2 col-sm-6 col-6 d-flex align-items-center",__source:{fileName:v,lineNumber:14,columnNumber:6}},u.createElement(N,{__source:{fileName:v,lineNumber:15,columnNumber:7}})),u.createElement("div",{className:"col-lg-6 offset-lg-4 col-md-8 offset-md-2 col-sm-6 col-6",__source:{fileName:v,lineNumber:17,columnNumber:6}},u.createElement(d,{__source:{fileName:v,lineNumber:18,columnNumber:7}}),u.createElement("div",{className:"header__burger",__source:{fileName:v,lineNumber:19,columnNumber:7}},u.createElement("button",{className:"burgerBtn",type:"button",onClick:n,__source:{fileName:v,lineNumber:20,columnNumber:8}}))))))},g=n(1852),E="E:\\NODE\\abz-2020\\src\\components\\banner\\banner.js",y=()=>{var e=(0,g.useMediaQuery)({query:"(max-width: 360px)"}),r="We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck! The photo has to scale in the banner area on the different screens";return u.createElement("section",{className:"banner",__source:{fileName:E,lineNumber:9,columnNumber:3}},u.createElement("div",{className:"container-fluid",__source:{fileName:E,lineNumber:10,columnNumber:4}},u.createElement("div",{className:"row",__source:{fileName:E,lineNumber:11,columnNumber:5}},u.createElement("div",{className:"col-lg-7",__source:{fileName:E,lineNumber:12,columnNumber:6}},u.createElement("h1",{className:"banner__title",__source:{fileName:E,lineNumber:13,columnNumber:7}},"Test assignment for Frontend Developer position"),u.createElement("p",{className:"banner__text",__source:{fileName:E,lineNumber:14,columnNumber:7}},e?r.split(".",1)[0]+".":r),u.createElement(i.rU,{className:"button",to:"form",spy:!0,smooth:!0,offset:-70,duration:500,__source:{fileName:E,lineNumber:17,columnNumber:7}},"Sing up now")))))},w=n.p+"img/man-laptop-v1.svg",k="E:\\NODE\\abz-2020\\src\\components\\about\\about.js",S=()=>u.createElement("section",{className:"about",__source:{fileName:k,lineNumber:7,columnNumber:3}},u.createElement("div",{className:"container-fluid",__source:{fileName:k,lineNumber:8,columnNumber:4}},u.createElement("div",{className:"row",id:"about",__source:{fileName:k,lineNumber:9,columnNumber:5}},u.createElement("div",{className:"col-md-8 offset-md-2",__source:{fileName:k,lineNumber:10,columnNumber:6}},u.createElement("h1",{className:"about__title",__source:{fileName:k,lineNumber:11,columnNumber:7}},"Let's get acquainted"))),u.createElement("div",{className:"row",__source:{fileName:k,lineNumber:14,columnNumber:5}},u.createElement("div",{className:"col-lg-5 col-sm-4",__source:{fileName:k,lineNumber:15,columnNumber:6}},u.createElement("img",{className:"about__logo",src:w,__source:{fileName:k,lineNumber:16,columnNumber:7}})),u.createElement("div",{className:"col-lg-7 col-sm-8",__source:{fileName:k,lineNumber:18,columnNumber:6}},u.createElement("div",{className:"about__text",__source:{fileName:k,lineNumber:19,columnNumber:7}},u.createElement("h2",{className:"about__heading",__source:{fileName:k,lineNumber:20,columnNumber:8}},"I am cool frontend developer"),u.createElement("p",{__source:{fileName:k,lineNumber:21,columnNumber:8}},"We will evaluate how clean your approach to writing CSS and Javascript code is. You can use any CSS and Javascript 3rd party libraries without any restriction."),u.createElement("p",{__source:{fileName:k,lineNumber:22,columnNumber:8}},"If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you will get bonus points. If you use any task runner (gulp/webpack) you will get bonus points as well. Slice service directory page P​SD mockup​ into HTML5/CSS3. "),u.createElement(i.rU,{className:"about__link",to:"form",spy:!0,smooth:!0,offset:-70,duration:500,__source:{fileName:k,lineNumber:24,columnNumber:8}},"Sing up now")))))),x=n(3443),C="E:\\NODE\\abz-2020\\src\\components\\app\\app.js",j=u.lazy((()=>Promise.all([n.e(724),n.e(156)]).then(n.bind(n,340)))),P=u.lazy((()=>Promise.all([n.e(168),n.e(403)]).then(n.bind(n,8006)))),T=u.lazy((()=>n.e(866).then(n.bind(n,5955)))),A=()=>u.createElement(u.Fragment,null,u.createElement(h,{__source:{fileName:C,lineNumber:17,columnNumber:4}}),u.createElement("main",{__source:{fileName:C,lineNumber:18,columnNumber:4}},u.createElement(y,{__source:{fileName:C,lineNumber:19,columnNumber:5}}),u.createElement(S,{__source:{fileName:C,lineNumber:20,columnNumber:5}}),u.createElement(c,{__source:{fileName:C,lineNumber:21,columnNumber:5}},u.createElement(u.Suspense,{fallback:u.createElement(x.Z,{__source:{fileName:C,lineNumber:22,columnNumber:26}}),__source:{fileName:C,lineNumber:22,columnNumber:6}},u.createElement(P,{__source:{fileName:C,lineNumber:23,columnNumber:7}}))),u.createElement(c,{__source:{fileName:C,lineNumber:26,columnNumber:5}},u.createElement(u.Suspense,{fallback:u.createElement(x.Z,{__source:{fileName:C,lineNumber:27,columnNumber:26}}),__source:{fileName:C,lineNumber:27,columnNumber:6}},u.createElement(j,{__source:{fileName:C,lineNumber:28,columnNumber:7}})))),u.createElement(c,{__source:{fileName:C,lineNumber:33,columnNumber:4}},u.createElement(u.Suspense,{fallback:u.createElement(x.Z,{__source:{fileName:C,lineNumber:34,columnNumber:25}}),__source:{fileName:C,lineNumber:34,columnNumber:5}},u.createElement(T,{__source:{fileName:C,lineNumber:35,columnNumber:6}})))),L=n(2190),O=n(9669),z=n.n(O);function D(e,r,n,t,u,o,a){try{var l=e[o](a),m=l.value}catch(e){return void n(e)}l.done?r(m):Promise.resolve(m).then(t,u)}function U(e){return function(){var r=this,n=arguments;return new Promise((function(t,u){var o=e.apply(r,n);function a(e){D(o,t,u,a,l,"next",e)}function l(e){D(o,t,u,a,l,"throw",e)}a(void 0)}))}}var B="https://frontend-test-assignment-api.abz.agency/api/v1",M=function(){var e=U((function*(e){return yield z().get(e)}));return function(r){return e.apply(this,arguments)}}(),F=function(){var e=U((function*(e){return yield z().get("".concat(B).concat(e))}));return function(r){return e.apply(this,arguments)}}(),q=function(){var e=U((function*(e){return yield F("/users?page=1&count=".concat(e))}));return function(r){return e.apply(this,arguments)}}(),R=function(){var e=U((function*(){return yield F("/positions")}));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=U((function*(){return yield F("/token")}));return function(){return e.apply(this,arguments)}}(),H=function(){var e=U((function*(e){var{name:r,email:n,phone:t,photo:{0:u},position_id:o,token:a}=e,l=new FormData;return l.append("position_id",o),l.append("name",r),l.append("email",n),l.append("phone",t),l.append("photo",u),yield z().post("".concat(B,"/users"),l,{headers:{"Content-Type":"multipart/form-data",Token:a}})}));return function(r){return e.apply(this,arguments)}}(),I=n(7407),K=n(5868),W=(0,I.xC)({reducer:{users:K.ZP}}),Y=(n(1406),"E:\\NODE\\abz-2020\\src\\index.js");o.render(u.createElement(u.StrictMode,{__source:{fileName:Y,lineNumber:16,columnNumber:2}},u.createElement(a.zt,{store:W,__source:{fileName:Y,lineNumber:17,columnNumber:3}},u.createElement(c,{__source:{fileName:Y,lineNumber:18,columnNumber:4}},u.createElement(L.v,{value:t,__source:{fileName:Y,lineNumber:19,columnNumber:5}},u.createElement(A,{__source:{fileName:Y,lineNumber:20,columnNumber:6}}))))),document.getElementById("root"))},8893:function(){},1406:function(){}},t={};function u(e){if(t[e])return t[e].exports;var r=t[e]={id:e,loaded:!1,exports:{}};return n[e].call(r.exports,r,r.exports,u),r.loaded=!0,r.exports}u.m=n,u.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(r,{a:r}),r},u.d=function(e,r){for(var n in r)u.o(r,n)&&!u.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},u.f={},u.e=function(e){return Promise.all(Object.keys(u.f).reduce((function(r,n){return u.f[n](e,r),r}),[]))},u.u=function(e){return"js/"+({156:"FormComponent",403:"UsersComponent",866:"FooterComponent"}[e]||e)+"."+{156:"cc58b686",168:"535caaad",403:"967d4034",724:"2fe78088",866:"5133bd8f"}[e]+".chunk.js"},u.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),u.hmd=function(e){return(e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e},u.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},e={},r="abz-2020:",u.l=function(n,t,o){if(e[n])e[n].push(t);else{var a,l;if(void 0!==o)for(var m=document.getElementsByTagName("script"),c=0;c<m.length;c++){var i=m[c];if(i.getAttribute("src")==n||i.getAttribute("data-webpack")==r+o){a=i;break}}a||(l=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,u.nc&&a.setAttribute("nonce",u.nc),a.setAttribute("data-webpack",r+o),a.src=n),e[n]=[t];var s=function(r,t){a.onerror=a.onload=null,clearTimeout(f);var u=e[n];if(delete e[n],a.parentNode&&a.parentNode.removeChild(a),u&&u.forEach((function(e){return e(t)})),r)return r(t)},f=setTimeout(s.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=s.bind(null,a.onerror),a.onload=s.bind(null,a.onload),l&&document.head.appendChild(a)}},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.p="/abz-2020/";var o={143:0};o={143:0};u.f.compat=function(e,r){var n={156:1,403:1,866:1};o[e]?r.push(o[e]):0!==o[e]&&n[e]&&r.push(o[e]=new Promise((function(r,n){for(var t="css/"+e+"."+{156:"54f641c5b46214bc85de",168:"31d6cfe0d16ae931b73c",403:"633519402528dc974a8a",724:"31d6cfe0d16ae931b73c",866:"76d712dc78e7632535bf"}[e]+".css",a=u.p+t,l=document.getElementsByTagName("link"),m=0;m<l.length;m++){var c=(s=l[m]).getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(c===t||c===a))return r()}var i=document.getElementsByTagName("style");for(m=0;m<i.length;m++){var s;if((c=(s=i[m]).getAttribute("data-href"))===t||c===a)return r()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=r,f.onerror=function(r){var t=r&&r.target&&r.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=t,delete o[e],f.parentNode.removeChild(f),n(u)},f.href=a,document.getElementsByTagName("head")[0].appendChild(f)})).then((function(){o[e]=0})));n={156:1,403:1,866:1};o[e]?r.push(o[e]):0!==o[e]&&n[e]&&r.push(o[e]=new Promise((function(r,n){for(var t="css/"+e+"."+{156:"54f641c5b46214bc85de",168:"31d6cfe0d16ae931b73c",403:"633519402528dc974a8a",724:"31d6cfe0d16ae931b73c",866:"76d712dc78e7632535bf"}[e]+".css",a=u.p+t,l=document.getElementsByTagName("link"),m=0;m<l.length;m++){var c=(s=l[m]).getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(c===t||c===a))return r()}var i=document.getElementsByTagName("style");for(m=0;m<i.length;m++){var s;if((c=(s=i[m]).getAttribute("data-href"))===t||c===a)return r()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=r,f.onerror=function(r){var t=r&&r.target&&r.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=t,delete o[e],f.parentNode.removeChild(f),n(u)},f.href=a,document.getElementsByTagName("head")[0].appendChild(f)})).then((function(){o[e]=0})))},function(){var e={143:0},r=[[3611,511]];u.f.j=function(r,n){var t=u.o(e,r)?e[r]:void 0;if(0!==t)if(t)n.push(t[2]);else{var o=new Promise((function(n,u){t=e[r]=[n,u]}));n.push(t[2]=o);var a=u.p+u.u(r),l=new Error;u.l(a,(function(n){if(u.o(e,r)&&(0!==(t=e[r])&&(e[r]=void 0),t)){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;l.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,t[1](l)}}),"chunk-"+r)}};var n=function(){};function t(){for(var n,t=0;t<r.length;t++){for(var o=r[t],a=!0,l=1;l<o.length;l++){var m=o[l];0!==e[m]&&(a=!1)}a&&(r.splice(t--,1),n=u(u.s=o[0]))}return 0===r.length&&(u.x(),u.x=function(){}),n}u.x=function(){u.x=function(){},a=a.slice();for(var e=0;e<a.length;e++)o(a[e]);return(n=t)()};var o=function(t){for(var o,a,m=t[0],c=t[1],i=t[2],s=t[3],f=0,N=[];f<m.length;f++)a=m[f],u.o(e,a)&&e[a]&&N.push(e[a][0]),e[a]=0;for(o in c)u.o(c,o)&&(u.m[o]=c[o]);for(i&&i(u),l(t);N.length;)N.shift()();return s&&r.push.apply(r,s),n()},a=self.webpackChunkabz_2020=self.webpackChunkabz_2020||[],l=a.push.bind(a);a.push=o}(),u.x()}();