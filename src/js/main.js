
import { initProjects } from './modules/init-projects';
import { initLine } from './modules/init-line';
import { hambHandler } from './modules/init-nav';
import { initLink } from './modules/init-link';
import { initTooltip } from './modules/init-tooltip';
import { initModal } from './modules/init-modal';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  // iosVhFix();

  // Modules
  // ---------------------------------

  initProjects();
  initLine();
  hambHandler;
  initLink();
  initTooltip();
  initModal();

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
//   window.addEventListener('load', () => {
//     initModals();
//   });
});
