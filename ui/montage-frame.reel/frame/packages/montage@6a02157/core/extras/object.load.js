montageDefine("6a02157","core/extras/object",{dependencies:["collections/weak-map","frb"],factory:function(e){e("collections/weak-map"),Object.defineProperty(Object,"getPropertyDescriptor",{value:function(e,t){var n,r=e;do n=Object.getOwnPropertyDescriptor(r,t);while(!n&&(r=r.__proto__||Object.getPrototypeOf(r)));return n},writable:!0,configurable:!0}),Object.defineProperty(Object,"getPrototypeAndDescriptorDefiningProperty",{value:function(e,t){var n,r=e;if(t){do n=Object.getOwnPropertyDescriptor(r,t);while(!n&&(r=r.__proto__||Object.getPrototypeOf(r)));return{prototype:r,propertyDescriptor:n}}},writable:!0,configurable:!0}),Object.defineProperty(Object.prototype,"clear",{value:function(){for(var e=Object.keys(this),t=e.length;t;)t--,delete this[e[t]];return this},writable:!0,configurable:!0}),Object.defineProperty(Object,"defineBinding",{value:function(t,n,r){var i=Error.stackTraceLimit;Error.stackTraceLimit=2,console.warn("Object.defineBinding deprecated.  See the comment below this warning for migration instructions.",Error("deprecated").stack),Error.stackTraceLimit=i;var a=e("frb");r.source=r.boundObject,r.oneway?r["<-"]=r.boundObjectPropertyPath:r["<->"]=r.boundObjectPropertyPath,r.boundValueMutator&&(r.convert=r.boundValueMutator),a.defineBinding(t,n,r)}}),Object.defineProperty(Object,"deleteBinding",{value:function(t,n){var r=e("frb");r.cancelBinding(t,n)}})}});