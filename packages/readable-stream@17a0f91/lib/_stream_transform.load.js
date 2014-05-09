montageDefine("17a0f91","lib/_stream_transform",{dependencies:["./_stream_duplex","core-util-is","inherits"],factory:function(e,t,n){function i(e,t){this.afterTransform=function(e,n){return r(t,e,n)},this.needTransform=!1,this.transforming=!1,this.writecb=null,this.writechunk=null}function r(e,t,n){var i=e._transformState;i.transforming=!1;var r=i.writecb;if(!r)return e.emit("error",Error("no writecb in Transform class"));i.writechunk=null,i.writecb=null,null!==n&&void 0!==n&&e.push(n),r&&r(t);var a=e._readableState;a.reading=!1,(a.needReadable||a.length<a.highWaterMark)&&e._read(a.highWaterMark)}function a(e){if(!(this instanceof a))return new a(e);s.call(this,e),this._transformState=new i(e,this);var t=this;this._readableState.needReadable=!0,this._readableState.sync=!1,this.once("finish",function(){"function"==typeof this._flush?this._flush(function(e){o(t,e)}):o(t)})}function o(e,t){if(t)return e.emit("error",t);var n=e._writableState;e._readableState;var i=e._transformState;if(n.length)throw Error("calling transform done when ws.length != 0");if(i.transforming)throw Error("calling transform done when still transforming");return e.push(null)}n.exports=a;var s=e("./_stream_duplex"),l=e("core-util-is");l.inherits=e("inherits"),l.inherits(a,s),a.prototype.push=function(e,t){return this._transformState.needTransform=!1,s.prototype.push.call(this,e,t)},a.prototype._transform=function(){throw Error("not implemented")},a.prototype._write=function(e,t,n){var i=this._transformState;if(i.writecb=n,i.writechunk=e,i.writeencoding=t,!i.transforming){var r=this._readableState;(i.needTransform||r.needReadable||r.length<r.highWaterMark)&&this._read(r.highWaterMark)}},a.prototype._read=function(){var e=this._transformState;null!==e.writechunk&&e.writecb&&!e.transforming?(e.transforming=!0,this._transform(e.writechunk,e.writeencoding,e.afterTransform)):e.needTransform=!0}}});