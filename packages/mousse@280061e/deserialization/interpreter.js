(function(t){function e(){}var n=require("./reviver").Reviver,i=require("./context").Context;Object.defineProperties(e.prototype,{instantiate:{value:function(t,e){var a=new n,r=new i(t,a,e);return r.getObjects()}}}),t.Interpreter=e})(exports);