montageDefine("59aee0c","composer/key-composer",{dependencies:["montage","composer/composer"],factory:function(e,t){var n=e("montage").Montage,a=e("composer/composer").Composer,o="keyPress",i="longKeyPress",r="keyRelease",s=t.KeyComposer=a.specialize({_isLoaded:{value:!1},_shouldDispatchEvent:{value:!1},shouldDispatchLongPress:{value:!1},_longPressTimeout:{value:null},_keyRegistered:{value:!1},_keys:{value:null},keys:{get:function(){return this._keys},set:function(e){this._keyRegistered?(l.defaultKeyManager.unregisterKey(this),this._keys=e,l.defaultKeyManager.registerKey(this)):this._keys=e}},_identifier:{value:null},identifier:{get:function(){return this._identifier},set:function(e){this._identifier=e}},load:{value:function(){this._isLoaded=!0,this._shouldDispatchEvent&&!this._keyRegistered&&(l.defaultKeyManager.registerKey(this),this._keyRegistered=!0)}},unload:{value:function(){this._isLoaded=!1,l.defaultKeyManager.unregisterKey(this),this._keyRegistered=!1}},addEventListener:{value:function(e,t,n){var s=this.component;a.addEventListener.call(this,e,t,n),(e==o||e==i||e==r)&&(this._shouldDispatchEvent=!0,e==i&&(this._shouldDispatchLongPress=!0),this._isLoaded?this._keyRegistered||(l.defaultKeyManager.registerKey(this),this._keyRegistered=!0):s&&"function"!=typeof s.addComposer&&(this.element||(this.element=window),this.load()))}},constructor:{value:function(){a.constructor.call(this)}},deserializedFromTemplate:{value:function(){var e=this.component;null===this.identifier&&(this.identifier=n.getInfoForObject(this).label),e&&("function"==typeof e.addComposer?e.addComposer(this):this._isLoaded||(this.element||(this.element=window),this.load()))}}},{createKey:{value:function(e,t,n){var a=this;return this===s&&(a=new s),n||(n=e.identifier?e.identifier+t.toLowerCase().replace(/[ +]/g).toCapitalized():t.toLowerCase().replace(/[ +]/g)),a.keys=t,a.identifier=n,e.addComposer(a),a}},createGlobalKey:{value:function(e,t,n){var a=this;return this===s&&(a=new s),a.keys=t,a.identifier=n,e.addComposerForElement(a,window),a}}}),u=null,l=n.specialize({_defaultKeyManager:{value:null},_loadingDefaultKeyManager:{value:!1},_keysToRegister:{value:[]},constructor:{value:function(){}},registerKey:{value:function(t){var n=this;this._defaultKeyManager?this._defaultKeyManager.registerKey(t):(this._keysToRegister.push(t),this._loadingDefaultKeyManager||(this._loadingDefaultKeyManager=!0,e.async("core/event/key-manager").then(function(e){var t=n._defaultKeyManager=e.defaultKeyManager;n._keysToRegister.forEach(function(e){t.registerKey(e)}),n._keysToRegister.length=0}).done()))}},unregisterKey:{value:function(e){this._defaultKeyManager&&this._defaultKeyManager.unregisterKey(e)}}},{defaultKeyManager:{get:function(){return u||(u=new l),this._defaultKeyManager?this._defaultKeyManager:u}}})}});