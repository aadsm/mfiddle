montageDefine("3dfbcf3","ui/button.reel/button",{dependencies:["ui/native-control","montage/composer/press-composer","montage/collections/dict"],factory:function(e,t){var n=e("ui/native-control").NativeControl,a=e("montage/composer/press-composer").PressComposer,i=e("montage/collections/dict"),r=t.Button=n.specialize({_preventFocus:{enumerable:!1,value:!1},preventFocus:{get:function(){return this._preventFocus},set:function(e){this._preventFocus=e===!0?!0:!1}},enabled:{dependencies:["disabled"],get:function(){return!this._disabled},set:function(e){this.disabled=!e}},converter:{value:null},_labelNode:{value:void 0,enumerable:!1},_label:{value:void 0,enumerable:!1},label:{get:function(){return this._label},set:function(e){if(e&&e.length>0&&this.converter)try{e=this.converter.convert(e),this.error&&(this.error=null)}catch(t){this.error=t}this._label=e,this._isInputElement&&(this._value=e),this.needsDraw=!0}},setLabelInitialValue:{value:function(e){void 0===this._label&&(this._label=e)}},holdThreshold:{get:function(){return this._pressComposer.longPressThreshold},set:function(e){this._pressComposer.longPressThreshold=e}},_pressComposer:{enumberable:!1,value:null},_active:{enumerable:!1,value:!1},active:{get:function(){return this._active},set:function(e){this._active=e,this.needsDraw=!0}},blur:{value:function(){this._element.blur()}},focus:{value:function(){this._element.focus()}},constructor:{value:function(){this.super(),this._pressComposer=new a,this._pressComposer.longPressThreshold=this.holdThreshold,this.addComposer(this._pressComposer)}},prepareForActivationEvents:{value:function(){this._pressComposer.addEventListener("pressStart",this,!1),this._pressComposer.addEventListener("press",this,!1),this._pressComposer.addEventListener("pressCancel",this,!1)}},addEventListener:{value:function(e,t,n){this.super(e,t,n),"hold"===e&&this._pressComposer.addEventListener("longPress",this,!1)}},handlePressStart:{value:function(e){this.active=!0,e.touch&&document.addEventListener("touchmove",this,!1),this._preventFocus||this._element.focus()}},handlePress:{value:function(){this.active=!1,this._dispatchActionEvent(),document.removeEventListener("touchmove",this,!1)}},handleKeyup:{value:function(e){32===e.keyCode&&(this.active=!1,this._dispatchActionEvent())}},handleLongPress:{value:function(){this._pressComposer.cancelPress();var e=document.createEvent("CustomEvent");e.initCustomEvent("hold",!0,!0,null),this.dispatchEvent(e)}},handlePressCancel:{value:function(){this.active=!1,document.removeEventListener("touchmove",this,!1)}},handleTouchmove:{value:function(e){e.preventDefault()}},_isInputElement:{value:!1,enumerable:!1},enterDocument:{value:function(e){n.enterDocument&&n.enterDocument.apply(this,arguments),e&&(this._isInputElement="INPUT"===this.originalElement.tagName,this._isInputElement?(Object.defineProperty(this,"value",{get:function(){return this._label},set:function(e){this.label=e}}),void 0===this._label&&(this._label=this.originalElement.value)):(this.originalElement.firstChild||this.originalElement.appendChild(document.createTextNode("")),this._labelNode=this.originalElement.firstChild,this.setLabelInitialValue(this._labelNode.data),void 0===this._label&&(this._label=this._labelNode.data)),this.element.setAttribute("role","button"),this.element.addEventListener("keyup",this,!1))}},_drawLabel:{enumerable:!1,value:function(e){this._isInputElement?this._element.setAttribute("value",e):this._labelNode.data=e}},draw:{value:function(){this.super(),this._disabled?this._element.classList.add("disabled"):this._element.classList.remove("disabled"),this._active?this._element.classList.add("active"):this._element.classList.remove("active"),this._drawLabel(this.label)}},_detail:{value:null},detail:{get:function(){return null===this._detail&&(this._detail=new i),this._detail}},createActionEvent:{value:function(){var e,t=document.createEvent("CustomEvent");return e=this._detail,t.initCustomEvent("action",!0,!0,e),t}}});r.addAttributes({autofocus:{value:!1,dataType:"boolean"},disabled:{value:!1,dataType:"boolean"},form:null,formaction:null,formenctype:null,formmethod:null,formnovalidate:{dataType:"boolean"},formtarget:null,type:{value:"button"},name:null,value:null})}});