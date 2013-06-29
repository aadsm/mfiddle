var Bindings=require("frb"),parse=require("frb/parse"),stringify=require("frb/stringify"),expand=require("frb/expand"),Scope=require("frb/scope"),Serializer=require("core/serialization").Serializer,Deserializer=require("core/serialization").Deserializer;Serializer.defineSerializationUnit("bindings",function(e,t){var n,i=Bindings.getBindings(t),r={};for(var a in i){var o=i[a],s={};if(!("serializable"in o)||o.serializable){var l=o.sourcePath,u=o.sourceSyntax;if(o.source!==t){var c=e.getObjectLabel(o.source),h=new Scope({type:"component",label:c});h.components=e,u=expand(u,h)}var h=new Scope;h.components=e,l=stringify(u,h),o.twoWay?s["<->"]=l:s["<-"]=l,o.converter?s.converter=o.converter:(s.convert=o.convert,s.revert=o.revert),o.trace&&(s.trace=!0),r[a]=s,n=!0}}return n?r:void 0}),Deserializer.defineDeserializationUnit("bindings",function(e,t,n){for(var i in n){var r=n[i];if("object"!=typeof r)throw Error("Binding descriptor must be an object, not "+typeof r);"boundObject"in r?(r.source=e.getObjectByLabel(r.boundObject),r.oneway?r["<-"]=r.boundPropertyPath:r["<->"]=r.boundPropertyPath,delete r.boundObject,delete r.boundObjectPropertyPath,delete r.oneway):r["<<->"]&&(console.warn("WARNING: <<-> in bindings is deprectated, use <-> only, please update now."),r["<->"]=r["<<->"],delete r["<<->"])}Bindings.defineBindings(t,n,{components:e})});