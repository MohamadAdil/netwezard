

window.addEventListener('DOMContentLoaded', event => {

// Toggle the side navigation
const sidebarToggle = document.body.querySelector('#sidebarToggle');
if (sidebarToggle) {
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('lu-sidenav-toggled');
            localStorage.setItem('lu|sidebar-toggle', document.body.classList.contains('lu-sidenav-toggled'));
        });
    }

});

var myElement = document.getElementById('lu-sidenav-menu');
new SimpleBar(myElement, { autoHide: true });




$(document).ready(function(){
    
var current_fs, next_fs, previous_fs; //fieldsets
var opacity;

$(".next").click(function(){
    
    current_fs = $(this).parent();
    next_fs = $(this).parent().next();
    
    //Add Class Active
    $("#progressbar li").eq($(".crate-prd-step").index(next_fs)).addClass("active");
    
    //show the next fieldset
    next_fs.show(); 
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
        step: function(now) {
            // for making fielset appear animation
            opacity = 1 - now;

            current_fs.css({
                'display': 'none',
                'position': 'relative'
            });
            next_fs.css({'opacity': opacity});
        }, 
        duration: 600
    });
});

$(".previous").click(function(){
    
    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();
    
    //Remove class active
    $("#progressbar li").eq($(".crate-prd-step").index(current_fs)).removeClass("active");
    
    //show the previous fieldset
    previous_fs.show();

    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
        step: function(now) {
            // for making fielset appear animation
            opacity = 1 - now;

            current_fs.css({
                'display': 'none',
                'position': 'relative'
            });
            previous_fs.css({'opacity': opacity});
        }, 
        duration: 600
    });
});

$('.radio-group .radio').click(function(){
    $(this).parent().find('.radio').removeClass('selected');
    $(this).addClass('selected');
});

$(".submit").click(function(){
    return false;
})
    
});


//code = 2k minified
function createAuto (i, elem) {
     var input = $(elem); 
    var dropdown = input.closest('.select-dropdown ');
    var listContainer = dropdown.find('.list-autocomplete');
    var listItems = listContainer.find('.dropdown-item');
    var hasNoResults = dropdown.find('.hasNoResults');
     listItems.hide();
    listItems.each(function() {
         $(this).data('value', $(this).text() );  
         //!important, keep this copy of the text outside of keyup/input function
    });
    input.on("input", function(e){
        if((e.keyCode ? e.keyCode : e.which) == 13)  {
            $(this).closest('.select-dropdown').removeClass('open').removeClass('in');
            return; //if enter key, close dropdown and stop
        }
        if((e.keyCode ? e.keyCode : e.which) == 9) {
            return; //if tab key, stop
        }
      var query = input.val().toLowerCase();
  if( query.length > 1) {
        dropdown.addClass('opendropdown').addClass('in');
          listItems.each(function() {
              var text = $(this).data('value');             
              if ( text.toLowerCase().indexOf(query) > -1 ) {
     var textStart = text.toLowerCase().indexOf( query );
                var textEnd = textStart + query.length;
                var htmlR = text.substring(0,textStart) + '<span>' + text.substring(textStart,textEnd) + '</span>' + text.substring(textEnd+length);
                $(this).html( htmlR );               
                $(this).show();
             } else { 
                $(this).hide(); 
              }
            });
             var count = listItems.filter(':visible').length;
            ( count > 0 ) ? hasNoResults.hide() : hasNoResults.show();

        } else {
            listItems.hide();
            dropdown.removeClass('opendropdown').removeClass('in');
            hasNoResults.show();
        }
    });
  	listItems.on('click', function(e) {
        var txt = $(this).text().replace(/^\s+|\s+$/g, "");  //remove leading and trailing whitespace
        input.val( txt );
        dropdown.removeClass('opendropdown').removeClass('in');
		});
}
$('.jAuto').each( createAuto );
//
function customFunction (i, elem) {
var input = $("#customdropdown");
var dropdown = input.closest('.select-dropdown');
  console.log(dropdown);
var listContainer = dropdown.find('.list-autocomplete');
var listItems = listContainer.find('.dropdown-item');
var hasNoResults = dropdown.find('.hasNoResults');

	var query = input.val().toLowerCase();
		dropdown.addClass('opendropdown').addClass('in');
		listItems.each(function() {
		  var text = $(this).data('value');             
			var textStart = text.toLowerCase().indexOf( query );
			var textEnd = textStart + query.length;
			var htmlR = text.substring(0,textStart) + '<span>' + text.substring(textStart,textEnd) + '</span>' + text.substring(textEnd+length);
			$(this).html( htmlR );               
			$(this).show();
		});
		var count = listItems.filter(':visible').length;
		( count > 0 ) ? hasNoResults.hide() : hasNoResults.show();

} //
$(document).on('focus', '.jAuto', function() {
    // $(this).select();  // in case input text already exists
  $('.jAuto').each( customFunction );
});
  
  $(".create-dropdown-btn").click(function(){
  $(".select-dropdown ").removeClass("opendropdown");
});

