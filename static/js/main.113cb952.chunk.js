(this["webpackJsonpmail-tracker"]=this["webpackJsonpmail-tracker"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(3),r=n.n(s),a=(n(9),n.p,n(10),n(4)),j=(n(11),n(0));function l(){alert("https://track.mail.shubh.online/api.php?id="+document.getElementById("myIn").value)}var o=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],i=t[1];return Object(c.useEffect)((function(){fetch("https://track.mail.shubh.online/api/").then((function(e){return console.log(e),e.json()})).then((function(e){console.log(e),i(e)}))}),[]),Object(j.jsxs)("div",{children:[Object(j.jsxs)("form",{className:"myDD",children:[Object(j.jsx)("label",{children:"New Tracking : "}),Object(j.jsx)("input",{id:"myIn",type:"text",name:"name",className:"myDDin"}),Object(j.jsx)("button",{onClick:l,children:"Generate"})]}),Object(j.jsxs)("table",{className:"myTab",children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Id"}),Object(j.jsx)("th",{children:"ip"})]}),n.map((function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsxs)("td",{children:[Object(j.jsx)("span",{className:"idd",children:e.id}),Object(j.jsx)("br",{}),Object(j.jsx)("span",{className:"time",children:e.time})]}),Object(j.jsx)("td",{children:e.ip})]})}))]})]})};var b=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(o,{})})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),s(e),r(e)}))};r.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),h()}],[[13,1,2]]]);
//# sourceMappingURL=main.113cb952.chunk.js.map