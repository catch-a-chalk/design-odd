export const initModal = () => {
  // Функция для открытия модального окна
const openModal = (modal) => {
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // Запрещаем скролл при открытом модальном окне
};

// Функция для закрытия модального окна
const closeModal = (modal) => {
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // Восстанавливаем скролл при закрытии модального окна
};

// Получение всех кнопок вызова модального окна
const modalTriggerButtons = document.querySelectorAll(".form__stages-question");

// Получение всех модальных окон
const modalContainers = document.querySelectorAll(".form__stages-modal");

// Получение кнопок закрытия
const closeButtons = document.querySelectorAll(".btn-arrow");

modalTriggerButtons.addEventListener("click", function(e) {
  e.preventDefault();
  modalContainers.style.display = "flex";
});
// Назначаем обработчики событий для каждой кнопки вызова модального окна
// modalTriggerButtons.forEach((button, index) => {
//   button.addEventListener("click", () => {
//     openModal(modalContainers[index]);
//   });
// });

// Назначаем обработчики событий для каждой кнопки закрытия
closeButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    closeModal(modalContainers[index]);
  });
});

}