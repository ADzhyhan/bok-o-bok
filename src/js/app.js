const menuBtn = document.querySelector('.navigation__btn');
const navList = document.querySelector('.navigation__list'); 

menuBtn.addEventListener('click', (e) => {
  navList.classList.toggle('navigation__list--active');
})