montageDefine("0eaf6d3","shim-object",{dependencies:["./weak-map"],factory:function(t,e,n){"use strict";var i=t("./weak-map");n.exports=Object,Object.empty=Object.freeze(Object.create(null)),Object.isObject=function(t){return Object(t)===t},Object.getValueOf=function(t){return Object.can(t,"valueOf")&&(t=t.valueOf()),t};var a=new i;Object.hash=function(t){return Object.can(t,"hash")?""+t.hash():Object(t)===t?(a.has(t)||a.set(t,Math.random().toString(36).slice(2)),a.get(t)):""+t};var r=Object.prototype.hasOwnProperty;Object.owns=function(t,e){return r.call(t,e)},Object.can=function(t,e){return null!=t&&"function"==typeof t[e]&&!r.call(t,e)},Object.has=function(t,e){if("object"!=typeof t)throw Error("Object.has can't accept non-object: "+typeof t);if(Object.can(t,"has"))return t.has(e);if("string"==typeof e)return e in t&&t[e]!==Object.prototype[e];throw Error("Key must be a string for Object.has on plain objects")},Object.get=function(t,e,n){if("object"!=typeof t)throw Error("Object.get can't accept non-object: "+typeof t);return Object.can(t,"get")?t.get(e,n):Object.has(t,e)?t[e]:n},Object.set=function(t,e,n){Object.can(t,"set")?t.set(e,n):t[e]=n},Object.addEach=function(t,e){return Object.can(e,"forEach")?"function"==typeof e.keys?e.forEach(function(e,n){t[n]=e}):e.forEach(function(e){t[e[0]]=e[1]}):Object.keys(e).forEach(function(n){t[n]=e[n]}),t},Object.forEach=function(t,e,n){Object.keys(t).forEach(function(i){e.call(n,t[i],i,t)})},Object.map=function(t,e,n){return Object.keys(t).map(function(i){return e.call(n,t[i],i,t)})},Object.values=function(t){return Object.map(t,Function.identity)},Object.concat=function(){for(var t={},e=0;arguments.length>e;e++)Object.addEach(t,arguments[e]);return t},Object.from=Object.concat,Object.is=function(t,e){return t===e?0!==t||1/t===1/e:t!==t&&e!==e},Object.equals=function(t,e,n){if(n=n||Object.equals,t=Object.getValueOf(t),e=Object.getValueOf(e),t===e)return 0!==t||1/t===1/e;if(null===t||null===e)return t===e;if(Object.can(t,"equals"))return t.equals(e,n);if(Object.can(e,"equals"))return e.equals(t,n);if("object"==typeof t&&"object"==typeof e){var i=Object.getPrototypeOf(t),a=Object.getPrototypeOf(e);if(i===a&&(i===Object.prototype||null===i)){for(var r in t)if(!n(t[r],e[r]))return!1;for(var r in e)if(!n(t[r],e[r]))return!1;return!0}}return t!==t&&e!==e},Object.compare=function(t,e){t=Object.getValueOf(t),e=Object.getValueOf(e);var n=typeof t,i=typeof e;return t===e?0:n!==i?0:"number"===n?t-e:"string"===n?e>t?-1:1:Object.can(t,"compare")?t.compare(e):Object.can(e,"compare")?-e.compare(t):0},Object.clone=function(t,e,n){if(t=Object.getValueOf(t),n=n||new i,void 0===e)e=1/0;else if(0===e)return t;if(Object.isObject(t)){if(!n.has(t))if(Object.can(t,"clone"))n.set(t,t.clone(e,n));else{var a=Object.getPrototypeOf(t);if(null!==a&&a!==Object.prototype)throw Error("Can't clone "+t);var r=Object.create(a);n.set(t,r);for(var s in t)r[s]=Object.clone(t[s],e-1,n)}return n.get(t)}return t},Object.clear=function(t){if(Object.can(t,"clear"))t.clear();else for(var e=Object.keys(t),n=e.length;n;)n--,delete t[e[n]];return t}}});