montageDefine("9b797ea","ui/example-button.reel/example-button",{dependencies:["montage/ui/component"],factory:function(t,e){var n=t("montage/ui/component").Component;e.ExampleButton=n.specialize({example:{value:!1},enterDocument:{value:function(t){if(t){var e=this,n=this._element;n.classList.add("example-button"),n.addEventListener("click",function(){e._dispatchActionEvent()},!1)}}},draw:{value:function(){this._element.textContent=this.example.label}}})}});