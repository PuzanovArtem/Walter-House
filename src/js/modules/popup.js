document.addEventListener('DOMContentLoaded', function () {
  const modals = document.querySelectorAll('.main-popUp')
  const modalButtons = document.querySelectorAll('.openModalBtn')
  const closeButtons = document.querySelectorAll('.close')
  const orderModal = document.getElementById('orderCall')
  const headerPhone = document.querySelector('.header__phone')
  const links = document.querySelectorAll('.point')

  // Function to open a modal window
  function openModal(modal) {
    if (modal) {
      modal.style.display = 'block'
      document.body.classList.add('modal-open')
      $.scrollify.disable()
      links.forEach(link => {
        link.classList.add('disabled')
      })
    }
  }

  // Function to close a modal window
  function closeModal(modal) {
    if (modal) {
      modal.style.display = 'none'
      document.body.classList.remove('modal-open')
      $.scrollify.enable()
      links.forEach(link => {
        link.classList.remove('disabled')
      })
    }
  }

  // Add click event handler to close the modal window when clicking outside of it
  window.addEventListener('click', event => {
    if (event.target.classList.contains('main-popUp')) {
      closeModal(event.target)
    }
  })

  // Add keydown event handler for the Escape key to close the modal window
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      const openModals = document.querySelectorAll(".main-popUp[style='display: block;']")
      openModals.forEach(openModal => {
        closeModal(openModal)
      })
    }
  })

  // Add click event handler for the burger icon
  const burgerIcon = document.querySelector('.burger-icon')
  const menuModal = document.getElementById('headerModal')

  burgerIcon.addEventListener('click', () => {
    if (menuModal.style.display !== 'block') {
      openModal(menuModal)
    } else {
      closeModal(menuModal)
    }
  })

  const headerRequest = document.querySelector('.header__request')
  const callModal = document.getElementById('orderCall')

  headerRequest.addEventListener('click', () => {
    if (callModal.style.display !== 'block') {
      openModal(callModal)
    } else {
      closeModal(callModal)
    }
  })

  const headerPhoneBtn = document.querySelector('.header__phone')

  headerPhoneBtn.addEventListener('click', () => {
    if (callModal.style.display !== 'block') {
      openModal(callModal)
    } else {
      closeModal(callModal)
    }
  })

  // Additional event handlers for existing modal windows (if needed)
  modalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetModalId = button.getAttribute('data-modal-target')
      const targetModal = document.getElementById(targetModalId)
      openModal(targetModal)
    })
  })

  closeButtons.forEach(closeButton => {
    closeButton.addEventListener('click', () => {
      const modal = closeButton.closest('.main-popUp')
      closeModal(modal)
    })
  })
})
