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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/moving_object */ \"./src/scripts/moving_object.js\");\n/* harmony import */ var _scripts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/utils */ \"./src/scripts/utils.js\");\n/* harmony import */ var _scripts_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/view */ \"./src/scripts/view.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  let canvas = document.getElementById(\"game-box\");\n  let ctx = canvas.getContext(\"2d\");\n  let testPlayer = new _scripts_moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({pos: [69, 69], radius: 20});\n  let paused = false;\n  \n  // let background = new Image();\n  // background.src = \"https://image.shutterstock.com/image-vector/arcade-game-world-pixel-scene-600w-1413474734.jpg\";\n\n  ctx.fillStyle = \"gray\";\n  ctx.fillRect(0, 0, canvas.width, canvas.height);\n\n  \n  testPlayer.draw(ctx);\n  let testView = new _scripts_view__WEBPACK_IMPORTED_MODULE_2__[\"default\"](canvas, ctx, testPlayer);\n  let flag = false;\n\n  let reset = document.getElementById('reset');\n  reset.onclick = (e) => {\n    e.preventDefault();\n    location.reload();\n  };\n\n  let pause = document.getElementById('pause');\n  pause.onclick = (e) => {\n    e.preventDefault();\n    paused = true;\n    alert('You paused the game!');\n    \n  };\n\n  let resume = document.getElementById('resume');\n  resume.onclick = (e) => {\n    e.preventDefault();\n    if (paused) {\n      alert('You resumed the game!');\n      paused = false;\n    } \n    \n  };\n  \n  window.addEventListener(\"keydown\", (event) => {\n   \n    event.preventDefault();\n    if (paused) return;\n    if (event.code === 'KeyE' && testPlayer.collided) {\n      flag = true;\n      _scripts_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.renderMessage(testPlayer.victim);\n      if(!testPlayer.items.includes(testPlayer.victim.item)){\n        testPlayer.items.push(testPlayer.victim.item);\n        if (_scripts_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.levels[1].itemOrder[testPlayer.items.length - 1] !== testPlayer.items[testPlayer.items.length - 1]) {\n          testPlayer.items.pop();\n          let temp = testPlayer.victim.message;\n          testPlayer.victim.message = testPlayer.victim.item === 'success' ? \"You need something else to open the door!\" : 'You need something else to get this item!';\n          _scripts_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.renderMessage(testPlayer.victim);\n          testPlayer.victim.message = temp;\n        } else {\n          testPlayer.victim.message = \"There's nothing here....\";\n        }\n          \n        \n        \n      } \n      console.log(testPlayer.items);\n      if(testPlayer.items[testPlayer.items.length - 1] === 'success'){\n        _scripts_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.renderMessage(testPlayer.victim);\n        alert('You escaped!');\n        location.reload();\n      }\n\n      setTimeout(() => {\n        flag = false\n      }, 4000);\n    }\n    \n    if (flag === false){\n      testPlayer.move(testPlayer.convertKeytoDir(event.code), testView, true);\n      console.log(testPlayer.collided, testPlayer.victim);\n      testView.draw();\n    }\n    \n    \n  });\n\n  \n  \n})\n\n\n//# sourceURL=webpack://escape_chase/./src/index.js?");

/***/ }),

/***/ "./src/scripts/moving_object.js":
/*!**************************************!*\
  !*** ./src/scripts/moving_object.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/scripts/utils.js\");\n\nclass MovingObject {\n  constructor(attributes) {\n    this.pos = attributes['pos'];\n    this.radius = attributes['radius'];\n    this.collided = false;\n    this.victim = null;\n    this.items = [];\n  }\n\n  draw(ctx) {\n   \n    let circle = new Path2D();\n    \n    ctx.beginPath();\n    circle.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2, false);\n    ctx.fillStyle = 'green';\n    ctx.fill(circle);\n    // let image = new Image();\n    // image.onload = () => {\n    //   ctx.drawImage(image, this.pos[0], this.pos[1], this.radius, this.radius)\n    // }\n    // image.src = 'src/knight_f_idle_anim_f1.png'\n    \n  }\n\n  convertKeytoDir(code) {\n    switch (code) {\n      case \"KeyS\":\n      case \"ArrowDown\":\n        return [0, 1];\n     \n      case \"KeyW\":\n      case \"ArrowUp\":\n        return [0, -1];\n      \n      case \"KeyA\":\n      case \"ArrowLeft\":\n        return [-1, 0];\n\n      case \"KeyD\":\n      case \"ArrowRight\":\n        return [1, 0];\n      \n    }\n  }\n\n  move(dir, view) {\n    let dx = this.radius/2 * dir[0];\n    let dy = this.radius/2 * dir[1];\n    \n    if(this.pos[0] + dx < view.canvas.width - this.radius && this.pos[0] + dx > this.radius && this.pos[1] + dy < view.canvas.height - this.radius && this.pos[1] + dy > this.radius ) {\n\n      this.pos[0] += dx;\n      this.pos[1] += dy;\n      for (let i = 0; i < view.objs.length; i++) {\n        if (_utils_js__WEBPACK_IMPORTED_MODULE_0__.Utils.detectCollision(this, view.objs[i])){\n          this.collided = true;\n          this.victim = view.objs[i];\n          this.pos[0] -= dx;\n          this.pos[1] -= dy;\n          \n          break;\n        } else {\n          this.collided = false;\n          this.victim = null;\n        }\n\n      }\n    }\n   \n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovingObject);\n\n//# sourceURL=webpack://escape_chase/./src/scripts/moving_object.js?");

/***/ }),

