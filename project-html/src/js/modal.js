
//HEADER MODAL WINDOW
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-header-1-open]'),
    closeModalBtn: document.querySelector('[data-modal-header-1-close]'),
    closeModalBody: document.querySelector('.backdrop'),
    modal: document.querySelector('[data-modal-header-1]'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBody.addEventListener('click', function (e) {
    if (e.target == document.querySelector('.backdrop')) {
      toggleModal();
    }
  });
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-header-2-open]'),
    closeModalBtn: document.querySelector('[data-modal-header-2-close]'),
    closeModalBody: document.querySelector('.backdrop-header-2'),
    modal: document.querySelector('[data-modal-header-2]'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBody.addEventListener('click', function (e) {
    if (e.target == document.querySelector('.backdrop-header-2')) {
      toggleModal();
    }
  });
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

// HERO MODAL WINDOW

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-hero-open]'),
    closeModalBtn: document.querySelector('[data-modal-hero-close]'),
    closeModalBody: document.querySelector('.backdrop-hero'),
    modal: document.querySelector('[data-modal-hero]'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBody.addEventListener('click', function (e) {
    if (e.target == document.querySelector('.backdrop-hero')) {
      toggleModal();
    }
  });
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
}
)();

// PRODUCTS MODAL WINDOW
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-product-1-open]'),
    closeModalBtn: document.querySelector('[data-modal-product-1-close]'),
    closeModalBody: document.querySelector('.backdrop-product-1'),
    modal: document.querySelector('[data-modal-product-1]'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBody.addEventListener('click', function (e) {
    if (e.target == document.querySelector('.backdrop-product-1')) {
      toggleModal();
    }
  });
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
}
)();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-product-2-open]'),
    closeModalBtn: document.querySelector('[data-modal-product-2-close]'),
    closeModalBody: document.querySelector('.backdrop-product-2'),
    modal: document.querySelector('[data-modal-product-2]'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBody.addEventListener('click', function (e) {
    if (e.target == document.querySelector('.backdrop-product-2')) {
      toggleModal();
    }
  });
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
}
)();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-product-3-open]'),
    closeModalBtn: document.querySelector('[data-modal-product-3-close]'),
    closeModalBody: document.querySelector('.backdrop-product-3'),
    modal: document.querySelector('[data-modal-product-3]'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBody.addEventListener('click', function (e) {
    if (e.target == document.querySelector('.backdrop-product-3')) {
      toggleModal();
    }
  });
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
}
)();




//ABOUT MODAL WINDOW



(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-about-open]'),
    closeModalBtn: document.querySelector('[data-modal-about-close]'),
    closeModalBody: document.querySelector('.backdrop-about'),
    modal: document.querySelector('[data-modal-about]'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBody.addEventListener('click', function (e) {
    if (e.target == document.querySelector('.backdrop-about')) {
      toggleModal();
    }
  });
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
}

  
)();

// CONTACTS MODAL WINDOWS

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-locations-open]'),
    closeModalBtn: document.querySelector('[data-modal-locations-close]'),
    closeModalBody: document.querySelector('.backdrop-contacts-locations'),
    modal: document.querySelector('[data-modal-locations]'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBody.addEventListener('click', function (e) {
    if (e.target == document.querySelector('.backdrop-contacts-locations')) {
      toggleModal();
    }
  });
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
}
)();


(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-franchise-open]'),
    closeModalBtn: document.querySelector('[data-modal-franchise-close]'),
    closeModalBody: document.querySelector('.backdrop-contacts-franchise'),
    modal: document.querySelector('[data-modal-franchise]'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBody.addEventListener('click', function (e) {
    if (e.target == document.querySelector('.backdrop-contacts-franchise')) {
      toggleModal();
    }
  });
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
}
)();



// MODAL TEAM

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-team-open]'),
    closeModalBtn: document.querySelector('[data-modal-team-close]'),
    closeModalBody: document.querySelector('.backdrop-team'),
    modal: document.querySelector('[data-modal-team]'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBody.addEventListener('click', function (e) {
    if (e.target == document.querySelector('.backdrop-team')) {
      toggleModal();
    }
  });
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden-team');
  }
}
)();