const toggleBtn = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

let menuOpen = false;

toggleBtn.addEventListener('click', () => {
  menuOpen = !menuOpen;
  if (menuOpen) {
    mobileMenu.classList.add('menu-active');
    mobileMenu.classList.remove('menu-enter');
  } else {
    mobileMenu.classList.add('menu-enter');
    mobileMenu.classList.remove('menu-active');
  }
});