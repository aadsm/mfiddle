montageDefine("59aee0c","core/meta/module-blueprint",{dependencies:["montage","core/promise","core/meta/blueprint","core/serialization","core/module-reference"],factory:function(e,t){function n(e,t){for(var n=e.resolve(t),r=e.getModuleDescriptor(n);r.redirect||r.mappingRedirect;)r.redirect?n=r.redirect:(e=r.mappingRequire,n=r.mappingRedirect),r=e.getModuleDescriptor(n);return r.require}var r=e("montage").Montage,i=e("core/promise").Promise,a=e("core/meta/blueprint").Blueprint,o=e("core/serialization").Deserializer,s=e("core/module-reference").ModuleReference,u=Object.create(null),l=t.ModuleBlueprint=a.specialize({initWithModuleAndExportName:{value:function(e,t){var n=a.prototype.initWithName.call(this,t);return n.module=e,n.exportName=t,n}},initWithNameAndModuleId:{value:function(){throw Error("Use initWithModuleAndExportName")}},serializeSelf:{value:function(e){if(!this.module)throw Error("Cannot serialize blueprint without a module reference");if(!this.exportName)throw Error("Cannot serialize blueprint without an exportName");this.super(e),this._setPropertyWithDefaults(e,"module",this.module),this._setPropertyWithDefaults(e,"exportName",this.exportName)}},deserializeSelf:{value:function(e){if(this.super(e),this.module=e.getProperty("module"),this.exportName=e.getProperty("exportName"),!this.module)throw Error("Cannot deserialize blueprint without a module reference");if(!this.exportName)throw Error("Cannot deserialize blueprint without an exportName")}},module:{value:null},exportName:{value:null}},{getBlueprintWithModuleId:{value:function(e,t){if(-1===e.search(/\.meta$/))throw Error(e+" blueprint module id does not end in '.meta'");if(!t)throw Error("Require needed to get blueprint "+e);var r,i=t.location+"#"+e;return i in u?u[i]:u[i]=t.async(e).then(function(i){return r=n(t,e),(new o).init(JSON.stringify(i),r).deserializeObject()}).then(function(n){if(!l.prototype.isPrototypeOf(n))throw Error("Object in "+e+" is not a module-blueprint");return n.blueprintInstanceModule=(new s).initWithIdAndRequire(e,t),n._parentReference?n._parentReference.promise(r).then(function(e){return n._parent=e,n}):n})}},createDefaultBlueprintForObject:{value:function(e){var t=r.getInfoForObject(e).isInstance?Object.getPrototypeOf(e):e,n=r.getInfoForObject(t);return n.objectName&&n.moduleId?this.super(e).then(function(e){return e.module=(new s).initWithIdAndRequire(n.moduleId,n.require),e.exportName=n.objectName,e}):i.reject("Cannot create module-blueprint for an object that has no been loaded from a module")}}})}});