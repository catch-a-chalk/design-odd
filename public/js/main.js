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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_init_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/init-projects */ \"./src/js/modules/init-projects.js\");\n/* harmony import */ var _modules_init_line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/init-line */ \"./src/js/modules/init-line.js\");\n/* harmony import */ var _modules_init_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/init-nav */ \"./src/js/modules/init-nav.js\");\n/* harmony import */ var _modules_init_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/init-link */ \"./src/js/modules/init-link.js\");\n/* harmony import */ var _modules_init_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/init-tooltip */ \"./src/js/modules/init-tooltip.js\");\n/* harmony import */ var _modules_testing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/testing */ \"./src/js/modules/testing.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n// import { initModal } from './modules/init-modal'; ЛОМАЕТ ВООБЩЕ ВСЕ К ХУЯМ\r\n\r\n// import { popupHandler, popupCall } from './modules/popup'; // ЛОМАЕТ initLine\r\n// ---------------------------------\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n\r\n  // Utils\r\n  // ---------------------------------\r\n\r\n  // iosVhFix();\r\n\r\n  // Modules\r\n  // ---------------------------------\r\n\r\n  (0,_modules_init_projects__WEBPACK_IMPORTED_MODULE_0__.initProjects)();\r\n  (0,_modules_init_line__WEBPACK_IMPORTED_MODULE_1__.initLine)();\r\n  _modules_init_nav__WEBPACK_IMPORTED_MODULE_2__.hambHandler;\r\n  (0,_modules_init_link__WEBPACK_IMPORTED_MODULE_3__.initLink)();\r\n  (0,_modules_init_tooltip__WEBPACK_IMPORTED_MODULE_4__.initTooltip)();\r\n  // initModal();\r\n  (0,_modules_testing__WEBPACK_IMPORTED_MODULE_5__.setDataForm)(\"#form1\", 1);\r\n  (0,_modules_testing__WEBPACK_IMPORTED_MODULE_5__.setDataForm)(\"#form2\", 2);\r\n  (0,_modules_testing__WEBPACK_IMPORTED_MODULE_5__.setDataForm)(\"#form3\", 3);\r\n  (0,_modules_testing__WEBPACK_IMPORTED_MODULE_5__.setDataForm)(\"#form4\", 4);\r\n  (0,_modules_testing__WEBPACK_IMPORTED_MODULE_5__.getDataForm)(\"#resultForm\");\r\n  \r\n\r\n  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'\r\n  // в load следует добавить скрипты, не участвующие в работе первого экрана\r\n//   window.addEventListener('load', () => {\r\n//     initModals();\r\n//   });\r\n});\r\n\n\n//# sourceURL=webpack://starter/./src/js/main.js?");

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

eval("const popupWindow = document.querySelector(\".popup__window\");\r\nconst popupButton = document.querySelector(\".popup__btn\");\r\n\r\n// При клике на иконку hamb вызываем ф-ию hambHandler\r\npopupButton.addEventListener(\"click\", popupHandler);\r\n\r\n// Выполняем действия при клике ..\r\nfunction popupHandler(e) {\r\n  e.preventDefault();\r\n  // Переключаем стили элементов при клике\r\n  popupWindow.classList.toggle(\"popup__window--active\");\r\n}\r\n\r\nfunction closeOnClick() {\r\n  popupWindow.classList.remove(\"popup__window--active\");\r\n}\r\n\r\nconst popupMeet = document.querySelector(\".popup__meet\");\r\nconst popupForm = document.querySelector(\".popup__form\");\r\nconst callMe = document.getElementById(\"call-me\");\r\n\r\n// Обработчик клика на элементе с id \"call-me\"\r\ncallMe.addEventListener(\"click\", function (event) {\r\n  // Отменяем действие по умолчанию для ссылки\r\n  event.preventDefault();\r\n\r\n  // Переключаем стили элементов при клике\r\n  if (popupMeet.style.display === \"none\") {\r\n    // Если .popup__meet уже скрыт, показываем его\r\n    popupMeet.style.display = \"block\";\r\n    popupForm.style.display = \"none\";\r\n  } else {\r\n    // Если .popup__meet видимый, скрываем его и показываем .popup__form\r\n    popupMeet.style.display = \"none\";\r\n    popupForm.style.display = \"flex\";\r\n  }\r\n});\r\n\r\n\r\n// // В зависимости от нажатия на элемент меняем содержимое окна\r\n// const popupMeet = document.querySelector(\".popup__meet\");\r\n// const popupForm = document.querySelector(\".popup__form\");\r\n// const callMe = document.getElementById(\"call-me\");\r\n\r\n// callMe.addEventListener(\"click\", popupCall);\r\n\r\n// function popupCall(j) {\r\n//   j.preventDefault();\r\n//   popupMeet.style.display = \"none\";\r\n//   popupForm.style.display = \"flex\";\r\n// }\r\n\r\n// export default {popupHandler, popupCall}\n\n//# sourceURL=webpack://starter/./src/js/modules/popup.js?");

