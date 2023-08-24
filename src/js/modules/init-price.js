export const initPrice = () => {
  const myPrice2 = document.querySelector('#myPrice2');
  myPrice2.textContent = '200 000 ₽';

  const myPrice3 = document.querySelector('#myPrice3');
  myPrice3.textContent = '250 000 ₽';

  const myPrice4 = document.querySelector('#myPrice4');
  myPrice4.textContent = '270 000 ₽';

  const myInput2 = document.querySelector('input[id="ready-s-package"]');
  const myInput3 = document.querySelector('input[id="ready-i-package"]');
  const myInput4 = document.querySelector('input[id="ready-bi-package"]');

  const toggleEventHandler = () => {
    if (myInput2.checked) {
      myPrice2.textContent = '230 000 ₽';
    } else {
      myPrice2.textContent = '200 000 ₽';
    }

    if (myInput3.checked) {
      myPrice3.textContent = '280 000 ₽';
    } else {
      myPrice3.textContent = '250 000 ₽';
    }

    if (myInput4.checked) {
      myPrice4.textContent = '300 000 ₽';
    } else {
      myPrice4.textContent = '270 000 ₽';
    }
  };

  myInput2.addEventListener('change', toggleEventHandler);
  myInput3.addEventListener('change', toggleEventHandler);
  myInput4.addEventListener('change', toggleEventHandler);
};
