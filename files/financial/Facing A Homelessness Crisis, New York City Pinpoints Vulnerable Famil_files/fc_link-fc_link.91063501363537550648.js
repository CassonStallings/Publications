(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[12],{1119:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return r});var t=a(0),m=a.n(t),n=a(2),n=a.n(n),l=a(63),u=a.n(l);class r extends t.Component{shouldComponentUpdate(){return!1}render(){var{config:e,title:t,children:a,externalLink:n,targetWindow:l,className:r}=this.props;let s=this.props["to"];var{site:e,env:i,amp:o}=e,i="development"===i;let c=!o&&-1!==s.indexOf(e);o=n||-1!==s.indexOf("/videos/list/");let d,p;return s.includes("adurl=")&&(c=!1),s.includes("news.")?(s="//"+s,m.a.createElement("a",{className:r,href:s,title:t},a)):s.includes("magazine.")?m.a.createElement("a",{className:r,href:s,title:t},a):(i&&!o&&(p=s.replace(/http(s)?:\/\/(www.)?/,"http://").replace(".com",".local:8880")),(d=c&&!o&&"/section/most-creative-people"===(d=u()(s,!0).pathname)?"/most-creative-people":d)?m.a.createElement("a",{className:r,href:d,title:t},a):"blank"===l?m.a.createElement("a",{className:r,href:p||s,title:t,target:"_blank"},a):m.a.createElement("a",{className:r,href:p||s,title:t},a))}}r.defaultProps={to:"",externalLink:!1,title:"",targetWindow:"",className:""},r.propTypes={config:n.a.shape({}).isRequired,to:n.a.string,title:n.a.string,children:n.a.oneOfType([n.a.string,n.a.node]).isRequired,externalLink:n.a.bool,targetWindow:n.a.string,className:n.a.string}}}]);
//# sourceMappingURL=fc_link-fc_link.91063501363537550648.js.map