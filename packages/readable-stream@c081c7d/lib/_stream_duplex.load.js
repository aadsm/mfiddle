montageDefine("c081c7d","lib/_stream_duplex",{dependencies:["util","./_stream_readable","./_stream_writable"],factory:function(e,t,n){function i(e){return this instanceof i?(s.call(this,e),o.call(this,e),e&&e.readable===!1&&(this.readable=!1),e&&e.writable===!1&&(this.writable=!1),this.allowHalfOpen=!0,e&&e.allowHalfOpen===!1&&(this.allowHalfOpen=!1),this.once("end",r),void 0):new i(e)}function r(){this.allowHalfOpen||this._writableState.ended||process.nextTick(this.end.bind(this))}n.exports=i;var a=e("util"),s=e("./_stream_readable"),o=e("./_stream_writable");a.inherits(i,s),Object.keys(o.prototype).forEach(function(e){i.prototype[e]||(i.prototype[e]=o.prototype[e])})}});