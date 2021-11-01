/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/moving_object */ \"./src/scripts/moving_object.js\");\n\nwindow.MovingObject = _scripts_moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  let canvas = document.getElementById(\"game-box\");\n  let ctx = canvas.getContext(\"2d\");\n\n  // let background = new Image();\n  // background.src = \"https://image.shutterstock.com/image-vector/arcade-game-world-pixel-scene-600w-1413474734.jpg\";\n\n  ctx.fillStyle = \"gray\";\n  ctx.fillRect(0, 0, canvas.width, canvas.height);\n\n  let testPlayer = new _scripts_moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({pos: [69, 69], radius: 20});\n  testPlayer.draw(ctx);\n  \n  \n})\n\n//# sourceURL=webpack://escape_chase/./src/index.js?");

/***/ }),

/***/ "./src/scripts/moving_object.js":
/*!**************************************!*\
  !*** ./src/scripts/moving_object.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass MovingObject {\n  constructor(attributes) {\n    this.pos = attributes['pos'];\n    this.radius = attributes['radius'];\n  }\n\n  draw(ctx) {\n   \n    let circle = new Path2D();\n    // ctx.beginPath();\n    circle.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2, false);\n    ctx.fillStyle = 'green';\n    ctx.fill(circle);\n    \n  }\n\n  move(dir) {\n    this.pos[0] += this.radius * 2 * dir[0];\n    this.pos[1] += this.radius * 2 * dir[1];\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovingObject);\n\n//# sourceURL=webpack://escape_chase/./src/scripts/moving_object.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;