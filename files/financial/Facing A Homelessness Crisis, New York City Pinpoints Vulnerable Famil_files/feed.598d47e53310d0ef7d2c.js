(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[19],{474:function(e,t,a){"use strict";a.r(t);var i=a(0),b=a.n(i),r=a(2),r=a.n(r),n=a(871),v=a.n(n),n=a(875),o=a.n(n),n=a(870),s=a.n(n),n=a(479),l=a.n(n),n=a(23),p=a.n(n),_=a(1124),c=a(62),d=a(1119),u=a(1126),m=a(141),w=a(243),g=a(46),S=a(473);function h(t,e){var a,i=Object.keys(t);return Object.getOwnPropertySymbols&&(a=Object.getOwnPropertySymbols(t),e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,a)),i}function f(i){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach(function(e){var t,a;t=i,a=r[e=e],(e=function(e){e=function(e,t){if("object"!=typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0===a)return("string"===t?String:Number)(e);a=a.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}(e,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach(function(e){Object.defineProperty(i,e,Object.getOwnPropertyDescriptor(r,e))})}return i}function y(){}class E extends i.Component{constructor(e){super(e),this.renderMoreButton=this.renderMoreButton.bind(this),this.enableInfiniteScroll=this.enableInfiniteScroll.bind(this),this.handleScroll=l()(this.handleScroll.bind(this),1e3)}componentDidMount(){this.isDesktop=Object(u.a)()}componentWillUnmount(){this.removeInfiniteScrollEvent()}onlyUnique(e,t,a){return a.indexOf(e)===t}getAllStories(){var e,t=this.props.stories.map((e,t)=>f(f({},e),{},{site:"Fast Company",assetSizes:0===t?m.f.bigFirstMobile:m.f[3],allowNoImage:!0,excerpt:p()(e.excerpt||"")}));return!(this.props.allRendered||this.props.paginationEnabled||this.props.infiniteScrollEnabled)&&10<=(null==(e=this.props)||null==(e=e.stories)?void 0:e.length)?t.slice(0,10):t}getSections(){return o()(this.getAllStories(),10).map((e,t)=>({id:"section-"+(t+1),stories:e}))}addInfiniteScrollEvent(){window.addEventListener("scroll",this.handleScroll)}removeInfiniteScrollEvent(){window.removeEventListener("scroll",this.handleScroll)}enableInfiniteScroll(e){e.preventDefault(),this.infiniteScrollInitialized=!0,this.props.hideRecircFeed(),this.props.infiniteScrollAllFeedFetch({page:this.props.page+1,slug:this.props.section,excludeFromHomepage:!0},this.props.config).then(()=>{this.addInfiniteScrollEvent()})}handleScroll(){if(!this.props.infiniteScrollLoading){if(this.props.totalPages<this.props.page)return this.removeInfiniteScrollEvent();if(window.innerHeight+window.scrollY>=document.body.offsetHeight-3e3)return this.removeInfiniteScrollEvent(),this.props.infiniteScrollAllFeedFetch({page:this.props.page+1,slug:this.props.section,excludeFromHomepage:!0},this.props.config).then(()=>{this.props.totalPages>this.props.page&&this.addInfiniteScrollEvent()})}return!1}renderMoreButton(e,t,a,i,r){if(this.props.disableMore)return null;if(this.props.infiniteScrollEnabled){if(this.infiniteScrollInitialized)return null;if(1===this.props.totalPages||this.props.infiniteScrollLoading&&!a)return null;if(a){var n=this.props.page+1;let e="";switch(this.props.type){case"homepage":e="/all/"+n;break;case"brandworks":e=`/fcw/${this.props.section}/`+[n];break;default:e=`/${this.props.type}/${this.props.section}/`+n}return this.props.hrefOverride&&(e=""+this.props.hrefOverride+n),b.a.createElement("a",{title:`See More ${this.props.section} on page `+this.props.page,href:e,className:"all-feed__more"},b.a.createElement("button",{onClick:this.enableInfiniteScroll},"See More Stories"))}}if(this.props.paginationEnabled){if(i||!a)return null;{var o=this.props["page"];let e="";switch(this.props.type){case"homepage":e="/all/"+o;break;case"brandworks":e=`/fcw/${this.props.section}/`+[o];break;case"fceb":e="/section/fast-company-executive-board/"+o;break;default:e=`/${this.props.type}/${this.props.section}/`+o}return"/section//2"===(e=this.props.hrefOverride?""+this.props.hrefOverride+o:e)&&(e="/section/innovation-by-design-2019/2"),b.a.createElement("div",{className:`all-feed__button all-feed__button--${(null==r?void 0:r.site)||""} `+(this.props.mobileSeeMoreHidden?"all-feed__button--mobile-hidden":"")},b.a.createElement(d.default,{title:`See More ${this.props.section} on page `+(this.props.page+1),to:e,config:r},b.a.createElement("button",null,"See More Stories")))}}return 1!==e||this.props.allRendered||this.props.disableMore?null:b.a.createElement("div",{className:`all-feed__button all-feed__button--${(null==r?void 0:r.site)||""} `+(this.props.mobileSeeMoreHidden?"all-feed__button--mobile-hidden":"")},b.a.createElement("button",{onClick:this.props.setAllLoadedState},"See More Stories"))}renderMobileAd(e){return 1===e?null:b.a.createElement("div",{className:"all-feed__mobile-ad-container"},b.a.createElement(S.default,{type:"break"}))}renderSlugOrName(e){if(!e||!e.hasSlug)return null;var t;if(e.authorPage)return s()(e.author)?"":b.a.createElement("h2",{className:"author-page__all-feed-title"},"Stories by "+((null==(t=e.author)?void 0:t.name)||""),b.a.createElement("span",{className:"author-page__all-feed-title-rss"},b.a.createElement("a",{href:`/user/${null==(t=e.author)?void 0:t.slug}/rss`},"RSS")));if(!s()(e.advertorialSlugs))return t=null==(t=e.advertorialSlugs)?void 0:t.name,t=Object(g.getBrandworksName)([{name:t}]),b.a.createElement(c.default,{slugName:e.allStoriesTitle?`ALL ${t} STORIES`:null==(t=e.advertorialSlugs)?void 0:t.name,className:"tag-page",advertorial:!0});let a={};return-1<e.titleOverride.indexOf("Magazine")&&(a={name:"See Archives",url:"/magazine/archive"}),b.a.createElement(c.default,{linkTo:"//www.fastcompany.com",slugName:(null==e?void 0:e.titleOverride)||"All Stories",archives:a})}render(){const{config:i,advertorialSlugs:e,authorPage:t,author:a,hasSlug:r,titleOverride:n,isLastPage:o,type:s,allStoriesTitle:l,brandworksSlug:p,featuredTop:c,bottomLine:d,noAds:u}=this.props;let m=this.props["modifier"];const g="advertorial"===(m=m||r?m:"no-slug"),h=this.props.stories.length;let f=`all-feed__wrapper ${m?"all-feed__wrapper--"+m:""} ${u?"centered":""}
    `;return"user"===s&&(f+=` all-feed__wrapper--${s} `),b.a.createElement("section",{className:"all-feed "+(d?"":"no-bottom-line")},this.renderSlugOrName({advertorialSlugs:e,authorPage:t,author:a,hasSlug:r,titleOverride:n,allStoriesTitle:l}),b.a.createElement("div",{className:f},this.getSections().map((e,a)=>{var t=this.getSections().length===a+1;return b.a.createElement("div",{key:e.id,className:"all-feed__section"},b.a.createElement("div",{className:"all-feed__posts"},e.stories.filter(this.onlyUnique).map((e,t)=>(p&&(e.customEyebrowText=p,e.fullyReplaceEyebrow=!0),b.a.createElement(_.default,{type:"all-feed",key:e.id||e.mediaid,metadata:e,config:i,hasExcerpt:"long"===e.layout,fullPageAdvertorial:g,top:c&&0===a&&0===t,cardEvent:()=>{Object(w.b)({eventCategory:"Engagement",eventAction:"AllFeed:Pos-"+(t+1),eventLabel:e.link})}}))),!u&&this.renderMobileAd(a),this.renderMoreButton(a,h,t,o,i)),!u&&b.a.createElement(b.a.Fragment,null,b.a.createElement("div",{className:"all-feed__sidebar"},b.a.createElement("div",{className:"all-feed__promotion",id:"sidebar-ad-"+a},b.a.createElement(v.a,{top:100,bottomBoundary:"#sidebar-ad-"+a,enabled:this.isDesktop},b.a.createElement(S.default,{type:"rail_sticky"}))))))})))}}E.defaultProps={stories:[],allRendered:!1,modifier:"",mobileSeeMoreHidden:!1,advertorialSlugs:{},authorPage:!1,author:{},hasSlug:!0,disableMore:!1,titleOverride:"",paginationEnabled:!1,totalPages:0,page:0,section:"",type:"",isLastPage:!1,infiniteScrollEnabled:!1,infiniteScrollAllFeedFetch:y,hideRecircFeed:y,setAllLoadedState:y,infiniteScrollLoading:!1,hrefOverride:"",mobileAdCount:[],allStoriesTitle:!1,brandworksSlug:"",featuredTop:!0,bottomLine:!0,noAds:!1},E.propTypes={stories:r.a.arrayOf(r.a.shape({})),allRendered:r.a.bool,setAllLoadedState:r.a.func,modifier:r.a.string,mobileSeeMoreHidden:r.a.bool,advertorialSlugs:r.a.shape({}),authorPage:r.a.bool,author:r.a.shape({}),hasSlug:r.a.bool,disableMore:r.a.bool,titleOverride:r.a.string,paginationEnabled:r.a.bool,type:r.a.string,section:r.a.string,page:r.a.number,totalPages:r.a.number,isLastPage:r.a.bool,infiniteScrollLoading:r.a.bool,infiniteScrollEnabled:r.a.bool,infiniteScrollAllFeedFetch:r.a.func,hideRecircFeed:r.a.func,config:r.a.shape({}).isRequired,hrefOverride:r.a.string,mobileAdCount:r.a.arrayOf(r.a.number),allStoriesTitle:r.a.bool,brandworksSlug:r.a.string,featuredTop:r.a.bool,bottomLine:r.a.bool,noAds:r.a.bool},t.default=E},485:function(e,t,a){"use strict";a.r(t);var s=a(0),l=a.n(s),i=a(40),r=a(2),r=a.n(r),n=a(880),p=a.n(n),n=a(1),c=a.n(n),d=a(473),u=a(1119),m=a(1221);function g(){return(g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a,i=arguments[t];for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}class o extends s.Component{constructor(e){super(e),this.state={activeIndex:0,activeNative:!0,tempSponsoredCardData:null,wasMounted:!1},this.onMouseEnter=this.onMouseEnter.bind(this),this.onMouseLeave=this.onMouseLeave.bind(this),this.swiperResize=this.swiperResize.bind(this)}componentWillMount(){var e=c()(this,"props.megatronNativeTile.posts",0).length,e=Math.floor(Math.random()*e);c()(this,"props.config.featureFlags.isDynamicNativeTileEnabled")&&this.setState({tempSponsoredCardData:c()(this,`props.megatronNativeTile.posts[${e}]`)})}componentDidMount(){window.addEventListener("resize",this.swiperResize),this.setState({wasMounted:!0})}componentWillUnmount(){window.removeEventListener("resize",this.swiperResize)}onMouseEnter(e){this.setState({activeIndex:e}),this.swiper.slideTo(e),this.swiper.autoplay.stop()}onMouseLeave(){this.swiper.autoplay.start()}swiperResize(){this.swiper.update()}render(){const{activeIndex:n,activeNative:t,tempSponsoredCardData:e,wasMounted:a}=this.state,{articles:i,config:o,loading:r}=this.props;return l.a.createElement(s.Fragment,null,l.a.createElement("div",{className:"megatron"},l.a.createElement(p.a,g({},{effect:"fade",autoplay:{delay:4e3},on:{slideChangeTransitionStart:()=>{var e=this.swiper["activeIndex"];2===e&&t&&this.setState({activeNative:!1}),this.setState({activeIndex:e})}}},{ref:e=>{e&&(this.swiper=e.swiper)}}),i.map(({featured_image:e,customFields:t,link:a})=>l.a.createElement("div",{key:e.source,className:"megatron__slide"},l.a.createElement("div",{className:"megatron__slide-background",style:{backgroundImage:`url(${((e,t,a)=>{var i="upload/";let r=c()(t,"megatron_image")||e.source;return a&&a.includes("/queer-50/2021")&&(r="https://images.fastcompany.net/image/upload/v1622723187/fcweb/FC-Q50-PatternAnim_16x9-shortened-HP-still_lcvovs.gif"),a&&a.includes("/innovation-by-design/2021")&&(r="https://images.fastcompany.net/image/upload/v1632229232/fcweb/FC_Carousel_IBD2021-1_eccxry.jpg"),a&&a.includes("/innovation-by-design/2021/anniversary")&&(r="https://images.fastcompany.net/image/upload/v1632350230/fcweb/FC_Carousel_IBDx10_jlkg6g.jpg"),a&&a.includes("/brands-that-matter/list")&&(r="https://images.fastcompany.net/image/upload/v1695826833/fcweb/ndv8sysczgcndtuz0ibd.webp"),a&&a.includes("next-big-things-in-tech/2021")&&(r="https://wp-cms-fastcompany-com.s3.amazonaws.com/uploads/2021/11/p-nbtt-Carousel-art@2x-100.jpg"),a&&a.includes("/most-innovative-companies/list")?"https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/v1710523997/fcweb/wt3mdg5m3v1xpybg8pw3.png":(a&&a.includes("/most-innovative-companies/2022")&&(r="https://wp-cms-fastcompany-com.s3.amazonaws.com/uploads/2022/01/p-mic-2022-megatron-2.jpg"),a&&a.includes("/world-changing-ideas/list")&&(r="https://images.fastcompany.net/image/upload/wp-cms/uploads/2023/04/WCI_MegatronCrop.webp"),a&&a.includes("/queer-50/list")&&(r="https://assets.fastcompany.com/image/upload/v1662557894/wp-cms/uploads/2023/05/p-megatron-q50-2023-top-art-grid-2480x1395-1.webp"),a&&a.includes("/best-workplaces-for-innovators/list")&&(r="https://assets.fastcompany.com/image/upload/v1689017059/BWFI_Megatron2.webp"),a&&a.includes("/most-creative-people/list")&&(r="https://assets.fastcompany.com/image/upload/v1688601859/p-MCP_2023-Megatron.webp"),a&&a.includes("/innovation-by-design/list")&&(r="https://assets.fastcompany.com/image/upload/v1692705370/p-4b-ibd-2023-web-opener-desktop-megatron.webp"),a&&a.includes("/innovation-by-design/2022")&&(r="https://assets.fastcompany.com/image/upload/v1662557894/wp-cms/uploads/2022/08/p-1d-ibd-2022-lander-feature-image.webp"),(r=a&&a.includes("/next-big-things-in-tech/list")?"https://images.fastcompany.net/image/upload/v1700144465/fcweb/nw6k51au9tceixjjurzm.webp":r).includes(".gif")?r.replace(i,"upload/w_600,ar_16:9,c_fill,g_auto:body,g_north,f_auto,q_auto:best/").replace(".gif",".webp"):r.replace(i,"upload/w_2480,ar_16:9,c_fill,g_auto:body,g_north,f_auto,q_auto:best/").replace(".png",".webp").replace(".jpg",".webp"))})(e,t,a)})`},loading:r})))),l.a.createElement("div",{className:"megatron__articles"},i.map(({title:e,categories:t,customFields:a,link:i},r)=>l.a.createElement("article",{key:i,className:"megatron__article "+(n===r?"megatron__article--active":""),onMouseEnter:()=>this.onMouseEnter(r),onMouseLeave:this.onMouseLeave},l.a.createElement(u.default,{title:e,to:i,config:o},c()(a,"primary_eyebrow",!1)?l.a.createElement("span",null,c()(a,"primary_eyebrow","")):l.a.createElement("span",null,c()(t[0],"name","")),l.a.createElement("h2",null,e)))),e&&a&&l.a.createElement("div",{className:"megatron__article megatron__article--native "+(t?"megatron__article--native__active":"")},l.a.createElement("a",{href:e.url},l.a.createElement("div",{className:"img-container"},l.a.createElement("img",{height:"168",width:"300",src:e.image.replace(".png",".webp").replace(".jpg",".webp").replace("upload/","upload/w_970,ar_16:9,c_fill,g_auto:body,g_north,f_auto,q_auto:best/"),alt:e.title})),l.a.createElement("span",null,e.eyebrow),l.a.createElement("h2",null,e.title))))),l.a.createElement("div",{className:"homepage-page__ff-ad-container"},l.a.createElement(m.a,{showOnlyDesktop:!0},l.a.createElement(d.default,{type:"break"}))))}}o.defaultProps={loading:""},o.propTypes={config:r.a.shape({}).isRequired,articles:r.a.arrayOf(r.a.shape({})).isRequired,loading:r.a.string},t.default=Object(i.b)(function(e={}){return{config:e.config,postpage:e.postpage}})(o)}}]);
//# sourceMappingURL=feed.598d47e53310d0ef7d2c.js.map