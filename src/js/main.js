
import { initProjects } from './modules/init-projects';
import { initLine } from './modules/init-line';
import { hambHandler } from './modules/init-nav';
import { initLink } from './modules/init-link';
import { initTooltip } from './modules/init-tooltip';
// import { initModal } from './modules/init-modal'; ЛОМАЕТ ВООБЩЕ ВСЕ К ХУЯМ
import { setDataForm, getDataForm } from './modules/testing';
// import { popupHandler, popupCall } from './modules/popup'; // ЛОМАЕТ initLine
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
  // initModal();
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
