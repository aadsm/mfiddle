var Montage=require("montage").Montage,Promise=require("core/promise").Promise,GenericCollection=require("collections/generic-collection"),RangeController=exports.RangeController=Montage.specialize({constructor:{value:function(){this.content=null,this._selection=[],this.selection=[],this.defineBinding("_selection.rangeContent()",{"<->":"selection.rangeContent()"}),this.sortPath=null,this.filterPath=null,this.visibleIndexes=null,this.reversed=!1,this.start=null,this.length=null,this.selectAddedContent=!1,this.deselectInvisibleContent=!1,this.clearSelectionOnOrderChange=!1,this.avoidsEmptySelection=!1,this.multiSelect=!1,this.organizedContent=[],this.organizedContent.addRangeChangeListener(this,"organizedContent"),this.defineBinding("_orderedContent",{"<-":"content.($filterPath.defined() ? filter{path($filterPath)} : ()).($sortPath.defined() ? sorted{path($sortPath)} : ()).($reversed ?? 0 ? reversed() : ())"}),this.defineBinding("organizedContent.rangeContent()",{"<-":"_orderedContent.($visibleIndexes.defined() ?$visibleIndexes.filter{<$_orderedContent.length}.map{$_orderedContent[()]} : ()).($start.defined() && $length.defined() ?view($start, $length) : ())"}),this._selection.addRangeChangeListener(this,"selection"),this.addRangeAtPathChangeListener("content",this,"handleContentRangeChange"),this.addPathChangeListener("sortPath",this,"handleOrderChange"),this.addPathChangeListener("reversed",this,"handleOrderChange"),this.addOwnPropertyChangeListener("multiSelect",this),this.iterations=[]}},initWithContent:{value:function(e){return this.content=e,this}},sortPath:{value:null},reversed:{value:null},filterPath:{value:null},visibleIndexes:{value:null},start:{value:null},length:{value:null},selectAddedContent:{value:!1},deselectInvisibleContent:{value:!1},clearSelectionOnOrderChange:{value:!1},avoidsEmptySelection:{value:!1},multiSelect:{value:!1},_orderedContent:{value:null},organizedContent:{value:null},iterations:{value:null},selection:{value:null},_selection:{value:null},select:{value:function(e){!this.multiSelect&&this._selection.length>=1&&this._selection.clear(),this._selection.add(e)}},deselect:{value:function(e){(!this.avoidsEmptySelection||this._selection.length>1)&&this._selection["delete"](e)}},clearSelection:{value:function(){(!this.avoidsEmptySelection||this._selection.length>1)&&this._selection.clear()}},add:{value:function(e){var t;return this.content||(this.content=[]),t=this.content.add(e),t&&this.handleAdd(e),t}},push:{value:function(){for(var e=this.content.push.apply(this.content,arguments),t=0;arguments.length>t;t++)this.handleAdd(arguments[t]);return e}},pop:{value:function(){return this.content.pop()}},shift:{value:function(){return this.content.shift()}},unshift:{value:function(){for(var e=this.content.unshift.apply(this.content,arguments),t=0;arguments.length>t;t++)this.handleAdd(arguments[t]);return e}},splice:{value:function(){for(var e=this.content.splice.apply(this.content,arguments),t=2;arguments.length>t;t++)this.handleAdd(arguments[t]);return e}},swap:{value:function(e,t,n){for(var r=this.content.splice.apply(this.content,n),e=2;n.length>e;e++)this.handleAdd(n[e]);return r}},"delete":{value:function(e){return this.content["delete"](e)}},has:{value:function(e){return this.content?this.content.has(e):!1}},addEach:{value:GenericCollection.prototype.addEach},deleteEach:{value:GenericCollection.prototype.deleteEach},clear:{value:function(){this.content.clear()}},addContent:{value:function(){var e=new this.contentConstructor;return this.add(e),e}},_contentConstructor:{value:null},contentConstructor:{get:function(){return this._contentConstructor?this._contentConstructor:this.content.contentConstructor?this.content.contentConstructor:Object},set:function(e){this._contentConstructor=e}},handleContentRangeChange:{value:function(e,t){t.deleteEach(e),this._selection.deleteEach(t)}},handleSelectionRangeChange:{value:function(e,t){var n=this;Promise.nextTick(function(){var r=n._selection.length;n.avoidsEmptySelection&&0===r?n.select(t[t.length-1]):!n.multiSelect&&r>1&&n._selection.splice(0,n._selection.length,e[e.length-1])})}},handleOrganizedContentRangeChange:{value:function(e,t){if(this.deselectInvisibleContent){var n=t.clone(1);n.deleteEach(e),this._selection.deleteEach(t)}}},handleOrderChange:{value:function(){this.clearSelectionOnOrderChange&&this._selection.clear()}},handleAdd:{value:function(e){this.selectAddedContent&&(!this.multiSelect&&this._selection.length>=1&&this._selection.clear(),this._selection.add(e))}},handleMultiSelectChange:{value:function(){var e=this._selection.length;!this.multiSelect&&e>1&&this._selection.splice(0,e-1)}},blueprintModuleId:require("montage")._blueprintModuleIdDescriptor,blueprint:require("montage")._blueprintDescriptor});