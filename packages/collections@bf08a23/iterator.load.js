montageDefine("bf08a23","iterator",{dependencies:["./shim-object","./generic-collection"],factory:function(t,e,n){"use strict";function i(t){if(!(this instanceof i))return new i(t);if(Array.isArray(t)||"string"==typeof t)return i.iterate(t);if(t=a(t),t instanceof i)return t;if(t.next)this.next=function(){return t.next()};else if(t.iterate){var e=t.iterate();this.next=function(){return e.next()}}else{if("[object Function]"!==a.prototype.toString.call(t))throw new TypeError("Can't iterate "+t);this.next=t}}n.exports=i;var a=t("./shim-object"),r=t("./generic-collection");i.prototype.forEach=r.prototype.forEach,i.prototype.map=r.prototype.map,i.prototype.filter=r.prototype.filter,i.prototype.every=r.prototype.every,i.prototype.some=r.prototype.some,i.prototype.any=r.prototype.any,i.prototype.all=r.prototype.all,i.prototype.min=r.prototype.min,i.prototype.max=r.prototype.max,i.prototype.sum=r.prototype.sum,i.prototype.average=r.prototype.average,i.prototype.flatten=r.prototype.flatten,i.prototype.zip=r.prototype.zip,i.prototype.enumerate=r.prototype.enumerate,i.prototype.sorted=r.prototype.sorted,i.prototype.group=r.prototype.group,i.prototype.reversed=r.prototype.reversed,i.prototype.toArray=r.prototype.toArray,i.prototype.toObject=r.prototype.toObject,i.prototype.iterator=r.prototype.iterator,i.prototype.constructClone=function(t){var e=[];return e.addEach(t),e},i.prototype.mapIterator=function(t){var e=i(this),n=arguments[1],r=0;if("[object Function]"!=a.prototype.toString.call(t))throw new TypeError;return new e.constructor(function(){return t.call(n,e.next(),r++,e)})},i.prototype.filterIterator=function(t){var e=i(this),n=arguments[1],r=0;if("[object Function]"!=a.prototype.toString.call(t))throw new TypeError;return new e.constructor(function(){for(var i;;)if(i=e.next(),t.call(n,i,r++,e))return i})},i.prototype.reduce=function(t){var e,n=i(this),r=arguments[1],s=arguments[2],o=0;if("[object Function]"!=a.prototype.toString.call(t))throw new TypeError;try{e=n.next(),r=arguments.length>1?t.call(s,r,e,o,n):e,o++}catch(l){if(isStopIteration(l)){if(arguments.length>1)return arguments[1];throw TypeError("cannot reduce a value from an empty iterator with no initial value")}throw l}try{for(;;)e=n.next(),r=t.call(s,r,e,o,n),o++}catch(l){if(isStopIteration(l))return r;throw l}},i.prototype.concat=function(){return i.concat(Array.prototype.concat.apply(this,arguments))},i.prototype.dropWhile=function(t){var e,n=i(this),r=arguments[1],s=!1;if("[object Function]"!=a.prototype.toString.call(t))throw new TypeError;return n.forEach(function(i,a){if(!t.call(r,i,a,n))throw s=!0,e=i,StopIteration}),s?n.constructor([e]).concat(n):n.constructor([])},i.prototype.takeWhile=function(t){var e=i(this),n=arguments[1];if("[object Function]"!=a.prototype.toString.call(t))throw new TypeError;return e.mapIterator(function(i,a){if(!t.call(n,i,a,e))throw StopIteration;return i})},i.prototype.zipIterator=function(){return i.unzip(Array.prototype.concat.apply(this,arguments))},i.prototype.enumerateIterator=function(t){return i.count(t).zipIterator(this)},i.iterate=function(t){var e;return e=0,new i(function(){if("object"==typeof t)for(;!(e in t);){if(e>=t.length)throw StopIteration;e+=1}else if(e>=t.length)throw StopIteration;var n=t[e];return e+=1,n})},i.cycle=function(t,e){2>arguments.length&&(e=1/0);var n=function(){throw StopIteration};return new i(function(){var a;try{return n()}catch(r){if(isStopIteration(r)){if(0>=e)throw r;return e--,a=i.iterate(t),n=a.next.bind(a),n()}throw r}})},i.concat=function(t){t=i(t);var e=function(){throw StopIteration};return new i(function(){var n;try{return e()}catch(a){if(isStopIteration(a))return n=i(t.next()),e=n.next.bind(n),e();throw a}})},i.unzip=function(t){return t=i(t).map(i),0===t.length?new i([]):new i(function(){var e,n=t.map(function(t){try{return t.next()}catch(n){if(!isStopIteration(n))throw n;e=!0}});if(e)throw StopIteration;return n})},i.zip=function(){return i.unzip(Array.prototype.slice.call(arguments))},i.chain=function(){return i.concat(Array.prototype.slice.call(arguments))},i.range=function(t,e,n){return 3>arguments.length&&(n=1),2>arguments.length&&(e=t,t=0),t=t||0,n=n||1,new i(function(){if(t>=e)throw StopIteration;var i=t;return t+=n,i})},i.count=function(t,e){return i.range(t,1/0,e)},i.repeat=function(t,e){return new i.range(e).mapIterator(function(){return t})},"undefined"==typeof isStopIteration&&(global.isStopIteration=function(t){return"[object StopIteration]"===a.prototype.toString.call(t)}),"undefined"==typeof StopIteration&&(global.StopIteration={},a.prototype.toString=function(t){return function(){return this===global.StopIteration||this instanceof global.ReturnValue?"[object StopIteration]":t.call(this,arguments)}}(a.prototype.toString)),s===void 0&&(global.ReturnValue=function s(t){return this.message="Iteration stopped with "+t,Error.captureStackTrace&&Error.captureStackTrace(this,s),this instanceof global.ReturnValue?(this.value=t,void 0):new global.ReturnValue(t)},s.prototype=Error.prototype)}});