(this["webpackJsonphomeday-github-app"]=this["webpackJsonphomeday-github-app"]||[]).push([[0],{31:function(e,t,a){},33:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),s=a.n(n),r=a(24),i=a.n(r),j=(a(31),a(3)),o=a(17),u=a(5),b=a(9),l=a.n(b),d=a(11),h=(a(33),a(18)),O=function(e){var t=e.repo,a=e.user_name;return console.log(t),Object(c.jsx)("a",{href:"/".concat(a,"/").concat(t.name),className:"mb-6 is-block box repo",children:Object(c.jsxs)("article",{className:"is-flex",children:[Object(c.jsx)("figure",{className:"image is-64x64 repo-image",children:t.owner.avatar_url&&Object(c.jsx)("img",{src:t.owner.avatar_url,alt:"Owner Image"})||Object(c.jsx)(h.a,{icon:"user"})}),Object(c.jsxs)("div",{className:"repo-info pl-6",children:[Object(c.jsxs)("div",{className:"repo-info-headline",children:[Object(c.jsx)("h2",{className:"is-size-3",children:t.name}),t.description&&Object(c.jsx)("p",{children:t.description})]}),Object(c.jsxs)("ul",{className:"repo-info-list is-flex",children:[Object(c.jsx)("li",{children:t.language}),Object(c.jsxs)("li",{children:[Object(c.jsx)(h.a,{icon:"star"}),Object(c.jsx)("span",{className:"pl-2",children:t.stargazers_count})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)(h.a,{icon:"code-branch"}),Object(c.jsx)("span",{className:"pl-2",children:t.forks_count})]})]})]})]})})},m=function(e){var t=e.repos,a=e.user_name;return console.log(t),Object(n.useEffect)((function(){}),[]),t.length>0&&t.map((function(e){return Object(c.jsx)(O,{user_name:a,repo:e},e.id)}))},x=function(e){return f("https://api.github.com/users/".concat(e,"/repos"))},f=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,c,n,s,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={data:{},errorMsg:""},e.prev=1,e.next=4,fetch(t);case 4:return c=e.sent,e.next=7,c.json();case 7:if(n=e.sent,200!==c.status){e.next=12;break}a={data:n,errorMsg:"",status:200},e.next=29;break;case 12:s="",r=t.includes("repos")?"Repository":"User",e.t0=c.status,e.next=404===e.t0?17:403===e.t0?19:301===e.t0?21:304===e.t0?23:422===e.t0?25:27;break;case 17:return s="".concat(r," ").concat(n.message),e.abrupt("break",28);case 19:return s="Request ".concat(n.message),e.abrupt("break",28);case 21:case 23:return s="".concat(r," ").concat(n.message),e.abrupt("break",28);case 25:return s="Request ".concat(n.message),e.abrupt("break",28);case 27:s="".concat(n.message);case 28:a={data:{},errorMsg:s,status:c.status};case 29:e.next=35;break;case 31:e.prev=31,e.t1=e.catch(1),a={data:{},errorMsg:e.t1},console.log(e.t1);case 35:return e.abrupt("return",a);case 36:case"end":return e.stop()}}),e,null,[[1,31]])})));return function(t){return e.apply(this,arguments)}}(),p=(a(39),function(){return Object(c.jsx)("div",{className:"loading",children:Object(c.jsx)("div",{className:"loader"})})}),g=(a(40),function(){var e=Object(n.useState)({}),t=Object(j.a)(e,2),a=t[0],s=(t[1],Object(n.useState)(null)),r=Object(j.a)(s,2),i=r[0];r[1];return Object(n.useEffect)((function(){}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"fetch-cta-block has-text-centered",children:Object(c.jsx)("a",{className:"button is-info is-size-3",href:"/search",children:"Fetch a User"})}),Object(c.jsxs)("h4",{className:"is-size-3 has-text-centered mb-6",children:["Top 3 Repos from ",Object(c.jsx)("span",{className:"has-text-weight-medium",children:"homeday-de"})]}),i&&Object(c.jsx)("p",{className:"error-message",children:i})||a.length>0&&Object(c.jsx)(m,{repos:a,user_name:"homeday-de"})||Object(c.jsx)(p,{})]})}),v=a(15),N=a(4),k=function(e){var t=e.isValid,a=e.message;return console.log(t),!t&&Object(c.jsx)("span",{className:"error help is-danger",children:a})||null},y=s.a.createContext(),S=(a(41),function(e){var t=Object(n.useContext)(y),a=t.setNextPath,s=t.setNext,r=e.setUserVal,i=e.userVal,o=e.onSubmit,u=Object(n.useState)({name:!0,email:!0,agree:!0}),b=Object(j.a)(u,2),l=b[0],d=b[1],h=Object(n.useState)(!1),O=Object(j.a)(h,2),m=O[0],x=O[1],f=function(e){var t=e.target.name;!function(e,t){var a=!1;switch(e){case"name":a=""===t;break;case"email":var c=/\S+@\S+\.\S+/;a=!c.test(t)||""===t,console.log(c.test(t));break;case"agree":a=!t}d((function(t){return Object(N.a)(Object(N.a)({},t),{},Object(v.a)({},e,a))})),r((function(a){return Object(N.a)(Object(N.a)({},a),{},Object(v.a)({},e,t))}))}(t,"agree"!==t?e.target.value:e.target.checked)},p=function(){Object.keys(l).every((function(e){return!l[e]}))?s((function(e){return Object(N.a)(Object(N.a)({},e),{},{disabled:!1})})):s((function(e){return Object(N.a)(Object(N.a)({},e),{},{disabled:!0})}))};return Object(n.useEffect)((function(){p()}),[l]),Object(n.useEffect)((function(){""!==i.name&&a("/".concat(i.name))}),[i]),Object(n.useEffect)((function(){p()}),[]),Object(c.jsx)("div",{className:"box form-user",children:Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),x(!0),Object.keys(l).some((function(e){return l[e]}))?console.log("dont send Form"):(o(),console.log("send Form"))},children:[Object(c.jsxs)("div",{className:"field",children:[Object(c.jsx)("label",{className:"label",children:"Username"}),Object(c.jsx)("div",{className:"control",children:Object(c.jsx)("input",{className:"input ".concat(m&&l.name?"is-danger":""," "),type:"text",onChange:f,value:i.name,name:"name"})}),m&&Object(c.jsx)(k,{isValid:!l.name,message:"Please enter a username"})]}),Object(c.jsxs)("div",{className:"field",children:[Object(c.jsx)("label",{className:"label",children:"Email"}),Object(c.jsx)("div",{className:"control",children:Object(c.jsx)("input",{type:"text",className:"input ".concat(m&&l.email?"is-danger":""," "),name:"email",value:i.email,onChange:f})}),m&&Object(c.jsx)(k,{isValid:!l.email,message:"Please enter a valid email"})]}),Object(c.jsxs)("div",{className:"field",children:[Object(c.jsxs)("div",{className:"control agree",children:[Object(c.jsx)("input",{type:"checkbox",onChange:f,checked:i.agree,name:"agree"}),"Agree with terms and service"]}),m&&Object(c.jsx)(k,{isValid:!l.agree,message:"Please agree the terms and service"})]}),Object(c.jsx)("button",{className:"button is-info is-medium has-text-centered",type:"submit",children:"Fetch user"})]})})}),w=function(e){var t=e.history,a=Object(n.useState)({name:"",email:"",agree:!1}),s=Object(j.a)(a,2),r=s[0],i=s[1];return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(S,{userVal:r,setUserVal:i,onSubmit:function(){t.push("/".concat(r.name))}})})},C=function(e){var t=Object(n.useContext)(y),a=t.setNextPath,s=t.setNext,r=e.match,i=r.params.repo_name,o=r.params.user_name,u=Object(n.useState)(null),b=Object(j.a)(u,2),h=b[0],O=b[1],m=Object(n.useState)({}),p=Object(j.a)(m,2),g=p[0],v=p[1],k=function(){var e=Object(d.a)(l.a.mark((function e(){var t,c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r=i,f("https://api.github.com/repos/".concat(o,"/").concat(r));case 2:if(200!==(t=e.sent).status){e.next=11;break}return v(t.data),e.next=7,x(o);case 7:200===(c=e.sent).status?(n=c.data.findIndex((function(e){return e.name===i})),s((function(e){return Object(N.a)(Object(N.a)({},e),{},{disabled:!1})})),a("/".concat(o,"/").concat(c.data[n+1].name))):s((function(e){return Object(N.a)(Object(N.a)({},e),{},{disabled:!0})})),e.next=13;break;case 11:200!==t.status?O(t.errorMsg):v(t.data),s((function(e){return Object(N.a)(Object(N.a)({},e),{},{disabled:!0})}));case 13:case"end":return e.stop()}var r}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){i&&k()}),[i]),Object(c.jsx)("div",{children:h&&Object(c.jsx)("p",{className:"error-message",children:h})||Object(c.jsx)("h3",{children:g.name})})},_=function(e){var t=e.user,a=e.reposCount;return console.log(e),Object.keys(t).length>0&&Object(c.jsxs)("div",{className:"user has-text-centered my-6",children:[Object(c.jsx)("h2",{className:"is-size-3",children:t.name}),Object(c.jsxs)("p",{children:[Object(c.jsx)("em",{children:t.location}),Object(c.jsx)("br",{})]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("strong",{children:"Followers: "}),Object(c.jsx)("span",{children:t.followers})]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("strong",{children:"Repos: "}),Object(c.jsx)("span",{children:a})]})]})},F=function(e){var t=e.match.params.user_name||null,a=Object(n.useContext)(y),s=a.setNext,r=a.setNextPath,i=Object(n.useState)({}),o=Object(j.a)(i,2),u=o[0],b=o[1],h=Object(n.useState)([]),O=Object(j.a)(h,2),g=O[0],v=O[1],k=Object(n.useState)(null),S=Object(j.a)(k,2),w=S[0],C=S[1],F=Object(n.useState)(null),P=Object(j.a)(F,2),E=P[0],M=P[1],V=function(){var e=Object(d.a)(l.a.mark((function e(){var a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("https://api.github.com/users/".concat(t));case 2:if(200===(a=e.sent).status){e.next=8;break}C(a.errorMsg),s((function(e){return Object(N.a)(Object(N.a)({},e),{},{disabled:!0})})),e.next=13;break;case 8:return b(a.data),e.next=11,x(t);case 11:200!==(c=e.sent).status?(M(c.errorMsg),s((function(e){return Object(N.a)(Object(N.a)({},e),{},{disabled:!0})}))):(v(c.data),s((function(e){return Object(N.a)(Object(N.a)({},e),{},{disabled:!1})})));case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){t&&V()}),[t]),Object(n.useEffect)((function(){g.length>0&&r("/".concat(t,"/").concat(g[0].name))}),[g]),Object(c.jsxs)(c.Fragment,{children:[w&&Object(c.jsx)("p",{className:"error-message",children:w})||Object(c.jsx)(_,{user:u,reposCount:g.length}),E&&Object(c.jsx)("p",{className:"error-message",children:E})||0===g.length&&Object(c.jsx)(p,{})||Object(c.jsx)(m,{repos:g,user_name:t})]})},P=function(){return Object(c.jsxs)(u.c,{children:[Object(c.jsx)(u.a,{exact:!0,path:"/",render:function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(g,{history:e.history,match:e.match})})}}),Object(c.jsx)(u.a,{exact:!0,path:"/search/",render:function(e){return Object(c.jsx)(w,{history:e.history,match:e.match})}}),Object(c.jsx)(u.a,{exact:!0,path:"/:user_name",render:function(e){return Object(c.jsx)(F,{history:e.history,match:e.match})}}),Object(c.jsx)(u.a,{exact:!0,path:"/:user_name/:repo_name",render:function(e){return Object(c.jsx)(C,{history:e.history,match:e.match})}})]})},E=(a(44),Object(u.f)((function(e){var t=e.history,a=e.location,s=Object(n.useContext)(y),r=s.next,i=s.nextPath,o=Object(n.useState)(!1),u=Object(j.a)(o,2),b=u[0],l=u[1];return Object(n.useEffect)((function(){"/"!==a.pathname?l(!0):l(!1)}),[a.pathname]),Object(c.jsx)("footer",{className:"footer",children:Object(c.jsxs)("div",{className:"content has-text-centered",children:[b&&Object(c.jsx)("button",{className:"mr-6 button is-danger is-outlined",onClick:function(){return t.goBack()},children:"Prev"}),r&&Object(c.jsx)("button",{className:"ml-6 button is-danger is-outlined",disabled:r.disabled,onClick:function(){return t.push(i)},children:"Next"})]})})}))),M=a.p+"static/media/github.00988566.svg",V=(a(45),function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),a=t[0],s=t[1];return Object(c.jsx)("header",{children:Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("nav",{className:"navbar",role:"navigation","aria-label":"main navigation",children:[Object(c.jsxs)("div",{className:"navbar-brand",children:[Object(c.jsx)("a",{className:"navbar-item",href:"/",children:Object(c.jsx)("img",{src:M,width:"112",alt:"github logo",height:"28"})}),Object(c.jsxs)("a",{onClick:function(){return s((function(e){return!e}))},role:"button",className:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarMenu",children:[Object(c.jsx)("span",{"aria-hidden":"true"}),Object(c.jsx)("span",{"aria-hidden":"true"}),Object(c.jsx)("span",{"aria-hidden":"true"})]})]}),Object(c.jsx)("div",{id:"navbarMenu",className:"navbar-menu ".concat(a?"is-active":""),children:Object(c.jsxs)("div",{className:"navbar-start",children:[Object(c.jsx)("a",{href:"/",className:"navbar-item",children:"Home"}),Object(c.jsx)("a",{href:"/search",className:"navbar-item",children:"Search"})]})})]})})})}),z=(a(46),a(14)),R=a(13);z.b.add(R.b,R.e,R.d,R.a,R.c);var U=function(){var e=Object(n.useState)({visible:!0,disabled:!1}),t=Object(j.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)("/search"),i=Object(j.a)(r,2),u=i[0],b=i[1];return Object(c.jsx)(y.Provider,{value:{next:a,nextPath:u,setNext:s,setNextPath:b},children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(V,{}),Object(c.jsxs)(o.a,{children:[Object(c.jsx)("main",{className:"App-main container",children:Object(c.jsx)(P,{})}),Object(c.jsx)(E,{})]})]})})},I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,48)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(U,{})}),document.getElementById("root")),I()}},[[47,1,2]]]);
//# sourceMappingURL=main.a618a1eb.chunk.js.map