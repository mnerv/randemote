(this["webpackJsonprandom-emote-react"]=this["webpackJsonprandom-emote-react"]||[]).push([[0],[,,,function(e){e.exports=JSON.parse('[{"emote":"(o _ o)"},{"emote":"(>_<)"},{"emote":"(\u3063\u02d8\u0329\u256d\u256e\u02d8\u0329)\u3063"},{"emote":"(\xd7_\xd7)"},{"emote":"(\xd7\ufe4f\xd7)"},{"emote":"(\uff0b_\uff0b)"},{"emote":"(\u30fb\u30fb;)\u309e"},{"emote":"(\u30fb_\u30fb)"}]')},,,function(e){e.exports=JSON.parse('[{"id":"auto-theme","name":"default","source":"/"},{"id":"nord-theme","name":"nord","source":"https://www.nordtheme.com"},{"id":"solarized-dark-theme","name":"solarized dark","source":"https://github.com/altercation/solarized"},{"id":"zenburn-theme","name":"zenburn","source":"https://github.com/jnurmine/Zenburn"},{"id":"gruvbox-theme","name":"gruvbox","source":"https://github.com/morhetz/gruvbox"},{"id":"dracula-theme","name":"dracula","source":"https://github.com/dracula/dracula-theme"},{"id":"eva-theme","name":"eva","source":"https://github.com/kjakapat/eva-theme"}]')},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),r=n(5),s=n.n(r),a=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),o(e),c(e),r(e),s(e)}))},i=(n(11),n(2)),u=n(0),l=Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",className:"bi bi-info",viewBox:"0 0 16 16",children:Object(u.jsx)("path",{d:"m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"})}),m=n(6);n(13);function d(){return localStorage.getItem("theme")||"auto-theme"}var h=function(){var e,t=Object(o.useState)(!0),n=Object(i.a)(t,2),c=n[0],r=n[1],s=Object(o.useRef)(null);function a(e){s.current&&!s.current.contains(e.target)&&(document.body.className=d(),r(!0))}Object(o.useEffect)((function(){document.body.className=d(),e||(e=window.setTimeout((function(){var e=document.querySelector("#root");null===e||void 0===e||e.classList.remove("color-transition"),null===e||void 0===e||e.classList.add("color-transition")}),500))}),[]),Object(o.useEffect)((function(){return document.addEventListener("mousedown",a),function(){document.removeEventListener("mousedown",a)}}),[s]);var h=m.map((function(e,t){return Object(u.jsxs)("div",{className:"theme-element",onMouseEnter:function(){document.body.className=e.id},children:[Object(u.jsx)("p",{onClick:function(){!function(e){localStorage.setItem("theme",e),document.body.className=e}(e.id),r(!0)},children:e.name}),Object(u.jsx)("a",{className:"theme-info",title:"".concat(e.name," source"),rel:"noreferrer",target:"_blank",href:e.source,children:l})]},e.name+t)}));return Object(u.jsxs)("div",{className:"theme-dropdown",children:[Object(u.jsx)("p",{className:"noselect",onClick:function(){r(!1)},children:"theme"}),!c&&Object(u.jsx)("div",{className:"theme-content",ref:s,children:h})]})},b=(n(14),function(e){var t=e.refreshButton;function n(e){"Tab"==e.key&&(e.preventDefault(),t&&t())}return Object(o.useEffect)((function(){return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[]),Object(u.jsxs)("div",{className:"app-name",children:[Object(u.jsx)("div",{className:"left"}),Object(u.jsx)("div",{className:"center",children:Object(u.jsx)("h1",{className:"app-title noselect",onClick:t,children:e.title})}),Object(u.jsx)("div",{className:"right",children:Object(u.jsxs)("div",{className:"options",children:[Object(u.jsx)(h,{}),Object(u.jsx)("span",{className:"option-button noselect",children:"settings"}),Object(u.jsx)("span",{className:"option-button noselect",onMouseDown:t,children:"refresh"})]})})]})}),j=n(3),f=(n(15),0);function v(){var e=Math.floor(Math.random()*j.length);return f==e&&(e=Math.floor(Math.random()*j.length),f=e),j[e]}function p(e,t){var n=Object(o.useRef)(null),c=Object(o.useState)(),r=Object(i.a)(c,2),s=r[0],a=r[1],l=Object(o.useState)("Copy"),m=Object(i.a)(l,2),d=m[0],h=m[1];Object(o.useImperativeHandle)(t,(function(){return{randomEmote:j}}));var b,j=function(){a(v())},f=Object(o.useState)(!0),p=Object(i.a)(f,2),O=p[0],x=p[1],g=Object(u.jsx)("textarea",{id:"emote-copy-area",value:null===s||void 0===s?void 0:s.emote,ref:n,onChange:function(){},rows:24,cols:80});return Object(o.useEffect)((function(){a(v())}),[]),Object(u.jsx)("div",{className:"emote-container",children:Object(u.jsxs)("div",{className:"emote-copy",onClick:function(){b||(x(!1),b=window.setTimeout((function(){var e,t,o;null===(e=n.current)||void 0===e||e.select(),null===(t=n.current)||void 0===t||t.setSelectionRange(0,99999),document.execCommand("copy"),h("Copied!"),null===(o=n.current)||void 0===o||o.blur(),x(!0),clearTimeout(b)}),10))},onMouseOut:function(){return h("Copy")},children:[Object(u.jsx)("span",{id:"emote-display",className:"noselect",children:null===s||void 0===s?void 0:s.emote}),!O&&g,Object(u.jsx)("span",{className:"emote-tooltip noselect",children:d})]})})}var O=Object(o.forwardRef)(p);function x(e){return Object(u.jsxs)("div",{className:"app-footer noselect",children:[Object(u.jsx)("a",{title:"Github repository link",rel:"noreferrer",target:"_blank",href:e.githubLink?e.githubLink:"/",children:"Github Repository"}),Object(u.jsx)("span",{children:"|"}),Object(u.jsx)("a",{title:"Github profile link",rel:"noreferrer",target:"_blank",href:e.link,id:"github-link",children:e.name})]})}function g(){var e=Object(o.useRef)(null);return Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)(b,{title:"./emote",refreshButton:function(){var t;return null===(t=e.current)||void 0===t?void 0:t.randomEmote()}}),Object(u.jsx)(O,{ref:e}),Object(u.jsx)(x,{link:"https://github.com/KTheXIII",name:"2021 \xa9 KTheXIII",githubLink:"https://github.com/KTheXIII/emote-reactjs"})]})}s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),a()}],[[16,1,2]]]);
//# sourceMappingURL=main.27014be6.chunk.js.map