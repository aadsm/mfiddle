montageDefine("7d4a1f0","tests/DomUtils/05-inner_html",{dependencies:["../.."],factory:function(e,t){var n=e("../..");t.name="Get inner HTML",t.getElements=function(){return" <script>text</script> <!-- comment --> <tag2> text </tag2>"},t.getByFunction=function(e){return n.getInnerHTML(n.getElementById("asdf",e,!0))},t.expected=" <script>text</script> <!-- comment --> <tag2> text </tag2>"}});