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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/moving_object */ \"./src/scripts/moving_object.js\");\n/* harmony import */ var _scripts_static_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/static_object */ \"./src/scripts/static_object.js\");\n/* harmony import */ var _scripts_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/utils */ \"./src/scripts/utils.js\");\n/* harmony import */ var _scripts_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/view */ \"./src/scripts/view.js\");\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  let canvas = document.getElementById(\"game-box\");\n  let canvas2 = document.getElementById(\"game-box-2\");\n  let playerCanvas = document.getElementById(\"player-box\");\n  let ctx = canvas.getContext(\"2d\");\n  let ctx2 = canvas2.getContext(\"2d\");\n  let playerctx = playerCanvas.getContext(\"2d\");\n  let testPlayer = new _scripts_moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"](playerctx);\n  let paused = false;\n\n  let testView = new _scripts_view__WEBPACK_IMPORTED_MODULE_3__[\"default\"](ctx2, ctx, testPlayer);\n  let flag = false;\n  let objects = [\n    {\n      tiles: [190, 206],\n      message: \"This is a cabinet.\",\n      pos: [568, 615],\n      playerFace: [3]\n    },\n    {\n      tiles: [192, 208],\n      message: \"This is another cabinet.\",\n      pos: [569, 616],\n      playerFace: [3]\n    },\n    {\n      tiles: [84],\n      message: \"This is a trash can.\",\n      pos: [897],\n      playerFace: [0, 6]\n    },\n    {\n      tiles: [225, 241],\n      message: \"This is a toilet with a turd.\",\n      pos: [372, 419],\n      playerFace: [3]\n    },\n    {\n      tiles: [15, 16, 31, 32, 47, 48],\n      message: \"This is a bed.\",\n      pos: [302, 303, 349, 350, 396, 397],\n      playerFace: [3,9]\n    },\n    {\n      tiles: [15, 16, 31, 32, 47, 48],\n      message: \"This is a bed.\",\n      pos: [317, 318, 364, 365, 411, 412],\n      playerFace: [3,9]\n\n    },\n    {\n      tiles: [94, 95, 110, 111, 126, 127],\n      message: \"This is a bookshelf\",\n      pos: [219, 220, 266, 267, 313, 314],\n      playerFace: [3]\n\n    },\n    {\n      tiles: [94, 95, 110, 111, 126, 127],\n      message: \"This is a bookshelf\",\n      pos: [248, 249, 295, 296, 342, 343],\n      playerFace: [3]\n\n    },\n    {\n      tiles: [156, 157, 172, 173],\n      message: \"This is a fridge.\",\n      pos: [573, 574, 620, 621],\n      playerFace: [3]\n\n    },\n    {\n      tiles: [226, 227, 242, 243],\n      message: \"The sink seems to be out.\",\n      pos: [369, 370, 416, 417],\n      playerFace: [3]\n\n    },\n    {\n      tiles: [163, 164, 179, 180],\n      message: \"The TV seems to be displaying something.\",\n      pos: [310, 311, 357, 358],\n      playerFace: [3]\n\n    },\n    {\n      tiles: [158, 159, 160, 174, 175, 176],\n      message: \"This sink seems to be working fine...\",\n      pos: [570, 571, 572, 617, 618, 619],\n      playerFace: [3]\n\n    },\n  ];\n\n  let updatedObjects = objects.map((object) => {\n    return new _scripts_static_object__WEBPACK_IMPORTED_MODULE_1__[\"default\"](object);\n  });\n\n  let reset = document.getElementById(\"reset\");\n  reset.onclick = (e) => {\n    e.preventDefault();\n    location.reload();\n  };\n\n  let pause = document.getElementById(\"pause\");\n  pause.onclick = (e) => {\n    e.preventDefault();\n    paused = true;\n    alert(\"You paused the game!\");\n  };\n\n  let resume = document.getElementById(\"resume\");\n  resume.onclick = (e) => {\n    e.preventDefault();\n    if (paused) {\n      alert(\"You resumed the game!\");\n      paused = false;\n    }\n  };\n\n  // requestAnimationFrame(main);\n  // let startTime;\n  // let gTime;\n\n  // function main(time) {\n  //   if (startTime === undefined) {\n  //     startTime = time;\n  //   }\n  //   gTime = time - startTime;\n  //   // ctx.clearRect(0, 0, canvas.width, canvas.height)\n  //   testView.draw();\n\n  //   requestAnimationFrame(main);\n  // }\n\n  // testView.draw()\n  function handleKeyDown(event) {\n    event.preventDefault();\n    if (paused) return;\n    if (\n      event.code === \"KeyE\" &&\n      _scripts_utils__WEBPACK_IMPORTED_MODULE_2__.Utils.detectPlayerObjectInteraction(updatedObjects, testPlayer) && _scripts_utils__WEBPACK_IMPORTED_MODULE_2__.Utils.detectPlayerObjectInteraction(updatedObjects, testPlayer).playerFace.includes(testPlayer.currDir)\n    ) {\n      flag = true;\n      window.removeEventListener('keydown', handleKeyDown);\n      _scripts_utils__WEBPACK_IMPORTED_MODULE_2__.Utils.detectPlayerObjectInteraction(\n        updatedObjects,\n        testPlayer\n      ).renderMessage();\n\n      setTimeout(() => {\n        flag = false;\n        window.addEventListener(\"keydown\", handleKeyDown)\n      }, 3500);\n    }\n\n    if (flag === false) {\n      testPlayer.moved = true;\n      testPlayer.move(testPlayer.convertKeytoDir(event.code), testView);\n      // requestAnimationFrame(() => testView.draw())\n    }\n\n  };\n  window.addEventListener(\"keydown\", handleKeyDown)\n  window.addEventListener(\"keyup\", () => testPlayer.moved = false)\n});\n\n\n//# sourceURL=webpack://escape_chase/./src/index.js?");

