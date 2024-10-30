"use strict";
exports.id = "component---src-pages-plants-js";
exports.ids = ["component---src-pages-plants-js"];
exports.modules = {

/***/ "./src/components/Column.jsx":
/*!***********************************!*\
  !*** ./src/components/Column.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.development.esm.js");


const Column = ({
  children,
  extraClass
}) => {
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: `column ${extraClass}`
  }, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Column);

/***/ }),

/***/ "./src/components/ColumnContainer.jsx":
/*!********************************************!*\
  !*** ./src/components/ColumnContainer.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Column__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Column */ "./src/components/Column.jsx");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.development.esm.js");



const ColumnContainer = ({
  children,
  extraClass
}) => {
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: `column-container ${extraClass}`
  }, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColumnContainer);

/***/ }),

/***/ "./src/components/CustomStyles/Button.styles.jsx":
/*!*******************************************************!*\
  !*** ./src/components/CustomStyles/Button.styles.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.development.esm.js");
/* harmony import */ var _images_footer_background_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/footer-background.png */ "./src/images/footer-background.png");
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }




var _ref =  false ? 0 : {
  name: "1ugydci-ButtonStyles",
  styles: "button{all:unset;appearance:none;background:none;border:none;padding:0;margin:0;box-sizing:border-box;font:inherit;color:inherit;cursor:pointer;}.add-plant-button{position:absolute;right:0;top:35px;font-family:'adlery-pro',sans-serif;font-weight:400;font-style:normal;font-size:35px;transform:rotate(35deg);text-shadow:5px 8px 6px rgba(0, 0, 0, 0.8);background:linear-gradient(#ee600f, #066d11, #0281b1);border-radius:15px;padding:10px;box-shadow:0 8px 15px rgba(0, 0, 0, 0.8);@media screen and (max-width: 768px){transform:unset;top:10px;right:20px;font-size:18px;}};label:ButtonStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yeWFud2Fzc29tL1NpdGVzL215cG9ydGZvbGlvL3NyYy9jb21wb25lbnRzL0N1c3RvbVN0eWxlcy9CdXR0b24uc3R5bGVzLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNZSIsImZpbGUiOiIvVXNlcnMvcnlhbndhc3NvbS9TaXRlcy9teXBvcnRmb2xpby9zcmMvY29tcG9uZW50cy9DdXN0b21TdHlsZXMvQnV0dG9uLnN0eWxlcy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBHbG9iYWwsIGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0J1xuaW1wb3J0IEZvb3RlckJnIGZyb20gJy4uLy4uL2ltYWdlcy9mb290ZXItYmFja2dyb3VuZC5wbmcnXG5cbmNvbnN0IEJ1dHRvblN0eWxlcyA9ICgpID0+IChcbiAgPEdsb2JhbFxuICAgIHN0eWxlcz17Y3NzYFxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgYWxsOiB1bnNldDtcbiAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5hZGQtcGxhbnQtYnV0dG9uIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdG9wOiAzNXB4O1xuICAgICAgICBmb250LWZhbWlseTogJ2FkbGVyeS1wcm8nLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzVkZWcpO1xuICAgICAgICB0ZXh0LXNoYWRvdzogNXB4IDhweCA2cHggcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2VlNjAwZiwgIzA2NmQxMSwgIzAyODFiMSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjgpO1xuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB1bnNldDtcbiAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH1cbiAgLz5cbilcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uU3R5bGVzXG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
const ButtonStyles = () => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_2__.Global, {
  styles: _ref
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonStyles);

/***/ }),

