/* Function of HOMEPAGE FLEX SLIDER */
$(document).ready(function(){
 $(window).load(function() {
    $('.flexslider').flexslider();
  });
// Form validation

	$('#contact-form').validate({
			rules: {
				fname: {
				minlength: 3,
				required: true
			  },
			  lname: {
				minlength: 3,
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
})