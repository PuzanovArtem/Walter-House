import { contactFormValidator } from '/src/js/libs/validator'
// import { initScrollify } from '/src/js/libs/scrollifyModule'
import { initFullPage } from '/src/js/modules/fullpageModule'
import { setupModals } from '/src/js/modules/popup'

document.addEventListener('DOMContentLoaded', function () {
  setupModals()
  contactFormValidator()
  // initScrollify()
  initFullPage()
})
