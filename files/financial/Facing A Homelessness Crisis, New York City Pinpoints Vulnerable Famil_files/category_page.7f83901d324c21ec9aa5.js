(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[16],{114:function(e,t,r){"use strict";r.r(t);var q=r(0),P=r.n(q),a=r(864),s=r.n(a),o=r(2),n=r.n(o),i=r(40),l=r(1),N=r.n(l),R=r(179),O=r(244),c=r(5);const S=Object(c.a)({resolved:{},chunkName(){return"components-feature_feed-feature_feed"},isReady(e){e=this.resolve(e);return!0===this.resolved[e]&&!!r.m[e]},importAsync:()=>Promise.all([r.e(0),r.e(1),r.e(9)]).then(r.bind(null,475)),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then(e=>(this.resolved[t]=!0,e))},requireSync(e){const t=this.resolve(e);return r(t)},resolve(){return 475}}),j=Object(c.a)({resolved:{},chunkName(){return"components-not_found_component-not_found_component"},isReady(e){e=this.resolve(e);return!0===this.resolved[e]&&!!r.m[e]},importAsync:()=>Promise.resolve().then(r.bind(null,140)),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then(e=>(this.resolved[t]=!0,e))},requireSync(e){const t=this.resolve(e);return r(t)},resolve(){return 140}}),k=Object(c.a)({resolved:{},chunkName(){return"components-loading_spinner-loading_spinner"},isReady(e){e=this.resolve(e);return!0===this.resolved[e]&&!!r.m[e]},importAsync:()=>Promise.resolve().then(r.bind(null,10)),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then(e=>(this.resolved[t]=!0,e))},requireSync(e){const t=this.resolve(e);return r(t)},resolve(){return 10}}),B=Object(c.a)({resolved:{},chunkName(){return"components-slug-slug"},isReady(e){e=this.resolve(e);return!0===this.resolved[e]&&!!r.m[e]},importAsync:()=>Promise.resolve().then(r.bind(null,62)),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then(e=>(this.resolved[t]=!0,e))},requireSync(e){const t=this.resolve(e);return r(t)},resolve(){return 62}}),C=Object(c.a)({resolved:{},chunkName(){return"components-video_module-video_module"},isReady(e){e=this.resolve(e);return!0===this.resolved[e]&&!!r.m[e]},importAsync:()=>Promise.all([r.e(0),r.e(1),r.e(125)]).then(r.bind(null,1131)),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then(e=>(this.resolved[t]=!0,e))},requireSync(e){const t=this.resolve(e);return r(t)},resolve(){return 1131}}),L=Object(c.a)({resolved:{},chunkName(){return"components-all_feed-all_feed"},isReady(e){e=this.resolve(e);return!0===this.resolved[e]&&!!r.m[e]},importAsync:()=>Promise.all([r.e(0),r.e(1),r.e(95)]).then(r.bind(null,474)),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then(e=>(this.resolved[t]=!0,e))},requireSync(e){const t=this.resolve(e);return r(t)},resolve(){return 474}}),D=Object(c.a)({resolved:{},chunkName(){return"components-more-stories-component-more-stories-component"},isReady(e){e=this.resolve(e);return!0===this.resolved[e]&&!!r.m[e]},importAsync:()=>Promise.all([r.e(0),r.e(1),r.e(108)]).then(r.bind(null,476)),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then(e=>(this.resolved[t]=!0,e))},requireSync(e){const t=this.resolve(e);return r(t)},resolve(){return 476}}),V=Object(c.a)({resolved:{},chunkName(){return"components-ad-AdContainer"},isReady(e){e=this.resolve(e);return!0===this.resolved[e]&&!!r.m[e]},importAsync:()=>r.e(7).then(r.bind(null,473)),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then(e=>(this.resolved[t]=!0,e))},requireSync(e){const t=this.resolve(e);return r(t)},resolve(){return 473}}),d=({categoryAllFeed:e,categoryFeaturedFeed:t,categoryPage:r,categoryPromoBanner:a,categoryVideo:s,config:o,featuredSponsoredCard:n,location:i,match:l,status:c,tagAllFeed:d})=>{const u=Object(q.useContext)(O.b)["retriggerPiano"];var{posts:d,tags:g}=d,m=N()(e,"tag.name"),y=N()(e,"category.name",""),h=N()(e,"category.slug",""),p=m?N()(e,"tag.description"):N()(e,"category.description"),v=N()(l,"params.page",!1),A=N()(e,"totalPages"),f=m?`/${N()(e,"category.slug")}/${N()(e,"tag.slug")}/`:"";const F=N()(t,"category.acf.hidePageVideoUnit");var t=m?"category_tag":"category",_=N()(s,"playlist.length"),b=d&&0<d.length,E=2<=N()(e,"posts.length"),A=Number(v)===A;return Object(q.useEffect)(()=>{u(e)},[h]),r.error||e.error||404===c?P.a.createElement("section",{className:"category-page"},P.a.createElement("article",{className:"category-page__main--error-pg"},P.a.createElement(j,null))):r.isLoading?P.a.createElement("section",{className:"category-page"},P.a.createElement("article",{className:"category-page__main"},P.a.createElement(k,null))):P.a.createElement("main",{className:"category-page"},P.a.createElement("section",{className:"page-title"},P.a.createElement(B,{slugName:m?y+" : "+m:y,className:"category-page"}),p&&P.a.createElement("h3",{className:"page-description",dangerouslySetInnerHTML:{__html:p}})),!v&&P.a.createElement(q.Fragment,null,P.a.createElement(S,{config:o,featuredFeed:{featured:[(c=(null==e?void 0:e.posts)||[])[0]],top:c.slice(1,6)},promoBanner:a,scrollingModule:e,page:"category",featuredSponsoredCard:n,sectionPath:N()(i,"pathname","")}),E&&P.a.createElement("div",{className:"category-page__ff-ad-container"},P.a.createElement(V,{type:"break"})),!F&&P.a.createElement(q.Fragment,null,P.a.createElement(C,{config:o,type:"category",data:s,playerid:"HliaKwd3",stories:s.playlist}),_&&P.a.createElement("div",{className:"category-page__video-ad-container"},P.a.createElement(V,{type:"break"})))),P.a.createElement(L,{config:o,stories:(null==e?void 0:e.posts.slice(5,21))||[],allRendered:N()(e,"allRendered"),updateAction:R.a,paginationEnabled:!0,page:Number(N()(l,"params.page","1"))+1,section:h,type:t,hrefOverride:f,isLastPage:A,titleOverride:`All ${m?y+" : "+m:y} Stories`,hasSlug:"string"!=typeof v}),!v&&-1!==["co-design","technology","work-life","impact","recommender"].indexOf(h)&&b&&P.a.createElement("div",null,P.a.createElement(D,{metadata:d.slice(0,4),slugData:{name:"From the FC Executive Board",slug:"fast-company-executive-board"},tags:g,config:o,noBottomBorder:!0,isPost:!1})))};function u(e={}){return{config:e.config||{},status:e.status.code,categoryFeaturedFeed:{source:N()(e,"categoryFeaturedFeed.source",""),featured:N()(e,"categoryFeaturedFeed.featured",[]),top:N()(e,"categoryFeaturedFeed.top",[]),category:N()(e,"categoryFeaturedFeed.category",{}),error:N()(e,"categoryFeaturedFeed.error",!1)},categoryVideo:{playlist:N()(e,"categoryVideo.data.playlist",[]),title:N()(e,"categoryVideo.data.title",""),feedid:N()(e,"categoryVideo.data.feedid","")},categoryPage:N()(e,"categoryPage",{}),categoryPromoBanner:N()(e,"categoryPromoBanner.data",{}),featuredSponsoredCard:N()(e,"featuredSponsoredCard.data",{}),categoryAllFeed:{allRendered:N()(e,"categoryAllFeed.data.allRendered",!1),posts:N()(e,"categoryAllFeed.data.posts",[]),totalPages:N()(e,"categoryAllFeed.data.totalPages",0),totalPosts:N()(e,"categoryAllFeed.data.totalPosts",0),tag:N()(e,"categoryAllFeed.data.tag"),category:N()(e,"categoryAllFeed.data.category"),error:N()(e,"categoryAllFeed.error",!1)},tagAllFeed:{posts:N()(e,"tagAllFeed.data.posts",[]),tags:N()(e,"tagAllFeed.data.tags",[])}}}d.propTypes={status:n.a.number.isRequired,categoryPage:n.a.shape({isLoading:n.a.bool,error:n.a.bool,errorMessage:n.a.string}).isRequired,categoryFeaturedFeed:n.a.shape({source:n.a.string,featured:n.a.arrayOf(n.a.shape({})),top:n.a.arrayOf(n.a.shape({})),category:n.a.object,error:n.a.bool}).isRequired,categoryVideo:n.a.shape({playlist:n.a.arrayOf(n.a.shape({})),feedid:n.a.string,title:n.a.string}).isRequired,categoryPromoBanner:n.a.shape({}).isRequired,featuredSponsoredCard:n.a.shape({}).isRequired,location:n.a.shape({pathname:n.a.string}).isRequired,categoryAllFeed:n.a.shape({}).isRequired,config:n.a.shape({}).isRequired,match:n.a.shape({}).isRequired,tagAllFeed:n.a.shape({}).isRequired};const g=Object(i.b)(u)(d);t.default=s()(g)}}]);
//# sourceMappingURL=category_page.7f83901d324c21ec9aa5.js.map