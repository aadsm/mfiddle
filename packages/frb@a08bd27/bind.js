function bind(e,t,n){n.target=e,n.targetPath=t;var i=n.source=n.source||e,r=n["<-"]||n["<->"]||"",a=n.twoWay="<->"in n;n.sourcePath=r,n.value;var s=n.parameters=n.parameters||i,o=n.document,l=n.components,c=n.trace,u=n.sourceScope=new Scope(i);u.parameters=s,u.document=o,u.components=l;var h=n.targetScope=new Scope(e);if(h.parameters=s,h.document=o,h.components=l,n.converter){var d=n.converter;d.convert&&(n.convert=d.convert.bind(d)),d.revert&&(n.revert=d.revert.bind(d))}else if(n.reverter){var p=n.reverter;p.convert&&(n.revert=p.convert.bind(p)),p.revert&&(n.convert=p.revert.bind(p))}var f=n.convert,m=n.revert,g=n.sourceSyntax=parse(r),v=n.targetSyntax=parse(t),_=solve(v,g);if(v=_[0],g=_[1],a&&"rangeContent"===v.type)return bindRangeContent(h,v.args[0],u,g,f,m,n,c?{sourcePath:stringify(g),targetPath:stringify(v.args[0])}:null);c&&console.log("DEFINE BINDING",t,"<-",r,e);var y=bindOneWay(h,v,u,g,f,n,c),_=solve(g,v);g=_[0],v=_[1];var b=Function.noop;return a&&(c&&console.log("DEFINE BINDING",t,"->",r,i),b=bindOneWay(u,g,h,v,m,n,c)),function(){y(),b()}}function bindOneWay(e,t,n,i,r,a,s){var o=compileObserver(i);r&&(o=Observers.makeConverterObserver(o,r,n));var l=compileBinder(t);return l(o,n,e,a,s?{sourcePath:stringify(i),targetPath:stringify(t)}:null)}function bindRangeContent(e,t,n,i,r,a,s,o){function l(e,t,n){p||(p=!0,o&&console.log("RANGE CONTENT PROPAGATED",o.targetPath,"<-",o.sourcePath,"PLUS",e,"MINUS",t,"AT",n),h.swap(n,t.length,e),p=!1)}function c(e,t,n){p||(p=!0,o&&console.log("RANGE CONTENT PROPAGATED",o.targetPath,"->",o.sourcePath,"PLUS",e,"MINUS",t,"AT",n),d.swap(n,t.length,e),p=!1)}function u(){if(d!==h){o&&console.log("RANGE CONTENT BOUND",o.targetPath,"<->",o.sourcePath),p=!0;var t=observeRangeChange(d,l,n),i=observeRangeChange(h,c,e);return p=!1,function(){o&&console.log("RANGE CONTENT UNBOUND",o.targetPath,"<->",o.sourcePath),t(),i()}}}var h,d,p,f=compileObserver(i),m=compileObserver(t),g=compileAssigner(i),v=compileAssigner(t),_=Function.noop;p=!0;var y=m(function(e){_(),_=Function.noop,o&&console.log("RANGE CONTENT TARGET",o.targetPath,"SET TO",e),e&&e.addRangeChangeListener&&(h=e,d&&h?(o&&console.log("RANGE CONTENT TARGET REPLACES SOURCE",o.targetPath,"->",o.sourcePath,"WITH",h),p=!0,d.swap(0,d.length,h),p=!1,_=u()):d||p||(o&&console.log("RANGE CONTENT TARGET INITIALIZED TO COPY OF SOURCE",o.targetPath,"<-",tarce.sourcePath,"WITH",d),g(h.clone(),n)))},e);p=!1;var b=f(function(t){_(),_=Function.noop,o&&console.log("RANGE CONTENT SOURCE",o.sourcePath,"SET TO",t),t&&t.addRangeChangeListener&&(d=t,h&&d?(o&&console.log("RANGE CONTENT SOURCE REPLACES TARGET",o.targetPath,"<-",o.sourcePath,"WITH",d),p=!0,h.swap(0,h.length,d),p=!1,_=u()):h||v(d.clone(),e))},n);return h||d||g([],n),function(){_(),y(),b()}}var parse=require("./parse"),solve=require("./algebra"),stringify=require("./stringify"),compileObserver=require("./compile-observer"),compileBinder=require("./compile-binder"),compileAssigner=require("./compile-assigner"),Observers=require("./observers"),observeRangeChange=Observers.observeRangeChange,Binders=require("./binders"),Scope=require("./scope");module.exports=bind;