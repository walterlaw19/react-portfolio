(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var s=c(1),i=c.n(s),r=c(4),n=c.n(r),a=(c(10),c(2)),l=c(0);var j=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:"Created by WG 2021 \ud83d\udcbb \ud83d\udcbb \ud83d\udcbb"}),Object(l.jsxs)("section",{id:"contact-me",class:"my-info",children:[Object(l.jsx)("div",{class:"section-h2",children:Object(l.jsx)("h2",{children:"Contact Me"})}),Object(l.jsxs)("div",{class:"contacts",children:[Object(l.jsxs)("div",{children:["My Phone ",Object(l.jsx)("br",{})," 908.463.8083"]}),Object(l.jsxs)("div",{children:["MY E-mail ",Object(l.jsx)("br",{})," walterlaw19@gmail.com"]}),Object(l.jsxs)("div",{children:["Find me on ",Object(l.jsx)("br",{})," ",Object(l.jsx)("a",{href:"https://www.linkedin.com/in/walter-gonzales-6171901a2",target:"blank",children:"LinkedIn"})]}),Object(l.jsxs)("div",{children:["Find me on Instagram: ",Object(l.jsx)("br",{})," Walterlaw19"]})]})]})]})};var o=function(e){return Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#about-me",onClick:function(){e.setPage("About")},children:"About me"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#contact",onClick:function(){e.setPage("Contact")},children:"Contact"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#portfolio",onClick:function(){e.setPage("Portfolio")},children:"Portfolio"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#resume",onClick:function(){e.setPage("Resume")},children:"Resume"})})]})})};var b=function(e){return Object(l.jsxs)("header",{children:[Object(l.jsx)("h1",{children:"Walter A. Gonzales"}),Object(l.jsx)(o,{setPage:e.setPage})]})},d=(c(12),c.p+"static/media/IMG_5587.aa3c420e.jpeg");var h=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("section",{class:"subtitle",children:[Object(l.jsx)("div",{class:"walter-driving",children:Object(l.jsx)("img",{src:d,alt:"walter driving"})}),Object(l.jsx)("div",{class:"cool-subtitle",children:Object(l.jsxs)("h2",{children:['"I have NOT failed, ',Object(l.jsx)("br",{}),"I've just found 10,000 ways ",Object(l.jsx)("br",{}),"That it won't work\" ",Object(l.jsx)("br",{})," ",Object(l.jsx)("br",{}),"Thomas A. Edison"]})})]}),Object(l.jsxs)("section",{id:"about-me",class:"know-me",children:[Object(l.jsx)("div",{class:"section-h2",children:Object(l.jsx)("h2",{children:"About Me"})}),Object(l.jsxs)("p",{children:["I am a Full stack Web App Developer student from Rutgers Bootcamp. ",Object(l.jsx)("br",{}),"I have complete knowledge in HTML, CSS & Javascript. ",Object(l.jsx)("br",{}),"I will also gain skills in Node.js, OOP, Express.js & SQL among others. ",Object(l.jsx)("br",{}),"I have the will to excel at this career as I am a hard-worker and always eager to master new abilities",Object(l.jsx)("br",{}),"Other skills I have acquired during my career include legal assitance and Office Manager",Object(l.jsx)("br",{}),"During my free time, I like coaching soccer to my litle cousin and practice my vocal skills while performing at church ",Object(l.jsx)("br",{}),"and spend quality time with family."]})]})]})},O=c(5);var u=function(){var e=Object(s.useState)({name:"",email:"",message:""}),t=Object(a.a)(e,2),c=t[0],i=t[1],r=Object(s.useState)(""),n=Object(a.a)(r,2),j=n[0],o=n[1],b=c.name,d=c.email,h=c.message,u=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);o(t?"":"Your email is invalid.")}else e.target.value.length?o(""):o("".concat(e.target.name," is required."))};return Object(l.jsxs)("section",{children:[Object(l.jsx)("h1",{"data-testid":"h1tag",children:"Contact me"}),Object(l.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),j||(i(Object(O.a)({},e.target.name,e.target.value)),console.log("Form",c))},children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(l.jsx)("input",{type:"text",name:"name",defaultValue:b,onBlur:u})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(l.jsx)("input",{type:"email",name:"email",defaultValue:d,onBlur:u})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(l.jsx)("textarea",{name:"message",rows:"5",defaultValue:h,onBlur:u})]}),j&&Object(l.jsx)("div",{children:Object(l.jsx)("p",{className:"error-text",children:j})}),Object(l.jsx)("button",{"data-testid":"button",type:"submit",children:"Submit"})]})]})};var x=function(e){return Object(l.jsx)("div",{id:e.id,class:"rows",children:Object(l.jsxs)("a",{href:e.link,target:"blank",title:e.title,children:[" ",e.title]})})};var m=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("section",{id:"work",class:"projects",children:[Object(l.jsx)("div",{class:"section-h2"}),Object(l.jsxs)("div",{class:"website",children:[Object(l.jsxs)("div",{class:"row-websites",children:[Object(l.jsx)(x,{id:"nptp",link:"https://miraj00.github.io/National-Park-Trip-Planner/",title:"National-Park-Trip-Planner"}),Object(l.jsx)(x,{id:"dream-home",link:"https://sheltered-eyrie-12242.herokuapp.com/",title:"Dream Home"})]}),Object(l.jsxs)("div",{class:"row-websites",children:[Object(l.jsx)(x,{id:"budget-tracker",link:"https://shrieking-crypt-06375.herokuapp.com/",title:"budget-tracker"}),Object(l.jsx)(x,{id:"tech-blog",link:"https://walt-first-tech-blog.herokuapp.com/",title:"tech-blog"})]}),Object(l.jsxs)("div",{class:"row-websites",children:[Object(l.jsx)(x,{id:"employee-tracker",link:"https://shrieking-crypt-06375.herokuapp.com/",title:"employee-tracker"}),Object(l.jsx)(x,{id:"weather",link:"https://walterlaw19.github.io/weather-dashboard/",title:"weather"})]})]})]})})};var g=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{id:"title-resume",children:"Resume Rahway, NJ"}),Object(l.jsx)("div",{children:"I am looking for a challenging company where I can put my legal skills to the test each day. Authorized to work in the US for any employer"}),Object(l.jsx)("h3",{children:"Work Experience none"})]})};var p=function(){var e=Object(s.useState)("About"),t=Object(a.a)(e,2),c=t[0],i=t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(b,{setPage:i}),"About"===c?Object(l.jsx)(h,{}):"Contact"===c?Object(l.jsx)(u,{}):"Portfolio"===c?Object(l.jsx)(m,{}):"Resume"===c?Object(l.jsx)(g,{}):void 0,Object(l.jsx)("br",{}),Object(l.jsxs)("footer",{children:[" ",Object(l.jsx)(j,{})]})]})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,14)).then((function(t){var c=t.getCLS,s=t.getFID,i=t.getFCP,r=t.getLCP,n=t.getTTFB;c(e),s(e),i(e),r(e),n(e)}))};n.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root")),f()}},[[13,1,2]]]);
//# sourceMappingURL=main.a824299c.chunk.js.map