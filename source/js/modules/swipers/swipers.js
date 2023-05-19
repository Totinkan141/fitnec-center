import Swiper from '../../vendor/swiper';
const coachesSwiper = document.querySelector('[data-swiper="coaches"');

const initCoachesSwiper = () => {
  if (coachesSwiper) {
    (() =>
      new Swiper('[data-swiper="coaches"', {
        direction: 'horizontal',
        loop: true,
        navigation: {
          prevEl: '.about-coaches__swiper-btn--prev',
          nextEl: '.about-coaches__swiper-btn--next',
        },

        breakpoints: {
          290: {
            slidesPerView: 1,
            spaceBetween: 20,
          },

          767: {
            initialSlide: 2,
            slidesPerView: 2,
            spaceBetween: 30,
          },

          1200: {
            initialSlide: 0,
            slidesPerView: 4,
            spaceBetween: 40,
          },
        },
      })
    )();
  }
};

export {initCoachesSwiper};