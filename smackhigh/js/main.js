// Counter

jQuery(document).ready(function( $ ) {
        $('.counter').counterUp({
            delay: 5,
            time: 1000
        });
    });
	






$('.hoverme').tooltip('show') 
$('.hoverme').tooltip('hide') 

	//Navigation
var $= jQuery.noConflict();
$(function() {
   var pull   = $('.pullmenu');
    menu   = $('#topnav');
    menuHeight = menu.height();

   $(pull).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle();
   });

   $(window).resize(function(){
          var w = $(window).width();
          if(w > 320 && menu.is(':hidden')) {
           menu.removeAttr('style');
          }
      });
  });
 


 

 

var container = document.querySelector('#twites');
        var msnry = new Masonry( container, {
            itemSelector: '.twite',
           
        });
        $('.twite img').load(function(){
                var msnry = new Masonry( container, {
                itemSelector: '.twite',
               
            });
        })
  //Back to top
  jQuery(document).ready(function() {
    var offset = 720;
    var duration = 500;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back-to-top').fadeIn(duration);
        } else {
            jQuery('.back-to-top').fadeOut(duration);
        }
    });
    
    
	jQuery('.back-to-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    }) 
	
	 
	
});
  
  
   jQuery(document).ready(function() {
    var offset = 720;
    var duration = 500;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back-to-top').fadeIn(duration);
        } else {
            jQuery('.back-to-top').fadeOut(duration);
        }
    }); 
});


  
  jQuery(function($) {
        $(document).ready( function() {
          $('#topnav').stickUp({
                        parts: {
                          0:'topbanner',
                          1:'story',
                          2: 'team',
                          3: 'opportunity',
                          4: 'market',
                          5: 'product',
                          6: 'whas-next',
                          7: 'validation',
                          8: 'contact'
                        },
                        itemClass: 'menuItem',
                        itemHover: 'active',
                        topMargin: 'auto'
                      });
        });
      });
  
 
 
$('#welcome-nav-f').click(function(e) {
e.preventDefault();
$('html,body').animate({
scrollTop: $('#topbanner').offset().top
}, 1000);
}); 

$('#story-nav-f').click(function(e) {
e.preventDefault();
$('html,body').animate({
scrollTop: $('#story').offset().top
}, 1000);
});

$('#team-nav-f').click(function(e) {
e.preventDefault();
$('html,body').animate({
scrollTop: $('#team').offset().top
}, 1000);
});

$('#opportunity-nav-f').click(function(e) {
e.preventDefault();
$('html,body').animate({
scrollTop: $('#opportunity').offset().top
}, 1000);
});

$('#market-nav-f').click(function(e) {
e.preventDefault();
$('html,body').animate({
scrollTop: $('#market').offset().top
}, 1000);
});

$('#product-nav-f').click(function(e) {
e.preventDefault();
$('html,body').animate({
scrollTop: $('#product').offset().top
}, 1000);
});

$('#whas-next-nav-f').click(function(e) {
e.preventDefault();
$('html,body').animate({
scrollTop: $('#whas-next').offset().top
}, 1000);
});

$('#validation-nav-f').click(function(e) {
e.preventDefault();
$('html,body').animate({
scrollTop: $('#validation').offset().top
}, 1000);
});

$('#contact-nav-f').click(function(e) {
e.preventDefault();
$('html,body').animate({
scrollTop: $('#contact').offset().top
}, 1000);
});

   $('#opportunity').parallax("50%", 0.1);  
  $('#topbanner').parallax("50%", 0.5);  
   
//Animation

  wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100
      }
    );
    wow.init();
 

	 
	
//Main Carousel	
//new TiltSlider( document.getElementById( 'myslide' ) );


