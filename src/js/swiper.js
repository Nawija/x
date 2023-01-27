const swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  autoplay: {
    delay: 1900,
    disableOnInteraction: true
  },
  loop: true,
  speed: 100,
  coverflowEffect: {
    rotate: 33,
    stretch: -10,
    depth: -150,
    modifier: .8,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});