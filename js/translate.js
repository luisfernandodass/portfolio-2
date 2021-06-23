const buttonTranslate = document.querySelector(".buttonTranslate");
const textToTranslate = document.querySelector(".text-language-one").value;
const textTranslated = document.querySelector(".text-language-two");

function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}

buttonTranslate.addEventListener("click", function(){
  googleTranslateElementInit();
  console.log(googleTranslateElementInit());
  console.log(textToTranslate);

  textTranslated.textContent = textToTranslate;
})

