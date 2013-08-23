montageDefine("9a2d78b","lib/Parser",{dependencies:["./Tokenizer.js","util","events"],factory:function(t,e,n){function i(t,e){e||(e=r),t||(t=s),this._options=e,this._cbs=t,this._tagname="",this._attribname="",this._attribs=null,this._stack=[],this._done=!1,this._tokenizer=new a(e,this)}var a=t("./Tokenizer.js"),r={xmlMode:!1,lowerCaseAttributeNames:!1,lowerCaseTags:!1},s={},o={input:!0,option:!0,optgroup:!0,select:!0,button:!0,datalist:!0,textarea:!0},l={tr:{tr:!0,th:!0,td:!0},th:{th:!0},td:{thead:!0,td:!0},body:{head:!0,link:!0,script:!0},li:{li:!0},p:{p:!0},select:o,input:o,output:o,button:o,datalist:o,textarea:o,option:{option:!0},optgroup:{optgroup:!0}},c={__proto__:null,area:!0,base:!0,basefont:!0,br:!0,col:!0,frame:!0,hr:!0,img:!0,input:!0,isindex:!0,link:!0,meta:!0,param:!0,embed:!0};t("util").inherits(i,t("events").EventEmitter),i.prototype.ontext=function(t){this._cbs.ontext&&this._cbs.ontext(t)},i.prototype.onopentagname=function(t){if(this._options.lowerCaseTags&&(t=t.toLowerCase()),this._tagname=t,!this._options.xmlMode&&t in l)for(var e;(e=this._stack[this._stack.length-1])in l[t];this.onclosetag(e));!this._options.xmlMode&&t in c||this._stack.push(t),this._cbs.onopentagname&&this._cbs.onopentagname(t),this._cbs.onopentag&&(this._attribs={})},i.prototype.onopentagend=function(){""!==this._attribname&&this.onattribvalue(""),this._attribs&&(this._cbs.onopentag&&this._cbs.onopentag(this._tagname,this._attribs),this._attribs=null),!this._options.xmlMode&&this._cbs.onclosetag&&this._tagname in c&&this._cbs.onclosetag(this._tagname),this._tagname=""},i.prototype.onclosetag=function(t){if(this._options.lowerCaseTags&&(t=t.toLowerCase()),this._stack.length&&(!(t in c)||this._options.xmlMode)){var e=this._stack.lastIndexOf(t);if(-1!==e)if(this._cbs.onclosetag)for(e=this._stack.length-e;e--;)this._cbs.onclosetag(this._stack.pop());else this._stack.splice(e)}},i.prototype.onselfclosingtag=function(){var t=this._tagname;this.onopentagend(),this._stack[this._stack.length-1]===t&&(this._cbs.onclosetag?this._cbs.onclosetag(this._stack.pop()):this._stack.pop())},i.prototype.onattribname=function(t){""!==this._attribname&&this.onattribvalue(""),this._options.lowerCaseAttributeNames&&(t=t.toLowerCase()),this._attribname=t},i.prototype.onattribvalue=function(t){this._cbs.onattribute&&this._cbs.onattribute(this._attribname,t),this._attribs&&(this._attribs[this._attribname]=t),this._attribname=""},i.prototype.ondeclaration=function(t){if(this._cbs.onprocessinginstruction){var e=t.split(/\s|\//,1)[0];this._options.lowerCaseTags&&(e=e.toLowerCase()),this._cbs.onprocessinginstruction("!"+e,"!"+t)}},i.prototype.onprocessinginstruction=function(t){if(this._cbs.onprocessinginstruction){var e=t.split(/\s|\//,1)[0];this._options.lowerCaseTags&&(e=e.toLowerCase()),this._cbs.onprocessinginstruction("?"+e,"?"+t)}},i.prototype.oncomment=function(t){this._cbs.oncomment&&this._cbs.oncomment(t),this._cbs.oncommentend&&this._cbs.oncommentend()},i.prototype.oncdata=function(t){this._cbs.oncdatastart&&this._cbs.oncdatastart(),this._cbs.ontext&&this._cbs.ontext(t),this._cbs.oncdataend&&this._cbs.oncdataend()},i.prototype.onerror=function(t){this._cbs.onerror&&this._cbs.onerror(t)},i.prototype.onend=function(){if(this._cbs.onclosetag)for(var t=this._stack.length;t>0;this._cbs.onclosetag(this._stack[--t]));this._cbs.onend&&this._cbs.onend()},i.prototype.reset=function(){this._cbs.onreset&&this._cbs.onreset(),this._tokenizer.reset(),this._tagname="",this._attribname="",this._attribs=null,this._stack=[],this._done=!1},i.prototype.parseComplete=function(t){this.reset(),this.end(t)},i.prototype.write=function(t){this._done&&this.onerror(Error(".write() after done!")),this._tokenizer.write(t)},i.prototype.end=function(t){this._done&&this.onerror(Error(".end() after done!")),this._tokenizer.end(t),this._done=!0},i.prototype.parseChunk=i.prototype.write,i.prototype.done=i.prototype.end,n.exports=i}});