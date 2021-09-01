const icon = document.querySelector('.menu-icon');
const menu = document.querySelector('.cadastrar');

function toggleMenu() {
  menu.classList.toggle('active');
}

icon.addEventListener('click', toggleMenu);
