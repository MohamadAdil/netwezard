//banner slider

$('.banner-slider').owlCarousel({
    loop:true,
    margin:0,
    items:1,
    responsiveClass:true,
    dots:false,
    nav:true,
    autoplay: false,
    autoplayTimeout: 5000,
    smartSpeed: 1000,
    animateOut: 'fadeOut',
       animateIn: 'fadeIn',
});
 $( ".banner-slider .owl-prev").html('<i class="fas fa-arrow-left"></i>');
 $( ".banner-slider .owl-next").html('<i class="fas fa-arrow-right"></i>');

//  testimonial slider
$('.testimonial-slider').owlCarousel({
    loop:true,
    margin:30,
    responsiveClass:true,
    smartSpeed: 1000,
    nav:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:2,
            nav:false,
            loop:false,
            dots: true
        },
        1199:{
            items:2,
            nav:true,
            loop:false,
            dots: false
        }
    }
});
$( ".testimonial-slider .owl-prev").html('<i class="fa fa-angle-left" aria-hidden="true"></i>');
$( ".testimonial-slider .owl-next").html('<i class="fa fa-angle-right" aria-hidden="true"></i>');
// AOS Animation Function
AOS.init();


