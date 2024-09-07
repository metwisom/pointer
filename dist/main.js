/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/calculateAngle.ts":
/*!*******************************!*\
  !*** ./src/calculateAngle.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calculateAngle: () => (/* binding */ calculateAngle)\n/* harmony export */ });\nfunction calculateAngle(point1, point2, point3) {\n    var ABx = point2.x - point1.x;\n    var ABy = point2.y - point1.y;\n    var ACx = point3.x - point1.x;\n    var ACy = point3.y - point1.y;\n    var dotProduct = ABx * ACx + ABy * ACy;\n    var magnitudeAB = Math.sqrt(ABx * ABx + ABy * ABy);\n    var magnitudeAC = Math.sqrt(ACx * ACx + ACy * ACy);\n    var cosTheta = dotProduct / (magnitudeAB * magnitudeAC);\n    var angleRadians = Math.acos(cosTheta);\n    var angleDegrees = angleRadians * (180 / Math.PI);\n    return angleRadians;\n}\n\n\n\n//# sourceURL=webpack://pointer/./src/calculateAngle.ts?");

/***/ }),

/***/ "./src/calculateDistance.ts":
/*!**********************************!*\
  !*** ./src/calculateDistance.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calculateDistance: () => (/* binding */ calculateDistance)\n/* harmony export */ });\nfunction calculateDistance(point1, point2) {\n    var deltaX = point2.x - point1.x;\n    var deltaY = point2.y - point1.y;\n    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);\n}\n\n\n\n//# sourceURL=webpack://pointer/./src/calculateDistance.ts?");

/***/ }),

/***/ "./src/display.ts":
/*!************************!*\
  !*** ./src/display.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Display: () => (/* binding */ Display)\n/* harmony export */ });\n/* harmony import */ var _world__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./world */ \"./src/world.ts\");\n\nvar Display = (function () {\n    var canvas;\n    var ctx;\n    var callBack;\n    return Object.freeze({\n        canvas: undefined,\n        ctx: undefined,\n        init: function (id) {\n            canvas = document.getElementById(id);\n            canvas.width = _world__WEBPACK_IMPORTED_MODULE_0__.World.width;\n            canvas.height = _world__WEBPACK_IMPORTED_MODULE_0__.World.height;\n            ctx = canvas.getContext(\"2d\");\n        },\n        start: function (newCb) {\n            callBack = newCb;\n            this.draw();\n        },\n        draw: function () {\n            callBack(ctx);\n            requestAnimationFrame(this.draw.bind(this));\n        }\n    });\n})();\n\n\n\n//# sourceURL=webpack://pointer/./src/display.ts?");

/***/ }),