/***/ "./src/components/CustomStyles/Column.styles.jsx":
/*!*******************************************************!*\
  !*** ./src/components/CustomStyles/Column.styles.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.development.esm.js");
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }



var _ref =  false ? 0 : {
  name: "op4ipm-ColumnStyles",
  styles: ".column-container:not(.new-plants){display:grid;grid-template-columns:repeat(3, minmax(200px, 1fr));gap:25px;@media (max-width: 768px){display:flex;overflow-x:scroll;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;-ms-overflow-style:none;scrollbar-width:none;.column{flex:0 0 auto;width:80%;&::first-of-type{margin-left:20px;}}&::-webkit-scrollbar{display:none;}}};label:ColumnStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yeWFud2Fzc29tL1NpdGVzL215cG9ydGZvbGlvL3NyYy9jb21wb25lbnRzL0N1c3RvbVN0eWxlcy9Db2x1bW4uc3R5bGVzLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLZSIsImZpbGUiOiIvVXNlcnMvcnlhbndhc3NvbS9TaXRlcy9teXBvcnRmb2xpby9zcmMvY29tcG9uZW50cy9DdXN0b21TdHlsZXMvQ29sdW1uLnN0eWxlcy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBHbG9iYWwsIGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0J1xuXG5jb25zdCBDb2x1bW5TdHlsZXMgPSAoKSA9PiAoXG4gIDxHbG9iYWxcbiAgICBzdHlsZXM9e2Nzc2BcbiAgICAgIC5jb2x1bW4tY29udGFpbmVyOm5vdCgubmV3LXBsYW50cykge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMjAwcHgsIDFmcikpO1xuICAgICAgICBnYXA6IDI1cHg7XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgICAgICAgc2Nyb2xsLXNuYXAtdHlwZTogeCBtYW5kYXRvcnk7XG4gICAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgICAgICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgICAgICAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG5cbiAgICAgICAgICAuY29sdW1uIHtcbiAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcblxuICAgICAgICAgICAgJjo6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgYH1cbiAgLz5cbilcblxuZXhwb3J0IGRlZmF1bHQgQ29sdW1uU3R5bGVzXG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
const ColumnStyles = () => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_1__.Global, {
  styles: _ref
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColumnStyles);

/***/ }),

/***/ "./src/components/CustomStyles/Footer.styles.jsx":
/*!*******************************************************!*\
  !*** ./src/components/CustomStyles/Footer.styles.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.development.esm.js");
/* harmony import */ var _images_footer_background_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/footer-background.png */ "./src/images/footer-background.png");




const FooterStyles = () => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_2__.Global, {
  styles: /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.css)(".footer{height:75px;bottom:0;background-image:url('", _images_footer_background_png__WEBPACK_IMPORTED_MODULE_1__["default"], "');background-size:cover;background-position:bottom;}" + ( false ? 0 : ";label:FooterStyles;"),  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yeWFud2Fzc29tL1NpdGVzL215cG9ydGZvbGlvL3NyYy9jb21wb25lbnRzL0N1c3RvbVN0eWxlcy9Gb290ZXIuc3R5bGVzLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNZSIsImZpbGUiOiIvVXNlcnMvcnlhbndhc3NvbS9TaXRlcy9teXBvcnRmb2xpby9zcmMvY29tcG9uZW50cy9DdXN0b21TdHlsZXMvRm9vdGVyLnN0eWxlcy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBHbG9iYWwsIGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0J1xuaW1wb3J0IEZvb3RlckJnIGZyb20gJy4uLy4uL2ltYWdlcy9mb290ZXItYmFja2dyb3VuZC5wbmcnXG5cbmNvbnN0IEZvb3RlclN0eWxlcyA9ICgpID0+IChcbiAgPEdsb2JhbFxuICAgIHN0eWxlcz17Y3NzYFxuICAgICAgLmZvb3RlciB7XG4gICAgICAgIGhlaWdodDogNzVweDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyR7Rm9vdGVyQmd9Jyk7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcbiAgICAgIH1cbiAgICBgfVxuICAvPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXJTdHlsZXNcbiJdfQ== */")
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterStyles);

/***/ }),

/***/ "./src/components/CustomStyles/Global.styles.jsx":
/*!*******************************************************!*\
  !*** ./src/components/CustomStyles/Global.styles.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Site_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Site.styles */ "./src/components/CustomStyles/Site.styles.jsx");
