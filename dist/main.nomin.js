/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(28);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(16);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(13);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(41);

var assertThisInitialized = __webpack_require__(42);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(5);

var setPrototypeOf = __webpack_require__(13);

var isNativeFunction = __webpack_require__(43);

var construct = __webpack_require__(44);

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

module.exports = _wrapNativeSuper;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(46);

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 12 */
/***/ (function(module, exports) {

/*
  Copyright © 2018 Andrew Powell

  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of this Source Code Form.
*/

const noop = () => {};
const levels = Symbol('log-levels');
const instance = Symbol('log-instance');

module.exports = class MethodFactory {
  constructor(logger) {
    this[instance] = logger;
    this[levels] = {
      TRACE: 0,
      DEBUG: 1,
      INFO: 2,
      WARN: 3,
      ERROR: 4,
      SILENT: 5
    };
  }

  get levels() {
    return this[levels];
  }

  get logger() {
    return this[instance];
  }

  set logger(logger) {
    this[instance] = logger;
  }

  get methods() {
    return Object.keys(this.levels)
      .map((key) => key.toLowerCase())
      .filter((key) => key !== 'silent');
  }

  // eslint-disable-next-line class-methods-use-this
  bindMethod(obj, methodName) {
    const method = obj[methodName];
    if (typeof method.bind === 'function') {
      return method.bind(obj);
    }

    try {
      return Function.prototype.bind.call(method, obj);
    } catch (e) {
      // Missing bind shim or IE8 + Modernizr, fallback to wrapping
      return function result() {
        // eslint-disable-next-line prefer-rest-params
        return Function.prototype.apply.apply(method, [obj, arguments]);
      };
    }
  }

  distillLevel(level) {
    let result = level;

    if (typeof result === 'string' && typeof this.levels[result.toUpperCase()] !== 'undefined') {
      result = this.levels[result.toUpperCase()];
    }

    if (this.levelValid(result)) {
      return result;
    }

    return false;
  }

  levelValid(level) {
    if (typeof level === 'number' && level >= 0 && level <= this.levels.SILENT) {
      return true;
    }

    return false;
  }

  /**
   * Build the best logging method possible for this env
   * Wherever possible we want to bind, not wrap, to preserve stack traces.
   * Since we're targeting modern browsers, there's no need to wait for the
   * console to become available.
   */
  // eslint-disable-next-line class-methods-use-this
  make(methodName) {
    if (methodName === 'debug') {
      // eslint-disable-next-line no-param-reassign
      methodName = 'log';
    }

    /* eslint-disable no-console */
    if (typeof console[methodName] !== 'undefined') {
      return this.bindMethod(console, methodName);
    } else if (typeof console.log !== 'undefined') {
      return this.bindMethod(console, 'log');
    }

    /* eslint-enable no-console */
    return noop;
  }

  replaceMethods(logLevel) {
    const level = this.distillLevel(logLevel);

    if (level == null) {
      throw new Error(`loglevelnext: replaceMethods() called with invalid level: ${logLevel}`);
    }

    if (!this.logger || this.logger.type !== 'LogLevel') {
      throw new TypeError(
        'loglevelnext: Logger is undefined or invalid. Please specify a valid Logger instance.'
      );
    }

    this.methods.forEach((methodName) => {
      const { [methodName.toUpperCase()]: methodLevel } = this.levels;

      this.logger[methodName] = methodLevel < level ? noop : this.make(methodName);
    });

    // Define log.log as an alias for log.debug
    this.logger.log = this.logger.debug;
  }
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* MIT license */
var cssKeywords = __webpack_require__(34);

// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)

var reverseKeywords = {};
for (var key in cssKeywords) {
	if (cssKeywords.hasOwnProperty(key)) {
		reverseKeywords[cssKeywords[key]] = key;
	}
}

var convert = module.exports = {
	rgb: {channels: 3, labels: 'rgb'},
	hsl: {channels: 3, labels: 'hsl'},
	hsv: {channels: 3, labels: 'hsv'},
	hwb: {channels: 3, labels: 'hwb'},
	cmyk: {channels: 4, labels: 'cmyk'},
	xyz: {channels: 3, labels: 'xyz'},
	lab: {channels: 3, labels: 'lab'},
	lch: {channels: 3, labels: 'lch'},
	hex: {channels: 1, labels: ['hex']},
	keyword: {channels: 1, labels: ['keyword']},
	ansi16: {channels: 1, labels: ['ansi16']},
	ansi256: {channels: 1, labels: ['ansi256']},
	hcg: {channels: 3, labels: ['h', 'c', 'g']},
	apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
	gray: {channels: 1, labels: ['gray']}
};

// hide .channels and .labels properties
for (var model in convert) {
	if (convert.hasOwnProperty(model)) {
		if (!('channels' in convert[model])) {
			throw new Error('missing channels property: ' + model);
		}

		if (!('labels' in convert[model])) {
			throw new Error('missing channel labels property: ' + model);
		}

		if (convert[model].labels.length !== convert[model].channels) {
			throw new Error('channel and label counts mismatch: ' + model);
		}

		var channels = convert[model].channels;
		var labels = convert[model].labels;
		delete convert[model].channels;
		delete convert[model].labels;
		Object.defineProperty(convert[model], 'channels', {value: channels});
		Object.defineProperty(convert[model], 'labels', {value: labels});
	}
}

convert.rgb.hsl = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var min = Math.min(r, g, b);
	var max = Math.max(r, g, b);
	var delta = max - min;
	var h;
	var s;
	var l;

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	l = (min + max) / 2;

	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};

convert.rgb.hsv = function (rgb) {
	var rdif;
	var gdif;
	var bdif;
	var h;
	var s;

	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var v = Math.max(r, g, b);
	var diff = v - Math.min(r, g, b);
	var diffc = function (c) {
		return (v - c) / 6 / diff + 1 / 2;
	};

	if (diff === 0) {
		h = s = 0;
	} else {
		s = diff / v;
		rdif = diffc(r);
		gdif = diffc(g);
		bdif = diffc(b);

		if (r === v) {
			h = bdif - gdif;
		} else if (g === v) {
			h = (1 / 3) + rdif - bdif;
		} else if (b === v) {
			h = (2 / 3) + gdif - rdif;
		}
		if (h < 0) {
			h += 1;
		} else if (h > 1) {
			h -= 1;
		}
	}

	return [
		h * 360,
		s * 100,
		v * 100
	];
};

convert.rgb.hwb = function (rgb) {
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	var h = convert.rgb.hsl(rgb)[0];
	var w = 1 / 255 * Math.min(r, Math.min(g, b));

	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

	return [h, w * 100, b * 100];
};

convert.rgb.cmyk = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var c;
	var m;
	var y;
	var k;

	k = Math.min(1 - r, 1 - g, 1 - b);
	c = (1 - r - k) / (1 - k) || 0;
	m = (1 - g - k) / (1 - k) || 0;
	y = (1 - b - k) / (1 - k) || 0;

	return [c * 100, m * 100, y * 100, k * 100];
};

/**
 * See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
 * */
function comparativeDistance(x, y) {
	return (
		Math.pow(x[0] - y[0], 2) +
		Math.pow(x[1] - y[1], 2) +
		Math.pow(x[2] - y[2], 2)
	);
}

convert.rgb.keyword = function (rgb) {
	var reversed = reverseKeywords[rgb];
	if (reversed) {
		return reversed;
	}

	var currentClosestDistance = Infinity;
	var currentClosestKeyword;

	for (var keyword in cssKeywords) {
		if (cssKeywords.hasOwnProperty(keyword)) {
			var value = cssKeywords[keyword];

			// Compute comparative distance
			var distance = comparativeDistance(rgb, value);

			// Check if its less, if so set as closest
			if (distance < currentClosestDistance) {
				currentClosestDistance = distance;
				currentClosestKeyword = keyword;
			}
		}
	}

	return currentClosestKeyword;
};

convert.keyword.rgb = function (keyword) {
	return cssKeywords[keyword];
};

convert.rgb.xyz = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;

	// assume sRGB
	r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
	g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
	b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

	var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

	return [x * 100, y * 100, z * 100];
};

convert.rgb.lab = function (rgb) {
	var xyz = convert.rgb.xyz(rgb);
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.hsl.rgb = function (hsl) {
	var h = hsl[0] / 360;
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var t1;
	var t2;
	var t3;
	var rgb;
	var val;

	if (s === 0) {
		val = l * 255;
		return [val, val, val];
	}

	if (l < 0.5) {
		t2 = l * (1 + s);
	} else {
		t2 = l + s - l * s;
	}

	t1 = 2 * l - t2;

	rgb = [0, 0, 0];
	for (var i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}
		if (t3 > 1) {
			t3--;
		}

		if (6 * t3 < 1) {
			val = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			val = t2;
		} else if (3 * t3 < 2) {
			val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			val = t1;
		}

		rgb[i] = val * 255;
	}

	return rgb;
};

convert.hsl.hsv = function (hsl) {
	var h = hsl[0];
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var smin = s;
	var lmin = Math.max(l, 0.01);
	var sv;
	var v;

	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	v = (l + s) / 2;
	sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

	return [h, sv * 100, v * 100];
};

convert.hsv.rgb = function (hsv) {
	var h = hsv[0] / 60;
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var hi = Math.floor(h) % 6;

	var f = h - Math.floor(h);
	var p = 255 * v * (1 - s);
	var q = 255 * v * (1 - (s * f));
	var t = 255 * v * (1 - (s * (1 - f)));
	v *= 255;

	switch (hi) {
		case 0:
			return [v, t, p];
		case 1:
			return [q, v, p];
		case 2:
			return [p, v, t];
		case 3:
			return [p, q, v];
		case 4:
			return [t, p, v];
		case 5:
			return [v, p, q];
	}
};

convert.hsv.hsl = function (hsv) {
	var h = hsv[0];
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var vmin = Math.max(v, 0.01);
	var lmin;
	var sl;
	var l;

	l = (2 - s) * v;
	lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;

	return [h, sl * 100, l * 100];
};

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert.hwb.rgb = function (hwb) {
	var h = hwb[0] / 360;
	var wh = hwb[1] / 100;
	var bl = hwb[2] / 100;
	var ratio = wh + bl;
	var i;
	var v;
	var f;
	var n;

	// wh + bl cant be > 1
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}

	i = Math.floor(6 * h);
	v = 1 - bl;
	f = 6 * h - i;

	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}

	n = wh + f * (v - wh); // linear interpolation

	var r;
	var g;
	var b;
	switch (i) {
		default:
		case 6:
		case 0: r = v; g = n; b = wh; break;
		case 1: r = n; g = v; b = wh; break;
		case 2: r = wh; g = v; b = n; break;
		case 3: r = wh; g = n; b = v; break;
		case 4: r = n; g = wh; b = v; break;
		case 5: r = v; g = wh; b = n; break;
	}

	return [r * 255, g * 255, b * 255];
};

convert.cmyk.rgb = function (cmyk) {
	var c = cmyk[0] / 100;
	var m = cmyk[1] / 100;
	var y = cmyk[2] / 100;
	var k = cmyk[3] / 100;
	var r;
	var g;
	var b;

	r = 1 - Math.min(1, c * (1 - k) + k);
	g = 1 - Math.min(1, m * (1 - k) + k);
	b = 1 - Math.min(1, y * (1 - k) + k);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.rgb = function (xyz) {
	var x = xyz[0] / 100;
	var y = xyz[1] / 100;
	var z = xyz[2] / 100;
	var r;
	var g;
	var b;

	r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

	// assume sRGB
	r = r > 0.0031308
		? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
		: r * 12.92;

	g = g > 0.0031308
		? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
		: g * 12.92;

	b = b > 0.0031308
		? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
		: b * 12.92;

	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.lab = function (xyz) {
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.lab.xyz = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var x;
	var y;
	var z;

	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;

	var y2 = Math.pow(y, 3);
	var x2 = Math.pow(x, 3);
	var z2 = Math.pow(z, 3);
	y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

	x *= 95.047;
	y *= 100;
	z *= 108.883;

	return [x, y, z];
};

convert.lab.lch = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var hr;
	var h;
	var c;

	hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;

	if (h < 0) {
		h += 360;
	}

	c = Math.sqrt(a * a + b * b);

	return [l, c, h];
};

convert.lch.lab = function (lch) {
	var l = lch[0];
	var c = lch[1];
	var h = lch[2];
	var a;
	var b;
	var hr;

	hr = h / 360 * 2 * Math.PI;
	a = c * Math.cos(hr);
	b = c * Math.sin(hr);

	return [l, a, b];
};

convert.rgb.ansi16 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];
	var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2]; // hsv -> ansi16 optimization

	value = Math.round(value / 50);

	if (value === 0) {
		return 30;
	}

	var ansi = 30
		+ ((Math.round(b / 255) << 2)
		| (Math.round(g / 255) << 1)
		| Math.round(r / 255));

	if (value === 2) {
		ansi += 60;
	}

	return ansi;
};

convert.hsv.ansi16 = function (args) {
	// optimization here; we already know the value and don't need to get
	// it converted for us.
	return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};

convert.rgb.ansi256 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];

	// we use the extended greyscale palette here, with the exception of
	// black and white. normal palette only has 4 greyscale shades.
	if (r === g && g === b) {
		if (r < 8) {
			return 16;
		}

		if (r > 248) {
			return 231;
		}

		return Math.round(((r - 8) / 247) * 24) + 232;
	}

	var ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);

	return ansi;
};

convert.ansi16.rgb = function (args) {
	var color = args % 10;

	// handle greyscale
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}

		color = color / 10.5 * 255;

		return [color, color, color];
	}

	var mult = (~~(args > 50) + 1) * 0.5;
	var r = ((color & 1) * mult) * 255;
	var g = (((color >> 1) & 1) * mult) * 255;
	var b = (((color >> 2) & 1) * mult) * 255;

	return [r, g, b];
};

convert.ansi256.rgb = function (args) {
	// handle greyscale
	if (args >= 232) {
		var c = (args - 232) * 10 + 8;
		return [c, c, c];
	}

	args -= 16;

	var rem;
	var r = Math.floor(args / 36) / 5 * 255;
	var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	var b = (rem % 6) / 5 * 255;

	return [r, g, b];
};

