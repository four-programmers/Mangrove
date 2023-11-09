const toggleBtn = document.querySelectorAll(".toggle-title");
const toggleTxt = document.querySelectorAll(".faq-title");

toggleBtn.forEach((e) => {
  e.addEventListener("click", (evt) => {
    evt.preventDefault();
    const target = evt.target;
    toggleBtn.forEach((btn) => btn.classList.remove("active"));
    target.parentNode.classList.toggle("active");
  });
});

var swiper = new Swiper(".swiper-gallery", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mini-gallery", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