/* harmony import */ var _Header_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.styles */ "./src/components/CustomStyles/Header.styles.jsx");
/* harmony import */ var _Footer_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer.styles */ "./src/components/CustomStyles/Footer.styles.jsx");
/* harmony import */ var _Wrapper_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Wrapper.styles */ "./src/components/CustomStyles/Wrapper.styles.jsx");
/* harmony import */ var _Typography_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Typography.styles */ "./src/components/CustomStyles/Typography.styles.jsx");
/* harmony import */ var _Column_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Column.styles */ "./src/components/CustomStyles/Column.styles.jsx");
/* harmony import */ var _Plant_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Plant.styles */ "./src/components/CustomStyles/Plant.styles.jsx");
/* harmony import */ var _Modal_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Modal.styles */ "./src/components/CustomStyles/Modal.styles.jsx");
/* harmony import */ var _Button_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Button.styles */ "./src/components/CustomStyles/Button.styles.jsx");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.development.esm.js");











const BaseStyles = () => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Site_styles__WEBPACK_IMPORTED_MODULE_1__["default"], null), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Header_styles__WEBPACK_IMPORTED_MODULE_2__["default"], null), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Wrapper_styles__WEBPACK_IMPORTED_MODULE_4__["default"], null), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Typography_styles__WEBPACK_IMPORTED_MODULE_5__["default"], null), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Button_styles__WEBPACK_IMPORTED_MODULE_9__["default"], null), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Modal_styles__WEBPACK_IMPORTED_MODULE_8__["default"], null), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Column_styles__WEBPACK_IMPORTED_MODULE_6__["default"], null), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Plant_styles__WEBPACK_IMPORTED_MODULE_7__["default"], null), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Footer_styles__WEBPACK_IMPORTED_MODULE_3__["default"], null));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseStyles);

/***/ }),

/***/ "./src/components/CustomStyles/Header.styles.jsx":
/*!*******************************************************!*\
  !*** ./src/components/CustomStyles/Header.styles.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.development.esm.js");
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }



var _ref =  false ? 0 : {
  name: "1vc8zgx-HeaderStyles",
  styles: ".header{margin-top:20px;border-bottom:2px solid white;width:100%;display:flex;justify-content:space-around;a{}}.navigation{margin-top:20px;display:flex;align-items:center;position:relative;justify-content:space-between;width:100%;max-width:1200px;.column{width:50%;display:flex;padding:0 20px 20px;justify-content:center;@media screen and (max-width: 768px){&:first-child{justify-content:flex-start;}&:last-child{justify-content:flex-end;}}}a{color:white;text-decoration:none;font-size:40px;@media screen and (max-width: 540px){font-size:30px;}}}.logo{position:absolute;top:110%;left:50%;transform:translate(-50%, -50%);max-width:225px;display:block;img{width:100%;}@media screen and (max-width: 540px){max-width:150px;}};label:HeaderStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yeWFud2Fzc29tL1NpdGVzL215cG9ydGZvbGlvL3NyYy9jb21wb25lbnRzL0N1c3RvbVN0eWxlcy9IZWFkZXIuc3R5bGVzLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLZSIsImZpbGUiOiIvVXNlcnMvcnlhbndhc3NvbS9TaXRlcy9teXBvcnRmb2xpby9zcmMvY29tcG9uZW50cy9DdXN0b21TdHlsZXMvSGVhZGVyLnN0eWxlcy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBHbG9iYWwsIGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0J1xuXG5jb25zdCBIZWFkZXJTdHlsZXMgPSAoKSA9PiAoXG4gIDxHbG9iYWxcbiAgICBzdHlsZXM9e2Nzc2BcbiAgICAgIC5oZWFkZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcblxuICAgICAgICBhIHtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAubmF2aWdhdGlvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMjAwcHg7XG5cbiAgICAgICAgLmNvbHVtbiB7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHBhZGRpbmc6IDAgMjBweCAyMHB4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG5cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NDBweCkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAubG9nbyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxMTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICBtYXgtd2lkdGg6IDIyNXB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcblxuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTQwcHgpIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH1cbiAgLz5cbilcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyU3R5bGVzXG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
const HeaderStyles = () => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_1__.Global, {
  styles: _ref
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderStyles);

/***/ }),

