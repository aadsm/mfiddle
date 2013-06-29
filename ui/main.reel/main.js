var Montage=require("montage").Montage,Component=require("montage/ui/component").Component,Template=require("montage/core/template").Template,gist=require("gist").gist,VERSION=1;exports.Main=Component.specialize({templateObjects:{value:{}},_componentId:{value:1},_logger:{value:null},templateDidLoad:{value:function(){var e=this.examples[0];this._logger=this.templateObjects.logger,this.addEventListener("action",this,!1),window.addEventListener("hashchange",this,!1);var t=location.hash.slice(3);t?(this.loadGist(t),this.setupGistLink(t)):(this.loadExample(e),this.executeFiddle())}},components:{value:require("components").components},examples:{value:require("examples").examples},loadGist:{value:function(e){var t=this;gist.load(e,null,function(n,i,r,o){var l,a,s;return n.version!==VERSION?(t.redirectToVersion(n.version,e),void 0):(r&&(s=new Template,l=s.createHtmlDocumentWithHtml(r),a=s.getInlineObjectsString(l),r=l.body.innerHTML,a=a.replace(/\n    /g,"\n"),r=r.replace(/\n    /g,"\n").replace(/^\s*\n|\n\s*$/g,"")),t.loadFiddle(i,a,r,o),t.executeFiddle(),void 0)})}},loadFiddle:{value:function(e,t,n,i){null!=e&&(this.templateObjects.cssCodeMirror.value=e),null!=t&&(this.templateObjects.serializationCodeMirror.value=t),null!=n&&(this.templateObjects.htmlCodeMirror.value=n),null!=i&&(this.templateObjects.javascriptCodeMirror.value=i)}},executeFiddle:{value:function(){var e=this.templateObjects;e.montageFrame.load(e.cssCodeMirror.value,e.serializationCodeMirror.value,e.htmlCodeMirror.value,e.javascriptCodeMirror.value)}},loadExample:{value:function(e){location.hash="",this.loadFiddle(e.css,this._stringifySerialization(e.serialization),e.html,e.javascript),this.executeFiddle()}},addComponentToFiddle:{value:function(e){var t=this._generateComponentId(e.name);e.serialization.properties.element={"#":t},this._addSerialization(t,e.serialization),this._addHtml(e.html.replace('data-montage-id=""','data-montage-id="'+t+'"')),this.executeFiddle()}},redirectToVersion:{value:function(e,t){var n;e||(e=0),n=window.location.href.slice(0,-window.location.hash.length)+"v"+e+"/#!/"+t,window.location.href=n}},clear:{value:function(){var e=this.templateObjects;e.cssCodeMirror.value="",e.serializationCodeMirror.value="",e.htmlCodeMirror.value="",e.javascriptCodeMirror.value="",location.hash=""}},_tmpDiv:{value:document.createElement("div")},_addHtml:{value:function(e){var t,n,i=this._getSerializationObject(),r=this.templateObjects.htmlCodeMirror,o=r.value,l=this._tmpDiv,a=!0;if(t=i&&Montage.getPath.call(i,"owner.properties.element['#']"))if(r.hasModeErrors())this._logger.log("Add component warning: The HTML code seems to be invalid, appending element at the end.");else if(l.innerHTML=o,n=l.querySelector("*[data-montage-id='"+t+"']"),n&&n.parentNode==l&&!n.nextSibling){/([\t ]*)[^\n]*\n\s*<\/[^>]+>\s*$/.exec(o);var s=RegExp.$1||"";o=o.replace(/<\/[^>]+>\s*$/,s+e+"\n$&"),a=!1}else this._logger.log("Add component warning: The owner's element is not the single root element, appending element at the end.");a&&(o+="\n"+e),this.loadFiddle(null,null,o,null)}},_addSerialization:{value:function(e,t){var n,i=this._getSerializationObject();i?(i[e]=t,n=this._stringifySerialization(i)):(i={},i[e]=t,n=this.templateObjects.serializationCodeMirror.value+"\n"+this._stringifySerialization(t),this._logger.log("Add component warning: The serialization seems to be invalid, appending component at the end.")),this.loadFiddle(null,n,null,null)}},_serializationObject:{value:null},_lastSerialization:{value:null},_getSerializationObject:{value:function(){var e=this.templateObjects.serializationCodeMirror.value;if(e===this._lastSerialization)return this._serializationObject;this._lastSerialization=e;try{return this._serializationObject=JSON.parse(e)}catch(t){return this._serializationObject=null}}},_generateComponentId:{value:function(e){var t,n=this._getSerializationObject();if(n){do t=e+this._componentId++;while(t in n)}else t=e+this._componentId++;return t}},_htmlPageTemplate:{value:'<!DOCTYPE html>\n<html>\n<head>\n    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\n    <title>MFiddle</title>\n    <script type="text/montage-serialization"><!-- serialization --></script></head>\n<body>\n    <!-- html -->\n</body>\n</html>'},_generateHtmlPage:{value:function(){var e=this.templateObjects,t=e.serializationCodeMirror.value,n=e.htmlCodeMirror.value;return t=t.replace(/\n/gm,"\n    "),n=n.replace(/\n/gm,"\n    "),this._htmlPageTemplate.replace("<!-- serialization -->",t).replace("<!-- html -->",n)}},handleComponentButtonAction:{value:function(e){this.addComponentToFiddle(e.target.component)}},handleSaveAction:{value:function(){gist.save({anon:!0,cssCode:this.templateObjects.cssCodeMirror.value,htmlMarkup:this._generateHtmlPage(),jsCode:this.templateObjects.javascriptCodeMirror.value,settings:{version:1}})}},handleNewAction:{value:function(){this.clear()}},handleRunAction:{value:function(){this.executeFiddle()}},handleExampleButtonAction:{value:function(e){this.loadExample(e.target.example)}},handleHashchange:{value:function(){var e=location.hash.slice(3);e&&gist.id!=e&&this.loadGist(e),this.setupGistLink(e)}},setupGistLink:{value:function(e){var t=this.templateObjects.gistLink,n=this.templateObjects.gistLinkCondition;n.condition=!!e,t.href="https://gist.github.com/"+e}},_stringifySerialization:{value:function(e){return JSON.stringify(e,null,4).replace(/\{\s*(\"[#@]\")\s*:\s*(\"[^\"]+\")\s*\}/g,"{$1: $2}").replace(/\{\s*(\"(?:<-|<->)\")\s*:\s*(\"[^\"]+\"\s*(?:,\s*\"converter\"\s*:\s*\{\s*\"@\"\s*:\s*\"[^\"]+\"\s*\}\s*|,\s*\"deferred\"\s*:\s*(true|false)\s*)*)\}/g,function(e,t,n){return"{"+t+": "+n.replace(/,\s*/,", ").replace(/\n\s*/,"")+"}"})}}});