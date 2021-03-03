const burgerIcon = document.querySelector("#burger");
const navLinks = document.querySelector("#nav-links");

burgerIcon.addEventListener("click", () => {
  navLinks.classList.toggle("is-active");
});

// Modal

const signupButton = document.querySelector("#signup");
const modalBg = document.querySelector("#modal-bg-1");
const modal = document.querySelector("#modal-1");

signupButton.addEventListener("click", (e) => {
  modal.classList.add("is-active");
});

modalBg.addEventListener("click", (e) => {
  modal.classList.remove("is-active");
});
