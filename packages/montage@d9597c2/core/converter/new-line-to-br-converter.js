var Montage=require("montage").Montage,Converter=require("core/converter/converter").Converter,newLineToBr=function(e){return e.replace(/(\r\n|\r|\n)/g,"<br />")};exports.NewLineToBrConverter=Converter.specialize({_convert:{value:function(e){return e&&"string"==typeof e?newLineToBr(e):e}},convert:{value:function(e){return this._convert(e)}},revert:{value:function(e){return this._convert(e)}}});