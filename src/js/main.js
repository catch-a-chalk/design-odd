
import { initProjects } from './modules/init-projects';
import { initLine } from './modules/init-line';
import { hambHandler } from './modules/init-nav';
import { initLink } from './modules/init-link';
import { initTooltip } from './modules/init-tooltip';
import { setDataForm, getDataForm } from './modules/testing';
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
  setDataForm("#form1", 1);
  setDataForm("#form2", 2);
  setDataForm("#form3", 3);
  setDataForm("#form4", 4);
  getDataForm("#resultForm");
  

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
//   window.addEventListener('load', () => {
//     initModals();
//   });
});
