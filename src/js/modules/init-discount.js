// export const initDiscount = () => {
//   document.addEventListener('DOMContentLoaded', () => {
//     const localStorageData = JSON.parse(localStorage.getItem('data-form'));
//     if (localStorageData && localStorageData[2]) { // Проверяем наличие ключа "2" в LocalStorage
//       const readyCheckValue = localStorageData[2]['ready-check'][0]?.value; // Получаем значение ready-check из LocalStorage
//       if (readyCheckValue === 's-package') { // Сравниваем значение
//         console.log('ЖЕСТЬ!');
//       }
//     }
//   });
// }