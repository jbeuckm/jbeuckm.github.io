(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{173:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),o=(n(232),n(8)),a=n.n(o),c=n(204),s=.08,u=function(e){function t(t){var n;return(n=e.call(this,t)||this).onDocumentKeyDown=function(e){var t=n.keyHandler[e.code];t&&t(e)},n.animate=function(){requestAnimationFrame(n.animate),n.updateCameraPosition(),n.renderer.render(n.scene,n.camera)},n.updateCameraPosition=function(){n.cameraSpeedX*=1-s,n.cameraSpeedY*=1-s,n.cameraSpeedZ*=1-s,n.cameraPosX+=n.cameraSpeedX,n.cameraPosY+=n.cameraSpeedY,n.cameraPosZ+=n.cameraSpeedZ,n.camera.position.set(n.cameraPosX,n.cameraPosY,n.cameraPosZ)},n.onDocumentResize=function(){var e=window,t=e.innerWidth,r=e.innerHeight;n.renderer.setSize(t,r),n.camera.aspect=t/r,n.camera.updateProjectionMatrix()},n.canvasRef=Object(r.createRef)(),n.cameraPosX=0,n.cameraPosY=0,n.cameraPosZ=10,n.cameraSpeedX=0,n.cameraSpeedY=0,n.cameraSpeedZ=0,n.raycaster=new c.g,n.position=0,n.meshObjects=[],n.keyHandler={},n.swipeHandler=function(){},n}a()(t,e);var o=t.prototype;return o.componentDidMount=function(){document.body.style.overflow="hidden";var e=window,t=e.innerWidth,r=e.innerHeight;this.renderer=new c.l({canvas:this.canvasRef.current}),this.scene=new c.h,this.renderer.setSize(t,r);this.far=10,this.camera=new c.f(60,t/r,1,this.far),window.addEventListener("resize",this.onDocumentResize),document.addEventListener("keydown",this.onDocumentKeyDown);var i=n(234),o=new i(this.renderer.domElement);o.get("swipe").set({direction:i.DIRECTION_ALL}),o.on("swipe",this.swipeHandler),o.on("tap",this.tapHandler.bind(this))},o.tapHandler=function(e){var t=e.center,n=t.x,r=t.y,i=new c.j;i.x=n/this.renderer.domElement.clientWidth*2-1,i.y=-r/this.renderer.domElement.clientHeight*2+1,this.raycaster.setFromCamera(i,this.camera);var o=this.raycaster.intersectObjects(this.group.children);if(o.length>0)return this.handleObjectTapped(o[0].object),!0;this.checkDeviceEvents()},o.render=function(){return i.a.createElement("div",{id:"holder",style:{position:"relative"}},i.a.createElement("canvas",{style:{position:"absolute",zIndex:1},ref:this.canvasRef}))},t}(r.Component),h=n(184),d=n(177),l=10,p=3,f=function(){for(var e=[],t=0;t<2*Math.PI;t+=Math.PI/3){var n=new c.j(Math.cos(t),Math.sin(t));e.push(n)}return e}(),m=function(e,t){var n=l+p*Math.cos(t);return new c.k(n*Math.cos(e),p*Math.sin(t),n*Math.sin(e))},v=function(e,t,n,r){var i=new c.b;i.vertices.push(m(e,t));var o=[new c.j(.5,.5)];f.forEach(function(a){i.vertices.push(m(e+n*a.x,t+r*a.y)),o.push(new c.j(.5-.5*a.x,.5-.5*a.y))});for(var a=1;a<=6;a++){var s=new c.a(0,a,a+1);i.faces.push(s),i.faceVertexUvs[0].push([o[0],o[a],o[a+1]])}return i},w=(v(),function(e,t,n){var r=(new c.i).load(t);r.anisotropy=n.capabilities.getMaxAnisotropy();var i=new c.e({map:r});return new c.d(e,i)}),y=2*Math.PI,P=20,E=.05,g=.01,M=.005,b=50,x=40,T=y/(3*b),j=y/x;l=P,p=4;var D=function(e){function t(){var t;return(t=e.call(this)||this).swipeHandler=function(e){t.speedTheta+=.01*e.overallVelocityX,t.speedPhi-=.01*e.overallVelocityY},t.handlePosts=function(e){var n=.97*T,r=.97*j/Math.sin(Math.PI/3);e.forEach(function(e,i){var o=w(v(e.position.x,e.position.y,n,r),e.image,t.renderer);o.link=e.link,t.thetaGroup.add(o)})},t.setupTorus=function(){t.hexagonCoordMatrix=Object(h.b)(b,x),t.thetaGroup.position.z=-.95*P,t.phiGroup.add(t.thetaGroup),t.scene.add(t.phiGroup),d.a.Post.list().then(function(e){var n=e.data().layout;console.log({layout:n}),n.initialTheta&&(t.positionTheta=n.initialTheta),n.initialPhi&&(t.positionPhi=n.initialPhi);var r=e.data().items;t.handlePosts(r)}),t.animate()},t.handleObjectTapped=function(e){var t=e.link;document.location.href=t},t.updateCameraPosition=function(){t.speedTheta*=1-E,t.speedPhi*=1-E,t.positionPhi+=t.speedPhi,t.positionTheta+=t.speedTheta,t.thetaGroup.rotation.y=t.positionTheta,t.phiGroup.rotation.x=t.positionPhi},t.thetaGroup=new c.c,t.group=t.thetaGroup,t.phiGroup=new c.c,t.cameraPosZ=0,t.positionTheta=4.28,t.positionPhi=34.7,t.speedTheta=.005,t.speedPhi=0,t.keyHandler={ArrowRight:function(){return t.speedTheta-=M},ArrowLeft:function(){return t.speedTheta+=M},ArrowUp:function(){return t.speedPhi-=g},ArrowDown:function(){return t.speedPhi+=g},Space:function(){return console.log(t.positionTheta,t.positionPhi)}},t}a()(t,e);var n=t.prototype;return n.handleMotionEvent=function(e){this.speedPhi+=.1*e.accelerationIncludingGravity.x},n.checkDeviceEvents=function(){var e=this;console.log("cde"),"function"==typeof DeviceMotionEvent.requestPermission&&DeviceMotionEvent.requestPermission().then(function(t){"granted"===t&&window.addEventListener("devicemotion",e.handleMotionEvent,!0)}).catch(console.error)},n.componentDidMount=function(){e.prototype.componentDidMount.call(this),this.camera.position.set(this.cameraPosX,this.cameraPosY,this.cameraPosZ),this.setupTorus()},t}(u),k=function(e){var t=e.onAcceleration,n=Object(r.useState)(0),o=n[0],a=n[1],c=function(e){a(e.accelerationIncludingGravity.x),t(e)};return i.a.createElement("div",{style:{position:"absolute",zIndex:1e3}},i.a.createElement("button",{type:"button",onClick:function(){console.log("cde"),"function"==typeof DeviceMotionEvent.requestPermission&&DeviceMotionEvent.requestPermission().then(function(e){"granted"===e&&window.addEventListener("devicemotion",c,!0)}).catch(console.error)}},"track"),i.a.createElement("span",{style:{color:"#66f",marginLeft:10}},o))},I=function(){var e=Object(r.createRef)();return Object(r.useEffect)(function(){console.log("torusRef.current",e.current)},[e]),i.a.createElement("div",{style:{position:"relative"}},i.a.createElement(D,{ref:e}),i.a.createElement(k,{onAcceleration:function(t){e.current&&(e.current.speedPhi+=.1*t.accelerationIncludingGravity.x)}}))},G=n(196);n(171),t.default=function(){return i.a.createElement("div",null,i.a.createElement(G.Helmet,null,i.a.createElement("title",null,"Joe's Web Page"),i.a.createElement("link",{rel:"apple-touch-icon",href:"/homescreen_icon.png"}),i.a.createElement("link",{rel:"icon",sizes:"192x192",href:"/android_icon.png"})),i.a.createElement(I,null))}},174:function(e,t,n){"use strict";var r=function(){function e(e,t){this.x=e,this.y=t}var t=e.prototype;return t.add=function(e){return this.x+=e.x,this.y+=e.y,this},t.scale=function(e){return this.x*=e,this.y*=e,this},e}();t.a=r},177:function(e,t,n){"use strict";var r=n(185),i=n.n(r),o=n(187),a=n.n(o);t.a=i()({clientId:"joes-blog",host:"",middleware:[a.a],resources:{Post:{list:{path:"/feed-1.json?z="+Math.random()}}}})},178:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=function(e,t,n){if(e==t)return 0;var r=t-e;if(e<t){var i=e+n-t;return r<i?r:-i}var o=t+n-e;return-r<o?r:o},i=function(e,t,n){var i=r(e.x,t.x,n.x),o=r(e.y,t.y,n.y),a=Math.sqrt(i*i+o*o);return{magnitude:a,direction:{x:i/a,y:o/a}}}},184:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return a});n(188),n(192);var r=n(178),i=n(174),o=function(e,t){for(var n=3*e,r=2*Math.PI/n,o=2*Math.PI/t,a=0,c=[],s=0;s<t;s++){c[s]=Array(e);for(var u=a%2==1?1.5*r:0,h=0;h<e;h++)c[s][h]=new i.a(u+3*h*r,s*o);a++}return c},a=function(e,t,n,o,a){var c=function(e,t){for(var n=[],r=0;r<t;r++){n[r]=Array(e);for(var i=0;i<e;i++)n[r][i]=null}return n}(o,a);e.forEach(function(e){var o=e.position,a={magnitude:Number.MAX_SAFE_INTEGER},s=null,u=null;n.forEach(function(e,n){e.forEach(function(e,i){if(!c[n][i]){var h=Object(r.a)(o,e,t);h.magnitude<a.magnitude&&(a=h,s=e,u={row:n,col:i})}})}),s&&(e.position=new i.a(s.x,s.y),c[u.row][u.col]=e)})}},186:function(e,t){}}]);
//# sourceMappingURL=component---src-pages-index-js-391317948309a198363e.js.map