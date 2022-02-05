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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/moving_object */ \"./src/scripts/moving_object.js\");\n/* harmony import */ var _scripts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/utils */ \"./src/scripts/utils.js\");\n/* harmony import */ var _scripts_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/view */ \"./src/scripts/view.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  let canvas = document.getElementById(\"game-box\");\n  let canvas2 = document.getElementById(\"game-box-2\");\n  let ctx = canvas.getContext(\"2d\");\n  let ctx2 = canvas2.getContext('2d');\n  let testPlayer = new _scripts_moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n  let paused = false;\n  \n  let testView = new _scripts_view__WEBPACK_IMPORTED_MODULE_2__[\"default\"](ctx2, ctx, testPlayer);\n  let flag = false;\n\n  let reset = document.getElementById('reset');\n  reset.onclick = (e) => {\n    e.preventDefault();\n    location.reload();\n  };\n\n  let pause = document.getElementById('pause');\n  pause.onclick = (e) => {\n    e.preventDefault();\n    paused = true;\n    alert('You paused the game!');\n    \n  };\n\n  let resume = document.getElementById('resume');\n  resume.onclick = (e) => {\n    e.preventDefault();\n    if (paused) {\n      alert('You resumed the game!');\n      paused = false;\n    } \n    \n  };\n  \n  requestAnimationFrame(main);\n  let startTime;\n  let gTime;\n\n  function main(time) {\n    if (startTime === undefined) {\n      startTime = time;\n    }\n    gTime = time - startTime;\n    // ctx.clearRect(0, 0, canvas.width, canvas.height)\n    testView.draw();\n    \n    requestAnimationFrame(main);\n  }\n  window.addEventListener(\"keydown\", (event) => {\n   \n    event.preventDefault();\n    if (paused) return;\n    // if (event.code === 'KeyE' && testPlayer.collided) {\n    //   flag = true;\n    //   Utils.renderMessage(testPlayer.victim);\n      // if(!testPlayer.items.includes(testPlayer.victim.item)){\n      //   testPlayer.items.push(testPlayer.victim.item);\n      //   if (Utils.levels[1].itemOrder[testPlayer.items.length - 1] !== testPlayer.items[testPlayer.items.length - 1]) {\n      //     testPlayer.items.pop();\n      //     let temp = testPlayer.victim.message;\n      //     testPlayer.victim.message = testPlayer.victim.item === 'success' ? \"You need something else to open the door!\" : 'You need something else to get this item!';\n      //     Utils.renderMessage(testPlayer.victim);\n      //     testPlayer.victim.message = temp;\n      //   } else {\n      //     testPlayer.victim.message = \"There's nothing here....\";\n      //   }\n          \n        \n        \n      // } \n      // console.log(testPlayer.items);\n      // if(testPlayer.items[testPlayer.items.length - 1] === 'success'){\n      //   Utils.renderMessage(testPlayer.victim);\n      //   alert('You escaped!');\n      //   location.reload();\n      // }\n\n      // setTimeout(() => {\n      //   flag = false\n      // }, 4000);\n    // }\n    \n    if (flag === false){\n      testPlayer.move(testPlayer.convertKeytoDir(event.code));\n      requestAnimationFrame(() => testView.draw())\n    }\n    \n    \n  });\n\n  \n  \n})\n\n\n//# sourceURL=webpack://escape_chase/./src/index.js?");

/***/ }),

