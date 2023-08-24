
import { initProjects } from './modules/init-projects';
import { initLine } from './modules/init-line';
import { burgerHandler } from './modules/init-navigation';
import { initLink } from './modules/init-link';
import { initTooltip } from './modules/init-tooltip';
import { setDataForm, getDataForm } from './modules/init-form';
import { initDiscount } from './modules/init-discount';
import { initModal } from './modules/init-modal';
import { initBack } from './modules/init-back';
// import { initCross } from './modules/init-cross';
import { initPrice } from './modules/init-price';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  // Utils
  // ---------------------------------

  // iosVhFix();

  // Modules
  // ---------------------------------
  
  
  burgerHandler;
  initLink();
  initProjects();
});

// document.addEventListener('DOMContentLoaded', () => {
//   initModal();
// });

document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname === '/branding.html') {
    initLine();
    initModal();
    initTooltip();
    // initCross();
    initPrice();
    setDataForm("#form1", 1);
    setDataForm("#form2", 2);
    setDataForm("#form3", 3);
    setDataForm("#form4", 4);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname === '/web.html') {
    // initCross();
    setDataForm("#form5", 5);
    setDataForm("#form6", 6);
    setDataForm("#form7", 7);
    setDataForm("#form8", 8);
    setDataForm("#form9", 9);
    setDataForm("#form10", 10);
    setDataForm("#form11", 11);
    setDataForm("#form12", 12);
    setDataForm("#form13", 13);
    setDataForm("#form14", 14);
    setDataForm("#form15", 15);
    setDataForm("#form16", 16);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname === '/order.html') {
    getDataForm("#resultForm");
    initBack();
    initDiscount();
  }
});