(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{164:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return m}),n.d(t,"postQuery",function(){return f});var a=n(8),r=n.n(a),i=n(0),l=n.n(i),o=n(198),s=n(222),c=n.n(s),u=n(190),d={container:{marginLeft:"auto",marginRight:"auto",maxWidth:600,paddingLeft:15,paddingRight:15},navLinks:{width:"100%",position:"relative",paddingTop:40,marginBottom:40},leftButton:{float:"left"},rightButton:{float:"right",textAlign:"right"}},m=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){document.body.style.overflow="auto"},n.render=function(){var e=this.props,t=e.data,n=e.pageContext,a=n.prev,r=n.next,i=t.markdownRemark;return l.a.createElement("div",{style:d.container},l.a.createElement(o.Helmet,null,l.a.createElement("title",null,'"',i.frontmatter.title,'" - from Joe Beuckman'),l.a.createElement("meta",{name:"keywords",content:i.frontmatter.tags.join(", ")})),l.a.createElement("div",{style:{display:"table-row"}},l.a.createElement("div",{style:{display:"table-cell",paddingRight:7}},l.a.createElement("a",{href:"/"},l.a.createElement("img",{alt:"Go Home",height:"30",src:"/home_icon.png",style:{verticalAlign:"text-bottom"}}))),l.a.createElement("div",{style:{display:"table-cell"}},l.a.createElement("h1",null,i.frontmatter.title))),l.a.createElement("time",{dateTime:i.frontmatter.date},i.frontmatter.date),l.a.createElement("dl",null,i.frontmatter.tags.map(function(e){return l.a.createElement("span",{style:{marginRight:8}},l.a.createElement(u.a,{to:"/tags/"+e},e))})),l.a.createElement("article",{dangerouslySetInnerHTML:{__html:i.html}}),l.a.createElement("div",{style:d.navLinks},a&&l.a.createElement("span",{style:d.leftButton},l.a.createElement("div",null,l.a.createElement("a",{href:a.frontmatter.path},"< newer")),l.a.createElement("div",null,l.a.createElement("em",null,a.frontmatter.title))),r&&l.a.createElement("span",{style:d.rightButton},l.a.createElement("div",null,l.a.createElement("a",{href:r.frontmatter.path},"older >")),l.a.createElement("div",null,l.a.createElement("em",null,r.frontmatter.title))),l.a.createElement("div",{style:{clear:"both",height:1}})),l.a.createElement(c.a,{identifier:i.id,title:i.frontmatter.title,url:this.props.location.href}))},t}(i.Component),f="4263669908"},182:function(e,t,n){var a;e.exports=(a=n(191))&&a.default||a},190:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(5),l=n.n(i),o=n(39),s=n.n(o);n.d(t,"a",function(){return s.a});n(182),r.a.createContext({});l.a.object,l.a.string.isRequired,l.a.func,l.a.func},191:function(e,t,n){"use strict";n.r(t);n(40);var a=n(0),r=n.n(a),i=n(5),l=n.n(i),o=n(68),s=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json)):null};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},222:function(e,t,n){"use strict";var a=n(10);t.__esModule=!0,t.default=void 0;var r=a(n(99)),i=a(n(8)),l=a(n(0)),o=a(n(5));n(165);var s=function(e){function t(t){var n;return(n=e.call(this,t)||this).state=t,n.shortname="joes-web-page",n}(0,i.default)(t,e);var n=t.prototype;return n.componentWillReceiveProps=function(e){this.setState(e)},n.componentWillMount=function(){if("undefined"!=typeof window&&window.document){var e=this;window.disqus_config=function(){this.page.identifier=e.state.identifier,this.page.title=e.state.title,this.page.url=e.state.url};var t=document.createElement("script");t.src="//"+this.shortname+".disqus.com/embed.js",t.async=!0,document.body.appendChild(t)}},n.render=function(){var e=this.props;return l.default.createElement("div",(0,r.default)({id:"disqus_thread"},e,{__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/index.js",lineNumber:36},__self:this}))},t}(l.default.Component);t.default=s,s.propTypes={identifier:o.default.string,title:o.default.string,url:o.default.string}}}]);
//# sourceMappingURL=component---src-templates-post-js-3cc39e612e3beace0091.js.map