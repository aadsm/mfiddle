montageDefine("6a02157","core/range-controller",{dependencies:["./core","collections/generic-collection"],factory:function(e,t){var n=e("./core").Montage,r=e("collections/generic-collection"),i=function(e,t){var n=e.clone();n.makeObservable(),n.rangeController=t,n.contentEquals=e&&e.contentEquals||Object.is,Object.defineProperty(n,"clone",{value:function(){return n.slice()}});var r=n.splice;return Object.defineProperty(n,"splice",{configurable:!1,value:function(e,t){var n=this.rangeController.content;this.contentEquals=n&&n.contentEquals||Object.is,e=e>=0?e:this.length+e;var i=this.length,a=Math.min(t,i-e),o=[].slice.call(arguments,2);o.contentEquals=this.contentEquals;var s,l=o.filter(function(t,r){if(n&&!n.has(t))return!1;if(o.findLast(t)>r)return!1;var i=this.find(t);return 0>i||i>=e&&e+a>i},this),u=Math.max(l.length,0),c=u-a,d=Math.max(i+c,e+u);if(!this.rangeController.multiSelect&&d>1){var h=u?l[u-1]:this.one();s=[0,i,h]}else s=this.rangeController.avoidsEmptySelection&&0===d?n.has(this[0])?[1,this.length-1]:[0,this.length,n.one()]:[e,t].concat(l);return r.apply(this,s)}}),n};t.RangeController=n.specialize({constructor:{value:function(e){this.content=null,this._selection=new i([],this),this.sortPath=null,this.filterPath=null,this.visibleIndexes=null,this.reversed=!1,this.start=null,this.length=null,this.selectAddedContent=!1,this.deselectInvisibleContent=!1,this.clearSelectionOnOrderChange=!1,this.avoidsEmptySelection=!1,this.multiSelect=!1,this.organizedContent=[],this.organizedContent.addRangeChangeListener(this,"organizedContent"),this.defineBinding("_orderedContent",{"<-":"content.($filterPath.defined() ? filter{path($filterPath)} : ()).($sortPath.defined() ? sorted{path($sortPath)} : ()).($reversed ?? 0 ? reversed() : ())"}),this.defineBinding("organizedContent.rangeContent()",{"<-":"_orderedContent.($visibleIndexes.defined() ?$visibleIndexes.filter{<$_orderedContent.length}.map{$_orderedContent[()]} : ()).($start.defined() && $length.defined() ?view($start, $length) : ())"}),this.addRangeAtPathChangeListener("content",this,"handleContentRangeChange"),this.addPathChangeListener("sortPath",this,"handleOrderChange"),this.addPathChangeListener("reversed",this,"handleOrderChange"),this.addOwnPropertyChangeListener("multiSelect",this),this.iterations=[],e&&this.initWithContent(e)}},initWithContent:{value:function(e){return this.content=e,this}},sortPath:{value:null},reversed:{value:null},filterPath:{value:null},visibleIndexes:{value:null},start:{value:null},length:{value:null},selectAddedContent:{value:!1},deselectInvisibleContent:{value:!1},clearSelectionOnOrderChange:{value:!1},avoidsEmptySelection:{value:!1},multiSelect:{value:!1},_orderedContent:{value:null},organizedContent:{value:null},iterations:{value:null},_selection:{value:null},selection:{get:function(){return this._selection},set:function(e){var t=[0,this._selection.length];e&&e.toArray&&(t=t.concat(e.toArray())),this._selection.splice.apply(this._selection,t)}},select:{value:function(e){!this.multiSelect&&this.selection.length>=1&&this.selection.clear(),this.selection.add(e)}},deselect:{value:function(e){(!this.avoidsEmptySelection||this.selection.length>1)&&this.selection["delete"](e)}},clearSelection:{value:function(){(!this.avoidsEmptySelection||this.selection.length>1)&&this.selection.clear()}},add:{value:function(e){var t;return this.content||(this.content=[]),t=this.content.add(e),t&&this.handleAdd(e),t}},push:{value:function(){for(var e=this.content.push.apply(this.content,arguments),t=0;arguments.length>t;t++)this.handleAdd(arguments[t]);return e}},pop:{value:function(){return this.content.pop()}},shift:{value:function(){return this.content.shift()}},unshift:{value:function(){for(var e=this.content.unshift.apply(this.content,arguments),t=0;arguments.length>t;t++)this.handleAdd(arguments[t]);return e}},splice:{value:function(){for(var e=this.content.splice.apply(this.content,arguments),t=2;arguments.length>t;t++)this.handleAdd(arguments[t]);return e}},swap:{value:function(e,t,n){var r=this.content.swap.apply(this.content,arguments);if(n)for(var e=2;n.length>e;e++)this.handleAdd(n[e]);return r}},"delete":{value:function(e){return this.content["delete"](e)}},has:{value:function(e){return this.content?this.content.has(e):!1}},addEach:{value:r.prototype.addEach},deleteEach:{value:r.prototype.deleteEach},clear:{value:function(){this.content.clear()}},addContent:{value:function(){var e=new this.contentConstructor;return this.add(e),e}},_contentConstructor:{value:null},contentConstructor:{get:function(){return this._contentConstructor?this._contentConstructor:this.content&&this.content.contentConstructor?this.content.contentConstructor:Object},set:function(e){this._contentConstructor=e}},handleContentRangeChange:{value:function(e,t){if(this.selection.length>0){var n=this.content&&this.content.contentEquals||Object.is;t.deleteEach(e,n),this.selection&&this.selection.deleteEach(t)}}},handleSelectionRangeChange:{value:function(e,t){if(this.selection)if(this.content){for(var n=[],r=0;e.length>r;r++)this.content.has(e[r])||n.push(e[r]);if(this._selection.deleteEach(n),!this.multiSelect&&this._selection.length>1){var i=this._selection.pop();this._selection.clear(),this._selection.add(i)}this.avoidsEmptySelection&&0==this._selection.length&&this._selection.add(t[0])}else this._selection.clear()}},handleOrganizedContentRangeChange:{value:function(e,t){if(this.deselectInvisibleContent&&this.selection){var n=t.clone(1);n.deleteEach(e),this.selection.deleteEach(t)}}},handleOrderChange:{value:function(){this.clearSelectionOnOrderChange&&this.selection&&this.selection.clear()}},handleAdd:{value:function(e){this.selectAddedContent&&this.selection&&(!this.multiSelect&&this.selection.length>=1&&this.selection.clear(),this.selection.add(e))}},handleMultiSelectChange:{value:function(){if(this.selection){var e=this.selection.length;if(!this.multiSelect&&e>1){var t=this._selection.pop();this._selection.clear(),this._selection.add(t)}}}}},{blueprintModuleId:e("./core")._blueprintModuleIdDescriptor,blueprint:e("./core")._blueprintDescriptor})}});