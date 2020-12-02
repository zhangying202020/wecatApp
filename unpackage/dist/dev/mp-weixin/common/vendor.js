(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return res.then(function (res) {
      return res[1];
    }).catch(function (res) {
      return res[0];
    });
  } };


var SYNC_API_RE =
/^\$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });var


EventChannel = /*#__PURE__*/function () {
  function EventChannel(id, events) {var _this = this;_classCallCheck(this, EventChannel);
    this.id = id;
    this.listener = {};
    this.emitCache = {};
    if (events) {
      Object.keys(events).forEach(function (name) {
        _this.on(name, events[name]);
      });
    }
  }_createClass(EventChannel, [{ key: "emit", value: function emit(

    eventName) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
      var fns = this.listener[eventName];
      if (!fns) {
        return (this.emitCache[eventName] || (this.emitCache[eventName] = [])).push(args);
      }
      fns.forEach(function (opt) {
        opt.fn.apply(opt.fn, args);
      });
      this.listener[eventName] = fns.filter(function (opt) {return opt.type !== 'once';});
    } }, { key: "on", value: function on(

    eventName, fn) {
      this._addListener(eventName, 'on', fn);
      this._clearCache(eventName);
    } }, { key: "once", value: function once(

    eventName, fn) {
      this._addListener(eventName, 'once', fn);
      this._clearCache(eventName);
    } }, { key: "off", value: function off(

    eventName, fn) {
      var fns = this.listener[eventName];
      if (!fns) {
        return;
      }
      if (fn) {
        for (var i = 0; i < fns.length;) {
          if (fns[i].fn === fn) {
            fns.splice(i, 1);
            i--;
          }
          i++;
        }
      } else {
        delete this.listener[eventName];
      }
    } }, { key: "_clearCache", value: function _clearCache(

    eventName) {
      var cacheArgs = this.emitCache[eventName];
      if (cacheArgs) {
        for (; cacheArgs.length > 0;) {
          this.emit.apply(this, [eventName].concat(cacheArgs.shift()));
        }
      }
    } }, { key: "_addListener", value: function _addListener(

    eventName, type, fn) {
      (this.listener[eventName] || (this.listener[eventName] = [])).push({
        fn: fn,
        type: type });

    } }]);return EventChannel;}();


var eventChannels = {};

var eventChannelStack = [];

var id = 0;

function initEventChannel(events) {var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  id++;
  var eventChannel = new EventChannel(id, events);
  if (cache) {
    eventChannels[id] = eventChannel;
    eventChannelStack.push(eventChannel);
  }
  return eventChannel;
}

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var navigateTo = {
  args: function args(fromArgs, toArgs) {
    var id = initEventChannel(fromArgs.events).id;
    if (fromArgs.url) {
      fromArgs.url = fromArgs.url + (fromArgs.url.indexOf('?') === -1 ? '?' : '&') + '__id__=' + id;
    }
  },
  returnValue: function returnValue(fromRes, toRes) {
    fromRes.eventChannel = getEventChannel();
  } };


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}
var protocols = {
  redirectTo: redirectTo,
  navigateTo: navigateTo,
  previewImage: previewImage,
  getSystemInfo: {
    returnValue: addSafeAreaInsets },

  getSystemInfoSync: {
    returnValue: addSafeAreaInsets } };


var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail:服务[' + service + ']不存在' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {args[_key4 - 1] = arguments[_key4];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      return oldHook.apply(this, args);
    };
  }
}

Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('onLoad', options);
  return MPPage(options);
};

Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('created', options);
  return MPComponent(options);
};

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"VUE_APP_NAME":"Sgoly","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    // 用于字节跳动小程序模拟抽象节点
    properties.generic = {
      type: Object,
      value: null };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this2 = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this2.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this2.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this2.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          // eslint-disable-next-line no-sparse-arrays
          ret.push(handler.apply(handlerCtx, (Array.isArray(params) ? params : []).concat([,,,,,,,,,, event])));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (!wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      var components = mpInstance.selectAllComponents('.vue-ref');
      components.forEach(function (component) {
        var ref = component.dataset.ref;
        $refs[ref] = component.$vm || component;
      });
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  _vue.default.prototype.getOpenerEventChannel = function () {
    if (!this.__eventChannel__) {
      this.__eventChannel__ = new EventChannel();
    }
    return this.__eventChannel__;
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),

/***/ 10:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 2:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i++, i)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"VUE_APP_NAME":"Sgoly","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"VUE_APP_NAME":"Sgoly","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"VUE_APP_NAME":"Sgoly","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"VUE_APP_NAME":"Sgoly","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 25:
/*!***********************************************!*\
  !*** D:/WeChat/Sgoly/static/data/fruits.json ***!
  \***********************************************/
/*! exports provided: banners, bannerTags, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"banners\":[\"images/banner-1.jpg\",\"images/banner-2.jpg\",\"images/banner-3.jpg\",\"images/banner-4.jpg\",\"images/banner-5.jpg\"],\"bannerTags\":[{\"image\":\"images/crunchies-hot.jpg\",\"id\":1001,\"hs_more\":0,\"content\":[{\"title\":\"美国加州樱桃\",\"subtitle\":\"一年仅一约 限量珍贵\",\"image\":\"images/product_pic/1-370x370-2404-XAR8915W.jpg\",\"product_id\":\"22877\",\"banner_tag\":\"\",\"volume\":\"1kg\",\"guide_price\":\"138\",\"price\":\"138\"},{\"title\":\"海南妃子笑荔枝 \",\"subtitle\":\"抢鲜一步 时令荔枝来了\",\"image\":\"images/product_pic/1-370x370-2383-6TC4AC2W.jpg\",\"product_id\":\"31726\",\"banner_tag\":\"\",\"volume\":\"2.5kg\",\"guide_price\":\"59.9\",\"price\":\"59.9\"},{\"title\":\"越南黑虎虾仁（中）\",\"subtitle\":\"手剥虾仁 颗颗弹力十足\",\"image\":\"images/product_pic/1-370x370-6495-WUTRUY4A.jpg\",\"product_id\":\"34448\",\"banner_tag\":\"517特惠\",\"volume\":\"4袋\",\"guide_price\":\"119.9\",\"price\":\"99\"},{\"title\":\"佳沛新西兰阳光金奇异果(巨无霸plus)\",\"subtitle\":\"一口爆浆超过瘾\",\"image\":\"images/product_pic/1-370x370-20792-1X11YD69.jpg\",\"product_id\":\"20792\",\"banner_tag\":\"\",\"volume\":\"6个\",\"guide_price\":\"89\",\"price\":\"89\"},{\"title\":\"佳沛新西兰阳光金奇异果(巨无霸)\",\"subtitle\":\"能量巨果 一口爆浆过瘾\",\"image\":\"images/product_pic/1-370x370-2602-372F7AKT.jpg\",\"product_id\":\"34432\",\"banner_tag\":\"\",\"volume\":\"6个\",\"guide_price\":\"79\",\"price\":\"79\"},{\"title\":\"甄选佳沛新西兰绿奇异果\",\"subtitle\":\"清新绿果 酸甜多汁\",\"image\":\"images/product_pic/1-370x370-6254-KFKSYD28.jpg\",\"product_id\":\"38826\",\"banner_tag\":\"\",\"volume\":\"6个\",\"guide_price\":\"39.9\",\"price\":\"39.9\"},{\"title\":\"越南红心火龙果（大）\",\"subtitle\":\"不仅甜，还是润肠通畅小帮手哦\",\"image\":\"images/product_pic/1-370x370-5-81SX15YY.jpg\",\"product_id\":\"35408\",\"banner_tag\":\"\",\"volume\":\"2kg\",\"guide_price\":\"89\",\"price\":\"79.9\"},{\"title\":\"南汇玉菇甜瓜\",\"subtitle\":\"上海小菇凉 酥酥的甜\",\"image\":\"images/product_pic/1-370x370-2235-UWDABY91.jpg\",\"product_id\":\"38575\",\"banner_tag\":\"\",\"volume\":\"4个\",\"guide_price\":\"89\",\"price\":\"89\"},{\"title\":\"嫩脆晓蜜瓜\",\"subtitle\":\"脆口飚多汁 嚼到瓜皮也好甜​\",\"image\":\"images/product_pic/1-370x370-6415-5A11331P.jpg\",\"product_id\":\"36484\",\"banner_tag\":\"\",\"volume\":\"2个\",\"guide_price\":\"69.9\",\"price\":\"49.9\"},{\"title\":\"皇冠梨\",\"subtitle\":\"甜脆多水分 炖梨就用它\",\"image\":\"images/product_pic/1-370x370-3442-56R68768.jpg\",\"product_id\":\"32787\",\"banner_tag\":\"\",\"volume\":\"5kg\",\"guide_price\":\"58.8\",\"price\":\"68\"},{\"title\":\"新疆绿香妃葡萄干\",\"subtitle\":\"超过2000年历史 新疆本地都爱​\",\"image\":\"images/product_pic/1-370x370-6062-KWXCWCUR.jpg\",\"product_id\":\"33475\",\"banner_tag\":\"\",\"volume\":\"150g\",\"guide_price\":\"29.9\",\"price\":\"29.9\"},{\"title\":\"Calbee水果麦片\",\"subtitle\":\"日本卡乐比 开袋即食嘎嘣甜\",\"image\":\"images/product_pic/1-370x370-6498-HB8WA47A.jpg\",\"product_id\":\"34628\",\"banner_tag\":\"\",\"volume\":\"500g\",\"guide_price\":\"49.9\",\"price\":\"49.9\"}]},{\"image\":\"images/crunchies-limit.jpg\",\"id\":1002,\"hs_more\":0,\"content\":[{\"title\":\"澳洲谷饲西冷牛排\",\"subtitle\":\"筋肉相连 饕客有嚼头的香\",\"image\":\"images/product_pic/1-370x370-6038-DHYXK193.jpg\",\"product_id\":\"33563\",\"banner_tag\":\"517特惠\",\"volume\":\"2袋\",\"guide_price\":\"79.2\",\"price\":\"59.9\"},{\"title\":\"日本青研苹果汁\",\"subtitle\":\"100%苹果原汁 不加水不加糖​\",\"image\":\"images/product_pic/1-370x370-5936-RYDUW11P.jpg\",\"product_id\":\"37461\",\"banner_tag\":\"限时特惠\",\"volume\":\"2瓶\",\"guide_price\":\"79\",\"price\":\"78\"},{\"title\":\"金字五香牛肉        \",\"subtitle\":\"老卤精制 冷盘好菜​\",\"image\":\"images/product_pic/1-370x370-7567-P1F582SK.jpg\",\"product_id\":\"37179\",\"banner_tag\":\"限时特惠\",\"volume\":\"180g\",\"guide_price\":\"52\",\"price\":\"46\"},{\"title\":\"皮卡思颗粒花生酱(有盐颗粒) \",\"subtitle\":\"小红书好评10000+\",\"image\":\"images/product_pic/1-370x370-6529-DRDHY4KR.jpg\",\"product_id\":\"34770\",\"banner_tag\":\"限时特惠\",\"volume\":\"380g\",\"guide_price\":\"69\",\"price\":\"49.9\"},{\"title\":\"轩妈蛋黄酥6枚装\",\"subtitle\":\"一年热卖6000万颗的甜糯\",\"image\":\"images/product_pic/1-370x370-8226-2W6D6XDF.jpg\",\"product_id\":\"38802\",\"banner_tag\":\"\",\"volume\":\"2盒\",\"guide_price\":\"79\",\"price\":\"79\"},{\"title\":\"麦提莎兔型麦芽夹心代可可脂牛奶巧克力制品       \",\"subtitle\":\"复活节小兔子 蹦蹦跳跳给你甜\",\"image\":\"images/product_pic/1-370x370-8125-K5T2FW2B.jpg\",\"product_id\":\"38505\",\"banner_tag\":\"限时特惠\",\"cart_tag_list\":[\"限时特惠\"],\"volume\":\"29g\",\"guide_price\":\"12.8\",\"price\":\"9.9\"},{\"title\":\"爱到骨子里黑胡椒盐\",\"subtitle\":\"新鲜研磨瓶 味浓秒杀黑椒粉\",\"image\":\"images/product_pic/1-370x370-4041-PSC97965.jpg\",\"product_id\":\"27730\",\"default_sort\":\"10\",\"banner_tag\":\"限时特惠\",\"cart_tag_list\":[\"限时特惠\"],\"volume\":\"200g\",\"guide_price\":\"68\",\"price\":\"59.9\"},{\"title\":\"带皮羊肉块（去骨）\",\"subtitle\":\"来自内蒙古草原的鲜嫩\",\"image\":\"images/product_pic/1-370x370-7159-A1X54H25.jpg\",\"product_id\":\"36360\",\"banner_tag\":\"\",\"volume\":\"500g\",\"guide_price\":\"89\",\"price\":\"89\"},{\"title\":\"薄荷高纤奇亚籽苏打饼干256g\",\"subtitle\":\"饱腹奇亚籽 麦香轻负担\",\"image\":\"images/product_pic/1-370x370-37229-7CRYD95S.jpg\",\"product_id\":\"37229\",\"banner_tag\":\"限时特惠\",\"volume\":\"5盒\",\"guide_price\":\"89\",\"price\":\"69\"},{\"title\":\"佰素康城超联名原味红松籽仁\",\"subtitle\":\"大果仁 盖不住的山林香\",\"image\":\"images/product_pic/1-370x370-7514-PK3372RU.jpg\",\"product_id\":\"37068\",\"banner_tag\":\"限时特惠\",\"volume\":\"150g\",\"guide_price\":\"78.8\",\"price\":\"65\"}]},{\"image\":\"images/crunchies-week.jpg\",\"id\":480,\"hs_more\":1,\"content\":[{\"title\":\"城超黑金猪肉粽\",\"subtitle\":\"扎实满口好料 豪横制霸端午\",\"image\":\"images/product_pic/1-370x370-8286-X4B5P3SS.jpg\",\"product_id\":\"38971\",\"banner_tag\":\"\",\"volume\":\"2个\",\"guide_price\":\"22.8\",\"price\":\"22.8\"},{\"title\":\" 西贡小姐综合蔬果干\",\"subtitle\":\"多种甜美 一袋尽收\",\"image\":\"images/product_pic/1-370x370-8313-823K7UX5.jpg\",\"product_id\":\"39017\",\"banner_tag\":\"\",\"volume\":\"100g\",\"guide_price\":\"13.6\",\"price\":\"13.6\"},{\"title\":\"Totaste（土斯）九蔬小饼 200g        \",\"subtitle\":\"严选食材 香脆可口\",\"image\":\"images/product_pic/1-370x370-8311-PP73W519.jpg\",\"product_id\":\"39016\",\"banner_tag\":\"517特惠\",\"volume\":\"200g\",\"guide_price\":\"19.9\",\"price\":\"9.9\"},{\"title\":\"燕太太尊品燕窝粽\",\"subtitle\":\" 燕舞浓情 美味出“粽”\",\"image\":\"images/product_pic/1-370x370-8309-D92CRCUW.jpg\",\"product_id\":\"39014\",\"banner_tag\":\"\",\"volume\":\"480g\",\"guide_price\":\"228\",\"price\":\"228\"},{\"title\":\"炫迈活力蓝莓味28片无糖口香糖\",\"subtitle\":\"美味持久 久到离谱\",\"image\":\"images/product_pic/1-370x370-8302-AP8FBAFT.jpg\",\"product_id\":\"39002\",\"banner_tag\":\"\",\"volume\":\"1盒\",\"guide_price\":\"10.9\",\"price\":\"10.9\"},{\"title\":\"LU露怡巧克力味香脆威化卷饼干 \",\"subtitle\":\"浓厚酥脆 伴手礼的上佳选择\",\"image\":\"images/product_pic/1-370x370-8301-18615K57.jpg\",\"product_id\":\"39001\",\"banner_tag\":\"517特惠\",\"volume\":\"234g\",\"guide_price\":\"32.8\",\"price\":\"29.9\"},{\"title\":\"泰国山竹\",\"subtitle\":\"5-6A高品质  大果 , 肉更饱满\",\"image\":\"images/product_pic/1-370x370-639-CFYK9T3B.jpg\",\"product_id\":\"28242\",\"banner_tag\":\"\",\"volume\":\"1kg\",\"guide_price\":\"79\",\"price\":\"59.9\"},{\"title\":\"优选四川安岳柠檬\",\"subtitle\":\"酸而不涩 泡茶&料理都方便\",\"image\":\"images/product_pic/1-370x370-34-HC5KWXT6.jpg\",\"product_id\":\"26485\",\"banner_tag\":\"\",\"volume\":\"8个\",\"guide_price\":\"0\",\"price\":\"19.9\"}]},{\"image\":\"images/crunchies-seasonal.jpg\",\"id\":0,\"hs_more\":1,\"content\":[{\"title\":\"象山白沙枇杷\",\"subtitle\":\"五月天枇杷甜 时令只仙10天\",\"image\":\"images/product_pic/1-370x370-6628-4WCXAA47.jpg\",\"product_id\":\"39122\",\"banner_tag\":\"\",\"volume\":\"1kg\",\"guide_price\":\"69.9\",\"price\":\"69.9\"},{\"title\":\"泰国释迦\",\"subtitle\":\"软了才能吃 这滋味比蜜甜\",\"image\":\"images/product_pic/1-370x370-5921-633S16W2.jpg\",\"product_id\":\"35871\",\"banner_tag\":\"\",\"volume\":\"2个\",\"guide_price\":\"99\",\"price\":\"99\"},{\"title\":\"新西兰皇后红玫瑰苹果\",\"subtitle\":\"带着玫瑰的红 透着玫瑰清香\",\"image\":\"images/product_pic/1-370x370-5412-2B6T95A6.jpg\",\"product_id\":\"34542\",\"banner_tag\":\"\",\"volume\":\"20个\",\"guide_price\":\"99\",\"price\":\"89\"},{\"title\":\"新西兰皇家姬娜苹果\",\"subtitle\":\"红苹果+蛇果 融合多滋果味\",\"image\":\"images/product_pic/1-370x370-2095-A5RRT2SA.jpg\",\"product_id\":\"25513\",\"banner_tag\":\"\",\"volume\":\"20个\",\"guide_price\":\"89\",\"price\":\"89\"},{\"title\":\"优选新奇士美国晚熟脐橙 \",\"subtitle\":\"纯甜多汁 黑标荣誉\",\"image\":\"images/product_pic/1-370x370-2172-F276S25T.jpg\",\"product_id\":\"35189\",\"banner_tag\":\"\",\"volume\":\"6个\",\"guide_price\":\"39.4\",\"price\":\"49.9\"},{\"title\":\"金蜜香芒果\",\"subtitle\":\"甜糯金灿灿 甜品界主力\",\"image\":\"images/product_pic/1-370x370-684-1FDTPBF7.jpg\",\"product_id\":\"33253\",\"banner_tag\":\"\",\"volume\":\"2kg\",\"guide_price\":\"69.9\",\"price\":\"69.9\"},{\"title\":\"海南小台农芒果\",\"subtitle\":\"小巧甜糯 萌翻掌心 \",\"image\":\"images/product_pic/1-370x370-27-U6A6HP4U.jpg\",\"product_id\":\"37270\",\"banner_tag\":\"\",\"volume\":\"2kg\",\"guide_price\":\"69.9\",\"price\":\"49.9\"},{\"title\":\"菲律宾凤梨\",\"subtitle\":\"清甜滋味无需盐水\",\"image\":\"images/product_pic/1-370x370-13648-5161P137.jpg\",\"product_id\":\"13648\",\"banner_tag\":\"\",\"volume\":\"1个\",\"guide_price\":\"29.9\",\"price\":\"19.9\"}]}]}");

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 34:
/*!******************************************************!*\
  !*** D:/WeChat/Sgoly/static/data/category_list.json ***!
  \******************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":\"478\",\"name\":\"新品尝鲜\"},{\"id\":\"18\",\"name\":\"新鲜水果\"},{\"id\":\"126\",\"name\":\"礼盒券卡\"},{\"id\":\"12\",\"name\":\"肉禽蛋类\"},{\"id\":\"11\",\"name\":\"水产海鲜\"},{\"id\":\"17\",\"name\":\"时令鲜蔬\"},{\"id\":\"14\",\"name\":\"乳品速食\"}]");

/***/ }),

