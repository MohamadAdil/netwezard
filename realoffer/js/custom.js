$(document).ready(function(){
    	/* Fixed header on scroll down*/
		// Scroll FIXED HEADER

 
  // Scroll FIXED HEADER

$(window).scroll(function() {
  if ($(document).scrollTop() > 100 ){
    $('.navbar').addClass('shrink');
  } else {
    $('.navbar').removeClass('shrink');
  };
  
  // Parallax js
var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

	var testMobile = isMobile.any();
	
	if (testMobile == null)
	{
		$('.hero-banner, .demo-section').parallax("50%", 0.3);
	}
  
});

// Caraousal

$('.testimonials-carousel').carousel({
    pause: true,
    interval: 4000,
  });
  
 // Smoothscroll js
		$(function() {
	  $('a.scroll').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});
	})