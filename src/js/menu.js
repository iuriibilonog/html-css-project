(() => {
    const refs = {
      openMenuBtn: document.querySelector('[data-menu-open]'),
      closeMenuBtn: document.querySelector('[data-menu-close]'),
      closeMenuBody: document.querySelector('.mobile-backdrop'),
      menu: document.querySelector('[data-menu]'),
    };
    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBody.addEventListener('click', function (e) {
      if (e.target == document.querySelector('.mobile-backdrop')) {
        toggleMenu();
      }
    });
    function toggleMenu() {
      refs.menu.classList.toggle('is-hidden');
    }
  })();

