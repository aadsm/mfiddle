module.exports=function(){function t(t,e){function n(){this.constructor=t}n.prototype=e.prototype,t.prototype=new n}function e(t,e,n,i,a){function r(t,e){function n(t){function e(t){return t.charCodeAt(0).toString(16).toUpperCase()}return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\x08/g,"\\b").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g,function(t){return"\\x0"+e(t)}).replace(/[\x10-\x1F\x80-\xFF]/g,function(t){return"\\x"+e(t)}).replace(/[\u0180-\u0FFF]/g,function(t){return"\\u0"+e(t)}).replace(/[\u1080-\uFFFF]/g,function(t){return"\\u"+e(t)})}var i,a;switch(t.length){case 0:i="end of input";break;case 1:i=t[0];break;default:i=t.slice(0,-1).join(", ")+" or "+t[t.length-1]}return a=e?'"'+n(e)+'"':"end of input","Expected "+i+" but "+a+" found."}this.expected=t,this.found=e,this.offset=n,this.line=i,this.column=a,this.name="SyntaxError",this.message=r(t,e)}function n(t){function n(e){function n(e,n,i){var a,r;for(a=n;i>a;a++)r=t.charAt(a),"\n"===r?(e.seenCR||e.line++,e.column=1,e.seenCR=!1):"\r"===r||"\u2028"===r||"\u2029"===r?(e.line++,e.column=1,e.seenCR=!0):(e.column++,e.seenCR=!1)}return Wa!==e&&(Wa>e&&(Wa=0,Ua={line:1,column:1,seenCR:!1}),n(Ua,Wa,e),Wa=e),Ua}function i(t){Ha>qa||(qa>Ha&&(Ha=qa,Ya=[]),Ya.push(t))}function a(t){var e=0;for(t.sort();t.length>e;)t[e-1]===t[e]?t.splice(e,1):e++}function r(){var t,e;return Ga++,t=l(),Ga--,null===t&&(e=null,0===Ga&&i($)),t}function s(){var e,n,a,s,o,l,c;if(e=qa,n=r(),null!==n){for(a=[],s=qa,44===t.charCodeAt(qa)?(o=te,qa++):(o=null,0===Ga&&i(ee)),null!==o?(l=F(),null!==l?(c=r(),null!==c?(o=[o,l,c],s=o):(qa=s,s=Q)):(qa=s,s=Q)):(qa=s,s=Q);null!==s;)a.push(s),s=qa,44===t.charCodeAt(qa)?(o=te,qa++):(o=null,0===Ga&&i(ee)),null!==o?(l=F(),null!==l?(c=r(),null!==c?(o=[o,l,c],s=o):(qa=s,s=Q)):(qa=s,s=Q)):(qa=s,s=Q);null!==a?(Va=e,n=ne(n,a),null===n?(qa=e,e=n):e=n):(qa=e,e=Q)}else qa=e,e=Q;return e}function o(){var e,n,a,r;return e=qa,40===t.charCodeAt(qa)?(n=ie,qa++):(n=null,0===Ga&&i(ae)),null!==n?(a=F(),null!==a?(41===t.charCodeAt(qa)?(r=re,qa++):(r=null,0===Ga&&i(se)),null!==r?(Va=e,n=oe(),null===n?(qa=e,e=n):e=n):(qa=e,e=Q)):(qa=e,e=Q)):(qa=e,e=Q),null===e&&(e=qa,40===t.charCodeAt(qa)?(n=ie,qa++):(n=null,0===Ga&&i(ae)),null!==n?(a=s(),null!==a?(41===t.charCodeAt(qa)?(r=re,qa++):(r=null,0===Ga&&i(se)),null!==r?(Va=e,n=le(a),null===n?(qa=e,e=n):e=n):(qa=e,e=Q)):(qa=e,e=Q)):(qa=e,e=Q)),e}function l(){var e,n,a,s,o,l,u,h,d,p,g;return e=qa,n=c(),null!==n?(a=F(),null!==a?(s=qa,63===t.charCodeAt(qa)?(o=ue,qa++):(o=null,0===Ga&&i(he)),null!==o?(l=F(),null!==l?(u=r(),null!==u?(h=F(),null!==h?(58===t.charCodeAt(qa)?(d=de,qa++):(d=null,0===Ga&&i(pe)),null!==d?(p=F(),null!==p?(g=r(),null!==g?(o=[o,l,u,h,d,p,g],s=o):(qa=s,s=Q)):(qa=s,s=Q)):(qa=s,s=Q)):(qa=s,s=Q)):(qa=s,s=Q)):(qa=s,s=Q)):(qa=s,s=Q),null===s&&(s=ce),null!==s?(Va=e,n=ge(n,s),null===n?(qa=e,e=n):e=n):(qa=e,e=Q)):(qa=e,e=Q)):(qa=e,e=Q),e}function c(){var e,n,a,r,s,o,l,c;if(e=qa,n=u(),null!==n){for(a=[],r=qa,s=F(),null!==s?(t.substr(qa,2)===me?(o=me,qa+=2):(o=null,0===Ga&&i(ve)),null!==o?(l=F(),null!==l?(c=u(),null!==c?(s=[s,o,l,c],r=s):(qa=r,r=Q)):(qa=r,r=Q)):(qa=r,r=Q)):(qa=r,r=Q);null!==r;)a.push(r),r=qa,s=F(),null!==s?(t.substr(qa,2)===me?(o=me,qa+=2):(o=null,0===Ga&&i(ve)),null!==o?(l=F(),null!==l?(c=u(),null!==c?(s=[s,o,l,c],r=s):(qa=r,r=Q)):(qa=r,r=Q)):(qa=r,r=Q)):(qa=r,r=Q);null!==a?(Va=e,n=fe(n,a),null===n?(qa=e,e=n):e=n):(qa=e,e=Q)}else qa=e,e=Q;return e}function u(){var e,n,a,r,s,o,l,c;if(e=qa,n=h(),null!==n){for(a=[],r=qa,s=F(),null!==s?(t.substr(qa,2)===Le?(o=Le,qa+=2):(o=null,0===Ga&&i(ye)),null!==o?(l=F(),null!==l?(c=h(),null!==c?(s=[s,o,l,c],r=s):(qa=r,r=Q)):(qa=r,r=Q)):(qa=r,r=Q)):(qa=r,r=Q);null!==r;)a.push(r),r=qa,s=F(),null!==s?(t.substr(qa,2)===Le?(o=Le,qa+=2):(o=null,0===Ga&&i(ye)),null!==o?(l=F(),null!==l?(c=h(),null!==c?(s=[s,o,l,c],r=s):(qa=r,r=Q)):(qa=r,r=Q)):(qa=r,r=Q)):(qa=r,r=Q);null!==a?(Va=e,n=fe(n,a),null===n?(qa=e,e=n):e=n):(qa=e,e=Q)}else qa=e,e=Q;return e}function h(){var e,n,a,r,s,o,l,c,u;return e=qa,n=d(),null!==n?(a=qa,r=F(),null!==r?(s=qa,t.substr(qa,3)===_e?(o=_e,qa+=3):(o=null,0===Ga&&i(be)),null===o&&(t.substr(qa,2)===Ce?(o=Ce,qa+=2):(o=null,0===Ga&&i(we)),null===o&&(t.substr(qa,2)===xe?(o=xe,qa+=2):(o=null,0===Ga&&i(Me)),null===o&&(o=qa,60===t.charCodeAt(qa)?(l=ze,qa++):(l=null,0===Ga&&i(Se)),null!==l?(c=qa,Ga++,45===t.charCodeAt(qa)?(u=Ee,qa++):(u=null,0===Ga&&i(Te)),Ga--,null===u?c=ce:(qa=c,c=Q),null!==c?(l=[l,c],o=l):(qa=o,o=Q)):(qa=o,o=Q),null===o&&(62===t.charCodeAt(qa)?(o=Pe,qa++):(o=null,0===Ga&&i(Oe)),null===o&&(t.substr(qa,2)===De?(o=De,qa+=2):(o=null,0===Ga&&i(ke)),null===o&&(t.substr(qa,2)===Be?(o=Be,qa+=2):(o=null,0===Ga&&i(Ae)))))))),null!==o&&(o=t.substring(s,qa)),s=o,null!==s?(o=F(),null!==o?(l=d(),null!==l?(r=[r,s,o,l],a=r):(qa=a,a=Q)):(qa=a,a=Q)):(qa=a,a=Q)):(qa=a,a=Q),null===a&&(a=ce),null!==a?(Va=e,n=je(n,a),null===n?(qa=e,e=n):e=n):(qa=e,e=Q)):(qa=e,e=Q),e}function d(){var e,n,a,r,s,o,l,c;if(e=qa,n=p(),null!==n){for(a=[],r=qa,s=F(),null!==s?(o=qa,43===t.charCodeAt(qa)?(l=Ie,qa++):(l=null,0===Ga&&i(Re)),null===l&&(45===t.charCodeAt(qa)?(l=Ee,qa++):(l=null,0===Ga&&i(Te))),null!==l&&(l=t.substring(o,qa)),o=l,null!==o?(l=F(),null!==l?(c=p(),null!==c?(s=[s,o,l,c],r=s):(qa=r,r=Q)):(qa=r,r=Q)):(qa=r,r=Q)):(qa=r,r=Q);null!==r;)a.push(r),r=qa,s=F(),null!==s?(o=qa,43===t.charCodeAt(qa)?(l=Ie,qa++):(l=null,0===Ga&&i(Re)),null===l&&(45===t.charCodeAt(qa)?(l=Ee,qa++):(l=null,0===Ga&&i(Te))),null!==l&&(l=t.substring(o,qa)),o=l,null!==o?(l=F(),null!==l?(c=p(),null!==c?(s=[s,o,l,c],r=s):(qa=r,r=Q)):(qa=r,r=Q)):(qa=r,r=Q)):(qa=r,r=Q);null!==a?(Va=e,n=fe(n,a),null===n?(qa=e,e=n):e=n):(qa=e,e=Q)}else qa=e,e=Q;return e}function p(){var e,n,a,r,s,o,l,c;if(e=qa,n=g(),null!==n){for(a=[],r=qa,s=F(),null!==s?(o=qa,42===t.charCodeAt(qa)?(l=Ne,qa++):(l=null,0===Ga&&i(Fe)),null===l&&(47===t.charCodeAt(qa)?(l=qe,qa++):(l=null,0===Ga&&i(Ve)),null===l&&(37===t.charCodeAt(qa)?(l=We,qa++):(l=null,0===Ga&&i(Ue)),null===l&&(t.substr(qa,3)===He?(l=He,qa+=3):(l=null,0===Ga&&i(Ye))))),null!==l&&(l=t.substring(o,qa)),o=l,null!==o?(l=F(),null!==l?(c=g(),null!==c?(s=[s,o,l,c],r=s):(qa=r,r=Q)):(qa=r,r=Q)):(qa=r,r=Q)):(qa=r,r=Q);null!==r;)a.push(r),r=qa,s=F(),null!==s?(o=qa,42===t.charCodeAt(qa)?(l=Ne,qa++):(l=null,0===Ga&&i(Fe)),null===l&&(47===t.charCodeAt(qa)?(l=qe,qa++):(l=null,0===Ga&&i(Ve)),null===l&&(37===t.charCodeAt(qa)?(l=We,qa++):(l=null,0===Ga&&i(Ue)),null===l&&(t.substr(qa,3)===He?(l=He,qa+=3):(l=null,0===Ga&&i(Ye))))),null!==l&&(l=t.substring(o,qa)),o=l,null!==o?(l=F(),null!==l?(c=g(),null!==c?(s=[s,o,l,c],r=s):(qa=r,r=Q)):(qa=r,r=Q)):(qa=r,r=Q)):(qa=r,r=Q);null!==a?(Va=e,n=fe(n,a),null===n?(qa=e,e=n):e=n):(qa=e,e=Q)}else qa=e,e=Q;return e}function g(){var e,n,a,r,s,o,l,c;if(e=qa,n=m(),null!==n){for(a=[],r=qa,s=F(),null!==s?(o=qa,t.substr(qa,2)===Ge?(l=Ge,qa+=2):(l=null,0===Ga&&i(Xe)),null===l&&(t.substr(qa,2)===Ke?(l=Ke,qa+=2):(l=null,0===Ga&&i(Ze)),null===l&&(t.substr(qa,2)===Je?(l=Je,qa+=2):(l=null,0===Ga&&i($e)))),null!==l&&(l=t.substring(o,qa)),o=l,null!==o?(l=F(),null!==l?(c=m(),null!==c?(s=[s,o,l,c],r=s):(qa=r,r=Q)):(qa=r,r=Q)):(qa=r,r=Q)):(qa=r,r=Q);null!==r;)a.push(r),r=qa,s=F(),null!==s?(o=qa,t.substr(qa,2)===Ge?(l=Ge,qa+=2):(l=null,0===Ga&&i(Xe)),null===l&&(t.substr(qa,2)===Ke?(l=Ke,qa+=2):(l=null,0===Ga&&i(Ze)),null===l&&(t.substr(qa,2)===Je?(l=Je,qa+=2):(l=null,0===Ga&&i($e)))),null!==l&&(l=t.substring(o,qa)),o=l,null!==o?(l=F(),null!==l?(c=m(),null!==c?(s=[s,o,l,c],r=s):(qa=r,r=Q)):(qa=r,r=Q)):(qa=r,r=Q)):(qa=r,r=Q);null!==a?(Va=e,n=fe(n,a),null===n?(qa=e,e=n):e=n):(qa=e,e=Q)}else qa=e,e=Q;return e}function m(){var e,n,a,r,s,o,l,c;if(e=qa,n=v(),null!==n){for(a=[],r=qa,s=F(),null!==s?(t.substr(qa,2)===Qe?(o=Qe,qa+=2):(o=null,0===Ga&&i(tn)),null!==o?(l=F(),null!==l?(c=v(),null!==c?(s=[s,o,l,c],r=s):(qa=r,r=Q)):(qa=r,r=Q)):(qa=r,r=Q)):(qa=r,r=Q);null!==r;)a.push(r),r=qa,s=F(),null!==s?(t.substr(qa,2)===Qe?(o=Qe,qa+=2):(o=null,0===Ga&&i(tn)),null!==o?(l=F(),null!==l?(c=v(),null!==c?(s=[s,o,l,c],r=s):(qa=r,r=Q)):(qa=r,r=Q)):(qa=r,r=Q)):(qa=r,r=Q);null!==a?(Va=e,n=fe(n,a),null===n?(qa=e,e=n):e=n):(qa=e,e=Q)}else qa=e,e=Q;return e}function v(){var e,n,a;return e=qa,n=qa,33===t.charCodeAt(qa)?(a=en,qa++):(a=null,0===Ga&&i(nn)),null===a&&(43===t.charCodeAt(qa)?(a=Ie,qa++):(a=null,0===Ga&&i(Re)),null===a&&(45===t.charCodeAt(qa)?(a=Ee,qa++):(a=null,0===Ga&&i(Te)))),null!==a&&(a=t.substring(n,qa)),n=a,null!==n?(a=v(),null!==a?(Va=e,n=an(n,a),null===n?(qa=e,e=n):e=n):(qa=e,e=Q)):(qa=e,e=Q),null===e&&(e=f()),e}function f(){var t,e,n,i;if(t=qa,e=_(),null!==e){for(n=[],i=L();null!==i;)n.push(i),i=L();null!==n?(Va=t,e=rn(e,n),null===e?(qa=t,t=e):t=e):(qa=t,t=Q)}else qa=t,t=Q;return t}function L(){var e,n,a,s;return e=qa,46===t.charCodeAt(qa)?(n=sn,qa++):(n=null,0===Ga&&i(on)),null!==n?(a=y(),null!==a?(Va=e,n=ln(a),null===n?(qa=e,e=n):e=n):(qa=e,e=Q)):(qa=e,e=Q),null===e&&(e=qa,91===t.charCodeAt(qa)?(n=cn,qa++):(n=null,0===Ga&&i(un)),null!==n?(a=r(),null!==a?(93===t.charCodeAt(qa)?(s=hn,qa++):(s=null,0===Ga&&i(dn)),null!==s?(Va=e,n=pn(a),null===n?(qa=e,e=n):e=n):(qa=e,e=Q)):(qa=e,e=Q)):(qa=e,e=Q)),e}function y(){var e,n,a,s,l;return e=qa,n=b(),null!==n?(123===t.charCodeAt(qa)?(a=gn,qa++):(a=null,0===Ga&&i(mn)),null!==a?(s=r(),null!==s?(125===t.charCodeAt(qa)?(l=vn,qa++):(l=null,0===Ga&&i(fn)),null!==l?(Va=e,n=Ln(n,s),null===n?(qa=e,e=n):e=n):(qa=e,e=Q)):(qa=e,e=Q)):(qa=e,e=Q)):(qa=e,e=Q),null===e&&(e=qa,n=b(),null!==n?(a=o(),null!==a?(Va=e,n=yn(n,a),null===n?(qa=e,e=n):e=n):(qa=e,e=Q)):(qa=e,e=Q),null===e&&(e=qa,n=j(),null!==n&&(Va=e,n=_n(n)),null===n?(qa=e,e=n):e=n,null===e&&(e=qa,n=b(),null!==n&&(Va=e,n=bn(n)),null===n?(qa=e,e=n):e=n,null===e&&(e=qa,n=S(),null!==n&&(Va=e,n=Cn(n)),null===n?(qa=e,e=n):e=n,null===e&&(e=qa,n=E(),null!==n&&(Va=e,n=Cn(n)),null===n?(qa=e,e=n):e=n,null===e&&(e=qa,40===t.charCodeAt(qa)?(n=ie,qa++):(n=null,0===Ga&&i(ae)),null!==n?(a=r(),null!==a?(41===t.charCodeAt(qa)?(s=re,qa++):(s=null,0===Ga&&i(se)),null!==s?(Va=e,n=Cn(a),null===n?(qa=e,e=n):e=n):(qa=e,e=Q)):(qa=e,e=Q)):(qa=e,e=Q))))))),e}function _(){var e,n,a,s;return e=S(),null===e&&(e=E(),null===e&&(e=C(),null===e&&(e=O(),null===e&&(e=qa,t.substr(qa,4)===wn?(n=wn,qa+=4):(n=null,0===Ga&&i(xn)),null!==n&&(Va=e,n=Mn()),null===n?(qa=e,e=n):e=n,null===e&&(e=qa,t.substr(qa,4)===zn?(n=zn,qa+=4):(n=null,0===Ga&&i(Sn)),null!==n&&(Va=e,n=En()),null===n?(qa=e,e=n):e=n,null===e&&(e=qa,t.substr(qa,5)===Tn?(n=Tn,qa+=5):(n=null,0===Ga&&i(Pn)),null!==n&&(Va=e,n=On()),null===n?(qa=e,e=n):e=n,null===e&&(e=qa,t.substr(qa,4)===Dn?(n=Dn,qa+=4):(n=null,0===Ga&&i(kn)),null!==n&&(Va=e,n=Bn()),null===n?(qa=e,e=n):e=n,null===e&&(e=qa,64===t.charCodeAt(qa)?(n=An,qa++):(n=null,0===Ga&&i(jn)),null!==n?(a=b(),null!==a?(Va=e,n=In(a),null===n?(qa=e,e=n):e=n):(qa=e,e=Q)):(qa=e,e=Q),null===e&&(e=qa,36===t.charCodeAt(qa)?(n=Rn,qa++):(n=null,0===Ga&&i(Nn)),null!==n?(a=b(),null!==a?(Va=e,n=Fn(a),null===n?(qa=e,e=n):e=n):(qa=e,e=Q)):(qa=e,e=Q),null===e&&(e=qa,36===t.charCodeAt(qa)?(n=Rn,qa++):(n=null,0===Ga&&i(Nn)),null!==n&&(Va=e,n=qn()),null===n?(qa=e,e=n):e=n,null===e&&(e=qa,35===t.charCodeAt(qa)?(n=Vn,qa++):(n=null,0===Ga&&i(Wn)),null!==n?(a=b(),null!==a?(Va=e,n=Un(a),null===n?(qa=e,e=n):e=n):(qa=e,e=Q)):(qa=e,e=Q),null===e&&(e=qa,38===t.charCodeAt(qa)?(n=Hn,qa++):(n=null,0===Ga&&i(Yn)),null!==n?(a=b(),null!==a?(s=o(),null!==s?(Va=e,n=Gn(a,s),null===n?(qa=e,e=n):e=n):(qa=e,e=Q)):(qa=e,e=Q)):(qa=e,e=Q),null===e&&(e=qa,94===t.charCodeAt(qa)?(n=Xn,qa++):(n=null,0===Ga&&i(Kn)),null!==n?(a=_(),null!==a?(Va=e,n=Zn(a),null===n?(qa=e,e=n):e=n):(qa=e,e=Q)):(qa=e,e=Q),null===e&&(e=qa,40===t.charCodeAt(qa)?(n=ie,qa++):(n=null,0===Ga&&i(ae)),null!==n?(a=r(),null!==a?(41===t.charCodeAt(qa)?(s=re,qa++):(s=null,0===Ga&&i(se)),null!==s?(Va=e,n=Jn(a),null===n?(qa=e,e=n):e=n):(qa=e,e=Q)):(qa=e,e=Q)):(qa=e,e=Q),null===e&&(e=qa,n=y(),null!==n&&(Va=e,n=$n(n)),null===n?(qa=e,e=n):e=n,null===e&&(e=qa,n=[],null!==n&&(Va=e,n=Qn()),null===n?(qa=e,e=n):e=n)))))))))))))))),e}function b(){var e,n,a;if(Ga++,e=qa,n=[],ei.test(t.charAt(qa))?(a=t.charAt(qa),qa++):(a=null,0===Ga&&i(ni)),null!==a)for(;null!==a;)n.push(a),ei.test(t.charAt(qa))?(a=t.charAt(qa),qa++):(a=null,0===Ga&&i(ni));else n=Q;return null!==n&&(Va=e,n=ii(n)),null===n?(qa=e,e=n):e=n,Ga--,null===e&&(n=null,0===Ga&&i(ti)),e}function C(){var e,n,a,r;if(Ga++,e=qa,39===t.charCodeAt(qa)?(n=ri,qa++):(n=null,0===Ga&&i(si)),null!==n){for(a=[],r=w();null!==r;)a.push(r),r=w();null!==a?(39===t.charCodeAt(qa)?(r=ri,qa++):(r=null,0===Ga&&i(si)),null!==r?(Va=e,n=oi(a),null===n?(qa=e,e=n):e=n):(qa=e,e=Q)):(qa=e,e=Q)}else qa=e,e=Q;if(null===e)if(e=qa,34===t.charCodeAt(qa)?(n=li,qa++):(n=null,0===Ga&&i(ci)),null!==n){for(a=[],r=x();null!==r;)a.push(r),r=x();null!==a?(34===t.charCodeAt(qa)?(r=li,qa++):(r=null,0===Ga&&i(ci)),null!==r?(Va=e,n=oi(a),null===n?(qa=e,e=n):e=n):(qa=e,e=Q)):(qa=e,e=Q)}else qa=e,e=Q;return Ga--,null===e&&(n=null,0===Ga&&i(ai)),e}function w(){var e,n;return ui.test(t.charAt(qa))?(e=t.charAt(qa),qa++):(e=null,0===Ga&&i(hi)),null===e&&(e=qa,t.substr(qa,2)===di?(n=di,qa+=2):(n=null,0===Ga&&i(pi)),null!==n&&(Va=e,n=gi()),null===n?(qa=e,e=n):e=n,null===e&&(e=M())),e}function x(){var e,n;return mi.test(t.charAt(qa))?(e=t.charAt(qa),qa++):(e=null,0===Ga&&i(vi)),null===e&&(e=qa,t.substr(qa,2)===fi?(n=fi,qa+=2):(n=null,0===Ga&&i(Li)),null!==n&&(Va=e,n=yi()),null===n?(qa=e,e=n):e=n,null===e&&(e=M())),e}function M(){var e,n,a,r,s,o,l,c;return e=qa,t.substr(qa,2)===_i?(n=_i,qa+=2):(n=null,0===Ga&&i(bi)),null!==n&&(Va=e,n=Ci()),null===n?(qa=e,e=n):e=n,null===e&&(e=qa,t.substr(qa,2)===wi?(n=wi,qa+=2):(n=null,0===Ga&&i(xi)),null!==n&&(Va=e,n=Mi()),null===n?(qa=e,e=n):e=n,null===e&&(e=qa,t.substr(qa,2)===zi?(n=zi,qa+=2):(n=null,0===Ga&&i(Si)),null!==n&&(Va=e,n=Ei()),null===n?(qa=e,e=n):e=n,null===e&&(e=qa,t.substr(qa,2)===Ti?(n=Ti,qa+=2):(n=null,0===Ga&&i(Pi)),null!==n&&(Va=e,n=Oi()),null===n?(qa=e,e=n):e=n,null===e&&(e=qa,t.substr(qa,2)===Di?(n=Di,qa+=2):(n=null,0===Ga&&i(ki)),null!==n&&(Va=e,n=Bi()),null===n?(qa=e,e=n):e=n,null===e&&(e=qa,t.substr(qa,2)===Ai?(n=Ai,qa+=2):(n=null,0===Ga&&i(ji)),null!==n&&(Va=e,n=Ii()),null===n?(qa=e,e=n):e=n,null===e&&(e=qa,t.substr(qa,2)===Ri?(n=Ri,qa+=2):(n=null,0===Ga&&i(Ni)),null!==n&&(Va=e,n=Fi()),null===n?(qa=e,e=n):e=n,null===e&&(e=qa,t.substr(qa,2)===qi?(n=qi,qa+=2):(n=null,0===Ga&&i(Vi)),null!==n&&(Va=e,n=Wi()),null===n?(qa=e,e=n):e=n,null===e&&(e=qa,t.substr(qa,2)===Ui?(n=Ui,qa+=2):(n=null,0===Ga&&i(Hi)),null!==n?(a=qa,r=qa,s=z(),null!==s?(o=z(),null!==o?(l=z(),null!==l?(c=z(),null!==c?(s=[s,o,l,c],r=s):(qa=r,r=Q)):(qa=r,r=Q)):(qa=r,r=Q)):(qa=r,r=Q),null!==r&&(r=t.substring(a,qa)),a=r,null!==a?(Va=e,n=Yi(a),null===n?(qa=e,e=n):e=n):(qa=e,e=Q)):(qa=e,e=Q))))))))),e}function z(){var e;return Gi.test(t.charAt(qa))?(e=t.charAt(qa),qa++):(e=null,0===Ga&&i(Xi)),e}function S(){var e,n,a,r;return e=qa,91===t.charCodeAt(qa)?(n=cn,qa++):(n=null,0===Ga&&i(un)),null!==n?(a=F(),null!==a?(93===t.charCodeAt(qa)?(r=hn,qa++):(r=null,0===Ga&&i(dn)),null!==r?(Va=e,n=Ki(),null===n?(qa=e,e=n):e=n):(qa=e,e=Q)):(qa=e,e=Q)):(qa=e,e=Q),null===e&&(e=qa,91===t.charCodeAt(qa)?(n=cn,qa++):(n=null,0===Ga&&i(un)),null!==n?(a=s(),null!==a?(93===t.charCodeAt(qa)?(r=hn,qa++):(r=null,0===Ga&&i(dn)),null!==r?(Va=e,n=Zi(a),null===n?(qa=e,e=n):e=n):(qa=e,e=Q)):(qa=e,e=Q)):(qa=e,e=Q)),e}function E(){var e,n,a,r,s,o;return e=qa,123===t.charCodeAt(qa)?(n=gn,qa++):(n=null,0===Ga&&i(mn)),null!==n?(a=F(),null!==a?(125===t.charCodeAt(qa)?(r=vn,qa++):(r=null,0===Ga&&i(fn)),null!==r?(s=F(),null!==s?(Va=e,n=Ji(),null===n?(qa=e,e=n):e=n):(qa=e,e=Q)):(qa=e,e=Q)):(qa=e,e=Q)):(qa=e,e=Q),null===e&&(e=qa,123===t.charCodeAt(qa)?(n=gn,qa++):(n=null,0===Ga&&i(mn)),null!==n?(a=F(),null!==a?(r=T(),null!==r?(125===t.charCodeAt(qa)?(s=vn,qa++):(s=null,0===Ga&&i(fn)),null!==s?(o=F(),null!==o?(Va=e,n=$i(r),null===n?(qa=e,e=n):e=n):(qa=e,e=Q)):(qa=e,e=Q)):(qa=e,e=Q)):(qa=e,e=Q)):(qa=e,e=Q)),e}function T(){var e,n,a,r,s,o,l;if(e=qa,n=P(),null!==n){for(a=[],r=qa,44===t.charCodeAt(qa)?(s=te,qa++):(s=null,0===Ga&&i(ee)),null!==s?(o=F(),null!==o?(l=P(),null!==l?(s=[s,o,l],r=s):(qa=r,r=Q)):(qa=r,r=Q)):(qa=r,r=Q);null!==r;)a.push(r),r=qa,44===t.charCodeAt(qa)?(s=te,qa++):(s=null,0===Ga&&i(ee)),null!==s?(o=F(),null!==o?(l=P(),null!==l?(s=[s,o,l],r=s):(qa=r,r=Q)):(qa=r,r=Q)):(qa=r,r=Q);null!==a?(Va=e,n=Qi(n,a),null===n?(qa=e,e=n):e=n):(qa=e,e=Q)}else qa=e,e=Q;return e}function P(){var e,n,a,s,o;return e=qa,n=b(),null!==n?(58===t.charCodeAt(qa)?(a=de,qa++):(a=null,0===Ga&&i(pe)),null!==a?(s=F(),null!==s?(o=r(),null!==o?(Va=e,n=ta(n,o),null===n?(qa=e,e=n):e=n):(qa=e,e=Q)):(qa=e,e=Q)):(qa=e,e=Q)):(qa=e,e=Q),e}function O(){var e,n,a;return Ga++,e=qa,n=qa,a=D(),null!==a&&(a=t.substring(n,qa)),n=a,null!==n&&(Va=e,n=na(n)),null===n?(qa=e,e=n):e=n,Ga--,null===e&&(n=null,0===Ga&&i(ea)),e}function D(){var t,e,n,i;return t=qa,e=k(),null!==e?(n=B(),null!==n?(i=A(),null!==i?(e=[e,n,i],t=e):(qa=t,t=Q)):(qa=t,t=Q)):(qa=t,t=Q),null===t&&(t=qa,e=k(),null!==e?(n=B(),null!==n?(e=[e,n],t=e):(qa=t,t=Q)):(qa=t,t=Q),null===t&&(t=qa,e=k(),null!==e?(n=A(),null!==n?(e=[e,n],t=e):(qa=t,t=Q)):(qa=t,t=Q),null===t&&(t=k()))),t}function k(){var e,n,a,r;return e=qa,n=N(),null!==n?(a=j(),null!==a?(n=[n,a],e=n):(qa=e,e=Q)):(qa=e,e=Q),null===e&&(e=R(),null===e&&(e=qa,45===t.charCodeAt(qa)?(n=Ee,qa++):(n=null,0===Ga&&i(Te)),null!==n?(a=N(),null!==a?(r=j(),null!==r?(n=[n,a,r],e=n):(qa=e,e=Q)):(qa=e,e=Q)):(qa=e,e=Q),null===e&&(e=qa,45===t.charCodeAt(qa)?(n=Ee,qa++):(n=null,0===Ga&&i(Te)),null!==n?(a=R(),null!==a?(n=[n,a],e=n):(qa=e,e=Q)):(qa=e,e=Q)))),e}function B(){var e,n,a;return e=qa,46===t.charCodeAt(qa)?(n=sn,qa++):(n=null,0===Ga&&i(on)),null!==n?(a=j(),null!==a?(n=[n,a],e=n):(qa=e,e=Q)):(qa=e,e=Q),e}function A(){var t,e,n;return t=qa,e=I(),null!==e?(n=j(),null!==n?(e=[e,n],t=e):(qa=t,t=Q)):(qa=t,t=Q),t}function j(){var t,e;if(t=[],e=R(),null!==e)for(;null!==e;)t.push(e),e=R();else t=Q;return t}function I(){var e,n,a;return e=qa,ia.test(t.charAt(qa))?(n=t.charAt(qa),qa++):(n=null,0===Ga&&i(aa)),null!==n?(ra.test(t.charAt(qa))?(a=t.charAt(qa),qa++):(a=null,0===Ga&&i(sa)),null===a&&(a=ce),null!==a?(n=[n,a],e=n):(qa=e,e=Q)):(qa=e,e=Q),e}function R(){var e;return oa.test(t.charAt(qa))?(e=t.charAt(qa),qa++):(e=null,0===Ga&&i(la)),e}function N(){var e;return ca.test(t.charAt(qa))?(e=t.charAt(qa),qa++):(e=null,0===Ga&&i(ua)),e}function F(){var t,e;for(t=[],e=q(),null===e&&(e=V());null!==e;)t.push(e),e=q(),null===e&&(e=V());return t}function q(){var e,n;return Ga++,da.test(t.charAt(qa))?(e=t.charAt(qa),qa++):(e=null,0===Ga&&i(pa)),null===e&&(ga.test(t.charAt(qa))?(e=t.charAt(qa),qa++):(e=null,0===Ga&&i(ma))),Ga--,null===e&&(n=null,0===Ga&&i(ha)),e}function V(){var e,n;return Ga++,fa.test(t.charAt(qa))?(e=t.charAt(qa),qa++):(e=null,0===Ga&&i(La)),Ga--,null===e&&(n=null,0===Ga&&i(va)),e}function W(){var t,e,n,i;if(t=qa,e=F(),null!==e){for(n=[],i=U();null!==i;)n.push(i),i=U();null!==n?(i=F(),null!==i?(Va=t,e=ya(n),null===e?(qa=t,t=e):t=e):(qa=t,t=Q)):(qa=t,t=Q)}else qa=t,t=Q;return t}function U(){var e,n,a,r,s,o,l,c,u,h;return e=qa,64===t.charCodeAt(qa)?(n=An,qa++):(n=null,0===Ga&&i(jn)),null!==n?(a=b(),null!==a?(r=F(),null!==r?(s=H(),null===s&&(s=ce),null!==s?(123===t.charCodeAt(qa)?(o=gn,qa++):(o=null,0===Ga&&i(mn)),null!==o?(l=F(),null!==l?(c=Y(),null!==c?(125===t.charCodeAt(qa)?(u=vn,qa++):(u=null,0===Ga&&i(fn)),null!==u?(h=F(),null!==h?(Va=e,n=_a(a,s,c),null===n?(qa=e,e=n):e=n):(qa=e,e=Q)):(qa=e,e=Q)):(qa=e,e=Q)):(qa=e,e=Q)):(qa=e,e=Q)):(qa=e,e=Q)):(qa=e,e=Q)):(qa=e,e=Q)):(qa=e,e=Q),e}function H(){var e,n,a,s,o,l,c,u;return e=qa,60===t.charCodeAt(qa)?(n=ze,qa++):(n=null,0===Ga&&i(Se)),null===n&&(58===t.charCodeAt(qa)?(n=de,qa++):(n=null,0===Ga&&i(pe))),null!==n?(a=F(),null!==a?(s=C(),null===s&&(s=ce),null!==s?(o=F(),null!==o?(l=qa,c=qa,Ga++,123===t.charCodeAt(qa)?(u=gn,qa++):(u=null,0===Ga&&i(mn)),Ga--,null===u?c=ce:(qa=c,c=Q),null!==c?(u=r(),null!==u?(c=[c,u],l=c):(qa=l,l=Q)):(qa=l,l=Q),null===l&&(l=ce),null!==l?(c=F(),null!==c?(Va=e,n=ba(n,s,l),null===n?(qa=e,e=n):e=n):(qa=e,e=Q)):(qa=e,e=Q)):(qa=e,e=Q)):(qa=e,e=Q)):(qa=e,e=Q)):(qa=e,e=Q),null===e&&(e=qa,n=F(),null!==n&&(Va=e,n=Ca()),null===n?(qa=e,e=n):e=n),e}function Y(){var e,n,a,r,s,o,l,c,u;if(e=qa,n=G(),null!==n)if(a=F(),null!==a){for(r=[],s=qa,59===t.charCodeAt(qa)?(o=wa,qa++):(o=null,0===Ga&&i(xa)),null!==o?(l=F(),null!==l?(c=G(),null!==c?(u=F(),null!==u?(o=[o,l,c,u],s=o):(qa=s,s=Q)):(qa=s,s=Q)):(qa=s,s=Q)):(qa=s,s=Q);null!==s;)r.push(s),s=qa,59===t.charCodeAt(qa)?(o=wa,qa++):(o=null,0===Ga&&i(xa)),null!==o?(l=F(),null!==l?(c=G(),null!==c?(u=F(),null!==u?(o=[o,l,c,u],s=o):(qa=s,s=Q)):(qa=s,s=Q)):(qa=s,s=Q)):(qa=s,s=Q);null!==r?(59===t.charCodeAt(qa)?(s=wa,qa++):(s=null,0===Ga&&i(xa)),null===s&&(s=ce),null!==s?(o=F(),null!==o?(Va=e,n=ne(n,r),null===n?(qa=e,e=n):e=n):(qa=e,e=Q)):(qa=e,e=Q)):(qa=e,e=Q)}else qa=e,e=Q;else qa=e,e=Q;return null===e&&(e=qa,n=G(),null!==n?(a=F(),null!==a?(59===t.charCodeAt(qa)?(r=wa,qa++):(r=null,0===Ga&&i(xa)),null===r&&(r=ce),null!==r?(s=F(),null!==s?(Va=e,n=Ma(n),null===n?(qa=e,e=n):e=n):(qa=e,e=Q)):(qa=e,e=Q)):(qa=e,e=Q)):(qa=e,e=Q),null===e&&(e=qa,n=F(),null!==n&&(Va=e,n=oe()),null===n?(qa=e,e=n):e=n)),e}function G(){var e,n,a,s,o,l,c,u,h,d,p,g,m,v,f,L,y;if(e=qa,t.substr(qa,2)===za?(n=za,qa+=2):(n=null,0===Ga&&i(Sa)),null===n&&(t.substr(qa,6)===Ea?(n=Ea,qa+=6):(n=null,0===Ga&&i(Ta))),null!==n?(32===t.charCodeAt(qa)?(a=Pa,qa++):(a=null,0===Ga&&i(Oa)),null!==a?(s=F(),null!==s?(o=b(),null!==o?(l=F(),null!==l?(t.substr(qa,2)===Da?(c=Da,qa+=2):(c=null,0===Ga&&i(ka)),null!==c?(u=F(),null!==u?(h=r(),null!==h?(d=F(),null!==d?(Va=e,n=Ba(n,o,h),null===n?(qa=e,e=n):e=n):(qa=e,e=Q)):(qa=e,e=Q)):(qa=e,e=Q)):(qa=e,e=Q)):(qa=e,e=Q)):(qa=e,e=Q)):(qa=e,e=Q)):(qa=e,e=Q)):(qa=e,e=Q),null===e){if(e=qa,n=r(),null!==n)if(a=F(),null!==a)if(58===t.charCodeAt(qa)?(s=de,qa++):(s=null,0===Ga&&i(pe)),null===s&&(t.substr(qa,3)===Aa?(s=Aa,qa+=3):(s=null,0===Ga&&i(ja)),null===s&&(t.substr(qa,2)===Ia?(s=Ia,qa+=2):(s=null,0===Ga&&i(Ra)))),null!==s)if(o=F(),null!==o)if(l=r(),null!==l)if(c=F(),null!==c){for(u=[],h=qa,44===t.charCodeAt(qa)?(d=te,qa++):(d=null,0===Ga&&i(ee)),null!==d?(p=F(),null!==p?(g=b(),null!==g?(m=F(),null!==m?(58===t.charCodeAt(qa)?(v=de,qa++):(v=null,0===Ga&&i(pe)),null!==v?(f=F(),null!==f?(L=r(),null!==L?(y=F(),null!==y?(d=[d,p,g,m,v,f,L,y],h=d):(qa=h,h=Q)):(qa=h,h=Q)):(qa=h,h=Q)):(qa=h,h=Q)):(qa=h,h=Q)):(qa=h,h=Q)):(qa=h,h=Q)):(qa=h,h=Q);null!==h;)u.push(h),h=qa,44===t.charCodeAt(qa)?(d=te,qa++):(d=null,0===Ga&&i(ee)),null!==d?(p=F(),null!==p?(g=b(),null!==g?(m=F(),null!==m?(58===t.charCodeAt(qa)?(v=de,qa++):(v=null,0===Ga&&i(pe)),null!==v?(f=F(),null!==f?(L=r(),null!==L?(y=F(),null!==y?(d=[d,p,g,m,v,f,L,y],h=d):(qa=h,h=Q)):(qa=h,h=Q)):(qa=h,h=Q)):(qa=h,h=Q)):(qa=h,h=Q)):(qa=h,h=Q)):(qa=h,h=Q)):(qa=h,h=Q);null!==u?(Va=e,n=Na(n,s,l,u),null===n?(qa=e,e=n):e=n):(qa=e,e=Q)}else qa=e,e=Q;else qa=e,e=Q;else qa=e,e=Q;else qa=e,e=Q;else qa=e,e=Q;else qa=e,e=Q;null===e&&(e=qa,n=b(),null!==n?(a=F(),null!==a?(s=r(),null!==s?(o=F(),null!==o?(Va=e,n=Fa(n,s),null===n?(qa=e,e=n):e=n):(qa=e,e=Q)):(qa=e,e=Q)):(qa=e,e=Q)):(qa=e,e=Q))}return e}var X,K=arguments.length>1?arguments[1]:{},Z={expression:r,sheet:W},J=r,$="expression",Q=null,te=",",ee='","',ne=function(t,e){for(var n=[t],i=0;e.length>i;i++)n.push(e[i][2]);return n},ie="(",ae='"("',re=")",se='")"',oe=function(){return[]},le=function(t){return t},ce="",ue="?",he='"?"',de=":",pe='":"',ge=function(t,e){if(e){var n=e[2],i=e[6];return{type:"if",args:[t,n,i]}}return t},me="||",ve='"||"',fe=function(t,e){for(var n=0;e.length>n;n++)t={type:Xa[e[n][1]],args:[t,e[n][3]]};return t},Le="&&",ye='"&&"',_e="<=>",be='"<=>"',Ce="<=",we='"<="',xe=">=",Me='">="',ze="<",Se='"<"',Ee="-",Te='"-"',Pe=">",Oe='">"',De="==",ke='"=="',Be="!=",Ae='"!="',je=function(t,e){if(e){var n=e[1],i=e[3];return"!="===n?{type:"not",args:[{type:"equals",args:[t,i]}]}:{type:Xa[n],args:[t,i]}}return t},Ie="+",Re='"+"',Ne="*",Fe='"*"',qe="/",Ve='"/"',We="%",Ue='"%"',He="rem",Ye='"rem"',Ge="**",Xe='"**"',Ke="//",Ze='"//"',Je="%%",$e='"%%"',Qe="??",tn='"??"',en="!",nn='"!"',an=function(t,e){return{type:Ka[t],args:[e]}},rn=function(t,e){for(var n=0;e.length>n;n++)t=e[n](t);return t},sn=".",on='"."',ln=function(t){return t},cn="[",un='"["',hn="]",dn='"]"',pn=function(t){return function(e){return{type:"property",args:[e,t]}}},gn="{",mn='"{"',vn="}",fn='"}"',Ln=function(t,e){return Za[t]?function(n){return{type:Za[t],args:[n,e]}}:"value"===e.type?function(e){return{type:t,args:[e]}}:function(n){return{type:t,args:[{type:"mapBlock",args:[n,e]}]}}},yn=function(t,e){return function(n){return{type:t,args:[n].concat(e)}}},_n=function(t){return function(e){return{type:"property",args:[e,{type:"literal",value:+t.join("")}]}}},bn=function(t){return function(e){return{type:"property",args:[e,{type:"literal",value:t}]}}},Cn=function(t){return function(e){return{type:"with",args:[e,t]}}},wn="this",xn='"this"',Mn=function(){return{type:"value"}},zn="true",Sn='"true"',En=function(){return{type:"literal",value:!0}},Tn="false",Pn='"false"',On=function(){return{type:"literal",value:!1}},Dn="null",kn='"null"',Bn=function(){return{type:"literal",value:null}},An="@",jn='"@"',In=function(t){return{type:"component",label:t}},Rn="$",Nn='"$"',Fn=function(t){return{type:"property",args:[{type:"parameters"},{type:"literal",value:t}]}},qn=function(){return{type:"parameters"}},Vn="#",Wn='"#"',Un=function(t){return{type:"element",id:t}},Hn="&",Yn='"&"',Gn=function(t,e){return{type:t,args:e,inline:!0}},Xn="^",Kn='"^"',Zn=function(t){return{type:"parent",args:[t]}},Jn=function(t){return t},$n=function(t){return t({type:"value"})},Qn=function(){return{type:"value"}},ti="word",ei=/^[a-zA-Z_0-9\-]/,ni="[a-zA-Z_0-9\\-]",ii=function(t){return t.join("")},ai="string",ri="'",si='"\'"',oi=function(t){return{type:"literal",value:t.join("")}},li='"',ci='"\\""',ui=/^[^'\\\0-\x1F]/,hi="[^'\\\\\\0-\\x1F]",di="\\'",pi='"\\\\\'"',gi=function(){return"'"},mi=/^[^"\\\0-\x1F]/,vi='[^"\\\\\\0-\\x1F]',fi='\\"',Li='"\\\\\\""',yi=function(){return'"'},_i="\\\\",bi='"\\\\\\\\"',Ci=function(){return"\\"},wi="\\/",xi='"\\\\/"',Mi=function(){return"/"},zi="\\b",Si='"\\\\b"',Ei=function(){return"\b"},Ti="\\f",Pi='"\\\\f"',Oi=function(){return"\f"},Di="\\n",ki='"\\\\n"',Bi=function(){return"\n"},Ai="\\r",ji='"\\\\r"',Ii=function(){return"\r"},Ri="\\t",Ni='"\\\\t"',Fi=function(){return"	"},qi="\\0",Vi='"\\\\0"',Wi=function(){return"\0"},Ui="\\u",Hi='"\\\\u"',Yi=function(t){return String.fromCharCode(parseInt(t,16))},Gi=/^[0-9a-fA-F]/,Xi="[0-9a-fA-F]",Ki=function(){return{type:"tuple",args:[]}},Zi=function(t){return{type:"tuple",args:t}},Ji=function(){return{type:"record",args:[]}},$i=function(t){return{type:"record",args:t}},Qi=function(t,e){var n={};n[t[0]]=t[1];for(var i=0;e.length>i;i++)n[e[i][2][0]]=e[i][2][1];return n},ta=function(t,e){return[t,e]},ea="number",na=function(t){return{type:"literal",value:+t}},ia=/^[eE]/,aa="[eE]",ra=/^[+\-]/,sa="[+\\-]",oa=/^[0-9]/,la="[0-9]",ca=/^[1-9]/,ua="[1-9]",ha="whitespace",da=/^[\t\x0B\f \xA0\uFEFF]/,pa="[\\t\\x0B\\f \\xA0\\uFEFF]",ga=/^[ \xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000]/,ma="[ \\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000]",va="line terminator",fa=/^[\n\r\u2028\u2029]/,La="[\\n\\r\\u2028\\u2029]",ya=function(t){return{type:"sheet",blocks:t}},_a=function(t,e,n){return{type:"block",connection:e.connection,module:e.module,exports:e.exports,label:t,statements:n}},ba=function(t,e,n){return{connection:{"<":"prototype",":":"object"}[t],module:e&&e.value,exports:""!==n?n[1]:void 0}},Ca=function(){return{}},wa=";",xa='";"',Ma=function(t){return[t]},za="on",Sa='"on"',Ea="before",Ta='"before"',Pa=" ",Oa='" "',Da="->",ka='"->"',Ba=function(t,e,n){return{type:"event",when:t,event:e,listener:n}},Aa="<->",ja='"<->"',Ia="<-",Ra='"<-"',Na=function(t,e,n,i){var a={type:Ja[e],args:[t,n]};if(i.length){for(var r={},s=0;i.length>s;s++)r[i[s][2]]=i[s][6];a.descriptor=r}return a},Fa=function(t,e){return{type:"unit",name:t,value:e}},qa=0,Va=0,Wa=0,Ua={line:1,column:1,seenCR:!1},Ha=0,Ya=[],Ga=0;if("startRule"in K){if(!(K.startRule in Z))throw Error("Can't start parsing from rule \""+K.startRule+'".');J=Z[K.startRule]}var Xa={"**":"pow","//":"root","%%":"log","*":"mul","/":"div","%":"mod",rem:"rem","+":"add","-":"sub","<":"lt",">":"gt","<=":"le",">=":"ge","==":"equals","<=>":"compare","??":"default","&&":"and","||":"or","<-":"bind","<->":"bind2",":":"assign"},Ka={"+":"toNumber","-":"neg","!":"not","^":"parent"},Za={map:"mapBlock",filter:"filterBlock",some:"someBlock",every:"everyBlock",sorted:"sortedBlock",sortedSet:"sortedSetBlock",group:"groupBlock",groupMap:"groupMapBlock",min:"minBlock",max:"maxBlock"},Ja={":":"assign","<-":"bind","<->":"bind2"};if(X=J(),null!==X&&qa===t.length)return X;throw a(Ya),Va=Math.max(qa,Ha),new e(Ya,t.length>Va?t.charAt(Va):null,Va,n(Va).line,n(Va).column)}return t(e,Error),{SyntaxError:e,parse:n}}();