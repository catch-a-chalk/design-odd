export const initMdl = () => {
  const tooltipBtn1 = document.getElementById("tooltipBtn1");
  const tooltipModal1 = document.getElementById("tooltipModal1");
  const closeBtn1 = tooltipModal1.querySelector(".mdl__close");

  tooltipBtn1.addEventListener("click", () => {
    tooltipModal1.style.display = "block";
  });

  closeBtn1.addEventListener("click", () => {
    tooltipModal1.style.display = "none";
  });

  const tooltipBtn2 = document.getElementById("tooltipBtn2");
  const tooltipModal2 = document.getElementById("tooltipModal2");
  const closeBtn2 = tooltipModal2.querySelector(".mdl__close");

  tooltipBtn2.addEventListener("click", () => {
    tooltipModal2.style.display = "block";
  });

  closeBtn2.addEventListener("click", () => {
    tooltipModal2.style.display = "none";
  });

  function ensureModalInView(modal) {
    const viewportHeight = window.innerHeight;
    const modalRect = modal.getBoundingClientRect();

    // Проверяем, выходит ли модальное окно за верхнюю или нижнюю границу вьюпорта
    if (modalRect.top < 0) {
      modal.style.top = "20px"; // Можете установить другое значение, чтобы поддерживать интересующий вас отступ
    } else if (modalRect.bottom > viewportHeight) {
      modal.style.top = `${viewportHeight - modalRect.height - 20}px`; // Тоже можно настроить по своему усмотрению
    }
  }
}
