var Montage=require("montage").Montage,Converter=require("core/converter/converter").Converter,InvertConverter=exports.InvertConverter=Converter.specialize({convert:{value:function(e){return!e}},revert:{value:function(e){return!e}}});