import fullpage from 'fullpage.js'

export function initFullPage() {
  new fullpage('#fullpage', {
    autoScrolling: true,
    anchors: ['screenShot1', 'screenShot2', 'screenShot3', 'screenShot4', 'screenShot5', 'screenShot6'],
    navigation: false,
    controlArrows: false,
    scrollHorizontally: true,
    afterLoad: function (origin, destination, direction) {
      document.querySelectorAll('.pagination .point').forEach(point => {
        point.classList.remove('point-active')
      })
      document.querySelector(`.pagination a[href="#${destination.anchor}"]`).classList.add('point-active')
    },
  })

  document.querySelectorAll('.pagination .point').forEach(point => {
    point.addEventListener('click', function (e) {
      e.preventDefault()
      const targetSection = this.getAttribute('href').replace('#', '')
      fullpage_api.moveTo(targetSection)
    })
  })
}
