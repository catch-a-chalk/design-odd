export const initLine = () => {
  // const [red, green, blue] = [69, 111, 225]
  // const line = document.querySelector('#line')

  // window.addEventListener('scroll', () => {
  //   const y = 1 + (window.scrollY || window.pageYOffset) / 150
  //   const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
  //   line.style.background = `rgb(${r}, ${g}, ${b})`
  // })

  // var navMain = document.querySelector('.toggleClass');
  // var navToggle = document.querySelector('.toggleClass--active');
  // navToggle.addEventListener('scroll', function() {
  //   const y = 1 + (window.scrollY || window.pageYOffset) / 150
  //   const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
  //   line.style.background = `rgb(${r}, ${g}, ${b})`

  //   if (navMain.classList.contains('main-nav--closed')) {
  //     navMain.classList.remove('main-nav--closed');
  //     navMain.classList.add('main-nav--opened');
  //   } else {
  //     navMain.classList.add('main-nav--closed');
  //     navMain.classList.remove('main-nav--opened');
  //   }
  // });

  // Проверяем наличие CSS-свойства
  // var obj1 = document.getElementById('line');

  // if (getComputedStyle(obj1).position == 'sticky') {
  //   console.log('Нашел!');
  // }

  //Записываем, сколько проскроллено по вертикали
  let scrollpos = window.scrollY

  const toggleClass = document.querySelector(".form__stages-toggle")

  //Сколько пикселей нужно проскролить, чтобы добавить класс. Можете изменить значение
  const scrollChange = 450

  //Функция, которая будет добавлять класс
  const add_class_on_scroll = () => toggleClass.classList.add("form__stages-toggle--active")

  //Отслеживаем событие "скролл"
  window.addEventListener('scroll', function() { 
    scrollpos = window.scrollY;

    //Если прокрутили больше, чем мы указали в переменной scrollChange, то выполняется функция добавления класса
    if (scrollpos >= scrollChange) { add_class_on_scroll() }
})
}