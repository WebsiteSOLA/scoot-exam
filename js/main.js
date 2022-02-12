const burger = document.querySelector(".header__burger");
const nav = document.querySelector(".navbar");

burger.addEventListener("click", function() {
  burger.classList.toggle("header__burger--opened");
  nav.classList.toggle("navbar--opened")
})
