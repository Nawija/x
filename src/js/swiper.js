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
  speed: 2000,
  coverflowEffect: {
    rotate: 33,
    stretch: -50,
    depth: -150,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});