// export const initNav = () => {
//   let headerNav = document.querySelector('.header__nav');
//   let headerToggle = document.querySelector('.header__toggle');
//   headerNav.classList.remove('header__nav--nojs');

//   headerToggle.addEventListener ('click', () => {
//     if (headerNav.classList.contains('header__nav--closed')) {
//       headerNav.classList.remove('header__nav--closed');
//       headerNav.classList.add('header__nav--opened');
//     } else {
//       headerNav.classList.add('header__nav--closed');
//       headerNav.classList.remove('header__nav--opened');
//     }
//   });
// };



const headerNav = document.querySelector('.header__nav');
const headerToggle = document.querySelector('.header__toggle');

export default function initNav() {
  if (headerNav && headerToggle) {
    headerNav.classList.remove('header__nav--nojs');

    headerToggle.addEventListener('click', () => {
      // стоит ли открывать
      const shouldBeOpened = headerToggle.ariaExpanded === 'false';
      toggleNav(shouldBeOpened);
    });
  }
}

export function toggleNav(willBeOpened) {
  if (headerNav) {
    headerNav.classList.toggle('header__nav--closed', !willBeOpened);
    headerNav.classList.toggle('header__nav--opened', willBeOpened);
  }

  // не позволяет скроллить
  document.body.style.overflow = willBeOpened ? 'hidden' : '';
  if (headerToggle) {
    headerToggle.ariaExpanded = String(willBeOpened);
    headerToggle.areaLabel = `${willBeOpened ? 'Открыть' : 'Закрыть'} меню`;
  }
}