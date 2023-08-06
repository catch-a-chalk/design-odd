/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_init_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/init-projects */ \"./src/js/modules/init-projects.js\");\n/* harmony import */ var _modules_init_line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/init-line */ \"./src/js/modules/init-line.js\");\n/* harmony import */ var _modules_init_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/init-nav */ \"./src/js/modules/init-nav.js\");\n/* harmony import */ var _modules_init_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/init-link */ \"./src/js/modules/init-link.js\");\n/* harmony import */ var _modules_init_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/init-tooltip */ \"./src/js/modules/init-tooltip.js\");\n/* harmony import */ var _modules_init_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/init-modal */ \"./src/js/modules/init-modal.js\");\n/* harmony import */ var _modules_testing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/testing */ \"./src/js/modules/testing.js\");\n/* harmony import */ var _modules_popup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/popup */ \"./src/js/modules/popup.js\");\n/* harmony import */ var _modules_popup__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_popup__WEBPACK_IMPORTED_MODULE_7__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// import { initForm } from './modules/init-form';\r\n\r\n\r\n// ---------------------------------\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n\r\n  // Utils\r\n  // ---------------------------------\r\n\r\n  // iosVhFix();\r\n\r\n  // Modules\r\n  // ---------------------------------\r\n\r\n  (0,_modules_init_projects__WEBPACK_IMPORTED_MODULE_0__.initProjects)();\r\n  (0,_modules_init_line__WEBPACK_IMPORTED_MODULE_1__.initLine)();\r\n  _modules_init_nav__WEBPACK_IMPORTED_MODULE_2__.hambHandler;\r\n  (0,_modules_init_link__WEBPACK_IMPORTED_MODULE_3__.initLink)();\r\n  (0,_modules_init_tooltip__WEBPACK_IMPORTED_MODULE_4__.initTooltip)();\r\n  (0,_modules_init_modal__WEBPACK_IMPORTED_MODULE_5__.initModal)();\r\n  // initForm();\r\n  (0,_modules_testing__WEBPACK_IMPORTED_MODULE_6__.testing)();\r\n  (0,_modules_popup__WEBPACK_IMPORTED_MODULE_7__.popup)();\r\n\r\n  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'\r\n  // в load следует добавить скрипты, не участвующие в работе первого экрана\r\n//   window.addEventListener('load', () => {\r\n//     initModals();\r\n//   });\r\n});\r\n\n\n//# sourceURL=webpack://starter/./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/init-form.js":
/*!*************************************!*\
  !*** ./src/js/modules/init-form.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initForm: function() { return /* binding */ initForm; }\n/* harmony export */ });\nconst initForm = () => {\r\n  const form1 = document.getElementById(\"form1\");\r\n  const form2 = document.getElementById(\"form2\");\r\n  const form3 = document.getElementById(\"form3\");\r\n  \r\n  // Обработчик события submit для формы 1\r\n  form1.addEventListener(\"submit\", function(e) {\r\n    e.preventDefault();\r\n    // Сохраняем значения формы 1 в localStorage\r\n    const formData = new FormData(form1);\r\n    const formKey = form1.id + \"Data\";\r\n    localStorage.setItem(formKey, JSON.stringify(Object.fromEntries(formData)));\r\n    // Переходим на следующую страницу 2\r\n    // window.location.href = \"страница2.html\";\r\n  });\r\n  \r\n  // Обработчик события submit для формы 2\r\n  form2.addEventListener(\"submit\", function(e) {\r\n    e.preventDefault();\r\n    // Сохраняем значения формы 2 в localStorage\r\n    const formData = new FormData(form2);\r\n    const formKey = form2.id + \"Data\";\r\n    localStorage.setItem(formKey, JSON.stringify(Object.fromEntries(formData)));\r\n    // Переходим на следующую страницу 3\r\n    // window.location.href = \"страница3.html\";\r\n  });\r\n  \r\n  form3.addEventListener(\"submit\", function(e) {\r\n    e.preventDefault();\r\n    // Сохраняем значения формы 3 в localStorage\r\n    const formData = new FormData(form3);\r\n    const formKey = form3.id + \"Data\";\r\n    localStorage.setItem(formKey, JSON.stringify(Object.fromEntries(formData)));\r\n    // Переходим на следующую страницу, если нужно\r\n    // window.location.href = \"страница3.html\";\r\n  });\r\n  \r\n  const resultForm = document.getElementById(\"resultForm\");\r\n  const submitButton = resultForm.querySelector(\"button[type=submit]\");\r\n  \r\n  // Обработчик события submit для формы сбора данных\r\n  resultForm.addEventListener(\"submit\", function(e) {\r\n    e.preventDefault();\r\n  \r\n    // Получаем данные из localStorage\r\n    const form1Data = JSON.parse(localStorage.getItem(\"form1Data\"));\r\n    const form2Data = JSON.parse(localStorage.getItem(\"form2Data\"));\r\n    const form3Data = JSON.parse(localStorage.getItem(\"form3Data\"));\r\n  \r\n    // Объединяем данные из всех форм\r\n    const allData = {\r\n      ...form1Data,\r\n      ...form2Data,\r\n      ...form3Data\r\n    };\r\n  \r\n    // Отправляем данные или выполняем необходимые действия\r\n    console.log(allData);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://starter/./src/js/modules/init-form.js?");

/***/ }),

