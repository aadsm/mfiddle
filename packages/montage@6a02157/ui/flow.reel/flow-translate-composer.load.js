montageDefine("6a02157","ui/flow.reel/flow-translate-composer",{dependencies:["../../core/core","../../composer/translate-composer","../../core/event/event-manager","../../core/geometry/point","../../core/dom"],factory:function(e,t){var n=(e("../../core/core").Montage,e("../../composer/translate-composer").TranslateComposer),i=(e("../../core/event/event-manager").defaultEventManager,e("../../core/geometry/point").Point),r=e("../../core/dom").convertPointFromPageToNode;t.FlowTranslateComposer=n.specialize({constructor:{value:function(){this.super(),this.handleMousewheel=this.handleWheel}},stealChildrenPointer:{value:!0},_scrollingMode:{value:"linear"},scrollingMode:{get:function(){return this._scrollingMode},set:function(e){switch(e){case"linear":case"drag":this._scrollingMode=e}}},_linearScrollingVector:{value:[-300,0]},linearScrollingVector:{get:function(){return this._linearScrollingVector},set:function(e){this._linearScrollingVector=e}},_startPageX:{value:null},_startPageY:{value:null},_pageX:{value:null},_pageY:{value:null},_pointerStartX:{value:null},_pointerStartY:{value:null},_contentOffsetX:{value:null},_contentOffsetY:{value:null},_start:{value:function(e,t){n._start.apply(this,arguments);var a=window.getComputedStyle(this._element,null),o=this.convertCssPixelsPropertyStringToNumber(a.getPropertyValue("border-left-width")),s=this.convertCssPixelsPropertyStringToNumber(a.getPropertyValue("border-top-width")),l=this.convertCssPixelsPropertyStringToNumber(a.getPropertyValue("padding-left")),u=this.convertCssPixelsPropertyStringToNumber(a.getPropertyValue("padding-top")),c=r(this._element,(new i).init(e,t));this._pointerStartX=this._pointerX=c.x-o-l,this._pointerStartY=this._pointerY=c.y-s-u,this._contentOffsetX=this._startPageX-this._pointerStartX,this._contentOffsetY=this._startPageY-this._pointerStartY,this._computePointedElement(),this._startPageX=this._pageX=e,this._startPageY=this._pageY=t,this._startScroll=this._scroll,this._previousScrollDelta=0,this._scrollEnd=null}},_analyzeMovement:{value:function(e){var t,n,i,r=e.velocity;r&&(t=r.speed,t>=this.startTranslateSpeed?this._stealPointer():(n=this.startPageX-e.pageX,i=this.startPageY-e.pageY,n*n+i*i>this.startTranslateRadius*this.startTranslateRadius&&this._stealPointer()))}},_dispatchTranslateStart:{value:function(){var e=document.createEvent("CustomEvent");e.initCustomEvent("translateStart",!0,!0,null),e.scroll=this._scroll,e.translateX=0,e.translateY=0,e.pointer=this._observedPointer,this.dispatchEvent(e)}},_dispatchTranslateEnd:{value:function(){var e=document.createEvent("CustomEvent");e.initCustomEvent("translateEnd",!0,!0,null),e.scroll=this._scroll,e.translateX=0,e.translateY=0,e.pointer=this._observedPointer,this.dispatchEvent(e)}},_dispatchTranslateCancel:{value:function(){var e=document.createEvent("CustomEvent");e.initCustomEvent("translateCancel",!0,!0,null),e.scroll=this._scroll,e.translateX=0,e.translateY=0,e.pointer=this._observedPointer,this.dispatchEvent(e)}},_dispatchTranslate:{value:function(){var e=document.createEvent("CustomEvent");e.initCustomEvent("translate",!0,!0,null),e.scroll=this._scroll,e.translateX=0,e.translateY=0,e.pointer=this._observedPointer,this.dispatchEvent(e)}},_move:{value:function(e,t){this._isFirstMove&&(this._dispatchTranslateStart(),this._isFirstMove=!1),this._pageX=e,this._pageY=t,"drag"===this._scrollingMode?(this._pointerX=e-this._contentOffsetX,this._pointerY=t-this._contentOffsetY,this._updateDragScroll()):this._updateLinearScroll(),null!==this._closerIndex,this._shouldDispatchTranslate&&this._dispatchTranslate()}},_end:{value:function(e){this.eventManager.isPointerClaimedByComponent(this._observedPointer,this)&&(this.startTime=Date.now(),this.endX=this.startX=this._pageX,this.endY=this.startY=this._pageY,this._hasMomentum&&(e.velocity.speed>40||this.translateStrideX||this.translateStrideY)?(this.momentumX="vertical"!=this._axis?e.velocity.x*this._pointerSpeedMultiplier*(this._invertXAxis?1:-1):0,this.momentumY="horizontal"!=this._axis?e.velocity.y*this._pointerSpeedMultiplier*(this._invertYAxis?1:-1):0,this.endX=this.startX+this.momentumX*this.__momentumDuration/2e3,this.endY=this.startY+this.momentumY*this.__momentumDuration/2e3,this.startStrideXTime=null,this.startStrideYTime=null,this.animateMomentum=!0):this.animateMomentum=!1,this.animateMomentum?this._animationInterval():this._isFirstMove||this._dispatchTranslateEnd()),this._releaseInterest()}},_translateEndTimeout:{value:null},_mousewheelStrideTimeout:{value:null},_previousDeltaY:{value:0},handleWheel:{value:function(e){var t=this;if(this.eventManager.isPointerClaimedByComponent(this._WHEEL_POINTER,this.component)){var n=this._pageY,i=e.wheelDeltaY||-e.deltaY||0;this.translateStrideX?(window.clearTimeout(this._mousewheelStrideTimeout),(null===this._mousewheelStrideTimeout||Math.abs(i)>Math.abs(this._previousDeltaY*(null===this._mousewheelStrideTimeout?2:4)))&&(i>1?this.callDelegateMethod("previousStride",this):-1>i&&this.callDelegateMethod("nextStride",this)),this._mousewheelStrideTimeout=window.setTimeout(function(){t._mousewheelStrideTimeout=null,t._previousDeltaY=0},70),t._previousDeltaY=i,this._shouldPreventDefault(e)&&e.preventDefault()):(null===this._translateEndTimeout&&this._dispatchTranslateStart(),this._pageY=this._pageY+20*i/100,this._updateScroll(),this._dispatchTranslate(),window.clearTimeout(this._translateEndTimeout),this._translateEndTimeout=window.setTimeout(function(){t._dispatchTranslateEnd(),t._translateEndTimeout=null},400),n!==this._pageY&&this._shouldPreventDefault(e)&&e.preventDefault()),this.eventManager.forfeitPointer(this._WHEEL_POINTER,this.component)}}},_scroll:{value:0},scroll:{get:function(){return this._scroll},set:function(e){null!==this.minScroll&&this.minScroll>e&&(e=this.minScroll),null!==this.maxScroll&&e>this.maxScroll&&(e=this.maxScroll),this._scroll=e}},minScroll:{value:null},maxScroll:{value:null},_flow:{value:null},flow:{get:function(){return this._flow},set:function(e){this._flow=e,this.component=e}},_updateScroll:{value:function(){"linear"===this._scrollingMode?this._updateLinearScroll():this._updateDragScroll()}},_updateLinearScroll:{value:function(){var e=500/this._flow._height,t=(this._pageX-this._startPageX)*this._linearScrollingVector[0]*e,n=(this._pageY-this._startPageY)*this._linearScrollingVector[1]*e,i=this._linearScrollingVector[0]*this._linearScrollingVector[0]+this._linearScrollingVector[1]*this._linearScrollingVector[1],r=(t+n)/i;this.scroll+=r-this._previousScrollDelta,this._previousScrollDelta=r}},_updateDragScroll:{value:function(){var e=(this._pointerX-this._pointerStartX)*this._lineVectorX,t=(this._pointerY-this._pointerStartY)*this._lineVectorY,n=this._lineVectorX*this._lineVectorX+this._lineVectorY*this._lineVectorY,i=(e+t)/n;this.scroll+=i-this._previousScrollDelta,this._previousScrollDelta=i;var r,a,o,s,l,u,c,h,d,p,f,m,v,g,_,b,y,w,E,C,M=this._flow,P=M._cameraPosition,S=M._splinePaths,T=S.length,D=this._closerIndex%T,x=this.flow._splinePaths[D],O=Math.floor(this._closerIndex/T)-this._scroll+this._flow._paths[D].headOffset,L=null,A=null,k=0,z=.5*this._element.clientWidth,j=.5*this._element.clientHeight,e=z-this._pointerX,t=j-this._pointerY,I=M.cameraTargetPoint[0]-P[0],N=M.cameraTargetPoint[1]-P[1],R=M.cameraTargetPoint[2]-P[2],F=-Math.atan2(I,R),B=this._pointerIntersectionPosition;f=R*Math.cos(F)-I*Math.sin(F),m=-Math.atan2(N,f),b=Math.sin(F),y=Math.cos(F),w=Math.sin(m),E=Math.cos(m),g=j/Math.tan(.008726646259972*M.cameraFov),C=0,c=1e100;do p=x._convertSplineTimeToBezierIndexTime(O+C),null!==p&&(r=x.getPositionAtIndexTime(p),rotation=S[D].getRotationAtIndexTime(p),v=this._rotateXYZ(B,rotation),a=(P[2]-r[2]-v[2])*b-(r[0]-P[0]+v[0])*y,o=r[1]-P[1]+v[1],s=(r[2]-P[2]+v[2])*y-(r[0]-P[0]+v[0])*b,l=s*w+o*E,u=s*E-o*w,_=g/u,a=e+a*_,o=t+l*_,d=a*a+o*o,c>d&&(c=d,L=C)),C-=.025;while(C>-6);L+.025>0&&(L=-.025),C=L+.025,c=1e100;do p=x._convertSplineTimeToBezierIndexTime(O+C),null!==p&&(r=x.getPositionAtIndexTime(p),rotation=S[D].getRotationAtIndexTime(p),v=this._rotateXYZ(B,rotation),a=(P[2]-r[2]-v[2])*b-(r[0]-P[0]+v[0])*y,o=r[1]-P[1]+v[1],s=(r[2]-P[2]+v[2])*y-(r[0]-P[0]+v[0])*b,l=s*w+o*E,u=s*E-o*w,_=g/u,a=e+a*_,o=t+l*_,d=a*a+o*o,c>d&&(c=d,L=C)),C-=2e-4;while(C>L-.05);C=0,h=1e100;do p=x._convertSplineTimeToBezierIndexTime(O+C),null!==p&&(r=x.getPositionAtIndexTime(p),rotation=S[D].getRotationAtIndexTime(p),v=this._rotateXYZ(B,rotation),a=(P[2]-r[2]-v[2])*b-(r[0]-P[0]+v[0])*y,o=r[1]-P[1]+v[1],s=(r[2]-P[2]+v[2])*y-(r[0]-P[0]+v[0])*b,l=s*w+o*E,u=s*E-o*w,_=g/u,a=e+a*_,o=t+l*_,d=a*a+o*o,h>d&&(h=d,A=C)),C+=.025;while(6>C);0>A-.025&&(A=.025),C=A-.025,h=1e100;do p=x._convertSplineTimeToBezierIndexTime(O+C),null!==p&&(r=x.getPositionAtIndexTime(p),rotation=S[D].getRotationAtIndexTime(p),v=this._rotateXYZ(B,rotation),a=(P[2]-r[2]-v[2])*b-(r[0]-P[0]+v[0])*y,o=r[1]-P[1]+v[1],s=(r[2]-P[2]+v[2])*y-(r[0]-P[0]+v[0])*b,l=s*w+o*E,u=s*E-o*w,_=g/u,a=e+a*_,o=t+l*_,d=a*a+o*o,h>d&&(h=d,A=C)),C+=2e-4;while(A+.05>C);L?k=A?A*A>L*L?L:A:L:A&&(k=A),k>0?.05>=k&&(this.scroll=this._scroll-k):k>=-.05&&(this.scroll=this._scroll-k)}},frame:{value:function(){this.isAnimating&&this._animationInterval()}},convertCssPixelsPropertyStringToNumber:{value:function(e){return"string"==typeof e?"px"===e.substr(-2)?1*e.substr(0,e.length-2):0:0}},_rayPointDistance:{value:function(e,t){var n,i,r,a,o;return n=e[0]*t[0]+e[1]*t[1]+e[2]*t[2],n>=0?(i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n/=i,r=e[0]*n-t[0],a=e[1]*n-t[1],o=e[2]*n-t[2],Math.sqrt(r*r+a*a+o*o)):!1}},_rayRectangleIntersection:{value:function(e,t,n,i){var r,a,o,s,l,u=e[1]*i[2]-e[2]*i[1],c=e[2]*i[0]-e[0]*i[2],h=e[0]*i[1]-e[1]*i[0],d=n[0]*u+n[1]*c+n[2]*h,p=1e-10,f=!1;return-p>d?(r=-t[0]*u-t[1]*c-t[2]*h,0>r&&r>d&&(o=n[1]*t[2]-n[2]*t[1],s=n[2]*t[0]-n[0]*t[2],l=n[0]*t[1]-n[1]*t[0],a=e[0]*o+e[1]*s+e[2]*l,0>a&&a>d&&(f=(i[0]*o+i[1]*s+i[2]*l)/d,0>f&&(f=!1)))):d>p&&(r=-t[0]*u-t[1]*c-t[2]*h,r>0&&d>r&&(o=n[1]*t[2]-n[2]*t[1],s=n[2]*t[0]-n[0]*t[2],l=n[0]*t[1]-n[1]*t[0],a=e[0]*o+e[1]*s+e[2]*l,a>0&&d>a&&(f=(i[0]*o+i[1]*s+i[2]*l)/d,0>f&&(f=!1)))),f}},_rayRectangleIntersectionPosition:{enumerable:!1,value:function(e,t,n,i){var r,a,o,s,l,u=e[1]*i[2]-e[2]*i[1],c=e[2]*i[0]-e[0]*i[2],h=e[0]*i[1]-e[1]*i[0],d=n[0]*u+n[1]*c+n[2]*h,p=this._flow._boundingBoxSize;return r=-t[0]*u-t[1]*c-t[2]*h,o=n[1]*t[2]-n[2]*t[1],s=n[2]*t[0]-n[0]*t[2],l=n[0]*t[1]-n[1]*t[0],a=e[0]*o+e[1]*s+e[2]*l,[r*p[0]/d-.5*p[0],a*p[1]/d-.5*p[1],0]}},_rotateXYZ:{enumerable:!1,value:function(e,t){var n,i,r,a,o=Math.cos(t[0]),s=Math.sin(t[0]),l=Math.cos(t[1]),u=Math.sin(t[1]),c=Math.cos(t[2]),h=Math.sin(t[2]);return i=o*e[1]-s*e[2],r=s*e[1]+o*e[2],a=l*e[0]+u*r,r=-u*e[0]+l*r,n=c*a-h*i,i=h*a+c*i,[n,i,r]}},_pointerIntersectionPosition:{enumerable:!1,value:null},_closerIndex:{enumerable:!1,value:null},_computePointedElement:{value:function(){var e=this._flow._splinePaths,t=e.length;if(t){var n,i,r,a,o,s,l,u,c,h=this._flow,d=h.cameraTargetPoint[0]-h.cameraPosition[0],p=h.cameraTargetPoint[2]-h.cameraPosition[2],f=Math.atan2(d,p),m=p*Math.cos(-f)-d*Math.sin(-f),v=Math.atan2(h.cameraTargetPoint[1]-h.cameraPosition[1],m),g=.5*this._element.clientWidth-this._pointerX,_=this._pointerY-.5*this._element.clientHeight,b=.5*this._element.offsetHeight/Math.tan(h.cameraFov*h._doublePI*(1/720)),y=[],w=h._visibleIndexes,E=w.length,C=null,M=1e100;for(i=b*Math.cos(v)-_*Math.sin(v),_=b*Math.sin(v)+_*Math.cos(v),n=i*Math.cos(f)-g*Math.sin(f),g=i*Math.sin(f)+g*Math.cos(f),l=[g,_,n],c=0;e.length>c;c++)y[c]=e[c].transform([1,0,0,0,0,1,0,0,0,0,1,0,-h.cameraPosition[0],-h.cameraPosition[1],-h.cameraPosition[2],1]);for(c=0;E>c;c++)u=this._flow.offset(w[c]),r=u.pathIndex,a=u.slideTime,s=y[r]._convertSplineTimeToBezierIndexTime(a),null!==s&&(pos=y[r].getPositionAtIndexTime(s),o=this._rayPointDistance(l,pos),o!==!1&&M>o&&(M=o,C=w[c]));this._closerIndex=C}}},test:{enumerable:!1,value:function(){var e,t,n,i,r,a,o,s,l,u,c=this._flow,h=this._bezierValue,d=c.cameraTargetPoint[0]-c.cameraPosition[0],p=c.cameraTargetPoint[1]-c.cameraPosition[1],f=c.cameraTargetPoint[2]-c.cameraPosition[2],m=Math.atan2(d,f),v=this._pointerX,g=this._pointerY;if(e=f*Math.cos(-m)-d*Math.sin(-m),t=Math.atan2(p,e),i=.5*this._element.clientWidth-v,r=g-.5*this._element.clientHeight,u=a=.5*this._element.offsetHeight/Math.tan(c.cameraFov*c._doublePI*(1/720)),l=a*Math.cos(t)-r*Math.sin(t),s=a*Math.sin(t)+r*Math.cos(t),o=i,a=l*Math.cos(m)-o*Math.sin(m),i=l*Math.sin(m)+o*Math.cos(m),r=s,this.t=n=this._raycastBezierTubes(c._cameraPosition[0],c._cameraPosition[1],c._cameraPosition[2],this._computeRotationValuesToXAxis(i,r,a)),null!==n[0]){var i,r,a,o,s,l,_,b,y,w,E,C=[c._splinePaths[n[0]]._knots[n[1]][0]-c._cameraPosition[0],c._splinePaths[n[0]]._knots[n[1]][1]-c._cameraPosition[1],c._splinePaths[n[0]]._knots[n[1]][2]-c._cameraPosition[2],c._splinePaths[n[0]]._nextHandlers[n[1]][0]-c._cameraPosition[0],c._splinePaths[n[0]]._nextHandlers[n[1]][1]-c._cameraPosition[1],c._splinePaths[n[0]]._nextHandlers[n[1]][2]-c._cameraPosition[2],c._splinePaths[n[0]]._previousHandlers[n[1]+1][0]-c._cameraPosition[0],c._splinePaths[n[0]]._previousHandlers[n[1]+1][1]-c._cameraPosition[1],c._splinePaths[n[0]]._previousHandlers[n[1]+1][2]-c._cameraPosition[2],c._splinePaths[n[0]]._knots[n[1]+1][0]-c._cameraPosition[0],c._splinePaths[n[0]]._knots[n[1]+1][1]-c._cameraPosition[1],c._splinePaths[n[0]]._knots[n[1]+1][2]-c._cameraPosition[2]],M=[];for(E=0;12>E;E+=3)M[0]=C[E+2]*Math.sin(-m)+C[E]*Math.cos(-m),M[1]=C[E+1],M[2]=C[E+2]*Math.cos(-m)-C[E]*Math.sin(-m),C[E]=M[0],C[E+1]=M[2]*Math.sin(-t)+M[1]*Math.cos(-t),C[E+2]=M[2]*Math.cos(-t)-M[1]*Math.sin(-t);a=h(C[2],C[5],C[8],C[11],n[2]),l=h(C[2],C[5],C[8],C[11],n[2]+1e-8),i=h(C[0],C[3],C[6],C[9],n[2])/a,o=h(C[0],C[3],C[6],C[9],n[2]+1e-8)/l,_=(o-i)*u/1e-8,r=h(C[1],C[4],C[7],C[10],n[2])/a,s=h(C[1],C[4],C[7],C[10],n[2]+1e-8)/l,dy=(s-r)*u/1e-8,b=Math.sqrt(_*_+dy*dy),y=Math.atan2(dy,_),w=c._splinePaths[n[0]]._densities[n[1]]*(1-n[2])+c._splinePaths[n[0]]._densities[n[1]+1]*n[2],this._lineVectorX=Math.cos(-y)*b/w,this._lineVectorY=Math.sin(-y)*b/w}}},_lineVectorX:{enumerable:!1,value:80*Math.cos(Math.PI-.6)},_lineVectorY:{enumerable:!1,value:80*Math.sin(Math.PI-.6)},_startX:{enumerable:!1,value:0},_startY:{enumerable:!1,value:0},_currentX:{enumerable:!1,value:0},_currentY:{enumerable:!1,value:0},_previousScrollDelta:{enumerable:!1,value:0},_startScroll:{enumerable:!1,value:0},_bezierValue:{enumerable:!1,value:function(e,t,n,i,r){var a=1-r;return e*a*a*a+3*t*a*a*r+3*n*a*r*r+i*r*r*r}},_computeRotationValuesToXAxis:{enumerable:!1,value:function(e,t,n){var i,r,a,o,s;return 1e-100>e*e&&(e=1e-50),i=e*e+t*t,r=Math.sqrt(i),a=1/r,s=e*a,o=-t*a,a=1/Math.sqrt(i+n*n),[o,s,-n*a,r*a]}},_infinite:{enumerable:!1,value:1e100},_sphereIntersection:{enumerable:!1,value:function(e,t){var n,i,r,a=e[0]*t[1]-e[1]*t[0],o=e[0]*t[0]+e[1]*t[1],s=a*t[2]+e[2]*t[3],l=e[3]*e[3];return l>=o*o+s*s?(n=a*t[3]-e[2]*t[2],i=Math.sqrt(l-o*o-s*s),r=n-i,0>r?0>n+i?this._infinite:0:r):this._infinite}},_bezierTubeBoundingSphere:{enumerable:!1,value:function(e,t){var n,i,r,a,o,s=e[0],l=e[1],u=e[2],c=e[0],h=e[1],d=e[2];return o=e[3],s>o?s=o:o>c&&(c=o),o=e[4],l>o?l=o:o>h&&(h=o),o=e[5],u>o?u=o:o>d&&(d=o),o=e[6],s>o?s=o:o>c&&(c=o),o=e[7],l>o?l=o:o>h&&(h=o),o=e[8],u>o?u=o:o>d&&(d=o),o=e[9],s>o?s=o:o>c&&(c=o),o=e[10],l>o?l=o:o>h&&(h=o),o=e[11],u>o?u=o:o>d&&(d=o),n=.5*(c-s),i=.5*(h-l),r=.5*(d-u),a=Math.sqrt(n*n+i*i+r*r)+t,[s+n,l+i,u+r,a]}},_raycastBezierTubes:{enumerable:!1,value:function(e,t,n,i){var r,a,o,s,l,u,c,h,d,p,f,m,v,g,_,b,y,w,E,C,M,P,S,T,D,x,O,L,A=[],k=this._infinite,z=null,j=0,I=null,N=0,R=this._flow._splinePaths;for(L=0;R.length>L;L++)for(O=0;R[L]._knots.length-1>O;O++)A[N]=[R[L]._knots[O][0]-e,R[L]._knots[O][1]-t,R[L]._knots[O][2]-n,R[L]._nextHandlers[O][0]-e,R[L]._nextHandlers[O][1]-t,R[L]._nextHandlers[O][2]-n,R[L]._previousHandlers[O+1][0]-e,R[L]._previousHandlers[O+1][1]-t,R[L]._previousHandlers[O+1][2]-n,R[L]._knots[O+1][0]-e,R[L]._knots[O+1][1]-t,R[L]._knots[O+1][2]-n,0,1048576,O,L],N++;for(O=N-1;O>=0;)c=A[O],h=.5*(c[0]+c[3]),d=.5*(c[3]+c[6]),p=.5*(c[6]+c[9]),g=.5*(c[1]+c[4]),_=.5*(c[4]+c[7]),b=.5*(c[7]+c[10]),C=.5*(c[2]+c[5]),M=.5*(c[5]+c[8]),P=.5*(c[8]+c[11]),f=.5*(h+d),m=.5*(d+p),v=.5*(f+m),y=.5*(g+_),w=.5*(_+b),E=.5*(y+w),S=.5*(C+M),T=.5*(M+P),D=.5*(S+T),x=c[13]>>1,o=[c[0],c[1],c[2],h,g,C,f,y,S,v,E,D,c[12],x,c[14],c[15]],r=this._bezierTubeBoundingSphere(o,this._flow._elementsBoundingSphereRadius),s=[v,E,D,m,w,T,p,b,P,c[9],c[10],c[11],c[12]+x,x,c[14],c[15]],a=this._bezierTubeBoundingSphere(s,this._flow._elementsBoundingSphereRadius),l=this._sphereIntersection(r,i),u=this._sphereIntersection(a,i),k>l?k>u?u>l?x?(A[O++]=s,A[O]=o):(k=l-1e-5,j=c[12],z=c[14],I=c[15],O--):x?(A[O++]=o,A[O]=s):(k=u-1e-5,j=c[12],z=c[14],I=c[15],O--):x?A[O]=o:(k=l-1e-5,j=c[12],z=c[14],I=c[15],O--):k>u?x?A[O]=s:(k=u-1e-5,j=c[12],z=c[14],I=c[15],O--):O--;return[I,z,j*(1/1048576)]}},_translateStride:{enumerable:!1,value:null},translateStride:{serializable:!0,get:function(){return this._translateStride},set:function(e){this._translateStride=e,this.translateStrideX=e}},startStrideTime:{enumerable:!1,value:null},_scrollEnd:{enumerable:!1,value:null},_scrollStart:{enumerable:!1,value:null},_hasMomentum:{enumerable:!1,value:!0},isLimitedToSingleStride:{value:!1},_animationInterval:{enumerable:!1,value:function(){var e,t,n,i,r,a,o=Date.now(),s=!1;r=this.minScroll,a=this.maxScroll,this.minScroll=null,this.maxScroll=null,null===this._scrollEnd&&(this._scrollStart=this.scroll,this._pageX=this.endX,this._pageY=this.endY,this._updateScroll(),this._scrollEnd=this.scroll,this.isLimitedToSingleStride&&this.translateStrideX&&(this._scrollEnd>Math.floor(this._scrollStart)+this.translateStrideX&&(this._scrollEnd=Math.floor(this._scrollStart)+this.translateStrideX),this._scrollEnd<Math.ceil(this._scrollStart)-this.translateStrideX&&(this._scrollEnd=Math.ceil(this._scrollStart)-this.translateStrideX)),this._pageX=this.startX,this._pageY=this.startY,this._updateScroll()),this.animateMomentum?(e=o-this.startTime,this.__momentumDuration>e?(this._pageX=this.startX+(this.momentumX+this.momentumX*(this.__momentumDuration-e)/this.__momentumDuration)*e/1e3/2,this._pageY=this.startY+(this.momentumY+this.momentumY*(this.__momentumDuration-e)/this.__momentumDuration)*e/1e3/2,this._updateScroll(),this.translateStrideX&&null===this.startStrideXTime&&(this.__momentumDuration-e<this.translateStrideDuration||Math.abs(this.scroll-this._scrollEnd)<.75*this.translateStrideX)&&(this.startStrideXTime=o,this._strideStartScroll=this._scroll)):this.animateMomentum=!1):null===this.startStrideXTime&&(this.startStrideXTime=this.startTime,this._strideStartScroll=this._scrollStart),i=this.scroll,this.startStrideXTime&&o-this.startStrideXTime>0&&(n=Math.round(this._scrollEnd/this.translateStrideX),o-this.startStrideXTime<this.translateStrideDuration?(e=this._bezierTValue((o-this.startStrideXTime)/this.translateStrideDuration,.275,0,.275,1),t=(o-this.startStrideXTime)/this.translateStrideDuration,i=i*(1-t)+(n*this.translateStrideX*e+this._strideStartScroll*(1-e))*t,s=!0):(i=n*this.translateStrideX,this.animateMomentum=!1)),this.minScroll=r,this.maxScroll=a,r>i&&(i=r,this.animateMomentum=!1,s=!1),i>a&&(i=a,this.animateMomentum=!1,s=!1),this.scroll=i,this.isAnimating=this.animateMomentum||s,this.isAnimating?this.needsFrame=!0:(this._dispatchTranslateEnd(),this._scrollEnd=null)}}})}});