// Make difference owl carousel
$(function() {
  $('#makedifference-carousel').owlCarousel({
    margin: 2,
    loop: true,
    items: 1,
	nav:true,
	autoplay:true,
	autoplayTimeout: 5000,
	 smartSpeed: 1000,
	autoplayHoverPause:true,
    stagePadding: 70,
  });
  $( ".owl-prev").html('<img src="images/icon-arrow-left-white.png" />');
 $( ".owl-next").html('<img src="images/icon-arrow-right-white.png" />');
 
 
});
$(function() {
$('.diet-dash-carousel').owlCarousel({
    loop: true,
    items: 1,
	dots: true,
	margin:10,
	nav:true,
	autoplay:true,
	autoplayTimeout: 5000,
	smartSpeed: 1000,
	autoplayHoverPause:true,
  });
  $( ".owl-prev").html('<img src="images/icon-arrow-left.png" />');
 $( ".owl-next").html('<img src="images/icon-arrow-right.png" />');
});
