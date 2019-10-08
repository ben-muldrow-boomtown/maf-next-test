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
    dispatch,
    pageNumber
  } = props;
  const fullNameRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const phoneRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const emailRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const updateField = (dispatch, ref) => {
    dispatch({
      type: e.target.id,
      payload: {
        key: e.target.id,
        value: e.target.value
      }
    });
  }; // simple validation


  const updateValidation = () => {
    if (fullNameRef.current.value && phoneRef.current.value && emailRef.current.value) {
      dispatch({
        type: 'validation',
        payload: {
          pageNumber,
          valid: true
        }
      });
    } else {
      dispatch({
        type: 'validation',
        payload: {
          pageNumber,
          valid: false
        }
      });
    }
  };

  const onChange = e => {
    updateField(dispatch, e);
    updateValidation();
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx("input", {
    id: "fullName",
    type: "text",
    placeholder: "Full Name",
    onChange: onChange,
    ref: fullNameRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }), __jsx("input", {
    id: "phone",
    type: "phone",
    placeholder: "8888888888",
    onChange: onChange,
    ref: phoneRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }), __jsx("input", {
    id: "email",
    type: "email",
    placeholder: "placeholder@email.com",
    onChange: onChange,
    ref: emailRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactForm);

/***/ })

})
//# sourceMappingURL=form.js.07e4781cd2976114455e.hot-update.js.map