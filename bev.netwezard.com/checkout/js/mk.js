/*

$(document).on('click','[data-action="billing"]',function() {
  if($(this).data('slide')) $('#payFldToggle').stop().slideDown();
  else                      $('#payFldToggle').stop().slideUp();

  $(this).find('input').prop('checked',true);
});



$(document).ready(function() {
  $('.summry-toggle-mob').click(function() {
    $('#toggle-mob-cart').toggleClass('isopened');

    $('.sm-txt').toggle();
  });
});


jQuery(document).ready(function($) {
  $('form').submit(function() {
    $('form').find('[type="submit"]').attr('disabled',true);

    $('.gateway-vantiv').css('opacity',0.50);

    var error=[];

    $.ajax({
      type: 'POST',
      url: 'index.php?step=check&gateway=<?=$get[gateway]?>',
      data: $('form').serialize(),
      success: function(data) {
        data = jQuery.parseJSON(data);

        $('.error').remove();

        $('.error-data').removeClass('error-data');

        if(!data.id) {
          $('form').find('[type="submit"]').attr('disabled',false);

          $('.gateway-vantiv').css('opacity',1.00);

          alert('Session Expired');
        } else if(data.error) {
          var error_field=[];

          for(key in data.error) {
            $('body').append('<div id="error-'+key+'" class="error">'+data.error[key]+'</div>');

            $('#form-'+key).addClass('error-data');

            error_field[error_field.length] = key;
          }

          $('form').find('[type="submit"]').attr('disabled',false);

          $('.gateway-vantiv').css('opacity',1.00);

          $(document).trigger('form');

          if($(window).width() < 900) {
            $('html,body').animate({
              scrollTop: $("#form-"+error_field[0]).offset().top-34
            },500);
          }
        } else {
          $.ajax({
            type: 'POST',
            url: 'index.php?gateway=<?=$get[gateway]?>',
            data: $('form').serialize(),
            success: function(data) {
              data = jQuery.parseJSON(data);

              if(data.redirect) {
                window.location = data.redirect;
              }

              if(data.alert) {
                $('form').find('[type="submit"]').attr('disabled',false);

                $('.gateway-vantiv').css('opacity',1.00);

                alert(data.alert);
              }
            }
          });
        }
      }
    });

    return false;
  });

  $(window).resize(function() {
    $(document).trigger('form');
  });

  var id;
  $(document).on('form',function() {
    $('.error').each(function () {
       id = this.id.replace('error-','');

       $('#error-'+id).css('opacity',0.50);

       $('#error-'+id).css('top',$('#form-'+id).offset().top+1);
       $('#error-'+id).css('left',$('#form-'+id).offset().left+$('#form-'+id).innerWidth()-$('#error-'+id).innerWidth()-3);
    });
  });

  $(document).on('cart',function() {
    $('#cart-paypal').css('opacity',0.50);
    $('#cart-vantiv').css('opacity',0.50);

    var country = $('#form-customer_shipping_country').val().split('|');

    var state = '';

    $('.form-customer_shipping_state').each(function(key,value) {
      if($(this).css('display') == 'block') state = $(this).val().split('|');
    });

    var url = [];
    $('[data-type="product"]').each(function(key,value) {
      var variant = $(this).data('variant');

      if(key == 0 && $('#form-variant').val().length) variant = $('#form-variant').val();

      if(!$(this).data('option')) {
        url[url.length] = 'product[]='+$(this).data('quantity')+':'+variant;
      }
    });

    $('[data-type="product_option"]').each(function(key,value) {
      if($(this).find('input[type="checkbox"]').is(':checked')) {
        url[url.length] = 'product_option[]=1:'+$(this).data('variant');
      } else {
        url[url.length] = 'product_option[]=0:'+$(this).data('variant');
      }
    });

    url = 'index.php?page=v2&'+url.join('&')+'&country='+country[0]+'&state='+state[0]+'&zip='+$('#form-customer_shipping_zip').val()+'&discount='+$('#form-discount').val()+'&subscription='+$('#form-subscription').val();

    $.ajax({
      url: url,
      success: function(response) {
        $('#cart-paypal').html($(response).find('#cart-paypal').html());
        $('#cart-paypal').css('opacity',1.00);

        $('#cart-vantiv').html($(response).find('#cart-vantiv').html());
        $('#cart-vantiv').css('opacity',1.00);
      }
    });
  });



  $('[data-action="gateway_process"]').click(function() {
    $('form').find('[type="submit"]').attr('disabled',true);

    $('.gateway-paypal').css('opacity',0.50);

    $('#form-gateway').val($(this).data('gateway'));

    $.ajax({
      type: 'POST',
      url: 'index.php',
      data: 'gateway='+$(this).data('gateway'),
      success: function(data) {
        data = jQuery.parseJSON(data);

        $('.error').remove();

        $('.error-data').removeClass('error-data');

        if(data.redirect) {
          window.location = data.redirect;
        }

        if(data.alert) {
          $('form').find('[type="submit"]').attr('disabled',false);

          $('form').css('opacity',1.00);

          alert(data.alert);
        }
      }
    });

    return false;
  });

  $(document).on('change','[data-action="product"]',function() {
    $(document).trigger('cart');
  });

  $('[data-action="email"]').change(function() {
    $.ajax({
      type: 'POST',
      url: 'index.php?step=email',
      data: 'email='+$('#form-customer_email').val()
    });
  });

  $('[data-action="country"]').change(function() {
    var country = $(this).val().split('|');

    $('.form-customer_'+$(this).data('field')+'_province').hide();

    $('.form-customer_'+$(this).data('field')+'_state').hide();

    if($('#form-customer_'+$(this).data('field')+'_state-'+country[0]).length) {
      $('#form-customer_'+$(this).data('field')+'_state-'+country[0]).show();

      $('#arrow-state').css('display','inline-block');
    } else {
      $('#form-customer_'+$(this).data('field')+'_province').show();

      $('#arrow-state').hide();
    }

    $('#form-customer_'+$(this).data('field')+'_province').val('');

    $('#form-customer_'+$(this).data('field')+'_zip').val('');

    $('.error').each(function () {
       var id = this.id.replace('error-','');

       if(id.match(/state/)) {
         $('#error-'+id).remove();

         $('#form-'+id).removeClass('error-data');
       }
    });

    $(document).trigger('cart');
  });

  $('[data-action="state"]').change(function() {
    $(document).trigger('cart');
  });

  $('[data-action="zip"]').keyup(function() {
    if($('#form-customer_shipping_country').val().substring(0,2) != "US") return false;

    if($('#form-customer_shipping_zip').val().length < 5) return false;

    $(document).trigger('cart');
  });

  $(document).on('click','[data-action="discount"]',function() {
    var code = prompt("Please enter your code?",$('#form-discount').val());

    $('#form-discount').val(code);

    $(document).trigger('cart');

    return false;
  });

  $(document).on('change','[data-action="phone"]',function() {
    $.ajax({
      type: 'POST',
      url: 'index.php?step=phone',
      data: 'phone='+$('#form-customer_'+$(this).data('field')+'_phone').val()
    });
  });
});


*/


