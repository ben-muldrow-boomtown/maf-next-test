webpackHotUpdate("static/development/pages/form.js",{

/***/ "../node_modules/@babel/runtime-corejs2/core-js/date/now.js":
/*!******************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/date/now.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/date/now */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/date/now.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/date/now.js":
/*!******************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/date/now.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.date.now */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.date.now.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Date.now;


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.date.now.js":
/*!***************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.date.now.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__(/*! ./_export */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),

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

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
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
      lineNumber: 41
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
      lineNumber: 48
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
      lineNumber: 55
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactForm);

/***/ })

})
//# sourceMappingURL=form.js.273519aec95ba0411665.hot-update.js.map