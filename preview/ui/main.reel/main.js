/**
 * @module ./main.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    },

    templateDidLoad: {
        value: function() {
            window.addEventListener("hashchange", this, false);
            this.loadFiddle();
        }
    },

    loadFiddle: {
        value: function() {
            var fiddleId = location.hash.slice(3);

            if (fiddleId) {
                this.templateObjects.preview.id = fiddleId;
            }
        }
    },

    handleHashchange: {
        value: function() {
            this.loadFiddle();
        }
    }
});
