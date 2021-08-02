export default function initScrollSmooth() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth' 
    })
  }

  linksInternos.forEach(item => {
    item.addEventListener('click', scrollToSection);
  })
}
initScrollSmooth();