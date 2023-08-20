export const initModal = () => {
  const openModal = (modalElement) => {
    modalElement.style.display = "block";
    document.body.style.overflow = "hidden";
  };

  const closeModal = (modalElement) => {
    modalElement.style.display = "none";
    document.body.style.overflow = "";
  };

  const tooltipBtn1 = document.getElementById("tooltipBtn1");
  const tooltipModal1 = document.getElementById("tooltipModal1");
  const closeBtn1 = tooltipModal1.querySelector(".modal__close");

  tooltipBtn1.addEventListener("click", () => {
    openModal(tooltipModal1);
  });

  closeBtn1.addEventListener("click", () => {
    closeModal(tooltipModal1);
  });

  const tooltipBtn2 = document.getElementById("tooltipBtn2");
  const tooltipModal2 = document.getElementById("tooltipModal2");
  const closeBtn2 = tooltipModal2.querySelector(".modal__close");

  tooltipBtn2.addEventListener("click", () => {
    openModal(tooltipModal2);
  });

  closeBtn2.addEventListener("click", () => {
    closeModal(tooltipModal2);
  });

  const tooltipBtn3 = document.getElementById("tooltipBtn3");
  if (tooltipBtn3) {
    tooltipBtn3.style.display = "none";
  }
};
