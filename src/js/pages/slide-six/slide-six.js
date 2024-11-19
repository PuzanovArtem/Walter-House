export function initializeSixthScreenInteractions() {
  document.addEventListener('DOMContentLoaded', function () {
    const showMoreButton = document.getElementById('showMoreButton')
    const hiddenItems = document.querySelectorAll('.slide-six__item')
    const contactForm = document.querySelector('.slide-six__contact-form-s')
    const list = document.querySelector('.slide-six__list')
    const infoBlocks = document.querySelectorAll('.slide-six__info')

    // Обработка кнопки "Показать больше"
    if (showMoreButton) {
      showMoreButton.addEventListener('click', function () {
        if (hiddenItems.length > 0) {
          hiddenItems.forEach(item => {
            item.style.display = 'block' // Показывает скрытые элементы
          })
          if (contactForm) {
            contactForm.style.bottom = '0' // Устанавливает контактную форму внизу экрана
          }
          if (list) {
            list.style.marginBottom = '0' // Убирает нижний отступ у списка
          }
          showMoreButton.style.display = 'none' // Скрывает кнопку
        }
      })
    }

    // Обработка наведения на элементы и отображения блоков информации
    hiddenItems.forEach((item, index) => {
      item.addEventListener('mouseenter', () => {
        if (infoBlocks[index]) {
          infoBlocks[index].style.display = 'block' // Показывает соответствующий блок информации
        }
      })

      item.addEventListener('mouseleave', () => {
        if (infoBlocks[index]) {
          infoBlocks[index].style.display = 'none' // Скрывает блок информации
        }
      })
    })
  })
}
