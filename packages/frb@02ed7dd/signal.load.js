montageDefine("02ed7dd","signal",{dependencies:["collections/map"],factory:function(t,e,n){function i(t){var e=new a;return e.getDefault=function(){return 0},{observe:function(n){return n(t),e.set(n,e.get(n)+1),function(){e.set(n,e.get(n)-1)}},emit:function(n){t=n,e.forEach(function(t,e){e(n)})}}}var a=t("collections/map");n.exports=i}});