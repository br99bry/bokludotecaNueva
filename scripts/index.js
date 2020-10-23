const burgerMenu = document.getElementById('burgerMenu');
const menu = document.getElementById('menu');
const closeMenu = document.getElementById('closeMenu');
burgerMenu.addEventListener('click', () => {
  menu.classList.add('menu-is-active');

})

closeMenu.addEventListener('click', () => {
  menu.classList.remove('menu-is-active')
})