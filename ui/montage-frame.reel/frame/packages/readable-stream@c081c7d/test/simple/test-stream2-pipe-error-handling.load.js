montageDefine("c081c7d","test/simple/test-stream2-pipe-error-handling",{dependencies:["../common","assert","../../readable"],factory:function(e){e("../common");var t=e("assert"),n=e("../../readable");(function(){var e=1e3,a=new n.Readable;a._read=function(t){t=Math.min(e,t),e-=t,a.push(new Buffer(t))};var i;a.unpipe=function(e){i=e,n.Readable.prototype.unpipe.call(this,e)};var r=new n.Writable;r._write=function(e,t,n){n()},a.pipe(r);var s=null;r.on("error",function(e){s=e});var o;r.on("unpipe",function(e){o=e});var l=Error("This stream turned into bacon.");r.emit("error",l),t.strictEqual(s,l),t.strictEqual(o,a),t.strictEqual(i,r)})(),function(){var e=1e3,a=new n.Readable;a._read=function(t){t=Math.min(e,t),e-=t,a.push(new Buffer(t))};var i;a.unpipe=function(e){i=e,n.Readable.prototype.unpipe.call(this,e)};var r=new n.Writable;r._write=function(e,t,n){n()},a.pipe(r);var s;r.on("unpipe",function(e){s=e});var o=Error("This stream turned into bacon."),l=null;try{r.emit("error",o)}catch(c){l=c}t.strictEqual(l,o),t.strictEqual(s,a),t.strictEqual(i,r)}()}});