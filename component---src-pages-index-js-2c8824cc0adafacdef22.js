(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{147:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=(n(144),n(160),n(7)),i=n.n(o),s=n(149),c=.08,h=function(e){function t(t){var n;return(n=e.call(this,t)||this).tapHandler=function(e){console.log("tap",{event:e})},n.onDocumentKeyDown=function(e){var t=n.keyHandler[e.code];t&&t(e)},n.onDocumentResize=function(){var e=window,t=e.innerWidth,a=e.innerHeight;n.renderer.setSize(t,a),n.camera.aspect=t/a,n.camera.updateProjectionMatrix()},n.tapHandler=function(e){e.preventDefault();var t=e.center,a=t.x,r=t.y,o=new s.k;o.x=a/n.renderer.domElement.clientWidth*2-1,o.y=-r/n.renderer.domElement.clientHeight*2+1,n.raycaster.setFromCamera(o,n.camera);var i=n.raycaster.intersectObjects(n.group.children);if(i.length>0){var c=i[0].object.postId;console.log({postId:c})}},n.animate=function(){requestAnimationFrame(n.animate),n.updateCameraPosition(),n.renderer.render(n.scene,n.camera)},n.updateCameraPosition=function(){n.cameraSpeedX*=1-c,n.cameraSpeedY*=1-c,n.cameraSpeedZ*=1-c,n.cameraPosX+=n.cameraSpeedX,n.cameraPosY+=n.cameraSpeedY,n.cameraPosZ+=n.cameraSpeedZ,n.camera.position.set(n.cameraPosX,n.cameraPosY,n.cameraPosZ)},n.cameraPosX=0,n.cameraPosY=0,n.cameraPosZ=10,n.cameraSpeedX=0,n.cameraSpeedY=0,n.cameraSpeedZ=0,n.raycaster=new s.h,n.position=0,n.meshObjects=[],n.keyHandler={},n.swipeHandler=function(){},n}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){document.body.style.overflow="hidden";var e=window,t=e.innerWidth,a=e.innerHeight;this.renderer=new s.m,document.body.appendChild(this.renderer.domElement),this.scene=new s.i,this.renderer.setSize(t,a);this.far=10,this.camera=new s.g(60,t/a,1,this.far),window.addEventListener("resize",this.onDocumentResize),document.addEventListener("keydown",this.onDocumentKeyDown);var r=n(162),o=new r(this.renderer.domElement);o.get("swipe").set({direction:r.DIRECTION_ALL}),o.on("swipe",this.swipeHandler),o.on("tap",this.tapHandler)},a.render=function(){return null},t}(a.Component),d=function(){for(var e=[],t=0;t<2*Math.PI;t+=Math.PI/3){var n=new s.k(Math.cos(t),Math.sin(t));e.push(n)}return e}(),p=function(e,t){var n=m+f*Math.cos(t);return new s.l(n*Math.cos(e),f*Math.sin(t),n*Math.sin(e))},u=function(e,t,n,a){var r=new s.b;r.vertices.push(p(e,t));var o=[new s.k(.5,.5)];d.forEach(function(i){r.vertices.push(p(e+n*i.x,t+a*i.y)),o.push(new s.k(.5-.5*i.x,.5-.5*i.y))});for(var i=1;i<=6;i++){var c=new s.a(0,i,i+1);r.faces.push(c),r.faceVertexUvs[0].push([o[0],o[i],o[i+1]])}return r},l=(u(),function(e,t,n){var a=(new s.j).load(t);a.anisotropy=n.capabilities.getMaxAnisotropy();var r=new s.f({map:a});return new s.e(e,r)}),m=(Math.sin(Math.PI/3),10),f=3,v=n(163),w=n.n(v),P=n(171),y=n.n(P),g=w()({clientId:"joes-blog",host:"",middleware:[y.a],resources:{Post:{list:{path:"/feed-1.json?z="+Math.random()}}}}),M=n(173),x=20,E=.05,k=.01,b=.005,H=50,S=3*H,T=40,I=2*Math.PI/S,z=2*Math.PI/T;m=x,f=4;var C=function(e){function t(){var t;return(t=e.call(this)||this).swipeHandler=function(e){t.speedTheta+=.01*e.overallVelocityX,t.speedPhi-=.01*e.overallVelocityY},t.handlePosts=function(e){for(var n=Object(M.a)(e.map(function(e){var t=e.link;return e.images.map(function(e){return{link:t,image:e}})})),a=t.getThetaSize(),r=t.getPhiSize(),o=[],i=0;i<T;i++){o[i]=new Array(H);for(var s=0;s<H;s++)o[i][s]=!1}n.forEach(function(e,n){if(e){var o=Math.floor(n/H),i=n%H,s=t.hexagonCoordMatrix[o][i],c=l(u(s.theta,s.phi,a,r),e.image,t.renderer);c.link=e.link,t.thetaGroup.add(c),n++}})},t.getThetaSize=function(){return.97*I},t.getPhiSize=function(){return.97*z/Math.sin(Math.PI/3)},t.setupTorus=function(){for(var e=[],n=0;n<2*Math.PI;n+=I)for(var a=0;a<2*Math.PI;a+=z)e.push(p(n,a));var r=new s.b;e.forEach(function(e){r.vertices.push(e)});for(var o=r.vertices.length,i=0;i<o;i++){var c=new s.a(i,(i+T)%o,(i+1)%o);r.faces.push(c)}var h=new s.d(new s.n(r));h.material.depthTest=!0,h.material.opacity=1,h.material.transparent=!0;var d=0;t.hexagonCoordMatrix=[];for(var u=0;u<T;u++){t.hexagonCoordMatrix[u]=Array(H);for(var l=d++%2==1?1.5*I:0,m=0;m<H;m++)t.hexagonCoordMatrix[u][m]={phi:u*z,theta:l+3*m*I}}g.Post.list().then(function(e){var n=e.data().items;t.handlePosts(n)}),t.thetaGroup.position.z=-.95*x,t.phiGroup.add(t.thetaGroup),t.scene.add(t.phiGroup),t.animate()},t.tapHandler=function(e){var n=e.center,a=n.x,r=n.y,o=new s.k;o.x=a/t.renderer.domElement.clientWidth*2-1,o.y=-r/t.renderer.domElement.clientHeight*2+1,t.raycaster.setFromCamera(o,t.camera);var i=t.raycaster.intersectObjects(t.thetaGroup.children);if(i.length>0){var c=i[0].object.link;document.location.href=c}},t.updateCameraPosition=function(){t.speedTheta*=1-E,t.speedPhi*=1-E,t.positionPhi+=t.speedPhi,t.positionTheta+=t.speedTheta,t.thetaGroup.rotation.y=t.positionTheta,t.phiGroup.rotation.x=t.positionPhi},t.thetaGroup=new s.c,t.phiGroup=new s.c,t.cameraPosX=0,t.cameraPosY=0,t.cameraPosZ=0,t.positionTheta=4.6,t.positionPhi=Math.PI+.3,t.speedTheta=.005,t.speedPhi=0,t.keyHandler={ArrowRight:function(){t.speedTheta-=b},ArrowLeft:function(){t.speedTheta+=b},ArrowUp:function(){t.speedPhi-=k},ArrowDown:function(){t.speedPhi+=k}},t}return i()(t,e),t.prototype.componentDidMount=function(){e.prototype.componentDidMount.call(this),this.camera.position.set(this.cameraPosX,this.cameraPosY,this.cameraPosZ),this.setupTorus()},t}(h),D=function(){return r.a.createElement(C,null)},j=n(150);n(145),t.default=function(){return r.a.createElement("div",null,r.a.createElement(j.Helmet,null,r.a.createElement("title",null,"Joe's Web Page"),r.a.createElement("link",{rel:"apple-touch-icon",href:"/homescreen_icon.png"}),r.a.createElement("link",{rel:"icon",sizes:"192x192",href:"/android_icon.png"})),r.a.createElement(D,null))}},170:function(e,t){}}]);
//# sourceMappingURL=component---src-pages-index-js-2c8824cc0adafacdef22.js.map