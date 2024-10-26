// import { contactFormValidator, initFullPage } from '/src/js/modules/fullpageModule'
import { initFullPage } from '/src/js/modules/fullpageModule'
import { orderCallValidator } from '/src/js/libs/validator'
import { setupModals } from '/src/js/modules/popup'

document.addEventListener('DOMContentLoaded', function () {
  setupModals()
  orderCallValidator()
  // contactFormValidator()
  initFullPage()
})
