import 'swiper/css/bundle'
import Swiper from 'swiper/bundle'

export function gallerySlider() {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },

    // // And if you need pagination
    // pagination: {
    //   el: '.swiper-custom-pagination',
    //   clickable: true,
    // },

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
