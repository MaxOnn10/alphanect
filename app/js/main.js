let f1 = document.querySelector(".products__list-item--1");
let f2 = document.querySelector(".products__list-item--2");
let f3 = document.querySelector(".products__list-item--3");
let f4 = document.querySelector(".products__list-item--4");
let f5 = document.querySelector(".products__list-item--5");
let f6 = document.querySelector(".products__list-item--6");
let img = document.querySelector(".products__decor-img");
let itemsContainer = document.querySelector(".products__list");
function imgSwap() {

}
// f1.addEventListener('click', function(){
//     img.src = '../images/products-decor.jpg';
// });
itemsContainer.addEventListener('click', function(e){
    const items = document.querySelectorAll('.products__item-text')
	const target = e.target
  Array.from(items).forEach(item => {
  	item.classList.remove('active')
  })
  target.classList.add('active');
})

// f2.addEventListener('click', function () {
//     img.src = '../images/main-pictures2.png';
// });
