//Responsive navigation
jQuery(document).ready(function($) {
			$('.smobitrigger').smplmnu();
		});


// slow scroll
	
$(function() {
  $('.yellow-btn, nav a, .hero-container .yellow-btn[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});