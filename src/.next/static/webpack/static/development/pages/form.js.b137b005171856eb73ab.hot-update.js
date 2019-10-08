webpackHotUpdate("static/development/pages/form.js",{

/***/ "./components/forms/FormContext.js":
/*!*****************************************!*\
  !*** ./components/forms/FormContext.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const FormContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
/* harmony default export */ __webpack_exports__["default"] = (FormContext);

/***/ }),

/***/ "./components/forms/FormProvider.js":
/*!******************************************!*\
  !*** ./components/forms/FormProvider.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FormContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormContext */ "./components/forms/FormContext.js");

var _jsxFileName = "/Users/benjaminmuldrow/Code/maf-next-test/src/components/forms/FormProvider.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const FormProvider = props => {
  const initialState = {
    fullName: 'jimbo',
    phone: '8438888888',
    email: 'jimbo@jim.rip'
  };

  const formReducer = (state, action) => {
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
  return __jsx(_FormContext__WEBPACK_IMPORTED_MODULE_2__["default"].Provider, {
    value: {
      state,
      dispatch
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (FormProvider);

/***/ })

})
//# sourceMappingURL=form.js.b137b005171856eb73ab.hot-update.js.map