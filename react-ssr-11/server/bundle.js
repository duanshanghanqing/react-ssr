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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js?!./src/components/Header/style.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./src/components/Header/style.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".style_Header_1vNoZMAC{\r\n    background-color: brown;\r\n}", ""]);

// exports
exports.locals = {
	"Header": "style_Header_1vNoZMAC"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./src/containers/Home/style.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./src/containers/Home/style.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".style_Home_H20oLoxB{\r\n    background-color: aqua;\r\n}", ""]);

// exports
exports.locals = {
	"Home": "style_Home_H20oLoxB"
};

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/isomorphic-style-loader/lib/insertCss.js":
/*!***************************************************************!*\
  !*** ./node_modules/isomorphic-style-loader/lib/insertCss.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ "babel-runtime/helpers/slicedToArray");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Isomorphic CSS style loader for Webpack
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

var prefix = 's';
var inserted = {};

// Base64 encoding and decoding - The "Unicode Problem"
// https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode('0x' + p1);
  }));
}

/**
 * Remove style/link elements for specified node IDs
 * if they are no longer referenced by UI components.
 */
function removeCss(ids) {
  ids.forEach(function (id) {
    if (--inserted[id] <= 0) {
      var elem = document.getElementById(prefix + id);
      if (elem) {
        elem.parentNode.removeChild(elem);
      }
    }
  });
}

/**
 * Example:
 *   // Insert CSS styles object generated by `css-loader` into DOM
 *   var removeCss = insertCss([[1, 'body { color: red; }']]);
 *
 *   // Remove it from the DOM
 *   removeCss();
 */
function insertCss(styles) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$replace = _ref.replace,
      replace = _ref$replace === undefined ? false : _ref$replace,
      _ref$prepend = _ref.prepend,
      prepend = _ref$prepend === undefined ? false : _ref$prepend;

  var ids = [];
  for (var i = 0; i < styles.length; i++) {
    var _styles$i = (0, _slicedToArray3.default)(styles[i], 4),
        moduleId = _styles$i[0],
        css = _styles$i[1],
        media = _styles$i[2],
        sourceMap = _styles$i[3];

    var id = moduleId + '-' + i;

    ids.push(id);

    if (inserted[id]) {
      if (!replace) {
        inserted[id]++;
        continue;
      }
    }

    inserted[id] = 1;

    var elem = document.getElementById(prefix + id);
    var create = false;

    if (!elem) {
      create = true;

      elem = document.createElement('style');
      elem.setAttribute('type', 'text/css');
      elem.id = prefix + id;

      if (media) {
        elem.setAttribute('media', media);
      }
    }

    var cssText = css;
    if (sourceMap && typeof btoa === 'function') {
      // skip IE9 and below, see http://caniuse.com/atob-btoa
      cssText += '\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';
      cssText += '\n/*# sourceURL=' + sourceMap.file + '?' + id + '*/';
    }

    if ('textContent' in elem) {
      elem.textContent = cssText;
    } else {
      elem.styleSheet.cssText = cssText;
    }

    if (create) {
      if (prepend) {
        document.head.insertBefore(elem, document.head.childNodes[0]);
      } else {
        document.head.appendChild(elem);
      }
    }
  }

  return removeCss.bind(null, ids);
}

module.exports = insertCss;

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(/*! react-router-config */ "react-router-config");

var _Header = __webpack_require__(/*! ./components/Header */ "./src/components/Header/index.js");

var _Header2 = _interopRequireDefault(_Header);

var _store = __webpack_require__(/*! ./components/Header/store */ "./src/components/Header/store/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(props) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        (0, _reactRouterConfig.renderRoutes)(props.route.routes)
    );
};

App.loadData = function (store) {
    return store.dispatch(_store.actions.getHeaderInfo());
};

exports.default = App;

/***/ }),

/***/ "./src/client/axios.js":
/*!*****************************!*\
  !*** ./src/client/axios.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _axios = __webpack_require__(/*! axios */ "axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 创建实例时修改配置
// var instance = axios.create({
//     baseURL: ''
// });

exports.default = function () {
    return _axios2.default.create({
        baseURL: '',
        params: {
            secret: 'M5s2sPneDE'
        }
    });
};

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _dec2, _class;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _store = __webpack_require__(/*! ./store */ "./src/components/Header/store/index.js");

var _reactMixin = __webpack_require__(/*! react-mixin */ "react-mixin");

var _reactMixin2 = _interopRequireDefault(_reactMixin);

