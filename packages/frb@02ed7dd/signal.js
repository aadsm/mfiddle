function Signal(t){var e=new Map;return e.getDefault=function(){return 0},{observe:function(n){return n(t),e.set(n,e.get(n)+1),function(){e.set(n,e.get(n)-1)}},emit:function(n){t=n,e.forEach(function(t,e){e(n)})}}}var Map=require("collections/map");module.exports=Signal;