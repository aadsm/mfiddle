var Component = require("montage/ui/component").Component;

exports.Logger = Component.specialize({

    constructor: {
        value: function Logger() {
            this.super();
        }
    },

    _scroller: {
        value: null
    },
    _output: {
        value: null
    },

    input: {
        distinct: true,
        value: []
    },

    _isOpen: {
        value: false
    },
    isOpen: {
        get: function() {
            return this._isOpen;
        },
        set: function(value) {
            if (this._isOpen !== value) {
                this._isOpen = value;
                this.needsDraw = true;
            }
        }
    },

    _value: {
        value: ""
    },

    _newMessages: {
        distinct: true,
        value: []
    },

    templateDidLoad: {
        value: function() {
            this.addRangeAtPathChangeListener("input", this, "handleInputChange");
        }
    },

    log: {
        value: function(msg) {
            this._newMessages.push(msg);
            this.needsDraw = true;
        }
    },

    draw: {
        value: function() {
            var newMessages = this._newMessages;

            if (newMessages.length > 0) {
                this._value += newMessages.join("\n") + "\n";
                newMessages.length = 0;
                this._element.classList.add("Logger-hilight");

                this._scroller.scrollY = Number.MAX_VALUE;

                var self = this;
                window.setTimeout(function() {
                    self.needsDraw = true;
                }, 100);
            } else {
              this._element.classList.remove("Logger-hilight");
            }

            if (this.isOpen) {
                this._element.classList.add("open");
                this._scroller.needsDraw = true;
            } else {
                this._element.classList.remove("open");
                this._scroller.scrollY = Number.MAX_VALUE;
            }

            this._output.textContent = this._value;
        }
    },

    handleInputChange: {
        value: function(plus) {
            for (var i = 0, message; (message = plus[i]); i++) {
                this.log(message);
            }
        }
    },

    handleClearAction: {
        value: function(event) {
            this._value = "";
            this.needsDraw = true;
        }
    }
});
