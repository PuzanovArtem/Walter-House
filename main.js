import { contactFormValidator } from '/src/js/libs/validator'
import { setupModals } from '/src/js/modules/popup'

document.addEventListener('DOMContentLoaded', function () {
  setupModals()
  contactFormValidator()
})
