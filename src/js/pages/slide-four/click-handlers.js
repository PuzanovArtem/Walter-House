export function initClickHandlers() {
  const styleItems = document.querySelectorAll('.slide-four__style-item')

  styleItems.forEach(item => {
    item.addEventListener('click', function () {
      styleItems.forEach(element => {
        element.classList.remove('active')
      })

      item.classList.add('active')

      const text = item.querySelector('.slide-four__style-text').textContent

      showCircleForText(text)
    })
  })

  function showCircleForText(text) {
    const allCircles = document.querySelectorAll('.slide-four__circle-wrapper')
    const allNumber = document.querySelectorAll('.slide-four__total-number')

    allCircles.forEach(circle => {
      circle.style.display = 'none'
    })

    allNumber.forEach(number => {
      number.style.opacity = '0'
    })

    const targetCircle = document.querySelector(`.slide-four__circle-wrapper-${text.toLowerCase()}`)
    if (targetCircle) {
      targetCircle.style.display = 'block'
    }

    const targetNumber = document.querySelector(`.slide-four__total-number-${text.toLowerCase()}`)
    if (targetNumber) {
      targetNumber.style.opacity = '1'
    }
  }
}
