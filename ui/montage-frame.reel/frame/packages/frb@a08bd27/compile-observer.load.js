montageDefine("a08bd27","compile-observer",{dependencies:["./observers","./operators"],factory:function(e,t,n){function i(e){return s.compile(e)}var r=e("./observers"),a=e("./operators");n.exports=i;var s=i.semantics={compilers:{property:r.makePropertyObserver,get:r.makeGetObserver,path:r.makePathObserver,"with":r.makeWithObserver,"if":r.makeConditionalObserver,parent:r.makeParentObserver,not:r.makeNotObserver,and:r.makeAndObserver,or:r.makeOrObserver,"default":r.makeDefaultObserver,defined:r.makeDefinedObserver,rangeContent:Function.identity,mapContent:Function.identity,keys:r.makeKeysObserver,values:r.makeValuesObserver,items:r.makeEntriesObserver,entries:r.makeEntriesObserver,toMap:r.makeToMapObserver,mapBlock:r.makeMapBlockObserver,filterBlock:r.makeFilterBlockObserver,everyBlock:r.makeEveryBlockObserver,someBlock:r.makeSomeBlockObserver,sortedBlock:r.makeSortedBlockObserver,sortedSetBlock:r.makeSortedSetBlockObserver,groupBlock:r.makeGroupBlockObserver,groupMapBlock:r.makeGroupMapBlockObserver,minBlock:r.makeMinBlockObserver,maxBlock:r.makeMaxBlockObserver,min:r.makeMinObserver,max:r.makeMaxObserver,enumerate:r.makeEnumerationObserver,reversed:r.makeReversedObserver,flatten:r.makeFlattenObserver,concat:r.makeConcatObserver,view:r.makeViewObserver,sum:r.makeSumObserver,average:r.makeAverageObserver,last:r.makeLastObserver,only:r.makeOnlyObserver,one:r.makeOneObserver,has:r.makeHasObserver,tuple:r.makeArrayObserver,range:r.makeRangeObserver,startsWith:r.makeStartsWithObserver,endsWith:r.makeEndsWithObserver,contains:r.makeContainsObserver,join:r.makeJoinObserver,toArray:r.makeToArrayObserver,asArray:r.makeToArrayObserver},compile:function(e){var t=this.compilers;if("literal"===e.type)return r.makeLiteralObserver(e.value);if("value"===e.type)return r.observeValue;if("parameters"===e.type)return r.observeParameters;if("element"===e.type)return r.makeElementObserver(e.id);if("component"===e.type)return r.makeComponentObserver(e.label,e);if("record"===e.type){var n={},i=e.args;for(var a in i)n[a]=this.compile(i[a]);return r.makeObjectObserver(n)}t.hasOwnProperty(e.type)||(t[e.type]=r.makeMethodObserverMaker(e.type));var s=e.args.map(this.compile,this);return t[e.type].apply(null,s)}},o=s.compilers;Object.keys(a).forEach(function(e){o[e]||(o[e]=r.makeOperatorObserverMaker(a[e]))}),o.toString=r.makeOperatorObserverMaker(a.toString)}});