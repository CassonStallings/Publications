(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[104],{1187:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return c});var a=t(0),n=t.n(a),i=t(2),i=t.n(i),s=t(1),r=t.n(s),l=t(62),o=t(1124),m=t(243);class c extends a.Component{constructor(e){super(e),this.totalMagazines=r()(e,"magazines.length",0),this.state={limit:e.limit},this.showAllMagazines=this.showAllMagazines.bind(this)}showAllMagazines(){this.setState({limit:this.totalMagazines})}render(){const{config:a,title:e,description:t,eventCategory:i}=this.props;var s=r()(this.props,"magazines",[]);return n.a.createElement("div",{className:"magazine-archive"},n.a.createElement(l.default,{slugName:e,linkTo:"https://www.fastcompany.com/magazine"}),n.a.createElement("h3",{className:"page-description"},t),n.a.createElement("div",{className:"row row--magazine"},s.slice(0,this.state.limit).map(e=>e?n.a.createElement(o.default,{config:a,key:e.issue,type:"magazine",metadata:e,cardEvent:()=>{i&&Object(m.b)({eventCategory:i,eventAction:"Magazine",eventLabel:"Issue "+e.issue})}}):null)),this.state.limit!==this.totalMagazines?n.a.createElement("div",{className:"magazine-archive__see-more"},n.a.createElement("button",{className:"magazine-archive__button",onClick:this.showAllMagazines},"See More Magazine Issues")):null)}}c.defaultProps={title:"Fast Company Magazine",description:"Browse Our Most Current Issues",eventCategory:"",limit:4},c.propTypes={config:i.a.shape({}).isRequired,title:i.a.string,description:i.a.string,eventCategory:i.a.string,magazines:i.a.arrayOf(i.a.shape({})).isRequired,limit:i.a.number}}}]);
//# sourceMappingURL=components-magazine_archive-magazine_archive.c80ab04e0d0b9d403531.js.map