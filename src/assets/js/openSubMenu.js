const openSubMenu = () => {
  const icon = document.getElementById('openSubMenu');
  const menu = document.querySelector('.subMenuProfile');

  function toggleMenu() {
    menu.classList.toggle('active');
  }

  icon.addEventListener('click', toggleMenu);
};

openSubMenu();
