montageDefine("37b4b7f","ui/component-button.reel/component-button",{dependencies:["montage/ui/component"],factory:function(t,e){var n=t("montage/ui/component").Component;e.ComponentButton=n.specialize({component:{value:null},_iconStyle:{value:null},enterDocument:{value:function(t){if(t){var e=this,n=this._element;this._iconStyle=this.templateObjects.icon.style,n.addEventListener("click",function(){e._dispatchActionEvent()},!1)}}},draw:{value:function(){var t=this._element,e=this.component;t.setAttribute("title","Add "+e.label),this._iconStyle.backgroundPosition=e.x+"px "+e.y+"px",this._iconStyle.width=e.width+"px",this._iconStyle.left=e.left+"px"}}})}});