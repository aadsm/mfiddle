/**
    @module "montage/ui/component-button.reel"
*/
var Component = require("montage/ui/component").Component;

/**
    Description TODO
    @class module:"ui/component-button.reel".ComponentButton
    @extends module:ui/component.Component
*/
exports.ComponentButton = Component.specialize(/** @lends module:"ui/component-button.reel".ComponentButton# */ {
    component: {value: null},
    _iconStyle: {value: null},

    enterDocument: {
        value: function(firstTime) {
            if (firstTime) {
                var self = this,
                    element = this._element;

                this._iconStyle = this.templateObjects.icon.style;
                element.addEventListener("click", function() {
                    self._dispatchActionEvent();
                }, false);
            }
        }
    },

    draw: {
        value: function() {
            var element = this._element,
                component = this.component;

            element.setAttribute("title", "Add " + component.label);
            this._iconStyle.backgroundPosition = component.x + "px " + component.y +"px";
            this._iconStyle.width = component.width + "px";
            this._iconStyle.left = component.left + "px";
        }
    }
});