/***/ "./src/scripts/moving_object.js":
/*!**************************************!*\
  !*** ./src/scripts/moving_object.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/scripts/utils.js\");\n\nclass MovingObject {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.pos = [240, 160];\n    this.mapPos = [10, 15];\n    this.canvas = document.getElementById('game-box')\n  }\n\n  draw() {\n    // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    let char = new Image();\n    char.src = \"./assets/spritesheet.png\";\n    char.onload = () => {\n      const scale = 1;\n      const width = 16;\n      const height = 16;\n      const scaledWidth = scale * width;\n      const scaledHeight = scale * height;\n\n      let drawFrame = (frameX) => {\n        this.ctx.drawImage(\n          char,\n          frameX * width,\n          0,\n          width,\n          height,\n          this.pos[0],\n          this.pos[1],\n          scaledWidth,\n          scaledHeight\n        );\n      };\n\n      drawFrame(0);\n    };\n  }\n\n  convertKeytoDir(code) {\n    switch (code) {\n      case \"KeyS\":\n      case \"ArrowDown\":\n        return [0, 1];\n\n      case \"KeyW\":\n      case \"ArrowUp\":\n        return [0, -1];\n\n      case \"KeyA\":\n      case \"ArrowLeft\":\n        return [-1, 0];\n\n      case \"KeyD\":\n      case \"ArrowRight\":\n        return [1, 0];\n    }\n  }\n\n  move(dir) {\n    let dx = 16 * dir[0];\n    let dy = 16 * dir[1];\n    \n      this.pos[0] += dx;\n      this.pos[1] += dy;\n\n      this.mapPos[0] += dir[1];\n      this.mapPos[1] += dir[0];\n\n      \n    \n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovingObject);\n\n\n//# sourceURL=webpack://escape_chase/./src/scripts/moving_object.js?");

/***/ }),

