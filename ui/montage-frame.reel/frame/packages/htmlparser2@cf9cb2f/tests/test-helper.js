var htmlparser=require(".."),Parser=htmlparser.Parser,CollectingHandler=htmlparser.CollectingHandler,chunkSize=5;exports.writeToParser=function(e,t,n){for(var a=new Parser(e,t),i=0;n.length>i;i+=chunkSize)a.write(n.substr(i,chunkSize));a.end(),a.parseComplete(n)},exports.getEventCollector=function(e){var t=new CollectingHandler({onerror:e,onend:function(){e(null,t.events.reduce(function(e,t){return"onerror"===t[0]||"onend"===t[0]||("ontext"===t[0]&&e.length&&"text"===e[e.length-1].event?e[e.length-1].data[0]+=t[1]:e.push({event:t[0].slice(2),data:t.slice(1)})),e},[]))}});return t};