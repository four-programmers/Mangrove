// index slide img
const slideImg = document.querySelectorAll('.slide-wrapper .slide-img');

let idx = 0;
addEventListener('click', () => {
  slideImg[idx].classList.remove('swipe');
  idx++;
  if (idx >= slideItems.length) idx = 0;
  slideImg[idx].classList.add('swipe');
});

setInterval(() => {
  .click();
}, 2000);