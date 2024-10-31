import fullpage from 'fullpage.js'
import 'fullpage.js/dist/fullpage.css'

export function initFullPage() {
  let isPopupOpen = false 

  function toggleFullPageScrolling() {
    if (window.innerWidth <= 920 || isPopupOpen) {
      fullpage_api.setAutoScrolling(false)
      fullpage_api.setFitToSection(false)
      fullpage_api.setAllowScrolling(true)
    } else {
      fullpage_api.setAutoScrolling(true)
      fullpage_api.setFitToSection(true)
      fullpage_api.setAllowScrolling(true)
    }
  }

  new fullpage('#fullpage', {
    autoScrolling: true,
    anchors: ['screenShot1', 'screenShot2', 'screenShot3', 'screenShot4', 'screenShot5', 'screenShot6'],
    navigation: false,
    controlArrows: false,
    afterLoad: function (origin, destination, direction) {
      document.querySelectorAll('.pagination .point').forEach(point => {
        point.classList.remove('point-active')
      })
      document.querySelector(`.pagination a[href="#${destination.anchor}"]`).classList.add('point-active')
    },
  })

  toggleFullPageScrolling()

  window.addEventListener('resize', toggleFullPageScrolling)

  document.addEventListener('popupOpen', () => {
    isPopupOpen = true
    toggleFullPageScrolling()
  })

  document.addEventListener('popupClose', () => {
    isPopupOpen = false
    toggleFullPageScrolling()
  })
}
