export const initDiscount = () => {
  const orderingDiscount = document.querySelector('.ordering__discount input');

  const updateDiscountValue = () => {
    const localStorageData = JSON.parse(localStorage.getItem('data-form'));
    const hasKey2 = localStorageData.hasOwnProperty('2') && localStorageData['2']['ready-radio'].length > 0;
    const hasKey3 = localStorageData.hasOwnProperty('3') && localStorageData['3']['web'].length > 0;

    if (hasKey2 && hasKey3) {
      orderingDiscount.setAttribute('value', '15%');
    } else {
      orderingDiscount.removeAttribute('value');
    }
  };

  // Добавляем обработчик события на изменение данных в localStorage в реальном времени
  window.addEventListener('storage', (event) => {
    if (event.key === 'data-form') {
      updateDiscountValue();
    }
  });

  // Вызываем функцию для начальной проверки
  updateDiscountValue();
}
