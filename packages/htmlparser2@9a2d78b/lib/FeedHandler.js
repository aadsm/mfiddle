function FeedHandler(t){this.init(t,{ignoreWhitespace:!0})}function getElements(t,e){return DomUtils.getElementsByTagName(t,e,!0)}function getOneElement(t,e){return DomUtils.getElementsByTagName(t,e,!0,1)[0]}function fetch(t,e,n){return DomUtils.getText(DomUtils.getElementsByTagName(t,e,n,1))}var index=require("./index.js"),DomHandler=index.DomHandler,DomUtils=index.DomUtils;require("util").inherits(FeedHandler,DomHandler),FeedHandler.prototype.init=DomHandler;var isValidFeed=function(t){return"rss"===t||"feed"===t||"rdf:RDF"===t};FeedHandler.prototype.onend=function(){var t,e,n={},i=getOneElement(isValidFeed,this.dom);i&&("feed"===i.name?(e=i.children,n.type="atom",(t=fetch("id",e))&&(n.id=t),(t=fetch("title",e))&&(n.title=t),(t=getOneElement("link",e))&&(t=t.attribs)&&(t=t.href)&&(n.link=t),(t=fetch("subtitle",e))&&(n.description=t),(t=fetch("updated",e))&&(n.updated=new Date(t)),(t=fetch("email",e,!0))&&(n.author=t),n.items=getElements("entry",e).map(function(t){var e,n={};return t=t.children,(e=fetch("id",t))&&(n.id=e),(e=fetch("title",t))&&(n.title=e),(e=getOneElement("link",t))&&(e=e.attribs)&&(e=e.href)&&(n.link=e),(e=fetch("summary",t))&&(n.description=e),(e=fetch("updated",t))&&(n.pubDate=new Date(e)),n})):(e=getOneElement("channel",i.children).children,n.type=i.name.substr(0,3),n.id="",(t=fetch("title",e))&&(n.title=t),(t=fetch("link",e))&&(n.link=t),(t=fetch("description",e))&&(n.description=t),(t=fetch("lastBuildDate",e))&&(n.updated=new Date(t)),(t=fetch("managingEditor",e))&&(n.author=t),n.items=getElements("item",i.children).map(function(t){var e,n={};return t=t.children,(e=fetch("guid",t))&&(n.id=e),(e=fetch("title",t))&&(n.title=e),(e=fetch("link",t))&&(n.link=e),(e=fetch("description",t))&&(n.description=e),(e=fetch("pubDate",t))&&(n.pubDate=new Date(e)),n}))),this.dom=n,DomHandler.prototype._handleCallback.call(this,i?null:Error("couldn't find root of feed"))},module.exports=FeedHandler;