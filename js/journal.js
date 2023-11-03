const post1 = document.querySelector(".post1");
const postAll = document.querySelectorAll(".post");
const postItvw1 = document.querySelector(".post-interview1");
console.log(`${postAll}`);
post1.addEventListener("click", () => {
  postItvw1.style.display = "block";
  postAll.forEach((evt) => evt.classList.add("active"));
});