/***/ }),

/***/ "./src/scripts/moving_object.js":
/*!**************************************!*\
  !*** ./src/scripts/moving_object.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/scripts/utils.js\");\n\nconst FACE_DOWN = 0;\nconst FACE_UP = 3;\nconst FACE_LEFT = 6;\nconst FACE_RIGHT = 9;\nconst DOWN_MOVES = [0, 1, 0, 2];\nconst UP_MOVES = [3, 4, 3, 5];\nconst LEFT_MOVES = [6, 7, 6, 8];\nconst RIGHT_MOVES = [9, 10, 9, 11];\nclass MovingObject {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.pos = [240, 160];\n    this.canvas = document.getElementById(\"player-box\");\n    this.currDir = FACE_DOWN;\n    this.prevDir = FACE_DOWN;\n  }\n\n  draw(frameX) {\n    // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    let char = new Image();\n    char.src = \"./assets/spritesheet.png\";\n    char.onload = () => {\n      const scale = 1;\n      const width = 16;\n      const height = 16;\n      const scaledWidth = scale * width;\n      const scaledHeight = scale * height;\n\n      let drawFrame = (frameX) => {\n        this.ctx.drawImage(\n          char,\n          frameX * width,\n          0,\n          width,\n          height,\n          this.pos[0],\n          this.pos[1],\n          scaledWidth,\n          scaledHeight\n        );\n      };\n\n      requestAnimationFrame(() => drawFrame(frameX));\n    };\n  }\n\n  convertKeytoDir(code) {\n    switch (code) {\n      case \"KeyS\":\n      case \"ArrowDown\":\n        this.currDir = FACE_DOWN;\n        return [0, 1];\n\n      case \"KeyW\":\n      case \"ArrowUp\":\n        this.currDir = FACE_UP;\n        return [0, -1];\n\n      case \"KeyA\":\n      case \"ArrowLeft\":\n        this.currDir = FACE_LEFT;\n        return [-1, 0];\n\n      case \"KeyD\":\n      case \"ArrowRight\":\n        this.currDir = FACE_RIGHT;\n        return [1, 0];\n    }\n  }\n\n  move(dir, view) {\n    let dx = 16 * dir[0];\n    let dy = 16 * dir[1];\n    if (this.currDir !== this.prevDir) {\n      this.prevDir = this.currDir;\n      return;\n    }\n    if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__.Utils.detectCollision(view, [this.pos[0] + dx, this.pos[1] + dy])) {\n      this.pos[0] += dx;\n      this.pos[1] += dy;\n      let startTime;\n      let gTime;\n\n      const main = (time) => {\n        if (startTime === undefined) {\n          startTime = time;\n        }\n        gTime = time - startTime;\n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n        this.draw(this.currDir);\n\n        requestAnimationFrame(main);\n      };\n      requestAnimationFrame(main);\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovingObject);\n\n\n//# sourceURL=webpack://escape_chase/./src/scripts/moving_object.js?");

/***/ }),

