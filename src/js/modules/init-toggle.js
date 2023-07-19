export const initToggle = () => {
  const menuButton = document.querySelector('.header__button');
  const menuList = document.querySelector('.header__list');

  menuButton.addEventListener('click', () => {
    let expanded = menuButton.getAttribute('aria-expanded') === true;
    menuButton.setAttribute('aria-expanded', !expanded);
    menuButton.classList.toggle('header__button--open');
    menuList.classList.toggle('header__list--open');
  });

  // menuButton.removeEventListener('click', () => {
  //   let expanded = menuButton.getAttribute('aria-expanded') === 'false';
  //   menuButton.setAttribute('aria-expanded', !expanded);
  //   menuButton.classList.remove('header__button--open');
  //   menuList.classList.remove('header__list--open');
  // });
}
