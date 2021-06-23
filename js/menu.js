const menuHamburger = document.querySelector('.menuHamburger');
const menuX = document.querySelector('.menuX');
let menu = document.querySelector('.menu');

function menuToggle(){
 menuHamburger.style.display = "none";
 menu.style.display = "block";
}

function menuClose(){
  menuHamburger.style.display = "block";
  menu.style.display = "none"
}

menuX.addEventListener('click', menuClose);
menuHamburger.addEventListener('click', menuToggle);