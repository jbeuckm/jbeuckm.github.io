(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{159:function(t,e,n){"use strict";n.r(e);n(172),n(39);var i=n(8),o=n.n(i),a=n(0),r=n.n(a),s=n(174),c=n(173),u=n(171),f=["#a00","#0a0","#00a","#990","#da0","#099","#909","#555","#f3f"],h=2*Math.PI,l=function(t){function e(){for(var e,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))||this).setup=function(t){e.fdg=new c.a(new u.a(h,h)),e.fdg.randomizePositions(t.map(function(t){return t.tags===[]?Object.assign({},t,{tags:["untagged"]}):t})),e.fdg.prepareRelationshipMatrix(),e.step()},e.counter=0,e.step=function(){e.counter=(e.counter+1)%200,0===e.counter&&e.fdg.placedItems.forEach(function(t){t.position.x+=.5*(Math.random()-.5),t.position.y+=.5*(Math.random()-.5)}),e.fdg.step(),e.ctx.clearRect(0,0,500,500),e.fdg.placedItems.forEach(function(t){var n=new u.a(t.position.x,t.position.y);n.scale(500/h);var i=h/t.tags.length;t.tags.forEach(function(t,o){e.ctx.beginPath(),e.ctx.moveTo(n.x,n.y),e.ctx.arc(n.x,n.y,8,o*i,(o+1)*i),e.ctx.fillStyle=f[t.charCodeAt(0)%f.length],e.ctx.fill()})}),setTimeout(e.step,1)},e}o()(e,t);var n=e.prototype;return n.componentDidMount=function(){var t=this;s.a.Post.list().then(function(e){var n=e.data().items;t.setup(n)})},n.render=function(){var t=this;return r.a.createElement("canvas",{width:"500",height:"500",ref:function(e){return t.ctx=e.getContext("2d")}})},e}(a.Component);e.default=l},171:function(t,e,n){"use strict";var i=function(){function t(t,e){this.x=t,this.y=e}var e=t.prototype;return e.add=function(t){return this.x+=t.x,this.y+=t.y,this},e.scale=function(t){return this.x*=t,this.y*=t,this},t}();e.a=i},172:function(t,e,n){var i=n(9);i(i.P,"Array",{fill:n(176)}),n(64)("fill")},173:function(t,e,n){"use strict";n(172),n(39);var i=n(171);e.a=function(t,e){var n=this;void 0===e&&(e=4e-4),this.areaSize=null,this.placedItems=null,this.ACCELERATION_FACTOR=null,this.relationshipMatrix=[[]],this.forceOnItemFromSourceItem=function(t,e,n,i){throw new Error("forceOnItemFromSourceItem() not defined as (\n      targetItem: Item,\n      sourceItem: Item,\n      areaSize: Point2D,\n      relationship: object\n    ): Point2D")},this.totalForceOnItem=function(t){var e=n.placedItems[t],o=new i.a(0,0);return n.placedItems.forEach(function(i,a){if(i.id!==e.id){var r=n.forceOnItemFromSourceItem(e,i,n.areaSize,n.relationshipMatrix[a][t]);o.add(r)}}),o},this.getInitialPlacement=function(t){return new i.a(n.areaSize.x*Math.random(),n.areaSize.y*Math.random())},this.initializePositions=function(t){n.placedItems=t.map(function(t){return Object.assign({},t,{position:n.getInitialPlacement(t)})})},this.moveItem=function(t,e){t.position.add(e),t.position.x<0?t.position.x+=n.areaSize.x:t.position.x>n.areaSize.x&&(t.position.x-=n.areaSize.x),t.position.y<0?t.position.y+=n.areaSize.y:t.position.y>n.areaSize.y&&(t.position.y-=n.areaSize.y)},this.step=function(t){void 0===t&&(t=1);for(var e=t;e>0;e--)for(var i=n.placedItems.length-1;i>=0;i--){var o=n.totalForceOnItem(i);n.moveItem(n.placedItems[i],o.scale(n.ACCELERATION_FACTOR))}},this.getItemsRelationship=function(t,e){throw"getItemsRelationship must be defined as (sourceItem:Item, targetItem:Item):object"},this.prepareRelationshipMatrix=function(){for(var t=n.placedItems.length,e=Array(t).fill(0).map(function(){return Array(t).fill(0)}),i=0;i<t;++i)for(var o=0;o<t;++o)if(i!=o){var a=n.placedItems[i],r=n.placedItems[o],s=n.getItemsRelationship(a,r);e[i][o]=s,e[o][i]=s}return n.relationshipMatrix=e,e},this.bump=function(t){n.placedItems.forEach(function(e){e.position.x+=t*(Math.random()-.5),e.position.y+=t*(Math.random()-.5)})},this.areaSize=t,this.ACCELERATION_FACTOR=e}},174:function(t,e,n){"use strict";var i=n(181),o=n.n(i),a=n(183),r=n.n(a);e.a=o()({clientId:"joes-blog",host:"",middleware:[r.a],resources:{Post:{list:{path:"/feed-1.json?z="+Math.random()}}}})},176:function(t,e,n){"use strict";var i=n(40),o=n(94),a=n(17);t.exports=function(t){for(var e=i(this),n=a(e.length),r=arguments.length,s=o(r>1?arguments[1]:void 0,n),c=r>2?arguments[2]:void 0,u=void 0===c?n:o(c,n);u>s;)e[s++]=t;return e}},182:function(t,e){}}]);
//# sourceMappingURL=component---src-pages-force-directed-posts-index-js-49711eace8ed6271e7c2.js.map