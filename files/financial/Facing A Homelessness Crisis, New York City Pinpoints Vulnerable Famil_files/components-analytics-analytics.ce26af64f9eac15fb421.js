(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[8],{1193:function(e,t,a){"use strict";t.a=function(e){let t="";return e.forEach(e=>{t+=e.join("")}),t}},1212:function(b,e,t){"use strict";t.r(e);var a=t(0),y=t.n(a),n=t(2),n=t.n(n),i=t(40),o=t(1),ne=t.n(o),o=t(483),s=t.n(o),o=t(188),r=t.n(o),ie=t(6),oe=t(44);function d(){var e=oe.a;return void 0===e?"":(e=ne()(e,"facebookPixel")["id"],`
  <!-- Facebook Pixel Code -->
  <script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '${e}');
  fbq('track', 'PageView');
  </script>
  <noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=${e}&ev=PageView&noscript=1"
  /></noscript>
  <!-- End Facebook Pixel Code -->
  `)}var o=t(103),I=t.n(o),o=t(144),T=t.n(o),k=t(93);function p(e,t,a,n,i){var o=oe.a;if(void 0===o)return ie.a.error(`GA IS NOT LOADING ON THIS PAGE TYPE ${ne()(e,"type")} BECAUSE SITECONFIG IS UNDEFINED`),"";var s=ne()(o,"googleAnalytics"),r=ne()(s,"webPropertyId","UA-4300461-40"),s=s["rollupPropertyId"],o=ne()(o,"slug","fastcompany");const{postData:d,tagPageData:p,categoryPageData:l,mostCreativePeoplePageData:c,micSectorPageData:m,ibdPageData:u,productPageData:g,micYearPageData:y,type:h,supertags:f}=e;let v=null,b="",P,w=o,C=(i&&(w+="_FBIA"),[{dimension1:w},{dimension7:"homepage"},{dimension3:"Unassigned"},{dimension2:"Unassigned"},{dimension4:"Fast Company"},{dimension5:"Fast Company"},{dimension6:"1/1/1990"},{dimension8:0},{dimension9:0}]);e={post(){b=ne()(d,"categories[0].slug");var e=ne()(d,"tags"),t=Object(k.a)(e,f);v=ne()(d,"title");let a=null,n=(I()(e,e=>{-1===e.name.indexOf("byline_")&&-1===e.slug.indexOf("byline-")||(a=e.name.replace("byline_",""))}),"unassigned"),i=(n=ne()(d,"posterSlideshow.length")?"slideshow":!0===ne()(d,"hasVideoPoster")||ne()(d,"posterVideo.feedId")?"video":"article",ne()(d,"readTime"));"long"!==i&&(i=T()(i.replace(" minute",""))||"0"),C=[{dimension1:w},{dimension2:b},{dimension6:ne()(d,"formattedDate")},{dimension7:n},{dimension8:i},{dimension9:0}],a?(C.push({dimension4:a}),C.push({dimension5:ne()(d,"author.name","Fast Company")})):(C.push({dimension4:ne()(d,"author.name")}),C.push({dimension5:"Fast Company"})),t?C.push({dimension3:t}):C.push({dimension3:"notag"})},category(){b=ne()(l,"slug"),C=[{dimension1:w},{dimension2:b},{dimension7:"category page"},{dimension3:"notag"},{dimension4:"Fast Company"},{dimension5:"Fast Company"},{dimension6:"1/1/1990"},{dimension8:0},{dimension9:0}]},tag(){P=ne()(p,"name"),C=[{dimension1:w},{dimension3:P},{dimension7:"section page"},{dimension2:"Unassigned"},{dimension4:"Fast Company"},{dimension5:"Fast Company"},{dimension6:"1/1/1990"},{dimension8:0},{dimension9:0}]},author(){C=[{dimension1:w},{dimension7:h},{dimension3:"Unassigned"},{dimension2:"Unassigned"},{dimension4:"Fast Company"},{dimension5:"Fast Company"},{dimension6:"1/1/1990"},{dimension8:0},{dimension9:0}]},search(){C=[{dimension1:w},{dimension7:h},{dimension3:"Unassigned"},{dimension2:"Unassigned"},{dimension4:"Fast Company"},{dimension5:"Fast Company"},{dimension6:"1/1/1990"},{dimension8:0},{dimension9:0}]},page(){C=[{dimension1:w},{dimension7:h},{dimension3:"Unassigned"},{dimension2:"Unassigned"},{dimension4:"Fast Company"},{dimension5:"Fast Company"},{dimension6:"1/1/1990"},{dimension8:0},{dimension9:0}]},personPage(){C=[{dimension1:w},{dimension7:"person page"},{dimension3:"Unassigned"},{dimension2:"person"},{dimension4:"Fast Company"},{dimension5:"Fast Company"},{dimension6:"1/1/1990"},{dimension8:0},{dimension9:0}]},personIndexSectionPage(){C=[{dimension1:w},{dimension7:"person index page"},{dimension3:"Unassigned"},{dimension2:"person"},{dimension4:"Fast Company"},{dimension5:"Fast Company"},{dimension6:"1/1/1990"},{dimension8:0},{dimension9:0}]},productPage(){var e=ne()(g,"data.rows[0].name");C=[{dimension1:w},{dimension7:"product page"},{dimension3:"product:"+e},{dimension2:"product"},{dimension4:"Fast Company"},{dimension5:"Fast Company"},{dimension6:"1/1/1990"},{dimension8:0},{dimension9:0}]},mostCreativePeoplePage(){var e=ne()(c,"year","");C=[{dimension1:w},{dimension7:"mcp page"},{dimension3:"mcp"+e},{dimension2:"mcp"},{dimension4:"Fast Company"},{dimension5:"Fast Company"},{dimension6:"1/1/1990"},{dimension8:0},{dimension9:0}]},mostCreativePeopleCommunityPage(){C=[{dimension1:w},{dimension7:"mcp community page"},{dimension3:"Unassigned"},{dimension2:"mcp"},{dimension4:"Fast Company"},{dimension5:"Fast Company"},{dimension6:"1/1/1990"},{dimension8:0},{dimension9:0}]},ibdPage(){var e=ne()(u,"year","");C=[{dimension1:w},{dimension7:"ibd page"},{dimension3:"ibd"+e},{dimension2:"ibd"},{dimension4:"Fast Company"},{dimension5:"Fast Company"},{dimension6:"1/1/1990"},{dimension8:0},{dimension9:0}]},companyPage(){C=[{dimension1:w},{dimension7:"company page"},{dimension3:"company"},{dimension2:"company"},{dimension4:"Fast Company"},{dimension5:"Fast Company"},{dimension6:"1/1/1990"},{dimension8:0},{dimension9:0}]},micYearPage(){var e=ne()(y,"year","");C=[{dimension1:w},{dimension7:"mic year page"},{dimension3:"mic"+e},{dimension2:"mic"},{dimension4:"Fast Company"},{dimension5:"Fast Company"},{dimension6:"1/1/1990"},{dimension8:0},{dimension9:0}]},companyIndexSectionPage(){C=[{dimension1:w},{dimension7:"company sector index page"},{dimension3:"Unassigned"},{dimension2:"mic"},{dimension4:"Fast Company"},{dimension5:"Fast Company"},{dimension6:"1/1/1990"},{dimension8:0},{dimension9:0}]},micSectorPage(){var e=ne()(m,"year","");C=[{dimension1:w},{dimension7:"mic sector page"},{dimension3:"mic"+e},{dimension2:"mic"},{dimension4:"Fast Company"},{dimension5:"Fast Company"},{dimension6:"1/1/1990"},{dimension8:0},{dimension9:0}]},magazineArchivePage(){C=[{dimension1:w},{dimension7:"magazine archives page"},{dimension3:"magazine"},{dimension2:"magazine"},{dimension4:"Fast Company"},{dimension5:"Fast Company"},{dimension6:"1/1/1990"},{dimension8:0},{dimension9:0}]}},e[h]&&e[h](),o=C.map(e=>{var t;return e?`
      ga('rollup.set', '${t=Object.keys(e)[0]}', '${e[t]}');
    `:""}).join("");return`
  <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', '${r}', 'auto');
    ga('create', '${s}', 'auto', {'name': 'rollup'});
    ${o}
    ${v?`ga('set', 'title', '${v}');
    ga('rollup.set', 'title', '${v}');`:""}
    ga('send', 'pageview');
    ga('rollup.send', 'pageview');
    ga('require', 'eventTracker');
    ga('require', 'cleanUrlTracker');
    ga('require', 'impressionTracker');
    ga('require', 'mediaQueryTracker');
    ga('require', 'outboundFormTracker');
    ga('require', 'outboundLinkTracker');
    ga('require', 'pageVisibilityTracker');
    ga('require', 'socialWidgetTracker');
    ga('require', 'urlChangeTracker');
  </script>`}function l(e,t){var a=oe.a;return void 0===a?"":(a=ne()(a,"nielsen")["clientId"],"header"===t?`
      <script type="text/javascript">
        (function () {
          var d = new Image(1, 1);
          d.onerror = d.onload = function () {
          d.onerror = d.onload = null;
          };
          d.src = ["//secure-us.imrworldwide.com/cgi-bin/m?ci=${a}&cg=0&cc=1&si=", escape(window.location.href), "&rp=", escape(document.referrer), "&ts=compact&rnd=", (new Date()).getTime()].join('');
        })();

        function Nielsen_Event() {
          var d = new Image(1, 1);
          d.onerror = d.onload = function () { d.onerror = d.onload = null; };
          d.src = ["//secure-us.imrworldwide.com/cgi-bin/m?ci=${a}&cg=0&cc=1&si=", escape(window.location.href),
          "&rp=", escape(document.referrer),
          "&ts=compact&c0=usergen,1&rnd=",(new Date()).getTime()].join('');
        };
      </script>
    `:`<noscript><div><img src="//secure-us.imrworldwide.com/cgi-bin/m?ci=${a}&amp;cg=0&amp;cc=1&amp;ts=noscript" width="1" height="1" alt="" /></div></noscript>`)}function c(){var e=oe.a;return void 0===e?"":(e=ne()(e,"parsely")["domain"],`
    <div id="parsely-root" style="display: none">
      <span id="parsely-cfg" data-parsely-site="${e}"></span>
    </div>
    <script>
      var parselyPreload = { eventQueue: [], loaded: false };

      (function(s, p, d) {
      var h=d.location.protocol, i=p+"-"+s,
      e=d.getElementById(i), r=d.getElementById(p+"-root"),
      u=h==="https:"?"d1z2jf7jlzjs58.cloudfront.net"
      :"static."+p+".com";
      if (e) return;
      e = d.createElement(s); e.id = i; e.async = true;
      e.src = h+"//"+u+"/p.js"; r.appendChild(e);
      })("script", "parsely", document);

      function getCookie(e){for(var n=e+"=",t=decodeURIComponent(document.cookie).split(";"),o=0;o<t.length;o++){for(var r=t[o];" "==r.charAt(0);)r=r.substring(1);if(0==r.indexOf(n))return r.substring(n.length,r.length)}return""}
      const ab = getCookie('X-abtest') || 'unknown';

      window.PARSELY = window.PARSELY || {
        autotrack: false,
        onload: function() {
          parselyPreload.loaded = true;
          PARSELY.updateDefaults({
            data: {
              ab: ab
            }
          });
          PARSELY.beacon.trackPageView();
        }
      };
    </script>
  `)}function m(){var e=oe.a;return void 0===e?"":(e=ne()(e,"pingdom")["id"],`
    <script>
      var _prum = [['id', '${e}'],
      ['mark', 'firstbyte', (new Date()).getTime()]];
      (function() {
      var s = document.getElementsByTagName('script')[0]
      , p = document.createElement('script');
      p.async = 'async';
      p.src = '//rum-static.pingdom.net/prum.min.js';
      s.parentNode.insertBefore(p, s);
      })();
    </script>
  `)}var o=t(39),se=t.n(o),o=t(23),re=t.n(o),o=t(133),de=t.n(o),o=t(1024),pe=t.n(o),le=t(1193),ce=t(46),me=t(141);function u(t,e){var a,n=Object.keys(t);return Object.getOwnPropertySymbols&&(a=Object.getOwnPropertySymbols(t),e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,a)),n}function ue(n){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?u(Object(i),!0).forEach(function(e){var t,a;t=n,a=i[e=e],(e=function(e){e=function(e,t){if("object"!=typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0===a)return("string"===t?String:Number)(e);a=a.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}(e,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(i,e))})}return n}const ge=e=>{let t="2000-01-01T00:00:00Z";switch(e){case"list":t="2024-03-19T11:00:00Z";break;case"2023":t="2023-03-08T11:00:00Z";break;case"2022":t="2022-02-20T11:00:00Z";break;case"2019":t="2019-02-19T11:00:00Z";break;case"2018":t="2018-02-21T11:00:00Z";break;case"2017":t="2017-03-17T11:00:00Z";break;case"2016":t="2016-02-16T11:00:00Z";break;case"2015":t="2015-02-09T11:00:00Z";break;case"2014":t="2014-02-10T11:00:00Z";break;case"2013":t="2013-02-11T11:00:00Z";break;case"2012":t="2012-02-08T11:00:00Z";break;case"2011":t="2011-11-30T11:00:00Z";break;case"2010":t="2010-03-09T11:00:00Z";break;case"2009":t="2009-02-11T11:00:00Z";break;case"2008":t="2008-02-15T11:00:00Z"}return t};function g(e,j,$,t){const{tagPageData:a,authorAllFeed:x,categoryHomeList:R,companyPageData:M,giftGuideData:V,homeList:q,ibdPageData:z,jwPlaylistIndex:B,micYearPageData:n,micSectorPageData:i,mic2020YearPage:Y,mostCreativePeoplePageData:o,playlistAllFeedData:H,postData:s,productPageData:G,searchPageData:Z,staticPageData:K,tagHomeList:J,videoPageData:r,worldChangingIdeasPage:d,hubPage:p,queer50Page:l,micHubPage:c,mcpHubPage:m,franchisePage:u,brandsThatMatterPage:g,recognitionHubPage:y,eventsPage:Q,micYearModernPageData:h}=e;let f=e["type"];var e=e["config"],v=oe.a;const b=t.includes("?amp=")?t.split("?")[0]:t;if(void 0===v)return"";t="News"===ne()(s,"categories[0].name")?"NewsArticle":"Article";let P=[],w="",C="",I="",T="",D="",_="",L="",W,X,ee,k;let A={};s&&(P=ne()(s,"tags"),w=ne()(s,"title"),C=ne()(s,"excerpt",""),I=ne()(s,"author.name"),T=ne()(s,"author.slug",""),D=ne()(s,"categories[0].slug"),_=Object(me.a)(Object(me.c)(ne()(s,"featured_image.source")),me.f.meta,!0),/.gif$/.test(_)&&(_=_.replace("f_auto","f_jpg")),L=ne()(s,"structuredData.published"),k=ne()(s,"structuredData.modified"),W=re()(ne()(s,"featured_image.caption")||""),X=ne()(s,"featured_image.width")||700,ee=ne()(s,"featured_image.height")||700);v={humanReadable:"Fast Company",logo:{url:"https://assets.fastcompany.com/image/upload/v1510092328/fc-logo.webp",width:"346",height:"60"}};const E=ne()(v,"humanReadable"),O=ne()(v,"logo.url"),N=ne()(v,"logo.width"),S=ne()(v,"logo.height");var v=P.map(e=>e.name),te=Object(ce.isPremium)(P);s&&(U=(F=ne()(s,"live.posts",[])).length)&&(f="livePost",A={coverageStartTime:ne()(F[U-1],"published"),coverageEndTime:ne()(F,"[0].published"),liveBlogUpdate:F.map(e=>({"@type":"BlogPosting",headline:w,author:{"@type":"Person",name:ne()(e,"author.name")},publisher:{"@type":"Organization",name:E,logo:{"@type":"ImageObject",url:O,width:N,height:S}},url:b+"#update-"+ne()(e,"id"),datePublished:ne()(e,"published"),articleBody:re()(Object(le.a)(ne()(e,"content",[])))}))});const ae={};var U="2000-01-01T00:00:00Z",F={post:ue({"@type":t,headline:w,url:b,mainEntityOfPage:{"@id":b,"@type":"WebPage"},description:C,thumbnailUrl:_,dateCreated:L,datePublished:L,dateModified:k,articleSection:D,creator:I,author:{"@type":"Person",name:I,url:"https://www.fastcompany.com/user/"+T},keywords:v,image:{"@type":"ImageObject",caption:W,url:_,width:X,height:ee},publisher:{"@type":"Organization",name:E,logo:{"@type":"ImageObject",url:O,width:N,height:S}}},te&&{isAccessibleForFree:"False",hasPart:{"@type":"WebPageElement",isAccessibleForFree:"False",cssSelector:"#premiumPaywallContainer"}}),livePost:{"@type":"LiveBlogPosting",url:b,headline:w,datePublished:L,coverageStartTime:ne()(A,"coverageStartTime"),coverageEndTime:ne()(A,"coverageEndTime"),dateModified:k,publisher:{"@type":"Organization",name:E,logo:{"@type":"ImageObject",url:O,width:N,height:S}},liveBlogUpdate:ne()(A,"liveBlogUpdate")},homepage:{"@type":"CollectionPage",name:"Fast Company",url:b,description:"Fast Company is the world's leading progressive business media brand, with a unique editorial focus on innovation in technology, leadership, and design.",hasPart:{"@type":"ItemList",itemListElement:q.filter(e=>{e=e.url||e.link;return!!e&&-1!==e.indexOf(b)}).map((e,t)=>({"@type":"ListItem",position:t+1,url:e.url||`https://www.fastcompany.com/${ne()(e,"id")}/`+ne()(e,"slug")}))}},category:{"@type":"ItemList",url:b,dateCreated:U,datePublished:U,dateModified:U,itemListElement:R.map((e,t)=>({"@type":"ListItem",position:t+1,url:e.url||`https://www.fastcompany.com/${ne()(e,"id")}/`+ne()(e,"slug")}))},tag:()=>{var e=(null===a||void 0===a?void 0:a.name)||"";return{"@context":"https://schema.org","@type":"CollectionPage",name:e,url:b,description:`Collection of articles tagged with '${e}'`,hasPart:(J||[]).map((e,t)=>{var a,n=(e=>{let t=null;return(e||[]).forEach(e=>{-1===e.name.indexOf("byline_")&&-1===e.slug.indexOf("byline-")||(t=e.name.replace("byline_",""))}),t})((null==e?void 0:e.tags)||[]),i=(null==e||null==(i=e.author)?void 0:i.name)||"Unknown Author "+t,t=null==e||null==(t=e.author)?void 0:t.slug;return{"@type":"Article",headline:(null==e?void 0:e.title)||"",url:(null==e?void 0:e.link)||"",image:(null==e||null==(a=e.featured_image)?void 0:a.source)||"",author:{"@type":"Person",name:n||i,url:"https://www.fastcompany.com/"+(t?"/user/"+t:"")},datePublished:(null==e||null==(a=e.structuredData)?void 0:a.published)||"",dateModified:(null==e||null==(n=e.structuredData)?void 0:n.modified)||""}})}},author:{"@type":"ItemList",url:b,dateCreated:U,datePublished:U,dateModified:U,itemListElement:x.map((e,t)=>({"@type":"ListItem",position:t+1,url:e.url||`https://www.fastcompany.com/${ne()(e,"id")}/`+ne()(e,"slug")}))},personPage:{"@type":"ItemList",url:b,dateCreated:U,datePublished:U,dateModified:U,itemListElement:[]},mostCreativePeoplePage:()=>{var e;return e=b,0<Object.keys(ne()(o,"data",{})).length?{"@type":"ItemList",url:e,dateCreated:"2000-01-01T00:00:00Z",datePublished:"2000-01-01T00:00:00Z",dateModified:"2000-01-01T00:00:00Z",itemListElement:ne()(o,"data.rows",[]).map((e,t)=>({"@type":"ListItem",position:t+1,url:"https://www.fastcompany.com/person/"+e.url}))}:{"@type":"Guide",name:ne()(u,"data.acf.franchise_year","2022")+" Fast Company's Most Creative People List",dateCreated:"2022-06-08T06:00:41",datePublished:"2022-06-08T06:00:41",dateModified:"2022-06-08T06:00:41",hasPart:ne()(u,"data.externalList.people.records",[]).map((e,t)=>({"@type":"Recommendation",author:{"@type":"Organization",name:"Fast Company Staff"},itemReviewed:{"@type":"Person",name:ne()(e,'fields["Name"]',"Unknown Item "+t),url:ne()(e,'fields["Article URL"]',"")}}))}},ibdPage:{"@type":"ItemList",url:b,dateCreated:U,datePublished:U,dateModified:U,itemListElement:ne()(z,"data.rows",[]).map((e,t)=>({"@type":"ListItem",position:t+1,url:"https://www.fastcompany.com/innovation-by-design/2017/category/"+e.url}))},micYearPage:()=>{var e=ne()(n,"year",""),t="list"===e;let a=ne()(n,"data.rows",[]);return a=t?(a=ne()(h,"data.winners",[])).map(e=>({name:null==e?void 0:e["company name"],url:null==e?void 0:e["Article Link"]})):"2023"===e||"2022"===e?(a=ne()(h,"data.externalList",[])).map(e=>{var t;return{name:(null==e||null==(t=e.fields)?void 0:t["Company Name"])||(null==e?void 0:e["Company Name"])||"",url:(null==e||null==(t=e.fields)?void 0:t["Article Link"])||(null==e?void 0:e.URL)||""}}):(a=ne()(n,"data.rows",[])).map((e,t)=>({name:ne()(e,"name","Unknown Item "+t),url:"https://www.fastcompany.com/company/"+e.url})),{"@type":"Guide",name:"Most Innovative Companies "+(t?"2024":e),dateCreated:ge(e),datePublished:ge(e),dateModified:ge(e),hasPart:a.map((e,t)=>({"@type":"Recommendation",author:{"@type":"Organization",name:"Fast Company Staff"},itemReviewed:{"@type":"Organization",name:ne()(e,"name","Unknown Item "+t),position:t+1,url:""+e.url}}))}},"wci-list":{"@type":"Guide",name:"World Changing Ideas Awards "+ne()(d,"data.acf.franchise_year","2022"),dateCreated:ne()(d,"data.date","2022-05-03T06:00:41"),datePublished:ne()(d,"data.date","2022-05-03T06:00:41"),dateModified:ne()(d,"data.date","2022-05-03T06:00:41"),hasPart:ne()(d,"data.listData.winners.records",[]).map((e,t)=>({"@type":"Recommendation",author:{"@type":"Organization",name:"Fast Company Staff"},itemReviewed:{"@type":"Organization",name:ne()(e,'fields["Company Name"]',"Unknown Item "+t),url:ne()(e,'fields["Article Link"]',"")}}))},btmListPage:()=>{{var{wpData:e,airtableData:t}=g,n=null===g||void 0===g||null==(n=g.airtableData)||null==(n=n.metadata)?void 0:n.PageTitle,i=null===g||void 0===g||null==(i=g.wpData)||null==(i=i.acf)?void 0:i.title,o=null===g||void 0===g||null==(o=g.airtableData)?void 0:o.winners,s=null===g||void 0===g||null==(s=g.wpData)||null==(s=s.acf)?void 0:s.brandsThatMatterCompanies;let a=!t&&e?"companyName":t&&e?"title":"company";return{"@type":"Guide",name:n||i||"Fast Company's Brands That Matter",dateCreated:"2022-10-25T06:00:41",datePublished:"2022-10-25T06:00:41",dateModified:"2022-10-25T06:00:41",hasPart:(o||s||[]).map((e,t)=>({"@type":"Recommendation",author:{"@type":"Organization",name:"Fast Company Staff"},itemReviewed:{"@type":"Organization",name:ne()(e,a,"Unknown Item "+t),url:void 0}}))}}},"next-big-things-in-tech-list":()=>{var e,t={"@type":"Guide",name:(null==(e=null===u||void 0===u||null==(e=u.data)?void 0:e.externalList)||null==(t=e.metadata)?void 0:t.PageTitle)||"Fast Company's Next Big Things In Tech",dateCreated:"2022-11-20T06:00:41",datePublished:"2022-11-20T06:00:41",dateModified:"2022-11-20T06:00:41",hasPart:((null==e?void 0:e.winners)||[]).map((e,t)=>({"@type":"Recommendation",author:{"@type":"Organization",name:"Fast Company Staff"},itemReviewed:{"@type":"Organization",name:ne()(e,"company","Unknown Item "+t),url:"https://www.fastcompany.com/next-big-things-in-tech/list"}}))};return t},queer50Page:{"@type":"Guide",name:ne()(l,"data.acf.franchise_year","2022")+" Fast Company Queer 50 List",dateCreated:"2022-06-08T06:00:41",datePublished:"2022-06-08T06:00:41",dateModified:"2022-06-08T06:00:41",hasPart:ne()(l,"data.externalList.list.records",[]).map((e,t)=>({"@type":"Recommendation",author:{"@type":"Organization",name:"Fast Company Staff"},itemReviewed:{"@type":"Person",name:ne()(e,'fields["Name"]',"Unknown Item "+t),url:ne()(e,'fields["Article URL"]',"")}}))},bestWorkplacesPage:{"@type":"Guide",name:"Fast Company's Best Workplaces for Innovators List "+ne()(u,"data.acf.franchise_year","2022"),dateCreated:"2022-08-02T06:00:41",datePublished:"2022-08-02T06:00:41",dateModified:"2022-08-02T06:00:41",hasPart:ne()(u,"data.externalList.workplaces.records",[]).map((e,t)=>({"@type":"Recommendation",position:t+1,author:{"@type":"Organization",name:"Fast Company Staff"},itemReviewed:{"@type":"Organization",name:ne()(e,'fields["Company"]',"Unknown Item "+t),url:"https://www.fastcompany.com/best-workplaces-for-innovators/list/"+(t+1)}}))},hubPage:{"@type":"ItemList",url:b,itemListElement:[...ne()(p,"data.featured",[]),...ne()(p,"data.top",[])].map((e,t)=>{let a=null;ne()(e,"tags",[]).forEach(e=>{-1===e.name.indexOf("byline_")&&-1===e.slug.indexOf("byline-")||(a=e.name.replace("byline_",""))});var n=[...ne()(e,"tags",[]),...ne()(e,"categories",[])].filter(e=>!ne()(e,"name","").includes("byline")).map(e=>e.name);return{"@type":"ListItem",position:t+1,item:{"@type":"CreativeWork",headline:ne()(e,"title","Unknown Headline "+t),author:a||ne()(e,"author.name","Unknown Author "+t),url:ne()(e,"link"),datePublished:ne()(e,"datePublished"),keywords:n.join(",")}}})},micHubPage:{"@type":"CollectionPage",name:ne()(c,"data.acf.hub_page.hub_list_headline","Most Innovative Companies Hub"),url:b,dateCreated:"2022-04-26T06:00:01",datePublished:"2022-04-26T07:00:01",dateModified:ne()(c,"data.modified","2022-05-03T06:00:41"),mainEntity:{"@type":"ItemList",itemListElement:ne()(c,"data.featuredArticles.posts",[]).map((e,t)=>({"@type":"NewsArticle",name:ne()(e,"title","Unknown Headline "+t),image:ne()(e,"shareImage","https://images.fastcompany.net/image/upload/v1541101333/fcweb/FC-Twitter-Card_new2_mqyz2q.jpg"),url:e.link||"https://www.fastcompany.com/most-innovative-companies"}))}},micIxPage:{"@type":"CollectionPage",name:"Most Innovative Companies Index Page",url:b,dateCreated:"2024-01-25T06:00:01",datePublished:"2024-01-25T06:00:01",dateModified:"2024-01-25T06:00:01",mainEntityOfPage:b},mcpHubPage:{"@type":"CollectionPage",name:"Most Creative People Hub",url:b,dateCreated:"2023-07-25T06:00:01",datePublished:"2024-07-25T07:00:01",dateModified:ne()(m,"data.modified","2022-05-03T06:00:41"),mainEntity:{"@type":"ItemList",itemListElement:ne()(m,"data.featuredArticles.posts",[]).map((e,t)=>({"@type":"NewsArticle",name:ne()(e,"title","Unknown Headline "+t),image:ne()(e,"shareImage","https://images.fastcompany.net/image/upload/v1541101333/fcweb/FC-Twitter-Card_new2_mqyz2q.jpg"),url:e.link||"https://www.fastcompany.com/most-innovative-companies"}))}},mic2020YearPage:{"@type":"ItemList",name:"Most Innovative Companies 2020",url:b,dateCreated:"2020-03-10T11:00:00Z",datePublished:"2020-03-10T11:00:00Z",dateModified:"2020-03-10T11:00:00Z",itemListElement:ne()(Y,"companies",[]).map((e,t)=>({"@type":"ListItem",name:ne()(e,"title","Unknown Item "+t),position:t+1,url:""+e.link}))},micSectorPage:{"@type":"ItemList",url:b,dateCreated:U,datePublished:U,dateModified:U,itemListElement:ne()(i,"data.rows",[]).map((e,t)=>({"@type":"ListItem",position:t+1,url:`https://www.fastcompany.com/most-innovative-companies/${ne()(i,"data.year")}/sectors/`+ne()(e,"url")}))},giftGuidePage:{"@type":"ItemList",url:b,dateCreated:U,datePublished:U,dateModified:U,itemListElement:ne()(V,"data.rows",[]).map((e,t)=>({"@type":"ListItem",position:t+1,url:"https://www.fastcompany.com/gift-guide/holiday-2018/category/"+e.url}))},productPage:{"@type":"NewsArticle",headline:ne()(G,"data.rows[0].name"),url:b,dateCreated:U,datePublished:U,dateModified:U,mainEntityOfPage:b},companyPage:{"@type":"ItemList",url:b,dateCreated:U,datePublished:U,dateModified:U,itemListElement:ne()(M,"data.posts",[]).map((e,t)=>({"@type":"ListItem",position:t+1,url:e.link}))},videoIndexPage:{"@type":"ItemList",url:b,dateCreated:U,datePublished:U,dateModified:U,itemListElement:ne()(B,"data.playlists",[]).reduce((a,e)=>(ne()(e,"playlist",[]).forEach(e=>{var t=e.link,e=e.mediaid;ae.hasOwnProperty(e)||(a.push({"@type":"ListItem",position:a.length+1,url:t}),ae[e]=!0)}),a),[])},videoPage:{"@type":"VideoObject",url:b,dateCreated:U,datePublished:U,dateModified:U,name:ne()(r,"data.playlist[0].title",""),description:ne()(r,"data.playlist[0].description",""),thumbnailUrl:Object(me.a)(Object(me.c)(ne()(r,"data.playlist[0].featured_image.source","")),me.f.meta,!0),uploadDate:ne()(r,"data.playlist[0].structuredData.published",""),transcript:ne()(r,"data.videoSeoText",""),duration:`PT${ne()(r,"data.playlist[0].duration","")}S`,contentUrl:ne()(r,"data.playlist[0].sources[4].file","")},videoPlaylistPage:{"@type":"ItemList",url:b,dateCreated:U,datePublished:U,dateModified:U,itemListElement:ne()(H,"data.playlist",[]).map((e,t)=>{return{"@type":"ListItem",position:t+1,url:e.link}})},search:{"@type":"ItemList",url:b,dateCreated:U,datePublished:U,dateModified:U,itemListElement:ne()(Z,"entry",[]).map((e,t)=>({"@type":"ListItem",position:t+1,url:e.link}))},page:{"@type":"NewsArticle",headline:ne()(K,"title.rendered"),url:b,dateCreated:U,datePublished:U,dateModified:U,mainEntityOfPage:b},applyPage:{},recognitionHubPage:{"@type":"CollectionPage",name:ne()(y,"acf.franchise_title","Fast Company Lists"),url:b,dateCreated:ne()(y,"date",U),datePublished:ne()(y,"date",U),dateModified:ne()(y,"modified",U),mainEntity:{"@type":"ItemList",itemListElement:ne()(y,"acf.recognition_hub_list_content.0.franchise_list_entry",[]).map((e,t)=>({"@type":"ListItem",position:t+1,url:e.button_url||e.program_link}))}},eventsPage:()=>{const{view:e,data:{events:t,video:n}}=Q,a={"@context":"http://schema.org","@type":"Organization",name:"Fast Company",logo:{"@context":"http://schema.org","@type":"ImageObject",url:"https://assets.fastcompany.com/image/upload/v1675893141/fc/fc-logo-black.png",height:44,width:288},url:"https://www.fastcompany.com/"};var i=()=>{var e;return n?(de.a.extend(pe.a),{"@context":"http://schema.org","@type":"VideoObject","@id":`https://www.fastcompany.com/events/video/${n.slug}/`+n.id,description:""+((null===n||void 0===n?void 0:n.description)||""),url:`https://www.fastcompany.com/events/video/${n.slug}/`+n.id,name:""+((null===n||void 0===n?void 0:n.title)||""),thumbnailUrl:""+((null===n||void 0===n?void 0:n.thumbnailUrl)||""),publisher:ue({},a),contentUrl:""+((null===n||void 0===n?void 0:n.videoFileUrl)||""),uploadDate:""+((null===n||void 0===n?void 0:n.created)||""),transcript:""+((null===n||void 0===n||null==(e=n.moments)||null==(e=e.map(e=>e.description))?void 0:e.join(" "))||""),duration:""+(null!==n&&void 0!==n&&n.duration?de.a.duration(n.duration).toISOString():""),hasPart:null===n||void 0===n?void 0:n.moments.map(({title:e,startTimestamp:t,endTimestamp:a})=>{t="number"==typeof t?Math.floor(t/1e3):0;return{"@type":"Clip",name:e,startOffset:t,endOffset:"number"==typeof a?Math.floor(a/1e3):0,url:`https://www.fastcompany.com/events/video/${n.slug}/${n.id}?t=`+t}})}):{}};switch(e){case"video":return i();case"calendar":var o=null===t||void 0===t?void 0:t.items;return o?o.map(e=>{var t=(null==e?void 0:e.c_6615)||"",a=(null==e?void 0:e.c_70546)||"",n=(null==e?void 0:e.start_date)||"",i=(null==e?void 0:e.end_date)||"",o=(null==e?void 0:e.c_70826)||"",s=null!=e&&e.url?"https://events.fastcompany.com/"+e.url:"",r=(null==e?void 0:e.status)||"live";return ue(ue({"@context":"https://schema.org","@type":"Event",name:t,startDate:n,endDate:i,eventStatus:"live"===r?"https://schema.org/EventScheduled":"https://schema.org/EventCancelled"},((e,t)=>{var a=null==e?void 0:e.event_venue_type;const n=null==e?void 0:e.location;let i={};if(!a)return{};var o=()=>({"@type":"VirtualLocation",url:t}),s=()=>({"@type":"Place",name:null===n||void 0===n?void 0:n.name,address:{"@type":"PostalAddress",streetAddress:null===n||void 0===n?void 0:n.line_1,addressLocality:null===n||void 0===n?void 0:n.city,postalCode:null===n||void 0===n?void 0:n.zip,addressRegion:null===n||void 0===n?void 0:n.state,addressCountry:null===n||void 0===n?void 0:n.country_code}});switch(a){case"In Person Only":i={eventAttendanceMode:"https://schema.org/OfflineEventAttendanceMode",location:s()};break;case"Virtual Only":i={eventAttendanceMode:"https://schema.org/OnlineEventAttendanceMode",location:o()};break;case"Hybrid":i={eventAttendanceMode:"https://schema.org/MixedEventAttendanceMode",location:[o(),s()]}}return i})(e,s)),{},{image:o,description:a,offers:{"@type":"Offer",url:s,priceCurrency:"USD",availability:"closed"===r?"https://schema.org/SoldOut":"https://schema.org/InStock"},organizer:{"@type":"Organization",name:"Fast Company",url:"https://www.fastcompany.com/"}})}):{};default:return{}}}},t="function"==typeof F[f]?F[f]():F[f],v=F[f];return v||ie.a.error(`Structured Data Type Lookup: ${f} not found on url: `+ne()(e,"navHistory[0]")),v?`<script type="application/ld+json">${JSON.stringify(se()({"@context":"https://schema.org"},t))}</script>`:""}function h(){return void 0===oe.a?"":'<script type="text/javascript" src="https://s.skimresources.com/js/122276X1583643.skimlinks.js" async><\/script>'}var A=t(261);function P(){return'<script type="text/javascript" src="//www.queryly.com/js/queryly.v4.js" defer><\/script><script type="text/javascript" defer src="//www.queryly.com/js/fastcompany-advanced-search.js"><\/script>'}function w(e){var t=e["type"];if(void 0===oe.a)return"";let a="",n="",i="";switch(t){case"post":var o=[],s=ne()(e,"postData.categories[0].name","");"Advertorial"===s?o.push(s):o.push("Editorial Content",s),a=o.join(","),n=ne()(e,"postData.author.name",""),i=ne()(e,"postData.title","");break;case"homepage":i="Homepage";break;case"micYearPage":a="Mic Year Page",i=ne()(e,"micYearPageData.year","");break;case"micSectorPage":a="Mic Sector Page",i=ne()(e,"micYearPageData.year","");break;case"videoIndexPage":i="Video Index Page";break;case"videoPage":a="Video",i=ne()(e,"videoPageData.data.title","");break;case"category":a="Category",i=ne()(e,"categoryPageData.data.title","");break;case"giftGuidePage":a="Gift Guide",i="Gift Guide "+ne()(e,"giftGuideData.year","")}t=e=>e.replace("'","");return`
    <script type='text/javascript'>
      (function() {
        /** CONFIGURATION START **/
        var _sf_async_config = window._sf_async_config = (window._sf_async_config || {});

        _sf_async_config.uid = 2768;
        _sf_async_config.domain = 'fastcompany.com';
        _sf_async_config.flickerControl = false;
        _sf_async_config.useCanonical = true;
        _sf_async_config.useCanonicalDomain = true;
        _sf_async_config.sections = '${t(a)}';
        _sf_async_config.authors = '${t(n)}';
        _sf_async_config.title = '${t(i)}';
        /** CONFIGURATION END **/
        function loadChartbeat() {
            var e = document.createElement('script');
            var n = document.getElementsByTagName('script')[0];
            e.type = 'text/javascript';
            e.async = true;
            e.src = '//static.chartbeat.com/js/chartbeat.js';
            n.parentNode.insertBefore(e, n);
        }
        var oldonload = window.onload;
        window.onload = (typeof window.onload != 'function') ? loadChartbeat : function() { oldonload(); loadChartbeat(); };
      })();
    </script>
  `}function C(){return`
  <script>
      //informer
      (function(f,i,c){var a=decodeURIComponent,e="",l="",o="||",g=";;",h="split",b="length",j="indexOf",k=0,n="localStorage",m="_ccmdt";f[c]=f[c]||{};function d(q){var p;if(f[n]){return f[n][q]||""}else{p=i.cookie.match(q+"=([^;]*)");return(p&&p[1])||""}}f[c].us={};e=a(d(m))[h](o);k=e[b];if(k>0){while(k--){l=e[k][h]("=");if(l[b]>1){if(l[1][j](g)>-1){f[c].us[l[0]]=l[1][h](g);f[c].us[l[0]].pop()}else{f[c].us[l[0]]=l[1]}}}}})(window,document,"_ml");

      //tag
      (function () {
        _ml = window._ml || {};
        _ml.eid = '50190';
        _ml.informer = {
          callback: function (gaSet,gaSend) { //call back when profile is loaded
            if (typeof digitalData != 'undefined' && !_ml.isEmptyObj(_ml.us)) {
              var dlObj = {
                'CompanyRevenue': _ml.us.cr,
                'CompanySize': _ml.us.cs,
                'CompanyDomain': _ml.us.dm,
                'CompanyInstall': (_ml.us.ins && _ml.us.ins.length > 0) ? _ml.us.ins[0] : '',
                'FunctionalArea': (_ml.us.fa && _ml.us.fa.length > 0) ? _ml.us.fa[0] : '',
                'Profession': (_ml.us.pg && _ml.us.pg.length > 0) ? _ml.us.pg[0] : '',
                'Seniority': _ml.us.sn,
                'DecisionMaker': _ml.us.dcm,
                'Education': _ml.us.edu
              };

              var updatedBomoraData = Object.assign(digitalData.user[0].profile[0].attributes.bombora, dlObj);
              digitalData.user[0].profile[0].attributes.bombora = updatedBomoraData;
              digitalData.page.pageInfo.mlTopic = _ml.us.tp;
              digitalData.page.pageInfo.mlCategory = _ml.us.pc;
            }
          },
          enable: true
        };
        var s = document.getElementsByTagName('script')[0], cd = new Date(), mltag = document.createElement('script');
        mltag.type = 'text/javascript'; mltag.async = true;
        mltag.src = 'https://ml314.com/tag.aspx?' + cd.getDate() + cd.getMonth() + cd.getFullYear();
        s.parentNode.insertBefore(mltag, s);
      })();
    </script>
  `}const{PIANO_AID:f,PIANO_URL:D,PIANO_API_URL:_}=Object({NODE_ENV:"production",RUNTIME_ENV:"browser",PIANO_AID:"UnG6aKcRpu",PIANO_URL:"api.tinypass.com/",PIANO_API_URL:"api.tinypass.com/",SEEN_KEY:"LKu3p9ET6sVeUQtz4noKJKlVYu7QsT1c",SEEN_API_URL:"https://api.cs.seeen.com/graphql/"});function L(e={}){e=(e=>{const{type:t,postData:r,categoryPageData:a,tagPageData:n,authorPageData:i,supertags:d}=e;e={post(){var e=ne()(r,"tags",[]),t=Object(k.a)(e,d);let a="",n=(r.author&&""!==r.author.name&&(a=r.author.name),""),i=(r.categories&&0<r.categories.length&&void 0!==r.categories[0]&&(n=r.categories[0].name),"");i=r.categories&&0<r.categories.length&&void 0!==r.categories[1]?r.categories[1].name:n;var t=t||"misc",o=ne()(r,"formattedDate","")?""+ne()(r,"formattedDate",""):"",e=!!e.filter(e=>e.name.includes("_advertorial")).length;let s="article";return ne()(r,"posterSlideshow.length")?s="slideshow":!0!==ne()(r,"hasVideoPoster")&&!ne()(r,"posterVideo.feedId")||(s="video"),`
        tp.push(["setContentSection", "${n}"]);
        // tp.push(["setContentSection", "${i}"]);
        tp.push(["setContentAuthor", "${a}"]);
        tp.push(["setContentCreated", "${o}"]);
        tp.push(["setCustomVariable", "primaryCategory", "${n}"]);
        tp.push(["setCustomVariable", "subCategory1", "${i}"]);
        tp.push(["setCustomVariable", "subCategory2", "${t}"]);
        tp.push(["setCustomVariable", "contentType", "${s}"]);
        tp.push(["setCustomVariable", "articleType", "${s}"]);
        tp.push(["setCustomVariable", "isSponsored", "${e}"]);
        tp.push(["setTags", [${ne()(r,"tags",[]).map(e=>`"${ne()(e,"name","").replace(/"/g,"")}"`).join()}]]);
      `},category(){var e=ne()(a,"slug","news");return`
        tp.push(["setContentSection", "${e}"]);
        tp.push(["setCustomVariable", "primaryCategory", "${e}"]);
        tp.push(["setCustomVariable", "contentType", "category"]);
        tp.push(["setTags", ["categoryPage", "${e}"]]);
      `},tag(){var e=ne()(n,"slug","news");return`
        tp.push(["setContentSection", "${e}"]);
        tp.push(["setCustomVariable", "primaryCategory", "${e}"]);
        tp.push(["setCustomVariable", "contentType", "tag"]);
        tp.push(["setTags", ["tagPage", "${e}"]]);
      `},homepage(){var e="homepage";return`
        tp.push(["setCustomVariable", "contentType", "${e}"]);
        tp.push(["setContentSection", "${e}"]);
        tp.push(["setTags", ["${e}"]]);
      `},author(){var e="author";return`
        tp.push(["setCustomVariable", "contentType", "${e}"]);
        tp.push(["setContentSection", "${e}"]);
        tp.push(["setContentAuthor", "${ne()(i,"name","Unknown Author")}"]);
        tp.push(["setTags", ["${e}"]]);
      `},micYearPage(){var e="recognition";return`
        tp.push(["setCustomVariable", "contentType", "${e}"]);
        tp.push(["setContentSection", "${e}"]);
        tp.push(["setTags", ["${e}Page", "franchisePage", "mic"]]);
      `},bestWorkplacesPage(){var e="recognition";return`
        tp.push(["setCustomVariable", "contentType", "${e}"]);
        tp.push(["setContentSection", "${e}"]);
        tp.push(["setTags", ["${e}Page", "franchisePage", "best workplaces"]]);
      `},mostCreativePeoplePage(){var e="recognition";return`
        tp.push(["setCustomVariable", "contentType", "${e}"]);
        tp.push(["setContentSection", "${e}"]);
        tp.push(["setTags", ["${e}Page", "franchisePage", "mcp"]]);
      `},queer50Page(){var e="recognition";return`
        tp.push(["setCustomVariable", "contentType", "${e}"]);
        tp.push(["setContentSection", "${e}"]);
        tp.push(["setTags", ["${e}Page", "franchisePage", "q50"]]);
      `},ibdPage(){var e="recognition";return`
        tp.push(["setCustomVariable", "contentType", "${e}"]);
        tp.push(["setContentSection", "${e}"]);
        tp.push(["setTags", ["${e}Page", "franchisePage", "ibd"]]);
      `},editorialFranchise(){var e="recognition";return`
        tp.push(["setCustomVariable", "contentType", "${e}"]);
        tp.push(["setContentSection", "${e}"]);
        tp.push(["setTags", ["${e}Page", "franchisePage"]]);
      `},"wci-list":()=>{var e="recognition";return`
        tp.push(["setCustomVariable", "contentType", "${e}"]);
        tp.push(["setContentSection", "${e}"]);
        tp.push(["setTags", ["${e}Page", "franchisePage", "wci"]]);
      `}};return e[t]?e[t]():""})(e);return`
    <!-- Piano -->
    <script>
      (function() {
        tp = window["tp"] || [];
        tp.push(["setAid", '${f}']);
        tp.push(["setEndpoint", 'https://${_}/api/v3']);

        ${e}

        tp.push(["setUseTinypassAccounts", false ]);
        tp.push(["setUsePianoIdUserProvider", true ]);

        // Execute when the page is initially loaded
        tp.push(["init", function() {
            tp.pianoId.init({
                displayMode: 'modal',
                width: 550
            });
            tp.experience.init();
        }]);

        (function(src){
          var a=document.createElement("script");
          a.type="text/javascript";
          a.async=true;
          a.src=src;
          var b=document.getElementsByTagName("script")[0];
          b.parentNode.insertBefore(a,b)
        })("//${D}/xbuilder/experience/load?aid=${f}&ccb=z2x");
      })();
    </script>

    <!-- attempt adblk -->
    <script>
      document.cookie = "__adblocker=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
      var setNptTechAdblockerCookie = function(adblocker) {
          var d = new Date();
          d.setTime(d.getTime() + 60 * 5 * 1000);
          document.cookie = "__adblocker=" + (adblocker ? "true" : "false") + "; expires=" + d.toUTCString() + "; path=/";
      };
      var script = document.createElement("script");
      script.setAttribute("async", true);
      script.setAttribute("src", "//www.npttech.com/advertising.js");
      script.setAttribute("onerror", "setNptTechAdblockerCookie(true);");
      document.getElementsByTagName("head")[0].appendChild(script);
    </script>
  `}function O(){return`
    <script type="text/javascript" src="https://www.knotch-cdn.com/unit/latest/knotch.min.js" async></script>
  `}var o=t(296),E=t.n(o);function N(e,t,a,n){const i=oe.a;if(void 0===i)return"";const{postData:u,tagPageData:o,categoryPageData:s,authorPageData:r,staticPageData:d,mostCreativePeoplePageData:p,personPageData:l,statusCode:c,ibdPageData:m,companyPageData:g,micYearPageData:y,micSectorPageData:h,videoPageData:f,playlistAllFeedData:v,type:b,config:P,supertags:w}=e,C=e=>Math.round(((new Date).getTime()-new Date(e))/864e5),I=ne()(P,"navHistory[0]","unknown");let T=ne()(P,"abgroup","0"),D=!1,_=(T=T||void 0,{page:{category:{primaryCategory:"FastCompany",subCategory1:"",subCategory2:""},pageInfo:{pageName:"fastcompany:missing",publisher:"fast company",author:"fast company",authorStatus:"staff",editorName:"FC Editor",pageID:"fc-default-id",destinationURL:"https://www.fastcompany.com/?untracked="+I,server:"fc-node",urlText:"",infiniteScrollIndex:1,pubdate:"1995-11-01",daysSincePubdate:-1,type:"",contentType:"",editTags:"",referringURL:"",paragraphCount:"",fbPixelID:"1389601884702365",premium:!1}},user:[{profile:[{address:{stateProvince:"",postalCode:""},attributes:{isLoggedIn:ne()(P,"auth.loggedIn",""),bombora:{security:{CompanyRevenue:["Analytics","Personalization"],CompanySize:["Analytics","Recommendations","Personalization"],CompanyDomain:["Analytics","Recommendations","Personalization"],CompanyInstall:["Analytics","Personalization"],FunctionalArea:["Analytics","Recommendations","Personalization"],Profession:["Analytics","Recommendations","Personalization"],Seniority:["Analytics","Recommendations","Personalization"],DecisionMaker:"Personalization",Education:"Analytics"}}},profileInfo:{profileID:""}}],segment:{abGroup:T}}]});var L={homepage(){return E()({},_,{page:{pageInfo:{pageName:"Homepage",destinationURL:"https://www.fastcompany.com",fbPixelID:"1389601884702365"},category:{primaryCategory:"homepage",subCategory1:"homepage",subCategory2:"homepage"}}})},post(){var e=u.title,t=u.link,a=ne()(u,"tags"),a=Object(k.a)(a,w);let n="",i=(u.author&&""!==u.author.name&&(n=u.author.name),""),o=(u.categories&&0<u.categories.length&&void 0!==u.categories[0]&&(i=u.categories[0].name),"");o=u.categories&&0<u.categories.length&&void 0!==u.categories[1]?u.categories[1].name:i;a=a||"misc";function s(e){let t=e;return t=t.replace(/[*&]/g,"").replace(/\s?_advertorial/g,"").toLowerCase().trim()}var r=u.tags.map(e=>e.name).join(","),d=u.formattedDate?""+u.formattedDate:"";let p="article";ne()(u,"posterSlideshow.length")?p="slideshow":!0!==ne()(u,"hasVideoPoster")&&!ne()(u,"posterVideo.feedId")||(p="video");var l=u.slug.replace(/-/g," "),c=ne()(u,"totalParagraphs",""),m=1<ne()(u,"content",[]).length?ne()(u,"content",[]).length-1:0;return E()({},_,{page:{pageInfo:{pageName:e,pageID:"fc"+u.id,destinationURL:""+t,referringURL:"",author:n,editorName:"FC Editor",pubdate:d,daysSincePubdate:C(d),type:p,publisher:"fast company",server:"fc-node",urlText:l,editTags:r,infiniteScrollIndex:1,paragraphCount:c,mobileInsertionAdCount:m,fbPixelID:"1389601884702365",premium:Object(ce.isPremium)(ne()(u,"tags",[]))},category:{primaryCategory:""+i,subCategory1:a.includes("_advertorial")?s(a):""+o,subCategory2:a.includes("_advertorial")?s(a):""+a}}})},page(){return E()({},_,{page:{pageInfo:{pageName:ne()(d,"slug")+" | page",destinationURL:ne()(i,"url")+"/"+ne()(d,"slug"),type:"page",fbPixelID:"1389601884702365"}}})},category(){var e=ne()(s,"slug","news");return E()({},_,{page:{pageInfo:{pageName:s.name+" | "+s.taxonomy,destinationURL:ne()(i,"url")+"/"+e,type:"category page",contentType:"lander",editTags:""+e,pageID:`fc-category-${e}-`+s.id,fbPixelID:"1389601884702365"},category:{primaryCategory:""+e,subCategory1:""+e,subCategory2:""+e}}})},tag(){var e=ne()(o,"slug","tag"),t=ne()(o,"slug","").toLowerCase().includes("advertorial");function a(e){let t=e;return t=t.replace(/[*&]/g,"").replace(/\s?_advertorial/g,"").toLowerCase().trim()}return E()({},_,{page:{pageInfo:{pageName:e+" | tag",destinationURL:ne()(i,"url")+"/section/"+e,type:"section",contentType:"collection",editTags:""+e,pageID:`fc-tag-${e}-`+o.id,fbPixelID:"1389601884702365"},category:{primaryCategory:t?"advertorial":e,subCategory1:t?a(e):e,subCategory2:t?a(e):e}}})},author(){var e=ne()(r,"slug","fastcompany-staff"),t=ne()(r,"name","Fastcompany Staff");return E()({},_,{page:{pageInfo:{pageName:t+" | author",author:t,destinationURL:ne()(i,"url")+"/user/"+e,pageID:"fc-author-"+r.id,contentType:"lander",type:"author page",fbPixelID:"1389601884702365"},category:{primaryCategory:"author",subCategory1:t,subCategory2:t}}})},videoPage(){var e,t,a=ne()(f,"data.playlist[0]",null);return a?(e=ne()(a,"id"),t="",t=a.tags.map(e=>e.name).join(","),E()({},_,{page:{pageInfo:{pageName:ne()(a,"title"),author:"fast company video",editorName:"FC Video",destinationURL:ne()(a,"link"),pubdate:ne()(a,"formattedDate",""),daysSincePubdate:C(ne()(a,"formattedDate","")),contentType:"video",type:"video_page",editTags:t,pageID:"fc-jw"+e,fbPixelID:"1389601884702365"},category:{primaryCategory:"video",subCategory1:a.series,subCategory2:a.category.toLowerCase()}}})):{}},companyPage(){var e=ne()(g,"data.tags[0].name",""),t=ne()(g,"data.tags[0].slug",""),a=ne()(g,"data.tags[0].id","");return E()({},_,{page:{pageInfo:{destinationURL:ne()(i,"url")+"/company/"+t,pageName:e+" | company",pageID:"fc-company-"+a,contentType:"company profile",type:"company page",pubdate:"2019-02-20",daysSincePubdate:C("2019-02-20"),editTags:e+",mic,most innovative companies",fbPixelID:"1389601884702365"},category:{primaryCategory:"award",subCategory1:"most innovative companies",subCategory2:"company"}}})},mostCreativePeoplePage(){var e=ne()(p,"year","");return E()({},_,{page:{pageInfo:{pageName:e?`mcp ${e} | lander`:"mcp default | lander",destinationURL:e?ne()(i,"url")+"/most-creative-people/"+e:ne()(i,"url")+"/most-creative-people",editTags:e+",mcp,most creative people",contentType:"lander",type:"mcp page",pageID:"fc-mcp-"+e,fbPixelID:"1389601884702365"},category:{primaryCategory:"award",subCategory1:"most creative people",subCategory2:"year"}}})},personPage(){var e=ne()(l,"data.rows[0].url",""),t=ne()(l,"data.rows[0].first_name","")+" "+ne()(l,"data.rows[0].last_name",""),a=ne()(l,"data.rows[0].companies",""),n=ne()(l,"data.rows[0].id",""),a=a.map(e=>e.name).join(",");return E()({},_,{page:{pageInfo:{pageName:t+" | person",contentType:"profile",destinationURL:ne()(i,"url")+"/person/"+e,type:"person",editTags:t+`,${a},mcp,most creative people`,pageID:"fc-person-"+n,fbPixelID:"1389601884702365"},category:{primaryCategory:"awards",subCategory1:"most creative people",subCategory2:"person"}}})},micYearPage(){var e=ne()(y,"year","");return E()({},_,{page:{pageInfo:{pageName:e?`mic ${e} | lander`:"mic default | lander",destinationURL:e?ne()(i,"url")+"/most-innovative-companies/"+e:ne()(i,"url")+"/most-innovative-companies",editTags:e+",mic,most innovative companies",contentType:"lander",type:"mic page",pageID:"fc-mic-"+e,fbPixelID:"1389601884702365"},category:{primaryCategory:"award",subCategory1:"most innovative companies",subCategory2:"year"}}})},mic2020YearPage(){return E()({},_,{page:{pageInfo:{pageName:"mic 2020 | lander",destinationURL:ne()(i,"url")+"/most-innovative-companies/2020",editTags:"2020,mic,most innovative companies",contentType:"lander",type:"mic page",pageID:"fc-mic-2020",fbPixelID:"1389601884702365"},category:{primaryCategory:"award",subCategory1:"most innovative companies",subCategory2:"year"}}})},micSectorPage(){var e=ne()(h,"year",""),t=ne()(h,"sector","");return E()({},_,{page:{pageInfo:{pageName:`Most Innovative Companies ${e} `+t,destinationURL:ne()(i,"url")+`/most-innovative-companies/${e}/`+t,editTags:t+`,${e},mic,most innovative companies`,contentType:"lander",type:"mic sector page",pageID:"fc-mic-"+t,fbPixelID:"1389601884702365"},category:{primaryCategory:"award",subCategory1:"most innovative companies",subCategory2:"sector"}}})},ibdPage(){var e=ne()(m,"year","");return E()({},_,{page:{pageInfo:{pageName:e?`ibd ${e} | lander`:"ibd default | lander",destinationURL:e?ne()(i,"url")+"/innovation-by-design/"+e:ne()(i,"url")+"/innovation-by-design",editTags:e+",ibd,innovation by design",pageID:"fc-ibd-"+e,type:"ibd year page",contentType:"lander",fbPixelID:"1389601884702365"},category:{primaryCategory:"awards",subCategory1:"innovation by design",subCategory2:"lander"}}})},search(){var e=ne()(n.split("?searchkey="),"[1]","");return E()({},_,{page:{pageInfo:{pageName:e+" | search",destinationURL:ne()(i,"url")+"/search",pageID:"fc-search-"+e,editTags:e+",search",type:"search page",contentType:"lander",fbPixelID:"1389601884702365"},category:{primaryCategory:"search",subCategory1:e,subCategory2:"lander"}}})},videoPlaylistPage(){var e=ne()(v,"data.feedid"),t=ne()(v,"data.kind").toLowerCase(),a=ne()(v,"data.slug");return E()({},_,{page:{pageInfo:{pageID:"fc-video-playlist-"+e,pageName:t+" | video playlist",destinationURL:`https://www.fastcompany.com/videos/playlist/${a}/`+e,type:"video playlist",contentType:"lander",fbPixelID:"1389601884702365"},category:{primaryCategory:"video",subCategory1:t,subCategory2:"playlist"}}})},videoIndexPage(){return E()({},_,{page:{pageInfo:{pageID:"fc-video-lander",pageName:"Video Landing Page",destinationURL:ne()(i,"url")+"/videos",type:"video page",contentType:"lander",fbPixelID:"1389601884702365"},category:{primaryCategory:"video",subCategory1:"video",subCategory2:"lander"}}})},staticPage(){return n.includes("/newsletters")?E()({},_,{page:{pageInfo:{pageID:"fc-newsletter-lander",pageName:"Newsletters Landing Page",destinationURL:ne()(i,"url")+"/newsletters",type:"newsletter page",contentType:"lander",fbPixelID:"1389601884702365"},category:{primaryCategory:"Systems",subCategory1:"newsletter",subCategory2:"lander"}}}):E()({},_)},sitemapIndexPage(){return E()({},_,{page:{pageInfo:{pageID:"fc-sitemap-lander",pageName:"Site Map Index Page",destinationURL:ne()(i,"url")+"/sitemap",type:"sitemap page",contentType:"lander",fbPixelID:"1389601884702365"},category:{primaryCategory:"sitemap",subCategory1:"sitemap",subCategory2:"lander"}}})},sitemapPostPage(){return E()({},_,{page:{pageInfo:{pageID:"fc-sitemap-post",pageName:"Site Map Post Page",destinationURL:ne()(i,"url")+"/sitemap",type:"sitemap post page",contentType:"lander",fbPixelID:"1389601884702365"},category:{primaryCategory:"sitemap",subCategory1:"sitemap",subCategory2:"lander"}}})},pianoPage(){return E()({},_,{page:{pageInfo:{pageID:"fc-piano-page",pageName:"Piano Page",type:"piano page",destinationURL:I,contentType:"lander",fbPixelID:"1389601884702365"},category:{primaryCategory:"Systems",subCategory1:"pianoPage",subCategory2:"lander"}}})},applyPage(){return E()({},_,{page:{pageInfo:{pageID:"fc-apply-page",pageName:"Apply Page",type:"apply page",destinationURL:I,contentType:"lander",fbPixelID:"1389601884702365"},category:{primaryCategory:"Systems",subCategory1:"applyPage",subCategory2:"lander"}}})}};if(L[b])try{_=L[b]()}catch(e){D=!0}return(D||c&&404===c)&&(_=E()({},_,{page:{pageInfo:{pageName:"status-"+c,type:"status",destinationURL:I,contentType:"lander",editTags:""+c,pageID:"fc-"+c,fbPixelID:"1389601884702365"},category:{primaryCategory:"404",subCategory1:"404",subCategory2:"404"}}})),Object(A.a)(e),`<script>
      window.digitalData = {
        page: ${JSON.stringify(ne()(_,"page",""))},
        user: ${JSON.stringify(ne()(_,"user",""))}
      };
    </script>
  `}function S(){return`
    <script>
    !function(e){if(!window.pintrk){window.pintrk = function () {
    window.pintrk.queue.push(Array.prototype.slice.call(arguments))};var
      n=window.pintrk;n.queue=[],n.version="3.0";var
      t=document.createElement("script");t.async=!0,t.src=e;var
      r=document.getElementsByTagName("script")[0];
      r.parentNode.insertBefore(t,r)}}("https://s.pinimg.com/ct/core.js");
    pintrk('load', '2613508785281', {em: '<user_email_address>'});
    pintrk('page');
    </script>
    <noscript>
    <img height="1" width="1" style="display:none;" alt=""
      src="https://ct.pinterest.com/v3/?event=init&tid=2613508785281&pd[em]=<hashed_email_address>&noscript=1" />
    </noscript>
  `}function U(){var{}=Object({NODE_ENV:"production",RUNTIME_ENV:"browser",PIANO_AID:"UnG6aKcRpu",PIANO_URL:"api.tinypass.com/",PIANO_API_URL:"api.tinypass.com/",SEEN_KEY:"LKu3p9ET6sVeUQtz4noKJKlVYu7QsT1c",SEEN_API_URL:"https://api.cs.seeen.com/graphql/"});let e="QnLGoHTBv8oemPGDChVzn4Jj07xbzuWlHZZk";return"true"===Object({NODE_ENV:"production",RUNTIME_ENV:"browser",PIANO_AID:"UnG6aKcRpu",PIANO_URL:"api.tinypass.com/",PIANO_API_URL:"api.tinypass.com/",SEEN_KEY:"LKu3p9ET6sVeUQtz4noKJKlVYu7QsT1c",SEEN_API_URL:"https://api.cs.seeen.com/graphql/"}).STAGE&&(e="nsAqvdBTjX7C9P6VX7dFWc3HCR88sXmqJUHE"),`
  <!-- START PUSHLY //-->
  <script src="https://cdn.p-n.io/pushly-sdk.min.js?domain_key=${e}" async></script>
  <script>
    window.PushlySDK = window.PushlySDK || [];
    function pushly() { window.PushlySDK.push(arguments) }
    pushly('load', {
      domainKey: '${e}',
    });
  </script>
  <!-- END PUSHLY //-->
  `}function F(){return`
    <script src="https://c783.fastcompany.com/script.js" async></script>
  `}function j(){return'<script src="https://securepubads.g.doubleclick.net/tag/js/gpt.js" async><\/script>'}function $(){return'<script src="https://tagan.adlightning.com/mansueto/op.js" async ><\/script>'}function x(){return`
  <script src="https://s3.amazonaws.com/assets.fastcompany.com/assets/js/vendor/keywee/keywee.js" async ></script>
  `}function R(){return`
  <script type="text/javascript" src="https://polyfill-fastly.io/v2/polyfill.js?features=es6" async></script>
  `}class v extends a.Component{constructor(e){super(e),this.datalayer=N,this.camp=A.b,this.facebookPixel=d,this.googleAnalytics=p,this.nielsen=l,this.parsely=c,this.pingdom=m,this.structuredData=g,this.skimlinks=h,this.queryly=P,this.knotch=O,this.chartbeat=w,this.bombora=C,this.piano=L,this.pinterest=S,this.pushly=U,this.blueconic=F,this.gpt=j,this.adlightning=$,this.keywee=x,this.polyfill=R}shouldComponentUpdate(){return!1}renderAnalyticsDangerously(t,a,e,n,i,o){let s="";return o||(s=`<!-- ANALYTICS ${a.toUpperCase()} START -->`),e.forEach(e=>{r()(this[e])&&(s+=this[e](t,a,n,i,o))}),o||(s+=`<!-- ANALYTICS ${a.toUpperCase()} END -->`),{__html:s}}render(){var{location:e,listOfAnalytics:t}=this.props,a=this.props.initialPageLoad;let n=null;if(a){try{var i=JSON.parse(ne()(this.props,"state")),o=ne()(i,"featuredFeed.data.top")||[],s=ne()(i,"featuredFeed.data.featured")||[],r=o.concat(s),d=ne()(i,"categoryFeaturedFeed.top")||[],p=ne()(i,"categoryFeaturedFeed.featured")||[],l=d.concat(p),c=ne()(i,"tagFeaturedFeed.top")||[],m=ne()(i,"tagFeaturedFeed.featured")||[],u=c.concat(m),g=ne()(i,"playlistAllFeed")||[];(n=ne()(i,"context")).config=ne()(i,"config"),n.postData=ne()(i,"post.data.post",null)||ne()(i,"previewPost.data.post",null),n.tagPageData=ne()(i,"tagFeaturedFeed.tag",null),n.categoryPageData=ne()(i,"categoryFeaturedFeed.category",null),n.authorPageData=ne()(i,"author.data",null),n.playlistAllFeedData=g,n.authorAllFeed=ne()(i,"authorAllFeed.data.posts",[]),n.searchPageData=ne()(i,"searchPage",null),n.staticPageData=ne()(i,"customPage.data.page[0]",null),n.statusCode=ne()(i,"status.code"),n.homeList=r||null,n.categoryHomeList=l||null,n.tagHomeList=u||null,n.mostCreativePeoplePageData=ne()(i,"mostCreativePeople",null),n.personPageData=ne()(i,"person",null),n.ibdPageData=ne()(i,"innovationByDesign",null),n.giftGuideData=ne()(i,"giftGuide",null),n.companyPageData=ne()(i,"tagAllFeed",null),n.micYearPageData=ne()(i,"micYear",null),n.micYearModernPageData=ne()(i,"micYearPage",null),n.micSectorPageData=ne()(i,"micSector",null),n.videoPageData=ne()(i,"jwVideo",null),n.videoIndexPageData=ne()(i,"jwVideoIndex",null),n.magazineArchivePageData=ne()(i,"magazineArchivePage",null),n.productPageData=ne()(i,"product",null),n.mic2020YearPage=ne()(i,"mic2020Companies",null),n.brandsThatMatterPage=ne()(i,"brandsThatMatterPage.data",null),n.micHubPage=ne()(i,"micHubPage",null),n.worldChangingIdeasPage=ne()(i,"worldChangingIdeasPage",null),n.queer50Page=ne()(i,"queer50",null),n.hubPage=ne()(i,"hubPage",null),n.recognitionHubPage=ne()(i,"recognitionHubPage.data",null),n.applyPage=ne()(i,"applyPage",null),n.franchisePage=ne()(i,"franchisePage",null),n.supertags=ne()(i,"supertags.supertags",null),n.eventsPage=ne()(i,"eventsPage",null)}catch(e){ie.a.error(e,"Unable to parse context for the page")}return y.a.createElement("div",{dangerouslySetInnerHTML:this.renderAnalyticsDangerously(n,e,t,a,this.props.url,this.props.isFBIA)})}return null}}v.defaultProps={isFBIA:!1},v.propTypes={initialPageLoad:n.a.bool.isRequired,location:n.a.string.isRequired,listOfAnalytics:n.a.arrayOf(n.a.string).isRequired,isFBIA:n.a.bool};e.default=Object(i.b)(function(e){var t=e.config["initialPageLoad"],a=t?JSON.stringify(e):"";return{url:s()(ne()(e,"config.navHistory",[])),state:a,initialPageLoad:t}})(v)}}]);
//# sourceMappingURL=components-analytics-analytics.ce26af64f9eac15fb421.js.map