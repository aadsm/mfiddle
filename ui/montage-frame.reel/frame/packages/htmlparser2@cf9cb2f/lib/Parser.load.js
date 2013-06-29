montageDefine("cf9cb2f","lib/Parser",{dependencies:["./Tokenizer.js","util","events"],factory:function(e,t,n){function i(e,t){t||(t=a),e||(e=s),this._options=t,this._cbs=e,this._tagname="",this._attribname="",this._attribs=null,this._stack=[],this._done=!1,this._tokenizer=new r(t,this)}var r=e("./Tokenizer.js"),a={xmlMode:!1,lowerCaseAttributeNames:!1,lowerCaseTags:!1},s={},o={input:!0,option:!0,optgroup:!0,select:!0,button:!0,datalist:!0,textarea:!0},l={tr:{tr:!0,th:!0,td:!0},th:{th:!0},td:{thead:!0,td:!0},body:{head:!0,link:!0,script:!0},li:{li:!0},p:{p:!0},select:o,input:o,output:o,button:o,datalist:o,textarea:o,option:{option:!0},optgroup:{optgroup:!0}},c={__proto__:null,area:!0,base:!0,basefont:!0,br:!0,col:!0,frame:!0,hr:!0,img:!0,input:!0,isindex:!0,link:!0,meta:!0,param:!0,embed:!0};e("util").inherits(i,e("events").EventEmitter),i.prototype.ontext=function(e){this._cbs.ontext&&this._cbs.ontext(e)},i.prototype.onopentagname=function(e){if(this._options.lowerCaseTags&&(e=e.toLowerCase()),this._tagname=e,!this._options.xmlMode&&e in l)for(var t;(t=this._stack[this._stack.length-1])in l[e];this.onclosetag(t));!this._options.xmlMode&&e in c||this._stack.push(e),this._cbs.onopentagname&&this._cbs.onopentagname(e),this._cbs.onopentag&&(this._attribs={})},i.prototype.onopentagend=function(){""!==this._attribname&&this.onattribvalue(""),this._attribs&&(this._cbs.onopentag&&this._cbs.onopentag(this._tagname,this._attribs),this._attribs=null),!this._options.xmlMode&&this._cbs.onclosetag&&this._tagname in c&&this._cbs.onclosetag(this._tagname),this._tagname=""},i.prototype.onclosetag=function(e){if(this._options.lowerCaseTags&&(e=e.toLowerCase()),this._stack.length&&(!(e in c)||this._options.xmlMode)){var t=this._stack.lastIndexOf(e);if(-1!==t)if(this._cbs.onclosetag)for(t=this._stack.length-t;t--;)this._cbs.onclosetag(this._stack.pop());else this._stack.splice(t)}},i.prototype.onselfclosingtag=function(){var e=this._tagname;this.onopentagend(),this._stack[this._stack.length-1]===e&&(this._cbs.onclosetag?this._cbs.onclosetag(this._stack.pop()):this._stack.pop())},i.prototype.onattribname=function(e){""!==this._attribname&&this.onattribvalue(""),this._options.lowerCaseAttributeNames&&(e=e.toLowerCase()),this._attribname=e},i.prototype.onattribvalue=function(e){this._cbs.onattribute&&this._cbs.onattribute(this._attribname,e),this._attribs&&(this._attribs[this._attribname]=e),this._attribname=""},i.prototype.ondeclaration=function(e){if(this._cbs.onprocessinginstruction){var t=e.split(/\s|\//,1)[0];this._options.lowerCaseTags&&(t=t.toLowerCase()),this._cbs.onprocessinginstruction("!"+t,"!"+e)}},i.prototype.onprocessinginstruction=function(e){if(this._cbs.onprocessinginstruction){var t=e.split(/\s|\//,1)[0];this._options.lowerCaseTags&&(t=t.toLowerCase()),this._cbs.onprocessinginstruction("?"+t,"?"+e)}},i.prototype.oncomment=function(e){this._cbs.oncomment&&this._cbs.oncomment(e),this._cbs.oncommentend&&this._cbs.oncommentend()},i.prototype.oncdata=function(e){this._cbs.oncdatastart&&this._cbs.oncdatastart(),this._cbs.ontext&&this._cbs.ontext(e),this._cbs.oncdataend&&this._cbs.oncdataend()},i.prototype.onerror=function(e){this._cbs.onerror&&this._cbs.onerror(e)},i.prototype.onend=function(){if(this._cbs.onclosetag)for(var e=this._stack.length;e>0;this._cbs.onclosetag(this._stack[--e]));this._cbs.onend&&this._cbs.onend()},i.prototype.reset=function(){this._cbs.onreset&&this._cbs.onreset(),this._tokenizer.reset(),this._tagname="",this._attribname="",this._attribs=null,this._stack=[],this._done=!1},i.prototype.parseComplete=function(e){this.reset(),this.end(e)},i.prototype.write=function(e){this._done&&this.onerror(Error(".write() after done!")),this._tokenizer.write(e)},i.prototype.end=function(e){this._done&&this.onerror(Error(".end() after done!")),this._tokenizer.end(e),this._done=!0},i.prototype.parseChunk=i.prototype.write,i.prototype.done=i.prototype.end,n.exports=i}});