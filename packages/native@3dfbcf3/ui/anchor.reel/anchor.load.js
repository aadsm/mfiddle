montageDefine("3dfbcf3","ui/anchor.reel/anchor",{dependencies:["ui/native-control"],factory:function(t,e){var n=t("ui/native-control").NativeControl,i=e.Anchor=n.specialize({blur:{value:function(){this._element.blur()}},focus:{value:function(){this._element.focus()}}});i.addAttributes({textContent:null,href:null,hreflang:null,media:null,rel:null,target:null,type:null})}});