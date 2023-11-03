/*! For license information please see plugin.text_selection.js.LICENSE.txt */
(self.webpackChunk_internetarchive_bookreader=self.webpackChunk_internetarchive_bookreader||[]).push([[423],{4742:function(t,e,r){"use strict";r(6992),r(1539),r(3948),r(9826),r(9714),r(2222),r(4678),r(8674),r(1249),r(2707),r(1038),r(8783),r(7852),r(3210),r(7042),r(9601),r(1532),r(2165),r(2526),r(1817),r(9600),r(6649),r(6078),r(9653),r(2443),r(3680),r(3706),r(2703),r(489),r(4747),r(8309),r(5069),r(4916),r(2419),r(4819),r(5003);var n=r(9860),o=r(5311);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,l(n.key),n)}}function c(t,e,r){return(e=l(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t){var e=function(t,e){if("object"!==i(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===i(e)?e:String(e)}var u=function(){function t(e,r){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,"selecting",!1),c(this,"startedInSelector",!1),c(this,"target",null),c(this,"_onSelectionChange",(function(){var t=window.getSelection();if(!n.selecting&&t.toString()){var e=o(t.anchorNode).closest(n.selector)[0];if(!e)return;n.target=e,n.selecting=!0,n.handler("started",n.target)}!n.selecting||!t.isCollapsed&&t.toString()&&o(t.anchorNode).closest(n.selector)[0]||(n.selecting=!1,n.handler("cleared",n.target))})),this.selector=e,this.handler=r}var e,r;return e=t,(r=[{key:"attach",value:function(){document.addEventListener("selectionchange",this._onSelectionChange)}},{key:"detach",value:function(){document.removeEventListener("selectionchange",this._onSelectionChange)}}])&&a(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function f(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:h;return null==t?void 0:t.replace(/\{\{([^}]*?)\}\}/g,(function(t,o){if(!o)return t;var i,a=function(t){if(Array.isArray(t))return t}(i=o.split("|").map((function(t){return t.trim()})))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(i)||function(t,e){if(t){if("string"==typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(t,e):void 0}}(i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),c=a[0],l=a.slice(1);if(!(c in r)&&!(c in e))return t;var u=c in r?r[c]:c in e?e[c]:null;return l.map((function(t){return n[t]})).reduce((function(t,e){return e(t)}),u&&u.toString())}))}r(5306),r(5827);var h={urlencode:encodeURIComponent},p=r(5311);function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}var y=j().mark(N),v=j().mark(W),g=j().mark(G);function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=w(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},m.apply(this,arguments)}function b(t,e){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},b(t,e)}function w(t){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},w(t)}function x(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,c=[],l=!0,u=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);l=!0);}catch(t){u=!0,o=t}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw o}}return c}}(t,e)||E(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=E(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function E(t,e){if(t){if("string"==typeof t)return P(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?P(t,e):void 0}}function P(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function j(){j=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function u(t,e,r,o){var i=e&&e.prototype instanceof h?e:h,a=Object.create(i.prototype),c=new O(o||[]);return n(a,"_invoke",{value:S(t,r,c)}),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f={};function h(){}function p(){}function y(){}var v={};l(v,i,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(R([])));m&&m!==e&&r.call(m,i)&&(v=m);var b=y.prototype=h.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function o(n,i,a,c){var l=s(t[n],t,i);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==d(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return o("throw",t,a,c)}))}c(l.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function S(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=E(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function E(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function R(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return p.prototype=y,n(b,"constructor",{value:y,configurable:!0}),n(y,"constructor",{value:p,configurable:!0}),p.displayName=l(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(x.prototype),l(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(b),l(b,c,"Generator"),l(b,i,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=R,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:R(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function k(t,e,r,n,o,i,a){try{var c=t[i](a),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,o)}function O(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){k(i,n,o,a,c,"next",t)}function c(t){k(i,n,o,a,c,"throw",t)}a(void 0)}))}}function R(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function L(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,A(n.key),n)}}function C(t,e,r){return e&&L(t.prototype,e),r&&L(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function A(t){var e=function(t,e){if("object"!==d(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===d(e)?e:String(e)}var _=window.BookReader,B={enabled:!0,fullDjvuXmlUrl:null,singlePageDjvuXmlUrl:null,jsonp:!1},T=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;R(this,t),this.maxSize=e,this.entries=[]}return C(t,[{key:"add",value:function(t){this.entries.length>=this.maxSize&&this.entries.shift(),this.entries.push(t)}}]),t}(),I=function(){function t(){var e,r,n,o=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,a=arguments.length>1?arguments[1]:void 0,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"lr";R(this,t),e=this,n=function(t,e){if("started"===t)o.textSelectingMode(e);else{if("cleared"!==t)throw new Error("Unknown type ".concat(t));o.defaultMode(e)}},(r=A(r="_onSelectionChange"))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,this.options=i,this.optionVariables=a,this.djvuPagesPromise=null,this.rtl="rl"===c,this.pageTextCache=new T,this.maxWordRendered=2500,this.selectionObserver=new u(".BRtextLayer",this._onSelectionChange)}var e,r;return C(t,[{key:"init",value:function(){this.selectionObserver.attach(),this.options.singlePageDjvuXmlUrl||(this.djvuPagesPromise=p.ajax({type:"GET",url:f(this.options.fullDjvuXmlUrl,this.optionVariables),dataType:this.options.jsonp?"jsonp":"html",cache:!0,error:function(t){}}).then((function(t){try{var e=p.parseXML(t);return e&&p(e).find("OBJECT")}catch(t){return}})))}},{key:"getPageText",value:(r=O(j().mark((function t(e){var r,n,o,i,a;return j().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.options.singlePageDjvuXmlUrl){t.next=19;break}if(!(r=this.pageTextCache.entries.find((function(t){return t.index==e})))){t.next=4;break}return t.abrupt("return",r.response);case 4:return t.next=6,p.ajax({type:"GET",url:f(this.options.singlePageDjvuXmlUrl,this.optionVariables,{pageIndex:e}),dataType:this.options.jsonp?"jsonp":"html",cache:!0,error:function(t){}});case 6:return n=t.sent,t.prev=7,o=p.parseXML(n),i=o&&p(o).find("OBJECT")[0],this.pageTextCache.add({index:e,response:i}),t.abrupt("return",i);case 14:return t.prev=14,t.t0=t.catch(7),t.abrupt("return",void 0);case 17:t.next=24;break;case 19:return t.next=21,this.djvuPagesPromise;case 21:if(!(a=t.sent)){t.next=24;break}return t.abrupt("return",a[e]);case 24:case"end":return t.stop()}}),t,this,[[7,14]])}))),function(t){return r.apply(this,arguments)})},{key:"interceptCopy",value:function(t){t[0].addEventListener("copy",(function(t){var e=document.getSelection();t.clipboardData.setData("text/plain",e.toString()),t.preventDefault()}))}},{key:"defaultMode",value:function(t){var e=this,r=p(t).closest(".BRpagecontainer");t.style.pointerEvents="none",r.find("img").css("pointer-events","auto"),p(t).off(".textSelectPluginHandler");var n=this.mouseIsDown,o=this.mouseIsDown;n&&(t.style.pointerEvents="auto"),p(t).on("mousedown.textSelectPluginHandler",(function(t){e.mouseIsDown=!0,p(t.target).is(".BRwordElement, .BRspace")&&t.stopPropagation()})),p(t).on("mouseup.textSelectPluginHandler",(function(r){e.mouseIsDown=!1,t.style.pointerEvents="none",o&&(o=!1,r.stopPropagation())}))}},{key:"textSelectingMode",value:function(t){var e=this,r=p(t).closest(".BRpagecontainer");t.style.pointerEvents="all",r.find("img").css("pointer-events","none"),p(t).off(".textSelectPluginHandler"),p(t).on("mousedown.textSelectPluginHandler",(function(t){e.mouseIsDown=!0,t.stopPropagation()})),p(t).on("mouseup.textSelectPluginHandler",(function(t){e.mouseIsDown=!1,t.stopPropagation()}))}},{key:"stopPageFlip",value:function(t){var e=this,r=t.find(".BRtextLayer");r.length&&(r.each((function(t,r){return e.defaultMode(r)})),this.interceptCopy(t))}},{key:"createTextLayer",value:(e=O(j().mark((function t(e){var r,o,i,a,c,l,u,s,f,h,d,y,v,g,m,b,w,E,P,k,O,R,L,C,A=this;return j().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.page.index,!(o=e.$container).find(".BRtextLayer").length){t.next=5;break}return t.abrupt("return");case 5:return t.next=7,this.getPageText(r);case 7:if(i=t.sent){t.next=10;break}return t.abrupt("return");case 10:if(U(i),!((a=p(i).find("WORD").length)>this.maxWordRendered)){t.next=15;break}return console.log("Page ".concat(r," has too many words (").concat(a," > ").concat(this.maxWordRendered,"). Not rendering text layer.")),t.abrupt("return");case 15:c=(0,n.RS)(e.page,"BRtextLayer"),l=parseFloat(e.$container[0].style.width)/e.page.width,u=parseFloat(e.$container[0].style.height)/e.page.height,c.style.transform="scale(".concat(l,", ").concat(u,")"),c.setAttribute("dir",this.rtl?"rtl":"ltr"),s=p(i).find("PARAGRAPH[coords]").toArray(),f=s.map((function(t){var e=A.renderParagraph(t);return c.appendChild(e),e})),h=F(c,".BRparagraphElement"),d=0,y=S(G(s,f));try{for(y.s();!(v=y.n()).done;)g=x(v.value,2),m=g[0],b=g[1],w=p(m).attr("coords").split(",").map(parseFloat),E=h.get(b),P=x(w,4),k=P[0],O=P[2],R=P[3],L=this.rtl?E.right-O:k-E.left,C=R-(E.top+d),b.style[this.rtl?"marginRight":"marginLeft"]="".concat(L,"px"),b.style.marginTop="".concat(C,"px"),d+=C,c.appendChild(b)}catch(t){y.e(t)}finally{y.f()}o.append(c),this.stopPageFlip(o);case 28:case"end":return t.stop()}}),t,this)}))),function(t){return e.apply(this,arguments)})},{key:"renderParagraph",value:function(t){var e=document.createElement("p");e.classList.add("BRparagraphElement");var r=x(p(t).attr("coords").split(",").map(parseFloat),4),n=r[0],o=r[1],i=r[2],a=r[3],c=[],l=p(t).find("LINE[coords]").toArray();if(!l.length)return e;var u,s=S(W(N(l,M)));try{for(s.s();!(u=s.n()).done;){var f=x(u.value,3),h=f[0],d=f[1],y=f[2],v=d.ocrElement==l[l.length-1],g=document.createElement("span");g.classList.add("BRlineElement");var m,b=S(d.words.entries());try{for(b.s();!(m=b.n()).done;){var w=x(m.value,2),j=w[0],k=w[1],O=x(p(k).attr("coords").split(",").map(parseFloat),4),R=O[1],L=O[2],C=O[3],A=R-C;if(c.push(A),0==j&&null!=h&&h.lastWord.textContent.trim().endsWith("-")){var _=x(p((y||h).firstWord).attr("coords").split(",").map(parseFloat),3)[0];p(k).attr("coords","".concat(_,",").concat(R,",").concat(L,",").concat(C))}var B=document.createElement("span");if(B.setAttribute("class","BRwordElement"),B.textContent=k.textContent.trim(),j>0){var T=document.createElement("span");T.classList.add("BRspace"),T.textContent=" ",g.append(T),g.appendChild(document.createTextNode(" "))}g.appendChild(B)}}catch(t){b.e(t)}finally{b.f()}var I=d.lastWord.textContent.trim().endsWith("-"),D=g.children[g.children.length-1];I&&!v&&(D.textContent=D.textContent.trim().slice(0,-1),D.classList.add("BRwordElement--hyphen")),e.appendChild(g),v||I||e.appendChild(document.createTextNode(" "))}}catch(t){s.e(t)}finally{s.f()}c.sort((function(t,e){return t-e}));var U=c[Math.floor(.85*c.length)]+4;e.style.left="".concat(n,"px"),e.style.top="".concat(a,"px"),e.style.width="".concat(i-n,"px"),e.style.height="".concat(o-a,"px"),e.style.fontSize="".concat(U,"px");var H,X=F(e,".BRwordElement"),$=S(G(p(t).find("WORD").toArray(),e.querySelectorAll(".BRwordElement")));try{for($.s();!(H=$.n()).done;){var q=x(H.value,2),z=q[0],V=q[1],Y=X.get(V),J=x(p(z).attr("coords").split(",").map(parseFloat),3),K=J[0],Q=J[2]-K;z.textContent.endsWith(" ")&&(Q=Q*(z.textContent.length-1)/z.textContent.length);var Z=Q-Y.width;V.style.letterSpacing="".concat(Z/(z.textContent.length-1),"px")}}catch(t){$.e(t)}finally{$.f()}X=F(e,".BRwordElement");var tt,et,rt=F(e,".BRspace"),nt=p(t).find("LINE[coords]").toArray(),ot=Array.from(e.querySelectorAll(".BRlineElement")),it=a,at=S(G(nt,ot));try{for(at.s();!(tt=at.n()).done;){var ct,lt=x(tt.value,2),ut=lt[0],st=lt[1],ft=p(ut).find("WORD").toArray(),ht=this.rtl?i:n,pt=S(G(ft,st.querySelectorAll(".BRwordElement")));try{for(pt.s();!(ct=pt.n()).done;){var dt=x(ct.value,2),yt=dt[0],vt=dt[1],gt=X.get(vt),mt=x(p(yt).attr("coords").split(",").map(parseFloat),3),bt=mt[0],wt=mt[2],xt=this.rtl?-(wt-ht):bt-ht;if(vt.previousElementSibling){var St=vt.previousElementSibling;St.style.letterSpacing="".concat(xt-rt.get(St).width,"px")}else vt.style[this.rtl?"paddingRight":"paddingLeft"]="".concat(xt,"px");this.rtl?ht-=xt+gt.width:ht+=xt+gt.width}}catch(t){pt.e(t)}finally{pt.f()}var Et=Math.min.apply(Math,function(t){if(Array.isArray(t))return P(t)}(et=ft.map((function(t){return parseFloat(p(t).attr("coords").split(",")[3])})))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(et)||E(et)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())-it;st.previousElementSibling&&(st.previousElementSibling.style.lineHeight="".concat(Et,"px"),it+=Et)}}catch(t){at.e(t)}finally{at.f()}return ot[ot.length-1].style.lineHeight="".concat(o-it,"px"),e.appendChild(document.createElement("br")),e}}]),t}(),D=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&b(t,e)}(o,t);var e,r,n=(e=o,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=w(e);if(r){var o=w(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return function(t,e){if(e&&("object"===d(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function o(){return R(this,o),n.apply(this,arguments)}return C(o,[{key:"init",value:function(){var t=this,e=Object.assign({},B,this.options.plugins.textSelection);e.enabled&&(this.textSelectionPlugin=new I(e,this.options.vars,this.pageProgression),this.options.plugins.textSelection=e,this.textSelectionPlugin.init(),new u(".BRtextLayer",(function(e){var r;"started"==e&&(null===(r=t.archiveAnalyticsSendEvent)||void 0===r||r.call(t,"BookReader","SelectStart"),t.refs.$br.find(".BRpagecontainer--hasSelection").removeClass("BRpagecontainer--hasSelection"),p(window.getSelection().anchorNode).closest(".BRpagecontainer").addClass("BRpagecontainer--hasSelection"))})).attach()),m(w(o.prototype),"init",this).call(this)}},{key:"_createPageContainer",value:function(t){var e,r=m(w(o.prototype),"_createPageContainer",this).call(this,t);return this.mode!==this.constModeThumb&&r.page&&(null===(e=this.textSelectionPlugin)||void 0===e||e.createTextLayer(r)),r}}]),o}(_);function F(t,e){var r={position:t.style.position,visibility:t.style.visibility,top:t.style.top,left:t.style.left,transform:t.style.transform};t.style.position="absolute",t.style.visibility="hidden",t.style.top="0",t.style.left="0",t.style.transform="none",document.body.appendChild(t);var n=new Map(Array.from(t.querySelectorAll(e)).map((function(t){var e=t.getBoundingClientRect();return[t,new H(e.left+window.scrollX,e.top+window.scrollY,e.width,e.height)]})));return document.body.removeChild(t),Object.assign(t.style,r),n}function M(t){var e=p(t).find("WORD").toArray();return{ocrElement:t,words:e,firstWord:e[0],lastWord:e[e.length-1]}}function N(t,e){var r,n,o;return j().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:r=S(t),i.prev=1,r.s();case 3:if((n=r.n()).done){i.next=9;break}return o=n.value,i.next=7,e(o);case 7:i.next=3;break;case 9:i.next=14;break;case 11:i.prev=11,i.t0=i.catch(1),r.e(i.t0);case 14:return i.prev=14,r.f(),i.finish(14);case 17:case"end":return i.stop()}}),y,null,[[1,11,14,17]])}function W(t){var e,r,n,o,i,a;return j().wrap((function(c){for(;;)switch(c.prev=c.next){case 0:e=void 0,r=void 0,n=void 0,o=S(t),c.prev=4,o.s();case 6:if((i=o.n()).done){c.next=17;break}if(a=i.value,void 0===r){c.next=12;break}return n=a,c.next=12,[e,r,n];case 12:e=r,r=a,n=void 0;case 15:c.next=6;break;case 17:c.next=22;break;case 19:c.prev=19,c.t0=c.catch(4),o.e(c.t0);case 22:return c.prev=22,o.f(),c.finish(22);case 25:if(void 0===r){c.next=28;break}return c.next=28,[e,r,n];case 28:case"end":return c.stop()}}),v,null,[[4,19,22,25]])}function G(t,e){var r,n,o,i;return j().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:r=t[Symbol.iterator](),n=e[Symbol.iterator]();case 2:if(o=r.next(),i=n.next(),!o.done||!i.done){a.next=7;break}return a.abrupt("return");case 7:if(!o.done&&!i.done){a.next=9;break}throw new Error("zip: one of the iterators is done");case 9:return a.next=11,[o.value,i.value];case 11:a.next=2;break;case 13:case"end":return a.stop()}}),g)}function U(t){if(!p(t).attr("coords")&&t.children){var e=p(t).children().toArray();if(0!==e.length){var r,n=S(e);try{for(n.s();!(r=n.n()).done;)U(r.value)}catch(t){n.e(t)}finally{n.f()}var o,i=[],a=S(e);try{for(a.s();!(o=a.n()).done;){var c=o.value;p(c).attr("coords")&&i.push(p(c).attr("coords").split(",").map(parseFloat))}}catch(t){a.e(t)}finally{a.f()}var l=function(t){var e,r=1/0,n=-1/0,o=-1/0,i=1/0,a=S(t);try{for(a.s();!(e=a.n()).done;){var c=x(e.value,4),l=c[0],u=c[1],s=c[2],f=c[3];r=Math.min(r,l),n=Math.max(n,u),o=Math.max(o,s),i=Math.min(i,f)}}catch(t){a.e(t)}finally{a.f()}return[r,n,o,i]}(i);Math.abs(l[0])!=1/0&&p(t).attr("coords",l.join(","))}}}window.BookReader=D;var H=function(){function t(e,r,n,o){R(this,t),this.x=e,this.y=r,this.width=n,this.height=o}return C(t,[{key:"right",get:function(){return this.x+this.width}},{key:"bottom",get:function(){return this.y+this.height}},{key:"top",get:function(){return this.y}},{key:"left",get:function(){return this.x}}]),t}()},2814:function(t,e,r){var n=r(7854),o=r(7293),i=r(1702),a=r(1340),c=r(3111).trim,l=r(1361),u=i("".charAt),s=n.parseFloat,f=n.Symbol,h=f&&f.iterator,p=1/s(l+"-0")!=-1/0||h&&!o((function(){s(Object(h))}));t.exports=p?function(t){var e=c(a(t)),r=s(e);return 0===r&&"-"==u(e,0)?-0:r}:s},6091:function(t,e,r){var n=r(6530).PROPER,o=r(7293),i=r(1361);t.exports=function(t){return o((function(){return!!i[t]()||"​᠎"!=="​᠎"[t]()||n&&i[t].name!==t}))}},4678:function(t,e,r){var n=r(2109),o=r(2814);n({global:!0,forced:parseFloat!=o},{parseFloat:o})},3210:function(t,e,r){"use strict";var n=r(2109),o=r(3111).trim;n({target:"String",proto:!0,forced:r(6091)("trim")},{trim:function(){return o(this)}})}},function(t){t(t.s=4742)}]);
//# sourceMappingURL=plugin.text_selection.js.map