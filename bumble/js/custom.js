
$(document).ready(function(){
    if ($(window).width() <= 991) {
        $("#productCollection").addClass("owl-carousel");

    $('#productCollection').owlCarousel({
    loop:false,
    margin:30,
    items:1,
    responsiveClass:true,
    dots:true,
    nav:false,
     responsive:{
        0:{
            items:1,
            nav:false,
            dots:true,
        },
         480:{
            items:2,
            nav:false,
            dots:true,
        },
       
    }
});



    } 
})


//banner slider
$(function() {
$(".banner-slider .owl-nav, .key-feature-slider .owl-nav, .insta-post-slider .owl-nav").addClass("container");
 $( ".owl-carousel .owl-prev").html('<i class="fas fa-chevron-left"></i>');
 $( ".owl-carousel .owl-next").html('<i class="fas fa-chevron-right"></i>');
});

$('.banner-slider').owlCarousel({
    loop:false,
    margin:0,
    items:1,
    responsiveClass:true,
    dots:false,
    nav:true,
         responsive:{
        0:{
            items:1,
            nav:false,
            dots:false,
        },
         767:{
            items:1,
            nav:true,
            dots:false,
        },
       
    }
});


 // testimonial-slider

$('.testimonial-slider').owlCarousel({
    loop:false,
    margin:0,
    items:1,
    smartSpeed: 1500,
    responsiveClass:true,
    dots:true,
    nav:false,
     responsive:{
        0:{
            items:1,
            nav:false,
            dots:true,
        },
        767:{
            items:1,
            nav:false,
            dots:true,
        },
    }
});

 //key feature slider
 $('.key-feature-slider').owlCarousel({
    loop:false,
    margin:0,
    items:1,
    responsiveClass:true,
    dots:false,
    nav:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            dots:true
        },
        767:{
            items:1,
            nav:true,
            dots:false
        }
    }
});


 //ista post slider

  //key feature slider
 $('.insta-post-slider').owlCarousel({
    loop:true,
    items:1,
    autoplay: false,
    dots:false,
    center:true,
    nav:true,
     responsive:{
        0:{
            items:2,
            nav:false,
            dots:true
        },
        767:{
            items:3,
            nav:true,
            dots:false
        },
        991:{
            items:3,
            nav:true,
            loop:true
        }
    }
    });
 
 



//sale Countdown timer
const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('Sep 30, 2020 00:00:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
      
      //do something later when date is reached
      //if (distance < 0) {
      //  clearInterval(x);
      //  'IT'S MY BIRTHDAY!;
      //}

    }, second)