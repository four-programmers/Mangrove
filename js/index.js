// locations slide
const mainSlide = new Swiper('.main-slide', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 1,
});

// locations-menu active
const locationsMenuList = document.querySelectorAll('.locations-menu-list');

locationsMenuList.forEach((list) => {
  list.addEventListener("click", (e) => {
    const target = e.target;
    e.forEach((li) => {
      li.classList.remove("active");
      target.parentNode.classList.add("active")
    });
  });
});