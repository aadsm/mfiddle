montageDefine("d9597c2","core/serialization/serializer/montage-labeler",{dependencies:["montage","mousse/serialization/labeler"],factory:function(e,t){var n=e("montage").Montage,r=e("mousse/serialization/labeler").Labeler;t.MontageLabeler=n.specialize.call(r,{_labelRegexp:{value:/^[a-zA-Z_$][0-9a-zA-Z_$]*$/},constructor:{value:function(){r.call(this)}},getObjectName:{value:function(e){var t,i=e.identifier;return i&&this._labelRegexp.test(i)?t=e.identifier:"getInfoForObject"in e||"getInfoForObject"in e.constructor?(t=n.getInfoForObject(e).objectName,t=t.toLowerCase()):t=r.prototype.getObjectName.call(this,e),t}}})}});