/***/ "./src/scripts/static_object.js":
/*!**************************************!*\
  !*** ./src/scripts/static_object.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass StaticObject {\n  constructor(attributes) {\n    this.pos = attributes['pos'];\n    this.width = attributes['width'];\n    this.height = attributes['height'];\n    this.color = attributes['color'];\n    this.message = attributes['message'];\n    this.item = attributes['item'];\n  }\n\n  draw(ctx) {\n    let rectangle = new Path2D();\n    ctx.fillStyle = this.color;\n    ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);\n  }\n\n  \n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (StaticObject);\n\n//# sourceURL=webpack://escape_chase/./src/scripts/static_object.js?");

/***/ }),

/***/ "./src/scripts/utils.js":
/*!******************************!*\
  !*** ./src/scripts/utils.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Utils\": function() { return /* binding */ Utils; }\n/* harmony export */ });\nconst Utils = {\n  detectCollision: (obj1, obj2) => {\n    var distX = Math.abs(obj1.pos[0] - obj2.pos[0]-obj2.width/2);\n    var distY = Math.abs(obj1.pos[1] - obj2.pos[1]-obj2.height/2);\n\n    if (distX > (obj2.width/2 + obj1.radius)) { return false; }\n    if (distY > (obj2.height/2 + obj1.radius)) { return false; }\n    if (distX <= (obj2.width/2)) { return true; } \n    if (distY <= (obj2.height/2)) { return true; }\n    var dx=distX-obj2.width/2;\n    var dy=distY-obj2.height/2;\n    return (dx*dx+dy*dy<=(obj1.radius*obj1.radius));\n  },\n  levels: {\n    1: {objects: [{pos: [5, 97], width: 40, height: 200, color: 'pink', message: 'You found a screwdriver!', item: 'screwdriver'},\n     {pos: [300, 6], width: 80, height: 120, color: 'pink', message: \"You found a crowbar!\", item: 'crowbar'},\n     {pos: [5, 386], width: 200, height: 57, color: 'pink', \n     message:'You found a key!', item: 'key'},\n     {pos: [385, 432], width: 57, height: 10, color: 'orange', message: \"Open thy Door of Destiny!\", item: 'success'}\n    ], itemOrder: ['crowbar', 'screwdriver', 'key', 'success']} \n  },\n  renderMessage: (obj) => {\n    let message = document.getElementById('message');\n    \n    let content = obj.message;\n    message.innerHTML = content;\n    setTimeout(()=>{\n      message.innerHTML = \"Use the WSAD or arrow keys to move and E to interact!\"\n    }, 4000);\n    \n  }\n  \n  \n};\n// ['crowbar', 'screwdriver', 'key', 'success']\n\n//# sourceURL=webpack://escape_chase/./src/scripts/utils.js?");

/***/ }),

/***/ "./src/scripts/view.js":
/*!*****************************!*\
  !*** ./src/scripts/view.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _static_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./static_object.js */ \"./src/scripts/static_object.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ \"./src/scripts/utils.js\");\n\n\n\nclass View {\n  constructor(canvas, ctx, player) {\n    this.canvas = canvas;\n    this.ctx = ctx;\n    this.player = player;\n    this.objs = [];\n    this.addObjects();\n    this.draw();\n    // window.requestAnimationFrame(this.draw);\n    // this.player.draw(ctx);\n    \n  }\n\n  addObjects() {\n    let i = 0;\n    while (this.objs.length < _utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.levels[1].objects.length) {\n      this.objs.push(new _static_object_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.levels[1].objects[i]));\n      i++;\n    }\n  }\n\n  draw() {\n    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    this.ctx.fillStyle = \"gray\";\n    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\n    this.ctx.fillStyle = 'brown'\n    this.ctx.fillRect(5, 5, this.canvas.width - 11, this.canvas.height - 11);\n    this.player.draw(this.ctx);\n\n    for (let i = 0; i < this.objs.length; i++) {\n      this.objs[i].draw(this.ctx);  \n    }\n    requestAnimationFrame(() =>{\n      this.draw();\n    });\n  }\n\n  \n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (View);\n\n//# sourceURL=webpack://escape_chase/./src/scripts/view.js?");

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