/***/ "./src/components/CustomStyles/Modal.styles.jsx":
/*!******************************************************!*\
  !*** ./src/components/CustomStyles/Modal.styles.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.development.esm.js");
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }



var _ref =  false ? 0 : {
  name: "1bjf20-ModalStyles",
  styles: ".modal-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.7);display:flex;justify-content:center;align-items:flex-start;z-index:1000;}.modal-content{background-color:#fff;text-align:center;color:#000;padding:20px;border-radius:5px;position:relative;max-width:300px;width:100%;margin-top:100px;form{margin-top:10px;display:flex;flex-direction:column;}input{border-radius:5px;border:1px solid #a2a2a2;padding:10px;}}.close-button{position:absolute;top:10px;right:10px;background:none;border:none;font-size:20px;cursor:pointer;}.submit-button{background:radial-gradient(circle, #0281b1, #066d11, #ee600f);padding:10px;border-radius:5px;color:white;font-family:'hippie',sans-serif;font-size:26px;color:white;text-shadow:2px 2px 0 #000,-2px -2px 0 #000,2px -2px 0 #000,-2px 2px 0 #000;}.add-plant-modal-title{font-family:'hippie',sans-serif;font-size:30px;};label:ModalStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yeWFud2Fzc29tL1NpdGVzL215cG9ydGZvbGlvL3NyYy9jb21wb25lbnRzL0N1c3RvbVN0eWxlcy9Nb2RhbC5zdHlsZXMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtlIiwiZmlsZSI6Ii9Vc2Vycy9yeWFud2Fzc29tL1NpdGVzL215cG9ydGZvbGlvL3NyYy9jb21wb25lbnRzL0N1c3RvbVN0eWxlcy9Nb2RhbC5zdHlsZXMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgR2xvYmFsLCBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCdcblxuY29uc3QgTW9kYWxTdHlsZXMgPSAoKSA9PiAoXG4gIDxHbG9iYWxcbiAgICBzdHlsZXM9e2Nzc2BcbiAgICAgIC5tb2RhbC1vdmVybGF5IHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgfVxuXG4gICAgICAubW9kYWwtY29udGVudCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG5cbiAgICAgICAgZm9ybSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNhMmEyYTI7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuY2xvc2UtYnV0dG9uIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICAuc3VibWl0LWJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICMwMjgxYjEsICMwNjZkMTEsICNlZTYwMGYpO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdoaXBwaWUnLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggMCAjMDAwLCAtMnB4IC0ycHggMCAjMDAwLCAycHggLTJweCAwICMwMDAsXG4gICAgICAgICAgLTJweCAycHggMCAjMDAwO1xuICAgICAgfVxuXG4gICAgICAuYWRkLXBsYW50LW1vZGFsLXRpdGxlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdoaXBwaWUnLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICB9XG4gICAgYH1cbiAgLz5cbilcblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxTdHlsZXNcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
const ModalStyles = () => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_1__.Global, {
  styles: _ref
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalStyles);

/***/ }),

