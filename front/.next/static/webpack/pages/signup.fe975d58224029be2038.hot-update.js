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
    setPasswordcheck(e.target.value);
  };

  var onChangeGender = function onChangeGender(e) {
    setGender(e.target.value);
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
        lineNumber: 64,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
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
          lineNumber: 79,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
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
          lineNumber: 88,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
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
          lineNumber: 97,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        children: passworderror && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          style: {
            color: 'red'
          },
          children: "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 40
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
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
            lineNumber: 110,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Option, {
            value: "female",
            children: "female"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Option, {
            value: "other",
            children: "other"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
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
          lineNumber: 122,
          columnNumber: 21
        }, _this)
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, _objectSpread(_objectSpread({}, tailLayout), {}, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          type: "primary",
          htmlType: "submit",
          children: "\uAC00\uC785\uD558\uAE30"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 21
        }, _this)
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 17
      }, _this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbIk9wdGlvbiIsIlNlbGVjdCIsImxheW91dCIsImxhYmVsQ29sIiwic3BhbiIsIndyYXBwZXJDb2wiLCJ0YWlsTGF5b3V0Iiwib2Zmc2V0IiwiU2lnbnVwIiwidXNlU3RhdGUiLCJpZCIsInNldElkIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInBhc3N3b3JkY2hlY2siLCJzZXRQYXNzd29yZGNoZWNrIiwiZ2VuZGVyIiwic2V0R2VuZGVyIiwicmVtZW1iZXJtZSIsInNldFJlbWVtYmVybWUiLCJwYXNzd29yZGVycm9yIiwic2V0UGFzc3dvcmRFcnJvciIsIm9uU3VibWl0IiwiZSIsImNvbnNvbGUiLCJsb2ciLCJvbkNoYW5nZUlkIiwidGFyZ2V0IiwidmFsdWUiLCJvbkNoYW5nZVBhc3N3b3JkIiwib25DaGFuZ2VQYXNzd29yZENoZWNrIiwib25DaGFuZ2VHZW5kZXIiLCJvbkNoYW5nZVJlbWVtYmVyTWUiLCJjaGVja2VkIiwicmVtZW1iZXIiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtJQUVRQSxNLEdBQVdDLDJDLENBQVhELE07QUFFUixJQUFNRSxNQUFNLEdBQUc7QUFDWEMsVUFBUSxFQUFFO0FBQUVDLFFBQUksRUFBRTtBQUFSLEdBREM7QUFFWEMsWUFBVSxFQUFFO0FBQUVELFFBQUksRUFBRTtBQUFSO0FBRkQsQ0FBZjtBQUtBLElBQU1FLFVBQVUsR0FBRztBQUNmRCxZQUFVLEVBQUU7QUFBRUUsVUFBTSxFQUFFLENBQVY7QUFBYUgsUUFBSSxFQUFFO0FBQW5CO0FBREcsQ0FBbkI7O0FBSUEsSUFBTUksTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUNLQyxzREFBUSxDQUFDLEVBQUQsQ0FEYjtBQUFBLE1BQ1RDLEVB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QUVJLG9CQUFVLE1BRmQ7QUFBQSxrQ0FHSSxxRUFBQyxNQUFEO0FBQVEsaUJBQUssRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhKLGVBSUkscUVBQUMsTUFBRDtBQUFRLGlCQUFLLEVBQUMsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSixlQUtJLHFFQUFDLE1BQUQ7QUFBUSxpQkFBSyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTko7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWpDSixlQWdESSxxRUFBQyx5Q0FBRCxDQUFNLElBQU4sa0NBQ1F6QixVQURSO0FBRUksWUFBSSxFQUFDLFVBRlQ7QUFHSSxxQkFBYSxFQUFDLFNBSGxCO0FBSUksYUFBSyxFQUFFWSxVQUpYO0FBS0ksZ0JBQVEsRUFBRWMsa0JBTGQ7QUFBQSwrQkFNSSxxRUFBQyw2Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFoREosZUF5REkscUVBQUMseUNBQUQsQ0FBTSxJQUFOLGtDQUFlMUIsVUFBZjtBQUFBLCtCQUNJLHFFQUFDLDJDQUFEO0FBQVEsY0FBSSxFQUFDLFNBQWI7QUFBdUIsa0JBQVEsRUFBQyxRQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF6REo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTko7QUFBQSxrQkFESjtBQXNFSCxDQWxIRDs7R0FBTUUsTTs7S0FBQUEsTTtBQW9IU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbnVwLmZlOTc1ZDU4MjI0MDI5YmUyMDM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9BcHBMYXlvdXQnO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgU2VsZWN0LCBDaGVja2JveCwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcblxyXG5jb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xyXG5cclxuY29uc3QgbGF5b3V0ID0ge1xyXG4gICAgbGFiZWxDb2w6IHsgc3BhbjogOCB9LFxyXG4gICAgd3JhcHBlckNvbDogeyBzcGFuOiAxNiB9LFxyXG59O1xyXG5cclxuY29uc3QgdGFpbExheW91dCA9IHtcclxuICAgIHdyYXBwZXJDb2w6IHsgb2Zmc2V0OiA4LCBzcGFuOiAxNiB9LFxyXG59O1xyXG5cclxuY29uc3QgU2lnbnVwID0gKCkgPT4ge1xyXG4gICAgY29uc3QgWyBpZCwgc2V0SWQgXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFsgcGFzc3dvcmQsIHNldFBhc3N3b3JkIF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbIHBhc3N3b3JkY2hlY2ssIHNldFBhc3N3b3JkY2hlY2sgXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFsgZ2VuZGVyLCBzZXRHZW5kZXIgXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFsgcmVtZW1iZXJtZSwgc2V0UmVtZW1iZXJtZSBdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbIHBhc3N3b3JkZXJyb3IsIHNldFBhc3N3b3JkRXJyb3IgXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIC8vZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKHBhc3N3b3JkICE9PSBwYXNzd29yZGNoZWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXRQYXNzd29yZEVycm9yKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2Nlc3NcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coe1xyXG4gICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkY2hlY2ssXHJcbiAgICAgICAgICAgIGdlbmRlcixcclxuICAgICAgICAgICAgcmVtZW1iZXJtZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlSWQgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldElkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZVBhc3N3b3JkID0gKGUpID0+IHtcclxuICAgICAgICBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VQYXNzd29yZENoZWNrID0gKGUpID0+IHtcclxuICAgICAgICBzZXRQYXNzd29yZGNoZWNrKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZUdlbmRlciA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0R2VuZGVyKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZVJlbWVtYmVyTWUgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldFJlbWVtYmVybWUoZS50YXJnZXQuY2hlY2tlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYW50ZC80LjkuMi9hbnRkLm1pbi5jc3NcIj48L2xpbms+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPEFwcExheW91dD5cclxuICAgICAgICAgICAgPC9BcHBMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxGb3JtXHJcbiAgICAgICAgICAgICAgICB7Li4ubGF5b3V0fVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImJhc2ljXCJcclxuICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3sgcmVtZW1iZXI6IHRydWUgfX1cclxuICAgICAgICAgICAgICAgIG9uRmluaXNoPXtvblN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLslYTsnbTrlJRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnUGxlYXNlIGlucHV0IHlvdXIgdXNlcm5hbWUhJyB9XX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aWR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi67mE67CA67KI7Zi4XCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ1BsZWFzZSBpbnB1dCB5b3VyIHBhc3N3b3JkIScgfV19XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQuUGFzc3dvcmQgLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuu5hOuwgOuyiO2YuCDtmZXsnbhcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZGNoZWNrXCJcclxuICAgICAgICAgICAgICAgICAgICBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciBwYXNzd29yZCEnIH1dfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZGNoZWNrfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkQ2hlY2t9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dC5QYXNzd29yZCAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PntwYXNzd29yZGVycm9yICYmIDxkaXYgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19Puu5hOuwgOuyiO2YuOqwgCDsnbzsuZjtlZjsp4Ag7JWK7Iq164uI64ukLjwvZGl2Pn08L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJnZW5kZXJcIiBcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuyEseuzhFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSB9XX0gXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2dlbmRlcn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VHZW5kZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLshKDtg53tlZjsi5zsmKRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxvd0NsZWFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwibWFsZVwiPm1hbGU8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImZlbWFsZVwiPmZlbWFsZTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwib3RoZXJcIj5vdGhlcjwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBcclxuICAgICAgICAgICAgICAgICAgICB7Li4udGFpbExheW91dH0gXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJlbWVtYmVyXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVQcm9wTmFtZT1cImNoZWNrZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyZW1lbWJlcm1lfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVJlbWVtYmVyTWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveD7rgpjspJHsl5Drj4Qg7KCA7J6lPC9DaGVja2JveD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gey4uLnRhaWxMYXlvdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiPuqwgOyehe2VmOq4sDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWdudXA7Il0sInNvdXJjZVJvb3QiOiIifQ==