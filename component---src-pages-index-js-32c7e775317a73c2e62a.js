(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{173:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),a=(n(232),n(8)),o=n.n(a),c=n(204),s=.08,u=function(e){function t(t){var n;return(n=e.call(this,t)||this).onDocumentKeyDown=function(e){var t=n.keyHandler[e.code];t&&t(e)},n.animate=function(){requestAnimationFrame(n.animate),n.updateCameraPosition(),n.renderer.render(n.scene,n.camera)},n.updateCameraPosition=function(){n.cameraSpeedX*=1-s,n.cameraSpeedY*=1-s,n.cameraSpeedZ*=1-s,n.cameraPosX+=n.cameraSpeedX,n.cameraPosY+=n.cameraSpeedY,n.cameraPosZ+=n.cameraSpeedZ,n.camera.position.set(n.cameraPosX,n.cameraPosY,n.cameraPosZ)},n.onDocumentResize=function(){var e=window,t=e.innerWidth,i=e.innerHeight;n.renderer.setSize(t,i),n.camera.aspect=t/i,n.camera.updateProjectionMatrix()},n.canvasRef=Object(i.createRef)(),n.cameraPosX=0,n.cameraPosY=0,n.cameraPosZ=10,n.cameraSpeedX=0,n.cameraSpeedY=0,n.cameraSpeedZ=0,n.raycaster=new c.g,n.position=0,n.meshObjects=[],n.keyHandler={},n.swipeHandler=function(){},n}o()(t,e);var a=t.prototype;return a.componentDidMount=function(){document.body.style.overflow="hidden";var e=window,t=e.innerWidth,i=e.innerHeight;this.renderer=new c.l({canvas:this.canvasRef.current}),this.scene=new c.h,this.renderer.setSize(t,i);this.far=10,this.camera=new c.f(60,t/i,1,this.far),window.addEventListener("resize",this.onDocumentResize),document.addEventListener("keydown",this.onDocumentKeyDown);var r=n(234),a=new r(this.renderer.domElement);a.get("swipe").set({direction:r.DIRECTION_ALL}),a.on("swipe",this.swipeHandler),a.on("tap",this.tapHandler.bind(this))},a.tapHandler=function(e){var t=e.center,n=t.x,i=t.y,r=new c.j;r.x=n/this.renderer.domElement.clientWidth*2-1,r.y=-i/this.renderer.domElement.clientHeight*2+1,this.raycaster.setFromCamera(r,this.camera);var a=this.raycaster.intersectObjects(this.group.children);if(a.length>0)return this.handleObjectTapped(a[0].object),!0;this.checkDeviceEvents()},a.render=function(){return r.a.createElement("div",{id:"holder",style:{position:"relative"}},r.a.createElement("canvas",{style:{position:"absolute",zIndex:1},ref:this.canvasRef}))},t}(i.Component),h=n(184),d=n(177),l=10,p=3,f=function(){for(var e=[],t=0;t<2*Math.PI;t+=Math.PI/3){var n=new c.j(Math.cos(t),Math.sin(t));e.push(n)}return e}(),v=function(e,t){var n=l+p*Math.cos(t);return new c.k(n*Math.cos(e),p*Math.sin(t),n*Math.sin(e))},m=function(e,t,n,i){var r=new c.b;r.vertices.push(v(e,t));var a=[new c.j(.5,.5)];f.forEach(function(o){r.vertices.push(v(e+n*o.x,t+i*o.y)),a.push(new c.j(.5-.5*o.x,.5-.5*o.y))});for(var o=1;o<=6;o++){var s=new c.a(0,o,o+1);r.faces.push(s),r.faceVertexUvs[0].push([a[0],a[o],a[o+1]])}return r},y=(m(),function(e,t,n){var i=(new c.i).load(t);i.anisotropy=n.capabilities.getMaxAnisotropy();var r=new c.e({map:i});return new c.d(e,r)}),w=2*Math.PI,P=20,E=.05,g=.01,b=.005,x=50,M=40,j=w/(3*x),T=w/M;l=P,p=4;var I=function(e){function t(){var t;return(t=e.call(this)||this).swipeHandler=function(e){t.speedTheta+=.01*e.overallVelocityX,t.speedPhi-=.01*e.overallVelocityY},t.handlePosts=function(e){var n=.97*j,i=.97*T/Math.sin(Math.PI/3);e.forEach(function(e,r){var a=y(m(e.position.x,e.position.y,n,i),e.image,t.renderer);a.link=e.link,t.thetaGroup.add(a)})},t.setupTorus=function(){t.hexagonCoordMatrix=Object(h.b)(x,M),t.thetaGroup.position.z=-.95*P,t.phiGroup.add(t.thetaGroup),t.scene.add(t.phiGroup),d.a.Post.list().then(function(e){var n=e.data().layout;console.log({layout:n}),n.initialTheta&&(t.positionTheta=n.initialTheta),n.initialPhi&&(t.positionPhi=n.initialPhi);var i=e.data().items;t.handlePosts(i)}),t.animate()},t.handleObjectTapped=function(e){var t=e.link;document.location.href=t},t.updateCameraPosition=function(){t.speedTheta*=1-E,t.speedPhi*=1-E,t.positionPhi+=t.speedPhi,t.positionTheta+=t.speedTheta,t.thetaGroup.rotation.y=t.positionTheta,t.phiGroup.rotation.x=t.positionPhi},t.thetaGroup=new c.c,t.group=t.thetaGroup,t.phiGroup=new c.c,t.cameraPosZ=0,t.positionTheta=4.28,t.positionPhi=34.7,t.speedTheta=.005,t.speedPhi=0,t.keyHandler={ArrowRight:function(){return t.speedTheta-=b},ArrowLeft:function(){return t.speedTheta+=b},ArrowUp:function(){return t.speedPhi-=g},ArrowDown:function(){return t.speedPhi+=g},Space:function(){return console.log(t.positionTheta,t.positionPhi)}},t}o()(t,e);var n=t.prototype;return n.handleMotionEvent=function(e){this.speedPhi+=.1*e.accelerationIncludingGravity.x},n.checkDeviceEvents=function(){var e=this;console.log("cde"),"function"==typeof DeviceMotionEvent.requestPermission&&DeviceMotionEvent.requestPermission().then(function(t){"granted"===t&&window.addEventListener("devicemotion",e.handleMotionEvent,!0)}).catch(console.error)},n.componentDidMount=function(){e.prototype.componentDidMount.call(this),this.camera.position.set(this.cameraPosX,this.cameraPosY,this.cameraPosZ),this.setupTorus()},t}(u),G=function(e){var t=e.onChangeOrientation,n=Object(i.useState)(),a=n[0],o=n[1],c=Object(i.useState)(),s=c[0],u=c[1],h=Object(i.useState)(),d=h[0],l=h[1],p=function(e){void 0===a?(o(e.accelerationIncludingGravity.x),u(e.accelerationIncludingGravity.y),l(e.accelerationIncludingGravity.z)):t({x:e.accelerationIncludingGravity.x-a,y:e.accelerationIncludingGravity.y-s,z:e.accelerationIncludingGravity.z-d})};return r.a.createElement("div",{style:{position:"absolute",zIndex:1e3}},r.a.createElement("button",{type:"button",onClick:function(){console.log("cde"),"function"==typeof DeviceMotionEvent.requestPermission&&DeviceMotionEvent.requestPermission().then(function(e){"granted"===e&&window.addEventListener("devicemotion",p,!0)}).catch(console.error)}},"track"))},D=function(){var e=Object(i.createRef)();return Object(i.useEffect)(function(){console.log("torusRef.current",e.current)},[e]),r.a.createElement("div",{style:{position:"relative"}},r.a.createElement(I,{ref:e}),r.a.createElement(G,{onChangeOrientation:function(t){var n=t.x,i=t.y;t.z,e.current&&(e.current.speedPhi+=-1e-4*n,e.current.speedTheta+=-1e-4*i)}}))},k=n(196);n(171),t.default=function(){return r.a.createElement("div",null,r.a.createElement(k.Helmet,null,r.a.createElement("title",null,"Joe's Web Page"),r.a.createElement("link",{rel:"apple-touch-icon",href:"/homescreen_icon.png"}),r.a.createElement("link",{rel:"icon",sizes:"192x192",href:"/android_icon.png"})),r.a.createElement(D,null))}},174:function(e,t,n){"use strict";var i=function(){function e(e,t){this.x=e,this.y=t}var t=e.prototype;return t.add=function(e){return this.x+=e.x,this.y+=e.y,this},t.scale=function(e){return this.x*=e,this.y*=e,this},e}();t.a=i},177:function(e,t,n){"use strict";var i=n(185),r=n.n(i),a=n(187),o=n.n(a);t.a=r()({clientId:"joes-blog",host:"",middleware:[o.a],resources:{Post:{list:{path:"/feed-1.json?z="+Math.random()}}}})},178:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var i=function(e,t,n){if(e==t)return 0;var i=t-e;if(e<t){var r=e+n-t;return i<r?i:-r}var a=t+n-e;return-i<a?i:a},r=function(e,t,n){var r=i(e.x,t.x,n.x),a=i(e.y,t.y,n.y),o=Math.sqrt(r*r+a*a);return{magnitude:o,direction:{x:r/o,y:a/o}}}},184:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return o});n(188),n(192);var i=n(178),r=n(174),a=function(e,t){for(var n=3*e,i=2*Math.PI/n,a=2*Math.PI/t,o=0,c=[],s=0;s<t;s++){c[s]=Array(e);for(var u=o%2==1?1.5*i:0,h=0;h<e;h++)c[s][h]=new r.a(u+3*h*i,s*a);o++}return c},o=function(e,t,n,a,o){var c=function(e,t){for(var n=[],i=0;i<t;i++){n[i]=Array(e);for(var r=0;r<e;r++)n[i][r]=null}return n}(a,o);e.forEach(function(e){var a=e.position,o={magnitude:Number.MAX_SAFE_INTEGER},s=null,u=null;n.forEach(function(e,n){e.forEach(function(e,r){if(!c[n][r]){var h=Object(i.a)(a,e,t);h.magnitude<o.magnitude&&(o=h,s=e,u={row:n,col:r})}})}),s&&(e.position=new r.a(s.x,s.y),c[u.row][u.col]=e)})}},186:function(e,t){}}]);
//# sourceMappingURL=component---src-pages-index-js-32c7e775317a73c2e62a.js.map