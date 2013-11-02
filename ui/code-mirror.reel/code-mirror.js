/**
    @module "montage/ui/code-mirror.reel"
*/
var Component = require("montage/ui/component").Component,
    CodeMirror = require("./codemirror/codemirror-min").CodeMirror;

/**
    Description TODO
    @class module:"montage/ui/code-mirror.reel".CodeMirror
    @extends module:montage/ui/component.Component
*/
exports.CodeMirror = Component.specialize(/** @lends module:"montage/ui/code-mirror.reel".CodeMirror# */ {
    _codeMirror: {value: null},
    tabSize: {value: 4},
    indentUnit: {value: 4},
    matchBrackets: {value: false},
    lineNumbers: {value: false},
    readOnly: {value: false},
    _newValue: {value: null},

    _mode: {
        value: null
    },

    mode: {
        set: function(value) {
            this._mode = value;
            if (this._codeMirror) {
                if (value == "json") {
                    this._codeMirror.setOption("mode", {
                        name: "javascript",
                        json: true
                    });
                } else {
                    this._codeMirror.setOption("mode", value);
                }
            }
        },
        get: function() {
            return this._mode;
        }
    },

    enterDocument: {
        value: function(firstTime) {
            var codeMirror,
                mode;

            if (firstTime) {
                mode = this.mode === "json" ? {name: "javascript", json: true} : this.mode;
                codeMirror = this._codeMirror = CodeMirror(this._element, {
                    mode: mode,
                    tabSize: this.tabSize,
                    indentUnit: this.indentUnit,
                    matchBrackets: this.matchBracket,
                    lineNumbers: this.lineNumbers,
                    readOnly: this.readOnly,
                    value: this.value
                });
                this._newValue = null;

                // HACK need to wait until the styling affects the element in
                // order to ask codemirror to recalculate its size correctly.
                var element = this.element,
                    parentElement = this.ownerComponent.element.parentElement;

                setTimeout(function styleChecker() {
                    if (getComputedStyle(element).width === getComputedStyle(parentElement).width) {
                        setTimeout(styleChecker, 50);
                    } else {
                        codeMirror.refresh();
                    }
                }, 0);
            }
        }
    },

    draw: {
        value: function() {
            if (this._newValue != null) {
                this._codeMirror.setValue(this._newValue);
                this._newValue = null;
            }
        }
    },

    value: {
        get: function() {
            return this._codeMirror ? (this._newValue != null ? this._newValue : this._codeMirror.getValue()) : this._newValue;
        },
        set: function(value) {
            this._newValue = value;
            this.needsDraw = true;
        }
    },

    hasModeErrors: {
        value: function() {
            return !!this._element.querySelector("*[class~='cm-error']");
        }
    }
});
