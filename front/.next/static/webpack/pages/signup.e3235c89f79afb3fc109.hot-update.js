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

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      passworderror = _useState6[0],
      setPasswordError = _useState6[1];

  var onSubmit = function onSubmit(e) {
    //e.preventDefault();
    if (password !== passwordcheck) {
      return setPasswordError(true);
    }

    console.log("success");
    console.log({
      id: id,
      password: password,
      passwordcheck: passwordcheck,
      gender: gender,
      rememberme: rememberme
    });
  };

  var onChangeId = function onChangeId(e) {
    setId(e.target.value);
  };

  var onChangePassword = function onChangePassword(e) {
    setPassword(e.target.value);
  };

  var onChangePasswordCheck = function onChangePasswordCheck(e) {
    setPasswordError(e.target.value !== password);
    setPasswordcheck(e.target.value);
  };

  var onChangeGender = function onChangeGender(value) {
    switch (value) {
      case 'male':
        form.setFieldsValue({
          note: 'Hi, man!'
        });
        return;

      case 'female':
        form.setFieldsValue({
          note: 'Hi, lady!'
        });
        return;

      case 'other':
        form.setFieldsValue({
          note: 'Hi there!'
        });
        return;
    }

    console.log(e.target); //setGender(e.target.value);
  };

  var onChangeRememberMe = function onChangeRememberMe(e) {
    setRememberme(e.target.checked);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/antd/4.9.2/antd.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Form"], _objectSpread(_objectSpread({}, layout), {}, {
      name: "basic",
      initialValues: {
        remember: true
      },
      onFinish: onSubmit,
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
          lineNumber: 94,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
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
          lineNumber: 103,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
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
          lineNumber: 112,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        children: passworderror && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          style: {
            color: 'red'
          },
          children: "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 40
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
        name: "gender",
        label: "\uC131\uBCC4",
        rules: [{
          required: true
        }],
        value: gender,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Select"], {
          placeholder: "\uC120\uD0DD\uD558\uC2DC\uC624",
          allowClear: true,
          onChange: onChangeGender,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Option, {
            value: "male",
            children: "male"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Option, {
            value: "female",
            children: "female"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Option, {
            value: "other",
            children: "other"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
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
          lineNumber: 137,
          columnNumber: 21
        }, _this)
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, _objectSpread(_objectSpread({}, tailLayout), {}, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          type: "primary",
          htmlType: "submit",
          children: "\uAC00\uC785\uD558\uAE30"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 21
        }, _this)
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 17
      }, _this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(Signup, "9jufE5Vp90XmWapkjrdGIku2wYc=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbIk9wdGlvbiIsIlNlbGVjdCIsImxheW91dCIsImxhYmVsQ29sIiwic3BhbiIsIndyYXBwZXJDb2wiLCJ0YWlsTGF5b3V0Iiwib2Zmc2V0IiwiU2lnbnVwIiwidXNlU3RhdGUiLCJpZCIsInNldElkIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInBhc3N3b3JkY2hlY2siLCJzZXRQYXNzd29yZGNoZWNrIiwiZ2VuZGVyIiwic2V0R2VuZGVyIiwicmVtZW1iZXJtZSIsInNldFJlbWVtYmVybWUiLCJwYXNzd29yZGVycm9yIiwic2V0UGFzc3dvcmRFcnJvciIsIm9uU3VibWl0IiwiZSIsImNvbnNvbGUiLCJsb2ciLCJvbkNoYW5nZUlkIiwidGFyZ2V0IiwidmFsdWUiLCJvbkNoYW5nZVBhc3N3b3JkIiwib25DaGFuZ2VQYXNzd29yZENoZWNrIiwib25DaGFuZ2VHZW5kZXIiLCJmb3JtIiwic2V0RmllbGRzVmFsdWUiLCJub3RlIiwib25DaGFuZ2VSZW1lbWJlck1lIiwiY2hlY2tlZCIsInJlbWVtYmVyIiwicmVxdWlyZWQiLCJtZXNzYWdlIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7SUFFUUEsTSxHQUFXQywyQyxDQUFYRCxNO0FBRVIsSUFBTUUsTUFBTSxHQUFHO0FBQ1hDLFVBQVEsRUFBRTtBQUFFQyxRQUFJLEVBQUU7QUFBUixHQURDO0FBRVhDLFlBQVUsRUFBRTtBQUFFRCxRQUFJLEVBQUU7QUFBUjtBQUZELENBQWY7QUFLQSxJQUFNRSxVQUFVLEdBQUc7QUFDZkQsWUFBVSxFQUFFO0FBQUVFLFVBQU0sRUFBRSxDQUFWO0FBQWFILFFBQUksRUFBRTtBQUFuQjtBQURHLENBQW5COztBQUlBLElBQU1JLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQSxrQkFDS0Msc0RB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VUFBZjtBQUFBLCtCQUNJLHFFQUFDLDJDQUFEO0FBQVEsY0FBSSxFQUFDLFNBQWI7QUFBdUIsa0JBQVEsRUFBQyxRQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF6REo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTko7QUFBQSxrQkFESjtBQXNFSCxDQWpJRDs7R0FBTUUsTTs7S0FBQUEsTTtBQW1JU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbnVwLmUzMjM1Yzg5Zjc5YWZiM2ZjMTA5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9BcHBMYXlvdXQnO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgU2VsZWN0LCBDaGVja2JveCwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcblxyXG5jb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xyXG5cclxuY29uc3QgbGF5b3V0ID0ge1xyXG4gICAgbGFiZWxDb2w6IHsgc3BhbjogOCB9LFxyXG4gICAgd3JhcHBlckNvbDogeyBzcGFuOiAxNiB9LFxyXG59O1xyXG5cclxuY29uc3QgdGFpbExheW91dCA9IHtcclxuICAgIHdyYXBwZXJDb2w6IHsgb2Zmc2V0OiA4LCBzcGFuOiAxNiB9LFxyXG59O1xyXG5cclxuY29uc3QgU2lnbnVwID0gKCkgPT4ge1xyXG4gICAgY29uc3QgWyBpZCwgc2V0SWQgXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFsgcGFzc3dvcmQsIHNldFBhc3N3b3JkIF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbIHBhc3N3b3JkY2hlY2ssIHNldFBhc3N3b3JkY2hlY2sgXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFsgZ2VuZGVyLCBzZXRHZW5kZXIgXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFsgcmVtZW1iZXJtZSwgc2V0UmVtZW1iZXJtZSBdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbIHBhc3N3b3JkZXJyb3IsIHNldFBhc3N3b3JkRXJyb3IgXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIC8vZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKHBhc3N3b3JkICE9PSBwYXNzd29yZGNoZWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXRQYXNzd29yZEVycm9yKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2Nlc3NcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coe1xyXG4gICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkY2hlY2ssXHJcbiAgICAgICAgICAgIGdlbmRlcixcclxuICAgICAgICAgICAgcmVtZW1iZXJtZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlSWQgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldElkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZVBhc3N3b3JkID0gKGUpID0+IHtcclxuICAgICAgICBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VQYXNzd29yZENoZWNrID0gKGUpID0+IHtcclxuICAgICAgICBzZXRQYXNzd29yZEVycm9yKGUudGFyZ2V0LnZhbHVlICE9PSBwYXNzd29yZCk7XHJcbiAgICAgICAgc2V0UGFzc3dvcmRjaGVjayhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VHZW5kZXIgPSB2YWx1ZSA9PiB7XHJcbiAgICAgICBcclxuICAgICAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgIGNhc2UgJ21hbGUnOlxyXG4gICAgICAgICAgICAgICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7IG5vdGU6ICdIaSwgbWFuIScgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgY2FzZSAnZmVtYWxlJzpcclxuICAgICAgICAgICAgICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoeyBub3RlOiAnSGksIGxhZHkhJyB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICBjYXNlICdvdGhlcic6XHJcbiAgICAgICAgICAgICAgICBmb3JtLnNldEZpZWxkc1ZhbHVlKHsgbm90ZTogJ0hpIHRoZXJlIScgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KTtcclxuICAgICAgICAvL3NldEdlbmRlcihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VSZW1lbWJlck1lID0gKGUpID0+IHtcclxuICAgICAgICBzZXRSZW1lbWJlcm1lKGUudGFyZ2V0LmNoZWNrZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2FudGQvNC45LjIvYW50ZC5taW4uY3NzXCI+PC9saW5rPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgICAgICAgIDwvQXBwTGF5b3V0PlxyXG4gICAgICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgICAgICAgey4uLmxheW91dH1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJiYXNpY1wiXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7IHJlbWVtYmVyOiB0cnVlIH19XHJcbiAgICAgICAgICAgICAgICBvbkZpbmlzaD17b25TdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi7JWE7J2065SUXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ1BsZWFzZSBpbnB1dCB5b3VyIHVzZXJuYW1lIScgfV19XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUlkfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuu5hOuwgOuyiO2YuFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciBwYXNzd29yZCEnIH1dfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0LlBhc3N3b3JkIC8+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLruYTrsIDrsojtmLgg7ZmV7J24XCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRjaGVja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnUGxlYXNlIGlucHV0IHlvdXIgcGFzc3dvcmQhJyB9XX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmRjaGVja31cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZENoZWNrfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQuUGFzc3dvcmQgLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPGRpdj57cGFzc3dvcmRlcnJvciAmJiA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT7ruYTrsIDrsojtmLjqsIAg7J287LmY7ZWY7KeAIOyViuyKteuLiOuLpC48L2Rpdj59PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZ2VuZGVyXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLshLHrs4RcIiBcclxuICAgICAgICAgICAgICAgICAgICBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUgfV19IFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtnZW5kZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLshKDtg53tlZjsi5zsmKRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxvd0NsZWFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUdlbmRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJtYWxlXCI+bWFsZTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiZmVtYWxlXCI+ZmVtYWxlPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJvdGhlclwiPm90aGVyPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIFxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi50YWlsTGF5b3V0fSBcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmVtZW1iZXJcIiBcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVByb3BOYW1lPVwiY2hlY2tlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3JlbWVtYmVybWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUmVtZW1iZXJNZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94PuuCmOykkeyXkOuPhCDsoIDsnqU8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgPEZvcm0uSXRlbSB7Li4udGFpbExheW91dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCI+6rCA7J6F7ZWY6riwPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ251cDsiXSwic291cmNlUm9vdCI6IiJ9