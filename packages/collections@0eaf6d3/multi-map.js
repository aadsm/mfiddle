"use strict";function MultiMap(t,e,n,i){return this instanceof MultiMap?(this.bucket=e||this.bucket,Map.call(this,t,n,i,function(t){var e=this.bucket();return Map.prototype.set.call(this,t,e),e}),void 0):new MultiMap(t,e,n,i)}var Map=require("./map");module.exports=MultiMap,MultiMap.prototype=Object.create(Map.prototype),MultiMap.prototype.constructor=MultiMap,MultiMap.prototype.constructClone=function(t){return new this.constructor(t,this.bucket,this.contentEquals,this.contentHash)},MultiMap.prototype.set=function(t,e){var n=this.get(t);n.swap(0,n.length,e)},MultiMap.prototype.bucket=function(){return[]};