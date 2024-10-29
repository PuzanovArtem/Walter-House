// export function setupModals() {
//   const modalButtons = document.querySelectorAll('.openModalBtn')
//   const closeButtons = document.querySelectorAll('.close')
//   const links = document.querySelectorAll('.point')

//   function openModal(modal) {
//     if (modal) {
//       modal.style.display = 'block'
//       document.body.classList.add('modal-open')
//       $.scrollify.disable()
//       links.forEach(link => {
//         link.classList.add('disabled')
//       })
//     }
//   }

//   function closeModal(modal) {
//     if (modal) {
//       modal.style.display = 'none'
//       document.body.classList.remove('modal-open')
//       $.scrollify.enable()
//       links.forEach(link => {
//         link.classList.remove('disabled')
//       })
//     }
//   }

//   window.addEventListener('click', event => {
//     if (event.target.classList.contains('main-popup')) {
//       closeModal(event.target)
//     }
//   })

//   document.addEventListener('keydown', event => {
//     if (event.key === 'Escape') {
//       const openModals = document.querySelectorAll(".main-popup[style='display: block;']")
//       openModals.forEach(openModal => {
//         closeModal(openModal)
//       })
//     }
//   })

//   const burgerIcon = document.querySelector('.burger-icon')
//   const menuModal = document.getElementById('headerModal')

//   burgerIcon.addEventListener('click', () => {
//     if (menuModal.style.display !== 'block') {
//       openModal(menuModal)
//     } else {
//       closeModal(menuModal)
//     }
//   })

//   const headerRequest = document.querySelector('.header__request')
//   const callModal = document.getElementById('orderCall')

//   headerRequest.addEventListener('click', () => {
//     if (callModal.style.display !== 'block') {
//       openModal(callModal)
//     } else {
//       closeModal(callModal)
//     }
//   })

//   const headerPhoneBtn = document.querySelector('.header__phone')

//   headerPhoneBtn.addEventListener('click', () => {
//     if (callModal.style.display !== 'block') {
//       openModal(callModal)
//     } else {
//       closeModal(callModal)
//     }
//   })

//   modalButtons.forEach(button => {
//     button.addEventListener('click', () => {
//       const targetModalId = button.getAttribute('data-modal-target')
//       const targetModal = document.getElementById(targetModalId)
//       openModal(targetModal)
//     })
//   })

//   closeButtons.forEach(closeButton => {
//     closeButton.addEventListener('click', () => {
//       const modal = closeButton.closest('.main-popup')
//       closeModal(modal)
//     })
//   })
// }


export function setupModals() {
  const modalButtons = document.querySelectorAll('.openModalBtn');
  const closeButtons = document.querySelectorAll('.close');
  const links = document.querySelectorAll('.point');

  function openModal(modal) {
    if (modal) {
      modal.style.display = 'block';
      document.body.classList.add('modal-open');
      $.scrollify.disable();
      links.forEach(link => {
        link.classList.add('disabled');
      });
    }
  }

  function closeModal(modal) {
    if (modal) {
      modal.style.display = 'none';
      document.body.classList.remove('modal-open');
      $.scrollify.enable();
      links.forEach(link => {
        link.classList.remove('disabled');
      });
    }
  }

  modalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetModalId = button.getAttribute('data-modal-target');
      const targetModal = document.getElementById(targetModalId);
      const targetSlide = button.getAttribute('data-slide');
      const currentSlide = fullpage_api.getActiveSection().index + 1;

      // Переход к нужному слайду, если он не активен
      if (parseInt(targetSlide) !== currentSlide) {
        fullpage_api.moveTo(targetSlide);
        setTimeout(() => openModal(targetModal), 500); // Открываем модал через 500ms после перехода
      } else {
        openModal(targetModal);
      }
    });
  });

  window.addEventListener('click', event => {
    if (event.target.classList.contains('main-popup')) {
      closeModal(event.target);
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      const openModals = document.querySelectorAll(".main-popup[style='display: block;']");
      openModals.forEach(openModal => {
        closeModal(openModal);
      });
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

  closeButtons.forEach(closeButton => {
    closeButton.addEventListener('click', () => {
      const modal = closeButton.closest('.main-popup');
      closeModal(modal);
    });
  });
}