$(document).on("click", function (e) {
    if (!$(e.target).closest(".select-dropdown").length) 
        $(".select-dropdown").removeClass("opendropdown");

});





//code = 2k minified
function createAuto2 (i, elem) {
     var input = $(elem); 
    var dropdown = input.closest('.select-dropdown ');
    var listContainer = dropdown.find('.list-autocomplete');
    var listItems = listContainer.find('.dropdown-item');
    var hasNoResults = dropdown.find('.hasNoResults');
     listItems.hide();
    listItems.each(function() {
         $(this).data('value', $(this).text() );  
         //!important, keep this copy of the text outside of keyup/input function
    });
    input.on("input", function(e){
        if((e.keyCode ? e.keyCode : e.which) == 13)  {
            $(this).closest('.select-dropdown').removeClass('open').removeClass('in');
            return; //if enter key, close dropdown and stop
        }
        if((e.keyCode ? e.keyCode : e.which) == 9) {
            return; //if tab key, stop
        }
      var query = input.val().toLowerCase();
  if( query.length > 1) {
        dropdown.addClass('opendropdown').addClass('in');
          listItems.each(function() {
              var text = $(this).data('value');             
              if ( text.toLowerCase().indexOf(query) > -1 ) {
     var textStart = text.toLowerCase().indexOf( query );
                var textEnd = textStart + query.length;
                var htmlR = text.substring(0,textStart) + '<span>' + text.substring(textStart,textEnd) + '</span>' + text.substring(textEnd+length);
                $(this).html( htmlR );               
                $(this).show();
             } else { 
                $(this).hide(); 
              }
            });
             var count = listItems.filter(':visible').length;
            ( count > 0 ) ? hasNoResults.hide() : hasNoResults.show();

        } else {
            listItems.hide();
            dropdown.removeClass('opendropdown').removeClass('in');
            hasNoResults.show();
        }
    });
  	listItems.on('click', function(e) {
        var txt = $(this).text().replace(/^\s+|\s+$/g, "");  //remove leading and trailing whitespace
        input.val( txt );
        dropdown.removeClass('opendropdown').removeClass('in');
		});
}
$('.jAuto2').each( createAuto2 );
//
function customFunction2 (i, elem) {
var input = $("#customdropdown2");
var dropdown = input.closest('.select-dropdown');
  console.log(dropdown);
var listContainer = dropdown.find('.list-autocomplete');
var listItems = listContainer.find('.dropdown-item');
var hasNoResults = dropdown.find('.hasNoResults');

	var query = input.val().toLowerCase();
		dropdown.addClass('opendropdown').addClass('in');
		listItems.each(function() {
		  var text = $(this).data('value');             
			var textStart = text.toLowerCase().indexOf( query );
			var textEnd = textStart + query.length;
			var htmlR = text.substring(0,textStart) + '<span>' + text.substring(textStart,textEnd) + '</span>' + text.substring(textEnd+length);
			$(this).html( htmlR );               
			$(this).show();
		});
		var count = listItems.filter(':visible').length;
		( count > 0 ) ? hasNoResults.hide() : hasNoResults.show();

} //
$(document).on('focus', '.jAuto2', function() {
    // $(this).select();  // in case input text already exists
  $('.jAuto2').each( customFunction2 );
});













