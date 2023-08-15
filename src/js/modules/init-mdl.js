export const initMdl = () => {
  const openModal = (modalElement) => {
    modalElement.style.display = "block";
    document.body.style.overflow = "hidden"; // Запрети скролл на заднем фоне
  };

  const closeModal = (modalElement) => {
    modalElement.style.display = "none";
    document.body.style.overflow = ""; // Верни обратно скролл на задний фон
  };

  const tooltipBtn1 = document.getElementById("tooltipBtn1");
  const tooltipModal1 = document.getElementById("tooltipModal1");
  const closeBtn1 = tooltipModal1.querySelector(".mdl__close");

  tooltipBtn1.addEventListener("click", () => {
    openModal(tooltipModal1);
  });

  closeBtn1.addEventListener("click", () => {
    closeModal(tooltipModal1);
  });

  const tooltipBtn2 = document.getElementById("tooltipBtn2");
  const tooltipModal2 = document.getElementById("tooltipModal2");
  const closeBtn2 = tooltipModal2.querySelector(".mdl__close");

  tooltipBtn2.addEventListener("click", () => {
    openModal(tooltipModal2);
  });

  closeBtn2.addEventListener("click", () => {
    closeModal(tooltipModal2);
  });
};
