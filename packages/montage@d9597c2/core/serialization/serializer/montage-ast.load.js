montageDefine("d9597c2","core/serialization/serializer/montage-ast",{dependencies:["montage","mousse/serialization/ast"],factory:function(e,t){var n=e("montage").Montage,r=e("mousse/serialization/ast").Value,i=n.specialize.call(r,{constructor:{value:function i(){}},initWithRootAndId:{value:function(e,t){return r.call(this,e,t),this}},_getSerializationValue:{value:function(){return{"#":this.value}}}});t.ElementReference=i}});