montageDefine("cf9cb2f","package.json",{exports:{name:"htmlparser2",description:"Fast & forgiving HTML/XML/RSS parser",version:"3.0.5",author:{name:"Felix Boehm",email:"me@feedic.com"},keywords:["html","parser","streams","xml","dom","rss","feed","atom"],contributors:[{name:"Chris Winberry",email:"chris@winberry.net"}],repository:{type:"git",url:"git://github.com/fb55/htmlparser2.git"},bugs:{url:"http://github.com/fb55/htmlparser2/issues"},directories:{lib:"lib/"},main:"lib/index.js",scripts:{test:"node tests/00-runtests.js"},dependencies:{domhandler:"2.0",domutils:"1.1",domelementtype:"1","readable-stream":"1.0"},licenses:[{type:"MIT",url:"http://github.com/fb55/htmlparser2/raw/master/LICENSE"}],readme:'#htmlparser2 [![Build Status](https://secure.travis-ci.org/fb55/htmlparser2.png)](http://travis-ci.org/fb55/htmlparser2)\n\nA forgiving HTML/XML/RSS parser written in JS for NodeJS. The parser can handle streams (chunked data) and supports custom handlers for writing custom DOMs/output.\n\n##Installing\n	npm install htmlparser2\n\n##Usage\n\n```javascript\nvar htmlparser = require("htmlparser2");\nvar parser = new htmlparser.Parser({\n	onopentag: function(name, attribs){\n		if(name === "script" && attribs.type === "text/javascript"){\n			console.log("JS! Hooray!");\n		}\n	},\n	ontext: function(text){\n		console.log("-->", text);\n	},\n	onclosetag: function(tagname){\n		if(tagname === "script"){\n			console.log("That\'s it?!");\n		}\n	}\n});\nparser.write("Xyz <script type=\'text/javascript\'>var foo = \'<<bar>>\';< /  script>");\nparser.end();\n```\n\nOutput (simplified):\n\n```javascript\n--> Xyz \nJS! Hooray!\n--> var foo = \'<<bar>>\';\nThat\'s it?!\n```\n\nRead more about the parser in the [wiki](https://github.com/fb55/htmlparser2/wiki/Parser-options).\n\n##Get a DOM\nThe `DomHandler` (known as `DefaultHandler` in the original `htmlparser` module) produces a DOM (document object model) that can be manipulated using the [`DomUtils`](https://github.com/fb55/DomUtils) helper.\n\nThe `DomHandler`, while still bundled with this module, was moved to it\'s [own module](https://github.com/fb55/domhandler). Have a look at it for further information.\n\n##Parsing RSS/RDF/Atom Feeds\n\n```javascript\nnew htmlparser.FeedHandler(function(<error> error, <object> feed){\n    ...\n});\n```\n\n##Performance\nUsing a modified version of [node-expat](https://github.com/astro/node-expat)\'s `bench.js`, I received the following results (on OSX):\n\n```\nnode-xml:     28.03 ms/el\nlibxmljs:     11.11 ms/el\nsax:          26.92 ms/el\nnode-expat:   07.32 ms/el\nhtmlparser:   16.40 ms/el\nhtmlparser2:  06.32 ms/el\n\nWinner: htmlparser2\n```\n\nThe test can be found in [`tests/bench.js`](tests/bench.js).\n\n##How is this different from [node-htmlparser](https://github.com/tautologistics/node-htmlparser)?\nThis is a fork of the `htmlparser` module. The main difference is that this is intended to be used only with node (it runs on other platforms using [browserify](https://github.com/substack/node-browserify)). `htmlparser2` was rewritten multiple times and, while it maintains an API that\'s compatible with `htmlparser` in most cases, the projects don\'t share any code anymore.\n\nThe parser now provides a callback interface close to [sax.js](https://github.com/isaacs/sax-js) (originally targeted at [readabilitySAX](https://github.com/fb55/readabilitysax)). As a result, old handlers won\'t work anymore.\n\nThe `DefaultHandler` and the `RssHandler` were renamed to clarify their purpose (to `DomHandler` and `FeedHandler`). The old names are still available when requiring `htmlparser2`, so your code should work as expected.\n',readmeFilename:"README.md",_id:"htmlparser2@3.0.5",_from:"htmlparser2@~3.0.5",hash:"cf9cb2f",mappings:{domhandler:{name:"domhandler",hash:"00d7a78",location:"../domhandler@00d7a78/"},domutils:{name:"domutils",hash:"7d4a1f0",location:"../domutils@7d4a1f0/"},domelementtype:{name:"domelementtype",hash:"28368f3",location:"../domelementtype@28368f3/"},"readable-stream":{name:"readable-stream",hash:"c081c7d",location:"../readable-stream@c081c7d/"}},production:!0,useScriptInjection:!0}});