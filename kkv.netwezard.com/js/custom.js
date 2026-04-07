
//banner slider
$(document).ready(function(){
$(".banner-slider .owl-nav").addClass("container");


$('.banner-slider').owlCarousel({
    loop:true,
    margin:0,
    items:1,
    responsiveClass:true,
    dots:false,
    nav:true,
    autoplay:true,
    autoplayTimeout: 5000,
    smartSpeed: 1000,
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
    smartSpeed: 1000,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
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

// Our Team owl carousel js
$('.our-team-slider').owlCarousel({
    loop:false,
    margin:30,
    mouseDrag  : false,
    responsiveClass:true,
    autoplay: true,
    nav: true,
    dots:false,
    smartSpeed: 1000,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        991:{
            items:4,
            nav:true,
            loop:false
        }
    }
});
 $( ".our-team-slider .owl-prev").html('<i class="fas fa-chevron-left"></i>');
 $( ".our-team-slider .owl-next").html('<i class="fas fa-chevron-right"></i>');

$(window).on('scroll',function() {
            if ($(this).scrollTop() > 120){  
                $('.site-header').addClass("is-sticky");
            }
            else{
                $('.site-header').removeClass("is-sticky");
            }
        });

 // Touchspin
 $("input[name='demo0']").TouchSpin({}); 
})
 
// AOS Animation Function
// AOS.init();
wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();


    //donate js
    
      $(document).ready(function(){

        $('#searchbar').focus();

        $('#donate-buttons').on('click', '.btn-blue', function(e) {
          e.preventDefault();
          $('.active').removeClass('active');
          $('#other-input').hide().siblings('#other').show();
          $(this).filter('.btn-blue').addClass("active");
          var value = $(this).data('impact');
          $(this).closest('div').find('p').text("" + value);
          $('#other-input').find('input').val('');  
        });
          
        $('.btn-green').on('click', function() {
          var dollar;
          var input = $('#other-input').find('input').val();
          if ( !input ) {
            dollar = $('.active').data('dollars');
           } else if ( $.trim(input) === '' || isNaN(input)) {
            // empty space leaves value = 'undefined'. 
            // Have to fix $.trim(input) == '' above so that it works.
            console.log('Yes');
            dollar = "Please enter a number."; 
          } else {
            dollar = input;
          }
          $('#price').text(""+dollar);
        });

        $('#other').on('click', function(e) {
          e.preventDefault(); 
          var buttons = $(this).parent('#donate-buttons');
          buttons.find('.active').removeClass('active');
          var other = $(this).hide().siblings('#other-input');
          other.show();
          other.find('input').focus();
          var pText = buttons.siblings('p');
          pText.text("Thank you!");
          var oValue = other.find('input');
          oValue.keyup(function() {
            if ( oValue.val() > 50 ) {
              pText.text("Thank you!" + " You\'re donation covers housing and counseling services for " + oValue.val()/25 + " people.");
            } else {
              pText.text("Thank you!");
            }
          });
        }); 

      });