/***/ 35:
/*!*********************************************************************!*\
  !*** D:/WeChat/Sgoly/static/data sync ^\.\/category_list_.*\.json$ ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./category_list_11.json": 36,
	"./category_list_12.json": 37,
	"./category_list_126.json": 38,
	"./category_list_14.json": 39,
	"./category_list_17.json": 40,
	"./category_list_18.json": 41,
	"./category_list_478.json": 42
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 35;

/***/ }),

/***/ 36:
/*!*********************************************************!*\
  !*** D:/WeChat/Sgoly/static/data/category_list_11.json ***!
  \*********************************************************/
/*! exports provided: 0, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"className\":{\"id\":\"20\",\"name\":\"冷冻水产\"},\"classGroup\":[{\"id\":\"37\",\"name\":\"虾/虾仁\",\"class_photo\":\"images/group/7ceee0b318aeef8c8a15143df51c7d62.png\"},{\"id\":\"36\",\"name\":\"冷冻鱼类\",\"class_photo\":\"images/group/b04f99297c25b5296fe4a49ba86dfc40.png\"},{\"id\":\"453\",\"name\":\"鳕鱼/三文鱼\",\"class_photo\":\"images/group/8eebc2d05564ef334f8b897e6bf15dd7.jpg\"},{\"id\":\"39\",\"name\":\"冷冻贝类\",\"class_photo\":\"images/group/8e3971e3ccc08b2d6a3ea708a000433b.png\"}]}]");

/***/ }),

/***/ 37:
/*!*********************************************************!*\
  !*** D:/WeChat/Sgoly/static/data/category_list_12.json ***!
  \*********************************************************/
/*! exports provided: 0, 1, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"className\":{\"id\":\"22\",\"name\":\"肉禽\"},\"classGroup\":[{\"id\":\"52\",\"name\":\"猪肉类\",\"class_photo\":\"images/group/5360b8581004a448d2e8753b1df64611.png\"},{\"id\":\"49\",\"name\":\"牛排\",\"class_photo\":\"images/group/73ff8b6768778a917bc37f47c5dc5870.png\"},{\"id\":\"50\",\"name\":\"牛肉类\",\"class_photo\":\"images/group/d9f4786bcd7d9d01a508ddeb10b52d60.png\"},{\"id\":\"455\",\"name\":\"鸡/鸭/鸽\",\"class_photo\":\"images/group/cb3780ba3b18be6f501ce556d22d8c7e.jpg\"},{\"id\":\"51\",\"name\":\"羊肉类\",\"class_photo\":\"images/group/8d0fe9d2a285e649f55ac4ccbf72f7aa.png\"},{\"id\":\"53\",\"name\":\"火锅食材\",\"class_photo\":\"images/group/d5226a53b1ec98857bab8c8997305203.png\"},{\"id\":\"456\",\"name\":\"腌腊类\",\"class_photo\":\"images/group/d6c9c5063723e1fd88160a0ac44cf06c.jpg\"},{\"id\":\"318\",\"name\":\"肉制品\",\"class_photo\":\"images/group/987ce523de394ab112808221b1a6243a.jpg\"}]},{\"className\":{\"id\":\"23\",\"name\":\"蛋类\"},\"classGroup\":[{\"id\":\"56\",\"name\":\"蛋类\",\"class_photo\":\"images/group/9a594a3ad0f08980390aa51a464bd207.png\"},{\"id\":\"454\",\"name\":\"其他蛋类\",\"class_photo\":\"images/group/a16111ade1910ee015528572bc357614.jpg\"}]}]");

/***/ }),

/***/ 38:
/*!**********************************************************!*\
  !*** D:/WeChat/Sgoly/static/data/category_list_126.json ***!
  \**********************************************************/
/*! exports provided: 0, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"className\":{\"id\":\"130\",\"name\":\"礼盒券卡\"},\"classGroup\":[{\"id\":\"393\",\"name\":\"端午礼盒\",\"class_photo\":\"images/group/3862ea6e094bf6ab86965a4c54e26d07.jpg\"},{\"id\":\"131\",\"name\":\"礼盒礼篮\",\"class_photo\":\"images/group/a3574ecf1be3335670b2f4adf2505e5f.png\"},{\"id\":\"133\",\"name\":\"组合套餐\",\"class_photo\":\"images/group/0ae6677c9212a93b1b96b7a952106d00.png\"},{\"id\":\"140\",\"name\":\"充值券卡\",\"class_photo\":\"images/group/04f0353ca9b26daba77fb1cc45067814.jpg\"},{\"id\":\"302\",\"name\":\"水果礼盒\",\"class_photo\":\"images/group/7bc173ccb6af9d55007c3b17dfaf60e4.png\"},{\"id\":\"432\",\"name\":\"新年礼盒\",\"class_photo\":\"images/group/d1768a813d614b62870ef7bf2293af9e.jpg\"}]}]");

/***/ }),

/***/ 39:
/*!*********************************************************!*\
  !*** D:/WeChat/Sgoly/static/data/category_list_14.json ***!
  \*********************************************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"className\":{\"id\":\"26\",\"name\":\"低温速食\"},\"classGroup\":[{\"id\":\"75\",\"name\":\"面点/面食\",\"class_photo\":\"images/group/b4f08f5e692f0cdd9f87655a46d3541a.png\"},{\"id\":\"468\",\"name\":\"香肠/培根\",\"class_photo\":\"images/group/3396a5d318d524ca22e4f324d64fea9e.jpg\"},{\"id\":\"459\",\"name\":\"麦片\",\"class_photo\":\"images/group/adb3c3abbb7fcf4cebdb213fe394159c.jpg\"},{\"id\":\"76\",\"name\":\"火锅配料\",\"class_photo\":\"images/group/05739f6e24bd956d33d4c236b65712d9.png\"},{\"id\":\"78\",\"name\":\"特色速食\",\"class_photo\":\"images/group/89b10aefeac321c53601fb172b5b3a04.jpg\"},{\"id\":\"352\",\"name\":\"汤圆\",\"class_photo\":\"images/group/49fcbda6f76bd5692328f383998fb930.jpg\"},{\"id\":\"281\",\"name\":\"冷冻食品\",\"class_photo\":\"images/group/3345cf3a118ec88effa1bf7199d6714c.jpg\"},{\"id\":\"415\",\"name\":\"粽子/月饼\",\"class_photo\":\"images/group/e6763ad9e4dc27a282f4291e32bb4e7a.jpg\"}]},{\"className\":{\"id\":\"25\",\"name\":\"乳制品\"},\"classGroup\":[{\"id\":\"73\",\"name\":\"黄油奶酪\",\"class_photo\":\"images/group/5224c630697c625ec1158174250d694e.jpg\"},{\"id\":\"74\",\"name\":\"乳酸菌\",\"class_photo\":\"images/group/8da13b8331bcff0b1e0a9cd846eb00b8.png\"},{\"id\":\"148\",\"name\":\"常温牛奶\",\"class_photo\":\"images/group/b881e9de9104f999d9adc896ee6fecbc.jpg\"},{\"id\":\"147\",\"name\":\"豆浆豆奶\",\"class_photo\":\"images/group/0da8ca4fc4f59f6a77d39f8fd3bc1c6d.jpg\"}]},{\"className\":{\"id\":\"461\",\"name\":\"面包糕点\"},\"classGroup\":[{\"id\":\"462\",\"name\":\"面包糕点\",\"class_photo\":\"images/group/273ed2e390dd412b2358a9ab84148ca4.jpg\"}]}]");

/***/ }),

/***/ 4:
/*!**********************************!*\
  !*** D:/WeChat/Sgoly/pages.json ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 40:
/*!*********************************************************!*\
  !*** D:/WeChat/Sgoly/static/data/category_list_17.json ***!
  \*********************************************************/
/*! exports provided: 0, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"className\":{\"id\":\"29\",\"name\":\"蔬菜\"},\"classGroup\":[{\"id\":\"93\",\"name\":\"根茎类\",\"class_photo\":\"images/group/796433e8799527d2cbb62a09783f8429.jpg\"},{\"id\":\"251\",\"name\":\"调味/香料\",\"class_photo\":\"images/group/4fb3bd8e189be96820acfeae52b68d2e.png\"}]}]");

/***/ }),

/***/ 41:
/*!*********************************************************!*\
  !*** D:/WeChat/Sgoly/static/data/category_list_18.json ***!
  \*********************************************************/
/*! exports provided: 0, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"className\":{\"id\":\"30\",\"name\":\"新鲜水果\"},\"classGroup\":[{\"id\":\"102\",\"name\":\"奇异果\",\"class_photo\":\"images/group/d466d77655a472123fe60b40c631f0cd.jpg\"},{\"id\":\"104\",\"name\":\"苹果\",\"class_photo\":\"images/group/46034f567b4f08768bdc7afd0f994c30.jpg\"},{\"id\":\"105\",\"name\":\"橙柑橘柚\",\"class_photo\":\"images/group/e1e72e3ceb13a326ddc19bf2ee227771.jpg\"},{\"id\":\"101\",\"name\":\"樱桃\",\"class_photo\":\"images/group/8f28a5033dc6e8a3964a47e43cb59945.png\"},{\"id\":\"106\",\"name\":\"梨\",\"class_photo\":\"images/group/3a2d34d744997150f98f72bda850844e.jpg\"},{\"id\":\"108\",\"name\":\"牛油果\",\"class_photo\":\"images/group/c9670c8de9054e868427d5c644447a92.jpg\"},{\"id\":\"111\",\"name\":\"热带水果\",\"class_photo\":\"images/group/e2d0a1a8bef94a00b968b21539b01b95.png\"},{\"id\":\"113\",\"name\":\"凤梨/菠萝\",\"class_photo\":\"images/group/e4a8035f0781d5422a304e621946ad7e.png\"},{\"id\":\"114\",\"name\":\"芒果\",\"class_photo\":\"images/group/7d045a7c1181878aa727e97c468d4670.jpg\"},{\"id\":\"115\",\"name\":\"柠檬\",\"class_photo\":\"images/group/d540710bd257faa963125323147608c9.jpg\"},{\"id\":\"117\",\"name\":\"火龙果\",\"class_photo\":\"images/group/be447c4904de275531e4025f95903d9c.jpg\"},{\"id\":\"118\",\"name\":\"瓜类\",\"class_photo\":\"images/group/29b6970e8817746bfee8daab24f5cf96.png\"},{\"id\":\"119\",\"name\":\"莲雾\",\"class_photo\":\"images/group/e061a1a12a2e66ae88b1ff9f220a064f.jpg\"},{\"id\":\"120\",\"name\":\"桃李杏梅\",\"class_photo\":\"images/group/d59d6cb3d59e4d64d49c798448200dd6.png\"},{\"id\":\"121\",\"name\":\"椰子\",\"class_photo\":\"images/group/302964c48685ce8693159f6f2a66c0f5.png\"},{\"id\":\"122\",\"name\":\"木瓜\",\"class_photo\":\"images/group/2cde1a29dd19cfaeb3e91df2f79b557b.jpg\"},{\"id\":\"143\",\"name\":\"特色鲜果\",\"class_photo\":\"images/group/3fc525e4eb1f27622f2d59b75ea69bd7.jpg\"}]}]");

/***/ }),

/***/ 42:
/*!**********************************************************!*\
  !*** D:/WeChat/Sgoly/static/data/category_list_478.json ***!
  \**********************************************************/
/*! exports provided: 0, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"className\":{\"id\":\"479\",\"name\":\"新品尝鲜\"},\"classGroup\":[{\"id\":\"480\",\"name\":\"每周上新\",\"class_photo\":\"images/group/ec55e7b3938d33268a4fa10f2e017e7b.jpg\"}]}]");

/***/ }),

/***/ 67:
/*!*******************************************************************!*\
  !*** D:/WeChat/Sgoly/static/data sync ^\.\/good_detail_.*\.json$ ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./good_detail_22877.json": 68,
	"./good_detail_31726.json": 69,
	"./good_detail_33563.json": 70,
	"./good_detail_38971.json": 71,
	"./good_detail_39122.json": 72
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 67;

/***/ }),

/***/ 68:
/*!**********************************************************!*\
  !*** D:/WeChat/Sgoly/static/data/good_detail_22877.json ***!
  \**********************************************************/
/*! exports provided: refundRule, productInfo, productItem, templateInfo, templatePhoto, expressMsg, sendTimeMsg, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"refundRule\":\"48小时退换货 ∙ 果园标准\",\"productInfo\":{\"product_name\":\"美国加州樱桃2160429104(22877)\",\"product_id\":\"22877\",\"product_desc\":\"一年仅一约 限量珍贵\",\"op_weight\":\"\",\"price\":\"138.00\",\"old_price\":\"138.00\",\"cart_tag\":\"\",\"stock\":\"9964\",\"cart_tag_list\":[],\"product_no\":\"2160429104\"},\"productItem\":[{\"id\":\"35075\",\"volume\":\"500g\",\"volume_num\":\"0\",\"volume_unit\":\"个\",\"price\":\"99.00\"},{\"id\":\"22877\",\"volume\":\"1kg|69元/斤\",\"volume_num\":\"1\",\"volume_unit\":\"kg\",\"price\":\"138.00\"}],\"templateInfo\":{\"desc_imgs\":[\"images/up_images/15894461422108.jpg\",\"images/up_images/14949933867329.jpg\",\"images/up_images/14949933872753.jpg\",\"images/up_images/14949933903480.jpg\",\"images/up_images/14949933918549.jpg\"],\"pro_info\":{\"origin\":\"产地\",\"originMsg\":\"美国\",\"explain\":\"果径\",\"explainMsg\":\"26-28mm\",\"store\":\"储藏方法\",\"storeMsg\":\"0°及以上冷藏\"},\"pro_desc\":\"一年一约，限量的美好全程冷链来自加州的新鲜硬度高樱味浓回味甘\"},\"templatePhoto\":[\"images/product_pic/1-370x370-2404-9PTW6BYS.jpg\",\"images/product_pic/1-370x370-2404-S4BTKX57.jpg\",\"images/product_pic/1-370x370-2404-82P97CTY.jpg\",\"images/product_pic/1-370x370-2404-42YA2SK3.jpg\",\"images/product_pic/1-370x370-2404-1FUPSYKP.jpg\"],\"expressMsg\":\"\",\"sendTimeMsg\":\"最快05月17日08:00-18:00送达\"}");

/***/ }),

