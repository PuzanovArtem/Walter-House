import 'swiper/css/bundle'
import Swiper from 'swiper/bundle'

export function gallerySlider() {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,

    pagination: {
      el: '.swiper-custom-pagination',
      type: 'fraction',
      clickable: true,
      formatFractionCurrent: function (number) {
        return '0' + number
      },

      formatFractionTotal: function (number) {
        return '0' + number
      },
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
}
