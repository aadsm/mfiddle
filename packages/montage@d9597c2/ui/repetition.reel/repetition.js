var Montage=require("montage").Montage,Component=require("ui/component").Component,Template=require("core/template").Template,RangeController=require("core/range-controller").RangeController,Promise=require("core/promise").Promise,Map=require("collections/map"),Set=require("collections/set"),Observers=require("frb/observers"),observeProperty=Observers.observeProperty,observeKey=Observers.observeKey,Iteration=exports.Iteration=Montage.specialize({repetition:{value:null},controller:{value:null},object:{value:null},selected:{value:null},_fragment:{value:null},_childComponents:{value:null},index:{value:null},_drawnIndex:{value:null},active:{value:null},isFirst:{value:null},isLast:{value:null},isEven:{value:null},isOdd:{value:null},_noTransition:{value:null},constructor:{value:function Iteration(){this.super(),this.repetition=null,this.controller=null,this.content=null,this.defineBinding("object",{"<->":"content"}),this.defineBinding("selected",{"<->":"repetition.contentController._selection.has(content)"}),this._fragment=null,this._childComponents=null,this.index=null,this._drawnIndex=null,this.active=!1,this.defineBinding("active",{"<->":"repetition.activeIterations.has(())"}),this.defineBinding("isFirst",{"<-":"index == 0"}),this.defineBinding("isLast",{"<-":"index == repetition.iterations.length - 1"}),this.defineBinding("isEven",{"<-":"index % 2 == 0"}),this.defineBinding("isOdd",{"<-":"index % 2 != 0"}),this._noTransition=!1,this.addOwnPropertyChangeListener("active",this),this.addOwnPropertyChangeListener("selected",this),this.addOwnPropertyChangeListener("_noTransition",this),this.cachedFirstElement=null}},initWithRepetition:{value:function(e){return this.repetition=e,this}},recycle:{value:function(){this.index=null,this.content=null,this._noTransition=!0}},injectIntoDocument:{value:function(e){null!==this._drawnIndex&&this.retractFromDocument();var t=this,n=this.repetition,i=n.element,r=n._boundaries,a=i.ownerDocument.createTextNode(""),o=r[e];r.splice(e,0,a),i.insertBefore(a,o),i.insertBefore(this._fragment,o),n.childComponents.swap(e*n._childComponentsPerIteration,0,this._childComponents);for(var s=this._childComponents.length,l=function(e){e.target.removeEventListener("firstDraw",l,!1),s--,s||t.forEachElement(function(e){n._iterationForElement.set(e,t)})},u=0;this._childComponents.length>u;u++){var c=this._childComponents[u];c.addEventListener("firstDraw",l,!1),c.needsDraw=!0}n._drawnIterations.splice(e,0,this),n._updateDrawnIndexes(e),n._dirtyClassListIterations.add(this)}},retractFromDocument:{value:function(){var e=this._drawnIndex,t=this.repetition,n=t.element,i=t._boundaries[e],r=t._boundaries[e+1];t._boundaries.splice(e,1);for(var a=this._fragment,o=i.nextSibling;o!=r;){var s=o.nextSibling;n.removeChild(o),a.appendChild(o),o=s}n.removeChild(i),this._drawnIndex=null,t._drawnIterations.splice(e,1),t._updateDrawnIndexes(e)}},handlePropertyChange:{value:function(){this.repetition&&(this.repetition._dirtyClassListIterations.add(this),this.repetition.needsDraw=!0)}},forEachElement:{value:function(e,t){var n=this.repetition,i=this._drawnIndex;if(null!=i)for(var r=n._boundaries[i];r!==n._boundaries[i+1];r=r.nextSibling)1===r.nodeType&&e.call(t,r)}},firstElement:{get:function(){var e=this.repetition,t=this._drawnIndex;if(null!=t)for(var n=e._boundaries[t];n!==e._boundaries[t+1];n=n.nextSibling)if(1===n.nodeType)return this.cachedFirstElement=n,n}},cachedFirstElement:{value:null}}),Repetition=exports.Repetition=Component.specialize({initWithContent:{value:function(e){return this.content=e,this}},initWithContentController:{value:function(e){return this.contentController=e,this}},content:{get:function(){return this.getPath("contentController.content")},set:function(e){this.contentController=(new RangeController).initWithContent(e)}},contentController:{value:null},isSelectionEnabled:{value:null},selection:{value:null},selectedIterations:{value:null},selectedIndexes:{value:null},activeIterations:{value:null},iterations:{value:null},currentIteration:{value:null},contentAtCurrentIteration:{value:null},hasTemplate:{value:!1},_iterationTemplate:{value:null},clonesChildComponents:{value:!0},constructor:{value:function(){this.super(),this.contentController=null,this.organizedContent=[],this.defineBinding("organizedContent.rangeContent()",{"<-":"contentController.organizedContent"}),this.isSelectionEnabled=!1,this.defineBinding("selection",{"<->":"contentController.selection"}),this.defineBinding("selectedIterations",{"<-":"iterations.filter{selected}"}),this.defineBinding("selectedIndexes",{"<-":"selectedIterations.map{index}"}),this._iterationTemplate=null,this.addOwnPropertyChangeListener("innerTemplate",this),this.iterations=[],this._drawnIterations=[],this._freeIterations=[],this._contentForIteration=Map(),this._iterationForElement=Map(),this.currentIteration=null,this._templateId=null,this._iterationCreationPromise=Promise.resolve(),this._boundaries=[],this._dirtyClassListIterations=Set(),this._requestedIterations=0,this._createdIterations=0,this._canDrawInitialContent=!1,this._initialContentDrawn=!1,this.addOwnPropertyChangeListener("isSelectionEnabled",this),this._selectionPointer=null,this.activeIterations=[]}},cleanupDeletedComponentTree:{value:function(e){this._iterationTemplate&&this._teardownIterationTemplate(),e&&this.cancelBindings()}},expandComponent:{value:function(){return this._iterationTemplate||this._setupIterationTemplate(),this._isComponentExpanded=!0,Promise.resolve()}},handleInnerTemplateChange:{value:function(){this._iterationTemplate&&this._teardownIterationTemplate(),this._setupIterationTemplate()}},_setupIterationTemplate:{value:function(){if(!this._newDomContent&&!this._shouldClearDomContentOnNextDraw&&this.innerTemplate){this.innerTemplate.hasParameters()?(this._iterationTemplate=this.innerTemplate.clone(),this._expandIterationTemplateParameters()):this._iterationTemplate=this.innerTemplate;for(var e,t=this.childComponents,n=t.length-1;e=t[n--];)e.detachFromParentComponent(),e.needsDraw=!1,e.cleanupDeletedComponentTree(!0);this.handleOrganizedContentRangeChange(this.organizedContent,[],0),this.organizedContent.addRangeChangeListener(this,"organizedContent"),this._canDrawInitialContent=!0,this.needsDraw=!0}}},_teardownIterationTemplate:{value:function(){this.organizedContent.removeRangeChangeListener(this,"organizedContent"),this.handleOrganizedContentRangeChange([],this.organizedContent,0);for(var e=0;this._freeIterations.length>e;e++)for(var t=this._freeIterations[e],n=0;t._childComponents.length>n;n++){var i=t._childComponents[n];i.cleanupDeletedComponentTree(!0)}this._iterationTemplate=null,this._freeIterations.clear(),this._contentForIteration.clear(),this._iterationForElement.clear(),this.currentIteration=null,this._templateId=null,this._requestedIterations=0,this._createdIterations=0,this._canDrawInitialContent=!1,this._selectionPointer=null,this.activeIterations.clear(),this._dirtyClassListIterations.clear()}},_expandIterationTemplateParameters:{value:function(){for(var e,t,n,i,r,a,o,s,l,u=this._iterationTemplate,c=this;u.hasParameters();){c=c.ownerComponent,e=c._ownerDocumentPart.template,i=c._ownerDocumentPart.objects,a=u.expandParameters(e,c),n=u.getSerialization().getExternalObjectLabels(),r=u.getInstances(),s=a.labels,t=a.labelsCollisions;for(var h,d=0;h=s[d];d++)o=t&&h in t?t[h]:h,n.indexOf(o)>=0?r[o]=i[h]:(l=e.getObjectMetadata(h),l.owner||(l.owner=i.owner),u.setObjectMetadata(o,l.require,l.label,l.owner))}}},_iterationCreationPromise:{value:null},_createIteration:{value:function(){var e=this,t=(new this.Iteration).initWithRepetition(this);return this._iterationCreationPromise=this._iterationCreationPromise.then(function(){var n=e.element.ownerDocument;e.currentIteration=t;var i=e._iterationTemplate.instantiate(n).then(function(n){t._childComponents=n.childComponents,t._fragment=n.fragment,n.childComponents.forEach(function(t){e.addChildComponent(t)}),n.loadComponentTree().then(function(){e.constructorIteration(t)}).done(),e.currentIteration=null});return i.done(),i.then(null,function(){})}),this._requestedIterations++,t}},constructorIteration:{value:function(){this._createdIterations++,this._createdIterations>=this._requestedIterations&&(this.needsDraw=!0,this._canDraw=!0)}},observeProperty:{value:function(e,t,n){return"contentAtCurrentIteration"===e||"objectAtCurrentIteration"===e?observeKey(this._contentForIteration,this.currentIteration,t,n):"currentIteration"===e?t(this.currentIteration):observeProperty(this,e,t,n)}},makePropertyObservable:{value:function(e){return"currentIteration"!==e?Montage.makePropertyObservable.call(this,e):void 0}},_controllerIterations:{value:null},_drawnIterations:{value:null},_freeIterations:{value:null},_contentForIteration:{value:null},_childComponentsPerIteration:{value:null},handleOrganizedContentRangeChange:{value:function(e,t,n){var i=this.iterations.splice(n,t.length);for(i.forEach(function(e){e.recycle()}),this._freeIterations.addEach(i);this._freeIterations.length<e.length;)this._freeIterations.push(this._createIteration());this.iterations.swap(n,0,e.map(function(e){var t=this._freeIterations.pop();return t.content=e,this._contentForIteration.set(t,e),t},this)),this._updateIndexes(n),this.needsDraw=!0}},_updateIndexes:{value:function(e){for(var t=this.iterations;t.length>e;e++)t[e].index=e}},canDraw:{value:function(){var e=this.canDrawGate.value;return e=e&&this._requestedIterations<=this._createdIterations,e=e&&(this._initialContentDrawn||this._canDrawInitialContent)}},_boundaries:{value:null},_dirtyClassListIterations:{value:null},_requestedIterations:{value:null},_createdIterations:{value:null},_canDrawInitialContent:{value:null},_initialContentDrawn:{value:null},draw:{value:function(){if(this.canDraw()){this._initialContentDrawn||(this._drawInitialContent(),this._initialContentDrawn=!0);for(var e=this._drawnIterations.length-1;e>=0;e--)null===this._drawnIterations[e].index&&this._drawnIterations[e].retractFromDocument();for(var e=0;this.iterations.length>e;e++){var t=this.iterations[e];t._drawnIndex!==t.index&&t.injectIntoDocument(e)}var n=this._dirtyClassListIterations.toArray();this._dirtyClassListIterations.clear(),n.forEach(function(e){e.forEachElement(function(t){e.selected?t.classList.add("selected"):t.classList.remove("selected"),e.active?t.classList.add("active"):t.classList.remove("active"),t.classList.remove("no-transition")},this)},this)}}},_drawInitialContent:{value:function(){var e=this.element;e.innerHTML="";var t=e.ownerDocument.createTextNode("");e.appendChild(t),this._boundaries.push(t)}},_updateDrawnIndexes:{value:function(e){for(var t=this._drawnIterations;t.length>e;e++)t[e]._drawnIndex=e}},_selectionPointer:{value:null},handleIsSelectionEnabledChange:{value:function(e){e?this._enableSelectionTracking():this._disableSelectionTracking()}},_enableSelectionTracking:{value:function(){this.element.addEventListener("touchstart",this,!0),this.element.addEventListener("mousedown",this,!0)}},_disableSelectionTracking:{value:function(){this.element.removeEventListener("touchstart",this,!0),this.element.removeEventListener("mousedown",this,!0)}},_observeSelectionPointer:{value:function(e){this._selectionPointer=e,this.eventManager.claimPointer(e,this);var t=this.element.ownerDocument;t.addEventListener("touchend",this,!1),t.addEventListener("touchcancel",this,!1),t.addEventListener("mouseup",this,!1)}},_ignoreSelectionPointer:{value:function(){this.eventManager.isPointerClaimedByComponent(this._selectionPointer,this)&&this.eventManager.forfeitPointer(this._selectionPointer,this),this._selectionPointer=null,this.activeIterations.clear();var e=this.element.ownerDocument;e.removeEventListener("touchend",this,!1),e.removeEventListener("touchcancel",this,!1),e.removeEventListener("mouseup",this,!1)}},captureMousedown:{value:function(e){this._observeSelectionPointer("mouse");var t=this._findIterationContainingElement(e.target);t?t.active=!0:this._ignoreSelectionPointer()}},captureTouchstart:{value:function(e){if(null==this._selectionPointer){this._observeSelectionPointer(e.changedTouches[0].identifier);var t=this._findIterationContainingElement(e.target);t?t.active=!0:this._ignoreSelectionPointer()}}},handleTouchend:{value:function(e){for(var t=0;e.changedTouches.length>t&&!this._endSelectionOnTarget(e.changedTouches[t].identifier,e.target);t++);}},handleTouchcancel:{value:function(){this._ignoreSelectionPointer()}},handleMouseup:{value:function(e){this._endSelectionOnTarget("mouse",e.target)}},_endSelectionOnTarget:{value:function(e,t){if(e===this._selectionPointer){if(this.eventManager.isPointerClaimedByComponent(this._selectionPointer,this)){var n=this._findIterationContainingElement(t);n&&(n.active=!1,n.selected||(n.selected=!0))}return this._ignoreSelectionPointer(),!0}}},_findIterationContainingElement:{value:function(e){for(var t;e;){if(e===this.element)return this._iterationForElement.get(t);t=e,e=e.parentNode}}},Iteration:{value:Iteration,serializable:!1}});