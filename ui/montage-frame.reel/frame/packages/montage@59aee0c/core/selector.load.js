montageDefine("59aee0c","core/selector",{dependencies:["montage","frb/parse","frb/stringify","frb/evaluate","frb/language"],factory:function(e,t){var n=e("montage").Montage,r=e("frb/parse"),i=e("frb/stringify"),a=e("frb/evaluate"),o=e("frb/language").precedence,s=t.Selector=n.specialize({syntax:{value:null},constructor:{value:function s(){this.super()}},initWithSyntax:{value:function(e){return this.syntax=e,this}},initWithPath:{value:function(e){return this.syntax=r(e),this}},stringify:{value:function(){return i(this.syntax)}},serializeSelf:{value:function(e){e.setProperty("path",i(this.syntax))}},deserializeSelf:{value:function(e){this.syntax=r(e.getProperty("path"))}},evaluate:{value:function(e,t){return a(this.syntax,e,t)}}});o.keys().forEach(function(e){n.defineProperty(s.prototype,e,{value:function(){var t=Array.prototype.map.call(arguments,function(e){return"string"==typeof e?r(e):e.syntax?e.syntax:"object"==typeof e?e:void 0});return(new this.constructor).initWithSyntax({type:e,args:[this.syntax].concat(t)})}}),n.defineProperty(s,e,{value:function(){var t=Array.prototype.map.call(arguments,function(e){return"string"==typeof e?r(e):e.syntax?e.syntax:"object"==typeof e?e:void 0});return(new this).initWithSyntax({type:e,args:t})}})})}});