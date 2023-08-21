export const initCross = () => {
  var localStorageData = JSON.parse(localStorage.getItem('data-form'));
  var myLink = document.querySelector('#myLink');
  var myPromo = document.querySelector('article');
  
  const hasKey2To4 = ['2', '3', '4'].some(key => localStorageData?.[key]?.['ready-package']?.length > 0);
  const hasKey5To10 = ['5', '6', '7', '8', '9', '10'].some(key => localStorageData?.[key]?.['web']?.length > 0);

  if (hasKey2To4 && hasKey5To10) {
    myLink.textContent = '';
    myLink.classList.add('btn-black--cross');
    myPromo.style.border = '1px solid #0e0e0e';
  }
};
