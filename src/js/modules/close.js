// modal.js
export function initializeModal() {
  // Получаем модальное окно
  const modal = document.getElementById('myModal')

  // Получаем кнопку, которая открывает модальное окно
  const openModalBtn = document.querySelector('.openModalBtn')

  // Получаем все элементы с классом close, которые закрывают модальное окно
  const closeButtons = document.querySelectorAll('.close')

  // Когда пользователь нажимает на кнопку, открываем модальное окно
  openModalBtn.onclick = function () {
    modal.style.display = 'block'
  }

  // Добавляем обработчик события для всех кнопок закрытия
  closeButtons.forEach(closeButton => {
    closeButton.onclick = function () {
      modal.style.display = 'none'
    }
  })

  // Также можно закрывать модальное окно, когда пользователь кликает вне окна
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none'
    }
  }
}
