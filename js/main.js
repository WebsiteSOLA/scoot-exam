const burger = document.querySelector(".header__burger");

burger.addEventListener("click", function() {
  burger.classList.toggle("header__burger--opened");
})