$(document).ready(function(){
	$('ul.store-tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.store-tabs li').removeClass('current');
		$('.store-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})
// Jump to Next Input
$(".outer-screen .container .user-row .password-wrapper input").keyup(function () {
    if (this.value.length == this.maxLength) {
      $(this).next('.outer-screen .container .user-row .password-wrapper input').focus();
    }
});

// Responsive Tab Accordion
 // tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    $(".tab_content").hide();
    $(".tab_content:first").show();

  /* if in tab mode */
    $("ul.category-tabs li").click(function() {
		
      $(".tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();		
		
      $("ul.category-tabs li").removeClass("active");
      $(this).addClass("active");

	  $(".tab_drawer_heading").removeClass("d_active");
	  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
	  
    });
	/* if in drawer mode */
	$(".tab_drawer_heading").click(function() {
      
      $(".tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
	  
	  $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");
	  
	  $("ul.category-tabs li").removeClass("active");
	  $("ul.category-tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });
	
	
	/* Extra class "tab_last" 
	   to add border to right side
	   of last tab */
	$('ul.category-tabs li').last().addClass("tab_last");

//Wrapper height 100% to fit the screen if content is less
function sitewrapper (){
    var headerHeight = $('#site-header').outerHeight();
    var windowHeight = $(window).height();
    var wrapperHeight = windowHeight - headerHeight;
    $('.site-wrapper').css('min-height', wrapperHeight);
}
$(window).on('resize load', function(){
    sitewrapper ();
})

// Choose Studio Center
$('.choose-studio .container .studio-box').click(function(){
    $('.choose-studio .container .studio-box').removeClass('active');
    $(this).addClass('active');
    $('.choose-studio .store-btn-lg.disabled').removeClass('disabled');
    $('.choose-studio .store-btn-lg').addClass('store-btn-blue');
})

// Toggle class
$('.outer-screen .container .user-row .user-box').click(function(){
    $(this).toggleClass('active');
})
$('.site-wrapper .left-section .product-box .product-ribbon').click(function(){
    $(this).toggleClass('active');
})
  //AOS
AOS.init();

// Quantity Increment Decrement
var value = 1
$(".counter").val(value);
$('.increment').on("click", function() {
  value = parseInt(value+1);
  $(".counter").val(value);
  $('.decrement').removeClass('disabled');
});
$('.decrement').on("click", function(){
  if(value > 1){
    value = parseInt(value-1);
    $(".counter").val(value);
  }else{
    value = 1;
    $(".counter").val(value);
    $('.decrement').addClass('disabled');
  }
});

// Sidebar JS
$('.toggle-menu').click(function(){
  $('.sidebar-menu').addClass('active');
   $('.overlay').addClass('active');
});
$('.close-toggle').click(function(){
  $('.sidebar-menu.active').removeClass('active');
  $('.overlay').removeClass('active');
});
$('.overlay').click(function(){
  $('.sidebar-menu.active').removeClass('active');
  $('.overlay').removeClass('active');
});

// Refund Tab box
$('ul.refund-tabs li').click(function(){
  var tab_id = $(this).attr('data-tab');

  $('ul.refund-tabs li').removeClass('current');
  $('.refund-tab-content').removeClass('current');

  $(this).addClass('current');
  $("#"+tab_id).addClass('current');
})
})








// Equal Column Height
function equalColumns(htmlElements){
    $(htmlElements).removeAttr('style');
    var heights = $(htmlElements).map(function() {
        return $(this).height();
    }).get(),
    maxHeight = Math.max.apply(null, heights);
    $(htmlElements).height(maxHeight);
}
$(window).bind("load", function() {
    window.addEventListener("resize", function() {
        // Get screen size (inner/outerWidth, inner/outerHeight)
        setTimeout(function(){
            equalColumns('.site-wrapper .left-section .product-box .image-container');
            equalColumns('.site-wrapper .left-section .product-box .content h4');
        }, 500);
    }, false);
    setTimeout(function(){
        equalColumns('.site-wrapper .left-section .product-box .image-container');
        equalColumns('.site-wrapper .left-section .product-box .content h4');
    }, 500);
});

$(window).on('load', function(){
    // Cart Product Image Slider
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // fade: true,
        asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: false,
        focusOnSelect: true
        });
})