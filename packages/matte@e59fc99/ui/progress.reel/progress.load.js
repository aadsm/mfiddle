montageDefine("e59fc99","ui/progress.reel/progress",{dependencies:["native/ui/progress.reel"],factory:function(e,t){var n=e("native/ui/progress.reel").Progress;t.Progress=n.specialize({hasTemplate:{value:!0},_barElement:{enumerable:!1,value:null},_value:{enumerable:!1,value:null},value:{get:function(){return this._value},set:function(e){e!==this._value&&(this._value="string"==typeof e?parseInt(e,10):e,this._max&&this._value>this._max&&(this._value=this._max),0>this._value&&(this._value=0),this.needsDraw=!0)}},_max:{enumerable:!1,value:null},max:{get:function(){return this._max},set:function(e){e!==this._max&&(this._max="string"==typeof e?parseInt(e,10):e,0>=this._max&&(this._max=1),this.needsDraw=!0)}},constructor:{value:function(){this.super()}},draw:{enumerable:!1,value:function(){var e=this._value/this._max;e=Math.min(Math.max(e,0),1);var t=100*e;this._barElement.style.width=t+"%"}}})}});