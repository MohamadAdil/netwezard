$(document).ready(function(){
	var whichToShow = Math.floor(Math.random() * $(".quote").length);
	$(".quote")
	  .hide()
	  .eq(whichToShow)
	  .fadeIn(1000);

// Footer fixed on bottom
function footerAlign() {
  $('.footer').css('height', 'auto');
  var footerHeight = $('.footer').outerHeight();
console.log(footerHeight)
  $('body').css('padding-bottom', footerHeight);
  $('.footer').css('height', footerHeight);
}


$(document).ready(function(){
  footerAlign();
});

$( window ).resize(function() {
  footerAlign();
});	  
})