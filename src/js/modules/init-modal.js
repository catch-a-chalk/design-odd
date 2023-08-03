export const initModal = () => {
  var buttons = document.querySelectorAll(".form__stages-container button");
  var modal = document.querySelector("#form__stages-modal");

  [].forEach.call(buttons, function (button) {
    button.addEventListener("click", function () {
      modal.classList.toggle("on");
      document.body.classList.toggle("on-modal"); // Добавляем/удаляем класс on-modal к body
    });
  });
};