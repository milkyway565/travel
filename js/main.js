
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


$(document).ready(function () {
  $('.destinations__slider').slick({
    arrows: false,
    dots: true,
    centerMode: true,
    centerPadding: '160px',
    slidesToShow: 1,
    variableWidth: true,
    
  });
});


