// Scroll FIXED HEADER

$(window).scroll(function() {
  if ($(document).scrollTop() > 30 ){
    $('#header').addClass('shrink');
  } else {
    $('#header').removeClass('shrink');
  };   
});
$(document).ready(function(){

    $("body").click(function(){
		$('.navbar-collapse.collapse').slideUp('500');
    });
});