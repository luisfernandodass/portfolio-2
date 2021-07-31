function initTabNav() {
    const tabMenu = document.querySelectorAll(".js-tabmenu li");
    const tabContent = document.querySelectorAll(".js-tabcontent section");
    // tabContent[0].classList.add('ativo'); // primeiro item ativo (já fiz isso via DOM)
  
    // Sem a verificação abaixo causa um erro no console caso exista outra página no projeto
    if (tabMenu.length && tabContent.length) {
      // Faz um loop por cada section
      function activeTab(index) {
        tabContent.forEach((section) => {
          section.classList.remove("ativo");
        });
        tabContent[index].classList.add("ativo");
      }
  
      // Faz um loop por cada li
      tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener("mouseenter", () => {
          activeTab(index);
        });
      });
    }
  }
  
  initTabNav();