var _mixins = __webpack_require__(/*! ../../mixins */ "./src/mixins/index.js");

var _mixins2 = _interopRequireDefault(_mixins);

var _style = __webpack_require__(/*! ./style.css */ "./src/components/Header/style.css");

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = (_dec = (0, _reactRedux.connect)(function (state) {
    return { login: state.headerReducer.login };
}, _extends({}, _store.actions)), _dec2 = _reactMixin2.default.decorate((0, _mixins2.default)()), _dec(_class = _dec2(_class = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header(props) {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                login = _props.login,
                handleLogin = _props.handleLogin,
                handleLogout = _props.handleLogout;

            return _react2.default.createElement(
                'div',
                { className: _style2.default.Header },
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/home' },
                    '\u9996\u9875'
                ),
                '---',
                login ? _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/translation' },
                        '\u7FFB\u8BD1\u5217\u8868'
                    ),
                    '---',
                    _react2.default.createElement(
                        'span',
                        { onClick: handleLogout },
                        '\u9000\u51FA'
                    )
                ) : _react2.default.createElement(
                    'span',
                    { onClick: handleLogin },
                    '\u767B\u9646'
                )
            );
        }
    }]);

    return Header;
}(_react2.default.Component)) || _class) || _class);
exports.default = Header;

/***/ }),

/***/ "./src/components/Header/store/actions.js":
/*!************************************************!*\
  !*** ./src/components/Header/store/actions.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var CHANGELOGIN = exports.CHANGELOGIN = 'HEADER/CHANGE_LOGIN';

var changeLogin = exports.changeLogin = function changeLogin(data) {
    return {
        type: CHANGELOGIN,
        data: data
    };
};

var getHeaderInfo = exports.getHeaderInfo = function getHeaderInfo() {
    return function (dispatch, getState, axios) {
        return axios.get('/api/isLogin.json').then(function (res) {
            dispatch(changeLogin(res.data.data));
        });
    };
};

var handleLogin = exports.handleLogin = function handleLogin() {
    return function (dispatch, getState, axios) {
        return axios.get('/api/login.json').then(function (res) {
            console.log(res.data.data);
            if (res.data.data.login) {
                dispatch(changeLogin({
                    login: true
                }));
            }
        });
    };
};

var handleLogout = exports.handleLogout = function handleLogout() {
    return function (dispatch, getState, axios) {
        return axios.get('/api/logout.json').then(function (res) {
            console.log(res.data.data);
            if (res.data.data.logout) {
                dispatch(changeLogin({
                    login: false
                }));
            }
        });
    };
};

/***/ }),

/***/ "./src/components/Header/store/index.js":
/*!**********************************************!*\
  !*** ./src/components/Header/store/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.reducer = undefined;

var _reducer = __webpack_require__(/*! ./reducer */ "./src/components/Header/store/reducer.js");

var _reducer2 = _interopRequireDefault(_reducer);

var _actions = __webpack_require__(/*! ./actions */ "./src/components/Header/store/actions.js");

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.reducer = _reducer2.default;
exports.actions = actions;

/***/ }),

/***/ "./src/components/Header/store/reducer.js":
/*!************************************************!*\
  !*** ./src/components/Header/store/reducer.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actions = __webpack_require__(/*! ./actions */ "./src/components/Header/store/actions.js");

var defaultState = {
    login: true
};

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
    var action = arguments[1];

    switch (action.type) {
        case _actions.CHANGELOGIN:
            return _extends({}, state, action.data);
        default:
            return state;
    }
};

/***/ }),

/***/ "./src/components/Header/style.css":
/*!*****************************************!*\
  !*** ./src/components/Header/style.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!./style.css */ "./node_modules/css-loader/index.js?!./src/components/Header/style.css");
    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/lib/insertCss.js */ "./node_modules/isomorphic-style-loader/lib/insertCss.js");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "./src/containers/Home/index.js":
/*!**************************************!*\
  !*** ./src/containers/Home/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class;
// import { getHomeList } from './store/actions';


var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _store = __webpack_require__(/*! ./store */ "./src/containers/Home/store/index.js");

var _reactMixin = __webpack_require__(/*! react-mixin */ "react-mixin");

var _reactMixin2 = _interopRequireDefault(_reactMixin);

var _index = __webpack_require__(/*! ../../mixins/index */ "./src/mixins/index.js");

var _index2 = _interopRequireDefault(_index);

