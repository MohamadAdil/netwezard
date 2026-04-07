
// banner slider
$('.banner-slider').owlCarousel({
    loop:true,
    margin:0,
    animateOut: 'fadeOut',
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:false
        }
    }
});
$( ".banner-slider .owl-prev").html('<i class="fas fa-chevron-left"></i>');
$( ".banner-slider .owl-next").html('<i class="fas fa-chevron-right"></i>');
// owl carousel js
$('.testimonials-slider').owlCarousel({
    loop:true,
    margin:30,
    responsiveClass:true,
        autoplay: true,
        nav: false,
        dots:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        991:{
            items:1,
        }
    }
});
 $( ".services-slider .owl-prev").html('<i class="fas fa-chevron-left"></i>');
 $( ".services-slider .owl-next").html('<i class="fas fa-chevron-right"></i>');

 // owl carousel js
$('.client-logos-slider').owlCarousel({
    loop:true,
    margin:30,
    responsiveClass:true,
        autoplay: true,
        nav: false,
        dots:true,
    responsive:{
        0:{
            items:2,
        },
        600:{
            items:4,
        },
        991:{
            items:6,
        }
    }
});
 $( ".services-slider .owl-prev").html('<i class="fas fa-chevron-left"></i>');
 $( ".services-slider .owl-next").html('<i class="fas fa-chevron-right"></i>');


$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash;
	    var $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        // window.location.hash = target;
	    });
	});
});
