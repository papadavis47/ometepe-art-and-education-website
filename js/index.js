const burgerIcon = document.querySelector("#burger");
const navLinks = document.querySelector("#nav-links");

burgerIcon.addEventListener("click", () => {
  navLinks.classList.toggle("is-active");
});
