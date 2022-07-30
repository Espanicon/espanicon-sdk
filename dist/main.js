/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@fidelve/colorlog/colorLog.js":
/*!****************************************************!*\
  !*** ./node_modules/@fidelve/colorlog/colorLog.js ***!
  \****************************************************/
/***/ ((module) => {

const TAGS = {
  reset: "\x1b[0m",
  colors: {
    black: "\x1b[30m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    default: "\x1b[39m"
  },
  style: {
    bold: "\x1b[1m"
  },
  bg: {
    default: "\x1b[49m",
    red: "\x1b[41m",
    green: "\x1b[42m",
    yellow: "\x1b[43m"
  }
};

function alertMsg(msg) {
  //
  return `\x1b[41;30m${msg}${TAGS.reset}`;
}

function warningMsg(msg) {
  //
  return `\x1b[43;30m${msg}${TAGS.reset}`;
}

function successMsg(msg) {
  //
  return `\x1b[42;30m${msg}${TAGS.reset}`;
}

module.exports = {
  alertMsg,
  warningMsg,
  successMsg
};


/***/ }),

/***/ "./lib-no-sdk-web.js":
/*!***************************!*\
  !*** ./lib-no-sdk-web.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// lib-no-sdk-web.js
//
// Imports
var customFetch = __webpack_require__(/*! ./utils/customFetch */ "./utils/customFetch.js");

var SCORES = __webpack_require__(/*! ./utils/scores */ "./utils/scores.js"); // global var declarations


var statusType = ["_active", "_completed", "_disqualified", "_paused", "_pending"]; // General Functions

function makeJSONRPCRequestObj(method) {
  return {
    jsonrpc: "2.0",
    method: method,
    id: Math.ceil(Math.random() * 1000)
  };
}

function makeTxCallRPCObj(from, to, method, paramsObj) {
  var nid = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : SCORES.nid.mainnet;
  var stepLimit = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 2000000;
  var txObj = makeJSONRPCRequestObj("icx_sendTransaction");
  txObj["params"] = {
    from: from,
    to: to,
    stepLimit: decimalToHex(stepLimit),
    nid: decimalToHex(nid),
    nonce: decimalToHex(1),
    version: decimalToHex(3),
    timestamp: decimalToHex(new Date().getTime() * 1000),
    dataType: "call",
    data: {
      method: method,
      params: paramsObj
    }
  };
  return txObj;
}

function makeICXCallRequestObj(method) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var to = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "cx0000000000000000000000000000000000000000";
  var JSONRPCRequestObj = makeJSONRPCRequestObj("icx_call");

  var data = _objectSpread(_objectSpread({}, JSONRPCRequestObj), {}, {
    params: {
      to: to,
      dataType: "call",
      data: {
        method: method
      }
    }
  });

  if (params == null) {} else {
    data.params.data.params = params;
  }

  if (height === null) {} else {
    if (typeof height !== "number") {
      throw new Error("Height type must be number");
    } else {
      data.params.height = "0x" + height.toString(16);
    }
  }

  return JSON.stringify(data);
}

function hexToDecimal(hex) {
  return parseInt(hex, 16);
}

function decimalToHex(number) {
  return "0x" + number.toString(16);
}

function fromHexInLoop(loopInHex) {
  var loopInBase2 = hexToDecimal(loopInHex);
  return loopInBase2 / Math.pow(10, 18);
} // SCORE methods
//
// CPS methods


function getCPSPeriodStatus() {
  return _getCPSPeriodStatus.apply(this, arguments);
}

function _getCPSPeriodStatus() {
  _getCPSPeriodStatus = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var JSONRPCObject, request;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            //
            JSONRPCObject = makeICXCallRequestObj("get_period_status", null, null, SCORES.mainnet.cps);
            _context.next = 3;
            return customRequest(SCORES.apiRoutes.v3, JSONRPCObject);

          case 3:
            request = _context.sent;

            if (!(request == null)) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", request);

          case 8:
            return _context.abrupt("return", request.result);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getCPSPeriodStatus.apply(this, arguments);
}

function getProposalKeysByStatus(_x) {
  return _getProposalKeysByStatus.apply(this, arguments);
}

function _getProposalKeysByStatus() {
  _getProposalKeysByStatus = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(status) {
    var JSONRPCObject, request;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            JSONRPCObject = makeICXCallRequestObj("get_proposals_keys_by_status", {
              _status: status
            }, null, SCORES.mainnet.cps);

            if (!statusType.includes(status)) {
              _context2.next = 12;
              break;
            }

            _context2.next = 4;
            return customRequest(SCORES.apiRoutes.v3, JSONRPCObject);

          case 4:
            request = _context2.sent;

            if (!(request == null)) {
              _context2.next = 9;
              break;
            }

            return _context2.abrupt("return", request);

          case 9:
            return _context2.abrupt("return", request.result);

          case 10:
            _context2.next = 13;
            break;

          case 12:
            return _context2.abrupt("return", null);

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getProposalKeysByStatus.apply(this, arguments);
}

function getProposalDetailsByHash(_x2) {
  return _getProposalDetailsByHash.apply(this, arguments);
}

function _getProposalDetailsByHash() {
  _getProposalDetailsByHash = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(hash) {
    var JSONRPCObject, request;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            JSONRPCObject = makeICXCallRequestObj("get_proposal_details_by_hash", {
              _ipfs_key: hash
            }, null, SCORES.mainnet.cps);
            _context3.next = 3;
            return customRequest(SCORES.apiRoutes.v3, JSONRPCObject);

          case 3:
            request = _context3.sent;

            if (!(request == null)) {
              _context3.next = 8;
              break;
            }

            return _context3.abrupt("return", request);

          case 8:
            return _context3.abrupt("return", request.result);

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getProposalDetailsByHash.apply(this, arguments);
}

function getVoteResultsByHash(_x3) {
  return _getVoteResultsByHash.apply(this, arguments);
}

function _getVoteResultsByHash() {
  _getVoteResultsByHash = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(hash) {
    var JSONRPCObject, request;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            JSONRPCObject = makeICXCallRequestObj("get_vote_result", {
              _ipfs_key: hash
            }, null, SCORES.mainnet.cps);
            _context4.next = 3;
            return customRequest(SCORES.apiRoutes.v3, JSONRPCObject);

          case 3:
            request = _context4.sent;

            if (!(request == null)) {
              _context4.next = 8;
              break;
            }

            return _context4.abrupt("return", request);

          case 8:
            return _context4.abrupt("return", request.result);

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getVoteResultsByHash.apply(this, arguments);
}

function getAllProposals() {
  return _getAllProposals.apply(this, arguments);
} // Network score methods


function _getAllProposals() {
  _getAllProposals = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    var proposals, _iterator, _step, eachStatus, proposalsKeys, _iterator2, _step2, eachProposal, proposal, comments;

    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            proposals = {
              _active: [],
              _completed: [],
              _disqualified: [],
              _paused: [],
              _pending: []
            };
            _iterator = _createForOfIteratorHelper(statusType);
            _context5.prev = 2;

            _iterator.s();

          case 4:
            if ((_step = _iterator.n()).done) {
              _context5.next = 33;
              break;
            }

            eachStatus = _step.value;
            _context5.next = 8;
            return getProposalKeysByStatus(eachStatus);

          case 8:
            proposalsKeys = _context5.sent;
            _iterator2 = _createForOfIteratorHelper(proposalsKeys);
            _context5.prev = 10;

            _iterator2.s();

          case 12:
            if ((_step2 = _iterator2.n()).done) {
              _context5.next = 23;
              break;
            }

            eachProposal = _step2.value;
            _context5.next = 16;
            return getProposalDetailsByHash(eachProposal);

          case 16:
            proposal = _context5.sent;
            _context5.next = 19;
            return getVoteResultsByHash(eachProposal);

          case 19:
            comments = _context5.sent;
            proposals[eachStatus].push({
              proposal: proposal,
              comments: comments
            });

          case 21:
            _context5.next = 12;
            break;

          case 23:
            _context5.next = 28;
            break;

          case 25:
            _context5.prev = 25;
            _context5.t0 = _context5["catch"](10);

            _iterator2.e(_context5.t0);

          case 28:
            _context5.prev = 28;

            _iterator2.f();

            return _context5.finish(28);

          case 31:
            _context5.next = 4;
            break;

          case 33:
            _context5.next = 38;
            break;

          case 35:
            _context5.prev = 35;
            _context5.t1 = _context5["catch"](2);

            _iterator.e(_context5.t1);

          case 38:
            _context5.prev = 38;

            _iterator.f();

            return _context5.finish(38);

          case 41:
            return _context5.abrupt("return", proposals);

          case 42:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 35, 38, 41], [10, 25, 28, 31]]);
  }));
  return _getAllProposals.apply(this, arguments);
}

function getProposals() {
  return _getProposals.apply(this, arguments);
} // Governance methods


function _getProposals() {
  _getProposals = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    var JSONRPCObject, request;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            JSONRPCObject = makeICXCallRequestObj("getProposals", null, null, SCORES.mainnet.network);
            _context6.next = 3;
            return customRequest(SCORES.apiRoutes.v3, JSONRPCObject);

          case 3:
            request = _context6.sent;

            if (!(request == null)) {
              _context6.next = 8;
              break;
            }

            return _context6.abrupt("return", request);

          case 8:
            return _context6.abrupt("return", request.result);

          case 9:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _getProposals.apply(this, arguments);
}

function getScoreApi() {
  return _getScoreApi.apply(this, arguments);
}

function _getScoreApi() {
  _getScoreApi = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
    var address,
        JSONRPCObject,
        request,
        _args7 = arguments;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            address = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : SCORES.mainnet.governance;
            //
            JSONRPCObject = JSON.stringify(_objectSpread(_objectSpread({}, makeJSONRPCRequestObj("icx_getScoreApi")), {}, {
              params: {
                address: address
              }
            }));
            _context7.next = 4;
            return customRequest(SCORES.apiRoutes.v3, JSONRPCObject);

          case 4:
            request = _context7.sent;

            if (!(request == null)) {
              _context7.next = 9;
              break;
            }

            return _context7.abrupt("return", request);

          case 9:
            return _context7.abrupt("return", request.result);

          case 10:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _getScoreApi.apply(this, arguments);
}

function getIcxBalance(_x4) {
  return _getIcxBalance.apply(this, arguments);
}

function _getIcxBalance() {
  _getIcxBalance = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(address) {
    var decimals,
        JSONRPCObject,
        request,
        _args8 = arguments;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            decimals = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : 2;
            JSONRPCObject = JSON.stringify(_objectSpread(_objectSpread({}, makeJSONRPCRequestObj("icx_getBalance")), {}, {
              params: {
                address: address
              }
            }));
            _context8.next = 4;
            return customRequest(SCORES.apiRoutes.v3, JSONRPCObject);

          case 4:
            request = _context8.sent;

            if (!(request == null)) {
              _context8.next = 9;
              break;
            }

            return _context8.abrupt("return", request);

          case 9:
            return _context8.abrupt("return", Number(fromHexInLoop(request.result).toFixed(decimals)));

          case 10:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _getIcxBalance.apply(this, arguments);
}

function getTxResult(_x5) {
  return _getTxResult.apply(this, arguments);
}

function _getTxResult() {
  _getTxResult = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(txHash) {
    var JSONRPCObject, request;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            JSONRPCObject = JSON.stringify(_objectSpread(_objectSpread({}, makeJSONRPCRequestObj("icx_getTransactionResult")), {}, {
              params: {
                txHash: txHash
              }
            }));
            _context9.next = 3;
            return customRequest(SCORES.apiRoutes.v3, JSONRPCObject);

          case 3:
            request = _context9.sent;

            if (!(request == null)) {
              _context9.next = 8;
              break;
            }

            return _context9.abrupt("return", request);

          case 8:
            return _context9.abrupt("return", request.result);

          case 9:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
  return _getTxResult.apply(this, arguments);
}

function getTxByHash(_x6) {
  return _getTxByHash.apply(this, arguments);
}

function _getTxByHash() {
  _getTxByHash = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(txHash) {
    var JSONRPCObject, request;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            JSONRPCObject = JSON.stringify(_objectSpread(_objectSpread({}, makeJSONRPCRequestObj("icx_getTransactionByHash")), {}, {
              params: {
                txHash: txHash
              }
            }));
            _context10.next = 3;
            return customRequest(SCORES.apiRoutes.v3, JSONRPCObject);

          case 3:
            request = _context10.sent;

            if (!(request == null)) {
              _context10.next = 8;
              break;
            }

            return _context10.abrupt("return", request);

          case 8:
            return _context10.abrupt("return", request.result);

          case 9:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));
  return _getTxByHash.apply(this, arguments);
}

function getPreps() {
  return _getPreps.apply(this, arguments);
}

function _getPreps() {
  _getPreps = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
    var height,
        JSONRPCObject,
        request,
        _args11 = arguments;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            height = _args11.length > 0 && _args11[0] !== undefined ? _args11[0] : null;
            JSONRPCObject = makeICXCallRequestObj("getPReps", {
              startRanking: "0x1"
            }, height, SCORES.mainnet.governance);
            _context11.next = 4;
            return customRequest(SCORES.apiRoutes.v3, JSONRPCObject);

          case 4:
            request = _context11.sent;

            if (!(request == null)) {
              _context11.next = 9;
              break;
            }

            return _context11.abrupt("return", request);

          case 9:
            return _context11.abrupt("return", request.result);

          case 10:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));
  return _getPreps.apply(this, arguments);
}

