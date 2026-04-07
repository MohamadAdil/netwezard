
var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
if (isMobile.any()) {
 $(function() {
  $('nav a, .section-link, .btn-pink[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 60
        }, 700);
        return false;
      }
    }
  });
});
$('.nav a').on('click', function() {
                $('.navbar-collapse').removeClass('in').addClass('collapse');
        });
}
else {
   // slow scroll
	
$(function() {
  $('nav a, .section-link, .btn-pink[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 700);
        return false;
      }
    }
  });
});

$(document).ready(function(){
	$('.nav a').on('click', function() {
                $('.navbar-collapse').removeClass('in').addClass('collapse');
       
});

$('#contact-form').validate({
	    rules: {
			name: {
	        minlength: 3,
	        required: true
	      },		  
		  phone: {
	      	number: 0,
			maxlength:12,
	        required: true
	      },
		   message: {
	      	minlength: 20,
	        required: true
	      }
	    },
		
		
	    highlight: function(label) {
	    	$(label).closest('.control-group').addClass('error');
	    },
	    success: function(label) {
	    	label
	    		.text('OK!').addClass('valid')
	    		.closest('.control-group').addClass('success');
	    }
	  });


})
}

// WOW JS
wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100
      }
    );
    wow.init();