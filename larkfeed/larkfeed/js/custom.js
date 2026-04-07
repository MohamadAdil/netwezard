// Scroll FIXED HEADER

$(window).scroll(function() {
  if ($(document).scrollTop() > 0 ){
    $('#header').addClass('shrink');
  } else {
    $('#header').removeClass('shrink');
  };
  

  
});


// Top nav dropdown menu
//$('ul.nav li.dropdown').hover(function() {
//	  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
//	}, function() {
//	  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
//	});
	
//Homepage Caraousal
$('.carousel').carousel({ interval: 7000 }, 'cycle');

// Caraousal

$('.products-carousel').carousel({
    pause: true,
    interval: 4000,
  });
  
  $( "ul li.parent" ).click(function() {
  $( ".child" ).toggle( "slow", function() {
    // Animation complete.
  });
});

// Faded slideshow
var myIndex = 0;
slidershow();

function slidershow() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(slidershow, 5000);    
}