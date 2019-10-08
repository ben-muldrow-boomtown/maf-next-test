webpackHotUpdate("static/development/pages/form.js",{

/***/ "./components/forms/index.js":
/*!***********************************!*\
  !*** ./components/forms/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./components/forms/contact/index.js");

var _jsxFileName = "/Users/benjaminmuldrow/Code/maf-next-test/src/components/forms/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const FormWrapper = () => {
  const forms = [_contact__WEBPACK_IMPORTED_MODULE_2__["default"]];
  const {
    0: currentPage,
    1: setCurrentPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const initialState = {
    fullName: 'jimbo'
  };

  const formsReducer = (state, action) => {
    switch (action.type) {
      case 'contactForm':
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          fullName: action.payload.fullName,
          phone: action.payload.phone,
          email: action.payload.email
        });

      default:
        return state;
    }
  };

  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(formsReducer, initialState);
  const hasNextPage = currentPage < forms.length - 1;
  const hasLastPage = currentPage > 0;

  const nextPage = () => {
    if (hasNextPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const lastPage = () => {
    if (hasLastPage) {
      setCurrentPage(currentPage - 1);
    }
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, forms[currentPage], __jsx("button", {
    active: hasLastPage,
    onClick: lastPage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, "last"), __jsx("button", {
    active: hasNextPage,
    onClick: nextPage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, "next"), !hasNextPage && __jsx("button", {
    onClick: () => console.log('submit'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, "submit all"));
};

/* harmony default export */ __webpack_exports__["default"] = (FormWrapper);

/***/ })

})
//# sourceMappingURL=form.js.5c868bfb7dc76975e2c0.hot-update.js.map