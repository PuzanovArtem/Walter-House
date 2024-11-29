export function initializeSixthScreenInteractions() {
  const showMoreButton = document.getElementById('showMoreButton')
  const hiddenItems = document.querySelectorAll('.slide-six__item')
  const contactForm = document.querySelector('.slide-six__contact-form-s')
  const list = document.querySelector('.slide-six__list')
  const infoBlocks = document.querySelectorAll('.slide-six__info')
  const alternateTexts = document.querySelectorAll('.slide-six__alternate-text')

  const isSmallScreen = () => window.innerWidth < 920

  if (showMoreButton) {
    showMoreButton.addEventListener('click', function () {
      if (hiddenItems.length > 0) {
        hiddenItems.forEach(item => {
          item.style.display = 'block'
        })
        if (contactForm) {
          contactForm.style.bottom = '0'
        }
        if (list) {
          list.style.marginBottom = '0'
        }
        showMoreButton.style.display = 'none'
      }
    })
  }

  hiddenItems.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
      if (isSmallScreen()) {
        if (alternateTexts[index]) {
          alternateTexts[index].style.display = 'block'
        }
      } else if (infoBlocks[index]) {
        infoBlocks[index].style.display = 'block'
      }
    })

    item.addEventListener('mouseleave', () => {
      if (isSmallScreen()) {
        if (alternateTexts[index]) {
          alternateTexts[index].style.display = 'none'
        }
      } else if (infoBlocks[index]) {
        infoBlocks[index].style.display = 'none'
      }
    })
  })

  window.addEventListener('resize', () => {
    hiddenItems.forEach((item, index) => {
      if (infoBlocks[index]) infoBlocks[index].style.display = 'none'
      if (alternateTexts[index]) alternateTexts[index].style.display = 'none'
    })
  })
}
