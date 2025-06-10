// ajoute d'une classe navbarDark au moment du scroll de la navbar
const header = document.querySelector('.navbar');

window.onscroll = function () {
  var top = window.scrollY;
  if (top >= 100) {
    header.classList.add('navbarDark');
  } else {
    header.classList.remove('navbarDark');
  }
};
