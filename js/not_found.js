/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/not_found.js":
/*!**************************!*\
  !*** ./src/not_found.js ***!
  \**************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _redirectUri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redirectUri */ \"./src/redirectUri.js\");\n\nconsole.log('Hello World from not_found main file!');\n(0,_redirectUri__WEBPACK_IMPORTED_MODULE_0__.saveRedirectUri)();\nlocation.replace('/');\n\n//# sourceURL=webpack://personal-blog/./src/not_found.js?");

/***/ }),

/***/ "./src/redirectUri.js":
/*!****************************!*\
  !*** ./src/redirectUri.js ***!
  \****************************/
/*! namespace exports */
/*! export popRedirectUri [provided] [no usage info] [missing usage info prevents renaming] */
/*! export saveRedirectUri [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"saveRedirectUri\": () => /* binding */ saveRedirectUri,\n/* harmony export */   \"popRedirectUri\": () => /* binding */ popRedirectUri\n/* harmony export */ });\n/*\n * Github Pages can't pass all requests to a single file (e.g. /hello will try to access /hello file)\n * which is very inconvenient for single-page applications.\n *\n * The solution:\n * 1. 404 page saves the location in the browser.\n * 2. Redirects to index.html (/)\n * 3. Main app restores the location and uses it for routing\n */\nvar KEY = 'redirectUri';\nfunction saveRedirectUri() {\n  var pathAndQuery = location.pathname + location.search;\n  localStorage.setItem(KEY, pathAndQuery);\n}\nfunction popRedirectUri() {\n  var uri = localStorage.getItem(KEY);\n  localStorage.removeItem(KEY);\n  return uri;\n}\n\n//# sourceURL=webpack://personal-blog/./src/redirectUri.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/not_found.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;