function getPrep(_x7) {
  return _getPrep.apply(this, arguments);
}

function _getPrep() {
  _getPrep = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(prepAddress) {
    var JSONRPCObject, request;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            //
            JSONRPCObject = makeICXCallRequestObj("getPRep", {
              address: prepAddress
            }, null, SCORES.mainnet.governance);
            _context12.next = 3;
            return customRequest(SCORES.apiRoutes.v3, JSONRPCObject);

          case 3:
            request = _context12.sent;

            if (!(request == null)) {
              _context12.next = 8;
              break;
            }

            return _context12.abrupt("return", request);

          case 8:
            return _context12.abrupt("return", request.result);

          case 9:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));
  return _getPrep.apply(this, arguments);
}

function parsePrepData(prep) {
  return _objectSpread(_objectSpread({}, prep), {}, {
    bonded: parseInt(fromHexInLoop(prep.bonded)),
    delegated: parseInt(fromHexInLoop(prep.delegated)),
    grade: prep.grade === "0x0" ? "Main Prep" : prep.grade === "0x1" ? "Sub Prep" : "Prep candidate",
    irep: parseInt(fromHexInLoop(prep.irep)),
    irepUpdateBlockHeight: hexToDecimal(prep.irepUpdateBlockHeight),
    lastHeight: hexToDecimal(prep.lastHeight),
    penalty: prep.penalty === "0x0" ? "none" : prep.penalty === "0x1" ? "Disqualification" : prep.penalty === "0x2" ? "Low Productivity" : prep.penalty === "0x3" ? "Block Validation Failure" : "Unknown",
    power: parseInt(fromHexInLoop(prep.power)),
    status: prep.status === "0x0" ? "Active" : prep.status === "0x1" ? "unregistered" : prep.status === "0x2" ? "Disqualified" : "Unknown",
    totalBlocks: hexToDecimal(prep.totalBlocks),
    validatedBlocks: hexToDecimal(prep.validatedBlocks)
  });
}

function getBonderList(_x8) {
  return _getBonderList.apply(this, arguments);
}

function _getBonderList() {
  _getBonderList = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(prepAddress) {
    var JSONRPCObject, request;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            //
            JSONRPCObject = makeICXCallRequestObj("getBonderList", {
              address: prepAddress
            }, null, SCORES.mainnet.governance);
            _context13.next = 3;
            return customRequest(SCORES.apiRoutes.v3, JSONRPCObject);

          case 3:
            request = _context13.sent;

            if (!(request == null)) {
              _context13.next = 8;
              break;
            }

            return _context13.abrupt("return", request);

          case 8:
            return _context13.abrupt("return", request.result);

          case 9:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));
  return _getBonderList.apply(this, arguments);
}

function setBonderList(prepAddress, arrayOfBonderAddresses) {
  return makeTxCallRPCObj(prepAddress, SCORES.mainnet.governance, "setBonderList", {
    bonderList: _toConsumableArray(arrayOfBonderAddresses)
  });
}

function voteNetworkProposal(proposalId, vote, prepAddress) {
  return makeTxCallRPCObj(prepAddress, SCORES.mainnet.network, "voteProposal", {
    id: proposalId,
    vote: vote
  });
}

function approveNetworkProposal(proposalId, prepAddress) {
  return voteNetworkProposal(proposalId, "0x1", prepAddress);
}

function rejectNetworkProposal(proposalId, prepAddress) {
  return voteNetworkProposal(proposalId, "0x0", prepAddress);
}

function getLastBlock() {
  return _getLastBlock.apply(this, arguments);
}

function _getLastBlock() {
  _getLastBlock = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
    var JSONRPCObject, request;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            JSONRPCObject = JSON.stringify(makeJSONRPCRequestObj("icx_getLastBlock"));
            _context14.next = 3;
            return customFetch(SCORES.apiRoutes.v3, JSONRPCObject);

          case 3:
            request = _context14.sent;

            if (!(request == null)) {
              _context14.next = 8;
              break;
            }

            return _context14.abrupt("return", request);

          case 8:
            return _context14.abrupt("return", request.result);

          case 9:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  }));
  return _getLastBlock.apply(this, arguments);
}

var lib = {
  cps: {
    getCPSPeriodStatus: getCPSPeriodStatus,
    getProposalKeysByStatus: getProposalKeysByStatus,
    getProposalDetailsByHash: getProposalDetailsByHash,
    getVoteResultsByHash: getVoteResultsByHash,
    getAllProposals: getAllProposals
  },
  governance: {
    getScoreApi: getScoreApi,
    getIcxBalance: getIcxBalance,
    getTxResult: getTxResult,
    getTxByHash: getTxByHash,
    getPrep: getPrep,
    parsePrepData: parsePrepData,
    getPreps: getPreps,
    getBonderList: getBonderList,
    setBonderList: setBonderList,
    getLastBlock: getLastBlock,
    approveNetworkProposal: approveNetworkProposal,
    rejectNetworkProposal: rejectNetworkProposal
  },
  lib: {
    hexToDecimal: hexToDecimal,
    decimalToHex: decimalToHex,
    fromHexInLoop: fromHexInLoop
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lib);

/***/ }),

/***/ "./tests/lib-no-sdk-web.test.js":
/*!**************************************!*\
  !*** ./tests/lib-no-sdk-web.test.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// lib-no-sdk-web.test.js
//
// Imports
// require("dotenv").config();
var lib = __webpack_require__(/*! ../lib-no-sdk-web */ "./lib-no-sdk-web.js");

var getLastBlock = lib.governance.getLastBlock; // const { getAllProposals } = lib.cps;

var _require = __webpack_require__(/*! ./utils.js */ "./tests/utils.js"),
    createTest = _require.createTest;

var SCORES = __webpack_require__(/*! ../utils/scores */ "./utils/scores.js");

var TEST_WALLET = "hx9fa9d224306b0722099d30471b3c2306421aead7";
var TEST_CONTRACT = SCORES.mainnet.governance;

function libNoSdkWebTests() {
  return _libNoSdkWebTests.apply(this, arguments);
}

function _libNoSdkWebTests() {
  _libNoSdkWebTests = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return createTest(getLastBlock);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _libNoSdkWebTests.apply(this, arguments);
}

module.exports = libNoSdkWebTests;

/***/ }),

/***/ "./tests/utils.js":
/*!************************!*\
  !*** ./tests/utils.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// tests/utils.js
//
// Imports
var _require = __webpack_require__(/*! @fidelve/colorlog */ "./node_modules/@fidelve/colorlog/colorLog.js"),
    alertMsg = _require.alertMsg,
    warningMsg = _require.warningMsg,
    successMsg = _require.successMsg; // Functions
//


function createTest(_x) {
  return _createTest.apply(this, arguments);
}

function _createTest() {
  _createTest = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(method) {
    var params,
        methodName,
        methodParamsNames,
        maxChar,
        stringToPrint,
        _len,
        rest,
        _key,
        i,
        paramName,
        paramValue,
        tempValue,
        result,
        stringResult,
        _args = arguments;

    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            params = _args.length > 1 && _args[1] !== undefined ? _args[1] : false;
            methodName = method.name;
            methodParamsNames = getParams(method);
            maxChar = 2000;
            stringToPrint = "!----------------\nRunning test on function => ".concat(successMsg(method.name), " ").concat(methodParamsNames.str);

            for (_len = _args.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
              rest[_key - 2] = _args[_key];
            }

            if (methodParamsNames.arr.length != rest.length) {
              stringToPrint += "\n".concat(warningMsg("WARNING:"), " the amount of arguments being passed to the function \"").concat(methodName, "\" is not the same amount of arguments that were defined during function declaration unless method was declared using \"...rest\". Bypassing printing the function arguments");
            } else {
              for (i = 0; i < methodParamsNames.arr.length; i++) {
                paramName = methodParamsNames.arr[i];
                paramValue = void 0;

                if (typeof rest[i] === "function") {
                  paramValue = rest[i].name;
                } else if (_typeof(rest[i]) === "object") {
                  try {
                    tempValue = JSON.stringify(rest[i]);

                    if (tempValue.length > 200) {
                      paramValue = tempValue.slice(0, 200) + "...}";
                    } else {
                      paramValue = tempValue;
                    }
                  } catch (err) {
                    paramValue = "[Object. constructor: ".concat(rest[i].constructor.name, "]");
                  }
                } else {
                  paramValue = rest[i];
                }

                stringToPrint += "\n>> ".concat(paramName, ": ").concat(paramValue);
              }
            }

            console.log(stringToPrint);

            if (!params) {
              _context.next = 14;
              break;
            }

            _context.next = 11;
            return method.apply(void 0, rest);

          case 11:
            result = _context.sent;
            _context.next = 17;
            break;

          case 14:
            _context.next = 16;
            return method();

          case 16:
            result = _context.sent;

          case 17:
            console.log(warningMsg("Results:"));

            if (_typeof(result) === "object") {
              stringResult = JSON.stringify(result);

              if (stringResult.length > maxChar) {
                console.log(stringResult.slice(0, maxChar) + "...}");
              } else {
                console.log(stringResult);
              }
            } else {
              console.log(result);
            }

            return _context.abrupt("return", result);

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _createTest.apply(this, arguments);
}

function runTestModule(_x2, _x3) {
  return _runTestModule.apply(this, arguments);
}

function _runTestModule() {
  _runTestModule = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(module, moduleName) {
    var skip,
        hasParams,
        _len2,
        rest,
        _key2,
        _args2 = arguments;

    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            skip = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : false;
            hasParams = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : false;

            if (!skip) {
              _context2.next = 6;
              break;
            }

            console.log("!-----------------\n".concat(warningMsg("Skipping tests"), " on module: ").concat(warningMsg(moduleName)));
            _context2.next = 15;
            break;

          case 6:
            console.log("!-----------------\n".concat(successMsg("Running tests"), " on module: ").concat(warningMsg(moduleName)));

            if (!hasParams) {
              _context2.next = 13;
              break;
            }

            for (_len2 = _args2.length, rest = new Array(_len2 > 4 ? _len2 - 4 : 0), _key2 = 4; _key2 < _len2; _key2++) {
              rest[_key2 - 4] = _args2[_key2];
            }

            _context2.next = 11;
            return module.apply(void 0, rest);

          case 11:
            _context2.next = 15;
            break;

          case 13:
            _context2.next = 15;
            return module();

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _runTestModule.apply(this, arguments);
}

function getParams(method) {
  var regex = /\(([\s\S]*?)\)\s/;
  var str1 = method.toString().match(regex)[0];
  var arr1 = str1.replace("(", "").replace(")", "").split(",");
  var arr2 = arr1.map(function (each) {
    return each.trim();
  });
  return {
    str: "(".concat(arr2.join(", "), ")"),
    arr: arr2
  };
}

module.exports = {
  createTest: createTest,
  runTestModule: runTestModule,
  getParams: getParams
};

/***/ }),

/***/ "./utils/customFetch.js":
/*!******************************!*\
  !*** ./utils/customFetch.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// httpsRequest.js
// This module is an https request wrapped in a promise design to be used
// to interact with the ICON Blockchain
//
// Imports
var SCORES = __webpack_require__(/*! ./scores */ "./utils/scores.js");

function customFetch(_x) {
  return _customFetch.apply(this, arguments);
}