//code = 2k minified
function createAuto3 (i, elem) {
     var input = $(elem); 
    var dropdown = input.closest('.select-dropdown ');
    var listContainer = dropdown.find('.list-autocomplete');
    var listItems = listContainer.find('.dropdown-item');
    var hasNoResults = dropdown.find('.hasNoResults');
     listItems.hide();
    listItems.each(function() {
         $(this).data('value', $(this).text() );  
         //!important, keep this copy of the text outside of keyup/input function
    });
    input.on("input", function(e){
        if((e.keyCode ? e.keyCode : e.which) == 13)  {
            $(this).closest('.select-dropdown').removeClass('open').removeClass('in');
            return; //if enter key, close dropdown and stop
        }
        if((e.keyCode ? e.keyCode : e.which) == 9) {
            return; //if tab key, stop
        }
      var query = input.val().toLowerCase();
  if( query.length > 1) {
        dropdown.addClass('opendropdown').addClass('in');
          listItems.each(function() {
              var text = $(this).data('value');             
              if ( text.toLowerCase().indexOf(query) > -1 ) {
     var textStart = text.toLowerCase().indexOf( query );
                var textEnd = textStart + query.length;
                var htmlR = text.substring(0,textStart) + '<span>' + text.substring(textStart,textEnd) + '</span>' + text.substring(textEnd+length);
                $(this).html( htmlR );               
                $(this).show();
             } else { 
                $(this).hide(); 
              }
            });
             var count = listItems.filter(':visible').length;
            ( count > 0 ) ? hasNoResults.hide() : hasNoResults.show();

        } else {
            listItems.hide();
            dropdown.removeClass('opendropdown').removeClass('in');
            hasNoResults.show();
        }
    });
  	listItems.on('click', function(e) {
        var txt = $(this).text().replace(/^\s+|\s+$/g, "");  //remove leading and trailing whitespace
        input.val( txt );
        dropdown.removeClass('opendropdown').removeClass('in');
		});
}
$('.jAuto3').each( createAuto3 );
//
function customFunction3 (i, elem) {
var input = $("#customdropdown3");
var dropdown = input.closest('.select-dropdown');
  console.log(dropdown);
var listContainer = dropdown.find('.list-autocomplete');
var listItems = listContainer.find('.dropdown-item');
var hasNoResults = dropdown.find('.hasNoResults');

	var query = input.val().toLowerCase();
		dropdown.addClass('opendropdown').addClass('in');
		listItems.each(function() {
		  var text = $(this).data('value');             
			var textStart = text.toLowerCase().indexOf( query );
			var textEnd = textStart + query.length;
			var htmlR = text.substring(0,textStart) + '<span>' + text.substring(textStart,textEnd) + '</span>' + text.substring(textEnd+length);
			$(this).html( htmlR );               
			$(this).show();
		});
		var count = listItems.filter(':visible').length;
		( count > 0 ) ? hasNoResults.hide() : hasNoResults.show();

} //
$(document).on('focus', '.jAuto3', function() {
    // $(this).select();  // in case input text already exists
  $('.jAuto3').each( customFunction3 );
});








