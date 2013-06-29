function makeLiteralObserver(t){return function(e){return e(t)||Function.noop}}function observeValue(t,e){return t(e.value)||Function.noop}function observeParameters(t,e){return t(e.parameters)||Function.noop}function makeElementObserver(t){return function(e,n){return e(n.document.getElementById(t))||Function.noop}}function makeComponentObserver(t,e){return function(n,i){var a=i.components,r=a.getObjectByLabel||a.getComponentByLabel,s=r.call(a,t);return e.component=s,n(s)||Function.noop}}function observeProperty(t,e,n,i){function a(t,e,i){r(),r=n(t,e,i)||Function.noop}if(null==t)return n();var r=Function.noop;return PropertyChanges.addOwnPropertyChangeListener(t,e,a,i.beforeChange),a(t[e],e,t),once(function(){r(),PropertyChanges.removeOwnPropertyChangeListener(t,e,a,i.beforeChange)})}function makePropertyObserver(t,e){return function(n,i){return e(autoCancelPrevious(function(e){return null==e?n():t(autoCancelPrevious(function(t){return null==t?n():t.observeProperty?t.observeProperty(e,n,i):_observeProperty(t,e,n,i)}),i)}),i)}}function observeGet(t,e,n,i){function a(t,i,a){s(e,i)&&(r(),r=n(t,e,a)||Function.noop)}var r=Function.noop,s=t.contentEquals||Object.equals;return a(t.get(e),e,t),t.addMapChangeListener(a,i.beforeChange),once(function(){r(),t.removeMapChangeListener(a)})}function makeGetObserver(t,e){return function(n,i){return t(autoCancelPrevious(function(t){return t?e(autoCancelPrevious(function(e){return null==e?n():t.observeGet?t.observeGet(e,n,i):_observeGet(t,e,n,i)}),i):n()}),i)}}function makeHasObserver(t,e){return function(n,i){return n=makeUniq(n),e(autoCancelPrevious(function(e){return t(autoCancelPrevious(function(t){return t?observeRangeChange(t,function(){return n((t.has||t.contains).call(t,e))},i):n()}),i)}),i)}}function makeObserversObserver(t){return function(e,n){for(var i=Array(t.length),a=0;t.length>a;a++)i[a]=void 0;var r=t.map(function(t,e){return t(function(t){i.set(e,t)},n)}),s=e(i)||Function.noop;return once(function(){s(),cancelEach(r)})}}function makeObjectObserver(t){return function(e,n){var i={},a={};for(var r in t)(function(t,e){i[t]=e(function(e){a[t]=e},n)})(r,t[r]);var s=e(a)||Function.noop;return function(){s();for(var t in i)i[t]()}}}function makeArrayObserver(){return makeObserversObserver(Array.prototype.slice.call(arguments))}function makeOperatorObserverMaker(t){return function(){var e=makeObserversObserver(Array.prototype.slice.call(arguments)),n=makeRangeContentObserver(e);return function(e,i){return n(autoCancelPrevious(function(n){return n.every(Operators.defined)?e(t.apply(void 0,n)):e()}),i)}}}function makeMethodObserverMaker(t){var e=t.slice(0,1).toUpperCase()+t.slice(1),n="make"+e+"Observer",i="observe"+e;return function(){var e=arguments[0],a=Array.prototype.slice.call(arguments,1),r=a.map(function(t){return function(e,n){return t(autoCancelPrevious(e),n)}}),s=makeObserversObserver(a),o=makeRangeContentObserver(s);return function(a,s){return e(autoCancelPrevious(function(e){return e?e[n]?e[n].apply(e,r)(a,s):e[i]?e[i](a,s):o(autoCancelPrevious(function(n){if(!n.every(Operators.defined))return a();if(e[t])return a(e[t].apply(e,n));throw Error("Object has no method "+JSON.stringify(t)+": "+e)}),s):a()}),s)}}}function makeNotObserver(t){return function(e,n){return t(autoCancelPrevious(function(t){return e(!t)}),n)}}function makeAndObserver(t,e){return function(n,i){return t(autoCancelPrevious(function(t){return t?e(n,i):n(t)}),i)}}function makeOrObserver(t,e){return function(n,i){return t(autoCancelPrevious(function(t){return t?n(t):e(n,i)}),i)}}function makeConditionalObserver(t,e,n){return function(i,a){return t(autoCancelPrevious(function(t){return null==t?i():t?e(i,a):n(i,a)}),a)}}function makeDefinedObserver(t){return function(e,n){return t(autoCancelPrevious(function(t){return e(null!=t)}),n)}}function makeDefaultObserver(t,e){return function(n,i){return t(autoCancelPrevious(function(t){return null==t?e(n,i):n(t)}),i)}}function makeReplacingMapBlockObserver(t,e){return function(n,i){return t(autoCancelPrevious(function(t){function a(e){for(;t.length>e;e++)o[e].index=e}function r(t,n,r){o.swap(r,n.length,t.map(function(t,e){return{index:r+e}})),a(r+t.length);var c,u=[];cancelEach(l.swap(r,n.length,t.map(function(t,n){var a=o[r+n];return e(autoCancelPrevious(function(t){c?s.set(a.index,t):u[n]=t}),Scope.nest(i,t))}))),c=!0,s.swap(r,n.length,u)}if(!t)return n();var s=[],o=[],l=[],c=observeRangeChange(t,r,i),u=n(s,t)||Function.noop;return once(function(){u(),cancelEach(l),c()})}),i)}}function makeReplacingFilterBlockObserver(t,e){var n=makeReplacingMapBlockObserver(t,e);return function(t,e){return n(autoCancelPrevious(function(n,i){function a(t){for(;n.length>t;t++)l[t+1]=l[t]+n[t]}function r(t,e,n){var r=i.slice(n,n+t.length),o=e.map(Boolean).sum(),c=r.filter(function(e,n){return t[n]}),u=l[n],h=s.slice(u,u+o);(h.length!==c.length||h.every(function(t,e){return t!==c[e]}))&&s.swap(u,o,c),a(u)}if(!i)return t();var s=[],o=[],l=[0],c=observeRangeChange(n,r,e),u=t(s)||Function.noop;return once(function(){u(),cancelEach(o),c()})}),e)}}function makeSortedBlockObserver(t,e){var n=makeRelationItemObserver(e),i=makeReplacingMapBlockObserver(t,n),a=function(t,e){return i(autoCancelPrevious(function(n){function i(t,e){r.addEach(t),r.deleteEach(e)}if(!n)return t();var a=[],r=SortedArray(a,function(t,e){return Object.equals(t[1],e[1])},function(t,e){return Object.compare(t[1],e[1])}),s=observeRangeChange(n,i,e),o=t(a)||Function.noop;return function(){o(),s()}}),e)};return makeMapBlockObserver(a,observeItemKey)}function makeRelationItemObserver(t){return function(e,n){return t(autoCancelPrevious(function(t){return e([n.value,t])||Function.noop}),n)}}function makeReplacingReversedObserver(t){return function(e,n){return t(autoCancelPrevious(function(t){function i(t,e,n){var i=a.length-n-e.length;a.swap(i,e.length,t.reversed())}if(!t)return e();var a=[],r=observeRangeChange(t,i,n),s=e(a);return once(function(){s(),r()})}),n)}}function makeReplacingFlattenObserver(t){return function(e,n){return t(autoCancelPrevious(function(t){function i(e){for(var n=e;t.length>n;n++)l[n].index=n,o[n+1]=t[n]?o[n]+t[n].length:o[n]}function a(t,e,a){var c=o[a],u=o[a+e.length],h=u-c;r.swap(c,h,[]),l.swap(a,e.length,t.map(function(){return{index:null}})),i(a),cancelEach(s.swap(a,e.length,t.map(function(t,e){function s(t,e,n){i(c.index);var a=o[c.index]+n,s=o[c.index]+n+e.length,l=s-a;r.swap(a,l,t)}var c=l[a+e];return observeRangeChange(t,s,n)})))}if(!t)return e();var r=[],s=[],o=[0],l=[],c=observeRangeChange(t,a,n),u=e(r)||Function.noop;return once(function(){u(),cancelEach(s),c()})}),n)}}function makeConcatObserver(){return makeFlattenObserver(makeObserversObserver(Array.prototype.slice.call(arguments)))}function makeSomeBlockObserver(t,e){var n=makeFilterBlockObserver(t,e),i=makePropertyObserver(n,observeLengthLiteral);return makeConverterObserver(i,Boolean)}function makeEveryBlockObserver(t,e){var n=makeConverterObserver(e,Operators.not),i=makeFilterBlockObserver(t,n),a=makePropertyObserver(i,observeLengthLiteral);return makeConverterObserver(a,Operators.not)}function makeGroupBlockObserver(t,e){var n=makeGroupMapBlockObserver(t,e);return makeItemsObserver(n)}function makeGroupMapBlockObserver(t,e){var n=makeRelationItemObserver(e),i=makeReplacingMapBlockObserver(t,n);return function(t,e){return i(autoCancelPrevious(function(n,i){function a(t,e){var n=Set();e.forEach(function(t){var e=r.get(t[1]);e["delete"](t[0]),n.add(t[1])}),t.forEach(function(t){r.has(t[1])||r.set(t[1],i.constructClone());var e=r.get(t[1]);e.add(t[0])}),n.forEach(function(t){var e=r.get(t);0===e.length&&r["delete"](t)})}if(!n)return t();var r=Map(),s=observeRangeChange(n,a,e),o=t(r)||Function.noop;return function(){s(),o()}}),e)}}function makeHeapBlockObserver(t,e,n){function i(t,e){return Object.compare(t[1],e[1])*n}function a(t,e){return Object.equals(t[1],e[1])}var r=makeRelationItemObserver(e),s=makeReplacingMapBlockObserver(t,r);return function(t,e){return s(autoCancelPrevious(function(n){function r(t,e){o.addEach(t),o.deleteEach(e)}function s(e,n){return 0===n?e?t(e[0]):t():void 0}if(!n)return t();var o=new Heap(null,a,i),l=observeRangeChange(n,r,e),c=observeMapChange(o,s,e);return function(){l(),c()}}),e)}}function makeMaxBlockObserver(t,e){return makeHeapBlockObserver(t,e,1)}function makeMinBlockObserver(t,e){return makeHeapBlockObserver(t,e,-1)}function makeCollectionObserverMaker(t){return function(e){return function(n,i){return n=makeUniq(n),e(autoCancelPrevious(function(e){if(!e)return n();var a=t(e,n);return observeRangeChange(e,function(t,e,i){return n(a(t,e,i))},i)}),i)}}}function makeReplacingViewObserver(t,e,n){return function(i,a){return t(autoCancelPrevious(function(t){return t?n(autoCancelPrevious(function(n){return null==n?i():e(autoCancelPrevious(function(e){function r(i,a,r){var o=i.length-a.length;e>r&&0>o&&n>o?(s.swap(s.length,0,t.slice(e+n+o,e+n)),s.splice(0,-o)):e>r&&o>0&&n>o?(s.swap(0,0,t.slice(e,e+o)),s.splice(s.length-o,o)):r>=e&&0>o&&e+n>r?(s.swap(s.length,0,t.slice(e+n+o,e+n)),s.splice(r-e,-o)):r>=e&&o>0&&e+n>r?(s.swap(r-e,0,t.slice(r,r+o)),s.splice(s.length-o,o)):e+n>r&&s.swap(0,s.length,t.slice(e,e+n))}if(null==e)return i();var s=[],o=observeRangeChange(t,r,a),l=i(s)||Function.noop;return once(function(){l(),o()})}),a)}),a):i()}),a)}}function makeReplacingEnumerateObserver(t){return function(e,n){return t(autoCancelPrevious(function(t){function i(t){for(;r.length>t;t++)r[t].set(0,t)}function a(t,e,n){r.swap(n,e.length,t.map(function(t,e){return[n+e,t]})),i(n+t.length)}if(!t)return e();var r=[],s=observeRangeChange(t,a,n),o=e(r)||Function.noop;return function(){o(),s()}}),n)}}function makeRangeObserver(t){return function(e,n){var i=[],a=e(i)||Function.noop,r=t(function(t){if(t>>>=0,null==t)i.clear();else if(t>i.length){for(var e=[],n=i.length;t>n;n++)e.push(n);i.swap(i.length,0,e)}else i.length>t&&i.splice(t,i.length)},n);return function(){a(),r()}}}function makeStartsWithObserver(t,e){return function(n,i){return e(function(e){var a=RegExp("^"+RegExp.escape(e));return t(function(t){return n(a.test(t))||Function.noop},i)},i)}}function makeEndsWithObserver(t,e){return function(n,i){return e(function(e){var a=RegExp(RegExp.escape(e)+"$");return t(function(t){return n(a.test(t))||Function.noop},i)},i)}}function makeContainsObserver(t,e){return function(n,i){return e(function(e){var a=RegExp(RegExp.escape(e));return t(function(t){return n(a.test(t))||Function.noop},i)},i)}}function observeRangeChange(t,e,n){function i(t,n,i){a(),a=e(t,n,i)||Function.noop}if(t){var a=Function.noop;if(!t.toArray)throw Error("Can't observe range changes on "+t+" because it has no toArray method");if(!t.addRangeChangeListener)throw Error("Can't observe range changes on "+t);i(t.toArray(),[],0);var r=t.addRangeChangeListener(i,n.beforeChange);return once(function(){a(),r()})}}function makeRangeContentObserver(t){return function(e,n){return t(autoCancelPrevious(function(t){return t&&t.addRangeChangeListener?observeRangeChange(t,function(){return e(t)},n):e(t)}),n)}}function makeMapContentObserver(t){return function(e,n){return t(autoCancelPrevious(function(t){return t&&t.addMapChangeListener?observeMapChange(t,function(){return e(t)},n):e(t)}),n)}}function observeMapChange(t,e,n){function i(t,n,i){var r=a.get(n)||Function.noop;r(),r=e(t,n,i)||Function.noop,a.set(n,r)}var a=Map();t.forEach(i);var r=t.addMapChangeListener(i,n.beforeChange);return once(function(){a.forEach(function(t){t()}),r()})}function makeReplacingItemsObserver(t){return function(e,n){return t(autoCancelPrevious(function(t){return t?observeItems(t,e,n):e()}),n)}}function observeItems(t,e,n){function i(t,e){var n,i;r.has(e)?null==t?(n=r.get(e),r["delete"](e),i=a.indexOf(n),a.splice(i,1)):(n=r.get(e),n.set(1,t)):(n=[e,t],r.set(e,n),a.push(n))}var a=[],r=Map(),s=e(a)||Function.noop,o=observeMapChange(t,i,n);return once(function(){s(),o()})}function makeKeysObserver(t){var e=makeItemsObserver(t);return makeMapBlockObserver(e,observeItemKey)}function observeItemKey(t,e){return e.value?t(e.value[0])||Function.noop:t()}function makeValuesObserver(t){var e=makeItemsObserver(t);return makeMapBlockObserver(e,observeItemValue)}function observeItemValue(t,e){return e.value?t(e.value[1])||Function.noop:t()}function makeToMapObserver(t){return function(e,n){var i=Map(),a=e(i)||Function.noop,r=t(autoCancelPrevious(function(t){if(i.clear(),t&&!t.addRangeChangeListener){var e=Object.keys(t).map(function(e){return _observeProperty(t,e,autoCancelPrevious(function(t){i.set(e,t)}),n)});return function(){cancelEach(e)}}}),n);return function(){a(),r()}}}function makeParentObserver(t){return function(e,n){return t(e,n.parent||new Scope)}}function makeConverterObserver(t,e,n){return function(i,a){return i=makeUniq(i),t(autoCancelPrevious(function(t){return i(e.call(n,t))}),a)}}function makeComputerObserver(t,e,n){return function(i,a){return i=makeUniq(i),t(autoCancelPrevious(function(t){return t&&t.every(Operators.defined)?i(e.apply(n,t)):void 0}),a)}}function makeExpressionObserver(t,e){var n=require("./parse"),i=require("./compile-observer");return function(a,r){return a=makeUniq(a),e(autoCancelPrevious(function(e){if(null==e)return a();var s,o;try{s=n(e),o=i(s)}catch(l){return a()}return t(autoCancelPrevious(function(t){return o(a,Scope.nest(r,t))}),r)}),r)}}function makeWithObserver(t,e){return function(n,i){return t(autoCancelPrevious(function(t){return e(autoCancelPrevious(function(t){return n(t)}),Scope.nest(i,t))}),i)}}function makeNonReplacing(t){return function(){var e=t.apply(this,arguments);return function(t,n){var i=[],a=e(autoCancelPrevious(function(t){function e(t,e,n){i.swap(n,e.length,t)}if(t){merge(i,t);var a=t.addRangeChangeListener(e,n.beforeChange);return once(a)}i.clear()}),n),r=t(i)||Function.noop;return once(function(){a(),r()})}}}function makeUniq(t){var e;return function(n){if(n!==e){var i=t.apply(this,arguments);return e=n,i}}}function cancelEach(t){t.forEach(function(t){t&&t()})}function autoCancelPrevious(t){var e=Function.noop;return function(){return e(),e=t.apply(this,arguments)||Function.noop,function(){e()}}}function once(t){var e;return function(){return e?Function.noop:(e=!0,t.apply(this,arguments))}}require("collections/shim");var PropertyChanges=require("collections/listen/property-changes");require("collections/listen/array-changes");var SortedArray=require("collections/sorted-array"),Map=require("collections/map"),Set=require("collections/set"),Heap=require("collections/heap"),Scope=require("./scope"),Operators=require("./operators");exports.makeLiteralObserver=makeLiteralObserver,exports.observeValue=observeValue,exports.observeParameters=observeParameters,exports.makeElementObserver=makeElementObserver,exports.makeComponentObserver=makeComponentObserver,exports.observeProperty=observeProperty;var _observeProperty=observeProperty;exports.makePropertyObserver=makePropertyObserver,exports.observeKey=observeGet,exports.observeGet=observeGet;var _observeGet=observeGet;exports.makeGetObserver=makeGetObserver,exports.makeHasObserver=makeHasObserver,exports.makeObserversObserver=makeObserversObserver,exports.makeRecordObserver=makeObjectObserver,exports.makeObjectObserver=makeObjectObserver,exports.makeTupleObserver=makeArrayObserver,exports.makeArrayObserver=makeArrayObserver,exports.makeOperatorObserverMaker=makeOperatorObserverMaker,exports.makeMethodObserverMaker=makeMethodObserverMaker,exports.makeNotObserver=makeNotObserver,exports.makeAndObserver=makeAndObserver,exports.makeOrObserver=makeOrObserver,exports.makeConditionalObserver=makeConditionalObserver,exports.makeDefinedObserver=makeDefinedObserver,exports.makeDefaultObserver=makeDefaultObserver;var makeMapBlockObserver=exports.makeMapBlockObserver=makeNonReplacing(makeReplacingMapBlockObserver),makeFilterBlockObserver=exports.makeFilterBlockObserver=makeNonReplacing(makeReplacingFilterBlockObserver);exports.makeSortedBlockObserver=makeSortedBlockObserver,exports.makeReversedObserver=makeNonReplacing(makeReplacingReversedObserver);var makeFlattenObserver=exports.makeFlattenObserver=makeNonReplacing(makeReplacingFlattenObserver);exports.makeConcatObserver=makeConcatObserver,exports.makeSomeBlockObserver=makeSomeBlockObserver,exports.makeEveryBlockObserver=makeEveryBlockObserver,exports.makeGroupBlockObserver=makeGroupBlockObserver,exports.makeGroupMapBlockObserver=makeGroupMapBlockObserver,exports.makeMaxBlockObserver=makeMaxBlockObserver,exports.makeMinBlockObserver=makeMinBlockObserver;var observeLengthLiteral=makeLiteralObserver("length");exports.makeSumObserver=makeCollectionObserverMaker(function(){var t=0;return function(e,n){return t+=e.sum()-n.sum()}}),exports.makeAverageObserver=makeCollectionObserverMaker(function(){var t=0,e=0;return function(n,i){return t+=n.sum()-i.sum(),e+=n.length-i.length,t/e}}),exports.makeViewObserver=makeNonReplacing(makeReplacingViewObserver),exports.makeEnumerateObserver=makeNonReplacing(makeReplacingEnumerateObserver),exports.makeEnumerationObserver=exports.makeEnumerateObserver,exports.makeRangeObserver=makeRangeObserver,exports.makeStartsWithObserver=makeStartsWithObserver,exports.makeEndsWithObserver=makeEndsWithObserver,exports.makeContainsObserver=makeContainsObserver,exports.observeRangeChange=observeRangeChange,exports.makeRangeContentObserver=makeRangeContentObserver,exports.makeMapContentObserver=makeMapContentObserver,exports.observeMapChange=observeMapChange;var makeItemsObserver=exports.makeItemsObserver=makeNonReplacing(makeReplacingItemsObserver);exports.observeItems=observeItems,exports.makeKeysObserver=makeKeysObserver,exports.observeItemKey=observeItemKey,exports.makeValuesObserver=makeValuesObserver,exports.observeItemValue=observeItemValue,exports.makeToMapObserver=makeToMapObserver,exports.makeParentObserver=makeParentObserver,exports.makeConverterObserver=makeConverterObserver,exports.makeComputerObserver=makeComputerObserver,exports.makePathObserver=makeExpressionObserver,exports.makeExpressionObserver=makeExpressionObserver,exports.makeWithObserver=makeWithObserver,exports.makeAsArrayObserver=makeNonReplacing(Function.identity);var merge=require("./merge").merge;exports.makeUniq=makeUniq,exports.cancelEach=cancelEach,exports.autoCancelPrevious=autoCancelPrevious,exports.once=once;