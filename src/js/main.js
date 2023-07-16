// import {iosVhFix} from './utils/ios-vh-fix';
// import {initModals} from './modules/modals/init-modals';
// import {initVideo} from './modules/init-video';
import { initProjects } from './modules/init-projects';
import { initLine } from './modules/init-line';
import { initNav } from './modules/init-toggle';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  // iosVhFix();

  // Modules
  // ---------------------------------

  // initVideo();
  initLine();
  initProjects();
  initNav();
  // initSwiper();

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
//   window.addEventListener('load', () => {
//     initModals();
//   });
});
