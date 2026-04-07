$(document).ready(function () {
  // Hamburger Menu
  $("#header .navbar-toggler").click(function () {
    $(this).toggleClass("open");
  });

  // Hero Banner Slider
  if ($(".hp-hero-slider .hp-hero-slideshow .slide-item").length > 1) {
    // code added for tracking number of slides + stopping audio and changing play/pause buttons
    var $status = $(".pagingInfo");
    var $slickElement = $(".hp-hero-slider .hp-hero-slideshow");
    $slickElement.on(
      "init reInit afterChange",
      function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)

        $(".slick-control").append(slick.$dots);
        $(".slick-control .slick-dots").hide();
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.html(i + "<span>/</span>" + slick.$dots[0].children.length);
      }
    );
    // end code added for tracking number of slides
    // Progress slider
    setTimeout(function () {
      var $slider = $(".hp-hero-slideshow");
      var $progressBar = $(".progress");
      var $progressBarLabel = $(".slider__label");

      $slider.on(
        "beforeChange",
        function (event, slick, currentSlide, nextSlide) {
          var calc = (nextSlide / (slick.slideCount - 1)) * 100;

          $progressBar
            .css("background-size", calc + "% 100%")
            .attr("aria-valuenow", calc);

          $progressBarLabel.text(calc + "% completed");
        }
      );
    }, 1000);
    setTimeout(function () {
      $(
        "<div class='progress'><span class='slider__label sr-only'></span></div>"
      ).insertBefore(".slick-control .pagingInfo");
      $(".slick-control").wrapAll();
    }, 500);

    $(".hp-hero-slider .hp-hero-slideshow")
      .slick({
        slidesToShow: 1,
        infinite: true,
        dots: true,
        arrows: true,
        prevArrow:
        '<button class="slide-arrow prev-arrow"><span></span></button>',
      nextArrow:
        '<button class="slide-arrow next-arrow"><span></span></button>',
        fade: true,
        speed: 400,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        pauseOnHover: false,
        pauseOnFocus: false,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              adaptiveHeight: true,
            },
          },
        ],
      })
      .slickAnimation();
  }

  // Who we are Slider
  $(".whoweare-carousel").slick({
    dots: true,
    infinite: true,
    speed: 500,
	  autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
	  pauseOnHover: false,
    pauseOnFocus: false,
    cssEase: "linear",
    prevArrow:
        '<button class="slide-arrow prev-arrow"><span></span></button>',
    nextArrow:
        '<button class="slide-arrow next-arrow"><span></span></button>',
        responsive: [
          {
            breakpoint: 1025,
            settings: {
              arrows: true,
            },
          },
        ],
  });

  // slider with slide title
  // $(".slider-with-slide-title-section .slider-with-slide-title").on(
  //   "init afterChange",
  //   function (e, slick) {
  //     let currentSlick = $(".slick-current.slick-active", slick.$slideTrack);
  //     let prevName = currentSlick.prev().data("slide-name");
  //     let nextName = currentSlick.next().data("slide-name");

  //     slick.$prevArrow.text(prevName);
  //     slick.$nextArrow.text(nextName);
  //   }
  // );
  $(".slider-with-slide-title-section .slider-with-slide-title")
    .slick({
      dots: true,
      infinite: true,
      fade: true,
      speed: 500,
      cssEase: "linear",
      autoplaySpeed: 5000,
      arrows: true,
      autoplay: true,
      prevArrow:
        '<button class="slide-arrow prev-arrow"><span></span></button>',
    nextArrow:
        '<button class="slide-arrow next-arrow"><span></span></button>',
      draggable: false,
      pauseOnHover: false,
      pauseOnFocus: false,
      arrows: true,
    })
    .slickAnimation();
  // slider with slide title End

  // Slider Get In Touch
  $(".get-in-touch-slider").slick({
    dots: false,
    infinite: false,
    fade: true,
    speed: 500,
    cssEase: "linear",
    arrows: true,
    prevArrow: '<button class="prev-arrow"><span></span></button>',
    nextArrow: '<button class="next-arrow"><span></span></button>',
    draggable: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    pauseOnFocus: false,
    arrows: true,
  });

  // Culture Tile slider
  $(".culture-carousel").slick({
    dots: false,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
		  dots: true,
		 arrows: true,
		   prevArrow:
        '<button class="slide-arrow prev-arrow"><span></span></button>',
          nextArrow:
        '<button class="slide-arrow next-arrow"><span></span></button>',

        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
		  arrows: true,
		        prevArrow:
        '<button class="slide-arrow prev-arrow"><span></span></button>',
    nextArrow:
        '<button class="slide-arrow next-arrow"><span></span></button>',

        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
		   arrows: true,
		 prevArrow:
        '<button class="slide-arrow prev-arrow"><span></span></button>',
         nextArrow:
        '<button class="slide-arrow next-arrow"><span></span></button>',

        },
      },
    ],
  });



  // AOS animate js

  AOS.init();
});


  // Form validation
 // Wait for the DOM to be ready
$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='getintouch']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      name: {
        required: true,
        minlength: 3
      },
      email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      brief: {
        required: true,
        minlength: 30
      }
    },
    // Specify validation error messages
    messages: {
      firstname: "Please enter your name",
      brief: "Please enter atleast 30 characters",
      email: "Please enter a valid email id"
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.preventDefault();
      form.submit();
    }
  });



  // $("#getintouch").submit(function(e){
  //   e.preventDefault();
  //   var action = $(this).attr("action");
  //   var data = {};
  //   $(this).serializeArray().map(function(x){data[x.name] = x.value;}); 
  //   $.ajax({
  //     type: "POST",
  //     url: action,
  //     data: JSON.stringify(data),
  //     contentType: "application/json",
  //     headers: {
  //       "Accept": "application/json"
  //     }
  //   }).done(function() {
  //      $('.success-wrapper').fadeIn();
  //      $('.form-wrapper').fadeOut();
  //      $('#getintouch :input').val('');
  //   }).fail(function() {
  //      alert('An error occurred please try again later.')
  //   });
  // });
});