function _customFetch() {
  _customFetch = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(path) {
    var data,
        hostname,
        https,
        port,
        params,
        reqParams,
        url,
        queryResult,
        customRequest,
        response,
        _queryResult,
        _args = arguments;

    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            data = _args.length > 1 && _args[1] !== undefined ? _args[1] : false;
            hostname = _args.length > 2 && _args[2] !== undefined ? _args[2] : SCORES.apiHostnames.espanicon;
            https = _args.length > 3 && _args[3] !== undefined ? _args[3] : true;
            port = _args.length > 4 && _args[4] !== undefined ? _args[4] : false;
            params = {
              hostname: hostname,
              path: path,
              headers: {
                "Content-Type": "text/plain"
              },
              port: port ? ":" + port + "/" : "",
              protocol: https ? "https://" : "http://"
            };

            if (data) {
              reqParams = {
                headers: params.headers,
                method: "POST",
                body: data
              };
            } else {
              reqParams = {
                headers: params.headers,
                method: "GET"
              };
            }

            url = params.protocol + params.hostname + params.port + params.path;
            _context.prev = 7;
            // create request object
            customRequest = new Request(url, reqParams); // console.log("customRequest");
            // console.log(customRequest);
            // make fetch call with created request object

            _context.next = 11;
            return fetch(customRequest);

          case 11:
            response = _context.sent;
            _context.next = 14;
            return response.json();

          case 14:
            _queryResult = _context.sent;

            if (!(_queryResult.error == null)) {
              _context.next = 19;
              break;
            }

            return _context.abrupt("return", _queryResult);

          case 19:
            throw new Error("Request made successfully but returned Error from the node");

          case 20:
            _context.next = 28;
            break;

          case 22:
            _context.prev = 22;
            _context.t0 = _context["catch"](7);
            // if an error occurs returns null and log the error
            console.log("Error running customRequest");
            console.log(_context.t0.message);
            console.log(queryResult);
            return _context.abrupt("return", null);

          case 28:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[7, 22]]);
  }));
  return _customFetch.apply(this, arguments);
}

module.exports = customFetch;

/***/ }),

/***/ "./utils/scores.js":
/*!*************************!*\
  !*** ./utils/scores.js ***!
  \*************************/
