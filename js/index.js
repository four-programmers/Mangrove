// locations slide
const mainSlide = new Swiper('.main-slide', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// locations-menu active
const locationsMenuList = document.querySelectorAll('.swiper-pagination-bullet');

locationsMenuList.forEach((list) => {
  locationsMenuList.addEventListener("click", (list) => {
    const target = e.target;
    list.classList.remove("active");
    e.target.parentNode.classList.add("active");
  });
});

// const subSlide = new Swiper('.sub-slide', {
//   loop: true,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   slidesPerView: 1,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
// });