/***/ "./src/js/modules/init-line.js":
/*!*************************************!*\
  !*** ./src/js/modules/init-line.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initLine: function() { return /* binding */ initLine; }\n/* harmony export */ });\nconst initLine = () => {\r\n  const toggleElements = document.querySelectorAll(\".form__stages-toggle\");\r\n\r\n  // Функция, которая проверяет, нужно ли добавить класс\r\n  const check_add_class = () => {\r\n    toggleElements.forEach((element) => {\r\n      const elementPosition = element.getBoundingClientRect().top;\r\n      const halfScreenHeight = window.innerHeight / 2; // половина высоты экрана\r\n\r\n      if (elementPosition < halfScreenHeight) {\r\n        element.classList.add(\"form__stages-toggle--active\");\r\n      } \r\n      if (elementPosition > halfScreenHeight) {\r\n        element.classList.remove(\"form__stages-toggle--active\"); // убираем класс при скролле обратно\r\n      }\r\n    });\r\n  };\r\n\r\n  // Отслеживаем событие \"скролл\"\r\n  window.addEventListener('scroll', check_add_class);\r\n};\n\n//# sourceURL=webpack://starter/./src/js/modules/init-line.js?");

/***/ }),

/***/ "./src/js/modules/init-link.js":
/*!*************************************!*\
  !*** ./src/js/modules/init-link.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initLink: function() { return /* binding */ initLink; }\n/* harmony export */ });\nconst initLink = () => {\r\n  var a = document.querySelectorAll('.menu li a');\r\n    for (var i=a.length; i--;) {\r\n      if (a[i].href === window.location.pathname || a[i].href === window.location.href) a[i].className += ' active';\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://starter/./src/js/modules/init-link.js?");

/***/ }),

/***/ "./src/js/modules/init-modal.js":
/*!**************************************!*\
  !*** ./src/js/modules/init-modal.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initModal: function() { return /* binding */ initModal; }\n/* harmony export */ });\nconst initModal = () => {\r\n  var buttons = document.querySelectorAll(\".form__stages-container button\");\r\n  var modal = document.querySelector(\"#form__stages-modal\");\r\n  var modalContent = modal.querySelector(\".modal-content\");\r\n\r\n  [].forEach.call(buttons, function (button) {\r\n    button.addEventListener(\"click\", function () {\r\n      modal.classList.toggle(\"on\");\r\n      document.body.classList.toggle(\"on-modal\");\r\n\r\n      // Очистить предыдущий контент модального окна\r\n      modalContent.innerHTML = \"\";\r\n\r\n      // Создать новый контент модального окна\r\n      var newContent = document.createElement(\"div\");\r\n      // Настройте новый контент здесь, например:\r\n      newContent.innerHTML = \"Новый контент модального окна\";\r\n      modalContent.appendChild(newContent);\r\n    });\r\n  });\r\n};\n\n//# sourceURL=webpack://starter/./src/js/modules/init-modal.js?");

/***/ }),

/***/ "./src/js/modules/init-nav.js":
/*!************************************!*\
  !*** ./src/js/modules/init-nav.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst hamb = document.querySelector(\"#hamb\");\r\nconst popupp = document.querySelector(\"#popupp\");\r\nconst body = document.body;\r\n\r\n// Клонируем меню, чтобы задать свои стили для мобильной версии\r\nconst menu = document.querySelector(\"#menu\").cloneNode(true);\r\n\r\n// При клике на иконку hamb вызываем ф-ию hambHandler\r\nhamb.addEventListener(\"click\", hambHandler);\r\n\r\n// Выполняем действия при клике ..\r\nfunction hambHandler(e) {\r\n  e.preventDefault();\r\n  // Переключаем стили элементов при клике\r\n  popupp.classList.toggle(\"open\");\r\n  hamb.classList.toggle(\"active\");\r\n  body.classList.toggle(\"noscroll\");\r\n  renderPopupp();\r\n}\r\n\r\n// Здесь мы рендерим элементы в наш попап\r\nfunction renderPopupp() {\r\n  popupp.appendChild(menu);\r\n}\r\n\r\n// Код для закрытия меню при нажатии на ссылку\r\nconst links = Array.from(menu.children);\r\n\r\n// Для каждого элемента меню при клике вызываем ф-ию\r\nlinks.forEach((link) => {\r\n  link.addEventListener(\"click\", closeOnClick);\r\n});\r\n\r\n// Закрытие попапа при клике на меню\r\nfunction closeOnClick() {\r\n  popupp.classList.remove(\"open\");\r\n  hamb.classList.remove(\"active\");\r\n  body.classList.remove(\"noscroll\");\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({hambHandler});\n\n//# sourceURL=webpack://starter/./src/js/modules/init-nav.js?");

/***/ }),