var _style = __webpack_require__(/*! ./style.css */ "./src/containers/Home/style.css");

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// @connect(
//   state => ({ list: state.homeReducer.list }),
//   dispatch => ({
//     getHomeList() {
//       dispatch(getHomeList());
//     }
//   }),
// )
var Home = (_dec = (0, _reactRedux.connect)(function (state) {
  return { list: state.homeReducer.list };
}, _store.actions), _dec2 = _reactMixin2.default.decorate((0, _index2.default)()), _dec(_class = _dec2(_class = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));
  }
  // 只在客户端执行


  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // 当在浏览器渲染的时候，只有数据不存在事执行获取
      if (this.props.list.length === 0) {
        this.props.getHomeList();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _style2.default.Home },
        this.props.list.map(function (item, index) {
          return _react2.default.createElement(
            'p',
            { key: index },
            item.title
          );
        })
      );
    }
  }]);

  return Home;
}(_react2.default.Component)) || _class) || _class);

// https://reacttraining.com/react-router/web/guides/server-rendering

Home.loadData = function (store) {
  // 负责页面渲染之前，在路由数据提前加载好
  // 把action 内 返回的 Promise 在返回出去，执行多个用 Promise.all 处理
  return store.dispatch(_store.actions.getHomeList());
};

exports.default = Home;

/***/ }),

/***/ "./src/containers/Home/store/actions.js":
/*!**********************************************!*\
  !*** ./src/containers/Home/store/actions.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var CHANGE_HOME_LIST = exports.CHANGE_HOME_LIST = 'CHANGE_HOME_LIST';

var changeList = exports.changeList = function changeList(data) {
    return {
        type: CHANGE_HOME_LIST,
        data: data
    };
};

var getHomeList = exports.getHomeList = function getHomeList() {
    return function (dispatch, getState, axios) {
        // 返回 Promise 对象，在服务端执行
        // 代理前地址： http://47.95.113.63/ssr/api/news.json
        // 浏览器渲染请求的地址： http://localhost:8081/api/news.json
        // 服务端渲染请求的地址： /api/news.json
        // let url = '';
        // if (server) {
        //     url = 'http://47.95.113.63/ssr/api/news.json'
        // } else {
        //     url = '/api/news.json'
        // }

        // 问题：在服务端渲染的时候这个文件找不到会报错，因此服务端渲染时要请求后端完整路径
        //       http://47.95.113.63/ssr/api/news.json
        return axios.get('/api/news.json').then(function (res) {
            var list = res.data.data;
            dispatch(changeList(list));
        });
    };
};

/***/ }),

/***/ "./src/containers/Home/store/index.js":
/*!********************************************!*\
  !*** ./src/containers/Home/store/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.reducer = undefined;

var _reducer = __webpack_require__(/*! ./reducer */ "./src/containers/Home/store/reducer.js");

var _reducer2 = _interopRequireDefault(_reducer);

var _actions = __webpack_require__(/*! ./actions */ "./src/containers/Home/store/actions.js");

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.reducer = _reducer2.default;
exports.actions = actions;

/***/ }),

/***/ "./src/containers/Home/store/reducer.js":
/*!**********************************************!*\
  !*** ./src/containers/Home/store/reducer.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actions = __webpack_require__(/*! ./actions */ "./src/containers/Home/store/actions.js");

var defaultState = {
    list: []
    // reducer 接收 action 派发
};
exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
    var action = arguments[1];

    switch (action.type) {
        case _actions.CHANGE_HOME_LIST:
            return _extends({}, state, {
                list: action.data
            });
        default:
            return state;
    }
};

/***/ }),

/***/ "./src/containers/Home/style.css":
/*!***************************************!*\
  !*** ./src/containers/Home/style.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!./style.css */ "./node_modules/css-loader/index.js?!./src/containers/Home/style.css");
    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/lib/insertCss.js */ "./node_modules/isomorphic-style-loader/lib/insertCss.js");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "./src/containers/NotFound/index.js":
/*!******************************************!*\
  !*** ./src/containers/NotFound/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotFound = function (_React$Component) {
    _inherits(NotFound, _React$Component);

    function NotFound(props) {
        _classCallCheck(this, NotFound);

        return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).call(this, props));
    }

    _createClass(NotFound, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.props.staticContext && (this.props.staticContext.NOT_FOUND = true);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                'NotFound'
            );
        }
    }]);

    return NotFound;
}(_react2.default.Component);

exports.default = NotFound;

/***/ }),

