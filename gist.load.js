montageDefine("8775e1b","gist",{dependencies:[],factory:function(e,t){var n=t.gist={clientId:"clientId",files:null,oauth:[function(e){n.oauth.callback=e,open("https://github.com/login/oauth/authorize?client_id="+n.clientId+"&scope=gist","popup","width=1015,height=500")},function(e){e?(window.ACCESS_TOKEN=localStorage.access_token=e,n.getUser(n.oauth.callback)):alert("Authentication error"),n.oauth.callback=null}],request:function(e){e.method=e.method||"GET",e.id=e.id||"",e.rev=e.rev||"",e.accepted=e.accepted||[];var t=e.anon||"GET"===e.method;if(!t&&!window.ACCESS_TOKEN)return n.oauth[0](function(){n.request(e)}),void 0;var i=e.path||"gists"+(e.id?"/"+e.id:"")+(e.rev?"/"+e.rev:"")+(e.gpath||"");this._xhr({method:e.method,url:"https://api.github.com/"+i+(!e.anon&&window.ACCESS_TOKEN?"?access_token="+ACCESS_TOKEN:""),headers:e.headers,callback:function(t){var n=t.responseText?JSON.parse(t.responseText):null;n&&n.message&&-1===e.accepted.indexOf(t.status)?alert("Sorry, I got a "+t.status+" ("+n.message+")"):e.callback&&e.callback(n,t)},data:e.data?JSON.stringify(e.data):null})},_xhr:function(e){var t=new XMLHttpRequest,n=e.method||"GET",i=e.data||"";if(t.open(n,e.url+("GET"===n&&i?"?"+i:""),!0),"GET"!==n&&t.setRequestHeader("Content-type","application/x-www-form-urlencoded"),e.headers)for(var o in e.headers)t.setRequestHeader(o,e.headers[o]);return t.onreadystatechange=function(){4===t.readyState&&t.responseText&&e.callback(t)},t.send("GET"===n?null:i),t},getUser:function(e){n.request({path:"user",callback:function(t){window.user=t,e&&e(t)}})},save:function(e){e=e||{};var t=e.anon||!window.user,i=e.callback;if(!(!n.id||n.user&&window.user&&n.user.id==user.id||t))return n.fork(n.id,n.save,e.anon),void 0;var o=n.id||"",a=e.cssCode,r=e.htmlMarkup,l=e.jsCode,s=e.settings,p="title",d={};a&&(d["component.css"]={content:a}),r&&(d["component.html"]={content:r}),l&&(d["component.js"]={content:l}),d["settings.json"]={content:JSON.stringify(s)},n.request({anon:e.anon,id:t||e.forceNew?null:o,method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8"},callback:function(e){e.id&&n.update(e),i&&i(e.id)},data:{description:p,"public":!0,files:d}})},fork:function(e,t){n.request({method:"POST",gpath:"/fork",id:e||n.id||null,headers:{"Content-Type":"text/plain; charset=UTF-8"},callback:function(e){e.id&&(n.update(e),t&&t())},data:{}})},load:function(e,t,i){n.request({id:e||n.id,rev:t||n.rev,callback:function(e){n.update(e);var t,o,a,r,l=this.files=e.files,s=l["component.css"],p=l["component.html"],d=l["component.js"],c=l["settings.json"];if(!s||!p||!d)for(var u in l){var m=u.slice(u.lastIndexOf("."));if(s||".css"!=m||(s=l[u]),p||".html"!=m||(p=l[u]),d||".js"!=m||(d=l[u]),s&&p&&d)break}if(s&&(t=s.content),p&&(o=p.content),d&&(a=d.content),c)try{r=JSON.parse(c.content)}catch(g){console.warn("Unknown settings: ",c),r={}}else r={};i&&i(r,t,o,a)}})},update:function(e){var t=e.id,i=e.history&&e.history[0]&&e.history[0].version||"";n.id!=t?(n.id=t,n.rev=void 0,location.hash="!/"+t):n.rev&&n.rev!==i&&(n.rev=i,location.hash="!/"+t+"/"+i),e.user&&(n.user=e.user),n.saved=!0},saved:!1};window.ACCESS_TOKEN=localStorage.access_token}});