export const initModal = () => {
  var buttons = document.querySelectorAll(".form__stages-container button");
  var modal = document.querySelector("#form__stages-modal");
  var modalContent = modal.querySelector(".modal-content");

  [].forEach.call(buttons, function (button) {
    button.addEventListener("click", function () {
      modal.classList.toggle("on");
      document.body.classList.toggle("on-modal");

      // Очистить предыдущий контент модального окна
      modalContent.innerHTML = "";

      // Создать новый контент модального окна
      var newContent = document.createElement("div");
      // Настройте новый контент здесь, например:
      newContent.innerHTML = "Новый контент модального окна";
      modalContent.appendChild(newContent);
    });
  });
};