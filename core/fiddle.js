var Montage = require("montage").Montage,
    Template = require("montage/core/template").Template,
    Promise = require("montage/core/promise").Promise,
    gist = require("gist").gist;

var Fiddle = exports.Fiddle = Montage.specialize({
    constructor: {
        value: function Fiddle() {
            this.super();
        }
    },

    version: {
        value: null
    },

    id: {
        value: null
    },

    rev: {
        value: null
    },

    css: {
        value: null
    },

    serialization: {
        value: null
    },

    html: {
        value: null
    },

    init: {
        value: function(css, serialization, html, javascript) {
            this.version = Fiddle.VERSION;
            this.css = css || "";
            if (typeof serialization === "object") {
                this.serialization = JSON.stringify(serialization, null, 4);
            } else {
                this.serialization = serialization || "";
            }
            this.html = html || "";
            this.javascript = javascript || "";

            return this;
        }
    },

    initWithFiles: {
        value: function(css, html, javascript, settings) {
            var htmlDocument,
                serialization,
                template;

            if (settings) {
                this.version = settings.version;
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

            this.css = css || "";
            this.serialization = serialization || "";
            this.html = html || "";
            this.javascript = javascript || "";

            return this;
        }
    },

    clone: {
        value: function() {
            var fiddle = new Fiddle();

            fiddle.id = this.id;
            fiddle.rev = this.rev;
            fiddle.version = this.version;
            fiddle.css = this.css;
            fiddle.serialization = this.serialization;
            fiddle.html = this.html;
            fiddle.javascript = this.javascript;

            return this;
        }
    },

    save: {
        value: function() {
            var self = this,
                deferred = Promise.defer();

            gist.save({
                anon: true,
                files: {
                    "component.css": this.css,
                    "component.html": this._generateHtmlPage(),
                    "component.js": this.javascript
                },
                settings: {
                    version: this.version
                },
                callback: function(id, rev) {
                    self.id = id;
                    self.rev = rev;

                    deferred.resolve();
                }
            });

            return deferred.promise;
        }
    },

    /**
     <!DOCTYPE html>
     <html>
     <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>MFiddle</title>
        <script type="text/montage-serialization"><!-- serialization --></script>
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
            var serialization = this.serialization,
                html = this.html;

            serialization = serialization.replace(/\n/gm, "\n    ");
            html = html.replace(/\n/gm, "\n    ");

            return this._htmlPageTemplate
                .replace("<!-- serialization -->", serialization)
                .replace("<!-- html -->", html);
        }
    }
}, {
    VERSION: {
        value: 1
    },

    fromId: {
        value: function(id) {
            var deferred = Promise.defer();

            gist.load(id, null, function(settings, css, html, javascript) {
                var fiddle;

                // The original fiddle didn't store a version number, so we
                // consider it to be version 0.
                if (!settings.version) {
                    settings.version = 0;
                }

                if (settings.version === VERSION) {
                    fiddle = new Fiddle().initWithFiles(css, html, javascript, settings);
                    fiddle.id = id;
                    deferred.resolve(fiddle);
                } else {
                    deferred.reject({
                        incompatibleVersion: true,
                        version: settings.version
                    });
                }
            });

            return deferred.promise;
        }
    }
});