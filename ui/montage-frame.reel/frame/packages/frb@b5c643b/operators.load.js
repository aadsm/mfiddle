montageDefine("b5c643b","operators",{dependencies:["collections/shim-object","collections/shim-regexp"],factory:function(t,e){t("collections/shim-object"),t("collections/shim-regexp"),e.toNumber=function(t){return+t},e.toString=function(t){return null==t?"":"string"==typeof t?t:""+t},e.not=function(t){return!t},e.neg=function(t){return-t},e.pow=function(t,e){return Math.pow(t,e)},e.root=function(t,e){return Math.pow(t,1/e)},e.log=function(t,e){return Math.log(t)/Math.log(e)},e.mul=function(t,e){return t*e},e.div=function(t,e){return t/e},e.mod=function(t,e){return(t%e+e)%e},e.rem=function(t,e){return t%e},e.add=function(t,e){return t+e},e.sub=function(t,e){return t-e},e.lt=function(t,e){return 0>Object.compare(t,e)},e.gt=function(t,e){return Object.compare(t,e)>0},e.le=function(t,e){return 0>=Object.compare(t,e)},e.ge=function(t,e){return Object.compare(t,e)>=0},e.equals=Object.equals,e.compare=Object.compare,e.and=function(t,e){return t&&e},e.or=function(t,e){return t||e},e.defined=function(t){return null!=t},e.startsWith=function(t,e){var n=RegExp("^"+RegExp.escape(e));return n.test(t)},e.endsWith=function(t,e){var n=RegExp(RegExp.escape(e)+"$");return n.test(t)},e.contains=function(t,e){var n=RegExp(RegExp.escape(e));return n.test(t)},e.join=function(t,e){return t.join(e||"")},e.split=function(t,e){return t.split(e||"")},e.range=function(t){for(var e=[],n=0;t>n;n++)e.push(n);return e}}});