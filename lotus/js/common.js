$(document).ready(function(){

	// Validate
	// http://bassistance.de/jquery-plugins/jquery-plugin-validation/
	// http://docs.jquery.com/Plugins/Validation/
	// http://docs.jquery.com/Plugins/Validation/validate#toptions
	
		$('#tablebookform').validate({
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
		   person: {
			maxlength:2,
	        required: true
	      },
			
		   time: {
			maxlength:8,
	        required: true
	      },
		   date: {
			maxlength:8,
	        required: true
	      },		  
		   message: {
	      	minlength: 20,
	        required: true
	      },		  
	
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
	  
	  $('#contact-form').validate({
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

$('#orderonline-form').validate({
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
		   message: {
	      	minlength: 10,
	        required: true
	      },		  
		   address1: {
	      	minlength: 3,
	        required: true
	      },
		   address2: {
	      	minlength: 3,
	        required: true
	      },
		   lunch: {
	      	minlength: 3,
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
