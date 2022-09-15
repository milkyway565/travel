
// (function () {
//   const burgerItem = document.querySelector('.burger');
//   const menu = document.querySelector('.header__nav');
//   const menuCloseItem = document.querySelector('.header__nav-close');
//   burgerItem.addEventListener('click', () => {
//     menu.classList.add('header__nav_active');
//   });
//   menuCloseItem.addEventListener('click', () =>{
//     menu.classList.remove('header__nav_active')
//   })
// }());


(function () {
  const burgerItem = document.querySelector('.burger');
  const menu = document.querySelector('.header__nav');
  const menuCloseItem = document.querySelector('.header__nav-close');
 
  burgerItem.addEventListener('click', () => {
    menu.classList.add('header__nav_active', 'overlay');
  });
  menuCloseItem.addEventListener('click', () => {
    menu.classList.remove('header__nav_active', 'overlay');
  });
  
 
}());


// (function () {
//   const popUp = document.querySelector('.header__button');
//   const m
// })



