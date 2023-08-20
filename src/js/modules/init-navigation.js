const burger = document.querySelector("#burger");
const body = document.body;
const navMenu = document.querySelector("#navigation__menu");
const navList = document.querySelector("#navigation__list").cloneNode(true);

burger.addEventListener("click", burgerHandler);

function burgerHandler(e) {
  e.preventDefault();
  navMenu.classList.toggle("open");
  burger.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderNavMenu();
}

function renderNavMenu() {
  navMenu.appendChild(navList);
}

const links = Array.from(navList.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  navMenu.classList.remove("open");
  burger.classList.remove("active");
  body.classList.remove("noscroll");
}

export default {burgerHandler}
