$(document).ready(function(){
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
				maxlength:15,
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
})