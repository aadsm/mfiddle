montageDefine("6e12266","sorted-array-map",{dependencies:["./shim","./sorted-array-set","./generic-collection","./generic-map","./listen/property-changes","sorted-array-map"],factory:function(e,t,n){"use strict";function i(e,t,n,a){return this instanceof i?(t=t||Object.equals,n=n||Object.compare,a=a||Function.noop,this.contentEquals=t,this.contentCompare=n,this.getDefault=a,this.store=new r(null,function(e,n){return t(e.key,n.key)},function(e,t){return n(e.key,t.key)}),this.length=0,this.addEach(e),void 0):new i(e,t,n,a)}e("./shim");var r=e("./sorted-array-set"),a=e("./generic-collection"),s=e("./generic-map"),o=e("./listen/property-changes");n.exports=i,i.SortedArrayMap=i,Object.addEach(i.prototype,a.prototype),Object.addEach(i.prototype,s.prototype),Object.addEach(i.prototype,o.prototype),i.prototype.constructClone=function(e){return new this.constructor(e,this.contentEquals,this.contentCompare,this.getDefault)}}});