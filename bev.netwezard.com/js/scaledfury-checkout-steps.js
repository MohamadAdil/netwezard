
/* globals $ */
const setupSwag = () => {

  const swag = {
    koozie:         32481400914017,
    cooler:         37654387785921,
    sweatshirt_xs:  32629300166753,
    sweatshirt_s:   32481023557729,
    sweatshirt_m:   32481023590497,
    sweatshirt_l:   32481023623265,
    sweatshirt_xl:  32629300920417,
    sweatshirt_2xl: 32629301084257,    
  }
  
  $('#add-swag-button').on("click", async (e) => {
    
    const sweatshirt_size = $('#sweatshirt-size').val();
    const sweatshirt_qty  = parseFloat($('#sweatshirt-qty').val());
    const koozie_qty      = parseFloat($('#koozie-qty').val());
    const cooler_qty      = parseFloat($('#cooler-qty').val());
    
    const data = {
      upsellType: "add-grid",
      variants: {
        [swag["koozie"]]: koozie_qty,
        [swag[sweatshirt_size]]: sweatshirt_qty,
        [swag["cooler"]]: cooler_qty 
      },
      upsellPageName: "upsell-swag"       
    };
    
    
    console.log(JSON.stringify(data, null, 4));
    
    if (Object.values(data.variants).some(x => x > 0)) {
      await this.apiClient.acceptUpsell(data);
      window.location =  '/thankyou.html';
    } else {
      alert("You haven't selected any items yet");
    }

  });
};











const setupExtraVarietals = (step) => {
  const container = $(`.checkout-step-${step}`);
  let discountKey = null;
  switch(step) {
  case "4":
    discountKey = "discount20";
    break;
  case "5":
    discountKey = "discount25";
    break;    
  default:
    return;
  }

  const discountVariants = variants[discountKey];
  console.log(container.toArray());
  
  console.log(discountKey);
  
  const getSizeFlavor = () => {
    const  flavor      = $(container).find('.choose-flavor').find('select').val()
    let  size        = $(container).find("input.size-option:checked").val();
    if (size === undefined) {
      size = "twentyfour";
      $(container).find("input.size-option[value='twentyfour']").prop("checked", true);
    }

    return [size, flavor];
  }
    
  const updatePricing = () => {
    let [size, flavor] = getSizeFlavor();
  
    if (flavor === "variety" && size === "eight") {
      size = "twentyfour";
      $(container).find(`input[value=${size}]`).parent().find("label").trigger("click");
      $(container).find(`.option[data-value="${flavor}"]`).trigger("click");        
      setTimeout(() => {
        $(container).find('.custom-selectbox').removeClass('open');
        $(container).find('.custom-selectbox .option').removeAttr('tabindex');        
      }, 25);
    
    }
    if (flavor === "variety") {
      $(container).find(`input[value=eight]`).prop("disabled", true);
      $(container).find(`input[value=eight]`).closest('.cstm-radio-group').addClass("variety-unavailable");
    } else {
      $(container).find(`input[value=eight]`).prop("disabled", false);
      $(container).find(".variety-unavailable").removeClass("variety-unavailable");
    }    

    const descriptions = {
      "variety": "don't want to choose? try them all! thirsty for a party? we've got all the ﬂavors in Bev Ladies' Night variety pack.",
      "rose": "she’s crisp, dry and a lil’ fizzy with aromatics of fresh strawberry and raspberry, paired with a crisp white peach finish. she makes friends in the bathroom line. she wears whatever the f@#$% she wants. she calls you a lyft home. spend a night out with rosé and have a hell of a time.",
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
      if (flavor in discountVariants[k]) { 
        $(container).find(`.price-display-${v}pk`).html('$' + discountVariants[k][flavor].price.toFixed(0));      
      } else {
        $(container).find(`.price-display-${v}pk`).html('&nbsp;');
      }
    }

    $('.bevpack-image').toArray()[0].src = `images/${flavor}-${sizes[size]}.png`;
  
  };

  updatePricing();
  $(container).find('.choose-flavor').find('select').on("change", updatePricing);

  $(container).find(".upgrade-order-btn").on("click", async () => {

    const [size, flavor] = getSizeFlavor();
    console.log(size, flavor);
    const variant = discountVariants[size][flavor];
    
    const req = {
      upsellType: "add-variant",
      upsellParam1: variant.id,
      nextUrl: '/checkout-steps.html?step=6&message=upsell-accepted', 
      upsellPageName: window.checkout.settings.upsellPageName
        
    };

    await window.checkout.apiClient.acceptUpsell(req);
    window.location = req.nextUrl;
    


  });
  window.updatePricing = updatePricing;
  
  
  
};









const setProgressBar = (step, maxSteps) => {
  const percent = (parseFloat(step) / maxSteps) * 100;  
  $('.progress-bar').width(`${percent.toFixed(2)}%`);  
};




const setupSteps = () => {
  window.checkoutReadyCallbacks = window.checkoutReadyCallbacks || [];
  window.checkoutReadyCallbacks.push(()=> {
    let [initialOrderType, initialSize, initialFlavor] = findVariety(window.checkout.cart.primaryVariantId);
    const params = new URLSearchParams(window.location.search);
    let step = params.get("step") || "1";
    let message = params.get("message") || null;

    if (message === 'upsell-accepted') {
      $('.upsell-accepted').show();
    }

    if (message === 'order-confirmed') {
      $('.order-confirmed').show();
    }

    
   
    

    if (step === "1" || step == "2") {
      if (initialSize == "eight") {
        $(`.checkout-step-1`).show();         
        setProgressBar(2, 6);   
        return;
      }
      if (initialSize == "twentyfour") {
        $(`.checkout-step-2`).show();            
        setProgressBar(2, 6);   
        return;
      }
      
      if (initialSize == "fortyeight") {
        step = "3"; // FALLS THROUGH!
      }  
    }
          
    if (step === "3" && initialOrderType === "subscription") {
      step = "4";
    }
    
    setProgressBar(step, 6);   
    
    $(`.checkout-step-${step}`).show();       
    
    if (step === "4" || step === "5") {
      setupExtraVarietals(step);
    } 
    

    
  });
};


$(function() {
  setupSwag();  
  setupSteps();
  
  $(document).on("click", ".close-checkout-message", (e) => {
    $(e.currentTarget).parent().hide();
  });
  
  setTimeout(() => {
    $('.checkout-message').fadeOut();
  }, 3000);
  
});