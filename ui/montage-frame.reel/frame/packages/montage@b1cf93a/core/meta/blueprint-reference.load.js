montageDefine("b1cf93a","core/meta/blueprint-reference",{dependencies:["montage","core/promise","core/meta/blueprint","core/meta/binder","core/meta/remote-reference","core/meta/binder-reference","core/logger"],factory:function(e,t){"use strict";e("montage").Montage;var n=e("core/promise").Promise,i=e("core/meta/blueprint"),r=e("core/meta/binder"),a=e("core/meta/remote-reference").RemoteReference,s=e("core/meta/binder-reference").BinderReference;e("core/logger").logger("blueprint"),t.BlueprintReference=a.specialize({constructor:{value:function(){this.super()}},identifier:{get:function(){return this._reference||(this._reference=this.referenceFromValue(this._value)),["blueprint",this._reference.blueprintName.toLowerCase(),"reference"].join("_")}},valueFromReference:{value:function(t,a){t.blueprintName;var o=t.blueprintModuleId,l=t.prototypeName,u=t.moduleId,c=t.binderReference,h=n.resolve(r.Binder.manager.defaultBinder);c&&(h=s.valueFromReference(c,e));var d=n.defer();return h.then(function(t){if(t){var n=t.blueprintForPrototype(l,u);if(n)d.resolve(n);else try{i.Blueprint.getBlueprintWithModuleId(o,a).then(function(e){e?(t.addBlueprint(e),d.resolve(e)):d.reject(Error("Error cannot find Blueprint "+o))},d.reject)}catch(r){d.reject(Error("Error cannot find Blueprint "+o))}}else try{d=i.Blueprint.getBlueprintWithModuleId(o,e)}catch(r){d.reject(Error("Error cannot find Blueprint "+o))}}),d.promise}},referenceFromValue:{value:function(e){var t={};return t.blueprintName=e.name,t.blueprintModuleId=e.blueprintModuleId,t.prototypeName=e.prototypeName,t.moduleId=e.moduleId,e.binder&&!e.binder.isDefault&&(t.binderReference=s.referenceFromValue(e.binder)),t}}})}});