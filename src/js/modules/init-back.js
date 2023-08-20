export const initBack = () => {
  document.addEventListener("DOMContentLoaded", function() {
    var backButton = document.querySelector(".btn-arrow.back");

    backButton.addEventListener("click", function(e) {
      e.preventDefault();

      // Получаем параметр prevPage из URL
      var urlParams = new URLSearchParams(window.location.search);
      var previousPage = urlParams.get("prevPage");

      // Если параметр найден, перенаправляем на предыдущую страницу
      if (previousPage) {
        window.location.href = previousPage;
      } else {
        // Если параметр отсутствует, перенаправляем на главную страницу
        window.location.href = "index.html"; // замените на свой URL
      }
    });
  });
}