/***/ "./src/js/modules/init-projects.js":
/*!*****************************************!*\
  !*** ./src/js/modules/init-projects.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initProjects: function() { return /* binding */ initProjects; }\n/* harmony export */ });\nfunction initProjects() {\r\n  const plansSection = document.querySelector(\".projects\");\r\n\r\n  if (plansSection) {\r\n    const navigation = plansSection.querySelector(\".projects__nav\"),\r\n      tabs = navigation !== null && navigation.querySelectorAll(\"a\"),\r\n      panels = plansSection.querySelectorAll(\".projects__list\");\r\n\r\n    let currentTabIndex = 0;\r\n\r\n    if (tabs !== false) {\r\n      tabs.forEach((tab, index) => {\r\n        tab.addEventListener(\"click\", (e) => {\r\n          e.preventDefault();\r\n          if (currentTabIndex === index) {\r\n            return panels[currentTabIndex].focus();\r\n          }\r\n\r\n          return switchTab(index);\r\n        });\r\n\r\n        tab.addEventListener(\"keydown\", ({ key }) => {\r\n          switch (key) {\r\n            case \"ArrowRight\":\r\n              return (\r\n                currentTabIndex !== tabs.length - 1 && switchTab(currentTabIndex + 1)\r\n              );\r\n\r\n            case \"ArrowLeft\":\r\n              return currentTabIndex !== 0 && switchTab(currentTabIndex - 1);\r\n\r\n            case \"ArrowDown\": return panels[currentTabIndex].focus();\r\n            default: break;\r\n          }\r\n        });\r\n      });\r\n\r\n      function switchTab(newIndex) {\r\n        const newTab = tabs[newIndex],\r\n          oldTab = tabs[currentTabIndex];\r\n\r\n        newTab.focus();\r\n        newTab.removeAttribute(\"tabindex\");\r\n        newTab.setAttribute(\"aria-selected\", \"true\");\r\n\r\n        oldTab.removeAttribute(\"aria-selected\");\r\n        oldTab.setAttribute(\"tabindex\", \"-1\");\r\n        panels[currentTabIndex].hidden = true;\r\n        panels[newIndex].hidden = false;\r\n        currentTabIndex = newIndex;\r\n      }\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://starter/./src/js/modules/init-projects.js?");

/***/ }),

/***/ "./src/js/modules/init-tooltip.js":
/*!****************************************!*\
  !*** ./src/js/modules/init-tooltip.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initTooltip: function() { return /* binding */ initTooltip; }\n/* harmony export */ });\nconst initTooltip = () => {\r\nconst tooltips = document.getElementsByClassName(\"form__stages-tooltip\");\r\n\r\nfor (let i = 0; i < tooltips.length; i++) {\r\n  const tooltip = tooltips[i];\r\n\r\n  if (tooltip.textContent === \"\") {\r\n    tooltip.style.display = \"none\";\r\n  }\r\n}\r\n}\r\n\n\n//# sourceURL=webpack://starter/./src/js/modules/init-tooltip.js?");

/***/ }),

/***/ "./src/js/modules/popup.js":
/*!*********************************!*\
  !*** ./src/js/modules/popup.js ***!
  \*********************************/
/***/ (function() {

eval("// Определяем функцию для открытия модального окна\r\nfunction openModal() {\r\n  var modal = document.querySelector(\".popup__window\");\r\n  modal.style.visibility = \"visible\";\r\n}\r\n\r\n// Определяем функцию для закрытия модального окна\r\nfunction closeModal() {\r\n  var modal = document.querySelector(\".popup__window\");\r\n  modal.style.visibility = \"hidden\";\r\n}\r\n\r\n// Получаем кнопку для открытия модального окна\r\nvar openBtn = document.querySelector(\".popup__btn\");\r\n\r\n// Назначаем обработчик события для кнопки открытия модального окна\r\nopenBtn.addEventListener(\"click\", openModal);\r\n\r\n// Закрываем модальное окно при клике на любое место за его пределами\r\nwindow.addEventListener(\"click\", function (event) {\r\n  var modal = document.querySelector(\".popup__window\");\r\n  if (event.target === modal) {\r\n    closeModal();\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://starter/./src/js/modules/popup.js?");

/***/ }),

