"use strict";(globalThis.__LOADABLE_LOADED_CHUNKS__=globalThis.__LOADABLE_LOADED_CHUNKS__||[]).push([[38121],{50716:(e,r,t)=>{t.r(r),t.d(r,{default:()=>p});var a=t(67294),s=t(45697),i=t.n(s),n=t(40684),d=t(24250),o=t(75270),l=t(85775);const u=(0,n.ZP)({resolved:{},chunkName:()=>"ArticleInlineMediaPremium",isReady(e){const r=this.resolve(e);return!0===this.resolved[r]&&!!t.m[r]},importAsync:()=>t.e(55271).then(t.bind(t,61756)),requireAsync(e){const r=this.resolve(e);return this.resolved[r]=!1,this.importAsync(e).then((e=>(this.resolved[r]=!0,e)))},requireSync(e){const r=this.resolve(e);return t(r)},resolve(){return 61756}}),c=(0,n.ZP)({resolved:{},chunkName:()=>"components-shared-Article-InlineImage",isReady(e){const r=this.resolve(e);return!0===this.resolved[r]&&!!t.m[r]},importAsync:()=>t.e(41601).then(t.bind(t,57683)),requireAsync(e){const r=this.resolve(e);return this.resolved[r]=!1,this.importAsync(e).then((e=>(this.resolved[r]=!0,e)))},requireSync(e){const r=this.resolve(e);return t(r)},resolve(){return 57683}}),m=o.eu,h=e=>{const{data:r,id:t,premium:s,dataCounter:i,template:n,dataId:o,brand:m,isTransporter:h,dataTest:p,dataAnalytics:v}=e,y=h?m:r.brand;if(s)return a.createElement("div",{"data-test":p,"data-analytics":v,"data-is-premium":!0},a.createElement(u,{id:t,dataId:o,brand:y,isTransporter:!0}));if(!r)return a.createElement(d.Z,{data:{error:"ArticleInlineMedia query came back as null"},errorSource:"ArticleInlineMedia",errorProps:e});const{featuredMedia:A}=r;return A&&("image"===A.type&&!A.isHighTouch||"infographic"===A.type)?a.createElement("div",{"data-test":p,"data-analytics":v},a.createElement(c,{data:r,dataId:o||(0,l.SQ)(n,i),brand:y,isFeaturedMedia:!0})):null};h.propTypes={brand:i().string,isTransporter:i().bool,data:i().object.isRequired,dataCounter:i().number,dataId:i().string,id:i().number.isRequired,premium:i().bool,template:i().string,dataTest:i().string.isRequired,dataAnalytics:i().string.isRequired},h.defaultProps={isTransporter:!1,brand:m,dataCounter:0,premium:!1,template:"",dataId:""};const p=h}}]);