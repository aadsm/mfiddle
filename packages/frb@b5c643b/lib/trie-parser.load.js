montageDefine("b5c643b","lib/trie-parser",{dependencies:[],factory:function(t,e,n){function i(t){var e={};return Object.keys(t.children).forEach(function(n){e[n]=i(t.children[n])}),function(n,i){return i=i||r,function(r,a){return e[r]?e[r](n,function(t){return i(t)(r,a)}):n(t.value,i)(r,a)}}}function r(t){return t}n.exports=i}});