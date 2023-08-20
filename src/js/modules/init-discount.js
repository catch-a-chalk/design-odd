export const initDiscount = () => {
  const orderingDiscount = document.querySelector('.ordering__discount input');

  const updateDiscountValue = () => {
    const localStorageData = JSON.parse(localStorage.getItem('data-form'));
    const hasKey3 = localStorageData.hasOwnProperty('3') && localStorageData['3']['web'] && localStorageData['3']['web'].length > 0;
    const hasKey7 = localStorageData.hasOwnProperty('7') && localStorageData['7']['ready-package'] && localStorageData['7']['ready-package'].length > 0;
    const hasKey8 = localStorageData.hasOwnProperty('8') && localStorageData['8']['ready-package'] && localStorageData['8']['ready-package'].length > 0;
    const hasKey9 = localStorageData.hasOwnProperty('9') && localStorageData['9']['ready-package'] && localStorageData['9']['ready-package'].length > 0;

    if ((hasKey7 || hasKey8 || hasKey9) && hasKey3) {
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