/***/ "./src/containers/Translation/index.js":
/*!*********************************************!*\
  !*** ./src/containers/Translation/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _store = __webpack_require__(/*! ./store */ "./src/containers/Translation/store/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Translation = (_dec = (0, _reactRedux.connect)(function (state) {
    return {
        list: state.translationReducer.translationlist,
        login: state.headerReducer.login
    };
}, _store.actions), _dec(_class = function (_React$Component) {
    _inherits(Translation, _React$Component);

    function Translation(props) {
        _classCallCheck(this, Translation);

        var _this = _possibleConstructorReturn(this, (Translation.__proto__ || Object.getPrototypeOf(Translation)).call(this, props));

        _this.state = {
            name: 'Translation'
        };
        return _this;
    }

    _createClass(Translation, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // 当在浏览器渲染的时候，只有数据不存在事执行获取
            if (this.props.list.length === 0) {
                this.props.getTranslationList();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var login = this.props.login;

            return login ? _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h5',
                    null,
                    this.state.name
                ),
                this.props.list.map(function (item, index) {
                    return _react2.default.createElement(
                        'p',
                        { key: index },
                        item.title
                    );
                })
            ) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
        }
    }]);

    return Translation;
}(_react2.default.Component)) || _class);


Translation.loadData = function (store) {
    return store.dispatch(_store.actions.getTranslationList());
};

exports.default = Translation;

/***/ }),

/***/ "./src/containers/Translation/store/actions.js":
/*!*****************************************************!*\
  !*** ./src/containers/Translation/store/actions.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var CHANGE_TRANSLATION_LIST = exports.CHANGE_TRANSLATION_LIST = 'CHANGE_TRANSLATION_LIST';

var changeTranslationList = exports.changeTranslationList = function changeTranslationList(data) {
    return {
        type: CHANGE_TRANSLATION_LIST,
        data: data
    };
};

var getTranslationList = exports.getTranslationList = function getTranslationList() {
    return function (dispatch, getState, axios) {
        return axios.get('/api/translations.json').then(function (res) {
            console.log(res.data.data);
            if (res.data.success) {
                dispatch(changeTranslationList(res.data.data));
            } else {
                dispatch(changeTranslationList([]));
            }
        });
    };
};

/***/ }),

/***/ "./src/containers/Translation/store/index.js":
/*!***************************************************!*\
  !*** ./src/containers/Translation/store/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.reducer = undefined;

var _reducer = __webpack_require__(/*! ./reducer */ "./src/containers/Translation/store/reducer.js");

var _reducer2 = _interopRequireDefault(_reducer);

var _actions = __webpack_require__(/*! ./actions */ "./src/containers/Translation/store/actions.js");

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.reducer = _reducer2.default;
exports.actions = actions;

/***/ }),

/***/ "./src/containers/Translation/store/reducer.js":
/*!*****************************************************!*\
  !*** ./src/containers/Translation/store/reducer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actions = __webpack_require__(/*! ./actions */ "./src/containers/Translation/store/actions.js");

var defaultState = {
    translationlist: []
};

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
    var action = arguments[1];

    switch (action.type) {
        case _actions.CHANGE_TRANSLATION_LIST:
            return _extends({}, state, {
                translationlist: action.data
            });
        default:
            return state;
    }
};

/***/ }),

/***/ "./src/libs/config.js":
/*!****************************!*\
  !*** ./src/libs/config.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

// 获取接口前缀
var getBasicUrl = exports.getBasicUrl = function getBasicUrl() {};

/***/ }),

/***/ "./src/libs/index.js":
/*!***************************!*\
  !*** ./src/libs/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = exports.utils = undefined;

var _utils2 = __webpack_require__(/*! ./utils */ "./src/libs/utils.js");

var _utils = _interopRequireWildcard(_utils2);

var _config2 = __webpack_require__(/*! ./config */ "./src/libs/config.js");

var _config = _interopRequireWildcard(_config2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var utils = exports.utils = _utils;

var config = exports.config = _config;

/***/ }),

/***/ "./src/libs/utils.js":
/*!***************************!*\
  !*** ./src/libs/utils.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// 判断当前运行环境
var isServer = exports.isServer = function isServer() {
    var is = true;
    try {
        if (window) {
            is = false;
        }
    } catch (e) {
        is = true;
    }
    return is;
};

/***/ }),

/***/ "./src/mixins/index.js":
/*!*****************************!*\
  !*** ./src/mixins/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(/*! ../libs/index.js */ "./src/libs/index.js");

