(self.webpackChunkabz_2020=self.webpackChunkabz_2020||[]).push([[340],{340:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return x}});var a=r(7294),n=r(3253),o=r.n(n),l=r(7803),s=r(2283);function i(e,t,r,a,n,o,l){try{var s=e[o](l),i=s.value}catch(e){return void r(e)}s.done?t(i):Promise.resolve(i).then(a,n)}var m=e=>{var[t,r]=(0,a.useState)([]),[n,o]=(0,a.useState)(!0),[l,s]=(0,a.useState)(null);(0,a.useEffect)((()=>{m()}),[]);var m=function(){var t,a=(t=function*(){try{var{data:t}=yield e();if(!t.success)throw Error("The API doesn't return positions");r(t.positions)}catch(e){var a,n;(null===(a=e.response)||void 0===a||null===(n=a.data)||void 0===n?void 0:n.message)?s(e.response.data.message):s(e.message)}finally{o(!1)}},function(){var e=this,r=arguments;return new Promise((function(a,n){var o=t.apply(e,r);function l(e){i(o,a,n,l,s,"next",e)}function s(e){i(o,a,n,l,s,"throw",e)}l(void 0)}))});return function(){return a.apply(this,arguments)}}();return{fetchedPositions:t,loadingPositions:n,errorPositions:l}},c=r(2190),d=e=>{var{fetchedPositions:t,errors:r,register:n}=e,o=t.map((e=>a.createElement("div",{key:e.id,className:"form__radioWrapper"},a.createElement("input",{className:"form__radio",id:"form__radio".concat(e.id),type:"radio",name:"position_id",value:e.id,ref:n({required:"Position is required"})}),a.createElement("label",{className:"form__radioLabel",htmlFor:"form__radio".concat(e.id)},e.name))));return a.createElement(a.Fragment,null,o,r.position_id&&a.createElement("div",{className:"form__error"},r.position_id.message))},u=r.p+"img/close.svg",f=e=>{var{closeModal:t,title:r,text:n,btnText:o}=e;return a.createElement(a.Fragment,null,a.createElement("div",{className:"modal__container"},a.createElement("div",{className:"modal__header"},a.createElement("h3",{className:"modal__title"},r),a.createElement("button",{onClick:t,className:"modal__close"},a.createElement("img",{src:u})))),a.createElement("div",{className:"modal__container"},a.createElement("div",{className:"modal__text"},n)),a.createElement("div",{className:"modal__container"},a.createElement("div",{className:"modal__footer"},a.createElement("button",{onClick:t,className:"modal__btn"},o))))},p=r(3443),h=r(5868);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e,t,r,a,n,o,l){try{var s=e[o](l),i=s.value}catch(e){return void r(e)}s.done?t(i):Promise.resolve(i).then(a,n)}var y=e=>e.replace(/[^+\d]/g,""),x=()=>{var{getUsers:e,getPositions:t,getToken:r,userRegisterRequest:n}=(0,a.useContext)(c.Z),{register:i,handleSubmit:u,setError:_,clearErrors:b,errors:x}=(0,s.cI)(),{errorPositions:N,loadingPositions:w,fetchedPositions:P}=m(t),O=(()=>{var[e,t]=(0,a.useState)(!1),r=()=>t(!1);return{bind:{isOpen:e,onRequestClose:r,onAfterOpen:()=>{var e=window.innerWidth-document.body.offsetWidth+"px";document.body.style.paddingRight=e,document.body.style.overflow="hidden"},onAfterClose:()=>{document.body.style.paddingRight="",document.body.style.overflow="auto"}},closeModal:r,openModal:()=>t(!0)}})(),{choosedFilename:S,clearChoosedFilename:j,chooseFilename:k,submitError:F,clearSubmitError:M,setSubmitError:z,disabledSubmitBtn:C,enableSubmitBtn:R,disableSubmitBtn:q}=(()=>{var[e,t]=(0,a.useState)(null),[r,n]=(0,a.useState)(null),[o,l]=(0,a.useState)(!1);return{choosedFilename:e,clearChoosedFilename:()=>t(null),chooseFilename:e=>t(e),submitError:r,clearSubmitError:()=>n(null),setSubmitError:n,disabledSubmitBtn:o,enableSubmitBtn:()=>l(!1),disableSubmitBtn:()=>l(!0)}})(),L=(0,l.I0)(),B=function(){var t,a=(t=function*(t,a){M(),q();try{var o=yield r();if(!o.data.success)throw Error("The API doesn't return token");yield n(E(E({},t),{},{phone:y(t.phone),token:o.data.token})),O.openModal(),a.target.reset(),j(),L((0,h.uh)(e,6)),R()}catch(e){var l,s,i,m;if((null===(l=e.response)||void 0===l||null===(s=l.data)||void 0===s?void 0:s.message)?z(e.response.data.message):z(e.message),null===(i=e.response)||void 0===i||null===(m=i.data)||void 0===m?void 0:m.fails)for(var c in e.response.data.fails)_(c,{type:"apiError",message:e.response.data.fails[c][0]});else O.openModal()}finally{R()}},function(){var e=this,r=arguments;return new Promise((function(a,n){var o=t.apply(e,r);function l(e){g(o,a,n,l,s,"next",e)}function s(e){g(o,a,n,l,s,"throw",e)}l(void 0)}))});return function(e,t){return a.apply(this,arguments)}}(),U=(e,t)=>{if(b(t),e){if(k(e.name),e.size>5242880){var r="File size must not exceed 5MB";return _(t,{type:"size",message:r}),r}if("image/jpeg"!==e.type){var a="File should be jpg/jpeg image";return _(t,{type:"extention",message:a}),a}var n=window.URL||window.webkitURL,o=new Image;return o.src=n.createObjectURL(e),o.onload=function(){if(this.width<70||this.height<70){n.revokeObjectURL(this.src);var e="File should be with resolution at least 70x70px!";return _(t,{type:"resolution",message:e}),e}},!0}j()},X=w||N?null:a.createElement(d,{fetchedPositions:P,errors:x,register:i});return a.createElement("section",{className:"form"},a.createElement("div",{className:"container-fluid"},a.createElement("div",{className:"row",id:"form"},a.createElement("div",{className:"col-md-8 offset-md-2"},a.createElement("h1",{className:"form__title"},"Register to get a work"))),a.createElement("div",{className:"row"},a.createElement("div",{className:"col-md-6 offset-md-3"},a.createElement("p",{className:"form__subtitle"},"Attention! After successful registration and alert, update the list of users in the block from the top"))),a.createElement("div",{className:"row"},a.createElement("div",{className:"col-md-6 offset-md-3 col-sm-12 col-12"},a.createElement("form",{className:"form__form",onSubmit:u(B),action:"#",noValidate:!0},a.createElement("div",{className:"form__field"},a.createElement("label",{htmlFor:"form__name"},"Name"),a.createElement("input",{className:x.name?"form__name--error":"form__name",id:"form__name",name:"name",placeholder:"Your name",ref:i({required:"Name is required",maxLength:{value:60,message:"Max length is 60 characters"},minLength:{value:2,message:"Min length is 2 characters"}})}),x.name&&a.createElement("div",{className:"form__error"},x.name.message)),a.createElement("div",{className:"form__field"},a.createElement("label",{htmlFor:"form__email"},"Email"),a.createElement("input",{className:x.email?"form__email--error":"form__email",id:"form__email",placeholder:"Your email",name:"email",type:"email",ref:i({required:"Email is required",maxLength:{value:100,message:"Max length is 100 characters"},minLength:{value:2,message:"Min length is 2 characters"},pattern:{value:/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,message:"Email address must be according to RFC2822"}})}),x.email&&a.createElement("div",{className:"form__error"},x.email.message)),a.createElement("div",{className:"form__field"},a.createElement("label",{htmlFor:"form__phone"},"Phone number"),a.createElement("input",{className:x.phone?"form__phone--error":"form__phone",id:"form__phone",name:"phone",ref:i({required:"Phone is required",validate:{checkNumber:e=>/^[\+]{0,1}380([0-9]{9})$/.test(y(e))||"Phone number should start with code of Ukraine +380"},maxLength:{value:18,message:"Max length is 18 characters"},minLength:{value:12,message:"Min length is 12 characters"}}),placeholder:"+380 XX XXX XX XX",type:"phone"}),x.phone&&a.createElement("div",{className:"form__error"},x.phone.message)),a.createElement("p",{className:"form__radioTitle"},"Select your position"),w?a.createElement(p.Z,null):null,N?a.createElement("div",{className:"form__error"},N):null,X,a.createElement("p",{className:"form__uploadTitle"},"Photo"),a.createElement("div",{className:"form__uploadWrapper"},a.createElement("label",{className:x.photo?"form__labelUpload--error":"form__labelUpload",htmlFor:"form__upload"},a.createElement("input",{className:"form__upload",id:"form__upload",type:"file",name:"photo",onChange:e=>U(e.target.files[0],e.target.name),ref:i({required:"File is required",validate:e=>U(e[0],"photo")})}),a.createElement("div",{className:"form__uploadPlaceholder"},S||"Upload your photo"),a.createElement("div",{className:"form__uploadButtonWrapper"},a.createElement("span",null,"Browse")))),x.photo&&a.createElement("div",{className:"form__error"},x.photo.message),a.createElement("input",{className:"button form__submit",value:"Sing up now",type:"submit",disabled:N||w||C}))))),a.createElement(o(),v({overlayClassName:"ReactModal__Overlay",className:"ReactModal__Content"},O.bind),a.createElement(f,{closeModal:O.closeModal,title:F?"Error":"Congratulations",text:F||"You have successfully passed the registration",btnText:F?"Ok":"Great"})))}},3443:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var a=r(7294),n=()=>a.createElement("div",{className:"spinner"},a.createElement("div",null),a.createElement("div",null),a.createElement("div",null),a.createElement("div",null),a.createElement("div",null),a.createElement("div",null),a.createElement("div",null),a.createElement("div",null),a.createElement("div",null),a.createElement("div",null),a.createElement("div",null),a.createElement("div",null))}}]);