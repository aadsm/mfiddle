montageDefine("3dfbcf3","ui/check-input",{dependencies:["ui/native-control","montage/composer/press-composer"],factory:function(e,t){var n=e("ui/native-control").NativeControl,i=e("montage/composer/press-composer").PressComposer;t.CheckInput=n.specialize({blur:{value:function(){this._element.blur()}},focus:{value:function(){this._element.focus()}},draw:{value:function(){this.super(),this._element.setAttribute("aria-checked",this._checked)}},_pressComposer:{enumerable:!1,value:null},prepareForActivationEvents:{value:function(){var e=this._pressComposer=new i;this.addComposer(e),e.addEventListener("pressStart",this,!1),e.addEventListener("press",this,!1)}},enterDocument:{value:function(e){e&&this._element.addEventListener("change",this)}},_fakeCheck:{enumerable:!1,value:function(){var e;this._element.checked=!this._element.checked,e=document.createEvent("HTMLEvents"),e.initEvent("change",!0,!0),this._element.dispatchEvent(e)}},_shouldFakeCheck:{enumerable:!1,value:!1},handlePressStart:{value:function(e){this._shouldFakeCheck=e.defaultPrevented}},handlePress:{value:function(){this._shouldFakeCheck&&(this._shouldFakeCheck=!1,this._fakeCheck())}},handleChange:{enumerable:!1,value:function(){this._pressComposer&&this._pressComposer.state===i.CANCELLED||(Object.getPropertyDescriptor(this,"checked").set.call(this,this.element.checked,!0),this._dispatchActionEvent())}}})}});