var _Global = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = function () {
    return {
        getDefaultProps: function getDefaultProps() {
            return {
                _Global: _Global
            };
        },
        componentWillMount: function componentWillMount() {},
        componentDidMount: function componentDidMount() {},
        componentWillUnmount: function componentWillUnmount() {}
    };
};

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _App = __webpack_require__(/*! ../App */ "./src/App.js");

var _App2 = _interopRequireDefault(_App);

var _Home = __webpack_require__(/*! ../containers/Home */ "./src/containers/Home/index.js");

var _Home2 = _interopRequireDefault(_Home);

var _Translation = __webpack_require__(/*! ../containers/Translation */ "./src/containers/Translation/index.js");

var _Translation2 = _interopRequireDefault(_Translation);

var _NotFound = __webpack_require__(/*! ../containers/NotFound */ "./src/containers/NotFound/index.js");

var _NotFound2 = _interopRequireDefault(_NotFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// export default [
//     {
//         path: '/',
//         component: Home,
//         exact: true, // 表示路由精确匹配
//         loadData: Home.loadData
//     },
//     {
//         path: '/home',
//         component: Home,
//         loadData: Home.loadData
//     },
//     {
//         path: '/login',
//         component: Login
//     }
// ]

exports.default = [{
    path: '/',
    component: _App2.default,
    loadData: _App2.default.loadData,
    routes: [{
        path: '/',
        component: _Home2.default,
        exact: true, // 表示路由精确匹配
        loadData: _Home2.default.loadData
    }, {
        path: '/home',
        component: _Home2.default,
        exact: true,
        loadData: _Home2.default.loadData
    }, {
        path: '/translation',
        component: _Translation2.default,
        exact: true,
        loadData: _Translation2.default.loadData
    }, {
        // path: '/translation',
        component: _NotFound2.default
        // exact: true
    }]
}];

/***/ }),

/***/ "./src/server/axios.js":
/*!*****************************!*\
  !*** ./src/server/axios.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _axios = __webpack_require__(/*! axios */ "axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 创建实例时修改配置
// var instance = axios.create({
//     baseURL: 'http://47.95.113.63/ssr'
// });

exports.default = function (req) {
    return _axios2.default.create({
        baseURL: 'http://47.95.113.63/ssr',
        headers: {
            cookie: req.get('cookie') || '' //添加支持cookie转发
        },
        params: {
            secret: 'M5s2sPneDE'
        }
    });
};

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _root = __webpack_require__(/*! ./root */ "./src/server/root.js");

var _root2 = _interopRequireDefault(_root);

var _express = __webpack_require__(/*! express */ "express");

var _express2 = _interopRequireDefault(_express);

var _expressHttpProxy = __webpack_require__(/*! express-http-proxy */ "express-http-proxy");

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use(_express2.default.static('public'));
app.use('/client', _express2.default.static('client'));
// 代理浏览器接口请求
app.use('/api', (0, _expressHttpProxy2.default)('http://47.95.113.63', {
    proxyReqPathResolver: function proxyReqPathResolver(req) {
        // req.url: /news.json
        // http://47.95.113.63/ssr/api/news.json
        return '/ssr/api' + req.url;
    }
}));

app.get('*', function (req, res) {
    (0, _root2.default)(req, res);
});

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port);
});

/***/ }),

/***/ "./src/server/root.js":
/*!****************************!*\
  !*** ./src/server/root.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(/*! react-dom/server */ "react-dom/server");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _reactRouterConfig = __webpack_require__(/*! react-router-config */ "react-router-config");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _store = __webpack_require__(/*! ../store */ "./src/store/index.js");

