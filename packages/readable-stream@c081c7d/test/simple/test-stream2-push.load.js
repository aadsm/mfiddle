montageDefine("c081c7d","test/simple/test-stream2-push",{dependencies:["../common.js","../../readable","assert","util","events"],factory:function(e){function t(){console.error("readStart"),p=!0}function n(){console.error("readStop"),p=!1,process.nextTick(function(){var e=s.read();null!==e&&g.write(e)})}function i(){c(p),h.emit("data",v),c(p),h.emit("data",v),c(p),h.emit("data",v),c(p),h.emit("data",v),c(!p),5>b++?setTimeout(i,10):a()}function r(){console.error("finish"),c.deepEqual(m,f),console.log("ok")}function a(){h.emit("end"),c(!p),g.end(s.read()),setTimeout(function(){c(d)})}e("../common.js");var s=e("../../readable"),o=s.Readable,l=s.Writable,c=e("assert");e("util");var u=e("events").EventEmitter,s=new o({highWaterMark:16,encoding:"utf8"}),h=new u;s._read=function(){console.error("stream._read"),t()};var d=!1;s.on("end",function(){d=!0}),h.on("data",function(e){var t=s.push(e);console.error("data",s._readableState.length),t||n()}),h.on("end",function(){s.push(null)});var p=!1,g=new l({decodeStrings:!1}),m=[],f=["asdfgasdfgasdfgasdfg","asdfgasdfgasdfgasdfg","asdfgasdfgasdfgasdfg","asdfgasdfgasdfgasdfg","asdfgasdfgasdfgasdfg","asdfgasdfgasdfgasdfg"];g._write=function(e,t,n){console.error("WRITE %s",e),m.push(e),process.nextTick(n)},g.on("finish",r);var v="asdfg",b=0;t(),i()}});