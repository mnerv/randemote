(this["webpackJsonprandom-emote-react"]=this["webpackJsonprandom-emote-react"]||[]).push([[0],[,,,function(e){e.exports=JSON.parse('[{"emote":"(o _ o)"},{"emote":"(>_<)"},{"emote":"(\u3063\u02d8\u0329\u256d\u256e\u02d8\u0329)\u3063"},{"emote":"(\xd7_\xd7)"},{"emote":"(\xd7\ufe4f\xd7)"},{"emote":"(\uff0b_\uff0b)"},{"emote":"(\u30fb\u30fb;)\u309e"},{"emote":"(\u30fb_\u30fb)"}]')},,,function(e){e.exports=JSON.parse('[{"id":"auto-theme","name":"default","source":"/"},{"id":"nord-theme","name":"nord","source":"https://github.com/dylanaraps/pywal"},{"id":"solarized-dark-theme","name":"solarized dark","source":"https://github.com/dylanaraps/pywal"},{"id":"zenburn-theme","name":"zenburn","source":"https://github.com/jnurmine/Zenburn"},{"id":"gruvbox-theme","name":"gruvbox","source":"https://github.com/morhetz/gruvbox"},{"id":"dracula-theme","name":"dracula","source":"https://github.com/dracula/dracula-theme"}]')},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),r=n(5),a=n.n(r),i=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),r(e),a(e)}))},s=(n(11),n(2)),u=n(6),l=(n(12),n(0));function m(){return localStorage.getItem("theme")||"auto-theme"}var d=function(){var e=Object(c.useState)(!0),t=Object(s.a)(e,2),n=t[0],o=t[1],r=Object(c.useRef)(null);function a(e){r.current&&!r.current.contains(e.target)&&(document.body.className=m(),o(!0))}Object(c.useEffect)((function(){document.body.className=m()}),[]),Object(c.useEffect)((function(){return document.addEventListener("mousedown",a),function(){document.removeEventListener("mousedown",a)}}),[r]);var i=u.map((function(e){return Object(l.jsx)("p",{onClick:function(){!function(e){localStorage.setItem("theme",e),document.body.className=e}(e.id),o(!0)},onMouseEnter:function(){document.body.className=e.id},children:e.name},e.name)}));return Object(l.jsxs)("div",{className:"theme-dropdown",children:[Object(l.jsx)("p",{className:"noselect",onClick:function(){o(!1)},children:"theme"}),n?"":Object(l.jsx)("div",{className:"theme-content",ref:r,children:i})]})},b=(n(14),function(e){var t=e.titleClicked;return Object(l.jsxs)("div",{className:"app-name",children:[Object(l.jsx)("div",{className:"options"}),Object(l.jsx)("div",{className:"center",children:Object(l.jsx)("h1",{className:"app-title noselect",onClick:t,children:e.title})}),Object(l.jsx)("div",{className:"options",children:Object(l.jsx)(d,{})})]})}),h=n(3),j=(n(15),0);function f(){var e=Math.floor(Math.random()*h.length);return j==e&&(e=e<h.length?e++:e--,j=e),h[e]}function p(e,t){var n=Object(c.useRef)(null),o=Object(c.useState)(f()),r=Object(s.a)(o,2),a=r[0],i=r[1],u=Object(c.useState)("Copy"),m=Object(s.a)(u,2),d=m[0],b=m[1];Object(c.useImperativeHandle)(t,(function(){return{randomEmote:j}}));var h,j=function(){i(f())},p=Object(c.useState)(!0),O=Object(s.a)(p,2),v=O[0],x=O[1],g=Object(l.jsx)("textarea",{id:"emote-copy-area",value:a.emote,ref:n,onChange:function(){},rows:24,cols:80});return Object(l.jsx)("div",{className:"emote-container",children:Object(l.jsxs)("div",{className:"emote-copy",onClick:function(){h||(x(!1),h=window.setTimeout((function(){var e,t,c;null===(e=n.current)||void 0===e||e.select(),null===(t=n.current)||void 0===t||t.setSelectionRange(0,99999),document.execCommand("copy"),b("Copied!"),null===(c=n.current)||void 0===c||c.blur(),x(!0),clearTimeout(h)}),10))},onMouseOut:function(){return b("Copy")},children:[Object(l.jsx)("span",{id:"emote-display",className:"noselect",children:a.emote}),v?"":g,Object(l.jsx)("span",{className:"emote-tooltip noselect",children:d})]})})}var O=Object(c.forwardRef)(p);function v(e){return Object(l.jsxs)("div",{className:"app-footer noselect",children:[Object(l.jsx)("a",{title:"Github repository link",rel:"noreferrer",target:"_blank",href:e.githublink?e.githublink:"/",children:"Github Repository"}),Object(l.jsx)("span",{children:"|"}),Object(l.jsx)("a",{title:"Github profile link",rel:"noreferrer",target:"_blank",href:e.link,id:"github-link",children:e.name})]})}function x(){var e=Object(c.useRef)(null);return Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(b,{title:"./emote",titleClicked:function(){var t;return null===(t=e.current)||void 0===t?void 0:t.randomEmote()}}),Object(l.jsx)(O,{ref:e}),Object(l.jsx)(v,{link:"https://github.com/KTheXIII",name:"2021 \xa9 KTheXIII",githublink:"https://github.com/KTheXIII/emote-reactjs"})]})}a.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root")),i()}],[[16,1,2]]]);
//# sourceMappingURL=main.2477c951.chunk.js.map