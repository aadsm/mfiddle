montageDefine("cb6442b","lib/util",{dependencies:[],factory:function(e,t){function n(e){return Array.isArray(e)}function i(e){return"boolean"==typeof e}function r(e){return null===e}function a(e){return null==e}function o(e){return"number"==typeof e}function s(e){return"string"==typeof e}function l(e){return"symbol"==typeof e}function c(e){return void 0===e}function u(e){return h(e)&&"[object RegExp]"===v(e)}function h(e){return"object"==typeof e&&null!==e}function d(e){return h(e)&&"[object Date]"===v(e)}function p(e){return h(e)&&("[object Error]"===v(e)||e instanceof Error)}function f(e){return"function"==typeof e}function m(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||e===void 0}function g(e){return Buffer.isBuffer(e)}function v(e){return Object.prototype.toString.call(e)}t.isArray=n,t.isBoolean=i,t.isNull=r,t.isNullOrUndefined=a,t.isNumber=o,t.isString=s,t.isSymbol=l,t.isUndefined=c,t.isRegExp=u,t.isObject=h,t.isDate=d,t.isError=p,t.isFunction=f,t.isPrimitive=m,t.isBuffer=g}});