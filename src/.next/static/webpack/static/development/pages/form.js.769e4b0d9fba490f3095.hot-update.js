webpackHotUpdate("static/development/pages/form.js",{

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
var _jsxFileName = "/Users/benjaminmuldrow/Code/maf-next-test/src/components/forms/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const FormWrapper = () => {
  // state for each attribute
  const {
    0: currentPage,
    1: setCurrentPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''); // simulate post body from multiple forms

  const submitFullForm = () => {
    console.log('post body', {
      fullName,
      phone,
      email
    });
  }; // contact form


  const submitContactForm = (event, fullName, phone, email) => {
    event.preventDefault();
    setFullName(fullName);
    setPhone(phone);
    setEmail(email);
  }; // all form components


  const forms = [__jsx(_contact__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onSubmit: submitContactForm,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
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


  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, forms[currentPage], __jsx("button", {
    disabled: !hasLastPage,
    onClick: lastPage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, "last"), __jsx("button", {
    disabled: !hasNextPage,
    onClick: nextPage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, "next"), !hasNextPage && __jsx("button", {
    onClick: submitFullForm,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "submit all"));
};

/* harmony default export */ __webpack_exports__["default"] = (FormWrapper);

/***/ })

})
//# sourceMappingURL=form.js.769e4b0d9fba490f3095.hot-update.js.map