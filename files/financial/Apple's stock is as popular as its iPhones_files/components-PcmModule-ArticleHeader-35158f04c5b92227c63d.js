"use strict";(globalThis.__LOADABLE_LOADED_CHUNKS__=globalThis.__LOADABLE_LOADED_CHUNKS__||[]).push([[7909],{25172:(e,t,r)=>{r.r(t),r.d(t,{ArticleHeader:()=>u,default:()=>m});var a=r(67294),s=r(45697),n=r.n(s),i=r(53904),l=r(6612),o=r(24250),c=r(75270),d=r(85775);const u=e=>{const{data:t,isTransporter:r,isSpecialReport:s,isAuthorHeader:n,template:c,dataCounter:u,dataId:m,brand:h,dataTest:p,dataAnalytics:v}=e;if(!t)return a.createElement(o.Z,{data:{error:"Article Header query came back as null"},errorSource:"ArticleHeader",errorProps:e});const b=!(!t.featuredMedia||"image"!==t.featuredMedia.type||!t.featuredMedia.isHighTouch),y=t.native?Array.isArray(t.sourceOrganization)&&t.sourceOrganization.length>0&&t.sourceOrganization[0].creatorOverwrite?a.createElement(l.Z,{text:t.sourceOrganization[0].creatorOverwrite,brand:h,position:"top"}):a.createElement(l.Z,null):null;return a.createElement("div",{id:m||(0,d.Gu)(c,u),"data-test":p,"data-analytics":v},y,a.createElement(i.ZP,{data:t,hasBackground:b,isTransporter:r,isSpecialReport:s,isAuthorHeader:n,brand:h}))};u.propTypes={data:n().object.isRequired,isTransporter:n().bool,isSpecialReport:n().bool,isAuthorHeader:n().bool,dataCounter:n().number,dataId:n().oneOfType([n().string,n().number]),template:n().string,brand:n().string,dataTest:n().string.isRequired,dataAnalytics:n().string.isRequired},u.defaultProps={isTransporter:!1,isSpecialReport:!1,isAuthorHeader:!1,dataCounter:0,dataId:"",template:"",brand:c.eu};const m=u},14642:(e,t,r)=>{r.d(t,{Z:()=>c});var a=r(67294),s=r(45697),n=r.n(s),i=r(3704),l=r(79221);const o=e=>{const{styles:t,premium:r,section:s,contentClassification:n}=e;if(null==s||!s.url)return null;const{url:l,eyebrow:o}=s,c=null==n?void 0:n.includes("investingClub");if(!r&&!c&&s&&l&&o){const e=n&&n.includes("commentary")?"Opinion - ":null;return a.createElement(i.Z,{to:l,className:t.eyebrow},e,o)}return null};o.propTypes={styles:n().object,premium:n().bool,section:n().shape({url:n().string,eyebrow:n().string}),contentClassification:n().array},o.defaultProps={styles:{},premium:!1,section:{url:null,eyebrow:null},contentClassification:[],shortestHeadline:""};const c=(0,l.Z)(o)},97429:(e,t,r)=>{r.d(t,{Z:()=>u});var a=r(67294),s=r(45697),n=r.n(s),i=r(3704);const l="ArticleHeaderJumplink-styles-select-jumpLinkContainer--N6uDG",o="ArticleHeaderJumplink-styles-select-jumpLinkPhrase--gogza",c="ArticleHeaderJumplink-styles-select-jumpLinkLearnMore--S786E",d=e=>{const t={phrase:"",link:""},{eyebrow:r}=e.section;if("Banking"===r||"Savings"===e.section.eyebrow)t.phrase="Compare Savings Accounts",t.link="#even-financial-iframe";else if("Investing"===r)t.phrase="Featured Investing Products",t.link="#RV-widget";else if("Credit Cards"===r)t.phrase="Find the best credit card for you",t.link="#RV-widget";else{if("Loans"!==r)return null;t.phrase="Compare Personal Loans",t.link="/select/personal-loan-marketplace/"}return a.createElement("div",{className:l},a.createElement("h2",{className:o},t.phrase),a.createElement(i.Z,{to:t.link,className:c},"Learn More"),a.createElement("br",null))};d.propTypes={section:n().object.isRequired};const u=d},18340:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(67294),s=r(45697),n=r.n(s),i=r(68539);const l=e=>{const{enabled:t,isTransporter:r,brand:s,title:n}=e;if(!t)return null;const l=r?"transporter":"";return a.createElement(i.ZP,{shareType:l,brand:s,shareText:n})};l.propTypes={enabled:n().bool.isRequired,brand:n().string.isRequired,title:n().string.isRequired,isTransporter:n().bool},l.defaultProps={isTransporter:!1};const o=l},81023:(e,t,r)=>{var a="/";r.d(t,{Z:()=>y});var s=r(67294),n=r(45697),i=r.n(n),l=r(31846),o=r(75270),c=r(82921),d=r(3704),u=r(67464),m=r(18213);const h={};h[o.eu]=(0,c.Z)({chunkName:"components/shared/Article/ArticleHeader/Author/styles.cnbc.scss",requireAsync:()=>r.e(11205).then(r.bind(r,11205)),requireSync(e){const t=this.resolve(e);return r(t)},resolve:()=>11205}),h[o.cf]=(0,c.Z)({chunkName:"components/shared/Article/ArticleHeader/Author/styles.makeit.scss",requireAsync:()=>r.e(13136).then(r.bind(r,13136)),requireSync(e){const t=this.resolve(e);return r(t)},resolve:()=>13136}),h[o.XD]=(0,c.Z)({chunkName:"components/shared/Article/ArticleHeader/Author/styles.select.scss",requireAsync:()=>r.e(37165).then(r.bind(r,37165)),requireSync(e){const t=this.resolve(e);return r(t)},resolve:()=>37165});const p=["CNBC.com","Breaking News"],v=(e,t)=>e.url?s.createElement(d.Z,{to:e.url,className:t.authorName,pageID:e.id,assetType:"creator"},e.name,s.createElement("span",{className:t.authorUnderline})):s.createElement("span",{className:t.authorNameStatic},e.name),b=({data:e,publisher:t,hideAuthorImages:r,styles:a})=>{const n=m.Z.isNotWebpEnabledBrowser();return s.createElement("div",{className:a.author},t&&((r,n)=>{if(!r&&!n)return null;if(p.includes(n))return null;const i=!(e||{}).name,o=s.createElement("div",{className:(0,u.Z)({keyValuePairs:[[a.noBorder,i]]},a.authorSourceImage)},s.createElement(l.Z,null,s.createElement("img",{src:t.logo,alt:t.name})));if(r)return o;return s.createElement("div",{className:(0,u.Z)({keyValuePairs:[[a.noBorder,i]]},a.sourceWrapper)},s.createElement("div",{className:a.sourceTitle},t.name))})(t.logo,t.name),e.name&&s.createElement("div",{className:a.authorInfo},e.image&&!r&&s.createElement("img",{className:a.authorPortrait,style:{border:0},src:n?`${e.image}&w=60&h=60`:`${e.image}&w=60&h=60&ffmt=webp`,alt:"thumbnail"}),s.createElement("div",{className:a.authorNameAndSocial},v(e,a),e.socialMediaInfo&&(e=>{const t=e=>{switch(e){case"linkedin":return 1;case"facebook":return 2;case"twitter":return 3;default:return 99}};return e.map((e=>({...e,sortOrder:t(e.type)}))).sort(((e,t)=>e.sortOrder-t.sortOrder))})(e.socialMediaInfo).filter((e=>"googlePlus"!==e.type)).map((e=>s.createElement(d.Z,{to:e.url,key:e.type,className:a.authorTwitter},e.displayText.includes("@")?e.displayText:`@${e.displayText}`))))))};b.defaultProps={data:{},publisher:{},hideAuthorImages:!1,styles:{}},b.propTypes={data:i().object,publisher:i().object,hideAuthorImages:i().bool,styles:i().object};const y=(0,c.G)(h,b)},76521:(e,t,r)=>{r.d(t,{Z:()=>b});var a=r(67294),s=r(45697),n=r.n(s),i=r(3704),l=r(96738),o=r(67464),c=r(12712),d=r(85775),u=r(23344);const m="WatchLive-container",h="WatchLive-containerBerkshire",p="WatchLive-webview",v=({isMobileWebview:e})=>{var t;const{j9dpb393:r}=null!==(t=c.Z.getFlags())&&void 0!==t?t:{},s=r?"/brklive/":"/live-tv/",n=r?(0,d.J3)("ArticleHeader","WatchLive-BH",0):null;return e?null:r?a.createElement("div",{className:h,id:n},a.createElement("div",null,a.createElement(i.Z,{to:s},a.createElement("img",{src:u,alt:"Watch Berkshire"})))):a.createElement("span",{id:n},a.createElement(i.Z,{to:s,className:(0,o.Z)(m,{keyValuePairs:[[p,e]]})},"WATCH LIVE"))};v.propTypes={isMobileWebview:n().bool},v.defaultProps={isMobileWebview:!1};const b=(0,l.Z)(v)},53904:(e,t,r)=>{var a="/";r.d(t,{ZP:()=>R});var s=r(67294),n=r(45697),i=r.n(n),l=r(50533),o=r(40684),c=r(30898),d=r(24250),u=r(31846),m=r(3704),h=r(35716),p=r(99486),v=r(96738),b=r(38113),y=r(96860),g=r(67464),E=r(75270),A=r(82921),N=r(39598),k=r(7458),Z=r(81023),f=r(18340),P=r(18238),T=r(14642),w=r(76521),C=r(97429);const S=(0,o.ZP)({resolved:{},chunkName:()=>"components-shared-Picture",isReady(e){const t=this.resolve(e);return!0===this.resolved[t]&&!!r.m[t]},importAsync:()=>r.e(70440).then(r.bind(r,85911)),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((e=>(this.resolved[t]=!0,e)))},requireSync(e){const t=this.resolve(e);return r(t)},resolve(){return 85911}}),O=(0,o.ZP)({resolved:{},chunkName:()=>"components-Video-UniversalVideoPlayer-PlaceHolder",isReady(e){const t=this.resolve(e);return!0===this.resolved[t]&&!!r.m[t]},importAsync:()=>Promise.resolve().then(r.bind(r,93002)),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((e=>(this.resolved[t]=!0,e)))},requireSync(e){const t=this.resolve(e);return r(t)},resolve(){return 93002}}),H=(0,o.ZP)({resolved:{},chunkName:()=>"components-shared-GuideAudienceBar",isReady(e){const t=this.resolve(e);return!0===this.resolved[t]&&!!r.m[t]},importAsync:()=>r.e(20106).then(r.bind(r,60190)),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((e=>(this.resolved[t]=!0,e)))},requireSync(e){const t=this.resolve(e);return r(t)},resolve(){return 60190}}),q=(0,o.ZP)({resolved:{},chunkName:()=>"components-PcmModule-ArticleBody-SectionNavigation",isReady(e){const t=this.resolve(e);return!0===this.resolved[t]&&!!r.m[t]},importAsync:()=>r.e(33836).then(r.bind(r,6168)),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((e=>(this.resolved[t]=!0,e)))},requireSync(e){const t=this.resolve(e);return r(t)},resolve(){return 6168}}),B={};B[E.eu]=(0,A.Z)({chunkName:"components/shared/Article/ArticleHeader/styles.cnbc.scss",requireAsync:()=>r.e(97753).then(r.bind(r,97753)),requireSync(e){const t=this.resolve(e);return r(t)},resolve:()=>97753}),B[E.cf]=(0,A.Z)({chunkName:"components/shared/Article/ArticleHeader/styles.makeit.scss",requireAsync:()=>r.e(87759).then(r.bind(r,87759)),requireSync(e){const t=this.resolve(e);return r(t)},resolve:()=>87759}),B[E.XD]=(0,A.Z)({chunkName:"components/shared/Article/ArticleHeader/styles.select.scss",requireAsync:()=>r.e(56697).then(r.bind(r,56697)),requireSync(e){const t=this.resolve(e);return r(t)},resolve:()=>56697});const W=(e,t,r)=>{const a=e===t?null:(0,N.kU)(e);return a?(0,N.Hi)(a)||r:null},L=e=>{var t;(0,s.useEffect)((()=>{e.data&&e.articleTitle!==e.data.title&&!e.isTransporter&&(e.setNavArticleTitle(e.data.title),e.setNavArticleSettings({settings:{socialtoolsEnabled:e.data.socialtoolsEnabled,upNext:e.data.upNext}}))}));const{data:r,hasBackground:a,brand:n,isSpecialReport:i,isTransporter:l,breakpoints:o,fontSizeClass:c,styles:v}=e;if(!r)return s.createElement(d.Z,{data:{error:"Article query came back as null"},errorSource:"ArticleHeader",errorProps:e});const b=o===y.IB,A="guide"===r.type,N=r.deck&&([E.XD].includes(n)||n===E.eu&&A),B=Array.isArray(r.author)&&r.author.length,L=null==r||null===(t=r.contentClassification)||void 0===t?void 0:t.includes("investingClub"),I=n===E.eu&&!L,M=()=>I?s.createElement(w.Z,null):null,R=Array.isArray(r.sourceOrganization)&&r.sourceOrganization[0]&&r.sourceOrganization[0].name&&"CNBC.com"!==r.sourceOrganization[0].name;let z=0;B&&(z=r.author.length,!r.native&&R&&(z+=1));const D=r.featuredMedia,V=D&&"cnbcvideo"===D.type,{isMobileWebview:x}=e,j=(0,g.Z)({keyValuePairs:[[v.specialReport,i],[v[c],!!c&&x]]},v.articleHeader),_=r.premium&&!e.isMobileWebview,F=r.premium&&e.isMobileWebview,$=W(r.dateModified,r.datePublished,r.dateLastPublishedFormatted),U=null!=$&&$.includes("Updated")?$:`Updated ${$}`;return s.createElement("header",{className:j,id:l?"transporter-article-header":"main-article-header"},D&&D.isHighTouch&&"video"===D.type&&s.createElement("div",{className:v.fullWidthVideo,style:{backgroundImage:`url(${D.url})`}},s.createElement("div",{className:v.videoContent},s.createElement("div",{className:v.videoTitle},D.headline),s.createElement("div",{className:v.videoTime},(0,k.B)(D.duration)),s.createElement("span",{className:v.videoButton}))),a?s.createElement("div",{className:v.imagePlaceholder},s.createElement(u.Z,{height:"100%"},s.createElement(S,{className:v.imageHero,viewportSizes:{s:{width:700,height:305},m:{width:760,height:405},l:{width:1340,height:500},xl:{width:1340,height:500}},aspectRatio:16/9,url:`${D.url}`,alt:D.altText||D.copyrightHolder}))):null,s.createElement("div",{className:(0,g.Z)({keyValuePairs:[[v.featuredMediaHeaderWrapper,V],[v.guideHeader,A]]},v.headerContentContainer)},a&&D&&s.createElement("div",{className:v.heroDescriptionWrapper},s.createElement("div",{className:v.heroDescription},s.createElement("div",{className:v.heroDescriptionCaption},D.caption),s.createElement("div",{className:v.heroDescriptionCredit},D.copyrightHolder),s.createElement("div",{className:v.heroDescriptionDivider}))),s.createElement("div",{className:(0,g.Z)({keyValuePairs:[[v.wrapperHero,a]]},v.wrapperHeroNoImage)},n===E.XD&&s.createElement("div",{className:v.jumpLinkWrap},s.createElement(C.Z,{section:r.section})),_&&s.createElement(h.Z,{styles:v}),L&&s.createElement(p.Z,{disableLinkInPill:!!x,styles:v}),r.native?r.sourceOrganization&&r.sourceOrganization.length&&r.sourceOrganization.length>0&&s.createElement("div",{className:v.brandedTreatment},s.createElement("span",{className:v.brandedText}),r.sourceOrganization[0].logo?s.createElement(m.Z,{to:r.sourceOrganization[0].url},s.createElement(u.Z,null,s.createElement("img",{src:r.sourceOrganization[0].logo,alt:r.sourceOrganization[0].name}))):s.createElement(m.Z,{to:r.sourceOrganization[0].url},r.sourceOrganization[0].name)):s.createElement(T.Z,{brand:n,styles:v,premium:r.premium,section:r.section,contentClassification:r.contentClassification,shortestHeadline:r.shortestHeadline}),l?s.createElement(m.Z,{to:r.url},F&&s.createElement(h.Z,{disableLinkInPill:!0,styles:v}),s.createElement("h1",{className:v.headline},r.title||r.headline)):s.createElement("div",null,F&&s.createElement(h.Z,{disableLinkInPill:!0,styles:v}),s.createElement("h1",{className:v.headline},r.title||r.headline),N&&s.createElement("h2",{className:v.deck},r.deck)),s.createElement(P.Z,{brand:n,type:r.type,datePublishedRaw:r.datePublished,datePublishedFormatted:r.datePublishedFormatted,dateLastPublishedRaw:r.dateLastPublished,dateLastPublishedFormatted:$?U:null,styles:v}),b&&s.createElement("span",null,e.mobileImage)),s.createElement("div",{className:(0,g.Z)(!D||a?v.authorAndShareInline:v.authorAndShare,{keyValuePairs:[[v.featuredMediaAuthorAndShare,V],[v.authorMobileWeb,x]]})},r.creatorOverwrite&&s.createElement(s.Fragment,null,s.createElement("div",{className:v.authorOverWrite},s.createElement(Z.Z,{publisher:!r.native&&r.sourceOrganization?r.sourceOrganization[0]:null,data:{name:r.creatorOverwrite},brand:n,authorCount:z})),M()),!r.creatorOverwrite&&B?s.createElement(s.Fragment,null,s.createElement("div",{className:(0,g.Z)(v.authorContainer,{keyValuePairs:[[v.authorContainerWithWatchLive,I]]})},(r.author||[]).map(((e,t)=>s.createElement("div",{className:v.author,key:t},r.author.length>1&&t>0&&s.createElement("div",{className:v.authorDivider}),s.createElement(Z.Z,{publisher:!r.native&&0===t&&r.sourceOrganization?r.sourceOrganization[0]:null,data:e,hideAuthorImages:z>2,brand:n}))))),M()):null,!r.creatorOverwrite&&!r.native&&!B&&s.createElement(s.Fragment,null,s.createElement("div",{className:(0,g.Z)(v.authorContainer,{keyValuePairs:[[v.authorContainerWithWatchLive,I]]})},s.createElement("div",{className:v.author},s.createElement(Z.Z,{publisher:r.sourceOrganization?r.sourceOrganization[0]:null,data:{},brand:n,authorCount:z}))),M()),x?null:n!==E.eu||n===E.eu&&o&&![y.IB,y.lM].includes(o)?s.createElement(f.Z,{enabled:r.socialtoolsEnabled,isTransporter:l,brand:n,title:r.title,url:r.url}):null,A&&s.createElement(H,{className:v.guideAudienceBar,brand:n}),x&&A&&s.createElement(q,{"data-testid":"section-nav",brand:n})),D&&"cnbcvideo"===D.type&&s.createElement(O,{featuredMediaFlag:!0,isProContent:!1,isLive:!1,isPackage:!1,cardType:"featured-rectangle-media",packageTitle:"",brand:n,videoData:D,inlineVideoPlayback:!0,inlineVideoComponent:!0,id:`ArticleBody-Video-featuredMedia-${D.id}`,dataId:`ArticleBody-Video-featuredMedia-${D.id}`})))};function I(e){return{articleTitle:e.navStatus.articleTitle}}L.propTypes={data:i().object.isRequired,mobileImage:i().element,articleTitle:i().string,setNavArticleTitle:i().func,setNavArticleSettings:i().func,isSpecialReport:i().bool,isTransporter:i().bool,hasBackground:i().bool,styles:i().object,breakpoints:i().string,isMobileWebview:i().bool},L.defaultProps={isTransporter:!1,articleTitle:"",setNavArticleTitle:()=>{},setNavArticleSettings:()=>{},isSpecialReport:!1,hasBackground:!1,mobileImage:null,data:{contentClassification:[]},styles:{},breakpoints:"",isMobileWebview:!1};const M={setNavArticleTitle:c.Il,setNavArticleSettings:c.W},R=(0,l.$j)(I,M)((0,v.Z)((0,b.Z)((0,A.G)(B,L))))},6612:(e,t,r)=>{var a="/";r.d(t,{Z:()=>m});var s=r(67294),n=r(45697),i=r.n(n),l=r(67464),o=r(75270),c=r(82921);const d={};d[o.eu]=(0,c.Z)({chunkName:"components/shared/Article/BrandBanner/styles.cnbc.scss",requireAsync:()=>r.e(84540).then(r.bind(r,84540)),requireSync(e){const t=this.resolve(e);return r(t)},resolve:()=>84540}),d[o.cf]=(0,c.Z)({chunkName:"components/shared/Article/BrandBanner/styles.makeit.scss",requireAsync:()=>r.e(88819).then(r.bind(r,88819)),requireSync(e){const t=this.resolve(e);return r(t)},resolve:()=>88819});const u=e=>{const{text:t,position:r,styles:a}=e;return s.createElement("div",{className:(0,l.Z)(a.container,r),"data-test":"BrandBanner"},s.createElement("div",{className:a.text},t))};u.propTypes={text:i().string.isRequired,position:i().string,styles:i().object.isRequired},u.defaultProps={text:"Paid Post",position:"bottom"};const m=(0,c.G)(d,u)},79221:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(67294),s=r(26076);const n=(e,t={useMobileWebviewContext:s.dY})=>r=>{const{useMobileWebviewContext:s}=t;return s().isMobileWebview?null:a.createElement(e,r)}}}]);