/***/ ((module) => {

// smart contract addresses in the ICON Network
var mainnet = {
  //
  governance: "cx0000000000000000000000000000000000000000",
  network: "cx0000000000000000000000000000000000000001",
  cps: "cx9f4ab72f854d3ccdc59aa6f2c3e2215dd62e879f"
};
var sejong = {
  //
  governance: "cx0000000000000000000000000000000000000000",
  network: "cx0000000000000000000000000000000000000001",
  bnUSD: "cx5838cb516d6156a060f90e9a3de92381331ff024"
};
var berlin = {
  //
  governance: "cx0000000000000000000000000000000000000000",
  network: "cx0000000000000000000000000000000000000001"
};
var lisbon = {
  //
  governance: "cx0000000000000000000000000000000000000000",
  governance2: "cx0000000000000000000000000000000000000001"
};
var nid = {
  mainnet: 1,
  lisbon: 2,
  berlin: 7,
  sejong: 83
};
var apiHostnames = {
  geometry: "api.icon.geometry.io",
  // deprecated
  ctz: "ctz.solidwallet.io",
  icon: "api.icon.community",
  espanicon: "api.espanicon.team",
  sejong: "sejong.net.solidwallet.io",
  berlin: "berlin.net.solidwallet.io",
  lisbon: "lisbon.net.solidwallet.io",
  localhost: "localhost",
  node: "65.108.47.72"
};
var apiRoutes = {
  v3: "/api/v3",
  proposals: "/api/v1/governance/proposals"
};
var SCORES = {
  mainnet: mainnet,
  sejong: sejong,
  berlin: berlin,
  lisbon: lisbon,
  nid: nid,
  apiRoutes: apiRoutes,
  apiHostnames: apiHostnames
};
module.exports = SCORES;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./tests/web.test.js ***!
  \***************************/
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// web.test.js
var libNoSdkWebTests = __webpack_require__(/*! ./lib-no-sdk-web.test */ "./tests/lib-no-sdk-web.test.js");

var _require = __webpack_require__(/*! ./utils */ "./tests/utils.js"),
    runTestModule = _require.runTestModule;

function runAllTests() {
  return _runAllTests.apply(this, arguments);
}

function _runAllTests() {
  _runAllTests = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return runTestModule(libNoSdkWebTests, "lib-no-sdk-web.js");

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _runAllTests.apply(this, arguments);
}

runAllTests();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxPQURhO0VBRWIrSixNQUFNLEVBQU5BLE1BRmE7RUFHYkUsTUFBTSxFQUFOQSxNQUhhO0VBSWJDLE1BQU0sRUFBTkEsTUFKYTtFQUtibkssR0FBRyxFQUFIQSxHQUxhO0VBTWIrQixTQUFTLEVBQVRBLFNBTmE7RUFPYmlILFlBQVksRUFBWkE7QUFQYSxDQUFmO0FBVUExQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJwSCxNQUFqQjs7Ozs7O1VDMURBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7K0NDTEE7Ozs7OztBQURBO0FBQ0EsSUFBTWtILGdCQUFnQixHQUFHbkgsbUJBQU8sQ0FBQyw2REFBRCxDQUFoQzs7QUFDQSxlQUEwQkEsbUJBQU8sQ0FBQyxpQ0FBRCxDQUFqQztBQUFBLElBQVE2SSxhQUFSLFlBQVFBLGFBQVI7O1NBRWUyQzs7Ozs7NEVBQWY7SUFBQTtNQUFBO1FBQUE7VUFBQTtZQUFBO1lBQUEsT0FDUTNDLGFBQWEsQ0FBQzFCLGdCQUFELEVBQW1CLG1CQUFuQixDQURyQjs7VUFBQTtVQUFBO1lBQUE7UUFBQTtNQUFBO0lBQUE7RUFBQTs7OztBQUlBcUUsV0FBVyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXNwYW5pY29uLXNkay8uL25vZGVfbW9kdWxlcy9AZmlkZWx2ZS9jb2xvcmxvZy9jb2xvckxvZy5qcyIsIndlYnBhY2s6Ly9lc3Bhbmljb24tc2RrLy4vbGliLW5vLXNkay13ZWIuanMiLCJ3ZWJwYWNrOi8vZXNwYW5pY29uLXNkay8uL3Rlc3RzL2xpYi1uby1zZGstd2ViLnRlc3QuanMiLCJ3ZWJwYWNrOi8vZXNwYW5pY29uLXNkay8uL3Rlc3RzL3V0aWxzLmpzIiwid2VicGFjazovL2VzcGFuaWNvbi1zZGsvLi91dGlscy9jdXN0b21GZXRjaC5qcyIsIndlYnBhY2s6Ly9lc3Bhbmljb24tc2RrLy4vdXRpbHMvc2NvcmVzLmpzIiwid2VicGFjazovL2VzcGFuaWNvbi1zZGsvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXNwYW5pY29uLXNkay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXNwYW5pY29uLXNkay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2VzcGFuaWNvbi1zZGsvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lc3Bhbmljb24tc2RrLy4vdGVzdHMvd2ViLnRlc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVEFHUyA9IHtcbiAgcmVzZXQ6IFwiXFx4MWJbMG1cIixcbiAgY29sb3JzOiB7XG4gICAgYmxhY2s6IFwiXFx4MWJbMzBtXCIsXG4gICAgcmVkOiBcIlxceDFiWzMxbVwiLFxuICAgIGdyZWVuOiBcIlxceDFiWzMybVwiLFxuICAgIHllbGxvdzogXCJcXHgxYlszM21cIixcbiAgICBkZWZhdWx0OiBcIlxceDFiWzM5bVwiXG4gIH0sXG4gIHN0eWxlOiB7XG4gICAgYm9sZDogXCJcXHgxYlsxbVwiXG4gIH0sXG4gIGJnOiB7XG4gICAgZGVmYXVsdDogXCJcXHgxYls0OW1cIixcbiAgICByZWQ6IFwiXFx4MWJbNDFtXCIsXG4gICAgZ3JlZW46IFwiXFx4MWJbNDJtXCIsXG4gICAgeWVsbG93OiBcIlxceDFiWzQzbVwiXG4gIH1cbn07XG5cbmZ1bmN0aW9uIGFsZXJ0TXNnKG1zZykge1xuICAvL1xuICByZXR1cm4gYFxceDFiWzQxOzMwbSR7bXNnfSR7VEFHUy5yZXNldH1gO1xufVxuXG5mdW5jdGlvbiB3YXJuaW5nTXNnKG1zZykge1xuICAvL1xuICByZXR1cm4gYFxceDFiWzQzOzMwbSR7bXNnfSR7VEFHUy5yZXNldH1gO1xufVxuXG5mdW5jdGlvbiBzdWNjZXNzTXNnKG1zZykge1xuICAvL1xuICByZXR1cm4gYFxceDFiWzQyOzMwbSR7bXNnfSR7VEFHUy5yZXNldH1gO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYWxlcnRNc2csXG4gIHdhcm5pbmdNc2csXG4gIHN1Y2Nlc3NNc2dcbn07XG4iLCIvLyBsaWItbm8tc2RrLXdlYi5qc1xuLy9cbi8vIEltcG9ydHNcbmNvbnN0IGN1c3RvbUZldGNoID0gcmVxdWlyZShcIi4vdXRpbHMvY3VzdG9tRmV0Y2hcIik7XG5jb25zdCBTQ09SRVMgPSByZXF1aXJlKFwiLi91dGlscy9zY29yZXNcIik7XG5cbi8vIGdsb2JhbCB2YXIgZGVjbGFyYXRpb25zXG5jb25zdCBzdGF0dXNUeXBlID0gW1xuICBcIl9hY3RpdmVcIixcbiAgXCJfY29tcGxldGVkXCIsXG4gIFwiX2Rpc3F1YWxpZmllZFwiLFxuICBcIl9wYXVzZWRcIixcbiAgXCJfcGVuZGluZ1wiXG5dO1xuXG4vLyBHZW5lcmFsIEZ1bmN0aW9uc1xuZnVuY3Rpb24gbWFrZUpTT05SUENSZXF1ZXN0T2JqKG1ldGhvZCkge1xuICByZXR1cm4ge1xuICAgIGpzb25ycGM6IFwiMi4wXCIsXG4gICAgbWV0aG9kOiBtZXRob2QsXG4gICAgaWQ6IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwMClcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFrZVR4Q2FsbFJQQ09iaihcbiAgZnJvbSxcbiAgdG8sXG4gIG1ldGhvZCxcbiAgcGFyYW1zT2JqLFxuICBuaWQgPSBTQ09SRVMubmlkLm1haW5uZXQsXG4gIHN0ZXBMaW1pdCA9IDIwMDAwMDBcbikge1xuICBsZXQgdHhPYmogPSBtYWtlSlNPTlJQQ1JlcXVlc3RPYmooXCJpY3hfc2VuZFRyYW5zYWN0aW9uXCIpO1xuICB0eE9ialtcInBhcmFtc1wiXSA9IHtcbiAgICBmcm9tOiBmcm9tLFxuICAgIHRvOiB0byxcbiAgICBzdGVwTGltaXQ6IGRlY2ltYWxUb0hleChzdGVwTGltaXQpLFxuICAgIG5pZDogZGVjaW1hbFRvSGV4KG5pZCksXG4gICAgbm9uY2U6IGRlY2ltYWxUb0hleCgxKSxcbiAgICB2ZXJzaW9uOiBkZWNpbWFsVG9IZXgoMyksXG4gICAgdGltZXN0YW1wOiBkZWNpbWFsVG9IZXgobmV3IERhdGUoKS5nZXRUaW1lKCkgKiAxMDAwKSxcbiAgICBkYXRhVHlwZTogXCJjYWxsXCIsXG4gICAgZGF0YToge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICBwYXJhbXM6IHBhcmFtc09ialxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdHhPYmo7XG59XG5cbmZ1bmN0aW9uIG1ha2VJQ1hDYWxsUmVxdWVzdE9iaihcbiAgbWV0aG9kLFxuICBwYXJhbXMgPSBudWxsLFxuICBoZWlnaHQgPSBudWxsLFxuICB0byA9IFwiY3gwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwXCJcbikge1xuICBjb25zdCBKU09OUlBDUmVxdWVzdE9iaiA9IG1ha2VKU09OUlBDUmVxdWVzdE9iaihcImljeF9jYWxsXCIpO1xuICBsZXQgZGF0YSA9IHtcbiAgICAuLi5KU09OUlBDUmVxdWVzdE9iaixcbiAgICBwYXJhbXM6IHtcbiAgICAgIHRvOiB0byxcbiAgICAgIGRhdGFUeXBlOiBcImNhbGxcIixcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbWV0aG9kOiBtZXRob2RcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgaWYgKHBhcmFtcyA9PSBudWxsKSB7XG4gIH0gZWxzZSB7XG4gICAgZGF0YS5wYXJhbXMuZGF0YS5wYXJhbXMgPSBwYXJhbXM7XG4gIH1cblxuICBpZiAoaGVpZ2h0ID09PSBudWxsKSB7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHR5cGVvZiBoZWlnaHQgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkhlaWdodCB0eXBlIG11c3QgYmUgbnVtYmVyXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhLnBhcmFtcy5oZWlnaHQgPSBcIjB4XCIgKyBoZWlnaHQudG9TdHJpbmcoMTYpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbn1cblxuZnVuY3Rpb24gaGV4VG9EZWNpbWFsKGhleCkge1xuICByZXR1cm4gcGFyc2VJbnQoaGV4LCAxNik7XG59XG5cbmZ1bmN0aW9uIGRlY2ltYWxUb0hleChudW1iZXIpIHtcbiAgcmV0dXJuIFwiMHhcIiArIG51bWJlci50b1N0cmluZygxNik7XG59XG5cbmZ1bmN0aW9uIGZyb21IZXhJbkxvb3AobG9vcEluSGV4KSB7XG4gIGxldCBsb29wSW5CYXNlMiA9IGhleFRvRGVjaW1hbChsb29wSW5IZXgpO1xuICByZXR1cm4gbG9vcEluQmFzZTIgLyAxMCAqKiAxODtcbn1cblxuLy8gU0NPUkUgbWV0aG9kc1xuLy9cbi8vIENQUyBtZXRob2RzXG5hc3luYyBmdW5jdGlvbiBnZXRDUFNQZXJpb2RTdGF0dXMoKSB7XG4gIC8vXG4gIGNvbnN0IEpTT05SUENPYmplY3QgPSBtYWtlSUNYQ2FsbFJlcXVlc3RPYmooXG4gICAgXCJnZXRfcGVyaW9kX3N0YXR1c1wiLFxuICAgIG51bGwsXG4gICAgbnVsbCxcbiAgICBTQ09SRVMubWFpbm5ldC5jcHNcbiAgKTtcblxuICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgY3VzdG9tUmVxdWVzdChTQ09SRVMuYXBpUm91dGVzLnYzLCBKU09OUlBDT2JqZWN0KTtcbiAgaWYgKHJlcXVlc3QgPT0gbnVsbCkge1xuICAgIC8vIEVycm9yIHdhcyByYWlzZWQgYW5kIGhhbmRsZWQgaW5zaWRlIGN1c3RvbVJlcXVlc3QsIHRoZSByZXR1cm5lZCB2YWx1ZVxuICAgIC8vIGlzIG51bGwuIEhlcmUgd2UgY29udGludWUgcmV0dXJuaW5nIG51bGwgYW5kIGxldCB0aGUgY29kZSBsb2dpY1xuICAgIC8vIGFmdGVyIHRoaXMgaGFuZGxlIHRoZSBudWxsIHZhbHVlcyBpbiB0aGUgbW9zdCBhcHByb3BpYXRlIHdheSBkZXBlbmRpbmdcbiAgICAvLyBvbiB0aGUgY29kZSBsb2dpY1xuICAgIHJldHVybiByZXF1ZXN0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiByZXF1ZXN0LnJlc3VsdDtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRQcm9wb3NhbEtleXNCeVN0YXR1cyhzdGF0dXMpIHtcbiAgY29uc3QgSlNPTlJQQ09iamVjdCA9IG1ha2VJQ1hDYWxsUmVxdWVzdE9iaihcbiAgICBcImdldF9wcm9wb3NhbHNfa2V5c19ieV9zdGF0dXNcIixcbiAgICB7IF9zdGF0dXM6IHN0YXR1cyB9LFxuICAgIG51bGwsXG4gICAgU0NPUkVTLm1haW5uZXQuY3BzXG4gICk7XG5cbiAgaWYgKHN0YXR1c1R5cGUuaW5jbHVkZXMoc3RhdHVzKSkge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBjdXN0b21SZXF1ZXN0KFNDT1JFUy5hcGlSb3V0ZXMudjMsIEpTT05SUENPYmplY3QpO1xuICAgIGlmIChyZXF1ZXN0ID09IG51bGwpIHtcbiAgICAgIC8vIEVycm9yIHdhcyByYWlzZWQgYW5kIGhhbmRsZWQgaW5zaWRlIGN1c3RvbVJlcXVlc3QsIHRoZSByZXR1cm5lZCB2YWx1ZVxuICAgICAgLy8gaXMgbnVsbC4gSGVyZSB3ZSBjb250aW51ZSByZXR1cm5pbmcgbnVsbCBhbmQgbGV0IHRoZSBjb2RlIGxvZ2ljXG4gICAgICAvLyBhZnRlciB0aGlzIGhhbmRsZSB0aGUgbnVsbCB2YWx1ZXMgaW4gdGhlIG1vc3QgYXBwcm9waWF0ZSB3YXkgZGVwZW5kaW5nXG4gICAgICAvLyBvbiB0aGUgY29kZSBsb2dpY1xuICAgICAgcmV0dXJuIHJlcXVlc3Q7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXF1ZXN0LnJlc3VsdDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0UHJvcG9zYWxEZXRhaWxzQnlIYXNoKGhhc2gpIHtcbiAgY29uc3QgSlNPTlJQQ09iamVjdCA9IG1ha2VJQ1hDYWxsUmVxdWVzdE9iaihcbiAgICBcImdldF9wcm9wb3NhbF9kZXRhaWxzX2J5X2hhc2hcIixcbiAgICB7IF9pcGZzX2tleTogaGFzaCB9LFxuICAgIG51bGwsXG4gICAgU0NPUkVTLm1haW5uZXQuY3BzXG4gICk7XG5cbiAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGN1c3RvbVJlcXVlc3QoU0NPUkVTLmFwaVJvdXRlcy52MywgSlNPTlJQQ09iamVjdCk7XG4gIGlmIChyZXF1ZXN0ID09IG51bGwpIHtcbiAgICAvLyBFcnJvciB3YXMgcmFpc2VkIGFuZCBoYW5kbGVkIGluc2lkZSBjdXN0b21SZXF1ZXN0LCB0aGUgcmV0dXJuZWQgdmFsdWVcbiAgICAvLyBpcyBudWxsLiBIZXJlIHdlIGNvbnRpbnVlIHJldHVybmluZyBudWxsIGFuZCBsZXQgdGhlIGNvZGUgbG9naWNcbiAgICAvLyBhZnRlciB0aGlzIGhhbmRsZSB0aGUgbnVsbCB2YWx1ZXMgaW4gdGhlIG1vc3QgYXBwcm9waWF0ZSB3YXkgZGVwZW5kaW5nXG4gICAgLy8gb24gdGhlIGNvZGUgbG9naWNcbiAgICByZXR1cm4gcmVxdWVzdDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmVxdWVzdC5yZXN1bHQ7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0Vm90ZVJlc3VsdHNCeUhhc2goaGFzaCkge1xuICBjb25zdCBKU09OUlBDT2JqZWN0ID0gbWFrZUlDWENhbGxSZXF1ZXN0T2JqKFxuICAgIFwiZ2V0X3ZvdGVfcmVzdWx0XCIsXG4gICAgeyBfaXBmc19rZXk6IGhhc2ggfSxcbiAgICBudWxsLFxuICAgIFNDT1JFUy5tYWlubmV0LmNwc1xuICApO1xuXG4gIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBjdXN0b21SZXF1ZXN0KFNDT1JFUy5hcGlSb3V0ZXMudjMsIEpTT05SUENPYmplY3QpO1xuICBpZiAocmVxdWVzdCA9PSBudWxsKSB7XG4gICAgLy8gRXJyb3Igd2FzIHJhaXNlZCBhbmQgaGFuZGxlZCBpbnNpZGUgY3VzdG9tUmVxdWVzdCwgdGhlIHJldHVybmVkIHZhbHVlXG4gICAgLy8gaXMgbnVsbC4gSGVyZSB3ZSBjb250aW51ZSByZXR1cm5pbmcgbnVsbCBhbmQgbGV0IHRoZSBjb2RlIGxvZ2ljXG4gICAgLy8gYWZ0ZXIgdGhpcyBoYW5kbGUgdGhlIG51bGwgdmFsdWVzIGluIHRoZSBtb3N0IGFwcHJvcGlhdGUgd2F5IGRlcGVuZGluZ1xuICAgIC8vIG9uIHRoZSBjb2RlIGxvZ2ljXG4gICAgcmV0dXJuIHJlcXVlc3Q7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJlcXVlc3QucmVzdWx0O1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEFsbFByb3Bvc2FscygpIHtcbiAgbGV0IHByb3Bvc2FscyA9IHtcbiAgICBfYWN0aXZlOiBbXSxcbiAgICBfY29tcGxldGVkOiBbXSxcbiAgICBfZGlzcXVhbGlmaWVkOiBbXSxcbiAgICBfcGF1c2VkOiBbXSxcbiAgICBfcGVuZGluZzogW11cbiAgfTtcblxuICBmb3IgKGxldCBlYWNoU3RhdHVzIG9mIHN0YXR1c1R5cGUpIHtcbiAgICBjb25zdCBwcm9wb3NhbHNLZXlzID0gYXdhaXQgZ2V0UHJvcG9zYWxLZXlzQnlTdGF0dXMoZWFjaFN0YXR1cyk7XG5cbiAgICBmb3IgKGxldCBlYWNoUHJvcG9zYWwgb2YgcHJvcG9zYWxzS2V5cykge1xuICAgICAgY29uc3QgcHJvcG9zYWwgPSBhd2FpdCBnZXRQcm9wb3NhbERldGFpbHNCeUhhc2goZWFjaFByb3Bvc2FsKTtcbiAgICAgIGNvbnN0IGNvbW1lbnRzID0gYXdhaXQgZ2V0Vm90ZVJlc3VsdHNCeUhhc2goZWFjaFByb3Bvc2FsKTtcblxuICAgICAgcHJvcG9zYWxzW2VhY2hTdGF0dXNdLnB1c2goe1xuICAgICAgICBwcm9wb3NhbDogcHJvcG9zYWwsXG4gICAgICAgIGNvbW1lbnRzOiBjb21tZW50c1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3Bvc2Fscztcbn1cblxuLy8gTmV0d29yayBzY29yZSBtZXRob2RzXG5hc3luYyBmdW5jdGlvbiBnZXRQcm9wb3NhbHMoKSB7XG4gIGNvbnN0IEpTT05SUENPYmplY3QgPSBtYWtlSUNYQ2FsbFJlcXVlc3RPYmooXG4gICAgXCJnZXRQcm9wb3NhbHNcIixcbiAgICBudWxsLFxuICAgIG51bGwsXG4gICAgU0NPUkVTLm1haW5uZXQubmV0d29ya1xuICApO1xuXG4gIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBjdXN0b21SZXF1ZXN0KFNDT1JFUy5hcGlSb3V0ZXMudjMsIEpTT05SUENPYmplY3QpO1xuICBpZiAocmVxdWVzdCA9PSBudWxsKSB7XG4gICAgLy8gRXJyb3Igd2FzIHJhaXNlZCBhbmQgaGFuZGxlZCBpbnNpZGUgY3VzdG9tUmVxdWVzdCwgdGhlIHJldHVybmVkIHZhbHVlXG4gICAgLy8gaXMgbnVsbC4gSGVyZSB3ZSBjb250aW51ZSByZXR1cm5pbmcgbnVsbCBhbmQgbGV0IHRoZSBjb2RlIGxvZ2ljXG4gICAgLy8gYWZ0ZXIgdGhpcyBoYW5kbGUgdGhlIG51bGwgdmFsdWVzIGluIHRoZSBtb3N0IGFwcHJvcGlhdGUgd2F5IGRlcGVuZGluZ1xuICAgIC8vIG9uIHRoZSBjb2RlIGxvZ2ljXG4gICAgcmV0dXJuIHJlcXVlc3Q7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJlcXVlc3QucmVzdWx0O1xuICB9XG59XG5cbi8vIEdvdmVybmFuY2UgbWV0aG9kc1xuYXN5bmMgZnVuY3Rpb24gZ2V0U2NvcmVBcGkoYWRkcmVzcyA9IFNDT1JFUy5tYWlubmV0LmdvdmVybmFuY2UpIHtcbiAgLy9cbiAgY29uc3QgSlNPTlJQQ09iamVjdCA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAuLi5tYWtlSlNPTlJQQ1JlcXVlc3RPYmooXCJpY3hfZ2V0U2NvcmVBcGlcIiksXG4gICAgcGFyYW1zOiB7XG4gICAgICBhZGRyZXNzOiBhZGRyZXNzXG4gICAgfVxuICB9KTtcblxuICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgY3VzdG9tUmVxdWVzdChTQ09SRVMuYXBpUm91dGVzLnYzLCBKU09OUlBDT2JqZWN0KTtcbiAgaWYgKHJlcXVlc3QgPT0gbnVsbCkge1xuICAgIC8vIEVycm9yIHdhcyByYWlzZWQgYW5kIGhhbmRsZWQgaW5zaWRlIGN1c3RvbVJlcXVlc3QsIHRoZSByZXR1cm5lZCB2YWx1ZVxuICAgIC8vIGlzIG51bGwuIEhlcmUgd2UgY29udGludWUgcmV0dXJuaW5nIG51bGwgYW5kIGxldCB0aGUgY29kZSBsb2dpY1xuICAgIC8vIGFmdGVyIHRoaXMgaGFuZGxlIHRoZSBudWxsIHZhbHVlcyBpbiB0aGUgbW9zdCBhcHByb3BpYXRlIHdheSBkZXBlbmRpbmdcbiAgICAvLyBvbiB0aGUgY29kZSBsb2dpY1xuICAgIHJldHVybiByZXF1ZXN0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiByZXF1ZXN0LnJlc3VsdDtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRJY3hCYWxhbmNlKGFkZHJlc3MsIGRlY2ltYWxzID0gMikge1xuICBjb25zdCBKU09OUlBDT2JqZWN0ID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgIC4uLm1ha2VKU09OUlBDUmVxdWVzdE9iaihcImljeF9nZXRCYWxhbmNlXCIpLFxuICAgIHBhcmFtczoge1xuICAgICAgYWRkcmVzczogYWRkcmVzc1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGN1c3RvbVJlcXVlc3QoU0NPUkVTLmFwaVJvdXRlcy52MywgSlNPTlJQQ09iamVjdCk7XG4gIGlmIChyZXF1ZXN0ID09IG51bGwpIHtcbiAgICAvLyBFcnJvciB3YXMgcmFpc2VkIGFuZCBoYW5kbGVkIGluc2lkZSBjdXN0b21SZXF1ZXN0LCB0aGUgcmV0dXJuZWQgdmFsdWVcbiAgICAvLyBpcyBudWxsLiBIZXJlIHdlIGNvbnRpbnVlIHJldHVybmluZyBudWxsIGFuZCBsZXQgdGhlIGNvZGUgbG9naWNcbiAgICAvLyBhZnRlciB0aGlzIGhhbmRsZSB0aGUgbnVsbCB2YWx1ZXMgaW4gdGhlIG1vc3QgYXBwcm9waWF0ZSB3YXkgZGVwZW5kaW5nXG4gICAgLy8gb24gdGhlIGNvZGUgbG9naWNcbiAgICByZXR1cm4gcmVxdWVzdDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gTnVtYmVyKGZyb21IZXhJbkxvb3AocmVxdWVzdC5yZXN1bHQpLnRvRml4ZWQoZGVjaW1hbHMpKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRUeFJlc3VsdCh0eEhhc2gpIHtcbiAgY29uc3QgSlNPTlJQQ09iamVjdCA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAuLi5tYWtlSlNPTlJQQ1JlcXVlc3RPYmooXCJpY3hfZ2V0VHJhbnNhY3Rpb25SZXN1bHRcIiksXG4gICAgcGFyYW1zOiB7XG4gICAgICB0eEhhc2g6IHR4SGFzaFxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGN1c3RvbVJlcXVlc3QoU0NPUkVTLmFwaVJvdXRlcy52MywgSlNPTlJQQ09iamVjdCk7XG4gIGlmIChyZXF1ZXN0ID09IG51bGwpIHtcbiAgICAvLyBFcnJvciB3YXMgcmFpc2VkIGFuZCBoYW5kbGVkIGluc2lkZSBjdXN0b21SZXF1ZXN0LCB0aGUgcmV0dXJuZWQgdmFsdWVcbiAgICAvLyBpcyBudWxsLiBIZXJlIHdlIGNvbnRpbnVlIHJldHVybmluZyBudWxsIGFuZCBsZXQgdGhlIGNvZGUgbG9naWNcbiAgICAvLyBhZnRlciB0aGlzIGhhbmRsZSB0aGUgbnVsbCB2YWx1ZXMgaW4gdGhlIG1vc3QgYXBwcm9waWF0ZSB3YXkgZGVwZW5kaW5nXG4gICAgLy8gb24gdGhlIGNvZGUgbG9naWNcbiAgICByZXR1cm4gcmVxdWVzdDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmVxdWVzdC5yZXN1bHQ7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0VHhCeUhhc2godHhIYXNoKSB7XG4gIGNvbnN0IEpTT05SUENPYmplY3QgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgLi4ubWFrZUpTT05SUENSZXF1ZXN0T2JqKFwiaWN4X2dldFRyYW5zYWN0aW9uQnlIYXNoXCIpLFxuICAgIHBhcmFtczoge1xuICAgICAgdHhIYXNoOiB0eEhhc2hcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBjdXN0b21SZXF1ZXN0KFNDT1JFUy5hcGlSb3V0ZXMudjMsIEpTT05SUENPYmplY3QpO1xuICBpZiAocmVxdWVzdCA9PSBudWxsKSB7XG4gICAgLy8gRXJyb3Igd2FzIHJhaXNlZCBhbmQgaGFuZGxlZCBpbnNpZGUgY3VzdG9tUmVxdWVzdCwgdGhlIHJldHVybmVkIHZhbHVlXG4gICAgLy8gaXMgbnVsbC4gSGVyZSB3ZSBjb250aW51ZSByZXR1cm5pbmcgbnVsbCBhbmQgbGV0IHRoZSBjb2RlIGxvZ2ljXG4gICAgLy8gYWZ0ZXIgdGhpcyBoYW5kbGUgdGhlIG51bGwgdmFsdWVzIGluIHRoZSBtb3N0IGFwcHJvcGlhdGUgd2F5IGRlcGVuZGluZ1xuICAgIC8vIG9uIHRoZSBjb2RlIGxvZ2ljXG4gICAgcmV0dXJuIHJlcXVlc3Q7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJlcXVlc3QucmVzdWx0O1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFByZXBzKGhlaWdodCA9IG51bGwpIHtcbiAgY29uc3QgSlNPTlJQQ09iamVjdCA9IG1ha2VJQ1hDYWxsUmVxdWVzdE9iaihcbiAgICBcImdldFBSZXBzXCIsXG4gICAgeyBzdGFydFJhbmtpbmc6IFwiMHgxXCIgfSxcbiAgICBoZWlnaHQsXG4gICAgU0NPUkVTLm1haW5uZXQuZ292ZXJuYW5jZVxuICApO1xuICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgY3VzdG9tUmVxdWVzdChTQ09SRVMuYXBpUm91dGVzLnYzLCBKU09OUlBDT2JqZWN0KTtcbiAgaWYgKHJlcXVlc3QgPT0gbnVsbCkge1xuICAgIC8vIEVycm9yIHdhcyByYWlzZWQgYW5kIGhhbmRsZWQgaW5zaWRlIGN1c3RvbVJlcXVlc3QsIHRoZSByZXR1cm5lZCB2YWx1ZVxuICAgIC8vIGlzIG51bGwuIEhlcmUgd2UgY29udGludWUgcmV0dXJuaW5nIG51bGwgYW5kIGxldCB0aGUgY29kZSBsb2dpY1xuICAgIC8vIGFmdGVyIHRoaXMgaGFuZGxlIHRoZSBudWxsIHZhbHVlcyBpbiB0aGUgbW9zdCBhcHByb3BpYXRlIHdheSBkZXBlbmRpbmdcbiAgICAvLyBvbiB0aGUgY29kZSBsb2dpY1xuICAgIHJldHVybiByZXF1ZXN0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiByZXF1ZXN0LnJlc3VsdDtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRQcmVwKHByZXBBZGRyZXNzKSB7XG4gIC8vXG4gIGNvbnN0IEpTT05SUENPYmplY3QgPSBtYWtlSUNYQ2FsbFJlcXVlc3RPYmooXG4gICAgXCJnZXRQUmVwXCIsXG4gICAgeyBhZGRyZXNzOiBwcmVwQWRkcmVzcyB9LFxuICAgIG51bGwsXG4gICAgU0NPUkVTLm1haW5uZXQuZ292ZXJuYW5jZVxuICApO1xuXG4gIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBjdXN0b21SZXF1ZXN0KFNDT1JFUy5hcGlSb3V0ZXMudjMsIEpTT05SUENPYmplY3QpO1xuICBpZiAocmVxdWVzdCA9PSBudWxsKSB7XG4gICAgLy8gRXJyb3Igd2FzIHJhaXNlZCBhbmQgaGFuZGxlZCBpbnNpZGUgY3VzdG9tUmVxdWVzdCwgdGhlIHJldHVybmVkIHZhbHVlXG4gICAgLy8gaXMgbnVsbC4gSGVyZSB3ZSBjb250aW51ZSByZXR1cm5pbmcgbnVsbCBhbmQgbGV0IHRoZSBjb2RlIGxvZ2ljXG4gICAgLy8gYWZ0ZXIgdGhpcyBoYW5kbGUgdGhlIG51bGwgdmFsdWVzIGluIHRoZSBtb3N0IGFwcHJvcGlhdGUgd2F5IGRlcGVuZGluZ1xuICAgIC8vIG9uIHRoZSBjb2RlIGxvZ2ljXG4gICAgcmV0dXJuIHJlcXVlc3Q7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJlcXVlc3QucmVzdWx0O1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlUHJlcERhdGEocHJlcCkge1xuICByZXR1cm4ge1xuICAgIC4uLnByZXAsXG4gICAgYm9uZGVkOiBwYXJzZUludChmcm9tSGV4SW5Mb29wKHByZXAuYm9uZGVkKSksXG4gICAgZGVsZWdhdGVkOiBwYXJzZUludChmcm9tSGV4SW5Mb29wKHByZXAuZGVsZWdhdGVkKSksXG4gICAgZ3JhZGU6XG4gICAgICBwcmVwLmdyYWRlID09PSBcIjB4MFwiXG4gICAgICAgID8gXCJNYWluIFByZXBcIlxuICAgICAgICA6IHByZXAuZ3JhZGUgPT09IFwiMHgxXCJcbiAgICAgICAgPyBcIlN1YiBQcmVwXCJcbiAgICAgICAgOiBcIlByZXAgY2FuZGlkYXRlXCIsXG4gICAgaXJlcDogcGFyc2VJbnQoZnJvbUhleEluTG9vcChwcmVwLmlyZXApKSxcbiAgICBpcmVwVXBkYXRlQmxvY2tIZWlnaHQ6IGhleFRvRGVjaW1hbChwcmVwLmlyZXBVcGRhdGVCbG9ja0hlaWdodCksXG4gICAgbGFzdEhlaWdodDogaGV4VG9EZWNpbWFsKHByZXAubGFzdEhlaWdodCksXG4gICAgcGVuYWx0eTpcbiAgICAgIHByZXAucGVuYWx0eSA9PT0gXCIweDBcIlxuICAgICAgICA/IFwibm9uZVwiXG4gICAgICAgIDogcHJlcC5wZW5hbHR5ID09PSBcIjB4MVwiXG4gICAgICAgID8gXCJEaXNxdWFsaWZpY2F0aW9uXCJcbiAgICAgICAgOiBwcmVwLnBlbmFsdHkgPT09IFwiMHgyXCJcbiAgICAgICAgPyBcIkxvdyBQcm9kdWN0aXZpdHlcIlxuICAgICAgICA6IHByZXAucGVuYWx0eSA9PT0gXCIweDNcIlxuICAgICAgICA/IFwiQmxvY2sgVmFsaWRhdGlvbiBGYWlsdXJlXCJcbiAgICAgICAgOiBcIlVua25vd25cIixcbiAgICBwb3dlcjogcGFyc2VJbnQoZnJvbUhleEluTG9vcChwcmVwLnBvd2VyKSksXG4gICAgc3RhdHVzOlxuICAgICAgcHJlcC5zdGF0dXMgPT09IFwiMHgwXCJcbiAgICAgICAgPyBcIkFjdGl2ZVwiXG4gICAgICAgIDogcHJlcC5zdGF0dXMgPT09IFwiMHgxXCJcbiAgICAgICAgPyBcInVucmVnaXN0ZXJlZFwiXG4gICAgICAgIDogcHJlcC5zdGF0dXMgPT09IFwiMHgyXCJcbiAgICAgICAgPyBcIkRpc3F1YWxpZmllZFwiXG4gICAgICAgIDogXCJVbmtub3duXCIsXG4gICAgdG90YWxCbG9ja3M6IGhleFRvRGVjaW1hbChwcmVwLnRvdGFsQmxvY2tzKSxcbiAgICB2YWxpZGF0ZWRCbG9ja3M6IGhleFRvRGVjaW1hbChwcmVwLnZhbGlkYXRlZEJsb2NrcylcbiAgfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0Qm9uZGVyTGlzdChwcmVwQWRkcmVzcykge1xuICAvL1xuICBjb25zdCBKU09OUlBDT2JqZWN0ID0gbWFrZUlDWENhbGxSZXF1ZXN0T2JqKFxuICAgIFwiZ2V0Qm9uZGVyTGlzdFwiLFxuICAgIHsgYWRkcmVzczogcHJlcEFkZHJlc3MgfSxcbiAgICBudWxsLFxuICAgIFNDT1JFUy5tYWlubmV0LmdvdmVybmFuY2VcbiAgKTtcblxuICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgY3VzdG9tUmVxdWVzdChTQ09SRVMuYXBpUm91dGVzLnYzLCBKU09OUlBDT2JqZWN0KTtcbiAgaWYgKHJlcXVlc3QgPT0gbnVsbCkge1xuICAgIC8vIEVycm9yIHdhcyByYWlzZWQgYW5kIGhhbmRsZWQgaW5zaWRlIGN1c3RvbVJlcXVlc3QsIHRoZSByZXR1cm5lZCB2YWx1ZVxuICAgIC8vIGlzIG51bGwuIEhlcmUgd2UgY29udGludWUgcmV0dXJuaW5nIG51bGwgYW5kIGxldCB0aGUgY29kZSBsb2dpY1xuICAgIC8vIGFmdGVyIHRoaXMgaGFuZGxlIHRoZSBudWxsIHZhbHVlcyBpbiB0aGUgbW9zdCBhcHByb3BpYXRlIHdheSBkZXBlbmRpbmdcbiAgICAvLyBvbiB0aGUgY29kZSBsb2dpY1xuICAgIHJldHVybiByZXF1ZXN0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiByZXF1ZXN0LnJlc3VsdDtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRCb25kZXJMaXN0KHByZXBBZGRyZXNzLCBhcnJheU9mQm9uZGVyQWRkcmVzc2VzKSB7XG4gIHJldHVybiBtYWtlVHhDYWxsUlBDT2JqKFxuICAgIHByZXBBZGRyZXNzLFxuICAgIFNDT1JFUy5tYWlubmV0LmdvdmVybmFuY2UsXG4gICAgXCJzZXRCb25kZXJMaXN0XCIsXG4gICAge1xuICAgICAgYm9uZGVyTGlzdDogWy4uLmFycmF5T2ZCb25kZXJBZGRyZXNzZXNdXG4gICAgfVxuICApO1xufVxuXG5mdW5jdGlvbiB2b3RlTmV0d29ya1Byb3Bvc2FsKHByb3Bvc2FsSWQsIHZvdGUsIHByZXBBZGRyZXNzKSB7XG4gIHJldHVybiBtYWtlVHhDYWxsUlBDT2JqKHByZXBBZGRyZXNzLCBTQ09SRVMubWFpbm5ldC5uZXR3b3JrLCBcInZvdGVQcm9wb3NhbFwiLCB7XG4gICAgaWQ6IHByb3Bvc2FsSWQsXG4gICAgdm90ZTogdm90ZVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYXBwcm92ZU5ldHdvcmtQcm9wb3NhbChwcm9wb3NhbElkLCBwcmVwQWRkcmVzcykge1xuICByZXR1cm4gdm90ZU5ldHdvcmtQcm9wb3NhbChwcm9wb3NhbElkLCBcIjB4MVwiLCBwcmVwQWRkcmVzcyk7XG59XG5cbmZ1bmN0aW9uIHJlamVjdE5ldHdvcmtQcm9wb3NhbChwcm9wb3NhbElkLCBwcmVwQWRkcmVzcykge1xuICByZXR1cm4gdm90ZU5ldHdvcmtQcm9wb3NhbChwcm9wb3NhbElkLCBcIjB4MFwiLCBwcmVwQWRkcmVzcyk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldExhc3RCbG9jaygpIHtcbiAgY29uc3QgSlNPTlJQQ09iamVjdCA9IEpTT04uc3RyaW5naWZ5KFxuICAgIG1ha2VKU09OUlBDUmVxdWVzdE9iaihcImljeF9nZXRMYXN0QmxvY2tcIilcbiAgKTtcblxuICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgY3VzdG9tRmV0Y2goU0NPUkVTLmFwaVJvdXRlcy52MywgSlNPTlJQQ09iamVjdCk7XG4gIGlmIChyZXF1ZXN0ID09IG51bGwpIHtcbiAgICAvLyBFcnJvciB3YXMgcmFpc2VkIGFuZCBoYW5kbGVkIGluc2lkZSBjdXN0b21SZXF1ZXN0LCB0aGUgcmV0dXJuZWQgdmFsdWVcbiAgICAvLyBpcyBudWxsLiBIZXJlIHdlIGNvbnRpbnVlIHJldHVybmluZyBudWxsIGFuZCBsZXQgdGhlIGNvZGUgbG9naWNcbiAgICAvLyBhZnRlciB0aGlzIGhhbmRsZSB0aGUgbnVsbCB2YWx1ZXMgaW4gdGhlIG1vc3QgYXBwcm9waWF0ZSB3YXkgZGVwZW5kaW5nXG4gICAgLy8gb24gdGhlIGNvZGUgbG9naWNcbiAgICByZXR1cm4gcmVxdWVzdDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmVxdWVzdC5yZXN1bHQ7XG4gIH1cbn1cblxuY29uc3QgbGliID0ge1xuICBjcHM6IHtcbiAgICBnZXRDUFNQZXJpb2RTdGF0dXMsXG4gICAgZ2V0UHJvcG9zYWxLZXlzQnlTdGF0dXMsXG4gICAgZ2V0UHJvcG9zYWxEZXRhaWxzQnlIYXNoLFxuICAgIGdldFZvdGVSZXN1bHRzQnlIYXNoLFxuICAgIGdldEFsbFByb3Bvc2Fsc1xuICB9LFxuICBnb3Zlcm5hbmNlOiB7XG4gICAgZ2V0U2NvcmVBcGksXG4gICAgZ2V0SWN4QmFsYW5jZSxcbiAgICBnZXRUeFJlc3VsdCxcbiAgICBnZXRUeEJ5SGFzaCxcbiAgICBnZXRQcmVwLFxuICAgIHBhcnNlUHJlcERhdGEsXG4gICAgZ2V0UHJlcHMsXG4gICAgZ2V0Qm9uZGVyTGlzdCxcbiAgICBzZXRCb25kZXJMaXN0LFxuICAgIGdldExhc3RCbG9jayxcbiAgICBhcHByb3ZlTmV0d29ya1Byb3Bvc2FsLFxuICAgIHJlamVjdE5ldHdvcmtQcm9wb3NhbFxuICB9LFxuICBsaWI6IHtcbiAgICBoZXhUb0RlY2ltYWwsXG4gICAgZGVjaW1hbFRvSGV4LFxuICAgIGZyb21IZXhJbkxvb3BcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbGliO1xuIiwiLy8gbGliLW5vLXNkay13ZWIudGVzdC5qc1xuLy9cbi8vIEltcG9ydHNcbi8vIHJlcXVpcmUoXCJkb3RlbnZcIikuY29uZmlnKCk7XG5jb25zdCBsaWIgPSByZXF1aXJlKFwiLi4vbGliLW5vLXNkay13ZWJcIik7XG5jb25zdCB7XG4gIC8vIGdldFByZXBzLFxuICAvLyBnZXRQcmVwLFxuICAvLyBwYXJzZVByZXBEYXRhLFxuICAvLyBnZXRCb25kZXJMaXN0LFxuICAvLyBzZXRCb25kZXJMaXN0LFxuICAvLyBnZXRTY29yZUFwaSxcbiAgLy8gZ2V0SWN4QmFsYW5jZSxcbiAgZ2V0TGFzdEJsb2NrXG4gIC8vIGFwcHJvdmVOZXR3b3JrUHJvcG9zYWwsXG4gIC8vIHJlamVjdE5ldHdvcmtQcm9wb3NhbFxufSA9IGxpYi5nb3Zlcm5hbmNlO1xuLy8gY29uc3QgeyBnZXRBbGxQcm9wb3NhbHMgfSA9IGxpYi5jcHM7XG5cbmNvbnN0IHsgY3JlYXRlVGVzdCB9ID0gcmVxdWlyZShcIi4vdXRpbHMuanNcIik7XG5jb25zdCBTQ09SRVMgPSByZXF1aXJlKFwiLi4vdXRpbHMvc2NvcmVzXCIpO1xuXG5jb25zdCBURVNUX1dBTExFVCA9IHByb2Nlc3MuZW52LlRFU1RfTk9ERV9XQUxMRVQ7XG5jb25zdCBURVNUX0NPTlRSQUNUID0gU0NPUkVTLm1haW5uZXQuZ292ZXJuYW5jZTtcblxuYXN5bmMgZnVuY3Rpb24gbGliTm9TZGtXZWJUZXN0cygpIHtcbiAgLy8gdGVzdCBvbiBHZXRQcmVwc1xuICAvLyBsZXQgcmVzdWx0ID0gYXdhaXQgY3JlYXRlVGVzdChnZXRQcmVwLCB0cnVlLCBURVNUX1dBTExFVCk7XG5cbiAgLy8gdGVzdCBvbiBwYXJzZVByZXBEYXRhXG4gIC8vIGF3YWl0IGNyZWF0ZVRlc3QocGFyc2VQcmVwRGF0YSwgdHJ1ZSwgcmVzdWx0KTtcblxuICAvLyB0ZXN0IG9uIGdldFByZXBzXG4gIC8vIGF3YWl0IGNyZWF0ZVRlc3QoZ2V0UHJlcHMpO1xuXG4gIC8vIHRlc3Qgb24gZ2V0Qm9uZGVyTGlzdFxuICAvLyBhd2FpdCBjcmVhdGVUZXN0KGdldEJvbmRlckxpc3QsIHRydWUsIFRFU1RfV0FMTEVUKTtcblxuICAvLyB0ZXN0IG9uIHNldEJvbmRlckxpc3RcbiAgLy8gbGV0IHR4T2JqID0gYXdhaXQgY3JlYXRlVGVzdChzZXRCb25kZXJMaXN0LCB0cnVlLCBURVNUX1dBTExFVCwgW1RFU1RfV0FMTEVUXSk7XG5cbiAgLy8gdGVzdCBvbiBnZXRTY29yZUFwaVxuICAvLyBhd2FpdCBjcmVhdGVUZXN0KGdldFNjb3JlQXBpLCB0cnVlLCBURVNUX0NPTlRSQUNUKTtcblxuICAvLyB0ZXN0IG9uIGdldExhc3RCbG9ja1xuICBhd2FpdCBjcmVhdGVUZXN0KGdldExhc3RCbG9jayk7XG5cbiAgLy8gdGVzdCBvbiBhcHByb3ZlTmV0d29ya1Byb3Bvc2FsXG4gIC8vIGF3YWl0IGNyZWF0ZVRlc3QoXG4gIC8vICAgYXBwcm92ZU5ldHdvcmtQcm9wb3NhbCxcbiAgLy8gICB0cnVlLFxuICAvLyAgIFwiMHhiOTAzMjM5Zjg1NDNkMDRiNWRjMWJhNjU3OTEzMmIxNDMwODdjNjhkYjFiMjE2ODc4NjQwOGZjYmNlNTY4MjM4XCIsXG4gIC8vICAgVEVTVF9XQUxMRVRcbiAgLy8gKTtcblxuICAvLyB0ZXN0IG9uIHJlamVjdE5ldHdvcmtQcm9wb3NhbFxuICAvLyBhd2FpdCBjcmVhdGVUZXN0KFxuICAvLyAgIHJlamVjdE5ldHdvcmtQcm9wb3NhbCxcbiAgLy8gICB0cnVlLFxuICAvLyAgIFwiMHhiOTAzMjM5Zjg1NDNkMDRiNWRjMWJhNjU3OTEzMmIxNDMwODdjNjhkYjFiMjE2ODc4NjQwOGZjYmNlNTY4MjM4XCIsXG4gIC8vICAgVEVTVF9XQUxMRVRcbiAgLy8gKTtcblxuICAvLyB0ZXN0IG9uIGdldEljeEJhbGFuY2VcbiAgLy8gYXdhaXQgY3JlYXRlVGVzdChnZXRJY3hCYWxhbmNlLCB0cnVlLCBURVNUX1dBTExFVCArIFwiMzNcIik7XG5cbiAgLy8gLy8gdGVzdCBvbiBnZXRBbGxQcm9wb3NhbHNcbiAgLy8gbGV0IGNwc1Byb3Bvc2FscyA9IGF3YWl0IGNyZWF0ZVRlc3QoZ2V0QWxsUHJvcG9zYWxzKTtcbiAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoY3BzUHJvcG9zYWxzKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGliTm9TZGtXZWJUZXN0cztcbiIsIi8vIHRlc3RzL3V0aWxzLmpzXG4vL1xuLy8gSW1wb3J0c1xuY29uc3QgeyBhbGVydE1zZywgd2FybmluZ01zZywgc3VjY2Vzc01zZyB9ID0gcmVxdWlyZShcIkBmaWRlbHZlL2NvbG9ybG9nXCIpO1xuXG4vLyBGdW5jdGlvbnNcbi8vXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVUZXN0KG1ldGhvZCwgcGFyYW1zID0gZmFsc2UsIC4uLnJlc3QpIHtcbiAgY29uc3QgbWV0aG9kTmFtZSA9IG1ldGhvZC5uYW1lO1xuICBjb25zdCBtZXRob2RQYXJhbXNOYW1lcyA9IGdldFBhcmFtcyhtZXRob2QpO1xuICBsZXQgbWF4Q2hhciA9IDIwMDA7XG5cbiAgbGV0IHN0cmluZ1RvUHJpbnQgPSBgIS0tLS0tLS0tLS0tLS0tLS1cXG5SdW5uaW5nIHRlc3Qgb24gZnVuY3Rpb24gPT4gJHtzdWNjZXNzTXNnKFxuICAgIG1ldGhvZC5uYW1lXG4gICl9ICR7bWV0aG9kUGFyYW1zTmFtZXMuc3RyfWA7XG5cbiAgaWYgKG1ldGhvZFBhcmFtc05hbWVzLmFyci5sZW5ndGggIT0gcmVzdC5sZW5ndGgpIHtcbiAgICBzdHJpbmdUb1ByaW50ICs9IGBcXG4ke3dhcm5pbmdNc2coXG4gICAgICBcIldBUk5JTkc6XCJcbiAgICApfSB0aGUgYW1vdW50IG9mIGFyZ3VtZW50cyBiZWluZyBwYXNzZWQgdG8gdGhlIGZ1bmN0aW9uIFwiJHttZXRob2ROYW1lfVwiIGlzIG5vdCB0aGUgc2FtZSBhbW91bnQgb2YgYXJndW1lbnRzIHRoYXQgd2VyZSBkZWZpbmVkIGR1cmluZyBmdW5jdGlvbiBkZWNsYXJhdGlvbiB1bmxlc3MgbWV0aG9kIHdhcyBkZWNsYXJlZCB1c2luZyBcIi4uLnJlc3RcIi4gQnlwYXNzaW5nIHByaW50aW5nIHRoZSBmdW5jdGlvbiBhcmd1bWVudHNgO1xuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWV0aG9kUGFyYW1zTmFtZXMuYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcGFyYW1OYW1lID0gbWV0aG9kUGFyYW1zTmFtZXMuYXJyW2ldO1xuICAgICAgbGV0IHBhcmFtVmFsdWU7XG5cbiAgICAgIGlmICh0eXBlb2YgcmVzdFtpXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHBhcmFtVmFsdWUgPSByZXN0W2ldLm5hbWU7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiByZXN0W2ldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbGV0IHRlbXBWYWx1ZSA9IEpTT04uc3RyaW5naWZ5KHJlc3RbaV0pO1xuXG4gICAgICAgICAgaWYgKHRlbXBWYWx1ZS5sZW5ndGggPiAyMDApIHtcbiAgICAgICAgICAgIHBhcmFtVmFsdWUgPSB0ZW1wVmFsdWUuc2xpY2UoMCwgMjAwKSArIFwiLi4ufVwiO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJhbVZhbHVlID0gdGVtcFZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgcGFyYW1WYWx1ZSA9IGBbT2JqZWN0LiBjb25zdHJ1Y3RvcjogJHtyZXN0W2ldLmNvbnN0cnVjdG9yLm5hbWV9XWA7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmFtVmFsdWUgPSByZXN0W2ldO1xuICAgICAgfVxuXG4gICAgICBzdHJpbmdUb1ByaW50ICs9IGBcXG4+PiAke3BhcmFtTmFtZX06ICR7cGFyYW1WYWx1ZX1gO1xuICAgIH1cbiAgfVxuXG4gIGNvbnNvbGUubG9nKHN0cmluZ1RvUHJpbnQpO1xuXG4gIGxldCByZXN1bHQ7XG4gIGlmIChwYXJhbXMpIHtcbiAgICByZXN1bHQgPSBhd2FpdCBtZXRob2QoLi4ucmVzdCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gYXdhaXQgbWV0aG9kKCk7XG4gIH1cbiAgY29uc29sZS5sb2cod2FybmluZ01zZyhcIlJlc3VsdHM6XCIpKTtcbiAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwib2JqZWN0XCIpIHtcbiAgICBjb25zdCBzdHJpbmdSZXN1bHQgPSBKU09OLnN0cmluZ2lmeShyZXN1bHQpO1xuICAgIGlmIChzdHJpbmdSZXN1bHQubGVuZ3RoID4gbWF4Q2hhcikge1xuICAgICAgY29uc29sZS5sb2coc3RyaW5nUmVzdWx0LnNsaWNlKDAsIG1heENoYXIpICsgXCIuLi59XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhzdHJpbmdSZXN1bHQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJ1blRlc3RNb2R1bGUoXG4gIG1vZHVsZSxcbiAgbW9kdWxlTmFtZSxcbiAgc2tpcCA9IGZhbHNlLFxuICBoYXNQYXJhbXMgPSBmYWxzZSxcbiAgLi4ucmVzdFxuKSB7XG4gIGlmIChza2lwKSB7XG4gICAgY29uc29sZS5sb2coXG4gICAgICBgIS0tLS0tLS0tLS0tLS0tLS0tXFxuJHt3YXJuaW5nTXNnKFxuICAgICAgICBcIlNraXBwaW5nIHRlc3RzXCJcbiAgICAgICl9IG9uIG1vZHVsZTogJHt3YXJuaW5nTXNnKG1vZHVsZU5hbWUpfWBcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgYCEtLS0tLS0tLS0tLS0tLS0tLVxcbiR7c3VjY2Vzc01zZyhcbiAgICAgICAgXCJSdW5uaW5nIHRlc3RzXCJcbiAgICAgICl9IG9uIG1vZHVsZTogJHt3YXJuaW5nTXNnKG1vZHVsZU5hbWUpfWBcbiAgICApO1xuXG4gICAgaWYgKGhhc1BhcmFtcykge1xuICAgICAgYXdhaXQgbW9kdWxlKC4uLnJlc3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhd2FpdCBtb2R1bGUoKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UGFyYW1zKG1ldGhvZCkge1xuICBjb25zdCByZWdleCA9IC9cXCgoW1xcc1xcU10qPylcXClcXHMvO1xuXG4gIGNvbnN0IHN0cjEgPSBtZXRob2QudG9TdHJpbmcoKS5tYXRjaChyZWdleClbMF07XG4gIGNvbnN0IGFycjEgPSBzdHIxXG4gICAgLnJlcGxhY2UoXCIoXCIsIFwiXCIpXG4gICAgLnJlcGxhY2UoXCIpXCIsIFwiXCIpXG4gICAgLnNwbGl0KFwiLFwiKTtcblxuICBjb25zdCBhcnIyID0gYXJyMS5tYXAoZWFjaCA9PiB7XG4gICAgcmV0dXJuIGVhY2gudHJpbSgpO1xuICB9KTtcbiAgcmV0dXJuIHsgc3RyOiBgKCR7YXJyMi5qb2luKFwiLCBcIil9KWAsIGFycjogYXJyMiB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgY3JlYXRlVGVzdCwgcnVuVGVzdE1vZHVsZSwgZ2V0UGFyYW1zIH07XG4iLCIvLyBodHRwc1JlcXVlc3QuanNcbi8vIFRoaXMgbW9kdWxlIGlzIGFuIGh0dHBzIHJlcXVlc3Qgd3JhcHBlZCBpbiBhIHByb21pc2UgZGVzaWduIHRvIGJlIHVzZWRcbi8vIHRvIGludGVyYWN0IHdpdGggdGhlIElDT04gQmxvY2tjaGFpblxuLy9cbi8vIEltcG9ydHNcbmNvbnN0IFNDT1JFUyA9IHJlcXVpcmUoXCIuL3Njb3Jlc1wiKTtcblxuYXN5bmMgZnVuY3Rpb24gY3VzdG9tRmV0Y2goXG4gIHBhdGgsXG4gIGRhdGEgPSBmYWxzZSxcbiAgaG9zdG5hbWUgPSBTQ09SRVMuYXBpSG9zdG5hbWVzLmVzcGFuaWNvbixcbiAgaHR0cHMgPSB0cnVlLFxuICBwb3J0ID0gZmFsc2Vcbikge1xuICBsZXQgcGFyYW1zID0ge1xuICAgIGhvc3RuYW1lOiBob3N0bmFtZSxcbiAgICBwYXRoOiBwYXRoLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwidGV4dC9wbGFpblwiXG4gICAgfSxcbiAgICBwb3J0OiBwb3J0ID8gXCI6XCIgKyBwb3J0ICsgXCIvXCIgOiBcIlwiLFxuICAgIHByb3RvY29sOiBodHRwcyA/IFwiaHR0cHM6Ly9cIiA6IFwiaHR0cDovL1wiXG4gIH07XG4gIGxldCByZXFQYXJhbXM7XG4gIGlmIChkYXRhKSB7XG4gICAgcmVxUGFyYW1zID0ge1xuICAgICAgaGVhZGVyczogcGFyYW1zLmhlYWRlcnMsXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgYm9keTogZGF0YVxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmVxUGFyYW1zID0ge1xuICAgICAgaGVhZGVyczogcGFyYW1zLmhlYWRlcnMsXG4gICAgICBtZXRob2Q6IFwiR0VUXCJcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgdXJsID0gcGFyYW1zLnByb3RvY29sICsgcGFyYW1zLmhvc3RuYW1lICsgcGFyYW1zLnBvcnQgKyBwYXJhbXMucGF0aDtcbiAgbGV0IHF1ZXJ5UmVzdWx0O1xuICAvLyBjb25zb2xlLmxvZyhcInVybFwiKTtcbiAgLy8gY29uc29sZS5sb2codXJsKTtcbiAgLy8gY29uc29sZS5sb2coXCJwYXJhbXNcIik7XG4gIC8vIGNvbnNvbGUubG9nKHJlcVBhcmFtcyk7XG4gIHRyeSB7XG4gICAgLy8gY3JlYXRlIHJlcXVlc3Qgb2JqZWN0XG4gICAgY29uc3QgY3VzdG9tUmVxdWVzdCA9IG5ldyBSZXF1ZXN0KHVybCwgcmVxUGFyYW1zKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcImN1c3RvbVJlcXVlc3RcIik7XG4gICAgLy8gY29uc29sZS5sb2coY3VzdG9tUmVxdWVzdCk7XG5cbiAgICAvLyBtYWtlIGZldGNoIGNhbGwgd2l0aCBjcmVhdGVkIHJlcXVlc3Qgb2JqZWN0XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChjdXN0b21SZXF1ZXN0KTtcbiAgICBjb25zdCBxdWVyeVJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcInF1ZXJ5IHJlc3VsdFwiKTtcbiAgICAvLyBjb25zb2xlLmxvZyhxdWVyeVJlc3VsdCk7XG5cbiAgICAvLyBSZXNwb25zZXMgaW4gdGhlIElDT04gbmV0d29yayBhcmUgSlNPTiBvYmplY3QsIGlmIGFuIGVycm9yIG9jY3Vyc1xuICAgIC8vIHRoZSBvYmplY3Qgd2lsbCBoYXZlIGFuICdlcnJvcicgcGFyYW0uIHdlIGNoZWNrIGZvciB0aGF0IGFuZCBpZiBpdFxuICAgIC8vIGV4aXN0cyB0aHJvdyBhbiBlcnJvclxuICAgIGlmIChxdWVyeVJlc3VsdC5lcnJvciA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gcXVlcnlSZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJSZXF1ZXN0IG1hZGUgc3VjY2Vzc2Z1bGx5IGJ1dCByZXR1cm5lZCBFcnJvciBmcm9tIHRoZSBub2RlXCJcbiAgICAgICk7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBpZiBhbiBlcnJvciBvY2N1cnMgcmV0dXJucyBudWxsIGFuZCBsb2cgdGhlIGVycm9yXG4gICAgY29uc29sZS5sb2coXCJFcnJvciBydW5uaW5nIGN1c3RvbVJlcXVlc3RcIik7XG4gICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xuICAgIGNvbnNvbGUubG9nKHF1ZXJ5UmVzdWx0KTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGN1c3RvbUZldGNoO1xuIiwiLy8gc21hcnQgY29udHJhY3QgYWRkcmVzc2VzIGluIHRoZSBJQ09OIE5ldHdvcmtcbmNvbnN0IG1haW5uZXQgPSB7XG4gIC8vXG4gIGdvdmVybmFuY2U6IFwiY3gwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwXCIsXG4gIG5ldHdvcms6IFwiY3gwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxXCIsXG4gIGNwczogXCJjeDlmNGFiNzJmODU0ZDNjY2RjNTlhYTZmMmMzZTIyMTVkZDYyZTg3OWZcIlxufTtcbmNvbnN0IHNlam9uZyA9IHtcbiAgLy9cbiAgZ292ZXJuYW5jZTogXCJjeDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBcIixcbiAgbmV0d29yazogXCJjeDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDFcIixcbiAgYm5VU0Q6IFwiY3g1ODM4Y2I1MTZkNjE1NmEwNjBmOTBlOWEzZGU5MjM4MTMzMWZmMDI0XCJcbn07XG5jb25zdCBiZXJsaW4gPSB7XG4gIC8vXG4gIGdvdmVybmFuY2U6IFwiY3gwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwXCIsXG4gIG5ldHdvcms6IFwiY3gwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxXCJcbn07XG5jb25zdCBsaXNib24gPSB7XG4gIC8vXG4gIGdvdmVybmFuY2U6IFwiY3gwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwXCIsXG4gIGdvdmVybmFuY2UyOiBcImN4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMVwiXG59O1xuXG5jb25zdCBuaWQgPSB7XG4gIG1haW5uZXQ6IDEsXG4gIGxpc2JvbjogMixcbiAgYmVybGluOiA3LFxuICBzZWpvbmc6IDgzXG59O1xuXG5jb25zdCBhcGlIb3N0bmFtZXMgPSB7XG4gIGdlb21ldHJ5OiBcImFwaS5pY29uLmdlb21ldHJ5LmlvXCIsIC8vIGRlcHJlY2F0ZWRcbiAgY3R6OiBcImN0ei5zb2xpZHdhbGxldC5pb1wiLFxuICBpY29uOiBcImFwaS5pY29uLmNvbW11bml0eVwiLFxuICBlc3Bhbmljb246IFwiYXBpLmVzcGFuaWNvbi50ZWFtXCIsXG4gIHNlam9uZzogXCJzZWpvbmcubmV0LnNvbGlkd2FsbGV0LmlvXCIsXG4gIGJlcmxpbjogXCJiZXJsaW4ubmV0LnNvbGlkd2FsbGV0LmlvXCIsXG4gIGxpc2JvbjogXCJsaXNib24ubmV0LnNvbGlkd2FsbGV0LmlvXCIsXG4gIGxvY2FsaG9zdDogXCJsb2NhbGhvc3RcIixcbiAgbm9kZTogXCI2NS4xMDguNDcuNzJcIlxufTtcblxuY29uc3QgYXBpUm91dGVzID0ge1xuICB2MzogXCIvYXBpL3YzXCIsXG4gIHByb3Bvc2FsczogXCIvYXBpL3YxL2dvdmVybmFuY2UvcHJvcG9zYWxzXCJcbn07XG5cbmNvbnN0IFNDT1JFUyA9IHtcbiAgbWFpbm5ldCxcbiAgc2Vqb25nLFxuICBiZXJsaW4sXG4gIGxpc2JvbixcbiAgbmlkLFxuICBhcGlSb3V0ZXMsXG4gIGFwaUhvc3RuYW1lc1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTQ09SRVM7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHdlYi50ZXN0LmpzXG5jb25zdCBsaWJOb1Nka1dlYlRlc3RzID0gcmVxdWlyZShcIi4vbGliLW5vLXNkay13ZWIudGVzdFwiKTtcbmNvbnN0IHsgcnVuVGVzdE1vZHVsZSB9ID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5cbmFzeW5jIGZ1bmN0aW9uIHJ1bkFsbFRlc3RzKCkge1xuICBhd2FpdCBydW5UZXN0TW9kdWxlKGxpYk5vU2RrV2ViVGVzdHMsIFwibGliLW5vLXNkay13ZWIuanNcIik7XG59XG5cbnJ1bkFsbFRlc3RzKCk7XG4iXSwibmFtZXMiOlsiY3VzdG9tRmV0Y2giLCJyZXF1aXJlIiwiU0NPUkVTIiwic3RhdHVzVHlwZSIsIm1ha2VKU09OUlBDUmVxdWVzdE9iaiIsIm1ldGhvZCIsImpzb25ycGMiLCJpZCIsIk1hdGgiLCJjZWlsIiwicmFuZG9tIiwibWFrZVR4Q2FsbFJQQ09iaiIsImZyb20iLCJ0byIsInBhcmFtc09iaiIsIm5pZCIsIm1haW5uZXQiLCJzdGVwTGltaXQiLCJ0eE9iaiIsImRlY2ltYWxUb0hleCIsIm5vbmNlIiwidmVyc2lvbiIsInRpbWVzdGFtcCIsIkRhdGUiLCJnZXRUaW1lIiwiZGF0YVR5cGUiLCJkYXRhIiwicGFyYW1zIiwibWFrZUlDWENhbGxSZXF1ZXN0T2JqIiwiaGVpZ2h0IiwiSlNPTlJQQ1JlcXVlc3RPYmoiLCJFcnJvciIsInRvU3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsImhleFRvRGVjaW1hbCIsImhleCIsInBhcnNlSW50IiwibnVtYmVyIiwiZnJvbUhleEluTG9vcCIsImxvb3BJbkhleCIsImxvb3BJbkJhc2UyIiwiZ2V0Q1BTUGVyaW9kU3RhdHVzIiwiSlNPTlJQQ09iamVjdCIsImNwcyIsImN1c3RvbVJlcXVlc3QiLCJhcGlSb3V0ZXMiLCJ2MyIsInJlcXVlc3QiLCJyZXN1bHQiLCJnZXRQcm9wb3NhbEtleXNCeVN0YXR1cyIsInN0YXR1cyIsIl9zdGF0dXMiLCJpbmNsdWRlcyIsImdldFByb3Bvc2FsRGV0YWlsc0J5SGFzaCIsImhhc2giLCJfaXBmc19rZXkiLCJnZXRWb3RlUmVzdWx0c0J5SGFzaCIsImdldEFsbFByb3Bvc2FscyIsInByb3Bvc2FscyIsIl9hY3RpdmUiLCJfY29tcGxldGVkIiwiX2Rpc3F1YWxpZmllZCIsIl9wYXVzZWQiLCJfcGVuZGluZyIsImVhY2hTdGF0dXMiLCJwcm9wb3NhbHNLZXlzIiwiZWFjaFByb3Bvc2FsIiwicHJvcG9zYWwiLCJjb21tZW50cyIsInB1c2giLCJnZXRQcm9wb3NhbHMiLCJuZXR3b3JrIiwiZ2V0U2NvcmVBcGkiLCJhZGRyZXNzIiwiZ292ZXJuYW5jZSIsImdldEljeEJhbGFuY2UiLCJkZWNpbWFscyIsIk51bWJlciIsInRvRml4ZWQiLCJnZXRUeFJlc3VsdCIsInR4SGFzaCIsImdldFR4QnlIYXNoIiwiZ2V0UHJlcHMiLCJzdGFydFJhbmtpbmciLCJnZXRQcmVwIiwicHJlcEFkZHJlc3MiLCJwYXJzZVByZXBEYXRhIiwicHJlcCIsImJvbmRlZCIsImRlbGVnYXRlZCIsImdyYWRlIiwiaXJlcCIsImlyZXBVcGRhdGVCbG9ja0hlaWdodCIsImxhc3RIZWlnaHQiLCJwZW5hbHR5IiwicG93ZXIiLCJ0b3RhbEJsb2NrcyIsInZhbGlkYXRlZEJsb2NrcyIsImdldEJvbmRlckxpc3QiLCJzZXRCb25kZXJMaXN0IiwiYXJyYXlPZkJvbmRlckFkZHJlc3NlcyIsImJvbmRlckxpc3QiLCJ2b3RlTmV0d29ya1Byb3Bvc2FsIiwicHJvcG9zYWxJZCIsInZvdGUiLCJhcHByb3ZlTmV0d29ya1Byb3Bvc2FsIiwicmVqZWN0TmV0d29ya1Byb3Bvc2FsIiwiZ2V0TGFzdEJsb2NrIiwibGliIiwiY3JlYXRlVGVzdCIsIlRFU1RfV0FMTEVUIiwicHJvY2VzcyIsImVudiIsIlRFU1RfTk9ERV9XQUxMRVQiLCJURVNUX0NPTlRSQUNUIiwibGliTm9TZGtXZWJUZXN0cyIsIm1vZHVsZSIsImV4cG9ydHMiLCJhbGVydE1zZyIsIndhcm5pbmdNc2ciLCJzdWNjZXNzTXNnIiwibWV0aG9kTmFtZSIsIm5hbWUiLCJtZXRob2RQYXJhbXNOYW1lcyIsImdldFBhcmFtcyIsIm1heENoYXIiLCJzdHJpbmdUb1ByaW50Iiwic3RyIiwicmVzdCIsImFyciIsImxlbmd0aCIsImkiLCJwYXJhbU5hbWUiLCJwYXJhbVZhbHVlIiwidGVtcFZhbHVlIiwic2xpY2UiLCJlcnIiLCJjb25zdHJ1Y3RvciIsImNvbnNvbGUiLCJsb2ciLCJzdHJpbmdSZXN1bHQiLCJydW5UZXN0TW9kdWxlIiwibW9kdWxlTmFtZSIsInNraXAiLCJoYXNQYXJhbXMiLCJyZWdleCIsInN0cjEiLCJtYXRjaCIsImFycjEiLCJyZXBsYWNlIiwic3BsaXQiLCJhcnIyIiwibWFwIiwiZWFjaCIsInRyaW0iLCJqb2luIiwicGF0aCIsImhvc3RuYW1lIiwiYXBpSG9zdG5hbWVzIiwiZXNwYW5pY29uIiwiaHR0cHMiLCJwb3J0IiwiaGVhZGVycyIsInByb3RvY29sIiwicmVxUGFyYW1zIiwiYm9keSIsInVybCIsIlJlcXVlc3QiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiIsInF1ZXJ5UmVzdWx0IiwiZXJyb3IiLCJtZXNzYWdlIiwic2Vqb25nIiwiYm5VU0QiLCJiZXJsaW4iLCJsaXNib24iLCJnb3Zlcm5hbmNlMiIsImdlb21ldHJ5IiwiY3R6IiwiaWNvbiIsImxvY2FsaG9zdCIsIm5vZGUiLCJydW5BbGxUZXN0cyJdLCJzb3VyY2VSb290IjoiIn0=