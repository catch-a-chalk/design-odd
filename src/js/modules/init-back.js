export const initBack = () => {
  document.addEventListener("DOMContentLoaded", function() {
    var backButton = document.querySelector(".btn-arrow.back");

    backButton.addEventListener("click", function(e) {
      e.preventDefault();

      var urlParams = new URLSearchParams(window.location.search);
      var previousPage = urlParams.get("prevPage");

      if (previousPage) {
        window.location.href = previousPage;
      } else {
        window.location.href = "index.html";
      }
    });
  });
}

