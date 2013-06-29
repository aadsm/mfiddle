function makeLiteralObserver(t){return function(e){return e(t)||Function.noop}}function observeValue(t,e){return t(e.value)||Function.noop}function observeParameters(t,e){return t(e.parameters)||Function.noop}function makeElementObserver(t){return function(e,n){return e(n.document.getElementById(t))||Function.noop}}function makeComponentObserver(t,e){return function(n,i){var r=i.components,a=r.getObjectByLabel||r.getComponentByLabel,s=a.call(r,t);return e.component=s,n(s)||Function.noop}}function observeProperty(t,e,n,i){function r(t,e,i){a(),a=n(t,e,i)||Function.noop}if(null==t)return n();var a=Function.noop;return PropertyChanges.addOwnPropertyChangeListener(t,e,r,i.beforeChange),r(t[e],e,t),once(function(){a(),PropertyChanges.removeOwnPropertyChangeListener(t,e,r,i.beforeChange)})}function makePropertyObserver(t,e){return function(n,i){return e(autoCancelPrevious(function(e){return null==e?n():t(autoCancelPrevious(function(t){return null==t?n():t.observeProperty?t.observeProperty(e,n,i):_observeProperty(t,e,n,i)}),i)}),i)}}function observeGet(t,e,n,i){function r(t,i,r){s(e,i)&&(a(),a=n(t,e,r)||Function.noop)}var a=Function.noop,s=t.contentEquals||Object.equals;return r(t.get(e),e,t),t.addMapChangeListener(r,i.beforeChange),once(function(){a(),t.removeMapChangeListener(r)})}function makeGetObserver(t,e){return function(n,i){return t(autoCancelPrevious(function(t){return t?e(autoCancelPrevious(function(e){return null==e?n():t.observeGet?t.observeGet(e,n,i):_observeGet(t,e,n,i)}),i):n()}),i)}}function makeHasObserver(t,e){return function(n,i){return n=makeUniq(n),e(autoCancelPrevious(function(e){return t(autoCancelPrevious(function(t){return t?observeRangeChange(t,function(){return n((t.has||t.contains).call(t,e))},i):n()}),i)}),i)}}function makeObserversObserver(t){return function(e,n){for(var i=Array(t.length),r=0;t.length>r;r++)i[r]=void 0;var a=t.map(function(t,e){return t(function(t){i.set(e,t)},n)}),s=e(i)||Function.noop;return once(function(){s(),cancelEach(a)})}}function makeObjectObserver(t){return function(e,n){var i={},r={};for(var a in t)(function(t,e){i[t]=e(function(e){r[t]=e},n)})(a,t[a]);var s=e(r)||Function.noop;return function(){s();for(var t in i)i[t]()}}}function makeArrayObserver(){return makeObserversObserver(Array.prototype.slice.call(arguments))}function makeOperatorObserverMaker(t){return function(){var e=makeObserversObserver(Array.prototype.slice.call(arguments)),n=makeRangeContentObserver(e);return function(e,i){return n(autoCancelPrevious(function(n){return n.every(Operators.defined)?e(t.apply(void 0,n)):e()}),i)}}}function makeMethodObserverMaker(t){var e=t.slice(0,1).toUpperCase()+t.slice(1),n="make"+e+"Observer",i="observe"+e;return function(){var e=arguments[0],r=Array.prototype.slice.call(arguments,1),a=r.map(function(t){return function(e,n){return t(autoCancelPrevious(e),n)}}),s=makeObserversObserver(r),o=makeRangeContentObserver(s);return function(r,s){return e(autoCancelPrevious(function(e){return e?e[n]?e[n].apply(e,a)(r,s):e[i]?e[i](r,s):o(autoCancelPrevious(function(n){if(!n.every(Operators.defined))return r();if(e[t])return r(e[t].apply(e,n));throw Error("Object has no method "+JSON.stringify(t)+": "+e)}),s):r()}),s)}}}function makeNotObserver(t){return function(e,n){return t(autoCancelPrevious(function(t){return e(!t)}),n)}}function makeAndObserver(t,e){return function(n,i){return t(autoCancelPrevious(function(t){return t?e(n,i):n(t)}),i)}}function makeOrObserver(t,e){return function(n,i){return t(autoCancelPrevious(function(t){return t?n(t):e(n,i)}),i)}}function makeConditionalObserver(t,e,n){return function(i,r){return t(autoCancelPrevious(function(t){return null==t?i():t?e(i,r):n(i,r)}),r)}}function makeDefinedObserver(t){return function(e,n){return t(autoCancelPrevious(function(t){return e(null!=t)}),n)}}function makeDefaultObserver(t,e){return function(n,i){return t(autoCancelPrevious(function(t){return null==t?e(n,i):n(t)}),i)}}function makeReplacingMapBlockObserver(t,e){return function(n,i){return t(autoCancelPrevious(function(t){function r(e){for(;t.length>e;e++)o[e].index=e}function a(t,n,a){o.swap(a,n.length,t.map(function(t,e){return{index:a+e}})),r(a+t.length);var c,u=[];cancelEach(l.swap(a,n.length,t.map(function(t,n){var r=o[a+n];return e(autoCancelPrevious(function(t){c?s.set(r.index,t):u[n]=t}),Scope.nest(i,t))}))),c=!0,s.swap(a,n.length,u)}if(!t)return n();var s=[],o=[],l=[],c=observeRangeChange(t,a,i),u=n(s,t)||Function.noop;return once(function(){u(),cancelEach(l),c()})}),i)}}function makeReplacingFilterBlockObserver(t,e){var n=makeReplacingMapBlockObserver(t,e);return function(t,e){return n(autoCancelPrevious(function(n,i){function r(t){for(;n.length>t;t++)l[t+1]=l[t]+n[t]}function a(t,e,n){var a=i.slice(n,n+t.length),o=e.map(Boolean).sum(),c=a.filter(function(e,n){return t[n]}),u=l[n],h=s.slice(u,u+o);(h.length!==c.length||h.every(function(t,e){return t!==c[e]}))&&s.swap(u,o,c),r(u)}if(!i)return t();var s=[],o=[],l=[0],c=observeRangeChange(n,a,e),u=t(s)||Function.noop;return once(function(){u(),cancelEach(o),c()})}),e)}}function makeSortedBlockObserver(t,e){var n=makeRelationItemObserver(e),i=makeReplacingMapBlockObserver(t,n),r=function(t,e){return i(autoCancelPrevious(function(n){function i(t,e){a.addEach(t),a.deleteEach(e)}if(!n)return t();var r=[],a=SortedArray(r,function(t,e){return Object.equals(t[1],e[1])},function(t,e){return Object.compare(t[1],e[1])}),s=observeRangeChange(n,i,e),o=t(r)||Function.noop;return function(){o(),s()}}),e)};return makeMapBlockObserver(r,observeItemKey)}function makeRelationItemObserver(t){return function(e,n){return t(autoCancelPrevious(function(t){return e([n.value,t])||Function.noop}),n)}}function makeReplacingReversedObserver(t){return function(e,n){return t(autoCancelPrevious(function(t){function i(t,e,n){var i=r.length-n-e.length;r.swap(i,e.length,t.reversed())}if(!t)return e();var r=[],a=observeRangeChange(t,i,n),s=e(r);return once(function(){s(),a()})}),n)}}function makeReplacingFlattenObserver(t){return function(e,n){return t(autoCancelPrevious(function(t){function i(e){for(var n=e;t.length>n;n++)l[n].index=n,o[n+1]=t[n]?o[n]+t[n].length:o[n]}function r(t,e,r){var c=o[r],u=o[r+e.length],h=u-c;a.swap(c,h,[]),l.swap(r,e.length,t.map(function(){return{index:null}})),i(r),cancelEach(s.swap(r,e.length,t.map(function(t,e){function s(t,e,n){i(c.index);var r=o[c.index]+n,s=o[c.index]+n+e.length,l=s-r;a.swap(r,l,t)}var c=l[r+e];return observeRangeChange(t,s,n)})))}if(!t)return e();var a=[],s=[],o=[0],l=[],c=observeRangeChange(t,r,n),u=e(a)||Function.noop;return once(function(){u(),cancelEach(s),c()})}),n)}}function makeConcatObserver(){return makeFlattenObserver(makeObserversObserver(Array.prototype.slice.call(arguments)))}function makeSomeBlockObserver(t,e){var n=makeFilterBlockObserver(t,e),i=makePropertyObserver(n,observeLengthLiteral);return makeConverterObserver(i,Boolean)}function makeEveryBlockObserver(t,e){var n=makeConverterObserver(e,Operators.not),i=makeFilterBlockObserver(t,n),r=makePropertyObserver(i,observeLengthLiteral);return makeConverterObserver(r,Operators.not)}function makeGroupBlockObserver(t,e){var n=makeGroupMapBlockObserver(t,e);return makeItemsObserver(n)}function makeGroupMapBlockObserver(t,e){var n=makeRelationItemObserver(e),i=makeReplacingMapBlockObserver(t,n);return function(t,e){return i(autoCancelPrevious(function(n,i){function r(t,e){var n=Set();e.forEach(function(t){var e=a.get(t[1]);e["delete"](t[0]),n.add(t[1])}),t.forEach(function(t){a.has(t[1])||a.set(t[1],i.constructClone());var e=a.get(t[1]);e.add(t[0])}),n.forEach(function(t){var e=a.get(t);0===e.length&&a["delete"](t)})}if(!n)return t();var a=Map(),s=observeRangeChange(n,r,e),o=t(a)||Function.noop;return function(){s(),o()}}),e)}}function makeHeapBlockObserver(t,e,n){function i(t,e){return Object.compare(t[1],e[1])*n}function r(t,e){return Object.equals(t[1],e[1])}var a=makeRelationItemObserver(e),s=makeReplacingMapBlockObserver(t,a);return function(t,e){return s(autoCancelPrevious(function(n){function a(t,e){o.addEach(t),o.deleteEach(e)}function s(e,n){return 0===n?e?t(e[0]):t():void 0}if(!n)return t();var o=new Heap(null,r,i),l=observeRangeChange(n,a,e),c=observeMapChange(o,s,e);return function(){l(),c()}}),e)}}function makeMaxBlockObserver(t,e){return makeHeapBlockObserver(t,e,1)}function makeMinBlockObserver(t,e){return makeHeapBlockObserver(t,e,-1)}function makeCollectionObserverMaker(t){return function(e){return function(n,i){return n=makeUniq(n),e(autoCancelPrevious(function(e){if(!e)return n();var r=t(e,n);return observeRangeChange(e,function(t,e,i){return n(r(t,e,i))},i)}),i)}}}function makeReplacingViewObserver(t,e,n){return function(i,r){return t(autoCancelPrevious(function(t){return t?n(autoCancelPrevious(function(n){return null==n?i():e(autoCancelPrevious(function(e){function a(i,r,a){var o=i.length-r.length;e>a&&0>o&&n>o?(s.swap(s.length,0,t.slice(e+n+o,e+n)),s.splice(0,-o)):e>a&&o>0&&n>o?(s.swap(0,0,t.slice(e,e+o)),s.splice(s.length-o,o)):a>=e&&0>o&&e+n>a?(s.swap(s.length,0,t.slice(e+n+o,e+n)),s.splice(a-e,-o)):a>=e&&o>0&&e+n>a?(s.swap(a-e,0,t.slice(a,a+o)),s.splice(s.length-o,o)):e+n>a&&s.swap(0,s.length,t.slice(e,e+n))}if(null==e)return i();var s=[],o=observeRangeChange(t,a,r),l=i(s)||Function.noop;return once(function(){l(),o()})}),r)}),r):i()}),r)}}function makeReplacingEnumerateObserver(t){return function(e,n){return t(autoCancelPrevious(function(t){function i(t){for(;a.length>t;t++)a[t].set(0,t)}function r(t,e,n){a.swap(n,e.length,t.map(function(t,e){return[n+e,t]})),i(n+t.length)}if(!t)return e();var a=[],s=observeRangeChange(t,r,n),o=e(a)||Function.noop;return function(){o(),s()}}),n)}}function makeRangeObserver(t){return function(e,n){var i=[],r=e(i)||Function.noop,a=t(function(t){if(t>>>=0,null==t)i.clear();else if(t>i.length){for(var e=[],n=i.length;t>n;n++)e.push(n);i.swap(i.length,0,e)}else i.length>t&&i.splice(t,i.length)},n);return function(){r(),a()}}}function makeStartsWithObserver(t,e){return function(n,i){return e(function(e){var r=RegExp("^"+RegExp.escape(e));return t(function(t){return n(r.test(t))||Function.noop},i)},i)}}function makeEndsWithObserver(t,e){return function(n,i){return e(function(e){var r=RegExp(RegExp.escape(e)+"$");return t(function(t){return n(r.test(t))||Function.noop},i)},i)}}function makeContainsObserver(t,e){return function(n,i){return e(function(e){var r=RegExp(RegExp.escape(e));return t(function(t){return n(r.test(t))||Function.noop},i)},i)}}function observeRangeChange(t,e,n){function i(t,n,i){r(),r=e(t,n,i)||Function.noop}if(t){var r=Function.noop;if(!t.toArray)throw Error("Can't observe range changes on "+t+" because it has no toArray method");if(!t.addRangeChangeListener)throw Error("Can't observe range changes on "+t);i(t.toArray(),[],0);var a=t.addRangeChangeListener(i,n.beforeChange);return once(function(){r(),a()})}}function makeRangeContentObserver(t){return function(e,n){return t(autoCancelPrevious(function(t){return t&&t.addRangeChangeListener?observeRangeChange(t,function(){return e(t)},n):e(t)}),n)}}function makeMapContentObserver(t){return function(e,n){return t(autoCancelPrevious(function(t){return t&&t.addMapChangeListener?observeMapChange(t,function(){return e(t)},n):e(t)}),n)}}function observeMapChange(t,e,n){function i(t,n,i){var a=r.get(n)||Function.noop;a(),a=e(t,n,i)||Function.noop,r.set(n,a)}var r=Map();t.forEach(i);var a=t.addMapChangeListener(i,n.beforeChange);return once(function(){r.forEach(function(t){t()}),a()})}function makeReplacingItemsObserver(t){return function(e,n){return t(autoCancelPrevious(function(t){return t?observeItems(t,e,n):e()}),n)}}function observeItems(t,e,n){function i(t,e){var n,i;a.has(e)?null==t?(n=a.get(e),a["delete"](e),i=r.indexOf(n),r.splice(i,1)):(n=a.get(e),n.set(1,t)):(n=[e,t],a.set(e,n),r.push(n))}var r=[],a=Map(),s=e(r)||Function.noop,o=observeMapChange(t,i,n);return once(function(){s(),o()})}function makeKeysObserver(t){var e=makeItemsObserver(t);return makeMapBlockObserver(e,observeItemKey)}function observeItemKey(t,e){return e.value?t(e.value[0])||Function.noop:t()}function makeValuesObserver(t){var e=makeItemsObserver(t);return makeMapBlockObserver(e,observeItemValue)}function observeItemValue(t,e){return e.value?t(e.value[1])||Function.noop:t()}function makeToMapObserver(t){return function(e,n){var i=Map(),r=e(i)||Function.noop,a=t(autoCancelPrevious(function(t){if(i.clear(),t&&!t.addRangeChangeListener){var e=Object.keys(t).map(function(e){return _observeProperty(t,e,autoCancelPrevious(function(t){i.set(e,t)}),n)});return function(){cancelEach(e)}}}),n);return function(){r(),a()}}}function makeParentObserver(t){return function(e,n){return t(e,n.parent||new Scope)}}function makeConverterObserver(t,e,n){return function(i,r){return i=makeUniq(i),t(autoCancelPrevious(function(t){return i(e.call(n,t))}),r)}}function makeComputerObserver(t,e,n){return function(i,r){return i=makeUniq(i),t(autoCancelPrevious(function(t){return t&&t.every(Operators.defined)?i(e.apply(n,t)):void 0}),r)}}function makeExpressionObserver(t,e){var n=require("./parse"),i=require("./compile-observer");return function(r,a){return r=makeUniq(r),e(autoCancelPrevious(function(e){if(null==e)return r();var s,o;try{s=n(e),o=i(s)}catch(l){return r()}return t(autoCancelPrevious(function(t){return o(r,Scope.nest(a,t))}),a)}),a)}}function makeWithObserver(t,e){return function(n,i){return t(autoCancelPrevious(function(t){return e(autoCancelPrevious(function(t){return n(t)}),Scope.nest(i,t))}),i)}}function makeNonReplacing(t){return function(){var e=t.apply(this,arguments);return function(t,n){var i=[],r=e(autoCancelPrevious(function(t){function e(t,e,n){i.swap(n,e.length,t)}if(t){merge(i,t);var r=t.addRangeChangeListener(e,n.beforeChange);return once(r)}i.clear()}),n),a=t(i)||Function.noop;return once(function(){r(),a()})}}}function makeUniq(t){var e;return function(n){if(n!==e){var i=t.apply(this,arguments);return e=n,i}}}function cancelEach(t){t.forEach(function(t){t&&t()})}function autoCancelPrevious(t){var e=Function.noop;return function(){return e(),e=t.apply(this,arguments)||Function.noop,function(){e()}}}function once(t){var e;return function(){return e?Function.noop:(e=!0,t.apply(this,arguments))}}require("collections/shim");var PropertyChanges=require("collections/listen/property-changes");require("collections/listen/array-changes");var SortedArray=require("collections/sorted-array"),Map=require("collections/map"),Set=require("collections/set"),Heap=require("collections/heap"),Scope=require("./scope"),Operators=require("./operators");exports.makeLiteralObserver=makeLiteralObserver,exports.observeValue=observeValue,exports.observeParameters=observeParameters,exports.makeElementObserver=makeElementObserver,exports.makeComponentObserver=makeComponentObserver,exports.observeProperty=observeProperty;var _observeProperty=observeProperty;exports.makePropertyObserver=makePropertyObserver,exports.observeKey=observeGet,exports.observeGet=observeGet;var _observeGet=observeGet;exports.makeGetObserver=makeGetObserver,exports.makeHasObserver=makeHasObserver,exports.makeObserversObserver=makeObserversObserver,exports.makeRecordObserver=makeObjectObserver,exports.makeObjectObserver=makeObjectObserver,exports.makeTupleObserver=makeArrayObserver,exports.makeArrayObserver=makeArrayObserver,exports.makeOperatorObserverMaker=makeOperatorObserverMaker,exports.makeMethodObserverMaker=makeMethodObserverMaker,exports.makeNotObserver=makeNotObserver,exports.makeAndObserver=makeAndObserver,exports.makeOrObserver=makeOrObserver,exports.makeConditionalObserver=makeConditionalObserver,exports.makeDefinedObserver=makeDefinedObserver,exports.makeDefaultObserver=makeDefaultObserver;var makeMapBlockObserver=exports.makeMapBlockObserver=makeNonReplacing(makeReplacingMapBlockObserver),makeFilterBlockObserver=exports.makeFilterBlockObserver=makeNonReplacing(makeReplacingFilterBlockObserver);exports.makeSortedBlockObserver=makeSortedBlockObserver,exports.makeReversedObserver=makeNonReplacing(makeReplacingReversedObserver);var makeFlattenObserver=exports.makeFlattenObserver=makeNonReplacing(makeReplacingFlattenObserver);exports.makeConcatObserver=makeConcatObserver,exports.makeSomeBlockObserver=makeSomeBlockObserver,exports.makeEveryBlockObserver=makeEveryBlockObserver,exports.makeGroupBlockObserver=makeGroupBlockObserver,exports.makeGroupMapBlockObserver=makeGroupMapBlockObserver,exports.makeMaxBlockObserver=makeMaxBlockObserver,exports.makeMinBlockObserver=makeMinBlockObserver;var observeLengthLiteral=makeLiteralObserver("length");exports.makeSumObserver=makeCollectionObserverMaker(function(){var t=0;return function(e,n){return t+=e.sum()-n.sum()}}),exports.makeAverageObserver=makeCollectionObserverMaker(function(){var t=0,e=0;return function(n,i){return t+=n.sum()-i.sum(),e+=n.length-i.length,t/e}}),exports.makeViewObserver=makeNonReplacing(makeReplacingViewObserver),exports.makeEnumerateObserver=makeNonReplacing(makeReplacingEnumerateObserver),exports.makeEnumerationObserver=exports.makeEnumerateObserver,exports.makeRangeObserver=makeRangeObserver,exports.makeStartsWithObserver=makeStartsWithObserver,exports.makeEndsWithObserver=makeEndsWithObserver,exports.makeContainsObserver=makeContainsObserver,exports.observeRangeChange=observeRangeChange,exports.makeRangeContentObserver=makeRangeContentObserver,exports.makeMapContentObserver=makeMapContentObserver,exports.observeMapChange=observeMapChange;var makeItemsObserver=exports.makeItemsObserver=makeNonReplacing(makeReplacingItemsObserver);exports.observeItems=observeItems,exports.makeKeysObserver=makeKeysObserver,exports.observeItemKey=observeItemKey,exports.makeValuesObserver=makeValuesObserver,exports.observeItemValue=observeItemValue,exports.makeToMapObserver=makeToMapObserver,exports.makeParentObserver=makeParentObserver,exports.makeConverterObserver=makeConverterObserver,exports.makeComputerObserver=makeComputerObserver,exports.makePathObserver=makeExpressionObserver,exports.makeExpressionObserver=makeExpressionObserver,exports.makeWithObserver=makeWithObserver,exports.makeAsArrayObserver=makeNonReplacing(Function.identity);var merge=require("./merge").merge;exports.makeUniq=makeUniq,exports.cancelEach=cancelEach,exports.autoCancelPrevious=autoCancelPrevious,exports.once=once;