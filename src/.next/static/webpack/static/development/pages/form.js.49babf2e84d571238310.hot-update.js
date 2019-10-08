webpackHotUpdate("static/development/pages/form.js",{

/***/ "./components/forms/FormProvider.js":
/*!******************************************!*\
  !*** ./components/forms/FormProvider.js ***!
  \******************************************/
/*! exports provided: FormContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormContext", function() { return FormContext; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/benjaminmuldrow/Code/maf-next-test/src/components/forms/FormProvider.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const FormContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();

const FormProvider = props => {
  const initialState = {
    fullName: '',
    phone: '',
    email: ''
  };

  const formReducer = (state, action) => {
    console.log('hit reducer', action.payload.key, action.payload.value);

    switch (action.type) {
      case 'set':
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          [action.payload.key]: action.payload.value
        });

      case 'reset':
        return initialState;

      default:
        return state;
    }
  };

  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(formReducer, initialState);
  return __jsx(FormContext.Provider, {
    value: {
      state,
      dispatch
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (FormProvider);

/***/ })

})
//# sourceMappingURL=form.js.49babf2e84d571238310.hot-update.js.map