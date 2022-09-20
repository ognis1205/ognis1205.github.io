"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[365],{9365:function(d,b,a){a.d(b,{z:function(){return h}});var c=a(9477);let e={type:"change"},f={type:"start"},g={type:"end"};class h extends c.pBf{constructor(d,b){super(),void 0===b&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),b===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=d,this.domElement=b,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new c.Pa4,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:c.RsA.ROTATE,MIDDLE:c.RsA.DOLLY,RIGHT:c.RsA.PAN},this.touches={ONE:c.QmN.ROTATE,TWO:c.QmN.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(a){a.addEventListener("keydown",Z),this._domElementKeyEvents=a},this.saveState=function(){a.target0.copy(a.target),a.position0.copy(a.object.position),a.zoom0=a.object.zoom},this.reset=function(){a.target.copy(a.target0),a.object.position.copy(a.position0),a.object.zoom=a.zoom0,a.object.updateProjectionMatrix(),a.dispatchEvent(e),a.update(),m=h.NONE},this.update=function(){let f=new c.Pa4,b=new c._fP().setFromUnitVectors(d.up,new c.Pa4(0,1,0)),g=b.clone().invert(),i=new c.Pa4,j=new c._fP,k=2*Math.PI;return function(){let l=a.object.position;f.copy(l).sub(a.target),f.applyQuaternion(b),o.setFromVector3(f),a.autoRotate&&m===h.NONE&&G(E()),a.enableDamping?(o.theta+=p.theta*a.dampingFactor,o.phi+=p.phi*a.dampingFactor):(o.theta+=p.theta,o.phi+=p.phi);let c=a.minAzimuthAngle,d=a.maxAzimuthAngle;return isFinite(c)&&isFinite(d)&&(c< -Math.PI?c+=k:c>Math.PI&&(c-=k),d< -Math.PI?d+=k:d>Math.PI&&(d-=k),c<=d?o.theta=Math.max(c,Math.min(d,o.theta)):o.theta=o.theta>(c+d)/2?Math.max(c,o.theta):Math.min(d,o.theta)),o.phi=Math.max(a.minPolarAngle,Math.min(a.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=q,o.radius=Math.max(a.minDistance,Math.min(a.maxDistance,o.radius)),!0===a.enableDamping?a.target.addScaledVector(r,a.dampingFactor):a.target.add(r),f.setFromSpherical(o),f.applyQuaternion(g),l.copy(a.target).add(f),a.object.lookAt(a.target),!0===a.enableDamping?(p.theta*=1-a.dampingFactor,p.phi*=1-a.dampingFactor,r.multiplyScalar(1-a.dampingFactor)):(p.set(0,0,0),r.set(0,0,0)),q=1,!!(s||i.distanceToSquared(a.object.position)>n||8*(1-j.dot(a.object.quaternion))>n)&&(a.dispatchEvent(e),i.copy(a.object.position),j.copy(a.object.quaternion),s=!1,!0)}}(),this.dispose=function(){a.domElement.removeEventListener("contextmenu",l),a.domElement.removeEventListener("pointerdown",i),a.domElement.removeEventListener("pointercancel",j),a.domElement.removeEventListener("wheel",k),a.domElement.removeEventListener("pointermove",V),a.domElement.removeEventListener("pointerup",W),null!==a._domElementKeyEvents&&a._domElementKeyEvents.removeEventListener("keydown",Z)};let a=this,h={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},m=h.NONE,n=1e-6,o=new c.$V,p=new c.$V,q=1,r=new c.Pa4,s=!1,t=new c.FM8,u=new c.FM8,v=new c.FM8,w=new c.FM8,x=new c.FM8,y=new c.FM8,z=new c.FM8,A=new c.FM8,B=new c.FM8,C=[],D={};function E(){return 2*Math.PI/60/60*a.autoRotateSpeed}function F(){return Math.pow(.95,a.zoomSpeed)}function G(a){p.theta-=a}function H(a){p.phi-=a}let I=function(){let a=new c.Pa4;return function(b,c){a.setFromMatrixColumn(c,0),a.multiplyScalar(-b),r.add(a)}}(),J=function(){let b=new c.Pa4;return function(d,c){!0===a.screenSpacePanning?b.setFromMatrixColumn(c,1):(b.setFromMatrixColumn(c,0),b.crossVectors(a.object.up,b)),b.multiplyScalar(d),r.add(b)}}(),K=function(){let b=new c.Pa4;return function(d,e){let c=a.domElement;if(a.object.isPerspectiveCamera){let g=a.object.position;b.copy(g).sub(a.target);let f=b.length();I(2*d*(f*=Math.tan(a.object.fov/2*Math.PI/180))/c.clientHeight,a.object.matrix),J(2*e*f/c.clientHeight,a.object.matrix)}else a.object.isOrthographicCamera?(I(d*(a.object.right-a.object.left)/a.object.zoom/c.clientWidth,a.object.matrix),J(e*(a.object.top-a.object.bottom)/a.object.zoom/c.clientHeight,a.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),a.enablePan=!1)}}();function L(b){a.object.isPerspectiveCamera?q/=b:a.object.isOrthographicCamera?(a.object.zoom=Math.max(a.minZoom,Math.min(a.maxZoom,a.object.zoom*b)),a.object.updateProjectionMatrix(),s=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),a.enableZoom=!1)}function M(b){a.object.isPerspectiveCamera?q*=b:a.object.isOrthographicCamera?(a.object.zoom=Math.max(a.minZoom,Math.min(a.maxZoom,a.object.zoom/b)),a.object.updateProjectionMatrix(),s=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),a.enableZoom=!1)}function N(a){t.set(a.clientX,a.clientY)}function O(a){w.set(a.clientX,a.clientY)}function P(){if(1===C.length)t.set(C[0].pageX,C[0].pageY);else{let a=.5*(C[0].pageX+C[1].pageX),b=.5*(C[0].pageY+C[1].pageY);t.set(a,b)}}function Q(){if(1===C.length)w.set(C[0].pageX,C[0].pageY);else{let a=.5*(C[0].pageX+C[1].pageX),b=.5*(C[0].pageY+C[1].pageY);w.set(a,b)}}function R(){let a=C[0].pageX-C[1].pageX,b=C[0].pageY-C[1].pageY;z.set(0,Math.sqrt(a*a+b*b))}function S(b){if(1==C.length)u.set(b.pageX,b.pageY);else{let c=ad(b),e=.5*(b.pageX+c.x),f=.5*(b.pageY+c.y);u.set(e,f)}v.subVectors(u,t).multiplyScalar(a.rotateSpeed);let d=a.domElement;G(2*Math.PI*v.x/d.clientHeight),H(2*Math.PI*v.y/d.clientHeight),t.copy(u)}function T(b){if(1===C.length)x.set(b.pageX,b.pageY);else{let c=ad(b),d=.5*(b.pageX+c.x),e=.5*(b.pageY+c.y);x.set(d,e)}y.subVectors(x,w).multiplyScalar(a.panSpeed),K(y.x,y.y),w.copy(x)}function U(b){let c=ad(b),d=b.pageX-c.x,e=b.pageY-c.y;A.set(0,Math.sqrt(d*d+e*e)),B.set(0,Math.pow(A.y/z.y,a.zoomSpeed)),L(B.y),z.copy(A)}function i(b){!1!==a.enabled&&(0===C.length&&(a.domElement.setPointerCapture(b.pointerId),a.domElement.addEventListener("pointermove",V),a.domElement.addEventListener("pointerup",W)),aa(b),"touch"===b.pointerType?$(b):X(b))}function V(b){!1!==a.enabled&&("touch"===b.pointerType?_(b):Y(b))}function W(b){ab(b),0===C.length&&(a.domElement.releasePointerCapture(b.pointerId),a.domElement.removeEventListener("pointermove",V),a.domElement.removeEventListener("pointerup",W)),a.dispatchEvent(g),m=h.NONE}function j(a){ab(a)}function X(b){let d;switch(b.button){case 0:d=a.mouseButtons.LEFT;break;case 1:d=a.mouseButtons.MIDDLE;break;case 2:d=a.mouseButtons.RIGHT;break;default:d=-1}switch(d){case c.RsA.DOLLY:var e;if(!1===a.enableZoom)return;e=b,z.set(e.clientX,e.clientY),m=h.DOLLY;break;case c.RsA.ROTATE:if(b.ctrlKey||b.metaKey||b.shiftKey){if(!1===a.enablePan)return;O(b),m=h.PAN}else{if(!1===a.enableRotate)return;N(b),m=h.ROTATE}break;case c.RsA.PAN:if(b.ctrlKey||b.metaKey||b.shiftKey){if(!1===a.enableRotate)return;N(b),m=h.ROTATE}else{if(!1===a.enablePan)return;O(b),m=h.PAN}break;default:m=h.NONE}m!==h.NONE&&a.dispatchEvent(f)}function Y(b){var c,d;if(!1!==a.enabled)switch(m){case h.ROTATE:if(!1===a.enableRotate)return;!function(b){u.set(b.clientX,b.clientY),v.subVectors(u,t).multiplyScalar(a.rotateSpeed);let c=a.domElement;G(2*Math.PI*v.x/c.clientHeight),H(2*Math.PI*v.y/c.clientHeight),t.copy(u),a.update()}(b);break;case h.DOLLY:if(!1===a.enableZoom)return;c=b,A.set(c.clientX,c.clientY),B.subVectors(A,z),B.y>0?L(F()):B.y<0&&M(F()),z.copy(A),a.update();break;case h.PAN:if(!1===a.enablePan)return;d=b,x.set(d.clientX,d.clientY),y.subVectors(x,w).multiplyScalar(a.panSpeed),K(y.x,y.y),w.copy(x),a.update()}}function k(b){if(!1!==a.enabled&& !1!==a.enableZoom&&m===h.NONE){var c;b.preventDefault(),a.dispatchEvent(f),(c=b).deltaY<0?M(F()):c.deltaY>0&&L(F()),a.update(),a.dispatchEvent(g)}}function Z(b){!1!==a.enabled&& !1!==a.enablePan&&function(c){let b=!1;switch(c.code){case a.keys.UP:K(0,a.keyPanSpeed),b=!0;break;case a.keys.BOTTOM:K(0,-a.keyPanSpeed),b=!0;break;case a.keys.LEFT:K(a.keyPanSpeed,0),b=!0;break;case a.keys.RIGHT:K(-a.keyPanSpeed,0),b=!0}b&&(c.preventDefault(),a.update())}(b)}function $(b){switch(ac(b),C.length){case 1:switch(a.touches.ONE){case c.QmN.ROTATE:if(!1===a.enableRotate)return;P(),m=h.TOUCH_ROTATE;break;case c.QmN.PAN:if(!1===a.enablePan)return;Q(),m=h.TOUCH_PAN;break;default:m=h.NONE}break;case 2:switch(a.touches.TWO){case c.QmN.DOLLY_PAN:if(!1===a.enableZoom&& !1===a.enablePan)return;a.enableZoom&&R(),a.enablePan&&Q(),m=h.TOUCH_DOLLY_PAN;break;case c.QmN.DOLLY_ROTATE:if(!1===a.enableZoom&& !1===a.enableRotate)return;a.enableZoom&&R(),a.enableRotate&&P(),m=h.TOUCH_DOLLY_ROTATE;break;default:m=h.NONE}break;default:m=h.NONE}m!==h.NONE&&a.dispatchEvent(f)}function _(b){var c,d;switch(ac(b),m){case h.TOUCH_ROTATE:if(!1===a.enableRotate)return;S(b),a.update();break;case h.TOUCH_PAN:if(!1===a.enablePan)return;T(b),a.update();break;case h.TOUCH_DOLLY_PAN:if(!1===a.enableZoom&& !1===a.enablePan)return;c=b,a.enableZoom&&U(c),a.enablePan&&T(c),a.update();break;case h.TOUCH_DOLLY_ROTATE:if(!1===a.enableZoom&& !1===a.enableRotate)return;d=b,a.enableZoom&&U(d),a.enableRotate&&S(d),a.update();break;default:m=h.NONE}}function l(b){!1!==a.enabled&&b.preventDefault()}function aa(a){C.push(a)}function ab(b){delete D[b.pointerId];for(let a=0;a<C.length;a++)if(C[a].pointerId==b.pointerId){C.splice(a,1);return}}function ac(a){let b=D[a.pointerId];void 0===b&&(b=new c.FM8,D[a.pointerId]=b),b.set(a.pageX,a.pageY)}function ad(a){let b=a.pointerId===C[0].pointerId?C[1]:C[0];return D[b.pointerId]}a.domElement.addEventListener("contextmenu",l),a.domElement.addEventListener("pointerdown",i),a.domElement.addEventListener("pointercancel",j),a.domElement.addEventListener("wheel",k,{passive:!1}),this.update()}}}}])