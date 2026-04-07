$(document).ready(function () {
  $(".home-hero-slider").slick({
    dots: false,
    arrows: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    vertical: true,
    prevArrow:
      '<button class="prev-arrow"></button>',
    nextArrow:
      '<button class="next-arrow"></button>',
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
    percentPosition: true,
    masonry: {
      columnWidth: ".all",
    },
  });

});