/***/ "./src/scripts/utils.js":
/*!******************************!*\
  !*** ./src/scripts/utils.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Utils\": function() { return /* binding */ Utils; }\n/* harmony export */ });\nconst Utils = {\n  detectCollision: (view, player) => {\n    \n  },\n  levels: {\n    1: {objects: [{pos: [5, 97], width: 40, height: 200, color: 'pink', message: 'You found a screwdriver!', item: 'screwdriver'},\n     {pos: [300, 6], width: 80, height: 120, color: 'pink', message: \"You found a crowbar!\", item: 'crowbar'},\n     {pos: [5, 386], width: 200, height: 57, color: 'pink', \n     message:'You found a key!', item: 'key'},\n     {pos: [385, 432], width: 57, height: 10, color: 'orange', message: \"Open thy Door of Destiny!\", item: 'success'}\n    ], itemOrder: ['crowbar', 'screwdriver', 'key', 'success']} \n  },\n  renderMessage: (obj) => {\n    let message = document.getElementById('message');\n    \n    let content = obj.message;\n    message.innerHTML = content;\n    setTimeout(()=>{\n      message.innerHTML = \"Use the WSAD or arrow keys to move and E to interact!\"\n    }, 4000);\n    \n  }\n\n  \n  \n  \n};\n// ['crowbar', 'screwdriver', 'key', 'success']\n\n//# sourceURL=webpack://escape_chase/./src/scripts/utils.js?");

/***/ }),

/***/ "./src/scripts/view.js":
/*!*****************************!*\
  !*** ./src/scripts/view.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n\nclass View {\n  constructor(ctx2, ctx, player) {\n    this.ctx2 = ctx2;\n    this.ctx = ctx;\n    this.player = player;\n    this.tileSize = 16;\n    this.atlasCol = 16;\n    this.atlasRow = 16;\n    this.mapCols = 47;\n    this.mapRows = 24;\n    this.mapHeight = this.tileSize * this.mapRows;\n    this.mapWidth = this.tileSize * this.mapCols;\n    this.mapLayer1 = [\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 129, 132, 132, 132, 132, 132, 132, 132, 132, 132, 118,\n      0, 0, 129, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 118, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 97, 103,\n      103, 103, 103, 103, 103, 103, 98, 119, 0, 0, 130, 97, 103, 103, 103, 103,\n      103, 103, 103, 103, 103, 98, 119, 129, 132, 132, 132, 132, 132, 132, 132,\n      118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 104, 102, 102, 102, 102,\n      102, 102, 102, 113, 119, 0, 0, 130, 104, 102, 102, 102, 102, 102, 102,\n      102, 102, 102, 113, 119, 130, 97, 103, 103, 103, 103, 103, 98, 119, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 104, 102, 102, 102, 102, 102, 102, 102,\n      113, 119, 0, 0, 130, 104, 102, 102, 102, 102, 102, 102, 102, 102, 102,\n      113, 119, 130, 104, 102, 102, 102, 102, 102, 113, 119, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 130, 99, 100, 100, 100, 100, 100, 100, 100, 101, 119, 0,\n      0, 130, 99, 100, 100, 100, 100, 100, 100, 100, 100, 100, 101, 119, 130,\n      104, 102, 102, 102, 102, 102, 113, 119, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 130, 81, 81, 81, 81, 81, 81, 81, 81, 81, 119, 0, 0, 130, 81, 81, 81,\n      81, 81, 81, 81, 81, 81, 81, 81, 119, 130, 99, 100, 100, 100, 100, 100,\n      101, 119, 0, 0, 0, 129, 132, 132, 132, 132, 132, 132, 132, 118, 130, 81,\n      81, 81, 81, 81, 81, 81, 81, 81, 119, 0, 0, 130, 81, 81, 81, 81, 81, 81,\n      81, 81, 81, 81, 81, 119, 130, 81, 81, 81, 81, 81, 81, 81, 119, 0, 0, 0,\n      130, 97, 103, 103, 103, 103, 103, 98, 119, 130, 81, 81, 81, 81, 81, 81,\n      81, 81, 81, 119, 0, 0, 130, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81,\n      119, 130, 81, 81, 81, 81, 81, 81, 81, 119, 0, 0, 0, 130, 104, 102, 102,\n      102, 102, 102, 113, 119, 130, 81, 81, 81, 81, 81, 81, 81, 81, 81, 119, 0,\n      0, 130, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 119, 130, 81, 81, 81,\n      81, 81, 81, 81, 119, 0, 0, 0, 130, 104, 102, 102, 102, 102, 102, 113, 119,\n      130, 81, 81, 81, 81, 81, 81, 81, 81, 81, 119, 0, 0, 130, 81, 81, 81, 81,\n      81, 81, 81, 81, 81, 81, 81, 119, 130, 81, 81, 81, 81, 81, 81, 81, 119, 0,\n      0, 0, 130, 99, 100, 100, 100, 100, 100, 101, 119, 116, 117, 117, 117, 131,\n      81, 120, 117, 117, 117, 115, 0, 0, 116, 117, 117, 117, 117, 131, 81, 120,\n      117, 117, 117, 117, 115, 116, 117, 117, 131, 81, 120, 117, 117, 115, 0, 0,\n      0, 130, 81, 81, 81, 81, 81, 81, 81, 133, 132, 132, 132, 132, 134, 81, 133,\n      132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 134, 81, 133, 132,\n      132, 132, 132, 132, 132, 132, 132, 134, 81, 133, 132, 132, 118, 0, 0, 0,\n      130, 81, 81, 81, 81, 81, 81, 81, 97, 103, 103, 103, 103, 98, 81, 97, 103,\n      103, 103, 103, 103, 103, 103, 103, 103, 103, 103, 98, 81, 97, 103, 103,\n      103, 103, 103, 103, 103, 103, 98, 81, 97, 103, 98, 119, 0, 0, 0, 130, 81,\n      81, 81, 81, 81, 81, 81, 104, 102, 102, 102, 102, 113, 81, 104, 102, 102,\n      102, 102, 102, 102, 102, 102, 102, 102, 102, 113, 81, 104, 102, 102, 102,\n      102, 102, 102, 102, 102, 113, 81, 104, 102, 113, 119, 0, 0, 0, 130, 81,\n      81, 81, 81, 81, 81, 81, 104, 102, 102, 102, 102, 113, 81, 104, 102, 102,\n      102, 102, 102, 102, 102, 102, 102, 102, 102, 113, 81, 104, 102, 102, 102,\n      102, 102, 102, 102, 102, 113, 81, 104, 102, 113, 119, 0, 0, 0, 130, 81,\n      81, 81, 81, 81, 81, 81, 99, 100, 100, 100, 100, 101, 81, 99, 100, 100,\n      100, 100, 100, 100, 100, 100, 100, 100, 100, 101, 81, 99, 100, 100, 100,\n      100, 100, 100, 100, 100, 101, 81, 99, 100, 101, 119, 0, 0, 0, 130, 81, 81,\n      81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81,\n      81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81,\n      81, 81, 81, 81, 119, 0, 0, 0, 130, 81, 81, 81, 81, 81, 81, 81, 120, 117,\n      117, 117, 117, 117, 117, 117, 117, 117, 117, 117, 117, 117, 117, 117, 117,\n      117, 117, 117, 117, 117, 117, 117, 117, 117, 117, 117, 117, 117, 117, 117,\n      117, 117, 117, 115, 0, 0, 0, 116, 117, 117, 131, 81, 120, 117, 117, 115,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 116, 117, 115, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0,\n    ];\n    this.mapLayer2 = [\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 91, 0, 0, 94, 95, 0, 90,\n      91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 94, 95, 66, 90, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 106, 107, 0, 66, 110,\n      111, 0, 106, 107, 0, 0, 0, 0, 195, 196, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 110, 111, 0, 106, 107, 0, 96, 15, 16, 0, 0, 0, 0, 0,\n      0, 163, 164, 0, 126, 127, 0, 96, 15, 16, 0, 0, 0, 211, 212, 0, 0, 0, 66,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 126, 127, 0, 219, 220, 221, 112,\n      31, 32, 0, 0, 0, 0, 0, 0, 179, 180, 0, 142, 143, 0, 112, 31, 32, 0, 0, 0,\n      226, 227, 0, 225, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 142,\n      143, 0, 235, 236, 237, 0, 47, 48, 0, 0, 0, 0, 0, 0, 230, 231, 0, 0, 0, 0,\n      0, 47, 48, 0, 0, 0, 242, 243, 0, 241, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 251, 252, 253, 0, 0, 0, 0, 0, 0, 0, 0, 0, 246, 247,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 230, 231, 0, 0, 0, 0, 0, 0, 0, 0, 0, 88, 89,\n      0, 0, 0, 88, 89, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 246, 247, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 190, 192, 158,\n      159, 160, 156, 157, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 206,\n      208, 174, 175, 176, 172, 173, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      222, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      62, 63, 64, 0, 0, 52, 53, 0, 0, 68, 69, 0, 0, 70, 71, 0, 0, 56, 57, 0, 0,\n      72, 73, 0, 0, 0, 0, 0, 58, 0, 0, 75, 0, 0, 59, 0, 0, 0, 60, 0, 0, 0, 0, 0,\n      0, 0, 0, 78, 79, 80, 0, 0, 66, 0, 0, 0, 0, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 84, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0,\n    ];\n\n  }\n\n  addObjects() {\n    // let canvas = document.getElementById('game-box-2');\n    // this.ctx2.clearRect(0,0, canvas.width, canvas.height);\n    let tileAtlas = new Image();\n    tileAtlas.src = \"./assets/tileset.png\";\n    tileAtlas.onload = () => {\n      let mapIndex = 0;\n      let sourceX = 0;\n      let sourceY = 0;\n      \n      for (let col = 0; col < this.mapHeight; col += this.tileSize) {\n        for (let row = 0; row < this.mapWidth; row += this.tileSize) {\n          let tileVal = this.mapLayer2[mapIndex];\n          if (tileVal != 0) {\n            tileVal -= 1;\n            sourceY = Math.floor(tileVal / this.atlasCol) * this.tileSize;\n            sourceX = (tileVal % this.atlasCol) * this.tileSize;\n            this.ctx.drawImage(\n              tileAtlas,\n              sourceX,\n              sourceY,\n              this.tileSize,\n              this.tileSize,\n              row,\n              col,\n              this.tileSize,\n              this.tileSize\n            );\n          }\n          mapIndex++;\n        }\n      }\n    };\n    \n    \n  }\n\n  draw() {\n    \n    let tileAtlas = new Image();\n    tileAtlas.src = \"./assets/tileset.png\";\n    tileAtlas.onload = () => {\n      let mapIndex = 0;\n      let sourceX = 0;\n      let sourceY = 0;\n      for (let col = 0; col < this.mapHeight; col += this.tileSize) {\n        for (let row = 0; row < this.mapWidth; row += this.tileSize) {\n          let tileVal = this.mapLayer1[mapIndex];\n          if (tileVal != 0) {\n            tileVal -= 1;\n            sourceY = Math.floor(tileVal / this.atlasCol) * this.tileSize;\n            sourceX = (tileVal % this.atlasCol) * this.tileSize;\n            this.ctx.drawImage(\n              tileAtlas,\n              sourceX,\n              sourceY,\n              this.tileSize,\n              this.tileSize,\n              row,\n              col,\n              this.tileSize,\n              this.tileSize\n            );\n          }\n          mapIndex++;\n        }\n      }\n    };\n    this.addObjects();\n    window.requestAnimationFrame(() =>\n      setTimeout(() => {\n        this.player.draw();\n      })\n    )\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (View);\n\n\n//# sourceURL=webpack://escape_chase/./src/scripts/view.js?");

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