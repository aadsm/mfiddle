montageDefine("cf9cb2f","tests/bench",{dependencies:["ben","node-xml","libxmljs","sax","node-expat","htmlparser","../lib/Parser.js"],factory:function(e){function t(){var e=new c.SaxParser(function(){});this.parse=function(t){e.parseString(t)}}function n(){var e=new h.SaxPushParser(function(){});this.parse=function(t){e.push(t,!1)}}function a(){var e=p.parser();this.parse=function(t){e.write(t)}}function i(){var e=new d.Parser;this.parse=function(t){e.parse(t,!1)}}function r(){var e=new g.DefaultHandler,t=new g.Parser(e);this.parse=function(e){t.parseComplete(e)}}function s(){var e=new m;this.parse=function(t){e.write(t)}}var o=e("ben"),l=[];try{var c=e("node-xml");l.push([t,"node-xml"])}catch(u){}try{var h=e("libxmljs");l.push([n,"libxmljs"])}catch(u){}try{var p=e("sax");l.push([a,"sax"])}catch(u){}try{var d=e("node-expat");l.push([i,"node-expat"])}catch(u){}try{var g=e("htmlparser");l.push([r,"htmlparser"])}catch(u){}try{var m=e("../lib/Parser.js");l.push([s,"htmlparser2"])}catch(u){}var f=l.map(function(e){var t=new e[0],n=e[1];process.stdout.write(n+":"+Array(14-n.length).join(" ")),t.parse("<r>");var a=o(1e6,function(){t.parse("<foo bar='baz'>quux</foo>")});return console.log((a>.01?"":"0")+(1e3*a).toFixed(2),"ms/el"),[n,a]});console.log("\nWinner:",f.sort(function(e,t){return e[1]-t[1]})[0][0])}});