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
      lineNumber: 31
    },
    __self: undefined
  }, __jsx(_FormProvider__WEBPACK_IMPORTED_MODULE_2__["FormContext"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, ({
    dispatch,
    state
  }) => react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(forms[currentPage], {
    dispatch,
    state
  })), __jsx("button", {
    disabled: !hasLastPage,
    onClick: lastPage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, "last"), __jsx("button", {
    disabled: !hasNextPage,
    onClick: nextPage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "next"));
};

/* harmony default export */ __webpack_exports__["default"] = (FormWrapper);

/***/ })

})
//# sourceMappingURL=form.js.a6dd49742e591168438a.hot-update.js.map