convert.rgb.hex = function (args) {
	var integer = ((Math.round(args[0]) & 0xFF) << 16)
		+ ((Math.round(args[1]) & 0xFF) << 8)
		+ (Math.round(args[2]) & 0xFF);

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.hex.rgb = function (args) {
	var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
	if (!match) {
		return [0, 0, 0];
	}

	var colorString = match[0];

	if (match[0].length === 3) {
		colorString = colorString.split('').map(function (char) {
			return char + char;
		}).join('');
	}

	var integer = parseInt(colorString, 16);
	var r = (integer >> 16) & 0xFF;
	var g = (integer >> 8) & 0xFF;
	var b = integer & 0xFF;

	return [r, g, b];
};

convert.rgb.hcg = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var max = Math.max(Math.max(r, g), b);
	var min = Math.min(Math.min(r, g), b);
	var chroma = (max - min);
	var grayscale;
	var hue;

	if (chroma < 1) {
		grayscale = min / (1 - chroma);
	} else {
		grayscale = 0;
	}

	if (chroma <= 0) {
		hue = 0;
	} else
	if (max === r) {
		hue = ((g - b) / chroma) % 6;
	} else
	if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma + 4;
	}

	hue /= 6;
	hue %= 1;

	return [hue * 360, chroma * 100, grayscale * 100];
};

convert.hsl.hcg = function (hsl) {
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var c = 1;
	var f = 0;

	if (l < 0.5) {
		c = 2.0 * s * l;
	} else {
		c = 2.0 * s * (1.0 - l);
	}

	if (c < 1.0) {
		f = (l - 0.5 * c) / (1.0 - c);
	}

	return [hsl[0], c * 100, f * 100];
};

convert.hsv.hcg = function (hsv) {
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;

	var c = s * v;
	var f = 0;

	if (c < 1.0) {
		f = (v - c) / (1 - c);
	}

	return [hsv[0], c * 100, f * 100];
};

convert.hcg.rgb = function (hcg) {
	var h = hcg[0] / 360;
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	if (c === 0.0) {
		return [g * 255, g * 255, g * 255];
	}

	var pure = [0, 0, 0];
	var hi = (h % 1) * 6;
	var v = hi % 1;
	var w = 1 - v;
	var mg = 0;

	switch (Math.floor(hi)) {
		case 0:
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
		case 1:
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
		case 2:
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;
		case 3:
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
		case 4:
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
		default:
			pure[0] = 1; pure[1] = 0; pure[2] = w;
	}

	mg = (1.0 - c) * g;

	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255
	];
};

convert.hcg.hsv = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var v = c + g * (1.0 - c);
	var f = 0;

	if (v > 0.0) {
		f = c / v;
	}

	return [hcg[0], f * 100, v * 100];
};

convert.hcg.hsl = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var l = g * (1.0 - c) + 0.5 * c;
	var s = 0;

	if (l > 0.0 && l < 0.5) {
		s = c / (2 * l);
	} else
	if (l >= 0.5 && l < 1.0) {
		s = c / (2 * (1 - l));
	}

	return [hcg[0], s * 100, l * 100];
};

convert.hcg.hwb = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	var v = c + g * (1.0 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};

convert.hwb.hcg = function (hwb) {
	var w = hwb[1] / 100;
	var b = hwb[2] / 100;
	var v = 1 - b;
	var c = v - w;
	var g = 0;

	if (c < 1) {
		g = (v - c) / (1 - c);
	}

	return [hwb[0], c * 100, g * 100];
};

convert.apple.rgb = function (apple) {
	return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
};

convert.rgb.apple = function (rgb) {
	return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
};

convert.gray.rgb = function (args) {
	return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};

convert.gray.hsl = convert.gray.hsv = function (args) {
	return [0, 0, args[0]];
};

convert.gray.hwb = function (gray) {
	return [0, 100, gray[0]];
};

convert.gray.cmyk = function (gray) {
	return [0, 0, 0, gray[0]];
};

convert.gray.lab = function (gray) {
	return [gray[0], 0, 0];
};

convert.gray.hex = function (gray) {
	var val = Math.round(gray[0] / 100 * 255) & 0xFF;
	var integer = (val << 16) + (val << 8) + val;

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.rgb.gray = function (rgb) {
	var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
	return [val / 255 * 100];
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/*
  Copyright © 2018 Andrew Powell

  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of this Source Code Form.
*/

const MethodFactory = __webpack_require__(12);

const defaults = {
  level: (opts) => `[${opts.level}]`,
  name: (opts) => opts.logger.name,
  template: '{{time}} {{level}} ',
  time: () => new Date().toTimeString().split(' ')[0]
};

module.exports = class PrefixFactory extends MethodFactory {
  constructor(logger, options) {
    super(logger);
    this.options = Object.assign({}, defaults, options);
  }

  interpolate(level) {
    return this.options.template.replace(/{{([^{}]*)}}/g, (stache, prop) => {
      const fn = this.options[prop];

      if (fn) {
        return fn({ level, logger: this.logger });
      }

      return stache;
    });
  }

  make(methodName) {
    const og = super.make(methodName);

    return (...args) => {
      const output = this.interpolate(methodName);
      const [first] = args;

      if (typeof first === 'string') {
        // eslint-disable-next-line no-param-reassign
        args[0] = output + first;
      } else {
        args.unshift(output);
      }

      og(...args);
    };
  }
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(6);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(6);
var normalizeHeaderName = __webpack_require__(51);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(20);
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(20);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(6);
var settle = __webpack_require__(52);
var buildURL = __webpack_require__(17);
var buildFullPath = __webpack_require__(54);
var parseHeaders = __webpack_require__(57);
var isURLSameOrigin = __webpack_require__(58);
var createError = __webpack_require__(21);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(59);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(53);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(6);

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
  var defaultToConfig2Keys = [
    'baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress',
    'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath'
  ];

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys);

  var otherKeys = Object
    .keys(config2)
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/*
  Copyright © 2018 Andrew Powell

  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of this Source Code Form.
*/
const chalk = __webpack_require__(29);
const loglevel = __webpack_require__(38);
const nanoid = __webpack_require__(40);

const defaults = {
  level: 'info',
  name: '<webpack-log>',
  timestamp: false,
  unique: true
};
const symbols = { ok: '⬡', whoops: '⬢' };
const colors = {
  trace: 'cyan',
  debug: 'magenta',
  info: 'blue',
  warn: 'yellow',
  error: 'red'
};

const getLogger = (opts) => {
  const options = Object.assign({}, defaults, opts);
  const prefix = {
    level: ({ level }) => {
      const color = colors[level];
      const symbol = ['error', 'warn'].includes(level) ? symbols.whoops : symbols.ok;
      return chalk[color](`${symbol} ${options.name}: `);
    },
    template: '{{level}}'
  };

  if (options.timestamp) {
    prefix.template = `[{{time}}] ${prefix.template}`;
  }

  options.id = options.name + (options.unique ? nanoid() : '');
  options.prefix = prefix;

  const log = loglevel.create(options);

  return log;
};

/* istanbul ignore next */
Object.defineProperty(getLogger, 'colors', {
  get() {
    const message =
      'The colors property in webpack-log exports is deprecated. Please install and use `chalk` or a similar ANSI color module.';
    process.emitWarning(message, { type: 'DeprecationWarning' });
    return chalk;
  }
});

// NOTE: Undocumented and unsupported. For testing only. Do not use.
getLogger.delete = (id) => {
  delete loglevel.loggers[id];
};

module.exports = getLogger;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __webpack_require__(10);
/**
 * Attach the interceptor to the Axios instance.
 * @param instance The optional Axios instance on which to attach the
 * interceptor.
 * @returns The id of the interceptor attached to the axios instance.
 */
function attach(instance) {
    instance = instance || axios_1.default;
    return instance.interceptors.response.use(onFulfilled, onError);
}
exports.attach = attach;
/**
 * Eject the Axios interceptor that is providing retry capabilities.
 * @param interceptorId The interceptorId provided in the config.
 * @param instance The axios instance using this interceptor.
 */
function detach(interceptorId, instance) {
    instance = instance || axios_1.default;
    instance.interceptors.response.eject(interceptorId);
}
exports.detach = detach;
function onFulfilled(res) {
    return res;
}
/**
 * Some versions of axios are converting arrays into objects during retries.
 * This will attempt to convert an object with the following structure into
 * an array, where the keys correspond to the indices:
 * {
 *   0: {
 *     // some property
 *   },
 *   1: {
 *     // another
 *   }
 * }
 * @param obj The object that (may) have integers that correspond to an index
 * @returns An array with the pucked values
 */
function normalizeArray(obj) {
    const arr = [];
    if (!obj) {
        return undefined;
    }
    if (Array.isArray(obj)) {
        return obj;
    }
    if (typeof obj === 'object') {
        Object.keys(obj).forEach(key => {
            if (typeof key === 'number') {
                arr[key] = obj[key];
            }
        });
    }
    return arr;
}
function onError(err) {
    if (axios_1.default.isCancel(err)) {
        return Promise.reject(err);
    }
    const config = getConfig(err) || {};
    config.currentRetryAttempt = config.currentRetryAttempt || 0;
    config.retry =
        config.retry === undefined || config.retry === null ? 3 : config.retry;
    config.retryDelay = config.retryDelay || 100;
    config.instance = config.instance || axios_1.default;
    config.backoffType = config.backoffType || 'exponential';
    config.httpMethodsToRetry = normalizeArray(config.httpMethodsToRetry) || [
        'GET',
        'HEAD',
        'PUT',
        'OPTIONS',
        'DELETE',
    ];
    config.noResponseRetries =
        config.noResponseRetries === undefined || config.noResponseRetries === null
            ? 2
            : config.noResponseRetries;
    // If this wasn't in the list of status codes where we want
    // to automatically retry, return.
    const retryRanges = [
        // https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
        // 1xx - Retry (Informational, request still processing)
        // 2xx - Do not retry (Success)
        // 3xx - Do not retry (Redirect)
        // 4xx - Do not retry (Client errors)
        // 429 - Retry ("Too Many Requests")
        // 5xx - Retry (Server errors)
        [100, 199],
        [429, 429],
        [500, 599],
    ];
    config.statusCodesToRetry =
        normalizeArray(config.statusCodesToRetry) || retryRanges;
    // Put the config back into the err
    err.config.raxConfig = { ...config };
    // Determine if we should retry the request
    const shouldRetryFn = config.shouldRetry || shouldRetryRequest;
    if (!shouldRetryFn(err)) {
        return Promise.reject(err);
    }
    // Create a promise that invokes the retry after the backOffDelay
    const onBackoffPromise = new Promise(resolve => {
        // Calculate time to wait with exponential backoff.
        // Formula: (2^c - 1 / 2) * 1000
        let delay;
        if (config.backoffType === 'linear') {
            delay = config.currentRetryAttempt * 1000;
        }
        else if (config.backoffType === 'static') {
            delay = config.retryDelay;
        }
        else {
            delay = ((Math.pow(2, config.currentRetryAttempt) - 1) / 2) * 1000;
        }
        // We're going to retry!  Incremenent the counter.
        err.config.raxConfig.currentRetryAttempt += 1;
        setTimeout(resolve, delay);
    });
    // Notify the user if they added an `onRetryAttempt` handler
    const onRetryAttemptPromise = config.onRetryAttempt
        ? Promise.resolve(config.onRetryAttempt(err))
        : Promise.resolve();
    // Return the promise in which recalls axios to retry the request
    return Promise.resolve()
        .then(() => onBackoffPromise)
        .then(() => onRetryAttemptPromise)
        .then(() => config.instance.request(err.config));
}
/**
 * Determine based on config if we should retry the request.
 * @param err The AxiosError passed to the interceptor.
 */
function shouldRetryRequest(err) {
    const config = err.config.raxConfig;
    // If there's no config, or retries are disabled, return.
    if (!config || config.retry === 0) {
        return false;
    }
    // Check if this error has no response (ETIMEDOUT, ENOTFOUND, etc)
    if (!err.response &&
        (config.currentRetryAttempt || 0) >= config.noResponseRetries) {
        return false;
    }
    // Only retry with configured HttpMethods.
    if (!err.config.method ||
        config.httpMethodsToRetry.indexOf(err.config.method.toUpperCase()) < 0) {
        return false;
    }
    // If this wasn't in the list of status codes where we want
    // to automatically retry, return.
    if (err.response && err.response.status) {
        let isInRange = false;
        for (const [min, max] of config.statusCodesToRetry) {
            const status = err.response.status;
            if (status >= min && status <= max) {
                isInRange = true;
                break;
            }
        }
        if (!isInRange) {
            return false;
        }
    }
    // If we are out of retry attempts, return
    config.currentRetryAttempt = config.currentRetryAttempt || 0;
    if (config.currentRetryAttempt >= config.retry) {
        return false;
    }
    return true;
}
/**
 * Acquire the raxConfig object from an AxiosError if available.
 * @param err The Axios error with a config object.
 */
function getConfig(err) {
    if (err && err.config) {
        return err.config.raxConfig;
    }
    return;
}
exports.getConfig = getConfig;
//# sourceMappingURL=index.js.map

/***/ }),
/* 26 */,
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(62);


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
const escapeStringRegexp = __webpack_require__(30);
const ansiStyles = __webpack_require__(31);
const stdoutColor = __webpack_require__(36).stdout;

const template = __webpack_require__(37);

const isSimpleWindowsTerm = process.platform === 'win32' && !(process.env.TERM || '').toLowerCase().startsWith('xterm');

// `supportsColor.level` → `ansiStyles.color[name]` mapping
const levelMapping = ['ansi', 'ansi', 'ansi256', 'ansi16m'];

// `color-convert` models to exclude from the Chalk API due to conflicts and such
const skipModels = new Set(['gray']);

const styles = Object.create(null);

function applyOptions(obj, options) {
	options = options || {};

	// Detect level if not set manually
	const scLevel = stdoutColor ? stdoutColor.level : 0;
	obj.level = options.level === undefined ? scLevel : options.level;
	obj.enabled = 'enabled' in options ? options.enabled : obj.level > 0;
}

function Chalk(options) {
	// We check for this.template here since calling `chalk.constructor()`
	// by itself will have a `this` of a previously constructed chalk object
	if (!this || !(this instanceof Chalk) || this.template) {
		const chalk = {};
		applyOptions(chalk, options);

		chalk.template = function () {
			const args = [].slice.call(arguments);
			return chalkTag.apply(null, [chalk.template].concat(args));
		};

		Object.setPrototypeOf(chalk, Chalk.prototype);
		Object.setPrototypeOf(chalk.template, chalk);

		chalk.template.constructor = Chalk;

		return chalk.template;
	}

	applyOptions(this, options);
}

// Use bright blue on Windows as the normal blue color is illegible
if (isSimpleWindowsTerm) {
	ansiStyles.blue.open = '\u001B[94m';
}

for (const key of Object.keys(ansiStyles)) {
	ansiStyles[key].closeRe = new RegExp(escapeStringRegexp(ansiStyles[key].close), 'g');

	styles[key] = {
		get() {
			const codes = ansiStyles[key];
			return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, key);
		}
	};
}

styles.visible = {
	get() {
		return build.call(this, this._styles || [], true, 'visible');
	}
};

