montageDefine("d9597c2","core/messageformat",{dependencies:[],factory:function(e,t,n){(function(e){function r(e,t){var n;if(e&&t&&(r.locale[e]=t),n=e=e||"en",t=t||r.locale[n=r.Utils.getFallbackLocale(e)],!t)throw Error("Plural Function not found for locale: "+e);this.pluralFunc=t,this.locale=e,this.fallbackLocale=n}r.locale={en:function(e){return 1===e?"one":"other"}},r.SafeString=function(e){this.string=e},r.SafeString.prototype.toString=function(){return""+this.string},r.Utils={numSub:function(e,t,n){return e.replace(/^#|[^\\]#/g,function(e){var r=e&&2===e.length?e.charAt(0):"";return r+'" + (function(){ var x = '+t+';\nif( isNaN(x) ){\nthrow new Error("MessageFormat: `"+lastkey_'+n+'+"` isnt a number.");\n}\nreturn x;\n})() + "'})},escapeExpression:function(e){var t={"\n":"\\n",'"':'\\"'},n=/[\n"]/g,i=/[\n"]/,a=function(e){return t[e]||"&amp;"};return e instanceof r.SafeString?""+e:null===e||e===!1?"":i.test(e)?e.replace(n,a):e},getFallbackLocale:function(e){for(var t=e.indexOf("-")>=0?"-":"_";!r.locale.hasOwnProperty(e);)if(e=e.substring(0,e.lastIndexOf(t)),0===e.length)return null;return e}};var i=function(){var e={parse:function(e,t){function n(e,t,n){for(var r=e,i=n-e.length,a=0;i>a;a++)r=t+r;return r}function r(e){var t=e.charCodeAt(0);if(255>=t)var r="x",i=2;else var r="u",i=4;return"\\"+r+n(t.toString(16).toUpperCase(),"0",i)}function i(e){return'"'+e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/[\x80-\uFFFF]/g,r)+'"'}function a(e){D>k||(k>D&&(D=k,L=[]),L.push(e))}function o(){var e="start@"+k,t=A[e];if(t)return k=t.nextPos,t.result;var n=k,r=s(),i=null!==r?function(e){return{type:"program",program:e}}(r):null;if(null!==i)var a=i;else{var a=null;k=n}return A[e]={nextPos:k,result:a},a}function s(){var e="messageFormatPattern@"+k,t=A[e];if(t)return k=t.nextPos,t.result;var n=k,r=k,i=b();if(null!==i){for(var a=[],o=l();null!==o;){a.push(o);var o=l()}if(null!==a)var s=[i,a];else{var s=null;k=r}}else{var s=null;k=r}var u=null!==s?function(e,t){var n=[];e&&e.val&&n.push(e);for(var r in t)t.hasOwnProperty(r)&&n.push(t[r]);return{type:"messageFormatPattern",statements:n}}(s[0],s[1]):null;if(null!==u)var c=u;else{var c=null;k=n}return A[e]={nextPos:k,result:c},c}function l(){var t="messageFormatPatternRight@"+k,n=A[t];if(n)return k=n.nextPos,n.result;var r=k,i=k;if("{"===e.substr(k,1)){var o="{";k+=1}else{var o=null;O&&a('"{"')}if(null!==o){var s=x();if(null!==s){var l=u();if(null!==l){var c=x();if(null!==c){if("}"===e.substr(k,1)){var h="}";k+=1}else{var h=null;O&&a('"}"')}if(null!==h){var d=b();if(null!==d)var f=[o,s,l,c,h,d];else{var f=null;k=i}}else{var f=null;k=i}}else{var f=null;k=i}}else{var f=null;k=i}}else{var f=null;k=i}}else{var f=null;k=i}var p=null!==f?function(e,t){var n=[];return e&&n.push(e),t&&t.val&&n.push(t),{type:"messageFormatPatternRight",statements:n}}(f[2],f[5]):null;if(null!==p)var m=p;else{var m=null;k=r}return A[t]={nextPos:k,result:m},m}function u(){var t="messageFormatElement@"+k,n=A[t];if(n)return k=n.nextPos,n.result;var r=k,i=k,o=y();if(null!==o){var s=k;if(","===e.substr(k,1)){var l=",";k+=1}else{var l=null;O&&a('","')}if(null!==l){var u=c();if(null!==u)var h=[l,u];else{var h=null;k=s}}else{var h=null;k=s}var d=null!==h?h:"";if(null!==d)var f=[o,d];else{var f=null;k=i}}else{var f=null;k=i}var p=null!==f?function(e,t){var n={type:"messageFormatElement",argumentIndex:e};return t&&t.length?n.elementFormat=t[1]:n.output=!0,n}(f[0],f[1]):null;if(null!==p)var m=p;else{var m=null;k=r}return A[t]={nextPos:k,result:m},m}function c(){var t="elementFormat@"+k,n=A[t];if(n)return k=n.nextPos,n.result;var r=k,i=k,o=x();if(null!==o){if("plural"===e.substr(k,6)){var s="plural";k+=6}else{var s=null;O&&a('"plural"')}if(null!==s){var l=x();if(null!==l){if(","===e.substr(k,1)){var u=",";k+=1}else{var u=null;O&&a('","')}if(null!==u){var c=x();if(null!==c){var f=h();if(null!==f){var p=x();if(null!==p)var m=[o,s,l,u,c,f,p];else{var m=null;k=i}}else{var m=null;k=i}}else{var m=null;k=i}}else{var m=null;k=i}}else{var m=null;k=i}}else{var m=null;k=i}}else{var m=null;k=i}var v=null!==m?function(e,t){return{type:"elementFormat",key:e,val:t.val}}(m[1],m[5]):null;if(null!==v)var g=v;else{var g=null;k=r}if(null!==g)var b=g;else{var y=k,_=k,w=x();if(null!==w){if("select"===e.substr(k,6)){var E="select";k+=6}else{var E=null;O&&a('"select"')}if(null!==E){var M=x();if(null!==M){if(","===e.substr(k,1)){var T=",";k+=1}else{var T=null;O&&a('","')}if(null!==T){var S=x();if(null!==S){var P=d();if(null!==P){var C=x();if(null!==C)var D=[w,E,M,T,S,P,C];else{var D=null;k=_}}else{var D=null;k=_}}else{var D=null;k=_}}else{var D=null;k=_}}else{var D=null;k=_}}else{var D=null;k=_}}else{var D=null;k=_}var L=null!==D?function(e,t){return{type:"elementFormat",key:e,val:t.val}}(D[1],D[5]):null;if(null!==L)var z=L;else{var z=null;k=y}if(null!==z)var b=z;else var b=null}return A[t]={nextPos:k,result:b},b}function h(){var e="pluralStyle@"+k,t=A[e];if(t)return k=t.nextPos,t.result;var n=k,r=f(),i=null!==r?function(e){return{type:"pluralStyle",val:e}}(r):null;if(null!==i)var a=i;else{var a=null;k=n}return A[e]={nextPos:k,result:a},a}function d(){var e="selectStyle@"+k,t=A[e];if(t)return k=t.nextPos,t.result;var n=k,r=m(),i=null!==r?function(e){return{type:"selectStyle",val:e}}(r):null;if(null!==i)var a=i;else{var a=null;k=n}return A[e]={nextPos:k,result:a},a}function f(){var e="pluralFormatPattern@"+k,t=A[e];if(t)return k=t.nextPos,t.result;var n=k,r=k,i=p(),a=null!==i?i:"";if(null!==a){for(var o=[],s=v();null!==s;){o.push(s);var s=v()}if(null!==o)var l=[a,o];else{var l=null;k=r}}else{var l=null;k=r}var u=null!==l?function(e,t){var n={type:"pluralFormatPattern",pluralForms:t};return n.offset=e?e:0,n}(l[0],l[1]):null;if(null!==u)var c=u;else{var c=null;k=n}return A[e]={nextPos:k,result:c},c}function p(){var t="offsetPattern@"+k,n=A[t];if(n)return k=n.nextPos,n.result;var r=k,i=k,o=x();if(null!==o){if("offset"===e.substr(k,6)){var s="offset";k+=6}else{var s=null;O&&a('"offset"')}if(null!==s){var l=x();if(null!==l){if(":"===e.substr(k,1)){var u=":";k+=1}else{var u=null;O&&a('":"')}if(null!==u){var c=x();if(null!==c){var h=E();if(null!==h){var d=x();if(null!==d)var f=[o,s,l,u,c,h,d];else{var f=null;k=i}}else{var f=null;k=i}}else{var f=null;k=i}}else{var f=null;k=i}}else{var f=null;k=i}}else{var f=null;k=i}}else{var f=null;k=i}var p=null!==f?function(e){return e}(f[5]):null;if(null!==p)var m=p;else{var m=null;k=r}return A[t]={nextPos:k,result:m},m}function m(){var e="selectFormatPattern@"+k,t=A[e];if(t)return k=t.nextPos,t.result;for(var n=k,r=[],i=v();null!==i;){r.push(i);var i=v()}var a=null!==r?function(e){return{type:"selectFormatPattern",pluralForms:e}}(r):null;if(null!==a)var o=a;else{var o=null;k=n}return A[e]={nextPos:k,result:o},o}function v(){var t="pluralForms@"+k,n=A[t];if(n)return k=n.nextPos,n.result;var r=k,i=k,o=x();if(null!==o){var l=g();if(null!==l){var u=x();if(null!==u){if("{"===e.substr(k,1)){var c="{";k+=1}else{var c=null;O&&a('"{"')}if(null!==c){var h=x();if(null!==h){var d=s();if(null!==d){var f=x();if(null!==f){if("}"===e.substr(k,1)){var p="}";k+=1}else{var p=null;O&&a('"}"')}if(null!==p)var m=[o,l,u,c,h,d,f,p];else{var m=null;k=i}}else{var m=null;k=i}}else{var m=null;k=i}}else{var m=null;k=i}}else{var m=null;k=i}}else{var m=null;k=i}}else{var m=null;k=i}}else{var m=null;k=i}var v=null!==m?function(e,t){return{type:"pluralForms",key:e,val:t}}(m[1],m[5]):null;if(null!==v)var b=v;else{var b=null;k=r}return A[t]={nextPos:k,result:b},b}function g(){var t="stringKey@"+k,n=A[t];if(n)return k=n.nextPos,n.result;var r=k,i=y(),o=null!==i?function(e){return e}(i):null;if(null!==o)var s=o;else{var s=null;k=r}if(null!==s)var l=s;else{var u=k,c=k;if("="===e.substr(k,1)){var h="=";k+=1}else{var h=null;O&&a('"="')}if(null!==h){var d=E();if(null!==d)var f=[h,d];else{var f=null;k=c}}else{var f=null;k=c}var p=null!==f?function(e){return e}(f[1]):null;if(null!==p)var m=p;else{var m=null;k=u}if(null!==m)var l=m;else var l=null}return A[t]={nextPos:k,result:l},l}function b(){var e="string@"+k,t=A[e];if(t)return k=t.nextPos,t.result;var n=k,r=k,i=x();if(null!==i){var a=[],o=k,s=x();if(null!==s){var l=_();if(null!==l){var u=x();if(null!==u)var c=[s,l,u];else{var c=null;k=o}}else{var c=null;k=o}}else{var c=null;k=o}for(;null!==c;){a.push(c);var o=k,s=x();if(null!==s){var l=_();if(null!==l){var u=x();if(null!==u)var c=[s,l,u];else{var c=null;k=o}}else{var c=null;k=o}}else{var c=null;k=o}}if(null!==a)var h=[i,a];else{var h=null;k=r}}else{var h=null;k=r}var d=null!==h?function(e,t){for(var n=[],r=0;t.length>r;++r)for(var i=0;t[r].length>i;++i)n.push(t[r][i]);return{type:"string",val:e+n.join("")}}(h[0],h[1]):null;if(null!==d)var f=d;else{var f=null;k=n}return A[e]={nextPos:k,result:f},f}function y(){var t="id@"+k,n=A[t];if(n)return k=n.nextPos,n.result;var r=k,i=k,o=x();if(null!==o){if(null!==e.substr(k).match(/^[a-zA-Z$_]/)){var s=e.charAt(k);k++}else{var s=null;O&&a("[a-zA-Z$_]")}if(null!==s){var l=[];if(null!==e.substr(k).match(/^[^ 	\n\r,.+={}]/)){var u=e.charAt(k);k++}else{var u=null;O&&a("[^ 	\\n\\r,.+={}]")}for(;null!==u;)if(l.push(u),null!==e.substr(k).match(/^[^ 	\n\r,.+={}]/)){var u=e.charAt(k);k++}else{var u=null;O&&a("[^ 	\\n\\r,.+={}]")}if(null!==l){var c=x();if(null!==c)var h=[o,s,l,c];else{var h=null;k=i}}else{var h=null;k=i}}else{var h=null;k=i}}else{var h=null;k=i}var d=null!==h?function(e,t){return e+(t?t.join(""):"")}(h[1],h[2]):null;if(null!==d)var f=d;else{var f=null;k=r}return A[t]={nextPos:k,result:f},f}function _(){var e="chars@"+k,t=A[e];if(t)return k=t.nextPos,t.result;var n=k,r=w();if(null!==r)for(var i=[];null!==r;){i.push(r);var r=w()}else var i=null;var a=null!==i?function(e){return e.join("")}(i):null;if(null!==a)var o=a;else{var o=null;k=n}return A[e]={nextPos:k,result:o},o}function w(){var t="char@"+k,n=A[t];if(n)return k=n.nextPos,n.result;var r=k;if(null!==e.substr(k).match(/^[^{}\\\0- 	\n\r]/)){var i=e.charAt(k);k++}else{var i=null;O&&a("[^{}\\\\\\0- 	\\n\\r]")}var o=null!==i?function(e){return e}(i):null;if(null!==o)var s=o;else{var s=null;k=r}if(null!==s)var l=s;else{var u=k;if("\\#"===e.substr(k,2)){var c="\\#";k+=2}else{var c=null;O&&a('"\\\\#"')}var h=null!==c?function(){return"\\#"}():null;if(null!==h)var d=h;else{var d=null;k=u}if(null!==d)var l=d;else{var f=k;if("\\{"===e.substr(k,2)){var p="\\{";k+=2}else{var p=null;O&&a('"\\\\{"')}var m=null!==p?function(){return"{"}():null;if(null!==m)var v=m;else{var v=null;k=f}if(null!==v)var l=v;else{var g=k;if("\\}"===e.substr(k,2)){var b="\\}";k+=2}else{var b=null;O&&a('"\\\\}"')}var y=null!==b?function(){return"}"}():null;if(null!==y)var _=y;else{var _=null;k=g}if(null!==_)var l=_;else{var w=k,E=k;if("\\u"===e.substr(k,2)){var x="\\u";k+=2}else{var x=null;O&&a('"\\\\u"')}if(null!==x){var T=M();if(null!==T){var S=M();if(null!==S){var P=M();if(null!==P){var C=M();if(null!==C)var D=[x,T,S,P,C];else{var D=null;k=E}}else{var D=null;k=E}}else{var D=null;k=E}}else{var D=null;k=E}}else{var D=null;k=E}var L=null!==D?function(e,t,n,r){return String.fromCharCode(parseInt("0x"+e+t+n+r))}(D[1],D[2],D[3],D[4]):null;if(null!==L)var z=L;else{var z=null;k=w}if(null!==z)var l=z;else var l=null}}}}return A[t]={nextPos:k,result:l},l}function E(){var t="digits@"+k,n=A[t];if(n)return k=n.nextPos,n.result;var r=k;if(null!==e.substr(k).match(/^[0-9]/)){var i=e.charAt(k);k++}else{var i=null;O&&a("[0-9]")}if(null!==i)for(var o=[];null!==i;)if(o.push(i),null!==e.substr(k).match(/^[0-9]/)){var i=e.charAt(k);k++}else{var i=null;O&&a("[0-9]")}else var o=null;var s=null!==o?function(e){return parseInt(e.join(""),10)}(o):null;if(null!==s)var l=s;else{var l=null;k=r}return A[t]={nextPos:k,result:l},l}function M(){var t="hexDigit@"+k,n=A[t];if(n)return k=n.nextPos,n.result;if(null!==e.substr(k).match(/^[0-9a-fA-F]/)){var r=e.charAt(k);k++}else{var r=null;O&&a("[0-9a-fA-F]")}return A[t]={nextPos:k,result:r},r}function x(){var e="_@"+k,t=A[e];if(t)return k=t.nextPos,t.result;var n=O;O=!1;for(var r=k,i=[],o=T();null!==o;){i.push(o);var o=T()}var s=null!==i?function(e){return e.join("")}(i):null;if(null!==s)var l=s;else{var l=null;k=r}return O=n,O&&null===l&&a("whitespace"),A[e]={nextPos:k,result:l},l}function T(){var t="whitespace@"+k,n=A[t];if(n)return k=n.nextPos,n.result;if(null!==e.substr(k).match(/^[ 	\n\r]/)){var r=e.charAt(k);k++}else{var r=null;O&&a("[ 	\\n\\r]")}return A[t]={nextPos:k,result:r},r}function S(){function t(e){e.sort();for(var t=null,n=[],r=0;e.length>r;r++)e[r]!==t&&(n.push(e[r]),t=e[r]);switch(n.length){case 0:return"end of input";case 1:return n[0];default:return n.slice(0,n.length-1).join(", ")+" or "+n[n.length-1]}}var n=t(L),r=Math.max(k,D),a=e.length>r?i(e.charAt(r)):"end of input";return"Expected "+n+" but "+a+" found."}function P(){for(var t=1,n=1,r=!1,i=0;D>i;i++){var a=e.charAt(i);"\n"===a?(r||t++,n=1,r=!1):"\r"===a|"\u2028"===a||"\u2029"===a?(t++,n=1,r=!0):(n++,r=!1)}return{line:t,column:n}}var C={_:x,"char":w,chars:_,digits:E,elementFormat:c,hexDigit:M,id:y,messageFormatElement:u,messageFormatPattern:s,messageFormatPatternRight:l,offsetPattern:p,pluralFormatPattern:f,pluralForms:v,pluralStyle:h,selectFormatPattern:m,selectStyle:d,start:o,string:b,stringKey:g,whitespace:T};if(void 0!==t){if(void 0===C[t])throw Error("Invalid rule name: "+i(t)+".")}else t="start";var k=0,O=!0,D=0,L=[],A={},z=C[t]();if(null===z||k!==e.length){var I=P();throw new this.SyntaxError(S(),I.line,I.column)}return z},toSource:function(){return this._source}};return e.SyntaxError=function(e,t,n){this.name="SyntaxError",this.message=e,this.line=t,this.column=n},e.SyntaxError.prototype=Error.prototype,e}();r.prototype.parse=function(){return i.parse.apply(i,arguments)},r.prototype.precompile=function(e){function t(e,o){o=o||{};var s,l,u,c="";switch(e.type){case"program":return t(e.program);case"messageFormatPattern":for(s=0;e.statements.length>s;++s)c+=t(e.statements[s],o);return a.begin+c+a.end;case"messageFormatPatternRight":for(s=0;e.statements.length>s;++s)c+=t(e.statements[s],o);return c;case"messageFormatElement":return o.pf_count=o.pf_count||0,c+='if(!d){\nthrow new Error("MessageFormat: No data passed to function.");\n}\n',e.output?c+='r += d["'+e.argumentIndex+'"];\n':(u="lastkey_"+(o.pf_count+1),c+="var "+u+' = "'+e.argumentIndex+'";\n',c+="var k_"+(o.pf_count+1)+"=d["+u+"];\n",c+=t(e.elementFormat,o)),c;case"elementFormat":return"select"===e.key?(c+=t(e.val,o),c+="r += (pf_"+o.pf_count+"[ k_"+(o.pf_count+1)+" ] || pf_"+o.pf_count+'[ "other" ])( d );\n'):"plural"===e.key&&(c+=t(e.val,o),c+="if ( pf_"+o.pf_count+"[ k_"+(o.pf_count+1)+' + "" ] ) {\n',c+="r += pf_"+o.pf_count+"[ k_"+(o.pf_count+1)+' + "" ]( d ); \n',c+="}\nelse {\n",c+="r += (pf_"+o.pf_count+'[ MessageFormat.locale["'+n.fallbackLocale+'"]( k_'+(o.pf_count+1)+" - off_"+o.pf_count+" ) ] || pf_"+o.pf_count+'[ "other" ] )( d );\n',c+="}\n"),c;case"pluralFormatPattern":for(o.pf_count=o.pf_count||0,c+="var off_"+o.pf_count+" = "+e.offset+";\n",c+="var pf_"+o.pf_count+" = { \n",i=!0,s=0;e.pluralForms.length>s;++s)"other"===e.pluralForms[s].key&&(i=!1),l?c+=",\n":l=1,c+='"'+e.pluralForms[s].key+'" : '+t(e.pluralForms[s].val,function(){var e=JSON.parse(JSON.stringify(o));return e.pf_count++,e}());if(c+="\n};\n",i)throw Error("No 'other' form found in pluralFormatPattern "+o.pf_count);return c;case"selectFormatPattern":for(o.pf_count=o.pf_count||0,c+="var off_"+o.pf_count+" = 0;\n",c+="var pf_"+o.pf_count+" = { \n",i=!0,s=0;e.pluralForms.length>s;++s)"other"===e.pluralForms[s].key&&(i=!1),l?c+=",\n":l=1,c+='"'+e.pluralForms[s].key+'" : '+t(e.pluralForms[s].val,function(){var e=JSON.parse(JSON.stringify(o));return e.pf_count++,e}());if(c+="\n};\n",i)throw Error("No 'other' form found in selectFormatPattern "+o.pf_count);return c;case"string":return'r += "'+r.Utils.numSub(r.Utils.escapeExpression(e.val),"k_"+o.pf_count+" - off_"+(o.pf_count-1),o.pf_count)+'";\n';default:throw Error("Bad AST type: "+e.type)}}var n=this,i=!1,a={begin:'function(d){\nvar r = "";\n',end:"return r;\n}"};return t(e)},r.prototype.compile=function(e){return Function("MessageFormat","return "+this.precompile(this.parse(e)))(r)},t!==void 0?(n!==void 0&&n.exports&&(t=n.exports=r),t.MessageFormat=r):"function"==typeof define&&define.amd?define(function(){return r}):e.MessageFormat=r})(this)}});