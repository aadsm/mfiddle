var Component=require("montage/ui/component").Component;exports.Main=Component.specialize({constructor:{value:function(){this.super()}},templateDidLoad:{value:function(){window.addEventListener("hashchange",this,!1),this.loadGist()}},loadGist:{value:function(){var e=location.hash.slice(3);e&&(this.templateObjects.preview.id=e)}},handleHashchange:{value:function(){this.loadGist()}}});