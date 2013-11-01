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
    Template = require("montage/core/template").Template,
    gist = require("gist").gist;

var VERSION = 1;

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

            var gistId = location.hash.slice(3);
            if (gistId) {
                this.loadGist(gistId);
                this.setupGistLink(gistId);
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

    loadGist: {
        value: function(id) {
            var self = this;

            gist.load(id, null, function(settings, css, html, javascript) {
                var htmlDocument,
                    serialization,
                    template;

                if (settings.version !== VERSION) {
                    self.redirectToVersion(settings.version, id);
                    return;
                }

                if (html) {
                    template = new Template();
                    // extract body and serialization
                    htmlDocument = template.createHtmlDocumentWithHtml(html);
                    serialization = template.getInlineObjectsString(htmlDocument);
                    html = htmlDocument.body.innerHTML;

                    // clean up a bit
                    serialization = serialization.replace(/\n    /g, "\n");
                    html = html.replace(/\n    /g, "\n").replace(/^\s*\n|\n\s*$/g, "");
                }

                self.loadFiddle(css, serialization, html, javascript);
                self.executeFiddle();
            });
        }
    },

    loadFiddle: {
        value: function(css, serialization, html, javascript) {
            this.templateObjects.cssCodeMirror.value = css || "";
            this.templateObjects.serializationCodeMirror.value = serialization || "";
            this.templateObjects.htmlCodeMirror.value = html || "";
            this.templateObjects.javascriptCodeMirror.value = javascript || "";
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
            this.loadFiddle(example.css, this._stringifySerialization(example.serialization), example.html, example.javascript);
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
        value: function(version, gistId) {
            var href;

            if (!version) {
                version = 0;
            }

            href = window.location.href.slice(0, -window.location.hash.length) +
                    "v" + version + "/#!/" + gistId;
            window.location.href = href;
        }
    },

    clear: {
        value: function() {
            location.hash = "";
            this.loadFiddle("", "", "", "");
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

    /**
    <!DOCTYPE html>
    <html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>MFiddle</title>
        <script type="text/montage-serialization"><!-- serialization -->}</script>
    </head>
    <body>
        <!-- html -->
    </body>
    </html>
    */
    _htmlPageTemplate: {
        value: '<!DOCTYPE html>\n<html>\n<head>\n    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\n    <title>MFiddle</title>\n    <script type="text/montage-serialization"><!-- serialization --></script></head>\n<body>\n    <!-- html -->\n</body>\n</html>'
    },
    _generateHtmlPage: {
        value: function() {
            var templateObjects = this.templateObjects,
                serialization = templateObjects.serializationCodeMirror.value,
                html = templateObjects.htmlCodeMirror.value;

            serialization = serialization.replace(/\n/gm, "\n    ");
            html = html.replace(/\n/gm, "\n    ");

            return this._htmlPageTemplate
                .replace("<!-- serialization -->", serialization)
                .replace("<!-- html -->", html);
        }
    },

    handleComponentButtonAction: {
        value: function(action) {
            this.addComponentToFiddle(action.target.component);
        }
    },

    handleSaveAction: {
        value: function() {
            gist.save({
                anon: true,
                files: {
                    "component.css": this.templateObjects.cssCodeMirror.value,
                    "component.html": this._generateHtmlPage(),
                    "component.js": this.templateObjects.javascriptCodeMirror.value
                },
                settings: {
                    version: 1
                },
                callback: function(id, rev) {
                    if (rev) {
                        location.hash = "!/" + id + "/" + rev;
                    } else {
                        location.hash = "!/" + id;
                    }
                }
            });
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
            var gistId = location.hash.slice(3);

            if (gistId && gist.id != gistId) {
                this.loadGist(gistId);
            }

            this.setupGistLink(gistId);
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