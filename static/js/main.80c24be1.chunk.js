(this["webpackJsonpnatella-portfolio"]=this["webpackJsonpnatella-portfolio"]||[]).push([[0],[,,,function(e,t,i){e.exports={textWidth:"hero_textWidth__m3r7I",backgroundPic:"hero_backgroundPic__HL2ki",margin:"hero_margin__1clXg",title:"hero_title__10znN",block:"hero_block__1Pcmu",block__title:"hero_block__title__2cLJL",block__text:"hero_block__text__3NZqT",block__btn:"hero_block__btn__39uRe"}},function(e,t,i){e.exports={list:"projects_list__1lPI3",item:"projects_item__1fWaB",background:"projects_background__2PpfV",sectionTitle:"projects_sectionTitle__905JL",title:"projects_title__1PPOa",subtitle:"projects_subtitle__1KYqk"}},,function(e,t,i){e.exports={tag:"promo_tag__1OAZa",title:"promo_title__1m6TY",subtitle:"promo_subtitle__2G8n2",link:"promo_link__1pjtd"}},,function(e,t,i){e.exports={title:"contacts_title__1-xWZ",subtitle:"contacts_subtitle__2nfuh",form:"contacts_form__1vAqc"}},,function(e,t,i){e.exports={header__zIndex:"header_header__zIndex__aKlwb",glyphiconMenuHamburger:"header_glyphiconMenuHamburger__1iJWC",visible:"header_visible__3BYXc",class1:"header_class1__8C_un",class2:"header_class2__ohFus"}},function(e,t,i){e.exports={item:"listTechnologies_item__1hY6I",tooltip:"listTechnologies_tooltip__bhtkX"}},function(e,t,i){e.exports={text:"promoQuote_text__1TTha",title:"promoQuote_title__2lUhz"}},,function(e,t,i){e.exports={visible:"navBar_visible__oyVGT",active:"navBar_active__3R0SX"}},function(e,t,i){e.exports={direct:"contects_direct__-SHVH"}},function(e,t,i){e.exports={visible:"navBarMenu_visible__2vLsd",active:"navBarMenu_active__3txgu"}},,,,,,,function(e,t,i){},,function(e,t,i){"use strict";i.r(t);var s=i(1),a=i.n(s),n=i(13),c=i.n(n),l=(i(21),i(22),i(23),function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,26)).then((function(t){var i=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,c=t.getTTFB;i(e),s(e),a(e),n(e),c(e)}))}),r=i(2),o=i(14),d=i.n(o),j=i(0),b=function(e){var t=e.color;return Object(j.jsx)("nav",{className:"w-75 navbar justify-content-end "+d.a.visible,children:Object(j.jsxs)("ul",{className:"nav",style:{color:"".concat(t)},children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-link ",style:{color:"inherit",cursor:"pointer"},"aria-current":"page",href:"#portfolio",children:"Projects"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-link ",style:{color:"inherit",cursor:"pointer"},"aria-current":"page",href:"#feedback",children:"Feedback"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-link ","aria-current":"page",style:{color:"inherit",cursor:"pointer"},href:"#id-promo",children:"Contacts"})})]})})},u=i(10),m=i.n(u),h=function(e){var t=e.color,i=e.isActive,s=e.onHandleClick;return Object(j.jsx)("div",{className:"navbar position-absolute w-100 h-10 "+m.a.header__zIndex,children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"nav-link p-0","aria-current":"page",children:Object(j.jsx)("h4",{style:{color:"#497557"},children:"Natella"})}),Object(j.jsx)("button",{onClick:function(){return s()},className:"btn "+m.a.visible,style:{color:"".concat(t),fontSize:"24px"},children:i?Object(j.jsx)("i",{className:"bi bi-toggle-on"}):Object(j.jsx)("i",{className:"bi bi-toggle-off"})}),Object(j.jsx)(b,{color:"rgb(73, 117, 87, 0.9)"})]})})},x=i(11),p=i.n(x),v=function(){var e=[{img:"./assets/javascript.svg",desc:"Javascript",id:2},{img:"./assets/react.svg",desc:"React JS",id:6},{img:"./assets/nodejs.svg",desc:"Node JS",id:4},{img:"./assets/mobx.svg",desc:"MobX",id:7},{img:"./assets/redux.svg",desc:"Redux",id:5},{img:"./assets/mongodb.svg",desc:"MongoDb",id:3},{img:"./assets/bootstrap.svg",desc:"Bootstrap",id:1}];return Object(j.jsx)("div",{style:{width:"100%"},className:"d-flex align-items-center",children:Object(j.jsx)("div",{className:"container d-flex align-items-center w-100 py-4",children:Object(j.jsx)("ul",{className:"d-flex justify-content-between align-items-center w-100 m-0",children:null===e||void 0===e?void 0:e.map((function(e){return Object(j.jsx)("li",{className:p.a.item+" "+p.a.tooltip,"data-tooltip":e.desc,children:Object(j.jsx)("img",{alt:"Pic",src:e.img})},e.id)}))})})})},g=i(7),f=i(5),O=function(e){var t=e.label,i=e.type,a=e.name,n=e.value,c=e.onChange,l=e.error,o=e.placeholder,d=Object(s.useState)(!1),b=Object(r.a)(d,2),u=b[0],m=b[1],h=Object(s.useState)(!1),x=Object(r.a)(h,2),p=x[0],v=x[1];Object(s.useEffect)((function(){v(!1)}),[n]);return Object(j.jsxs)("div",{className:"mb-4",children:[Object(j.jsxs)("label",{htmlFor:a,children:[" ",t]}),Object(j.jsxs)("div",{className:"input-group has-validation",children:[Object(j.jsx)("input",{type:u?"text":i,id:a,placeholder:o,name:a,value:n,onChange:function(e){var t=e.target;c({name:t.name,value:t.value})},onBlur:function(){v(!0)},className:"form-control"+(l&&p?" is-invalid":"")}),"password"===i&&Object(j.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:function(){m((function(e){return!e}))},children:Object(j.jsx)("i",{className:"bi bi-eye"+(u?"-slash":"")})}),p&&l&&Object(j.jsx)("div",{className:"invalid-feedback ",children:l})]})]})};O.defaultProps={type:"text"};var _=O;var k=i(8),y=i.n(k),N=function(e){var t=e.label,i=e.name,a=e.value,n=e.placeholder,c=e.onChange,l=e.error,o=Object(s.useState)(!1),d=Object(r.a)(o,2),b=d[0],u=d[1];Object(s.useEffect)((function(){u(!1)}),[a]);return Object(j.jsxs)("div",{className:"mb-4",children:[Object(j.jsxs)("label",{htmlFor:i,children:[" ",t]}),Object(j.jsxs)("div",{className:"input-group has-validation",children:[Object(j.jsx)("textarea",{id:i,name:i,value:a,placeholder:n,onChange:function(e){var t=e.target;c({name:t.name,value:t.value})},onBlur:function(){u(!0)},className:"form-control"+(l&&b?" is-invalid":"")}),b&&l&&Object(j.jsx)("div",{className:"invalid-feedback ",children:l})]})]})};N.defaultProps={type:"text"};var w=N,C=function(){var e={name:"",email:"",text:""},t=Object(s.useState)(e),i=Object(r.a)(t,2),a=i[0],n=i[1],c=Object(s.useState)({}),l=Object(r.a)(c,2),o=l[0],d=l[1],b=function(e){n((function(t){return Object(f.a)(Object(f.a)({},t),{},Object(g.a)({},e.name,e.value))}))},u={name:{isRequired:{message:"Please enter your name. This field is required."},min:{message:"Name must have a minimum of 3 characters",value:3}},email:{isRequired:{message:"Please enter your email address in the email field. This field is required."},isEmail:{message:"The email provided was incorrect, please enter a valid email address."}},text:{isRequired:{message:"Please enter your message. This field is required."},min:{message:"Name must have a minimum of 1 characters",value:1}}};Object(s.useEffect)((function(){m()}),[a]);var m=function(){var e=function(e,t){var i={};function s(e,t,i){var s;switch(e){case"isRequired":s="boolean"===typeof t?!t:""===t.trim();break;case"isEmail":s=!/^\S+@\S+\.\S+$/g.test(t);break;case"isCapitalSymbol":s=!/[A-Z]+/g.test(t);break;case"isContainDigit":s=!/\d+/g.test(t);break;case"min":s=t.length<i.value;break;case"max":s=t.length>i.value}if(s)return i.message}for(var a in e)for(var n in t[a]){var c=s(n,e[a],t[a][n]);c&&!i[a]&&(i[a]=c)}return i}(a,u);return d(e),0===Object.keys(e).length},h=0===Object.keys(o).length;return Object(j.jsx)("div",{style:{width:"100%",background:"#F1F3EF"},className:"d-flex align-items-center py-5",id:"feedback",children:Object(j.jsxs)("div",{className:"container d-flex flex-column w-100 align-items-center",children:[Object(j.jsxs)("div",{className:"d-flex flex-column align-items-center justify-content-center w-75",children:[Object(j.jsx)("span",{children:"Stay In Touch"}),Object(j.jsx)("h2",{className:y.a.title,children:"We are growing soon!"}),Object(j.jsx)("h3",{className:y.a.subtitle,children:"Leave your feedback and let's work together to improve this app."})]}),Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),m()&&(console.log(a),n(e),d({}))},className:y.a.form,children:[Object(j.jsx)(_,{label:"Name",type:"text",name:"name",placeholder:"Put your name here...",value:a.name,onChange:b,error:o.name}),Object(j.jsx)(_,{label:"Email",type:"text",name:"email",placeholder:"Put your email address here...",value:a.email,onChange:b,error:o.email}),Object(j.jsx)(w,{label:"Text",type:"text",name:"text",placeholder:"Since there is no mail server configured here, please send the emails to n.zhelonkina@outlook.com",value:a.text,onChange:b,error:o.text}),Object(j.jsx)("button",{type:"submit",disabled:!h,className:"btn mx-auto my-5",style:{background:"#0C4A34",color:"white"},children:"Stay in Touch"})]})]})})},S=i(6),P=i.n(S),T=function(){return Object(j.jsx)("div",{id:"id-promo",style:{width:"100%",backgroundRepeat:"no-repeat",backgroundColor:"#497557",backgroundImage:"url(./assets/tree.svg)"},className:"d-flex align-items-center py-5",children:Object(j.jsx)("div",{className:"container d-flex w-100 justify-content-end align-items-center",children:Object(j.jsxs)("div",{className:"d-flex flex-column justify-content-center w-30 my-5",children:[Object(j.jsx)("span",{className:P.a.tag,children:"For Recruiters"}),Object(j.jsx)("h2",{className:P.a.title,children:"Reach our goals together"}),Object(j.jsxs)("p",{className:P.a.subtitle,children:["Learn more about me on \xa0",Object(j.jsx)("a",{href:"https://www.linkedin.com/in/natalia-zhelonkina/",className:P.a.link,children:"LinkedIn profile"})]})]})})})},I=i(12),F=i.n(I),B=function(){return Object(j.jsx)("div",{className:"d-flex align-items-center py-5 w-100",children:Object(j.jsxs)("div",{className:"position-relative container d-flex w-100 justify-content-center align-items-center",style:{background:"#F8F4EF"},children:[Object(j.jsx)("div",{className:"position-absolute",style:{width:"283px",height:"182px",right:"0",bottom:"0"},children:Object(j.jsx)("img",{src:"./assets/decorate.svg",alt:"img decor",width:"100%",height:"100%"})}),Object(j.jsxs)("div",{className:"d-flex flex-column justify-content-center my-5",style:{width:"65%",margin:"50px 0"},children:[Object(j.jsxs)("h2",{className:F.a.title,children:[Object(j.jsx)("div",{className:"position-absolute",style:{width:"56px",height:"45px",top:"-10px",left:"-30px"},children:Object(j.jsx)("img",{src:"./assets/quotes.svg",alt:"img quotes",width:"100%",height:"100%"})}),"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",Object(j.jsx)("br",{}),"And the only way to do great work is to love what you do."]}),Object(j.jsx)("p",{className:F.a.text,children:"Steve Jobs"})]})]})})},D=i(4),z=i.n(D),q=function(e){var t=e.link,i=e.img,s=e.title,a=e.description;return Object(j.jsx)("li",{style:{position:"relative",marginBottom:"20px"},children:Object(j.jsxs)("a",{rel:"stylesheet",href:t,children:[Object(j.jsx)("div",{className:z.a.item,children:Object(j.jsx)("img",{alt:"Pic",src:i})}),Object(j.jsxs)("div",{className:z.a.background,children:[Object(j.jsx)("span",{className:z.a.title,children:s}),Object(j.jsx)("span",{className:z.a.subtitle,children:a})]})]})})},E=[{id:1,img:"./assets/2.png",link:"http://inwizo.com/",title:"Inwizo",description:"Desktop, mobile"},{id:2,img:"./assets/4.png",link:"https://natellaverde.github.io/excel/dist/",title:"Excel",description:"Desktop"},{id:3,img:"./assets/3.png",link:"https://natella2902.github.io/Chocco/dist/",title:"Chocco",description:"Desktop, mobile"},{id:4,img:"./assets/5.png",link:"https://natella2902.github.io/LionBank/",title:"Lion bank",description:"Desktop"},{id:5,img:"./assets/1.png",link:"https://natellaverde.github.io/battle-movie/",title:"Movie battle",description:"Desktop"},{id:6,img:"./assets/6.png",link:"https://natella2902.github.io/Vue3_Stepper/",title:"Vue stepper",description:"Desktop"}],L={projects:{fetchAll:function(){return new Promise((function(e){window.setTimeout((function(){e(E)}),2e3)}))}}},A=function(){var e=Object(s.useState)(null),t=Object(r.a)(e,2),i=t[0],a=t[1];return Object(s.useEffect)((function(){var e=!1;return L.projects.fetchAll().then((function(t){e||a(t)})),function(){return e=!0}}),[i]),Object(j.jsx)("div",{style:{width:"100%"},className:"d-flex align-items-center py-5",id:"portfolio",children:Object(j.jsxs)("div",{className:"container d-flex flex-column",children:[Object(j.jsx)("h2",{className:z.a.sectionTitle,children:"My projects"}),Object(j.jsx)("ul",{className:"flex-wrap d-flex w-100 "+z.a.list,children:null===i||void 0===i?void 0:i.map((function(e){return Object(j.jsx)(q,Object(f.a)({},e),e.id)}))})]})})},R=i(3),M=i.n(R),H=function(e){var t=e.onHandleClick;return Object(j.jsxs)("div",{onClick:t,className:M.a.backgroundPic,style:{backgroundImage:"url(./assets/img_hero3.jpg)"},children:[Object(j.jsx)("div",{className:"container text-white",children:Object(j.jsxs)("div",{className:M.a.textWidth,children:[Object(j.jsx)("h1",{className:"".concat(M.a.title," ").concat(M.a.margin),children:"My name is Natalia Zhelonkina's and it's my website, showcasing portfolio and the technologies I use"}),Object(j.jsxs)("div",{className:"text-white",children:[Object(j.jsx)("h3",{className:M.a.text,children:"I have a passion for running, yoga, and constantly learning and applying new things in my projects"}),Object(j.jsx)("h3",{className:M.a.text,children:"I would like to contribute to the development of renewable energy sources"})]})]})}),Object(j.jsxs)("div",{className:M.a.block,children:[Object(j.jsx)("div",{className:M.a.block__title,children:"For partners"}),Object(j.jsx)("div",{className:M.a.block__text,children:"If you are interesting in collaboration, please, feel free to send me message"}),Object(j.jsx)("div",{className:M.a.block__btn,children:Object(j.jsx)("a",{style:{color:"inherit",textDecoration:"none"},"aria-current":"page",href:"#id-promo",children:"Go to the contacts"})})]})]})},J=i(15),W=i.n(J),V=function(){return Object(j.jsx)("div",{style:{background:"#0C4A34",color:"white"},children:Object(j.jsxs)("div",{className:"container d-flex justify-content-between align-items-center my-3 "+W.a.direct,children:[Object(j.jsxs)("div",{children:["Email:",Object(j.jsx)("a",{href:"mailto:n.zhelonkina@outlook.com",target:"_blank",rel:"noreferrer",style:{textDecoration:"none",color:"inherit"},children:"  n.zhelonkina@outlook.com"})]}),Object(j.jsx)("div",{children:"Calgary, AB, Canada"})]})})},X=i(16),Y=i.n(X),Z=function(e){var t=e.color;return Object(j.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",right:0,top:0,bottom:0,background:"rgb(12, 74, 52)",height:"50vh",width:"100vw",zIndex:10},children:Object(j.jsx)("nav",{className:"navbar d-flex flex-column-reverse "+Y.a.visible,children:Object(j.jsxs)("ul",{className:"nav d-flex flex-column",style:{color:"".concat(t)},children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-link ",href:"#portfolio",style:{color:"inherit",cursor:"pointer"},children:"Projects"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-link ",href:"#feedback",style:{color:"inherit",cursor:"pointer"},children:"Feedback"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-link ",href:"#id-promo",style:{color:"inherit",cursor:"pointer"},children:"Contacts"})})]})})})},G=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),i=t[0],a=t[1];return Object(j.jsxs)("div",{style:{width:"100vw",height:"100vh",display:"flex",flexDirection:"column",position:"relative"},children:[i?Object(j.jsx)(Z,{color:"white"}):"",Object(j.jsx)(h,{color:"white",isActive:i,onHandleClick:function(){a((function(e){return!e}))}}),Object(j.jsx)(H,{onHandleClick:function(e){a(!1)}}),Object(j.jsx)(v,{}),Object(j.jsx)(A,{}),Object(j.jsx)(B,{}),Object(j.jsx)(C,{}),Object(j.jsx)(T,{}),Object(j.jsx)(V,{})]})};var K=function(){return Object(j.jsx)("div",{style:{position:"relative",display:"flex",flexDirection:"column"},children:Object(j.jsx)(G,{})})};c.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(K,{})}),document.getElementById("root")),l()}],[[25,1,2]]]);
//# sourceMappingURL=main.80c24be1.chunk.js.map