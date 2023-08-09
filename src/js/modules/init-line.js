export const initLine = () => {
  const toggleElements = document.querySelectorAll(".form__stages-toggle");

  // Функция, которая проверяет, нужно ли добавить класс
  const check_add_class = () => {
    toggleElements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const halfScreenHeight = window.innerHeight / 2; // половина высоты экрана

      if (elementPosition < halfScreenHeight) {
        element.classList.add("form__stages-toggle--active");
      } 
      if (elementPosition > halfScreenHeight) {
        element.classList.remove("form__stages-toggle--active"); // убираем класс при скролле обратно
      }
    });
  };
  window.addEventListener('scroll', check_add_class);
};