//code = 2k minified
function createAuto4 (i, elem) {
     var input = $(elem); 
    var dropdown = input.closest('.select-dropdown ');
    var listContainer = dropdown.find('.list-autocomplete');
    var listItems = listContainer.find('.dropdown-item');
    var hasNoResults = dropdown.find('.hasNoResults');
     listItems.hide();
    listItems.each(function() {
         $(this).data('value', $(this).text() );  
         //!important, keep this copy of the text outside of keyup/input function
    });
    input.on("input", function(e){
        if((e.keyCode ? e.keyCode : e.which) == 13)  {
            $(this).closest('.select-dropdown').removeClass('open').removeClass('in');
            return; //if enter key, close dropdown and stop
        }
        if((e.keyCode ? e.keyCode : e.which) == 9) {
            return; //if tab key, stop
        }
      var query = input.val().toLowerCase();
  if( query.length > 1) {
        dropdown.addClass('opendropdown').addClass('in');
          listItems.each(function() {
              var text = $(this).data('value');             
              if ( text.toLowerCase().indexOf(query) > -1 ) {
     var textStart = text.toLowerCase().indexOf( query );
                var textEnd = textStart + query.length;
                var htmlR = text.substring(0,textStart) + '<span>' + text.substring(textStart,textEnd) + '</span>' + text.substring(textEnd+length);
                $(this).html( htmlR );               
                $(this).show();
             } else { 
                $(this).hide(); 
              }
            });
             var count = listItems.filter(':visible').length;
            ( count > 0 ) ? hasNoResults.hide() : hasNoResults.show();

        } else {
            listItems.hide();
            dropdown.removeClass('opendropdown').removeClass('in');
            hasNoResults.show();
        }
    });
  	listItems.on('click', function(e) {
        var txt = $(this).text().replace(/^\s+|\s+$/g, "");  //remove leading and trailing whitespace
        input.val( txt );
        dropdown.removeClass('opendropdown').removeClass('in');
		});
}
$('.jAuto4').each( createAuto4 );
//
function customFunction4 (i, elem) {
var input = $("#customdropdown4");
var dropdown = input.closest('.select-dropdown');
  console.log(dropdown);
var listContainer = dropdown.find('.list-autocomplete');
var listItems = listContainer.find('.dropdown-item');
var hasNoResults = dropdown.find('.hasNoResults');

	var query = input.val().toLowerCase();
		dropdown.addClass('opendropdown').addClass('in');
		listItems.each(function() {
		  var text = $(this).data('value');             
			var textStart = text.toLowerCase().indexOf( query );
			var textEnd = textStart + query.length;
			var htmlR = text.substring(0,textStart) + '<span>' + text.substring(textStart,textEnd) + '</span>' + text.substring(textEnd+length);
			$(this).html( htmlR );               
			$(this).show();
		});
		var count = listItems.filter(':visible').length;
		( count > 0 ) ? hasNoResults.hide() : hasNoResults.show();

} //
$(document).on('focus', '.jAuto4', function() {
    // $(this).select();  // in case input text already exists
  $('.jAuto4').each( customFunction4 );
});










