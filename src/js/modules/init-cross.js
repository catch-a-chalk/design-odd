// export const initCross = () => {
//   const toggleDiscount = () => {
//     const localStorageData = JSON.parse(localStorage.getItem('data-form'));
    
//     const hasKey2To4 = ['2', '3', '4'].some(key => localStorageData?.[key]?.['ready-package']?.length > 0);
//     const hasKey5To10 = ['5', '6', '7', '8', '9', '10'].some(key => localStorageData?.[key]?.['web']?.length > 0);
    
//     const myLink = document.querySelector('#myLink');
//     const myPromo = document.querySelector('article');

//     if (hasKey2To4 && hasKey5To10) {
//       myLink.textContent = '';
//       myLink.classList.add('btn-black--cross');
//       myPromo.style.border = '1px solid #0e0e0e';
//     } else {
//       myLink.textContent = 'Добавить';
//       myLink.classList.remove('btn-black--cross');
//       myPromo.style.border = '1px solid #d3d3d3';
//     }
//   };

//   // Вызываем функцию для первоначальной инициализации
//   toggleDiscount();

//   // Подписываемся на событие storage, которое срабатывает при изменении данных в LocalStorage
//   window.addEventListener('storage', toggleDiscount);
// };