/***/ 69:
/*!**********************************************************!*\
  !*** D:/WeChat/Sgoly/static/data/good_detail_31726.json ***!
  \**********************************************************/
/*! exports provided: refundRule, productInfo, productItem, templateInfo, templatePhoto, expressMsg, sendTimeMsg, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"refundRule\":\"48小时退换货 ∙ 果园标准\",\"productInfo\":{\"product_name\":\"海南妃子笑荔枝 2180530101(31726)\",\"product_id\":\"31726\",\"product_desc\":\"抢鲜一步 时令荔枝来了\",\"op_weight\":\"\",\"price\":\"59.90\",\"old_price\":\"59.90\",\"cart_tag\":\"\",\"stock\":\"99438\",\"cart_tag_list\":[],\"product_no\":\"2180530101\"},\"productItem\":[{\"id\":\"31726\",\"volume\":\"2.5kg|11.98元/斤\",\"volume_num\":\"2.5\",\"volume_unit\":\"kg\",\"price\":\"59.90\"}],\"templateInfo\":{\"desc_imgs\":[\"images/up_images/15877236579969.jpg\",\"images/up_images/15877236602204.jpg\",\"images/up_images/1587723662453.jpg\",\"images/up_images/15877236645658.jpg\",\"images/up_images/15877236674066.jpg\"],\"pro_info\":{\"origin\":\"产地\",\"originMsg\":\"中国\",\"explain\":\"营养元素\",\"explainMsg\":\"VB，VC\",\"store\":\"储藏方法\",\"storeMsg\":\"0°及以上冷藏\"},\"pro_desc\":\"嫩红泛青，正是新鲜皮薄肉厚核又小季节限定，不能少的甜\"},\"templatePhoto\":[\"images/product_pic/1-370x370-2383-WUDRUSXF.jpg\",\"images/product_pic/1-370x370-2383-R6UXAW45.jpg\",\"images/product_pic/1-370x370-2383-US7BWB2C.jpg\"],\"expressMsg\":\"\",\"sendTimeMsg\":\"最快05月17日08:00-18:00送达\"}");

/***/ }),

/***/ 70:
/*!**********************************************************!*\
  !*** D:/WeChat/Sgoly/static/data/good_detail_33563.json ***!
  \**********************************************************/
/*! exports provided: refundRule, productInfo, productItem, templateInfo, templatePhoto, promotion, promotionShare, expressMsg, sendTimeMsg, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"refundRule\":\"48小时退换货 ∙ 果园标准\",\"productInfo\":{\"product_name\":\"澳洲谷饲西冷牛排2181220111(33563)\",\"product_id\":\"33563\",\"product_desc\":\"筋肉相连 饕客有嚼头的香\",\"op_weight\":\"单袋150g\",\"price\":\"79.90\",\"old_price\":\"79.90\",\"cart_tag\":\"高性价比量贩\",\"stock\":\"1287\",\"cart_tag_list\":[\"517特惠\"],\"product_no\":\"2181220111\"},\"productItem\":[{\"id\":\"33563\",\"volume\":\"2袋|29.95元/袋\",\"volume_num\":\"2\",\"volume_unit\":\"袋\",\"price\":59.9}],\"templateInfo\":{\"desc_imgs\":[\"images/up_images/15416713861709.jpg\",\"images/up_images/1541671388619.jpg\",\"images/up_images/15416713902290.jpg\",\"images/up_images/15416713926130.jpg\"],\"pro_desc\":\"\"},\"templatePhoto\":[\"images/product_pic/1-370x370-6038-3WW4KT15.jpg\",\"images/product_pic/1-370x370-6038-WAKA3R53.jpg\",\"images/product_pic/1-370x370-6038-D6RP7D18.jpg\"],\"promotion\":[],\"promotionShare\":[],\"expressMsg\":\"\",\"sendTimeMsg\":\"最快05月17日08:00-18:00送达\"}");

/***/ }),

/***/ 71:
/*!**********************************************************!*\
  !*** D:/WeChat/Sgoly/static/data/good_detail_38971.json ***!
  \**********************************************************/
/*! exports provided: refundRule, productInfo, productItem, templateInfo, templatePhoto, expressMsg, sendTimeMsg, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"refundRule\":\"48小时退换货 ∙ 果园标准\",\"productInfo\":{\"product_name\":\"城超黑金猪肉粽21626968(38971)\",\"product_id\":\"38971\",\"product_desc\":\"扎实满口好料 豪横制霸端午\",\"op_weight\":\"180g/个\",\"price\":\"22.80\",\"old_price\":\"22.80\",\"cart_tag\":\"\",\"stock\":\"43\",\"cart_tag_list\":[],\"product_no\":\"21626968\"},\"productItem\":[{\"id\":\"38971\",\"volume\":\"2个\",\"volume_num\":\"0\",\"volume_unit\":\"袋\",\"price\":\"22.80\"}],\"templateInfo\":{\"desc_imgs\":[\"images/up_images/15894243283896.jpg\",\"images/up_images/15894243319213.jpg\",\"images/up_images/15894243333697.jpg\",\"images/up_images/15894243368442.jpg\"],\"pro_desc\":\"\"},\"templatePhoto\":[\"images/product_pic/1-370x370-8286-T4C369K2.jpg\",\"images/product_pic/1-370x370-8286-BCXWXDAS.jpg\",\"images/product_pic/1-370x370-8286-4RXXPDY3.jpg\",\"images/product_pic/1-370x370-8286-5FP35CB4.jpg\",\"images/product_pic/1-370x370-8286-BWK3HY3F.jpg\"],\"expressMsg\":\"\",\"sendTimeMsg\":\"最快明天08:00-18:00送达\"}");

/***/ }),

/***/ 72:
/*!**********************************************************!*\
  !*** D:/WeChat/Sgoly/static/data/good_detail_39122.json ***!
  \**********************************************************/
/*! exports provided: refundRule, productInfo, productItem, templateInfo, templatePhoto, expressMsg, sendTimeMsg, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"refundRule\":\"48小时退换货 ∙ 果园标准\",\"productInfo\":{\"product_name\":\"象山白沙枇杷2200513190(39122)\",\"product_id\":\"39122\",\"product_desc\":\"五月天枇杷甜 时令只仙10天\",\"op_weight\":\"\",\"price\":\"69.90\",\"old_price\":\"69.90\",\"cart_tag\":\"\",\"stock\":\"9975\",\"cart_tag_list\":[],\"product_no\":\"2200513190\"},\"productItem\":[{\"id\":\"39121\",\"volume\":\"500g\",\"volume_num\":\"0\",\"volume_unit\":\"个\",\"price\":\"39.90\"},{\"id\":\"39122\",\"volume\":\"1kg|34.95元/斤\",\"volume_num\":\"1\",\"volume_unit\":\"kg\",\"price\":\"69.90\"}],\"templateInfo\":{\"desc_imgs\":[\"images/up_images/15578990655355.jpg\",\"images/up_images/15578990661361.jpg\",\"images/up_images/15578990683798.jpg\",\"images/up_images/15578990714075.jpg\"],\"pro_desc\":null},\"templatePhoto\":[\"images/product_pic/1-370x370-6628-4KH7K733.jpg\",\"images/product_pic/1-370x370-6628-YUKXP69U.jpg\",\"images/product_pic/1-370x370-6628-T52146KT.jpg\"],\"expressMsg\":\"\",\"sendTimeMsg\":\"最快明天08:00-18:00送达\"}");

/***/ }),

/***/ 81:
/*!**************************************************************!*\
  !*** D:/WeChat/Sgoly/static/data/sub_category_list_480.json ***!
  \**************************************************************/
/*! exports provided: 0, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":0,\"name\":\"每周上新\",\"productGroup\":[{\"product_name\":\"LU露怡巧克力味香脆威化卷饼干  234g\",\"id\":\"39001\",\"cart_tag\":\"\",\"unit\":\"盒 \",\"volume\":\"234g\",\"price\":29.9,\"volume_num\":\"0\",\"volume_unit\":\"个\",\"product_desc\":\"浓厚酥脆 伴手礼的上佳选择\",\"photo\":\"images/product_pic/1-270x270-8301-B6RKK82S.jpg\",\"sales\":\"22\",\"product_no\":\"2200429108\",\"cart_tag_list\":[\"517特惠\"]},{\"product_name\":\"Totaste（土斯）九蔬小饼 200g         200g\",\"id\":\"39016\",\"cart_tag\":\"\",\"unit\":\"盒 \",\"volume\":\"200g\",\"price\":9.9,\"volume_num\":\"0\",\"volume_unit\":\"个\",\"product_desc\":\"严选食材 香脆可口\",\"photo\":\"images/product_pic/1-270x270-8311-RKFSC1TF.jpg\",\"sales\":\"25\",\"product_no\":\"2200430107\",\"cart_tag_list\":[\"517特惠\"]},{\"product_name\":\"麦克斯裸气泡酒青柠味（配制酒） 6罐\",\"id\":\"39093\",\"cart_tag\":\"\",\"unit\":\"盒 \",\"volume\":\"6罐|13.32元/罐\",\"price\":\"79.90\",\"volume_num\":\"6\",\"volume_unit\":\"罐\",\"product_desc\":\" 0糖低卡 7度微醺 清爽一夏\",\"photo\":\"images/product_pic/1-270x270-8338-982BA1FT.jpg\",\"sales\":\"1\",\"product_no\":\"2200508108\",\"cart_tag_list\":[\"限时8折\"]},{\"product_name\":\"麦克斯裸气泡酒柠檬味（配制酒）  6罐\",\"id\":\"39091\",\"cart_tag\":\"\",\"unit\":\"盒 \",\"volume\":\"6罐|13.32元/罐\",\"price\":\"79.90\",\"volume_num\":\"6\",\"volume_unit\":\"罐\",\"product_desc\":\"0糖低卡 5度微醺 柠香畅爽\",\"photo\":\"images/product_pic/1-270x270-8336-UDRY4X4P.jpg\",\"sales\":\"0\",\"product_no\":\"2200508104\",\"cart_tag_list\":[\"限时8折\"]},{\"product_name\":\"平行宇宙蜜桃乌龙茶金酒风味配制酒 6瓶\",\"id\":\"39098\",\"cart_tag\":\"\",\"unit\":\"盒 \",\"volume\":\"6瓶|14.8元/瓶\",\"price\":\"88.80\",\"volume_num\":\"6\",\"volume_unit\":\"瓶\",\"product_desc\":\"微醺真果汁 易醉少女也能喝\",\"photo\":\"images/product_pic/1-270x270-8340-WTP5WC9U.jpg\",\"sales\":\"0\",\"product_no\":\"2200508114\",\"cart_tag_list\":[]},{\"product_name\":\"平行宇宙荔枝朗姆酒风味配制酒 6瓶\",\"id\":\"39097\",\"cart_tag\":\"\",\"unit\":\"盒 \",\"volume\":\"6瓶|14.8元/瓶\",\"price\":\"88.80\",\"volume_num\":\"6\",\"volume_unit\":\"瓶\",\"product_desc\":\"甜心颜值   易醉少女也能喝\",\"photo\":\"images/product_pic/1-270x270-8339-S1TA4K96.jpg\",\"sales\":\"0\",\"product_no\":\"2200508110\",\"cart_tag_list\":[]},{\"product_name\":\"西贡小姐至臻虾条（原味） 75g\",\"id\":\"39019\",\"cart_tag\":\"\",\"unit\":\"袋 \",\"volume\":\"75g\",\"price\":\"14.80\",\"volume_num\":\"0\",\"volume_unit\":\"个\",\"product_desc\":\" 口口酥脆 鲜香味浓\",\"photo\":\"images/product_pic/1-270x270-8315-K6651BUF.jpg\",\"sales\":\"27\",\"product_no\":\"2200430105\",\"cart_tag_list\":[]},{\"product_name\":\"西贡小姐菠萝蜜干 100g\",\"id\":\"39018\",\"cart_tag\":\"\",\"unit\":\"袋 \",\"volume\":\"100g\",\"price\":\"14.60\",\"volume_num\":\"0\",\"volume_unit\":\"个\",\"product_desc\":\"大块果肉 自然甜蜜\",\"photo\":\"images/product_pic/1-270x270-8314-4AP9UFBA.jpg\",\"sales\":\"12\",\"product_no\":\"2200430101\",\"cart_tag_list\":[]},{\"product_name\":\" 西贡小姐综合蔬果干 100g\",\"id\":\"39017\",\"cart_tag\":\"\",\"unit\":\"袋 \",\"volume\":\"100g\",\"price\":\"13.60\",\"volume_num\":\"0\",\"volume_unit\":\"个\",\"product_desc\":\"多种甜美 一袋尽收\",\"photo\":\"images/product_pic/1-270x270-8313-KDPD31CY.jpg\",\"sales\":\"20\",\"product_no\":\"2200430103\",\"cart_tag_list\":[]},{\"product_name\":\"燕太太裕品燕窝粽 780g\",\"id\":\"39015\",\"cart_tag\":\"\",\"unit\":\"盒 \",\"volume\":\"780g\",\"price\":\"388.00\",\"volume_num\":\"0\",\"volume_unit\":\"个\",\"product_desc\":\"营养加倍 美味更出“粽”\",\"photo\":\"images/product_pic/1-270x270-8310-RA23X9CU.jpg\",\"sales\":\"0\",\"product_no\":\"2200416153\",\"cart_tag_list\":[]},{\"product_name\":\"西贡小姐芭蕉干 100g\",\"id\":\"39021\",\"cart_tag\":\"\",\"unit\":\"袋 \",\"volume\":\"100g\",\"price\":\"13.60\",\"volume_num\":\"0\",\"volume_unit\":\"个\",\"product_desc\":\"脆甜不腻 果肉饱满\",\"photo\":\"images/product_pic/1-270x270-8312-AB6KBF1U.jpg\",\"sales\":\"10\",\"product_no\":\"2200430102\",\"cart_tag_list\":[]},{\"product_name\":\"吾皇万睡礼品粽 1kg\",\"id\":\"39139\",\"cart_tag\":\"\",\"unit\":\"盒 \",\"volume\":\"1kg\",\"price\":\"168.00\",\"volume_num\":\"0\",\"volume_unit\":\"个\",\"product_desc\":\"吾皇万睡礼品粽\",\"photo\":\"images/product_pic/1-270x270-8358-HX183UHD.jpg\",\"sales\":\"0\",\"product_no\":\"2200511121\",\"cart_tag_list\":[]},{\"product_name\":\"西贡小姐至臻虾条（劲辣） 75g\",\"id\":\"39022\",\"cart_tag\":\"\",\"unit\":\"袋 \",\"volume\":\"75g\",\"price\":\"14.80\",\"volume_num\":\"0\",\"volume_unit\":\"个\",\"product_desc\":\" 口口酥脆 鲜辣味浓\",\"photo\":\"images/product_pic/1-270x270-39022-YXD7Y99A.jpg\",\"sales\":\"9\",\"product_no\":\"2200430106\",\"cart_tag_list\":[]},{\"product_name\":\"炫迈活力蓝莓味28片无糖口香糖 1盒\",\"id\":\"39002\",\"cart_tag\":\"\",\"unit\":\"盒 \",\"volume\":\"1盒\",\"price\":\"10.90\",\"volume_num\":\"0\",\"volume_unit\":\"个\",\"product_desc\":\"美味持久 久到离谱\",\"photo\":\"images/product_pic/1-270x270-8302-15WA925T.jpg\",\"sales\":\"12\",\"product_no\":\"2200429112\",\"cart_tag_list\":[]},{\"product_name\":\"燕太太尊品燕窝粽 480g\",\"id\":\"39014\",\"cart_tag\":\"\",\"unit\":\"盒 \",\"volume\":\"480g\",\"price\":\"228.00\",\"volume_num\":\"0\",\"volume_unit\":\"个\",\"product_desc\":\" 燕舞浓情 美味出“粽”\",\"photo\":\"images/product_pic/1-270x270-8309-7W6X8HKS.jpg\",\"sales\":\"0\",\"product_no\":\"2200416152\",\"cart_tag_list\":[]},{\"product_name\":\"泰国山竹 1kg\",\"id\":\"28242\",\"cart_tag\":\"\",\"unit\":\"盒 \",\"volume\":\"1kg|29.95元/斤\",\"price\":\"59.90\",\"volume_num\":\"1\",\"volume_unit\":\"kg\",\"product_desc\":\"5-6A高品质  大果 , 肉更饱满\",\"photo\":\"images/product_pic/1-270x270-639-F57R6U36.jpg\",\"sales\":\"101\",\"product_no\":\"2160527101\",\"cart_tag_list\":[]},{\"product_name\":\"象山白沙枇杷 1kg\",\"id\":\"39122\",\"cart_tag\":\"\",\"unit\":\"盒 \",\"volume\":\"1kg|34.95元/斤\",\"price\":\"69.90\",\"volume_num\":\"1\",\"volume_unit\":\"kg\",\"product_desc\":\"五月天枇杷甜 时令只仙10天\",\"photo\":\"images/product_pic/1-270x270-6628-4KH7K733.jpg\",\"sales\":\"199\",\"product_no\":\"2200513190\",\"cart_tag_list\":[]},{\"product_name\":\"泰国释迦 2个\",\"id\":\"35871\",\"cart_tag\":\"新品\",\"unit\":\"盒 \",\"volume\":\"2个|49.5元/个\",\"price\":\"99.00\",\"volume_num\":\"2\",\"volume_unit\":\"个\",\"product_desc\":\"软了才能吃 这滋味比蜜甜\",\"photo\":\"images/product_pic/1-270x270-5921-33TRSFWR.jpg\",\"sales\":\"20\",\"product_no\":\"2190824109\",\"cart_tag_list\":[]}]}]");

/***/ }),

