montageDefine("c081c7d","examples/typer",{dependencies:["fs","../readable.js"],factory:function(e){var t=e("fs"),n=t.createReadStream(__filename),i=e("../readable.js"),a=new i;a.wrap(n),a.on("end",function(){process.stdin.pause()}),process.stdin.setRawMode(!0),process.stdin.on("data",function(){var e=a.read(3);return e?(process.stdout.write(e),void 0):setTimeout(process.exit,500)}),process.stdin.resume()}});