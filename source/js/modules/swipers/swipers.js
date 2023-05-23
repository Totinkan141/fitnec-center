import Swiper from '../../vendor/swiper';
const coachesSwiper = document.querySelector('[data-swiper="coaches"');
const reviewsSwiper = document.querySelector('[data-swiper="reviews"');


const initSwipers = () => {
  if (reviewsSwiper) {
    (() =>
      new Swiper('[data-swiper="reviews"', {
        direction: 'horizontal',
        navigation: {
          prevEl: '.reviews__swiper-btn--prev',
          nextEl: '.reviews__swiper-btn--next',
        },

        breakpoints: {
          1200: {
            initialSlide: 0,
            slidesPerView: 1,
          },
        },
      })
    )();
  }

  if (coachesSwiper) {
    (() =>
      new Swiper('[data-swiper="coaches"]', {
        direction: 'horizontal',
        loop: true,
        navigation: {
          prevEl: '.about-coaches__swiper-btn--prev',
          nextEl: '.about-coaches__swiper-btn--next',
        },

        breakpoints: {
          319: {
            initialSlide: 2,
            slidesPerView: 1,
            spaceBetween: 0,
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

export {initSwipers};
