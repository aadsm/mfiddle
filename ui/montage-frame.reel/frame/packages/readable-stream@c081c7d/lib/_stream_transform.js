function TransformState(e,t){this.afterTransform=function(e,n){return afterTransform(t,e,n)},this.needTransform=!1,this.transforming=!1,this.writecb=null,this.writechunk=null}function afterTransform(e,t,n){var a=e._transformState;a.transforming=!1;var i=a.writecb;if(!i)return e.emit("error",Error("no writecb in Transform class"));a.writechunk=null,a.writecb=null,null!==n&&void 0!==n&&e.push(n),i&&i(t);var r=e._readableState;(r.needReadable||r.length<r.highWaterMark)&&e._read(r.highWaterMark)}function Transform(e){if(!(this instanceof Transform))return new Transform(e);Duplex.call(this,e),this._transformState=new TransformState(e,this);var t=this;this._readableState.needReadable=!0,this._readableState.sync=!1,this.once("finish",function(){"function"==typeof this._flush?this._flush(function(e){done(t,e)}):done(t)})}function done(e,t){if(t)return e.emit("error",t);var n=e._writableState;e._readableState;var a=e._transformState;if(n.length)throw Error("calling transform done when ws.length != 0");if(a.transforming)throw Error("calling transform done when still transforming");return e.push(null)}module.exports=Transform;var Duplex=require("./_stream_duplex"),util=require("util");util.inherits(Transform,Duplex),Transform.prototype.push=function(e){return this._transformState.needTransform=!1,Duplex.prototype.push.call(this,e)},Transform.prototype._transform=function(){throw Error("not implemented")},Transform.prototype._write=function(e,t,n){var a=this._transformState;if(a.writecb=n,a.writechunk=e,a.writeencoding=t,!a.transforming){var i=this._readableState;(a.needTransform||i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}},Transform.prototype._read=function(){var e=this._transformState;e.writechunk&&e.writecb&&!e.transforming?(e.transforming=!0,this._transform(e.writechunk,e.writeencoding,e.afterTransform)):e.needTransform=!0};