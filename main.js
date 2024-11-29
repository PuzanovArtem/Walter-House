import { addServicesToList } from '/src/js/pages/slide-three/services'
import { gallerySlider } from '/src/js/libs/swiper'
import { initClickHandlers } from '/src/js/pages/slide-four/click-handlers'
import { initFullPage } from '/src/js/modules/fullpageModule'
import { initHoverHandlers } from '/src/js/pages/slide-four/hover-handlers'
import { initializeSixthScreenInteractions } from '/src/js/pages/slide-six/slide-six'
import { orderCallValidator } from '/src/js/libs/validator'
import { setupFifthScreenInteractions } from '/src/js/pages/slide-fifth/slide-fifth'
import { setupModals } from '/src/js/modules/popup'

document.addEventListener('DOMContentLoaded', function () {
  setupModals()
  orderCallValidator()
  // contactFormValidator()
  initFullPage()
  addServicesToList('service-list')
  addServicesToList('vip-service-list')
  addServicesToList('extra-service-list')
  gallerySlider()
  initHoverHandlers()
  initClickHandlers()
  setupFifthScreenInteractions()
  initializeSixthScreenInteractions()
})

