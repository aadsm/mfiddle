montageDefine("d9597c2","core/serialization/deserializer/serialization-extractor",{dependencies:["core/core","./montage-reviver","frb/parse"],factory:function(e,t){var n=e("core/core").Montage,r=e("./montage-reviver").MontageReviver,i=e("frb/parse"),a=n.specialize({_serialization:{value:null},initWithSerialization:{value:function(e){this._serialization=e}},extractObjects:{value:function(e,t){var n=this._serialization,r={};t=t||[];for(var i,a=0;i=e[a];a++)i in n&&(r[i]=n[i],this._findLabels(i,t));for(var i,a=0;i=t[a];a++)!(i in r)&&i in n&&(r[i]={});return JSON.parse(JSON.stringify(r))}},_findLabels:{value:function(e,t){var n;if(-1===t.indexOf(e)){if(!(e in this._serialization))throw Error("Object '"+e+"' not found.");t.push(e),n=this._serialization[e],this._collectLabels(n,t),this._collectLabelsInUnits(n,t)}}},_collectLabels:{value:function(e,t){var n,i=r.getTypeOf(e);if("reference"===i)n=e["@"],this._findLabels(n,t);else if("array"===i)for(var a=0,o=e.length;o>a;a++)this._collectLabels(e[a],t);else if("object"===i)for(var s in e)this._collectLabels(e[s],t)}},_collectLabelsInUnits:{value:function(e,t){"bindings"in e?this._collectLabelsInBindings(e.bindings,t):"localizations"in e&&this._collectLabelsInLocalizations(e.localizations,t)}},_collectLabelsInBindings:{value:function(e,t){var n,r;for(var i in e)n=e[i],r=n["<-"]||n["<->"],this._collectLabelsInBindingPath(r,t)}},_collectLabelsInBindingPath:{value:function(e,t){var n=this,r=i(e);this._traverseBindingParseTree(r,function(e){n._findLabels(e.label,t)})}},_traverseBindingParseTree:{value:function(e,t){var n=e.args;if("component"===e.type&&t(e),n)for(var r=0,i=n.length;i>r;r++)this._traverseBindingParseTree(n[r],t)}},_collectLabelsInLocalizations:{value:function(e,t){for(var n in e)this._collectLabelsInLocalizationProperty(e[n],t)}},_collectLabelsInLocalizationProperty:{value:function(e,t){var n;if("key"in e&&this._collectLabelsInLocalizationBinding(e.key,t),"default"in e&&this._collectLabelsInLocalizationBinding(e.default,t),"data"in e){n=e.data;for(var r in n)this._collectLabelsInLocalizationBinding(n[r],t)}}},_collectLabelsInLocalizationBinding:{value:function(e,t){var n=e["<-"]||e["<->"];n&&this._collectLabelsInBindingPath(n,t)}}});t.SerializationExtractor=a}});