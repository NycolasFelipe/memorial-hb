function initiateSlickSlider() {
  $('.post-images').slick({
    arrows: true,
    infinite: true,
    lazyLoad: true,
    prevArrow: "<button type='button' class='slick-prev pull-left btn h-100'><i class='fa fa-angle-left fs-4 text-white' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right btn h-100'><i class='fa fa-angle-right fs-4 text-white' aria-hidden='true'></i></button>",
  });
}

export default initiateSlickSlider;