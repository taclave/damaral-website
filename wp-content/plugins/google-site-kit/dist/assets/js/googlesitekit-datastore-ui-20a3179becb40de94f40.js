(window.__googlesitekit_webpackJsonp=window.__googlesitekit_webpackJsonp||[]).push([[13],{1:function(r,t){r.exports=googlesitekit.i18n},10:function(r,t,e){"use strict";e.d(t,"z",(function(){return u.b})),e.d(t,"w",(function(){return c.a})),e.d(t,"A",(function(){return c.b})),e.d(t,"y",(function(){return p})),e.d(t,"f",(function(){return v.a})),e.d(t,"m",(function(){return v.b})),e.d(t,"u",(function(){return g.c})),e.d(t,"v",(function(){return g.d})),e.d(t,"r",(function(){return g.b})),e.d(t,"l",(function(){return g.a})),e.d(t,"s",(function(){return m})),e.d(t,"g",(function(){return O})),e.d(t,"b",(function(){return w.b})),e.d(t,"a",(function(){return w.a})),e.d(t,"c",(function(){return w.e})),e.d(t,"i",(function(){return w.f})),e.d(t,"x",(function(){return w.k})),e.d(t,"j",(function(){return j.b})),e.d(t,"q",(function(){return j.c})),e.d(t,"e",(function(){return j.a})),e.d(t,"o",(function(){return S.b})),e.d(t,"k",(function(){return S.a})),e.d(t,"t",(function(){return S.d})),e.d(t,"p",(function(){return E})),e.d(t,"n",(function(){return k})),e.d(t,"d",(function(){return _})),e.d(t,"B",(function(){return A})),e.d(t,"h",(function(){return D}));var n=e(125),o=e.n(n),a=e(121),i=e.n(a),u=e(35),c=e(65),s=e(29),f=e.n(s),l=e(78),d=e.n(l),p=function(r){return d()(JSON.stringify(function r(t){var e={};return Object.keys(t).sort().forEach((function(n){var o=t[n];o&&"object"===f()(o)&&!Array.isArray(o)&&(o=r(o)),e[n]=o})),e}(r)))};var v=e(80),g=(e(84),e(72));function b(r){return r.replace(/\[([^\]]+)\]\((https?:\/\/[^\/]+\.\w+\/?.*?)\)/gi,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')}function h(r){return"<p>".concat(r.replace(/\n{2,}/g,"</p><p>"),"</p>")}function y(r){return r.replace(/\n/gi,"<br>")}function m(r){for(var t=r,e=0,n=[b,h,y];e<n.length;e++){t=(0,n[e])(t)}return t}var O=function(r){return r=parseFloat(r),isNaN(r)||0===r?[0,0,0,0]:[Math.floor(r/60/60),Math.floor(r/60%60),Math.floor(r%60),Math.floor(1e3*r)-1e3*Math.floor(r)]},w=e(69),j=e(85),S=e(49);function E(r){if("number"==typeof r)return!0;var t=(r||"").toString();return!!t&&!isNaN(t)}var k=function(r){switch(r){case"minute":return 60;case"hour":return 3600;case"day":return 86400;case"week":return 604800;case"month":return 2592e3;case"year":return 31536e3}},_=function(r,t){if("0"===r||0===r||isNaN(r))return null;var e=(t-r)/r;return isNaN(e)||!o()(e)?null:e},A=function(r){try{return JSON.parse(r)&&!!r}catch(r){return!1}},D=function(r){if(!r)return"";var t=r.replace(/&#(\d+);/g,(function(r,t){return String.fromCharCode(t)})).replace(/(\\)/g,"");return i()(t)}},101:function(r,t,e){"use strict";e.d(t,"a",(function(){return b})),e.d(t,"c",(function(){return y})),e.d(t,"b",(function(){return m}));var n=e(18),o=e.n(n),a=e(6),i=e.n(a),u=e(5),c=e.n(u),s=e(7),f=e.n(s),l=e(4),d=e.n(l),p=e(46),v=e(10),g=d.a.createRegistryControl,b=function(r){var t;f()(r,"storeName is required to create a snapshot store.");var e={},n={deleteSnapshot:c.a.mark((function r(){var t;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,{payload:{},type:"DELETE_SNAPSHOT"};case 2:return t=r.sent,r.abrupt("return",t);case 4:case"end":return r.stop()}}),r)})),restoreSnapshot:c.a.mark((function r(){var t,e,n,o,a,i,u=arguments;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:{},e=t.clearAfterRestore,n=void 0===e||e,r.next=4,{payload:{},type:"RESTORE_SNAPSHOT"};case 4:if(o=r.sent,a=o.cacheHit,i=o.value,!a){r.next=13;break}return r.next=10,{payload:{snapshot:i},type:"SET_STATE_FROM_SNAPSHOT"};case 10:if(!n){r.next=13;break}return r.next=13,{payload:{},type:"DELETE_SNAPSHOT"};case 13:return r.abrupt("return",a);case 14:case"end":return r.stop()}}),r)})),createSnapshot:c.a.mark((function r(){var t;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,{payload:{},type:"CREATE_SNAPSHOT"};case 2:return t=r.sent,r.abrupt("return",t);case 4:case"end":return r.stop()}}),r)}))},a=(t={},i()(t,"DELETE_SNAPSHOT",(function(){return Object(p.a)("datastore::cache::".concat(r))})),i()(t,"CREATE_SNAPSHOT",g((function(t){return function(){return Object(p.d)("datastore::cache::".concat(r),t.stores[r].store.getState())}}))),i()(t,"RESTORE_SNAPSHOT",(function(){return Object(p.b)("datastore::cache::".concat(r),v.b)})),t);return{initialState:e,actions:n,controls:a,reducer:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"SET_STATE_FROM_SNAPSHOT":var i=a.snapshot,u=(i.error,o()(i,["error"]));return u;default:return r}}}},h=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.a;return Object.values(r.stores).filter((function(r){return Object.keys(r.getActions()).includes("restoreSnapshot")}))},y=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.a;return Promise.all(h(r).map((function(r){return r.getActions().createSnapshot()})))},m=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.a;return Promise.all(h(r).map((function(r){return r.getActions().restoreSnapshot()})))}},1126:function(r,t,e){"use strict";e.r(t);var n=e(4),o=e.n(n),a=e(53),i=e(101),u=e(6),c=e.n(u),s=e(5),f=e.n(s),l=e(7),d=e.n(l),p=e(58),v=e.n(p),g=e(32);function b(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function h(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?b(Object(e),!0).forEach((function(t){c()(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):b(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}var y={resetInViewHook:f.a.mark((function r(){var t,e;return f.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.a.commonActions.getRegistry();case 2:return t=r.sent,e=t.select(g.b).getValue("useInViewResetCount"),r.next=6,y.setValue("useInViewResetCount",e+1);case 6:return r.abrupt("return",r.sent);case 7:case"end":return r.stop()}}),r)})),setValues:function(r){return d()(v()(r),"values must be an object."),{payload:{values:r},type:"SET_VALUES"}},setValue:function(r,t){return d()(r,"key is required."),{payload:{key:r,value:t},type:"SET_VALUE"}}},m={initialState:{useInViewResetCount:0},actions:y,controls:{},reducer:function(r,t){var e=t.type,n=t.payload;switch(e){case"SET_VALUES":var o=n.values;return h(h({},r),o);case"SET_VALUE":var a=n.key,i=n.value;return h(h({},r),{},c()({},a,i));default:return r}},resolvers:{},selectors:{getValue:function(r,t){return r[t]},getInViewResetHook:function(r){return r.useInViewResetCount}}},O=o.a.combineStores(o.a.commonStore,m,Object(i.a)(g.b),Object(a.b)(g.b));O.initialState,O.actions,O.controls,O.reducer,O.resolvers,O.selectors;o.a.registerStore(g.b,O)},30:function(r,t,e){"use strict";e.d(t,"a",(function(){return n})),e.d(t,"b",(function(){return o}));var n="_googlesitekitDataLayer",o="data-googlesitekit-gtag"},32:function(r,t,e){"use strict";e.d(t,"b",(function(){return n})),e.d(t,"a",(function(){return o}));var n="core/ui",o="activeContextID"},35:function(r,t,e){"use strict";(function(r){e.d(t,"a",(function(){return m})),e.d(t,"b",(function(){return y}));var n=e(86),o=r._googlesitekitTrackingData||{},a=o.activeModules,i=void 0===a?[]:a,u=o.isSiteKitScreen,c=o.trackingEnabled,s=o.trackingID,f=o.referenceSiteURL,l=o.userIDHash,d=o.isAuthenticated,p={activeModules:i,trackingEnabled:c,trackingID:s,referenceSiteURL:f,userIDHash:l,isSiteKitScreen:u,userRoles:o.userRoles,isAuthenticated:d,pluginVersion:"1.85.0"},v=Object(n.a)(p),g=v.enableTracking,b=v.disableTracking,h=(v.isTrackingEnabled,v.initializeSnippet),y=v.trackEvent;function m(r){r?g():b()}u&&c&&h()}).call(this,e(21))},36:function(r,t,e){"use strict";e.d(t,"c",(function(){return n})),e.d(t,"e",(function(){return o})),e.d(t,"d",(function(){return a})),e.d(t,"b",(function(){return i})),e.d(t,"a",(function(){return u})),e.d(t,"f",(function(){return c}));var n="Date param must construct to a valid date instance or be a valid date instance itself.",o="Invalid dateString parameter, it must be a string.",a='Invalid date range, it must be a string with the format "last-x-days".',i=3600,u=86400,c=604800},37:function(r,t,e){"use strict";e.d(t,"a",(function(){return n}));var n=function(r){return r instanceof Date&&!isNaN(r)}},38:function(r,t,e){"use strict";e.d(t,"a",(function(){return s}));var n=e(13),o=e.n(n),a=e(7),i=e.n(a),u=e(36),c=e(42),s=function(r){i()(Object(c.a)(r),u.e);var t=r.split("-"),e=o()(t,3),n=e[0],a=e[1],s=e[2];return new Date(n,a-1,s)}},4:function(r,t){r.exports=googlesitekit.data},41:function(r,t,e){"use strict";(function(r){var n,o;e.d(t,"a",(function(){return a})),e.d(t,"b",(function(){return i}));var a=new Set((null===(n=r)||void 0===n||null===(o=n._googlesitekitBaseData)||void 0===o?void 0:o.enabledFeatures)||[]),i=function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a;return t instanceof Set&&t.has(r)}}).call(this,e(21))},42:function(r,t,e){"use strict";e.d(t,"a",(function(){return o}));var n=e(37),o=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t="string"==typeof r;if(!t)return!1;var e=r.split("-");return 3===e.length&&Object(n.a)(new Date(r))}},46:function(r,t,e){"use strict";(function(r){e.d(t,"b",(function(){return h})),e.d(t,"d",(function(){return y})),e.d(t,"a",(function(){return m})),e.d(t,"c",(function(){return O}));var n=e(5),o=e.n(n),a=e(14),i=e.n(a),u=(e(24),e(10));function c(r,t){var e="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!e){if(Array.isArray(r)||(e=function(r,t){if(!r)return;if("string"==typeof r)return s(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);"Object"===e&&r.constructor&&(e=r.constructor.name);if("Map"===e||"Set"===e)return Array.from(r);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return s(r,t)}(r))||t&&r&&"number"==typeof r.length){e&&(r=e);var n=0,o=function(){};return{s:o,n:function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}},e:function(r){throw r},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){e=e.call(r)},n:function(){var r=e.next();return i=r.done,r},e:function(r){u=!0,a=r},f:function(){try{i||null==e.return||e.return()}finally{if(u)throw a}}}}function s(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}var f,l="googlesitekit_".concat("1.85.0","_"),d=["sessionStorage","localStorage"],p=[].concat(d),v=function(){var t=i()(o.a.mark((function t(e){var n,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=r[e]){t.next=3;break}return t.abrupt("return",!1);case 3:return t.prev=3,a="__storage_test__",n.setItem(a,a),n.removeItem(a),t.abrupt("return",!0);case 10:return t.prev=10,t.t0=t.catch(3),t.abrupt("return",t.t0 instanceof DOMException&&(22===t.t0.code||1014===t.t0.code||"QuotaExceededError"===t.t0.name||"NS_ERROR_DOM_QUOTA_REACHED"===t.t0.name)&&0!==n.length);case 13:case"end":return t.stop()}}),t,null,[[3,10]])})));return function(r){return t.apply(this,arguments)}}();function g(){return b.apply(this,arguments)}function b(){return(b=i()(o.a.mark((function t(){var e,n,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0===f){t.next=2;break}return t.abrupt("return",f);case 2:e=c(p),t.prev=3,e.s();case 5:if((n=e.n()).done){t.next=15;break}if(a=n.value,!f){t.next=9;break}return t.abrupt("continue",13);case 9:return t.next=11,v(a);case 11:if(!t.sent){t.next=13;break}f=r[a];case 13:t.next=5;break;case 15:t.next=20;break;case 17:t.prev=17,t.t0=t.catch(3),e.e(t.t0);case 20:return t.prev=20,e.f(),t.finish(20);case 23:return void 0===f&&(f=null),t.abrupt("return",f);case 25:case"end":return t.stop()}}),t,null,[[3,17,20,23]])})))).apply(this,arguments)}var h=function(){var r=i()(o.a.mark((function r(t){var e,n,a,i,u,c,s;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,g();case 2:if(!(e=r.sent)){r.next=10;break}if(!(n=e.getItem("".concat(l).concat(t)))){r.next=10;break}if(a=JSON.parse(n),i=a.timestamp,u=a.ttl,c=a.value,s=a.isError,!i||u&&!(Math.round(Date.now()/1e3)-i<u)){r.next=10;break}return r.abrupt("return",{cacheHit:!0,value:c,isError:s});case 10:return r.abrupt("return",{cacheHit:!1,value:void 0});case 11:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),y=function(){var t=i()(o.a.mark((function t(e,n){var a,i,c,s,f,d,p,v,b=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=b.length>2&&void 0!==b[2]?b[2]:{},i=a.ttl,c=void 0===i?u.b:i,s=a.timestamp,f=void 0===s?Math.round(Date.now()/1e3):s,d=a.isError,p=void 0!==d&&d,t.next=3,g();case 3:if(!(v=t.sent)){t.next=14;break}return t.prev=5,v.setItem("".concat(l).concat(e),JSON.stringify({timestamp:f,ttl:c,value:n,isError:p})),t.abrupt("return",!0);case 10:return t.prev=10,t.t0=t.catch(5),r.console.warn("Encountered an unexpected storage error:",t.t0),t.abrupt("return",!1);case 14:return t.abrupt("return",!1);case 15:case"end":return t.stop()}}),t,null,[[5,10]])})));return function(r,e){return t.apply(this,arguments)}}(),m=function(){var t=i()(o.a.mark((function t(e){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g();case 2:if(!(n=t.sent)){t.next=13;break}return t.prev=4,n.removeItem("".concat(l).concat(e)),t.abrupt("return",!0);case 9:return t.prev=9,t.t0=t.catch(4),r.console.warn("Encountered an unexpected storage error:",t.t0),t.abrupt("return",!1);case 13:return t.abrupt("return",!1);case 14:case"end":return t.stop()}}),t,null,[[4,9]])})));return function(r){return t.apply(this,arguments)}}(),O=function(){var t=i()(o.a.mark((function t(){var e,n,a,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g();case 2:if(!(e=t.sent)){t.next=14;break}for(t.prev=4,n=[],a=0;a<e.length;a++)0===(i=e.key(a)).indexOf(l)&&n.push(i.substring(l.length));return t.abrupt("return",n);case 10:return t.prev=10,t.t0=t.catch(4),r.console.warn("Encountered an unexpected storage error:",t.t0),t.abrupt("return",[]);case 14:return t.abrupt("return",[]);case 15:case"end":return t.stop()}}),t,null,[[4,10]])})));return function(){return t.apply(this,arguments)}}()}).call(this,e(21))},49:function(r,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"a",(function(){return a})),e.d(t,"d",(function(){return i})),e.d(t,"c",(function(){return u})),e.d(t,"e",(function(){return c}));var n=e(117);function o(r){try{return new URL(r).pathname}catch(r){}return null}function a(r,t){try{return new URL(t,r).href}catch(r){}return("string"==typeof r?r:"")+("string"==typeof t?t:"")}function i(r){return"string"!=typeof r?r:r.replace(/^https?:\/\/(www\.)?/i,"").replace(/\/$/,"")}function u(r){return/^#\w[A-Za-z0-9-_]*$/.test(r)}function c(r,t){if(!Object(n.a)(r))return r;if(r.length<=t)return r;var e=new URL(r),o=r.replace(e.origin,"");if(o.length<t)return o;var a=o.length-Math.floor(t)+1;return"…"+o.substr(a)}},52:function(r,t,e){"use strict";e.d(t,"a",(function(){return o}));var n=e(30);function o(r){return function(){r[n.a]=r[n.a]||[],r[n.a].push(arguments)}}},53:function(r,t,e){"use strict";e.d(t,"a",(function(){return g})),e.d(t,"b",(function(){return b}));var n=e(6),o=e.n(n),a=e(29),i=e.n(a),u=e(7),c=e.n(u),s=e(78),f=e.n(s),l=e(10);function d(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function p(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?d(Object(e),!0).forEach((function(t){o()(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):d(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}function v(r,t){if(t&&Array.isArray(t)){var e=t.map((function(r){return"object"===i()(r)?Object(l.y)(r):r}));return"".concat(r,"::").concat(f()(JSON.stringify(e)))}return r}var g={receiveError:function(r,t,e){return c()(r,"error is required."),t&&c()(e&&Array.isArray(e),"args is required (and must be an array) when baseName is specified."),{type:"RECEIVE_ERROR",payload:{error:r,baseName:t,args:e}}},clearError:function(r,t){return r&&c()(t&&Array.isArray(t),"args is required (and must be an array) when baseName is specified."),{type:"CLEAR_ERROR",payload:{baseName:r,args:t}}},clearErrors:function(r){return{type:"CLEAR_ERRORS",payload:{baseName:r}}}};function b(r){c()(r,"storeName must be defined.");var t={getErrorForSelector:function(e,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];c()(n,"selectorName is required.");var a=t.getError(e,n,o);if(a)return p(p({},a),{},{selectorData:{storeName:r,name:n,args:o}})},getErrorForAction:function(r,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return c()(e,"actionName is required."),t.getError(r,e,n)},getError:function(r,t,e){var n=r.error,o=r.errors;return t||e?(c()(t,"baseName is required."),o[v(t,e)]):n},getErrors:function(r){var t=new Set(Object.values(r.errors));return void 0!==r.error&&t.add(r.error),Array.from(t)},getMetaDataForError:function(r,t){var e=Object.keys(r.errors).find((function(e){return r.errors[e]===t}));return e?{baseName:e.substring(0,e.indexOf("::")),args:r.errorArgs[e]}:null},hasErrors:function(r){return t.getErrors(r).length>0}};return{initialState:{errors:{},errorArgs:{},error:void 0},actions:g,controls:{},reducer:function(r,t){var e=t.type,n=t.payload;switch(e){case"RECEIVE_ERROR":var a=n.baseName,i=n.args,u=n.error;if(a){var c=v(a,i);return p(p({},r),{},{errors:p(p({},r.errors||{}),{},o()({},c,u)),errorArgs:p(p({},r.errorArgs||{}),{},o()({},c,i))})}return p(p({},r),{},{error:u});case"CLEAR_ERROR":var s=n.baseName,f=n.args,l=p({},r);if(s){var d=v(s,f);l.errors=p({},r.errors||{}),l.errorArgs=p({},r.errorArgs||{}),delete l.errors[d],delete l.errorArgs[d]}else l.error=void 0;return l;case"CLEAR_ERRORS":var g=n.baseName,b=p({},r);if(g)for(var h in b.errors=p({},r.errors||{}),b.errorArgs=p({},r.errorArgs||{}),b.errors)(h===g||h.startsWith("".concat(g,"::")))&&(delete b.errors[h],delete b.errorArgs[h]);else b.errors={},b.errorArgs={},b.error=void 0;return b;default:return r}},resolvers:{},selectors:t}}},64:function(r,t,e){"use strict";(function(r){var n=e(0),o=e.n(n),a=e(9),i=e.n(a);function ChangeArrow(t){var e=t.direction,n=t.invertColor,o=t.width,a=t.height;return r.createElement("svg",{className:i()("googlesitekit-change-arrow","googlesitekit-change-arrow--".concat(e),{"googlesitekit-change-arrow--inverted-color":n}),width:o,height:a,viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M5.625 10L5.625 2.375L9.125 5.875L10 5L5 -1.76555e-07L-2.7055e-07 5L0.875 5.875L4.375 2.375L4.375 10L5.625 10Z",fill:"currentColor"}))}ChangeArrow.propTypes={direction:o.a.string,invertColor:o.a.bool,width:o.a.number,height:o.a.number},ChangeArrow.defaultProps={direction:"up",invertColor:!1,width:9,height:9},t.a=ChangeArrow}).call(this,e(3))},65:function(r,t,e){"use strict";e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return u}));var n=e(29),o=e.n(n),a=e(75),i=function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{__html:a.a.sanitize(r,t)}};function u(r){var t,e="object"===o()(r)?r.toString():r;return null==e||null===(t=e.replace)||void 0===t?void 0:t.call(e,/\/+$/,"")}},69:function(r,t,e){"use strict";e.d(t,"d",(function(){return n.e})),e.d(t,"c",(function(){return n.d})),e.d(t,"b",(function(){return n.b})),e.d(t,"a",(function(){return n.a})),e.d(t,"e",(function(){return n.f})),e.d(t,"g",(function(){return u})),e.d(t,"h",(function(){return s})),e.d(t,"i",(function(){return f})),e.d(t,"j",(function(){return l.a})),e.d(t,"f",(function(){return p})),e.d(t,"k",(function(){return c.a}));var n=e(36),o=e(7),a=e.n(o),i=e(37),u=function(r){a()(Object(i.a)(r),n.c);var t="".concat(r.getMonth()+1),e="".concat(r.getDate());return[r.getFullYear(),t.length<2?"0".concat(t):t,e.length<2?"0".concat(e):e].join("-")},c=e(38),s=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,e=Object(c.a)(r);return e.setDate(e.getDate()-t),u(e)},f=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=r.split("-");return 3===t.length&&"last"===t[0]&&!Number.isNaN(t[1])&&!Number.isNaN(parseFloat(t[1]))&&"days"===t[2]},l=e(42);var d=e(1);function p(){var r=function(r){return Object(d.sprintf)(
/* translators: 1: number of days */
Object(d._n)("Last %s day","Last %s days",r,"google-site-kit"),r)};return{"last-7-days":{slug:"last-7-days",label:r(7),days:7},"last-14-days":{slug:"last-14-days",label:r(14),days:14},"last-28-days":{slug:"last-28-days",label:r(28),days:28},"last-90-days":{slug:"last-90-days",label:r(90),days:90}}}},72:function(r,t,e){"use strict";(function(r){e.d(t,"c",(function(){return w})),e.d(t,"d",(function(){return S})),e.d(t,"b",(function(){return E})),e.d(t,"a",(function(){return k}));var n=e(13),o=e.n(n),a=e(29),i=e.n(a),u=e(6),c=e.n(u),s=e(18),f=e.n(s),l=e(26),d=e(71),p=e.n(d),v=e(1);function g(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function b(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?g(Object(e),!0).forEach((function(t){c()(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):g(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}var h=function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=y(r,t),n=e.formatUnit,o=e.formatDecimal;try{return n()}catch(r){return o()}},y=function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r=parseInt(r,10),Number.isNaN(r)&&(r=0);var e=Math.floor(r/60/60),n=Math.floor(r/60%60),o=Math.floor(r%60);return{hours:e,minutes:n,seconds:o,formatUnit:function(){var a=t.unitDisplay,i=b(b({unitDisplay:void 0===a?"short":a},f()(t,["unitDisplay"])),{},{style:"unit"});return 0===r?S(o,b(b({},i),{},{unit:"second"})):Object(v.sprintf)(
/* translators: 1: formatted seconds, 2: formatted minutes, 3: formatted hours */
Object(v._x)("%3$s %2$s %1$s","duration of time: hh mm ss","google-site-kit"),o?S(o,b(b({},i),{},{unit:"second"})):"",n?S(n,b(b({},i),{},{unit:"minute"})):"",e?S(e,b(b({},i),{},{unit:"hour"})):"").trim()},formatDecimal:function(){var t=Object(v.sprintf)(// translators: 1: number of seconds with "s" as the abbreviated unit.
Object(v.__)("%ds","google-site-kit"),o);if(0===r)return t;var a=Object(v.sprintf)(// translators: 1: number of minutes with "m" as the abbreviated unit.
Object(v.__)("%dm","google-site-kit"),n),i=Object(v.sprintf)(// translators: 1: number of hours with "h" as the abbreviated unit.
Object(v.__)("%dh","google-site-kit"),e);return Object(v.sprintf)(
/* translators: 1: formatted seconds, 2: formatted minutes, 3: formatted hours */
Object(v._x)("%3$s %2$s %1$s","duration of time: hh mm ss","google-site-kit"),o?t:"",n?a:"",e?i:"").trim()}}},m=function(r){return 1e6<=r?Math.round(r/1e5)/10:1e4<=r?Math.round(r/1e3):1e3<=r?Math.round(r/100)/10:r},O=function(r){var t={minimumFractionDigits:1,maximumFractionDigits:1};return 1e6<=r?Object(v.sprintf)(// translators: 1: an abbreviated number in millions.
Object(v.__)("%sM","google-site-kit"),S(m(r),r%10==0?{}:t)):1e4<=r?Object(v.sprintf)(// translators: 1: an abbreviated number in thousands.
Object(v.__)("%sK","google-site-kit"),S(m(r))):1e3<=r?Object(v.sprintf)(// translators: 1: an abbreviated number in thousands.
Object(v.__)("%sK","google-site-kit"),S(m(r),r%10==0?{}:t)):S(r,{signDisplay:"never",maximumFractionDigits:1})},w=function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r=Object(l.isFinite)(r)?r:Number(r),Object(l.isFinite)(r)||(console.warn("Invalid number",r,i()(r)),r=0);var e={};if("%"===t)e={style:"percent",maximumFractionDigits:2};else{if("s"===t)return h(r,{unitDisplay:"narrow"});t&&"string"==typeof t?e={style:"currency",currency:t}:Object(l.isPlainObject)(t)&&(e=b({},t))}var n=e,o=n.style,a=void 0===o?"metric":o;return"metric"===a?O(r):"duration"===a?h(r,t):S(r,e)},j=p()(console.warn),S=function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=t.locale,n=void 0===e?k():e,a=f()(t,["locale"]);try{return new Intl.NumberFormat(n,a).format(r)}catch(t){j("Site Kit numberFormat error: Intl.NumberFormat( ".concat(JSON.stringify(n),", ").concat(JSON.stringify(a)," ).format( ").concat(i()(r)," )"),t.message)}for(var u={currencyDisplay:"narrow",currencySign:"accounting",style:"unit"},c=["signDisplay","compactDisplay"],s={},l=0,d=Object.entries(a);l<d.length;l++){var p=o()(d[l],2),v=p[0],g=p[1];u[v]&&g===u[v]||(c.includes(v)||(s[v]=g))}try{return new Intl.NumberFormat(n,s).format(r)}catch(t){return new Intl.NumberFormat(n).format(r)}},E=function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=t.locale,n=void 0===e?k():e,o=t.style,a=void 0===o?"long":o,i=t.type,u=void 0===i?"conjunction":i;if(Intl.ListFormat){var c=new Intl.ListFormat(n,{style:a,type:u});return c.format(r)}
/* translators: used between list items, there is a space after the comma. */var s=Object(v.__)(", ","google-site-kit");return r.join(s)},k=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,e=Object(l.get)(t,["_googlesitekitLegacyData","locale"]);if(e){var n=e.match(/^(\w{2})?(_)?(\w{2})/);if(n&&n[0])return n[0].replace(/_/g,"-")}return t.navigator.language}}).call(this,e(21))},75:function(r,t,e){"use strict";(function(r){e.d(t,"a",(function(){return o}));var n=e(126),o=e.n(n)()(r)}).call(this,e(21))},80:function(r,t,e){"use strict";(function(r){e.d(t,"a",(function(){return u})),e.d(t,"b",(function(){return s}));var n=e(13),o=e.n(n);function a(r,t){var e="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!e){if(Array.isArray(r)||(e=function(r,t){if(!r)return;if("string"==typeof r)return i(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);"Object"===e&&r.constructor&&(e=r.constructor.name);if("Map"===e||"Set"===e)return Array.from(r);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i(r,t)}(r))||t&&r&&"number"==typeof r.length){e&&(r=e);var n=0,o=function(){};return{s:o,n:function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}},e:function(r){throw r},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,c=!1;return{s:function(){e=e.call(r)},n:function(){var r=e.next();return u=r.done,r},e:function(r){c=!0,a=r},f:function(){try{u||null==e.return||e.return()}finally{if(c)throw a}}}}function i(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}var u=function(){r.localStorage&&r.localStorage.clear(),r.sessionStorage&&r.sessionStorage.clear()},c=function(r){for(var t=location.search.substr(1).split("&"),e={},n=0;n<t.length;n++)e[t[n].split("=")[0]]=decodeURIComponent(t[n].split("=")[1]);return r?e.hasOwnProperty(r)?decodeURIComponent(e[r].replace(/\+/g," ")):"":e},s=function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location,e=new URL(t.href);if(r)return e.searchParams&&e.searchParams.get?e.searchParams.get(r):c(r);var n,i={},u=a(e.searchParams.entries());try{for(u.s();!(n=u.n()).done;){var s=o()(n.value,2),f=s[0],l=s[1];i[f]=l}}catch(r){u.e(r)}finally{u.f()}return i}}).call(this,e(21))},84:function(r,t,e){"use strict";(function(r){e(50),e(51)}).call(this,e(21))},85:function(r,t,e){"use strict";(function(r){e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){return u}));var n=e(177),o=e(64),a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(Number.isNaN(Number(t)))return"";var a=e.invertColor,i=void 0!==a&&a;return Object(n.a)(r.createElement(o.a,{direction:t>0?"up":"down",invertColor:i}))},i=function(r){var t,e,n,o,a,i,u,c,s,f,l,d,p,v,g;if(void 0!==r)return 1===(null==r||null===(t=r[0])||void 0===t||null===(e=t.data)||void 0===e||null===(n=e.rows)||void 0===n?void 0:n.length)||(null==r||null===(o=r[0])||void 0===o||null===(a=o.data)||void 0===a||null===(i=a.rows)||void 0===i||null===(u=i[0])||void 0===u||null===(c=u.metrics)||void 0===c||null===(s=c[0])||void 0===s||null===(f=s.values)||void 0===f?void 0:f[0])===(null==r||null===(l=r[0])||void 0===l||null===(d=l.data)||void 0===d||null===(p=d.totals)||void 0===p||null===(v=p[0])||void 0===v||null===(g=v.values)||void 0===g?void 0:g[0])},u=function(r,t){return r>0&&t>0?r/t-1:r>0?1:t>0?-1:0}}).call(this,e(3))},86:function(r,t,e){"use strict";(function(r){e.d(t,"a",(function(){return f}));var n=e(6),o=e.n(n),a=e(87),i=e(88);function u(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function c(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?u(Object(e),!0).forEach((function(t){o()(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}var s={activeModules:[],isAuthenticated:!1,referenceSiteURL:"",trackingEnabled:!1,trackingID:"",userIDHash:"",userRoles:[]};function f(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r,o=c(c({},s),t);o.referenceSiteURL&&(o.referenceSiteURL=o.referenceSiteURL.toString().replace(/\/+$/,""));var u=Object(a.a)(o,e);return{enableTracking:function(){o.trackingEnabled=!0},disableTracking:function(){o.trackingEnabled=!1},initializeSnippet:u,isTrackingEnabled:function(){return!!o.trackingEnabled},trackEvent:Object(i.a)(o,e,u,n)}}}).call(this,e(21))},87:function(r,t,e){"use strict";(function(r){e.d(t,"a",(function(){return a}));var n=e(52),o=e(30);function a(t,e){var a,i=Object(n.a)(e);return function(){var e=r.document;if(void 0===a&&(a=!!e.querySelector("script[".concat(o.b,"]"))),!a){var n=e.createElement("script");n.setAttribute(o.b,""),n.async=!0,n.src="https://www.googletagmanager.com/gtag/js?id=".concat(t.trackingID,"&l=").concat(o.a),e.head.appendChild(n),i("js",new Date),i("config",t.trackingID,{send_page_view:t.isSiteKitScreen}),a=!0}}}}).call(this,e(21))},88:function(r,t,e){"use strict";e.d(t,"a",(function(){return p}));var n=e(5),o=e.n(n),a=e(6),i=e.n(a),u=e(14),c=e.n(u),s=e(52),f=e(41);function l(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function d(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?l(Object(e),!0).forEach((function(t){i()(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}function p(r,t,e,n){var a=Object(s.a)(t);return function(){var t=c()(o.a.mark((function t(i,u,c,s){var l,p,v,g,b,h,y,m,O,w;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(l=r.activeModules,p=r.referenceSiteURL,v=r.trackingEnabled,g=r.trackingID,b=r.userIDHash,h=r.userRoles,y=void 0===h?[]:h,m=r.isAuthenticated,O=r.pluginVersion,v){t.next=3;break}return t.abrupt("return");case 3:return e(),w={send_to:g,event_category:i,event_label:c,value:s,dimension1:p,dimension2:y.join(","),dimension3:b,dimension4:O||"",dimension5:Array.from(f.a).join(","),dimension6:l.join(","),dimension7:m?1:0},t.abrupt("return",new Promise((function(r){var t,e,o=setTimeout((function(){n.console.warn('Tracking event "'.concat(u,'" (category "').concat(i,'") took too long to fire.')),r()}),1e3),c=function(){clearTimeout(o),r()};a("event",u,d(d({},w),{},{event_callback:c})),(null===(t=n._gaUserPrefs)||void 0===t||null===(e=t.ioo)||void 0===e?void 0:e.call(t))&&c()})));case 6:case"end":return t.stop()}}),t)})));return function(r,e,n,o){return t.apply(this,arguments)}}()}}},[[1126,1,0]]]);