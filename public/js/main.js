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

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_init_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/init-projects */ \"./src/js/modules/init-projects.js\");\n// import {iosVhFix} from './utils/ios-vh-fix';\r\n// import {initModals} from './modules/modals/init-modals';\r\n// import {initVideo} from './modules/init-video';\r\n\r\n// import {initSwiper} from './modules/init-swiper';\r\n\r\n// ---------------------------------\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n\r\n  // Utils\r\n  // ---------------------------------\r\n\r\n  // iosVhFix();\r\n\r\n  // Modules\r\n  // ---------------------------------\r\n\r\n  // initVideo();\r\n  (0,_modules_init_projects__WEBPACK_IMPORTED_MODULE_0__.initProjects)();\r\n  // initSwiper();\r\n\r\n  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'\r\n  // в load следует добавить скрипты, не участвующие в работе первого экрана\r\n//   window.addEventListener('load', () => {\r\n//     initModals();\r\n//   });\r\n});\r\n\n\n//# sourceURL=webpack://starter/./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/init-projects.js":
/*!*****************************************!*\
  !*** ./src/js/modules/init-projects.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initProjects\": function() { return /* binding */ initProjects; }\n/* harmony export */ });\nfunction initProjects() {\n  const plansSection = document.querySelector(\".projects\");\n\n  if (plansSection) {\n    const navigation = plansSection.querySelector(\".projects__nav\"),\n      tabs = navigation !== null && navigation.querySelectorAll(\"a\"),\n      panels = plansSection.querySelectorAll(\".projects__list\");\n\n    let currentTabIndex = 0;\n\n    if (tabs !== false) {\n      tabs.forEach((tab, index) => {\n        tab.addEventListener(\"click\", (e) => {\n          e.preventDefault();\n          if (currentTabIndex === index) {\n            return panels[currentTabIndex].focus();\n          }\n\n          return switchTab(index);\n        });\n\n        tab.addEventListener(\"keydown\", ({ key }) => {\n          switch (key) {\n            case \"ArrowRight\":\n              return (\n                currentTabIndex !== tabs.length - 1 && switchTab(currentTabIndex + 1)\n              );\n\n            case \"ArrowLeft\":\n              return currentTabIndex !== 0 && switchTab(currentTabIndex - 1);\n\n            case \"ArrowDown\": return panels[currentTabIndex].focus();\n            default: break;\n          }\n        });\n      });\n\n      function switchTab(newIndex) {\n        const newTab = tabs[newIndex],\n          oldTab = tabs[currentTabIndex];\n\n        newTab.focus();\n        newTab.removeAttribute(\"tabindex\");\n        newTab.setAttribute(\"aria-selected\", \"true\");\n\n        oldTab.removeAttribute(\"aria-selected\");\n        oldTab.setAttribute(\"tabindex\", \"-1\");\n        panels[currentTabIndex].hidden = true;\n        panels[newIndex].hidden = false;\n        currentTabIndex = newIndex;\n      }\n    }\n  }\n}\n\n\n//# sourceURL=webpack://starter/./src/js/modules/init-projects.js?");

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
/******/ 	__webpack_require__("./src/js/main.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/modules/init-projects.js");
/******/ 	
/******/ })()
;