(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[149],{1250:function(e,n,t){"use strict";t.r(n);var v=t(0),h=t.n(v),a=t(2),l=t.n(a),E=t(243),N=t(50),g=t(244),c=t(5),k=t(242);const y=Object(c.a)({resolved:{},chunkName(){return"fc_link-fc_link"},isReady(e){e=this.resolve(e);return!0===this.resolved[e]&&!!t.m[e]},importAsync:()=>t.e(12).then(t.bind(null,1119)),requireAsync(e){const n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then(e=>(this.resolved[n]=!0,e))},requireSync(e){const n=this.resolve(e);return t(n)},resolve(){return 1119}});function i(e){const[s,m]=Object(v.useState)(null),[n,t]=Object(v.useState)(!1),[a,l]=Object(v.useState)(!1),{currentIssueCover:c,magazineLink:i,mainMenuVisible:o,fastcoworks:r,scaled:u,config:_,topics:p,closeMenu:d}=e,f=(e,n)=>{n=new N.a("Left Menu Item Click","menu"+e,"leftMenu","leftmenu "+e,n+2);n.triggerTrackingEvent("default-click",n.getTrackingObject()),Object(E.b)({eventCategory:"Interaction",eventAction:"Burger Nav Category",eventLabel:e}),d()};return h.a.createElement("div",{className:Object(k.a)("main-menu",o?"main-menu--opened":""),onClick:e=>e.stopPropagation()},h.a.createElement("div",{className:"main-menu__brand "+(u?"main-menu__brand--scaled":"")},h.a.createElement("button",{className:"icon-close",onClick:d,"aria-label":"dropdown close"},h.a.createElement("img",{src:"https://assets.fastcompany.com/image/upload/v1694716383/site/icons/close-menu.svg",alt:"close",width:"21",height:"21"}))),h.a.createElement(g.a,null,({showScreen:n,isLoggedIn:e})=>e?null:h.a.createElement("span",{className:"main-menu__login",onClick:e=>{e.preventDefault(),n({screen:"login",mode:"modal"})}},"Login")),h.a.createElement("ul",{className:"main-menu__collections-content main-menu__collections-content--menu"},p.map((e,n)=>h.a.createElement("li",{key:e.title,className:"main-menu__collection",onClick:()=>f(e.title,n)},h.a.createElement(y,{to:e.url,title:e.title,config:_,externalLink:e.external},e.eyebrow&&h.a.createElement("span",{className:"main-menu__eyebrow"},e.eyebrow),h.a.createElement("span",{className:"main-menu__collection-title"},"Premium"===e.title&&h.a.createElement("span",{className:"premium-icon"}),e.title))))),h.a.createElement("div",{className:"main-menu__dropdown-content"},h.a.createElement("div",{className:n?"main-menu__collections main-menu__collections--active":"main-menu__collections",onClick:()=>{t(!n)}},h.a.createElement("span",{className:"main-menu__collections-title"},"Events"),h.a.createElement("span",{className:"main-menu__collections-caret "+(n?"main-menu__collections-caret--active":"")})),h.a.createElement("ul",{className:`main-menu__collections-content main-menu__collections-content--collections
        ${n?"main-menu__collections-content--active":""} `,style:{height:n?"160px":0}},h.a.createElement("li",{className:"main-menu__collection"},h.a.createElement("a",{href:"https://events.fastcompany.com/grill_2023",target:"_blank",rel:"noopener noreferrer",className:"main-menu__events-link"},"FC Grill at SXSW")),h.a.createElement("li",{className:"main-menu__collection"},h.a.createElement("a",{href:"/section/fast-company-innovation-festival",className:"main-menu__events-link"},"Innovation Festival")),h.a.createElement("li",{className:"main-menu__collection"},h.a.createElement("a",{href:"/innovation-festival-360",className:"main-menu__events-link"},"Innovation Festival 360")))),r.map((e,n)=>{var c,{title:t,sections:a}=e,l="fastco works"===t,i=a.length;return h.a.createElement("div",{key:e.className,className:"main-menu__dropdown-content"},h.a.createElement("div",{className:e.className+" "+(s===e.title?e.className+"--active":""),onClick:(e=>{e===s?m(null):m(e)}).bind(null,e.title)},h.a.createElement("span",{className:"main-menu__collections-title"},e.title),h.a.createElement("span",{className:"main-menu__collections-caret "+(s===e.title?"main-menu__collections-caret--active":"")})),h.a.createElement("ul",{className:`main-menu__collections-content ${l?"main-menu__collections-content--fastcoworks":""} ${s===e.title?"main-menu__collections-content--active":""} `,style:{height:s===e.title?(e=>{let t;var n;if("collections"===e.title){var a=document.querySelector(".main-menu__collections-content--collections").childNodes;let n=0;for(let e=0;e<a.length;e+=1)n+=a[e].offsetHeight;t=n}else if("fastco works"===e.title){var l=document.querySelector(".main-menu__collections-content--fastcoworks").childNodes;let n=0;for(let e=0;e<l.length;e+=1)n+=l[e].offsetHeight;t=n}else n=document.querySelector(".main-menu__collection").offsetHeight,t=n*e.collectionItems;return t})({collectionItems:i,title:t}):0}},(c={content:a,index:n,config:_})?c.content.map(e=>{const{url:n,title:t,deck:a="",external:l=!1}=e;return h.a.createElement("li",{key:t,className:"main-menu__collection",onClick:()=>f(t)},h.a.createElement(y,{to:n,title:t,config:c.config,externalLink:l},h.a.createElement("span",{className:"main-menu__collection-title"},t),0<a.length?h.a.createElement("p",{className:"main-menu__collection-deck"},a):""))}):null))}),h.a.createElement("div",{className:"main-menu__dropdown-content"},h.a.createElement("div",{className:a?"main-menu__collections main-menu__collections--active":"main-menu__collections",onClick:()=>{l(!a)}},h.a.createElement("span",{className:"main-menu__collections-title"},"Partnerships"),h.a.createElement("span",{className:"main-menu__collections-caret "+(a?"main-menu__collections-caret--active":"")})),h.a.createElement("ul",{className:`main-menu__collections-content main-menu__collections-content--collections
        ${a?"main-menu__collections-content--active":""} `,style:{height:a?"206px":0}},h.a.createElement("li",{className:"main-menu__collection"},h.a.createElement("a",{href:"/section/fast-company-executive-board",className:"main-menu__partnerships-link"},"FC Executive Board")),h.a.createElement("li",{className:"main-menu__collection"},h.a.createElement("a",{href:"https://catalog.mindedge.com/fastcompany",target:"_blank",rel:"noopener noreferrer",className:"main-menu__partnerships-link"},"Courses and Learning")),h.a.createElement("li",{className:"main-menu__collection"},h.a.createElement("a",{href:"/fcmicx",className:"main-menu__partnerships-link"},"FCMICX")),h.a.createElement("li",{className:"main-menu__collection"},h.a.createElement("a",{href:"https://fastcompanypress.com/",target:"_blank",rel:"noopener noreferrer",className:"main-menu__partnerships-link"},"FC Press")))),h.a.createElement("a",{href:"https://www.fastcompany.com/90516811/fast-company-mediakit",target:"_blank",rel:"noopener noreferrer",className:"main-menu__advertise"},"Advertise"),h.a.createElement("a",{href:"https://www.fastcompany.com/newsletters",className:"main-menu__newsletters",onClick:()=>{Object(E.b)({eventCategory:"Burger",eventAction:"Nav Item",eventLabel:"Newsletters"})}},"Newsletters"),h.a.createElement("a",{href:"https://fastcompany.zendesk.com/hc/en-us",className:"main-menu__helpcenter"},"Help Center"),h.a.createElement("a",{href:i,className:"main-menu__current-issue"},"Current Issue"),h.a.createElement("div",{className:"main-menu__subscription"},h.a.createElement("a",{href:i,className:"main-menu__mag-cover"},h.a.createElement("img",{alt:"Current magazine issue cover",width:"225",height:"280",src:c,loading:"lazy"}))))}i.defaultProps={mainMenuVisible:!1,scaled:!1},i.propTypes={fastcoworks:l.a.arrayOf(l.a.shape({title:l.a.string.isRequired,url:l.a.string,deck:l.a.string})).isRequired,currentIssueCover:l.a.string.isRequired,magazineLink:l.a.string.isRequired,mainMenuVisible:l.a.bool,closeMenu:l.a.func.isRequired,scaled:l.a.bool,config:l.a.shape({}).isRequired,topics:l.a.arrayOf(l.a.shape({})).isRequired},n.default=i}}]);
//# sourceMappingURL=nav_main_menu-nav_main_menu.5866310ab8dd12b8017a.js.map