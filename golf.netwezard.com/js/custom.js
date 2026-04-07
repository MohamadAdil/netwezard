

// owl carousel js
$('.category-slider').owlCarousel({
    loop:false,
    margin:30,
    autoPlay: false,
    mouseDrag: false,
    touchDrag: true,
    responsiveClass:true,
        autoplay: true,
        nav: true,
        dots:false,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        991:{
            items:3,
            nav: true,
        }
    }
});
 $( ".category-slider .owl-prev").html('<i class="fas fa-chevron-left"></i>');
 $( ".category-slider .owl-next").html('<i class="fas fa-chevron-right"></i>');

 // banner slider
$('.banner-slider').owlCarousel({
    loop:true,
    autoPlay: true,
    mouseDrag: false,
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


// Product flex slider
    // The slider being synced must be initialized first
  // Product flex slider
// $(window).load(function() {
    // The slider being synced must be initialized first
    $('#carousel').flexslider({
      animation: "slide",
      controlNav: false,
      animationLoop: true,
      slideshow: true,
      itemWidth: 93,
      itemMargin: 5,
      asNavFor: '#slider'
    });
   
    $('#slider').flexslider({
      animation: "slide",
      controlNav: false,
      animationLoop: false,
      slideshow: false,
      sync: "#carousel"
    });
//   });
  

function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
  }
  
  function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
  }