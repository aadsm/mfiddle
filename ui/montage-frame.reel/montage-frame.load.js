montageDefine("8775e1b","ui/montage-frame.reel/montage-frame",{dependencies:["montage/ui/component"],factory:function(e,t){var n=e("montage/ui/component").Component;t.MontageFrame=n.specialize({_css:{value:null},_serialization:{value:null},_html:{value:null},_javascript:{value:null},_iframeReady:{value:!1},_iframeWindow:{value:null},_iframeDocument:{value:null},_cssElement:{value:null},_serializationElement:{value:null},_javascriptElement:{value:null},logMessages:{distinct:!0,value:[]},enterDocument:{value:function(e){var t=this;e&&window.addEventListener("message",function(e){e._event.source===t._element.contentWindow&&"ready"===e.data&&(t._iframeReady=!0,t.needsDraw=!0,t._iframeWindow=t._element.contentWindow,t._iframeDocument=t._element.contentDocument,t._cssElement=t._iframeDocument.head.querySelector("style"),t._javascriptElement=t._iframeDocument.head.querySelector("script[type='text/montage-javascript']"),t._iframeWindow.console.debug=t.debug.bind(t),t._iframeWindow.console.log=t.log.bind(t))},!1)}},debug:{value:function(e){0==e.indexOf("Syntax error")?this._iframeDocument.body.innerHTML="<pre>"+e+"</pre>":console.debug.apply(console,arguments)}},log:{value:function(){this.logMessages.push(Array.prototype.join.call(arguments," ")),console.log.apply(console,arguments)}},load:{value:function(e,t,n,i){this._css=e,this._serialization=t,this._html=n,this._javascript=i,this.needsDraw=!0}},draw:{value:function(){if(this._iframeReady){var e=this._iframeDocument.head.querySelector("script[type='text/montage-serialization']");e&&e.parentNode.removeChild(e),this._serializationElement=this._iframeDocument.createElement("script"),this._serializationElement.setAttribute("type","text/montage-serialization"),this._iframeDocument.head.appendChild(this._serializationElement),this._iframeWindow.Frame.reset(),this._cssElement.textContent=this._css,this._serializationElement.textContent=this._serialization||"{}",this._javascriptElement.textContent=this._javascript,this._iframeDocument.body.innerHTML=this._html,this._iframeWindow.Frame.boot()}}}})}});