ansiStyles.color.closeRe = new RegExp(escapeStringRegexp(ansiStyles.color.close), 'g');
for (const model of Object.keys(ansiStyles.color.ansi)) {
	if (skipModels.has(model)) {
		continue;
	}

	styles[model] = {
		get() {
			const level = this.level;
			return function () {
				const open = ansiStyles.color[levelMapping[level]][model].apply(null, arguments);
				const codes = {
					open,
					close: ansiStyles.color.close,
					closeRe: ansiStyles.color.closeRe
				};
				return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, model);
			};
		}
	};
}

ansiStyles.bgColor.closeRe = new RegExp(escapeStringRegexp(ansiStyles.bgColor.close), 'g');
for (const model of Object.keys(ansiStyles.bgColor.ansi)) {
	if (skipModels.has(model)) {
		continue;
	}

	const bgModel = 'bg' + model[0].toUpperCase() + model.slice(1);
	styles[bgModel] = {
		get() {
			const level = this.level;
			return function () {
				const open = ansiStyles.bgColor[levelMapping[level]][model].apply(null, arguments);
				const codes = {
					open,
					close: ansiStyles.bgColor.close,
					closeRe: ansiStyles.bgColor.closeRe
				};
				return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, model);
			};
		}
	};
}

const proto = Object.defineProperties(() => {}, styles);

function build(_styles, _empty, key) {
	const builder = function () {
		return applyStyle.apply(builder, arguments);
	};

	builder._styles = _styles;
	builder._empty = _empty;

	const self = this;

	Object.defineProperty(builder, 'level', {
		enumerable: true,
		get() {
			return self.level;
		},
		set(level) {
			self.level = level;
		}
	});

	Object.defineProperty(builder, 'enabled', {
		enumerable: true,
		get() {
			return self.enabled;
		},
		set(enabled) {
			self.enabled = enabled;
		}
	});

	// See below for fix regarding invisible grey/dim combination on Windows
	builder.hasGrey = this.hasGrey || key === 'gray' || key === 'grey';

	// `__proto__` is used because we must return a function, but there is
	// no way to create a function with a different prototype
	builder.__proto__ = proto; // eslint-disable-line no-proto

	return builder;
}

function applyStyle() {
	// Support varags, but simply cast to string in case there's only one arg
	const args = arguments;
	const argsLen = args.length;
	let str = String(arguments[0]);

	if (argsLen === 0) {
		return '';
	}

	if (argsLen > 1) {
		// Don't slice `arguments`, it prevents V8 optimizations
		for (let a = 1; a < argsLen; a++) {
			str += ' ' + args[a];
		}
	}

	if (!this.enabled || this.level <= 0 || !str) {
		return this._empty ? '' : str;
	}

	// Turns out that on Windows dimmed gray text becomes invisible in cmd.exe,
	// see https://github.com/chalk/chalk/issues/58
	// If we're on Windows and we're dealing with a gray color, temporarily make 'dim' a noop.
	const originalDim = ansiStyles.dim.open;
	if (isSimpleWindowsTerm && this.hasGrey) {
		ansiStyles.dim.open = '';
	}

	for (const code of this._styles.slice().reverse()) {
		// Replace any instances already present with a re-opening code
		// otherwise only the part of the string until said closing code
		// will be colored, and the rest will simply be 'plain'.
		str = code.open + str.replace(code.closeRe, code.open) + code.close;

		// Close the styling before a linebreak and reopen
		// after next line to fix a bleed issue on macOS
		// https://github.com/chalk/chalk/pull/92
		str = str.replace(/\r?\n/g, `${code.close}$&${code.open}`);
	}

	// Reset the original `dim` if we changed it to work around the Windows dimmed gray issue
	ansiStyles.dim.open = originalDim;

	return str;
}

function chalkTag(chalk, strings) {
	if (!Array.isArray(strings)) {
		// If chalk() was called by itself or with a string,
		// return the string itself as a string.
		return [].slice.call(arguments, 1).join(' ');
	}

	const args = [].slice.call(arguments, 2);
	const parts = [strings.raw[0]];

	for (let i = 1; i < strings.length; i++) {
		parts.push(String(args[i - 1]).replace(/[{}\\]/g, '\\$&'));
		parts.push(String(strings.raw[i]));
	}

	return template(chalk, parts.join(''));
}

Object.defineProperties(Chalk.prototype, styles);

module.exports = Chalk(); // eslint-disable-line new-cap
module.exports.supportsColor = stdoutColor;
module.exports.default = module.exports; // For TypeScript

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;

module.exports = function (str) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	return str.replace(matchOperatorsRe, '\\$&');
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
const colorConvert = __webpack_require__(33);

const wrapAnsi16 = (fn, offset) => function () {
	const code = fn.apply(colorConvert, arguments);
	return `\u001B[${code + offset}m`;
};

const wrapAnsi256 = (fn, offset) => function () {
	const code = fn.apply(colorConvert, arguments);
	return `\u001B[${38 + offset};5;${code}m`;
};

