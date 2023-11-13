export const setDataForm = (selector, index) => {
  const form = document.querySelector(selector);
  if (form) {
    const getData = (form) => {
      const data = {};

      const inputs = form.querySelectorAll('input:not([data-no-save])');
      inputs.forEach((input) => {
        if (input.name && (input.type !== 'checkbox' || input.checked)) {
          if (input.type === 'radio' && !input.checked) {
            return;
          }

          if (!data[input.name]) {
            data[input.name] = [];
          }
          data[input.name].push({
            value: input.value,
            span: input.dataset.span,
          });
        }
      });

      return data;
    };

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = getData(form);
      let data = localStorage.getItem('data-form') ? JSON.parse(localStorage.getItem('data-form')) : {};

      const submitButton = form.querySelector('[type="submit"]');
      const isCrossButton = submitButton && submitButton.getAttribute('data-cross') === 'true';

      if (isCrossButton) {
        if (data[index]) {
          delete data[index];
          submitButton.classList.remove('btn-black--ex');
          submitButton.textContent = 'Заказать';
        } else {
          data[index] = formData;
          submitButton.classList.add('btn-black--ex');
          submitButton.textContent = '';
        }
      } else {
        data[index] = formData;
      }

      const parentForm2 = submitButton.closest('#form2');
      const parentForm3 = submitButton.closest('#form3');
      const parentForm4 = submitButton.closest('#form4');
      if (parentForm2) {
        if (isCrossButton) {
          parentForm2.style.border = '1px solid #d3d3d3';
        } if (isCrossButton && parentForm2.querySelector('[data-cross="true"].btn-black--ex')) {
          parentForm2.style.border = '1px solid #0e0e0e';
        }
      }

      if (parentForm3) {
        if (isCrossButton) {
          parentForm3.style.border = '1px solid #d3d3d3';
        } if (isCrossButton && parentForm3.querySelector('[data-cross="true"].btn-black--ex')) {
          parentForm3.style.border = '1px solid #0e0e0e';
        }
      }

      if (parentForm4) {
        if (isCrossButton) {
          parentForm4.style.border = '1px solid #d3d3d3';
        } if (isCrossButton && parentForm4.querySelector('[data-cross="true"].btn-black--ex')) {
          parentForm4.style.border = '1px solid #0e0e0e';
        }
      }

      localStorage.setItem('data-form', JSON.stringify(data));

      const toggleDiscount = () => {
        const localStorageData = JSON.parse(localStorage.getItem('data-form'));

        const hasKey2To4 = ['2', '3', '4'].some(key => localStorageData?.[key]?.['ready-package']?.length > 0);
        const hasKey5To10 = ['5', '6', '7', '8', '9', '10'].some(key => localStorageData?.[key]?.['web']?.length > 0);

        const myLink = document.querySelector('#myLink');
        const myPromo = document.querySelector('article');

        if (hasKey2To4 && hasKey5To10) {
          myLink.textContent = '';
          myLink.classList.add('btn-black--cross');
          myPromo.style.border = '1px solid #0e0e0e';
        } else {
          myLink.textContent = 'Добавить';
          myLink.classList.remove('btn-black--cross');
          myPromo.style.border = '1px solid #d3d3d3';
        }
      };

      // Вызываем функцию для первоначальной инициализации
      toggleDiscount();
    });
  }
};

export const getDataForm = (formSelector) => {
  const form = document.querySelector(formSelector);
  const data = JSON.parse(localStorage.getItem('data-form'));
  const outputContainer = form.querySelector('.ordering__container');
  const remove = form.querySelector('.ordering__container button');
  let totalInputs = 0;

  remove.addEventListener('click', () => {
    localStorage.removeItem('data-form');
    while (outputContainer.firstChild) {
      outputContainer.removeChild(outputContainer.firstChild);
    }
    updateTotalInputs(0);
  });

  if (data) {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const formData = data[key];
        const positionsMap = new Map();

        for (const prop in formData) {
          if (formData.hasOwnProperty(prop)) {
            formData[prop].forEach((value) => {
              if (value.span.trim() !== '' && !positionsMap.has(value.value)) {
                positionsMap.set(value.value, value.span);

                const label = document.createElement('label');
                label.setAttribute('for', `form-${value.value}`);

                const button = document.createElement('button');
                button.setAttribute('type', 'button');
                button.classList.add('ordering__cross');

                const input = document.createElement('input');
                input.setAttribute('type', 'text');
                input.setAttribute('name', 'selected_items');
                input.setAttribute('value', value.span);
                input.setAttribute('id', `form-${value.value}`);
                input.value = value.value;
                input.classList.add('visually-hidden');

                const span = document.createElement('span');
                span.textContent = value.span;

                label.appendChild(button);
                label.appendChild(input);
                label.appendChild(span);
                outputContainer.appendChild(label);

                button.addEventListener('click', () => {
                  const data = JSON.parse(localStorage.getItem('data-form'));
                  if (data && data[key]) {
                    const index = data[key][prop].findIndex(item => item.value === value.value);
                    if (index !== -1) {
                      data[key][prop].splice(index, 1);
                      localStorage.setItem('data-form', JSON.stringify(data));

                      outputContainer.removeChild(label);
                      totalInputs--;
                      updateTotalInputs(totalInputs);
                    }
                  }
                });

                totalInputs++;
              }
            });
          }
        }
      }
    }

    updateTotalInputs(totalInputs);
  }
};

function updateTotalInputs(count) {
  const totalInputsElement = document.querySelector('.ordering__details h3');
  totalInputsElement.textContent = `Выбранные позиции: ${count}`;
}