/***/ "./src/scripts/static_object.js":
/*!**************************************!*\
  !*** ./src/scripts/static_object.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n\nclass StaticObject {\n  constructor(attributes) {\n    this.tiles = attributes['tiles'];\n    this.pos = attributes['pos']\n    this.message = attributes['message'];\n    this.playerFace = attributes['playerFace'];\n  }\n\n  detectPlayer(player) {\n    let updated = [player.pos[0] / 16, player.pos[1] / 16];\n    let index = 47 * updated[1] + updated[0];\n\n    for (let i = 0; i < this.pos.length; i++) {\n      const tile = this.pos[i];\n      let top = tile - 47 >= 0 ? tile - 47 : null;\n      let bottom = tile + 47 < 1128 ? tile + 47 : null;\n      let left = tile % 47 !== 0 ? tile - 1 : null;\n      let right = (tile + 1) % 47 !== 0 ? tile + 1 : null;\n      if (index === top || index === bottom || index === left || index === right) {\n        return true;\n      }\n    }\n    return false;\n  }\n\n  renderMessage() {\n    let message = document.getElementById('message');\n    message.innerHTML = \"\";\n    let content = this.message.split(\"\");\n    let animate = () => {\n      let running = setTimeout(animate, 90)\n      content.length > 0 ? message.innerHTML += content.shift() : clearTimeout(running)\n    }\n    animate();\n    setTimeout(()=>{\n      message.innerHTML = \"Use the WSAD or arrow keys to move and E to interact!\"\n    }, 3500);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (StaticObject);\n\n//# sourceURL=webpack://escape_chase/./src/scripts/static_object.js?");

/***/ }),

/***/ "./src/scripts/utils.js":
/*!******************************!*\
  !*** ./src/scripts/utils.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Utils\": function() { return /* binding */ Utils; }\n/* harmony export */ });\n\nconst Utils = {\n  detectCollision: (view, pos) => {\n    let updated = [pos[0] / 16, pos[1] / 16];\n    let index = 47 * updated[1] + updated[0];\n    const objs = [\n      0, 78, 79, 80, 228, 229, 244, 245, 230, 231, 246, 247, 216, 217, 218, 232,\n      233, 234, 248, 249, 250, 219, 220, 221, 235, 236, 237, 251, 252, 253, 142,\n      143\n    ];\n    return (\n      view.mapLayer1[index] !== 81 || !objs.includes(view.mapLayer2[index])\n    );\n  },\n\n  detectPlayerObjectInteraction: (objsArr, player) => {\n    for (let i = 0; i < objsArr.length; i++) {\n      const obj = objsArr[i];\n      if (obj.detectPlayer(player)) return obj;\n    }\n\n    return null;\n  },\n\n  findAllIndices: (arr, eleArr) => {\n    let indices = {};\n    for (let i = 0; i < eleArr.length; i++) {\n      const ele = eleArr[i];\n      for (let j = 0; j < arr.length; j++) {\n        const element = arr[j];\n        if (element === ele && indices[ele] === undefined) {\n          indices[ele] = [j];\n        } else if (element === ele && indices[ele] !== undefined) {\n          indices[ele].push(j);\n        }\n      }\n    }\n   \n    return indices;\n  }\n};\n\n\n\n//# sourceURL=webpack://escape_chase/./src/scripts/utils.js?");

/***/ }),

