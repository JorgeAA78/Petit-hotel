document.addEventListener('DOMContentLoaded', function () {
  bulmaCarousel.attach('#slider', {
    slidesToScroll: 1,
    slidesToShow: 3,
    infinite: true,
    breakpoints: [
      { changePoint: 480, slidesToShow: 1, slidesToScroll: 1 },
      { changePoint: 640, slidesToShow: 2, slidesToScroll: 2 },
      { changePoint: 768, slidesToShow: 3, slidesToScroll: 3 }
    ]
  });
  let burger = document.querySelector('.burger');
  let navbar = document.querySelector('.navbar-menu');
  burger.addEventListener('click', () => {
    burger.classList.toggle('is-active');
    navbar.classList.toggle('is-active');
  });
});
