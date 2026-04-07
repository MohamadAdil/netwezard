$(document).ready(function(){
	$(document).on('click','.btn_close',function(event){
		 event.preventDefault();
		$( "#promo" ).slideToggle( "slow", function() {});
	});

	



	$('.explore_btn').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $('.explore_btn a').attr('href') ).offset().top
	    }, 500);
	    return false;
	});
});