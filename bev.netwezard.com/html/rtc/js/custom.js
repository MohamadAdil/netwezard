$(document).ready(function(){
$('.awards-logo-mobile').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 300,
    fade: true,
    slidesToShow: 1,
    adaptiveHeight: true,
  });
  $('.internet-favorite-slider').slick({
    dots: true,
    arrows: true,
    autoplay: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    centerMode: true,
    centerPadding: '120px',
    responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 3
      }
    },
      {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        centerMode: false,
        slidesToShow: 1,
        dots: true,
      }
    }
  ]
  });
  
  $('.customer-reviews').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 300,
    fade: false,
    slidesToShow: 3,
    responsive: [
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        centerMode: false,
        fade: true,
        slidesToShow: 1,
        dots: true,
      }
    }
  ]
  });

  /* Equal Column Height */
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
         equalColumns('.favorite-box');
       }, 500);
   }, false);
   setTimeout(function(){
        equalColumns('.favorite-box');
   }, 500);
   /* Carat/New window icon Next Line  */

});

// Custom Select Box JS
function create_custom_dropdowns() {
  $('.custom-own-selectbox select').each(function(i, select) {
    if (!$(this).next().hasClass('custom-selectbox')) {
      $(this).after('<div class="custom-selectbox ' + ($(this).attr('class') || '') + '" tabindex="0"><span class="current"></span><div class="list"><ul></ul></div></div>');
      var dropdown = $(this).next();
      var options = $(select).find('option');
      var selected = $(this).find('option:selected');
      dropdown.find('.current').html(selected.data('display-text') || selected.text());
      options.each(function(j, o) {
        var display = $(o).data('display-text') || '';
        dropdown.find('ul').append('<li class="option ' + ($(o).is(':selected') ? 'selected' : '') + '" data-value="' + $(o).val() + '" data-display-text="' + display + '">' + $(o).text() + '</li>');
      });
    }
  });
}

// Event listeners

// Open/close
$(document).on('click', '.custom-selectbox', function(event) {
  $('.custom-selectbox').not($(this)).removeClass('open');
  $(this).toggleClass('open');
  if ($(this).hasClass('open')) {
    $(this).find('.option').attr('tabindex', 0);
    $(this).find('.selected').focus();
  } else {
    $(this).find('.option').removeAttr('tabindex');
    $(this).focus();
  }
});
// Close when clicking outside
$(document).on('click', function(event) {
  if ($(event.target).closest('.custom-selectbox').length === 0) {
    $('.custom-selectbox').removeClass('open');
    $('.custom-selectbox .option').removeAttr('tabindex');
  }
  event.stopPropagation();
});
// Option click
$(document).on('click', '.custom-selectbox .option', function(event) {
  $(this).closest('.list').find('.selected').removeClass('selected');
  $(this).addClass('selected');
  var text = $(this).data('display-text') || $(this).text();
  $(this).closest('.custom-selectbox').find('.current').text(text);
  $(this).closest('.custom-selectbox').prev('select').val($(this).data('value')).trigger('change');
});

// Keyboard events
$(document).on('keydown', '.custom-selectbox', function(event) {
  var focused_option = $($(this).find('.list .option:focus')[0] || $(this).find('.list .option.selected')[0]);
  // Space or Enter
  if (event.keyCode == 32 || event.keyCode == 13) {
    if ($(this).hasClass('open')) {
      focused_option.trigger('click');
    } else {
      $(this).trigger('click');
    }
    return false;
    // Down
  } else if (event.keyCode == 40) {
    if (!$(this).hasClass('open')) {
      $(this).trigger('click');
    } else {
      focused_option.next().focus();
    }
    return false;
    // Up
  } else if (event.keyCode == 38) {
    if (!$(this).hasClass('open')) {
      $(this).trigger('click');
    } else {
      var focused_option = $($(this).find('.list .option:focus')[0] || $(this).find('.list .option.selected')[0]);
      focused_option.prev().focus();
    }
    return false;
  // Esc
  } else if (event.keyCode == 27) {
    if ($(this).hasClass('open')) {
      $(this).trigger('click');
    }
    return false;
  }
});

  create_custom_dropdowns();


// FAQ JS
$(function() {
    $('.acc_ctrl').on('click', function(e) {
      e.preventDefault();
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).next()
        .stop()
        .slideUp(300);
      } else {
        $(this).addClass('active');
        $(this).next()
        .stop()
        .slideDown(300);
      }
    });
  });

// Quantity Incremenet Decrement JS
var minVal = 1, maxVal = 20; // Set Max and Min values
// Increase product quantity on cart page
$(".increaseQty").on('click', function(){
    var $parentElm = $(this).parents(".qtySelector");
    $(this).addClass("clicked");
    setTimeout(function(){
      $(".clicked").removeClass("clicked");
    },100);
    var value = $parentElm.find(".qtyValue").val();
    if (value < maxVal) {
      value++;
    }
    $parentElm.find(".qtyValue").val(value);
});
// Decrease product quantity on cart page
$(".decreaseQty").on('click', function(){
    var $parentElm = $(this).parents(".qtySelector");
    $(this).addClass("clicked");
    setTimeout(function(){
      $(".clicked").removeClass("clicked");
    },100);
    var value = $parentElm.find(".qtyValue").val();
    if (value > 1) {
      value--;
    }
    $parentElm.find(".qtyValue").val(value);
  });

// Smooth Scroll
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
});