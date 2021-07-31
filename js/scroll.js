
function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    // abaixo o método pega o (x) e o (y => topo do elemento referenciado) 
    // window.scrollTo(0, section.offsetTop) // x, y

    // forma alternativa com 'option' (um objeto é passado)
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth' // add scroll suave
    })
  }

  linksInternos.forEach(item => {
    item.addEventListener('click', scrollToSection);
  })
}

initScrollSuave();

function initAnimaScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  const windowMetade = window.innerHeight * 0.5;

  if (sections.length) {
    function animaScroll() {
      sections.forEach((item) => {
        const sectionTop = item.getBoundingClientRect().top;
        //console.log(sectionTop) // 10.6466
        //console.log(Math.floor(sectionTop)) // 10
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) {
          item.classList.add("ativo");
        }
      });
    }
    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}

initAnimaScroll()