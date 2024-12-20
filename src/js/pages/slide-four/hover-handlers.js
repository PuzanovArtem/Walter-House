export function initHoverHandlers() {
  const styleItemElite = document.querySelector('.slide-four__style-item-elite')
  const styleItemVip = document.querySelector('.slide-four__style-item-vip')
  const styleItemExtra = document.querySelector('.slide-four__style-item-extra')
  const contactForm = document.querySelector('.slide-four__contact-form')
  const contactInfoElite = document.querySelector('.slide-four__info-elite')
  const contactInfoVip = document.querySelector('.slide-four__info-vip')
  const contactInfoExtra = document.querySelector('.slide-four__info-extra')

  styleItemElite.addEventListener('mouseover', function () {
    contactForm.style.display = 'none'
    contactInfoElite.style.display = 'block'
  })

  styleItemElite.addEventListener('mouseout', function () {
    contactForm.style.display = 'block'
    contactInfoElite.style.display = 'none'
  })

  styleItemVip.addEventListener('mouseover', function () {
    contactForm.style.display = 'none'
    contactInfoVip.style.display = 'block'
  })

  styleItemVip.addEventListener('mouseout', function () {
    contactForm.style.display = 'block'
    contactInfoVip.style.display = 'none'
  })

  styleItemExtra.addEventListener('mouseover', function () {
    contactForm.style.display = 'none'
    contactInfoExtra.style.display = 'block'
  })

  styleItemExtra.addEventListener('mouseout', function () {
    contactForm.style.display = 'block'
    contactInfoExtra.style.display = 'none'
  })
}
