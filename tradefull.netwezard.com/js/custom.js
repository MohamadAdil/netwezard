$(document).ready(function () {
  $("#header .navbar-toggler").click(function () {
    $(this).toggleClass("open");
    $("body").toggleClass("overflow-hidden");
  });
// Sticky Header
$(window).scroll(function(){
  if($("body").scrollTop() > 90 || $("html").scrollTop() > 90) {
      $("header").addClass("sticky");
  } else {
      $("header").removeClass("sticky");
  }
});  
// Hide header on scroll down
/*
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If scrolled down and past the navbar, add class .nav-up.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('#header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('#header').removeClass('nav-up').addClass('nav-down');
        }
    }
  
    lastScrollTop = st;
}*/



// Header Search Overlay
$(".search-icon").on("click", function(){
  $(".tf-overlay, .header-search-wrapper").toggleClass("show");
  $("body").toggleClass("overflow-hidden");
  $(".navbar-collapse").removeClass("show");
  $("#header .navbar-expand-lg .navbar-nav .nav-item .dropdown-menu").removeClass("show");
  $("#header .navbar-toggler").removeClass("open")
})
$(".tf-overlay").on("click", function(){
  $(this).removeClass("show");
  $(".header-search-wrapper").removeClass("show");
  $(".search-box .dropdown").removeClass("in");
  $(".search-box .dropdown").removeClass("open");
  $('#search').val('');
  $(".recent-search").show();
  $("body").removeClass("overflow-hidden")
})
//code = 2k minified

function createAuto (i, elem) {

  var input = $(elem);
  var dropdown = input.closest('.dropdown');
  var listContainer = dropdown.find('.list-autocomplete');
  var listItems = listContainer.find('.dropdown-item');
  var hasNoResults = dropdown.find('.hasNoResults');

  listItems.hide();
  listItems.each(function() {
       $(this).data('value', $(this).text() );  
       //!important, keep this copy of the text outside of keyup/input function
  });
  
  input.on("input", function(e){
      
      if((e.keyCode ? e.keyCode : e.which) == 13)  {
          $(this).closest('.dropdown').removeClass('open').removeClass('in');
          return; //if enter key, close dropdown and stop
      }
      if((e.keyCode ? e.keyCode : e.which) == 9) {
          return; //if tab key, stop
      }

    
      var query = input.val().toLowerCase();

      if( query.length > 1) {

          dropdown.addClass('open').addClass('in');

          listItems.each(function() {
           
            var text = $(this).data('value');             
            if ( text.toLowerCase().indexOf(query) > -1 ) {

              var textStart = text.toLowerCase().indexOf( query );
              var textEnd = textStart + query.length;
              var htmlR = text.substring(0,textStart) + '<em>' + text.substring(textStart,textEnd) + '</em>' + text.substring(textEnd+length);
              $(this).html( htmlR );               
              $(this).show();
              $('.recent-search').fadeOut();
            } else { 
            
              $(this).hide(); 
            
            }
          });
        
          var count = listItems.filter(':visible').length;
          ( count > 0 ) ? hasNoResults.hide() : hasNoResults.show();
          $('.recent-search').fadeOut();
      } else {
          listItems.hide();
          dropdown.removeClass('open').removeClass('in');
          hasNoResults.show();
          $('.recent-search').fadeIn();
      }
  });

  listItems.on('click', function(e) {
      var txt = $(this).text().replace(/^\s+|\s+$/g, "");  //remove leading and trailing whitespace
      input.val( txt );
      dropdown.removeClass('open').removeClass('in');
  });

}

$('.jAuto').each( createAuto );


$(document).on('focus', '.jAuto', function() {
   $(this).select();  // in case input text already exists
});



  // $("#header .navbar-nav .nav-link").on('click', function(){
  //   $("#header .navbar-nav .nav-link").removeClass("active");
  //   $(this).addClass("active");
  // })
 

   if ($(window).width() <= 991) {
    var navLinkMobile = $("#header .navbar-nav .nav-item .nav-link");
    var navLinkFirstChild = $("#header .navbar-nav .nav-item:first-child .nav-link");
    console.log(navLinkFirstChild);


    function mobileMenuNav(){
      $(navLinkMobile).removeClass("active");  
      $(navLinkFirstChild).addClass("active");
      $("#header .navbar-expand-lg .navbar-nav .nav-item:first-child .dropdown-menu").addClass("show");

      $(navLinkFirstChild).addClass("active");
      $("#header .navbar-expand-lg .navbar-nav .nav-item:first-child .dropdown-menu").addClass("show");

    $("#header .navbar-nav .nav-item").on('click', function(){
      $("#header .navbar-nav .nav-item").removeClass("active");
      $("#header .navbar-expand-lg .navbar-nav .nav-item .dropdown-menu").removeClass("show");
      $(this).addClass("active");
      $(this).find(".dropdown-menu").addClass("show");
    })

    $(navLinkMobile).on('click', function(){
      $(navLinkMobile).removeClass("active");
      $(this).addClass("active");
    });

    $("#header .navbar-toggler").click(function () {
      $("#header .navbar-expand-lg .navbar-nav .nav-item .dropdown-menu").removeClass("show");
      $("#header .navbar-expand-lg .navbar-nav .nav-item:first-child .dropdown-menu").addClass("show");
      $(navLinkMobile).removeClass("active");
      $(navLinkFirstChild).addClass("active");
      $(".tf-overlay, .header-search-wrapper").removeClass("show");
      $("body").removeClass("overflow-hidden");
    })
    }
   }
   else{
    
   }
  //  $(window).resize(function() {
  //   if ($(window).width() >= 992) {
  //     mobileMenuNav();
  //    }
  //  })


  function checkWidth() {
    var windowSize = $(window).width();

    if (windowSize <= 991) {
      mobileMenuNav();
    }
    else if (windowSize <= 719) {
        
    }
    else if (windowSize <= 959) {
        
    }
    else if (windowSize >= 991) {
        
    }
}
checkWidth()
$(window).resize(checkWidth);

  // Equal Height column Function
  function equalColumns(htmlElements) {
    $(htmlElements).removeAttr("style");
    var heights = $(htmlElements).map(function() {
            return $(this).height()
        }).get(),
        maxHeight = Math.max.apply(null, heights);
    $(htmlElements).height(maxHeight)
}
  $(window).bind("load", function() {
    window.addEventListener("resize", function() {
        setTimeout(function() {
            equalColumns(".resources-section .resources-wrapper .resources-tile")
        }, 500)
    }, !1), setTimeout(function() {
        equalColumns(".resources-section .resources-wrapper .resources-tile")
    }, 500)
})

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

  // Story Inspires Carousel
  $(".story-inspire-carousal").slick({
    dots: false,
    arrows: true,
    autoplay: false,
    fade: false,
    speed: 500,
    slidesToShow: 1,
    prevArrow: '<button class="prev-arrow"><i class="icon-long-arrow"></i></button>',
    nextArrow: '<button class="next-arrow"><i class="icon-long-arrow"></i></button>',
    responsive: [
      {
        breakpoint: 9999,
            settings: "unslick"
      },
      {
        breakpoint: 767,
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
  
// Read More Less
$('.moreless-button').click(function() {
  $('.moretext').toggleClass('readmore');
  $('.moreless-button').toggleClass('readmore');
  if ($('.moreless-button span').text() == "Read more") {
    $('.moreless-button span').text("Read less")
  } else {
    $('.moreless-button span').text("Read more")
  }
})
  // Counter
  $(".counter").counterUp({ time: 3000 });


// AOS
// AOS.init({
//   duration: 1200,
// })

// Tab Nav fixed on top scroll
$(window).bind('scroll', function() {
  var navHeight = $( window ).height() - 220;
    if ($(window).scrollTop() > navHeight) {
      $('.tabs-fixed').addClass('fixed');
    }
    else {
      $('.tabs-fixed').removeClass('fixed');
    }
 });

 jQuery('a[href^="#"]').on('click',function (e) {
  var target = this.hash,
      $target = jQuery(target);

  jQuery('html, body').stop().animate({
    'scrollTop': $target.offset().top-250
  }, 500, function () {
    window.location.hash = target;
  });
});
// Spy scroll js
var sectionIds = $('.tabs-fixed .tab-fixed-wrapper .tabsnav li a');
$(sectionIds).on('click', function(){
  $(sectionIds).closest('li').removeClass("active");
  $(this).closest('li').addClass("active");
})
    $(document).scroll(function(){
        sectionIds.each(function(){

            var container = $(this).attr('href');
            var containerOffset = $(container).offset().top;
            var containerHeight = $(container).outerHeight();
            var containerBottom = containerOffset + containerHeight;
            var scrollPosition = $(document).scrollTop();
    
            if(scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 220){
                $(this).closest('li').addClass('active');
            } else{
                $(this).closest('li').removeClass('active');
            }
    
    
        });
    });

// AOS animation js 
AOS.init({
  duration: 1200,
  disable: function() {
    var maxWidth = 991;
    return window.innerWidth < maxWidth;
  }
});
});
