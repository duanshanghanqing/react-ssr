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

var _Header = __webpack_require__(/*! ./components/Header */ "./src/components/Header.js");

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        (0, _reactRouterConfig.renderRoutes)(props.route.routes)
    );
};

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
var instance = _axios2.default.create({
    baseURL: ''
});

exports.default = instance;

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/home" },
            "home"
        ),
        "---",
        _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/login" },
            "login"
        )
    );
};

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

var _dec, _class;
// import { getHomeList } from './store/action';


var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _action = __webpack_require__(/*! ./store/action */ "./src/containers/Home/store/action.js");

var actions = _interopRequireWildcard(_action);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
}, actions), _dec(_class = function (_React$Component) {
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
        null,
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
}(_react2.default.Component)) || _class);

// https://reacttraining.com/react-router/web/guides/server-rendering

Home.loadData = function (store) {
  // 负责页面渲染之前，在路由数据提前加载好
  // 把action 内 返回的 Promise 在返回出去，执行多个用 Promise.all 处理
  return store.dispatch(actions.getHomeList());
};

exports.default = Home;

/***/ }),

/***/ "./src/containers/Home/store/action.js":
/*!*********************************************!*\
  !*** ./src/containers/Home/store/action.js ***!
  \*********************************************/
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
        // 代理前地址： http://47.95.113.63/ssr/api/news.json?secret=M5s2sPneDE
        // 浏览器渲染请求的地址： http://localhost:8081/api/news.json?secret=M5s2sPneDE
        // 服务端渲染请求的地址： /api/news.json?secret=M5s2sPneDE
        // let url = '';
        // if (server) {
        //     url = 'http://47.95.113.63/ssr/api/news.json?secret=M5s2sPneDE'
        // } else {
        //     url = '/api/news.json?secret=M5s2sPneDE'
        // }

        // 问题：在服务端渲染的时候这个文件找不到会报错，因此服务端渲染时要请求后端完整路径
        //       http://47.95.113.63/ssr/api/news.json?secret=M5s2sPneDE
        return axios.get('/api/news.json?secret=M5s2sPneDE').then(function (res) {
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
exports.reducer = undefined;

var _reducer = __webpack_require__(/*! ./reducer */ "./src/containers/Home/store/reducer.js");

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.reducer = _reducer2.default;

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

var _action = __webpack_require__(/*! ./action */ "./src/containers/Home/store/action.js");

var defaultState = {
    list: []
    // reducer 接收 action 派发
};
exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
    var action = arguments[1];

    switch (action.type) {
        case _action.CHANGE_HOME_LIST:
            return _extends({}, state, {
                list: action.data
            });
        default:
            return state;
    }
};

/***/ }),

/***/ "./src/containers/Login/index.js":
/*!***************************************!*\
  !*** ./src/containers/Login/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_React$Component) {
    _inherits(Login, _React$Component);

    function Login(props) {
        _classCallCheck(this, Login);

        var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

        _this.state = {
            name: 'Login'
        };
        return _this;
    }

    _createClass(Login, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                this.state.name
            );
        }
    }]);

    return Login;
}(_react2.default.Component);

exports.default = Login;

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

var _Login = __webpack_require__(/*! ../containers/Login */ "./src/containers/Login/index.js");

var _Login2 = _interopRequireDefault(_Login);

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
    routes: [{
        path: '/',
        component: _Home2.default,
        exact: true, // 表示路由精确匹配
        loadData: _Home2.default.loadData
    }, {
        path: '/home',
        component: _Home2.default,
        exact: true, // 表示路由精确匹配
        loadData: _Home2.default.loadData
    }, {
        path: '/login',
        exact: true,
        component: _Login2.default
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
var instance = _axios2.default.create({
    baseURL: 'http://47.95.113.63/ssr'
});

exports.default = instance;

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
        // req.url: /news.json?secret=M5s2sPneDE
        // http://47.95.113.63/ssr/api/news.json?secret=M5s2sPneDE
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
    var store = (0, _store.createServerStore)();
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
            promises.push(item.route.loadData(store));
        }
    });

    // 打印出来的数据时默认值，因为ajax是异步，必须等待请求执行完成，在打印
    // console.log(store.getState());

    // 等到所有的 Promise 都执行成功，在去渲染页面
    Promise.all(promises).then(function () {
        // 打印出来的数据是有值的，说明组件提前要加载的数据成功
        console.log(store.getState());

        var content = (0, _server.renderToString)(_react2.default.createElement(
            _reactRedux.Provider,
            { store: store },
            _react2.default.createElement(
                _reactRouterDom.StaticRouter,
                { location: req.url, context: {} },
                (0, _reactRouterConfig.renderRoutes)(_routes2.default)
            )
        ));
        res.send('\n            <!DOCTYPE html>\n            <html>\n                <head>\n                    <title>react</title>\n                </head>\n                <body>\n                    <div id="root">' + content + '</div>\n                    <script>\n                        window._context = {\n                            state: ' + JSON.stringify(store.getState()) + '\n                        }\n                    </script>\n                    <script src="/client/index.js"></script>\n                </body>\n            </html>\n        ');
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

var createServerStore = exports.createServerStore = function createServerStore() {
    var store = (0, _redux.createStore)(_reducers2.default, (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(_axios2.default))));
    return store;
};

var createClientStore = exports.createClientStore = function createClientStore() {
    // 把服务端返回的数据，做为客户端默认数据使用。客户端的数据和服务器端的数据一致
    // 实现数据注水和脱水
    var defaultStore = window._context.state;
    var store = (0, _redux.createStore)(_reducers2.default, defaultStore, (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(_axios4.default))));
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

// 合并系统全部Reducer
exports.default = (0, _redux.combineReducers)({
    homeReducer: _store.reducer
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