import { addServicesToList } from '/src/js/pages/slide-three/services'
import { gallerySlider } from '/src/js/libs/swiper'
// import { contactFormValidator, initFullPage } from '/src/js/modules/fullpageModule'
import { initFullPage } from '/src/js/modules/fullpageModule'
import { initializeModal } from '/src/js/modules/close'
// import { initializeModals } from '/src/js/modules/close'
import { orderCallValidator } from '/src/js/libs/validator'
import { setupModals } from '/src/js/modules/popup'

document.addEventListener('DOMContentLoaded', function () {
  setupModals()
  orderCallValidator()
  // contactFormValidator()
  initFullPage()
  addServicesToList('service-list')
  addServicesToList('vip-service-list')
  addServicesToList('extra-service-list')
  // initializeModals()
  gallerySlider()
  initializeModal()
})
