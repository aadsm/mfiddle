montageDefine("59aee0c","core/serialization/deserializer/properties-deserializer",{dependencies:["core/core","core/promise"],factory:function(e,t){var n=e("core/core").Montage;e("core/promise").Promise;var r=n.specialize({_object:{value:null},_objectDescriptor:{value:null},_context:{value:null},initWithObjectAndObjectDescriptorAndContext:{value:function(e,t,n){return this._object=e,this._objectDescriptor=t,this._context=n,this}},get:{value:function(e){return this._objectDescriptor.properties?this._objectDescriptor.properties[e]:void 0}},deserializeProperties:{value:function(e){var t,r=this._object,i=this._objectDescriptor.properties;if(i){e||(e=n.getSerializablePropertyNames(r));for(var o=0,a=e.length;a>o;o++)t=e[o],r[t]=i[t]}}},getObjectByLabel:{value:function(e){this._context.getObject(e)}}});t.PropertiesDeserializer=r}});