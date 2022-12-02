var elHeader = document.querySelector(".header");
var elBtn = document.querySelector(".header__btn");


elBtn.addEventListener("click", function () {
    elHeader.classList.toggle("header--open");
});


var karobka = document.querySelector(".modal");
var ochishuchunknopka = document.querySelector(".modal__open");
var elBtnClose = document.querySelector(".modal__close");


ochishuchunknopka.addEventListener("click", function () {
    karobka.classList.add("modal--open");
});

elBtnClose.addEventListener("click", function () {
    karobka.classList.remove("modal--open");
});