let f1 = document.querySelector(".products__list-item--1");
let f2 = document.querySelector(".products__list-item--2");
let f3 = document.querySelector(".products__list-item--3");
let f4 = document.querySelector(".products__list-item--4");
let f5 = document.querySelector(".products__list-item--5");
let f6 = document.querySelector(".products__list-item--6");
let img = document.querySelector(".products__decor-img");
let itemsContainer = document.querySelector(".products__list");
let burger = document.querySelector(".burger");
let menuItem = document.querySelector(".header__menu-item");
let body = document.body;
function imgSwap() {

}
// f1.addEventListener('click', function(){
//     img.src = '../images/products-decor.jpg';
// });
itemsContainer.addEventListener('click', function (e) {
  const items = document.querySelectorAll('.products__item-text')
  const target = e.target
  Array.from(items).forEach(item => {
    item.classList.remove('active')
  })
  target.classList.add('active');
});

burger.addEventListener('click', function () {
  burger.classList.toggle("burger--active");
  document.querySelector(".header__menu").classList.toggle("active"),
  document.querySelector(".header__menu-list").classList.toggle("active"),
  document.querySelector(".header__menu-item").classList.toggle("active"),
  body.classList.toggle("disable-scroll");
  
});

menuItem.addEventListener("click", function(){
  document.querySelector(".header__menu").classList.remove("active"),
  document.querySelector(".header__menu-list").classList.remove("active"),
  document.querySelector(".header__menu-item").classList.remove("active"),
  body.classList.remove("disable-scroll");
});



// $(document).ready(function () {
//   $(".burger").click(function (e) {
//     $(".burger").toggleClass("burger--active"),
//       $(".header__menu,.header__menu-list,.header__menu-item,.home__language").toggleClass("active"),
//       $("body").toggleClass("disable-scroll")
//   }),
//     $(".menu__list-item").click(function (e) {
//       $(".header__menu,.header__menu-list,.header__menu-item,.home__language").removeClass("active"),
//         $(".burger--active").removeClass("burger--active"),
//         $("body").removeClass("disable-scroll")
//     })
// });


// f2.addEventListener('click', function () {
//     img.src = '../images/main-pictures2.png';
// });
