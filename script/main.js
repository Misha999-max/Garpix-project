$(function () {
  $(".single-item").slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  });
});

const entr = document.querySelector(".hidden-entrance"),
  exit = document.querySelector(".hiden-exit"),
  menu = document.querySelector(".header-menu");

entr.addEventListener("click", () => {
  exit.style.display = "block";
  entr.style.display = "none";
  menu.style.display = "block";
  menu.classList.toggle(".nav-hidden-mob");
});
exit.addEventListener("click", () => {
  entr.style.display = "block";
  exit.style.display = "none";
  menu.style.display = "none";
  menu.classList.remove(".nav-hidden-mob");
});
