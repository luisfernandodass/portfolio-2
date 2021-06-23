const buttonTranslate = document.getElementById("google_translate_element");
const textToTranslate = document.querySelector(".text-language-one").value;
const textTranslated = document.querySelector(".text-language-two");

function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'pt', 
    includedLanguages: 'en', // 'ar,en,es,jv,ko,pa,pt,ru',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    autoDisplay: false
    },  'google_translate_element');
}

buttonTranslate.addEventListener("click", function(){
  // googleTranslateElementInit();
  // console.log(googleTranslateElementInit());
 
  console.log(textTranslated)
  return textTranslated.textContent = textToTranslate;
})