/***/ "./src/getSide.ts":
/*!************************!*\
  !*** ./src/getSide.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getSide: () => (/* binding */ getSide)\n/* harmony export */ });\nfunction getSide(point1, point2, point3) {\n    var crossProduct = (point2.x - point1.x) * (point3.y - point1.y) - (point2.y - point1.y) * (point3.x - point1.x);\n    if (crossProduct > 0) {\n        return 1;\n    }\n    else if (crossProduct < 0) {\n        return -1;\n    }\n    else {\n        return 0;\n    }\n}\n\n\n\n//# sourceURL=webpack://pointer/./src/getSide.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point */ \"./src/point.ts\");\n/* harmony import */ var _calculateDistance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculateDistance */ \"./src/calculateDistance.ts\");\n/* harmony import */ var _calculateAngle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculateAngle */ \"./src/calculateAngle.ts\");\n/* harmony import */ var _getSide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getSide */ \"./src/getSide.ts\");\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./display */ \"./src/display.ts\");\n/* harmony import */ var _world__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./world */ \"./src/world.ts\");\n\n\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    var points = [];\n    for (var i = 0; i < 10; i++) {\n        points.push(new _point__WEBPACK_IMPORTED_MODULE_0__.Point());\n    }\n    _display__WEBPACK_IMPORTED_MODULE_4__.Display.init('display');\n    _display__WEBPACK_IMPORTED_MODULE_4__.Display.start(function (ctx) {\n        ctx.clearRect(0, 0, _world__WEBPACK_IMPORTED_MODULE_5__.World.width, _world__WEBPACK_IMPORTED_MODULE_5__.World.height);\n        for (var i in points) {\n            var item = points[i];\n            ctx.fillRect(item.x - item.mass, item.y - item.mass, item.mass * 2, item.mass * 2);\n        }\n    });\n    function draw() {\n        var _a;\n        for (var i in points) {\n            var item = points[i];\n            if (!item.isActive) {\n                continue;\n            }\n            // if (item.mass > 5) {\n            //     for (let newitem = 0; newitem < item.mass + 1; newitem++) {\n            //\n            //         const pp = new Point()\n            //         pp.angle = Math.PI * 2 / (item.mass + 1) * newitem\n            //         pp.speed = 1\n            //         pp.x = item.x + Math.cos(Math.PI * 2 / (item.mass + 1) * newitem) * 10\n            //         pp.y = item.y + Math.sin(Math.PI * 2 / (item.mass + 1) * newitem) * 10\n            //\n            //     }\n            //     item.mass = 0\n            //     continue\n            // }\n            for (var index in points) {\n                var value = points[index];\n                if (value.mass == 0 || !value.isActive || index == i) {\n                    continue;\n                }\n                var distance = (_a = (0,_calculateDistance__WEBPACK_IMPORTED_MODULE_1__.calculateDistance)(item, value)) !== null && _a !== void 0 ? _a : 10;\n                // if (distance < 1) {\n                //     if (item.mass > value.mass) {\n                //         item.mass += value.mass\n                //         value.mass = 0\n                //     } else {\n                //         value.mass += item.mass\n                //         item.mass = 0\n                //     }\n                //     continue\n                // }\n                var aang = (0,_calculateAngle__WEBPACK_IMPORTED_MODULE_2__.calculateAngle)(item, value, item.plan());\n                var side = (0,_getSide__WEBPACK_IMPORTED_MODULE_3__.getSide)(item, value, item.plan());\n                item.angle -= (aang * side);\n                if (aang < Math.PI / 2) {\n                    item.speed *= 1.1;\n                }\n                else {\n                    item.speed *= 0.9;\n                }\n            }\n            item.move();\n        }\n    }\n    setInterval(draw, 1);\n});\n\n\n//# sourceURL=webpack://pointer/./src/index.ts?");

/***/ }),

/***/ "./src/point.ts":
/*!**********************!*\
  !*** ./src/point.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Point: () => (/* binding */ Point)\n/* harmony export */ });\n/* harmony import */ var _world__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./world */ \"./src/world.ts\");\n\nvar Point = /** @class */ (function () {\n    function Point() {\n        var _this = this;\n        this._x = Math.random() * 800;\n        this._y = Math.random() * 800;\n        this.angle = Math.random() * Math.PI * 2;\n        this.speed = 1;\n        this.mass = Math.random() * 3;\n        this.positive = Math.random() >= 0.5;\n        this.isActive = false;\n        setTimeout(function () { return _this.isActive = true; }, 1000);\n    }\n    Object.defineProperty(Point.prototype, \"x\", {\n        get: function () {\n            return this._x;\n        },\n        set: function (newX) {\n            this._x = (_world__WEBPACK_IMPORTED_MODULE_0__.World.width + newX) % _world__WEBPACK_IMPORTED_MODULE_0__.World.width;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(Point.prototype, \"y\", {\n        get: function () {\n            return this._y;\n        },\n        set: function (newY) {\n            this._y = (_world__WEBPACK_IMPORTED_MODULE_0__.World.height + newY) % _world__WEBPACK_IMPORTED_MODULE_0__.World.height;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Point.prototype.plan = function () {\n        return {\n            x: this.x + Math.cos(this.angle) * 0.1, //this.speed,\n            y: this.y + Math.sin(this.angle) * 0.1, //this.speed\n        };\n    };\n    Point.prototype.move = function () {\n        var _a = this.plan(), x = _a.x, y = _a.y;\n        this.x = x;\n        this.y = y;\n    };\n    return Point;\n}());\n\n\n\n//# sourceURL=webpack://pointer/./src/point.ts?");

/***/ }),

/***/ "./src/world.ts":
/*!**********************!*\
  !*** ./src/world.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   World: () => (/* binding */ World)\n/* harmony export */ });\nvar World = Object.freeze({\n    width: screen.width,\n    height: screen.height,\n});\n\n\n\n//# sourceURL=webpack://pointer/./src/world.ts?");

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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;