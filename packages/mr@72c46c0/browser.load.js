montageDefine("72c46c0","browser",{dependencies:["require","promise","mini-url"],factory:function(){bootstrap("require/browser",function(e){function t(e){return 200===e.status||0===e.status&&e.responseText}var n=e("require"),i=e("promise"),a=e("mini-url"),r="GET",s="application/javascript",o="file:",l=l!==void 0?l:window;n.getLocation=function(){return a.resolve(window.location,".")},n.overlays=["window","browser","montage"],n.read=function(e){function n(){t(c)?u.resolve(c.responseText):l()}function l(){u.reject(Error("Can't XHR "+JSON.stringify(e)))}if(0===a.resolve(window.location,e).indexOf(o))throw Error("XHR does not function for file: protocol");var c=new XMLHttpRequest,u=i.defer();try{c.open(r,e,!0),c.overrideMimeType&&c.overrideMimeType(s),c.onreadystatechange=function(){4===c.readyState&&n()},c.onload=c.load=n,c.onerror=c.error=l}catch(h){u.reject(h.message,h)}return c.send(),u.promise};var c=eval;l.navigator&&l.navigator.userAgent.indexOf("Firefox")>=0&&(c=Function("_","return eval(_)"));var u="__FILE__",h="__",d="(function ",p="(require, exports, module) {",g="//*/\n})\n//@ sourceURL=";n.Compiler=function(e){return function(t){if(t.factory||void 0===t.text)return t;if(e.useScriptInjection)throw Error("Can't use eval.");var n=u+t.location.replace(/\.\w+$|\W/g,h);try{t.factory=c(d+n+p+t.text+g+t.location)}catch(i){throw i.message=i.message+" in "+t.location,i}t.factory.displayName=n}},n.XhrLoader=function(e){return function(t,n){return e.read(t).then(function(e){n.type="javascript",n.text=e,n.location=t})}};var m={},f=function(e,t){return m[e]=m[e]||{},m[e][t]=m[e][t]||i.defer(),m[e][t]};montageDefine=function(e,t,n){f(e,t).resolve(n)},n.loadScript=function(e){var t=document.createElement("script");t.onload=function(){t.parentNode.removeChild(t)},t.onerror=function(){t.parentNode.removeChild(t)},t.src=e,t.defer=!0,document.getElementsByTagName("head")[0].appendChild(t)},n.ScriptLoader=function(e){var t=e.packageDescription.hash;return function(e,r){return i.fcall(function(){return m[t]&&m[t][r.id]?m[t][r.id].promise:(/\.js$/.test(e)?e=e.replace(/\.js/,".load.js"):e+=".load.js",n.loadScript(e),f(t,r.id).promise)}).then(function(n){delete m[t][r.id];for(var i in n)r[i]=n[i];r.location=e,r.directory=a.resolve(e,".")})}};var v=n.loadPackageDescription;n.loadPackageDescription=function(e,t){if(e.hash){var i=f(e.hash,"package.json").promise,r=a.resolve(e.location,"package.json.load.js");return t.preloaded&&t.preloaded.isPending()?t.preloaded.then(function(){i.isPending()&&n.loadScript(r)}).done():i.isPending()&&n.loadScript(r),i.get("exports")}return v(e,t)},n.makeLoader=function(e){var t;return t=e.useScriptInjection?n.ScriptLoader:n.XhrLoader,n.MappingsLoader(e,n.ExtensionsLoader(e,n.PathsLoader(e,n.MemoizedLoader(e,t(e)))))}})}});