/***/ "./src/components/CustomStyles/Plant.styles.jsx":
/*!******************************************************!*\
  !*** ./src/components/CustomStyles/Plant.styles.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.development.esm.js");
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }



var _ref =  false ? 0 : {
  name: "lehdx7-PlantStyles",
  styles: ".plant{position:relative;overflow:hidden;border-radius:20px;display:flex;align-items:center;justify-content:center;width:100%;height:350px;@media (min-width: 769px){box-shadow:0 8px 15px rgba(0, 0, 0, 0.8);&:hover{.plant-info{top:0;background:rgba(0, 0, 0, 0.8);}}}}.plant-image{position:absolute;width:100%;height:100%;img{display:block;width:100%;height:100%;object-fit:cover;transition:filter 0.5s ease;}}.plant-info{position:absolute;top:100%;left:0;height:100%;width:100%;background-color:rgba(0, 0, 0, 0.5);color:white;text-align:center;box-sizing:border-box;display:flex;flex-direction:column;transition:top 0.27s ease-in-out;padding:20px 10px;align-items:center;justify-content:center;@media screen and (max-width: 768px){height:75%;bottom:0;top:unset;background:linear-gradient(\n            to bottom,\n            rgba(0, 0, 0, 0) 40%,\n            rgba(0, 0, 0, 0.6) 60%,\n            rgba(0, 0, 0, 0.7) 70%,\n            rgba(0, 0, 0, 0.9) 100%\n          );justify-content:flex-end;}}.common-name{font-family:'flower-power',sans-serif;font-size:35px;font-weight:500;font-style:normal;text-align:center;@media screen and (max-width: 768px){font-size:25px;}}.botanical-name{font-style:italic;font-family:'larken',sans-serif;font-weight:100;text-align:center;font-size:20px;@media screen and (max-width: 768px){font-size:18px;}}.new-plants{display:grid;grid-template-columns:repeat(3, minmax(200px, 1fr));gap:25px;@media screen and (max-width: 768px){display:block;}}.new-plant-entry{background-color:white;border-radius:20px;color:#000;padding:30px 40px;text-align:left;position:relative;@media screen and (max-width: 768px){margin-bottom:20px;}}.delete-plant{width:30px;height:30px;border-radius:30px;border:2px solid black;position:absolute;top:10px;right:10px;display:flex;align-items:center;justify-content:center;};label:PlantStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yeWFud2Fzc29tL1NpdGVzL215cG9ydGZvbGlvL3NyYy9jb21wb25lbnRzL0N1c3RvbVN0eWxlcy9QbGFudC5zdHlsZXMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtlIiwiZmlsZSI6Ii9Vc2Vycy9yeWFud2Fzc29tL1NpdGVzL215cG9ydGZvbGlvL3NyYy9jb21wb25lbnRzL0N1c3RvbVN0eWxlcy9QbGFudC5zdHlsZXMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgR2xvYmFsLCBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCdcblxuY29uc3QgUGxhbnRTdHlsZXMgPSAoKSA9PiAoXG4gIDxHbG9iYWxcbiAgICBzdHlsZXM9e2Nzc2BcbiAgICAgIC5wbGFudCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDM1MHB4O1xuXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkge1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjgpO1xuXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAucGxhbnQtaW5mbyB7XG4gICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAucGxhbnQtaW1hZ2Uge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgdHJhbnNpdGlvbjogZmlsdGVyIDAuNXMgZWFzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAucGxhbnQtaW5mbyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxMDAlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB0cmFuc2l0aW9uOiB0b3AgMC4yN3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICBoZWlnaHQ6IDc1JTtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgdG9wOiB1bnNldDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICB0byBib3R0b20sXG4gICAgICAgICAgICByZ2JhKDAsIDAsIDAsIDApIDQwJSxcbiAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMC42KSA2MCUsXG4gICAgICAgICAgICByZ2JhKDAsIDAsIDAsIDAuNykgNzAlLFxuICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjkpIDEwMCVcbiAgICAgICAgICApO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmNvbW1vbi1uYW1lIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdmbG93ZXItcG93ZXInLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5ib3RhbmljYWwtbmFtZSB7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgZm9udC1mYW1pbHk6ICdsYXJrZW4nLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAubmV3LXBsYW50cyB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgyMDBweCwgMWZyKSk7XG4gICAgICAgIGdhcDogMjVweDtcblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5uZXctcGxhbnQtZW50cnkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIHBhZGRpbmc6IDMwcHggNDBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmRlbGV0ZS1wbGFudCB7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgfVxuICAgIGB9XG4gIC8+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFBsYW50U3R5bGVzXG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
const PlantStyles = () => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_1__.Global, {
  styles: _ref
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlantStyles);

/***/ }),

/***/ "./src/components/CustomStyles/Site.styles.jsx":
/*!*****************************************************!*\
  !*** ./src/components/CustomStyles/Site.styles.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.development.esm.js");
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }



var _ref =  false ? 0 : {
  name: "1fp6255-SiteStyles",
  styles: "html,body{background-color:#1c1b1b;color:white;height:100%;margin:0;min-height:100vh;}a{text-decoration:none;color:unset;}p{margin:0;};label:SiteStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yeWFud2Fzc29tL1NpdGVzL215cG9ydGZvbGlvL3NyYy9jb21wb25lbnRzL0N1c3RvbVN0eWxlcy9TaXRlLnN0eWxlcy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS2UiLCJmaWxlIjoiL1VzZXJzL3J5YW53YXNzb20vU2l0ZXMvbXlwb3J0Zm9saW8vc3JjL2NvbXBvbmVudHMvQ3VzdG9tU3R5bGVzL1NpdGUuc3R5bGVzLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEdsb2JhbCwgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnXG5cbmNvbnN0IFNpdGVTdHlsZXMgPSAoKSA9PiAoXG4gIDxHbG9iYWxcbiAgICBzdHlsZXM9e2Nzc2BcbiAgICAgIGh0bWwsXG4gICAgICBib2R5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFjMWIxYjtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiB1bnNldDtcbiAgICAgIH1cblxuICAgICAgcCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cbiAgICBgfVxuICAvPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBTaXRlU3R5bGVzXG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
const SiteStyles = () => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_1__.Global, {
  styles: _ref
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SiteStyles);

/***/ }),