var _routes = __webpack_require__(/*! ../routes */ "./src/routes/index.js");

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// matchPath： 只能匹配到一层路由，不能匹配到多级路由
exports.default = function (req, res) {
    var store = (0, _store.createServerStore)(req);
    // const promises = []
    // routes.some(route => {
    //     // 使用 matchPath 方法，匹配路由对应要展示的页面组件
    //     const match = matchPath(req.path, route);
    //     if (match) {
    //         promises.push(match);
    //     }
    //     return match;
    // })
    // console.log(promises);

    // 通过 matchRoutes 能匹配到路由的多级嵌套页面组件
    var matchedRoutes = (0, _reactRouterConfig.matchRoutes)(_routes2.default, req.path);
    var promises = [];
    // 执行 promises 内组件的 loadData 方法，获取数据
    matchedRoutes.forEach(function (item) {
        // 调用加载数据方法
        if (item.route.loadData) {
            // 把返回的 Promise 添加到数组中
            // promises.push(item.route.loadData(store));
            // 问题，当有一个接口出现异常，使 Promise.all 方法的不到调用，页面就渲染不了。解决即使有一个接口异常也能完整打开页面
            var promise = new Promise(function (resolve, reject) {
                // 捕获异常，也调用resolve
                item.route.loadData(store).then(resolve).catch(resolve);
            });
            // 在puhs自定义 promise
            promises.push(promise);
        }
    });

    // 打印出来的数据时默认值，因为ajax是异步，必须等待请求执行完成，在打印
    // console.log(store.getState());

    // 等到所有的 Promise 都执行成功，在去渲染页面
    Promise.all(promises).then(function () {
        // 打印出来的数据是有值的，说明组件提前要加载的数据成功
        console.log(store.getState());

        // 404页面的核心技术点
        var context = {};
        // 301 服务端重定向的实现
        // 发现使用了Redirect, StaticRouter会自动向context注入重定向内容

        var content = (0, _server.renderToString)(_react2.default.createElement(
            _reactRedux.Provider,
            { store: store },
            _react2.default.createElement(
                _reactRouterDom.StaticRouter,
                { location: req.url, context: context },
                (0, _reactRouterConfig.renderRoutes)(_routes2.default)
            )
        ));

        // 服务端样式的渲染
        var html = '\n                    <!DOCTYPE html>\n                    <html>\n                        <head>\n                            <title>react</title>\n                        </head>\n                        <body>\n                            <div id="root">' + content + '</div>\n                            <script>\n                                window._context = {\n                                    state: ' + JSON.stringify(store.getState()) + '\n                                }\n                            </script>\n                            <script src="/client/index.js"></script>\n                        </body>\n                    </html>\n                    ';
        console.log(context);
        if (context.action === 'REPLACE') {
            // 304重定向
            res.redirect(301, context.url);
        } else if (context.NOT_FOUND) {
            // 访问不存在的页面返回404状态码
            res.status(404);
            res.send(html);
        } else {
            res.send(html);
        }
    });
};

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createClientStore = exports.createServerStore = undefined;

var _redux = __webpack_require__(/*! redux */ "redux");

var _reduxThunk = __webpack_require__(/*! redux-thunk */ "redux-thunk");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(/*! ./reducers */ "./src/store/reducers.js");

var _reducers2 = _interopRequireDefault(_reducers);

var _axios = __webpack_require__(/*! ../server/axios */ "./src/server/axios.js");

var _axios2 = _interopRequireDefault(_axios);

var _axios3 = __webpack_require__(/*! ../client/axios */ "./src/client/axios.js");

var _axios4 = _interopRequireDefault(_axios3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// export default () => {
//     const store = createStore(reducers, compose(
//         applyMiddleware(thunk)
//     ));
//     return store;
// }

var createServerStore = exports.createServerStore = function createServerStore(req) {
    var store = (0, _redux.createStore)(_reducers2.default, (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument((0, _axios2.default)(req)))));
    return store;
};

var createClientStore = exports.createClientStore = function createClientStore() {
    // 把服务端返回的数据，做为客户端默认数据使用。客户端的数据和服务器端的数据一致
    // 实现数据注水和脱水
    var defaultStore = window._context.state;
    var store = (0, _redux.createStore)(_reducers2.default, defaultStore, (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument((0, _axios4.default)()))));
    return store;
};

/***/ }),

/***/ "./src/store/reducers.js":
/*!*******************************!*\
  !*** ./src/store/reducers.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(/*! redux */ "redux");

var _store = __webpack_require__(/*! ../containers/Home/store */ "./src/containers/Home/store/index.js");

var _store2 = __webpack_require__(/*! ../components/Header/store */ "./src/components/Header/store/index.js");

var _store3 = __webpack_require__(/*! ../containers/Translation/store */ "./src/containers/Translation/store/index.js");

// 合并系统全部Reducer
exports.default = (0, _redux.combineReducers)({
    homeReducer: _store.reducer,
    headerReducer: _store2.reducer,
    translationReducer: _store3.reducer
});

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "babel-runtime/core-js/json/stringify":
/*!*******************************************************!*\
  !*** external "babel-runtime/core-js/json/stringify" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),

/***/ "babel-runtime/helpers/slicedToArray":
/*!******************************************************!*\
  !*** external "babel-runtime/helpers/slicedToArray" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-mixin":
/*!******************************!*\
  !*** external "react-mixin" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-mixin");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map