const wrapAnsi16m = (fn, offset) => function () {
	const rgb = fn.apply(colorConvert, arguments);
	return `\u001B[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
};

function assembleStyles() {
	const codes = new Map();
	const styles = {
		modifier: {
			reset: [0, 0],
			// 21 isn't widely supported and 22 does the same thing
			bold: [1, 22],
			dim: [2, 22],
			italic: [3, 23],
			underline: [4, 24],
			inverse: [7, 27],
			hidden: [8, 28],
			strikethrough: [9, 29]
		},
		color: {
			black: [30, 39],
			red: [31, 39],
			green: [32, 39],
			yellow: [33, 39],
			blue: [34, 39],
			magenta: [35, 39],
			cyan: [36, 39],
			white: [37, 39],
			gray: [90, 39],

			// Bright color
			redBright: [91, 39],
			greenBright: [92, 39],
			yellowBright: [93, 39],
			blueBright: [94, 39],
			magentaBright: [95, 39],
			cyanBright: [96, 39],
			whiteBright: [97, 39]
		},
		bgColor: {
			bgBlack: [40, 49],
			bgRed: [41, 49],
			bgGreen: [42, 49],
			bgYellow: [43, 49],
			bgBlue: [44, 49],
			bgMagenta: [45, 49],
			bgCyan: [46, 49],
			bgWhite: [47, 49],

			// Bright color
			bgBlackBright: [100, 49],
			bgRedBright: [101, 49],
			bgGreenBright: [102, 49],
			bgYellowBright: [103, 49],
			bgBlueBright: [104, 49],
			bgMagentaBright: [105, 49],
			bgCyanBright: [106, 49],
			bgWhiteBright: [107, 49]
		}
	};

	// Fix humans
	styles.color.grey = styles.color.gray;

	for (const groupName of Object.keys(styles)) {
		const group = styles[groupName];

		for (const styleName of Object.keys(group)) {
			const style = group[styleName];

			styles[styleName] = {
				open: `\u001B[${style[0]}m`,
				close: `\u001B[${style[1]}m`
			};

			group[styleName] = styles[styleName];

			codes.set(style[0], style[1]);
		}

		Object.defineProperty(styles, groupName, {
			value: group,
			enumerable: false
		});

		Object.defineProperty(styles, 'codes', {
			value: codes,
			enumerable: false
		});
	}

	const ansi2ansi = n => n;
	const rgb2rgb = (r, g, b) => [r, g, b];

	styles.color.close = '\u001B[39m';
	styles.bgColor.close = '\u001B[49m';

	styles.color.ansi = {
		ansi: wrapAnsi16(ansi2ansi, 0)
	};
	styles.color.ansi256 = {
		ansi256: wrapAnsi256(ansi2ansi, 0)
	};
	styles.color.ansi16m = {
		rgb: wrapAnsi16m(rgb2rgb, 0)
	};

	styles.bgColor.ansi = {
		ansi: wrapAnsi16(ansi2ansi, 10)
	};
	styles.bgColor.ansi256 = {
		ansi256: wrapAnsi256(ansi2ansi, 10)
	};
	styles.bgColor.ansi16m = {
		rgb: wrapAnsi16m(rgb2rgb, 10)
	};

	for (let key of Object.keys(colorConvert)) {
		if (typeof colorConvert[key] !== 'object') {
			continue;
		}

		const suite = colorConvert[key];

		if (key === 'ansi16') {
			key = 'ansi';
		}

		if ('ansi16' in suite) {
			styles.color.ansi[key] = wrapAnsi16(suite.ansi16, 0);
			styles.bgColor.ansi[key] = wrapAnsi16(suite.ansi16, 10);
		}

		if ('ansi256' in suite) {
			styles.color.ansi256[key] = wrapAnsi256(suite.ansi256, 0);
			styles.bgColor.ansi256[key] = wrapAnsi256(suite.ansi256, 10);
		}

		if ('rgb' in suite) {
			styles.color.ansi16m[key] = wrapAnsi16m(suite.rgb, 0);
			styles.bgColor.ansi16m[key] = wrapAnsi16m(suite.rgb, 10);
		}
	}

	return styles;
}

// Make the export immutable
Object.defineProperty(module, 'exports', {
	enumerable: true,
	get: assembleStyles
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(32)(module)))

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var conversions = __webpack_require__(14);
var route = __webpack_require__(35);

var convert = {};

var models = Object.keys(conversions);

function wrapRaw(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		return fn(args);
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

function wrapRounded(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		var result = fn(args);

		// we're assuming the result is an array here.
		// see notice in conversions.js; don't use box types
		// in conversion functions.
		if (typeof result === 'object') {
			for (var len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}

		return result;
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

models.forEach(function (fromModel) {
	convert[fromModel] = {};

	Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
	Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});

	var routes = route(fromModel);
	var routeModels = Object.keys(routes);

	routeModels.forEach(function (toModel) {
		var fn = routes[toModel];

		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	});
});

module.exports = convert;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var conversions = __webpack_require__(14);

/*
	this function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/

function buildGraph() {
	var graph = {};
	// https://jsperf.com/object-keys-vs-for-in-with-closure/3
	var models = Object.keys(conversions);

	for (var len = models.length, i = 0; i < len; i++) {
		graph[models[i]] = {
			// http://jsperf.com/1-vs-infinity
			// micro-opt, but this is simple.
			distance: -1,
			parent: null
		};
	}

	return graph;
}

// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
	var graph = buildGraph();
	var queue = [fromModel]; // unshift -> queue -> pop

	graph[fromModel].distance = 0;

	while (queue.length) {
		var current = queue.pop();
		var adjacents = Object.keys(conversions[current]);

		for (var len = adjacents.length, i = 0; i < len; i++) {
			var adjacent = adjacents[i];
			var node = graph[adjacent];

			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}

	return graph;
}

function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}

function wrapConversion(toModel, graph) {
	var path = [graph[toModel].parent, toModel];
	var fn = conversions[graph[toModel].parent][toModel];

	var cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}

	fn.conversion = path;
	return fn;
}

module.exports = function (fromModel) {
	var graph = deriveBFS(fromModel);
	var conversion = {};

	var models = Object.keys(graph);
	for (var len = models.length, i = 0; i < len; i++) {
		var toModel = models[i];
		var node = graph[toModel];

		if (node.parent === null) {
			// no possible conversion, or this node is the source model.
			continue;
		}

		conversion[toModel] = wrapConversion(toModel, graph);
	}

	return conversion;
};



/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = {
	stdout: false,
	stderr: false
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const TEMPLATE_REGEX = /(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
const STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
const STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
const ESCAPE_REGEX = /\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi;

const ESCAPES = new Map([
	['n', '\n'],
	['r', '\r'],
	['t', '\t'],
	['b', '\b'],
	['f', '\f'],
	['v', '\v'],
	['0', '\0'],
	['\\', '\\'],
	['e', '\u001B'],
	['a', '\u0007']
]);

function unescape(c) {
	if ((c[0] === 'u' && c.length === 5) || (c[0] === 'x' && c.length === 3)) {
		return String.fromCharCode(parseInt(c.slice(1), 16));
	}

	return ESCAPES.get(c) || c;
}

function parseArguments(name, args) {
	const results = [];
	const chunks = args.trim().split(/\s*,\s*/g);
	let matches;

	for (const chunk of chunks) {
		if (!isNaN(chunk)) {
			results.push(Number(chunk));
		} else if ((matches = chunk.match(STRING_REGEX))) {
			results.push(matches[2].replace(ESCAPE_REGEX, (m, escape, chr) => escape ? unescape(escape) : chr));
		} else {
			throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
		}
	}

	return results;
}

function parseStyle(style) {
	STYLE_REGEX.lastIndex = 0;

	const results = [];
	let matches;

	while ((matches = STYLE_REGEX.exec(style)) !== null) {
		const name = matches[1];

		if (matches[2]) {
			const args = parseArguments(name, matches[2]);
			results.push([name].concat(args));
		} else {
			results.push([name]);
		}
	}

	return results;
}

function buildStyle(chalk, styles) {
	const enabled = {};

	for (const layer of styles) {
		for (const style of layer.styles) {
			enabled[style[0]] = layer.inverse ? null : style.slice(1);
		}
	}

	let current = chalk;
	for (const styleName of Object.keys(enabled)) {
		if (Array.isArray(enabled[styleName])) {
			if (!(styleName in current)) {
				throw new Error(`Unknown Chalk style: ${styleName}`);
			}

			if (enabled[styleName].length > 0) {
				current = current[styleName].apply(current, enabled[styleName]);
			} else {
				current = current[styleName];
			}
		}
	}

	return current;
}

module.exports = (chalk, tmp) => {
	const styles = [];
	const chunks = [];
	let chunk = [];

	// eslint-disable-next-line max-params
	tmp.replace(TEMPLATE_REGEX, (m, escapeChar, inverse, style, close, chr) => {
		if (escapeChar) {
			chunk.push(unescape(escapeChar));
		} else if (style) {
			const str = chunk.join('');
			chunk = [];
			chunks.push(styles.length === 0 ? str : buildStyle(chalk, styles)(str));
			styles.push({inverse, styles: parseStyle(style)});
		} else if (close) {
			if (styles.length === 0) {
				throw new Error('Found extraneous } in Chalk template literal');
			}

			chunks.push(buildStyle(chalk, styles)(chunk.join('')));
			chunk = [];
			styles.pop();
		} else {
			chunk.push(chr);
		}
	});

	chunks.push(chunk.join(''));

	if (styles.length > 0) {
		const errMsg = `Chalk template literal is missing ${styles.length} closing bracket${styles.length === 1 ? '' : 's'} (\`}\`)`;
		throw new Error(errMsg);
	}

	return chunks.join('');
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

/*
  Copyright © 2018 Andrew Powell

  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of this Source Code Form.
*/

const LogLevel = __webpack_require__(39);
const MethodFactory = __webpack_require__(12);
const PrefixFactory = __webpack_require__(15);

const factories = Symbol('log-factories');

class DefaultLogger extends LogLevel {
  constructor() {
    super({ name: 'default' });

    this.cache = { default: this };
    this[factories] = { MethodFactory, PrefixFactory };
  }

  get factories() {
    return this[factories];
  }

  get loggers() {
    return this.cache;
  }

  create(opts) {
    let options;

    if (typeof opts === 'string') {
      options = { name: opts };
    } else {
      options = Object.assign({}, opts);
    }

    if (!options.id) {
      options.id = options.name;
    }

    const { name, id } = options;
    const defaults = { level: this.level };

    if (typeof name !== 'string' || !name || !name.length) {
      throw new TypeError('You must supply a name when creating a logger.');
    }

    let logger = this.cache[id];
    if (!logger) {
      logger = new LogLevel(Object.assign({}, defaults, options));
      this.cache[id] = logger;
    }
    return logger;
  }
}

module.exports = new DefaultLogger();

// TypeScript fix
module.exports.default = module.exports;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

/*
  Copyright © 2018 Andrew Powell

  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of this Source Code Form.
*/

const PrefixFactory = __webpack_require__(15);

const MethodFactory = __webpack_require__(12);

const defaults = {
  factory: null,
  level: 'warn',
  name: +new Date(),
  prefix: null
};

module.exports = class LogLevel {
  constructor(options) {
    // implement for some _very_ loose type checking. avoids getting into a
    // circular require between MethodFactory and LogLevel
    this.type = 'LogLevel';
    this.options = Object.assign({}, defaults, options);
    this.methodFactory = options.factory;

    if (!this.methodFactory) {
      const factory = options.prefix
        ? new PrefixFactory(this, options.prefix)
        : new MethodFactory(this);
      this.methodFactory = factory;
    }

    if (!this.methodFactory.logger) {
      this.methodFactory.logger = this;
    }

    this.name = options.name || '<unknown>';

    // this.level is a setter, do this after setting up the factory
    this.level = this.options.level;
  }

  get factory() {
    return this.methodFactory;
  }

  set factory(factory) {
    // eslint-disable-next-line no-param-reassign
    factory.logger = this;
    this.methodFactory = factory;
    this.methodFactory.replaceMethods(this.level);
  }

  disable() {
    this.level = this.levels.SILENT;
  }

  enable() {
    this.level = this.levels.TRACE;
  }

  get level() {
    return this.currentLevel;
  }

  set level(logLevel) {
    const level = this.methodFactory.distillLevel(logLevel);

    if (level === false || level == null) {
      throw new RangeError(`loglevelnext: setLevel() called with invalid level: ${logLevel}`);
    }

    this.currentLevel = level;
    this.methodFactory.replaceMethods(level);

    if (typeof console === 'undefined' && level < this.levels.SILENT) {
      // eslint-disable-next-line no-console
      console.warn('loglevelnext: console is undefined. The log will produce no output.');
    }
  }

  get levels() {
    // eslint-disable-line class-methods-use-this
    return this.methodFactory.levels;
  }
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// This file replaces `index.js` in bundlers like webpack or Rollup,
// according to `browser` config in `package.json`.

if (false) {}

var crypto = self.crypto || self.msCrypto

// This alphabet uses a-z A-Z 0-9 _- symbols.
// Symbols are generated for smaller size.
// -_zyxwvutsrqponmlkjihgfedcba9876543210ZYXWVUTSRQPONMLKJIHGFEDCBA
var url = '-_'
// Loop from 36 to 0 (from z to a and 9 to 0 in Base36).
var i = 36
while (i--) {
  // 36 is radix. Number.prototype.toString(36) returns number
  // in Base36 representation. Base36 is like hex, but it uses 0–9 and a-z.
  url += i.toString(36)
}
// Loop from 36 to 10 (from Z to A in Base36).
i = 36
while (i-- - 10) {
  url += i.toString(36).toUpperCase()
}

module.exports = function (size) {
  var id = ''
  var bytes = crypto.getRandomValues(new Uint8Array(size || 21))
  i = size || 21

  // Compact alternative for `for (var i = 0; i < size; i++)`
  while (i--) {
    // We can’t use bytes bigger than the alphabet. 63 is 00111111 bitmask.
    // This mask reduces random byte 0-255 to 0-63 values.
    // There is no need in `|| ''` and `* 1.6` hacks in here,
    // because bitmask trim bytes exact to alphabet size.
    id += url[bytes[i] & 63]
  }
  return id
}


/***/ }),
/* 41 */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 43 */
/***/ (function(module, exports) {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

module.exports = _isNativeFunction;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(13);

var isNativeReflectConstruct = __webpack_require__(45);

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),
/* 45 */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(6);
var bind = __webpack_require__(16);
var Axios = __webpack_require__(47);
var mergeConfig = __webpack_require__(22);
var defaults = __webpack_require__(19);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(23);
axios.CancelToken = __webpack_require__(60);
axios.isCancel = __webpack_require__(18);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(61);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(6);
var buildURL = __webpack_require__(17);
var InterceptorManager = __webpack_require__(48);
var dispatchRequest = __webpack_require__(49);
var mergeConfig = __webpack_require__(22);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(6);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(6);
var transformData = __webpack_require__(50);
var isCancel = __webpack_require__(18);
var defaults = __webpack_require__(19);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(6);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(6);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(21);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(55);
var combineURLs = __webpack_require__(56);

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(6);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(6);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(6);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(23);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(3);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(2);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(4);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(0);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// CONCATENATED MODULE: ./src/core/model/gdpr.js



var gdpr_Gdpr = /*#__PURE__*/function () {
  function Gdpr() {
    classCallCheck_default()(this, Gdpr);

    defineProperty_default()(this, "_consented", 3);

    defineProperty_default()(this, "_vendorListVersion", void 0);
  }

  createClass_default()(Gdpr, [{
    key: "gdprDetails",
    value: function gdprDetails() {
      var CONSENT_STATUS = {
        "NO_CONSENT": 0,
        "CONSENT": 1,
        "SOME_CONSENT": 2,
        "UNDEFINED": 3
      };
      var vendorData, vendorLists, consentData;

      if (window.__cmp) {
        var isConsentUndefined = function isConsentUndefined() {
          return purpose_consents.length === 0 && vendor_consents.length === 0;
        };

        var isConsentGiven = function isConsentGiven() {
          var notAcceptedAnyPurpose = purpose_consents.every(function (purpose) {
            return purpose === false;
          });
          var notAcceptedAnyVendor = vendor_consents.every(function (vendor) {
            return vendor === false;
          });
          var consentNotGiven = notAcceptedAnyPurpose || notAcceptedAnyVendor;
          return !consentNotGiven;
        };

        var getConsentValue = function getConsentValue() {
          var consent;

          if (isConsentUndefined()) {
            consent = CONSENT_STATUS.UNDEFINED;
          } else if (isConsentGiven()) {
            consent = CONSENT_STATUS.CONSENT;
          } else {
            consent = CONSENT_STATUS.NO_CONSENT;
          }

          return consent;
        };

        window.__cmp('getVendorConsents', null, function (result) {
          vendorData = result;
        });

        window.__cmp('getVendorList', null, function (result) {
          vendorLists = result;
        });

        window.__cmp('getConsentData', null, function (result) {
          consentData = result;
        });

        var purpose_consents_aux = vendorData && vendorData.purposeConsents || [];
        var vendor_consents_aux = vendorData && vendorData.vendorConsents || [];
        var purpose_consents = Object.keys(purpose_consents_aux).map(function (key) {
          return purpose_consents_aux[key];
        });
        var vendor_consents = Object.keys(vendor_consents_aux).map(function (key) {
          return vendor_consents_aux[key];
        });
        return {
          getConsentValue: getConsentValue(),
          vendorList: vendorLists,
          consentData: consentData,
          vendorData: vendorData
        };
      } else {
        return {
          getConsentValue: CONSENT_STATUS.UNDEFINED
        };
      }
    }
  }, {
    key: "consented",
    get: function get() {
      return this._consented;
    },
    set: function set(value) {
      this._consented = value;
    }
  }, {
    key: "vendorListVersion",
    get: function get() {
      return this._vendorListVersion;
    },
    set: function set(value) {
      this._vendorListVersion = value;
    }
  }]);

  return Gdpr;
}();
// CONCATENATED MODULE: ./src/core/model/session.js


var session_Session = function Session(id) {
  classCallCheck_default()(this, Session);

  defineProperty_default()(this, "id", null);

  defineProperty_default()(this, "host", null);

  defineProperty_default()(this, "path", null);

  defineProperty_default()(this, "referrer", null);

  defineProperty_default()(this, "start", null);

  defineProperty_default()(this, "finish", null);

  this.host = window.location.hostname;
  this.path = window.location.pathname;
  this.referrer = document.referrer;
  this.start = new Date().getTime();
  this.finish = null;
  this.id = id;
};
// CONCATENATED MODULE: ./src/core/model/user.js



var user_User = function User(device, browserLanguage) {
  classCallCheck_default()(this, User);

  defineProperty_default()(this, "device", null);

  defineProperty_default()(this, "browserLanguage", null);

  defineProperty_default()(this, "gdpr", null);

  this.device = device;
  this.browserLanguage = browserLanguage;
  this.gdpr = new gdpr_Gdpr();
};
// CONCATENATED MODULE: ./src/core/model/index.js



// EXTERNAL MODULE: (webpack)-log/lib/index.js
var lib = __webpack_require__(24);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./src/core/utils.js



var utils_Utils = /*#__PURE__*/function () {
  function Utils() {
    classCallCheck_default()(this, Utils);
  }

  createClass_default()(Utils, null, [{
    key: "getDeviceType",
    value: function getDeviceType() {
      if (/bot|googlebot|crawler|spider|robot|crawling|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex/i.test(navigator.userAgent.toLowerCase())) {
        return 'bot';
      }

      if (/(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/i.test(navigator.userAgent)) {
        return 'tablet';
      }

      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(navigator.userAgent.substr(0, 4))) {
        return 'mobile';
      }

      return 'desktop';
    }
  }, {
    key: "getBrowserLanguage",
    value: function getBrowserLanguage() {
      try {
        return [].concat(navigator.languages, navigator.language, navigator.userLanguage, navigator.browserLanguage, navigator.systemLanguage).filter(Boolean)[0].split('-')[0];
      } catch (e) {
        return 'unknown';
      }
    }
  }]);

  return Utils;
}();
var LOGGER = lib_default()({
  name: 'Leya'
});
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/rng.js
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
// find the complete implementation of crypto (msCrypto) on IE11.
var getRandomValues = typeof crypto != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto != 'undefined' && typeof msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto);
var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

function rng() {
  if (!getRandomValues) {
    throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
  }

  return getRandomValues(rnds8);
}
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/bytesToUuid.js
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];

for (var bytesToUuid_i = 0; bytesToUuid_i < 256; ++bytesToUuid_i) {
  byteToHex[bytesToUuid_i] = (bytesToUuid_i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex; // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4

  return [bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]]].join('');
}

/* harmony default export */ var esm_browser_bytesToUuid = (bytesToUuid);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/v4.js



function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof options == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }

  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || esm_browser_bytesToUuid(rnds);
}

/* harmony default export */ var esm_browser_v4 = (v4);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(7);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(8);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(5);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/wrapNativeSuper.js
var wrapNativeSuper = __webpack_require__(9);
var wrapNativeSuper_default = /*#__PURE__*/__webpack_require__.n(wrapNativeSuper);

// CONCATENATED MODULE: ./src/core/errors/sessionopen_error.js






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var sessionopen_error_SessionOpenError = /*#__PURE__*/function (_Error) {
  inherits_default()(SessionOpenError, _Error);

  var _super = _createSuper(SessionOpenError);

  function SessionOpenError() {
    classCallCheck_default()(this, SessionOpenError);

    return _super.apply(this, arguments);
  }

  return SessionOpenError;
}( /*#__PURE__*/wrapNativeSuper_default()(Error));
// CONCATENATED MODULE: ./src/core/errors/nosession_error.js






