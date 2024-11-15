export function setupFifthScreenInteractions() {
  const buttons = document.querySelectorAll('.slide-fifth__main-point')
  const circles = document.querySelectorAll('.slide-fifth__circle')

  // Отображаем первый круг при загрузке
  circles[0].closest('.slide-fifth__circle-wrapper').style.display = 'block'

  // Добавляем обработчики событий для кнопок
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const number = button.classList[1].replace('slide-fifth__main-point-', '') // Получаем номер круга из класса кнопки
      const targetCircle = document.querySelector(`[data-number-type="${number}"]`) // Находим круг по номеру кнопки

      if (targetCircle) {
        // Скрываем все круги
        circles.forEach(circle => {
          circle.closest('.slide-fifth__circle-wrapper').style.display = 'none'
        })

        // Показываем целевой круг
        targetCircle.closest('.slide-fifth__circle-wrapper').style.display = 'block'
      }
    })
  })
}
