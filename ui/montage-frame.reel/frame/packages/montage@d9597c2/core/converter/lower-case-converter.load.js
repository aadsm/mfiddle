montageDefine("d9597c2","core/converter/lower-case-converter",{dependencies:["montage","core/converter/converter"],factory:function(e,t){e("montage").Montage;var n=e("core/converter/converter").Converter;t.LowerCaseConverter=n.specialize({_convert:{value:function(e){return e&&"string"==typeof e?e.toLowerCase?e.toLowerCase():e:e}},convert:{value:function(e){return this._convert(e)}},revert:{value:function(e){return this._convert(e)}}})}});