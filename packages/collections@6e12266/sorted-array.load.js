montageDefine("6e12266","sorted-array",{dependencies:["./shim","./generic-collection","./listen/property-changes","./listen/range-changes","sorted-array"],factory:function(e,t,n){"use strict";function i(e,t,n,r){return this instanceof i?(Array.isArray(e)?(this.array=e,e=e.splice(0,e.length)):this.array=[],this.contentEquals=t||Object.equals,this.contentCompare=n||Object.compare,this.getDefault=r||Function.noop,this.length=0,this.addEach(e),void 0):new i(e,t,n,r)}function r(e,t,n){for(var i=0,r=e.length-1;r>=i;){var a=i+r>>1,s=n(t,e[a]);if(s>0)i=a+1;else{if(!(0>s))return a;r=a-1}}return-(i+1)}function a(e,t,n,i){var a=r(e,t,n);if(0>a)return-1;for(;a>0&&i(t,e[a-1]);)a--;return i(t,e[a])?a:-1}function s(e,t,n,i){var a=r(e,t,n);if(0>a)return-1;for(;e.length-1>a&&i(t,e[a+1]);)a++;return i(t,e[a])?a:-1}function o(e,t,n){var i=r(e,t,n);if(0>i)return-i-1;for(var a=e.length-1;a>i&&0===n(t,e[i+1]);)i++;return i}n.exports=i,e("./shim");var l=e("./generic-collection"),c=e("./listen/property-changes"),u=e("./listen/range-changes");i.SortedArray=i,Object.addEach(i.prototype,l.prototype),Object.addEach(i.prototype,c.prototype),Object.addEach(i.prototype,u.prototype),i.prototype.isSorted=!0,i.prototype.constructClone=function(e){return new this.constructor(e,this.contentEquals,this.contentCompare,this.getDefault)},i.prototype.has=function(e,t){if(t)throw Error("SortedSet#has does not support second argument: equals");var n=r(this.array,e,this.contentCompare);return n>=0&&this.contentEquals(this.array[n],e)},i.prototype.get=function(e,t){if(t)throw Error("SortedArray#get does not support second argument: equals");var n=a(this.array,e,this.contentCompare,this.contentEquals);return-1!==n?this.array[n]:this.getDefault(e)},i.prototype.add=function(e){var t=o(this.array,e,this.contentCompare);return this.dispatchesRangeChanges&&this.dispatchBeforeRangeChange([e],[],t),this.array.splice(t,0,e),this.length++,this.dispatchesRangeChanges&&this.dispatchRangeChange([e],[],t),!0},i.prototype["delete"]=function(e,t){if(t)throw Error("SortedArray#delete does not support second argument: equals");var n=a(this.array,e,this.contentCompare,this.contentEquals);return-1!==n?(this.dispatchesRangeChanges&&this.dispatchBeforeRangeChange([],[e],n),this.array.splice(n,1),this.length--,this.dispatchesRangeChanges&&this.dispatchRangeChange([],[e],n),!0):!1},i.prototype.indexOf=function(e){return a(this.array,e,this.contentCompare,this.contentEquals)},i.prototype.lastIndexOf=function(e){return s(this.array,e,this.contentCompare,this.contentEquals)},i.prototype.find=function(e,t,n){if(t)throw Error("SortedArray#find does not support second argument: equals");if(n)throw Error("SortedArray#find does not support third argument: index");return a(this.array,e,this.contentCompare,this.contentEquals)},i.prototype.findLast=function(e,t,n){if(t)throw Error("SortedArray#findLast does not support second argument: equals");if(n)throw Error("SortedArray#findLast does not support third argument: index");return s(this.array,e,this.contentCompare,this.contentEquals)},i.prototype.push=function(){this.addEach(arguments)},i.prototype.unshift=function(){this.addEach(arguments)},i.prototype.pop=function(){return this.array.pop()},i.prototype.shift=function(){return this.array.shift()},i.prototype.slice=function(){return this.array.slice.apply(this.array,arguments)},i.prototype.splice=function(e,t){return this.swap(e,t,Array.prototype.slice.call(arguments,2))},i.prototype.swap=function(e,t,n){if(void 0===e&&void 0===t)return[];e=e||0,0>e&&(e+=this.length),void 0===t&&(t=1/0);var i=this.slice(e,e+t);return this.dispatchesRangeChanges&&this.dispatchBeforeRangeChange(n,i,e),this.array.splice(e,t),this.addEach(n),this.dispatchesRangeChanges&&this.dispatchRangeChange(n,i,e),i},i.prototype.reduce=function(e,t){var n=arguments[2];return this.array.reduce(function(t,i,r){return e.call(n,t,i,r,this)},t,this)},i.prototype.reduceRight=function(){var e=arguments[2];return this.array.reduceRight(function(t,n,i){return callback.call(e,t,n,i,this)},basis,this)},i.prototype.min=function(){return this.length?this.array[0]:void 0},i.prototype.max=function(){return this.length?this.array[this.length-1]:void 0},i.prototype.one=function(){return this.array.one()},i.prototype.clear=function(){var e;this.dispatchesRangeChanges&&(e=this.array.slice(),this.dispatchBeforeRangeChange([],e,0)),this.length=0,this.array.clear(),this.dispatchesRangeChanges&&this.dispatchRangeChange([],e,0)},i.prototype.equals=function(e,t){return this.array.equals(e,t)},i.prototype.compare=function(e,t){return this.array.compare(e,t)},i.prototype.iterate=function(e,t){return new this.Iterator(this.array,e,t)},i.prototype.Iterator=Array.prototype.Iterator}});