function nosession_error_createSuper(Derived) { var hasNativeReflectConstruct = nosession_error_isNativeReflectConstruct(); return function () { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function nosession_error_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var nosession_error_NoSessionError = /*#__PURE__*/function (_Error) {
  inherits_default()(NoSessionError, _Error);

  var _super = nosession_error_createSuper(NoSessionError);

  function NoSessionError() {
    classCallCheck_default()(this, NoSessionError);

    return _super.apply(this, arguments);
  }

  return NoSessionError;
}( /*#__PURE__*/wrapNativeSuper_default()(Error));
// CONCATENATED MODULE: ./src/core/core.js













var core_Core = /*#__PURE__*/function () {
  function Core() {
    classCallCheck_default()(this, Core);

    defineProperty_default()(this, "session", null);

    defineProperty_default()(this, "user", null);

    defineProperty_default()(this, "tags", null);

    defineProperty_default()(this, "key", null);

    //set default user details
    this.user = new user_User(utils_Utils.getDeviceType(), utils_Utils.getBrowserLanguage());
    this.tags = [];
  }

  createClass_default()(Core, [{
    key: "setKey",
    value: function () {
      var _setKey = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(key) {
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.key = key;

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setKey(_x) {
        return _setKey.apply(this, arguments);
      }

      return setKey;
    }()
  }, {
    key: "getKey",
    value: function () {
      var _getKey = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", this.key);

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getKey() {
        return _getKey.apply(this, arguments);
      }

      return getKey;
    }()
  }, {
    key: "startSession",
    value: function () {
      var _startSession = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee3() {
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(this.session === null)) {
                  _context3.next = 5;
                  break;
                }

                this.session = new session_Session(esm_browser_v4());
                LOGGER.debug("Started new session " + this.session.id);
                _context3.next = 10;
                break;

              case 5:
                if (!(this.session.finish === null)) {
                  _context3.next = 8;
                  break;
                }

                LOGGER.error("A session is already open, close it before starting a new one");
                throw new sessionopen_error_SessionOpenError();

              case 8:
                //previous session is closed, we can open a new one
                this.session = new session_Session(esm_browser_v4());
                LOGGER.debug("Started new session " + this.session.id);

              case 10:
                return _context3.abrupt("return", this.getSession());

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function startSession() {
        return _startSession.apply(this, arguments);
      }

      return startSession;
    }()
  }, {
    key: "finishSession",
    value: function () {
      var _finishSession = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee4() {
        return regenerator_default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!(this.session !== null)) {
                  _context4.next = 10;
                  break;
                }

                if (!(this.session.finish === null)) {
                  _context4.next = 7;
                  break;
                }

                LOGGER.debug("Ending session " + this.session.id);
                this.session.finish = new Date().getTime(); //record session

                return _context4.abrupt("return", Leya.Events.recordSession());

              case 7:
                LOGGER.warn("Session already closed at " + this.session.finish);

              case 8:
                _context4.next = 12;
                break;

              case 10:
                LOGGER.error("No session, start one first");
                throw new nosession_error_NoSessionError();

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function finishSession() {
        return _finishSession.apply(this, arguments);
      }

      return finishSession;
    }()
  }, {
    key: "setTags",
    value: function () {
      var _setTags = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee5(tags) {
        return regenerator_default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (tags) {
                  _context5.next = 2;
                  break;
                }

                throw new Error("array argument is required");

              case 2:
                if (!Array.isArray(tags)) {
                  _context5.next = 13;
                  break;
                }

                this.validateTags(tags);

                if (!(tags.length % 2 === 0)) {
                  _context5.next = 10;
                  break;
                }

                tags = tags.map(function (x) {
                  return x.toLowerCase();
                });
                this.tags = tags;
                return _context5.abrupt("return", this.getTags());

              case 10:
                throw new Error("array argument requires pair size, two elements for each key, value pair: ['key1', 'value1', 'key2', 'value2']");

              case 11:
                _context5.next = 14;
                break;

              case 13:
                throw new Error("array argument is required");

              case 14:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function setTags(_x2) {
        return _setTags.apply(this, arguments);
      }

      return setTags;
    }()
  }, {
    key: "getTags",
    value: function () {
      var _getTags = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee6() {
        return regenerator_default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", this.tags);

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getTags() {
        return _getTags.apply(this, arguments);
      }

      return getTags;
    }()
  }, {
    key: "getSession",
    value: function () {
      var _getSession = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee7() {
        return regenerator_default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", Object.assign({}, this.session));

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function getSession() {
        return _getSession.apply(this, arguments);
      }

      return getSession;
    }()
  }, {
    key: "getUser",
    value: function () {
      var _getUser = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee8() {
        return regenerator_default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", Object.assign({}, this.user));

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function getUser() {
        return _getUser.apply(this, arguments);
      }

      return getUser;
    }()
  }, {
    key: "setUserGdprConsent",
    value: function () {
      var _setUserGdprConsent = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee9(c) {
        return regenerator_default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                this.user.gdpr.consented = c;
                return _context9.abrupt("return", this.getSession());

              case 2:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function setUserGdprConsent(_x3) {
        return _setUserGdprConsent.apply(this, arguments);
      }

      return setUserGdprConsent;
    }()
  }, {
    key: "setGdprVendorListVersion",
    value: function () {
      var _setGdprVendorListVersion = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee10(v) {
        return regenerator_default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                this.user.gdpr.vendorListVersion = v;
                return _context10.abrupt("return", this.getSession());

              case 2:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function setGdprVendorListVersion(_x4) {
        return _setGdprVendorListVersion.apply(this, arguments);
      }

      return setGdprVendorListVersion;
    }()
  }, {
    key: "isSessionOpen",
    value: function () {
      var _isSessionOpen = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee11() {
        return regenerator_default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                return _context11.abrupt("return", this.session !== null && this.session.finish === null);

              case 1:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function isSessionOpen() {
        return _isSessionOpen.apply(this, arguments);
      }

      return isSessionOpen;
    }()
  }, {
    key: "addTags",
    value: function () {
      var _addTags = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee12(ntags) {
        return regenerator_default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                if (ntags) {
                  _context12.next = 2;
                  break;
                }

                throw new Error("array argument is required");

              case 2:
                if (!Array.isArray(ntags)) {
                  _context12.next = 12;
                  break;
                }

                this.validateTags(ntags);

                if (!(ntags.length % 2 === 0)) {
                  _context12.next = 9;
                  break;
                }

                ntags = ntags.map(function (x) {
                  return x.toLowerCase();
                });
                ntags.forEach(function (val, i) {
                  if (i % 2 === 0) {
                    var ci = this.tags.indexOf(val);

                    if (ci >= 0) {
                      //update key
                      this.tags[ci + 1] = ntags[i + 1];
                    } else {
                      //add key val
                      this.tags = this.tags.concat(ntags);
                    }
                  }
                }.bind(this));
                _context12.next = 10;
                break;

              case 9:
                throw new Error("array argument requires pair size, two elements for each key, value pair: ['key1', 'value1', 'key2', 'value2']");

              case 10:
                _context12.next = 13;
                break;

              case 12:
                throw new Error("array argument is required");

              case 13:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function addTags(_x5) {
        return _addTags.apply(this, arguments);
      }

      return addTags;
    }()
  }, {
    key: "removeTags",
    value: function () {
      var _removeTags = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee13(rt) {
        return regenerator_default.a.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                if (rt) {
                  _context13.next = 2;
                  break;
                }

                throw new Error("argument is required");

              case 2:
                rt = [].concat(rt);
                rt.forEach(function (t) {
                  var ci = this.tags.indexOf(t);

                  if (ci >= 0 && ci % 2 === 0) {
                    this.tags.splice(ci, 2);
                  }
                }.bind(this));

              case 4:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function removeTags(_x6) {
        return _removeTags.apply(this, arguments);
      }

      return removeTags;
    }()
  }, {
    key: "validateTags",
    value: function validateTags(tags) {
      var _this = this;

      tags = [].concat(tags);
      tags.forEach(function (e) {
        _this.isValidTag(e);
      });
    }
  }, {
    key: "isValidTag",
    value: function isValidTag(e) {
      if (!(typeof e === 'number' || typeof e === 'string')) {
        throw new Error("invalid tag '" + e + "'");
      }
    }
  }]);

  return Core;
}();


// CONCATENATED MODULE: ./src/events/prebid/model/bidder.js



var bidder_Bidder = /*#__PURE__*/function () {
  function Bidder() {
    classCallCheck_default()(this, Bidder);

    defineProperty_default()(this, "_id", null);

    defineProperty_default()(this, "_bat", null);

    defineProperty_default()(this, "_status", null);

    defineProperty_default()(this, "_cpm", null);

    defineProperty_default()(this, "_start", null);

    defineProperty_default()(this, "_finish", null);
  }

  createClass_default()(Bidder, [{
    key: "id",
    get: function get() {
      return this._id;
    },
    set: function set(value) {
      this._id = value;
    }
  }, {
    key: "bat",
    get: function get() {
      return this._bat;
    },
    set: function set(value) {
      this._bat = value;
    }
  }, {
    key: "status",
    get: function get() {
      return this._status;
    },
    set: function set(value) {
      this._status = value;
    }
  }, {
    key: "cpm",
    get: function get() {
      return this._cpm;
    },
    set: function set(value) {
      this._cpm = value;
    }
  }, {
    key: "start",
    get: function get() {
      return this._start;
    },
    set: function set(value) {
      this._start = value;
    }
  }, {
    key: "finish",
    get: function get() {
      return this._finish;
    },
    set: function set(value) {
      this._finish = value;
    }
  }], [{
    key: "from",
    value: function from(ade) {
      var b = new Bidder();
      b.id = ade.bidder;
      b.bat = ade.isAfterTimeout;
      b.status = ade.status;
      b.cpm = ade.cpm;
      b.start = ade.start;
      b.finish = ade.finish;
      return b;
    }
  }]);

  return Bidder;
}();
// CONCATENATED MODULE: ./src/events/prebid/model/adunit.js




var adunit_AdUnit = /*#__PURE__*/function () {
  function AdUnit() {
    classCallCheck_default()(this, AdUnit);

    defineProperty_default()(this, "_id", null);

    defineProperty_default()(this, "_status", null);

    defineProperty_default()(this, "_timeout", null);

    defineProperty_default()(this, "_start", null);

    defineProperty_default()(this, "_finish", null);

    defineProperty_default()(this, "_sizes", []);

    defineProperty_default()(this, "_bidders", []);
  }

  createClass_default()(AdUnit, [{
    key: "id",
    get: function get() {
      return this._id;
    },
    set: function set(value) {
      this._id = value;
    }
  }, {
    key: "status",
    get: function get() {
      return this._status;
    },
    set: function set(value) {
      this._status = value;
    }
  }, {
    key: "timeout",
    get: function get() {
      return this._timeout;
    },
    set: function set(value) {
      this._timeout = value;
    }
  }, {
    key: "start",
    get: function get() {
      return this._start;
    },
    set: function set(value) {
      this._start = value;
    }
  }, {
    key: "finish",
    get: function get() {
      return this._finish;
    },
    set: function set(value) {
      this._finish = value;
    }
  }, {
    key: "bidders",
    get: function get() {
      return this._bidders;
    },
    set: function set(value) {
      this._bidders = value;
    }
  }, {
    key: "sizes",
    get: function get() {
      return this._sizes;
    },
    set: function set(value) {
      this._sizes = value;
    }
  }], [{
    key: "from",
    value: function from(adu) {
      var ad = new AdUnit();
      ad.id = adu.adUnitPath || adu.adUnit;
      ad.status = adu.status;
      ad.timeout = adu.timeout;
      ad.start = adu.start;
      ad.finish = adu.finish;
      ad.sizes = adu.adUnitSizes || [];
      var bidders = [];
      Object.keys(adu.bidders).forEach(function (b) {
        return bidders.push(bidder_Bidder.from(adu.bidders[b]));
      });
      ad.bidders = bidders;
      return ad;
    }
  }]);

  return AdUnit;
}();
// CONCATENATED MODULE: ./src/events/prebid/model/events/auction.js




var auction_Auction = /*#__PURE__*/function () {
  function Auction() {
    classCallCheck_default()(this, Auction);

    defineProperty_default()(this, "_session", null);

    defineProperty_default()(this, "_host", null);

    defineProperty_default()(this, "_path", null);

    defineProperty_default()(this, "_referrer", null);

    defineProperty_default()(this, "_device", null);

    defineProperty_default()(this, "_gdprc", null);

    defineProperty_default()(this, "_tags", []);

    defineProperty_default()(this, "_id", null);

    defineProperty_default()(this, "_timeout", null);

    defineProperty_default()(this, "_start", null);

    defineProperty_default()(this, "_finish", null);

    defineProperty_default()(this, "_adunits", []);
  }

  createClass_default()(Auction, [{
    key: "session",
    get: function get() {
      return this._session;
    },
    set: function set(value) {
      this._session = value;
    }
  }, {
    key: "host",
    get: function get() {
      return this._host;
    },
    set: function set(value) {
      this._host = value;
    }
  }, {
    key: "path",
    get: function get() {
      return this._path;
    },
    set: function set(value) {
      this._path = value;
    }
  }, {
    key: "referrer",
    get: function get() {
      return this._referrer;
    },
    set: function set(value) {
      this._referrer = value;
    }
  }, {
    key: "device",
    get: function get() {
      return this._device;
    },
    set: function set(value) {
      this._device = value;
    }
  }, {
    key: "gdprc",
    get: function get() {
      return this._gdprc;
    },
    set: function set(value) {
      this._gdprc = value;
    }
  }, {
    key: "tags",
    get: function get() {
      return this._tags;
    },
    set: function set(value) {
      this._tags = value;
    }
  }, {
    key: "id",
    get: function get() {
      return this._id;
    },
    set: function set(value) {
      this._id = value;
    }
  }, {
    key: "timeout",
    get: function get() {
      return this._timeout;
    },
    set: function set(value) {
      this._timeout = value;
    }
  }, {
    key: "start",
    get: function get() {
      return this._start;
    },
    set: function set(value) {
      this._start = value;
    }
  }, {
    key: "finish",
    get: function get() {
      return this._finish;
    },
    set: function set(value) {
      this._finish = value;
    }
  }, {
    key: "adunits",
    get: function get() {
      return this._adunits;
    },
    set: function set(value) {
      this._adunits = value;
    }
  }], [{
    key: "from",
    value: function from(ae) {
      var a = new Auction();
      a.id = ae.id;
      a.timeout = ae.timeout;
      a.start = ae.start;
      a.finish = ae.finish;

      if (ae.gdpr_consent) {
        a.gdprc = ae.gdpr_consent;
      }

      var adunits = [];
      Object.keys(ae.adUnits).forEach(function (au) {
        return adunits.push(adunit_AdUnit.from(ae.adUnits[au]));
      });
      a.adunits = adunits;
      return a;
    }
  }]);

  return Auction;
}();
// CONCATENATED MODULE: ./src/events/prebid/model/events/impression.js




var impression_Impression = /*#__PURE__*/function () {
  function Impression() {
    classCallCheck_default()(this, Impression);

    defineProperty_default()(this, "_session", null);

    defineProperty_default()(this, "_host", null);

    defineProperty_default()(this, "_path", null);

    defineProperty_default()(this, "_referrer", null);

    defineProperty_default()(this, "_device", null);

    defineProperty_default()(this, "_gdprc", null);

    defineProperty_default()(this, "_tags", []);

    defineProperty_default()(this, "_ad_unit", null);

    defineProperty_default()(this, "_winner", null);

    defineProperty_default()(this, "_cpm", null);

    defineProperty_default()(this, "_media_type", null);

    defineProperty_default()(this, "_size", null);

    defineProperty_default()(this, "_auction_start", null);

    defineProperty_default()(this, "_auction_finish", null);

    defineProperty_default()(this, "_timeout", null);

    defineProperty_default()(this, "_auction_id", null);

    defineProperty_default()(this, "_status", null);

    defineProperty_default()(this, "_bidders", []);
  }

  createClass_default()(Impression, [{
    key: "session",
    get: function get() {
      return this._session;
    },
    set: function set(value) {
      this._session = value;
    }
  }, {
    key: "host",
    get: function get() {
      return this._host;
    },
    set: function set(value) {
      this._host = value;
    }
  }, {
    key: "path",
    get: function get() {
      return this._path;
    },
    set: function set(value) {
      this._path = value;
    }
  }, {
    key: "referrer",
    get: function get() {
      return this._referrer;
    },
    set: function set(value) {
      this._referrer = value;
    }
  }, {
    key: "device",
    get: function get() {
      return this._device;
    },
    set: function set(value) {
      this._device = value;
    }
  }, {
    key: "gdprc",
    get: function get() {
      return this._gdprc;
    },
    set: function set(value) {
      this._gdprc = value;
    }
  }, {
    key: "tags",
    get: function get() {
      return this._tags;
    },
    set: function set(value) {
      this._tags = value;
    }
  }, {
    key: "ad_unit",
    get: function get() {
      return this._ad_unit;
    },
    set: function set(value) {
      this._ad_unit = value;
    }
  }, {
    key: "winner",
    get: function get() {
      return this._winner;
    },
    set: function set(value) {
      this._winner = value;
    }
  }, {
    key: "cpm",
    get: function get() {
      return this._cpm;
    },
    set: function set(value) {
      this._cpm = value;
    }
  }, {
    key: "media_type",
    get: function get() {
      return this._media_type;
    },
    set: function set(value) {
      this._media_type = value;
    }
  }, {
    key: "size",
    get: function get() {
      return this._size;
    },
    set: function set(value) {
      this._size = value;
    }
  }, {
    key: "auction_start",
    get: function get() {
      return this._auction_start;
    },
    set: function set(value) {
      this._auction_start = value;
    }
  }, {
    key: "auction_finish",
    get: function get() {
      return this._auction_finish;
    },
    set: function set(value) {
      this._auction_finish = value;
    }
  }, {
    key: "timeout",
    get: function get() {
      return this._timeout;
    },
    set: function set(value) {
      this._timeout = value;
    }
  }, {
    key: "auction_id",
    get: function get() {
      return this._auction_id;
    },
    set: function set(value) {
      this._auction_id = value;
    }
  }, {
    key: "status",
    get: function get() {
      return this._status;
    },
    set: function set(value) {
      this._status = value;
    }
  }, {
    key: "bidders",
    get: function get() {
      return this._bidders;
    },
    set: function set(value) {
      this._bidders = value;
    }
  }], [{
    key: "from",
    value: function from(impression) {
      var i = new Impression();
      i.ad_unit = impression.adUnitPath || impression.adUnit;
      i.winner = impression.bidder;
      i.cpm = impression.cpm;
      i.media_type = impression.mediaType;

      if (impression.size && impression.size.width && impression.size.height) {
        i.size = impression.size.width + 'x' + impression.size.height;
      }

      i.auction_id = impression.auction.id;
      i.gdprc = impression.auction.gdpr_consent;
      i.auction_start = impression.auction.start;
      i.auction_finish = impression.auction.finish;
      i.status = impression.auction.status;
      i.timeout = impression.auction.timeout;
      var bidders = [];
      Object.keys(impression.auction.bidders).forEach(function (b) {
        return bidders.push(bidder_Bidder.from(impression.auction.bidders[b]));
      });
      i.bidders = bidders;
      return i;
    }
  }]);

  return Impression;
}();
// CONCATENATED MODULE: ./src/events/prebid/model/events/bat.js




var bat_BidAfterTimeout = /*#__PURE__*/function () {
  function BidAfterTimeout() {
    classCallCheck_default()(this, BidAfterTimeout);

    defineProperty_default()(this, "_session", null);

    defineProperty_default()(this, "_host", null);

    defineProperty_default()(this, "_path", null);

    defineProperty_default()(this, "_referrer", null);

    defineProperty_default()(this, "_device", null);

    defineProperty_default()(this, "_gdprc", null);

    defineProperty_default()(this, "_tags", []);

    defineProperty_default()(this, "_ad_unit", null);

    defineProperty_default()(this, "_cpm", null);

    defineProperty_default()(this, "_bidder", null);

    defineProperty_default()(this, "_bidder_start", null);

    defineProperty_default()(this, "_bidder_finish", null);

    defineProperty_default()(this, "_media_type", null);

    defineProperty_default()(this, "_size", null);

    defineProperty_default()(this, "_auction_id", null);

    defineProperty_default()(this, "_auction_start", null);

    defineProperty_default()(this, "_auction_finish", null);

    defineProperty_default()(this, "_status", null);

    defineProperty_default()(this, "_timeout", null);

    defineProperty_default()(this, "_bidders", []);
  }

  createClass_default()(BidAfterTimeout, [{
    key: "session",
    get: function get() {
      return this._session;
    },
    set: function set(value) {
      this._session = value;
    }
  }, {
    key: "host",
    get: function get() {
      return this._host;
    },
    set: function set(value) {
      this._host = value;
    }
  }, {
    key: "path",
    get: function get() {
      return this._path;
    },
    set: function set(value) {
      this._path = value;
    }
  }, {
    key: "referrer",
    get: function get() {
      return this._referrer;
    },
    set: function set(value) {
      this._referrer = value;
    }
  }, {
    key: "device",
    get: function get() {
      return this._device;
    },
    set: function set(value) {
      this._device = value;
    }
  }, {
    key: "gdprc",
    get: function get() {
      return this._gdprc;
    },
    set: function set(value) {
      this._gdprc = value;
    }
  }, {
    key: "tags",
    get: function get() {
      return this._tags;
    },
    set: function set(value) {
      this._tags = value;
    }
  }, {
    key: "ad_unit",
    get: function get() {
      return this._ad_unit;
    },
    set: function set(value) {
      this._ad_unit = value;
    }
  }, {
    key: "cpm",
    get: function get() {
      return this._cpm;
    },
    set: function set(value) {
      this._cpm = value;
    }
  }, {
    key: "bidder",
    get: function get() {
      return this._bidder;
    },
    set: function set(value) {
      this._bidder = value;
    }
  }, {
    key: "bidder_start",
    get: function get() {
      return this._bidder_start;
    },
    set: function set(value) {
      this._bidder_start = value;
    }
  }, {
    key: "bidder_finish",
    get: function get() {
      return this._bidder_finish;
    },
    set: function set(value) {
      this._bidder_finish = value;
    }
  }, {
    key: "media_type",
    get: function get() {
      return this._media_type;
    },
    set: function set(value) {
      this._media_type = value;
    }
  }, {
    key: "size",
    get: function get() {
      return this._size;
    },
    set: function set(value) {
      this._size = value;
    }
  }, {
    key: "auction_id",
    get: function get() {
      return this._auction_id;
    },
    set: function set(value) {
      this._auction_id = value;
    }
  }, {
    key: "auction_start",
    get: function get() {
      return this._auction_start;
    },
    set: function set(value) {
      this._auction_start = value;
    }
  }, {
    key: "auction_finish",
    get: function get() {
      return this._auction_finish;
    },
    set: function set(value) {
      this._auction_finish = value;
    }
  }, {
    key: "status",
    get: function get() {
      return this._status;
    },
    set: function set(value) {
      this._status = value;
    }
  }, {
    key: "timeout",
    get: function get() {
      return this._timeout;
    },
    set: function set(value) {
      this._timeout = value;
    }
  }, {
    key: "bidders",
    get: function get() {
      return this._bidders;
    },
    set: function set(value) {
      this._bidders = value;
    }
  }], [{
    key: "from",
    value: function from(bidAfterTimeout) {
      var bat = new BidAfterTimeout();
      bat.ad_unit = bidAfterTimeout.adUnitPath || bidAfterTimeout.adUnit;
      bat.cpm = bidAfterTimeout.cpm;
      bat.bidder = bidAfterTimeout.bidder;
      bat.bidder_start = bidAfterTimeout.start;
      bat.bidder_finish = bidAfterTimeout.finish;
      bat.media_type = bidAfterTimeout.mediaType;

      if (bidAfterTimeout.size && bidAfterTimeout.size.width && bidAfterTimeout.size.height) {
        bat.size = bidAfterTimeout.size.width + 'x' + bidAfterTimeout.size.height;
      }

      bat.auction_id = bidAfterTimeout.auction.id;
      bat.gdprc = bidAfterTimeout.auction.gdpr_consent;
      bat.status = bidAfterTimeout.auction.status;
      bat.auction_start = bidAfterTimeout.auction.start;
      bat.auction_finish = bidAfterTimeout.auction.finish;
      bat.timeout = bidAfterTimeout.auction.timeout;
      var bidders = [];
      Object.keys(bidAfterTimeout.auction.bidders).forEach(function (b) {
        return bidders.push(bidder_Bidder.from(bidAfterTimeout.auction.bidders[b]));
      });
      bat.bidders = bidders;
      return bat;
    }
  }]);

  return BidAfterTimeout;
}();
// CONCATENATED MODULE: ./src/events/prebid/model/index.js





// CONCATENATED MODULE: ./src/events/utils.js


var events_utils_Utils = /*#__PURE__*/function () {
  function Utils() {
    classCallCheck_default()(this, Utils);
  }

  createClass_default()(Utils, null, [{
    key: "sanitizeTags",
    value: function sanitizeTags(tags) {
      if (Array.isArray(tags) && tags.length > 0 && tags.length % 2 === 0) {
        var jo = {};

        for (var i = 0; i < tags.length; i += 2) {
          jo[tags[i].toLowerCase()] = tags[i + 1].toLowerCase();
        }

        var ordered = {};
        Object.keys(jo).sort().forEach(function (key) {
          ordered[key] = jo[key];
        });
        return Object.entries(ordered).flat();
      }

      return [];
    }
  }, {
    key: "emptyArray",
    value: function emptyArray(arr) {
      return !(Array.isArray(arr) && arr.length);
    }
  }]);

  return Utils;
}();
var EVENT_TYPE = {
  PAGE_VIEW: 'pv',
  SESSION: 's',
  PB_AUCTION: 'pb_a',
  PB_IMPRESSION: 'pb_i',
  PB_BID_AFTER_TIMEOUT: 'pb_bat',
  A9_AUCTION: 'a9_a',
  A9_IMPRESSION: 'a9_i'
};
// CONCATENATED MODULE: ./src/events/prebid/prebid.js














var prebid_Prebid = /*#__PURE__*/function () {
  function Prebid(apiClient) {
    classCallCheck_default()(this, Prebid);

    defineProperty_default()(this, "apiClient", null);

    this.apiClient = apiClient;
  }

  createClass_default()(Prebid, [{
    key: "handleAuctionEvent",
    value: function () {
      var _handleAuctionEvent = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(e) {
        var s, u, tags, a, far, data;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Leya.isSessionOpen();

              case 2:
                if (!_context.sent) {
                  _context.next = 29;
                  break;
                }

                _context.next = 5;
                return Leya.getSession();

              case 5:
                s = _context.sent;
                _context.next = 8;
                return Leya.getUser();

              case 8:
                u = _context.sent;
                _context.next = 11;
                return Leya.getTags();

              case 11:
                tags = _context.sent;
                LOGGER.debug("Handling Prebid Auction event on session " + s.id);
                a = auction_Auction.from(e);
                a.session = s.id;
                a.host = s.host;
                a.path = s.path;
                a.referrer = s.referrer;
                a.device = u.device;
                a.gdprc = a.gdprc !== 3 || u.gdpr.consented !== 3 ? a.gdprc !== 3 ? a.gdprc : u.gdpr.consented : u.gdpr.consented;
                a.gdprvl = u.gdpr.vendorListVersion;
                a.tags = events_utils_Utils.sanitizeTags(tags);
                LOGGER.debug("Flattening auction event: " + JSON.stringify(a));
                far = this.flattenAuction(a);
                LOGGER.debug("Flattened auction rows: " + JSON.stringify(far));
                data = {
                  type: EVENT_TYPE.PB_AUCTION,
                  data: far
                };
                return _context.abrupt("return", this.apiClient.sendEvent(data, false));

              case 29:
                LOGGER.error("No session");
                throw new nosession_error_NoSessionError();

              case 31:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleAuctionEvent(_x) {
        return _handleAuctionEvent.apply(this, arguments);
      }

      return handleAuctionEvent;
    }()
  }, {
    key: "handleImpressionEvent",
    value: function () {
      var _handleImpressionEvent = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2(e) {
        var s, u, tags, i, fir, data;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Leya.isSessionOpen();

              case 2:
                if (!_context2.sent) {
                  _context2.next = 29;
                  break;
                }

                _context2.next = 5;
                return Leya.getSession();

              case 5:
                s = _context2.sent;
                _context2.next = 8;
                return Leya.getUser();

              case 8:
                u = _context2.sent;
                _context2.next = 11;
                return Leya.getTags();

              case 11:
                tags = _context2.sent;
                LOGGER.debug("Handling Prebid Impression event on session " + s.id);
                i = impression_Impression.from(e);
                i.session = s.id;
                i.host = s.host;
                i.path = s.path;
                i.referrer = s.referrer;
                i.device = u.device;
                i.gdprc = i.gdprc !== 3 || u.gdpr.consented !== 3 ? i.gdprc !== 3 ? i.gdprc : u.gdpr.consented : u.gdpr.consented;
                i.gdprvl = u.gdpr.vendorListVersion;
                i.tags = events_utils_Utils.sanitizeTags(tags);
                LOGGER.debug("Flattening impression event: " + JSON.stringify(i));
                fir = this.flattenImpression(i);
                LOGGER.debug("Flattened impression rows: " + JSON.stringify(fir));
                data = {
                  type: EVENT_TYPE.PB_IMPRESSION,
                  data: fir
                };
                return _context2.abrupt("return", this.apiClient.sendEvent(data, false));

              case 29:
                LOGGER.error("No session");
                throw new nosession_error_NoSessionError();

              case 31:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function handleImpressionEvent(_x2) {
        return _handleImpressionEvent.apply(this, arguments);
      }

      return handleImpressionEvent;
    }()
  }, {
    key: "handleBidAfterTimeoutEvent",
    value: function () {
      var _handleBidAfterTimeoutEvent = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee3(e) {
        var s, u, tags, bat, fbatr, data;
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Leya.isSessionOpen();

              case 2:
                if (!_context3.sent) {
                  _context3.next = 29;
                  break;
                }

                _context3.next = 5;
                return Leya.getSession();

              case 5:
                s = _context3.sent;
                _context3.next = 8;
                return Leya.getUser();

              case 8:
                u = _context3.sent;
                _context3.next = 11;
                return Leya.getTags();

              case 11:
                tags = _context3.sent;
                LOGGER.debug("Handling Prebid BidAfterTimeout event on session " + s.id);
                bat = bat_BidAfterTimeout.from(e);
                bat.session = s.id;
                bat.host = s.host;
                bat.path = s.path;
                bat.referrer = s.referrer;
                bat.device = u.device;
                bat.gdprc = bat.gdprc !== 3 || u.gdpr.consented !== 3 ? bat.gdprc !== 3 ? bat.gdprc : u.gdpr.consented : u.gdpr.consented;
                bat.gdprvl = u.gdpr.vendorListVersion;
                bat.tags = events_utils_Utils.sanitizeTags(tags);
                LOGGER.debug("Flattening BidAfterTimeout event: " + JSON.stringify(bat));
                fbatr = this.flattenBidAfterTimeout(bat);
                LOGGER.debug("Flattened impression rows: " + JSON.stringify(fbatr));
                data = {
                  type: EVENT_TYPE.PB_BID_AFTER_TIMEOUT,
                  data: fbatr
                };
                return _context3.abrupt("return", this.apiClient.sendEvent(data, false));

              case 29:
                LOGGER.error("No session");
                throw new nosession_error_NoSessionError();

              case 31:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function handleBidAfterTimeoutEvent(_x3) {
        return _handleBidAfterTimeoutEvent.apply(this, arguments);
      }

      return handleBidAfterTimeoutEvent;
    }() //private

  }, {
    key: "flattenBidAfterTimeout",
    value: function flattenBidAfterTimeout(bat) {
      var rows = [];
      bat.bidders.forEach(function (b) {
        rows.push({
          session: bat.session,
          host: bat.host,
          referrer: bat.referrer,
          path: bat.path,
          device: bat.device,
          gdprc: bat.gdprc,
          gdprvl: bat.gdprvl,
          tags: bat.tags,
          ad_unit_id: bat.ad_unit,
          bat_cpm: bat.cpm,
          bat_bidder: bat.bidder,
          bat_start: bat.bidder_start,
          bat_finish: bat.bidder_finish,
          media_type: bat.media_type,
          size: bat.size,
          auction_id: bat.auction_id,
          auction_start: bat.auction_start,
          auction_finish: bat.auction_finish,
          auction_timeout: bat.timeout,
          bidder_id: b.id,
          bidder_bid_after_timeout: b.bat,
          bidder_status: b.status,
          bidder_cpm: b.cpm,
          bidder_start: b.start,
          bidder_finish: b.finish
        });
      });
      return rows;
    }
  }, {
    key: "flattenImpression",
    value: function flattenImpression(i) {
      var rows = [];
      i.bidders.forEach(function (b) {
        rows.push({
          session: i.session,
          host: i.host,
          referrer: i.referrer,
          path: i.path,
          device: i.device,
          gdprc: i.gdprc,
          gdprvl: i.gdprvl,
          tags: i.tags,
          ad_unit_id: i.ad_unit,
          winner_cpm: i.cpm,
          winner_bidder: i.winner,
          media_type: i.media_type,
          size: i.size,
          auction_id: i.auction_id,
          auction_start: i.auction_start,
          auction_finish: i.auction_finish,
          auction_timeout: i.timeout,
          bidder_id: b.id,
          bidder_bid_after_timeout: b.bat,
          bidder_status: b.status,
          bidder_cpm: b.cpm,
          bidder_start: b.start,
          bidder_finish: b.finish
        });
      });
      return rows;
    }
  }, {
    key: "flattenAuction",
    value: function flattenAuction(a) {
      var rows = [];
      a.adunits.forEach(function (au) {
        if (events_utils_Utils.emptyArray(au.sizes)) {
          au.bidders.forEach(function (b) {
            rows.push({
              session: a.session,
              host: a.host,
              referrer: a.referrer,
              path: a.path,
              device: a.device,
              gdprc: a.gdprc,
              gdprvl: a.gdprvl,
              tags: a.tags,
              auction_id: a.id,
              auction_timeout: a.timeout,
              auction_start: a.start,
              auction_finish: a.finish,
              ad_unit_id: au.id,
              ad_unit_status: au.status,
              ad_unit_timeout: au.timeout,
              size: "unknown",
              ad_unit_bid_start: au.start,
              ad_unit_bid_finish: au.finish,
              bidder_id: b.id,
              bidder_bid_after_timeout: b.bat,
              bidder_status: b.status,
              bidder_cpm: b.cpm,
              bidder_start: b.start,
              bidder_finish: b.finish
            });
          });
        } else {
          au.sizes.forEach(function (s) {
            au.bidders.forEach(function (b) {
              rows.push({
                session: a.session,
                host: a.host,
                referrer: a.referrer,
                path: a.path,
                device: a.device,
                gdprc: a.gdprc,
                gdprvl: a.gdprvl,
                tags: a.tags,
                auction_id: a.id,
                auction_timeout: a.timeout,
                auction_start: a.start,
                auction_finish: a.finish,
                ad_unit_id: au.id,
                ad_unit_status: au.status,
                ad_unit_timeout: au.timeout,
                size: s,
                ad_unit_bid_start: au.start,
                ad_unit_bid_finish: au.finish,
                bidder_id: b.id,
                bidder_bid_after_timeout: b.bat,
                bidder_status: b.status,
                bidder_cpm: b.cpm,
                bidder_start: b.start,
                bidder_finish: b.finish
              });
            });
          });
        }
      });
      return rows;
    }
  }]);

  return Prebid;
}();


// CONCATENATED MODULE: ./src/events/leya.js










var leya_LeyaEvents = /*#__PURE__*/function () {
  function LeyaEvents(apiClient) {
    classCallCheck_default()(this, LeyaEvents);

    defineProperty_default()(this, "apiClient", null);

    this.apiClient = apiClient;
  }

  createClass_default()(LeyaEvents, [{
    key: "recordPageView",
    value: function () {
      var _recordPageView = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var s, u, pv, data;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Leya.isSessionOpen();

              case 2:
                if (!_context.sent) {
                  _context.next = 27;
                  break;
                }

                _context.next = 5;
                return Leya.getSession();

              case 5:
                s = _context.sent;
                _context.next = 8;
                return Leya.getUser();

              case 8:
                u = _context.sent;
                _context.t0 = s.id;
                _context.t1 = s.host;
                _context.t2 = s.path;
                _context.t3 = s.referrer;
                _context.t4 = new Date().getTime();
                _context.t5 = u.device;
                _context.t6 = u.browserLanguage;
                _context.t7 = u.gdpr.consented;
                _context.t8 = u.gdpr.vendorListVersion;
                _context.next = 20;
                return Leya.getTags();

              case 20:
                _context.t9 = _context.sent;
                pv = {
                  session: _context.t0,
                  host: _context.t1,
                  path: _context.t2,
                  referrer: _context.t3,
                  recorded_at: _context.t4,
                  device: _context.t5,
                  blan: _context.t6,
                  gdprc: _context.t7,
                  gdprvl: _context.t8,
                  tags: _context.t9
                };
                data = {
                  type: EVENT_TYPE.PAGE_VIEW,
                  data: [pv]
                };
                LOGGER.debug("Recording page view event " + JSON.stringify(data)); //send event using api client

                return _context.abrupt("return", this.apiClient.sendEvent(data, false));

              case 27:
                LOGGER.error("No session");
                throw new nosession_error_NoSessionError();

              case 29:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function recordPageView() {
        return _recordPageView.apply(this, arguments);
      }

      return recordPageView;
    }()
  }, {
    key: "recordSession",
    value: function () {
      var _recordSession = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        var s, u, session, data;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Leya.getSession();

              case 2:
                s = _context2.sent;
                _context2.next = 5;
                return Leya.getUser();

              case 5:
                u = _context2.sent;

                if (!(s === null)) {
                  _context2.next = 9;
                  break;
                }

                LOGGER.error("No session");
                throw new nosession_error_NoSessionError();

              case 9:
                if (!(s.finish === null)) {
                  _context2.next = 12;
                  break;
                }

                LOGGER.error("Session is still open");
                throw new sessionopen_error_SessionOpenError();

              case 12:
                _context2.t0 = s.id;
                _context2.t1 = s.host;
                _context2.t2 = s.path;
                _context2.t3 = s.referrer;
                _context2.t4 = s.start;
                _context2.t5 = s.finish;
                _context2.t6 = u.device;
                _context2.t7 = u.browserLanguage;
                _context2.t8 = u.gdpr.consented;
                _context2.t9 = u.gdpr.vendorListVersion;
                _context2.next = 24;
                return Leya.getTags();

              case 24:
                _context2.t10 = _context2.sent;
                session = {
                  session: _context2.t0,
                  host: _context2.t1,
                  path: _context2.t2,
                  referrer: _context2.t3,
                  session_start: _context2.t4,
                  session_finish: _context2.t5,
                  device: _context2.t6,
                  blan: _context2.t7,
                  gdprc: _context2.t8,
                  gdprvl: _context2.t9,
                  tags: _context2.t10
                };
                data = {
                  type: EVENT_TYPE.SESSION,
                  data: [session]
                };
                LOGGER.debug("Recording session closed event " + JSON.stringify(data)); //send event using api client

                return _context2.abrupt("return", this.apiClient.sendEvent(data, true));

              case 29:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function recordSession() {
        return _recordSession.apply(this, arguments);
      }

      return recordSession;
    }()
  }]);

  return LeyaEvents;
}();


// CONCATENATED MODULE: ./src/core/errors/empty_line_items_map_error.js






function empty_line_items_map_error_createSuper(Derived) { var hasNativeReflectConstruct = empty_line_items_map_error_isNativeReflectConstruct(); return function () { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function empty_line_items_map_error_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var empty_line_items_map_error_EmptyLineItemsMapError = /*#__PURE__*/function (_Error) {
  inherits_default()(EmptyLineItemsMapError, _Error);

  var _super = empty_line_items_map_error_createSuper(EmptyLineItemsMapError);

  function EmptyLineItemsMapError() {
    classCallCheck_default()(this, EmptyLineItemsMapError);

    return _super.apply(this, arguments);
  }

  return EmptyLineItemsMapError;
}( /*#__PURE__*/wrapNativeSuper_default()(Error));
// CONCATENATED MODULE: ./src/core/errors/missing_required_property_error.js






function missing_required_property_error_createSuper(Derived) { var hasNativeReflectConstruct = missing_required_property_error_isNativeReflectConstruct(); return function () { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function missing_required_property_error_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var missing_required_property_error_MissingRequiredPropertyError = /*#__PURE__*/function (_Error) {
  inherits_default()(MissingRequiredPropertyError, _Error);

  var _super = missing_required_property_error_createSuper(MissingRequiredPropertyError);

  function MissingRequiredPropertyError() {
    classCallCheck_default()(this, MissingRequiredPropertyError);

    return _super.apply(this, arguments);
  }

  return MissingRequiredPropertyError;
}( /*#__PURE__*/wrapNativeSuper_default()(Error));
// CONCATENATED MODULE: ./src/core/errors/api_error.js






function api_error_createSuper(Derived) { var hasNativeReflectConstruct = api_error_isNativeReflectConstruct(); return function () { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function api_error_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var api_error_ApiError = /*#__PURE__*/function (_Error) {
  inherits_default()(ApiError, _Error);

  var _super = api_error_createSuper(ApiError);

  function ApiError() {
    classCallCheck_default()(this, ApiError);

    return _super.apply(this, arguments);
  }

  return ApiError;
}( /*#__PURE__*/wrapNativeSuper_default()(Error));
// CONCATENATED MODULE: ./src/events/a9/a9.js















var a9_A9 = /*#__PURE__*/function () {
  function A9(apiClient, auctionTtlInSeconds, intervalInSeconds) {
    classCallCheck_default()(this, A9);

    defineProperty_default()(this, "apiClient", null);

    defineProperty_default()(this, "auctions", []);

    defineProperty_default()(this, "lineItemsMap", {});

    this.apiClient = apiClient;
    setInterval(function () {
      var time = new Date().getTime(); //remove auctions older than auctionTtlInMinutes minutes

      this.auctions = this.auctions.filter(function (e) {
        return time < e.time + auctionTtlInSeconds * 1000;
      });
    }.bind(this), intervalInSeconds * 1000);
  }

  createClass_default()(A9, [{
    key: "init",
    value: function () {
      var _init = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var _this = this;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", this.apiClient.getA9LineItemsMap().then(function (e) {
                  if (e && e.data) {
                    _this.lineItemsMap = e.data;
                    LOGGER.debug("A9 Line Items map: " + JSON.stringify(_this.lineItemsMap));
                  } else {
                    LOGGER.warn("Retrieved empty line items map, review configuration.");
                  }
                })["catch"](function (err) {
                  LOGGER.error("API error fetching A9 Line Items Map", err);
                  throw new api_error_ApiError();
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "getLineItemsMap",
    value: function () {
      var _getLineItemsMap = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", this.lineItemsMap);

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getLineItemsMap() {
        return _getLineItemsMap.apply(this, arguments);
      }

      return getLineItemsMap;
    }()
  }, {
    key: "handleAuctionEvent",
    value: function () {
      var _handleAuctionEvent = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee3(e) {
        var s, u, tags, data;
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Leya.isSessionOpen();

              case 2:
                if (!_context3.sent) {
                  _context3.next = 21;
                  break;
                }

                _context3.next = 5;
                return Leya.getSession();

              case 5:
                s = _context3.sent;
                _context3.next = 8;
                return Leya.getUser();

              case 8:
                u = _context3.sent;
                _context3.next = 11;
                return Leya.getTags();

              case 11:
                tags = _context3.sent;
                LOGGER.debug("Handling A9 Auction event on session " + s.id);
                LOGGER.debug(e); //validate and enhance e.response

                this.validateAndEnhanceRawAuction(e); //{
                //  start:,
                //  finish:,
                //  response: [
                //      {
                //          slotID:,
                //          slotName:,
                //          amzniid:,
                //          amznbid:,
                //          amznp:,
                //          amznsz:,
                //          size,
                //          cpm
                //      }
                //  ]
                //}

                e.response.forEach(function (el) {
                  el.auction_start = e.start;
                  el.auction_finish = e.finish;
                  el.session = s.id;
                  el.host = s.host;
                  el.path = s.path;
                  el.referrer = s.referrer;
                  el.device = u.device;
                  el.gdprc = u.gdpr.consented || 3;
                  el.gdprvl = u.gdpr.vendorListVersion;
                  el.tags = events_utils_Utils.sanitizeTags(tags);
                });
                this.auctions.push({
                  data: e.response,
                  time: new Date().getTime()
                });
                data = {
                  type: EVENT_TYPE.A9_AUCTION,
                  data: e.response
                };
                return _context3.abrupt("return", this.apiClient.sendEvent(data, false));

              case 21:
                LOGGER.error("No session");
                throw new nosession_error_NoSessionError();

              case 23:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function handleAuctionEvent(_x) {
        return _handleAuctionEvent.apply(this, arguments);
      }

      return handleAuctionEvent;
    }()
  }, {
    key: "handleImpressionEvent",
    value: function () {
      var _handleImpressionEvent = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee4(e) {
        var s, u, tags, ae, i, data;
        return regenerator_default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return Leya.isSessionOpen();

              case 2:
                if (!_context4.sent) {
                  _context4.next = 30;
                  break;
                }

                _context4.next = 5;
                return Leya.getSession();

              case 5:
                s = _context4.sent;
                _context4.next = 8;
                return Leya.getUser();

              case 8:
                u = _context4.sent;
                _context4.next = 11;
                return Leya.getTags();

              case 11:
                tags = _context4.sent;
                LOGGER.debug("Handling A9 Impression event on session " + s.id);
                LOGGER.debug(e);
                this.validateAndEnhanceRawImpression(e); //find corresponding auction entry

                ae = this.auctions.flatMap(function (el) {
                  return el.data;
                }).find(function (el) {
                  return el.amzniid === e.amzniid && el.slotName === e.slotName && el.amznp === e.amznp && el.amznbid === e.amznbid;
                });
                i = {};
                i.session = s.id;
                i.host = s.host;
                i.path = s.path;
                i.referrer = s.referrer;
                i.device = u.device;
                i.gdprc = u.gdpr.consented || 3;
                i.gdprvl = u.gdpr.vendorListVersion;
                i.tags = events_utils_Utils.sanitizeTags(tags);

                if (!ae) {
                  LOGGER.warn("auction entry not found for impression: " + JSON.stringify(e));
                  i.amzniid = e.amzniid;
                  i.amznp = e.amznp;
                  i.amznbid = e.amznbid;
                  i.cpm = e.cpm;
                  i.auction_start = new Date().getTime();
                  i.auction_finish = new Date().getTime();
                  i.slotID = "unknown";
                  i.slotName = e.slotName;
                  i.size = "unknown";
                  i.amznsz = "unknown";
                } else {
                  i.amzniid = ae.amzniid;
                  i.amznp = ae.amznp;
                  i.amznbid = ae.amznbid;
                  i.cpm = ae.cpm;
                  i.auction_start = ae.auction_start;
                  i.auction_finish = ae.auction_finish;
                  i.slotID = ae.slotID;
                  i.slotName = ae.slotName;
                  i.size = ae.size;
                  i.amznsz = ae.amznsz;
                }

                data = {
                  type: EVENT_TYPE.A9_IMPRESSION,
                  data: i
                };
                return _context4.abrupt("return", this.apiClient.sendEvent(data, false));

              case 30:
                LOGGER.error("No session");
                throw new nosession_error_NoSessionError();

              case 32:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function handleImpressionEvent(_x2) {
        return _handleImpressionEvent.apply(this, arguments);
      }

      return handleImpressionEvent;
    }() //private

  }, {
    key: "validateAndEnhanceRawImpression",
    value: function validateAndEnhanceRawImpression(data) {
      //{
      //  amzniid:,
      //  amznbid:,
      //  amznp,
      //  slotName
      //}
      if (!data.amzniid) {
        LOGGER.error("missing 'amzniid'");
        throw new missing_required_property_error_MissingRequiredPropertyError();
      }

      if (!data.amznbid) {
        LOGGER.error("missing 'amznbid'");
        throw new missing_required_property_error_MissingRequiredPropertyError();
      }

      if (!data.amznp) {
        LOGGER.error("missing 'amznp'");
        throw new missing_required_property_error_MissingRequiredPropertyError();
      }

      if (!data.slotName) {
        LOGGER.error("missing 'slotName'");
        throw new missing_required_property_error_MissingRequiredPropertyError();
      }

      data["cpm"] = this.amznbid2cpm(data.amznbid);
    }
  }, {
    key: "validateAndEnhanceRawAuction",
    value: function validateAndEnhanceRawAuction(data) {
      var _this2 = this;

      //{
      //  start:,
      //  finish:,
      //  request: [
      //      {
      //          slotID:,
      //          slotName:,
      //          sizes: []
      //      }
      //  ],
      //  response: [
      //      {
      //          slotID:,
      //          amzniid:,
      //          amznbid:,
      //          amznp:,
      //          amznsz:,
      //          size
      //      }
      //  ]
      //}
      if (!data.start) {
        data.start = new Date().getTime();
      }

      if (!data.finish) {
        data.finish = new Date().getTime();
      }

      if (events_utils_Utils.emptyArray(data.request)) {
        LOGGER.error("A9 auction data missing request object");
        throw new missing_required_property_error_MissingRequiredPropertyError();
      }

      if (events_utils_Utils.emptyArray(data.response)) {
        LOGGER.error("A9 auction data missing response object");
        throw new missing_required_property_error_MissingRequiredPropertyError();
      } //generate a random uuid in case amzniid is empty, happens when there is no bids from a9


      var bid = data.response.find(function (r) {
        return r.amzniid;
      });
      var aid = bid ? bid.amzniid : esm_browser_v4();
      data.response = data.response.map(function (e) {
        var req = data.request.find(function (r) {
          return r.slotID === e.slotID;
        });
        e["amzniid"] = e["amzniid"] || aid;
        e["slotName"] = req.slotName;
        e["cpm"] = _this2.amznbid2cpm(e.amznbid);
        return e;
      });
      delete data.request;
    }
  }, {
    key: "amznbid2cpm",
    value: function amznbid2cpm(amznbid) {
      if (Object.entries(this.lineItemsMap).length === 0 && this.lineItemsMap.constructor === Object) {
        LOGGER.error("A9 Line Items Map is empty, call init() to retrieve it");
        throw new empty_line_items_map_error_EmptyLineItemsMapError();
      }

      return this.lineItemsMap[amznbid] || 0;
    }
  }]);

  return A9;
}();


// EXTERNAL MODULE: ./node_modules/axios/index.js
var node_modules_axios = __webpack_require__(10);
var axios_default = /*#__PURE__*/__webpack_require__.n(node_modules_axios);

// EXTERNAL MODULE: ./node_modules/retry-axios/build/src/index.js
var src = __webpack_require__(25);

// CONCATENATED MODULE: ./src/api/lc.js








var DEFAULT_HOST = 'https://analytics.leya.tech/events';
var A9_LINE_ITEMS_URL = "https://analytics.leya.tech/a9/line-items";
src["attach"](axios_default.a);
var lc_LeyaClient = /*#__PURE__*/function () {
  function LeyaClient(flushTimeout, batchSize) {
    classCallCheck_default()(this, LeyaClient);

    defineProperty_default()(this, "events", []);

    defineProperty_default()(this, "flushTimeoutId", null);

    defineProperty_default()(this, "flushTimeout", null);

    defineProperty_default()(this, "batchSize", null);

    this.flushTimeout = flushTimeout;
    this.batchSize = batchSize <= 0 ? 1 : batchSize;
  }

  createClass_default()(LeyaClient, [{
    key: "scheduleFlush",
    value: function () {
      var _scheduleFlush = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.flushTimeoutId = setTimeout(this.flush.bind(this), this.flushTimeout);

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function scheduleFlush() {
        return _scheduleFlush.apply(this, arguments);
      }

      return scheduleFlush;
    }()
  }, {
    key: "sendEvent",
    value: function () {
      var _sendEvent = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2(event, flush) {
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.events.push(event);

                if (!flush) {
                  _context2.next = 6;
                  break;
                }

                _context2.next = 4;
                return this.flush(true);

              case 4:
                _context2.next = 9;
                break;

              case 6:
                if (!(this.events.length >= this.batchSize)) {
                  _context2.next = 9;
                  break;
                }

                _context2.next = 9;
                return this.flush(false);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function sendEvent(_x, _x2) {
        return _sendEvent.apply(this, arguments);
      }

      return sendEvent;
    }()
  }, {
    key: "getA9LineItemsMap",
    value: function () {
      var _getA9LineItemsMap = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee3() {
        var k;
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Leya.getKey();

              case 2:
                k = _context3.sent;

                if (!k) {
                  _context3.next = 7;
                  break;
                }

                return _context3.abrupt("return", axios_default.a.get(A9_LINE_ITEMS_URL, {
                  headers: {
                    'x-api-token': k
                  }
                }));

              case 7:
                LOGGER.warn("Can't retrieve line item map without an ingestion key, use Leya.setKey() to set yours.");

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getA9LineItemsMap() {
        return _getA9LineItemsMap.apply(this, arguments);
      }

      return getA9LineItemsMap;
    }()
  }, {
    key: "getEventQueueSize",
    value: function () {
      var _getEventQueueSize = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee4() {
        return regenerator_default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", this.events.length);

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getEventQueueSize() {
        return _getEventQueueSize.apply(this, arguments);
      }

      return getEventQueueSize;
    }()
  }, {
    key: "flush",
    value: function () {
      var _flush = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee5(useBeacon) {
        var _this = this;

        var k, _loop;

        return regenerator_default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return Leya.getKey();

              case 2:
                k = _context5.sent;

                if (this.flushTimeoutId) {
                  clearTimeout(this.flushTimeoutId);
                  this.flushTimeoutId = null;
                }

                _context5.prev = 4;

                _loop = function _loop() {
                  var d = _this.events.splice(0, _this.batchSize);

                  LOGGER.debug("Flushing " + d.length + " events");
                  var payload = {};
                  d.forEach(function (e) {
                    payload[e.type] = payload[e.type] || [];
                    payload[e.type] = payload[e.type].concat(e.data);
                  });
                  LOGGER.debug(JSON.stringify(payload));

                  if (k) {
                    if (navigator.sendBeacon && useBeacon) {
                      //if beacon exists, use it
                      _this.beacon(k, payload);
                    } else {
                      //fallback to axios
                      //https://caniuse.com/#search=sendBeacon
                      _this.axios(k, payload);
                    }
                  } else {
                    LOGGER.warn("missing ingestion key");
                  }
                };

                while (this.events.length) {
                  _loop();
                }

              case 7:
                _context5.prev = 7;
                _context5.next = 10;
                return this.scheduleFlush();

              case 10:
                return _context5.finish(7);

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[4,, 7, 11]]);
      }));

      function flush(_x3) {
        return _flush.apply(this, arguments);
      }

      return flush;
    }()
  }, {
    key: "beacon",
    value: function beacon(key, payload) {
      var blob = new Blob([JSON.stringify(payload)], {
        type: 'text/plain; charset=UTF-8'
      });

      if (!navigator.sendBeacon(DEFAULT_HOST + '?xat=' + key, blob)) {
        //beacon failed, fallback to axios
        LOGGER.debug("failed to queue beacon request, falling back to axios");
        this.axios(key, payload);
      }
    }
  }, {
    key: "axios",
    value: function axios(key, payload) {
      axios_default()({
        method: 'post',
        url: DEFAULT_HOST,
        data: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
          'x-api-token': key
        },
        raxConfig: {
          instance: axios_default.a,
          httpMethodsToRetry: ['GET', 'HEAD', 'OPTIONS', 'DELETE', 'PUT', 'POST'],
          retry: 3,
          noResponseRetries: 2,
          backoffType: 'exponential'
        }
      });
    }
  }]);

  return LeyaClient;
}();
// CONCATENATED MODULE: ./src/main.js









(function (window) {
  var _this = this;

  if (window.Leya) {
    LOGGER.warn("Attempted to load leyajs but it's already loaded.");
    return;
  } //core


  var l = new core_Core();

  var _getKey = function _getKey(key) {
    return l.getKey(key);
  };

  var _setKey = function _setKey(key) {
    return l.setKey(key);
  };

  var _startSession = function _startSession() {
    return l.startSession();
  };

  var _finishSession = function _finishSession() {
    return l.finishSession();
  };

  var _getSession = function _getSession() {
    return l.getSession();
  };

  var _setTags = function _setTags(tags) {
    return l.setTags(tags);
  };

  var _addTags = function _addTags(tags) {
    return l.addTags(tags);
  };

  var _removeTags = function _removeTags(tags) {
    return l.removeTags(tags);
  };

  var _getTags = function _getTags() {
    return l.getTags();
  };

  var _getUser = function _getUser() {
    return l.getUser();
  };

  var _setUserGdprConsent = function _setUserGdprConsent(g) {
    return l.setUserGdprConsent(g);
  };

  var _setGdprVendorListVersion = function _setGdprVendorListVersion(v) {
    return l.setGdprVendorListVersion(v);
  };

  var _isSessionOpen = function _isSessionOpen() {
    return l.isSessionOpen();
  }; //events


  var fint = 1000; //flush interval

  var bs = 3; //batch size

  var lc = new lc_LeyaClient(fint, bs);
  var p = new prebid_Prebid(lc);
  var le = new leya_LeyaEvents(lc);
  var a9 = new a9_A9(lc, 1800, 10); //leya events

  var _recordPageView = function _recordPageView() {
    return le.recordPageView();
  };

  var _recordSession = function _recordSession() {
    return le.recordSession();
  }; //prebid events


  var _handleAuctionEvent = function _handleAuctionEvent(e) {
    return p.handleAuctionEvent(e);
  };

  var _handleImpressionEvent = function _handleImpressionEvent(e) {
    return p.handleImpressionEvent(e);
  };

  var _handleBidAfterTimeoutEvent = function _handleBidAfterTimeoutEvent(e) {
    return p.handleBidAfterTimeoutEvent(e);
  }; //a9 events


  var _init = function _init() {
    return a9.init();
  };

  var _handleA9AuctionEvent = function _handleA9AuctionEvent(e) {
    return a9.handleAuctionEvent(e);
  };

  var _handleA9ImpressionEvent = function _handleA9ImpressionEvent(e) {
    return a9.handleImpressionEvent(e);
  };

  var _getLineItemsMap = function _getLineItemsMap() {
    return a9.getLineItemsMap();
  };

  l.startSession().then(function () {
    return LOGGER.info("Session Open");
  });
  lc.scheduleFlush().then(function () {
    return LOGGER.info("Scheduled flush");
  });
  window.Leya = {
    getKey: _getKey,
    setKey: _setKey,
    startSession: _startSession,
    finishSession: _finishSession,
    getSession: _getSession,
    getTags: _getTags,
    setTags: _setTags,
    addTags: _addTags,
    removeTags: _removeTags,
    getUser: _getUser,
    setUserGdprConsent: _setUserGdprConsent,
    setGdprVendorListVersion: _setGdprVendorListVersion,
    isSessionOpen: _isSessionOpen,
    Events: {
      Prebid: {
        handleAuctionEvent: _handleAuctionEvent,
        handleImpressionEvent: _handleImpressionEvent,
        handleBidAfterTimeoutEvent: _handleBidAfterTimeoutEvent
      },
      A9: {
        handleAuctionEvent: _handleA9AuctionEvent,
        handleImpressionEvent: _handleA9ImpressionEvent,
        init: _init,
        getLineItemsMap: _getLineItemsMap
      },
      recordPageView: _recordPageView,
      recordSession: _recordSession
    }
  }; //event handlers

  window.addEventListener('load', /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee3() {
    var f;
    return regenerator_default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            //set consent f
            f = /*#__PURE__*/function () {
              var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(u) {
                var details;
                return regenerator_default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (!u) {
                          _context.next = 8;
                          break;
                        }

                        details = u.gdpr.gdprDetails();

                        if (!details) {
                          _context.next = 8;
                          break;
                        }

                        _context.next = 5;
                        return Leya.setUserGdprConsent(details.getConsentValue);

                      case 5:
                        if (!details.vendorList) {
                          _context.next = 8;
                          break;
                        }

                        _context.next = 8;
                        return Leya.setGdprVendorListVersion(details.vendorList.vendorListVersion);

                      case 8:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function f(_x) {
                return _ref2.apply(this, arguments);
              };
            }(); //set consent and record pv


            window.setTimeout( /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
              var u;
              return regenerator_default.a.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return Leya.getUser();

                    case 2:
                      u = _context2.sent;
                      _context2.next = 5;
                      return f(u);

                    case 5:
                      _context2.next = 7;
                      return Leya.Events.recordPageView();

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            })).bind(_this), 100);

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
  window.addEventListener('beforeunload', /*#__PURE__*/function () {
    var _ref4 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee4(event) {
      return regenerator_default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return Leya.finishSession();

            case 2:
              delete event['returnValue'];

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function (_x2) {
      return _ref4.apply(this, arguments);
    };
  }());
})(window);

/***/ })
/******/ ]);