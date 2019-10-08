webpackHotUpdate("static/development/pages/form.js",{

/***/ "./components/forms/FormContext.js":
false,

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
  return __jsx(_FormProvider__WEBPACK_IMPORTED_MODULE_1__["FormContext"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("form", {
    onSubmit: e => onSubmit(e, fullName, phone, email),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("input", {
    id: "fullName",
    type: "text",
    placeholder: "Full Name",
    onChange: e => setFullName(e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), __jsx("input", {
    id: "phone",
    type: "phone",
    placeholder: "8888888888",
    onChange: e => setPhone(e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }), __jsx("input", {
    id: "email",
    type: "email",
    placeholder: "placeholder@email.com",
    onChange: e => setEmail(e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }), __jsx("input", {
    type: "submit",
    name: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactForm);

/***/ }),

/***/ "./components/forms/index.js":
/*!***********************************!*\
  !*** ./components/forms/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ "./components/forms/contact/index.js");
/* harmony import */ var _FormProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormProvider */ "./components/forms/FormProvider.js");
var _jsxFileName = "/Users/benjaminmuldrow/Code/maf-next-test/src/components/forms/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const FormWrapper = () => {
  // state for each attribute
  const {
    0: currentPage,
    1: setCurrentPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0); // all form components

  const forms = [__jsx(_contact__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  })]; // handle paging between forms

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
  }; // render 1 form at a time


  return __jsx(_FormProvider__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx(_FormProvider__WEBPACK_IMPORTED_MODULE_2__["FormContext"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, forms[currentPage], __jsx("button", {
    disabled: !hasLastPage,
    onClick: lastPage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "last"), __jsx("button", {
    disabled: !hasNextPage,
    onClick: nextPage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, "next")));
};

/* harmony default export */ __webpack_exports__["default"] = (FormWrapper);

/***/ })

})
//# sourceMappingURL=form.js.7dab086252647b799176.hot-update.js.map