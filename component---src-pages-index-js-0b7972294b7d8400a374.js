(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{170:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=(t(224),t(8)),i=t.n(o),c=t(197),s=.08,u=function(e){function n(n){var t;return(t=e.call(this,n)||this).onDocumentKeyDown=function(e){var n=t.keyHandler[e.code];n&&n(e)},t.tapHandler=function(e){var n=e.center,r=n.x,a=n.y,o=new c.j;o.x=r/t.renderer.domElement.clientWidth*2-1,o.y=-a/t.renderer.domElement.clientHeight*2+1,t.raycaster.setFromCamera(o,t.camera);var i=t.raycaster.intersectObjects(t.group.children);i.length>0&&t.handleObjectTapped(i[0].object)},t.animate=function(){requestAnimationFrame(t.animate),t.updateCameraPosition(),t.renderer.render(t.scene,t.camera)},t.updateCameraPosition=function(){t.cameraSpeedX*=1-s,t.cameraSpeedY*=1-s,t.cameraSpeedZ*=1-s,t.cameraPosX+=t.cameraSpeedX,t.cameraPosY+=t.cameraSpeedY,t.cameraPosZ+=t.cameraSpeedZ,t.camera.position.set(t.cameraPosX,t.cameraPosY,t.cameraPosZ)},t.onDocumentResize=function(){var e=window,n=e.innerWidth,r=e.innerHeight;t.renderer.setSize(n,r),t.camera.aspect=n/r,t.camera.updateProjectionMatrix()},t.cameraPosX=0,t.cameraPosY=0,t.cameraPosZ=10,t.cameraSpeedX=0,t.cameraSpeedY=0,t.cameraSpeedZ=0,t.raycaster=new c.g,t.position=0,t.meshObjects=[],t.keyHandler={},t.swipeHandler=function(){},t}i()(n,e);var r=n.prototype;return r.componentDidMount=function(){document.body.style.overflow="hidden";var e=window,n=e.innerWidth,r=e.innerHeight;this.renderer=new c.l,document.body.appendChild(this.renderer.domElement),this.scene=new c.h,this.renderer.setSize(n,r);this.far=10,this.camera=new c.f(60,n/r,1,this.far),window.addEventListener("resize",this.onDocumentResize),document.addEventListener("keydown",this.onDocumentKeyDown);var a=t(226),o=new a(this.renderer.domElement);o.get("swipe").set({direction:a.DIRECTION_ALL}),o.on("swipe",this.swipeHandler),o.on("tap",this.tapHandler)},r.render=function(){return null},n}(r.Component),h=t(180),d=t(174),p=10,l=3,f=function(){for(var e=[],n=0;n<2*Math.PI;n+=Math.PI/3){var t=new c.j(Math.cos(n),Math.sin(n));e.push(t)}return e}(),m=function(e,n){var t=p+l*Math.cos(n);return new c.k(t*Math.cos(e),l*Math.sin(n),t*Math.sin(e))},v=function(e,n,t,r){var a=new c.b;a.vertices.push(m(e,n));var o=[new c.j(.5,.5)];f.forEach(function(i){a.vertices.push(m(e+t*i.x,n+r*i.y)),o.push(new c.j(.5-.5*i.x,.5-.5*i.y))});for(var i=1;i<=6;i++){var s=new c.a(0,i,i+1);a.faces.push(s),a.faceVertexUvs[0].push([o[0],o[i],o[i+1]])}return a},w=(v(),function(e,n,t){var r=(new c.i).load(n);r.anisotropy=t.capabilities.getMaxAnisotropy();var a=new c.e({map:r});return new c.d(e,a)}),P=2*Math.PI,y=20,E=.05,M=.01,g=.005,x=50,b=40,T=P/(3*x),j=P/b;p=y,l=4;var S=function(e){function n(){var n;return(n=e.call(this)||this).swipeHandler=function(e){n.speedTheta+=.01*e.overallVelocityX,n.speedPhi-=.01*e.overallVelocityY},n.handlePosts=function(e){var t=.97*T,r=.97*j/Math.sin(Math.PI/3);e.forEach(function(e,a){var o=w(v(e.position.x,e.position.y,t,r),e.image,n.renderer);o.link=e.link,n.thetaGroup.add(o)})},n.setupTorus=function(){n.hexagonCoordMatrix=Object(h.b)(x,b),n.thetaGroup.position.z=-.95*y,n.phiGroup.add(n.thetaGroup),n.scene.add(n.phiGroup),d.a.Post.list().then(function(e){var t=e.data().items;n.handlePosts(t)}),n.animate()},n.handleObjectTapped=function(e){var n=e.link;document.location.href=n},n.updateCameraPosition=function(){n.speedTheta*=1-E,n.speedPhi*=1-E,n.positionPhi+=n.speedPhi,n.positionTheta+=n.speedTheta,n.thetaGroup.rotation.y=n.positionTheta,n.phiGroup.rotation.x=n.positionPhi},n.thetaGroup=new c.c,n.group=n.thetaGroup,n.phiGroup=new c.c,n.cameraPosZ=0,n.positionTheta=1.9,n.positionPhi=31,n.speedTheta=.005,n.speedPhi=0,n.keyHandler={ArrowRight:function(){return n.speedTheta-=g},ArrowLeft:function(){return n.speedTheta+=g},ArrowUp:function(){return n.speedPhi-=M},ArrowDown:function(){return n.speedPhi+=M},Space:function(){return console.log(n.positionTheta,n.positionPhi)}},n}return i()(n,e),n.prototype.componentDidMount=function(){e.prototype.componentDidMount.call(this),this.camera.position.set(this.cameraPosX,this.cameraPosY,this.cameraPosZ),this.setupTorus()},n}(u),k=function(){return a.a.createElement(S,null)},H=t(201);t(169),n.default=function(){return a.a.createElement("div",null,a.a.createElement(H.Helmet,null,a.a.createElement("title",null,"Joe's Web Page"),a.a.createElement("link",{rel:"apple-touch-icon",href:"/homescreen_icon.png"}),a.a.createElement("link",{rel:"icon",sizes:"192x192",href:"/android_icon.png"})),a.a.createElement(k,null))}},171:function(e,n,t){"use strict";var r=function(){function e(e,n){this.x=e,this.y=n}var n=e.prototype;return n.add=function(e){return this.x+=e.x,this.y+=e.y,this},n.scale=function(e){return this.x*=e,this.y*=e,this},e}();n.a=r},174:function(e,n,t){"use strict";var r=t(181),a=t.n(r),o=t(183),i=t.n(o);n.a=a()({clientId:"joes-blog",host:"",middleware:[i.a],resources:{Post:{list:{path:"/feed-1.json?z="+Math.random()}}}})},175:function(e,n,t){"use strict";t.d(n,"a",function(){return a});var r=function(e,n,t){if(e==n)return 0;var r=n-e;if(e<n){var a=e+t-n;return r<a?r:-a}var o=n+t-e;return-r<o?r:o},a=function(e,n,t){var a=r(e.x,n.x,t.x),o=r(e.y,n.y,t.y),i=Math.sqrt(a*a+o*o);return{magnitude:i,direction:{x:a/i,y:o/i}}}},180:function(e,n,t){"use strict";t.d(n,"b",function(){return o}),t.d(n,"a",function(){return i});t(184),t(186);var r=t(175),a=t(171),o=function(e,n){for(var t=3*e,r=2*Math.PI/t,o=2*Math.PI/n,i=0,c=[],s=0;s<n;s++){c[s]=Array(e);for(var u=i%2==1?1.5*r:0,h=0;h<e;h++)c[s][h]=new a.a(u+3*h*r,s*o);i++}return c},i=function(e,n,t,o,i){var c=function(e,n){for(var t=[],r=0;r<n;r++){t[r]=Array(e);for(var a=0;a<e;a++)t[r][a]=null}return t}(o,i);e.forEach(function(e){var o=e.position,i={magnitude:Number.MAX_SAFE_INTEGER},s=null,u=null;t.forEach(function(e,t){e.forEach(function(e,a){if(!c[t][a]){var h=Object(r.a)(o,e,n);h.magnitude<i.magnitude&&(i=h,s=e,u={row:t,col:a})}})}),s&&(e.position=new a.a(s.x,s.y),c[u.row][u.col]=e)})}},182:function(e,n){}}]);
//# sourceMappingURL=component---src-pages-index-js-0b7972294b7d8400a374.js.map