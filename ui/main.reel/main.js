/* <copyright>
 Copyright (c) 2012, Motorola Mobility LLC.
 All Rights Reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 * Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 * Redistributions in binary form must reproduce the above copyright notice,
 this list of conditions and the following disclaimer in the documentation
 and/or other materials provided with the distribution.

 * Neither the name of Motorola Mobility LLC nor the names of its
 contributors may be used to endorse or promote products derived from this
 software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 POSSIBILITY OF SUCH DAMAGE.
 </copyright> */
var Montage = require("montage").Montage,
    Component = require("montage/ui/component").Component,
    Fiddle = require("core/fiddle").Fiddle;

exports.Main = Component.specialize({
    templateObjects: {value: {}},
    _componentId: {value: 1},
    _logger: {value: null},

    templateDidLoad: {
        value: function() {
            var example = this.examples[0];

            this._logger = this.templateObjects.logger;

            this.addEventListener("action", this, false);
            window.addEventListener("hashchange", this, false);

            var fiddleId = location.hash.slice(3);
            if (fiddleId) {
                this.loadFiddle(fiddleId);
                this.setupGistLink(fiddleId);
            } else {
                this.loadExample(example);
                this.executeFiddle();
            }
        }
    },

    components: {
        value: require("components").components
    },
    examples: {
        value: require("examples").examples
    },

    fiddle: {
        value: null
    },

    loadFiddle: {
        value: function(id) {
            var self = this;

            Fiddle.fromId(id).then(function(fiddle) {
                self.editFiddle(fiddle);
                self.executeFiddle();
            }).fail(function(reason) {
                if (reason.incompatibleVersion) {
                    self.redirectToVersion(reason.version, id);
                } else {
                    throw new Error("Not able to load fiddle " + id + " because " + reason);
                }
            }).done();
        }
    },

    editFiddle: {
        value: function(fiddle) {
            this.fiddle = fiddle;

            this.templateObjects.cssCodeMirror.value = fiddle.css;
            this.templateObjects.serializationCodeMirror.value = fiddle.serialization;
            this.templateObjects.htmlCodeMirror.value = fiddle.html;
            this.templateObjects.javascriptCodeMirror.value = fiddle.javascript;
        }
    },

    executeFiddle: {
        value: function() {
            var templateObjects = this.templateObjects;

            templateObjects.montageFrame.load(
                templateObjects.cssCodeMirror.value,
                templateObjects.serializationCodeMirror.value,
                templateObjects.htmlCodeMirror.value,
                templateObjects.javascriptCodeMirror.value
            );
        }
    },

    loadExample: {
        value: function(example) {
            location.hash = "";
            this.editFiddle(example.fiddle.clone());
            this.executeFiddle();
        }
    },

    addComponentToFiddle: {
        value: function(component) {
            var id = this._generateComponentId(component.name);

            component.serialization.properties.element = {"#": id};
            this._addSerialization(id, component.serialization);
            this._addHtml(component.html.replace('data-montage-id=""', 'data-montage-id="' + id + '"'));

            this.executeFiddle();
        }
    },

    redirectToVersion: {
        value: function(version, fiddleId) {
            var href;

            href = window.location.href.slice(0, -window.location.hash.length) +
                    "v" + version + "/#!/" + fiddleId;
            window.location.href = href;
        }
    },

    clear: {
        value: function() {
            location.hash = "";
            this.editFiddle(new Fiddle());
            this.executeFiddle();
        }
    },

    _tmpDiv: {value: document.createElement("div")},
    _addHtml: {
        value: function(htmlPiece) {
            var serializationObject = this._getSerializationObject(),
                htmlCodeMirror = this.templateObjects.htmlCodeMirror,
                html = htmlCodeMirror.value,
                ownerMontageId,
                div = this._tmpDiv,
                addHtmlAtTheEnd = true,
                root;

            ownerMontageId = serializationObject &&
                Montage.getPath.call(serializationObject, "owner.properties.element['#']");

            if (ownerMontageId) {
                if (htmlCodeMirror.hasModeErrors()) {
                    this._logger.log("Add component warning: The HTML code seems to be invalid, appending element at the end.");
                } else {
                    div.innerHTML = html;
                    root = div.querySelector("*[data-montage-id='" + ownerMontageId + "']");

                    // this is the basic case, the owner's element is the root
                    // of the body and has no siblings, we only address this case
                    if (root && root.parentNode == div && !root.nextSibling) {
                        // tries to figure out the indentation level of the previous
                        // line to match it
                        var matches = /([\t ]*)[^\n]*\n\s*<\/[^>]+>\s*$/.exec(html);
                        var indentation = RegExp.$1 || "";
                        // insert html before the last closing tag
                        html = html.replace(/<\/[^>]+>\s*$/, indentation + htmlPiece + "\n$&");
                        addHtmlAtTheEnd = false;
                    } else {
                        this._logger.log("Add component warning: The owner's element is not the single root element, appending element at the end.");
                    }
                }
            }

            if (addHtmlAtTheEnd) {
                html += (html ? "\n" : "") + htmlPiece;
            }

            htmlCodeMirror.value = html;
        }
    },

    _addSerialization: {
        value: function(label, serializationPiece) {
            var serialization,
                serializationObject = this._getSerializationObject(),
                currentSerialization = this.templateObjects.serializationCodeMirror.value;

            if (serializationObject) {
                serializationObject[label] = serializationPiece;
                serialization = this._stringifySerialization(serializationObject);
            } else {
                serializationObject = {};
                serializationObject[label] = serializationPiece;
                serialization = this.templateObjects.serializationCodeMirror.value + (currentSerialization ? "\n" : "") + this._stringifySerialization(serializationObject);

                if (currentSerialization) {
                    this._logger.log("Add component warning: The serialization seems to be invalid, appending component at the end.");
                }
            }

            this.templateObjects.serializationCodeMirror.value = serialization;
        }
    },

    // properties used to cache the serialization object
    _serializationObject: {value: null},
    _lastSerialization: {value: null},
    _getSerializationObject: {
        value: function() {
            var serialization = this.templateObjects.serializationCodeMirror.value;

            if (serialization === this._lastSerialization) {
                return this._serializationObject;
            } else {
                this._lastSerialization = serialization;
                try {
                    return this._serializationObject = JSON.parse(serialization);
                } catch(ex) {
                    return this._serializationObject = null;
                }
            }
        }
    },

    _generateComponentId: {
        value: function(name) {
            var serializationObject = this._getSerializationObject(),
                id;

            if (serializationObject) {
                do {
                    id = name + this._componentId++;
                } while (id in serializationObject);
            } else {
                id = name + this._componentId++;
            }

            return id;
        }
    },

    handleComponentButtonAction: {
        value: function(action) {
            this.addComponentToFiddle(action.target.component);
        }
    },

    handleSaveAction: {
        value: function() {
            var fiddle = this.fiddle,
                templateObjects = this.templateObjects;

            // TODO: CodeMirror component doesn't allow bindings to its value
            // yet.
            fiddle.css = templateObjects.cssCodeMirror.value;
            fiddle.serialization = templateObjects.serializationCodeMirror.value;
            fiddle.html = templateObjects.htmlCodeMirror.value;
            fiddle.javascript = templateObjects.javascriptCodeMirror.value;

            fiddle.save().then(function() {
                if (fiddle.rev) {
                    location.hash = "!/" + fiddle.id + "/" + fiddle.rev;
                } else {
                    location.hash = "!/" + fiddle.id;
                }
            }).done();
        }
    },

    handleNewAction: {
        value: function() {
            this.clear();
        }
    },

    handleRunAction: {
        value: function() {
            this.executeFiddle();
        }
    },

    handleExampleButtonAction: {
        value: function(action) {
            this.loadExample(action.target.example);
        }
    },

    handleHashchange: {
        value: function() {
            var fiddleId = location.hash.slice(3);

            if (fiddleId && this.fiddle.id != fiddleId) {
                this.loadFiddle(fiddleId);
            }

            this.setupGistLink(fiddleId);
        }
    },

    setupGistLink: {
        value: function(gistId) {
            var gistLink = this.templateObjects.gistLink,
                gistLinkCondition = this.templateObjects.gistLinkCondition;

            gistLinkCondition.condition = !!gistId;
            gistLink.href = "https://gist.github.com/" + gistId;
        }
    },

    _stringifySerialization: {
        value: function(object) {
            return JSON.stringify(object, null, 4)
                .replace(/\{\s*(\"[#@]\")\s*:\s*(\"[^\"]+\")\s*\}/g, "{$1: $2}")
                .replace(/\{\s*(\"(?:<-|<->)\")\s*:\s*(\"[^\"]+\"\s*(?:,\s*\"converter\"\s*:\s*\{\s*\"@\"\s*:\s*\"[^\"]+\"\s*\}\s*|,\s*\"deferred\"\s*:\s*(true|false)\s*)*)\}/g, function(_, g1, g2) {
                    return "{" + g1 + ": " + g2.replace(/,\s*/, ", ").replace(/\n\s*/, "") + "}";
                });
        }
    }

});