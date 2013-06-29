montageDefine("4203091","lib/Tokenizer",{dependencies:[],factory:function(t,e,n){function i(t){return" "===t||"	"===t||"\r"===t||"\n"===t}function r(t,e){this._state=s,this._buffer="",this._sectionStart=0,this._index=0,this._options=t,this._special=0,this._cbs=e,this._running=!0}n.exports=r;var a=0,s=a++,o=a++,l=a++,c=a++,u=a++,h=a++,p=a++,d=a++,g=a++,m=a++,f=a++,v=a++,L=a++,b=a++,y=a++,C=a++,_=a++,w=a++,x=a++,M=a++,z=a++,S=a++,E=a++,k=a++,T=a++,O=a++,P=a++,B=a++,D=a++,A=a++,j=a++,I=a++,R=a++,N=a++,F=a++,q=a++,V=a++,W=a++,U=a++,H=a++,Y=a++,G=a++,K=a++,X=a++,Z=a++,J=a++,$=a++,Q=a++,te=a++;r.prototype.write=function(t){for(this._buffer+=t;this._index<this._buffer.length&&this._running;){var e=this._buffer.charAt(this._index);this._state===s?"<"===e&&(this._emitIfToken("text"),this._state=o,this._sectionStart=this._index):this._state===o?"/"===e?this._state=c:">"===e||this._special>0?this._state=s:i(e)||("!"===e?(this._state=b,this._sectionStart=this._index+1):"?"===e?(this._state=C,this._sectionStart=this._index+1):this._options&&this._options.xmlMode||"s"!==e&&"S"!==e?(this._state=l,this._sectionStart=this._index):(this._state=A,this._sectionStart=this._index)):this._state===l?"/"===e?(this._emitToken("opentagname"),this._cbs.onselfclosingtag(),this._state=h):">"===e?(this._emitToken("opentagname"),this._cbs.onopentagend(),this._state=s,this._sectionStart=this._index+1):i(e)&&(this._emitToken("opentagname"),this._state=p):this._state===c?i(e)||(">"===e?this._state=s:this._special>0?("s"===e||"S"===e)&&(this._state=j):(this._state=u,this._sectionStart=this._index)):this._state===u?">"===e?(this._emitToken("closetag"),this._state=s,this._sectionStart=this._index+1,this._special=0):i(e)&&(this._emitToken("closetag"),this._state=h,this._special=0):this._state===h?">"===e&&(this._state=s,this._sectionStart=this._index+1):this._state===p?">"===e?(this._state=s,this._cbs.onopentagend(),this._sectionStart=this._index+1):"/"===e?(this._cbs.onselfclosingtag(),this._state=h):i(e)||(this._state=d,this._sectionStart=this._index):this._state===d?"="===e?(this._emitIfToken("attribname"),this._state=m):i(e)?(this._emitIfToken("attribname"),this._state=g):("/"===e||">"===e)&&(this._emitIfToken("attribname"),this._state=p,this._index--):this._state===g?"="===e?this._state=m:"/"===e||">"===e?(this._state=p,this._index--):i(e)||(this._state=d,this._sectionStart=this._index):this._state===m?'"'===e?(this._state=f,this._sectionStart=this._index+1):"'"===e?(this._state=v,this._sectionStart=this._index+1):i(e)||(this._state=L,this._sectionStart=this._index):this._state===f?'"'===e&&(this._emitToken("attribvalue"),this._state=p):this._state===v?"'"===e&&(this._emitToken("attribvalue"),this._state=p):this._state===L?">"===e?(this._emitToken("attribvalue"),this._state=s,this._cbs.onopentagend(),this._sectionStart=this._index+1):i(e)&&(this._emitToken("attribvalue"),this._state=p):this._state===b?this._state="["===e?z:"-"===e?_:y:this._state===y?">"===e&&(this._emitToken("declaration"),this._state=s,this._sectionStart=this._index+1):this._state===C?">"===e&&(this._emitToken("processinginstruction"),this._state=s,this._sectionStart=this._index+1):this._state===_?"-"===e?(this._state=w,this._sectionStart=this._index+1):this._state=y:this._state===w?"-"===e&&(this._state=x):this._state===x?this._state="-"===e?M:w:this._state===M?">"===e?(this._cbs.oncomment(this._buffer.substring(this._sectionStart,this._index-2)),this._state=s,this._sectionStart=this._index+1):this._state=w:this._state===z?this._state="C"===e?S:y:this._state===S?this._state="D"===e?E:y:this._state===E?this._state="A"===e?k:y:this._state===k?this._state="T"===e?T:y:this._state===T?this._state="A"===e?O:y:this._state===O?"["===e?(this._state=P,this._sectionStart=this._index+1):this._state=y:this._state===P?"]"===e&&(this._state=B):this._state===B?this._state="]"===e?D:P:this._state===D?">"===e?(this._cbs.oncdata(this._buffer.substring(this._sectionStart,this._index-2)),this._state=s,this._sectionStart=this._index+1):this._state=P:this._state===A?"c"===e||"C"===e?this._state=I:"t"===e||"T"===e?this._state=G:(this._state=l,this._index--):this._state===j?this._state=1!==this._special||"c"!==e&&"C"!==e?2!==this._special||"t"!==e&&"T"!==e?s:J:V:this._state===I?"r"===e||"R"===e?this._state=R:(this._state=l,this._index--):this._state===R?"i"===e||"I"===e?this._state=N:(this._state=l,this._index--):this._state===N?"p"===e||"P"===e?this._state=F:(this._state=l,this._index--):this._state===F?"t"===e||"T"===e?this._state=q:(this._state=l,this._index--):this._state===q?(("/"===e||">"===e||i(e))&&(this._special=1),this._state=l,this._index--):this._state===V?this._state="r"===e||"R"===e?W:s:this._state===W?this._state="i"===e||"I"===e?U:s:this._state===U?this._state="p"===e||"P"===e?H:s:this._state===H?this._state="t"===e||"T"===e?Y:s:this._state===Y?">"===e||i(e)?(this._state=u,this._sectionStart=this._index-6,this._index--):this._state=s:this._state===G?"y"===e||"Y"===e?this._state=K:(this._state=l,this._index--):this._state===K?"l"===e||"L"===e?this._state=X:(this._state=l,this._index--):this._state===X?"e"===e||"E"===e?this._state=Z:(this._state=l,this._index--):this._state===Z?(("/"===e||">"===e||i(e))&&(this._special=2),this._state=l,this._index--):this._state===J?this._state="y"===e||"Y"===e?$:s:this._state===$?this._state="l"===e||"L"===e?Q:s:this._state===Q?this._state="e"===e||"E"===e?te:s:this._state===te?">"===e||i(e)?(this._state=u,this._sectionStart=this._index-5,this._index--):this._state=s:this._cbs.onerror(Error("unknown state"),this._state),this._index++}-1===this._sectionStart?(this._buffer="",this._index=0):(this._state===s?(this._emitIfToken("text"),this._buffer="",this._index=0):this._sectionStart===this._index?(this._buffer="",this._index=0):this._sectionStart>0&&(this._buffer=this._buffer.substr(this._sectionStart),this._index-=this._sectionStart),this._sectionStart=0)},r.prototype.pause=function(){this._running=!1},r.prototype.resume=function(){this._running=!0},r.prototype.end=function(t){t&&this.write(t),""===this._buffer||-1===this._sectionStart||this._sectionStart===this._index||(this._state===P||this._state===B||this._state===D?this._emitIfToken("cdata"):this._state===w||this._state===x||this._state===M?this._emitIfToken("comment"):this._state===l?this._emitIfToken("opentagname"):this._state===u?this._emitIfToken("closetag"):this._emitIfToken("text")),this._cbs.onend()},r.prototype.reset=function(){r.call(this,this._options,this._cbs)},r.prototype._emitToken=function(t){this._cbs["on"+t](this._buffer.substring(this._sectionStart,this._index)),this._sectionStart=-1},r.prototype._emitIfToken=function(t){this._index>this._sectionStart&&this._cbs["on"+t](this._buffer.substring(this._sectionStart,this._index)),this._sectionStart=-1}}});