/***/ 90:
/*!************************************************************!*\
  !*** D:/WeChat/Sgoly/static/data/sub_category_list_0.json ***!
  \************************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":0,\"name\":\"全部\",\"productGroup\":[{\"stock\":\"129\",\"product_name\":\"台湾蜜糖凤梨 1个\",\"id\":\"38189\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"1个\",\"price\":\"49.90\",\"volume_num\":\"0\",\"volume_unit\":\"个\",\"product_desc\":\"甜到果心里的“糖罐子”\",\"photo\":\"images/product_pic/1-270x270-8004-UYSXRC4F.jpg\",\"sales\":\"217\",\"product_no\":\"2190604109\",\"is_oversale\":0},{\"stock\":\"726\",\"product_name\":\"优选佳沛新西兰阳光金奇异果 8个\",\"id\":\"35369\",\"cart_tag\":\"预售\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"8个\",\"price\":\"79.00\",\"volume_num\":\"0\",\"volume_unit\":\"个\",\"product_desc\":\"每天一颗 水润超甜蜜\",\"photo\":\"images/product_pic/1-270x270-2208-Y6DCKRHT.jpg\",\"sales\":\"566\",\"product_no\":\"2170407471\",\"is_oversale\":0},{\"stock\":\"765\",\"product_name\":\"优选佳沛新西兰阳光金奇异果 （原箱） 30个\",\"id\":\"34408\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"箱\",\"volume\":\"30个|6.63元/个\",\"price\":\"199.00\",\"volume_num\":\"30\",\"volume_unit\":\"个\",\"product_desc\":\"丰富vc营养 唤醒每日活力\",\"photo\":\"images/product_pic/1-270x270-2602-6SSUPRP5.jpg\",\"sales\":\"87\",\"product_no\":\"2181213102\",\"is_oversale\":0},{\"stock\":\"888\",\"product_name\":\"佳沛新西兰阳光金奇异果(巨无霸) 6个\",\"id\":\"34432\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"6个|13.17元/个\",\"price\":\"79.00\",\"volume_num\":\"6\",\"volume_unit\":\"个\",\"product_desc\":\"能量巨果 一口爆浆过瘾\",\"photo\":\"images/product_pic/1-270x270-2602-6SSUPRP5.jpg\",\"sales\":\"46\",\"product_no\":\"2150414102\",\"is_oversale\":0},{\"stock\":\"951\",\"product_name\":\"南汇玉菇甜瓜 4个\",\"id\":\"38575\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"4个|22.25元/个\",\"price\":\"89.00\",\"volume_num\":\"4\",\"volume_unit\":\"个\",\"product_desc\":\"上海小菇凉 酥酥的甜\",\"photo\":\"images/product_pic/1-270x270-2235-4PRUT56X.jpg\",\"sales\":\"459\",\"product_no\":\"2190511101\",\"is_oversale\":0},{\"stock\":\"987\",\"product_name\":\"百香果柠檬组合 百香果4个+柠檬2个\",\"id\":\"32113\",\"cart_tag\":\"网红茶CP\",\"is_present\":\"1\",\"unit\":\"袋 \",\"volume\":\"百香果4个+柠檬2个\",\"price\":\"19.90\",\"volume_num\":\"0\",\"volume_unit\":\"个\",\"product_desc\":\"网红茶cp 夏日爱喝酸甜味\",\"photo\":\"images/product_pic/1-270x270-32113-7R871CUB.jpg\",\"sales\":\"487\",\"product_no\":\"2180705105\",\"is_oversale\":0},{\"stock\":\"988\",\"product_name\":\"都乐非转基因木瓜 2个\",\"id\":\"33157\",\"cart_tag\":\"新品\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"2个|14.9元/个\",\"price\":\"29.80\",\"volume_num\":\"2\",\"volume_unit\":\"个\",\"product_desc\":\"水分足热量低 女神的小甜心\",\"photo\":\"images/product_pic/1-270x270-6417-P3YCPHS3.jpg\",\"sales\":\"334\",\"product_no\":\"2181104101\",\"is_oversale\":0},{\"stock\":\"990\",\"product_name\":\"精选百香果 12个\",\"id\":\"35420\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"12个|2.49元/个\",\"price\":\"29.90\",\"volume_num\":\"12\",\"volume_unit\":\"个\",\"product_desc\":\"添一勺蜂蜜 变身网红果茶\",\"photo\":\"images/product_pic/1-270x270-602-8K21Y6YK.jpg\",\"sales\":\"33\",\"product_no\":\"2190505103\",\"is_oversale\":0},{\"stock\":\"996\",\"product_name\":\"精选百香果  6个\",\"id\":\"11997\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"6个|3.32元/个\",\"price\":\"19.90\",\"volume_num\":\"6\",\"volume_unit\":\"个\",\"product_desc\":\"添一勺蜂蜜 变身网红果茶\",\"photo\":\"images/product_pic/1-270x270-602-8K21Y6YK.jpg\",\"sales\":\"427\",\"product_no\":\"2150721101\",\"is_oversale\":0},{\"stock\":\"997\",\"product_name\":\"都乐非转基因木瓜 4个\",\"id\":\"33158\",\"cart_tag\":\"新品\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"4个|14.75元/个\",\"price\":\"59.00\",\"volume_num\":\"4\",\"volume_unit\":\"个\",\"product_desc\":\"水分足热量低 女神的小甜心\",\"photo\":\"images/product_pic/1-270x270-6020-Y46RA9FT.jpg\",\"sales\":\"13\",\"product_no\":\"2181104102\",\"is_oversale\":0},{\"stock\":\"5779\",\"product_name\":\"新西兰Rockit小苹果 1管\",\"id\":\"22094\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"1管\",\"price\":\"49.90\",\"volume_num\":\"0\",\"volume_unit\":\"个\",\"product_desc\":\"这颗美好握得住 \",\"photo\":\"images/product_pic/1-270x270-2257-9R2PTPKS.jpg\",\"sales\":\"32\",\"product_no\":\"2161008103\",\"is_oversale\":0},{\"stock\":\"8758\",\"product_name\":\"菲律宾凤梨 1个\",\"id\":\"13648\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"个\",\"volume\":\"1个\",\"price\":\"19.90\",\"volume_num\":\"0\",\"volume_unit\":\"个\",\"product_desc\":\"清甜滋味无需盐水\",\"photo\":\"images/product_pic/1-270x270-13648-YFC12APT.jpg\",\"sales\":\"120\",\"product_no\":\"BOX0142\",\"is_oversale\":0},{\"stock\":\"9440\",\"product_name\":\"海南小台农芒果 1kg\",\"id\":\"37269\",\"cart_tag\":\"新品\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"1kg|14.95元/斤\",\"price\":\"29.90\",\"volume_num\":\"1\",\"volume_unit\":\"kg\",\"product_desc\":\"小巧甜糯 萌翻掌心 \",\"photo\":\"images/product_pic/1-270x270-27-DRXW9AYR.jpg\",\"sales\":\"343\",\"product_no\":\"2160310103\",\"is_oversale\":0},{\"stock\":\"9533\",\"product_name\":\"山东富士苹果 5kg\",\"id\":\"37801\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"5kg|8.9元/斤\",\"price\":\"89.00\",\"volume_num\":\"5\",\"volume_unit\":\"kg\",\"product_desc\":\"记忆中的苹果甜\",\"photo\":\"images/product_pic/1-270x270-624-85338XKK.jpg\",\"sales\":\"698\",\"product_no\":\"2200206104\",\"is_oversale\":0},{\"stock\":\"9537\",\"product_name\":\"海南小台农芒果 2kg\",\"id\":\"37270\",\"cart_tag\":\"新品\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"2kg|12.48元/斤\",\"price\":\"49.90\",\"volume_num\":\"2\",\"volume_unit\":\"kg\",\"product_desc\":\"小巧甜糯 萌翻掌心 \",\"photo\":\"images/product_pic/1-270x270-27-DRXW9AYR.jpg\",\"sales\":\"928\",\"product_no\":\"2150313109\",\"is_oversale\":0},{\"stock\":\"9720\",\"product_name\":\"新奇士美国晚熟脐橙  24个\",\"id\":\"38549\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"24个|4.13元/个\",\"price\":\"99.00\",\"volume_num\":\"24\",\"volume_unit\":\"个\",\"product_desc\":\"晒足3000小时的黑标甜\",\"photo\":\"images/product_pic/1-270x270-2602-6SSUPRP5.jpg\",\"sales\":\"2056\",\"product_no\":\"2200327106\",\"is_oversale\":0},{\"stock\":\"9743\",\"product_name\":\"甄选佳沛新西兰阳光金奇异果（原箱） 27个\",\"id\":\"38339\",\"cart_tag\":\"\",\"is_present\":\"0\",\"unit\":\"盒 \",\"volume\":\"27个|7.74元/个\",\"price\":\"209.00\",\"volume_num\":\"27\",\"volume_unit\":\"个\",\"product_desc\":\"营养好吃 味道独特\",\"photo\":\"images/product_pic/1-270x270-38339-CC4FWP3T.jpg\",\"sales\":\"156\",\"product_no\":\"2160511107\",\"is_oversale\":0},{\"stock\":\"9746\",\"product_name\":\"优选新奇士美国晚熟脐橙 20个\",\"id\":\"34436\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"20个|6.4元/个\",\"price\":\"128.00\",\"volume_num\":\"20\",\"volume_unit\":\"个\",\"product_desc\":\"纯甜多汁 黑标荣誉\",\"photo\":\"images/product_pic/1-270x270-2172-WHBF41P9.jpg\",\"sales\":\"925\",\"product_no\":\"2170413106\",\"is_oversale\":0},{\"stock\":\"9806\",\"product_name\":\"山东富士苹果 2.5kg\",\"id\":\"37802\",\"cart_tag\":\"新品\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"2.5kg|9.98元/斤\",\"price\":\"49.90\",\"volume_num\":\"2.5\",\"volume_unit\":\"kg\",\"product_desc\":\"记忆中的苹果甜\",\"photo\":\"images/product_pic/1-270x270-624-85338XKK.jpg\",\"sales\":\"378\",\"product_no\":\"2200206103\",\"is_oversale\":0},{\"stock\":\"9809\",\"product_name\":\"嫩脆晓蜜瓜 2个\",\"id\":\"36484\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"\",\"volume\":\"2个|24.95元/个\",\"price\":\"49.90\",\"volume_num\":\"2\",\"volume_unit\":\"个\",\"product_desc\":\"脆口飚多汁 嚼到瓜皮也好甜​\",\"photo\":\"images/product_pic/1-270x270-6415-S2A2F6AP.jpg\",\"sales\":\"111\",\"product_no\":\"2171115111\",\"is_oversale\":0},{\"stock\":\"9844\",\"product_name\":\"佳沛新西兰阳光金奇异果(巨无霸plus) 18个原箱\",\"id\":\"32793\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"18个原箱\",\"price\":\"239.00\",\"volume_num\":\"0\",\"volume_unit\":\"个\",\"product_desc\":\"一口爆浆超过瘾\",\"photo\":\"images/product_pic/1-270x270-2392-2CU352TC.jpg\",\"sales\":\"68\",\"product_no\":\"2170413111\",\"is_oversale\":0},{\"stock\":\"9854\",\"product_name\":\"优选四川安岳柠檬 8个\",\"id\":\"26485\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒\",\"volume\":\"8个|2.49元/个\",\"price\":\"19.90\",\"volume_num\":\"8\",\"volume_unit\":\"个\",\"product_desc\":\"酸而不涩 泡茶&料理都方便\",\"photo\":\"images/product_pic/1-270x270-34-7RS4FC53.jpg\",\"sales\":\"311\",\"product_no\":\"2171012102\",\"is_oversale\":0},{\"stock\":\"9873\",\"product_name\":\"新西兰皇家姬娜苹果 6个\",\"id\":\"20714\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"6个|4.98元/个\",\"price\":\"29.90\",\"volume_num\":\"6\",\"volume_unit\":\"个\",\"product_desc\":\"新西兰苹果季回归 甜脆依旧\",\"photo\":\"images/product_pic/1-270x270-2095-UBXRCF6D.jpg\",\"sales\":\"43\",\"product_no\":\"2170322101\",\"is_oversale\":0},{\"stock\":\"9877\",\"product_name\":\"优选新奇士美国晚熟脐橙  6个\",\"id\":\"35189\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"6个|8.32元/个\",\"price\":\"49.90\",\"volume_num\":\"6\",\"volume_unit\":\"个\",\"product_desc\":\"纯甜多汁 黑标荣誉\",\"photo\":\"images/product_pic/1-270x270-2172-WHBF41P9.jpg\",\"sales\":\"37\",\"product_no\":\"2170405101\",\"is_oversale\":0},{\"stock\":\"9881\",\"product_name\":\"拇指青桔 500g\",\"id\":\"15719\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"500g\",\"price\":\"9.90\",\"volume_num\":\"0\",\"volume_unit\":\"个\",\"product_desc\":\"活力VC库 清新果饮作CP\",\"photo\":\"images/product_pic/1-270x270-2031-5HB8XY1D.jpg\",\"sales\":\"1227\",\"product_no\":\"2160705104\",\"is_oversale\":0},{\"stock\":\"9881\",\"product_name\":\"新西兰皇后红玫瑰苹果 20个\",\"id\":\"34542\",\"cart_tag\":\"新品\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"20个|4.45元/个\",\"price\":\"89.00\",\"volume_num\":\"20\",\"volume_unit\":\"个\",\"product_desc\":\"带着玫瑰的红 透着玫瑰清香\",\"photo\":\"images/product_pic/1-270x270-5412-RPTXPS55.jpg\",\"sales\":\"1047\",\"product_no\":\"2180425103\",\"is_oversale\":0},{\"stock\":\"9916\",\"product_name\":\"台湾金钻凤梨 1个\",\"id\":\"16300\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"1个\",\"price\":\"39.90\",\"volume_num\":\"0\",\"volume_unit\":\"个\",\"product_desc\":\"不用泡盐水 咬到果芯都好甜\",\"photo\":\"images/product_pic/1-270x270-8-B491CBYW.jpg\",\"sales\":\"6559\",\"product_no\":\"2150317101\",\"is_oversale\":0},{\"stock\":\"9917\",\"product_name\":\"台湾红心芭乐 1kg\",\"id\":\"34676\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"1kg|16.4元/斤\",\"price\":\"32.80\",\"volume_num\":\"1\",\"volume_unit\":\"kg\",\"product_desc\":\"蘸盐或梅粉 这样吃法更甜脆\",\"photo\":\"images/product_pic/1-270x270-6418-APF8DF95.jpg\",\"sales\":\"91\",\"product_no\":\"2190502103\",\"is_oversale\":0},{\"stock\":\"9921\",\"product_name\":\"南汇玉菇甜瓜 2个\",\"id\":\"38574\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"2个|24.95元/个\",\"price\":\"49.90\",\"volume_num\":\"2\",\"volume_unit\":\"个\",\"product_desc\":\"上海小菇凉 酥酥的甜\",\"photo\":\"images/product_pic/1-270x270-2235-4PRUT56X.jpg\",\"sales\":\"750\",\"product_no\":\"2150521104\",\"is_oversale\":0},{\"stock\":\"9927\",\"product_name\":\"佳沛新西兰阳光金奇异果(巨无霸plus) 6个\",\"id\":\"20792\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"6个|14.83元/个\",\"price\":\"89.00\",\"volume_num\":\"6\",\"volume_unit\":\"个\",\"product_desc\":\"一口爆浆超过瘾\",\"photo\":\"images/product_pic/1-270x270-2208-Y6DCKRHT.jpg\",\"sales\":\"36\",\"product_no\":\"2170329107\",\"is_oversale\":0},{\"stock\":\"9930\",\"product_name\":\"美国华盛顿甜脆红地厘蛇果 6个\",\"id\":\"27341\",\"cart_tag\":\"下单省10元\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"6个|9.98元/个\",\"price\":\"59.90\",\"volume_num\":\"6\",\"volume_unit\":\"个\",\"product_desc\":\"经典红果 甜脆出众\",\"photo\":\"images/product_pic/1-270x270-52-HF73PYWP.jpg\",\"sales\":\"73\",\"product_no\":\"2161103112\",\"is_oversale\":0},{\"stock\":\"9943\",\"product_name\":\"新西兰皇家姬娜苹果 20个\",\"id\":\"25513\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"20个|4.45元/个\",\"price\":\"89.00\",\"volume_num\":\"20\",\"volume_unit\":\"个\",\"product_desc\":\"红苹果+蛇果 融合多滋果味\",\"photo\":\"images/product_pic/1-270x270-2095-UBXRCF6D.jpg\",\"sales\":\"141\",\"product_no\":\"2170830111\",\"is_oversale\":0},{\"stock\":\"9945\",\"product_name\":\"四川枇杷 1kg\",\"id\":\"29411\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"1kg|34.95元/斤\",\"price\":\"69.90\",\"volume_num\":\"1\",\"volume_unit\":\"kg\",\"product_desc\":\"当季水嫩 何必再喝枇杷糖浆\",\"photo\":\"images/product_pic/1-270x270-4198-HS4RT67C.jpg\",\"sales\":\"285\",\"product_no\":\"2170221101\",\"is_oversale\":0},{\"stock\":\"9948\",\"product_name\":\"新西兰皇后红玫瑰苹果 6个\",\"id\":\"31188\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"6个|4.98元/个\",\"price\":\"29.90\",\"volume_num\":\"6\",\"volume_unit\":\"个\",\"product_desc\":\"带着玫瑰的红 透着玫瑰清香\",\"photo\":\"images/product_pic/1-270x270-5412-RPTXPS55.jpg\",\"sales\":\"39\",\"product_no\":\"2180424116\",\"is_oversale\":0},{\"stock\":\"9948\",\"product_name\":\"美国华盛顿甜脆红地厘蛇果 12个\",\"id\":\"27342\",\"cart_tag\":\"新品\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"12个|8.25元/个\",\"price\":\"99.00\",\"volume_num\":\"12\",\"volume_unit\":\"个\",\"product_desc\":\"经典红果 顶大低小\",\"photo\":\"images/product_pic/1-270x270-52-HF73PYWP.jpg\",\"sales\":\"48\",\"product_no\":\"201412023\",\"is_oversale\":0},{\"stock\":\"9949\",\"product_name\":\"新西兰爵士苹果 6个\",\"id\":\"22768\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"6个|4.98元/个\",\"price\":\"29.90\",\"volume_num\":\"6\",\"volume_unit\":\"个\",\"product_desc\":\"酸甜与爽脆的双重轻奏\",\"photo\":\"images/product_pic/1-270x270-2391-5387PUKS.jpg\",\"sales\":\"23\",\"product_no\":\"201410602\",\"is_oversale\":0},{\"stock\":\"9949\",\"product_name\":\"泰国山竹 1kg\",\"id\":\"28242\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"1kg|29.95元/斤\",\"price\":\"59.90\",\"volume_num\":\"1\",\"volume_unit\":\"kg\",\"product_desc\":\"5-6A高品质  大果 , 肉更饱满\",\"photo\":\"images/product_pic/1-270x270-639-F57R6U36.jpg\",\"sales\":\"101\",\"product_no\":\"2160527101\",\"is_oversale\":0},{\"stock\":\"9953\",\"product_name\":\"海南青柠檬 1kg\",\"id\":\"37854\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"1kg|12.95元/斤\",\"price\":\"25.90\",\"volume_num\":\"1\",\"volume_unit\":\"kg\",\"product_desc\":\"清香柠酸绿VC\",\"photo\":\"images/product_pic/1-270x270-2617-C4HC8AAP.jpg\",\"sales\":\"45\",\"product_no\":\"2170615103\",\"is_oversale\":0},{\"stock\":\"9954\",\"product_name\":\"新疆香梨 2kg\",\"id\":\"36097\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒\",\"volume\":\"2kg|14.98元/斤\",\"price\":\"59.90\",\"volume_num\":\"2\",\"volume_unit\":\"kg\",\"product_desc\":\"酥甜水嫩 小王子回归\",\"photo\":\"images/product_pic/1-270x270-70-H8CHR7XD.jpg\",\"sales\":\"341\",\"product_no\":\"2180922105\",\"is_oversale\":0},{\"stock\":\"9955\",\"product_name\":\"四川枇杷 500g\",\"id\":\"28043\",\"cart_tag\":\"新品\",\"is_present\":\"1\",\"unit\":\"份\",\"volume\":\"500g\",\"price\":\"39.90\",\"volume_num\":\"0\",\"volume_unit\":\"个\",\"product_desc\":\"当季水嫩 何必再喝枇杷糖浆\",\"photo\":\"images/product_pic/1-270x270-6597-1X944X4S.jpg\",\"sales\":\"287\",\"product_no\":\"2171128103\",\"is_oversale\":0},{\"stock\":\"9956\",\"product_name\":\"甄选佳沛新西兰阳光金奇异果 6个\",\"id\":\"38337\",\"cart_tag\":\"\",\"is_present\":\"0\",\"unit\":\"盒 \",\"volume\":\"6个|11.65元/个\",\"price\":\"69.90\",\"volume_num\":\"6\",\"volume_unit\":\"个\",\"product_desc\":\"营养好吃 味道独特\",\"photo\":\"images/product_pic/1-270x270-6488-93FUPWKP.jpg\",\"sales\":\"7\",\"product_no\":\"2170415101\",\"is_oversale\":0},{\"stock\":\"9959\",\"product_name\":\"甄选新西兰爱妃苹果 6个\",\"id\":\"38881\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"6个|13.17元/个\",\"price\":\"79.00\",\"volume_num\":\"6\",\"volume_unit\":\"个\",\"product_desc\":\"唯一的爱妃 大甜且脆\",\"photo\":\"images/product_pic/1-270x270-2546-DCPKPX7B.jpg\",\"sales\":\"36\",\"product_no\":\"2170810104\",\"is_oversale\":0},{\"stock\":\"9961\",\"product_name\":\"美国加州樱桃 1kg\",\"id\":\"22877\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"1kg|69元/斤\",\"price\":\"138.00\",\"volume_num\":\"1\",\"volume_unit\":\"kg\",\"product_desc\":\"一年仅一约 限量珍贵\",\"photo\":\"images/product_pic/1-270x270-2404-9PTW6BYS.jpg\",\"sales\":\"226\",\"product_no\":\"2160429104\",\"is_oversale\":0},{\"stock\":\"9962\",\"product_name\":\"泰国蜜柚 1个\",\"id\":\"25765\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒\",\"volume\":\"1个\",\"price\":\"49.90\",\"volume_num\":\"0\",\"volume_unit\":\"0\",\"product_desc\":\"柚香扑鼻 清甜多汁\",\"photo\":\"images/product_pic/1-270x270-5818-BSPUH133.jpg\",\"sales\":\"188\",\"product_no\":\"2160309102\",\"is_oversale\":0},{\"stock\":\"9971\",\"product_name\":\"新西兰皇后红玫瑰苹果（礼盒装） 20个\",\"id\":\"35476\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"20个|4.95元/个\",\"price\":\"99.00\",\"volume_num\":\"20\",\"volume_unit\":\"个\",\"product_desc\":\"带着玫瑰的红 透着玫瑰清香\",\"photo\":\"images/product_pic/1-270x270-35476-5SDYYY87.jpg\",\"sales\":\"151\",\"product_no\":\"2190725105\",\"is_oversale\":0},{\"stock\":\"9973\",\"product_name\":\"泰国白金蜜柚 2个\",\"id\":\"32376\",\"cart_tag\":\"新品\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"2个|44.5元/个\",\"price\":\"89.00\",\"volume_num\":\"2\",\"volume_unit\":\"个\",\"product_desc\":\"柚香扑鼻 清甜多汁\",\"photo\":\"images/product_pic/1-270x270-2232-AABB878P.jpg\",\"sales\":\"21\",\"product_no\":\"2160309103\",\"is_oversale\":0},{\"stock\":\"9975\",\"product_name\":\"象山白沙枇杷 1kg\",\"id\":\"39122\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"1kg|34.95元/斤\",\"price\":\"69.90\",\"volume_num\":\"1\",\"volume_unit\":\"kg\",\"product_desc\":\"五月天枇杷甜 时令只仙10天\",\"photo\":\"images/product_pic/1-270x270-6628-4KH7K733.jpg\",\"sales\":\"199\",\"product_no\":\"2200513190\",\"is_oversale\":0},{\"stock\":\"9978\",\"product_name\":\"新疆香梨 4kg\",\"id\":\"36098\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"4kg|12.38元/斤\",\"price\":\"99.00\",\"volume_num\":\"4\",\"volume_unit\":\"kg\",\"product_desc\":\"酥甜水嫩 小王子回归\",\"photo\":\"images/product_pic/1-270x270-70-H8CHR7XD.jpg\",\"sales\":\"194\",\"product_no\":\"2171121120\",\"is_oversale\":0},{\"stock\":\"9979\",\"product_name\":\"比利时啤梨 6个\",\"id\":\"38779\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"6个|6.65元/个\",\"price\":\"39.90\",\"volume_num\":\"6\",\"volume_unit\":\"个\",\"product_desc\":\"酥肉水润润 放软会更甜\",\"photo\":\"images/product_pic/1-270x270-66-8TP27KC1.jpg\",\"sales\":\"22\",\"product_no\":\"2181027104\",\"is_oversale\":0},{\"stock\":\"9988\",\"product_name\":\"台湾红心芭乐 2.5kg\",\"id\":\"34677\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"2.5kg|15.8元/斤\",\"price\":\"79.00\",\"volume_num\":\"2.5\",\"volume_unit\":\"kg\",\"product_desc\":\"蘸盐或梅粉 这样吃法更甜脆\",\"photo\":\"images/product_pic/1-270x270-6418-APF8DF95.jpg\",\"sales\":\"19\",\"product_no\":\"2190502104\",\"is_oversale\":0},{\"stock\":\"9991\",\"product_name\":\"海南大台农芒果 2.5kg\",\"id\":\"38859\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"2.5kg|11.98元/斤\",\"price\":\"59.90\",\"volume_num\":\"2.5\",\"volume_unit\":\"kg\",\"product_desc\":\"好喜欢这浓浓的芒果甜~\",\"photo\":\"images/product_pic/1-270x270-2077-X4AWA58W.jpg\",\"sales\":\"135\",\"product_no\":\"2200426119\",\"is_oversale\":0},{\"stock\":\"9992\",\"product_name\":\"象山白沙枇杷 500g\",\"id\":\"39121\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"500g\",\"price\":\"39.90\",\"volume_num\":\"0\",\"volume_unit\":\"个\",\"product_desc\":\"五月天枇杷甜 时令只仙10天\",\"photo\":\"images/product_pic/1-270x270-6628-4KH7K733.jpg\",\"sales\":\"65\",\"product_no\":\"220513191\",\"is_oversale\":0},{\"stock\":\"9993\",\"product_name\":\"海南大台农芒果 1kg\",\"id\":\"31643\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"1kg|14.95元/斤\",\"price\":\"29.90\",\"volume_num\":\"1\",\"volume_unit\":\"kg\",\"product_desc\":\"好喜欢这浓浓的芒果甜~\",\"photo\":\"images/product_pic/1-270x270-2077-X4AWA58W.jpg\",\"sales\":\"19\",\"product_no\":\"2150623132\",\"is_oversale\":0},{\"stock\":\"9994\",\"product_name\":\"新西兰Dazzle丹烁苹果 20个\",\"id\":\"35107\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"20个|4.95元/个\",\"price\":\"99.00\",\"volume_num\":\"20\",\"volume_unit\":\"个\",\"product_desc\":\"准备了20年的新品 咔擦上线​\",\"photo\":\"images/product_pic/1-270x270-35107-848RAYSD.jpg\",\"sales\":\"29\",\"product_no\":\"2190612119\",\"is_oversale\":0},{\"stock\":\"9996\",\"product_name\":\"泰国释迦 2个\",\"id\":\"35871\",\"cart_tag\":\"新品\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"2个|49.5元/个\",\"price\":\"99.00\",\"volume_num\":\"2\",\"volume_unit\":\"个\",\"product_desc\":\"软了才能吃 这滋味比蜜甜\",\"photo\":\"images/product_pic/1-270x270-5921-33TRSFWR.jpg\",\"sales\":\"20\",\"product_no\":\"2190824109\",\"is_oversale\":0},{\"stock\":\"9997\",\"product_name\":\"新西兰Dazzel丹烁苹果 6个\",\"id\":\"35016\",\"cart_tag\":\"新品\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"6个|6.65元/个\",\"price\":\"39.90\",\"volume_num\":\"6\",\"volume_unit\":\"个\",\"product_desc\":\"准备了20年的新品 咔擦上线​\",\"photo\":\"images/product_pic/1-270x270-6695-2UUC735P.jpg\",\"sales\":\"2\",\"product_no\":\"2190529103\",\"is_oversale\":0},{\"stock\":\"9997\",\"product_name\":\"都乐阿根廷帕克梨 4个\",\"id\":\"35226\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"4个|9.98元/个\",\"price\":\"39.90\",\"volume_num\":\"4\",\"volume_unit\":\"个\",\"product_desc\":\"一口爆汁 越软才越甜​\",\"photo\":\"images/product_pic/1-270x270-6787-DDU19P3H.jpg\",\"sales\":\"2\",\"product_no\":\"2190626110\",\"is_oversale\":0},{\"stock\":\"9999\",\"product_name\":\"都乐阿根廷帕克梨 8个\",\"id\":\"35227\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"个\",\"volume\":\"8个|11.24元/个\",\"price\":\"89.90\",\"volume_num\":\"8\",\"volume_unit\":\"个\",\"product_desc\":\"一口爆汁 越软才越甜​\",\"photo\":\"images/product_pic/1-270x270-6787-DDU19P3H.jpg\",\"sales\":\"0\",\"product_no\":\"2190626120\",\"is_oversale\":0},{\"stock\":\"97676\",\"product_name\":\"越南红心火龙果（大） 2kg\",\"id\":\"35408\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"箱\",\"volume\":\"2kg|19.98元/斤\",\"price\":\"79.90\",\"volume_num\":\"2\",\"volume_unit\":\"kg\",\"product_desc\":\"不仅甜，还是润肠通畅小帮手哦\",\"photo\":\"images/product_pic/1-270x270-5-HRHCPAH9.jpg\",\"sales\":\"2800\",\"product_no\":\"2170228108\",\"is_oversale\":0},{\"stock\":\"97902\",\"product_name\":\"泰国椰青 2个\",\"id\":\"33287\",\"cart_tag\":\"买1送1\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"2个|14.95元/个\",\"price\":\"29.90\",\"volume_num\":\"2\",\"volume_unit\":\"个\",\"product_desc\":\"低糖低卡 躺着喝也不长肉\",\"photo\":\"images/product_pic/1-270x270-6066-KXR54TW8.jpg\",\"sales\":\"121\",\"product_no\":\"2170303103\",\"is_oversale\":0},{\"stock\":\"99363\",\"product_name\":\"小蜜蜂甜瓜 1个\",\"id\":\"38627\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"袋\",\"volume\":\"1个\",\"price\":\"29.90\",\"volume_num\":\"0\",\"volume_unit\":\"个\",\"product_desc\":\"水润又软糯 一口比蜜甜\",\"photo\":\"images/product_pic/1-270x270-6595-2XXPFCY1.jpg\",\"sales\":\"14\",\"product_no\":\"2180403107\",\"is_oversale\":0},{\"stock\":\"99423\",\"product_name\":\"美国青苹果 4个\",\"id\":\"34315\",\"cart_tag\":\"新品\",\"is_present\":\"1\",\"unit\":\"袋 \",\"volume\":\"4个|7.48元/个\",\"price\":\"29.90\",\"volume_num\":\"4\",\"volume_unit\":\"个\",\"product_desc\":\"青皮白肉 酸甜清新\",\"photo\":\"images/product_pic/1-270x270-586-645CDU4F.jpg\",\"sales\":\"138\",\"product_no\":\"2180224101\",\"is_oversale\":0},{\"stock\":\"99438\",\"product_name\":\"海南妃子笑荔枝  2.5kg\",\"id\":\"31726\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"箱\",\"volume\":\"2.5kg|11.98元/斤\",\"price\":\"59.90\",\"volume_num\":\"2.5\",\"volume_unit\":\"kg\",\"product_desc\":\"抢鲜一步 时令荔枝来了\",\"photo\":\"images/product_pic/1-270x270-2383-WUDRUSXF.jpg\",\"sales\":\"721\",\"product_no\":\"2180530101\",\"is_oversale\":0},{\"stock\":\"99503\",\"product_name\":\"佳沛新西兰阳光金奇异果(巨无霸) 22个原箱\",\"id\":\"31516\",\"cart_tag\":\"预售\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"22个原箱\",\"price\":\"209.00\",\"volume_num\":\"0\",\"volume_unit\":\"个\",\"product_desc\":\"能量巨果 一口爆浆过瘾\",\"photo\":\"images/product_pic/1-270x270-6488-93FUPWKP.jpg\",\"sales\":\"233\",\"product_no\":\"2170413130\",\"is_oversale\":0},{\"stock\":\"99643\",\"product_name\":\"皇冠梨 2kg\",\"id\":\"32788\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"2kg|7.48元/斤\",\"price\":\"29.90\",\"volume_num\":\"2\",\"volume_unit\":\"kg\",\"product_desc\":\"甜脆多水分 炖梨就用它\",\"photo\":\"images/product_pic/1-270x270-3442-6WUPHDAU.jpg\",\"sales\":\"345\",\"product_no\":\"2180622106\",\"is_oversale\":0},{\"stock\":\"99763\",\"product_name\":\"皇冠梨 5kg\",\"id\":\"32787\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"5kg|6.8元/斤\",\"price\":\"68.00\",\"volume_num\":\"5\",\"volume_unit\":\"kg\",\"product_desc\":\"甜脆多水分 炖梨就用它\",\"photo\":\"images/product_pic/1-270x270-3442-6WUPHDAU.jpg\",\"sales\":\"235\",\"product_no\":\"2180622107\",\"is_oversale\":0},{\"stock\":\"99764\",\"product_name\":\"小蜜蜂甜瓜 2个\",\"id\":\"38628\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒\",\"volume\":\"2个|24.95元/个\",\"price\":\"49.90\",\"volume_num\":\"2\",\"volume_unit\":\"个\",\"product_desc\":\"水润又软糯 一口比蜜甜\",\"photo\":\"images/product_pic/1-270x270-6595-2XXPFCY1.jpg\",\"sales\":\"46\",\"product_no\":\"2180403108\",\"is_oversale\":0},{\"stock\":\"99781\",\"product_name\":\"新奇士美国晚熟脐橙 12个\",\"id\":\"34321\",\"cart_tag\":\"新品\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"12个\",\"price\":\"59.90\",\"volume_num\":\"0\",\"volume_unit\":\"个\",\"product_desc\":\"纯甜多汁 黑标荣誉\",\"photo\":\"images/product_pic/1-270x270-2425-36167S5C.jpg\",\"sales\":\"655\",\"product_no\":\"2160415101\",\"is_oversale\":0},{\"stock\":\"99810\",\"product_name\":\"越南火龙果 1kg\",\"id\":\"28277\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"1kg|14.95元/斤\",\"price\":\"29.90\",\"volume_num\":\"1\",\"volume_unit\":\"kg\",\"product_desc\":\"清甜爽口 果盘必备\",\"photo\":\"images/product_pic/1-270x270-28277-8YF33KHC.jpg\",\"sales\":\"305\",\"product_no\":\"2171123111\",\"is_oversale\":0},{\"stock\":\"99911\",\"product_name\":\"新西兰Rockit小苹果 4管礼盒装\",\"id\":\"34434\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"4管礼盒装\",\"price\":\"179.00\",\"volume_num\":\"0\",\"volume_unit\":\"个\",\"product_desc\":\"这颗美好握得住 \",\"photo\":\"images/product_pic/1-270x270-34434-A4D3Y52P.jpg\",\"sales\":\"351\",\"product_no\":\"2170515101\",\"is_oversale\":0},{\"stock\":\"99928\",\"product_name\":\"金蜜香芒果 2kg\",\"id\":\"33253\",\"cart_tag\":\"新品\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"2kg|17.48元/斤\",\"price\":\"69.90\",\"volume_num\":\"2\",\"volume_unit\":\"kg\",\"product_desc\":\"甜糯金灿灿 甜品界主力\",\"photo\":\"images/product_pic/1-270x270-684-B2WYY6YY.jpg\",\"sales\":\"177\",\"product_no\":\"2171116125\",\"is_oversale\":0},{\"stock\":\"99935\",\"product_name\":\"越南火龙果 2.6kg\",\"id\":\"34905\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"2.6kg|11.52元/斤\",\"price\":\"59.90\",\"volume_num\":\"2.6\",\"volume_unit\":\"kg\",\"product_desc\":\"清甜爽口 果盘必备\",\"photo\":\"images/product_pic/1-270x270-6-DHBW63R4.jpg\",\"sales\":\"78\",\"product_no\":\"2190521188\",\"is_oversale\":0},{\"stock\":\"99936\",\"product_name\":\"优选佳沛新西兰绿奇异果(原箱) 33个\",\"id\":\"32924\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"箱\",\"volume\":\"33个|3.61元/个\",\"price\":\"119.00\",\"volume_num\":\"33\",\"volume_unit\":\"个\",\"product_desc\":\"全家都爱的爆棚营养\",\"photo\":\"images/product_pic/1-270x270-32924-5TCHDST2.jpg\",\"sales\":\"61\",\"product_no\":\"2180122103\",\"is_oversale\":0},{\"stock\":\"99950\",\"product_name\":\"优选佳沛新西兰绿奇异果 8个\",\"id\":\"38827\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"8个|4.99元/个\",\"price\":\"39.90\",\"volume_num\":\"8\",\"volume_unit\":\"个\",\"product_desc\":\"全家都爱的爆棚营养\",\"photo\":\"images/product_pic/1-270x270-2911-A2D2176K.jpg\",\"sales\":\"47\",\"product_no\":\"2200426108\",\"is_oversale\":0},{\"stock\":\"99954\",\"product_name\":\"甄选佳沛新西兰绿奇异果（原箱）  30个\",\"id\":\"33792\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"30个|3.97元/个\",\"price\":\"119.00\",\"volume_num\":\"30\",\"volume_unit\":\"个\",\"product_desc\":\"清新绿果 酸甜多汁\",\"photo\":\"images/product_pic/1-270x270-33792-W3K55S75.jpg\",\"sales\":\"46\",\"product_no\":\"2190110110\",\"is_oversale\":0},{\"stock\":\"99955\",\"product_name\":\"美国加州樱桃 500g\",\"id\":\"35075\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"500g\",\"price\":\"99.00\",\"volume_num\":\"0\",\"volume_unit\":\"个\",\"product_desc\":\"一年仅一约 限量珍贵\",\"photo\":\"images/product_pic/1-270x270-2404-9PTW6BYS.jpg\",\"sales\":\"262\",\"product_no\":\"2170515403\",\"is_oversale\":0},{\"stock\":\"99964\",\"product_name\":\"新西兰爱妃苹果（巨无霸） 2个\",\"id\":\"32921\",\"cart_tag\":\"新品\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"2个|24.95元/个\",\"price\":\"49.90\",\"volume_num\":\"2\",\"volume_unit\":\"个\",\"product_desc\":\"更多劲脆满足   与ta甜蜜分享\",\"photo\":\"images/product_pic/1-270x270-5938-TUTRKCF8.jpg\",\"sales\":\"2\",\"product_no\":\"2180510113\",\"is_oversale\":0},{\"stock\":\"99966\",\"product_name\":\"金蜜香芒果 1kg\",\"id\":\"33252\",\"cart_tag\":\"新品\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"1kg|19.95元/斤\",\"price\":\"39.90\",\"volume_num\":\"1\",\"volume_unit\":\"kg\",\"product_desc\":\"甜糯金灿灿 甜品界主力\",\"photo\":\"images/product_pic/1-270x270-684-B2WYY6YY.jpg\",\"sales\":\"72\",\"product_no\":\"2170213101\",\"is_oversale\":0},{\"stock\":\"99968\",\"product_name\":\"海南水仙芒果 1kg\",\"id\":\"20562\",\"cart_tag\":\"新品\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"1kg|19.95元/斤\",\"price\":\"39.90\",\"volume_num\":\"1\",\"volume_unit\":\"kg\",\"product_desc\":\"薄核厚肉超满足\",\"photo\":\"images/product_pic/1-270x270-2076-PUYKHRXD.jpg\",\"sales\":\"600\",\"product_no\":\"2190221104\",\"is_oversale\":0},{\"stock\":\"99969\",\"product_name\":\"山东金油桃 1kg\",\"id\":\"34804\",\"cart_tag\":\"新品\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"1kg|24.95元/斤\",\"price\":\"49.90\",\"volume_num\":\"1\",\"volume_unit\":\"kg\",\"product_desc\":\"甜蜜高颜值 提前“桃”进夏天\",\"photo\":\"images/product_pic/1-270x270-6626-C6S2S5XS.jpg\",\"sales\":\"30\",\"product_no\":\"2190519103\",\"is_oversale\":0},{\"stock\":\"99970\",\"product_name\":\"海南水仙芒果 2kg\",\"id\":\"20561\",\"cart_tag\":\"新品\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"2kg|14.98元/斤\",\"price\":\"59.90\",\"volume_num\":\"2\",\"volume_unit\":\"kg\",\"product_desc\":\"薄核厚肉超满足\",\"photo\":\"images/product_pic/1-270x270-2076-PUYKHRXD.jpg\",\"sales\":\"199\",\"product_no\":\"2190221105\",\"is_oversale\":0},{\"stock\":\"99973\",\"product_name\":\"美国爱妃苹果（巨无霸） 4个\",\"id\":\"36815\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"4个|34.5元/个\",\"price\":\"138.00\",\"volume_num\":\"4\",\"volume_unit\":\"个\",\"product_desc\":\"臻品量少 闪耀娇宠\",\"photo\":\"images/product_pic/1-270x270-4339-PX1RS754.jpg\",\"sales\":\"2\",\"product_no\":\"2191124105\",\"is_oversale\":0},{\"stock\":\"99982\",\"product_name\":\"甄选佳沛新西兰绿奇异果 6个\",\"id\":\"38826\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"6个|6.65元/个\",\"price\":\"39.90\",\"volume_num\":\"6\",\"volume_unit\":\"个\",\"product_desc\":\"清新绿果 酸甜多汁\",\"photo\":\"images/product_pic/1-270x270-6254-W83WD98W.jpg\",\"sales\":\"18\",\"product_no\":\"2171207101\",\"is_oversale\":0},{\"stock\":\"99988\",\"product_name\":\"美国爱妃苹果（巨无霸） 2个\",\"id\":\"36812\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"2个|39.95元/个\",\"price\":\"79.90\",\"volume_num\":\"2\",\"volume_unit\":\"个\",\"product_desc\":\"臻品量少 闪耀娇宠\",\"photo\":\"images/product_pic/1-270x270-4339-PX1RS754.jpg\",\"sales\":\"1\",\"product_no\":\"2181214140\",\"is_oversale\":0},{\"stock\":\"99991\",\"product_name\":\"新西兰爱妃苹果（巨无霸） 4个\",\"id\":\"35457\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"4个|22.25元/个\",\"price\":\"89.00\",\"volume_num\":\"4\",\"volume_unit\":\"个\",\"product_desc\":\"更多劲脆满足   与ta甜蜜分享\",\"photo\":\"images/product_pic/1-270x270-5938-TUTRKCF8.jpg\",\"sales\":\"6\",\"product_no\":\"2190724131\",\"is_oversale\":0},{\"stock\":\"99997\",\"product_name\":\"佳沛新西兰绿奇异果 20个\",\"id\":\"35518\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"20个|3.95元/个\",\"price\":\"79.00\",\"volume_num\":\"20\",\"volume_unit\":\"个\",\"product_desc\":\"清新绿果 酸甜多汁\",\"photo\":\"images/product_pic/1-270x270-2251-9P783958.jpg\",\"sales\":\"14\",\"product_no\":\"2180515105\",\"is_oversale\":0},{\"stock\":0,\"product_name\":\"台湾蜜风铃莲雾 1kg\",\"id\":\"33505\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"1kg|44.5元/斤\",\"price\":\"89.00\",\"volume_num\":\"1\",\"volume_unit\":\"kg\",\"product_desc\":\"99%都是水 爽口的越嚼越甜\",\"photo\":\"images/product_pic/1-270x270-6133-BWDY2WD1.jpg\",\"sales\":\"0\",\"product_no\":\"2181215121\",\"is_oversale\":0},{\"stock\":0,\"product_name\":\"台湾蜜风铃莲雾 500g\",\"id\":\"33504\",\"cart_tag\":\"新品\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"500g\",\"price\":\"49.90\",\"volume_num\":\"0\",\"volume_unit\":\"个\",\"product_desc\":\"99%都是水 爽口的越嚼越甜\",\"photo\":\"images/product_pic/1-270x270-6133-BWDY2WD1.jpg\",\"sales\":\"0\",\"product_no\":\"2181216120\",\"is_oversale\":0},{\"stock\":0,\"product_name\":\"墨西哥牛油果(巨无霸) 2个\",\"id\":\"36076\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒\",\"volume\":\"2个|19.95元/个\",\"price\":\"39.90\",\"volume_num\":\"2\",\"volume_unit\":\"个\",\"product_desc\":\"巨型能量果 健身咖都爱吃\",\"photo\":\"images/product_pic/1-270x270-2035-FC61WP92.jpg\",\"sales\":\"58\",\"product_no\":\"2190910104\",\"is_oversale\":0},{\"stock\":0,\"product_name\":\"热情果 2个\",\"id\":\"38855\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"袋 \",\"volume\":\"2个|17.95元/个\",\"price\":\"35.90\",\"volume_num\":\"2\",\"volume_unit\":\"个\",\"product_desc\":\"稀奇甜蜜 纯甜网红阳光果\",\"photo\":\"images/product_pic/1-270x270-8247-9P1U8TR4.jpg\",\"sales\":\"44\",\"product_no\":\"2200422112\",\"is_oversale\":0},{\"stock\":0,\"product_name\":\"迷你人参果  1kg\",\"id\":\"36293\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"1kg|24.95元/斤\",\"price\":\"49.90\",\"volume_num\":\"1\",\"volume_unit\":\"kg\",\"product_desc\":\"甜度升级 一口喷汁的清爽\",\"photo\":\"images/product_pic/1-270x270-7006-3XR7WCBF.jpg\",\"sales\":\"0\",\"product_no\":\"2190930103\",\"is_oversale\":0},{\"stock\":0,\"product_name\":\"迷你人参果  2kg\",\"id\":\"36292\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"2kg|19.98元/斤\",\"price\":\"79.90\",\"volume_num\":\"2\",\"volume_unit\":\"kg\",\"product_desc\":\"甜度升级 一口喷汁的清爽\",\"photo\":\"images/product_pic/1-270x270-7006-3XR7WCBF.jpg\",\"sales\":\"0\",\"product_no\":\"2190930102\",\"is_oversale\":0},{\"stock\":0,\"product_name\":\"黄金百香果 12个\",\"id\":\"35486\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"12个|2.49元/个\",\"price\":\"29.90\",\"volume_num\":\"12\",\"volume_unit\":\"个\",\"product_desc\":\"酸甜多汁 馥郁芬芳\",\"photo\":\"images/product_pic/1-270x270-3270-7BDD6BWD.jpg\",\"sales\":\"0\",\"product_no\":\"2190725111\",\"is_oversale\":0},{\"stock\":0,\"product_name\":\"黄金百香果 6个\",\"id\":\"31859\",\"cart_tag\":\"新品\",\"is_present\":\"1\",\"unit\":\"盒\",\"volume\":\"6个|3.32元/个\",\"price\":\"19.90\",\"volume_num\":\"6\",\"volume_unit\":\"个\",\"product_desc\":\"酸甜多汁 馥郁芬芳\",\"photo\":\"images/product_pic/1-270x270-3270-7BDD6BWD.jpg\",\"sales\":\"0\",\"product_no\":\"2180612104\",\"is_oversale\":0}]},{\"id\":\"102\",\"name\":\"奇异果\",\"order_id\":\"1005.00\",\"productGroup\":[{\"stock\":\"726\",\"product_name\":\"优选佳沛新西兰阳光金奇异果 8个\",\"id\":\"35369\",\"cart_tag\":\"预售\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"8个\",\"price\":\"79.00\",\"volume_num\":\"0\",\"volume_unit\":\"个\",\"product_desc\":\"每天一颗 水润超甜蜜\",\"photo\":\"images/product_pic/1-270x270-2208-Y6DCKRHT.jpg\",\"sales\":\"566\",\"product_no\":\"2170407471\",\"is_oversale\":0},{\"stock\":\"765\",\"product_name\":\"优选佳沛新西兰阳光金奇异果 （原箱） 30个\",\"id\":\"34408\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"箱\",\"volume\":\"30个|6.63元/个\",\"price\":\"199.00\",\"volume_num\":\"30\",\"volume_unit\":\"个\",\"product_desc\":\"丰富vc营养 唤醒每日活力\",\"photo\":\"images/product_pic/1-270x270-2208-Y6DCKRHT.jpg\",\"sales\":\"87\",\"product_no\":\"2181213102\",\"is_oversale\":0},{\"stock\":\"888\",\"product_name\":\"佳沛新西兰阳光金奇异果(巨无霸) 6个\",\"id\":\"34432\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"6个|13.17元/个\",\"price\":\"79.00\",\"volume_num\":\"6\",\"volume_unit\":\"个\",\"product_desc\":\"能量巨果 一口爆浆过瘾\",\"photo\":\"images/product_pic/1-270x270-2602-6SSUPRP5.jpg\",\"sales\":\"46\",\"product_no\":\"2150414102\",\"is_oversale\":0},{\"stock\":\"9743\",\"product_name\":\"甄选佳沛新西兰阳光金奇异果（原箱） 27个\",\"id\":\"38339\",\"cart_tag\":\"\",\"is_present\":\"0\",\"unit\":\"盒 \",\"volume\":\"27个|7.74元/个\",\"price\":\"209.00\",\"volume_num\":\"27\",\"volume_unit\":\"个\",\"product_desc\":\"营养好吃 味道独特\",\"photo\":\"images/product_pic/1-270x270-38339-CC4FWP3T.jpg\",\"sales\":\"156\",\"product_no\":\"2160511107\",\"is_oversale\":0},{\"stock\":\"9844\",\"product_name\":\"佳沛新西兰阳光金奇异果(巨无霸plus) 18个原箱\",\"id\":\"32793\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"18个原箱\",\"price\":\"239.00\",\"volume_num\":\"0\",\"volume_unit\":\"个\",\"product_desc\":\"一口爆浆超过瘾\",\"photo\":\"images/product_pic/1-270x270-2392-2CU352TC.jpg\",\"sales\":\"68\",\"product_no\":\"2170413111\",\"is_oversale\":0},{\"stock\":\"9927\",\"product_name\":\"佳沛新西兰阳光金奇异果(巨无霸plus) 6个\",\"id\":\"20792\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"6个|14.83元/个\",\"price\":\"89.00\",\"volume_num\":\"6\",\"volume_unit\":\"个\",\"product_desc\":\"一口爆浆超过瘾\",\"photo\":\"images/product_pic/1-270x270-20792-738WFFTH.jpg\",\"sales\":\"36\",\"product_no\":\"2170329107\",\"is_oversale\":0},{\"stock\":\"9956\",\"product_name\":\"甄选佳沛新西兰阳光金奇异果 6个\",\"id\":\"38337\",\"cart_tag\":\"\",\"is_present\":\"0\",\"unit\":\"盒 \",\"volume\":\"6个|11.65元/个\",\"price\":\"69.90\",\"volume_num\":\"6\",\"volume_unit\":\"个\",\"product_desc\":\"营养好吃 味道独特\",\"photo\":\"images/product_pic/1-270x270-6488-93FUPWKP.jpg\",\"sales\":\"7\",\"product_no\":\"2170415101\",\"is_oversale\":0},{\"stock\":\"99503\",\"product_name\":\"佳沛新西兰阳光金奇异果(巨无霸) 22个原箱\",\"id\":\"31516\",\"cart_tag\":\"预售\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"22个原箱\",\"price\":\"209.00\",\"volume_num\":\"0\",\"volume_unit\":\"个\",\"product_desc\":\"能量巨果 一口爆浆过瘾\",\"photo\":\"images/product_pic/1-270x270-2602-6SSUPRP5.jpg\",\"sales\":\"233\",\"product_no\":\"2170413130\",\"is_oversale\":0},{\"stock\":\"99936\",\"product_name\":\"优选佳沛新西兰绿奇异果(原箱) 33个\",\"id\":\"32924\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"箱\",\"volume\":\"33个|3.61元/个\",\"price\":\"119.00\",\"volume_num\":\"33\",\"volume_unit\":\"个\",\"product_desc\":\"全家都爱的爆棚营养\",\"photo\":\"images/product_pic/1-270x270-32924-5TCHDST2.jpg\",\"sales\":\"61\",\"product_no\":\"2180122103\",\"is_oversale\":0},{\"stock\":\"99950\",\"product_name\":\"优选佳沛新西兰绿奇异果 8个\",\"id\":\"38827\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"8个|4.99元/个\",\"price\":\"39.90\",\"volume_num\":\"8\",\"volume_unit\":\"个\",\"product_desc\":\"全家都爱的爆棚营养\",\"photo\":\"images/product_pic/1-270x270-2911-A2D2176K.jpg\",\"sales\":\"47\",\"product_no\":\"2200426108\",\"is_oversale\":0},{\"stock\":\"99954\",\"product_name\":\"甄选佳沛新西兰绿奇异果（原箱）  30个\",\"id\":\"33792\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"30个|3.97元/个\",\"price\":\"119.00\",\"volume_num\":\"30\",\"volume_unit\":\"个\",\"product_desc\":\"清新绿果 酸甜多汁\",\"photo\":\"images/product_pic/1-270x270-33792-W3K55S75.jpg\",\"sales\":\"46\",\"product_no\":\"2190110110\",\"is_oversale\":0},{\"stock\":\"99982\",\"product_name\":\"甄选佳沛新西兰绿奇异果 6个\",\"id\":\"38826\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"6个|6.65元/个\",\"price\":\"39.90\",\"volume_num\":\"6\",\"volume_unit\":\"个\",\"product_desc\":\"清新绿果 酸甜多汁\",\"photo\":\"images/product_pic/1-270x270-6254-W83WD98W.jpg\",\"sales\":\"18\",\"product_no\":\"2171207101\",\"is_oversale\":0},{\"stock\":\"99997\",\"product_name\":\"佳沛新西兰绿奇异果 20个\",\"id\":\"35518\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"20个|3.95元/个\",\"price\":\"79.00\",\"volume_num\":\"20\",\"volume_unit\":\"个\",\"product_desc\":\"清新绿果 酸甜多汁\",\"photo\":\"images/product_pic/1-270x270-2251-9P783958.jpg\",\"sales\":\"14\",\"product_no\":\"2180515105\",\"is_oversale\":0}]},{\"id\":\"104\",\"name\":\"苹果\",\"order_id\":\"1003.00\",\"productGroup\":[{\"stock\":\"5779\",\"product_name\":\"新西兰Rockit小苹果 1管\",\"id\":\"22094\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"1管\",\"price\":\"49.90\",\"volume_num\":\"0\",\"volume_unit\":\"个\",\"product_desc\":\"这颗美好握得住 \",\"photo\":\"images/product_pic/1-270x270-2257-9R2PTPKS.jpg\",\"sales\":\"32\",\"product_no\":\"2161008103\",\"is_oversale\":0},{\"stock\":\"9533\",\"product_name\":\"山东富士苹果 5kg\",\"id\":\"37801\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"5kg|8.9元/斤\",\"price\":\"89.00\",\"volume_num\":\"5\",\"volume_unit\":\"kg\",\"product_desc\":\"记忆中的苹果甜\",\"photo\":\"images/product_pic/1-270x270-624-85338XKK.jpg\",\"sales\":\"698\",\"product_no\":\"2200206104\",\"is_oversale\":0},{\"stock\":\"9806\",\"product_name\":\"山东富士苹果 2.5kg\",\"id\":\"37802\",\"cart_tag\":\"新品\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"2.5kg|9.98元/斤\",\"price\":\"49.90\",\"volume_num\":\"2.5\",\"volume_unit\":\"kg\",\"product_desc\":\"记忆中的苹果甜\",\"photo\":\"images/product_pic/1-270x270-624-85338XKK.jpg\",\"sales\":\"378\",\"product_no\":\"2200206103\",\"is_oversale\":0},{\"stock\":\"9873\",\"product_name\":\"新西兰皇家姬娜苹果 6个\",\"id\":\"20714\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"6个|4.98元/个\",\"price\":\"29.90\",\"volume_num\":\"6\",\"volume_unit\":\"个\",\"product_desc\":\"新西兰苹果季回归 甜脆依旧\",\"photo\":\"images/product_pic/1-270x270-5412-RPTXPS55.jpg\",\"sales\":\"43\",\"product_no\":\"2170322101\",\"is_oversale\":0},{\"stock\":\"9881\",\"product_name\":\"新西兰皇后红玫瑰苹果 20个\",\"id\":\"34542\",\"cart_tag\":\"新品\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"20个|4.45元/个\",\"price\":\"89.00\",\"volume_num\":\"20\",\"volume_unit\":\"个\",\"product_desc\":\"带着玫瑰的红 透着玫瑰清香\",\"photo\":\"images/product_pic/1-270x270-5412-RPTXPS55.jpg\",\"sales\":\"1047\",\"product_no\":\"2180425103\",\"is_oversale\":0},{\"stock\":\"9930\",\"product_name\":\"美国华盛顿甜脆红地厘蛇果 6个\",\"id\":\"27341\",\"cart_tag\":\"下单省10元\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"6个|9.98元/个\",\"price\":\"59.90\",\"volume_num\":\"6\",\"volume_unit\":\"个\",\"product_desc\":\"经典红果 甜脆出众\",\"photo\":\"images/product_pic/1-270x270-52-HF73PYWP.jpg\",\"sales\":\"73\",\"product_no\":\"2161103112\",\"is_oversale\":0},{\"stock\":\"9943\",\"product_name\":\"新西兰皇家姬娜苹果 20个\",\"id\":\"25513\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"20个|4.45元/个\",\"price\":\"89.00\",\"volume_num\":\"20\",\"volume_unit\":\"个\",\"product_desc\":\"红苹果+蛇果 融合多滋果味\",\"photo\":\"images/product_pic/1-270x270-5412-RPTXPS55.jpg\",\"sales\":\"141\",\"product_no\":\"2170830111\",\"is_oversale\":0},{\"stock\":\"9948\",\"product_name\":\"新西兰皇后红玫瑰苹果 6个\",\"id\":\"31188\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"6个|4.98元/个\",\"price\":\"29.90\",\"volume_num\":\"6\",\"volume_unit\":\"个\",\"product_desc\":\"带着玫瑰的红 透着玫瑰清香\",\"photo\":\"images/product_pic/1-270x270-5412-RPTXPS55.jpg\",\"sales\":\"39\",\"product_no\":\"2180424116\",\"is_oversale\":0},{\"stock\":\"9948\",\"product_name\":\"美国华盛顿甜脆红地厘蛇果 12个\",\"id\":\"27342\",\"cart_tag\":\"新品\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"12个|8.25元/个\",\"price\":\"99.00\",\"volume_num\":\"12\",\"volume_unit\":\"个\",\"product_desc\":\"经典红果 顶大低小\",\"photo\":\"images/product_pic/1-270x270-52-HF73PYWP.jpg\",\"sales\":\"48\",\"product_no\":\"201412023\",\"is_oversale\":0},{\"stock\":\"9949\",\"product_name\":\"新西兰爵士苹果 6个\",\"id\":\"22768\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"6个|4.98元/个\",\"price\":\"29.90\",\"volume_num\":\"6\",\"volume_unit\":\"个\",\"product_desc\":\"酸甜与爽脆的双重轻奏\",\"photo\":\"images/product_pic/1-270x270-2391-5387PUKS.jpg\",\"sales\":\"23\",\"product_no\":\"201410602\",\"is_oversale\":0},{\"stock\":\"9959\",\"product_name\":\"甄选新西兰爱妃苹果 6个\",\"id\":\"38881\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"6个|13.17元/个\",\"price\":\"79.00\",\"volume_num\":\"6\",\"volume_unit\":\"个\",\"product_desc\":\"唯一的爱妃 大甜且脆\",\"photo\":\"images/product_pic/1-270x270-2546-DCPKPX7B.jpg\",\"sales\":\"36\",\"product_no\":\"2170810104\",\"is_oversale\":0},{\"stock\":\"9971\",\"product_name\":\"新西兰皇后红玫瑰苹果（礼盒装） 20个\",\"id\":\"35476\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"20个|4.95元/个\",\"price\":\"99.00\",\"volume_num\":\"20\",\"volume_unit\":\"个\",\"product_desc\":\"带着玫瑰的红 透着玫瑰清香\",\"photo\":\"images/product_pic/1-270x270-35107-848RAYSD.jpg\",\"sales\":\"151\",\"product_no\":\"2190725105\",\"is_oversale\":0},{\"stock\":\"9994\",\"product_name\":\"新西兰Dazzle丹烁苹果 20个\",\"id\":\"35107\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"20个|4.95元/个\",\"price\":\"99.00\",\"volume_num\":\"20\",\"volume_unit\":\"个\",\"product_desc\":\"准备了20年的新品 咔擦上线​\",\"photo\":\"images/product_pic/1-270x270-6695-2UUC735P.jpg\",\"sales\":\"29\",\"product_no\":\"2190612119\",\"is_oversale\":0},{\"stock\":\"9997\",\"product_name\":\"新西兰Dazzel丹烁苹果 6个\",\"id\":\"35016\",\"cart_tag\":\"新品\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"6个|6.65元/个\",\"price\":\"39.90\",\"volume_num\":\"6\",\"volume_unit\":\"个\",\"product_desc\":\"准备了20年的新品 咔擦上线​\",\"photo\":\"images/product_pic/1-270x270-6695-2UUC735P.jpg\",\"sales\":\"2\",\"product_no\":\"2190529103\",\"is_oversale\":0},{\"stock\":\"99423\",\"product_name\":\"美国青苹果 4个\",\"id\":\"34315\",\"cart_tag\":\"新品\",\"is_present\":\"1\",\"unit\":\"袋 \",\"volume\":\"4个|7.48元/个\",\"price\":\"29.90\",\"volume_num\":\"4\",\"volume_unit\":\"个\",\"product_desc\":\"青皮白肉 酸甜清新\",\"photo\":\"images/product_pic/1-270x270-586-645CDU4F.jpg\",\"sales\":\"138\",\"product_no\":\"2180224101\",\"is_oversale\":0},{\"stock\":\"99911\",\"product_name\":\"新西兰Rockit小苹果 4管礼盒装\",\"id\":\"34434\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"4管礼盒装\",\"price\":\"179.00\",\"volume_num\":\"0\",\"volume_unit\":\"个\",\"product_desc\":\"这颗美好握得住 \",\"photo\":\"images/product_pic/1-270x270-34434-A4D3Y52P.jpg\",\"sales\":\"351\",\"product_no\":\"2170515101\",\"is_oversale\":0},{\"stock\":\"99964\",\"product_name\":\"新西兰爱妃苹果（巨无霸） 2个\",\"id\":\"32921\",\"cart_tag\":\"新品\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"2个|24.95元/个\",\"price\":\"49.90\",\"volume_num\":\"2\",\"volume_unit\":\"个\",\"product_desc\":\"更多劲脆满足   与ta甜蜜分享\",\"photo\":\"images/product_pic/1-270x270-5938-TUTRKCF8.jpg\",\"sales\":\"2\",\"product_no\":\"2180510113\",\"is_oversale\":0},{\"stock\":\"99973\",\"product_name\":\"美国爱妃苹果（巨无霸） 4个\",\"id\":\"36815\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"4个|34.5元/个\",\"price\":\"138.00\",\"volume_num\":\"4\",\"volume_unit\":\"个\",\"product_desc\":\"臻品量少 闪耀娇宠\",\"photo\":\"images/product_pic/1-270x270-4339-PX1RS754.jpg\",\"sales\":\"2\",\"product_no\":\"2191124105\",\"is_oversale\":0},{\"stock\":\"99988\",\"product_name\":\"美国爱妃苹果（巨无霸） 2个\",\"id\":\"36812\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"2个|39.95元/个\",\"price\":\"79.90\",\"volume_num\":\"2\",\"volume_unit\":\"个\",\"product_desc\":\"臻品量少 闪耀娇宠\",\"photo\":\"images/product_pic/1-270x270-4339-PX1RS754.jpg\",\"sales\":\"1\",\"product_no\":\"2181214140\",\"is_oversale\":0},{\"stock\":\"99991\",\"product_name\":\"新西兰爱妃苹果（巨无霸） 4个\",\"id\":\"35457\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"4个|22.25元/个\",\"price\":\"89.00\",\"volume_num\":\"4\",\"volume_unit\":\"个\",\"product_desc\":\"更多劲脆满足   与ta甜蜜分享\",\"photo\":\"images/product_pic/1-270x270-5938-TUTRKCF8.jpg\",\"sales\":\"6\",\"product_no\":\"2190724131\",\"is_oversale\":0}]},{\"id\":\"105\",\"name\":\"橙柑橘柚\",\"order_id\":\"1002.00\",\"productGroup\":[{\"stock\":\"987\",\"product_name\":\"百香果柠檬组合 百香果4个+柠檬2个\",\"id\":\"32113\",\"cart_tag\":\"网红茶CP\",\"is_present\":\"1\",\"unit\":\"袋 \",\"volume\":\"百香果4个+柠檬2个\",\"price\":\"19.90\",\"volume_num\":\"0\",\"volume_unit\":\"个\",\"product_desc\":\"网红茶cp 夏日爱喝酸甜味\",\"photo\":\"images/product_pic/1-270x270-32113-7R871CUB.jpg\",\"sales\":\"487\",\"product_no\":\"2180705105\",\"is_oversale\":0},{\"stock\":\"9720\",\"product_name\":\"新奇士美国晚熟脐橙  24个\",\"id\":\"38549\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"24个|4.13元/个\",\"price\":\"99.00\",\"volume_num\":\"24\",\"volume_unit\":\"个\",\"product_desc\":\"晒足3000小时的黑标甜\",\"photo\":\"images/product_pic/1-270x270-2425-36167S5C.jpg\",\"sales\":\"2056\",\"product_no\":\"2200327106\",\"is_oversale\":0},{\"stock\":\"9746\",\"product_name\":\"优选新奇士美国晚熟脐橙 20个\",\"id\":\"34436\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"20个|6.4元/个\",\"price\":\"128.00\",\"volume_num\":\"20\",\"volume_unit\":\"个\",\"product_desc\":\"纯甜多汁 黑标荣誉\",\"photo\":\"images/product_pic/1-270x270-2172-WHBF41P9.jpg\",\"sales\":\"925\",\"product_no\":\"2170413106\",\"is_oversale\":0},{\"stock\":\"9877\",\"product_name\":\"优选新奇士美国晚熟脐橙  6个\",\"id\":\"35189\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"6个|8.32元/个\",\"price\":\"49.90\",\"volume_num\":\"6\",\"volume_unit\":\"个\",\"product_desc\":\"纯甜多汁 黑标荣誉\",\"photo\":\"images/product_pic/1-270x270-2172-WHBF41P9.jpg\",\"sales\":\"37\",\"product_no\":\"2170405101\",\"is_oversale\":0},{\"stock\":\"9881\",\"product_name\":\"拇指青桔 500g\",\"id\":\"15719\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"500g\",\"price\":\"9.90\",\"volume_num\":\"0\",\"volume_unit\":\"个\",\"product_desc\":\"活力VC库 清新果饮作CP\",\"photo\":\"images/product_pic/1-270x270-2031-5HB8XY1D.jpg\",\"sales\":\"1227\",\"product_no\":\"2160705104\",\"is_oversale\":0},{\"stock\":\"9962\",\"product_name\":\"泰国蜜柚 1个\",\"id\":\"25765\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒\",\"volume\":\"1个\",\"price\":\"49.90\",\"volume_num\":\"0\",\"volume_unit\":\"0\",\"product_desc\":\"柚香扑鼻 清甜多汁\",\"photo\":\"images/product_pic/1-270x270-5818-BSPUH133.jpg\",\"sales\":\"188\",\"product_no\":\"2160309102\",\"is_oversale\":0},{\"stock\":\"9973\",\"product_name\":\"泰国白金蜜柚 2个\",\"id\":\"32376\",\"cart_tag\":\"新品\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"2个|44.5元/个\",\"price\":\"89.00\",\"volume_num\":\"2\",\"volume_unit\":\"个\",\"product_desc\":\"柚香扑鼻 清甜多汁\",\"photo\":\"images/product_pic/1-270x270-2232-AABB878P.jpg\",\"sales\":\"21\",\"product_no\":\"2160309103\",\"is_oversale\":0},{\"stock\":\"99781\",\"product_name\":\"新奇士美国晚熟脐橙 12个\",\"id\":\"34321\",\"cart_tag\":\"新品\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"12个\",\"price\":\"59.90\",\"volume_num\":\"0\",\"volume_unit\":\"个\",\"product_desc\":\"纯甜多汁 黑标荣誉\",\"photo\":\"images/product_pic/1-270x270-2425-36167S5C.jpg\",\"sales\":\"655\",\"product_no\":\"2160415101\",\"is_oversale\":0}]},{\"id\":\"101\",\"name\":\"樱桃\",\"order_id\":\"1001.00\",\"productGroup\":[{\"stock\":\"9961\",\"product_name\":\"美国加州樱桃 1kg\",\"id\":\"22877\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"1kg|69元/斤\",\"price\":\"138.00\",\"volume_num\":\"1\",\"volume_unit\":\"kg\",\"product_desc\":\"一年仅一约 限量珍贵\",\"photo\":\"images/product_pic/1-270x270-2404-9PTW6BYS.jpg\",\"sales\":\"226\",\"product_no\":\"2160429104\",\"is_oversale\":0},{\"stock\":\"99955\",\"product_name\":\"美国加州樱桃 500g\",\"id\":\"35075\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"500g\",\"price\":\"99.00\",\"volume_num\":\"0\",\"volume_unit\":\"个\",\"product_desc\":\"一年仅一约 限量珍贵\",\"photo\":\"images/product_pic/1-270x270-2404-9PTW6BYS.jpg\",\"sales\":\"262\",\"product_no\":\"2170515403\",\"is_oversale\":0}]},{\"id\":\"106\",\"name\":\"梨\",\"order_id\":\"94.00\",\"productGroup\":[{\"stock\":\"9954\",\"product_name\":\"新疆香梨 2kg\",\"id\":\"36097\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒\",\"volume\":\"2kg|14.98元/斤\",\"price\":\"59.90\",\"volume_num\":\"2\",\"volume_unit\":\"kg\",\"product_desc\":\"酥甜水嫩 小王子回归\",\"photo\":\"images/product_pic/1-270x270-70-H8CHR7XD.jpg\",\"sales\":\"341\",\"product_no\":\"2180922105\",\"is_oversale\":0},{\"stock\":\"9978\",\"product_name\":\"新疆香梨 4kg\",\"id\":\"36098\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"4kg|12.38元/斤\",\"price\":\"99.00\",\"volume_num\":\"4\",\"volume_unit\":\"kg\",\"product_desc\":\"酥甜水嫩 小王子回归\",\"photo\":\"images/product_pic/1-270x270-70-H8CHR7XD.jpg\",\"sales\":\"194\",\"product_no\":\"2171121120\",\"is_oversale\":0},{\"stock\":\"9979\",\"product_name\":\"比利时啤梨 6个\",\"id\":\"38779\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"6个|6.65元/个\",\"price\":\"39.90\",\"volume_num\":\"6\",\"volume_unit\":\"个\",\"product_desc\":\"酥肉水润润 放软会更甜\",\"photo\":\"images/product_pic/1-270x270-66-8TP27KC1.jpg\",\"sales\":\"22\",\"product_no\":\"2181027104\",\"is_oversale\":0},{\"stock\":\"9997\",\"product_name\":\"都乐阿根廷帕克梨 4个\",\"id\":\"35226\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"4个|9.98元/个\",\"price\":\"39.90\",\"volume_num\":\"4\",\"volume_unit\":\"个\",\"product_desc\":\"一口爆汁 越软才越甜​\",\"photo\":\"images/product_pic/1-270x270-6787-DDU19P3H.jpg\",\"sales\":\"2\",\"product_no\":\"2190626110\",\"is_oversale\":0},{\"stock\":\"9999\",\"product_name\":\"都乐阿根廷帕克梨 8个\",\"id\":\"35227\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"个\",\"volume\":\"8个|11.24元/个\",\"price\":\"89.90\",\"volume_num\":\"8\",\"volume_unit\":\"个\",\"product_desc\":\"一口爆汁 越软才越甜​\",\"photo\":\"images/product_pic/1-270x270-6787-DDU19P3H.jpg\",\"sales\":\"0\",\"product_no\":\"2190626120\",\"is_oversale\":0},{\"stock\":\"99643\",\"product_name\":\"皇冠梨 2kg\",\"id\":\"32788\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"2kg|7.48元/斤\",\"price\":\"29.90\",\"volume_num\":\"2\",\"volume_unit\":\"kg\",\"product_desc\":\"甜脆多水分 炖梨就用它\",\"photo\":\"images/product_pic/1-270x270-3442-6WUPHDAU.jpg\",\"sales\":\"345\",\"product_no\":\"2180622106\",\"is_oversale\":0},{\"stock\":\"99763\",\"product_name\":\"皇冠梨 5kg\",\"id\":\"32787\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"5kg|6.8元/斤\",\"price\":\"68.00\",\"volume_num\":\"5\",\"volume_unit\":\"kg\",\"product_desc\":\"甜脆多水分 炖梨就用它\",\"photo\":\"images/product_pic/1-270x270-3442-6WUPHDAU.jpg\",\"sales\":\"235\",\"product_no\":\"2180622107\",\"is_oversale\":0}]},{\"id\":\"108\",\"name\":\"牛油果\",\"order_id\":\"92.00\",\"productGroup\":[{\"stock\":0,\"product_name\":\"墨西哥牛油果(巨无霸) 2个\",\"id\":\"36076\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒\",\"volume\":\"2个|19.95元/个\",\"price\":\"39.90\",\"volume_num\":\"2\",\"volume_unit\":\"个\",\"product_desc\":\"巨型能量果 健身咖都爱吃\",\"photo\":\"images/product_pic/1-270x270-2035-FC61WP92.jpg\",\"sales\":\"58\",\"product_no\":\"2190910104\",\"is_oversale\":0}]},{\"id\":\"111\",\"name\":\"热带水果\",\"order_id\":\"89.00\",\"productGroup\":[{\"stock\":\"990\",\"product_name\":\"精选百香果 12个\",\"id\":\"35420\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"12个|2.49元/个\",\"price\":\"29.90\",\"volume_num\":\"12\",\"volume_unit\":\"个\",\"product_desc\":\"添一勺蜂蜜 变身网红果茶\",\"photo\":\"images/product_pic/1-270x270-602-8K21Y6YK.jpg\",\"sales\":\"33\",\"product_no\":\"2190505103\",\"is_oversale\":0},{\"stock\":\"996\",\"product_name\":\"精选百香果  6个\",\"id\":\"11997\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"6个|3.32元/个\",\"price\":\"19.90\",\"volume_num\":\"6\",\"volume_unit\":\"个\",\"product_desc\":\"添一勺蜂蜜 变身网红果茶\",\"photo\":\"images/product_pic/1-270x270-602-8K21Y6YK.jpg\",\"sales\":\"427\",\"product_no\":\"2150721101\",\"is_oversale\":0},{\"stock\":\"9949\",\"product_name\":\"泰国山竹 1kg\",\"id\":\"28242\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"1kg|29.95元/斤\",\"price\":\"59.90\",\"volume_num\":\"1\",\"volume_unit\":\"kg\",\"product_desc\":\"5-6A高品质  大果 , 肉更饱满\",\"photo\":\"images/product_pic/1-270x270-639-F57R6U36.jpg\",\"sales\":\"101\",\"product_no\":\"2160527101\",\"is_oversale\":0},{\"stock\":\"9996\",\"product_name\":\"泰国释迦 2个\",\"id\":\"35871\",\"cart_tag\":\"新品\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"2个|49.5元/个\",\"price\":\"99.00\",\"volume_num\":\"2\",\"volume_unit\":\"个\",\"product_desc\":\"软了才能吃 这滋味比蜜甜\",\"photo\":\"images/product_pic/1-270x270-5921-33TRSFWR.jpg\",\"sales\":\"20\",\"product_no\":\"2190824109\",\"is_oversale\":0},{\"stock\":\"97902\",\"product_name\":\"泰国椰青 2个\",\"id\":\"33287\",\"cart_tag\":\"买1送1\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"2个|14.95元/个\",\"price\":\"29.90\",\"volume_num\":\"2\",\"volume_unit\":\"个\",\"product_desc\":\"低糖低卡 躺着喝也不长肉\",\"photo\":\"images/product_pic/1-270x270-6066-KXR54TW8.jpg\",\"sales\":\"121\",\"product_no\":\"2170303103\",\"is_oversale\":0},{\"stock\":\"99438\",\"product_name\":\"海南妃子笑荔枝  2.5kg\",\"id\":\"31726\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"箱\",\"volume\":\"2.5kg|11.98元/斤\",\"price\":\"59.90\",\"volume_num\":\"2.5\",\"volume_unit\":\"kg\",\"product_desc\":\"抢鲜一步 时令荔枝来了\",\"photo\":\"images/product_pic/1-270x270-2383-WUDRUSXF.jpg\",\"sales\":\"721\",\"product_no\":\"2180530101\",\"is_oversale\":0},{\"stock\":0,\"product_name\":\"热情果 2个\",\"id\":\"38855\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"袋 \",\"volume\":\"2个|17.95元/个\",\"price\":\"35.90\",\"volume_num\":\"2\",\"volume_unit\":\"个\",\"product_desc\":\"稀奇甜蜜 纯甜网红阳光果\",\"photo\":\"images/product_pic/1-270x270-8247-9P1U8TR4.jpg\",\"sales\":\"44\",\"product_no\":\"2200422112\",\"is_oversale\":0},{\"stock\":0,\"product_name\":\"黄金百香果 12个\",\"id\":\"35486\",\"cart_tag\":\"\",\"is_present\":\"1\",\"unit\":\"盒 \",\"volume\":\"12个|2.49元/个\",\"price\":\"29.90\",\"volume_num\":\"12\",\"volume_unit\":\"个\",\"product_desc\":\"酸甜多汁 馥郁芬芳\",\"photo\":\"images/product_pic/1-270x270-3270-7BDD6BWD.jpg\",\"sales\":\"0\",\"product_no\":\"2190725111\",\"is_oversale\":0},{\"stock\":0,\"product_name\":\"黄金百香果 6个\",\"id\":\"31859\",\"cart_tag\":\"新品\",\"is_present\":\"1\",\"unit\":\"盒\",\"volume\":\"6个|3.32元/个\",\"price\":\"19.90\",\"volume_num\":\"6\",\"volume_unit\":\"个\",\"product_desc\":\"酸甜多汁 馥郁芬芳\",\"photo\":\"images/product_pic/1-270x270-3270-7BDD6BWD.jpg\",\"sales\":\"0\",\"product_no\":\"2180612104\",\"is_oversale\":0}]}]");

/***/ }),

