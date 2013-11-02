/**
    @module "montage/ui/montage-frame.reel"
*/
var Component = require("montage/ui/component").Component;

/**
    Description TODO
    @class module:"ui/montage-frame.reel".MontageFrame
    @extends module:ui/component.Component
*/
exports.MontageFrame = Component.specialize(/** @lends module:"montage/ui/montage-frame.reel".MontageFrame# */ {
    _css: {value: null},
    _serialization: {value: null},
    _html: {value: null},
    _javascript: {value: null},
    _iframeReady: {value: false},
    _iframeWindow: {value: null},
    _iframeDocument: {value: null},
    _cssElement: {value: null},
    _serializationElement: {value: null},
    _javascriptElement: {value: null},

    logMessages: {
        distinct: true,
        value: []
    },

    enterDocument: {
        value: function(firstTime) {
            var self = this;

            if (firstTime) {
                window.addEventListener("message", function(event) {
                    if (event._event.source === self._element.contentWindow
                        && event.data === "ready") {
                        self._iframeReady = true;
                        self.needsDraw = true;
                        self._iframeWindow = self._element.contentWindow;
                        self._iframeDocument = self._element.contentDocument;
                        self._cssElement = self._iframeDocument.head.querySelector("style");
                        self._javascriptElement = self._iframeDocument.head.querySelector("script[type='text/montage-javascript']");

                        self._iframeWindow.console.debug = self.debug.bind(self);
                        self._iframeWindow.console.log = self.log.bind(self);
                    }
                }, false);
            }
        }
    },

    debug: {
        value: function(message) {
            if (message.indexOf("Syntax error") == 0) {
                this._iframeDocument.body.innerHTML = "<pre>" + message + "</pre>";
            } else {
                console.debug.apply(console, arguments);
            }
        }
    },

    log: {
        value: function(message) {
            this.logMessages.push(Array.prototype.join.call(arguments, " "));
            console.log.apply(console, arguments);
        }
    },

    load: {
        value: function(css, serialization, html, javascript) {
            this._css = css;
            this._serialization = serialization;
            this._html = html;
            this._javascript = javascript;
            this.needsDraw = true;
        }
    },

    draw: {
        value: function() {
            if (this._iframeReady) {
                var oldSerialization = this._iframeDocument.head.querySelector("script[type='text/montage-serialization']");
                if (oldSerialization) {
                    oldSerialization.parentNode.removeChild(oldSerialization);
                }

                this._serializationElement = this._iframeDocument.createElement("script");
                this._serializationElement.setAttribute("type", "text/montage-serialization");
                this._iframeDocument.head.appendChild(this._serializationElement);

                this._iframeWindow.Frame.reset();
                this._cssElement.textContent = this._css;
                this._serializationElement.textContent = this._serialization || "{}";
                this._javascriptElement.textContent = this._javascript;
                this._iframeDocument.body.innerHTML = this._html;
                this._iframeWindow.Frame.boot();
            }
        }
    }
});
