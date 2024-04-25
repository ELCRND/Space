const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  allowTouchMove: false,
  spaceBetween: 80,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    1400: {
      slidesPerView: 2,
    },
  },
});