/***/ "./src/js/modules/testing.js":
/*!***********************************!*\
  !*** ./src/js/modules/testing.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   testing: function() { return /* binding */ testing; }\n/* harmony export */ });\n\r\n\r\n\r\n\r\n\r\n\r\nvar formDataObject = {};\r\n\r\ndocument.getElementById(\"form1\").addEventListener(\"submit\", function(e) {\r\n  e.preventDefault(); \r\n  var formData = new FormData(this); \r\n  for (var pair of formData.entries()) { \r\n    var key = pair[0];\r\n    var value = pair[1];\r\n    if (formDataObject.hasOwnProperty(key)) { // Если ключ уже существует в formDataObject, добавляем значение к массиву\r\n      formDataObject[key].push(value);\r\n    } else {                                  // Иначе создаем новый ключ\r\n      formDataObject[key] = [value];\r\n    }\r\n  }\r\n  sessionStorage.setItem(\"formData1\", JSON.stringify(formDataObject)); // Сохраняем данные формы первой страницы в sessionStorage\r\n});\r\n\r\ndocument.getElementById(\"form2\").addEventListener(\"submit\", function(e) {\r\n  e.preventDefault();\r\n  var formData = new FormData(this);\r\n  for (var pair of formData.entries()) {\r\n    var key = pair[0];\r\n    var value = pair[1];\r\n    if (formDataObject.hasOwnProperty(key)) {\r\n      formDataObject[key].push(value);\r\n    } else {\r\n      formDataObject[key] = [value];\r\n    }\r\n  }\r\n  sessionStorage.setItem(\"formData2\", JSON.stringify(formDataObject));\r\n});  \r\n\r\nconst testing = () => {\r\n  // Загрузка данных из sessionStorage на странице resultForm\r\n  document.addEventListener(\"DOMContentLoaded\", function() {\r\n    var savedFormData1 = sessionStorage.getItem(\"formData1\"); // Извлекаем сохраненные данные первой страницы формы\r\n    var savedFormData2 = sessionStorage.getItem(\"formData2\");\r\n    \r\n    if (savedFormData1 && savedFormData2) { // Проверяем, есть ли сохраненные данные с обеих страниц\r\n      var formData1 = JSON.parse(savedFormData1);\r\n      var formData2 = JSON.parse(savedFormData2);\r\n      \r\n      // Объединяем данные с обеих страниц в один объект\r\n      var combinedFormData = Object.assign({}, formData1, formData2);\r\n      var resultFormOutput = document.querySelector(\".ordering__container output\"); // Заполняем output на странице resultForm\r\n      resultFormOutput.textContent = JSON.stringify(combinedFormData)\r\n    }\r\n  });\r\n\r\n  // Обработка отправки формы resultForm\r\n  document.getElementById(\"resultForm\").addEventListener(\"submit\", function() {\r\n    var outputValue = document.querySelector(\".ordering__container output\").textContent; // Получаем значение из output\r\n    var formData = { data: outputValue }; // Создаем объект с данными формы\r\n    sessionStorage.setItem(\"formData\", JSON.stringify(formData)); // Сохраняем данные формы в sessionStorage\r\n  });\r\n\r\n  // Очистка данных из sessionStorage при отправке формы resultForm\r\n  document.getElementById(\"resultForm\").addEventListener(\"submit\", function() {\r\n    // Удаляем сохраненные данные из sessionStorage\r\n    sessionStorage.removeItem(\"formData1\");\r\n    sessionStorage.removeItem(\"formData2\");\r\n  });\r\n}\n\n//# sourceURL=webpack://starter/./src/js/modules/testing.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
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
/******/ 	__webpack_require__("./src/js/modules/init-form.js");
/******/ 	__webpack_require__("./src/js/modules/init-line.js");
/******/ 	__webpack_require__("./src/js/modules/init-link.js");
/******/ 	__webpack_require__("./src/js/modules/init-modal.js");
/******/ 	__webpack_require__("./src/js/modules/init-nav.js");
/******/ 	__webpack_require__("./src/js/modules/init-projects.js");
/******/ 	__webpack_require__("./src/js/modules/init-tooltip.js");
/******/ 	__webpack_require__("./src/js/modules/popup.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/modules/testing.js");
/******/ 	
/******/ })()
;