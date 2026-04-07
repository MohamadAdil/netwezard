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

// AOS Animation Function
AOS.init();


