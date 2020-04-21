$(".testimonials-section .testimonials-section__slider-wrap").slick({
  nextArrow: $(".testimonials-section .next"),
  prevArrow: $(".testimonials-section .prev"),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: true,
        arrows: false,
        nextArrow: "",
        prevArrow: "",
      },
    },
  ],
});

$(".services-section .services-section__slider-wrap").slick({
  variableWidth: true,
  nextArrow: $(".services-section .next"),
  prevArrow: $(".services-section .prev"),
});
const mixer = mixitup("#mixitup-container");

const menuBtn = document.getElementById("menu-btn");
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("is-open");
});
