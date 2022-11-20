/*! For license information please see main.cjs.js.LICENSE.txt */
(()=>{var e={787:(e,t,r)=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},a(e,t)}function i(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}var s=r(447),c=r(708),l=c.scores,p=c.apiNode,f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)}(f,e);var t,r,n,c=(r=f,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=u(r);if(n){var o=u(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return i(this,e)});function f(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.nid.mainnet;return o(this,f),(e=c.call(this,t,r,s)).queryTypeMethod="request",e}return t=f,Object.defineProperty(t,"prototype",{writable:!1}),t}(r(82));e.exports=f},82:(e,t,r)=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=a(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return u=e.done,e},e:function(e){s=!0,i=e},f:function(){try{u||null==r.return||r.return()}finally{if(s)throw i}}}}function a(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function u(){"use strict";u=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var o=t&&t.prototype instanceof h?t:h,a=Object.create(o.prototype),i=new S(n||[]);return a._invoke=function(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var u=k(i,r);if(u){if(u===f)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=p(e,t,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(e,r,i),a}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var f={};function h(){}function d(){}function v(){}var y={};c(y,a,(function(){return this}));var b=Object.getPrototypeOf,g=b&&b(b(P([])));g&&g!==t&&r.call(g,a)&&(y=g);var m=v.prototype=h.prototype=Object.create(y);function x(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){function o(a,i,u,s){var c=p(e[a],e,i);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==n(f)&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){o("next",e,u,s)}),(function(e){o("throw",e,u,s)})):t.resolve(f).then((function(e){l.value=e,u(l)}),(function(e){return o("throw",e,u,s)}))}s(c.arg)}var a;this._invoke=function(e,r){function n(){return new t((function(t,n){o(e,r,t,n)}))}return a=a?a.then(n,n):n()}}function k(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,k(e,t),"throw"===t.method))return f;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=p(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,f;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function P(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:R}}function R(){return{value:void 0,done:!0}}return d.prototype=v,c(m,"constructor",v),c(v,"constructor",d),d.displayName=c(v,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,c(e,s,"GeneratorFunction")),e.prototype=Object.create(m),e},e.awrap=function(e){return{__await:e}},x(w.prototype),c(w.prototype,i,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new w(l(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},x(m),c(m,s,"Generator"),c(m,a,(function(){return this})),c(m,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=P,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:P(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}function s(e,t,r,n,o,a,i){try{var u=e[a](i),s=u.value}catch(e){return void r(e)}u.done?t(s):Promise.resolve(s).then(n,o)}function c(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){s(a,n,o,i,u,"next",e)}function u(e){s(a,n,o,i,u,"throw",e)}i(void 0)}))}}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t,r){return t&&f(e.prototype,t),r&&f(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v=r(708).scores,y=["_active","_completed","_disqualified","_paused","_pending","_rejected"],b=h((function e(t,r,n){var s=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),d(this,"makeJSONRPCRequestObj",(function(e){return{jsonrpc:"2.0",method:e,id:Math.ceil(1e3*Math.random())}})),d(this,"makeTxCallRPCObj",(function(e,t,r,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:s.nid,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:2e6,i=s.makeJSONRPCRequestObj("icx_sendTransaction");return i.params={from:e,to:t,stepLimit:s.decimalToHex(a),nid:s.decimalToHex(o),nonce:s.decimalToHex(Number(1)),version:s.decimalToHex(Number(3)),timestamp:s.decimalToHex(1e3*(new Date).getTime()),dataType:"call",data:{method:r,params:n}},i})),d(this,"makeCustomCallRequestObj",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"icx_call",t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"cx0000000000000000000000000000000000000000",a=!(arguments.length>5&&void 0!==arguments[5])||arguments[5],i=s.makeJSONRPCRequestObj(e),u=p(p({},i),{},{params:{to:o,dataType:"call",data:{method:t}}});if(null==r||(u.params.data.params=r),null===n);else{if("number"!=typeof n)throw new Error("Height type must be number");u.params.height="0x"+n.toString(16)}return a?JSON.stringify(u):u})),d(this,"makeICXSendTxRequestObj",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"cx0000000000000000000000000000000000000000",o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];return s.makeCustomCallRequestObj("icx_sendTransaction",e,t,r,n,o)})),d(this,"makeICXCallRequestObj",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"cx0000000000000000000000000000000000000000",o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];return s.makeCustomCallRequestObj("icx_call",e,t,r,n,o)})),d(this,"hexToDecimal",(function(e){return parseInt(e,16)})),d(this,"decimalToHex",(function(e){return"0x"+e.toString(16)})),d(this,"fromHexInLoop",(function(e){return s.hexToDecimal(e)/Math.pow(10,18)})),d(this,"getCPSPeriodStatus",c(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.makeICXCallRequestObj("get_period_status",null,null,s.scores.mainnet.cps),e.next=3,s.queryMethod(s.scores.apiRoutes.v3,t,s.apiNode);case 3:if(null!=(r=e.sent)){e.next=8;break}return e.abrupt("return",r);case 8:if(null!=r.error){e.next=12;break}return e.abrupt("return",r);case 12:return e.abrupt("return",r.result);case 13:case"end":return e.stop()}}),e)})))),d(this,"getCPSProposalKeysByStatus",function(){var e=c(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=s.makeICXCallRequestObj("get_proposals_keys_by_status",{_status:t},null,s.scores.mainnet.cps),!s.statusType.includes(t)){e.next=16;break}return e.next=4,s.queryMethod(s.scores.apiRoutes.v3,r,s.apiNode);case 4:if(null!=(n=e.sent)){e.next=9;break}return e.abrupt("return",n);case 9:if(null!=n.error){e.next=13;break}return e.abrupt("return",n);case 13:return e.abrupt("return",n.result);case 14:e.next=17;break;case 16:return e.abrupt("return",null);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),d(this,"getCPSProposalDetailsByHash",function(){var e=c(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.makeICXCallRequestObj("get_proposal_details_by_hash",{_ipfs_key:t},null,s.scores.mainnet.cps),e.next=3,s.queryMethod(s.scores.apiRoutes.v3,r,s.apiNode);case 3:if(null!=(n=e.sent)){e.next=8;break}return e.abrupt("return",n);case 8:if(null!=n.error){e.next=12;break}return e.abrupt("return",n);case 12:return e.abrupt("return",n.result);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),d(this,"getCPSProposalVoteResultsByHash",function(){var e=c(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.makeICXCallRequestObj("get_vote_result",{_ipfs_key:t},null,s.scores.mainnet.cps),e.next=3,s.queryMethod(s.scores.apiRoutes.v3,r,s.apiNode);case 3:if(null!=(n=e.sent)){e.next=8;break}return e.abrupt("return",n);case 8:if(null!=n.error){e.next=12;break}return e.abrupt("return",n);case 12:return e.abrupt("return",n.result);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),d(this,"getAllCPSProposals",c(u().mark((function e(){var t,r,n,a,i,c,l,p,f,h;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={_active:[],_completed:[],_disqualified:[],_paused:[],_pending:[]},r=o(s.statusType),e.prev=2,r.s();case 4:if((n=r.n()).done){e.next=33;break}return a=n.value,e.next=8,s.getCPSProposalKeysByStatus(a);case 8:i=e.sent,c=o(i),e.prev=10,c.s();case 12:if((l=c.n()).done){e.next=23;break}return p=l.value,e.next=16,s.getCPSProposalDetailsByHash(p);case 16:return f=e.sent,e.next=19,s.getCPSProposalVoteResultsByHash(p);case 19:h=e.sent,t[a].push({proposal:f,comments:h});case 21:e.next=12;break;case 23:e.next=28;break;case 25:e.prev=25,e.t0=e.catch(10),c.e(e.t0);case 28:return e.prev=28,c.f(),e.finish(28);case 31:e.next=4;break;case 33:e.next=38;break;case 35:e.prev=35,e.t1=e.catch(2),r.e(e.t1);case 38:return e.prev=38,r.f(),e.finish(38);case 41:return e.abrupt("return",t);case 42:case"end":return e.stop()}}),e,null,[[2,35,38,41],[10,25,28,31]])})))),d(this,"getScoreStatus",function(){var e=c(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.makeICXCallRequestObj("getScoreStatus",{address:t},null,s.scores.mainnet.governance2),e.next=3,s.queryMethod(s.scores.apiRoutes.v3,r,s.apiNode);case 3:if(null!=(n=e.sent)){e.next=8;break}return e.abrupt("return",n);case 8:if(null!=n.error){e.next=12;break}return e.abrupt("return",n);case 12:return e.abrupt("return",n.result);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),d(this,"getStepPrice",c(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.makeICXCallRequestObj("getStepPrice",null,null,s.scores.mainnet.governance2),e.next=3,s.queryMethod(s.scores.apiRoutes.v3,t,s.apiNode);case 3:if(null!=(r=e.sent)){e.next=8;break}return e.abrupt("return",r);case 8:if(null!=r.error){e.next=12;break}return e.abrupt("return",r);case 12:return e.abrupt("return",r.result);case 13:case"end":return e.stop()}}),e)})))),d(this,"getStepCosts",c(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.makeICXCallRequestObj("getStepCosts",null,null,s.scores.mainnet.governance2),e.next=3,s.queryMethod(s.scores.apiRoutes.v3,t,s.apiNode);case 3:if(null!=(r=e.sent)){e.next=8;break}return e.abrupt("return",r);case 8:if(null!=r.error){e.next=12;break}return e.abrupt("return",r);case 12:return e.abrupt("return",r.result);case 13:case"end":return e.stop()}}),e)})))),d(this,"getMaxStepLimit",function(){var e=c(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.makeICXCallRequestObj("getMaxStepLimit",{contextType:t},null,s.scores.mainnet.governance2),e.next=3,s.queryMethod(s.scores.apiRoutes.v3,r,s.apiNode);case 3:if(null!=(n=e.sent)){e.next=8;break}return e.abrupt("return",n);case 8:if(null!=n.error){e.next=12;break}return e.abrupt("return",n);case 12:return e.abrupt("return",n.result);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),d(this,"isInScoreBlackList",function(){var e=c(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.makeICXCallRequestObj("isInScoreBlackList",{address:t},null,s.scores.mainnet.governance2),e.next=3,s.queryMethod(s.scores.apiRoutes.v3,r,s.apiNode);case 3:if(null!=(n=e.sent)){e.next=8;break}return e.abrupt("return",n);case 8:if(null!=n.error){e.next=12;break}return e.abrupt("return",n);case 12:return e.abrupt("return",n.result);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),d(this,"getVersion",c(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.makeICXCallRequestObj("getVersion",null,null,s.scores.mainnet.governance2),e.next=3,s.queryMethod(s.scores.apiRoutes.v3,t,s.apiNode);case 3:if(null!=(r=e.sent)){e.next=8;break}return e.abrupt("return",r);case 8:if(null!=r.error){e.next=12;break}return e.abrupt("return",r);case 12:return e.abrupt("return",r.result);case 13:case"end":return e.stop()}}),e)})))),d(this,"getRevision",c(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.makeICXCallRequestObj("getRevision",null,null,s.scores.mainnet.governance2),e.next=3,s.queryMethod(s.scores.apiRoutes.v3,t,s.apiNode);case 3:if(null!=(r=e.sent)){e.next=8;break}return e.abrupt("return",r);case 8:if(null!=r.error){e.next=12;break}return e.abrupt("return",r);case 12:return e.abrupt("return",r.result);case 13:case"end":return e.stop()}}),e)})))),d(this,"getNetworkProposal",function(){var e=c(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.makeICXCallRequestObj("getProposal",{id:t},null,s.scores.mainnet.governance2),e.next=3,s.queryMethod(s.scores.apiRoutes.v3,r,s.apiNode);case 3:if(null!=(n=e.sent)){e.next=8;break}return e.abrupt("return",n);case 8:if(null!=n.error){e.next=12;break}return e.abrupt("return",n);case 12:return e.abrupt("return",n.result);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),d(this,"getNetworkProposals",c(u().mark((function e(){var t,r,n,o=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:null,r=s.makeICXCallRequestObj("getProposals",t,null,s.scores.mainnet.governance2),e.next=4,s.queryMethod(s.scores.apiRoutes.v3,r,s.apiNode);case 4:if(null!=(n=e.sent)){e.next=9;break}return e.abrupt("return",n);case 9:if(null!=n.error){e.next=13;break}return e.abrupt("return",n);case 13:return e.abrupt("return",n.result);case 14:case"end":return e.stop()}}),e)})))),d(this,"getAllNetworkProposals",c(u().mark((function e(){var t,r,n,o,a,i,c;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=100,r=0,o=7,a={start:"0x"+(n=0).toString(16),size:"0x"+o.toString(16)},i=[];case 6:if(!(r<t)){e.next=18;break}return e.next=9,s.getNetworkProposals(a);case 9:if(c=e.sent,r++,n+=o,a.start="0x"+n.toString(16),!(c.proposals.length<1)){e.next=15;break}return e.abrupt("break",18);case 15:c.proposals.map((function(e){i.push(e)})),e.next=6;break;case 18:return e.abrupt("return",i);case 19:case"end":return e.stop()}}),e)})))),d(this,"voteNetworkProposal",(function(e,t,r){return s.makeTxCallRPCObj(r,s.scores.mainnet.governance2,"voteProposal",{id:e,vote:t})})),d(this,"approveNetworkProposal",(function(e,t){return s.voteNetworkProposal(e,"0x1",t)})),d(this,"rejectNetworkProposal",(function(e,t){return s.voteNetworkProposal(e,"0x0",t)})),d(this,"getScoreApi",c(u().mark((function e(){var t,r,n,o=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:s.scores.mainnet.governance,r=JSON.stringify(p(p({},s.makeJSONRPCRequestObj("icx_getScoreApi")),{},{params:{address:t}})),e.next=4,s.queryMethod(s.scores.apiRoutes.v3,r,s.apiNode);case 4:if(null!=(n=e.sent)){e.next=9;break}return e.abrupt("return",n);case 9:if(null!=n.error){e.next=13;break}return e.abrupt("return",n);case 13:return e.abrupt("return",n.result);case 14:case"end":return e.stop()}}),e)})))),d(this,"getIcxBalance",function(){var e=c(u().mark((function e(t){var r,n,o,a=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:2,n=JSON.stringify(p(p({},s.makeJSONRPCRequestObj("icx_getBalance")),{},{params:{address:t}})),e.next=4,s.queryMethod(s.scores.apiRoutes.v3,n,s.apiNode);case 4:if(null!=(o=e.sent)){e.next=9;break}return e.abrupt("return",o);case 9:if(null!=o.error){e.next=13;break}return e.abrupt("return",o);case 13:return e.abrupt("return",Number(s.fromHexInLoop(o.result).toFixed(r)));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),d(this,"getTxResult",function(){var e=c(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=JSON.stringify(p(p({},s.makeJSONRPCRequestObj("icx_getTransactionResult")),{},{params:{txHash:t}})),e.next=3,s.queryMethod(s.scores.apiRoutes.v3,r,s.apiNode);case 3:if(null!=(n=e.sent)){e.next=8;break}return e.abrupt("return",n);case 8:if(null!=n.error){e.next=12;break}return e.abrupt("return",n);case 12:return e.abrupt("return",n.result);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),d(this,"getTxByHash",function(){var e=c(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=JSON.stringify(p(p({},s.makeJSONRPCRequestObj("icx_getTransactionByHash")),{},{params:{txHash:t}})),e.next=3,s.queryMethod(s.scores.apiRoutes.v3,r,s.apiNode);case 3:if(null!=(n=e.sent)){e.next=8;break}return e.abrupt("return",n);case 8:if(null!=n.error){e.next=12;break}return e.abrupt("return",n);case 12:return e.abrupt("return",n.result);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),d(this,"getPreps",c(u().mark((function e(){var t,r,n,o=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:null,r=s.makeICXCallRequestObj("getPReps",{startRanking:"0x1"},t,s.scores.mainnet.governance),e.next=4,s.queryMethod(s.scores.apiRoutes.v3,r,s.apiNode);case 4:if(null!=(n=e.sent)){e.next=9;break}return e.abrupt("return",n);case 9:if(null!=n.error){e.next=13;break}return e.abrupt("return",n);case 13:return e.abrupt("return",n.result);case 14:case"end":return e.stop()}}),e)})))),d(this,"getPrep",function(){var e=c(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.makeICXCallRequestObj("getPRep",{address:t},null,s.scores.mainnet.governance),e.next=3,s.queryMethod(s.scores.apiRoutes.v3,r,s.apiNode);case 3:if(null!=(n=e.sent)){e.next=8;break}return e.abrupt("return",n);case 8:if(null!=n.error){e.next=12;break}return e.abrupt("return",n);case 12:return e.abrupt("return",n.result);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),d(this,"parsePrepData",(function(e){return p(p({},e),{},{bonded:parseInt(s.fromHexInLoop(e.bonded)),delegated:parseInt(s.fromHexInLoop(e.delegated)),grade:"0x0"===e.grade?"Main Prep":"0x1"===e.grade?"Sub Prep":"Prep candidate",irep:parseInt(s.fromHexInLoop(e.irep)),irepUpdateBlockHeight:s.hexToDecimal(e.irepUpdateBlockHeight),lastHeight:s.hexToDecimal(e.lastHeight),penalty:"0x0"===e.penalty?"none":"0x1"===e.penalty?"Disqualification":"0x2"===e.penalty?"Low Productivity":"0x3"===e.penalty?"Block Validation Failure":"Unknown",power:parseInt(s.fromHexInLoop(e.power)),status:"0x0"===e.status?"Active":"0x1"===e.status?"unregistered":"0x2"===e.status?"Disqualified":"Unknown",totalBlocks:s.hexToDecimal(e.totalBlocks),validatedBlocks:s.hexToDecimal(e.validatedBlocks)})})),d(this,"getBonderList",function(){var e=c(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.makeICXCallRequestObj("getBonderList",{address:t},null,s.scores.mainnet.governance),e.next=3,s.queryMethod(s.scores.apiRoutes.v3,r,s.apiNode);case 3:if(null!=(n=e.sent)){e.next=8;break}return e.abrupt("return",n);case 8:if(null!=n.error){e.next=12;break}return e.abrupt("return",n);case 12:return e.abrupt("return",n.result);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),d(this,"setBonderList",(function(e,t){return s.makeTxCallRPCObj(e,s.scores.mainnet.governance,"setBonderList",{bonderList:(r=t,function(e){if(Array.isArray(e))return i(e)}(r)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||a(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())});var r})),d(this,"getLastBlock",c(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.stringify(s.makeJSONRPCRequestObj("icx_getLastBlock")),e.next=3,s.queryMethod(s.scores.apiRoutes.v3,t,s.apiNode);case 3:if(null!=(r=e.sent)){e.next=8;break}return e.abrupt("return",r);case 8:if(null!=r.error){e.next=12;break}return e.abrupt("return",r);case 12:return e.abrupt("return",r.result);case 13:case"end":return e.stop()}}),e)})))),this.apiNode=t,this.nid=r,this.queryMethod=n,this.scores=v,this.statusType=y}));e.exports=b},708:(e,t,r)=>{var n=r(663);e.exports={apiNode:n.apiHostnames.icon,scores:n}},447:(e,t,r)=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(){"use strict";o=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var o=t&&t.prototype instanceof h?t:h,a=Object.create(o.prototype),i=new S(n||[]);return a._invoke=function(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var u=k(i,r);if(u){if(u===f)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=p(e,t,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(e,r,i),a}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var f={};function h(){}function d(){}function v(){}var y={};c(y,i,(function(){return this}));var b=Object.getPrototypeOf,g=b&&b(b(P([])));g&&g!==t&&r.call(g,i)&&(y=g);var m=v.prototype=h.prototype=Object.create(y);function x(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){function o(a,i,u,s){var c=p(e[a],e,i);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==n(f)&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){o("next",e,u,s)}),(function(e){o("throw",e,u,s)})):t.resolve(f).then((function(e){l.value=e,u(l)}),(function(e){return o("throw",e,u,s)}))}s(c.arg)}var a;this._invoke=function(e,r){function n(){return new t((function(t,n){o(e,r,t,n)}))}return a=a?a.then(n,n):n()}}function k(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,k(e,t),"throw"===t.method))return f;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=p(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,f;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function P(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:R}}function R(){return{value:void 0,done:!0}}return d.prototype=v,c(m,"constructor",v),c(v,"constructor",d),d.displayName=c(v,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,c(e,s,"GeneratorFunction")),e.prototype=Object.create(m),e},e.awrap=function(e){return{__await:e}},x(w.prototype),c(w.prototype,u,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new w(l(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},x(m),c(m,s,"Generator"),c(m,i,(function(){return this})),c(m,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=P,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:P(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}function a(e,t,r,n,o,a,i){try{var u=e[a](i),s=u.value}catch(e){return void r(e)}u.done?t(s):Promise.resolve(s).then(n,o)}function i(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function u(e){a(i,n,o,u,s,"next",e)}function s(e){a(i,n,o,u,s,"throw",e)}u(void 0)}))}}var u=r(240),s=r(615);function c(e){return l.apply(this,arguments)}function l(){return l=i(o().mark((function e(t){var r,n,a,i,c=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>1&&void 0!==c[1]&&c[1],n=!(c.length>2&&void 0!==c[2])||c[2],a=s,n&&(a=u),i=new Promise((function(e,n){var o=a.request(t,(function(o){console.log("Status Code: "+o.statusCode),console.log("headers: ",o.headers),console.log("Params:"),console.log(t),console.log("data:"),console.log(r);var a="";o.on("data",(function(e){console.log("chunk"),console.log(e),a+=e})),o.on("end",(function(){var t;console.log("raw data"),console.log(a);try{t="string"==typeof a?JSON.parse(a):a,e(t)}catch(e){t={error:e.message,message:a},console.log("error data"),console.log(t),n(t)}})),o.on("error",(function(e){console.log("Got error: ",+e.message)}))}));o.on("timeout",(function(){console.log("timeout. destroying query"),o.destroy()})),o.on("error",(function(e){console.log("error running query, passing error to callback reject"),n(e)})),0!=r&&o.write(r),o.end()})),e.prev=5,e.next=8,i;case 8:return e.abrupt("return",e.sent);case 11:throw e.prev=11,e.t0=e.catch(5),console.log("error while running promisifiedQuery"),console.log(e.t0),new Error("error connecting to node");case 16:case"end":return e.stop()}}),e,null,[[5,11]])}))),l.apply(this,arguments)}function p(){return p=i(o().mark((function e(t){var r,a,i,u,s,l,p=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=p.length>1&&void 0!==p[1]&&p[1],a=p.length>2?p[2]:void 0,i=!(p.length>3&&void 0!==p[3])||p[3],u=p.length>4&&void 0!==p[4]&&p[4],e.prev=4,l={hostname:a,path:t,method:r?"POST":"GET",headers:{"Content-Type":"application/json",charset:"UTF-8"},port:u||(i?443:80)},console.log("request"),console.log(l),console.log(n(r)),console.log(r),!i){e.next=16;break}return e.next=13,c(l,r);case 13:s=e.sent,e.next=19;break;case 16:return e.next=18,c(l,r,!1);case 18:s=e.sent;case 19:return e.abrupt("return",s);case 22:return e.prev=22,e.t0=e.catch(4),console.log("Error running customRequest"),console.log(e.t0.message),console.log(s),e.abrupt("return",null);case 28:case"end":return e.stop()}}),e,null,[[4,22]])}))),p.apply(this,arguments)}e.exports=function(e){return p.apply(this,arguments)}},663:e=>{var t={geometry:"api.icon.geometry.io",ctz:"ctz.solidwallet.io",icon:"api.icon.community",espanicon:"api.espanicon.team",sejong:"sejong.net.solidwallet.io",berlin:"berlin.net.solidwallet.io",lisbon:"lisbon.net.solidwallet.io"};t.default=t.icon;var r={mainnet:{governance:"cx0000000000000000000000000000000000000000",governance2:"cx0000000000000000000000000000000000000001",cps:"cx9f4ab72f854d3ccdc59aa6f2c3e2215dd62e879f"},sejong:{governance:"cx0000000000000000000000000000000000000000",governance2:"cx0000000000000000000000000000000000000001",bnUSD:"cx5838cb516d6156a060f90e9a3de92381331ff024"},berlin:{governance:"cx0000000000000000000000000000000000000000",governance2:"cx0000000000000000000000000000000000000001",cps:"cx1cd2da25f9942fda5144e139bbda3e5108d3c083",bnusd:"cx1cd2da25f9942fda5144e139bbda3e5108d3c083"},lisbon:{governance:"cx0000000000000000000000000000000000000000",governance2:"cx0000000000000000000000000000000000000001"},nid:{mainnet:1,lisbon:2,berlin:7,sejong:83,local:3},apiRoutes:{v3:"/api/v3",proposals:"/api/v1/governance/proposals"},apiHostnames:t};e.exports=r},615:e=>{"use strict";e.exports=require("http")},240:e=>{"use strict";e.exports=require("https")}},t={},r=function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}(787);module.exports=r})();