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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/moving_object */ \"./src/scripts/moving_object.js\");\n/* harmony import */ var _scripts_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/view */ \"./src/scripts/view.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  let canvas = document.getElementById(\"game-box\");\n  let ctx = canvas.getContext(\"2d\");\n  let testPlayer = new _scripts_moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({pos: [69, 69], radius: 20});\n  \n  // let background = new Image();\n  // background.src = \"https://image.shutterstock.com/image-vector/arcade-game-world-pixel-scene-600w-1413474734.jpg\";\n\n  ctx.fillStyle = \"gray\";\n  ctx.fillRect(0, 0, canvas.width, canvas.height);\n\n  \n  testPlayer.draw(ctx);\n  let testView = new _scripts_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"](canvas, ctx, testPlayer);\n  \n  \n  window.addEventListener(\"keydown\", (event) => {\n    event.preventDefault();\n    testPlayer.move(testPlayer.convertKeytoDir(event.code), testView);\n    // ctx.clearRect(0, 0, canvas.width, canvas.height);\n    // ctx.fillStyle = \"gray\";\n    // ctx.fillRect(0, 0, canvas.width, canvas.height);\n    // testPlayer.draw(ctx);\n\n    testView.draw();\n  });\n\n  \n})\n\n//# sourceURL=webpack://escape_chase/./src/index.js?");

/***/ }),

/***/ "./src/scripts/moving_object.js":
/*!**************************************!*\
  !*** ./src/scripts/moving_object.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/scripts/utils.js\");\n\nclass MovingObject {\n  constructor(attributes) {\n    this.pos = attributes['pos'];\n    this.radius = attributes['radius'];\n  }\n\n  draw(ctx) {\n   \n    let circle = new Path2D();\n    \n    ctx.beginPath();\n    circle.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2, false);\n    ctx.fillStyle = 'green';\n    ctx.fill(circle);\n    \n  }\n\n  convertKeytoDir(code) {\n    switch (code) {\n      case \"KeyS\":\n      case \"ArrowDown\":\n        return [0, 1];\n     \n      case \"KeyW\":\n      case \"ArrowUp\":\n        return [0, -1];\n      \n      case \"KeyA\":\n      case \"ArrowLeft\":\n        return [-1, 0];\n\n      case \"KeyD\":\n      case \"ArrowRight\":\n        return [1, 0];\n    \n    }\n  }\n\n  move(dir, view) {\n    let dx = this.radius/2 * dir[0];\n    let dy = this.radius/2 * dir[1];\n    \n    if(this.pos[0] + dx < view.canvas.width - this.radius && this.pos[0] + dx > this.radius && this.pos[1] + dy < view.canvas.height - this.radius && this.pos[1] + dy > this.radius ) {\n\n      this.pos[0] += dx;\n      this.pos[1] += dy;\n      for (let i = 0; i < view.objs.length; i++) {\n        if (_utils_js__WEBPACK_IMPORTED_MODULE_0__.Utils.detectCollision(this, view.objs[i])){\n          this.pos[0] -= dx;\n          this.pos[1] -= dy;\n          break;\n        };\n      }\n    }\n   \n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovingObject);\n\n//# sourceURL=webpack://escape_chase/./src/scripts/moving_object.js?");

/***/ }),

/***/ "./src/scripts/static_object.js":
/*!**************************************!*\
  !*** ./src/scripts/static_object.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass StaticObject {\n  constructor(attributes) {\n    this.pos = attributes['pos'];\n    this.width = attributes['width'];\n    this.height = attributes['height'];\n    this.color = attributes['color'];\n  }\n\n  draw(ctx) {\n    let rectangle = new Path2D();\n    ctx.fillStyle = this.color;\n    ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (StaticObject);\n\n//# sourceURL=webpack://escape_chase/./src/scripts/static_object.js?");

/***/ }),

/***/ "./src/scripts/utils.js":
/*!******************************!*\
  !*** ./src/scripts/utils.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Utils\": function() { return /* binding */ Utils; }\n/* harmony export */ });\nconst Utils = {\n  detectCollision: (obj1, obj2) => {\n    var distX = Math.abs(obj1.pos[0] - obj2.pos[0]-obj2.width/2);\n    var distY = Math.abs(obj1.pos[1] - obj2.pos[1]-obj2.height/2);\n\n    if (distX > (obj2.width/2 + obj1.radius)) { return false; }\n    if (distY > (obj2.height/2 + obj1.radius)) { return false; }\n    if (distX <= (obj2.width/2)) { return true; } \n    if (distY <= (obj2.height/2)) { return true; }\n    var dx=distX-obj2.width/2;\n    var dy=distY-obj2.height/2;\n    return (dx*dx+dy*dy<=(obj1.radius*obj1.radius));\n  } \n};\n\n//# sourceURL=webpack://escape_chase/./src/scripts/utils.js?");

/***/ }),

/***/ "./src/scripts/view.js":
/*!*****************************!*\
  !*** ./src/scripts/view.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _static_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./static_object.js */ \"./src/scripts/static_object.js\");\n\n\nclass View {\n  constructor(canvas, ctx, player) {\n    this.canvas = canvas;\n    this.ctx = ctx;\n    this.player = player;\n    this.objs = [];\n    this.addObjects(5);\n    this.draw();\n    // this.player.draw(ctx);\n  }\n\n  addObjects(amt) {\n    while (this.objs.length < amt) {\n      this.objs.push(new _static_object_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({pos: [Math.random()*this.canvas.width - 40, Math.random() *this.canvas.height - 40], width: 40, height: 40, color: 'brown'}))\n    }\n  }\n\n  draw() {\n    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    this.ctx.fillStyle = \"gray\";\n    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\n    this.player.draw(this.ctx);\n\n    for (let i = 0; i < this.objs.length; i++) {\n      this.objs[i].draw(this.ctx);  \n    }\n    \n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (View);\n\n//# sourceURL=webpack://escape_chase/./src/scripts/view.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
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