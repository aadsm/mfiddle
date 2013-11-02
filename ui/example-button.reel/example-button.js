/**
    @module "ui/example-button.reel"
*/
var Component = require("montage/ui/component").Component;

/**
    Description TODO
    @class module:"ui/example-button.reel".ExampleButton
    @extends module:montage/ui/component.Component
*/
exports.ExampleButton = Component.specialize(/** @lends module:"ui/example-button.reel".ExampleButton# */ {
    hasTemplate: {
        value: false
    },

    example: {
        value: false
    },

    enterDocument: {
        value: function(firstTime) {
            if (firstTime) {
                var self = this,
                    element = this._element;

                element.classList.add("example-button");
                element.addEventListener("click", function() {
                    self._dispatchActionEvent();
                }, false);
            }
        }
    },

    draw: {
        value: function() {
            this._element.textContent = this.example.label;
        }
    }
});
