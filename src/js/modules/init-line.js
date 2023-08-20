export const initLine = () => {
  const toggleElements = document.querySelectorAll(".form__stages-toggle");

  const check_add_class = () => {
    toggleElements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const halfScreenHeight = window.innerHeight / 2;

      if (elementPosition < halfScreenHeight) {
        element.classList.add("form__stages-toggle--active");
      } 
      if (elementPosition > halfScreenHeight) {
        element.classList.remove("form__stages-toggle--active");
      }
    });
  };
  window.addEventListener('scroll', check_add_class);
};
