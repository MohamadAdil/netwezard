/* globals $ */

window.checkoutReadyCallbacks = window.checkoutReadyCallbacks || [];

window.checkoutReadyCallbacks.push(() => {

  const setVariant = async () => {
    console.log('set variant');
    const flavor      = $('#choose-flavor').val();
    let   size        = $("input[name='option1']:checked").val();
    const orderType   = $("input[name='order1']:checked").val();    
    if (flavor === "variety" && size === "eight") {
      size = "twentyfour";
      $(`input[value=${size}]`).parent().find("label").trigger("click");
      $(`.option[data-value="${flavor}"]`).trigger("click");        
      setTimeout(() => {
        $('.custom-selectbox').removeClass('open');
        $('.custom-selectbox .option').removeAttr('tabindex');        
      }, 25);
      
    }

    const newVariant  = variants[orderType][size][flavor]; 
  
  
    if (flavor === "variety") {
      $(`input[value=eight]`).prop("disabled", true);
      $(`input[value=eight]`).closest('.cstm-radio-group').addClass("variety-unavailable");
    } else {
      $(`input[value=eight]`).prop("disabled", false);
      $(".variety-unavailable").removeClass("variety-unavailable");
    }
  
    const descriptions = {
      "variety": "don't want to choose? try them all! thirsty for a party? we've got all the ﬂavors in Bev Ladies' Night variety pack.",
      "rose": "she’sssss crisp, dry and a lil’ fizzy with aromatics of fresh strawberry and raspberry, paired with a crisp white peach finish. she makes friends in the bathroom line. she wears whatever the f@#$% she wants. she calls you a lyft home. spend a night out with rosé and have a hell of a time.",
      "noir": "she’s edgy, dry and a lil’ fizzy - a delicate, coastal pinot, with aromatics of citrus blossoms & fresh pomegranate, paired with a light blackberry finish.",
      "glitz": "introducing the newest gal on the block! bow down 'cause she's the queen. nothing's too much for Glitz! she's all dressed up and ready to celebrate! what we love about her most is her outlook on the world: silver linings and sparkles. zero sugar and all the glam, let's make this holiday season EXTRA AF!",
      "gris": "she’s bright and a lil’ fizzy with light and refreshing notes of elderflower, pear, and a zesty grapefruit finish. she loves goofy dancing. she becomes best friends with everybody's pets. she's cute, but can cut anyone who messes with you! spend a night out with gris and have a hell of a time.",
      "blanc": "she’s zippy and a lil’ fizzy with aromatics of crisp green apple, white nectarine, and a light, fresh, citrus finish. she loves goofy dancing. she becomes best friends with everybody's pets. she's cute, but can cut anyone who messes with you! spend a night out with blanc and have a hell of a time."
    };
    
    $('.current-product-description').html(descriptions[flavor]);
  
  
    const sizes = {
      "eight": "8",
      "twentyfour": "24",
      "fortyeight": "48"
    };
  
    for (const [k,v] of Object.entries(sizes)) {
      if (flavor in variants[orderType][k]) { 
        $(`#price-display-${v}pk`).html('$' + variants[orderType][k][flavor].price.toFixed(0));      
      } else {
        $(`#price-display-${v}pk`).html('&nbsp;');
      }
    }
    
    
    $('.bevpack-image').toArray()[0].src = `/images/varietals/${flavor}-${sizes[size]}.png`;
    
    let newPrice = `$${newVariant.price.toFixed(2)} (${newVariant.discount*100}% OFF)`;
    
    $('.regular-price').html(`REG. PRICE: $${newVariant.original_price.toFixed(2)}`);    
    $('#current-price').html(newPrice);
    
    await window.checkout.apiClient.setCurrentVariant(newVariant.id);
  };


  // Then setup the first variant...

  let [initialOrderType, initialSize, initialFlavor] = findVariety(window.checkout.cart.primaryVariantId);

  $('input[type=radio]').attr("checked", false);
  $(`input[value=${initialSize}]`).parent().find("label").trigger("click");
  $(`input[value=${initialOrderType}]`).parent().find("label").trigger("click");
  $(`.option[data-value="${initialFlavor}"]`).trigger("click");  
  $('.custom-selectbox').removeClass('open');
  $('.custom-selectbox .option').removeAttr('tabindex');

  $(document).on("change", "#choose-flavor", setVariant);

  $(document).on("click", "input[name='option1'], input[name='order1']", setVariant);

  setVariant();
  

  
});


