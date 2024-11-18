export function setupFifthScreenInteractions() {
  const buttons = document.querySelectorAll('.slide-fifth__main-point')
  const circles = document.querySelectorAll('.slide-fifth__circle')

  circles[0].closest('.slide-fifth__circle-wrapper').style.display = 'contents'

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const number = button.classList[1].replace('slide-fifth__main-point-', '')
      const targetCircle = document.querySelector(`[data-number-type="${number}"]`)

      if (targetCircle) {
        circles.forEach(circle => {
          circle.closest('.slide-fifth__circle-wrapper').style.display = 'none'
        })

        targetCircle.closest('.slide-fifth__circle-wrapper').style.display = 'contents'
      }
    })
  })
}
