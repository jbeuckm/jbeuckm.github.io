(window.webpackJsonp=window.webpackJsonp||[]).push([[8,11,12],{157:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a);e.default=function(t){var e=t.onToggle,n=Object(a.useState)(!1),i=n[0],r=n[1];return o.a.createElement("button",{onClick:function(){e(!i),r(!i)}},i?"stop":"go")}},160:function(t,e,n){"use strict";n.r(e);n(172),n(95),n(67),n(41),n(190),n(185);var a=n(8),o=n.n(a),i=n(0),r=n.n(i),s=n(174),u=n(180),c=n(173),f=n(171),l=n(157),p=n(187),g=n(188),h=n(189),d=40,m=30,v=["#a00","#0a0","#00a","#990","#da0","#099","#909","#555","#f3f"],I=2*Math.PI,x=function(t){function e(){for(var e,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))||this).areaSize=new f.a(I,I),e.ongoing=!1,e.onToggleOngoing=function(t){e.ongoing=t,e.ongoing&&e.step()},e.groupsOngoing=!0,e.randomize=function(){e.fdg.initializePositions(e.items),e.draw()},e.findGroupRepresentatives=function(t){var e={};return t.forEach(function(t){var n=t.tags.map(function(t){return t.toLowerCase()}).sort();e[n.join(",")]||(e[n.join(",")]=t)}),Object.values(e)},e.setupGroupsItems=function(){e.representatives=e.findGroupRepresentatives(e.items),e.tagGroupFdg=new c.a(e.areaSize,1e-5),e.tagGroupFdg.forceOnItemFromSourceItem=p.a,e.tagGroupFdg.getInitialPlacement=g.a,e.tagGroupFdg.initializePositions(e.representatives),e.tagGroupFdg.getItemsRelationship=e.getSimilarityRelationship,e.tagGroupFdg.prepareRelationshipMatrix(),e.drawGroups(),e.stepGroups()},e.setup=function(t){e.items=t,e.setupGroupsItems(t),e.fdg=new c.a(e.areaSize,1e-5),e.fdg.getItemsRelationship=h.a,e.fdg.getInitialPlacement=g.a,e.fdg.forceOnItemFromSourceItem=p.a},e.BUMP_VALUE=.6,e.bump=function(){e.fdg.bump(e.BUMP_VALUE),e.draw()},e.step=function(){e.fdg.step(),e.draw(),e.ongoing&&setTimeout(e.step,1)},e.stepGroups=function(){e.tagGroupFdg.step(),e.drawGroups(),e.groupsOngoing&&setTimeout(e.stepGroups,1)},e.drawGroups=function(){e.tagGroupCtx.clearRect(0,0,500,500),e.tagGroupFdg.placedItems.forEach(function(t){var n=new f.a(t.position.x,t.position.y),a=500/I;n.scale(a);var o=I/t.tags.length;t.tags.forEach(function(t,a){e.tagGroupCtx.beginPath(),e.tagGroupCtx.moveTo(n.x,n.y),e.tagGroupCtx.arc(n.x,n.y,3,a*o,(a+1)*o),e.tagGroupCtx.fillStyle=v[t.charCodeAt(0)%v.length],e.tagGroupCtx.fill()})})},e.draw=function(){e.ctx.clearRect(0,0,500,500),e.fdg.placedItems.forEach(function(t){var n=new f.a(t.position.x,t.position.y),a=500/I;n.scale(a);var o=I/t.tags.length;t.tags.forEach(function(t,a){e.ctx.beginPath(),e.ctx.moveTo(n.x,n.y),e.ctx.arc(n.x,n.y,3,a*o,(a+1)*o),e.ctx.fillStyle=v[t.charCodeAt(0)%v.length],e.ctx.fill()})})},e.snapItems=function(){Object(u.a)(e.fdg.placedItems,e.areaSize,e.hexagonCoordMatrix,d,m),e.draw()},e}o()(e,t);var n=e.prototype;return n.componentDidMount=function(){var t=this;this.hexagonCoordMatrix=Object(u.b)(d,m);var e=500/I;this.hexagonCoordMatrix.forEach(function(n,a){n.forEach(function(n,a){t.backgroundCtx.fillRect(e*n.theta,e*n.phi,1,1)})}),s.a.Post.list().then(function(e){var n=e.data().items;t.setup(n)})},n.render=function(){var t=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{height:500}},r.a.createElement("canvas",{style:{position:"absolute"},width:"500",height:"500",ref:function(e){return t.backgroundCtx=e.getContext("2d")}}),r.a.createElement("canvas",{style:{position:"absolute"},width:"500",height:"500",ref:function(e){return t.ctx=e.getContext("2d")}}),r.a.createElement("canvas",{style:{position:"absolute"},width:"500",height:"500",ref:function(e){return t.tagGroupCtx=e.getContext("2d")}})),r.a.createElement("button",{onClick:this.randomize},"randomize")," ",r.a.createElement("button",{onClick:this.bump},"bump")," ",r.a.createElement(l.default,{onToggle:this.onToggleOngoing})," ",r.a.createElement("button",{onClick:this.snapItems},"assign"))},e}(i.Component);e.default=x},167:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),i=n(160);e.default=function(){return o.a.createElement("div",null,o.a.createElement(i.default,null))}},171:function(t,e,n){"use strict";var a=function(){function t(t,e){this.x=t,this.y=e}var e=t.prototype;return e.add=function(t){return this.x+=t.x,this.y+=t.y,this},e.scale=function(t){return this.x*=t,this.y*=t,this},t}();e.a=a},173:function(t,e,n){"use strict";n(172),n(39);var a=n(171);e.a=function(t,e){var n=this;void 0===e&&(e=4e-4),this.areaSize=null,this.placedItems=null,this.ACCELERATION_FACTOR=null,this.relationshipMatrix=[[]],this.forceOnItemFromSourceItem=function(t,e,n,a){throw new Error("forceOnItemFromSourceItem() not defined as (\n      targetItem: Item,\n      sourceItem: Item,\n      areaSize: Point2D,\n      relationship: object\n    ): Point2D")},this.totalForceOnItem=function(t){var e=n.placedItems[t],o=new a.a(0,0);return n.placedItems.forEach(function(a,i){if(a.id!==e.id){var r=n.forceOnItemFromSourceItem(e,a,n.areaSize,n.relationshipMatrix[i][t]);o.add(r)}}),o},this.getInitialPlacement=function(t){return new a.a(n.areaSize.x*Math.random(),n.areaSize.y*Math.random())},this.initializePositions=function(t){n.placedItems=t.map(function(t){return Object.assign({},t,{position:n.getInitialPlacement(t)})})},this.moveItem=function(t,e){t.position.add(e),t.position.x<0?t.position.x+=n.areaSize.x:t.position.x>n.areaSize.x&&(t.position.x-=n.areaSize.x),t.position.y<0?t.position.y+=n.areaSize.y:t.position.y>n.areaSize.y&&(t.position.y-=n.areaSize.y)},this.step=function(t){void 0===t&&(t=1);for(var e=t;e>0;e--)for(var a=n.placedItems.length-1;a>=0;a--){var o=n.totalForceOnItem(a);n.moveItem(n.placedItems[a],o.scale(n.ACCELERATION_FACTOR))}},this.getItemsRelationship=function(t,e){throw"getItemsRelationship must be defined as (sourceItem:Item, targetItem:Item):object"},this.prepareRelationshipMatrix=function(){for(var t=n.placedItems.length,e=Array(t).fill(0).map(function(){return Array(t).fill(0)}),a=0;a<t;++a)for(var o=0;o<t;++o)if(a!=o){var i=n.placedItems[a],r=n.placedItems[o],s=n.getItemsRelationship(i,r);e[a][o]=s,e[o][a]=s}return n.relationshipMatrix=e,e},this.bump=function(t){n.placedItems.forEach(function(e){e.position.x+=t*(Math.random()-.5),e.position.y+=t*(Math.random()-.5)})},this.areaSize=t,this.ACCELERATION_FACTOR=e}},174:function(t,e,n){"use strict";var a=n(181),o=n.n(a),i=n(183),r=n.n(i);e.a=o()({clientId:"joes-blog",host:"",middleware:[r.a],resources:{Post:{list:{path:"/feed-1.json?z="+Math.random()}},Config:{get:{path:"/config.json?z="+Math.random()}}}})},175:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var a=function(t,e,n){if(t==e)return 0;var a=e-t;if(t<e){var o=t+n-e;return a<o?a:-o}var i=e+n-t;return-a<i?a:i},o=function(t,e,n){var o=a(t.x,e.x,n.x),i=a(t.y,e.y,n.y),r=Math.sqrt(o*o+i*i);return{magnitude:r,direction:{x:o/r,y:i/r}}}},180:function(t,e,n){"use strict";n.d(e,"b",function(){return i}),n.d(e,"a",function(){return r});n(184),n(186);var a=n(175),o=n(171),i=function(t,e){for(var n=3*t,a=2*Math.PI/n,i=2*Math.PI/e,r=0,s=[],u=0;u<e;u++){s[u]=Array(t);for(var c=r%2==1?1.5*a:0,f=0;f<t;f++)s[u][f]=new o.a(c+3*f*a,u*i);r++}return s},r=function(t,e,n,i,r){var s=function(t,e){for(var n=[],a=0;a<e;a++){n[a]=Array(t);for(var o=0;o<t;o++)n[a][o]=null}return n}(i,r);t.forEach(function(t){var i=t.position,r={magnitude:Number.MAX_SAFE_INTEGER},u=null,c=null;n.forEach(function(t,n){t.forEach(function(t,o){if(!s[n][o]){var f=Object(a.a)(i,t,e);f.magnitude<r.magnitude&&(r=f,u=t,c={row:n,col:o})}})}),u&&(t.position=new o.a(u.x,u.y),s[c.row][c.col]=t)})}},182:function(t,e){},187:function(t,e,n){"use strict";var a=n(171),o=n(175);e.a=function(t,e,n,s){var u=Object(o.a)(t.position,e.position,n),c=u.magnitude,f=u.direction,l=s.similarity,p=-1.5/(c/30),g=l>0?r(c,p,l):i(c,p,l);return new a.a(g*f.x,g*f.y)};var i=function(t,e,n){return t<.9?e+10*n/(100*(t+1)):0},r=function(t,e,n){return e+800*n/(40*(t+1))}},188:function(t,e,n){"use strict";n(185);var a=n(171);e.a=function(t){var e,n,o;if(o!=t.postId){o=t.postId;for(var i=t.tags.sort().join("")||"uncategorized",r=0,s=i.length-1;s>=0;s--)r+=i.charCodeAt(s);n=r%628/100+.05*Math.random(),e=.1+.5*Math.random()}return e+=.01,new a.a(e*Math.cos(n),e*Math.sin(n))}},189:function(t,e,n){"use strict";var a=n(228),o=n(227);e.a=function(t,e){var n=Object(a.a)(t.tags.map(o.a),e.tags.map(o.a)),i=n.length>=1?5+5*Math.log(n.length):-5;return t.postId&&t.postId===e.postId&&(i+=20),{similarity:i}}},190:function(t,e,n){var a=n(9),o=n(191)(!1);a(a.S,"Object",{values:function(t){return o(t)}})},191:function(t,e,n){var a=n(26),o=n(20),i=n(31).f;t.exports=function(t){return function(e){for(var n,r=o(e),s=a(r),u=s.length,c=0,f=[];u>c;)i.call(r,n=s[c++])&&f.push(t?[n,r[n]]:r[n]);return f}}}}]);
//# sourceMappingURL=component---src-pages-fdsp-js-ab1da3cb1e070da207ff.js.map