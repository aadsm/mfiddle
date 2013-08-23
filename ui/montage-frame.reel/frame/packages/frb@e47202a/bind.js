function bind(t,e,n){n.target=t,n.targetPath=e;var i=n.source=n.source||t,a=n["<-"]||n["<->"]||"",r=n.twoWay="<->"in n;n.sourcePath=a,n.value;var s=n.parameters=n.parameters||i,o=n.document,l=n.components,c=n.trace,h=n.sourceScope=new Scope(i,null,s,o,l),u=n.targetScope=new Scope(t,null,s,o,l);if(n.converter){var d=n.converter;d.convert&&(n.convert=d.convert.bind(d)),d.revert&&(n.revert=d.revert.bind(d))}else if(n.reverter){var p=n.reverter;p.convert&&(n.revert=p.convert.bind(p)),p.revert&&(n.convert=p.revert.bind(p))}var g=n.convert,m=n.revert,v=n.sourceSyntax=parse(a),f=n.targetSyntax=parse(e);c&&console.log("DEFINE BINDING",e,"<-",a,t);var L=bindOneWay(u,f,h,v,g,n,c),y=noop;return r&&(c&&console.log("DEFINE BINDING",e,"->",a,i),y=bindOneWay(h,v,u,f,m,n,c)),function(){L(),y()}}function bindOneWay(t,e,n,i,a,r,s){var o=solve(e,i);e=o[0],i=o[1];var l=compileObserver(i);a&&(l=Observers.makeConverterObserver(l,a,n));var c=compileBinder(e);return c(l,n,t,r,s?{sourcePath:stringify(i),targetPath:stringify(e)}:null)}function noop(){}var parse=require("./parse"),solve=require("./algebra"),stringify=require("./stringify"),compileObserver=require("./compile-observer"),compileBinder=require("./compile-binder"),Observers=require("./observers"),Scope=require("./scope");module.exports=bind;