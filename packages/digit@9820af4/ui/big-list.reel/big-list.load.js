montageDefine("9820af4","ui/big-list.reel/big-list",{dependencies:["montage","montage/ui/component","montage/frb/observers","montage/core/deprecate"],factory:function(e,t){var n=(e("montage").Montage,e("montage/ui/component").Component),i=e("montage/frb/observers").observeProperty,r=e("montage/core/deprecate").deprecationWarning;t.BigList=n.specialize({enterDocument:{value:function(e){var t=this;e&&(this.flow._flowTranslateComposer.addEventListener("translateStart",this,!1),this.flow._flowTranslateComposer.addEventListener("translateEnd",this,!1),window.addEventListener("resize",function(){t.needsDraw=!0},!1))}},willDraw:{value:function(){this.flow._repetition._drawnIterations[0]&&(this._width=this._measureWidth(),this._height=this._measureHeight(),this._rowHeight=this._measureRowHeight(),this.flow.linearScrollingVector=this._calculateLinearScrollingVector(this._height,this._rowHeight),this.flow.paths=this._calculateFlowPath(this._height,this._rowHeight),this.flow.cameraTargetPoint=this._calculateCameraTargetPoint(this._width,this._height,this._rowHeight),this.flow.cameraPosition=this._calculateCameraPosition(this._width,this._height,this._rowHeight),this.flow.cameraFov=90,this._scrollBars.displayHorizontal=!1,this._scrollBars.displayVertical=!0,this._scrollBars.verticalLength=this._calculateScrollBarsVerticalLength(this._height,this._rowHeight,this.flow._numberOfIterations))}},draw:{value:function(){}},_measureHeight:{value:function(){return this.element.clientHeight}},_measureWidth:{value:function(){return this.element.clientWidth}},_measureRowHeight:{value:function(){return this.flow._repetition._drawnIterations[0].firstElement.scrollHeight}},_calculateLinearScrollingVector:{value:function(e,t){return[0,-500*t/e,0]}},_calculateScrollBarsVerticalLength:{value:function(e,t,n){var i=e/t/n;return i>1?1:i}},_calculateFlowPath:{value:function(e,t){return[{knots:[{knotPosition:[0,0,0],nextHandlerPosition:[0,1e3*t,0],nextDensity:3e3,previousDensity:3e3},{knotPosition:[0,3e3*t,0],previousHandlerPosition:[0,2e3*t,0],nextDensity:3e3,previousDensity:3e3}],units:{},headOffset:1,tailOffset:e/t}]}},_calculateCameraPosition:{value:function(e,t,n){return[e/2,t/2+n,t/2]}},_calculateCameraTargetPoint:{value:function(e,t,n){return[e/2,t/2+n,0]}},handleTranslateStart:{value:function(){1>this._scrollBars.verticalLength&&(this._scrollBars.opacity=.5)}},handleTranslateEnd:{value:function(){this._scrollBars.opacity=0}},__scroll:{value:0},_scroll:{get:function(){return this.__scroll},set:function(e){this.__scroll=e,this._scrollBars.verticalScroll=this._calculateScrollBarsVerticalScroll(e,this._height,this._rowHeight,this.flow._numberOfIterations,this._scrollBars.verticalLength)}},_calculateScrollBarsVerticalScroll:{value:function(e,t,n,i,r){return 1===r?0:e*(1-r)/(i-t/n)}},_content:{value:null},content:{set:function(e){this._content=e,this.defineBinding("flow.content",{"<-":"content"})},get:function(){return this._content}},_contentController:{value:null},contentController:{set:function(e){this._contentController=e,this.defineBinding("flow.contentController",{"<-":"contentController"})},get:function(){return this._contentController}},isSelectionEnabled:{value:null},observeProperty:{value:function(e,t,n,a,o){return"objectAtCurrentIteration"!==e&&"currentIteration"!==e?i(this,e,t,n,a,o):(r(e,":iteration.object"),this.flow?this.flow.observeProperty(e,t,n,a,o):void 0)}},templateDidLoad:{value:function(){var e=this,t=this.flow.didDraw;this.flow.didDraw=function(){e.flow._repetition._drawnIterations[0]&&(e.needsDraw=!0,e.flow.didDraw=t)},this._scrollBars.opacity=0}}})}});