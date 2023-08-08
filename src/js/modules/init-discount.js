export const initDiscount = () => {
  const orderingDiscount = document.querySelector('.ordering__discount input');

  const updateDiscountValue = () => {
    const localStorageData = JSON.parse(localStorage.getItem('data-form')); // Получаем данные из localStorage
    const targetValue = localStorageData['2']['ready-radio'][0]['value'];

    if (targetValue === 'package-branding-idenity') {
      orderingDiscount.setAttribute('value', '15%');
    } else {
      orderingDiscount.removeAttribute('value');
    }
  };

  window.addEventListener('storage', updateDiscountValue);
  updateDiscountValue();
}
