$(document).ready(function(){
	//Close Promo
	$('.btn_close').click(function(event){

		 event.preventDefault();
		$( "#promo" ).slideToggle( 300, function() {});
		
	});

	


	//For Explore Button
	$('.explore_btn').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $('.explore_btn a').attr('href') ).offset().top
	    }, 500);
	    return false;
	});


	// Returns width of browser viewport
    var browser = $(window).width();
    // Returns width of HTML document
    var document = $(document).width();

    var nav = $('.mobile_menu_btn');

    nav.click(function(e){
        $('.mobile_menu').slideToggle('slow');
        e.preventDefault();
    });

   		window.addEventListener("resize", function() {

   			if($(window).width()>1023){
		  	 $('.mobile_menu').attr('style','');
   			}
		}, false);
});