(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a439"],{"044b":function(t,e){function n(t){return!!t.constructor&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function i(t){return"function"===typeof t.readFloatLE&&"function"===typeof t.slice&&n(t.slice(0,0))}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(n(t)||i(t)||!!t._isBuffer)}},"0a06":function(t,e,n){"use strict";var i=n("2444"),r=n("c532"),s=n("f6b49"),a=n("5270");function o(t){this.defaults=t,this.interceptors={request:new s,response:new s}}o.prototype.request=function(t){"string"===typeof t&&(t=r.merge({url:arguments[0]},arguments[1])),t=r.merge(i,{method:"get"},this.defaults,t),t.method=t.method.toLowerCase();var e=[a,void 0],n=Promise.resolve(t);this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});while(e.length)n=n.then(e.shift(),e.shift());return n},r.forEach(["delete","get","head","options"],function(t){o.prototype[t]=function(e,n){return this.request(r.merge(n||{},{method:t,url:e}))}}),r.forEach(["post","put","patch"],function(t){o.prototype[t]=function(e,n,i){return this.request(r.merge(i||{},{method:t,url:e,data:n}))}}),t.exports=o},"0bfb":function(t,e,n){"use strict";var i=n("cb7c");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"0df6":function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},"1d2b":function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),i=0;i<n.length;i++)n[i]=arguments[i];return t.apply(e,n)}}},"214f":function(t,e,n){"use strict";var i=n("32e9"),r=n("2aba"),s=n("79e5"),a=n("be13"),o=n("2b4c");t.exports=function(t,e,n){var c=o(t),l=n(a,c,""[t]),u=l[0],p=l[1];s(function(){var e={};return e[c]=function(){return 7},7!=""[t](e)})&&(r(String.prototype,t,u),i(RegExp.prototype,c,2==e?function(t,e){return p.call(t,this,e)}:function(t){return p.call(t,this)}))}},2444:function(t,e,n){"use strict";(function(e){var i=n("c532"),r=n("c8af"),s={"Content-Type":"application/x-www-form-urlencoded"};function a(t,e){!i.isUndefined(t)&&i.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function o(){var t;return"undefined"!==typeof XMLHttpRequest?t=n("b50d"):"undefined"!==typeof e&&(t=n("b50d")),t}var c={adapter:o(),transformRequest:[function(t,e){return r(e,"Content-Type"),i.isFormData(t)||i.isArrayBuffer(t)||i.isBuffer(t)||i.isStream(t)||i.isFile(t)||i.isBlob(t)?t:i.isArrayBufferView(t)?t.buffer:i.isURLSearchParams(t)?(a(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):i.isObject(t)?(a(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"===typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};i.forEach(["delete","get","head"],function(t){c.headers[t]={}}),i.forEach(["post","put","patch"],function(t){c.headers[t]=i.merge(s)}),t.exports=c}).call(this,n("4362"))},"28a5":function(t,e,n){n("214f")("split",2,function(t,e,i){"use strict";var r=n("aae3"),s=i,a=[].push,o="split",c="length",l="lastIndex";if("c"=="abbc"[o](/(b)*/)[1]||4!="test"[o](/(?:)/,-1)[c]||2!="ab"[o](/(?:ab)*/)[c]||4!="."[o](/(.?)(.?)/)[c]||"."[o](/()()/)[c]>1||""[o](/.?/)[c]){var u=void 0===/()??/.exec("")[1];i=function(t,e){var n=String(this);if(void 0===t&&0===e)return[];if(!r(t))return s.call(n,t,e);var i,o,p,f,d,m=[],v=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,y=void 0===e?4294967295:e>>>0,w=new RegExp(t.source,v+"g");u||(i=new RegExp("^"+w.source+"$(?!\\s)",v));while(o=w.exec(n)){if(p=o.index+o[0][c],p>h&&(m.push(n.slice(h,o.index)),!u&&o[c]>1&&o[0].replace(i,function(){for(d=1;d<arguments[c]-2;d++)void 0===arguments[d]&&(o[d]=void 0)}),o[c]>1&&o.index<n[c]&&a.apply(m,o.slice(1)),f=o[0][c],h=p,m[c]>=y))break;w[l]===o.index&&w[l]++}return h===n[c]?!f&&w.test("")||m.push(""):m.push(n.slice(h)),m[c]>y?m.slice(0,y):m}}else"0"[o](void 0,0)[c]&&(i=function(t,e){return void 0===t&&0===e?[]:s.call(this,t,e)});return[function(n,r){var s=t(this),a=void 0==n?void 0:n[e];return void 0!==a?a.call(n,s,r):i.call(String(s),n,r)},i]})},"2d83":function(t,e,n){"use strict";var i=n("387f");t.exports=function(t,e,n,r,s){var a=new Error(t);return i(a,e,n,r,s)}},"2e67":function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},"30b5":function(t,e,n){"use strict";var i=n("c532");function r(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,n){if(!e)return t;var s;if(n)s=n(e);else if(i.isURLSearchParams(e))s=e.toString();else{var a=[];i.forEach(e,function(t,e){null!==t&&"undefined"!==typeof t&&(i.isArray(t)?e+="[]":t=[t],i.forEach(t,function(t){i.isDate(t)?t=t.toISOString():i.isObject(t)&&(t=JSON.stringify(t)),a.push(r(e)+"="+r(t))}))}),s=a.join("&")}return s&&(t+=(-1===t.indexOf("?")?"?":"&")+s),t}},3846:function(t,e,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},"387f":function(t,e,n){"use strict";t.exports=function(t,e,n,i,r){return t.config=e,n&&(t.code=n),t.request=i,t.response=r,t}},3934:function(t,e,n){"use strict";var i=n("c532");t.exports=i.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(t){var i=t;return e&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=r(window.location.href),function(e){var n=i.isString(e)?r(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return function(){return!0}}()},4362:function(t,e,n){e.nextTick=function(t){setTimeout(t,0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,i="/";e.cwd=function(){return i},e.chdir=function(e){t||(t=n("df7c")),i=t.resolve(e,i)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"456d":function(t,e,n){var i=n("4bf8"),r=n("0d58");n("5eda")("keys",function(){return function(t){return r(i(t))}})},"467f":function(t,e,n){"use strict";var i=n("2d83");t.exports=function(t,e,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?e(i("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},5270:function(t,e,n){"use strict";var i=n("c532"),r=n("c401"),s=n("2e67"),a=n("2444"),o=n("d925"),c=n("e683");function l(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){l(t),t.baseURL&&!o(t.url)&&(t.url=c(t.baseURL,t.url)),t.headers=t.headers||{},t.data=r(t.data,t.headers,t.transformRequest),t.headers=i.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),i.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]});var e=t.adapter||a.adapter;return e(t).then(function(e){return l(t),e.data=r(e.data,e.headers,t.transformResponse),e},function(e){return s(e)||(l(t),e&&e.response&&(e.response.data=r(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},"5eda":function(t,e,n){var i=n("5ca1"),r=n("8378"),s=n("79e5");t.exports=function(t,e){var n=(r.Object||{})[t]||Object[t],a={};a[t]=e(n),i(i.S+i.F*s(function(){n(1)}),"Object",a)}},"6b54":function(t,e,n){"use strict";n("3846");var i=n("cb7c"),r=n("0bfb"),s=n("9e1e"),a="toString",o=/./[a],c=function(t){n("2aba")(RegExp.prototype,a,t,!0)};n("79e5")(function(){return"/a/b"!=o.call({source:"a",flags:"b"})})?c(function(){var t=i(this);return"/".concat(t.source,"/","flags"in t?t.flags:!s&&t instanceof RegExp?r.call(t):void 0)}):o.name!=a&&c(function(){return o.call(this)})},"7a77":function(t,e,n){"use strict";function i(t){this.message=t}i.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},i.prototype.__CANCEL__=!0,t.exports=i},"7aac":function(t,e,n){"use strict";var i=n("c532");t.exports=i.isStandardBrowserEnv()?function(){return{write:function(t,e,n,r,s,a){var o=[];o.push(t+"="+encodeURIComponent(e)),i.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),i.isString(r)&&o.push("path="+r),i.isString(s)&&o.push("domain="+s),!0===a&&o.push("secure"),document.cookie=o.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},"8df4b":function(t,e,n){"use strict";var i=n("7a77");function r(t){if("function"!==typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var n=this;t(function(t){n.reason||(n.reason=new i(t),e(n.reason))})}r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var t,e=new r(function(e){t=e});return{token:e,cancel:t}},t.exports=r},"9fa6":function(t,e,n){"use strict";var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function r(){this.message="String contains an invalid character"}function s(t){for(var e,n,s=String(t),a="",o=0,c=i;s.charAt(0|o)||(c="=",o%1);a+=c.charAt(63&e>>8-o%1*8)){if(n=s.charCodeAt(o+=.75),n>255)throw new r;e=e<<8|n}return a}r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",t.exports=s},aae3:function(t,e,n){var i=n("d3f4"),r=n("2d95"),s=n("2b4c")("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==r(t))}},b50d:function(t,e,n){"use strict";var i=n("c532"),r=n("467f"),s=n("30b5"),a=n("c345"),o=n("3934"),c=n("2d83"),l="undefined"!==typeof window&&window.btoa&&window.btoa.bind(window)||n("9fa6");t.exports=function(t){return new Promise(function(e,u){var p=t.data,f=t.headers;i.isFormData(p)&&delete f["Content-Type"];var d=new XMLHttpRequest,m="onreadystatechange",v=!1;if("undefined"===typeof window||!window.XDomainRequest||"withCredentials"in d||o(t.url)||(d=new window.XDomainRequest,m="onload",v=!0,d.onprogress=function(){},d.ontimeout=function(){}),t.auth){var h=t.auth.username||"",y=t.auth.password||"";f.Authorization="Basic "+l(h+":"+y)}if(d.open(t.method.toUpperCase(),s(t.url,t.params,t.paramsSerializer),!0),d.timeout=t.timeout,d[m]=function(){if(d&&(4===d.readyState||v)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?a(d.getAllResponseHeaders()):null,i=t.responseType&&"text"!==t.responseType?d.response:d.responseText,s={data:i,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:n,config:t,request:d};r(e,u,s),d=null}},d.onerror=function(){u(c("Network Error",t,null,d)),d=null},d.ontimeout=function(){u(c("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED",d)),d=null},i.isStandardBrowserEnv()){var w=n("7aac"),g=(t.withCredentials||o(t.url))&&t.xsrfCookieName?w.read(t.xsrfCookieName):void 0;g&&(f[t.xsrfHeaderName]=g)}if("setRequestHeader"in d&&i.forEach(f,function(t,e){"undefined"===typeof p&&"content-type"===e.toLowerCase()?delete f[e]:d.setRequestHeader(e,t)}),t.withCredentials&&(d.withCredentials=!0),t.responseType)try{d.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"===typeof t.onDownloadProgress&&d.addEventListener("progress",t.onDownloadProgress),"function"===typeof t.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){d&&(d.abort(),u(t),d=null)}),void 0===p&&(p=null),d.send(p)})}},bc3a:function(t,e,n){t.exports=n("cee4")},c345:function(t,e,n){"use strict";var i=n("c532"),r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,s,a={};return t?(i.forEach(t.split("\n"),function(t){if(s=t.indexOf(":"),e=i.trim(t.substr(0,s)).toLowerCase(),n=i.trim(t.substr(s+1)),e){if(a[e]&&r.indexOf(e)>=0)return;a[e]="set-cookie"===e?(a[e]?a[e]:[]).concat([n]):a[e]?a[e]+", "+n:n}}),a):a}},c401:function(t,e,n){"use strict";var i=n("c532");t.exports=function(t,e,n){return i.forEach(n,function(n){t=n(t,e)}),t}},c532:function(t,e,n){"use strict";var i=n("1d2b"),r=n("044b"),s=Object.prototype.toString;function a(t){return"[object Array]"===s.call(t)}function o(t){return"[object ArrayBuffer]"===s.call(t)}function c(t){return"undefined"!==typeof FormData&&t instanceof FormData}function l(t){var e;return e="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer,e}function u(t){return"string"===typeof t}function p(t){return"number"===typeof t}function f(t){return"undefined"===typeof t}function d(t){return null!==t&&"object"===typeof t}function m(t){return"[object Date]"===s.call(t)}function v(t){return"[object File]"===s.call(t)}function h(t){return"[object Blob]"===s.call(t)}function y(t){return"[object Function]"===s.call(t)}function w(t){return d(t)&&y(t.pipe)}function g(t){return"undefined"!==typeof URLSearchParams&&t instanceof URLSearchParams}function b(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}function C(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function _(t,e){if(null!==t&&"undefined"!==typeof t)if("object"!==typeof t&&(t=[t]),a(t))for(var n=0,i=t.length;n<i;n++)e.call(null,t[n],n,t);else for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.call(null,t[r],r,t)}function x(){var t={};function e(e,n){"object"===typeof t[n]&&"object"===typeof e?t[n]=x(t[n],e):t[n]=e}for(var n=0,i=arguments.length;n<i;n++)_(arguments[n],e);return t}function T(t,e,n){return _(e,function(e,r){t[r]=n&&"function"===typeof e?i(e,n):e}),t}t.exports={isArray:a,isArrayBuffer:o,isBuffer:r,isFormData:c,isArrayBufferView:l,isString:u,isNumber:p,isObject:d,isUndefined:f,isDate:m,isFile:v,isBlob:h,isFunction:y,isStream:w,isURLSearchParams:g,isStandardBrowserEnv:C,forEach:_,merge:x,extend:T,trim:b}},c8af:function(t,e,n){"use strict";var i=n("c532");t.exports=function(t,e){i.forEach(t,function(n,i){i!==e&&i.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[i])})}},cee4:function(t,e,n){"use strict";var i=n("c532"),r=n("1d2b"),s=n("0a06"),a=n("2444");function o(t){var e=new s(t),n=r(s.prototype.request,e);return i.extend(n,s.prototype,e),i.extend(n,e),n}var c=o(a);c.Axios=s,c.create=function(t){return o(i.merge(a,t))},c.Cancel=n("7a77"),c.CancelToken=n("8df4b"),c.isCancel=n("2e67"),c.all=function(t){return Promise.all(t)},c.spread=n("0df6"),t.exports=c,t.exports.default=c},d925:function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,i=t.length-1;i>=0;i--){var r=t[i];"."===r?t.splice(i,1):".."===r?(t.splice(i,1),n++):n&&(t.splice(i,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}var i=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,r=function(t){return i.exec(t).slice(1)};function s(t,e){if(t.filter)return t.filter(e);for(var n=[],i=0;i<t.length;i++)e(t[i],i,t)&&n.push(t[i]);return n}e.resolve=function(){for(var e="",i=!1,r=arguments.length-1;r>=-1&&!i;r--){var a=r>=0?arguments[r]:t.cwd();if("string"!==typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(e=a+"/"+e,i="/"===a.charAt(0))}return e=n(s(e.split("/"),function(t){return!!t}),!i).join("/"),(i?"/":"")+e||"."},e.normalize=function(t){var i=e.isAbsolute(t),r="/"===a(t,-1);return t=n(s(t.split("/"),function(t){return!!t}),!i).join("/"),t||i||(t="."),t&&r&&(t+="/"),(i?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(s(t,function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},e.relative=function(t,n){function i(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var r=i(t.split("/")),s=i(n.split("/")),a=Math.min(r.length,s.length),o=a,c=0;c<a;c++)if(r[c]!==s[c]){o=c;break}var l=[];for(c=o;c<r.length;c++)l.push("..");return l=l.concat(s.slice(o)),l.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){var e=r(t),n=e[0],i=e[1];return n||i?(i&&(i=i.substr(0,i.length-1)),n+i):"."},e.basename=function(t,e){var n=r(t)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){return r(t)[3]};var a="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},e683:function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},eca7:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"page-title"},[t._v("\n\t\t"+t._s(t.plotName)+"\n\t")]),n("div",{staticClass:"row"},[n("div",{staticClass:"col content"},[t.plotType===t.plotTypes.UNPAIRED.type?[t._v("\n\t\t\t\tThis page does estimation statistics' counterpart to Student’s t-test: the two-independent-groups mean difference plot.\n\t\t\t")]:t.plotType===t.plotTypes.PAIRED.type?[t._v("\n\t\t\t\tThis page will generate the estimation version of the paired t-test: the paired mean difference plot.\n\t\t\t")]:t.plotType===t.plotTypes.MULTI.type?[t._v("\n\t\t\t\tUse this page to make a single plot of several sets of two-groups data. This enables side-by-side comparison of multiple mean differences.\n\t\t\t")]:t.plotType===t.plotTypes.MULTI_PAIRED.type?[t._v("\n\t\t\t\tUse this page to make a single plot of multiple sets of paired data. Useful for side-by-side comparison of multiple paired mean differences.\n\t\t\t")]:t.plotType===t.plotTypes.SHARED_CONTROL.type?[t._v("\n\t\t\t\tUse this page to make a plot of experiments that share one reference control group.\n\t\t\t")]:t._e(),n("router-link",{attrs:{to:{name:"user-guide",params:{plotType:t.plotType}}}},[t._v("Find out more.")])],2)]),n("br"),n("div",{staticClass:"row"},[t._m(0),n("div",{staticClass:"col content"},[n("div",{staticClass:"row col"},[t._v("\n\t\t\t\tEnter your data.\n\t\t\t")]),t._m(1),n("div",{staticClass:"row"},[n("div",{staticClass:"col s12 input-types"},t._l(t.inputDataTypes,function(e){return n("span",{key:e.type},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.curentInputType,expression:"curentInputType"}],attrs:{type:"radio",id:e.type},domProps:{value:e.type,checked:t._q(t.curentInputType,e.type)},on:{change:function(n){t.curentInputType=e.type}}}),n("label",{attrs:{for:e.type}},[t._v(t._s(e.name))])])})),n("div",{directives:[{name:"show",rawName:"v-show",value:t.curentInputType===t.inputDataTypes.COPY_PASTE.type,expression:"curentInputType === inputDataTypes.COPY_PASTE.type"}],staticClass:"col s12"},[n("HotTable",{attrs:{settings:t.hotSettings}}),t._m(2)],1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.curentInputType===t.inputDataTypes.CSV.type,expression:"curentInputType === inputDataTypes.CSV.type"}],staticClass:"file-field input-field col s11 file-field input-field blue-text"},[n("div",{staticClass:"btn btn-large"},[n("span",[n("i",{staticClass:"medium material-icons left pe-7s-file"}),n("span",[t._v("Choose file")]),n("input",{ref:"file",attrs:{type:"file",name:"file",accept:".csv"},on:{change:t.onSelectFile}})])]),t._m(3)])])])]),n("div",{staticClass:"row"},[t._m(4),n("div",{staticClass:"col content"},[t._m(5),n("div",{staticClass:"row"},[n("div",{staticClass:"input-field col s12 m6 l6"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.yaxisLabel,expression:"yaxisLabel"}],attrs:{id:"yaxis",type:"text"},domProps:{value:t.yaxisLabel},on:{input:function(e){e.target.composing||(t.yaxisLabel=e.target.value)}}}),n("label",{attrs:{for:"yaxis"}},[t._v("y-axis label")])])])])]),n("div",{staticClass:"row"},[t._m(6),n("div",{staticClass:"col content"},[t._m(7),n("div",{staticClass:"row"},[n("div",{staticClass:"input-field col s12 m6 l6"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.ci,expression:"ci"}],attrs:{id:"ci",type:"number",step:"1",min:"1",max:"99",value:"95"},domProps:{value:t.ci},on:{input:function(e){e.target.composing||(t.ci=e.target.value)}}}),n("label",{attrs:{for:"ci"}},[t._v("CI width")])])])])]),n("div",{staticClass:"row"},[t._m(8),n("div",{staticClass:"col content"},[t._m(9),n("div",{staticClass:"row"},[n("div",{staticClass:"input-field col s12 m6 l3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.swarmYlimLower,expression:"swarmYlimLower"}],attrs:{id:"swarmYlimLower",type:"number",step:"any"},domProps:{value:t.swarmYlimLower},on:{input:function(e){e.target.composing||(t.swarmYlimLower=e.target.value)}}}),n("label",{attrs:{for:"swarmYlimLower"}},[t._v("lower limit")])]),n("div",{staticClass:"input-field col s12 m6 l3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.swarmYlimUpper,expression:"swarmYlimUpper"}],attrs:{id:"swarmYlimUpper",type:"number",step:"any"},domProps:{value:t.swarmYlimUpper},on:{input:function(e){e.target.composing||(t.swarmYlimUpper=e.target.value)}}}),n("label",{attrs:{for:"swarmYlimUpper"}},[t._v("upper limit")])])])])]),t.plotType===t.plotTypes.MULTI.type||t.plotType===t.plotTypes.MULTI_PAIRED.type||t.plotType===t.plotTypes.SHARED_CONTROL.type?[n("div",{staticClass:"row"},[t._m(10),n("div",{staticClass:"col content"},[t._m(11),n("div",{staticClass:"row"},[n("div",{staticClass:"input-field col s12 m6 l3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.conYlimLower,expression:"conYlimLower"}],attrs:{id:"conYlimLower",type:"number",step:"any"},domProps:{value:t.conYlimLower},on:{input:function(e){e.target.composing||(t.conYlimLower=e.target.value)}}}),n("label",{attrs:{for:"conYlimLower"}},[t._v("lower limit")])]),n("div",{staticClass:"input-field col s12 m6 l3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.conYlimUpper,expression:"conYlimUpper"}],attrs:{id:"conYlimUpper",type:"number",step:"any"},domProps:{value:t.conYlimUpper},on:{input:function(e){e.target.composing||(t.conYlimUpper=e.target.value)}}}),n("label",{attrs:{for:"conYlimUpper"}},[t._v("upper limit")])])])])])]:t._e(),n("div",{staticClass:"row"},[t.plotType===t.plotTypes.UNPAIRED.type||t.plotType===t.plotTypes.PAIRED.type?[t._m(12)]:t.plotType===t.plotTypes.MULTI.type||t.plotType===t.plotTypes.MULTI_PAIRED.type||t.plotType===t.plotTypes.SHARED_CONTROL.type?[t._m(13)]:t._e(),n("div",{staticClass:"col content"},[n("div",{staticClass:"row col"},[t._v("\n\t\t\t\tAnalyze and display your data.\n\t\t\t")]),n("div",{staticClass:"row"},[n("div",{staticClass:"file-field input-field col s12"},[n("div",{staticClass:"btn btn-large",class:{disabled:t.isAnalyzing||!t.analyable},on:{click:t.onAnalyze}},[t._m(14)]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isAnalyzing,expression:"isAnalyzing"}],staticClass:"preloader-wrapper active"},[t._m(15)])])]),n("div",{staticClass:"row"},[n("div",{staticClass:"file-field input-field col s12"},[t._.has(t.analyzedData,"png")?[n("img",{attrs:{src:"data:image/png;base64,"+t.analyzedData.png}})]:t._e()],2)])])],2),n("div",{staticClass:"row"},[t.plotType===t.plotTypes.UNPAIRED.type||t.plotType===t.plotTypes.PAIRED.type?[t._m(16)]:t.plotType===t.plotTypes.MULTI.type||t.plotType===t.plotTypes.MULTI_PAIRED.type||t.plotType===t.plotTypes.SHARED_CONTROL.type?[t._m(17)]:t._e(),n("div",{staticClass:"col content"},[t._m(18),n("div",{staticClass:"row"},[n("div",{staticClass:"col s12 file-types"},t._l(t.fileTypes,function(e){return n("span",{key:e.extension},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.fileExtension,expression:"fileExtension"}],attrs:{type:"radio",id:e.extension},domProps:{value:e.extension,checked:t._q(t.fileExtension,e.extension)},on:{change:function(n){t.fileExtension=e.extension}}}),n("label",{attrs:{for:e.extension}},[t._v(t._s(e.name))])])}))]),n("div",{staticClass:"row"},[n("div",{staticClass:"file-field input-field col s12"},[n("div",{staticClass:"btn btn-large",class:{disabled:t._.isEmpty(t.analyzedData)},on:{click:t.onDownload}},[t._m(19)])])])])],2)],2)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col number"},[n("i",{staticClass:"circle-number left"},[t._v("1")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row col"},[t._v("\n\t\t\tThe first row of the data MUST be names of the groups. "),n("span",{staticClass:"text",staticStyle:{"font-size":"19px"}},[t._v("See preloaded data.")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"text",staticStyle:{"font-size":"19px"}},[t._v(" The preloaded\n\t\t\t\t\t\t"),n("a",{attrs:{href:"https://www.rdocumentation.org/packages/PairedData/versions/0.9.9/topics/anscombe2"}},[t._v("anscombe2")]),t._v(" dataset consists of four sets of paired samples (n=15) giving the same paired t-test "),n("i",[t._v("P")]),t._v(" value, despite vastly divergent graphical relationships.\n\t\t\t\t\t")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"file-path-wrapper"},[n("input",{staticClass:"file-path validate",attrs:{id:"file-path",type:"text"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col number"},[n("i",{staticClass:"circle-number left"},[t._v("2")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row no-margin-bot"},[n("div",{staticClass:"col s12"},[t._v("\n\t\t\t\t\tLabel for the main plot y-axis.\n\t\t\t\t\t"),n("div",{staticStyle:{"font-size":"21px"}},[t._v('If left blank, defaults to "value".')])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col number"},[n("i",{staticClass:"circle-number left"},[t._v("3")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row no-margin-bot"},[n("div",{staticClass:"col s12"},[t._v("\n\t\t\t\t\tConfidence interval width.\n\t\t\t\t\t"),n("div",{staticStyle:{"font-size":"21px"}},[t._v("\n\t\t\t\t\t\tEnter an integer between 1 and 99.\n\t\t\t\t\t\tIf left blank, defaults to confidence interval(s) of 95%.")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col number"},[n("i",{staticClass:"circle-number left"},[t._v("5")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row no-margin-bot"},[n("div",{staticClass:"col s12"},[t._v("\n\t\t\t\t\tMain y-axis limits. "),n("div",{staticStyle:{"font-size":"21px"}},[t._v("\n\t\t\t\t\t\tIf left blank, the limits are auto-scaled.")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col number"},[n("i",{staticClass:"circle-number left"},[t._v("6")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row no-margin-bot"},[n("div",{staticClass:"col s12"},[t._v("\n\t\t\t\t\tBootstrapped difference y-axis limits. "),n("div",{staticStyle:{"font-size":"21px"}},[t._v("\n\t\t\t\t\t\tIf left blank, the limits are auto-scaled.")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col number"},[n("i",{staticClass:"circle-number left"},[t._v("6")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col number"},[n("i",{staticClass:"circle-number left"},[t._v("7")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("i",{staticClass:"medium material-icons left pe-7s-display1"}),n("span",{staticClass:"left"},[t._v("Analyze")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spinner-layer spinner-blue-only"},[n("div",{staticClass:"circle-clipper left"},[n("div",{staticClass:"circle"})]),n("div",{staticClass:"gap-patch"},[n("div",{staticClass:"circle"})]),n("div",{staticClass:"circle-clipper right"},[n("div",{staticClass:"circle"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col number"},[n("i",{staticClass:"circle-number left"},[t._v("7")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col number"},[n("i",{staticClass:"circle-number left"},[t._v("8")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row col"},[t._v("\n\t\t\t\tDownload results.\n\t\t\t\t"),n("br"),n("span",{staticClass:"text",staticStyle:{"font-size":"20px"}},[t._v("\n\t\t\t\t\tPlots are available in SVG or PNG formats.\n\t\t\t\t\t"),n("br"),t._v("The table of statistics can be downloaded as a CSV text file.\n\t\t\t\t")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("i",{staticClass:"medium material-icons left pe-7s-cloud-download"}),n("span",{staticClass:"left"},[t._v("Download")])])}];n("28a5");function s(t){if(Array.isArray(t))return t}function a(t,e){var n=[],i=!0,r=!1,s=void 0;try{for(var a,o=t[Symbol.iterator]();!(i=(a=o.next()).done);i=!0)if(n.push(a.value),e&&n.length===e)break}catch(t){r=!0,s=t}finally{try{i||null==o["return"]||o["return"]()}finally{if(r)throw s}}return n}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function c(t,e){return s(t)||a(t,e)||o()}n("7f7f"),n("ac6a"),n("7514"),n("cadf"),n("551c"),n("097d");var l=n("2ef0"),u=n.n(l),p=n("0594"),f=n("c9d9"),d=(n("6b54"),n("456d"),n("bc3a")),m=n.n(d),v=n("4d5c"),h=n.n(v);function y(){var t=window.location.protocol,e=window.location.host,n=e,i="api";return"".concat(t,"//").concat(n,"/").concat(i)}var w={baseURL:y(),timeout:6e4},g=m.a.create(w);g.interceptors.response.use(function(t){return t},function(t){return h.a.toast(u.a.get(t,"response.data.message","Oops! Something went wrong..."),5e3),Promise.reject(t)});var b={get:function(t,e){return g.get(t,e)},post:function(t,e,n){return g.post(t,e,n)}},C=b;function _(t,e,n){var i=new FormData;return i.append("file",t),i.append("plotType",e),u.a.isEmpty(n)||Object.keys(n).forEach(function(t){u.a.isEmpty(u.a.toString(n[t]))||i.append(t,n[t])}),C.post("/analyze",i,{headers:{"Content-Type":"multipart/form-data"}}).then(function(t){return t.data})}function x(t,e){if(!u.a.isEmpty(e)){var n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,0,null);var i=document.createElement("a");i.setAttribute("href",e),i.setAttribute("download","download_".concat(t)),i.dispatchEvent(n)}}Promise.resolve().then(n.bind(null,"0594"));var T={data:function(){var t=this;return{file:null,fileTypes:f["c"],fileExtension:f["c"].PNG.extension,inputDataTypes:f["d"],curentInputType:f["d"].COPY_PASTE.type,plotTypes:f["e"],yaxisLabel:"",swarmYlimLower:"",swarmYlimUpper:"",conYlimLower:"",conYlimUpper:"",analyzedData:{},fileName:"",isAnalyzing:!1,hotDataChangeTrigger:0,hot:null,hotSettings:{data:[["A1","A2","B1","B2","C1","C2","D1","D2"],[8.885,10.135,8,-35,3.375,6.625,.54,-.54],[14.38,11.94,7,-30,-.3,2.3,1.98,.02],[8.015,6.025,17,-25,10.025,11.975,1.1,.9],[5.835,3.045,15,-20,2.35,3.65,3.42,.58],[5.47,1.87,12,-15,7.675,8.325,2.54,1.46],[12.06,12.64,5,-10,9,9,1.655,2.345],[11.72,9.66,6,-5,7.325,6.675,4.865,1.135],[10.315,9.265,19,0,6.65,5.35,3.98,2.02],[5.065,6.155,16,5,4.975,3.025,3.1,2.9],[8.235,10.785,11,10,3.3,.7,2.215,3.785],[15.08,12.36,18,15,11.625,8.375,6.305,1.695],[13.485,10.175,9,20,17.765,8.235,5.42,2.58],[11.3,12.38,14,25,17.09,6.91,4.54,3.46],[9.82,9.66,13,30,19.41,8.59,3.655,4.345],[9.565,6.955,10,35,20.735,9.265,2.775,5.225]],width:800,height:400,minRows:15,minCols:10,colWidths:80,rowHeights:30,colHeaders:!0,rowHeaders:!0,manualColumnResize:!0,contextMenu:!0,afterInit:function(){t.hot=this},afterChange:function(){t.hotDataChangeTrigger++}}}},metaInfo:function(){return{title:this.plotName}},props:{plotType:{type:String,default:f["e"].UNPAIRED.type}},computed:{plotName:function(){var t=this,e=u.a.find(u.a.values(f["e"]),function(e){return e.type===t.plotType});return e?e.name:""},analyable:function(){if(this.curentInputType===f["d"].COPY_PASTE.type){if(this.hotDataChangeTrigger>0)for(var t=0;t<this.hot.countRows();t++)if(!this.hot.isEmptyRow(t))return!0;return!1}return!!this.file}},watch:{curentInputType:function(){var t=this;this.curentInputType===f["d"].COPY_PASTE.type&&this.hot&&this.$nextTick(function(){t.hot.render()})}},methods:{onAnalyze:function(){var t=this;this.analyzedData={};var e=this.curentInputType===f["d"].COPY_PASTE.type?this.createCsvByInputData():this.file,n=e.name.split("."),i=c(n,2),r=i[0],s=i[1];s===f["c"].CSV.extension&&(this.isAnalyzing=!0,_(e,this.plotType,this.getPlotOptions()).then(function(e){t.analyzedData=e,t.fileName=r,t.isAnalyzing=!1},function(){t.isAnalyzing=!1}))},onDownload:function(){x("".concat(this.fileName,".").concat(this.fileExtension),this.createFileContent())},onSelectFile:function(){this.file=this.$refs.file.files[0]},createFileContent:function(){var t="";return u.a.isEmpty(this.fileExtension)||(this.fileExtension!==f["c"].CSV.extension||u.a.isEmpty(this.analyzedData.csv)?u.a.isEmpty(this.analyzedData[this.fileExtension])||(t+="data:image/"+this.fileExtension+(this.fileExtension===f["c"].SVG.extension?"+xml":"")+";base64,"+this.analyzedData[this.fileExtension]):(t+="data:text/csv;encoding:=utf-8,",t+=f["a"]+this.analyzedData.columns.join(f["a"]),this.analyzedData.csv.forEach(function(e,n){t+=f["b"]+n+f["a"]+e.join(f["a"])}),t=encodeURI(t))),t},createCsvByInputData:function(){for(var t=u.a.cloneDeep(this.hot.getSourceData()),e=this.hot.countCols(),n=this.hot.countRows(),i=-1,r=-1,s=-1,a=-1,o=0;o<e;o++)this.hot.isEmptyCol(o)||(i<0&&(i=o),r=o);for(var c=0;c<n;c++)this.hot.isEmptyRow(c)||(s<0&&(s=c),a=c);var l=u.a.drop(u.a.take(t,a+1),s);l=u.a.map(l,function(t){return u.a.drop(u.a.take(t,r+1),i)});var p=u.a.map(l,function(t){return t.join(f["a"])}).join(f["b"]),d=new Blob([p],{type:"text/csv"});return d.lastModifiedDate=new Date,d.name="".concat(this.plotName,".csv"),d},getPlotOptions:function(){return{yaxisLabel:this.yaxisLabel,ci:this.ci,swarm_ylimLower:this.swarmYlimLower,swarm_ylimUpper:this.swarmYlimUpper,con_ylimLower:this.conYlimLower,con_ylimUpper:this.conYlimUpper}}},components:{HotTable:p["default"]}},E=T,A=n("2877"),S=Object(A["a"])(E,i,r,!1,null,null,null);S.options.__file="Analyze.vue";e["default"]=S.exports},f6b49:function(t,e,n){"use strict";var i=n("c532");function r(){this.handlers=[]}r.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},r.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},r.prototype.forEach=function(t){i.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=r}}]);
//# sourceMappingURL=chunk-a439.2623bbdf.js.map