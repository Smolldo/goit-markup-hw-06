(() => {
    const refs = {
      openModalBtn: document.querySelector('.btn'),
      closeModalBtn: document.querySelector('.close_btn'),
      modal: document.querySelector('.backdrop'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();