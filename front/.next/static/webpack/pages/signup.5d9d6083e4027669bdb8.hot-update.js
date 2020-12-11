webpackHotUpdate_N_E("pages/signup",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_ksyt9_OneDrive_react_nodebird_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");




var _jsxFileName = "C:\\Users\\ksyt9\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\react-nodebird\\front\\pages\\signup.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_ksyt9_OneDrive_react_nodebird_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var Option = antd__WEBPACK_IMPORTED_MODULE_5__["Select"].Option;
var layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};
var tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
};

var Signup = function Signup() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      id = _useState[0],
      setId = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      password = _useState2[0],
      setPassword = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      passwordcheck = _useState3[0],
      setPasswordcheck = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      gender = _useState4[0],
      setGender = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      rememberme = _useState5[0],
      setRememberme = _useState5[1];

  var onSubmit = function onSubmit(e) {
    e.preventDefault();
  };

  var onChangeId = function onChangeId(e) {
    setId(e.target.value);
  };

  var onChangePassword = function onChangePassword(e) {
    setPassword(e.target.value);
  };

  var onChangePasswordCheck = function onChangePasswordCheck(e) {
    setPasswordcheck(e.target.value);
  };

  var onChangeGender = function onChangeGender(e) {
    setGender(e.target.value);
  };

  var onChangeRememberMe = function onChangeRememberMe(e) {
    setRememberme(!e.target.value);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/antd/4.9.2/antd.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Form"], _objectSpread(_objectSpread({}, layout), {}, {
      name: "basic",
      initialValues: {
        remember: true
      },
      onSubmit: onSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
        label: "\uC544\uC774\uB514",
        name: "username",
        rules: [{
          required: true,
          message: 'Please input your username!'
        }],
        value: id,
        onChange: onChangeId,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
        label: "\uBE44\uBC00\uBC88\uD638",
        name: "password",
        rules: [{
          required: true,
          message: 'Please input your password!'
        }],
        value: password,
        onChange: onChangePassword,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Input"].Password, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
        label: "\uBE44\uBC00\uBC88\uD638 \uD655\uC778",
        name: "passwordcheck",
        rules: [{
          required: true,
          message: 'Please input your password!'
        }],
        value: passwordcheck,
        onChange: onChangePasswordCheck,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Input"].Password, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
        name: "gender",
        label: "\uC131\uBCC4",
        rules: [{
          required: true
        }],
        value: gender,
        onChange: onChangeGender,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Select"], {
          placeholder: "\uC120\uD0DD\uD558\uC2DC\uC624",
          allowClear: true,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Option, {
            value: "male",
            children: "male"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Option, {
            value: "female",
            children: "female"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Option, {
            value: "other",
            children: "other"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, _objectSpread(_objectSpread({}, tailLayout), {}, {
        name: "remember",
        valuePropName: "checked",
        value: rememberme,
        onChange: onChangeRememberMe,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Checkbox"], {
          children: "\uB098\uC911\uC5D0\uB3C4 \uC800\uC7A5"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 21
        }, _this)
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, _objectSpread(_objectSpread({}, tailLayout), {}, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          type: "primary",
          htmlType: "submit",
          children: "\uAC00\uC785\uD558\uAE30"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 21
        }, _this)
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 17
      }, _this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(Signup, "h5JoUxb2bZAFZY4GpDYyGw8Bh38=");

_c = Signup;
/* harmony default export */ __webpack_exports__["default"] = (Signup);

var _c;

$RefreshReg$(_c, "Signup");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbIk9wdGlvbiIsIlNlbGVjdCIsImxheW91dCIsImxhYmVsQ29sIiwic3BhbiIsIndyYXBwZXJDb2wiLCJ0YWlsTGF5b3V0Iiwib2Zmc2V0IiwiU2lnbnVwIiwidXNlU3RhdGUiLCJpZCIsInNldElkIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInBhc3N3b3JkY2hlY2siLCJzZXRQYXNzd29yZGNoZWNrIiwiZ2VuZGVyIiwic2V0R2VuZGVyIiwicmVtZW1iZXJtZSIsInNldFJlbWVtYmVybWUiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm9uQ2hhbmdlSWQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJvbkNoYW5nZVBhc3N3b3JkQ2hlY2siLCJvbkNoYW5nZUdlbmRlciIsIm9uQ2hhbmdlUmVtZW1iZXJNZSIsInJlbWVtYmVyIiwicmVxdWlyZWQiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0lBRVFBLE0sR0FBV0MsMkMsQ0FBWEQsTTtBQUVSLElBQU1FLE1BQU0sR0FBRztBQUNYQyxVQUFRLEVBQUU7QUFBRUMsUUFBSSxFQUFFO0FBQVIsR0FEQztBQUVYQyxZQUFVLEVBQUU7QUFBRUQsUUFBSSxFQUFFO0FBQVI7QUFGRCxDQUFmO0FBS0EsSUFBTUUsVUFBVSxHQUFHO0FBQ2ZELFlBQVUsRUFBRTtBQUFFRSxVQUFNLEVBQUUsQ0FBVjtBQUFhSCxRQUFJLEVBQUU7QUFBbkI7QUFERyxDQUFuQjs7QUFJQSxJQUFNSSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQUEsa0JBQ0tDLHNEQUFRLENBQUMsRUFBRCxDQURiO0FBQUEsTUFDVEMsRUFEUztBQUFBLE1BQ0xDLEtBREs7O0FBQUEsbUJBRWlCRixzREFBUSxDQUFDLEVBQUQsQ0FGekI7QUFBQSxNQUVURyxRQUZTO0FBQUEsTUFFQ0MsV0FGRDs7QUFBQSxtQkFHMkJKLHNEQUFRLENBQUMsRUFBRCxDQUhuQztBQUFBLE1BR1RLLGFBSFM7QUFBQSxNQUdNQyxnQkFITjs7QUFBQSxtQkFJYU4sc0RBQVEsQ0FBQyxFQUFELENBSnJCO0FBQUEsTUFJVE8sTUFKUztBQUFBLE1BSURDLFNBSkM7O0FBQUEsbUJBS3FCUixzREFBUSxDQUFDLEtBQUQsQ0FMN0I7QUFBQSxNQUtUUyxVQUxTO0FBQUEsTUFLR0MsYUFMSDs7QUFPakIsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3BCQSxLQUFDLENBQUNDLGNBQUY7QUFDSCxHQUZEOztBQUlBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNGLENBQUQsRUFBTztBQUN0QlYsU0FBSyxDQUFDVSxDQUFDLENBQUNHLE1BQUYsQ0FBU0MsS0FBVixDQUFMO0FBQ0gsR0FGRDs7QUFJQSxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNMLENBQUQsRUFBTztBQUM1QlIsZUFBVyxDQUFDUSxDQUFDLENBQUNHLE1BQUYsQ0FBU0MsS0FBVixDQUFYO0FBQ0gsR0FGRDs7QUFJQSxNQUFNRSxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUNOLENBQUQsRUFBTztBQUNqQ04sb0JBQWdCLENBQUNNLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxLQUFWLENBQWhCO0FBQ0gsR0FGRDs7QUFJQSxNQUFNRyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNQLENBQUQsRUFBTztBQUMxQkosYUFBUyxDQUFDSSxDQUFDLENBQUNHLE1BQUYsQ0FBU0MsS0FBVixDQUFUO0FBQ0gsR0FGRDs7QUFJQSxNQUFNSSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNSLENBQUQsRUFBTztBQUM5QkYsaUJBQWEsQ0FBQyxDQUFDRSxDQUFDLENBQUNHLE1BQUYsQ0FBU0MsS0FBWCxDQUFiO0FBQ0gsR0FGRDs7QUFJQSxzQkFDSTtBQUFBLDRCQUNJLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0k7QUFBTSxXQUFHLEVBQUMsWUFBVjtBQUF1QixZQUFJLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUlJLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSixlQU1JLHFFQUFDLHlDQUFELGtDQUNRdkIsTUFEUjtBQUVJLFVBQUksRUFBQyxPQUZUO0FBR0ksbUJBQWEsRUFBRTtBQUFFNEIsZ0JBQVEsRUFBRTtBQUFaLE9BSG5CO0FBSUksY0FBUSxFQUFFVixRQUpkO0FBQUEsOEJBS0kscUVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0ksYUFBSyxFQUFDLG9CQURWO0FBRUksWUFBSSxFQUFDLFVBRlQ7QUFHSSxhQUFLLEVBQUUsQ0FBQztBQUFFVyxrQkFBUSxFQUFFLElBQVo7QUFBa0JDLGlCQUFPLEVBQUU7QUFBM0IsU0FBRCxDQUhYO0FBSUksYUFBSyxFQUFFdEIsRUFKWDtBQUtJLGdCQUFRLEVBQUVhLFVBTGQ7QUFBQSwrQkFNSSxxRUFBQywwQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTko7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxKLGVBY0kscUVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0ksYUFBSyxFQUFDLDBCQURWO0FBRUksWUFBSSxFQUFDLFVBRlQ7QUFHSSxhQUFLLEVBQUUsQ0FBQztBQUFFUSxrQkFBUSxFQUFFLElBQVo7QUFBa0JDLGlCQUFPLEVBQUU7QUFBM0IsU0FBRCxDQUhYO0FBSUksYUFBSyxFQUFFcEIsUUFKWDtBQUtJLGdCQUFRLEVBQUVjLGdCQUxkO0FBQUEsK0JBTUkscUVBQUMsMENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZEosZUF1QkkscUVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0ksYUFBSyxFQUFDLHVDQURWO0FBRUksWUFBSSxFQUFDLGVBRlQ7QUFHSSxhQUFLLEVBQUUsQ0FBQztBQUFFSyxrQkFBUSxFQUFFLElBQVo7QUFBa0JDLGlCQUFPLEVBQUU7QUFBM0IsU0FBRCxDQUhYO0FBSUksYUFBSyxFQUFFbEIsYUFKWDtBQUtJLGdCQUFRLEVBQUVhLHFCQUxkO0FBQUEsK0JBTUkscUVBQUMsMENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdkJKLGVBZ0NJLHFFQUFDLHlDQUFELENBQU0sSUFBTjtBQUNJLFlBQUksRUFBQyxRQURUO0FBRUksYUFBSyxFQUFDLGNBRlY7QUFHSSxhQUFLLEVBQUUsQ0FBQztBQUFFSSxrQkFBUSxFQUFFO0FBQVosU0FBRCxDQUhYO0FBSUksYUFBSyxFQUFFZixNQUpYO0FBS0ksZ0JBQVEsRUFBRVksY0FMZDtBQUFBLCtCQU1JLHFFQUFDLDJDQUFEO0FBQ0kscUJBQVcsRUFBQyxnQ0FEaEI7QUFFSSxvQkFBVSxNQUZkO0FBQUEsa0NBR0kscUVBQUMsTUFBRDtBQUFRLGlCQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFISixlQUlJLHFFQUFDLE1BQUQ7QUFBUSxpQkFBSyxFQUFDLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkosZUFLSSxxRUFBQyxNQUFEO0FBQVEsaUJBQUssRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFoQ0osZUErQ0kscUVBQUMseUNBQUQsQ0FBTSxJQUFOLGtDQUNRdEIsVUFEUjtBQUVJLFlBQUksRUFBQyxVQUZUO0FBR0kscUJBQWEsRUFBQyxTQUhsQjtBQUlJLGFBQUssRUFBRVksVUFKWDtBQUtJLGdCQUFRLEVBQUVXLGtCQUxkO0FBQUEsK0JBTUkscUVBQUMsNkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBL0NKLGVBd0RJLHFFQUFDLHlDQUFELENBQU0sSUFBTixrQ0FBZXZCLFVBQWY7QUFBQSwrQkFDSSxxRUFBQywyQ0FBRDtBQUFRLGNBQUksRUFBQyxTQUFiO0FBQXVCLGtCQUFRLEVBQUMsUUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBeERKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5KO0FBQUEsa0JBREo7QUFxRUgsQ0FwR0Q7O0dBQU1FLE07O0tBQUFBLE07QUFzR1NBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ251cC41ZDlkNjA4M2U0MDI3NjY5YmRiOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvQXBwTGF5b3V0JztcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIFNlbGVjdCwgQ2hlY2tib3gsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5cclxuY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcclxuXHJcbmNvbnN0IGxheW91dCA9IHtcclxuICAgIGxhYmVsQ29sOiB7IHNwYW46IDggfSxcclxuICAgIHdyYXBwZXJDb2w6IHsgc3BhbjogMTYgfSxcclxufTtcclxuXHJcbmNvbnN0IHRhaWxMYXlvdXQgPSB7XHJcbiAgICB3cmFwcGVyQ29sOiB7IG9mZnNldDogOCwgc3BhbjogMTYgfSxcclxufTtcclxuXHJcbmNvbnN0IFNpZ251cCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFsgaWQsIHNldElkIF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbIHBhc3N3b3JkLCBzZXRQYXNzd29yZCBdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgWyBwYXNzd29yZGNoZWNrLCBzZXRQYXNzd29yZGNoZWNrIF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbIGdlbmRlciwgc2V0R2VuZGVyIF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbIHJlbWVtYmVybWUsIHNldFJlbWVtYmVybWUgXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlSWQgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldElkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZVBhc3N3b3JkID0gKGUpID0+IHtcclxuICAgICAgICBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VQYXNzd29yZENoZWNrID0gKGUpID0+IHtcclxuICAgICAgICBzZXRQYXNzd29yZGNoZWNrKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZUdlbmRlciA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0R2VuZGVyKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZVJlbWVtYmVyTWUgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldFJlbWVtYmVybWUoIWUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9hbnRkLzQuOS4yL2FudGQubWluLmNzc1wiPjwvbGluaz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8QXBwTGF5b3V0PlxyXG4gICAgICAgICAgICA8L0FwcExheW91dD5cclxuICAgICAgICAgICAgPEZvcm1cclxuICAgICAgICAgICAgICAgIHsuLi5sYXlvdXR9XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiYmFzaWNcIlxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17eyByZW1lbWJlcjogdHJ1ZSB9fVxyXG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuyVhOydtOuUlFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciB1c2VybmFtZSEnIH1dfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VJZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLruYTrsIDrsojtmLhcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnUGxlYXNlIGlucHV0IHlvdXIgcGFzc3dvcmQhJyB9XX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dC5QYXNzd29yZCAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi67mE67CA67KI7Zi4IO2ZleyduFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkY2hlY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ1BsZWFzZSBpbnB1dCB5b3VyIHBhc3N3b3JkIScgfV19XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkY2hlY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmRDaGVja30+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0LlBhc3N3b3JkIC8+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJnZW5kZXJcIiBcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuyEseuzhFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSB9XX0gXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2dlbmRlcn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VHZW5kZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLshKDtg53tlZjsi5zsmKRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxvd0NsZWFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwibWFsZVwiPm1hbGU8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImZlbWFsZVwiPmZlbWFsZTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwib3RoZXJcIj5vdGhlcjwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBcclxuICAgICAgICAgICAgICAgICAgICB7Li4udGFpbExheW91dH0gXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJlbWVtYmVyXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVQcm9wTmFtZT1cImNoZWNrZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyZW1lbWJlcm1lfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVJlbWVtYmVyTWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveD7rgpjspJHsl5Drj4Qg7KCA7J6lPC9DaGVja2JveD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gey4uLnRhaWxMYXlvdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiPuqwgOyehe2VmOq4sDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWdudXA7Il0sInNvdXJjZVJvb3QiOiIifQ==