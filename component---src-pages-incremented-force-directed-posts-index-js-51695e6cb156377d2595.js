(window.webpackJsonp=window.webpackJsonp||[]).push([[4,14],{162:function(t,n,e){"use strict";e.r(n);var r=e(0),o=e.n(r);n.default=function(t){var n=t.onToggle,e=t.style,i=Object(r.useState)(!1),a=i[0],c=i[1];return o.a.createElement("button",{style:e,onClick:function(){n(!a),c(!a)}},a?"stop":"go")}},163:function(t,n,e){"use strict";e.r(n);e(175),e(45),e(42);var r=e(230),o=e.n(r),i=(e(214),e(231)),a=e.n(i),c=e(8),u=e.n(c),s=e(0),f=e.n(s),h=e(177),l=e(184),p=(e(189),function(t){return t*(Math.random()-.5)}),d=function(t){var n=Number.MIN_VALUE,e=-1;return t.forEach(function(t,r){t>n&&(n=t,e=r)}),e},m=e(176),g=e(174),v=e(162),y=e(194),w=e(195),x=e(196),I=40,E=30,b=["#a00","#0a0","#00a","#990","#da0","#099","#909","#555","#f3f"],L=2*Math.PI,O={button:{marginRight:15}},S=function(t){function n(){for(var n,e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return(n=t.call.apply(t,[this].concat(r))||this).areaSize=new g.a(L,L),n.ongoing=!1,n.onToggleOngoing=function(t){n.ongoing=t,n.ongoing&&n.step()},n.groupsOngoing=!0,n.randomize=function(){n.fdg.initializePositions(n.items),n.draw()},n.findItemPlacement=function(t,n,e){var r=t[n],o=t[n-1];if(r.id===o.id)return new g.a(o.position.x+p(.05),o.position.y+p(.05));var i=e[n].slice(0,n).map(function(t){return t.similarity}),a=d(i);if(a>-1){var c=t[a].position;return new g.a(c.x+p(.1),c.y+p(.1))}return new g.a(Math.random()*L,Math.random()*L)},n.setup=function(){var t=a()(o.a.mark(function t(e){var r,i;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n.items=e,n.fdg=new m.a(n.areaSize,1e-5),n.fdg.getItemsRelationship=x.a,n.fdg.getInitialPlacement=w.a,n.fdg.forceOnItemFromSourceItem=y.a,n.fdg.placedItems=e,r=n.fdg.prepareRelationshipMatrix(),n.fdg.initializePositions([e[0],e[1]]),console.log("placed",e[0]),t.next=11,n.runSteps(100);case 11:n.draw(),i=2,function t(){var e=n.items[i];e&&(e.position=n.findItemPlacement(n.items,i,r),n.fdg.placedItems.push(e),n.runSteps(10).then(t)),i++}();case 15:case"end":return t.stop()}},t)}));return function(n){return t.apply(this,arguments)}}(),n.BUMP_VALUE=.6,n.bump=function(){n.fdg.bump(n.BUMP_VALUE),n.draw()},n.runSteps=function(t){return new Promise(function(e){var r=0;!function o(){n.fdg.step(),n.draw(),++r>=t?e():window.requestAnimationFrame(o)}()})},n.step=function(){n.fdg.step(),n.draw(),n.ongoing&&window.requestAnimationFrame(n.step)},n.draw=function(){n.ctx.clearRect(0,0,500,500),n.fdg.placedItems.forEach(function(t){var e=new g.a(t.position.x,t.position.y),r=500/L;e.scale(r);var o=L/t.tags.length;t.tags.forEach(function(t,r){n.ctx.beginPath(),n.ctx.moveTo(e.x,e.y),n.ctx.arc(e.x,e.y,3,r*o,(r+1)*o),n.ctx.fillStyle=b[t.charCodeAt(0)%b.length],n.ctx.fill()})})},n.snapItems=function(){Object(l.a)(n.fdg.placedItems,n.areaSize,n.hexagonCoordMatrix,I,E),n.draw()},n}u()(n,t);var e=n.prototype;return e.componentDidMount=function(){var t=this;this.hexagonCoordMatrix=Object(l.b)(I,E);var n=500/L;this.hexagonCoordMatrix.forEach(function(e,r){e.forEach(function(e,r){t.backgroundCtx.fillRect(n*e.theta,n*e.phi,1,1)})}),h.a.Post.list().then(function(n){var e=n.data().items;t.setup(e)})},e.render=function(){var t=this;return f.a.createElement(f.a.Fragment,null,f.a.createElement("div",{style:{height:500}},f.a.createElement("canvas",{style:{position:"absolute"},width:"500",height:"500",ref:function(n){return t.backgroundCtx=n.getContext("2d")}}),f.a.createElement("canvas",{style:{position:"absolute"},width:"500",height:"500",ref:function(n){return t.ctx=n.getContext("2d")}})),f.a.createElement("button",{onClick:this.randomize,style:O.button},"randomize"),f.a.createElement("button",{onClick:this.bump,style:O.button},"bump"),f.a.createElement(v.default,{onToggle:this.onToggleOngoing,style:O.button}),f.a.createElement("button",{onClick:this.snapItems,style:O.button},"assign"))},n}(s.Component);n.default=S},174:function(t,n,e){"use strict";var r=function(){function t(t,n){this.x=t,this.y=n}var n=t.prototype;return n.add=function(t){return this.x+=t.x,this.y+=t.y,this},n.scale=function(t){return this.x*=t,this.y*=t,this},t}();n.a=r},176:function(t,n,e){"use strict";e(175),e(40);var r=e(174);n.a=function(t,n){var e=this;void 0===n&&(n=4e-4),this.areaSize=null,this.placedItems=null,this.ACCELERATION_FACTOR=null,this.relationshipMatrix=[[]],this.forceOnItemFromSourceItem=function(t,n,e,r){throw new Error("forceOnItemFromSourceItem() not defined as (\n      targetItem: Item,\n      sourceItem: Item,\n      areaSize: Point2D,\n      relationship: object\n    ): Point2D")},this.totalForceOnItem=function(t){var n=e.placedItems[t],o=new r.a(0,0);return e.placedItems.forEach(function(r,i){if(r.id!==n.id){var a=e.forceOnItemFromSourceItem(n,r,e.areaSize,e.relationshipMatrix[i][t]);o.add(a)}}),o},this.getInitialPlacement=function(t){return new r.a(e.areaSize.x*Math.random(),e.areaSize.y*Math.random())},this.initializePositions=function(t){e.placedItems=t.map(function(t){return Object.assign({},t,{position:e.getInitialPlacement(t)})})},this.moveItem=function(t,n){t.position.add(n),t.position.x<0?t.position.x+=e.areaSize.x:t.position.x>e.areaSize.x&&(t.position.x-=e.areaSize.x),t.position.y<0?t.position.y+=e.areaSize.y:t.position.y>e.areaSize.y&&(t.position.y-=e.areaSize.y)},this.step=function(t){void 0===t&&(t=1);for(var n=t;n>0;n--)for(var r=e.placedItems.length-1;r>=0;r--){var o=e.totalForceOnItem(r);e.moveItem(e.placedItems[r],o.scale(e.ACCELERATION_FACTOR))}},this.getItemsRelationship=function(t,n){throw"getItemsRelationship must be defined as (sourceItem:Item, targetItem:Item):object"},this.prepareRelationshipMatrix=function(){for(var t=e.placedItems.length,n=Array(t).fill(0).map(function(){return Array(t).fill(0)}),r=0;r<t;++r)for(var o=0;o<t;++o)if(r!=o){var i=e.placedItems[r],a=e.placedItems[o],c=e.getItemsRelationship(i,a);n[r][o]=c,n[o][r]=c}return e.relationshipMatrix=n,n},this.bump=function(t){e.placedItems.forEach(function(n){n.position.x+=t*(Math.random()-.5),n.position.y+=t*(Math.random()-.5)})},this.areaSize=t,this.ACCELERATION_FACTOR=n}},177:function(t,n,e){"use strict";var r=e(186),o=e.n(r),i=e(188),a=e.n(i);n.a=o()({clientId:"joes-blog",host:"",middleware:[a.a],resources:{Post:{list:{path:"/feed-1.json?z="+Math.random()}}}})},180:function(t,n,e){"use strict";e.d(n,"a",function(){return o});var r=function(t,n,e){if(t==n)return 0;var r=n-t;if(t<n){var o=t+e-n;return r<o?r:-o}var i=n+e-t;return-r<i?r:i},o=function(t,n,e){var o=r(t.x,n.x,e.x),i=r(t.y,n.y,e.y),a=Math.sqrt(o*o+i*i);return{magnitude:a,direction:{x:o/a,y:i/a}}}},184:function(t,n,e){"use strict";e.d(n,"b",function(){return i}),e.d(n,"a",function(){return a});e(189),e(193);var r=e(180),o=e(174),i=function(t,n){for(var e=3*t,r=2*Math.PI/e,i=2*Math.PI/n,a=0,c=[],u=0;u<n;u++){c[u]=Array(t);for(var s=a%2==1?1.5*r:0,f=0;f<t;f++)c[u][f]=new o.a(s+3*f*r,u*i);a++}return c},a=function(t,n,e,i,a){var c=function(t,n){for(var e=[],r=0;r<n;r++){e[r]=Array(t);for(var o=0;o<t;o++)e[r][o]=null}return e}(i,a);t.forEach(function(t){var i=t.position,a={magnitude:Number.MAX_SAFE_INTEGER},u=null,s=null;e.forEach(function(t,e){t.forEach(function(t,o){if(!c[e][o]){var f=Object(r.a)(i,t,n);f.magnitude<a.magnitude&&(a=f,u=t,s={row:e,col:o})}})}),u&&(t.position=new o.a(u.x,u.y),c[s.row][s.col]=t)})}},187:function(t,n){},194:function(t,n,e){"use strict";var r=e(174),o=e(180);n.a=function(t,n,e,c){var u=Object(o.a)(t.position,n.position,e),s=u.magnitude,f=u.direction,h=c.similarity,l=-1.5/(s/30),p=h>0?a(s,l,h):i(s,l,h);return new r.a(p*f.x,p*f.y)};var i=function(t,n,e){return t<.9?n+10*e/(100*(t+1)):0},a=function(t,n,e){return n+800*e/(40*(t+1))}},195:function(t,n,e){"use strict";e(192);var r=e(174);n.a=function(t){var n,e,o;if(o!=t.postId){o=t.postId;for(var i=t.tags.sort().join("")||"uncategorized",a=0,c=i.length-1;c>=0;c--)a+=i.charCodeAt(c);e=a%628/100+.05*Math.random(),n=.1+.5*Math.random()}return n+=.01,new r.a(n*Math.cos(e),n*Math.sin(e))}},196:function(t,n,e){"use strict";var r=e(256),o=e(255);n.a=function(t,n){var e=Object(r.a)(t.tags.map(o.a),n.tags.map(o.a)),i=e.length>=1?5+5*Math.log(e.length):-5;return t.postId&&t.postId===n.postId&&(i+=20),{similarity:i}}},214:function(t,n,e){var r=function(t){"use strict";var n,e=Object.prototype,r=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,n,e,r){var o=n&&n.prototype instanceof m?n:m,i=Object.create(o.prototype),a=new M(r||[]);return i._invoke=function(t,n,e){var r=f;return function(o,i){if(r===l)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return A()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=L(a,e);if(c){if(c===d)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(r===f)throw r=p,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r=l;var u=s(t,n,e);if("normal"===u.type){if(r=e.done?p:h,u.arg===d)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(r=p,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function s(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(r){return{type:"throw",arg:r}}}t.wrap=u;var f="suspendedStart",h="suspendedYield",l="executing",p="completed",d={};function m(){}function g(){}function v(){}var y={};y[i]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(P([])));x&&x!==e&&r.call(x,i)&&(y=x);var I=v.prototype=m.prototype=Object.create(y);function E(t){["next","throw","return"].forEach(function(n){t[n]=function(t){return this._invoke(n,t)}})}function b(t){var n;this._invoke=function(e,o){function i(){return new Promise(function(n,i){!function n(e,o,i,a){var c=s(t[e],t,o);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?Promise.resolve(f.__await).then(function(t){n("next",t,i,a)},function(t){n("throw",t,i,a)}):Promise.resolve(f).then(function(t){u.value=t,i(u)},function(t){return n("throw",t,i,a)})}a(c.arg)}(e,o,n,i)})}return n=n?n.then(i,i):i()}}function L(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,L(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=s(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function O(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function S(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function P(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(r.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}return{next:A}}function A(){return{value:n,done:!0}}return g.prototype=I.constructor=v,v.constructor=g,v[c]=g.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===g||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(I),t},t.awrap=function(t){return{__await:t}},E(b.prototype),b.prototype[a]=function(){return this},t.AsyncIterator=b,t.async=function(n,e,r,o){var i=new b(u(n,e,r,o));return t.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},E(I),I[c]="Generator",I[i]=function(){return this},I.toString=function(){return"[object Generator]"},t.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=P,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(r,o){return c.type="throw",c.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),d},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),S(e),d}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;S(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),d}},t}(t.exports);try{regeneratorRuntime=r}catch(o){Function("r","regeneratorRuntime = r")(r)}},230:function(t,n,e){t.exports=e(214)},231:function(t,n){function e(t,n,e,r,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void e(s)}c.done?n(u):Promise.resolve(u).then(r,o)}t.exports=function(t){return function(){var n=this,r=arguments;return new Promise(function(o,i){var a=t.apply(n,r);function c(t){e(a,o,i,c,u,"next",t)}function u(t){e(a,o,i,c,u,"throw",t)}c(void 0)})}}}}]);
//# sourceMappingURL=component---src-pages-incremented-force-directed-posts-index-js-51695e6cb156377d2595.js.map