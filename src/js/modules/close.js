// export function initializeModals() {
//   document.addEventListener('DOMContentLoaded', function () {
//     const openModalButtons = document.querySelectorAll('.openModalBtnSix')
//     const modals = document.querySelectorAll('.popUp-tab-sixth-screen__modal')

//     openModalButtons.forEach(button => {
//       button.addEventListener('click', function () {
//         const modalId = button.getAttribute('data-modal-target')
//         const modal = document.getElementById(modalId)

//         if (modal) {
//           modal.classList.add('active')
//         }
//       })
//     })

//     modals.forEach(modal => {
//       const closeModalButton = modal.querySelector('.e-service__close')

//       if (closeModalButton) {
//         closeModalButton.addEventListener('click', function () {
//           modal.classList.remove('active')
//         })
//       }
//     })
//   })
// }

// document.addEventListener('DOMContentLoaded', function () {
//   // Select the modal and close button elements
//   const modal = document.getElementById('extraServices')
//   const closeButton = document.querySelector('.e-service__close')

//   // Add an event listener to the close button
//   closeButton.addEventListener('click', function () {
//     // Hide the modal by adding a 'hidden' class or setting display to 'none'
//     modal.style.display = 'none'
//   })
// })