//code = 2k minified
function createAuto5 (i, elem) {
     var input = $(elem); 
    var dropdown = input.closest('.select-dropdown ');
    var listContainer = dropdown.find('.list-autocomplete');
    var listItems = listContainer.find('.dropdown-item');
    var hasNoResults = dropdown.find('.hasNoResults');
     listItems.hide();
    listItems.each(function() {
         $(this).data('value', $(this).text() );  
         //!important, keep this copy of the text outside of keyup/input function
    });
    input.on("input", function(e){
        if((e.keyCode ? e.keyCode : e.which) == 13)  {
            $(this).closest('.select-dropdown').removeClass('open').removeClass('in');
            return; //if enter key, close dropdown and stop
        }
        if((e.keyCode ? e.keyCode : e.which) == 9) {
            return; //if tab key, stop
        }
      var query = input.val().toLowerCase();
  if( query.length > 0) {
        dropdown.addClass('opendropdown').addClass('in');
          listItems.each(function() {
              var text = $(this).data('value');             
              if ( text.toLowerCase().indexOf(query) > -1 ) {
     var textStart = text.toLowerCase().indexOf( query );
                var textEnd = textStart + query.length;
                var htmlR = text.substring(0,textStart) + '<span>' + text.substring(textStart,textEnd) + '</span>' + text.substring(textEnd+length);
                $(this).html( htmlR );               
                $(this).show();
             } else { 
                $(this).hide(); 
              }
            });
             var count = listItems.filter(':visible').length;
            ( count > 0 ) ? hasNoResults.hide() : hasNoResults.show();

        } else {
            listItems.hide();
            dropdown.removeClass('opendropdown').removeClass('in');
            hasNoResults.show();
        }
    });
  	listItems.on('click', function(e) {
        var txt = $(this).text().replace(/^\s+|\s+$/g, "");  //remove leading and trailing whitespace
        input.val( txt );
        dropdown.removeClass('opendropdown').removeClass('in');
		});
}
$('.jAuto5').each( createAuto5 );
//
function customFunction5 (i, elem) {
var input = $("#create-new-variation1");
var dropdown = input.closest('.select-dropdown');
  console.log(dropdown);
var listContainer = dropdown.find('.list-autocomplete');
var listItems = listContainer.find('.dropdown-item');
var hasNoResults = dropdown.find('.hasNoResults');

	var query = input.val().toLowerCase();
		dropdown.addClass('opendropdown').addClass('in');
		listItems.each(function() {
		  var text = $(this).data('value');             
			var textStart = text.toLowerCase().indexOf( query );
			var textEnd = textStart + query.length;
			var htmlR = text.substring(0,textStart) + '<span>' + text.substring(textStart,textEnd) + '</span>' + text.substring(textEnd+length);
			$(this).html( htmlR );               
			$(this).show();
		});
		var count = listItems.filter(':visible').length;
		( count < 0 ) ? hasNoResults.hide() : hasNoResults.show();

} //
$(document).on('focus', '.jAuto5', function() {
    // $(this).select();  // in case input text already exists
  $('.jAuto5').each( customFunction5 );
});












//code = 2k minified
function createAuto6 (i, elem) {
     var input = $(elem); 
    var dropdown = input.closest('.select-dropdown ');
    var listContainer = dropdown.find('.list-autocomplete');
    var listItems = listContainer.find('.dropdown-item');
    var hasNoResults = dropdown.find('.hasNoResults');
     listItems.hide();
    listItems.each(function() {
         $(this).data('value', $(this).text() );  
         //!important, keep this copy of the text outside of keyup/input function
    });
    input.on("input", function(e){
        if((e.keyCode ? e.keyCode : e.which) == 13)  {
            $(this).closest('.select-dropdown').removeClass('open').removeClass('in');
            return; //if enter key, close dropdown and stop
        }
        if((e.keyCode ? e.keyCode : e.which) == 9) {
            return; //if tab key, stop
        }
      var query = input.val().toLowerCase();
  if( query.length > 0) {
        dropdown.addClass('opendropdown').addClass('in');
          listItems.each(function() {
              var text = $(this).data('value');             
              if ( text.toLowerCase().indexOf(query) > -1 ) {
     var textStart = text.toLowerCase().indexOf( query );
                var textEnd = textStart + query.length;
                var htmlR = text.substring(0,textStart) + '<span>' + text.substring(textStart,textEnd) + '</span>' + text.substring(textEnd+length);
                $(this).html( htmlR );               
                $(this).show();
             } else { 
                $(this).hide(); 
              }
            });
             var count = listItems.filter(':visible').length;
            ( count > 0 ) ? hasNoResults.hide() : hasNoResults.show();

        } else {
            listItems.hide();
            dropdown.removeClass('opendropdown').removeClass('in');
            hasNoResults.show();
        }
    });
  	listItems.on('click', function(e) {
        var txt = $(this).text().replace(/^\s+|\s+$/g, "");  //remove leading and trailing whitespace
        input.val( txt );
        dropdown.removeClass('opendropdown').removeClass('in');
		});
}
$('.jAuto6').each( createAuto6 );
//
function customFunction6 (i, elem) {
var input = $("#create-new-variation2");
var dropdown = input.closest('.select-dropdown');
  console.log(dropdown);
var listContainer = dropdown.find('.list-autocomplete');
var listItems = listContainer.find('.dropdown-item');
var hasNoResults = dropdown.find('.hasNoResults');

	var query = input.val().toLowerCase();
		dropdown.addClass('opendropdown').addClass('in');
		listItems.each(function() {
		  var text = $(this).data('value');             
			var textStart = text.toLowerCase().indexOf( query );
			var textEnd = textStart + query.length;
			var htmlR = text.substring(0,textStart) + '<span>' + text.substring(textStart,textEnd) + '</span>' + text.substring(textEnd+length);
			$(this).html( htmlR );               
			$(this).show();
		});
		var count = listItems.filter(':visible').length;
		( count < 0 ) ? hasNoResults.hide() : hasNoResults.show();

} //
$(document).on('focus', '.jAuto6', function() {
    // $(this).select();  // in case input text already exists
  $('.jAuto5').each( customFunction6 );
});






