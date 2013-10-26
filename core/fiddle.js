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

    settings: {
        value: null
    },

    init: {
        value: function(settings, css, html, javascript) {
            var htmlDocument,
                serialization,
                template;

            if (!settings) {
                settings = {
                    version: 1
                };
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

            this.settings = settings;
            this.css = css;
            this.serialization = serialization;
            this.html = html;
            this.javascript = javascript;

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
                settings: this.settings,
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
    fromId: {
        value: function(id) {
            var deferred = Promise.defer();

            gist.load(id, null, function(settings, css, html, javascript) {
                var fiddle;

                fiddle = new Fiddle().init(settings, css, html, javascript);
                fiddle.id = id;
                deferred.resolve(fiddle);
            });

            return deferred.promise;
        }
    }
});