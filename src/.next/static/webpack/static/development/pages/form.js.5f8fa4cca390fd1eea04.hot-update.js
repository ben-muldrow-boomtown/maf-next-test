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
var _jsxFileName = "/Users/benjaminmuldrow/Code/maf-next-test/src/components/forms/contact/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ContactForm = props => {
  const {
    onSubmit
  } = props;
  const {
    0: fullName,
    1: setFullName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: phone,
    1: setPhone
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  return __jsx("form", {
    onSubmit: e => onSubmit(e, fullName, phone, email),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("input", {
    id: "fullName",
    type: "text",
    placeholder: "Full Name",
    onChange: e => setFullName(e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), __jsx("input", {
    id: "phone",
    type: "phone",
    placeholder: "8888888888",
    onChange: e => setPhone(e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }), __jsx("input", {
    id: "email",
    type: "email",
    placeholder: "placeholder@email.com",
    onChange: e => setEmail(e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }), __jsx("input", {
    type: "submit",
    name: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactForm);

/***/ })

})
//# sourceMappingURL=form.js.5f8fa4cca390fd1eea04.hot-update.js.map