/***/ "./src/scripts/view.js":
/*!*****************************!*\
  !*** ./src/scripts/view.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n\nclass View {\n  constructor(ctx2, ctx, player) {\n    this.ctx2 = ctx2;\n    this.ctx = ctx;\n    this.player = player;\n    this.tileSize = 16;\n    this.atlasCol = 16;\n    this.atlasRow = 16;\n    this.mapCols = 47;\n    this.mapRows = 24;\n    this.mapHeight = this.tileSize * this.mapRows;\n    this.mapWidth = this.tileSize * this.mapCols;\n    this.mapLayer1 = [\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 129, 132, 132, 132, 132, 132, 132, 132, 132, 132, 118,\n      0, 0, 129, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 118, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 97, 103,\n      103, 103, 103, 103, 103, 103, 98, 119, 0, 0, 130, 97, 103, 103, 103, 103,\n      103, 103, 103, 103, 103, 98, 119, 129, 132, 132, 132, 132, 132, 132, 132,\n      118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 104, 102, 102, 102, 102,\n      102, 102, 102, 113, 119, 0, 0, 130, 104, 102, 102, 102, 102, 102, 102,\n      102, 102, 102, 113, 119, 130, 97, 103, 103, 103, 103, 103, 98, 119, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 104, 102, 102, 102, 102, 102, 102, 102,\n      113, 119, 0, 0, 130, 104, 102, 102, 102, 102, 102, 102, 102, 102, 102,\n      113, 119, 130, 104, 102, 102, 102, 102, 102, 113, 119, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 130, 99, 100, 100, 100, 100, 100, 100, 100, 101, 119, 0,\n      0, 130, 99, 100, 100, 100, 100, 100, 100, 100, 100, 100, 101, 119, 130,\n      104, 102, 102, 102, 102, 102, 113, 119, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 130, 81, 81, 81, 81, 81, 81, 81, 81, 81, 119, 0, 0, 130, 81, 81, 81,\n      81, 81, 81, 81, 81, 81, 81, 81, 119, 130, 99, 100, 100, 100, 100, 100,\n      101, 119, 0, 0, 0, 129, 132, 132, 132, 132, 132, 132, 132, 118, 130, 81,\n      81, 81, 81, 81, 81, 81, 81, 81, 119, 0, 0, 130, 81, 81, 81, 81, 81, 81,\n      81, 81, 81, 81, 81, 119, 130, 81, 81, 81, 81, 81, 81, 81, 119, 0, 0, 0,\n      130, 97, 103, 103, 103, 103, 103, 98, 119, 130, 81, 81, 81, 81, 81, 81,\n      81, 81, 81, 119, 0, 0, 130, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81,\n      119, 130, 81, 81, 81, 81, 81, 81, 81, 119, 0, 0, 0, 130, 104, 102, 102,\n      102, 102, 102, 113, 119, 130, 81, 81, 81, 81, 81, 81, 81, 81, 81, 119, 0,\n      0, 130, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 119, 130, 81, 81, 81,\n      81, 81, 81, 81, 119, 0, 0, 0, 130, 104, 102, 102, 102, 102, 102, 113, 119,\n      130, 81, 81, 81, 81, 81, 81, 81, 81, 81, 119, 0, 0, 130, 81, 81, 81, 81,\n      81, 81, 81, 81, 81, 81, 81, 119, 130, 81, 81, 81, 81, 81, 81, 81, 119, 0,\n      0, 0, 130, 99, 100, 100, 100, 100, 100, 101, 119, 116, 117, 117, 117, 131,\n      81, 120, 117, 117, 117, 115, 0, 0, 116, 117, 117, 117, 117, 131, 81, 120,\n      117, 117, 117, 117, 115, 116, 117, 117, 131, 81, 120, 117, 117, 115, 0, 0,\n      0, 130, 81, 81, 81, 81, 81, 81, 81, 133, 132, 132, 132, 132, 134, 81, 133,\n      132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 134, 81, 133, 132,\n      132, 132, 132, 132, 132, 132, 132, 134, 81, 133, 132, 132, 118, 0, 0, 0,\n      130, 81, 81, 81, 81, 81, 81, 81, 97, 103, 103, 103, 103, 98, 81, 97, 103,\n      103, 103, 103, 103, 103, 103, 103, 103, 103, 103, 98, 81, 97, 103, 103,\n      103, 103, 103, 103, 103, 103, 98, 81, 97, 103, 98, 119, 0, 0, 0, 130, 81,\n      81, 81, 81, 81, 81, 81, 104, 102, 102, 102, 102, 113, 81, 104, 102, 102,\n      102, 102, 102, 102, 102, 102, 102, 102, 102, 113, 81, 104, 102, 102, 102,\n      102, 102, 102, 102, 102, 113, 81, 104, 102, 113, 119, 0, 0, 0, 130, 81,\n      81, 81, 81, 81, 81, 81, 104, 102, 102, 102, 102, 113, 81, 104, 102, 102,\n      102, 102, 102, 102, 102, 102, 102, 102, 102, 113, 81, 104, 102, 102, 102,\n      102, 102, 102, 102, 102, 113, 81, 104, 102, 113, 119, 0, 0, 0, 130, 81,\n      81, 81, 81, 81, 81, 81, 99, 100, 100, 100, 100, 101, 81, 99, 100, 100,\n      100, 100, 100, 100, 100, 100, 100, 100, 100, 101, 81, 99, 100, 100, 100,\n      100, 100, 100, 100, 100, 101, 81, 99, 100, 101, 119, 0, 0, 0, 130, 81, 81,\n      81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81,\n      81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81,\n      81, 81, 81, 81, 119, 0, 0, 0, 130, 81, 81, 81, 81, 81, 81, 81, 120, 117,\n      117, 117, 117, 117, 117, 117, 117, 117, 117, 117, 117, 117, 117, 117, 117,\n      117, 117, 117, 117, 117, 117, 117, 117, 117, 117, 117, 117, 117, 117, 117,\n      117, 117, 117, 115, 0, 0, 0, 116, 117, 117, 131, 81, 120, 117, 117, 115,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 116, 117, 115, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0,\n    ];\n    this.mapLayer2 = [\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 91, 0, 0, 94, 95, 0, 90,\n      91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 94, 95, 66, 90, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 106, 107, 0, 66, 110,\n      111, 0, 106, 107, 0, 0, 0, 0, 195, 196, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 110, 111, 0, 106, 107, 0, 96, 15, 16, 0, 0, 0, 0, 0,\n      0, 163, 164, 0, 126, 127, 0, 96, 15, 16, 0, 0, 0, 211, 212, 0, 0, 0, 66,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 126, 127, 0, 219, 220, 221, 112,\n      31, 32, 0, 0, 0, 0, 0, 0, 179, 180, 0, 142, 143, 0, 112, 31, 32, 0, 0, 0,\n      226, 227, 0, 225, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 142,\n      143, 0, 235, 236, 237, 0, 47, 48, 0, 0, 0, 0, 0, 0, 230, 231, 0, 0, 0, 0,\n      0, 47, 48, 0, 0, 0, 242, 243, 0, 241, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 251, 252, 253, 0, 0, 0, 0, 0, 0, 0, 0, 0, 246, 247,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 230, 231, 0, 0, 0, 0, 0, 0, 0, 0, 0, 88, 89,\n      0, 0, 0, 88, 89, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 246, 247, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 190, 192, 158,\n      159, 160, 156, 157, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 206,\n      208, 174, 175, 176, 172, 173, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      62, 63, 64, 0, 0, 52, 53, 0, 0, 68, 69, 0, 0, 70, 71, 0, 0, 56, 57, 0, 0,\n      72, 73, 0, 0, 0, 0, 0, 58, 0, 0, 75, 0, 0, 59, 0, 0, 0, 60, 0, 0, 0, 0, 0,\n      0, 0, 0, 78, 79, 80, 0, 0, 66, 0, 0, 0, 0, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 84, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n      0, 0,\n    ];\n    this.tileAtlas = new Image();\n    this.tileAtlas.src = \"./assets/tileset.png\";\n    this.tileAtlas.onload = () => {\n      this.draw()\n    }\n  }\n\n  addObjects() {\n    // let canvas = document.getElementById('game-box-2');\n    // this.ctx2.clearRect(0,0, canvas.width, canvas.height);\n    // let tileAtlas = new Image();\n    // tileAtlas.src = \"./assets/tileset.png\";\n    // tileAtlas.onload = () => {\n      let mapIndex = 0;\n      let sourceX = 0;\n      let sourceY = 0;\n      \n      for (let col = 0; col < this.mapHeight; col += this.tileSize) {\n        for (let row = 0; row < this.mapWidth; row += this.tileSize) {\n          let tileVal = this.mapLayer2[mapIndex];\n          if (tileVal != 0) {\n            tileVal -= 1;\n            sourceY = Math.floor(tileVal / this.atlasCol) * this.tileSize;\n            sourceX = (tileVal % this.atlasCol) * this.tileSize;\n            this.ctx.drawImage(\n              this.tileAtlas,\n              sourceX,\n              sourceY,\n              this.tileSize,\n              this.tileSize,\n              row,\n              col,\n              this.tileSize,\n              this.tileSize\n            );\n          }\n          mapIndex++;\n        }\n      // }\n    };\n    \n    \n  }\n\n  draw() {\n    \n    // let tileAtlas = new Image();\n    // tileAtlas.src = \"./assets/tileset.png\";\n    // tileAtlas.onload = () => {\n      let mapIndex = 0;\n      let sourceX = 0;\n      let sourceY = 0;\n      for (let col = 0; col < this.mapHeight; col += this.tileSize) {\n        for (let row = 0; row < this.mapWidth; row += this.tileSize) {\n          let tileVal = this.mapLayer1[mapIndex];\n          if (tileVal != 0) {\n            tileVal -= 1;\n            sourceY = Math.floor(tileVal / this.atlasCol) * this.tileSize;\n            sourceX = (tileVal % this.atlasCol) * this.tileSize;\n            this.ctx.drawImage(\n              this.tileAtlas,\n              sourceX,\n              sourceY,\n              this.tileSize,\n              this.tileSize,\n              row,\n              col,\n              this.tileSize,\n              this.tileSize\n            );\n          }\n          mapIndex++;\n        }\n      // }\n    };\n    this.addObjects();\n    this.player.draw(this.player.currDir)\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (View);\n\n\n//# sourceURL=webpack://escape_chase/./src/scripts/view.js?");

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