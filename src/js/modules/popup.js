export function setupModals() {
  const modalButtons = document.querySelectorAll('.openModalBtn');
  const closeButtons = document.querySelectorAll('.close');
  const backToHomeButton = document.querySelector('.about-popup__form-btn');
  const links = document.querySelectorAll('.point');

  function openModal(modal) {
    if (modal) {
      modal.style.display = 'block';
      document.body.classList.add('modal-open');
      $.scrollify.disable();
      links.forEach(link => link.classList.add('disabled'));
    }
  }

  function closeModal(modal) {
    if (modal) {
      modal.style.display = 'none';
      document.body.classList.remove('modal-open');
      $.scrollify.enable();
      links.forEach(link => link.classList.remove('disabled'));
    }
  }

  window.addEventListener('click', event => {
    if (event.target.classList.contains('main-popup')) {
      closeModal(event.target);
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      const openModals = document.querySelectorAll(".main-popup[style='display: block;']");
      openModals.forEach(openModal => closeModal(openModal));
    }
  });

  const burgerIcon = document.querySelector('.burger-icon');
  const menuModal = document.getElementById('headerModal');

  burgerIcon.addEventListener('click', () => {
    if (menuModal.style.display !== 'block') {
      openModal(menuModal);
    } else {
      closeModal(menuModal);
    }
  });

  const headerRequest = document.querySelector('.header__request');
  const callModal = document.getElementById('orderCall');

  headerRequest.addEventListener('click', () => {
    if (callModal.style.display !== 'block') {
      openModal(callModal);
    } else {
      closeModal(callModal);
    }
  });

  const headerPhoneBtn = document.querySelector('.header__phone');

  headerPhoneBtn.addEventListener('click', () => {
    if (callModal.style.display !== 'block') {
      openModal(callModal);
    } else {
      closeModal(callModal);
    }
  });

  modalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetModalId = button.getAttribute('data-modal-target');
      const targetModal = document.getElementById(targetModalId);
      openModal(targetModal);
    });
  });

  closeButtons.forEach(closeButton => {
    closeButton.addEventListener('click', () => {
      const modal = closeButton.closest('.main-popup') || closeButton.closest('.gallery-modal');
      if (modal) {
        console.log('Closing modal:', modal);
        closeModal(modal);
      } else {
        console.error('No modal found to close for:', closeButton);
      }
    });
  });

  if (backToHomeButton) {
    backToHomeButton.addEventListener('click', () => {
      console.error('Back to home button clicked');
      const modal = backToHomeButton.closest('.main-popup');
      if (modal) {
        closeModal(modal);
        console.error('Modal closed');
      } else {
        console.error('No modal found to close');
      }
    });
  }
}
