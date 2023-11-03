const header = document.querySelector('header');
// menu
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu-wrapper');
const menuCloseBtn =document.querySelector('.menu-close-btn');
// book
const book =document.querySelector('.book-wrapper');
const bookBtn =document.querySelector('.book-btn');
const bookCloseBtn =document.querySelector('.book-close-btn');


addEventListener('scroll', ()=> {
  header.classList.toggle('scroll', scrollY > 100);
})

// menu
menuBtn.addEventListener('click', ()=> {
  menu.classList.add('active');
})

menuCloseBtn.addEventListener('click', ()=> {
  menu.classList.remove('active');
})
// book
bookBtn.addEventListener('click', ()=> {
  book.classList.add('active');
})

bookCloseBtn.addEventListener('click', ()=> {
  book.classList.remove('active');
})