/*! For license information please see main.web.js.LICENSE.txt */
(()=>{var t={634:(t,e,r)=>{function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},a(t,e)}function i(t,e){if(e&&("object"===n(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function u(t){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},u(t)}var s=r(180),c=r(708),l=(c.scores,c.apiNode),p=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&a(t,e)}(p,t);var e,r,n,c=(r=p,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=u(r);if(n){var o=u(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return i(this,t)});function p(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;return o(this,p),c.call(this,t,s)}return e=p,Object.defineProperty(e,"prototype",{writable:!1}),e}(r(82));t.exports=p},82:(t,e,r)=>{function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=a(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,s=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return u=t.done,t},e:function(t){s=!0,i=t},f:function(){try{u||null==r.return||r.return()}finally{if(s)throw i}}}}function a(t,e){if(t){if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function u(){"use strict";u=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),i=new P(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var u=k(i,r);if(u){if(u===f)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=p(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,i),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f={};function h(){}function d(){}function v(){}var y={};c(y,a,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(S([])));g&&g!==e&&r.call(g,a)&&(y=g);var b=v.prototype=h.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function o(a,i,u,s){var c=p(t[a],t,i);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==n(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,u,s)}),(function(t){o("throw",t,u,s)})):e.resolve(f).then((function(t){l.value=t,u(l)}),(function(t){return o("throw",t,u,s)}))}s(c.arg)}var a;this._invoke=function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}}function k(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=p(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function S(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:R}}function R(){return{value:void 0,done:!0}}return d.prototype=v,c(b,"constructor",v),c(v,"constructor",d),d.displayName=c(v,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c(t,s,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},x(w.prototype),c(w.prototype,i,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new w(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(b),c(b,s,"Generator"),c(b,a,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function s(t,e,r,n,o,a,i){try{var u=t[a](i),s=u.value}catch(t){return void r(t)}u.done?e(s):Promise.resolve(s).then(n,o)}function c(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){s(a,n,o,i,u,"next",t)}function u(t){s(a,n,o,i,u,"throw",t)}i(void 0)}))}}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){d(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function h(t,e,r){return e&&f(t.prototype,e),r&&f(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function d(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var v=r(708).scores,y=["_active","_completed","_disqualified","_paused","_pending","_rejected"],m=h((function t(e,r){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,"makeJSONRPCRequestObj",(function(t){return{jsonrpc:"2.0",method:t,id:Math.ceil(1e3*Math.random())}})),d(this,"makeTxCallRPCObj",(function(t,e,r,o){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:n.scores.nid.mainnet,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:2e6,u=n.makeJSONRPCRequestObj("icx_sendTransaction");return u.params={from:t,to:e,stepLimit:n.decimalToHex(i),nid:n.decimalToHex(a),nonce:n.decimalToHex(Number(1)),version:n.decimalToHex(Number(3)),timestamp:n.decimalToHex(1e3*(new Date).getTime()),dataType:"call",data:{method:r,params:o}},u})),d(this,"makeCustomCallRequestObj",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"icx_call",e=arguments.length>1?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"cx0000000000000000000000000000000000000000",i=n.makeJSONRPCRequestObj(t),u=p(p({},i),{},{params:{to:a,dataType:"call",data:{method:e}}});if(null==r||(u.params.data.params=r),null===o);else{if("number"!=typeof o)throw new Error("Height type must be number");u.params.height="0x"+o.toString(16)}return JSON.stringify(u)})),d(this,"makeICXCallRequestObj",(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"cx0000000000000000000000000000000000000000";return n.makeCustomCallRequestObj("icx_call",t,e,r,o)})),d(this,"hexToDecimal",(function(t){return parseInt(t,16)})),d(this,"decimalToHex",(function(t){return"0x"+t.toString(16)})),d(this,"fromHexInLoop",(function(t){return n.hexToDecimal(t)/Math.pow(10,18)})),d(this,"getCPSPeriodStatus",c(u().mark((function t(){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.makeICXCallRequestObj("get_period_status",null,null,n.scores.mainnet.cps),t.next=3,n.queryMethod(n.scores.apiRoutes.v3,e,n.apiNode);case 3:if(null!=(r=t.sent)){t.next=8;break}return t.abrupt("return",r);case 8:return t.abrupt("return",r.result);case 9:case"end":return t.stop()}}),t)})))),d(this,"getCPSProposalKeysByStatus",function(){var t=c(u().mark((function t(e){var r,o;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n.makeICXCallRequestObj("get_proposals_keys_by_status",{_status:e},null,n.scores.mainnet.cps),!n.statusType.includes(e)){t.next=12;break}return t.next=4,n.queryMethod(n.scores.apiRoutes.v3,r,n.apiNode);case 4:if(null!=(o=t.sent)){t.next=9;break}return t.abrupt("return",o);case 9:return t.abrupt("return",o.result);case 10:t.next=13;break;case 12:return t.abrupt("return",null);case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),d(this,"getCPSProposalDetailsByHash",function(){var t=c(u().mark((function t(e){var r,o;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.makeICXCallRequestObj("get_proposal_details_by_hash",{_ipfs_key:e},null,n.scores.mainnet.cps),t.next=3,n.queryMethod(n.scores.apiRoutes.v3,r,n.apiNode);case 3:if(null!=(o=t.sent)){t.next=8;break}return t.abrupt("return",o);case 8:return t.abrupt("return",o.result);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),d(this,"getCPSProposalVoteResultsByHash",function(){var t=c(u().mark((function t(e){var r,o;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.makeICXCallRequestObj("get_vote_result",{_ipfs_key:e},null,n.scores.mainnet.cps),t.next=3,n.queryMethod(n.scores.apiRoutes.v3,r,n.apiNode);case 3:if(null!=(o=t.sent)){t.next=8;break}return t.abrupt("return",o);case 8:return t.abrupt("return",o.result);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),d(this,"getAllCPSProposals",c(u().mark((function t(){var e,r,a,i,s,c,l,p,f,h;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e={_active:[],_completed:[],_disqualified:[],_paused:[],_pending:[]},r=o(n.statusType),t.prev=2,r.s();case 4:if((a=r.n()).done){t.next=33;break}return i=a.value,t.next=8,n.getCPSProposalKeysByStatus(i);case 8:s=t.sent,c=o(s),t.prev=10,c.s();case 12:if((l=c.n()).done){t.next=23;break}return p=l.value,t.next=16,n.getCPSProposalDetailsByHash(p);case 16:return f=t.sent,t.next=19,n.getCPSProposalVoteResultsByHash(p);case 19:h=t.sent,e[i].push({proposal:f,comments:h});case 21:t.next=12;break;case 23:t.next=28;break;case 25:t.prev=25,t.t0=t.catch(10),c.e(t.t0);case 28:return t.prev=28,c.f(),t.finish(28);case 31:t.next=4;break;case 33:t.next=38;break;case 35:t.prev=35,t.t1=t.catch(2),r.e(t.t1);case 38:return t.prev=38,r.f(),t.finish(38);case 41:return t.abrupt("return",e);case 42:case"end":return t.stop()}}),t,null,[[2,35,38,41],[10,25,28,31]])})))),d(this,"getScoreStatus",function(){var t=c(u().mark((function t(e){var r,o;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.makeICXCallRequestObj("getScoreStatus",{address:e},null,n.scores.mainnet.governance2),t.next=3,n.queryMethod(n.scores.apiRoutes.v3,r,n.apiNode);case 3:if(null!=(o=t.sent)){t.next=8;break}return t.abrupt("return",o);case 8:return t.abrupt("return",o.result);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),d(this,"getStepPrice",c(u().mark((function t(){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.makeICXCallRequestObj("getStepPrice",null,null,n.scores.mainnet.governance2),t.next=3,n.queryMethod(n.scores.apiRoutes.v3,e,n.apiNode);case 3:if(null!=(r=t.sent)){t.next=8;break}return t.abrupt("return",r);case 8:return t.abrupt("return",r.result);case 9:case"end":return t.stop()}}),t)})))),d(this,"getStepCosts",c(u().mark((function t(){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.makeICXCallRequestObj("getStepCosts",null,null,n.scores.mainnet.governance2),t.next=3,n.queryMethod(n.scores.apiRoutes.v3,e,n.apiNode);case 3:if(null!=(r=t.sent)){t.next=8;break}return t.abrupt("return",r);case 8:return t.abrupt("return",r.result);case 9:case"end":return t.stop()}}),t)})))),d(this,"getMaxStepLimit",function(){var t=c(u().mark((function t(e){var r,o;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.makeICXCallRequestObj("getMaxStepLimit",{contextType:e},null,n.scores.mainnet.governance2),t.next=3,n.queryMethod(n.scores.apiRoutes.v3,r,n.apiNode);case 3:if(null!=(o=t.sent)){t.next=8;break}return t.abrupt("return",o);case 8:return t.abrupt("return",o.result);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),d(this,"isInScoreBlackList",function(){var t=c(u().mark((function t(e){var r,o;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.makeICXCallRequestObj("isInScoreBlackList",{address:e},null,n.scores.mainnet.governance2),t.next=3,n.queryMethod(n.scores.apiRoutes.v3,r,n.apiNode);case 3:if(null!=(o=t.sent)){t.next=8;break}return t.abrupt("return",o);case 8:return t.abrupt("return",o.result);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),d(this,"getVersion",c(u().mark((function t(){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.makeICXCallRequestObj("getVersion",null,null,n.scores.mainnet.governance2),t.next=3,n.queryMethod(n.scores.apiRoutes.v3,e,n.apiNode);case 3:if(null!=(r=t.sent)){t.next=8;break}return t.abrupt("return",r);case 8:return t.abrupt("return",r.result);case 9:case"end":return t.stop()}}),t)})))),d(this,"getRevision",c(u().mark((function t(){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.makeICXCallRequestObj("getRevision",null,null,n.scores.mainnet.governance2),t.next=3,n.queryMethod(n.scores.apiRoutes.v3,e,n.apiNode);case 3:if(null!=(r=t.sent)){t.next=8;break}return t.abrupt("return",r);case 8:return t.abrupt("return",r.result);case 9:case"end":return t.stop()}}),t)})))),d(this,"getProposal",function(){var t=c(u().mark((function t(e){var r,o;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.makeICXCallRequestObj("getProposal",{id:e},null,n.scores.mainnet.governance2),t.next=3,n.queryMethod(n.scores.apiRoutes.v3,r,n.apiNode);case 3:if(null!=(o=t.sent)){t.next=8;break}return t.abrupt("return",o);case 8:return t.abrupt("return",o.result);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),d(this,"getProposals",c(u().mark((function t(){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.makeICXCallRequestObj("getProposals",null,null,n.scores.mainnet.governance2),t.next=3,n.queryMethod(n.scores.apiRoutes.v3,e,n.apiNode);case 3:if(null!=(r=t.sent)){t.next=8;break}return t.abrupt("return",r);case 8:return t.abrupt("return",r.result);case 9:case"end":return t.stop()}}),t)})))),d(this,"voteNetworkProposal",(function(t,e,r){return n.makeTxCallRPCObj(r,n.scores.mainnet.governance2,"voteProposal",{id:t,vote:e})})),d(this,"approveNetworkProposal",(function(t,e){return n.voteNetworkProposal(t,"0x1",e)})),d(this,"rejectNetworkProposal",(function(t,e){return n.voteNetworkProposal(t,"0x0",e)})),d(this,"getScoreApi",c(u().mark((function t(){var e,r,o,a=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:n.scores.mainnet.governance,r=JSON.stringify(p(p({},n.makeJSONRPCRequestObj("icx_getScoreApi")),{},{params:{address:e}})),t.next=4,n.queryMethod(n.scores.apiRoutes.v3,r,n.apiNode);case 4:if(null!=(o=t.sent)){t.next=9;break}return t.abrupt("return",o);case 9:return t.abrupt("return",o.result);case 10:case"end":return t.stop()}}),t)})))),d(this,"getIcxBalance",function(){var t=c(u().mark((function t(e){var r,o,a,i=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:2,o=JSON.stringify(p(p({},n.makeJSONRPCRequestObj("icx_getBalance")),{},{params:{address:e}})),t.next=4,n.queryMethod(n.scores.apiRoutes.v3,o,n.apiNode);case 4:if(null!=(a=t.sent)){t.next=9;break}return t.abrupt("return",a);case 9:return t.abrupt("return",Number(n.fromHexInLoop(a.result).toFixed(r)));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),d(this,"getTxResult",function(){var t=c(u().mark((function t(e){var r,o;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=JSON.stringify(p(p({},n.makeJSONRPCRequestObj("icx_getTransactionResult")),{},{params:{txHash:e}})),t.next=3,n.queryMethod(n.scores.apiRoutes.v3,r,n.apiNode);case 3:if(null!=(o=t.sent)){t.next=8;break}return t.abrupt("return",o);case 8:return t.abrupt("return",o.result);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),d(this,"getTxByHash",function(){var t=c(u().mark((function t(e){var r,o;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=JSON.stringify(p(p({},n.makeJSONRPCRequestObj("icx_getTransactionByHash")),{},{params:{txHash:e}})),t.next=3,n.queryMethod(n.scores.apiRoutes.v3,r,n.apiNode);case 3:if(null!=(o=t.sent)){t.next=8;break}return t.abrupt("return",o);case 8:return t.abrupt("return",o.result);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),d(this,"getPreps",c(u().mark((function t(){var e,r,o,a=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:null,r=n.makeICXCallRequestObj("getPReps",{startRanking:"0x1"},e,n.scores.mainnet.governance),t.next=4,n.queryMethod(n.scores.apiRoutes.v3,r,n.apiNode);case 4:if(null!=(o=t.sent)){t.next=9;break}return t.abrupt("return",o);case 9:return t.abrupt("return",o.result);case 10:case"end":return t.stop()}}),t)})))),d(this,"getPrep",function(){var t=c(u().mark((function t(e){var r,o;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.makeICXCallRequestObj("getPRep",{address:e},null,n.scores.mainnet.governance),t.next=3,n.queryMethod(n.scores.apiRoutes.v3,r,n.apiNode);case 3:if(null!=(o=t.sent)){t.next=8;break}return t.abrupt("return",o);case 8:return t.abrupt("return",o.result);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),d(this,"parsePrepData",(function(t){return p(p({},t),{},{bonded:parseInt(n.fromHexInLoop(t.bonded)),delegated:parseInt(n.fromHexInLoop(t.delegated)),grade:"0x0"===t.grade?"Main Prep":"0x1"===t.grade?"Sub Prep":"Prep candidate",irep:parseInt(n.fromHexInLoop(t.irep)),irepUpdateBlockHeight:n.hexToDecimal(t.irepUpdateBlockHeight),lastHeight:n.hexToDecimal(t.lastHeight),penalty:"0x0"===t.penalty?"none":"0x1"===t.penalty?"Disqualification":"0x2"===t.penalty?"Low Productivity":"0x3"===t.penalty?"Block Validation Failure":"Unknown",power:parseInt(n.fromHexInLoop(t.power)),status:"0x0"===t.status?"Active":"0x1"===t.status?"unregistered":"0x2"===t.status?"Disqualified":"Unknown",totalBlocks:n.hexToDecimal(t.totalBlocks),validatedBlocks:n.hexToDecimal(t.validatedBlocks)})})),d(this,"getBonderList",function(){var t=c(u().mark((function t(e){var r,o;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.makeICXCallRequestObj("getBonderList",{address:e},null,n.scores.mainnet.governance),t.next=3,n.queryMethod(n.scores.apiRoutes.v3,r,n.apiNode);case 3:if(null!=(o=t.sent)){t.next=8;break}return t.abrupt("return",o);case 8:return t.abrupt("return",o.result);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),d(this,"setBonderList",(function(t,e){return n.makeTxCallRPCObj(t,n.scores.mainnet.governance,"setBonderList",{bonderList:(r=e,function(t){if(Array.isArray(t))return i(t)}(r)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||a(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())});var r})),d(this,"getLastBlock",c(u().mark((function t(){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=JSON.stringify(n.makeJSONRPCRequestObj("icx_getLastBlock")),t.next=3,n.queryMethod(n.scores.apiRoutes.v3,e,n.apiNode);case 3:if(null!=(r=t.sent)){t.next=8;break}return t.abrupt("return",r);case 8:return t.abrupt("return",r.result);case 9:case"end":return t.stop()}}),t)})))),this.apiNode=e,this.queryMethod=r,this.scores=v,this.statusType=y}));t.exports=m},708:(t,e,r)=>{var n=r(663);t.exports={apiNode:n.apiHostnames.icon,scores:n}},180:t=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function r(){"use strict";r=function(){return t};var t={},n=Object.prototype,o=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),i=new P(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var u=k(i,r);if(u){if(u===f)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=p(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,i),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f={};function h(){}function d(){}function v(){}var y={};c(y,i,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(S([])));g&&g!==n&&o.call(g,i)&&(y=g);var b=v.prototype=h.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,r){function n(a,i,u,s){var c=p(t[a],t,i);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==e(f)&&o.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,u,s)}),(function(t){n("throw",t,u,s)})):r.resolve(f).then((function(t){l.value=t,u(l)}),(function(t){return n("throw",t,u,s)}))}s(c.arg)}var a;this._invoke=function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return a=a?a.then(o,o):o()}}function k(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=p(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function S(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:R}}function R(){return{value:void 0,done:!0}}return d.prototype=v,c(b,"constructor",v),c(v,"constructor",d),d.displayName=c(v,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c(t,s,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},x(w.prototype),c(w.prototype,u,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new w(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(b),c(b,s,"Generator"),c(b,i,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function n(t,e,r,n,o,a,i){try{var u=t[a](i),s=u.value}catch(t){return void r(t)}u.done?e(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function u(t){n(i,o,a,u,s,"next",t)}function s(t){n(i,o,a,u,s,"throw",t)}u(void 0)}))}}function a(){return a=o(r().mark((function t(e){var n,o,a,i,u,s,c,l,p,f,h=arguments;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=h.length>1&&void 0!==h[1]&&h[1],o=h.length>2?h[2]:void 0,a=!(h.length>3&&void 0!==h[3])||h[3],i=h.length>4&&void 0!==h[4]&&h[4],u={hostname:o,path:e,headers:{"Content-Type":"text/plain"},port:i?":"+i+"/":"",protocol:a?"https://":"http://"},s=n?{headers:u.headers,method:"POST",body:n}:{headers:u.headers,method:"GET"},c=u.protocol+u.hostname+u.port+u.path,t.prev=7,p=new Request(c,s),t.next=11,fetch(p);case 11:return f=t.sent,t.next=14,f.json();case 14:if(null!=(l=t.sent).error){t.next=19;break}return t.abrupt("return",l);case 19:throw new Error("Request made successfully but returned Error from the node");case 20:t.next=28;break;case 22:return t.prev=22,t.t0=t.catch(7),console.log("Error running customRequest"),console.log(t.t0.message),console.log(l),t.abrupt("return",null);case 28:case"end":return t.stop()}}),t,null,[[7,22]])}))),a.apply(this,arguments)}t.exports=function(t){return a.apply(this,arguments)}},663:t=>{var e={geometry:"api.icon.geometry.io",ctz:"ctz.solidwallet.io",icon:"api.icon.community",espanicon:"api.espanicon.team",sejong:"sejong.net.solidwallet.io",berlin:"berlin.net.solidwallet.io",lisbon:"lisbon.net.solidwallet.io"};e.default=e.icon;var r={mainnet:{governance:"cx0000000000000000000000000000000000000000",governance2:"cx0000000000000000000000000000000000000001",cps:"cx9f4ab72f854d3ccdc59aa6f2c3e2215dd62e879f"},sejong:{governance:"cx0000000000000000000000000000000000000000",governance2:"cx0000000000000000000000000000000000000001",bnUSD:"cx5838cb516d6156a060f90e9a3de92381331ff024"},berlin:{governance:"cx0000000000000000000000000000000000000000",governance2:"cx0000000000000000000000000000000000000001"},lisbon:{governance:"cx0000000000000000000000000000000000000000",governance2:"cx0000000000000000000000000000000000000001"},nid:{mainnet:1,lisbon:2,berlin:7,sejong:83},apiRoutes:{v3:"/api/v3",proposals:"/api/v1/governance/proposals"},apiHostnames:e};t.exports=r}},e={},r=function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}(634);module.exports=r})();