$('[data-action="gateway"]').click(function() {
  $('.error').remove();

  $('.error-data').removeClass('error-data');

  $('#form-gateway').val($(this).data('gateway'));

  $('.gateway').hide();

  var gateway = $(this).data('gateway');

  $('.gateway-'+$(this).data('gateway')).stop().slideDown('fast',function(){

    $('html,body').animate({
      scrollTop: $('.gateway-'+gateway).offset().top
    },500);

  });

  return false;
});

$(document).ready(function() {

  if ($('#countdown').length === 0) {
    return;
  }
  var counter = $('#countdown').html().split(':')[0]*60;

  setInterval(function() {
    counter--;

   if(counter >= 0) {
        var mins = Math.floor(counter / 60) % 60;
        var secs = counter % 60;

        $('#countdown').html(("0"+mins).slice(-2)+':'+("0"+secs).slice(-2));
   } else {
     $('#countdown').html('00:00');

     $('#countdown').parent().parent().fadeOut('fast');

     clearInterval(counter);
   }
  },1000);
});


var clicks=0;
jQuery(document).ready(function($) {
	$('.w-plan').click(function() {
    var layer = $(this).data('w-tab');

    $('.w-plan.w--current').removeClass('w--current');
    $(this).addClass('w--current');

    $('[data-p-tab]').removeClass('w--tab-active');
    $('[data-p-tab="'+layer+'"]').addClass('w--tab-active');

    $('.w--tab-active').find('.w-tab').first().click();
	})

	$('.w-tab').click(function() {
		var layer = $(this).data('w-tab');

    $('.w-tab.w--current').removeClass('w--current');
    $(this).addClass('w--current');

    $('[data-w-tab]').removeClass('w--tab-active');
    $('[data-w-tab="'+layer+'"]').addClass('w--tab-active');

  clicks = clicks+1;
  if(clicks >= 2) {
    $('#form-variant').val($(this).data('variant'));
    $(document).trigger('cart');


  }
  });


  
  	/////////////////////////////////////////////////// Discount popup //////////////////////////////////////////////////////
    $(window).on("load", function() {
    });	
  
    $('.checkout-discount-value').on('DOMSubtreeModified',function(){
      console.log("TTT");
      console.log(checkoutData.cart.localCart.state.discountTotal);
        console.log($(this).text());
  
      if (checkoutData.cart.localCart.state.discountTotal > 0) {
        $(".discount-applied").removeClass("es_hide");
      }
      else {
        $(".discount-applied").addClass("es_hide");
      }
    });
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////// Addon Free Gift ////////////////////////////////////////////////
  window.checkoutReadyCallbacks = window.checkoutReadyCallbacks || [];
  window.checkoutReadyCallbacks.push(() => {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&');
        
    for( var i = 0; i < sURLVariables.length; i ++) {
      var param = sURLVariables[i].split("=");
      if (param[0] == 'addonVariantId') {
        $(".btn-checkout_gift").attr("data-variant-id", param[1]);
      }
    }

    $(".btn-checkout_gift").trigger("click");
  });
////////////////////////////////////////////////////////////////////////////////////////////////////////////////




});

/*
*/
