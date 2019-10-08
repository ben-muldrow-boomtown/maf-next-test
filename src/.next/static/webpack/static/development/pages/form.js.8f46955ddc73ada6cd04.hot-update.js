webpackHotUpdate("static/development/pages/form.js",{

/***/ "./components/forms/contact/index.js":
/*!*******************************************!*\
  !*** ./components/forms/contact/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FormProvider */ "./components/forms/FormProvider.js");
var _jsxFileName = "/Users/benjaminmuldrow/Code/maf-next-test/src/components/forms/contact/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ContactForm = props => {
  console.log('propz', props);

  const updateField = (dispatch, e) => {
    dispatch({
      type: e.target.id,
      payload: {
        key: e.target.id,
        value: e.target.value
      }
    });
  };

  return __jsx(_FormProvider__WEBPACK_IMPORTED_MODULE_1__["FormContext"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, ({
    dispatch
  }) => __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("input", {
    id: "fullName",
    type: "text",
    placeholder: "Full Name",
    onChange: e => updateField(dispatch, e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }), __jsx("input", {
    id: "phone",
    type: "phone",
    placeholder: "8888888888",
    onChange: e => updateField(dispatch, e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }), __jsx("input", {
    id: "email",
    type: "email",
    placeholder: "placeholder@email.com",
    onChange: e => updateField(dispatch, e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactForm);

/***/ })

})
//# sourceMappingURL=form.js.8f46955ddc73ada6cd04.hot-update.js.map