//code = 2k minified
function createAuto7 (i, elem) {
     var input = $(elem); 
    var dropdown = input.closest('.select-dropdown ');
    var listContainer = dropdown.find('.list-autocomplete');
    var listItems = listContainer.find('.dropdown-item');
    var hasNoResults = dropdown.find('.hasNoResults');
     listItems.hide();
    listItems.each(function() {
         $(this).data('value', $(this).text() );  
         //!important, keep this copy of the text outside of keyup/input function
    });
    input.on("input", function(e){
        if((e.keyCode ? e.keyCode : e.which) == 13)  {
            $(this).closest('.select-dropdown').removeClass('open').removeClass('in');
            return; //if enter key, close dropdown and stop
        }
        if((e.keyCode ? e.keyCode : e.which) == 9) {
            return; //if tab key, stop
        }
      var query = input.val().toLowerCase();
  if( query.length > 1) {
        dropdown.addClass('opendropdown').addClass('in');
          listItems.each(function() {
              var text = $(this).data('value');             
              if ( text.toLowerCase().indexOf(query) > -1 ) {
     var textStart = text.toLowerCase().indexOf( query );
                var textEnd = textStart + query.length;
                var htmlR = text.substring(0,textStart) + '<span>' + text.substring(textStart,textEnd) + '</span>' + text.substring(textEnd+length);
                $(this).html( htmlR );               
                $(this).show();
             } else { 
                $(this).hide(); 
              }
            });
             var count = listItems.filter(':visible').length;
            ( count > 0 ) ? hasNoResults.hide() : hasNoResults.show();

        } else {
            listItems.hide();
            dropdown.removeClass('opendropdown').removeClass('in');
            hasNoResults.show();
        }
    });
  	listItems.on('click', function(e) {
        var txt = $(this).text().replace(/^\s+|\s+$/g, "");  //remove leading and trailing whitespace
        input.val( txt );
        dropdown.removeClass('opendropdown').removeClass('in');
		});
}
$('.jAuto7').each( createAuto7 );
//
function customFunction7 (i, elem) {
var input = $("#customdropdown7");
var dropdown = input.closest('.select-dropdown');
  console.log(dropdown);
var listContainer = dropdown.find('.list-autocomplete');
var listItems = listContainer.find('.dropdown-item');
var hasNoResults = dropdown.find('.hasNoResults');

	var query = input.val().toLowerCase();
		dropdown.addClass('opendropdown').addClass('in');
		listItems.each(function() {
		  var text = $(this).data('value');             
			var textStart = text.toLowerCase().indexOf( query );
			var textEnd = textStart + query.length;
			var htmlR = text.substring(0,textStart) + '<span>' + text.substring(textStart,textEnd) + '</span>' + text.substring(textEnd+length);
			$(this).html( htmlR );               
			$(this).show();
		});
		var count = listItems.filter(':visible').length;
		( count > 0 ) ? hasNoResults.hide() : hasNoResults.show();

} //
$(document).on('focus', '.jAuto7', function() {
    // $(this).select();  // in case input text already exists
  $('.jAuto7').each( customFunction7 );
});



