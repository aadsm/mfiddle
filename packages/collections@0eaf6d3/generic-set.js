function GenericSet(){throw Error("Can't construct. GenericSet is a mixin.")}module.exports=GenericSet,GenericSet.prototype.union=function(t){var e=this.constructClone(this);return e.addEach(t),e},GenericSet.prototype.intersection=function(t){return this.constructClone(this.filter(function(e){return t.has(e)}))},GenericSet.prototype.difference=function(t){var e=this.constructClone(this);return e.deleteEach(t),e},GenericSet.prototype.symmetricDifference=function(t){var e=this.union(t),n=this.intersection(t);return e.difference(n)},GenericSet.prototype.equals=function(t,e){var n=this;return Object.can(t,"reduce")&&this.length===t.length&&t.reduce(function(t,i){return t&&n.has(i,e)},!0)},GenericSet.prototype.contains=function(t){return this.has(t)},GenericSet.prototype.remove=function(t){return this["delete"](t)},GenericSet.prototype.toggle=function(t){this.has(t)?this["delete"](t):this.add(t)};