montageDefine("6a02157","core/geometry/cubic-bezier",{dependencies:["../core","./point"],factory:function(e,t){var n=e("../core").Montage,i=e("./point").Point,r=t.CubicBezier=n.specialize({init:{enumerable:!1,value:function(e){return null!==e&&(2===e.length?(this.p1=e[0],this.p2=e[1]):4===e.length&&(this.p0=e[0],this.p1=e[1],this.p2=e[2],this.p3=e[3])),this}},position:{enumerable:!1,value:function(e){if(!(0>e||e>1)){e=1-e;var t=e*e*e,n=3*e*e*(1-e),r=3*e*(1-e)*(1-e),o=(1-e)*(1-e)*(1-e);return(new i).init(this.p0.x*t+this.p1.x*n+this.p2.x*r+this.p3.x*o,this.p0.y*t+this.p1.y*n+this.p2.y*r+this.p3.y*o)}}},split:{enumerable:!1,value:function(e){return this.makeScaffolding(e),r.create(r).init([this.p0,this.p01,this.p012,this.p0123])}},splitToTimingFunction:{enumerable:!1,value:function(e){this.makeScaffolding(e);var t=this.p0123.x,n=this.p0123.y;return r.create(r).init([(new i).init(this.p01.x/t,this.p01.y/n),(new i).init(this.p012.x/t,this.p012.y/n)])}},makeScaffolding:{enumerable:!1,value:function(e){e=1-e;var t=1e6;n.defineProperty(this,"p01",{value:i.interpolate(e,this.p0,this.p1,t)}),n.defineProperty(this,"p12",{value:i.interpolate(e,this.p1,this.p2,t)}),n.defineProperty(this,"p23",{value:i.interpolate(e,this.p2,this.p3,t)}),n.defineProperty(this,"p012",{value:i.interpolate(e,this.p01,this.p12,t)}),n.defineProperty(this,"p123",{value:i.interpolate(e,this.p12,this.p23,t)}),n.defineProperty(this,"p0123",{value:i.interpolate(e,this.p012,this.p123,t)})}},p0:{enumerable:!0,value:(new i).init(0,0)},p1:{enumerable:!0,value:(new i).init(0,0)},p2:{enumerable:!0,value:(new i).init(1,1)},p3:{enumerable:!0,value:(new i).init(1,1)}})}});