//code = 2k minified
function createAuto8 (i, elem) {
     var input = $(elem); 
    var dropdown = input.closest('.select-dropdown ');
    var listContainer = dropdown.find('.list-autocomplete');
    var listItems = listContainer.find('.dropdown-item');
    var hasNoResults = dropdown.find('.hasNoResults');
     listItems.hide();
    listItems.each(function() {
         $(this).data('value', $(this).text() );  
         //!important, keep this copy of the text outside of keyup/input function
    });
    input.on("input", function(e){
        if((e.keyCode ? e.keyCode : e.which) == 13)  {
            $(this).closest('.select-dropdown').removeClass('open').removeClass('in');
            return; //if enter key, close dropdown and stop
        }
        if((e.keyCode ? e.keyCode : e.which) == 9) {
            return; //if tab key, stop
        }
      var query = input.val().toLowerCase();
  if( query.length > 1) {
        dropdown.addClass('opendropdown').addClass('in');
          listItems.each(function() {
              var text = $(this).data('value');             
              if ( text.toLowerCase().indexOf(query) > -1 ) {
     var textStart = text.toLowerCase().indexOf( query );
                var textEnd = textStart + query.length;
                var htmlR = text.substring(0,textStart) + '<span>' + text.substring(textStart,textEnd) + '</span>' + text.substring(textEnd+length);
                $(this).html( htmlR );               
                $(this).show();
             } else { 
                $(this).hide(); 
              }
            });
             var count = listItems.filter(':visible').length;
            ( count > 0 ) ? hasNoResults.hide() : hasNoResults.show();

        } else {
            listItems.hide();
            dropdown.removeClass('opendropdown').removeClass('in');
            hasNoResults.show();
        }
    });
  	listItems.on('click', function(e) {
        var txt = $(this).text().replace(/^\s+|\s+$/g, "");  //remove leading and trailing whitespace
        input.val( txt );
        dropdown.removeClass('opendropdown').removeClass('in');
		});
}
$('.jAuto8').each( createAuto8 );
//
function customFunction8 (i, elem) {
var input = $("#customdropdown8");
var dropdown = input.closest('.select-dropdown');
  console.log(dropdown);
var listContainer = dropdown.find('.list-autocomplete');
var listItems = listContainer.find('.dropdown-item');
var hasNoResults = dropdown.find('.hasNoResults');

	var query = input.val().toLowerCase();
		dropdown.addClass('opendropdown').addClass('in');
		listItems.each(function() {
		  var text = $(this).data('value');             
			var textStart = text.toLowerCase().indexOf( query );
			var textEnd = textStart + query.length;
			var htmlR = text.substring(0,textStart) + '<span>' + text.substring(textStart,textEnd) + '</span>' + text.substring(textEnd+length);
			$(this).html( htmlR );               
			$(this).show();
		});
		var count = listItems.filter(':visible').length;
		( count > 0 ) ? hasNoResults.hide() : hasNoResults.show();

} //
$(document).on('focus', '.jAuto8', function() {
    // $(this).select();  // in case input text already exists
  $('.jAuto8').each( customFunction8 );
});





$('.btn-create-prd').on('click', function() {
	setTimeout(function () {
  $('body').addClass('product-modal');
  return false;
  }, 1500);
});
  
  $('.prd-modal-close').on('click', function() {
  $('body').removeClass('product-modal');
  return false;
})
 
 $(document).on('focus', '#customdropdown4', function() {
 
  $('.empty-variation').addClass('d-none');
  $('.add-variation-size').removeClass('d-none');
  return false;
})
 
 
$('.add-variation.set-1-modal .click-show-v-list').on('click', function() {
$('.variations-intro').addClass('d-none');
$('.variations-entry-detail').removeClass('d-none');
$('.add-variations .next').removeClass('d-none');
$('.add-variations .previous ').removeClass('d-none');
  return false;
})


$('.add-variation.set-2-modal .add-multiple-v-btn').on('click', function() {
$('.select-dropdown').addClass('d-none');
$('.add-variation-size').addClass('d-none');
$('.add-multiple-v-btn').addClass('d-none');
$('.create-v-btn ').removeClass('d-none');
$('.add-multiple-variation ').removeClass('d-none');
  return false;
})



