export default function changeColors() {
  const btnChangeColors = document.querySelector(".fa-toggle-off");
  const bodyBlack = document.querySelector(".body-black");
  const myNameWhite = document.querySelector(".my-name-white");
  const linkBlack = document.querySelectorAll(".link-black");
  const sectionWhite = document.querySelectorAll(".section-white");
  const projectsDescriptionWhite = document.querySelector(".projects-description-white");
  const dt = document.querySelectorAll("dt")
  const linkSocialMediaBlack = document.querySelectorAll(".link-social-media-black")
  const byWhite = document.querySelector(".by-white")

    btnChangeColors.classList.toggle("fa-toggle-on");
    bodyBlack.classList.toggle("body-white");
    myNameWhite.classList.toggle("my-name-black");
    linkBlack.forEach((link) => link.classList.toggle("link-white"));
    sectionWhite.forEach((section) => section.classList.toggle("section-black"));
    projectsDescriptionWhite.classList.toggle("projects-description-black");
    dt.forEach((dt) => dt.classList.toggle('dt-white'));
    linkSocialMediaBlack.forEach((linkSocial) => linkSocial.classList.toggle("link-social-media-white"))
    byWhite.classList.toggle("by-black")
  
    btnChangeColors.addEventListener("click", changeColors);
}

changeColors();