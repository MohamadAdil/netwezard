$(document).ready(function () {
  $(".home-hero-slider").slick({
    dots: false,
    arrows: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    vertical: true,
    prevArrow: '<button class="prev-arrow"></button>',
    nextArrow: '<button class="next-arrow"></button>',
  });
  $(".logos-wrapper").slick({
    dots: false,
    arrows: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 5,
    autoplay: true,
    prevArrow: '<button class="prev-arrow"></button>',
    nextArrow: '<button class="next-arrow"></button>',
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });

  // Portfolio Filter
  $(".filters ul li").click(function () {
    $(".filters ul li").removeClass("active");
    $(this).addClass("active");

    var data = $(this).attr("data-filter");
    $grid.isotope({
      filter: data,
    });
  });
  var $grid = $(".grid").isotope({
    itemSelector: ".all",
    percentPosition: false,
    masonry: {
      columnWidth: ".all",
    },
  });
  $(".counter").counterUp({ time: 3000 });
});