document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
        const dropZoneElement = inputElement.closest(".drop-zone");

        dropZoneElement.addEventListener("click", (event) => {
          inputElement.click(); /*clicking on input element whenever the dropzone is clicked so file browser is opened*/
        });

        inputElement.addEventListener("change", (event) => {
          if (inputElement.files.length) {
            updateThumbnail(dropZoneElement, inputElement.files[0]);
          }
        });

        dropZoneElement.addEventListener("dragover", (event) => {
          event.preventDefault(); /*this along with prevDef in drop event prevent browser from opening file in a new tab*/
          dropZoneElement.classList.add("drop-zone--over");
        });
        ["dragleave", "dragend"].forEach((type) => {
          dropZoneElement.addEventListener(type, (event) => {
            dropZoneElement.classList.remove("drop-zone--over");
          });
        });
        dropZoneElement.addEventListener("drop", (event) => {
          event.preventDefault();
          console.log(
            event.dataTransfer.files
          ); /*if you console.log only event and check the same data location, you won't see the file due to a chrome bug!*/
          if (event.dataTransfer.files.length) {
            inputElement.files =
              event.dataTransfer.files; /*asigns dragged file to inputElement*/

            updateThumbnail(
              dropZoneElement,
              event.dataTransfer.files[0]
            ); /*thumbnail will only show first file if multiple files are selected*/
          }
          dropZoneElement.classList.remove("drop-zone--over");
        });
      });
      function updateThumbnail(dropZoneElement, file) {
        let thumbnailElement = dropZoneElement.querySelector(
          ".drop-zone__thumb"
        );
        /*remove text prompt*/
        if (dropZoneElement.querySelector(".drop-zone__prompt")) {
          dropZoneElement.querySelector(".drop-zone__prompt").remove();
        }

        /*first time there won't be a thumbnailElement so it has to be created*/
        if (!thumbnailElement) {
          thumbnailElement = document.createElement("div");
          thumbnailElement.classList.add("drop-zone__thumb");
          dropZoneElement.appendChild(thumbnailElement);
        }
        thumbnailElement.dataset.label =
          file.name; /*takes file name and sets it as dataset label so css can display it*/

        /*show thumbnail for images*/
        if (file.type.startsWith("image/")) {
          const reader = new FileReader(); /*lets us read files to data URL*/
          reader.readAsDataURL(file); /*base 64 format*/
          reader.onload = () => {
            thumbnailElement.style.backgroundImage = `url('${reader.result}')`; /*asynchronous call. This function runs once reader is done reading file. reader.result is the base 64 format*/
            thumbnailElement.style.backgroundPosition = "center";
          };
        } else {
          thumbnailElement.style.backgroundImage = null; /*plain background for non image type files*/
        }
      }

// Right Sidebar JS
$('.right-sidebar-toggle').click(function(){
  $('.studios-right-sidebar').addClass('active');
   $('.sidebar-overlay').addClass('active');
   $('body').addClass('removescroll');
});
$('.btn-close-sidebar').click(function(){
  $('.studios-right-sidebar.active').removeClass('active');
  $('.sidebar-overlay').removeClass('active');
  $('body').removeClass('removescroll');
});
$('.sidebar-overlay').click(function(){
  $('.studios-right-sidebar.active').removeClass('active');
  $('.sidebar-overlay').removeClass('active');
   $('body').removeClass('removescroll');
});


$(document).ready(function() {
$('.simple-select').multiselect({
includeSelectAllOption: false,
});
});

$(document).ready(function() {
$('.dataFilter').multiselect({
includeSelectAllOption: false,
});
});
	
$(document).ready(function() {
$('.dataFiltervendor').multiselect({
includeSelectAllOption: true,
nonSelectedText: 'All Vendors'
});
});

$(document).ready(function() {
$('.dataFilterVariations').multiselect({
includeSelectAllOption: false,
nonSelectedText: 'Choose Variations'
});
});