/***/ }),

/***/ "./src/js/modules/testing.js":
/*!***********************************!*\
  !*** ./src/js/modules/testing.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getDataForm: function() { return /* binding */ getDataForm; },\n/* harmony export */   setDataForm: function() { return /* binding */ setDataForm; }\n/* harmony export */ });\nconst setDataForm = (selector, index) => {\r\n  const form = document.querySelector(selector);\r\n  if (form) {\r\n    const getData = (form) => {\r\n      const data = {};\r\n\r\n      const inputs = form.querySelectorAll('input:not([data-no-save])');\r\n      inputs.forEach((input) => {\r\n        if (input.name && (input.type !== 'checkbox' || input.checked)) {\r\n          if (input.type === 'radio' && !input.checked) {\r\n            return; // Skip unchecked radio inputs\r\n          }\r\n\r\n          if (!data[input.name]) {\r\n            data[input.name] = [];\r\n          }\r\n          data[input.name].push({\r\n            value: input.value,\r\n            span: input.dataset.span,\r\n          });\r\n        }\r\n      });\r\n\r\n      return data;\r\n    };\r\n\r\n    form.addEventListener('submit', (e) => {\r\n      e.preventDefault();\r\n\r\n      const formData = getData(form);\r\n      let data = localStorage.getItem('data-form') ? JSON.parse(localStorage.getItem('data-form')) : {};\r\n\r\n      data[index] = { ...data[index], ...formData };\r\n\r\n      localStorage.setItem('data-form', JSON.stringify(data));\r\n    });\r\n  }\r\n};\r\n\r\nconst getDataForm = (formSelector) => {\r\n  const form = document.querySelector(formSelector);\r\n  const data = JSON.parse(localStorage.getItem('data-form'));\r\n  const outputContainer = form.querySelector('.ordering__container');\r\n  const remove = form.querySelector('.ordering__container button');\r\n  let totalInputs = 0;\r\n\r\n  remove.addEventListener('click', () => {\r\n    localStorage.removeItem('data-form');\r\n    while (outputContainer.firstChild) {\r\n      outputContainer.removeChild(outputContainer.firstChild);\r\n    }\r\n    updateTotalInputs(0);\r\n  });\r\n\r\n  if (data) {\r\n    for (const key in data) {\r\n      if (data.hasOwnProperty(key)) {\r\n        const formData = data[key];\r\n        const positionsMap = new Map();\r\n\r\n        for (const prop in formData) {\r\n          if (formData.hasOwnProperty(prop)) {\r\n            formData[prop].forEach((value) => {\r\n              if (value.span.trim() !== '' && !positionsMap.has(value.value)) {\r\n                positionsMap.set(value.value, value.span);\r\n\r\n                const label = document.createElement('label');\r\n                label.setAttribute('for', `form-${value.value}`);\r\n\r\n                const button = document.createElement('button');\r\n                button.setAttribute('type', 'button');\r\n                button.classList.add('ordering__cross');\r\n\r\n                const input = document.createElement('input');\r\n                input.setAttribute('type', 'text');\r\n                input.setAttribute('name', 'selected_items');\r\n                input.setAttribute('id', `form-${value.value}`);\r\n                input.value = value.value;\r\n                input.classList.add('visually-hidden');\r\n\r\n                const span = document.createElement('span');\r\n                span.textContent = value.span;\r\n\r\n                label.appendChild(button);\r\n                label.appendChild(input);\r\n                label.appendChild(span);\r\n                outputContainer.appendChild(label);\r\n\r\n                button.addEventListener('click', () => {\r\n                  const data = JSON.parse(localStorage.getItem('data-form'));\r\n                  if (data && data[key]) {\r\n                    const index = data[key][prop].findIndex(item => item.value === value.value);\r\n                    if (index !== -1) {\r\n                      data[key][prop].splice(index, 1);\r\n                      localStorage.setItem('data-form', JSON.stringify(data));\r\n\r\n                      outputContainer.removeChild(label);\r\n                      totalInputs--;\r\n                      updateTotalInputs(totalInputs);\r\n                    }\r\n                  }\r\n                });\r\n\r\n                totalInputs++;\r\n              }\r\n            });\r\n          }\r\n        }\r\n      }\r\n    }\r\n\r\n    updateTotalInputs(totalInputs);\r\n  }\r\n};\r\n\r\nfunction updateTotalInputs(count) {\r\n  const totalInputsElement = document.querySelector('.ordering__details h3');\r\n  totalInputsElement.textContent = `Выбранные позиции: ${count}`;\r\n}\r\n\n\n//# sourceURL=webpack://starter/./src/js/modules/testing.js?");

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