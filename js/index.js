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
  on: {
    slideChange: function () {
      // 현재 활성 슬라이드를 가져오기
      var currentSlide = journalSlide.slides[journalSlide.activeIndex];
      
      // 현재 활성 슬라이드 내에서 <p> 요소를 모두 선택
      var swiperLists = currentSlide.querySelectorAll('.journal-slide');
      
      // 선택된 <p> 요소에 대한 작업 수행
      swiperLists.forEach(function (element) {
        element.style = '';
      });        
    },
  }, 
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});