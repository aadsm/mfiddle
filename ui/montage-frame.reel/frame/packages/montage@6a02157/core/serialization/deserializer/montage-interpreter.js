var Montage=require("../../core").Montage,Interpreter=require("mousse/deserialization/interpreter").Interpreter,Context=require("mousse/deserialization/context").Context,MontageReviver=require("./montage-reviver").MontageReviver,Promise=require("../../promise").Promise,MontageInterpreter=Montage.specialize.call(Interpreter,{_require:{value:null},_reviver:{value:null},init:{value:function(e,t){if("function"!=typeof e)throw Error("Function 'require' missing.");return this._reviver=(new MontageReviver).init(e,t),this._require=e,this}},instantiate:{value:function(e,t,n){var r;return r=(new MontageContext).init(e,this._reviver,t,n,this._require),r.getObjects()}},preloadModules:{value:function(e){var t,n,r,i,a=this._reviver,o=a.moduleLoader,s=[];for(var l in e)t=e[l],n=t.prototype||t.object,n&&(r=MontageReviver.parseObjectLocationId(n),i=o.getModule(r.moduleId,l),Promise.isPromise(i)&&s.push(i));return s.length>0?Promise.all(s):void 0}}}),MontageContext=Montage.specialize.call(Context,{_ELEMENT_ID_ATTRIBUTE:{value:"data-montage-id"},_unitsToDeserialize:{value:null},_element:{value:null},_require:{value:null},constructor:{value:function(){this._unitsToDeserialize=[]}},init:{value:function(e,t,n,r,i){return Context.call(this,e,t,n),this._element=r,this._require=i,this}},hasObject:{value:function(e){return e in this._serialization}},getRequire:{value:function(){return this._require}},getElement:{value:function(){return this._element}},getElementById:{value:function(e){var t="*["+this._ELEMENT_ID_ATTRIBUTE+'="'+e+'"]';return this._element.querySelector(t)}},setUnitsToDeserialize:{value:function(e,t,n){this._unitsToDeserialize.push({object:e,objectDesc:t,unitNames:n})}},getUnitsToDeserialize:{value:function(){return this._unitsToDeserialize}}});exports.MontageInterpreter=MontageInterpreter,exports.MontageContext=MontageContext;