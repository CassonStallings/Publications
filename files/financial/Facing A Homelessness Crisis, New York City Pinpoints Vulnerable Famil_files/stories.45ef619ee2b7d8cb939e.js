(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[36,7,108],{1182:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var s=a(0),n=a.n(s);function o(){const[e,t]=Object(s.useState)(!1);return n.a.createElement("div",{className:"fceb_article_whats_this"},n.a.createElement("div",{className:"fceb_article_whats_this--label",onMouseEnter:()=>{t(!0)},onMouseLeave:()=>{t(!1)},onTouchEnd:()=>{t(!e)}},"What's This?"),e&&n.a.createElement("div",{className:"fceb_article_whats_this--popup"},n.a.createElement("div",{className:"fceb_article_whats_this--pointer"}),n.a.createElement("div",{className:"fceb_article_whats_this--logo"},n.a.createElement("img",{src:"//images.fastcompany.net/image/upload/v1612043655/fc/FCEB-Logo-horiz-Black_l6l83q.svg",alt:"FC Executive Board"})),n.a.createElement("div",{className:"fceb_article_whats_this--text"},"Content labeled as Fast Company Executive Board is produced and managed by the Fast Company Executive Board, a private fee-based organization. The opinions expressed in this content do not necessarily reflect the opinions of ",n.a.createElement("em",null,"Fast Company"),".")))}},473:function(e,t,a){"use strict";a.r(t);var s=a(2),s=a.n(s),n=a(0),o=a.n(n),a=a(40);class i extends n.Component{constructor(e){super(e);var e=this.props["type"],t=Math.floor(1e10*Math.random()),e=this.props.adContainerId||e+"_"+t;this.state={adContainerId:e}}componentDidMount(){window&&window._ash&&window._ash.push({type:"onComponentDidMount",data:{props:this.props,state:this.state}})}shouldComponentUpdate(e){e=e.type;return"adhesive"===e}constructAdClass(e){return"ad-wrapper ad-wrapper--"+e}adLabel(){var e=this.props["type"];return["hero","break","rail","rail_sticky","in_content","footer"].includes(e)?o.a.createElement("div",{className:"ad-wrapper__ad-slug"},"advertisement"):null}render(){var{type:e,page:t=1}=this.props,a=this.state["adContainerId"];let s=(`ad-wrapper--ad-unit-wrap ${this.props.region||""} `+(this.props.hide?"hide":"show")).trim();var n=(`adElement camp-${e} `+(this.props.adClassName||"")).trim();return e.includes("native")&&(s="ad-unit-wrap-native"),o.a.createElement("div",{className:s},this.adLabel(),o.a.createElement("div",{className:this.constructAdClass(e)},o.a.createElement("div",{id:a,className:n,"data-ad_slot_type":e,"data-page":t})))}}i.propTypes={adContainerId:s.a.string,adClassName:s.a.string,location:s.a.object,page:s.a.number,region:s.a.string,type:s.a.string,hide:s.a.bool};t.default=Object(a.b)(e=>({location:e.routing.location}))(i)},476:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return s});var t=a(0),c=a.n(t),t=a(2),t=a.n(t),l=a(141),p=a(1180),m=a(62),d=a(1124),u=a(46),g=a(243),h=a(1182);function o(t,e){var a,s=Object.keys(t);return Object.getOwnPropertySymbols&&(a=Object.getOwnPropertySymbols(t),e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),s.push.apply(s,a)),s}function f(s){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach(function(e){var t,a;t=s,a=n[e=e],(e=function(e){e=function(e,t){if("object"!=typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0===a)return("string"===t?String:Number)(e);a=a.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}(e,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach(function(e){Object.defineProperty(s,e,Object.getOwnPropertyDescriptor(n,e))})}return s}function b(e,t,a,s){var n,o,i=null!=e&&e.slug?"/section/"+e.slug:"",r=(null==e?void 0:e.name)||"more stories",l=null==e?void 0:e.tagLine;return c.a.createElement("div",{className:(n=a,o="homepage-tag__advertorial-title-container",Object(p.b)(n,o,"advertorial")||o)},c.a.createElement("div",null,c.a.createElement(m.default,{slugName:r,linkTo:i,hasSponsoredContentLabel:s}),"fast-company-executive-board"===(null==e?void 0:e.slug)&&c.a.createElement(h.a,null),a?c.a.createElement(u.default,{modifier:"homepage-deck",tags:t,section:"homepage"}):"",l?c.a.createElement("h3",{className:"advertorial__module-deck"},l):""))}function s(e){if(!e)return null;const{config:s,metadata:t,slugData:a,tags:n,isPost:o,noBottomBorder:i,hasSponsoredContentLabel:r}=e;e=Object(u.isAdvertorial)(n);return c.a.createElement("section",{className:o?"post-more-stories":"more-stories-module"},b(a,n,e,r),c.a.createElement("div",{className:"row"},t.map((e,t,a)=>c.a.createElement(d.default,{key:e.id,metadata:f(f({},e),{},{assetSizes:0===t?l.f.bigFirstMobile:l.f[a.length]}),top:0===t,tags:n,noBottomBorder:i,config:s,totalCards:a.length,cardEvent:()=>{Object(g.b)({eventCategory:"Engagement",eventAction:"HomepageTag:Pos-"+(t+1),eventLabel:e.link})}}))))}s.defaultProps={tags:[],isPost:!1,slugData:{},noBottomBorder:!1,hasSponsoredContentLabel:!1},s.propTypes={config:t.a.shape({}).isRequired,metadata:t.a.arrayOf(t.a.shape({})).isRequired,slugData:t.a.shape({}),tags:t.a.arrayOf(t.a.shape({})),isPost:t.a.bool,noBottomBorder:t.a.bool,hasSponsoredContentLabel:t.a.bool}},486:function(e,t,a){"use strict";a.r(t);var s=a(0),o=a.n(s),s=a(2),s=a.n(s),i=a(62),r=a(1124),l=a(473),c=a(141),a=({data:e,config:t})=>{const{posts:a=[],name:s="Fast Company Premium",slug:n="/premium"}=e;e=a.map(e=>{return e.assetSizes=c.f.poster,e}),e=[e.slice(0,2),e.slice(2)];return o.a.createElement("div",{className:"feature_term"},o.a.createElement(i.default,{slugName:s,linkTo:n,showTooltip:!0,className:"noBorder"}),e.map(e=>o.a.createElement("div",{key:e[0].id,className:"row"},e.map(e=>o.a.createElement(r.default,{key:e.id,metadata:e,config:t,noBorder:!0,noPremiumIcon:!0})))),o.a.createElement("a",{title:"All Premium Stories",href:"/premium"},o.a.createElement("button",null,"All Premium Stories")),o.a.createElement("div",{className:"homepage-page__ft-ad-container"},o.a.createElement(l.default,{type:"break"})))};a.propTypes={config:s.a.shape({}).isRequired,data:s.a.shape({name:s.a.string.isRequired,slug:s.a.string.isRequired,posts:s.a.array.isRequired}).isRequired},t.default=a},487:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),s=a(2),s=a.n(s),o=a(869),i=a.n(o),r=a(1119);function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a,s=arguments[t];for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e}).apply(this,arguments)}const c=[{title:"MOST CREATIVE PEOPLE IN BUSINESS",description:"Leaders who are shaping the future of business in creative ways.",logo:"https://images.fastcompany.net/image/upload/v1536778764/fcweb/mcpnewlogo_d7dgyh.svg",image:"https://images.fastcompany.net/image/upload/w_280,ar_16:9,c_fill,g_auto,q_auto:best/wp-cms/uploads/2023/07/p-1-90909686-nick-cave-knoll-textile-collection.webp",link:"https://www.fastcompany.com/most-creative-people/list"},{title:"INNOVATION by design",description:"The best products, services, interfaces, and design ideas in business.",logo:"https://images.fastcompany.net/image/upload/v1536781102/fcweb/IBD_small-icon-50x50px-fix_s2op0e.svg",image:"https://images.fastcompany.net/image/upload/w_280,ar_16:9,c_fill,g_auto,q_auto:best/wp-cms/uploads/2023/08/p-5a-ibd-2023-web-opener-horizontal-copy.webp",link:"https://www.fastcompany.com/innovation-by-design/list"},{title:"Most Innovative Companies",description:"Fast Company’s annual ranking of businesses that are making an outsize impact.",logo:"https://images.fastcompany.net/image/upload/v1536778764/fcweb/micnewlogo_ctvsdy.svg",image:"https://assets.fastcompany.com/image/upload/v1710944060/mic_tacobell.webp",link:"https://www.fastcompany.com/most-innovative-companies/list"},{title:"World Changing Ideas",description:"Products, concepts, and policies that are pursuing innovation for good.",logo:"https://images.fastcompany.net/image/upload/v1536779048/fcweb/wcinewlogo_jebah8.svg",image:"https://images.fastcompany.net/image/upload/wp-cms/uploads/2023/04/WCI_MegatronCrop.webp",link:"https://www.fastcompany.com/world-changing-ideas/list"}];o=(a,s)=>{var e=a["initialPageLoad"],t=()=>c.map((e,t)=>n.a.createElement("div",{className:"franchise",key:"franchise-"+t},n.a.createElement(r.default,{title:e.title,to:e.link,config:a},n.a.createElement("figure",{className:"franchise__photo"},n.a.createElement("img",{alt:e.title,height:"155",width:"276",src:e.image.replace(".png",".webp").replace(".jpg",".webp")})),n.a.createElement("div",{className:"franchise__head"},n.a.createElement("h2",{className:"franchise__head--title"},e.title),s&&n.a.createElement("div",{className:"franchise__head--logo"},n.a.createElement("img",{src:e.logo,alt:e.title}))),n.a.createElement("p",{className:"franchise__description"},e.description))));return e?n.a.createElement("div",{className:"row franchise-showcase"},t()):n.a.createElement(i.a,l({},{arrows:!1,infinite:!0,className:"row franchise-showcase",slidesToScroll:1,slide:".franchise",dots:!0,dotsClass:"franchise-pagination",slidesToShow:1,responsive:[{breakpoint:1024},{breakpoint:1e5,settings:"unslick"}]},{key:"franchise-showcase"}),t())};o.defaultProps={showLogo:!1},o.propTypes={config:s.a.shape({}).isRequired,showLogo:s.a.bool},t.default=o}}]);
//# sourceMappingURL=stories.45ef619ee2b7d8cb939e.js.map