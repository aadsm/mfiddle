montageDefine("e47202a","stringify",{dependencies:["./parse","./language"],factory:function(e,t,n){"use strict";function a(e,t){return a.semantics.stringify(e,t)}function i(e){return function(t,n,a){var i=e+"{"+a(t.args[1],n)+"}";return"value"===t.args[0].type?i:a(t.args[0],n)+"."+i}}e("./parse");var r=e("./language").precedence,s=e("./language").operatorTypes;e("./language").operatorTokens,n.exports=a,a.semantics={makeBlockStringifier:i,stringify:function(e,t,n){function a(e){var n=s(e,t);return n?n:"this"}var i,s=this.stringify.bind(this),o=this.stringifiers;if(o[e.type])i=o[e.type](e,t,s);else if(e.inline)i="&"+e.type+"("+e.args.map(a).join(", ")+")";else{var l;1===e.args.length&&"mapBlock"===e.args[0].type?(l=e.type+"{"+s(e.args[0].args[1],t)+"}",e=e.args[0]):l=e.type+"("+e.args.slice(1).map(a).join(", ")+")",i="value"===e.args[0].type?l:s(e.args[0],t)+"."+l}return!n||n.type===e.type&&"if"!==n.type||r.get(n.type).has(e.type)?i:"("+i+")"},stringifiers:{value:function(){return""},literal:function(e){return"string"==typeof e.value?"'"+e.value.replace("'","\\'")+"'":""+e.value},parameters:function(){return"$"},record:function(e,t,n){return"{"+Object.map(e.args,function(e,a){var i;return i="value"===e.type?"this":n(e,t),a+": "+i}).join(", ")+"}"},tuple:function(e,t,n){return"["+Object.map(e.args,function(e){return"value"===e.type?"this":n(e)}).join(", ")+"]"},component:function(e,t){var n;return t&&t.components&&e.component?t.components.getObjectLabel?n=t.components.getObjectLabel(e.component):t.components.getLabelForObject&&(n=t.components.getLabelForObject(e.component)):n=e.label,"@"+n},element:function(e){return"#"+e.id},mapBlock:i("map"),filterBlock:i("filter"),someBlock:i("some"),everyBlock:i("every"),sortedBlock:i("sorted"),sortedSetBlock:i("sortedSet"),groupBlock:i("group"),groupMapBlock:i("groupMap"),minBlock:i("min"),maxBlock:i("max"),property:function(e,t,n){return"value"===e.args[0].type?"string"==typeof e.args[1].value?e.args[1].value:"literal"===e.args[1].type?"."+e.args[1].value:"this["+n(e.args[1],t)+"]":"parameters"===e.args[0].type?"$"+e.args[1].value:"literal"===e.args[1].type&&/^[\w\d_]+$/.test(e.args[1].value)?n(e.args[0],t,{type:"scope"})+"."+e.args[1].value:n(e.args[0],{type:"scope"},t)+"["+n(e.args[1],t)+"]"},"with":function(e,t,n){var a=n(e.args[1],t,e);return n(e.args[0],t)+"."+a},not:function(e,t,n){return"equals"===e.args[0].type?n(e.args[0].args[0],t,{type:"equals"})+" != "+n(e.args[0].args[1],t,{type:"equals"}):"!"+n(e.args[0],t,e)},neg:function(e,t,n){return"-"+n(e.args[0],t,e)},toNumber:function(e,t,n){return"+"+n(e.args[0],t,e)},parent:function(e,t,n){return"^"+n(e.args[0],t,e)},"if":function(e,t,n){return n(e.args[0],t,e)+" ? "+n(e.args[1],t)+" : "+n(e.args[2],t)},event:function(e,t,n){return e.when+" "+e.event+" -> "+n(e.listener,t)},binding:function(e,t,n,a){var i=a(t.args[0],n)+" "+e+" "+a(t.args[1],n),r="",s=t.descriptor;if(s)for(var o in s)r+=", "+o+": "+a(s[o],n);return i+r},bind:function(e,t,n){return this.binding("<-",e,t,n)},bind2:function(e,t,n){return this.binding("<->",e,t,n)},assign:function(e,t,n){return n(e.args[0],t)+": "+n(e.args[1],t)},block:function(e,t,n){var a="@"+e.label;return e.connection&&("prototype"===e.connection?a+=" < ":"object"===e.connection&&(a+=" : "),a+=n({type:"literal",value:e.module}),e.exports&&"value"!==e.exports.type&&(a+=" "+n(e.exports,t))),a+" {\n"+e.statements.map(function(e){return"    "+n(e,t)+";\n"}).join("")+"}\n"},sheet:function(e,t,n){return"\n"+e.blocks.map(function(e){return n(e,t)}).join("\n")+"\n"}}},s.forEach(function(e,t){a.semantics.stringifiers[t]=function(t,n,a){return t.args.map(function(e){return a(e,n,t)}).join(" "+e+" ").trim()}})}});