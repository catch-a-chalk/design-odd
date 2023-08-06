





var formDataObject = {};

document.getElementById("form1").addEventListener("submit", function(e) {
  e.preventDefault(); 
  var formData = new FormData(this); 
  for (var pair of formData.entries()) { 
    var key = pair[0];
    var value = pair[1];
    if (formDataObject.hasOwnProperty(key)) { // Если ключ уже существует в formDataObject, добавляем значение к массиву
      formDataObject[key].push(value);
    } else {                                  // Иначе создаем новый ключ
      formDataObject[key] = [value];
    }
  }
  sessionStorage.setItem("formData1", JSON.stringify(formDataObject)); // Сохраняем данные формы первой страницы в sessionStorage
});

document.getElementById("form2").addEventListener("submit", function(e) {
  e.preventDefault();
  var formData = new FormData(this);
  for (var pair of formData.entries()) {
    var key = pair[0];
    var value = pair[1];
    if (formDataObject.hasOwnProperty(key)) {
      formDataObject[key].push(value);
    } else {
      formDataObject[key] = [value];
    }
  }
  sessionStorage.setItem("formData2", JSON.stringify(formDataObject));
});  

export const testing = () => {
  // Загрузка данных из sessionStorage на странице resultForm
  document.addEventListener("DOMContentLoaded", function() {
    var savedFormData1 = sessionStorage.getItem("formData1"); // Извлекаем сохраненные данные первой страницы формы
    var savedFormData2 = sessionStorage.getItem("formData2");
    
    if (savedFormData1 && savedFormData2) { // Проверяем, есть ли сохраненные данные с обеих страниц
      var formData1 = JSON.parse(savedFormData1);
      var formData2 = JSON.parse(savedFormData2);
      
      // Объединяем данные с обеих страниц в один объект
      var combinedFormData = Object.assign({}, formData1, formData2);
      var resultFormOutput = document.querySelector(".ordering__container output"); // Заполняем output на странице resultForm
      resultFormOutput.textContent = JSON.stringify(combinedFormData)
    }
  });

  // Обработка отправки формы resultForm
  document.getElementById("resultForm").addEventListener("submit", function() {
    var outputValue = document.querySelector(".ordering__container output").textContent; // Получаем значение из output
    var formData = { data: outputValue }; // Создаем объект с данными формы
    sessionStorage.setItem("formData", JSON.stringify(formData)); // Сохраняем данные формы в sessionStorage
  });

  // Очистка данных из sessionStorage при отправке формы resultForm
  document.getElementById("resultForm").addEventListener("submit", function() {
    // Удаляем сохраненные данные из sessionStorage
    sessionStorage.removeItem("formData1");
    sessionStorage.removeItem("formData2");
  });
}