document.createElement("article");  
document.createElement("footer");  
document.createElement("header");  
document.createElement("section");  
document.createElement("nav");
document.createElement("aside");
	
	
/* JCarousal JS */

function mycarousel_initCallback(carousel)
{
    // Disable autoscrolling if the user clicks the prev or next button.
   // carousel.buttonNext.bind('click', function() {
        //carousel.startAuto(0);
    //});

   // carousel.buttonPrev.bind('click', function() {
     //   carousel.startAuto(0);
   // });

    // Pause autoscrolling if the user moves with the cursor over the clip.
    carousel.clip.hover(function() {
        carousel.stopAuto();
    }, function() {
        carousel.startAuto();
    });
};


	
/* DD Slider */	

//  CARASOUL JS
 $(document).ready(function() {
 $('#mycarousel').jcarousel({
        auto: 2,
        wrap: 'last',
        initCallback: mycarousel_initCallback
    });
 
 $(document).ready(function(){

	// Validate
	// http://bassistance.de/jquery-plugins/jquery-plugin-validation/
	// http://docs.jquery.com/Plugins/Validation/
	// http://docs.jquery.com/Plugins/Validation/validate#toptions
	
		$('#wholesale-form').validate({
	    rules: {
	      name: {
	        minlength: 3,
	        required: true
	      },
	      email: {
	        required: true,
	        email: true
	      },
		phone: {
	      	number: 0,
			maxlength:11,
	        required: true
	      },
	      company: {
	      	minlength: 3,
	        required: true
	      },
		  address: {
	      	minlength: 3,
	        required: true
	      },
		  city: {
	      	minlength: 3,
	        required: true
	      },
		  postcode: {
	      	number: 0,
			maxlength:6,
	        required: true
	      },
		   subject: {
	      	minlength: 3,
	        required: true
	      },
		  
		   message: {
	      	minlength: 20,
	        required: true
	      }
	     
	    },
	    highlight: function(label) {
	    	$(label).closest('.control-group').addClass('error');
	    },
	    success: function(label) {
	    	label
	    		.text('OK!').addClass('valid')
	    		.closest('.control-group').addClass('success');
	    }
	  });
	  
});



// Window Location js
          if ((window.location.href == "http://tyreplusedinburgh.co.uk/index.html") || (window.location.href == "http://www.tyreplusedinburgh.co.uk/index.html"))
              window.location.href = "http://www.tyreplusedinburgh.co.uk"




});

