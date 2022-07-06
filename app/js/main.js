let itemsContainer = document.querySelector(".products__list-item");
let burger = document.querySelector(".burger");
let body = document.body;
let parent = document.querySelector('.products__list');
let menuListItem = parent.querySelectorAll('.products__list-item');
let icon = document.querySelector('.products__item-icon');

parent.addEventListener('click', (event) => {
  let target = event.target;

  if (target.classList.contains('products__list-item')) {
    for (let i = 0; i < menuListItem.length; i++) {
      menuListItem[i].classList.remove('active');
      icon.classList.remove('active');
      //изменение картинки по data-src
      const srcAttr = target.getAttribute('data-src');
      document.querySelector('.products__decor-img').src = `${srcAttr}`;
      document.querySelector('.products__decor-img--mob').src = `${srcAttr}`;
    }
    target.classList.add('active');
  }

});

//burger-menu
burger.addEventListener('click', function () {
  burger.classList.toggle("burger--active");
  document.querySelector(".header__menu").classList.toggle("active"),
  document.querySelector(".header__menu-list").classList.toggle("active"),
  document.querySelector(".header__menu-item").classList.toggle("active"),
  body.classList.toggle("disable-scroll");

});

document.querySelector('.header__menu-list').addEventListener("click", function () {
  document.querySelector(".header__menu").classList.remove("active"),
  document.querySelector(".header__menu-list").classList.remove("active"),
  document.querySelector(".header__menu-item").classList.remove("active"),
  body.classList.remove("disable-scroll");
});

