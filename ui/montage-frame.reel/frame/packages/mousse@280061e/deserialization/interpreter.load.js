montageDefine("280061e","deserialization/interpreter",{dependencies:["./reviver","./context"],factory:function(t,e){(function(e){function n(){}var a=t("./reviver").Reviver,i=t("./context").Context;Object.defineProperties(n.prototype,{instantiate:{value:function(t,e){var n=new a,r=new i(t,n,e);return r.getObjects()}}}),e.Interpreter=n})(e)}});