/***/ 98:
/*!*****************************************************!*\
  !*** D:/WeChat/Sgoly/components/uni-icons/icons.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  "pulldown": "\uE588",
  "refreshempty": "\uE461",
  "back": "\uE471",
  "forward": "\uE470",
  "more": "\uE507",
  "more-filled": "\uE537",
  "scan": "\uE612",
  "qq": "\uE264",
  "weibo": "\uE260",
  "weixin": "\uE261",
  "pengyouquan": "\uE262",
  "loop": "\uE565",
  "refresh": "\uE407",
  "refresh-filled": "\uE437",
  "arrowthindown": "\uE585",
  "arrowthinleft": "\uE586",
  "arrowthinright": "\uE587",
  "arrowthinup": "\uE584",
  "undo-filled": "\uE7D6",
  "undo": "\uE406",
  "redo": "\uE405",
  "redo-filled": "\uE7D9",
  "bars": "\uE563",
  "chatboxes": "\uE203",
  "camera": "\uE301",
  "chatboxes-filled": "\uE233",
  "camera-filled": "\uE7EF",
  "cart-filled": "\uE7F4",
  "cart": "\uE7F5",
  "checkbox-filled": "\uE442",
  "checkbox": "\uE7FA",
  "arrowleft": "\uE582",
  "arrowdown": "\uE581",
  "arrowright": "\uE583",
  "smallcircle-filled": "\uE801",
  "arrowup": "\uE580",
  "circle": "\uE411",
  "eye-filled": "\uE568",
  "eye-slash-filled": "\uE822",
  "eye-slash": "\uE823",
  "eye": "\uE824",
  "flag-filled": "\uE825",
  "flag": "\uE508",
  "gear-filled": "\uE532",
  "reload": "\uE462",
  "gear": "\uE502",
  "hand-thumbsdown-filled": "\uE83B",
  "hand-thumbsdown": "\uE83C",
  "hand-thumbsup-filled": "\uE83D",
  "heart-filled": "\uE83E",
  "hand-thumbsup": "\uE83F",
  "heart": "\uE840",
  "home": "\uE500",
  "info": "\uE504",
  "home-filled": "\uE530",
  "info-filled": "\uE534",
  "circle-filled": "\uE441",
  "chat-filled": "\uE847",
  "chat": "\uE263",
  "mail-open-filled": "\uE84D",
  "email-filled": "\uE231",
  "mail-open": "\uE84E",
  "email": "\uE201",
  "checkmarkempty": "\uE472",
  "list": "\uE562",
  "locked-filled": "\uE856",
  "locked": "\uE506",
  "map-filled": "\uE85C",
  "map-pin": "\uE85E",
  "map-pin-ellipse": "\uE864",
  "map": "\uE364",
  "minus-filled": "\uE440",
  "mic-filled": "\uE332",
  "minus": "\uE410",
  "micoff": "\uE360",
  "mic": "\uE302",
  "clear": "\uE434",
  "smallcircle": "\uE868",
  "close": "\uE404",
  "closeempty": "\uE460",
  "paperclip": "\uE567",
  "paperplane": "\uE503",
  "paperplane-filled": "\uE86E",
  "person-filled": "\uE131",
  "contact-filled": "\uE130",
  "person": "\uE101",
  "contact": "\uE100",
  "images-filled": "\uE87A",
  "phone": "\uE200",
  "images": "\uE87B",
  "image": "\uE363",
  "image-filled": "\uE877",
  "location-filled": "\uE333",
  "location": "\uE303",
  "plus-filled": "\uE439",
  "plus": "\uE409",
  "plusempty": "\uE468",
  "help-filled": "\uE535",
  "help": "\uE505",
  "navigate-filled": "\uE884",
  "navigate": "\uE501",
  "mic-slash-filled": "\uE892",
  "search": "\uE466",
  "settings": "\uE560",
  "sound": "\uE590",
  "sound-filled": "\uE8A1",
  "spinner-cycle": "\uE465",
  "download-filled": "\uE8A4",
  "personadd-filled": "\uE132",
  "videocam-filled": "\uE8AF",
  "personadd": "\uE102",
  "upload": "\uE402",
  "upload-filled": "\uE8B1",
  "starhalf": "\uE463",
  "star-filled": "\uE438",
  "star": "\uE408",
  "trash": "\uE401",
  "phone-filled": "\uE230",
  "compose": "\uE400",
  "videocam": "\uE300",
  "trash-filled": "\uE8DC",
  "download": "\uE403",
  "chatbubble-filled": "\uE232",
  "chatbubble": "\uE202",
  "cloud-download": "\uE8E4",
  "cloud-upload-filled": "\uE8E5",
  "cloud-upload": "\uE8E6",
  "cloud-download-filled": "\uE8E9",
  "headphones": "\uE8BF",
  "shop": "\uE609" };exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map