!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=28)}([function(e,t,r){"use strict";var n=r(2),a=Object.prototype.toString;function o(e){return"[object Array]"===a.call(e)}function i(e){return void 0===e}function s(e){return null!==e&&"object"==typeof e}function u(e){return"[object Function]"===a.call(e)}function c(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),o(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.call(null,e[a],a,e)}e.exports={isArray:o,isArrayBuffer:function(e){return"[object ArrayBuffer]"===a.call(e)},isBuffer:function(e){return null!==e&&!i(e)&&null!==e.constructor&&!i(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isUndefined:i,isDate:function(e){return"[object Date]"===a.call(e)},isFile:function(e){return"[object File]"===a.call(e)},isBlob:function(e){return"[object Blob]"===a.call(e)},isFunction:u,isStream:function(e){return s(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:c,merge:function e(){var t={};function r(r,n){"object"==typeof t[n]&&"object"==typeof r?t[n]=e(t[n],r):t[n]=r}for(var n=0,a=arguments.length;n<a;n++)c(arguments[n],r);return t},deepMerge:function e(){var t={};function r(r,n){"object"==typeof t[n]&&"object"==typeof r?t[n]=e(t[n],r):t[n]="object"==typeof r?e({},r):r}for(var n=0,a=arguments.length;n<a;n++)c(arguments[n],r);return t},extend:function(e,t,r){return c(t,(function(t,a){e[a]=r&&"function"==typeof t?n(t,r):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(e,t,r){e.exports=r(11)},function(e,t,r){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},function(e,t,r){"use strict";var n=r(0);function a(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var o;if(r)o=r(t);else if(n.isURLSearchParams(t))o=t.toString();else{var i=[];n.forEach(t,(function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),i.push(a(t)+"="+a(e))})))})),o=i.join("&")}if(o){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}},function(e,t,r){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,r){"use strict";(function(t){var n=r(0),a=r(17),o={"Content-Type":"application/x-www-form-urlencoded"};function i(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var s,u={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==t&&"[object process]"===Object.prototype.toString.call(t))&&(s=r(6)),s),transformRequest:[function(e,t){return a(t,"Accept"),a(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(i(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},n.forEach(["delete","get","head"],(function(e){u.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){u.headers[e]=n.merge(o)})),e.exports=u}).call(this,r(16))},function(e,t,r){"use strict";var n=r(0),a=r(18),o=r(3),i=r(20),s=r(23),u=r(24),c=r(7);e.exports=function(e){return new Promise((function(t,l){var d=e.data,f=e.headers;n.isFormData(d)&&delete f["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var m=e.auth.username||"",h=e.auth.password||"";f.Authorization="Basic "+btoa(m+":"+h)}var y=i(e.baseURL,e.url);if(p.open(e.method.toUpperCase(),o(y,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in p?s(p.getAllResponseHeaders()):null,n={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:r,config:e,request:p};a(t,l,n),p=null}},p.onabort=function(){p&&(l(c("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){l(c("Network Error",e,null,p)),p=null},p.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),l(c(t,e,"ECONNABORTED",p)),p=null},n.isStandardBrowserEnv()){var g=r(25),v=(e.withCredentials||u(y))&&e.xsrfCookieName?g.read(e.xsrfCookieName):void 0;v&&(f[e.xsrfHeaderName]=v)}if("setRequestHeader"in p&&n.forEach(f,(function(e,t){void 0===d&&"content-type"===t.toLowerCase()?delete f[t]:p.setRequestHeader(t,e)})),n.isUndefined(e.withCredentials)||(p.withCredentials=!!e.withCredentials),e.responseType)try{p.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),l(e),p=null)})),void 0===d&&(d=null),p.send(d)}))}},function(e,t,r){"use strict";var n=r(19);e.exports=function(e,t,r,a,o){var i=new Error(e);return n(i,t,r,a,o)}},function(e,t,r){"use strict";var n=r(0);e.exports=function(e,t){t=t||{};var r={},a=["url","method","params","data"],o=["headers","auth","proxy"],i=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];n.forEach(a,(function(e){void 0!==t[e]&&(r[e]=t[e])})),n.forEach(o,(function(a){n.isObject(t[a])?r[a]=n.deepMerge(e[a],t[a]):void 0!==t[a]?r[a]=t[a]:n.isObject(e[a])?r[a]=n.deepMerge(e[a]):void 0!==e[a]&&(r[a]=e[a])})),n.forEach(i,(function(n){void 0!==t[n]?r[n]=t[n]:void 0!==e[n]&&(r[n]=e[n])}));var s=a.concat(o).concat(i),u=Object.keys(t).filter((function(e){return-1===s.indexOf(e)}));return n.forEach(u,(function(n){void 0!==t[n]?r[n]=t[n]:void 0!==e[n]&&(r[n]=e[n])})),r}},function(e,t,r){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},function(e,t,r){},function(e,t,r){"use strict";var n=r(0),a=r(2),o=r(12),i=r(8);function s(e){var t=new o(e),r=a(o.prototype.request,t);return n.extend(r,o.prototype,t),n.extend(r,t),r}var u=s(r(5));u.Axios=o,u.create=function(e){return s(i(u.defaults,e))},u.Cancel=r(9),u.CancelToken=r(26),u.isCancel=r(4),u.all=function(e){return Promise.all(e)},u.spread=r(27),e.exports=u,e.exports.default=u},function(e,t,r){"use strict";var n=r(0),a=r(3),o=r(13),i=r(14),s=r(8);function u(e){this.defaults=e,this.interceptors={request:new o,response:new o}}u.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[i,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)r=r.then(t.shift(),t.shift());return r},u.prototype.getUri=function(e){return e=s(this.defaults,e),a(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(e){u.prototype[e]=function(t,r){return this.request(n.merge(r||{},{method:e,url:t}))}})),n.forEach(["post","put","patch"],(function(e){u.prototype[e]=function(t,r,a){return this.request(n.merge(a||{},{method:e,url:t,data:r}))}})),e.exports=u},function(e,t,r){"use strict";var n=r(0);function a(){this.handlers=[]}a.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},a.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},a.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=a},function(e,t,r){"use strict";var n=r(0),a=r(15),o=r(4),i=r(5);function s(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return s(e),e.headers=e.headers||{},e.data=a(e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||i.adapter)(e).then((function(t){return s(e),t.data=a(t.data,t.headers,e.transformResponse),t}),(function(t){return o(t)||(s(e),t&&t.response&&(t.response.data=a(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},function(e,t,r){"use strict";var n=r(0);e.exports=function(e,t,r){return n.forEach(r,(function(r){e=r(e,t)})),e}},function(e,t){var r,n,a=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(e){if(r===setTimeout)return setTimeout(e,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:o}catch(e){r=o}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var u,c=[],l=!1,d=-1;function f(){l&&u&&(l=!1,u.length?c=u.concat(c):d=-1,c.length&&p())}function p(){if(!l){var e=s(f);l=!0;for(var t=c.length;t;){for(u=c,c=[];++d<t;)u&&u[d].run();d=-1,t=c.length}u=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new m(e,t)),1!==c.length||l||s(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=h,a.addListener=h,a.once=h,a.off=h,a.removeListener=h,a.removeAllListeners=h,a.emit=h,a.prependListener=h,a.prependOnceListener=h,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},function(e,t,r){"use strict";var n=r(0);e.exports=function(e,t){n.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))}},function(e,t,r){"use strict";var n=r(7);e.exports=function(e,t,r){var a=r.config.validateStatus;!a||a(r.status)?e(r):t(n("Request failed with status code "+r.status,r.config,null,r.request,r))}},function(e,t,r){"use strict";e.exports=function(e,t,r,n,a){return e.config=t,r&&(e.code=r),e.request=n,e.response=a,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,t,r){"use strict";var n=r(21),a=r(22);e.exports=function(e,t){return e&&!n(t)?a(e,t):t}},function(e,t,r){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,r){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,r){"use strict";var n=r(0),a=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,o,i={};return e?(n.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=n.trim(e.substr(0,o)).toLowerCase(),r=n.trim(e.substr(o+1)),t){if(i[t]&&a.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([r]):i[t]?i[t]+", "+r:r}})),i):i}},function(e,t,r){"use strict";var n=r(0);e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function a(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=a(window.location.href),function(t){var r=n.isString(t)?a(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}},function(e,t,r){"use strict";var n=r(0);e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,a,o,i){var s=[];s.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),n.isString(a)&&s.push("path="+a),n.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,r){"use strict";var n=r(9);function a(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new n(e),t(r.reason))}))}a.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},a.source=function(){var e;return{token:new a((function(t){e=t})),cancel:e}},e.exports=a},function(e,t,r){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,r){"use strict";r.r(t);var n={authorUser:{table:{id:"authorUser",alias:"All Users",columns:[{alias:"User ID",id:"id",dataType:"int"},{alias:"First Name",id:"first_name",dataType:"string"},{alias:"Last Name",id:"last_name",dataType:"string"},{alias:"Sortable Name",id:"sortable_name",dataType:"string"},{alias:"Department",id:"department",dataType:"string"},{alias:"Job Title",id:"job_title",dataType:"string"}]},path:"/api/author/users",data:"users"},authorCourseTemplates:{table:{id:"authorCourseTemplates",alias:"All Courses",columns:[{alias:"Course ID",id:"id",dataType:"int"},{alias:"Course Title",id:"title",dataType:"string"},{alias:"Is Published",id:"is_published",dataType:"bool"}]},path:"/api/author/course_templates",data:"course_templates"},authorListEnrollments:{table:{id:"authorListEnrollments",alias:"Course Enrollments",columns:[{alias:"Enrollment ID",id:"id",dataType:"int"},{alias:"Score",id:"score",dataType:"int"},{alias:"Is Required",id:"required",dataType:"bool"},{alias:"Name",id:"name",linkedSource:"learner",linkedId:"name",dataType:"string"},{alias:"User ID",id:"user_id",linkedSource:"learner",linkedId:"id",dataType:"int"}]},path:"/api/author/course_templates/*/enrollments",data:"enrollments",requiredParameter:{title:"Course",path:"/api/author/course_templates",data:"course_templates",nameCol:"title",valCol:"id"}},authorPrograms:{table:{id:"authorPrograms",alias:"All Programs",columns:[{alias:"Program ID",id:"id",dataType:"int"},{alias:"Program Title",id:"title",dataType:"string"},{alias:"Course Count",id:"course_count",dataType:"int"},{alias:"Unfinished Learners",id:"unfinished_learners_count",dataType:"int"},{alias:"Is Published",id:"is_published",dataType:"bool"}]},path:"/api/author/programs",data:"programs"}};var a=r(1),o=r.n(a);function i(e,t){var r;return r={},{apiCall:new URL(e),headers:{...{Authorization:t,"Content-Type":"application/json",Accept:"application/json"},...r}}}r(10);var s=new class{constructor(e){this.myConnector=tableau.makeConnector(),this.myTables={};var t=this;this.myConnector.init=function(e){tableau.log("init"),tableau.authType=tableau.authTypeEnum.custom,e()},this.myConnector.getSchema=function(e){tableau.log("getSchema");var r=JSON.parse(tableau.connectionData),a=[],o=1;for(var i of r.tables){var s=i.apiCall,u=JSON.parse(JSON.stringify(n[s])),c="table"+o;u.table.alias=i.title,u.table.id=c;o=o+1;if("requiredParameter"in i){var l=u.path.replace("*",i.requiredParameter);u.path=l}t.myTables[c]=u,a.push(u.table)}e(a)},this.myConnector.getData=function(r,n){tableau.log("getData");var a=JSON.parse(tableau.connectionData),o=r.tableInfo.id,i=t.myTables[o].path,s=new URL(i,a.url);e(r,n,s,t.myTables,tableau.password)},tableau.registerConnector(this.myConnector)}getApiKey(){return tableau.password}setApiKey(e){tableau.password=e}setConnectionData(e){tableau.connectionData=e}setConnectionName(e){tableau.connectionName=e}tableauSubmit(){tableau.submit()}}((function e(t,r,n,a,s){const u=i(n,s);o()({method:"get",url:u.apiCall,headers:u.headers}).then((function(n){var o=n.data;!function(e,t,r){for(var n=t[e.tableInfo.id],a=r[n.data],o=[],i=0,s=a.length;i<s;i++){var u={};for(var c of n.table.columns)if("linkedSource"in c){var l=c.id,d=c.linkedSource,f=c.linkedId,p=a[i].links[d].id,m=a[i].links[d].type,h=r.linked[m].filter((function(e){return e.id===p}));1==h.length?u[l]=h[0][f]:u[l]=null}else{u[p=c.id]=a[i][p]}o.push(u)}e.appendRows(o)}(t,a,o),o.meta.hasOwnProperty("next")?e(t,r,o.meta.next,a,s):r()})).catch((function(e){console.log(e),r()}))}));$(document).ready((function(){var e=function(e,t,r){var n=document.createElement("option");n.innerText=e,n.setAttribute("value",t),r.appendChild(n)},t=function(){document.getElementById("requiredParameterSelector").innerHTML=""},r=function(e,t){document.getElementById(e).style.display=t?"":"none"},a=function(e,t){r(e,!1),r(t,!0)},u=function(e){e?(document.getElementById("addButton").disabled=!0,document.getElementById("addButton").innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span><span class="sr-only">Loading...</span>'):(document.getElementById("addButton").disabled=!1,document.getElementById("addButton").innerHTML="Add")};window.editTable=function(e){document.getElementById("tableName").value=$("#"+e+" .title").text(),document.getElementById("edit-section").setAttribute("currentTable",e);var o=document.getElementById(e).getAttribute("data-api");"requiredParameter"in n[o]?(t(),r("requiredParameter",!0),document.getElementById("requiredParameterTitle").innerText=n[o].requiredParameter.title,c(new URL(n[o].requiredParameter.path,$("#url").val()),o)):(r("requiredParameter",!1),a("api-section","edit-section"))};window.deleteTable=function(e){var t=$("#apiList li").length;$("#"+e).remove(),console.log("deleted:"+e);for(var n=parseInt(e)+1;n<t;n++){var a=n-1;console.log(`oldId:${n}; newId:${a}`),$("#"+n+" .deleteButton").attr("onclick","deleteTable("+a+")"),$("#"+n+" .editButton").attr("onclick","editTable("+a+")"),document.getElementById(n).setAttribute("id",a)}$("#apiList li").length<=0&&r("emptyApiListMessage",!0)},$("#submitButton").click((function(){var e=document.getElementById("apiList").getElementsByTagName("li"),t=[];for(var r of e){var n={apiCall:r.getAttribute("data-api"),title:r.getElementsByClassName("title")[0].innerText};r.hasAttribute("data-require")&&(n.requiredParameter=r.getAttribute("data-require")),t.push(n)}var a={url:$("#url").val(),tables:t};s.setConnectionData(JSON.stringify(a)),s.setApiKey($("#apiKey").val()),s.setConnectionName("Bridge API"),s.tableauSubmit()}));var c=function(t,r,s){const l=i(t,s);o()({method:"get",url:l.apiCall,headers:l.headers}).then((function(t){for(var o=t.data,i=n[r],l=o[i.requiredParameter.data],d=i.requiredParameter.nameCol,f=i.requiredParameter.valCol,p=document.getElementById("requiredParameterSelector"),m=0,h=l.length;m<h;m++)e(l[m][d],l[m][f],p);o.meta.hasOwnProperty("next")?c(o.meta.next,r,s):(a("api-section","edit-section"),u(!1))})).catch((function(e){console.log(e),u(!1),alert("Could not fetch course data, check that the url and api key are correct.")}))};$("#addButton").click((function(){var e=document.getElementById("apiSelector").value;document.getElementById("tableName").value=n[e].table.alias,document.getElementById("edit-section").setAttribute("currentTable",$("#apiList li").length),"requiredParameter"in n[e]?(u(!0),t(),r("requiredParameter",!0),document.getElementById("requiredParameterTitle").innerText=n[e].requiredParameter.title,c(new URL(n[e].requiredParameter.path,$("#url").val()),e,$("#apiKey").val())):(r("requiredParameter",!1),a("api-section","edit-section"))})),$("#editDoneButton").click((function(){var e=document.getElementById("edit-section").getAttribute("currentTable"),t=$("#apiList li").length;if(e<t){$("#"+e+" .title").text(document.getElementById("tableName").value);var o=document.getElementById("apiSelector").value;if("requiredParameter"in n[o]){var i=document.getElementById("requiredParameterSelector").value;document.getElementById(e).setAttribute("data-require",i)}}else{t<=0&&r("emptyApiListMessage",!1);var s=document.createElement("li");o=document.getElementById("apiSelector").value;if(s.setAttribute("data-api",o),s.setAttribute("class","list-group-item"),s.setAttribute("id",e),"requiredParameter"in n[o]){i=document.getElementById("requiredParameterSelector").value;s.setAttribute("data-require",i)}var u=document.createElement("div");u.setAttribute("class","title"),u.innerText=document.getElementById("tableName").value;var c=document.createElement("button");c.setAttribute("class","btn btn-light mx-1 editButton"),c.setAttribute("type","button"),c.innerText="Edit";var l=document.createElement("button");l.setAttribute("class","btn btn-light mx-1 deleteButton"),l.setAttribute("type","button"),l.innerText="Delete";var d=document.createElement("span");d.appendChild(c),d.appendChild(l);var f=document.createElement("div");f.setAttribute("class","col titleColumn");var p=document.createElement("div");p.setAttribute("class","col-xs-auto");var m=document.createElement("div");m.setAttribute("class","row"),f.appendChild(u),p.appendChild(d),m.appendChild(f),m.appendChild(p),s.appendChild(m),document.getElementById("apiList").appendChild(s),$("#"+e+" .deleteButton").attr("onclick","deleteTable("+e+")"),$("#"+e+" .editButton").attr("onclick","editTable("+e+")")}a("edit-section","api-section")})),$("#resetButton").click((function(){a("api-section","url-section")})),$("#credentialsButton").click((function(){a("url-section","api-section")})),$("#addParameterButton").click((function(){})),function(t){var r=document.getElementById("apiSelector");for(var n in t)if(t.hasOwnProperty(n)){var a=t[n].table.alias,o=t[n].table.id;e(a,o,r)}}(n)}))}]);