(()=>{"use strict";!function(t,a){var e;try{const o=new URLSearchParams(t.location.search).get("rtid"),c=null===(e=a.currentScript)||void 0===e?void 0:e.dataset.fpDomain;if(!o)return;c?a.cookie=`RoktTransactionId=${o};domain=${c};max-age=2592000;samesite=strict;path=/;secure`:t.localStorage.setItem("RoktTransactionId",o)}catch(t){}}(window,document)})();