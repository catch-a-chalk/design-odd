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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_init_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/init-projects */ \"./src/js/modules/init-projects.js\");\n/* harmony import */ var _modules_init_line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/init-line */ \"./src/js/modules/init-line.js\");\n// import {iosVhFix} from './utils/ios-vh-fix';\r\n// import {initModals} from './modules/modals/init-modals';\r\n// import {initVideo} from './modules/init-video';\r\n\r\n\r\n// ---------------------------------\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n\r\n  // Utils\r\n  // ---------------------------------\r\n\r\n  // iosVhFix();\r\n\r\n  // Modules\r\n  // ---------------------------------\r\n\r\n  // initVideo();\r\n  (0,_modules_init_line__WEBPACK_IMPORTED_MODULE_1__.initLine)();\r\n  (0,_modules_init_projects__WEBPACK_IMPORTED_MODULE_0__.initProjects)();\r\n  // initSwiper();\r\n\r\n  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'\r\n  // в load следует добавить скрипты, не участвующие в работе первого экрана\r\n//   window.addEventListener('load', () => {\r\n//     initModals();\r\n//   });\r\n});\r\n\n\n//# sourceURL=webpack://starter/./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/init-line.js":
/*!*************************************!*\
  !*** ./src/js/modules/init-line.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initLine: function() { return /* binding */ initLine; }\n/* harmony export */ });\nconst initLine = () => {\r\n  // const [red, green, blue] = [69, 111, 225]\r\n  // const line = document.querySelector('#line')\r\n\r\n  // window.addEventListener('scroll', () => {\r\n  //   const y = 1 + (window.scrollY || window.pageYOffset) / 150\r\n  //   const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)\r\n  //   line.style.background = `rgb(${r}, ${g}, ${b})`\r\n  // })\r\n\r\n  // var navMain = document.querySelector('.toggleClass');\r\n  // var navToggle = document.querySelector('.toggleClass--active');\r\n  // navToggle.addEventListener('scroll', function() {\r\n  //   const y = 1 + (window.scrollY || window.pageYOffset) / 150\r\n  //   const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)\r\n  //   line.style.background = `rgb(${r}, ${g}, ${b})`\r\n\r\n  //   if (navMain.classList.contains('main-nav--closed')) {\r\n  //     navMain.classList.remove('main-nav--closed');\r\n  //     navMain.classList.add('main-nav--opened');\r\n  //   } else {\r\n  //     navMain.classList.add('main-nav--closed');\r\n  //     navMain.classList.remove('main-nav--opened');\r\n  //   }\r\n  // });\r\n\r\n  // Проверяем наличие CSS-свойства\r\n  // var obj1 = document.getElementById('line');\r\n\r\n  // if (getComputedStyle(obj1).position == 'sticky') {\r\n  //   console.log('Нашел!');\r\n  // }\r\n\r\n  //Записываем, сколько проскроллено по вертикали\r\n  let scrollpos = window.scrollY\r\n\r\n  const toggleClass = document.querySelector(\".form__stages-toggle\")\r\n\r\n  //Сколько пикселей нужно проскролить, чтобы добавить класс. Можете изменить значение\r\n  const scrollChange = 450\r\n\r\n  //Функция, которая будет добавлять класс\r\n  const add_class_on_scroll = () => toggleClass.classList.add(\"form__stages-toggle--active\")\r\n\r\n  //Отслеживаем событие \"скролл\"\r\n  window.addEventListener('scroll', function() { \r\n    scrollpos = window.scrollY;\r\n\r\n    //Если прокрутили больше, чем мы указали в переменной scrollChange, то выполняется функция добавления класса\r\n    if (scrollpos >= scrollChange) { add_class_on_scroll() }\r\n})\r\n}\n\n//# sourceURL=webpack://starter/./src/js/modules/init-line.js?");

/***/ }),

/***/ "./src/js/modules/init-projects.js":
/*!*****************************************!*\
  !*** ./src/js/modules/init-projects.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initProjects: function() { return /* binding */ initProjects; }\n/* harmony export */ });\nfunction initProjects() {\r\n  const plansSection = document.querySelector(\".projects\");\r\n\r\n  if (plansSection) {\r\n    const navigation = plansSection.querySelector(\".projects__nav\"),\r\n      tabs = navigation !== null && navigation.querySelectorAll(\"a\"),\r\n      panels = plansSection.querySelectorAll(\".projects__list\");\r\n\r\n    let currentTabIndex = 0;\r\n\r\n    if (tabs !== false) {\r\n      tabs.forEach((tab, index) => {\r\n        tab.addEventListener(\"click\", (e) => {\r\n          e.preventDefault();\r\n          if (currentTabIndex === index) {\r\n            return panels[currentTabIndex].focus();\r\n          }\r\n\r\n          return switchTab(index);\r\n        });\r\n\r\n        tab.addEventListener(\"keydown\", ({ key }) => {\r\n          switch (key) {\r\n            case \"ArrowRight\":\r\n              return (\r\n                currentTabIndex !== tabs.length - 1 && switchTab(currentTabIndex + 1)\r\n              );\r\n\r\n            case \"ArrowLeft\":\r\n              return currentTabIndex !== 0 && switchTab(currentTabIndex - 1);\r\n\r\n            case \"ArrowDown\": return panels[currentTabIndex].focus();\r\n            default: break;\r\n          }\r\n        });\r\n      });\r\n\r\n      function switchTab(newIndex) {\r\n        const newTab = tabs[newIndex],\r\n          oldTab = tabs[currentTabIndex];\r\n\r\n        newTab.focus();\r\n        newTab.removeAttribute(\"tabindex\");\r\n        newTab.setAttribute(\"aria-selected\", \"true\");\r\n\r\n        oldTab.removeAttribute(\"aria-selected\");\r\n        oldTab.setAttribute(\"tabindex\", \"-1\");\r\n        panels[currentTabIndex].hidden = true;\r\n        panels[newIndex].hidden = false;\r\n        currentTabIndex = newIndex;\r\n      }\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://starter/./src/js/modules/init-projects.js?");

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
/******/ 	__webpack_require__("./src/js/modules/init-line.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/modules/init-projects.js");
/******/ 	
/******/ })()
;