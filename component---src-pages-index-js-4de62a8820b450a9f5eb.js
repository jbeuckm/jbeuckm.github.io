(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{173:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=(n(232),n(8)),o=n.n(i),c=n(204),s=.08,u=function(e){function t(t){var n;return(n=e.call(this,t)||this).onDocumentKeyDown=function(e){var t=n.keyHandler[e.code];t&&t(e)},n.animate=function(){requestAnimationFrame(n.animate),n.updateCameraPosition(),n.renderer.render(n.scene,n.camera)},n.updateCameraPosition=function(){n.cameraSpeedX*=1-s,n.cameraSpeedY*=1-s,n.cameraSpeedZ*=1-s,n.cameraPosX+=n.cameraSpeedX,n.cameraPosY+=n.cameraSpeedY,n.cameraPosZ+=n.cameraSpeedZ,n.camera.position.set(n.cameraPosX,n.cameraPosY,n.cameraPosZ)},n.onDocumentResize=function(){var e=window,t=e.innerWidth,a=e.innerHeight;n.renderer.setSize(t,a),n.camera.aspect=t/a,n.camera.updateProjectionMatrix()},n.canvasRef=Object(a.createRef)(),n.cameraPosX=0,n.cameraPosY=0,n.cameraPosZ=10,n.cameraSpeedX=0,n.cameraSpeedY=0,n.cameraSpeedZ=0,n.raycaster=new c.g,n.position=0,n.meshObjects=[],n.keyHandler={},n.swipeHandler=function(){},n}o()(t,e);var i=t.prototype;return i.componentDidMount=function(){document.body.style.overflow="hidden";var e=window,t=e.innerWidth,a=e.innerHeight;this.renderer=new c.l({canvas:this.canvasRef.current}),this.scene=new c.h,this.renderer.setSize(t,a);this.far=10,this.camera=new c.f(60,t/a,1,this.far),window.addEventListener("resize",this.onDocumentResize),document.addEventListener("keydown",this.onDocumentKeyDown);var r=n(234),i=new r(this.renderer.domElement);i.get("swipe").set({direction:r.DIRECTION_ALL}),i.on("swipe",this.swipeHandler),i.on("tap",this.tapHandler.bind(this))},i.tapHandler=function(e){var t=e.center,n=t.x,a=t.y,r=new c.j;r.x=n/this.renderer.domElement.clientWidth*2-1,r.y=-a/this.renderer.domElement.clientHeight*2+1,this.raycaster.setFromCamera(r,this.camera);var i=this.raycaster.intersectObjects(this.group.children);if(i.length>0)return this.handleObjectTapped(i[0].object),!0},i.render=function(){return r.a.createElement("div",{id:"holder",style:{position:"relative"}},r.a.createElement("canvas",{style:{position:"absolute",zIndex:1},ref:this.canvasRef}))},t}(a.Component),h=n(184),d=n(177),l=10,p=3,f=function(){for(var e=[],t=0;t<2*Math.PI;t+=Math.PI/3){var n=new c.j(Math.cos(t),Math.sin(t));e.push(n)}return e}(),m=function(e,t){var n=l+p*Math.cos(t);return new c.k(n*Math.cos(e),p*Math.sin(t),n*Math.sin(e))},v=function(e,t,n,a){var r=new c.b;r.vertices.push(m(e,t));var i=[new c.j(.5,.5)];f.forEach(function(o){r.vertices.push(m(e+n*o.x,t+a*o.y)),i.push(new c.j(.5-.5*o.x,.5-.5*o.y))});for(var o=1;o<=6;o++){var s=new c.a(0,o,o+1);r.faces.push(s),r.faceVertexUvs[0].push([i[0],i[o],i[o+1]])}return r},w=(v(),function(e,t,n){var a=(new c.i).load(t);a.anisotropy=n.capabilities.getMaxAnisotropy();var r=new c.e({map:a});return new c.d(e,r)}),y=2*Math.PI,P=20,b=.05,g=.01,E=.005,M=50,x=40,T=y/(3*M),j=y/x;l=P,p=4;var O=function(e){function t(){var t;return(t=e.call(this)||this).swipeHandler=function(e){t.speedTheta+=.01*e.overallVelocityX,t.speedPhi-=.01*e.overallVelocityY},t.handlePosts=function(e){var n=.97*T,a=.97*j/Math.sin(Math.PI/3);e.forEach(function(e,r){var i=w(v(e.position.x,e.position.y,n,a),e.image,t.renderer);i.link=e.link,t.thetaGroup.add(i)})},t.setupTorus=function(){t.hexagonCoordMatrix=Object(h.b)(M,x),t.thetaGroup.position.z=-.95*P,t.phiGroup.add(t.thetaGroup),t.scene.add(t.phiGroup),d.a.Post.list().then(function(e){var n=e.data().layout;console.log({layout:n}),n.initialTheta&&(t.positionTheta=n.initialTheta),n.initialPhi&&(t.positionPhi=n.initialPhi);var a=e.data().items;t.handlePosts(a)}),t.animate()},t.handleObjectTapped=function(e){var t=e.link;document.location.href=t},t.updateCameraPosition=function(){t.speedTheta*=1-b,t.speedPhi*=1-b,t.positionPhi+=t.speedPhi,t.positionTheta+=t.speedTheta,t.thetaGroup.rotation.y=t.positionTheta,t.phiGroup.rotation.x=t.positionPhi},t.thetaGroup=new c.c,t.group=t.thetaGroup,t.phiGroup=new c.c,t.cameraPosZ=0,t.positionTheta=4.28,t.positionPhi=34.7,t.speedTheta=.005,t.speedPhi=0,t.keyHandler={ArrowRight:function(){return t.speedTheta-=E},ArrowLeft:function(){return t.speedTheta+=E},ArrowUp:function(){return t.speedPhi-=g},ArrowDown:function(){return t.speedPhi+=g},Space:function(){return console.log(t.positionTheta,t.positionPhi)}},t}return o()(t,e),t.prototype.componentDidMount=function(){e.prototype.componentDidMount.call(this),this.camera.position.set(this.cameraPosX,this.cameraPosY,this.cameraPosZ),this.setupTorus()},t}(u),k=function(e,t){var n=e-t;return n<-180?n+360:n>179?n-360:n},S=function(e){var t=e.onChangeOrientation,n=Object(a.useState)(),i=n[0],o=n[1],c=Object(a.useState)(),s=c[0],u=c[1],h=Object(a.useCallback)(function(e){o&&(void 0===i?(console.log("und",i,e.beta,s,e.gamma),o(e.beta),u(e.gamma)):(console.log("set",i,s),t({beta:k(e.beta,i),gamma:k(e.gamma,s)}),o(.95*i+.05*e.beta),u(.95*s+.05*e.gamma)))},[o,u,i,s]),d=Object(a.useCallback)(function(){"function"==typeof DeviceOrientationEvent.requestPermission&&DeviceOrientationEvent.requestPermission().then(function(e){"granted"===e&&window.addEventListener("deviceorientation",h,!0)}).catch(console.error)},[h]);return r.a.createElement("div",{style:{position:"absolute",zIndex:1e3}},r.a.createElement("button",{type:"button",onClick:d},"track"))},D=function(){var e=Object(a.createRef)();return Object(a.useEffect)(function(){try{window.screen.orientation.lock("portrait-primary")}catch(e){console.log(e)}},[]),r.a.createElement("div",{style:{position:"relative"}},r.a.createElement(O,{ref:e}),r.a.createElement(S,{onChangeOrientation:function(t){var n=t.gamma,a=t.beta;if(e.current){var r=Math.abs(a);if(r>10){var i=a>=0?1:-1;e.current.speedPhi=-.003*i*Math.sqrt(r)}var o=Math.abs(n);if(o>20){var c=n>=0?1:-1;e.current.speedTheta=7e-4*c*Math.sqrt(o)}}}}),r.a.createElement("div",{style:{marginTop:30,position:"absolute"}},r.a.createElement("div",{style:{margin:2,color:"#fff"}},"theta",e.current?e.current.speedTheta:"?"),r.a.createElement("div",{style:{margin:2,color:"#fff"}},"phi",e.current?e.current.speedPhi:"?")))},C=n(196);n(171),t.default=function(){return r.a.createElement("div",null,r.a.createElement(C.Helmet,null,r.a.createElement("title",null,"Joe's Web Page"),r.a.createElement("link",{rel:"apple-touch-icon",href:"/homescreen_icon.png"}),r.a.createElement("link",{rel:"icon",sizes:"192x192",href:"/android_icon.png"})),r.a.createElement(D,null))}},174:function(e,t,n){"use strict";var a=function(){function e(e,t){this.x=e,this.y=t}var t=e.prototype;return t.add=function(e){return this.x+=e.x,this.y+=e.y,this},t.scale=function(e){return this.x*=e,this.y*=e,this},e}();t.a=a},177:function(e,t,n){"use strict";var a=n(185),r=n.n(a),i=n(187),o=n.n(i);t.a=r()({clientId:"joes-blog",host:"",middleware:[o.a],resources:{Post:{list:{path:"/feed-1.json?z="+Math.random()}}}})},178:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=function(e,t,n){if(e==t)return 0;var a=t-e;if(e<t){var r=e+n-t;return a<r?a:-r}var i=t+n-e;return-a<i?a:i},r=function(e,t,n){var r=a(e.x,t.x,n.x),i=a(e.y,t.y,n.y),o=Math.sqrt(r*r+i*i);return{magnitude:o,direction:{x:r/o,y:i/o}}}},184:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return o});n(188),n(192);var a=n(178),r=n(174),i=function(e,t){for(var n=3*e,a=2*Math.PI/n,i=2*Math.PI/t,o=0,c=[],s=0;s<t;s++){c[s]=Array(e);for(var u=o%2==1?1.5*a:0,h=0;h<e;h++)c[s][h]=new r.a(u+3*h*a,s*i);o++}return c},o=function(e,t,n,i,o){var c=function(e,t){for(var n=[],a=0;a<t;a++){n[a]=Array(e);for(var r=0;r<e;r++)n[a][r]=null}return n}(i,o);e.forEach(function(e){var i=e.position,o={magnitude:Number.MAX_SAFE_INTEGER},s=null,u=null;n.forEach(function(e,n){e.forEach(function(e,r){if(!c[n][r]){var h=Object(a.a)(i,e,t);h.magnitude<o.magnitude&&(o=h,s=e,u={row:n,col:r})}})}),s&&(e.position=new r.a(s.x,s.y),c[u.row][u.col]=e)})}},186:function(e,t){}}]);
//# sourceMappingURL=component---src-pages-index-js-4de62a8820b450a9f5eb.js.map