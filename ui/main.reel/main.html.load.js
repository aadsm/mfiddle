montageDefine("37b4b7f","ui/main.reel/main.html",{text:'<!doctype html>\n\n<html>\n<head>\n    <meta http-equiv=Content-Type content="text/html;charset=utf-8">\n    <title>MFiddle</title>\n    <link rel=stylesheet href=main.css>\n    <script type="text/montage-serialization">{"owner":{"properties":{"element":{"#":"main"}}},"cssView":{"prototype":"ui/content-view.reel","properties":{"element":{"#":"css"},"title":"CSS"}},"serializationView":{"prototype":"ui/content-view.reel","properties":{"element":{"#":"serialization"},"title":"Serialization"}},"htmlView":{"prototype":"ui/content-view.reel","properties":{"element":{"#":"html"},"title":"HTML"}},"javascriptView":{"prototype":"ui/content-view.reel","properties":{"element":{"#":"javascript"},"title":"JavaScript"}},"previewView":{"prototype":"ui/content-view.reel","properties":{"element":{"#":"preview"},"title":"Preview"}},"cssCodeMirror":{"prototype":"ui/code-mirror.reel","properties":{"element":{"#":"cssCodeMirror"},"mode":"css","matchBrackets":true,"lineNumbers":true}},"serializationCodeMirror":{"prototype":"ui/code-mirror.reel","properties":{"element":{"#":"serializationCodeMirror"},"mode":"json","matchBrackets":true,"lineNumbers":true}},"htmlCodeMirror":{"prototype":"ui/code-mirror.reel","properties":{"element":{"#":"htmlCodeMirror"},"mode":"htmlmixed","lineNumbers":true}},"javascriptCodeMirror":{"prototype":"ui/code-mirror.reel","properties":{"element":{"#":"javascriptCodeMirror"},"mode":"javascript","lineNumbers":true}},"components":{"prototype":"montage/ui/repetition.reel","properties":{"element":{"#":"components"}},"bindings":{"content":{"<-":"@owner.components"}}},"componentButton":{"prototype":"ui/component-button.reel","properties":{"element":{"#":"componentButton"}},"bindings":{"component":{"<-":"@components.objectAtCurrentIteration"}}},"gistLinkCondition":{"prototype":"montage/ui/condition.reel","properties":{"element":{"#":"gistLinkCondition"},"condition":false}},"gistLink":{"prototype":"matte/ui/anchor.reel","properties":{"element":{"#":"gist"}}},"save":{"prototype":"matte/ui/button.reel","properties":{"element":{"#":"save"}}},"new":{"prototype":"matte/ui/button.reel","properties":{"element":{"#":"new"}}},"run":{"prototype":"matte/ui/button.reel","properties":{"element":{"#":"run"}}},"examples":{"prototype":"montage/ui/repetition.reel","properties":{"element":{"#":"examples"}},"bindings":{"content":{"<-":"@owner.examples"}}},"exampleButton":{"prototype":"ui/example-button.reel","properties":{"element":{"#":"exampleButton"}},"bindings":{"example":{"<-":"@examples.objectAtCurrentIteration"}}},"montageFrame":{"prototype":"ui/montage-frame.reel","properties":{"element":{"#":"montageFrame"}}},"logger":{"prototype":"ui/logger.reel","properties":{"element":{"#":"logger"}},"bindings":{"input":{"<-":"@montageFrame.logMessages"}}}}</script>\n</head>\n<body>\n<div data-montage-id=main>\n    <div id=header>\n        <h1 id=logo>MFiddle</h1>\n        <ul id=components data-montage-id=components>\n            <li>\n                <div class=component-button-holder><div data-montage-id=componentButton></div></div>\n            </li>\n        </ul>\n        <ul id=links>\n            <li data-montage-id=gistLinkCondition class=montage-invisible><a data-montage-id=gist href="" target=_blank class=link>Gist</a></li>\n        </ul>\n        <ul id=menu>\n            <li><div class=menu-button data-montage-id=save>Save</div></li>\n            <li><div class=menu-button data-montage-id=new>New</div></li>\n            <li><div id=run class=menu-button data-montage-id=run>Run</div></li>\n            <li>\n                <div id=examples>\n                    <h2>Examples</h2>\n                    <ul data-montage-id=examples>\n                        <li><span data-montage-id=exampleButton></span></li>\n                    </ul>\n                </div>\n            </li>\n        </ul>\n    </div>\n    <div id=css data-montage-id=css>\n        <div data-montage-id=cssCodeMirror></div>\n    </div>\n    <div id=serialization data-montage-id=serialization>\n        <div data-montage-id=serializationCodeMirror></div>\n    </div>\n    <div id=html data-montage-id=html>\n        <div data-montage-id=htmlCodeMirror></div>\n    </div>\n    <div id=javascript data-montage-id=javascript>\n        <div data-montage-id=javascriptCodeMirror></div>\n    </div>\n    <div id=preview data-montage-id=preview>\n        <div id=iframe-wrapper>\n            <div data-montage-id=montageFrame></div>\n        </div>\n        <div id=logger data-montage-id=logger></div>\n    </div>\n</div>\n</body>\n</html>'});