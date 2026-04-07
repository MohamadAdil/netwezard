$(document).ready(function(){
	//.parallax(xPosition, speedFactor, outerHeight) options:
	//xPosition - Horizontal position of the element
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	
	
	$('.carousel-two').carousel({
  interval: 5000
})
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
		$('.bg1').parallax("50%", 0.3);
		$('.bg2').parallax("50%", 0.3);
		$('.bg3').parallax("50%", 0.3);
		$('.bg4').parallax("50%", 0.3);
	}

         
		// Smoothscroll js
		$(function() {
	  $('a.scroll').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 500);
	        return false;
	      }
	    }
	  });
	});
		
        });
		
		/* Fixed header on scroll down*/
		$(function(){
 var shrinkHeader = 1;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
      if ( scroll >= shrinkHeader ) {
           $('#header').addClass('shrink');
        }
        else {
            $('#header').removeClass('shrink');
        }
  });
function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
    }
});

// WOW JS
wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100
      }
    );
    wow.init();
	
	