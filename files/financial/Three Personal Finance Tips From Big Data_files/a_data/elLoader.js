(()=>{"use strict";function n(n,e,t,o){return new(t||(t=Promise))((function(c,r){function i(n){try{a(o.next(n))}catch(n){r(n)}}function s(n){try{a(o.throw(n))}catch(n){r(n)}}function a(n){var e;n.done?c(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(i,s)}a((o=o.apply(n,e||[])).next())}))}Object.create;Object.create;"function"==typeof SuppressedError&&SuppressedError;function e(n,e){(function({requestUrl:n="",requestType:e="POST",contentType:t="",timeout:o=3e4}){const c=new XMLHttpRequest;return c.open(e,n,!0),t.length>0&&c.setRequestHeader("Content-Type",t),c.timeout=o,c})(n).send(e)}const t={connatix:"connatix.com",elements:"elements.video"},o={[t.connatix]:"cnx",[t.elements]:"cnxel"};function c(n){const t=n;if(t.pageUrl=function(){let n;try{n=window.top.location.href}catch(e){n=window.location&&window.location.href}return n}(),void 0===t.callStack){const n=new Error(t.message);t.callStack=n.stack||""}t.callStack=t.callStack.substring(0,500);t.ddsource="browser",t.service="player",t.ua=navigator.userAgent,e({requestUrl:"https://pl.connatix.com",requestType:"POST"},JSON.stringify(t))}function r(n,e){const o=window.document.createElement("script");return o.src=function(n,e){const{domain:o,env:c,ver:r,params:i,omid:s,eu:a,standalone:l}=e;let d=`cds.${o}`;c&&(d=`cds-${c}.stg.${o}`);let u=`//${d}/p/${r}/${o===t.elements?"player":`connatix.${n}`}.js${i}`;return s&&(u=u.replace(".js",".omid.js")),a&&(u=u.replace(".js",".dc.js")),l&&(u=u.replace(`connatix.${n}`,`connatix.standalone.${n}`)),u}(n,e),o.setAttribute("async","1"),o.setAttribute("type","text/javascript"),window.document.body.appendChild(o),o}function i(n,e){return{render(t,o){try{n?window.cnxOvpBootstrapElementsPlayer(e,t,o):window.cnxBootstrapElementsPlayer(e,t,o)}catch(n){const e=n;c({message:"Prerender_Elements_main_initPlayer",exception:e.message,callStack:e.stack,level:"Info"})}}}}(function(){return n(this,void 0,void 0,(function*(){const n=window.cnx_data_elements||window.cnx_data,e=n.domain,s=e===t.elements,a=o[e],l=window.parent;let d=l[a],u=[];d&&d.cmd||(l[a]={},l[a].cmd=[],d=l[a]),d.cmd&&Array.isArray(d.cmd)&&(yield function(n,e){const t=e?"cnxOvpElLoaded":"cnxElLoaded",o=e?"cnxOvpBundleLoaded":"cnxElBundleLoaded";return new Promise((e=>{window[t]?e():(window.addEventListener(o,(()=>{window[t]=!0,e()})),r("player",n))}))}(n,s),d.cmd.length&&(u=[...d.cmd]),l[a]=i.bind(null,s),l[a].debug=l.cnxResources.debug,l[a].configEnums=l.cnxResources.configEnums,l[a].configEvents=l.cnxResources.configEvents,l[a].cmd={push(n){try{n()}catch(n){const e=n;c({message:"Prerender_Elements_main_push_callback",level:"Info",callStack:e.stack,exception:e.message})}}},u.forEach((n=>{try{n()}catch(n){const e=n;c({message:"Prerender_Elements_main_commands_callback",exception:e.message,callStack:e.stack,level:"Info"})}})))}))})().catch((n=>{c({message:"Prerender_Elements_main",exception:n.message,callStack:n.stack,level:"Info"})}))})();