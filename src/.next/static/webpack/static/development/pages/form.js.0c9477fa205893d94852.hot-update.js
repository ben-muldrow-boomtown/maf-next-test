webpackHotUpdate("static/development/pages/form.js",{

/***/ "./components/forms/contact/index.js":
/*!*******************************************!*\
  !*** ./components/forms/contact/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "../node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/benjaminmuldrow/Code/maf-next-test/src/components/forms/contact/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const ContactForm = props => {
  const {
    dispatch,
    pageNumber
  } = props;
  const fullNameRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const phoneRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const emailRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  const updateField = (dispatch, e) => {
    dispatch({
      type: e.target.id,
      payload: {
        key: e.target.id,
        value: e.target.value
      }
    });
  }; // simple validation


  console.log('uhhh', _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()());

  if (fullNameRef && phoneRef && emailRef) {
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
  }

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, __jsx("input", {
    id: "fullName",
    type: "text",
    placeholder: "Full Name",
    onChange: e => updateField(dispatch, e),
    ref: fullNameRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }), __jsx("input", {
    id: "phone",
    type: "phone",
    placeholder: "8888888888",
    onChange: e => updateField(dispatch, e),
    ref: phoneRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }), __jsx("input", {
    id: "email",
    type: "email",
    placeholder: "placeholder@email.com",
    onChange: e => updateField(dispatch, e),
    ref: emailRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactForm);

/***/ })

})
//# sourceMappingURL=form.js.0c9477fa205893d94852.hot-update.js.map