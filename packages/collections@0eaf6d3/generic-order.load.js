montageDefine("0eaf6d3","generic-order",{dependencies:["./shim-object"],factory:function(t,e,n){function i(){throw Error("Can't construct. GenericOrder is a mixin.")}var a=t("./shim-object");n.exports=i,i.prototype.equals=function(t,e){return e=e||this.contentEquals||a.equals,this===t?!0:t?this.length===t.length&&this.zip(t).every(function(t){return e(t[0],t[1])}):!1},i.prototype.compare=function(t,e){if(e=e||this.contentCompare||a.compare,this===t)return 0;if(!t)return 1;var n=Math.min(this.length,t.length),i=this.zip(t).reduce(function(t,i,a){return 0===t?a>=n?t:e(i[0],i[1]):t},0);return 0===i?this.length-t.length:i}}});