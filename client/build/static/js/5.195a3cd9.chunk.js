(this["webpackJsonpreact-shop"]=this["webpackJsonpreact-shop"]||[]).push([[5],{182:function(e,t,a){},183:function(e,t,a){},184:function(e,t,a){},221:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),i=a(25),o=a(51),c=a(166),s=a(39),m=a(18),u=a(49),d=a(8),p=a(9);function h(){var e=Object(d.a)(["\n      letter-spacing: 0.3em;\n    "]);return h=function(){return e},e}function b(){var e=Object(d.a)(["\n  ","\n  background: none;\n  font-size: 1.2rem;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 100%;\n  border: none;\n  border-radius: 0;\n  border-bottom: 1px solid rgb(65, 65, 65);\n  margin: 25px 0;\n  color: rgb(65, 65, 65);\n  &:focus {\n    outline: none;\n  }\n  &:focus ~ "," {\n    ","\n  }\n  &:-webkit-autofill,\n  &:-webkit-autofill:hover,\n  &:-webkit-autofill:focus,\n  &:-webkit-autofill:active {\n    box-shadow: 0 0 0 30px rgb(244, 244, 244) inset !important;\n  }\n"]);return b=function(){return e},e}function v(){var e=Object(d.a)(["\n  color: rgb(73, 73, 73);\n  font-size: 0.9rem;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 0.3s ease all;\n  ","\n"]);return v=function(){return e},e}function E(){var e=Object(d.a)(["\n  position: relative;\n  margin: 40px 0;\n"]);return E=function(){return e},e}function g(){var e=Object(d.a)(["\n  top: -14px;\n  font-size: 12px;\n  color: rgb(167, 167, 167);\n"]);return g=function(){return e},e}var f=Object(p.b)(g()),w=p.c.div(E()),S=p.c.label(v(),(function(e){return e.value&&f})),x=p.c.input(b(),(function(e){return"password"===e.type&&Object(p.b)(h())}),S,f),j=function(e){var t=e.id,a=e.label,n=e.value,l=e.handleChange,i=Object(u.a)(e,["id","label","value","handleChange"]);return r.a.createElement(w,{title:a},r.a.createElement(x,Object.assign({id:t,label:a,value:n,onChange:l},i)),a&&r.a.createElement(S,{htmlFor:t,value:n},a))},O=a(66),k=(a(182),Object(l.b)(null,{EmailSignInStart:m.b,GoogleSignInStart:m.e,FacebookSignInStart:m.c,GithubSignInStart:m.d})((function(e){var t=e.EmailSignInStart,a=e.GoogleSignInStart,l=e.FacebookSignInStart,i=e.GithubSignInStart,o=Object(n.useState)(""),c=Object(s.a)(o,2),m=c[0],u=c[1],d=Object(n.useState)(""),p=Object(s.a)(d,2),h=p[0],b=p[1];return r.a.createElement("div",{className:"SignIn"},r.a.createElement("h2",{className:"Title"},"i already have an account"),r.a.createElement("span",{className:"Subtitle"},"sign in with your email and password"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t({email:m,password:h})}},r.a.createElement(j,{type:"email",name:"email",label:"Email",id:"email",value:m,autoComplete:"new_email",required:!0,handleChange:function(e){return u(e.target.value)}}),r.a.createElement(j,{type:"password",name:"password",label:"Password",id:"password",value:h,autoComplete:"new-password",required:!0,handleChange:function(e){return b(e.target.value)}}),r.a.createElement("div",{className:"Buttons"},r.a.createElement(O.a,{type:"submit"},r.a.createElement("svg",{viewBox:"0 0 24 24"},r.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z"}),r.a.createElement("path",{d:"M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"}),r.a.createElement("path",{d:"M20 12h-13l3 -3m0 6l-3 -3"})),"sign in with email"),r.a.createElement(O.a,{type:"button",onClick:a},r.a.createElement("svg",{viewBox:"0 0 24 24"},r.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z"}),r.a.createElement("path",{d:"M17.788 5.108A9 9 0 1021 12h-8"})),"sign in with google")),r.a.createElement("div",{className:"Buttons"},r.a.createElement(O.a,{type:"button",onClick:l},r.a.createElement("svg",{viewBox:"0 0 24 24"},r.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z"}),r.a.createElement("path",{d:"M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"})),"sign in with fb"),r.a.createElement(O.a,{type:"button",onClick:i},r.a.createElement("svg",{viewBox:"0 0 24 24"},r.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z"}),r.a.createElement("path",{d:"M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21"})),"sign in with github"))))}))),C=a(68),y=a(7),M=(a(183),Object(l.b)(null,{SingUpStart:m.l})((function(e){var t=e.SingUpStart,a=Object(n.useState)(null),l=Object(s.a)(a,2),i=l[0],o=l[1],c=function(e){e.preventDefault(),o(Object(y.a)(Object(y.a)({},i),{},Object(C.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",{className:"SignUp"},r.a.createElement("h2",{className:"Title"},"i do not have an account"),r.a.createElement("span",{className:"Subtitle"},"sign up with your email and password"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(i)}},r.a.createElement(j,{type:"text",id:"name",name:"name",label:"Name",value:i&&i.name||"",required:!0,handleChange:c}),r.a.createElement(j,{type:"email",id:"email",name:"email",label:"Email",value:i&&i.email||"",autoComplete:"new_email",required:!0,handleChange:c}),r.a.createElement(j,{type:"password",id:"password",name:"password",label:"Password",value:i&&i.password||"",autoComplete:"new-password",required:!0,handleChange:c}),r.a.createElement(j,{type:"password",id:"confirmPassword",name:"confirmPassword",label:"Confirm Password",value:i&&i.confirmPassword||"",autoComplete:"new-password",required:!0,handleChange:c}),r.a.createElement("div",{className:"Buttons"},r.a.createElement(O.a,{type:"submit"},r.a.createElement("svg",{viewBox:"0 0 24 24"},r.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z"}),r.a.createElement("circle",{cx:"9",cy:"7",r:"4"}),r.a.createElement("path",{d:"M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"}),r.a.createElement("path",{d:"M16 11h6m-3 -3v6"})),"sign up with email"))))}))),N=a(220),z=(a(184),Object(l.b)(null,{clearAuthError:m.n})((function(e){var t=e.message,a=void 0===t?null:t,l=e.clearAuthError,i=Object(n.useState)(!1),o=Object(s.a)(i,2),c=o[0],m=o[1];Object(n.useEffect)((function(){a&&m(!0),setTimeout((function(){l()}),5e3)}),[a,l]);var u=function(e,t){"clickaway"!==t&&m(!1)};return r.a.createElement(N.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:c,autoHideDuration:5e3,onClose:u,message:r.a.createElement("div",{className:"ErrorMessage"},"".concat(a)),action:r.a.createElement("div",{className:"CloseBtn",onClick:u},r.a.createElement("svg",{viewBox:"0 0 24 24"},r.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z"}),r.a.createElement("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"}),r.a.createElement("path",{d:"M10 10l4 4m0 -4l-4 4"})))})}))),B=Object(i.b)({authErrors:o.a});t.default=Object(l.b)(B)((function(e){var t=e.authErrors;return r.a.createElement(n.Fragment,null,r.a.createElement(c.a,{container:!0,direction:"row",justify:"center",alignItems:"flex-start"},r.a.createElement(c.a,{item:!0,xs:12,sm:12,md:6,lg:6,xl:6},r.a.createElement(k,null)),r.a.createElement(c.a,{item:!0,xs:12,sm:12,md:6,lg:6,xl:6},r.a.createElement(M,null))),t.length>0&&t.map((function(e,t){return r.a.createElement(z,{key:t,message:e})})))}))}}]);
//# sourceMappingURL=5.195a3cd9.chunk.js.map