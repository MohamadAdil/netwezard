// Homepage Hero Slider
$(document).ready(function(){
  // Homepage hero slider
	$('.hero-banner-slideshow').slick({
	  dots: true,
	  infinite: true,
	  speed: 500,
	  cssEase: 'linear',
	  arrows: false,
    draggable: false,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: false,
    pauseOnFocus: false,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
          draggable: true,
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});


// Product Image slider on Product Detail pge
  $('.product-main-gallery .product-image-slider').slick({
    dots: true,
    infinite: false,
    speed: 500,
    cssEase: 'linear',
    arrows: true,
    draggable: false,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: false,
    pauseOnFocus: false,
    prevArrow: '<div class="slick-prev"><span class="inner-arrows"></span></div>',
    nextArrow: '<div class="slick-next"><span class="inner-arrows"></span></div>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          draggable: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
// Header adding class

$("#site-header").hover(
  function () {
    $(this).addClass("dark");
  },
  function () {
    $(this).removeClass("dark");
  }
);


// function checkWidth(){
//   if ($(window).width() <= 991) {
//      $('#site-header').addClass("dark");
//   }
//   else {
//      $('#site-header').removeClass("dark");
//   }
// }
// $(window).on('resize', function(){
//   checkWidth()
// })
// if ($(window).width() <= 991) {
//      $('#site-header').addClass("dark");
//   }
//   else {
//      $('#site-header').removeClass("dark");
//   }
// Navigation

$('.primary-navigation').slicknav({
    label: '',
    prependTo:'#mobile-nav',
    parentTag: 'div',
    closedSymbol: "",
    openedSymbol: ""
});

$('#menu-toggle').on('click', function(e){
    $(this).toggleClass('open');
    $('.primary-navigation').slicknav('toggle');
})
});




// Equal Column Height
function equalColumns(htmlElements){
    $(htmlElements).removeAttr('style');
    var heights = $(htmlElements).map(function() {
        return $(this).height();
    }).get(),
    maxHeight = Math.max.apply(null, heights);
    $(htmlElements).height(maxHeight);
}
$(window).bind("load", function() {
    window.addEventListener("resize", function() {
        // Get screen size (inner/outerWidth, inner/outerHeight)
        setTimeout(function(){
            equalColumns('.three-column-section .category-box h3');
            equalColumns('.three-column-section .category-box .image-container');
        }, 500);
    }, false);
    setTimeout(function(){
        equalColumns('.three-column-section .category-box h3');
        equalColumns('.three-column-section .category-box .image-container');

    }, 500);
});
