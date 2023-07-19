// import {iosVhFix} from './utils/ios-vh-fix';
// import {initModals} from './modules/modals/init-modals';
import { initProjects } from './modules/init-projects';
import { initLine } from './modules/init-line';
import { hambHandler } from './modules/init-nav';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  // iosVhFix();

  // Modules
  // ---------------------------------

  // initLine();
  initProjects();
  hambHandler;
  // initNav();
  // initSwiper();

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
//   window.addEventListener('load', () => {
//     initModals();
//   });
});
