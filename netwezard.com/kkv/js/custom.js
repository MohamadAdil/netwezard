//banner slider
$(function() {
$(".banner-slider .owl-nav").addClass("container");
});

$('.banner-slider').owlCarousel({
    loop:true,
    margin:0,
    items:1,
    responsiveClass:true,
    dots:false,
    nav:true
});
 $( ".banner-slider .owl-prev").html('<i class="fas fa-arrow-left"></i>');
 $( ".banner-slider .owl-next").html('<i class="fas fa-arrow-right"></i>');


// owl carousel js
$('.services-slider').owlCarousel({
    loop:true,
    margin:30,
    responsiveClass:true,
        autoplay: true,
        nav: true,
        dots:false,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        991:{
            items:3,
            nav:true,
            loop:false
        }
    }
});
 $( ".services-slider .owl-prev").html('<i class="fas fa-chevron-left"></i>');
 $( ".services-slider .owl-next").html('<i class="fas fa-chevron-right"></i>');
