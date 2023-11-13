// const popupWindow = document.querySelector(".popup__window");
// const popupButton = document.querySelector(".popup__btn");

// // При клике на иконку hamb вызываем ф-ию hambHandler
// popupButton.addEventListener("click", popupHandler);

// // Выполняем действия при клике ..
// function popupHandler(e) {
//   e.preventDefault();
//   // Переключаем стили элементов при клике
//   popupWindow.classList.toggle("popup__window--active");
// }

// function closeOnClick() {
//   popupWindow.classList.remove("popup__window--active");
// }

// const popupMeet = document.querySelector(".popup__meet");
// const popupForm = document.querySelector(".popup__form");
// const callMe = document.getElementById("call-me");

// // Обработчик клика на элементе с id "call-me"
// callMe.addEventListener("click", function (event) {
//   // Отменяем действие по умолчанию для ссылки
//   event.preventDefault();

//   // Переключаем стили элементов при клике
//   if (popupMeet.style.display === "none") {
//     // Если .popup__meet уже скрыт, показываем его
//     popupMeet.style.display = "block";
//     popupForm.style.display = "none";
//   } else {
//     // Если .popup__meet видимый, скрываем его и показываем .popup__form
//     popupMeet.style.display = "none";
//     popupForm.style.display = "flex";
//   }
// });

// export default {popupHandler}
