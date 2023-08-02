export const initLink = () => {
  var a = document.querySelectorAll('.menu li a');
    for (var i=a.length; i--;) {
      if (a[i].href === window.location.pathname || a[i].href === window.location.href) a[i].className += ' active';
    }
};