/***/ "./src/components/CustomStyles/Typography.styles.jsx":
/*!***********************************************************!*\
  !*** ./src/components/CustomStyles/Typography.styles.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.development.esm.js");
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }



var _ref =  false ? 0 : {
  name: "o6tjbz-TypographyStyles",
  styles: "body{font-family:'larken',sans-serif;font-weight:300;font-style:normal;}h1,h2,h3,h4,h5,h6{font-family:'Hippie',sans-serif;}h1{font-size:55px;font-weight:100;text-shadow:-8px 8px 6px rgba(0, 0, 0, 0.8);@media screen and (max-width: 540px){font-size:35px;}}p{font-size:20px;line-height:34px;};label:TypographyStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yeWFud2Fzc29tL1NpdGVzL215cG9ydGZvbGlvL3NyYy9jb21wb25lbnRzL0N1c3RvbVN0eWxlcy9UeXBvZ3JhcGh5LnN0eWxlcy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS2UiLCJmaWxlIjoiL1VzZXJzL3J5YW53YXNzb20vU2l0ZXMvbXlwb3J0Zm9saW8vc3JjL2NvbXBvbmVudHMvQ3VzdG9tU3R5bGVzL1R5cG9ncmFwaHkuc3R5bGVzLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEdsb2JhbCwgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnXG5cbmNvbnN0IFR5cG9ncmFwaHlTdHlsZXMgPSAoKSA9PiAoXG4gIDxHbG9iYWxcbiAgICBzdHlsZXM9e2Nzc2BcbiAgICAgIGJvZHkge1xuICAgICAgICBmb250LWZhbWlseTogJ2xhcmtlbicsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIH1cblxuICAgICAgaDEsXG4gICAgICBoMixcbiAgICAgIGgzLFxuICAgICAgaDQsXG4gICAgICBoNSxcbiAgICAgIGg2IHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdIaXBwaWUnLCBzYW5zLXNlcmlmO1xuICAgICAgfVxuXG4gICAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNTVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgdGV4dC1zaGFkb3c6IC04cHggOHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuOCk7XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTQwcHgpIHtcbiAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM0cHg7XG4gICAgICB9XG4gICAgYH1cbiAgLz5cbilcblxuZXhwb3J0IGRlZmF1bHQgVHlwb2dyYXBoeVN0eWxlc1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
const TypographyStyles = () => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_1__.Global, {
  styles: _ref
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TypographyStyles);

/***/ }),

/***/ "./src/components/CustomStyles/Wrapper.styles.jsx":
/*!********************************************************!*\
  !*** ./src/components/CustomStyles/Wrapper.styles.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.development.esm.js");
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }



var _ref =  false ? 0 : {
  name: "uqam6h-WrapperStyles",
  styles: ".wrapper{display:grid;grid-template-rows:1fr auto;max-width:1200px;margin:75px auto;padding:0 20px;position:relative;}main{flex:1;}.centered-content{text-align:center;padding:0 40px;@media screen and (max-width: 768px){padding:0;text-align:left;}};label:WrapperStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yeWFud2Fzc29tL1NpdGVzL215cG9ydGZvbGlvL3NyYy9jb21wb25lbnRzL0N1c3RvbVN0eWxlcy9XcmFwcGVyLnN0eWxlcy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS2UiLCJmaWxlIjoiL1VzZXJzL3J5YW53YXNzb20vU2l0ZXMvbXlwb3J0Zm9saW8vc3JjL2NvbXBvbmVudHMvQ3VzdG9tU3R5bGVzL1dyYXBwZXIuc3R5bGVzLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEdsb2JhbCwgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnXG5cbmNvbnN0IFdyYXBwZXJTdHlsZXMgPSAoKSA9PiAoXG4gIDxHbG9iYWxcbiAgICBzdHlsZXM9e2Nzc2BcbiAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcbiAgICAgICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgICAgIG1hcmdpbjogNzVweCBhdXRvO1xuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgbWFpbiB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICB9XG5cbiAgICAgIC5jZW50ZXJlZC1jb250ZW50IHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAwIDQwcHg7XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfVxuICAvPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBXcmFwcGVyU3R5bGVzXG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
const WrapperStyles = () => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_1__.Global, {
  styles: _ref
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WrapperStyles);

/***/ }),

