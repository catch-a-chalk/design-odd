export const setDataForm = (selector, index) => {
    const form = document.querySelector(selector);
    if (form) {
      const getData = (form) => {
        const data = {};
  
        // Записываем данные всех input'ов в объект data
        const inputs = form.querySelectorAll('input');
        inputs.forEach((input) => {
          if (input.name && (input.type !== 'checkbox' || input.checked)) {
            if (!data[input.name]) {
              data[input.name] = [];
            }
            data[input.name].push(input.value);
          }
        });
  
        return data;
      };
  
      form.addEventListener('submit', (e) => {
        e.preventDefault();
  
        const formData = getData(form);
        let data = localStorage.getItem('data-form') ? JSON.parse(localStorage.getItem('data-form')) : {};
  
        // Объединяем текущие данные с уже сохраненными данными в localStorage
        data[index] = { ...data[index], ...formData };
  
        localStorage.setItem('data-form', JSON.stringify(data));
      });
    }
  };

  export const getDataForm = (formSelector) => {
    const form = document.querySelector(formSelector);
    const data = JSON.parse(localStorage.getItem('data-form'));
    const output = form.querySelector('.ordering__details ul');
    const remove = form.querySelector('.ordering__container button');
  
    remove.addEventListener('click', () => {
      localStorage.removeItem('data-form');
      while (output.firstChild) {
        output.removeChild(output.firstChild);
      }
    });
  
    let totalInputs = 0; // Переменная для общего количества инпутов
  
    if (data && data[1]) {
      const formData = data[1]; // Используйте нужный индекс для получения данных
  
      for (const prop in formData) {
        if (formData.hasOwnProperty(prop)) {
          formData[prop].forEach((value) => {
            const li = document.createElement('li');
  
            const button = document.createElement('button');
            button.setAttribute('type', 'button');
            const span = document.createElement('span');
            span.classList.add('ordering__cross');
            button.appendChild(span);
  
            const outputElement = document.createElement('output');
            outputElement.textContent = value;
  
            li.appendChild(button);
            li.appendChild(outputElement);
  
            output.appendChild(li);
  
            // Добавляем обработчик события для каждого .ordering__cross элемента
            button.addEventListener('click', () => {
              // Удаляем соответствующий инпут из localStorage
              const data = JSON.parse(localStorage.getItem('data-form'));
              if (data && data[1]) {
                const index = data[1][prop].indexOf(value);
                if (index !== -1) {
                  data[1][prop].splice(index, 1);
                  localStorage.setItem('data-form', JSON.stringify(data));
                }
              }
  
              // Удаляем текущий li элемент из DOM
              output.removeChild(li);
  
              // Уменьшаем значение количества инпутов при удалении
              totalInputs--;
              updateTotalInputs(totalInputs);
            });
  
            // Увеличиваем значение количества инпутов при добавлении
            totalInputs++;
          });
        }
      }
  
      // Обновляем значение количества инпутов после завершения цикла
      updateTotalInputs(totalInputs);
    }
  };
  
  // Функция для обновления значения количества инпутов в <h3> элементе
  function updateTotalInputs(count) {
    const totalInputsElement = document.querySelector('.ordering__details h3');
    totalInputsElement.textContent = `Выбранные позиции: ${count}`;
  }
