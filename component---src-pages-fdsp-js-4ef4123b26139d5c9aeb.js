(window.webpackJsonp=window.webpackJsonp||[]).push([[8,11,12],{158:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a);e.default=function(t){var e=t.onToggle,n=Object(a.useState)(!1),o=n[0],r=n[1];return i.a.createElement("button",{onClick:function(){e(!o),r(!o)}},o?"stop":"go")}},161:function(t,e,n){"use strict";n.r(e);n(175),n(96),n(67),n(42),n(199),n(192);var a=n(8),i=n.n(a),o=n(0),r=n.n(o),s=n(177),u=n(184),c=n(176),f=n(174),l=n(158),p=n(194),g=n(195),d=n(196),h=40,m=30,v=["#a00","#0a0","#00a","#990","#da0","#099","#909","#555","#f3f"],I=2*Math.PI,x=function(t){function e(){for(var e,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))||this).areaSize=new f.a(I,I),e.ongoing=!1,e.onToggleOngoing=function(t){e.ongoing=t,e.ongoing&&e.step()},e.groupsOngoing=!0,e.randomize=function(){e.fdg.initializePositions(e.items),e.draw()},e.findGroupRepresentatives=function(t){var e={};return t.forEach(function(t){var n=t.tags.map(function(t){return t.toLowerCase()}).sort();e[n.join(",")]||(e[n.join(",")]=t)}),Object.values(e)},e.setupGroupsItems=function(){e.representatives=e.findGroupRepresentatives(e.items),e.tagGroupFdg=new c.a(e.areaSize,1e-5),e.tagGroupFdg.forceOnItemFromSourceItem=p.a,e.tagGroupFdg.getInitialPlacement=g.a,e.tagGroupFdg.initializePositions(e.representatives),e.tagGroupFdg.getItemsRelationship=e.getSimilarityRelationship,e.tagGroupFdg.prepareRelationshipMatrix(),e.drawGroups(),e.stepGroups()},e.setup=function(t){e.items=t,e.setupGroupsItems(t),e.fdg=new c.a(e.areaSize,1e-5),e.fdg.getItemsRelationship=d.a,e.fdg.getInitialPlacement=g.a,e.fdg.forceOnItemFromSourceItem=p.a},e.BUMP_VALUE=.6,e.bump=function(){e.fdg.bump(e.BUMP_VALUE),e.draw()},e.step=function(){e.fdg.step(),e.draw(),e.ongoing&&setTimeout(e.step,1)},e.stepGroups=function(){e.tagGroupFdg.step(),e.drawGroups(),e.groupsOngoing&&setTimeout(e.stepGroups,1)},e.drawGroups=function(){e.tagGroupCtx.clearRect(0,0,500,500),e.tagGroupFdg.placedItems.forEach(function(t){var n=new f.a(t.position.x,t.position.y),a=500/I;n.scale(a);var i=I/t.tags.length;t.tags.forEach(function(t,a){e.tagGroupCtx.beginPath(),e.tagGroupCtx.moveTo(n.x,n.y),e.tagGroupCtx.arc(n.x,n.y,3,a*i,(a+1)*i),e.tagGroupCtx.fillStyle=v[t.charCodeAt(0)%v.length],e.tagGroupCtx.fill()})})},e.draw=function(){e.ctx.clearRect(0,0,500,500),e.fdg.placedItems.forEach(function(t){var n=new f.a(t.position.x,t.position.y),a=500/I;n.scale(a);var i=I/t.tags.length;t.tags.forEach(function(t,a){e.ctx.beginPath(),e.ctx.moveTo(n.x,n.y),e.ctx.arc(n.x,n.y,3,a*i,(a+1)*i),e.ctx.fillStyle=v[t.charCodeAt(0)%v.length],e.ctx.fill()})})},e.snapItems=function(){Object(u.a)(e.fdg.placedItems,e.areaSize,e.hexagonCoordMatrix,h,m),e.draw()},e}i()(e,t);var n=e.prototype;return n.componentDidMount=function(){var t=this;this.hexagonCoordMatrix=Object(u.b)(h,m);var e=500/I;this.hexagonCoordMatrix.forEach(function(n,a){n.forEach(function(n,a){t.backgroundCtx.fillRect(e*n.theta,e*n.phi,1,1)})}),s.a.Post.list().then(function(e){var n=e.data().items;t.setup(n)})},n.render=function(){var t=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{height:500}},r.a.createElement("canvas",{style:{position:"absolute"},width:"500",height:"500",ref:function(e){return t.backgroundCtx=e.getContext("2d")}}),r.a.createElement("canvas",{style:{position:"absolute"},width:"500",height:"500",ref:function(e){return t.ctx=e.getContext("2d")}}),r.a.createElement("canvas",{style:{position:"absolute"},width:"500",height:"500",ref:function(e){return t.tagGroupCtx=e.getContext("2d")}})),r.a.createElement("button",{onClick:this.randomize},"randomize")," ",r.a.createElement("button",{onClick:this.bump},"bump")," ",r.a.createElement(l.default,{onToggle:this.onToggleOngoing})," ",r.a.createElement("button",{onClick:this.snapItems},"assign"))},e}(o.Component);e.default=x},169:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),o=n(161);e.default=function(){return i.a.createElement("div",null,i.a.createElement(o.default,null))}},174:function(t,e,n){"use strict";var a=function(){function t(t,e){this.x=t,this.y=e}var e=t.prototype;return e.add=function(t){return this.x+=t.x,this.y+=t.y,this},e.scale=function(t){return this.x*=t,this.y*=t,this},t}();e.a=a},176:function(t,e,n){"use strict";n(175),n(40);var a=n(174);e.a=function(t,e){var n=this;void 0===e&&(e=4e-4),this.areaSize=null,this.placedItems=null,this.ACCELERATION_FACTOR=null,this.relationshipMatrix=[[]],this.forceOnItemFromSourceItem=function(t,e,n,a){throw new Error("forceOnItemFromSourceItem() not defined as (\n      targetItem: Item,\n      sourceItem: Item,\n      areaSize: Point2D,\n      relationship: object\n    ): Point2D")},this.totalForceOnItem=function(t){var e=n.placedItems[t],i=new a.a(0,0);return n.placedItems.forEach(function(a,o){if(a.id!==e.id){var r=n.forceOnItemFromSourceItem(e,a,n.areaSize,n.relationshipMatrix[o][t]);i.add(r)}}),i},this.getInitialPlacement=function(t){return new a.a(n.areaSize.x*Math.random(),n.areaSize.y*Math.random())},this.initializePositions=function(t){n.placedItems=t.map(function(t){return Object.assign({},t,{position:n.getInitialPlacement(t)})})},this.moveItem=function(t,e){t.position.add(e),t.position.x<0?t.position.x+=n.areaSize.x:t.position.x>n.areaSize.x&&(t.position.x-=n.areaSize.x),t.position.y<0?t.position.y+=n.areaSize.y:t.position.y>n.areaSize.y&&(t.position.y-=n.areaSize.y)},this.step=function(t){void 0===t&&(t=1);for(var e=t;e>0;e--)for(var a=n.placedItems.length-1;a>=0;a--){var i=n.totalForceOnItem(a);n.moveItem(n.placedItems[a],i.scale(n.ACCELERATION_FACTOR))}},this.getItemsRelationship=function(t,e){throw"getItemsRelationship must be defined as (sourceItem:Item, targetItem:Item):object"},this.prepareRelationshipMatrix=function(){for(var t=n.placedItems.length,e=Array(t).fill(0).map(function(){return Array(t).fill(0)}),a=0;a<t;++a)for(var i=0;i<t;++i)if(a!=i){var o=n.placedItems[a],r=n.placedItems[i],s=n.getItemsRelationship(o,r);e[a][i]=s,e[i][a]=s}return n.relationshipMatrix=e,e},this.bump=function(t){n.placedItems.forEach(function(e){e.position.x+=t*(Math.random()-.5),e.position.y+=t*(Math.random()-.5)})},this.areaSize=t,this.ACCELERATION_FACTOR=e}},177:function(t,e,n){"use strict";var a=n(186),i=n.n(a),o=n(188),r=n.n(o);e.a=i()({clientId:"joes-blog",host:"",middleware:[r.a],resources:{Post:{list:{path:"/feed-1.json?z="+Math.random()}}}})},180:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var a=function(t,e,n){if(t==e)return 0;var a=e-t;if(t<e){var i=t+n-e;return a<i?a:-i}var o=e+n-t;return-a<o?a:o},i=function(t,e,n){var i=a(t.x,e.x,n.x),o=a(t.y,e.y,n.y),r=Math.sqrt(i*i+o*o);return{magnitude:r,direction:{x:i/r,y:o/r}}}},184:function(t,e,n){"use strict";n.d(e,"b",function(){return o}),n.d(e,"a",function(){return r});n(189),n(193);var a=n(180),i=n(174),o=function(t,e){for(var n=3*t,a=2*Math.PI/n,o=2*Math.PI/e,r=0,s=[],u=0;u<e;u++){s[u]=Array(t);for(var c=r%2==1?1.5*a:0,f=0;f<t;f++)s[u][f]=new i.a(c+3*f*a,u*o);r++}return s},r=function(t,e,n,o,r){var s=function(t,e){for(var n=[],a=0;a<e;a++){n[a]=Array(t);for(var i=0;i<t;i++)n[a][i]=null}return n}(o,r);t.forEach(function(t){var o=t.position,r={magnitude:Number.MAX_SAFE_INTEGER},u=null,c=null;n.forEach(function(t,n){t.forEach(function(t,i){if(!s[n][i]){var f=Object(a.a)(o,t,e);f.magnitude<r.magnitude&&(r=f,u=t,c={row:n,col:i})}})}),u&&(t.position=new i.a(u.x,u.y),s[c.row][c.col]=t)})}},187:function(t,e){},194:function(t,e,n){"use strict";var a=n(174),i=n(180);e.a=function(t,e,n,s){var u=Object(i.a)(t.position,e.position,n),c=u.magnitude,f=u.direction,l=s.similarity,p=-1.5/(c/30),g=l>0?r(c,p,l):o(c,p,l);return new a.a(g*f.x,g*f.y)};var o=function(t,e,n){return t<.9?e+10*n/(100*(t+1)):0},r=function(t,e,n){return e+800*n/(40*(t+1))}},195:function(t,e,n){"use strict";n(192);var a=n(174);e.a=function(t){var e,n,i;if(i!=t.postId){i=t.postId;for(var o=t.tags.sort().join("")||"uncategorized",r=0,s=o.length-1;s>=0;s--)r+=o.charCodeAt(s);n=r%628/100+.05*Math.random(),e=.1+.5*Math.random()}return e+=.01,new a.a(e*Math.cos(n),e*Math.sin(n))}},196:function(t,e,n){"use strict";var a=n(256),i=n(255);e.a=function(t,e){var n=Object(a.a)(t.tags.map(i.a),e.tags.map(i.a)),o=n.length>=1?5+5*Math.log(n.length):-5;return t.postId&&t.postId===e.postId&&(o+=20),{similarity:o}}},199:function(t,e,n){var a=n(9),i=n(200)(!1);a(a.S,"Object",{values:function(t){return i(t)}})},200:function(t,e,n){var a=n(26),i=n(20),o=n(31).f;t.exports=function(t){return function(e){for(var n,r=i(e),s=a(r),u=s.length,c=0,f=[];u>c;)o.call(r,n=s[c++])&&f.push(t?[n,r[n]]:r[n]);return f}}}}]);
//# sourceMappingURL=component---src-pages-fdsp-js-4ef4123b26139d5c9aeb.js.map