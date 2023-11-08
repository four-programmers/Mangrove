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
