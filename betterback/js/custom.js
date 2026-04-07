
        $(document).ready( function() {
new WOW().init();
// Testimonial slider
$('.carousel-two').carousel({
  interval: 7000
})


$(function(){
    $('.carousel').carousel({
      interval: 7000
    });
});


// show header scroll at certain point in page
          var just_scrolled_down = false;
          var just_scrolled_up = false;
          $(window).scroll(function() {
              var scroll = $(window).scrollTop();

              var header = $('header#header');
              
              if (scroll >= 200 && !just_scrolled_down) {
                just_scrolled_up = false;
                header.stop();
               
                header.css('position', 'fixed').css('opacity', 0).css('z-index', '99999').css('top', '0').animate({opacity: 1}, 500);
                just_scrolled_down = true;
              }
              else if (scroll < 200 && !just_scrolled_up) {
                just_scrolled_down = false;
                header.stop();
                header.animate({opacity: 0}, 200, function() {
                  
                  header.css('position', 'relative').css('opacity', 1);
                });
                just_scrolled_up = true;
              }
            });


             });
