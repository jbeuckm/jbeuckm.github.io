(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),i=n.n(o),s=(n(275),n(276),n(188)),c=.08,h=function(e){function t(t){var n;return(n=e.call(this,t)||this).tapHandler=function(e){console.log("tap",{event:e})},n.onDocumentKeyDown=function(e){var t=n.keyHandler[e.code];t&&t(e)},n.onDocumentResize=function(){var e=window,t=e.innerWidth,a=e.innerHeight;n.renderer.setSize(t,a),n.camera.aspect=t/a,n.camera.updateProjectionMatrix()},n.tapHandler=function(e){e.preventDefault();var t=e.center,a=t.x,r=t.y,o=new s.k;o.x=a/n.renderer.domElement.clientWidth*2-1,o.y=-r/n.renderer.domElement.clientHeight*2+1,n.raycaster.setFromCamera(o,n.camera);var i=n.raycaster.intersectObjects(n.group.children);if(i.length>0){var c=i[0].object.postId;console.log({postId:c})}},n.animate=function(){requestAnimationFrame(n.animate),n.updateCameraPosition(),n.renderer.render(n.scene,n.camera)},n.updateCameraPosition=function(){n.cameraSpeedX*=1-c,n.cameraSpeedY*=1-c,n.cameraSpeedZ*=1-c,n.cameraPosX+=n.cameraSpeedX,n.cameraPosY+=n.cameraSpeedY,n.cameraPosZ+=n.cameraSpeedZ,n.camera.position.set(n.cameraPosX,n.cameraPosY,n.cameraPosZ)},n.cameraPosX=0,n.cameraPosY=0,n.cameraPosZ=10,n.cameraSpeedX=0,n.cameraSpeedY=0,n.cameraSpeedZ=0,n.raycaster=new s.h,n.position=0,n.meshObjects=[],n.keyHandler={},n.swipeHandler=function(){},n}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=window,t=e.innerWidth,a=e.innerHeight;this.renderer=new s.m,document.body.appendChild(this.renderer.domElement),this.scene=new s.i,this.renderer.setSize(t,a);this.far=10,this.camera=new s.g(60,t/a,1,this.far),window.addEventListener("resize",this.onDocumentResize),document.addEventListener("keydown",this.onDocumentKeyDown);var r=new(n(278))(this.renderer.domElement);r.on("swipe",this.swipeHandler),r.on("tap",this.tapHandler)},a.render=function(){return null},t}(a.Component),p=function(){for(var e=[],t=0;t<2*Math.PI;t+=Math.PI/3){var n=new s.k(Math.cos(t),Math.sin(t));e.push(n)}return e}(),u=function(e,t){var n=l+f*Math.cos(t);return new s.l(n*Math.cos(e),f*Math.sin(t),n*Math.sin(e))},d=function(e,t,n,a){var r=new s.b;r.vertices.push(u(e,t));var o=[new s.k(.5,.5)];p.forEach(function(i){r.vertices.push(u(e+n*i.x,t+a*i.y)),o.push(new s.k(.5-.5*i.x,.5-.5*i.y))});for(var i=1;i<=6;i++){var c=new s.a(0,i,i+1);r.faces.push(c),r.faceVertexUvs[0].push([o[0],o[i],o[i+1]])}return r},m=(d(),function(e,t,n){var a=(new s.j).load(t);a.anisotropy=n.capabilities.getMaxAnisotropy();var r=new s.f({map:a});return new s.e(e,r)}),l=(Math.sin(Math.PI/3),10),f=3,v=n(279),w=n.n(v),P=n(287),g=n.n(P),y=w()({clientId:"joes-blog",host:"",middleware:[g.a],resources:{Post:{list:{path:"/feed-1.json?z="+Math.random()}}}}),M=n(288),S=20,T=.05,b=.005,k=60,E=2*Math.PI/210,H=2*Math.PI/k;l=S,f=4;var I=function(e){function t(){var t;return(t=e.call(this)||this).swipeHandler=function(e){t.speedTheta+=.01*e.overallVelocityX},t.handlePosts=function(e){var n=Object(M.flatten)(e.map(function(e){var t=e.link;return e.images.map(function(e){return{link:t,image:e}})})),a=t.getThetaSize(),r=t.getPhiSize();n.forEach(function(e,n){if(e){var o=e.image,i=t.hexagonCoords[n],s=m(d(i.theta,i.phi,a,r),o,t.renderer);s.link=e.link,t.thetaGroup.add(s)}})},t.getThetaSize=function(){return.97*E},t.getPhiSize=function(){return.97*H/Math.sin(Math.PI/3)},t.setupTorus=function(){for(var e=[],n=0;n<2*Math.PI;n+=E)for(var a=0;a<2*Math.PI;a+=H)e.push(u(n,a));var r=new s.b;e.forEach(function(e){r.vertices.push(e)});for(var o=r.vertices.length,i=0;i<o;i++){var c=new s.a(i,(i+k)%o,(i+1)%o);r.faces.push(c)}var h=new s.d(new s.n(r));h.material.depthTest=!0,h.material.opacity=1,h.material.transparent=!0;var p=t.getThetaSize(),m=t.getPhiSize(),l=0;t.hexagonCoords=[];for(var f=0;f<2*Math.PI;f+=H)for(var v=l++%2==1?1.5*E:0,w=0;w<2*Math.PI;w+=3*E){t.hexagonCoords.push({theta:v+w,phi:f});var P=d(v+w,f,p,m),g=new s.d(new s.n(P));g.material.depthTest=!0,g.material.opacity=1,g.material.transparent=!0}y.Post.list().then(function(e){var n=e.data().items;t.handlePosts(n)}),t.thetaGroup.position.z=-.95*S,t.phiGroup.add(t.thetaGroup),t.scene.add(t.phiGroup),t.animate()},t.tapHandler=function(e){var n=e.center,a=n.x,r=n.y,o=new s.k;o.x=a/t.renderer.domElement.clientWidth*2-1,o.y=-r/t.renderer.domElement.clientHeight*2+1,t.raycaster.setFromCamera(o,t.camera);var i=t.raycaster.intersectObjects(t.thetaGroup.children);if(i.length>0){var c=i[0].object.link;document.location.href=c}},t.updateCameraPosition=function(){t.speedTheta*=1-T,t.speedPhi*=1-T,t.positionTheta+=t.speedTheta,t.thetaGroup.rotation.y=t.positionTheta,t.phiGroup.rotation.x=t.positionPhi},t.thetaGroup=new s.c,t.phiGroup=new s.c,t.group=new s.c,t.cameraPosX=0,t.cameraPosY=0,t.cameraPosZ=0,t.positionTheta=Math.PI,t.positionPhi=Math.PI+.1,t.speedTheta=.005,t.speedPhi=0,t.baseSpeedPhi=.001,t.baseSpeedTheta=3e-4,t.keyHandler={ArrowRight:function(){t.baseSpeedTheta=-3e-4,t.speedTheta-=b},ArrowLeft:function(){t.baseSpeedTheta=3e-4,t.speedTheta+=b}},t}return i()(t,e),t.prototype.componentDidMount=function(){e.prototype.componentDidMount.call(this),this.camera.position.set(this.cameraPosX,this.cameraPosY,this.cameraPosZ),this.setupTorus()},t}(h),x=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return r.a.createElement(I,null)},t}(a.Component),z=n(209);n(487),t.default=function(){return r.a.createElement("div",null,r.a.createElement(z.Helmet,null,r.a.createElement("title",null,"Joes Web Page"),r.a.createElement("link",{rel:"apple-touch-icon",href:"/homescreen_icon.png"})),r.a.createElement(x,null))}},286:function(e,t){}}]);
//# sourceMappingURL=component---src-pages-index-js-6e0b68643391d2a4aed7.js.map