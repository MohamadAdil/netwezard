$(document).ready(function () {
  $(".homepage-hero-slider").slick({
    dots: true,
    arrows: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 9000,
  });
  
  // Testimonial Slider
  $(".testimonial-wrapper").slick({
    dots: false,
    arrows: true,
    autoplay: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    prevArrow: '<button class="prev-arrow"><i class="icon-long-arrow"></i></button>',
    nextArrow: '<button class="next-arrow"><i class="icon-long-arrow"></i></button>',
  });

  // Two column carousel
  $(".two-column-carousel .carousel-wrapper").slick({
    dots: false,
    arrows: true,
    autoplay: false,
    fade: false,
    speed: 500,
    slidesToShow: 2,
    prevArrow: '<button class="prev-arrow"><i class="icon-long-arrow"></i></button>',
    nextArrow: '<button class="next-arrow"><i class="icon-long-arrow"></i></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      },
    ]
  });

  // Tabbibng Js
  $('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

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
  
  // Animation on elements
  if ($(window).width() > 767) {
    AOS.init({
      duration: 1200,
    })
 }
 else {
    
 }
});
