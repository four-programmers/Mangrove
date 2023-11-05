const post1 = document.querySelector(".post1");
const post2 = document.querySelector(".post2");
const post3 = document.querySelector(".post3");
const post4 = document.querySelector(".post4");
const post5 = document.querySelector(".post5");
const post6 = document.querySelector(".post6");
const post7 = document.querySelector(".post7");
const postAll = document.querySelectorAll(".post");
const postItvw1 = document.querySelector(".post-interview1");
const postItvw2 = document.querySelector(".post-interview2");
const postItvw3 = document.querySelector(".post-interview3");
const postItvw4 = document.querySelector(".post-interview4");
const postItvw5 = document.querySelector(".post-interview5");
const postItvw6 = document.querySelector(".post-interview6");
const postItvw7 = document.querySelector(".post-interview7");
const jnMenu = document.querySelector('.journal-menu-wrapper')

post1.addEventListener("click", () => {
  postItvw1.style.display = "block";
  jnMenu.style.display ='none';
  postAll.forEach((evt) => evt.classList.add("active"));

});
post2.addEventListener("click", () => {
  postItvw2.style.display = "block";
  jnMenu.style.display ='none';
  postAll.forEach((evt) => evt.classList.add("active"));

});
post3.addEventListener("click", () => {
  postItvw3.style.display = "block";
  jnMenu.style.display ='none';
  postAll.forEach((evt) => evt.classList.add("active"));

});
post4.addEventListener("click", () => {
  postItvw4.style.display = "block";
  jnMenu.style.display ='none';
  postAll.forEach((evt) => evt.classList.add("active"));

});
post5.addEventListener("click", () => {
  postItvw5.style.display = "block";
  jnMenu.style.display ='none';
  postAll.forEach((evt) => evt.classList.add("active"));

});
post6.addEventListener("click", () => {
  postItvw6.style.display = "block";
  jnMenu.style.display ='none';
  postAll.forEach((evt) => evt.classList.add("active"));

});
post7.addEventListener("click", () => {
  postItvw7.style.display = "block";
  jnMenu.style.display ='none';
  postAll.forEach((evt) => evt.classList.add("active"));

});
