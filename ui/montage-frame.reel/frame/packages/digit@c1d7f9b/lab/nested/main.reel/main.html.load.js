montageDefine("c1d7f9b","lab/nested/main.reel/main.html",{text:'<!doctype html>\n<html>\n<head>\n    <meta charset=utf-8>\n    <link href="../../../overview/ui/main.reel/main.css" rel=stylesheet>    \n    <style>section{padding:20px}.digit-Toggle{margin:10px}[data-montage-skin="light"]{background:hsl(0,0%,96%)}[data-montage-skin="dark"]{background:hsl(0,0%,24%)}</style>   \n    <script type="text/montage-serialization">{"owner":{"properties":{"element":{"#":"main"}}},"toggleL":{"prototype":"ui/toggle.reel","properties":{"element":{"#":"toggleL"}}},"toggleD":{"prototype":"ui/toggle.reel","properties":{"element":{"#":"toggleD"}}},"toggleLD":{"prototype":"ui/toggle.reel","properties":{"element":{"#":"toggleLD"}}},"toggleDL":{"prototype":"ui/toggle.reel","properties":{"element":{"#":"toggleDL"}}},"toggleLDL":{"prototype":"ui/toggle.reel","properties":{"element":{"#":"toggleLDL"}}},"toggleDLD":{"prototype":"ui/toggle.reel","properties":{"element":{"#":"toggleDLD"}}}}</script>    \n</head>\n<body>\n    <div data-montage-id=main>\n\n        <h1><span class=logo></span> <span>Digit</span></h1>\n        <h2>Skin Nesting test</h2>\n        \n        <table>\n            <thead>\n                <tr>\n                    <th>Light</th>\n                    <th>Dark</th>\n                </tr>\n            </thead>\n            <tbody>\n                \n                <tr>\n                    <td>\n                        <section data-montage-skin=light>\n                            <div data-montage-id=toggleL></div>\n                            <section data-montage-skin=dark>\n                                <div data-montage-id=toggleLD></div>\n                                <section data-montage-skin=light>\n                                    <div data-montage-id=toggleLDL></div>\n                                </section>\n                            </section>\n                        </section>\n                    </td>\n                    <td>\n                        <section data-montage-skin=dark>\n                            <div data-montage-id=toggleD></div>\n                            <section data-montage-skin=light>\n                                <div data-montage-id=toggleDL></div>\n                                <section data-montage-skin=dark>\n                                    <div data-montage-id=toggleDLD></div>\n                                </section>\n                            </section>\n                        </section>\n                    </td>\n                </tr>\n                            \n            </tbody>\n        </table>\n        \n    </div>\n</body>\n</html>'});