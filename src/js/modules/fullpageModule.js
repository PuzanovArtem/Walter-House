import fullpage from 'fullpage.js'
import 'fullpage.js/dist/fullpage.css'

export function initFullPage() {
  let isPopupOpen = false; // Флаг для отслеживания состояния попапа

  function toggleFullPageScrolling() {
    if (window.innerWidth <= 920 || isPopupOpen) { // Если ширина окна <= 920 или попап открыт
      fullpage_api.setAutoScrolling(false); // Отключаем автоматическую прокрутку
      fullpage_api.setFitToSection(false); // Отключаем подгонку к секции
      fullpage_api.setAllowScrolling(true); // Разрешаем прокрутку вручную
    } else {
      fullpage_api.setAutoScrolling(true); // Включаем автоматическую прокрутку
      fullpage_api.setFitToSection(true); // Включаем подгонку к секции
      fullpage_api.setAllowScrolling(true); // Разрешаем прокрутку вручную
    }
  }

  new fullpage('#fullpage', {
    autoScrolling: true, // Включаем автоматическую прокрутку
    anchors: ['screenShot1', 'screenShot2', 'screenShot3', 'screenShot4', 'screenShot5', 'screenShot6'], // Анкеры для секций
    navigation: false, // Отключаем навигацию
    controlArrows: false, // Отключаем стрелки управления
    afterLoad: function (origin, destination, direction) {
      document.querySelectorAll('.pagination .point').forEach(point => {
        point.classList.remove('point-active'); // Удаляем активный класс у всех точек пагинации
      });
      document.querySelector(`.pagination a[href="#${destination.anchor}"]`).classList.add('point-active'); // Добавляем активный класс к текущей точке пагинации
    },
  });

  toggleFullPageScrolling(); // Проверяем и устанавливаем параметры прокрутки при загрузке

  window.addEventListener('resize', toggleFullPageScrolling); // Проверяем и устанавливаем параметры прокрутки при изменении размера окна

  // Добавляем слушатели для изменения состояния попапа
  document.addEventListener('popupOpen', () => {
    isPopupOpen = true; // Устанавливаем флаг, что попап открыт
    toggleFullPageScrolling(); // Проверяем и устанавливаем параметры прокрутки
  });

  document.addEventListener('popupClose', () => {
    isPopupOpen = false; // Устанавливаем флаг, что попап закрыт
    toggleFullPageScrolling(); // Проверяем и устанавливаем параметры прокрутки
  });
}
