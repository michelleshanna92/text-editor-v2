/*! For license information please see main.bundle.js.LICENSE.txt */
(()=>{"use strict";var n,t,e,r,o={739:(n,t,e)=>{e.a(n,(async(n,r)=>{try{e.d(t,{d:()=>i,z:()=>u});var o=e(29);function d(n){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},d(n)}function p(){p=function(){return n};var n={},t=Object.prototype,e=t.hasOwnProperty,r=Object.defineProperty||function(n,t,e){n[t]=e.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(n,t,e){return Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}),n[t]}try{s({},"")}catch(n){s=function(n,t,e){return n[t]=e}}function u(n,t,e,o){var a=t&&t.prototype instanceof h?t:h,i=Object.create(a.prototype),c=new L(o||[]);return r(i,"_invoke",{value:S(n,e,c)}),i}function l(n,t,e){try{return{type:"normal",arg:n.call(t,e)}}catch(n){return{type:"throw",arg:n}}}n.wrap=u;var f={};function h(){}function v(){}function y(){}var m={};s(m,a,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(P([])));b&&b!==t&&e.call(b,a)&&(m=b);var w=y.prototype=h.prototype=Object.create(m);function x(n){["next","throw","return"].forEach((function(t){s(n,t,(function(n){return this._invoke(t,n)}))}))}function _(n,t){function o(r,a,i,c){var s=l(n[r],n,a);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==d(f)&&e.call(f,"__await")?t.resolve(f.__await).then((function(n){o("next",n,i,c)}),(function(n){o("throw",n,i,c)})):t.resolve(f).then((function(n){u.value=n,i(u)}),(function(n){return o("throw",n,i,c)}))}c(s.arg)}var a;r(this,"_invoke",{value:function(n,e){function r(){return new t((function(t,r){o(n,e,t,r)}))}return a=a?a.then(r,r):r()}})}function S(n,t,e){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return{value:void 0,done:!0}}for(e.method=o,e.arg=a;;){var i=e.delegate;if(i){var c=k(i,e);if(c){if(c===f)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var s=l(n,t,e);if("normal"===s.type){if(r=e.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(r="completed",e.method="throw",e.arg=s.arg)}}}function k(n,t){var e=t.method,r=n.iterator[e];if(void 0===r)return t.delegate=null,"throw"===e&&n.iterator.return&&(t.method="return",t.arg=void 0,k(n,t),"throw"===t.method)||"return"!==e&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+e+"' method")),f;var o=l(r,n.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,f;var a=o.arg;return a?a.done?(t[n.resultName]=a.value,t.next=n.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function E(n){var t={tryLoc:n[0]};1 in n&&(t.catchLoc=n[1]),2 in n&&(t.finallyLoc=n[2],t.afterLoc=n[3]),this.tryEntries.push(t)}function j(n){var t=n.completion||{};t.type="normal",delete t.arg,n.completion=t}function L(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(E,this),this.reset(!0)}function P(n){if(n){var t=n[a];if(t)return t.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var r=-1,o=function t(){for(;++r<n.length;)if(e.call(n,r))return t.value=n[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:I}}function I(){return{value:void 0,done:!0}}return v.prototype=y,r(w,"constructor",{value:y,configurable:!0}),r(y,"constructor",{value:v,configurable:!0}),v.displayName=s(y,c,"GeneratorFunction"),n.isGeneratorFunction=function(n){var t="function"==typeof n&&n.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,y):(n.__proto__=y,s(n,c,"GeneratorFunction")),n.prototype=Object.create(w),n},n.awrap=function(n){return{__await:n}},x(_.prototype),s(_.prototype,i,(function(){return this})),n.AsyncIterator=_,n.async=function(t,e,r,o,a){void 0===a&&(a=Promise);var i=new _(u(t,e,r,o),a);return n.isGeneratorFunction(e)?i:i.next().then((function(n){return n.done?n.value:i.next()}))},x(w),s(w,c,"Generator"),s(w,a,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),n.keys=function(n){var t=Object(n),e=[];for(var r in t)e.push(r);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},n.values=P,L.prototype={constructor:L,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!n)for(var t in this)"t"===t.charAt(0)&&e.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var t=this;function r(e,r){return i.type="throw",i.arg=n,t.next=e,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=e.call(a,"catchLoc"),s=e.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(n,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===n||"continue"===n)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=n,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(n,t){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&t&&(this.next=t),f},finish:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.finallyLoc===n)return this.complete(e.completion,e.afterLoc),j(e),f}},catch:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.tryLoc===n){var r=e.completion;if("throw"===r.type){var o=r.arg;j(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,t,e){return this.delegate={iterator:P(n),resultName:t,nextLoc:e},"next"===this.method&&(this.arg=void 0),f}},n}function h(n,t,e,r,o,a,i){try{var c=n[a](i),s=c.value}catch(n){return void e(n)}c.done?t(s):Promise.resolve(s).then(r,o)}function v(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var a=n.apply(t,e);function i(n){h(a,r,o,i,c,"next",n)}function c(n){h(a,r,o,i,c,"throw",n)}i(void 0)}))}}var a=function(){var n=v(p().mark((function n(){return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,o.X3)("jate",1,{upgrade:function(n){n.objectStoreNames.contains("jate")?console.log("jate database already exists"):(n.createObjectStore("jate",{keyPath:"id",autoIncrement:!0}),console.log("jate database created"))}}));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=v(p().mark((function n(t){return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",console.error("putDb not implemented"));case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),c=(await(0,o.X3)("jate",1)).transaction("jate","readwrite").objectStore("jate").put({id:1,value:"Versuch"}),s=await c;console.log("data saved to jateDB",s);var u=function(){var n=v(p().mark((function n(){return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",console.error("getDb not implemented"));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=(await(0,o.X3)("jate",1)).transaction("jate","readonly").objectStore("jate").getAll(),f=await l;console.log("data retrieved from jateDB",f),a(),r()}catch(y){r(y)}}),1)},477:(n,t,e)=>{e.a(n,(async(n,r)=>{try{e.d(t,{Z:()=>c});var o=e(739),a=e(426),i=n([o]);function s(n){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},s(n)}function u(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,(void 0,"symbol"===s(o=f(r.key,"string"))?o:String(o)),r)}var o}function l(n,t,e){return t&&u(n.prototype,t),e&&u(n,e),Object.defineProperty(n,"prototype",{writable:!1}),n}function f(n,t){if("object"!==s(n)||null===n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var r=e.call(n,t||"default");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(n)}function d(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}o=(i.then?(await i)():i)[0];var c=l((function n(){var t=this;d(this,n);var e=localStorage.getItem("content");if("undefined"==typeof CodeMirror)throw new Error("CodeMirror is not loaded");this.editor=CodeMirror(document.querySelector("#main"),{value:"",mode:"javascript",theme:"monokai",lineNumbers:!0,lineWrapping:!0,autofocus:!0,indentUnit:2,tabSize:2}),(0,o.z)().then((function(n){console.info("Loaded data from IndexedDB, injecting into editor"),t.editor.setValue(n||e||a.F)})),this.editor.on("change",(function(){localStorage.setItem("content",t.editor.getValue())})),this.editor.on("blur",(function(){console.log("The editor has lost focus"),(0,o.d)(localStorage.getItem("content"))}))}));r()}catch(p){r(p)}}))},426:(n,t,e)=>{e.d(t,{F:()=>r});var r="\n/*\n       _____  ____________\n      / /   |/_  __/ ____/\n __  / / /| | / / / __/   \n/ /_/ / ___ |/ / / /___   \n ____/_/  |_/_/ /_____/   \njust another text editor\n*/                          \n"},612:(n,t,e)=>{e.a(n,(async(n,t)=>{try{var r=e(131),o=e(477),a=e(739),i=(e(962),n([o,a]));[o,a]=i.then?(await i)():i;var c=document.querySelector("#main");c.innerHTML="",void 0===new o.Z&&((s=document.createElement("div")).classList.add("spinner"),s.innerHTML='\n  <div class="loading-container">\n  <div class="loading-spinner" />\n  </div>\n  ',c.appendChild(s)),"serviceWorker"in navigator?new r.ZW("/src-sw.js").register():console.error("Service workers are not supported in this browser."),t()}catch(n){t(n)}var s}))},402:(n,t,e)=>{e.d(t,{Z:()=>c});var r=e(81),o=e.n(r),a=e(645),i=e.n(a)()(o());i.push([n.id,"/* app shell CSS */\n:root {\n  --primary: #31a9e1;\n  --gray: #ececec;\n  --whitesmoke: #f5f5f5;\n  --dark: #222;\n  --monoaki: #272822;\n  --navbar-height: 50px;\n}\n\nbody {\n  margin: 0;\n  background-color: var(--monoaki);\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n    Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n}\n\nh1 {\n  font-size: 22px;\n}\n\n#navbar {\n  height: var(--navbar-height);\n  background-color: var(--primary);\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: white;\n  font-size: 22px;\n  font-weight: 550;\n  letter-spacing: 0.9px;\n}\n\n.navbar-brand img {\n  padding-top: 10px;\n}\n\n.loading-spinner {\n  animation-duration: 0.75s;\n  animation-iteration-count: infinite;\n  animation-name: rotate-forever;\n  animation-timing-function: linear;\n  height: 30px;\n  width: 30px;\n  border: 3px solid var(--primary);\n  border-right-color: transparent;\n  border-radius: 50%;\n}\n\n.loading-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: calc(100vh - var(--navbar-height));\n}\n\n@keyframes rotate-forever {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.app-update {\n  display: none;\n  position: absolute;\n  right: 10px;\n}\n\n.app-update.show {\n  display: block;\n}\n\n.nav-btn {\n  margin: 25px;\n}\n\n.btn {\n  text-align: center;\n  display: inline-block;\n  padding: 0.5rem 1.2rem;\n  margin: 0;\n  text-decoration: none;\n  font-size: 1rem;\n  border-radius: 0.3rem;\n  border: 1px solid transparent;\n  outline: none;\n  color: #1a1a1a;\n  background-color: #aeaeae;\n  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\n}\n\n.btn:hover {\n  background-color: #cecece;\n  cursor: pointer;\n}\n\n.btn.btn-squared {\n  border-radius: 0;\n}\n\n.btn.btn-sm {\n  font-size: 0.85rem;\n  padding: 0.3rem 0.9rem;\n}\n\n.btn.btn-lg {\n  font-size: 1.25rem;\n  padding: 0.8rem 1.4rem;\n}\n\n.btn.btn-block {\n  width: 100%;\n  display: block;\n  text-align: center;\n}\n\n.btn.btn-primary {\n  background-color: #2d3e50;\n  color: #d9e9e8;\n}\n\n.btn.btn-primary:hover {\n  background-color: #57779a;\n}\n\n.btn.btn-danger {\n  background-color: #e64c66;\n  color: #ffffff;\n}\n\n.btn.btn-danger:hover {\n  background-color: #ee8294;\n}\n\n.btn.btn-info {\n  background-color: #1bbc9b;\n  color: #ffffff;\n}\n\n.btn.btn-info:hover {\n  background-color: #31e1bd;\n}\n\n.btn.btn-light {\n  background-color: #d9e9e8;\n  color: #1a1a1a;\n}\n\n.btn.btn-light:hover {\n  background-color: #84b8b4;\n}\n\n.btn.btn-dark {\n  background-color: #1a1a1a;\n  color: #d9e9e8;\n}\n\n.btn.btn-dark:hover {\n  background-color: #5f5f5f;\n}\n\n.btn.btn-white {\n  background-color: #ffffff;\n  color: #1a1a1a;\n}\n\n.btn.btn-white:hover {\n  background-color: #cccccc;\n}\n\n.btn.btn-black {\n  background-color: #000000;\n  color: #ffffff;\n}\n\n.btn.btn-black:hover {\n  background-color: #666666;\n}\n\n.btn.btn-link {\n  background-color: #1b89bc;\n  color: #ffffff;\n}\n\n.btn.btn-link:hover {\n  background-color: #31a9e1;\n}\n\n@media only screen and (max-width: 600px) {\n  .nav-btn {\n    display: none;\n  }\n\n  .navbar-brand {\n    display: none;\n  }\n\n  #navbar {\n    justify-content: center;\n  }\n\n  h1 {\n    font-size: 18px;\n  }\n}\n",""]);const c=i},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<n.length;u++){var l=[].concat(n[u]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:n=>{n.exports=function(n){return n[1]}},29:(n,t,e)=>{e.d(t,{X3:()=>v});const r=(n,t)=>t.some((t=>n instanceof t));let o,a;const i=new WeakMap,c=new WeakMap,s=new WeakMap,u=new WeakMap,l=new WeakMap;let f={get(n,t,e){if(n instanceof IDBTransaction){if("done"===t)return c.get(n);if("objectStoreNames"===t)return n.objectStoreNames||s.get(n);if("store"===t)return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return p(n[t])},set:(n,t,e)=>(n[t]=e,!0),has:(n,t)=>n instanceof IDBTransaction&&("done"===t||"store"===t)||t in n};function d(n){return"function"==typeof n?(t=n)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(a||(a=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...n){return t.apply(h(this),n),p(i.get(this))}:function(...n){return p(t.apply(h(this),n))}:function(n,...e){const r=t.call(h(this),n,...e);return s.set(r,n.sort?n.sort():[n]),p(r)}:(n instanceof IDBTransaction&&function(n){if(c.has(n))return;const t=new Promise(((t,e)=>{const r=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),r()},a=()=>{e(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)}));c.set(n,t)}(n),r(n,o||(o=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(n,f):n);var t}function p(n){if(n instanceof IDBRequest)return function(n){const t=new Promise(((t,e)=>{const r=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(p(n.result)),r()},a=()=>{e(n.error),r()};n.addEventListener("success",o),n.addEventListener("error",a)}));return t.then((t=>{t instanceof IDBCursor&&i.set(t,n)})).catch((()=>{})),l.set(t,n),t}(n);if(u.has(n))return u.get(n);const t=d(n);return t!==n&&(u.set(n,t),l.set(t,n)),t}const h=n=>l.get(n);function v(n,t,{blocked:e,upgrade:r,blocking:o,terminated:a}={}){const i=indexedDB.open(n,t),c=p(i);return r&&i.addEventListener("upgradeneeded",(n=>{r(p(i.result),n.oldVersion,n.newVersion,p(i.transaction))})),e&&i.addEventListener("blocked",(()=>e())),c.then((n=>{a&&n.addEventListener("close",(()=>a())),o&&n.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),c}const y=["get","getKey","getAll","getAllKeys","count"],m=["put","add","delete","clear"],g=new Map;function b(n,t){if(!(n instanceof IDBDatabase)||t in n||"string"!=typeof t)return;if(g.get(t))return g.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,o=m.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!o&&!y.includes(e))return;const a=async function(n,...t){const a=this.transaction(n,o?"readwrite":"readonly");let i=a.store;return r&&(i=i.index(t.shift())),(await Promise.all([i[e](...t),o&&a.done]))[0]};return g.set(t,a),a}var w;w=f,f={...w,get:(n,t,e)=>b(n,t)||w.get(n,t,e),has:(n,t)=>!!b(n,t)||w.has(n,t)}},962:(n,t,e)=>{var r=e(379),o=e.n(r),a=e(795),i=e.n(a),c=e(569),s=e.n(c),u=e(565),l=e.n(u),f=e(216),d=e.n(f),p=e(589),h=e.n(p),v=e(402),y={};y.styleTagTransform=h(),y.setAttributes=l(),y.insert=s().bind(null,"head"),y.domAPI=i(),y.insertStyleElement=d(),o()(v.Z,y),v.Z&&v.Z.locals&&v.Z.locals},379:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],u=r.base?s[0]+r.base:s[0],l=a[u]||0,f="".concat(u," ").concat(l);a[u]=l+1;var d=e(f),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)t[d].references++,t[d].updater(p);else{var h=o(p,r);r.byIndex=c,t.splice(c,0,{identifier:f,updater:h,references:1})}i.push(f)}return i}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=e(a[i]);t[c].references--}for(var s=r(n,o),u=0;u<a.length;u++){var l=e(a[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},131:(n,t,e)=>{e.d(t,{ZW:()=>p});try{self["workbox:window:6.5.4"]&&_()}catch(r){}function r(n,t){return new Promise((function(e){var r=new MessageChannel;r.port1.onmessage=function(n){e(n.data)},n.postMessage(t,[r.port2])}))}function o(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function a(n,t){var e;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(e=function(n,t){if(n){if("string"==typeof n)return o(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?o(n,t):void 0}}(n))||t&&n&&"number"==typeof n.length){e&&(n=e);var r=0;return function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(e=n[Symbol.iterator]()).next.bind(e)}try{self["workbox:core:6.5.4"]&&_()}catch(r){}var i=function(){var n=this;this.promise=new Promise((function(t,e){n.resolve=t,n.reject=e}))};function c(n,t){var e=location.href;return new URL(n,e).href===new URL(t,e).href}var s=function(n,t){this.type=n,Object.assign(this,t)};function u(n,t,e){return e?t?t(n):n:(n&&n.then||(n=Promise.resolve(n)),t?n.then(t):n)}function l(){}var f={type:"SKIP_WAITING"};function d(n,t){if(!t)return n&&n.then?n.then(l):Promise.resolve()}var p=function(n){var t,e;function o(t,e){var r,o;return void 0===e&&(e={}),(r=n.call(this)||this).nn={},r.tn=0,r.rn=new i,r.en=new i,r.on=new i,r.un=0,r.an=new Set,r.cn=function(){var n=r.fn,t=n.installing;r.tn>0||!c(t.scriptURL,r.sn.toString())||performance.now()>r.un+6e4?(r.vn=t,n.removeEventListener("updatefound",r.cn)):(r.hn=t,r.an.add(t),r.rn.resolve(t)),++r.tn,t.addEventListener("statechange",r.ln)},r.ln=function(n){var t=r.fn,e=n.target,o=e.state,a=e===r.vn,i={sw:e,isExternal:a,originalEvent:n};!a&&r.mn&&(i.isUpdate=!0),r.dispatchEvent(new s(o,i)),"installed"===o?r.wn=self.setTimeout((function(){"installed"===o&&t.waiting===e&&r.dispatchEvent(new s("waiting",i))}),200):"activating"===o&&(clearTimeout(r.wn),a||r.en.resolve(e))},r.dn=function(n){var t=r.hn,e=t!==navigator.serviceWorker.controller;r.dispatchEvent(new s("controlling",{isExternal:e,originalEvent:n,sw:t,isUpdate:r.mn})),e||r.on.resolve(t)},r.gn=(o=function(n){var t=n.data,e=n.ports,o=n.source;return u(r.getSW(),(function(){r.an.has(o)&&r.dispatchEvent(new s("message",{data:t,originalEvent:n,ports:e,sw:o}))}))},function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];try{return Promise.resolve(o.apply(this,n))}catch(n){return Promise.reject(n)}}),r.sn=t,r.nn=e,navigator.serviceWorker.addEventListener("message",r.gn),r}e=n,(t=o).prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e;var a,l=o.prototype;return l.register=function(n){var t=(void 0===n?{}:n).immediate,e=void 0!==t&&t;try{var r=this;return function(n,t){var e=n();return e&&e.then?e.then(t):t()}((function(){if(!e&&"complete"!==document.readyState)return d(new Promise((function(n){return window.addEventListener("load",n)})))}),(function(){return r.mn=Boolean(navigator.serviceWorker.controller),r.yn=r.pn(),u(r.bn(),(function(n){r.fn=n,r.yn&&(r.hn=r.yn,r.en.resolve(r.yn),r.on.resolve(r.yn),r.yn.addEventListener("statechange",r.ln,{once:!0}));var t=r.fn.waiting;return t&&c(t.scriptURL,r.sn.toString())&&(r.hn=t,Promise.resolve().then((function(){r.dispatchEvent(new s("waiting",{sw:t,wasWaitingBeforeRegister:!0}))})).then((function(){}))),r.hn&&(r.rn.resolve(r.hn),r.an.add(r.hn)),r.fn.addEventListener("updatefound",r.cn),navigator.serviceWorker.addEventListener("controllerchange",r.dn),r.fn}))}))}catch(n){return Promise.reject(n)}},l.update=function(){try{return this.fn?d(this.fn.update()):void 0}catch(n){return Promise.reject(n)}},l.getSW=function(){return void 0!==this.hn?Promise.resolve(this.hn):this.rn.promise},l.messageSW=function(n){try{return u(this.getSW(),(function(t){return r(t,n)}))}catch(n){return Promise.reject(n)}},l.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&r(this.fn.waiting,f)},l.pn=function(){var n=navigator.serviceWorker.controller;return n&&c(n.scriptURL,this.sn.toString())?n:void 0},l.bn=function(){try{var n=this;return function(n,t){try{var e=n()}catch(n){return t(n)}return e&&e.then?e.then(void 0,t):e}((function(){return u(navigator.serviceWorker.register(n.sn,n.nn),(function(t){return n.un=performance.now(),t}))}),(function(n){throw n}))}catch(n){return Promise.reject(n)}},(a=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&function(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}(o.prototype,a),o}(function(){function n(){this.Pn=new Map}var t=n.prototype;return t.addEventListener=function(n,t){this.Sn(n).add(t)},t.removeEventListener=function(n,t){this.Sn(n).delete(t)},t.dispatchEvent=function(n){n.target=this;for(var t,e=a(this.Sn(n.type));!(t=e()).done;)(0,t.value)(n)},t.Sn=function(n){return this.Pn.has(n)||this.Pn.set(n,new Set),this.Pn.get(n)},n}())}},a={};function i(n){var t=a[n];if(void 0!==t)return t.exports;var e=a[n]={id:n,exports:{}};return o[n](e,e.exports,i),e.exports}n="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",e="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",r=n=>{n&&n.d<1&&(n.d=1,n.forEach((n=>n.r--)),n.forEach((n=>n.r--?n.r++:n())))},i.a=(o,a,i)=>{var c;i&&((c=[]).d=-1);var s,u,l,f=new Set,d=o.exports,p=new Promise(((n,t)=>{l=t,u=n}));p[t]=d,p[n]=n=>(c&&n(c),f.forEach(n),p.catch((n=>{}))),o.exports=p,a((o=>{var a;s=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[n])return o;if(o.then){var a=[];a.d=0,o.then((n=>{i[t]=n,r(a)}),(n=>{i[e]=n,r(a)}));var i={};return i[n]=n=>n(a),i}}var c={};return c[n]=n=>{},c[t]=o,c})))(o);var i=()=>s.map((n=>{if(n[e])throw n[e];return n[t]})),u=new Promise((t=>{(a=()=>t(i)).r=0;var e=n=>n!==c&&!f.has(n)&&(f.add(n),n&&!n.d&&(a.r++,n.push(a)));s.map((t=>t[n](e)))}));return a.r?u:i()}),(n=>(n?l(p[e]=n):u(d),r(c)))),c&&c.d<0&&(c.d=0)},i.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return i.d(t,{a:t}),t},i.d=(n,t)=>{for(var e in t)i.o(t,e)&&!i.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})},i.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),i.nc=void 0,i(612)})();