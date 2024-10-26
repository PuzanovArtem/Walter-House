import fullpage from 'fullpage.js'
import 'fullpage.js/dist/fullpage.css'

export function initFullPage() {
  function toggleFullPageScrolling() {
    if (window.innerWidth <= 920) {
      // Отключаем авто-скроллинг для экранов меньше 920px
      fullpage_api.setAutoScrolling(false)
      fullpage_api.setFitToSection(false) // Отключаем подгонку секций по размеру экрана
      fullpage_api.setAllowScrolling(true) // Включаем стандартный скроллинг
    } else {
      // Включаем авто-скроллинг для экранов больше 920px
      fullpage_api.setAutoScrolling(true)
      fullpage_api.setFitToSection(true) // Включаем подгонку секций по размеру экрана
      fullpage_api.setAllowScrolling(true) // Оставляем скроллинг по секциям
    }
  }

  // Инициализация fullPage.js
  new fullpage('#fullpage', {
    autoScrolling: true, // Включаем авто-скроллинг по умолчанию
    anchors: ['screenShot1', 'screenShot2', 'screenShot3', 'screenShot4', 'screenShot5', 'screenShot6'],
    navigation: false, // Используем свою навигацию
    controlArrows: false, // Скрываем стрелки
    afterLoad: function (origin, destination, direction) {
      document.querySelectorAll('.pagination .point').forEach(point => {
        point.classList.remove('point-active')
      })
      document.querySelector(`.pagination a[href="#${destination.anchor}"]`).classList.add('point-active')
    },
  })

  // Проверка при загрузке страницы
  toggleFullPageScrolling()

  // Обработчик изменения размера окна
  window.addEventListener('resize', toggleFullPageScrolling)
}
