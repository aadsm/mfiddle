var Component=require("montage/ui/component").Component;exports.ExampleButton=Component.specialize({example:{value:!1},enterDocument:{value:function(t){if(t){var e=this,n=this._element;n.classList.add("example-button"),n.addEventListener("click",function(){e._dispatchActionEvent()},!1)}}},draw:{value:function(){this._element.textContent=this.example.label}}});