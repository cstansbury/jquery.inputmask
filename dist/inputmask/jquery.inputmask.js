/*
 Input Mask plugin for jquery
 http://github.com/RobinHerbots/jquery.inputmask
 Copyright (c) 2010 - 2014 Robin Herbots
 Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 Version: 3.0.73
*/
(function(e){"function"===typeof define&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){if(void 0===e.fn.inputmask){var U=function(e){var f=document.createElement("input");e="on"+e;var d=e in f;d||(f.setAttribute(e,"return;"),d="function"==typeof f[e]);return d},D=function(b,f,d){return(b=d.aliases[b])?(b.alias&&D(b.alias,void 0,d),e.extend(!0,d,b),e.extend(!0,d,f),!0):!1},P=function(b,f){function d(d){function e(d,f,b,k){this.matches=[];this.isGroup=d||!1;this.isOptional=f||!1;this.isQuantifier=
b||!1;this.isAlternator=k||!1;this.quantifier={min:1,max:1}}function f(d,e,k){var l=b.definitions[e],q=0==d.matches.length;k=void 0!=k?k:d.matches.length;if(l&&!r){for(var H=l.prevalidator,t=H?H.length:0,n=1;n<l.cardinality;n++){var s=t>=n?H[n-1]:[],w=s.validator,s=s.cardinality;d.matches.splice(k++,0,{fn:w?"string"==typeof w?RegExp(w):new function(){this.test=w}:/./,cardinality:s?s:1,optionality:d.isOptional,newBlockMarker:q,casing:l.casing,def:l.definitionSymbol||e,placeholder:l.placeholder,mask:e})}d.matches.splice(k++,
0,{fn:l.validator?"string"==typeof l.validator?RegExp(l.validator):new function(){this.test=l.validator}:/./,cardinality:l.cardinality,optionality:d.isOptional,newBlockMarker:q,casing:l.casing,def:l.definitionSymbol||e,placeholder:l.placeholder,mask:e})}else d.matches.splice(k++,0,{fn:null,cardinality:0,optionality:d.isOptional,newBlockMarker:q,casing:null,def:e,placeholder:void 0,mask:e}),r=!1}for(var q=/(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})\??|[^.?*+^${[]()|\\]+|./g,r=!1,n=new e,k,s=[],z=[],
t,l;k=q.exec(d);)switch(k=k[0],k.charAt(0)){case b.optionalmarker.end:case b.groupmarker.end:k=s.pop();if(0<s.length){if(t=s[s.length-1],t.matches.push(k),t.isAlternator){k=s.pop();for(t=0;t<k.matches.length;t++)k.matches[t].isGroup=!1;0<s.length?(t=s[s.length-1],t.matches.push(k)):n.matches.push(k)}}else n.matches.push(k);break;case b.optionalmarker.start:s.push(new e(!1,!0));break;case b.groupmarker.start:s.push(new e(!0));break;case b.quantifiermarker.start:t=new e(!1,!1,!0);k=k.replace(/[{}]/g,
"");l=k.split(",");k=isNaN(l[0])?l[0]:parseInt(l[0]);l=1==l.length?k:isNaN(l[1])?l[1]:parseInt(l[1]);if("*"==l||"+"==l)k="*"==l?0:1;t.quantifier={min:k,max:l};if(0<s.length){l=s[s.length-1].matches;k=l.pop();if(!k.isGroup){var y=new e(!0);y.matches.push(k);k=y}l.push(k);l.push(t)}else k=n.matches.pop(),k.isGroup||(y=new e(!0),y.matches.push(k),k=y),n.matches.push(k),n.matches.push(t);break;case b.escapeChar:r=!0;break;case b.alternatormarker:0<s.length?(t=s[s.length-1],l=t.matches.pop()):l=n.matches.pop();
l.isAlternator?s.push(l):(k=new e(!1,!1,!1,!0),k.matches.push(l),s.push(k));break;default:if(0<s.length){if(t=s[s.length-1],0<t.matches.length&&(l=t.matches[t.matches.length-1],l.isGroup&&(l.isGroup=!1,f(l,b.groupmarker.start,0),f(l,b.groupmarker.end))),f(t,k),t.isAlternator){k=s.pop();for(t=0;t<k.matches.length;t++)k.matches[t].isGroup=!1;0<s.length?(t=s[s.length-1],t.matches.push(k)):n.matches.push(k)}}else 0<n.matches.length&&(l=n.matches[n.matches.length-1],l.isGroup&&(l.isGroup=!1,f(l,b.groupmarker.start,
0),f(l,b.groupmarker.end))),f(n,k)}0<n.matches.length&&(l=n.matches[n.matches.length-1],l.isGroup&&(l.isGroup=!1,f(l,b.groupmarker.start,0),f(l,b.groupmarker.end)),z.push(n));return z}function y(f,q){if(b.numericInput&&!0!==b.multi){f=f.split("").reverse();for(var r=0;r<f.length;r++)f[r]==b.optionalmarker.start?f[r]=b.optionalmarker.end:f[r]==b.optionalmarker.end?f[r]=b.optionalmarker.start:f[r]==b.groupmarker.start?f[r]=b.groupmarker.end:f[r]==b.groupmarker.end&&(f[r]=b.groupmarker.start);f=f.join("")}if(void 0!=
f&&""!=f){if(0<b.repeat||"*"==b.repeat||"+"==b.repeat)f=b.groupmarker.start+f+b.groupmarker.end+b.quantifiermarker.start+("*"==b.repeat?0:"+"==b.repeat?1:b.repeat)+","+b.repeat+b.quantifiermarker.end;void 0==e.inputmask.masksCache[f]&&(e.inputmask.masksCache[f]={mask:f,maskToken:d(f),validPositions:{},_buffer:void 0,buffer:void 0,tests:{},metadata:q});return e.extend(!0,{},e.inputmask.masksCache[f])}}var z=[];e.isFunction(b.mask)&&(b.mask=b.mask.call(this,b));if(e.isArray(b.mask))if(f)e.each(b.mask,
function(d,e){void 0!=e.mask?z.push(y(e.mask.toString(),e)):z.push(y(e.toString()))});else{b.keepStatic=void 0==b.keepStatic?!0:b.keepStatic;var r=!1,q="(";e.each(b.mask,function(d,e){1<q.length&&(q+=")|(");void 0!=e.mask?(r=!0,q+=e.mask.toString()):q+=e.toString()});q+=")";z=y(q,r?b.mask:void 0)}else 1==b.mask.length&&!1==b.greedy&&0!=b.repeat&&(b.placeholder=""),z=void 0!=b.mask.mask?y(b.mask.mask.toString(),b.mask):y(b.mask.toString());return z},ia="function"===typeof ScriptEngineMajorVersion?
ScriptEngineMajorVersion():10<=(new Function("/*@cc_on return @_jscript_version; @*/"))(),u=navigator.userAgent,ja=null!==u.match(/iphone/i),ka=null!==u.match(/android.*safari.*/i),la=null!==u.match(/android.*chrome.*/i),ma=null!==u.match(/android.*firefox.*/i),na=/Kindle/i.test(u)||/Silk/i.test(u)||/KFTT/i.test(u)||/KFOT/i.test(u)||/KFJWA/i.test(u)||/KFJWI/i.test(u)||/KFSOWI/i.test(u)||/KFTHWA/i.test(u)||/KFTHWI/i.test(u)||/KFAPWA/i.test(u)||/KFAPWI/i.test(u),Y=U("paste")?"paste":U("input")?"input":
"propertychange",J=function(b,f,d){function y(a,c,g){c=c||0;var e=[],b,k=0,p;do{if(!0===a&&f.validPositions[k]){var m=f.validPositions[k];p=m.match;b=m.locator.slice();e.push(null==p.fn?p.def:!0===g?m.input:p.placeholder||d.placeholder.charAt(k%d.placeholder.length))}else b=c>k?K(k,b,k-1)[0]:u(k,b,k-1),p=b.match,b=b.locator.slice(),e.push(null==p.fn?p.def:void 0!=p.placeholder?p.placeholder:d.placeholder.charAt(k%d.placeholder.length));k++}while((void 0==L||k-1<L)&&null!=p.fn||null==p.fn&&""!=p.def||
c>=k);e.pop();return e}function z(a){var c=f;c.buffer=void 0;c.tests={};!0!==a&&(c._buffer=void 0,c.validPositions={},c.p=-1)}function r(a){var c=-1,g=f.validPositions;void 0==a&&(a=-1);var d=c,e;for(e in g){var k=parseInt(e);if(-1==a||null!=g[k].match.fn)k<a&&(d=k),k>=a&&(c=k)}return 1<a-d||c<a?d:c}function q(a,c,g){if(d.insertMode&&void 0!=f.validPositions[a]&&void 0==g){g=e.extend(!0,{},f.validPositions);var k=r(),b;for(b=a;b<=k;b++)delete f.validPositions[b];f.validPositions[a]=c;c=!0;for(b=a;b<=
k;b++){a=g[b];if(void 0!=a){var x=null==a.match.fn?b+1:B(b);c=J(x,a.match.def)?c&&!1!==t(x,a.input,!0,!0):!1}if(!c)break}if(!c)return f.validPositions=e.extend(!0,{},g),!1}else f.validPositions[a]=c;return!0}function H(a,c){var g,d=a;for(g=a;g<c;g++)delete f.validPositions[g];for(g=c;g<=r();){var e=f.validPositions[g],k=f.validPositions[d];void 0!=e&&void 0==k?(J(d,e.match.def)&&!1!==t(d,e.input,!0)&&(delete f.validPositions[g],g++),d++):g++}for(g=r();0<g&&(void 0==f.validPositions[g]||null==f.validPositions[g].match.fn);)delete f.validPositions[g],
g--;z(!0)}function u(a,c,g){a=K(a,c,g);var k;c=r();c=f.validPositions[c]||K(0)[0];g=void 0!=c.alternation?c.locator[c.alternation].split(","):[];for(var b=0;b<a.length&&(k=a[b],!d.greedy&&(!k.match||!1!==k.match.optionality&&!1!==k.match.newBlockMarker||!0===k.match.optionalQuantifier||void 0!=c.alternation&&(void 0==k.locator[c.alternation]||-1!=e.inArray(k.locator[c.alternation].toString(),g))));b++);return k}function D(a){return f.validPositions[a]?f.validPositions[a].match:K(a)[0].match}function J(a,
c){for(var d=!1,e=K(a),f=0;f<e.length;f++)if(e[f].match&&e[f].match.def==c){d=!0;break}return d}function K(a,c,g){function k(c,g,b,l){function C(b,l,h){if(1E4<x)return alert("jquery.inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. "+f.mask),!0;if(x==a&&void 0==b.matches)return p.push({match:b,locator:l.reverse()}),!0;if(void 0!=b.matches)if(b.isGroup&&!0!==h){if(b=C(c.matches[q+1],l))return!0}else if(b.isOptional){var r=
b;if(b=k(b,g,l,h))b=p[p.length-1].match,(b=0==e.inArray(b,r.matches))&&(m=!0),x=a}else if(b.isAlternator){var r=b,t=[],s,w=p.slice(),n=l.length,M=0<g.length?g.shift():-1;if(-1==M||"string"==typeof M){var y=x,z=g.slice(),aa;"string"==typeof M&&(aa=M.split(","));for(var u=0;u<r.matches.length;u++){p=[];b=C(r.matches[u],[u].concat(l),h)||b;s=p.slice();x=y;p=[];for(var v=0;v<z.length;v++)g[v]=z[v];for(v=0;v<s.length;v++)for(var H=s[v],A=0;A<t.length;A++){var B=t[A];if(H.match.mask==B.match.mask&&("string"!=
typeof M||-1!=e.inArray(H.locator[n].toString(),aa))){s.splice(v,1);B.locator[n]=B.locator[n]+","+H.locator[n];B.alternation=n;break}}t=t.concat(s)}"string"==typeof M&&(t=e.map(t,function(a,c){if(isFinite(c)){var g=a.locator[n].toString().split(","),d;a.locator[n]=void 0;a.alternation=void 0;for(var b=0;b<g.length;b++)if(d=-1!=e.inArray(g[b],aa))void 0!=a.locator[n]?(a.locator[n]+=",",a.alternation=n,a.locator[n]+=g[b]):a.locator[n]=parseInt(g[b]);if(void 0!=a.locator[n])return a}}));p=w.concat(t);
m=!0}else b=C(r.matches[M],[M].concat(l),h);if(b)return!0}else if(b.isQuantifier&&!0!==h)for(r=b,d.greedy=d.greedy&&isFinite(r.quantifier.max),h=0<g.length&&!0!==h?g.shift():0;h<(isNaN(r.quantifier.max)?h+1:r.quantifier.max)&&x<=a;h++){if(t=c.matches[e.inArray(r,c.matches)-1],b=C(t,[h].concat(l),!0))if(b=p[p.length-1].match,b.optionalQuantifier=h>r.quantifier.min-1,b=0==e.inArray(b,t.matches))if(h>r.quantifier.min-1){m=!0;x=a;break}else return!0;else return!0}else{if(b=k(b,g,l,h))return!0}else x++}
for(var q=0<g.length?g.shift():0;q<c.matches.length;q++)if(!0!==c.matches[q].isQuantifier){var h=C(c.matches[q],[q].concat(b),l);if(h&&x==a)return h;if(x>a)break}}var b=f.maskToken,x=c?g:0;g=c||[0];var p=[],m=!1;if(void 0==c){c=a-1;for(var l;void 0==(l=f.validPositions[c])&&-1<c;)c--;if(void 0!=l&&-1<c)x=c,g=l.locator.slice();else{for(c=a-1;void 0==(l=f.tests[c])&&-1<c;)c--;void 0!=l&&-1<c&&(x=c,g=l[0].locator.slice())}}for(c=g.shift();c<b.length&&!(k(b[c],g,[c])&&x==a||x>a);c++);(0==p.length||m)&&
p.push({match:{fn:null,cardinality:0,optionality:!0,casing:null,def:""},locator:[]});f.tests[a]=e.extend(!0,[],p);return f.tests[a]}function n(){void 0==f._buffer&&(f._buffer=y(!1,1));return f._buffer}function k(){void 0==f.buffer&&(f.buffer=y(!0,r(),!0));return f.buffer}function s(a,c){var g=k().slice();if(!0===a)z(),a=0,c=g.length;else for(var e=a;e<c;e++)delete f.validPositions[e],delete f.tests[e];for(e=a;e<c;e++)g[e]!=d.skipOptionalPartCharacter&&t(e,g[e],!0,!0)}function P(a,c){switch(c.casing){case "upper":a=
a.toUpperCase();break;case "lower":a=a.toLowerCase()}return a}function t(a,c,g,b){function h(a,c,g,b){var m=!1;e.each(K(a),function(p,l){var F=l.match,x=c?1:0,h="";k();for(var C=F.cardinality;C>x;C--)h+=void 0==f.validPositions[a-(C-1)]?V(a-(C-1)):f.validPositions[a-(C-1)].input;c&&(h+=c);m=null!=F.fn?F.fn.test(h,f,a,g,d):c!=F.def&&c!=d.skipOptionalPartCharacter||""==F.def?!1:{c:F.def,pos:a};if(!1!==m){x=void 0!=m.c?m.c:c;x=x==d.skipOptionalPartCharacter&&null===F.fn?F.def:x;h=a;void 0!=m.remove&&
H(m.remove,m.remove+1);if(m.refreshFromBuffer){h=m.refreshFromBuffer;g=!0;s(!0===h?h:h.start,h.end);if(void 0==m.pos&&void 0==m.c)return m.pos=r(),!1;h=void 0!=m.pos?m.pos:a;if(h!=a)return m=e.extend(m,t(h,x,!0)),!1}else if(!0!==m&&void 0!=m.pos&&m.pos!=a&&(h=m.pos,s(a,h),h!=a))return m=e.extend(m,t(h,x,!0)),!1;if(!0!=m&&void 0==m.pos&&void 0==m.c)return!1;0<p&&z(!0);q(h,e.extend({},l,{input:P(x,F)}),b)||(m=!1);return!1}});return m}function x(a,c,g,b){if(d.keepStatic){var m=e.extend(!0,{},f.validPositions),
p,h;for(p=r();0<=p;p--)if(f.validPositions[p]&&void 0!=f.validPositions[p].alternation){h=f.validPositions[p].alternation;break}if(void 0!=h)for(var l in f.validPositions)if(parseInt(l)>parseInt(p)&&void 0===f.validPositions[l].alternation){var F=f.validPositions[l].locator[h];p=f.validPositions[p].locator[h].split(",");for(var x=0;x<p.length;x++)if(F<p[x]){for(var C,q,n=l-1;0<=n;n--)if(C=f.validPositions[n],void 0!=C){q=C.locator[h];C.locator[h]=p[x];break}if(F!=C.locator[h]){for(var n=k().slice(),
s=l;s<r()+1;s++)delete f.validPositions[s],delete f.tests[s];z(!0);d.keepStatic=!d.keepStatic;for(s=l;s<n.length;s++)n[s]!=d.skipOptionalPartCharacter&&t(r()+1,n[s],!1,!0);C.locator[h]=q;n=t(a,c,g,b);d.keepStatic=!d.keepStatic;if(n)return n;z();f.validPositions=e.extend(!0,{},m)}}break}}return!1}g=!0===g;for(var p=k(),m=a-1;-1<m&&(!f.validPositions[m]||null!=f.validPositions[m].fn);m--)(!l(m)||p[m]!=V(m))&&1<K(m).length&&h(m,p[m],!0);p=a;if(p>=S())return x(a,c,g,b);a=h(p,c,g,b);if(!g&&!1===a)if((m=
f.validPositions[p])&&null==m.match.fn&&(m.match.def==c||c==d.skipOptionalPartCharacter))a={caret:B(p)};else if((d.insertMode||void 0==f.validPositions[B(p)])&&!l(p))for(var m=p+1,n=B(p);m<=n;m++)if(a=h(m,c,g,b),!1!==a){p=m;break}!0===a&&(a={pos:p});return a}function l(a){a=D(a);return null!=a.fn?a.fn:!1}function S(){var a;L=h.prop("maxLength");-1==L&&(L=void 0);if(!1==d.greedy){var c;c=r();a=f.validPositions[c];var g=void 0!=a?a.locator.slice():void 0;for(c+=1;void 0==a||null!=a.match.fn||null==
a.match.fn&&""!=a.match.def;c++)a=u(c,g,c-1),g=a.locator.slice();a=c}else a=k().length;return void 0==L||a<L?a:L}function B(a){var c=S();if(a>=c)return c;for(;++a<c&&!l(a)&&(!0!==d.nojumps||d.nojumpsThreshold>a););return a}function Q(a){if(0>=a)return 0;for(;0<--a&&!l(a););return a}function E(a,c,g){a._valueSet(c.join(""));void 0!=g&&w(a,g)}function V(a,c){c=c||D(a);return c.placeholder||(null==c.fn?c.def:d.placeholder.charAt(a%d.placeholder.length))}function R(a,c,g,b,h){b=void 0!=b?b.slice():ha(a._valueGet()).split("");
z();c&&a._valueSet("");e.each(b,function(c,d){if(!0===h){var b=f.p,b=-1==b?b:Q(b),k=-1==b?c:B(b);-1==e.inArray(d,n().slice(b+1,k))&&W.call(a,void 0,!0,d.charCodeAt(0),!1,g,c)}else W.call(a,void 0,!0,d.charCodeAt(0),!1,g,c),g=g||0<c&&c>f.p});c&&(c=d.onKeyPress.call(this,void 0,k(),0,d),Z(a,c),E(a,k(),e(a).is(":focus")?B(r(0)):void 0))}function U(a){return e.inputmask.escapeRegex.call(this,a)}function ha(a){return a.replace(RegExp("("+U(n().join(""))+")*$"),"")}function da(a){if(a.data("_inputmask")&&
!a.hasClass("hasDatepicker")){var c=[],g=f.validPositions,b;for(b in g)g[b].match&&null!=g[b].match.fn&&c.push(g[b].input);c=(A?c.reverse():c).join("");g=(A?k().slice().reverse():k()).join("");e.isFunction(d.onUnMask)&&(c=d.onUnMask.call(a,g,c,d));return c}return a[0]._valueGet()}function O(a){!A||"number"!=typeof a||d.greedy&&""==d.placeholder||(a=k().length-a);return a}function w(a,c,g){a=a.jquery&&0<a.length?a[0]:a;if("number"==typeof c){c=O(c);g=O(g);g="number"==typeof g?g:c;var b=e(a).data("_inputmask")||
{};b.caret={begin:c,end:g};e(a).data("_inputmask",b);e(a).is(":visible")&&(a.scrollLeft=a.scrollWidth,!1==d.insertMode&&c==g&&g++,a.setSelectionRange?(a.selectionStart=c,a.selectionEnd=g):a.createTextRange&&(a=a.createTextRange(),a.collapse(!0),a.moveEnd("character",g),a.moveStart("character",c),a.select()))}else return b=e(a).data("_inputmask"),!e(a).is(":visible")&&b&&void 0!=b.caret?(c=b.caret.begin,g=b.caret.end):a.setSelectionRange?(c=a.selectionStart,g=a.selectionEnd):document.selection&&document.selection.createRange&&
(a=document.selection.createRange(),c=0-a.duplicate().moveStart("character",-1E5),g=c+a.text.length),c=O(c),g=O(g),{begin:c,end:g}}function ba(a){var c=k(),g=c.length,d,b=r(),h={},p=f.validPositions[b],m=void 0!=p?p.locator.slice():void 0,l;for(d=b+1;d<c.length;d++)l=u(d,m,d-1),m=l.locator.slice(),h[d]=e.extend(!0,{},l);m=p&&void 0!=p.alternation?p.locator[p.alternation].split(","):[];for(d=g-1;d>b;d--)if(l=h[d].match,(l.optionality||l.optionalQuantifier||p&&void 0!=p.alternation&&void 0!=h[d].locator[p.alternation]&&
-1!=e.inArray(h[d].locator[p.alternation].toString(),m))&&c[d]==V(d,l))g--;else break;return a?{l:g,def:h[g]?h[g].match:void 0}:g}function ca(a){var c=k().slice(),d=ba();c.length=d;E(a,c)}function T(a){if(e.isFunction(d.isComplete))return d.isComplete.call(h,a,d);if("*"!=d.repeat){var c=!1,b=ba(!0),f=Q(b.l);if(r()==f&&(void 0==b.def||b.def.newBlockMarker||b.def.optionalQuantifier))for(c=!0,b=0;b<=f;b++){var k=l(b);if(k&&(void 0==a[b]||a[b]==V(b))||!k&&a[b]!=V(b)){c=!1;break}}return c}}function oa(a){a=
e._data(a).events;e.each(a,function(a,b){e.each(b,function(a,c){if("inputmask"==c.namespace&&"setvalue"!=c.type){var b=c.handler;c.handler=function(a){if(this.readOnly||this.disabled)a.preventDefault;else return b.apply(this,arguments)}}})})}function pa(a){function c(a){if(void 0==e.valHooks[a]||!0!=e.valHooks[a].inputmaskpatch){var c=e.valHooks[a]&&e.valHooks[a].get?e.valHooks[a].get:function(a){return a.value},b=e.valHooks[a]&&e.valHooks[a].set?e.valHooks[a].set:function(a,c){a.value=c;return a};
e.valHooks[a]={get:function(a){var b=e(a);if(b.data("_inputmask")){if(b.data("_inputmask").opts.autoUnmask)return b.inputmask("unmaskedvalue");a=c(a);b=(b=b.data("_inputmask").maskset._buffer)?b.join(""):"";return a!=b?a:""}return c(a)},set:function(a,c){var d=e(a),g=d.data("_inputmask");g?(g=b(a,e.isFunction(g.opts.onBeforeMask)?g.opts.onBeforeMask.call(v,c,g.opts):c),d.triggerHandler("setvalue.inputmask")):g=b(a,c);return g},inputmaskpatch:!0}}}function b(){var a=e(this),c=e(this).data("_inputmask");
return c?c.opts.autoUnmask?a.inputmask("unmaskedvalue"):h.call(this)!=n().join("")?h.call(this):"":h.call(this)}function d(a){var c=e(this).data("_inputmask");c?(l.call(this,e.isFunction(c.opts.onBeforeMask)?c.opts.onBeforeMask.call(v,a,c.opts):a),e(this).triggerHandler("setvalue.inputmask")):l.call(this,a)}function f(a){e(a).bind("mouseenter.inputmask",function(a){a=e(this);var c=this._valueGet();""!=c&&c!=k().join("")&&a.trigger("setvalue")});if(a=e._data(a).events.mouseover){for(var c=a[a.length-
1],b=a.length-1;0<b;b--)a[b]=a[b-1];a[0]=c}}var h,l;a._valueGet||(Object.getOwnPropertyDescriptor&&Object.getOwnPropertyDescriptor(a,"value"),document.__lookupGetter__&&a.__lookupGetter__("value")?(h=a.__lookupGetter__("value"),l=a.__lookupSetter__("value"),a.__defineGetter__("value",b),a.__defineSetter__("value",d)):(h=function(){return a.value},l=function(c){a.value=c},c(a.type),f(a)),a._valueGet=function(){return A?h.call(this).split("").reverse().join(""):h.call(this)},a._valueSet=function(a){l.call(this,
A?a.split("").reverse().join(""):a)})}function ea(a,c,b){if(d.numericInput||A)c==d.keyCode.BACKSPACE?c=d.keyCode.DELETE:c==d.keyCode.DELETE&&(c=d.keyCode.BACKSPACE),A&&(a=b.end,b.end=b.begin,b.begin=a);c==d.keyCode.BACKSPACE&&1>=b.end-b.begin?b.begin=Q(b.begin):c==d.keyCode.DELETE&&b.begin==b.end&&b.end++;H(b.begin,b.end);c=r(b.begin);f.p=c<b.begin?B(c):b.begin}function Z(a,c,b){if(c&&c.refreshFromBuffer){var d=c.refreshFromBuffer;s(!0===d?d:d.start,d.end);z(!0);void 0!=b&&(E(a,k()),w(a,c.caret||
b.begin,c.caret||b.end))}}function fa(a){X=!1;var c=this,b=e(c),h=a.keyCode,l=w(c);h==d.keyCode.BACKSPACE||h==d.keyCode.DELETE||ja&&127==h||a.ctrlKey&&88==h?(a.preventDefault(),88==h&&(I=k().join("")),ea(c,h,l),E(c,k(),f.p),c._valueGet()==n().join("")&&b.trigger("cleared"),d.showTooltip&&b.prop("title",f.mask)):h==d.keyCode.END||h==d.keyCode.PAGE_DOWN?setTimeout(function(){var b=B(r());d.insertMode||b!=S()||a.shiftKey||b--;w(c,a.shiftKey?l.begin:b,b)},0):h==d.keyCode.HOME&&!a.shiftKey||h==d.keyCode.PAGE_UP?
w(c,0,a.shiftKey?l.begin:0):h==d.keyCode.ESCAPE||90==h&&a.ctrlKey?(R(c,!0,!1,I.split("")),b.click()):h!=d.keyCode.INSERT||a.shiftKey||a.ctrlKey?!1!=d.insertMode||a.shiftKey||(h==d.keyCode.RIGHT?setTimeout(function(){var a=w(c);w(c,a.begin)},0):h==d.keyCode.LEFT&&setTimeout(function(){var a=w(c);w(c,A?a.begin+1:a.begin-1)},0)):(d.insertMode=!d.insertMode,w(c,d.insertMode||l.begin!=S()?l.begin:l.begin-1));var b=w(c),q=d.onKeyDown.call(this,a,k(),b.begin,d);Z(c,q,b);$=-1!=e.inArray(h,d.ignorables)}function W(a,
b,g,h,l,n){if(void 0==g&&X)return!1;X=!0;var p=e(this);a=a||window.event;g=b?g:a.which||a.charCode||a.keyCode;if(!(!0===b||a.ctrlKey&&a.altKey)&&(a.ctrlKey||a.metaKey||$))return!0;if(g){!0!==b&&46==g&&!1==a.shiftKey&&","==d.radixPoint&&(g=44);var m,s;g=String.fromCharCode(g);b?(n=l?n:r()+1,m={begin:n,end:n}):m=w(this);if(n=A?1<m.begin-m.end||1==m.begin-m.end&&d.insertMode:1<m.end-m.begin||1==m.end-m.begin&&d.insertMode)f.undoPositions=e.extend(!0,{},f.validPositions),ea(this,d.keyCode.DELETE,m),d.insertMode||
(d.insertMode=!d.insertMode,q(m.begin,l),d.insertMode=!d.insertMode),n=!d.multi;f.writeOutBuffer=!0;m=A&&!n?m.end:m.begin;var v=t(m,g,l);!1!==v&&(!0!==v&&(m=void 0!=v.pos?v.pos:m,g=void 0!=v.c?v.c:g),z(!0),void 0!=v.caret?s=v.caret:(l=f.validPositions,s=!d.keepStatic&&(void 0!=l[m+1]&&1<K(m+1,l[m].locator.slice(),m).length||void 0!=l[m].alternation)?m+1:B(m)),f.p=s);if(!1!==h){var y=this;setTimeout(function(){d.onKeyValidation.call(y,v,d)},0);if(f.writeOutBuffer&&!1!==v){var u=k();E(this,u,b?void 0:
d.numericInput?Q(s):s);!0!==b&&setTimeout(function(){!0===T(u)&&p.trigger("complete");N=!0;p.trigger("input")},0)}else n&&(f.buffer=void 0,f.validPositions=f.undoPositions)}else n&&(f.buffer=void 0,f.validPositions=f.undoPositions);d.showTooltip&&p.prop("title",f.mask);a&&!0!=b&&(a.preventDefault?a.preventDefault():a.returnValue=!1,b=w(this),a=d.onKeyPress.call(this,a,k(),b.begin,d),Z(this,a,b))}}function qa(a){var b=e(this),g=a.keyCode,f=k(),h=w(this);a=d.onKeyUp.call(this,a,f,h.begin,d);Z(this,
a,h);g==d.keyCode.TAB&&d.showMaskOnFocus&&(b.hasClass("focus-inputmask")&&0==this._valueGet().length?(z(),f=k(),E(this,f),w(this,0),I=k().join("")):(E(this,f),w(this,O(0),O(S()))))}function ga(a){if(!0===N&&"input"==a.type)return N=!1,!0;var b=e(this),g=this._valueGet();if("propertychange"==a.type&&this._valueGet().length<=S())return!0;"paste"==a.type&&(window.clipboardData&&window.clipboardData.getData?g=window.clipboardData.getData("Text"):a.originalEvent&&a.originalEvent.clipboardData&&a.originalEvent.clipboardData.getData&&
(g=a.originalEvent.clipboardData.getData("text/plain")));a=e.isFunction(d.onBeforePaste)?d.onBeforePaste.call(this,g,d):g;R(this,!0,!1,a.split(""),!0);b.click();!0===T(k())&&b.trigger("complete");return!1}function ra(a){if(!0===N&&"input"==a.type)return N=!1,!0;var b=w(this),e=this._valueGet(),e=e.replace(RegExp("("+U(n().join(""))+")*"),"");b.begin>e.length&&(w(this,e.length),b=w(this));1!=k().length-e.length||e.charAt(b.begin)==k()[b.begin]||e.charAt(b.begin+1)==k()[b.begin]||l(b.begin)||(a.keyCode=
d.keyCode.BACKSPACE,fa.call(this,a));a.preventDefault()}function sa(a){if(!0===N&&"input"==a.type)return N=!1,!0;var b=w(this),g=this._valueGet();w(this,b.begin-1);var h=e.Event("keypress");h.which=g.charCodeAt(b.begin-1);$=X=!1;W.call(this,h,void 0,void 0,!1);b=f.p;E(this,k(),d.numericInput?Q(b):b);a.preventDefault()}function ta(a){N=!0;var b=this;setTimeout(function(){w(b,w(b).begin-1);var g=e.Event("keypress");g.which=a.originalEvent.data.charCodeAt(0);$=X=!1;W.call(b,g,void 0,void 0,!1);g=f.p;
E(b,k(),d.numericInput?Q(g):g)},0);return!1}function ua(a){h=e(a);if(h.is(":input")&&"number"!=h.attr("type")){h.data("_inputmask",{maskset:f,opts:d,isRTL:!1});d.showTooltip&&h.prop("title",f.mask);("rtl"==a.dir||d.rightAlign)&&h.css("text-align","right");if("rtl"==a.dir||d.numericInput){a.dir="ltr";h.removeAttr("dir");var b=h.data("_inputmask");b.isRTL=!0;h.data("_inputmask",b);A=!0}h.unbind(".inputmask");h.removeClass("focus-inputmask");h.closest("form").bind("submit",function(){I!=k().join("")&&
h.change();d.autoUnmask&&d.removeMaskOnSubmit&&h.inputmask("remove")}).bind("reset",function(){setTimeout(function(){h.trigger("setvalue")},0)});h.bind("mouseenter.inputmask",function(){!e(this).hasClass("focus-inputmask")&&d.showMaskOnHover&&this._valueGet()!=k().join("")&&E(this,k())}).bind("blur.inputmask",function(){var a=e(this);if(a.data("_inputmask")){var b=this._valueGet(),c=k();a.removeClass("focus-inputmask");I!=k().join("")&&a.change();d.clearMaskOnLostFocus&&""!=b&&(b==n().join("")?this._valueSet(""):
ca(this));!1===T(c)&&(a.trigger("incomplete"),d.clearIncomplete&&(z(),d.clearMaskOnLostFocus?this._valueSet(""):(c=n().slice(),E(this,c))))}}).bind("focus.inputmask",function(){var a=e(this),b=this._valueGet();d.showMaskOnFocus&&!a.hasClass("focus-inputmask")&&(!d.showMaskOnHover||d.showMaskOnHover&&""==b)&&this._valueGet()!=k().join("")&&E(this,k(),B(r()));a.addClass("focus-inputmask");I=k().join("")}).bind("mouseleave.inputmask",function(){var a=e(this);d.clearMaskOnLostFocus&&(a.hasClass("focus-inputmask")||
this._valueGet()==a.attr("placeholder")||(this._valueGet()==n().join("")||""==this._valueGet()?this._valueSet(""):ca(this)))}).bind("click.inputmask",function(){var a=this;e(a).is(":focus")&&setTimeout(function(){var b=w(a);if(b.begin==b.end){var b=A?O(b.begin):b.begin,c=r(b),c=B(c);b<c?l(b)?w(a,b):w(a,B(b)):w(a,c)}},0)}).bind("dblclick.inputmask",function(){var a=this;setTimeout(function(){w(a,0,B(r()))},0)}).bind(Y+".inputmask dragdrop.inputmask drop.inputmask",ga).bind("setvalue.inputmask",function(){R(this,
!0,!1,void 0,!0);I=k().join("")}).bind("complete.inputmask",d.oncomplete).bind("incomplete.inputmask",d.onincomplete).bind("cleared.inputmask",d.oncleared);h.bind("keydown.inputmask",fa).bind("keypress.inputmask",W).bind("keyup.inputmask",qa).bind("compositionupdate.inputmask",ta);"paste"===Y&&h.bind("input.inputmask",sa);if(ka||ma||la||na)"input"==Y&&h.unbind(Y+".inputmask"),h.bind("input.inputmask",ra);ia&&h.bind("input.inputmask",ga);pa(a);b=e.isFunction(d.onBeforeMask)?d.onBeforeMask.call(a,a._valueGet(),
d):a._valueGet();R(a,!0,!1,b.split(""),!0);I=k().join("");var g;try{g=document.activeElement}catch(q){}!1===T(k())&&d.clearIncomplete&&z();d.clearMaskOnLostFocus?k().join("")==n().join("")?a._valueSet(""):ca(a):E(a,k());g===a&&(h.addClass("focus-inputmask"),w(a,B(r())));oa(a)}}var A=!1,I,h,X=!1,N=!1,$=!1,L;if(void 0!=b)switch(b.action){case "isComplete":return h=e(b.el),f=h.data("_inputmask").maskset,d=h.data("_inputmask").opts,T(b.buffer);case "unmaskedvalue":return h=b.$input,f=h.data("_inputmask").maskset,
d=h.data("_inputmask").opts,A=b.$input.data("_inputmask").isRTL,da(b.$input);case "mask":I=k().join("");ua(b.el);break;case "format":h=e({});h.data("_inputmask",{maskset:f,opts:d,isRTL:d.numericInput});d.numericInput&&(A=!0);var G=b.value.split("");R(h,!1,!1,A?G.reverse():G,!0);d.onKeyPress.call(this,void 0,k(),0,d);return A?k().slice().reverse().join(""):k().join("");case "isValid":h=e({});h.data("_inputmask",{maskset:f,opts:d,isRTL:d.numericInput});d.numericInput&&(A=!0);G=b.value.split("");R(h,
!1,!0,A?G.reverse():G);var G=k(),va=ba();G.length=va;return T(G)&&b.value==G.join("");case "getemptymask":return h=e(b.el),f=h.data("_inputmask").maskset,d=h.data("_inputmask").opts,n();case "remove":var v=b.el;h=e(v);f=h.data("_inputmask").maskset;d=h.data("_inputmask").opts;v._valueSet(da(h));h.unbind(".inputmask");h.removeClass("focus-inputmask");h.removeData("_inputmask");Object.getOwnPropertyDescriptor&&(G=Object.getOwnPropertyDescriptor(v,"value"));G&&G.get?v._valueGet&&Object.defineProperty(v,
"value",{get:v._valueGet,set:v._valueSet}):document.__lookupGetter__&&v.__lookupGetter__("value")&&v._valueGet&&(v.__defineGetter__("value",v._valueGet),v.__defineSetter__("value",v._valueSet));try{delete v._valueGet,delete v._valueSet}catch(wa){v._valueGet=void 0,v._valueSet=void 0}}};e.inputmask={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},quantifiermarker:{start:"{",end:"}"},groupmarker:{start:"(",end:")"},alternatormarker:"|",escapeChar:"\\",mask:null,oncomplete:e.noop,onincomplete:e.noop,
oncleared:e.noop,repeat:0,greedy:!0,autoUnmask:!1,removeMaskOnSubmit:!0,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},alias:null,onKeyUp:e.noop,onKeyPress:e.noop,onKeyDown:e.noop,onBeforeMask:void 0,onBeforePaste:void 0,onUnMask:void 0,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:e.noop,skipOptionalPartCharacter:" ",showTooltip:!1,numericInput:!1,rightAlign:!1,radixPoint:"",nojumps:!1,nojumpsThreshold:0,keepStatic:void 0,definitions:{9:{validator:"[0-9]",cardinality:1,
definitionSymbol:"*"},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\u00c0-\u00ff\u00b5]",cardinality:1,definitionSymbol:"*"},"*":{validator:"[0-9A-Za-z\u0410-\u044f\u0401\u0451\u00c0-\u00ff\u00b5]",cardinality:1}},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,
PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123],isComplete:void 0},masksCache:{},escapeRegex:function(b){return b.replace(RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\)","gim"),"\\$1")},format:function(b,f){var d=e.extend(!0,{},e.inputmask.defaults,f);D(d.alias,f,d);return J({action:"format",value:b},P(d),d)},isValid:function(b,f){var d=e.extend(!0,
{},e.inputmask.defaults,f);D(d.alias,f,d);return J({action:"isValid",value:b},P(d),d)}};e.fn.inputmask=function(b,f,d,y,z){function r(b,d){var f=e(b),q;for(q in d){var n=f.data("inputmask-"+q.toLowerCase());void 0!=n&&(d[q]=n)}return d}d=d||J;y=y||"_inputmask";var q=e.extend(!0,{},e.inputmask.defaults,f),u;if("string"===typeof b)switch(b){case "mask":return D(q.alias,f,q),u=P(q,d!==J),0==u.length?this:this.each(function(){d({action:"mask",el:this},e.extend(!0,{},u),r(this,q))});case "unmaskedvalue":return b=
e(this),b.data(y)?d({action:"unmaskedvalue",$input:b}):b.val();case "remove":return this.each(function(){e(this).data(y)&&d({action:"remove",el:this})});case "getemptymask":return this.data(y)?d({action:"getemptymask",el:this}):"";case "hasMaskedValue":return this.data(y)?!this.data(y).opts.autoUnmask:!1;case "isComplete":return this.data(y)?d({action:"isComplete",buffer:this[0]._valueGet().split(""),el:this}):!0;case "getmetadata":if(this.data(y))return u=this.data(y).maskset,u.metadata;break;case "_detectScope":return D(q.alias,
f,q),void 0==z||D(z,f,q)||-1!=e.inArray(z,"mask unmaskedvalue remove getemptymask hasMaskedValue isComplete getmetadata _detectScope".split(" "))||(q.mask=z),e.isFunction(q.mask)&&(q.mask=q.mask.call(this,q)),e.isArray(q.mask);default:return D(q.alias,f,q),D(b,f,q)||(q.mask=b),u=P(q,d!==J),void 0==u?this:this.each(function(){d({action:"mask",el:this},e.extend(!0,{},u),r(this,q))})}else{if("object"==typeof b)return q=e.extend(!0,{},e.inputmask.defaults,b),D(q.alias,b,q),u=P(q,d!==J),void 0==u?this:
this.each(function(){d({action:"mask",el:this},e.extend(!0,{},u),r(this,q))});if(void 0==b)return this.each(function(){var b=e(this).attr("data-inputmask");if(b&&""!=b)try{var b=b.replace(RegExp("'","g"),'"'),r=e.parseJSON("{"+b+"}");e.extend(!0,r,f);q=e.extend(!0,{},e.inputmask.defaults,r);D(q.alias,r,q);q.alias=void 0;e(this).inputmask("mask",q,d)}catch(u){}})}}}return e.fn.inputmask});