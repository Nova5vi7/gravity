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

if (document.getElementById("mixitup-container")) {
  mixitup("#mixitup-container");
}

const menuBtn = document.getElementById("menu-btn");
const menuWrp = document.getElementById("navigation-menu");
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("is-open");
  menuWrp.classList.toggle("menu-opened");

  if (menuBtn.classList.contains("is-open")) {
    document.body.style.overflow = "hidden";
    // menuWrp.classList.add("menu-opened");заменяется classList.toggle
  } else {
    document.body.style.overflow = "visible";
    // menuWrp.classList.remove("menu-opened");заменяется classList.toggle
  }
});
