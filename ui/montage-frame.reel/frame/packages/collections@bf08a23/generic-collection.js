"use strict";function GenericCollection(){throw Error("Can't construct. GenericCollection is a mixin.")}module.exports=GenericCollection,GenericCollection.prototype.addEach=function(t){if(t&&Object(t)===t)if("function"==typeof t.forEach)t.forEach(this.add,this);else if("number"==typeof t.length)for(var e=0;t.length>e;e++)this.add(t[e],e);else Object.keys(t).forEach(function(e){this.add(t[e],e)},this);return this},GenericCollection.prototype.deleteEach=function(t,e){return t.forEach(function(t){this["delete"](t,e)},this),this},GenericCollection.prototype.forEach=function(t){var e=arguments[1];return this.reduce(function(n,i,a,r,s){t.call(e,i,a,r,s)},void 0)},GenericCollection.prototype.map=function(t){var e=arguments[1],n=[];return this.reduce(function(i,a,r,s,o){n.push(t.call(e,a,r,s,o))},void 0),n},GenericCollection.prototype.enumerate=function(t){null==t&&(t=0);var e=[];return this.reduce(function(n,i){e.push([t++,i])},void 0),e},GenericCollection.prototype.group=function(t,e,n){n=n||Object.equals;var i=[],a=[];return this.forEach(function(r,s,o){var l,s=t.call(e,r,s,o),c=a.indexOf(s,n);-1===c?(l=[],i.push([s,l]),a.push(s)):l=i[c][1],l.push(r)}),i},GenericCollection.prototype.toArray=function(){return this.map(Function.identity)},GenericCollection.prototype.toObject=function(){var t={};return this.reduce(function(e,n,i){t[i]=n},void 0),t},GenericCollection.prototype.filter=function(t){var e=arguments[1],n=this.constructClone();return this.reduce(function(i,a,r,s,o){t.call(e,a,r,s,o)&&n.add(a)},void 0),n},GenericCollection.prototype.every=function(t){var e=arguments[1];return this.reduce(function(n,i,a,r,s){return n&&t.call(e,i,a,r,s)},!0)},GenericCollection.prototype.some=function(t){var e=arguments[1];return this.reduce(function(n,i,a,r,s){return n||t.call(e,i,a,r,s)},!1)},GenericCollection.prototype.all=function(){return this.every(Boolean)},GenericCollection.prototype.any=function(){return this.some(Boolean)},GenericCollection.prototype.min=function(t){t=t||this.contentCompare||Object.compare;var e=!0;return this.reduce(function(n,i){return e?(e=!1,i):0>t(i,n)?i:n},void 0)},GenericCollection.prototype.max=function(t){t=t||this.contentCompare||Object.compare;var e=!0;return this.reduce(function(n,i){return e?(e=!1,i):t(i,n)>0?i:n},void 0)},GenericCollection.prototype.sum=function(t){return t=void 0===t?0:t,this.reduce(function(t,e){return t+e},t)},GenericCollection.prototype.average=function(t){var e=void 0===t?0:t,n=void 0===t?0:t;return this.reduce(function(t,i){e+=i,n+=1},void 0),e/n},GenericCollection.prototype.concat=function(){for(var t=this.constructClone(this),e=0;arguments.length>e;e++)t.addEach(arguments[e]);return t},GenericCollection.prototype.flatten=function(){var t=this;return this.reduce(function(e,n){return n.forEach(function(t){this.push(t)},e,t),e},[])},GenericCollection.prototype.zip=function(){var t=Array.prototype.slice.call(arguments);return t.unshift(this),Array.unzip(t)},GenericCollection.prototype.sorted=function(t,e,n){return t=t||this.contentCompare||Object.compare,t.by?(e=t.by,t=t.compare||this.contentCompare||Object.compare):e=e||Function.identity,void 0===n&&(n=1),this.map(function(t){return{by:e(t),value:t}}).sort(function(e,i){return t(e.by,i.by)*n}).map(function(t){return t.value})},GenericCollection.prototype.reversed=function(){return this.constructClone(this).reverse()},GenericCollection.prototype.clone=function(t,e){if(void 0===t)t=1/0;else if(0===t)return this;var n=this.constructClone();return this.forEach(function(i,a){n.add(Object.clone(i,t-1,e),a)},this),n},GenericCollection.prototype.only=function(){return 1===this.length?this.one():void 0},GenericCollection.prototype.iterator=function(){return this.iterate.apply(this,arguments)},require("./shim-array");