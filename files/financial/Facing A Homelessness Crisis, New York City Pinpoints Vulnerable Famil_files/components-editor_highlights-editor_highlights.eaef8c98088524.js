(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[98],{1236:function(t,e,i){"use strict";i.r(e),i.d(e,"default",function(){return l});var e=i(0),s=i.n(e),h=i(2),h=i.n(h),a=i(1086),n=i.n(a),o=i(1126);class l extends e.Component{constructor(t){super(t),this.state={active:!1,highlights:[],unread:100,activatedHighlights:[]},this.handleScroll=this.handleScroll.bind(this)}componentDidMount(){this.isDesktop=Object(o.a)("1025px"),this.isDesktop&&this.setHighlights()}shouldComponentUpdate({activePostId:t},{highlights:e,active:i,unread:s,activatedHighlights:h}){return(t!==this.props.activePostId||!n()(e,this.state.highlights)||i!==this.state.active||s!==this.state.unread||h.length!==this.state.activatedHighlights.length)&&this.isDesktop}componentDidUpdate({activePostId:t}){this.isDesktop&&(t!==this.props.activePostId&&this.removeListeners(),this.setHighlights())}componentWillUnmount(){this.removeListeners()}getPostContainer(){return document.querySelector("#post__wrapper-"+this.props.activePostId)}setHighlights(){this.postContainer=this.getPostContainer();var t=this.postContainer?this.postContainer.querySelectorAll("mark"):[],e=Boolean(t.length);this.setHighlightsStates(t),e&&window.addEventListener("scroll",this.handleScroll)}setVisibleState(t){this.setState({visible:t})}setHighlightsStates(t){this.setState({highlights:[...t]})}getHighlightStyles(t){var e=this.postContainer.offsetHeight,i=this.postContainer.offsetTop,t=this.state.highlights[t].offsetTop;return{top:(t-i)/e*65+"%",transform:`translateY(${this.state.unread-t/e*100-25}px)`}}getUnreadPercent(){let t=100;var e=this.postContainer.getBoundingClientRect();return e.top<0&&(e=(e.height+e.top)/e.height*100,t=0<=e?e:0),t}setExpanderClass(t){var e=["expander"];return 0<=this.state.activatedHighlights.indexOf(t)&&e.push("set"),e.join(" ")}setActiveHighlightStyles(t){var e={},{highlights:i,active:s}=this.state,i=i[s];return t===s&&i&&(t=i.innerText.split("").length,e.height=60+t/65*30+"px"),e}handleScroll(){const s=window.innerHeight-250;this.state.highlights.forEach((t,e)=>{var i=t.getBoundingClientRect();this.state.active!==e&&250<i.top&&i.bottom<s?(this.setState({active:e}),t.classList.add("active")):this.state.active===e&&(i.top<250||i.bottom>s)&&(this.setState({active:void 0}),t.classList.add("set"),t.classList.remove("active"),this.state.activatedHighlights.indexOf(e)<0)&&(i=this.state["activatedHighlights"],i.push(e),this.setState({activatedHighlights:i}))});var t=this.getUnreadPercent(),t=(t!==this.state.unread&&this.setState({unread:t}),this.postContainer.querySelector(".post__header").getBoundingClientRect().top);this.state.visible&&(this.state.unread<15||135<t)?this.setVisibleState(!1):!this.state.visible&&15<=this.state.unread&&t<=135&&this.setVisibleState(!0)}handleScrollToHighlight(t){t=this.state.highlights[t];t&&window.scroll({top:t.offsetTop,left:0,behavior:"smooth"})}removeListeners(){window.removeEventListener("scroll",this.handleScroll)}render(){return this.props.activePostId?s.a.createElement("div",{className:"editor-highlights",id:"editor_highlight--"+this.props.activePostId},this.state.highlights.map((t,e)=>s.a.createElement("div",{className:`editor-highlights__highlight ${e===this.state.active?"editor-highlights__highlight--active":""} `+(this.state.visible?"editor-highlights__highlight--visible":""),style:this.getHighlightStyles(e),onClick:()=>this.handleScrollToHighlight(e)},s.a.createElement("span",{className:"hotspot"}),s.a.createElement("span",{className:this.setExpanderClass(e),style:this.setActiveHighlightStyles(e)}))),s.a.createElement("div",{className:"editor-highlights__unread "+(this.state.visible?"editor-highlights__unread--visible":""),style:{height:this.state.unread+"%"}})):null}}l.propTypes={activePostId:h.a.number.isRequired}}}]);
//# sourceMappingURL=components-editor_highlights-editor_highlights.eaef8c98088524f96cc3.js.map