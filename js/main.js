var elHeader = document.querySelector(".header");
var elBtn = document.querySelector(".header__btn");


elBtn.addEventListener("click", function () {
    elHeader.classList.toggle("header--open");
});