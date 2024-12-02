const swiperImg = new Swiper(".swiper-container", {
  loop: false,
  speed: 2400,
  spaceBetween: "2%",
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  on: {
    init: function () {
      updateCounter(this);
    },
    slideChange: function () {
      updateCounter(this);
    },
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
});

const swiperContainer = document.querySelector(".swiper-container");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
        swiperImg.autoplay.start();
      } else {
        swiperImg.autoplay.stop();
      }
    });
  },
  {
    threshold: [0.2],
  }
);

observer.observe(swiperContainer);

function updateCounter(swiper) {
  const curNum = document.querySelector(".hero__current-count");
  const totalCount = document.querySelector(".hero__total-count");

  const index = swiper.realIndex + 1;
  curNum.textContent = index < 10 ? `0${index}` : index;
  totalCount.textContent =
    swiper.slides.length < 10
      ? `0${swiper.slides.length}`
      : swiper.slides.length;
}
