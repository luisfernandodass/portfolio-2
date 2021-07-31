function initAccordion() {
    // JS NO FAQ
    const accordinList = document.querySelectorAll('.js-accordion dt');
    accordinList[0].classList.add('faq-ativo'); // primeiro item ativo (já fiz isso via DOM)
    accordinList[0].nextElementSibling.classList.add('faq-ativo'); // primeiro item ativo (já fiz isso via DOM)

    function activeAccordinList() {
        this.classList.toggle('faq-ativo');
        this.nextElementSibling.classList.toggle('faq-ativo');
        // item.nextElementSibling.classList.remove('faq-ativo');
    }

    accordinList.forEach(item => {
        item.addEventListener('click', activeAccordinList)
    })
}
initAccordion()