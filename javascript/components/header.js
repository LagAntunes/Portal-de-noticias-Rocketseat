let header = document.querySelector(".header");
let buttonHamburger = document.querySelector(".hamburger");

buttonHamburger.addEventListener("click", () => {
  header.classList.toggle("active-menu");
});
