const menuBtn = document.querySelector('.navigation__btn');
const navList = document.querySelector('.navigation__list'); 
// const AOS = require('aos');

AOS.init();

menuBtn.addEventListener('click', (e) => {
  navList.classList.toggle('navigation__list--active');
})