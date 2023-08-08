export const initPrice = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const formReadyList = document.querySelector('.form__ready-list');
    
    if (formReadyList) {
      const label = document.createElement('label');
      label.classList.contains('form__label-ready-s-package');
      
      const p = document.querySelector('.form__ready-list p');
      p.textContent = 'FFF';
      
      label.appendChild(p);
      formReadyList.appendChild(label);
    }
  });
  
}