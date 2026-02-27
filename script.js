const menu = document.querySelector('.menu-icon');
const nav = document.querySelector('.nav-links');

menu.addEventListener('click', () => {
  nav.classList.toggle("active");
});