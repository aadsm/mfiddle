montageDefine("6a02157","window-loader/window-loader",{dependencies:[],factory:function(e){var t=window.opener;e.loadPackage(t.require.location).then(function(e){var t=window.loadInfo,n=t.module,i=t.name,r=t.callback;return window.require=e,e.async("montage/ui/component").then(function(){return e.async("montage/ui/loader.reel").then(function(e){var t=e.Loader.create();t.mainModule=n,t.mainName=i,t.element=window.document.body,t.attachToParentComponent(),t.needsDraw=!0,r&&t.addEventListener("componentLoaded",function(e){t.removeEventListener("componentLoaded",arguments.callee),r(window,e.detail)})})})}).done()}});