/***/ "./src/components/Footer.jsx":
/*!***********************************!*\
  !*** ./src/components/Footer.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.development.esm.js");


const Footer = () => {
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "footer"
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "test"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/components/Forms/userInput.jsx":
/*!********************************************!*\
  !*** ./src/components/Forms/userInput.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Modal */ "./src/components/Modal.jsx");
/* harmony import */ var _SubmittedData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SubmittedData */ "./src/components/SubmittedData.jsx");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.development.esm.js");




const InputDisplay = () => {
  const {
    0: commonPlantName,
    1: setCommonPlantName
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: botanicalPlantName,
    1: setBotanicalPlantName
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: image,
    1: setImage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null); // Initialize as null
  const {
    0: imagePreview,
    1: setImagePreview
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: isModalOpen,
    1: setIsModalOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: submittedData,
    1: setSubmittedData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);

  // Load data from localStorage on component mount
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const storedData = localStorage.getItem('submittedData');
    if (storedData) {
      setSubmittedData(JSON.parse(storedData));
    }
  }, []);

  // Save data to localStorage whenever submittedData changes
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (submittedData.length > 0) {
      localStorage.setItem('submittedData', JSON.stringify(submittedData));
    }
  }, [submittedData]);
  const handleChange = event => {
    const {
      name,
      type,
      files
    } = event.target;
    if (type === 'file') {
      const file = files[0];
      if (file) {
        setImage(file);
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
      }
    } else {
      if (name === 'commonPlantName') setCommonPlantName(event.target.value);
      if (name === 'botanicalPlantName') setBotanicalPlantName(event.target.value);
    }
  };
  const handleSubmit = event => {
    event.preventDefault();
    // Ensure imageURL is only set if image exists
    const imageURL = image ? URL.createObjectURL(image) : '';
    setSubmittedData(prevData => [...prevData, {
      commonPlantName: commonPlantName,
      botanicalPlantName: botanicalPlantName,
      image: imageURL
    }]);
    setCommonPlantName('');
    setBotanicalPlantName('');
    setImage(null); // Reset image
    setImagePreview(''); // Reset image preview
    setIsModalOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to remove a plant by index
  const handleRemove = indexToRemove => {
    const updatedData = submittedData.filter((_, index) => index !== indexToRemove);
    setSubmittedData(updatedData);
    localStorage.setItem('submittedData', JSON.stringify(updatedData)); // Update localStorage
  };
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "add-plant-button"
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
    onClick: openModal
  }, "* Add a plant *")), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "featured-plants"
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(_SubmittedData__WEBPACK_IMPORTED_MODULE_2__["default"], {
    submittedData: submittedData,
    handleRemove: handleRemove
  })), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Modal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    isOpen: isModalOpen,
    onClose: closeModal
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
    className: "add-plant-modal-title"
  }, "Add a Plant"), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("form", {
    onSubmit: handleSubmit
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
    type: "text",
    name: "commonPlantName",
    value: commonPlantName,
    onChange: handleChange,
    placeholder: "Common Plant Name"
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("br", null), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
    type: "text",
    name: "botanicalPlantName",
    value: botanicalPlantName,
    onChange: handleChange,
    placeholder: "Botanical Plant Name"
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("br", null), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
    type: "file",
    name: "image",
    accept: "image/*",
    onChange: handleChange
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("br", null), imagePreview && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
    src: imagePreview,
    alt: "Preview",
    style: {
      width: '100px',
      height: 'auto'
    }
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("br", null), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
    className: "submit-button",
    type: "submit"
  }, "Submit")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputDisplay);

