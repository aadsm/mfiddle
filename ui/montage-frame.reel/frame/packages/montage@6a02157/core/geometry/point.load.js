montageDefine("6a02157","core/geometry/point",{dependencies:["../core"],factory:function(e,t){var n=e("../core").Montage;t.Point=n.specialize({init:{enumerable:!1,value:function(e,t){return this.x=null===e?0:e,this.y=null===t?0:t,this}},x:{enumerable:!0,value:0},y:{enumerable:!0,value:0}},{interpolate:{enumerable:!1,value:function(e,n,r,i){var a,o;return a=n.x+(r.x-n.x)*e,o=n.y+(r.y-n.y)*e,i>0&&(a=Math.round(a*i)/i,o=Math.round(o*i)/i),(new t.Point).init(a,o)}}})}});