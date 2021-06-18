var menuHamburger = document.querySelector('.menuHamburger');
var menu = document.querySelector('.menu');

function menuToggle(){

 // 
 // remove menu
 menuHamburger.parentNode.removeChild(menuHamburger) 
 menu.style.display = "block";
 // menuX.innerHTML = '<i class="fas fa-times menu"></i>';
 // put the hamburger menu
  
}

menuHamburger.addEventListener('click', menuToggle);