/***/ }),

/***/ "./src/components/Header.jsx":
/*!***********************************!*\
  !*** ./src/components/Header.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_logo_greens_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/logo-greens.png */ "./src/images/logo-greens.png");
/* harmony import */ var _components_CustomStyles_Global_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CustomStyles/Global.styles */ "./src/components/CustomStyles/Global.styles.jsx");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.development.esm.js");




const Header = () => {
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_CustomStyles_Global_styles__WEBPACK_IMPORTED_MODULE_2__["default"], null), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "header"
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "navigation"
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "column"
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
    style: {
      fontFamily: 'hippie'
    },
    href: "/journal"
  }, "Journal")), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
    className: "logo",
    href: "/"
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
    src: _images_logo_greens_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: "logo"
  })), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "column"
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
    href: "/plants",
    style: {
      fontFamily: 'hippie'
    }
  }, "Plants")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/components/Modal.jsx":
/*!**********************************!*\
  !*** ./src/components/Modal.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.development.esm.js");


const Modal = ({
  isOpen,
  onClose,
  children
}) => {
  if (!isOpen) return null;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "modal-overlay"
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "modal-content"
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
    className: "close-button",
    onClick: onClose
  }, "\xD7"), children));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);

/***/ }),

/***/ "./src/components/SubmittedData.jsx":
/*!******************************************!*\
  !*** ./src/components/SubmittedData.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Column */ "./src/components/Column.jsx");
/* harmony import */ var _ColumnContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColumnContainer */ "./src/components/ColumnContainer.jsx");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.development.esm.js");




const SubmittedData = ({
  submittedData,
  handleRemove
}) => {
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ColumnContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "column-container",
    extraClass: "new-plants"
  }, submittedData.map((data, index) => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Column__WEBPACK_IMPORTED_MODULE_1__["default"], {
    extraClass: "new-plant-entry",
    key: index
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", null, "Common Plant Name:"), " ", data.commonPlantName), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", null, "Botanical Plant Name:"), " ", data.botanicalPlantName), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", null, "Image will go here"), " ", data.image), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
    className: "delete-plant",
    onClick: () => handleRemove(index)
  }, "x"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubmittedData);

/***/ }),

/***/ "./src/components/Wrapper.jsx":
/*!************************************!*\
  !*** ./src/components/Wrapper.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ "./src/components/Header.jsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer */ "./src/components/Footer.jsx");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.development.esm.js");




const Wrapper = ({
  children
}) => {
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], null), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "wrapper"
  }, children), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wrapper);

/***/ }),

/***/ "./src/pages/plants.js?export=default":
/*!********************************************!*\
  !*** ./src/pages/plants.js?export=default ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Forms_userInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Forms/userInput */ "./src/components/Forms/userInput.jsx");
/* harmony import */ var _components_Wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Wrapper */ "./src/components/Wrapper.jsx");
/* harmony import */ var _components_SubmittedData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SubmittedData */ "./src/components/SubmittedData.jsx");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.development.esm.js");





const PlantsPage = ({
  submittedData
}) => {
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Wrapper__WEBPACK_IMPORTED_MODULE_2__["default"], null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    className: "centered-content"
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", null, "Plantae Meae"), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Forms_userInput__WEBPACK_IMPORTED_MODULE_1__["default"], null))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlantsPage);
const Head = () => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)("title", null, "Plantae Meae | myGreens");

/***/ }),

/***/ "./src/images/footer-background.png":
/*!******************************************!*\
  !*** ./src/images/footer-background.png ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/footer-background-f6e77a46846da012a2e9ef1b13122682.png");

/***/ }),

/***/ "./src/images/logo-greens.png":
/*!************************************!*\
  !*** ./src/images/logo-greens.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/logo-greens-c2d3be3cacbf783b4ebed98ea4666fac.png");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-plants-js.js.map