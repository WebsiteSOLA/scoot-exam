const burger = document.querySelector(".header__burger");
const nav = document.querySelector(".navbar");

burger.addEventListener("click", function() {
  burger.classList.toggle("header__burger--opened");
  nav.classList.toggle("navbar--opened");
})
const work = document.querySelector(".work");
const workDesc = document.querySelector(".question__item-desc");

work.addEventListener("click", function() {
  work.classList.toggle("work--opened");
  workDesc.classList.toggle("question__item-desc--opened");
})
const safe = document.querySelector(".safe");
const safeDesc = document.querySelector(".question__item-desc");

safe.addEventListener("click", function() {
  safe.classList.toggle("safe--opened");
  safeDesc.classList.toggle("question__item-desc--opened");
})

