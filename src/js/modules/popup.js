// Определяем функцию для открытия модального окна
function openModal() {
  var modal = document.querySelector(".popup__window");
  modal.style.visibility = "visible";
}

// Определяем функцию для закрытия модального окна
function closeModal() {
  var modal = document.querySelector(".popup__window");
  modal.style.visibility = "hidden";
}

// Получаем кнопку для открытия модального окна
var openBtn = document.querySelector(".popup__btn");

// Назначаем обработчик события для кнопки открытия модального окна
openBtn.addEventListener("click", openModal);

// Закрываем модальное окно при клике на любое место за его пределами
window.addEventListener("click", function (event) {
  var modal = document.querySelector(".popup__window");
  if (event.target === modal) {
    closeModal();
  }
});
