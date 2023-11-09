// locations slide
const locationsSlide = new Swiper('.main-slide', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    390: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 2,
    },
  },
});

// journal slide
const journalSlide = new Swiper('.sub-slide', {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});