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

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      rememberme = _useState5[0],
      setRememberme = _useState5[1];

  var onSubmit = function onSubmit(e) {
    e.preventDefault();
    console.log(id, password, passwordcheck, gender, rememberme);
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
    console.log(rememberme);
    {
      e.target.value === 'true' ? setRememberme(false) : setRememberme(true);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/antd/4.9.2/antd.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
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
          lineNumber: 74,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
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
          lineNumber: 83,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
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
          lineNumber: 92,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
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
            lineNumber: 104,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Option, {
            value: "female",
            children: "female"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Option, {
            value: "other",
            children: "other"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
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
          lineNumber: 116,
          columnNumber: 21
        }, _this)
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, _objectSpread(_objectSpread({}, tailLayout), {}, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          type: "primary",
          htmlType: "submit",
          children: "\uAC00\uC785\uD558\uAE30"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 21
        }, _this)
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 17
      }, _this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(Signup, "kCfy0N2TZ2D7NUj5kM8f9y8yjP0=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbIk9wdGlvbiIsIlNlbGVjdCIsImxheW91dCIsImxhYmVsQ29sIiwic3BhbiIsIndyYXBwZXJDb2wiLCJ0YWlsTGF5b3V0Iiwib2Zmc2V0IiwiU2lnbnVwIiwidXNlU3RhdGUiLCJpZCIsInNldElkIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInBhc3N3b3JkY2hlY2siLCJzZXRQYXNzd29yZGNoZWNrIiwiZ2VuZGVyIiwic2V0R2VuZGVyIiwicmVtZW1iZXJtZSIsInNldFJlbWVtYmVybWUiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJvbkNoYW5nZUlkIiwidGFyZ2V0IiwidmFsdWUiLCJvbkNoYW5nZVBhc3N3b3JkIiwib25DaGFuZ2VQYXNzd29yZENoZWNrIiwib25DaGFuZ2VHZW5kZXIiLCJvbkNoYW5nZVJlbWVtYmVyTWUiLCJyZW1lbWJlciIsInJlcXVpcmVkIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtJQUVRQSxNLEdBQVdDLDJDLENBQVhELE07QUFFUixJQUFNRSxNQUFNLEdBQUc7QUFDWEMsVUFBUSxFQUFFO0FBQUVDLFFBQUksRUFBRTtBQUFSLEdBREM7QUFFWEMsWUFBVSxFQUFFO0FBQUVELFFBQUksRUFBRTtBQUFSO0FBRkQsQ0FBZjtBQUtBLElBQU1FLFVBQVUsR0FBRztBQUNmRCxZQUFVLEVBQUU7QUFBRUUsVUFBTSxFQUFFLENBQVY7QUFBYUgsUUFBSSxFQUFFO0FBQW5CO0FBREcsQ0FBbkI7O0FBSUEsSUFBTUksTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUNLQyxzREFBUSxDQUFDLEVBQUQsQ0FEYjtBQUFBLE1BQ1RDLEVBRFM7QUFBQSxNQUNMQyxLQURLOztBQUFBLG1CQUVpQkYsc0RBQVEsQ0FBQyxFQUFELENBRnpCO0FBQUEsTUFFVEcsUUFGUztBQUFBLE1BRUNDLFdBRkQ7O0FBQUEsbUJBRzJCSixzREFBUSxDQUFDLEVBQUQsQ0FIbkM7QUFBQSxNQUdUSyxhQUhTO0FBQUEsTUFHTUMsZ0JBSE47O0FBQUEsbUJBSWFOLHNEQUFRLENBQUMsRUFBRCxDQUpyQjtBQUFBLE1BSVRPLE1BSlM7QUFBQSxNQUlEQyxTQUpDOztBQUFBLG1CQUtxQlIsc0RBQVEsQ0FBQyxJQUFELENBTDdCO0FBQUEsTUFLVFMsVUFMUztBQUFBLE1BS0dDLGFBTEg7O0FBT2pCLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLENBQUQsRUFBTztBQUNwQkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUNJZCxFQURKLEVBRUlFLFFBRkosRUFHSUUsYUFISixFQUlJRSxNQUpKLEVBS0lFLFVBTEo7QUFPSCxHQVREOztBQVdBLE1BQU1PLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNKLENBQUQsRUFBTztBQUN0QlYsU0FBSyxDQUFDVSxDQUFDLENBQUNLLE1BQUYsQ0FBU0MsS0FBVixDQUFMO0FBQ0gsR0FGRDs7QUFJQSxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNQLENBQUQsRUFBTztBQUM1QlIsZUFBVyxDQUFDUSxDQUFDLENBQUNLLE1BQUYsQ0FBU0MsS0FBVixDQUFYO0FBQ0gsR0FGRDs7QUFJQSxNQUFNRSxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUNSLENBQUQsRUFBTztBQUNqQ04sb0JBQWdCLENBQUNNLENBQUMsQ0FBQ0ssTUFBRixDQUFTQyxLQUFWLENBQWhCO0FBQ0gsR0FGRDs7QUFJQSxNQUFNRyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNULENBQUQsRUFBTztBQUMxQkosYUFBUyxDQUFDSSxDQUFDLENBQUNLLE1BQUYsQ0FBU0MsS0FBVixDQUFUO0FBQ0gsR0FGRDs7QUFJQSxNQUFNSSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNWLENBQUQsRUFBTztBQUM5QkUsV0FBTyxDQUFDQyxHQUFSLENBQVlOLFVBQVo7QUFDQTtBQUFFRyxPQUFDLENBQUNLLE1BQUYsQ0FBU0MsS0FBVCxLQUFtQixNQUFuQixHQUE0QlIsYUFBYSxDQUFDLEtBQUQsQ0FBekMsR0FBbURBLGFBQWEsQ0FBQyxJQUFELENBQWhFO0FBQXdFO0FBQzdFLEdBSEQ7O0FBS0Esc0JBQ0k7QUFBQSw0QkFDSSxxRUFBQyxnREFBRDtBQUFBLDZCQUNJO0FBQU0sV0FBRyxFQUFDLFlBQVY7QUFBdUIsWUFBSSxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFJSSxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkosZUFNSSxxRUFBQyx5Q0FBRCxrQ0FDUWpCLE1BRFI7QUFFSSxVQUFJLEVBQUMsT0FGVDtBQUdJLG1CQUFhLEVBQUU7QUFBRThCLGdCQUFRLEVBQUU7QUFBWixPQUhuQjtBQUlJLGNBQVEsRUFBRVosUUFKZDtBQUFBLDhCQUtJLHFFQUFDLHlDQUFELENBQU0sSUFBTjtBQUNJLGFBQUssRUFBQyxvQkFEVjtBQUVJLFlBQUksRUFBQyxVQUZUO0FBR0ksYUFBSyxFQUFFLENBQUM7QUFBRWEsa0JBQVEsRUFBRSxJQUFaO0FBQWtCQyxpQkFBTyxFQUFFO0FBQTNCLFNBQUQsQ0FIWDtBQUlJLGFBQUssRUFBRXhCLEVBSlg7QUFLSSxnQkFBUSxFQUFFZSxVQUxkO0FBQUEsK0JBTUkscUVBQUMsMENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMSixlQWNJLHFFQUFDLHlDQUFELENBQU0sSUFBTjtBQUNJLGFBQUssRUFBQywwQkFEVjtBQUVJLFlBQUksRUFBQyxVQUZUO0FBR0ksYUFBSyxFQUFFLENBQUM7QUFBRVEsa0JBQVEsRUFBRSxJQUFaO0FBQWtCQyxpQkFBTyxFQUFFO0FBQTNCLFNBQUQsQ0FIWDtBQUlJLGFBQUssRUFBRXRCLFFBSlg7QUFLSSxnQkFBUSxFQUFFZ0IsZ0JBTGQ7QUFBQSwrQkFNSSxxRUFBQywwQ0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFkSixlQXVCSSxxRUFBQyx5Q0FBRCxDQUFNLElBQU47QUFDSSxhQUFLLEVBQUMsdUNBRFY7QUFFSSxZQUFJLEVBQUMsZUFGVDtBQUdJLGFBQUssRUFBRSxDQUFDO0FBQUVLLGtCQUFRLEVBQUUsSUFBWjtBQUFrQkMsaUJBQU8sRUFBRTtBQUEzQixTQUFELENBSFg7QUFJSSxhQUFLLEVBQUVwQixhQUpYO0FBS0ksZ0JBQVEsRUFBRWUscUJBTGQ7QUFBQSwrQkFNSSxxRUFBQywwQ0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF2QkosZUFnQ0kscUVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0ksWUFBSSxFQUFDLFFBRFQ7QUFFSSxhQUFLLEVBQUMsY0FGVjtBQUdJLGFBQUssRUFBRSxDQUFDO0FBQUVJLGtCQUFRLEVBQUU7QUFBWixTQUFELENBSFg7QUFJSSxhQUFLLEVBQUVqQixNQUpYO0FBS0ksZ0JBQVEsRUFBRWMsY0FMZDtBQUFBLCtCQU1JLHFFQUFDLDJDQUFEO0FBQ0kscUJBQVcsRUFBQyxnQ0FEaEI7QUFFSSxvQkFBVSxNQUZkO0FBQUEsa0NBR0kscUVBQUMsTUFBRDtBQUFRLGlCQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFISixlQUlJLHFFQUFDLE1BQUQ7QUFBUSxpQkFBSyxFQUFDLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkosZUFLSSxxRUFBQyxNQUFEO0FBQVEsaUJBQUssRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFoQ0osZUErQ0kscUVBQUMseUNBQUQsQ0FBTSxJQUFOLGtDQUNReEIsVUFEUjtBQUVJLFlBQUksRUFBQyxVQUZUO0FBR0kscUJBQWEsRUFBQyxTQUhsQjtBQUlJLGFBQUssRUFBRVksVUFKWDtBQUtJLGdCQUFRLEVBQUVhLGtCQUxkO0FBQUEsK0JBTUkscUVBQUMsNkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBL0NKLGVBd0RJLHFFQUFDLHlDQUFELENBQU0sSUFBTixrQ0FBZXpCLFVBQWY7QUFBQSwrQkFDSSxxRUFBQywyQ0FBRDtBQUFRLGNBQUksRUFBQyxTQUFiO0FBQXVCLGtCQUFRLEVBQUMsUUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBeERKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5KO0FBQUEsa0JBREo7QUFxRUgsQ0E1R0Q7O0dBQU1FLE07O0tBQUFBLE07QUE4R1NBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ251cC5iOTA4MWQ4ODRlNTk2NDk4ZWU5NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvQXBwTGF5b3V0JztcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIFNlbGVjdCwgQ2hlY2tib3gsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5cclxuY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcclxuXHJcbmNvbnN0IGxheW91dCA9IHtcclxuICAgIGxhYmVsQ29sOiB7IHNwYW46IDggfSxcclxuICAgIHdyYXBwZXJDb2w6IHsgc3BhbjogMTYgfSxcclxufTtcclxuXHJcbmNvbnN0IHRhaWxMYXlvdXQgPSB7XHJcbiAgICB3cmFwcGVyQ29sOiB7IG9mZnNldDogOCwgc3BhbjogMTYgfSxcclxufTtcclxuXHJcbmNvbnN0IFNpZ251cCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFsgaWQsIHNldElkIF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbIHBhc3N3b3JkLCBzZXRQYXNzd29yZCBdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgWyBwYXNzd29yZGNoZWNrLCBzZXRQYXNzd29yZGNoZWNrIF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbIGdlbmRlciwgc2V0R2VuZGVyIF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbIHJlbWVtYmVybWUsIHNldFJlbWVtYmVybWUgXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IG9uU3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICBwYXNzd29yZCxcclxuICAgICAgICAgICAgcGFzc3dvcmRjaGVjayxcclxuICAgICAgICAgICAgZ2VuZGVyLFxyXG4gICAgICAgICAgICByZW1lbWJlcm1lXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlSWQgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldElkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZVBhc3N3b3JkID0gKGUpID0+IHtcclxuICAgICAgICBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VQYXNzd29yZENoZWNrID0gKGUpID0+IHtcclxuICAgICAgICBzZXRQYXNzd29yZGNoZWNrKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZUdlbmRlciA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0R2VuZGVyKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZVJlbWVtYmVyTWUgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlbWVtYmVybWUpO1xyXG4gICAgICAgIHsgZS50YXJnZXQudmFsdWUgPT09ICd0cnVlJyA/IHNldFJlbWVtYmVybWUoZmFsc2UpIDogc2V0UmVtZW1iZXJtZSh0cnVlKSB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYW50ZC80LjkuMi9hbnRkLm1pbi5jc3NcIj48L2xpbms+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPEFwcExheW91dD5cclxuICAgICAgICAgICAgPC9BcHBMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxGb3JtXHJcbiAgICAgICAgICAgICAgICB7Li4ubGF5b3V0fVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImJhc2ljXCJcclxuICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3sgcmVtZW1iZXI6IHRydWUgfX1cclxuICAgICAgICAgICAgICAgIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLslYTsnbTrlJRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnUGxlYXNlIGlucHV0IHlvdXIgdXNlcm5hbWUhJyB9XX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aWR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi67mE67CA67KI7Zi4XCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ1BsZWFzZSBpbnB1dCB5b3VyIHBhc3N3b3JkIScgfV19XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQuUGFzc3dvcmQgLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuu5hOuwgOuyiO2YuCDtmZXsnbhcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZGNoZWNrXCJcclxuICAgICAgICAgICAgICAgICAgICBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciBwYXNzd29yZCEnIH1dfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZGNoZWNrfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkQ2hlY2t9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dC5QYXNzd29yZCAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZ2VuZGVyXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLshLHrs4RcIiBcclxuICAgICAgICAgICAgICAgICAgICBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUgfV19IFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtnZW5kZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlR2VuZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7ISg7YOd7ZWY7Iuc7JikXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dDbGVhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIm1hbGVcIj5tYWxlPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJmZW1hbGVcIj5mZW1hbGU8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIm90aGVyXCI+b3RoZXI8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gXHJcbiAgICAgICAgICAgICAgICAgICAgey4uLnRhaWxMYXlvdXR9IFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyZW1lbWJlclwiIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlUHJvcE5hbWU9XCJjaGVja2VkXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cmVtZW1iZXJtZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VSZW1lbWJlck1lfT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3g+64KY7KSR7JeQ64+EIOyggOyepTwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIHsuLi50YWlsTGF5b3V0fT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIj7qsIDsnoXtlZjquLA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwOyJdLCJzb3VyY2VSb290IjoiIn0=