const blogSwiper = new Swiper(".blog__swiper-container", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: false,
  speed: 800,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  breakpoints: {
    1175: {
      slidesPerView: 3,
    },
    786: {
      slidesPerView: 2,
    },
    300: {
      slidesPerView: 1,
    },
  },
});
