function initAccordion() {   
    const accordinList = document.querySelectorAll('.js-accordion dt');
    accordinList[0].classList.add('ativo'); 
    accordinList[0].nextElementSibling.classList.add('ativo');
    
    function activeAccordinList() {
        this.classList.toggle('ativo');
        this.nextElementSibling.classList.toggle('ativo');
    }

    accordinList.forEach(item => {
        item.addEventListener('click', activeAccordinList)
    })
}

initAccordion()