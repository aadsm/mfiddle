montageDefine("59aee0c","core/paths",{dependencies:["core/core","collections/weak-map","collections/map","frb/parse","frb/evaluate","frb/assign","frb/observe","frb/bind","frb/compile-observer","frb/scope","frb/observers"],factory:function(e){var t=e("core/core").Montage,n=e("collections/weak-map"),r=e("collections/map"),i=e("frb/parse"),a=e("frb/evaluate"),o=e("frb/assign");e("frb/observe"),e("frb/bind");var s=e("frb/compile-observer"),l=e("frb/scope"),u=e("frb/observers"),c=u.autoCancelPrevious,h=new n,d={getPath:{value:function(e,t,n,r){return a(e,this,t||this,n,r)}},setPath:{value:function(e,t,n,r,i){return o(this,e,t,n||this,r,i)}},observePath:{value:function(e,t){var n=i(e),r=s(n);return r(c(t),new l(this))}},addRangeAtPathChangeListener:{value:function(e,t,n){function r(e,r,i){if(t[n])t[n](e,r,i);else{if(!t.call)throw Error("Can't dispatch range change to "+t);t.call(null,e,r,i)}}n=n||"handleRangeChange";var i=[];return this.addPathChangeListener(e,function(e){return e=e||[],r(e.slice(),i.slice(),0),i=e,e.addRangeChangeListener(r)})}},getPathChangeDescriptors:{value:function(){return h.has(this)||h.set(this,{}),h.get(this)}},getPathChangeDescriptor:{value:function(e,n,i){var a=t.getPathChangeDescriptors.call(this);return Object.owns(a,e)||(a[e]={willChangeListeners:new r,changeListeners:new r}),a=a[e],a=i?a.willChangeListeners:a.changeListeners,a.has(n)||a.set(n,{path:e,handler:n,beforeChange:i,cancel:Function.noop}),a.get(n)}},addPathChangeListener:{value:function(e,n,r,a){var o=this;n=n||Function.noop;var u=t.getPathChangeDescriptor.call(this,e,n,a);u.cancel();var h,d,f,p=i(e);if(n===Function.noop)f=function(t){if(d)throw Error("Path change handler needs a handler because it emits new values when the source changes: "+JSON.stringify(e));d=!0,h=t};else if(r)f=function(t){return n[r].call(n,t,e,o)};else if(n.handlePathChange)f=function(t){return n.handlePathChange.call(n,t,e,o)};else{if("function"!=typeof n)throw Error("Can't recognize handler type: "+n+". Must be function or delegate implementing handlePathChange.");f=function(t){return n.call(o,t,e,o)}}var m=s(p),v=m(c(f),new l(this));return u.cancel=v,d?h:v}},removePathChangeListener:{value:function(e,n,r){n=n||Function.noop;var i=t.getPathChangeDescriptors.call(this),a=r?"willChangeListeners":"changeListeners";if(!Object.owns(i,e))throw Error("Can't find "+a+" for "+JSON.stringify(e));var o=i[e],s=o[a];if(!s.has(n))throw Error("Can't find "+a+" for "+JSON.stringify(e));var l=s.get(n);l.cancel(),s["delete"](n),0===o.willChangeListeners.length&&0===o.changeListeners.length&&delete i[e];for(var u in i)return;h["delete"](this)}},addBeforePathChangeListener:{value:function(e,n,r){return t.addPathChangeListener.call(this,e,n,r,!0)}},removeBeforePathChangeListener:{value:function(e,n){return t.removePathChangeListener.call(this,e,n,!0)}}};t.defineProperties(t,d),t.defineProperties(t.prototype,d)}});