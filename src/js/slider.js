var swiper = new Swiper('.mySwiper', {
  slidesPerView: 5,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
  breakpoints: {
    375: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1100: {
      slidesPerView: 3,
    },
  },
});
