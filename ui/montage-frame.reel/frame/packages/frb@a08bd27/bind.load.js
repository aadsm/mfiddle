montageDefine("a08bd27","bind",{dependencies:["./parse","./algebra","./stringify","./compile-observer","./compile-binder","./compile-assigner","./observers","./binders","./scope"],factory:function(e,t,n){function i(e,t,n){n.target=e,n.targetPath=t;var i=n.source=n.source||e,c=n["<-"]||n["<->"]||"",u=n.twoWay="<->"in n;n.sourcePath=c,n.value;var h=n.parameters=n.parameters||i,d=n.document,p=n.components,m=n.trace,f=n.sourceScope=new g(i);f.parameters=h,f.document=d,f.components=p;var v=n.targetScope=new g(e);if(v.parameters=h,v.document=d,v.components=p,n.converter){var _=n.converter;_.convert&&(n.convert=_.convert.bind(_)),_.revert&&(n.revert=_.revert.bind(_))}else if(n.reverter){var y=n.reverter;y.convert&&(n.revert=y.convert.bind(y)),y.revert&&(n.convert=y.revert.bind(y))}var b=n.convert,C=n.revert,L=n.sourceSyntax=s(c),w=n.targetSyntax=s(t),x=o(w,L);if(w=x[0],L=x[1],u&&"rangeContent"===w.type)return a(v,w.args[0],f,L,b,C,n,m?{sourcePath:l(L),targetPath:l(w.args[0])}:null);m&&console.log("DEFINE BINDING",t,"<-",c,e);var M=r(v,w,f,L,b,n,m),x=o(L,w);L=x[0],w=x[1];var E=Function.noop;return u&&(m&&console.log("DEFINE BINDING",t,"->",c,i),E=r(f,L,v,w,C,n,m)),function(){M(),E()}}function r(e,t,n,i,r,a,s){var o=c(i);r&&(o=d.makeConverterObserver(o,r,n));var h=u(t);return h(o,n,e,a,s?{sourcePath:l(i),targetPath:l(t)}:null)}function a(e,t,n,i,r,a,s,o){function l(e,t,n){f||(f=!0,o&&console.log("RANGE CONTENT PROPAGATED",o.targetPath,"<-",o.sourcePath,"PLUS",e,"MINUS",t,"AT",n),g.swap(n,t.length,e),f=!1)}function u(e,t,n){f||(f=!0,o&&console.log("RANGE CONTENT PROPAGATED",o.targetPath,"->",o.sourcePath,"PLUS",e,"MINUS",t,"AT",n),m.swap(n,t.length,e),f=!1)}function d(){if(m!==g){o&&console.log("RANGE CONTENT BOUND",o.targetPath,"<->",o.sourcePath),f=!0;var t=p(m,l,n),i=p(g,u,e);return f=!1,function(){o&&console.log("RANGE CONTENT UNBOUND",o.targetPath,"<->",o.sourcePath),t(),i()}}}var g,m,f,v=c(i),_=c(t),y=h(i),b=h(t),C=Function.noop;f=!0;var L=_(function(e){C(),C=Function.noop,o&&console.log("RANGE CONTENT TARGET",o.targetPath,"SET TO",e),e&&e.addRangeChangeListener&&(g=e,m&&g?(o&&console.log("RANGE CONTENT TARGET REPLACES SOURCE",o.targetPath,"->",o.sourcePath,"WITH",g),f=!0,m.swap(0,m.length,g),f=!1,C=d()):m||f||(o&&console.log("RANGE CONTENT TARGET INITIALIZED TO COPY OF SOURCE",o.targetPath,"<-",tarce.sourcePath,"WITH",m),y(g.clone(),n)))},e);f=!1;var w=v(function(t){C(),C=Function.noop,o&&console.log("RANGE CONTENT SOURCE",o.sourcePath,"SET TO",t),t&&t.addRangeChangeListener&&(m=t,g&&m?(o&&console.log("RANGE CONTENT SOURCE REPLACES TARGET",o.targetPath,"<-",o.sourcePath,"WITH",m),f=!0,g.swap(0,g.length,m),f=!1,C=d()):g||b(m.clone(),e))},n);return g||m||y([],n),function(){C(),L(),w()}}var s=e("./parse"),o=e("./algebra"),l=e("./stringify"),c=e("./compile-observer"),u=e("./compile-binder"),h=e("./compile-assigner"),d=e("./observers"),p=d.observeRangeChange;e("./binders");var g=e("./scope");n.exports=i}});