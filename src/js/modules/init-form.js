export const initForm = () => {
  const form1 = document.getElementById("form1");
  const form2 = document.getElementById("form2");
  const form3 = document.getElementById("form3");
  
  // Обработчик события submit для формы 1
  form1.addEventListener("submit", function(e) {
    e.preventDefault();
    // Сохраняем значения формы 1 в localStorage
    const formData = new FormData(form1);
    const formKey = form1.id + "Data";
    localStorage.setItem(formKey, JSON.stringify(Object.fromEntries(formData)));
    // Переходим на следующую страницу 2
    // window.location.href = "страница2.html";
  });
  
  // Обработчик события submit для формы 2
  form2.addEventListener("submit", function(e) {
    e.preventDefault();
    // Сохраняем значения формы 2 в localStorage
    const formData = new FormData(form2);
    const formKey = form2.id + "Data";
    localStorage.setItem(formKey, JSON.stringify(Object.fromEntries(formData)));
    // Переходим на следующую страницу 3
    // window.location.href = "страница3.html";
  });
  
  form3.addEventListener("submit", function(e) {
    e.preventDefault();
    // Сохраняем значения формы 3 в localStorage
    const formData = new FormData(form3);
    const formKey = form3.id + "Data";
    localStorage.setItem(formKey, JSON.stringify(Object.fromEntries(formData)));
    // Переходим на следующую страницу, если нужно
    // window.location.href = "страница3.html";
  });
  
  const resultForm = document.getElementById("resultForm");
  const submitButton = resultForm.querySelector("button[type=submit]");
  
  // Обработчик события submit для формы сбора данных
  resultForm.addEventListener("submit", function(e) {
    e.preventDefault();
  
    // Получаем данные из localStorage
    const form1Data = JSON.parse(localStorage.getItem("form1Data"));
    const form2Data = JSON.parse(localStorage.getItem("form2Data"));
    const form3Data = JSON.parse(localStorage.getItem("form3Data"));
  
    // Объединяем данные из всех форм
    const allData = {
      ...form1Data,
      ...form2Data,
      ...form3Data
    };
  
    // Отправляем данные или выполняем необходимые действия
    console.log(allData);
  });
}
