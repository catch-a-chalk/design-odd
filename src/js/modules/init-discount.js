export const initDiscount = () => {
  const orderingDiscount = document.querySelector('.ordering__discount input');
  // const linkElement = document.querySelector(".promotion a.btn-black");

  const updateDiscountValue = () => {
    const localStorageData = JSON.parse(localStorage.getItem('data-form'));
    const hasKey2To4 = ['2', '3', '4'].some(key => localStorageData[key]?.['ready-package']?.length > 0);
    const hasKey5To10 = ['5', '6', '7', '8', '9', '10'].some(key => localStorageData[key]?.['web']?.length > 0);

    if (hasKey2To4 && hasKey5To10) {
      orderingDiscount.setAttribute('value', '15%');
    } else {
      orderingDiscount.removeAttribute('value');
    }
  };

  window.addEventListener('storage', (event) => {
    if (event.key === 'data-form') {
      updateDiscountValue();
    }
  });

  updateDiscountValue();
}
