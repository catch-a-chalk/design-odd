export const setDataForm = (selector, index) => {
    const form = document.querySelector(selector);
    if (form) {
      const getData = (form) => {
        const data = {};
  
        const inputs = form.querySelectorAll('input');
        inputs.forEach((input) => {
          if (input.name && (input.type !== 'checkbox' || input.checked)) {
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
  
      form.addEventListener('submit', (e) => {
        e.preventDefault();
  
        const formData = getData(form);
        let data = localStorage.getItem('data-form') ? JSON.parse(localStorage.getItem('data-form')) : {};
  
        data[index] = { ...data[index], ...formData };
  
        localStorage.setItem('data-form', JSON.stringify(data));
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
  
    if (data && data[1]) {
      const formData = data[1];
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
              input.setAttribute('name', 'positions');
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
                if (data && data[1]) {
                  const index = data[1][prop].findIndex(item => item.value === value.value);
                  if (index !== -1) {
                    data[1][prop].splice(index, 1);
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
  
      updateTotalInputs(totalInputs);
    }
  };
  
  
  
  
  
  

//   export const setDataForm = (selector, index) => {
//     const form = document.querySelector(selector);
//     if (form) {
//       const getData = (form) => {
//         const data = {};
  
//         const inputs = form.querySelectorAll('input');
//         inputs.forEach((input) => {
//           if (input.name && (input.type !== 'checkbox' || input.checked)) {
//             if (!data[input.name]) {
//               data[input.name] = [];
//             }
//             data[input.name].push({
//               value: input.value,
//               span: input.dataset.span,
//             });
//           }
//         });
  
//         return data;
//       };
  
//       form.addEventListener('submit', (e) => {
//         e.preventDefault();
  
//         const formData = getData(form);
//         let data = localStorage.getItem('data-form') ? JSON.parse(localStorage.getItem('data-form')) : {};
  
//         data[index] = { ...data[index], ...formData };
  
//         localStorage.setItem('data-form', JSON.stringify(data));
//       });
//     }
//   };

//   export const getDataForm = (formSelector) => {
//     const form = document.querySelector(formSelector);
//     const data = JSON.parse(localStorage.getItem('data-form'));
//     const output = form.querySelector('.ordering__details ul');
//     const remove = form.querySelector('.ordering__container button');
  
//     remove.addEventListener('click', () => {
//       localStorage.removeItem('data-form');
//       while (output.firstChild) {
//         output.removeChild(output.firstChild);
//       }
//       updateTotalInputs(0); // Обновляем количество инпутов в заголовке
//     });
  
//     let totalInputs = 0;
  
//     if (data && data[1]) {
//       const formData = data[1];
  
//       for (const prop in formData) {
//         if (formData.hasOwnProperty(prop)) {
//           formData[prop].forEach((value) => {
//             const li = document.createElement('li');
//             const button = document.createElement('button');
//             button.setAttribute('type', 'button');
//             const span = document.createElement('span');
//             span.classList.add('ordering__cross');
//             button.appendChild(span);
  
//             const outputElement = document.createElement('output');
//             outputElement.setAttribute('id', value.value);
//             outputElement.textContent = value.span;
  
//             li.appendChild(button);
//             li.appendChild(outputElement);
  
//             output.appendChild(li);
  
//             button.addEventListener('click', () => {
//               const data = JSON.parse(localStorage.getItem('data-form'));
//               if (data && data[1]) {
//                 const index = data[1][prop].findIndex(item => item.value === value.value);
//                 if (index !== -1) {
//                   data[1][prop].splice(index, 1);
//                   localStorage.setItem('data-form', JSON.stringify(data));
  
//                   output.removeChild(li);
//                   totalInputs--;
//                   updateTotalInputs(totalInputs);
//                 }
//               }
//             });
  
//             totalInputs++;
//           });
//         }
//       }
  
//       updateTotalInputs(totalInputs);
//     }
//   };
  
//   function updateTotalInputs(count) {
//     const totalInputsElement = document.querySelector('.ordering__details h3');
//     totalInputsElement.textContent = `Выбранные позиции: ${count}`;
//   }